import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  BookOpen, PenTool, BookMarked, BookText, Gamepad2, LayoutGrid,
  ArrowRight, ChevronLeft, ChevronRight, ChevronDown, ChevronUp,
  Clock, Award, Search, RotateCcw, MessageCircleQuestion, Shuffle,
  Eye, Swords, Clock3, Zap, PenLine, PlugZap, BookCheck, CalendarCheck,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Lauren from '../components/Lauren';
import { BOARD_MAP, getBoardData, getPaper } from '../utils/boardUtils';
import { markResponse } from '../utils/markingEngine';

/* ── Lazy data loaders (only fetched when needed) ──────────── */
const dataLoaders = {
  practiceQuestions: () => import('../data/practiceData').then(m => m.default),
  litPracticeQuestions: () => import('../data/litPracticeQuestions').then(m => m.default),
  flashcardDecks: () => import('../data/flashcardData').then(m => m.default),
  aqaLitSetTexts: () => import('../data/aqaLitSetTexts').then(m => m.default),
  gcseLitProse: () => import('../data/ks4LitProse').then(m => m.default),
  gcseLitPoetry: () => import('../data/ks4LitPoetry').then(m => m.default),
  aqaPowerConflictPoems: () => import('../data/aqaPowerConflictPoems').then(m => m.default),
  macbethComplete: () => import('../data/literature/macbethComplete').then(m => m.default),
  inspectorCallsComplete: () => import('../data/literature/inspectorCallsComplete').then(m => m.default),
  christmasCarolComplete: () => import('../data/literature/christmasCarolComplete').then(m => m.default),
  jekyllHydeComplete: () => import('../data/literature/jekyllHydeComplete').then(m => m.default),
  romeoJulietComplete: () => import('../data/literature/romeoJulietComplete').then(m => m.default),
  greatExpectationsComplete: () => import('../data/literature/greatExpectationsComplete').then(m => m.default),
  frankensteinComplete: () => import('../data/literature/frankensteinComplete').then(m => m.default),
  janeEyreComplete: () => import('../data/literature/janeEyreComplete').then(m => m.default),
  prideAndPrejudiceComplete: () => import('../data/literature/prideAndPrejudiceComplete').then(m => m.default),
  bloodBrothersComplete: () => import('../data/literature/bloodBrothersComplete').then(m => m.default),
  lordOfTheFliesComplete: () => import('../data/literature/lordOfTheFliesComplete').then(m => m.default),
  animalFarmComplete: () => import('../data/literature/animalFarmComplete').then(m => m.default),
  neverLetMeGoComplete: () => import('../data/literature/neverLetMeGoComplete').then(m => m.default),
  dnaComplete: () => import('../data/literature/dnaComplete').then(m => m.default),
  historyBoysComplete: () => import('../data/literature/historyBoysComplete').then(m => m.default),
};

/* Hook: lazily load a data module when a section becomes active */
function useLazyData(loaderKeys, shouldLoad) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(!!shouldLoad);
  const [error, setError] = useState(false);
  const dataRef = useRef(data);
  dataRef.current = data;
  const loaderKeysRef = useRef(loaderKeys);
  loaderKeysRef.current = loaderKeys;

  useEffect(() => {
    if (!shouldLoad) return;
    let cancelled = false;
    setLoading(true);
    setError(false);
    const keys = Array.isArray(loaderKeysRef.current) ? loaderKeysRef.current : [loaderKeysRef.current];
    const currentData = dataRef.current;
    Promise.all(
      keys.map(key =>
        currentData[key] !== undefined
          ? Promise.resolve(null)
          : dataLoaders[key]().then(val => ({ key, val })).catch(() => ({ key, val: null, failed: true }))
      )
    ).then(results => {
      if (cancelled) return;
      const updates = {};
      let anyFailed = false;
      for (const r of results) {
        if (r && r.val !== undefined) updates[r.key] = r.val;
        if (r && r.failed) anyFailed = true;
      }
      if (Object.keys(updates).length > 0) setData(prev => ({ ...prev, ...updates }));
      setLoading(false);
      if (anyFailed) setError(true);
    });
    return () => { cancelled = true; };
  }, [shouldLoad]);
  return { data, loading, error };
}

/* Literature study guides — added to dataLoaders and loaded lazily via useLazyData
   when the Texts section is active. See the `textsData` call below. */

function getSpec(registry, specKey) {
  if (!registry || !registry.specs[specKey]) return null;
  return registry.specs[specKey];
}

/* ── Sidebar nav items ──────────────────────────────────────── */
const NAV_ITEMS = [
  { id: 'overview',  label: 'Overview',  icon: LayoutGrid, showAlways: true },
  { id: 'texts',     label: 'Texts',     icon: BookOpen,   litOnly: true },
  { id: 'practice',  label: 'Practice',  icon: PenTool,    showAlways: true },
  { id: 'revision',  label: 'Revision',  icon: BookMarked, showAlways: true },
  { id: 'glossary',  label: 'Glossary',  icon: BookText,   showAlways: true },
  { id: 'games',     label: 'Games',     icon: Gamepad2,   showAlways: true },
];

/* ── Shared card style ──────────────────────────────────────── */
const card = {
  width: '100%',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: '12px',
  padding: '1.75rem 2rem',
  marginBottom: '1.25rem',
};

/* ── Helper: styled link button ─────────────────────────────── */
function ActionButton({ to, color, children }) {
  return (
    <Link to={to} style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
      background: color, color: '#fff',
      padding: '0.75rem 1.5rem', borderRadius: '10px',
      fontWeight: 700, fontSize: '0.95rem',
      textDecoration: 'none', transition: 'opacity 0.2s',
    }}
      onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
    >
      {children} <ArrowRight size={16} />
    </Link>
  );
}

/* ── Helper: pill tag ──────────────────────────────────────── */
function Pill({ color, children }) {
  return (
    <span style={{
      display: 'inline-block', fontSize: '0.8rem', fontWeight: 600,
      padding: '0.3rem 0.75rem', borderRadius: '6px',
      background: `${color}12`, color, marginRight: '0.4rem', marginBottom: '0.4rem',
    }}>
      {children}
    </span>
  );
}

