import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp, TrendingDown, Minus, Target, ArrowRight, Zap,
  BookOpen, Award, Lock, Star, ArrowUpRight, Flame, BarChart3,
  Lightbulb, ChevronRight,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import ProgressRing from '../components/ProgressRing';
import COURSES from '../data/courseData';
import {
  getCurrentUser, getCompletedAssessmentCount, getAllAssessmentScores,
  calculatePredictedGrade,
} from '../utils/auth';

const STORAGE_PREFIX = 'learnright_';
const STREAK_KEY = STORAGE_PREFIX + 'login_dates';

function gradeColor(grade) {
  const g = String(grade);
  if (g === '9' || g === '7-8') return '#10b981';
  if (g === '6' || g === '5') return '#f59e0b';
  if (g === '4' || g === '3') return '#f97316';
  return '#ef4444';
}

function barColor(score) {
  if (score >= 80) return '#10b981';
  if (score >= 60) return '#f59e0b';
  if (score >= 40) return '#f97316';
  return '#ef4444';
}

// ─── Study Streak Helpers ──────────────────────────────────────
function recordLoginDate() {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const raw = localStorage.getItem(STREAK_KEY);
  let dates = [];
  if (raw) {
    try { dates = JSON.parse(raw); } catch { dates = []; }
  }
  if (!dates.includes(today)) {
    dates.push(today);
    // Keep only last 365 days
    if (dates.length > 365) dates.splice(0, dates.length - 365);
    localStorage.setItem(STREAK_KEY, JSON.stringify(dates));
  }
  return dates;
}

