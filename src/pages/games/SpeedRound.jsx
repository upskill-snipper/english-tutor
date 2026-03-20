import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Trophy, Target, Flame, RotateCcw, Clock } from 'lucide-react';
import Navbar from '../../components/Navbar';
import GameWrapper from '../../components/GameWrapper';
import Lauren from '../../components/Lauren';

const QUESTIONS = [
  // Literary Techniques
  { question: "What technique is used in 'The wind howled through the trees'?", options: ['Metaphor', 'Personification', 'Simile', 'Onomatopoeia'], answer: 1 },
  { question: "What technique is 'Life is a journey'?", options: ['Simile', 'Personification', 'Metaphor', 'Hyperbole'], answer: 2 },
  { question: "What technique is 'She was as brave as a lion'?", options: ['Metaphor', 'Simile', 'Allegory', 'Personification'], answer: 1 },
  { question: "What technique is 'I've told you a million times'?", options: ['Litotes', 'Metaphor', 'Hyperbole', 'Irony'], answer: 2 },
  { question: "'The thunder clapped angrily' is an example of?", options: ['Simile', 'Alliteration', 'Personification', 'Oxymoron'], answer: 2 },
  { question: "'Bang! Crash! Wallop!' is an example of?", options: ['Alliteration', 'Onomatopoeia', 'Assonance', 'Repetition'], answer: 1 },
  { question: "'Peter Piper picked a peck of pickled peppers' uses?", options: ['Assonance', 'Consonance', 'Alliteration', 'Sibilance'], answer: 2 },
  { question: "What is 'jumbo shrimp' an example of?", options: ['Paradox', 'Oxymoron', 'Irony', 'Juxtaposition'], answer: 1 },
  { question: "'Not bad at all' (meaning 'good') is an example of?", options: ['Irony', 'Litotes', 'Euphemism', 'Sarcasm'], answer: 1 },
  { question: "'The snake slithered silently' uses which sound device?", options: ['Alliteration', 'Assonance', 'Sibilance', 'Consonance'], answer: 2 },
  { question: "Comparing two unlike things WITHOUT 'like' or 'as' is a?", options: ['Simile', 'Analogy', 'Metaphor', 'Symbol'], answer: 2 },
  { question: "'O Death, where is thy sting?' is an example of?", options: ['Rhetorical question', 'Apostrophe', 'Exclamation', 'Both A and B'], answer: 3 },
  { question: "What technique repeats vowel sounds in nearby words?", options: ['Alliteration', 'Assonance', 'Consonance', 'Rhyme'], answer: 1 },
  { question: "'It was the best of times, it was the worst of times' uses?", options: ['Anaphora', 'Epistrophe', 'Parallelism', 'All of these'], answer: 3 },
  { question: "A story within a story is called?", options: ['Flashback', 'Frame narrative', 'Subplot', 'Parallel plot'], answer: 1 },
  { question: "'Fair is foul, and foul is fair' is an example of?", options: ['Oxymoron', 'Chiasmus', 'Paradox', 'Antithesis'], answer: 1 },
  { question: "A seemingly contradictory statement that reveals truth is a?", options: ['Oxymoron', 'Paradox', 'Irony', 'Antithesis'], answer: 1 },
  { question: "Deliberately understating something for effect is?", options: ['Hyperbole', 'Litotes', 'Euphemism', 'Understatement'], answer: 3 },
  { question: "Using a mild expression instead of a harsh one is?", options: ['Litotes', 'Euphemism', 'Understatement', 'Irony'], answer: 1 },
  { question: "A reference to another text, myth, or historical event is?", options: ['Intertextuality', 'Allusion', 'Citation', 'Homage'], answer: 1 },

  // Grammar Terms
  { question: "What is the name for a word that modifies a noun?", options: ['Adverb', 'Adjective', 'Pronoun', 'Conjunction'], answer: 1 },
  { question: "What is the name for a word that modifies a verb?", options: ['Adjective', 'Pronoun', 'Adverb', 'Preposition'], answer: 2 },
  { question: "What type of sentence contains two independent clauses?", options: ['Simple', 'Complex', 'Compound', 'Fragment'], answer: 2 },
  { question: "'Although it rained, we went out' is what type of sentence?", options: ['Simple', 'Compound', 'Complex', 'Compound-complex'], answer: 2 },
  { question: "What is a clause that cannot stand alone called?", options: ['Independent clause', 'Dependent clause', 'Phrase', 'Fragment'], answer: 1 },
  { question: "What punctuation separates items in a list?", options: ['Colon', 'Semicolon', 'Comma', 'Dash'], answer: 2 },
  { question: "A group of words without a subject or verb is a?", options: ['Clause', 'Phrase', 'Sentence', 'Fragment'], answer: 1 },
  { question: "What is the past tense of 'to lie' (recline)?", options: ['Lied', 'Laid', 'Lay', 'Lain'], answer: 2 },
  { question: "'Running quickly' — what part of speech is 'quickly'?", options: ['Adjective', 'Adverb', 'Verb', 'Noun'], answer: 1 },
  { question: "What connects two independent clauses without a conjunction?", options: ['Comma', 'Semicolon', 'Colon', 'Dash'], answer: 1 },
  { question: "A sentence that gives a command is called?", options: ['Declarative', 'Interrogative', 'Imperative', 'Exclamatory'], answer: 2 },
  { question: "What is the term for words that sound the same but differ in meaning?", options: ['Synonyms', 'Antonyms', 'Homophones', 'Homonyms'], answer: 2 },
  { question: "'Their', 'there', and 'they're' are examples of?", options: ['Synonyms', 'Homophones', 'Homographs', 'Antonyms'], answer: 1 },
  { question: "What term describes the 'doing word' in a sentence?", options: ['Noun', 'Verb', 'Adjective', 'Adverb'], answer: 1 },
  { question: "Which voice: 'The ball was kicked by Tom'?", options: ['Active voice', 'Passive voice', 'Imperative', 'Subjunctive'], answer: 1 },
  { question: "What tense: 'She had been running for hours'?", options: ['Past perfect', 'Past perfect continuous', 'Past continuous', 'Present perfect'], answer: 1 },
  { question: "'However', 'therefore', 'moreover' are examples of?", options: ['Conjunctions', 'Conjunctive adverbs', 'Prepositions', 'Interjections'], answer: 1 },
  { question: "A noun formed from a verb (e.g. 'swimming') is a?", options: ['Infinitive', 'Participle', 'Gerund', 'Predicate'], answer: 2 },
  { question: "What is the subject in 'The big dog chased the cat'?", options: ['dog', 'The big dog', 'chased', 'the cat'], answer: 1 },
  { question: "A sentence missing a subject or verb is a?", options: ['Run-on', 'Fragment', 'Complex sentence', 'Clause'], answer: 1 },

  // Poetry Terms
  { question: "What is a 14-line poem called?", options: ['Haiku', 'Sonnet', 'Ballad', 'Limerick'], answer: 1 },
  { question: "What is the rhythm pattern of a poem called?", options: ['Rhyme scheme', 'Metre', 'Stanza', 'Cadence'], answer: 1 },
  { question: "A group of lines in a poem is called a?", options: ['Paragraph', 'Stanza', 'Verse', 'Couplet'], answer: 1 },
  { question: "Two consecutive rhyming lines are called a?", options: ['Stanza', 'Quatrain', 'Couplet', 'Tercet'], answer: 2 },
  { question: "A four-line stanza is called a?", options: ['Couplet', 'Tercet', 'Quatrain', 'Sestet'], answer: 2 },
  { question: "Iambic pentameter has how many stressed syllables per line?", options: ['Three', 'Four', 'Five', 'Six'], answer: 2 },
  { question: "A poem that tells a story is called?", options: ['Lyric', 'Narrative', 'Dramatic', 'Pastoral'], answer: 1 },
  { question: "What is a poem mourning someone's death called?", options: ['Ode', 'Elegy', 'Sonnet', 'Epitaph'], answer: 1 },
  { question: "What is enjambment?", options: ['End-stopped line', 'Line running into the next', 'A type of rhyme', 'A stanza break'], answer: 1 },
  { question: "ABAB is an example of a?", options: ['Metre', 'Rhyme scheme', 'Stanza form', 'Poetic foot'], answer: 1 },
  { question: "A poem that praises something is called an?", options: ['Elegy', 'Ode', 'Ballad', 'Epic'], answer: 1 },
  { question: "What is a three-line stanza called?", options: ['Couplet', 'Tercet', 'Quatrain', 'Sestet'], answer: 1 },
  { question: "Poetry without a regular rhyme scheme is called?", options: ['Blank verse', 'Free verse', 'Prose poetry', 'Doggerel'], answer: 1 },
  { question: "Blank verse is unrhymed what?", options: ['Free verse', 'Iambic pentameter', 'Trochaic metre', 'Hexameter'], answer: 1 },
  { question: "A six-line stanza is called a?", options: ['Quatrain', 'Quintet', 'Sestet', 'Septet'], answer: 2 },
  { question: "A Japanese poem of 5-7-5 syllables is a?", options: ['Sonnet', 'Limerick', 'Haiku', 'Tanka'], answer: 2 },
  { question: "The voice speaking in a poem is the?", options: ['Author', 'Speaker', 'Narrator', 'Persona'], answer: 3 },
  { question: "Words at the end of lines that share similar sounds use?", options: ['Internal rhyme', 'End rhyme', 'Slant rhyme', 'Eye rhyme'], answer: 1 },
  { question: "A line of poetry that ends with punctuation is called?", options: ['Enjambed', 'End-stopped', 'Caesura', 'Run-on'], answer: 1 },
  { question: "A pause in the middle of a line of poetry is a?", options: ['Enjambment', 'End-stop', 'Caesura', 'Volta'], answer: 2 },

  // Drama Terms
  { question: "A speech where a character speaks thoughts aloud alone is a?", options: ['Monologue', 'Soliloquy', 'Aside', 'Dialogue'], answer: 1 },
  { question: "A remark heard by the audience but not other characters is an?", options: ['Soliloquy', 'Aside', 'Monologue', 'Prologue'], answer: 1 },
  { question: "The turning point of a play is called the?", options: ['Resolution', 'Climax', 'Exposition', 'Denouement'], answer: 1 },
  { question: "Information about setting and characters at the start is the?", options: ['Climax', 'Resolution', 'Exposition', 'Prologue'], answer: 2 },
  { question: "A play's final resolution of conflict is the?", options: ['Climax', 'Denouement', 'Exposition', 'Falling action'], answer: 1 },
  { question: "A character's tragic weakness is their?", options: ['Nemesis', 'Hamartia', 'Hubris', 'Catharsis'], answer: 1 },
  { question: "Excessive pride or arrogance in a tragic hero is?", options: ['Hamartia', 'Hubris', 'Nemesis', 'Pathos'], answer: 1 },
  { question: "Emotional release experienced by the audience is?", options: ['Pathos', 'Catharsis', 'Empathy', 'Bathos'], answer: 1 },
  { question: "Hints about future events in a story are called?", options: ['Flashback', 'Foreshadowing', 'Symbolism', 'Irony'], answer: 1 },
  { question: "When the audience knows something characters don't, it's?", options: ['Verbal irony', 'Situational irony', 'Dramatic irony', 'Sarcasm'], answer: 2 },
  { question: "The main character in a story is the?", options: ['Antagonist', 'Protagonist', 'Narrator', 'Anti-hero'], answer: 1 },
  { question: "The character who opposes the protagonist is the?", options: ['Protagonist', 'Antagonist', 'Foil', 'Villain'], answer: 1 },
  { question: "A character who contrasts with another to highlight traits is a?", options: ['Antagonist', 'Protagonist', 'Foil', 'Stock character'], answer: 2 },
  { question: "An introduction before the main action of a play is a?", options: ['Epilogue', 'Prologue', 'Exposition', 'Preface'], answer: 1 },
  { question: "A section at the end summarising what happens after is an?", options: ['Prologue', 'Epilogue', 'Denouement', 'Coda'], answer: 1 },
  { question: "Stage instructions telling actors what to do are?", options: ['Cues', 'Directions', 'Stage directions', 'Blocking'], answer: 2 },
  { question: "A long speech by one character to others on stage is a?", options: ['Soliloquy', 'Monologue', 'Aside', 'Oration'], answer: 1 },
  { question: "The struggle between opposing forces in a story is?", options: ['Theme', 'Conflict', 'Plot', 'Tension'], answer: 1 },
  { question: "A recurring idea or message in a text is a?", options: ['Motif', 'Theme', 'Symbol', 'Allegory'], answer: 1 },
  { question: "A recurring element or image throughout a text is a?", options: ['Theme', 'Motif', 'Symbol', 'Leitmotif'], answer: 1 },

  // Set Text Knowledge (General GCSE/A-Level)
  { question: "Who wrote 'Macbeth'?", options: ['Dickens', 'Shakespeare', 'Austen', 'Orwell'], answer: 1 },
  { question: "Who wrote 'A Christmas Carol'?", options: ['Shakespeare', 'Shelley', 'Dickens', 'Hardy'], answer: 2 },
  { question: "Who wrote 'An Inspector Calls'?", options: ['Priestley', 'Miller', 'Ibsen', 'Shaw'], answer: 0 },
  { question: "In 'Macbeth', who says 'Out, damned spot!'?", options: ['Macbeth', 'Lady Macbeth', 'The Witches', 'Banquo'], answer: 1 },
  { question: "What is the name of Scrooge's dead business partner?", options: ['Cratchit', 'Fezziwig', 'Marley', 'Tiny Tim'], answer: 2 },
  { question: "In 'Romeo and Juliet', the families are the Montagues and?", options: ['Capulets', 'Medicis', 'Tudors', 'Borgias'], answer: 0 },
  { question: "Who wrote 'Lord of the Flies'?", options: ['Orwell', 'Golding', 'Huxley', 'Atwood'], answer: 1 },
  { question: "In 'Jekyll and Hyde', who is Jekyll's lawyer friend?", options: ['Utterson', 'Enfield', 'Lanyon', 'Poole'], answer: 0 },
  { question: "Who wrote 'Animal Farm'?", options: ['Huxley', 'Golding', 'Orwell', 'Bradbury'], answer: 2 },
  { question: "In 'An Inspector Calls', what is the Inspector's name?", options: ['Goole', 'Birling', 'Croft', 'Smith'], answer: 0 },
  { question: "'Power and Conflict' is a cluster in which anthology?", options: ['Moon on the Tides', 'AQA Poetry', 'Edexcel Poems', 'OCR Collection'], answer: 1 },
  { question: "Who wrote 'Ozymandias'?", options: ['Keats', 'Byron', 'Shelley', 'Wordsworth'], answer: 2 },
  { question: "Who wrote 'The Charge of the Light Brigade'?", options: ['Tennyson', 'Owen', 'Sassoon', 'Shelley'], answer: 0 },
  { question: "'My Last Duchess' is written by?", options: ['Tennyson', 'Browning', 'Shelley', 'Keats'], answer: 1 },
  { question: "In 'Macbeth', how many witches appear?", options: ['One', 'Two', 'Three', 'Four'], answer: 2 },
  { question: "What literary period is 'Frankenstein' from?", options: ['Victorian', 'Romantic', 'Modernist', 'Georgian'], answer: 1 },
  { question: "Who wrote 'Pride and Prejudice'?", options: ['Bronte', 'Austen', 'Eliot', 'Shelley'], answer: 1 },
  { question: "In 'Great Expectations', what is Pip's real name?", options: ['Philip', 'Peter', 'Patrick', 'Paul'], answer: 0 },
  { question: "Who wrote 'Of Mice and Men'?", options: ['Fitzgerald', 'Hemingway', 'Steinbeck', 'Faulkner'], answer: 2 },
  { question: "What is the setting of 'Lord of the Flies'?", options: ['A school', 'A desert', 'An island', 'A city'], answer: 2 },

  // More Literary Techniques
  { question: "When an object represents something beyond itself, it's?", options: ['Metaphor', 'Symbolism', 'Allegory', 'Motif'], answer: 1 },
  { question: "A story with a hidden moral or political meaning is an?", options: ['Fable', 'Parable', 'Allegory', 'Myth'], answer: 2 },
  { question: "Giving human qualities to non-human things is?", options: ['Pathetic fallacy', 'Personification', 'Anthropomorphism', 'Zoomorphism'], answer: 1 },
  { question: "Using weather to reflect mood/emotion is?", options: ['Personification', 'Pathetic fallacy', 'Symbolism', 'Imagery'], answer: 1 },
  { question: "Language appealing to the five senses is?", options: ['Imagery', 'Description', 'Figurative language', 'Sensory detail'], answer: 0 },
  { question: "The narrative perspective of a story is the?", options: ['Voice', 'Point of view', 'Tone', 'Perspective'], answer: 1 },
  { question: "First person narration uses which pronoun?", options: ['He/She', 'You', 'I', 'They'], answer: 2 },
  { question: "A narrator who knows everything is called?", options: ['First person', 'Omniscient', 'Limited', 'Unreliable'], answer: 1 },
  { question: "Words or phrases particular to a region are called?", options: ['Slang', 'Dialect', 'Jargon', 'Colloquialism'], answer: 1 },
  { question: "The attitude of a writer toward the subject is the?", options: ['Mood', 'Tone', 'Voice', 'Style'], answer: 1 },
  { question: "The feeling a text creates in the reader is the?", options: ['Tone', 'Mood', 'Atmosphere', 'Both B and C'], answer: 3 },
];

