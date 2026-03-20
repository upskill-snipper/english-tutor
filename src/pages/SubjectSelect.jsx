import { useParams, Link } from 'react-router-dom';
import { BookOpen, PenTool, ArrowRight, ChevronLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import { BOARD_MAP, getBoardData } from '../utils/boardUtils';

function getPaperNames(registry, specKey) {
  if (!registry || !registry.specs[specKey]) return [];
  return registry.specs[specKey].papers.map(p => ({ id: p.id, name: p.name, duration: p.duration, marks: p.marks }));
}

/* ── Shared styles ──────────────────────────────────────────── */
const sectionStyle = (color, flipped) => ({
  width: '100%',
  minHeight: '50vh',
  display: 'flex',
  flexDirection: flipped ? 'row-reverse' : 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  background: `linear-gradient(${flipped ? '225deg' : '135deg'}, ${color}0a 0%, ${color}03 100%)`,
  borderTop: `1px solid ${color}15`,
  padding: '3.5rem 2rem',
});

const contentHalf = {
  flex: '1 1 480px',
  minWidth: 0,
  padding: '1.5rem 2rem',
};

const visualHalf = (color) => ({
  flex: '1 1 320px',
  minWidth: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
});

const paperCard = (color) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '1.15rem 1.5rem',
  borderRadius: '12px',
  background: `${color}0a`,
  border: `1px solid ${color}25`,
  textDecoration: 'none',
  color: '#f1f5f9',
  transition: 'all 0.2s',
  cursor: 'pointer',
  marginBottom: '0.75rem',
});

