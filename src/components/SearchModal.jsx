import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen, Dumbbell, Library, BookMarked, X } from 'lucide-react';
import COURSES from '../data/courseData';
import flashcardDecks from '../data/flashcardData';
import practiceQuestions from '../data/practiceData';
import ANTHOLOGY_TEXTS from '../data/edexcel/texts';
import OCR_ANTHOLOGY_TEXTS from '../data/ocr/texts';
import WJEC_ANTHOLOGY_TEXTS from '../data/wjec/texts';

const ALL_TEXTS = [...ANTHOLOGY_TEXTS, ...OCR_ANTHOLOGY_TEXTS, ...WJEC_ANTHOLOGY_TEXTS];

const CATEGORY_CONFIG = {
  Courses: { icon: <BookOpen size={14} />, color: '#10b981' },
  Flashcards: { icon: <BookMarked size={14} />, color: '#8b5cf6' },
  Practice: { icon: <Dumbbell size={14} />, color: '#f59e0b' },
  Texts: { icon: <Library size={14} />, color: '#3b82f6' },
};

function searchAll(query) {
  if (!query || query.length < 2) return {};
  const q = query.toLowerCase();
  const results = { Courses: [], Flashcards: [], Practice: [], Texts: [] };

  // Courses
  for (const course of COURSES) {
    const title = course.title || '';
    const desc = course.description || '';
    if (title.toLowerCase().includes(q) || desc.toLowerCase().includes(q)) {
      results.Courses.push({
        id: course.id,
        title: title,
        subtitle: course.subtitle || desc.slice(0, 80),
        path: `/course/${course.id}`,
      });
    }
    if (results.Courses.length >= 8) break;
  }

  // Flashcard decks
  for (const deck of flashcardDecks) {
    const title = deck.title || '';
    const desc = deck.description || '';
    if (title.toLowerCase().includes(q) || desc.toLowerCase().includes(q)) {
      results.Flashcards.push({
        id: deck.id,
        title: title,
        subtitle: desc || `${deck.cards?.length || 0} cards`,
        path: '/revision',
      });
    }
    if (results.Flashcards.length >= 8) break;
  }

  // Practice questions
  for (const pq of practiceQuestions) {
    const title = pq.questionType || '';
    const questionText = pq.question || '';
    if (title.toLowerCase().includes(q) || questionText.toLowerCase().includes(q)) {
      results.Practice.push({
        id: pq.id,
        title: `${pq.board} — ${title}`,
        subtitle: '',
        path: '/practice',
      });
    }
    if (results.Practice.length >= 8) break;
  }

  // Anthology texts
  for (const text of ALL_TEXTS) {
    const title = text.title || '';
    const author = text.author || '';
    if (title.toLowerCase().includes(q) || author.toLowerCase().includes(q)) {
      results.Texts.push({
        id: text.id,
        title: title,
        subtitle: author,
        path: '/texts',
      });
    }
    if (results.Texts.length >= 8) break;
  }

  // Remove empty categories
  for (const key of Object.keys(results)) {
    if (results[key].length === 0) delete results[key];
  }

  return results;
}

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({});
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef(null);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  // Flatten results for keyboard navigation
  const flatResults = Object.entries(results).flatMap(([, items]) => items);

  const doSearch = useCallback((q) => {
    setResults(searchAll(q));
    setActiveIndex(-1);
  }, []);

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => doSearch(val), 200);
  };

  const handleSelect = useCallback((item) => {
    onClose();
    setQuery('');
    setResults({});
    navigate(item.path);
  }, [navigate, onClose]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, flatResults.length - 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, -1));
    }
    if (e.key === 'Enter' && activeIndex >= 0 && flatResults[activeIndex]) {
      e.preventDefault();
      handleSelect(flatResults[activeIndex]);
    }
  };

  // Clean up debounce timer on unmount
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    let focusTimer;
    if (isOpen && inputRef.current) {
      focusTimer = setTimeout(() => inputRef.current?.focus(), 50);
    }
    if (!isOpen) {
      setQuery('');
      setResults({});
      setActiveIndex(-1);
    }
    return () => clearTimeout(focusTimer);
  }, [isOpen]);

  if (!isOpen) return null;

  let flatIndex = -1;
  const hasResults = Object.keys(results).length > 0;
  const hasQuery = query.trim().length >= 2;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '12vh',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '560px',
          background: '#141925',
          borderRadius: '14px',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
          overflow: 'hidden',
        }}
      >
        {/* Search input */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '0.875rem 1.25rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          <Search size={18} color="#64748b" />
          <input
            ref={inputRef}
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            aria-label="Search"
            placeholder="Search courses, flashcards, practice, texts..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#f1f5f9',
              fontSize: '0.95rem',
              fontFamily: 'inherit',
            }}
          />
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: 'none',
              borderRadius: '6px',
              padding: '2px 8px',
              color: '#64748b',
              fontSize: '0.75rem',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div style={{
          maxHeight: '400px',
          overflowY: 'auto',
          padding: hasQuery ? '0.5rem 0' : 0,
        }}>
          {hasQuery && !hasResults && (
            <div style={{
              padding: '2rem 1.25rem',
              textAlign: 'center',
              color: '#64748b',
              fontSize: '0.9rem',
            }}>
              No results found for &quot;{query}&quot;
            </div>
          )}

          {Object.entries(results).map(([category, items]) => {
            const config = CATEGORY_CONFIG[category];
            return (
              <div key={category}>
                <div style={{
                  padding: '0.5rem 1.25rem 0.25rem',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: config?.color || '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                }}>
                  {config?.icon} {category}
                </div>
                {items.map((item) => {
                  flatIndex++;
                  const isActive = flatIndex === activeIndex;
                  const idx = flatIndex; // capture for click
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setActiveIndex(idx)}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        padding: '0.5rem 1.25rem',
                        background: isActive ? 'rgba(255,255,255,0.06)' : 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontFamily: 'inherit',
                        transition: 'background 0.15s',
                      }}
                    >
                      <span style={{
                        color: '#f1f5f9',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                      }}>
                        {item.title}
                      </span>
                      {item.subtitle && (
                        <span style={{
                          color: '#64748b',
                          fontSize: '0.75rem',
                          marginTop: '1px',
                        }}>
                          {item.subtitle.length > 80 ? item.subtitle.slice(0, 80) + '...' : item.subtitle}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Footer hint */}
        {!hasQuery && (
          <div style={{
            padding: '1rem 1.25rem',
            color: '#475569',
            fontSize: '0.8rem',
            textAlign: 'center',
          }}>
            Start typing to search across all content
          </div>
        )}
      </div>
    </div>
  );
}
