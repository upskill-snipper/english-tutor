import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, ArrowRight, CheckCircle, TrendingUp, Lock, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import ProgressRing from '../components/ProgressRing';
import COURSES from '../data/courseData';
import { getCurrentUser, getUserProgress, getPracticeProgress, getCompletedAssessmentCount, getExamBoard, setExamBoard } from '../utils/auth';

export default function Dashboard() {
  const user = getCurrentUser();
  const practice = getPracticeProgress();
  const [examBoardState, setExamBoardState] = useState(() => user ? getExamBoard(user.id) : 'Not sure yet');
  const [showBoardPicker, setShowBoardPicker] = useState(false);

  if (!user) return null;

  const EXAM_BOARDS = ['Not sure yet', 'AQA', 'Edexcel', 'Edexcel (IGCSE)', 'OCR', 'WJEC Eduqas'];

  function handleBoardChange(board) {
    setExamBoard(user.id, board);
    setExamBoardState(board);
    setShowBoardPicker(false);
  }

  // Map display board names to course board field values
  function getBoardFilterValue(displayBoard) {
    if (displayBoard === 'WJEC Eduqas') return 'WJEC';
    if (displayBoard === 'Edexcel (IGCSE)') return 'Edexcel';
    return displayBoard;
  }

  // Get recommended courses prioritised by exam board
  function getRecommendedCourses() {
    const enrolledIds = new Set(user.enrolledCourses || []);
    const available = COURSES.filter(c => !enrolledIds.has(c.id));

    if (examBoardState === 'Not sure yet') return available;

    const boardValue = getBoardFilterValue(examBoardState);
    const isIgcse = examBoardState === 'Edexcel (IGCSE)';

    // Split into matching and non-matching
    const matching = available.filter(c => {
      if (!c.board) return false; // KS3 courses have no board
      if (isIgcse) return c.board === 'Edexcel' && c.tier === 'IGCSE';
      return c.board === boardValue && c.tier !== 'IGCSE';
    });
    const rest = available.filter(c => !matching.includes(c));

    return [...matching, ...rest];
  }

  const enrolled = (user.enrolledCourses || []).map(id => COURSES.find(c => c.id === id)).filter(Boolean);
  const completedCount = (user.completedCourses || []).length;
  const certs = user.certificates || [];

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '0.5rem' }}>
          Welcome back, {user.name.split(' ')[0]}
        </h1>
        <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>Keep up the great work. Here is your progress.</p>

        {/* Exam board badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', position: 'relative' }}>
          <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Exam board:</span>
          <span style={{
            fontSize: '0.8rem', fontWeight: 700, color: '#10b981',
            background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)',
            padding: '0.25rem 0.625rem', borderRadius: '6px',
          }}>
            {examBoardState}
          </span>
          <button onClick={() => setShowBoardPicker(!showBoardPicker)} style={{
            background: 'none', border: '1px solid #1e2d4a', borderRadius: '6px',
            color: '#94a3b8', fontSize: '0.75rem', padding: '0.25rem 0.5rem',
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem',
          }}>
            Change <ChevronDown size={12} />
          </button>
          {showBoardPicker && (
            <div style={{
              position: 'absolute', top: '100%', left: 0, marginTop: '0.5rem', zIndex: 50,
              background: '#111827', border: '1px solid #1e2d4a', borderRadius: '8px',
              padding: '0.5rem 0', minWidth: '180px', boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
            }}>
              {EXAM_BOARDS.map(board => (
                <button key={board} onClick={() => handleBoardChange(board)} style={{
                  display: 'block', width: '100%', textAlign: 'left', padding: '0.5rem 1rem',
                  background: board === examBoardState ? 'rgba(16,185,129,0.1)' : 'none',
                  border: 'none', color: board === examBoardState ? '#10b981' : '#f1f5f9',
                  fontSize: '0.8rem', cursor: 'pointer', fontWeight: board === examBoardState ? 700 : 400,
                }}>
                  {board}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Stats grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
          {[
            { label: 'Enrolled', value: enrolled.length, icon: BookOpen, color: '#10b981' },
            { label: 'Completed', value: completedCount, icon: CheckCircle, color: '#34d399' },
            { label: 'Certificates', value: certs.length, icon: Award, color: '#f59e0b' },
            { label: 'Practice Streak', value: `${practice.streak} day${practice.streak !== 1 ? 's' : ''}`, icon: TrendingUp, color: '#06b6d4' },
          ].map((stat, i) => (
            <div key={i} className="card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: `${stat.color}15`, border: `1px solid ${stat.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <stat.icon size={18} color={stat.color} />
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f1f5f9' }}>{stat.value}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Predicted Grades Banner */}
        {(() => {
          const assessmentCount = getCompletedAssessmentCount(user.id);
          const isGradesUnlocked = assessmentCount >= 5;
          const remaining = 5 - assessmentCount;
          const progress = Math.round((assessmentCount / 5) * 100);
          return (
            <Link to="/predicted-grades" style={{ textDecoration: 'none', display: 'block', marginBottom: '3rem' }}>
              <div className="card" style={{
                padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem',
                borderLeft: `3px solid ${isGradesUnlocked ? '#10b981' : '#f59e0b'}`,
                cursor: 'pointer',
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px', flexShrink: 0,
                  background: isGradesUnlocked ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)',
                  border: `1px solid ${isGradesUnlocked ? 'rgba(16,185,129,0.25)' : 'rgba(245,158,11,0.25)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {isGradesUnlocked
                    ? <TrendingUp size={22} color="#10b981" />
                    : <Lock size={22} color="#f59e0b" />}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 700, fontSize: '1rem', color: '#f1f5f9', marginBottom: '0.25rem' }}>
                    Predicted Grades
                  </p>
                  {isGradesUnlocked ? (
                    <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                      View your predicted grades, strengths, and recommendations
                    </p>
                  ) : (
                    <div>
                      <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                        Complete {remaining} more assessment{remaining !== 1 ? 's' : ''} to unlock
                      </p>
                      <div style={{ maxWidth: '200px', height: '6px', borderRadius: '3px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${progress}%`, borderRadius: '3px', background: '#f59e0b', transition: 'width 0.3s' }} />
                      </div>
                    </div>
                  )}
                </div>
                <ArrowRight size={18} color="#64748b" />
              </div>
            </Link>
          );
        })()}

        {/* My courses */}
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem' }}>My Courses</h2>
        {enrolled.length === 0 ? (
          <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
            <p style={{ color: '#94a3b8', marginBottom: '1.25rem' }}>You have not enrolled in any courses yet.</p>
            <Link to="/courses" className="btn-primary" style={{ textDecoration: 'none' }}>
              Browse Courses <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
            {enrolled.map(course => {
              const prog = getUserProgress(user.id, course.id);
              const done = prog.completedModules.length;
              const total = course.moduleList.length;
              const pct = Math.round((done / total) * 100);
              const nextModule = course.moduleList.find(m => !prog.completedModules.includes(m.id));

              return (
                <div key={course.id} className="card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <span style={{
                        fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.05em',
                        color: '#34d399', background: 'rgba(52,211,153,0.1)',
                        padding: '0.2rem 0.5rem', borderRadius: '4px',
                      }}>{course.tier}</span>
                      <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#f1f5f9', marginTop: '0.5rem', lineHeight: 1.3 }}>
                        {course.title}
                      </h3>
                    </div>
                    <ProgressRing progress={pct} size={48} />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.75rem', color: '#64748b' }}>
                    <span>{done}/{total} modules</span>
                    <span>{pct}%</span>
                  </div>
                  <div className="progress-track" style={{ marginBottom: '1.25rem' }}>
                    <div className="progress-fill" style={{ width: `${pct}%` }} />
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {prog.assessmentPassed ? (
                      <>
                        <span style={{ color: '#10b981', fontWeight: 600, fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <CheckCircle size={14} /> Completed
                        </span>
                        {certs.find(c => c.courseId === course.id) && (
                          <Link to={`/certificate/${certs.find(c => c.courseId === course.id).id}`}
                            className="btn-ghost" style={{ textDecoration: 'none', fontSize: '0.8rem', marginLeft: 'auto' }}>
                            <Award size={14} /> Certificate
                          </Link>
                        )}
                      </>
                    ) : done === total ? (
                      <Link to={`/learn/${course.id}/assessment`} className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                        Take Assessment <ArrowRight size={14} />
                      </Link>
                    ) : nextModule ? (
                      <Link to={`/learn/${course.id}/module/${nextModule.id}`} className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                        Continue <ArrowRight size={14} />
                      </Link>
                    ) : (
                      <Link to={`/learn/${course.id}/module/${course.moduleList[0].id}`} className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                        Start <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Certificates */}
        {certs.length > 0 && (
          <>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem' }}>Certificates</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
              {certs.map(cert => {
                const course = COURSES.find(c => c.id === cert.courseId);
                const grade = cert.score >= 90 ? 'Distinction' : cert.score >= 80 ? 'Merit' : 'Pass';
                return (
                  <Link key={cert.id} to={`/certificate/${cert.id}`} style={{ textDecoration: 'none' }}>
                    <div className="card" style={{
                      padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem',
                      borderColor: 'rgba(16,185,129,0.25)',
                    }}>
                      <Award size={28} color="#10b981" />
                      <div>
                        <div style={{ fontWeight: 600, color: '#f1f5f9', fontSize: '0.9rem' }}>{course?.title}</div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                          {grade} ({cert.score}%) — {new Date(cert.issuedAt).toLocaleDateString('en-GB')}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        )}

        {/* Recommended Courses */}
        {(() => {
          const recommended = getRecommendedCourses();
          if (recommended.length === 0) return null;
          const boardLabel = examBoardState !== 'Not sure yet' ? ` for ${examBoardState}` : '';
          return (
            <>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Recommended Courses</h2>
              <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '1.25rem' }}>
                {examBoardState !== 'Not sure yet'
                  ? `Showing ${examBoardState} courses first`
                  : 'Select an exam board above to see tailored recommendations'}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
                {recommended.slice(0, 6).map(course => (
                  <Link key={course.id} to={`/courses/${course.id}`} style={{ textDecoration: 'none' }}>
                    <div className="card" style={{ padding: '1.25rem', cursor: 'pointer' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <span style={{
                          fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.05em',
                          color: '#34d399', background: 'rgba(52,211,153,0.1)',
                          padding: '0.2rem 0.5rem', borderRadius: '4px',
                        }}>{course.tier}</span>
                        {course.board && (
                          <span style={{
                            fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.05em',
                            color: '#60a5fa', background: 'rgba(96,165,250,0.1)',
                            padding: '0.2rem 0.5rem', borderRadius: '4px',
                          }}>{course.board}</span>
                        )}
                      </div>
                      <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#f1f5f9', lineHeight: 1.3, marginBottom: '0.5rem' }}>
                        {course.title}
                      </h3>
                      <p style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.5 }}>
                        {course.moduleList.length} modules
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          );
        })()}
      </div>
    </div>
  );
}
