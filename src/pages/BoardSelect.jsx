import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

const BOARDS = [
  {
    id: 'aqa',
    name: 'AQA',
    color: '#2563eb',
    bg: 'rgba(37,99,235,0.10)',
    border: 'rgba(37,99,235,0.3)',
    desc: 'The most popular GCSE English board. Covers Language Paper 1 & 2, Literature with Macbeth, An Inspector Calls, Power & Conflict poetry.',
  },
  {
    id: 'edexcel',
    name: 'Edexcel',
    color: '#dc2626',
    bg: 'rgba(220,38,38,0.10)',
    border: 'rgba(220,38,38,0.3)',
    desc: 'Pearson Edexcel GCSE and IGCSE English. Covers Language, Literature, and International GCSE specifications.',
  },
  {
    id: 'ocr',
    name: 'OCR',
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.10)',
    border: 'rgba(124,58,237,0.3)',
    desc: 'OCR GCSE English Language and Literature. Includes set texts, spoken language, and creative writing components.',
  },
  {
    id: 'wjec',
    name: 'WJEC',
    color: '#ea580c',
    bg: 'rgba(234,88,12,0.10)',
    border: 'rgba(234,88,12,0.3)',
    desc: 'WJEC Eduqas GCSE English for Wales and England. Language and Literature with Welsh curriculum alignment.',
  },
];

export default function BoardSelect() {
  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />

      {/* Header */}
      <section style={{ padding: '4rem 1.5rem 2rem', textAlign: 'center' }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 4.5vw, 3rem)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          marginBottom: '1rem',
        }}>
          Choose Your Exam Board
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#94a3b8',
          lineHeight: 1.7,
          maxWidth: '620px',
          margin: '0 auto',
        }}>
          Select your exam board to access board-specific revision, practice questions, flashcards, games, and study tools.
        </p>
      </section>

      {/* Board cards */}
      <section style={{ padding: '1rem 1.5rem 3rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {BOARDS.map((board) => (
            <Link
              key={board.id}
              to={`/board/${board.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                className="board-card"
                style={{
                  background: board.bg,
                  border: `2px solid ${board.border}`,
                  borderRadius: '16px',
                  padding: '2rem',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = `0 16px 48px ${board.border}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: board.color,
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.02em',
                }}>
                  {board.name}
                </div>
                <p style={{
                  color: '#cbd5e1',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  flex: 1,
                }}>
                  {board.desc}
                </p>
                <div style={{
                  marginTop: '1.25rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: board.color,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}>
                  Get started &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Not sure section */}
      <section style={{
        padding: '2rem 1.5rem 4rem',
        maxWidth: '640px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '2rem',
        }}>
          <HelpCircle size={28} color="#94a3b8" style={{ marginBottom: '0.75rem' }} />
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Not sure which board?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Check with your school or teacher which exam board you're studying. Most schools in England use AQA or Edexcel.
          </p>
        </div>
      </section>
    </div>
  );
}
