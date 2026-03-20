import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Heart, Lightbulb, RotateCcw, Star, CheckCircle, XCircle, Hexagon } from 'lucide-react';
import Navbar from '../../components/Navbar';
import GameWrapper from '../../components/GameWrapper';
import Lauren from '../../components/Lauren';
import { recordGamePlayed } from '../../utils/gameUtils';

const WORDS = [
  // EASY (10 points)
  { word: 'separate', definition: 'To divide or keep apart', difficulty: 'easy', hint: 'se', exampleSentence: 'Please ________ the recycling from the general waste.' },
  { word: 'definitely', definition: 'Without doubt; certainly', difficulty: 'easy', hint: 'de', exampleSentence: 'She will ________ pass her English exam.' },
  { word: 'necessary', definition: 'Required; essential', difficulty: 'easy', hint: 'ne', exampleSentence: 'It is ________ to revise before the exam.' },
  { word: 'receive', definition: 'To be given or accept something', difficulty: 'easy', hint: 're', exampleSentence: 'You will ________ your results in August.' },
  { word: 'believe', definition: 'To accept as true or real', difficulty: 'easy', hint: 'be', exampleSentence: 'I ________ that practice makes perfect.' },
  { word: 'achieve', definition: 'To successfully reach a goal', difficulty: 'easy', hint: 'ac', exampleSentence: 'Hard work helps you ________ your targets.' },
  { word: 'beginning', definition: 'The start or first part of something', difficulty: 'easy', hint: 'be', exampleSentence: 'The ________ of the novel establishes the setting.' },
  { word: 'argument', definition: 'A reason or set of reasons given in support of something', difficulty: 'easy', hint: 'ar', exampleSentence: 'The writer presents a compelling ________ for change.' },
  { word: 'disappear', definition: 'To cease to be visible', difficulty: 'easy', hint: 'di', exampleSentence: 'The ghost seemed to ________ into thin air.' },
  { word: 'environment', definition: 'The surroundings or conditions in which a person lives', difficulty: 'easy', hint: 'en', exampleSentence: 'The poem describes the natural ________ of the countryside.' },
  { word: 'experience', definition: 'Practical contact with and observation of events', difficulty: 'easy', hint: 'ex', exampleSentence: 'The character draws on personal ________ to overcome conflict.' },
  { word: 'government', definition: 'The group of people who officially control a country', difficulty: 'easy', hint: 'go', exampleSentence: 'The ________ introduced new education policies.' },
  { word: 'immediately', definition: 'At once; without delay', difficulty: 'easy', hint: 'im', exampleSentence: 'She ________ recognised the danger of the situation.' },
  { word: 'knowledge', definition: 'Information and skills acquired through experience or education', difficulty: 'easy', hint: 'kn', exampleSentence: 'His ________ of Shakespeare was impressive.' },
  { word: 'occasion', definition: 'A particular event or time', difficulty: 'easy', hint: 'oc', exampleSentence: 'On this ________, the character showed great bravery.' },
  { word: 'occurred', definition: 'Happened; took place', difficulty: 'easy', hint: 'oc', exampleSentence: 'A dramatic twist ________ at the end of the chapter.' },
  { word: 'opportunity', definition: 'A chance to do something', difficulty: 'easy', hint: 'op', exampleSentence: 'The character seized the ________ to escape.' },
  { word: 'possession', definition: 'The state of having or owning something', difficulty: 'easy', hint: 'po', exampleSentence: 'The ring was his most treasured ________.' },
  { word: 'recommend', definition: 'To suggest as good or suitable', difficulty: 'easy', hint: 're', exampleSentence: 'I would ________ this novel to anyone studying GCSE English.' },
  { word: 'relevant', definition: 'Closely connected or appropriate to the matter at hand', difficulty: 'easy', hint: 're', exampleSentence: 'Make sure your evidence is ________ to the question.' },
  { word: 'restaurant', definition: 'A place where people pay to eat meals', difficulty: 'easy', hint: 're', exampleSentence: 'The scene in the ________ reveals the class divide.' },
  { word: 'rhythm', definition: 'A strong, regular repeated pattern of sound', difficulty: 'easy', hint: 'rh', exampleSentence: 'The poem has a steady ________ that mirrors a heartbeat.' },
  { word: 'conscience', definition: 'An inner sense of right and wrong', difficulty: 'easy', hint: 'co', exampleSentence: 'His ________ troubled him after the betrayal.' },
  { word: 'surprise', definition: 'An unexpected event or thing', difficulty: 'easy', hint: 'su', exampleSentence: 'The ending came as a complete ________ to the reader.' },
  { word: 'tomorrow', definition: 'The day after today', difficulty: 'easy', hint: 'to', exampleSentence: 'Macbeth speaks of ________ and the futility of time.' },
  { word: 'although', definition: 'In spite of the fact that', difficulty: 'easy', hint: 'al', exampleSentence: '________ the character seems confident, he is deeply insecure.' },
  { word: 'business', definition: 'A commercial activity or organisation', difficulty: 'easy', hint: 'bu', exampleSentence: 'Birling is obsessed with his ________ reputation.' },
  { word: 'disappoint', definition: 'To fail to meet expectations', difficulty: 'easy', hint: 'di', exampleSentence: 'The results did not ________ her parents.' },
  { word: 'existence', definition: 'The fact or state of living or being', difficulty: 'easy', hint: 'ex', exampleSentence: 'The poem questions the meaning of human ________.' },
  { word: 'familiar', definition: 'Well known from long or close association', difficulty: 'easy', hint: 'fa', exampleSentence: 'The theme of conflict is ________ across many texts.' },
  { word: 'guarantee', definition: 'A firm promise or assurance', difficulty: 'easy', hint: 'gu', exampleSentence: 'There is no ________ of a happy ending in tragedy.' },
  { word: 'language', definition: 'The method of human communication using words', difficulty: 'easy', hint: 'la', exampleSentence: 'Analyse the writer\'s use of ________ in this extract.' },
  { word: 'privilege', definition: 'A special advantage available only to a particular group', difficulty: 'easy', hint: 'pr', exampleSentence: 'The play explores themes of class and ________.' },
  { word: 'professor', definition: 'A university academic of the highest rank', difficulty: 'easy', hint: 'pr', exampleSentence: 'The ________ gave a lecture on Victorian literature.' },

  // MEDIUM (20 points)
  { word: 'accommodation', definition: 'A place to live or stay', difficulty: 'medium', hint: 'ac', exampleSentence: 'The family struggled to find suitable ________.' },
  { word: 'onomatopoeia', definition: 'Words that imitate natural sounds', difficulty: 'medium', hint: 'on', exampleSentence: '"Buzz" and "hiss" are examples of ________.' },
  { word: 'alliteration', definition: 'The occurrence of the same letter or sound at the beginning of adjacent words', difficulty: 'medium', hint: 'al', exampleSentence: '"Peter Piper picked" is an example of ________.' },
  { word: 'soliloquy', definition: 'A speech in a play where a character speaks their thoughts aloud while alone', difficulty: 'medium', hint: 'so', exampleSentence: 'Hamlet\'s famous ________ begins with "To be, or not to be".' },
  { word: 'metaphor', definition: 'A figure of speech comparing two unlike things without using like or as', difficulty: 'medium', hint: 'me', exampleSentence: '"Life is a journey" is an example of a ________.' },
  { word: 'personification', definition: 'Giving human qualities to non-human things', difficulty: 'medium', hint: 'pe', exampleSentence: '"The wind whispered" is an example of ________.' },
  { word: 'foreshadowing', definition: 'A warning or indication of a future event in a narrative', difficulty: 'medium', hint: 'fo', exampleSentence: 'The storm at the beginning is ________ of the conflict to come.' },
  { word: 'protagonist', definition: 'The leading character in a drama or other literary work', difficulty: 'medium', hint: 'pr', exampleSentence: 'The ________ of the novel faces many challenges.' },
  { word: 'antagonist', definition: 'A person who actively opposes the main character', difficulty: 'medium', hint: 'an', exampleSentence: 'The ________ creates obstacles for the hero throughout.' },
  { word: 'exaggeration', definition: 'A statement that represents something as better or worse than it really is', difficulty: 'medium', hint: 'ex', exampleSentence: 'The writer uses ________ to emphasise the character\'s fear.' },
  { word: 'atmosphere', definition: 'The mood or feeling created in a piece of writing', difficulty: 'medium', hint: 'at', exampleSentence: 'The gothic setting creates a dark and eerie ________.' },
  { word: 'significance', definition: 'The quality of being worthy of attention; importance', difficulty: 'medium', hint: 'si', exampleSentence: 'Explain the ________ of the red colour imagery.' },
  { word: 'simultaneously', definition: 'At the same time', difficulty: 'medium', hint: 'si', exampleSentence: 'Both events occur ________, increasing the dramatic tension.' },
  { word: 'correspondence', definition: 'Communication by exchanging letters or emails', difficulty: 'medium', hint: 'co', exampleSentence: 'The ________ between the characters reveals their true feelings.' },
  { word: 'independent', definition: 'Free from outside control; not depending on another', difficulty: 'medium', hint: 'in', exampleSentence: 'Sheila becomes more ________ as the play progresses.' },
  { word: 'interpretation', definition: 'The action of explaining the meaning of something', difficulty: 'medium', hint: 'in', exampleSentence: 'There is more than one ________ of the poem\'s ending.' },
  { word: 'sophisticated', definition: 'Having a great deal of worldly experience and knowledge', difficulty: 'medium', hint: 'so', exampleSentence: 'The writer uses ________ vocabulary to convey intelligence.' },
  { word: 'consequently', definition: 'As a result', difficulty: 'medium', hint: 'co', exampleSentence: 'He ignored the warning; ________, disaster struck.' },
  { word: 'consciousness', definition: 'The state of being aware of one\'s surroundings', difficulty: 'medium', hint: 'co', exampleSentence: 'The narrator drifts in and out of ________.' },
  { word: 'embarrassment', definition: 'A feeling of self-consciousness or shame', difficulty: 'medium', hint: 'em', exampleSentence: 'Her ________ was evident in the reddening of her cheeks.' },
  { word: 'maintenance', definition: 'The process of keeping something in good condition', difficulty: 'medium', hint: 'ma', exampleSentence: 'The ________ of social order is a key theme.' },
  { word: 'mischievous', definition: 'Causing or showing a fondness for causing trouble in a playful way', difficulty: 'medium', hint: 'mi', exampleSentence: 'Puck is a ________ character in A Midsummer Night\'s Dream.' },
  { word: 'phenomenon', definition: 'A remarkable event or occurrence', difficulty: 'medium', hint: 'ph', exampleSentence: 'The literary ________ of unreliable narration is explored here.' },
  { word: 'prejudice', definition: 'Preconceived opinion not based on reason or experience', difficulty: 'medium', hint: 'pr', exampleSentence: 'The novel examines racial ________ in 1930s America.' },
  { word: 'questionnaire', definition: 'A set of printed questions for a survey', difficulty: 'medium', hint: 'qu', exampleSentence: 'The students completed a ________ about their reading habits.' },
  { word: 'surveillance', definition: 'Close observation, especially of a suspected person', difficulty: 'medium', hint: 'su', exampleSentence: 'The theme of ________ is central to dystopian literature.' },
  { word: 'temperament', definition: 'A person\'s nature as it affects their behaviour', difficulty: 'medium', hint: 'te', exampleSentence: 'The character\'s fiery ________ leads to tragic consequences.' },
  { word: 'vulnerability', definition: 'The quality of being easily hurt or attacked', difficulty: 'medium', hint: 'vu', exampleSentence: 'The poet expresses ________ through fragmented structure.' },
  { word: 'bibliography', definition: 'A list of books or sources referred to in a text', difficulty: 'medium', hint: 'bi', exampleSentence: 'Include a ________ at the end of your coursework.' },
  { word: 'deteriorate', definition: 'To become progressively worse', difficulty: 'medium', hint: 'de', exampleSentence: 'Relations between the characters begin to ________.' },
  { word: 'hypocrisy', definition: 'The practice of claiming moral standards to which one\'s behaviour does not conform', difficulty: 'medium', hint: 'hy', exampleSentence: 'Priestley exposes the ________ of the upper classes.' },
  { word: 'ambiguity', definition: 'The quality of being open to more than one interpretation', difficulty: 'medium', hint: 'am', exampleSentence: 'The ________ of the ending leaves readers questioning the truth.' },
  { word: 'hierarchy', definition: 'A system in which people are ranked according to status', difficulty: 'medium', hint: 'hi', exampleSentence: 'The social ________ is challenged throughout the novel.' },
  { word: 'catastrophe', definition: 'An event causing great damage or suffering', difficulty: 'medium', hint: 'ca', exampleSentence: 'The play ends in total ________ for the tragic hero.' },

  // HARD (30 points)
  { word: 'juxtaposition', definition: 'Placing two things close together to show contrast', difficulty: 'hard', hint: 'ju', exampleSentence: 'The ________ of wealth and poverty highlights inequality.' },
  { word: 'verisimilitude', definition: 'The appearance of being true or real', difficulty: 'hard', hint: 've', exampleSentence: 'The author achieves ________ through detailed descriptions of everyday life.' },
  { word: 'denouement', definition: 'The final resolution of a plot in a drama or narrative', difficulty: 'hard', hint: 'de', exampleSentence: 'The ________ of the play ties together all remaining loose ends.' },
  { word: 'enjambment', definition: 'The continuation of a sentence beyond the end of a line of verse', difficulty: 'hard', hint: 'en', exampleSentence: 'The poet uses ________ to create a sense of urgency.' },
  { word: 'antithesis', definition: 'A contrast or opposition between two things', difficulty: 'hard', hint: 'an', exampleSentence: '"It was the best of times, it was the worst of times" is an example of ________.' },
  { word: 'synecdoche', definition: 'A figure of speech where a part represents the whole', difficulty: 'hard', hint: 'sy', exampleSentence: '"All hands on deck" is an example of ________.' },
  { word: 'metonymy', definition: 'A figure of speech where something is referred to by the name of something closely associated', difficulty: 'hard', hint: 'me', exampleSentence: '"The Crown" meaning the monarchy is an example of ________.' },
  { word: 'bildungsroman', definition: 'A novel dealing with a person\'s formative years and moral development', difficulty: 'hard', hint: 'bi', exampleSentence: 'Great Expectations is a classic example of a ________.' },
  { word: 'caesura', definition: 'A pause near the middle of a line of verse', difficulty: 'hard', hint: 'ca', exampleSentence: 'The ________ in line five creates a dramatic pause.' },
  { word: 'didactic', definition: 'Intended to teach or instruct, especially morally', difficulty: 'hard', hint: 'di', exampleSentence: 'An Inspector Calls has a strongly ________ purpose.' },
  { word: 'euphemism', definition: 'A mild or indirect word used in place of one considered too harsh', difficulty: 'hard', hint: 'eu', exampleSentence: '"Passed away" is a ________ for died.' },
  { word: 'pathetic fallacy', definition: 'Attributing human emotions to weather or nature', difficulty: 'hard', hint: 'pa', exampleSentence: 'The storm represents anger through ________.' },
  { word: 'omniscient', definition: 'Knowing everything; used of a narrator who knows all characters\' thoughts', difficulty: 'hard', hint: 'om', exampleSentence: 'The story is told by an ________ third-person narrator.' },
  { word: 'idiosyncratic', definition: 'Peculiar or individual', difficulty: 'hard', hint: 'id', exampleSentence: 'The character\'s ________ speech patterns make him memorable.' },
  { word: 'onomatopoeic', definition: 'Relating to or being a word that imitates a natural sound', difficulty: 'hard', hint: 'on', exampleSentence: 'The ________ words "crash" and "bang" create vivid imagery.' },
  { word: 'sibilance', definition: 'The use of hissing sounds (s, sh, z) in speech or writing', difficulty: 'hard', hint: 'si', exampleSentence: 'The ________ in "silky, slithering snake" creates an unsettling tone.' },
  { word: 'assonance', definition: 'The repetition of vowel sounds in nearby words', difficulty: 'hard', hint: 'as', exampleSentence: '"The rain in Spain" demonstrates ________.' },
  { word: 'plosive', definition: 'A consonant sound produced by stopping airflow (b, d, g, p, t, k)', difficulty: 'hard', hint: 'pl', exampleSentence: 'The harsh ________ sounds convey the speaker\'s anger.' },
  { word: 'anachronism', definition: 'Something that belongs to a different time period', difficulty: 'hard', hint: 'an', exampleSentence: 'A clock in Julius Caesar is a famous ________ in Shakespeare.' },
  { word: 'anaphora', definition: 'Repetition of a word or phrase at the beginning of successive clauses', difficulty: 'hard', hint: 'an', exampleSentence: 'Martin Luther King\'s "I have a dream" speech uses ________.' },
  { word: 'epistrophe', definition: 'Repetition of a word at the end of successive clauses', difficulty: 'hard', hint: 'ep', exampleSentence: '"...of the people, by the people, for the people" uses ________.' },
  { word: 'polysyndeton', definition: 'The use of several conjunctions in close succession', difficulty: 'hard', hint: 'po', exampleSentence: '"And the rain came and the floods rose and the wind blew" uses ________.' },
  { word: 'asyndeton', definition: 'The omission of conjunctions between clauses', difficulty: 'hard', hint: 'as', exampleSentence: '"I came, I saw, I conquered" is an example of ________.' },
  { word: 'catharsis', definition: 'The release of strong emotions through art or drama', difficulty: 'hard', hint: 'ca', exampleSentence: 'The audience experiences ________ at the tragic hero\'s downfall.' },
  { word: 'hamartia', definition: 'A fatal flaw leading to the downfall of a tragic hero', difficulty: 'hard', hint: 'ha', exampleSentence: 'Macbeth\'s ________ is his ambition.' },
  { word: 'peripeteia', definition: 'A sudden reversal of fortune in a story', difficulty: 'hard', hint: 'pe', exampleSentence: 'The ________ occurs when the hero\'s luck turns dramatically.' },
  { word: 'solecism', definition: 'A grammatical mistake in speech or writing', difficulty: 'hard', hint: 'so', exampleSentence: 'The deliberate ________ reveals the character\'s lack of education.' },
  { word: 'doppelganger', definition: 'A ghostly double or counterpart of a living person', difficulty: 'hard', hint: 'do', exampleSentence: 'Hyde acts as a ________ to the respectable Dr Jekyll.' },
  { word: 'schadenfreude', definition: 'Pleasure derived from another person\'s misfortune', difficulty: 'hard', hint: 'sc', exampleSentence: 'The audience feels a sense of ________ at the villain\'s defeat.' },
  { word: 'zeitgeist', definition: 'The defining spirit or mood of a particular period of history', difficulty: 'hard', hint: 'ze', exampleSentence: 'The novel captures the ________ of post-war Britain.' },
  { word: 'hubris', definition: 'Excessive pride or self-confidence, especially in a tragic hero', difficulty: 'hard', hint: 'hu', exampleSentence: 'Ozymandias\'s ________ is evident in his boastful inscription.' },
  { word: 'unrequited', definition: 'Not returned or reciprocated, especially of love', difficulty: 'hard', hint: 'un', exampleSentence: 'The theme of ________ love runs through many Romantic poems.' },
  { word: 'psychomachia', definition: 'A conflict of the soul; an internal mental battle', difficulty: 'hard', hint: 'ps', exampleSentence: 'Macbeth\'s ________ is shown through his tortured soliloquies.' },
  { word: 'palimpsest', definition: 'Something reused or altered but still bearing visible traces of its earlier form', difficulty: 'hard', hint: 'pa', exampleSentence: 'The text functions as a ________, layering multiple meanings.' },
];

