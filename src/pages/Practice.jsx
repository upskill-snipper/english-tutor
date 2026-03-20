import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Dumbbell, ArrowRight, Star, Clock, ChevronLeft, TrendingUp, RotateCcw, AlertCircle, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import practiceQuestions from '../data/practiceData';
import { getPracticeProgress, savePracticeAttempt } from '../utils/auth';
import BOARDS from '../data/boardRegistry';

/* ── Assessment Objective definitions ── */
const AO_DEFINITIONS = {
  AO1: { label: 'AO1', title: 'Response & Quotation', desc: 'Read, understand and respond to texts; use textual references including quotations to support interpretation.' },
  AO2: { label: 'AO2', title: 'Language & Structure Analysis', desc: 'Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology.' },
  AO3: { label: 'AO3', title: 'Context', desc: 'Show understanding of the relationships between texts and the contexts in which they were written.' },
  AO5: { label: 'AO5', title: 'Content & Organisation', desc: 'Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register; organise information using structural and grammatical features.' },
  AO6: { label: 'AO6', title: 'Technical Accuracy', desc: 'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.' },
};

const GRADE_BOUNDARIES = [
  { grade: 'Grade 9', colour: '#a78bfa', desc: 'Perceptive, sophisticated analysis with judicious use of evidence' },
  { grade: 'Grade 7-8', colour: '#34d399', desc: 'Detailed, sustained analysis with well-integrated evidence' },
  { grade: 'Grade 5-6', colour: '#fbbf24', desc: 'Clear, relevant analysis with supporting evidence' },
  { grade: 'Grade 3-4', colour: '#f97316', desc: 'Some relevant comments with occasional evidence' },
];

/** Return the relevant AO keys for a given questionType string. */
function getAOsForQuestion(questionType) {
  const qt = questionType.toLowerCase();
  // Writing questions (creative / persuasive / transactional / narrative / descriptive / discursive)
  if (/writ|narrative|descriptive|discursive|transactional/.test(qt)) return ['AO5', 'AO6'];
  // Literature questions (would contain 'lit' in board-specific data)
  if (/literature/.test(qt)) return ['AO1', 'AO2', 'AO3'];
  // Language analysis / structure / evaluation / comparison / retrieval / synthesis
  return ['AO2'];
}

