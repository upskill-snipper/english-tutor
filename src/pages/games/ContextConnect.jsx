import { useState, useEffect, useCallback, useRef } from 'react';
import { RotateCcw, Trophy, Zap, BookOpen, ChevronRight, Star, Target, Clock, Calendar, Landmark } from 'lucide-react';
import Navbar from '../../components/Navbar';
import GameWrapper from '../../components/GameWrapper';
import Lauren from '../../components/Lauren';

/* ───────────────────────── CONTEXT FACTS (60+) ───────────────────────── */

const CONTEXT_FACTS = [
  // ── Macbeth ──────────────────────────────────────────────────
  { fact: "Written to please King James I, who was fascinated by witchcraft and had written 'Daemonologie'.", answer: "Macbeth", category: "Author/Audience" },
  { fact: "The Gunpowder Plot of 1605 made audiences fearful of treason and regicide.", answer: "Macbeth", category: "Historical Event" },
  { fact: "James I believed in the divine right of kings — that monarchs were chosen by God.", answer: "Macbeth", category: "Political Belief" },
  { fact: "The Jacobean era saw widespread belief in witches, with thousands tried and executed.", answer: "Macbeth", category: "Social Context" },
  { fact: "Shakespeare's patron was King James I, who united the English and Scottish crowns.", answer: "Macbeth", category: "Author/Audience" },
  { fact: "Written around 1606, during a period of political anxiety after the Gunpowder Plot.", answer: "Macbeth", category: "Historical Event" },
  { fact: "The Great Chain of Being placed God at the top, then kings — disrupting this order brought chaos.", answer: "Macbeth", category: "Political Belief" },
  { fact: "The real Macbeth was an 11th-century Scottish king; Shakespeare drastically changed the history.", answer: "Macbeth", category: "Historical Event" },
  { fact: "Equivocation — deliberately misleading without technically lying — was linked to Jesuit priests and the Gunpowder Plot.", answer: "Macbeth", category: "Social Context" },
  { fact: "Jacobean audiences believed that killing a king was a sin against God, not just a crime.", answer: "Macbeth", category: "Political Belief" },

  // ── An Inspector Calls ──────────────────────────────────────
  { fact: "Set in 1912, but written in 1945 — Priestley used dramatic irony to expose pre-war attitudes.", answer: "An Inspector Calls", category: "Historical Event" },
  { fact: "J.B. Priestley was a committed socialist who believed in collective responsibility.", answer: "An Inspector Calls", category: "Author/Audience" },
  { fact: "Mr Birling confidently predicts the Titanic is 'unsinkable' — it sank in April 1912.", answer: "An Inspector Calls", category: "Historical Event" },
  { fact: "Birling dismisses the idea of war — WWI began in 1914, killing millions.", answer: "An Inspector Calls", category: "Historical Event" },
  { fact: "The 1945 audience had just lived through WWII and the Blitz, making Birling's optimism seem foolish.", answer: "An Inspector Calls", category: "Author/Audience" },
  { fact: "The welfare state and NHS were being created in 1945, reflecting socialist ideals.", answer: "An Inspector Calls", category: "Social Context" },
  { fact: "Priestley's message aligned with the 1945 Labour landslide election victory.", answer: "An Inspector Calls", category: "Political Belief" },
  { fact: "In 1912, women could not vote, and working-class women had almost no legal protections.", answer: "An Inspector Calls", category: "Social Context" },
  { fact: "Edwardian society was rigidly class-based, with wealthy industrialists exploiting cheap labour.", answer: "An Inspector Calls", category: "Social Context" },
  { fact: "The play was first performed in Moscow in 1945, before its London premiere in 1946.", answer: "An Inspector Calls", category: "Author/Audience" },

  // ── A Christmas Carol ───────────────────────────────────────
  { fact: "Charles Dickens wrote this in 1843 to highlight the plight of the Victorian poor.", answer: "A Christmas Carol", category: "Author/Audience" },
  { fact: "The 1834 Poor Law forced the destitute into brutal workhouses where families were separated.", answer: "A Christmas Carol", category: "Social Context" },
  { fact: "Thomas Malthus argued that poverty was inevitable and the population must be reduced.", answer: "A Christmas Carol", category: "Political Belief" },
  { fact: "The Industrial Revolution created vast wealth for factory owners but misery for workers.", answer: "A Christmas Carol", category: "Historical Event" },
  { fact: "Child labour was rampant in Victorian England — children worked in mines, factories, and as chimney sweeps.", answer: "A Christmas Carol", category: "Social Context" },
  { fact: "Dickens visited a tin mine in Cornwall and was horrified by the child workers he saw.", answer: "A Christmas Carol", category: "Author/Audience" },
  { fact: "Dickens himself experienced poverty as a child when his father was sent to debtors' prison.", answer: "A Christmas Carol", category: "Author/Audience" },
  { fact: "The 'surplus population' phrase echoes Malthusian economics that the poor should be left to die.", answer: "A Christmas Carol", category: "Political Belief" },
  { fact: "Victorian philanthropy was growing, but many wealthy people still believed poverty was a moral failing.", answer: "A Christmas Carol", category: "Social Context" },
  { fact: "Written as a direct response to a parliamentary report on child labour in mines and factories.", answer: "A Christmas Carol", category: "Historical Event" },

  // ── Romeo & Juliet ──────────────────────────────────────────
  { fact: "Written during the Elizabethan era (c. 1597), when Queen Elizabeth I ruled England.", answer: "Romeo & Juliet", category: "Historical Event" },
  { fact: "Elizabethan society was patriarchal — fathers had absolute authority over daughters.", answer: "Romeo & Juliet", category: "Social Context" },
  { fact: "Arranged marriages were common among wealthy families to secure political and financial alliances.", answer: "Romeo & Juliet", category: "Social Context" },
  { fact: "Set in Verona, reflecting the real feuds between Italian city-state families in the Renaissance.", answer: "Romeo & Juliet", category: "Historical Event" },
  { fact: "The Elizabethan audience would have seen the feud as a threat to social order and God's plan.", answer: "Romeo & Juliet", category: "Political Belief" },
  { fact: "Women had very few rights — they were considered property, passing from father to husband.", answer: "Romeo & Juliet", category: "Social Context" },
  { fact: "Shakespeare based the story on Arthur Brooke's poem 'The Tragicall Historye of Romeus and Juliet' (1562).", answer: "Romeo & Juliet", category: "Author/Audience" },
  { fact: "Elizabethan ideas of love were influenced by Petrarchan poetry — unrequited love and idealised women.", answer: "Romeo & Juliet", category: "Social Context" },
  { fact: "The role of the church was central — Friar Lawrence represents religious authority in personal matters.", answer: "Romeo & Juliet", category: "Political Belief" },
  { fact: "On the Elizabethan stage, female roles were played by boy actors, adding complexity to the love scenes.", answer: "Romeo & Juliet", category: "Author/Audience" },

  // ── Blood Brothers ──────────────────────────────────────────
  { fact: "Willy Russell wrote this in 1983, during Margaret Thatcher's government and mass unemployment.", answer: "Blood Brothers", category: "Historical Event" },
  { fact: "Set in Liverpool, which was devastated by 1980s deindustrialisation and the decline of the docks.", answer: "Blood Brothers", category: "Social Context" },
  { fact: "Thatcherism promoted individualism and private enterprise over collective welfare.", answer: "Blood Brothers", category: "Political Belief" },
  { fact: "The play explores the nature vs nurture debate — are we shaped by biology or environment?", answer: "Blood Brothers", category: "Social Context" },
  { fact: "The British class system is central: Edward has private education while Mickey attends a state school.", answer: "Blood Brothers", category: "Social Context" },
  { fact: "Russell himself grew up in a working-class Liverpool family and left school with one O-Level.", answer: "Blood Brothers", category: "Author/Audience" },
  { fact: "1980s unemployment in Liverpool reached over 20%, with entire communities dependent on benefits.", answer: "Blood Brothers", category: "Historical Event" },
  { fact: "Council housing estates were stigmatised, while suburbs like the one Edward grows up in represented aspiration.", answer: "Blood Brothers", category: "Social Context" },
  { fact: "The play was written as a response to growing inequality under Conservative economic policies.", answer: "Blood Brothers", category: "Political Belief" },
  { fact: "Marilyn Monroe is referenced as a symbol of glamour and tragedy — fame does not equal happiness.", answer: "Blood Brothers", category: "Author/Audience" },

  // ── Poetry: AQA Power & Conflict ────────────────────────────
  { fact: "Wilfred Owen wrote from the trenches of WWI, dying just one week before the Armistice in 1918.", answer: "Power & Conflict Poetry", category: "Author/Audience" },
  { fact: "'Ozymandias' by Shelley reflects on the impermanence of political power and empires.", answer: "Power & Conflict Poetry", category: "Political Belief" },
  { fact: "Ted Hughes wrote 'Bayonet Charge' drawing on his father's experiences in WWI at Gallipoli.", answer: "Power & Conflict Poetry", category: "Author/Audience" },
  { fact: "'The Charge of the Light Brigade' by Tennyson commemorates a disastrous cavalry charge in the Crimean War (1854).", answer: "Power & Conflict Poetry", category: "Historical Event" },
  { fact: "Seamus Heaney's 'Storm on the Island' uses nature as a metaphor for the Troubles in Northern Ireland.", answer: "Power & Conflict Poetry", category: "Political Belief" },
  { fact: "'Remains' by Simon Armitage is based on a real interview with a soldier suffering PTSD from the Iraq War.", answer: "Power & Conflict Poetry", category: "Historical Event" },
  { fact: "Shelley was a Romantic poet who believed in revolution against tyranny and oppressive governments.", answer: "Power & Conflict Poetry", category: "Political Belief" },
  { fact: "'London' by William Blake criticises the suffering caused by industrialisation and institutional corruption.", answer: "Power & Conflict Poetry", category: "Social Context" },
  { fact: "'Kamikaze' by Beatrice Garland explores the honour culture of WWII Japan and the shame of survival.", answer: "Power & Conflict Poetry", category: "Social Context" },
  { fact: "'Checking Out Me History' by John Agard challenges the Eurocentric bias of the British education system.", answer: "Power & Conflict Poetry", category: "Political Belief" },

  // ── Poetry: Edexcel / additional ────────────────────────────
  { fact: "Carol Ann Duffy became the first female Poet Laureate in 2009, often writing about power and gender.", answer: "Edexcel Anthology Poetry", category: "Author/Audience" },
  { fact: "'The Emigree' by Carol Rumens explores displacement, memory, and political exile.", answer: "Edexcel Anthology Poetry", category: "Social Context" },
  { fact: "Imtiaz Dharker writes about identity, borders, and belonging as a Scottish-Pakistani poet.", answer: "Edexcel Anthology Poetry", category: "Author/Audience" },
  { fact: "The Romantic poets (Blake, Wordsworth, Shelley) wrote during the French Revolution and Industrial Revolution.", answer: "Edexcel Anthology Poetry", category: "Historical Event" },
  { fact: "War poetry emerged as a distinct genre during WWI, challenging glorified views of combat.", answer: "Edexcel Anthology Poetry", category: "Historical Event" },
  { fact: "Post-colonial poetry challenges the legacy of the British Empire and its impact on identity.", answer: "Edexcel Anthology Poetry", category: "Political Belief" },
];

