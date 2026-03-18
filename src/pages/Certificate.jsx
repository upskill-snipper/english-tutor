import { useParams, Link } from 'react-router-dom';
import { Award, Download, ChevronLeft, GraduationCap } from 'lucide-react';
import Navbar from '../components/Navbar';
import COURSES from '../data/courseData';
import { getUsers } from '../utils/auth';

export default function Certificate() {
  const { certId } = useParams();
  const users = getUsers();

  let cert = null;
  let owner = null;
  let course = null;

  for (const u of users) {
    const found = (u.certificates || []).find(c => c.id === certId);
    if (found) {
      cert = found;
      owner = u;
      course = COURSES.find(c => c.id === found.courseId);
      break;
    }
  }

  if (!cert || !course) {
    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
        <Navbar />
        <div style={{ padding: '4rem', textAlign: 'center' }}>
          <h2>Certificate not found</h2>
          <Link to="/" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', marginTop: '1rem' }}>
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  function getGrade(s) {
    if (s >= 90) return 'Distinction';
    if (s >= 80) return 'Merit';
    return 'Pass';
  }

  const grade = getGrade(cert.score);
  const date = new Date(cert.issuedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />

      <div className="no-print" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/dashboard" className="btn-ghost" style={{ textDecoration: 'none' }}>
            <ChevronLeft size={15} /> Dashboard
          </Link>
          <button onClick={() => window.print()} className="btn-primary" style={{ fontSize: '0.85rem' }}>
            <Download size={15} /> Print / Save PDF
          </button>
        </div>
      </div>

      <div className="certificate-page" style={{ maxWidth: '900px', margin: '0 auto', padding: '1rem 1.5rem 4rem' }}>
        <div className="certificate-inner" style={{
          background: 'white',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 25px 80px rgba(0,0,0,0.4)',
        }}>
          {/* Header */}
          <div className="cert-header" style={{
            background: 'linear-gradient(135deg, #065f46, #059669)',
            padding: '2.5rem 3rem',
            textAlign: 'center',
            color: 'white',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <GraduationCap size={28} />
              <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
                LearnRight English
              </span>
            </div>
            <div style={{ fontSize: '0.8rem', opacity: 0.8, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Certificate of Achievement
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: '3rem', textAlign: 'center' }}>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>This is to certify that</p>
            <h1 className="cert-name" style={{
              fontSize: '2.5rem', fontWeight: 900, color: '#065f46',
              marginBottom: '0.75rem', fontFamily: 'Georgia, serif',
            }}>
              {owner.name}
            </h1>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '1.5rem' }}>has successfully completed</p>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>
              {course.title}
            </h2>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: grade === 'Distinction' ? '#fef3c7' : grade === 'Merit' ? '#dbeafe' : '#f0fdf4',
              color: grade === 'Distinction' ? '#92400e' : grade === 'Merit' ? '#1e40af' : '#166534',
              padding: '0.5rem 1.25rem', borderRadius: '100px', fontWeight: 700,
              fontSize: '0.9rem', marginBottom: '2rem',
            }}>
              <Award size={16} /> {grade} — {cert.score}%
            </div>

            <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-around', maxWidth: '500px', margin: '0 auto' }}>
              <div>
                <div style={{ color: '#9ca3af', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Date Issued</div>
                <div style={{ color: '#374151', fontWeight: 600, fontSize: '0.9rem' }}>{date}</div>
              </div>
              <div>
                <div style={{ color: '#9ca3af', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Certificate ID</div>
                <div style={{ color: '#374151', fontWeight: 600, fontSize: '0.75rem', fontFamily: 'monospace' }}>{certId}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
