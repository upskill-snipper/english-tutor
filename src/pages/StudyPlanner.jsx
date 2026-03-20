import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CalendarDays, Clock, BookOpen, Trash2, Plus, Sparkles, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import { getCurrentUser, getProgress } from '../utils/auth';
import COURSES from '../data/courseData';

const STORAGE_KEY = 'learnright_study_plan';
const EXAM_DATE_KEY = 'learnright_exam_date';
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const TIME_SLOTS = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

function loadSchedule() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch { return {}; }
}

function saveSchedule(schedule) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(schedule));
}

function loadExamDate() {
  return localStorage.getItem(EXAM_DATE_KEY) || '';
}

function saveExamDate(date) {
  localStorage.setItem(EXAM_DATE_KEY, date);
}

function getDaysUntil(dateStr) {
  if (!dateStr) return null;
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const exam = new Date(dateStr);
  const diff = Math.ceil((exam - now) / (1000 * 60 * 60 * 24));
  return diff;
}

function getWeakAreas(userId) {
  const progress = getProgress();
  const userProgress = progress[userId] || {};
  const weakCourses = [];

  for (const courseId of Object.keys(userProgress)) {
    const cp = userProgress[courseId];
    const scores = Object.values(cp.quizScores || {});
    if (scores.length > 0) {
      const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
      if (avg < 70) {
        weakCourses.push({ courseId, avgScore: Math.round(avg) });
      }
    }
  }
  return weakCourses.sort((a, b) => a.avgScore - b.avgScore);
}

