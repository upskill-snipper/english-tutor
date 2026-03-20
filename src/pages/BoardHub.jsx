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
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
        Your {board.name} Study Hub
      </h2>
      <p style={{ color: '#94a3b8', marginBottom: '2rem', lineHeight: 1.6 }}>
        Everything you need to prepare for your {board.name} English exams, all in one place.
      </p>

      {/* Quick stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        {[
          { label: 'Courses', value: boardCourses.length, color: '#10b981' },
          { label: 'Modules', value: practiceCount, color: '#3b82f6' },
          { label: 'Board Spec', value: board.name, color: board.color },
        ].map((s, i) => (
          <div key={i} className="card" style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Quick links */}
      <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>Quick Links</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.75rem', marginBottom: '2.5rem' }}>
        {SECTIONS.map(section => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className="card"
              style={{
                padding: '1.25rem', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.02)', textAlign: 'left', width: '100%',
                display: 'flex', alignItems: 'center', gap: '0.75rem', transition: 'all 0.2s',
              }}
            >
              <div style={{
                width: '36px', height: '36px', borderRadius: '8px', flexShrink: 0,
                background: `${board.color}15`, border: `1px solid ${board.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={16} color={board.color} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#f1f5f9' }}>{section.label}</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '0.15rem' }}>{section.desc}</div>
              </div>
              <ChevronRight size={14} color="#475569" />
            </button>
          );
        })}
      </div>

      {/* Board courses */}
      {boardCourses.length > 0 && (
        <>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>{board.name} Courses</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '0.75rem' }}>
            {boardCourses.map(course => (
              <Link key={course.id} to={`/courses/${course.id}`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ padding: '1.25rem', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{
                      fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.05em',
                      color: '#34d399', background: 'rgba(52,211,153,0.1)',
                      padding: '0.2rem 0.5rem', borderRadius: '4px',
                    }}>{course.tier}</span>
                    <span style={{
                      fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.05em',
                      color: board.color, background: `${board.color}15`,
                      padding: '0.2rem 0.5rem', borderRadius: '4px',
                    }}>{board.name}</span>
                  </div>
                  <h4 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#f1f5f9', lineHeight: 1.3, marginBottom: '0.5rem' }}>
                    {course.title}
                  </h4>
                  <p style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    {course.moduleList?.length || 0} modules
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );

  // ─── Section placeholder ────────────────────────────────────
  const renderSection = (section) => {
    const Icon = section.icon;
    const fullLink = getSectionLink(section.id, board.name);
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '10px',
            background: `${board.color}15`, border: `1px solid ${board.color}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon size={18} color={board.color} />
          </div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800 }}>{section.label}</h2>
        </div>
        <p style={{ color: '#94a3b8', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          {section.desc}
        </p>

        <Link to={fullLink} className="btn-primary" style={{
          textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.625rem 1.25rem', fontSize: '0.85rem', marginBottom: '2.5rem',
        }}>
          Go to full page <ArrowRight size={14} />
        </Link>

        {/* Show filtered courses for non-games/planner sections */}
        {section.id !== 'games' && section.id !== 'planner' && boardCourses.length > 0 && (
          <>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>Related {board.name} Courses</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '0.75rem' }}>
              {boardCourses.slice(0, 6).map(course => (
                <Link key={course.id} to={`/courses/${course.id}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ padding: '1.25rem', cursor: 'pointer' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{
                        fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.05em',
                        color: '#34d399', background: 'rgba(52,211,153,0.1)',
                        padding: '0.2rem 0.5rem', borderRadius: '4px',
                      }}>{course.tier}</span>
                    </div>
                    <h4 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#f1f5f9', lineHeight: 1.3, marginBottom: '0.5rem' }}>
                      {course.title}
                    </h4>
                    <p style={{ fontSize: '0.75rem', color: '#64748b' }}>
                      {course.moduleList?.length || 0} modules
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  const activeObj = SECTIONS.find(s => s.id === activeSection);

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

          {activeSection === 'overview' ? renderOverview() : activeObj ? renderSection(activeObj) : null}
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
