// Edexcel IGCSE English Language — Spec A (4EA1), Spec B (4EB1), Revision
// All content is Edexcel IGCSE-specific — NOT AQA, NOT Edexcel GCSE

const edexcelIgcseLangA = {
  id: 'edexcel-igcse-lang-a',
  title: 'Edexcel IGCSE Language: Spec A',
  subtitle: 'Master the 4EA1 specification with anthology-based reading and writing skills.',
  tier: 'IGCSE',
  board: 'Edexcel',
  specCode: '4EA1',
  price: 59,
  duration: '8-10 hours',
  level: 'IGCSE',
  description: 'Complete preparation for Edexcel IGCSE English Language Specification A. Study all 20 anthology texts across Parts 1 and 2, master transactional and imaginative writing, and learn exam technique for both components.',
  color: '#dc2626',
  moduleList: [
    {
      id: 'eia-m1',
      title: 'The Spec A Anthology: Part 1 Non-Fiction',
      duration: '30 mins',
      content: `<h2>Your 10 Non-Fiction Texts</h2>
<p>Specification A is built around the <strong>Pearson Edexcel International GCSE English Anthology</strong>. Part 1 contains 10 non-fiction texts that will appear on Component 1. One of these texts will be printed in your exam alongside an unseen text.</p>

<div class="key-term"><strong>Key Term: Anthology text</strong> — A pre-studied text from the official Pearson anthology. You study all 10, but only ONE appears in your exam. The second text is always unseen.</div>

<h3>The 10 Part 1 Texts</h3>
<ul>
<li><strong>"The Danger of a Single Story"</strong> — Chimamanda Ngozi Adichie (speech about stereotypes)</li>
<li><strong>"A Passage to Africa"</strong> — George Alagiah (memoir of reporting from Somalia)</li>
<li><strong>"The Explorer's Daughter"</strong> — Kari Herbert (travel writing about Inuit whale hunts)</li>
<li><strong>"Explorers, or boys messing about?"</strong> — Steven Morris (newspaper article)</li>
<li><strong>"127 Hours"</strong> — Aron Ralston (autobiography about survival)</li>
<li><strong>"Young and Dyslexic? You've got it going on"</strong> — Benjamin Zephaniah (opinion piece)</li>
<li><strong>"A Game of Polo with a Headless Goat"</strong> — Emma Levine (travel writing)</li>
<li><strong>"Beyond the Sky and Earth"</strong> — Jamie Zeppa (travel memoir from Bhutan)</li>
<li><strong>"H is for Hawk"</strong> — Helen Macdonald (nature memoir)</li>
<li><strong>"Chinese Cinderella"</strong> — Adeline Yen Mah (autobiography about childhood)</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> You do not need to memorise quotations from Part 1 texts — the anthology text is reprinted in your exam. Focus on understanding each writer's purpose, audience, and key techniques so you can analyse efficiently under timed conditions.</div>

<h3>How They Appear in the Exam</h3>
<p>Component 1 Section A gives you <strong>two texts linked by theme</strong>. Text 1 is unseen; Text 2 is from the anthology. Questions 1-3 test Text 1 (the unseen). Question 4 tests Text 2 (the anthology text — language and structure, 12 marks). Question 5 compares both texts (22 marks).</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Students spend too long on Q1-Q3 (11 marks total) and rush Q4-Q5 (34 marks). Allocate your time proportionally — the anthology text and comparison are worth three times more.</div>`,
      quiz: [
        { id: 'eia-m1-q1', question: 'How many non-fiction texts are in Part 1 of the Spec A anthology?', options: ['5', '8', '10', '15'], correct: 2, explanation: 'Part 1 contains 10 non-fiction texts. One will appear in your Component 1 exam alongside an unseen text.' },
        { id: 'eia-m1-q2', question: 'In the Component 1 exam, which text is from the anthology?', options: ['Text 1', 'Text 2', 'Both texts', 'Neither — both are unseen'], correct: 1, explanation: 'Text 1 is always unseen. Text 2 is the anthology text that you have studied in advance.' },
        { id: 'eia-m1-q3', question: 'Which question on Component 1 is worth the most marks?', options: ['Q1 (retrieval)', 'Q3 (describe with quotations)', 'Q4 (language and structure)', 'Q5 (comparison)'], correct: 3, explanation: 'Q5 is worth 22 marks — the most of any single question on Component 1. It requires you to compare both texts.' },
        { id: 'eia-m1-q4', question: 'Do you need to memorise quotations from the Part 1 anthology texts?', options: ['Yes, at least 10 per text', 'Yes, but only key phrases', 'No — the anthology text is reprinted in the exam', 'No — there are no quotation questions'], correct: 2, explanation: 'The anthology text is reprinted in your exam paper, so you do not need to memorise quotations. Focus on understanding techniques and purposes.' },
      ],
    },
    {
      id: 'eia-m2',
      title: 'Component 1 Q1-Q3: Short Reading Questions',
      duration: '25 mins',
      content: `<h2>The Unseen Text Questions</h2>
<p>Questions 1-3 all target <strong>Text 1 (the unseen text)</strong>. They test AO1 — your ability to read, understand, and select information. Together they are worth only 11 marks, so work quickly and precisely.</p>

<h3>Question 1 (2 marks)</h3>
<p>Select two words or phrases from a specified line range. This is pure retrieval — find the exact words the question asks for and copy them.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Q1 should take no more than 2-3 minutes. Read the specified lines, identify what the question asks for, and write the exact words from the text. No analysis needed.</div>

<h3>Question 2 (4 marks)</h3>
<p>Explain the writer's thoughts and feelings <strong>in your own words</strong> from a specified line range. You must paraphrase — do not copy the text.</p>

<div class="key-term"><strong>Key Term: Paraphrase</strong> — Rewriting the writer's ideas in your own words to show you understand them. For example, if the text says "my heart hammered," you could write "the writer felt intense anxiety."</div>

<h3>Question 3 (5 marks)</h3>
<p>Describe or identify specific information with brief quotations. This is a retrieval question but you can support your points with short embedded quotations.</p>

<div class="text-extract">"From lines 25-47, describe the dangers and difficulties of the swim. You may support your points with brief quotations."<div class="source">Example Q3 from Edexcel IGCSE Spec A SAMs</div></div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing long analytical paragraphs for Q1-Q3. These are retrieval questions — keep your answers short and factual. Save your analysis for Q4 and Q5.</div>

<h3>Timing Strategy</h3>
<p>You have <strong>1 hour 30 minutes</strong> for Section A (including reading time). Spend no more than 10 minutes on Q1-Q3 combined, leaving the bulk of your time for Q4 (12 marks) and Q5 (22 marks).</p>`,
      quiz: [
        { id: 'eia-m2-q1', question: 'Which text do Q1-Q3 test on Component 1?', options: ['Text 2 (the anthology text)', 'Text 1 (the unseen text)', 'Both texts', 'A third text'], correct: 1, explanation: 'Q1-Q3 all target Text 1, which is the unseen text. The anthology text is tested in Q4.' },
        { id: 'eia-m2-q2', question: 'How many marks are Q1-Q3 worth in total?', options: ['5 marks', '11 marks', '22 marks', '34 marks'], correct: 1, explanation: 'Q1 is 2 marks, Q2 is 4 marks, Q3 is 5 marks = 11 marks total.' },
        { id: 'eia-m2-q3', question: 'What does Q2 require you to do?', options: ['Copy quotations from the text', 'Explain the writer\'s thoughts and feelings in your own words', 'Analyse language techniques', 'Compare the two texts'], correct: 1, explanation: 'Q2 asks you to paraphrase — explain the writer\'s thoughts and feelings in your own words, not by copying the text.' },
        { id: 'eia-m2-q4', question: 'How long should you spend on Q1-Q3 combined?', options: ['30 minutes', '20 minutes', 'About 10 minutes', '45 minutes'], correct: 2, explanation: 'Q1-Q3 are worth only 11 marks. Spending more than 10 minutes on them takes time away from the higher-value Q4 and Q5.' },
      ],
    },
    {
      id: 'eia-m3',
      title: 'Component 1 Q4: Language & Structure Analysis',
      duration: '40 mins',
      content: `<h2>Analysing the Anthology Text (12 marks)</h2>
<p>Question 4 is the first <strong>higher-tariff</strong> question. It tests AO2 — your ability to analyse how the writer uses <strong>language and structure</strong> to achieve effects. It targets the anthology text (Text 2).</p>

<div class="key-term"><strong>Key Term: AO2 (Assessment Objective 2)</strong> — Understand and analyse how writers use linguistic and structural devices to achieve their effects. This means you must identify techniques AND explain their impact on the reader.</div>

<h3>What the Question Looks Like</h3>
<div class="text-extract">"How does the writer use language and structure to create suspense and tension?"<div class="source">Example Q4 from Edexcel IGCSE Spec A SAMs (on "127 Hours")</div></div>

<h3>The WHAT-HOW-WHY Paragraph</h3>
<p>Every analytical paragraph should follow this structure:</p>
<ul>
<li><strong>WHAT</strong> — Identify the technique or language feature</li>
<li><strong>HOW</strong> — Quote and explain how it works</li>
<li><strong>WHY</strong> — Analyse the effect on the reader</li>
</ul>

<div class="model-answer"><strong>Model Answer (Extract):</strong> Ralston uses the metaphor "the rock and I were <em>wed</em> in this instant" to present his entrapment as something permanent and inescapable. The connotation of marriage suggests a bond that cannot easily be broken, creating a sense of suffocating permanence. The reader feels the horror of being permanently attached to the boulder, which intensifies the tension as escape seems impossible.</div>

<h3>Language vs Structure</h3>
<p>Students often forget the <strong>structure</strong> element. Look for:</p>
<ul>
<li>How the text opens and closes</li>
<li>Shifts in tone, pace, or focus</li>
<li>Short paragraphs or sentences for emphasis</li>
<li>Chronological vs non-chronological organisation</li>
<li>Contrast between sections</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Because this is an anthology text, you should already know its key techniques. Prepare 3-4 strong analytical points for each of the 10 texts so you can write quickly in the exam.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Only analysing language and ignoring structure. The question says "language AND structure" — you must address both to reach the higher mark bands.</div>`,
      quiz: [
        { id: 'eia-m3-q1', question: 'Which assessment objective does Q4 primarily test?', options: ['AO1 (comprehension)', 'AO2 (language and structure analysis)', 'AO3 (comparison)', 'AO4 (writing)'], correct: 1, explanation: 'Q4 tests AO2 — your ability to analyse how writers use language and structure to create effects.' },
        { id: 'eia-m3-q2', question: 'How many marks is Q4 worth?', options: ['5 marks', '8 marks', '12 marks', '22 marks'], correct: 2, explanation: 'Q4 is worth 12 marks. It is the second-highest value question in Section A (after Q5 at 22 marks).' },
        { id: 'eia-m3-q3', question: 'What does the "WHY" in WHAT-HOW-WHY refer to?', options: ['Why the writer wrote the text', 'Why the technique affects the reader', 'Why the text was published', 'Why you chose that quotation'], correct: 1, explanation: 'The WHY step is about analysing the effect on the reader — explaining how the technique makes the reader think, feel, or respond.' },
        { id: 'eia-m3-q4', question: 'Which text does Q4 target?', options: ['Text 1 (the unseen)', 'Text 2 (the anthology)', 'Both texts', 'A new extract'], correct: 1, explanation: 'Q4 analyses Text 2, which is the anthology text. This is the text you have studied in advance.' },
      ],
    },
    {
      id: 'eia-m4',
      title: 'Component 1 Q5: Comparative Analysis',
      duration: '45 mins',
      content: `<h2>The Big Comparison Question (22 marks)</h2>
<p>Question 5 is the <strong>highest-value question</strong> on Component 1. It tests AO3 — your ability to compare how two writers present their ideas and perspectives. You must discuss <strong>both texts</strong> with detailed examples.</p>

<div class="key-term"><strong>Key Term: AO3</strong> — Explore links and connections between writers' ideas and perspectives, as well as how these are conveyed. This means comparing what they say AND how they say it.</div>

<h3>Typical Question Wording</h3>
<div class="text-extract">"Compare how the writers present their ideas and perspectives about their experiences. Support your answer with detailed examples from both texts including brief quotations."<div class="source">Example Q5 from Edexcel IGCSE Spec A SAMs</div></div>

<h3>Structure Your Comparison</h3>
<p>Use an <strong>alternating structure</strong> — discuss both texts in every paragraph:</p>
<ul>
<li><strong>Paragraph 1:</strong> Both writers present [aspect] but in different ways. Writer A... whereas Writer B...</li>
<li><strong>Paragraph 2:</strong> Similarly/In contrast, the writers differ in their approach to [aspect]...</li>
<li><strong>Paragraph 3:</strong> A further point of comparison is...</li>
<li><strong>Paragraph 4:</strong> Finally, the writers' overall perspectives differ because...</li>
</ul>

<div class="model-answer"><strong>Model Opening:</strong> Both writers present extreme physical experiences, but their perspectives differ significantly. Ralston in "127 Hours" conveys a desperate fight for survival through visceral, sensory language, describing his arm as "a foreign object" to distance himself from the horror. In contrast, Armstrong approaches his ice swim with self-deprecating humour, describing himself as looking "like a startled penguin." This contrast highlights how purpose shapes perspective — survival demands gravity, while travel writing can afford levity.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best answers don't just compare content — they compare the writers' methods. Ask: how does each writer's use of language, structure, and tone reflect their purpose and perspective?</div>

<h3>Comparative Connectives</h3>
<p>Use these to weave your comparison together: <em>similarly, in contrast, whereas, on the other hand, conversely, equally, both writers, unlike, however, while</em>.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about Text 1 for half the essay, then Text 2 for the other half. This is NOT comparison — it's two separate analyses. You must compare within each paragraph.</div>`,
      quiz: [
        { id: 'eia-m4-q1', question: 'How many marks is Q5 worth on Component 1?', options: ['12 marks', '16 marks', '22 marks', '30 marks'], correct: 2, explanation: 'Q5 is worth 22 marks — the highest-value question in Section A and nearly half the reading marks.' },
        { id: 'eia-m4-q2', question: 'What is the best structure for a comparison answer?', options: ['Write about Text 1 fully, then Text 2 fully', 'Alternate between both texts in every paragraph', 'Only discuss similarities', 'Write a short paragraph on each text'], correct: 1, explanation: 'An alternating structure — discussing both texts within each paragraph — is the most effective way to demonstrate sustained comparison.' },
        { id: 'eia-m4-q3', question: 'Which assessment objective does Q5 test?', options: ['AO1', 'AO2', 'AO3', 'AO4'], correct: 2, explanation: 'Q5 tests AO3 — exploring links and connections between writers\' ideas and perspectives.' },
        { id: 'eia-m4-q4', question: 'What should you compare beyond content?', options: ['Only the facts in each text', 'The writers\' methods — language, structure, and tone', 'The word count of each text', 'The publication dates'], correct: 1, explanation: 'The best answers compare writers\' methods (how they write) as well as their ideas (what they write about). This shows sophisticated analytical skills.' },
      ],
    },
    {
      id: 'eia-m5',
      title: 'Component 1 Section B: Transactional Writing',
      duration: '40 mins',
      content: `<h2>Writing to Persuade, Argue, or Inform (45 marks)</h2>
<p>Section B of Component 1 tests your <strong>transactional writing</strong> — real-world writing with a clear audience, purpose, and form. You choose <strong>one task from two options</strong>. This is worth 45 marks — half the paper!</p>

<div class="key-term"><strong>Key Term: Transactional writing</strong> — Writing that has a practical, real-world purpose: to argue, persuade, advise, inform, explain, or review. It always has a specific audience and form (article, speech, letter, etc.).</div>

<h3>Permitted Forms</h3>
<ul>
<li><strong>Article</strong> for a magazine or newspaper</li>
<li><strong>Speech</strong> or talk</li>
<li><strong>Letter</strong> (formal)</li>
<li><strong>Guide</strong> or leaflet text</li>
<li><strong>Review</strong></li>
</ul>

<h3>How the Task is Scaffolded</h3>
<p>Edexcel IGCSE provides more scaffolding than other boards:</p>
<ul>
<li>A <strong>statement</strong> to respond to (e.g., "There is no point in travelling when you can see everything on television")</li>
<li><strong>Bullet points</strong> suggesting what to include</li>
<li>A <strong>planning box</strong></li>
</ul>

<div class="text-extract">"Schools and colleges have a duty to ensure their students keep fit." You have been asked to give a speech in which you express your views on this statement.<div class="source">Example from Edexcel IGCSE Spec A SAMs</div></div>

<h3>Mark Breakdown</h3>
<p>AO4 (27 marks): Purpose, audience, form, tone, register, structure, persuasive techniques. AO5 (18 marks): Vocabulary, sentence structures, spelling, punctuation, paragraphing.</p>

<div class="model-answer"><strong>Strong Opening (Speech):</strong> "Ladies and gentlemen, I want you to think about the last time you broke a sweat — and no, I don't mean the panic of checking your exam timetable. Physical fitness isn't a luxury; it's a lifeline. And our schools? They're cutting that lifeline one budget meeting at a time."</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Match your register to your audience. A speech to students can be conversational and use rhetorical questions. A letter to a headteacher must be formal and measured. Getting the register wrong costs significant marks on AO4.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Ignoring the bullet points. They are there to help you structure your response — use them as paragraph prompts.</div>`,
      quiz: [
        { id: 'eia-m5-q1', question: 'How many marks is the transactional writing task worth?', options: ['20 marks', '30 marks', '40 marks', '45 marks'], correct: 3, explanation: 'Section B is worth 45 marks total — 27 for AO4 (content/purpose) and 18 for AO5 (technical accuracy).' },
        { id: 'eia-m5-q2', question: 'Which of these is NOT a permitted form for transactional writing?', options: ['Article', 'Short story', 'Speech', 'Letter'], correct: 1, explanation: 'Short stories are imaginative writing (Component 2), not transactional writing. Component 1 Section B uses articles, speeches, letters, guides, and reviews.' },
        { id: 'eia-m5-q3', question: 'What scaffolding does Edexcel provide for the writing task?', options: ['Nothing — just a blank page', 'A statement, bullet points, and a planning box', 'A full essay plan', 'Model paragraphs to copy'], correct: 1, explanation: 'Edexcel provides a statement to respond to, bullet point suggestions, and a planning box. Use these to structure your answer.' },
        { id: 'eia-m5-q4', question: 'What does AO4 assess in the writing task?', options: ['Spelling and grammar only', 'Purpose, audience, form, tone, and register', 'Creative story techniques', 'Vocabulary length'], correct: 1, explanation: 'AO4 assesses how well you communicate for a specific purpose and audience, adapting your tone, form, and register appropriately.' },
      ],
    },
    {
      id: 'eia-m6',
      title: 'Anthology Part 2: Poetry Analysis',
      duration: '35 mins',
      content: `<h2>The Five Anthology Poems</h2>
<p>Part 2 of the anthology contains five poems that may appear on Component 2. The poem is <strong>printed in your exam</strong>, but you need to know each poem's techniques, themes, and effects in advance to write a strong response quickly.</p>

<h3>The Poems</h3>
<ul>
<li><strong>"Disabled"</strong> — Wilfred Owen: A soldier who lost his limbs in WW1; contrast between past youth and present isolation; bitter tone; irregular form mirrors fractured life</li>
<li><strong>"Out, Out—"</strong> — Robert Frost: A boy dies in a saw accident; narrative poem; title alludes to Macbeth ("Out, out, brief candle"); shockingly matter-of-fact ending</li>
<li><strong>"An Unknown Girl"</strong> — Moniza Alvi: Speaker has henna applied in an Indian market; explores cultural identity and belonging; repeated refrain "an unknown girl"; sensory imagery</li>
<li><strong>"The Bright Lights of Sarajevo"</strong> — Tony Harrison: Life continuing during the Siege of Sarajevo; juxtaposes everyday moments with war; contrast of light and darkness</li>
<li><strong>"Still I Rise"</strong> — Maya Angelou: Defiant poem about overcoming racism and oppression; repetition of "I rise"; triumphant, empowering tone; rhetorical questions challenge the reader</li>
</ul>

<div class="key-term"><strong>Key Term: Refrain</strong> — A repeated line or phrase that returns throughout a poem, creating rhythm and emphasis. In "An Unknown Girl," the refrain "an unknown girl is hennaing my hand" anchors the speaker's experience.</div>

<div class="text-extract">"You may shoot me with your words,<br>You may cut me with your eyes,<br>You may kill me with your hatefulness,<br>But still, like air, I'll rise."<div class="source">Maya Angelou, "Still I Rise"</div></div>

<h3>How to Prepare</h3>
<p>For each poem, prepare notes on: <strong>theme</strong>, <strong>tone</strong>, <strong>key techniques</strong> (3-4), <strong>structural features</strong>, and <strong>context</strong>. The exam question will ask how the writer achieves specific effects, so practise WHAT-HOW-WHY paragraphs for each.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Component 2 Section A is worth 30 marks. The question will name a specific poem and give you bullet-point prompts. Address every bullet point to ensure full coverage.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Retelling the poem's story instead of analysing techniques. The examiner wants to see HOW the writer creates effects, not WHAT the poem is about.</div>`,
      quiz: [
        { id: 'eia-m6-q1', question: 'How many poems are in Part 2 of the Spec A anthology?', options: ['3', '5', '10', '15'], correct: 1, explanation: 'Part 2 contains 5 poems and 5 prose texts. The five poems are by Owen, Frost, Alvi, Harrison, and Angelou.' },
        { id: 'eia-m6-q2', question: 'Which poem uses the refrain "an unknown girl is hennaing my hand"?', options: ['Still I Rise', 'Disabled', 'An Unknown Girl', 'The Bright Lights of Sarajevo'], correct: 2, explanation: '"An Unknown Girl" by Moniza Alvi uses this refrain throughout the poem to anchor the speaker\'s cultural experience.' },
        { id: 'eia-m6-q3', question: 'The title "Out, Out—" is an allusion to which Shakespeare play?', options: ['Hamlet', 'Romeo and Juliet', 'Macbeth', 'Othello'], correct: 2, explanation: 'The title alludes to Macbeth\'s soliloquy: "Out, out, brief candle! Life\'s but a walking shadow." This connects to the poem\'s theme of life\'s fragility.' },
        { id: 'eia-m6-q4', question: 'How many marks is the Component 2 Section A poetry/prose question worth?', options: ['15 marks', '20 marks', '30 marks', '40 marks'], correct: 2, explanation: 'Component 2 Section A (Reading) is worth 30 marks — 12 for AO1 and 18 for AO2.' },
      ],
    },
    {
      id: 'eia-m7',
      title: 'Anthology Part 2: Prose Analysis',
      duration: '35 mins',
      content: `<h2>The Five Anthology Prose Texts</h2>
<p>Part 2 also contains five prose texts — short stories and extracts. Like the poetry, these may appear on Component 2. The text is printed in your exam.</p>

<h3>The Prose Texts</h3>
<ul>
<li><strong>"The Story of an Hour"</strong> — Kate Chopin: A wife learns her husband has died and feels unexpected freedom, then dies of shock when he returns alive. Irony; repression of women in the 19th century.</li>
<li><strong>"The Necklace"</strong> — Guy de Maupassant: A woman borrows a necklace, loses it, spends years repaying the replacement, then discovers the original was fake. Dramatic irony; social ambition.</li>
<li><strong>"Significant Cigarettes"</strong> — Rose Tremain (from <em>The Road Home</em>): Lev, a migrant worker, recalls moments of significance through cigarettes. Nostalgia; displacement; sensory detail.</li>
<li><strong>"Whistle and I'll Come to You"</strong> — Susan Hill (from <em>The Woman in Black</em>): Gothic horror; narrator visits a haunted house. Atmosphere; tension building; pathetic fallacy.</li>
<li><strong>"Night"</strong> — Alice Munro: A young girl navigates complex family relationships. Subtle characterisation; understated emotion; domestic setting.</li>
</ul>

<div class="text-extract">"There was something else coming from behind the closed door besides the key. A young woman's voice was singing and it was utterly beautiful."<div class="source">Kate Chopin, "The Story of an Hour" (adapted)</div></div>

<h3>Analysing Prose for the Exam</h3>
<p>The exam question gives you the full text and asks how the writer creates specific effects. Focus on:</p>
<ul>
<li><strong>Narrative perspective</strong> — First or third person? Reliable narrator?</li>
<li><strong>Setting and atmosphere</strong> — How does the writer use description?</li>
<li><strong>Characterisation</strong> — Through dialogue, action, or inner thought?</li>
<li><strong>Structure</strong> — How does the text build, shift, or end?</li>
<li><strong>Language</strong> — Imagery, connotation, tone</li>
</ul>

<div class="model-answer"><strong>Model Paragraph:</strong> Chopin creates a complex sense of freedom through the metaphor "she was drinking in a very elixir of life." The word "elixir" suggests something magical and restorative, implying that her husband's death has paradoxically given her new life. The verb "drinking" conveys eagerness and pleasure, which is deeply unsettling given the context. The reader is forced to confront the uncomfortable truth that this woman's marriage was a form of confinement.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> If you get a prose text in the exam, treat the bullet points as a ready-made essay plan. Each bullet = one paragraph. This keeps you focused and saves planning time.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Confusing the Component 2 prose question with a literature essay. This is a LANGUAGE exam — focus on how the writer uses language and structure, not on themes or context like you would in English Literature.</div>`,
      quiz: [
        { id: 'eia-m7-q1', question: 'In "The Necklace," what is the central irony?', options: ['The necklace was stolen', 'The necklace was real diamonds', 'The original necklace was fake — the replacement was unnecessary', 'The woman never borrowed it'], correct: 2, explanation: 'The dramatic irony is that Mathilde spent years in poverty repaying a diamond necklace, only to discover the original was paste (fake). This drives the theme of social ambition and wasted sacrifice.' },
        { id: 'eia-m7-q2', question: 'Which prose text uses a Gothic horror setting?', options: ['The Story of an Hour', 'The Necklace', 'Whistle and I\'ll Come to You', 'Night'], correct: 2, explanation: '"Whistle and I\'ll Come to You" by Susan Hill is an extract from The Woman in Black, using classic Gothic conventions: a haunted house, isolation, and tension building.' },
        { id: 'eia-m7-q3', question: 'What should you focus on when analysing prose in this language exam?', options: ['Historical context and themes', 'Language, structure, and writer\'s craft', 'Character motivations only', 'Biographical details about the author'], correct: 1, explanation: 'This is a language exam (not literature), so you must focus on HOW the writer uses language and structure to create effects, not on themes or context.' },
        { id: 'eia-m7-q4', question: 'How many prose texts are in Part 2 of the Spec A anthology?', options: ['3', '5', '8', '10'], correct: 1, explanation: 'Part 2 contains 5 prose texts (Chopin, Maupassant, Tremain, Hill, Munro) alongside the 5 poems.' },
      ],
    },
    {
      id: 'eia-m8',
      title: 'Component 2: Imaginative Writing',
      duration: '35 mins',
      content: `<h2>Writing to Narrate, Describe, or Entertain (30 marks)</h2>
<p>Component 2 Section B tests your <strong>imaginative writing</strong>. You choose <strong>one task from three options</strong>: a personal narrative prompt, a title-based story, or an image-inspired piece.</p>

<h3>The Three Types of Prompt</h3>
<ul>
<li><strong>Personal experience:</strong> "Write about a time when you, or someone you know, had an unexpected experience."</li>
<li><strong>Title-based:</strong> "Write a story with the title 'Left Behind'."</li>
<li><strong>Image-based:</strong> Two images provided with an opening line to continue</li>
</ul>

<div class="key-term"><strong>Key Term: Imaginative writing</strong> — Creative writing that aims to narrate, describe, or entertain. Unlike transactional writing, it focuses on engaging the reader through storytelling techniques, sensory description, and emotional impact.</div>

<h3>Mark Breakdown</h3>
<p><strong>AO4 (18 marks):</strong> Content, style, organisation. Are you engaging? Is your writing well-structured? Do you control tone and voice?</p>
<p><strong>AO5 (12 marks):</strong> Technical accuracy — vocabulary range, sentence variety, spelling, punctuation.</p>

<h3>Top Techniques for Imaginative Writing</h3>
<ul>
<li><strong>Show, don't tell:</strong> "Her hands trembled" not "She was nervous"</li>
<li><strong>Sensory detail:</strong> Engage all five senses, not just sight</li>
<li><strong>Varied sentence lengths:</strong> Long for description, short for impact</li>
<li><strong>Structural control:</strong> Circular endings, flashbacks, time shifts</li>
<li><strong>Figurative language:</strong> Metaphor, simile, personification — but don't overdo it</li>
</ul>

<div class="model-answer"><strong>Strong Descriptive Opening:</strong> "The market was a symphony of chaos. Spices stained the air amber and gold; voices collided like waves against rock. Somewhere in the tangle of fabric and fruit, a child laughed — a sound so clean it cut through the noise like glass."</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> You have 45 minutes for this task. Spend 5 minutes planning (beginning, middle, end), 35 minutes writing, and 5 minutes proofreading. A short, well-crafted piece beats a long, rambling one every time.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Trying to write a complete novel in 45 minutes. Focus on one scene, one moment, or one memory. Depth beats breadth.</div>`,
      quiz: [
        { id: 'eia-m8-q1', question: 'How many writing options do you choose from in Component 2 Section B?', options: ['One (no choice)', 'Two', 'Three', 'Four'], correct: 2, explanation: 'Component 2 Section B gives you three options: a personal experience prompt, a title-based story, or an image-inspired piece. You choose one.' },
        { id: 'eia-m8-q2', question: 'What is the total mark for the imaginative writing task?', options: ['20 marks', '30 marks', '40 marks', '45 marks'], correct: 1, explanation: 'The imaginative writing task is worth 30 marks — 18 for AO4 (content and style) and 12 for AO5 (technical accuracy).' },
        { id: 'eia-m8-q3', question: 'What does "show, don\'t tell" mean?', options: ['Use pictures instead of words', 'Describe actions and sensations rather than stating emotions directly', 'Write in first person only', 'Show your plan to the examiner'], correct: 1, explanation: '"Show, don\'t tell" means conveying emotions through actions, body language, and sensory detail rather than just naming the emotion (e.g., "her hands trembled" rather than "she was scared").' },
        { id: 'eia-m8-q4', question: 'How should you spend your 45 minutes on this task?', options: ['Write for 45 minutes straight', '5 min plan, 35 min write, 5 min proofread', '20 min plan, 25 min write', '40 min write, 5 min rest'], correct: 1, explanation: 'A 5-5-35 split (plan, proofread, write) ensures your piece is well-structured and polished. Many marks are lost to avoidable SPaG errors that proofreading would catch.' },
      ],
    },
  ],
  assessmentQuestions: [
    { id: 'eia-a1', question: 'What is the Edexcel IGCSE Spec A qualification code?', options: ['1EN2', '4EA1', '4EB1', '8700'], correct: 1, explanation: 'Specification A is coded 4EA1. 1EN2 is Edexcel GCSE, 4EB1 is Spec B, and 8700 is AQA.' },
    { id: 'eia-a2', question: 'How many components make up the Spec A qualification?', options: ['1 — a single exam', '2 — Component 1 plus Component 2 or 3', '3 — all three components', '4 — including spoken language'], correct: 1, explanation: 'Students take Component 1 (mandatory) plus EITHER Component 2 (exam) OR Component 3 (coursework). The spoken language endorsement is optional and separate.' },
    { id: 'eia-a3', question: 'What percentage of the total IGCSE does Component 1 represent?', options: ['40%', '50%', '60%', '100%'], correct: 2, explanation: 'Component 1 is worth 60% of the total IGCSE (90 marks out of 150).' },
    { id: 'eia-a4', question: 'How many non-fiction texts are in Part 1 of the anthology?', options: ['5', '8', '10', '15'], correct: 2, explanation: 'Part 1 contains 10 non-fiction texts covering speeches, memoirs, travel writing, journalism, and autobiography.' },
    { id: 'eia-a5', question: 'In Component 1, which text is the unseen one?', options: ['Text 1', 'Text 2', 'Both texts', 'Neither'], correct: 0, explanation: 'Text 1 is always the unseen text. Text 2 is from the anthology (Part 1).' },
    { id: 'eia-a6', question: 'What is the highest-value single question on Component 1?', options: ['Q1 (retrieval, 2 marks)', 'Q4 (language analysis, 12 marks)', 'Q5 (comparison, 22 marks)', 'Q6/7 (writing, 45 marks)'], correct: 2, explanation: 'Q5 is worth 22 marks — the highest single reading question. However, the writing task (Q6/7) is worth 45 marks as a combined total.' },
    { id: 'eia-a7', question: 'Which assessment objective does Q5 (comparison) test?', options: ['AO1', 'AO2', 'AO3', 'AO4'], correct: 2, explanation: 'Q5 tests AO3 — exploring links and connections between writers\' ideas and perspectives across two texts.' },
    { id: 'eia-a8', question: 'Which poem in Part 2 was written by Wilfred Owen?', options: ['Still I Rise', 'Out, Out—', 'Disabled', 'An Unknown Girl'], correct: 2, explanation: '"Disabled" by Wilfred Owen is about a WW1 soldier who lost his limbs, contrasting his youthful past with his isolated present.' },
    { id: 'eia-a9', question: 'What is the central irony in "The Necklace" by Guy de Maupassant?', options: ['The necklace was stolen by a friend', 'The husband secretly bought a new necklace', 'The original necklace was fake, making years of repayment unnecessary', 'The woman found the necklace years later'], correct: 2, explanation: 'Mathilde spent a decade in poverty repaying the cost of a diamond necklace replacement, only to learn the original was paste (costume jewellery).' },
    { id: 'eia-a10', question: 'What type of writing does Component 1 Section B assess?', options: ['Imaginative/creative writing', 'Transactional writing', 'Poetry writing', 'Note-taking'], correct: 1, explanation: 'Component 1 Section B tests transactional writing — articles, speeches, letters, guides, and reviews with a clear audience and purpose.' },
    { id: 'eia-a11', question: 'What type of writing does Component 2 Section B assess?', options: ['Transactional writing', 'Imaginative/creative writing', 'Summary writing', 'Report writing'], correct: 1, explanation: 'Component 2 Section B tests imaginative writing — narratives, descriptions, and creative pieces.' },
    { id: 'eia-a12', question: 'How many writing task options do you get in Component 2 Section B?', options: ['One', 'Two', 'Three', 'Four'], correct: 2, explanation: 'You choose one from three options: a personal experience prompt, a title-based story, or an image-inspired piece.' },
    { id: 'eia-a13', question: 'Which anthology text is about the Siege of Sarajevo?', options: ['Disabled', 'The Bright Lights of Sarajevo', 'A Passage to Africa', 'Still I Rise'], correct: 1, explanation: '"The Bright Lights of Sarajevo" by Tony Harrison juxtaposes everyday life with the horrors of war during the siege.' },
    { id: 'eia-a14', question: 'What does AO2 assess?', options: ['Comprehension and retrieval', 'Language and structure analysis', 'Comparison between texts', 'Writing for purpose and audience'], correct: 1, explanation: 'AO2 assesses your ability to understand and analyse how writers use linguistic and structural devices to achieve their effects.' },
    { id: 'eia-a15', question: 'How long is the Component 1 exam?', options: ['1 hour 30 minutes', '1 hour 55 minutes', '2 hours 15 minutes', '3 hours'], correct: 2, explanation: 'Component 1 is 2 hours 15 minutes, worth 90 marks (60% of the IGCSE).' },
    { id: 'eia-a16', question: 'How long is the Component 2 exam?', options: ['1 hour', '1 hour 30 minutes', '2 hours', '2 hours 15 minutes'], correct: 1, explanation: 'Component 2 is 1 hour 30 minutes, worth 60 marks (40% of the IGCSE).' },
    { id: 'eia-a17', question: '"Chinese Cinderella" is by which author?', options: ['Kari Herbert', 'Helen Macdonald', 'Adeline Yen Mah', 'Jamie Zeppa'], correct: 2, explanation: '"Chinese Cinderella" by Adeline Yen Mah is an autobiographical text about her childhood experiences in China.' },
    { id: 'eia-a18', question: 'What is the difference between Component 2 and Component 3?', options: ['Component 2 is reading, Component 3 is writing', 'Component 2 is an exam, Component 3 is coursework (NEA)', 'Component 2 is harder', 'There is no difference'], correct: 1, explanation: 'Component 2 is the examined option (1h 30m paper). Component 3 is the non-examined assessment (coursework) option. Students take one or the other, not both.' },
    { id: 'eia-a19', question: 'What does the Spoken Language Endorsement assess?', options: ['Reading aloud', 'A prepared spoken presentation and Q&A', 'Spelling tests', 'Group discussion only'], correct: 1, explanation: 'The endorsement involves delivering a prepared presentation (max 10 minutes) and responding to questions. It is graded Pass/Merit/Distinction separately from the main grade.' },
    { id: 'eia-a20', question: 'What is the best approach for Q4 (language and structure analysis)?', options: ['List techniques without explanation', 'Use WHAT-HOW-WHY paragraphs covering both language AND structure', 'Only discuss language features', 'Retell the text in your own words'], correct: 1, explanation: 'Q4 requires analysis of BOTH language and structure. Use WHAT (identify the technique), HOW (quote and explain), WHY (analyse the reader\'s response) for each point.' },
  ],
};

