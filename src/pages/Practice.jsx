import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Dumbbell, ArrowRight, Clock, ChevronLeft, TrendingUp, RotateCcw, AlertCircle, BookOpen, Award, Target, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Lauren from '../components/Lauren';
import practiceQuestions from '../data/practiceData';
import { getPracticeProgress, savePracticeAttempt } from '../utils/auth';
import BOARDS from '../data/boardRegistry';
import { markResponse } from '../utils/markingEngine';

const MIN_WORD_COUNT = 50;
const MARKING_ANIMATION_DURATION_MS = 2500;
const MARKING_ANIMATION_INTERVAL_MS = 50;
const MARKING_EXTRA_DELAY_MS = 200;

const GRADE_COLOURS = {
  9: '#a78bfa',
  8: '#818cf8',
  7: '#34d399',
  6: '#fbbf24',
  5: '#f59e0b',
  4: '#f97316',
  3: '#ef4444',
  2: '#dc2626',
  1: '#b91c1c',
};

function getGradeColour(grade) {
  return GRADE_COLOURS[grade] || '#94a3b8';
}

function getLaurenEmotion(grade) {
  if (grade >= 8) return 'excited';
  if (grade >= 6) return 'happy';
  if (grade >= 4) return 'thinking';
  return 'concerned';
}

/* ════════════════════════════════════════════════════════════════════
   QUESTION-TYPE MAPPING: board → subject → paper → types
   ════════════════════════════════════════════════════════════════════ */
const QUESTION_TYPE_MAP = {
  AQA: {
    language: {
      1: ['Language Analysis (Q2)', 'Structure Analysis (Q3)', 'Critical Evaluation (Q4)', 'Creative Writing (Q5)'],
      2: ['Summary & Synthesis (Q2)', 'Language Analysis (Q3)', 'Comparison (Q4)', 'Persuasive Writing (Q5)'],
    },
    literature: {
      1: ['Shakespeare Extract + Essay', '19th-Century Novel Extract + Essay'],
      2: ['Modern Text Essay', 'Poetry Comparison', 'Unseen Poetry'],
    },
  },
  Edexcel: {
    language: {
      1: ['Language Analysis', 'Narrative/Descriptive Writing'],
      2: ['Non-Fiction Reading', 'Transactional Writing'],
    },
    literature: {
      1: ['Shakespeare Extract', 'Post-1914 Text'],
      2: ['19th-Century Novel', 'Poetry Anthology', 'Unseen Poetry'],
    },
  },
  OCR: {
    language: {
      1: ['Reading Comprehension', 'Creative Writing'],
      2: ['Non-Fiction Reading', 'Transactional/Persuasive Writing'],
    },
    literature: {
      1: ['Modern Prose/Drama + Unseen', 'Single Text Essay'],
      2: ['Poetry Comparison (Anthology + Unseen)', 'Single Poem Response', 'Shakespeare Extract'],
    },
  },
  WJEC: {
    language: {
      1: ['Reading Analysis', 'Creative Prose Writing'],
      2: ['Non-Fiction Reading', 'Transactional Writing'],
    },
    literature: {
      1: ['Shakespeare Extract', 'Poetry Comparison'],
      2: ['Post-1914 Prose/Drama', '19th-Century Prose', 'Unseen Poetry'],
    },
  },
  'Edexcel IGCSE': {
    language: {
      1: ['Language Analysis', 'Narrative/Descriptive Writing'],
      2: ['Non-Fiction Reading', 'Transactional Writing'],
    },
    literature: {
      1: ['Shakespeare Extract', 'Post-1914 Text'],
      2: ['19th-Century Novel', 'Poetry Anthology', 'Unseen Poetry'],
    },
  },
  KS3: {
    _flat: ['Reading Comprehension', 'Creative Writing', 'Poetry Analysis', 'Non-Fiction Analysis'],
  },
};

function getQuestionTypesForFilters(board, subject, paper) {
  const boardMap = QUESTION_TYPE_MAP[board];
  if (!boardMap) return [];
  // KS3 has a flat list — no subject/paper breakdown
  if (boardMap._flat) return boardMap._flat;
  if (!subject) return [];
  const subjectMap = boardMap[subject];
  if (!subjectMap) return [];
  if (!paper) return [];
  return subjectMap[paper] || [];
}

