import { useState, useEffect, useCallback, useRef } from 'react';
import Navbar from '../../components/Navbar';
import GameWrapper from '../../components/GameWrapper';

const STORAGE_KEY = 'learnright_game_grammarninja';

const BELTS = [
  { name: 'White Belt', color: '#e2e8f0', min: 0 },
  { name: 'Yellow Belt', color: '#fbbf24', min: 50 },
  { name: 'Orange Belt', color: '#f97316', min: 150 },
  { name: 'Green Belt', color: '#10b981', min: 300 },
  { name: 'Blue Belt', color: '#3b82f6', min: 500 },
  { name: 'Black Belt', color: '#1e293b', min: 800 },
];

function getBelt(score) {
  let belt = BELTS[0];
  for (const b of BELTS) {
    if (score >= b.min) belt = b;
  }
  return belt;
}

const LEVELS = [
  { name: 'Level 1', subtitle: 'Nouns & Verbs', targets: ['noun', 'verb'] },
  { name: 'Level 2', subtitle: 'Adjectives & Adverbs', targets: ['adjective', 'adverb'] },
  { name: 'Level 3', subtitle: 'Pronouns & Prepositions', targets: ['pronoun', 'preposition'] },
  { name: 'Level 4', subtitle: 'Conjunctions & Determiners', targets: ['conjunction', 'determiner'] },
  { name: 'Level 5', subtitle: 'Clauses & Relative Pronouns', targets: ['subordinate_clause', 'relative_pronoun'] },
  { name: 'Boss Level', subtitle: 'All Parts of Speech', targets: ['noun', 'verb', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'determiner', 'subordinate_clause', 'relative_pronoun'] },
];

