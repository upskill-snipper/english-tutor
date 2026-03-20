import { useState, useEffect, useCallback, useRef } from 'react';
import { RotateCcw, Trophy, Zap, BookOpen, Filter, ChevronRight, Star, Clock, Target } from 'lucide-react';
import Navbar from '../../components/Navbar';
import GameWrapper from '../../components/GameWrapper';
import Lauren from '../../components/Lauren';

/* ───────────────────────── QUOTE DATA (60+ quotes) ───────────────────────── */

const QUOTES = [
  // ── Macbeth ──────────────────────────────────────────────────
  { text: "Fair is foul, and foul is fair.", character: "The Witches", play: "Macbeth", act: "Act 1" },
  { text: "Yet do I fear thy nature; It is too full o' the milk of human kindness.", character: "Lady Macbeth", play: "Macbeth", act: "Act 1" },
  { text: "Look like the innocent flower, But be the serpent under't.", character: "Lady Macbeth", play: "Macbeth", act: "Act 1" },
  { text: "Is this a dagger which I see before me, The handle toward my hand?", character: "Macbeth", play: "Macbeth", act: "Act 2" },
  { text: "Will all great Neptune's ocean wash this blood clean from my hand?", character: "Macbeth", play: "Macbeth", act: "Act 2" },
  { text: "A little water clears us of this deed.", character: "Lady Macbeth", play: "Macbeth", act: "Act 2" },
  { text: "Thou canst not say I did it: never shake thy gory locks at me.", character: "Macbeth", play: "Macbeth", act: "Act 3" },
  { text: "Double, double toil and trouble; Fire burn and cauldron bubble.", character: "The Witches", play: "Macbeth", act: "Act 4" },
  { text: "Out, damned spot! out, I say!", character: "Lady Macbeth", play: "Macbeth", act: "Act 5" },
  { text: "Life's but a walking shadow, a poor player that struts and frets his hour upon the stage.", character: "Macbeth", play: "Macbeth", act: "Act 5" },
  { text: "By the pricking of my thumbs, Something wicked this way comes.", character: "The Witches", play: "Macbeth", act: "Act 4" },
  { text: "Stars, hide your fires; Let not light see my black and deep desires.", character: "Macbeth", play: "Macbeth", act: "Act 1" },
  { text: "I have no spur to prick the sides of my intent, but only vaulting ambition.", character: "Macbeth", play: "Macbeth", act: "Act 1" },
  { text: "Unsex me here, And fill me from the crown to the toe top-full of direst cruelty.", character: "Lady Macbeth", play: "Macbeth", act: "Act 1" },

  // ── An Inspector Calls ──────────────────────────────────────
  { text: "We are members of one body. We are responsible for each other.", character: "Inspector Goole", play: "An Inspector Calls", act: "Act 3" },
  { text: "If men will not learn that lesson, then they will be taught it in fire and blood and anguish.", character: "Inspector Goole", play: "An Inspector Calls", act: "Act 3" },
  { text: "But these girls aren't cheap labour — they're people.", character: "Sheila Birling", play: "An Inspector Calls", act: "Act 1" },
  { text: "I'm ashamed of you as well — yes both of you.", character: "Sheila Birling", play: "An Inspector Calls", act: "Act 3" },
  { text: "The girl's dead and we all helped to kill her — and that's what matters.", character: "Sheila Birling", play: "An Inspector Calls", act: "Act 3" },
  { text: "A man has to make his own way — has to look after himself.", character: "Mr Birling", play: "An Inspector Calls", act: "Act 1" },
  { text: "The Titanic — she sails next week... unsinkable, absolutely unsinkable.", character: "Mr Birling", play: "An Inspector Calls", act: "Act 1" },
  { text: "I was in the right mood for once.", character: "Eric Birling", play: "An Inspector Calls", act: "Act 3" },
  { text: "You're not the kind of father a chap could go to when he's in trouble.", character: "Eric Birling", play: "An Inspector Calls", act: "Act 3" },
  { text: "She was claiming elaborate fine feelings and scruples that were simply absurd in a girl in her position.", character: "Mrs Birling", play: "An Inspector Calls", act: "Act 2" },
  { text: "I accept no blame for it at all.", character: "Mrs Birling", play: "An Inspector Calls", act: "Act 2" },
  { text: "I didn't feel about her as she felt about me.", character: "Gerald Croft", play: "An Inspector Calls", act: "Act 2" },
  { text: "You began to learn something. And now you've stopped.", character: "Sheila Birling", play: "An Inspector Calls", act: "Act 3" },

  // ── A Christmas Carol ───────────────────────────────────────
  { text: "Bah! Humbug!", character: "Scrooge", play: "A Christmas Carol", act: "Stave 1" },
  { text: "Are there no prisons? Are there no workhouses?", character: "Scrooge", play: "A Christmas Carol", act: "Stave 1" },
  { text: "I wear the chain I forged in life. I made it link by link, and yard by yard.", character: "Jacob Marley", play: "A Christmas Carol", act: "Stave 1" },
  { text: "Mankind was my business!", character: "Jacob Marley", play: "A Christmas Carol", act: "Stave 1" },
  { text: "God bless us, every one!", character: "Tiny Tim", play: "A Christmas Carol", act: "Stave 3" },
  { text: "I will honour Christmas in my heart, and try to keep it all the year.", character: "Scrooge", play: "A Christmas Carol", act: "Stave 4" },
  { text: "A merrier Christmas, Bob, my good fellow, than I have given you for many a year!", character: "Scrooge", play: "A Christmas Carol", act: "Stave 5" },
  { text: "If they would rather die, they had better do it, and decrease the surplus population.", character: "Scrooge", play: "A Christmas Carol", act: "Stave 1" },
  { text: "I am as light as a feather, I am as happy as an angel, I am as merry as a schoolboy.", character: "Scrooge", play: "A Christmas Carol", act: "Stave 5" },
  { text: "Come in! Come in! and know me better, man!", character: "Ghost of Christmas Present", play: "A Christmas Carol", act: "Stave 3" },
  { text: "This boy is Ignorance. This girl is Want. Beware them both.", character: "Ghost of Christmas Present", play: "A Christmas Carol", act: "Stave 3" },
  { text: "There's more of gravy than of grave about you!", character: "Scrooge", play: "A Christmas Carol", act: "Stave 1" },
  { text: "He was a tight-fisted hand at the grindstone, Scrooge!", character: "Narrator", play: "A Christmas Carol", act: "Stave 1" },

  // ── Romeo & Juliet ──────────────────────────────────────────
  { text: "O Romeo, Romeo! Wherefore art thou Romeo?", character: "Juliet", play: "Romeo & Juliet", act: "Act 2" },
  { text: "What's in a name? That which we call a rose by any other name would smell as sweet.", character: "Juliet", play: "Romeo & Juliet", act: "Act 2" },
  { text: "But soft, what light through yonder window breaks? It is the east, and Juliet is the sun.", character: "Romeo", play: "Romeo & Juliet", act: "Act 2" },
  { text: "A plague o' both your houses!", character: "Mercutio", play: "Romeo & Juliet", act: "Act 3" },
  { text: "These violent delights have violent ends.", character: "Friar Lawrence", play: "Romeo & Juliet", act: "Act 2" },
  { text: "My only love sprung from my only hate!", character: "Juliet", play: "Romeo & Juliet", act: "Act 1" },
  { text: "Did my heart love till now? Forswear it, sight! For I ne'er saw true beauty till this night.", character: "Romeo", play: "Romeo & Juliet", act: "Act 1" },
  { text: "Wisely and slow; they stumble that run fast.", character: "Friar Lawrence", play: "Romeo & Juliet", act: "Act 2" },
  { text: "O, I am fortune's fool!", character: "Romeo", play: "Romeo & Juliet", act: "Act 3" },
  { text: "Parting is such sweet sorrow.", character: "Juliet", play: "Romeo & Juliet", act: "Act 2" },
  { text: "A pair of star-cross'd lovers take their life.", character: "Chorus", play: "Romeo & Juliet", act: "Prologue" },
  { text: "If you ever disturb our streets again, your lives shall pay the forfeit of the peace.", character: "Prince Escalus", play: "Romeo & Juliet", act: "Act 1" },
  { text: "Talk not to me, for I'll not speak a word. Do as thou wilt, for I have done with thee.", character: "Lady Capulet", play: "Romeo & Juliet", act: "Act 3" },

  // ── Blood Brothers ──────────────────────────────────────────
  { text: "And do we blame superstition for what came to pass? Or could it be what we, the English, have come to know as class?", character: "Narrator", play: "Blood Brothers", act: "Act 1" },
  { text: "They say I'm inclined to be a bit of a... mother hen.", character: "Mrs Johnstone", play: "Blood Brothers", act: "Act 1" },
  { text: "I could have been him!", character: "Mickey", play: "Blood Brothers", act: "Act 2" },
  { text: "Why didn't you give me away? I could have been... I could have been him!", character: "Mickey", play: "Blood Brothers", act: "Act 2" },
  { text: "But y'know the devil's got your number, y'know he's gonna find y'.", character: "Narrator", play: "Blood Brothers", act: "Act 1" },
  { text: "Take them. Take them away. I can't look at them.", character: "Mrs Johnstone", play: "Blood Brothers", act: "Act 1" },
  { text: "I don't want to be stuck in a job like that for the rest of my life.", character: "Mickey", play: "Blood Brothers", act: "Act 2" },
  { text: "That's friendship, that is.", character: "Eddie", play: "Blood Brothers", act: "Act 1" },
  { text: "I'll set the dog on you!", character: "Mrs Lyons", play: "Blood Brothers", act: "Act 1" },
  { text: "I'm not saying a word. I'm not saying a word.", character: "Sammy", play: "Blood Brothers", act: "Act 1" },
  { text: "They say there's a stone in a Liverpool way, and if you pick it up you lose a day.", character: "Narrator", play: "Blood Brothers", act: "Act 2" },
  { text: "You're a madwoman. You won't get what you want by threats.", character: "Mrs Johnstone", play: "Blood Brothers", act: "Act 2" },
  { text: "A debt is a debt, and must be paid.", character: "Narrator", play: "Blood Brothers", act: "Act 1" },
];

