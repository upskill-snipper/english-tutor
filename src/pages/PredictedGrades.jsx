import { Link } from 'react-router-dom';
import {
  TrendingUp, TrendingDown, Minus, Target, ArrowRight, Zap,
  BookOpen, Award, Lock, Star, ArrowUpRight,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import ProgressRing from '../components/ProgressRing';
import COURSES from '../data/courseData';
import {
  getCurrentUser, getCompletedAssessmentCount, getAllAssessmentScores,
  calculatePredictedGrade,
} from '../utils/auth';

function gradeColor(grade) {
  const g = String(grade);
  if (g === '9' || g === '7-8') return '#10b981';
  if (g === '6' || g === '5') return '#f59e0b';
  if (g === '4' || g === '3') return '#f97316';
  return '#ef4444';
}

export default function PredictedGrades() {
  const user = getCurrentUser();
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

  if (!prediction) return null;

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
  // Based on weakest scores, suggest courses the student hasn't completed yet
  const completedCourseIds = new Set(scores.map(s => s.courseId));
  const enrolledIds = new Set(user.enrolledCourses || []);
  const weakCourseIds = weakest.map(w => w.courseId);

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

  const cardStyle = {
    background: '#111827', border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '12px', padding: '1.5rem',
  };

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <TrendingUp size={24} color="#10b981" />
          <h1 style={{ fontSize: '1.75rem', fontWeight: 900 }}>Predicted Grades</h1>
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
            <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>If you improve weak areas by 15%</p>
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

        {/* ─── F) Strengths & Weaknesses ─────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {/* Strengths */}
          <div style={cardStyle}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Star size={18} color="#10b981" /> Top Strengths
            </h2>
            {strongest.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: i < strongest.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <span style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>{s.title}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10b981' }}>{s.score}%</span>
              </div>
            ))}
          </div>

          {/* Weaknesses */}
          <div style={cardStyle}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Target size={18} color="#f59e0b" /> Areas to Improve
            </h2>
            {weakest.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: i < weakest.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <span style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>{s.title}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f59e0b' }}>{s.score}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── E) Course Recommendations ─────────────── */}
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