/* ───────────────────── TIMELINE MODE DATA ───────────────────── */

const TIMELINE_EVENTS = [
  { event: "Shakespeare writes Macbeth for King James I", decade: "1600s", year: 1606 },
  { event: "The Gunpowder Plot — Guy Fawkes attempts to blow up Parliament", decade: "1600s", year: 1605 },
  { event: "Shakespeare writes Romeo & Juliet", decade: "1590s", year: 1597 },
  { event: "Arthur Brooke publishes 'The Tragicall Historye of Romeus and Juliet'", decade: "1560s", year: 1562 },
  { event: "Queen Elizabeth I begins her reign", decade: "1550s", year: 1558 },
  { event: "Charles Dickens publishes A Christmas Carol", decade: "1840s", year: 1843 },
  { event: "The Poor Law Amendment Act creates workhouses", decade: "1830s", year: 1834 },
  { event: "The Titanic sinks on its maiden voyage", decade: "1910s", year: 1912 },
  { event: "World War I begins", decade: "1910s", year: 1914 },
  { event: "Wilfred Owen dies in WWI, one week before the Armistice", decade: "1910s", year: 1918 },
  { event: "J.B. Priestley writes An Inspector Calls", decade: "1940s", year: 1945 },
  { event: "World War II ends and the Labour Party wins a landslide election", decade: "1940s", year: 1945 },
  { event: "The NHS is founded as part of the welfare state", decade: "1940s", year: 1948 },
  { event: "Willy Russell writes Blood Brothers", decade: "1980s", year: 1983 },
  { event: "Margaret Thatcher becomes Prime Minister", decade: "1970s", year: 1979 },
  { event: "The Charge of the Light Brigade takes place in the Crimean War", decade: "1850s", year: 1854 },
  { event: "Percy Bysshe Shelley writes 'Ozymandias'", decade: "1810s", year: 1818 },
  { event: "The French Revolution begins", decade: "1780s", year: 1789 },
  { event: "William Blake publishes 'Songs of Experience' including 'London'", decade: "1790s", year: 1794 },
  { event: "An Inspector Calls is set — the Birlings celebrate Sheila's engagement", decade: "1910s", year: 1912 },
  { event: "King James I publishes 'Daemonologie', a treatise on witchcraft", decade: "1590s", year: 1597 },
  { event: "The Witchcraft Act makes witchcraft punishable by death in England", decade: "1560s", year: 1563 },
  { event: "Dickens visits a Cornish tin mine and is horrified by child labour", decade: "1840s", year: 1842 },
  { event: "Carol Ann Duffy becomes the first female Poet Laureate", decade: "2000s", year: 2009 },
  { event: "The Iraq War begins — context for Simon Armitage's 'Remains'", decade: "2000s", year: 2003 },
  { event: "Liverpool docks decline, leading to mass unemployment in Merseyside", decade: "1980s", year: 1981 },
  { event: "Thomas Malthus publishes 'An Essay on the Principle of Population'", decade: "1790s", year: 1798 },
  { event: "The Industrial Revolution transforms Britain's economy and cities", decade: "1760s", year: 1760 },
  { event: "Seamus Heaney writes during the Troubles in Northern Ireland", decade: "1960s", year: 1966 },
  { event: "Women gain the right to vote on equal terms with men in the UK", decade: "1920s", year: 1928 },
];

