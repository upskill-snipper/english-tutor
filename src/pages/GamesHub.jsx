import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Gamepad2, MessageCircleQuestion, Shuffle, Eye, Swords, Clock3, Zap,
  Trophy, Flame, Search as SearchIcon, BookCheck, PenLine,
  PlugZap, CalendarCheck, Award, Lock, Unlock,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import { getCurrentUser, isSubscribed } from '../utils/auth';
import { getUnlockedAchievements } from '../utils/achievements';
import { getDailyStreak } from '../utils/gameUtils';

/* ─── Game definitions with full metadata ─── */

const GAMES = [
  {
    name: 'Who Said It?',
    path: '/games/who-said-it',
    icon: <MessageCircleQuestion size={28} />,
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    description: 'Test your knowledge of GCSE set text quotes. Given a famous line, identify which text it\'s from, who said it, and what technique is being used. Covers Macbeth, An Inspector Calls, Romeo & Juliet, and more. Perfect for AO1 evidence practice.',
    difficulty: 'Intermediate',
    tags: ['Literature', 'Quote Analysis'],
    storageKey: 'learnright_game_whosaidit',
    category: 'literature',
  },
  {
    name: 'Word Match',
    path: '/games/word-match',
    icon: <Shuffle size={28} />,
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    description: 'Match literary and language terms to their definitions. Three difficulty levels test your knowledge of techniques like metaphor, pathetic fallacy, and dramatic irony. Essential vocabulary for Paper 1 and Paper 2.',
    difficulty: 'Beginner',
    tags: ['Vocabulary', 'Definitions'],
    storageKey: 'learnright_game_wordmatch',
    category: 'vocabulary',
  },
  {
    name: 'Technique Spotter',
    path: '/games/technique-spotter',
    icon: <Eye size={28} />,
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    description: 'Read real passages and identify the literary techniques being used. Spot alliteration, symbolism, foreshadowing and more in context. Builds the analytical skills needed for AO2 language analysis.',
    difficulty: 'Advanced',
    tags: ['Analysis', 'Language'],
    storageKey: 'learnright_game_techniquespotter',
    category: 'language',
  },
  {
    name: 'Grammar Ninja',
    path: '/games/grammar-ninja',
    icon: <Swords size={28} />,
    color: '#ef4444',
    gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
    description: 'Identify parts of speech \u2014 nouns, verbs, adjectives, adverbs and more. Progress through belt levels from White to Black Belt. Strengthens the grammar foundations needed for AO6 marks.',
    difficulty: 'Intermediate',
    tags: ['Grammar', 'SPaG'],
    storageKey: 'learnright_game_grammarninja',
    category: 'vocabulary',
  },
  {
    name: 'Timeline Scramble',
    path: '/games/timeline-scramble',
    icon: <Clock3 size={28} />,
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    description: 'Put plot events from your set texts in the correct chronological order. Covers Macbeth, A Christmas Carol, An Inspector Calls, Romeo & Juliet, and Lord of the Flies. Great for AO1 plot knowledge.',
    difficulty: 'Intermediate',
    tags: ['Literature', 'Plot'],
    storageKey: 'learnright_game_timelinescramble',
    category: 'literature',
  },
  {
    name: 'Speed Round',
    path: '/games/speed-round',
    icon: <Zap size={28} />,
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    description: '60-second blitz covering literature, language, grammar, and vocabulary. Answer as many questions as you can before time runs out. Quick-fire revision across all topics and exam boards.',
    difficulty: 'Beginner',
    tags: ['General', 'Revision'],
    storageKey: 'learnright_game_speedround',
    category: 'quick',
  },
  {
    name: 'Quote Detective',
    path: '/games/quote-detective',
    icon: <SearchIcon size={28} />,
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, #a855f7, #9333ea)',
    description: 'A three-part challenge: identify the text, then the character, then the technique \u2014 all from a single quote. 56 quotes from GCSE set texts with board-specific filtering. The ultimate literature revision tool.',
    difficulty: 'Advanced',
    tags: ['Literature', 'Analysis'],
    storageKey: 'learnright_game_quotedetective',
    category: 'literature',
  },
  {
    name: 'Spelling Bee',
    path: '/games/spelling-bee',
    icon: <PenLine size={28} />,
    color: '#eab308',
    gradient: 'linear-gradient(135deg, #eab308, #ca8a04)',
    description: 'Spell commonly misspelled GCSE exam words correctly. Given a definition and example sentence, type the word. Three difficulty tiers with a lives system. Directly targets AO6 spelling marks.',
    difficulty: 'Beginner',
    tags: ['SPaG', 'Vocabulary'],
    storageKey: 'learnright_game_spellingbee',
    category: 'vocabulary',
  },
  {
    name: 'Context Connect',
    path: '/games/context-connect',
    icon: <PlugZap size={28} />,
    color: '#14b8a6',
    gradient: 'linear-gradient(135deg, #14b8a6, #0d9488)',
    description: 'Match historical and social contexts to the right set texts. Learn the background knowledge examiners want to see in your essays. Covers Victorian era, Elizabethan, post-war, and contemporary contexts for AO3.',
    difficulty: 'Intermediate',
    tags: ['Context', 'History'],
    storageKey: 'learnright_game_contextconnect',
    category: 'literature',
  },
  {
    name: 'Punctuation Fixer',
    path: '/games/punctuation-fixer',
    icon: <BookCheck size={28} />,
    color: '#f472b6',
    gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    description: 'Fix broken punctuation in passages \u2014 missing capitals, apostrophes, commas, speech marks, and homophones. Side-by-side comparison shows your fixes vs the correct version. Targets AO6 punctuation marks.',
    difficulty: 'Intermediate',
    tags: ['SPaG', 'Writing'],
    storageKey: 'learnright_game_punctuationfixer',
    category: 'language',
  },
  {
    name: 'Mark the Essay',
    path: '/games/mark-the-essay',
    icon: <BookCheck size={28} />,
    color: '#fb923c',
    gradient: 'linear-gradient(135deg, #fb923c, #f97316)',
    description: 'Read sample student essays and grade them from Grade 3 to Grade 9. See the examiner\'s actual mark with commentary explaining why. Builds examiner-eye skills to improve your own writing.',
    difficulty: 'Advanced',
    tags: ['Assessment', 'Analysis'],
    storageKey: 'learnright_game_marktheessay',
    category: 'language',
  },
  {
    name: 'Daily Challenge',
    path: '/games/daily-challenge',
    icon: <CalendarCheck size={28} />,
    color: '#22d3ee',
    gradient: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
    description: 'One new question every day covering literature, grammar, vocabulary, and techniques. Build a daily streak and compete with yourself. Same question for everyone \u2014 come back each day to keep your streak alive.',
    difficulty: 'Beginner',
    tags: ['General', 'Streak'],
    storageKey: 'learnright_game_dailychallenge',
    category: 'quick',
  },
];

