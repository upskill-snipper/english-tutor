function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString(36);
}

function generateId() {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

function generateCertId() {
  const hex = () => Math.floor(Math.random() * 16).toString(16);
  return [
    Array.from({length: 8}, hex).join(''),
    Array.from({length: 4}, hex).join(''),
    '4' + Array.from({length: 3}, hex).join(''),
    (Math.floor(Math.random() * 4) + 8).toString(16) + Array.from({length: 3}, hex).join(''),
    Array.from({length: 12}, hex).join(''),
  ].join('-');
}

const STORAGE_PREFIX = 'learnright_';

export function getUsers() {
  const data = localStorage.getItem(STORAGE_PREFIX + 'users');
  return data ? JSON.parse(data) : [];
}

export function saveUsers(users) {
  localStorage.setItem(STORAGE_PREFIX + 'users', JSON.stringify(users));
}

export function getCurrentUser() {
  const data = localStorage.getItem(STORAGE_PREFIX + 'current_user');
  if (!data) return null;
  const { userId, timestamp } = JSON.parse(data);
  if (Date.now() - timestamp > 7 * 24 * 60 * 60 * 1000) {
    localStorage.removeItem(STORAGE_PREFIX + 'current_user');
    return null;
  }
  const users = getUsers();
  return users.find(u => u.id === userId) || null;
}

export function setCurrentUser(userId) {
  localStorage.setItem(STORAGE_PREFIX + 'current_user', JSON.stringify({ userId, timestamp: Date.now() }));
}

export function logout() {
  localStorage.removeItem(STORAGE_PREFIX + 'current_user');
}

export function login(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user) return { success: false, error: 'No account found with that email address' };
  if (user.password !== simpleHash(password)) return { success: false, error: 'Incorrect password' };
  user.lastActive = Date.now();
  saveUsers(users);
  setCurrentUser(user.id);
  return { success: true, user };
}

export function register(name, email, password, examBoard = 'Not sure yet') {
  const users = getUsers();
  if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
    return { success: false, error: 'An account with that email already exists' };
  }
  if (password.length < 8) {
    return { success: false, error: 'Password must be at least 8 characters' };
  }
  const newUser = {
    id: generateId(),
    name,
    email,
    password: simpleHash(password),
    role: 'student',
    examBoard,
    enrolledCourses: [],
    completedCourses: [],
    certificates: [],
    createdAt: Date.now(),
    lastActive: Date.now(),
  };
  saveUsers([...users, newUser]);
  setCurrentUser(newUser.id);
  return { success: true, user: newUser };
}

export function getExamBoard(userId) {
  const users = getUsers();
  const user = users.find(u => u.id === userId);
  return user?.examBoard || 'Not sure yet';
}

export function setExamBoard(userId, board) {
  const users = getUsers();
  const userIdx = users.findIndex(u => u.id === userId);
  if (userIdx < 0) return false;
  users[userIdx].examBoard = board;
  saveUsers(users);
  return true;
}

export function getProgress() {
  const data = localStorage.getItem(STORAGE_PREFIX + 'progress');
  return data ? JSON.parse(data) : {};
}

export function saveProgress(progress) {
  localStorage.setItem(STORAGE_PREFIX + 'progress', JSON.stringify(progress));
}

export function getUserProgress(userId, courseId) {
  const all = getProgress();
  return all?.[userId]?.[courseId] || {
    completedModules: [],
    quizScores: {},
    assessmentScore: null,
    assessmentPassed: false,
    completedAt: null,
  };
}

export function markModuleComplete(userId, courseId, moduleId, quizScore) {
  const all = getProgress();
  if (!all[userId]) all[userId] = {};
  if (!all[userId][courseId]) all[userId][courseId] = {
    completedModules: [],
    quizScores: {},
    assessmentScore: null,
    assessmentPassed: false,
    completedAt: null,
  };
  const cp = all[userId][courseId];
  if (!cp.completedModules.includes(moduleId)) {
    cp.completedModules.push(moduleId);
  }
  if (quizScore !== undefined) {
    cp.quizScores[moduleId] = quizScore;
  }
  saveProgress(all);
}

export function saveAssessmentResult(userId, courseId, score, passed) {
  const all = getProgress();
  if (!all[userId]) all[userId] = {};
  if (!all[userId][courseId]) all[userId][courseId] = {
    completedModules: [],
    quizScores: {},
    assessmentScore: null,
    assessmentPassed: false,
    completedAt: null,
  };
  all[userId][courseId].assessmentScore = score;
  all[userId][courseId].assessmentPassed = passed;
  if (passed) {
    all[userId][courseId].completedAt = Date.now();
  }
  saveProgress(all);

  // Also save to assessment history for predicted grades
  saveAssessmentToHistory(userId, {
    courseId,
    score,
    maxScore: 100,
  });

  if (passed) {
    const users = getUsers();
    const userIdx = users.findIndex(u => u.id === userId);
    if (userIdx >= 0) {
      const certId = generateCertId();
      const cert = {
        id: certId,
        courseId,
        issuedAt: Date.now(),
        score,
      };
      if (!users[userIdx].certificates) users[userIdx].certificates = [];
      users[userIdx].certificates = users[userIdx].certificates.filter(c => c.courseId !== courseId);
      users[userIdx].certificates.push(cert);
      if (!users[userIdx].completedCourses) users[userIdx].completedCourses = [];
      if (!users[userIdx].completedCourses.includes(courseId)) {
        users[userIdx].completedCourses.push(courseId);
      }
      saveUsers(users);
      return cert;
    }
  }
  return null;
}