function calculateStreak(dates) {
  if (!dates || dates.length === 0) return 0;
  const sorted = [...dates].sort().reverse(); // newest first
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

  // Streak must include today or yesterday
  if (sorted[0] !== today && sorted[0] !== yesterday) return 0;

  let streak = 1;
  for (let i = 0; i < sorted.length - 1; i++) {
    const current = new Date(sorted[i]);
    const prev = new Date(sorted[i + 1]);
    const diffDays = Math.round((current - prev) / 86400000);
    if (diffDays === 1) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

// ─── Next Steps Generator ──────────────────────────────────────
function generateNextSteps(prediction, weakest, notStartedCourses, scores) {
  const steps = [];
  const avg = prediction.predictedAvg;

  // Based on predicted grade level
  if (avg < 50) {
    steps.push({
      priority: 'high',
      text: 'Focus on foundational skills — aim to bring your average above 50% by revisiting your weakest topics.',
      color: '#ef4444',
    });
  } else if (avg < 70) {
    steps.push({
      priority: 'medium',
      text: 'You are on track for a solid pass. Target your weakest areas to push into the higher grades.',
      color: '#f59e0b',
    });
  } else {
    steps.push({
      priority: 'low',
      text: 'Strong performance! Maintain your momentum and aim for perfection in your weaker topics.',
      color: '#10b981',
    });
  }

  // Based on weakest areas
  if (weakest.length > 0) {
    const weakNames = weakest.slice(0, 2).map(w => w.title).join(' and ');
    steps.push({
      priority: 'high',
      text: `Prioritise revising ${weakNames} — these are currently pulling your average down.`,
      color: '#f59e0b',
    });
  }

  // Based on courses not yet started
  if (notStartedCourses.length > 0) {
    const courseName = notStartedCourses[0].title;
    steps.push({
      priority: 'medium',
      text: `Start "${courseName}" to broaden your skill set and fill gaps in your knowledge.`,
      color: '#6366f1',
    });
  }

  // Based on trend
  if (prediction.trend === 'declining') {
    steps.push({
      priority: 'high',
      text: 'Your recent scores show a downward trend. Consider revisiting earlier material before moving on.',
      color: '#ef4444',
    });
  } else if (prediction.trend === 'improving') {
    steps.push({
      priority: 'low',
      text: 'Great progress! Your scores are trending upward. Keep the same study habits going.',
      color: '#10b981',
    });
  }

  // Based on assessment count
  if (scores.length < 8) {
    steps.push({
      priority: 'medium',
      text: `Complete ${8 - scores.length} more assessment${8 - scores.length !== 1 ? 's' : ''} to get a more accurate predicted grade.`,
      color: '#94a3b8',
    });
  }

  return steps.slice(0, 4);
}

export default function PredictedGrades() {
  const user = getCurrentUser();
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const loginDates = recordLoginDate();
    setStreak(calculateStreak(loginDates));
  }, []);

  if (!user) return null;

  const assessmentCount = getCompletedAssessmentCount(user.id);
  const UNLOCK_THRESHOLD = 5;
  const isUnlocked = assessmentCount >= UNLOCK_THRESHOLD;
  const remaining = UNLOCK_THRESHOLD - assessmentCount;

  // ─── Locked state ───────────────────────────────────────────
  if (!isUnlocked) {
    const progress = Math.round((assessmentCount / UNLOCK_THRESHOLD) * 100);
    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
        <Navbar />
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '4rem 1.5rem', textAlign: 'center' }}>
          <div style={{
            width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 2rem',
            background: 'rgba(245,158,11,0.1)', border: '2px solid rgba(245,158,11,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Lock size={36} color="#f59e0b" />
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem' }}>Predicted Grades</h1>
          <p style={{ color: '#94a3b8', marginBottom: '2rem', lineHeight: 1.7 }}>
            Complete <strong style={{ color: '#f1f5f9' }}>{remaining} more</strong> assessment{remaining !== 1 ? 's' : ''} to unlock your predicted grades.
          </p>

          <div style={{ maxWidth: '400px', margin: '0 auto 2rem' }}>
            <div className="progress-track" style={{ height: '12px', marginBottom: '0.5rem' }}>
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <p style={{ color: '#64748b', fontSize: '0.8rem' }}>{assessmentCount} / {UNLOCK_THRESHOLD} assessments completed</p>
          </div>

          {/* Study Streak (shown even in locked state) */}
          {streak > 0 && (
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)',
              borderRadius: '9999px', padding: '0.5rem 1.25rem', marginBottom: '2rem',
            }}>
              <Flame size={18} color="#f59e0b" />
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f59e0b' }}>{streak} day streak</span>
            </div>
          )}

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/courses" className="btn-primary" style={{ textDecoration: 'none' }}>
              <BookOpen size={16} /> Browse Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ─── Unlocked: compute grades ───────────────────────────────
  const scores = getAllAssessmentScores(user.id);
  const prediction = calculatePredictedGrade(scores);

  if (!prediction) {
    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
        <Navbar />
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '4rem 1.5rem', textAlign: 'center' }}>
          <BarChart3 size={48} color="#64748b" style={{ marginBottom: '1.5rem' }} />
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>No Score Data Available</h1>
          <p style={{ color: '#94a3b8', marginBottom: '2rem', lineHeight: 1.7 }}>
            Your assessments have been recorded but no scores were saved. Try retaking an assessment to generate your predicted grades.
          </p>
          <Link to="/courses" className="btn-primary" style={{ textDecoration: 'none' }}>
            <BookOpen size={16} /> Browse Courses
          </Link>
        </div>
      </div>
    );
  }

  const TrendIcon = prediction.trend === 'improving' ? TrendingUp
    : prediction.trend === 'declining' ? TrendingDown
    : Minus;
  const trendColor = prediction.trend === 'improving' ? '#10b981'
    : prediction.trend === 'declining' ? '#ef4444'
    : '#94a3b8';
  const trendLabel = prediction.trend === 'improving' ? 'Improving'
    : prediction.trend === 'declining' ? 'Declining'
    : 'Stable';

  // ─── Strengths & Weaknesses ─────────────────────────────────
  const courseScores = scores.map(s => {
    const course = COURSES.find(c => c.id === s.courseId);
    return { ...s, title: course ? course.title : s.courseId };
  });
  const sorted = [...courseScores].sort((a, b) => a.score - b.score);
  const weakest = sorted.slice(0, 3);
  const strongest = [...courseScores].sort((a, b) => b.score - a.score).slice(0, 3);

  // ─── Course Recommendations ─────────────────────────────────
  const completedCourseIds = new Set(scores.map(s => s.courseId));
  const enrolledIds = new Set(user.enrolledCourses || []);

  // Find related courses that haven't been completed
  const recommendations = COURSES
    .filter(c => !completedCourseIds.has(c.id) && !enrolledIds.has(c.id))
    .slice(0, 3);

  // If we don't have enough unenrolled courses, add enrolled-but-not-completed
  if (recommendations.length < 2) {
    const enrolled = COURSES.filter(c => enrolledIds.has(c.id) && !completedCourseIds.has(c.id));
    for (const c of enrolled) {
      if (recommendations.length >= 3) break;
      if (!recommendations.find(r => r.id === c.id)) recommendations.push(c);
    }
  }

  // ─── Courses not started (for Next Steps) ─────────────────────
  const notStartedCourses = COURSES.filter(
    c => !completedCourseIds.has(c.id) && !enrolledIds.has(c.id)
  ).slice(0, 5);

  // ─── Specific recommendations for weak areas ──────────────────
  const weakRecommendations = weakest.map(w => {
    const course = COURSES.find(c => c.id === w.courseId);
    const relatedCourses = COURSES.filter(c =>
      c.id !== w.courseId &&
      !completedCourseIds.has(c.id) &&
      course && (
        (c.tier && course.tier && c.tier === course.tier) ||
        (c.title && course.title && c.title.toLowerCase().includes(course.title.split(' ')[0].toLowerCase()))
      )
    ).slice(0, 1);
    return {
      ...w,
      suggestion: relatedCourses.length > 0
        ? `Try "${relatedCourses[0].title}" to strengthen this area`
        : `Revisit ${w.title} and focus on the topics you found hardest`,
    };
  });

  // ─── Next Steps ─────────────────────────────────────────────
  const nextSteps = generateNextSteps(prediction, weakest, notStartedCourses, scores);

  // ─── Progress chart data (scores sorted by date) ──────────────
  const maxScore = Math.max(...scores.map(s => s.score), 100);

  const cardStyle = {
    background: '#111827', border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '12px', padding: '1.5rem',
  };

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        {/* ─── Header with Streak ─────────────────────────── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <TrendingUp size={24} color="#10b981" />
            <h1 style={{ fontSize: '1.75rem', fontWeight: 900 }}>Predicted Grades</h1>
          </div>
          {/* Study Streak Badge */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            background: streak >= 7 ? 'rgba(245,158,11,0.15)' : streak >= 3 ? 'rgba(245,158,11,0.1)' : 'rgba(148,163,184,0.1)',
            border: `1px solid ${streak >= 7 ? 'rgba(245,158,11,0.3)' : streak >= 3 ? 'rgba(245,158,11,0.2)' : 'rgba(148,163,184,0.2)'}`,
            borderRadius: '9999px', padding: '0.4rem 1rem',
          }}>
            <Flame size={16} color={streak >= 3 ? '#f59e0b' : '#94a3b8'} />
            <span style={{
              fontSize: '0.85rem', fontWeight: 700,
              color: streak >= 3 ? '#f59e0b' : '#94a3b8',
            }}>
              {streak > 0 ? `${streak} day${streak !== 1 ? 's' : ''} streak` : 'Start your streak!'}
            </span>
          </div>
        </div>
        <p style={{ color: '#94a3b8', marginBottom: '2.5rem' }}>
          Based on your {scores.length} completed assessment{scores.length !== 1 ? 's' : ''}. Keep going to refine your prediction.
        </p>

        {/* ─── Hero grade cards ─────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>

          {/* A) Current Operating Level */}
          <div style={{ ...cardStyle, textAlign: 'center' }}>
            <p style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.06em', marginBottom: '0.75rem' }}>CURRENT LEVEL</p>
            <div style={{
              width: '100px', height: '100px', borderRadius: '50%', margin: '0 auto 1rem',
              background: `${gradeColor(prediction.currentGrade)}15`,
              border: `3px solid ${gradeColor(prediction.currentGrade)}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontSize: '1.75rem', fontWeight: 900, color: gradeColor(prediction.currentGrade) }}>
                {prediction.currentGrade}
              </span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Avg: {prediction.currentAvg}%</p>
          </div>

          {/* B) Predicted Grade */}
          <div style={{ ...cardStyle, textAlign: 'center' }}>
            <p style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.06em', marginBottom: '0.75rem' }}>PREDICTED GRADE</p>
            <ProgressRing progress={prediction.predictedAvg} size={100} strokeWidth={6} />
            <p style={{
              fontSize: '2rem', fontWeight: 900, marginTop: '0.5rem',
              color: gradeColor(prediction.predictedGrade),
            }}>
              Grade {prediction.predictedGrade}
            </p>
          </div>

          {/* C) Potential Grade */}
          <div style={{ ...cardStyle, textAlign: 'center' }}>
            <p style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.06em', marginBottom: '0.75rem' }}>POTENTIAL GRADE</p>
            <div style={{
              width: '100px', height: '100px', borderRadius: '50%', margin: '0 auto 1rem',
              background: `${gradeColor(prediction.potentialGrade)}15`,
              border: `3px dashed ${gradeColor(prediction.potentialGrade)}40`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontSize: '1.75rem', fontWeight: 900, color: gradeColor(prediction.potentialGrade) }}>
                {prediction.potentialGrade}
              </span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>If each score improves by 15%</p>
          </div>

          {/* D) Performance Trend */}
          <div style={{ ...cardStyle, textAlign: 'center' }}>
            <p style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.06em', marginBottom: '0.75rem' }}>TREND</p>
            <div style={{
              width: '100px', height: '100px', borderRadius: '50%', margin: '0 auto 1rem',
              background: `${trendColor}15`, border: `3px solid ${trendColor}40`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <TrendIcon size={40} color={trendColor} />
            </div>
            <p style={{ color: trendColor, fontSize: '0.9rem', fontWeight: 700 }}>{trendLabel}</p>
          </div>
        </div>

        {/* ─── Progress Over Time ──────────────────────── */}
        <div style={{ ...cardStyle, marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BarChart3 size={18} color="#6366f1" /> Progress Over Time
          </h2>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '160px', padding: '0 0.25rem' }}>
            {scores.map((s, i) => {
              const course = COURSES.find(c => c.id === s.courseId);
              const label = course ? course.title : s.courseId;
              const heightPct = Math.max(8, (s.score / 100) * 100);
              const date = new Date(s.date);
              const dateStr = `${date.getDate()}/${date.getMonth() + 1}`;
              return (
                <div key={`${s.courseId}-${s.date}`} style={{
                  flex: 1, maxWidth: '80px', display: 'flex', flexDirection: 'column',
                  alignItems: 'center', height: '100%', justifyContent: 'flex-end',
                }}>
                  {/* Score label */}
                  <span style={{
                    fontSize: '0.65rem', fontWeight: 700, color: '#e2e8f0',
                    marginBottom: '4px',
                  }}>
                    {s.score}%
                  </span>
                  {/* Bar */}
                  <div
                    style={{
                      width: '100%', minWidth: '20px',
                      height: `${heightPct}%`,
                      background: `linear-gradient(to top, ${barColor(s.score)}cc, ${barColor(s.score)}40)`,
                      borderRadius: '4px 4px 0 0',
                      transition: 'height 0.3s ease',
                      position: 'relative',
                    }}
                    title={`${label}: ${s.score}% (${dateStr})`}
                  />
                  {/* Date label */}
                  <span style={{
                    fontSize: '0.6rem', color: '#64748b', marginTop: '6px',
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                    maxWidth: '100%', textAlign: 'center',
                  }}>
                    {dateStr}
                  </span>
                </div>
              );
            })}
          </div>
          {/* Average line indicator */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            marginTop: '1rem', paddingTop: '0.75rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}>
            <div style={{ width: '24px', height: '2px', background: '#6366f1' }} />
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
              Average: {prediction.currentAvg}% across {scores.length} assessment{scores.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* ─── Strengths & Weaknesses ─────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {/* Strengths */}
          <div style={cardStyle}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Star size={18} color="#10b981" /> Top Strengths
            </h2>
            {strongest.map((s, i) => (
              <div key={s.courseId} style={{ padding: '0.6rem 0', borderBottom: i < strongest.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>{s.title}</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10b981' }}>{s.score}%</span>
                </div>
                {/* Mini progress bar */}
                <div style={{ height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.06)' }}>
                  <div style={{ height: '100%', width: `${s.score}%`, borderRadius: '2px', background: '#10b981', transition: 'width 0.3s ease' }} />
                </div>
              </div>
            ))}
          </div>

          {/* Weaknesses with recommendations */}
          <div style={cardStyle}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Target size={18} color="#f59e0b" /> Areas to Improve
            </h2>
            {weakRecommendations.map((s, i) => (
              <div key={s.courseId} style={{ padding: '0.6rem 0', borderBottom: i < weakRecommendations.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>{s.title}</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f59e0b' }}>{s.score}%</span>
                </div>
                {/* Mini progress bar */}
                <div style={{ height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.06)', marginBottom: '0.35rem' }}>
                  <div style={{ height: '100%', width: `${s.score}%`, borderRadius: '2px', background: '#f59e0b', transition: 'width 0.3s ease' }} />
                </div>
                {/* Specific recommendation */}
                <p style={{ fontSize: '0.7rem', color: '#94a3b8', fontStyle: 'italic', margin: 0 }}>
                  {s.suggestion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Next Steps ──────────────────────────────── */}
        <div style={{ ...cardStyle, marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Lightbulb size={18} color="#6366f1" /> Next Steps
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {nextSteps.map((step, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                padding: '0.75rem 1rem',
                background: `${step.color}08`,
                border: `1px solid ${step.color}20`,
                borderRadius: '8px',
              }}>
                <ChevronRight size={16} color={step.color} style={{ marginTop: '2px', flexShrink: 0 }} />
                <p style={{ fontSize: '0.85rem', color: '#e2e8f0', lineHeight: 1.6, margin: 0 }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Course Recommendations ─────────────── */}
        {recommendations.length > 0 && (
          <>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem' }}>Recommended Courses</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
              {recommendations.map(course => (
                <Link key={course.id} to={`/course/${course.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    ...cardStyle,
                    borderLeft: '3px solid #10b981',
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    cursor: 'pointer', transition: 'border-color 0.2s',
                  }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                      background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <BookOpen size={18} color="#10b981" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f1f5f9', marginBottom: '0.2rem' }}>{course.title}</p>
                      <p style={{ fontSize: '0.75rem', color: '#64748b' }}>{course.tier}</p>
                    </div>
                    <ArrowRight size={16} color="#64748b" />
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* ─── Actions ──────────────────────────────── */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/courses" className="btn-primary" style={{ textDecoration: 'none' }}>
            <BookOpen size={16} /> Browse Courses
          </Link>
          <Link to="/dashboard" className="btn-secondary" style={{ textDecoration: 'none' }}>
            <ArrowUpRight size={16} /> Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
