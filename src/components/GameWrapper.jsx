import { useState, useEffect, useRef } from 'react';
import { canPlayGame, recordGameAttempt, getRemainingFreeAttempts, isSubscribed, getCurrentUser } from '../utils/auth';
import PaywallModal from './PaywallModal';

export default function GameWrapper({ children, gameId }) {
  const [allowed, setAllowed] = useState(null); // null = loading, true/false
  const [remaining, setRemaining] = useState(null);
  const [subscribed, setSubscribed] = useState(false);
  const recorded = useRef(false);

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      setAllowed(false);
      setRemaining(0);
      return;
    }

    const userSubscribed = isSubscribed(user.id);
    setSubscribed(userSubscribed);

    const canPlay = canPlayGame(user.id);
    setAllowed(canPlay);

    if (canPlay && !recorded.current) {
      recorded.current = true;
      recordGameAttempt(user.id, gameId);
      // Recalculate remaining after recording
      setRemaining(getRemainingFreeAttempts(user.id));
    } else {
      setRemaining(getRemainingFreeAttempts(user.id));
    }
  }, [gameId]);

  // Loading state
  if (allowed === null) {
    return null;
  }

  // Paywall
  if (!allowed) {
    return <PaywallModal />;
  }

  return (
    <div style={{ position: 'relative' }}>
      {/* Remaining attempts badge — only show for free users */}
      {!subscribed && remaining !== null && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            right: '20px',
            zIndex: 1000,
            background: remaining <= 1
              ? 'linear-gradient(135deg, #ef4444, #dc2626)'
              : 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
            color: '#fff',
            fontSize: '13px',
            fontWeight: 600,
            padding: '8px 14px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            animation: 'fadeInBadge 0.4s ease',
          }}
        >
          {remaining === 0 ? 'Last free game!' : `${remaining} free game${remaining !== 1 ? 's' : ''} left`}
          <style>{`
            @keyframes fadeInBadge {
              from { opacity: 0; transform: translateY(-8px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      )}
      {children}
    </div>
  );
}
