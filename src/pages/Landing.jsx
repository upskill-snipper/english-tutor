import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, CheckCircle, ArrowRight, Star, Gamepad2, Brain } from 'lucide-react';
import Navbar from '../components/Navbar';
import Lauren from '../components/Lauren';

const KS3_FEATURES = [
  'Reading Skills',
  'Creative Writing',
  'Poetry Analysis',
  'Grammar & Punctuation',
  'Shakespeare Introduction',
  'Media Literacy',
];

const GCSE_FEATURES = [
  'Board-Specific Courses',
  'Mark Scheme Practice',
  'Set Text Analysis',
  'Poetry Anthologies',
  'Exam Technique',
  'Predicted Grades',
];

const BOARDS = [
  { name: 'AQA', color: '#2563eb' },
  { name: 'Edexcel', color: '#dc2626' },
  { name: 'OCR', color: '#7c3aed' },
  { name: 'WJEC', color: '#ea580c' },
];

const GAME_NAMES = [
  'Quote Detective',
  'Vocabulary Builder',
  'Grammar Rush',
  'Spelling Bee',
  'Context Clues',
  'Literary Terms',
];

const sectionBase = {
  width: '100%',
  padding: '80px 2rem',
};

export default function Landing() {
  const [showFloatingLauren, setShowFloatingLauren] = useState(true);

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '6rem 2rem 4rem',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.12) 0%, transparent 60%)',
      }}>
        <div style={{ maxWidth: '780px' }}>
          <h1 style={{
            fontSize: 'clamp(2.8rem, 6vw, 4rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
          }}>
            Learn<span style={{
              background: 'linear-gradient(135deg, #10b981, #34d399)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Right</span> English
          </h1>

          <p style={{
            fontSize: '1.25rem', color: '#94a3b8', lineHeight: 1.7,
            maxWidth: '660px', margin: '0 auto 2rem',
          }}>
            Complete GCSE &amp; IGCSE English preparation for UK exam boards including AQA, Edexcel, OCR &amp; WJEC. Practice, learn, and earn your certificate.
          </p>

          <div style={{
            fontSize: '1rem', color: '#7a8ba8', lineHeight: 1.85,
            maxWidth: '680px', margin: '0 auto 2rem',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '16px',
            padding: '1.5rem 2rem',
            textAlign: 'left',
          }}>
            Built by an experienced Head of English with 10+ years teaching in British and International schools, and 6 years examining experience working for AQA, Cambridge and Pearson. Every resource is shaped by real classroom success and examiner insight, so students know precisely how to achieve top grades.
          </div>

          <div style={{ margin: '2rem auto', display: 'flex', justifyContent: 'center' }}>
            <Lauren
              size="large"
              emotion="happy"
              message="Welcome! I'm Lauren, your English tutor. I'll guide you through every step of your exam preparation."
              position="inline"
            />
          </div>

          <a
            href="https://www.firsttutors.com/uk/tutor/lauren.english.42/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              color: '#34d399', fontWeight: 600, fontSize: '1.05rem',
              textDecoration: 'none',
            }}
          >
            Meet your tutor <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* ===== KS3 SECTION ===== */}
      <section style={{
        ...sectionBase,
        minHeight: '50vh',
        background: 'linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(16,185,129,0.02) 100%)',
        borderTop: '1px solid rgba(16,185,129,0.15)',
        borderBottom: '1px solid rgba(16,185,129,0.08)',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem',
        }}>
          {/* Left content */}
          <div style={{ flex: '1 1 560px', minWidth: 0 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)',
              borderRadius: '100px', padding: '0.35rem 1rem',
              fontSize: '0.75rem', fontWeight: 700, color: '#34d399',
              letterSpacing: '0.06em', marginBottom: '1.25rem', textTransform: 'uppercase',
            }}>
              <BookOpen size={14} /> Key Stage 3
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 900, lineHeight: 1.15,
              marginBottom: '1.5rem', color: '#f1f5f9',
            }}>
              KS3 Practice (Years 7-9)
            </h2>

            <p style={{
              fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.8,
              marginBottom: '2rem', maxWidth: '600px',
            }}>
              Build your foundations in reading comprehension, creative writing, literary analysis, and grammar. Our KS3 programme covers everything from understanding fiction and non-fiction texts to crafting compelling narratives and persuasive writing. Designed to bridge the gap between primary school and GCSE-level expectations, with interactive lessons and quizzes that track your progress.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: '0.75rem',
              marginBottom: '2.5rem',
            }}>
              {KS3_FEATURES.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={16} color="#10b981" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>{f}</span>
                </div>
              ))}
            </div>

            <Link
              to="/courses?tier=KS3"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                color: '#fff', fontWeight: 700, fontSize: '1.05rem',
                padding: '0.9rem 2rem', borderRadius: '12px',
                textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(16,185,129,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              Start KS3 Practice <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right decorative accent */}
          <div style={{
            flex: '0 1 280px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: '200px', height: '200px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.03) 70%)',
              border: '2px solid rgba(16,185,129,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <BookOpen size={72} color="rgba(16,185,129,0.4)" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== GCSE / IGCSE SECTION ===== */}
      <section style={{
        ...sectionBase,
        minHeight: '50vh',
        background: 'linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(99,102,241,0.02) 100%)',
        borderBottom: '1px solid rgba(99,102,241,0.08)',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem',
        }}>
          {/* Left content */}
          <div style={{ flex: '1 1 560px', minWidth: 0 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)',
              borderRadius: '100px', padding: '0.35rem 1rem',
              fontSize: '0.75rem', fontWeight: 700, color: '#a5b4fc',
              letterSpacing: '0.06em', marginBottom: '1.25rem', textTransform: 'uppercase',
            }}>
              <Brain size={14} /> Exam Preparation
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 900, lineHeight: 1.15,
              marginBottom: '1.5rem', color: '#f1f5f9',
            }}>
              GCSE &amp; IGCSE Exam Practice
            </h2>

            <p style={{
              fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.8,
              marginBottom: '2rem', maxWidth: '600px',
            }}>
              Board-specific revision, practice questions, and exam technique tailored to your exact specification. Whether you&#39;re studying AQA, Edexcel, OCR, or WJEC Eduqas, every resource matches your exam board&#39;s mark scheme and assessment objectives. From Language Paper 1 creative reading to Literature essay responses, our courses prepare you for exactly what the examiners are looking for.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: '0.75rem',
              marginBottom: '2rem',
            }}>
              {GCSE_FEATURES.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={16} color="#818cf8" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>{f}</span>
                </div>
              ))}
            </div>

            {/* Board badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
              {BOARDS.map((b) => (
                <div key={b.name} style={{
                  background: `${b.color}20`,
                  border: `2px solid ${b.color}60`,
                  borderRadius: '10px',
                  padding: '0.5rem 1.25rem',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  color: b.color,
                  letterSpacing: '0.02em',
                }}>
                  {b.name}
                </div>
              ))}
            </div>

            <Link
              to="/board-select"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                color: '#fff', fontWeight: 700, fontSize: '1.05rem',
                padding: '0.9rem 2rem', borderRadius: '12px',
                textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(99,102,241,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              Choose Your Exam Board <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right decorative accent */}
          <div style={{
            flex: '0 1 280px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: '200px', height: '200px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0.03) 70%)',
              border: '2px solid rgba(99,102,241,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Brain size={72} color="rgba(99,102,241,0.4)" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== GAMES SECTION ===== */}
      <section style={{
        ...sectionBase,
        minHeight: '50vh',
        background: 'linear-gradient(135deg, rgba(245,158,11,0.06) 0%, rgba(20,184,166,0.04) 100%)',
        borderBottom: '1px solid rgba(245,158,11,0.08)',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto', width: '100%',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem',
        }}>
          {/* Left content */}
          <div style={{ flex: '1 1 560px', minWidth: 0 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)',
              borderRadius: '100px', padding: '0.35rem 1rem',
              fontSize: '0.75rem', fontWeight: 700, color: '#fbbf24',
              letterSpacing: '0.06em', marginBottom: '1.25rem', textTransform: 'uppercase',
            }}>
              <Gamepad2 size={14} /> Interactive Games
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 900, lineHeight: 1.15,
              marginBottom: '1.5rem', color: '#f1f5f9',
            }}>
              12 Interactive Learning Games
            </h2>

            <p style={{
              fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.8,
              marginBottom: '2rem', maxWidth: '600px',
            }}>
              Sharpen your skills the fun way with quiz games covering quotes, vocabulary, grammar, spelling, context, and more. Try 3 games free, then subscribe for unlimited access.
            </p>

            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '0.6rem',
              marginBottom: '2.5rem',
            }}>
              {GAME_NAMES.map((g, i) => (
                <span key={i} style={{
                  background: 'rgba(245,158,11,0.08)',
                  border: '1px solid rgba(245,158,11,0.2)',
                  borderRadius: '8px',
                  padding: '0.4rem 0.9rem',
                  fontSize: '0.9rem',
                  color: '#fbbf24',
                  fontWeight: 600,
                }}>
                  {g}
                </span>
              ))}
            </div>

            <Link
              to="/games"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                color: '#fff', fontWeight: 700, fontSize: '1.05rem',
                padding: '0.9rem 2rem', borderRadius: '12px',
                textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(245,158,11,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              Play Games <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right decorative accent */}
          <div style={{
            flex: '0 1 280px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: '200px', height: '200px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, rgba(20,184,166,0.05) 70%)',
              border: '2px solid rgba(245,158,11,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Gamepad2 size={72} color="rgba(245,158,11,0.4)" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING SECTION ===== */}
      <section style={{
        ...sectionBase,
        padding: '100px 2rem',
        background: 'linear-gradient(180deg, rgba(16,185,129,0.04) 0%, transparent 100%)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
            fontWeight: 900,
            marginBottom: '0.75rem',
          }}>
            Simple, Transparent Pricing
          </h2>
          <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '3.5rem', fontSize: '1.1rem' }}>
            Start free, upgrade when you&#39;re ready. Cancel anytime.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}>
            {/* Free tier */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              display: 'flex', flexDirection: 'column',
            }}>
              <h3 style={{ fontWeight: 800, fontSize: '1.3rem', color: '#f1f5f9', marginBottom: '0.75rem' }}>Free</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: 900, color: '#f1f5f9' }}>£0</span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                3 free game trials only. Perfect for trying before you buy.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1 }}>
                {['3 free game trials', 'Course previews', 'Glossary access'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', color: '#cbd5e1', fontSize: '0.95rem' }}>
                    <CheckCircle size={17} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/register" className="btn-secondary" style={{ padding: '0.85rem 1.5rem', textAlign: 'center', width: '100%', fontSize: '1rem' }}>
                Get Started <ArrowRight size={16} />
              </Link>
            </div>

            {/* Monthly tier */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(5,150,105,0.06))',
              border: '2px solid rgba(16,185,129,0.35)',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              display: 'flex', flexDirection: 'column',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.4)',
                borderRadius: '100px', padding: '0.35rem 1.25rem', fontSize: '0.75rem', color: '#34d399',
                fontWeight: 700, letterSpacing: '0.06em', whiteSpace: 'nowrap',
              }}>
                <Star size={13} /> MOST POPULAR
              </div>
              <h3 style={{ fontWeight: 800, fontSize: '1.3rem', color: '#f1f5f9', marginBottom: '0.75rem' }}>Monthly</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: 900, color: '#10b981' }}>£12.50</span>
                <span style={{ color: '#64748b', fontSize: '1rem' }}>/month</span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Full access to all courses, games, flashcards, and progress tracking. Cancel anytime.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1 }}>
                {['Unlimited access to all courses', 'Unlimited game attempts', 'Full glossary & flashcard decks', 'Progress tracking & certificates', 'Cancel anytime'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', color: '#cbd5e1', fontSize: '0.95rem' }}>
                    <CheckCircle size={17} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/register" className="btn-primary" style={{ padding: '0.85rem 1.5rem', textAlign: 'center', width: '100%', fontSize: '1rem' }}>
                Subscribe Now <ArrowRight size={16} />
              </Link>
            </div>

            {/* Pro tier */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                background: 'rgba(16,185,129,0.1)', borderRadius: '100px',
                padding: '0.3rem 0.85rem', fontSize: '0.75rem', color: '#34d399',
                fontWeight: 700, letterSpacing: '0.06em', marginBottom: '0.75rem', alignSelf: 'flex-start',
              }}>
                LIFETIME
              </div>
              <h3 style={{ fontWeight: 800, fontSize: '1.3rem', color: '#f1f5f9', marginBottom: '0.75rem' }}>Pro</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: 900, color: '#f1f5f9' }}>£179</span>
                <span style={{ color: '#64748b', fontSize: '0.95rem' }}>one-time</span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Full access forever. Pay once, learn for life. All future courses and updates included.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1 }}>
                {['Everything in Monthly', 'Lifetime access — pay once, learn forever', 'All future courses & updates included', 'Priority support'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', color: '#cbd5e1', fontSize: '0.95rem' }}>
                    <CheckCircle size={17} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/pricing" className="btn-secondary" style={{ padding: '0.85rem 1.5rem', textAlign: 'center', width: '100%', fontSize: '1rem' }}>
                Get Lifetime Access <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '2.5rem 2rem',
        textAlign: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <GraduationCap size={20} color="#10b981" />
          <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#f1f5f9' }}>
            Learn<span style={{ color: '#10b981' }}>Right</span> English
          </span>
        </div>
        <p style={{ color: '#475569', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} LearnRight English. All rights reserved.
        </p>
      </footer>

      {showFloatingLauren && (
        <Lauren
          size="small"
          emotion="neutral"
          message="Need help choosing? KS3 for Years 7-9, or pick your exam board for GCSE & IGCSE!"
          position="floating"
          onDismiss={() => setShowFloatingLauren(false)}
        />
      )}
    </div>
  );
}
