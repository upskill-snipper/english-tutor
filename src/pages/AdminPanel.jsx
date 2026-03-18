import { useState } from 'react';
import { Users, BookOpen, Award, Trash2, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import COURSES from '../data/courseData';
import { getUsers, saveUsers, getProgress, getCurrentUser } from '../utils/auth';

export default function AdminPanel() {
  const [refreshKey, setRefreshKey] = useState(0);
  const admin = getCurrentUser();
  const users = getUsers();
  const progress = getProgress();
  const students = users.filter(u => u.role === 'student');

  function deleteUser(userId) {
    if (userId === admin?.id) return;
    const updated = users.filter(u => u.id !== userId);
    saveUsers(updated);
    setRefreshKey(k => k + 1);
  }

  const totalEnrolments = students.reduce((acc, u) => acc + (u.enrolledCourses?.length || 0), 0);
  const totalCerts = students.reduce((acc, u) => acc + (u.certificates?.length || 0), 0);

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }} key={refreshKey}>
      <Navbar />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          <Shield size={24} color="#10b981" />
          <h1 style={{ fontSize: '1.75rem', fontWeight: 900 }}>Admin Panel</h1>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
          {[
            { label: 'Total Students', value: students.length, icon: Users, color: '#10b981' },
            { label: 'Active Courses', value: COURSES.length, icon: BookOpen, color: '#34d399' },
            { label: 'Total Enrolments', value: totalEnrolments, icon: BookOpen, color: '#06b6d4' },
            { label: 'Certificates Issued', value: totalCerts, icon: Award, color: '#f59e0b' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: `${s.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <s.icon size={18} color={s.color} />
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{s.value}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Student list */}
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Students</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #1e2d4a' }}>
                {['Name', 'Email', 'Enrolled', 'Completed', 'Certs', 'Joined', ''].map((h, i) => (
                  <th key={i} style={{ padding: '0.75rem', textAlign: 'left', color: '#64748b', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.map(u => (
                <tr key={u.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <td style={{ padding: '0.75rem', fontWeight: 600 }}>{u.name}</td>
                  <td style={{ padding: '0.75rem', color: '#94a3b8' }}>{u.email}</td>
                  <td style={{ padding: '0.75rem' }}>{u.enrolledCourses?.length || 0}</td>
                  <td style={{ padding: '0.75rem' }}>{u.completedCourses?.length || 0}</td>
                  <td style={{ padding: '0.75rem' }}>{u.certificates?.length || 0}</td>
                  <td style={{ padding: '0.75rem', color: '#64748b' }}>{new Date(u.createdAt).toLocaleDateString('en-GB')}</td>
                  <td style={{ padding: '0.75rem' }}>
                    <button onClick={() => deleteUser(u.id)}
                      style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '6px', padding: '0.375rem', cursor: 'pointer', color: '#ef4444', display: 'flex' }}>
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Course stats */}
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '3rem', marginBottom: '1rem' }}>Course Statistics</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {COURSES.map(course => {
            const enrolledStudents = students.filter(u => u.enrolledCourses?.includes(course.id));
            const completedStudents = students.filter(u => u.completedCourses?.includes(course.id));
            return (
              <div key={course.id} className="card" style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.3 }}>{course.title}</h3>
                  <span style={{ fontSize: '0.65rem', color: '#34d399', background: 'rgba(52,211,153,0.1)', padding: '0.15rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>{course.tier}</span>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem', color: '#94a3b8' }}>
                  <span>{enrolledStudents.length} enrolled</span>
                  <span>{completedStudents.length} completed</span>
                  <span>{course.moduleList.length} modules</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
