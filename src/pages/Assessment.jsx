import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Award, CheckCircle, XCircle, ArrowRight, RefreshCw, ChevronLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Lauren from '../components/Lauren';
import COURSES from '../data/courseData';
import { getCurrentUser, getUserProgress, saveAssessmentResult } from '../utils/auth';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Assessment() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const user = getCurrentUser();
  const course = COURSES.find(c => c.id === courseId);
  const progress = user ? getUserProgress(user.id, courseId) : null;

  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [reviewing, setReviewing] = useState(false);
  const [cert, setCert] = useState(null);

  useEffect(() => {
    if (course?.assessmentQuestions) {
      const pool = shuffle(course.assessmentQuestions);
      setQuestions(pool.slice(0, 20));
    }
  }, [courseId]);

  if (!course) {
    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
        <Navbar />
        <div style={{ padding: '4rem', textAlign: 'center' }}>
          <h2>Course not found</h2>
          <Link to="/courses" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', marginTop: '1rem' }}>Browse courses</Link>
        </div>
      </div>
    );
  }

  const allModulesComplete = progress?.completedModules?.length >= course.moduleList.length;

  if (!allModulesComplete && !progress?.assessmentPassed) {
    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
        <Navbar />
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '4rem 1.5rem', textAlign: 'center' }}>
          <Award size={48} color="#1e2d4a" style={{ marginBottom: '1rem' }} />
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>Complete All Modules First</h1>
          <p style={{ color: '#94a3b8', marginBottom: '2rem', lineHeight: 1.7 }}>
            You need to complete all {course.moduleList.length} modules before taking the final assessment.
            You have completed {progress?.completedModules?.length || 0} so far.
          </p>
          <Link to={`/course/${courseId}`} className="btn-primary" style={{ textDecoration: 'none' }}>
            <ChevronLeft size={16} /> Back to Course
          </Link>
        </div>
      </div>
    );
  }

  const correctCount = questions.filter(q => answers[q.id] === q.correct).length;
  const score = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;
  const passed = score >= 70;

  function handleAnswer(optionIdx) {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [questions[currentQ].id]: optionIdx }));
    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(prev => prev + 1);
      }
    }, 300);
  }

  function handleSubmit() {
    setSubmitted(true);
    if (user) {
      const result = saveAssessmentResult(user.id, courseId, score, passed);
      if (result) setCert(result);
    }
  }

  const allAnswered = questions.every(q => answers[q.id] !== undefined);

  function getGrade(s) {
    if (s >= 90) return 'Distinction';
    if (s >= 80) return 'Merit';
    return 'Pass';
  }

  if (submitted) {
    if (reviewing) {
      return (
        <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
          <Navbar />
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
            <button onClick={() => setReviewing(false)} className="btn-ghost" style={{ marginBottom: '1.5rem' }}>
              <ChevronLeft size={15} /> Back to Results
            </button>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem' }}>Answer Review</h1>
            {questions.map((q, qi) => {
              const userAnswer = answers[q.id];
              const isCorrect = userAnswer === q.correct;
              return (
                <div key={q.id} className="card" style={{ padding: '1.25rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                    {isCorrect ? <CheckCircle size={16} color="#10b981" /> : <XCircle size={16} color="#ef4444" />}
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: isCorrect ? '#10b981' : '#ef4444' }}>
                      Question {qi + 1} — {isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.75rem', lineHeight: 1.6 }}>{q.question}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    {q.options.map((opt, oi) => (
                      <div key={oi} style={{
                        padding: '0.5rem 0.75rem', borderRadius: '6px', fontSize: '0.85rem',
                        background: oi === q.correct ? 'rgba(16,185,129,0.1)' : oi === userAnswer ? 'rgba(239,68,68,0.1)' : 'transparent',
                        color: oi === q.correct ? '#34d399' : oi === userAnswer ? '#fca5a5' : '#94a3b8',
                        fontWeight: oi === q.correct ? 600 : 400,
                      }}>
                        {String.fromCharCode(65 + oi)}. {opt}
                        {oi === q.correct && ' \u2713'}
                        {oi === userAnswer && oi !== q.correct && ' (your answer)'}
                      </div>
                    ))}
                  </div>
                  {q.explanation && (
                    <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.6, padding: '0.75rem', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
        <Navbar />
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '4rem 1.5rem', textAlign: 'center' }}>
          <div style={{
            width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 1.5rem',
            background: passed ? 'rgba(16,185,129,0.15)' : 'rgba(245,158,11,0.15)',
            border: `2px solid ${passed ? '#10b981' : '#f59e0b'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {passed ? <Award size={36} color="#10b981" /> : <RefreshCw size={36} color="#f59e0b" />}
          </div>

          <h1 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>
            {passed ? 'Congratulations!' : 'Not Quite There'}
          </h1>
          <p style={{ color: '#94a3b8', marginBottom: '1.5rem', fontSize: '1rem', lineHeight: 1.7 }}>
            {passed
              ? `You passed with ${getGrade(score)}! You scored ${score}% (${correctCount}/${questions.length}).`
              : `You scored ${score}% (${correctCount}/${questions.length}). You need 70% to pass. Review the modules and try again.`
            }
          </p>

          <div style={{
            fontSize: '3rem', fontWeight: 900,
            color: passed ? '#10b981' : '#f59e0b',
            marginBottom: '2rem',
          }}>
            {score}%
          </div>

          <div style={{ marginBottom: '2rem' }}>
            {score >= 90 ? (
              <Lauren emotion="celebrating" message="Incredible result! You've mastered this topic — you should be very proud!" />
            ) : score >= 70 ? (
              <Lauren emotion="happy" message="Well done! You've passed with a strong score. Consider reviewing the questions you missed." />
            ) : score >= 50 ? (
              <Lauren emotion="encouraging" message="You passed! There's room to improve — revisit the modules on the topics you found tricky." />
            ) : (
              <Lauren emotion="concerned" message="Not quite there yet — but that's okay! Go back through the modules and try again when you're ready." />
            )}
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {passed && cert && (
              <Link to={`/certificate/${cert.id}`} className="btn-primary" style={{ textDecoration: 'none' }}>
                <Award size={16} /> View Certificate
              </Link>
            )}
            <button onClick={() => setReviewing(true)} className="btn-secondary">
              Review Answers
            </button>
            {!passed && (
              <Link to={`/course/${courseId}`} className="btn-ghost" style={{ textDecoration: 'none' }}>
                <ChevronLeft size={15} /> Back to Course
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Final Assessment</h1>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
              {Object.keys(answers).length}/{questions.length} answered
            </span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${questions.length > 0 ? (Object.keys(answers).length / questions.length) * 100 : 0}%` }} />
          </div>
        </div>

        {q && (
          <div className="card" style={{ padding: '2rem' }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#10b981', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '1rem' }}>
              Question {currentQ + 1} of {questions.length}
            </div>
            <p style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: 1.65 }}>{q.question}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {q.options.map((opt, oi) => {
                const isSelected = answers[q.id] === oi;
                return (
                  <button key={oi} onClick={() => handleAnswer(oi)}
                    style={{
                      background: isSelected ? 'rgba(16,185,129,0.12)' : 'rgba(255,255,255,0.03)',
                      border: `1px solid ${isSelected ? 'rgba(16,185,129,0.5)' : 'rgba(255,255,255,0.1)'}`,
                      borderRadius: '10px', padding: '1rem', color: isSelected ? '#f1f5f9' : '#cbd5e1',
                      textAlign: 'left', cursor: 'pointer', transition: 'all 0.2s',
                      display: 'flex', alignItems: 'center', gap: '0.875rem', width: '100%', outline: 'none',
                    }}
                  >
                    <span style={{
                      width: '28px', height: '28px', borderRadius: '6px',
                      background: isSelected ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.06)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.75rem', fontWeight: 700, flexShrink: 0,
                      color: isSelected ? '#34d399' : '#64748b', fontFamily: 'monospace',
                    }}>{String.fromCharCode(65 + oi)}</span>
                    <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
          <button onClick={() => setCurrentQ(Math.max(0, currentQ - 1))} className="btn-ghost" disabled={currentQ === 0}
            style={{ opacity: currentQ === 0 ? 0.3 : 1 }}>
            <ChevronLeft size={15} /> Previous
          </button>

          {currentQ < questions.length - 1 ? (
            <button onClick={() => setCurrentQ(currentQ + 1)} className="btn-primary">
              Next <ArrowRight size={15} />
            </button>
          ) : (
            <button onClick={handleSubmit} className="btn-primary" disabled={!allAnswered}
              style={{ opacity: allAnswered ? 1 : 0.5 }}>
              Submit Assessment <ArrowRight size={15} />
            </button>
          )}
        </div>

        {/* Question navigation dots */}
        <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
          {questions.map((q, i) => (
            <button key={q.id} onClick={() => setCurrentQ(i)}
              style={{
                width: '28px', height: '28px', borderRadius: '6px', border: 'none',
                background: i === currentQ ? 'rgba(16,185,129,0.3)' : answers[q.id] !== undefined ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.04)',
                color: answers[q.id] !== undefined ? '#34d399' : '#475569',
                fontSize: '0.7rem', fontWeight: 700, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
