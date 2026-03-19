import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, RotateCcw, BookOpen, CheckCircle, XCircle, ChevronRight, Award, Star } from 'lucide-react';
import Navbar from '../../components/Navbar';
import GameWrapper from '../../components/GameWrapper';

const GRADE_BANDS = ['Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9'];

const ESSAYS = [
  // --- 4 Language Analysis Responses (Q2/Q3 style) ---
  {
    type: 'Language Analysis',
    question: 'AQA Paper 1, Q2: How does the writer use language to describe the storm?',
    response: `The writer uses lots of language techniques to describe the storm. They say the wind "screamed through the broken shutters" which is personification because wind can't actually scream. This makes the storm sound angry and alive, like it's attacking the house on purpose. The verb "screamed" has connotations of pain and fear, which creates a threatening atmosphere for the reader.

The writer also uses a metaphor when they describe the rain as "a thousand tiny hammers on the roof." This comparison suggests the rain is violent and relentless, almost like it's trying to break through. The word "hammers" implies something industrial and aggressive, which contrasts with what rain normally feels like.

There is also a short sentence: "Then silence." This creates a dramatic pause after all the chaos of the storm description. It makes the reader feel shocked and uncertain about what will happen next. The contrast between the long, detailed sentences before and this sudden short one mirrors how storms can suddenly stop.

Finally, the writer uses listing when they describe "branches, tiles, fragments of glass scattered across the garden." The list of three builds up an image of total destruction and shows the aftermath of the storm's power.`,
    actualGrade: 'Grade 6',
    markSchemeNotes: 'Clear understanding of language with appropriate examples. Comments on effects of techniques (personification, metaphor, short sentences, listing). Some analysis of word-level choices ("screamed", "hammers") with reasonable explanations of connotations. Lacks the sophistication and perceptive analysis needed for higher grades — explanations are competent but somewhat formulaic.',
    aoCriteria: 'AO2: Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology.',
    improvementTip: 'To reach Grade 7+, explore multiple layers of meaning in single words, consider how techniques work together to build meaning, and analyse the writer\'s intent more precisely rather than using generic phrases like "creates atmosphere."'
  },
  {
    type: 'Language Analysis',
    question: 'Edexcel English Language, Q3: Analyse how the writer presents the character of Mrs Dalloway in this extract.',
    response: `The writer presents Mrs Dalloway as posh. She is described as wearing nice clothes and going to a party. The writer says she "felt very young" which shows she is happy. She walks through London and sees flowers which she likes.

The writer uses adjectives to describe things. For example they say the flowers are "delicious" which means she likes them. There is also description of the morning which is "fresh" showing it is a nice day.

Mrs Dalloway seems like a nice person because she is friendly. The writer describes her going outside and enjoying herself. She thinks about things from her past which shows she has memories.

The language is quite descriptive and the writer uses lots of details. This makes the reader feel like they are there with Mrs Dalloway walking through London. Overall the writer presents Mrs Dalloway as a happy wealthy woman who enjoys life.`,
    actualGrade: 'Grade 3',
    markSchemeNotes: 'Simple, limited comments on language with little genuine analysis. Identifies basic features ("adjectives", "descriptive") but does not explore effects meaningfully. Assertions without development — "shows she is happy" with no exploration of why or how. Paraphrases rather than analyses. No subject terminology applied with purpose. Struggles to move beyond surface-level description.',
    aoCriteria: 'AO2: Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology.',
    improvementTip: 'To reach Grade 4+, quote specific words and phrases, explain what techniques the writer uses (e.g. sensory language, stream of consciousness), and describe the effect on the reader with more detail than "it shows" or "it makes the reader feel."'
  },
  {
    type: 'Language Analysis',
    question: 'AQA Paper 2, Q3: How does the writer use language to persuade the reader that zoos should be abolished?',
    response: `The writer employs a powerfully emotive lexical field of imprisonment throughout the extract: "caged," "confined," "trapped," and "incarcerated" create a sustained parallel between zoos and prisons that positions the reader to view these institutions as morally indefensible. The deliberate choice of "incarcerated" — a term loaded with legal and criminal connotations — elevates the animals' status to that of wrongly convicted prisoners, compelling the reader's sympathy through an implied injustice.

Structurally, the writer deploys a tricolon — "pacing, circling, slowly losing their minds" — where the progressive verb forms create a sense of endless, repetitive suffering. The climactic final element shifts from physical to psychological damage, which is particularly persuasive because it challenges the common defence that animals in zoos are physically well cared for.

The rhetorical question "Would you swap your freedom for a warm meal?" directly confronts the reader, collapsing the distance between human and animal experience. The second person pronoun "you" makes this challenge inescapable and personal. This is immediately followed by the blunt declarative "Neither would they," where the pronoun "they" grants animals agency and equivalence with humans.

Furthermore, the writer's use of statistical evidence — "seventy-five percent of elephants in UK zoos display stereotypic behaviours" — anchors the emotional argument in empirical authority, making dismissal more difficult for a sceptical reader.`,
    actualGrade: 'Grade 9',
    markSchemeNotes: 'Sophisticated, perceptive analysis that explores multiple layers of meaning. Precise subject terminology used purposefully (lexical field, tricolon, progressive verb forms, declarative). Analyses the cumulative and combined effects of techniques. Considers writer\'s intent and reader positioning with nuance. Comments on structural and grammatical choices, not just word-level features. Evaluates how language choices serve the argument\'s persuasive function.',
    aoCriteria: 'AO2: Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology.',
    improvementTip: 'This is a top-band response. To maintain this standard, continue exploring how techniques interact, consider alternative interpretations, and sustain this level of analytical precision throughout a full exam response.'
  },
  {
    type: 'Language Analysis',
    question: 'AQA Paper 1, Q3: How does the writer structure the text to interest the reader?',
    response: `At the beginning of the extract, the writer starts with a wide description of the whole city, describing the "sprawling rooftops" and "distant hum of traffic." This gives the reader a broad perspective and sets the scene. Then the focus gradually narrows down to the specific street and then to the house, like a camera zooming in. This shift in focus draws the reader closer to the action and builds curiosity.

In the middle of the extract, the pace changes. The writer uses shorter paragraphs and dialogue appears for the first time. This speeds things up and creates tension because the reader can sense something is about to happen. The conversation between the two characters is quite tense with pauses shown by ellipsis.

The writer also uses a flashback in the middle section where the narrator remembers a childhood event. This interrupts the present-day narrative and gives the reader background information that helps explain why the character is so nervous. It creates a contrast between the innocence of childhood and the current threatening situation.

At the end, there is a cliffhanger — "the door handle began to turn." This structural choice leaves the reader in suspense and wanting to read on. The whole extract moves from calm to tense, which is an effective way to engage the reader.`,
    actualGrade: 'Grade 7',
    markSchemeNotes: 'Clear, detailed analysis of structural features with effective use of terminology (focus shift, pace, flashback, cliffhanger). Tracks the development across the whole text (beginning, middle, end) and explains the effects on the reader. The cinematic metaphor "like a camera zooming in" shows thoughtful engagement. Analysis is secure and detailed but could be more perceptive — the flashback analysis, for instance, could explore how it creates dramatic irony or foreshadows events.',
    aoCriteria: 'AO2: Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology.',
    improvementTip: 'To reach Grade 8+, explore how structural choices create more complex effects — e.g. how the flashback might create dramatic irony, or how the shift in narrative pace mirrors the character\'s psychological state. Consider the writer\'s deliberate manipulation of reader expectations.'
  },

  // --- 4 Literature Extract Responses ---
  {
    type: 'Literature Analysis',
    question: 'How does Shakespeare present the theme of ambition in this extract from Macbeth? (Act 1, Scene 7 — "If it were done when \'tis done")',
    response: `In this extract Shakespeare presents ambition as something dangerous. Macbeth is thinking about killing Duncan and he uses a soliloquy to show his thoughts. He says "if it were done when 'tis done, then 'twere well it were done quickly" which shows he wants to get the murder over with fast.

Shakespeare uses the word "done" three times which is repetition. This shows Macbeth is trying to convince himself. He is ambitious because he wants to be king but he is also scared of the consequences. He talks about "judgment" which could mean God's judgment because people in Shakespeare's time were very religious.

Macbeth also says Duncan is his "kinsman" and his "host" which shows he knows killing Duncan would be wrong because of the rules of hospitality. Shakespeare is showing that ambition can make people go against what they know is right.

The audience would find this interesting because they know Macbeth is going to do the murder anyway. This creates dramatic irony and tension. Overall Shakespeare presents ambition as a force that conflicts with morality.`,
    actualGrade: 'Grade 5',
    markSchemeNotes: 'Developing analysis with some relevant points about ambition. Identifies techniques (soliloquy, repetition) and makes some valid comments about effects. Begins to consider context (religious beliefs, hospitality codes) but these are not fully integrated into the analysis. The response explains rather than analyses at points — "shows he is ambitious" without fully exploring how the language reveals the complexity of Macbeth\'s psychological state. Some awareness of audience response but underdeveloped.',
    aoCriteria: 'AO1: Read, respond to texts, maintaining a critical style and using textual references. AO2: Analyse language, form and structure. AO3: Show understanding of contexts.',
    improvementTip: 'To reach Grade 6+, analyse specific word choices in more depth (e.g. why "done" is deliberately ambiguous — does it mean "finished" or "committed"?), explore the conditional "if" that opens the speech, and develop contextual points more thoroughly.'
  },
  {
    type: 'Literature Analysis',
    question: 'How does Priestley present social responsibility in this extract from An Inspector Calls? (Act 3 — Sheila\'s final speech)',
    response: `Priestley uses Sheila as a mouthpiece for his socialist message in this extract. Her transformation throughout the play culminates here — she has moved from being a "pretty" girl who abused her consumer power to someone who recognises collective social responsibility. When she says "You're pretending everything's all right," the present continuous verb "pretending" exposes her parents' deliberate self-deception, and her direct accusation signals a complete reversal of the family hierarchy.

The dramatic irony is devastating: while Mr and Mrs Birling celebrate the Inspector's apparent fraudulence, Sheila understands that the moral truth of his message is independent of his identity. Priestley structures this moment so that the younger generation's moral clarity contrasts sharply with the older generation's wilful ignorance, embodying his belief that post-war Britain's hope lay with the young.

Sheila's line "It frightens me the way you talk" is particularly significant. The verb "frightens" suggests that moral blindness is not merely disappointing but genuinely dangerous — Priestley implies that the attitudes of the capitalist class pose an existential threat to social cohesion. Written in 1945 but set in 1912, Priestley's audience would recognise this as prophetic: the Birlings' refusal to accept responsibility mirrors the complacency that led to two world wars.

The stage direction "(with feeling)" indicates Priestley wants Sheila's emotion to be visible, ensuring the audience connects intellectually and emotionally with his argument.`,
    actualGrade: 'Grade 8',
    markSchemeNotes: 'Convincing, sustained analysis with a perceptive understanding of Priestley\'s methods and intentions. Integrates context (1945/1912 time settings, socialist ideology) organically into analysis rather than bolting it on. Precise terminology (present continuous, dramatic irony, stage directions) deployed purposefully. Explores the interplay between form, language and meaning. The point about moral truth being independent of the Inspector\'s identity shows sophisticated critical thinking. Close to Grade 9 but could push further with alternative interpretations.',
    aoCriteria: 'AO1: Read, respond to texts, maintaining a critical style and using textual references. AO2: Analyse language, form and structure. AO3: Show understanding of contexts.',
    improvementTip: 'To reach Grade 9, consider offering alternative readings — could Sheila\'s transformation be seen as performative or incomplete? Engage with critical perspectives (feminist, Marxist) and explore how Priestley\'s dramatic form itself is an argument for social change.'
  },
  {
    type: 'Literature Analysis',
    question: 'How does Dickens present Scrooge\'s transformation in this extract from A Christmas Carol? (Stave 5 — "I am as light as a feather")',
    response: `Dickens presents Scrooge's transformation through his language and behaviour in this extract. The simile "light as a feather" shows that Scrooge feels free and happy, which is very different from how he was at the start of the novella when he was described as cold and hard. The list of similes "as happy as an angel, as merry as a schoolboy" reinforces this change by comparing him to innocent and joyful figures.

Scrooge's exclamations like "I don't know what day of the month it is!" show his excitement and confusion. The use of exclamation marks throughout this section contrasts with his earlier dialogue which was short and dismissive. Dickens is showing that Scrooge has become a completely different person.

The reader would feel pleased at this point because Scrooge has finally changed. Dickens wrote this in Victorian times when there was a big gap between rich and poor, so Scrooge's transformation is meant to be a message to wealthy people that they should be more generous. The novella was written partly to highlight the conditions of the poor.

Scrooge also opens the window and talks to a boy in the street, which symbolises him reconnecting with the outside world after being isolated. He sends a turkey to the Cratchits which shows his generosity. Overall Dickens presents the transformation as total and joyful.`,
    actualGrade: 'Grade 6',
    markSchemeNotes: 'Clear, sustained response with a good range of relevant points. Identifies language features (similes, exclamations, contrast) and comments on their effects. Makes relevant contextual links to Victorian poverty and Dickens\' purpose, though these could be more tightly woven into analysis. The structural contrast with the opening is noted but not deeply explored. Analysis is sound and competent but tends toward description of effects rather than exploration of deeper meaning — e.g. does not consider the religious dimension of redemption or the allegorical nature of the novella.',
    aoCriteria: 'AO1: Read, respond to texts, maintaining a critical style and using textual references. AO2: Analyse language, form and structure. AO3: Show understanding of contexts.',
    improvementTip: 'To reach Grade 7+, explore how the similes connect to specific ideas (angels = spiritual redemption, schoolboy = reclaiming lost innocence), consider Dickens\' allegorical purpose more deeply, and analyse how the novella\'s form (five staves, like a carol) reinforces the theme of transformation.'
  },
  {
    type: 'Literature Analysis',
    question: 'How does Stevenson present the duality of human nature in this extract from Jekyll and Hyde? (Chapter 10 — Jekyll\'s full statement)',
    response: `Stevenson shows that people have two sides. Jekyll says he has a good side and a bad side. The bad side is Hyde who does terrible things. This shows duality because Jekyll is good and Hyde is bad.

Jekyll does experiments to separate the two sides. He drinks a potion and turns into Hyde. Stevenson uses this to show that everyone has darkness inside them. Hyde is described as small and ugly which shows he is evil.

The extract is set in Victorian London when people had to behave properly. Jekyll is a respectable doctor but secretly he wants to do bad things. This is like how Victorian society had a public face and a private face. Stevenson is criticising society for being hypocritical.

In conclusion, Stevenson presents duality through the characters of Jekyll and Hyde who represent good and evil in all people.`,
    actualGrade: 'Grade 4',
    markSchemeNotes: 'Some understanding of the theme with basic points about duality. Makes simple assertions ("Jekyll is good and Hyde is bad") without analysing the complexity of their relationship. Very limited engagement with language — no quotations from the extract, no analysis of specific word choices or techniques. Contextual knowledge is present but generalised and not connected to specific textual details. The response tells rather than shows, and reads more like a summary than an analysis. Needs to engage with the actual extract text.',
    aoCriteria: 'AO1: Read, respond to texts, maintaining a critical style and using textual references. AO2: Analyse language, form and structure. AO3: Show understanding of contexts.',
    improvementTip: 'To reach Grade 5+, you must quote directly from the extract and analyse specific language choices. Explore the complexity of Jekyll and Hyde\'s relationship — is it really as simple as good vs evil? Consider how Stevenson\'s narrative structure (multiple narrators, delayed revelation) itself reflects the theme of hidden truths.'
  },

  // --- 4 Creative Writing Pieces ---
  {
    type: 'Creative Writing',
    question: 'AQA Paper 1, Q5: Write a description suggested by this picture of an abandoned fairground.',
    response: `The Ferris wheel stood frozen against the grey sky like a giant clock that had stopped ticking. Its carriages — once bright red and gold — now hung at odd angles, paint peeling in long strips that fluttered in the wind like dead skin. Below, the trampled grass had turned to mud, crisscrossed with the ghostly tracks of a thousand forgotten footsteps.

I walked slowly through what had been the entrance. The ticket booth still had a sign: "ADULTS £3, CHILDREN £1.50" — the prices of another era, preserved in faded ink. A single teddy bear sat propped against the shooting gallery, one glass eye missing, its fur matted with rain. Something about that bear made my stomach tighten. It had been waiting for someone who would never come back.

The carousel was the worst. Its horses were trapped mid-gallop, mouths open in painted screams. One had fallen from its pole and lay on its side in the dirt, legs still reaching forward. I thought of my daughter — how she used to grip the golden pole with both hands, laughing as the music played. The music box was still there, rusted shut, holding its last song prisoner inside corroded gears.

Wind moved through the empty stalls, carrying the smell of rust and something sweeter underneath — candyfloss, maybe, or the memory of it. The dodgems sat in their arena like abandoned chess pieces, and I realised that this place hadn't just been left. It had been forgotten. And there is a particular cruelty in forgetting places that were built entirely for joy.`,
    actualGrade: 'Grade 8',
    markSchemeNotes: 'Compelling, crafted writing with a strong sense of atmosphere and control. Sustained use of effective imagery (Ferris wheel as stopped clock, horses\' "painted screams," music box holding its song "prisoner"). The personal emotional thread (the daughter) gives the description a narrative depth that elevates it beyond mere scene-setting. Varied sentence structures used for deliberate effect. Vocabulary is ambitious and precise ("corroded," "preserved," "cruelty"). The final reflection adds a conceptual layer. Punctuation is used artistically (dashes, the list of prices). Very strong but could push into Grade 9 with even more risk-taking in structure or voice.',
    aoCriteria: 'AO5: Content and organisation — communicate clearly, effectively and imaginatively. AO6: Technical accuracy — use a range of vocabulary and sentence structures with accurate spelling, punctuation and grammar.',
    improvementTip: 'To reach Grade 9, experiment with more unconventional structural choices — perhaps a fragmented or non-linear approach that mirrors the disintegration of the fairground. Take risks with form: could the piece use second person, or shift tense unexpectedly to blur past and present?'
  },
  {
    type: 'Creative Writing',
    question: 'Edexcel Paper 1: Write a story that begins with the sentence "The door was already open when I arrived."',
    response: `The door was already open when I arrived. I went inside and looked around. The house was old and dark. There were cobwebs on the ceiling and dust on the floor. It was very quiet and a bit scary.

I walked down the hallway and saw a room on the left. Inside there was a table with a candle on it. The candle was still burning which was weird because no one was supposed to be here. I started to feel nervous.

Then I heard a noise upstairs. It sounded like footsteps. I didn't know if I should go upstairs or leave. I decided to be brave and go up. The stairs were creaky and old. At the top there was a long corridor with doors on both sides.

I opened the first door and saw an empty room with just a chair in it. The second room had a bed with old sheets. The third room was locked. I tried to open it but it wouldn't budge. Then the footsteps started again, coming from behind the locked door.

I was really scared now. I ran back down the stairs and out the front door. When I got outside I looked back at the house and saw a face in the window of the locked room. I ran all the way home and never went back.`,
    actualGrade: 'Grade 4',
    markSchemeNotes: 'Simple, sequential narrative with basic vocabulary. The story follows a logical structure but relies heavily on chronological listing ("Then... I... Then..."). Description is limited and tells rather than shows ("It was very quiet and a bit scary"). No figurative language or ambitious vocabulary. Sentence structures are simple and repetitive (Subject-Verb-Object pattern dominates). The story has a clear beginning, middle and end but lacks crafted detail, tension-building, or any distinctive voice. Spelling and grammar are largely accurate, which prevents it from falling to Grade 3.',
    aoCriteria: 'AO5: Content and organisation — communicate clearly, effectively and imaginatively. AO6: Technical accuracy — use a range of vocabulary and sentence structures with accurate spelling, punctuation and grammar.',
    improvementTip: 'To reach Grade 5+, replace "telling" phrases like "I was really scared" with sensory details that show fear (racing heartbeat, sweating palms, shortened breath). Use varied sentence openings, add figurative language (similes, metaphors, personification), and build tension through pacing rather than just listing events.'
  },
  {
    type: 'Creative Writing',
    question: 'AQA Paper 1, Q5: Write a narrative about a time when everything changed.',
    response: `Tuesday. That's when it happened. Not a dramatic Tuesday — no thunder, no ominous sky. Just a Tuesday that smelled like toast and sounded like Radio 2.

Mum was at the kitchen table, but she wasn't eating. She was holding her phone in both hands the way people hold things they're afraid of dropping. Or afraid of keeping.

"Sit down," she said, and the two words rearranged the room. The kitchen I'd known my whole life — the wonky clock, the fridge magnets from holidays we couldn't afford, the permanent smell of something slightly burning — suddenly felt like a set. A stage. And I was about to be given a role I hadn't auditioned for.

She told me Dad wasn't coming back. Not in the dramatic film way — no affair, no argument, no slammed doors. He'd just... left. Quietly. The way a light goes off in a room you're not in. You only notice later, when you reach for the switch and find darkness already there.

I said "okay" because that's what you say when language fails and your body hasn't caught up with your brain. The toast popped up. We both looked at it like it had said something inappropriate.

After she went to work I sat in his chair. It still held the shape of him — a dent in the cushion, a crease in the armrest where he'd rest his tea. I thought about how a person can be everywhere in a house and nowhere in it at the same time. How the evidence of someone doesn't equal the someone.

The clock ticked. The fridge hummed. Radio 2 played something upbeat and utterly wrong.

Everything had changed. And the toast went cold.`,
    actualGrade: 'Grade 9',
    markSchemeNotes: 'Exceptional writing that demonstrates complete control of tone, pace, and voice. The understated, controlled narrative voice is perfectly suited to the subject matter — this is a writer who understands that restraint can be more powerful than melodrama. Imagery is original and precise (the phone "held like something afraid of dropping," the light going off in another room, the chair holding "the shape of him"). The toast motif bookends the piece brilliantly. Sentence variety is masterful — fragments, compounds, and complex sentences all serve deliberate purposes. The reflection "the evidence of someone doesn\'t equal the someone" is genuinely profound. Technically flawless with sophisticated punctuation choices.',
    aoCriteria: 'AO5: Content and organisation — communicate clearly, effectively and imaginatively. AO6: Technical accuracy — use a range of vocabulary and sentence structures with accurate spelling, punctuation and grammar.',
    improvementTip: 'This is an exemplary response. Maintain this level of authentic voice, emotional restraint, and precise imagery. The ability to find the extraordinary in ordinary moments is exactly what top-band creative writing requires.'
  },
  {
    type: 'Creative Writing',
    question: 'AQA Paper 1, Q5: Describe a place that is full of life and energy.',
    response: `The market was alive with colour and noise. Stalls stretched out in every direction, their canopies a patchwork of red, orange and blue against the pale morning sky. Vendors called out to passers-by, their voices competing with each other in a cheerful chaos that bounced off the old brick walls surrounding the square.

The air was thick with smells that tangled together: frying onions from the burger van, the sharp sweetness of fresh strawberries, coffee from the artisan stand where a woman with paint-stained fingers poured careful spirals of milk into ceramic cups. A busker near the fountain played guitar, his case open at his feet like a mouth waiting to be fed, a handful of coins glinting inside.

Children weaved between the legs of adults like small, determined fish swimming upstream. One boy tugged his mother toward a stall selling homemade fudge, his free hand already reaching. An elderly couple moved slowly through the crowd, arm in arm, a small island of calm in the current of bodies.

I stopped at the flower stall where buckets of sunflowers stood to attention like bright soldiers. The woman running it had soil under her nails and a smile that could warm a room. "Pick your favourite," she said, gesturing at the blooms. I chose one that leaned slightly to the left, imperfect and cheerful, like the market itself.

Above it all, pigeons circled lazily, and the clock tower chimed eleven times, each note dissolving into the noise below like sugar into tea.`,
    actualGrade: 'Grade 7',
    markSchemeNotes: 'Well-crafted descriptive writing with a strong sense of place and effective sensory detail. Good range of figurative language (guitar case "like a mouth," children "like small determined fish," sunflowers "like bright soldiers"). The writing is engaging and shows clear control of tone and structure. Vocabulary is varied and sometimes precise ("patchwork," "artisan," "dissolving"). The piece maintains focus and builds a coherent scene. However, some similes are slightly conventional, and the piece could take more risks with structure or perspective to push into the highest band. The observation is skilled but stays within comfortable territory.',
    aoCriteria: 'AO5: Content and organisation — communicate clearly, effectively and imaginatively. AO6: Technical accuracy — use a range of vocabulary and sentence structures with accurate spelling, punctuation and grammar.',
    improvementTip: 'To reach Grade 8+, push beyond conventional similes and find more surprising, original comparisons. Experiment with perspective shifts, vary paragraph length more dramatically for effect, and add a reflective or conceptual layer that elevates the description beyond surface observation.'
  }
];

