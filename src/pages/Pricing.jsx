import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, Crown, Sparkles, ChevronDown, ChevronUp, Zap, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Lauren from '../components/Lauren';
import { getCurrentUser, getSubscription, setSubscription } from '../utils/auth';

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '£0',
    period: '',
    badge: null,
    features: [
      '3 free game trials',
      'Browse course catalogue',
    ],
    icon: <Zap size={28} />,
    color: '#64748b',
    gradient: 'linear-gradient(135deg, #334155, #1e293b)',
  },
  {
    id: 'monthly',
    name: 'Monthly',
    price: '£19',
    period: '/month',
    badge: 'Most Popular',
    features: [
      'Unlimited games',
      'All 40+ courses',
      'All flashcard decks',
      '30 practice questions with model answers',
      'Study planner',
      'Certificates',
      'Cancel anytime',
    ],
    icon: <Star size={28} />,
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #065f46, #064e3b)',
  },
  {
    id: 'pro',
    name: 'Pro — Annual',
    price: '£179',
    period: '/year',
    badge: 'Best Value',
    features: [
      'Everything in Monthly',
      'Full school year access (Aug–Aug)',
      'Save £49 vs monthly (£19 × 12 = £228)',
    ],
    icon: <Crown size={28} />,
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #78350f, #451a03)',
  },
];

const faqs = [
  {
    q: 'Can I cancel anytime?',
    a: 'Yes! Monthly subscriptions can be cancelled at any time. You will retain access until the end of your billing period.',
  },
  {
    q: "What's included in the free plan?",
    a: 'The free plan gives you 3 game trials and lets you browse the course catalogue. Subscribe to a paid plan to access courses, games, flashcards, and all study tools.',
  },
  {
    q: 'How long does the Pro plan last?',
    a: 'Pro gives you a full school year of access, running from August to August. This covers the entire academic year so you have uninterrupted access through all your exams.',
  },
  {
    q: 'Can I upgrade from Monthly to Pro?',
    a: 'Yes, you can upgrade at any time. Your Pro annual access begins immediately upon purchase, saving you £49 compared to 12 months of the monthly plan.',
  },
  {
    q: 'Do I get a certificate?',
    a: 'Certificates are available on all paid plans. Complete a course assessment to earn your certificate.',
  },
];

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'all 0.2s',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          padding: '1.125rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'none',
          border: 'none',
          color: 'var(--text-primary, #f1f5f9)',
          fontSize: '0.95rem',
          fontWeight: 600,
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        {faq.q}
        {open ? <ChevronUp size={18} style={{ color: '#94a3b8', flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: '#94a3b8', flexShrink: 0 }} />}
      </button>
      {open && (
        <div style={{
          padding: '0 1.25rem 1.125rem',
          color: 'var(--text-secondary, #94a3b8)',
          fontSize: '0.9rem',
          lineHeight: 1.7,
        }}>
          {faq.a}
        </div>
      )}
    </div>
  );
}