const edexcelIgcseLangB = {
  id: 'edexcel-igcse-lang-b',
  title: 'Edexcel IGCSE Language: Spec B',
  subtitle: 'Master the single-paper 4EB1 exam with unseen text skills and versatile writing.',
  tier: 'IGCSE',
  board: 'Edexcel',
  specCode: '4EB1',
  price: 49,
  duration: '5-7 hours',
  level: 'IGCSE',
  description: 'Complete preparation for Edexcel IGCSE English Language Specification B. No anthology — all texts are unseen. Master reading analysis, directed writing, and the three writing modes in one 3-hour exam.',
  color: '#dc2626',
  moduleList: [
    {
      id: 'eib-m1',
      title: 'Section A: Reading Unseen Texts',
      duration: '35 mins',
      content: `<h2>One Paper, All Unseen</h2>
<p>Spec B is a <strong>single 3-hour exam</strong> worth 100 marks. There is no anthology and no coursework. Everything depends on your ability to read unseen texts and write effectively under pressure.</p>

<div class="key-term"><strong>Key Term: Spec B (4EB1)</strong> — A single-paper IGCSE with no pre-studied texts. Section A (40 marks) tests reading across two unseen extracts. Section B (30 marks) tests directed writing. Section C (30 marks) tests free writing.</div>

<h3>Section A Structure</h3>
<p>You receive <strong>two unseen text extracts</strong> — these could be fiction, non-fiction, journalism, speeches, letters, autobiography, or travel writing. Seven questions test your understanding:</p>
<ul>
<li><strong>Q1</strong> (1 mark) — Short retrieval from Text 1</li>
<li><strong>Q2</strong> (1 mark) — Short retrieval from Text 1</li>
<li><strong>Q3</strong> (10 marks) — Language and structure analysis on Text 1</li>
<li><strong>Q4</strong> (1 mark) — Short retrieval from Text 2</li>
<li><strong>Q5</strong> (2 marks) — Short comprehension from Text 2</li>
<li><strong>Q6</strong> (10 marks) — Language and structure analysis on Text 2</li>
<li><strong>Q7</strong> (15 marks) — Comparison across both texts</li>
</ul>

<h3>Reading Strategy</h3>
<p>Spend <strong>1 hour</strong> on Section A (advised time). Read both texts carefully first — underline key words, annotate techniques. Then tackle questions in order.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Q1, Q2, Q4, and Q5 are worth only 5 marks total. Answer them quickly and precisely — they are retrieval questions. Save your detailed analysis for Q3, Q6, and Q7.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending 20 minutes on Q1-Q2 because you're nervous about the unseen text. These are 1-mark questions — find the answer and move on.</div>`,
      quiz: [
        { id: 'eib-m1-q1', question: 'How long is the Spec B exam?', options: ['1 hour 30 minutes', '2 hours', '2 hours 15 minutes', '3 hours'], correct: 3, explanation: 'Spec B is a single 3-hour exam. This is the only examined component — there is no second paper and no coursework.' },
        { id: 'eib-m1-q2', question: 'How many marks is Section A worth?', options: ['30 marks', '40 marks', '50 marks', '60 marks'], correct: 1, explanation: 'Section A (Reading) is worth 40 marks out of the total 100.' },
        { id: 'eib-m1-q3', question: 'What types of text might appear in the Spec B exam?', options: ['Only fiction', 'Only non-fiction', 'Only poetry', 'Fiction, non-fiction, journalism, speeches, letters, and more'], correct: 3, explanation: 'Spec B can use any text type — fiction, non-fiction, journalism, speeches, letters, autobiography, travel writing. There are no restrictions.' },
        { id: 'eib-m1-q4', question: 'How many marks are Q1, Q2, Q4, and Q5 worth combined?', options: ['5 marks', '10 marks', '15 marks', '20 marks'], correct: 0, explanation: 'Q1 (1) + Q2 (1) + Q4 (1) + Q5 (2) = 5 marks total. These are quick retrieval questions.' },
      ],
    },
    {
      id: 'eib-m2',
      title: 'Q3 & Q6: Language & Structure Analysis',
      duration: '40 mins',
      content: `<h2>The Two 10-Mark Analysis Questions</h2>
<p>Q3 and Q6 are the core analytical questions — each worth <strong>10 marks</strong> and testing <strong>AO2</strong>. Q3 targets Text 1; Q6 targets Text 2. Both ask you to analyse how the writer uses language and structure to achieve effects.</p>

<h3>What the Examiner Wants</h3>
<ul>
<li><strong>Identification</strong> of specific language and structural devices</li>
<li><strong>Evidence</strong> — embedded quotations, not long copied chunks</li>
<li><strong>Analysis</strong> of effects — how does this make the reader feel/think/respond?</li>
<li><strong>Subject terminology</strong> used correctly (metaphor, sibilance, juxtaposition, etc.)</li>
</ul>

<div class="key-term"><strong>Key Term: Subject terminology</strong> — The technical names for literary and linguistic devices (e.g., metaphor, alliteration, enjambment, dramatic irony). Using these shows sophisticated understanding — but only if you then explain the effect.</div>

<h3>Structural Analysis</h3>
<p>Don't forget structure! Look for:</p>
<ul>
<li>How the opening hooks the reader</li>
<li>Shifts in perspective, time, or tone</li>
<li>Use of short paragraphs or one-line sentences</li>
<li>How the ending resolves, twists, or leaves things open</li>
<li>Narrative pace — acceleration or deceleration</li>
</ul>

<div class="model-answer"><strong>Model Paragraph:</strong> The writer uses a single-word sentence — "Silence." — to halt the narrative pace and force the reader to pause. This structural choice creates a moment of tension, mirroring the character's sudden awareness of danger. The full stop after one word is jarring after the preceding long, flowing sentence, creating a contrast that amplifies the sense of shock.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Aim for 3 well-developed points in 10-12 minutes for each question. Quality over quantity — three detailed WHAT-HOW-WHY paragraphs will score higher than six surface-level observations.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> "Feature spotting" — listing techniques without explaining their effect. Saying "the writer uses a metaphor" scores almost nothing. Saying what the metaphor suggests and how it affects the reader is what earns marks.</div>`,
      quiz: [
        { id: 'eib-m2-q1', question: 'How many marks are Q3 and Q6 each worth?', options: ['5 marks', '10 marks', '15 marks', '20 marks'], correct: 1, explanation: 'Q3 and Q6 are both worth 10 marks each, testing AO2 (language and structure analysis).' },
        { id: 'eib-m2-q2', question: 'What is "feature spotting"?', options: ['A good exam technique', 'Listing techniques without explaining their effect', 'Finding hidden meanings', 'Spotting structural features only'], correct: 1, explanation: 'Feature spotting means identifying a technique (e.g., "the writer uses alliteration") without explaining what effect it has on the reader. This scores very low marks.' },
        { id: 'eib-m2-q3', question: 'How many analytical points should you aim for in a 10-mark question?', options: ['1 detailed point', '3 well-developed points', '6 brief points', '10 points — one per mark'], correct: 1, explanation: 'Three well-developed WHAT-HOW-WHY paragraphs are ideal. Quality analysis always scores better than rushed quantity.' },
        { id: 'eib-m2-q4', question: 'Which of these is a structural feature?', options: ['Metaphor', 'Alliteration', 'A shift from long to short paragraphs', 'Sibilance'], correct: 2, explanation: 'A shift from long to short paragraphs is structural — it changes the pace and rhythm of the text. Metaphor, alliteration, and sibilance are language features.' },
      ],
    },
    {
      id: 'eib-m3',
      title: 'Q7: Comparison Across Texts',
      duration: '40 mins',
      content: `<h2>Comparing Two Unseen Texts (15 marks)</h2>
<p>Q7 is the <strong>highest-value reading question</strong> on Spec B, worth 15 marks and testing <strong>AO3</strong>. You must compare how the two writers present their ideas and perspectives.</p>

<div class="key-term"><strong>Key Term: Perspectives</strong> — The writers' attitudes, viewpoints, and feelings about their subject. Comparing perspectives means examining not just what they write about, but how they feel about it and why.</div>

<h3>Comparison Structure</h3>
<p>Use the <strong>ping-pong method</strong> — alternate between texts within each paragraph:</p>
<ul>
<li>Open with a point of comparison (similarity or difference)</li>
<li>Support with evidence from Text 1</li>
<li>Link to Text 2 with a comparative connective</li>
<li>Support with evidence from Text 2</li>
<li>Analyse the difference in effect or purpose</li>
</ul>

<h3>What to Compare</h3>
<ul>
<li><strong>Ideas:</strong> What each writer thinks or believes</li>
<li><strong>Perspectives:</strong> How they feel about the topic</li>
<li><strong>Methods:</strong> The language, structure, and techniques they use</li>
<li><strong>Purpose:</strong> What each text is trying to achieve</li>
<li><strong>Tone:</strong> Formal vs informal, serious vs humorous, etc.</li>
</ul>

<div class="model-answer"><strong>Model Paragraph:</strong> Both writers address the theme of risk, but their perspectives diverge sharply. Writer A adopts a reverential tone towards danger, describing the climber's ordeal as "a communion with the mountain," which elevates risk to a spiritual experience. In contrast, Writer B is scathingly dismissive, labelling adventurers as people who "confuse recklessness with courage." This difference in perspective reflects their contrasting purposes: Writer A writes to inspire admiration, while Writer B writes to provoke debate.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The strongest answers compare METHODS, not just content. Don't just say "Writer A talks about X and Writer B talks about Y." Explain HOW their different techniques create different effects on the reader.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing two separate analyses instead of a comparison. Every paragraph must mention BOTH texts. Use connectives: "similarly," "in contrast," "whereas," "conversely," "unlike."</div>`,
      quiz: [
        { id: 'eib-m3-q1', question: 'How many marks is Q7 worth?', options: ['10 marks', '12 marks', '15 marks', '22 marks'], correct: 2, explanation: 'Q7 is worth 15 marks — the highest-value reading question on the Spec B paper.' },
        { id: 'eib-m3-q2', question: 'What is the "ping-pong method"?', options: ['Switching between reading and writing', 'Alternating between both texts within each paragraph', 'Writing about one text then the other', 'Answering quickly'], correct: 1, explanation: 'The ping-pong method means alternating between Text 1 and Text 2 within each paragraph, creating sustained comparison throughout your answer.' },
        { id: 'eib-m3-q3', question: 'What should the strongest comparison answers focus on?', options: ['Just the content of each text', 'Only the word count differences', 'Both content AND the writers\' methods/techniques', 'Only biographical details'], correct: 2, explanation: 'Top-band answers compare both what the writers say (ideas, perspectives) AND how they say it (methods, techniques, tone).' },
        { id: 'eib-m3-q4', question: 'Which AO does Q7 test?', options: ['AO1', 'AO2', 'AO3', 'AO4'], correct: 2, explanation: 'Q7 tests AO3 — exploring links and connections between writers\' ideas and perspectives across two or more texts.' },
      ],
    },
    {
      id: 'eib-m4',
      title: 'Section B Q8: Directed Writing',
      duration: '35 mins',
      content: `<h2>The Unique Spec B Question (30 marks)</h2>
<p>Q8 is <strong>unique to Spec B</strong> — it combines reading and writing. You must produce a piece of transactional writing that draws on ideas from the source texts. This tests AO1 (10 marks), AO4 (12 marks), and AO5 (8 marks).</p>

<div class="key-term"><strong>Key Term: Directed writing</strong> — A writing task that requires you to use ideas, arguments, or information from the reading texts as a starting point. You must demonstrate that you've understood the texts while also writing effectively for a new purpose and audience.</div>

<h3>How It Works</h3>
<p>The question gives you:</p>
<ul>
<li>A specific <strong>form</strong> (article, speech, letter, website contribution)</li>
<li>A specific <strong>audience</strong></li>
<li>A <strong>purpose</strong> linked to the themes of the reading texts</li>
<li>Bullet point guidance</li>
</ul>

<h3>The Dual Skill</h3>
<p>You must show two skills simultaneously:</p>
<ul>
<li><strong>Reading comprehension (AO1, 10 marks):</strong> Reference and build upon ideas from both source texts. Don't copy — synthesise and develop.</li>
<li><strong>Writing skill (AO4 + AO5, 20 marks):</strong> Write persuasively, clearly, and accurately for the given form and audience.</li>
</ul>

<div class="model-answer"><strong>Example Task:</strong> "Based on what you have read in both texts, write an article for a travel magazine in which you discuss whether adventure tourism does more harm than good." You would draw on arguments from both texts while developing your own voice and viewpoint.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Spend the first 5 minutes re-reading the texts with Q8 in mind. Underline ideas you can reference. Then plan your article/speech/letter structure before writing. You need to show the examiner you've USED the texts, not just read them.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Either ignoring the source texts entirely (losing AO1 marks) or copying chunks of the source texts (losing AO4 marks for lack of original voice). Strike a balance — reference ideas but write in your own style.</div>`,
      quiz: [
        { id: 'eib-m4-q1', question: 'What makes Q8 unique to Spec B?', options: ['It\'s a poetry question', 'It combines reading comprehension with transactional writing', 'It\'s worth 50 marks', 'It tests speaking skills'], correct: 1, explanation: 'Q8 is a "directed writing" task that requires you to draw on the source texts while writing for a new purpose and audience — combining reading and writing skills.' },
        { id: 'eib-m4-q2', question: 'How many marks is Q8 worth?', options: ['20 marks', '25 marks', '30 marks', '40 marks'], correct: 2, explanation: 'Q8 is worth 30 marks — 10 for AO1 (reading), 12 for AO4 (writing purpose/audience), and 8 for AO5 (technical accuracy).' },
        { id: 'eib-m4-q3', question: 'What should you do with the source texts when answering Q8?', options: ['Ignore them completely', 'Copy long quotations from them', 'Reference and build upon their ideas in your own voice', 'Summarise them in your answer'], correct: 2, explanation: 'You must reference ideas from the source texts to score AO1 marks, but develop them in your own voice and style for AO4 marks.' },
        { id: 'eib-m4-q4', question: 'Which forms might Q8 require you to write in?', options: ['Short story, poem, or play script', 'Article, speech, letter, or website contribution', 'Exam essay only', 'Text message or social media post'], correct: 1, explanation: 'Q8 uses transactional forms: articles for magazines/newspapers, speeches/talks, letters, or contributions to a website.' },
      ],
    },
    {
      id: 'eib-m5',
      title: 'Section C: Discursive & Argumentative Writing',
      duration: '35 mins',
      content: `<h2>Section C: Free Writing (30 marks)</h2>
<p>Section C gives you <strong>three writing options</strong> — you choose ONE:</p>
<ul>
<li><strong>Q9:</strong> A discursive/argumentative task</li>
<li><strong>Q10:</strong> A narrative task</li>
<li><strong>Q11:</strong> A descriptive task</li>
</ul>
<p>This module covers Q9 — discursive and argumentative writing. It tests AO4 (20 marks) and AO5 (10 marks).</p>

<div class="key-term"><strong>Key Term: Discursive writing</strong> — Writing that explores different sides of an argument or issue before reaching a conclusion. Unlike purely persuasive writing, discursive writing aims to be balanced and thoughtful.</div>

<h3>Discursive vs Argumentative</h3>
<p><strong>Discursive:</strong> Explores both sides — "On one hand... on the other hand..." — then reaches a reasoned conclusion.</p>
<p><strong>Argumentative:</strong> Takes a clear position and defends it — "I firmly believe that..." — while addressing counter-arguments.</p>
<p>Both are valid approaches for Q9. Choose the one that suits the question.</p>

<h3>Structure for Discursive Writing</h3>
<ul>
<li><strong>Introduction:</strong> Introduce the topic and signal you'll explore both sides</li>
<li><strong>For paragraphs (2-3):</strong> Arguments in favour, with evidence/examples</li>
<li><strong>Against paragraphs (2-3):</strong> Arguments against, with evidence/examples</li>
<li><strong>Conclusion:</strong> Your balanced judgement — which side is more compelling?</li>
</ul>

<div class="model-answer"><strong>Strong Discursive Opening:</strong> "The debate around school uniforms is one that refuses to die. Proponents argue they eliminate social inequality and create a sense of belonging; critics counter that they suppress individuality and burden already-struggling families. The truth, as with most polarised debates, lies somewhere in the uncomfortable middle."</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best discursive writing uses specific examples, not vague generalisations. "In 2024, the Student Voice survey found that 67% of pupils preferred non-uniform days" is far more convincing than "lots of students don't like uniforms."</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a one-sided rant instead of a balanced discussion. Even if you feel strongly, acknowledge the other side. This shows maturity and scores higher on AO4.</div>`,
      quiz: [
        { id: 'eib-m5-q1', question: 'How many writing options do you get in Section C?', options: ['One', 'Two', 'Three', 'Four'], correct: 2, explanation: 'Section C offers three options: Q9 (discursive/argumentative), Q10 (narrative), Q11 (descriptive). You choose one.' },
        { id: 'eib-m5-q2', question: 'What is the difference between discursive and argumentative writing?', options: ['They are the same thing', 'Discursive explores both sides; argumentative takes one position', 'Argumentative is longer', 'Discursive is informal'], correct: 1, explanation: 'Discursive writing explores multiple perspectives before reaching a conclusion. Argumentative writing takes a clear position and defends it.' },
        { id: 'eib-m5-q3', question: 'How many marks is the Section C writing task worth?', options: ['20 marks', '25 marks', '30 marks', '40 marks'], correct: 2, explanation: 'Section C is worth 30 marks — 20 for AO4 (content and purpose) and 10 for AO5 (technical accuracy).' },
        { id: 'eib-m5-q4', question: 'What makes discursive writing convincing?', options: ['Using emotional language throughout', 'Specific examples and evidence', 'Writing in all capital letters', 'Using as many adjectives as possible'], correct: 1, explanation: 'Specific, concrete examples (statistics, named sources, real events) are far more convincing than vague generalisations.' },
      ],
    },
    {
      id: 'eib-m6',
      title: 'Section C: Narrative & Descriptive Writing',
      duration: '35 mins',
      content: `<h2>Q10 and Q11: Creative Options</h2>
<p>If you prefer creative writing, choose Q10 (narrative) or Q11 (descriptive). These test the same AOs as Q9 but reward different skills.</p>

<h3>Narrative Writing (Q10)</h3>
<p>Tell a story. Focus on:</p>
<ul>
<li><strong>A clear structure:</strong> Beginning, complication, climax, resolution</li>
<li><strong>Character development:</strong> Show personality through action and dialogue</li>
<li><strong>Pacing:</strong> Build tension gradually, don't rush the ending</li>
<li><strong>A limited scope:</strong> One scene or event, not an entire life story</li>
</ul>

<h3>Descriptive Writing (Q11)</h3>
<p>Paint a vivid picture. Focus on:</p>
<ul>
<li><strong>Sensory detail:</strong> Sight, sound, smell, touch, taste</li>
<li><strong>Figurative language:</strong> Metaphor, simile, personification</li>
<li><strong>Atmosphere:</strong> Create a mood through word choice and imagery</li>
<li><strong>Structural variety:</strong> Zoom in/out, shift focus, contrast</li>
</ul>

<div class="text-extract">"The harbour was a graveyard of boats. Hulls lay beached and barnacled, their rigging tangled like the hair of something drowned. The tide had retreated so far it seemed ashamed."<div class="source">Example descriptive opening</div></div>

<div class="key-term"><strong>Key Term: Pathetic fallacy</strong> — When the weather or environment reflects the mood or emotions of a character or scene. "The sky darkened as her mood soured" uses the sky to mirror inner feelings.</div>

<div class="model-answer"><strong>Strong Narrative Opening:</strong> "It was the smell that told me something was wrong. Not the smoke — I was used to that, living above the chip shop — but something sharper, chemical, like the air itself had been scorched. I stood at the top of the stairs, one hand on the banister, and listened."</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Don't try to write an epic. The best creative writing focuses on a single moment, scene, or encounter and explores it in rich detail. Quality always beats quantity.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> For narrative — rushing through a massive plot in 30 minutes, resulting in a shallow story. For descriptive — writing a list of adjectives without creating atmosphere or engaging the reader emotionally.</div>`,
      quiz: [
        { id: 'eib-m6-q1', question: 'What is pathetic fallacy?', options: ['A character feeling sorry for themselves', 'Weather/environment reflecting mood or emotion', 'A type of logical error', 'Personification of animals'], correct: 1, explanation: 'Pathetic fallacy is when the weather or natural environment mirrors the emotions of characters or the mood of a scene.' },
        { id: 'eib-m6-q2', question: 'What is the best scope for a narrative in a timed exam?', options: ['An entire life story', 'A single moment, scene, or encounter', 'Multiple chapters', 'A biography'], correct: 1, explanation: 'A focused narrative about one scene or moment allows you to develop it in rich detail. Trying to cover too much results in shallow writing.' },
        { id: 'eib-m6-q3', question: 'Which senses should you engage in descriptive writing?', options: ['Sight only', 'Sight and sound only', 'All five senses: sight, sound, smell, touch, taste', 'None — focus on emotions only'], correct: 2, explanation: 'The best descriptive writing engages all five senses, creating an immersive experience for the reader.' },
        { id: 'eib-m6-q4', question: 'What is the total time advised for Section C?', options: ['30 minutes', '45 minutes', '1 hour', '1 hour 30 minutes'], correct: 2, explanation: 'The advised time for Section C is 1 hour. This gives you time to plan (5-10 minutes), write (40-45 minutes), and proofread (5 minutes).' },
      ],
    },
  ],
  assessmentQuestions: [
    { id: 'eib-a1', question: 'What is the Spec B qualification code?', options: ['4EA1', '4EB1', '1EN2', 'J351'], correct: 1, explanation: 'Spec B is coded 4EB1. 4EA1 is Spec A, 1EN2 is Edexcel GCSE, J351 is OCR.' },
    { id: 'eib-a2', question: 'How many components does Spec B have?', options: ['1', '2', '3', '4'], correct: 0, explanation: 'Spec B has just one component — a single 3-hour exam. There is no coursework option.' },
    { id: 'eib-a3', question: 'What is the total marks for the Spec B exam?', options: ['80', '90', '100', '160'], correct: 2, explanation: 'The single Spec B exam is worth 100 marks total: 40 reading + 30 directed writing + 30 free writing.' },
    { id: 'eib-a4', question: 'Does Spec B have an anthology?', options: ['Yes — 20 texts', 'Yes — 10 texts', 'No — all texts are unseen', 'Yes — 5 poems'], correct: 2, explanation: 'Spec B has no anthology and no set texts. All reading material in the exam is completely unseen.' },
    { id: 'eib-a5', question: 'What is unique about Q8 (Section B)?', options: ['It\'s a poetry analysis', 'It combines reading comprehension with writing', 'It\'s optional', 'It\'s worth 50 marks'], correct: 1, explanation: 'Q8 is a "directed writing" task that requires you to draw on ideas from the source texts while writing for a new purpose and audience.' },
    { id: 'eib-a6', question: 'How many marks does Q8 allocate to reading comprehension (AO1)?', options: ['5 marks', '10 marks', '15 marks', '20 marks'], correct: 1, explanation: 'Q8 allocates 10 marks to AO1 (reading), 12 to AO4 (writing content), and 8 to AO5 (technical accuracy).' },
    { id: 'eib-a7', question: 'How many options do you get in Section C?', options: ['1', '2', '3', '4'], correct: 2, explanation: 'Section C offers three choices: discursive (Q9), narrative (Q10), or descriptive (Q11).' },
    { id: 'eib-a8', question: 'What is the reading-to-writing ratio in Spec B?', options: ['60:40', '40:60', '50:50', '70:30'], correct: 2, explanation: 'Spec B is 50% reading (Section A + AO1 in Section B) and 50% writing (AO4+AO5 in Sections B and C).' },
    { id: 'eib-a9', question: 'How much time is advised for Section A?', options: ['30 minutes', '45 minutes', '1 hour', '1 hour 30 minutes'], correct: 2, explanation: 'The advised time is 1 hour for Section A, 1 hour for Section B, and 1 hour for Section C.' },
    { id: 'eib-a10', question: 'What is the highest-value reading question on Spec B?', options: ['Q3 (10 marks)', 'Q6 (10 marks)', 'Q7 (15 marks)', 'Q8 (30 marks)'], correct: 2, explanation: 'Q7 is the highest purely reading question at 15 marks. Q8 includes reading marks but is a combined reading-writing task.' },
    { id: 'eib-a11', question: 'Which AOs does the Section C writing task test?', options: ['AO1 and AO2', 'AO3 and AO4', 'AO4 and AO5', 'AO2 and AO3'], correct: 2, explanation: 'Section C tests AO4 (20 marks for content, purpose, and style) and AO5 (10 marks for technical accuracy).' },
    { id: 'eib-a12', question: 'Does Spec B include poetry?', options: ['Yes — 5 poems in an anthology', 'Yes — unseen poetry', 'No — there is no poetry requirement', 'Yes — both anthology and unseen'], correct: 2, explanation: 'Spec B has no poetry at all. Only Spec A includes poetry (in Part 2 of the anthology).' },
    { id: 'eib-a13', question: 'What forms are acceptable for Q8 directed writing?', options: ['Poem or short story', 'Article, speech, letter, or website contribution', 'Academic essay only', 'Any form you choose'], correct: 1, explanation: 'Q8 uses transactional forms: articles, speeches/talks, letters, or website contributions.' },
    { id: 'eib-a14', question: 'What is the difference between Spec A and Spec B?', options: ['Spec A is harder', 'Spec A uses an anthology; Spec B is all unseen with no coursework option', 'Spec B includes more poetry', 'There is no difference'], correct: 1, explanation: 'The key difference is Spec A is built around a 20-text anthology and offers a coursework option. Spec B has no set texts, all unseen material, and no coursework.' },
    { id: 'eib-a15', question: 'In discursive writing, what should you do?', options: ['Only argue one side', 'Explore both sides before reaching a conclusion', 'Avoid giving your opinion', 'Write as informally as possible'], correct: 1, explanation: 'Discursive writing explores multiple perspectives on an issue before reaching a balanced, reasoned conclusion.' },
    { id: 'eib-a16', question: 'What makes good descriptive writing?', options: ['Long lists of adjectives', 'Engaging multiple senses with figurative language and atmosphere', 'Using only visual description', 'Writing as many words as possible'], correct: 1, explanation: 'The best descriptive writing engages all five senses, uses figurative language purposefully, and creates a clear atmosphere.' },
    { id: 'eib-a17', question: 'What should you focus a narrative writing piece on?', options: ['An entire plot spanning years', 'A single moment or encounter explored in depth', 'As many characters as possible', 'Historical events only'], correct: 1, explanation: 'In a timed exam, focusing on a single moment or scene allows you to develop it richly. Sprawling plots result in shallow writing.' },
    { id: 'eib-a18', question: 'Can Spec B texts include fiction?', options: ['No — non-fiction only', 'Yes — both fiction and non-fiction', 'Only classic literature', 'Only 19th-century fiction'], correct: 1, explanation: 'Spec B can include any text type: fiction, non-fiction, journalism, speeches, letters, autobiography, travel writing, etc.' },
    { id: 'eib-a19', question: 'Is there a spoken language endorsement for Spec B?', options: ['No', 'Yes — it counts for 20% of the grade', 'Yes — graded Pass/Merit/Distinction separately', 'Yes — it replaces Section C'], correct: 2, explanation: 'Spec B has an optional spoken language endorsement graded Pass/Merit/Distinction. It is reported separately and does not affect the main IGCSE grade.' },
    { id: 'eib-a20', question: 'When is the Spec B exam available?', options: ['June only', 'November only', 'June and November', 'January and June'], correct: 2, explanation: 'The Spec B exam is available in both June and November exam series.' },
  ],
};

