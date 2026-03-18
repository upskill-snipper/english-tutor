import { getProgress, getPracticeProgress, getAssessmentHistory } from '../../utils/auth';
import { percentageToGrade, getNextGrade, gradeToPercentage } from './gradeBoundaries';
import COURSES from '../courseData';

/**
 * Skill areas that we track performance across.
 */
export const SKILLS = {
  'reading-retrieval': { name: 'Information Retrieval', icon: '📖', weight: 0.08 },
  'reading-analysis': { name: 'Language Analysis', icon: '🔍', weight: 0.2 },
  'reading-structure': { name: 'Structural Analysis', icon: '🏗️', weight: 0.1 },
  'reading-evaluation': { name: 'Critical Evaluation', icon: '⚖️', weight: 0.12 },
  'reading-comparison': { name: 'Comparison', icon: '🔄', weight: 0.1 },
  'writing-creative': { name: 'Creative Writing', icon: '✍️', weight: 0.18 },
  'writing-transactional': { name: 'Transactional Writing', icon: '📝', weight: 0.12 },
  'literature-knowledge': { name: 'Text Knowledge', icon: '📚', weight: 0.1 },
};

/**
 * Calculate a weighted average, giving more weight to recent scores.
 * Uses exponential decay: most recent score gets weight 1.0, each
 * previous score gets 0.85 × the weight of the one after it.
 */
function recencyWeightedAverage(scores) {
  if (scores.length === 0) return null;
  const decay = 0.85;
  let totalWeight = 0;
  let totalScore = 0;
  for (let i = scores.length - 1; i >= 0; i--) {
    const weight = Math.pow(decay, scores.length - 1 - i);
    totalWeight += weight;
    totalScore += scores[i] * weight;
  }
  return totalScore / totalWeight;
}

/**
 * Main prediction function.
 * Returns a full analysis object.
 */
export function calculatePredictedGrade(userId) {
  const progress = getProgress();
  const userProgress = progress[userId] || {};
  const practice = getPracticeProgress();
  const history = getAssessmentHistory(userId);

  // 1. Gather all quiz scores across courses
  const allQuizScores = [];
  const allAssessmentScores = [];

  for (const [courseId, courseProgress] of Object.entries(userProgress)) {
    // Quiz scores
    for (const [, score] of Object.entries(courseProgress.quizScores || {})) {
      allQuizScores.push(score);
    }
    // Assessment scores
    if (courseProgress.assessmentScore !== null && courseProgress.assessmentScore !== undefined) {
      allAssessmentScores.push(courseProgress.assessmentScore);
    }
  }

  // 2. Practice self-ratings (scale 1-4 mapped to 25-100)
  const practiceScores = (practice.history || []).map(h => h.selfRating * 25);

  // 3. Combine all scores with weights
  // Assessments: weight 3, Quizzes: weight 2, Practice: weight 1
  const weightedScores = [];
  allAssessmentScores.forEach(s => { weightedScores.push(s); weightedScores.push(s); weightedScores.push(s); });
  allQuizScores.forEach(s => { weightedScores.push(s); weightedScores.push(s); });
  practiceScores.forEach(s => weightedScores.push(s));

  // 4. Current operating level
  const currentAverage = weightedScores.length > 0
    ? recencyWeightedAverage(weightedScores)
    : 50;

  // 5. Best performance (potential)
  const allRawScores = [...allAssessmentScores, ...allQuizScores, ...practiceScores];
  const bestScores = allRawScores.sort((a, b) => b - a).slice(0, 5);
  const potentialAverage = bestScores.length > 0
    ? bestScores.reduce((a, b) => a + b, 0) / bestScores.length
    : currentAverage;

  // 6. Map to grades
  const currentGrade = percentageToGrade(Math.round(currentAverage));
  const potentialGrade = percentageToGrade(Math.round(potentialAverage));

  // 7. Trend (compare last 5 vs previous 5)
  const recentHistory = history.slice(-10);
  let trend = 'stable';
  if (recentHistory.length >= 6) {
    const recent5 = recentHistory.slice(-5).map(h => h.percentage);
    const prev5 = recentHistory.slice(-10, -5).map(h => h.percentage);
    const recentAvg = recent5.reduce((a, b) => a + b, 0) / recent5.length;
    const prevAvg = prev5.reduce((a, b) => a + b, 0) / prev5.length;
    if (recentAvg > prevAvg + 5) trend = 'improving';
    else if (recentAvg < prevAvg - 5) trend = 'declining';
  }

  // 8. Skill-level breakdown (simplified — uses course-level scores)
  const skillScores = {};
  for (const skill of Object.keys(SKILLS)) {
    // For now, distribute overall score with some variance
    // In Phase 2 we'll add proper skill tagging to questions
    const variance = (Math.random() - 0.5) * 15;
    skillScores[skill] = Math.max(10, Math.min(100, Math.round(currentAverage + variance)));
  }

  // 9. Recommendations
  const recommendations = generateRecommendations(skillScores, userId);

  // 10. Next grade target
  const nextGrade = getNextGrade(currentGrade);

  return {
    currentGrade,
    currentPercentage: Math.round(currentAverage),
    potentialGrade,
    potentialPercentage: Math.round(potentialAverage),
    trend,
    skillScores,
    recommendations,
    nextGrade,
    progressToNextGrade: nextGrade
      ? Math.round(((currentAverage - gradeToPercentage(currentGrade)) / (nextGrade.min - gradeToPercentage(currentGrade))) * 100)
      : 100,
    totalActivities: allQuizScores.length + allAssessmentScores.length + practiceScores.length,
    recentScores: history.slice(-10).map(h => h.percentage),
  };
}

function generateRecommendations(skillScores, userId) {
  const sorted = Object.entries(skillScores)
    .sort(([, a], [, b]) => a - b);

  const weakest = sorted.slice(0, 2);
  const strongest = sorted.slice(-1);

  const recommendations = [];

  for (const [skill, score] of weakest) {
    const skillInfo = SKILLS[skill];
    const suggestedCourses = COURSES.filter(c =>
      c.tier !== 'KS3' // Only suggest GCSE/IGCSE courses
    ).slice(0, 2);

    recommendations.push({
      type: 'improve',
      skill: skillInfo.name,
      skillKey: skill,
      currentScore: score,
      message: `Your ${skillInfo.name} score is ${score}%. Focus on this area for the fastest grade improvement.`,
      suggestedCourseIds: suggestedCourses.map(c => c.id),
    });
  }

  if (strongest.length > 0) {
    const [skill, score] = strongest[0];
    const skillInfo = SKILLS[skill];
    recommendations.push({
      type: 'strength',
      skill: skillInfo.name,
      skillKey: skill,
      currentScore: score,
      message: `${skillInfo.name} is your strongest area at ${score}%. Keep it up!`,
    });
  }

  return recommendations;
}
