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
  const [fieldErrors, setFieldErrors] = useState({});
  const navigate = useNavigate();

  function validateField(field, value) {
    const errors = { ...fieldErrors };
    if (field === 'name') {
      errors.name = value.trim() === '' ? 'Please enter your name' : '';
    } else if (field === 'email') {
      if (value.trim() === '') errors.email = 'Please enter your email';
      else if (!/\S+@\S+\.\S+/.test(value)) errors.email = 'Please enter a valid email address';
      else errors.email = '';
    } else if (field === 'password') {
      errors.password = value.length > 0 && value.length < 8 ? 'Password must be at least 8 characters' : '';
    }
    setFieldErrors(errors);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    // Validate all fields before submitting
    const errors = {};
    if (name.trim() === '') errors.name = 'Please enter your name';
    if (email.trim() === '') errors.email = 'Please enter your email';
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Please enter a valid email address';
    if (password.length < 8) errors.password = 'Password must be at least 8 characters';
    setFieldErrors(prev => ({ ...prev, ...errors }));
    if (Object.values(errors).some(msg => msg)) return;
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
            <div role="alert" style={{
              background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
              borderRadius: '8px', padding: '0.75rem 1rem', marginBottom: '1.5rem',
              color: '#fca5a5', fontSize: '0.85rem',
            }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label htmlFor="register-name" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.5rem' }}>Full name</label>
              <div style={{ position: 'relative' }}>
                <User size={16} style={iconStyle} />
                <input id="register-name" type="text" value={name} onChange={e => setName(e.target.value)} onBlur={() => validateField('name', name)} placeholder="Your name" required style={inputStyle} />
              </div>
              {fieldErrors.name && <p role="alert" style={{ color: '#fca5a5', fontSize: '0.75rem', margin: '0.375rem 0 0' }}>{fieldErrors.name}</p>}
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label htmlFor="register-email" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.5rem' }}>Email</label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} style={iconStyle} />
                <input id="register-email" type="email" value={email} onChange={e => setEmail(e.target.value)} onBlur={() => validateField('email', email)} placeholder="you@example.com" required style={inputStyle} />
              </div>
              {fieldErrors.email && <p role="alert" style={{ color: '#fca5a5', fontSize: '0.75rem', margin: '0.375rem 0 0' }}>{fieldErrors.email}</p>}
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label htmlFor="register-password" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.5rem' }}>Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} style={iconStyle} />
                <input id="register-password" type="password" value={password} onChange={e => setPassword(e.target.value)} onBlur={() => validateField('password', password)} placeholder="At least 8 characters" required style={inputStyle} />
              </div>
              {fieldErrors.password
                ? <p role="alert" style={{ color: '#fca5a5', fontSize: '0.75rem', margin: '0.375rem 0 0' }}>{fieldErrors.password}</p>
                : <p style={{ color: '#64748b', fontSize: '0.75rem', margin: '0.375rem 0 0' }}>Must be at least 8 characters</p>
              }
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label htmlFor="register-board" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.5rem' }}>Which exam board does your school follow?</label>
              <div style={{ position: 'relative' }}>
                <BookOpen size={16} style={iconStyle} />
                <select id="register-board" value={examBoard} onChange={e => setExamBoard(e.target.value)} style={{
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