const SENTENCES = [
  // Level 1 — Nouns & Verbs
  { sentence: 'The fierce dragon breathed fire', words: [
    { text: 'The', pos: 'determiner' }, { text: 'fierce', pos: 'adjective' }, { text: 'dragon', pos: 'noun' }, { text: 'breathed', pos: 'verb' }, { text: 'fire', pos: 'noun' }
  ]},
  { sentence: 'Birds sing beautiful melodies at dawn', words: [
    { text: 'Birds', pos: 'noun' }, { text: 'sing', pos: 'verb' }, { text: 'beautiful', pos: 'adjective' }, { text: 'melodies', pos: 'noun' }, { text: 'at', pos: 'preposition' }, { text: 'dawn', pos: 'noun' }
  ]},
  { sentence: 'The cat chased a mouse across the garden', words: [
    { text: 'The', pos: 'determiner' }, { text: 'cat', pos: 'noun' }, { text: 'chased', pos: 'verb' }, { text: 'a', pos: 'determiner' }, { text: 'mouse', pos: 'noun' }, { text: 'across', pos: 'preposition' }, { text: 'the', pos: 'determiner' }, { text: 'garden', pos: 'noun' }
  ]},
  { sentence: 'Scientists discovered a new species in the rainforest', words: [
    { text: 'Scientists', pos: 'noun' }, { text: 'discovered', pos: 'verb' }, { text: 'a', pos: 'determiner' }, { text: 'new', pos: 'adjective' }, { text: 'species', pos: 'noun' }, { text: 'in', pos: 'preposition' }, { text: 'the', pos: 'determiner' }, { text: 'rainforest', pos: 'noun' }
  ]},
  { sentence: 'Thunder rumbled and lightning crackled overhead', words: [
    { text: 'Thunder', pos: 'noun' }, { text: 'rumbled', pos: 'verb' }, { text: 'and', pos: 'conjunction' }, { text: 'lightning', pos: 'noun' }, { text: 'crackled', pos: 'verb' }, { text: 'overhead', pos: 'adverb' }
  ]},
  { sentence: 'The river flows gently through the valley', words: [
    { text: 'The', pos: 'determiner' }, { text: 'river', pos: 'noun' }, { text: 'flows', pos: 'verb' }, { text: 'gently', pos: 'adverb' }, { text: 'through', pos: 'preposition' }, { text: 'the', pos: 'determiner' }, { text: 'valley', pos: 'noun' }
  ]},
  { sentence: 'Children played happily in the park', words: [
    { text: 'Children', pos: 'noun' }, { text: 'played', pos: 'verb' }, { text: 'happily', pos: 'adverb' }, { text: 'in', pos: 'preposition' }, { text: 'the', pos: 'determiner' }, { text: 'park', pos: 'noun' }
  ]},
  { sentence: 'The teacher explained the difficult concept clearly', words: [
    { text: 'The', pos: 'determiner' }, { text: 'teacher', pos: 'noun' }, { text: 'explained', pos: 'verb' }, { text: 'the', pos: 'determiner' }, { text: 'difficult', pos: 'adjective' }, { text: 'concept', pos: 'noun' }, { text: 'clearly', pos: 'adverb' }
  ]},
  // Level 2 — Adjectives & Adverbs
  { sentence: 'The tall ancient tree swayed gracefully', words: [
    { text: 'The', pos: 'determiner' }, { text: 'tall', pos: 'adjective' }, { text: 'ancient', pos: 'adjective' }, { text: 'tree', pos: 'noun' }, { text: 'swayed', pos: 'verb' }, { text: 'gracefully', pos: 'adverb' }
  ]},
  { sentence: 'She quickly finished her delicious breakfast', words: [
    { text: 'She', pos: 'pronoun' }, { text: 'quickly', pos: 'adverb' }, { text: 'finished', pos: 'verb' }, { text: 'her', pos: 'determiner' }, { text: 'delicious', pos: 'adjective' }, { text: 'breakfast', pos: 'noun' }
  ]},
  { sentence: 'The enormous red balloon floated silently upward', words: [
    { text: 'The', pos: 'determiner' }, { text: 'enormous', pos: 'adjective' }, { text: 'red', pos: 'adjective' }, { text: 'balloon', pos: 'noun' }, { text: 'floated', pos: 'verb' }, { text: 'silently', pos: 'adverb' }, { text: 'upward', pos: 'adverb' }
  ]},
  { sentence: 'A bright golden sun rose slowly over the misty hills', words: [
    { text: 'A', pos: 'determiner' }, { text: 'bright', pos: 'adjective' }, { text: 'golden', pos: 'adjective' }, { text: 'sun', pos: 'noun' }, { text: 'rose', pos: 'verb' }, { text: 'slowly', pos: 'adverb' }, { text: 'over', pos: 'preposition' }, { text: 'the', pos: 'determiner' }, { text: 'misty', pos: 'adjective' }, { text: 'hills', pos: 'noun' }
  ]},
  { sentence: 'The extremely loud music played continuously', words: [
    { text: 'The', pos: 'determiner' }, { text: 'extremely', pos: 'adverb' }, { text: 'loud', pos: 'adjective' }, { text: 'music', pos: 'noun' }, { text: 'played', pos: 'verb' }, { text: 'continuously', pos: 'adverb' }
  ]},
  { sentence: 'Heavy dark clouds gathered ominously above', words: [
    { text: 'Heavy', pos: 'adjective' }, { text: 'dark', pos: 'adjective' }, { text: 'clouds', pos: 'noun' }, { text: 'gathered', pos: 'verb' }, { text: 'ominously', pos: 'adverb' }, { text: 'above', pos: 'adverb' }
  ]},
  { sentence: 'The curious young fox moved cautiously forward', words: [
    { text: 'The', pos: 'determiner' }, { text: 'curious', pos: 'adjective' }, { text: 'young', pos: 'adjective' }, { text: 'fox', pos: 'noun' }, { text: 'moved', pos: 'verb' }, { text: 'cautiously', pos: 'adverb' }, { text: 'forward', pos: 'adverb' }
  ]},
  // Level 3 — Pronouns & Prepositions
  { sentence: 'She walked beside him through the forest', words: [
    { text: 'She', pos: 'pronoun' }, { text: 'walked', pos: 'verb' }, { text: 'beside', pos: 'preposition' }, { text: 'him', pos: 'pronoun' }, { text: 'through', pos: 'preposition' }, { text: 'the', pos: 'determiner' }, { text: 'forest', pos: 'noun' }
  ]},
  { sentence: 'They placed it on the shelf above the fireplace', words: [
    { text: 'They', pos: 'pronoun' }, { text: 'placed', pos: 'verb' }, { text: 'it', pos: 'pronoun' }, { text: 'on', pos: 'preposition' }, { text: 'the', pos: 'determiner' }, { text: 'shelf', pos: 'noun' }, { text: 'above', pos: 'preposition' }, { text: 'the', pos: 'determiner' }, { text: 'fireplace', pos: 'noun' }
  ]},
  { sentence: 'We sat between them during the ceremony', words: [
    { text: 'We', pos: 'pronoun' }, { text: 'sat', pos: 'verb' }, { text: 'between', pos: 'preposition' }, { text: 'them', pos: 'pronoun' }, { text: 'during', pos: 'preposition' }, { text: 'the', pos: 'determiner' }, { text: 'ceremony', pos: 'noun' }
  ]},
  { sentence: 'He hid behind the door before she arrived', words: [
    { text: 'He', pos: 'pronoun' }, { text: 'hid', pos: 'verb' }, { text: 'behind', pos: 'preposition' }, { text: 'the', pos: 'determiner' }, { text: 'door', pos: 'noun' }, { text: 'before', pos: 'preposition' }, { text: 'she', pos: 'pronoun' }, { text: 'arrived', pos: 'verb' }
  ]},
  { sentence: 'I gave it to her after the meeting', words: [
    { text: 'I', pos: 'pronoun' }, { text: 'gave', pos: 'verb' }, { text: 'it', pos: 'pronoun' }, { text: 'to', pos: 'preposition' }, { text: 'her', pos: 'pronoun' }, { text: 'after', pos: 'preposition' }, { text: 'the', pos: 'determiner' }, { text: 'meeting', pos: 'noun' }
  ]},
  { sentence: 'You should stand near me under the umbrella', words: [
    { text: 'You', pos: 'pronoun' }, { text: 'should', pos: 'verb' }, { text: 'stand', pos: 'verb' }, { text: 'near', pos: 'preposition' }, { text: 'me', pos: 'pronoun' }, { text: 'under', pos: 'preposition' }, { text: 'the', pos: 'determiner' }, { text: 'umbrella', pos: 'noun' }
  ]},
  // Level 4 — Conjunctions & Determiners
  { sentence: 'The boy and the girl studied but they were tired', words: [
    { text: 'The', pos: 'determiner' }, { text: 'boy', pos: 'noun' }, { text: 'and', pos: 'conjunction' }, { text: 'the', pos: 'determiner' }, { text: 'girl', pos: 'noun' }, { text: 'studied', pos: 'verb' }, { text: 'but', pos: 'conjunction' }, { text: 'they', pos: 'pronoun' }, { text: 'were', pos: 'verb' }, { text: 'tired', pos: 'adjective' }
  ]},
  { sentence: 'A cat or a dog makes a wonderful pet', words: [
    { text: 'A', pos: 'determiner' }, { text: 'cat', pos: 'noun' }, { text: 'or', pos: 'conjunction' }, { text: 'a', pos: 'determiner' }, { text: 'dog', pos: 'noun' }, { text: 'makes', pos: 'verb' }, { text: 'a', pos: 'determiner' }, { text: 'wonderful', pos: 'adjective' }, { text: 'pet', pos: 'noun' }
  ]},
  { sentence: 'Neither the teacher nor the students understood', words: [
    { text: 'Neither', pos: 'conjunction' }, { text: 'the', pos: 'determiner' }, { text: 'teacher', pos: 'noun' }, { text: 'nor', pos: 'conjunction' }, { text: 'the', pos: 'determiner' }, { text: 'students', pos: 'noun' }, { text: 'understood', pos: 'verb' }
  ]},
  { sentence: 'This cake is good yet that pie is better', words: [
    { text: 'This', pos: 'determiner' }, { text: 'cake', pos: 'noun' }, { text: 'is', pos: 'verb' }, { text: 'good', pos: 'adjective' }, { text: 'yet', pos: 'conjunction' }, { text: 'that', pos: 'determiner' }, { text: 'pie', pos: 'noun' }, { text: 'is', pos: 'verb' }, { text: 'better', pos: 'adjective' }
  ]},
  { sentence: 'Both the sun and the moon illuminate our sky', words: [
    { text: 'Both', pos: 'determiner' }, { text: 'the', pos: 'determiner' }, { text: 'sun', pos: 'noun' }, { text: 'and', pos: 'conjunction' }, { text: 'the', pos: 'determiner' }, { text: 'moon', pos: 'noun' }, { text: 'illuminate', pos: 'verb' }, { text: 'our', pos: 'determiner' }, { text: 'sky', pos: 'noun' }
  ]},
  { sentence: 'An eagle soared so we watched in awe', words: [
    { text: 'An', pos: 'determiner' }, { text: 'eagle', pos: 'noun' }, { text: 'soared', pos: 'verb' }, { text: 'so', pos: 'conjunction' }, { text: 'we', pos: 'pronoun' }, { text: 'watched', pos: 'verb' }, { text: 'in', pos: 'preposition' }, { text: 'awe', pos: 'noun' }
  ]},
  { sentence: 'Every student passed for they all studied hard', words: [
    { text: 'Every', pos: 'determiner' }, { text: 'student', pos: 'noun' }, { text: 'passed', pos: 'verb' }, { text: 'for', pos: 'conjunction' }, { text: 'they', pos: 'pronoun' }, { text: 'all', pos: 'adverb' }, { text: 'studied', pos: 'verb' }, { text: 'hard', pos: 'adverb' }
  ]},
  // Level 5 — Subordinate clauses & Relative pronouns
  { sentence: 'The man who found the treasure became famous', words: [
    { text: 'The', pos: 'determiner' }, { text: 'man', pos: 'noun' }, { text: 'who', pos: 'relative_pronoun' }, { text: 'found', pos: 'verb' }, { text: 'the', pos: 'determiner' }, { text: 'treasure', pos: 'noun' }, { text: 'became', pos: 'verb' }, { text: 'famous', pos: 'adjective' }
  ]},
  { sentence: 'She read the book which her teacher recommended', words: [
    { text: 'She', pos: 'pronoun' }, { text: 'read', pos: 'verb' }, { text: 'the', pos: 'determiner' }, { text: 'book', pos: 'noun' }, { text: 'which', pos: 'relative_pronoun' }, { text: 'her', pos: 'determiner' }, { text: 'teacher', pos: 'noun' }, { text: 'recommended', pos: 'verb' }
  ]},
  { sentence: 'Although it rained they continued the hike', words: [
    { text: 'Although', pos: 'subordinate_clause' }, { text: 'it', pos: 'pronoun' }, { text: 'rained', pos: 'verb' }, { text: 'they', pos: 'pronoun' }, { text: 'continued', pos: 'verb' }, { text: 'the', pos: 'determiner' }, { text: 'hike', pos: 'noun' }
  ]},
  { sentence: 'Because she studied hard she passed the exam', words: [
    { text: 'Because', pos: 'subordinate_clause' }, { text: 'she', pos: 'pronoun' }, { text: 'studied', pos: 'verb' }, { text: 'hard', pos: 'adverb' }, { text: 'she', pos: 'pronoun' }, { text: 'passed', pos: 'verb' }, { text: 'the', pos: 'determiner' }, { text: 'exam', pos: 'noun' }
  ]},
  { sentence: 'The house that stood on the hill was abandoned', words: [
    { text: 'The', pos: 'determiner' }, { text: 'house', pos: 'noun' }, { text: 'that', pos: 'relative_pronoun' }, { text: 'stood', pos: 'verb' }, { text: 'on', pos: 'preposition' }, { text: 'the', pos: 'determiner' }, { text: 'hill', pos: 'noun' }, { text: 'was', pos: 'verb' }, { text: 'abandoned', pos: 'adjective' }
  ]},
  { sentence: 'Unless you hurry you will miss the train', words: [
    { text: 'Unless', pos: 'subordinate_clause' }, { text: 'you', pos: 'pronoun' }, { text: 'hurry', pos: 'verb' }, { text: 'you', pos: 'pronoun' }, { text: 'will', pos: 'verb' }, { text: 'miss', pos: 'verb' }, { text: 'the', pos: 'determiner' }, { text: 'train', pos: 'noun' }
  ]},
  { sentence: 'The student whose essay won received a prize', words: [
    { text: 'The', pos: 'determiner' }, { text: 'student', pos: 'noun' }, { text: 'whose', pos: 'relative_pronoun' }, { text: 'essay', pos: 'noun' }, { text: 'won', pos: 'verb' }, { text: 'received', pos: 'verb' }, { text: 'a', pos: 'determiner' }, { text: 'prize', pos: 'noun' }
  ]},
  { sentence: 'While the storm raged the sailors held firm', words: [
    { text: 'While', pos: 'subordinate_clause' }, { text: 'the', pos: 'determiner' }, { text: 'storm', pos: 'noun' }, { text: 'raged', pos: 'verb' }, { text: 'the', pos: 'determiner' }, { text: 'sailors', pos: 'noun' }, { text: 'held', pos: 'verb' }, { text: 'firm', pos: 'adverb' }
  ]},
  // Boss Level — Mixed complex
  { sentence: 'The brave knight who fought valiantly defeated the enormous dragon', words: [
    { text: 'The', pos: 'determiner' }, { text: 'brave', pos: 'adjective' }, { text: 'knight', pos: 'noun' }, { text: 'who', pos: 'relative_pronoun' }, { text: 'fought', pos: 'verb' }, { text: 'valiantly', pos: 'adverb' }, { text: 'defeated', pos: 'verb' }, { text: 'the', pos: 'determiner' }, { text: 'enormous', pos: 'adjective' }, { text: 'dragon', pos: 'noun' }
  ]},
  { sentence: 'Although she was tired she and her friend studied diligently', words: [
    { text: 'Although', pos: 'subordinate_clause' }, { text: 'she', pos: 'pronoun' }, { text: 'was', pos: 'verb' }, { text: 'tired', pos: 'adjective' }, { text: 'she', pos: 'pronoun' }, { text: 'and', pos: 'conjunction' }, { text: 'her', pos: 'determiner' }, { text: 'friend', pos: 'noun' }, { text: 'studied', pos: 'verb' }, { text: 'diligently', pos: 'adverb' }
  ]},
  { sentence: 'He carefully placed the old fragile vase on the wooden shelf', words: [
    { text: 'He', pos: 'pronoun' }, { text: 'carefully', pos: 'adverb' }, { text: 'placed', pos: 'verb' }, { text: 'the', pos: 'determiner' }, { text: 'old', pos: 'adjective' }, { text: 'fragile', pos: 'adjective' }, { text: 'vase', pos: 'noun' }, { text: 'on', pos: 'preposition' }, { text: 'the', pos: 'determiner' }, { text: 'wooden', pos: 'adjective' }, { text: 'shelf', pos: 'noun' }
  ]},
  { sentence: 'Because it snowed heavily the schools and offices closed early', words: [
    { text: 'Because', pos: 'subordinate_clause' }, { text: 'it', pos: 'pronoun' }, { text: 'snowed', pos: 'verb' }, { text: 'heavily', pos: 'adverb' }, { text: 'the', pos: 'determiner' }, { text: 'schools', pos: 'noun' }, { text: 'and', pos: 'conjunction' }, { text: 'offices', pos: 'noun' }, { text: 'closed', pos: 'verb' }, { text: 'early', pos: 'adverb' }
  ]},
  { sentence: 'The scientist whose discovery changed the world received every award', words: [
    { text: 'The', pos: 'determiner' }, { text: 'scientist', pos: 'noun' }, { text: 'whose', pos: 'relative_pronoun' }, { text: 'discovery', pos: 'noun' }, { text: 'changed', pos: 'verb' }, { text: 'the', pos: 'determiner' }, { text: 'world', pos: 'noun' }, { text: 'received', pos: 'verb' }, { text: 'every', pos: 'determiner' }, { text: 'award', pos: 'noun' }
  ]},
  { sentence: 'They swiftly climbed over the tall rugged mountain together', words: [
    { text: 'They', pos: 'pronoun' }, { text: 'swiftly', pos: 'adverb' }, { text: 'climbed', pos: 'verb' }, { text: 'over', pos: 'preposition' }, { text: 'the', pos: 'determiner' }, { text: 'tall', pos: 'adjective' }, { text: 'rugged', pos: 'adjective' }, { text: 'mountain', pos: 'noun' }, { text: 'together', pos: 'adverb' }
  ]},
  { sentence: 'While we waited the cheerful musician played beautiful songs nearby', words: [
    { text: 'While', pos: 'subordinate_clause' }, { text: 'we', pos: 'pronoun' }, { text: 'waited', pos: 'verb' }, { text: 'the', pos: 'determiner' }, { text: 'cheerful', pos: 'adjective' }, { text: 'musician', pos: 'noun' }, { text: 'played', pos: 'verb' }, { text: 'beautiful', pos: 'adjective' }, { text: 'songs', pos: 'noun' }, { text: 'nearby', pos: 'adverb' }
  ]},
  { sentence: 'The painting which hung in the gallery amazed both critics and visitors', words: [
    { text: 'The', pos: 'determiner' }, { text: 'painting', pos: 'noun' }, { text: 'which', pos: 'relative_pronoun' }, { text: 'hung', pos: 'verb' }, { text: 'in', pos: 'preposition' }, { text: 'the', pos: 'determiner' }, { text: 'gallery', pos: 'noun' }, { text: 'amazed', pos: 'verb' }, { text: 'both', pos: 'determiner' }, { text: 'critics', pos: 'noun' }, { text: 'and', pos: 'conjunction' }, { text: 'visitors', pos: 'noun' }
  ]},
  { sentence: 'Unless they act now this rare endangered species will vanish forever', words: [
    { text: 'Unless', pos: 'subordinate_clause' }, { text: 'they', pos: 'pronoun' }, { text: 'act', pos: 'verb' }, { text: 'now', pos: 'adverb' }, { text: 'this', pos: 'determiner' }, { text: 'rare', pos: 'adjective' }, { text: 'endangered', pos: 'adjective' }, { text: 'species', pos: 'noun' }, { text: 'will', pos: 'verb' }, { text: 'vanish', pos: 'verb' }, { text: 'forever', pos: 'adverb' }
  ]},
];

