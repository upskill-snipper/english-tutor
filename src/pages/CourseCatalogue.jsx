import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Award, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import { getCurrentUser } from '../utils/auth';
import COURSES from '../data/courseData';
import BOARDS from '../data/boardRegistry';

export default function CourseCatalogue() {
  const [tierFilter, setTierFilter] = useState('all');
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

  const filterBtn = (value, label, isActive) => (
    <button
      onClick={() => value}
      style={{
        padding: '0.5rem 1.25rem', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600,
        border: 'none', cursor: 'pointer', transition: 'all 0.2s',
        background: isActive ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.04)',
        color: isActive ? '#34d399' : '#94a3b8',
        borderWidth: '1px', borderStyle: 'solid',
        borderColor: isActive ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.08)',
      }}
    >
      {label}
    </button>
  );

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

        {/* Course grid */}
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
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.25rem',
          }}>
            {filtered.map(course => {
              const enrolled = user?.enrolledCourses?.includes(course.id);
              const boardColor = course.board ? getBoardColor(course.board) : '#10b981';
              return (
                <Link to={`/course/${course.id}`} key={course.id} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{
                    padding: '1.75rem',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    height: '100%',
                    display: 'flex', flexDirection: 'column',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 12px 40px ${boardColor}20`; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                        <span style={{
                          fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em',
                          color: course.tier === 'KS3' ? '#34d399' : '#10b981',
                          background: course.tier === 'KS3' ? 'rgba(52,211,153,0.1)' : 'rgba(16,185,129,0.1)',
                          padding: '0.25rem 0.625rem', borderRadius: '4px',
                        }}>
                          {course.level || course.tier}
                        </span>
                        {course.board && (
                          <span style={{
                            fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em',
                            color: boardColor,
                            background: `${boardColor}12`,
                            padding: '0.25rem 0.625rem', borderRadius: '4px',
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
                            padding: '0.25rem 0.625rem', borderRadius: '4px',
                            border: '1px solid rgba(255,255,255,0.08)',
                          }}>
                            {course.specCode}
                          </span>
                        )}
                      </div>
                      {enrolled && (
                        <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 600, whiteSpace: 'nowrap' }}>Enrolled</span>
                      )}
                    </div>

                    <h3 style={{ fontWeight: 700, fontSize: '1.15rem', color: '#f1f5f9', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                      {course.title}
                    </h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.6, flex: 1 }}>
                      {course.subtitle}
                    </p>

                    <div style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      marginTop: '1.25rem', paddingTop: '1rem',
                      borderTop: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#64748b', fontSize: '0.78rem' }}>
                          <BookOpen size={13} /> {(course.moduleList || []).length} modules
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#64748b', fontSize: '0.78rem' }}>
                          <Clock size={13} /> {course.duration}
                        </span>
                      </div>
                      <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#f1f5f9' }}>£{course.price}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
