import { Link } from 'react-router-dom';
import { Star, ArrowRight, GraduationCap, Globe, Clock, FileCheck } from 'lucide-react';
import Navbar from '../components/Navbar';

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

const QUALIFICATIONS = [
  { institution: 'University of Teesside', year: '2019', level: 'Bachelors', subject: 'Education & Training' },
  { institution: 'University of Teesside', year: '2015', level: 'Bachelors', subject: 'UCPD Teaching English' },
  { institution: 'Stockton Riverside College', year: '2016', level: 'College', subject: 'English for Literacy Teachers' },
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
              height: '200px',
              objectFit: 'cover',
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
            <span style={{ color: '#94a3b8', fontSize: '0.95rem' }}>12 reviews</span>
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

      {/* ===== EXPERIENCE SECTION ===== */}
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
            Tutoring Experience
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.8 }}>
            I have been teaching GCSE English since 2015. The majority of my teaching career has been with Y10, Y11 and college students. I have taught students who have had previous negative experiences with English and have little confidence in themselves and their ability. Alongside this, I am a GCSE examiner for AQA English Language and have been since 2019. I have experience of working with learners with SEND; and specialist knowledge of working with learners with ASD.
          </p>
        </div>
      </section>

      {/* ===== APPROACH SECTION ===== */}
      <section style={{
        ...sectionBase,
        background: 'linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(99,102,241,0.02) 100%)',
        borderBottom: '1px solid rgba(99,102,241,0.08)',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
            fontWeight: 900,
            marginBottom: '1.5rem',
            color: '#f1f5f9',
          }}>
            Tutoring Approach
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            To make learning as fun and meaningful as possible. I have a strong belief that all students can achieve, with the right support. I am a tutor who offers and facilitates academic support but also understands the pressures and stresses that exams can cause.
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
          }}>
            <p style={{ fontSize: '0.95rem', color: '#7a8ba8', lineHeight: 1.7, margin: 0 }}>
              I have a full DBS which can be seen if required and complete regular safeguarding training through my employer.
            </p>
          </div>
        </div>
      </section>

      {/* ===== QUALIFICATIONS SECTION ===== */}
      <section style={{
        ...sectionBase,
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
            fontWeight: 900,
            marginBottom: '2rem',
            color: '#f1f5f9',
            textAlign: 'center',
          }}>
            Qualifications
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}>
            {QUALIFICATIONS.map((q, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '1.75rem 1.5rem',
                textAlign: 'center',
              }}>
                <GraduationCap size={28} color="#10b981" style={{ marginBottom: '0.75rem' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.25rem' }}>
                  {q.institution}
                </h3>
                <p style={{ color: '#10b981', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  {q.year} &middot; {q.level}
                </p>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: 0 }}>
                  {q.subject}
                </p>
              </div>
            ))}
          </div>
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
            <Clock size={20} color="#10b981" />
            <div>
              <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Availability</span>
              <p style={{ margin: 0, color: '#f1f5f9', fontWeight: 600 }}>Weekends, Weekdays (evenings)</p>
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
            <p style={{ color: '#94a3b8', fontSize: '1rem' }}>12 verified reviews</p>
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
    </div>
  );
}