const POS_LABELS = {
  noun: 'Noun', verb: 'Verb', adjective: 'Adjective', adverb: 'Adverb',
  pronoun: 'Pronoun', preposition: 'Preposition', conjunction: 'Conjunction',
  determiner: 'Determiner', subordinate_clause: 'Subordinating Conjunction',
  relative_pronoun: 'Relative Pronoun',
};

const TARGET_PROMPTS = {
  noun: 'Slash the NOUNS!',
  verb: 'Slash the VERBS!',
  adjective: 'Slash the ADJECTIVES!',
  adverb: 'Slash the ADVERBS!',
  pronoun: 'Slash the PRONOUNS!',
  preposition: 'Slash the PREPOSITIONS!',
  conjunction: 'Slash the CONJUNCTIONS!',
  determiner: 'Slash the DETERMINERS!',
  subordinate_clause: 'Slash the SUBORDINATING CONJUNCTIONS!',
  relative_pronoun: 'Slash the RELATIVE PRONOUNS!',
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getSentencesForLevel(levelIdx) {
  const targets = LEVELS[levelIdx].targets;
  const matching = SENTENCES.filter(s => s.words.some(w => targets.includes(w.pos)));
  return shuffle(matching).slice(0, 6);
}

function loadSaved() {
  try {
    const d = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return d || { bestScore: 0, bestBelt: 'White Belt' };
  } catch { return { bestScore: 0, bestBelt: 'White Belt' }; }
}

function saveBest(score) {
  const belt = getBelt(score);
  const prev = loadSaved();
  if (score > prev.bestScore) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ bestScore: score, bestBelt: belt.name }));
  }
}

