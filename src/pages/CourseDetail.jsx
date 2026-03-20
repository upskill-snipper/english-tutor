import { useParams, Link, useNavigate } from 'react-router-dom';
import { BookOpen, Clock, Award, CheckCircle, Circle, ArrowRight, ChevronLeft, Play } from 'lucide-react';
import Navbar from '../components/Navbar';
import Lauren from '../components/Lauren';
import ProgressRing from '../components/ProgressRing';
import COURSES from '../data/courseData';
import { getCurrentUser, getUserProgress, enrollUser, isSubscribed } from '../utils/auth';

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = COURSES.find(c => c.id === id);
  const user = getCurrentUser();
  const progress = user ? getUserProgress(user.id, id) : null;

  if (!course) {
    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
        <Navbar />
        <div style={{ padding: '4rem', textAlign: 'center' }}>
          <h2>Course not found</h2>
          <Link to="/courses" className="btn-primary" style={{ textDecoration: 'none', marginTop: '1rem', display: 'inline-flex' }}>
            Browse courses
          </Link>
        </div>
      </div>
    );
  }

  const subscribed = isSubscribed(user?.id);
  const enrolled = user?.enrolledCourses?.includes(course.id) || subscribed;
  const completedCount = progress?.completedModules?.length || 0;
  const progressPct = course.moduleList.length > 0 ? Math.round((completedCount / course.moduleList.length) * 100) : 0;

  // Auto-enroll subscribed users when they visit a course detail page
  if (user && subscribed && !user.enrolledCourses?.includes(course.id)) {
    enrollUser(user.id, course.id);
  }

  function handleEnrol() {
    if (!user) {
      navigate('/login');
      return;
    }
    enrollUser(user.id, course.id);
    navigate(`/learn/${course.id}/module/${course.moduleList[0].id}`);
  }

  function handleContinue() {
    const nextModule = course.moduleList.find(m => !progress?.completedModules?.includes(m.id));
    const target = nextModule || course.moduleList[0];
    navigate(`/learn/${course.id}/module/${target.id}`);
  }

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        <Link to="/courses" className="btn-ghost" style={{ marginBottom: '1.5rem', display: 'inline-flex', textDecoration: 'none' }}>
          <ChevronLeft size={15} /> All Courses
        </Link>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          {/* Main info */}
          <div style={{ flex: '1 1 500px' }}>
            <span style={{
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em',
              color: '#34d399', background: 'rgba(52,211,153,0.1)',
              padding: '0.25rem 0.625rem', borderRadius: '4px',
              display: 'inline-block', marginBottom: '0.75rem',
            }}>
              {course.level}
            </span>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.75rem', lineHeight: 1.2 }}>
              {course.title}
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {course.description}
            </p>

            {subscribed && (
              <Lauren emotion="neutral" message="Ready to start? Work through each module in order for the best results." size="small" position="inline" />
            )}

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#64748b', fontSize: '0.85rem' }}>
                <BookOpen size={15} /> {course.moduleList.length} modules
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#64748b', fontSize: '0.85rem' }}>
                <Clock size={15} /> {course.duration}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#64748b', fontSize: '0.85rem' }}>
                <Award size={15} /> Certificate on completion
              </div>
            </div>

            {enrolled && progress ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                <ProgressRing progress={progressPct} size={56} />
                <div>
                  <div style={{ fontWeight: 700, color: '#f1f5f9' }}>{completedCount}/{course.moduleList.length} modules complete</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                    {progress.assessmentPassed ? 'Course completed!' : completedCount === course.moduleList.length ? 'Ready for assessment' : 'Keep going!'}
                  </div>
                </div>
              </div>
            ) : null}

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {enrolled ? (
                <>
                  <button onClick={handleContinue} className="btn-primary">
                    Continue Learning <ArrowRight size={16} />
                  </button>
                  {completedCount === course.moduleList.length && !progress?.assessmentPassed && (
                    <Link to={`/learn/${course.id}/assessment`} className="btn-secondary" style={{ textDecoration: 'none' }}>
                      Take Assessment
                    </Link>
                  )}
                </>
              ) : (
                <button onClick={handleEnrol} className="btn-primary" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                  {/* Stripe integration placeholder */}
                  Enrol Now — £{course.price} <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Module list */}
        <div style={{ marginTop: '3rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem' }}>Course Modules</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {course.moduleList.map((m, i) => {
              const done = progress?.completedModules?.includes(m.id);
              return (
                <div key={m.id} className="card" style={{
                  padding: '1rem 1.25rem',
                  display: 'flex', alignItems: 'center', gap: '1rem',
                }}>
                  <div style={{ color: done ? '#10b981' : '#1e2d4a', flexShrink: 0 }}>
                    {done ? <CheckCircle size={20} /> : <Circle size={20} />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#f1f5f9' }}>
                      {i + 1}. {m.title}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{m.duration}</div>
                  </div>
                  {enrolled ? (
                    <Link
                      to={`/learn/${course.id}/module/${m.id}`}
                      className="btn-ghost"
                      style={{ textDecoration: 'none', fontSize: '0.8rem' }}
                    >
                      {done ? 'Review' : 'Start'} <ArrowRight size={13} />
                    </Link>
                  ) : !subscribed && i === 0 ? (
                    <Link
                      to="/pricing"
                      className="btn-ghost"
                      style={{
                        textDecoration: 'none', fontSize: '0.8rem',
                        color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '0.375rem',
                      }}
                    >
                      Subscribe to Access <ArrowRight size={13} />
                    </Link>
                  ) : null}
                </div>
              );
            })}

            {/* Assessment row */}
            <div className="card" style={{
              padding: '1rem 1.25rem',
              display: 'flex', alignItems: 'center', gap: '1rem',
              borderColor: progress?.assessmentPassed ? 'rgba(16,185,129,0.3)' : undefined,
            }}>
              <Award size={20} color={progress?.assessmentPassed ? '#10b981' : '#1e2d4a'} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#f1f5f9' }}>Final Assessment</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>20 questions — 70% pass mark</div>
              </div>
              {progress?.assessmentPassed && (
                <span style={{ color: '#10b981', fontWeight: 600, fontSize: '0.8rem' }}>Passed — {progress.assessmentScore}%</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
