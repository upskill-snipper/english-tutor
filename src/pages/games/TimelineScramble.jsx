import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowDown, Star, RotateCcw, ChevronRight, CheckCircle2, XCircle, Trophy, Clock } from 'lucide-react';
import Navbar from '../../components/Navbar';
import GameWrapper from '../../components/GameWrapper';
import Lauren from '../../components/Lauren';
import { recordGamePlayed } from '../../utils/gameUtils';

/* ───────────────────────────── DATA ───────────────────────────── */

const TIMELINE_DATA = [
  {
    play: 'Macbeth',
    events: [
      { id: 'm1',  text: 'The witches meet Macbeth on the heath',                       order: 1,  context: 'Act 1 — The three witches prophesy that Macbeth will become Thane of Cawdor and King.' },
      { id: 'm2',  text: 'Macbeth is named Thane of Cawdor',                            order: 2,  context: 'Act 1 — King Duncan rewards Macbeth for his bravery in battle, fulfilling the first prophecy.' },
      { id: 'm3',  text: 'Lady Macbeth reads Macbeth\'s letter and plans the murder',    order: 3,  context: 'Act 1 — Lady Macbeth calls on dark spirits and resolves to push Macbeth towards regicide.' },
      { id: 'm4',  text: 'King Duncan arrives at Macbeth\'s castle',                     order: 4,  context: 'Act 1 — Duncan praises the castle, unaware of the plot against him.' },
      { id: 'm5',  text: 'Macbeth murders King Duncan',                                 order: 5,  context: 'Act 2 — Macbeth stabs Duncan in his sleep, tormented by a vision of a floating dagger.' },
      { id: 'm6',  text: 'Macbeth is crowned King of Scotland',                         order: 6,  context: 'Act 2 — Malcolm and Donalbain flee, and Macbeth takes the throne.' },
      { id: 'm7',  text: 'Macbeth has Banquo murdered',                                 order: 7,  context: 'Act 3 — Macbeth fears Banquo\'s descendants will inherit the throne and hires assassins.' },
      { id: 'm8',  text: 'Banquo\'s ghost appears at the banquet',                      order: 8,  context: 'Act 3 — Macbeth is terrified by the ghost, alarming his guests and raising suspicion.' },
      { id: 'm9',  text: 'The witches show Macbeth three apparitions',                  order: 9,  context: 'Act 4 — Macbeth is told to beware Macduff, that no man born of woman can harm him, and he is safe until Birnam Wood moves.' },
      { id: 'm10', text: 'Macduff\'s family is slaughtered',                            order: 10, context: 'Act 4 — Macbeth orders the murder of Macduff\'s wife and children after Macduff flees to England.' },
      { id: 'm11', text: 'Lady Macbeth sleepwalks and dies',                            order: 11, context: 'Act 5 — Consumed by guilt, Lady Macbeth obsessively washes imaginary blood from her hands before her death.' },
      { id: 'm12', text: 'Macduff kills Macbeth and Malcolm becomes King',              order: 12, context: 'Act 5 — Macduff reveals he was born by caesarean section and slays the tyrant.' },
    ],
  },
  {
    play: 'An Inspector Calls',
    events: [
      { id: 'ic1',  text: 'The Birling family celebrate Sheila\'s engagement to Gerald', order: 1,  context: 'Act 1 — Arthur Birling makes confident speeches about progress and individual responsibility.' },
      { id: 'ic2',  text: 'Inspector Goole arrives and announces Eva Smith\'s death',     order: 2,  context: 'Act 1 — The Inspector reveals a young woman has died after swallowing disinfectant.' },
      { id: 'ic3',  text: 'Birling admits he sacked Eva from his factory',               order: 3,  context: 'Act 1 — Eva was fired for leading a strike demanding higher wages.' },
      { id: 'ic4',  text: 'Sheila recognises Eva and admits getting her fired from Milwards', order: 4, context: 'Act 1 — Sheila had Eva dismissed out of jealousy after she thought Eva laughed at her.' },
      { id: 'ic5',  text: 'Gerald reveals his affair with Daisy Renton',                 order: 5,  context: 'Act 2 — Gerald confesses he kept Eva as his mistress before ending the relationship.' },
      { id: 'ic6',  text: 'Mrs Birling admits refusing Eva help at the charity',         order: 6,  context: 'Act 2 — Sybil Birling turned Eva away from the Brumley Women\'s Charity Organisation.' },
      { id: 'ic7',  text: 'Eric is revealed as the father of Eva\'s child',              order: 7,  context: 'Act 3 — Eric forced himself on Eva and stole money from his father\'s business to support her.' },
      { id: 'ic8',  text: 'The Inspector delivers his final speech about responsibility', order: 8,  context: 'Act 3 — Goole warns that society must learn to care for one another or face "fire and blood and anguish".' },
      { id: 'ic9',  text: 'The family discovers Inspector Goole may not be a real inspector', order: 9, context: 'Act 3 — Gerald and Birling verify no inspector by that name exists on the police force.' },
      { id: 'ic10', text: 'A phone call announces a girl has just died and a real inspector is on his way', order: 10, context: 'Act 3 — The final twist restores the dramatic tension and vindicates the Inspector\'s message.' },
    ],
  },
  {
    play: 'A Christmas Carol',
    events: [
      { id: 'cc1',  text: 'Scrooge refuses charity collectors and dismisses his nephew Fred', order: 1, context: 'Stave 1 — Scrooge is established as cold-hearted, miserly, and dismissive of Christmas.' },
      { id: 'cc2',  text: 'Marley\'s ghost visits Scrooge in chains',                    order: 2, context: 'Stave 1 — Marley warns Scrooge he will be visited by three spirits and must change his ways.' },
      { id: 'cc3',  text: 'The Ghost of Christmas Past shows Scrooge his lonely childhood', order: 3, context: 'Stave 2 — Scrooge sees himself as a neglected boy at school, evoking sympathy and regret.' },
      { id: 'cc4',  text: 'Scrooge sees his younger self with Fezziwig and Belle',       order: 4, context: 'Stave 2 — Fezziwig\'s generosity contrasts Scrooge\'s miserliness; Belle ends their engagement over his greed.' },
      { id: 'cc5',  text: 'The Ghost of Christmas Present shows the Cratchit family',    order: 5, context: 'Stave 3 — Despite poverty, the Cratchits are happy; Tiny Tim is introduced as fragile and vulnerable.' },
      { id: 'cc6',  text: 'Scrooge sees Ignorance and Want beneath the spirit\'s robe',  order: 6, context: 'Stave 3 — Two wretched children represent society\'s neglect of the poor — a direct social warning.' },
      { id: 'cc7',  text: 'The Ghost of Christmas Yet to Come shows Scrooge\'s death',   order: 7, context: 'Stave 4 — Scrooge sees people stealing his belongings and no one mourning his passing.' },
      { id: 'cc8',  text: 'Scrooge sees Tiny Tim has died in the future',                order: 8, context: 'Stave 4 — The Cratchit family grieve for Tim, motivating Scrooge\'s transformation.' },
      { id: 'cc9',  text: 'Scrooge wakes on Christmas morning transformed',              order: 9, context: 'Stave 5 — Scrooge is overjoyed to find he still has time to change and begins his redemption.' },
      { id: 'cc10', text: 'Scrooge raises Bob\'s salary and becomes a second father to Tiny Tim', order: 10, context: 'Stave 5 — Dickens shows Scrooge\'s complete transformation and argues for social responsibility.' },
    ],
  },
  {
    play: 'Romeo & Juliet',
    events: [
      { id: 'rj1',  text: 'A street brawl breaks out between the Montagues and Capulets', order: 1,  context: 'Act 1 — The Prince warns both families that further fighting will be punished by death.' },
      { id: 'rj2',  text: 'Romeo and Juliet meet at the Capulet ball and fall in love',   order: 2,  context: 'Act 1 — Romeo gatecrashes the masquerade; they share a sonnet and a kiss before learning they are enemies.' },
      { id: 'rj3',  text: 'The balcony scene — Romeo and Juliet declare their love',      order: 3,  context: 'Act 2 — Juliet famously asks "What\'s in a name?" as they pledge their love despite the feud.' },
      { id: 'rj4',  text: 'Friar Lawrence agrees to marry them in secret',                order: 4,  context: 'Act 2 — The Friar hopes the marriage will end the feud between the two families.' },
      { id: 'rj5',  text: 'Tybalt kills Mercutio',                                       order: 5,  context: 'Act 3 — Mercutio is fatally stabbed under Romeo\'s arm; he curses both houses with "A plague on both your houses!"' },
      { id: 'rj6',  text: 'Romeo kills Tybalt and is banished from Verona',               order: 6,  context: 'Act 3 — Romeo avenges Mercutio in a rage, and the Prince exiles him from the city.' },
      { id: 'rj7',  text: 'Romeo and Juliet spend their wedding night together',          order: 7,  context: 'Act 3 — They part at dawn as Romeo must flee to Mantua; Juliet has a premonition of death.' },
      { id: 'rj8',  text: 'Capulet arranges Juliet\'s marriage to Paris',                 order: 8,  context: 'Act 3 — Capulet threatens to disown Juliet if she refuses, and the Nurse advises she marry Paris.' },
      { id: 'rj9',  text: 'Friar Lawrence gives Juliet a sleeping potion',                order: 9,  context: 'Act 4 — The plan is for Juliet to fake her death so she can escape to be with Romeo.' },
      { id: 'rj10', text: 'Juliet is found apparently dead on the morning of the wedding', order: 10, context: 'Act 4 — The Capulets discover Juliet\'s body and the wedding becomes a funeral.' },
      { id: 'rj11', text: 'Romeo drinks poison beside Juliet in the tomb',                order: 11, context: 'Act 5 — Romeo never receives the Friar\'s letter and believes Juliet is truly dead.' },
      { id: 'rj12', text: 'Juliet wakes, finds Romeo dead, and stabs herself',            order: 12, context: 'Act 5 — The double suicide finally ends the feud as both families agree to make peace.' },
    ],
  },
  {
    play: 'Blood Brothers',
    events: [
      { id: 'bb1',  text: 'Mrs Johnstone gives one of her twin boys to Mrs Lyons',        order: 1,  context: 'Act 1 — Poverty forces Mrs Johnstone to give up Edward; Mrs Lyons makes her swear on the Bible to keep it secret.' },
      { id: 'bb2',  text: 'Mickey and Edward meet as seven-year-olds and become best friends', order: 2, context: 'Act 1 — Despite their different upbringings, the boys instantly bond and become "blood brothers".' },
      { id: 'bb3',  text: 'Mrs Lyons tries to separate the boys and tells Mrs Johnstone to move', order: 3, context: 'Act 1 — Mrs Lyons becomes paranoid and threatens Mrs Johnstone to keep the twins apart.' },
      { id: 'bb4',  text: 'The Johnstone family is rehoused to Skelmersdale',              order: 4,  context: 'Act 2 — The move to the countryside seems like a fresh start but fate brings the boys together again.' },
      { id: 'bb5',  text: 'Mickey, Edward, and Linda become a teenage trio',               order: 5,  context: 'Act 2 — The three friends spend an idyllic summer together, but a love triangle begins to form.' },
      { id: 'bb6',  text: 'Edward goes to university while Mickey gets a factory job',     order: 6,  context: 'Act 2 — Class division drives them apart; Edward has opportunity while Mickey faces unemployment and hardship.' },
      { id: 'bb7',  text: 'Mickey loses his job and turns to crime with Sammy',            order: 7,  context: 'Act 2 — Desperate and angry, Mickey is involved in a robbery that goes wrong.' },
      { id: 'bb8',  text: 'Mickey is imprisoned and becomes dependent on antidepressants', order: 8,  context: 'Act 2 — Prison breaks Mickey; he emerges changed and struggles to function without medication.' },
      { id: 'bb9',  text: 'Mickey discovers Linda and Edward\'s relationship',             order: 9,  context: 'Act 2 — Mickey feels betrayed by both his wife and his blood brother, fuelling his rage.' },
      { id: 'bb10', text: 'Mrs Johnstone reveals the truth and both twins are killed',     order: 10, context: 'Act 2 — Mickey accidentally shoots Edward; police shoot Mickey. The Narrator asks whether class or superstition killed them.' },
    ],
  },
];

