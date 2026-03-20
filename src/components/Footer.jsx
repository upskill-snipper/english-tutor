import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const footerLinkStyle = { color: '#64748b', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' };

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      style={footerLinkStyle}
      onMouseEnter={e => { e.currentTarget.style.color = '#94a3b8'; }}
      onMouseLeave={e => { e.currentTarget.style.color = '#64748b'; }}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '2.5rem 2rem',
      textAlign: 'center',
      background: '#0a0e1a',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <GraduationCap size={20} color="#10b981" />
        <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#f1f5f9' }}>
          Learn<span style={{ color: '#10b981' }}>Right</span> English
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
        <FooterLink to="/courses">Courses</FooterLink>
        <FooterLink to="/games">Games</FooterLink>
        <FooterLink to="/pricing">Pricing</FooterLink>
        <FooterLink to="/about">About</FooterLink>
      </div>
      <p style={{ color: '#475569', fontSize: '0.85rem', margin: 0 }}>
        &copy; {new Date().getFullYear()} LearnRight English. All rights reserved.
      </p>
    </footer>
  );
}