const STORAGE_KEY = 'learnright_game_marktheessay';
const ESSAYS_PER_ROUND = 6;

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

function gradeIndex(grade) {
  return GRADE_BANDS.indexOf(grade);
}

function calculatePoints(selectedGrade, actualGrade) {
  const diff = Math.abs(gradeIndex(selectedGrade) - gradeIndex(actualGrade));
  if (diff === 0) return 30;
  if (diff === 1) return 15;
  return 0;
}

const TYPE_COLORS = {
  'Language Analysis': { bg: '#1e3a5f', border: '#3b82f6', text: '#93c5fd' },
  'Literature Analysis': { bg: '#3b1f4e', border: '#a855f7', text: '#d8b4fe' },
  'Creative Writing': { bg: '#1a3c34', border: '#10b981', text: '#6ee7b7' },
};

export default function MarkTheEssay() {
  const [phase, setPhase] = useState('menu');
  const [essays, setEssays] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [results, setResults] = useState([]);
  const [leaderboard, setLeaderboard] = useState(getLeaderboard());

  const startGame = useCallback(() => {
    const selected = shuffle(ESSAYS).slice(0, ESSAYS_PER_ROUND);
    setEssays(selected);
    setCurrentIndex(0);
    setSelectedGrade(null);
    setRevealed(false);
    setResults([]);
    setPhase('playing');
  }, []);

  const handleSubmitGrade = useCallback(() => {
    if (!selectedGrade) return;
    setRevealed(true);
  }, [selectedGrade]);

  const handleNext = useCallback(() => {
    const essay = essays[currentIndex];
    const points = calculatePoints(selectedGrade, essay.actualGrade);
    const newResults = [...results, { essay, selectedGrade, points }];
    setResults(newResults);

    if (currentIndex + 1 >= ESSAYS_PER_ROUND) {
      const totalScore = newResults.reduce((s, r) => s + r.points, 0);
      const exactMatches = newResults.filter(r => r.points === 30).length;
      saveScore({
        score: totalScore,
        exactMatches,
        date: new Date().toISOString(),
      });
      setLeaderboard(getLeaderboard());
      const today = new Date().toISOString().slice(0, 10);
      localStorage.setItem('learnright_last_game_date', today);
      setPhase('results');
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelectedGrade(null);
      setRevealed(false);
    }
  }, [essays, currentIndex, selectedGrade, results]);

  const totalScore = results.reduce((s, r) => s + r.points, 0);

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <Link to="/games" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0 }}>Mark the Essay</h1>
            <p style={{ color: '#94a3b8', margin: '0.25rem 0 0', fontSize: '0.9rem' }}>
              Read student essays and assign grades using real mark scheme criteria
            </p>
          </div>
        </div>

        {/* MENU PHASE */}
        {phase === 'menu' && (
          <div>
            <div style={{
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              borderRadius: '1rem', padding: '2rem', border: '1px solid #1e293b',
              marginBottom: '2rem', textAlign: 'center'
            }}>
              <BookOpen size={48} style={{ color: '#f59e0b', marginBottom: '1rem' }} />
              <h2 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.75rem' }}>How It Works</h2>
              <div style={{ color: '#94a3b8', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
                <p style={{ marginBottom: '0.5rem' }}>1. Read a sample student essay response</p>
                <p style={{ marginBottom: '0.5rem' }}>2. Assign a GCSE grade (Grade 3 to Grade 9)</p>
                <p style={{ marginBottom: '0.5rem' }}>3. See the actual grade with examiner commentary</p>
                <p style={{ marginBottom: '1rem' }}>4. Grade {ESSAYS_PER_ROUND} essays per round</p>
                <div style={{
                  background: '#0f172a', borderRadius: '0.5rem', padding: '1rem',
                  border: '1px solid #1e293b'
                }}>
                  <p style={{ fontWeight: 600, color: '#f59e0b', marginBottom: '0.5rem' }}>Scoring</p>
                  <p>Exact grade match: <span style={{ color: '#22c55e', fontWeight: 600 }}>30 points</span></p>
                  <p>One grade off: <span style={{ color: '#f59e0b', fontWeight: 600 }}>15 points</span></p>
                  <p>Two or more off: <span style={{ color: '#ef4444', fontWeight: 600 }}>0 points</span></p>
                  <p style={{ marginTop: '0.5rem', fontWeight: 600 }}>Max score: {ESSAYS_PER_ROUND * 30} points</p>
                </div>
              </div>
              <button onClick={startGame} style={{
                marginTop: '1.5rem', padding: '0.875rem 2.5rem', background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                color: '#000', fontWeight: 700, fontSize: '1.1rem', border: 'none', borderRadius: '0.75rem', cursor: 'pointer'
              }}>
                Start Marking
              </button>
            </div>

            {/* Leaderboard */}
            {leaderboard.length > 0 && (
              <div style={{
                background: '#1e293b', borderRadius: '1rem', padding: '1.5rem',
                border: '1px solid #334155'
              }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}>
                  <Trophy size={18} style={{ color: '#f59e0b' }} /> Best Scores
                </h3>
                {leaderboard.slice(0, 5).map((entry, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '0.5rem 0', borderBottom: i < 4 ? '1px solid #334155' : 'none'
                  }}>
                    <span style={{ color: '#94a3b8' }}>
                      #{i + 1} — {new Date(entry.date).toLocaleDateString()}
                    </span>
                    <span style={{ fontWeight: 700, color: '#f59e0b' }}>
                      {entry.score}/{ESSAYS_PER_ROUND * 30}
                      {entry.exactMatches > 0 && (
                        <span style={{ color: '#22c55e', fontSize: '0.8rem', marginLeft: '0.5rem' }}>
                          ({entry.exactMatches} exact)
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* PLAYING PHASE */}
        {phase === 'playing' && essays[currentIndex] && (() => {
          const essay = essays[currentIndex];
          const typeColor = TYPE_COLORS[essay.type] || TYPE_COLORS['Language Analysis'];
          return (
            <div>
              {/* Progress bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                  Essay {currentIndex + 1} of {ESSAYS_PER_ROUND}
                </span>
                <span style={{ color: '#f59e0b', fontWeight: 600 }}>
                  Score: {totalScore + (revealed && selectedGrade ? calculatePoints(selectedGrade, essay.actualGrade) : 0)}
                </span>
              </div>
              <div style={{
                height: '4px', background: '#1e293b', borderRadius: '2px', marginBottom: '1.5rem'
              }}>
                <div style={{
                  height: '100%', background: 'linear-gradient(90deg, #f59e0b, #d97706)',
                  borderRadius: '2px', width: `${((currentIndex + (revealed ? 1 : 0)) / ESSAYS_PER_ROUND) * 100}%`,
                  transition: 'width 0.3s'
                }} />
              </div>

              {/* Essay type badge */}
              <div style={{
                display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '999px',
                background: typeColor.bg, border: `1px solid ${typeColor.border}`,
                color: typeColor.text, fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem'
              }}>
                {essay.type}
              </div>

              {/* Question */}
              <div style={{
                background: '#1e293b', borderRadius: '0.75rem', padding: '1rem 1.25rem',
                border: '1px solid #334155', marginBottom: '1rem'
              }}>
                <p style={{ fontWeight: 600, color: '#e2e8f0', margin: 0, fontSize: '0.95rem' }}>
                  {essay.question}
                </p>
              </div>

              {/* Essay response */}
              <div style={{
                background: '#0f172a', borderRadius: '0.75rem', padding: '1.5rem',
                border: '1px solid #1e293b', marginBottom: '1.5rem', maxHeight: '400px',
                overflowY: 'auto', lineHeight: 1.8
              }}>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.75rem', fontStyle: 'italic' }}>
                  Student Response:
                </div>
                {essay.response.split('\n\n').map((para, i) => (
                  <p key={i} style={{ color: '#cbd5e1', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Grade selection */}
              {!revealed && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontWeight: 600, marginBottom: '0.75rem', color: '#e2e8f0' }}>
                    What grade would you give this response?
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                    {GRADE_BANDS.map(grade => (
                      <button
                        key={grade}
                        onClick={() => setSelectedGrade(grade)}
                        style={{
                          padding: '0.625rem 1.25rem', borderRadius: '0.5rem', cursor: 'pointer',
                          fontWeight: 600, fontSize: '0.9rem', border: '2px solid',
                          transition: 'all 0.15s',
                          background: selectedGrade === grade ? '#f59e0b' : '#1e293b',
                          color: selectedGrade === grade ? '#000' : '#e2e8f0',
                          borderColor: selectedGrade === grade ? '#f59e0b' : '#334155',
                        }}
                      >
                        {grade}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleSubmitGrade}
                    disabled={!selectedGrade}
                    style={{
                      padding: '0.75rem 2rem', borderRadius: '0.75rem', cursor: selectedGrade ? 'pointer' : 'not-allowed',
                      fontWeight: 700, fontSize: '1rem', border: 'none',
                      background: selectedGrade ? 'linear-gradient(135deg, #f59e0b, #d97706)' : '#334155',
                      color: selectedGrade ? '#000' : '#64748b',
                      opacity: selectedGrade ? 1 : 0.6,
                    }}
                  >
                    Submit Grade
                  </button>
                </div>
              )}

              {/* Revealed feedback */}
              {revealed && (() => {
                const points = calculatePoints(selectedGrade, essay.actualGrade);
                const isExact = points === 30;
                const isClose = points === 15;
                return (
                  <div style={{
                    background: '#1e293b', borderRadius: '0.75rem', padding: '1.5rem',
                    border: `2px solid ${isExact ? '#22c55e' : isClose ? '#f59e0b' : '#ef4444'}`,
                    marginBottom: '1.5rem'
                  }}>
                    {/* Score result */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      {isExact ? <CheckCircle size={28} style={{ color: '#22c55e' }} /> :
                        isClose ? <Star size={28} style={{ color: '#f59e0b' }} /> :
                          <XCircle size={28} style={{ color: '#ef4444' }} />}
                      <div>
                        <div style={{
                          fontWeight: 700, fontSize: '1.1rem',
                          color: isExact ? '#22c55e' : isClose ? '#f59e0b' : '#ef4444'
                        }}>
                          {isExact ? 'Exact Match! +30 points' : isClose ? 'Close! +15 points' : 'Not quite — 0 points'}
                        </div>
                        <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                          Your grade: <strong style={{ color: '#e2e8f0' }}>{selectedGrade}</strong>
                          {' '} | Actual grade: <strong style={{ color: '#f59e0b' }}>{essay.actualGrade}</strong>
                        </div>
                      </div>
                    </div>

                    {/* Examiner commentary */}
                    <div style={{
                      background: '#0f172a', borderRadius: '0.5rem', padding: '1rem',
                      border: '1px solid #334155', marginBottom: '1rem'
                    }}>
                      <p style={{ fontWeight: 600, color: '#f59e0b', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                        Examiner's Commentary
                      </p>
                      <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.7 }}>
                        {essay.markSchemeNotes}
                      </p>
                    </div>

                    {/* AO criteria */}
                    <div style={{
                      background: '#0f172a', borderRadius: '0.5rem', padding: '1rem',
                      border: '1px solid #334155', marginBottom: '1rem'
                    }}>
                      <p style={{ fontWeight: 600, color: '#a78bfa', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                        Assessment Objectives
                      </p>
                      <p style={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: 1.6 }}>
                        {essay.aoCriteria}
                      </p>
                    </div>

                    {/* Improvement tip */}
                    <div style={{
                      background: '#0f172a', borderRadius: '0.5rem', padding: '1rem',
                      border: '1px solid #334155'
                    }}>
                      <p style={{ fontWeight: 600, color: '#22c55e', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                        How Could This Be Improved?
                      </p>
                      <p style={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: 1.6 }}>
                        {essay.improvementTip}
                      </p>
                    </div>

                    {/* Next button */}
                    <button
                      onClick={handleNext}
                      style={{
                        marginTop: '1rem', padding: '0.75rem 2rem', borderRadius: '0.75rem', cursor: 'pointer',
                        fontWeight: 700, fontSize: '1rem', border: 'none',
                        background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                        color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem'
                      }}
                    >
                      {currentIndex + 1 >= ESSAYS_PER_ROUND ? 'See Results' : 'Next Essay'}
                      <ChevronRight size={18} />
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        })()}

        {/* RESULTS PHASE */}
        {phase === 'results' && (
          <div>
            <div style={{
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              borderRadius: '1rem', padding: '2rem', border: '1px solid #334155',
              textAlign: 'center', marginBottom: '2rem'
            }}>
              <Award size={48} style={{ color: '#f59e0b', marginBottom: '1rem' }} />
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Round Complete!</h2>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f59e0b', marginBottom: '0.5rem' }}>
                {totalScore} / {ESSAYS_PER_ROUND * 30}
              </div>
              <div style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>
                {results.filter(r => r.points === 30).length} exact matches,{' '}
                {results.filter(r => r.points === 15).length} close,{' '}
                {results.filter(r => r.points === 0).length} missed
              </div>
              <div style={{
                color: totalScore >= 150 ? '#22c55e' : totalScore >= 90 ? '#f59e0b' : '#ef4444',
                fontWeight: 600, fontSize: '1.1rem'
              }}>
                {totalScore >= 150 ? 'Chief Examiner Material!' :
                  totalScore >= 120 ? 'Senior Examiner Level!' :
                    totalScore >= 90 ? 'Solid Marking Skills!' :
                      totalScore >= 60 ? 'Getting There — Keep Practising!' :
                        'Keep Reading Mark Schemes!'}
              </div>
            </div>

            {/* Results breakdown */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>Essay Breakdown</h3>
              {results.map((r, i) => {
                const typeColor = TYPE_COLORS[r.essay.type] || TYPE_COLORS['Language Analysis'];
                return (
                  <div key={i} style={{
                    background: '#1e293b', borderRadius: '0.75rem', padding: '1rem 1.25rem',
                    border: '1px solid #334155', marginBottom: '0.75rem',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    flexWrap: 'wrap', gap: '0.5rem'
                  }}>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                      <span style={{
                        display: 'inline-block', padding: '0.15rem 0.5rem', borderRadius: '999px',
                        background: typeColor.bg, border: `1px solid ${typeColor.border}`,
                        color: typeColor.text, fontSize: '0.7rem', fontWeight: 600, marginBottom: '0.25rem'
                      }}>
                        {r.essay.type}
                      </span>
                      <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                        Your grade: <strong style={{ color: '#e2e8f0' }}>{r.selectedGrade}</strong>
                        {' → '}Actual: <strong style={{ color: '#f59e0b' }}>{r.essay.actualGrade}</strong>
                      </div>
                    </div>
                    <div style={{
                      fontWeight: 700, fontSize: '1rem',
                      color: r.points === 30 ? '#22c55e' : r.points === 15 ? '#f59e0b' : '#ef4444'
                    }}>
                      +{r.points}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={startGame} style={{
                padding: '0.75rem 2rem', borderRadius: '0.75rem', cursor: 'pointer',
                fontWeight: 700, fontSize: '1rem', border: 'none',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                color: '#000', display: 'flex', alignItems: 'center', gap: '0.5rem'
              }}>
                <RotateCcw size={18} /> Play Again
              </button>
              <Link to="/games" style={{
                padding: '0.75rem 2rem', borderRadius: '0.75rem', textDecoration: 'none',
                fontWeight: 700, fontSize: '1rem', border: '2px solid #334155',
                color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '0.5rem'
              }}>
                <ArrowLeft size={18} /> Back to Games
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
