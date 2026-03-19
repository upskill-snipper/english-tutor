import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Gamepad2, MessageCircleQuestion, Shuffle, Eye, Swords, Clock3, Zap,
  Star, Trophy, Flame, Search as SearchIcon, BookCheck, PenLine,
  PlugZap, CalendarCheck, Award, Lock, Unlock,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import { getCurrentUser, isSubscribed } from '../utils/auth';
import { getUnlockedAchievements } from '../utils/achievements';

const GAMES = [
  {
    name: 'Who Said It?',
    path: '/games/who-said-it',
    icon: <MessageCircleQuestion size={28} />,
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    description: 'Quote identification from set texts.',
    difficulty: 2,
    storageKey: 'learnright_game_whosaidit',
  },
  {
    name: 'Word Match',
    path: '/games/word-match',
    icon: <Shuffle size={28} />,
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    description: 'Match terms to definitions.',
    difficulty: 1,
    storageKey: 'learnright_game_wordmatch',
  },
  {
    name: 'Technique Spotter',
    path: '/games/technique-spotter',
    icon: <Eye size={28} />,
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    description: 'Find techniques in passages.',
    difficulty: 3,
    storageKey: 'learnright_game_techniquespotter',
  },
  {
    name: 'Grammar Ninja',
    path: '/games/grammar-ninja',
    icon: <Swords size={28} />,
    color: '#ef4444',
    gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
    description: 'Identify parts of speech.',
    difficulty: 2,
    storageKey: 'learnright_game_grammarninja',
  },
  {
    name: 'Timeline Scramble',
    path: '/games/timeline-scramble',
    icon: <Clock3 size={28} />,
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    description: 'Order plot events.',
    difficulty: 2,
    storageKey: 'learnright_game_timelinescramble',
  },
  {
    name: 'Speed Round',
    path: '/games/speed-round',
    icon: <Zap size={28} />,
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    description: '60-second blitz quiz.',
    difficulty: 1,
    storageKey: 'learnright_game_speedround',
  },
  {
    name: 'Quote Detective',
    path: '/games/quote-detective',
    icon: <SearchIcon size={28} />,
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, #a855f7, #9333ea)',
    description: 'Identify text + character + technique.',
    difficulty: 3,
    storageKey: 'learnright_game_quotedetective',
  },
  {
    name: 'Spelling Bee',
    path: '/games/spelling-bee',
    icon: <PenLine size={28} />,
    color: '#eab308',
    gradient: 'linear-gradient(135deg, #eab308, #ca8a04)',
    description: 'Spell exam words correctly.',
    difficulty: 2,
    storageKey: 'learnright_game_spellingbee',
  },
  {
    name: 'Context Connect',
    path: '/games/context-connect',
    icon: <PlugZap size={28} />,
    color: '#14b8a6',
    gradient: 'linear-gradient(135deg, #14b8a6, #0d9488)',
    description: 'Match contexts to texts.',
    difficulty: 2,
    storageKey: 'learnright_game_contextconnect',
  },
  {
    name: 'Punctuation Fixer',
    path: '/games/punctuation-fixer',
    icon: <BookCheck size={28} />,
    color: '#f472b6',
    gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    description: 'Fix broken punctuation.',
    difficulty: 2,
    storageKey: 'learnright_game_punctuationfixer',
  },
  {
    name: 'Mark the Essay',
    path: '/games/mark-the-essay',
    icon: <BookCheck size={28} />,
    color: '#fb923c',
    gradient: 'linear-gradient(135deg, #fb923c, #f97316)',
    description: 'Grade sample essays.',
    difficulty: 3,
    storageKey: 'learnright_game_marktheessay',
  },
  {
    name: 'Daily Challenge',
    path: '/games/daily-challenge',
    icon: <CalendarCheck size={28} />,
    color: '#22d3ee',
    gradient: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
    description: 'One question per day.',
    difficulty: 1,
    storageKey: 'learnright_game_dailychallenge',
  },
];

function getDailyStreak() {
  try {
    const last = localStorage.getItem('learnright_last_game_date');
    const streakCount = parseInt(localStorage.getItem('learnright_game_daily_streak') || '0', 10);
    if (!last) return 0;
    const today = new Date().toISOString().slice(0, 10);
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (last === today) return Math.max(streakCount, 1);
    if (last === yesterday) return streakCount;
    return 0;
  } catch { return 0; }
}

function getBestScore(storageKey) {
  try {
    const data = JSON.parse(localStorage.getItem(storageKey));
    if (Array.isArray(data) && data.length > 0) {
      return data.reduce((max, e) => {
        const s = e.score ?? e.points ?? 0;
        return s > max ? s : max;
      }, 0);
    }
    return null;
  } catch { return null; }
}

function StarRating({ count }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1, 2, 3].map(i => (
        <Star key={i} size={14} fill={i <= count ? '#f59e0b' : 'none'} color={i <= count ? '#f59e0b' : '#475569'} />
      ))}
    </div>
  );
}

