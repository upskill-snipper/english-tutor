import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, Sparkles, X } from 'lucide-react';
import { setSubscription, getCurrentUser } from '../utils/auth';
import Lauren from './Lauren';

export default function PaywallModal({ onClose }) {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [subscribing, setSubscribing] = useState(null);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const handleSubscribe = (tier) => {
    setSubscribing(tier);
    const user = getCurrentUser();
    if (user) {
      setSubscription(user.id, tier);
    }
    setTimeout(() => {
      window.location.reload();
    }, 600);
  };

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      if (onClose) {
        onClose();
      } else {
        navigate('/games');
      }
    }, 300);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(145deg, #1e1e2e, #181825)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '40px',
          maxWidth: '720px',
          width: '90%',
          position: 'relative',
          transform: visible ? 'translateY(0)' : 'translateY(40px)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            padding: '8px',
            cursor: 'pointer',
            color: '#888',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#888';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
          }}
        >
          <X size={18} />
        </button>

        {/* Lauren avatar */}
        <Lauren
          emotion="encouraging"
          message="You're clearly enjoying learning! Subscribe to unlock everything — courses, games, flashcards, and more."
          size="medium"
          position="inline"
        />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
            }}
          >
            <Crown size={32} color="#fff" />
          </div>
          <h2
            style={{
              color: '#fff',
              fontSize: '24px',
              fontWeight: 700,
              margin: '0 0 8px',
            }}
          >
            You've used your 3 free games!
          </h2>
          <p style={{ color: '#a0a0b8', fontSize: '15px', margin: 0 }}>
            Subscribe to unlock courses, games, flashcards, and all study tools.
          </p>
        </div>

        {/* Subscription cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          {/* Monthly card */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 700, margin: '0 0 4px' }}>
              Monthly
            </h3>
            <p
              style={{
                color: '#8b5cf6',
                fontSize: '28px',
                fontWeight: 800,
                margin: '0 0 16px',
              }}
            >
              £12.50
              <span style={{ fontSize: '14px', fontWeight: 400, color: '#888' }}>/month</span>
            </p>
            <p
              style={{
                color: '#a0a0b8',
                fontSize: '13px',
                lineHeight: 1.6,
                margin: '0 0 20px',
                flex: 1,
              }}
            >
              Unlimited games, all courses, flashcards, practice questions, study planner,
              certificates. Cancel anytime.
            </p>
            <button
              onClick={() => handleSubscribe('monthly')}
              disabled={subscribing !== null}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '12px',
                border: 'none',
                background: subscribing === 'monthly' ? '#22c55e' : '#8b5cf6',
                color: '#fff',
                fontSize: '15px',
                fontWeight: 600,
                cursor: subscribing !== null ? 'default' : 'pointer',
                transition: 'all 0.2s',
                opacity: subscribing !== null && subscribing !== 'monthly' ? 0.5 : 1,
              }}
            >
              {subscribing === 'monthly' ? 'Subscribed!' : 'Subscribe'}
            </button>
          </div>

          {/* Pro card */}
          <div
            style={{
              background: 'linear-gradient(145deg, rgba(139, 92, 246, 0.12), rgba(236, 72, 153, 0.08))',
              border: '1px solid rgba(139, 92, 246, 0.25)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
                color: '#fff',
                fontSize: '11px',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Best Value
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 700, margin: 0 }}>Pro</h3>
              <Sparkles size={16} color="#f59e0b" />
            </div>
            <p
              style={{
                color: '#8b5cf6',
                fontSize: '28px',
                fontWeight: 800,
                margin: '0 0 16px',
              }}
            >
              £179
              <span style={{ fontSize: '14px', fontWeight: 400, color: '#888' }}> (Lifetime)</span>
            </p>
            <p
              style={{
                color: '#a0a0b8',
                fontSize: '13px',
                lineHeight: 1.6,
                margin: '0 0 20px',
                flex: 1,
              }}
            >
              Everything in Monthly + lifetime access, priority support, early access to new content.
              Best value — pay once, learn forever.
            </p>
            <button
              onClick={() => handleSubscribe('pro')}
              disabled={subscribing !== null}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '12px',
                border: 'none',
                background: subscribing === 'pro'
                  ? '#22c55e'
                  : 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                color: '#fff',
                fontSize: '15px',
                fontWeight: 600,
                cursor: subscribing !== null ? 'default' : 'pointer',
                transition: 'all 0.2s',
                opacity: subscribing !== null && subscribing !== 'pro' ? 0.5 : 1,
              }}
            >
              {subscribing === 'pro' ? 'Subscribed!' : 'Subscribe'}
            </button>
          </div>
        </div>

        {/* Maybe later */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#666',
              fontSize: '14px',
              cursor: 'pointer',
              padding: '8px 16px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#aaa')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
