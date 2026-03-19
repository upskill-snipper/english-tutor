import { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, Trophy, Clock, Target, ChevronRight, RotateCcw, Star, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import GameWrapper from '../../components/GameWrapper';

/* ────────────────────────────────────────────
   PASSAGE DATA  –  15 passages across 3 difficulties
   Each word-group target uses character offsets into the plain passage text.
   ──────────────────────────────────────────── */

const PASSAGES = [
  // ── EASY (5) ──────────────────────────────
  {
    id: 1,
    difficulty: 'easy',
    passage: 'The sun smiled down on the village, warming every rooftop with golden fingers of light.',
    technique: 'personification',
    targets: [
      { start: 4, end: 15, text: 'sun smiled', explanation: '"Smiled" gives the sun a human action — it cannot literally smile, so this is personification.' },
      { start: 64, end: 85, text: 'golden fingers of light', explanation: 'Light does not have "fingers"; giving it a human body part is personification.' }
    ]
  },
  {
    id: 2,
    difficulty: 'easy',
    passage: 'Her voice was as smooth as silk, flowing through the quiet room like a gentle river.',
    technique: 'simile',
    targets: [
      { start: 14, end: 32, text: 'as smooth as silk', explanation: 'A direct comparison using "as ... as" makes this a simile.' },
      { start: 56, end: 82, text: 'like a gentle river', explanation: 'The word "like" signals a comparison between the voice and a river — a simile.' }
    ]
  },
  {
    id: 3,
    difficulty: 'easy',
    passage: 'The bang of the drum echoed, the crash of cymbals followed, and the hiss of the crowd filled the arena.',
    technique: 'onomatopoeia',
    targets: [
      { start: 4, end: 8, text: 'bang', explanation: '"Bang" imitates the sound a drum makes — this is onomatopoeia.' },
      { start: 32, end: 37, text: 'crash', explanation: '"Crash" mimics the actual sound of cymbals — onomatopoeia.' },
      { start: 68, end: 72, text: 'hiss', explanation: '"Hiss" reproduces the sibilant sound of a crowd — onomatopoeia.' }
    ]
  },
  {
    id: 4,
    difficulty: 'easy',
    passage: 'Peter Piper picked a peck of pickled peppers by the peaceful pond.',
    technique: 'alliteration',
    targets: [
      { start: 0, end: 64, text: 'Peter Piper picked a peck of pickled peppers by the peaceful pond', explanation: 'The repeated "p" sound at the start of multiple words creates alliteration throughout this sentence.' }
    ]
  },
  {
    id: 5,
    difficulty: 'easy',
    passage: 'I have told you a million times not to leave your shoes in the hallway!',
    technique: 'hyperbole',
    targets: [
      { start: 18, end: 32, text: 'a million times', explanation: 'The speaker has not literally said it a million times — this extreme exaggeration is hyperbole.' }
    ]
  },
  // ── MEDIUM (5) ─────────────────────────────
  {
    id: 6,
    difficulty: 'medium',
    passage: 'The sea whispered secrets to the shore, while the wind sang softly through the swaying trees and the stars stared silently above.',
    technique: 'personification',
    targets: [
      { start: 4, end: 37, text: 'sea whispered secrets to the shore', explanation: 'The sea cannot "whisper secrets" — attributing speech to it is personification.' },
      { start: 49, end: 79, text: 'wind sang softly through the swaying trees', explanation: 'Wind cannot sing; giving it a human vocal ability is personification.' },
      { start: 88, end: 123, text: 'stars stared silently above', explanation: 'Stars do not have eyes to stare — this is personification.' }
    ]
  },
  {
    id: 7,
    difficulty: 'medium',
    passage: 'The city was a jungle, its streets dark rivers of noise, and every alleyway a mouth ready to swallow the unwary.',
    technique: 'metaphor',
    targets: [
      { start: 15, end: 21, text: 'a jungle', explanation: 'The city is directly called "a jungle" without "like" or "as" — a metaphor comparing urban chaos to a wild jungle.' },
      { start: 36, end: 55, text: 'dark rivers of noise', explanation: 'Streets are called "rivers of noise" — a metaphor implying flowing, overwhelming sound.' },
      { start: 73, end: 110, text: 'a mouth ready to swallow the unwary', explanation: 'An alleyway is called "a mouth" — a metaphor suggesting danger and consumption.' }
    ]
  },
  {
    id: 8,
    difficulty: 'medium',
    passage: 'The rain hammered the windows as the storm raged outside, the sky weeping grey tears over the desolate moors.',
    technique: 'pathetic fallacy',
    targets: [
      { start: 0, end: 55, text: 'The rain hammered the windows as the storm raged outside', explanation: 'The violent weather mirrors emotional turmoil — a classic example of pathetic fallacy.' },
      { start: 57, end: 107, text: 'the sky weeping grey tears over the desolate moors', explanation: 'The sky "weeping" reflects sadness through weather — pathetic fallacy.' }
    ]
  },
  {
    id: 9,
    difficulty: 'medium',
    passage: 'She slithered silently through the shadows, the soft hiss of her silk dress sweeping the stone floor.',
    technique: 'sibilance',
    targets: [
      { start: 4, end: 40, text: 'slithered silently through the shadows', explanation: 'The repeated "s" and "sh" sounds create a hissing, sinister effect — sibilance.' },
      { start: 46, end: 99, text: 'soft hiss of her silk dress sweeping the stone floor', explanation: 'Multiple "s" sounds continue the sibilant pattern, evoking stealth and smoothness.' }
    ]
  },
  {
    id: 10,
    difficulty: 'medium',
    passage: 'Is this what we have become? Do we not deserve better? Will you stand by and watch everything fall apart?',
    technique: 'rhetorical question',
    targets: [
      { start: 0, end: 27, text: 'Is this what we have become?', explanation: 'This question is asked for persuasive effect, not to receive an answer — a rhetorical question.' },
      { start: 28, end: 55, text: 'Do we not deserve better?', explanation: 'Again, no answer is expected; the question emphasises a moral point — rhetorical question.' },
      { start: 56, end: 105, text: 'Will you stand by and watch everything fall apart?', explanation: 'A challenge posed as a question to provoke thought, not elicit a literal response.' }
    ]
  },
  // ── HARD (5) ───────────────────────────────
  {
    id: 11,
    difficulty: 'hard',
    techniques: ['metaphor', 'personification', 'alliteration'],
    passage: 'The moon was a ghostly galleon tossed upon cloudy seas. The wind was a torrent of darkness among the gusty trees. The road was a ribbon of moonlight, whispering to the wandering travellers.',
    targets: [
      { start: 15, end: 51, text: 'a ghostly galleon tossed upon cloudy seas', technique: 'metaphor', explanation: 'The moon is directly compared to a ship — a metaphor creating a vivid image of the night sky.' },
      { start: 67, end: 87, text: 'a torrent of darkness', technique: 'metaphor', explanation: 'Wind is called "a torrent of darkness" — a metaphor blending weather with visual imagery.' },
      { start: 111, end: 133, text: 'a ribbon of moonlight', technique: 'metaphor', explanation: 'The road is called "a ribbon" — a metaphor for its pale, narrow appearance.' },
      { start: 135, end: 172, text: 'whispering to the wandering travellers', technique: 'personification', explanation: 'The road cannot "whisper" — giving it speech is personification.' },
      { start: 15, end: 30, text: 'ghostly galleon', technique: 'alliteration', explanation: 'The repeated "g" sound in "ghostly galleon" is alliteration.' },
      { start: 92, end: 102, text: 'gusty trees', technique: 'alliteration', explanation: 'Not strictly alliteration on its own, but "gusty" continues the "g" pattern from the broader passage.' }
    ]
  },
  {
    id: 12,
    difficulty: 'hard',
    techniques: ['oxymoron', 'juxtaposition', 'emotive language'],
    passage: 'It was a living death, a bittersweet agony. The pristine palace stood beside the crumbling slum. Innocent children screamed in terror as the merciless flames consumed their fragile homes.',
    targets: [
      { start: 9, end: 21, text: 'living death', technique: 'oxymoron', explanation: '"Living" and "death" are contradictory terms placed together — an oxymoron.' },
      { start: 25, end: 43, text: 'bittersweet agony', technique: 'oxymoron', explanation: '"Bittersweet" contains two opposing ideas (bitter + sweet) combined with agony — oxymoron.' },
      { start: 49, end: 96, text: 'pristine palace stood beside the crumbling slum', technique: 'juxtaposition', explanation: 'Placing "pristine palace" next to "crumbling slum" highlights inequality through contrast — juxtaposition.' },
      { start: 98, end: 137, text: 'Innocent children screamed in terror', technique: 'emotive language', explanation: '"Innocent", "screamed", and "terror" are chosen to provoke an emotional response from the reader.' },
      { start: 142, end: 183, text: 'merciless flames consumed their fragile homes', technique: 'emotive language', explanation: '"Merciless", "consumed", and "fragile" evoke sympathy and horror — emotive language.' }
    ]
  },
  {
    id: 13,
    difficulty: 'hard',
    techniques: ['anaphora', 'imperative', 'rhetorical question'],
    passage: 'We shall fight on the beaches. We shall fight on the landing grounds. We shall fight in the fields. Stand up! Speak out! Take action now! Can freedom be won by silence alone?',
    targets: [
      { start: 0, end: 95, text: 'We shall fight on the beaches. We shall fight on the landing grounds. We shall fight in the fields', technique: 'anaphora', explanation: 'The repetition of "We shall fight" at the start of successive clauses is anaphora — used for emphasis and rhythm.' },
      { start: 97, end: 106, text: 'Stand up!', technique: 'imperative', explanation: '"Stand up!" is a command — an imperative verb form used to compel action.' },
      { start: 107, end: 117, text: 'Speak out!', technique: 'imperative', explanation: '"Speak out!" issues a direct command — imperative.' },
      { start: 118, end: 134, text: 'Take action now!', technique: 'imperative', explanation: '"Take action now!" is another command — imperative mood.' },
      { start: 135, end: 172, text: 'Can freedom be won by silence alone?', technique: 'rhetorical question', explanation: 'This question implies freedom cannot be won by silence — asked for effect, not a literal answer.' }
    ]
  },
  {
    id: 14,
    difficulty: 'hard',
    techniques: ['simile', 'hyperbole', 'personification'],
    passage: 'The tower stretched like a needle piercing the heavens, so tall it could touch the stars themselves. The ancient stones groaned under the weight of a thousand years, their cracks weeping with the memory of ages.',
    targets: [
      { start: 18, end: 51, text: 'like a needle piercing the heavens', technique: 'simile', explanation: '"Like a needle" compares the tower to a needle using "like" — a simile.' },
      { start: 53, end: 95, text: 'so tall it could touch the stars themselves', technique: 'hyperbole', explanation: 'No building can literally touch the stars — this is deliberate exaggeration, or hyperbole.' },
      { start: 112, end: 157, text: 'groaned under the weight of a thousand years', technique: 'personification', explanation: 'Stones cannot "groan" — attributing a human vocal action to them is personification.' },
      { start: 159, end: 205, text: 'their cracks weeping with the memory of ages', technique: 'personification', explanation: 'Cracks cannot "weep" or have "memory" — this gives human qualities to stone, personification.' }
    ]
  },
  {
    id: 15,
    difficulty: 'hard',
    techniques: ['enjambment', 'metaphor', 'sibilance'],
    passage: 'I wandered lonely as a cloud\nthat floats on high o\'er vales and hills,\nwhen all at once I saw a crowd,\na host of golden daffodils;\nbesides the lake, beneath the trees,\nfluttering and dancing in the breeze.\nShe sells sea-shells on the silent shore, a carpet of gold stretching to the horizon.',
    targets: [
      { start: 0, end: 62, text: 'I wandered lonely as a cloud\nthat floats on high o\'er vales and hills', technique: 'enjambment', explanation: 'The sentence runs from one line into the next without punctuation at the line break — enjambment.' },
      { start: 96, end: 130, text: 'a host of golden daffodils;\nbesides', technique: 'enjambment', explanation: 'The thought continues across the line break — another example of enjambment.' },
      { start: 199, end: 236, text: 'She sells sea-shells on the silent shore', technique: 'sibilance', explanation: 'The repeated "s" and "sh" sounds create a soft, hissing quality — sibilance.' },
      { start: 238, end: 276, text: 'a carpet of gold stretching to the horizon', technique: 'metaphor', explanation: 'The daffodils are called "a carpet of gold" — a metaphor comparing flowers to a luxurious covering.' }
    ]
  }
];

/* ──────────────────────────────────────────── */

const LS_KEY = 'learnright_game_techniquespotter';

function loadHighScores() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || []; } catch { return []; }
}
function saveHighScore(entry) {
  const scores = loadHighScores();
  scores.push(entry);
  scores.sort((a, b) => b.score - a.score);
  localStorage.setItem(LS_KEY, JSON.stringify(scores.slice(0, 20)));
}