export default function GamesHub() {
  const [streak] = useState(getDailyStreak);
  const [subscribed, setSubscribed] = useState(false);
  const [achievementCount, setAchievementCount] = useState(0);

  useEffect(() => {
    try {
      const user = getCurrentUser();
      if (user) {
        setSubscribed(isSubscribed(user.id));
        const unlocked = getUnlockedAchievements(user.id);
        setAchievementCount(Object.keys(unlocked).length);
      }
    } catch { /* guest user */ }
  }, []);

  const cardBg = 'rgba(255,255,255,0.04)';
  const borderCol = 'rgba(255,255,255,0.08)';

  return (
    <div style={{ minHeight: '100vh', background: '#0a0e1a', color: '#f1f5f9' }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <Gamepad2 size={36} color="#10b981" />
            <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: 0 }}>Learning Games</h1>
          </div>
          <p style={{ color: '#94a3b8', maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
            Sharpen your English skills the fun way! Challenge yourself with quizzes, matching games,
            and timed rounds covering literature, grammar, and your set texts.
          </p>
        </div>

        {/* Stats Row: Streak + Subscription Badge + Achievements */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '2rem',
        }}>
          {/* Daily Streak */}
          <div style={{
            background: streak > 0 ? 'rgba(245,158,11,0.08)' : cardBg,
            border: `1px solid ${streak > 0 ? 'rgba(245,158,11,0.2)' : borderCol}`,
            borderRadius: 12, padding: '0.75rem 1.5rem',
            display: 'flex', alignItems: 'center', gap: '0.75rem',
          }}>
            <Flame size={22} color={streak > 0 ? '#f59e0b' : '#475569'} />
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', color: streak > 0 ? '#f59e0b' : '#64748b' }}>
                {streak} day{streak !== 1 ? 's' : ''} streak
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                {streak > 0 ? 'Keep it going — play a game today!' : 'Play a game to start your streak!'}
              </div>
            </div>
          </div>

          {/* Subscription Badge */}
          <div style={{
            background: subscribed ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)',
            border: `1px solid ${subscribed ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)'}`,
            borderRadius: 12, padding: '0.75rem 1.5rem',
            display: 'flex', alignItems: 'center', gap: '0.75rem',
          }}>
            {subscribed
              ? <Unlock size={22} color="#10b981" />
              : <Lock size={22} color="#ef4444" />
            }
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', color: subscribed ? '#10b981' : '#ef4444' }}>
                {subscribed ? 'Unlimited' : '3 Free Games'}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                {subscribed ? 'All games unlocked' : 'Subscribe for unlimited access'}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div style={{
            background: achievementCount > 0 ? 'rgba(168,85,247,0.08)' : cardBg,
            border: `1px solid ${achievementCount > 0 ? 'rgba(168,85,247,0.2)' : borderCol}`,
            borderRadius: 12, padding: '0.75rem 1.5rem',
            display: 'flex', alignItems: 'center', gap: '0.75rem',
          }}>
            <Award size={22} color={achievementCount > 0 ? '#a855f7' : '#475569'} />
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', color: achievementCount > 0 ? '#a855f7' : '#64748b' }}>
                {achievementCount} Unlocked
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                Achievements earned
              </div>
            </div>
          </div>
        </div>

        {/* Game Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
          gap: '1.25rem',
        }}>
          {GAMES.map(game => {
            const best = getBestScore(game.storageKey);
            return (
              <Link key={game.name} to={game.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                  background: cardBg,
                  border: `1px solid ${borderCol}`,
                  borderRadius: 16,
                  padding: '1.5rem',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.borderColor = game.color + '44';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 8px 30px ${game.color}22`;
                }}
                onMouseOut={e => {
                  e.currentTarget.style.borderColor = borderCol;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  {best !== null && (
                    <div style={{
                      position: 'absolute', top: 12, right: 12,
                      background: 'rgba(245,158,11,0.12)',
                      border: '1px solid rgba(245,158,11,0.2)',
                      borderRadius: 8, padding: '0.25rem 0.625rem',
                      display: 'flex', alignItems: 'center', gap: '0.25rem',
                      fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b',
                    }}>
                      <Trophy size={12} /> {best}
                    </div>
                  )}

                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: game.gradient,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1rem', color: 'white',
                    boxShadow: `0 4px 15px ${game.color}33`,
                  }}>
                    {game.icon}
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.375rem' }}>{game.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '0.75rem', minHeight: '2.5rem' }}>
                    {game.description}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <StarRating count={game.difficulty} />
                    <span style={{
                      fontSize: '0.8rem', fontWeight: 600,
                      background: game.gradient, color: 'white',
                      padding: '0.3rem 0.85rem', borderRadius: 8,
                    }}>
                      Play &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