const STORAGE_KEY = 'learnright_game_spellingbee';
const TOTAL_ROUNDS = 20;
const MAX_LIVES = 3;

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getPointsForDifficulty(d) {
  if (d === 'easy') return 10;
  if (d === 'medium') return 20;
  return 30;
}

function getDifficultyColor(d) {
  if (d === 'easy') return '#34d399';
  if (d === 'medium') return '#fbbf24';
  return '#f87171';
}

function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { highScore: 0, wordsToReview: [] };
  } catch {
    return { highScore: 0, wordsToReview: [] };
  }
}

function saveSaved(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch { /* ignore */ }
}

export default function SpellingBee() {
  const [phase, setPhase] = useState('menu'); // menu | playing | result | feedback
  const [words, setWords] = useState([]);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(MAX_LIVES);
  const [streak, setStreak] = useState(0);
  const [input, setInput] = useState('');
  const [hintUsed, setHintUsed] = useState(false);
  const [wrongWords, setWrongWords] = useState([]);
  const [feedback, setFeedback] = useState(null); // { correct, word }
  const [saved, setSaved] = useState(loadSaved);
  const inputRef = useRef(null);

  const startGame = useCallback(() => {
    const shuffled = shuffleArray(WORDS).slice(0, TOTAL_ROUNDS);
    setWords(shuffled);
    setRound(0);
    setScore(0);
    setLives(MAX_LIVES);
    setStreak(0);
    setInput('');
    setHintUsed(false);
    setWrongWords([]);
    setFeedback(null);
    setPhase('playing');
  }, []);

  useEffect(() => {
    if (phase === 'playing' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [phase, round, feedback]);

  const currentWord = words[round] || null;

  const isGameOver = lives <= 0 || round >= TOTAL_ROUNDS;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentWord || feedback) return;
    const guess = input.trim().toLowerCase();
    const answer = currentWord.word.toLowerCase();
    if (guess === answer) {
      const pts = getPointsForDifficulty(currentWord.difficulty) + (streak * 5);
      setScore(s => s + (hintUsed ? Math.max(pts - 5, 0) : pts));
      setStreak(s => s + 1);
      setFeedback({ correct: true, word: currentWord.word });
    } else {
      setLives(l => l - 1);
      setStreak(0);
      setWrongWords(w => [...w, currentWord]);
      setFeedback({ correct: false, word: currentWord.word });
    }
  };

  const handleNext = () => {
    const nextRound = round + 1;
    if (lives <= (feedback && !feedback.correct ? 0 : -1) || nextRound >= TOTAL_ROUNDS) {
      // End game
      const finalLives = feedback && !feedback.correct ? lives : lives;
      if (finalLives <= 0 || nextRound >= TOTAL_ROUNDS) {
        finishGame();
        return;
      }
    }
    // Check again with updated lives
    const currentLives = feedback && !feedback.correct ? lives : lives;
    if (currentLives <= 0) {
      finishGame();
      return;
    }
    setRound(nextRound);
    setInput('');
    setHintUsed(false);
    setFeedback(null);
    if (nextRound >= TOTAL_ROUNDS) {
      finishGame();
    }
  };

  const finishGame = () => {
    const newSaved = { ...saved };
    if (score > newSaved.highScore) newSaved.highScore = score;
    const existingReviewWords = new Set(newSaved.wordsToReview.map(w => w.word));
    wrongWords.forEach(w => {
      if (!existingReviewWords.has(w.word)) {
        newSaved.wordsToReview.push({ word: w.word, definition: w.definition, difficulty: w.difficulty });
      }
    });
    setSaved(newSaved);
    saveSaved(newSaved);
    recordGamePlayed();
    setPhase('result');
  };

  const useHint = () => {
    if (!hintUsed && currentWord) {
      setHintUsed(true);
      setInput(currentWord.hint);
      if (inputRef.current) inputRef.current.focus();
    }
  };

  const clearReviewList = () => {
    const newSaved = { ...saved, wordsToReview: [] };
    setSaved(newSaved);
    saveSaved(newSaved);
  };

  // Honeycomb SVG background pattern
  const honeycombBg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%23f59e0b' stroke-opacity='0.06' stroke-width='1'/%3E%3Cpath d='M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34' fill='none' stroke='%23f59e0b' stroke-opacity='0.06' stroke-width='1'/%3E%3C/svg%3E")`;

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9', backgroundImage: honeycombBg }}>
      <Navbar />
      <GameWrapper gameId="spelling-bee">
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <Link to="/games" style={{ color: '#f59e0b', display: 'flex', alignItems: 'center' }}>
            <ArrowLeft size={20} />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Hexagon size={28} style={{ color: '#f59e0b', fill: '#f59e0b', fillOpacity: 0.15 }} />
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f59e0b', margin: 0 }}>
              Spelling Bee
            </h1>
          </div>
        </div>

        {/* MENU */}
        {phase === 'menu' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(245,158,11,0.12), rgba(245,158,11,0.04))',
              border: '1px solid rgba(245,158,11,0.25)',
              borderRadius: 16, padding: '2.5rem 2rem', marginBottom: '2rem'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>&#127855;</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fbbf24', marginBottom: '0.75rem' }}>
                Can You Spell It?
              </h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.6, maxWidth: 500, margin: '0 auto 1.5rem' }}>
                Spell commonly misspelled GCSE English exam words. You get a definition, difficulty level,
                and an example sentence with the word blanked out. Type the correct spelling to score points!
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ color: '#34d399', fontWeight: 700, fontSize: '1.1rem' }}>Easy</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>10 pts</div>
                </div>
                <div>
                  <div style={{ color: '#fbbf24', fontWeight: 700, fontSize: '1.1rem' }}>Medium</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>20 pts</div>
                </div>
                <div>
                  <div style={{ color: '#f87171', fontWeight: 700, fontSize: '1.1rem' }}>Hard</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>30 pts</div>
                </div>
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                <Heart size={14} style={{ display: 'inline', color: '#f87171', verticalAlign: 'middle' }} /> 3 lives
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Lightbulb size={14} style={{ display: 'inline', color: '#fbbf24', verticalAlign: 'middle' }} /> Hints cost 5 pts
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Star size={14} style={{ display: 'inline', color: '#f59e0b', verticalAlign: 'middle' }} /> Streak bonus +5
              </div>
            </div>

            {saved.highScore > 0 && (
              <div style={{
                background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
                borderRadius: 12, padding: '1rem', marginBottom: '1.5rem', display: 'inline-block'
              }}>
                <Trophy size={18} style={{ color: '#fbbf24', verticalAlign: 'middle' }} />
                <span style={{ color: '#fbbf24', fontWeight: 700, marginLeft: '0.5rem' }}>High Score: {saved.highScore}</span>
              </div>
            )}

            <div>
              <button onClick={startGame} style={{
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                color: '#0a0e1a', border: 'none', borderRadius: 12, padding: '0.85rem 2.5rem',
                fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer',
                display: 'block', margin: '0 auto', transition: 'transform 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                Start Game
              </button>
            </div>

            {saved.wordsToReview.length > 0 && (
              <div style={{ marginTop: '2rem', textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <h3 style={{ color: '#f59e0b', fontWeight: 700, margin: 0 }}>Words to Review ({saved.wordsToReview.length})</h3>
                  <button onClick={clearReviewList} style={{
                    background: 'transparent', border: '1px solid rgba(245,158,11,0.3)', color: '#f59e0b',
                    borderRadius: 8, padding: '0.35rem 0.75rem', cursor: 'pointer', fontSize: '0.8rem'
                  }}>Clear List</button>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {saved.wordsToReview.map((w, i) => (
                    <span key={i} style={{
                      background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)',
                      borderRadius: 8, padding: '0.35rem 0.7rem', fontSize: '0.85rem', color: '#fbbf24'
                    }}>
                      {w.word}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* PLAYING */}
        {phase === 'playing' && currentWord && (
          <div>
            {/* Status bar */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {Array.from({ length: MAX_LIVES }).map((_, i) => (
                  <Heart key={i} size={22}
                    style={{ color: i < lives ? '#f87171' : '#334155', fill: i < lives ? '#f87171' : 'none' }} />
                ))}
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                Word {round + 1} / {TOTAL_ROUNDS}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {streak > 1 && (
                  <span style={{ color: '#f59e0b', fontWeight: 600, fontSize: '0.85rem' }}>
                    <Star size={14} style={{ verticalAlign: 'middle' }} /> Streak: {streak}
                  </span>
                )}
                <span style={{ color: '#fbbf24', fontWeight: 700, fontSize: '1.1rem' }}>
                  {score} pts
                </span>
              </div>
            </div>

            {/* Word card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(15,23,42,0.95))',
              border: '1px solid rgba(245,158,11,0.2)', borderRadius: 16,
              padding: '2rem', marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{
                  background: `${getDifficultyColor(currentWord.difficulty)}20`,
                  color: getDifficultyColor(currentWord.difficulty),
                  padding: '0.25rem 0.75rem', borderRadius: 20, fontSize: '0.8rem', fontWeight: 600,
                  border: `1px solid ${getDifficultyColor(currentWord.difficulty)}40`
                }}>
                  {currentWord.difficulty.toUpperCase()} — {getPointsForDifficulty(currentWord.difficulty)} pts
                </span>
                {!feedback && !hintUsed && (
                  <button onClick={useHint} style={{
                    background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.3)',
                    color: '#fbbf24', borderRadius: 8, padding: '0.35rem 0.75rem', cursor: 'pointer',
                    fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.35rem'
                  }}>
                    <Lightbulb size={14} /> Hint (-5 pts)
                  </button>
                )}
                {hintUsed && !feedback && (
                  <span style={{ color: '#fbbf24', fontSize: '0.8rem' }}>
                    Hint: starts with "{currentWord.hint}..."
                  </span>
                )}
              </div>

              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.75rem' }}>
                {currentWord.definition}
              </h2>

              <p style={{
                color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6,
                background: 'rgba(0,0,0,0.25)', borderRadius: 8, padding: '0.75rem 1rem',
                fontStyle: 'italic'
              }}>
                {currentWord.exampleSentence}
              </p>
            </div>

            {/* Input / Feedback */}
            {!feedback ? (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <input
                    ref={inputRef}
                    type="text"
                    aria-label="Spell the word"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type the word..."
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="false"
                    style={{
                      flex: 1, background: 'rgba(15,23,42,0.8)', border: '2px solid rgba(245,158,11,0.3)',
                      borderRadius: 12, padding: '0.85rem 1rem', color: '#f1f5f9', fontSize: '1.1rem',
                      outline: 'none', fontFamily: 'inherit',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = '#f59e0b'}
                    onBlur={e => e.target.style.borderColor = 'rgba(245,158,11,0.3)'}
                  />
                  <button type="submit" style={{
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    color: '#0a0e1a', border: 'none', borderRadius: 12, padding: '0.85rem 1.5rem',
                    fontWeight: 700, cursor: 'pointer', fontSize: '1rem'
                  }}>
                    Check
                  </button>
                </div>
              </form>
            ) : (
              <div style={{
                background: feedback.correct ? 'rgba(52,211,153,0.1)' : 'rgba(248,113,113,0.1)',
                border: `1px solid ${feedback.correct ? 'rgba(52,211,153,0.3)' : 'rgba(248,113,113,0.3)'}`,
                borderRadius: 12, padding: '1.25rem', textAlign: 'center'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  {feedback.correct
                    ? <CheckCircle size={24} style={{ color: '#34d399' }} />
                    : <XCircle size={24} style={{ color: '#f87171' }} />
                  }
                  <span style={{ fontSize: '1.15rem', fontWeight: 700, color: feedback.correct ? '#34d399' : '#f87171' }}>
                    {feedback.correct ? 'Correct!' : 'Incorrect!'}
                  </span>
                </div>
                {!feedback.correct && (
                  <p style={{ color: '#f1f5f9', marginBottom: '0.5rem' }}>
                    The correct spelling is: <strong style={{ color: '#fbbf24', letterSpacing: '0.05em' }}>{feedback.word}</strong>
                  </p>
                )}
                {feedback.correct && streak > 1 && (
                  <p style={{ color: '#f59e0b', fontSize: '0.85rem' }}>
                    Streak bonus: +{(streak - 1) * 5} pts!
                  </p>
                )}
                <button onClick={handleNext} style={{
                  background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)',
                  color: '#fbbf24', borderRadius: 10, padding: '0.6rem 1.5rem', cursor: 'pointer',
                  fontWeight: 600, marginTop: '0.5rem', fontSize: '0.95rem'
                }}>
                  {(lives <= 0 || round + 1 >= TOTAL_ROUNDS) ? 'See Results' : 'Next Word'}
                </button>
              </div>
            )}
          </div>
        )}

        {/* RESULTS */}
        {phase === 'result' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(245,158,11,0.12), rgba(245,158,11,0.04))',
              border: '1px solid rgba(245,158,11,0.25)',
              borderRadius: 16, padding: '2.5rem 2rem', marginBottom: '2rem'
            }}>
              <Trophy size={48} style={{ color: '#fbbf24', marginBottom: '1rem' }} />
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fbbf24', marginBottom: '0.5rem' }}>
                Game Over!
              </h2>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f59e0b', marginBottom: '0.5rem' }}>
                {score} points
              </div>
              {score >= saved.highScore && score > 0 && (
                <div style={{ color: '#34d399', fontWeight: 600, marginBottom: '0.5rem' }}>
                  New High Score!
                </div>
              )}
              <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                {round} words attempted &bull; {round - wrongWords.length} correct &bull; {wrongWords.length} wrong
              </div>
            </div>

            {wrongWords.length > 0 && (
              <div style={{
                background: 'rgba(248,113,113,0.06)', border: '1px solid rgba(248,113,113,0.2)',
                borderRadius: 12, padding: '1.25rem', marginBottom: '1.5rem', textAlign: 'left'
              }}>
                <h3 style={{ color: '#f87171', fontWeight: 700, marginBottom: '0.75rem', fontSize: '1rem' }}>
                  Words to Study ({wrongWords.length})
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {wrongWords.map((w, i) => (
                    <div key={i} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      background: 'rgba(0,0,0,0.2)', borderRadius: 8, padding: '0.5rem 0.75rem'
                    }}>
                      <span style={{ color: '#fbbf24', fontWeight: 600 }}>{w.word}</span>
                      <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{w.definition}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(() => {
              const correctWords = round - wrongWords.length;
              const pct = round > 0 ? Math.round((correctWords / round) * 100) : 0;
              const laurenEmotion = pct >= 90 ? 'celebrating' : pct >= 70 ? 'happy' : pct >= 50 ? 'encouraging' : 'concerned';
              const laurenMessage = pct >= 90 ? "Outstanding work! You really know your stuff — that's Grade 9 territory!"
                : pct >= 70 ? "Great job! You're showing solid understanding. Keep practising to push even higher!"
                : pct >= 50 ? "Good effort! You're getting there — review the ones you missed and try again."
                : "Don't worry — this is how we learn! Review the feedback and give it another go.";
              return <div style={{ marginBottom: '1.5rem' }}><Lauren emotion={laurenEmotion} message={laurenMessage} size="medium" position="inline" /></div>;
            })()}

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <button onClick={startGame} style={{
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                color: '#0a0e1a', border: 'none', borderRadius: 12, padding: '0.75rem 1.5rem',
                fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'
              }}>
                <RotateCcw size={18} /> Play Again
              </button>
              <Link to="/games" style={{
                background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)',
                color: '#fbbf24', borderRadius: 12, padding: '0.75rem 1.5rem',
                fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem'
              }}>
                <ArrowLeft size={18} /> Back to Games
              </Link>
            </div>
          </div>
        )}
      </div>
      </GameWrapper>
    </div>
  );
}
