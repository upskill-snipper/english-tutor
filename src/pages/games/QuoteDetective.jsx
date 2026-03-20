import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { RotateCcw, Trophy, Search, BookOpen, Filter, ChevronRight, Star, Target, Eye, Award, CheckCircle, XCircle } from 'lucide-react';
import Navbar from '../../components/Navbar';
import GameWrapper from '../../components/GameWrapper';
import Lauren from '../../components/Lauren';
import { recordGamePlayed } from '../../utils/gameUtils';

/* ───────────────────────── QUOTE DATA (50+ quotes) ───────────────────────── */

const QUOTES = [
  // ── Macbeth ──────────────────────────────────────────────────
  { quote: "Fair is foul, and foul is fair.", text: "Macbeth", character: "The Witches", technique: "chiasmus", context: "Act 1 Scene 1", boards: ["AQA", "Edexcel", "OCR", "WJEC"] },
  { quote: "Yet do I fear thy nature; It is too full o' the milk of human kindness.", text: "Macbeth", character: "Lady Macbeth", technique: "metaphor", context: "Act 1 Scene 5", boards: ["AQA", "Edexcel", "OCR", "WJEC"] },
  { quote: "Look like the innocent flower, But be the serpent under't.", text: "Macbeth", character: "Lady Macbeth", technique: "simile", context: "Act 1 Scene 5", boards: ["AQA", "Edexcel", "OCR", "WJEC"] },
  { quote: "Is this a dagger which I see before me, The handle toward my hand?", text: "Macbeth", character: "Macbeth", technique: "rhetorical question", context: "Act 2 Scene 1", boards: ["AQA", "Edexcel", "OCR", "WJEC"] },
  { quote: "Will all great Neptune's ocean wash this blood clean from my hand?", text: "Macbeth", character: "Macbeth", technique: "hyperbole", context: "Act 2 Scene 2", boards: ["AQA", "Edexcel", "OCR", "WJEC"] },
  { quote: "Unsex me here, And fill me from the crown to the toe top-full of direst cruelty.", text: "Macbeth", character: "Lady Macbeth", technique: "imperative", context: "Act 1 Scene 5", boards: ["AQA", "Edexcel", "OCR", "WJEC"] },
  { quote: "Out, damned spot! out, I say!", text: "Macbeth", character: "Lady Macbeth", technique: "exclamatory", context: "Act 5 Scene 1", boards: ["AQA", "Edexcel", "OCR", "WJEC"] },
  { quote: "Life's but a walking shadow, a poor player that struts and frets his hour upon the stage.", text: "Macbeth", character: "Macbeth", technique: "metaphor", context: "Act 5 Scene 5", boards: ["AQA", "Edexcel", "OCR", "WJEC"] },
  { quote: "Stars, hide your fires; Let not light see my black and deep desires.", text: "Macbeth", character: "Macbeth", technique: "apostrophe", context: "Act 1 Scene 4", boards: ["AQA", "Edexcel", "OCR", "WJEC"] },
  { quote: "Double, double toil and trouble; Fire burn and cauldron bubble.", text: "Macbeth", character: "The Witches", technique: "rhyming couplet", context: "Act 4 Scene 1", boards: ["AQA", "Edexcel", "OCR", "WJEC"] },
  { quote: "I have no spur to prick the sides of my intent, but only vaulting ambition.", text: "Macbeth", character: "Macbeth", technique: "metaphor", context: "Act 1 Scene 7", boards: ["AQA", "Edexcel", "OCR", "WJEC"] },

  // ── An Inspector Calls ──────────────────────────────────────
  { quote: "We are members of one body. We are responsible for each other.", text: "An Inspector Calls", character: "Inspector Goole", technique: "repetition", context: "Act 3", boards: ["AQA", "WJEC"] },
  { quote: "If men will not learn that lesson, then they will be taught it in fire and blood and anguish.", text: "An Inspector Calls", character: "Inspector Goole", technique: "triad", context: "Act 3", boards: ["AQA", "WJEC"] },
  { quote: "But these girls aren't cheap labour — they're people.", text: "An Inspector Calls", character: "Sheila Birling", technique: "antithesis", context: "Act 1", boards: ["AQA", "WJEC"] },
  { quote: "The Titanic — she sails next week... unsinkable, absolutely unsinkable.", text: "An Inspector Calls", character: "Mr Birling", technique: "dramatic irony", context: "Act 1", boards: ["AQA", "WJEC"] },
  { quote: "A man has to make his own way — has to look after himself.", text: "An Inspector Calls", character: "Mr Birling", technique: "declarative", context: "Act 1", boards: ["AQA", "WJEC"] },
  { quote: "You're not the kind of father a chap could go to when he's in trouble.", text: "An Inspector Calls", character: "Eric Birling", technique: "direct address", context: "Act 3", boards: ["AQA", "WJEC"] },
  { quote: "I accept no blame for it at all.", text: "An Inspector Calls", character: "Mrs Birling", technique: "declarative", context: "Act 2", boards: ["AQA", "WJEC"] },
  { quote: "The girl's dead and we all helped to kill her — and that's what matters.", text: "An Inspector Calls", character: "Sheila Birling", technique: "emotive language", context: "Act 3", boards: ["AQA", "WJEC"] },

  // ── A Christmas Carol ───────────────────────────────────────
  { quote: "Are there no prisons? Are there no workhouses?", text: "A Christmas Carol", character: "Scrooge", technique: "rhetorical question", context: "Stave 1", boards: ["AQA", "Edexcel", "OCR"] },
  { quote: "I wear the chain I forged in life. I made it link by link, and yard by yard.", text: "A Christmas Carol", character: "Jacob Marley", technique: "metaphor", context: "Stave 1", boards: ["AQA", "Edexcel", "OCR"] },
  { quote: "Mankind was my business!", text: "A Christmas Carol", character: "Jacob Marley", technique: "exclamatory", context: "Stave 1", boards: ["AQA", "Edexcel", "OCR"] },
  { quote: "If they would rather die, they had better do it, and decrease the surplus population.", text: "A Christmas Carol", character: "Scrooge", technique: "callous tone", context: "Stave 1", boards: ["AQA", "Edexcel", "OCR"] },
  { quote: "I am as light as a feather, I am as happy as an angel, I am as merry as a schoolboy.", text: "A Christmas Carol", character: "Scrooge", technique: "simile", context: "Stave 5", boards: ["AQA", "Edexcel", "OCR"] },
  { quote: "This boy is Ignorance. This girl is Want. Beware them both.", text: "A Christmas Carol", character: "Ghost of Christmas Present", technique: "allegory", context: "Stave 3", boards: ["AQA", "Edexcel", "OCR"] },
  { quote: "He was a tight-fisted hand at the grindstone, Scrooge!", text: "A Christmas Carol", character: "Narrator", technique: "metaphor", context: "Stave 1", boards: ["AQA", "Edexcel", "OCR"] },
  { quote: "God bless us, every one!", text: "A Christmas Carol", character: "Tiny Tim", technique: "exclamatory", context: "Stave 3", boards: ["AQA", "Edexcel", "OCR"] },
  { quote: "I will honour Christmas in my heart, and try to keep it all the year.", text: "A Christmas Carol", character: "Scrooge", technique: "declarative", context: "Stave 4", boards: ["AQA", "Edexcel", "OCR"] },

  // ── Romeo & Juliet ──────────────────────────────────────────
  { quote: "O Romeo, Romeo! Wherefore art thou Romeo?", text: "Romeo & Juliet", character: "Juliet", technique: "apostrophe", context: "Act 2 Scene 2", boards: ["AQA", "Edexcel", "OCR", "WJEC"] },
  { quote: "But soft, what light through yonder window breaks? It is the east, and Juliet is the sun.", text: "Romeo & Juliet", character: "Romeo", technique: "metaphor", context: "Act 2 Scene 2", boards: ["AQA", "Edexcel", "OCR", "WJEC"] },
  { quote: "A plague o' both your houses!", text: "Romeo & Juliet", character: "Mercutio", technique: "exclamatory", context: "Act 3 Scene 1", boards: ["AQA", "Edexcel", "OCR", "WJEC"] },
  { quote: "These violent delights have violent ends.", text: "Romeo & Juliet", character: "Friar Lawrence", technique: "foreshadowing", context: "Act 2 Scene 6", boards: ["AQA", "Edexcel", "OCR", "WJEC"] },
  { quote: "My only love sprung from my only hate!", text: "Romeo & Juliet", character: "Juliet", technique: "oxymoron", context: "Act 1 Scene 5", boards: ["AQA", "Edexcel", "OCR", "WJEC"] },
  { quote: "A pair of star-cross'd lovers take their life.", text: "Romeo & Juliet", character: "Chorus", technique: "foreshadowing", context: "Prologue", boards: ["AQA", "Edexcel", "OCR", "WJEC"] },
  { quote: "Parting is such sweet sorrow.", text: "Romeo & Juliet", character: "Juliet", technique: "oxymoron", context: "Act 2 Scene 2", boards: ["AQA", "Edexcel", "OCR", "WJEC"] },
  { quote: "O, I am fortune's fool!", text: "Romeo & Juliet", character: "Romeo", technique: "metaphor", context: "Act 3 Scene 1", boards: ["AQA", "Edexcel", "OCR", "WJEC"] },

  // ── Jekyll and Hyde ─────────────────────────────────────────
  { quote: "Man is not truly one, but truly two.", text: "Jekyll and Hyde", character: "Dr Jekyll", technique: "antithesis", context: "Chapter 10", boards: ["AQA", "Edexcel"] },
  { quote: "If he be Mr. Hyde, I shall be Mr. Seek.", text: "Jekyll and Hyde", character: "Mr Utterson", technique: "pun", context: "Chapter 2", boards: ["AQA", "Edexcel"] },
  { quote: "He gave an impression of deformity without any nameable malformation.", text: "Jekyll and Hyde", character: "Narrator", technique: "paradox", context: "Chapter 1", boards: ["AQA", "Edexcel"] },
  { quote: "Satan's signature upon a face.", text: "Jekyll and Hyde", character: "Mr Utterson", technique: "metaphor", context: "Chapter 2", boards: ["AQA", "Edexcel"] },
  { quote: "All human beings are commingled out of good and evil.", text: "Jekyll and Hyde", character: "Dr Jekyll", technique: "declarative", context: "Chapter 10", boards: ["AQA", "Edexcel"] },

  // ── Great Expectations ──────────────────────────────────────
  { quote: "I loved her against reason, against promise, against peace, against hope, against happiness.", text: "Great Expectations", character: "Pip", technique: "anaphora", context: "Chapter 29", boards: ["Edexcel", "OCR"] },
  { quote: "He calls the knaves, Jacks, this boy!", text: "Great Expectations", character: "Estella", technique: "direct address", context: "Chapter 8", boards: ["Edexcel", "OCR"] },
  { quote: "I saw that the bride within the bridal dress had withered like the dress.", text: "Great Expectations", character: "Pip", technique: "simile", context: "Chapter 8", boards: ["Edexcel", "OCR"] },

  // ── Lord of the Flies ───────────────────────────────────────
  { quote: "Maybe there is a beast... maybe it's only us.", text: "Lord of the Flies", character: "Simon", technique: "ellipsis", context: "Chapter 5", boards: ["WJEC", "OCR"] },
  { quote: "Kill the beast! Cut his throat! Spill his blood!", text: "Lord of the Flies", character: "The Boys", technique: "imperative", context: "Chapter 9", boards: ["WJEC", "OCR"] },
  { quote: "The thing is — fear can't hurt you any more than a dream.", text: "Lord of the Flies", character: "Jack", technique: "simile", context: "Chapter 5", boards: ["WJEC", "OCR"] },
  { quote: "Ralph wept for the end of innocence, the darkness of man's heart.", text: "Lord of the Flies", character: "Narrator", technique: "metaphor", context: "Chapter 12", boards: ["WJEC", "OCR"] },

  // ── Blood Brothers ──────────────────────────────────────────
  { quote: "And do we blame superstition for what came to pass? Or could it be what we, the English, have come to know as class?", text: "Blood Brothers", character: "Narrator", technique: "rhetorical question", context: "Act 1", boards: ["WJEC", "AQA"] },
  { quote: "I could have been him!", text: "Blood Brothers", character: "Mickey", technique: "exclamatory", context: "Act 2", boards: ["WJEC", "AQA"] },
  { quote: "But y'know the devil's got your number, y'know he's gonna find y'.", text: "Blood Brothers", character: "Narrator", technique: "direct address", context: "Act 1", boards: ["WJEC", "AQA"] },
  { quote: "A debt is a debt, and must be paid.", text: "Blood Brothers", character: "Narrator", technique: "declarative", context: "Act 1", boards: ["WJEC", "AQA"] },

  // ── Power and Conflict Poetry (AQA) ─────────────────────────
  { quote: "My mother's countenance / Could not unfrown itself.", text: "Poppies", character: "Jane Weir", technique: "enjambment", context: "Stanza 2", boards: ["AQA"] },
  { quote: "The merciless east winds that knive us.", text: "Exposure", character: "Wilfred Owen", technique: "personification", context: "Stanza 1", boards: ["AQA"] },
  { quote: "His bloody life in my bloody hands.", text: "Remains", character: "Simon Armitage", technique: "repetition", context: "Stanza 7", boards: ["AQA"] },
  { quote: "I was a frayed and beautiful shell.", text: "Kamikaze", character: "Beatrice Garland", technique: "metaphor", context: "Stanza 6", boards: ["AQA"] },
  { quote: "My name is Ozymandias, King of Kings; Look on my Works, ye Mighty, and despair!", text: "Ozymandias", character: "Percy Shelley", technique: "irony", context: "Lines 10-11", boards: ["AQA", "Edexcel"] },
  { quote: "I am the enemy you killed, my friend.", text: "Strange Meeting", character: "Wilfred Owen", technique: "paradox", context: "Line 40", boards: ["AQA"] },
];