export default function StudyPlanner() {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [examDate, setExamDate] = useState(loadExamDate);
  const [schedule, setSchedule] = useState(loadSchedule);
  const [addingSlot, setAddingSlot] = useState(null); // { day, time }
  const [selectedCourse, setSelectedCourse] = useState('');
  const [customTopic, setCustomTopic] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('60');

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  const daysUntil = getDaysUntil(examDate);

  const enrolledCourses = useMemo(() => {
    if (!user) return [];
    return COURSES.filter(c => user.enrolledCourses?.includes(c.id));
  }, [user]);

  const weakAreas = useMemo(() => {
    if (!user) return [];
    return getWeakAreas(user.id);
  }, [user]);

  const suggestedPlan = useMemo(() => {
    if (!user) return [];
    const suggestions = [];
    const allCourses = enrolledCourses.length > 0 ? enrolledCourses : COURSES.slice(0, 3);
    const progress = getProgress();
    const userProgress = progress[user.id] || {};

    // Prioritize weak areas
    for (const weak of weakAreas) {
      const course = COURSES.find(c => c.id === weak.courseId);
      if (course) {
        const cp = userProgress[weak.courseId] || {};
        const incompleteMods = (course.moduleList || []).filter(m => !(cp.completedModules || []).includes(m.id));
        if (incompleteMods.length > 0) {
          suggestions.push({
            topic: `Review: ${course.title} - ${incompleteMods[0].title}`,
            course,
            time: '45 min',
            reason: `Score ${weak.avgScore}% — needs revision`,
            moduleId: incompleteMods[0].id,
          });
        }
      }
    }

    // Add enrolled courses with incomplete modules
    for (const course of allCourses) {
      if (suggestions.length >= 7) break;
      if (suggestions.find(s => s.course?.id === course.id)) continue;
      const cp = userProgress[course.id] || {};
      const incompleteMods = (course.moduleList || []).filter(m => !(cp.completedModules || []).includes(m.id));
      if (incompleteMods.length > 0) {
        suggestions.push({
          topic: `${course.title} - ${incompleteMods[0].title}`,
          course,
          time: incompleteMods[0].duration || '30 min',
          reason: `${incompleteMods.length} module${incompleteMods.length > 1 ? 's' : ''} remaining`,
          moduleId: incompleteMods[0].id,
        });
      }
    }

    // Fill remaining days with general study
    const generalTopics = ['Practice past paper questions', 'Review flashcards and key terminology', 'Timed writing practice'];
    while (suggestions.length < 7) {
      const idx = suggestions.length - Math.max(0, suggestions.length - 4);
      suggestions.push({
        topic: generalTopics[idx % generalTopics.length],
        course: null,
        time: '30 min',
        reason: 'General revision',
        moduleId: null,
      });
    }

    return suggestions.slice(0, 7);
  }, [user, enrolledCourses, weakAreas]);

  if (!user) return null;

  function handleExamDateChange(e) {
    const val = e.target.value;
    setExamDate(val);
    saveExamDate(val);
  }

  function handleAddSlot(day, time) {
    setAddingSlot({ day, time });
    setSelectedCourse('');
    setCustomTopic('');
    setEstimatedTime('60');
  }

  function handleSaveSlot() {
    if (!addingSlot) return;
    const topic = selectedCourse
      ? COURSES.find(c => c.id === selectedCourse)?.title || selectedCourse
      : customTopic.trim();
    if (!topic) return;

    const key = `${addingSlot.day}-${addingSlot.time}`;
    const newSchedule = {
      ...schedule,
      [key]: {
        topic,
        courseId: selectedCourse || null,
        estimatedMinutes: parseInt(estimatedTime) || 60,
      },
    };
    setSchedule(newSchedule);
    saveSchedule(newSchedule);
    setAddingSlot(null);
  }

  function handleRemoveSlot(key) {
    const newSchedule = { ...schedule };
    delete newSchedule[key];
    setSchedule(newSchedule);
    saveSchedule(newSchedule);
  }

  function handleApplySuggested() {
    const newSchedule = { ...schedule };
    suggestedPlan.forEach((item, i) => {
      const day = DAYS[i % 7];
      const time = '16:00';
      const key = `${day}-${time}`;
      if (!newSchedule[key]) {
        newSchedule[key] = {
          topic: item.topic,
          courseId: item.course?.id || null,
          estimatedMinutes: parseInt(item.time) || 30,
        };
      }
    });
    setSchedule(newSchedule);
    saveSchedule(newSchedule);
  }

  const cardStyle = {
    background: 'rgba(30, 41, 59, 0.5)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '16px',
    padding: '1.5rem',
  };

  const inputStyle = {
    background: 'rgba(15, 23, 42, 0.8)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '10px',
    padding: '0.625rem 0.875rem',
    color: '#f1f5f9',
    fontSize: '0.875rem',
    width: '100%',
    outline: 'none',
  };

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <CalendarDays size={28} color="#10b981" />
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: 0 }}>Study Planner</h1>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: 0 }}>
            Organise your revision schedule, track your exam countdown, and get personalised study suggestions based on your progress.
          </p>
        </div>

        {/* Exam Date & Countdown */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
          <div style={cardStyle}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CalendarDays size={16} color="#10b981" /> Exam Date
            </h3>
            <input
              type="date"
              aria-label="Exam date"
              value={examDate}
              onChange={handleExamDateChange}
              style={{ ...inputStyle, cursor: 'pointer' }}
            />
          </div>

          <div style={{
            ...cardStyle,
            background: daysUntil !== null && daysUntil <= 7
              ? 'rgba(239, 68, 68, 0.1)'
              : daysUntil !== null && daysUntil <= 30
                ? 'rgba(245, 158, 11, 0.1)'
                : 'rgba(16, 185, 129, 0.08)',
            border: daysUntil !== null && daysUntil <= 7
              ? '1px solid rgba(239, 68, 68, 0.3)'
              : daysUntil !== null && daysUntil <= 30
                ? '1px solid rgba(245, 158, 11, 0.3)'
                : '1px solid rgba(16, 185, 129, 0.2)',
          }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={16} color={daysUntil !== null && daysUntil <= 7 ? '#ef4444' : daysUntil !== null && daysUntil <= 30 ? '#f59e0b' : '#10b981'} />
              Countdown
            </h3>
            {daysUntil !== null ? (
              <div>
                <span style={{
                  fontSize: '2.25rem',
                  fontWeight: 800,
                  color: daysUntil <= 7 ? '#ef4444' : daysUntil <= 30 ? '#f59e0b' : '#10b981',
                }}>
                    {daysUntil < 0 ? 'Passed' : daysUntil === 0 ? 'Today!' : daysUntil}
                </span>
                {daysUntil > 0 && <span style={{ color: '#94a3b8', marginLeft: '0.5rem', fontSize: '0.9rem' }}>days remaining</span>}
                {daysUntil < 0 && <span style={{ color: '#94a3b8', marginLeft: '0.5rem', fontSize: '0.9rem' }}>Exam date has passed</span>}
              </div>
            ) : (
              <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0 }}>Set your exam date to start the countdown</p>
            )}
          </div>

          <div style={cardStyle}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={16} color="#10b981" /> Study Stats
            </h3>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#10b981' }}>{Object.keys(schedule).length}</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Scheduled sessions</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#10b981' }}>{enrolledCourses.length}</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Enrolled courses</div>
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Study Plan */}
        <div style={{ ...cardStyle, marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={18} color="#f59e0b" /> Suggested Weekly Plan
            </h2>
            <button
              onClick={handleApplySuggested}
              style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '10px',
                padding: '0.5rem 1rem',
                color: '#10b981',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Apply to Schedule
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '0.75rem' }}>
            {suggestedPlan.map((item, i) => (
              <div key={i} style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '12px',
                padding: '1rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#10b981',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '6px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                  }}>
                    {DAYS[i % 7]}
                  </span>
                  <span style={{ color: '#64748b', fontSize: '0.75rem' }}>{item.time}</span>
                </div>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, margin: '0 0 0.375rem 0', lineHeight: 1.4 }}>{item.topic}</p>
                <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0 }}>{item.reason}</p>
                {item.course && item.moduleId && (
                  <Link
                    to={`/learn/${item.course.id}/module/${item.moduleId}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      color: '#10b981',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      marginTop: '0.5rem',
                    }}
                  >
                    Go to course <ArrowRight size={12} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Schedule Grid */}
        <div style={{ ...cardStyle, overflow: 'auto' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CalendarDays size={18} color="#10b981" /> Weekly Schedule
          </h2>

          {Object.keys(schedule).length === 0 && (
            <div style={{
              background: 'rgba(16, 185, 129, 0.05)',
              border: '1px dashed rgba(16, 185, 129, 0.2)',
              borderRadius: '12px',
              padding: '1.25rem 1.5rem',
              marginBottom: '1rem',
              textAlign: 'center',
            }}>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0 }}>
                No study sessions scheduled yet. Click any <Plus size={12} style={{ verticalAlign: 'middle' }} /> slot below to add one, or apply the suggested plan above.
              </p>
            </div>
          )}

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '4px', minWidth: '700px' }}>
              <thead>
                <tr>
                  <th style={{ padding: '0.5rem', fontSize: '0.75rem', color: '#64748b', textAlign: 'left', width: '70px' }}>Time</th>
                  {DAYS.map(day => (
                    <th key={day} style={{ padding: '0.5rem', fontSize: '0.8rem', color: '#10b981', fontWeight: 700, textAlign: 'center' }}>
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TIME_SLOTS.map(time => (
                  <tr key={time}>
                    <td style={{ padding: '0.375rem 0.5rem', fontSize: '0.75rem', color: '#64748b', fontWeight: 500 }}>{time}</td>
                    {DAYS.map(day => {
                      const key = `${day}-${time}`;
                      const slot = schedule[key];
                      const isAdding = addingSlot?.day === day && addingSlot?.time === time;

                      if (isAdding) {
                        return (
                          <td key={day} style={{ padding: '0.25rem', verticalAlign: 'top' }}>
                            <div style={{
                              background: 'rgba(16, 185, 129, 0.08)',
                              border: '1px solid rgba(16, 185, 129, 0.3)',
                              borderRadius: '10px',
                              padding: '0.75rem',
                            }}>
                              <select
                                value={selectedCourse}
                                onChange={e => { setSelectedCourse(e.target.value); setCustomTopic(''); }}
                                style={{ ...inputStyle, marginBottom: '0.5rem', padding: '0.5rem' }}
                              >
                                <option value="">Select a course</option>
                                {COURSES.map(c => (
                                  <option key={c.id} value={c.id}>{c.title}</option>
                                ))}
                              </select>
                              <input
                                type="text"
                                aria-label="Custom topic"
                                placeholder="Or type custom topic"
                                value={customTopic}
                                onChange={e => { setCustomTopic(e.target.value); setSelectedCourse(''); }}
                                style={{ ...inputStyle, marginBottom: '0.5rem', padding: '0.5rem' }}
                              />
                              <select
                                value={estimatedTime}
                                onChange={e => setEstimatedTime(e.target.value)}
                                style={{ ...inputStyle, marginBottom: '0.5rem', padding: '0.5rem' }}
                              >
                                <option value="30">30 min</option>
                                <option value="45">45 min</option>
                                <option value="60">60 min</option>
                                <option value="90">90 min</option>
                                <option value="120">2 hours</option>
                              </select>
                              <div style={{ display: 'flex', gap: '0.375rem' }}>
                                <button
                                  onClick={handleSaveSlot}
                                  style={{
                                    flex: 1,
                                    background: '#10b981',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '0.4rem',
                                    color: 'white',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                  }}
                                >
                                  Save
                                </button>
                                <button
                                  onClick={() => setAddingSlot(null)}
                                  style={{
                                    flex: 1,
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '8px',
                                    padding: '0.4rem',
                                    color: '#94a3b8',
                                    fontSize: '0.75rem',
                                    cursor: 'pointer',
                                  }}
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </td>
                        );
                      }

                      if (slot) {
                        return (
                          <td key={day} style={{ padding: '0.25rem', verticalAlign: 'top' }}>
                            <div style={{
                              background: 'rgba(16, 185, 129, 0.08)',
                              border: '1px solid rgba(16, 185, 129, 0.15)',
                              borderRadius: '10px',
                              padding: '0.5rem 0.625rem',
                              position: 'relative',
                              minHeight: '48px',
                            }}>
                              <button
                                onClick={() => handleRemoveSlot(key)}
                                aria-label="Remove slot"
                                style={{
                                  position: 'absolute',
                                  top: '4px',
                                  right: '4px',
                                  background: 'none',
                                  border: 'none',
                                  color: '#64748b',
                                  cursor: 'pointer',
                                  padding: '2px',
                                  lineHeight: 0,
                                }}
                              >
                                <Trash2 size={12} />
                              </button>
                              <p style={{ fontSize: '0.75rem', fontWeight: 600, margin: '0 0 0.25rem 0', paddingRight: '1rem', lineHeight: 1.3 }}>
                                {slot.topic}
                              </p>
                              <span style={{ fontSize: '0.65rem', color: '#64748b' }}>
                                {slot.estimatedMinutes} min
                              </span>
                              {slot.courseId && (
                                <Link
                                  to={`/course/${slot.courseId}`}
                                  style={{ display: 'block', fontSize: '0.65rem', color: '#10b981', textDecoration: 'none', marginTop: '0.25rem' }}
                                >
                                  View course
                                </Link>
                              )}
                            </div>
                          </td>
                        );
                      }

                      return (
                        <td key={day} style={{ padding: '0.25rem', verticalAlign: 'top' }}>
                          <button
                            onClick={() => handleAddSlot(day, time)}
                            style={{
                              width: '100%',
                              minHeight: '48px',
                              background: 'rgba(15, 23, 42, 0.4)',
                              border: '1px dashed rgba(255,255,255,0.06)',
                              borderRadius: '10px',
                              color: '#334155',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'all 0.15s',
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)';
                              e.currentTarget.style.color = '#10b981';
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                              e.currentTarget.style.color = '#334155';
                            }}
                            aria-label={`Add study session for ${day} at ${time}`}
                          >
                            <Plus size={14} />
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
