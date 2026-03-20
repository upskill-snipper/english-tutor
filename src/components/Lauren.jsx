import { useState, useEffect, useRef } from 'react';

/**
 * Lauren — reusable avatar / tutor guide component.
 *
 * Usage:
 *   <Lauren emotion="happy" message="Great job!" />
 *   <Lauren position="floating" message="Need help?" onClose={() => {}} />
 */

const SIZES = {
  small: 60,
  medium: 100,
  large: 150,
};

const GLOW_COLORS = {
  neutral: 'rgba(16, 185, 129, 0.4)',
  happy: 'rgba(234, 179, 8, 0.4)',
  encouraging: 'rgba(59, 130, 246, 0.4)',
  thinking: 'rgba(168, 85, 247, 0.4)',
  concerned: 'rgba(245, 158, 11, 0.4)',
  celebrating: 'rgba(236, 72, 153, 0.4)',
};

const GLOW_SHADOW = {
  neutral: '0 0 12px rgba(16, 185, 129, 0.35), 0 0 24px rgba(16, 185, 129, 0.15)',
  happy: '0 0 12px rgba(234, 179, 8, 0.35), 0 0 24px rgba(234, 179, 8, 0.15)',
  encouraging: '0 0 12px rgba(59, 130, 246, 0.35), 0 0 24px rgba(59, 130, 246, 0.15)',
  thinking: '0 0 12px rgba(168, 85, 247, 0.35), 0 0 24px rgba(168, 85, 247, 0.15)',
  concerned: '0 0 12px rgba(245, 158, 11, 0.35), 0 0 24px rgba(245, 158, 11, 0.15)',
  celebrating:
    '0 0 12px rgba(236, 72, 153, 0.3), 0 0 24px rgba(168, 85, 247, 0.2), 0 0 36px rgba(234, 179, 8, 0.15)',
};

const KEYFRAMES = `
@keyframes lauren-neutral {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes lauren-happy {
  0%, 100% { transform: scale(1) translateY(0); }
  50% { transform: scale(1.05) translateY(-8px); }
}
@keyframes lauren-encouraging {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(3deg); }
  75% { transform: rotate(-3deg); }
}
@keyframes lauren-thinking {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-5deg); }
}
@keyframes lauren-concerned {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-3px); }
  75% { transform: translateX(3px); }
}
@keyframes lauren-celebrating {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-15px) scale(1.1); }
}
@keyframes lauren-fade-in {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes lauren-slide-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
`;

const ANIMATIONS = {
  neutral: 'lauren-neutral 3s ease-in-out infinite',
  happy: 'lauren-happy 0.6s ease-in-out',
  encouraging: 'lauren-encouraging 1s ease-in-out',
  thinking: 'lauren-thinking 0.5s ease-in-out forwards',
  concerned: 'lauren-concerned 0.5s ease-in-out',
  celebrating: 'lauren-celebrating 0.8s ease-in-out 2',
};

// Inject keyframes once
let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  stylesInjected = true;
  const style = document.createElement('style');
  style.textContent = KEYFRAMES;
  document.head.appendChild(style);
}

export default function Lauren({
  emotion = 'neutral',
  message,
  size = 'medium',
  position = 'inline',
  onClose,
  animate = true,
}) {
  const [expanded, setExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    injectStyles();
    // Trigger entrance animation
    requestAnimationFrame(() => setMounted(true));
  }, []);

  const px = SIZES[size] || SIZES.medium;
  const isLarge = size === 'large';
  const isFloating = position === 'floating';

  const borderRadius = isLarge ? '16px' : '50%';
  const glowColor = GLOW_COLORS[emotion] || GLOW_COLORS.neutral;
  const glowShadow = GLOW_SHADOW[emotion] || GLOW_SHADOW.neutral;
  const animationCss = animate ? ANIMATIONS[emotion] || ANIMATIONS.neutral : 'none';

  const imageStyle = {
    width: px,
    height: px,
    borderRadius,
    border: `2px solid ${glowColor}`,
    boxShadow: glowShadow,
    objectFit: 'cover',
    animation: animationCss,
    flexShrink: 0,
    display: 'block',
  };

  const speechBubble = message ? (
    <div
      style={{
        background: 'linear-gradient(135deg, #1e293b, #1a1f2e)',
        border: '1px solid rgba(148, 163, 184, 0.15)',
        borderRadius: '14px',
        padding: '0.75rem 1rem',
        maxWidth: 280,
        color: '#f1f5f9',
        fontSize: '0.85rem',
        lineHeight: 1.55,
        position: 'relative',
        animation: 'lauren-fade-in 0.35s ease-out',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.35)',
      }}
    >
      {message}
      {/* Arrow pointing toward Lauren */}
      {!isFloating && (
        <div
          style={{
            position: 'absolute',
            right: -7,
            top: '50%',
            marginTop: -7,
            width: 0,
            height: 0,
            borderTop: '7px solid transparent',
            borderBottom: '7px solid transparent',
            borderLeft: '7px solid #1e293b',
          }}
        />
      )}
    </div>
  ) : null;

  // ---------- Floating mode ----------
  if (isFloating) {
    return (
      <div
        ref={containerRef}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '0.5rem',
          animation: mounted ? 'lauren-slide-up 0.45s ease-out' : 'none',
          opacity: mounted ? 1 : 0,
        }}
      >
        {/* Expanded speech bubble (above the avatar) */}
        {expanded && message && (
          <div
            style={{
              background: 'linear-gradient(135deg, #1e293b, #1a1f2e)',
              border: '1px solid rgba(148, 163, 184, 0.15)',
              borderRadius: '14px',
              padding: '0.75rem 1rem',
              maxWidth: 280,
              color: '#f1f5f9',
              fontSize: '0.85rem',
              lineHeight: 1.55,
              animation: 'lauren-fade-in 0.3s ease-out',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.35)',
              position: 'relative',
            }}
          >
            {message}
            {/* Arrow pointing down toward avatar */}
            <div
              style={{
                position: 'absolute',
                bottom: -7,
                right: 20,
                width: 0,
                height: 0,
                borderLeft: '7px solid transparent',
                borderRight: '7px solid transparent',
                borderTop: '7px solid #1e293b',
              }}
            />
          </div>
        )}

        {/* Avatar circle + close button */}
        <div style={{ position: 'relative' }}>
          <img
            src={`${import.meta.env.BASE_URL}Lauren.png`}
            alt="Lauren, your English tutor"
            onClick={() => setExpanded(prev => !prev)}
            style={{
              ...imageStyle,
              borderRadius: '50%',
              cursor: 'pointer',
              transition: 'box-shadow 0.3s ease',
            }}
          />
          {onClose && (
            <button
              onClick={e => {
                e.stopPropagation();
                onClose();
              }}
              aria-label="Dismiss Lauren"
              style={{
                position: 'absolute',
                top: -6,
                right: -6,
                width: 22,
                height: 22,
                borderRadius: '50%',
                background: '#374151',
                border: '1px solid rgba(148, 163, 184, 0.25)',
                color: '#94a3b8',
                fontSize: '0.7rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                lineHeight: 1,
                padding: 0,
              }}
            >
              ✕
            </button>
          )}
        </div>
      </div>
    );
  }

  // ---------- Inline mode ----------
  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}
    >
      {speechBubble}
      <img
        src={`${import.meta.env.BASE_URL}Lauren.png`}
        alt="Lauren, your English tutor"
        style={imageStyle}
      />
    </div>
  );
}
