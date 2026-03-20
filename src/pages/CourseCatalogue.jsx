import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import { getCurrentUser } from '../utils/auth';
import COURSES from '../data/courseData';
import BOARDS from '../data/boardRegistry';

/* ── Course Row component (full-width catalogue entry) ── */

function CourseRow({ course, enrolled, boardColor, isLast }) {
  return (
    <Link to={`/course/${course.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          padding: '1.5rem 1.75rem',
          minHeight: 140,
          borderLeft: `4px solid ${boardColor}`,
          borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(255,255,255,0.02)',
          transition: 'all 0.2s',
          cursor: 'pointer',
        }}
        onMouseOver={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
          e.currentTarget.style.boxShadow = `inset 4px 0 0 ${boardColor}, 0 2px 12px rgba(0,0,0,0.2)`;
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Content area */}
        <div style={{ flex: '1 1 auto', minWidth: 0 }}>
          {/* Top line: badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
            <span style={{
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
              color: course.tier === 'KS3' ? '#34d399' : '#10b981',
              background: course.tier === 'KS3' ? 'rgba(52,211,153,0.1)' : 'rgba(16,185,129,0.1)',
              padding: '0.2rem 0.6rem', borderRadius: 4,
            }}>
              {course.level || course.tier}
            </span>
            {course.board && (
              <span style={{
                fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em',
                color: boardColor,
                background: `${boardColor}12`,
                padding: '0.2rem 0.6rem', borderRadius: 4,
                border: `1px solid ${boardColor}25`,
              }}>
                {course.board}
              </span>
            )}
            {course.specCode && (
              <span style={{
                fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.05em',
                color: '#94a3b8',
                background: 'rgba(255,255,255,0.04)',
                padding: '0.2rem 0.6rem', borderRadius: 4,
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                {course.specCode}
              </span>
            )}
            {enrolled && (
              <span style={{
                fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em',
                color: '#10b981',
                background: 'rgba(16,185,129,0.1)',
                padding: '0.2rem 0.6rem', borderRadius: 4,
                border: '1px solid rgba(16,185,129,0.25)',
              }}>
                Enrolled
              </span>
            )}
          </div>

          {/* Course title */}
          <h3 style={{ fontWeight: 700, fontSize: '1.2rem', color: '#f1f5f9', margin: '0 0 0.25rem 0', lineHeight: 1.3 }}>
            {course.title}
          </h3>

          {/* Subtitle */}
          <p style={{ fontSize: '0.88rem', color: '#c8d0db', lineHeight: 1.5, margin: '0 0 0.5rem 0', fontWeight: 500 }}>
            {course.subtitle}
          </p>

          {/* Full description */}
          {course.description && (
            <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.65, margin: '0 0 0.75rem 0' }}>
              {course.description}
            </p>
          )}

          {/* Module list preview */}
          {(course.moduleList || []).length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.75rem' }}>
              {(course.moduleList || []).slice(0, 6).map((m, idx) => (
                <span key={m.id || idx} style={{
                  fontSize: '0.7rem', fontWeight: 600, color: '#64748b',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '0.2rem 0.55rem', borderRadius: 4,
                }}>
                  {m.title}
                </span>
              ))}
              {(course.moduleList || []).length > 6 && (
                <span style={{
                  fontSize: '0.7rem', fontWeight: 600, color: '#64748b',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '0.2rem 0.55rem', borderRadius: 4,
                }}>
                  +{(course.moduleList || []).length - 6} more
                </span>
              )}
            </div>
          )}

          {/* Bottom line: meta info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#64748b', fontSize: '0.78rem' }}>
              <BookOpen size={13} /> {(course.moduleList || []).length} modules
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#64748b', fontSize: '0.78rem' }}>
              <Clock size={13} /> {course.duration}
            </span>
            <span style={{ fontWeight: 800, fontSize: '1rem', color: '#f1f5f9' }}>
              £{course.price}
            </span>
          </div>
        </div>

        {/* Right side: View Course button */}
        <div style={{ flexShrink: 0 }}>
          <span style={{
            fontSize: '0.82rem', fontWeight: 600,
            background: `linear-gradient(135deg, ${boardColor}, ${boardColor}cc)`,
            color: 'white',
            padding: '0.5rem 1.25rem', borderRadius: 8,
            whiteSpace: 'nowrap',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}>
            View Course <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ── Main Component ── */

export default function CourseCatalogue() {
  const [searchParams] = useSearchParams();
  const initialTier = searchParams.get('tier');
  const validTiers = ['KS3', 'GCSE', 'IGCSE'];
  const [tierFilter, setTierFilter] = useState(
    validTiers.includes(initialTier) ? initialTier : 'all'
  );
  const [boardFilter, setBoardFilter] = useState('all');
  const user = getCurrentUser();

  const filtered = COURSES.filter(c => {
    // Tier filter
    if (tierFilter === 'KS3' && c.tier !== 'KS3') return false;
    if (tierFilter === 'GCSE' && c.tier !== 'GCSE') return false;
    if (tierFilter === 'IGCSE' && c.tier !== 'IGCSE') return false;
    // Board filter (KS3 courses have no board — always show them when tier=all)
    if (boardFilter !== 'all' && c.board && c.board !== boardFilter) return false;
    if (boardFilter !== 'all' && !c.board && tierFilter !== 'all') return false;
    return true;
  });

  const pillStyle = (active, color) => ({
    padding: '0.5rem 1.25rem', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600,
    border: 'none', cursor: 'pointer', transition: 'all 0.2s',
    background: active ? `${color || '#10b981'}18` : 'rgba(255,255,255,0.04)',
    color: active ? (color || '#34d399') : '#94a3b8',
    borderWidth: '1px', borderStyle: 'solid',
    borderColor: active ? `${color || '#10b981'}40` : 'rgba(255,255,255,0.08)',
  });

  // Count courses per board for badges
  const boardCounts = {};
  COURSES.filter(c => {
    if (tierFilter === 'KS3') return c.tier === 'KS3';
    if (tierFilter === 'GCSE') return c.tier === 'GCSE';
    if (tierFilter === 'IGCSE') return c.tier === 'IGCSE';
    return true;
  }).forEach(c => {
    if (c.board) boardCounts[c.board] = (boardCounts[c.board] || 0) + 1;
  });

  // Determine whether to show board filter (not for KS3)
  const showBoardFilter = tierFilter !== 'KS3';

  // Get board color
  const getBoardColor = (boardId) => BOARDS[boardId]?.color || '#10b981';

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />

      <div id="main-content" role="main" style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>Course Catalogue</h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1rem' }}>
          Choose your level and exam board. Every course is tailored to your specification.
        </p>

        {/* Tier filter */}
        <div role="group" aria-label="Filter by level" style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          {[
            { value: 'all', label: 'All Courses' },
            { value: 'KS3', label: 'KS3 (Years 7-9)' },
            { value: 'GCSE', label: 'GCSE' },
            { value: 'IGCSE', label: 'IGCSE' },
          ].map(opt => (
            <button
              key={opt.value}
              onClick={() => { setTierFilter(opt.value); if (opt.value === 'KS3') setBoardFilter('all'); }}
              style={pillStyle(tierFilter === opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Board filter */}
        {showBoardFilter && (
          <div role="group" aria-label="Filter by board" style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setBoardFilter('all')}
              style={pillStyle(boardFilter === 'all')}
            >
              All Boards
            </button>
            {Object.values(BOARDS).map(board => {
              const count = boardCounts[board.id] || 0;
              return (
                <button
                  key={board.id}
                  onClick={() => setBoardFilter(board.id)}
                  style={pillStyle(boardFilter === board.id, board.color)}
                >
                  {board.name} {count > 0 && <span style={{ opacity: 0.7, fontSize: '0.75rem' }}>({count})</span>}
                </button>
              );
            })}
          </div>
        )}

        {/* Course list */}
        {filtered.length === 0 ? (
          <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
            <p style={{ color: '#94a3b8', fontSize: '1rem', marginBottom: '0.5rem' }}>
              No courses available yet for this combination.
            </p>
            <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
              We are actively building courses for every exam board. Check back soon!
            </p>
          </div>
        ) : (
          <div style={{
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 14,
            overflow: 'hidden',
          }}>
            {filtered.map((course, i) => {
              const enrolled = user?.enrolledCourses?.includes(course.id);
              const boardColor = course.board ? getBoardColor(course.board) : '#10b981';
              return (
                <CourseRow
                  key={course.id}
                  course={course}
                  enrolled={enrolled}
                  boardColor={boardColor}
                  isLast={i === filtered.length - 1}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
