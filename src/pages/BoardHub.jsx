import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookMarked, PenLine, BookText, Gamepad2, CalendarDays, LayoutGrid, ArrowRight, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import COURSES from '../data/courseData';

const BOARD_META = {
  aqa:     { name: 'AQA',          color: '#2563eb', filterKey: 'AQA' },
  edexcel: { name: 'Edexcel',      color: '#dc2626', filterKey: 'Edexcel' },
  ocr:     { name: 'OCR',          color: '#7c3aed', filterKey: 'OCR' },
  wjec:    { name: 'WJEC Eduqas',  color: '#ea580c', filterKey: 'WJEC' },
};

const SECTIONS = [
  { id: 'revision',  label: 'Revision',  icon: BookMarked,   desc: 'Flashcards, key quotes, and revision techniques tailored to your board.' },
  { id: 'practice',  label: 'Practice',  icon: PenLine,      desc: 'Practice questions and past-paper-style exercises for your specification.' },
  { id: 'glossary',  label: 'Glossary',  icon: BookText,     desc: 'Key terms and definitions you need to know for your exams.' },
  { id: 'games',     label: 'Games',     icon: Gamepad2,     desc: 'Fun revision games to reinforce your learning.' },
  { id: 'planner',   label: 'Planner',   icon: CalendarDays, desc: 'Plan your study schedule and stay on track.' },
];

function getSectionLink(sectionId, boardName) {
  switch (sectionId) {
    case 'revision':  return `/revision?board=${boardName}`;
    case 'practice':  return `/practice?board=${boardName}`;
    case 'glossary':  return `/glossary?board=${boardName}`;
    case 'games':     return '/games';
    case 'planner':   return '/planner';
    default:          return '/';
  }
}

/* ── Shared styles ─────────────────────────────────────────────── */
const fullWidthCard = {
  width: '100%',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: '12px',
  padding: '1.75rem 2rem',
  marginBottom: '1.25rem',
};

const sectionHeading = {
  fontSize: '1.5rem',
  fontWeight: 800,
  marginBottom: '0.5rem',
};

const sectionDesc = {
  color: '#94a3b8',
  lineHeight: 1.7,
  fontSize: '0.95rem',
  marginBottom: '1.5rem',
};

const fullWidthLink = (color) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '1.25rem 1.75rem',
  background: `${color}08`,
  border: `1px solid ${color}25`,
  borderRadius: '12px',
  textDecoration: 'none',
  color: '#f1f5f9',
  transition: 'all 0.2s',
  cursor: 'pointer',
});

