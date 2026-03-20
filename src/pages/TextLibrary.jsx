import { useState } from 'react';
import { Library, Search, ChevronDown, ChevronUp, BookOpen, Feather, FileText, CheckCircle, XCircle, HelpCircle, X } from 'lucide-react';
import DOMPurify from 'dompurify';
import Navbar from '../components/Navbar';
import ANTHOLOGY_TEXTS from '../data/edexcel/texts';
import OCR_ANTHOLOGY_TEXTS from '../data/ocr/texts';
import WJEC_ANTHOLOGY_TEXTS from '../data/wjec/texts';

// Derive the anthology part label for each text
function getPartLabel(text) {
  if (text.anthologyPart === 1) return 'Part 1: Non-Fiction';
  if (text.textCategory === 'poetry') return 'Part 2: Poetry';
  if (text.textCategory === 'prose') return 'Part 2: Prose';
  // For OCR / WJEC texts that only have textType
  if (text.textType === 'Poetry') return 'Part 2: Poetry';
  return 'Other';
}

const BOARD_FILTERS = [
  { id: 'all', label: 'All Boards' },
  { id: 'Edexcel', label: 'Edexcel IGCSE', color: '#dc2626' },
  { id: 'OCR', label: 'OCR', color: '#7c3aed' },
  { id: 'WJEC', label: 'WJEC', color: '#ea580c' },
];

const BOARD_COLORS = {
  'Edexcel': '#dc2626',
  'OCR': '#7c3aed',
  'WJEC': '#ea580c',
};

const PART_FILTERS = [
  { id: 'all', label: 'All Texts' },
  { id: 'Part 1: Non-Fiction', label: 'Non-Fiction' },
  { id: 'Part 2: Poetry', label: 'Poetry' },
  { id: 'Part 2: Prose', label: 'Prose' },
];

const PART_ICONS = {
  'Part 1: Non-Fiction': <FileText size={14} />,
  'Part 2: Poetry': <Feather size={14} />,
  'Part 2: Prose': <BookOpen size={14} />,
};

const PART_COLORS = {
  'Part 1: Non-Fiction': '#3b82f6',
  'Part 2: Poetry': '#a78bfa',
  'Part 2: Prose': '#f59e0b',
};

// Combine all anthology texts
const ALL_TEXTS = [...ANTHOLOGY_TEXTS, ...OCR_ANTHOLOGY_TEXTS, ...WJEC_ANTHOLOGY_TEXTS];