export default function Practice() {
  const [searchParams] = useSearchParams();
  const boardParam = searchParams.get('board');

  const [step, setStep] = useState('setup'); // setup | question | marking | results
  const [filters, setFilters] = useState(() => {
    const validBoards = [...Object.keys(BOARDS), 'KS3'];
    const initial = boardParam && validBoards.includes(boardParam) ? boardParam : 'AQA';
    return { board: initial, subject: '', paper: 0, type: '' };
  });
  const [currentQ, setCurrentQ] = useState(null);
  const [answer, setAnswer] = useState('');
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [markResult, setMarkResult] = useState(null);
  const [markingProgress, setMarkingProgress] = useState(0);
  const [showModelAnswers, setShowModelAnswers] = useState(false);

  // Refs for values the marking effect reads but that should not re-trigger it
  const answerRef = useRef(answer);
  answerRef.current = answer;
  const currentQRef = useRef(currentQ);
  currentQRef.current = currentQ;
  const startTimeRef = useRef(startTime);
  startTimeRef.current = startTime;

  const progress = getPracticeProgress();
  const boards = [...Object.keys(BOARDS), 'KS3'];

  const isKS3 = filters.board === 'KS3';
  const needsSubject = !isKS3;
  const needsPaper = !isKS3 && !!filters.subject;

  const availableTypes = useMemo(() =>
    getQuestionTypesForFilters(filters.board, filters.subject, filters.paper),
    [filters.board, filters.subject, filters.paper]
  );

  const boardQuestions = useMemo(() => {
    let pool = practiceQuestions.filter(q => q.board === filters.board);
    if (filters.subject === 'language') {
      pool = pool.filter(q => q.subject === 'language' || (!q.subject && q.paper));
    } else if (filters.subject === 'literature') {
      pool = pool.filter(q => q.subject === 'literature');
    }
    if (filters.paper) {
      pool = pool.filter(q => q.paper === filters.paper);
    }
    return pool;
  }, [filters.board, filters.subject, filters.paper]);

  const hasBoardQuestions = boardQuestions.length > 0;

  const wordCount = answer.trim() ? answer.trim().split(/\s+/).length : 0;
  const canSubmit = wordCount >= MIN_WORD_COUNT;

  // Marking animation effect
  useEffect(() => {
    if (step !== 'marking') return;

    setMarkingProgress(0);
    const duration = MARKING_ANIMATION_DURATION_MS;
    const interval = MARKING_ANIMATION_INTERVAL_MS;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      setMarkingProgress(Math.min((current / steps) * 100, 100));
      if (current >= steps) {
        clearInterval(timer);
      }
    }, interval);

    // Run the marking engine and transition after animation
    const q = currentQRef.current;
    const result = markResponse(answerRef.current, q, q.board);
    const timeout = setTimeout(() => {
      setMarkResult(result);
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
      savePracticeAttempt(q.id, result.grade, timeSpent);
      setStep('results');
    }, duration + MARKING_EXTRA_DELAY_MS);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [step]);

  function startPractice() {
    let pool = practiceQuestions;
    if (filters.board) pool = pool.filter(q => q.board === filters.board);
    if (filters.subject === 'language') {
      pool = pool.filter(q => q.subject === 'language' || (!q.subject && q.paper));
    } else if (filters.subject === 'literature') {
      pool = pool.filter(q => q.subject === 'literature');
    }
    if (filters.paper) pool = pool.filter(q => q.paper === filters.paper);
    if (filters.type) pool = pool.filter(q => q.questionType === filters.type);

    if (pool.length === 0) return;

    const q = pool[Math.floor(Math.random() * pool.length)];
    setCurrentQ(q);
    setAnswer('');
    setMarkResult(null);
    setShowModelAnswers(false);
    setSelectedGrade(null);
    setStartTime(Date.now());
    setStep('question');
  }

  function submitForMarking() {
    if (!canSubmit) return;
    setStep('marking');
  }

  function selectStyle(active) {
    return {
      padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600,
      border: 'none', cursor: 'pointer', transition: 'all 0.2s',
      background: active ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.04)',
      color: active ? '#34d399' : '#94a3b8',
      borderWidth: '1px', borderStyle: 'solid',
      borderColor: active ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.08)',
    };
  }

  /* ════════════════════════════════════════════════════════════════════
     SETUP STEP
     ════════════════════════════════════════════════════════════════════ */
  if (step === 'setup') {
    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
        <Navbar />
        <div id="main-content" role="main" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <Dumbbell size={24} color="#10b981" />
            <h1 style={{ fontSize: '1.75rem', fontWeight: 900 }}>Quick Practice</h1>
          </div>
          <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
            Answer real exam-style questions, get AI-powered marking against the official mark scheme, and track your streak.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Attempts', value: progress.attempts, icon: Dumbbell },
              { label: 'Streak', value: `${progress.streak} days`, icon: TrendingUp },
            ].map((s, i) => (
              <div key={i} className="card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1, minWidth: '140px' }}>
                <s.icon size={18} color="#10b981" />
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>{s.value}</div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="card" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem' }}>Configure Your Practice</h2>

            {/* Board selector */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', display: 'block', marginBottom: '0.5rem' }}>Exam Board</label>
              <div role="group" aria-label="Filter by board" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {boards.map(b => {
                  const boardColor = b === 'KS3' ? '#10b981' : (BOARDS[b]?.color || '#10b981');
                  const count = practiceQuestions.filter(q => q.board === b).length;
                  return (
                    <button
                      key={b}
                      onClick={() => setFilters({ board: b, subject: '', paper: 0, type: '' })}
                      style={{
                        ...selectStyle(filters.board === b),
                        borderColor: filters.board === b ? `${boardColor}60` : 'rgba(255,255,255,0.08)',
                        color: filters.board === b ? boardColor : '#94a3b8',
                        background: filters.board === b ? `${boardColor}15` : 'rgba(255,255,255,0.04)',
                      }}
                    >
                      {b === 'KS3' ? 'KS3' : (BOARDS[b]?.name || b)} {count > 0
                        ? <span style={{ fontSize: '0.65rem', opacity: 0.7 }}>({count})</span>
                        : <span style={{ fontSize: '0.65rem', opacity: 0.6 }}>(soon)</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {!hasBoardQuestions && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '1rem 1.25rem', borderRadius: '10px', marginBottom: '1.25rem',
                background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
              }}>
                <AlertCircle size={18} color="#f59e0b" />
                <p style={{ color: '#f59e0b', fontSize: '0.85rem', margin: 0 }}>
                  Practice questions for {filters.board === 'KS3' ? 'KS3' : (BOARDS[filters.board]?.name || filters.board)} are coming soon! In the meantime, try a board that has questions available — the core skills transfer across all boards.
                </p>
              </div>
            )}

            {/* Subject selector (not shown for KS3) */}
            {needsSubject && (
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', display: 'block', marginBottom: '0.5rem' }}>Subject</label>
                <div role="group" aria-label="Filter by subject" style={{ display: 'flex', gap: '0.5rem' }}>
                  {[
                    { key: 'language', label: 'English Language' },
                    { key: 'literature', label: 'English Literature' },
                  ].map(s => (
                    <button
                      key={s.key}
                      onClick={() => setFilters(f => ({ ...f, subject: s.key, paper: 0, type: '' }))}
                      style={selectStyle(filters.subject === s.key)}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Paper selector (shown after subject is selected, not for KS3) */}
            {needsPaper && (
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', display: 'block', marginBottom: '0.5rem' }}>Paper</label>
                <div role="group" aria-label="Filter by paper" style={{ display: 'flex', gap: '0.5rem' }}>
                  {[
                    { key: 0, label: 'Any' },
                    { key: 1, label: 'Paper 1' },
                    { key: 2, label: 'Paper 2' },
                  ].map(p => (
                    <button
                      key={p.key}
                      onClick={() => setFilters(f => ({ ...f, paper: p.key, type: '' }))}
                      style={selectStyle(filters.paper === p.key)}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Question type selector (dynamic based on board + subject + paper) */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', display: 'block', marginBottom: '0.5rem' }}>Question Type</label>
              <div role="group" aria-label="Filter by question type" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <button onClick={() => setFilters(f => ({ ...f, type: '' }))} style={selectStyle(!filters.type)}>Any</button>
                {availableTypes.map(t => (
                  <button key={t} onClick={() => setFilters(f => ({ ...f, type: t }))} style={selectStyle(filters.type === t)}>{t}</button>
                ))}
              </div>
            </div>

            <button
              onClick={startPractice}
              disabled={!hasBoardQuestions}
              className="btn-primary"
              style={{
                width: '100%', justifyContent: 'center', padding: '0.875rem',
                ...(hasBoardQuestions ? {} : { opacity: 0.4, cursor: 'not-allowed' }),
              }}
            >
              Start Practice <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ════════════════════════════════════════════════════════════════════
     QUESTION STEP
     ════════════════════════════════════════════════════════════════════ */
  if (step === 'question') {
    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
        <Navbar />
        <div id="main-content" role="main" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
          <button onClick={() => setStep('setup')} className="btn-ghost" style={{ marginBottom: '1.5rem' }}>
            <ChevronLeft size={15} /> Back
          </button>

          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            {(() => {
              const bColor = BOARDS[currentQ.board]?.color || '#34d399';
              return (
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: bColor, background: `${bColor}18`, padding: '0.25rem 0.625rem', borderRadius: '4px', border: `1px solid ${bColor}30` }}>
                  {BOARDS[currentQ.board]?.name || currentQ.board}
                </span>
              );
            })()}
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.625rem', borderRadius: '4px' }}>
              Paper {currentQ.paper}
            </span>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.625rem', borderRadius: '4px' }}>
              {currentQ.questionType}
            </span>
          </div>

          {currentQ.extract && (
            <div className="module-content">
              <div className="text-extract">
                {currentQ.extract}
                {currentQ.extractSource && <div className="source">{currentQ.extractSource}</div>}
              </div>
            </div>
          )}

          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.5 }}>
            {currentQ.question}
          </h2>

          <textarea
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            placeholder="Write your answer here..."
            style={{
              width: '100%', minHeight: '280px', padding: '1.25rem',
              background: '#0d1526', border: '1px solid #1e2d4a', borderRadius: '10px',
              color: '#f1f5f9', fontSize: '0.9rem', lineHeight: 1.8, resize: 'vertical',
              fontFamily: 'Georgia, serif', outline: 'none',
            }}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.75rem', color: canSubmit ? '#64748b' : '#f59e0b' }}>
              {wordCount} word{wordCount !== 1 ? 's' : ''} {!canSubmit && '(minimum 50 words required)'}
            </span>
          </div>

          <button
            onClick={submitForMarking}
            disabled={!canSubmit}
            className="btn-primary"
            style={{
              width: '100%', justifyContent: 'center', padding: '0.875rem',
              ...(!canSubmit ? { opacity: 0.4, cursor: 'not-allowed' } : {}),
            }}
          >
            Submit for Marking <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  /* ════════════════════════════════════════════════════════════════════
     MARKING STEP (animation)
     ════════════════════════════════════════════════════════════════════ */
  if (step === 'marking') {
    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
        <Navbar />
        <div id="main-content" role="main" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '50vh', gap: '2rem' }}>
            <Lauren emotion="thinking" message={`Analysing your response against the ${currentQ.board} mark scheme criteria...`} />

            <div style={{ width: '100%', maxWidth: '400px' }}>
              <div style={{
                width: '100%', height: '8px', borderRadius: '4px',
                background: 'rgba(255,255,255,0.08)', overflow: 'hidden',
              }}>
                <div style={{
                  width: `${markingProgress}%`, height: '100%', borderRadius: '4px',
                  background: 'linear-gradient(90deg, #10b981, #34d399)',
                  transition: 'width 0.05s linear',
                }} />
              </div>
              <div style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.8rem', color: '#64748b' }}>
                {markingProgress < 30 ? 'Reading your response...' :
                 markingProgress < 60 ? 'Checking against mark scheme...' :
                 markingProgress < 85 ? 'Evaluating assessment objectives...' :
                 'Finalising grade...'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ════════════════════════════════════════════════════════════════════
     RESULTS STEP
     ════════════════════════════════════════════════════════════════════ */
  if (step === 'results' && markResult) {
    const grade = markResult.grade;
    const gradeColour = getGradeColour(grade);
    const grades = Object.keys(currentQ?.modelAnswers || {});
    const activeGrade = (selectedGrade && grades.includes(selectedGrade)) ? selectedGrade : grades[0] || null;
    const bColor = BOARDS[currentQ.board]?.color || '#34d399';

    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
        <Navbar />
        <div id="main-content" role="main" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
          <button onClick={() => setStep('setup')} className="btn-ghost" style={{ marginBottom: '1.5rem' }}>
            <ChevronLeft size={15} /> Back to Setup
          </button>

          {/* 1. Grade Header */}
          <div className="card" style={{
            padding: '2rem', marginBottom: '1.5rem', textAlign: 'center',
            borderTop: `3px solid ${gradeColour}`,
          }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: '80px', height: '80px', borderRadius: '50%',
              background: `${gradeColour}15`, border: `3px solid ${gradeColour}40`,
              marginBottom: '1rem',
            }}>
              <span style={{ fontSize: '1.75rem', fontWeight: 900, color: gradeColour }}>
                {grade}
              </span>
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Grade {grade}
            </div>
            {markResult.percentage != null && (
              <div style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
                {markResult.percentage}%{markResult.mark != null && markResult.maxMark != null && (
                  <> — {markResult.mark}/{markResult.maxMark} marks</>
                )}
              </div>
            )}
            <span style={{
              fontSize: '0.7rem', fontWeight: 700, color: bColor,
              background: `${bColor}18`, padding: '0.25rem 0.625rem', borderRadius: '4px',
              border: `1px solid ${bColor}30`,
            }}>
              {BOARDS[currentQ.board]?.name || currentQ.board}
            </span>
          </div>

          {/* 2. Examiner Comment */}
          {markResult.examinerComment && (
            <div className="card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <BookOpen size={18} color={gradeColour} />
                <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0 }}>Examiner Comment</h3>
              </div>
              <div style={{
                color: '#cbd5e1', lineHeight: 1.8, fontSize: '0.9rem',
                padding: '1.25rem', borderRadius: '8px',
                background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
              }}>
                {markResult.examinerComment}
              </div>
              <div style={{ marginTop: '1.25rem' }}>
                <Lauren emotion={getLaurenEmotion(grade)} message={
                  grade >= 8 ? "Outstanding work! You're performing at the highest level." :
                  grade >= 6 ? "Solid response — you're hitting the key criteria. Let's push for even higher." :
                  grade >= 4 ? "A reasonable attempt with some good points. Focus on the improvements below to move up." :
                  "Keep practising — read through the model answers carefully to see what the examiners are looking for."
                } />
              </div>
            </div>
          )}

          {/* 3. Assessment Objective Breakdown */}
          {markResult.aoBreakdown && markResult.aoBreakdown.length > 0 && (
            <div className="card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Target size={18} color="#a78bfa" />
                <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0 }}>Assessment Objective Breakdown</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {markResult.aoBreakdown.map((ao, i) => {
                  const aoPercentage = ao.marks != null && ao.maxMarks
                    ? Math.round((ao.marks / ao.maxMarks) * 100)
                    : (ao.percentage != null ? ao.percentage : null);
                  const bandPercentage = ao.band != null && ao.maxBand
                    ? Math.round((ao.band / ao.maxBand) * 100)
                    : 50;
                  const bandColour = bandPercentage >= 75 ? '#34d399' :
                                     bandPercentage >= 50 ? '#fbbf24' :
                                     bandPercentage >= 25 ? '#f97316' : '#ef4444';

                  return (
                    <div key={ao.ao || i} style={{
                      background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '10px', padding: '1.25rem',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                        <div>
                          <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#a78bfa' }}>{ao.ao}</span>
                          {ao.title && <span style={{ fontSize: '0.85rem', color: '#94a3b8', marginLeft: '0.5rem' }}>{ao.title}</span>}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          {ao.marks != null && ao.maxMarks != null && (
                            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#e2e8f0' }}>
                              {ao.marks}/{ao.maxMarks}
                            </span>
                          )}
                          {aoPercentage != null && (
                            <span style={{
                              fontSize: '0.7rem', fontWeight: 700, color: bandColour,
                              background: `${bandColour}15`, padding: '0.2rem 0.5rem', borderRadius: '4px',
                            }}>
                              {aoPercentage}%
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Band progress bar */}
                      {ao.band != null && ao.maxBand != null && (
                        <div style={{ marginBottom: '0.75rem' }}>
                          <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.35rem' }}>
                            Band {ao.band} of {ao.maxBand}
                            {ao.bandLabel && <span style={{ marginLeft: '0.5rem', color: '#94a3b8' }}>— {ao.bandLabel}</span>}
                          </div>
                          <div style={{
                            width: '100%', height: '6px', borderRadius: '3px',
                            background: 'rgba(255,255,255,0.06)', overflow: 'hidden',
                          }}>
                            <div style={{
                              width: `${bandPercentage}%`, height: '100%', borderRadius: '3px',
                              background: bandColour, transition: 'width 0.5s ease',
                            }} />
                          </div>
                        </div>
                      )}

                      {ao.feedback && (
                        <div style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6 }}>
                          {ao.feedback}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 4. Strengths */}
          {markResult.strengths && markResult.strengths.length > 0 && (
            <div className="card" style={{
              padding: '2rem', marginBottom: '1.5rem',
              borderLeft: '3px solid #34d399',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <CheckCircle size={18} color="#34d399" />
                <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0, color: '#34d399' }}>Strengths</h3>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                {markResult.strengths.map((s, i) => (
                  <li key={i} style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '0.35rem' }}>{s}</li>
                ))}
              </ul>
            </div>
          )}

          {/* 5. Areas for Improvement */}
          {markResult.improvements && markResult.improvements.length > 0 && (
            <div className="card" style={{
              padding: '2rem', marginBottom: '1.5rem',
              borderLeft: '3px solid #f59e0b',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <AlertCircle size={18} color="#f59e0b" />
                <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0, color: '#f59e0b' }}>Areas for Improvement</h3>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                {markResult.improvements.map((imp, i) => (
                  <li key={i} style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '0.35rem' }}>{imp}</li>
                ))}
              </ul>
            </div>
          )}

          {/* 6. Next Grade Targets */}
          {markResult.feedback?.nextGrade?.targets?.length > 0 && (
            <div className="card" style={{
              padding: '2rem', marginBottom: '1.5rem',
              borderLeft: '3px solid #818cf8',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <TrendingUp size={18} color="#818cf8" />
                <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0, color: '#818cf8' }}>
                  To Reach Grade {markResult.feedback.nextGrade.targetGrade}
                </h3>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                {markResult.feedback.nextGrade.targets.map((t, i) => (
                  <li key={i} style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '0.35rem' }}>{t}</li>
                ))}
              </ul>
            </div>
          )}

          {/* 6b. Model Sentence */}
          {markResult.feedback?.modelSentence && (
            <div className="card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <BookOpen size={18} color="#38bdf8" />
                <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0, color: '#38bdf8' }}>How to Improve</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ padding: '1rem 1.25rem', borderRadius: '8px', background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Before</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.7, fontStyle: 'italic' }}>{markResult.feedback.modelSentence.weak}</div>
                </div>
                <div style={{ padding: '1rem 1.25rem', borderRadius: '8px', background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.15)' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>After</div>
                  <div style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.7, fontStyle: 'italic' }}>{markResult.feedback.modelSentence.improved}</div>
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.6 }}>
                  {markResult.feedback.modelSentence.explanation}
                </div>
              </div>
            </div>
          )}

          {/* 7. Best Fit Justification */}
          {markResult.bestFitJustification && (
            <div className="card" style={{
              padding: '2rem', marginBottom: '1.5rem',
              borderLeft: '3px solid #a78bfa',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Award size={18} color="#a78bfa" />
                <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0, color: '#a78bfa' }}>Best Fit Justification</h3>
              </div>
              <div style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.8 }}>
                {markResult.bestFitJustification}
              </div>
            </div>
          )}

          {/* 7. Model Answers (collapsible) */}
          {grades.length > 0 && (
            <div className="card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
              <button
                onClick={() => setShowModelAnswers(!showModelAnswers)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                  color: '#f1f5f9', padding: 0,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <BookOpen size={18} color="#10b981" />
                  <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0 }}>View Model Answers</h3>
                </div>
                {showModelAnswers ? <ChevronUp size={18} color="#94a3b8" /> : <ChevronDown size={18} color="#94a3b8" />}
              </button>

              {showModelAnswers && (
                <div style={{ marginTop: '1.5rem' }}>
                  {/* Grade selector */}
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                    {grades.map(g => (
                      <button key={g} onClick={() => setSelectedGrade(g)} style={selectStyle(activeGrade === g)}>{g}</button>
                    ))}
                  </div>

                  {/* Model answer */}
                  {activeGrade && currentQ.modelAnswers[activeGrade] && (
                    <div style={{
                      padding: '1.5rem', borderRadius: '10px', marginBottom: '1.5rem',
                      background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <div style={{ color: '#10b981', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                        Model Answer — {activeGrade}
                      </div>
                      <div style={{ color: '#cbd5e1', lineHeight: 1.8, fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
                        {currentQ.modelAnswers[activeGrade]}
                      </div>
                    </div>
                  )}

                  {/* Mark scheme */}
                  {currentQ.markScheme && (
                    <div style={{
                      padding: '1.5rem', borderRadius: '10px', marginBottom: '1.5rem',
                      background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      {(() => {
                        const boardTerms = {
                          AQA: 'AQA Mark Scheme Criteria',
                          Edexcel: 'Edexcel Assessment Criteria',
                          'Edexcel IGCSE': 'Edexcel IGCSE Assessment Criteria',
                          OCR: 'OCR Mark Band Descriptors',
                          WJEC: 'Eduqas Marking Guidelines',
                        };
                        return (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <h3 style={{ fontWeight: 700, fontSize: '0.9rem', margin: 0 }}>
                              {boardTerms[currentQ.board] || 'Mark Scheme Criteria'}
                            </h3>
                            <span style={{ fontSize: '0.6rem', fontWeight: 600, color: bColor, background: `${bColor}15`, padding: '0.15rem 0.4rem', borderRadius: '3px' }}>
                              {currentQ.marks ? `${currentQ.marks} marks` : ''}
                            </span>
                          </div>
                        );
                      })()}
                      <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                        {currentQ.markScheme.map((m, i) => (
                          <li key={i} style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '0.25rem' }}>{m}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Examiner tips */}
                  {currentQ.examinerTips && (
                    <div style={{
                      background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)',
                      borderRadius: '10px', padding: '1.5rem',
                    }}>
                      <h3 style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f59e0b', marginBottom: '0.75rem' }}>Examiner Tips</h3>
                      <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                        {currentQ.examinerTips.map((t, i) => (
                          <li key={i} style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '0.25rem' }}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* 8. Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={startPractice} className="btn-primary">
              <RotateCcw size={15} /> Next Question
            </button>
            <button onClick={() => setStep('setup')} className="btn-secondary">
              Change Settings
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Fallback for unexpected state
  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />
      <div id="main-content" role="main" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem 4rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '4rem' }}>
          <AlertCircle size={32} color="#f59e0b" />
          <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Something went wrong. Let's start over.</p>
          <button onClick={() => { setStep('setup'); setMarkResult(null); }} className="btn-primary">
            <RotateCcw size={15} /> Back to Setup
          </button>
        </div>
      </div>
    </div>
  );
}