/* ─── Tokeniser: split passage into clickable word spans ─── */
function tokenise(passage) {
  const tokens = [];
  let i = 0;
  const text = passage;
  while (i < text.length) {
    if (/\s/.test(text[i])) {
      let start = i;
      while (i < text.length && /\s/.test(text[i])) i++;
      tokens.push({ type: 'space', text: text.slice(start, i), start, end: i });
    } else {
      let start = i;
      while (i < text.length && !/\s/.test(text[i])) i++;
      tokens.push({ type: 'word', text: text.slice(start, i), start, end: i });
    }
  }
  return tokens;
}

/* Check if a word token overlaps with any target */
function getOverlappingTarget(token, targets) {
  for (const t of targets) {
    if (token.start >= t.start && token.end <= t.end) return t;
  }
  return null;
}

const DIFFICULTY_LABELS = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
const DIFFICULTY_COLOURS = { easy: '#22c55e', medium: '#f59e0b', hard: '#ef4444' };

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */
export default function TechniqueSpotter() {
  const [screen, setScreen] = useState('menu');        // menu | playing | results | scores
  const [difficulty, setDifficulty] = useState('easy');
  const [roundIndex, setRoundIndex] = useState(0);
  const [rounds, setRounds] = useState([]);
  const [foundTargets, setFoundTargets] = useState([]); // indices into current passage targets
  const [wrongFlash, setWrongFlash] = useState([]);     // token indices that flash red
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [showExplanations, setShowExplanations] = useState(false);
  const timerRef = useRef(null);

  /* Timer */
  useEffect(() => {
    if (screen === 'playing' && !showExplanations) {
      timerRef.current = setInterval(() => setElapsed(e => e + 1), 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [screen, showExplanations]);

  /* Start game */
  const startGame = useCallback(() => {
    const pool = PASSAGES.filter(p => p.difficulty === difficulty);
    // Shuffle and pick up to 5 rounds
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    setRounds(shuffled.slice(0, Math.min(5, shuffled.length)));
    setRoundIndex(0);
    setFoundTargets([]);
    setWrongFlash([]);
    setScore(0);
    setMistakes(0);
    setElapsed(0);
    setStartTime(Date.now());
    setShowExplanations(false);
    setScreen('playing');
  }, [difficulty]);

  const currentPassage = rounds[roundIndex];

  /* Compute which technique(s) to display for this round */
  const currentTechniques = currentPassage
    ? (currentPassage.techniques || [currentPassage.technique])
    : [];

  const techniqueLabel = currentTechniques.map(t => t.toUpperCase()).join(', ');

  /* Handle word click */
  const handleWordClick = useCallback((token, tokenIndex) => {
    if (!currentPassage || showExplanations) return;
    const target = getOverlappingTarget(token, currentPassage.targets);
    if (target) {
      const targetIdx = currentPassage.targets.indexOf(target);
      if (foundTargets.includes(targetIdx)) return; // already found
      const newFound = [...foundTargets, targetIdx];
      setFoundTargets(newFound);
      // Score: 100 per find, bonus for speed
      setScore(s => s + 100);
      // Check if all found
      if (newFound.length === currentPassage.targets.length) {
        clearInterval(timerRef.current);
        setShowExplanations(true);
      }
    } else {
      setMistakes(m => m + 1);
      setScore(s => Math.max(0, s - 25));
      setWrongFlash(prev => [...prev, tokenIndex]);
      setTimeout(() => setWrongFlash(prev => prev.filter(i => i !== tokenIndex)), 600);
    }
  }, [currentPassage, foundTargets, showExplanations]);

  /* Next round */
  const nextRound = useCallback(() => {
    if (roundIndex + 1 >= rounds.length) {
      // Game over
      const timeBonus = Math.max(0, 500 - elapsed * 2);
      const accuracyBonus = mistakes === 0 ? 300 : Math.max(0, 200 - mistakes * 30);
      const finalScore = score + timeBonus + accuracyBonus;
      setScore(finalScore);
      saveHighScore({
        score: finalScore,
        difficulty,
        date: new Date().toISOString(),
        time: elapsed,
        mistakes
      });
      setScreen('results');
    } else {
      setRoundIndex(r => r + 1);
      setFoundTargets([]);
      setWrongFlash([]);
      setShowExplanations(false);
    }
  }, [roundIndex, rounds.length, score, elapsed, mistakes, difficulty]);

  /* ─── Render helpers ─── */
  const tokens = currentPassage ? tokenise(currentPassage.passage) : [];

  const renderPassage = () => (
    <div style={{
      background: '#111827', borderRadius: 12, padding: '1.5rem',
      lineHeight: 2, fontSize: '1.15rem', userSelect: 'none', marginBottom: '1.5rem',
      border: '1px solid #1e293b'
    }}>
      {tokens.map((tok, i) => {
        if (tok.type === 'space') {
          return tok.text === '\n'
            ? <br key={i} />
            : <span key={i}>{tok.text}</span>;
        }
        const target = getOverlappingTarget(tok, currentPassage.targets);
        const targetIdx = target ? currentPassage.targets.indexOf(target) : -1;
        const isFound = targetIdx !== -1 && foundTargets.includes(targetIdx);
        const isWrong = wrongFlash.includes(i);

        let bg = 'transparent';
        let color = '#e2e8f0';
        let cursor = 'pointer';
        let border = 'none';

        if (isFound) {
          bg = 'rgba(34,197,94,0.25)';
          color = '#4ade80';
          border = '1px solid rgba(34,197,94,0.5)';
        } else if (isWrong) {
          bg = 'rgba(239,68,68,0.3)';
          color = '#f87171';
          border = '1px solid rgba(239,68,68,0.5)';
        } else if (showExplanations && target) {
          bg = 'rgba(99,102,241,0.25)';
          color = '#a5b4fc';
          border = '1px solid rgba(99,102,241,0.5)';
        }

        return (
          <span
            key={i}
            onClick={() => handleWordClick(tok, i)}
            style={{
              background: bg, color, cursor, borderRadius: 4,
              padding: '2px 4px', transition: 'all 0.2s', display: 'inline',
              border, whiteSpace: 'pre-wrap'
            }}
          >
            {tok.text}
          </span>
        );
      })}
    </div>
  );

  /* ─── SCREENS ─── */

  // MENU
  if (screen === 'menu') {
    const highScores = loadHighScores();
    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
        <Navbar />
        <GameWrapper gameId="technique-spotter">
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '2rem 1rem' }}>
          <Link to="/dashboard" style={{ color: '#60a5fa', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            <ArrowLeft size={16} /> Back to Dashboard
          </Link>

          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}><Target size={56} style={{ color: '#818cf8' }} /></div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Technique Spotter</h1>
            <p style={{ color: '#94a3b8', maxWidth: 480, margin: '0 auto' }}>
              Read each passage and click on the words that demonstrate the given literary technique. Find them all to advance!
            </p>
          </div>

          {/* Difficulty selector */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {['easy', 'medium', 'hard'].map(d => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                style={{
                  padding: '0.75rem 1.5rem', borderRadius: 10, border: '2px solid',
                  borderColor: difficulty === d ? DIFFICULTY_COLOURS[d] : '#334155',
                  background: difficulty === d ? `${DIFFICULTY_COLOURS[d]}20` : '#111827',
                  color: difficulty === d ? DIFFICULTY_COLOURS[d] : '#94a3b8',
                  fontWeight: 700, cursor: 'pointer', fontSize: '0.95rem',
                  transition: 'all 0.2s', minWidth: 100
                }}
              >
                {DIFFICULTY_LABELS[d]}
              </button>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginBottom: '0.75rem', color: '#94a3b8', fontSize: '0.85rem' }}>
            {difficulty === 'easy' && '1 technique per passage — obvious examples'}
            {difficulty === 'medium' && '1 technique per passage — more subtle examples'}
            {difficulty === 'hard' && 'Multiple techniques per passage — expert level'}
          </div>

          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <button
              onClick={startGame}
              style={{
                padding: '0.9rem 2.5rem', borderRadius: 10, border: 'none',
                background: 'linear-gradient(135deg, #6366f1, #818cf8)', color: '#fff',
                fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: 8
              }}
            >
              <Zap size={20} /> Start Game
            </button>
          </div>

          {/* High scores */}
          {highScores.length > 0 && (
            <div style={{ background: '#111827', borderRadius: 12, padding: '1.25rem', border: '1px solid #1e293b' }}>
              <h3 style={{ fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Trophy size={18} style={{ color: '#f59e0b' }} /> High Scores
              </h3>
              {highScores.slice(0, 5).map((s, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '0.5rem 0', borderBottom: i < 4 ? '1px solid #1e293b' : 'none',
                  fontSize: '0.9rem'
                }}>
                  <span style={{ color: '#94a3b8' }}>
                    #{i + 1} <span style={{ color: DIFFICULTY_COLOURS[s.difficulty], fontWeight: 600 }}>{DIFFICULTY_LABELS[s.difficulty]}</span>
                  </span>
                  <span style={{ fontWeight: 700, color: '#f1f5f9' }}>{s.score} pts</span>
                  <span style={{ color: '#64748b', fontSize: '0.8rem' }}>{new Date(s.date).toLocaleDateString()}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        </GameWrapper>
      </div>
    );
  }

  // PLAYING
  if (screen === 'playing' && currentPassage) {
    const totalTargets = currentPassage.targets.length;
    const foundCount = foundTargets.length;
    const progress = totalTargets > 0 ? (foundCount / totalTargets) * 100 : 0;

    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
        <Navbar />
        <GameWrapper gameId="technique-spotter">
        <div style={{ maxWidth: 750, margin: '0 auto', padding: '2rem 1rem' }}>
          {/* Header bar */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: '1rem', flexWrap: 'wrap', gap: 12
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Round {roundIndex + 1}/{rounds.length}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#f59e0b', fontWeight: 700 }}>
                <Star size={16} /> {score}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#94a3b8', fontSize: '0.85rem' }}>
              <Clock size={14} /> {Math.floor(elapsed / 60)}:{String(elapsed % 60).padStart(2, '0')}
            </div>
          </div>

          {/* Technique prompt */}
          <div style={{
            background: 'linear-gradient(135deg, #312e81, #1e1b4b)', borderRadius: 12,
            padding: '1rem 1.5rem', marginBottom: '1rem', textAlign: 'center',
            border: '1px solid #4338ca'
          }}>
            <p style={{ fontSize: '0.85rem', color: '#a5b4fc', marginBottom: 4 }}>Find the</p>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#e0e7ff', letterSpacing: 1 }}>
              {techniqueLabel}
            </h2>
          </div>

          {/* Progress bar */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94a3b8', marginBottom: 4 }}>
              <span>Found: {foundCount}/{totalTargets}</span>
              {mistakes > 0 && <span style={{ color: '#f87171' }}>Mistakes: {mistakes}</span>}
            </div>
            <div style={{ background: '#1e293b', borderRadius: 8, height: 8, overflow: 'hidden' }}>
              <div style={{
                height: '100%', borderRadius: 8,
                background: progress === 100 ? '#22c55e' : 'linear-gradient(90deg, #6366f1, #818cf8)',
                width: `${progress}%`, transition: 'width 0.3s'
              }} />
            </div>
          </div>

          {/* Passage */}
          {renderPassage()}

          {/* Explanations panel */}
          {showExplanations && (
            <div style={{
              background: '#111827', borderRadius: 12, padding: '1.25rem',
              border: '1px solid #1e293b', marginBottom: '1.5rem'
            }}>
              <h3 style={{ fontWeight: 700, marginBottom: '1rem', color: '#a5b4fc' }}>Explanations</h3>
              {currentPassage.targets.map((t, i) => (
                <div key={i} style={{
                  marginBottom: '0.75rem', padding: '0.75rem',
                  background: '#0f172a', borderRadius: 8, border: '1px solid #1e293b'
                }}>
                  <span style={{ color: '#4ade80', fontWeight: 700, fontSize: '0.9rem' }}>
                    "{t.text}"
                  </span>
                  {t.technique && (
                    <span style={{ color: '#818cf8', fontSize: '0.8rem', marginLeft: 8, fontWeight: 600 }}>
                      [{t.technique}]
                    </span>
                  )}
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: 4 }}>{t.explanation}</p>
                </div>
              ))}
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <button
                  onClick={nextRound}
                  style={{
                    padding: '0.75rem 2rem', borderRadius: 10, border: 'none',
                    background: 'linear-gradient(135deg, #6366f1, #818cf8)', color: '#fff',
                    fontWeight: 700, cursor: 'pointer', display: 'inline-flex',
                    alignItems: 'center', gap: 8
                  }}
                >
                  {roundIndex + 1 >= rounds.length ? 'See Results' : 'Next Passage'} <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
        </GameWrapper>
      </div>
    );
  }

  // RESULTS
  if (screen === 'results') {
    const grade = score >= 2000 ? 'S' : score >= 1500 ? 'A' : score >= 1000 ? 'B' : score >= 500 ? 'C' : 'D';
    const gradeColour = { S: '#f59e0b', A: '#22c55e', B: '#60a5fa', C: '#a78bfa', D: '#94a3b8' }[grade];

    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
        <Navbar />
        <GameWrapper gameId="technique-spotter">
        <div style={{ maxWidth: 550, margin: '0 auto', padding: '3rem 1rem', textAlign: 'center' }}>
          <Award size={64} style={{ color: gradeColour, marginBottom: '1rem' }} />
          <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Game Over!</h1>

          <div style={{
            fontSize: '4rem', fontWeight: 900, color: gradeColour,
            marginBottom: '0.5rem', lineHeight: 1
          }}>
            {grade}
          </div>

          <div style={{
            background: '#111827', borderRadius: 12, padding: '1.25rem',
            border: '1px solid #1e293b', marginBottom: '2rem', textAlign: 'left'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #1e293b' }}>
              <span style={{ color: '#94a3b8' }}>Score</span>
              <span style={{ fontWeight: 700 }}>{score} pts</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #1e293b' }}>
              <span style={{ color: '#94a3b8' }}>Time</span>
              <span style={{ fontWeight: 700 }}>{Math.floor(elapsed / 60)}:{String(elapsed % 60).padStart(2, '0')}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #1e293b' }}>
              <span style={{ color: '#94a3b8' }}>Mistakes</span>
              <span style={{ fontWeight: 700, color: mistakes > 0 ? '#f87171' : '#4ade80' }}>{mistakes}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
              <span style={{ color: '#94a3b8' }}>Difficulty</span>
              <span style={{ fontWeight: 700, color: DIFFICULTY_COLOURS[difficulty] }}>{DIFFICULTY_LABELS[difficulty]}</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={startGame}
              style={{
                padding: '0.75rem 1.5rem', borderRadius: 10, border: 'none',
                background: 'linear-gradient(135deg, #6366f1, #818cf8)', color: '#fff',
                fontWeight: 700, cursor: 'pointer', display: 'inline-flex',
                alignItems: 'center', gap: 8
              }}
            >
              <RotateCcw size={16} /> Play Again
            </button>
            <button
              onClick={() => setScreen('menu')}
              style={{
                padding: '0.75rem 1.5rem', borderRadius: 10,
                border: '1px solid #334155', background: '#111827', color: '#e2e8f0',
                fontWeight: 700, cursor: 'pointer'
              }}
            >
              Main Menu
            </button>
          </div>
        </div>
        </GameWrapper>
      </div>
    );
  }

  // Fallback
  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />
      <GameWrapper gameId="technique-spotter">
      <div style={{ padding: '3rem', textAlign: 'center' }}>
        <p>Loading...</p>
      </div>
      </GameWrapper>
    </div>
  );
}
