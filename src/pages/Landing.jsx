import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, CheckCircle, ArrowRight, Star, Gamepad2, Brain, ClipboardList, CalendarClock, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';

const FEATURES = [
  '12 interactive learning games',
  'Board-specific flashcards',
  'Exam-style practice with mark schemes',
  'Study planner with exam countdown',
  'Progress tracking and predicted grades',
];

export default function Landing() {
  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        padding: '5rem 1.5rem 3rem',
        textAlign: 'center',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.10) 0%, transparent 60%)',
      }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '1.25rem',
          }}>
            Learn<span style={{
              background: 'linear-gradient(135deg, #10b981, #34d399)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Right</span> English
          </h1>

          <p style={{
            fontSize: '1.15rem', color: '#94a3b8', lineHeight: 1.7,
            maxWidth: '620px', margin: '0 auto 1.75rem',
          }}>
            Complete GCSE &amp; IGCSE English preparation for UK exam boards including AQA, Edexcel, OCR &amp; WJEC. Practice, learn, and earn your certificate.
          </p>

          <p style={{
            fontSize: '0.95rem', color: '#7a8ba8', lineHeight: 1.8,
            maxWidth: '640px', margin: '0 auto 1.5rem',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
          }}>
            Built by an experienced Head of English with 10+ years teaching in British and International schools, and 6 years examining experience working for AQA, Cambridge and Pearson. Every resource is shaped by real classroom success and examiner insight, so students know precisely how to achieve top grades.
          </p>

          <a
            href="https://www.firsttutors.com/uk/tutor/lauren.english.42/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
              color: '#34d399', fontWeight: 600, fontSize: '0.95rem',
              textDecoration: 'none', marginBottom: '0.5rem',
            }}
          >
            Meet your tutor <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Two Main Pathway Cards */}
      <section style={{ padding: '1rem 1.5rem 4rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem',
        }}>
          {/* KS3 Card */}
          <Link to="/courses?tier=KS3" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              background: 'rgba(16,185,129,0.06)',
              border: '2px solid rgba(16,185,129,0.25)',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
              minHeight: '220px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(16,185,129,0.18)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.25rem',
              }}>
                <BookOpen size={26} color="#10b981" />
              </div>
              <h3 style={{ fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.6rem', color: '#f1f5f9' }}>
                KS3 Practice (Y7–Y9)
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.65, margin: 0 }}>
                Build your foundations in reading, writing, and literary analysis for Years 7–9
              </p>
              <div style={{ marginTop: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#10b981', fontWeight: 600, fontSize: '0.9rem' }}>
                Start learning <ArrowRight size={16} />
              </div>
            </div>
          </Link>

          {/* GCSE / IGCSE Card */}
          <Link to="/board-select" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              background: 'rgba(99,102,241,0.06)',
              border: '2px solid rgba(99,102,241,0.25)',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
              minHeight: '220px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(99,102,241,0.18)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.25rem',
              }}>
                <Brain size={26} color="#818cf8" />
              </div>
              <h3 style={{ fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.6rem', color: '#f1f5f9' }}>
                GCSE / IGCSE Exam Practice
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.65, margin: 0 }}>
                Board-specific revision, practice questions, and exam technique for your chosen exam board
              </p>
              <div style={{ marginTop: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#818cf8', fontWeight: 600, fontSize: '0.9rem' }}>
                Choose your board <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section style={{
        padding: '3.5rem 1.5rem',
        background: 'linear-gradient(180deg, rgba(16,185,129,0.04), transparent)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.75rem' }}>
            Why Students Choose LearnRight
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0 }} />
                <span style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>{f}</span>
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
          Start free, upgrade when you're ready. Cancel anytime.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {/* Free tier */}
          <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontWeight: 700, fontSize: '1.15rem', color: '#f1f5f9', marginBottom: '0.5rem' }}>Free</h3>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#f1f5f9' }}>£0</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
              {['3 free game trials', 'Course previews', 'Glossary access'].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: '#cbd5e1', fontSize: '0.9rem' }}>
                  <CheckCircle size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} /> {item}
                </li>
              ))}
            </ul>
            <Link to="/register" className="btn-secondary" style={{ padding: '0.75rem 1.5rem', textAlign: 'center', width: '100%' }}>
              Get Started <ArrowRight size={16} />
            </Link>
          </div>

          {/* Monthly tier */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(5,150,105,0.08))',
            border: '2px solid rgba(16,185,129,0.3)',
            borderRadius: '16px',
            padding: '2rem',
            display: 'flex', flexDirection: 'column',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.4)',
              borderRadius: '100px', padding: '0.3rem 1rem', fontSize: '0.7rem', color: '#34d399',
              fontWeight: 700, letterSpacing: '0.06em', whiteSpace: 'nowrap',
            }}>
              <Star size={12} /> MOST POPULAR
            </div>
            <h3 style={{ fontWeight: 700, fontSize: '1.15rem', color: '#f1f5f9', marginBottom: '0.5rem' }}>Monthly</h3>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#10b981' }}>£12.50</span>
              <span style={{ color: '#64748b', fontSize: '0.9rem' }}>/month</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
              {['Unlimited access to all courses', 'Unlimited game attempts', 'Full glossary & flashcard decks', 'Progress tracking & certificates', 'Cancel anytime'].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: '#cbd5e1', fontSize: '0.9rem' }}>
                  <CheckCircle size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} /> {item}
                </li>
              ))}
            </ul>
            <Link to="/register" className="btn-primary" style={{ padding: '0.75rem 1.5rem', textAlign: 'center', width: '100%' }}>
              Subscribe Now <ArrowRight size={16} />
            </Link>
          </div>

          {/* Pro tier */}
          <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              background: 'rgba(16,185,129,0.1)', borderRadius: '100px',
              padding: '0.25rem 0.75rem', fontSize: '0.7rem', color: '#34d399',
              fontWeight: 700, letterSpacing: '0.06em', marginBottom: '0.5rem', alignSelf: 'flex-start',
            }}>
              LIFETIME
            </div>
            <h3 style={{ fontWeight: 700, fontSize: '1.15rem', color: '#f1f5f9', marginBottom: '0.5rem' }}>Pro</h3>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#f1f5f9' }}>£179</span>
              <span style={{ color: '#64748b', fontSize: '0.85rem' }}>one-time</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
              {['Everything in Monthly', 'Lifetime access — pay once, learn forever', 'All future courses & updates included', 'Priority support'].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: '#cbd5e1', fontSize: '0.9rem' }}>
                  <CheckCircle size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} /> {item}
                </li>
              ))}
            </ul>
            <Link to="/pricing" className="btn-secondary" style={{ padding: '0.75rem 1.5rem', textAlign: 'center', width: '100%' }}>
              Get Lifetime Access <ArrowRight size={16} />
            </Link>
          </div>
        </div>
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
          &copy; {new Date().getFullYear()} LearnRight English. Built with ❤️ for English students.
        </p>
      </footer>
    </div>
  );
}
