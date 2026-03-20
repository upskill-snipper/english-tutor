import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Clock, Target, Zap, RotateCcw, ChevronRight, Star, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import GameWrapper from '../../components/GameWrapper';
import Lauren from '../../components/Lauren';
import { recordGamePlayed } from '../../utils/gameUtils';

/* ───────────────────────── TERM DATA ───────────────────────── */

const ALL_TERMS = [
  // ── Literary Techniques ──
  { term: 'Metaphor', def: 'A figure of speech that directly compares two unlike things by stating one is the other.', category: 'Literary Techniques', difficulty: 'easy' },
  { term: 'Simile', def: 'A comparison between two unlike things using "like" or "as".', category: 'Literary Techniques', difficulty: 'easy' },
  { term: 'Personification', def: 'Giving human qualities to non-human things or abstract concepts.', category: 'Literary Techniques', difficulty: 'easy' },
  { term: 'Hyperbole', def: 'Deliberate exaggeration for emphasis or comic effect.', category: 'Literary Techniques', difficulty: 'easy' },
  { term: 'Alliteration', def: 'Repetition of the same consonant sound at the beginning of closely connected words.', category: 'Literary Techniques', difficulty: 'easy' },
  { term: 'Onomatopoeia', def: 'A word that phonetically imitates the sound it describes.', category: 'Literary Techniques', difficulty: 'easy' },
  { term: 'Imagery', def: 'Visually descriptive language that appeals to the senses.', category: 'Literary Techniques', difficulty: 'easy' },
  { term: 'Symbolism', def: 'Using objects, characters, or colours to represent abstract ideas or concepts.', category: 'Literary Techniques', difficulty: 'easy' },
  { term: 'Irony', def: 'A contrast between expectation and reality, often for humorous or emphatic effect.', category: 'Literary Techniques', difficulty: 'easy' },
  { term: 'Foreshadowing', def: 'Hints or clues about events that will occur later in the narrative.', category: 'Literary Techniques', difficulty: 'easy' },
  { term: 'Pathetic Fallacy', def: 'Attributing human emotions to nature or weather to reflect the mood of a scene.', category: 'Literary Techniques', difficulty: 'medium' },
  { term: 'Dramatic Irony', def: 'When the audience knows something that the characters do not.', category: 'Literary Techniques', difficulty: 'medium' },
  { term: 'Oxymoron', def: 'A figure of speech combining two contradictory terms.', category: 'Literary Techniques', difficulty: 'medium' },
  { term: 'Juxtaposition', def: 'Placing two contrasting elements side by side for comparison or emphasis.', category: 'Literary Techniques', difficulty: 'medium' },
  { term: 'Emotive Language', def: 'Word choices deliberately aimed at provoking an emotional response from the reader.', category: 'Literary Techniques', difficulty: 'medium' },
  { term: 'Euphemism', def: 'A mild or indirect expression substituted for one considered too harsh or blunt.', category: 'Literary Techniques', difficulty: 'medium' },
  { term: 'Flashback', def: 'A scene set in a time earlier than the main narrative, providing background information.', category: 'Literary Techniques', difficulty: 'medium' },
  { term: 'Motif', def: 'A recurring element, image, or idea that has symbolic significance in a text.', category: 'Literary Techniques', difficulty: 'medium' },
  { term: 'Tone', def: 'The attitude or feeling conveyed by the writer through their choice of words and style.', category: 'Literary Techniques', difficulty: 'medium' },
  { term: 'Sibilance', def: 'Repetition of "s" and "sh" sounds, often creating a sinister or soothing effect.', category: 'Literary Techniques', difficulty: 'medium' },
  { term: 'Paradox', def: 'A seemingly contradictory statement that reveals a deeper truth.', category: 'Literary Techniques', difficulty: 'medium' },
  { term: 'Extended Metaphor', def: 'A metaphor that is developed over several lines or throughout an entire work.', category: 'Literary Techniques', difficulty: 'medium' },
  { term: 'Anaphora', def: 'Repetition of a word or phrase at the beginning of successive clauses or sentences.', category: 'Literary Techniques', difficulty: 'hard' },
  { term: 'Synecdoche', def: 'A figure of speech where a part represents the whole or vice versa.', category: 'Literary Techniques', difficulty: 'hard' },
  { term: 'Metonymy', def: 'A figure of speech where something is referred to by the name of something closely associated with it.', category: 'Literary Techniques', difficulty: 'hard' },
  { term: 'Bathos', def: 'An abrupt, often ludicrous descent from the elevated to the commonplace.', category: 'Literary Techniques', difficulty: 'hard' },
  { term: 'In Medias Res', def: 'Beginning a narrative in the middle of the action rather than at the beginning.', category: 'Literary Techniques', difficulty: 'hard' },
  { term: 'Unreliable Narrator', def: 'A narrator whose account of events cannot be fully trusted.', category: 'Literary Techniques', difficulty: 'hard' },
  { term: 'Catharsis', def: 'The release of strong emotions through art, especially tragedy, leading to renewal.', category: 'Literary Techniques', difficulty: 'hard' },
  { term: 'Allegory', def: 'A narrative in which characters and events symbolise deeper moral or political meanings.', category: 'Literary Techniques', difficulty: 'hard' },
  { term: 'Satire', def: 'The use of humour, irony, or exaggeration to criticise people or society.', category: 'Literary Techniques', difficulty: 'hard' },
  { term: 'Bildungsroman', def: 'A novel tracing the moral and psychological growth of the main character from youth to adulthood.', category: 'Literary Techniques', difficulty: 'hard' },
  { term: 'Antithesis', def: 'The juxtaposition of contrasting ideas in balanced phrases or clauses.', category: 'Literary Techniques', difficulty: 'hard' },
  { term: 'Colloquialism', def: 'Informal language or slang used in everyday speech, employed in writing for realism.', category: 'Literary Techniques', difficulty: 'hard' },

  // ── Grammar ──
  { term: 'Active Voice', def: 'A sentence construction where the subject performs the action of the verb.', category: 'Grammar', difficulty: 'easy' },
  { term: 'Passive Voice', def: 'A sentence construction where the subject receives the action of the verb.', category: 'Grammar', difficulty: 'easy' },
  { term: 'Adjective', def: 'A word that describes or modifies a noun or pronoun.', category: 'Grammar', difficulty: 'easy' },
  { term: 'Adverb', def: 'A word that modifies a verb, adjective, or other adverb, often ending in -ly.', category: 'Grammar', difficulty: 'easy' },
  { term: 'Noun', def: 'A word that names a person, place, thing, or idea.', category: 'Grammar', difficulty: 'easy' },
  { term: 'Conjunction', def: 'A word used to connect clauses, sentences, or words (e.g., and, but, or, because).', category: 'Grammar', difficulty: 'easy' },
  { term: 'Clause', def: 'A group of words containing a subject and a verb, forming part of a sentence.', category: 'Grammar', difficulty: 'medium' },
  { term: 'Phrase', def: 'A small group of words forming a unit within a clause, without a subject-verb pair.', category: 'Grammar', difficulty: 'medium' },
  { term: 'Complex Sentence', def: 'A sentence containing an independent clause and at least one subordinate clause.', category: 'Grammar', difficulty: 'medium' },
  { term: 'Compound Sentence', def: 'A sentence made up of two or more independent clauses joined by a conjunction.', category: 'Grammar', difficulty: 'medium' },
  { term: 'Imperative', def: 'A verb form or sentence type that gives a command or instruction.', category: 'Grammar', difficulty: 'medium' },
  { term: 'Modal Verb', def: 'A verb that expresses necessity, possibility, or obligation (e.g., must, should, could).', category: 'Grammar', difficulty: 'medium' },
  { term: 'Determiner', def: 'A word that introduces a noun and identifies it in detail (e.g., the, a, this, my).', category: 'Grammar', difficulty: 'medium' },
  { term: 'Declarative Sentence', def: 'A sentence that makes a statement or expresses an opinion.', category: 'Grammar', difficulty: 'medium' },
  { term: 'Interrogative Sentence', def: 'A sentence that asks a question.', category: 'Grammar', difficulty: 'easy' },
  { term: 'Exclamatory Sentence', def: 'A sentence that expresses strong emotion, ending with an exclamation mark.', category: 'Grammar', difficulty: 'easy' },
  { term: 'Subordinate Clause', def: 'A clause that depends on the main clause and cannot stand alone as a sentence.', category: 'Grammar', difficulty: 'hard' },
  { term: 'Relative Clause', def: 'A subordinate clause introduced by a relative pronoun (who, which, that).', category: 'Grammar', difficulty: 'hard' },
  { term: 'Preposition', def: 'A word that shows the relationship of a noun or pronoun to another word (e.g., in, on, at).', category: 'Grammar', difficulty: 'easy' },
  { term: 'Pronoun', def: 'A word that takes the place of a noun (e.g., he, she, it, they).', category: 'Grammar', difficulty: 'easy' },

  // ── Poetry ──
  { term: 'Enjambment', def: 'The continuation of a sentence or phrase beyond the end of a line of poetry.', category: 'Poetry', difficulty: 'medium' },
  { term: 'Caesura', def: 'A pause near the middle of a line of poetry, often created by punctuation.', category: 'Poetry', difficulty: 'medium' },
  { term: 'Volta', def: 'A turn or shift in thought or argument within a poem, especially in sonnets.', category: 'Poetry', difficulty: 'medium' },
  { term: 'Stanza', def: 'A group of lines forming the basic recurring metrical unit in a poem.', category: 'Poetry', difficulty: 'easy' },
  { term: 'Rhyme Scheme', def: 'The ordered pattern of rhymes at the ends of lines of a poem.', category: 'Poetry', difficulty: 'easy' },
  { term: 'Free Verse', def: 'Poetry that does not follow a regular metre or rhyme scheme.', category: 'Poetry', difficulty: 'easy' },
  { term: 'Sonnet', def: 'A fourteen-line poem with a specific rhyme scheme and metre, typically iambic pentameter.', category: 'Poetry', difficulty: 'medium' },
  { term: 'Iambic Pentameter', def: 'A metrical pattern of five pairs of unstressed and stressed syllables per line.', category: 'Poetry', difficulty: 'medium' },
  { term: 'Assonance', def: 'The repetition of vowel sounds within closely placed words.', category: 'Poetry', difficulty: 'medium' },
  { term: 'Couplet', def: 'Two consecutive lines of poetry that rhyme and have the same metre.', category: 'Poetry', difficulty: 'easy' },
  { term: 'Quatrain', def: 'A stanza or group of four lines of verse.', category: 'Poetry', difficulty: 'medium' },
  { term: 'Metre', def: 'The rhythmic pattern created by the arrangement of stressed and unstressed syllables.', category: 'Poetry', difficulty: 'medium' },
  { term: 'Dramatic Monologue', def: 'A poem in which an imagined speaker addresses a silent listener, revealing their character.', category: 'Poetry', difficulty: 'hard' },
  { term: 'Elegy', def: 'A poem of serious reflection, typically a lament for the dead.', category: 'Poetry', difficulty: 'hard' },
  { term: 'Ballad', def: 'A narrative poem or song with short stanzas, often telling a folk story.', category: 'Poetry', difficulty: 'medium' },
  { term: 'Blank Verse', def: 'Unrhymed poetry written in iambic pentameter.', category: 'Poetry', difficulty: 'hard' },
  { term: 'Refrain', def: 'A repeated line or group of lines at the end of each stanza in a poem.', category: 'Poetry', difficulty: 'medium' },
  { term: 'Tercet', def: 'A group of three lines of verse, often connected by rhyme.', category: 'Poetry', difficulty: 'hard' },

  // ── Drama ──
  { term: 'Soliloquy', def: 'A speech in which a character speaks their thoughts aloud while alone on stage.', category: 'Drama', difficulty: 'medium' },
  { term: 'Monologue', def: 'A long speech by one character in a play, directed at other characters.', category: 'Drama', difficulty: 'easy' },
  { term: 'Aside', def: 'A remark spoken by a character intended for the audience but unheard by other characters.', category: 'Drama', difficulty: 'medium' },
  { term: 'Stage Directions', def: 'Instructions in a play script indicating movement, tone, or setting.', category: 'Drama', difficulty: 'easy' },
  { term: 'Protagonist', def: 'The main character in a play or story, often the hero.', category: 'Drama', difficulty: 'easy' },
  { term: 'Antagonist', def: 'A character who opposes the protagonist and creates conflict.', category: 'Drama', difficulty: 'easy' },
  { term: 'Tragic Hero', def: 'A noble character whose fatal flaw leads to their downfall.', category: 'Drama', difficulty: 'medium' },
  { term: 'Hamartia', def: 'The fatal flaw or error of judgement that leads to the downfall of a tragic hero.', category: 'Drama', difficulty: 'hard' },
  { term: 'Hubris', def: 'Excessive pride or arrogance that leads to a character\'s downfall.', category: 'Drama', difficulty: 'hard' },
  { term: 'Denouement', def: 'The final resolution of the plot after the climax of a story or play.', category: 'Drama', difficulty: 'hard' },
  { term: 'Prologue', def: 'An introductory section of a play that sets the scene or provides background.', category: 'Drama', difficulty: 'medium' },
  { term: 'Epilogue', def: 'A section at the end of a play or story that provides closure or reflection.', category: 'Drama', difficulty: 'medium' },
  { term: 'Chorus', def: 'A group of performers who comment on the action of a play, common in Greek drama.', category: 'Drama', difficulty: 'hard' },
  { term: 'Peripeteia', def: 'A sudden reversal of fortune or change in circumstances, especially in tragedy.', category: 'Drama', difficulty: 'hard' },
  { term: 'Deus Ex Machina', def: 'An unexpected power or event that saves a seemingly hopeless situation.', category: 'Drama', difficulty: 'hard' },

  // ── Essay Terms ──
  { term: 'Thesis Statement', def: 'A sentence that expresses the main argument or claim of an essay.', category: 'Essay Terms', difficulty: 'easy' },
  { term: 'Topic Sentence', def: 'The opening sentence of a paragraph that states its main idea.', category: 'Essay Terms', difficulty: 'easy' },
  { term: 'Connective', def: 'A word or phrase that links ideas and paragraphs together (e.g., however, furthermore).', category: 'Essay Terms', difficulty: 'easy' },
  { term: 'Analysis', def: 'The detailed examination of the elements or structure of a text.', category: 'Essay Terms', difficulty: 'easy' },
  { term: 'Evaluation', def: 'Making a judgement about the effectiveness or value of a writer\'s choices.', category: 'Essay Terms', difficulty: 'medium' },
  { term: 'Context', def: 'The historical, social, or cultural circumstances in which a text was written.', category: 'Essay Terms', difficulty: 'medium' },
  { term: 'Discourse Marker', def: 'A word or phrase that organises and connects sections of text (e.g., firstly, in conclusion).', category: 'Essay Terms', difficulty: 'medium' },
  { term: 'Rhetorical Question', def: 'A question asked for effect rather than to receive an answer.', category: 'Essay Terms', difficulty: 'easy' },
  { term: 'Counter-argument', def: 'An argument made to oppose or refute another argument.', category: 'Essay Terms', difficulty: 'medium' },
  { term: 'Synthesis', def: 'Combining different ideas or sources to form a new understanding or argument.', category: 'Essay Terms', difficulty: 'hard' },
  { term: 'Cohesion', def: 'The linking of ideas within a text to create a smooth, logical flow.', category: 'Essay Terms', difficulty: 'medium' },
  { term: 'Register', def: 'The level of formality in language, chosen to suit audience and purpose.', category: 'Essay Terms', difficulty: 'medium' },
  { term: 'Semantic Field', def: 'A group of words related in meaning, used to create a particular effect.', category: 'Essay Terms', difficulty: 'hard' },
  { term: 'Connotation', def: 'The implied or associated meaning of a word beyond its literal definition.', category: 'Essay Terms', difficulty: 'medium' },
  { term: 'Denotation', def: 'The literal, dictionary definition of a word.', category: 'Essay Terms', difficulty: 'medium' },
  { term: 'Ambiguity', def: 'When a word, phrase, or text can be interpreted in more than one way.', category: 'Essay Terms', difficulty: 'hard' },
];

