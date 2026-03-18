import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, PenTool, Library, Sparkles, CheckCircle, ArrowRight, Star, Users, Award, Dumbbell, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';

const PATHWAYS = [
  { title: 'KS3 Reading', desc: 'Master comprehension, inference, and language analysis for Years 7-9', icon: BookOpen, color: '#10b981' },
  { title: 'KS3 Writing', desc: 'Build confidence in descriptive, narrative, and persuasive writing', icon: PenTool, color: '#34d399' },
  { title: 'GCSE Language', desc: 'Paper 1 & 2 reading and writing — AQA, Edexcel, OCR & WJEC aligned', icon: Library, color: '#059669' },
  { title: 'GCSE Literature', desc: 'Poetry, prose, and drama — A Christmas Carol, Macbeth, and more', icon: Sparkles, color: '#047857' },
  { title: 'IGCSE English', desc: 'Edexcel IGCSE Spec A & B — reading, writing, and coursework preparation', icon: Globe, color: '#dc2626' },
];

const COURSES = [
  { title: 'KS3 Reading Skills', price: 29, modules: 6, tier: 'KS3' },
  { title: 'KS3 Writing Skills', price: 29, modules: 6, tier: 'KS3' },
  { title: 'KS3 Grammar & Vocabulary', price: 19, modules: 5, tier: 'KS3' },
  { title: 'GCSE Language — Reading', price: 49, modules: 8, tier: 'GCSE' },
  { title: 'GCSE Language — Writing', price: 49, modules: 7, tier: 'GCSE' },
  { title: 'GCSE Literature — Poetry', price: 39, modules: 6, tier: 'GCSE' },
  { title: 'GCSE Literature — Prose', price: 39, modules: 6, tier: 'GCSE' },
  { title: 'GCSE Revision Blitz', price: 59, modules: 8, tier: 'GCSE' },
];

const TOTAL = COURSES.reduce((a, c) => a + c.price, 0);

const EXAM_BOARDS = [
  { name: 'AQA', color: '#2563eb', bg: 'rgba(37,99,235,0.12)', border: 'rgba(37,99,235,0.3)' },
  { name: 'Edexcel', color: '#dc2626', bg: 'rgba(220,38,38,0.12)', border: 'rgba(220,38,38,0.3)', badge: 'IGCSE' },
  { name: 'OCR', color: '#7c3aed', bg: 'rgba(124,58,237,0.12)', border: 'rgba(124,58,237,0.3)' },
  { name: 'WJEC Eduqas', color: '#ea580c', bg: 'rgba(234,88,12,0.12)', border: 'rgba(234,88,12,0.3)' },
];

const STATS = [
  { label: 'Courses', value: '30+', icon: BookOpen },
  { label: 'Flashcard Decks', value: '50+', icon: Library },
  { label: 'Practice Questions', value: '30', icon: PenTool },
  { label: 'Anthology Text Lessons', value: '20+', icon: Sparkles },
];

const FEATURES = [
  'Expert-written content by practising English teachers',
  'Trusted by students across all 4 major exam boards — AQA, Edexcel, OCR & WJEC Eduqas',
  'Aligned with real mark scheme criteria for every board',
  'Worked examples at every grade boundary',
  'Predicted grades dashboard to track your progress',
  'Instant quiz feedback with detailed explanations',
  'Free exam technique courses to get you started',
  'Earn certificates to prove your progress',
  'Mobile-friendly — revise anywhere, any time',
];

