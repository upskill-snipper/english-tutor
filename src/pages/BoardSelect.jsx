import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

const BOARDS = [
  {
    id: 'aqa',
    name: 'AQA',
    subtitle: 'Assessment and Qualifications Alliance',
    color: '#2563eb',
    desc: 'The most popular GCSE English board in England, used by the majority of secondary schools. AQA English Language covers Paper 1 (Explorations in Creative Reading and Writing) and Paper 2 (Writers\u2019 Viewpoints and Perspectives). English Literature includes the study of Shakespeare (Macbeth or Romeo & Juliet), a 19th-century novel (A Christmas Carol or Jekyll & Hyde), modern texts (An Inspector Calls or Blood Brothers), and the Power & Conflict poetry anthology.',
    specs: [
      'Language Paper 1 & 2',
      'Literature Paper 1 & 2',
      'Shakespeare Set Texts',
      '19th Century Novel',
      'Modern Text',
      'Power & Conflict Poetry',
    ],
    cta: 'Study AQA',
  },
  {
    id: 'edexcel',
    name: 'Edexcel',
    subtitle: 'Pearson Edexcel',
    color: '#dc2626',
    desc: 'Pearson Edexcel offers both GCSE and International GCSE (IGCSE) specifications, making it the go-to board for international schools worldwide. The GCSE covers Language and Literature with a focus on unseen texts and comparative analysis. IGCSE English offers flexible specifications including Spec A and Spec B, covering reading, writing, and coursework options.',
    specs: [
      'GCSE Language & Literature',
      'IGCSE Spec A & B',
      'Belonging Poetry Anthology',
      'Set Text Study',
      'Comparative Analysis',
    ],
    cta: 'Study Edexcel',
  },
  {
    id: 'ocr',
    name: 'OCR',
    subtitle: 'Oxford, Cambridge and RSA',
    color: '#7c3aed',
    desc: 'OCR English Language focuses on reading comprehension, creative and transactional writing, and spoken language assessment. Literature covers Shakespeare, poetry from the OCR anthology, and prose set texts. The specification emphasises close reading skills and contextual understanding.',
    specs: [
      'Language Reading & Writing',
      'Literature Set Texts',
      'OCR Poetry Anthology',
      'Spoken Language',
      'Creative Writing',
    ],
    cta: 'Study OCR',
  },
  {
    id: 'wjec',
    name: 'WJEC Eduqas',
    subtitle: 'Welsh Joint Education Committee',
    color: '#ea580c',
    desc: 'WJEC Eduqas serves schools in Wales and increasingly in England. The specification covers Language (reading and writing across fiction and non-fiction) and Literature (Shakespeare, poetry, prose, and unseen poetry). Known for its clear mark schemes and accessible question styles.',
    specs: [
      'Language Component 1 & 2',
      'Literature Component 1 & 2',
      'Welsh Curriculum Alignment',
      'WJEC Poetry Anthology',
    ],
    cta: 'Study WJEC',
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

      {/* Board sections */}
      {BOARDS.map((board, idx) => (
        <section
          key={board.id}
          style={{
            minHeight: '40vh',
            width: '100%',
            background: idx % 2 === 0
              ? `linear-gradient(135deg, ${board.color}08 0%, ${board.color}04 100%)`
              : `linear-gradient(135deg, ${board.color}06 0%, ${board.color}02 100%)`,
            borderLeft: 'none',
            padding: '60px 1.5rem',
          }}
        >
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            borderLeft: `4px solid ${board.color}`,
            paddingLeft: '2rem',
          }}>
            {/* Heading */}
            <h2 style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              color: board.color,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '0.25rem',
            }}>
              {board.name}
            </h2>

            {/* Subtitle */}
            <p style={{
              fontSize: '1.1rem',
              color: '#94a3b8',
              fontWeight: 500,
              marginBottom: '1.5rem',
              letterSpacing: '0.01em',
            }}>
              {board.subtitle}
            </p>

            {/* Description */}
            <p style={{
              fontSize: '1.05rem',
              color: '#cbd5e1',
              lineHeight: 1.8,
              maxWidth: '760px',
              marginBottom: '2rem',
            }}>
              {board.desc}
            </p>

            {/* Key specs */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.6rem',
              marginBottom: '2rem',
            }}>
              {board.specs.map((spec) => (
                <span
                  key={spec}
                  style={{
                    background: `${board.color}18`,
                    border: `1px solid ${board.color}40`,
                    color: board.color,
                    padding: '0.4rem 0.9rem',
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {spec}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              to={`/board/${board.id}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: board.color,
                color: '#fff',
                padding: '0.8rem 1.8rem',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.opacity = '0.85';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'none';
              }}
            >
              {board.cta} &rarr;
            </Link>
          </div>
        </section>
      ))}

      {/* Not sure section */}
      <section style={{
        padding: '3rem 1.5rem 4rem',
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