export default function TextLibrary() {
  const [boardFilter, setBoardFilter] = useState('all');
  const [partFilter, setPartFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const [activeTab, setActiveTab] = useState('content'); // content | annotations | questions | quiz
  const [quizAnswers, setQuizAnswers] = useState({});

  // Tag texts with their part label
  const textsWithParts = ALL_TEXTS.map(t => ({
    ...t,
    partLabel: getPartLabel(t),
  }));

  // Filter
  const filtered = textsWithParts.filter(t => {
    if (boardFilter !== 'all' && t.board !== boardFilter) return false;
    if (partFilter !== 'all' && t.partLabel !== partFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        t.title.toLowerCase().includes(q) ||
        t.author.toLowerCase().includes(q) ||
        (t.themes || []).some(th => th.toLowerCase().includes(q)) ||
        (t.textType && t.textType.toLowerCase().includes(q))
      );
    }
    return true;
  });

  // Group by part
  const groups = {};
  filtered.forEach(t => {
    if (!groups[t.partLabel]) groups[t.partLabel] = [];
    groups[t.partLabel].push(t);
  });

  const groupOrder = ['Part 1: Non-Fiction', 'Part 2: Poetry', 'Part 2: Prose'];

  const pillStyle = (active, color) => ({
    padding: '0.5rem 1.25rem',
    borderRadius: '100px',
    fontSize: '0.85rem',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    background: active ? `${color || '#10b981'}18` : 'rgba(255,255,255,0.04)',
    color: active ? (color || '#34d399') : '#94a3b8',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: active ? `${color || '#10b981'}40` : 'rgba(255,255,255,0.08)',
  });

  function handleExpand(id) {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
      setActiveTab('content');
      setQuizAnswers({});
    }
  }

  function handleQuizAnswer(quizId, answerIdx) {
    setQuizAnswers(prev => ({ ...prev, [quizId]: answerIdx }));
  }

  const expandedText = expandedId ? ALL_TEXTS.find(t => t.id === expandedId) : null;

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />

      {/* ===== HEADER SECTION ===== */}
      <section style={{
        width: '100%',
        padding: '80px 2rem 0',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.08) 0%, transparent 60%)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <Library size={28} color="#10b981" />
            <h1 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.02em' }}>GCSE Anthology Texts</h1>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '700px', marginBottom: '2.5rem' }}>
            {ALL_TEXTS.length} anthology texts across Edexcel IGCSE, OCR, and WJEC boards — with annotations, exam questions, and quizzes.
          </p>

          {/* Board filters */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            {BOARD_FILTERS.map(bf => (
              <button
                key={bf.id}
                onClick={() => setBoardFilter(bf.id)}
                style={pillStyle(boardFilter === bf.id, bf.color)}
              >
                {bf.id !== 'all' && (
                  <span style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: bf.color,
                    marginRight: '0.4rem',
                    verticalAlign: 'middle',
                  }} />
                )}
                {bf.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
            <Search size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
            <input
              type="text"
              aria-label="Search texts"
              placeholder="Search by title, author, theme..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 2.5rem 0.75rem 2.75rem',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px',
                color: '#f1f5f9',
                fontSize: '0.9rem',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                aria-label="Clear search"
                style={{
                  position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.08)', border: 'none', borderRadius: '50%',
                  width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', padding: 0,
                }}
              >
                <X size={12} color="#94a3b8" />
              </button>
            )}
          </div>

          {/* Part filters */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            {PART_FILTERS.map(pf => (
              <button
                key={pf.id}
                onClick={() => setPartFilter(pf.id)}
                style={pillStyle(partFilter === pf.id, PART_COLORS[pf.id])}
              >
                {pf.label}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '0' }}>
            Showing {filtered.length} of {ALL_TEXTS.length} texts
          </p>
        </div>
      </section>

      {/* ===== TEXT LIST SECTION ===== */}
      <section style={{
        width: '100%',
        padding: '2rem 2rem 80px',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* No results */}
          {filtered.length === 0 && (
            <div style={{
              padding: '3rem',
              textAlign: 'center',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 14,
            }}>
              <p style={{ color: '#94a3b8', marginBottom: '0.75rem' }}>No texts match your search.</p>
              <button
                onClick={() => { setSearch(''); setBoardFilter('all'); setPartFilter('all'); }}
                style={{
                  background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)',
                  borderRadius: '8px', padding: '0.5rem 1.25rem', color: '#10b981',
                  fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer',
                }}
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Grouped rows */}
          {groupOrder.filter(g => groups[g]).map(groupName => (
            <div key={groupName} style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                color: PART_COLORS[groupName] || '#64748b',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                {PART_ICONS[groupName]}
                {groupName} ({groups[groupName].length})
              </h2>

              {/* Card container */}
              <div style={{
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 14,
                overflow: 'hidden',
              }}>
                {groups[groupName].map((text, idx) => {
                  const isExpanded = expandedId === text.id;
                  const partColor = PART_COLORS[text.partLabel] || '#10b981';
                  const isLast = idx === groups[groupName].length - 1;

                  return (
                    <div key={text.id}>
                      {/* Row header — always visible */}
                      <div
                        onClick={() => handleExpand(text.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1.25rem',
                          padding: 'clamp(1rem, 3vw, 1.5rem) clamp(1rem, 3vw, 1.75rem)',
                          borderLeft: `4px solid ${partColor}`,
                          borderBottom: (isLast && !isExpanded) ? 'none' : '1px solid rgba(255,255,255,0.06)',
                          background: isExpanded ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
                          transition: 'all 0.2s',
                          cursor: 'pointer',
                        }}
                        onMouseOver={e => {
                          if (!isExpanded) {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                            e.currentTarget.style.boxShadow = `inset 4px 0 0 ${partColor}, 0 2px 12px rgba(0,0,0,0.2)`;
                          }
                        }}
                        onMouseOut={e => {
                          if (!isExpanded) {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                            e.currentTarget.style.boxShadow = 'none';
                          }
                        }}
                      >
                        <div style={{ flex: '1 1 auto', minWidth: 0 }}>
                          {/* Badges row */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                            {text.textType && (
                              <span style={{
                                fontSize: '0.65rem',
                                fontWeight: 700,
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                                color: partColor,
                                background: `${partColor}12`,
                                padding: '0.2rem 0.6rem',
                                borderRadius: 4,
                                border: `1px solid ${partColor}25`,
                              }}>
                                {text.textType}
                              </span>
                            )}
                            {text.board && (
                              <span style={{
                                fontSize: '0.65rem',
                                fontWeight: 700,
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                                color: BOARD_COLORS[text.board] || '#94a3b8',
                                background: `${BOARD_COLORS[text.board] || '#94a3b8'}12`,
                                border: `1px solid ${BOARD_COLORS[text.board] || '#94a3b8'}25`,
                                padding: '0.2rem 0.6rem',
                                borderRadius: 4,
                              }}>
                                {text.board}
                              </span>
                            )}
                          </div>

                          {/* Title */}
                          <h3 style={{
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            color: '#f1f5f9',
                            margin: '0 0 0.25rem 0',
                            lineHeight: 1.3,
                          }}>
                            {text.title}
                          </h3>

                          {/* Author */}
                          <p style={{
                            fontSize: '0.88rem',
                            color: '#94a3b8',
                            margin: '0 0 0.5rem 0',
                            lineHeight: 1.5,
                          }}>
                            {text.author}
                          </p>

                          {/* Theme tags */}
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                            {(text.themes || []).slice(0, 5).map(theme => (
                              <span
                                key={theme}
                                style={{
                                  fontSize: '0.65rem',
                                  fontWeight: 600,
                                  color: partColor,
                                  background: `${partColor}12`,
                                  padding: '0.15rem 0.5rem',
                                  borderRadius: '4px',
                                  border: `1px solid ${partColor}25`,
                                }}
                              >
                                {theme}
                              </span>
                            ))}
                            {(text.themes || []).length > 5 && (
                              <span style={{ fontSize: '0.65rem', color: '#64748b' }}>
                                +{text.themes.length - 5}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Chevron */}
                        <div style={{ color: '#64748b', flexShrink: 0 }}>
                          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </div>

                      {/* Expanded content */}
                      {isExpanded && expandedText && (
                        <div style={{
                          borderLeft: `4px solid ${partColor}`,
                          borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.06)',
                          padding: 'clamp(1.25rem, 4vw, 2rem) clamp(1rem, 4vw, 2.5rem)',
                          background: 'rgba(255,255,255,0.02)',
                        }}>
                          {/* Inner tabs */}
                          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                            {[
                              { id: 'content', label: 'Full Lesson' },
                              { id: 'annotations', label: `Annotations (${(expandedText.annotations || []).length})` },
                              { id: 'questions', label: `Exam Questions (${(expandedText.examQuestions || []).length})` },
                              { id: 'quiz', label: `Quiz (${(expandedText.quiz || []).length})` },
                            ].map(t => (
                              <button
                                key={t.id}
                                onClick={() => setActiveTab(t.id)}
                                style={{
                                  padding: '0.5rem 1.25rem',
                                  borderRadius: '100px',
                                  fontSize: '0.85rem',
                                  fontWeight: 600,
                                  border: 'none',
                                  cursor: 'pointer',
                                  background: activeTab === t.id ? `${partColor}18` : 'rgba(255,255,255,0.04)',
                                  color: activeTab === t.id ? partColor : '#94a3b8',
                                  borderWidth: '1px',
                                  borderStyle: 'solid',
                                  borderColor: activeTab === t.id ? `${partColor}40` : 'rgba(255,255,255,0.06)',
                                  transition: 'all 0.2s',
                                }}
                              >
                                {t.label}
                              </button>
                            ))}
                          </div>

                          {/* Content tab */}
                          {activeTab === 'content' && (
                            <div
                              className="text-lesson-content"
                              style={{
                                fontSize: '0.95rem',
                                lineHeight: 1.8,
                                color: '#cbd5e1',
                              }}
                              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(expandedText.content) }}
                            />
                          )}

                          {/* Annotations tab */}
                          {activeTab === 'annotations' && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                              {(expandedText.annotations || []).length === 0 ? (
                                <p style={{ color: '#64748b' }}>No annotations available.</p>
                              ) : (
                                expandedText.annotations.map((ann, i) => (
                                  <div
                                    key={i}
                                    style={{
                                      background: 'rgba(255,255,255,0.02)',
                                      border: '1px solid rgba(255,255,255,0.06)',
                                      borderRadius: '12px',
                                      padding: '1.25rem',
                                    }}
                                  >
                                    <div style={{
                                      fontStyle: 'italic',
                                      color: '#f1f5f9',
                                      fontSize: '0.95rem',
                                      marginBottom: '0.75rem',
                                      borderLeft: `3px solid ${partColor}`,
                                      paddingLeft: '0.75rem',
                                    }}>
                                      "{ann.quote || ann.quotation}"
                                    </div>
                                    <div style={{ marginBottom: '0.5rem' }}>
                                      <span style={{
                                        fontSize: '0.65rem',
                                        fontWeight: 700,
                                        color: '#10b981',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                      }}>Technique</span>
                                      <p style={{ color: '#cbd5e1', fontSize: '0.85rem', marginTop: '0.15rem' }}>
                                        {ann.technique}
                                      </p>
                                    </div>
                                    <div style={{ marginBottom: '0.5rem' }}>
                                      <span style={{
                                        fontSize: '0.65rem',
                                        fontWeight: 700,
                                        color: '#f59e0b',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                      }}>Effect / Analysis</span>
                                      <p style={{ color: '#cbd5e1', fontSize: '0.85rem', marginTop: '0.15rem', lineHeight: 1.7 }}>
                                        {ann.effect || ann.analysis}
                                      </p>
                                    </div>
                                    {ann.examUse && (
                                      <div>
                                        <span style={{
                                          fontSize: '0.65rem',
                                          fontWeight: 700,
                                          color: '#a78bfa',
                                          textTransform: 'uppercase',
                                          letterSpacing: '0.05em',
                                        }}>Exam Use</span>
                                        <p style={{ color: '#cbd5e1', fontSize: '0.85rem', marginTop: '0.15rem', lineHeight: 1.7 }}>
                                          {ann.examUse}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                ))
                              )}
                            </div>
                          )}

                          {/* Exam questions tab */}
                          {activeTab === 'questions' && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                              {(expandedText.examQuestions || []).length === 0 ? (
                                <p style={{ color: '#64748b' }}>No exam questions available.</p>
                              ) : (
                                expandedText.examQuestions.map((eq, i) => (
                                  <details
                                    key={i}
                                    style={{
                                      background: 'rgba(255,255,255,0.02)',
                                      border: '1px solid rgba(255,255,255,0.06)',
                                      borderRadius: '12px',
                                      padding: '1.25rem',
                                      cursor: 'pointer',
                                    }}
                                  >
                                    <summary style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {eq.paper && (
                                          <span style={{
                                            fontSize: '0.6rem',
                                            fontWeight: 700,
                                            color: '#10b981',
                                            background: 'rgba(16,185,129,0.1)',
                                            padding: '0.15rem 0.5rem',
                                            borderRadius: '4px',
                                          }}>
                                            {eq.paper}
                                          </span>
                                        )}
                                        {eq.component && (
                                          <span style={{
                                            fontSize: '0.6rem',
                                            fontWeight: 700,
                                            color: '#10b981',
                                            background: 'rgba(16,185,129,0.1)',
                                            padding: '0.15rem 0.5rem',
                                            borderRadius: '4px',
                                          }}>
                                            {eq.component}
                                          </span>
                                        )}
                                        {eq.marks && (
                                          <span style={{
                                            fontSize: '0.6rem',
                                            fontWeight: 700,
                                            color: '#f59e0b',
                                            background: 'rgba(245,158,11,0.1)',
                                            padding: '0.15rem 0.5rem',
                                            borderRadius: '4px',
                                          }}>
                                            {eq.marks} marks
                                          </span>
                                        )}
                                      </div>
                                      <p style={{
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        color: '#f1f5f9',
                                        lineHeight: 1.6,
                                      }}>
                                        {eq.question}
                                      </p>
                                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                                        Click to reveal model answer
                                      </span>
                                    </summary>
                                    <div style={{
                                      marginTop: '1rem',
                                      paddingTop: '1rem',
                                      borderTop: '1px solid rgba(255,255,255,0.06)',
                                    }}>
                                      {eq.modelAnswer && (
                                        <div style={{ marginBottom: '1rem' }}>
                                          <span style={{
                                            fontSize: '0.65rem',
                                            fontWeight: 700,
                                            color: '#10b981',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                          }}>Model Answer</span>
                                          <div style={{
                                            color: '#cbd5e1',
                                            fontSize: '0.85rem',
                                            lineHeight: 1.8,
                                            marginTop: '0.5rem',
                                            whiteSpace: 'pre-line',
                                          }}>
                                            {eq.modelAnswer}
                                          </div>
                                        </div>
                                      )}
                                      {eq.tips && (
                                        <div style={{
                                          background: 'rgba(16,185,129,0.05)',
                                          border: '1px solid rgba(16,185,129,0.15)',
                                          borderRadius: '8px',
                                          padding: '0.875rem',
                                        }}>
                                          <span style={{
                                            fontSize: '0.65rem',
                                            fontWeight: 700,
                                            color: '#34d399',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                          }}>Exam Tips</span>
                                          <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.25rem', lineHeight: 1.7 }}>
                                            {eq.tips}
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  </details>
                                ))
                              )}
                            </div>
                          )}

                          {/* Quiz tab */}
                          {activeTab === 'quiz' && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                              {(expandedText.quiz || []).length === 0 ? (
                                <p style={{ color: '#64748b' }}>No quiz available.</p>
                              ) : (
                                <>
                                  {expandedText.quiz.map((q, qi) => {
                                    const answered = quizAnswers[q.id] !== undefined;
                                    const isCorrect = answered && quizAnswers[q.id] === q.correct;

                                    return (
                                      <div
                                        key={q.id}
                                        style={{
                                          background: 'rgba(255,255,255,0.02)',
                                          border: `1px solid ${answered ? (isCorrect ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)') : 'rgba(255,255,255,0.06)'}`,
                                          borderRadius: '12px',
                                          padding: '1.25rem',
                                        }}
                                      >
                                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1rem' }}>
                                          <span style={{
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            color: '#64748b',
                                            flexShrink: 0,
                                            marginTop: '0.1rem',
                                          }}>
                                            Q{qi + 1}
                                          </span>
                                          <p style={{ fontWeight: 600, fontSize: '0.9rem', color: '#f1f5f9', lineHeight: 1.5 }}>
                                            {q.question}
                                          </p>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                          {q.options.map((opt, oi) => {
                                            const isSelected = quizAnswers[q.id] === oi;
                                            const isCorrectOption = oi === q.correct;
                                            let optBg = 'rgba(255,255,255,0.03)';
                                            let optBorder = 'rgba(255,255,255,0.06)';
                                            let optColor = '#cbd5e1';
                                            let icon = null;

                                            if (answered) {
                                              if (isCorrectOption) {
                                                optBg = 'rgba(16,185,129,0.1)';
                                                optBorder = 'rgba(16,185,129,0.3)';
                                                optColor = '#34d399';
                                                icon = <CheckCircle size={14} color="#10b981" />;
                                              } else if (isSelected && !isCorrect) {
                                                optBg = 'rgba(239,68,68,0.1)';
                                                optBorder = 'rgba(239,68,68,0.3)';
                                                optColor = '#f87171';
                                                icon = <XCircle size={14} color="#ef4444" />;
                                              }
                                            }

                                            return (
                                              <button
                                                key={oi}
                                                onClick={() => !answered && handleQuizAnswer(q.id, oi)}
                                                disabled={answered}
                                                style={{
                                                  display: 'flex',
                                                  alignItems: 'center',
                                                  gap: '0.625rem',
                                                  padding: '0.75rem 1rem',
                                                  background: optBg,
                                                  border: `1px solid ${optBorder}`,
                                                  borderRadius: '8px',
                                                  color: optColor,
                                                  fontSize: '0.85rem',
                                                  textAlign: 'left',
                                                  cursor: answered ? 'default' : 'pointer',
                                                  transition: 'all 0.15s',
                                                  opacity: answered && !isSelected && !isCorrectOption ? 0.5 : 1,
                                                }}
                                              >
                                                {icon || (
                                                  <span style={{
                                                    width: '18px',
                                                    height: '18px',
                                                    borderRadius: '50%',
                                                    border: '2px solid rgba(255,255,255,0.15)',
                                                    flexShrink: 0,
                                                  }} />
                                                )}
                                                {opt}
                                              </button>
                                            );
                                          })}
                                        </div>

                                        {answered && q.explanation && (
                                          <div style={{
                                            marginTop: '0.875rem',
                                            padding: '0.875rem',
                                            background: isCorrect ? 'rgba(16,185,129,0.05)' : 'rgba(239,68,68,0.05)',
                                            border: `1px solid ${isCorrect ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)'}`,
                                            borderRadius: '8px',
                                          }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.375rem' }}>
                                              <HelpCircle size={13} color={isCorrect ? '#10b981' : '#ef4444'} />
                                              <span style={{
                                                fontSize: '0.7rem',
                                                fontWeight: 700,
                                                color: isCorrect ? '#10b981' : '#ef4444',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                              }}>
                                                {isCorrect ? 'Correct' : 'Incorrect'} — Explanation
                                              </span>
                                            </div>
                                            <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.7 }}>
                                              {q.explanation}
                                            </p>
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}

                                  {/* Quiz score summary */}
                                  {Object.keys(quizAnswers).length === expandedText.quiz.length && (
                                    <div style={{
                                      background: 'rgba(16,185,129,0.06)',
                                      border: '1px solid rgba(16,185,129,0.2)',
                                      borderRadius: '12px',
                                      padding: '1.25rem',
                                      textAlign: 'center',
                                    }}>
                                      <p style={{ fontSize: '1.1rem', fontWeight: 800, color: '#34d399', marginBottom: '0.25rem' }}>
                                        {expandedText.quiz.filter(q => quizAnswers[q.id] === q.correct).length} / {expandedText.quiz.length}
                                      </p>
                                      <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                                        Quiz complete. Review the explanations above to strengthen your understanding.
                                      </p>
                                      <button
                                        onClick={() => setQuizAnswers({})}
                                        style={{
                                          marginTop: '0.75rem',
                                          padding: '0.5rem 1.25rem',
                                          borderRadius: '8px',
                                          fontSize: '0.8rem',
                                          fontWeight: 600,
                                          border: '1px solid rgba(16,185,129,0.3)',
                                          background: 'rgba(16,185,129,0.1)',
                                          color: '#34d399',
                                          cursor: 'pointer',
                                        }}
                                      >
                                        Retry Quiz
                                      </button>
                                    </div>
                                  )}
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inline styles for HTML content */}
      <style>{`
        .text-lesson-content h2 {
          font-size: 1.15rem;
          font-weight: 800;
          color: #f1f5f9;
          margin: 1.75rem 0 0.75rem 0;
        }
        .text-lesson-content h3 {
          font-size: 1rem;
          font-weight: 700;
          color: #e2e8f0;
          margin: 1.5rem 0 0.5rem 0;
        }
        .text-lesson-content p {
          margin-bottom: 0.75rem;
        }
        .text-lesson-content ul, .text-lesson-content ol {
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .text-lesson-content li {
          margin-bottom: 0.5rem;
        }
        .text-lesson-content .text-extract {
          background: rgba(255,255,255,0.03);
          border-left: 3px solid #10b981;
          padding: 1rem 1.25rem;
          border-radius: 0 8px 8px 0;
          margin: 1rem 0;
          font-style: italic;
        }
        .text-lesson-content .text-extract .source {
          font-style: normal;
          font-size: 0.75rem;
          color: #64748b;
          margin-top: 0.75rem;
        }
        .text-lesson-content .key-term {
          color: #34d399;
          font-weight: 600;
        }
        .text-lesson-content div.key-term {
          background: rgba(16,185,129,0.06);
          border: 1px solid rgba(16,185,129,0.15);
          border-radius: 8px;
          padding: 0.875rem;
          margin: 1rem 0;
          font-size: 0.85rem;
        }
        .text-lesson-content .examiner-tip {
          background: rgba(59,130,246,0.06);
          border: 1px solid rgba(59,130,246,0.15);
          border-radius: 8px;
          padding: 0.875rem;
          margin: 1rem 0;
          font-size: 0.85rem;
          color: #93c5fd;
        }
        .text-lesson-content .common-mistake {
          background: rgba(239,68,68,0.06);
          border: 1px solid rgba(239,68,68,0.15);
          border-radius: 8px;
          padding: 0.875rem;
          margin: 1rem 0;
          font-size: 0.85rem;
          color: #fca5a5;
        }
        .text-lesson-content .model-answer {
          background: rgba(167,139,250,0.06);
          border: 1px solid rgba(167,139,250,0.15);
          border-radius: 8px;
          padding: 0.875rem;
          margin: 1rem 0;
          font-size: 0.85rem;
          color: #c4b5fd;
        }
        .text-lesson-content .context-note {
          background: rgba(245,158,11,0.06);
          border: 1px solid rgba(245,158,11,0.15);
          border-radius: 8px;
          padding: 0.875rem;
          margin: 1rem 0;
          font-size: 0.85rem;
          color: #fcd34d;
        }
      `}</style>
    </div>
  );
}