const STORAGE_KEY = 'learnright_game_speedround';
const GAME_DURATION = 60;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getLeaderboard() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch { return []; }
}

function saveScore(entry) {
  const lb = getLeaderboard();
  lb.push(entry);
  lb.sort((a, b) => b.score - a.score);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lb.slice(0, 10)));
}

export default function SpeedRound() {
  const [phase, setPhase] = useState('ready'); // ready | playing | done
  const [questions, setQuestions] = useState([]);
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [flash, setFlash] = useState(null); // 'correct' | 'wrong' | null
  const timerRef = useRef(null);
  const flashTimeoutRef = useRef(null);

  const startGame = useCallback(() => {
    setQuestions(shuffle(QUESTIONS));
    setQIndex(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setCorrect(0);
    setAnswered(0);
    setTimeLeft(GAME_DURATION);
    setFlash(null);
    setPhase('playing');
  }, []);

  const endGame = useCallback((finalScore, finalCorrect, finalAnswered, finalBestStreak) => {
    setPhase('done');
    if (timerRef.current) clearInterval(timerRef.current);
    saveScore({
      score: finalScore,
      accuracy: finalAnswered > 0 ? Math.round((finalCorrect / finalAnswered) * 100) : 0,
      bestStreak: finalBestStreak,
      answered: finalAnswered,
      date: new Date().toISOString(),
    });
    // Track daily streak
    const today = new Date().toISOString().slice(0, 10);
    localStorage.setItem('learnright_last_game_date', today);
  }, []);

  // Timer
  useEffect(() => {
    if (phase !== 'playing') return;
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [phase]);

  // End game when time hits 0
  const scoreRef = useRef(score);
  const correctRef = useRef(correct);
  const answeredRef = useRef(answered);
  const bestStreakRef = useRef(bestStreak);
  useEffect(() => { scoreRef.current = score; }, [score]);
  useEffect(() => { correctRef.current = correct; }, [correct]);
  useEffect(() => { answeredRef.current = answered; }, [answered]);
  useEffect(() => { bestStreakRef.current = bestStreak; }, [bestStreak]);

  useEffect(() => {
    if (timeLeft === 0 && phase === 'playing') {
      endGame(scoreRef.current, correctRef.current, answeredRef.current, bestStreakRef.current);
    }
  }, [timeLeft, phase, endGame]);

  const handleAnswer = (idx) => {
    if (phase !== 'playing') return;
    const q = questions[qIndex];
    const isCorrect = idx === q.answer;

    if (flashTimeoutRef.current) clearTimeout(flashTimeoutRef.current);

    if (isCorrect) {
      const newStreak = streak + 1;
      const bonus = newStreak > 0 && newStreak % 5 === 0 ? 1 : 0;
      setScore(s => s + 1 + bonus);
      setStreak(newStreak);
      setBestStreak(bs => Math.max(bs, newStreak));
      setCorrect(c => c + 1);
      setFlash('correct');
    } else {
      setStreak(0);
      setFlash('wrong');
    }
    setAnswered(a => a + 1);

    flashTimeoutRef.current = setTimeout(() => setFlash(null), 300);

    if (qIndex + 1 < questions.length) {
      setQIndex(qi => qi + 1);
    } else {
      // Ran out of questions — reshuffle
      setQuestions(shuffle(QUESTIONS));
      setQIndex(0);
    }
  };

  const leaderboard = getLeaderboard();
  const timerPct = (timeLeft / GAME_DURATION) * 100;
  const currentQ = questions[qIndex];

  const containerStyle = {
    minHeight: '100vh',
    background: '#0a0e1a',
    color: '#f1f5f9',
  };

  const cardBg = 'rgba(255,255,255,0.04)';
  const borderCol = 'rgba(255,255,255,0.08)';

  return (
    <div style={containerStyle}>
      <Navbar />
      <GameWrapper gameId="speed-round">
      <main id="main-content" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        <Link to="/games" style={{ color: '#10b981', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
          <ArrowLeft size={16} /> Back to Games
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: 'linear-gradient(135deg, #f59e0b, #d97706)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Zap size={24} color="white" />
          </div>
          <div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: 0 }}>Speed Round</h1>
            <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>60-second blitz — answer as many as you can!</p>
          </div>
        </div>

        {/* READY STATE */}
        {phase === 'ready' && (
          <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
              <Zap size={64} color="#f59e0b" />
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Ready?</h2>
            <p style={{ color: '#94a3b8', marginBottom: '2rem', maxWidth: 400, margin: '0 auto 2rem' }}>
              Answer as many literary term, grammar, and text knowledge questions as you can in 60 seconds.
              Build streaks for bonus points!
            </p>
            <button onClick={startGame} style={{
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              color: '#fff', border: 'none', padding: '1rem 3rem', borderRadius: 12,
              fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(245,158,11,0.4)',
              transition: 'transform 0.15s',
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              Start!
            </button>

            {leaderboard.length > 0 && (
              <div style={{ marginTop: '3rem', textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Trophy size={18} color="#f59e0b" /> Leaderboard
                </h3>
                <div style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 12, overflow: 'hidden' }}>
                  {leaderboard.map((e, i) => (
                    <div key={i} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '0.75rem 1rem',
                      borderBottom: i < leaderboard.length - 1 ? `1px solid ${borderCol}` : 'none',
                      background: i === 0 ? 'rgba(245,158,11,0.06)' : 'transparent',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontWeight: 700, color: i < 3 ? '#f59e0b' : '#64748b', width: 24 }}>#{i + 1}</span>
                        <span style={{ fontWeight: 600 }}>{e.score} pts</span>
                      </div>
                      <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: '#94a3b8' }}>
                        <span>{e.accuracy}% acc</span>
                        <span>{e.answered} Qs</span>
                        <span>{new Date(e.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* PLAYING STATE */}
        {phase === 'playing' && currentQ && (
          <div>
            {/* Timer bar */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={16} color={timeLeft <= 10 ? '#ef4444' : '#f59e0b'} style={{
                    animation: timeLeft <= 10 ? 'pulse 0.5s ease-in-out infinite' : 'none',
                  }} />
                  <span style={{
                    fontWeight: 800, fontSize: '1.5rem',
                    color: timeLeft <= 10 ? '#ef4444' : timeLeft <= 20 ? '#f59e0b' : '#10b981',
                    fontVariantNumeric: 'tabular-nums',
                  }}>{timeLeft}s</span>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <Target size={16} color="#10b981" />
                    <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>{score}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <Flame size={16} color={streak >= 5 ? '#f59e0b' : '#64748b'} />
                    <span style={{ fontWeight: 700, fontSize: '1.25rem', color: streak >= 5 ? '#f59e0b' : '#f1f5f9' }}>{streak}</span>
                  </div>
                </div>
              </div>
              <div style={{
                height: 8, borderRadius: 4,
                background: 'rgba(255,255,255,0.08)',
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%', borderRadius: 4,
                  width: `${timerPct}%`,
                  background: timeLeft <= 10
                    ? 'linear-gradient(90deg, #ef4444, #dc2626)'
                    : timeLeft <= 20
                    ? 'linear-gradient(90deg, #f59e0b, #d97706)'
                    : 'linear-gradient(90deg, #10b981, #059669)',
                  transition: 'width 1s linear, background 0.5s',
                }} />
              </div>
            </div>

            {/* Question card */}
            <div style={{
              background: flash === 'correct' ? 'rgba(16,185,129,0.1)' : flash === 'wrong' ? 'rgba(239,68,68,0.1)' : cardBg,
              border: `1px solid ${flash === 'correct' ? 'rgba(16,185,129,0.3)' : flash === 'wrong' ? 'rgba(239,68,68,0.3)' : borderCol}`,
              borderRadius: 16, padding: '2rem',
              transition: 'background 0.15s, border-color 0.15s',
            }}>
              <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', lineHeight: 1.5 }}>
                {currentQ.question}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {currentQ.options.map((opt, i) => (
                  <button key={i} onClick={() => handleAnswer(i)} style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#f1f5f9',
                    padding: '1rem',
                    borderRadius: 10,
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    textAlign: 'left',
                  }}
                  onMouseOver={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'; }}
                  onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  >
                    <span style={{ color: '#64748b', marginRight: '0.5rem', fontWeight: 700 }}>{String.fromCharCode(65 + i)}</span>
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {streak >= 5 && (
              <div style={{
                marginTop: '1rem', textAlign: 'center',
                color: '#f59e0b', fontWeight: 700, fontSize: '0.9rem',
                animation: 'pulse 1s ease-in-out infinite',
              }}>
                {streak} streak! +1 bonus at every 5!
              </div>
            )}
          </div>
        )}

        {/* DONE STATE */}
        {phase === 'done' && (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>Time's Up!</h2>
            <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Here's how you did:</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', maxWidth: 450, margin: '0 auto 2rem' }}>
              {[
                { label: 'Score', value: score, icon: <Target size={20} />, color: '#10b981' },
                { label: 'Accuracy', value: answered > 0 ? `${Math.round((correct / answered) * 100)}%` : '0%', icon: <Trophy size={20} />, color: '#f59e0b' },
                { label: 'Best Streak', value: bestStreak, icon: <Flame size={20} />, color: '#ef4444' },
                { label: 'Answered', value: answered, icon: <Zap size={20} />, color: '#8b5cf6' },
              ].map((s, i) => (
                <div key={i} style={{
                  background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 12,
                  padding: '1.25rem', textAlign: 'center',
                }}>
                  <div style={{ color: s.color, marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>{s.value}</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {(() => {
              const pct = answered > 0 ? Math.round((correct / answered) * 100) : 0;
              const laurenEmotion = pct >= 90 ? 'celebrating' : pct >= 70 ? 'happy' : pct >= 50 ? 'encouraging' : 'concerned';
              const laurenMessage = pct >= 90 ? "Outstanding work! You really know your stuff — that's Grade 9 territory!"
                : pct >= 70 ? "Great job! You're showing solid understanding. Keep practising to push even higher!"
                : pct >= 50 ? "Good effort! You're getting there — review the ones you missed and try again."
                : "Don't worry — this is how we learn! Review the feedback and give it another go.";
              return <div style={{ marginBottom: '1.5rem' }}><Lauren emotion={laurenEmotion} message={laurenMessage} size="medium" position="inline" /></div>;
            })()}

            <button onClick={startGame} style={{
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              color: '#fff', border: 'none', padding: '0.875rem 2.5rem', borderRadius: 12,
              fontSize: '1rem', fontWeight: 700, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              boxShadow: '0 4px 20px rgba(245,158,11,0.4)',
            }}>
              <RotateCcw size={18} /> Play Again
            </button>

            {leaderboard.length > 0 && (
              <div style={{ marginTop: '3rem', textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Trophy size={18} color="#f59e0b" /> Leaderboard — Top 10
                </h3>
                <div style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 12, overflow: 'hidden' }}>
                  {leaderboard.map((e, i) => (
                    <div key={i} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '0.75rem 1rem',
                      borderBottom: i < leaderboard.length - 1 ? `1px solid ${borderCol}` : 'none',
                      background: i === 0 ? 'rgba(245,158,11,0.06)' : 'transparent',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontWeight: 700, color: i < 3 ? '#f59e0b' : '#64748b', width: 24 }}>#{i + 1}</span>
                        <span style={{ fontWeight: 600 }}>{e.score} pts</span>
                      </div>
                      <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: '#94a3b8' }}>
                        <span>{e.accuracy}% acc</span>
                        <span>{e.answered} Qs</span>
                        <span>{new Date(e.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
      </GameWrapper>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}