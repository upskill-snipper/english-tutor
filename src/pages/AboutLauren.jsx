import { Link } from 'react-router-dom';
import { Star, ArrowRight, Globe, FileCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const REVIEWS = [
  { name: 'Jamie', text: 'Lauren was really helpful in supporting my son and certainly boosted both his skill set, preparedness and confidence levels.' },
  { name: 'Lisa', text: 'Lauren has been a fantastic tutor. My daughter feels much more confident in English and her marks are improving. Would highly recommend.' },
  { name: 'Kirsty', text: 'Lauren is an excellent tutor and explained everything so well! I wish we had found her earlier! Highly recommend!' },
  { name: 'Pankaj', text: "Lauren is a 'next level' English teacher. - These are my daughters' comments!" },
  { name: 'Harry', text: "Has had an incredibly positive impact on my sons ability and confidence, engaging and practical \u2026 worth every penny" },
  { name: 'Grace', text: 'Lauren is excellent, she has helped my daughter with her GCSE English feel more confident when answering questions and looking at a different way to answer the questions. If she is stuck with her school homework Lauren has helped her to understand it. I would definitely recommend Lauren.' },
  { name: 'Angelina', text: "Lauren has been brilliant and we've seen a massive improvement in my son's English grades. From thinking we're not sure how he's going to get a 4 in his English GCSE he's now getting comments from his teacher that he is writing exemplar answers. He enjoys his sessions with Lauren and has responded well to her tutoring. Very happy to recommend Lauren." },
  { name: 'Rachael', text: 'Lauren was an amazing support to my son during his preparation for his GCSE English examinations. She was patient and kind, adapting work to ensure he understood new and tricky concepts. Lauren was always organised and punctual to face to face tutor and online sessions. I would highly recommend Lauren - her help and support was invaluable.' },
  { name: 'Cate', text: 'Lauren is very friendly and encouraging. She is also flexible and adapts work based on feedback from our daughter so sessions are very useful and enjoyable.' },
  { name: 'Charlie', text: 'Super engaging with my son who has mild ASD. Lauren has lesson planned the whole year leading up to GCSE English exams next summer. I feel super confident in her abilities to coach Harry through this challenging year. Really excellent start.' },
  { name: 'Inger', text: 'Lauren has been tutoring my son for several months during the Spring and Summer term of year 11. She has gone the extra mile to understand how best to support my son through his GCSE preparations, hugely helping his confidence and supporting his ability, tailoring the sessions to his strengths, with good results all-round. She is an amazing and dedicated teacher and we are so pleased to have found her. We highly recommend Lauren as an English tutor.' },
  { name: 'Kelly', text: 'Lauren has recently started providing support to my daughter for her GCSE English. She is incredibly friendly and approachable. My daughter finds her way of explaining things very easy to understand. We are very pleased we have found Lauren and would recommend her.' },
];

const sectionBase = {
  width: '100%',
  padding: '80px 2rem',
};

function Stars() {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
      ))}
    </div>
  );
}

