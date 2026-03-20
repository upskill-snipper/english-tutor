import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, LogOut, User, LayoutDashboard, GraduationCap, Dumbbell, BookMarked, Shield, Library, TrendingUp, Sun, Moon, Search, CalendarDays, BookText, Gamepad2, CreditCard } from 'lucide-react';
import { getCurrentUser, logout, getAssessmentHistory } from '../utils/auth';
import { getTheme, setTheme } from '../utils/theme';
import SearchModal from './SearchModal';

function ThemeToggle() {
  const [theme, setThemeState] = useState(getTheme());
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    setThemeState(next);
  };
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="btn-ghost"
      style={{ padding: '0.375rem', borderRadius: '8px', lineHeight: 0 }}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default function Navbar() {
  const user = getCurrentUser();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);

  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isActive = (path) => location.pathname === path;

  const linkStyle = (path) => ({
    color: isActive(path) ? '#10b981' : 'var(--text-secondary, #94a3b8)',
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
    <>
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <nav aria-label="Main navigation" style={{
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'var(--nav-bg, rgba(10, 14, 26, 0.85))',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-color, rgba(255,255,255,0.07))',
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
          <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary, #f1f5f9)', letterSpacing: '-0.02em' }}>
            Learn<span style={{ color: '#10b981' }}>Right</span>
          </span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <Link to="/about" style={linkStyle('/about')} aria-label="About" {...(isActive('/about') ? { 'aria-current': 'page' } : {})}>
            <User size={15} /> About
          </Link>
          <Link to="/courses" style={linkStyle('/courses')} aria-label="Courses" {...(isActive('/courses') ? { 'aria-current': 'page' } : {})}>
            <BookOpen size={15} /> Courses
          </Link>
          <Link to="/practice" style={linkStyle('/practice')} aria-label="Practice" {...(isActive('/practice') ? { 'aria-current': 'page' } : {})}>
            <Dumbbell size={15} /> Practice
          </Link>
          <Link to="/texts" style={linkStyle('/texts')} aria-label="Texts" {...(isActive('/texts') ? { 'aria-current': 'page' } : {})}>
            <Library size={15} /> Texts
          </Link>
          <Link to="/revision" style={linkStyle('/revision')} aria-label="Revision" {...(isActive('/revision') ? { 'aria-current': 'page' } : {})}>
            <BookMarked size={15} /> Revision
          </Link>
          <Link to="/glossary" style={linkStyle('/glossary')} aria-label="Glossary" {...(isActive('/glossary') ? { 'aria-current': 'page' } : {})}>
            <BookText size={15} /> Glossary
          </Link>
          <Link to="/games" style={linkStyle('/games')} aria-label="Games" {...(isActive('/games') ? { 'aria-current': 'page' } : {})}>
            <Gamepad2 size={15} /> Games
          </Link>
          {user && (
            <>
              <Link to="/dashboard" style={linkStyle('/dashboard')} aria-label="Dashboard" {...(isActive('/dashboard') ? { 'aria-current': 'page' } : {})}>
                <LayoutDashboard size={15} /> Dashboard
              </Link>
              <Link to="/planner" style={linkStyle('/planner')} aria-label="Planner" {...(isActive('/planner') ? { 'aria-current': 'page' } : {})}>
                <CalendarDays size={15} /> Planner
              </Link>
              {getAssessmentHistory(user.id).length >= 5 && (
                <Link to="/grades" style={linkStyle('/grades')} aria-label="Predicted Grades" {...(isActive('/grades') ? { 'aria-current': 'page' } : {})}>
                  <TrendingUp size={15} /> Grades
                </Link>
              )}
            </>
          )}
          <Link to="/pricing" style={linkStyle('/pricing')} aria-label="Pricing" {...(isActive('/pricing') ? { 'aria-current': 'page' } : {})}>
            <CreditCard size={15} /> Pricing
          </Link>
          {user?.role === 'admin' && (
            <Link to="/admin" style={linkStyle('/admin')} aria-label="Admin Panel" {...(isActive('/admin') ? { 'aria-current': 'page' } : {})}>
              <Shield size={15} /> Admin
            </Link>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          onClick={openSearch}
          aria-label="Search (Ctrl+K)"
          title="Search (Ctrl+K)"
          className="btn-ghost"
          style={{
            padding: '0.375rem 0.625rem',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.375rem',
            fontSize: '0.8rem',
            color: '#94a3b8',
          }}
        >
          <Search size={15} />
          <span style={{
            fontSize: '0.7rem',
            background: 'rgba(255,255,255,0.08)',
            padding: '1px 6px',
            borderRadius: '4px',
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            Ctrl K
          </span>
        </button>
        <ThemeToggle />
        {user ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary, #94a3b8)', fontSize: '0.85rem' }}>
              <User size={15} />
              <span style={{ color: 'var(--text-primary, #f1f5f9)', fontWeight: 500 }}>{user.name}</span>
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
            <Link to="/login" className="btn-ghost" aria-label="Sign in" style={{ textDecoration: 'none' }}>Sign in</Link>
            <Link to="/register" className="btn-primary" aria-label="Get started — create an account" style={{ textDecoration: 'none', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
              Get started
            </Link>
          </div>
        )}
      </div>
    </nav>
    <SearchModal isOpen={searchOpen} onClose={closeSearch} />
    </>
  );
}
