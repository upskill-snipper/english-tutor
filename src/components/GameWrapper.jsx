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
    const userId = user?.id || null;

    const userSubscribed = userId ? isSubscribed(userId) : false;
    setSubscribed(userSubscribed);

    const canPlay = canPlayGame(userId);
    setAllowed(canPlay);

    // Session-based deduplication: only count one attempt per gameId per browser session
    const sessionKey = 'learnright_session_counted_' + gameId;
    const alreadyCounted = sessionStorage.getItem(sessionKey);

    if (canPlay && !recorded.current && !alreadyCounted) {
      recorded.current = true;
      sessionStorage.setItem(sessionKey, '1');
      recordGameAttempt(userId, gameId);
      setRemaining(getRemainingFreeAttempts(userId));
    } else {
      setRemaining(getRemainingFreeAttempts(userId));
    }
  }, [gameId]);

  // Loading state
  if (allowed === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Paywall
  if (!allowed) {
    return <PaywallModal onClose={() => {
      const user = getCurrentUser();
      const userId = user?.id || null;
      setAllowed(canPlayGame(userId));
      setSubscribed(userId ? isSubscribed(userId) : false);
      setRemaining(getRemainingFreeAttempts(userId));
    }} />;
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