export default function Practice() {
  const [searchParams] = useSearchParams();
  const boardParam = searchParams.get('board');

  const [step, setStep] = useState('setup'); // setup | question | model | rated
  const [filters, setFilters] = useState(() => {
    // If a valid board query-param is present, use it as the initial board filter
    const validBoards = Object.keys(BOARDS);
    const initial = boardParam && validBoards.includes(boardParam) ? boardParam : 'AQA';
    return { board: initial, paper: 0, type: '', difficulty: '' };
  });
  const [currentQ, setCurrentQ] = useState(null);
  const [answer, setAnswer] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('Grade 4-5');
  const [selfRating, setSelfRating] = useState(null);
  const [startTime, setStartTime] = useState(null);

  const progress = getPracticeProgress();

  const boards = Object.keys(BOARDS);

  // Dynamic question types based on selected board
  const boardQuestions = useMemo(() =>
    practiceQuestions.filter(q => q.board === filters.board),
    [filters.board]
  );
  const types = useMemo(() =>
    [...new Set(boardQuestions.map(q => q.questionType))],
    [boardQuestions]
  );
  const difficulties = ['Foundation', 'Higher'];
  const hasBoardQuestions = boardQuestions.length > 0;

  function startPractice() {
    let pool = practiceQuestions;
    if (filters.board) pool = pool.filter(q => q.board === filters.board);
    if (filters.paper) pool = pool.filter(q => q.paper === filters.paper);
    if (filters.type) pool = pool.filter(q => q.questionType === filters.type);
    if (filters.difficulty) pool = pool.filter(q => q.difficulty === filters.difficulty);

    if (pool.length === 0) return;

    const q = pool[Math.floor(Math.random() * pool.length)];
    setCurrentQ(q);
    setAnswer('');
    setSelfRating(null);
    setStartTime(Date.now());
    setStep('question');
  }

  function showModel() {
    setStep('model');
  }

  function rate(rating) {
    setSelfRating(rating);
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    savePracticeAttempt(currentQ.id, rating, timeSpent);
    setStep('rated');
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

  if (step === 'setup') {
    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
        <Navbar />
        <div id="main-content" role="main" style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <Dumbbell size={24} color="#10b981" />
            <h1 style={{ fontSize: '1.75rem', fontWeight: 900 }}>Quick Practice</h1>
          </div>
          <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
            Answer real exam-style questions, see model answers at every grade band, and track your streak.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Attempts', value: progress.attempts, icon: Dumbbell },
              { label: 'Streak', value: `${progress.streak} days`, icon: TrendingUp },
            ].map((s, i) => (
              <div key={i} className="card" style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1, minWidth: '140px' }}>
                <s.icon size={18} color="#10b981" />
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>{s.value}</div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="card" style={{ padding: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem' }}>Configure Your Practice</h2>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', display: 'block', marginBottom: '0.5rem' }}>Exam Board</label>
              <div role="group" aria-label="Filter by board" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {boards.map(b => {
                  const boardColor = BOARDS[b]?.color || '#10b981';
                  const count = practiceQuestions.filter(q => q.board === b).length;
                  return (
                    <button
                      key={b}
                      onClick={() => setFilters(f => ({ ...f, board: b, type: '', paper: 0 }))}
                      style={{
                        ...selectStyle(filters.board === b),
                        borderColor: filters.board === b ? `${boardColor}60` : 'rgba(255,255,255,0.08)',
                        color: filters.board === b ? boardColor : '#94a3b8',
                        background: filters.board === b ? `${boardColor}15` : 'rgba(255,255,255,0.04)',
                      }}
                    >
                      {BOARDS[b]?.name || b} {count > 0
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
                  Practice questions for {BOARDS[filters.board]?.name || filters.board} are coming soon! In the meantime, try a board that has questions available — the core skills transfer across all boards.
                </p>
              </div>
            )}

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', display: 'block', marginBottom: '0.5rem' }}>Paper</label>
              <div role="group" aria-label="Filter by paper" style={{ display: 'flex', gap: '0.5rem' }}>
                {[0, 1, 2].map(p => (
                  <button key={p} onClick={() => setFilters(f => ({ ...f, paper: p }))} style={selectStyle(filters.paper === p)}>
                    {p === 0 ? 'Any' : `Paper ${p}`}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', display: 'block', marginBottom: '0.5rem' }}>Question Type</label>
              <div role="group" aria-label="Filter by question type" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <button onClick={() => setFilters(f => ({ ...f, type: '' }))} style={selectStyle(!filters.type)}>Any</button>
                {types.map(t => (
                  <button key={t} onClick={() => setFilters(f => ({ ...f, type: t }))} style={selectStyle(filters.type === t)}>{t}</button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', display: 'block', marginBottom: '0.5rem' }}>Difficulty</label>
              <div role="group" aria-label="Filter by difficulty" style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={() => setFilters(f => ({ ...f, difficulty: '' }))} style={selectStyle(!filters.difficulty)}>Any</button>
                {difficulties.map(d => (
                  <button key={d} onClick={() => setFilters(f => ({ ...f, difficulty: d }))} style={selectStyle(filters.difficulty === d)}>{d}</button>
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

  if (step === 'question') {
    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
        <Navbar />
        <div id="main-content" role="main" style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
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
              width: '100%', minHeight: '250px', padding: '1rem',
              background: '#0d1526', border: '1px solid #1e2d4a', borderRadius: '10px',
              color: '#f1f5f9', fontSize: '0.9rem', lineHeight: 1.8, resize: 'vertical',
              fontFamily: 'Georgia, serif', outline: 'none',
            }}
          />

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <button onClick={showModel} className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
              View Model Answers <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'model' || step === 'rated') {
    const grades = Object.keys(currentQ?.modelAnswers || {});
    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
        <Navbar />
        <div id="main-content" role="main" style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
          <button onClick={() => setStep('setup')} className="btn-ghost" style={{ marginBottom: '1.5rem' }}>
            <ChevronLeft size={15} /> New Question
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>Model Answers</h2>
            {(() => {
              const bColor = BOARDS[currentQ.board]?.color || '#34d399';
              return (
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: bColor, background: `${bColor}18`, padding: '0.2rem 0.5rem', borderRadius: '4px', border: `1px solid ${bColor}30` }}>
                  {BOARDS[currentQ.board]?.name || currentQ.board}
                </span>
              );
            })()}
          </div>

          {/* Grade selector */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            {grades.map(g => (
              <button key={g} onClick={() => setSelectedGrade(g)} style={selectStyle(selectedGrade === g)}>{g}</button>
            ))}
          </div>

          {/* Model answer */}
          <div className="card" style={{ padding: '1.75rem', marginBottom: '1.5rem' }}>
            <div style={{ color: '#10b981', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              Model Answer — {selectedGrade}
            </div>
            <div style={{ color: '#cbd5e1', lineHeight: 1.8, fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
              {currentQ.modelAnswers[selectedGrade]}
            </div>
          </div>

          {/* Mark scheme */}
          {currentQ.markScheme && (
            <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
              {(() => {
                const boardTerms = {
                  AQA: 'AQA Mark Scheme Criteria',
                  Edexcel: 'Edexcel Assessment Criteria',
                  'Edexcel IGCSE': 'Edexcel IGCSE Assessment Criteria',
                  OCR: 'OCR Mark Band Descriptors',
                  WJEC: 'Eduqas Marking Guidelines',
                };
                const bColor = BOARDS[currentQ.board]?.color || '#10b981';
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
            <div style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '10px', padding: '1.5rem', marginBottom: '2rem' }}>
              <h3 style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f59e0b', marginBottom: '0.75rem' }}>Examiner Tips</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                {currentQ.examinerTips.map((t, i) => (
                  <li key={i} style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '0.25rem' }}>{t}</li>
                ))}
              </ul>
            </div>
          )}

          {/* AO Mark Scheme Criteria */}
          {(() => {
            const aos = getAOsForQuestion(currentQ.questionType);
            return (
              <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <BookOpen size={16} color="#a78bfa" />
                  <h3 style={{ fontWeight: 700, fontSize: '0.9rem', margin: 0, color: '#e2e8f0' }}>
                    Mark Scheme Criteria — Assessment Objectives
                  </h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  {aos.map(key => {
                    const ao = AO_DEFINITIONS[key];
                    return (
                      <div key={key} style={{
                        background: 'rgba(167,139,250,0.06)', border: '1px solid rgba(167,139,250,0.15)',
                        borderRadius: '8px', padding: '0.75rem 1rem',
                      }}>
                        <div style={{ fontWeight: 700, fontSize: '0.8rem', color: '#a78bfa', marginBottom: '0.25rem' }}>
                          {ao.label}: {ao.title}
                        </div>
                        <div style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6 }}>{ao.desc}</div>
                      </div>
                    );
                  })}
                </div>

                <div style={{ marginBottom: '0.25rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Grade Boundary Reference</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {GRADE_BOUNDARIES.map(gb => (
                      <div key={gb.grade} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                        <span style={{
                          fontWeight: 700, fontSize: '0.75rem', color: gb.colour,
                          minWidth: '70px', flexShrink: 0,
                        }}>{gb.grade}</span>
                        <span style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.5 }}>{gb.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Self rating */}
          {step === 'model' && (
            <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <h3 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem' }}>Rate Your Answer</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                Compare your answer to the model. How close were you?
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {[
                  { label: 'Needs Work', value: 1, color: '#ef4444' },
                  { label: 'Getting There', value: 2, color: '#f59e0b' },
                  { label: 'Good', value: 3, color: '#10b981' },
                  { label: 'Excellent', value: 4, color: '#06b6d4' },
                ].map(r => (
                  <button key={r.value} onClick={() => rate(r.value)}
                    style={{
                      padding: '0.75rem 1.25rem', borderRadius: '10px',
                      background: `${r.color}10`, border: `1px solid ${r.color}30`,
                      color: r.color, fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer',
                    }}>
                    <Star size={14} style={{ marginRight: '0.25rem' }} /> {r.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'rated' && (
            <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#10b981', marginBottom: '0.5rem' }}>
                Rated! Keep practising.
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                Your streak: {getPracticeProgress().streak} day{getPracticeProgress().streak !== 1 ? 's' : ''}
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button onClick={startPractice} className="btn-primary">
                  <RotateCcw size={15} /> Next Question
                </button>
                <button onClick={() => setStep('setup')} className="btn-secondary">
                  Change Settings
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}
