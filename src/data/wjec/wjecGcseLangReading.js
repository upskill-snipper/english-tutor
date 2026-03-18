// WJEC Eduqas GCSE English Language — Reading (Components 1 & 2)
// All content is WJEC Eduqas GCSE-specific — NOT AQA, NOT Edexcel, NOT OCR

const wjecGcseLangReading = {
  id: 'wjec-gcse-lang-reading',
  title: 'WJEC Eduqas GCSE Language: Reading',
  subtitle: 'Master the reading sections of both Component 1 and Component 2 for WJEC Eduqas English Language.',
  tier: 'GCSE',
  board: 'WJEC',
  specCode: 'Eduqas',
  price: 49,
  duration: '6-8 hours',
  level: 'GCSE (Years 10-11)',
  description: 'Complete preparation for the reading sections of WJEC Eduqas GCSE English Language. Component 1 tests reading of 20th-century literary prose; Component 2 tests reading of 19th-century and 21st-century non-fiction. Learn how to tackle every question type and maximise your marks across both papers.',
  color: '#ea580c',
  moduleList: [
    {
      id: 'wjec-lr-m1',
      title: 'Component 1: Reading 20th-Century Fiction',
      duration: '35 mins',
      content: `<h2>Component 1 Section A: 20th-Century Literary Prose</h2>
<p>Component 1 is titled <strong>"20th Century Literature Reading and Creative Prose Writing."</strong> The entire paper lasts <strong>1 hour 45 minutes</strong> and is worth 40% of your GCSE. Section A (Reading) is worth <strong>40 marks</strong> and uses a single extract from a 20th-century literary prose text.</p>

<div class="key-term"><strong>Key Term: 20th-Century Literary Prose</strong> — Fiction written between 1900 and 1999. The extract will be from a novel or short story. It is always unseen — you will not have studied it before. Expect writers such as George Orwell, Harper Lee, Kazuo Ishiguro, or similar.</div>

<h3>The Paper Structure</h3>
<p>You receive <strong>one extract</strong> of roughly 60-80 lines. There are <strong>5 questions</strong> in Section A, structured in a "ladder" from simple retrieval to complex evaluation:</p>
<ul>
<li><strong>A1</strong> — Retrieval/list (5 marks)</li>
<li><strong>A2</strong> — Inference from a specific section (5 marks)</li>
<li><strong>A3</strong> — Language analysis on a given range of lines (10 marks)</li>
<li><strong>A4</strong> — Structural analysis across the whole extract (10 marks)</li>
<li><strong>A5</strong> — Evaluation with a critical statement (10 marks)</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The five questions follow a clear hierarchy. A1 and A2 are lower-tariff "access" questions that you should answer quickly and accurately. Save most of your time for A3, A4, and A5, which are each worth 10 marks and require detailed analytical writing.</div>

<h3>Timing Guide for Section A</h3>
<p>You should spend roughly <strong>1 hour</strong> on Section A (including reading time), leaving 45 minutes for Section B (creative writing). A sensible split:</p>
<ul>
<li>A1: 5 minutes</li>
<li>A2: 5 minutes</li>
<li>A3: 15 minutes</li>
<li>A4: 15 minutes</li>
<li>A5: 15 minutes</li>
<li>Reading the extract: 5 minutes</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Students spend too long on A1 and A2 (10 marks combined) and then rush A3-A5 (30 marks combined). The higher-mark questions demand sustained, detailed responses — protect your time for them.</div>

<div class="text-extract">"Read the passage below, which is an extract from a 20th-century novel. Answer all the questions that follow."<div class="source">Standard rubric from WJEC Eduqas Component 1</div></div>`,
      quiz: [
        { id: 'wjec-lr-m1-q1', question: 'How long is the Component 1 exam in total?', options: ['1 hour 30 minutes', '1 hour 45 minutes', '2 hours', '2 hours 30 minutes'], correct: 1, explanation: 'Component 1 is 1 hour 45 minutes. Section A (reading) should take about 1 hour, leaving 45 minutes for Section B (creative writing).' },
        { id: 'wjec-lr-m1-q2', question: 'How many marks is Section A (Reading) worth on Component 1?', options: ['20 marks', '30 marks', '40 marks', '50 marks'], correct: 2, explanation: 'Section A is worth 40 marks. There are 5 questions totalling 40 marks across the reading section.' },
        { id: 'wjec-lr-m1-q3', question: 'What type of text is used in Component 1?', options: ['19th-century non-fiction', '21st-century journalism', '20th-century literary prose', 'Poetry from any era'], correct: 2, explanation: 'Component 1 uses a single extract from 20th-century literary prose — a novel or short story written between 1900 and 1999.' },
        { id: 'wjec-lr-m1-q4', question: 'How many questions are there in Component 1 Section A?', options: ['3', '4', '5', '6'], correct: 2, explanation: 'There are 5 questions (A1-A5) forming a ladder from retrieval to evaluation, totalling 40 marks.' },
      ],
    },
    {
      id: 'wjec-lr-m2',
      title: 'Component 1: Language Analysis of Fiction',
      duration: '40 mins',
      content: `<h2>A3: How Does the Writer Use Language?</h2>
<p>Question A3 is worth <strong>10 marks</strong> and asks you to analyse how the writer uses language to create effects within a specified range of lines. This is your chance to show close reading skills by examining word choices, imagery, and literary techniques.</p>

<div class="key-term"><strong>Key Term: Language Analysis (AO2)</strong> — The ability to explain how writers use language and literary techniques to create meaning and effects for the reader. You must identify a device, quote it, and analyse its impact — not simply name it.</div>

<h3>What the Question Looks Like</h3>
<div class="text-extract">"Look at lines 15-28. How does the writer use language to describe the atmosphere of the house? You should comment on the writer's choice of words, phrases and language features."<div class="source">Typical A3 question from WJEC Eduqas Component 1</div></div>

<h3>Building a Strong Analytical Paragraph</h3>
<p>Use the <strong>Point-Evidence-Explain-Effect</strong> (PEEE) structure for each paragraph:</p>
<ul>
<li><strong>Point:</strong> Identify the technique or language choice</li>
<li><strong>Evidence:</strong> Embed a short quotation from the specified lines</li>
<li><strong>Explain:</strong> Analyse how the technique works</li>
<li><strong>Effect:</strong> Explore the impact on the reader</li>
</ul>

<div class="model-answer"><strong>Model Answer (Extract):</strong> The writer uses the simile "the walls leaned inwards like tired old men" to personify the house as something exhausted and decaying. The verb "leaned" suggests instability, as though the building could collapse at any moment, while "tired old men" creates connotations of frailty and age. This makes the reader feel uneasy, as the house itself seems to lack the strength to stand — mirroring the protagonist's own fragility.</div>

<h3>Key Language Features to Look For</h3>
<ul>
<li>Metaphor, simile, and personification</li>
<li>Semantic fields (groups of related words)</li>
<li>Sensory language (sight, sound, touch, taste, smell)</li>
<li>Verb choices — dynamic vs stative, active vs passive</li>
<li>Adjectives and adverbs that build tone</li>
<li>Repetition and patterning</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Quality over quantity. Three well-developed PEEE paragraphs will score higher than six shallow paragraphs that merely spot techniques. The examiner wants to see you explore the effect on the reader in depth.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> "Feature spotting" — identifying a technique without explaining its effect. Writing "the writer uses a metaphor" earns almost nothing. You must explain WHY that metaphor creates a particular feeling, image, or response in the reader.</div>`,
      quiz: [
        { id: 'wjec-lr-m2-q1', question: 'How many marks is question A3 worth?', options: ['5 marks', '10 marks', '15 marks', '20 marks'], correct: 1, explanation: 'A3 is worth 10 marks and focuses on language analysis within a specified range of lines.' },
        { id: 'wjec-lr-m2-q2', question: 'What does the "Effect" in PEEE refer to?', options: ['The effect on the plot', 'The effect the technique has on the reader', 'The effect on other characters', 'The special effect used in film'], correct: 1, explanation: 'The Effect step means exploring how the language technique makes the reader think, feel, or respond — this is what earns the highest marks.' },
        { id: 'wjec-lr-m2-q3', question: 'What is "feature spotting" and why should you avoid it?', options: ['Identifying and analysing techniques in depth', 'Naming a technique without explaining its effect', 'Using too many quotations', 'Writing about structure instead of language'], correct: 1, explanation: 'Feature spotting means naming a technique (e.g. "the writer uses alliteration") without explaining the effect it creates. This earns very few marks because the examiner wants analysis, not identification.' },
        { id: 'wjec-lr-m2-q4', question: 'Which assessment objective does language analysis primarily address?', options: ['AO1', 'AO2', 'AO3', 'AO4'], correct: 1, explanation: 'Language analysis is assessed under AO2 — understanding how writers use linguistic and structural devices to achieve their effects.' },
      ],
    },
    {
      id: 'wjec-lr-m3',
      title: 'Component 1: Evaluating the Writer',
      duration: '35 mins',
      content: `<h2>A4 and A5: Structure and Evaluation</h2>
<p>The final two reading questions on Component 1 each carry <strong>10 marks</strong>. A4 tests your ability to analyse structural choices across the whole extract, while A5 asks you to evaluate the text in response to a critical statement.</p>

<div class="key-term"><strong>Key Term: Structural Analysis (A4)</strong> — Examining how the writer has organised the text at a whole-text level: openings, shifts in focus, changes of pace, narrative perspective, chronology, and how the ending relates to the beginning.</div>

<h3>Question A4: Structure</h3>
<div class="text-extract">"How does the writer make these lines interesting and engaging for the reader? You should write about the structure of the extract, including the beginning, development and ending."<div class="source">Typical A4 question from WJEC Eduqas Component 1</div></div>

<p>To answer A4 effectively, think about the text in three sections:</p>
<ul>
<li><strong>Opening:</strong> How does the writer hook the reader? Is it in medias res, a description, dialogue?</li>
<li><strong>Development:</strong> How does the focus shift? Does tension build, or does the tone change?</li>
<li><strong>Ending:</strong> Is there a climax, a twist, a resolution, or an ambiguous close?</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> A4 rewards you for discussing how the text moves from beginning to end. Use discourse markers like "Initially," "As the extract develops," and "By the end" to show you are tracking structural progression rather than just analysing isolated moments.</div>

<h3>Question A5: Evaluation</h3>
<p>A5 gives you a statement from a reader or critic and asks you to evaluate the text in light of it. You must argue whether you agree or disagree, using evidence from the text.</p>

<div class="text-extract">"A student said: 'The writer makes you feel sympathy for the main character throughout the whole extract.' To what extent do you agree? You should write about the text as a whole, using relevant examples and quotations."<div class="source">Typical A5 question from WJEC Eduqas Component 1</div></div>

<div class="model-answer"><strong>Model Approach:</strong> The strongest responses partially agree with the statement: "While the writer does create sympathy in the opening through the character's isolation — 'she sat alone, the silence pressing' — the ending complicates this by revealing her deliberate cruelty towards her neighbour. The reader's sympathy shifts to discomfort, suggesting the writer's intention is more nuanced than simple sympathy." This shows the evaluative skill of weighing up competing interpretations.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Simply agreeing with the A5 statement and listing evidence. The best responses show a balanced, nuanced view — partially agreeing but also challenging the statement. This demonstrates genuine evaluation rather than comprehension.</div>`,
      quiz: [
        { id: 'wjec-lr-m3-q1', question: 'What does question A4 primarily ask you to analyse?', options: ['Language features', 'The structure of the extract', 'The writer\'s biography', 'Spelling and grammar'], correct: 1, explanation: 'A4 focuses on structural choices — how the writer has organised the text, including openings, shifts, development, and endings.' },
        { id: 'wjec-lr-m3-q2', question: 'What approach scores highest on question A5?', options: ['Simply agreeing with the statement', 'Ignoring the statement and writing freely', 'A balanced, nuanced response that partially agrees and partially challenges', 'Disagreeing completely with no evidence'], correct: 2, explanation: 'The best A5 answers are balanced and evaluative — they weigh up the statement, partially agree, and offer counter-arguments with evidence.' },
        { id: 'wjec-lr-m3-q3', question: 'How many marks are A4 and A5 worth combined?', options: ['10 marks', '15 marks', '20 marks', '30 marks'], correct: 2, explanation: 'A4 is 10 marks and A5 is 10 marks, totalling 20 marks — half of the entire Section A reading marks.' },
        { id: 'wjec-lr-m3-q4', question: 'When analysing structure in A4, which three sections should you address?', options: ['Characters, setting, and theme', 'Opening, development, and ending', 'Past, present, and future', 'First paragraph, middle paragraph, last paragraph only'], correct: 1, explanation: 'You should discuss how the text opens, how it develops (shifts in focus, pace, tone), and how it ends — tracking the whole-text progression.' },
      ],
    },
    {
      id: 'wjec-lr-m4',
      title: 'Component 2: Reading 19th-Century Non-Fiction',
      duration: '35 mins',
      content: `<h2>Component 2 Section A: 19th-Century and 21st-Century Non-Fiction</h2>
<p>Component 2 is titled <strong>"19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing."</strong> The full paper lasts <strong>2 hours</strong> and is worth 60% of your GCSE. Section A (Reading) is worth <strong>40 marks</strong> and uses <strong>two texts</strong> — one from the 19th century and one from the 21st century.</p>

<div class="key-term"><strong>Key Term: 19th-Century Non-Fiction</strong> — Texts written between 1800 and 1899. These could be newspaper articles, diary entries, letters, speeches, travel accounts, or essays. The language will feel more formal and archaic than modern texts.</div>

<h3>Component 2 Structure</h3>
<p>Section A has <strong>6 questions</strong> worth 40 marks total:</p>
<ul>
<li><strong>A1</strong> — Retrieval from Text 1, the 21st-century text (2 marks)</li>
<li><strong>A2</strong> — Summary/inference from Text 1 (4 marks)</li>
<li><strong>A3</strong> — Language analysis on Text 1 (10 marks)</li>
<li><strong>A4</strong> — Retrieval from Text 2, the 19th-century text (2 marks)</li>
<li><strong>A5</strong> — Inference/interpretation from Text 2 (4 marks)</li>
<li><strong>A6</strong> — Comparison of both texts (10 marks)</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Do not be intimidated by 19th-century language. The vocabulary may look different, but the underlying ideas — travel, social issues, inequality, adventure — are relatable. Read slowly on first pass and annotate words you recognise to build understanding.</div>

<h3>Tackling 19th-Century Vocabulary</h3>
<p>Common 19th-century features you will encounter:</p>
<ul>
<li><strong>Formal register:</strong> "It is my earnest belief that..." instead of "I think..."</li>
<li><strong>Complex sentence structures:</strong> Long sentences with multiple clauses</li>
<li><strong>Archaic vocabulary:</strong> "countenance" (face), "hitherto" (until now), "forthwith" (immediately)</li>
<li><strong>Direct address:</strong> Writers often address "the reader" or use rhetorical questions</li>
</ul>

<div class="text-extract">"I arrived at the port with no small degree of trepidation; the vessel before me, though outwardly sound, bore the scars of many a tempestuous voyage."<div class="source">Example of 19th-century travel writing style</div></div>

<div class="common-mistake"><strong>Common Mistake:</strong> Skipping over unfamiliar 19th-century words and losing the meaning of the passage. Use context clues — the words around an unfamiliar term usually tell you what it means. For example, "trepidation" alongside "no small degree" suggests a significant feeling, and the context of a voyage suggests anxiety or fear.</div>`,
      quiz: [
        { id: 'wjec-lr-m4-q1', question: 'How long is the Component 2 exam?', options: ['1 hour 30 minutes', '1 hour 45 minutes', '2 hours', '2 hours 30 minutes'], correct: 2, explanation: 'Component 2 is 2 hours long, worth 60% of your GCSE. Section A (reading) and Section B (writing) share this time.' },
        { id: 'wjec-lr-m4-q2', question: 'How many texts are used in Component 2 Section A?', options: ['One', 'Two', 'Three', 'Four'], correct: 1, explanation: 'Component 2 uses two texts — one from the 19th century and one from the 21st century, linked by theme.' },
        { id: 'wjec-lr-m4-q3', question: 'How many questions are there in Component 2 Section A?', options: ['4', '5', '6', '7'], correct: 2, explanation: 'There are 6 questions (A1-A6) totalling 40 marks, with questions split across both texts and a final comparison.' },
        { id: 'wjec-lr-m4-q4', question: 'What does "trepidation" mean in 19th-century writing?', options: ['Excitement', 'Boredom', 'Fear or anxiety', 'Confidence'], correct: 2, explanation: 'Trepidation means fear or anxiety. In 19th-century texts, using context clues to decode archaic vocabulary is an essential skill.' },
      ],
    },
    {
      id: 'wjec-lr-m5',
      title: 'Component 2: Reading 21st-Century Non-Fiction',
      duration: '30 mins',
      content: `<h2>The 21st-Century Text: Questions A1-A3</h2>
<p>The first three questions on Component 2 target <strong>Text 1</strong>, which is always a 21st-century non-fiction text. This could be a newspaper article, a blog post, a magazine feature, a speech transcript, a travel piece, or a review. The language will be contemporary and accessible.</p>

<div class="key-term"><strong>Key Term: 21st-Century Non-Fiction</strong> — Texts written from 2000 onwards for real-world purposes: to inform, argue, persuade, advise, or entertain. These are the kind of texts you encounter in everyday life — opinion columns, feature articles, charity appeals, and more.</div>

<h3>A1: Retrieval (2 marks)</h3>
<p>A straightforward list question: "List five things you learn about..." from a specified section. Simply identify facts from the text — no analysis needed.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> For A1, use short, factual statements. Do not waste time writing in full sentences or adding analysis. Each correct point earns 1 mark, and you only need to find the information in the text.</div>

<h3>A2: Summary/Inference (4 marks)</h3>
<p>This question asks you to explain what you understand about a topic based on the text. You need to make <strong>inferences</strong> — reading between the lines — rather than just retrieving facts.</p>

<div class="key-term"><strong>Key Term: Inference</strong> — Drawing conclusions from what is implied rather than directly stated. If a writer describes someone "drumming their fingers on the table and glancing at the clock," you can infer they are impatient, even though the word "impatient" is never used.</div>

<h3>A3: Language Analysis (10 marks)</h3>
<p>The highest-value question on the 21st-century text. It asks how the writer uses language to achieve a specific effect — for example, to persuade, to create humour, or to convey frustration.</p>

<div class="model-answer"><strong>Model Answer (Extract):</strong> The writer uses the hyperbolic phrase "the world's most pointless invention" to mock the product with deliberate exaggeration. The superlative "most pointless" leaves no room for debate, positioning the reader to share the writer's contempt. This creates a conspiratorial tone — as though the writer and reader are united in their ridicule — which reinforces the article's persuasive purpose.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating the 21st-century text as less important because the language feels "easy." While the vocabulary is more accessible, A3 still demands sophisticated analysis of how language creates effects. Do not settle for surface-level responses.</div>`,
      quiz: [
        { id: 'wjec-lr-m5-q1', question: 'Which text do questions A1-A3 target on Component 2?', options: ['The 19th-century text', 'The 21st-century text', 'Both texts', 'A poetry text'], correct: 1, explanation: 'A1-A3 all target Text 1, which is the 21st-century non-fiction text.' },
        { id: 'wjec-lr-m5-q2', question: 'How many marks is the A1 retrieval question worth?', options: ['1 mark', '2 marks', '5 marks', '10 marks'], correct: 1, explanation: 'A1 is worth 2 marks. It is a simple retrieval question asking you to list facts from the text.' },
        { id: 'wjec-lr-m5-q3', question: 'What is the difference between retrieval and inference?', options: ['They are the same thing', 'Retrieval finds stated facts; inference reads between the lines', 'Retrieval is harder than inference', 'Inference only applies to fiction'], correct: 1, explanation: 'Retrieval means finding facts directly stated in the text. Inference means drawing conclusions from what is implied — reading between the lines to understand deeper meaning.' },
        { id: 'wjec-lr-m5-q4', question: 'How many marks is A3 (language analysis) worth on the 21st-century text?', options: ['4 marks', '5 marks', '10 marks', '15 marks'], correct: 2, explanation: 'A3 is worth 10 marks — the highest-value question on the 21st-century text, requiring detailed analysis of language effects.' },
      ],
    },
    {
      id: 'wjec-lr-m6',
      title: 'Component 2: Comparing Non-Fiction Texts',
      duration: '40 mins',
      content: `<h2>A6: The Comparison Question (10 marks)</h2>
<p>Question A6 is the final and most challenging reading question on Component 2. It asks you to <strong>compare how both writers convey their ideas and perspectives</strong> on a shared theme. Both the 19th-century and 21st-century texts must be discussed, and you must compare methods as well as content.</p>

<div class="key-term"><strong>Key Term: Synthesis and Comparison</strong> — Bringing together ideas from two texts to explore similarities and differences. Strong comparison goes beyond content ("both writers discuss poverty") to examine methods ("Writer A uses statistics to shock, while Writer B uses personal anecdote to create empathy").</div>

<h3>What the Question Looks Like</h3>
<div class="text-extract">"Both texts are about travel to unfamiliar places. Compare the following: the writers' attitudes to the places they visit; how they convey their attitudes. You must use the text to support your comments and make it clear which text you are referring to."<div class="source">Typical A6 question from WJEC Eduqas Component 2</div></div>

<h3>Structuring Your Comparison</h3>
<p>Use an <strong>alternating method</strong> — discuss both texts in every paragraph:</p>
<ul>
<li><strong>Paragraph 1:</strong> Both writers present [aspect], but they differ in their approach. Writer A uses... whereas Writer B...</li>
<li><strong>Paragraph 2:</strong> However, the writers diverge when it comes to [second aspect]. The 19th-century writer... while the 21st-century writer...</li>
<li><strong>Paragraph 3:</strong> A significant contrast is in tone and register. Text 1 adopts... but Text 2 employs...</li>
</ul>

<div class="model-answer"><strong>Model Opening:</strong> Both writers convey a sense of wonder at the landscapes they encounter, but their methods reflect their historical contexts. The 21st-century journalist uses colloquial, energetic language — "absolutely jaw-dropping" — to convey immediate, personal excitement, appealing to a modern audience accustomed to informal, relatable writing. In contrast, the 19th-century explorer adopts a measured, formal tone, describing the scenery as possessing "a grandeur that surpasses all description," which elevates the landscape to the sublime and reflects the Romantic values of the period.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always acknowledge the historical context when comparing. The 19th-century text was written in a different era with different conventions — formal register, longer sentences, different audience expectations. Noting these contextual differences shows sophisticated understanding.</div>

<h3>Comparative Connectives</h3>
<p>Weave these throughout your answer: <em>similarly, in contrast, whereas, conversely, on the other hand, equally, however, while, unlike, both writers, by comparison</em>.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about Text 1 for one half of the answer and Text 2 for the other half. This is NOT comparison — it is two separate analyses. You must integrate both texts within each paragraph to demonstrate genuine comparative skill.</div>`,
      quiz: [
        { id: 'wjec-lr-m6-q1', question: 'How many marks is the A6 comparison question worth?', options: ['5 marks', '8 marks', '10 marks', '15 marks'], correct: 2, explanation: 'A6 is worth 10 marks and is the most challenging reading question on Component 2, requiring comparison of both texts.' },
        { id: 'wjec-lr-m6-q2', question: 'What is the best structure for a comparison answer?', options: ['Write about Text 1 first, then Text 2', 'Alternate between both texts in every paragraph', 'Only write about the text you find easiest', 'Summarise both texts without analysis'], correct: 1, explanation: 'The alternating method — discussing both texts within every paragraph — demonstrates genuine comparison and earns the highest marks.' },
        { id: 'wjec-lr-m6-q3', question: 'Why should you mention historical context in your comparison?', options: ['It is not relevant', 'It shows you know the dates of the texts', 'It demonstrates sophisticated understanding of how context shapes writing choices', 'The mark scheme requires a date for every quotation'], correct: 2, explanation: 'Acknowledging that the 19th-century text was shaped by different conventions, audiences, and values shows evaluative and contextual understanding — a hallmark of top-band responses.' },
        { id: 'wjec-lr-m6-q4', question: 'What must you compare beyond the content of the texts?', options: ['The length of each text', 'The writers\' methods — language, tone, and structure', 'The spelling differences', 'The font used in each text'], correct: 1, explanation: 'Strong comparison examines methods (how writers convey their ideas through language, tone, and structure) as well as content (what they write about).' },
      ],
    },
    {
      id: 'wjec-lr-m7',
      title: 'Exam Strategy for Both Components',
      duration: '25 mins',
      content: `<h2>Maximising Your Reading Marks</h2>
<p>The reading sections of Components 1 and 2 are worth <strong>80 marks combined</strong> (40 + 40). With the right strategy, you can significantly improve your grade by managing your time, structuring your answers, and avoiding common pitfalls.</p>

<div class="key-term"><strong>Key Term: Mark-per-Minute Ratio</strong> — A timing strategy where you allocate roughly 1 minute per mark. A 10-mark question should take about 10-12 minutes. This prevents you from over-investing in low-value questions and under-investing in high-value ones.</div>

<h3>Component 1 Timing Recap</h3>
<ul>
<li>Total time: 1 hour 45 minutes (Section A reading + Section B writing)</li>
<li>Section A target: ~60 minutes (including 5 minutes reading)</li>
<li>Low-tariff questions (A1, A2): 10 minutes combined</li>
<li>High-tariff questions (A3, A4, A5): 15 minutes each</li>
</ul>

<h3>Component 2 Timing Recap</h3>
<ul>
<li>Total time: 2 hours (Section A reading + Section B writing)</li>
<li>Section A target: ~60 minutes (including 10 minutes reading both texts)</li>
<li>Low-tariff questions (A1, A2, A4, A5): 3-5 minutes each</li>
<li>High-tariff questions (A3, A6): 15 minutes each</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always read the extract(s) before looking at the questions. On Component 1, spend 5 minutes reading and annotating. On Component 2, spend 10 minutes reading both texts and noting initial comparisons. This investment pays off in faster, more confident answers.</div>

<h3>The "Answer the Question" Rule</h3>
<p>The single most common reason students lose marks is failing to answer the specific question asked. If A3 says "how does the writer create a sense of danger," every point you make must link back to danger. If A5 gives you a statement about sympathy, your evaluation must address sympathy. Relevance is everything.</p>

<div class="model-answer"><strong>Exam Checklist Before Submitting:</strong>
<br>1. Have I answered every question?
<br>2. Have I spent proportional time on high-mark questions?
<br>3. For analysis questions — have I used quotations and explained effects?
<br>4. For the comparison — have I discussed both texts in every paragraph?
<br>5. For the evaluation (A5) — have I given a balanced response to the statement?</div>

<h3>Final Revision Tips</h3>
<ul>
<li>Practise with past papers under timed conditions — WJEC Eduqas papers and SAMs are available online</li>
<li>Build a toolkit of analytical vocabulary: connotation, juxtaposition, semantic field, tone, register, syntax</li>
<li>Read widely — 19th-century non-fiction (Dickens's journalism, Brontë letters, travel accounts) and 21st-century articles</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Not leaving enough time for Section B (writing) because you overspent on reading. The writing section is worth the same as the reading section on both papers. Stick to your timing plan — even if you have not finished a reading answer, move on.</div>`,
      quiz: [
        { id: 'wjec-lr-m7-q1', question: 'What is the "mark-per-minute" strategy?', options: ['Write one word per mark', 'Allocate roughly 1 minute per mark available', 'Spend equal time on every question', 'Skip low-mark questions entirely'], correct: 1, explanation: 'The mark-per-minute strategy means spending roughly 1 minute per mark — so a 10-mark question gets about 10-12 minutes. This ensures proportional time allocation.' },
        { id: 'wjec-lr-m7-q2', question: 'How many marks are the reading sections worth across both components combined?', options: ['40 marks', '60 marks', '80 marks', '100 marks'], correct: 2, explanation: 'Component 1 Section A is 40 marks and Component 2 Section A is 40 marks, totalling 80 reading marks across both papers.' },
        { id: 'wjec-lr-m7-q3', question: 'What is the most common reason students lose marks?', options: ['Poor handwriting', 'Not answering the specific question asked', 'Using too many quotations', 'Writing too much'], correct: 1, explanation: 'The most common reason is failing to answer the specific question. Every point must be relevant to what the question actually asks — relevance is everything.' },
        { id: 'wjec-lr-m7-q4', question: 'Should you read the extract(s) before looking at the questions?', options: ['No — go straight to the questions', 'Yes — spend 5-10 minutes reading and annotating first', 'Only on Component 2', 'Only if you have spare time'], correct: 1, explanation: 'Always read and annotate the extract(s) before looking at questions. This initial investment (5 minutes for C1, 10 minutes for C2) leads to faster and more confident answers.' },
      ],
    },
  ],
  assessmentQuestions: [
    { id: 'wjec-lr-a1', question: 'What percentage of the GCSE does Component 1 represent?', options: ['30%', '40%', '50%', '60%'], correct: 1, explanation: 'Component 1 is worth 40% of the GCSE. Component 2 is worth the remaining 60%.' },
    { id: 'wjec-lr-a2', question: 'What type of text is used in Component 1 Section A?', options: ['19th-century poetry', '20th-century literary prose', '21st-century journalism', 'A Shakespeare extract'], correct: 1, explanation: 'Component 1 uses a single unseen extract from a 20th-century novel or short story (literary prose written 1900-1999).' },
    { id: 'wjec-lr-a3', question: 'How many marks is Component 1 Section A worth?', options: ['20 marks', '30 marks', '40 marks', '50 marks'], correct: 2, explanation: 'Section A of Component 1 is worth 40 marks across 5 questions (A1-A5).' },
    { id: 'wjec-lr-a4', question: 'How many texts appear in Component 2 Section A?', options: ['One', 'Two', 'Three', 'Four'], correct: 1, explanation: 'Component 2 Section A uses two texts — one from the 19th century and one from the 21st century, linked by theme.' },
    { id: 'wjec-lr-a5', question: 'What percentage of the GCSE does Component 2 represent?', options: ['40%', '50%', '60%', '70%'], correct: 2, explanation: 'Component 2 is worth 60% of the GCSE — the larger of the two papers.' },
    { id: 'wjec-lr-a6', question: 'Which question on Component 1 asks you to evaluate a critical statement?', options: ['A1', 'A3', 'A4', 'A5'], correct: 3, explanation: 'A5 is the evaluation question. It gives you a statement about the text and asks "to what extent do you agree," requiring a balanced, evidence-based response.' },
    { id: 'wjec-lr-a7', question: 'What is the best approach for the A6 comparison question?', options: ['Write about each text separately', 'Use an alternating structure comparing both texts in every paragraph', 'Only discuss similarities', 'Write a summary of both texts'], correct: 1, explanation: 'The alternating method — comparing both texts within each paragraph — demonstrates genuine comparative skill and is rewarded in the highest mark bands.' },
    { id: 'wjec-lr-a8', question: 'How long is the Component 2 exam?', options: ['1 hour 30 minutes', '1 hour 45 minutes', '2 hours', '2 hours 30 minutes'], correct: 2, explanation: 'Component 2 is 2 hours long, covering both Section A (reading) and Section B (transactional/persuasive writing).' },
    { id: 'wjec-lr-a9', question: 'What does AO2 assess in the context of reading?', options: ['Comprehension and retrieval of facts', 'Analysis of how writers use language and structure to create effects', 'Comparison between texts', 'Accuracy of spelling and grammar'], correct: 1, explanation: 'AO2 assesses your ability to analyse how writers use linguistic and structural devices to achieve their effects — the core skill tested in language analysis questions.' },
    { id: 'wjec-lr-a10', question: 'What is "feature spotting" and why is it a problem?', options: ['A useful exam technique', 'Naming a technique without explaining its effect — it earns very few marks', 'Spotting the key features of a text for retrieval', 'Highlighting quotations in the text'], correct: 1, explanation: 'Feature spotting means identifying a technique (e.g. "the writer uses a metaphor") without explaining the effect it creates on the reader. It earns minimal marks because examiners reward analysis, not mere identification.' },
    { id: 'wjec-lr-a11', question: 'Which questions on Component 1 are each worth 10 marks?', options: ['A1 and A2', 'A2 and A3', 'A3, A4, and A5', 'A1, A2, A3, A4, and A5'], correct: 2, explanation: 'A3 (language analysis), A4 (structure), and A5 (evaluation) are each worth 10 marks — comprising 30 of the 40 Section A marks.' },
    { id: 'wjec-lr-a12', question: 'What should you do before looking at the questions on either component?', options: ['Start writing immediately', 'Read and annotate the extract(s) first', 'Skip to the highest-mark question', 'Read the mark scheme'], correct: 1, explanation: 'Always read and annotate the extract(s) before tackling questions. Spend 5 minutes on Component 1 and 10 minutes on Component 2 — this leads to more confident, relevant answers.' },
    { id: 'wjec-lr-a13', question: 'How should you handle unfamiliar 19th-century vocabulary?', options: ['Skip the word entirely', 'Make up a definition', 'Use context clues from surrounding words and sentences', 'Only answer questions about the 21st-century text'], correct: 2, explanation: 'Use context clues — the words and phrases surrounding an unfamiliar term usually indicate its meaning. This is an essential skill for tackling 19th-century non-fiction.' },
    { id: 'wjec-lr-a14', question: 'What does the PEEE paragraph structure stand for?', options: ['Plan, Execute, Edit, Evaluate', 'Point, Evidence, Explain, Effect', 'Purpose, Example, Explore, End', 'Predict, Extract, Examine, Extend'], correct: 1, explanation: 'PEEE stands for Point, Evidence, Explain, Effect — a framework for building strong analytical paragraphs in language analysis questions.' },
    { id: 'wjec-lr-a15', question: 'Why is it important to acknowledge historical context in the Component 2 comparison?', options: ['It is not important', 'Because the mark scheme awards marks for dates', 'Because context shapes writing conventions, tone, and audience expectations', 'Because 19th-century texts are always better'], correct: 2, explanation: 'Acknowledging that 19th-century writers operated within different conventions (formal register, different audience expectations) shows sophisticated understanding and is a hallmark of top-band comparison responses.' },
    { id: 'wjec-lr-a16', question: 'How many questions are there in Component 2 Section A?', options: ['4', '5', '6', '7'], correct: 2, explanation: 'Component 2 Section A has 6 questions (A1-A6), with questions split across the 21st-century text, the 19th-century text, and a final comparison.' },
    { id: 'wjec-lr-a17', question: 'What structural features should you discuss in Component 1 question A4?', options: ['Only language features like metaphor', 'Opening, development (shifts in focus/tone), and ending', 'Only the final paragraph', 'The writer\'s use of paragraphs and nothing else'], correct: 1, explanation: 'A4 rewards discussion of whole-text structure: how the text opens, how focus/tone/pace shifts during the development, and how the ending relates to or resolves what came before.' },
    { id: 'wjec-lr-a18', question: 'What is the mark-per-minute timing strategy?', options: ['Write for exactly 1 minute then stop', 'Allocate roughly 1 minute per mark for each question', 'Only answer questions worth 10+ marks', 'Spend the same time on every question'], correct: 1, explanation: 'The mark-per-minute strategy means allocating about 1 minute per mark — so a 10-mark question gets roughly 10-12 minutes. This prevents over-investing in low-value questions.' },
    { id: 'wjec-lr-a19', question: 'What is the total number of reading marks across both components?', options: ['40 marks', '60 marks', '80 marks', '100 marks'], correct: 2, explanation: 'Component 1 Section A is 40 marks and Component 2 Section A is 40 marks, giving 80 reading marks in total across both papers.' },
    { id: 'wjec-lr-a20', question: 'What should the strongest A5 (evaluation) responses demonstrate?', options: ['Complete agreement with the statement', 'Complete disagreement with the statement', 'A balanced, nuanced view that partially agrees and partially challenges the statement', 'A retelling of the plot'], correct: 2, explanation: 'The best A5 responses are balanced and evaluative — they weigh up the given statement, partially agree with evidence, and offer counter-arguments. This shows genuine critical evaluation rather than simple comprehension.' },
  ],
};

export default wjecGcseLangReading;
