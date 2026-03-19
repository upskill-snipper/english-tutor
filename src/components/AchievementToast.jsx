import { useState, useEffect, useCallback } from 'react';

/**
 * AchievementToast — slides in from bottom-right when an achievement is unlocked.
 *
 * Usage:
 *   <AchievementToast achievements={newlyUnlockedArray} />
 *
 * Each item in the array should have { id, name, description, icon }.
 * The component queues them and shows one at a time, each for 4 seconds.
 */

export default function AchievementToast({ achievements = [] }) {
  const [queue, setQueue] = useState([]);
  const [current, setCurrent] = useState(null);
  const [visible, setVisible] = useState(false);

  // Push new achievements into the queue
  useEffect(() => {
    if (achievements.length > 0) {
      setQueue(prev => [...prev, ...achievements]);
    }
  }, [achievements]);

  // Dequeue next item
  const showNext = useCallback(() => {
    setQueue(prev => {
      if (prev.length === 0) return prev;
      const [next, ...rest] = prev;
      setCurrent(next);
      setVisible(true);
      return rest;
    });
  }, []);

  // When queue changes and nothing is showing, show next
  useEffect(() => {
    if (!current && queue.length > 0) {
      showNext();
    }
  }, [queue, current, showNext]);

  // Auto-dismiss after 4 seconds
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [visible, current]);

  // After fade-out, clear current so the next one can show
  useEffect(() => {
    if (!visible && current) {
      const timer = setTimeout(() => {
        setCurrent(null);
      }, 500); // match the fade-out transition duration
      return () => clearTimeout(timer);
    }
  }, [visible, current]);

  if (!current) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, #1c1917, #292524)',
          border: '1.5px solid rgba(245, 158, 11, 0.45)',
          borderRadius: '16px',
          padding: '1rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.875rem',
          minWidth: '300px',
          maxWidth: '400px',
          boxShadow: '0 8px 32px rgba(245, 158, 11, 0.18), 0 2px 8px rgba(0,0,0,0.5)',
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease',
          pointerEvents: 'auto',
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            flexShrink: 0,
            boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)',
          }}
        >
          {current.icon}
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#f59e0b',
              marginBottom: '0.15rem',
            }}
          >
            Achievement Unlocked!
          </div>
          <div
            style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: '#fef3c7',
              lineHeight: 1.3,
            }}
          >
            {current.name}
          </div>
          <div
            style={{
              fontSize: '0.8rem',
              color: '#a8a29e',
              lineHeight: 1.4,
              marginTop: '0.1rem',
            }}
          >
            {current.description}
          </div>
        </div>
      </div>
    </div>
  );
}
