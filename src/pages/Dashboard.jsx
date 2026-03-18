import { Link } from 'react-router-dom';
import { BookOpen, Award, Clock, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import ProgressRing from '../components/ProgressRing';
import COURSES from '../data/courseData';
import { getCurrentUser, getUserProgress, getPracticeProgress } from '../utils/auth';

export default function Dashboard() {
  const user = getCurrentUser();
  const practice = getPracticeProgress();

  if (!user) return null;

  const enrolled = (user.enrolledCourses || []).map(id => COURSES.find(c => c.id === id)).filter(Boolean);
  const completedCount = (user.completedCourses || []).length;
  const certs = user.certificates || [];

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '0.5rem' }}>
          Welcome back, {user.name.split(' ')[0]}
        </h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Keep up the great work. Here is your progress.</p>

        {/* Stats grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
          {[
            { label: 'Enrolled', value: enrolled.length, icon: BookOpen, color: '#10b981' },
            { label: 'Completed', value: completedCount, icon: CheckCircle, color: '#34d399' },
            { label: 'Certificates', value: certs.length, icon: Award, color: '#f59e0b' },
            { label: 'Practice Streak', value: `${practice.streak} day${practice.streak !== 1 ? 's' : ''}`, icon: TrendingUp, color: '#06b6d4' },
          ].map((stat, i) => (
            <div key={i} className="card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: `${stat.color}15`, border: `1px solid ${stat.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <stat.icon size={18} color={stat.color} />
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f1f5f9' }}>{stat.value}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* My courses */}
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem' }}>My Courses</h2>
        {enrolled.length === 0 ? (
          <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
            <p style={{ color: '#94a3b8', marginBottom: '1.25rem' }}>You have not enrolled in any courses yet.</p>
            <Link to="/courses" className="btn-primary" style={{ textDecoration: 'none' }}>
              Browse Courses <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
            {enrolled.map(course => {
              const prog = getUserProgress(user.id, course.id);
              const done = prog.completedModules.length;
              const total = course.moduleList.length;
              const pct = Math.round((done / total) * 100);
              const nextModule = course.moduleList.find(m => !prog.completedModules.includes(m.id));

              return (
                <div key={course.id} className="card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <span style={{
                        fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.05em',
                        color: '#34d399', background: 'rgba(52,211,153,0.1)',
                        padding: '0.2rem 0.5rem', borderRadius: '4px',
                      }}>{course.tier}</span>
                      <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#f1f5f9', marginTop: '0.5rem', lineHeight: 1.3 }}>
                        {course.title}
                      </h3>
                    </div>
                    <ProgressRing progress={pct} size={48} />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.75rem', color: '#64748b' }}>
                    <span>{done}/{total} modules</span>
                    <span>{pct}%</span>
                  </div>
                  <div className="progress-track" style={{ marginBottom: '1.25rem' }}>
                    <div className="progress-fill" style={{ width: `${pct}%` }} />
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {prog.assessmentPassed ? (
                      <>
                        <span style={{ color: '#10b981', fontWeight: 600, fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <CheckCircle size={14} /> Completed
                        </span>
                        {certs.find(c => c.courseId === course.id) && (
                          <Link to={`/certificate/${certs.find(c => c.courseId === course.id).id}`}
                            className="btn-ghost" style={{ textDecoration: 'none', fontSize: '0.8rem', marginLeft: 'auto' }}>
                            <Award size={14} /> Certificate
                          </Link>
                        )}
                      </>
                    ) : done === total ? (
                      <Link to={`/learn/${course.id}/assessment`} className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                        Take Assessment <ArrowRight size={14} />
                      </Link>
                    ) : nextModule ? (
                      <Link to={`/learn/${course.id}/module/${nextModule.id}`} className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                        Continue <ArrowRight size={14} />
                      </Link>
                    ) : (
                      <Link to={`/learn/${course.id}/module/${course.moduleList[0].id}`} className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                        Start <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Certificates */}
        {certs.length > 0 && (
          <>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem' }}>Certificates</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
              {certs.map(cert => {
                const course = COURSES.find(c => c.id === cert.courseId);
                const grade = cert.score >= 90 ? 'Distinction' : cert.score >= 80 ? 'Merit' : 'Pass';
                return (
                  <Link key={cert.id} to={`/certificate/${cert.id}`} style={{ textDecoration: 'none' }}>
                    <div className="card" style={{
                      padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem',
                      borderColor: 'rgba(16,185,129,0.25)',
                    }}>
                      <Award size={28} color="#10b981" />
                      <div>
                        <div style={{ fontWeight: 600, color: '#f1f5f9', fontSize: '0.9rem' }}>{course?.title}</div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                          {grade} ({cert.score}%) — {new Date(cert.issuedAt).toLocaleDateString('en-GB')}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
