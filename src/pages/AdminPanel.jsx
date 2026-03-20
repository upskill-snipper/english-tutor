import React, { useState, useMemo } from 'react';
import { Users, BookOpen, Award, Trash2, Shield, Layers, FileText, CreditCard, ChevronDown, ChevronUp, Eye, BarChart3, Library } from 'lucide-react';
import Navbar from '../components/Navbar';
import COURSES from '../data/courseData';
import flashcardDecks from '../data/flashcardData';
import practiceQuestions from '../data/practiceData';
import ANTHOLOGY_TEXTS from '../data/edexcel/texts/index';
import { getUsers, saveUsers, getProgress, getCurrentUser } from '../utils/auth';

const OCR_TEXT_COUNT = 11;
const WJEC_TEXT_COUNT = 11;

const cardStyle = {
  background: 'linear-gradient(135deg, #1e293b 0%, #1a2332 100%)',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: '12px',
};

const sectionTitle = {
  fontSize: '1.25rem',
  fontWeight: 700,
  marginBottom: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
};

const selectStyle = {
  background: '#0f172a',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '8px',
  color: '#f1f5f9',
  padding: '0.5rem 0.75rem',
  fontSize: '0.85rem',
  width: '100%',
  maxWidth: '400px',
  outline: 'none',
};

