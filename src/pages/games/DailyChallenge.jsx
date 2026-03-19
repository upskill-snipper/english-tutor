import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Trophy, Flame, CheckCircle, XCircle, Star, Clock, Award } from 'lucide-react';
import GameWrapper from '../../components/GameWrapper';
import Navbar from '../../components/Navbar';

// ── Question Pool (60+ questions across 5 categories) ──────────────────────

const QUESTIONS = [
  // ── Vocabulary (12) ──
  { category: 'Vocabulary', question: "What does 'ubiquitous' mean?", options: ['Rare', 'Found everywhere', 'Mysterious', 'Ancient'], answer: 1 },
  { category: 'Vocabulary', question: "What does 'ephemeral' mean?", options: ['Lasting forever', 'Short-lived', 'Invisible', 'Enormous'], answer: 1 },
  { category: 'Vocabulary', question: "What is a synonym for 'benevolent'?", options: ['Cruel', 'Kind', 'Wealthy', 'Timid'], answer: 1 },
  { category: 'Vocabulary', question: "What does 'pernicious' mean?", options: ['Helpful', 'Beautiful', 'Harmful', 'Boring'], answer: 2 },
  { category: 'Vocabulary', question: "What does 'juxtaposition' mean in English?", options: ['Placing side by side for contrast', 'A type of metaphor', 'A grammatical error', 'A poetic rhythm'], answer: 0 },
  { category: 'Vocabulary', question: "What does 'ambiguous' mean?", options: ['Clear', 'Open to interpretation', 'Angry', 'Quiet'], answer: 1 },
  { category: 'Vocabulary', question: "What is the meaning of 'eloquent'?", options: ['Silent', 'Fluent and persuasive', 'Confused', 'Hostile'], answer: 1 },
  { category: 'Vocabulary', question: "What does 'pragmatic' mean?", options: ['Idealistic', 'Practical and realistic', 'Dramatic', 'Poetic'], answer: 1 },
  { category: 'Vocabulary', question: "What does 'resilient' mean?", options: ['Fragile', 'Able to recover quickly', 'Aggressive', 'Lazy'], answer: 1 },
  { category: 'Vocabulary', question: "What is a synonym for 'meticulous'?", options: ['Careless', 'Thorough', 'Quick', 'Loud'], answer: 1 },
  { category: 'Vocabulary', question: "What does 'ostentatious' mean?", options: ['Humble', 'Showy and pretentious', 'Quiet', 'Angry'], answer: 1 },
  { category: 'Vocabulary', question: "What does 'candid' mean?", options: ['Secretive', 'Truthful and direct', 'Shy', 'Artistic'], answer: 1 },

  // ── Grammar (12) ──
  { category: 'Grammar', question: "Which sentence uses the correct form?", options: ["Its a lovely day", "It's a lovely day", "Its' a lovely day", "Its's a lovely day"], answer: 1 },
  { category: 'Grammar', question: "What is the plural of 'phenomenon'?", options: ['Phenomenons', 'Phenomena', 'Phenomeni', 'Phenomenae'], answer: 1 },
  { category: 'Grammar', question: "Which is correct?", options: ["Who's book is this?", "Whose book is this?", "Whom's book is this?", "Whos book is this?"], answer: 1 },
  { category: 'Grammar', question: "Identify the subordinate conjunction:", options: ['And', 'But', 'Although', 'Or'], answer: 2 },
  { category: 'Grammar', question: "'She could of gone' — what is wrong?", options: ['Nothing', "'of' should be 'have'", "'gone' should be 'went'", "'could' should be 'can'"], answer: 1 },
  { category: 'Grammar', question: "What is a split infinitive?", options: ['An infinitive cut in two sentences', 'A word placed between to and the verb', 'A verb without a subject', 'Two infinitives joined'], answer: 1 },
  { category: 'Grammar', question: "Which sentence is in the subjunctive mood?", options: ['She was happy', 'If I were you', 'He is running', 'They went home'], answer: 1 },
  { category: 'Grammar', question: "What type of word is 'however' in: 'However, she tried again'?", options: ['Conjunction', 'Conjunctive adverb', 'Preposition', 'Pronoun'], answer: 1 },
  { category: 'Grammar', question: "'The team are playing well' uses which agreement?", options: ['Singular', 'Plural (notional agreement)', 'Neither', 'Both'], answer: 1 },
  { category: 'Grammar', question: "A dangling modifier is:", options: ['A misplaced descriptive phrase', 'A type of verb', 'An extra comma', 'A run-on sentence'], answer: 0 },
  { category: 'Grammar', question: "Which is a compound-complex sentence?", options: ['She ran.', 'She ran and he walked.', 'Although it rained, she ran and he walked.', 'Although it rained, she ran.'], answer: 2 },
  { category: 'Grammar', question: "What is an appositive?", options: ['A type of verb', 'A noun phrase that renames another noun', 'An adverb clause', 'A dangling modifier'], answer: 1 },

  // ── Literary Techniques (12) ──
  { category: 'Literary Techniques', question: "'The fog crept in on little cat feet' uses which technique?", options: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'], answer: 1 },
  { category: 'Literary Techniques', question: "What technique is 'as cold as ice'?", options: ['Metaphor', 'Simile', 'Personification', 'Alliteration'], answer: 1 },
  { category: 'Literary Techniques', question: "'I died of embarrassment' is an example of?", options: ['Irony', 'Litotes', 'Hyperbole', 'Euphemism'], answer: 2 },
  { category: 'Literary Techniques', question: "When weather reflects a character's mood, it is called?", options: ['Symbolism', 'Pathetic fallacy', 'Foreshadowing', 'Imagery'], answer: 1 },
  { category: 'Literary Techniques', question: "'Bitter sweet' is an example of?", options: ['Paradox', 'Oxymoron', 'Antithesis', 'Irony'], answer: 1 },
  { category: 'Literary Techniques', question: "Repeating the first word(s) of successive clauses is?", options: ['Epistrophe', 'Anaphora', 'Parallelism', 'Refrain'], answer: 1 },
  { category: 'Literary Techniques', question: "A narrative that works on two levels (literal and symbolic) is?", options: ['Metaphor', 'Allegory', 'Fable', 'Myth'], answer: 1 },
  { category: 'Literary Techniques', question: "'The stars danced in the sky' uses?", options: ['Simile', 'Alliteration', 'Personification', 'Onomatopoeia'], answer: 2 },
  { category: 'Literary Techniques', question: "Giving animals human characteristics is specifically?", options: ['Personification', 'Anthropomorphism', 'Zoomorphism', 'Allegory'], answer: 1 },
  { category: 'Literary Techniques', question: "What is an extended metaphor?", options: ['A very long simile', 'A metaphor sustained across several lines', 'Two metaphors combined', 'A metaphor with alliteration'], answer: 1 },
  { category: 'Literary Techniques', question: "A sudden shift in a sonnet is called a?", options: ['Caesura', 'Enjambment', 'Volta', 'Couplet'], answer: 2 },
  { category: 'Literary Techniques', question: "'Silence was deafening' is an example of?", options: ['Simile', 'Oxymoron', 'Litotes', 'Metonymy'], answer: 1 },

  // ── Quote Identification (12) ──
  { category: 'Quote Identification', question: "Who said 'To be, or not to be'?", options: ['Macbeth', 'Hamlet', 'Romeo', 'Othello'], answer: 1 },
  { category: 'Quote Identification', question: "'It is a truth universally acknowledged...' opens which novel?", options: ['Jane Eyre', 'Wuthering Heights', 'Pride and Prejudice', 'Emma'], answer: 2 },
  { category: 'Quote Identification', question: "Who says 'Is this a dagger which I see before me'?", options: ['Banquo', 'Lady Macbeth', 'Macduff', 'Macbeth'], answer: 3 },
  { category: 'Quote Identification', question: "'All animals are equal, but some are more equal than others' is from?", options: ['1984', 'Animal Farm', 'Brave New World', 'Lord of the Flies'], answer: 1 },
  { category: 'Quote Identification', question: "'Big Brother is watching you' is from?", options: ['Animal Farm', 'Fahrenheit 451', '1984', 'The Handmaid\'s Tale'], answer: 2 },
  { category: 'Quote Identification', question: "Who wrote 'I wandered lonely as a cloud'?", options: ['Keats', 'Shelley', 'Byron', 'Wordsworth'], answer: 3 },
  { category: 'Quote Identification', question: "'Et tu, Brute?' is from which Shakespeare play?", options: ['Hamlet', 'Macbeth', 'Julius Caesar', 'Othello'], answer: 2 },
  { category: 'Quote Identification', question: "'It was the best of times, it was the worst of times' opens?", options: ['Great Expectations', 'Oliver Twist', 'A Christmas Carol', 'A Tale of Two Cities'], answer: 3 },
  { category: 'Quote Identification', question: "Who says 'Out, damned spot! Out, I say!'?", options: ['Macbeth', 'Lady Macbeth', 'The Porter', 'Banquo'], answer: 1 },
  { category: 'Quote Identification', question: "'The lady doth protest too much' is from?", options: ['Macbeth', 'Romeo and Juliet', 'Hamlet', 'Othello'], answer: 2 },
  { category: 'Quote Identification', question: "'Call me Ishmael' opens which novel?", options: ['Treasure Island', 'Robinson Crusoe', 'Moby-Dick', 'The Old Man and the Sea'], answer: 2 },
  { category: 'Quote Identification', question: "Who wrote 'My Last Duchess'?", options: ['Tennyson', 'Robert Browning', 'Shelley', 'Keats'], answer: 1 },

  // ── Comprehension (12) ──
  { category: 'Comprehension', question: "What does 'reading between the lines' mean?", options: ['Speed reading', 'Understanding implied meaning', 'Skipping paragraphs', 'Reading aloud'], answer: 1 },
  { category: 'Comprehension', question: "An unreliable narrator is one who?", options: ['Cannot read', 'Cannot be fully trusted', 'Speaks in third person', 'Uses dialect'], answer: 1 },
  { category: 'Comprehension', question: "What is the purpose of a topic sentence?", options: ['To end a paragraph', 'To introduce the main idea', 'To provide evidence', 'To summarise the essay'], answer: 1 },
  { category: 'Comprehension', question: "What does PEE stand for in essay writing?", options: ['Point, Evidence, Explain', 'Plan, Edit, Evaluate', 'Predict, Examine, Explore', 'Paragraph, Essay, Extract'], answer: 0 },
  { category: 'Comprehension', question: "What is inference in reading?", options: ['Copying text directly', 'Drawing conclusions from evidence', 'Summarising a chapter', 'Identifying the author'], answer: 1 },
  { category: 'Comprehension', question: "A bildungsroman is a novel about?", options: ['War', 'Coming of age', 'A detective', 'The future'], answer: 1 },
  { category: 'Comprehension', question: "What is the denouement of a story?", options: ['The opening', 'The climax', 'The final resolution', 'The rising action'], answer: 2 },
  { category: 'Comprehension', question: "In media res means starting a story?", options: ['At the beginning', 'At the end', 'In the middle of action', 'With a flashback'], answer: 2 },
  { category: 'Comprehension', question: "What is the difference between theme and motif?", options: ['They are the same', 'Theme is the message; motif is a recurring element', 'Motif is the message; theme is a symbol', 'Theme is in poetry only'], answer: 1 },
  { category: 'Comprehension', question: "What is dramatic irony?", options: ['When a character is sarcastic', 'When the audience knows more than characters', 'When the outcome is unexpected', 'When the narrator lies'], answer: 1 },
  { category: 'Comprehension', question: "A foil character serves to?", options: ['Narrate the story', 'Contrast with another character', 'Provide comic relief', 'Resolve the conflict'], answer: 1 },
  { category: 'Comprehension', question: "What is the effect of short, simple sentences in prose?", options: ['They slow the pace', 'They create tension or impact', 'They confuse the reader', 'They add description'], answer: 1 },
];

// ── Deterministic seeded random (date-based) ──────────────────────────────

function seededRandom(seed) {
  let s = seed;
  return function () {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function getDateSeed(dateStr) {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) || 1;
}

function getDailyQuestions(dateStr) {
  const rng = seededRandom(getDateSeed(dateStr));
  const indices = QUESTIONS.map((_, i) => i);
  // Fisher-Yates with seeded random
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices.slice(0, 10).map(i => QUESTIONS[i]);
}

function getTodayStr() {
  return new Date().toISOString().slice(0, 10);
}

function formatDisplayDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

// ── Streak helpers ────────────────────────────────────────────────────────

function getStreak() {
  try {
    return parseInt(localStorage.getItem('lr_daily_streak'), 10) || 0;
  } catch { return 0; }
}

function getBestStreak() {
  try {
    return parseInt(localStorage.getItem('lr_daily_best_streak'), 10) || 0;
  } catch { return 0; }
}

function getCompletionData(dateStr) {
  try {
    const raw = localStorage.getItem(`lr_daily_completed_${dateStr}`);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function wasYesterdayCompleted() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = yesterday.toISOString().slice(0, 10);
  return !!getCompletionData(yStr);
}

function saveCompletion(dateStr, data) {
  localStorage.setItem(`lr_daily_completed_${dateStr}`, JSON.stringify(data));

  // Update streak
  let streak = getStreak();
  const yesterdayDone = wasYesterdayCompleted();
  const todayAlreadyDone = !!getCompletionData(dateStr);

  if (!todayAlreadyDone) {
    streak = yesterdayDone ? streak + 1 : 1;
  }

  localStorage.setItem('lr_daily_streak', String(streak));
  const best = getBestStreak();
  if (streak > best) {
    localStorage.setItem('lr_daily_best_streak', String(streak));
  }
}

// ── Component ─────────────────────────────────────────────────────────────

const cardBg = 'rgba(255,255,255,0.04)';
const borderCol = 'rgba(255,255,255,0.08)';

export default function DailyChallenge() {
  const today = getTodayStr();
  const questions = useMemo(() => getDailyQuestions(today), [today]);

  const [phase, setPhase] = useState('intro'); // intro | playing | review | completed
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState([]); // array of chosen indices
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [streak, setStreak] = useState(getStreak());
  const [bestStreak, setBestStreak] = useState(getBestStreak());
  const [completionData, setCompletionData] = useState(null);

  // Check if already completed today
  useEffect(() => {
    const existing = getCompletionData(today);
    if (existing) {
      setCompletionData(existing);
      setAnswers(existing.answers || []);
      setPhase('completed');
    }
    setStreak(getStreak());
    setBestStreak(getBestStreak());
  }, [today]);

  const score = useMemo(() => {
    if (!completionData) return 0;
    return completionData.score;
  }, [completionData]);

  const handleSelect = (optIdx) => {
    if (showFeedback) return;
    setSelected(optIdx);
    setShowFeedback(true);

    setTimeout(() => {
      const newAnswers = [...answers, optIdx];
      setAnswers(newAnswers);

      if (qIndex + 1 < questions.length) {
        setQIndex(qi => qi + 1);
        setSelected(null);
        setShowFeedback(false);
      } else {
        // Calculate score
        const finalScore = newAnswers.reduce((acc, ans, i) => acc + (ans === questions[i].answer ? 1 : 0), 0);
        const data = { score: finalScore, total: 10, answers: newAnswers, date: today };
        saveCompletion(today, data);
        setCompletionData(data);
        setStreak(getStreak());
        setBestStreak(getBestStreak());
        setPhase('review');
      }
    }, 1200);
  };

  const currentQ = questions[qIndex];

  const containerStyle = {
    minHeight: '100vh',
    background: '#0a0e1a',
    color: '#f1f5f9',
  };

  return (
    <GameWrapper gameId="daily-challenge" gameName="Daily Challenge">
      <div style={containerStyle}>
        <Navbar />
        <main id="main-content" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1.5rem' }}>
          <Link to="/games" style={{ color: '#10b981', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            <ArrowLeft size={16} /> Back to Games
          </Link>

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'linear-gradient(135deg, #10b981, #059669)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Calendar size={24} color="white" />
            </div>
            <div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: 0 }}>Daily Challenge</h1>
              <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>A fresh set of 10 questions every day</p>
            </div>
          </div>

          {/* Date banner */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(52,211,153,0.05))',
            border: '1px solid rgba(16,185,129,0.2)',
            borderRadius: 12,
            padding: '0.75rem 1.25rem',
            marginBottom: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={16} color="#34d399" />
              <span style={{ fontWeight: 600, color: '#34d399' }}>{formatDisplayDate(today)}</span>
            </div>
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <Flame size={16} color="#f59e0b" />
                <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{streak} day streak</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <Award size={16} color="#8b5cf6" />
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#94a3b8' }}>Best: {bestStreak}</span>
              </div>
            </div>
          </div>

          {/* ── INTRO PHASE ── */}
          {phase === 'intro' && (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{
                  width: 100, height: 100, borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(52,211,153,0.08))',
                  border: '2px solid rgba(16,185,129,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto',
                }}>
                  <Star size={48} color="#34d399" />
                </div>
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Today's Challenge Awaits</h2>
              <p style={{ color: '#94a3b8', marginBottom: '0.5rem', maxWidth: 450, margin: '0 auto 0.5rem' }}>
                10 questions covering vocabulary, grammar, literary techniques, famous quotes, and comprehension.
              </p>
              <p style={{ color: '#64748b', marginBottom: '2rem', fontSize: '0.85rem' }}>
                Everyone gets the same questions today. How will you compare?
              </p>
              <button onClick={() => setPhase('playing')} style={{
                background: 'linear-gradient(135deg, #10b981, #059669)',
                color: '#fff', border: 'none', padding: '1rem 3rem', borderRadius: 12,
                fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(16,185,129,0.4)',
                transition: 'transform 0.15s',
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                Begin Challenge
              </button>
            </div>
          )}

          {/* ── PLAYING PHASE ── */}
          {phase === 'playing' && currentQ && (
            <div>
              {/* Progress bar */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600 }}>
                    Question {qIndex + 1} of 10
                  </span>
                  <span style={{
                    fontSize: '0.75rem', color: '#10b981',
                    background: 'rgba(16,185,129,0.1)',
                    padding: '0.25rem 0.75rem', borderRadius: 20, fontWeight: 600,
                  }}>
                    {currentQ.category}
                  </span>
                </div>
                <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', borderRadius: 3,
                    width: `${((qIndex) / 10) * 100}%`,
                    background: 'linear-gradient(90deg, #10b981, #34d399)',
                    transition: 'width 0.4s ease',
                  }} />
                </div>
              </div>

              {/* Question card */}
              <div style={{
                background: cardBg,
                border: `1px solid ${borderCol}`,
                borderRadius: 16, padding: '2rem',
                marginBottom: '1rem',
              }}>
                <p style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '1.75rem', lineHeight: 1.5 }}>
                  {currentQ.question}
                </p>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  {currentQ.options.map((opt, i) => {
                    const isCorrect = i === currentQ.answer;
                    const isSelected = selected === i;
                    let bg = 'rgba(255,255,255,0.06)';
                    let border = 'rgba(255,255,255,0.1)';
                    let color = '#f1f5f9';

                    if (showFeedback) {
                      if (isCorrect) {
                        bg = 'rgba(16,185,129,0.15)';
                        border = 'rgba(16,185,129,0.5)';
                        color = '#34d399';
                      } else if (isSelected && !isCorrect) {
                        bg = 'rgba(239,68,68,0.15)';
                        border = 'rgba(239,68,68,0.5)';
                        color = '#f87171';
                      }
                    }

                    return (
                      <button key={i} onClick={() => handleSelect(i)} style={{
                        background: bg,
                        border: `1px solid ${border}`,
                        color,
                        padding: '1rem 1.25rem',
                        borderRadius: 10,
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        cursor: showFeedback ? 'default' : 'pointer',
                        transition: 'all 0.2s',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                      }}
                      onMouseOver={e => { if (!showFeedback) { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'; } }}
                      onMouseOut={e => { if (!showFeedback) { e.currentTarget.style.background = bg; e.currentTarget.style.borderColor = border; } }}
                      >
                        <span style={{
                          width: 28, height: 28, borderRadius: '50%',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: showFeedback && isCorrect ? 'rgba(16,185,129,0.2)' : showFeedback && isSelected && !isCorrect ? 'rgba(239,68,68,0.2)' : 'rgba(255,255,255,0.08)',
                          fontSize: '0.8rem', fontWeight: 700, flexShrink: 0,
                          color: showFeedback && isCorrect ? '#34d399' : showFeedback && isSelected && !isCorrect ? '#f87171' : '#64748b',
                        }}>
                          {showFeedback && isCorrect ? <CheckCircle size={16} /> : showFeedback && isSelected && !isCorrect ? <XCircle size={16} /> : String.fromCharCode(65 + i)}
                        </span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Score so far */}
              <div style={{ textAlign: 'center', color: '#64748b', fontSize: '0.85rem' }}>
                {answers.filter((a, i) => a === questions[i].answer).length} / {answers.length} correct so far
              </div>
            </div>
          )}

          {/* ── REVIEW PHASE (just finished) ── */}
          {(phase === 'review' || phase === 'completed') && completionData && (
            <div>
              {/* Results banner */}
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                background: cardBg,
                border: `1px solid ${borderCol}`,
                borderRadius: 16,
                marginBottom: '2rem',
              }}>
                {phase === 'completed' && (
                  <div style={{
                    background: 'rgba(16,185,129,0.1)',
                    border: '1px solid rgba(16,185,129,0.2)',
                    borderRadius: 10,
                    padding: '0.75rem',
                    marginBottom: '1.5rem',
                    color: '#34d399',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                  }}>
                    You have already completed today's challenge. Come back tomorrow!
                  </div>
                )}

                <div style={{ marginBottom: '1rem' }}>
                  <Trophy size={40} color={completionData.score >= 8 ? '#f59e0b' : completionData.score >= 5 ? '#10b981' : '#64748b'} />
                </div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                  {completionData.score} / 10
                </h2>
                <p style={{ color: '#94a3b8', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  {completionData.score === 10 ? 'Perfect score! Incredible!' :
                   completionData.score >= 8 ? 'Excellent work!' :
                   completionData.score >= 6 ? 'Great effort!' :
                   completionData.score >= 4 ? 'Good try — keep practising!' :
                   'Keep going — every day is a chance to improve!'}
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <Flame size={20} color="#f59e0b" style={{ marginBottom: 4 }} />
                    <div style={{ fontWeight: 800, fontSize: '1.25rem' }}>{streak}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Day Streak</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <Award size={20} color="#8b5cf6" style={{ marginBottom: 4 }} />
                    <div style={{ fontWeight: 800, fontSize: '1.25rem' }}>{bestStreak}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Best Streak</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <Star size={20} color="#10b981" style={{ marginBottom: 4 }} />
                    <div style={{ fontWeight: 800, fontSize: '1.25rem' }}>{completionData.score * 10}%</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Accuracy</div>
                  </div>
                </div>
              </div>

              {/* Question review */}
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>Review Answers</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {questions.map((q, i) => {
                  const userAnswer = completionData.answers[i];
                  const isCorrect = userAnswer === q.answer;
                  return (
                    <div key={i} style={{
                      background: isCorrect ? 'rgba(16,185,129,0.05)' : 'rgba(239,68,68,0.05)',
                      border: `1px solid ${isCorrect ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)'}`,
                      borderRadius: 12,
                      padding: '1rem 1.25rem',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <div style={{ marginTop: 2, flexShrink: 0 }}>
                          {isCorrect
                            ? <CheckCircle size={18} color="#10b981" />
                            : <XCircle size={18} color="#ef4444" />
                          }
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 600, marginBottom: '0.375rem', fontSize: '0.95rem' }}>{q.question}</div>
                          {isCorrect ? (
                            <div style={{ fontSize: '0.85rem', color: '#34d399' }}>
                              {q.options[q.answer]}
                            </div>
                          ) : (
                            <div style={{ fontSize: '0.85rem' }}>
                              <span style={{ color: '#f87171', textDecoration: 'line-through' }}>{q.options[userAnswer]}</span>
                              <span style={{ color: '#64748b', margin: '0 0.5rem' }}>&rarr;</span>
                              <span style={{ color: '#34d399' }}>{q.options[q.answer]}</span>
                            </div>
                          )}
                          <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>{q.category}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </main>

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
      </div>
    </GameWrapper>
  );
}