/* ──────────────────────── Unique lists for options ──────────────────────── */

const ALL_TEXTS = [...new Set(QUOTES.map(q => q.text))];
const ALL_TECHNIQUES = [...new Set(QUOTES.map(q => q.technique))];
const BOARDS = ["All Boards", "AQA", "Edexcel", "OCR", "WJEC"];

function getCharactersForText(text) {
  return [...new Set(QUOTES.filter(q => q.text === text).map(q => q.character))];
}

const ALL_CHARACTERS = [...new Set(QUOTES.map(q => q.character))];

/* ──────────────────────── Helper utilities ──────────────────────── */

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickDistractors(correct, pool, count = 3) {
  const filtered = pool.filter(c => c !== correct);
  return shuffle(filtered).slice(0, count);
}

function generateGame(board) {
  const pool = board === "All Boards" ? QUOTES : QUOTES.filter(q => q.boards.includes(board));
  const selected = shuffle(pool).slice(0, 10);
  return selected.map(q => {
    const textOptions = shuffle([q.text, ...pickDistractors(q.text, ALL_TEXTS, 3)]);
    const charPool = getCharactersForText(q.text);
    const charDistractors = charPool.length >= 4
      ? pickDistractors(q.character, charPool, 3)
      : pickDistractors(q.character, ALL_CHARACTERS, 3);
    const characterOptions = shuffle([q.character, ...charDistractors]);
    const techniqueOptions = shuffle([q.technique, ...pickDistractors(q.technique, ALL_TECHNIQUES, 3)]);
    return { ...q, textOptions, characterOptions, techniqueOptions };
  });
}

