import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, ArrowRight, CheckCircle, TrendingUp, Lock, ChevronDown, Gamepad2, Crown, CreditCard, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import ProgressRing from '../components/ProgressRing';
import COURSES from '../data/courseData';
import { getCurrentUser, getUserProgress, getPracticeProgress, getCompletedAssessmentCount, getExamBoard, setExamBoard, getSubscription, isSubscribed, getGameAttempts, getRemainingFreeAttempts } from '../utils/auth';
import { getDailyStreak } from '../utils/gameUtils';

const EXAM_BOARDS = ['Not sure yet', 'AQA', 'Edexcel', 'Edexcel (IGCSE)', 'OCR', 'WJEC Eduqas'];

// ─── Magic-number constants ──────────────────────────────────
const ACHIEVEMENT_FIRST_GAME = 1;
const ACHIEVEMENT_10_GAMES = 10;
const ACHIEVEMENT_50_GAMES = 50;
const STREAK_3_DAY = 3;
const STREAK_7_DAY = 7;
const TOTAL_ACHIEVEMENTS = 8;
const GRADES_UNLOCK_THRESHOLD = 5;
const CERT_DISTINCTION_MIN = 90;
const CERT_MERIT_MIN = 80;

export default function Dashboard() {
  const user = getCurrentUser();
  const practice = getPracticeProgress();
  const [examBoardState, setExamBoardState] = useState(() => user ? getExamBoard(user.id) : 'Not sure yet');
  const [showBoardPicker, setShowBoardPicker] = useState(false);

  if (!user) return null;

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

  // ─── Subscription info ────────────────────────────────────────
  const subscription = getSubscription(user.id);
  const subscribed = isSubscribed(user.id);
  const remaining = getRemainingFreeAttempts(user.id);
  const totalGameAttempts = getGameAttempts(user.id);

  // ─── Game stats helpers ──────────────────────────────────────
  const GAME_STORAGE_KEYS = [
    { name: 'Who Said It?', key: 'learnright_game_whosaidit' },
    { name: 'Word Match', key: 'learnright_game_wordmatch' },
    { name: 'Technique Spotter', key: 'learnright_game_techniquespotter' },
    { name: 'Grammar Ninja', key: 'learnright_game_grammarninja' },
    { name: 'Timeline Scramble', key: 'learnright_game_timelinescramble' },
    { name: 'Speed Round', key: 'learnright_game_speedround' },
    { name: 'Quote Detective', key: 'learnright_game_quotedetective' },
    { name: 'Context Connect', key: 'learnright_game_contextconnect' },
    { name: 'Spelling Bee', key: 'learnright_game_spellingbee' },
    { name: 'Punctuation Fixer', key: 'lr_punctfix_best' },
    { name: 'Mark The Essay', key: 'lr_markessay_best' },
    { name: 'Daily Challenge', key: 'learnright_game_daily' },
  ];

  function getGamePlayCounts() {
    const counts = {};
    let total = 0;
    for (const g of GAME_STORAGE_KEYS) {
      try {
        const data = JSON.parse(localStorage.getItem(g.key));
        const count = Array.isArray(data) ? data.length : 0;
        counts[g.name] = count;
        total += count;
      } catch {
        counts[g.name] = 0;
      }
    }
    return { counts, total };
  }

  function getAchievementCount() {
    const achievements = [];
    const { counts, total } = gamePlays;
    // First game played
    if (total >= ACHIEVEMENT_FIRST_GAME) achievements.push('first_game');
    // Played 10 games
    if (total >= ACHIEVEMENT_10_GAMES) achievements.push('10_games');
    // Played 50 games
    if (total >= ACHIEVEMENT_50_GAMES) achievements.push('50_games');
    // Tried every game
    const triedAll = GAME_STORAGE_KEYS.every(g => counts[g.name] > 0);
    if (triedAll) achievements.push('tried_all');
    // 3-day streak
    if (getDailyStreak() >= STREAK_3_DAY) achievements.push('streak_3');
    // 7-day streak
    if (getDailyStreak() >= STREAK_7_DAY) achievements.push('streak_7');
    // Completed a course
    if ((user.completedCourses || []).length >= 1) achievements.push('first_course');
    // Earned a certificate
    if ((user.certificates || []).length >= 1) achievements.push('first_cert');
    return { unlocked: achievements.length, total: TOTAL_ACHIEVEMENTS };
  }

  const gamePlays = getGamePlayCounts();
  const dailyStreak = getDailyStreak();
  const favouriteGame = (() => {
    let best = null;
    let bestCount = 0;
    for (const g of GAME_STORAGE_KEYS) {
      if (gamePlays.counts[g.name] > bestCount) {
        bestCount = gamePlays.counts[g.name];
        best = g.name;
      }
    }
    return best;
  })();
  const achievementInfo = getAchievementCount();

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
        <p style={{ color: '#94a3b8', margin: 0, marginBottom: '1rem' }}>Keep up the great work. Here is your progress.</p>

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

        {/* Subscription Status Card */}
        <div className="card" style={{
          padding: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem',
          borderLeft: `3px solid ${subscription.tier === 'pro' ? '#f59e0b' : subscription.tier === 'monthly' ? '#10b981' : '#64748b'}`,
        }}>
          <div style={{
            width: '48px', height: '48px', borderRadius: '12px', flexShrink: 0,
            background: subscription.tier === 'pro' ? 'rgba(245,158,11,0.1)' : subscription.tier === 'monthly' ? 'rgba(16,185,129,0.1)' : 'rgba(100,116,139,0.1)',
            border: `1px solid ${subscription.tier === 'pro' ? 'rgba(245,158,11,0.25)' : subscription.tier === 'monthly' ? 'rgba(16,185,129,0.25)' : 'rgba(100,116,139,0.25)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {subscription.tier === 'pro' ? <Crown size={22} color="#f59e0b" />
              : subscription.tier === 'monthly' ? <CreditCard size={22} color="#10b981" />
              : <Sparkles size={22} color="#64748b" />}
          </div>
          <div style={{ flex: 1 }}>
            {subscription.tier === 'pro' ? (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <p style={{ fontWeight: 700, fontSize: '1rem', color: '#f1f5f9', margin: 0 }}>Pro (Annual)</p>
                  <span style={{
                    fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.05em',
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#000',
                    padding: '0.15rem 0.5rem', borderRadius: '4px',
                  }}>GOLD</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>
                  Access until {subscription.expiresAt ? new Date(subscription.expiresAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : 'August 1st'}
                </p>
              </>
            ) : subscription.tier === 'monthly' ? (
              <>
                <p style={{ fontWeight: 700, fontSize: '1rem', color: '#f1f5f9', margin: 0, marginBottom: '0.25rem' }}>
                  Monthly Plan &mdash; &pound;19/month
                </p>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>
                  Renews {subscription.expiresAt ? new Date(subscription.expiresAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : 'N/A'}
                </p>
              </>
            ) : (
              <>
                <p style={{ fontWeight: 700, fontSize: '1rem', color: '#f1f5f9', margin: 0, marginBottom: '0.25rem' }}>
                  Free Plan &mdash; {remaining} game attempt{remaining !== 1 ? 's' : ''} remaining
                </p>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>
                  3 free game attempts included
                </p>
              </>
            )}
          </div>
          {subscription.tier === 'pro' ? null
            : subscription.tier === 'monthly' ? (
              <Link to="/pricing" className="btn-ghost" style={{ textDecoration: 'none', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                Manage
              </Link>
            ) : (
              <Link to="/pricing" className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.8rem', padding: '0.5rem 1rem', whiteSpace: 'nowrap' }}>
                Upgrade
              </Link>
            )}
        </div>

        {/* Game Stats & Quick Links */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '10px',
              background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <Gamepad2 size={18} color="#8b5cf6" />
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f1f5f9' }}>{gamePlays.total}</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Games Played</div>
            </div>
          </div>

          <div className="card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '10px',
              background: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <Crown size={18} color="#ec4899" />
            </div>
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#f1f5f9', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '120px' }}>{favouriteGame || 'None yet'}</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Favourite Game</div>
            </div>
          </div>

          <div className="card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '10px',
              background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <TrendingUp size={18} color="#f59e0b" />
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f1f5f9' }}>{dailyStreak} day{dailyStreak !== 1 ? 's' : ''}</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Daily Challenge Streak</div>
            </div>
          </div>

          <div className="card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '10px',
              background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <Award size={18} color="#10b981" />
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f1f5f9' }}>{achievementInfo.unlocked} / {achievementInfo.total}</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Achievements</div>
            </div>
          </div>
        </div>

        {/* Quick Links to Games Hub */}
        <Link to="/games" style={{ textDecoration: 'none', display: 'block', marginBottom: '2rem' }}>
          <div className="card" style={{
            padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem',
            cursor: 'pointer', borderColor: 'rgba(139,92,246,0.2)', flexWrap: 'wrap',
          }}>
            <Gamepad2 size={20} color="#8b5cf6" style={{ flexShrink: 0 }} />
            <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#f1f5f9', flex: 1, minWidth: '100px' }}>Games Hub</span>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Play games to practise your skills</span>
            <ArrowRight size={16} color="#64748b" style={{ flexShrink: 0 }} />
          </div>
        </Link>

        {/* Stats grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))', gap: '1rem', marginBottom: '3rem' }}>
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
          const isGradesUnlocked = assessmentCount >= GRADES_UNLOCK_THRESHOLD;
          const assessmentsRemaining = GRADES_UNLOCK_THRESHOLD - assessmentCount;
          const progress = Math.round((assessmentCount / GRADES_UNLOCK_THRESHOLD) * 100);
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
                  <p style={{ fontWeight: 700, fontSize: '1rem', color: '#f1f5f9', margin: 0, marginBottom: '0.25rem' }}>
                    Predicted Grades
                  </p>
                  {isGradesUnlocked ? (
                    <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>
                      View your predicted grades, strengths, and recommendations
                    </p>
                  ) : (
                    <div>
                      <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0, marginBottom: '0.5rem' }}>
                        Complete {assessmentsRemaining} more assessment{assessmentsRemaining !== 1 ? 's' : ''} to unlock
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
          <div className="card" style={{ padding: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#94a3b8', margin: 0, marginBottom: '1.25rem' }}>You have not enrolled in any courses yet.</p>
            <Link to="/courses" className="btn-primary" style={{ textDecoration: 'none' }}>
              Browse Courses <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))', gap: '1rem', marginBottom: '3rem' }}>
            {enrolled.map(course => {
              const prog = getUserProgress(user.id, course.id);
              const done = prog.completedModules.length;
              const total = course.moduleList.length;
              const pct = total > 0 ? Math.round((done / total) * 100) : 0;
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))', gap: '1rem', marginBottom: '3rem' }}>
              {certs.map(cert => {
                const course = COURSES.find(c => c.id === cert.courseId);
                const grade = cert.score >= CERT_DISTINCTION_MIN ? 'Distinction' : cert.score >= CERT_MERIT_MIN ? 'Merit' : 'Pass';
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
          return (
            <>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>Recommended Courses</h2>
              <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '1.25rem' }}>
                {examBoardState !== 'Not sure yet'
                  ? `Showing ${examBoardState} courses first`
                  : 'Select an exam board above to see tailored recommendations'}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))', gap: '1rem' }}>
                {recommended.slice(0, 6).map(course => (
                  <Link key={course.id} to={`/course/${course.id}`} style={{ textDecoration: 'none' }}>
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