export default function Landing() {
  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        padding: '4rem 1.5rem 3rem',
        textAlign: 'center',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.12) 0%, transparent 60%)',
      }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)',
            borderRadius: '100px', padding: '0.375rem 1rem', fontSize: '0.8rem',
            color: '#34d399', fontWeight: 600, marginBottom: '1.5rem',
          }}>
            <Users size={14} /> Join 2,400+ students already using LearnRight
          </div>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '1.25rem',
          }}>
            Ace Your English{' '}
            <span style={{
              background: 'linear-gradient(135deg, #10b981, #34d399)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Exams</span>
          </h1>

          <p style={{
            fontSize: '1.15rem', color: '#94a3b8', lineHeight: 1.7,
            maxWidth: '560px', margin: '0 auto 2rem',
          }}>
            Complete GCSE & IGCSE English preparation for every UK exam board — AQA, Edexcel, OCR & WJEC. Practice, learn, and earn your certificate.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/courses" className="btn-primary" style={{ padding: '0.875rem 2rem', fontSize: '1rem' }}>
              Browse Courses <ArrowRight size={18} />
            </Link>
            <Link to="/practice" className="btn-secondary" style={{ padding: '0.875rem 2rem', fontSize: '1rem' }}>
              <Dumbbell size={18} /> Free Practice Mode
            </Link>
          </div>
        </div>
      </section>

      {/* Exam board badges */}
      <section style={{
        padding: '0 1.5rem 2rem',
        maxWidth: '700px',
        margin: '0 auto',
      }}>
        <p style={{ textAlign: 'center', color: '#64748b', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', marginBottom: '1rem', textTransform: 'uppercase' }}>
          Covering all major UK exam boards
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          {EXAM_BOARDS.map((board, i) => (
            <div key={i} style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: board.bg, border: `1px solid ${board.border}`,
              borderRadius: '100px', padding: '0.5rem 1.15rem',
              fontSize: '0.85rem', fontWeight: 700, color: board.color,
            }}>
              {board.name}
              {board.badge && (
                <span style={{
                  fontSize: '0.6rem', fontWeight: 800, background: board.color, color: '#fff',
                  borderRadius: '4px', padding: '0.1rem 0.4rem', letterSpacing: '0.04em',
                }}>
                  {board.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <section style={{
        padding: '2rem 1.5rem',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1rem',
          textAlign: 'center',
        }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '12px',
              padding: '1.25rem 1rem',
            }}>
              <s.icon size={20} color="#10b981" style={{ marginBottom: '0.5rem' }} />
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#f1f5f9', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.35rem', fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>
        <p style={{
          textAlign: 'center', color: '#64748b', fontSize: '0.8rem',
          fontWeight: 600, marginTop: '1.25rem', letterSpacing: '0.04em',
        }}>
          Trusted by students across all major exam boards
        </p>
      </section>

      {/* Pathway cards */}
      <section style={{ padding: '2rem 1.5rem 4rem', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
          Your Path to Success
        </h2>
        <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '2.5rem', fontSize: '1rem' }}>
          Choose your level and start building the skills that examiners reward.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
        }}>
          {PATHWAYS.map((p, i) => (
            <div key={i} className="card" style={{ padding: '1.75rem', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 40px rgba(16,185,129,0.15)`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: `rgba(16,185,129,0.1)`, border: `1px solid rgba(16,185,129,0.2)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1rem', color: p.color,
              }}>
                <p.icon size={22} />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem', color: '#f1f5f9' }}>{p.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features list */}
      <section style={{
        padding: '4rem 1.5rem',
        background: 'linear-gradient(180deg, rgba(16,185,129,0.04), transparent)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem' }}>
            Why Students Choose LearnRight
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '4rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
          Simple, Transparent Pricing
        </h2>
        <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '2.5rem' }}>
          Courses from £29 — available for all major exam boards. Buy individually or save with the bundle.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {COURSES.map((c, i) => (
            <div key={i} className="card" style={{
              padding: '1.25rem',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <div>
                <span style={{
                  fontSize: '0.65rem', fontWeight: 700, color: c.tier === 'KS3' ? '#34d399' : '#10b981',
                  background: c.tier === 'KS3' ? 'rgba(52,211,153,0.1)' : 'rgba(16,185,129,0.1)',
                  padding: '0.2rem 0.5rem', borderRadius: '4px', marginBottom: '0.375rem', display: 'inline-block',
                  letterSpacing: '0.05em',
                }}>
                  {c.tier}
                </span>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#f1f5f9', marginTop: '0.25rem' }}>{c.title}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{c.modules} modules</div>
              </div>
              <div style={{ fontWeight: 800, fontSize: '1.25rem', color: '#f1f5f9' }}>£{c.price}</div>
            </div>
          ))}
        </div>

        {/* Bundle card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(5,150,105,0.08))',
          border: '2px solid rgba(16,185,129,0.3)',
          borderRadius: '16px',
          padding: '2.5rem',
          textAlign: 'center',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(16,185,129,0.15)', borderRadius: '100px',
            padding: '0.375rem 1rem', fontSize: '0.75rem', color: '#34d399',
            fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.05em',
          }}>
            <Star size={14} /> BEST VALUE
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>All 8 Courses Bundle</h3>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#10b981' }}>£149</span>
            <span style={{ textDecoration: 'line-through', color: '#64748b', fontSize: '1.25rem' }}>£{TOTAL}</span>
          </div>
          <p style={{ color: '#94a3b8', marginBottom: '0.75rem' }}>Save £{TOTAL - 149} — every KS3, GCSE & IGCSE course included</p>
          <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '1.5rem' }}>Covers AQA, Edexcel (incl. IGCSE), OCR & WJEC Eduqas</p>
          <Link to="/register" className="btn-primary" style={{ padding: '0.875rem 2.5rem', fontSize: '1rem' }}>
            Get the Bundle <ArrowRight size={18} />
          </Link>
        </div>

        {/* Parent/Teacher tier */}
        <div className="card" style={{
          padding: '1.5rem 2rem', marginTop: '1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
        }}>
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '1rem', color: '#f1f5f9', marginBottom: '0.25rem' }}>Parent/Teacher Plan</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>All courses for up to 3 students. Perfect for families or small groups.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
            <span style={{ fontSize: '1.75rem', fontWeight: 900, color: '#f1f5f9' }}>£199</span>
            <span style={{ color: '#64748b', fontSize: '0.85rem' }}>/year</span>
          </div>
        </div>
      </section>

      {/* Free practice CTA */}
      <section style={{
        padding: '4rem 1.5rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}>
        <Award size={40} color="#10b981" style={{ marginBottom: '1rem' }} />
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
          Not Sure Yet? Try Practice Mode Free
        </h2>
        <p style={{ color: '#94a3b8', maxWidth: '480px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
          Answer real exam-style questions, see model answers at every grade band, and track your streak. Plus, explore our free text library with 20 fully annotated IGCSE anthology texts. No account needed.
        </p>
        <Link to="/practice" className="btn-primary" style={{ padding: '0.875rem 2rem' }}>
          Start Practising <ArrowRight size={18} />
        </Link>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '2rem 1.5rem',
        textAlign: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <GraduationCap size={18} color="#10b981" />
          <span style={{ fontWeight: 700, color: '#f1f5f9' }}>Learn<span style={{ color: '#10b981' }}>Right</span> English</span>
        </div>
        <p style={{ color: '#475569', fontSize: '0.8rem' }}>
          Master English. Ace Your Exams. &copy; {new Date().getFullYear()} LearnRight English.
        </p>
      </footer>
    </div>
  );
}
