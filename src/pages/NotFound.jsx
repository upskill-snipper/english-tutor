import { Link } from 'react-router-dom';
import { Home, BookOpen, Library } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4rem 1.5rem' }}>
        <div style={{ fontSize: '6rem', fontWeight: 900, color: 'rgba(16,185,129,0.18)', lineHeight: 1, marginBottom: '1rem' }}>404</div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Page not found</h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-primary" style={{ textDecoration: 'none' }}>
            <Home size={16} /> Home
          </Link>
          <Link to="/courses" className="btn-secondary" style={{ textDecoration: 'none' }}>
            <BookOpen size={16} /> Course Catalogue
          </Link>
          <Link to="/texts" className="btn-secondary" style={{ textDecoration: 'none' }}>
            <Library size={16} /> Text Library
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
