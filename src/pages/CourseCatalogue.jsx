import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Award, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import { getCurrentUser } from '../utils/auth';
import COURSES from '../data/courseData';

export default function CourseCatalogue() {
  const [filter, setFilter] = useState('all');
  const user = getCurrentUser();

  const filtered = filter === 'all' ? COURSES : COURSES.filter(c => c.tier === filter);

  const filterBtn = (value, label) => (
    <button
      onClick={() => setFilter(value)}
      style={{
        padding: '0.5rem 1.25rem', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600,
        border: 'none', cursor: 'pointer', transition: 'all 0.2s',
        background: filter === value ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.04)',
        color: filter === value ? '#34d399' : '#94a3b8',
        borderWidth: '1px', borderStyle: 'solid',
        borderColor: filter === value ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.08)',
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>Course Catalogue</h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1rem' }}>
          Choose your level and start building the skills that examiners reward.
        </p>

        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {filterBtn('all', 'All Courses')}
          {filterBtn('KS3', 'KS3 (Years 7-9)')}
          {filterBtn('KS4', 'GCSE (Years 10-11)')}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.25rem',
        }}>
          {filtered.map(course => {
            const enrolled = user?.enrolledCourses?.includes(course.id);
            return (
              <Link to={`/course/${course.id}`} key={course.id} style={{ textDecoration: 'none' }}>
                <div className="card" style={{
                  padding: '1.75rem',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  height: '100%',
                  display: 'flex', flexDirection: 'column',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(16,185,129,0.12)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <span style={{
                      fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em',
                      color: course.tier === 'KS3' ? '#34d399' : '#10b981',
                      background: course.tier === 'KS3' ? 'rgba(52,211,153,0.1)' : 'rgba(16,185,129,0.1)',
                      padding: '0.25rem 0.625rem', borderRadius: '4px',
                    }}>
                      {course.level}
                    </span>
                    {enrolled && (
                      <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 600 }}>Enrolled</span>
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
                        <BookOpen size={13} /> {course.moduleList.length} modules
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
      </div>
    </div>
  );
}