const STORAGE_KEY = 'learnright_game_timeline';

/* ───────────────────────────── HELPERS ─────────────────────────── */

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function loadScores() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; }
}
function saveScore(play, score) {
  const scores = loadScores();
  if (!scores[play] || score > scores[play]) scores[play] = score;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
}

/* ───────────────────────────── STYLES ─────────────────────────── */

const styles = {
  page: {
    minHeight: '100vh',
    background: '#0a0e1a',
    color: '#f1f5f9',
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '2rem 1rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #a78bfa, #6366f1)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: '#94a3b8',
    fontSize: '1rem',
  },
  selectorGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '0.75rem',
    marginBottom: '2rem',
  },
  selectorCard: (active) => ({
    background: active ? 'rgba(99,102,241,0.25)' : 'rgba(30,41,59,0.6)',
    border: active ? '2px solid #6366f1' : '2px solid rgba(148,163,184,0.15)',
    borderRadius: '12px',
    padding: '1rem',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'all 0.2s',
    position: 'relative',
  }),
  selectorTitle: {
    fontWeight: 700,
    fontSize: '0.95rem',
    marginBottom: '0.25rem',
  },
  selectorMeta: {
    color: '#94a3b8',
    fontSize: '0.8rem',
  },
  goldStar: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    color: '#fbbf24',
  },
  bestBadge: {
    fontSize: '0.7rem',
    color: '#fbbf24',
    marginTop: '0.25rem',
  },
  eventCard: (status, selectedNum) => {
    let bg = 'rgba(30,41,59,0.7)';
    let border = '2px solid rgba(148,163,184,0.15)';
    let shadow = 'none';
    if (selectedNum > 0 && status === 'pending') {
      bg = 'rgba(99,102,241,0.15)';
      border = '2px solid #6366f1';
    }
    if (status === 'correct') {
      bg = 'rgba(34,197,94,0.15)';
      border = '2px solid #22c55e';
      shadow = '0 0 12px rgba(34,197,94,0.2)';
    }
    if (status === 'wrong') {
      bg = 'rgba(239,68,68,0.12)';
      border = '2px solid #ef4444';
    }
    return {
      background: bg,
      border,
      boxShadow: shadow,
      borderRadius: '12px',
      padding: '1rem 1rem 1rem 3.5rem',
      cursor: status === 'pending' || status === undefined ? 'pointer' : 'default',
      transition: 'all 0.25s',
      position: 'relative',
      marginBottom: '0.625rem',
      userSelect: 'none',
    };
  },
  numberBadge: (active) => ({
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    background: active ? '#6366f1' : 'rgba(148,163,184,0.15)',
    color: active ? '#fff' : '#64748b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    fontSize: '0.85rem',
  }),
  arrowHint: {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '0.8rem',
    fontWeight: 600,
  },
  btnPrimary: {
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '0.75rem 1.5rem',
    fontWeight: 700,
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
  },
  btnSecondary: {
    background: 'rgba(148,163,184,0.12)',
    color: '#f1f5f9',
    border: '1px solid rgba(148,163,184,0.2)',
    borderRadius: '10px',
    padding: '0.75rem 1.5rem',
    fontWeight: 600,
    fontSize: '0.95rem',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
  },
  scoreBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    padding: '1rem',
    background: 'rgba(30,41,59,0.5)',
    borderRadius: '12px',
    marginBottom: '1.5rem',
  },
  scoreStat: {
    textAlign: 'center',
  },
  scoreValue: {
    fontSize: '1.75rem',
    fontWeight: 800,
  },
  scoreLabel: {
    fontSize: '0.8rem',
    color: '#94a3b8',
  },
  timelineItem: {
    borderLeft: '3px solid #6366f1',
    paddingLeft: '1.25rem',
    paddingBottom: '1.5rem',
    position: 'relative',
    marginLeft: '8px',
  },
  timelineDot: {
    position: 'absolute',
    left: '-8px',
    top: '2px',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    background: '#6366f1',
    border: '2px solid #0a0e1a',
  },
  timelineText: {
    fontWeight: 700,
    fontSize: '0.95rem',
    marginBottom: '0.25rem',
  },
  timelineContext: {
    color: '#94a3b8',
    fontSize: '0.85rem',
    lineHeight: 1.5,
  },
  buttonRow: {
    display: 'flex',
    gap: '0.75rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '1.5rem',
  },
};