const LS_KEY = "learnright_game_quotedetective";

function getHighScore() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || { score: 0 }; }
  catch { return { score: 0 }; }
}
function saveHighScore(data) {
  const prev = getHighScore();
  if (data.score > prev.score) {
    localStorage.setItem(LS_KEY, JSON.stringify(data));
  }
}

/* ──────────────────────── Text color theming ──────────────────────── */

const TEXT_COLORS = {
  "Macbeth": { accent: "#ef4444", bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.3)" },
  "An Inspector Calls": { accent: "#f59e0b", bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.3)" },
  "A Christmas Carol": { accent: "#38bdf8", bg: "rgba(56,189,248,0.1)", border: "rgba(56,189,248,0.3)" },
  "Romeo & Juliet": { accent: "#ec4899", bg: "rgba(236,72,153,0.1)", border: "rgba(236,72,153,0.3)" },
  "Jekyll and Hyde": { accent: "#a78bfa", bg: "rgba(167,139,250,0.1)", border: "rgba(167,139,250,0.3)" },
  "Great Expectations": { accent: "#34d399", bg: "rgba(52,211,153,0.1)", border: "rgba(52,211,153,0.3)" },
  "Lord of the Flies": { accent: "#fb923c", bg: "rgba(251,146,60,0.1)", border: "rgba(251,146,60,0.3)" },
  "Blood Brothers": { accent: "#c084fc", bg: "rgba(192,132,252,0.1)", border: "rgba(192,132,252,0.3)" },
  "Poppies": { accent: "#f87171", bg: "rgba(248,113,113,0.1)", border: "rgba(248,113,113,0.3)" },
  "Exposure": { accent: "#94a3b8", bg: "rgba(148,163,184,0.1)", border: "rgba(148,163,184,0.3)" },
  "Remains": { accent: "#fbbf24", bg: "rgba(251,191,36,0.1)", border: "rgba(251,191,36,0.3)" },
  "Kamikaze": { accent: "#2dd4bf", bg: "rgba(45,212,191,0.1)", border: "rgba(45,212,191,0.3)" },
  "Ozymandias": { accent: "#e2a553", bg: "rgba(226,165,83,0.1)", border: "rgba(226,165,83,0.3)" },
  "Strange Meeting": { accent: "#a1a1aa", bg: "rgba(161,161,170,0.1)", border: "rgba(161,161,170,0.3)" },
};

