import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, Mail, Lock, User, ArrowRight, BookOpen } from 'lucide-react';
import { register } from '../utils/auth';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [examBoard, setExamBoard] = useState('Not sure yet');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    const result = register(name, email, password, examBoard);
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
    }
  }

  const inputStyle = {
    width: '100%', padding: '0.75rem 0.875rem 0.75rem 2.75rem',
    background: '#0a0e1a', border: '1px solid #1e2d4a', borderRadius: '8px',
    color: '#f1f5f9', fontSize: '0.9rem', outline: 'none',
  };

  const iconStyle = { position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: '#475569' };

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
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', textAlign: 'center' }}>Create your account</h1>
          <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '2rem', fontSize: '0.9rem' }}>
            Start learning English the right way
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
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.5rem' }}>Full name</label>
              <div style={{ position: 'relative' }}>
                <User size={16} style={iconStyle} />
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" required style={inputStyle} />
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.5rem' }}>Email</label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} style={iconStyle} />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required style={inputStyle} />
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.5rem' }}>Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} style={iconStyle} />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="At least 8 characters" required style={inputStyle} />
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.5rem' }}>Which exam board does your school follow?</label>
              <div style={{ position: 'relative' }}>
                <BookOpen size={16} style={iconStyle} />
                <select value={examBoard} onChange={e => setExamBoard(e.target.value)} style={{
                  ...inputStyle, appearance: 'none', cursor: 'pointer',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.875rem center',
                }}>
                  <option value="Not sure yet">Not sure yet</option>
                  <option value="AQA">AQA</option>
                  <option value="Edexcel">Edexcel</option>
                  <option value="Edexcel (IGCSE)">Edexcel (IGCSE)</option>
                  <option value="OCR">OCR</option>
                  <option value="WJEC Eduqas">WJEC Eduqas</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.875rem' }}>
              Create Account <ArrowRight size={16} />
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#94a3b8', fontSize: '0.85rem' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#10b981', fontWeight: 600, textDecoration: 'none' }}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