const edexcelIgcseLangRevision = {
  id: 'edexcel-igcse-lang-revision',
  title: 'Edexcel IGCSE Language: Revision Blitz',
  subtitle: 'Fast-track revision for both Spec A and Spec B — essential skills, model answers, final tips.',
  tier: 'IGCSE',
  board: 'Edexcel',
  specCode: '4EA1/4EB1',
  price: 49,
  duration: '3-4 hours',
  level: 'IGCSE',
  description: 'Rapid revision for both Edexcel IGCSE English Language specifications. Covers key skills, model answers at every grade, and last-minute exam strategy for Spec A and Spec B students.',
  color: '#dc2626',
  moduleList: [
    {
      id: 'eir-m1',
      title: 'Spec A vs Spec B: Know Your Exam',
      duration: '20 mins',
      content: `<h2>Which Spec Are You Sitting?</h2>
<p>Before revising, make absolutely sure you know which specification you're studying. The two Edexcel IGCSE English Language specifications are <strong>completely different exams</strong>.</p>

<h3>Quick Comparison</h3>
<ul>
<li><strong>Spec A (4EA1):</strong> Two papers (2h15m + 1h30m), anthology of 20 texts, coursework option available</li>
<li><strong>Spec B (4EB1):</strong> One paper (3h), all unseen texts, no coursework, includes unique "directed writing" question</li>
</ul>

<div class="key-term"><strong>Key Difference:</strong> Spec A is built around an anthology — you study 20 texts in advance. Spec B has no set texts at all — everything is unseen.</div>

<h3>Spec A at a Glance</h3>
<p>Component 1 (60%): Non-fiction anthology reading + transactional writing. Component 2/3 (40%): Poetry/prose anthology reading + imaginative writing (exam or coursework).</p>

<h3>Spec B at a Glance</h3>
<p>One paper with three sections: A — Reading (40 marks), B — Directed writing (30 marks), C — Free writing: discursive, narrative, or descriptive (30 marks).</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Check your exam entry statement or ask your teacher. The specification code is printed on your exam paper: 4EA1 for Spec A, 4EB1 for Spec B.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Revising the wrong specification. If you're doing Spec A, you MUST study the anthology texts. If you're doing Spec B, spending time memorising anthology texts is wasted effort.</div>`,
      quiz: [
        { id: 'eir-m1-q1', question: 'How many papers does Spec A have?', options: ['1', '2', '3', '4'], correct: 1, explanation: 'Spec A has two components: Component 1 (2h15m, 60%) and Component 2 or 3 (1h30m or coursework, 40%).' },
        { id: 'eir-m1-q2', question: 'What is unique to Spec B?', options: ['An anthology', 'Coursework', 'A directed writing question combining reading and writing', 'Poetry analysis'], correct: 2, explanation: 'Spec B\'s Q8 is a "directed writing" task where you must use ideas from the source texts in your writing — unique to this specification.' },
        { id: 'eir-m1-q3', question: 'How long is the Spec B exam?', options: ['1h 30m', '2h 15m', '3 hours', '3h 45m'], correct: 2, explanation: 'Spec B is a single 3-hour exam. Spec A has two papers totalling 3h 45m.' },
        { id: 'eir-m1-q4', question: 'Does Spec B have an anthology?', options: ['Yes — 20 texts', 'Yes — 10 texts', 'No', 'Optional'], correct: 2, explanation: 'Spec B has no anthology. All texts are unseen.' },
      ],
    },
    {
      id: 'eir-m2',
      title: 'Reading Skills Blitz',
      duration: '30 mins',
      content: `<h2>Essential Reading Skills for Both Specs</h2>
<p>Whether you're sitting Spec A or B, the core reading skills are the same. Here's your quick-fire revision of everything you need.</p>

<h3>Retrieval (AO1)</h3>
<p>Find information. Quote it. Move on. Don't overthink 1-2 mark questions.</p>

<h3>Language Analysis (AO2)</h3>
<p>Use the <strong>WHAT-HOW-WHY</strong> method:</p>
<ul>
<li><strong>WHAT:</strong> Name the technique (e.g., metaphor, sibilance)</li>
<li><strong>HOW:</strong> Quote and explain how it works</li>
<li><strong>WHY:</strong> What effect does it have on the reader?</li>
</ul>

<h3>Structural Analysis (AO2)</h3>
<p>Look for: opening hooks, shifts in tone/pace/focus, paragraph length changes, circular structures, climactic moments.</p>

<h3>Comparison (AO3)</h3>
<p>Always compare within paragraphs. Use connectives: "similarly," "in contrast," "whereas," "conversely." Compare methods, not just content.</p>

<div class="model-answer"><strong>Quick WHAT-HOW-WHY Example:</strong> The writer uses alliterative sibilance — "the sea <em>sighed</em> and <em>shifted</em> against the <em>shore</em>." The repeated 's' sound mimics the gentle, rhythmic movement of waves, creating a calm, soothing atmosphere that reflects the speaker's sense of peace.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> In every reading answer, the golden rule is: QUOTE → TECHNIQUE → EFFECT. If you can do this consistently, you will score well on any reading question on either specification.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing "this makes the reader want to read on" as your effect analysis. This is too vague. Be specific: what emotion, reaction, or understanding does the technique create?</div>`,
      quiz: [
        { id: 'eir-m2-q1', question: 'What does WHAT-HOW-WHY stand for?', options: ['What happened, How it ended, Why it matters', 'What technique, How it works (with quote), Why it affects the reader', 'What the text is about, How long it is, Why it was written', 'What to write, How to plan, Why to check'], correct: 1, explanation: 'WHAT = identify the technique, HOW = quote and explain the mechanism, WHY = analyse the effect on the reader.' },
        { id: 'eir-m2-q2', question: 'When comparing two texts, what should you avoid?', options: ['Using connectives', 'Writing about both texts in the same paragraph', 'Writing about one text fully, then the other fully', 'Discussing writers\' methods'], correct: 2, explanation: 'Writing about one text then the other is description, not comparison. You must compare within each paragraph using connectives.' },
        { id: 'eir-m2-q3', question: 'What is a structural feature?', options: ['A metaphor', 'A shift in tone or pace', 'Alliteration', 'A simile'], correct: 1, explanation: 'Structural features relate to how the text is organised: shifts in tone, pace changes, paragraph structure, openings/endings, flashbacks, etc.' },
        { id: 'eir-m2-q4', question: 'What is too vague as an "effect" in your analysis?', options: ['"The reader feels the character\'s isolation"', '"This creates a tense atmosphere"', '"This makes the reader want to read on"', '"The reader sympathises with the narrator"'], correct: 2, explanation: '"Makes the reader want to read on" is generic and could apply to anything. Be specific about what emotion or reaction the technique produces.' },
      ],
    },
    {
      id: 'eir-m3',
      title: 'Writing Skills Blitz',
      duration: '30 mins',
      content: `<h2>Essential Writing Skills for Both Specs</h2>

<h3>Transactional Writing (Articles, Speeches, Letters)</h3>
<p>Remember <strong>AFOREST</strong> for persuasive techniques:</p>
<ul>
<li><strong>A</strong>necdote — personal stories to connect</li>
<li><strong>F</strong>acts — real or plausible statistics</li>
<li><strong>O</strong>pinion — stated confidently</li>
<li><strong>R</strong>hetorical questions — engage the reader</li>
<li><strong>E</strong>motive language — appeal to feelings</li>
<li><strong>S</strong>tatistics — numbers add authority</li>
<li><strong>T</strong>riple/rule of three — "faster, stronger, smarter"</li>
</ul>

<h3>Creative Writing (Narrative & Descriptive)</h3>
<p>Five techniques that instantly elevate your writing:</p>
<ul>
<li>Open with action or dialogue, not "It was a normal day"</li>
<li>Use all five senses — don't rely only on sight</li>
<li>Vary sentence length deliberately — long for atmosphere, short for impact</li>
<li>End with a twist, echo, or powerful image</li>
<li>Show emotion through action: "She gripped the railing" not "She was scared"</li>
</ul>

<div class="key-term"><strong>Key Term: Register</strong> — The level of formality in your writing. A letter to a headteacher is formal ("I write to express my concern..."). A magazine article for teenagers is semi-formal ("Here's the thing nobody tells you..."). Match your register to your audience.</div>

<div class="model-answer"><strong>Quick SPaG Checklist:</strong> 1) No comma splices (use full stops or semicolons). 2) Apostrophes: it's = it is, its = belonging to it. 3) Their/there/they're. 4) Semicolons join two related sentences. 5) Colons introduce a list or explanation.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> SPaG (AO5/AO6) is worth up to 20% of your total grade. Spending 5 minutes proofreading at the end of every writing task is the single easiest way to gain marks.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Using overly complex vocabulary that you can't spell correctly. It's better to use a word you know well than to attempt an impressive word and misspell it.</div>`,
      quiz: [
        { id: 'eir-m3-q1', question: 'What does AFOREST stand for?', options: ['A type of poem structure', 'Anecdote, Facts, Opinion, Rhetorical questions, Emotive language, Statistics, Triple', 'A forest metaphor for essays', 'An exam timing strategy'], correct: 1, explanation: 'AFOREST is a mnemonic for persuasive writing techniques: Anecdote, Facts, Opinion, Rhetorical questions, Emotive language, Statistics, Triple (rule of three).' },
        { id: 'eir-m3-q2', question: 'What percentage of the total grade does SPaG contribute?', options: ['5%', '10%', '15%', '20%'], correct: 3, explanation: 'SPaG (AO5/AO6) contributes approximately 20% of the total IGCSE grade. Proofreading is essential.' },
        { id: 'eir-m3-q3', question: 'What is a comma splice?', options: ['Using too many commas', 'Joining two sentences with only a comma instead of a full stop or conjunction', 'Putting a comma after every word', 'Using commas in a list'], correct: 1, explanation: 'A comma splice incorrectly joins two independent clauses with just a comma. Fix it with a full stop, semicolon, or conjunction.' },
        { id: 'eir-m3-q4', question: 'What is "register" in writing?', options: ['A list of students', 'The level of formality matching your audience', 'A type of paragraph structure', 'The register you sign at reception'], correct: 1, explanation: 'Register is the level of formality in your writing. It must match your audience — formal for professionals, semi-formal for peers.' },
      ],
    },
    {
      id: 'eir-m4',
      title: 'Anthology Quick Reference',
      duration: '25 mins',
      content: `<h2>Spec A: All 20 Texts at a Glance</h2>
<p>If you're sitting Spec A, here is your rapid-fire guide to all 20 anthology texts.</p>

<h3>Part 1: Non-Fiction (Component 1)</h3>
<ul>
<li><strong>Adichie</strong> — Single Story: stereotypes, power of narrative, anecdote-driven speech</li>
<li><strong>Alagiah</strong> — Passage to Africa: guilt, suffering, emotional journalism</li>
<li><strong>Herbert</strong> — Explorer's Daughter: cultural conflict, hunting, dual perspective</li>
<li><strong>Morris</strong> — Explorers: satire, mocking tone, newspaper conventions</li>
<li><strong>Ralston</strong> — 127 Hours: survival, visceral language, present-tense urgency</li>
<li><strong>Zephaniah</strong> — Young and Dyslexic: empowerment, conversational tone, positive reframing</li>
<li><strong>Levine</strong> — Polo/Headless Goat: excitement, sensory overload, travel writing</li>
<li><strong>Zeppa</strong> — Beyond the Sky: culture shock, wonder, reflective memoir</li>
<li><strong>Macdonald</strong> — H is for Hawk: grief, nature, lyrical prose</li>
<li><strong>Yen Mah</strong> — Chinese Cinderella: isolation, family cruelty, childhood voice</li>
</ul>

<h3>Part 2: Poetry and Prose (Component 2/3)</h3>
<ul>
<li><strong>Owen, "Disabled"</strong> — Loss, contrast past/present, anti-war</li>
<li><strong>Frost, "Out, Out—"</strong> — Death of a child, indifference, Macbeth allusion</li>
<li><strong>Alvi, "An Unknown Girl"</strong> — Identity, belonging, repetitive refrain</li>
<li><strong>Harrison, "Bright Lights of Sarajevo"</strong> — War/peace contrast, resilience</li>
<li><strong>Angelou, "Still I Rise"</strong> — Defiance, empowerment, rhetorical power</li>
<li><strong>Chopin, "Story of an Hour"</strong> — Freedom, irony, repression</li>
<li><strong>Maupassant, "The Necklace"</strong> — Social ambition, dramatic irony</li>
<li><strong>Tremain, "Significant Cigarettes"</strong> — Migration, nostalgia, sensory detail</li>
<li><strong>Hill, "Whistle and I'll Come"</strong> — Gothic horror, atmosphere, tension</li>
<li><strong>Munro, "Night"</strong> — Family, understated emotion, domestic realism</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> For each text, memorise: 1) The writer's purpose, 2) Two key techniques, 3) One structural feature. That's enough to write a strong exam answer since the text is reprinted.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Only revising your favourite texts. Any of the 20 could appear. Ensure you have notes on ALL of them.</div>`,
      quiz: [
        { id: 'eir-m4-q1', question: 'Which anthology text uses satire and a mocking tone?', options: ['A Passage to Africa', 'Explorers, or boys messing about?', '127 Hours', 'H is for Hawk'], correct: 1, explanation: '"Explorers, or boys messing about?" by Steven Morris uses a satirical, mocking tone typical of newspaper opinion pieces.' },
        { id: 'eir-m4-q2', question: 'What literary technique is central to "The Necklace"?', options: ['Pathetic fallacy', 'Dramatic irony', 'Stream of consciousness', 'Onomatopoeia'], correct: 1, explanation: '"The Necklace" revolves around dramatic irony — the reader eventually learns that the borrowed necklace was fake, making the years of repayment tragically unnecessary.' },
        { id: 'eir-m4-q3', question: 'Which poem alludes to Shakespeare\'s Macbeth in its title?', options: ['Still I Rise', 'Disabled', 'An Unknown Girl', 'Out, Out—'], correct: 3, explanation: '"Out, Out—" alludes to Macbeth\'s soliloquy: "Out, out, brief candle!" connecting to the poem\'s theme of life\'s fragility.' },
        { id: 'eir-m4-q4', question: 'How many anthology texts should you revise for Spec A?', options: ['5 (your favourites)', '10 (Part 1 only)', '15', 'All 20'], correct: 3, explanation: 'You must revise all 20 — any of the 10 Part 1 texts could appear on Component 1, and any of the 10 Part 2 texts could appear on Component 2.' },
      ],
    },
    {
      id: 'eir-m5',
      title: 'Model Answers at Every Grade',
      duration: '30 mins',
      content: `<h2>What Each Grade Band Looks Like</h2>
<p>Understanding the difference between grade bands helps you target the next level up.</p>

<h3>Grade 4-5 Answer (Adequate)</h3>
<div class="model-answer"><strong>Example:</strong> "The writer uses a simile to describe the landscape. He says it is 'like a painting.' This shows that the landscape is beautiful and the writer likes looking at it."</div>
<p>This identifies a technique and gives a basic explanation but doesn't explore connotations, effects, or the writer's purpose in any depth.</p>

<h3>Grade 6-7 Answer (Good)</h3>
<div class="model-answer"><strong>Example:</strong> "The writer employs a simile, comparing the landscape to 'a painting left unfinished,' suggesting a sense of incompleteness and perhaps loss. The word 'unfinished' implies something interrupted or abandoned, which mirrors the writer's own sense of displacement."</div>
<p>This explores connotations ("unfinished"), links to a wider theme (displacement), and begins to analyse word-level choices.</p>

<h3>Grade 8-9 Answer (Excellent)</h3>
<div class="model-answer"><strong>Example:</strong> "The simile 'a painting left unfinished' operates on multiple levels. On the surface, it evokes the visual beauty of the landscape, but the modifier 'unfinished' subverts this — beauty here is tainted by absence. Structurally, this image appears at the midpoint of the passage, marking a tonal shift from admiration to melancholy. The writer's choice to frame nature through art suggests detachment; she observes rather than inhabits, positioning herself as a spectator of a life she can no longer claim."</div>
<p>This analyses multiple layers, discusses structural placement, explores the writer's purpose, and uses sophisticated critical vocabulary.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The jump from Grade 5 to Grade 7 is mainly about depth — don't just identify techniques, explore their connotations and link to the writer's purpose. The jump from 7 to 9 adds structural awareness and multiple interpretations.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Thinking you need complicated vocabulary to reach Grade 8-9. You need sophisticated THINKING, not complicated words. A clear, insightful point using simple language beats a muddled point using impressive words.</div>`,
      quiz: [
        { id: 'eir-m5-q1', question: 'What is the main difference between a Grade 5 and Grade 7 answer?', options: ['Length', 'Depth of analysis — exploring connotations and linking to themes', 'Using more quotations', 'Better handwriting'], correct: 1, explanation: 'Grade 7 answers go beyond identifying techniques to explore connotations, word-level choices, and how they connect to wider themes or the writer\'s purpose.' },
        { id: 'eir-m5-q2', question: 'What extra skill does a Grade 8-9 answer demonstrate?', options: ['Using longer quotations', 'Multiple interpretations and structural awareness', 'Writing more pages', 'Memorising more techniques'], correct: 1, explanation: 'Grade 8-9 answers analyse on multiple levels, consider structural placement, offer alternative interpretations, and show sophisticated critical thinking.' },
        { id: 'eir-m5-q3', question: 'Do you need complex vocabulary for Grade 8-9?', options: ['Yes — use the longest words possible', 'No — you need sophisticated thinking, not complicated words', 'Yes — the examiner counts vocabulary length', 'No — simple sentences are always best'], correct: 1, explanation: 'Sophisticated analysis with clear language always beats muddled points dressed in impressive vocabulary. The examiner assesses thinking quality, not word length.' },
        { id: 'eir-m5-q4', question: 'What does "exploring connotations" mean?', options: ['Looking up definitions', 'Analysing the associations and implied meanings of specific words', 'Counting syllables', 'Translating into another language'], correct: 1, explanation: 'Exploring connotations means examining what a word suggests beyond its literal meaning — the feelings, associations, and implications it carries.' },
      ],
    },
    {
      id: 'eir-m6',
      title: 'The Night Before: Final Checklist',
      duration: '15 mins',
      content: `<h2>Last-Minute Exam Preparation</h2>
<p>The night before your exam is <strong>not the time to learn new material</strong>. It is the time to consolidate what you already know and prepare practically.</p>

<h3>Equipment Checklist</h3>
<ul>
<li>Black pens (at least two — one will always run out)</li>
<li>Highlighter for annotating texts in the exam</li>
<li>Watch or clock (phones not allowed)</li>
<li>Water bottle (check exam rules)</li>
<li>Student ID / exam card</li>
</ul>

<h3>Quick Revision Tasks (30 mins max)</h3>
<ul>
<li><strong>Spec A:</strong> Flick through your anthology notes — one keyword per text</li>
<li><strong>Spec B:</strong> Review the Section C writing options (discursive, narrative, descriptive) and remind yourself which you're strongest at</li>
<li><strong>Both specs:</strong> Write one WHAT-HOW-WHY paragraph on any text extract to warm up your analytical brain</li>
</ul>

<div class="key-term"><strong>Key Term: Exam tempo</strong> — The pace at which you work through the paper. Knowing exactly how many minutes per question prevents panic and ensures you finish.</div>

<h3>Timing Reminders</h3>
<p><strong>Spec A Component 1 (2h 15m):</strong> Section A 1h 30m (Q1-Q3: 10 min, Q4: 20 min, Q5: 30 min, reading: 15 min) + Section B 45m.</p>
<p><strong>Spec A Component 2 (1h 30m):</strong> Section A 45m + Section B 45m.</p>
<p><strong>Spec B (3h):</strong> Section A 1h + Section B 1h + Section C 1h.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Write your timing on the front of the exam paper as soon as it starts. For example: "Section A finish by 10:00. Section B finish by 10:45." This keeps you on track without checking constantly.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Staying up until midnight cramming. Sleep is more valuable than extra revision. A tired brain cannot analyse text, plan essays, or proofread effectively. Get 8 hours.</div>`,
      quiz: [
        { id: 'eir-m6-q1', question: 'What should you spend the night before doing?', options: ['Learning new material', 'Consolidating what you know and preparing practically', 'Reading the entire anthology cover to cover', 'Writing full practice essays'], correct: 1, explanation: 'The night before is for consolidation (brief review of key points) and practical preparation (equipment, timing reminders). Not new learning.' },
        { id: 'eir-m6-q2', question: 'How should you start the exam?', options: ['Dive straight into Question 1', 'Read the whole paper first', 'Write your timing plan on the front of the paper', 'Ask the invigilator for help'], correct: 2, explanation: 'Writing timing targets on the front of your paper helps you pace yourself throughout the exam without constantly watching the clock.' },
        { id: 'eir-m6-q3', question: 'How long do you have for Spec B Section C?', options: ['30 minutes', '45 minutes', '1 hour', '1 hour 30 minutes'], correct: 2, explanation: 'Spec B Section C is advised at 1 hour out of the 3-hour total.' },
        { id: 'eir-m6-q4', question: 'What is more valuable than extra revision the night before?', options: ['More practice essays', 'Sleep', 'Re-reading the specification', 'Watching a film'], correct: 1, explanation: 'Sleep is critical for cognitive function. A well-rested brain analyses text, plans essays, and proofreads far better than a tired one.' },
      ],
    },
  ],
  assessmentQuestions: [
    { id: 'eir-a1', question: 'What is the code for Edexcel IGCSE English Language Specification A?', options: ['4EB1', '4EA1', '1EN2', '8700'], correct: 1, explanation: 'Spec A is coded 4EA1.' },
    { id: 'eir-a2', question: 'How many anthology texts are in Spec A?', options: ['10', '15', '20', '25'], correct: 2, explanation: 'Spec A has 20 anthology texts: 10 non-fiction in Part 1 and 10 poetry/prose in Part 2.' },
    { id: 'eir-a3', question: 'Does Spec B have an anthology?', options: ['Yes', 'No', 'Optional', 'Only for coursework'], correct: 1, explanation: 'Spec B has no anthology — all texts are unseen.' },
    { id: 'eir-a4', question: 'What is the total exam time for Spec A?', options: ['2 hours', '3 hours', '3 hours 45 minutes', '4 hours'], correct: 2, explanation: 'Spec A has Component 1 (2h 15m) + Component 2 (1h 30m) = 3 hours 45 minutes total.' },
    { id: 'eir-a5', question: 'What is the total exam time for Spec B?', options: ['2 hours', '3 hours', '3 hours 45 minutes', '4 hours'], correct: 1, explanation: 'Spec B is a single 3-hour exam.' },
    { id: 'eir-a6', question: 'Which AO does the comparison question test?', options: ['AO1', 'AO2', 'AO3', 'AO4'], correct: 2, explanation: 'AO3 tests the ability to compare writers\' ideas and perspectives across texts.' },
    { id: 'eir-a7', question: 'What is WHAT-HOW-WHY?', options: ['An essay structure', 'A paragraph structure for language analysis', 'A timing strategy', 'A revision method'], correct: 1, explanation: 'WHAT (identify technique) — HOW (quote and explain) — WHY (analyse effect on reader). It\'s the core paragraph structure for analysis.' },
    { id: 'eir-a8', question: 'What is "feature spotting"?', options: ['A good exam skill', 'Listing techniques without analysing their effects', 'Finding structural features', 'Spotting errors in the text'], correct: 1, explanation: 'Feature spotting means identifying techniques without explaining their effect — it scores very low marks.' },
    { id: 'eir-a9', question: 'What is AFOREST?', options: ['A poem in the anthology', 'A mnemonic for persuasive writing techniques', 'A type of text structure', 'An exam board'], correct: 1, explanation: 'Anecdote, Facts, Opinion, Rhetorical questions, Emotive language, Statistics, Triple — persuasive techniques for transactional writing.' },
    { id: 'eir-a10', question: 'How much does SPaG contribute to the overall grade?', options: ['5%', '10%', '15%', '20%'], correct: 3, explanation: 'SPaG (AO5/AO6) contributes approximately 20% of the total IGCSE grade.' },
    { id: 'eir-a11', question: 'What is the main jump from Grade 5 to Grade 7?', options: ['Writing more', 'Depth of analysis and exploring connotations', 'Using more quotations', 'Better handwriting'], correct: 1, explanation: 'Grade 7 requires going beyond identification to explore connotations, word-level choices, and connections to themes.' },
    { id: 'eir-a12', question: 'What extra skill characterises Grade 8-9?', options: ['Longer answers', 'Multiple interpretations and structural awareness', 'More techniques named', 'Perfect spelling'], correct: 1, explanation: 'Grade 8-9 shows sophisticated thinking: multiple layers of meaning, structural analysis, alternative interpretations.' },
    { id: 'eir-a13', question: 'In Spec A, which component is worth 60%?', options: ['Component 1', 'Component 2', 'Component 3', 'They are equal'], correct: 0, explanation: 'Component 1 (non-fiction reading + transactional writing) is worth 60% of the total IGCSE.' },
    { id: 'eir-a14', question: 'What forms can Spec A transactional writing take?', options: ['Short story or poem', 'Article, speech, letter, guide, review', 'Academic essay only', 'Any form'], correct: 1, explanation: 'Component 1 Section B permits: articles, speeches, letters, guides, and reviews.' },
    { id: 'eir-a15', question: 'How many options does Spec B Section C give you?', options: ['1', '2', '3', '4'], correct: 2, explanation: 'Three options: discursive (Q9), narrative (Q10), or descriptive (Q11).' },
    { id: 'eir-a16', question: 'What is directed writing (Spec B Q8)?', options: ['A dictation exercise', 'Writing that draws on ideas from the reading texts', 'Copying the source texts', 'Writing directions'], correct: 1, explanation: 'Directed writing requires you to use ideas from the source texts in a new piece of writing for a specific purpose and audience.' },
    { id: 'eir-a17', question: 'Which Spec A text is about the Siege of Sarajevo?', options: ['A Passage to Africa', 'The Bright Lights of Sarajevo', '127 Hours', 'Disabled'], correct: 1, explanation: '"The Bright Lights of Sarajevo" by Tony Harrison is a poem about everyday life continuing during the siege of Sarajevo.' },
    { id: 'eir-a18', question: 'What is the best scope for a narrative piece in a timed exam?', options: ['An epic spanning years', 'A single moment or scene', 'A full biography', 'Multiple storylines'], correct: 1, explanation: 'Focusing on a single moment allows you to develop it richly. Ambitious scope leads to shallow writing in timed conditions.' },
    { id: 'eir-a19', question: 'What should you write on the front of your exam paper?', options: ['Your name only', 'Your timing plan for each section', 'A prayer', 'Nothing'], correct: 1, explanation: 'Writing timing targets (e.g., "Section A finish by 10:00") keeps you on track without constantly checking the clock.' },
    { id: 'eir-a20', question: 'What is more valuable than midnight cramming?', options: ['More flashcards', 'Sleep', 'Re-reading the anthology', 'Writing practice essays'], correct: 1, explanation: 'Sleep is essential for cognitive function. A well-rested brain performs significantly better in exams than an exhausted one.' },
  ],
};

export { edexcelIgcseLangA, edexcelIgcseLangB, edexcelIgcseLangRevision };
export default [edexcelIgcseLangA, edexcelIgcseLangB, edexcelIgcseLangRevision];
