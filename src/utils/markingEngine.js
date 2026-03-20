// ============================================================================
// GCSE/IGCSE English Marking Engine
// A comprehensive rule-based marking engine simulating 10 experienced examiners
// Board-aware: AQA, Edexcel, OCR, WJEC, Edexcel IGCSE
// Uses BEST FIT approach across multiple Assessment Objectives
// Supports Language AND Literature papers for all boards
// ============================================================================

// ============================================================================
// SECTION 1: TEXT QUALITY ANALYSERS
// ============================================================================

/**
 * Analyse quotation usage in a student's answer against a provided extract.
 * Checks quantity, embedding quality, and whether quotes come from the extract.
 * @returns {number} Score 0-5
 */
function analyzeQuotationUsage(answer, extract) {
  if (!answer) return 0;

  // Find all quoted text (double or single quotes)
  const doubleQuotes = answer.match(/"([^"]+)"/g) || [];
  const singleQuotes = answer.match(/'([^']+)'/g) || [];

  // Filter single quotes to avoid matching apostrophes in contractions
  const filteredSingleQuotes = singleQuotes.filter(q => q.length > 5);
  const allQuotes = [...doubleQuotes, ...filteredSingleQuotes];
  const quoteCount = allQuotes.length;

  if (quoteCount === 0) return 0;

  // Check for embedded quotations vs bolt-on
  const boltOnPatterns = [
    /the (?:writer|author|poet|speaker|narrator) (?:says|writes|states|mentions)\s*['"]/gi,
    /(?:this|the) quote\s*['"]/gi,
    /a quote (?:from|that)\s/gi,
  ];

  let boltOnCount = 0;
  for (const pattern of boltOnPatterns) {
    const matches = answer.match(pattern);
    if (matches) boltOnCount += matches.length;
  }

  const embeddedRatio = quoteCount > 0 ? Math.max(0, quoteCount - boltOnCount) / quoteCount : 0;

  // Check if quotations come from the extract
  let extractMatchCount = 0;
  if (extract) {
    const extractLower = extract.toLowerCase();
    for (const quote of allQuotes) {
      const cleaned = quote.replace(/^['"]|['"]$/g, '').toLowerCase().trim();
      if (cleaned.length > 2 && extractLower.includes(cleaned)) {
        extractMatchCount++;
      }
    }
  }

  const extractMatchRatio = extract && quoteCount > 0 ? extractMatchCount / quoteCount : 0.5;

  // Calculate score
  let score = 0;

  // Quantity (0-2 points)
  if (quoteCount >= 5) score += 2;
  else if (quoteCount >= 3) score += 1.5;
  else if (quoteCount >= 1) score += 1;

  // Embedding quality (0-1.5 points)
  score += embeddedRatio * 1.5;

  // Extract relevance (0-1.5 points)
  score += extractMatchRatio * 1.5;

  return Math.min(5, Math.round(score * 10) / 10);
}

/**
 * Analyse use of subject-specific terminology (literary/linguistic terms).
 * @returns {number} Score 0-5
 */
function analyzeSubjectTerminology(answer) {
  if (!answer) return 0;

  const lowerAnswer = answer.toLowerCase();

  const terms = [
    'simile', 'metaphor', 'personification', 'alliteration', 'assonance',
    'sibilance', 'onomatopoeia', 'pathetic fallacy', 'semantic field',
    'lexical field', 'juxtaposition', 'oxymoron', 'hyperbole', 'tricolon',
    'anaphora', 'enjambment', 'caesura', 'volta', 'imagery', 'motif',
    'symbolism', 'allegory', 'foreshadowing', 'dramatic irony', 'soliloquy',
    'stichomythia', 'plosive', 'fricative', 'declarative', 'interrogative',
    'imperative', 'exclamatory', 'minor sentence', 'complex sentence',
    'compound sentence', 'subordinate clause', 'noun phrase', 'verb phrase',
    'pre-modification', 'post-modification', 'determiner', 'deictic',
    'abstract noun', 'concrete noun', 'dynamic verb', 'stative verb',
    'modal verb', 'adverbial', 'connective', 'cohesion', 'register',
    'tone', 'voice', 'perspective', 'narrative voice', 'first person',
    'third person', 'omniscient narrator', 'unreliable narrator',
    'stream of consciousness', 'free indirect discourse', 'colloquial',
    'formal register', 'informal register', 'dialect', 'idiolect', 'sociolect',
  ];

  const foundTerms = [];
  for (const term of terms) {
    if (lowerAnswer.includes(term)) {
      foundTerms.push(term);
    }
  }

  const count = foundTerms.length;

  if (count === 0) return 0;
  if (count === 1) return 1;
  if (count === 2) return 2;
  if (count <= 4) return 3;
  if (count <= 7) return 4;
  return 5;
}

/**
 * Analyse the quality of effect analysis (explaining how/why language works).
 * Checks for effect verbs and reader-awareness language.
 * @returns {number} Score 0-5
 */
function analyzeEffectAnalysis(answer) {
  if (!answer) return 0;

  const lowerAnswer = answer.toLowerCase();

  const effectVerbs = [
    'suggests', 'implies', 'connotes', 'creates', 'evokes', 'conveys',
    'establishes', 'reinforces', 'emphasises', 'highlights', 'reflects',
    'mirrors', 'underscores', 'encapsulates', 'foregrounds', 'dramatises',
    'intensifies', 'symbolises', 'represents', 'illustrates', 'demonstrates',
    'reveals', 'exposes', 'portrays', 'depicts',
  ];

  const readerAwareness = [
    'the reader', 'we feel', 'the audience', 'positions the reader',
    'invites us to', 'makes the reader', 'forces the reader',
    'encourages the reader', 'causes the reader', 'allows the reader',
    'compels us', 'we are made to feel', 'we as readers',
    'a sense of', 'creates a feeling of', 'evokes a sense of',
  ];

  let effectCount = 0;
  for (const verb of effectVerbs) {
    const regex = new RegExp(`\\b${verb}\\b`, 'gi');
    const matches = lowerAnswer.match(regex);
    if (matches) effectCount += matches.length;
  }

  let readerCount = 0;
  for (const phrase of readerAwareness) {
    if (lowerAnswer.includes(phrase)) readerCount++;
  }

  let score = 0;

  // Effect verbs (0-3 points)
  if (effectCount >= 6) score += 3;
  else if (effectCount >= 4) score += 2.5;
  else if (effectCount >= 2) score += 2;
  else if (effectCount >= 1) score += 1;

  // Reader awareness (0-2 points)
  if (readerCount >= 4) score += 2;
  else if (readerCount >= 2) score += 1.5;
  else if (readerCount >= 1) score += 1;

  return Math.min(5, Math.round(score * 10) / 10);
}

/**
 * Analyse awareness of structural features and techniques.
 * @returns {number} Score 0-5
 */
function analyzeStructuralAwareness(answer) {
  if (!answer) return 0;

  const lowerAnswer = answer.toLowerCase();

  const structuralTerms = [
    'beginning', 'opening', 'ending', 'conclusion', 'shift', 'turning point',
    'volta', 'pivot', 'focus', 'perspective shift', 'pace', 'tension',
    'climax', 'anti-climax', 'chronological', 'non-linear', 'flashback',
    'foreshadowing', 'circular structure', 'paragraph', 'stanza',
    'enjambment', 'caesura', 'line break',
  ];

  const structuralPhrases = [
    'at the start', 'at the beginning', 'by the end', 'towards the end',
    'the writer shifts', 'the focus narrows', 'the focus widens',
    'the pace accelerates', 'the pace slows', 'the tone shifts',
    'the mood changes', 'builds tension', 'releases tension',
    'the narrative moves', 'the structure of',
  ];

  let termCount = 0;
  for (const term of structuralTerms) {
    if (lowerAnswer.includes(term)) termCount++;
  }

  let phraseCount = 0;
  for (const phrase of structuralPhrases) {
    if (lowerAnswer.includes(phrase)) phraseCount++;
  }

  let score = 0;

  // Structural terms (0-2.5)
  if (termCount >= 5) score += 2.5;
  else if (termCount >= 3) score += 2;
  else if (termCount >= 1) score += 1;

  // Structural phrases (0-2.5)
  if (phraseCount >= 4) score += 2.5;
  else if (phraseCount >= 2) score += 2;
  else if (phraseCount >= 1) score += 1;

  return Math.min(5, Math.round(score * 10) / 10);
}

/**
 * Analyse comparison skills for comparison-style questions.
 * @returns {number} Score 0-5
 */
function analyzeComparisonSkills(answer) {
  if (!answer) return 0;

  const lowerAnswer = answer.toLowerCase();

  const comparativeConnectives = [
    'whereas', 'in contrast', 'similarly', 'however', 'while',
    'conversely', 'on the other hand', 'both writers', 'unlike',
    'equally', 'although', 'just as', 'in comparison', 'compared to',
    'differs from', 'in the same way', 'alternatively', 'nevertheless',
    'on the contrary', 'likewise', 'correspondingly',
  ];

  let connectiveCount = 0;
  for (const conn of comparativeConnectives) {
    const regex = new RegExp(`\\b${conn.replace(/\s+/g, '\\s+')}\\b`, 'gi');
    const matches = lowerAnswer.match(regex);
    if (matches) connectiveCount += matches.length;
  }

  // Check for references to both texts/sources
  const textRefs = [
    /(?:source|text|extract|passage)\s*(?:a|b|one|two|1|2)/gi,
    /(?:first|second)\s*(?:source|text|extract|passage|writer|author)/gi,
    /(?:both|each)\s*(?:source|text|extract|passage|writer|author)/gi,
  ];

  let referencesMultiple = false;
  for (const pattern of textRefs) {
    if (pattern.test(answer)) {
      referencesMultiple = true;
      break;
    }
  }

  // Also check for "both" used in comparison context
  if (/\bboth\b/i.test(answer)) referencesMultiple = true;

  let score = 0;

  // Connectives (0-3)
  if (connectiveCount >= 6) score += 3;
  else if (connectiveCount >= 4) score += 2.5;
  else if (connectiveCount >= 2) score += 2;
  else if (connectiveCount >= 1) score += 1;

  // Multiple text references (0-2)
  if (referencesMultiple) score += 2;

  return Math.min(5, Math.round(score * 10) / 10);
}

/**
 * Analyse vocabulary sophistication.
 * @returns {number} Score 0-5
 */
function analyzeVocabularySophistication(answer) {
  if (!answer) return 0;

  const words = answer.match(/\b[a-zA-Z]+\b/g) || [];
  if (words.length === 0) return 0;

  // Average word length
  const totalLength = words.reduce((sum, w) => sum + w.length, 0);
  const avgLength = totalLength / words.length;

  // Sophisticated words (8+ letters, excluding very common long words)
  const commonLongWords = new Set([
    'something', 'everything', 'important', 'different', 'because',
    'understand', 'beginning', 'sometimes', 'therefore', 'paragraph',
    'character', 'describes', 'described', 'interesting', 'obviously',
    'basically', 'literally',
  ]);

  const sophisticatedWords = words.filter(
    w => w.length >= 8 && !commonLongWords.has(w.toLowerCase())
  );

  const sophisticatedRatio = sophisticatedWords.length / words.length;

  // Vocabulary variety (unique / total ratio)
  const uniqueWords = new Set(words.map(w => w.toLowerCase()));
  const varietyRatio = uniqueWords.size / words.length;

  let score = 0;

  // Average word length (0-1.5)
  if (avgLength >= 5.5) score += 1.5;
  else if (avgLength >= 5) score += 1;
  else if (avgLength >= 4.5) score += 0.5;

  // Sophisticated word ratio (0-2)
  if (sophisticatedRatio >= 0.15) score += 2;
  else if (sophisticatedRatio >= 0.1) score += 1.5;
  else if (sophisticatedRatio >= 0.05) score += 1;
  else if (sophisticatedRatio > 0) score += 0.5;

  // Variety ratio (0-1.5)
  if (varietyRatio >= 0.7) score += 1.5;
  else if (varietyRatio >= 0.6) score += 1;
  else if (varietyRatio >= 0.5) score += 0.5;

  return Math.min(5, Math.round(score * 10) / 10);
}

/**
 * Analyse sentence variety (length variation, types, openings).
 * @returns {number} Score 0-5
 */
function analyzeSentenceVariety(answer) {
  if (!answer) return 0;

  // Split into sentences
  const sentences = answer.split(/[.!?]+/).filter(s => s.trim().length > 0);
  if (sentences.length === 0) return 0;

  // Sentence length variation
  const lengths = sentences.map(s => s.trim().split(/\s+/).length);
  const avgLen = lengths.reduce((a, b) => a + b, 0) / lengths.length;
  const variance = lengths.reduce((sum, l) => sum + Math.pow(l - avgLen, 2), 0) / lengths.length;
  const stdDev = Math.sqrt(variance);

  // Check for short dramatic sentences (under 6 words)
  const shortSentences = lengths.filter(l => l <= 5).length;

  // Check for long complex sentences (over 20 words)
  const longSentences = lengths.filter(l => l >= 20).length;

  // Check for varied openings
  const openings = sentences.map(s => {
    const firstWord = s.trim().split(/\s+/)[0] || '';
    return firstWord.toLowerCase();
  });

  const theOpenings = openings.filter(o => o === 'the').length;
  const uniqueOpenings = new Set(openings).size;
  const openingVariety = sentences.length > 0 ? uniqueOpenings / sentences.length : 0;

  let score = 0;

  // Length variation (0-2)
  if (stdDev >= 8) score += 2;
  else if (stdDev >= 5) score += 1.5;
  else if (stdDev >= 3) score += 1;
  else score += 0.5;

  // Mix of short and long (0-1.5)
  if (shortSentences >= 1 && longSentences >= 1) score += 1.5;
  else if (shortSentences >= 1 || longSentences >= 1) score += 0.75;

  // Varied openings (0-1.5)
  const theRatio = sentences.length > 0 ? theOpenings / sentences.length : 0;
  if (openingVariety >= 0.8 && theRatio < 0.2) score += 1.5;
  else if (openingVariety >= 0.6 && theRatio < 0.3) score += 1;
  else if (openingVariety >= 0.4) score += 0.5;

  return Math.min(5, Math.round(score * 10) / 10);
}

/**
 * Analyse range of punctuation used.
 * @returns {number} Score 0-5
 */
function analyzePunctuationRange(answer) {
  if (!answer) return 0;

  const punctuationTypes = [
    { name: 'semicolons', pattern: /;/g },
    { name: 'colons', pattern: /:\s*(?![/\\])/g },
    { name: 'dashes', pattern: /[—–-]{1,2}(?=\s)/g },
    { name: 'ellipses', pattern: /\.{3}|…/g },
    { name: 'parentheses', pattern: /[()]/g },
    { name: 'exclamation marks', pattern: /!/g },
    { name: 'question marks', pattern: /\?/g },
    { name: 'commas', pattern: /,/g },
    { name: 'apostrophes', pattern: /'/g },
  ];

  let typesFound = 0;
  for (const punc of punctuationTypes) {
    if (punc.pattern.test(answer)) typesFound++;
  }

  if (typesFound <= 1) return 0;
  if (typesFound === 2) return 1;
  if (typesFound === 3) return 2;
  if (typesFound === 4) return 3;
  if (typesFound === 5) return 4;
  return 5;
}

/**
 * Analyse spelling accuracy against common misspellings and error patterns.
 * @returns {number} Estimated accuracy percentage 0-100
 */
function analyzeSpellingAccuracy(answer) {
  if (!answer) return 100;

  const words = answer.match(/\b[a-zA-Z]+\b/g) || [];
  if (words.length === 0) return 100;

  // Common misspellings (misspelled -> correct)
  const commonMisspellings = new Set([
    'accomodate', 'acheive', 'accross', 'agressive', 'apparantly',
    'arguement', 'basicly', 'beautifull', 'becuase', 'begining',
    'beleive', 'buisness', 'calender', 'carribean', 'cemetary',
    'changable', 'collegue', 'comming', 'commitee', 'completly',
    'concious', 'curiousity', 'definately', 'dilemna', 'dissapear',
    'dissapoint', 'embarass', 'enviroment', 'existance', 'familar',
    'finaly', 'flourescent', 'foriegn', 'freind', 'futher',
    'goverment', 'gaurd', 'happend', 'harrass', 'humourous',
    'immediatly', 'incidently', 'independant', 'knowlege', 'liase',
    'libary', 'mischievious', 'neccessary', 'noticable', 'occassion',
    'occured', 'occuring', 'oppurtunity', 'paralel', 'parliment',
    'persistant', 'pharoah', 'peice', 'posession', 'prefered',
    'propoganda', 'publically', 'realy', 'recieve', 'refered',
    'relevent', 'religous', 'remeber', 'repitition', 'resistence',
    'sence', 'seperate', 'seige', 'succesful', 'suprise',
    'tendancy', 'therefor', 'threshhold', 'tommorrow', 'tounge',
    'truely', 'unforseen', 'untill', 'wierd', 'writting',
    'wich', 'teh', 'thier', 'alot', 'shouldnt', 'couldnt',
    'doesnt', 'isnt', 'wasnt', 'didnt', 'wont', 'cant', 'dont',
  ]);

  // Common confusion pairs (check context later if needed, for now just flag)
  const confusionErrors = [
    { wrong: /\btheir\s+(?:is|are|was|were)\b/gi, desc: 'their/there' },
    { wrong: /\bthere\s+(?:dog|cat|house|car|book|work|school|friend|mum|dad|brother|sister|name)\b/gi, desc: 'there/their' },
    { wrong: /\byour\s+(?:right|wrong|welcome|going|coming|doing)\b/gi, desc: 'your/you\'re' },
    { wrong: /\bits\s+(?:a\s+)?(?:very|really|quite|so|too|not|also)\b/gi, desc: 'its/it\'s' },
    { wrong: /\beffect(?:ed|ing)?\s+(?:the|a|his|her|their|my|our)\b/gi, desc: 'effect/affect' },
    { wrong: /\bof\s+been\b/gi, desc: 'of/have' },
    { wrong: /\bcould\s+of\b/gi, desc: 'could of/could have' },
    { wrong: /\bwould\s+of\b/gi, desc: 'would of/would have' },
    { wrong: /\bshould\s+of\b/gi, desc: 'should of/should have' },
  ];

  let errorCount = 0;

  // Check misspellings
  for (const word of words) {
    if (commonMisspellings.has(word.toLowerCase())) {
      errorCount++;
    }
  }

  // Check confusion patterns
  for (const { wrong } of confusionErrors) {
    const matches = answer.match(wrong);
    if (matches) errorCount += matches.length;
  }

  const errorRate = errorCount / words.length;
  const accuracy = Math.max(0, Math.min(100, Math.round((1 - errorRate) * 100)));

  return accuracy;
}

/**
 * Analyse paragraph structure (count, length variation, organisation).
 * @returns {number} Score 0-5
 */
function analyzeParagraphStructure(answer) {
  if (!answer) return 0;

  // Split by double newline or significant whitespace
  const paragraphs = answer
    .split(/\n\s*\n|\r\n\s*\r\n/)
    .map(p => p.trim())
    .filter(p => p.length > 0);

  const count = paragraphs.length;

  if (count <= 1) return 1;

  // Paragraph length variation
  const lengths = paragraphs.map(p => p.split(/\s+/).length);
  const avgLen = lengths.reduce((a, b) => a + b, 0) / lengths.length;
  const variance = lengths.reduce((sum, l) => sum + Math.pow(l - avgLen, 2), 0) / lengths.length;
  const hasVariation = Math.sqrt(variance) > 10;

  let score = 0;

  // Number of paragraphs (0-2.5)
  if (count >= 5) score += 2.5;
  else if (count >= 4) score += 2;
  else if (count >= 3) score += 1.5;
  else if (count >= 2) score += 1;

  // Length variation (0-1.5)
  if (hasVariation) score += 1.5;
  else if (count >= 3) score += 0.75;

  // Reasonable paragraph sizes, not one-liners (0-1)
  const reasonableParagraphs = lengths.filter(l => l >= 3).length;
  if (reasonableParagraphs === count) score += 1;
  else if (reasonableParagraphs >= count * 0.7) score += 0.5;

  return Math.min(5, Math.round(score * 10) / 10);
}

/**
 * Analyse creative writing features (imagery, sensory detail, dialogue, figurative language).
 * @returns {number} Score 0-5
 */
function analyzeCreativeWritingFeatures(answer) {
  if (!answer) return 0;

  const lowerAnswer = answer.toLowerCase();

  // Sensory details
  const sensoryWords = {
    sight: ['gleam', 'shimmer', 'shadow', 'glow', 'glint', 'flicker', 'radiant', 'pale', 'vivid', 'bright', 'dark', 'light', 'colour', 'color'],
    sound: ['whisper', 'roar', 'echo', 'silence', 'scream', 'murmur', 'crash', 'rustle', 'thunder', 'hum', 'buzz', 'creak'],
    smell: ['fragrant', 'stench', 'aroma', 'reek', 'scent', 'musty', 'pungent', 'fresh'],
    taste: ['bitter', 'sweet', 'sour', 'salty', 'savoury', 'tang', 'acrid', 'metallic'],
    touch: ['rough', 'smooth', 'cold', 'warm', 'soft', 'hard', 'damp', 'prickly', 'velvet', 'sharp'],
  };

  let sensoryCount = 0;
  let sensoryTypesUsed = 0;
  for (const [, words] of Object.entries(sensoryWords)) {
    let found = false;
    for (const word of words) {
      if (lowerAnswer.includes(word)) {
        sensoryCount++;
        found = true;
      }
    }
    if (found) sensoryTypesUsed++;
  }

  // Dialogue
  const hasDialogue = /[""][^""]+[""]/.test(answer) || /[''][^'']+['']/.test(answer);

  // Figurative language patterns
  const figurativePatterns = [
    /\blike\s+(?:a|an|the)\b/gi,  // simile
    /\bas\s+\w+\s+as\b/gi,       // simile
    /\bwas\s+(?:a|an|the)\s+\w+/gi, // possible metaphor
  ];

  let figurativeCount = 0;
  for (const pattern of figurativePatterns) {
    const matches = answer.match(pattern);
    if (matches) figurativeCount += matches.length;
  }

  // Varied sentence openings (checked via first words)
  const sentences = answer.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const openingWords = sentences.map(s => s.trim().split(/\s+/)[0]?.toLowerCase());
  const uniqueOpenings = new Set(openingWords).size;
  const openingVariety = sentences.length > 0 ? uniqueOpenings / sentences.length : 0;

  let score = 0;

  // Sensory details (0-1.5)
  if (sensoryTypesUsed >= 3) score += 1.5;
  else if (sensoryTypesUsed >= 2) score += 1;
  else if (sensoryCount >= 1) score += 0.5;

  // Dialogue (0-1)
  if (hasDialogue) score += 1;

  // Figurative language (0-1.5)
  if (figurativeCount >= 3) score += 1.5;
  else if (figurativeCount >= 2) score += 1;
  else if (figurativeCount >= 1) score += 0.5;

  // Varied openings (0-1)
  if (openingVariety >= 0.8) score += 1;
  else if (openingVariety >= 0.6) score += 0.5;

  return Math.min(5, Math.round(score * 10) / 10);
}

/**
 * Analyse contextual knowledge (historical, social, literary context references).
 * @returns {number} Score 0-5
 */
function analyzeContextualKnowledge(answer) {
  if (!answer) return 0;

  const lowerAnswer = answer.toLowerCase();

  const contextTerms = [
    'victorian', 'elizabethan', 'jacobean', 'edwardian', 'georgian',
    'medieval', 'renaissance', 'romantic', 'gothic', 'modernist',
    'post-modern', 'postmodern', 'patriarchal', 'matriarchal',
    'colonialism', 'imperialism', 'industrialisation', 'industrialization',
    'class', 'hierarchy', 'gender', 'religion', 'morality', 'society',
    'social', 'political', 'economic', 'cultural', 'historical',
    'convention', 'tradition', 'contemporary', 'era', 'period',
    'century', 'feminist', 'feminism', 'marxist', 'capitalism',
    'socialism', 'revolution', 'reform', 'oppression', 'inequality',
    'suffrage', 'slavery', 'empire', 'monarchy', 'aristocracy',
    'bourgeois', 'proletariat', 'church', 'protestantism', 'catholicism',
    'puritanical', 'enlightenment', 'superstition', 'science',
    'darwin', 'evolution', 'war', 'world war', 'trench', 'blitz',
    'rationing', 'evacuation', 'segregation', 'civil rights',
    'at the time', 'in this period', 'during this era',
    'audience of the time', 'contemporary audience', 'original audience',
  ];

  // Also check for specific dates
  const datePattern = /\b(?:1[0-9]{3}|20[0-2][0-9])s?\b/g;
  const dateMatches = answer.match(datePattern) || [];

  let termCount = 0;
  for (const term of contextTerms) {
    if (lowerAnswer.includes(term)) termCount++;
  }

  termCount += Math.min(dateMatches.length, 3); // Cap date bonus

  if (termCount === 0) return 0;
  if (termCount === 1) return 1;
  if (termCount <= 3) return 2;
  if (termCount <= 5) return 3;
  if (termCount <= 8) return 4;
  return 5;
}

// ============================================================================
// SECTION 1B: LITERATURE-SPECIFIC ANALYSERS
// ============================================================================

/**
 * Analyse character analysis depth (for Literature essays).
 * Looks at character naming, development language, psychological insight, relationships.
 * @returns {number} Score 0-5
 */
function analyzeCharacterAnalysis(answer) {
  if (!answer) return 0;

  const lowerAnswer = answer.toLowerCase();

  // Character analysis language
  const characterTerms = [
    'protagonist', 'antagonist', 'anti-hero', 'tragic hero', 'tragic flaw',
    'hamartia', 'hubris', 'foil', 'archetype', 'everyman', 'byronic hero',
    'villain', 'flawed character', 'stock character', 'round character',
    'flat character', 'dynamic character', 'static character',
  ];

  const developmentLanguage = [
    'character development', 'character arc', 'transformation',
    'at the beginning', 'by the end', 'throughout the play',
    'throughout the novel', 'initially', 'ultimately', 'gradually',
    'progression', 'regression', 'evolves', 'changes', 'transforms',
    'at first', 'later', 'eventually', 'over the course of',
  ];

  const psychologicalInsight = [
    'motivation', 'inner conflict', 'internal conflict', 'moral dilemma',
    'conscience', 'guilt', 'desire', 'ambition', 'fear', 'pride',
    'jealousy', 'loyalty', 'betrayal', 'isolation', 'alienation',
    'vulnerability', 'resilience', 'duplicity', 'hypocrisy',
    'the character feels', 'is driven by', 'is motivated by',
    'struggles with', 'grapples with', 'is torn between',
    'psychologically', 'emotionally', 'morally',
  ];

  const relationshipLanguage = [
    'relationship between', 'dynamic between', 'power dynamic',
    'hierarchy', 'dominance', 'submission', 'dependence', 'independence',
    'parallel', 'mirror', 'contrast between', 'juxtaposed with',
    'foil to', 'complements', 'opposes', 'challenges',
    'bond between', 'tension between', 'conflict between',
  ];

  let termScore = 0;
  for (const term of characterTerms) {
    if (lowerAnswer.includes(term)) termScore++;
  }

  let devScore = 0;
  for (const phrase of developmentLanguage) {
    if (lowerAnswer.includes(phrase)) devScore++;
  }

  let psychScore = 0;
  for (const phrase of psychologicalInsight) {
    if (lowerAnswer.includes(phrase)) psychScore++;
  }

  let relScore = 0;
  for (const phrase of relationshipLanguage) {
    if (lowerAnswer.includes(phrase)) relScore++;
  }

  let score = 0;

  // Character terminology (0-1.5)
  if (termScore >= 3) score += 1.5;
  else if (termScore >= 2) score += 1;
  else if (termScore >= 1) score += 0.5;

  // Development tracking (0-1.5)
  if (devScore >= 3) score += 1.5;
  else if (devScore >= 2) score += 1;
  else if (devScore >= 1) score += 0.5;

  // Psychological depth (0-1)
  if (psychScore >= 3) score += 1;
  else if (psychScore >= 1) score += 0.5;

  // Relationship awareness (0-1)
  if (relScore >= 2) score += 1;
  else if (relScore >= 1) score += 0.5;

  return Math.min(5, Math.round(score * 10) / 10);
}

/**
 * Analyse theme exploration depth (for Literature essays).
 * Checks for thematic vocabulary, abstract conceptual language, and linking to wider meaning.
 * @returns {number} Score 0-5
 */
function analyzeThemeExploration(answer) {
  if (!answer) return 0;

  const lowerAnswer = answer.toLowerCase();

  const thematicTerms = [
    'theme', 'motif', 'central idea', 'key idea', 'underlying message',
    'moral', 'lesson', 'allegory', 'parable', 'didactic',
  ];

  const commonThemes = [
    'power', 'corruption', 'ambition', 'love', 'loss', 'grief',
    'death', 'mortality', 'revenge', 'justice', 'injustice',
    'class', 'inequality', 'poverty', 'wealth', 'greed',
    'appearance versus reality', 'appearance vs reality', 'deception',
    'good and evil', 'good versus evil', 'conflict',
    'identity', 'belonging', 'isolation', 'alienation', 'loneliness',
    'nature', 'supernatural', 'fate', 'free will', 'destiny',
    'honour', 'honor', 'duty', 'loyalty', 'betrayal', 'trust',
    'family', 'marriage', 'parenthood', 'childhood', 'innocence',
    'guilt', 'conscience', 'forgiveness', 'redemption', 'sacrifice',
    'war', 'violence', 'peace', 'suffering', 'hope', 'despair',
    'gender', 'masculinity', 'femininity', 'patriarchy',
    'religion', 'faith', 'doubt', 'science', 'knowledge',
    'freedom', 'oppression', 'control', 'rebellion',
    'memory', 'time', 'change', 'progress', 'tradition',
  ];

  const abstractLanguage = [
    'represents', 'symbolises', 'symbolizes', 'embodies', 'encapsulates',
    'reflects', 'illustrates', 'serves as', 'functions as',
    'is a microcosm of', 'is emblematic of', 'is representative of',
    'wider significance', 'broader meaning', 'deeper meaning',
    'on a deeper level', 'metaphorically', 'allegorically',
    'thematically', 'conceptually',
  ];

  let thematicCount = 0;
  for (const term of thematicTerms) {
    if (lowerAnswer.includes(term)) thematicCount++;
  }

  let themeCount = 0;
  for (const theme of commonThemes) {
    if (lowerAnswer.includes(theme)) themeCount++;
  }

  let abstractCount = 0;
  for (const phrase of abstractLanguage) {
    if (lowerAnswer.includes(phrase)) abstractCount++;
  }

  let score = 0;

  // Thematic language (0-1)
  if (thematicCount >= 2) score += 1;
  else if (thematicCount >= 1) score += 0.5;

  // Theme identification (0-2)
  if (themeCount >= 4) score += 2;
  else if (themeCount >= 2) score += 1.5;
  else if (themeCount >= 1) score += 1;

  // Abstract / conceptual linking (0-2)
  if (abstractCount >= 3) score += 2;
  else if (abstractCount >= 2) score += 1.5;
  else if (abstractCount >= 1) score += 1;

  return Math.min(5, Math.round(score * 10) / 10);
}

/**
 * Analyse writer's methods for literature (AO2 Lit).
 * Checks for analysis of language, form, structure and their effects
 * beyond basic identification — focusing on purposeful method discussion.
 * @returns {number} Score 0-5
 */
function analyzeWritersMethods(answer) {
  if (!answer) return 0;

  const lowerAnswer = answer.toLowerCase();

  // Authorial intent / purpose language
  const purposeLanguage = [
    'the writer uses', 'the author uses', 'shakespeare uses',
    'dickens uses', 'shelley uses', 'stevenson uses', 'priestley uses',
    'golding uses', 'orwell uses', 'steinbeck uses',
    'the playwright uses', 'the poet uses', 'the novelist uses',
    'is used to', 'is employed to', 'serves to', 'functions to',
    'in order to', 'deliberately', 'purposefully', 'intentionally',
    'the choice of', 'the use of', 'by using', 'through the use of',
    'through his use of', 'through her use of',
  ];

  // Form-specific terms
  const formTerms = [
    'soliloquy', 'aside', 'monologue', 'dialogue', 'stage direction',
    'dramatic device', 'tragic form', 'comedy', 'tragedy', 'tragicomedy',
    'act', 'scene', 'prose', 'verse', 'blank verse', 'iambic pentameter',
    'rhyme scheme', 'sonnet', 'free verse', 'ballad', 'ode', 'elegy',
    'novella', 'first person narrative', 'third person narrative',
    'epistolary', 'frame narrative', 'gothic genre', 'bildungsroman',
    'morality play', 'well-made play', 'naturalism', 'realism',
    'expressionism', 'absurdism',
  ];

  // Methods analysis depth markers
  const depthMarkers = [
    'this is significant because', 'this is effective because',
    'the effect of this is', 'this creates', 'this establishes',
    'this reinforces', 'this subverts', 'this challenges',
    'the impact of', 'the significance of', 'the connotations of',
    'on a structural level', 'structurally', 'linguistically',
    'at a sentence level', 'at word level', 'the rhythm of',
    'the pace of', 'the tone of', 'the mood of',
  ];

  let purposeCount = 0;
  for (const phrase of purposeLanguage) {
    if (lowerAnswer.includes(phrase)) purposeCount++;
  }

  let formCount = 0;
  for (const term of formTerms) {
    if (lowerAnswer.includes(term)) formCount++;
  }

  let depthCount = 0;
  for (const marker of depthMarkers) {
    if (lowerAnswer.includes(marker)) depthCount++;
  }

  let score = 0;

  // Purpose / authorial intent (0-2)
  if (purposeCount >= 4) score += 2;
  else if (purposeCount >= 2) score += 1.5;
  else if (purposeCount >= 1) score += 1;

  // Form awareness (0-1.5)
  if (formCount >= 3) score += 1.5;
  else if (formCount >= 2) score += 1;
  else if (formCount >= 1) score += 0.5;

  // Depth of methods analysis (0-1.5)
  if (depthCount >= 3) score += 1.5;
  else if (depthCount >= 2) score += 1;
  else if (depthCount >= 1) score += 0.5;

  return Math.min(5, Math.round(score * 10) / 10);
}

/**
 * Analyse text-specific knowledge (for Literature essays).
 * Checks for references to specific characters, places, events, and plot points.
 * @returns {number} Score 0-5
 */
function analyzeTextSpecificKnowledge(answer) {
  if (!answer) return 0;

  const lowerAnswer = answer.toLowerCase();

  // Well-known GCSE text characters / places / events
  const textReferences = {
    macbeth: ['macbeth', 'lady macbeth', 'banquo', 'macduff', 'duncan', 'malcolm', 'the witches', 'three witches', 'weird sisters', 'fleance', 'hecate', 'lennox', 'ross', 'porter', 'birnam wood', 'dunsinane', 'inverness', 'scotland', 'dagger', 'blood', 'crown', 'throne'],
    romeo_juliet: ['romeo', 'juliet', 'mercutio', 'tybalt', 'nurse', 'friar lawrence', 'capulet', 'montague', 'benvolio', 'paris', 'prince', 'rosaline', 'verona', 'balcony', 'tomb', 'poison', 'banishment'],
    christmas_carol: ['scrooge', 'bob cratchit', 'tiny tim', 'marley', 'ghost of christmas past', 'ghost of christmas present', 'ghost of christmas yet to come', 'fred', 'fezziwig', 'belle', 'fan', 'ignorance and want', 'counting house'],
    inspector_calls: ['birling', 'mr birling', 'mrs birling', 'sheila', 'eric', 'gerald', 'inspector goole', 'eva smith', 'daisy renton', 'brumley', 'titanic'],
    jekyll_hyde: ['jekyll', 'hyde', 'utterson', 'enfield', 'lanyon', 'poole', 'carew', 'soho', 'laboratory', 'cabinet', 'door', 'will', 'transformation', 'potion'],
    great_expectations: ['pip', 'estella', 'miss havisham', 'magwitch', 'joe gargery', 'herbert', 'jaggers', 'wemmick', 'compeyson', 'satis house', 'marshes', 'london'],
    jane_eyre: ['jane', 'rochester', 'st john', 'bertha', 'adele', 'reed', 'lowood', 'thornfield', 'moor house', 'red room'],
    frankenstein: ['victor', 'frankenstein', 'creature', 'monster', 'walton', 'elizabeth', 'clerval', 'justine', 'william', 'ingolstadt', 'arctic', 'creation'],
    lord_flies: ['ralph', 'jack', 'piggy', 'simon', 'roger', 'samneric', 'conch', 'beast', 'lord of the flies', 'island', 'fire', 'hunt'],
    animal_farm: ['napoleon', 'snowball', 'boxer', 'squealer', 'old major', 'mollie', 'benjamin', 'windmill', 'commandments', 'manor farm', 'animal farm'],
    power_conflict: ['ozymandias', 'london', 'prelude', 'my last duchess', 'charge of the light brigade', 'exposure', 'storm on the island', 'bayonet charge', 'remains', 'poppies', 'war photographer', 'tissue', 'emigree', 'kamikaze', 'checking out me history'],
    love_relationships: ['when we two parted', 'love\'s philosophy', 'porphyria\'s lover', 'sonnet 29', 'neutral tones', 'letters from yorkshire', 'the farmer\'s bride', 'walking away', 'follower', 'eden rock', 'before you were mine', 'winter swans', 'singh song', 'climbing my grandfather', 'mother any distance'],
  };

  let knowledgeCount = 0;
  let textsReferenced = 0;

  for (const [, refs] of Object.entries(textReferences)) {
    let textFound = false;
    for (const ref of refs) {
      if (lowerAnswer.includes(ref)) {
        knowledgeCount++;
        textFound = true;
      }
    }
    if (textFound) textsReferenced++;
  }

  // Also check for act/scene/chapter references
  const structuralRefs = lowerAnswer.match(/\b(?:act\s+[1-5]|scene\s+\d|chapter\s+\d|stanza\s+\d)/gi) || [];
  knowledgeCount += structuralRefs.length;

  // Check for line/page references
  const lineRefs = lowerAnswer.match(/\b(?:line\s+\d|page\s+\d|lines?\s+\d+-?\d*)/gi) || [];
  knowledgeCount += Math.min(lineRefs.length, 3);

  let score = 0;

  // Knowledge references (0-3)
  if (knowledgeCount >= 8) score += 3;
  else if (knowledgeCount >= 5) score += 2.5;
  else if (knowledgeCount >= 3) score += 2;
  else if (knowledgeCount >= 1) score += 1;

  // Depth of engagement — precise references (0-2)
  if (structuralRefs.length >= 2 || lineRefs.length >= 2) score += 2;
  else if (structuralRefs.length >= 1 || lineRefs.length >= 1) score += 1;

  return Math.min(5, Math.round(score * 10) / 10);
}


// ============================================================================
// SECTION 2: BOARD-SPECIFIC BAND DESCRIPTORS (AO-level)
// ============================================================================

const BOARD_BAND_DESCRIPTORS = {
  AQA: {
    AO1: {
      bands: [
        { band: 6, label: 'Grade 8-9', marks: [25, 30], desc: 'Critical, exploratory, conceptualised response. Judicious use of precise references to support interpretation.' },
        { band: 5, label: 'Grade 7', marks: [19, 24], desc: 'Thoughtful, developed response. Apt references integrated into interpretation.' },
        { band: 4, label: 'Grade 5-6', marks: [13, 18], desc: 'Clear, sustained response. Effective use of references to support explanation.' },
        { band: 3, label: 'Grade 4', marks: [7, 12], desc: 'Some understanding. References used to support a range of statements.' },
        { band: 2, label: 'Grade 2-3', marks: [4, 6], desc: 'Simple, limited comments. References occasionally used.' },
        { band: 1, label: 'Grade 1', marks: [1, 3], desc: 'Simple comment with little textual reference.' },
      ],
    },
    AO2: {
      bands: [
        { band: 6, label: 'Grade 8-9', marks: [25, 30], desc: 'Perceptive, detailed analysis of language, form and structure. Sophisticated use of subject terminology.' },
        { band: 5, label: 'Grade 7', marks: [19, 24], desc: 'Detailed, sustained analysis. Accurate and effective use of subject terminology.' },
        { band: 4, label: 'Grade 5-6', marks: [13, 18], desc: 'Clear understanding of language, form and structure. Appropriate use of subject terminology.' },
        { band: 3, label: 'Grade 4', marks: [7, 12], desc: 'Some understanding of language and structure. Some use of subject terminology.' },
        { band: 2, label: 'Grade 2-3', marks: [4, 6], desc: 'Simple identification of language and structure. Limited use of terminology.' },
        { band: 1, label: 'Grade 1', marks: [1, 3], desc: 'Simple awareness of language. Little or no terminology.' },
      ],
    },
    AO3: {
      bands: [
        { band: 6, label: 'Grade 8-9', marks: [25, 30], desc: 'Convincing, critical exploration of contextual factors. Ideas are convincingly linked to context.' },
        { band: 5, label: 'Grade 7', marks: [19, 24], desc: 'Thoughtful consideration of contextual factors shown by specific, detailed links.' },
        { band: 4, label: 'Grade 5-6', marks: [13, 18], desc: 'Clear understanding of context. Relevant contextual links.' },
        { band: 3, label: 'Grade 4', marks: [7, 12], desc: 'Some awareness of context. Some contextual links.' },
        { band: 2, label: 'Grade 2-3', marks: [4, 6], desc: 'Simple awareness of context.' },
        { band: 1, label: 'Grade 1', marks: [1, 3], desc: 'Very limited awareness of context.' },
      ],
    },
    AO4: {
      bands: [
        { band: 6, label: 'Grade 8-9', marks: [17, 20], desc: 'Perceptive, detailed evaluation with convincing critical analysis and textual references.' },
        { band: 5, label: 'Grade 7', marks: [13, 16], desc: 'Clear, detailed evaluation of effects on reader with well-chosen examples.' },
        { band: 4, label: 'Grade 5-6', marks: [9, 12], desc: 'Clear evaluation with appropriate examples and some development.' },
        { band: 3, label: 'Grade 4', marks: [5, 8], desc: 'Some evaluative comment with some reference to effect on reader.' },
        { band: 2, label: 'Grade 2-3', marks: [3, 4], desc: 'Simple, limited evaluative comment.' },
        { band: 1, label: 'Grade 1', marks: [1, 2], desc: 'Very limited awareness of writer\'s choices.' },
      ],
    },
    AO5: {
      bands: [
        { band: 6, label: 'Grade 8-9', marks: [21, 24], desc: 'Compelling, convincing communication. Extensive, ambitious vocabulary. Sustained crafting of linguistic devices. Varied, inventive structural features.' },
        { band: 5, label: 'Grade 7', marks: [17, 20], desc: 'Convincing communication. Increasingly sophisticated vocabulary. Conscious crafting. Varied structural features.' },
        { band: 4, label: 'Grade 5-6', marks: [13, 16], desc: 'Clear, connected communication. Increasingly varied vocabulary. Some linguistic devices. Clear structure.' },
        { band: 3, label: 'Grade 4', marks: [9, 12], desc: 'Connected communication. Varied vocabulary. Some attempt at linguistic devices.' },
        { band: 2, label: 'Grade 2-3', marks: [5, 8], desc: 'Simple communication. Simple vocabulary. Random structural features.' },
        { band: 1, label: 'Grade 1', marks: [1, 4], desc: 'Limited communication. Very limited vocabulary.' },
      ],
    },
    AO6: {
      bands: [
        { band: 6, label: 'Grade 8-9', marks: [14, 16], desc: 'Extensive, ambitious range of sentence forms. High level of accuracy in spelling, punctuation and grammar.' },
        { band: 5, label: 'Grade 7', marks: [11, 13], desc: 'Varied range of sentence forms. Generally accurate spelling, punctuation and grammar.' },
        { band: 4, label: 'Grade 5-6', marks: [8, 10], desc: 'Varied sentence forms. Usually accurate SPaG with some errors.' },
        { band: 3, label: 'Grade 4', marks: [5, 7], desc: 'Some variety in sentence forms. SPaG generally accurate with some errors.' },
        { band: 2, label: 'Grade 2-3', marks: [3, 4], desc: 'Simple sentence forms. Some accurate SPaG.' },
        { band: 1, label: 'Grade 1', marks: [1, 2], desc: 'Simple sentence forms. Inaccurate SPaG.' },
      ],
    },
  },

  Edexcel: {
    AO1: {
      bands: [
        { band: 5, label: 'Grade 8-9', marks: [25, 30], desc: 'Conceptualised response with a critical style maintained throughout. Judicious use of precise references.' },
        { band: 4, label: 'Grade 6-7', marks: [17, 24], desc: 'Thoughtful, considered response. References are apt and effectively integrated.' },
        { band: 3, label: 'Grade 4-5', marks: [9, 16], desc: 'Clear understanding with some sustained response. Relevant references support points.' },
        { band: 2, label: 'Grade 2-3', marks: [4, 8], desc: 'Some understanding evident. Some relevant references.' },
        { band: 1, label: 'Grade 1', marks: [1, 3], desc: 'Limited, simple response with minimal textual reference.' },
      ],
    },
    AO2: {
      bands: [
        { band: 5, label: 'Grade 8-9', marks: [25, 30], desc: 'Perceptive analysis of writer\'s methods with sustained, sophisticated use of terminology.' },
        { band: 4, label: 'Grade 6-7', marks: [17, 24], desc: 'Detailed analysis of writer\'s methods. Effective, accurate use of terminology.' },
        { band: 3, label: 'Grade 4-5', marks: [9, 16], desc: 'Clear explanation of writer\'s methods. Appropriate terminology used.' },
        { band: 2, label: 'Grade 2-3', marks: [4, 8], desc: 'Some identification and comment on writer\'s methods. Some terminology.' },
        { band: 1, label: 'Grade 1', marks: [1, 3], desc: 'Simple awareness of method. Little or no terminology.' },
      ],
    },
    AO3: {
      bands: [
        { band: 5, label: 'Grade 8-9', marks: [25, 30], desc: 'Convincing, critical analysis of contextual factors with detailed, specific links between context and text.' },
        { band: 4, label: 'Grade 6-7', marks: [17, 24], desc: 'Thoughtful exploration of contextual factors. Relevant, specific links.' },
        { band: 3, label: 'Grade 4-5', marks: [9, 16], desc: 'Clear understanding of context. Some relevant links between context and text.' },
        { band: 2, label: 'Grade 2-3', marks: [4, 8], desc: 'Some awareness of context. Simple links attempted.' },
        { band: 1, label: 'Grade 1', marks: [1, 3], desc: 'Limited awareness of context.' },
      ],
    },
    AO4: {
      bands: [
        { band: 5, label: 'Grade 8-9', marks: [17, 20], desc: 'Perceptive, critical evaluation with convincing analysis of effects. Well-chosen textual references.' },
        { band: 4, label: 'Grade 6-7', marks: [12, 16], desc: 'Detailed, thoughtful evaluation. Clear analysis of effects with effective examples.' },
        { band: 3, label: 'Grade 4-5', marks: [7, 11], desc: 'Clear evaluation with relevant examples. Some analysis of effects.' },
        { band: 2, label: 'Grade 2-3', marks: [3, 6], desc: 'Some evaluative comment with limited analysis.' },
        { band: 1, label: 'Grade 1', marks: [1, 2], desc: 'Very limited evaluative comment.' },
      ],
    },
    AO5: {
      bands: [
        { band: 5, label: 'Grade 8-9', marks: [21, 24], desc: 'Compelling, convincing communication. Extensive vocabulary with sustained crafting. Varied, inventive structure.' },
        { band: 4, label: 'Grade 6-7', marks: [15, 20], desc: 'Convincing, increasingly sophisticated communication. Varied vocabulary and conscious crafting.' },
        { band: 3, label: 'Grade 4-5', marks: [9, 14], desc: 'Clear communication with connected ideas. Varied vocabulary. Some crafting evident.' },
        { band: 2, label: 'Grade 2-3', marks: [4, 8], desc: 'Simple connected communication. Simple vocabulary with some structural features.' },
        { band: 1, label: 'Grade 1', marks: [1, 3], desc: 'Limited communication with little structure.' },
      ],
    },
    AO6: {
      bands: [
        { band: 5, label: 'Grade 8-9', marks: [14, 16], desc: 'Ambitious, extensive range of sentence forms. Consistently accurate SPaG.' },
        { band: 4, label: 'Grade 6-7', marks: [10, 13], desc: 'Varied sentence forms with generally accurate spelling, punctuation and grammar.' },
        { band: 3, label: 'Grade 4-5', marks: [6, 9], desc: 'Some variety in sentence forms. SPaG mostly accurate with occasional errors.' },
        { band: 2, label: 'Grade 2-3', marks: [3, 5], desc: 'Simple sentence forms. Some accuracy in SPaG.' },
        { band: 1, label: 'Grade 1', marks: [1, 2], desc: 'Limited sentence forms. Frequent errors in SPaG.' },
      ],
    },
  },

  OCR: {
    AO1: {
      bands: [
        { band: 6, label: 'Grade 8-9', marks: [25, 30], desc: 'Sustained, perceptive and convincing response. Precise, well-chosen references fluently integrated.' },
        { band: 5, label: 'Grade 7', marks: [19, 24], desc: 'Thoughtful, exploratory response. Apt references woven into interpretation.' },
        { band: 4, label: 'Grade 5-6', marks: [13, 18], desc: 'Clear, sustained understanding. Effective references used to support explanation.' },
        { band: 3, label: 'Grade 4', marks: [7, 12], desc: 'Some understanding demonstrated. References used to support a range of points.' },
        { band: 2, label: 'Grade 2-3', marks: [4, 6], desc: 'Simple, limited response. Some references used.' },
        { band: 1, label: 'Grade 1', marks: [1, 3], desc: 'Basic response with minimal reference to text.' },
      ],
    },
    AO2: {
      bands: [
        { band: 6, label: 'Grade 8-9', marks: [25, 30], desc: 'Sustained, perceptive analysis of writer\'s methods. Sophisticated, precise use of subject terminology.' },
        { band: 5, label: 'Grade 7', marks: [19, 24], desc: 'Thoughtful, detailed analysis of writer\'s methods. Accurate, effective terminology.' },
        { band: 4, label: 'Grade 5-6', marks: [13, 18], desc: 'Clear understanding of writer\'s methods with appropriate terminology.' },
        { band: 3, label: 'Grade 4', marks: [7, 12], desc: 'Some understanding of writer\'s methods. Some relevant terminology.' },
        { band: 2, label: 'Grade 2-3', marks: [4, 6], desc: 'Simple identification of some methods. Limited terminology.' },
        { band: 1, label: 'Grade 1', marks: [1, 3], desc: 'Very limited awareness of writer\'s methods.' },
      ],
    },
    AO3: {
      bands: [
        { band: 6, label: 'Grade 8-9', marks: [25, 30], desc: 'Sustained, perceptive understanding of context integrated convincingly into response.' },
        { band: 5, label: 'Grade 7', marks: [19, 24], desc: 'Thoughtful consideration of context with detailed, relevant links.' },
        { band: 4, label: 'Grade 5-6', marks: [13, 18], desc: 'Clear understanding of context with relevant links to text.' },
        { band: 3, label: 'Grade 4', marks: [7, 12], desc: 'Some awareness of context with some links.' },
        { band: 2, label: 'Grade 2-3', marks: [4, 6], desc: 'Simple awareness of contextual factors.' },
        { band: 1, label: 'Grade 1', marks: [1, 3], desc: 'Very limited contextual awareness.' },
      ],
    },
    AO4: {
      bands: [
        { band: 6, label: 'Grade 8-9', marks: [17, 20], desc: 'Sustained, perceptive evaluation. Convincing critical analysis with well-chosen references.' },
        { band: 5, label: 'Grade 7', marks: [13, 16], desc: 'Thoughtful evaluation with clear analysis of effects and appropriate examples.' },
        { band: 4, label: 'Grade 5-6', marks: [9, 12], desc: 'Clear evaluation with some developed analysis and relevant examples.' },
        { band: 3, label: 'Grade 4', marks: [5, 8], desc: 'Some evaluative comment with some examples.' },
        { band: 2, label: 'Grade 2-3', marks: [3, 4], desc: 'Simple evaluative comment.' },
        { band: 1, label: 'Grade 1', marks: [1, 2], desc: 'Limited awareness of writer\'s effects.' },
      ],
    },
    AO5: {
      bands: [
        { band: 6, label: 'Grade 8-9', marks: [21, 24], desc: 'Compelling communication with ambitious vocabulary. Sustained crafting and inventive structural features.' },
        { band: 5, label: 'Grade 7', marks: [17, 20], desc: 'Convincing communication. Sophisticated vocabulary with conscious crafting.' },
        { band: 4, label: 'Grade 5-6', marks: [13, 16], desc: 'Clear, connected communication. Varied vocabulary and some deliberate crafting.' },
        { band: 3, label: 'Grade 4', marks: [9, 12], desc: 'Connected communication with varied vocabulary. Some linguistic features.' },
        { band: 2, label: 'Grade 2-3', marks: [5, 8], desc: 'Simple communication. Simple vocabulary with limited structural features.' },
        { band: 1, label: 'Grade 1', marks: [1, 4], desc: 'Limited communication with very basic vocabulary.' },
      ],
    },
    AO6: {
      bands: [
        { band: 6, label: 'Grade 8-9', marks: [14, 16], desc: 'Ambitious range of sentence forms. Consistently high accuracy in SPaG.' },
        { band: 5, label: 'Grade 7', marks: [11, 13], desc: 'Varied sentence forms. Generally accurate SPaG.' },
        { band: 4, label: 'Grade 5-6', marks: [8, 10], desc: 'Some variety in sentence forms. Usually accurate SPaG.' },
        { band: 3, label: 'Grade 4', marks: [5, 7], desc: 'Attempts at sentence variety. SPaG mostly accurate.' },
        { band: 2, label: 'Grade 2-3', marks: [3, 4], desc: 'Simple sentence forms. Some SPaG accuracy.' },
        { band: 1, label: 'Grade 1', marks: [1, 2], desc: 'Limited sentence forms. Frequent SPaG errors.' },
      ],
    },
  },

  WJEC: {
    AO1: {
      bands: [
        { band: 6, label: 'Grade 8-9', marks: [25, 30], desc: 'Detailed and perceptive response. Judicious, well-integrated references used to support a convincing personal interpretation.' },
        { band: 5, label: 'Grade 7', marks: [19, 24], desc: 'Thoughtful, developed response with apt references effectively integrated.' },
        { band: 4, label: 'Grade 5-6', marks: [13, 18], desc: 'Clear, sustained response. Effective use of references to support a sound explanation.' },
        { band: 3, label: 'Grade 4', marks: [7, 12], desc: 'Some understanding shown with references to support points made.' },
        { band: 2, label: 'Grade 2-3', marks: [4, 6], desc: 'Simple, limited comments. Some references used.' },
        { band: 1, label: 'Grade 1', marks: [1, 3], desc: 'Very basic response with minimal reference.' },
      ],
    },
    AO2: {
      bands: [
        { band: 6, label: 'Grade 8-9', marks: [25, 30], desc: 'Detailed and perceptive analysis of language, form and structure. Sophisticated, precise use of subject terminology.' },
        { band: 5, label: 'Grade 7', marks: [19, 24], desc: 'Thoughtful, detailed analysis. Accurate, well-integrated subject terminology.' },
        { band: 4, label: 'Grade 5-6', marks: [13, 18], desc: 'Clear analysis of language, form and structure. Appropriate terminology used.' },
        { band: 3, label: 'Grade 4', marks: [7, 12], desc: 'Some analysis of language and structure. Some appropriate terminology.' },
        { band: 2, label: 'Grade 2-3', marks: [4, 6], desc: 'Simple identification of language features. Limited terminology.' },
        { band: 1, label: 'Grade 1', marks: [1, 3], desc: 'Basic awareness of language. Very limited terminology.' },
      ],
    },
    AO3: {
      bands: [
        { band: 6, label: 'Grade 8-9', marks: [25, 30], desc: 'Detailed and perceptive understanding of context with convincing links throughout.' },
        { band: 5, label: 'Grade 7', marks: [19, 24], desc: 'Thoughtful consideration of context. Well-developed, specific links.' },
        { band: 4, label: 'Grade 5-6', marks: [13, 18], desc: 'Clear understanding of context with relevant links.' },
        { band: 3, label: 'Grade 4', marks: [7, 12], desc: 'Some awareness of context with some relevant links.' },
        { band: 2, label: 'Grade 2-3', marks: [4, 6], desc: 'Simple awareness of context.' },
        { band: 1, label: 'Grade 1', marks: [1, 3], desc: 'Very limited contextual awareness.' },
      ],
    },
    AO4: {
      bands: [
        { band: 6, label: 'Grade 8-9', marks: [17, 20], desc: 'Detailed and perceptive evaluation with convincing analysis and apt references.' },
        { band: 5, label: 'Grade 7', marks: [13, 16], desc: 'Thoughtful evaluation with clear analysis of effects and well-chosen examples.' },
        { band: 4, label: 'Grade 5-6', marks: [9, 12], desc: 'Clear evaluation with relevant examples and some development.' },
        { band: 3, label: 'Grade 4', marks: [5, 8], desc: 'Some evaluation with some reference to effects.' },
        { band: 2, label: 'Grade 2-3', marks: [3, 4], desc: 'Simple evaluative comment.' },
        { band: 1, label: 'Grade 1', marks: [1, 2], desc: 'Very limited evaluation.' },
      ],
    },
    AO5: {
      bands: [
        { band: 6, label: 'Grade 8-9', marks: [21, 24], desc: 'Compelling, ambitious communication. Extensive vocabulary with sustained, sophisticated crafting throughout.' },
        { band: 5, label: 'Grade 7', marks: [17, 20], desc: 'Convincing communication. Sophisticated vocabulary. Deliberate, effective crafting.' },
        { band: 4, label: 'Grade 5-6', marks: [13, 16], desc: 'Clear, well-connected communication. Varied vocabulary. Evidence of crafting.' },
        { band: 3, label: 'Grade 4', marks: [9, 12], desc: 'Connected communication with varied vocabulary. Some crafting evident.' },
        { band: 2, label: 'Grade 2-3', marks: [5, 8], desc: 'Simple communication. Limited vocabulary. Basic structural features.' },
        { band: 1, label: 'Grade 1', marks: [1, 4], desc: 'Very limited communication.' },
      ],
    },
    AO6: {
      bands: [
        { band: 6, label: 'Grade 8-9', marks: [14, 16], desc: 'Ambitious range of accurate sentence forms. Consistently high accuracy in spelling, punctuation and grammar.' },
        { band: 5, label: 'Grade 7', marks: [11, 13], desc: 'Varied, effective sentence forms. Generally accurate SPaG.' },
        { band: 4, label: 'Grade 5-6', marks: [8, 10], desc: 'Variety in sentence forms. SPaG usually accurate.' },
        { band: 3, label: 'Grade 4', marks: [5, 7], desc: 'Some sentence variety. SPaG generally accurate.' },
        { band: 2, label: 'Grade 2-3', marks: [3, 4], desc: 'Simple sentence forms. Some SPaG accuracy.' },
        { band: 1, label: 'Grade 1', marks: [1, 2], desc: 'Very limited sentence forms. Poor SPaG accuracy.' },
      ],
    },
  },

  'Edexcel IGCSE': {
    AO1: {
      bands: [
        { band: 5, label: 'A*', marks: [25, 30], desc: 'Assured, perceptive response demonstrating sophisticated engagement. Precise, well-integrated references throughout.' },
        { band: 4, label: 'A-B', marks: [17, 24], desc: 'Detailed, sustained response. Apt references effectively supporting interpretation.' },
        { band: 3, label: 'B-C', marks: [9, 16], desc: 'Clear, competent response with relevant references supporting explanation.' },
        { band: 2, label: 'D-E', marks: [4, 8], desc: 'Some understanding with some relevant references.' },
        { band: 1, label: 'F-G', marks: [1, 3], desc: 'Limited response with minimal textual reference.' },
      ],
    },
    AO2: {
      bands: [
        { band: 5, label: 'A*', marks: [25, 30], desc: 'Assured, perceptive analysis of writer\'s craft. Sophisticated, precise terminology used throughout.' },
        { band: 4, label: 'A-B', marks: [17, 24], desc: 'Detailed analysis of language, form and structure. Accurate, effective terminology.' },
        { band: 3, label: 'B-C', marks: [9, 16], desc: 'Clear understanding of writer\'s methods. Appropriate terminology.' },
        { band: 2, label: 'D-E', marks: [4, 8], desc: 'Some identification of writer\'s methods. Some terminology.' },
        { band: 1, label: 'F-G', marks: [1, 3], desc: 'Limited awareness of writer\'s methods.' },
      ],
    },
    AO3: {
      bands: [
        { band: 5, label: 'A*', marks: [25, 30], desc: 'Assured understanding of context convincingly integrated into interpretation throughout.' },
        { band: 4, label: 'A-B', marks: [17, 24], desc: 'Detailed consideration of context with specific, well-developed links.' },
        { band: 3, label: 'B-C', marks: [9, 16], desc: 'Clear understanding of context with relevant links.' },
        { band: 2, label: 'D-E', marks: [4, 8], desc: 'Some awareness of context.' },
        { band: 1, label: 'F-G', marks: [1, 3], desc: 'Limited contextual awareness.' },
      ],
    },
    AO4: {
      bands: [
        { band: 5, label: 'A*', marks: [17, 20], desc: 'Assured, perceptive evaluation. Convincing critical analysis with well-chosen references.' },
        { band: 4, label: 'A-B', marks: [12, 16], desc: 'Detailed evaluation with clear analysis of effects and effective examples.' },
        { band: 3, label: 'B-C', marks: [7, 11], desc: 'Clear evaluation with relevant examples.' },
        { band: 2, label: 'D-E', marks: [3, 6], desc: 'Some evaluative comment.' },
        { band: 1, label: 'F-G', marks: [1, 2], desc: 'Limited evaluation.' },
      ],
    },
    AO5: {
      bands: [
        { band: 5, label: 'A*', marks: [21, 24], desc: 'Compelling, assured communication. Extensive, ambitious vocabulary. Sustained, sophisticated crafting.' },
        { band: 4, label: 'A-B', marks: [15, 20], desc: 'Convincing communication with sophisticated vocabulary. Deliberate, effective crafting.' },
        { band: 3, label: 'B-C', marks: [9, 14], desc: 'Clear, competent communication. Varied vocabulary. Some crafting evident.' },
        { band: 2, label: 'D-E', marks: [4, 8], desc: 'Simple communication. Limited vocabulary and structure.' },
        { band: 1, label: 'F-G', marks: [1, 3], desc: 'Very limited communication.' },
      ],
    },
    AO6: {
      bands: [
        { band: 5, label: 'A*', marks: [14, 16], desc: 'Ambitious, varied sentence forms. Consistently accurate spelling, punctuation and grammar.' },
        { band: 4, label: 'A-B', marks: [10, 13], desc: 'Varied sentence forms. Generally accurate SPaG.' },
        { band: 3, label: 'B-C', marks: [6, 9], desc: 'Some sentence variety. SPaG mostly accurate.' },
        { band: 2, label: 'D-E', marks: [3, 5], desc: 'Simple sentence forms. Some SPaG accuracy.' },
        { band: 1, label: 'F-G', marks: [1, 2], desc: 'Limited sentence forms. Frequent SPaG errors.' },
      ],
    },
  },
};


// ============================================================================
// SECTION 2B: FULL PAPER-SPECIFIC MARK SCHEMES
// Board + Subject + Paper + Question -> AO weights, max marks, rubric
// ============================================================================

const PAPER_MARK_SCHEMES = {
  // ==========================================================================
  // AQA ENGLISH LANGUAGE
  // ==========================================================================
  'AQA|English Language|Paper 1': {
    title: 'AQA English Language Paper 1: Explorations in Creative Reading and Writing',
    questions: {
      Q1: {
        title: 'List four things...',
        maxMarks: 4,
        aos: [{ ao: 'AO1', weight: 1.0 }],
        type: 'Information Retrieval',
        rubric: 'Select four pieces of information from a specified section of the source. 1 mark per correct identification. No analysis or quotation needed — simple retrieval.',
        bandDescriptors: [
          { marks: [4, 4], desc: 'All four points correctly identified from the text.' },
          { marks: [3, 3], desc: 'Three points correctly identified.' },
          { marks: [2, 2], desc: 'Two points correctly identified.' },
          { marks: [1, 1], desc: 'One point correctly identified.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q2: {
        title: 'How does the writer use language to...',
        maxMarks: 8,
        aos: [{ ao: 'AO2', weight: 1.0 }],
        type: 'Language Analysis',
        rubric: 'Analyse how the writer uses language to achieve effects. Select and comment on specific words, phrases and language features. Use relevant subject terminology.',
        bandDescriptors: [
          { marks: [7, 8], desc: 'Band 4: Detailed, perceptive analysis of language. Judicious use of textual detail. Sophisticated, accurate use of subject terminology.' },
          { marks: [5, 6], desc: 'Band 3: Clear, relevant explanation of language effects. Appropriate range of textual detail. Relevant subject terminology used accurately.' },
          { marks: [3, 4], desc: 'Band 2: Some understanding of language effects. Some relevant textual detail. Some subject terminology, not always used accurately.' },
          { marks: [1, 2], desc: 'Band 1: Simple awareness of language. Limited textual reference. Simple mention of a method or limited subject terminology.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q3: {
        title: 'How has the writer structured the text to interest the reader?',
        maxMarks: 8,
        aos: [{ ao: 'AO2', weight: 1.0 }],
        type: 'Structure Analysis',
        rubric: 'Analyse how the writer has structured the whole text for effect. Consider structural features such as focus shifts, openings, endings, narrative perspective, and how the text builds interest.',
        bandDescriptors: [
          { marks: [7, 8], desc: 'Band 4: Detailed, perceptive analysis of structural features. Judicious textual detail. Sophisticated, accurate use of subject terminology.' },
          { marks: [5, 6], desc: 'Band 3: Clear, relevant explanation of structural features and effects. Appropriate range of examples. Relevant subject terminology.' },
          { marks: [3, 4], desc: 'Band 2: Some understanding of structural features. Some relevant examples. Some subject terminology, not always accurate.' },
          { marks: [1, 2], desc: 'Band 1: Simple awareness of structure. Limited examples. Simple mention of structural features.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q4: {
        title: 'To what extent do you agree...? (Critical Evaluation)',
        maxMarks: 20,
        aos: [{ ao: 'AO4', weight: 1.0 }],
        type: 'Critical Evaluation',
        rubric: 'Critically evaluate the text, supporting your views with appropriate textual references. Consider the writer\'s methods and their effects, and give your personal response.',
        bandDescriptors: [
          { marks: [17, 20], desc: 'Band 4: Perceptive, detailed evaluation. Convincing, critical response to the focus of the statement. Textual references used judiciously.' },
          { marks: [13, 16], desc: 'Band 3: Clear, relevant evaluation. Thoughtful response to the statement. Appropriate textual references used to support views.' },
          { marks: [7, 12], desc: 'Band 2: Some attempt to evaluate. Some response to the statement. Some textual references used.' },
          { marks: [1, 6], desc: 'Band 1: Limited evaluative comment. Simple personal response. Limited textual reference.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q5: {
        title: 'Creative writing (description or narrative)',
        maxMarks: 40,
        aos: [{ ao: 'AO5', weight: 0.6 }, { ao: 'AO6', weight: 0.4 }],
        type: 'Creative Writing',
        rubric: 'Write a description or narrative as directed. AO5 (24 marks): Content and Organisation — communicate effectively, use tone/style/register for purpose. AO6 (16 marks): Technical Accuracy — sentence demarcation, punctuation, spelling, grammar.',
        bandDescriptors: [
          { marks: [33, 40], desc: 'Band 6 (AO5) + Band 6 (AO6): Compelling, convincing writing. Extensive vocabulary. Sustained crafting. Ambitious, accurate sentence forms throughout.' },
          { marks: [27, 32], desc: 'Band 5: Convincing communication. Sophisticated vocabulary. Conscious crafting. Varied sentence forms. Generally accurate SPaG.' },
          { marks: [21, 26], desc: 'Band 4: Clear, connected communication. Varied vocabulary. Some crafting evident. Varied sentences. Usually accurate SPaG.' },
          { marks: [15, 20], desc: 'Band 3: Connected, engaging communication. Varied vocabulary. Some linguistic devices. Some sentence variety. Generally accurate SPaG.' },
          { marks: [7, 14], desc: 'Band 2: Simple communication. Simple vocabulary. Some structural features. Simple sentence forms. Some accuracy.' },
          { marks: [1, 6], desc: 'Band 1: Limited communication. Very limited vocabulary. Limited structure. Simple sentences. Inaccurate SPaG.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
    },
  },

  'AQA|English Language|Paper 2': {
    title: 'AQA English Language Paper 2: Writers\' Viewpoints and Perspectives',
    questions: {
      Q1: {
        title: 'Choose four statements which are TRUE',
        maxMarks: 4,
        aos: [{ ao: 'AO1', weight: 1.0 }],
        type: 'Information Retrieval',
        rubric: 'Choose four statements from a list of eight that are true according to the passage. 1 mark per correct answer.',
        bandDescriptors: [
          { marks: [4, 4], desc: 'All four correct statements identified.' },
          { marks: [3, 3], desc: 'Three correct statements identified.' },
          { marks: [2, 2], desc: 'Two correct statements identified.' },
          { marks: [1, 1], desc: 'One correct statement identified.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q2: {
        title: 'Write a summary of the differences/similarities...',
        maxMarks: 8,
        aos: [{ ao: 'AO1', weight: 1.0 }],
        type: 'Summary',
        rubric: 'Use details from both sources to write a summary of the differences (or similarities). Make inferences from both texts. Use relevant quotations.',
        bandDescriptors: [
          { marks: [7, 8], desc: 'Band 4: Perceptive synthesis and interpretation of both sources. Judicious references. Clear, sustained focus on the question.' },
          { marks: [5, 6], desc: 'Band 3: Clear, relevant synthesis. Appropriate references from both sources. Clear focus on the question.' },
          { marks: [3, 4], desc: 'Band 2: Some attempts to link evidence from both sources. Some relevant detail identified.' },
          { marks: [1, 2], desc: 'Band 1: Simple, limited reference to one or both sources. Limited relevant detail.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q3: {
        title: 'How does the writer use language to...',
        maxMarks: 12,
        aos: [{ ao: 'AO2', weight: 1.0 }],
        type: 'Language Analysis',
        rubric: 'Analyse how the writer uses language to achieve a particular effect. Comment on words, phrases, language features and sentence forms. Use relevant terminology.',
        bandDescriptors: [
          { marks: [10, 12], desc: 'Band 4: Detailed, perceptive analysis of language. Judicious, well-selected textual detail. Sophisticated, accurate use of subject terminology.' },
          { marks: [7, 9], desc: 'Band 3: Clear, relevant explanation of language effects. Appropriate range of textual detail. Subject terminology used accurately.' },
          { marks: [4, 6], desc: 'Band 2: Some understanding of language. Some relevant textual detail. Some subject terminology.' },
          { marks: [1, 3], desc: 'Band 1: Simple awareness of language. Limited examples. Limited terminology.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q4: {
        title: 'Compare how the writers convey their different perspectives...',
        maxMarks: 16,
        aos: [{ ao: 'AO3', weight: 0.6 }, { ao: 'AO2', weight: 0.4 }],
        type: 'Comparison',
        rubric: 'Compare how the two writers convey their different attitudes and perspectives. Analyse the methods used. Refer to both sources to support your answer.',
        bandDescriptors: [
          { marks: [13, 16], desc: 'Band 4: Perceptive, detailed comparison. Analysis of methods in both sources. Judicious references. Ideas convincingly linked.' },
          { marks: [9, 12], desc: 'Band 3: Clear, relevant comparison. Clear explanation of methods. Appropriate references from both sources.' },
          { marks: [5, 8], desc: 'Band 2: Some comparison attempted. Some reference to methods. Some relevant detail from both sources.' },
          { marks: [1, 4], desc: 'Band 1: Simple, limited comparison or sequential treatment. Limited reference.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q5: {
        title: 'Transactional writing (article, letter, speech, essay)',
        maxMarks: 40,
        aos: [{ ao: 'AO5', weight: 0.6 }, { ao: 'AO6', weight: 0.4 }],
        type: 'Persuasive Writing',
        rubric: 'Write in a specified form (article, letter, speech, essay) to present a viewpoint. AO5 (24 marks): Content and Organisation. AO6 (16 marks): Technical Accuracy.',
        bandDescriptors: [
          { marks: [33, 40], desc: 'Band 6: Compelling, convincing argument. Extensive vocabulary. Sustained use of rhetorical devices. Ambitious, accurate sentence forms.' },
          { marks: [27, 32], desc: 'Band 5: Convincing, well-crafted communication. Sophisticated vocabulary. Effective rhetorical devices. Varied sentences. Accurate SPaG.' },
          { marks: [21, 26], desc: 'Band 4: Clear, connected communication for purpose. Varied vocabulary. Some crafting. Varied sentences. Usually accurate SPaG.' },
          { marks: [15, 20], desc: 'Band 3: Connected communication. Varied vocabulary. Some persuasive devices. Some sentence variety. Generally accurate SPaG.' },
          { marks: [7, 14], desc: 'Band 2: Simple communication. Simple vocabulary. Simple persuasive features. Simple sentences. Some accuracy.' },
          { marks: [1, 6], desc: 'Band 1: Limited communication. Very limited vocabulary. Little awareness of form. Inaccurate SPaG.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
    },
  },

  // ==========================================================================
  // AQA ENGLISH LITERATURE
  // ==========================================================================
  'AQA|English Literature|Paper 1': {
    title: 'AQA English Literature Paper 1: Shakespeare and the 19th-Century Novel',
    questions: {
      'Section A': {
        title: 'Shakespeare (extract + essay)',
        maxMarks: 34,
        aos: [{ ao: 'AO1', weight: 0.25 }, { ao: 'AO2', weight: 0.40 }, { ao: 'AO3', weight: 0.20 }, { ao: 'AO4', weight: 0.15 }],
        type: 'Literature Essay',
        rubric: 'Read the extract and answer the question. Write about the extract and then the play as a whole. AO1: response to text, AO2: writer\'s methods, AO3: context, AO4: personal response (4 marks for SPaG).',
        bandDescriptors: [
          { marks: [28, 34], desc: 'Band 6: Critical, exploratory, conceptualised response. Perceptive analysis of methods. Convincing context. Judicious references throughout.' },
          { marks: [22, 27], desc: 'Band 5: Thoughtful, developed response. Detailed analysis of methods. Thoughtful context. Apt references integrated.' },
          { marks: [16, 21], desc: 'Band 4: Clear, sustained response. Clear analysis of methods. Clear understanding of context. Effective references.' },
          { marks: [10, 15], desc: 'Band 3: Some understanding. Some analysis of methods. Some context awareness. References support points.' },
          { marks: [5, 9], desc: 'Band 2: Simple, limited response. Simple identification of methods. Simple context. Some references.' },
          { marks: [1, 4], desc: 'Band 1: Very limited response with minimal textual reference.' },
        ],
      },
      'Section B': {
        title: '19th-Century Novel (extract + essay)',
        maxMarks: 30,
        aos: [{ ao: 'AO1', weight: 0.30 }, { ao: 'AO2', weight: 0.40 }, { ao: 'AO3', weight: 0.30 }],
        type: 'Literature Essay',
        rubric: 'Read the extract and answer the question. Write about the extract and then the novel as a whole. AO1: response and references, AO2: writer\'s methods, AO3: context.',
        bandDescriptors: [
          { marks: [25, 30], desc: 'Band 6: Critical, exploratory, conceptualised response. Perceptive analysis of methods. Convincing context integration.' },
          { marks: [19, 24], desc: 'Band 5: Thoughtful, developed response. Detailed analysis. Thoughtful context with specific links.' },
          { marks: [13, 18], desc: 'Band 4: Clear, sustained response. Clear analysis. Clear understanding of context.' },
          { marks: [7, 12], desc: 'Band 3: Some understanding. Some analysis. Some context awareness.' },
          { marks: [4, 6], desc: 'Band 2: Simple, limited response. Simple identification. Simple context.' },
          { marks: [1, 3], desc: 'Band 1: Very limited response.' },
        ],
      },
    },
  },

  'AQA|English Literature|Paper 2': {
    title: 'AQA English Literature Paper 2: Modern Texts and Poetry',
    questions: {
      'Section A': {
        title: 'Modern Text (essay, no extract)',
        maxMarks: 34,
        aos: [{ ao: 'AO1', weight: 0.30 }, { ao: 'AO2', weight: 0.30 }, { ao: 'AO3', weight: 0.25 }, { ao: 'AO4', weight: 0.15 }],
        type: 'Literature Essay',
        rubric: 'Answer the essay question on your studied modern text. Write about the whole text. AO1, AO2, AO3, plus 4 marks SPaG (AO4 here represents evaluation/personal response).',
        bandDescriptors: [
          { marks: [28, 34], desc: 'Band 6: Critical, exploratory response. Perceptive analysis of writer\'s methods. Convincing, integrated context. Judicious references.' },
          { marks: [22, 27], desc: 'Band 5: Thoughtful response. Detailed analysis. Thoughtful context. Apt, well-chosen references.' },
          { marks: [16, 21], desc: 'Band 4: Clear, sustained response. Clear analysis. Clear context. Effective references.' },
          { marks: [10, 15], desc: 'Band 3: Some understanding. Some analysis. Some context. References support points.' },
          { marks: [5, 9], desc: 'Band 2: Simple response. Simple method identification. Simple context awareness.' },
          { marks: [1, 4], desc: 'Band 1: Very limited response.' },
        ],
      },
      'Section B': {
        title: 'Poetry Anthology (comparison)',
        maxMarks: 30,
        aos: [{ ao: 'AO1', weight: 0.25 }, { ao: 'AO2', weight: 0.50 }, { ao: 'AO3', weight: 0.25 }],
        type: 'Comparison',
        rubric: 'Compare how poets present a theme/idea in one named poem and one other poem from the anthology. AO2 is dominant — focus on methods.',
        bandDescriptors: [
          { marks: [25, 30], desc: 'Band 6: Critical, exploratory comparison. Perceptive analysis of methods in both poems. Convincing context.' },
          { marks: [19, 24], desc: 'Band 5: Thoughtful comparison. Detailed analysis of methods. Thoughtful context with specific links.' },
          { marks: [13, 18], desc: 'Band 4: Clear comparison. Clear analysis of methods. Clear context.' },
          { marks: [7, 12], desc: 'Band 3: Some comparison. Some analysis. Some context.' },
          { marks: [4, 6], desc: 'Band 2: Simple comparison or sequential treatment. Simple identification.' },
          { marks: [1, 3], desc: 'Band 1: Very limited response.' },
        ],
      },
      'Section C': {
        title: 'Unseen Poetry (single poem + comparison)',
        maxMarks: 32,
        aos: [{ ao: 'AO1', weight: 0.30 }, { ao: 'AO2', weight: 0.70 }],
        type: 'Language Analysis',
        rubric: 'Part 1 (24 marks): Analyse an unseen poem. Part 2 (8 marks): Compare with a second unseen poem. AO2 dominant — focus on language, form, structure.',
        bandDescriptors: [
          { marks: [26, 32], desc: 'Band 6: Perceptive analysis of language, form and structure. Convincing personal response. Effective comparison.' },
          { marks: [20, 25], desc: 'Band 5: Detailed analysis. Thoughtful response. Clear comparison with some detail.' },
          { marks: [14, 19], desc: 'Band 4: Clear analysis with appropriate terminology. Clear response. Some comparison.' },
          { marks: [8, 13], desc: 'Band 3: Some analysis. Some response. Simple comparison.' },
          { marks: [4, 7], desc: 'Band 2: Simple identification. Limited response. Limited comparison.' },
          { marks: [1, 3], desc: 'Band 1: Very limited response.' },
        ],
      },
    },
  },

  // ==========================================================================
  // EDEXCEL ENGLISH LANGUAGE
  // ==========================================================================
  'Edexcel|English Language|Paper 1': {
    title: 'Edexcel English Language Paper 1: Fiction and Imaginative Writing',
    questions: {
      Q1: {
        title: 'Retrieval: identify explicit information',
        maxMarks: 4,
        aos: [{ ao: 'AO1', weight: 1.0 }],
        type: 'Information Retrieval',
        rubric: 'Read the source text and identify explicit information. Short-answer retrieval question.',
        bandDescriptors: [
          { marks: [4, 4], desc: 'All four points correctly identified.' },
          { marks: [3, 3], desc: 'Three points correctly identified.' },
          { marks: [2, 2], desc: 'Two points correctly identified.' },
          { marks: [1, 1], desc: 'One point correctly identified.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q2: {
        title: 'How does the writer use language to create effects?',
        maxMarks: 8,
        aos: [{ ao: 'AO2', weight: 1.0 }],
        type: 'Language Analysis',
        rubric: 'Analyse the writer\'s use of language. Comment on specific words, phrases, techniques and their effects on the reader.',
        bandDescriptors: [
          { marks: [7, 8], desc: 'Band 4: Perceptive, detailed analysis with sophisticated use of terminology. Judicious, well-chosen textual detail.' },
          { marks: [5, 6], desc: 'Band 3: Clear analysis of language effects. Relevant textual detail. Accurate subject terminology.' },
          { marks: [3, 4], desc: 'Band 2: Some relevant comments on language. Some textual detail. Some terminology.' },
          { marks: [1, 2], desc: 'Band 1: Simple awareness of language. Limited detail. Limited terminology.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q3: {
        title: 'How does the writer structure the text?',
        maxMarks: 8,
        aos: [{ ao: 'AO2', weight: 1.0 }],
        type: 'Structure Analysis',
        rubric: 'Analyse the writer\'s use of structure. Consider how the whole text is organised and structured for effect.',
        bandDescriptors: [
          { marks: [7, 8], desc: 'Band 4: Perceptive analysis of structural features and their effects. Well-chosen examples. Sophisticated terminology.' },
          { marks: [5, 6], desc: 'Band 3: Clear explanation of structural features. Relevant examples. Appropriate terminology.' },
          { marks: [3, 4], desc: 'Band 2: Some understanding of structural features. Some examples. Some terminology.' },
          { marks: [1, 2], desc: 'Band 1: Simple awareness of structure. Limited examples.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q4: {
        title: 'Evaluate critically (to what extent do you agree?)',
        maxMarks: 20,
        aos: [{ ao: 'AO4', weight: 1.0 }],
        type: 'Critical Evaluation',
        rubric: 'Evaluate how effectively the writer achieves a particular effect. Give your personal, critical response supported by textual references.',
        bandDescriptors: [
          { marks: [17, 20], desc: 'Band 4: Perceptive, sustained evaluation. Convincing critical analysis. Judicious textual references.' },
          { marks: [13, 16], desc: 'Band 3: Clear, relevant evaluation. Thoughtful analysis. Appropriate textual references.' },
          { marks: [7, 12], desc: 'Band 2: Some evaluative comment. Some response to effects. Some references.' },
          { marks: [1, 6], desc: 'Band 1: Limited evaluation. Simple personal response. Limited reference.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q5: {
        title: 'Imaginative writing (narrative or descriptive)',
        maxMarks: 40,
        aos: [{ ao: 'AO5', weight: 0.6 }, { ao: 'AO6', weight: 0.4 }],
        type: 'Creative Writing',
        rubric: 'Write imaginatively. AO5 (24 marks): Content, organisation and register. AO6 (16 marks): Sentence structures, vocabulary, spelling, punctuation.',
        bandDescriptors: [
          { marks: [33, 40], desc: 'Band 5: Compelling, convincing writing. Extensive vocabulary. Sustained, sophisticated crafting. Accurate throughout.' },
          { marks: [25, 32], desc: 'Band 4: Convincing communication. Varied vocabulary. Conscious crafting. Generally accurate.' },
          { marks: [17, 24], desc: 'Band 3: Clear communication. Varied vocabulary. Some crafting. Mostly accurate.' },
          { marks: [9, 16], desc: 'Band 2: Simple communication. Simple vocabulary. Limited crafting. Some accuracy.' },
          { marks: [1, 8], desc: 'Band 1: Limited communication. Very limited vocabulary. Frequent errors.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
    },
  },

  'Edexcel|English Language|Paper 2': {
    title: 'Edexcel English Language Paper 2: Non-Fiction and Transactional Writing',
    questions: {
      Q1: {
        title: 'Retrieval: identify information from a source',
        maxMarks: 4,
        aos: [{ ao: 'AO1', weight: 1.0 }],
        type: 'Information Retrieval',
        rubric: 'Identify explicit information or ideas from the source text.',
        bandDescriptors: [
          { marks: [4, 4], desc: 'All four points correctly identified.' },
          { marks: [3, 3], desc: 'Three points correctly identified.' },
          { marks: [2, 2], desc: 'Two points correctly identified.' },
          { marks: [1, 1], desc: 'One point correctly identified.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q2: {
        title: 'Summary of two texts',
        maxMarks: 8,
        aos: [{ ao: 'AO1', weight: 1.0 }],
        type: 'Summary',
        rubric: 'Summarise the differences/similarities between the two sources. Use details from both texts.',
        bandDescriptors: [
          { marks: [7, 8], desc: 'Band 4: Perceptive synthesis of both sources. Clear, sustained focus. Judicious references.' },
          { marks: [5, 6], desc: 'Band 3: Clear synthesis. Appropriate references from both sources.' },
          { marks: [3, 4], desc: 'Band 2: Some linking of both sources. Some relevant detail.' },
          { marks: [1, 2], desc: 'Band 1: Simple, limited reference to sources.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q3: {
        title: 'How does the writer use language?',
        maxMarks: 12,
        aos: [{ ao: 'AO2', weight: 1.0 }],
        type: 'Language Analysis',
        rubric: 'Analyse the writer\'s use of language. Comment on effects, words, phrases, and use relevant terminology.',
        bandDescriptors: [
          { marks: [10, 12], desc: 'Band 4: Perceptive, detailed analysis. Sophisticated terminology. Judicious textual detail.' },
          { marks: [7, 9], desc: 'Band 3: Clear analysis of language effects. Accurate terminology. Appropriate references.' },
          { marks: [4, 6], desc: 'Band 2: Some analysis of language. Some terminology. Some references.' },
          { marks: [1, 3], desc: 'Band 1: Simple awareness. Limited terminology. Limited reference.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q4: {
        title: 'Compare writers\' viewpoints and perspectives',
        maxMarks: 16,
        aos: [{ ao: 'AO3', weight: 0.6 }, { ao: 'AO2', weight: 0.4 }],
        type: 'Comparison',
        rubric: 'Compare how the two writers convey their different viewpoints and perspectives. Analyse methods used in both sources.',
        bandDescriptors: [
          { marks: [13, 16], desc: 'Band 4: Perceptive comparison. Detailed analysis of methods in both texts. Convincing links.' },
          { marks: [9, 12], desc: 'Band 3: Clear comparison. Clear analysis of methods. Appropriate references from both.' },
          { marks: [5, 8], desc: 'Band 2: Some comparison. Some reference to methods. Some detail.' },
          { marks: [1, 4], desc: 'Band 1: Simple or sequential treatment. Limited comparison.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q5: {
        title: 'Transactional writing',
        maxMarks: 40,
        aos: [{ ao: 'AO5', weight: 0.6 }, { ao: 'AO6', weight: 0.4 }],
        type: 'Persuasive Writing',
        rubric: 'Write to present a viewpoint in a specified form. AO5 (24 marks): Content and Organisation. AO6 (16 marks): Technical Accuracy.',
        bandDescriptors: [
          { marks: [33, 40], desc: 'Band 5: Compelling, convincing communication. Extensive vocabulary. Sustained crafting. Accurate SPaG throughout.' },
          { marks: [25, 32], desc: 'Band 4: Convincing communication. Varied vocabulary. Conscious crafting. Generally accurate.' },
          { marks: [17, 24], desc: 'Band 3: Clear communication. Varied vocabulary. Some crafting. Mostly accurate.' },
          { marks: [9, 16], desc: 'Band 2: Simple communication. Simple vocabulary. Some accuracy.' },
          { marks: [1, 8], desc: 'Band 1: Limited communication. Frequent errors.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
    },
  },

  // ==========================================================================
  // EDEXCEL ENGLISH LITERATURE
  // ==========================================================================
  'Edexcel|English Literature|Paper 1': {
    title: 'Edexcel English Literature Paper 1: Shakespeare and Post-1914 Literature',
    questions: {
      'Section A': {
        title: 'Shakespeare (extract-based essay)',
        maxMarks: 40,
        aos: [{ ao: 'AO1', weight: 0.25 }, { ao: 'AO2', weight: 0.40 }, { ao: 'AO3', weight: 0.20 }, { ao: 'AO4', weight: 0.15 }],
        type: 'Literature Essay',
        rubric: 'Explore how Shakespeare presents a theme/character in the extract and the play as a whole. AO1: response, AO2: methods, AO3: context, AO4: personal response and SPaG.',
        bandDescriptors: [
          { marks: [33, 40], desc: 'Band 5: Assured, perceptive response. Sophisticated analysis of methods. Convincing context. Precise references throughout.' },
          { marks: [25, 32], desc: 'Band 4: Thoughtful, detailed response. Effective analysis. Relevant context with specific links.' },
          { marks: [17, 24], desc: 'Band 3: Clear, sustained response. Clear analysis. Clear understanding of context.' },
          { marks: [9, 16], desc: 'Band 2: Some understanding. Some identification of methods. Some context.' },
          { marks: [1, 8], desc: 'Band 1: Limited response. Simple comments. Minimal reference.' },
        ],
      },
      'Section B': {
        title: 'Post-1914 Literature (essay)',
        maxMarks: 40,
        aos: [{ ao: 'AO1', weight: 0.30 }, { ao: 'AO2', weight: 0.35 }, { ao: 'AO3', weight: 0.20 }, { ao: 'AO4', weight: 0.15 }],
        type: 'Literature Essay',
        rubric: 'Write about a theme/character in a post-1914 text. AO1: response, AO2: methods, AO3: context, AO4: personal response.',
        bandDescriptors: [
          { marks: [33, 40], desc: 'Band 5: Assured, conceptualised response. Perceptive analysis. Convincing context integration. Precise references.' },
          { marks: [25, 32], desc: 'Band 4: Thoughtful response. Detailed analysis. Relevant context. Effective references.' },
          { marks: [17, 24], desc: 'Band 3: Clear response. Clear analysis. Clear context. Appropriate references.' },
          { marks: [9, 16], desc: 'Band 2: Some understanding. Some analysis. Some context awareness.' },
          { marks: [1, 8], desc: 'Band 1: Limited response. Minimal analysis or reference.' },
        ],
      },
    },
  },

  'Edexcel|English Literature|Paper 2': {
    title: 'Edexcel English Literature Paper 2: 19th-Century Novel and Poetry since 1789',
    questions: {
      'Section A': {
        title: '19th-Century Novel (extract-based essay)',
        maxMarks: 40,
        aos: [{ ao: 'AO1', weight: 0.30 }, { ao: 'AO2', weight: 0.40 }, { ao: 'AO3', weight: 0.30 }],
        type: 'Literature Essay',
        rubric: 'Explore how the writer presents a theme/character in the extract and the novel as a whole. AO1: response, AO2: methods, AO3: context.',
        bandDescriptors: [
          { marks: [33, 40], desc: 'Band 5: Assured, perceptive response. Sophisticated analysis. Convincing context. Precise references.' },
          { marks: [25, 32], desc: 'Band 4: Thoughtful response. Detailed analysis. Relevant context. Apt references.' },
          { marks: [17, 24], desc: 'Band 3: Clear response. Clear analysis. Clear context. Appropriate references.' },
          { marks: [9, 16], desc: 'Band 2: Some understanding. Some identification. Some context.' },
          { marks: [1, 8], desc: 'Band 1: Limited response. Minimal reference.' },
        ],
      },
      'Section B': {
        title: 'Poetry anthology comparison',
        maxMarks: 30,
        aos: [{ ao: 'AO1', weight: 0.25 }, { ao: 'AO2', weight: 0.50 }, { ao: 'AO3', weight: 0.25 }],
        type: 'Comparison',
        rubric: 'Compare how poets present a theme in one named poem and one other poem of your choice. Focus on methods (AO2 dominant).',
        bandDescriptors: [
          { marks: [25, 30], desc: 'Band 5: Perceptive comparison. Sophisticated analysis of methods. Convincing context.' },
          { marks: [19, 24], desc: 'Band 4: Detailed comparison. Effective analysis. Relevant context.' },
          { marks: [13, 18], desc: 'Band 3: Clear comparison. Clear analysis. Some context.' },
          { marks: [7, 12], desc: 'Band 2: Some comparison. Some analysis. Simple context.' },
          { marks: [1, 6], desc: 'Band 1: Limited comparison. Simple comments.' },
        ],
      },
      'Section C': {
        title: 'Unseen Poetry (analysis + comparison)',
        maxMarks: 30,
        aos: [{ ao: 'AO1', weight: 0.30 }, { ao: 'AO2', weight: 0.70 }],
        type: 'Language Analysis',
        rubric: 'Part 1: Analyse an unseen poem (20 marks). Part 2: Compare with a second unseen poem (10 marks). AO2 dominant.',
        bandDescriptors: [
          { marks: [25, 30], desc: 'Band 5: Perceptive analysis. Sophisticated use of terminology. Effective comparison.' },
          { marks: [19, 24], desc: 'Band 4: Detailed analysis. Accurate terminology. Clear comparison.' },
          { marks: [13, 18], desc: 'Band 3: Clear analysis. Appropriate terminology. Some comparison.' },
          { marks: [7, 12], desc: 'Band 2: Some analysis. Some terminology. Limited comparison.' },
          { marks: [1, 6], desc: 'Band 1: Simple awareness. Minimal comparison.' },
        ],
      },
    },
  },

  // ==========================================================================
  // OCR ENGLISH LANGUAGE
  // ==========================================================================
  'OCR|English Language|Paper 1': {
    title: 'OCR English Language Paper 1: Communicating Information and Ideas',
    questions: {
      Q1: {
        title: 'Identify and interpret explicit and implicit information',
        maxMarks: 4,
        aos: [{ ao: 'AO1', weight: 1.0 }],
        type: 'Information Retrieval',
        rubric: 'Identify four pieces of information from the text.',
        bandDescriptors: [
          { marks: [4, 4], desc: 'All four correct.' },
          { marks: [3, 3], desc: 'Three correct.' },
          { marks: [2, 2], desc: 'Two correct.' },
          { marks: [1, 1], desc: 'One correct.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q2: {
        title: 'Summary and synthesis',
        maxMarks: 8,
        aos: [{ ao: 'AO1', weight: 1.0 }],
        type: 'Summary',
        rubric: 'Summarise similarities or differences between two texts. Use evidence from both.',
        bandDescriptors: [
          { marks: [7, 8], desc: 'Band 4: Perceptive synthesis of both sources. Judicious references.' },
          { marks: [5, 6], desc: 'Band 3: Clear synthesis. Appropriate references from both.' },
          { marks: [3, 4], desc: 'Band 2: Some relevant points from both sources.' },
          { marks: [1, 2], desc: 'Band 1: Simple reference to one or both sources.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q3: {
        title: 'Analyse language use',
        maxMarks: 12,
        aos: [{ ao: 'AO2', weight: 1.0 }],
        type: 'Language Analysis',
        rubric: 'Analyse how the writer uses language to achieve effects. Use relevant terminology.',
        bandDescriptors: [
          { marks: [10, 12], desc: 'Band 4: Sustained, perceptive analysis. Sophisticated terminology. Judicious examples.' },
          { marks: [7, 9], desc: 'Band 3: Clear explanation of language effects. Accurate terminology.' },
          { marks: [4, 6], desc: 'Band 2: Some understanding of language. Some terminology.' },
          { marks: [1, 3], desc: 'Band 1: Simple awareness. Limited terminology.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q4: {
        title: 'Compare writers\' use of language',
        maxMarks: 16,
        aos: [{ ao: 'AO3', weight: 0.5 }, { ao: 'AO2', weight: 0.5 }],
        type: 'Comparison',
        rubric: 'Compare how the two writers use language to present their views. Analyse methods in both texts.',
        bandDescriptors: [
          { marks: [13, 16], desc: 'Band 4: Perceptive comparison. Detailed analysis of both. Convincing links.' },
          { marks: [9, 12], desc: 'Band 3: Clear comparison. Clear analysis. Appropriate references.' },
          { marks: [5, 8], desc: 'Band 2: Some comparison. Some analysis. Some references.' },
          { marks: [1, 4], desc: 'Band 1: Simple comparison. Limited reference.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q5: {
        title: 'Writing to present a viewpoint',
        maxMarks: 40,
        aos: [{ ao: 'AO5', weight: 0.6 }, { ao: 'AO6', weight: 0.4 }],
        type: 'Persuasive Writing',
        rubric: 'Write to present a viewpoint in a specified form. AO5 (24 marks): communication effectiveness. AO6 (16 marks): technical accuracy.',
        bandDescriptors: [
          { marks: [33, 40], desc: 'Band 6: Compelling, assured communication. Extensive vocabulary. Sustained crafting. Accurate throughout.' },
          { marks: [27, 32], desc: 'Band 5: Convincing communication. Sophisticated vocabulary. Effective crafting. Varied, accurate sentences.' },
          { marks: [21, 26], desc: 'Band 4: Clear communication. Varied vocabulary. Some crafting. Usually accurate.' },
          { marks: [15, 20], desc: 'Band 3: Connected communication. Varied vocabulary. Generally accurate.' },
          { marks: [7, 14], desc: 'Band 2: Simple communication. Simple vocabulary. Some accuracy.' },
          { marks: [1, 6], desc: 'Band 1: Limited communication. Frequent errors.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
    },
  },

  'OCR|English Language|Paper 2': {
    title: 'OCR English Language Paper 2: Exploring Effects and Impact',
    questions: {
      Q1: {
        title: 'Identify information',
        maxMarks: 4,
        aos: [{ ao: 'AO1', weight: 1.0 }],
        type: 'Information Retrieval',
        rubric: 'Identify four pieces of information from the source.',
        bandDescriptors: [
          { marks: [4, 4], desc: 'Four correct.' },
          { marks: [3, 3], desc: 'Three correct.' },
          { marks: [2, 2], desc: 'Two correct.' },
          { marks: [1, 1], desc: 'One correct.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q2: {
        title: 'How does the writer use language?',
        maxMarks: 8,
        aos: [{ ao: 'AO2', weight: 1.0 }],
        type: 'Language Analysis',
        rubric: 'Analyse the writer\'s use of language and its effects. Use terminology.',
        bandDescriptors: [
          { marks: [7, 8], desc: 'Band 4: Perceptive analysis. Sophisticated terminology. Judicious examples.' },
          { marks: [5, 6], desc: 'Band 3: Clear analysis. Accurate terminology.' },
          { marks: [3, 4], desc: 'Band 2: Some understanding. Some terminology.' },
          { marks: [1, 2], desc: 'Band 1: Simple awareness.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q3: {
        title: 'How does the writer structure the text?',
        maxMarks: 8,
        aos: [{ ao: 'AO2', weight: 1.0 }],
        type: 'Structure Analysis',
        rubric: 'Analyse structural features and their effects on the reader.',
        bandDescriptors: [
          { marks: [7, 8], desc: 'Band 4: Perceptive analysis of structure. Well-chosen examples.' },
          { marks: [5, 6], desc: 'Band 3: Clear explanation of structural features.' },
          { marks: [3, 4], desc: 'Band 2: Some understanding of structure.' },
          { marks: [1, 2], desc: 'Band 1: Simple awareness.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q4: {
        title: 'Evaluate critically',
        maxMarks: 20,
        aos: [{ ao: 'AO4', weight: 1.0 }],
        type: 'Critical Evaluation',
        rubric: 'Evaluate how effectively the writer achieves effects. Give a critical personal response.',
        bandDescriptors: [
          { marks: [17, 20], desc: 'Band 4: Perceptive evaluation. Convincing analysis. Judicious references.' },
          { marks: [13, 16], desc: 'Band 3: Clear evaluation. Thoughtful analysis. Appropriate references.' },
          { marks: [7, 12], desc: 'Band 2: Some evaluation. Some references.' },
          { marks: [1, 6], desc: 'Band 1: Limited evaluation. Limited reference.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q5: {
        title: 'Imaginative/creative writing',
        maxMarks: 40,
        aos: [{ ao: 'AO5', weight: 0.6 }, { ao: 'AO6', weight: 0.4 }],
        type: 'Creative Writing',
        rubric: 'Write creatively as directed. AO5 (24 marks): content and organisation. AO6 (16 marks): technical accuracy.',
        bandDescriptors: [
          { marks: [33, 40], desc: 'Band 6: Compelling writing. Sustained crafting. Accurate throughout.' },
          { marks: [27, 32], desc: 'Band 5: Convincing writing. Sophisticated vocabulary. Generally accurate.' },
          { marks: [21, 26], desc: 'Band 4: Clear, connected writing. Varied vocabulary. Usually accurate.' },
          { marks: [15, 20], desc: 'Band 3: Connected writing. Varied vocabulary. Generally accurate.' },
          { marks: [7, 14], desc: 'Band 2: Simple writing. Some accuracy.' },
          { marks: [1, 6], desc: 'Band 1: Limited writing. Frequent errors.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
    },
  },

  // ==========================================================================
  // OCR ENGLISH LITERATURE
  // ==========================================================================
  'OCR|English Literature|Paper 1': {
    title: 'OCR English Literature Paper 1: Exploring Modern and Literary Heritage Texts',
    questions: {
      'Section A': {
        title: 'Modern prose or drama (extract-based)',
        maxMarks: 40,
        aos: [{ ao: 'AO1', weight: 0.25 }, { ao: 'AO2', weight: 0.40 }, { ao: 'AO3', weight: 0.20 }, { ao: 'AO4', weight: 0.15 }],
        type: 'Literature Essay',
        rubric: 'Explore how the writer presents a theme/character. Write about the extract and the text as a whole.',
        bandDescriptors: [
          { marks: [33, 40], desc: 'Band 6: Sustained, perceptive response. Sophisticated analysis. Convincing context. Precise references.' },
          { marks: [27, 32], desc: 'Band 5: Thoughtful, exploratory response. Detailed analysis. Thoughtful context.' },
          { marks: [21, 26], desc: 'Band 4: Clear, sustained response. Clear analysis. Clear context.' },
          { marks: [13, 20], desc: 'Band 3: Some understanding. Some analysis. Some context.' },
          { marks: [7, 12], desc: 'Band 2: Simple response. Simple identification.' },
          { marks: [1, 6], desc: 'Band 1: Very limited response.' },
        ],
      },
      'Section B': {
        title: 'Literary heritage prose or drama (essay)',
        maxMarks: 40,
        aos: [{ ao: 'AO1', weight: 0.30 }, { ao: 'AO2', weight: 0.40 }, { ao: 'AO3', weight: 0.30 }],
        type: 'Literature Essay',
        rubric: 'Write about a theme/character in a literary heritage text. Discuss the whole text.',
        bandDescriptors: [
          { marks: [33, 40], desc: 'Band 6: Perceptive, sustained response. Sophisticated analysis of methods. Convincing context integration.' },
          { marks: [27, 32], desc: 'Band 5: Thoughtful response. Detailed analysis. Specific context links.' },
          { marks: [21, 26], desc: 'Band 4: Clear response. Clear analysis. Relevant context.' },
          { marks: [13, 20], desc: 'Band 3: Some understanding. Some analysis. Some context.' },
          { marks: [7, 12], desc: 'Band 2: Simple response. Simple identification. Simple context.' },
          { marks: [1, 6], desc: 'Band 1: Very limited response.' },
        ],
      },
    },
  },

  'OCR|English Literature|Paper 2': {
    title: 'OCR English Literature Paper 2: Poetry and Unseen Texts',
    questions: {
      'Section A': {
        title: 'Poetry anthology comparison',
        maxMarks: 30,
        aos: [{ ao: 'AO1', weight: 0.25 }, { ao: 'AO2', weight: 0.50 }, { ao: 'AO3', weight: 0.25 }],
        type: 'Comparison',
        rubric: 'Compare how poets present a theme in two poems. AO2 dominant.',
        bandDescriptors: [
          { marks: [25, 30], desc: 'Band 6: Perceptive comparison. Sophisticated analysis. Convincing context.' },
          { marks: [19, 24], desc: 'Band 5: Thoughtful comparison. Detailed analysis. Relevant context.' },
          { marks: [13, 18], desc: 'Band 4: Clear comparison. Clear analysis. Clear context.' },
          { marks: [7, 12], desc: 'Band 3: Some comparison. Some analysis. Some context.' },
          { marks: [4, 6], desc: 'Band 2: Simple comparison. Simple identification.' },
          { marks: [1, 3], desc: 'Band 1: Very limited response.' },
        ],
      },
      'Section B': {
        title: 'Unseen poetry',
        maxMarks: 30,
        aos: [{ ao: 'AO1', weight: 0.30 }, { ao: 'AO2', weight: 0.70 }],
        type: 'Language Analysis',
        rubric: 'Analyse an unseen poem, then compare with a second. AO2 dominant.',
        bandDescriptors: [
          { marks: [25, 30], desc: 'Band 6: Perceptive analysis. Sophisticated terminology. Effective comparison.' },
          { marks: [19, 24], desc: 'Band 5: Detailed analysis. Accurate terminology. Clear comparison.' },
          { marks: [13, 18], desc: 'Band 4: Clear analysis. Appropriate terminology. Some comparison.' },
          { marks: [7, 12], desc: 'Band 3: Some analysis. Some terminology. Simple comparison.' },
          { marks: [4, 6], desc: 'Band 2: Simple identification. Limited comparison.' },
          { marks: [1, 3], desc: 'Band 1: Very limited response.' },
        ],
      },
    },
  },

  // ==========================================================================
  // WJEC ENGLISH LANGUAGE
  // ==========================================================================
  'WJEC|English Language|Paper 1': {
    title: 'WJEC English Language Component 1: 20th Century Literature Reading and Creative Prose Writing',
    questions: {
      Q1: {
        title: 'Retrieval from a literary text',
        maxMarks: 5,
        aos: [{ ao: 'AO1', weight: 1.0 }],
        type: 'Information Retrieval',
        rubric: 'Retrieve and identify key information from a literary source text.',
        bandDescriptors: [
          { marks: [5, 5], desc: 'All five points identified correctly.' },
          { marks: [4, 4], desc: 'Four points identified.' },
          { marks: [3, 3], desc: 'Three points identified.' },
          { marks: [2, 2], desc: 'Two points identified.' },
          { marks: [1, 1], desc: 'One point identified.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q2: {
        title: 'How does the writer create mood/atmosphere/character?',
        maxMarks: 10,
        aos: [{ ao: 'AO2', weight: 1.0 }],
        type: 'Language Analysis',
        rubric: 'Analyse the writer\'s use of language to achieve a particular effect. Use appropriate terminology.',
        bandDescriptors: [
          { marks: [9, 10], desc: 'Band 5: Detailed and perceptive analysis. Sophisticated terminology. Precise examples.' },
          { marks: [7, 8], desc: 'Band 4: Thorough analysis. Accurate terminology. Well-chosen examples.' },
          { marks: [5, 6], desc: 'Band 3: Clear analysis. Appropriate terminology. Relevant examples.' },
          { marks: [3, 4], desc: 'Band 2: Some relevant comment. Some terminology.' },
          { marks: [1, 2], desc: 'Band 1: Simple awareness. Limited comment.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q3: {
        title: 'What impressions do you get...?',
        maxMarks: 10,
        aos: [{ ao: 'AO1', weight: 0.5 }, { ao: 'AO2', weight: 0.5 }],
        type: 'Language Analysis',
        rubric: 'Give your impressions supported by references. Comment on what the writer does and how.',
        bandDescriptors: [
          { marks: [9, 10], desc: 'Band 5: Perceptive impressions with detailed analysis. Judicious references.' },
          { marks: [7, 8], desc: 'Band 4: Thoughtful impressions with clear analysis. Apt references.' },
          { marks: [5, 6], desc: 'Band 3: Clear impressions with some analysis. Relevant references.' },
          { marks: [3, 4], desc: 'Band 2: Some impressions with some references.' },
          { marks: [1, 2], desc: 'Band 1: Simple impressions. Limited reference.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q4: {
        title: 'Evaluate the text critically',
        maxMarks: 10,
        aos: [{ ao: 'AO4', weight: 1.0 }],
        type: 'Critical Evaluation',
        rubric: 'Evaluate how successfully the writer achieves effects. Give a critical personal response.',
        bandDescriptors: [
          { marks: [9, 10], desc: 'Band 5: Perceptive evaluation. Convincing personal response. Precise references.' },
          { marks: [7, 8], desc: 'Band 4: Thoughtful evaluation. Clear response. Apt references.' },
          { marks: [5, 6], desc: 'Band 3: Clear evaluation. Some personal response. Relevant references.' },
          { marks: [3, 4], desc: 'Band 2: Some evaluative comment. Limited references.' },
          { marks: [1, 2], desc: 'Band 1: Simple comment. Minimal reference.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q5: {
        title: 'Creative prose writing',
        maxMarks: 40,
        aos: [{ ao: 'AO5', weight: 0.6 }, { ao: 'AO6', weight: 0.4 }],
        type: 'Creative Writing',
        rubric: 'Write creatively as directed. AO5 (24 marks): content, organisation. AO6 (16 marks): accuracy.',
        bandDescriptors: [
          { marks: [33, 40], desc: 'Band 6: Compelling writing. Sophisticated vocabulary. Sustained crafting. Accurate throughout.' },
          { marks: [27, 32], desc: 'Band 5: Convincing writing. Varied vocabulary. Effective crafting. Generally accurate.' },
          { marks: [21, 26], desc: 'Band 4: Clear, connected writing. Varied vocabulary. Some crafting. Usually accurate.' },
          { marks: [15, 20], desc: 'Band 3: Connected writing. Some vocabulary range. Generally accurate.' },
          { marks: [7, 14], desc: 'Band 2: Simple writing. Simple vocabulary. Some accuracy.' },
          { marks: [1, 6], desc: 'Band 1: Limited writing. Frequent errors.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
    },
  },

  'WJEC|English Language|Paper 2': {
    title: 'WJEC English Language Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    questions: {
      Q1: {
        title: 'Retrieval from a non-fiction text',
        maxMarks: 5,
        aos: [{ ao: 'AO1', weight: 1.0 }],
        type: 'Information Retrieval',
        rubric: 'Identify and interpret information from the source.',
        bandDescriptors: [
          { marks: [5, 5], desc: 'Five correct.' },
          { marks: [4, 4], desc: 'Four correct.' },
          { marks: [3, 3], desc: 'Three correct.' },
          { marks: [2, 2], desc: 'Two correct.' },
          { marks: [1, 1], desc: 'One correct.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q2: {
        title: 'How does the writer use language and structure?',
        maxMarks: 10,
        aos: [{ ao: 'AO2', weight: 1.0 }],
        type: 'Language Analysis',
        rubric: 'Analyse the writer\'s use of language and structure. Use terminology.',
        bandDescriptors: [
          { marks: [9, 10], desc: 'Band 5: Perceptive analysis. Sophisticated terminology. Precise examples.' },
          { marks: [7, 8], desc: 'Band 4: Thorough analysis. Accurate terminology.' },
          { marks: [5, 6], desc: 'Band 3: Clear analysis. Appropriate terminology.' },
          { marks: [3, 4], desc: 'Band 2: Some comment. Some terminology.' },
          { marks: [1, 2], desc: 'Band 1: Simple awareness.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q3: {
        title: 'Summary of two texts',
        maxMarks: 10,
        aos: [{ ao: 'AO1', weight: 1.0 }],
        type: 'Summary',
        rubric: 'Summarise the differences or similarities between the two texts.',
        bandDescriptors: [
          { marks: [9, 10], desc: 'Band 5: Perceptive synthesis. Judicious references from both.' },
          { marks: [7, 8], desc: 'Band 4: Thoughtful synthesis. Apt references.' },
          { marks: [5, 6], desc: 'Band 3: Clear synthesis. Relevant references.' },
          { marks: [3, 4], desc: 'Band 2: Some linking of sources.' },
          { marks: [1, 2], desc: 'Band 1: Simple reference.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q4: {
        title: 'Compare how writers present their ideas/perspectives',
        maxMarks: 10,
        aos: [{ ao: 'AO3', weight: 0.6 }, { ao: 'AO2', weight: 0.4 }],
        type: 'Comparison',
        rubric: 'Compare the writers\' presentation of ideas and perspectives across both texts.',
        bandDescriptors: [
          { marks: [9, 10], desc: 'Band 5: Perceptive comparison. Detailed analysis. Convincing links.' },
          { marks: [7, 8], desc: 'Band 4: Thoughtful comparison. Clear analysis.' },
          { marks: [5, 6], desc: 'Band 3: Clear comparison. Some analysis.' },
          { marks: [3, 4], desc: 'Band 2: Some comparison. Some references.' },
          { marks: [1, 2], desc: 'Band 1: Simple or sequential treatment.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
      Q5: {
        title: 'Transactional/persuasive writing',
        maxMarks: 40,
        aos: [{ ao: 'AO5', weight: 0.6 }, { ao: 'AO6', weight: 0.4 }],
        type: 'Persuasive Writing',
        rubric: 'Write to persuade/argue/advise in a specified form. AO5 (24 marks): content. AO6 (16 marks): accuracy.',
        bandDescriptors: [
          { marks: [33, 40], desc: 'Band 6: Compelling communication. Ambitious vocabulary. Sustained crafting. Accurate throughout.' },
          { marks: [27, 32], desc: 'Band 5: Convincing communication. Sophisticated vocabulary. Effective crafting. Accurate.' },
          { marks: [21, 26], desc: 'Band 4: Clear communication. Varied vocabulary. Some crafting. Usually accurate.' },
          { marks: [15, 20], desc: 'Band 3: Connected communication. Some vocabulary range. Generally accurate.' },
          { marks: [7, 14], desc: 'Band 2: Simple communication. Simple vocabulary. Some accuracy.' },
          { marks: [1, 6], desc: 'Band 1: Limited communication. Frequent errors.' },
          { marks: [0, 0], desc: 'Nothing worthy of credit.' },
        ],
      },
    },
  },

  // ==========================================================================
  // WJEC ENGLISH LITERATURE
  // ==========================================================================
  'WJEC|English Literature|Paper 1': {
    title: 'WJEC English Literature Component 1: Shakespeare and Poetry',
    questions: {
      'Section A': {
        title: 'Shakespeare (extract + essay)',
        maxMarks: 40,
        aos: [{ ao: 'AO1', weight: 0.25 }, { ao: 'AO2', weight: 0.40 }, { ao: 'AO3', weight: 0.20 }, { ao: 'AO4', weight: 0.15 }],
        type: 'Literature Essay',
        rubric: 'Write about the extract and the play as a whole. AO1: response, AO2: methods, AO3: context, AO4: evaluation + SPaG.',
        bandDescriptors: [
          { marks: [33, 40], desc: 'Band 6: Detailed, perceptive response. Sophisticated analysis. Convincing context. Judicious references.' },
          { marks: [27, 32], desc: 'Band 5: Thoughtful response. Detailed analysis. Thoughtful context. Apt references.' },
          { marks: [21, 26], desc: 'Band 4: Clear response. Clear analysis. Clear context. Effective references.' },
          { marks: [13, 20], desc: 'Band 3: Some understanding. Some analysis. Some context.' },
          { marks: [7, 12], desc: 'Band 2: Simple response. Simple identification.' },
          { marks: [1, 6], desc: 'Band 1: Very limited response.' },
        ],
      },
      'Section B': {
        title: 'Poetry comparison (anthology)',
        maxMarks: 30,
        aos: [{ ao: 'AO1', weight: 0.25 }, { ao: 'AO2', weight: 0.50 }, { ao: 'AO3', weight: 0.25 }],
        type: 'Comparison',
        rubric: 'Compare two poems from the anthology. AO2 dominant — focus on poetic methods.',
        bandDescriptors: [
          { marks: [25, 30], desc: 'Band 6: Perceptive comparison. Sophisticated analysis. Convincing context.' },
          { marks: [19, 24], desc: 'Band 5: Thoughtful comparison. Detailed analysis. Relevant context.' },
          { marks: [13, 18], desc: 'Band 4: Clear comparison. Clear analysis. Clear context.' },
          { marks: [7, 12], desc: 'Band 3: Some comparison. Some analysis.' },
          { marks: [4, 6], desc: 'Band 2: Simple comparison.' },
          { marks: [1, 3], desc: 'Band 1: Very limited.' },
        ],
      },
    },
  },

  'WJEC|English Literature|Paper 2': {
    title: 'WJEC English Literature Component 2: Post-1914 Prose/Drama and Unseen Poetry',
    questions: {
      'Section A': {
        title: 'Post-1914 prose/drama (extract-based)',
        maxMarks: 40,
        aos: [{ ao: 'AO1', weight: 0.30 }, { ao: 'AO2', weight: 0.35 }, { ao: 'AO3', weight: 0.20 }, { ao: 'AO4', weight: 0.15 }],
        type: 'Literature Essay',
        rubric: 'Write about the extract and the text as a whole. All four AOs assessed.',
        bandDescriptors: [
          { marks: [33, 40], desc: 'Band 6: Perceptive, sustained response. Sophisticated analysis. Convincing context.' },
          { marks: [27, 32], desc: 'Band 5: Thoughtful response. Detailed analysis. Relevant context.' },
          { marks: [21, 26], desc: 'Band 4: Clear response. Clear analysis. Clear context.' },
          { marks: [13, 20], desc: 'Band 3: Some understanding. Some analysis. Some context.' },
          { marks: [7, 12], desc: 'Band 2: Simple response.' },
          { marks: [1, 6], desc: 'Band 1: Very limited response.' },
        ],
      },
      'Section B': {
        title: 'Unseen poetry (analysis + comparison)',
        maxMarks: 30,
        aos: [{ ao: 'AO1', weight: 0.30 }, { ao: 'AO2', weight: 0.70 }],
        type: 'Language Analysis',
        rubric: 'Part 1: Analyse an unseen poem. Part 2: Compare with a second poem. AO2 dominant.',
        bandDescriptors: [
          { marks: [25, 30], desc: 'Band 6: Perceptive analysis. Sophisticated terminology. Effective comparison.' },
          { marks: [19, 24], desc: 'Band 5: Detailed analysis. Accurate terminology. Clear comparison.' },
          { marks: [13, 18], desc: 'Band 4: Clear analysis. Appropriate terminology. Some comparison.' },
          { marks: [7, 12], desc: 'Band 3: Some analysis. Some terminology. Simple comparison.' },
          { marks: [4, 6], desc: 'Band 2: Simple identification.' },
          { marks: [1, 3], desc: 'Band 1: Very limited response.' },
        ],
      },
    },
  },
};


// ============================================================================
// SECTION 3: QUESTION TYPE TO AO MAPPING (default fallback)
// ============================================================================

const QUESTION_AO_MAP = {
  'Information Retrieval': { aos: [{ ao: 'AO1', weight: 1 }] },
  'Language Analysis': { aos: [{ ao: 'AO2', weight: 1 }] },
  'Structure Analysis': { aos: [{ ao: 'AO2', weight: 1 }] },
  'Comparison': { aos: [{ ao: 'AO3', weight: 0.6 }, { ao: 'AO1', weight: 0.4 }] },
  'Creative Writing': { aos: [{ ao: 'AO5', weight: 0.6 }, { ao: 'AO6', weight: 0.4 }] },
  'Persuasive Writing': { aos: [{ ao: 'AO5', weight: 0.6 }, { ao: 'AO6', weight: 0.4 }] },
  'Critical Evaluation': { aos: [{ ao: 'AO4', weight: 1 }] },
  'Literature Essay': { aos: [{ ao: 'AO1', weight: 0.25 }, { ao: 'AO2', weight: 0.35 }, { ao: 'AO3', weight: 0.25 }, { ao: 'AO4', weight: 0.15 }] },
  'Summary': { aos: [{ ao: 'AO1', weight: 1 }] },
};

/**
 * Map a question type string (which may include parenthetical info) to a canonical type.
 */
function resolveQuestionType(questionType) {
  if (!questionType) return 'Language Analysis';

  const lower = questionType.toLowerCase();

  if (lower.includes('retrieval') || lower.includes('list four') || lower.includes('choose four') || lower.includes('true or false') || lower.includes('identify')) {
    return 'Information Retrieval';
  }
  if (lower.includes('creative writing') || lower.includes('descriptive') || lower.includes('narrative') || lower.includes('imaginative')) {
    return 'Creative Writing';
  }
  if (lower.includes('persuasive') || lower.includes('argumentative') || lower.includes('speech') || lower.includes('letter to') || lower.includes('article') || lower.includes('transactional')) {
    return 'Persuasive Writing';
  }
  if (lower.includes('comparison') || lower.includes('compare') || lower.includes('both sources') || lower.includes('both poems') || lower.includes('both writers')) {
    return 'Comparison';
  }
  if (lower.includes('structure')) {
    return 'Structure Analysis';
  }
  if (lower.includes('language analysis') || lower.includes('how does the writer use language')) {
    return 'Language Analysis';
  }
  if (lower.includes('evaluat') || lower.includes('to what extent') || lower.includes('how far do you agree')) {
    return 'Critical Evaluation';
  }
  if (lower.includes('literature') || lower.includes('essay') || lower.includes('how does') || lower.includes('explore how') || lower.includes('character') || lower.includes('theme')) {
    return 'Literature Essay';
  }
  if (lower.includes('summary') || lower.includes('summarise') || lower.includes('differences') || lower.includes('similarities')) {
    return 'Summary';
  }

  return 'Language Analysis';
}


// ============================================================================
// SECTION 4: AO SCORING LOGIC
// ============================================================================

/**
 * Calculate a raw score (0-5) for a given AO using weighted analysis scores.
 * Enhanced to include literature-specific analysers when relevant.
 */
function calculateAOScore(ao, scores, isLiterature) {
  const languageWeights = {
    AO1: {
      quotationUsage: 0.4,
      effectAnalysis: 0.3,
      vocabularySophistication: 0.3,
    },
    AO2: {
      subjectTerminology: 0.3,
      effectAnalysis: 0.3,
      quotationUsage: 0.2,
      structuralAwareness: 0.2,
    },
    AO3: {
      comparisonSkills: 0.3,
      contextualKnowledge: 0.3,
      quotationUsage: 0.2,
      effectAnalysis: 0.2,
    },
    AO4: {
      effectAnalysis: 0.4,
      quotationUsage: 0.3,
      vocabularySophistication: 0.3,
    },
    AO5: {
      creativeWritingFeatures: 0.25,
      vocabularySophistication: 0.25,
      paragraphStructure: 0.2,
      sentenceVariety: 0.15,
      structuralAwareness: 0.15,
    },
    AO6: {
      spellingAccuracy: 0.35,
      punctuationRange: 0.35,
      sentenceVariety: 0.3,
    },
  };

  const literatureWeights = {
    AO1: {
      quotationUsage: 0.25,
      textSpecificKnowledge: 0.25,
      characterAnalysis: 0.20,
      themeExploration: 0.15,
      vocabularySophistication: 0.15,
    },
    AO2: {
      writersMethods: 0.30,
      subjectTerminology: 0.25,
      effectAnalysis: 0.25,
      structuralAwareness: 0.20,
    },
    AO3: {
      contextualKnowledge: 0.40,
      themeExploration: 0.25,
      textSpecificKnowledge: 0.20,
      quotationUsage: 0.15,
    },
    AO4: {
      effectAnalysis: 0.30,
      characterAnalysis: 0.20,
      themeExploration: 0.20,
      quotationUsage: 0.15,
      vocabularySophistication: 0.15,
    },
    AO5: {
      creativeWritingFeatures: 0.25,
      vocabularySophistication: 0.25,
      paragraphStructure: 0.2,
      sentenceVariety: 0.15,
      structuralAwareness: 0.15,
    },
    AO6: {
      spellingAccuracy: 0.35,
      punctuationRange: 0.35,
      sentenceVariety: 0.3,
    },
  };

  const weights = isLiterature ? literatureWeights : languageWeights;
  const aoWeights = weights[ao];
  if (!aoWeights) return 0;

  let totalScore = 0;
  for (const [metric, weight] of Object.entries(aoWeights)) {
    let value = scores[metric] ?? 0;

    // Special handling for spelling accuracy (percentage -> 0-5 scale)
    if (metric === 'spellingAccuracy') {
      value = (value / 100) * 5;
    }

    totalScore += value * weight;
  }

  return Math.round(totalScore * 100) / 100;
}


// ============================================================================
// SECTION 5: BEST FIT BAND PLACEMENT
// ============================================================================

/**
 * Given an AO raw score (0-5) and the board's band descriptors for that AO,
 * determine the best-fit band and calculate the scaled marks.
 *
 * Best-fit approach: if a response sits across two bands, the overall quality
 * determines placement. The band whose descriptors best match the majority
 * of the qualities is selected.
 */
function bestFitBand(rawScore, aoDescriptors, totalMarks) {
  if (!aoDescriptors || !aoDescriptors.bands || aoDescriptors.bands.length === 0) {
    return { band: 1, marks: 0, maxMarks: totalMarks, percentage: 0, bandDesc: '' };
  }

  const bands = aoDescriptors.bands;
  const maxBand = bands[0].band;

  // Convert raw score (0-5) to a percentage
  const percentage = (rawScore / 5) * 100;

  // Find the best-fit band based on percentage thresholds
  // Bands are ordered highest to lowest
  let selectedBand = bands[bands.length - 1]; // Default to lowest

  for (const band of bands) {
    const bandLowPercentage = (band.marks[0] / bands[0].marks[1]) * 100;

    if (percentage >= bandLowPercentage) {
      selectedBand = band;
      break;
    }
  }

  // Best-fit adjustment: if the response is within 5% of the boundary between
  // two bands, check if the overall quality "tips" into the higher band.
  // This simulates examiner discretion.
  const selectedIndex = bands.indexOf(selectedBand);
  if (selectedIndex > 0) {
    const higherBand = bands[selectedIndex - 1];
    const higherBandLow = (higherBand.marks[0] / bands[0].marks[1]) * 100;
    if (percentage >= higherBandLow - 5) {
      // Within the "borderline" zone — could go either way
      // The raw score's fractional position helps decide
      const midPoint = (higherBandLow + (higherBand.marks[1] / bands[0].marks[1]) * 100) / 2;
      if (percentage >= midPoint - 8) {
        selectedBand = higherBand;
      }
    }
  }

  // Scale the marks to the question's total marks for this AO
  const scaledMarks = Math.round((percentage / 100) * totalMarks);
  const clampedMarks = Math.max(0, Math.min(totalMarks, scaledMarks));

  return {
    band: selectedBand.band,
    maxBand: maxBand,
    marks: clampedMarks,
    maxMarks: totalMarks,
    percentage: Math.round(percentage),
    bandDesc: selectedBand.desc,
    bandLabel: selectedBand.label,
  };
}


// ============================================================================
// SECTION 6: GRADE CALCULATION
// ============================================================================

/**
 * Convert a percentage to a GCSE grade (1-9).
 */
function percentageToGrade(percentage, board) {
  if (board === 'Edexcel IGCSE') {
    return percentageToIGCSEGrade(percentage);
  }

  if (percentage >= 90) return 'Grade 9';
  if (percentage >= 80) return 'Grade 8';
  if (percentage >= 70) return 'Grade 7';
  if (percentage >= 60) return 'Grade 6';
  if (percentage >= 50) return 'Grade 5';
  if (percentage >= 40) return 'Grade 4';
  if (percentage >= 30) return 'Grade 3';
  if (percentage >= 20) return 'Grade 2';
  return 'Grade 1';
}

/**
 * Convert a percentage to an IGCSE letter grade.
 */
function percentageToIGCSEGrade(percentage) {
  if (percentage >= 90) return 'A*';
  if (percentage >= 80) return 'A';
  if (percentage >= 70) return 'B';
  if (percentage >= 60) return 'C';
  if (percentage >= 50) return 'D';
  if (percentage >= 40) return 'E';
  if (percentage >= 30) return 'F';
  return 'G';
}

/**
 * Extract the numeric grade value for capping purposes.
 */
function gradeToNumber(grade) {
  if (!grade) return 1;
  const match = grade.match(/Grade\s*(\d)/);
  if (match) return parseInt(match[1], 10);
  // IGCSE grades
  const igcseMap = { 'A*': 9, 'A': 8, 'B': 7, 'C': 6, 'D': 5, 'E': 4, 'F': 3, 'G': 2 };
  return igcseMap[grade] || 1;
}

/**
 * Convert a numeric grade value back to a grade string.
 */
function numberToGrade(num, board) {
  if (board === 'Edexcel IGCSE') {
    const igcseGrades = { 9: 'A*', 8: 'A', 7: 'B', 6: 'C', 5: 'D', 4: 'E', 3: 'F', 2: 'G', 1: 'G' };
    return igcseGrades[num] || 'G';
  }
  return `Grade ${Math.max(1, Math.min(9, num))}`;
}


// ============================================================================
// SECTION 7: LENGTH FACTOR
// ============================================================================

/**
 * Apply a length-based grade cap and bonus.
 * Returns { gradeCap, bonus }.
 */
function calculateLengthFactor(answer) {
  const wordCount = (answer || '').split(/\s+/).filter(w => w.length > 0).length;

  let gradeCap = 9; // No cap by default
  let bonus = 0;

  if (wordCount < 50) {
    gradeCap = 3;
  } else if (wordCount < 100) {
    gradeCap = 5;
  } else if (wordCount < 200) {
    gradeCap = 7;
  } else if (wordCount >= 400) {
    bonus = 2; // Small percentage bonus for sustained writing
  }

  return { gradeCap, bonus, wordCount };
}


// ============================================================================
// SECTION 8: ENHANCED FEEDBACK GENERATION
// ============================================================================

/**
 * Generate 3+ specific strengths based on highest scoring areas,
 * with evidence from the student's answer where possible.
 */
function generateStrengths(scores, answer, resolvedType, isLiterature) {
  const strengths = [];

  const scoreMap = [
    { key: 'quotationUsage', min: 3, msg: 'Effective use of textual references, with quotations embedded into analysis rather than bolted on.' },
    { key: 'quotationUsage', min: 2, msg: 'Some use of textual references to support points made.' },
    { key: 'subjectTerminology', min: 3, msg: 'Good range of subject-specific terminology used accurately to discuss the writer\'s methods.' },
    { key: 'subjectTerminology', min: 2, msg: 'Some appropriate subject terminology used to support analysis.' },
    { key: 'effectAnalysis', min: 3, msg: 'Thoughtful exploration of the effects of the writer\'s choices on the reader, going beyond surface-level identification.' },
    { key: 'effectAnalysis', min: 2, msg: 'Some attempt to explain the effects of the writer\'s choices.' },
    { key: 'structuralAwareness', min: 3, msg: 'Clear awareness of structural features and how the text is organised for effect.' },
    { key: 'comparisonSkills', min: 3, msg: 'Effective comparison skills demonstrated, with both texts addressed and comparative connectives used fluently.' },
    { key: 'vocabularySophistication', min: 3, msg: 'A varied and often sophisticated vocabulary that enhances the quality of expression.' },
    { key: 'sentenceVariety', min: 3, msg: 'Good variety of sentence forms used for deliberate effect, including both short and complex structures.' },
    { key: 'punctuationRange', min: 3, msg: 'A range of punctuation used accurately, including more ambitious marks such as semicolons and colons.' },
    { key: 'paragraphStructure', min: 3, msg: 'Well-organised response with clear paragraph structure and logical progression of ideas.' },
    { key: 'creativeWritingFeatures', min: 3, msg: 'Effective use of creative writing techniques including sensory detail and figurative language.' },
    { key: 'contextualKnowledge', min: 3, msg: 'Thoughtful consideration of relevant contextual factors, linking them convincingly to the text.' },
  ];

  // Literature-specific strengths
  if (isLiterature) {
    scoreMap.push(
      { key: 'characterAnalysis', min: 3, msg: 'Perceptive character analysis demonstrating understanding of motivation, development, and relationships.' },
      { key: 'characterAnalysis', min: 2, msg: 'Some understanding of character shown through discussion of behaviour and motivation.' },
      { key: 'themeExploration', min: 3, msg: 'Thoughtful exploration of key themes, linking them to the writer\'s wider purpose and message.' },
      { key: 'themeExploration', min: 2, msg: 'Some awareness of relevant themes demonstrated.' },
      { key: 'writersMethods', min: 3, msg: 'Detailed analysis of the writer\'s methods, including consideration of form and its effects.' },
      { key: 'writersMethods', min: 2, msg: 'Some discussion of the writer\'s methods and their purposes.' },
      { key: 'textSpecificKnowledge', min: 3, msg: 'Confident knowledge of the text demonstrated through precise references to specific moments, characters, and events.' },
      { key: 'textSpecificKnowledge', min: 2, msg: 'Some relevant knowledge of the text shown through references to key moments.' },
    );
  }

  for (const { key, min, msg } of scoreMap) {
    if ((scores[key] ?? 0) >= min && strengths.length < 5) {
      strengths.push(msg);
    }
  }

  // Try to add evidence from the answer
  if (answer && strengths.length > 0) {
    // Find embedded quotes in the student's answer as evidence of good practice
    const quotes = answer.match(/"([^"]{5,40})"/g) || answer.match(/'([^']{5,40})'/g) || [];
    if (quotes.length > 0 && strengths.length < 5) {
      const sampleQuote = quotes[0];
      strengths.push(`Good practice seen in your use of embedded references such as ${sampleQuote}, which is woven into your analysis rather than left as a standalone quotation.`);
    }
  }

  // Ensure at least 3 strengths
  if (strengths.length < 3) {
    const wordCount = (answer || '').split(/\s+/).filter(w => w.length > 0).length;
    if (wordCount >= 100) {
      strengths.push('A sustained attempt to engage with the question, demonstrating willingness to develop ideas.');
    }
    if (strengths.length < 3) {
      strengths.push('Some relevant ideas presented in response to the question set.');
    }
    if (strengths.length < 3) {
      strengths.push('An attempt to address the question directly, showing basic understanding of the task.');
    }
  }

  return strengths.slice(0, 5);
}

/**
 * Generate 3+ specific improvements based on lowest scoring areas.
 */
function generateImprovements(scores, answer, grade, resolvedType, isLiterature) {
  const improvements = [];

  const improvementMap = [
    { key: 'quotationUsage', max: 2, msg: 'Embed short, precise quotations into your sentences rather than using long, bolt-on quotes. Aim for at least 3-4 well-chosen references per paragraph.' },
    { key: 'subjectTerminology', max: 2, msg: 'Use a wider range of subject-specific terminology (e.g., metaphor, semantic field, juxtaposition) to label the writer\'s techniques precisely.' },
    { key: 'effectAnalysis', max: 2, msg: 'Develop your analysis of effects — don\'t just identify what the writer does, but explain WHY they do it and HOW it affects the reader. Use phrases like "this suggests..." or "the reader is positioned to feel...".' },
    { key: 'structuralAwareness', max: 2, msg: 'Consider how the text is structured — comment on shifts in focus, pace, or tone, and how the writer uses the beginning and ending for deliberate effect.' },
    { key: 'comparisonSkills', max: 2, msg: 'Ensure both texts are compared throughout, not addressed separately. Use comparative connectives such as "whereas", "in contrast", and "similarly".' },
    { key: 'vocabularySophistication', max: 2, msg: 'Aim for more ambitious and precise vocabulary choices. Instead of "good" or "nice", use words like "compelling", "evocative", or "nuanced".' },
    { key: 'sentenceVariety', max: 2, msg: 'Vary your sentence structures more deliberately. Use short sentences for emphasis and longer, complex sentences for developed analysis.' },
    { key: 'punctuationRange', max: 2, msg: 'Extend your range of punctuation — try using semicolons to link related ideas, colons to introduce explanations, and dashes for parenthetical asides.' },
    { key: 'paragraphStructure', max: 2, msg: 'Organise your response into clear, well-developed paragraphs. Each paragraph should focus on one main point, with a clear topic sentence.' },
    { key: 'creativeWritingFeatures', max: 2, msg: 'Include more creative techniques such as sensory details (sight, sound, smell, taste, touch), figurative language, and varied openings.' },
    { key: 'contextualKnowledge', max: 2, msg: 'Integrate relevant contextual knowledge — consider the historical, social, or literary context and link it to the writer\'s purpose.' },
  ];

  // Literature-specific improvements
  if (isLiterature) {
    improvementMap.push(
      { key: 'characterAnalysis', max: 2, msg: 'Develop your character analysis — explore motivations, track how characters change across the text, and consider their relationships with others. Go beyond describing what a character does to explore why and what this reveals.' },
      { key: 'themeExploration', max: 2, msg: 'Explore themes in more depth — connect individual moments to the writer\'s broader message. Consider how themes develop across the whole text, not just in isolated sections.' },
      { key: 'writersMethods', max: 2, msg: 'Analyse the writer\'s methods more closely — consider why specific choices of language, form, and structure have been made. Discuss the effect of genre conventions, dramatic devices, or narrative techniques.' },
      { key: 'textSpecificKnowledge', max: 2, msg: 'Demonstrate stronger text knowledge — reference specific acts/scenes/chapters, key moments, and turning points. The more precisely you can pinpoint evidence, the more convincing your argument becomes.' },
    );
  }

  // Spelling accuracy treated specially
  if (scores.spellingAccuracy < 90) {
    improvements.push('Review your spelling, particularly of common words and homophones (their/there/they\'re, its/it\'s). Proofread carefully before finishing.');
  }

  for (const { key, max, msg } of improvementMap) {
    if ((scores[key] ?? 5) <= max && improvements.length < 5) {
      improvements.push(msg);
    }
  }

  // Ensure at least 3 improvements
  if (improvements.length < 3) {
    improvements.push('Continue to develop the depth of your analysis — aim to move beyond identification to sustained, perceptive exploration.');
    if (improvements.length < 3) {
      improvements.push('Extend your responses to demonstrate your skills more fully across the mark scheme criteria.');
    }
    if (improvements.length < 3) {
      improvements.push('Re-read your answer before finishing to check that each paragraph makes a clear, distinct point supported by evidence.');
    }
  }

  return improvements.slice(0, 5);
}

/**
 * Generate "What would push this to the next grade" section.
 */
function generateNextGradeTargets(scores, grade, resolvedType, isLiterature, board) {
  const gradeNum = gradeToNumber(grade);
  const nextGrade = numberToGrade(Math.min(9, gradeNum + 1), board);

  if (gradeNum >= 9) {
    return {
      targetGrade: grade,
      targets: ['This is already performing at the highest grade. To maintain this standard, continue to develop conceptualised, critical responses with judicious references and perceptive analysis throughout.'],
    };
  }

  const targets = [];

  if (gradeNum <= 3) {
    targets.push('Use specific textual references (quotations) to support every point you make.');
    targets.push('Explain the effects of the writer\'s choices rather than simply describing what happens.');
    targets.push('Write in clear paragraphs, each focusing on a single analytical point.');
  } else if (gradeNum <= 5) {
    targets.push('Move from "clear" to "detailed" analysis by exploring multiple possible meanings and connotations of language choices.');
    targets.push('Embed short quotations fluently within your sentences rather than adding them separately.');
    if (isLiterature) {
      targets.push('Integrate contextual knowledge more seamlessly — link it to the writer\'s purpose rather than adding it as a separate paragraph.');
      targets.push('Track how the writer develops themes and characters across the whole text, not just in individual moments.');
    } else {
      targets.push('Consider the writer\'s overall purpose and how individual language choices contribute to this.');
      targets.push('Use a wider range of subject terminology accurately and purposefully.');
    }
  } else if (gradeNum <= 7) {
    targets.push('Develop a conceptualised argument that runs through your entire response, rather than analysing point by point.');
    targets.push('Use more exploratory, tentative language: "Perhaps..." "It could be argued..." "This might suggest..." to show critical thinking.');
    if (isLiterature) {
      targets.push('Weave context into every analytical point rather than treating it as a separate strand.');
      targets.push('Consider alternative interpretations and critical perspectives to add depth.');
    } else {
      targets.push('Analyse the cumulative effect of language choices — how do they work together to build meaning?');
      targets.push('Show awareness of how the whole text is crafted by the writer, considering the relationship between individual choices and the text\'s overall effect.');
    }
  } else {
    targets.push('Sustain a critical, conceptualised argument across the entire response without losing focus.');
    targets.push('Every reference should be judicious — choose the most revealing textual detail, not just relevant ones.');
    targets.push('Demonstrate that your response could not be written about any text — make it uniquely specific to this one.');
  }

  return { targetGrade: nextGrade, targets };
}

/**
 * Generate a model sentence showing how to improve a specific weak point.
 */
function generateModelSentence(scores, resolvedType, isLiterature) {
  // Find the weakest area
  const analysisScores = [
    { key: 'quotationUsage', score: scores.quotationUsage ?? 0 },
    { key: 'subjectTerminology', score: scores.subjectTerminology ?? 0 },
    { key: 'effectAnalysis', score: scores.effectAnalysis ?? 0 },
    { key: 'contextualKnowledge', score: scores.contextualKnowledge ?? 0 },
  ];

  if (isLiterature) {
    analysisScores.push(
      { key: 'characterAnalysis', score: scores.characterAnalysis ?? 0 },
      { key: 'themeExploration', score: scores.themeExploration ?? 0 },
      { key: 'writersMethods', score: scores.writersMethods ?? 0 },
    );
  }

  analysisScores.sort((a, b) => a.score - b.score);
  const weakest = analysisScores[0].key;

  const models = {
    quotationUsage: {
      weak: 'The writer uses lots of description to show the setting is scary.',
      improved: 'The writer creates a foreboding atmosphere through the "shadows that crept like fingers" across the room, the verb "crept" personifying the darkness and suggesting an almost predatory quality to the setting.',
      explanation: 'Notice how the improved version embeds a short, precise quotation and immediately analyses specific word choices.',
    },
    subjectTerminology: {
      weak: 'The writer repeats the word "dark" a lot to make it seem scary.',
      improved: 'The writer employs a semantic field of darkness — "shadow", "gloom", "murky" — which collectively establishes a gothic atmosphere of foreboding and concealment.',
      explanation: 'The improved version names the technique precisely (semantic field) and explains the cumulative effect rather than just identifying repetition.',
    },
    effectAnalysis: {
      weak: 'The metaphor shows the character is angry.',
      improved: 'The metaphor "his words were venom" positions the reader to perceive the character\'s speech as not merely angry but actively destructive, the connotations of "venom" suggesting that his language causes lasting harm to those around him.',
      explanation: 'The improved version goes beyond identification to explore the connotations of the specific word choice and its effect on the reader.',
    },
    contextualKnowledge: {
      weak: 'In those days, life was hard for women.',
      improved: 'Shakespeare presents Juliet\'s constrained choices within the patriarchal Elizabethan society, where daughters were effectively their father\'s property — her defiance of Capulet\'s will would have shocked an original audience accustomed to filial obedience.',
      explanation: 'The improved version integrates specific contextual knowledge into the analysis rather than making a general historical statement.',
    },
    characterAnalysis: {
      weak: 'Scrooge is mean at the start but nice at the end.',
      improved: 'Dickens traces Scrooge\'s transformation from a figure of "self-contained" isolation — symbolised by his "solitary as an oyster" existence — to one of communal generosity, suggesting that even the most entrenched misanthropy can be redeemed through empathy and self-reflection.',
      explanation: 'The improved version tracks character development with embedded quotations and explores the wider thematic significance.',
    },
    themeExploration: {
      weak: 'The book is about power.',
      improved: 'Orwell uses Napoleon\'s gradual appropriation of the windmill — originally Snowball\'s vision — as an allegory for how revolutionary ideals become corrupted by those who wield power, reflecting the wider theme that power is not merely seized but systematically legitimised through the control of narrative.',
      explanation: 'The improved version links a specific textual moment to a broader thematic argument about the nature of power.',
    },
    writersMethods: {
      weak: 'The writer uses a metaphor.',
      improved: 'Shelley\'s deliberate use of the epistolary form — Walton\'s letters framing Victor\'s narrative, which in turn frames the Creature\'s — creates a layered structure that forces the reader to question the reliability of each narrator, mirroring the novel\'s central concern with perspective and prejudice.',
      explanation: 'The improved version analyses a structural/form choice and links it to the writer\'s thematic purpose.',
    },
  };

  const model = models[weakest] || models.effectAnalysis;

  return {
    area: weakest,
    weakExample: model.weak,
    improvedExample: model.improved,
    explanation: model.explanation,
  };
}

/**
 * Generate a professional examiner-style overall comment.
 */
function generateExaminerComment(scores, grade, questionType, board, aoBreakdown, isLiterature) {
  const resolvedType = resolveQuestionType(questionType);
  const gradeNum = gradeToNumber(grade);

  let opening = '';
  if (gradeNum >= 8) {
    opening = 'This is a highly accomplished response that demonstrates a sophisticated understanding of the task.';
  } else if (gradeNum >= 7) {
    opening = 'This is a thoughtful, well-developed response that engages effectively with the demands of the question.';
  } else if (gradeNum >= 5) {
    opening = 'This response demonstrates a clear understanding of the question and makes some effective points.';
  } else if (gradeNum >= 4) {
    opening = 'This response shows some understanding of the question, though ideas are not always fully developed.';
  } else {
    opening = 'This response shows a basic awareness of the question, but the answer lacks development and detail.';
  }

  // Find strongest and weakest AOs
  let strongestAO = null;
  let weakestAO = null;
  let highestPct = -1;
  let lowestPct = 101;

  for (const ao of aoBreakdown) {
    if (ao.percentage > highestPct) {
      highestPct = ao.percentage;
      strongestAO = ao;
    }
    if (ao.percentage < lowestPct) {
      lowestPct = ao.percentage;
      weakestAO = ao;
    }
  }

  let middle = '';
  if (strongestAO && weakestAO && strongestAO.ao !== weakestAO.ao) {
    middle = ` The strongest area is ${strongestAO.title}, where the response reaches Band ${strongestAO.band}. To improve further, greater attention should be given to ${weakestAO.title}.`;
  } else if (strongestAO) {
    middle = ` The response performs consistently across the assessed criteria, reaching Band ${strongestAO.band} for ${strongestAO.title}.`;
  }

  // Literature-specific examiner comment additions
  let litComment = '';
  if (isLiterature) {
    if (gradeNum >= 7 && (scores.contextualKnowledge ?? 0) >= 3) {
      litComment = ' Context is handled well, woven into the argument rather than bolted on — a hallmark of the stronger responses in this cohort.';
    } else if (isLiterature && (scores.contextualKnowledge ?? 0) < 2) {
      litComment = ' Context remains underdeveloped — a common issue. The candidate should aim to integrate social, historical, or literary context into every analytical point rather than treating it as a separate paragraph.';
    }

    if ((scores.textSpecificKnowledge ?? 0) >= 3) {
      litComment += ' Good text knowledge is evident, with precise references to specific moments.';
    } else if ((scores.textSpecificKnowledge ?? 0) < 2) {
      litComment += ' Text knowledge could be strengthened — the response would benefit from more precise references to specific moments, scenes, or chapters.';
    }
  }

  let closing = '';
  if (gradeNum >= 7) {
    closing = ' To reach the highest marks, ensure that every point is fully developed with precise references and perceptive analysis of effects.';
  } else if (gradeNum >= 5) {
    closing = ' To move into the higher bands, focus on developing analysis that goes beyond identification to explore effects on the reader in a sustained, perceptive manner.';
  } else if (gradeNum >= 3) {
    closing = ' To improve, focus on using specific textual references and explaining the effects of the writer\'s choices in more detail.';
  } else {
    closing = ' To improve, make sure to address the question directly, use textual references, and attempt to explain the writer\'s methods and their effects.';
  }

  return opening + middle + litComment + closing;
}

/**
 * Generate a best-fit justification explaining how the grade was determined.
 */
function generateBestFitJustification(aoBreakdown, overallGrade, board) {
  if (aoBreakdown.length === 0) {
    return 'Unable to generate justification without assessment objective data.';
  }

  const sorted = [...aoBreakdown].sort((a, b) => b.percentage - a.percentage);
  const strongest = sorted[0];
  const weakest = sorted[sorted.length - 1];

  let justification = `Using a best fit approach across ${aoBreakdown.length} assessment objective${aoBreakdown.length > 1 ? 's' : ''}, this response is placed at ${overallGrade}. `;

  if (aoBreakdown.length === 1) {
    justification += `The response sits in Band ${strongest.band} for ${strongest.ao} (${strongest.title}), achieving ${strongest.percentage}% of the available marks. `;
    justification += `The descriptors for Band ${strongest.band} most closely match the qualities demonstrated in this response.`;
  } else {
    justification += `The strongest performance is in ${strongest.ao} (${strongest.title}), reaching Band ${strongest.band} at ${strongest.percentage}%. `;

    if (strongest.ao !== weakest.ao) {
      justification += `The area requiring most development is ${weakest.ao} (${weakest.title}), placed in Band ${weakest.band} at ${weakest.percentage}%. `;
    }

    // Add cross-band note for best-fit transparency
    const bandsUsed = new Set(aoBreakdown.map(ao => ao.band));
    if (bandsUsed.size > 1) {
      justification += `The response sits across Bands ${Math.min(...bandsUsed)}-${Math.max(...bandsUsed)}, and the best-fit placement reflects the band whose descriptors match the majority of the qualities demonstrated. `;
    }

    justification += 'The overall grade reflects the weighted combination of these assessment objectives, placing the response in the band whose descriptors most closely match the majority of the qualities demonstrated.';
  }

  return justification;
}


// ============================================================================
// SECTION 9: AO TITLE MAPPING
// ============================================================================

const AO_TITLES = {
  AO1: 'Response & Quotation',
  AO2: 'Language & Structure Analysis',
  AO3: 'Context & Comparison',
  AO4: 'Critical Evaluation',
  AO5: 'Content & Organisation',
  AO6: 'Technical Accuracy',
};

const AO_TITLES_LITERATURE = {
  AO1: 'Response & Textual Reference',
  AO2: 'Writer\'s Methods (Language, Form, Structure)',
  AO3: 'Context (Social, Historical, Literary)',
  AO4: 'Critical Evaluation & Personal Response',
};


// ============================================================================
// SECTION 10: PAPER MARK SCHEME LOOKUP
// ============================================================================

/**
 * Attempt to find a specific paper mark scheme based on board, subject, paper, and question.
 * Returns null if no specific scheme is found.
 */
function findPaperMarkScheme(board, subject, paper, questionLabel) {
  const key = `${board}|${subject}|${paper}`;
  const paperScheme = PAPER_MARK_SCHEMES[key];
  if (!paperScheme) return null;

  if (questionLabel && paperScheme.questions[questionLabel]) {
    return paperScheme.questions[questionLabel];
  }

  // Try matching by question number (e.g., "Q3" or "Question 3")
  if (questionLabel) {
    const qMatch = questionLabel.match(/(?:Q|Question\s*)(\d)/i);
    if (qMatch) {
      const qKey = `Q${qMatch[1]}`;
      if (paperScheme.questions[qKey]) {
        return paperScheme.questions[qKey];
      }
    }

    // Try matching section labels
    const sectionMatch = questionLabel.match(/Section\s*([A-C])/i);
    if (sectionMatch) {
      const sKey = `Section ${sectionMatch[1].toUpperCase()}`;
      if (paperScheme.questions[sKey]) {
        return paperScheme.questions[sKey];
      }
    }
  }

  return null;
}


// ============================================================================
// SECTION 11: MAIN MARKING FUNCTION
// ============================================================================

/**
 * Mark a student's response to a GCSE/IGCSE English question.
 *
 * NEW API: Accepts either the legacy positional arguments OR a single config object:
 *   markResponse({ answer, question, board, subject, paper, questionType })
 *
 * Legacy API (still supported):
 *   markResponse(answer, question, board)
 *
 * @returns {object} {
 *   grade, mark, maxMark, percentage, aoBreakdown, feedback,
 *   bandDescriptor, bestFitJustification,
 *   // Legacy aliases
 *   overallGrade, overallPercentage, totalMarks,
 *   strengths, improvements, examinerComment
 * }
 */
export function markResponse(answerOrConfig, questionArg, boardArg) {
  // ---- Normalise arguments: support both new object API and legacy positional API ----
  let answer, question, board, subject, paper, questionType;

  if (typeof answerOrConfig === 'object' && answerOrConfig !== null && 'answer' in answerOrConfig) {
    // New API: single config object
    answer = answerOrConfig.answer;
    question = answerOrConfig.question;
    board = answerOrConfig.board;
    subject = answerOrConfig.subject || null;
    paper = answerOrConfig.paper || null;
    questionType = answerOrConfig.questionType || null;
  } else {
    // Legacy API: positional arguments
    answer = answerOrConfig;
    question = questionArg;
    board = boardArg;
    subject = null;
    paper = null;
    questionType = null;
  }

  // Defaults
  const effectiveBoard = board && BOARD_BAND_DESCRIPTORS[board] ? board : 'AQA';
  const qType = questionType || question?.questionType || 'Language Analysis';
  const totalQuestionMarks = question?.marks || 30;
  const extract = question?.extract || '';

  // Determine if this is a literature paper
  const isLiterature = (subject && subject.toLowerCase().includes('literature')) ||
    (qType && qType.toLowerCase().includes('literature')) ||
    (paper && paper.toLowerCase().includes('literature'));

  // Resolve the question type to a canonical category
  const resolvedType = resolveQuestionType(qType);

  // ---- Try to find a specific paper mark scheme ----
  let paperQScheme = null;
  if (board && subject && paper) {
    const questionLabel = question?.questionLabel || question?.questionNumber || questionType || null;
    paperQScheme = findPaperMarkScheme(board, subject, paper, questionLabel);
  }

  // Use paper-specific AO config if available, otherwise fall back to default
  const aoConfig = paperQScheme
    ? { aos: paperQScheme.aos }
    : (QUESTION_AO_MAP[resolvedType] || QUESTION_AO_MAP['Language Analysis']);

  const effectiveMaxMarks = paperQScheme ? paperQScheme.maxMarks : totalQuestionMarks;

  // ---- Step 1: Run all analysis functions ----
  const scores = {
    quotationUsage: analyzeQuotationUsage(answer, extract),
    subjectTerminology: analyzeSubjectTerminology(answer),
    effectAnalysis: analyzeEffectAnalysis(answer),
    structuralAwareness: analyzeStructuralAwareness(answer),
    comparisonSkills: analyzeComparisonSkills(answer),
    vocabularySophistication: analyzeVocabularySophistication(answer),
    sentenceVariety: analyzeSentenceVariety(answer),
    punctuationRange: analyzePunctuationRange(answer),
    spellingAccuracy: analyzeSpellingAccuracy(answer),
    paragraphStructure: analyzeParagraphStructure(answer),
    creativeWritingFeatures: analyzeCreativeWritingFeatures(answer),
    contextualKnowledge: analyzeContextualKnowledge(answer),
    // Literature-specific scores
    characterAnalysis: analyzeCharacterAnalysis(answer),
    themeExploration: analyzeThemeExploration(answer),
    writersMethods: analyzeWritersMethods(answer),
    textSpecificKnowledge: analyzeTextSpecificKnowledge(answer),
  };

  // ---- Step 2: Calculate AO scores and apply best fit ----
  const boardDescriptors = BOARD_BAND_DESCRIPTORS[effectiveBoard];
  const aoBreakdown = [];
  let weightedPercentageSum = 0;
  let totalWeight = 0;

  const titleMap = isLiterature ? { ...AO_TITLES, ...AO_TITLES_LITERATURE } : AO_TITLES;

  for (const { ao, weight } of aoConfig.aos) {
    const rawScore = calculateAOScore(ao, scores, isLiterature);
    const aoMarks = Math.round(effectiveMaxMarks * weight);
    const aoDescriptors = boardDescriptors[ao];

    if (!aoDescriptors) continue;

    const fit = bestFitBand(rawScore, aoDescriptors, aoMarks);

    aoBreakdown.push({
      ao,
      title: titleMap[ao] || ao,
      band: fit.band,
      maxBand: fit.maxBand,
      marks: fit.marks,
      maxMarks: fit.maxMarks,
      percentage: fit.percentage,
      feedback: fit.bandDesc,
      bandLabel: fit.bandLabel,
    });

    weightedPercentageSum += fit.percentage * weight;
    totalWeight += weight;
  }

  // ---- Step 3: Calculate overall percentage and marks ----
  let overallPercentage = totalWeight > 0 ? Math.round(weightedPercentageSum / totalWeight) : 0;

  // Apply length factor
  const { gradeCap, bonus, wordCount } = calculateLengthFactor(answer);
  overallPercentage = Math.min(100, overallPercentage + bonus);

  const totalMarks = Math.round((overallPercentage / 100) * effectiveMaxMarks);
  const clampedTotalMarks = Math.max(0, Math.min(effectiveMaxMarks, totalMarks));

  // ---- Step 4: Determine grade with length cap ----
  let overallGrade = percentageToGrade(overallPercentage, effectiveBoard);
  const gradeNum = gradeToNumber(overallGrade);

  if (gradeNum > gradeCap) {
    overallGrade = numberToGrade(gradeCap, effectiveBoard);
  }

  // ---- Step 5: Generate enhanced feedback ----
  const strengths = generateStrengths(scores, answer, resolvedType, isLiterature);
  const improvements = generateImprovements(scores, answer, overallGrade, resolvedType, isLiterature);
  const examinerComment = generateExaminerComment(scores, overallGrade, qType, effectiveBoard, aoBreakdown, isLiterature);
  const bestFitJustification = generateBestFitJustification(aoBreakdown, overallGrade, effectiveBoard);
  const nextGradeSection = generateNextGradeTargets(scores, overallGrade, resolvedType, isLiterature, effectiveBoard);
  const modelSentence = generateModelSentence(scores, resolvedType, isLiterature);

  // Build the primary band descriptor string
  const primaryBand = aoBreakdown.length > 0 ? aoBreakdown[0] : null;
  const bandDescriptor = primaryBand
    ? `Band ${primaryBand.band}: ${primaryBand.feedback}`
    : '';

  // ---- Build result object ----
  // New API fields
  const result = {
    grade: overallGrade,
    mark: clampedTotalMarks,
    maxMark: effectiveMaxMarks,
    percentage: overallPercentage,
    aoBreakdown,
    feedback: {
      strengths,
      improvements,
      nextGrade: nextGradeSection,
      examinerComment,
      modelSentence,
    },
    bandDescriptor,
    bestFitJustification,

    // Legacy API aliases (backwards compatibility)
    overallGrade,
    overallPercentage,
    totalMarks: clampedTotalMarks,
    strengths,
    improvements,
    examinerComment,
  };

  // Attach paper-specific rubric info if available
  if (paperQScheme) {
    result.paperRubric = paperQScheme.rubric;
    result.paperTitle = paperQScheme.title;
    result.paperBandDescriptors = paperQScheme.bandDescriptors;
  }

  return result;
}