export default function Pricing() {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const currentSub = user ? getSubscription(user.id) : { tier: 'free' };
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubscribe = (tier) => {
    if (!user) {
      navigate('/register');
      return;
    }
    setSubscription(user.id, tier);
    setSuccessMsg(
      tier === 'monthly'
        ? 'You are now subscribed to the Monthly plan!'
        : 'Welcome to Pro! You now have access for the full school year.'
    );
    setTimeout(() => {
      navigate('/courses');
    }, 1200);
  };

  const isCurrentPlan = (planId) => currentSub.tier === planId;

  return (
    <div style={{ background: 'var(--bg-primary, #0a0e1a)', minHeight: '100vh' }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1.5rem 4rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(16,185,129,0.1)',
            border: '1px solid rgba(16,185,129,0.2)',
            borderRadius: '999px',
            padding: '0.375rem 1rem',
            marginBottom: '1.25rem',
            color: '#10b981',
            fontSize: '0.8rem',
            fontWeight: 600,
          }}>
            <Sparkles size={14} /> Pricing
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: 'var(--text-primary, #f1f5f9)',
            letterSpacing: '-0.03em',
            marginBottom: '0.75rem',
          }}>
            Choose Your Plan
          </h1>
          <p style={{
            color: 'var(--text-secondary, #94a3b8)',
            fontSize: '1.1rem',
            maxWidth: '500px',
            margin: '0 auto',
          }}>
            Unlock unlimited learning with a plan that suits you
          </p>
        </div>

        {/* Lauren avatar */}
        <Lauren
          emotion="happy"
          message="Choose the plan that works for you. Monthly is flexible, or go Pro and save £49 with full school year access!"
          size="medium"
          position="inline"
        />

        {/* Success message */}
        {successMsg && (
          <div style={{
            maxWidth: '600px',
            margin: '0 auto 2rem',
            padding: '1rem 1.25rem',
            background: 'rgba(16,185,129,0.12)',
            border: '1px solid rgba(16,185,129,0.3)',
            borderRadius: '12px',
            color: '#10b981',
            textAlign: 'center',
            fontWeight: 600,
            fontSize: '0.95rem',
          }}>
            {successMsg}
          </div>
        )}

        {/* Pricing Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem',
        }}>
          {plans.map((plan) => {
            const isCurrent = isCurrentPlan(plan.id);
            const isHighlighted = plan.id === 'monthly';

            return (
              <div
                key={plan.id}
                style={{
                  background: isCurrent ? plan.gradient : 'rgba(255,255,255,0.03)',
                  border: isCurrent
                    ? `2px solid ${plan.color}`
                    : isHighlighted
                      ? '2px solid rgba(16,185,129,0.4)'
                      : '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '16px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'all 0.3s',
                  transform: isHighlighted && !isCurrent ? 'scale(1.02)' : 'none',
                }}
              >
                {/* Badge */}
                {plan.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: plan.id === 'monthly'
                      ? 'linear-gradient(135deg, #10b981, #059669)'
                      : 'linear-gradient(135deg, #f59e0b, #d97706)',
                    color: '#fff',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    padding: '0.3rem 0.875rem',
                    borderRadius: '999px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                  }}>
                    {plan.badge}
                  </div>
                )}

                {/* Icon + Name */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `${plan.color}18`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: plan.color,
                  }}>
                    {plan.icon}
                  </div>
                  <div>
                    <h2 style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--text-primary, #f1f5f9)',
                      margin: 0,
                    }}>
                      {plan.name}
                    </h2>
                    {isCurrent && (
                      <span style={{
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        color: plan.color,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}>
                        Current Plan
                      </span>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{
                    fontSize: '2.25rem',
                    fontWeight: 800,
                    color: 'var(--text-primary, #f1f5f9)',
                    letterSpacing: '-0.03em',
                  }}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span style={{
                      color: 'var(--text-secondary, #94a3b8)',
                      fontSize: '0.9rem',
                    }}>
                      {plan.period}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 1.75rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.625rem',
                }}>
                  {plan.features.map((f, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.625rem',
                      color: 'var(--text-secondary, #94a3b8)',
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                    }}>
                      <Check size={16} style={{ color: plan.color, flexShrink: 0, marginTop: '2px' }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                {plan.id === 'free' ? (
                  isCurrent ? (
                    <button
                      disabled
                      style={{
                        padding: '0.75rem 1.5rem',
                        borderRadius: '10px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        background: 'rgba(255,255,255,0.05)',
                        color: '#64748b',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        cursor: 'not-allowed',
                        textAlign: 'center',
                      }}
                    >
                      Current Plan
                    </button>
                  ) : (
                    <Link
                      to="/register"
                      style={{
                        padding: '0.75rem 1.5rem',
                        borderRadius: '10px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        background: 'rgba(255,255,255,0.06)',
                        color: 'var(--text-primary, #f1f5f9)',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        textAlign: 'center',
                        display: 'block',
                        transition: 'all 0.2s',
                      }}
                    >
                      Get Started
                    </Link>
                  )
                ) : isCurrent ? (
                  <button
                    disabled
                    style={{
                      padding: '0.75rem 1.5rem',
                      borderRadius: '10px',
                      border: `1px solid ${plan.color}40`,
                      background: `${plan.color}15`,
                      color: plan.color,
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      cursor: 'not-allowed',
                      textAlign: 'center',
                    }}
                  >
                    Current Plan
                  </button>
                ) : (
                  <button
                    onClick={() => handleSubscribe(plan.id)}
                    style={{
                      padding: '0.75rem 1.5rem',
                      borderRadius: '10px',
                      border: 'none',
                      background: plan.id === 'monthly'
                        ? 'linear-gradient(135deg, #10b981, #059669)'
                        : 'linear-gradient(135deg, #f59e0b, #d97706)',
                      color: '#fff',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'all 0.2s',
                      boxShadow: plan.id === 'monthly'
                        ? '0 4px 20px rgba(16,185,129,0.3)'
                        : '0 4px 20px rgba(245,158,11,0.3)',
                    }}
                  >
                    {plan.id === 'monthly' ? 'Subscribe Monthly' : 'Go Pro'}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'var(--text-primary, #f1f5f9)',
            textAlign: 'center',
            marginBottom: '1.5rem',
          }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
