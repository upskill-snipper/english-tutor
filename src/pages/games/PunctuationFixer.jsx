import { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from '../../components/Navbar';
import GameWrapper from '../../components/GameWrapper';

const STORAGE_KEY = 'learnright_game_punctuationfixer';

const PASSAGES = [
  // EASY (3-4 errors each)
  {
    broken: "the boy ran to the shop he bought some sweets",
    fixed: "The boy ran to the shop. He bought some sweets.",
    difficulty: 'easy',
    errors: [
      { index: 0, brokenWord: 'the', fixedWord: 'The', type: 'capital', hint: 'Start of sentence needs a capital letter' },
      { index: 6, brokenWord: 'shop', fixedWord: 'shop.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
      { index: 7, brokenWord: 'he', fixedWord: 'He', type: 'capital', hint: 'Start of sentence needs a capital letter' },
      { index: 11, brokenWord: 'sweets', fixedWord: 'sweets.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
    ]
  },
  {
    broken: "sarah didnt want to go outside because it was raining",
    fixed: "Sarah didn't want to go outside because it was raining.",
    difficulty: 'easy',
    errors: [
      { index: 0, brokenWord: 'sarah', fixedWord: 'Sarah', type: 'capital', hint: 'Proper nouns need capital letters' },
      { index: 1, brokenWord: 'didnt', fixedWord: "didn't", type: 'apostrophe', hint: "Contractions need apostrophes: did + not = didn't" },
      { index: 9, brokenWord: 'raining', fixedWord: 'raining.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
    ]
  },
  {
    broken: "were going to the park on saturday said tom",
    fixed: '"We\'re going to the park on Saturday," said Tom.',
    difficulty: 'easy',
    errors: [
      { index: 0, brokenWord: 'were', fixedWord: '"We\'re', type: 'apostrophe', hint: "We're = we are (contraction needs apostrophe and speech marks)" },
      { index: 6, brokenWord: 'saturday', fixedWord: 'Saturday,"', type: 'capital', hint: 'Days of the week need capital letters, and speech needs closing punctuation' },
      { index: 8, brokenWord: 'tom', fixedWord: 'Tom.', type: 'capital', hint: 'Names need capital letters' },
    ]
  },
  {
    broken: "the cat sat on the mat it was very happy",
    fixed: "The cat sat on the mat. It was very happy.",
    difficulty: 'easy',
    errors: [
      { index: 0, brokenWord: 'the', fixedWord: 'The', type: 'capital', hint: 'Start of sentence needs a capital letter' },
      { index: 5, brokenWord: 'mat', fixedWord: 'mat.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
      { index: 6, brokenWord: 'it', fixedWord: 'It', type: 'capital', hint: 'Start of new sentence needs a capital letter' },
      { index: 9, brokenWord: 'happy', fixedWord: 'happy.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
    ]
  },
  {
    broken: "i went too the cinema with my friend james",
    fixed: "I went to the cinema with my friend James.",
    difficulty: 'easy',
    errors: [
      { index: 0, brokenWord: 'i', fixedWord: 'I', type: 'capital', hint: 'The pronoun I is always capitalised' },
      { index: 2, brokenWord: 'too', fixedWord: 'to', type: 'homophone', hint: "to = direction, too = also/excessive, two = 2" },
      { index: 8, brokenWord: 'james', fixedWord: 'James.', type: 'capital', hint: 'Names need capital letters' },
    ]
  },
  {
    broken: "the dog chased its tail in the garden it was funny",
    fixed: "The dog chased its tail in the garden. It was funny.",
    difficulty: 'easy',
    errors: [
      { index: 0, brokenWord: 'the', fixedWord: 'The', type: 'capital', hint: 'Start of sentence needs a capital letter' },
      { index: 7, brokenWord: 'garden', fixedWord: 'garden.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
      { index: 8, brokenWord: 'it', fixedWord: 'It', type: 'capital', hint: 'Start of new sentence needs a capital letter' },
      { index: 10, brokenWord: 'funny', fixedWord: 'funny.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
    ]
  },
  // MEDIUM (5-7 errors each)
  {
    broken: "the boys went to there house and they didnt know what too do they were very confused",
    fixed: "The boys went to their house, and they didn't know what to do. They were very confused.",
    difficulty: 'medium',
    errors: [
      { index: 0, brokenWord: 'the', fixedWord: 'The', type: 'capital', hint: 'Start of sentence needs a capital letter' },
      { index: 4, brokenWord: 'there', fixedWord: 'their', type: 'homophone', hint: "their = belonging to them, there = a place, they're = they are" },
      { index: 5, brokenWord: 'house', fixedWord: 'house,', type: 'comma', hint: 'Use a comma before a coordinating conjunction joining two independent clauses' },
      { index: 8, brokenWord: 'didnt', fixedWord: "didn't", type: 'apostrophe', hint: "Contractions need apostrophes: did + not = didn't" },
      { index: 11, brokenWord: 'too', fixedWord: 'to', type: 'homophone', hint: "to = direction/infinitive, too = also/excessive" },
      { index: 12, brokenWord: 'do', fixedWord: 'do.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
      { index: 13, brokenWord: 'they', fixedWord: 'They', type: 'capital', hint: 'Start of new sentence needs a capital letter' },
    ]
  },
  {
    broken: "in the novel a christmas carol dickens presents scrooge as a cold hearted miser he doesnt care about anyone",
    fixed: "In the novel A Christmas Carol, Dickens presents Scrooge as a cold-hearted miser. He doesn't care about anyone.",
    difficulty: 'medium',
    errors: [
      { index: 0, brokenWord: 'in', fixedWord: 'In', type: 'capital', hint: 'Start of sentence needs a capital letter' },
      { index: 3, brokenWord: 'a', fixedWord: 'A', type: 'capital', hint: 'Title words need capitalising' },
      { index: 4, brokenWord: 'christmas', fixedWord: 'Christmas', type: 'capital', hint: 'Proper nouns need capital letters' },
      { index: 5, brokenWord: 'carol', fixedWord: 'Carol,', type: 'comma', hint: 'Use a comma after introductory phrases' },
      { index: 6, brokenWord: 'dickens', fixedWord: 'Dickens', type: 'capital', hint: 'Names need capital letters' },
      { index: 14, brokenWord: 'doesnt', fixedWord: "doesn't", type: 'apostrophe', hint: "Contractions need apostrophes: does + not = doesn't" },
    ]
  },
  {
    broken: "your never going to believe this said emma but i saw a fox in the playground its true",
    fixed: '"You\'re never going to believe this," said Emma, "but I saw a fox in the playground. It\'s true."',
    difficulty: 'medium',
    errors: [
      { index: 0, brokenWord: 'your', fixedWord: '"You\'re', type: 'homophone', hint: "you're = you are, your = belonging to you" },
      { index: 5, brokenWord: 'this', fixedWord: 'this,"', type: 'speech', hint: 'Direct speech needs speech marks and punctuation' },
      { index: 7, brokenWord: 'emma', fixedWord: 'Emma,', type: 'capital', hint: 'Names need capital letters' },
      { index: 9, brokenWord: 'i', fixedWord: 'I', type: 'capital', hint: 'The pronoun I is always capitalised' },
      { index: 15, brokenWord: 'its', fixedWord: "It's", type: 'apostrophe', hint: "It's = it is (contraction), its = belonging to it" },
    ]
  },
  {
    broken: "the scientists hypothesis was clear global warming is caused by human activity however not everyone agrees with this",
    fixed: "The scientist's hypothesis was clear: global warming is caused by human activity. However, not everyone agrees with this.",
    difficulty: 'medium',
    errors: [
      { index: 0, brokenWord: 'the', fixedWord: 'The', type: 'capital', hint: 'Start of sentence needs a capital letter' },
      { index: 1, brokenWord: 'scientists', fixedWord: "scientist's", type: 'apostrophe', hint: "Possessive apostrophe: the hypothesis belonging to the scientist" },
      { index: 4, brokenWord: 'clear', fixedWord: 'clear:', type: 'colon', hint: 'Use a colon to introduce an explanation' },
      { index: 11, brokenWord: 'activity', fixedWord: 'activity.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
      { index: 12, brokenWord: 'however', fixedWord: 'However,', type: 'comma', hint: 'Use a comma after conjunctive adverbs like however' },
    ]
  },
  {
    broken: "macbeth is a play about ambition greed and power shakespeare wrote it in 1606 its one of his most famous works",
    fixed: "Macbeth is a play about ambition, greed and power. Shakespeare wrote it in 1606. It's one of his most famous works.",
    difficulty: 'medium',
    errors: [
      { index: 0, brokenWord: 'macbeth', fixedWord: 'Macbeth', type: 'capital', hint: 'Titles and proper nouns need capital letters' },
      { index: 5, brokenWord: 'ambition', fixedWord: 'ambition,', type: 'comma', hint: 'Use commas to separate items in a list' },
      { index: 8, brokenWord: 'power', fixedWord: 'power.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
      { index: 9, brokenWord: 'shakespeare', fixedWord: 'Shakespeare', type: 'capital', hint: 'Names need capital letters' },
      { index: 14, brokenWord: 'its', fixedWord: "It's", type: 'apostrophe', hint: "It's = it is (contraction), its = belonging to it" },
    ]
  },
  {
    broken: "there going to the museum on wednesday because there teacher mrs johnson said it would help with there history project",
    fixed: "They're going to the museum on Wednesday because their teacher, Mrs Johnson, said it would help with their history project.",
    difficulty: 'medium',
    errors: [
      { index: 0, brokenWord: 'there', fixedWord: "They're", type: 'homophone', hint: "they're = they are, their = belonging to them, there = a place" },
      { index: 5, brokenWord: 'wednesday', fixedWord: 'Wednesday', type: 'capital', hint: 'Days of the week need capital letters' },
      { index: 7, brokenWord: 'there', fixedWord: 'their', type: 'homophone', hint: "their = belonging to them" },
      { index: 8, brokenWord: 'teacher', fixedWord: 'teacher,', type: 'comma', hint: 'Use commas around appositives (extra information)' },
      { index: 9, brokenWord: 'mrs', fixedWord: 'Mrs', type: 'capital', hint: 'Titles need capital letters' },
      { index: 10, brokenWord: 'johnson', fixedWord: 'Johnson,', type: 'capital', hint: 'Names need capital letters' },
      { index: 15, brokenWord: 'there', fixedWord: 'their', type: 'homophone', hint: "their = belonging to them" },
    ]
  },
  // HARD (8-10 errors each)
  {
    broken: "the inspector who arrived at the birlings house in 1912 challenged there views on responsibility he said we are all members of one body mr birling however didnt agree with this",
    fixed: 'The Inspector, who arrived at the Birlings\' house in 1912, challenged their views on responsibility. He said, "We are all members of one body." Mr Birling, however, didn\'t agree with this.',
    difficulty: 'hard',
    errors: [
      { index: 0, brokenWord: 'the', fixedWord: 'The', type: 'capital', hint: 'Start of sentence needs a capital letter' },
      { index: 1, brokenWord: 'inspector', fixedWord: 'Inspector,', type: 'capital', hint: 'Used as a title/name here; needs a capital and comma before relative clause' },
      { index: 5, brokenWord: 'birlings', fixedWord: "Birlings'", type: 'apostrophe', hint: "Possessive apostrophe: the house belonging to the Birlings" },
      { index: 9, brokenWord: '1912,', fixedWord: '1912,', type: 'comma', hint: 'Comma to close the relative clause' },
      { index: 10, brokenWord: 'there', fixedWord: 'their', type: 'homophone', hint: "their = belonging to them" },
      { index: 14, brokenWord: 'he', fixedWord: 'He', type: 'capital', hint: 'Start of new sentence needs a capital letter' },
      { index: 15, brokenWord: 'said', fixedWord: 'said,', type: 'comma', hint: 'Use a comma before direct speech' },
      { index: 16, brokenWord: 'we', fixedWord: '"We', type: 'speech', hint: 'Direct speech needs opening speech marks' },
      { index: 22, brokenWord: 'body', fixedWord: 'body."', type: 'speech', hint: 'Direct speech needs closing speech marks and punctuation' },
      { index: 23, brokenWord: 'mr', fixedWord: 'Mr', type: 'capital', hint: 'Titles need capital letters' },
      { index: 25, brokenWord: 'didnt', fixedWord: "didn't", type: 'apostrophe', hint: "Contractions need apostrophes" },
    ]
  },
  {
    broken: "lady macbeth says unsex me here which shows her desire for power she doesnt want to be seen as weak its clear that shakespeare is challenging the audiences expectations of women",
    fixed: 'Lady Macbeth says, "Unsex me here," which shows her desire for power. She doesn\'t want to be seen as weak. It\'s clear that Shakespeare is challenging the audience\'s expectations of women.',
    difficulty: 'hard',
    errors: [
      { index: 0, brokenWord: 'lady', fixedWord: 'Lady', type: 'capital', hint: 'Start of sentence and title needs a capital' },
      { index: 1, brokenWord: 'macbeth', fixedWord: 'Macbeth', type: 'capital', hint: 'Names need capital letters' },
      { index: 2, brokenWord: 'says', fixedWord: 'says,', type: 'comma', hint: 'Use a comma before direct speech' },
      { index: 3, brokenWord: 'unsex', fixedWord: '"Unsex', type: 'speech', hint: 'Direct speech needs opening speech marks' },
      { index: 5, brokenWord: 'here', fixedWord: 'here,"', type: 'speech', hint: 'Direct speech needs closing speech marks' },
      { index: 12, brokenWord: 'power', fixedWord: 'power.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
      { index: 13, brokenWord: 'she', fixedWord: 'She', type: 'capital', hint: 'Start of new sentence needs a capital' },
      { index: 14, brokenWord: 'doesnt', fixedWord: "doesn't", type: 'apostrophe', hint: "Contractions need apostrophes" },
      { index: 22, brokenWord: 'its', fixedWord: "It's", type: 'apostrophe', hint: "It's = it is" },
      { index: 25, brokenWord: 'audiences', fixedWord: "audience's", type: 'apostrophe', hint: "Possessive apostrophe: expectations of the audience" },
    ]
  },
  {
    broken: "the writer uses a range of techniques to engage the reader firstly they use short sentences to create tension secondly the use of rhetorical questions makes the reader think finally emotive language is used to persuade there audience",
    fixed: "The writer uses a range of techniques to engage the reader. Firstly, they use short sentences to create tension. Secondly, the use of rhetorical questions makes the reader think. Finally, emotive language is used to persuade their audience.",
    difficulty: 'hard',
    errors: [
      { index: 0, brokenWord: 'the', fixedWord: 'The', type: 'capital', hint: 'Start of sentence needs a capital letter' },
      { index: 10, brokenWord: 'reader', fixedWord: 'reader.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
      { index: 11, brokenWord: 'firstly', fixedWord: 'Firstly,', type: 'capital', hint: 'New sentence and fronted adverbial needs comma' },
      { index: 17, brokenWord: 'tension', fixedWord: 'tension.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
      { index: 18, brokenWord: 'secondly', fixedWord: 'Secondly,', type: 'capital', hint: 'New sentence and fronted adverbial needs comma' },
      { index: 26, brokenWord: 'think', fixedWord: 'think.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
      { index: 27, brokenWord: 'finally', fixedWord: 'Finally,', type: 'capital', hint: 'New sentence and fronted adverbial needs comma' },
      { index: 34, brokenWord: 'there', fixedWord: 'their', type: 'homophone', hint: "their = belonging to them" },
    ]
  },
  {
    broken: "mr birling who is described as a heavy looking man represents capitalism he says a man has to mind his own business and look after himself this shows hes selfish and doesnt care about others its a key theme in the play",
    fixed: 'Mr Birling, who is described as a "heavy-looking" man, represents capitalism. He says, "A man has to mind his own business and look after himself." This shows he\'s selfish and doesn\'t care about others. It\'s a key theme in the play.',
    difficulty: 'hard',
    errors: [
      { index: 0, brokenWord: 'mr', fixedWord: 'Mr', type: 'capital', hint: 'Titles need capital letters' },
      { index: 1, brokenWord: 'birling', fixedWord: 'Birling,', type: 'capital', hint: 'Names need capital letters, comma before relative clause' },
      { index: 10, brokenWord: 'capitalism', fixedWord: 'capitalism.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
      { index: 12, brokenWord: 'says', fixedWord: 'says,', type: 'comma', hint: 'Comma before direct speech' },
      { index: 13, brokenWord: 'a', fixedWord: '"A', type: 'speech', hint: 'Direct speech needs opening speech marks' },
      { index: 21, brokenWord: 'himself', fixedWord: 'himself."', type: 'speech', hint: 'Direct speech needs closing speech marks and punctuation' },
      { index: 23, brokenWord: 'shows', fixedWord: 'shows', type: 'apostrophe', hint: '' },
      { index: 24, brokenWord: 'hes', fixedWord: "he's", type: 'apostrophe', hint: "he's = he is" },
      { index: 27, brokenWord: 'doesnt', fixedWord: "doesn't", type: 'apostrophe', hint: "Contractions need apostrophes" },
      { index: 31, brokenWord: 'its', fixedWord: "It's", type: 'apostrophe', hint: "It's = it is" },
    ]
  },
  {
    broken: "in conclusion the writer effectively persuades the reader by using emotive language rhetorical questions and direct address the effect of this is too make the reader feel guilty for example they write how can you stand by and do nothing this is clearly intended to provoke a response",
    fixed: 'In conclusion, the writer effectively persuades the reader by using emotive language, rhetorical questions and direct address. The effect of this is to make the reader feel guilty. For example, they write, "How can you stand by and do nothing?" This is clearly intended to provoke a response.',
    difficulty: 'hard',
    errors: [
      { index: 0, brokenWord: 'in', fixedWord: 'In', type: 'capital', hint: 'Start of sentence needs a capital letter' },
      { index: 1, brokenWord: 'conclusion', fixedWord: 'conclusion,', type: 'comma', hint: 'Comma after introductory phrase' },
      { index: 9, brokenWord: 'language', fixedWord: 'language,', type: 'comma', hint: 'Commas to separate items in a list' },
      { index: 13, brokenWord: 'address', fixedWord: 'address.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
      { index: 14, brokenWord: 'the', fixedWord: 'The', type: 'capital', hint: 'New sentence needs a capital letter' },
      { index: 19, brokenWord: 'too', fixedWord: 'to', type: 'homophone', hint: "to = infinitive, too = also/excessive" },
      { index: 24, brokenWord: 'guilty', fixedWord: 'guilty.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
      { index: 25, brokenWord: 'for', fixedWord: 'For', type: 'capital', hint: 'New sentence needs a capital letter' },
      { index: 26, brokenWord: 'example', fixedWord: 'example,', type: 'comma', hint: 'Comma after introductory phrase' },
      { index: 28, brokenWord: 'write', fixedWord: 'write,', type: 'comma', hint: 'Comma before direct speech' },
    ]
  },
  {
    broken: "the poem remains of innocence by jane weir explores the effects of war on soldiers weir uses the metaphor of a shirt to represent the soldiers lost innocence this is effective because it shows how war strips away your humanity the reader cant help but feel sympathy",
    fixed: "The poem Remains of Innocence by Jane Weir explores the effects of war on soldiers. Weir uses the metaphor of a shirt to represent the soldier's lost innocence. This is effective because it shows how war strips away your humanity. The reader can't help but feel sympathy.",
    difficulty: 'hard',
    errors: [
      { index: 0, brokenWord: 'the', fixedWord: 'The', type: 'capital', hint: 'Start of sentence needs a capital letter' },
      { index: 6, brokenWord: 'jane', fixedWord: 'Jane', type: 'capital', hint: 'Names need capital letters' },
      { index: 7, brokenWord: 'weir', fixedWord: 'Weir', type: 'capital', hint: 'Names need capital letters' },
      { index: 13, brokenWord: 'soldiers', fixedWord: 'soldiers.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
      { index: 14, brokenWord: 'weir', fixedWord: 'Weir', type: 'capital', hint: 'Names need capital letters' },
      { index: 21, brokenWord: 'soldiers', fixedWord: "soldier's", type: 'apostrophe', hint: "Possessive apostrophe: innocence of the soldier" },
      { index: 23, brokenWord: 'innocence', fixedWord: 'innocence.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
      { index: 33, brokenWord: 'humanity', fixedWord: 'humanity.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
      { index: 34, brokenWord: 'the', fixedWord: 'The', type: 'capital', hint: 'New sentence needs a capital letter' },
      { index: 36, brokenWord: 'cant', fixedWord: "can't", type: 'apostrophe', hint: "Contractions need apostrophes" },
    ]
  },
  {
    broken: "dear sir or madam i am writing to express my concern about the closure of our local library this facility is essential for the communitys wellbeing furthermore it provides a safe space for young people who dont have access to books at home i urge you to reconsider your decision",
    fixed: "Dear Sir or Madam,\nI am writing to express my concern about the closure of our local library. This facility is essential for the community's wellbeing. Furthermore, it provides a safe space for young people who don't have access to books at home. I urge you to reconsider your decision.",
    difficulty: 'hard',
    errors: [
      { index: 3, brokenWord: 'madam', fixedWord: 'Madam,', type: 'comma', hint: 'Comma after the greeting in a formal letter' },
      { index: 4, brokenWord: 'i', fixedWord: 'I', type: 'capital', hint: 'The pronoun I is always capitalised' },
      { index: 15, brokenWord: 'library', fixedWord: 'library.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
      { index: 16, brokenWord: 'this', fixedWord: 'This', type: 'capital', hint: 'New sentence needs a capital letter' },
      { index: 21, brokenWord: 'communitys', fixedWord: "community's", type: 'apostrophe', hint: "Possessive apostrophe: wellbeing of the community" },
      { index: 22, brokenWord: 'wellbeing', fixedWord: 'wellbeing.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
      { index: 23, brokenWord: 'furthermore', fixedWord: 'Furthermore,', type: 'comma', hint: 'Comma after conjunctive adverb' },
      { index: 30, brokenWord: 'dont', fixedWord: "don't", type: 'apostrophe', hint: "Contractions need apostrophes" },
      { index: 37, brokenWord: 'home', fixedWord: 'home.', type: 'fullstop', hint: 'End of sentence needs a full stop' },
    ]
  },
];

const ERROR_TYPE_LABELS = {
  capital: 'Missing Capital',
  fullstop: 'Missing Full Stop',
  comma: 'Missing Comma',
  apostrophe: 'Missing Apostrophe',
  homophone: 'Homophone Error',
  colon: 'Missing Colon',
  semicolon: 'Missing Semicolon',
  speech: 'Speech Marks',
};

const ERROR_TYPE_COLORS = {
  capital: '#f59e0b',
  fullstop: '#ef4444',
  comma: '#8b5cf6',
  apostrophe: '#10b981',
  homophone: '#3b82f6',
  colon: '#ec4899',
  semicolon: '#06b6d4',
  speech: '#f97316',
};

const EXAMINER_COMMENTS = {
  perfect: "Outstanding SPaG control! Your punctuation is flawless. In the exam, this level of accuracy would place you firmly in the top band for AO6. Examiners reward consistent and deliberate use of punctuation to enhance meaning.",
  excellent: "Excellent SPaG skills! You caught most errors with confidence. Examiners look for secure control of punctuation, and you've demonstrated strong awareness. Keep practising those trickier areas like apostrophes and speech marks to reach perfection.",
  good: "Good effort! You're showing a solid understanding of basic punctuation rules. To move up the mark bands for AO6, focus on the errors you missed -- especially apostrophes for possession and homophones. These are common mistakes that examiners look for.",
  developing: "You're making progress with punctuation, but there are some key areas to work on. AO6 marks are available for accurate use of capitals, full stops, commas, and apostrophes. Focus on one error type at a time and practise regularly.",
  needsWork: "Punctuation is a crucial skill for AO6 marks. Start with the basics: every sentence needs a capital letter at the start and a full stop at the end. Then work on apostrophes for contractions (don't, can't) and possession (the boy's bag). Practice makes perfect!"
};

function getExaminerComment(pct) {
  if (pct === 100) return EXAMINER_COMMENTS.perfect;
  if (pct >= 80) return EXAMINER_COMMENTS.excellent;
  if (pct >= 60) return EXAMINER_COMMENTS.good;
  if (pct >= 40) return EXAMINER_COMMENTS.developing;
  return EXAMINER_COMMENTS.needsWork;
}

function loadBest() {
  try {
    const d = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return d;
  } catch { return {}; }
}

function saveBest(data) {
  try {
    const existing = loadBest();
    const merged = { ...existing, ...data };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  } catch {}
}

export default function PunctuationFixer() {
  const [screen, setScreen] = useState('menu');
  const [difficulty, setDifficulty] = useState('easy');
  const [passages, setPassages] = useState([]);
  const [passageIdx, setPassageIdx] = useState(0);
  const [words, setWords] = useState([]);
  const [fixes, setFixes] = useState({});
  const [activeWord, setActiveWord] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const [results, setResults] = useState(null);
  const [showComparison, setShowComparison] = useState(false);
  const [passageResults, setPassageResults] = useState([]);
  const timerRef = useRef(null);
  const [savedData, setSavedData] = useState(loadBest);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (screen === 'playing') {
      timerRef.current = setInterval(() => setTimer(t => t + 1), 1000);
      return () => clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [screen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveWord(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const startGame = (diff) => {
    setDifficulty(diff);
    const pool = PASSAGES.filter(p => p.difficulty === diff);
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 5);
    setPassages(shuffled);
    setPassageIdx(0);
    const ws = shuffled[0].broken.split(' ');
    setWords(ws);
    setFixes({});
    setActiveWord(null);
    setScore(0);
    setTimer(0);
    setResults(null);
    setShowComparison(false);
    setPassageResults([]);
    setScreen('playing');
  };

  const currentPassage = passages[passageIdx];
  const errorMap = {};
  if (currentPassage) {
    currentPassage.errors.forEach(e => { errorMap[e.index] = e; });
  }

  const getFixOptions = useCallback((wordIdx) => {
    if (!currentPassage) return [];
    const err = currentPassage.errors.find(e => e.index === wordIdx);
    if (!err) return [];

    const options = [err.fixedWord];
    // Add some distractors
    const brk = err.brokenWord;
    if (!options.includes(brk)) options.push(brk);

    if (err.type === 'homophone') {
      if (brk === 'there' || err.fixedWord.includes('their') || err.fixedWord.includes("they're") || err.fixedWord.includes('there')) {
        ['there', 'their', "they're"].forEach(h => { if (!options.includes(h)) options.push(h); });
      } else if (brk === 'too' || brk === 'to' || brk === 'two') {
        ['to', 'too', 'two'].forEach(h => { if (!options.includes(h)) options.push(h); });
      } else if (brk === 'your' || err.fixedWord.includes("You're")) {
        ['your', "you're", '"You\'re'].forEach(h => { if (!options.includes(h)) options.push(h); });
      } else if (brk === 'were') {
        ['were', "we're", "where"].forEach(h => { if (!options.includes(h)) options.push(h); });
      }
    } else if (err.type === 'capital') {
      const cap = brk.charAt(0).toUpperCase() + brk.slice(1);
      if (!options.includes(cap)) options.push(cap);
      if (!options.includes(brk)) options.push(brk);
      // Possibly with punctuation
      if (err.fixedWord.endsWith(',') || err.fixedWord.endsWith('.')) {
        const noPunc = err.fixedWord.replace(/[.,]$/, '');
        if (!options.includes(noPunc)) options.push(noPunc);
      }
    } else if (err.type === 'apostrophe') {
      if (!options.includes(brk)) options.push(brk);
    } else if (err.type === 'fullstop') {
      if (!options.includes(brk)) options.push(brk);
      const withComma = brk + ',';
      if (!options.includes(withComma)) options.push(withComma);
    } else if (err.type === 'comma') {
      if (!options.includes(brk)) options.push(brk);
      const withStop = brk + '.';
      if (!options.includes(withStop)) options.push(withStop);
    } else if (err.type === 'speech') {
      if (!options.includes(brk)) options.push(brk);
    } else if (err.type === 'colon') {
      if (!options.includes(brk)) options.push(brk);
      const withSemicolon = brk.replace(/:$/, '') + ';';
      if (!options.includes(withSemicolon)) options.push(withSemicolon);
    }

    return [...new Set(options)].sort(() => Math.random() - 0.5);
  }, [currentPassage]);

  const handleWordClick = (idx) => {
    if (!errorMap[idx]) return;
    if (fixes[idx]) return;
    setActiveWord(activeWord === idx ? null : idx);
  };

  const handleFix = (idx, choice) => {
    const err = errorMap[idx];
    if (!err) return;
    const correct = choice === err.fixedWord;
    setFixes(prev => ({ ...prev, [idx]: { choice, correct } }));
    if (correct) {
      setScore(s => s + 10);
    }
    setActiveWord(null);
  };

  const submitPassage = () => {
    // Calculate what was missed
    const totalErrors = currentPassage.errors.length;
    let correctFixes = 0;
    let missed = 0;
    const details = currentPassage.errors.map(err => {
      const fix = fixes[err.index];
      if (fix && fix.correct) {
        correctFixes++;
        return { ...err, status: 'correct', playerChoice: fix.choice };
      } else if (fix && !fix.correct) {
        return { ...err, status: 'wrong', playerChoice: fix.choice };
      } else {
        missed++;
        return { ...err, status: 'missed', playerChoice: null };
      }
    });

    const penalty = missed * 5;
    setScore(s => Math.max(0, s - penalty));

    const pResult = {
      broken: currentPassage.broken,
      fixed: currentPassage.fixed,
      details,
      correctFixes,
      totalErrors,
      missed,
    };

    const newResults = [...passageResults, pResult];
    setPassageResults(newResults);

    if (passageIdx < passages.length - 1) {
      // Next passage
      const nextIdx = passageIdx + 1;
      setPassageIdx(nextIdx);
      const ws = passages[nextIdx].broken.split(' ');
      setWords(ws);
      setFixes({});
      setActiveWord(null);
    } else {
      // Game over
      clearInterval(timerRef.current);
      const totalCorrect = newResults.reduce((a, r) => a + r.correctFixes, 0);
      const totalPossible = newResults.reduce((a, r) => a + r.totalErrors, 0);
      const totalMissed = newResults.reduce((a, r) => a + r.missed, 0);
      const finalScore = Math.max(0, (totalCorrect * 10) - (totalMissed * 5));
      const pct = totalPossible > 0 ? Math.round((totalCorrect / totalPossible) * 100) : 0;
      const timeBonus = Math.max(0, Math.floor((300 - timer) / 10) * 5);

      const finalResults = {
        score: finalScore + timeBonus,
        baseScore: finalScore,
        timeBonus,
        pct,
        totalCorrect,
        totalPossible,
        totalMissed,
        time: timer,
        passages: newResults,
        comment: getExaminerComment(pct),
      };

      setScore(finalScore + timeBonus);
      setResults(finalResults);

      // Save best
      const key = `best_${difficulty}`;
      const prev = savedData[key] || 0;
      if (finalResults.score > prev) {
        const newData = { ...savedData, [key]: finalResults.score, lastPlayed: new Date().toISOString() };
        setSavedData(newData);
        saveBest(newData);
      } else {
        saveBest({ lastPlayed: new Date().toISOString() });
      }

      setScreen('results');
    }
  };

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const allErrorsAttempted = currentPassage
    ? currentPassage.errors.every(e => fixes[e.index] !== undefined)
    : false;

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
      background: 'linear-gradient(135deg, #f59e0b, #f97316)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      marginBottom: '0.25rem',
    },
    subtitle: {
      textAlign: 'center', color: '#64748b', fontSize: '1rem', marginBottom: '2rem',
    },
    card: {
      background: 'rgba(30, 41, 59, 0.7)', borderRadius: '16px',
      border: '1px solid rgba(245, 158, 11, 0.15)', padding: '2rem',
      backdropFilter: 'blur(8px)', marginBottom: '1.5rem',
    },
    btnPrimary: {
      background: 'linear-gradient(135deg, #f59e0b, #f97316)', color: '#fff',
      border: 'none', padding: '0.75rem 2rem', borderRadius: '10px',
      fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer',
      transition: 'transform 0.15s, box-shadow 0.15s',
      boxShadow: '0 4px 20px rgba(245, 158, 11, 0.3)',
    },
    btnSecondary: {
      background: 'rgba(30, 41, 59, 0.9)', color: '#f1f5f9',
      border: '1px solid rgba(100, 116, 139, 0.3)', padding: '0.75rem 2rem',
      borderRadius: '10px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer',
      transition: 'all 0.15s',
    },
    diffBtn: (active) => ({
      background: active
        ? 'linear-gradient(135deg, #f59e0b, #f97316)'
        : 'rgba(30, 41, 59, 0.9)',
      color: active ? '#fff' : '#94a3b8',
      border: active ? 'none' : '1px solid rgba(100, 116, 139, 0.3)',
      padding: '1rem 1.5rem', borderRadius: '12px', fontWeight: 700,
      fontSize: '1rem', cursor: 'pointer', flex: 1, textAlign: 'center',
      transition: 'all 0.2s',
    }),
    word: (isError, fix, isActive) => ({
      display: 'inline-block', padding: '0.35rem 0.5rem', margin: '0.2rem',
      borderRadius: '6px', fontSize: '1.1rem', lineHeight: '1.8',
      cursor: isError && !fix ? 'pointer' : 'default',
      transition: 'all 0.2s',
      border: '2px solid',
      position: 'relative',
      ...(fix?.correct ? {
        background: 'rgba(16, 185, 129, 0.2)', borderColor: '#10b981',
        color: '#10b981', textDecoration: 'line-through',
      } : fix && !fix.correct ? {
        background: 'rgba(239, 68, 68, 0.2)', borderColor: '#ef4444',
        color: '#ef4444',
      } : isActive ? {
        background: 'rgba(245, 158, 11, 0.2)', borderColor: '#f59e0b',
        color: '#f59e0b',
      } : isError ? {
        background: 'rgba(245, 158, 11, 0.08)', borderColor: 'rgba(245, 158, 11, 0.3)',
        color: '#fbbf24',
      } : {
        background: 'transparent', borderColor: 'transparent',
        color: '#cbd5e1',
      }),
    }),
    dropdown: {
      position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
      zIndex: 100, background: '#1e293b', borderRadius: '10px',
      border: '1px solid rgba(245, 158, 11, 0.3)', padding: '0.5rem',
      minWidth: '160px', boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
      marginTop: '4px',
    },
    dropdownItem: {
      display: 'block', width: '100%', padding: '0.5rem 1rem',
      background: 'transparent', border: 'none', color: '#e2e8f0',
      fontSize: '1rem', cursor: 'pointer', borderRadius: '6px',
      textAlign: 'left', transition: 'background 0.15s',
    },
    hud: {
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '0.75rem 1rem', borderRadius: '10px',
      background: 'rgba(15, 23, 42, 0.8)', marginBottom: '1rem',
      border: '1px solid rgba(100, 116, 139, 0.2)',
      flexWrap: 'wrap', gap: '0.5rem',
    },
    hudItem: {
      display: 'flex', alignItems: 'center', gap: '0.5rem',
      fontSize: '0.9rem', fontWeight: 600,
    },
    badge: (color) => ({
      display: 'inline-block', padding: '0.2rem 0.6rem', borderRadius: '6px',
      fontSize: '0.75rem', fontWeight: 700,
      background: `${color}20`, color: color, border: `1px solid ${color}40`,
    }),
    comparison: {
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem',
    },
    compBox: (type) => ({
      padding: '1rem', borderRadius: '10px',
      background: type === 'yours'
        ? 'rgba(59, 130, 246, 0.1)'
        : 'rgba(16, 185, 129, 0.1)',
      border: `1px solid ${type === 'yours' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`,
    }),
    statCard: {
      textAlign: 'center', padding: '1rem', borderRadius: '10px',
      background: 'rgba(15, 23, 42, 0.5)',
    },
  };

  // MENU SCREEN
  if (screen === 'menu') {
    return (
      <div style={s.page}>
        <Navbar />
        <div style={s.container}>
          <h1 style={s.title}>Punctuation Fixer</h1>
          <p style={s.subtitle}>Fix the broken punctuation in each passage -- perfect for AO6 SPaG skills!</p>

          <div style={s.card}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem', color: '#f59e0b' }}>
              How to Play
            </h2>
            <ul style={{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '1.25rem', margin: 0 }}>
              <li>Read the passage with broken punctuation</li>
              <li>Click on highlighted words that contain errors</li>
              <li>Select the correct fix from the dropdown</li>
              <li>Submit when you think you have found all errors</li>
              <li>Earn <strong style={{ color: '#10b981' }}>+10 points</strong> per correct fix, lose <strong style={{ color: '#ef4444' }}>-5 points</strong> for each missed error</li>
              <li>Fix passages quickly for a time bonus!</li>
            </ul>
          </div>

          <div style={s.card}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem', color: '#f59e0b' }}>
              Select Difficulty
            </h2>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {[
                { key: 'easy', label: 'Easy', desc: '3-4 errors' },
                { key: 'medium', label: 'Medium', desc: '5-7 errors' },
                { key: 'hard', label: 'Hard', desc: '8-10 errors' },
              ].map(d => (
                <button key={d.key} style={s.diffBtn(difficulty === d.key)}
                  onClick={() => setDifficulty(d.key)}
                  onMouseEnter={e => { if (difficulty !== d.key) e.target.style.borderColor = '#f59e0b'; }}
                  onMouseLeave={e => { if (difficulty !== d.key) e.target.style.borderColor = 'rgba(100,116,139,0.3)'; }}
                >
                  <div>{d.label}</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 400, marginTop: '0.25rem', opacity: 0.7 }}>{d.desc}</div>
                </button>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <button style={s.btnPrimary} onClick={() => startGame(difficulty)}
                onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.target.style.transform = 'none'}
              >
                Start Game
              </button>
            </div>
          </div>

          {(savedData.best_easy || savedData.best_medium || savedData.best_hard) && (
            <div style={s.card}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem', color: '#f59e0b' }}>
                Best Scores
              </h2>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {['easy', 'medium', 'hard'].map(d => (
                  <div key={d} style={s.statCard}>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.25rem' }}>
                      {d}
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: savedData[`best_${d}`] ? '#f59e0b' : '#334155' }}>
                      {savedData[`best_${d}`] || '--'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{ ...s.card, borderColor: 'rgba(139, 92, 246, 0.2)' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: '#8b5cf6' }}>
              AO6 SPaG Marking Criteria
            </h2>
            <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '0.9rem', margin: 0 }}>
              In GCSE English Language and Literature, <strong style={{ color: '#e2e8f0' }}>AO6</strong> assesses your ability
              to use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling
              and punctuation. Up to <strong style={{ color: '#e2e8f0' }}>16 marks</strong> are available for technical accuracy.
              This game helps you practise identifying and correcting common punctuation errors.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // PLAYING SCREEN
  if (screen === 'playing' && currentPassage) {
    const wordsArr = currentPassage.broken.split(' ');
    const errorsFound = Object.keys(fixes).length;
    const totalErrors = currentPassage.errors.length;

    return (
      <div style={s.page}>
        <Navbar />
        <div style={s.container}>
          <h1 style={{ ...s.title, fontSize: '1.8rem' }}>Punctuation Fixer</h1>

          <div style={s.hud}>
            <div style={s.hudItem}>
              <span style={{ color: '#f59e0b' }}>Score:</span>
              <span style={{ color: '#fbbf24', fontWeight: 800 }}>{score}</span>
            </div>
            <div style={s.hudItem}>
              <span style={{ color: '#64748b' }}>Passage:</span>
              <span>{passageIdx + 1} / {passages.length}</span>
            </div>
            <div style={s.hudItem}>
              <span style={{ color: '#64748b' }}>Errors found:</span>
              <span style={{ color: errorsFound === totalErrors ? '#10b981' : '#f59e0b' }}>
                {errorsFound} / {totalErrors}
              </span>
            </div>
            <div style={s.hudItem}>
              <span style={{ color: '#64748b' }}>Time:</span>
              <span style={{ color: '#3b82f6', fontFamily: 'monospace' }}>{formatTime(timer)}</span>
            </div>
            <div style={s.hudItem}>
              <span style={s.badge(
                difficulty === 'easy' ? '#10b981' : difficulty === 'medium' ? '#f59e0b' : '#ef4444'
              )}>
                {difficulty.toUpperCase()}
              </span>
            </div>
          </div>

          <div style={s.card}>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
                Click on highlighted words to fix the punctuation errors:
              </span>
            </div>
            <div style={{ lineHeight: '2.2', position: 'relative' }}>
              {wordsArr.map((word, idx) => {
                const isError = errorMap[idx] !== undefined;
                const fix = fixes[idx];
                const isActive = activeWord === idx;

                return (
                  <span key={idx} style={{ position: 'relative', display: 'inline-block' }}>
                    <span
                      style={s.word(isError, fix, isActive)}
                      onClick={() => handleWordClick(idx)}
                      onMouseEnter={e => {
                        if (isError && !fix) {
                          e.target.style.transform = 'translateY(-1px)';
                        }
                      }}
                      onMouseLeave={e => {
                        e.target.style.transform = 'none';
                      }}
                    >
                      {fix ? fix.choice : word}
                      {fix?.correct && (
                        <span style={{ marginLeft: '4px', fontSize: '0.85rem' }}>&#10003;</span>
                      )}
                      {fix && !fix.correct && (
                        <span style={{ marginLeft: '4px', fontSize: '0.85rem' }}>&#10007;</span>
                      )}
                    </span>
                    {isActive && (
                      <div ref={dropdownRef} style={s.dropdown}>
                        <div style={{ fontSize: '0.75rem', color: '#f59e0b', padding: '0.25rem 0.5rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                          {ERROR_TYPE_LABELS[errorMap[idx].type] || 'Fix this error'}
                        </div>
                        {getFixOptions(idx).map((opt, oi) => (
                          <button key={oi} style={s.dropdownItem}
                            onClick={() => handleFix(idx, opt)}
                            onMouseEnter={e => e.target.style.background = 'rgba(245, 158, 11, 0.15)'}
                            onMouseLeave={e => e.target.style.background = 'transparent'}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </span>
                );
              })}
            </div>

            {currentPassage.errors.length > 0 && (
              <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748b', marginRight: '0.25rem', lineHeight: '1.8' }}>Error types:</span>
                {[...new Set(currentPassage.errors.map(e => e.type))].map(type => (
                  <span key={type} style={s.badge(ERROR_TYPE_COLORS[type] || '#94a3b8')}>
                    {ERROR_TYPE_LABELS[type] || type}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div style={{ textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button style={s.btnSecondary} onClick={() => { clearInterval(timerRef.current); setScreen('menu'); }}>
              Quit
            </button>
            <button
              style={{
                ...s.btnPrimary,
                opacity: allErrorsAttempted ? 1 : 0.6,
              }}
              onClick={submitPassage}
              onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.target.style.transform = 'none'}
            >
              {passageIdx < passages.length - 1 ? 'Submit & Next' : 'Submit & Finish'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // RESULTS SCREEN
  if (screen === 'results' && results) {
    return (
      <div style={s.page}>
        <Navbar />
        <div style={s.container}>
          <h1 style={{ ...s.title, fontSize: '2rem' }}>Results</h1>

          <div style={s.card}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={s.statCard}>
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Final Score</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#f59e0b' }}>{results.score}</div>
              </div>
              <div style={s.statCard}>
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Accuracy</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: results.pct >= 80 ? '#10b981' : results.pct >= 50 ? '#f59e0b' : '#ef4444' }}>
                  {results.pct}%
                </div>
              </div>
              <div style={s.statCard}>
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Time</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#3b82f6' }}>{formatTime(results.time)}</div>
              </div>
              <div style={s.statCard}>
                <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Time Bonus</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#8b5cf6' }}>+{results.timeBonus}</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ ...s.hudItem, background: 'rgba(16,185,129,0.1)', padding: '0.5rem 1rem', borderRadius: '8px' }}>
                <span style={{ color: '#10b981' }}>Correct:</span>
                <span style={{ color: '#10b981', fontWeight: 800 }}>{results.totalCorrect}</span>
              </div>
              <div style={{ ...s.hudItem, background: 'rgba(239,68,68,0.1)', padding: '0.5rem 1rem', borderRadius: '8px' }}>
                <span style={{ color: '#ef4444' }}>Missed:</span>
                <span style={{ color: '#ef4444', fontWeight: 800 }}>{results.totalMissed}</span>
              </div>
              <div style={{ ...s.hudItem, background: 'rgba(100,116,139,0.1)', padding: '0.5rem 1rem', borderRadius: '8px' }}>
                <span style={{ color: '#94a3b8' }}>Total Errors:</span>
                <span style={{ fontWeight: 800 }}>{results.totalPossible}</span>
              </div>
            </div>
          </div>

          {/* Examiner's Comment */}
          <div style={{ ...s.card, borderColor: 'rgba(139, 92, 246, 0.3)', background: 'rgba(139, 92, 246, 0.08)' }}>
            <h3 style={{ color: '#8b5cf6', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Examiner&apos;s Comment
            </h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.7', margin: 0, fontSize: '0.95rem' }}>
              {results.comment}
            </p>
          </div>

          {/* Toggle Comparison */}
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <button
              style={s.btnSecondary}
              onClick={() => setShowComparison(!showComparison)}
            >
              {showComparison ? 'Hide' : 'Show'} Passage Comparisons
            </button>
          </div>

          {showComparison && results.passages.map((pRes, pi) => (
            <div key={pi} style={{ ...s.card, marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: '#f59e0b' }}>
                Passage {pi + 1}
                <span style={{ marginLeft: '0.75rem', fontSize: '0.85rem', fontWeight: 600, color: pRes.correctFixes === pRes.totalErrors ? '#10b981' : '#f59e0b' }}>
                  {pRes.correctFixes}/{pRes.totalErrors} correct
                </span>
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={s.compBox('yours')}>
                  <div style={{ fontSize: '0.75rem', color: '#3b82f6', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Your Version
                  </div>
                  <p style={{ color: '#cbd5e1', lineHeight: '1.7', margin: 0, fontSize: '0.9rem' }}>
                    {pRes.broken.split(' ').map((w, wi) => {
                      const detail = pRes.details.find(d => d.index === wi);
                      if (detail && detail.playerChoice) {
                        return detail.playerChoice;
                      }
                      return w;
                    }).join(' ')}
                  </p>
                </div>
                <div style={s.compBox('correct')}>
                  <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Correct Version
                  </div>
                  <p style={{ color: '#cbd5e1', lineHeight: '1.7', margin: 0, fontSize: '0.9rem' }}>
                    {pRes.fixed}
                  </p>
                </div>
              </div>

              {/* Error details */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {pRes.details.map((d, di) => (
                  <div key={di} style={{
                    padding: '0.4rem 0.75rem', borderRadius: '8px', fontSize: '0.8rem',
                    fontWeight: 600,
                    background: d.status === 'correct' ? 'rgba(16,185,129,0.1)' :
                      d.status === 'wrong' ? 'rgba(239,68,68,0.1)' : 'rgba(245,158,11,0.1)',
                    color: d.status === 'correct' ? '#10b981' :
                      d.status === 'wrong' ? '#ef4444' : '#f59e0b',
                    border: `1px solid ${d.status === 'correct' ? 'rgba(16,185,129,0.3)' :
                      d.status === 'wrong' ? 'rgba(239,68,68,0.3)' : 'rgba(245,158,11,0.3)'}`,
                  }}>
                    <span style={{ marginRight: '0.5rem' }}>
                      {d.status === 'correct' ? '\u2713' : d.status === 'wrong' ? '\u2717' : '?'}
                    </span>
                    {d.brokenWord} {'\u2192'} {d.fixedWord}
                    <span style={{ marginLeft: '0.5rem', opacity: 0.7 }}>
                      ({ERROR_TYPE_LABELS[d.type] || d.type})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
            <button style={s.btnSecondary} onClick={() => setScreen('menu')}>
              Back to Menu
            </button>
            <button style={s.btnPrimary} onClick={() => startGame(difficulty)}
              onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.target.style.transform = 'none'}
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Fallback
  return (
    <div style={s.page}>
      <Navbar />
      <div style={s.container}>
        <p>Loading...</p>
      </div>
    </div>
  );
}