export function enrollUser(userId, courseId) {
  const users = getUsers();
  const userIdx = users.findIndex(u => u.id === userId);
  if (userIdx < 0) return false;
  if (!users[userIdx].enrolledCourses) users[userIdx].enrolledCourses = [];
  if (!users[userIdx].enrolledCourses.includes(courseId)) {
    users[userIdx].enrolledCourses.push(courseId);
    saveUsers(users);
  }
  return true;
}

export function getPracticeProgress() {
  const data = localStorage.getItem(STORAGE_PREFIX + 'practice');
  return data ? JSON.parse(data) : { attempts: 0, streak: 0, lastAttempt: null, history: [] };
}

export function savePracticeAttempt(questionId, selfRating, timeSpent) {
  const progress = getPracticeProgress();
  const now = Date.now();
  const lastDate = progress.lastAttempt ? new Date(progress.lastAttempt).toDateString() : null;
  const today = new Date(now).toDateString();

  progress.attempts += 1;
  if (lastDate === today) {
    // same day, streak unchanged
  } else if (lastDate === new Date(now - 86400000).toDateString()) {
    progress.streak += 1;
  } else {
    progress.streak = 1;
  }
  progress.lastAttempt = now;
  progress.history.push({ questionId, selfRating, timeSpent, date: now });
  localStorage.setItem(STORAGE_PREFIX + 'practice', JSON.stringify(progress));
  return progress;
}

export function getFlashcardProgress() {
  const data = localStorage.getItem(STORAGE_PREFIX + 'flashcards');
  return data ? JSON.parse(data) : {};
}

export function saveFlashcardProgress(deckId, cardId, known) {
  const all = getFlashcardProgress();
  if (!all[deckId]) all[deckId] = {};
  all[deckId][cardId] = known ? 'known' : 'learning';
  localStorage.setItem(STORAGE_PREFIX + 'flashcards', JSON.stringify(all));
}

// ─── Certificate Helpers ────────────────────────────────────────

export function getCertificates(userId) {
  const users = getUsers();
  const user = users.find(u => u.id === userId);
  return user?.certificates || [];
}

export function hasCertificate(userId, courseId) {
  const certs = getCertificates(userId);
  return certs.some(c => c.courseId === courseId);
}

export function awardCertificate(userId, courseId, courseTitle, score, grade) {
  const users = getUsers();
  const userIdx = users.findIndex(u => u.id === userId);
  if (userIdx < 0) return null;
  if (hasCertificate(userId, courseId)) return getCertificates(userId).find(c => c.courseId === courseId);
  const certId = generateCertId();
  const cert = {
    id: certId,
    courseId,
    courseTitle,
    score,
    grade,
    issuedAt: Date.now(),
  };
  if (!users[userIdx].certificates) users[userIdx].certificates = [];
  users[userIdx].certificates.push(cert);
  if (!users[userIdx].completedCourses) users[userIdx].completedCourses = [];
  if (!users[userIdx].completedCourses.includes(courseId)) {
    users[userIdx].completedCourses.push(courseId);
  }
  saveUsers(users);
  return cert;
}

// ─── Predicted Grades Helpers ───────────────────────────────────

export function getCompletedAssessmentCount(userId) {
  const progress = getProgress();
  const userProgress = progress[userId] || {};
  let count = 0;
  for (const courseId of Object.keys(userProgress)) {
    if (userProgress[courseId]?.assessmentPassed) {
      count++;
    }
  }
  return count;
}

export function getAllAssessmentScores(userId) {
  const progress = getProgress();
  const userProgress = progress[userId] || {};
  const scores = [];
  for (const courseId of Object.keys(userProgress)) {
    const cp = userProgress[courseId];
    if (cp.assessmentPassed && cp.assessmentScore !== null && cp.assessmentScore !== undefined) {
      scores.push({
        courseId,
        score: cp.assessmentScore,
        date: cp.completedAt || Date.now(),
      });
    }
  }
  // Sort by date ascending (oldest first)
  return scores.sort((a, b) => a.date - b.date);
}