/* ── Loading / error states ────────────────────────────────── */
function LoadingSpinner({ color = '#64748b', label = 'Loading...' }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '0.75rem',
      padding: '2rem', justifyContent: 'center',
    }}>
      <div style={{
        width: '20px', height: '20px', borderRadius: '50%',
        border: `2px solid ${color}30`, borderTopColor: color,
        animation: 'lazySpinAnim 0.8s linear infinite',
      }} />
      <span style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: 500 }}>{label}</span>
      <style>{`@keyframes lazySpinAnim { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function LoadErrorMessage({ onRetry, color = '#64748b' }) {
  return (
    <div style={{
      ...card, textAlign: 'center', padding: '2rem',
    }}>
      <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0, marginBottom: '0.75rem' }}>
        Failed to load data. Please try again.
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          style={{
            background: `${color}15`, color, border: 'none',
            padding: '0.5rem 1.25rem', borderRadius: '8px',
            fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          }}
        >
          <RotateCcw size={14} /> Try Again
        </button>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   SECTION: OVERVIEW
   ══════════════════════════════════════════════════════════════ */
function OverviewSection({ paper, spec, boardName, color, subject, isLit }) {
  return (
    <div>
      {/* Welcome banner */}
      <div style={{
        width: '100%', borderRadius: '14px', padding: '2.25rem 2.5rem',
        background: `linear-gradient(135deg, ${color}18, ${color}08)`,
        border: `1px solid ${color}30`,
        borderLeft: `4px solid ${color}`,
        marginBottom: '2rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem', color: '#f1f5f9' }}>
              {paper ? paper.name : `${boardName} ${subject === 'language' ? 'English Language' : 'English Literature'}`}
            </h2>
            <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
              {spec
                ? `Part of the ${spec.name} (${spec.code}) specification. Use the sidebar to navigate between revision materials, practice questions, glossary terms, and games — all filtered to this specific paper.`
                : `Study materials for ${boardName} ${subject === 'language' ? 'English Language' : 'English Literature'}. Select a section from the sidebar to get started.`
              }
            </p>
          </div>
          <Lauren emotion="encouraging" size="small" />
        </div>
      </div>

      {/* Paper details */}
      {paper && (
        <div style={card}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem' }}>Paper Details</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '1.5rem' }}>
            {paper.duration && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={16} color={color} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Duration</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700 }}>{paper.duration}</div>
                </div>
              </div>
            )}
            {paper.marks && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={16} color={color} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total Marks</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700 }}>{paper.marks}</div>
                </div>
              </div>
            )}
          </div>

          {/* Sections breakdown */}
          {paper.sections && paper.sections.length > 0 && (
            <>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem', color: '#94a3b8' }}>Sections</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {paper.sections.map((section, idx) => (
                  <div key={idx} style={{
                    padding: '1rem 1.25rem',
                    borderRadius: '10px',
                    background: `${color}06`,
                    border: `1px solid ${color}15`,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{section.name}</span>
                      <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{section.marks} marks</span>
                    </div>
                    {section.texts && (
                      <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.4rem' }}>{section.texts}</div>
                    )}
                    {section.questions && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem' }}>
                        {section.questions.map((q, qi) => (
                          <span key={qi} style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            padding: '0.2rem 0.6rem',
                            borderRadius: '4px',
                            background: `${color}12`,
                            color,
                          }}>
                            {q.num}: {q.type} ({q.marks}m)
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Timing guidance */}
      {paper && paper.sections && paper.sections.length > 0 && (
        <div style={card}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem' }}>Timing Guidance</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
            You have <strong style={{ color: '#f1f5f9' }}>{paper.duration}</strong> for <strong style={{ color: '#f1f5f9' }}>{paper.marks} marks</strong>. As a rule of thumb, spend roughly one minute per mark, plus leave five minutes at the end for checking.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {paper.sections.map((section, idx) => {
              const approxMins = section.marks;
              return (
                <div key={idx} style={{
                  flex: '1 1 200px', padding: '0.75rem 1rem', borderRadius: '8px',
                  background: `${color}06`, border: `1px solid ${color}15`,
                }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.25rem' }}>{section.name}</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>~{approxMins} minutes &middot; {section.marks} marks</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Lauren tip */}
      <div style={{
        ...card,
        display: 'flex', alignItems: 'flex-start', gap: '1.25rem',
        background: 'rgba(16, 185, 129, 0.04)',
        border: '1px solid rgba(16, 185, 129, 0.12)',
      }}>
        <Lauren emotion="encouraging" size="small" />
        <div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem', color: '#e2e8f0' }}>
            Lauren&apos;s Tip
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
            {isLit
              ? 'Start by reading through your set texts and building up a bank of key quotes. Then move to practice questions so you can apply what you know under timed conditions. I will mark your work and show you exactly where to pick up extra marks!'
              : 'The best way to improve in English Language is consistent practice. Try one timed question a day, read my feedback carefully, and focus on the skills flagged in the mark scheme. You will see your marks climb quickly!'
            }
          </p>
        </div>
      </div>

      {/* Quick nav */}
      <div style={card}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem' }}>Get Started</h3>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          Use the sidebar to navigate between sections. Each section contains content specific to this paper and specification.
        </p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   SECTION: TEXTS (Literature only)
   ══════════════════════════════════════════════════════════════ */

/* Categorise a set text into Shakespeare / 19th Century / Modern / Poetry */
function categoriseText(text) {
  const t = (text.title || '').toLowerCase() + ' ' + (text.subtitle || '').toLowerCase();
  if (t.includes('macbeth') || t.includes('romeo') || t.includes('tempest') || t.includes('shakespeare') || t.includes('merchant') || t.includes('much ado')) return 'Shakespeare';
  if (t.includes('christmas carol') || t.includes('jekyll') || t.includes('frankenstein') || t.includes('19th') || t.includes('nineteenth') || t.includes('pride and prejudice') || t.includes('jane eyre') || t.includes('great expectations')) return '19th Century';
  if (t.includes('poetry') || t.includes('poem') || t.includes('anthology') || t.includes('conflict')) return 'Poetry';
  return 'Modern';
}

function getTextSummary(text) {
  /* Try to extract a brief summary from the first module content */
  if (text.description) return text.description;
  if (text.moduleList && text.moduleList[0] && text.moduleList[0].content) {
    const raw = text.moduleList[0].content.replace(/<[^>]+>/g, '');
    return raw.substring(0, 200).trim() + '...';
  }
  return 'Study guide with key quotes, themes, and character analysis.';
}

function getTextThemes(text) {
  const themes = [];
  const content = JSON.stringify(text).toLowerCase();
  const themeList = ['ambition', 'guilt', 'power', 'supernatural', 'appearance vs reality', 'gender',
    'responsibility', 'class', 'generation', 'morality', 'love', 'conflict', 'nature',
    'duality', 'repression', 'secrecy', 'good and evil', 'redemption', 'family',
    'social responsibility', 'inequality', 'isolation', 'violence', 'fate', 'loyalty'];
  for (const theme of themeList) {
    if (content.includes(theme)) themes.push(theme.charAt(0).toUpperCase() + theme.slice(1));
    if (themes.length >= 6) break;
  }
  return themes.length > 0 ? themes : ['Key themes covered in the study guide'];
}

function getTextQuotes(text) {
  const quotes = [];
  if (text.moduleList) {
    for (const mod of text.moduleList) {
      if (!mod.content) continue;
      /* Pull quotes from text-extract divs */
      const extractMatches = mod.content.match(/<div class="text-extract">([\s\S]*?)<\/div>/g) || [];
      for (const match of extractMatches) {
        const clean = match.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
        if (clean.length > 10 && clean.length < 200) {
          quotes.push(clean);
        }
        if (quotes.length >= 5) break;
      }
      if (quotes.length >= 5) break;
    }
  }
  return quotes.length > 0 ? quotes : ['Key quotes available in the full study guide.'];
}

function TextsSection({ spec, boardName, color, isLit }) {
  const [expandedText, setExpandedText] = useState(null);

  /* Lazy-load text data only when this section mounts */
  const { data: textData, loading: textsLoading, error: textsError } = useLazyData(
    ['aqaLitSetTexts', 'gcseLitProse', 'gcseLitPoetry', 'aqaPowerConflictPoems',
     'macbethComplete', 'inspectorCallsComplete', 'christmasCarolComplete', 'jekyllHydeComplete',
     'romeoJulietComplete', 'greatExpectationsComplete', 'frankensteinComplete', 'janeEyreComplete',
     'prideAndPrejudiceComplete', 'bloodBrothersComplete', 'lordOfTheFliesComplete', 'animalFarmComplete',
     'neverLetMeGoComplete', 'dnaComplete', 'historyBoysComplete'],
    true
  );
  const aqaLitSetTexts = textData.aqaLitSetTexts;
  const gcseLitProse = textData.gcseLitProse;
  const gcseLitPoetry = textData.gcseLitPoetry;
  const aqaPowerConflictPoems = textData.aqaPowerConflictPoems;
  const macbethComplete = textData.macbethComplete;
  const inspectorCallsComplete = textData.inspectorCallsComplete;
  const christmasCarolComplete = textData.christmasCarolComplete;
  const jekyllHydeComplete = textData.jekyllHydeComplete;
  const romeoJulietComplete = textData.romeoJulietComplete;
  const greatExpectationsComplete = textData.greatExpectationsComplete;
  const frankensteinComplete = textData.frankensteinComplete;
  const janeEyreComplete = textData.janeEyreComplete;
  const prideAndPrejudiceComplete = textData.prideAndPrejudiceComplete;
  const bloodBrothersComplete = textData.bloodBrothersComplete;
  const lordOfTheFliesComplete = textData.lordOfTheFliesComplete;
  const animalFarmComplete = textData.animalFarmComplete;
  const neverLetMeGoComplete = textData.neverLetMeGoComplete;
  const dnaComplete = textData.dnaComplete;
  const historyBoysComplete = textData.historyBoysComplete;

  /* Gather all available set text data */
  const allTexts = useMemo(() => {
    const texts = [];

    /* From aqaLitSetTexts (array of course objects) */
    if (Array.isArray(aqaLitSetTexts)) {
      for (const t of aqaLitSetTexts) {
        if (t.board === boardName || boardName === 'AQA') {
          texts.push({ ...t, _source: 'aqaLitSetTexts' });
        }
      }
    }

    /* From complete literature data */
    const completeTexts = [
      macbethComplete, inspectorCallsComplete, christmasCarolComplete, jekyllHydeComplete,
      romeoJulietComplete, greatExpectationsComplete, frankensteinComplete, janeEyreComplete,
      prideAndPrejudiceComplete, bloodBrothersComplete, lordOfTheFliesComplete, animalFarmComplete,
      neverLetMeGoComplete, dnaComplete, historyBoysComplete,
    ].filter(Boolean);
    for (const t of completeTexts) {
      if (!texts.find(existing => existing.id === t.id)) {
        texts.push({ ...t, _source: 'literature' });
      }
    }

    /* From prose/drama course */
    if (gcseLitProse && (gcseLitProse.board === boardName || boardName === 'AQA')) {
      if (!texts.find(existing => existing.id === gcseLitProse.id)) {
        texts.push({ ...gcseLitProse, _source: 'ks4LitProse' });
      }
    }

    /* From poetry course */
    if (gcseLitPoetry && (gcseLitPoetry.board === boardName || boardName === 'AQA')) {
      if (!texts.find(existing => existing.id === gcseLitPoetry.id)) {
        texts.push({ ...gcseLitPoetry, _source: 'ks4LitPoetry' });
      }
    }

    /* Power & Conflict poems */
    if (Array.isArray(aqaPowerConflictPoems) && aqaPowerConflictPoems.length > 0) {
      for (const p of aqaPowerConflictPoems) {
        texts.push({ ...p, _source: 'aqaPowerConflictPoems' });
      }
    }

    return texts;
  }, [boardName, aqaLitSetTexts, gcseLitProse, gcseLitPoetry, aqaPowerConflictPoems]);

  /* Group by category */
  const grouped = useMemo(() => {
    const groups = { Shakespeare: [], '19th Century': [], Modern: [], Poetry: [] };
    for (const t of allTexts) {
      const cat = categoriseText(t);
      groups[cat].push(t);
    }
    return groups;
  }, [allTexts]);

  const categoryColors = {
    Shakespeare: '#a855f7',
    '19th Century': '#f59e0b',
    Modern: '#3b82f6',
    Poetry: '#10b981',
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
        Set Texts &mdash; {boardName}
      </h2>
      <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
        Explore your set texts with summaries, key quotes, and themes. Click any text to expand its details.
      </p>

      {textsLoading && <LoadingSpinner color={color} label="Loading texts..." />}
      {!textsLoading && textsError && <LoadErrorMessage color={color} />}

      {!textsLoading && !textsError && Object.entries(grouped).map(([category, texts]) => {
        if (texts.length === 0) return null;
        const catColor = categoryColors[category] || color;
        return (
          <div key={category} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: catColor }}>
              {category}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {texts.map(text => {
                const isExpanded = expandedText === text.id;
                return (
                  <div key={text.id} style={{
                    ...card,
                    marginBottom: 0,
                    cursor: 'pointer',
                    borderLeft: `3px solid ${catColor}`,
                    transition: 'all 0.2s',
                  }}>
                    {/* Card header - always visible */}
                    <div
                      onClick={() => setExpandedText(isExpanded ? null : text.id)}
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}
                    >
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                          <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, color: '#f1f5f9' }}>
                            {text.title}
                          </h4>
                          <Pill color={catColor}>{category}</Pill>
                        </div>
                        {text.subtitle && (
                          <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.35rem' }}>{text.subtitle}</div>
                        )}
                        <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                          {getTextSummary(text).substring(0, 150)}{getTextSummary(text).length > 150 ? '...' : ''}
                        </p>
                      </div>
                      <div style={{ marginLeft: '1rem', color: '#64748b', flexShrink: 0 }}>
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </div>

                    {/* Expanded content */}
                    {isExpanded && (
                      <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                        {/* Summary */}
                        <div style={{ marginBottom: '1rem' }}>
                          <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: catColor, marginBottom: '0.5rem' }}>Summary</h5>
                          <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>
                            {getTextSummary(text)}
                          </p>
                        </div>

                        {/* Themes */}
                        <div style={{ marginBottom: '1rem' }}>
                          <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: catColor, marginBottom: '0.5rem' }}>Themes</h5>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                            {getTextThemes(text).map((theme, i) => (
                              <Pill key={i} color={catColor}>{theme}</Pill>
                            ))}
                          </div>
                        </div>

                        {/* Key Quotes */}
                        <div style={{ marginBottom: '1rem' }}>
                          <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: catColor, marginBottom: '0.5rem' }}>Key Quotes</h5>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            {getTextQuotes(text).map((quote, i) => (
                              <div key={i} style={{
                                padding: '0.6rem 1rem', borderRadius: '8px',
                                background: `${catColor}06`, border: `1px solid ${catColor}12`,
                                fontSize: '0.85rem', color: '#cbd5e1', fontStyle: 'italic', lineHeight: 1.6,
                              }}>
                                {quote}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Module list if available */}
                        {text.moduleList && text.moduleList.length > 0 && (
                          <div>
                            <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: catColor, marginBottom: '0.5rem' }}>
                              Study Modules ({text.moduleList.length})
                            </h5>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                              {text.moduleList.map((mod, i) => (
                                <Pill key={i} color={catColor}>{mod.title}</Pill>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {!textsLoading && !textsError && allTexts.length === 0 && (
        <div style={card}>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
            No set texts available for {boardName} yet. Check back soon — content is being added regularly.
          </p>
        </div>
      )}

      <div style={{ marginTop: '1rem' }}>
        <ActionButton to={`/texts?board=${boardName}`} color={color}>
          Open Full Text Library
        </ActionButton>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   SECTION: PRACTICE
   ══════════════════════════════════════════════════════════════ */
function PracticeSection({ paper, paperLabel, boardName, color, subject, boardId, paperId, isLit }) {
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState({});
  const [showModel, setShowModel] = useState({});
  const [submitting, setSubmitting] = useState({});

  /* Lazy-load practice data only when this section mounts */
  const { data: practiceData, loading: practiceLoading, error: practiceError } = useLazyData(['practiceQuestions', 'litPracticeQuestions'], true);
  const practiceQuestions = practiceData.practiceQuestions;
  const litPracticeQuestions = practiceData.litPracticeQuestions;

  const paperNum = paperId?.replace('paper-', '');

  /* Filter questions by board + paper + subject */
  const filteredQuestions = useMemo(() => {
    const allQuestions = [
      ...(Array.isArray(practiceQuestions) ? practiceQuestions : []),
      ...(Array.isArray(litPracticeQuestions) ? litPracticeQuestions : []),
    ];

    return allQuestions.filter(q => {
      /* Match board */
      if (q.board && q.board !== boardName) return false;
      /* Match paper number if available */
      if (paperNum && q.paper !== undefined && String(q.paper) !== String(paperNum)) return false;
      /* Match subject if available on the question */
      if (q.subject) {
        const subjectMatch = isLit ? 'literature' : 'language';
        if (q.subject !== subjectMatch) return false;
      }
      return true;
    });
  }, [boardName, paperNum, isLit, practiceQuestions, litPracticeQuestions]);

  const handleSubmit = useCallback(async (questionId) => {
    const question = filteredQuestions.find(q => q.id === questionId);
    if (!question || !answers[questionId]?.trim()) return;

    setSubmitting(prev => ({ ...prev, [questionId]: true }));

    /* Small delay to show loading state */
    await new Promise(r => setTimeout(r, 300));

    try {
      const result = markResponse(
        answers[questionId],
        {
          questionType: question.questionType,
          marks: question.marks || 30,
          markScheme: question.markScheme,
          extract: question.extract,
          question: question.question,
        },
        boardName
      );
      setResults(prev => ({ ...prev, [questionId]: result }));
    } catch (err) {
      setResults(prev => ({
        ...prev,
        [questionId]: { error: 'Marking failed. Please try again.' }
      }));
    }

    setSubmitting(prev => ({ ...prev, [questionId]: false }));
  }, [filteredQuestions, answers, boardName]);

  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
        Practice &mdash; {paperLabel}
      </h2>
      <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
        Exam-style questions graded against {boardName} mark schemes. Write your answer, submit for marking, and receive detailed feedback with grade and AO breakdown.
      </p>

      {practiceLoading ? (
        <LoadingSpinner color={color} label="Loading practice questions..." />
      ) : practiceError ? (
        <LoadErrorMessage color={color} />
      ) : filteredQuestions.length === 0 ? (
        <div style={card}>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
            No practice questions match this paper and board combination yet. More questions are being added regularly.
            Try the full practice area for all available questions.
          </p>
          <div style={{ marginTop: '1rem' }}>
            <ActionButton to={`/practice?board=${boardName}&subject=${subject}`} color={color}>
              Open All Practice Questions
            </ActionButton>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {filteredQuestions.map((q, idx) => {
            const result = results[q.id];
            const isSubmitting = submitting[q.id];
            return (
              <div key={q.id} style={{ ...card, marginBottom: 0 }}>
                {/* Question header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '0.75rem', fontWeight: 700, color: '#fff',
                    background: color, padding: '0.2rem 0.6rem', borderRadius: '4px',
                  }}>
                    Q{idx + 1}
                  </span>
                  <Pill color={color}>{q.questionType}</Pill>
                  {q.difficulty && <Pill color="#64748b">{q.difficulty}</Pill>}
                  {q.marks && <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{q.marks} marks</span>}
                </div>

                {/* Extract */}
                {q.extract && (
                  <div style={{
                    padding: '1rem 1.25rem', borderRadius: '8px', marginBottom: '1rem',
                    background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)',
                    fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.8, fontStyle: 'italic',
                    maxHeight: '250px', overflowY: 'auto',
                    whiteSpace: 'pre-wrap',
                  }}>
                    {q.extract}
                    {q.extractSource && (
                      <div style={{ marginTop: '0.5rem', fontStyle: 'normal', fontSize: '0.75rem', color: '#64748b' }}>
                        — {q.extractSource}
                      </div>
                    )}
                  </div>
                )}

                {/* Question text */}
                <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f1f5f9', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {q.question}
                </p>

                {/* Answer textarea */}
                <textarea
                  value={answers[q.id] || ''}
                  onChange={e => setAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                  placeholder="Write your answer here..."
                  disabled={!!result}
                  style={{
                    width: '100%', minHeight: '180px', padding: '1rem',
                    background: result ? 'rgba(255,255,255,0.01)' : 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px', color: '#e2e8f0', fontSize: '0.9rem',
                    lineHeight: 1.7, resize: 'vertical', fontFamily: 'inherit',
                    opacity: result ? 0.7 : 1,
                  }}
                />

                {/* Submit button */}
                {!result && (
                  <button
                    onClick={() => handleSubmit(q.id)}
                    disabled={!answers[q.id]?.trim() || isSubmitting}
                    style={{
                      marginTop: '0.75rem', padding: '0.7rem 1.5rem',
                      background: answers[q.id]?.trim() ? color : '#334155',
                      color: '#fff', border: 'none', borderRadius: '8px',
                      fontWeight: 700, fontSize: '0.9rem', cursor: answers[q.id]?.trim() ? 'pointer' : 'not-allowed',
                      opacity: isSubmitting ? 0.7 : 1,
                      transition: 'all 0.2s',
                    }}
                  >
                    {isSubmitting ? 'Marking...' : 'Submit for Marking'}
                  </button>
                )}

                {/* Marking result */}
                {result && !result.error && (
                  <div style={{
                    marginTop: '1.25rem', padding: '1.25rem', borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.04)', border: '1px solid rgba(16, 185, 129, 0.15)',
                  }}>
                    {/* Grade + marks header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                      <div style={{
                        width: '64px', height: '64px', borderRadius: '50%',
                        background: `linear-gradient(135deg, ${color}, ${color}80)`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>
                          {result.overallGrade}
                        </span>
                      </div>
                      <div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.25rem' }}>
                          {result.totalMarks}/{q.marks || 30} marks ({result.overallPercentage}%)
                        </div>
                        <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                          Grade {result.overallGrade} &middot; Marked by AI Examiner
                        </div>
                      </div>
                    </div>

                    {/* AO Breakdown */}
                    {result.aoBreakdown && result.aoBreakdown.length > 0 && (
                      <div style={{ marginBottom: '1rem' }}>
                        <h5 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94a3b8', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Assessment Objective Breakdown
                        </h5>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                          {result.aoBreakdown.map((ao, i) => (
                            <div key={i} style={{
                              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                              padding: '0.5rem 0.75rem', borderRadius: '6px',
                              background: 'rgba(255,255,255,0.02)',
                            }}>
                              <div>
                                <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#e2e8f0' }}>{ao.ao}</span>
                                {ao.title && <span style={{ fontSize: '0.8rem', color: '#64748b', marginLeft: '0.5rem' }}>{ao.title}</span>}
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                                  {ao.marks}/{ao.maxMarks}
                                </span>
                                <span style={{
                                  fontSize: '0.7rem', fontWeight: 700, color: '#fff',
                                  background: ao.percentage >= 70 ? '#10b981' : ao.percentage >= 40 ? '#f59e0b' : '#ef4444',
                                  padding: '0.15rem 0.4rem', borderRadius: '3px',
                                }}>
                                  Band {ao.band}/{ao.maxBand}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Feedback: Strengths + Improvements */}
                    {result.strengths && result.strengths.length > 0 && (
                      <div style={{ marginBottom: '0.75rem' }}>
                        <h5 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10b981', marginBottom: '0.4rem' }}>Strengths</h5>
                        <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.7 }}>
                          {result.strengths.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                      </div>
                    )}
                    {result.improvements && result.improvements.length > 0 && (
                      <div style={{ marginBottom: '0.75rem' }}>
                        <h5 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f59e0b', marginBottom: '0.4rem' }}>Areas for Improvement</h5>
                        <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.7 }}>
                          {result.improvements.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                      </div>
                    )}

                    {/* Examiner comment */}
                    {result.examinerComment && (
                      <div style={{
                        padding: '0.75rem 1rem', borderRadius: '8px',
                        background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                        marginBottom: '0.75rem',
                      }}>
                        <h5 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.3rem' }}>Examiner Comment</h5>
                        <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>{result.examinerComment}</p>
                      </div>
                    )}

                    {/* Reset button */}
                    <button
                      onClick={() => {
                        setResults(prev => { const n = { ...prev }; delete n[q.id]; return n; });
                        setAnswers(prev => { const n = { ...prev }; delete n[q.id]; return n; });
                      }}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                        background: 'rgba(255,255,255,0.05)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.1)',
                        padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600,
                        cursor: 'pointer', marginTop: '0.5rem',
                      }}
                    >
                      <RotateCcw size={14} /> Try Again
                    </button>
                  </div>
                )}

                {/* Error state */}
                {result && result.error && (
                  <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', borderRadius: '8px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                    <p style={{ color: '#f87171', fontSize: '0.85rem', margin: 0 }}>{result.error}</p>
                  </div>
                )}

                {/* Model answers (expandable) */}
                {q.modelAnswers && (
                  <div style={{ marginTop: '1rem' }}>
                    <button
                      onClick={() => setShowModel(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.4rem',
                        background: 'none', border: 'none', color: color,
                        fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', padding: 0,
                      }}
                    >
                      {showModel[q.id] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      {showModel[q.id] ? 'Hide Model Answers' : 'Show Model Answers'}
                    </button>

                    {showModel[q.id] && (
                      <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {Object.entries(q.modelAnswers).map(([grade, answer]) => (
                          <div key={grade} style={{
                            padding: '1rem', borderRadius: '8px',
                            background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                          }}>
                            <div style={{
                              fontSize: '0.8rem', fontWeight: 700, color, marginBottom: '0.5rem',
                              display: 'inline-block', background: `${color}12`, padding: '0.2rem 0.5rem', borderRadius: '4px',
                            }}>
                              {grade}
                            </div>
                            <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.7, margin: 0, whiteSpace: 'pre-wrap' }}>
                              {answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   SECTION: REVISION (Flashcards)
   ══════════════════════════════════════════════════════════════ */
function RevisionSection({ paper, paperLabel, boardName, color, spec, isLit }) {
  const [activeDeck, setActiveDeck] = useState(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  /* Lazy-load flashcard data only when this section mounts */
  const { data: revisionData, loading: revisionLoading, error: revisionError } = useLazyData(['flashcardDecks'], true);
  const flashcardDecks = revisionData.flashcardDecks;

  /* Filter flashcard decks by board */
  const filteredDecks = useMemo(() => {
    if (!Array.isArray(flashcardDecks)) return [];
    return flashcardDecks.filter(deck => {
      if (deck.board === 'All') return true;
      if (deck.board === boardName) return true;
      /* Fuzzy match for AQA variants */
      if (boardName === 'AQA' && (!deck.board || deck.board === 'AQA')) return true;
      return false;
    });
  }, [boardName, flashcardDecks]);

  const currentDeck = activeDeck !== null ? filteredDecks[activeDeck] : null;
  const currentCards = currentDeck?.cards || [];
  const currentCard = currentCards[cardIndex] || null;

  const handleNextCard = () => {
    setFlipped(false);
    setCardIndex(prev => Math.min(prev + 1, currentCards.length - 1));
  };

  const handlePrevCard = () => {
    setFlipped(false);
    setCardIndex(prev => Math.max(prev - 1, 0));
  };

  const handleSelectDeck = (idx) => {
    setActiveDeck(idx);
    setCardIndex(0);
    setFlipped(false);
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
        Revision &mdash; {paperLabel}
      </h2>
      <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
        Flashcards for retrieval practice and spaced repetition. Click a deck to begin, then tap cards to flip them.
      </p>

      {/* Active deck - flashcard viewer */}
      {currentDeck && currentCard && (
        <div style={{ marginBottom: '2rem' }}>
          {/* Deck header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <button
              onClick={() => { setActiveDeck(null); setCardIndex(0); setFlipped(false); }}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.3rem',
                background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer',
                fontSize: '0.85rem', fontWeight: 600, padding: 0,
              }}
            >
              <ChevronLeft size={14} /> All Decks
            </button>
            <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
              Card {cardIndex + 1} of {currentCards.length}
            </span>
          </div>

          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.75rem' }}>
            {currentDeck.title}
          </h3>

          {/* Flashcard */}
          <div
            onClick={() => setFlipped(!flipped)}
            style={{
              ...card,
              minHeight: '200px',
              cursor: 'pointer',
              background: flipped
                ? `linear-gradient(135deg, ${color}08, ${color}04)`
                : 'rgba(255,255,255,0.04)',
              border: flipped ? `1px solid ${color}25` : '1px solid rgba(255,255,255,0.08)',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              position: 'relative',
            }}
          >
            <div style={{
              position: 'absolute', top: '0.75rem', right: '1rem',
              fontSize: '0.7rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase',
            }}>
              {flipped ? 'Answer' : 'Question'} &middot; Click to flip
            </div>
            <p style={{
              color: flipped ? '#e2e8f0' : '#f1f5f9',
              fontSize: flipped ? '0.9rem' : '1rem',
              fontWeight: flipped ? 400 : 600,
              lineHeight: 1.7,
              margin: 0,
              padding: '1rem 0',
              whiteSpace: 'pre-wrap',
              maxWidth: '600px',
            }}>
              {flipped ? currentCard.back : currentCard.front}
            </p>
          </div>

          {/* Navigation buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '0.75rem' }}>
            <button
              onClick={handlePrevCard}
              disabled={cardIndex === 0}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.3rem',
                padding: '0.6rem 1.25rem', borderRadius: '8px',
                background: cardIndex === 0 ? '#1e293b' : `${color}15`,
                color: cardIndex === 0 ? '#475569' : color,
                border: 'none', fontWeight: 600, fontSize: '0.85rem',
                cursor: cardIndex === 0 ? 'not-allowed' : 'pointer',
              }}
            >
              <ChevronLeft size={16} /> Previous
            </button>
            <button
              onClick={handleNextCard}
              disabled={cardIndex >= currentCards.length - 1}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.3rem',
                padding: '0.6rem 1.25rem', borderRadius: '8px',
                background: cardIndex >= currentCards.length - 1 ? '#1e293b' : color,
                color: cardIndex >= currentCards.length - 1 ? '#475569' : '#fff',
                border: 'none', fontWeight: 600, fontSize: '0.85rem',
                cursor: cardIndex >= currentCards.length - 1 ? 'not-allowed' : 'pointer',
              }}
            >
              Next <ChevronRight size={16} />
            </button>
          </div>

          {/* Progress bar */}
          <div style={{
            marginTop: '1rem', height: '4px', borderRadius: '2px',
            background: 'rgba(255,255,255,0.06)',
          }}>
            <div style={{
              height: '100%', borderRadius: '2px', background: color,
              width: `${((cardIndex + 1) / currentCards.length) * 100}%`,
              transition: 'width 0.3s ease',
            }} />
          </div>
        </div>
      )}

      {/* Deck list */}
      {!currentDeck && (
        <>
          {revisionLoading ? (
            <LoadingSpinner color={color} label="Loading flashcard decks..." />
          ) : revisionError ? (
            <LoadErrorMessage color={color} />
          ) : filteredDecks.length === 0 ? (
            <div style={card}>
              <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
                No flashcard decks available for {boardName} yet. Check back soon.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {filteredDecks.map((deck, idx) => (
                <div
                  key={deck.id || idx}
                  onClick={() => handleSelectDeck(idx)}
                  style={{
                    ...card,
                    marginBottom: 0,
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}30`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
                >
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px',
                    background: `${color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <BookMarked size={18} color={color} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.2rem' }}>
                      {deck.title}
                    </div>
                    {deck.description && (
                      <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{deck.description}</div>
                    )}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
                      {deck.cards?.length || 0} cards
                    </span>
                    <ChevronRight size={16} color="#64748b" />
                  </div>
                </div>
              ))}
            </div>
          )}

          <div style={{ marginTop: '1.25rem' }}>
            <ActionButton to={`/revision?board=${boardName}`} color={color}>
              Open Full Revision Tools
            </ActionButton>
          </div>
        </>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   SECTION: GLOSSARY
   ══════════════════════════════════════════════════════════════ */

const LANGUAGE_GLOSSARY = [
  { category: 'Figurative Language', terms: [
    { name: 'Metaphor', definition: 'A comparison that says something IS something else, without using "like" or "as."', example: '"All the world\'s a stage" — Shakespeare, As You Like It' },
    { name: 'Simile', definition: 'A comparison using "like" or "as" to draw a parallel between two things.', example: '"Her smile was like sunshine after rain."' },
    { name: 'Personification', definition: 'Giving human qualities to something non-human.', example: '"The wind howled in anger across the moor."' },
    { name: 'Pathetic Fallacy', definition: 'Using weather or the environment to reflect a character\'s mood or the atmosphere.', example: '"Rain lashed the windows as she sobbed." — environment mirrors emotion.' },
    { name: 'Extended Metaphor', definition: 'A metaphor that is developed across several lines or throughout a text.', example: 'Shakespeare\'s "All the world\'s a stage" continues with "exits and entrances."' },
    { name: 'Hyperbole', definition: 'Deliberate exaggeration for emphasis or dramatic effect.', example: '"I\'ve told you a million times" — exaggeration to stress frustration.' },
    { name: 'Oxymoron', definition: 'Two contradictory words placed together to create a paradoxical image.', example: '"A deafening silence filled the room."' },
  ]},
  { category: 'Sound Devices', terms: [
    { name: 'Alliteration', definition: 'Repetition of the same consonant sound at the start of nearby words.', example: '"Peter Piper picked a peck of pickled peppers."' },
    { name: 'Sibilance', definition: 'Repetition of "s," "sh," or soft "c" sounds, often creating a sinister or soothing effect.', example: '"The snake slithered silently through the grass."' },
    { name: 'Onomatopoeia', definition: 'A word that phonetically imitates the sound it describes.', example: '"The bees buzzed around the flowers."' },
    { name: 'Plosive Sounds', definition: 'Hard consonant sounds (b, d, g, p, t, k) that create a harsh or aggressive tone.', example: '"The bitter, brutal cold bit through his coat."' },
    { name: 'Assonance', definition: 'Repetition of vowel sounds within nearby words.', example: '"The rain in Spain stays mainly in the plain."' },
  ]},
  { category: 'Structural Devices', terms: [
    { name: 'Juxtaposition', definition: 'Placing two contrasting ideas, characters, or images side by side for effect.', example: '"It was the best of times, it was the worst of times." — Dickens' },
    { name: 'Foreshadowing', definition: 'Hints or clues about what will happen later in the text.', example: '"Little did he know, this would be his last journey."' },
    { name: 'Anaphora', definition: 'Repeating a word or phrase at the start of consecutive sentences or clauses.', example: '"We shall fight on the beaches, we shall fight on the landing grounds..."' },
    { name: 'Tricolon', definition: 'A list of three words, phrases, or clauses used for emphasis and rhythm.', example: '"Government of the people, by the people, for the people."' },
    { name: 'Enjambment', definition: 'When a sentence runs over from one line of poetry to the next without pause.', example: 'Creates momentum, urgency, or overflow of emotion in poetry.' },
    { name: 'Caesura', definition: 'A pause in the middle of a line of poetry, usually marked by punctuation.', example: '"I wandered lonely. As a cloud." — disrupts rhythm for emphasis.' },
    { name: 'Volta', definition: 'A turning point in a poem where the mood, argument, or focus shifts.', example: 'Often found at line 9 or 13 in a sonnet.' },
  ]},
  { category: 'Narrative & Rhetoric', terms: [
    { name: 'Rhetorical Question', definition: 'A question asked for effect, not expecting an answer. Engages the reader.', example: '"How long must we tolerate this injustice?"' },
    { name: 'Emotive Language', definition: 'Words deliberately chosen to provoke an emotional response in the reader.', example: '"The helpless, innocent children were abandoned."' },
    { name: 'Imperative', definition: 'A command or instruction that creates urgency and directly engages the reader.', example: '"Join us. Fight back. Make your voice heard."' },
    { name: 'Direct Address', definition: 'Speaking directly to the reader using "you" to create personal connection.', example: '"You know this is wrong."' },
    { name: 'Semantic Field', definition: 'A group of words that all relate to the same topic, creating sustained mood.', example: '"shells, trenches, soldiers, marched" — semantic field of war.' },
    { name: 'Imagery', definition: 'Language that appeals to the five senses: sight, sound, touch, taste, smell.', example: '"The golden wheat swayed in the warm breeze, filling the air with a sweet, earthy scent."' },
  ]},
  { category: 'Sentence & Grammar', terms: [
    { name: 'Declarative', definition: 'A sentence that makes a statement or gives information.', example: '"The door was open." — states a fact.' },
    { name: 'Interrogative', definition: 'A sentence that asks a question.', example: '"Where did they go?" — can create uncertainty or intrigue.' },
    { name: 'Exclamatory', definition: 'A sentence that expresses strong emotion, ending with an exclamation mark.', example: '"What a disaster!" — conveys shock or intensity.' },
    { name: 'Minor Sentence', definition: 'A grammatically incomplete sentence used for dramatic effect or emphasis.', example: '"Gone." "Silence." — creates impact through brevity.' },
  ]},
];

const LITERATURE_GLOSSARY = [
  { category: 'Tragedy & Drama', terms: [
    { name: 'Tragic Hero', definition: 'A protagonist of high status who possesses a fatal flaw (hamartia) that leads to their downfall.', example: 'Macbeth — his hamartia is "vaulting ambition."' },
    { name: 'Hamartia', definition: 'The tragic hero\'s fatal flaw that causes their destruction.', example: 'Macbeth\'s ambition, Othello\'s jealousy, Oedipus\'s pride.' },
    { name: 'Dramatic Irony', definition: 'When the audience knows something a character does not, creating tension.', example: 'Birling says the Titanic is "unsinkable" — the audience knows it sank.' },
    { name: 'Soliloquy', definition: 'A speech where a character speaks their thoughts aloud, alone on stage.', example: '"Is this a dagger which I see before me?" — Macbeth, Act 2 Scene 1.' },
    { name: 'Catharsis', definition: 'The emotional release or purging experienced by the audience at the end of a tragedy.', example: 'The audience\'s mixed emotions at Macbeth\'s death — relief and pity.' },
    { name: 'Hubris', definition: 'Excessive pride or arrogance that leads to a character\'s downfall.', example: 'Mr Birling\'s confidence that "a man has to look after himself."' },
    { name: 'Nemesis', definition: 'The inevitable punishment or defeat that follows hubris or wrongdoing.', example: 'Macbeth\'s death at the hands of Macduff is his nemesis.' },
  ]},
  { category: 'Characterisation', terms: [
    { name: 'Protagonist', definition: 'The main character of a story, whose journey drives the plot.', example: 'Macbeth in Macbeth, Scrooge in A Christmas Carol.' },
    { name: 'Antagonist', definition: 'The character or force that opposes the protagonist.', example: 'The Witches in Macbeth, Mr Birling\'s values in An Inspector Calls.' },
    { name: 'Foil Character', definition: 'A character who contrasts with another to highlight particular qualities.', example: 'Banquo as a foil to Macbeth — both hear the prophecy but respond differently.' },
    { name: 'Archetype', definition: 'A universally recognised character type that recurs across literature.', example: 'The wise old man, the femme fatale, the innocent child.' },
    { name: 'Unreliable Narrator', definition: 'A narrator whose account cannot be fully trusted due to bias or deception.', example: 'Clues include contradictions, defensiveness, and gaps in memory.' },
  ]},
  { category: 'Themes & Context', terms: [
    { name: 'Allegory', definition: 'A story where characters and events represent abstract ideas or moral concepts.', example: 'Animal Farm is an allegory for the Russian Revolution.' },
    { name: 'Motif', definition: 'A recurring image, symbol, or idea throughout a text that reinforces a theme.', example: 'Blood in Macbeth — symbolises guilt and the consequences of murder.' },
    { name: 'Symbolism', definition: 'Using an object, colour, or image to represent a deeper meaning.', example: 'The green light in The Great Gatsby symbolises unattainable dreams.' },
    { name: 'Pathetic Fallacy', definition: 'When the natural environment reflects the emotional state of characters.', example: 'The storm in Act 2 of Macbeth mirrors the moral chaos of regicide.' },
    { name: 'Social Context (AO3)', definition: 'The historical, social, or cultural circumstances that influenced the writing of a text.', example: 'Priestley wrote An Inspector Calls in 1945 but set it in 1912 to highlight the need for social change after WWII.' },
    { name: 'Didactic', definition: 'A text that is intended to teach a moral lesson.', example: 'A Christmas Carol is didactic — Dickens teaches the reader about compassion and generosity.' },
  ]},
  { category: 'Genre & Form', terms: [
    { name: 'Gothic', definition: 'A genre characterised by darkness, decay, supernatural elements, and psychological terror.', example: 'Jekyll and Hyde — duality, secrecy, fog-laden London streets.' },
    { name: 'Bildungsroman', definition: 'A coming-of-age story that follows a character\'s moral and psychological development.', example: 'Great Expectations, Jane Eyre — the protagonist learns and grows.' },
    { name: 'Morality Play', definition: 'A dramatic form where characters represent moral qualities (good, evil, temptation).', example: 'An Inspector Calls has elements of a morality play — the Inspector as moral authority.' },
    { name: 'Well-Made Play', definition: 'A tightly structured play with exposition, rising action, climax, and resolution.', example: 'An Inspector Calls — the Inspector\'s visit follows a precise dramatic structure.' },
    { name: 'Dramatic Monologue', definition: 'A poem where a single character speaks to a silent listener, revealing their personality.', example: 'Robert Browning\'s "My Last Duchess" — the Duke reveals his controlling nature.' },
  ]},
];

function GlossarySection({ boardName, color, subjectLabel, isLit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const glossaryData = isLit ? LITERATURE_GLOSSARY : LANGUAGE_GLOSSARY;

  /* Filter by search */
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return glossaryData;
    const term = searchTerm.toLowerCase();
    return glossaryData.map(cat => ({
      ...cat,
      terms: cat.terms.filter(t =>
        t.name.toLowerCase().includes(term) ||
        t.definition.toLowerCase().includes(term) ||
        t.example.toLowerCase().includes(term)
      ),
    })).filter(cat => cat.terms.length > 0);
  }, [glossaryData, searchTerm]);

  const totalTerms = glossaryData.reduce((acc, cat) => acc + cat.terms.length, 0);

  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
        Glossary &mdash; {boardName} {subjectLabel}
      </h2>
      <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
        {totalTerms} essential {isLit ? 'literary' : 'linguistic'} terms for your {boardName} exams. Each includes a definition and example.
      </p>

      {/* Search bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.5rem',
        padding: '0.6rem 1rem', borderRadius: '10px',
        background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
        marginBottom: '1.5rem',
      }}>
        <Search size={16} color="#64748b" />
        <input
          type="text"
          aria-label="Search terms"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search terms..."
          style={{
            flex: 1, background: 'transparent', border: 'none', outline: 'none',
            color: '#e2e8f0', fontSize: '0.9rem', fontFamily: 'inherit',
          }}
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            style={{
              background: 'none', border: 'none', color: '#64748b', cursor: 'pointer',
              fontSize: '0.8rem', fontWeight: 600,
            }}
          >
            Clear
          </button>
        )}
      </div>

      {/* Glossary categories */}
      {filteredData.length === 0 ? (
        <div style={card}>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
            No terms match &ldquo;{searchTerm}&rdquo;. Try a different search.
          </p>
        </div>
      ) : (
        filteredData.map((category, catIdx) => (
          <div key={catIdx} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color, marginBottom: '0.75rem' }}>
              {category.category}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {category.terms.map((term, termIdx) => (
                <div key={termIdx} style={{
                  ...card,
                  marginBottom: 0,
                  padding: '1rem 1.25rem',
                }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.35rem' }}>
                    {term.name}
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.6, margin: 0, marginBottom: '0.4rem' }}>
                    {term.definition}
                  </p>
                  <div style={{
                    fontSize: '0.8rem', color: '#64748b', fontStyle: 'italic',
                    paddingLeft: '0.75rem', borderLeft: `2px solid ${color}30`,
                  }}>
                    {term.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   SECTION: GAMES
   ══════════════════════════════════════════════════════════════ */

const GAME_LIST = [
  { name: 'Who Said It?', path: '/games/who-said-it', icon: MessageCircleQuestion, color: '#8b5cf6', description: 'Test your knowledge of GCSE set text quotes. Identify which text it\'s from, who said it, and what technique is used.', category: 'Literature' },
  { name: 'Word Match', path: '/games/word-match', icon: Shuffle, color: '#06b6d4', description: 'Match literary and language terms to their definitions across three difficulty levels.', category: 'Vocabulary' },
  { name: 'Technique Spotter', path: '/games/technique-spotter', icon: Eye, color: '#10b981', description: 'Read passages and identify the literary techniques being used. Builds AO2 analytical skills.', category: 'Language' },
  { name: 'Grammar Ninja', path: '/games/grammar-ninja', icon: Swords, color: '#ef4444', description: 'Identify parts of speech and progress through belt levels. Strengthens grammar for AO6 marks.', category: 'Grammar' },
  { name: 'Timeline Scramble', path: '/games/timeline-scramble', icon: Clock3, color: '#3b82f6', description: 'Put plot events from set texts in chronological order. Covers Macbeth, A Christmas Carol, and more.', category: 'Literature' },
  { name: 'Speed Round', path: '/games/speed-round', icon: Zap, color: '#f59e0b', description: '60-second blitz covering literature, language, grammar, and vocabulary. Quick-fire revision.', category: 'General' },
  { name: 'Quote Detective', path: '/games/quote-detective', icon: Search, color: '#a855f7', description: 'Three-part challenge: identify the text, character, and technique from a single quote. 56 quotes from set texts.', category: 'Literature' },
  { name: 'Spelling Bee', path: '/games/spelling-bee', icon: PenLine, color: '#eab308', description: 'Spell commonly misspelled GCSE exam words. Three difficulty tiers with a lives system. Targets AO6.', category: 'SPaG' },
  { name: 'Context Connect', path: '/games/context-connect', icon: PlugZap, color: '#14b8a6', description: 'Match historical and social contexts to the right set texts. Essential AO3 practice.', category: 'Literature' },
  { name: 'Punctuation Fixer', path: '/games/punctuation-fixer', icon: BookCheck, color: '#f472b6', description: 'Fix broken punctuation in passages. Missing capitals, apostrophes, commas, and more. Targets AO6.', category: 'SPaG' },
  { name: 'Mark the Essay', path: '/games/mark-the-essay', icon: BookCheck, color: '#fb923c', description: 'Read sample student essays and grade them. See examiner commentary explaining the real mark.', category: 'Analysis' },
  { name: 'Daily Challenge', path: '/games/daily-challenge', icon: CalendarCheck, color: '#22d3ee', description: 'One new question every day. Build a streak and compete with yourself across all topics.', category: 'General' },
];

function GamesSection({ color, boardName }) {
  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
        Learning Games
      </h2>
      <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
        {GAME_LIST.length} interactive games to reinforce your knowledge. Each links directly with your {boardName} board filter applied.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
        {GAME_LIST.map((game, i) => {
          const Icon = game.icon;
          const boardParam = boardName ? `?board=${boardName}` : '';
          return (
            <Link
              key={i}
              to={`${game.path}${boardParam}`}
              style={{
                ...card,
                marginBottom: 0,
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${game.color}40`; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: `${game.color}15`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={18} color={game.color} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0, color: '#f1f5f9' }}>{game.name}</h3>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, color: game.color }}>{game.category}</span>
                </div>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.6, margin: 0, flex: 1 }}>
                {game.description}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.75rem', color: game.color, fontSize: '0.8rem', fontWeight: 600 }}>
                Play Now <ArrowRight size={14} />
              </div>
            </Link>
          );
        })}
      </div>

      <ActionButton to="/games" color={color}>
        Open Games Hub
      </ActionButton>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════════════════════════════ */