const iconCircle = (color, size = 100) => ({
  width: `${size}px`,
  height: `${size}px`,
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${color}20, ${color}08)`,
  border: `2px solid ${color}40`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

/* ── KS3 simplified view ────────────────────────────────────── */
function KS3View({ boardId, color }) {
  const areas = [
    { label: 'Reading & Comprehension', desc: 'Fiction and non-fiction reading skills, inference, and analysis', link: `/board/${boardId}/language/paper-1` },
    { label: 'Writing Skills', desc: 'Creative writing, transactional writing, and SPaG', link: `/board/${boardId}/language/paper-2` },
    { label: 'Literature & Texts', desc: 'Novels, plays, poetry, and Shakespeare introduction', link: `/board/${boardId}/literature/paper-1` },
    { label: 'Speaking & Listening', desc: 'Presentation skills, group discussion, and debate', link: `/board/${boardId}/literature/paper-2` },
  ];

  return (
    <section style={{ padding: '3.5rem 2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{
          borderRadius: '16px',
          padding: '2.5rem',
          background: `linear-gradient(135deg, ${color}12, ${color}05)`,
          border: `1px solid ${color}30`,
          borderLeft: `4px solid ${color}`,
          marginBottom: '2.5rem',
        }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 900, color, marginBottom: '0.75rem' }}>
            KS3 English
          </h2>
          <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '1.05rem', margin: 0 }}>
            Key Stage 3 covers Years 7-9 and builds the foundation for GCSE English.
            There are no formal exam papers at KS3 — instead, you will develop core skills
            in reading, writing, speaking, and literature study that prepare you for whichever
            GCSE exam board you go on to study.
          </p>
        </div>

        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem' }}>Content Areas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {areas.map(area => (
            <Link key={area.label} to={area.link} style={paperCard(color)}
              onMouseEnter={e => { e.currentTarget.style.background = `${color}18`; e.currentTarget.style.transform = 'translateX(4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = `${color}0a`; e.currentTarget.style.transform = 'none'; }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.2rem' }}>{area.label}</div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{area.desc}</div>
              </div>
              <ArrowRight size={18} color={color} style={{ flexShrink: 0, marginLeft: '1rem' }} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Subject Section (Language or Literature) ───────────────── */
function SubjectSection({ boardId, subject, color, title, description, papers, flipped }) {
  return (
    <section style={sectionStyle(color, flipped)}>
      {/* Text content */}
      <div className="subject-content-half" style={contentHalf}>
        <div style={{ maxWidth: '640px', margin: flipped ? '0 0 0 auto' : '0' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color,
            background: `${color}15`,
            padding: '0.3rem 0.75rem',
            borderRadius: '4px',
            marginBottom: '1rem',
          }}>
            {subject === 'language' ? 'English Language' : 'English Literature'}
          </span>

          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}>
            {title}
          </h2>

          <p style={{
            color: '#94a3b8',
            lineHeight: 1.8,
            fontSize: '1.05rem',
            marginBottom: '2rem',
          }}>
            {description}
          </p>

          {/* Paper links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {papers.map(paper => (
              <Link
                key={paper.id}
                to={`/board/${boardId}/${subject}/paper-${paper.id}`}
                style={paperCard(color)}
                onMouseEnter={e => { e.currentTarget.style.background = `${color}18`; e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = `${color}0a`; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem' }}>{paper.name}</div>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: '#64748b' }}>
                    {paper.duration && <span>{paper.duration}</span>}
                    {paper.marks && <span>{paper.marks} marks</span>}
                  </div>
                </div>
                <ArrowRight size={18} color={color} style={{ flexShrink: 0, marginLeft: '1rem' }} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Visual placeholder */}
      <div className="subject-visual-half" style={visualHalf(color)}>
        <div style={iconCircle(color, 140)}>
          {subject === 'language'
            ? <PenTool size={56} color={color} strokeWidth={1.5} />
            : <BookOpen size={56} color={color} strokeWidth={1.5} />
          }
        </div>
      </div>
    </section>
  );
}

/* ── Main Page ──────────────────────────────────────────────── */
export default function SubjectSelect() {
  const { boardId } = useParams();
  const { meta, registry } = getBoardData(boardId);
  const color = meta.color;
  const isKS3 = boardId === 'ks3';

  const langPapers = getPaperNames(registry, 'gcse-lang');
  const litPapers  = getPaperNames(registry, 'gcse-lit');

  const langDesc = registry
    ? `The ${meta.name} English Language specification covers reading comprehension across fiction and non-fiction texts, creative writing, transactional writing, and language analysis. You will develop skills in close reading, inference, evaluation, and structuring your own written responses — all assessed through two written papers.`
    : 'Develop core reading comprehension, creative writing, and language analysis skills.';

  const litDesc = registry
    ? `The ${meta.name} English Literature specification covers the study of set texts including Shakespeare, a 19th-century novel, modern prose or drama, and poetry. You will explore themes, characters, context, and writers\u2019 methods across a range of literary texts, building the analytical skills needed to write convincing exam essays.`
    : 'Study set texts, poetry, Shakespeare, and develop literary analysis skills.';

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />

      {/* Header */}
      <section style={{ padding: '3.5rem 2rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
        <Link to="/board-select" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          color: '#94a3b8',
          textDecoration: 'none',
          fontSize: '0.85rem',
          marginBottom: '1.5rem',
          transition: 'color 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.color = '#f1f5f9'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; }}
        >
          <ChevronLeft size={16} /> Change exam board
        </Link>

        <h1 style={{
          fontSize: 'clamp(2rem, 4.5vw, 3rem)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          marginBottom: '0.5rem',
        }}>
          <span style={{ color }}>{meta.name}</span> English
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#94a3b8',
          lineHeight: 1.7,
          maxWidth: '620px',
        }}>
          {isKS3
            ? 'Select a content area below to start studying.'
            : 'Choose English Language or English Literature, then select your paper.'}
        </p>
      </section>

      {/* KS3 or GCSE content */}
      {isKS3 ? (
        <KS3View boardId={boardId} color={color} />
      ) : (
        <>
          <SubjectSection
            boardId={boardId}
            subject="language"
            color={color}
            title="English Language"
            description={langDesc}
            papers={langPapers}
            flipped={false}
          />
          <SubjectSection
            boardId={boardId}
            subject="literature"
            color={color}
            title="English Literature"
            description={litDesc}
            papers={litPapers}
            flipped={true}
          />
        </>
      )}
      {/* Responsive polish */}
      <style>{`
        @media (max-width: 640px) {
          .subject-visual-half { display: none !important; }
          .subject-content-half { padding: 1.5rem 1rem !important; }
        }
      `}</style>
    </div>
  );
}