const CATEGORIES = ['All', 'Literary Techniques', 'Grammar', 'Poetry', 'Drama', 'Essay Terms'];
const DIFFICULTIES = ['easy', 'medium', 'hard'];
const DIFFICULTY_LABELS = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
const DIFFICULTY_COLORS = { easy: '#22c55e', medium: '#f59e0b', hard: '#ef4444' };
const ROUNDS_PER_GAME = 5;
const PAIRS_PER_ROUND = 6;
const STORAGE_KEY = 'learnright_game_wordmatch';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function getHighScores() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch { return {}; }
}

function saveHighScore(category, difficulty, score) {
  const scores = getHighScores();
  const key = `${category}_${difficulty}`;
  if (!scores[key] || score > scores[key].score) {
    scores[key] = { score, date: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
    return true;
  }
  return false;
}

function getHighScore(category, difficulty) {
  const scores = getHighScores();
  return scores[`${category}_${difficulty}`]?.score || 0;
}

/* ───────────────────── STYLES ───────────────────── */

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0e1a 0%, #131a2e 50%, #0a0e1a 100%)',
    color: '#f1f5f9',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '1.5rem 1rem 3rem',
  },
  backLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.375rem',
    color: '#94a3b8',
    textDecoration: 'none',
    fontSize: '0.875rem',
    marginBottom: '1.25rem',
    transition: 'color 0.2s',
  },
  header: {
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #a78bfa, #818cf8, #6366f1)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: '#94a3b8',
    fontSize: '0.95rem',
  },
  pillRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  pill: (active) => ({
    padding: '0.375rem 1rem',
    borderRadius: '999px',
    border: active ? '1px solid #818cf8' : '1px solid rgba(148,163,184,0.2)',
    background: active ? 'rgba(129,140,248,0.15)' : 'rgba(255,255,255,0.04)',
    color: active ? '#a5b4fc' : '#94a3b8',
    cursor: 'pointer',
    fontSize: '0.8125rem',
    fontWeight: 500,
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
  }),
  diffPill: (active, diff) => ({
    padding: '0.375rem 1rem',
    borderRadius: '999px',
    border: active ? `1px solid ${DIFFICULTY_COLORS[diff]}` : '1px solid rgba(148,163,184,0.2)',
    background: active ? `${DIFFICULTY_COLORS[diff]}22` : 'rgba(255,255,255,0.04)',
    color: active ? DIFFICULTY_COLORS[diff] : '#94a3b8',
    cursor: 'pointer',
    fontSize: '0.8125rem',
    fontWeight: 600,
    transition: 'all 0.2s',
  }),
  startBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.875rem 2.5rem',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #6366f1, #818cf8)',
    color: '#fff',
    border: 'none',
    fontSize: '1.05rem',
    fontWeight: 700,
    cursor: 'pointer',
    marginTop: '1.5rem',
    transition: 'transform 0.15s, box-shadow 0.15s',
    boxShadow: '0 4px 20px rgba(99,102,241,0.3)',
  },
  statsBar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    flexWrap: 'wrap',
    marginBottom: '1.5rem',
    padding: '0.75rem 1rem',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(148,163,184,0.1)',
  },
  stat: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.375rem',
    fontSize: '0.875rem',
    color: '#cbd5e1',
  },
  statLabel: {
    color: '#64748b',
    fontSize: '0.75rem',
  },
  gameArea: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  colLabel: {
    textAlign: 'center',
    fontSize: '0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#64748b',
    marginBottom: '0.25rem',
  },
  card: (state) => {
    const base = {
      padding: '0.875rem 1rem',
      borderRadius: '10px',
      cursor: state === 'matched' ? 'default' : 'pointer',
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontWeight: 500,
      transition: 'all 0.25s',
      userSelect: 'none',
      minHeight: '54px',
      display: 'flex',
      alignItems: 'center',
    };
    if (state === 'idle') return { ...base, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(148,163,184,0.15)', color: '#e2e8f0' };
    if (state === 'selected') return { ...base, background: 'rgba(129,140,248,0.15)', border: '1px solid #818cf8', color: '#c7d2fe', boxShadow: '0 0 12px rgba(129,140,248,0.2)' };
    if (state === 'correct') return { ...base, background: 'rgba(34,197,94,0.18)', border: '1px solid #22c55e', color: '#86efac', animation: 'matchFlash 0.5s ease' };
    if (state === 'wrong') return { ...base, background: 'rgba(239,68,68,0.18)', border: '1px solid #ef4444', color: '#fca5a5', animation: 'shakeCard 0.4s ease' };
    if (state === 'matched') return { ...base, opacity: 0, transform: 'scale(0.9)', pointerEvents: 'none', border: '1px solid transparent', background: 'transparent' };
    return base;
  },
  resultCard: {
    textAlign: 'center',
    padding: '2.5rem 2rem',
    borderRadius: '16px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(148,163,184,0.1)',
    maxWidth: '520px',
    margin: '0 auto',
  },
  scoreCircle: {
    width: '130px',
    height: '130px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.15))',
    border: '3px solid #818cf8',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5rem',
  },
};