export default function PaperHub() {
  const { boardId, subject, paperId } = useParams();
  const [activeSection, setActiveSection] = useState('overview');

  const { meta, registry } = getBoardData(boardId);
  const color = meta.color;
  const isLit = subject === 'literature';
  const specKey = isLit ? 'gcse-lit' : 'gcse-lang';
  const paperNum = paperId?.replace('paper-', '');

  const paper = getPaper(registry, specKey, paperNum);
  const spec = getSpec(registry, specKey);

  const paperLabel = paper ? paper.name : `Paper ${paperNum}`;
  const subjectLabel = isLit ? 'English Literature' : 'English Language';

  const visibleNav = NAV_ITEMS.filter(item => {
    if (item.litOnly && !isLit) return false;
    return true;
  });

  /* ── Sidebar item renderer ──────────────────────────────── */
  const renderSidebarItem = (item) => {
    const isActive = activeSection === item.id;
    const Icon = item.icon;
    return (
      <button
        key={item.id}
        onClick={() => setActiveSection(item.id)}
        style={{
          display: 'flex', alignItems: 'center', gap: '0.625rem',
          width: '100%', padding: '0.75rem 1rem',
          background: isActive ? `${color}12` : 'transparent',
          border: 'none', borderLeft: isActive ? `3px solid ${color}` : '3px solid transparent',
          color: isActive ? color : '#94a3b8',
          fontWeight: isActive ? 600 : 400, fontSize: '0.85rem',
          cursor: 'pointer', transition: 'all 0.2s', textAlign: 'left',
        }}
      >
        <Icon size={16} /> {item.label}
      </button>
    );
  };

  /* ── Section router ─────────────────────────────────────── */
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewSection paper={paper} spec={spec} boardName={meta.name} color={color} subject={subject} isLit={isLit} />;
      case 'texts':
        return (
          <TextsSection
            spec={spec}
            boardName={meta.name}
            color={color}
            isLit={isLit}
          />
        );
      case 'practice':
        return (
          <PracticeSection
            paper={paper}
            paperLabel={paperLabel}
            boardName={meta.name}
            color={color}
            subject={subject}
            boardId={boardId}
            paperId={paperId}
            isLit={isLit}
          />
        );
      case 'revision':
        return (
          <RevisionSection
            paper={paper}
            paperLabel={paperLabel}
            boardName={meta.name}
            color={color}
            spec={spec}
            isLit={isLit}
          />
        );
      case 'glossary':
        return (
          <GlossarySection
            boardName={meta.name}
            color={color}
            subjectLabel={subjectLabel}
            isLit={isLit}
          />
        );
      case 'games':
        return (
          <GamesSection
            color={color}
            boardName={meta.name}
          />
        );
      default:
        return <OverviewSection paper={paper} spec={spec} boardName={meta.name} color={color} subject={subject} isLit={isLit} />;
    }
  };

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />

      <div style={{ display: 'flex', maxWidth: '1280px', margin: '0 auto' }}>
        {/* ── Sidebar ──────────────────────────────────────────── */}
        <aside className="paper-hub-sidebar" style={{
          width: '250px', flexShrink: 0,
          position: 'sticky', top: '64px', height: 'calc(100vh - 64px)',
          background: 'rgba(255,255,255,0.03)',
          borderRight: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1rem', overflowY: 'auto',
          display: 'flex', flexDirection: 'column',
        }}>
          {/* Board + paper label */}
          <div style={{ padding: '0.5rem 1rem 1rem' }}>
            <div style={{
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em',
              textTransform: 'uppercase', color: '#64748b', marginBottom: '0.4rem',
            }}>
              {meta.name}
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f1f5f9', lineHeight: 1.4 }}>
              {paperLabel}
            </div>
            <span style={{
              display: 'inline-block', marginTop: '0.4rem',
              fontSize: '0.7rem', fontWeight: 700, color,
              background: `${color}15`, padding: '0.2rem 0.6rem', borderRadius: '4px',
            }}>
              {subjectLabel}
            </span>
          </div>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '0 1rem 0.5rem' }} />

          {/* Nav items */}
          {visibleNav.map(renderSidebarItem)}

          {/* Back link */}
          <div style={{ marginTop: 'auto', padding: '1rem' }}>
            <Link to={`/board/${boardId}/subject`} style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              color: '#64748b', textDecoration: 'none', fontSize: '0.8rem',
              transition: 'color 0.2s',
            }}>
              <ChevronLeft size={14} /> Back to subjects
            </Link>
          </div>
        </aside>

        {/* ── Mobile Tab Bar ───────────────────────────────────── */}
        <div className="paper-hub-mobile-tabs" style={{
          display: 'none', overflowX: 'auto', gap: '0.25rem',
          padding: '0.5rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(255,255,255,0.03)',
        }}>
          {visibleNav.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              style={{
                padding: '0.5rem 0.75rem', borderRadius: '6px', border: 'none', whiteSpace: 'nowrap',
                fontSize: '0.78rem', fontWeight: activeSection === item.id ? 600 : 400, cursor: 'pointer',
                background: activeSection === item.id ? `${color}15` : 'transparent',
                color: activeSection === item.id ? color : '#94a3b8',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* ── Main Content ─────────────────────────────────────── */}
        <main style={{ flex: 1, padding: '2rem 2rem 4rem', minWidth: 0 }}>
          {/* Breadcrumb header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap', fontSize: '0.85rem', color: '#64748b' }}>
            <Link to="/board-select" style={{ color: '#64748b', textDecoration: 'none' }}>Boards</Link>
            <span>/</span>
            <Link to={`/board/${boardId}/subject`} style={{ color: '#64748b', textDecoration: 'none' }}>{meta.name}</Link>
            <span>/</span>
            <span style={{ color: '#94a3b8' }}>{subjectLabel}</span>
            <span>/</span>
            <span style={{ color: '#f1f5f9', fontWeight: 600 }}>Paper {paperNum}</span>
          </div>

          {renderActiveSection()}
        </main>
      </div>

      {/* ── Responsive styles ──────────────────────────────── */}
      <style>{`
        @media (max-width: 768px) {
          .paper-hub-sidebar { display: none !important; }
          .paper-hub-mobile-tabs { display: flex !important; }
        }
        @media (min-width: 769px) {
          .paper-hub-mobile-tabs { display: none !important; }
        }
      `}</style>
    </div>
  );
}