/* ───────────────────────────── COMPONENT ───────────────────────── */

export default function TimelineScramble() {
  const [selectedPlay, setSelectedPlay] = useState(null);
  const [shuffledEvents, setShuffledEvents] = useState([]);
  const [selections, setSelections] = useState([]); // ordered list of event ids
  const [checked, setChecked] = useState(false);
  const [results, setResults] = useState(null); // { correct: number, total: number, details: [] }
  const [showTimeline, setShowTimeline] = useState(false);
  const [scores, setScores] = useState(loadScores());

  const playData = useMemo(
    () => TIMELINE_DATA.find((d) => d.play === selectedPlay),
    [selectedPlay]
  );

  const startGame = useCallback(
    (play) => {
      const data = TIMELINE_DATA.find((d) => d.play === play);
      if (!data) return;
      setSelectedPlay(play);
      setShuffledEvents(shuffle(data.events));
      setSelections([]);
      setChecked(false);
      setResults(null);
      setShowTimeline(false);
    },
    []
  );

  function handleCardClick(eventId) {
    if (checked) return;
    if (selections.includes(eventId)) {
      // deselect — remove and renumber
      setSelections((prev) => prev.filter((id) => id !== eventId));
    } else {
      setSelections((prev) => [...prev, eventId]);
    }
  }

  function checkOrder() {
    if (!playData || selections.length !== playData.events.length) return;
    const sorted = [...playData.events].sort((a, b) => a.order - b.order);
    let correctCount = 0;
    const details = selections.map((id, idx) => {
      const event = playData.events.find((e) => e.id === id);
      const correctOrder = event.order;
      const isCorrect = correctOrder === idx + 1;
      if (isCorrect) correctCount++;
      const direction = correctOrder < idx + 1 ? 'up' : correctOrder > idx + 1 ? 'down' : null;
      return { id, isCorrect, direction, placedAt: idx + 1, correctOrder };
    });
    const pct = Math.round((correctCount / sorted.length) * 100);
    setResults({ correct: correctCount, total: sorted.length, percentage: pct, details });
    setChecked(true);
    saveScore(selectedPlay, pct);
    recordGamePlayed();
    setScores(loadScores());
  }

  function tryAgain() {
    if (!playData) return;
    setShuffledEvents(shuffle(playData.events));
    setSelections([]);
    setChecked(false);
    setResults(null);
    setShowTimeline(false);
  }

  function nextText() {
    const idx = TIMELINE_DATA.findIndex((d) => d.play === selectedPlay);
    const next = TIMELINE_DATA[(idx + 1) % TIMELINE_DATA.length];
    startGame(next.play);
  }

  function getEventStatus(eventId) {
    if (!checked || !results) return 'pending';
    const detail = results.details.find((d) => d.id === eventId);
    return detail?.isCorrect ? 'correct' : 'wrong';
  }

  function getEventDirection(eventId) {
    if (!checked || !results) return null;
    const detail = results.details.find((d) => d.id === eventId);
    return detail?.direction || null;
  }

  /* ─────────── SELECT SCREEN ─────────── */
  if (!selectedPlay) {
    return (
      <div style={styles.page}>
        <Navbar />
        <GameWrapper gameId="timeline-scramble">
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={styles.title}>Timeline Scramble</h1>
            <p style={styles.subtitle}>
              Put plot events in the correct chronological order for your set texts
            </p>
          </div>

          <div style={styles.selectorGrid}>
            {TIMELINE_DATA.map((d) => (
              <div
                key={d.play}
                style={styles.selectorCard(false)}
                onClick={() => startGame(d.play)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && startGame(d.play)}
              >
                {scores[d.play] != null && (
                  <Star size={16} style={styles.goldStar} fill="#fbbf24" />
                )}
                <div style={styles.selectorTitle}>{d.play}</div>
                <div style={styles.selectorMeta}>{d.events.length} events</div>
                {scores[d.play] != null && (
                  <div style={styles.bestBadge}>Best: {scores[d.play]}%</div>
                )}
              </div>
            ))}
          </div>

          {/* Progress overview */}
          <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
            {Object.keys(scores).length} / {TIMELINE_DATA.length} texts completed
          </div>
        </div>
        </GameWrapper>
      </div>
    );
  }

  /* ─────────── CORRECT TIMELINE VIEW ─────────── */
  if (showTimeline && playData) {
    const sorted = [...playData.events].sort((a, b) => a.order - b.order);
    return (
      <div style={styles.page}>
        <Navbar />
        <GameWrapper gameId="timeline-scramble">
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={styles.title}>{playData.play} — Full Timeline</h1>
          </div>

          {sorted.map((evt) => (
            <div key={evt.id} style={styles.timelineItem}>
              <div style={styles.timelineDot} />
              <div style={styles.timelineText}>{evt.order}. {evt.text}</div>
              <div style={styles.timelineContext}>{evt.context}</div>
            </div>
          ))}

          <div style={styles.buttonRow}>
            <button style={styles.btnSecondary} onClick={tryAgain}>
              <RotateCcw size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} />
              Try Again
            </button>
            <button style={styles.btnPrimary} onClick={nextText}>
              Next Text
              <ChevronRight size={16} style={{ verticalAlign: 'middle', marginLeft: 4 }} />
            </button>
            <button style={styles.btnSecondary} onClick={() => { setSelectedPlay(null); setShowTimeline(false); }}>
              All Texts
            </button>
            <Link to="/games" style={{ ...styles.btnSecondary, textDecoration: 'none', textAlign: 'center' }}>
              Back to Games
            </Link>
          </div>
        </div>
        </GameWrapper>
      </div>
    );
  }

  /* ─────────── GAME SCREEN ─────────── */
  const allSelected = playData && selections.length === playData.events.length;

  return (
    <div style={styles.page}>
      <Navbar />
      <GameWrapper gameId="timeline-scramble">
      <div style={styles.container}>
        {/* Header with play selector */}
        <div style={styles.header}>
          <h1 style={styles.title}>Timeline Scramble</h1>
          <p style={styles.subtitle}>
            Click events in chronological order for <strong>{selectedPlay}</strong>
          </p>
        </div>

        {/* Play tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1.5rem' }}>
          {TIMELINE_DATA.map((d) => (
            <button
              key={d.play}
              onClick={() => startGame(d.play)}
              style={{
                padding: '0.4rem 0.9rem',
                borderRadius: '8px',
                border: d.play === selectedPlay ? '2px solid #6366f1' : '1px solid rgba(148,163,184,0.2)',
                background: d.play === selectedPlay ? 'rgba(99,102,241,0.2)' : 'rgba(30,41,59,0.5)',
                color: d.play === selectedPlay ? '#a5b4fc' : '#94a3b8',
                fontWeight: d.play === selectedPlay ? 700 : 500,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                position: 'relative',
              }}
            >
              {d.play}
              {scores[d.play] != null && (
                <Star size={10} fill="#fbbf24" color="#fbbf24" style={{ marginLeft: 4, verticalAlign: 'middle' }} />
              )}
            </button>
          ))}
        </div>

        {/* Score bar after checking */}
        {results && (
          <>
          <div style={styles.scoreBar}>
            <div style={styles.scoreStat}>
              <div style={{ ...styles.scoreValue, color: results.percentage >= 80 ? '#22c55e' : results.percentage >= 50 ? '#fbbf24' : '#ef4444' }}>
                {results.percentage}%
              </div>
              <div style={styles.scoreLabel}>Score</div>
            </div>
            <div style={styles.scoreStat}>
              <div style={styles.scoreValue}>{results.correct}/{results.total}</div>
              <div style={styles.scoreLabel}>Correct</div>
            </div>
            {scores[selectedPlay] != null && (
              <div style={styles.scoreStat}>
                <div style={{ ...styles.scoreValue, color: '#fbbf24' }}>
                  <Trophy size={20} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                  {scores[selectedPlay]}%
                </div>
                <div style={styles.scoreLabel}>Best</div>
              </div>
            )}
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <Lauren
              emotion={results.percentage >= 90 ? 'celebrating' : results.percentage >= 70 ? 'happy' : results.percentage >= 50 ? 'encouraging' : 'concerned'}
              message={results.percentage >= 90 ? "Outstanding work! You really know your stuff — that's Grade 9 territory!"
                : results.percentage >= 70 ? "Great job! You're showing solid understanding. Keep practising to push even higher!"
                : results.percentage >= 50 ? "Good effort! You're getting there — review the ones you missed and try again."
                : "Don't worry — this is how we learn! Review the feedback and give it another go."}
              size="medium"
              position="inline"
            />
          </div>
          </>
        )}

        {/* Instruction */}
        {!checked && (
          <p style={{ color: '#64748b', fontSize: '0.85rem', textAlign: 'center', marginBottom: '1rem' }}>
            Click each event in the order it happens. Click again to deselect.
            {selections.length > 0 && ` (${selections.length}/${playData.events.length} selected)`}
          </p>
        )}

        {/* Event cards */}
        <div>
          {shuffledEvents.map((evt) => {
            const selIdx = selections.indexOf(evt.id);
            const num = selIdx >= 0 ? selIdx + 1 : 0;
            const status = checked ? getEventStatus(evt.id) : 'pending';
            const direction = getEventDirection(evt.id);

            return (
              <div
                key={evt.id}
                style={styles.eventCard(status, num)}
                onClick={() => !checked && handleCardClick(evt.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && !checked && handleCardClick(evt.id)}
              >
                <div style={styles.numberBadge(num > 0)}>
                  {num > 0 ? num : '?'}
                </div>
                <span style={{ fontSize: '0.95rem', lineHeight: 1.5 }}>{evt.text}</span>
                {checked && status === 'correct' && (
                  <CheckCircle2
                    size={20}
                    color="#22c55e"
                    style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)' }}
                  />
                )}
                {checked && status === 'wrong' && direction && (
                  <div style={{ ...styles.arrowHint, color: '#ef4444' }}>
                    {direction === 'up' ? (
                      <><ArrowUp size={16} /> Earlier</>
                    ) : (
                      <><ArrowDown size={16} /> Later</>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action buttons */}
        <div style={styles.buttonRow}>
          {!checked && (
            <button
              style={{
                ...styles.btnPrimary,
                opacity: allSelected ? 1 : 0.5,
                cursor: allSelected ? 'pointer' : 'not-allowed',
              }}
              onClick={checkOrder}
              disabled={!allSelected}
            >
              Check Order
            </button>
          )}
          {checked && (
            <>
              <button style={styles.btnSecondary} onClick={tryAgain}>
                <RotateCcw size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} />
                Try Again
              </button>
              <button style={styles.btnPrimary} onClick={() => setShowTimeline(true)}>
                View Full Timeline
              </button>
              <button style={styles.btnSecondary} onClick={nextText}>
                Next Text
                <ChevronRight size={16} style={{ verticalAlign: 'middle', marginLeft: 4 }} />
              </button>
            </>
          )}
          <button
            style={{ ...styles.btnSecondary, fontSize: '0.85rem', padding: '0.5rem 1rem' }}
            onClick={() => setSelectedPlay(null)}
          >
            Back to All Texts
          </button>
          <Link to="/games" style={{ ...styles.btnSecondary, fontSize: '0.85rem', padding: '0.5rem 1rem', textDecoration: 'none', textAlign: 'center' }}>
            Back to Games
          </Link>
        </div>
      </div>
      </GameWrapper>
    </div>
  );
}