const DECADE_OPTIONS = [
  "1550s", "1560s", "1590s", "1600s", "1760s", "1780s", "1790s",
  "1810s", "1830s", "1840s", "1850s", "1910s", "1920s", "1940s",
  "1960s", "1970s", "1980s", "2000s"
];

/* ──────────────────────── All text/answer options ──────────────────────── */

const ALL_TEXTS = [
  "Macbeth",
  "An Inspector Calls",
  "A Christmas Carol",
  "Romeo & Juliet",
  "Blood Brothers",
  "Power & Conflict Poetry",
  "Edexcel Anthology Poetry",
];

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
  const filtered = pool.filter(t => t !== correct);
  return shuffle(filtered).slice(0, count);
}

function generateContextRound() {
  const shuffled = shuffle(CONTEXT_FACTS);
  const questions = shuffled.slice(0, 15);
  return questions.map(q => {
    const distractors = pickDistractors(q.answer, ALL_TEXTS, 3);
    const options = shuffle([q.answer, ...distractors]);
    return { ...q, options };
  });
}

function generateTimelineRound() {
  const shuffled = shuffle(TIMELINE_EVENTS);
  const questions = shuffled.slice(0, 15);
  return questions.map(q => {
    const correctDecade = q.decade;
    const distractors = pickDistractors(correctDecade, DECADE_OPTIONS, 3);
    const options = shuffle([correctDecade, ...distractors]).sort((a, b) => {
      return parseInt(a) - parseInt(b);
    });
    return { ...q, options, answer: correctDecade };
  });
}