/* ─── Category config ─── */

const CATEGORIES = [
  {
    key: 'literature',
    label: '\u{1F4DA} Literature & Texts',
    description: 'Revise your GCSE set texts — quotes, plot, characters, and context across all major exam boards.',
    names: ['Who Said It?', 'Quote Detective', 'Timeline Scramble', 'Context Connect'],
  },
  {
    key: 'language',
    label: '\u{270D}\uFE0F Language & Writing',
    description: 'Sharpen your analytical and writing skills — spot techniques, fix punctuation, and think like an examiner.',
    names: ['Technique Spotter', 'Punctuation Fixer', 'Mark the Essay'],
  },
  {
    key: 'vocabulary',
    label: '\u{1F524} Vocabulary & Grammar',
    description: 'Build your word power and grammar foundations — definitions, spelling, and parts of speech.',
    names: ['Word Match', 'Grammar Ninja', 'Spelling Bee'],
  },
  {
    key: 'quick',
    label: '\u26A1 Quick Play',
    description: 'Short, sharp revision sessions — perfect for a quick warm-up or daily practice.',
    names: ['Speed Round', 'Daily Challenge'],
  },
];

/* ─── Helpers ─── */

const DIFFICULTY_COLORS = {
  Beginner: { bg: 'rgba(34,197,94,0.12)', border: 'rgba(34,197,94,0.3)', text: '#22c55e' },
  Intermediate: { bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)', text: '#f59e0b' },
  Advanced: { bg: 'rgba(239,68,68,0.12)', border: 'rgba(239,68,68,0.3)', text: '#ef4444' },
};

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

