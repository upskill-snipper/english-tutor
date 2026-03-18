import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Unlock, TrendingUp, Target, Star, BookOpen, ChevronRight } from 'lucide-react';
import COURSES from '../data/courseData';
import {
  getCurrentUser, getProgress, getPracticeProgress,
  getAssessmentHistory, getTotalScoredActivities,
} from '../utils/auth';

function calculateGrade(score) {
  if (score >= 90) return 9;
  if (score >= 80) return 8;
  if (score >= 70) return 7;
  if (score >= 60) return 6;
  if (score >= 50) return 5;
  if (score >= 40) return 4;
  if (score >= 30) return 3;
  if (score >= 20) return 2;
  return 1;
}

function gradeLabel(g) { return `Grade ${g}`; }

function getAllScores(userId) {
  const scores = [];
  const progress = getProgress();
  const userProgress = progress[userId] || {};

  // Quiz scores
  Object.entries(userProgress).forEach(([courseId, p]) => {
    if (p.quizScores) {
      Object.entries(p.quizScores).forEach(([moduleId, score]) => {
        scores.push({ date: Date.now(), score, type: 'quiz', label: courseId });
      });
    }
  });

  // Assessment history
  const history = getAssessmentHistory(userId);
  history.forEach(h => {
    scores.push({ date: h.timestamp, score: h.percentage || h.score, type: 'assessment', label: h.courseId });
  });

  // Practice self-ratings (convert 1-4 scale to %)
  const practice = getPracticeProgress();
  (practice.history || []).forEach(h => {
    scores.push({ date: h.date, score: h.selfRating * 25, type: 'practice', label: h.questionId });
  });

  return scores.sort((a, b) => a.date - b.date);
}

function getWeakAreas(userId) {
  const progress = getProgress();
  const userProgress = progress[userId] || {};
  const areas = [];
  Object.entries(userProgress).forEach(([courseId, p]) => {
    if (p.quizScores && Object.keys(p.quizScores).length > 0) {
      const vals = Object.values(p.quizScores);
      const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
      areas.push({ courseId, avgScore: Math.round(avg), moduleCount: vals.length });
    }
  });
  return areas.sort((a, b) => a.avgScore - b.avgScore).slice(0, 3);
}

export default function PredictedGrades() {
  const user = getCurrentUser();
  const [testCount, setTestCount] = useState(0);
  const [grades, setGrades] = useState(null);
  const [weakAreas, setWeakAreas] = useState([]);

  useEffect(() => {
    if (!user) return;
    const count = getTotalScoredActivities(user.id);
    setTestCount(count);

    const scores = getAllScores(user.id);
    if (scores.length >= 5) {
      const vals = scores.map(s => s.score);
      const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
      const recent = vals.slice(-5);
      const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
      const top25 = [...vals].sort((a, b) => b - a).slice(0, Math.max(1, Math.ceil(vals.length * 0.25)));
      const topAvg = top25.reduce((a, b) => a + b, 0) / top25.length;

      setGrades({
        currentGrade: calculateGrade(avg),
        currentScore: Math.round(avg),
        predictedGrade: calculateGrade(recentAvg),
        predictedScore: Math.round(recentAvg),
        potentialGrade: calculateGrade(topAvg),
        potentialScore: Math.round(topAvg),
        recentScores: scores.slice(-10),
        totalTests: scores.length,
      });
    }

    setWeakAreas(getWeakAreas(user.id));
  }, [user]);

  if (!user) return null;

  const isUnlocked = testCount >= 5 && grades;

  const gradeColor = (grade) => {
    if (grade >= 7) return '#10b981';
    if (grade >= 5) return '#f59e0b';
    return '#ef4444';
  };

  const barColor = (score) => {
    if (score >= 70) return '#10b981';
    if (score >= 50) return '#f59e0b';
    return '#ef4444';
  };

  const getCourseTitle = (courseId) => {
    const course = COURSES.find(c => c.id === courseId);
    return course ? course.title : courseId;
  };

  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
        {isUnlocked
          ? <Unlock size={22} color="#10b981" />
          : <Lock size={22} color="#64748b" />}
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Predicted Grades</h2>
      </div>

      {!isUnlocked ? (
        <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
          <Lock size={40} color="#64748b" style={{ margin: '0 auto 0.75rem' }} />
          <p style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>
            Complete 5 assessments to unlock your predicted grades dashboard
          </p>
          <div style={{ width: '100%', maxWidth: '280px', margin: '0.75rem auto 0', background: '#0f172a', borderRadius: '9999px', height: '10px' }}>
            <div style={{
              height: '10px', borderRadius: '9999px', background: '#10b981',
              width: `${Math.min(100, (testCount / 5) * 100)}%`, transition: 'width 0.5s',
            }} />
          </div>
          <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.5rem' }}>
            {testCount}/5 tests completed
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Grade Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {[
              { icon: Target, label: 'Current Operating Level', grade: grades.currentGrade, sub: `Avg: ${grades.currentScore}%`, iconColor: '#10b981' },
              { icon: TrendingUp, label: 'Predicted Grade', grade: grades.predictedGrade, sub: `Recent: ${grades.predictedScore}%`, iconColor: '#f59e0b' },
              { icon: Star, label: 'You Could Achieve', grade: grades.potentialGrade, sub: `Best: ${grades.potentialScore}%`, iconColor: '#10b981' },
            ].map((card, i) => (
              <div key={i} className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
                <card.icon size={24} color={card.iconColor} style={{ margin: '0 auto 0.5rem' }} />
                <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.25rem' }}>{card.label}</p>
                <p style={{ fontSize: '2.25rem', fontWeight: 900, color: gradeColor(card.grade) }}>
                  {gradeLabel(card.grade)}
                </p>
                <p style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.25rem' }}>{card.sub}</p>
              </div>
            ))}
          </div>

          {/* Score Trend */}
          {grades.recentScores.length > 0 && (
            <div className="card" style={{ padding: '1.25rem' }}>
              <h3 style={{ fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                <TrendingUp size={18} /> Recent Performance
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {grades.recentScores.map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.7rem', color: '#64748b', width: '55px', flexShrink: 0 }}>
                      {s.type === 'assessment' ? 'Exam' : s.type === 'quiz' ? 'Quiz' : 'Practice'}
                    </span>
                    <div style={{ flex: 1, background: '#0f172a', borderRadius: '9999px', height: '14px', overflow: 'hidden' }}>
                      <div style={{
                        height: '14px', borderRadius: '9999px', background: barColor(s.score),
                        width: `${s.score}%`, transition: 'width 0.3s',
                      }} />
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, width: '40px', textAlign: 'right' }}>{s.score}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Weak Areas & Suggestions */}
          {weakAreas.length > 0 && (
            <div className="card" style={{ padding: '1.25rem' }}>
              <h3 style={{ fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                <BookOpen size={18} /> Suggested Next Steps
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {weakAreas.map((area, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0.75rem', background: '#0f172a', borderRadius: '0.5rem',
                  }}>
                    <div>
                      <p style={{ fontWeight: 600, fontSize: '0.85rem' }}>{getCourseTitle(area.courseId)}</p>
                      <p style={{ fontSize: '0.7rem', color: '#64748b' }}>Avg score: {area.avgScore}% — needs improvement</p>
                    </div>
                    <Link to={`/course/${area.courseId}`} className="btn-primary"
                      style={{ textDecoration: 'none', fontSize: '0.75rem', padding: '0.4rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      Review <ChevronRight size={14} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
