import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function NotFound() {
  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '6rem 1.5rem' }}>
        <div style={{ fontSize: '5rem', fontWeight: 900, color: '#1e2d4a', marginBottom: '1rem' }}>404</div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Page not found</h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn-primary" style={{ textDecoration: 'none' }}>
          <Home size={16} /> Back to Home
        </Link>
      </div>
    </div>
  );
}