export default function GrammarNinja() {
  const [screen, setScreen] = useState('menu'); // menu | playing | gameover | levelcomplete
  const [level, setLevel] = useState(0);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [sentences, setSentences] = useState([]);
  const [sentenceIdx, setSentenceIdx] = useState(0);
  const [target, setTarget] = useState('');
  const [clicked, setClicked] = useState({}); // { wordIdx: 'correct'|'wrong' }
  const [remainingTargets, setRemainingTargets] = useState(0);
  const [slashEffects, setSlashEffects] = useState([]); // [{id, x, y, correct}]
  const effectId = useRef(0);
  const saved = loadSaved();

  const startGame = useCallback(() => {
    setLevel(0);
    setLives(3);
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
    startLevel(0, 3);
  }, []);

  const startLevel = (lvl, currentLives) => {
    const sents = getSentencesForLevel(lvl);
    setSentences(sents);
    setSentenceIdx(0);
    const targets = LEVELS[lvl].targets;
    const picked = targets[Math.floor(Math.random() * targets.length)];
    setTarget(picked);
    setClicked({});
    const count = sents[0]?.words.filter(w => w.pos === picked).length || 0;
    setRemainingTargets(count);
    setLevel(lvl);
    setLives(currentLives);
    setScreen('playing');
  };

  const advanceSentence = useCallback(() => {
    const nextIdx = sentenceIdx + 1;
    if (nextIdx >= sentences.length) {
      // Level complete
      if (level < LEVELS.length - 1) {
        setScreen('levelcomplete');
      } else {
        saveBest(score);
        setScreen('gameover');
      }
      return;
    }
    setSentenceIdx(nextIdx);
    const targets = LEVELS[level].targets;
    const picked = targets[Math.floor(Math.random() * targets.length)];
    setTarget(picked);
    setClicked({});
    const count = sentences[nextIdx]?.words.filter(w => w.pos === picked).length || 0;
    setRemainingTargets(count);
  }, [sentenceIdx, sentences, level, score]);

  const handleNextLevel = () => {
    startLevel(level + 1, lives);
  };

  const handleWordClick = useCallback((wordIdx, wordObj, e) => {
    if (clicked[wordIdx]) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top;

    if (wordObj.pos === target) {
      // Correct
      const comboBonus = combo >= 5 ? 3 : combo >= 3 ? 2 : 1;
      const levelBonus = level + 1;
      const points = 10 * comboBonus * levelBonus;
      setScore(s => s + points);
      setCombo(c => {
        const next = c + 1;
        setMaxCombo(m => Math.max(m, next));
        return next;
      });
      setClicked(prev => ({ ...prev, [wordIdx]: 'correct' }));
      const rem = remainingTargets - 1;
      setRemainingTargets(rem);

      const eid = effectId.current++;
      setSlashEffects(prev => [...prev, { id: eid, x, y, correct: true, points }]);
      setTimeout(() => setSlashEffects(prev => prev.filter(e => e.id !== eid)), 800);

      if (rem <= 0) {
        setTimeout(() => advanceSentence(), 600);
      }
    } else {
      // Wrong
      setCombo(0);
      setClicked(prev => ({ ...prev, [wordIdx]: 'wrong' }));
      const newLives = lives - 1;
      setLives(newLives);

      const eid = effectId.current++;
      setSlashEffects(prev => [...prev, { id: eid, x, y, correct: false }]);
      setTimeout(() => setSlashEffects(prev => prev.filter(e => e.id !== eid)), 800);

      if (newLives <= 0) {
        saveBest(score);
        setTimeout(() => setScreen('gameover'), 600);
      } else {
        // un-mark wrong after a flash
        setTimeout(() => setClicked(prev => {
          const c = { ...prev };
          delete c[wordIdx];
          return c;
        }), 400);
      }
    }
  }, [clicked, target, combo, level, remainingTargets, lives, score, advanceSentence]);

  const currentSentence = sentences[sentenceIdx];
  const belt = getBelt(score);

  // Styles
  const s = {
    page: {
      minHeight: '100vh', background: '#0a0e1a', color: '#f1f5f9',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    container: {
      maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem',
    },
    title: {
      fontSize: '2.5rem', fontWeight: 800, textAlign: 'center',
      background: 'linear-gradient(135deg, #10b981, #059669)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      marginBottom: '0.25rem',
    },
    subtitle: {
      textAlign: 'center', color: '#64748b', fontSize: '1rem', marginBottom: '2rem',
    },
    card: {
      background: 'rgba(30, 41, 59, 0.7)', borderRadius: '16px',
      border: '1px solid rgba(16, 185, 129, 0.15)', padding: '2rem',
      backdropFilter: 'blur(8px)',
    },
    btnPrimary: {
      background: 'linear-gradient(135deg, #10b981, #059669)', color: '#fff',
      border: 'none', padding: '0.75rem 2rem', borderRadius: '10px',
      fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer',
      transition: 'transform 0.15s, box-shadow 0.15s',
      boxShadow: '0 4px 20px rgba(16,185,129,0.3)',
    },
    heartFull: { color: '#ef4444', fontSize: '1.5rem' },
    heartEmpty: { color: '#334155', fontSize: '1.5rem' },
    word: (state) => ({
      display: 'inline-block', padding: '0.5rem 1rem', margin: '0.35rem',
      borderRadius: '10px', fontSize: '1.15rem', fontWeight: 600,
      cursor: state ? 'default' : 'pointer',
      transition: 'all 0.2s',
      border: '2px solid',
      ...(state === 'correct' ? {
        background: 'rgba(16, 185, 129, 0.2)', borderColor: '#10b981',
        color: '#10b981', transform: 'scale(0.95)',
        textDecoration: 'line-through',
      } : state === 'wrong' ? {
        background: 'rgba(239, 68, 68, 0.2)', borderColor: '#ef4444',
        color: '#ef4444', animation: 'shake 0.3s',
      } : {
        background: 'rgba(30, 41, 59, 0.9)', borderColor: 'rgba(100, 116, 139, 0.3)',
        color: '#e2e8f0',
      }),
    }),
    comboBar: {
      display: 'flex', alignItems: 'center', gap: '0.5rem',
      padding: '0.5rem 1rem', borderRadius: '8px',
      background: combo >= 5 ? 'rgba(251, 191, 36, 0.15)' : combo >= 3 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(30, 41, 59, 0.5)',
      border: `1px solid ${combo >= 5 ? 'rgba(251, 191, 36, 0.3)' : combo >= 3 ? 'rgba(16, 185, 129, 0.2)' : 'rgba(100, 116, 139, 0.2)'}`,
      fontSize: '0.9rem', fontWeight: 600,
      color: combo >= 5 ? '#fbbf24' : combo >= 3 ? '#10b981' : '#94a3b8',
    },
    beltBadge: (beltObj) => ({
      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
      padding: '0.35rem 0.9rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 700,
      background: beltObj.name === 'Black Belt' ? '#1e293b' : `${beltObj.color}22`,
      color: beltObj.name === 'Black Belt' ? '#e2e8f0' : beltObj.color,
      border: `2px solid ${beltObj.color}`,
    }),
  };

  const keyframes = `
    @keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-6px)} 75%{transform:translateX(6px)} }
    @keyframes slashIn { 0%{opacity:0;transform:translateY(10px) scale(0.5)} 50%{opacity:1;transform:translateY(-20px) scale(1.2)} 100%{opacity:0;transform:translateY(-40px) scale(0.8)} }
    @keyframes floatUp { 0%{opacity:1;transform:translateY(0)} 100%{opacity:0;transform:translateY(-50px)} }
    @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.05)} }
  `;

  // MENU SCREEN
  if (screen === 'menu') {
    return (
      <div style={s.page}>
        <style>{keyframes}</style>
        <Navbar />
        <GameWrapper gameId="grammar-ninja">
        <main id="main-content" style={s.container}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>&#x1F977;</div>
            <h1 style={s.title}>Grammar Ninja</h1>
            <p style={s.subtitle}>Slash the correct parts of speech. Prove your grammar mastery!</p>
          </div>

          <div style={{ ...s.card, textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Your Best</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#10b981' }}>{saved.bestScore}</div>
                  <div style={{ color: '#64748b', fontSize: '0.8rem' }}>Points</div>
                </div>
                <div style={s.beltBadge(getBelt(saved.bestScore))}>
                  {saved.bestBelt}
                </div>
              </div>
            </div>

            <button style={s.btnPrimary} onClick={startGame}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
              Start Training
            </button>
          </div>

          <div style={s.card}>
            <h3 style={{ fontWeight: 700, marginBottom: '1rem', color: '#10b981' }}>How to Play</h3>
            <div style={{ display: 'grid', gap: '0.75rem', color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
              <p>1. Each round shows a sentence and a target part of speech.</p>
              <p>2. Click the words that match the target to slash them!</p>
              <p>3. Correct slashes earn points. Wrong clicks lose a life.</p>
              <p>4. You have 3 lives. Build combos for bonus points!</p>
              <p>5. Progress through 6 levels from Nouns to mixed Boss Level.</p>
              <p>6. Earn belts: White &#8594; Yellow &#8594; Orange &#8594; Green &#8594; Blue &#8594; Black</p>
            </div>

            <div style={{ marginTop: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {BELTS.map(b => (
                <span key={b.name} style={s.beltBadge(b)}>{b.name} ({b.min}+)</span>
              ))}
            </div>
          </div>
        </main>
        </GameWrapper>
      </div>
    );
  }

  // GAME OVER SCREEN
  if (screen === 'gameover') {
    const finalBelt = getBelt(score);
    return (
      <div style={s.page}>
        <style>{keyframes}</style>
        <Navbar />
        <GameWrapper gameId="grammar-ninja">
        <main id="main-content" style={s.container}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>{lives > 0 ? '\u{1F389}' : '\u{1F977}'}</div>
            <h1 style={s.title}>{lives > 0 ? 'Victory!' : 'Game Over'}</h1>
            <p style={s.subtitle}>{lives > 0 ? 'You defeated all levels!' : 'Your ninja journey has ended... for now.'}</p>
          </div>

          <div style={{ ...s.card, textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div>
                <div style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Score</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#10b981' }}>{score}</div>
              </div>
              <div>
                <div style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Level</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#e2e8f0' }}>{level + 1}</div>
              </div>
              <div>
                <div style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Max Combo</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fbbf24' }}>{maxCombo}x</div>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Belt Earned</div>
              <span style={{ ...s.beltBadge(finalBelt), fontSize: '1.1rem', padding: '0.5rem 1.5rem' }}>
                {finalBelt.name}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button style={s.btnPrimary} onClick={startGame}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
                Train Again
              </button>
              <button style={{ ...s.btnPrimary, background: 'rgba(30, 41, 59, 0.9)', boxShadow: 'none', border: '1px solid rgba(100,116,139,0.3)' }}
                onClick={() => setScreen('menu')}>
                Main Menu
              </button>
            </div>
          </div>
        </main>
        </GameWrapper>
      </div>
    );
  }

  // LEVEL COMPLETE SCREEN
  if (screen === 'levelcomplete') {
    return (
      <div style={s.page}>
        <style>{keyframes}</style>
        <Navbar />
        <GameWrapper gameId="grammar-ninja">
        <main id="main-content" style={s.container}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>{'\u2694\uFE0F'}</div>
            <h1 style={s.title}>{LEVELS[level].name} Complete!</h1>
            <p style={s.subtitle}>{LEVELS[level].subtitle} mastered</p>
          </div>

          <div style={{ ...s.card, textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div>
                <div style={{ color: '#64748b', fontSize: '0.8rem' }}>Score</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#10b981' }}>{score}</div>
              </div>
              <div>
                <div style={{ color: '#64748b', fontSize: '0.8rem' }}>Lives</div>
                <div style={{ fontSize: '2rem' }}>{'❤️'.repeat(lives)}</div>
              </div>
              <div>
                <div style={{ color: '#64748b', fontSize: '0.8rem' }}>Belt</div>
                <span style={s.beltBadge(belt)}>{belt.name}</span>
              </div>
            </div>

            <div style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
              Next: <strong style={{ color: '#e2e8f0' }}>{LEVELS[level + 1].name}</strong> — {LEVELS[level + 1].subtitle}
            </div>

            <button style={s.btnPrimary} onClick={handleNextLevel}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
              Continue
            </button>
          </div>
        </main>
        </GameWrapper>
      </div>
    );
  }

  // PLAYING SCREEN
  return (
    <div style={s.page}>
      <style>{keyframes}</style>
      <Navbar />
      <GameWrapper gameId="grammar-ninja">
      <main id="main-content" style={s.container}>
        {/* HUD */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {LEVELS[level].name} — {LEVELS[level].subtitle}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '0.25rem' }}>
              Sentence {sentenceIdx + 1} of {sentences.length}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={s.beltBadge(belt)}>{belt.name}</span>
            <div style={s.comboBar}>
              {combo > 0 ? `${combo}x Combo` : 'No Combo'}
              {combo >= 5 && ' \u{1F525}'}
              {combo >= 3 && combo < 5 && ' \u26A1'}
            </div>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#10b981' }}>
              {score} pts
            </div>
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              {[1, 2, 3].map(i => (
                <span key={i} style={i <= lives ? s.heartFull : s.heartEmpty}>
                  {i <= lives ? '\u2764\uFE0F' : '\u{1F5A4}'}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Target prompt */}
        <div style={{
          ...s.card, textAlign: 'center', marginBottom: '1.5rem',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(5, 150, 105, 0.04))',
          border: '1px solid rgba(16, 185, 129, 0.25)',
          animation: 'pulse 2s infinite',
        }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Target
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10b981' }}>
            {TARGET_PROMPTS[target] || `Slash the ${POS_LABELS[target] || target}!`}
          </div>
          <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>
            {remainingTargets} remaining
          </div>
        </div>

        {/* Sentence */}
        <div style={{ ...s.card, textAlign: 'center', position: 'relative' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0', padding: '1rem 0' }}>
            {currentSentence?.words.map((w, i) => (
              <button
                key={i}
                onClick={(e) => handleWordClick(i, w, e)}
                disabled={!!clicked[i]}
                style={s.word(clicked[i])}
                onMouseOver={e => { if (!clicked[i]) { e.currentTarget.style.borderColor = '#10b981'; e.currentTarget.style.transform = 'scale(1.08)'; }}}
                onMouseOut={e => { if (!clicked[i]) { e.currentTarget.style.borderColor = 'rgba(100, 116, 139, 0.3)'; e.currentTarget.style.transform = 'scale(1)'; }}}
              >
                {w.text}
              </button>
            ))}
          </div>
        </div>

        {/* Floating effects */}
        {slashEffects.map(ef => (
          <div key={ef.id} style={{
            position: 'fixed', left: ef.x, top: ef.y, zIndex: 999,
            pointerEvents: 'none', animation: 'floatUp 0.8s forwards',
            fontWeight: 800, fontSize: ef.correct ? '1.2rem' : '1rem',
            color: ef.correct ? '#10b981' : '#ef4444',
            textShadow: ef.correct ? '0 0 10px rgba(16,185,129,0.5)' : '0 0 10px rgba(239,68,68,0.5)',
          }}>
            {ef.correct ? `+${ef.points}` : 'MISS!'}
          </div>
        ))}

        {/* Legend */}
        <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
          {LEVELS[level].targets.map(t => (
            <span key={t} style={{
              fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: '6px',
              background: t === target ? 'rgba(16, 185, 129, 0.15)' : 'rgba(30, 41, 59, 0.5)',
              color: t === target ? '#10b981' : '#64748b',
              border: `1px solid ${t === target ? 'rgba(16, 185, 129, 0.3)' : 'rgba(100,116,139,0.2)'}`,
              fontWeight: t === target ? 700 : 500,
            }}>
              {POS_LABELS[t]}
            </span>
          ))}
        </div>
      </main>
      </GameWrapper>
    </div>
  );
}