export function calculatePredictedGrade(scores) {
  // scores: array of { courseId, score, date } sorted by date ascending
  if (!scores || scores.length === 0) return null;

  const values = scores.map(s => s.score);

  // Current operating level: simple average
  const currentAvg = values.reduce((a, b) => a + b, 0) / values.length;

  // Predicted grade: last 3 weighted 60%, earlier ones 40%
  let predictedAvg;
  if (values.length <= 3) {
    predictedAvg = currentAvg;
  } else {
    const recent = values.slice(-3);
    const earlier = values.slice(0, -3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const earlierAvg = earlier.reduce((a, b) => a + b, 0) / earlier.length;
    predictedAvg = recentAvg * 0.6 + earlierAvg * 0.4;
  }

  // Potential grade: improve weakest areas by 15%
  const potentialValues = values.map(s => Math.min(100, s + 15));
  const potentialAvg = potentialValues.reduce((a, b) => a + b, 0) / potentialValues.length;

  // Trend: compare last 3 average to previous 3 average
  let trend = 'stable';
  if (values.length >= 4) {
    const last3 = values.slice(-3);
    const prev = values.slice(-6, -3);
    if (prev.length > 0) {
      const last3Avg = last3.reduce((a, b) => a + b, 0) / last3.length;
      const prevAvg = prev.reduce((a, b) => a + b, 0) / prev.length;
      if (last3Avg > prevAvg + 3) trend = 'improving';
      else if (last3Avg < prevAvg - 3) trend = 'declining';
    }
  }

  function toGrade(pct) {
    if (pct >= 90) return 9;
    if (pct >= 80) return '7-8';
    if (pct >= 70) return 6;
    if (pct >= 60) return 5;
    if (pct >= 50) return 4;
    if (pct >= 40) return 3;
    return '1-2';
  }

  return {
    currentAvg: Math.round(currentAvg),
    currentGrade: toGrade(currentAvg),
    predictedAvg: Math.round(predictedAvg),
    predictedGrade: toGrade(predictedAvg),
    potentialAvg: Math.round(potentialAvg),
    potentialGrade: toGrade(potentialAvg),
    trend,
  };
}

// ─── Assessment History (for Predicted Grades) ─────────────────

export function getAssessmentHistory(userId) {
  const data = localStorage.getItem(STORAGE_PREFIX + 'assessment_history');
  const all = data ? JSON.parse(data) : {};
  return all[userId] || [];
}

export function saveAssessmentToHistory(userId, { courseId, board, specId, score, maxScore, skillBreakdown }) {
  const data = localStorage.getItem(STORAGE_PREFIX + 'assessment_history');
  const all = data ? JSON.parse(data) : {};
  if (!all[userId]) all[userId] = [];

  all[userId].push({
    id: generateId(),
    courseId,
    board: board || 'AQA',
    specId: specId || 'gcse-lang',
    score,
    maxScore: maxScore || 100,
    percentage: Math.round((score / (maxScore || 100)) * 100),
    skillBreakdown: skillBreakdown || {},
    timestamp: Date.now(),
  });

  // Cap history at 200 entries
  if (all[userId].length > 200) {
    all[userId] = all[userId].slice(-200);
  }

  localStorage.setItem(STORAGE_PREFIX + 'assessment_history', JSON.stringify(all));
  return all[userId];
}

export function getTotalScoredActivities(userId) {
  const progress = getProgress();
  const userProgress = progress[userId] || {};
  const practice = getPracticeProgress();
  const assessmentHistory = getAssessmentHistory(userId);

  // Count quiz completions
  let quizCount = 0;
  for (const courseId of Object.keys(userProgress)) {
    quizCount += Object.keys(userProgress[courseId]?.quizScores || {}).length;
  }

  return quizCount + assessmentHistory.length + (practice.history?.length || 0);
}

export function seedDemoData() {
  const users = getUsers();
  if (users.length > 0) return;

  const adminUser = {
    id: 'admin-001',
    name: 'Admin User',
    email: 'admin@learnright.com',
    password: simpleHash('Admin2026!'),
    role: 'admin',
    enrolledCourses: [],
    completedCourses: [],
    certificates: [],
    createdAt: Date.now() - 30 * 24 * 60 * 60 * 1000,
    lastActive: Date.now(),
  };

  const studentUser = {
    id: 'user-001',
    name: 'Alex Thompson',
    email: 'student@learnright.com',
    password: simpleHash('Student2026!'),
    role: 'student',
    enrolledCourses: ['ks3-reading'],
    completedCourses: [],
    certificates: [],
    createdAt: Date.now() - 14 * 24 * 60 * 60 * 1000,
    lastActive: Date.now(),
  };

  saveUsers([adminUser, studentUser]);

  const progress = {
    'user-001': {
      'ks3-reading': {
        completedModules: ['ks3r-m1'],
        quizScores: { 'ks3r-m1': 75 },
        assessmentScore: null,
        assessmentPassed: false,
        completedAt: null,
      },
    },
  };
  saveProgress(progress);
}