/* ─── Difficulty Badge component ─── */

function DifficultyBadge({ level }) {
  const c = DIFFICULTY_COLORS[level] || DIFFICULTY_COLORS.Beginner;
  return (
    <span style={{
      display: 'inline-block',
      fontSize: '0.7rem',
      fontWeight: 700,
      letterSpacing: '0.03em',
      textTransform: 'uppercase',
      padding: '0.2rem 0.6rem',
      borderRadius: 6,
      background: c.bg,
      border: `1px solid ${c.border}`,
      color: c.text,
    }}>
      {level}
    </span>
  );
}

/* ─── Skill Tag component ─── */

function SkillTag({ label }) {
  return (
    <span style={{
      display: 'inline-block',
      fontSize: '0.68rem',
      fontWeight: 600,
      padding: '0.15rem 0.5rem',
      borderRadius: 5,
      background: 'rgba(148,163,184,0.1)',
      border: '1px solid rgba(148,163,184,0.15)',
      color: '#94a3b8',
    }}>
      {label}
    </span>
  );
}

/* ─── Game Row component (full-width catalogue entry) ─── */

function GameRow({ game, isLast }) {
  const best = getBestScore(game.storageKey);

  return (
    <Link to={game.path} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <div
        className="game-row-inner"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          padding: '1.25rem 1.5rem',
          minHeight: 100,
          borderLeft: `4px solid ${game.color}`,
          borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(255,255,255,0.02)',
          transition: 'all 0.2s',
          cursor: 'pointer',
          position: 'relative',
        }}
        onMouseOver={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
          e.currentTarget.style.boxShadow = `inset 4px 0 0 ${game.color}, 0 2px 12px rgba(0,0,0,0.2)`;
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Left section: icon + meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flex: '1 1 auto', minWidth: 0 }}>
          {/* Icon circle */}
          <div style={{
            width: 52, height: 52, minWidth: 52, borderRadius: '50%',
            background: game.gradient,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white',
            boxShadow: `0 4px 15px ${game.color}33`,
          }}>
            {game.icon}
          </div>

          {/* Name + badges + tags + description */}
          <div style={{ flex: '1 1 auto', minWidth: 0 }}>
            {/* Top line: name + difficulty + tags + best score */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, whiteSpace: 'nowrap' }}>{game.name}</h3>
              <DifficultyBadge level={game.difficulty} />
              {game.tags.map(tag => <SkillTag key={tag} label={tag} />)}
              {best !== null && (
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
                  background: 'rgba(245,158,11,0.12)',
                  border: '1px solid rgba(245,158,11,0.2)',
                  borderRadius: 8, padding: '0.2rem 0.6rem',
                  fontSize: '0.72rem', fontWeight: 700, color: '#f59e0b',
                }}>
                  <Trophy size={12} /> Best: {best}
                </span>
              )}
            </div>

            {/* Description */}
            <p style={{
              fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6,
              margin: 0,
            }}>
              {game.description}
            </p>
          </div>
        </div>

        {/* Right section: play button */}
        <div className="game-row-play" style={{ flexShrink: 0 }}>
          <span style={{
            fontSize: '0.82rem', fontWeight: 600,
            background: game.gradient, color: 'white',
            padding: '0.5rem 1.25rem', borderRadius: 8,
            whiteSpace: 'nowrap',
            display: 'inline-block',
          }}>
            Play &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ─── Main Component ─── */

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

  // Build a lookup from game name to game object
  const gamesByName = {};
  GAMES.forEach(g => { gamesByName[g.name] = g; });

  return (
    <div style={{ minHeight: '100vh', background: '#0a0e1a', color: '#f1f5f9' }}>
      <style>{`
        @media (max-width: 700px) {
          .games-stats-bar {
            flex-direction: column !important;
          }
          .games-stats-bar > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.06);
            padding: 0.75rem 1rem !important;
          }
          .games-stats-bar > div:last-child {
            border-bottom: none;
          }
          .game-row-inner {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.75rem !important;
          }
          .game-row-play {
            align-self: flex-end;
          }
        }
      `}</style>
      <Navbar />
      <main id="main-content" style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <Gamepad2 size={36} color="#10b981" />
            <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: 0 }}>Learning Games</h1>
          </div>
          <p style={{ color: '#94a3b8', maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
            Sharpen your English skills the fun way. Challenge yourself with quizzes, matching games,
            and timed rounds covering literature, grammar, and your GCSE set texts.
          </p>
        </div>

        {/* How to Play */}
        <div style={{
          background: 'rgba(16,185,129,0.06)',
          border: '1px solid rgba(16,185,129,0.15)',
          borderRadius: 12,
          padding: '1rem 1.5rem',
          marginBottom: '2rem',
          textAlign: 'center',
        }}>
          <p style={{ margin: 0, fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6 }}>
            <strong style={{ color: '#10b981' }}>How to Play:</strong>{' '}
            Try any 3 games free &mdash; then subscribe for unlimited access to games, courses, and all study tools.
          </p>
        </div>

        {/* Stats Bar — full-width horizontal */}
        <div className="games-stats-bar" style={{
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 14,
          padding: '0.75rem 0',
          marginBottom: '2.5rem',
          overflow: 'hidden',
        }}>
          {/* Daily Streak */}
          <div style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
            padding: '0.5rem 1rem',
            borderRight: '1px solid rgba(255,255,255,0.06)',
          }}>
            <Flame size={22} color={streak > 0 ? '#f59e0b' : '#475569'} />
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: streak > 0 ? '#f59e0b' : '#64748b' }}>
                {streak} day{streak !== 1 ? 's' : ''} streak
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
                {streak > 0 ? 'Keep it going \u2014 play a game today!' : 'Play a game to start your streak!'}
              </div>
            </div>
          </div>

          {/* Subscription Badge */}
          <div style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
            padding: '0.5rem 1rem',
            borderRight: '1px solid rgba(255,255,255,0.06)',
          }}>
            {subscribed
              ? <Unlock size={22} color="#10b981" />
              : <Lock size={22} color="#ef4444" />
            }
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: subscribed ? '#10b981' : '#ef4444' }}>
                {subscribed ? 'Unlimited' : '3 Free Games'}
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
                {subscribed ? 'All games unlocked' : 'Subscribe for unlimited access'}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
            padding: '0.5rem 1rem',
          }}>
            <Award size={22} color={achievementCount > 0 ? '#a855f7' : '#475569'} />
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: achievementCount > 0 ? '#a855f7' : '#64748b' }}>
                {achievementCount} Unlocked
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
                Achievements earned
              </div>
            </div>
          </div>
        </div>

        {/* Game Catalogue by Category */}
        {CATEGORIES.map(cat => {
          const catGames = cat.names.map(n => gamesByName[n]).filter(Boolean);
          if (catGames.length === 0) return null;
          return (
            <section key={cat.key} style={{ marginBottom: '2.5rem' }}>
              {/* Category heading */}
              <div style={{ marginBottom: '0.75rem' }}>
                <h2 style={{
                  fontSize: '1.3rem', fontWeight: 700, margin: 0, marginBottom: '0.3rem',
                }}>
                  {cat.label}
                </h2>
                <p style={{
                  fontSize: '0.82rem', color: '#64748b', margin: 0, lineHeight: 1.5,
                }}>
                  {cat.description}
                </p>
              </div>

              {/* Game rows */}
              <div style={{
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 14,
                overflow: 'hidden',
              }}>
                {catGames.map((game, i) => (
                  <GameRow
                    key={game.name}
                    game={game}
                    isLast={i === catGames.length - 1}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