/* ──────────────────────── Characters per play (for distractor generation) ──────────────────────── */

const CHARACTERS_BY_PLAY = {};
QUOTES.forEach(q => {
  if (!CHARACTERS_BY_PLAY[q.play]) CHARACTERS_BY_PLAY[q.play] = new Set();
  CHARACTERS_BY_PLAY[q.play].add(q.character);
});
// Convert sets to arrays
Object.keys(CHARACTERS_BY_PLAY).forEach(k => {
  CHARACTERS_BY_PLAY[k] = [...CHARACTERS_BY_PLAY[k]];
});

const PLAYS = ["All Texts", ...Object.keys(CHARACTERS_BY_PLAY)];

const PLAY_COLORS = {
  "Macbeth": { bg: "from-red-900/40 to-red-950/20", badge: "bg-red-900/60 text-red-300" },
  "An Inspector Calls": { bg: "from-amber-900/40 to-amber-950/20", badge: "bg-amber-900/60 text-amber-300" },
  "A Christmas Carol": { bg: "from-sky-900/40 to-sky-950/20", badge: "bg-sky-900/60 text-sky-300" },
  "Romeo & Juliet": { bg: "from-pink-900/40 to-pink-950/20", badge: "bg-pink-900/60 text-pink-300" },
  "Blood Brothers": { bg: "from-violet-900/40 to-violet-950/20", badge: "bg-violet-900/60 text-violet-300" },
};

