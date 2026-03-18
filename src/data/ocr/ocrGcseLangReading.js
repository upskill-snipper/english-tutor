// OCR GCSE English Language — Reading Skills (J351)
// All content is OCR GCSE-specific — NOT AQA, NOT Edexcel

const ocrGcseLangReading = {
  id: 'ocr-gcse-lang-reading',
  title: 'OCR GCSE Language: Reading',
  subtitle: 'Master reading skills across both OCR English Language components.',
  tier: 'GCSE',
  board: 'OCR',
  specCode: 'J351',
  price: 49,
  duration: '7-9 hours',
  level: 'GCSE (Years 10-11)',
  description: 'Complete preparation for OCR GCSE English Language reading skills across both components.',
  color: '#7c3aed',
  moduleList: [
    {
      id: 'ocr-lr-m1',
      title: 'Component 01 Q1: Retrieval from 19th-Century Texts',
      duration: '25 mins',
      content: `<h2>Q1: Retrieve Information from a 19th-Century Text</h2>
<p>Question 1 on Component 01 (Communicating Information and Ideas) is your entry point to the paper. You are given a <strong>19th-century non-fiction text</strong> and asked to retrieve specific information. Q1 is split into <strong>sub-parts (a), (b), and (c)</strong>, worth roughly <strong>4 marks total</strong>. Each sub-part asks you to find a fact, detail, or phrase directly from the text.</p>

<div class="key-term"><strong>Key Term: Retrieval</strong> — Locating and selecting specific information from the text without adding interpretation or analysis. You are simply finding what the writer states explicitly.</div>

<h3>What the Sub-Parts Look Like</h3>
<p>Each sub-part pinpoints a narrow area of the text:</p>
<ul>
<li><strong>Q1(a):</strong> Identify one reason / detail / fact from a specified paragraph (1 mark)</li>
<li><strong>Q1(b):</strong> State what the writer says about a particular topic from a given line range (1 mark)</li>
<li><strong>Q1(c):</strong> Give two things the reader learns about a subject from a wider section (2 marks)</li>
</ul>

<div class="text-extract">"From paragraph 2, identify one reason the writer gives for opposing the new railway."<div class="source">Example Q1(a) in the style of OCR Component 01</div></div>

<h3>How to Answer</h3>
<p>Keep it simple. Read the specified lines, find the exact information, and write a concise response. You do not need to quote — a brief, accurate statement is enough. For 2-mark sub-parts, give two separate points.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Q1 should take no more than 5 minutes. These are the easiest marks on the paper — do not overthink them. Find the information, write it down, move on to the higher-tariff questions.</div>

<h3>19th-Century Language</h3>
<p>The text will use older vocabulary and sentence structures. Don't panic — the retrieval questions test whether you can navigate this language to find facts. You do not need to understand every word; focus on the specific lines indicated.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing analytical paragraphs for Q1. This is pure retrieval — no analysis of language or structure is needed. Students who write too much here waste time they need for Q3 and Q4.</div>`,
      quiz: [
        { id: 'ocr-lr-m1-q1', question: 'How many sub-parts does Q1 on Component 01 typically have?', options: ['1', '2', '3', '5'], correct: 2, explanation: 'Q1 is split into sub-parts (a), (b), and (c), each targeting specific information from the 19th-century text.' },
        { id: 'ocr-lr-m1-q2', question: 'How many marks is Q1 worth in total?', options: ['2 marks', '4 marks', '6 marks', '8 marks'], correct: 1, explanation: 'Q1 is worth approximately 4 marks total across its sub-parts — it is a low-tariff retrieval question.' },
        { id: 'ocr-lr-m1-q3', question: 'What type of text appears in Component 01?', options: ['20th-century fiction', '19th-century non-fiction and a 20th/21st-century text', 'Poetry', 'Drama'], correct: 1, explanation: 'Component 01 pairs a 19th-century non-fiction text with a 20th- or 21st-century non-fiction text.' },
        { id: 'ocr-lr-m1-q4', question: 'What skill does Q1 primarily test?', options: ['Language analysis', 'Evaluation', 'Retrieval of information', 'Comparison'], correct: 2, explanation: 'Q1 tests retrieval — your ability to locate and select specific information directly from the text without interpretation.' },
      ],
    },
    {
      id: 'ocr-lr-m2',
      title: 'Component 01 Q2: Synthesis Across Two Texts',
      duration: '30 mins',
      content: `<h2>Q2: Synthesise Information from Both Texts</h2>
<p>Question 2 is worth <strong>6 marks</strong> and requires you to <strong>draw on both texts</strong> to answer a specific question. This is a synthesis task — you must show you can pull together relevant information from two different sources and present it coherently.</p>

<div class="key-term"><strong>Key Term: Synthesis</strong> — Combining information from two or more sources to produce a unified response. Unlike comparison, synthesis focuses on gathering and organising relevant details rather than analysing differences in method.</div>

<h3>What the Question Looks Like</h3>
<div class="text-extract">"Using details from both texts, explain what you learn about attitudes towards city life in the 19th century and today."<div class="source">Example Q2 in the style of OCR Component 01</div></div>

<h3>How to Structure Your Answer</h3>
<p>A clear, organised response works best:</p>
<ul>
<li><strong>Point 1:</strong> Information from Text 1 (the 19th-century source) — e.g., "In the 19th-century text, the writer explains that..."</li>
<li><strong>Point 2:</strong> Related information from Text 2 (the modern source) — e.g., "Similarly, the modern text states that..."</li>
<li><strong>Point 3:</strong> A further detail from Text 1</li>
<li><strong>Point 4:</strong> A further detail from Text 2</li>
</ul>
<p>Aim for <strong>at least three well-supported points</strong> drawing on both texts. You can interweave the texts or alternate — the key is that both are represented.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The examiner is looking for breadth across both texts. Students who only use one text, or who heavily favour one over the other, cannot access the top marks. Make sure you give roughly equal attention to each source.</div>

<h3>Synthesis vs Comparison</h3>
<p>Q2 is NOT asking you to compare the writers' methods or techniques. It asks you to gather and present information. Save your analytical comparison skills for Q4.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Turning Q2 into a language analysis question. Students start writing about metaphors and tone when the question simply wants them to explain what they learn from both texts. Stick to content and information.</div>

<div class="model-answer"><strong>Model Response (Extract):</strong> From Text 1, the reader learns that 19th-century city dwellers faced overcrowded housing, with the writer noting that "twelve souls occupied a single room." Text 2 reinforces that housing remains a concern, explaining that modern city tenants spend over half their income on rent. Both texts suggest that city life places enormous pressure on living conditions, though the specific challenges have shifted from physical overcrowding to financial strain.</div>`,
      quiz: [
        { id: 'ocr-lr-m2-q1', question: 'How many marks is Q2 worth?', options: ['4 marks', '6 marks', '8 marks', '12 marks'], correct: 1, explanation: 'Q2 is worth 6 marks. It tests your ability to synthesise information from both the 19th-century and modern texts.' },
        { id: 'ocr-lr-m2-q2', question: 'What does "synthesis" mean in the context of Q2?', options: ['Analysing language techniques', 'Combining information from two sources into a unified response', 'Writing a creative response', 'Evaluating the writer\'s effectiveness'], correct: 1, explanation: 'Synthesis means pulling together relevant information from both texts and presenting it coherently — not analysing techniques.' },
        { id: 'ocr-lr-m2-q3', question: 'What is the most common mistake on Q2?', options: ['Writing too little', 'Only using one text', 'Using too many quotations', 'Writing in bullet points'], correct: 1, explanation: 'Students often focus heavily on one text and barely reference the other. Both texts must be used roughly equally to access the full 6 marks.' },
        { id: 'ocr-lr-m2-q4', question: 'Should you analyse language techniques in Q2?', options: ['Yes — this is required for full marks', 'No — Q2 asks for information, not language analysis', 'Only for the 19th-century text', 'Only if the question mentions language'], correct: 1, explanation: 'Q2 is about gathering and presenting information from both texts. Language analysis is tested in Q3 and comparison in Q4.' },
      ],
    },
    {
      id: 'ocr-lr-m3',
      title: 'Component 01 Q3: Language & Structure Analysis',
      duration: '40 mins',
      content: `<h2>Q3: Analyse Language and Structure (12 marks)</h2>
<p>Question 3 is the first high-tariff reading question on Component 01, worth <strong>12 marks</strong>. It targets the <strong>20th- or 21st-century text</strong> and asks you to analyse how the writer uses language and/or structure to achieve specific effects.</p>

<div class="key-term"><strong>Key Term: AO2 (Assessment Objective 2)</strong> — Explain, comment on, and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology to support your views.</div>

<h3>What the Question Looks Like</h3>
<div class="text-extract">"How does the writer use language and structure to convey a sense of danger in Source B? Support your views with detailed reference to the text."<div class="source">Example Q3 in the style of OCR Component 01</div></div>

<h3>The WHAT-HOW-WHY Approach</h3>
<p>Structure every analytical paragraph around three steps:</p>
<ul>
<li><strong>WHAT:</strong> Identify the technique or language feature (e.g., metaphor, short sentence, shift in focus)</li>
<li><strong>HOW:</strong> Embed a quotation and explain how the device works</li>
<li><strong>WHY:</strong> Analyse the effect on the reader — what do they feel, picture, or understand?</li>
</ul>

<div class="model-answer"><strong>Model Paragraph:</strong> The writer creates a visceral sense of danger through the metaphor "the river swallowed the bank whole." The verb "swallowed" personifies the river as a predatory creature consuming the landscape, suggesting unstoppable, destructive power. The reader is positioned to feel helpless against a force that devours solid ground, intensifying the threat and making the natural world feel hostile and alive.</div>

<h3>Don't Forget Structure</h3>
<p>Many students only analyse language. The question says "language AND structure" — address both:</p>
<ul>
<li>How does the opening hook the reader?</li>
<li>Are there shifts in pace, tone, or focus?</li>
<li>Does the writer use short paragraphs or sentences for emphasis?</li>
<li>How does the ending resolve or complicate the piece?</li>
<li>Is there a contrast between sections?</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Aim for 4 well-developed WHAT-HOW-WHY paragraphs (2-3 on language, 1-2 on structure). Quality of analysis matters far more than the number of points. A single paragraph that explores connotations and alternative interpretations can score more than three surface-level observations.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Feature spotting — naming a technique without analysing its effect. Writing "the writer uses alliteration" earns almost nothing. You must explain what the alliteration does and how it shapes the reader's response.</div>`,
      quiz: [
        { id: 'ocr-lr-m3-q1', question: 'How many marks is Q3 worth on Component 01?', options: ['6 marks', '8 marks', '12 marks', '18 marks'], correct: 2, explanation: 'Q3 is worth 12 marks and is the first high-tariff analytical question on the paper.' },
        { id: 'ocr-lr-m3-q2', question: 'Which text does Q3 target?', options: ['The 19th-century text', 'The 20th/21st-century text', 'Both texts', 'An unseen poem'], correct: 1, explanation: 'Q3 focuses on the modern (20th/21st-century) text, asking you to analyse its language and structure.' },
        { id: 'ocr-lr-m3-q3', question: 'What does "feature spotting" mean?', options: ['A strong analytical technique', 'Naming techniques without explaining their effect on the reader', 'Finding hidden features in the text', 'Spotting structural patterns'], correct: 1, explanation: 'Feature spotting is listing techniques (e.g., "the writer uses a simile") without explaining their effect — it scores very poorly.' },
        { id: 'ocr-lr-m3-q4', question: 'How many WHAT-HOW-WHY paragraphs should you aim for in Q3?', options: ['1-2', '4 well-developed paragraphs', '6-8 brief paragraphs', '10 short points'], correct: 1, explanation: 'Aim for around 4 well-developed paragraphs covering both language and structure. Quality analysis always outscores rushed quantity.' },
      ],
    },
    {
      id: 'ocr-lr-m4',
      title: 'Component 01 Q4: Evaluative Comparison',
      duration: '45 mins',
      content: `<h2>Q4: Compare and Evaluate Both Texts (18 marks)</h2>
<p>Question 4 is the <strong>highest-value reading question</strong> on Component 01, worth <strong>18 marks</strong>. It asks you to compare how the two writers convey their ideas and perspectives, and to evaluate their effectiveness. This tests AO3 (comparison) and elements of AO1 and AO2.</p>

<div class="key-term"><strong>Key Term: Evaluation</strong> — Making a judgement about how effectively a writer achieves their purpose. This goes beyond analysis — you assess whether the techniques work well and explain why. Use phrases like "this is effective because..." or "the writer succeeds in... by..."</div>

<h3>What the Question Looks Like</h3>
<div class="text-extract">"Compare how the writers of Source A and Source B convey their different attitudes to education. In your answer you should: compare the writers' ideas and perspectives; compare the methods used to convey those ideas; support your response with quotations from both texts."<div class="source">Example Q4 in the style of OCR Component 01</div></div>

<h3>The Alternating Comparison Structure</h3>
<p>Write comparatively within every paragraph — never write about one text in isolation:</p>
<ul>
<li><strong>Opening sentence:</strong> Identify a point of comparison (similarity or contrast)</li>
<li><strong>Writer A:</strong> Evidence + analysis of method and effect</li>
<li><strong>Connective:</strong> "In contrast..." / "Similarly..." / "However..."</li>
<li><strong>Writer B:</strong> Evidence + analysis of method and effect</li>
<li><strong>Evaluative comment:</strong> Which approach is more effective and why?</li>
</ul>

<div class="model-answer"><strong>Model Paragraph:</strong> Both writers address the hardship of industrial labour, but their perspectives diverge sharply. The 19th-century writer adopts a detached, reportorial tone, cataloguing conditions with clinical precision: "the children worked fourteen hours without rest." This factual approach lends authority and allows the evidence to speak for itself. In contrast, the modern journalist uses emotive first-person testimony — "I couldn't feel my hands by the third hour" — placing the reader inside the experience. While the 19th-century writer persuades through accumulation of fact, the modern writer persuades through empathy, and arguably the personal voice creates a more immediate, visceral impact on a contemporary audience.</div>

<h3>Evaluative Language</h3>
<p>To reach the top band, you must evaluate — not just compare. Use phrases such as:</p>
<ul>
<li>"The 19th-century writer is arguably more persuasive because..."</li>
<li>"This technique is particularly effective in conveying..."</li>
<li>"The modern writer's approach succeeds in... whereas the earlier text..."</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Q4 is worth 18 marks — nearly a quarter of the reading marks on the paper. Allocate at least 20-25 minutes and write 4-5 developed comparative paragraphs. This is where strong candidates separate themselves.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about Text 1 for half the answer, then Text 2 for the other half. This is two separate analyses, not a comparison. Every paragraph must reference both texts using comparative connectives.</div>`,
      quiz: [
        { id: 'ocr-lr-m4-q1', question: 'How many marks is Q4 worth on Component 01?', options: ['6 marks', '12 marks', '18 marks', '24 marks'], correct: 2, explanation: 'Q4 is worth 18 marks — the highest-value reading question on Component 01.' },
        { id: 'ocr-lr-m4-q2', question: 'What must you do in Q4 beyond comparing?', options: ['Summarise both texts', 'Evaluate the effectiveness of the writers\' methods', 'Rewrite the texts in your own words', 'Identify every technique in both texts'], correct: 1, explanation: 'Q4 requires evaluation — you must judge how effectively each writer achieves their purpose, not just describe the differences.' },
        { id: 'ocr-lr-m4-q3', question: 'What is the best paragraph structure for Q4?', options: ['Write about Text 1 fully, then Text 2', 'Alternate between both texts within each paragraph', 'Only discuss one text', 'Write a list of similarities'], correct: 1, explanation: 'An alternating structure — discussing both texts within each paragraph — demonstrates sustained, integrated comparison.' },
        { id: 'ocr-lr-m4-q4', question: 'Which phrase best demonstrates evaluation?', options: ['"The writer uses a metaphor"', '"Both writers discuss the topic"', '"The modern writer\'s approach is arguably more persuasive because..."', '"Text 1 is about education"'], correct: 2, explanation: 'Evaluation requires a judgement: "arguably more persuasive because..." shows you are assessing effectiveness, not just identifying features.' },
      ],
    },
    {
      id: 'ocr-lr-m5',
      title: 'Component 02: Reading Fiction Extracts',
      duration: '30 mins',
      content: `<h2>Component 02: Fiction and Imaginative Reading</h2>
<p>Component 02 (Fiction and Imaginative Writing) presents you with <strong>two fiction or literary non-fiction extracts</strong> from the 20th and/or 21st century. The reading section tests your ability to engage with imaginative texts — novels, short stories, literary journalism, and creative non-fiction.</p>

<div class="key-term"><strong>Key Term: Literary non-fiction</strong> — Non-fiction writing that uses literary techniques (imagery, narrative voice, dialogue) to tell a true story in an engaging way. Examples include memoir, travel writing, and immersive journalism.</div>

<h3>Paper Structure</h3>
<p>Component 02 is a <strong>2-hour paper worth 80 marks</strong>. Section A (Reading) is worth approximately 40 marks. You will encounter:</p>
<ul>
<li><strong>Source A:</strong> A 20th- or 21st-century fiction or literary non-fiction extract</li>
<li><strong>Source B:</strong> A second extract, also fiction or literary non-fiction</li>
</ul>
<p>Both texts are <strong>unseen</strong> — you have not studied them before. They will be linked by a theme (e.g., journeys, conflict, childhood, isolation).</p>

<h3>Reading the Extracts Effectively</h3>
<p>Before answering, spend <strong>8-10 minutes reading both extracts carefully</strong>:</p>
<ul>
<li>Read each extract twice — first for comprehension, then for technique</li>
<li>Underline striking language choices, imagery, and structural shifts</li>
<li>Note the narrative perspective (first person, third person, omniscient)</li>
<li>Consider the tone and how it changes across the extract</li>
<li>Think about the writer's purpose — to entertain, to unsettle, to move the reader?</li>
</ul>

<div class="text-extract">"She sat on the edge of the bed, the mattress sighing beneath her. Outside, the street was the colour of old newsprint. Nothing moved except the rain, falling with the patience of something that had nowhere else to be."<div class="source">Example fiction extract in the style of OCR Component 02</div></div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Fiction texts reward close reading. A single sentence can contain multiple techniques — personification, colour imagery, pathetic fallacy. Slow down and let the language speak to you before rushing to answer.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating fiction extracts like non-fiction — focusing on what happens rather than how the writer creates effects. Component 02 rewards analysis of craft: narrative voice, imagery, atmosphere, and structural choices.</div>`,
      quiz: [
        { id: 'ocr-lr-m5-q1', question: 'What type of texts appear in Component 02?', options: ['19th-century non-fiction', '20th/21st-century fiction and literary non-fiction', 'Poetry', 'Drama scripts'], correct: 1, explanation: 'Component 02 uses fiction and literary non-fiction extracts from the 20th and/or 21st century.' },
        { id: 'ocr-lr-m5-q2', question: 'How long is the Component 02 exam?', options: ['1 hour', '1 hour 30 minutes', '2 hours', '2 hours 30 minutes'], correct: 2, explanation: 'Component 02 is a 2-hour paper worth 80 marks, covering both reading and writing.' },
        { id: 'ocr-lr-m5-q3', question: 'Are the fiction extracts previously studied or unseen?', options: ['Previously studied from an anthology', 'Completely unseen', 'One studied, one unseen', 'Chosen by the student'], correct: 1, explanation: 'Both extracts on Component 02 are completely unseen — you encounter them for the first time in the exam.' },
        { id: 'ocr-lr-m5-q4', question: 'How long should you spend reading the extracts before answering?', options: ['1-2 minutes', '5 minutes', '8-10 minutes', '20 minutes'], correct: 2, explanation: 'Spend 8-10 minutes reading both extracts carefully, annotating techniques and noting shifts in tone, before starting your answers.' },
      ],
    },
    {
      id: 'ocr-lr-m6',
      title: 'Component 02: Analysing Fiction Language & Structure',
      duration: '40 mins',
      content: `<h2>Analysing How Fiction Writers Create Effects</h2>
<p>The analysis questions on Component 02 ask you to examine how writers of fiction and literary non-fiction use <strong>language and structure</strong> to create specific effects — atmosphere, tension, character, setting, or emotional impact. These questions target <strong>AO2</strong> and are worth significant marks.</p>

<div class="key-term"><strong>Key Term: Narrative voice</strong> — The perspective from which a story is told. First person ("I walked...") creates intimacy and subjectivity. Third person limited ("She walked...") allows the writer to reveal one character's thoughts. Third person omniscient reveals multiple characters' inner worlds. The choice of voice shapes how the reader connects with the story.</div>

<h3>Fiction-Specific Techniques to Analyse</h3>
<p>Fiction texts offer techniques you won't find in non-fiction. Be ready to discuss:</p>
<ul>
<li><strong>Imagery:</strong> Simile, metaphor, personification — how do they build atmosphere or character?</li>
<li><strong>Dialogue:</strong> What does speech reveal about characters and relationships?</li>
<li><strong>Setting as mood:</strong> Pathetic fallacy, symbolic landscapes, claustrophobic interiors</li>
<li><strong>Narrative pace:</strong> Long descriptive sentences slow the pace; short sentences create urgency</li>
<li><strong>Foreshadowing:</strong> Hints at what is to come, building tension or dramatic irony</li>
<li><strong>Withholding information:</strong> What the writer chooses NOT to tell the reader</li>
</ul>

<div class="model-answer"><strong>Model Paragraph:</strong> The writer establishes an oppressive atmosphere through the extended metaphor of the house as a living thing: "the walls breathed damp" and "the floorboards groaned underfoot." By personifying the building, the writer suggests the house has a hostile awareness of the character's presence, as if it resents intrusion. The verbs "breathed" and "groaned" carry connotations of suffering and age, positioning the reader to feel that the setting itself is a source of threat, not merely a backdrop.</div>

<h3>Structural Analysis in Fiction</h3>
<p>Structure is especially important in fiction extracts:</p>
<ul>
<li><strong>In medias res:</strong> Starting in the middle of the action to hook the reader</li>
<li><strong>Cyclical structure:</strong> Ending where the text began, suggesting entrapment or resolution</li>
<li><strong>Contrast:</strong> Juxtaposing calm with chaos, past with present, interior with exterior</li>
<li><strong>Climactic ordering:</strong> Building towards a moment of revelation or crisis</li>
<li><strong>Final line impact:</strong> How the last sentence leaves the reader feeling</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing fiction, always consider why the writer made a particular choice. Saying "the writer uses short sentences" is description. Saying "the writer fragments the prose into terse, clipped sentences to mirror the character's fractured thinking under pressure" is analysis.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Retelling the story. The examiner knows what happens — they want to know HOW the writer creates effects. Replace "the character walks into the house and it is creepy" with analysis of the techniques that make it creepy.</div>`,
      quiz: [
        { id: 'ocr-lr-m6-q1', question: 'What is "in medias res"?', options: ['A type of metaphor', 'Starting a story in the middle of the action', 'A Latin term for "the end"', 'A dialogue technique'], correct: 1, explanation: 'In medias res means beginning the narrative in the middle of events, hooking the reader immediately without background exposition.' },
        { id: 'ocr-lr-m6-q2', question: 'What does narrative voice affect?', options: ['Only the word count', 'How the reader connects with the story and its characters', 'The number of paragraphs', 'Whether the text is fiction or non-fiction'], correct: 1, explanation: 'Narrative voice shapes the reader\'s relationship with the story — first person creates intimacy; third person can create distance or omniscience.' },
        { id: 'ocr-lr-m6-q3', question: 'What is the difference between description and analysis of structure?', options: ['There is no difference', '"The writer uses short sentences" vs "The fragmented prose mirrors the character\'s panic"', 'Analysis is shorter', 'Description is better'], correct: 1, explanation: 'Description identifies a feature; analysis explains its effect. "Short sentences" is description. Explaining that fragmented prose mirrors panic is analysis.' },
        { id: 'ocr-lr-m6-q4', question: 'Which of these is a fiction-specific technique?', options: ['Statistics', 'Foreshadowing', 'Rhetorical questions in speeches', 'Bullet points'], correct: 1, explanation: 'Foreshadowing — hinting at future events to build tension or dramatic irony — is a technique specific to narrative and fiction writing.' },
      ],
    },
    {
      id: 'ocr-lr-m7',
      title: 'Component 02: Evaluating Fiction Writers',
      duration: '40 mins',
      content: `<h2>Evaluating Writers' Choices in Fiction</h2>
<p>The evaluation question on Component 02 asks you to make <strong>critical judgements</strong> about how successfully a writer creates effects. This is the most demanding reading question on the paper because it requires you to go beyond analysis into <strong>personal, supported evaluation</strong>.</p>

<div class="key-term"><strong>Key Term: Critical evaluation</strong> — Assessing the quality and effectiveness of a writer's choices. You must offer a judgement ("the writer succeeds..." or "this is less effective because...") backed by evidence and reasoning. It is not enough to describe or even analyse — you must judge.</div>

<h3>What the Question Asks</h3>
<div class="text-extract">"A student said: 'This extract is successful in creating a growing sense of unease in the reader.' To what extent do you agree with this view? Support your answer with close reference to the text, including quotations."<div class="source">Example evaluation question in the style of OCR Component 02</div></div>

<h3>How to Structure an Evaluative Response</h3>
<p>Follow this pattern for each paragraph:</p>
<ul>
<li><strong>Judgement:</strong> State whether you agree or disagree with the given view (or to what extent)</li>
<li><strong>Evidence:</strong> Quote from the text</li>
<li><strong>Analysis:</strong> Explain how the technique works</li>
<li><strong>Evaluation:</strong> Judge how effective or successful the technique is — and why</li>
</ul>

<div class="model-answer"><strong>Model Paragraph:</strong> I strongly agree that the writer creates unease through the description of the garden: "the roses had grown wild, their thorns catching at the gate like fingers." The simile "like fingers" personifies the thorns as something reaching out to grasp or trap, which is deeply unsettling because it transforms a domestic, familiar setting into something threatening. This is particularly effective because the unease is subtle — the reader senses danger without any overt threat, which mirrors the slow-burn tension of the extract as a whole.</div>

<h3>Agreeing, Disagreeing, and Nuance</h3>
<p>You do not have to fully agree or disagree. The strongest responses show <strong>nuance</strong>:</p>
<ul>
<li>"I largely agree, but the effect is more complex than simple unease..."</li>
<li>"While the opening achieves this effectively, the final paragraph shifts to a different tone..."</li>
<li>"The writer partially succeeds, though the dialogue weakens the atmosphere because..."</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The question says "to what extent" — this invites a nuanced response. Don't just say "I agree" and list evidence. Show sophistication by exploring where the statement is most and least accurate. This is what separates a Grade 7 from a Grade 9.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Ignoring the given statement entirely and writing a generic language analysis answer. The statement is your focus — every paragraph should link back to whether you agree with it and why.</div>`,
      quiz: [
        { id: 'ocr-lr-m7-q1', question: 'What does "to what extent do you agree" invite you to do?', options: ['Simply agree with the statement', 'Simply disagree with the statement', 'Offer a nuanced judgement — exploring where you agree and where you might not', 'Ignore the statement and analyse freely'], correct: 2, explanation: '"To what extent" invites nuance — you should explore where the statement is accurate and where it might be incomplete or more complex.' },
        { id: 'ocr-lr-m7-q2', question: 'What is the difference between analysis and evaluation?', options: ['They are the same thing', 'Analysis explains how a technique works; evaluation judges how effective it is', 'Evaluation is easier', 'Analysis uses quotations; evaluation does not'], correct: 1, explanation: 'Analysis explains the mechanism of a technique. Evaluation goes further by making a judgement about its success or effectiveness.' },
        { id: 'ocr-lr-m7-q3', question: 'What should every paragraph in an evaluation link back to?', options: ['The title of the extract', 'The given statement in the question', 'The writer\'s biography', 'Other texts you have studied'], correct: 1, explanation: 'Every paragraph should connect to the statement — stating whether you agree, disagree, or see complexity in the claim.' },
        { id: 'ocr-lr-m7-q4', question: 'Which response shows the best evaluative skill?', options: ['"The writer uses a metaphor"', '"The metaphor is effective because..."', '"The writer partially succeeds here — while the metaphor creates unease, the subsequent dialogue undercuts this tension"', '"I agree with the statement"'], correct: 2, explanation: 'The third option shows nuanced evaluation — it acknowledges partial success and explains why, demonstrating sophisticated critical thinking.' },
      ],
    },
    {
      id: 'ocr-lr-m8',
      title: 'Reading Exam Strategy for Both Papers',
      duration: '25 mins',
      content: `<h2>Exam Strategy: Both Components</h2>
<p>Both OCR GCSE English Language papers are <strong>2 hours long</strong> and worth <strong>80 marks each</strong>. Strong exam technique can gain you several extra grades' worth of marks. Here is your strategic guide to both papers.</p>

<div class="key-term"><strong>Key Term: Mark-per-minute ratio</strong> — The number of marks available divided by the minutes you should spend. Use this to allocate your time proportionally. A 4-mark question deserves far less time than an 18-mark question.</div>

<h3>Component 01 Timing (2 hours, 80 marks)</h3>
<p>Section A (Reading) is worth approximately 40 marks. Section B (Writing) is also worth approximately 40 marks. Split your time roughly in half:</p>
<ul>
<li><strong>Q1 (4 marks):</strong> 5 minutes — quick retrieval, do not overthink</li>
<li><strong>Q2 (6 marks):</strong> 8-10 minutes — synthesis from both texts</li>
<li><strong>Q3 (12 marks):</strong> 15-18 minutes — language and structure analysis</li>
<li><strong>Q4 (18 marks):</strong> 20-25 minutes — evaluative comparison (the big one)</li>
<li><strong>Reading time:</strong> 8-10 minutes at the start</li>
<li><strong>Section B (Writing):</strong> Remaining time (~50-55 minutes including planning)</li>
</ul>

<h3>Component 02 Timing (2 hours, 80 marks)</h3>
<p>The same principle applies — allocate time proportionally to marks:</p>
<ul>
<li>Spend <strong>8-10 minutes reading</strong> both fiction extracts carefully</li>
<li>Allocate roughly <strong>1 minute per mark</strong> for reading questions</li>
<li>Leave adequate time for the writing section (approximately 45-50 minutes)</li>
</ul>

<h3>Universal Reading Strategies</h3>
<ul>
<li><strong>Read before you write:</strong> Never start answering without reading the full text first</li>
<li><strong>Annotate actively:</strong> Underline key words, circle techniques, note tone shifts in the margin</li>
<li><strong>Answer the question asked:</strong> Re-read the question after writing each paragraph to stay focused</li>
<li><strong>Quote selectively:</strong> Short, embedded quotations (2-5 words) are far better than long copied passages</li>
<li><strong>Proofread reading answers too:</strong> Check that your analysis makes logical sense and your quotations are accurate</li>
</ul>

<div class="text-extract">"The difference between a Grade 5 and a Grade 8 is often not knowledge — it's time management. Students who spend 20 minutes on 4-mark questions and rush the 18-mark question are giving away grades."<div class="source">OCR Principal Examiner, adapted</div></div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Write your timing plan on the front of your exam paper before you start. For example: "Q1 finish by 10:15, Q2 by 10:25, Q3 by 10:43, Q4 by 11:08." This keeps you accountable without constantly checking the clock.</div>

<div class="model-answer"><strong>If You Run Out of Time:</strong> If you have 5 minutes left and haven't finished Q4, write bullet-point analysis rather than nothing. Examiners can award marks for valid points even in note form. An incomplete answer with strong points scores far better than a blank page.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending equal time on every question regardless of marks. Q1 (4 marks) and Q4 (18 marks) should NOT receive the same amount of time. Proportional timing is the single most important exam skill.</div>`,
      quiz: [
        { id: 'ocr-lr-m8-q1', question: 'How long is each OCR GCSE English Language component?', options: ['1 hour 30 minutes', '1 hour 45 minutes', '2 hours', '2 hours 30 minutes'], correct: 2, explanation: 'Both Component 01 and Component 02 are 2-hour papers, each worth 80 marks.' },
        { id: 'ocr-lr-m8-q2', question: 'Roughly how long should you spend on Q4 (18 marks) of Component 01?', options: ['5 minutes', '10 minutes', '20-25 minutes', '40 minutes'], correct: 2, explanation: 'Q4 is worth 18 marks — roughly a quarter of the reading marks. Spending 20-25 minutes on it is proportional and gives you space for developed comparative evaluation.' },
        { id: 'ocr-lr-m8-q3', question: 'What should you do if you run out of time on a high-mark question?', options: ['Leave it blank', 'Write bullet-point analysis rather than nothing', 'Copy out the source text', 'Go back and add more to Q1'], correct: 1, explanation: 'Examiners can award marks for valid analytical points in note form. A few strong bullet points will score far more than a blank space.' },
        { id: 'ocr-lr-m8-q4', question: 'What is the most important exam skill for reading papers?', options: ['Beautiful handwriting', 'Proportional time management based on marks', 'Memorising quotations', 'Writing as much as possible'], correct: 1, explanation: 'Allocating time proportionally to marks is the single most impactful exam skill. It ensures you give your best effort to the highest-value questions.' },
      ],
    },
  ],
  assessmentQuestions: [
    { id: 'ocr-lr-a1', question: 'What is the OCR GCSE English Language specification code?', options: ['8700', '1EN2', 'J351', '4EA1'], correct: 2, explanation: 'The OCR GCSE English Language specification code is J351.' },
    { id: 'ocr-lr-a2', question: 'How many components does the OCR GCSE English Language have?', options: ['1', '2', '3', '4'], correct: 1, explanation: 'OCR GCSE English Language has two components: Component 01 (Communicating Information and Ideas) and Component 02 (Fiction and Imaginative Writing).' },
    { id: 'ocr-lr-a3', question: 'How many marks is each component worth?', options: ['40 marks', '60 marks', '80 marks', '100 marks'], correct: 2, explanation: 'Both Component 01 and Component 02 are worth 80 marks each, giving a total of 160 marks.' },
    { id: 'ocr-lr-a4', question: 'What type of text appears as Source A on Component 01?', options: ['20th-century fiction', '19th-century non-fiction', 'Poetry', 'A drama script'], correct: 1, explanation: 'Component 01 features a 19th-century non-fiction text alongside a 20th/21st-century non-fiction text.' },
    { id: 'ocr-lr-a5', question: 'Which question on Component 01 is worth the most reading marks?', options: ['Q1 (retrieval)', 'Q2 (synthesis)', 'Q3 (language and structure)', 'Q4 (evaluative comparison)'], correct: 3, explanation: 'Q4 is worth 18 marks — the highest-value reading question on Component 01.' },
    { id: 'ocr-lr-a6', question: 'What does Q2 on Component 01 require you to do?', options: ['Analyse language techniques', 'Synthesise information from both texts', 'Evaluate the writer\'s effectiveness', 'Write creatively'], correct: 1, explanation: 'Q2 is a synthesis question — you must draw on both texts to answer a specific question, combining information from both sources.' },
    { id: 'ocr-lr-a7', question: 'What is the WHAT-HOW-WHY method?', options: ['A planning technique', 'Identify the technique, quote and explain, analyse the effect on the reader', 'A timing strategy', 'A way to structure creative writing'], correct: 1, explanation: 'WHAT = identify the technique, HOW = embed a quotation and explain how it works, WHY = analyse the effect on the reader.' },
    { id: 'ocr-lr-a8', question: 'What types of text appear on Component 02?', options: ['19th-century non-fiction', '20th/21st-century fiction and literary non-fiction', 'Anthology texts', 'Shakespearean drama'], correct: 1, explanation: 'Component 02 features 20th- and 21st-century fiction and literary non-fiction extracts.' },
    { id: 'ocr-lr-a9', question: 'What does "to what extent do you agree" require?', options: ['Full agreement only', 'Full disagreement only', 'A nuanced response exploring the complexity of the statement', 'Ignoring the statement'], correct: 2, explanation: '"To what extent" invites a nuanced response — explore where you agree, where you might disagree, and why the truth may be more complex.' },
    { id: 'ocr-lr-a10', question: 'What is the difference between synthesis and comparison?', options: ['They are identical', 'Synthesis gathers information; comparison analyses differences in method', 'Synthesis is harder', 'Comparison requires only one text'], correct: 1, explanation: 'Synthesis focuses on gathering and combining information from two sources. Comparison analyses how writers\' methods and perspectives differ.' },
    { id: 'ocr-lr-a11', question: 'How long should you spend on Q1 of Component 01?', options: ['15 minutes', '10 minutes', '5 minutes', '20 minutes'], correct: 2, explanation: 'Q1 is worth only 4 marks. Spend no more than 5 minutes on it — find the information and move on to higher-tariff questions.' },
    { id: 'ocr-lr-a12', question: 'What is "feature spotting" and why is it a problem?', options: ['It is a good technique', 'Naming techniques without explaining their effect — it scores poorly', 'Finding hidden meanings in a text', 'A way to save time'], correct: 1, explanation: 'Feature spotting means identifying a device (e.g., "the writer uses a simile") without explaining its effect on the reader. It earns very few marks.' },
    { id: 'ocr-lr-a13', question: 'What makes evaluation different from analysis?', options: ['Evaluation is shorter', 'Evaluation judges effectiveness; analysis explains how a technique works', 'There is no difference', 'Evaluation does not use quotations'], correct: 1, explanation: 'Analysis explains how a technique works. Evaluation goes further by making a critical judgement about whether it is effective and why.' },
    { id: 'ocr-lr-a14', question: 'How should you use quotations in reading answers?', options: ['Copy full paragraphs', 'Use short, embedded quotations of 2-5 words', 'Never use quotations', 'Only use quotations in Q1'], correct: 1, explanation: 'Short, embedded quotations (2-5 words woven into your sentences) are far more effective than long copied passages.' },
    { id: 'ocr-lr-a15', question: 'What structural feature involves starting a story in the middle of the action?', options: ['Cyclical structure', 'In medias res', 'Flashback', 'Foreshadowing'], correct: 1, explanation: 'In medias res means beginning the narrative in the middle of events, immediately engaging the reader without lengthy exposition.' },
    { id: 'ocr-lr-a16', question: 'How many texts does Component 01 present?', options: ['1', '2', '3', '4'], correct: 1, explanation: 'Component 01 presents two texts: a 19th-century non-fiction source and a 20th/21st-century non-fiction source.' },
    { id: 'ocr-lr-a17', question: 'What is the mark-per-minute ratio useful for?', options: ['Counting words', 'Allocating time proportionally to marks available', 'Calculating your grade', 'Choosing which question to skip'], correct: 1, explanation: 'The mark-per-minute ratio helps you spend time proportionally — more time on high-mark questions, less on low-mark retrieval tasks.' },
    { id: 'ocr-lr-a18', question: 'What is pathetic fallacy?', options: ['A logical error in an argument', 'When the weather or environment reflects mood or emotion', 'A type of character flaw', 'An unreliable narrator'], correct: 1, explanation: 'Pathetic fallacy is when the weather or environment mirrors the emotions of characters or the mood of a scene — e.g., dark skies reflecting sadness.' },
    { id: 'ocr-lr-a19', question: 'On Component 02, what should you focus on when analysing fiction?', options: ['Only what happens in the story', 'How the writer uses language, structure, and narrative voice to create effects', 'The author\'s biography', 'Historical context only'], correct: 1, explanation: 'Component 02 rewards analysis of craft — how the writer creates atmosphere, character, tension, and meaning through language, structure, and voice.' },
    { id: 'ocr-lr-a20', question: 'What should you write on the front of your exam paper before starting?', options: ['Your favourite quotation', 'A timing plan for each question', 'A list of techniques', 'Nothing — start immediately'], correct: 1, explanation: 'Writing timing targets (e.g., "Q1 finish by 10:15, Q4 finish by 11:08") keeps you on track without constantly checking the clock.' },
  ],
};

export default ocrGcseLangReading;