const LS_KEY = "learnright_game_contextconnect";

function getHighScores() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || { context: { score: 0, accuracy: 0, streak: 0 }, timeline: { score: 0, accuracy: 0, streak: 0 } }; }
  catch { return { context: { score: 0, accuracy: 0, streak: 0 }, timeline: { score: 0, accuracy: 0, streak: 0 } }; }
}
function saveHighScore(mode, data) {
  const prev = getHighScores();
  if (data.score > (prev[mode]?.score || 0)) {
    prev[mode] = data;
    localStorage.setItem(LS_KEY, JSON.stringify(prev));
  }
}

/* ──────────────────────── CSS keyframes ──────────────────────── */

const STYLE_ID = "contextconnect-anims";
function injectStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    @keyframes ccCardFlip {
      0%   { transform: rotateY(90deg); opacity: 0; }
      100% { transform: rotateY(0deg);  opacity: 1; }
    }
    @keyframes ccShake {
      0%, 100% { transform: translateX(0); }
      20%      { transform: translateX(-8px); }
      40%      { transform: translateX(8px); }
      60%      { transform: translateX(-6px); }
      80%      { transform: translateX(6px); }
    }
    @keyframes ccBounce {
      0%, 100% { transform: scale(1); }
      50%      { transform: scale(1.25); }
    }
    @keyframes ccGlow {
      0%   { box-shadow: 0 0 5px rgba(139,92,246,0.4); }
      50%  { box-shadow: 0 0 25px rgba(139,92,246,0.7); }
      100% { box-shadow: 0 0 5px rgba(139,92,246,0.4); }
    }
    @keyframes ccFadeUp {
      0%   { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes ccSlideIn {
      0%   { opacity: 0; transform: translateX(-20px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes ccPulse {
      0%, 100% { opacity: 0.6; }
      50%      { opacity: 1; }
    }
    .cc-flip    { animation: ccCardFlip 0.5s ease-out both; }
    .cc-shake   { animation: ccShake 0.4s ease-in-out; }
    .cc-bounce  { animation: ccBounce 0.35s ease-in-out; }
    .cc-glow    { animation: ccGlow 0.8s ease-in-out; }
    .cc-fadeup  { animation: ccFadeUp 0.5s ease-out both; }
    .cc-slidein { animation: ccSlideIn 0.4s ease-out both; }
    .cc-pulse   { animation: ccPulse 2s ease-in-out infinite; }
  `;
  document.head.appendChild(style);
}

/* ──────────────────────── Category colors ──────────────────────── */

const CATEGORY_COLORS = {
  "Historical Event": { bg: "from-amber-900/40 to-amber-950/20", badge: "bg-amber-900/60 text-amber-300", icon: "text-amber-400" },
  "Social Context": { bg: "from-teal-900/40 to-teal-950/20", badge: "bg-teal-900/60 text-teal-300", icon: "text-teal-400" },
  "Political Belief": { bg: "from-rose-900/40 to-rose-950/20", badge: "bg-rose-900/60 text-rose-300", icon: "text-rose-400" },
  "Author/Audience": { bg: "from-violet-900/40 to-violet-950/20", badge: "bg-violet-900/60 text-violet-300", icon: "text-violet-400" },
};

/* ──────────────────────── COMPONENT ──────────────────────── */

export default function ContextConnect() {
  const [gameMode, setGameMode] = useState(null); // null | "context" | "timeline"
  const [phase, setPhase] = useState("menu"); // menu | playing | result
  const [questions, setQuestions] = useState([]);
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [questionStart, setQuestionStart] = useState(null);
  const [flipKey, setFlipKey] = useState(0);
  const [scorePop, setScorePop] = useState(false);
  const highScores = useRef(getHighScores());

  useEffect(() => { injectStyles(); }, []);

  /* ── Start game ── */
  const startGame = useCallback((mode) => {
    const qs = mode === "timeline" ? generateTimelineRound() : generateContextRound();
    setGameMode(mode);
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
  }, []);

  /* ── Answer handler ── */
  const handleAnswer = useCallback((option) => {
    if (revealed) return;
    const q = questions[qIndex];
    const isCorrect = option === q.answer;
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
      saveHighScore(gameMode, { score: finalScore, accuracy, streak: bestStreak });
      highScores.current = getHighScores();
      setPhase("result");
    } else {
      setQIndex(i => i + 1);
      setSelected(null);
      setRevealed(false);
      setQuestionStart(Date.now());
      setFlipKey(k => k + 1);
    }
  }, [qIndex, questions, score, correctCount, bestStreak, gameMode]);

  /* ── Timer bar ── */
  const TimerBar = () => {
    const [elapsed, setElapsed] = useState(0);
    useEffect(() => {
      if (revealed) return;
      const id = setInterval(() => setElapsed((Date.now() - questionStart) / 1000), 100);
      return () => clearInterval(id);
    }, []);
    const pct = Math.min(elapsed / 20, 1) * 100;
    const color = elapsed < 7 ? "bg-violet-500" : elapsed < 14 ? "bg-amber-500" : "bg-red-500";
    return (
      <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden mb-6">
        <div className={`h-full ${color} transition-all duration-100 rounded-full`} style={{ width: `${pct}%` }} />
      </div>
    );
  };

  /* ─────────────── RENDER ─────────────── */

  const currentQ = questions[qIndex];
  const catColor = currentQ ? CATEGORY_COLORS[currentQ.category] : null;
  const modeHS = gameMode ? (highScores.current[gameMode] || { score: 0, accuracy: 0, streak: 0 }) : { score: 0, accuracy: 0, streak: 0 };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-slate-100">
      <Navbar />
      <GameWrapper gameId="context-connect">
      <div className="max-w-2xl mx-auto px-4 pt-8 pb-16">
        {/* ── MENU ── */}
        {phase === "menu" && (
          <div className="cc-fadeup">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-600/20 mb-4">
                <Landmark className="w-8 h-8 text-violet-400" />
              </div>
              <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">Context Connect</h1>
              <p className="text-slate-400">Match historical and social contexts to the correct GCSE texts, authors, and time periods.</p>
            </div>

            {/* Mode selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {/* Context Match mode */}
              <button
                onClick={() => startGame("context")}
                className="group bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 text-left hover:border-violet-500/50 hover:bg-violet-900/10 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-bold">Context Match</h3>
                </div>
                <p className="text-sm text-slate-400 mb-3">A context fact appears — pick which text or poet it relates to from 4 options.</p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>15 questions</span>
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  <span>Score + streaks</span>
                </div>
                {highScores.current.context?.score > 0 && (
                  <div className="mt-3 flex items-center gap-2 text-xs text-amber-400">
                    <Trophy className="w-3.5 h-3.5" />
                    Best: {highScores.current.context.score} pts ({highScores.current.context.accuracy}%)
                  </div>
                )}
                <div className="mt-3 text-violet-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Play <ChevronRight className="w-4 h-4" />
                </div>
              </button>

              {/* Timeline mode */}
              <button
                onClick={() => startGame("timeline")}
                className="group bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 text-left hover:border-amber-500/50 hover:bg-amber-900/10 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-600/20 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold">Timeline</h3>
                </div>
                <p className="text-sm text-slate-400 mb-3">Place a historical context event in the correct decade or century.</p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>15 questions</span>
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  <span>Score + streaks</span>
                </div>
                {highScores.current.timeline?.score > 0 && (
                  <div className="mt-3 flex items-center gap-2 text-xs text-amber-400">
                    <Trophy className="w-3.5 h-3.5" />
                    Best: {highScores.current.timeline.score} pts ({highScores.current.timeline.accuracy}%)
                  </div>
                )}
                <div className="mt-3 text-amber-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Play <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            </div>

            {/* Decorative timeline line */}
            <div className="flex items-center gap-3 justify-center text-xs text-slate-600 cc-pulse">
              <span>1560s</span>
              <div className="h-px w-8 bg-slate-700" />
              <span>1600s</span>
              <div className="h-px w-8 bg-slate-700" />
              <span>1840s</span>
              <div className="h-px w-8 bg-slate-700" />
              <span>1910s</span>
              <div className="h-px w-8 bg-slate-700" />
              <span>1940s</span>
              <div className="h-px w-8 bg-slate-700" />
              <span>1980s</span>
            </div>
          </div>
        )}

        {/* ── PLAYING ── */}
        {phase === "playing" && currentQ && (
          <div key={flipKey} className="cc-flip">
            {/* Top bar: progress + score */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-slate-400">
                Question <span className="text-slate-200 font-semibold">{qIndex + 1}</span> / {questions.length}
              </span>
              <div className="flex items-center gap-4">
                {streak > 1 && (
                  <span className="flex items-center gap-1 text-amber-400 text-sm font-medium cc-slidein">
                    <Zap className="w-4 h-4" /> {streak} streak
                  </span>
                )}
                <span className={`text-lg font-bold text-violet-400 ${scorePop ? "cc-bounce" : ""}`}>
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
                    i < qIndex ? "bg-violet-500" : i === qIndex ? "bg-violet-400/60" : "bg-slate-700"
                  }`}
                />
              ))}
            </div>

            <TimerBar />

            {/* Question card */}
            {gameMode === "context" ? (
              <div className={`bg-gradient-to-br ${catColor?.bg || "from-slate-800 to-slate-900"} border border-slate-700/50 rounded-2xl p-6 mb-6`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${catColor?.badge || "bg-slate-700 text-slate-300"}`}>
                    {currentQ.category}
                  </span>
                </div>
                <p className="text-lg md:text-xl font-medium text-slate-100 leading-relaxed">
                  {currentQ.fact}
                </p>
                <p className="text-sm text-slate-500 mt-3">Which text does this relate to?</p>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-amber-900/30 to-slate-900 border border-slate-700/50 rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-amber-900/60 text-amber-300">
                    <Clock className="w-3 h-3 inline mr-1 -mt-0.5" />Timeline
                  </span>
                  {currentQ.year && (
                    <span className="text-xs text-slate-600">(Year: {currentQ.year})</span>
                  )}
                </div>
                <p className="text-lg md:text-xl font-medium text-slate-100 leading-relaxed">
                  {currentQ.event}
                </p>
                <p className="text-sm text-slate-500 mt-3">Which decade did this occur?</p>
              </div>
            )}

            {/* Options */}
            <div className={`grid gap-3 mb-4 ${gameMode === "timeline" ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-1 sm:grid-cols-2"}`}>
              {currentQ.options.map((opt, i) => {
                let cls = "bg-slate-800/80 border-slate-700/50 hover:bg-slate-700/80 hover:border-slate-600 text-slate-200";
                let anim = "";
                if (revealed) {
                  if (opt === currentQ.answer) {
                    cls = "bg-violet-900/40 border-violet-500/60 text-violet-300 cc-glow";
                  } else if (opt === selected) {
                    cls = "bg-red-900/40 border-red-500/60 text-red-300";
                    anim = "cc-shake";
                  } else {
                    cls = "bg-slate-800/40 border-slate-700/30 text-slate-500";
                  }
                }
                return (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    disabled={revealed}
                    className={`${anim} border rounded-xl px-4 py-3 text-center font-medium transition-all ${cls}`}
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {/* Revealed: show answer + next */}
            {revealed && (
              <div className="cc-fadeup">
                {selected === currentQ.answer ? (
                  <p className="text-violet-400 font-semibold text-center mb-3">
                    Correct! {(Date.now() - questionStart) / 1000 < 5 ? "+5 speed bonus!" : ""}
                  </p>
                ) : (
                  <p className="text-red-400 text-center mb-3">
                    Wrong — the answer was <span className="font-semibold text-red-300">{currentQ.answer}</span>
                    {gameMode === "timeline" && currentQ.year && (
                      <span className="text-slate-500 ml-1">({currentQ.year})</span>
                    )}
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
        {phase === "result" && (
          <div className="cc-fadeup text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-violet-600/20 mb-6">
              <Trophy className="w-10 h-10 text-violet-400" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Game Over!</h2>
            <p className="text-slate-400 mb-1">
              {gameMode === "context" ? "Context Match" : "Timeline"} — Here's how you did:
            </p>
            <p className="text-slate-500 text-sm mb-8">
              {correctCount >= 13 ? "Outstanding knowledge of your GCSE contexts!" :
               correctCount >= 10 ? "Great work — you know your contexts well." :
               correctCount >= 7 ? "Good effort — keep revising those contexts!" :
               "Keep studying — context knowledge is vital for top grades!"}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4">
                <Star className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                <div className="text-2xl font-bold text-violet-400">{score}</div>
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

            {score >= modeHS.score && score > 0 && (
              <div className="bg-amber-900/20 border border-amber-700/40 rounded-xl p-3 mb-6 text-amber-400 font-semibold">
                New High Score!
              </div>
            )}

            {(() => {
              const pct = Math.round((correctCount / questions.length) * 100);
              const laurenEmotion = pct >= 90 ? 'celebrating' : pct >= 70 ? 'happy' : pct >= 50 ? 'encouraging' : 'concerned';
              const laurenMessage = pct >= 90 ? "Outstanding work! You really know your stuff — that's Grade 9 territory!"
                : pct >= 70 ? "Great job! You're showing solid understanding. Keep practising to push even higher!"
                : pct >= 50 ? "Good effort! You're getting there — review the ones you missed and try again."
                : "Don't worry — this is how we learn! Review the feedback and give it another go.";
              return <div className="mb-6"><Lauren emotion={laurenEmotion} message={laurenMessage} size="medium" position="inline" /></div>;
            })()}

            <div className="flex gap-3">
              <button
                onClick={() => startGame(gameMode)}
                className="flex-1 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" /> Play Again
              </button>
              <button
                onClick={() => { setPhase("menu"); setGameMode(null); }}
                className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all border border-slate-700/50"
              >
                Back to Menu
              </button>
            </div>
          </div>
        )}
      </div>
      </GameWrapper>
    </div>
  );
}