export default function AboutLauren() {
  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section style={{
        ...sectionBase,
        padding: '6rem 2rem 4rem',
        display: 'flex',
        justifyContent: 'center',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.12) 0%, transparent 60%)',
      }}>
        <div style={{ maxWidth: '780px', textAlign: 'center' }}>
          <img
            src={`${import.meta.env.BASE_URL}Lauren.png`}
            alt="Lauren — Online English Teacher"
            style={{
              width: '200px',
              height: '240px',
              objectFit: 'cover',
              objectPosition: 'center top',
              borderRadius: '20px',
              border: '3px solid rgba(16,185,129,0.5)',
              boxShadow: '0 0 30px rgba(16,185,129,0.25)',
              marginBottom: '1.5rem',
            }}
          />

          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.2rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '0.25rem',
          }}>
            Lauren
          </h1>
          <p style={{
            fontSize: '1.15rem',
            color: '#10b981',
            fontWeight: 600,
            marginBottom: '1rem',
          }}>
            Online English Teacher
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Stars />
            <span style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{REVIEWS.length} reviews</span>
          </div>

          <p style={{
            fontSize: '1.1rem',
            color: '#94a3b8',
            lineHeight: 1.8,
            maxWidth: '660px',
            margin: '0 auto',
          }}>
            Hey, I am Lauren! I am an enthusiastic, positive English teacher, with a natural ability to form relationships and put people at ease. I have a range of experience working with learners aged 14 and above. I believe in contextualising learning and learning in a range of different ways.
          </p>
        </div>
      </section>

      {/* ===== WHY LEARNRIGHT SECTION ===== */}
      <section style={{
        ...sectionBase,
        background: 'linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(16,185,129,0.02) 100%)',
        borderTop: '1px solid rgba(16,185,129,0.15)',
        borderBottom: '1px solid rgba(16,185,129,0.08)',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
            fontWeight: 900,
            marginBottom: '1.5rem',
            color: '#f1f5f9',
          }}>
            Why I Created LearnRight
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            Alongside my full-time teaching and leadership role as Head of English, I have supported students through one-to-one tutoring, while working as an examiner and moderator for AQA, Pearson and Cambridge. Every student I worked with saw real improvement, not just in their grades, but in their confidence and understanding of English. Parents would tell me their children had gone from dreading English to genuinely enjoying it, and exam results consistently reflected that progress.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            But there was a problem. There simply weren&rsquo;t enough hours in the day. My waiting list grew longer and longer, and I found myself having to turn away students who needed help. It didn&rsquo;t sit right with me because I knew I could make a difference for them, but the limitations of one-to-one tutoring meant I could only reach so many.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            That&rsquo;s when the idea for LearnRight was born. I wanted to take everything that made my tutoring effective (the examiner insight, the mark scheme expertise, the ability to explain tricky concepts in a way that actually clicks) and make it available to every student who needs it, not just the ones lucky enough to get a slot in my diary.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.85 }}>
            LearnRight is built from real classroom success and genuine examining experience. Every course, every practice question, every piece of feedback is shaped by what I know works. My passion is helping learners achieve the best results they&rsquo;re capable of, and this site means I can finally do that without limits.
          </p>
        </div>
      </section>

      {/* ===== DETAILS SECTION ===== */}
      <section style={{
        ...sectionBase,
        padding: '60px 2rem',
        background: 'linear-gradient(135deg, rgba(16,185,129,0.04) 0%, transparent 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Globe size={20} color="#10b981" />
            <div>
              <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Languages</span>
              <p style={{ margin: 0, color: '#f1f5f9', fontWeight: 600 }}>English (British)</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <FileCheck size={20} color="#10b981" />
            <div>
              <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>References</span>
              <p style={{ margin: 0, color: '#f1f5f9', fontWeight: 600 }}>Available On File</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS SECTION ===== */}
      <section style={{
        ...sectionBase,
        background: 'linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(16,185,129,0.04) 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
              fontWeight: 900,
              marginBottom: '0.5rem',
              color: '#f1f5f9',
            }}>
              What Parents &amp; Students Say
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem' }}>{REVIEWS.length} verified reviews</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {REVIEWS.map((r, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '2rem 2rem 1.5rem',
                position: 'relative',
              }}>
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  left: '20px',
                  fontSize: '3.5rem',
                  lineHeight: 1,
                  color: 'rgba(16,185,129,0.15)',
                  fontFamily: 'Georgia, serif',
                  userSelect: 'none',
                }}>&ldquo;</span>
                <p style={{
                  fontSize: '1.05rem',
                  color: '#cbd5e1',
                  lineHeight: 1.8,
                  margin: '0 0 1rem',
                  paddingLeft: '0.25rem',
                }}>
                  {r.text}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontWeight: 700, color: '#f1f5f9', fontSize: '0.95rem' }}>{r.name}</span>
                  <Stars />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section style={{
        ...sectionBase,
        padding: '100px 2rem',
        textAlign: 'center',
        background: 'radial-gradient(ellipse at 50% 100%, rgba(16,185,129,0.1) 0%, transparent 60%)',
      }}>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
          fontWeight: 900,
          marginBottom: '1.5rem',
          color: '#f1f5f9',
        }}>
          Ready to learn with Lauren?
        </h2>
        <Link
          to="/board-select"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            color: '#fff',
            fontWeight: 700,
            fontSize: '1.1rem',
            padding: '1rem 2.5rem',
            borderRadius: '12px',
            textDecoration: 'none',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(16,185,129,0.3)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          Start Learning <ArrowRight size={20} />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