export default function BoardHub() {
  const { boardId } = useParams();
  const [activeSection, setActiveSection] = useState('overview');

  const board = BOARD_META[boardId?.toLowerCase()] || BOARD_META.aqa;
  const boardCourses = COURSES.filter(c => c.board === board.filterKey);
  const practiceCount = boardCourses.reduce((n, c) => n + (c.moduleList?.length || 0), 0);

  // ─── Sidebar ────────────────────────────────────────────────
  const sidebarItem = (section) => {
    const isActive = activeSection === section.id;
    const Icon = section.icon;
    return (
      <button
        key={section.id}
        onClick={() => setActiveSection(section.id)}
        style={{
          display: 'flex', alignItems: 'center', gap: '0.625rem',
          width: '100%', padding: '0.75rem 1rem',
          background: isActive ? 'rgba(16,185,129,0.08)' : 'transparent',
          border: 'none', borderLeft: isActive ? '3px solid #10b981' : '3px solid transparent',
          color: isActive ? '#10b981' : '#94a3b8',
          fontWeight: isActive ? 600 : 400, fontSize: '0.85rem',
          cursor: 'pointer', transition: 'all 0.2s', textAlign: 'left',
        }}
      >
        <Icon size={16} /> {section.label}
      </button>
    );
  };

  // ─── Overview Content ───────────────────────────────────────
  const renderOverview = () => (
    <div>
      {/* Welcome Banner */}
      <div style={{
        width: '100%', borderRadius: '14px', padding: '2.25rem 2.5rem',
        background: `linear-gradient(135deg, ${board.color}18, ${board.color}08)`,
        border: `1px solid ${board.color}30`,
        borderLeft: `4px solid ${board.color}`,
        marginBottom: '2rem',
      }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: '#f1f5f9' }}>
          Your {board.name} Study Hub
        </h2>
        <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
          Everything you need to ace your {board.name} English Language and Literature exams — structured courses,
          board-specific revision materials, exam-style practice questions graded against {board.name} mark schemes,
          a comprehensive glossary of literary and linguistic terms, interactive learning games, and a study planner
          to keep you on track. Select a section from the sidebar to dive in.
        </p>
      </div>

      {/* ── Courses Section ──────────────────────────────────── */}
      <div style={fullWidthCard}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <BookMarked size={20} color={board.color} />
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>Courses</h3>
          <span style={{
            fontSize: '0.7rem', fontWeight: 700, color: board.color,
            background: `${board.color}15`, padding: '0.2rem 0.6rem', borderRadius: '4px',
            marginLeft: '0.25rem',
          }}>
            {boardCourses.length} available
          </span>
        </div>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
          Structured learning paths covering the full {board.name} specification — {practiceCount} modules across
          {' '}{boardCourses.length} courses. Each course breaks down the content you need to know, with lessons,
          examples, and checkpoint activities.
        </p>

        {/* Course list — full-width rows */}
        {boardCourses.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {boardCourses.map(course => (
              <Link key={course.id} to={`/courses/${course.id}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap',
                  width: '100%', padding: '1.15rem 1.5rem', borderRadius: '10px',
                  background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'all 0.2s', cursor: 'pointer',
                }}>
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <h4 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#f1f5f9', margin: 0, lineHeight: 1.4 }}>
                      {course.title}
                    </h4>
                    {course.subtitle && (
                      <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0.25rem 0 0' }}>{course.subtitle}</p>
                    )}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                      {course.moduleList?.length || 0} modules
                    </span>
                    {course.duration && (
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{course.duration}</span>
                    )}
                    <span style={{
                      fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.05em',
                      color: '#fff', background: board.color,
                      padding: '0.2rem 0.5rem', borderRadius: '4px',
                    }}>
                      {board.name}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: board.color, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      Start Course <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {boardCourses.length > 0 && (
          <div style={{ marginTop: '1rem' }}>
            <Link to="/courses" style={{ fontSize: '0.85rem', color: board.color, textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              Browse all courses <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>

      {/* ── Quick Actions Section ─────────────────────────────── */}
      <div style={fullWidthCard}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>Quick Actions</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {SECTIONS.map(section => {
            const Icon = section.icon;
            const link = getSectionLink(section.id, board.name);
            return (
              <Link key={section.id} to={link} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  width: '100%', padding: '1.15rem 1.5rem', borderRadius: '10px',
                  background: `${board.color}06`, border: `1px solid ${board.color}18`,
                  transition: 'all 0.2s', cursor: 'pointer',
                }}>
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '10px', flexShrink: 0,
                    background: `${board.color}15`, border: `1px solid ${board.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={18} color={board.color} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: '#f1f5f9' }}>{section.label}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.15rem' }}>{section.desc}</div>
                  </div>
                  <ArrowRight size={16} color="#475569" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );

  // ─── Revision Section ─────────────────────────────────────
  const renderRevision = () => (
    <div>
      <h2 style={sectionHeading}>Revision &mdash; {board.name}</h2>
      <p style={sectionDesc}>
        Access a full library of revision tools tailored to the {board.name} specification. Work through flashcard
        decks covering key quotes, character analysis, themes and context. Explore proven revision techniques
        including retrieval practice, spaced repetition, and mind-mapping strategies — all mapped to the topics
        you need for your {board.name} exams.
      </p>
      <Link to={`/revision?board=${board.name}`} style={fullWidthLink(board.color)}>
        <div>
          <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>Open Revision Tools</div>
          <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.25rem' }}>
            Flashcards, key quotes, revision techniques for {board.name}
          </div>
        </div>
        <ArrowRight size={18} color={board.color} />
      </Link>
    </div>
  );

  // ─── Practice Section ─────────────────────────────────────
  const renderPractice = () => (
    <div>
      <h2 style={sectionHeading}>Practice Questions &mdash; {board.name}</h2>
      <p style={sectionDesc}>
        Exam-style questions with model answers graded against {board.name} mark schemes. Practice Paper 1 and
        Paper 2 questions with AO-based feedback. Work through extract-based questions, essay-style responses,
        and creative writing tasks — each with detailed examiner commentary so you know exactly how to improve.
      </p>
      <Link to={`/practice?board=${board.name}`} style={fullWidthLink(board.color)}>
        <div>
          <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>Open Practice Questions</div>
          <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.25rem' }}>
            Exam-style questions graded against {board.name} mark schemes
          </div>
        </div>
        <ArrowRight size={18} color={board.color} />
      </Link>
    </div>
  );

  // ─── Glossary Section ─────────────────────────────────────
  const renderGlossary = () => (
    <div>
      <h2 style={sectionHeading}>Glossary &mdash; {board.name}</h2>
      <p style={sectionDesc}>
        A comprehensive glossary of literary and linguistic terms you need for your {board.name} exams.
        Each entry includes a clear definition, examples from set texts, and guidance on how to use the
        term effectively in your exam responses to demonstrate your understanding of key concepts.
      </p>
      <Link to={`/glossary?board=${board.name}`} style={fullWidthLink(board.color)}>
        <div>
          <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>Open Glossary</div>
          <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.25rem' }}>
            Key terms and definitions for {board.name}
          </div>
        </div>
        <ArrowRight size={18} color={board.color} />
      </Link>
    </div>
  );

  // ─── Games Section ────────────────────────────────────────
  const renderGames = () => (
    <div>
      <h2 style={sectionHeading}>Learning Games</h2>
      <p style={sectionDesc}>
        Reinforce your knowledge with interactive learning games. Match key terms to definitions, identify
        literary devices in passages, race against the clock on quote recall, and compete on leaderboards.
        A fun way to consolidate what you have learned and keep revision engaging.
      </p>
      <Link to="/games" style={fullWidthLink(board.color)}>
        <div>
          <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>Open Learning Games</div>
          <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.25rem' }}>
            Interactive games to reinforce your revision
          </div>
        </div>
        <ArrowRight size={18} color={board.color} />
      </Link>
    </div>
  );

  // ─── Planner Section ──────────────────────────────────────
  const renderPlanner = () => (
    <div>
      <h2 style={sectionHeading}>Study Planner</h2>
      <p style={sectionDesc}>
        Build a personalised study schedule that keeps you on track for your exams. Set target dates,
        allocate revision blocks across your subjects, track your progress, and get reminders so nothing
        falls through the cracks. Stay organised and make sure every topic gets the time it deserves.
      </p>
      <Link to="/planner" style={fullWidthLink(board.color)}>
        <div>
          <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>Open Study Planner</div>
          <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.25rem' }}>
            Plan your study schedule and track progress
          </div>
        </div>
        <ArrowRight size={18} color={board.color} />
      </Link>
    </div>
  );

  // ─── Section router ───────────────────────────────────────
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'overview':  return renderOverview();
      case 'revision':  return renderRevision();
      case 'practice':  return renderPractice();
      case 'glossary':  return renderGlossary();
      case 'games':     return renderGames();
      case 'planner':   return renderPlanner();
      default:          return renderOverview();
    }
  };

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />

      <div id="main-content" style={{ display: 'flex', maxWidth: '1280px', margin: '0 auto' }}>
        {/* ── Desktop Sidebar ────────────────────────────────── */}
        <aside className="board-hub-sidebar" style={{
          width: '240px', flexShrink: 0,
          position: 'sticky', top: '64px', height: 'calc(100vh - 64px)',
          background: 'rgba(255,255,255,0.03)',
          borderRight: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1rem', overflowY: 'auto',
        }}>
          <button
            onClick={() => setActiveSection('overview')}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.625rem',
              width: '100%', padding: '0.75rem 1rem',
              background: activeSection === 'overview' ? 'rgba(16,185,129,0.08)' : 'transparent',
              border: 'none', borderLeft: activeSection === 'overview' ? '3px solid #10b981' : '3px solid transparent',
              color: activeSection === 'overview' ? '#10b981' : '#94a3b8',
              fontWeight: activeSection === 'overview' ? 600 : 400, fontSize: '0.85rem',
              cursor: 'pointer', transition: 'all 0.2s', textAlign: 'left',
            }}
          >
            <LayoutGrid size={16} /> Overview
          </button>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '0.5rem 1rem' }} />
          {SECTIONS.map(sidebarItem)}
        </aside>

        {/* ── Mobile Tab Bar ─────────────────────────────────── */}
        <div className="board-hub-mobile-tabs" style={{
          display: 'none', overflowX: 'auto', gap: '0.25rem',
          padding: '0.5rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(255,255,255,0.03)',
        }}>
          <button
            onClick={() => setActiveSection('overview')}
            style={{
              padding: '0.5rem 0.75rem', borderRadius: '6px', border: 'none', whiteSpace: 'nowrap',
              fontSize: '0.78rem', fontWeight: activeSection === 'overview' ? 600 : 400, cursor: 'pointer',
              background: activeSection === 'overview' ? 'rgba(16,185,129,0.1)' : 'transparent',
              color: activeSection === 'overview' ? '#10b981' : '#94a3b8',
            }}
          >
            Overview
          </button>
          {SECTIONS.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              style={{
                padding: '0.5rem 0.75rem', borderRadius: '6px', border: 'none', whiteSpace: 'nowrap',
                fontSize: '0.78rem', fontWeight: activeSection === s.id ? 600 : 400, cursor: 'pointer',
                background: activeSection === s.id ? 'rgba(16,185,129,0.1)' : 'transparent',
                color: activeSection === s.id ? '#10b981' : '#94a3b8',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* ── Main Content ───────────────────────────────────── */}
        <main style={{ flex: 1, padding: '2rem 2rem 4rem', minWidth: 0 }}>
          {/* Board header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <h1 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>{board.name}</h1>
            <span style={{
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em',
              color: '#fff', background: board.color,
              padding: '0.2rem 0.625rem', borderRadius: '4px',
            }}>
              {board.name}
            </span>
            <Link to="/board-select" style={{
              fontSize: '0.8rem', color: '#94a3b8', textDecoration: 'none',
              marginLeft: 'auto',
            }}>
              Change board
            </Link>
          </div>

          {renderActiveSection()}
        </main>
      </div>

      {/* ── Responsive styles ──────────────────────────────── */}
      <style>{`
        @media (max-width: 768px) {
          .board-hub-sidebar { display: none !important; }
          .board-hub-mobile-tabs { display: flex !important; }
        }
        @media (min-width: 769px) {
          .board-hub-mobile-tabs { display: none !important; }
        }
      `}</style>
    </div>
  );
}
