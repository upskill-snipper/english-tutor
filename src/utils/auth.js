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

export function register(name, email, password) {
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
