import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, Mail, Lock, ArrowRight } from 'lucide-react';
import { login } from '../utils/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    const result = login(email, password);
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
    }
  }

  return (
    <div style={{
      background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '2rem 1rem',
    }}>
      <div style={{ width: '100%', maxWidth: '420px' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem', marginBottom: '2.5rem' }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '12px',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(16,185,129,0.3)',
          }}>
            <GraduationCap size={22} color="white" />
          </div>
          <span style={{ fontWeight: 800, fontSize: '1.25rem', color: '#f1f5f9' }}>
            Learn<span style={{ color: '#10b981' }}>Right</span>
          </span>
        </Link>

        <div className="card" style={{ padding: '2rem' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', textAlign: 'center' }}>Welcome back</h1>
          <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '2rem', fontSize: '0.9rem' }}>
            Sign in to continue your learning
          </p>

          {error && (
            <div style={{
              background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
              borderRadius: '8px', padding: '0.75rem 1rem', marginBottom: '1.5rem',
              color: '#fca5a5', fontSize: '0.85rem',
            }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.5rem' }}>
                Email
              </label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: '#475569' }} />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  style={{
                    width: '100%', padding: '0.75rem 0.875rem 0.75rem 2.75rem',
                    background: '#0a0e1a', border: '1px solid #1e2d4a', borderRadius: '8px',
                    color: '#f1f5f9', fontSize: '0.9rem', outline: 'none',
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.5rem' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: '#475569' }} />
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  style={{
                    width: '100%', padding: '0.75rem 0.875rem 0.75rem 2.75rem',
                    background: '#0a0e1a', border: '1px solid #1e2d4a', borderRadius: '8px',
                    color: '#f1f5f9', fontSize: '0.9rem', outline: 'none',
                  }}
                />
              </div>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.875rem' }}>
              Sign In <ArrowRight size={16} />
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#94a3b8', fontSize: '0.85rem' }}>
            No account yet?{' '}
            <Link to="/register" style={{ color: '#10b981', fontWeight: 600, textDecoration: 'none' }}>Create one free</Link>
          </p>
        </div>

        <div style={{
          marginTop: '1.5rem', padding: '1rem', borderRadius: '10px',
          background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)',
          fontSize: '0.78rem', color: '#94a3b8',
        }}>
          <div style={{ fontWeight: 600, color: '#34d399', marginBottom: '0.5rem' }}>Demo accounts:</div>
          <div>Student: student@learnright.com / Student2026!</div>
          <div>Admin: admin@learnright.com / Admin2026!</div>
        </div>
      </div>
    </div>
  );
}