/* ──────────────────────── CSS keyframes ──────────────────────── */

const STYLE_ID = "quotedetective-anims";
function injectStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    @keyframes qdFadeUp {
      0%   { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes qdPulse {
      0%, 100% { transform: scale(1); }
      50%      { transform: scale(1.05); }
    }
    @keyframes qdShake {
      0%, 100% { transform: translateX(0); }
      20%      { transform: translateX(-6px); }
      40%      { transform: translateX(6px); }
      60%      { transform: translateX(-4px); }
      80%      { transform: translateX(4px); }
    }
    @keyframes qdGlow {
      0%   { box-shadow: 0 0 5px rgba(139,92,246,0.3); }
      50%  { box-shadow: 0 0 20px rgba(139,92,246,0.6); }
      100% { box-shadow: 0 0 5px rgba(139,92,246,0.3); }
    }
    @keyframes qdSpin {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes qdSlideIn {
      0%   { opacity: 0; transform: translateX(-20px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes qdBounce {
      0%, 100% { transform: scale(1); }
      50%      { transform: scale(1.15); }
    }
  `;
  document.head.appendChild(style);
}

/* ──────────────────────── Component ──────────────────────── */

const ROUND_LABELS = ["Which text is this from?", "Who said/wrote this?", "What technique is being used?"];
const ROUND_ICONS = [BookOpen, Eye, Target];

export default function QuoteDetective() {
  const [phase, setPhase] = useState("menu"); // menu | playing | results
  const [board, setBoard] = useState("All Boards");
  const [questions, setQuestions] = useState([]);
  const [qIndex, setQIndex] = useState(0);
  const [subRound, setSubRound] = useState(0); // 0=text, 1=character, 2=technique
  const [roundAnswers, setRoundAnswers] = useState([null, null, null]); // answers for current question
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [scores, setScores] = useState([]); // per-question score tracking
  const [totalScore, setTotalScore] = useState(0);
  const [highScore, setHighScore] = useState(getHighScore());
  const timerRef = useRef(null);

  useEffect(() => { injectStyles(); }, []);

  const startGame = useCallback(() => {
    const game = generateGame(board);
    setQuestions(game);
    setQIndex(0);
    setSubRound(0);
    setRoundAnswers([null, null, null]);
    setSelected(null);
    setShowResult(false);
    setScores([]);
    setTotalScore(0);
    setPhase("playing");
  }, [board]);

  const currentQ = questions[qIndex];

  const getOptions = () => {
    if (!currentQ) return [];
    if (subRound === 0) return currentQ.textOptions;
    if (subRound === 1) return currentQ.characterOptions;
    return currentQ.techniqueOptions;
  };

  const getCorrectAnswer = () => {
    if (!currentQ) return "";
    if (subRound === 0) return currentQ.text;
    if (subRound === 1) return currentQ.character;
    return currentQ.technique;
  };

  const handleSelect = (option) => {
    if (showResult) return;
    setSelected(option);
    setShowResult(true);

    const correct = getCorrectAnswer();
    const isCorrect = option === correct;
    const newAnswers = [...roundAnswers];
    newAnswers[subRound] = isCorrect;
    setRoundAnswers(newAnswers);

    timerRef.current = setTimeout(() => {
      if (subRound < 2) {
        setSubRound(subRound + 1);
        setSelected(null);
        setShowResult(false);
      } else {
        // Calculate points for this question
        const correctCount = newAnswers.filter(Boolean).length;
        let pts = 0;
        if (correctCount === 3) pts = 30;
        else if (correctCount === 2) pts = 15;
        else if (correctCount === 1) pts = 5;

        const newScores = [...scores, { answers: newAnswers, points: pts, quote: currentQ }];
        const newTotal = totalScore + pts;
        setScores(newScores);
        setTotalScore(newTotal);

        if (qIndex < questions.length - 1) {
          setQIndex(qIndex + 1);
          setSubRound(0);
          setRoundAnswers([null, null, null]);
          setSelected(null);
          setShowResult(false);
        } else {
          // Game over
          saveHighScore({ score: newTotal });
          setHighScore(getHighScore());
          recordGamePlayed();
          setPhase("results");
        }
      }
    }, 1200);
  };

  useEffect(() => {
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  // ── Menu ──
  if (phase === "menu") {
    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
        <Navbar />
        <GameWrapper gameId="quote-detective">
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '2rem 1rem', animation: 'qdFadeUp 0.5s ease' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{
              width: 80, height: 80, borderRadius: '50%',
              background: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1rem', boxShadow: '0 0 30px rgba(124,58,237,0.4)',
              animation: 'qdGlow 2s ease-in-out infinite'
            }}>
              <Search size={40} color="#fff" />
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem',
              background: 'linear-gradient(135deg, #c084fc, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Quote Detective
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '1rem', maxWidth: 420, margin: '0 auto' }}>
              Investigate each quote. Identify the text, the speaker, and the technique. Can you crack every case?
            </p>
          </div>

          {/* High Score */}
          <div style={{
            background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)',
            borderRadius: 12, padding: '1rem', marginBottom: '1.5rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem'
          }}>
            <Trophy size={20} color="#a78bfa" />
            <span style={{ color: '#c084fc', fontWeight: 700 }}>High Score: {highScore.score} pts</span>
          </div>

          {/* Board Filter */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#94a3b8' }}>
              <Filter size={16} />
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Exam Board</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {BOARDS.map(b => (
                <button key={b} onClick={() => setBoard(b)} style={{
                  padding: '0.5rem 1rem', borderRadius: 8, border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.875rem',
                  background: board === b ? 'linear-gradient(135deg, #7c3aed, #6d28d9)' : 'rgba(51,65,85,0.5)',
                  color: board === b ? '#fff' : '#94a3b8',
                  transition: 'all 0.2s'
                }}>
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div style={{
            background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(71,85,105,0.3)',
            borderRadius: 12, padding: '1.25rem', marginBottom: '2rem'
          }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem', color: '#e2e8f0' }}>How It Works</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { icon: '1️', label: 'Identify the text', desc: '(+10 per correct)' },
                { icon: '2️', label: 'Identify the speaker', desc: '(+10 per correct)' },
                { icon: '3️', label: 'Identify the technique', desc: '(+10 per correct)' },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#cbd5e1', fontSize: '0.875rem' }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', background: 'rgba(124,58,237,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700,
                    color: '#c084fc', fontSize: '0.8rem', flexShrink: 0
                  }}>{i + 1}</div>
                  <span><strong>{step.label}</strong> <span style={{ color: '#64748b' }}>{step.desc}</span></span>
                </div>
              ))}
            </div>
            <p style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '0.75rem' }}>
              All 3 correct = 30 pts | 2 correct = 15 pts | 1 correct = 5 pts | 10 quotes per game
            </p>
          </div>

          {/* Start */}
          <button onClick={startGame} style={{
            width: '100%', padding: '1rem', borderRadius: 12, border: 'none', cursor: 'pointer',
            background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', color: '#fff',
            fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
            boxShadow: '0 4px 20px rgba(124,58,237,0.4)', transition: 'transform 0.2s'
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Search size={20} /> Start Investigation
          </button>
        </div>
        </GameWrapper>
      </div>
    );
  }

  // ── Results ──
  if (phase === "results") {
    const perfectCount = scores.filter(s => s.points === 30).length;
    const maxPossible = questions.length * 30;
    const percentage = Math.round((totalScore / maxPossible) * 100);

    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
        <Navbar />
        <GameWrapper gameId="quote-detective">
        <div style={{ maxWidth: 640, margin: '0 auto', padding: '2rem 1rem', animation: 'qdFadeUp 0.5s ease' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{
              width: 72, height: 72, borderRadius: '50%',
              background: percentage >= 70 ? 'linear-gradient(135deg, #10b981, #059669)' : percentage >= 40 ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'linear-gradient(135deg, #ef4444, #dc2626)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1rem', animation: 'qdBounce 0.6s ease'
            }}>
              {percentage >= 70 ? <Trophy size={36} color="#fff" /> : <Award size={36} color="#fff" />}
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.25rem' }}>
              {percentage >= 80 ? 'Master Detective!' : percentage >= 60 ? 'Sharp Investigator!' : percentage >= 40 ? 'Rookie Detective' : 'Keep Practicing!'}
            </h2>
            <p style={{ color: '#94a3b8' }}>Case closed. Here are your findings.</p>
          </div>

          {/* Score summary */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', marginBottom: '2rem'
          }}>
            {[
              { label: 'Total Score', value: `${totalScore}/${maxPossible}`, color: '#a78bfa' },
              { label: 'Accuracy', value: `${percentage}%`, color: '#38bdf8' },
              { label: 'Perfect Cases', value: `${perfectCount}/${questions.length}`, color: '#10b981' },
            ].map((stat, i) => (
              <div key={i} style={{
                background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(71,85,105,0.3)',
                borderRadius: 12, padding: '1rem', textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: stat.color }}>{stat.value}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Question breakdown */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: '#e2e8f0' }}>Case Files</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {scores.map((s, i) => {
                const tc = TEXT_COLORS[s.quote.text] || { accent: '#94a3b8', bg: 'rgba(148,163,184,0.1)', border: 'rgba(148,163,184,0.3)' };
                return (
                  <div key={i} style={{
                    background: 'rgba(30,41,59,0.4)', border: `1px solid ${tc.border}`,
                    borderRadius: 12, padding: '1rem', animation: `qdSlideIn 0.3s ease ${i * 0.05}s both`
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                      <p style={{ fontSize: '0.85rem', color: '#cbd5e1', fontStyle: 'italic', flex: 1, marginRight: '0.5rem' }}>
                        "{s.quote.quote.length > 60 ? s.quote.quote.slice(0, 60) + '...' : s.quote.quote}"
                      </p>
                      <span style={{
                        fontSize: '0.8rem', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: 6,
                        background: s.points === 30 ? 'rgba(16,185,129,0.2)' : s.points >= 15 ? 'rgba(245,158,11,0.2)' : s.points >= 5 ? 'rgba(239,68,68,0.2)' : 'rgba(100,116,139,0.2)',
                        color: s.points === 30 ? '#34d399' : s.points >= 15 ? '#fbbf24' : s.points >= 5 ? '#f87171' : '#64748b',
                        whiteSpace: 'nowrap'
                      }}>
                        {s.points} pts
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {['Text', 'Character', 'Technique'].map((label, j) => (
                        <span key={j} style={{
                          display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
                          fontSize: '0.7rem', fontWeight: 600, padding: '0.15rem 0.4rem', borderRadius: 4,
                          background: s.answers[j] ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)',
                          color: s.answers[j] ? '#34d399' : '#f87171'
                        }}>
                          {s.answers[j] ? <CheckCircle size={10} /> : <XCircle size={10} />} {label}
                        </span>
                      ))}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.4rem' }}>
                      {s.quote.text} — {s.quote.character} — {s.quote.technique} — {s.quote.context}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lauren feedback */}
          <div style={{ marginBottom: '1.5rem' }}>
            <Lauren
              emotion={percentage >= 90 ? 'celebrating' : percentage >= 70 ? 'happy' : percentage >= 50 ? 'encouraging' : 'concerned'}
              message={percentage >= 90 ? "Outstanding work! You really know your stuff — that's Grade 9 territory!"
                : percentage >= 70 ? "Great job! You're showing solid understanding. Keep practising to push even higher!"
                : percentage >= 50 ? "Good effort! You're getting there — review the ones you missed and try again."
                : "Don't worry — this is how we learn! Review the feedback and give it another go."}
              size="medium"
              position="inline"
            />
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={startGame} style={{
              flex: 1, padding: '0.875rem', borderRadius: 12, border: 'none', cursor: 'pointer',
              background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', color: '#fff',
              fontSize: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
            }}>
              <RotateCcw size={18} /> Play Again
            </button>
            <button onClick={() => setPhase("menu")} style={{
              flex: 1, padding: '0.875rem', borderRadius: 12, border: '1px solid rgba(71,85,105,0.5)',
              background: 'rgba(30,41,59,0.5)', color: '#cbd5e1', cursor: 'pointer',
              fontSize: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
            }}>
              <ChevronRight size={18} /> Menu
            </button>
            <Link to="/games" style={{
              flex: 1, padding: '0.875rem', borderRadius: 12, border: '1px solid rgba(71,85,105,0.5)',
              background: 'rgba(30,41,59,0.5)', color: '#cbd5e1', textDecoration: 'none',
              fontSize: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
            }}>
              Back to Games
            </Link>
          </div>
        </div>
        </GameWrapper>
      </div>
    );
  }

  // ── Playing ──
  const correct = getCorrectAnswer();
  const options = getOptions();
  const RoundIcon = ROUND_ICONS[subRound];
  const progress = ((qIndex * 3 + subRound) / (questions.length * 3)) * 100;

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />
      <GameWrapper gameId="quote-detective">
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '1.5rem 1rem' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Search size={18} color="#a78bfa" />
            <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#c084fc' }}>Case {qIndex + 1}/{questions.length}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Star size={16} color="#fbbf24" />
            <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fbbf24' }}>{totalScore} pts</span>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ background: 'rgba(30,41,59,0.5)', borderRadius: 8, height: 6, marginBottom: '1.5rem', overflow: 'hidden' }}>
          <div style={{
            height: '100%', borderRadius: 8,
            background: 'linear-gradient(90deg, #7c3aed, #a78bfa)',
            width: `${progress}%`, transition: 'width 0.4s ease'
          }} />
        </div>

        {/* Sub-round indicators */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
          {ROUND_LABELS.map((label, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.35rem 0.75rem', borderRadius: 20,
              background: i === subRound ? 'rgba(124,58,237,0.25)' : roundAnswers[i] !== null ? (roundAnswers[i] ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)') : 'rgba(30,41,59,0.4)',
              border: i === subRound ? '1px solid rgba(124,58,237,0.5)' : '1px solid transparent',
              transition: 'all 0.3s'
            }}>
              {roundAnswers[i] !== null ? (
                roundAnswers[i] ? <CheckCircle size={14} color="#34d399" /> : <XCircle size={14} color="#f87171" />
              ) : (
                <div style={{
                  width: 14, height: 14, borderRadius: '50%',
                  background: i === subRound ? '#7c3aed' : '#334155',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.6rem', fontWeight: 700, color: '#fff'
                }}>{i + 1}</div>
              )}
              <span style={{
                fontSize: '0.7rem', fontWeight: 600,
                color: i === subRound ? '#c084fc' : roundAnswers[i] !== null ? (roundAnswers[i] ? '#34d399' : '#f87171') : '#64748b'
              }}>
                {i === 0 ? 'Text' : i === 1 ? 'Character' : 'Technique'}
              </span>
            </div>
          ))}
        </div>

        {/* Quote card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(30,41,59,0.7), rgba(15,23,42,0.9))',
          border: '1px solid rgba(124,58,237,0.3)',
          borderRadius: 16, padding: '2rem 1.5rem', marginBottom: '1.5rem', textAlign: 'center',
          position: 'relative', overflow: 'hidden',
          animation: qIndex === 0 && subRound === 0 ? 'qdFadeUp 0.4s ease' : undefined
        }}>
          {/* Magnifying glass watermark */}
          <div style={{
            position: 'absolute', top: -20, right: -20, opacity: 0.05, transform: 'rotate(15deg)'
          }}>
            <Search size={120} />
          </div>
          <div style={{ fontSize: '0.75rem', color: '#7c3aed', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Evidence
          </div>
          <p style={{
            fontSize: '1.2rem', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.6, color: '#e2e8f0',
            position: 'relative', zIndex: 1
          }}>
            "{currentQ?.quote}"
          </p>
          {currentQ?.context && subRound > 0 && (
            <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: '#64748b' }}>
              {subRound >= 1 && roundAnswers[0] !== null && (
                <span style={{
                  display: 'inline-block', padding: '0.2rem 0.5rem', borderRadius: 6,
                  background: TEXT_COLORS[currentQ.text]?.bg || 'rgba(100,116,139,0.1)',
                  color: TEXT_COLORS[currentQ.text]?.accent || '#94a3b8',
                  fontWeight: 600, fontSize: '0.75rem', marginRight: '0.5rem'
                }}>
                  {currentQ.text}
                </span>
              )}
              {subRound >= 2 && roundAnswers[1] !== null && (
                <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>
                  — {currentQ.character}, {currentQ.context}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Question */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <RoundIcon size={18} color="#a78bfa" />
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#e2e8f0' }}>{ROUND_LABELS[subRound]}</h3>
        </div>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {options.map((opt, i) => {
            const isSelected = selected === opt;
            const isCorrect = opt === correct;
            let bg = 'rgba(30,41,59,0.5)';
            let borderColor = 'rgba(71,85,105,0.3)';
            let textColor = '#e2e8f0';

            if (showResult) {
              if (isCorrect) {
                bg = 'rgba(16,185,129,0.15)';
                borderColor = 'rgba(16,185,129,0.5)';
                textColor = '#34d399';
              } else if (isSelected && !isCorrect) {
                bg = 'rgba(239,68,68,0.15)';
                borderColor = 'rgba(239,68,68,0.5)';
                textColor = '#f87171';
              }
            }

            return (
              <button key={opt + i} onClick={() => handleSelect(opt)} disabled={showResult} style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.875rem 1rem', borderRadius: 12,
                background: bg, border: `1px solid ${borderColor}`,
                color: textColor, cursor: showResult ? 'default' : 'pointer',
                fontSize: '0.95rem', fontWeight: 600, textAlign: 'left',
                transition: 'all 0.2s', width: '100%',
                animation: showResult && isSelected && !isCorrect ? 'qdShake 0.4s ease' : showResult && isCorrect ? 'qdPulse 0.4s ease' : `qdSlideIn 0.3s ease ${i * 0.05}s both`,
                opacity: showResult && !isCorrect && !isSelected ? 0.5 : 1
              }}
                onMouseEnter={e => { if (!showResult) { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'; e.currentTarget.style.background = 'rgba(124,58,237,0.1)'; } }}
                onMouseLeave={e => { if (!showResult) { e.currentTarget.style.borderColor = borderColor; e.currentTarget.style.background = bg; } }}
              >
                <div style={{
                  width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                  background: showResult && isCorrect ? 'rgba(16,185,129,0.3)' : showResult && isSelected && !isCorrect ? 'rgba(239,68,68,0.3)' : 'rgba(71,85,105,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700
                }}>
                  {showResult && isCorrect ? <CheckCircle size={16} /> : showResult && isSelected && !isCorrect ? <XCircle size={16} /> : String.fromCharCode(65 + i)}
                </div>
                <span style={{ textTransform: subRound === 2 ? 'capitalize' : 'none' }}>{opt}</span>
              </button>
            );
          })}
        </div>
      </div>
      </GameWrapper>
    </div>
  );
}