/* ──────────────────────── Helper utilities ──────────────────────── */

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickDistractors(correct, play, count = 3) {
  const pool = (CHARACTERS_BY_PLAY[play] || []).filter(c => c !== correct);
  const shuffled = shuffle(pool);
  return shuffled.slice(0, count);
}

function generateRound(selectedPlay) {
  const pool = selectedPlay === "All Texts" ? QUOTES : QUOTES.filter(q => q.play === selectedPlay);
  const shuffled = shuffle(pool);
  const questions = shuffled.slice(0, 10);
  return questions.map(q => {
    const distractors = pickDistractors(q.character, q.play, 3);
    const options = shuffle([q.character, ...distractors]);
    return { ...q, options };
  });
}

const LS_KEY = "learnright_game_whosaidit";

function getHighScore() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || { score: 0, accuracy: 0, streak: 0 }; }
  catch { return { score: 0, accuracy: 0, streak: 0 }; }
}
function saveHighScore(data) {
  const prev = getHighScore();
  if (data.score > prev.score) {
    localStorage.setItem(LS_KEY, JSON.stringify(data));
  }
}

/* ──────────────────────── CSS keyframes (injected once) ──────────────────────── */

const STYLE_ID = "whosaidit-anims";
function injectStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    @keyframes wsCardFlip {
      0%   { transform: rotateY(90deg); opacity: 0; }
      100% { transform: rotateY(0deg);  opacity: 1; }
    }
    @keyframes wsShake {
      0%, 100% { transform: translateX(0); }
      20%      { transform: translateX(-8px); }
      40%      { transform: translateX(8px); }
      60%      { transform: translateX(-6px); }
      80%      { transform: translateX(6px); }
    }
    @keyframes wsBounce {
      0%, 100% { transform: scale(1); }
      50%      { transform: scale(1.25); }
    }
    @keyframes wsGlow {
      0%   { box-shadow: 0 0 5px rgba(16,185,129,0.4); }
      50%  { box-shadow: 0 0 25px rgba(16,185,129,0.7); }
      100% { box-shadow: 0 0 5px rgba(16,185,129,0.4); }
    }
    @keyframes wsFadeUp {
      0%   { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes wsSlideIn {
      0%   { opacity: 0; transform: translateX(-20px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    .ws-flip   { animation: wsCardFlip 0.5s ease-out both; }
    .ws-shake  { animation: wsShake 0.4s ease-in-out; }
    .ws-bounce { animation: wsBounce 0.35s ease-in-out; }
    .ws-glow   { animation: wsGlow 0.8s ease-in-out; }
    .ws-fadeup { animation: wsFadeUp 0.5s ease-out both; }
    .ws-slidein { animation: wsSlideIn 0.4s ease-out both; }
  `;
  document.head.appendChild(style);
}

/* ──────────────────────── COMPONENT ──────────────────────── */

export default function WhoSaidIt() {
  const [selectedPlay, setSelectedPlay] = useState("All Texts");
  const [phase, setPhase] = useState("menu"); // menu | playing | result
  const [questions, setQuestions] = useState([]);
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [selected, setSelected] = useState(null); // chosen option
  const [revealed, setRevealed] = useState(false);
  const [questionStart, setQuestionStart] = useState(null);
  const [flipKey, setFlipKey] = useState(0);
  const [scorePop, setScorePop] = useState(false);
  const highScore = useRef(getHighScore());

  useEffect(() => { injectStyles(); }, []);

  /* ── Start game ── */
  const startGame = useCallback(() => {
    const qs = generateRound(selectedPlay);
    setQuestions(qs);
    setQIndex(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setCorrectCount(0);
    setSelected(null);
    setRevealed(false);
    setPhase("playing");
    setQuestionStart(Date.now());
    setFlipKey(k => k + 1);
  }, [selectedPlay]);

  /* ── Answer handler ── */
  const handleAnswer = useCallback((option) => {
    if (revealed) return;
    const q = questions[qIndex];
    const isCorrect = option === q.character;
    const elapsed = (Date.now() - questionStart) / 1000;

    setSelected(option);
    setRevealed(true);

    if (isCorrect) {
      const newStreak = streak + 1;
      let pts = 10;
      if (newStreak > 1) pts += (newStreak - 1) * 5;
      if (elapsed < 5) pts += 5;
      setScore(s => s + pts);
      setStreak(newStreak);
      setBestStreak(bs => Math.max(bs, newStreak));
      setCorrectCount(c => c + 1);
      setScorePop(true);
      setTimeout(() => setScorePop(false), 400);
    } else {
      setStreak(0);
    }
  }, [revealed, questions, qIndex, questionStart, streak]);

  /* ── Next question / finish ── */
  const nextQuestion = useCallback(() => {
    if (qIndex + 1 >= questions.length) {
      const finalScore = score;
      const accuracy = Math.round((correctCount / questions.length) * 100);
      saveHighScore({ score: finalScore, accuracy, streak: bestStreak });
      highScore.current = getHighScore();
      setPhase("result");
    } else {
      setQIndex(i => i + 1);
      setSelected(null);
      setRevealed(false);
      setQuestionStart(Date.now());
      setFlipKey(k => k + 1);
    }
  }, [qIndex, questions, score, correctCount, bestStreak]);

  /* ── Timer bar ── */
  const TimerBar = () => {
    const [elapsed, setElapsed] = useState(0);
    useEffect(() => {
      if (revealed) return;
      const id = setInterval(() => setElapsed((Date.now() - questionStart) / 1000), 100);
      return () => clearInterval(id);
    }, []);
    const pct = Math.min(elapsed / 15, 1) * 100;
    const color = elapsed < 5 ? "bg-emerald-500" : elapsed < 10 ? "bg-amber-500" : "bg-red-500";
    return (
      <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden mb-6">
        <div className={`h-full ${color} transition-all duration-100 rounded-full`} style={{ width: `${pct}%` }} />
      </div>
    );
  };

  /* ─────────────── RENDER ─────────────── */

  const currentQ = questions[qIndex];
  const playColor = currentQ ? PLAY_COLORS[currentQ.play] : null;

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-slate-100">
      <Navbar />
      <GameWrapper gameId="who-said-it">

      <div className="max-w-2xl mx-auto px-4 pt-8 pb-16">
        {/* ── MENU ── */}
        {phase === "menu" && (
          <div className="ws-fadeup">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-600/20 mb-4">
                <BookOpen className="w-8 h-8 text-emerald-400" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Who Said It?</h1>
              <p className="text-slate-400">Identify which character said each famous quote from your GCSE set texts.</p>
            </div>

            {/* High score */}
            {highScore.current.score > 0 && (
              <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4 mb-6 flex items-center gap-3">
                <Trophy className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <span className="text-sm text-slate-400">High Score</span>
                  <span className="ml-2 font-bold text-amber-400">{highScore.current.score}</span>
                  <span className="text-xs text-slate-500 ml-2">({highScore.current.accuracy}% accuracy)</span>
                </div>
              </div>
            )}

            {/* Text selector */}
            <label className="block text-sm font-medium text-slate-400 mb-2">
              <Filter className="inline w-4 h-4 mr-1 -mt-0.5" /> Filter by Text
            </label>
            <div className="flex flex-wrap gap-2 mb-8">
              {PLAYS.map(p => (
                <button
                  key={p}
                  onClick={() => setSelectedPlay(p)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    selectedPlay === p
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/40"
                      : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <button
              onClick={startGame}
              className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-lg transition-all shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2"
            >
              Start Game <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* ── PLAYING ── */}
        {phase === "playing" && currentQ && (
          <div key={flipKey} className="ws-flip">
            {/* Top bar: progress + score */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-slate-400">
                Question <span className="text-slate-200 font-semibold">{qIndex + 1}</span> / {questions.length}
              </span>
              <div className="flex items-center gap-4">
                {streak > 1 && (
                  <span className="flex items-center gap-1 text-amber-400 text-sm font-medium ws-slidein">
                    <Zap className="w-4 h-4" /> {streak} streak
                  </span>
                )}
                <span className={`text-lg font-bold text-emerald-400 ${scorePop ? "ws-bounce" : ""}`}>
                  {score} pts
                </span>
              </div>
            </div>

            {/* Progress dots */}
            <div className="flex gap-1.5 mb-4">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-all ${
                    i < qIndex ? "bg-emerald-500" : i === qIndex ? "bg-emerald-400/60" : "bg-slate-700"
                  }`}
                />
              ))}
            </div>

            <TimerBar />

            {/* Quote card */}
            <div className={`bg-gradient-to-br ${playColor?.bg || "from-slate-800 to-slate-900"} border border-slate-700/50 rounded-2xl p-6 mb-6`}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${playColor?.badge || "bg-slate-700 text-slate-300"}`}>
                  {currentQ.play}
                </span>
                <span className="text-xs text-slate-500">{currentQ.act}</span>
              </div>
              <blockquote className="text-xl md:text-2xl font-serif italic text-slate-100 leading-relaxed">
                "{currentQ.text}"
              </blockquote>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {currentQ.options.map((opt, i) => {
                let cls = "bg-slate-800/80 border-slate-700/50 hover:bg-slate-700/80 hover:border-slate-600 text-slate-200";
                let anim = "";
                if (revealed) {
                  if (opt === currentQ.character) {
                    cls = "bg-emerald-900/40 border-emerald-500/60 text-emerald-300 ws-glow";
                  } else if (opt === selected) {
                    cls = "bg-red-900/40 border-red-500/60 text-red-300";
                    anim = "ws-shake";
                  } else {
                    cls = "bg-slate-800/40 border-slate-700/30 text-slate-500";
                  }
                }
                return (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    disabled={revealed}
                    className={`${anim} border rounded-xl px-4 py-3 text-left font-medium transition-all ${cls}`}
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {/* Revealed: show answer + next */}
            {revealed && (
              <div className="ws-fadeup">
                {selected === currentQ.character ? (
                  <p className="text-emerald-400 font-semibold text-center mb-3">
                    Correct! {(Date.now() - questionStart) / 1000 < 5 ? "+5 speed bonus!" : ""}
                  </p>
                ) : (
                  <p className="text-red-400 text-center mb-3">
                    Wrong — it was <span className="font-semibold text-red-300">{currentQ.character}</span>
                  </p>
                )}
                <button
                  onClick={nextQuestion}
                  className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all flex items-center justify-center gap-2 border border-slate-700/50"
                >
                  {qIndex + 1 >= questions.length ? "See Results" : "Next Question"} <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* ── RESULTS ── */}
        {phase === "result" && (() => {
          const pct = Math.round((correctCount / questions.length) * 100);
          const laurenEmotion = pct >= 90 ? 'celebrating' : pct >= 70 ? 'happy' : pct >= 50 ? 'encouraging' : 'concerned';
          const laurenMessage = pct >= 90 ? "Outstanding work! You really know your stuff — that's Grade 9 territory!"
            : pct >= 70 ? "Great job! You're showing solid understanding. Keep practising to push even higher!"
            : pct >= 50 ? "Good effort! You're getting there — review the ones you missed and try again."
            : "Don't worry — this is how we learn! Review the feedback and give it another go.";
          return (
          <div className="ws-fadeup text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-600/20 mb-6">
              <Trophy className="w-10 h-10 text-emerald-400" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Game Over!</h2>
            <p className="text-slate-400 mb-8">Here's how you did:</p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4">
                <Star className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                <div className="text-2xl font-bold text-emerald-400">{score}</div>
                <div className="text-xs text-slate-500">Score</div>
              </div>
              <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4">
                <Target className="w-5 h-5 text-sky-400 mx-auto mb-1" />
                <div className="text-2xl font-bold text-sky-400">{Math.round((correctCount / questions.length) * 100)}%</div>
                <div className="text-xs text-slate-500">Accuracy</div>
              </div>
              <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4">
                <Zap className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                <div className="text-2xl font-bold text-amber-400">{bestStreak}</div>
                <div className="text-xs text-slate-500">Best Streak</div>
              </div>
            </div>

            {score >= highScore.current.score && score > 0 && (
              <div className="bg-amber-900/20 border border-amber-700/40 rounded-xl p-3 mb-6 text-amber-400 font-semibold">
                New High Score!
              </div>
            )}

            <div className="mb-6">
              <Lauren emotion={laurenEmotion} message={laurenMessage} size="medium" position="inline" />
            </div>

            <div className="flex gap-3">
              <button
                onClick={startGame}
                className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" /> Play Again
              </button>
              <button
                onClick={() => setPhase("menu")}
                className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all border border-slate-700/50"
              >
                Back to Menu
              </button>
            </div>
          </div>
          );
        })()}
      </div>
      </GameWrapper>
    </div>
  );
}
