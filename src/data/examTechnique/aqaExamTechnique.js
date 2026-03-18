const aqaExamTechnique = {
  id: 'exam-technique-aqa',
  title: 'AQA Exam Technique Masterclass',
  subtitle: 'Paper 1 & Paper 2 — Language & Literature',
  tier: 'GCSE',
  board: 'AQA',
  specCode: '8700/8702',
  price: 0,
  duration: '3 hours',
  level: 'All levels',
  description:
    'Master the exact skills AQA examiners reward across Language and Literature papers.',
  color: 'from-blue-600 to-blue-800',

  // ═══════════════════════════════════════════════
  //  MODULES
  // ═══════════════════════════════════════════════
  moduleList: [
    // ──────────────────────────────────────────────
    // MODULE 1 — Paper 1 Q2: Language Analysis
    // ──────────────────────────────────────────────
    {
      id: 'et-aqa-m1',
      title: 'Paper 1 Q2: Language Analysis',
      duration: '20 min',
      content: `
<h2>Paper 1 Question 2 — How Does the Writer Use Language?</h2>

<p>Question 2 on AQA English Language Paper 1 is worth <strong>8 marks</strong> and targets <strong>AO2</strong>: the ability to explain, comment on, and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology to support their views. You are directed to a specific section of the source and asked how the writer uses language to present a particular focus — a character, a setting, an atmosphere, or an experience.</p>

<div class="key-term"><strong>Key Term: AO2 (Language)</strong> — Explain, comment on, and analyse how writers use language to achieve effects and influence readers. You must use relevant subject terminology to support your views.</div>

<h3>The PEEL Method — Your Paragraph Blueprint</h3>

<p>Every analytical paragraph you write for Q2 should follow the <strong>PEEL</strong> structure. This keeps your response focused, detailed, and examiner-friendly:</p>

<ul>
  <li><strong>P — Point:</strong> Open with a clear topic sentence that identifies a language technique or choice the writer makes. For example: "The writer uses a metaphor to convey the character's isolation."</li>
  <li><strong>E — Evidence:</strong> Embed a short, precise quotation from the text. Do not copy out entire sentences — select the key words or phrase that demonstrate the technique.</li>
  <li><strong>E — Explain:</strong> This is where the marks live. Explain the effect of the language choice on the reader. What does it suggest, imply, or evoke? How does it make the reader feel?</li>
  <li><strong>L — Link:</strong> Link back to the question focus or broaden your point by considering alternative interpretations or connotations.</li>
</ul>

<h3>Zoom In on Word-Level Analysis</h3>

<p>The single most important skill for Q2 is <strong>word-level analysis</strong> — sometimes called "zooming in." Rather than commenting on a whole sentence, isolate individual words and explore their connotations. Consider this example:</p>

<div class="text-extract">"The shadows crawled across the bedroom floor, swallowing the last strip of daylight."<div class="source">Original passage in the style of AQA exam fiction extracts</div></div>

<p>A weaker response might say: "This creates a dark atmosphere." A stronger response zooms in:</p>

<blockquote>"The verb 'crawled' personifies the shadows, suggesting slow, predatory movement — as though darkness is a living creature advancing on the character. The word 'swallowing' extends this idea, implying that the light is being consumed and destroyed. Together, these choices create a sense of inevitability and menace, positioning the reader to share the character's growing unease."</blockquote>

<p>Notice how the student selects <em>individual words</em>, names the technique (personification, verb choice), and explains the connotations in detail. This is what separates a Level 3 response from a Level 4.</p>

<h3>Subject Terminology — Use It Precisely</h3>

<p>Examiners reward terminology only when it is used accurately and supports analysis. Dropping in terms like "pathetic fallacy" or "sibilance" without explaining their effect will not earn marks. Always ask yourself: <em>What does this technique do to the reader?</em></p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Three well-developed PEEL paragraphs will outscore five shallow ones. Depth always beats breadth on Q2. Aim for quality over quantity — the examiner wants to see sustained, perceptive analysis, not a list of techniques.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Feature-spotting without analysis — for example, writing "The writer uses alliteration in 'dark, damp dungeon'" and moving on. You must explain why the alliteration matters. What sound does it create? What mood does it build? How does it affect the reader's experience?</div>

<h3>Putting It All Together</h3>

<p>When you sit down to answer Q2, follow this sequence: (1) read the specified lines carefully, (2) highlight three or four striking language choices, (3) plan three PEEL paragraphs, and (4) write with focus and precision. Remember — the examiner is looking for analytical depth, not a catalogue of devices. Let your commentary show genuine engagement with the writer's craft.</p>
`,
      quiz: [
        {
          id: 'et-aqa-m1-q1',
          question: 'What is the primary assessment objective tested by AQA Paper 1 Q2?',
          options: ['AO1 — Identify and interpret information', 'AO2 — Analyse language and structure', 'AO3 — Compare writers\' ideas', 'AO4 — Technical accuracy'],
          answer: 1,
          explanation:
            'Paper 1 Q2 targets AO2, which assesses your ability to explain, comment on, and analyse how writers use language to achieve effects and influence readers.',
        },
        {
          id: 'et-aqa-m1-q2',
          question: 'What does the "E" for Explain in PEEL require you to do?',
          options: [
            'Embed a quotation from the text',
            'Explain the effect of the language choice on the reader',
            'Evaluate the writer\'s overall intention',
            'Expand your quotation to include full sentences',
          ],
          answer: 1,
          explanation:
            'The Explain step is where you analyse the effect of the language choice — what it suggests, implies, or evokes, and how it makes the reader feel. This is where the majority of marks are earned.',
        },
        {
          id: 'et-aqa-m1-q3',
          question: 'What does "zooming in" at word level mean in practice?',
          options: [
            'Copying out full sentences as evidence',
            'Isolating individual words and exploring their connotations',
            'Identifying the genre of the text',
            'Summarising the paragraph in your own words',
          ],
          answer: 1,
          explanation:
            'Zooming in means selecting individual words, naming the technique, and exploring the connotations and effects of those specific word choices in detail.',
        },
        {
          id: 'et-aqa-m1-q4',
          question: 'How many marks is Paper 1 Q2 worth?',
          options: ['4 marks', '8 marks', '12 marks', '16 marks'],
          answer: 1,
          explanation:
            'Paper 1 Q2 is worth 8 marks. It is a focused language analysis question that rewards depth of commentary over breadth.',
        },
        {
          id: 'et-aqa-m1-q5',
          question: 'Which approach is most likely to reach Level 4 on Q2?',
          options: [
            'Listing as many techniques as possible without explanation',
            'Writing five short paragraphs that name devices',
            'Writing three detailed PEEL paragraphs with word-level analysis',
            'Retelling what happens in the extract',
          ],
          answer: 2,
          explanation:
            'Three well-developed PEEL paragraphs with word-level analysis demonstrate the sustained, perceptive commentary that examiners reward at Level 4. Depth always beats breadth.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 2 — Paper 1 Q5: Creative Writing
    // ──────────────────────────────────────────────
    {
      id: 'et-aqa-m2',
      title: 'Paper 1 Q5: Creative Writing',
      duration: '20 min',
      content: `
<h2>Paper 1 Question 5 — Creative Writing</h2>

<p>Question 5 is the big one on Paper 1 — worth <strong>40 marks</strong> (24 for content and organisation, 16 for technical accuracy). AQA gives you a choice of two tasks: one narrative prompt and one descriptive prompt, often linked to a visual stimulus. You should spend around <strong>45 minutes</strong> on this question, including 5 minutes of planning.</p>

<div class="key-term"><strong>Key Term: Content and Organisation (AO5)</strong> — Communicate clearly, effectively, and imaginatively, selecting and adapting tone, style, and register for different forms, purposes, and audiences. Organise information and ideas using structural and grammatical features.</div>

<h3>Narrative vs. Descriptive — Know the Difference</h3>

<p>If you choose a <strong>narrative</strong> task, the examiner expects a story with a clear beginning, development, and resolution. You do not need to tell an epic tale — in fact, the best narratives focus on a single moment or short time frame. Think of your story as a magnifying glass on one experience, not a telescope sweeping across years.</p>

<p>If you choose a <strong>descriptive</strong> task, the examiner wants you to paint a vivid picture using language. There is no need for a plot — instead, guide the reader through a scene using sensory detail, figurative language, and carefully chosen vocabulary. Move the reader's gaze around the scene as a camera would.</p>

<h3>Structure That Impresses</h3>

<p>Structure is not just about paragraphs — it is about the deliberate arrangement of ideas to create effects. Here are techniques that examiners reward:</p>

<ul>
  <li><strong>Cyclical structure:</strong> End where you began, but with a shift in meaning or perspective. For example, opening and closing with the same image — but the second time, the reader understands it differently.</li>
  <li><strong>In medias res:</strong> Begin in the middle of the action. Drop the reader straight into a moment of tension or significance, then fill in context as you go.</li>
  <li><strong>Shift in focus:</strong> Move from wide shot to close-up, or from external setting to internal thought. These shifts create variety and pace.</li>
  <li><strong>Withholding information:</strong> Create suspense by delaying a revelation. Let the reader piece things together gradually.</li>
</ul>

<h3>Sensory Detail — The Secret Weapon</h3>

<p>The most common weakness in student creative writing is over-reliance on sight. Strong writers engage all five senses. Consider a market scene: don't just describe what you see — describe the <em>shout of vendors</em> (sound), the <em>sting of spice in the air</em> (smell), the <em>rough weave of hessian sacks</em> (touch), the <em>burst of citrus on the tongue</em> (taste). Sensory writing makes a scene feel real and immersive.</p>

<h3>Varied Sentences — Rhythm and Control</h3>

<p>Examiners are trained to notice sentence variety. A response that uses only long, complex sentences will feel monotonous. A response that uses only short sentences will feel breathless and immature. The key is <strong>deliberate variation</strong>:</p>

<ul>
  <li>Use a <strong>short sentence</strong> after a long one for dramatic impact: "The door opened. Silence."</li>
  <li>Use a <strong>complex sentence</strong> with embedded clauses to build atmosphere: "The forest, dense and unforgiving, stretched endlessly in every direction."</li>
  <li>Use a <strong>single-word sentence</strong> or minor sentence sparingly for emphasis: "Gone." or "Nothing."</li>
  <li>Use a <strong>list of three</strong> (tricolon) for rhythm: "It was cold, relentless, and unforgiving."</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Spend five minutes planning before you write. A brief plan — even just five bullet points outlining your paragraph structure — will prevent your writing from rambling. The best responses have a clear sense of direction from the very first line.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Trying to tell an entire life story in 45 minutes. The most effective narratives focus on a single moment, scene, or short episode. Less is more — depth of description and control of language matter far more than plot complexity.</div>

<h3>Technical Accuracy (AO6) — 16 Free Marks</h3>

<p>Do not forget that 16 marks are awarded purely for spelling, punctuation, and grammar. Use a range of punctuation — semicolons, colons, dashes, ellipses — but only where you are confident. A well-placed semicolon shows control; a misused one suggests guesswork. Proofread your final paragraph carefully — first impressions and last impressions both count.</p>
`,
      quiz: [
        {
          id: 'et-aqa-m2-q1',
          question: 'How many marks is Paper 1 Q5 worth in total?',
          options: ['16 marks', '24 marks', '32 marks', '40 marks'],
          answer: 3,
          explanation:
            'Paper 1 Q5 is worth 40 marks in total — 24 for content and organisation (AO5) and 16 for technical accuracy (AO6).',
        },
        {
          id: 'et-aqa-m2-q2',
          question: 'What is the most effective approach to narrative writing in the exam?',
          options: [
            'Tell an epic story covering many years',
            'Focus on a single moment or short time frame with rich detail',
            'Include as many plot twists as possible',
            'Write entirely in dialogue',
          ],
          answer: 1,
          explanation:
            'The best exam narratives focus on a single moment or short episode, using it as a magnifying glass to explore one experience in depth with controlled language and rich description.',
        },
        {
          id: 'et-aqa-m2-q3',
          question: 'What is a cyclical structure?',
          options: [
            'A story told in reverse chronological order',
            'A structure that ends where it began, but with a shift in meaning',
            'A story with exactly three acts',
            'A description that moves from left to right across a scene',
          ],
          answer: 1,
          explanation:
            'A cyclical structure returns to its opening image or idea at the end, but the second encounter carries a different meaning or perspective, showing development.',
        },
        {
          id: 'et-aqa-m2-q4',
          question: 'Why should you vary your sentence lengths in creative writing?',
          options: [
            'To reach the word count more quickly',
            'Because the mark scheme requires exactly five sentence types',
            'To create rhythm, pace, and deliberate effects',
            'To prove you know grammar rules',
          ],
          answer: 2,
          explanation:
            'Varied sentence lengths create rhythm and control. Short sentences after long ones create dramatic impact, while complex sentences build atmosphere. Deliberate variation shows craft.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 3 — Paper 2 Q4: Comparing Viewpoints
    // ──────────────────────────────────────────────
    {
      id: 'et-aqa-m3',
      title: 'Paper 2 Q4: Comparing Viewpoints',
      duration: '20 min',
      content: `
<h2>Paper 2 Question 4 — Comparing Writers' Viewpoints and Methods</h2>

<p>Question 4 on AQA Paper 2 is the highest-tariff reading question, worth <strong>16 marks</strong>. It assesses <strong>AO3</strong>: your ability to compare writers' ideas and perspectives, as well as how they are conveyed across the two non-fiction sources. This question demands that you write about <em>both</em> texts in an integrated way — not one and then the other.</p>

<div class="key-term"><strong>Key Term: AO3 (Comparison)</strong> — Compare writers' ideas and perspectives, as well as how these are conveyed, across two or more texts.</div>

<h3>The Golden Rule: Methods, Not Just Ideas</h3>

<p>The most common reason students cap their marks on Q4 is that they compare <em>what</em> the writers think but not <em>how</em> they convey those ideas. The question always asks about "viewpoints <strong>and</strong> methods." A viewpoint is the writer's opinion or attitude; a method is the technique they use to express it — tone, rhetorical devices, structure, word choice, direct address, anecdote, and so on.</p>

<p>For every comparison you make, ask yourself two questions: (1) What does Writer A think about this topic compared to Writer B? (2) How does each writer convey that viewpoint through their language and methods?</p>

<h3>Structuring Your Response — The Alternating Method</h3>

<p>The most effective structure for Q4 is the <strong>alternating (point-by-point)</strong> method, where you weave between the two sources within each paragraph rather than writing about Source A in one block and Source B in another. Here is a template:</p>

<ol>
  <li><strong>Opening sentence:</strong> Identify a shared theme or contrasting attitude. For example: "Both writers address the topic of childhood, but while Source A presents it nostalgically, Source B adopts a more critical tone."</li>
  <li><strong>Source A analysis:</strong> Provide a quotation from Source A and analyse the method used to convey the viewpoint.</li>
  <li><strong>Connective/comparison:</strong> Use a comparative connective — "In contrast," "Similarly," "However," "Whereas" — to transition to Source B.</li>
  <li><strong>Source B analysis:</strong> Provide a quotation from Source B and analyse the contrasting or complementary method.</li>
  <li><strong>Evaluative comment:</strong> End the paragraph with a brief comment on the overall effect of the difference or similarity.</li>
</ol>

<h3>Synthesising Across Sources</h3>

<p>Synthesis means more than placing two points side by side — it means drawing meaningful connections. Ask yourself: <em>Why</em> do these writers differ? Consider context: one source may be a Victorian letter and the other a modern newspaper column. The time period, audience, purpose, and form all shape the methods a writer uses. Referencing these contextual factors elevates your comparison from descriptive to perceptive.</p>

<div class="text-extract"><strong>Source A (1842):</strong> "The factory is a place of unrelenting misery, where children no older than seven are worked until their fingers bleed."<br/><strong>Source B (2019):</strong> "Modern workplaces have come a long way — or have they? Zero-hours contracts and unpaid internships tell a rather different story."<div class="source">Original passages in the style of AQA exam non-fiction extracts</div></div>

<p>A perceptive student might note: "Both writers critique exploitation in the workplace, but Source A uses graphic imagery — 'fingers bleed' — to provoke outrage, whereas Source B employs a rhetorical question to invite the reader to challenge their own assumptions. The shift from Victorian directness to modern irony reflects changing conventions in persuasive writing."</p>

<h3>Comparative Connectives — Your Toolkit</h3>

<p>Build a repertoire of comparison words and phrases so your writing flows naturally between sources:</p>
<ul>
  <li><strong>Similarity:</strong> Similarly, Likewise, In the same vein, Both writers…, Echoing this idea…</li>
  <li><strong>Difference:</strong> In contrast, Conversely, However, Whereas, On the other hand, Unlike Source A…</li>
  <li><strong>Degree:</strong> To a greater extent, More emphatically, While Source A hints at…, Source B overtly states…</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Aim for four well-developed comparative paragraphs. Each paragraph should contain analysis of both sources with embedded quotations and method-focused commentary. The examiner wants to see you moving fluidly between the texts.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about Source A for three paragraphs and then Source B for three paragraphs. This "block" approach makes comparison difficult and often results in a descriptive rather than analytical response. Always alternate within paragraphs.</div>
`,
      quiz: [
        {
          id: 'et-aqa-m3-q1',
          question: 'What assessment objective does Paper 2 Q4 primarily test?',
          options: ['AO1', 'AO2', 'AO3', 'AO4'],
          answer: 2,
          explanation:
            'Paper 2 Q4 targets AO3: comparing writers\' ideas and perspectives, as well as how these are conveyed, across two or more texts.',
        },
        {
          id: 'et-aqa-m3-q2',
          question: 'What is the "alternating method" of structuring a comparison?',
          options: [
            'Writing about Source A in full, then Source B in full',
            'Weaving between both sources within each paragraph',
            'Alternating between quotation and explanation',
            'Writing one paragraph of analysis and one of summary',
          ],
          answer: 1,
          explanation:
            'The alternating (point-by-point) method means analysing both sources within each paragraph, using comparative connectives to move fluidly between them.',
        },
        {
          id: 'et-aqa-m3-q3',
          question: 'Why do students commonly cap their marks on Q4?',
          options: [
            'They write too much about both texts',
            'They compare ideas but forget to compare methods',
            'They use too many quotations',
            'They spend too long on planning',
          ],
          answer: 1,
          explanation:
            'The most common reason for capped marks is comparing what writers think without analysing how they convey those viewpoints through language and methods.',
        },
        {
          id: 'et-aqa-m3-q4',
          question: 'How many marks is Paper 2 Q4 worth?',
          options: ['8 marks', '12 marks', '16 marks', '20 marks'],
          answer: 2,
          explanation:
            'Paper 2 Q4 is the highest-tariff reading question on Paper 2, worth 16 marks.',
        },
        {
          id: 'et-aqa-m3-q5',
          question: 'What does "synthesis" mean in the context of comparing sources?',
          options: [
            'Summarising each source separately',
            'Drawing meaningful connections and explaining why writers differ',
            'Copying quotations from both texts',
            'Writing a conclusion that names both sources',
          ],
          answer: 1,
          explanation:
            'Synthesis goes beyond placing points side by side — it means drawing meaningful connections, considering contextual factors, and explaining why writers\' approaches differ or align.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 4 — Literature: Extract to Whole Text
    // ──────────────────────────────────────────────
    {
      id: 'et-aqa-m4',
      title: 'Literature: Extract to Whole Text',
      duration: '20 min',
      content: `
<h2>Literature — Moving from Extract Analysis to Whole-Text Knowledge</h2>

<p>On AQA English Literature papers, extract-based questions follow a consistent pattern: you are given a passage from the set text and asked how a theme, character, or idea is presented <em>in the extract</em> and <em>in the text as a whole</em>. The mark scheme explicitly rewards students who move beyond the printed extract to demonstrate wider knowledge of the text. This module teaches you how to do that confidently and effectively.</p>

<div class="key-term"><strong>Key Term: Whole-Text Knowledge</strong> — The ability to reference events, quotations, and ideas from across the entire text, not just the extract provided. This demonstrates thorough understanding and is essential for reaching the top mark bands.</div>

<h3>The Two-Part Structure</h3>

<p>Think of your essay as having two distinct but connected phases:</p>

<ol>
  <li><strong>Phase 1 — The Extract (approximately 60% of your response):</strong> Begin with close analysis of the given extract. Use the PEEL method to explore language, structure, and form. Zoom in on key quotations and analyse the writer's choices in detail. This is where you demonstrate your analytical skills under AO2.</li>
  <li><strong>Phase 2 — The Wider Text (approximately 40% of your response):</strong> Move beyond the extract to discuss how the theme or character is presented elsewhere in the text. Reference specific scenes, chapters, or moments. Use memorised quotations to support your points. This is where you demonstrate your knowledge under AO1 and your understanding of context under AO3.</li>
</ol>

<h3>Transition Phrases — Bridging Extract and Whole Text</h3>

<p>The shift from extract to wider text should feel seamless, not abrupt. Use transition phrases that connect your extract analysis to your broader knowledge:</p>

<ul>
  <li>"This presentation of [theme/character] in the extract reflects a wider pattern across the novel/play…"</li>
  <li>"Earlier in the text, [character] is presented differently when…"</li>
  <li>"By the end of the novel, this idea has evolved significantly, as seen when…"</li>
  <li>"[Author] develops this theme throughout the text, particularly in the scene where…"</li>
  <li>"This contrasts with an earlier moment in which…"</li>
</ul>

<h3>Building a Bank of Wider-Text Quotations</h3>

<p>You cannot predict which extract will appear in the exam, but you <em>can</em> prepare quotations that are versatile enough to apply to multiple themes. For each set text, aim to memorise <strong>10–15 key quotations</strong> spread across the whole text — from the opening, the middle, and the ending. Choose quotations that are short (under ten words), rich in language features, and connected to major themes.</p>

<p>For example, if you are studying <em>A Christmas Carol</em>, the quotation "hard and sharp as flint" from Stave 1 can be used for questions about Scrooge's character, the theme of isolation, or the contrast between wealth and compassion. A single well-chosen quotation can serve multiple questions.</p>

<h3>Context — AO3 in Practice</h3>

<p>AO3 asks you to demonstrate understanding of the relationship between texts and the contexts in which they were written. This does not mean writing a history paragraph — it means weaving contextual understanding into your analysis. When you reference the wider text, connect your points to relevant social, historical, or literary context:</p>

<ul>
  <li>"Dickens uses Scrooge's transformation to challenge Victorian attitudes towards the poor, reflecting his own campaigning journalism."</li>
  <li>"Shakespeare presents Lady Macbeth's ambition as transgressive within the patriarchal context of Jacobean England, where women who sought power were often associated with witchcraft."</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Do not leave your wider-text knowledge until the final paragraph. The best responses weave between extract and whole text throughout, using the extract as a springboard for broader discussion. Think of the extract as a window into the whole text — not a wall that separates your essay into two halves.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending the entire essay on the extract and then rushing a single paragraph about the rest of the text. This approach caps your mark because the examiner cannot award full credit for whole-text knowledge if it appears only briefly. Aim for a genuine balance.</div>

<h3>Practical Planning Strategy</h3>

<p>Before you start writing, spend 3–4 minutes planning. Read the extract, underline key quotations, and jot down 3–4 wider-text references that connect to the question focus. Organise your plan so that each paragraph links an extract point to a wider-text point. This integrated approach shows the examiner that you understand the text as a complete work, not just a collection of isolated passages.</p>
`,
      quiz: [
        {
          id: 'et-aqa-m4-q1',
          question:
            'What approximate balance should your essay strike between extract analysis and wider-text knowledge?',
          options: [
            '90% extract, 10% wider text',
            '60% extract, 40% wider text',
            '50% extract, 50% wider text',
            '30% extract, 70% wider text',
          ],
          answer: 1,
          explanation:
            'Aim for approximately 60% extract analysis and 40% wider-text discussion. This ensures you demonstrate close analytical skills while also showing thorough knowledge of the whole text.',
        },
        {
          id: 'et-aqa-m4-q2',
          question: 'What does AO3 assess in Literature?',
          options: [
            'Spelling, punctuation, and grammar',
            'The relationship between texts and the contexts in which they were written',
            'The ability to compare two poems',
            'Creative writing skills',
          ],
          answer: 1,
          explanation:
            'AO3 assesses your understanding of the relationship between texts and their contexts — social, historical, and literary. It should be woven into analysis, not bolted on as a separate paragraph.',
        },
        {
          id: 'et-aqa-m4-q3',
          question: 'How many key quotations should you aim to memorise per set text?',
          options: ['3–5', '10–15', '25–30', '50+'],
          answer: 1,
          explanation:
            'Aim to memorise 10–15 key quotations spread across the whole text. Choose short, versatile quotations that connect to multiple themes and are rich in language features.',
        },
        {
          id: 'et-aqa-m4-q4',
          question: 'What is the best way to incorporate context into a Literature essay?',
          options: [
            'Write a dedicated history paragraph at the start',
            'Weave contextual understanding into your analysis throughout',
            'List historical dates at the end of each paragraph',
            'Only mention context in the conclusion',
          ],
          answer: 1,
          explanation:
            'Context should be woven into your analysis throughout the essay, not presented as a separate block. Connect contextual points to the writer\'s choices and the effects on the reader.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 5 — Poetry Comparison
    // ──────────────────────────────────────────────
    {
      id: 'et-aqa-m5',
      title: 'Poetry Comparison',
      duration: '20 min',
      content: `
<h2>Poetry Comparison — Structuring a Top-Band Response</h2>

<p>The poetry comparison question on AQA Literature Paper 2 is worth <strong>30 marks</strong> and requires you to compare two poems from the anthology: one printed on the paper and one chosen by you. You have approximately <strong>45 minutes</strong> for this question. It tests AO1 (understanding), AO2 (analysis of methods), and AO3 (context). The ability to compare effectively — showing how poets use different or similar methods to explore shared themes — is what separates good responses from excellent ones.</p>

<div class="key-term"><strong>Key Term: Poetry Comparison</strong> — The skill of analysing two poems side by side, identifying similarities and differences in themes, methods, and effects, and explaining why these matter.</div>

<h3>Choosing Your Second Poem</h3>

<p>Your choice of comparison poem is crucial. When you see the named poem and question, ask yourself: <em>Which other poem in the anthology deals with a similar theme but uses different methods?</em> Contrast is often more productive than similarity — it gives you more to write about. Prepare comparison pairs in advance so you can make a confident choice under exam pressure.</p>

<p>For example, if the exam names "Ozymandias" and asks about power, you might choose "My Last Duchess" — both explore power, but Shelley uses an impersonal third-person narrative about a decayed statue while Browning uses a dramatic monologue to reveal the Duke's controlling nature. The difference in form and voice gives you rich material for comparison.</p>

<h3>The Comparative Essay Structure</h3>

<p>Use the following paragraph structure to ensure your comparison is integrated and analytical:</p>

<ol>
  <li><strong>Introduction (2–3 sentences):</strong> Name both poems and state the key similarity or difference in their treatment of the theme. Do not waste time with generic openings — get straight to your argument.</li>
  <li><strong>Paragraph 1 — Shared theme, different methods:</strong> Identify a thematic link and compare how each poet approaches it through language. Analyse specific quotations from both poems.</li>
  <li><strong>Paragraph 2 — Structure and form:</strong> Compare how the poets use structural choices — rhyme scheme, enjambment, stanza form, volta, caesura — to shape meaning. Link these to the theme.</li>
  <li><strong>Paragraph 3 — Tone and voice:</strong> Compare the speakers' attitudes and how tone shifts across each poem. Consider how the reader's response differs between the two.</li>
  <li><strong>Paragraph 4 — Context and purpose:</strong> Compare the poets' intentions and the contexts that shaped their writing. How do historical, social, or personal factors influence the poems' messages?</li>
  <li><strong>Conclusion (2–3 sentences):</strong> Summarise the key difference in approach and offer a final evaluative comment on which poem you find more effective and why.</li>
</ol>

<h3>Linking Themes and Methods</h3>

<p>The mark scheme rewards students who link <em>what</em> a poem says to <em>how</em> it says it. Never discuss a theme in isolation — always connect it to a specific method. For example:</p>

<blockquote>"Both poets explore the destructive nature of power, but whereas Shelley conveys this through the ironic imagery of a 'shattered visage' lying in the desert — suggesting that even the mightiest rulers are eventually forgotten — Browning reveals it through the Duke's chilling possessive language: 'My last Duchess painted on the wall.' The possessive determiner 'My' reduces the Duchess to an object, exposing the dehumanising effect of unchecked authority."</blockquote>

<p>Notice how this paragraph names a shared theme (destructive power), provides quotations from both poems, analyses specific language choices, and draws a meaningful comparison. This is what the examiner wants to see in every paragraph.</p>

<h3>Comparative Connectives for Poetry</h3>

<p>Keep your comparison explicit by using connectives that signal relationship:</p>
<ul>
  <li><strong>Similarity:</strong> "Both poets…", "Like [Poet A], [Poet B] also…", "This echoes the presentation in…"</li>
  <li><strong>Contrast:</strong> "In contrast, [Poet B]…", "Whereas [Poet A] uses…, [Poet B] instead employs…", "Unlike the speaker in [Poem A]…"</li>
  <li><strong>Development:</strong> "While both poets share a concern with…, [Poet B] takes this further by…", "[Poet A]'s approach is more subtle, whereas [Poet B]…"</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Prepare at least three comparison pairs for each cluster in the anthology. For every pair, know one thematic link, one language comparison, and one structural comparison. This preparation means you will never be caught off guard by the named poem.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a full essay about the named poem and then adding a paragraph about the second poem at the end. This is not comparison — it is two separate analyses. Every paragraph should contain analysis of both poems, with explicit comparative language linking them.</div>
`,
      quiz: [
        {
          id: 'et-aqa-m5-q1',
          question: 'How many marks is the poetry comparison question worth?',
          options: ['15 marks', '20 marks', '25 marks', '30 marks'],
          answer: 3,
          explanation:
            'The AQA poetry comparison question is worth 30 marks, making it one of the highest-value questions on Literature Paper 2.',
        },
        {
          id: 'et-aqa-m5-q2',
          question: 'What is the best strategy for choosing your second poem?',
          options: [
            'Always pick the shortest poem',
            'Choose a poem with a similar theme but different methods',
            'Pick the poem you have the most quotations for',
            'Choose the poem immediately before the named poem in the anthology',
          ],
          answer: 1,
          explanation:
            'Choosing a poem with a similar theme but different methods gives you rich material for comparison. Contrast in methods is often more productive than pure similarity.',
        },
        {
          id: 'et-aqa-m5-q3',
          question: 'What should every paragraph in a poetry comparison contain?',
          options: [
            'A historical fact about each poet',
            'Analysis of both poems with explicit comparative language',
            'At least five quotations from each poem',
            'A personal opinion about which poem is better',
          ],
          answer: 1,
          explanation:
            'Every paragraph should analyse both poems with explicit comparative connectives linking them. Writing about one poem per paragraph is not comparison — it is two separate analyses.',
        },
        {
          id: 'et-aqa-m5-q4',
          question: 'Why is contrast often more productive than similarity in poetry comparison?',
          options: [
            'Examiners prefer negative responses',
            'It gives you more to write about and shows deeper understanding',
            'The mark scheme only rewards contrast',
            'Similar poems are not in the anthology',
          ],
          answer: 1,
          explanation:
            'Contrasting methods give you richer material for analysis and demonstrate deeper understanding of how different techniques can explore the same theme in different ways.',
        },
        {
          id: 'et-aqa-m5-q5',
          question: 'How many comparison pairs should you prepare per anthology cluster?',
          options: ['One pair', 'At least three pairs', 'Every possible combination', 'None — choose on the day'],
          answer: 1,
          explanation:
            'Preparing at least three comparison pairs per cluster — each with a thematic link, language comparison, and structural comparison — ensures you are ready for any named poem.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 6 — Time Management & Planning
    // ──────────────────────────────────────────────
    {
      id: 'et-aqa-m6',
      title: 'Time Management & Planning',
      duration: '20 min',
      content: `
<h2>Time Management & Planning — Minute-by-Minute Breakdown</h2>

<p>One of the most significant factors in exam performance — and one of the most overlooked — is <strong>time management</strong>. Every year, examiners report that students lose marks not because they lack knowledge, but because they run out of time on the final question or spend too long on low-tariff questions. This module gives you a precise, minute-by-minute plan for each AQA paper so you walk into the exam hall knowing exactly how your time will be spent.</p>

<div class="key-term"><strong>Key Term: Marks Per Minute</strong> — A simple calculation that helps you allocate time proportionally. Divide the number of marks a question is worth by the total time available. On AQA papers, a rough guide is approximately 1 mark per minute for reading questions and slightly longer for writing questions.</div>

<h3>Paper 1: Explorations in Creative Reading and Writing (1 hour 45 minutes)</h3>

<p>Paper 1 has one source text and five questions. Here is your minute-by-minute breakdown:</p>

<table>
  <thead>
    <tr><th>Task</th><th>Time</th><th>Notes</th></tr>
  </thead>
  <tbody>
    <tr><td>Read the source text carefully</td><td>10 min</td><td>Read twice — once for gist, once to annotate. Do not rush this step.</td></tr>
    <tr><td>Q1 — List four things (4 marks)</td><td>5 min</td><td>Quick and precise. No analysis needed.</td></tr>
    <tr><td>Q2 — Language analysis (8 marks)</td><td>10 min</td><td>Three PEEL paragraphs with word-level zoom.</td></tr>
    <tr><td>Q3 — Structure analysis (8 marks)</td><td>10 min</td><td>Focus on shifts, openings, endings, and narrative perspective changes.</td></tr>
    <tr><td>Q4 — Evaluation (20 marks)</td><td>20 min</td><td>Agree/disagree with a statement. Use evidence and explain effects.</td></tr>
    <tr><td>Q5 — Creative writing (40 marks)</td><td>45 min</td><td>5 min planning + 35 min writing + 5 min proofreading.</td></tr>
    <tr><td><strong>Buffer</strong></td><td><strong>5 min</strong></td><td>Use for proofreading or catching up if you fell behind.</td></tr>
  </tbody>
</table>

<h3>Paper 2: Writers' Viewpoints and Perspectives (1 hour 45 minutes)</h3>

<p>Paper 2 has two source texts and five questions. The reading section is slightly more demanding because you must process two texts:</p>

<table>
  <thead>
    <tr><th>Task</th><th>Time</th><th>Notes</th></tr>
  </thead>
  <tbody>
    <tr><td>Read both source texts</td><td>15 min</td><td>Annotate as you go — underline key viewpoints, methods, and tone shifts.</td></tr>
    <tr><td>Q1 — True/false statements (4 marks)</td><td>5 min</td><td>Straightforward retrieval. Work through methodically.</td></tr>
    <tr><td>Q2 — Summary of differences (8 marks)</td><td>10 min</td><td>Synthesise across both sources. Use comparative language.</td></tr>
    <tr><td>Q3 — Language analysis (12 marks)</td><td>12 min</td><td>Single-source analysis. Use PEEL and zoom in on methods.</td></tr>
    <tr><td>Q4 — Compare viewpoints and methods (16 marks)</td><td>18 min</td><td>Alternating structure. Both sources in every paragraph.</td></tr>
    <tr><td>Q5 — Transactional writing (40 marks)</td><td>45 min</td><td>5 min planning + 35 min writing + 5 min proofreading.</td></tr>
  </tbody>
</table>

<h3>Literature Paper 1 — Shakespeare and the 19th-Century Novel (1 hour 45 minutes)</h3>

<table>
  <thead>
    <tr><th>Task</th><th>Time</th><th>Notes</th></tr>
  </thead>
  <tbody>
    <tr><td>Section A — Shakespeare (30+4 marks)</td><td>55 min</td><td>5 min reading/planning + 45 min writing + 5 min checking. Extract then whole text.</td></tr>
    <tr><td>Section B — 19th-Century Novel (30 marks)</td><td>50 min</td><td>5 min reading/planning + 40 min writing + 5 min checking. Extract then whole text.</td></tr>
  </tbody>
</table>

<h3>Literature Paper 2 — Modern Text, Poetry, and Unseen (1 hour 45 minutes + 15 minutes)</h3>

<table>
  <thead>
    <tr><th>Task</th><th>Time</th><th>Notes</th></tr>
  </thead>
  <tbody>
    <tr><td>Section A — Modern Prose/Drama (30+4 marks)</td><td>45 min</td><td>No extract — pure essay from memory. Plan carefully.</td></tr>
    <tr><td>Section B — Poetry Comparison (30 marks)</td><td>45 min</td><td>Named poem + your choice. Integrated comparison throughout.</td></tr>
    <tr><td>Section C — Unseen Poetry Q1 (24 marks)</td><td>20 min</td><td>Analyse a single unseen poem. Focus on language, structure, form.</td></tr>
    <tr><td>Section C — Unseen Poetry Q2 (8 marks)</td><td>10 min</td><td>Compare with a second unseen poem. Brief, focused comparison.</td></tr>
  </tbody>
</table>

<h3>The Five-Minute Plan</h3>

<p>For every extended writing question, invest five minutes in planning. This is not wasted time — it is the most productive time you will spend. A five-minute plan prevents rambling, ensures you cover enough points, and gives your essay a clear trajectory. Your plan should include:</p>

<ul>
  <li>The main argument or focus of each paragraph (3–5 bullet points)</li>
  <li>Key quotations you will use (jot down the first few words as a reminder)</li>
  <li>A note on how you will begin and end your response</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Wear a watch. Do not rely on the exam hall clock — it may be hard to see. Set personal checkpoints: "By 10:15, I should be starting Q3." If you are running behind, shorten your current answer rather than skipping a question entirely. A brief answer will always earn more marks than a missing one.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending 25 minutes on Q2 (8 marks) and then only having 30 minutes for Q5 (40 marks). Always allocate time in proportion to marks. Q5 is worth five times as many marks as Q2, so it deserves five times as much time. Discipline yourself to move on when the clock tells you to.</div>
`,
      quiz: [
        {
          id: 'et-aqa-m6-q1',
          question: 'How long should you spend on Paper 1 Q5 (Creative Writing)?',
          options: ['25 minutes', '35 minutes', '45 minutes', '60 minutes'],
          answer: 2,
          explanation:
            'You should spend approximately 45 minutes on Q5 — 5 minutes planning, 35 minutes writing, and 5 minutes proofreading. This reflects its value as a 40-mark question.',
        },
        {
          id: 'et-aqa-m6-q2',
          question: 'What is the most common time management mistake students make?',
          options: [
            'Finishing too early',
            'Spending too long on low-tariff questions and rushing high-tariff ones',
            'Writing too quickly',
            'Planning for too long',
          ],
          answer: 1,
          explanation:
            'The most common mistake is spending disproportionate time on low-mark questions (like Q2 at 8 marks) and then running out of time for high-mark questions (like Q5 at 40 marks).',
        },
        {
          id: 'et-aqa-m6-q3',
          question: 'How long should a five-minute plan include?',
          options: [
            'A full draft of your essay',
            '3–5 bullet points with key quotations and paragraph focus',
            'Only a list of techniques to mention',
            'A detailed introduction written in full',
          ],
          answer: 1,
          explanation:
            'A five-minute plan should include 3–5 paragraph bullet points, key quotations (first few words as reminders), and a note on how to begin and end your response.',
        },
        {
          id: 'et-aqa-m6-q4',
          question: 'What should you do if you are running behind schedule in the exam?',
          options: [
            'Skip the current question entirely',
            'Shorten your current answer and move on',
            'Ask for extra time',
            'Write faster without planning',
          ],
          answer: 1,
          explanation:
            'If you are running behind, shorten your current answer rather than skipping a question. A brief answer always earns more marks than a missing one. Discipline yourself to move on.',
        },
      ],
    },
  ],

  // ═══════════════════════════════════════════════
  //  ASSESSMENT QUESTIONS
  // ═══════════════════════════════════════════════
  assessmentQuestions: [
    {
      id: 'et-aqa-aq1',
      question: 'Which assessment objective focuses on analysing language and structure?',
      options: ['AO1', 'AO2', 'AO3', 'AO4'],
      answer: 1,
      explanation:
        'AO2 assesses your ability to explain, comment on, and analyse how writers use language and structure to achieve effects and influence readers.',
    },
    {
      id: 'et-aqa-aq2',
      question: 'What does the "L" stand for in the PEEL paragraph structure?',
      options: ['Language', 'Link', 'List', 'Level'],
      answer: 1,
      explanation:
        'L stands for Link — linking back to the question focus or broadening your point by considering alternative interpretations.',
    },
    {
      id: 'et-aqa-aq3',
      question:
        'On Paper 1, how should you divide your 45 minutes for the creative writing question?',
      options: [
        '45 minutes writing',
        '10 min planning, 35 min writing',
        '5 min planning, 35 min writing, 5 min proofreading',
        '5 min planning, 40 min writing',
      ],
      answer: 2,
      explanation:
        'The ideal split is 5 minutes planning, 35 minutes writing, and 5 minutes proofreading. Planning prevents rambling; proofreading catches errors worth marks under AO6.',
    },
    {
      id: 'et-aqa-aq4',
      question:
        'What is the most effective structure for Paper 2 Q4 (Comparing Viewpoints)?',
      options: [
        'Block method — Source A then Source B',
        'Alternating method — both sources in every paragraph',
        'Chronological method — oldest source first',
        'Thematic method — one theme per paragraph without comparison',
      ],
      answer: 1,
      explanation:
        'The alternating (point-by-point) method is most effective because it ensures you are comparing throughout, rather than writing two separate analyses.',
    },
    {
      id: 'et-aqa-aq5',
      question:
        'In a Literature extract question, what balance should you aim for between extract and wider text?',
      options: [
        '100% extract',
        '80% extract, 20% wider text',
        '60% extract, 40% wider text',
        '40% extract, 60% wider text',
      ],
      answer: 2,
      explanation:
        'Approximately 60% extract and 40% wider text ensures you demonstrate both close analytical skills and thorough knowledge of the whole text.',
    },
    {
      id: 'et-aqa-aq6',
      question: 'How many key quotations should you memorise per Literature set text?',
      options: ['3–5', '10–15', '25–30', '50+'],
      answer: 1,
      explanation:
        'Aim for 10–15 short, versatile quotations spread across the whole text. Choose ones that are rich in language features and connect to multiple themes.',
    },
    {
      id: 'et-aqa-aq7',
      question:
        'What is the biggest weakness examiners report in student creative writing?',
      options: [
        'Using too many adjectives',
        'Writing too little',
        'Over-reliance on visual description at the expense of other senses',
        'Using overly complex vocabulary',
      ],
      answer: 2,
      explanation:
        'Over-reliance on sight is the most common weakness. Strong creative writing engages all five senses — sound, smell, touch, and taste alongside sight — to create immersive, vivid scenes.',
    },
    {
      id: 'et-aqa-aq8',
      question:
        'When comparing poems, why is contrast often more productive than similarity?',
      options: [
        'The mark scheme only awards marks for differences',
        'It gives richer material for analysis and shows deeper understanding',
        'Poets never write about the same themes',
        'Examiners dislike responses that find similarities',
      ],
      answer: 1,
      explanation:
        'Contrasting methods provide richer material for analysis. Explaining how two poets use different techniques to explore a shared theme demonstrates deeper understanding of both craft and meaning.',
    },
    {
      id: 'et-aqa-aq9',
      question:
        'What should you do if you are running behind on time during an exam?',
      options: [
        'Skip the remaining questions',
        'Write faster without planning',
        'Shorten your current answer and move on to ensure every question is attempted',
        'Ask the invigilator for extra time',
      ],
      answer: 2,
      explanation:
        'Shortening your current answer and moving on is always better than skipping questions. A brief answer will earn some marks; a missing answer earns none.',
    },
    {
      id: 'et-aqa-aq10',
      question:
        'What is the purpose of weaving context (AO3) into a Literature essay?',
      options: [
        'To show you have revised historical dates',
        'To demonstrate understanding of how social, historical, and literary factors shape the text',
        'To fill up space when you run out of analysis',
        'To impress the examiner with background knowledge',
      ],
      answer: 1,
      explanation:
        'AO3 rewards understanding of how context shapes meaning. Weaving it into analysis — connecting historical, social, or literary factors to the writer\'s choices — elevates your response from descriptive to perceptive.',
    },
  ],
};

export default aqaExamTechnique;