export default function AdminPanel() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [selectedDeckId, setSelectedDeckId] = useState('');
  const [expandedUser, setExpandedUser] = useState(null);

  const admin = getCurrentUser();
  const users = getUsers();
  const progress = getProgress();
  const students = users.filter(u => u.role === 'student');

  // Content stats
  const totalCourses = COURSES.length;
  const totalDecks = flashcardDecks.length;
  const totalPractice = practiceQuestions.length;
  const totalEdexcelTexts = ANTHOLOGY_TEXTS.length;
  const totalOcrTexts = OCR_TEXT_COUNT;
  const totalWjecTexts = WJEC_TEXT_COUNT;
  const totalTexts = totalEdexcelTexts + totalOcrTexts + totalWjecTexts;

  // Board breakdowns
  const boardBreakdown = useMemo(() => {
    const boards = {};
    COURSES.forEach(c => {
      const b = c.board || 'AQA';
      if (!boards[b]) boards[b] = { courses: 0, flashcards: 0 };
      boards[b].courses++;
    });
    flashcardDecks.forEach(d => {
      const b = d.board || 'All';
      if (!boards[b]) boards[b] = { courses: 0, flashcards: 0 };
      boards[b].flashcards++;
    });
    return boards;
  }, []);

  // Student stats
  const totalEnrolments = students.reduce((acc, u) => acc + (u.enrolledCourses?.length || 0), 0);
  const totalCerts = students.reduce((acc, u) => acc + (u.certificates?.length || 0), 0);

  // Content preview
  const selectedCourse = COURSES.find(c => c.id === selectedCourseId);
  const selectedDeck = flashcardDecks.find(d => d.id === selectedDeckId);

  function deleteUser(userId) {
    if (userId === admin?.id) return;
    const updated = users.filter(u => u.id !== userId);
    saveUsers(updated);
    setRefreshKey(k => k + 1);
  }

  function getUserAssessmentScores(userId) {
    const userProgress = progress[userId];
    if (!userProgress) return [];
    const scores = [];
    Object.entries(userProgress).forEach(([courseId, courseProgress]) => {
      if (courseProgress?.assessmentScores) {
        Object.entries(courseProgress.assessmentScores).forEach(([moduleId, score]) => {
          const course = COURSES.find(c => c.id === courseId);
          scores.push({
            courseTitle: course?.title || courseId,
            moduleId,
            score,
          });
        });
      }
    });
    return scores;
  }

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }} key={refreshKey}>
      <Navbar />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          <Shield size={24} color="#10b981" />
          <h1 style={{ fontSize: '1.75rem', fontWeight: 900 }}>Admin Panel</h1>
        </div>

        {/* ───────── Content Stats Dashboard ───────── */}
        <div style={{ ...sectionTitle, marginBottom: '1rem' }}>
          <BarChart3 size={20} color="#10b981" />
          <span>Content Stats Dashboard</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          {[
            { label: 'Total Courses', value: totalCourses, icon: BookOpen, color: '#10b981' },
            { label: 'Flashcard Decks', value: totalDecks, icon: CreditCard, color: '#34d399' },
            { label: 'Practice Questions', value: totalPractice, icon: FileText, color: '#06b6d4' },
            { label: 'Anthology Texts', value: totalTexts, icon: Library, color: '#8b5cf6' },
            { label: 'Total Students', value: students.length, icon: Users, color: '#f59e0b' },
            { label: 'Certificates Issued', value: totalCerts, icon: Award, color: '#ec4899' },
          ].map((s, i) => (
            <div key={i} style={{ ...cardStyle, padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: `${s.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <s.icon size={18} color={s.color} />
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{s.value}</div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Board Breakdown */}
        <div style={{ ...cardStyle, padding: '1.25rem', marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.75rem', color: '#94a3b8' }}>Breakdown by Exam Board</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem' }}>
            {Object.entries(boardBreakdown).sort((a, b) => a[0].localeCompare(b[0])).map(([board, data]) => (
              <div key={board} style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '8px',
                padding: '0.75rem 1rem',
                border: '1px solid rgba(255,255,255,0.04)',
              }}>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#10b981', marginBottom: '0.25rem' }}>{board}</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                  {data.courses} course{data.courses !== 1 ? 's' : ''} &middot; {data.flashcards} deck{data.flashcards !== 1 ? 's' : ''}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: '#64748b' }}>
            Anthology texts: Edexcel {totalEdexcelTexts} &middot; OCR {totalOcrTexts} &middot; WJEC {totalWjecTexts}
          </div>
        </div>

        {/* ───────── User Management Table ───────── */}
        <div style={sectionTitle}>
          <Users size={20} color="#10b981" />
          <span>User Management</span>
        </div>

        <div style={{ overflowX: 'auto', marginBottom: '3rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #1e2d4a' }}>
                {['Name', 'Email', 'Board', 'Enrolled', 'Completed', 'Certs', 'Joined', ''].map((h, i) => (
                  <th key={i} style={{ padding: '0.75rem', textAlign: 'left', color: '#64748b', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.length === 0 && (
                <tr>
                  <td colSpan={8} style={{ padding: '2rem', textAlign: 'center', color: '#475569' }}>No students registered yet.</td>
                </tr>
              )}
              {students.map(u => {
                const scores = getUserAssessmentScores(u.id);
                const isExpanded = expandedUser === u.id;
                return (
                  <React.Fragment key={u.id}>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', cursor: 'pointer' }}
                      onClick={() => setExpandedUser(isExpanded ? null : u.id)}>
                      <td style={{ padding: '0.75rem', fontWeight: 600 }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          {isExpanded ? <ChevronUp size={14} color="#64748b" /> : <ChevronDown size={14} color="#64748b" />}
                          {u.name}
                        </span>
                      </td>
                      <td style={{ padding: '0.75rem', color: '#94a3b8' }}>{u.email}</td>
                      <td style={{ padding: '0.75rem' }}>
                        <span style={{
                          fontSize: '0.7rem', fontWeight: 600, color: '#10b981',
                          background: 'rgba(16,185,129,0.1)', padding: '0.15rem 0.5rem', borderRadius: '4px',
                        }}>{u.examBoard || 'N/A'}</span>
                      </td>
                      <td style={{ padding: '0.75rem' }}>{u.enrolledCourses?.length || 0}</td>
                      <td style={{ padding: '0.75rem' }}>{u.completedCourses?.length || 0}</td>
                      <td style={{ padding: '0.75rem' }}>{u.certificates?.length || 0}</td>
                      <td style={{ padding: '0.75rem', color: '#64748b' }}>{u.createdAt ? new Date(u.createdAt).toLocaleDateString('en-GB') : '—'}</td>
                      <td style={{ padding: '0.75rem' }}>
                        <button onClick={(e) => { e.stopPropagation(); deleteUser(u.id); }}
                          aria-label={`Delete user ${u.name}`}
                          style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '6px', padding: '0.375rem', cursor: 'pointer', color: '#ef4444', display: 'flex' }}>
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                    {isExpanded && (
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        <td colSpan={8} style={{ padding: '0.75rem 0.75rem 1.25rem 2.5rem' }}>
                          <div style={{ ...cardStyle, padding: '1rem' }}>
                            <div style={{ fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem', color: '#94a3b8' }}>
                              <Eye size={14} style={{ verticalAlign: 'middle', marginRight: '0.35rem' }} />
                              User Progress
                            </div>
                            {u.enrolledCourses?.length > 0 ? (
                              <div style={{ marginBottom: '0.75rem' }}>
                                <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.35rem' }}>Enrolled Courses:</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                                  {u.enrolledCourses.map(cid => {
                                    const course = COURSES.find(c => c.id === cid);
                                    const isCompleted = u.completedCourses?.includes(cid);
                                    return (
                                      <span key={cid} style={{
                                        fontSize: '0.7rem', padding: '0.2rem 0.5rem', borderRadius: '4px',
                                        background: isCompleted ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.05)',
                                        color: isCompleted ? '#34d399' : '#94a3b8',
                                        border: `1px solid ${isCompleted ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.06)'}`,
                                      }}>
                                        {course?.title || cid} {isCompleted && '✓'}
                                      </span>
                                    );
                                  })}
                                </div>
                              </div>
                            ) : (
                              <div style={{ fontSize: '0.75rem', color: '#475569', marginBottom: '0.5rem' }}>No courses enrolled.</div>
                            )}
                            {scores.length > 0 && (
                              <div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.35rem' }}>Assessment Scores:</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                                  {scores.map((s, i) => (
                                    <span key={`${s.courseTitle}-${s.moduleId}`} style={{
                                      fontSize: '0.7rem', padding: '0.2rem 0.5rem', borderRadius: '4px',
                                      background: 'rgba(6,182,212,0.1)', color: '#06b6d4',
                                      border: '1px solid rgba(6,182,212,0.15)',
                                    }}>
                                      {s.courseTitle}: {typeof s.score === 'number' ? `${s.score}%` : s.score}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* ───────── Content Preview ───────── */}
        <div style={sectionTitle}>
          <Layers size={20} color="#10b981" />
          <span>Content Preview</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {/* Course Preview */}
          <div style={{ ...cardStyle, padding: '1.25rem' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.75rem', color: '#94a3b8' }}>Course Preview</div>
            <select
              value={selectedCourseId}
              onChange={e => setSelectedCourseId(e.target.value)}
              style={selectStyle}
            >
              <option value="">Select a course...</option>
              {COURSES.map(c => (
                <option key={c.id} value={c.id}>{c.title} {c.board ? `(${c.board})` : ''}</option>
              ))}
            </select>
            {selectedCourse && (
              <div style={{ marginTop: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{selectedCourse.title}</span>
                  {selectedCourse.tier && (
                    <span style={{ fontSize: '0.65rem', color: '#34d399', background: 'rgba(52,211,153,0.1)', padding: '0.15rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>{selectedCourse.tier}</span>
                  )}
                </div>
                {selectedCourse.description && (
                  <div style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '0.75rem' }}>{selectedCourse.description}</div>
                )}
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.5rem' }}>
                  {selectedCourse.moduleList?.length || 0} modules {selectedCourse.board ? ` · ${selectedCourse.board}` : ''}
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  {selectedCourse.moduleList?.map((mod, i) => (
                    <div key={i} style={{
                      padding: '0.4rem 0.6rem', fontSize: '0.78rem',
                      borderLeft: '2px solid #10b981',
                      marginBottom: '0.35rem',
                      background: 'rgba(255,255,255,0.02)',
                      borderRadius: '0 4px 4px 0',
                      color: '#cbd5e1',
                    }}>
                      {typeof mod === 'string' ? mod : (mod.title || mod.name || `Module ${i + 1}`)}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Flashcard Deck Preview */}
          <div style={{ ...cardStyle, padding: '1.25rem' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.75rem', color: '#94a3b8' }}>Flashcard Deck Preview</div>
            <select
              value={selectedDeckId}
              onChange={e => setSelectedDeckId(e.target.value)}
              style={selectStyle}
            >
              <option value="">Select a deck...</option>
              {flashcardDecks.map(d => (
                <option key={d.id} value={d.id}>{d.title} {d.board ? `(${d.board})` : ''}</option>
              ))}
            </select>
            {selectedDeck && (
              <div style={{ marginTop: '1rem' }}>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.25rem' }}>{selectedDeck.title}</div>
                {selectedDeck.description && (
                  <div style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '0.5rem' }}>{selectedDeck.description}</div>
                )}
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.75rem' }}>
                  {selectedDeck.cards?.length || 0} cards {selectedDeck.board ? ` · ${selectedDeck.board}` : ''}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.35rem' }}>First 3 cards:</div>
                {selectedDeck.cards?.slice(0, 3).map((card, i) => (
                  <div key={i} style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '8px',
                    padding: '0.6rem 0.75rem',
                    marginBottom: '0.5rem',
                  }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#10b981', marginBottom: '0.25rem' }}>
                      {card.front}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8', lineHeight: 1.4, maxHeight: '3rem', overflow: 'hidden' }}>
                      {card.back?.substring(0, 150)}{card.back?.length > 150 ? '...' : ''}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ───────── Course Statistics ───────── */}
        <div style={sectionTitle}>
          <BookOpen size={20} color="#10b981" />
          <span>Course Statistics</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {COURSES.map(course => {
            const enrolledStudents = students.filter(u => u.enrolledCourses?.includes(course.id));
            const completedStudents = students.filter(u => u.completedCourses?.includes(course.id));
            return (
              <div key={course.id} style={{ ...cardStyle, padding: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.3 }}>{course.title}</h3>
                  <span style={{ fontSize: '0.65rem', color: '#34d399', background: 'rgba(52,211,153,0.1)', padding: '0.15rem 0.5rem', borderRadius: '4px', fontWeight: 700, whiteSpace: 'nowrap', marginLeft: '0.5rem' }}>{course.tier || course.board || ''}</span>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem', color: '#94a3b8' }}>
                  <span>{enrolledStudents.length} enrolled</span>
                  <span>{completedStudents.length} completed</span>
                  <span>{course.moduleList?.length || 0} modules</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
