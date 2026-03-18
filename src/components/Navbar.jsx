import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, LogOut, User, LayoutDashboard, GraduationCap, Dumbbell, BookMarked, Shield } from 'lucide-react';
import { getCurrentUser, logout } from '../utils/auth';

export default function Navbar() {
  const user = getCurrentUser();
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const linkStyle = (path) => ({
    color: isActive(path) ? '#10b981' : '#94a3b8',
    textDecoration: 'none',
    fontSize: '0.85rem',
    fontWeight: isActive(path) ? 600 : 500,
    display: 'flex',
    alignItems: 'center',
    gap: '0.375rem',
    padding: '0.375rem 0.75rem',
    borderRadius: '8px',
    background: isActive(path) ? 'rgba(16,185,129,0.08)' : 'transparent',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
  });

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'rgba(10, 14, 26, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      padding: '0 1.5rem',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(16,185,129,0.3)',
          }}>
            <GraduationCap size={20} color="white" />
          </div>
          <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#f1f5f9', letterSpacing: '-0.02em' }}>
            Learn<span style={{ color: '#10b981' }}>Right</span>
          </span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <Link to="/courses" style={linkStyle('/courses')}>
            <BookOpen size={15} /> Courses
          </Link>
          <Link to="/practice" style={linkStyle('/practice')}>
            <Dumbbell size={15} /> Practice
          </Link>
          <Link to="/revision" style={linkStyle('/revision')}>
            <BookMarked size={15} /> Revision
          </Link>
          {user && (
            <Link to="/dashboard" style={linkStyle('/dashboard')}>
              <LayoutDashboard size={15} /> Dashboard
            </Link>
          )}
          {user?.role === 'admin' && (
            <Link to="/admin" style={linkStyle('/admin')}>
              <Shield size={15} /> Admin
            </Link>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {user ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.85rem' }}>
              <User size={15} />
              <span style={{ color: '#f1f5f9', fontWeight: 500 }}>{user.name}</span>
            </div>
            <button
              onClick={() => { logout(); navigate('/'); }}
              className="btn-ghost"
              style={{ padding: '0.375rem 0.75rem' }}
            >
              <LogOut size={14} /> Sign out
            </button>
          </>
        ) : (
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Link to="/login" className="btn-ghost" style={{ textDecoration: 'none' }}>Sign in</Link>
            <Link to="/register" className="btn-primary" style={{ textDecoration: 'none', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
              Get started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