const cssAnimations = `
@keyframes shakeCard {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(6px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
}
@keyframes matchFlash {
  0% { transform: scale(1); }
  50% { transform: scale(1.04); box-shadow: 0 0 20px rgba(34,197,94,0.3); }
  100% { transform: scale(1); }
}
@media (max-width: 640px) {
  .wm-game-area { grid-template-columns: 1fr !important; }
}
`;

/* ───────────────────── COMPONENT ───────────────────── */

export default function WordMatch() {
  const [category, setCategory] = useState('All');
  const [difficulty, setDifficulty] = useState('medium');
  const [gameState, setGameState] = useState('setup'); // setup | playing | results
  const [round, setRound] = useState(0);
  const [roundPairs, setRoundPairs] = useState([]);
  const [termOrder, setTermOrder] = useState([]);
  const [defOrder, setDefOrder] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [selectedDef, setSelectedDef] = useState(null);
  const [cardStates, setCardStates] = useState({});
  const [matched, setMatched] = useState(new Set());
  const [timer, setTimer] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [totalMatched, setTotalMatched] = useState(0);
  const timerRef = useRef(null);
  const allRoundsRef = useRef([]);
  const lockRef = useRef(false);

  const availableTerms = useMemo(() => {
    let pool = ALL_TERMS;
    if (category !== 'All') pool = pool.filter(t => t.category === category);
    if (difficulty === 'easy') pool = pool.filter(t => t.difficulty === 'easy');
    else if (difficulty === 'medium') pool = pool.filter(t => t.difficulty !== 'hard');
    // hard = all terms
    return pool;
  }, [category, difficulty]);

  const canStart = availableTerms.length >= PAIRS_PER_ROUND;

  const buildRounds = useCallback(() => {
    const shuffled = shuffle(availableTerms);
    const total = Math.min(shuffled.length, ROUNDS_PER_GAME * PAIRS_PER_ROUND);
    const rounds = [];
    for (let i = 0; i < total; i += PAIRS_PER_ROUND) {
      const slice = shuffled.slice(i, i + PAIRS_PER_ROUND);
      if (slice.length === PAIRS_PER_ROUND) rounds.push(slice);
    }
    // If we have fewer than 5 full rounds, pad by resampling
    while (rounds.length < ROUNDS_PER_GAME) {
      rounds.push(shuffle(availableTerms).slice(0, PAIRS_PER_ROUND));
    }
    return rounds;
  }, [availableTerms]);

  const loadRound = useCallback((roundIdx, rounds) => {
    const pairs = rounds[roundIdx];
    setRoundPairs(pairs);
    setTermOrder(shuffle(pairs.map((_, i) => i)));
    setDefOrder(shuffle(pairs.map((_, i) => i)));
    setSelectedTerm(null);
    setSelectedDef(null);
    setCardStates({});
    setMatched(new Set());
    lockRef.current = false;
  }, []);

  const startGame = () => {
    const rounds = buildRounds();
    allRoundsRef.current = rounds;
    setRound(0);
    setTimer(0);
    setWrongCount(0);
    setTotalMatched(0);
    setGameState('playing');
    loadRound(0, rounds);
    timerRef.current = setInterval(() => setTimer(t => t + 1), 1000);
  };

  const endGame = useCallback(() => {
    clearInterval(timerRef.current);
    setGameState('results');
    recordGamePlayed();
  }, []);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  // Check match after selecting both
  useEffect(() => {
    if (selectedTerm === null || selectedDef === null) return;
    lockRef.current = true;

    if (selectedTerm === selectedDef) {
      // correct
      setCardStates(prev => ({
        ...prev,
        [`t_${selectedTerm}`]: 'correct',
        [`d_${selectedDef}`]: 'correct',
      }));
      const t = selectedTerm;
      setTimeout(() => {
        setMatched(prev => {
          const next = new Set(prev);
          next.add(t);
          return next;
        });
        setCardStates(prev => ({
          ...prev,
          [`t_${t}`]: 'matched',
          [`d_${t}`]: 'matched',
        }));
        setSelectedTerm(null);
        setSelectedDef(null);
        setTotalMatched(prev => prev + 1);
        lockRef.current = false;
      }, 600);
    } else {
      // wrong
      setWrongCount(w => w + 1);
      setCardStates(prev => ({
        ...prev,
        [`t_${selectedTerm}`]: 'wrong',
        [`d_${selectedDef}`]: 'wrong',
      }));
      const st = selectedTerm;
      const sd = selectedDef;
      setTimeout(() => {
        setCardStates(prev => ({
          ...prev,
          [`t_${st}`]: 'idle',
          [`d_${sd}`]: 'idle',
        }));
        setSelectedTerm(null);
        setSelectedDef(null);
        lockRef.current = false;
      }, 700);
    }
  }, [selectedTerm, selectedDef]);

  // Advance round when all matched
  useEffect(() => {
    if (gameState !== 'playing') return;
    if (matched.size === PAIRS_PER_ROUND) {
      setTimeout(() => {
        const nextRound = round + 1;
        if (nextRound >= ROUNDS_PER_GAME) {
          endGame();
        } else {
          setRound(nextRound);
          loadRound(nextRound, allRoundsRef.current);
        }
      }, 500);
    }
  }, [matched, gameState, round, endGame, loadRound]);

  const handleTermClick = (idx) => {
    if (lockRef.current || matched.has(idx)) return;
    if (selectedTerm === idx) {
      setSelectedTerm(null);
      setCardStates(prev => ({ ...prev, [`t_${idx}`]: 'idle' }));
      return;
    }
    // clear prev term selection
    if (selectedTerm !== null) {
      setCardStates(prev => ({ ...prev, [`t_${selectedTerm}`]: 'idle' }));
    }
    setSelectedTerm(idx);
    setCardStates(prev => ({ ...prev, [`t_${idx}`]: 'selected' }));
  };

  const handleDefClick = (idx) => {
    if (lockRef.current || matched.has(idx)) return;
    if (selectedTerm === null) return; // must pick term first
    if (selectedDef === idx) {
      setSelectedDef(null);
      setCardStates(prev => ({ ...prev, [`d_${idx}`]: 'idle' }));
      return;
    }
    setSelectedDef(idx);
    setCardStates(prev => ({ ...prev, [`d_${idx}`]: 'selected' }));
  };

  const calcScore = () => {
    const totalPairs = ROUNDS_PER_GAME * PAIRS_PER_ROUND;
    const baseScore = totalPairs * 100;
    const timePenalty = Math.min(timer * 2, baseScore * 0.4);
    const wrongPenalty = wrongCount * 50;
    const accuracy = totalPairs / (totalPairs + wrongCount);
    const accuracyBonus = Math.round(accuracy * 500);
    const speedBonus = timer < 90 ? 300 : timer < 150 ? 150 : timer < 240 ? 50 : 0;
    return Math.max(0, Math.round(baseScore - timePenalty - wrongPenalty + accuracyBonus + speedBonus));
  };

  const score = gameState === 'results' ? calcScore() : 0;
  const isNewHigh = gameState === 'results' && saveHighScore(category, difficulty, score);
  const highScore = getHighScore(category, difficulty);

  /* ─── RENDER ─── */

  return (
    <div style={styles.page}>
      <style>{cssAnimations}</style>
      <Navbar />
      <GameWrapper gameId="word-match">
      <div style={styles.container}>
        <Link to="/games" style={styles.backLink}
          onMouseEnter={e => e.target.style.color = '#c7d2fe'}
          onMouseLeave={e => e.target.style.color = '#94a3b8'}
        >
          <ArrowLeft size={16} /> Back to Games
        </Link>

        <div style={styles.header}>
          <h1 style={styles.title}>Word Match</h1>
          <p style={styles.subtitle}>Match literary terms with their definitions</p>
        </div>

        {/* ── SETUP ── */}
        {gameState === 'setup' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ ...styles.colLabel, marginBottom: '0.75rem' }}>Category</div>
              <div style={styles.pillRow}>
                {CATEGORIES.map(c => (
                  <button key={c} style={styles.pill(category === c)}
                    onClick={() => setCategory(c)}>{c}</button>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <div style={{ ...styles.colLabel, marginBottom: '0.75rem' }}>Difficulty</div>
              <div style={styles.pillRow}>
                {DIFFICULTIES.map(d => (
                  <button key={d} style={styles.diffPill(difficulty === d, d)}
                    onClick={() => setDifficulty(d)}>{DIFFICULTY_LABELS[d]}</button>
                ))}
              </div>
            </div>
            <div style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '0.5rem' }}>
              {availableTerms.length} terms available
              {highScore > 0 && (
                <span style={{ marginLeft: '1rem', color: '#f59e0b' }}>
                  <Star size={13} style={{ verticalAlign: '-2px', marginRight: '3px' }} />
                  High score: {highScore}
                </span>
              )}
            </div>
            {!canStart && (
              <div style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.75rem' }}>
                Not enough terms for this combination. Try a different category or difficulty.
              </div>
            )}
            <button style={{ ...styles.startBtn, opacity: canStart ? 1 : 0.4, pointerEvents: canStart ? 'auto' : 'none' }}
              onClick={startGame}
              onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 30px rgba(99,102,241,0.4)'; }}
              onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = '0 4px 20px rgba(99,102,241,0.3)'; }}
            >
              <Zap size={20} /> Start Game
            </button>
          </div>
        )}

        {/* ── PLAYING ── */}
        {gameState === 'playing' && (
          <>
            <div style={styles.statsBar}>
              <div style={styles.stat}>
                <Clock size={15} style={{ color: '#818cf8' }} />
                <span>{formatTime(timer)}</span>
              </div>
              <div style={styles.stat}>
                <Target size={15} style={{ color: '#22c55e' }} />
                <span>Round {round + 1}/{ROUNDS_PER_GAME}</span>
              </div>
              <div style={styles.stat}>
                <Trophy size={15} style={{ color: '#f59e0b' }} />
                <span>{totalMatched}/{ROUNDS_PER_GAME * PAIRS_PER_ROUND} matched</span>
              </div>
              {wrongCount > 0 && (
                <div style={styles.stat}>
                  <span style={{ color: '#ef4444', fontWeight: 600 }}>{wrongCount} wrong</span>
                </div>
              )}
            </div>

            <div className="wm-game-area" style={styles.gameArea}>
              <div style={styles.column}>
                <div style={styles.colLabel}>Terms</div>
                {termOrder.map(idx => (
                  <div key={`t_${idx}`}
                    style={styles.card(cardStates[`t_${idx}`] || (matched.has(idx) ? 'matched' : 'idle'))}
                    onClick={() => handleTermClick(idx)}
                  >
                    {roundPairs[idx]?.term}
                  </div>
                ))}
              </div>
              <div style={styles.column}>
                <div style={styles.colLabel}>Definitions</div>
                {defOrder.map(idx => (
                  <div key={`d_${idx}`}
                    style={styles.card(cardStates[`d_${idx}`] || (matched.has(idx) ? 'matched' : 'idle'))}
                    onClick={() => handleDefClick(idx)}
                  >
                    {roundPairs[idx]?.def}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ── RESULTS ── */}
        {gameState === 'results' && (
          <div style={styles.resultCard}>
            <div style={styles.scoreCircle}>
              <Award size={28} style={{ color: '#a78bfa', marginBottom: '2px' }} />
              <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#e2e8f0' }}>{score}</span>
              <span style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>points</span>
            </div>

            {isNewHigh && (
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
                padding: '0.375rem 1rem', borderRadius: '999px',
                background: 'rgba(245,158,11,0.15)', border: '1px solid #f59e0b',
                color: '#fbbf24', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.25rem',
              }}>
                <Star size={15} /> New High Score!
              </div>
            )}

            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem', color: '#e2e8f0' }}>
              Game Complete!
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1.75rem' }}>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#818cf8' }}>{formatTime(timer)}</div>
                <div style={styles.statLabel}>Time</div>
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#22c55e' }}>
                  {ROUNDS_PER_GAME * PAIRS_PER_ROUND}
                </div>
                <div style={styles.statLabel}>Pairs Matched</div>
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: wrongCount === 0 ? '#22c55e' : '#ef4444' }}>
                  {wrongCount}
                </div>
                <div style={styles.statLabel}>Wrong Attempts</div>
              </div>
            </div>

            {(() => {
              const totalPairs = ROUNDS_PER_GAME * PAIRS_PER_ROUND;
              const pct = Math.round((totalPairs / (totalPairs + wrongCount)) * 100);
              const laurenEmotion = pct >= 90 ? 'celebrating' : pct >= 70 ? 'happy' : pct >= 50 ? 'encouraging' : 'concerned';
              const laurenMessage = pct >= 90 ? "Outstanding work! You really know your stuff — that's Grade 9 territory!"
                : pct >= 70 ? "Great job! You're showing solid understanding. Keep practising to push even higher!"
                : pct >= 50 ? "Good effort! You're getting there — review the ones you missed and try again."
                : "Don't worry — this is how we learn! Review the feedback and give it another go.";
              return <div style={{ marginBottom: '1.25rem' }}><Lauren emotion={laurenEmotion} message={laurenMessage} size="medium" position="inline" /></div>;
            })()}

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button style={styles.startBtn} onClick={() => { setGameState('setup'); }}>
                <RotateCcw size={18} /> Play Again
              </button>
            </div>
          </div>
        )}
      </div>
      </GameWrapper>
    </div>
  );
}
