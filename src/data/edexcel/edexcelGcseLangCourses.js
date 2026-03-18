// ════════════════════════════════════════════════════════════════════
// Edexcel GCSE English Language (1EN2 — 2021 specification)
// TWO courses: Reading + Writing
// ════════════════════════════════════════════════════════════════════

const edexcelGcseLangReading = {
  id: 'edexcel-gcse-lang-reading',
  title: 'Edexcel GCSE Language: Reading',
  subtitle: 'Master every reading question across both Edexcel 1EN2 papers — from 19th-century non-fiction to contemporary fiction and synthesis.',
  tier: 'GCSE',
  board: 'Edexcel',
  specId: 'gcse-lang',
  specCode: '1EN2',
  price: 49,
  duration: '8-10 hours',
  level: 'GCSE (Years 10-11)',
  description:
    'A complete walkthrough of every Edexcel English Language reading question type. Paper 1 focuses on 19th-century non-fiction texts while Paper 2 pairs contemporary fiction with literary non-fiction. Includes Edexcel-specific mark schemes, model answers at every level, and timed practice strategies for the 1h 55m papers.',
  color: '#dc2626',
  moduleList: [
    // ──────────────────────────────────────────────
    // MODULE 1 — Paper 1 Q1: Retrieval from 19th-Century Texts
    // ──────────────────────────────────────────────
    {
      id: 'edx-lr-m1',
      title: 'Paper 1 Q1: Retrieval from 19th-Century Texts',
      duration: '25 mins',
      content: `
<h2>Paper 1 Question 1 — Retrieval (4 marks, AO1)</h2>

<p>Edexcel Paper 1 opens with two unseen <strong>19th-century non-fiction</strong> texts — these might be diary entries, letters, newspaper articles, travel writing, or speeches from the 1800s. Question 1 asks you to retrieve information from <strong>Text 1</strong> only.</p>

<div class="key-term"><strong>Key Term: Retrieval (AO1)</strong> — Selecting and identifying explicit information and ideas from the text. No analysis or inference is needed — just accurate extraction of stated facts.</div>

<h3>How Edexcel Q1 Differs from AQA</h3>
<p>Unlike AQA's fiction-based "list four things" question, Edexcel Q1 asks you to retrieve information from a <strong>19th-century non-fiction</strong> text. The language will be more formal and archaic. You may encounter unfamiliar vocabulary, but the retrieval task itself is straightforward.</p>

<div class="text-extract">It was upon the morning of the fourteenth of September, 1862, that I first set foot upon the platform at Euston Station. The air was thick with the acrid smoke of engines, and the noise of porters' trolleys upon the flagstones produced a ceaseless, grating clamour. I carried with me a single leather valise and a letter of introduction from my uncle, the Reverend Mr Hartley, addressed to a gentleman in Bloomsbury whose name I had been given to understand carried some weight in the publishing trade.<div class="source">Original passage in the style of Edexcel 19th-century non-fiction extracts</div></div>

<h3>Step-by-Step Strategy</h3>
<ol>
  <li><strong>Read the question focus</strong> — it will specify a topic (e.g. "the narrator's arrival in London").</li>
  <li><strong>Stay within the specified lines</strong> — Edexcel may direct you to particular paragraphs or line ranges.</li>
  <li><strong>Look for explicit facts</strong> — dates, places, names, physical descriptions, stated opinions.</li>
  <li><strong>Write concise statements</strong> — one point per line. Quotation or paraphrase are both acceptable.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> 19th-century texts often embed information in long, complex sentences. Break each sentence down and look for separate factual details within it. The example above contains at least five retrievable facts in just three sentences.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Interpreting archaic vocabulary incorrectly and then offering an inference rather than a stated fact. "Valise" means a small travelling bag — do not guess; if unsure, quote the word directly.</div>

<h3>Quick Practice</h3>
<p>From the extract above, identify four things about the narrator's arrival:</p>
<ol>
  <li>He arrived on the morning of 14th September 1862.</li>
  <li>He arrived at Euston Station.</li>
  <li>The air was thick with engine smoke.</li>
  <li>He carried a single leather valise.</li>
</ol>

<p>Each point is a directly stated fact — no inference, no analysis. Spend no more than <strong>5 minutes</strong> on Q1 in the exam to protect time for higher-mark questions.</p>
`,
      quiz: [
        {
          id: 'edx-lr-m1-q1',
          question: 'On Edexcel Paper 1, what type of texts are used for the reading section?',
          options: [
            'Contemporary fiction extracts',
            '19th-century non-fiction texts',
            '20th-century poetry',
            'Modern newspaper articles',
          ],
          correct: 1,
          explanation:
            'Edexcel Paper 1 Section A uses two unseen 19th-century non-fiction texts. This is a key difference from AQA, which uses fiction on Paper 1.',
        },
        {
          id: 'edx-lr-m1-q2',
          question: 'How many marks is Edexcel Paper 1 Question 1 worth?',
          options: ['2 marks', '4 marks', '6 marks', '8 marks'],
          correct: 1,
          explanation:
            'Paper 1 Q1 is worth 4 marks and tests AO1 (retrieval). You should spend approximately 5 minutes on it.',
        },
        {
          id: 'edx-lr-m1-q3',
          question: 'Which assessment objective does Paper 1 Q1 test?',
          options: ['AO2 — Language analysis', 'AO3 — Comparison', 'AO1 — Retrieval', 'AO4 — Evaluation'],
          correct: 2,
          explanation:
            'Q1 tests AO1: identifying and interpreting explicit information and ideas. No analysis of language or structure is required.',
        },
        {
          id: 'edx-lr-m1-q4',
          question: 'A student writes "The narrator seems nervous about London" as a retrieval point. Is this acceptable?',
          options: [
            'Yes — it is a valid inference',
            'No — the question asks for explicit information, not inference',
            'Yes — if supported by a quotation',
            'No — because it is too short',
          ],
          correct: 1,
          explanation:
            'Retrieval questions require explicitly stated facts. "Seems nervous" is an inference about feelings — it is not directly stated in the text and would not be credited.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 2 — Paper 1 Q2 & Q5: Evaluation Skills
    // ──────────────────────────────────────────────
    {
      id: 'edx-lr-m2',
      title: 'Paper 1 Q2 & Q5: Evaluation Skills',
      duration: '35 mins',
      content: `
<h2>Paper 1 Questions 2 and 5 — Evaluation (AO4)</h2>

<p>Evaluation is a signature skill on Edexcel Paper 1. Both <strong>Q2 (6 marks)</strong> and <strong>Q5 (6 marks)</strong> test AO4, asking you to evaluate a given statement about the text critically. Q2 targets Text 1 and Q5 targets Text 2.</p>

<div class="key-term"><strong>Key Term: Evaluation (AO4)</strong> — Forming a critical judgement about a text by weighing up evidence. You must decide how far you agree with a statement and support your view with textual evidence and analysis of methods.</div>

<h3>The Edexcel Evaluation Format</h3>
<p>You will be given a statement such as: <em>"A student said: 'This text makes London sound like a terrifying place.' To what extent do you agree?"</em> You must:</p>
<ul>
  <li>State your position clearly (agree, disagree, or partially agree).</li>
  <li>Select relevant evidence from the text.</li>
  <li>Explain how the writer's methods support or challenge the statement.</li>
  <li>Consider alternative interpretations where possible.</li>
</ul>

<div class="text-extract">The streets of the East End were, by night, a labyrinth of menace. Gas-lamps flickered at irregular intervals, their feeble light serving only to deepen the shadows between. From the doorways of lodging-houses came the low murmur of voices and, now and then, a sharp, sudden cry that echoed briefly before being swallowed by the darkness. Yet by day, the same thoroughfares teemed with life — with flower-sellers and costermongers, with children darting between the wheels of hansom cabs, with all the clamour and colour of a district that refused, in spite of everything, to be defeated.<div class="source">Original passage in the style of Edexcel 19th-century non-fiction extracts</div></div>

<h3>Model Approach for 6-Mark Evaluation</h3>
<ol>
  <li><strong>Open with your judgement:</strong> "I partially agree with this statement because..."</li>
  <li><strong>Support with evidence:</strong> Select two or three quotations and explain how the writer's language choices create the effect described.</li>
  <li><strong>Challenge or nuance:</strong> Acknowledge where the text offers a contrasting perspective.</li>
</ol>

<div class="model-answer"><strong>Model Answer (Level 3, 5-6 marks):</strong> I partially agree with the statement. The writer initially presents the East End as threatening through the metaphor "labyrinth of menace," which suggests the streets are confusing and dangerous, almost maze-like in their capacity to trap the unwary. The personification of gas-lamps whose "feeble light" only "deepens the shadows" reinforces a sense that even sources of safety are inadequate. However, the contrasting phrase "teemed with life" in the second half shows that the same streets are vibrant and resilient by day. The list of "flower-sellers and costermongers" and "children darting" conveys energy and community, which complicates a purely negative reading. The writer therefore presents a more balanced view than the statement suggests.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Edexcel mark schemes reward "critical evaluation" at the top level. This means going beyond simple agreement — weigh evidence on both sides and show you can see complexity in the text.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Simply retelling what happens in the text. Evaluation requires a judgement — you must say whether you agree and explain why using the writer's methods as evidence.</div>
`,
      quiz: [
        {
          id: 'edx-lr-m2-q1',
          question: 'How many marks is Edexcel Paper 1 Q2 worth?',
          options: ['4 marks', '6 marks', '8 marks', '12 marks'],
          correct: 1,
          explanation:
            'Paper 1 Q2 is worth 6 marks and tests AO4 (evaluation). It asks you to evaluate a statement about Text 1.',
        },
        {
          id: 'edx-lr-m2-q2',
          question: 'What assessment objective do Q2 and Q5 both test?',
          options: ['AO1', 'AO2', 'AO3', 'AO4'],
          correct: 3,
          explanation:
            'Both Q2 and Q5 on Edexcel Paper 1 test AO4 — evaluation. You must critically evaluate a given statement using textual evidence.',
        },
        {
          id: 'edx-lr-m2-q3',
          question: 'Which approach is most likely to achieve top marks on a 6-mark evaluation question?',
          options: [
            'Simply agreeing with the statement and listing quotations',
            'Retelling what happens in the text in order',
            'Weighing evidence for and against the statement with analysis of methods',
            'Identifying as many language techniques as possible',
          ],
          correct: 2,
          explanation:
            'Top-level responses show critical evaluation by weighing both sides and analysing how the writer\'s methods create effects that support or challenge the statement.',
        },
        {
          id: 'edx-lr-m2-q4',
          question: 'Q5 on Edexcel Paper 1 evaluates which text?',
          options: ['Text 1', 'Text 2', 'Both texts compared', 'A separate unseen text'],
          correct: 1,
          explanation:
            'Q2 evaluates Text 1 and Q5 evaluates Text 2. Both are worth 6 marks and test AO4.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 3 — Paper 1 Q3: Language Analysis of Non-Fiction
    // ──────────────────────────────────────────────
    {
      id: 'edx-lr-m3',
      title: 'Paper 1 Q3: Language Analysis of Non-Fiction',
      duration: '40 mins',
      content: `
<h2>Paper 1 Question 3 — Language Analysis (8 marks, AO2)</h2>

<p>Question 3 is the main language analysis question on Edexcel Paper 1, worth <strong>8 marks</strong> and targeting <strong>AO2</strong>. Unlike AQA — where Paper 1 language analysis applies to fiction — Edexcel asks you to analyse language in a <strong>19th-century non-fiction</strong> text. This means you must engage with rhetorical and persuasive language as well as literary techniques.</p>

<div class="key-term"><strong>Key Term: Rhetorical Language</strong> — Language used to persuade, inform, or influence an audience. Common rhetorical devices in 19th-century non-fiction include direct address, rhetorical questions, tricolon (lists of three), emotive language, and appeals to authority.</div>

<h3>The Edexcel Q3 Mark Scheme</h3>
<ul>
  <li><strong>Level 4 (7-8 marks):</strong> Perceptive analysis of language choices with precise, well-integrated subject terminology. Explores multiple layers of meaning.</li>
  <li><strong>Level 3 (5-6 marks):</strong> Clear analysis of language with accurate use of terminology. Explains effects convincingly.</li>
  <li><strong>Level 2 (3-4 marks):</strong> Some relevant comment on language with attempts at using terminology.</li>
  <li><strong>Level 1 (1-2 marks):</strong> Simple awareness of language with little explanation of effect.</li>
</ul>

<div class="text-extract">I appeal to every mother in this great city — to every father, every brother, every sister — to consider the plight of these wretched children. They are not strangers to us; they are the sons and daughters of our own streets, born into poverty not by choice but by the cruel accident of circumstance. Shall we stand idle whilst innocence is ground beneath the heel of indifference? Shall we turn our faces from suffering that cries out, even now, from every darkened alley and every crowded tenement?<div class="source">Original passage in the style of 19th-century campaigning journalism</div></div>

<h3>Analytical Approach for Non-Fiction Language</h3>
<p>Use the <strong>Device → Quotation → Effect</strong> model:</p>
<ol>
  <li><strong>Device:</strong> Name the rhetorical or language technique.</li>
  <li><strong>Quotation:</strong> Embed a short, precise quotation.</li>
  <li><strong>Effect:</strong> Explain the impact on the reader and how it serves the writer's purpose (to persuade, inform, argue, etc.).</li>
</ol>

<div class="model-answer"><strong>Model Answer (Level 4):</strong> The writer employs an ascending tricolon — "every mother… every father, every brother, every sister" — that systematically broadens the appeal to encompass the entire family unit, implying that child poverty is not a niche concern but a universal responsibility. The repetition of "every" functions as an anaphoric device that hammers the point relentlessly, allowing no reader to exclude themselves. The rhetorical question "Shall we stand idle whilst innocence is ground beneath the heel of indifference?" is particularly powerful: the metaphor of grinding beneath a heel evokes physical violence and oppression, while the abstract noun "indifference" personifies society's apathy as a deliberate, crushing force. The cumulative effect is one of moral urgency — the reader is positioned as complicit unless they act.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> 19th-century non-fiction often uses rhetorical devices rather than narrative techniques. Make sure you can identify and analyse direct address, rhetorical questions, anaphora, antithesis, and emotive vocabulary.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Analysing the text as if it were fiction. Paper 1 texts are non-fiction — consider the writer's purpose (to argue, persuade, inform, advise) and how language choices serve that purpose.</div>
`,
      quiz: [
        {
          id: 'edx-lr-m3-q1',
          question: 'How many marks is Edexcel Paper 1 Q3 worth?',
          options: ['4 marks', '6 marks', '8 marks', '12 marks'],
          correct: 2,
          explanation: 'Paper 1 Q3 is worth 8 marks and tests AO2 — analysis of language choices and their effects.',
        },
        {
          id: 'edx-lr-m3-q2',
          question: 'What type of text does Edexcel Paper 1 Q3 ask you to analyse?',
          options: [
            'A modern fiction extract',
            'A 19th-century non-fiction text',
            'A contemporary newspaper article',
            'A Shakespeare extract',
          ],
          correct: 1,
          explanation:
            'Edexcel Paper 1 uses exclusively 19th-century non-fiction texts. This is fundamentally different from AQA Paper 1, which uses fiction.',
        },
        {
          id: 'edx-lr-m3-q3',
          question: 'Which of the following is an example of anaphora?',
          options: [
            'Using a metaphor and then a simile in the same sentence',
            'Repeating the same word or phrase at the start of consecutive clauses',
            'Placing two contrasting ideas side by side',
            'Asking a question that does not expect an answer',
          ],
          correct: 1,
          explanation:
            'Anaphora is the deliberate repetition of a word or phrase at the beginning of successive clauses — e.g. "every mother… every father, every brother." It creates emphasis and rhythm.',
        },
        {
          id: 'edx-lr-m3-q4',
          question: 'A student writes: "The writer uses a rhetorical question." What must they add to reach Level 3+?',
          options: [
            'Another example of a rhetorical question',
            'The definition of a rhetorical question',
            'An explanation of the effect on the reader and how it serves the writer\'s purpose',
            'A comparison with a different text',
          ],
          correct: 2,
          explanation:
            'Identifying a technique alone is Level 1. To reach Level 3 or above, you must explain the effect — why the writer chose this device and how it influences the reader.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 4 — Paper 1 Q6: Extended Evaluation
    // ──────────────────────────────────────────────
    {
      id: 'edx-lr-m4',
      title: 'Paper 1 Q6: Extended Evaluation',
      duration: '40 mins',
      content: `
<h2>Paper 1 Question 6 — Extended Evaluation (12 marks, AO4)</h2>

<p>Question 6 is the highest-tariff reading question on Paper 1, worth <strong>12 marks</strong>. It tests AO4 and asks for an extended critical evaluation of <strong>Text 2</strong>. You will typically be given a statement and asked to evaluate how effectively the writer achieves a particular purpose or effect.</p>

<div class="key-term"><strong>Key Term: Extended Evaluation</strong> — A sustained, developed response that makes a clear judgement, supports it with well-chosen evidence, and considers the writer's methods in detail. At 12 marks, this requires significantly more depth than the 6-mark evaluation questions.</div>

<h3>Edexcel Q6 Mark Scheme Descriptors</h3>
<ul>
  <li><strong>Level 4 (10-12 marks):</strong> Convincing, critical evaluation. Perceptive selection of evidence. Detailed analysis of how methods support the evaluation.</li>
  <li><strong>Level 3 (7-9 marks):</strong> Clear, structured evaluation with relevant evidence and explanation of methods.</li>
  <li><strong>Level 2 (4-6 marks):</strong> Some evaluative comment, though evidence may be general or effects not fully explained.</li>
  <li><strong>Level 1 (1-3 marks):</strong> Simple, limited evaluation with little textual support.</li>
</ul>

<div class="text-extract">The workhouse stood at the end of Gravel Lane like a monument to despair. Its walls, blackened by decades of factory smoke, rose windowless for the first two storeys — a deliberate design, I was told, to prevent the inmates from gazing upon the world they had forfeited. Inside, the air was heavy with carbolic and boiled cabbage, and the silence was of a peculiar quality: not peaceful, but suppressed, as though every voice had been wrung out of its owner. I watched a woman of perhaps thirty years — though she might have been fifty, so thoroughly had hardship rewritten her face — carry a child along the corridor. She did not look at me. She did not look at anything. Her eyes held the flat, extinguished quality of someone for whom hope had become an abstract concept, belonging to other people in other places.<div class="source">Original passage in the style of 19th-century social reportage</div></div>

<h3>Structuring a 12-Mark Evaluation</h3>
<p>Aim to write <strong>three to four developed paragraphs</strong> in approximately <strong>15-18 minutes</strong>:</p>
<ol>
  <li><strong>Opening judgement:</strong> State your overall position on the statement clearly.</li>
  <li><strong>Paragraph 2:</strong> Analyse how specific language choices support your view. Embed quotations and explore connotations.</li>
  <li><strong>Paragraph 3:</strong> Examine structural or rhetorical methods — how the text is organised to build a particular effect.</li>
  <li><strong>Paragraph 4:</strong> Consider a counter-argument or nuance. Does the text complicate the statement at any point?</li>
</ol>

<div class="model-answer"><strong>Model Answer Opening (Level 4):</strong> I strongly agree that the writer presents the workhouse as a place designed to strip away humanity. From the outset, the building is personified as "a monument to despair" — the noun "monument" implies permanence and deliberate construction, suggesting that misery here is not incidental but architectural, built into the very fabric of the institution. The detail that the lower storeys were "windowless" by "deliberate design" reinforces this reading: the inmates are physically prevented from connecting with the outside world. The writer's aside — "to prevent the inmates from gazing upon the world they had forfeited" — is devastating in its choice of the verb "forfeited," which implies the poor have somehow lost a game or broken a contract, revealing society's cruel assumption that poverty is a moral failing deserving punishment rather than a circumstance requiring compassion.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Q6 carries 12 marks — more than Q2 and Q5 combined. Allocate your time accordingly. Many students rush this question because it comes at the end of the reading section. Plan before you write.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating Q6 as a language analysis question (AO2) rather than an evaluation question (AO4). You must make a sustained judgement about the text's effectiveness, not simply list techniques.</div>
`,
      quiz: [
        {
          id: 'edx-lr-m4-q1',
          question: 'How many marks is Edexcel Paper 1 Q6 worth?',
          options: ['6 marks', '8 marks', '10 marks', '12 marks'],
          correct: 3,
          explanation:
            'Q6 is worth 12 marks — the highest-tariff reading question on Paper 1. It requires a sustained, detailed evaluation.',
        },
        {
          id: 'edx-lr-m4-q2',
          question: 'Q6 targets which text on Paper 1?',
          options: ['Text 1 only', 'Text 2 only', 'Both texts', 'A choice of either text'],
          correct: 1,
          explanation: 'Q6 asks for an extended evaluation of Text 2. Text 1 is covered by Q1, Q2, and Q3.',
        },
        {
          id: 'edx-lr-m4-q3',
          question: 'How should a student open a 12-mark evaluation response?',
          options: [
            'With a quotation from the text',
            'With a clear statement of their overall judgement on the given statement',
            'With a definition of evaluation',
            'With a summary of the text',
          ],
          correct: 1,
          explanation:
            'A strong evaluation opens with a clear, direct judgement — e.g. "I strongly agree that…" — which anchors the entire response.',
        },
        {
          id: 'edx-lr-m4-q4',
          question: 'What distinguishes a Level 4 response from a Level 3 response on Q6?',
          options: [
            'Using longer quotations',
            'Writing more paragraphs',
            'Perceptive, critical evaluation with detailed analysis of methods',
            'Including historical context about the 19th century',
          ],
          correct: 2,
          explanation:
            'Level 4 requires "convincing, critical evaluation" with "perceptive" evidence selection and detailed analysis of methods — not just clear and relevant comment.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 5 — Paper 2 Q1-Q3: Short Reading Questions
    // ──────────────────────────────────────────────
    {
      id: 'edx-lr-m5',
      title: 'Paper 2 Q1-Q3: Short Reading Questions',
      duration: '25 mins',
      content: `
<h2>Paper 2 Questions 1-3 — Short Reading Tasks</h2>

<p>Edexcel Paper 2 uses two unseen <strong>20th/21st-century texts</strong>: one fiction and one literary non-fiction. Questions 1-3 are short, lower-tariff questions designed to ease you into the paper. Unlike Paper 1, the mark allocations here are very small.</p>

<h3>Q1: Retrieval from Fiction (1 mark, AO1)</h3>
<p>A single-mark question requiring one piece of explicit information from the fiction text. This is the simplest question on the paper — often a single sentence or even a single word is sufficient.</p>

<h3>Q2: Language Analysis on Fiction (6 marks, AO2)</h3>
<p>Analyse how the writer uses language in a specified section of the fiction extract. Apply the same analytical skills as Paper 1 Q3 but to <strong>fiction</strong> rather than non-fiction.</p>

<h3>Q3: Retrieval from Non-Fiction (1 mark, AO1)</h3>
<p>Another single-mark retrieval question, this time from the literary non-fiction text. Again, one correct identification is all that is needed.</p>

<div class="text-extract">The café occupied a narrow slot between a bookshop and a laundrette. Inside, the walls were lined with mismatched tiles — some floral, some plain white, some cracked and repaired with what appeared to be superglue and optimism. A woman sat at the counter reading a paperback, her coffee long since cold, a crescent of lipstick printed on the rim of the cup.<div class="source">Original passage in the style of contemporary fiction (Paper 2 Text 1)</div></div>

<h3>Strategy for Q1 and Q3 (1-Mark Questions)</h3>
<ul>
  <li>Read the question carefully — it will specify exactly what to identify.</li>
  <li>Write a brief, accurate response. One sentence is enough.</li>
  <li>Do not waste time on analysis — these questions test pure retrieval.</li>
  <li>Spend no more than <strong>1-2 minutes</strong> per question.</li>
</ul>

<h3>Strategy for Q2 (6-Mark Language Analysis)</h3>
<ul>
  <li>Select two or three quotations from the specified section.</li>
  <li>Analyse word-level choices: verbs, adjectives, imagery, sensory detail.</li>
  <li>Explain effects on the reader — atmosphere, tone, characterisation.</li>
  <li>Use subject terminology accurately (metaphor, personification, semantic field, etc.).</li>
</ul>

<div class="model-answer"><strong>Model Q2 Answer (Level 3):</strong> The writer creates an atmosphere of quirky warmth through carefully selected details. The description of tiles "cracked and repaired with what appeared to be superglue and optimism" uses the abstract noun "optimism" alongside the concrete "superglue" to humorous effect — the juxtaposition suggests a place held together by goodwill rather than money, inviting the reader to view imperfection as charming rather than shabby. The detail of coffee "long since cold" with "a crescent of lipstick printed on the rim" implies the woman is so absorbed in her book that the outside world has faded away, creating a sense of comfortable stillness.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> On Paper 2, the fiction text is 20th or 21st century — the language will be modern and accessible. Use this to your advantage: you can focus your energy on analysis rather than decoding unfamiliar vocabulary.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending too long on Q1 and Q3 (1 mark each). These questions should take 1-2 minutes maximum. Protect your time for Q4, Q5, and Q6.</div>
`,
      quiz: [
        {
          id: 'edx-lr-m5-q1',
          question: 'What types of texts appear on Edexcel Paper 2?',
          options: [
            'Two 19th-century non-fiction texts',
            'One fiction and one literary non-fiction (20th/21st century)',
            'Two contemporary newspaper articles',
            'One poem and one prose extract',
          ],
          correct: 1,
          explanation:
            'Paper 2 uses one fiction text and one literary non-fiction text, both from the 20th or 21st century.',
        },
        {
          id: 'edx-lr-m5-q2',
          question: 'How many marks are Paper 2 Q1 and Q3 each worth?',
          options: ['1 mark each', '2 marks each', '4 marks each', '6 marks each'],
          correct: 0,
          explanation:
            'Both Q1 and Q3 are worth just 1 mark each. They are simple retrieval questions that should take 1-2 minutes.',
        },
        {
          id: 'edx-lr-m5-q3',
          question: 'Paper 2 Q2 asks you to analyse language in which text?',
          options: [
            'The non-fiction text',
            'The fiction text',
            'Both texts',
            'A text of your choice',
          ],
          correct: 1,
          explanation: 'Q2 targets the fiction text (Text 1). Language analysis of the non-fiction text comes in Q4.',
        },
        {
          id: 'edx-lr-m5-q4',
          question: 'How long should you spend on the two 1-mark questions combined?',
          options: ['About 2-4 minutes', 'About 10 minutes', 'About 15 minutes', 'About 20 minutes'],
          correct: 0,
          explanation:
            'Each 1-mark question should take 1-2 minutes. Spending more than 4 minutes total on these two questions wastes valuable time for higher-tariff questions.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 6 — Paper 2 Q4: Language & Structure Analysis
    // ──────────────────────────────────────────────
    {
      id: 'edx-lr-m6',
      title: 'Paper 2 Q4: Language & Structure Analysis',
      duration: '40 mins',
      content: `
<h2>Paper 2 Question 4 — Language and Structure (10 marks, AO2)</h2>

<p>Q4 is the most demanding analytical question on Paper 2, worth <strong>10 marks</strong>. It asks you to analyse how the writer uses <strong>both language and structure</strong> in the literary non-fiction text (Text 2). This is a combined AO2 question — you must address both elements to access the top marks.</p>

<div class="key-term"><strong>Key Term: Structural Analysis</strong> — Examining how a text is organised and arranged to create effects. This includes: opening and closing strategies, shifts in focus or tone, paragraph length and arrangement, chronological vs non-linear organisation, and use of contrast or juxtaposition between sections.</div>

<h3>Edexcel Q4 Mark Scheme</h3>
<ul>
  <li><strong>Level 4 (9-10 marks):</strong> Perceptive, detailed analysis of both language and structure. Precise subject terminology. Explores subtle effects.</li>
  <li><strong>Level 3 (6-8 marks):</strong> Clear analysis of language and structure with relevant evidence.</li>
  <li><strong>Level 2 (3-5 marks):</strong> Some awareness of language and/or structure. May focus on one at the expense of the other.</li>
  <li><strong>Level 1 (1-2 marks):</strong> Simple comment with limited awareness of methods.</li>
</ul>

<div class="text-extract">I had not expected to be afraid. I had climbed in the Alps, camped alone in the Cairngorms, once spent a night in a bothy with nothing but a candle and a packet of digestive biscuits for company. But standing at the edge of the cenote — that vast, circular sinkhole, its walls draped in vegetation so green it looked artificial — I felt my legs turn to something unreliable.

The guide spoke in rapid Spanish. I caught the word "profundo" and the number "treinta." Thirty metres. The water below was the colour of ink, and perfectly still, and I could not see the bottom.

I jumped anyway.<div class="source">Original passage in the style of 21st-century travel writing (Paper 2 literary non-fiction)</div></div>

<h3>Tackling Language and Structure Together</h3>
<p>Divide your response into clear sections:</p>
<ol>
  <li><strong>Language paragraph(s):</strong> Analyse word choices, imagery, figurative language, tone. Focus on two or three key quotations.</li>
  <li><strong>Structure paragraph:</strong> Examine how the text is arranged — shifts in pace, focus, tone, or perspective. Consider paragraph length and sentence forms.</li>
  <li><strong>Integration:</strong> The best responses show how language and structure work together.</li>
</ol>

<div class="model-answer"><strong>Model Answer (Level 4):</strong> Structurally, the writer builds tension through a deliberate pattern of delay. The opening paragraph establishes the narrator's credentials as an experienced adventurer through the tricolon "climbed in the Alps, camped alone in the Cairngorms, once spent a night in a bothy," creating an expectation of fearlessness that the adversative "But" immediately undercuts. This structural pivot — from confidence to vulnerability — mirrors the physical descent the narrator is about to undertake.

The second paragraph narrows focus sharply. The short, fragmented detail "I caught the word 'profundo' and the number 'treinta'" strips away the narrator's control, reducing communication to isolated, untranslated fragments. The asyndetic tricolon describing the water — "the colour of ink, and perfectly still, and I could not see the bottom" — moves from visual detail to the psychologically unsettling admission of limitless depth.

The final one-sentence paragraph — "I jumped anyway" — is structurally dramatic: its brevity after two longer paragraphs mirrors the sudden, decisive act. The adverb "anyway" carries quiet defiance, acknowledging the fear while refusing to be governed by it.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Many students neglect structure entirely and only analyse language. On Q4, you <strong>must</strong> address both to access Level 3 and above. Aim for at least one paragraph specifically on structural choices.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Confusing "structure" with "language." Structure is about how the text is organised — paragraph arrangement, shifts in focus, narrative perspective, pacing. Metaphors and adjectives are language features, not structural ones.</div>
`,
      quiz: [
        {
          id: 'edx-lr-m6-q1',
          question: 'How many marks is Edexcel Paper 2 Q4 worth?',
          options: ['6 marks', '8 marks', '10 marks', '12 marks'],
          correct: 2,
          explanation: 'Q4 is worth 10 marks and asks for analysis of both language and structure in the literary non-fiction text.',
        },
        {
          id: 'edx-lr-m6-q2',
          question: 'What must a response include to access Level 3+ on Q4?',
          options: [
            'Only language analysis with subject terminology',
            'Analysis of both language and structure',
            'A comparison between the two texts',
            'Historical context about the text',
          ],
          correct: 1,
          explanation:
            'Q4 explicitly assesses both language and structure. Responses that only address one will be capped at Level 2.',
        },
        {
          id: 'edx-lr-m6-q3',
          question: 'Which of the following is a structural feature rather than a language feature?',
          options: [
            'A metaphor comparing fear to drowning',
            'The use of a short, one-sentence paragraph for impact',
            'An emotive adjective describing the scenery',
            'Alliteration in a descriptive phrase',
          ],
          correct: 1,
          explanation:
            'Paragraph length and arrangement are structural choices. Metaphors, adjectives, and alliteration are language features.',
        },
        {
          id: 'edx-lr-m6-q4',
          question: 'Q4 asks you to analyse which text on Paper 2?',
          options: [
            'The fiction text (Text 1)',
            'The literary non-fiction text (Text 2)',
            'Both texts together',
            'Either text — student\'s choice',
          ],
          correct: 1,
          explanation: 'Q4 focuses on the literary non-fiction text (Text 2). The fiction text is analysed in Q2.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 7 — Paper 2 Q5: Synthesis Across Two Texts
    // ──────────────────────────────────────────────
    {
      id: 'edx-lr-m7',
      title: 'Paper 2 Q5: Synthesis Across Two Texts',
      duration: '35 mins',
      content: `
<h2>Paper 2 Question 5 — Synthesis (6 marks, AO1)</h2>

<p>Q5 is a <strong>synthesis</strong> question worth <strong>6 marks</strong> that tests AO1. It requires you to draw together information and ideas from <strong>both texts</strong>. You will be given a focus (e.g. "the writers' experiences of travelling alone") and must identify relevant points from each text and present them in a connected way.</p>

<div class="key-term"><strong>Key Term: Synthesis</strong> — The skill of combining information from two or more sources into a coherent, integrated response. Unlike comparison, synthesis focuses on what the texts share or how they collectively address a topic, rather than analysing differences in methods.</div>

<h3>How Synthesis Differs from Comparison</h3>
<p>This is a crucial distinction on Edexcel Paper 2:</p>
<ul>
  <li><strong>Synthesis (Q5, AO1):</strong> What do both texts tell us about a topic? Draw together information. No analysis of methods required.</li>
  <li><strong>Comparison (Q6, AO3):</strong> How do the writers' perspectives differ, and what methods do they use? Analysis of language and approach is essential.</li>
</ul>

<h3>Structuring a Synthesis Response</h3>
<ol>
  <li><strong>Opening statement:</strong> Address the focus directly — "Both writers describe experiences of…"</li>
  <li><strong>Point from Text 1:</strong> Select relevant information with brief quotation or paraphrase.</li>
  <li><strong>Connected point from Text 2:</strong> Show how the second text relates to the same idea — using connectives like "Similarly," "Likewise," "Both writers also…"</li>
  <li><strong>Develop with further linked points:</strong> Aim for three or four synthesised pairs.</li>
</ol>

<div class="model-answer"><strong>Model Answer (Level 3, 5-6 marks):</strong> Both writers convey the physical challenges of their journeys. In Text 1, the narrator describes feeling her "legs turn to something unreliable" at the edge of the cenote, suggesting a bodily response to danger. Similarly, in Text 2, the writer recalls that his "hands were raw and blistered" after a day of rowing, indicating that his journey exacted a tangible physical toll. Both writers also acknowledge moments of fear — Text 1's narrator admits she "had not expected to be afraid," while Text 2's writer confesses he "lay awake counting the hours until dawn." However, both ultimately present their experiences as worthwhile: Text 1 ends with the decisive "I jumped anyway," and Text 2 concludes with the reflection that "I would not trade a single blister."</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The key word in Q5 is "both." Every point you make should draw on both texts. A response that discusses Text 1 and Text 2 separately, without connecting them, will not achieve top marks.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Starting to analyse language methods in Q5. This question tests AO1 (retrieval and synthesis), not AO2 (language analysis). You do not need to name techniques — just identify and connect relevant information from both texts.</div>

<h3>Useful Synthesis Connectives</h3>
<ul>
  <li>"Both writers suggest that…"</li>
  <li>"Similarly, in Text 2…"</li>
  <li>"This is echoed in Text 1, where…"</li>
  <li>"While both texts describe… Text 1 focuses on… whereas Text 2 emphasises…"</li>
</ul>
`,
      quiz: [
        {
          id: 'edx-lr-m7-q1',
          question: 'How many marks is Edexcel Paper 2 Q5 worth?',
          options: ['4 marks', '6 marks', '10 marks', '16 marks'],
          correct: 1,
          explanation: 'Q5 is worth 6 marks and tests AO1 — synthesis of information from both texts.',
        },
        {
          id: 'edx-lr-m7-q2',
          question: 'What is the key difference between synthesis (Q5) and comparison (Q6)?',
          options: [
            'Synthesis uses quotations; comparison does not',
            'Synthesis draws together information (AO1); comparison analyses methods and perspectives (AO3)',
            'Synthesis is about Text 1; comparison is about Text 2',
            'There is no difference — they are the same skill',
          ],
          correct: 1,
          explanation:
            'Synthesis (AO1) focuses on drawing together information from both texts. Comparison (AO3) requires analysis of how writers\' perspectives and methods differ.',
        },
        {
          id: 'edx-lr-m7-q3',
          question: 'A student discusses each text in separate paragraphs without connecting them. What level would this achieve?',
          options: [
            'Level 4 — detailed synthesis',
            'Level 3 — clear synthesis',
            'Level 2 or below — lacks integration',
            'Level 1 — no synthesis attempted',
          ],
          correct: 2,
          explanation:
            'Synthesis requires integration — linking information from both texts. Discussing them separately demonstrates awareness but not the connected, synthesised approach needed for Level 3+.',
        },
        {
          id: 'edx-lr-m7-q4',
          question: 'Which of the following would be inappropriate in a Q5 response?',
          options: [
            '"Both writers describe the physical difficulty of their journeys."',
            '"The writer uses a metaphor to convey the intensity of the experience."',
            '"Similarly, in Text 2, the narrator recalls feeling exhausted."',
            '"This is echoed in Text 1, where the writer mentions her fatigue."',
          ],
          correct: 1,
          explanation:
            'Naming and analysing techniques (metaphor) is AO2, not AO1. Q5 requires synthesis of information, not analysis of methods.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 8 — Paper 2 Q6: Comparing Writers' Perspectives
    // ──────────────────────────────────────────────
    {
      id: 'edx-lr-m8',
      title: "Paper 2 Q6: Comparing Writers' Perspectives",
      duration: '45 mins',
      content: `
<h2>Paper 2 Question 6 — Comparing Writers' Perspectives (16 marks, AO3)</h2>

<p>Q6 is the highest-tariff reading question on the entire exam, worth <strong>16 marks</strong>. It tests AO3 and asks you to compare how the two writers convey their different perspectives on a shared theme. This requires you to analyse <strong>both what the writers think</strong> and <strong>how they express those views</strong> through language and structural choices.</p>

<div class="key-term"><strong>Key Term: Perspective</strong> — A writer's viewpoint, attitude, or position on a topic. Perspectives can be explicit (directly stated) or implicit (suggested through language choices, tone, and emphasis).</div>

<h3>Edexcel Q6 Mark Scheme</h3>
<ul>
  <li><strong>Level 4 (13-16 marks):</strong> Perceptive comparison of perspectives with detailed analysis of methods. Convincing connections between texts.</li>
  <li><strong>Level 3 (9-12 marks):</strong> Clear comparison with relevant analysis of how methods convey perspectives.</li>
  <li><strong>Level 2 (5-8 marks):</strong> Some comparison attempted. May identify perspectives but with limited analysis of methods.</li>
  <li><strong>Level 1 (1-4 marks):</strong> Simple awareness of different viewpoints with little comparison.</li>
</ul>

<h3>The Three Pillars of a Strong Comparison</h3>
<ol>
  <li><strong>Perspectives:</strong> What does each writer think or feel? Identify their viewpoints clearly.</li>
  <li><strong>Methods:</strong> How does each writer convey their perspective? Analyse language, tone, structure, and rhetorical choices.</li>
  <li><strong>Comparison:</strong> How do the perspectives differ or overlap? Use comparative connectives throughout.</li>
</ol>

<h3>Structuring Your Response</h3>
<p>The most effective approach is <strong>alternating comparison</strong> — discussing both writers within each paragraph:</p>
<ol>
  <li>Identify a shared theme or point of comparison.</li>
  <li>Analyse Writer 1's perspective and methods.</li>
  <li>Compare with Writer 2's perspective and methods — showing similarities or differences.</li>
  <li>Repeat for two or three further comparative points.</li>
</ol>

<div class="model-answer"><strong>Model Answer Extract (Level 4):</strong> Both writers address the theme of isolation, but their perspectives diverge significantly. In Text 1, the fiction writer presents solitude as something actively chosen and relished — the protagonist "settled into the silence like a warm bath," a simile that frames isolation as comforting, even luxurious. The sibilance of "settled" and "silence" creates a soothing, gentle quality that aligns the reader with this positive view. In contrast, the non-fiction writer in Text 2 presents isolation as an unwelcome consequence of circumstance. The blunt declaration "I was alone, and I did not want to be" strips away any romanticism — the short, declarative sentence and the stark repetition of negation convey a perspective rooted in honest vulnerability rather than literary embellishment. Where Text 1 aestheticises solitude, Text 2 confronts it with uncomfortable directness.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Q6 is worth 16 marks — allocate <strong>20-25 minutes</strong> and plan before you write. Identify two or three points of comparison in advance. The strongest responses compare methods, not just viewpoints.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about each text separately ("Text 1 is about… Text 2 is about…") without making direct comparisons. Every paragraph should reference both texts and use comparative language.</div>

<h3>Comparative Connectives for Q6</h3>
<ul>
  <li>"In contrast, Writer 2…"</li>
  <li>"While both writers address… their methods differ significantly."</li>
  <li>"Where Text 1 employs… Text 2 instead relies on…"</li>
  <li>"This contrasts sharply with Text 2, in which the writer…"</li>
  <li>"Conversely, the non-fiction writer's perspective is one of…"</li>
</ul>
`,
      quiz: [
        {
          id: 'edx-lr-m8-q1',
          question: 'How many marks is Edexcel Paper 2 Q6 worth?',
          options: ['10 marks', '12 marks', '16 marks', '20 marks'],
          correct: 2,
          explanation:
            'Q6 is worth 16 marks — the single highest-tariff reading question across both papers. It tests AO3 (comparison).',
        },
        {
          id: 'edx-lr-m8-q2',
          question: 'What must a Q6 response analyse in addition to the writers\' viewpoints?',
          options: [
            'Historical context',
            'The writers\' methods (language and structural choices)',
            'Spelling and grammar in the extracts',
            'The text type and audience',
          ],
          correct: 1,
          explanation:
            'AO3 requires comparison of both perspectives AND methods. Identifying viewpoints without analysing how writers convey them will cap you at Level 2.',
        },
        {
          id: 'edx-lr-m8-q3',
          question: 'Which structure is most effective for a comparison response?',
          options: [
            'Write about Text 1, then write about Text 2',
            'Alternate between both texts within each paragraph',
            'Focus entirely on the text you understand better',
            'Write a summary of both texts first, then compare',
          ],
          correct: 1,
          explanation:
            'Alternating comparison — discussing both writers within each paragraph — ensures you make direct, sustained comparisons throughout your response.',
        },
        {
          id: 'edx-lr-m8-q4',
          question: 'How long should you spend on Q6?',
          options: ['10 minutes', '15 minutes', '20-25 minutes', '30 minutes'],
          correct: 2,
          explanation:
            'At 16 marks, Q6 deserves 20-25 minutes. Plan before you write — identify your comparative points in advance.',
        },
      ],
    },
  ],

  // ══════════════════════════════════════════════
  // ASSESSMENT QUESTIONS (20)
  // ══════════════════════════════════════════════
  assessmentQuestions: [
    {
      id: 'edx-lr-a1',
      question: 'What type of texts appear on Edexcel Paper 1 Section A?',
      options: [
        'Contemporary fiction extracts',
        'Two unseen 19th-century non-fiction texts',
        'Poetry from the anthology',
        'Shakespeare and a 19th-century novel',
      ],
      correct: 1,
      explanation:
        'Edexcel Paper 1 Section A uses two unseen 19th-century non-fiction texts — a fundamental difference from AQA, which uses fiction on Paper 1.',
    },
    {
      id: 'edx-lr-a2',
      question: 'How long is Edexcel Paper 1?',
      options: ['1 hour 30 minutes', '1 hour 45 minutes', '1 hour 55 minutes', '2 hours'],
      correct: 2,
      explanation:
        'Both Edexcel English Language papers are 1 hour 55 minutes — 10 minutes longer than AQA papers.',
    },
    {
      id: 'edx-lr-a3',
      question: 'What is the total mark allocation for Paper 1 Section A (Reading)?',
      options: ['30 marks', '40 marks', '50 marks', '80 marks'],
      correct: 1,
      explanation: 'Paper 1 Section A (Reading) is worth 40 marks. Section B (Writing) is also 40 marks, totalling 80.',
    },
    {
      id: 'edx-lr-a4',
      question: 'Which assessment objective is tested by Paper 1 Q1?',
      options: ['AO1 — Retrieval', 'AO2 — Language analysis', 'AO3 — Comparison', 'AO4 — Evaluation'],
      correct: 0,
      explanation: 'Q1 tests AO1: selecting and identifying explicit information and ideas from the text.',
    },
    {
      id: 'edx-lr-a5',
      question: 'Paper 1 Q4a and Q4b test retrieval from which text?',
      options: ['Text 1', 'Text 2', 'Both texts', 'A third unseen text'],
      correct: 1,
      explanation:
        'Q4a and Q4b are retrieval questions targeting Text 2, worth 2 marks each (4 marks total). They test AO1.',
    },
    {
      id: 'edx-lr-a6',
      question: 'How many marks is Paper 1 Q6 (Extended Evaluation) worth?',
      options: ['6 marks', '8 marks', '10 marks', '12 marks'],
      correct: 3,
      explanation: 'Q6 is the highest-tariff reading question on Paper 1, worth 12 marks and testing AO4.',
    },
    {
      id: 'edx-lr-a7',
      question: 'What assessment objective does evaluation test?',
      options: ['AO1', 'AO2', 'AO3', 'AO4'],
      correct: 3,
      explanation:
        'Evaluation is assessed under AO4. On Paper 1, Q2 (6 marks), Q5 (6 marks), and Q6 (12 marks) all test AO4.',
    },
    {
      id: 'edx-lr-a8',
      question: 'What types of texts appear on Edexcel Paper 2?',
      options: [
        'Two 19th-century non-fiction texts',
        'One fiction and one literary non-fiction (20th/21st century)',
        'Two contemporary newspaper articles',
        'One fiction and one 19th-century text',
      ],
      correct: 1,
      explanation:
        'Paper 2 uses one fiction text and one literary non-fiction text, both from the 20th or 21st century.',
    },
    {
      id: 'edx-lr-a9',
      question: 'How many marks are Paper 2 Q1 and Q3 each worth?',
      options: ['1 mark each', '2 marks each', '4 marks each', '6 marks each'],
      correct: 0,
      explanation:
        'Q1 and Q3 on Paper 2 are each worth just 1 mark — they are simple retrieval questions.',
    },
    {
      id: 'edx-lr-a10',
      question: 'What is the mark allocation for Paper 2 Q4?',
      options: ['6 marks', '8 marks', '10 marks', '16 marks'],
      correct: 2,
      explanation:
        'Q4 is worth 10 marks and tests AO2 — analysis of both language and structure in the literary non-fiction text.',
    },
    {
      id: 'edx-lr-a11',
      question: 'Paper 2 Q5 tests which skill?',
      options: ['Language analysis', 'Evaluation', 'Synthesis across both texts', 'Comparing perspectives'],
      correct: 2,
      explanation:
        'Q5 tests synthesis (AO1) — drawing together information from both texts on a shared focus.',
    },
    {
      id: 'edx-lr-a12',
      question: 'How many marks is Paper 2 Q6 worth?',
      options: ['10 marks', '12 marks', '16 marks', '20 marks'],
      correct: 2,
      explanation:
        'Q6 is worth 16 marks and tests AO3 — comparing how writers convey their different perspectives.',
    },
    {
      id: 'edx-lr-a13',
      question: 'What distinguishes synthesis (Q5) from comparison (Q6) on Paper 2?',
      options: [
        'Synthesis uses quotations; comparison does not',
        'Synthesis draws together information (AO1); comparison analyses perspectives and methods (AO3)',
        'Synthesis is longer than comparison',
        'There is no meaningful difference',
      ],
      correct: 1,
      explanation:
        'Synthesis (AO1) focuses on drawing together information. Comparison (AO3) requires analysis of differing perspectives and the methods writers use to convey them.',
    },
    {
      id: 'edx-lr-a14',
      question: 'A student\'s Q6 response discusses each text separately without making direct comparisons. What level would this likely achieve?',
      options: [
        'Level 4 (13-16 marks)',
        'Level 3 (9-12 marks)',
        'Level 2 (5-8 marks)',
        'Level 1 (1-4 marks)',
      ],
      correct: 2,
      explanation:
        'Discussing texts separately without direct comparison shows "some awareness" but lacks the sustained comparative analysis needed for Level 3+.',
    },
    {
      id: 'edx-lr-a15',
      question: 'Which of the following is a rhetorical device commonly found in 19th-century non-fiction?',
      options: [
        'Stream of consciousness',
        'Rhetorical questions and tricolon',
        'Free indirect discourse',
        'Interior monologue',
      ],
      correct: 1,
      explanation:
        '19th-century non-fiction frequently uses rhetorical devices such as rhetorical questions, tricolon (lists of three), anaphora, and direct address to persuade or argue.',
    },
    {
      id: 'edx-lr-a16',
      question: 'On Paper 2 Q4, what must a response address to reach Level 3 or above?',
      options: [
        'Language only',
        'Structure only',
        'Both language and structure',
        'Language, structure, and historical context',
      ],
      correct: 2,
      explanation:
        'Q4 explicitly tests analysis of both language and structure. Responses addressing only one element will be capped at Level 2.',
    },
    {
      id: 'edx-lr-a17',
      question: 'What is the total mark allocation for Edexcel Paper 2 Section A (Reading)?',
      options: ['30 marks', '40 marks', '50 marks', '80 marks'],
      correct: 1,
      explanation: 'Paper 2 Section A (Reading) is worth 40 marks: Q1 (1) + Q2 (6) + Q3 (1) + Q4 (10) + Q5 (6) + Q6 (16) = 40.',
    },
    {
      id: 'edx-lr-a18',
      question: 'Which is the correct mark allocation for Paper 1 reading questions?',
      options: [
        'Q1: 4, Q2: 6, Q3: 8, Q4a/b: 4, Q5: 6, Q6: 12',
        'Q1: 4, Q2: 8, Q3: 12, Q4: 16',
        'Q1: 4, Q2: 6, Q3: 6, Q4: 12, Q5: 12',
        'Q1: 8, Q2: 8, Q3: 8, Q4: 16',
      ],
      correct: 0,
      explanation:
        'Edexcel Paper 1 reading: Q1 (4) + Q2 (6) + Q3 (8) + Q4a/b (2+2) + Q5 (6) + Q6 (12) = 40 marks.',
    },
    {
      id: 'edx-lr-a19',
      question: 'How does Edexcel Paper 1 differ from AQA Paper 1?',
      options: [
        'They are essentially the same',
        'Edexcel uses 19th-century non-fiction; AQA uses fiction',
        'Edexcel is shorter than AQA',
        'Edexcel has fewer reading questions',
      ],
      correct: 1,
      explanation:
        'This is the most fundamental difference. AQA Paper 1 uses fiction for reading and creative writing for the writing section. Edexcel Paper 1 uses 19th-century non-fiction for reading and transactional writing for the writing section.',
    },
    {
      id: 'edx-lr-a20',
      question: 'Across both Edexcel papers, which skill is tested by the highest total number of marks in the reading sections?',
      options: [
        'Retrieval (AO1)',
        'Language and structure analysis (AO2)',
        'Comparison (AO3)',
        'Evaluation (AO4)',
      ],
      correct: 3,
      explanation:
        'Evaluation (AO4) accounts for Q2 (6) + Q5 (6) + Q6 (12) = 24 marks on Paper 1 alone. This makes it the highest-tested skill and your top revision priority.',
    },
  ],
};

// ════════════════════════════════════════════════════════════════════
// COURSE 2 — Edexcel GCSE Language: Writing
// ════════════════════════════════════════════════════════════════════

const edexcelGcseLangWriting = {
  id: 'edexcel-gcse-lang-writing',
  title: 'Edexcel GCSE Language: Writing',
  subtitle: 'Master transactional and creative writing for both Edexcel 1EN2 papers — from articles and speeches to narratives and descriptions.',
  tier: 'GCSE',
  board: 'Edexcel',
  specId: 'gcse-lang',
  specCode: '1EN2',
  price: 49,
  duration: '7-9 hours',
  level: 'GCSE (Years 10-11)',
  description:
    'Covers every writing task on the Edexcel English Language specification. Paper 1 Section B requires transactional writing (articles, letters, speeches, reports, reviews) while Paper 2 Section B requires creative writing (descriptive and narrative). Includes Edexcel-specific mark schemes, model answers, and strategies for the 40-mark writing sections.',
  color: '#dc2626',
  moduleList: [
    // ──────────────────────────────────────────────
    // MODULE 1 — Paper 1 Transactional Writing: Articles & Reviews
    // ──────────────────────────────────────────────
    {
      id: 'edx-lw-m1',
      title: 'Paper 1 Transactional Writing: Articles & Reviews',
      duration: '40 mins',
      content: `
<h2>Paper 1 Section B — Transactional Writing: Articles and Reviews</h2>

<p>Paper 1 Section B is worth <strong>40 marks</strong> (24 for AO5: content and organisation; 16 for AO6: technical accuracy). You are given a choice of <strong>two tasks</strong> (Q7 or Q8), each specifying a form, audience, and purpose. This module focuses on two of the most common forms: <strong>articles</strong> and <strong>reviews</strong>.</p>

<div class="key-term"><strong>Key Term: Transactional Writing</strong> — Writing with a clear real-world purpose — to argue, persuade, advise, inform, or explain. Unlike creative writing, transactional writing addresses a specific audience and follows established conventions for its form (e.g. headline for an article, star rating for a review).</div>

<h3>Edexcel Paper 1 Writing — Key Differences from AQA</h3>
<p>On AQA, transactional writing appears on Paper 2. On Edexcel, it is on <strong>Paper 1</strong>. Edexcel also provides more scaffolding — you may see bullet points suggesting content, a planning box, and an opening prompt to get you started.</p>

<h3>Article Conventions</h3>
<ul>
  <li><strong>Headline:</strong> Concise, engaging, may use wordplay or alliteration.</li>
  <li><strong>Optional subheading or strapline:</strong> Adds context beneath the headline.</li>
  <li><strong>Opening hook:</strong> A striking statement, question, or anecdote to grab the reader.</li>
  <li><strong>Paragraphed body:</strong> Clear topic sentences, developed arguments, evidence or examples.</li>
  <li><strong>Closing:</strong> A memorable final statement — call to action, rhetorical question, or full-circle reference.</li>
</ul>

<h3>Review Conventions</h3>
<ul>
  <li><strong>Clear subject:</strong> State what you are reviewing early on.</li>
  <li><strong>Balanced assessment:</strong> Discuss strengths and weaknesses.</li>
  <li><strong>Descriptive detail:</strong> Help the reader imagine the experience.</li>
  <li><strong>Personal voice:</strong> Reviews allow opinion — use first person and evaluative language.</li>
  <li><strong>Recommendation:</strong> End with a clear verdict.</li>
</ul>

<div class="model-answer"><strong>Model Article Opening (AO5 Level 4):</strong>
<em>The School Lunch Revolution We Desperately Need</em>

It is a truth universally acknowledged that a secondary school student in possession of a lunch break must be in want of something edible. And yet, day after day, thousands of young people across this country sit down to meals that would embarrass a prison canteen. Soggy pasta. Lukewarm soup of indeterminate origin. A bread roll with the structural integrity of a cricket ball. If we are serious about student wellbeing, it is time we started with what is on their plates.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Edexcel often provides bullet points suggesting what to include. Use them — they are there to help you organise your response. But do not treat them as a rigid checklist. Develop your own ideas beyond the prompts.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Forgetting form conventions. An article without a headline, or a review that reads like an essay, signals to the examiner that you have not considered your form. Always include the basic conventions.</div>

<h3>AO5 vs AO6 — Where the Marks Are</h3>
<p>AO5 (24 marks) rewards content and organisation: ideas, engagement with audience, paragraphing, structural devices. AO6 (16 marks) rewards technical accuracy: spelling, punctuation, grammar, sentence variety. Both matter, but AO5 carries more weight.</p>
`,
      quiz: [
        {
          id: 'edx-lw-m1-q1',
          question: 'On which Edexcel paper does transactional writing appear?',
          options: ['Paper 1 Section B', 'Paper 2 Section B', 'Paper 1 Section A', 'A separate writing paper'],
          correct: 0,
          explanation:
            'Transactional writing appears on Edexcel Paper 1 Section B. This is a key difference from AQA, where transactional writing is on Paper 2.',
        },
        {
          id: 'edx-lw-m1-q2',
          question: 'How many marks is the Paper 1 writing section worth in total?',
          options: ['24 marks', '30 marks', '40 marks', '80 marks'],
          correct: 2,
          explanation: 'Paper 1 Section B is worth 40 marks: 24 for AO5 (content and organisation) and 16 for AO6 (technical accuracy).',
        },
        {
          id: 'edx-lw-m1-q3',
          question: 'Which of the following is NOT a standard article convention?',
          options: [
            'A headline',
            'An opening hook',
            'A "Dear Sir/Madam" salutation',
            'A paragraphed body with topic sentences',
          ],
          correct: 2,
          explanation: '"Dear Sir/Madam" is a letter convention, not an article convention. Articles use headlines, subheadings, and engaging openings.',
        },
        {
          id: 'edx-lw-m1-q4',
          question: 'What scaffolding does Edexcel typically provide for writing tasks?',
          options: [
            'No scaffolding at all',
            'Bullet points, planning boxes, and sometimes an opening prompt',
            'A full plan that students must follow exactly',
            'Model answers to imitate',
          ],
          correct: 1,
          explanation:
            'Edexcel provides more scaffolding than AQA — typically bullet points suggesting content, a planning box, and sometimes an opening line or prompt.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 2 — Paper 1 Transactional Writing: Speeches & Letters
    // ──────────────────────────────────────────────
    {
      id: 'edx-lw-m2',
      title: 'Paper 1 Transactional Writing: Speeches & Letters',
      duration: '40 mins',
      content: `
<h2>Paper 1 Section B — Speeches and Letters</h2>

<p>Speeches and letters are among the most commonly tested transactional forms on Edexcel Paper 1. Both require a strong awareness of <strong>audience</strong> and <strong>purpose</strong>, but their conventions differ significantly. Getting the form right is essential for AO5 marks.</p>

<h3>Speech Conventions</h3>
<ul>
  <li><strong>Address the audience directly:</strong> "Ladies and gentlemen," or "Fellow students,"</li>
  <li><strong>Rhetorical techniques:</strong> Questions, tricolon, repetition, anaphora, direct address ("you").</li>
  <li><strong>Varied tone:</strong> Move between serious, humorous, passionate, and reflective.</li>
  <li><strong>Sense of spoken voice:</strong> Contractions, pauses (dashes or ellipses), conversational asides.</li>
  <li><strong>Strong conclusion:</strong> A call to action or a memorable final image.</li>
</ul>

<div class="text-extract"><strong>Example prompt:</strong> Your school is considering removing all after-school clubs to save money. You have been asked to give a speech to the school governors arguing that the clubs should be kept. Write your speech.<div class="source">Typical Edexcel Paper 1 writing task</div></div>

<div class="model-answer"><strong>Model Speech Opening (AO5 Level 4):</strong> Good evening, governors. I want you to imagine something for a moment. Imagine a school where the final bell rings at half past three and the corridors empty within minutes. No laughter from the drama studio. No thud of basketballs in the sports hall. No quiet concentration in the chess club. Just silence — and students walking home to empty houses, to screens, to nothing. That is the school you are proposing to create. And I am here to tell you, respectfully but firmly, that it would be a mistake.</div>

<h3>Letter Conventions</h3>
<ul>
  <li><strong>Address and date:</strong> Formal letters include sender's address and date (though Edexcel may not require full formatting).</li>
  <li><strong>Salutation:</strong> "Dear Mr/Mrs [Name]," or "Dear Sir/Madam,"</li>
  <li><strong>Clear purpose in the opening paragraph:</strong> State why you are writing immediately.</li>
  <li><strong>Formal register:</strong> Avoid slang and contractions in formal letters.</li>
  <li><strong>Sign-off:</strong> "Yours sincerely," (named recipient) or "Yours faithfully," (Dear Sir/Madam).</li>
</ul>

<div class="model-answer"><strong>Model Letter Opening (AO5 Level 3-4):</strong>
Dear Councillor Hargreaves,

I am writing to express my concern about the proposed closure of Westfield Community Library. As a resident of the area and a regular user of the library since childhood, I believe this decision would cause significant and lasting damage to our community — particularly to young people, elderly residents, and those who rely on the library's free internet access to manage essential tasks such as job applications and benefit claims.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> A speech should sound like a speech — use rhetorical techniques and address the audience directly. A letter should read like a letter — maintain appropriate formality and follow conventions. The examiner can immediately tell if you have not adapted your writing to the form.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a speech that reads like an essay. If your speech contains no direct address, no rhetorical questions, and no sense of a spoken voice, it is an essay in disguise. Similarly, a letter without a salutation and sign-off loses easy form marks.</div>

<h3>Adapting Register for Audience</h3>
<p>Edexcel tasks always specify an audience. Match your register:</p>
<ul>
  <li><strong>School governors / council:</strong> Formal, measured, evidence-based.</li>
  <li><strong>Fellow students:</strong> Semi-formal, passionate, relatable.</li>
  <li><strong>Newspaper editor:</strong> Formal, concise, authoritative.</li>
  <li><strong>A friend or family member:</strong> Informal, personal, conversational.</li>
</ul>
`,
      quiz: [
        {
          id: 'edx-lw-m2-q1',
          question: 'Which sign-off is correct when you have addressed a letter to "Dear Sir/Madam"?',
          options: [
            'Yours sincerely',
            'Yours faithfully',
            'Kind regards',
            'Best wishes',
          ],
          correct: 1,
          explanation:
            '"Yours faithfully" is used when the recipient is not named (Dear Sir/Madam). "Yours sincerely" is used when you have used the recipient\'s name.',
        },
        {
          id: 'edx-lw-m2-q2',
          question: 'Which of the following best demonstrates a "sense of spoken voice" in a speech?',
          options: [
            '"Furthermore, it should be noted that the evidence suggests…"',
            '"And I know what you\'re thinking — but hear me out."',
            '"In conclusion, the data clearly indicates…"',
            '"The aforementioned points demonstrate…"',
          ],
          correct: 1,
          explanation:
            'A sense of spoken voice includes contractions, direct address, conversational asides, and acknowledgement of the audience\'s likely reactions.',
        },
        {
          id: 'edx-lw-m2-q3',
          question: 'What register should you use when writing a letter to a local council member?',
          options: [
            'Informal and chatty',
            'Formal, measured, and evidence-based',
            'Poetic and descriptive',
            'Humorous and sarcastic',
          ],
          correct: 1,
          explanation:
            'Letters to officials require formal register — measured tone, evidence-based arguments, and respectful language.',
        },
        {
          id: 'edx-lw-m2-q4',
          question: 'What is anaphora?',
          options: [
            'A question that does not expect an answer',
            'A comparison using "like" or "as"',
            'Repetition of a word or phrase at the start of consecutive clauses or sentences',
            'Exaggeration for dramatic effect',
          ],
          correct: 2,
          explanation:
            'Anaphora is the deliberate repetition of a word or phrase at the beginning of successive clauses — e.g. "No laughter… No thud… No quiet concentration." It creates rhythm and emphasis.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 3 — Paper 1 Transactional Writing: Reports & Guides
    // ──────────────────────────────────────────────
    {
      id: 'edx-lw-m3',
      title: 'Paper 1 Transactional Writing: Reports & Guides',
      duration: '35 mins',
      content: `
<h2>Paper 1 Section B — Reports and Guides</h2>

<p>Reports and guides are less frequently tested than articles, speeches, or letters, but they do appear on Edexcel Paper 1. Both are <strong>informative</strong> forms — they aim to present information clearly and accessibly rather than to argue or persuade.</p>

<h3>Report Conventions</h3>
<ul>
  <li><strong>Title:</strong> Clear, factual — e.g. "Report on the Condition of School Sports Facilities."</li>
  <li><strong>Subheadings:</strong> Divide the report into logical sections.</li>
  <li><strong>Formal, impersonal register:</strong> Avoid first person where possible. Use passive voice and measured language.</li>
  <li><strong>Findings and recommendations:</strong> Present facts, then suggest actions.</li>
  <li><strong>Numbered points or bullet points:</strong> Acceptable and appropriate for clarity.</li>
</ul>

<div class="model-answer"><strong>Model Report Opening (AO5 Level 3-4):</strong>
<em>Report on Student Wellbeing Provision at Westfield Academy</em>

<em>1. Introduction</em>
This report examines the current state of wellbeing support available to students at Westfield Academy and identifies areas where provision could be improved. It is based on a survey of 200 students conducted during the autumn term, as well as interviews with pastoral staff and the school counsellor.

<em>2. Key Findings</em>
The survey revealed that 67% of respondents felt they did not know where to access mental health support within the school. Furthermore, only 12% of students reported having used the school counselling service, despite 45% stating they had experienced significant stress during the previous academic year.</div>

<h3>Guide/Leaflet Conventions</h3>
<ul>
  <li><strong>Title:</strong> Engaging and informative — e.g. "Your Guide to Surviving Year 11."</li>
  <li><strong>Subheadings:</strong> Organise content into bite-sized sections.</li>
  <li><strong>Direct address:</strong> Use "you" to speak to the reader personally.</li>
  <li><strong>Practical advice:</strong> Clear, actionable tips and suggestions.</li>
  <li><strong>Accessible tone:</strong> Friendly but authoritative — not too formal, not too casual.</li>
</ul>

<div class="model-answer"><strong>Model Guide Extract (AO5 Level 3):</strong>
<em>Revision Does Not Have to Be Miserable: A Student's Guide</em>

<em>Start Small</em>
You do not need to revise for six hours straight. In fact, research shows that shorter sessions of 25-30 minutes, followed by a five-minute break, are far more effective than marathon cramming. Try the Pomodoro Technique: set a timer, work with focus, then reward yourself with something small — a cup of tea, a walk around the garden, five minutes of music.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Reports use a notably different register from other transactional forms. They are impersonal, factual, and structured. If the task asks for a report and your writing sounds like a passionate speech, you will lose marks for form.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating a report like an argumentative essay. Reports present findings objectively and make recommendations — they do not argue or use emotive language. Save your rhetorical techniques for speeches and articles.</div>

<h3>Choosing Between Q7 and Q8</h3>
<p>Edexcel gives you a choice of two writing tasks. Read both carefully before committing. Consider:</p>
<ul>
  <li>Which form are you most confident with?</li>
  <li>Which topic gives you more ideas?</li>
  <li>Which allows you to demonstrate a wider range of vocabulary and sentence structures?</li>
</ul>
<p>Spend <strong>2-3 minutes</strong> reading and choosing, then <strong>5 minutes</strong> planning before you write.</p>
`,
      quiz: [
        {
          id: 'edx-lw-m3-q1',
          question: 'What register is most appropriate for a formal report?',
          options: [
            'Informal and conversational',
            'Emotive and passionate',
            'Formal, impersonal, and factual',
            'Humorous and satirical',
          ],
          correct: 2,
          explanation:
            'Reports use formal, impersonal register with measured language. They present findings objectively, often using passive voice and subheadings.',
        },
        {
          id: 'edx-lw-m3-q2',
          question: 'Which feature distinguishes a guide from a report?',
          options: [
            'Guides use subheadings; reports do not',
            'Guides use direct address ("you") and practical advice; reports are impersonal and fact-based',
            'Guides are formal; reports are informal',
            'There is no meaningful difference',
          ],
          correct: 1,
          explanation:
            'Guides address the reader directly with practical, accessible advice. Reports are impersonal and present findings objectively.',
        },
        {
          id: 'edx-lw-m3-q3',
          question: 'How long should you spend choosing between Q7 and Q8?',
          options: [
            'No time — pick the first one immediately',
            '2-3 minutes reading both, then decide',
            '10 minutes comparing both options',
            '15 minutes writing plans for both',
          ],
          correct: 1,
          explanation:
            'Spend 2-3 minutes reading both tasks and selecting the one that suits your strengths and gives you the most ideas.',
        },
        {
          id: 'edx-lw-m3-q4',
          question: 'A report asks about school facilities. A student writes: "Our school facilities are absolutely disgraceful and it makes me furious." What is wrong with this?',
          options: [
            'It is too short',
            'It uses emotive, personal language inappropriate for a report',
            'It does not use enough technical vocabulary',
            'Nothing — it is a strong opening',
          ],
          correct: 1,
          explanation:
            'Reports should be impersonal and measured. "Absolutely disgraceful" and "makes me furious" are emotive and subjective — appropriate for a speech, but not a report.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 4 — Paper 2 Creative Writing: Descriptive Writing
    // ──────────────────────────────────────────────
    {
      id: 'edx-lw-m4',
      title: 'Paper 2 Creative Writing: Descriptive Writing',
      duration: '40 mins',
      content: `
<h2>Paper 2 Section B — Descriptive Writing</h2>

<p>Edexcel Paper 2 Section B is the creative writing section, worth <strong>40 marks</strong> (24 AO5 + 16 AO6). You choose one of two tasks (Q7 or Q8). Tasks may ask for <strong>descriptive</strong> or <strong>narrative</strong> writing — or sometimes a blend. This module focuses on descriptive writing.</p>

<div class="key-term"><strong>Key Term: Descriptive Writing</strong> — Writing that creates a vivid impression of a person, place, or moment using sensory detail, figurative language, and carefully chosen vocabulary. The focus is on evoking an atmosphere or feeling rather than telling a story.</div>

<h3>Key Difference: Edexcel vs AQA</h3>
<p>On AQA, creative writing is on Paper 1. On Edexcel, it is on <strong>Paper 2</strong>. Edexcel may provide a visual stimulus (photograph or image) and/or a written prompt. There may also be bullet points and a planning box.</p>

<h3>The Five Senses Framework</h3>
<p>Strong descriptive writing engages multiple senses. Do not rely solely on visual description:</p>
<ul>
  <li><strong>Sight:</strong> Colours, light, shadow, shapes, movement.</li>
  <li><strong>Sound:</strong> Volume, rhythm, silence, specific sounds.</li>
  <li><strong>Touch:</strong> Texture, temperature, pressure, pain.</li>
  <li><strong>Smell:</strong> Fresh, acrid, sweet, metallic, damp.</li>
  <li><strong>Taste:</strong> Where relevant — salt air, metallic fear, sweetness.</li>
</ul>

<div class="model-answer"><strong>Model Descriptive Opening (AO5 Level 4):</strong> The market came alive before dawn. First, sound: the metallic scrape of shutters being hauled upward, the thud of crates dropped from shoulder height onto concrete, voices calling across the half-darkness in a language I could hear but not yet understand. Then smell — coffee, sharp and insistent, threading through the colder, earthier scent of wet stone and vegetable crates left out overnight. By the time the light arrived, pale and reluctant through a ceiling of cloud, the stalls were already dressed: pyramids of oranges so vivid they seemed to generate their own warmth, fish laid out on crushed ice with eyes that still held a faint, accusing brightness.</div>

<h3>Techniques for Top-Band Description</h3>
<ol>
  <li><strong>Zoom in and out:</strong> Alternate between wide-angle descriptions and close-up details.</li>
  <li><strong>Use figurative language purposefully:</strong> Metaphors, similes, and personification should feel natural, not forced.</li>
  <li><strong>Vary sentence length:</strong> Long, flowing sentences for atmosphere; short sentences for impact.</li>
  <li><strong>Create a mood or atmosphere:</strong> Every detail should contribute to a unified feeling.</li>
  <li><strong>Avoid cliché:</strong> "The sun was beating down" and "silence was deafening" will not impress.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Edexcel examiners reward originality. A genuinely surprising image or an unexpected sensory detail will make your writing memorable. Practise writing descriptions of everyday places — a bus stop, a supermarket, a classroom — and finding what is extraordinary in the ordinary.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a narrative when the task asks for description. If the prompt says "Describe…" then the focus should be on creating an atmosphere and evoking a place or moment — not telling a story with a beginning, middle, and end.</div>
`,
      quiz: [
        {
          id: 'edx-lw-m4-q1',
          question: 'On which Edexcel paper does creative writing appear?',
          options: ['Paper 1 Section A', 'Paper 1 Section B', 'Paper 2 Section A', 'Paper 2 Section B'],
          correct: 3,
          explanation:
            'Creative writing (descriptive and narrative) appears on Edexcel Paper 2 Section B. This is the opposite of AQA, where creative writing is on Paper 1.',
        },
        {
          id: 'edx-lw-m4-q2',
          question: 'Which of the following is a cliché to avoid in descriptive writing?',
          options: [
            '"The oranges seemed to generate their own warmth"',
            '"The silence was deafening"',
            '"Voices calling across the half-darkness"',
            '"Fish laid out with eyes that held a faint, accusing brightness"',
          ],
          correct: 1,
          explanation:
            '"The silence was deafening" is an overused cliché. Examiners want original, fresh imagery — not stock phrases.',
        },
        {
          id: 'edx-lw-m4-q3',
          question: 'What is the key focus of descriptive writing?',
          options: [
            'Telling a story with a clear plot',
            'Presenting an argument with evidence',
            'Creating a vivid atmosphere using sensory detail and figurative language',
            'Explaining a process step by step',
          ],
          correct: 2,
          explanation:
            'Descriptive writing focuses on evoking a place, person, or moment through sensory detail, imagery, and carefully chosen vocabulary.',
        },
        {
          id: 'edx-lw-m4-q4',
          question: 'What stimulus might Edexcel provide for a creative writing task?',
          options: [
            'A photograph or image and/or a written prompt',
            'A full paragraph to continue',
            'A news article to respond to',
            'A list of techniques to include',
          ],
          correct: 0,
          explanation:
            'Edexcel may provide a visual stimulus (photograph/image) and/or a written prompt, often accompanied by bullet points and a planning box.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 5 — Paper 2 Creative Writing: Narrative Writing
    // ──────────────────────────────────────────────
    {
      id: 'edx-lw-m5',
      title: 'Paper 2 Creative Writing: Narrative Writing',
      duration: '40 mins',
      content: `
<h2>Paper 2 Section B — Narrative Writing</h2>

<p>Narrative writing tasks on Edexcel Paper 2 ask you to write a <strong>story</strong> or a section of a story. You may be given an opening line, a title, a visual prompt, or a scenario to develop. The mark scheme is the same as descriptive writing: <strong>24 marks for AO5</strong> (content and organisation) and <strong>16 marks for AO6</strong> (technical accuracy).</p>

<div class="key-term"><strong>Key Term: Narrative Voice</strong> — The perspective from which a story is told. First person ("I") creates intimacy and subjectivity. Third person ("she/he/they") allows a wider view and can shift between characters. Choose your narrative voice deliberately.</div>

<h3>The Exam Trap: Trying to Write Too Much</h3>
<p>You have approximately <strong>45 minutes</strong> for the writing section (after choosing and planning). The biggest mistake students make is attempting an epic plot with multiple twists. Instead, keep your narrative <strong>focused</strong>:</p>
<ul>
  <li><strong>One main character</strong> — do not introduce more than two or three.</li>
  <li><strong>One setting or location</strong> — describe it vividly.</li>
  <li><strong>One event or turning point</strong> — build towards it and resolve it.</li>
  <li><strong>A single timeframe</strong> — minutes, hours, or at most a day.</li>
</ul>

<h3>Narrative Structure Options</h3>
<ol>
  <li><strong>Linear:</strong> Beginning → middle → end. Simple and effective if done well.</li>
  <li><strong>In medias res:</strong> Start in the middle of the action, then fill in context.</li>
  <li><strong>Circular:</strong> End where you began, with a shift in meaning or perspective.</li>
  <li><strong>Dual timeline:</strong> Alternate between two timeframes (present and memory). Ambitious but effective.</li>
</ol>

<div class="model-answer"><strong>Model Narrative Opening — In Medias Res (AO5 Level 4):</strong> The letter was still in my hand when the doorbell rang. I had read it three times — the first time standing, the second sitting, the third lying on the kitchen floor, which is where I remained for what might have been ten minutes or might have been an hour. Time had become unreliable.

The doorbell again. Longer this time, more insistent.

I folded the letter along its original creases, placed it face-down on the table, and walked to the door with the careful, measured steps of someone trying very hard to appear normal.</div>

<h3>Creating Tension and Atmosphere</h3>
<ul>
  <li><strong>Withhold information:</strong> Do not reveal everything at once. Let the reader wonder.</li>
  <li><strong>Use short sentences and paragraphs:</strong> These quicken pace and create unease.</li>
  <li><strong>Sensory detail:</strong> Ground the reader in the physical world — what the character sees, hears, feels.</li>
  <li><strong>Internal thought:</strong> Show the character's reactions and doubts.</li>
  <li><strong>Contrast:</strong> Juxtapose ordinary details with something unsettling.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> A strong ending is crucial. Avoid the classic student trap of "and then I woke up — it was all a dream." Instead, aim for an ending that feels earned — a moment of realisation, a quiet resolution, or an image that echoes the opening.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> All action, no description. A story that is purely plot — "then this happened, then that happened" — will score poorly for AO5 because it lacks the crafted language and atmosphere the mark scheme rewards. Slow down and describe.</div>
`,
      quiz: [
        {
          id: 'edx-lw-m5-q1',
          question: 'What is "in medias res"?',
          options: [
            'Writing in the second person',
            'Starting a story in the middle of the action',
            'Using multiple narrators',
            'Writing a story backwards',
          ],
          correct: 1,
          explanation:
            'In medias res means "in the middle of things" — beginning your narrative mid-action and filling in context afterwards. It creates immediate engagement.',
        },
        {
          id: 'edx-lw-m5-q2',
          question: 'How should you keep your narrative focused within the time available?',
          options: [
            'Include as many characters and locations as possible',
            'Write a long backstory before the main event',
            'Focus on one character, one setting, one event, and a single timeframe',
            'Skip description and focus entirely on plot',
          ],
          correct: 2,
          explanation:
            'With approximately 45 minutes, keeping your narrative focused — one character, one setting, one key event — allows you to develop quality writing rather than rushing through plot.',
        },
        {
          id: 'edx-lw-m5-q3',
          question: 'Which of the following endings should be avoided?',
          options: [
            'A moment of quiet realisation by the protagonist',
            '"And then I woke up — it was all a dream"',
            'An image that echoes the opening of the story',
            'A final line of dialogue that reveals something new',
          ],
          correct: 1,
          explanation:
            'The "it was all a dream" ending is a cliché that undermines everything that came before it. Examiners see it frequently and it signals a lack of planning.',
        },
        {
          id: 'edx-lw-m5-q4',
          question: 'A student writes a story that is entirely plot-driven with no descriptive detail. What is the likely impact on their AO5 mark?',
          options: [
            'No impact — plot is all that matters',
            'It will be capped at lower levels because AO5 rewards crafted language and atmosphere, not just events',
            'It will score highly because examiners prefer action',
            'It will only affect AO6, not AO5',
          ],
          correct: 1,
          explanation:
            'AO5 rewards content AND organisation — including crafted language, controlled atmosphere, and varied structural choices. A plot-only response lacks the linguistic quality the mark scheme demands.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 6 — Sentences, Paragraphs & SPaG
    // ──────────────────────────────────────────────
    {
      id: 'edx-lw-m6',
      title: 'Sentences, Paragraphs & SPaG',
      duration: '30 mins',
      content: `
<h2>AO6: Technical Accuracy — Sentences, Paragraphs, and SPaG</h2>

<p>AO6 is worth <strong>16 marks</strong> on each writing section (Paper 1 and Paper 2). It assesses spelling, punctuation, grammar, and sentence variety. Many students treat this as an afterthought, but 16 marks is a significant proportion — equivalent to an entire reading question.</p>

<div class="key-term"><strong>Key Term: SPaG</strong> — Spelling, Punctuation, and Grammar. On Edexcel, these are assessed under AO6 and integrated into the writing mark scheme. There is no separate SPaG test — accuracy is assessed within your writing responses.</div>

<h3>AO6 Mark Scheme Descriptors</h3>
<ul>
  <li><strong>Level 4 (13-16 marks):</strong> Wide range of punctuation used accurately. Sentence forms varied and controlled for effect. Spelling of ambitious vocabulary is accurate. Standard English used consistently.</li>
  <li><strong>Level 3 (9-12 marks):</strong> Range of punctuation mostly accurate. Some variety of sentence forms. Spelling generally accurate, including some complex words.</li>
  <li><strong>Level 2 (5-8 marks):</strong> Basic punctuation mostly correct. Some variety of sentences attempted. Spelling of common words accurate; errors in more complex words.</li>
  <li><strong>Level 1 (1-4 marks):</strong> Limited punctuation, often inaccurate. Little sentence variety. Frequent spelling errors.</li>
</ul>

<h3>Punctuation That Impresses</h3>
<p>To reach Level 4, demonstrate a <strong>wide range</strong> of punctuation used accurately:</p>
<ul>
  <li><strong>Semicolons:</strong> Link two related independent clauses — "The rain had stopped; the streets still glistened."</li>
  <li><strong>Colons:</strong> Introduce an explanation, list, or elaboration — "There was one problem: the door was locked."</li>
  <li><strong>Dashes:</strong> Insert parenthetical information or create dramatic pause — "The answer — if there was one — lay somewhere in the silence."</li>
  <li><strong>Ellipsis:</strong> Suggest trailing off or omission — "She turned and walked away…"</li>
  <li><strong>Apostrophes:</strong> Possession (the school's policy) and contraction (don't). Get these right — errors here are very noticeable.</li>
</ul>

<h3>Sentence Variety for Effect</h3>
<ul>
  <li><strong>Simple sentences:</strong> Short and direct for impact — "She left."</li>
  <li><strong>Compound sentences:</strong> Two clauses joined by a conjunction — useful for balance.</li>
  <li><strong>Complex sentences:</strong> Subordinate clause adds detail — "Although the rain had stopped, the streets still glistened."</li>
  <li><strong>Minor sentences:</strong> Fragments used deliberately — "Silence. Total, suffocating silence."</li>
  <li><strong>Fronted adverbials:</strong> Open with when, where, or how — "Reluctantly, she opened the door."</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Do not use semicolons or colons unless you are confident you are using them correctly. A misused semicolon is worse than a correctly used full stop. Master one or two ambitious punctuation marks and use them with precision.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Comma splicing — joining two independent clauses with only a comma. "The door was open, she walked inside" should be "The door was open; she walked inside" or "The door was open. She walked inside." Comma splices are one of the most penalised errors.</div>

<h3>Commonly Misspelled Words</h3>
<p>Learn these — they appear frequently in exam responses and are often spelled incorrectly:</p>
<ul>
  <li>definitely (not "definately")</li>
  <li>separately (not "seperately")</li>
  <li>conscious (not "concious")</li>
  <li>disappear (not "dissapear")</li>
  <li>immediately (not "immediatly")</li>
  <li>necessary (not "neccessary")</li>
  <li>environment (not "enviroment")</li>
</ul>
`,
      quiz: [
        {
          id: 'edx-lw-m6-q1',
          question: 'How many marks is AO6 (technical accuracy) worth on each writing section?',
          options: ['8 marks', '12 marks', '16 marks', '24 marks'],
          correct: 2,
          explanation:
            'AO6 is worth 16 marks on each writing section — a significant proportion that many students undervalue.',
        },
        {
          id: 'edx-lw-m6-q2',
          question: 'Which of the following is a comma splice?',
          options: [
            '"The door was open; she walked inside."',
            '"The door was open, she walked inside."',
            '"The door was open. She walked inside."',
            '"Although the door was open, she hesitated."',
          ],
          correct: 1,
          explanation:
            'A comma splice joins two independent clauses with only a comma. It should be corrected with a semicolon, full stop, or conjunction.',
        },
        {
          id: 'edx-lw-m6-q3',
          question: 'When should a semicolon be used?',
          options: [
            'Before a list',
            'To join two related independent clauses',
            'After a greeting in a letter',
            'To indicate possession',
          ],
          correct: 1,
          explanation:
            'A semicolon links two related independent clauses that could each stand as separate sentences — e.g. "The rain stopped; the streets glistened."',
        },
        {
          id: 'edx-lw-m6-q4',
          question: 'Which punctuation range is needed to reach AO6 Level 4?',
          options: [
            'Full stops and commas only',
            'Full stops, commas, and question marks',
            'A wide range including semicolons, colons, and dashes used accurately',
            'Every possible punctuation mark in every paragraph',
          ],
          correct: 2,
          explanation:
            'Level 4 requires a "wide range of punctuation used accurately" — this means going beyond basic marks to include semicolons, colons, dashes, and other sophisticated punctuation.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 7 — Planning & Timing Strategy
    // ──────────────────────────────────────────────
    {
      id: 'edx-lw-m7',
      title: 'Planning & Timing Strategy',
      duration: '25 mins',
      content: `
<h2>Planning and Timing for Edexcel Paper 1 and Paper 2 Writing</h2>

<p>Both Edexcel papers are <strong>1 hour 55 minutes</strong> long, with the writing section worth <strong>40 marks</strong> — exactly half the paper. Poor time management is one of the most common reasons students underperform. This module gives you a concrete strategy.</p>

<div class="key-term"><strong>Key Term: Time Allocation</strong> — Dividing your available exam time proportionally according to mark weightings. On Edexcel, 40 reading marks and 40 writing marks means you should spend roughly equal time on each section.</div>

<h3>Recommended Time Split</h3>
<table>
  <tr><th>Section</th><th>Marks</th><th>Suggested Time</th></tr>
  <tr><td>Section A: Reading</td><td>40</td><td>1 hour</td></tr>
  <tr><td>Section B: Writing</td><td>40</td><td>50-55 minutes</td></tr>
</table>
<p>This leaves a few minutes for reading time at the start and checking at the end.</p>

<h3>Writing Section Breakdown</h3>
<ol>
  <li><strong>Read both tasks (2-3 minutes):</strong> Choose the one that plays to your strengths.</li>
  <li><strong>Plan (5-7 minutes):</strong> Use the Edexcel planning box. Sketch out your key ideas, structure, and any techniques you want to include.</li>
  <li><strong>Write (35-40 minutes):</strong> Follow your plan. Aim for 400-600 words of high-quality writing.</li>
  <li><strong>Check and edit (3-5 minutes):</strong> Read through for SPaG errors, comma splices, and missing punctuation.</li>
</ol>

<h3>Planning Techniques</h3>
<p><strong>For Transactional Writing (Paper 1):</strong></p>
<ul>
  <li>Bullet-point your key arguments or points (3-5 is ideal).</li>
  <li>Note your opening hook and closing statement.</li>
  <li>Identify your audience and register.</li>
  <li>List two or three rhetorical techniques to use.</li>
</ul>

<p><strong>For Creative Writing (Paper 2):</strong></p>
<ul>
  <li>Sketch your structure: beginning, shift/turning point, ending.</li>
  <li>Note key sensory details and images for each section.</li>
  <li>Choose your narrative voice and tense.</li>
  <li>Plan your ending first — knowing where you are heading prevents rambling.</li>
</ul>

<div class="model-answer"><strong>Example 5-Minute Plan (Descriptive Writing):</strong>
<em>Task: Describe a place that is changing.</em>
<ul>
  <li>Setting: An old cinema being demolished</li>
  <li>Opening: Wide shot of the building — scaffold, dust, peeling posters</li>
  <li>Middle: Zoom in — details of the foyer, the smell of old carpet, a torn screen</li>
  <li>Shift: Memory of what it used to be — sound of laughter, warmth of the projector light</li>
  <li>Ending: Return to present — the wrecking ball, a single ticket stub in the rubble</li>
  <li>Key images: "scaffold like a cage," "light that remembered being golden," "the ticket stub held on like a small, paper ghost"</li>
</ul></div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Edexcel provides a planning box on the paper. Use it — but do not spend more than 7 minutes. A plan is a tool, not a piece of assessed work. Even rough notes will improve your response more than diving straight in.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Not leaving time to proofread. The last 3-5 minutes spent checking for errors can gain you several AO6 marks. Common fixes: correcting comma splices, adding missing apostrophes, fixing spelling of common words.</div>

<h3>What If You Run Out of Time?</h3>
<p>If you have only 5 minutes left and your response is incomplete:</p>
<ul>
  <li>Do not panic — finish your current paragraph quickly.</li>
  <li>Write a strong concluding paragraph or sentence.</li>
  <li>A shorter, well-finished response scores better than a longer, unfinished one.</li>
  <li>An ending demonstrates control and organisation — the examiner will credit it.</li>
</ul>
`,
      quiz: [
        {
          id: 'edx-lw-m7-q1',
          question: 'How long are Edexcel English Language papers?',
          options: ['1 hour 30 minutes', '1 hour 45 minutes', '1 hour 55 minutes', '2 hours 15 minutes'],
          correct: 2,
          explanation:
            'Both Edexcel English Language papers are 1 hour 55 minutes — 10 minutes longer than AQA\'s 1 hour 45 minutes.',
        },
        {
          id: 'edx-lw-m7-q2',
          question: 'How long should you spend planning your writing response?',
          options: ['No time — start writing immediately', '2 minutes', '5-7 minutes', '15 minutes'],
          correct: 2,
          explanation:
            'Spend 5-7 minutes planning. This is enough time to organise your ideas, plan your structure, and note key techniques — without eating into writing time.',
        },
        {
          id: 'edx-lw-m7-q3',
          question: 'Why should you plan your ending first for creative writing?',
          options: [
            'Because examiners read the ending first',
            'Because knowing where you are heading prevents rambling and ensures a controlled structure',
            'Because the ending is worth more marks',
            'Because Edexcel requires you to write the ending first',
          ],
          correct: 1,
          explanation:
            'Planning the ending first gives your writing a clear destination. This prevents rambling and ensures your narrative or description has a controlled, purposeful structure.',
        },
        {
          id: 'edx-lw-m7-q4',
          question: 'What should you do in the final 3-5 minutes of the exam?',
          options: [
            'Start a new paragraph with additional ideas',
            'Rewrite your opening',
            'Proofread for SPaG errors — comma splices, missing apostrophes, spelling',
            'Add more quotations to your reading answers',
          ],
          correct: 2,
          explanation:
            'The final 3-5 minutes should be spent proofreading your writing for technical errors. Fixing comma splices, spelling, and punctuation can gain several AO6 marks.',
        },
      ],
    },
  ],

  // ══════════════════════════════════════════════
  // ASSESSMENT QUESTIONS (20)
  // ══════════════════════════════════════════════
  assessmentQuestions: [
    {
      id: 'edx-lw-a1',
      question: 'On Edexcel Paper 1, what type of writing is tested in Section B?',
      options: [
        'Creative writing (descriptive/narrative)',
        'Transactional writing (article, letter, speech, report, review)',
        'Poetry writing',
        'Analytical essay writing',
      ],
      correct: 1,
      explanation:
        'Edexcel Paper 1 Section B tests transactional writing. This is a key difference from AQA, where Paper 1 tests creative writing.',
    },
    {
      id: 'edx-lw-a2',
      question: 'On Edexcel Paper 2, what type of writing is tested in Section B?',
      options: [
        'Transactional writing',
        'Creative writing (descriptive/narrative)',
        'Argumentative essays',
        'Summary writing',
      ],
      correct: 1,
      explanation:
        'Edexcel Paper 2 Section B tests creative writing (descriptive and/or narrative). On AQA, creative writing is on Paper 1.',
    },
    {
      id: 'edx-lw-a3',
      question: 'How many marks is each writing section worth?',
      options: ['24 marks', '30 marks', '40 marks', '80 marks'],
      correct: 2,
      explanation: 'Each writing section (Paper 1 and Paper 2) is worth 40 marks: 24 for AO5 and 16 for AO6.',
    },
    {
      id: 'edx-lw-a4',
      question: 'What does AO5 assess?',
      options: [
        'Spelling, punctuation, and grammar',
        'Content and organisation',
        'Use of quotations',
        'Reading comprehension',
      ],
      correct: 1,
      explanation:
        'AO5 (24 marks) assesses content and organisation — your ideas, engagement with audience, paragraphing, and structural devices.',
    },
    {
      id: 'edx-lw-a5',
      question: 'What does AO6 assess?',
      options: [
        'Content and organisation',
        'Technical accuracy — spelling, punctuation, grammar, sentence variety',
        'Use of literary techniques',
        'Ability to compare texts',
      ],
      correct: 1,
      explanation:
        'AO6 (16 marks) assesses technical accuracy: spelling, punctuation, grammar, and the range and effectiveness of sentence forms.',
    },
    {
      id: 'edx-lw-a6',
      question: 'How many writing tasks does Edexcel offer on each paper?',
      options: ['One compulsory task', 'A choice of two tasks', 'A choice of three tasks', 'Two compulsory tasks'],
      correct: 1,
      explanation: 'Each paper offers a choice of two writing tasks (Q7 or Q8). You complete one.',
    },
    {
      id: 'edx-lw-a7',
      question: 'What scaffolding does Edexcel typically provide for writing tasks?',
      options: [
        'No scaffolding',
        'A complete model answer',
        'Bullet points, planning boxes, and sometimes an opening prompt',
        'A detailed paragraph-by-paragraph plan',
      ],
      correct: 2,
      explanation:
        'Edexcel provides more scaffolding than AQA — typically bullet points suggesting content, a planning box, and sometimes a writing prompt.',
    },
    {
      id: 'edx-lw-a8',
      question: 'Which sign-off should follow "Dear Mrs Patel,"?',
      options: ['Yours faithfully', 'Yours sincerely', 'Kind regards', 'Best wishes'],
      correct: 1,
      explanation:
        '"Yours sincerely" follows a named recipient. "Yours faithfully" follows "Dear Sir/Madam" (unnamed recipient).',
    },
    {
      id: 'edx-lw-a9',
      question: 'What is the main difference between a report and a speech?',
      options: [
        'Reports are longer than speeches',
        'Reports are impersonal and factual; speeches use direct address and rhetorical techniques',
        'Reports use quotations; speeches do not',
        'There is no significant difference',
      ],
      correct: 1,
      explanation:
        'Reports use formal, impersonal register and present findings objectively. Speeches directly address an audience and use rhetorical devices to persuade or inspire.',
    },
    {
      id: 'edx-lw-a10',
      question: 'What is a comma splice?',
      options: [
        'Using a comma before a conjunction',
        'Joining two independent clauses with only a comma',
        'Using too many commas in one sentence',
        'Forgetting a comma after an introductory phrase',
      ],
      correct: 1,
      explanation:
        'A comma splice joins two independent clauses with only a comma — e.g. "The door was open, she walked inside." Use a semicolon, full stop, or conjunction instead.',
    },
    {
      id: 'edx-lw-a11',
      question: 'Which of the following demonstrates effective sentence variety?',
      options: [
        'Using only long, complex sentences throughout',
        'Using only short, simple sentences throughout',
        'Mixing simple, compound, complex, and minor sentences for different effects',
        'Writing every sentence the same length',
      ],
      correct: 2,
      explanation:
        'Sentence variety means deliberately using different sentence forms for different effects — short for impact, long for atmosphere, minor for emphasis.',
    },
    {
      id: 'edx-lw-a12',
      question: 'When writing a description, what is the "zoom in and out" technique?',
      options: [
        'Starting with a close-up and ending with a wide shot',
        'Alternating between wide-angle descriptions and close-up details',
        'Describing only small objects',
        'Moving physically closer to the subject you are describing',
      ],
      correct: 1,
      explanation:
        'Zooming in and out means alternating between panoramic, wide-angle descriptions and precise, close-up details. This creates visual variety and depth.',
    },
    {
      id: 'edx-lw-a13',
      question: 'What is "in medias res"?',
      options: [
        'A type of metaphor',
        'Starting a narrative in the middle of the action',
        'Writing in the present tense',
        'A technique for ending stories',
      ],
      correct: 1,
      explanation:
        'In medias res ("in the middle of things") means opening your narrative mid-action, then providing context. It creates immediate engagement and intrigue.',
    },
    {
      id: 'edx-lw-a14',
      question: 'How long should you spend on the writing section of each paper?',
      options: ['30 minutes', '40 minutes', '50-55 minutes', '1 hour 15 minutes'],
      correct: 2,
      explanation:
        'With 40 marks for reading and 40 for writing in a 1h 55m paper, you should spend approximately 50-55 minutes on writing (including planning and checking).',
    },
    {
      id: 'edx-lw-a15',
      question: 'Why is planning your ending first recommended for creative writing?',
      options: [
        'The ending is worth the most marks',
        'It prevents rambling and ensures your writing has a controlled, purposeful structure',
        'Edexcel requires you to submit your plan',
        'The examiner only reads the ending',
      ],
      correct: 1,
      explanation:
        'Knowing your destination prevents aimless writing. A planned ending ensures your narrative or description has clear direction and a satisfying conclusion.',
    },
    {
      id: 'edx-lw-a16',
      question: 'A task asks you to write a speech to your headteacher. What register should you use?',
      options: [
        'Highly informal — slang and abbreviations',
        'Semi-formal — respectful but passionate, with rhetorical techniques',
        'Completely impersonal — like a scientific report',
        'Poetic — using rhyme and verse',
      ],
      correct: 1,
      explanation:
        'A speech to a headteacher requires semi-formal register: respectful and measured, but with the passion and rhetorical devices expected of a speech.',
    },
    {
      id: 'edx-lw-a17',
      question: 'What is the recommended word count for a writing response?',
      options: [
        '100-200 words',
        '200-300 words',
        '400-600 words',
        '800-1000 words',
      ],
      correct: 2,
      explanation:
        '400-600 words of high-quality writing is the ideal range. Quality always trumps quantity — a concise, polished response outscores a long, rambling one.',
    },
    {
      id: 'edx-lw-a18',
      question: 'Which of the following is a cliché to avoid in creative writing?',
      options: [
        '"She folded the letter along its original creases"',
        '"It was a dark and stormy night"',
        '"The ticket stub held on like a small, paper ghost"',
        '"Time had become unreliable"',
      ],
      correct: 1,
      explanation:
        '"It was a dark and stormy night" is one of the most well-known clichés in English. Examiners reward original, fresh writing — not stock phrases.',
    },
    {
      id: 'edx-lw-a19',
      question: 'What should you do if you have only 5 minutes left and your writing is incomplete?',
      options: [
        'Stop writing immediately',
        'Keep writing without stopping until the exam ends',
        'Finish your current paragraph quickly and write a strong concluding sentence',
        'Cross out what you have written and start again',
      ],
      correct: 2,
      explanation:
        'A shorter, well-finished response scores better than a longer, unfinished one. Finish your current paragraph and write a clear conclusion — this demonstrates control.',
    },
    {
      id: 'edx-lw-a20',
      question: 'Across both Edexcel papers, what is the total number of marks available for writing?',
      options: ['40 marks', '60 marks', '80 marks', '160 marks'],
      correct: 2,
      explanation:
        'Each paper has a 40-mark writing section (24 AO5 + 16 AO6), so across both papers the total is 80 marks for writing.',
    },
  ],
};

export { edexcelGcseLangReading, edexcelGcseLangWriting };
export default [edexcelGcseLangReading, edexcelGcseLangWriting];
