// Edexcel IGCSE English Language Specification B (4EB1) — Dedicated Course
// All content is Edexcel IGCSE Spec B-specific — NOT Spec A, NOT Edexcel GCSE

const edexcelIgcseSpecB = {
  id: 'edexcel-igcse-spec-b-lang',
  title: 'IGCSE English Language Spec B',
  subtitle: 'Reading & Writing — Specification 4EB1',
  tier: 'IGCSE',
  board: 'Edexcel',
  specCode: '4EB1',
  price: 0,
  duration: '5 hours',
  level: 'Intermediate',
  description: 'Complete preparation for Edexcel IGCSE English Language Specification B.',
  color: 'from-red-700 to-red-900',
  moduleList: [
    {
      id: 'esb-m1',
      title: 'Paper 1 Section A: Reading Non-Fiction',
      duration: '35 mins',
      content: `<h2>Comprehension Strategies for Non-Fiction Texts</h2>
<p>Specification B (4EB1) is a <strong>single 3-hour exam</strong> worth 100 marks, and it begins with Section A: Reading. This section presents you with <strong>two unseen extracts</strong> — at least one of which will be non-fiction — and asks seven questions worth a total of 40 marks. Unlike Spec A, there is no anthology: every text you encounter is completely unseen, so your comprehension strategies must be sharp and transferable.</p>

<div class="key-term"><strong>Key Term: Explicit meaning</strong> — Information stated directly in the text. When a question asks you to "identify" or "select," you are looking for explicit meaning. For example, if the text says "the expedition set out in March," the departure date is explicit.</div>

<h3>Reading for Explicit Meaning</h3>
<p>Questions 1, 2, 4, and 5 test your ability to retrieve explicit information quickly and accurately. These short-answer questions are worth only 5 marks combined, so speed is essential. Read the specified line range, locate the exact information, and write it down — no analysis, no elaboration.</p>

<h3>Reading for Implicit Meaning</h3>
<p>Beyond what is stated directly, examiners want you to infer meaning from context. A travel writer who describes a landscape as "bruised and broken" is not literally describing injuries — they are implying desolation, perhaps post-conflict damage or environmental ruin. Recognising implicit meaning is what separates competent readers from excellent ones.</p>

<div class="key-term"><strong>Key Term: Implicit meaning</strong> — Meaning that is suggested or implied rather than stated outright. You must "read between the lines" to detect attitudes, feelings, and ideas the writer hints at through word choice, imagery, and tone.</div>

<h3>A Systematic Approach</h3>
<p>When you first open the paper, resist the urge to start writing immediately. Instead:</p>
<ul>
<li><strong>First read (5 minutes):</strong> Read both extracts through once for overall understanding. Ask yourself: What is each text about? Who wrote it? Why?</li>
<li><strong>Second read:</strong> Re-read with a pen in hand. Underline key phrases, circle striking vocabulary, annotate tone shifts in the margin.</li>
<li><strong>Then answer:</strong> Work through Q1–Q7 in order, referring back to the text constantly.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Non-fiction texts in Spec B can include journalism, travel writing, autobiography, memoir, speeches, letters, blogs, and opinion columns. Practise reading a wide range of non-fiction so that no text type feels unfamiliar on exam day.</div>

<h3>Common Non-Fiction Features to Watch For</h3>
<ul>
<li><strong>Anecdote:</strong> A short personal story used to engage the reader or illustrate a point</li>
<li><strong>Direct address:</strong> Speaking to the reader as "you" to create a connection</li>
<li><strong>Statistics and facts:</strong> Used to add authority and credibility</li>
<li><strong>Expert opinion:</strong> Quotations from authorities to support an argument</li>
<li><strong>Rhetorical questions:</strong> Questions asked for effect, not expecting an answer</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating non-fiction as though it has no craft. Students sometimes assume non-fiction is "just facts" and fail to analyse the writer's deliberate choices. Every word in a published text was chosen — analyse non-fiction with the same rigour you would apply to a novel.</div>`,
      quiz: [
        { id: 'esb-m1-q1', question: 'How many marks is Section A (Reading) worth on the Spec B paper?', options: ['30 marks', '40 marks', '50 marks', '60 marks'], correct: 1, explanation: 'Section A is worth 40 marks out of the total 100 on the Spec B paper.' },
        { id: 'esb-m1-q2', question: 'What is implicit meaning?', options: ['Information stated directly in the text', 'Meaning suggested or implied through word choice, imagery, and tone', 'The dictionary definition of a word', 'The writer\'s biography'], correct: 1, explanation: 'Implicit meaning is not stated outright — you infer it from context, word choice, imagery, and tone. It requires "reading between the lines."' },
        { id: 'esb-m1-q3', question: 'How many marks are Q1, Q2, Q4, and Q5 worth combined?', options: ['5 marks', '10 marks', '15 marks', '20 marks'], correct: 0, explanation: 'Q1 (1) + Q2 (1) + Q4 (1) + Q5 (2) = 5 marks. Answer these quickly to save time for higher-value questions.' },
        { id: 'esb-m1-q4', question: 'Why should you read both extracts before answering any questions?', options: ['The examiner checks your reading time', 'It helps you understand the overall content and themes before tackling individual questions', 'You must memorise the texts', 'It is a rule of the exam'], correct: 1, explanation: 'A preliminary read gives you an overview of both texts — their content, tone, and themes — so that you can answer questions more efficiently and accurately.' },
      ],
    },
    {
      id: 'esb-m2',
      title: 'Paper 1 Section A: Language Analysis',
      duration: '40 mins',
      content: `<h2>How Writers Use Language for Effect in Non-Fiction</h2>
<p>Questions 3 and 6 are the analytical heart of Section A, each worth <strong>10 marks</strong> and testing <strong>AO2</strong>: your ability to analyse how writers use language and structure to achieve effects. These questions separate the top grades from the middle tier, so mastering them is essential.</p>

<div class="key-term"><strong>Key Term: AO2</strong> — Understand and analyse how writers use linguistic and structural devices to achieve their effects. This means identifying techniques, providing evidence, and explaining the impact on the reader.</div>

<h3>Language Devices in Non-Fiction</h3>
<p>Non-fiction writers are just as deliberate in their language choices as novelists. Here are the key devices to look for:</p>
<ul>
<li><strong>Metaphor and simile:</strong> Comparing one thing to another to create vivid imagery — "the city was a furnace" or "refugees moved like a river of shadow"</li>
<li><strong>Emotive language:</strong> Words chosen to trigger an emotional response — "devastating," "innocent," "heartbreaking"</li>
<li><strong>Contrast and juxtaposition:</strong> Placing opposing ideas side by side to highlight differences — wealth vs poverty, silence vs noise</li>
<li><strong>Hyperbole:</strong> Deliberate exaggeration for emphasis — "the queue stretched to infinity"</li>
<li><strong>Listing and tricolon:</strong> Groups of three for rhythm and emphasis — "exhausted, starving, and desperate"</li>
</ul>

<h3>The WHAT–HOW–WHY Paragraph</h3>
<p>Every analytical point should follow this structure:</p>
<ul>
<li><strong>WHAT:</strong> Identify the technique the writer uses</li>
<li><strong>HOW:</strong> Provide a short embedded quotation as evidence</li>
<li><strong>WHY:</strong> Explain the effect on the reader — what does it make them think, feel, or visualise?</li>
</ul>

<div class="model-answer"><strong>Model Paragraph:</strong> The writer uses a metaphor, describing the refugee camp as "a city built from despair." The word "city" suggests vast scale, implying that suffering has become so widespread it has created its own infrastructure. "Despair" personifies the camp's construction material as an emotion, forcing the reader to confront the human cost behind the statistics. This metaphor transforms an abstract crisis into something tangible and disturbingly permanent.</div>

<h3>Structural Analysis</h3>
<p>Do not neglect structure — it carries marks too. In non-fiction, consider:</p>
<ul>
<li>How the writer opens and closes the text (circular structure, cliffhanger, call to action)</li>
<li>Shifts in tone, focus, or perspective within the text</li>
<li>Use of short paragraphs or single-sentence paragraphs for emphasis</li>
<li>Chronological vs non-chronological ordering of events</li>
<li>How the writer controls the reader's focus (zooming in/out, shifting between personal and global)</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Aim for 3 well-developed WHAT–HOW–WHY paragraphs per 10-mark question. Three detailed points will always outscore six shallow observations. Depth beats breadth.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> "Feature spotting" — writing "the writer uses alliteration" without explaining WHY it matters. Identifying a device earns minimal marks; analysing its effect is where the real marks lie.</div>`,
      quiz: [
        { id: 'esb-m2-q1', question: 'How many marks are Q3 and Q6 each worth?', options: ['5 marks', '10 marks', '15 marks', '20 marks'], correct: 1, explanation: 'Q3 and Q6 are each worth 10 marks. They test AO2 — analysis of language and structure.' },
        { id: 'esb-m2-q2', question: 'What does "feature spotting" mean?', options: ['A strong analytical technique', 'Identifying devices without explaining their effect on the reader', 'Spotting structural features only', 'Finding mistakes in the text'], correct: 1, explanation: 'Feature spotting is naming a technique without analysing its impact. It earns very few marks because the examiner wants to see analysis, not just identification.' },
        { id: 'esb-m2-q3', question: 'What is the WHAT–HOW–WHY structure?', options: ['A way to plan an essay', 'A paragraph structure: identify technique, quote evidence, explain effect', 'A reading strategy', 'A revision technique'], correct: 1, explanation: 'WHAT (name the technique), HOW (provide a quotation), WHY (explain the effect on the reader). This structure ensures every point is fully developed.' },
        { id: 'esb-m2-q4', question: 'Which of these is a structural feature rather than a language feature?', options: ['Metaphor', 'Sibilance', 'A shift from long to short paragraphs', 'Hyperbole'], correct: 2, explanation: 'A shift from long to short paragraphs is structural — it affects pace and emphasis. Metaphor, sibilance, and hyperbole are language features.' },
      ],
    },
    {
      id: 'esb-m3',
      title: 'Paper 1 Section B: Transactional Writing',
      duration: '35 mins',
      content: `<h2>Letters, Articles, Speeches, and Reports</h2>
<p>Section B of the Spec B paper is the <strong>directed writing</strong> task (Q8), worth <strong>30 marks</strong>. This is unique to Specification B — it combines reading comprehension with transactional writing. You must produce a piece of writing in a specified form (letter, article, speech, or report) that draws on ideas from the reading texts in Section A.</p>

<div class="key-term"><strong>Key Term: Directed writing</strong> — A writing task where you must use ideas from source texts as a springboard for your own writing. You need to demonstrate reading comprehension AND writing skill simultaneously.</div>

<h3>The Four Main Forms</h3>

<h4>Letters</h4>
<p>Formal letters require specific conventions: addresses in the top right, date, "Dear Sir/Madam" or a named recipient, formal sign-off ("Yours faithfully" for unknown recipients, "Yours sincerely" for named ones). Organise your argument into clear paragraphs, each making a distinct point.</p>

<h4>Articles</h4>
<p>Articles need a <strong>headline</strong>, an optional <strong>subheading</strong>, and an engaging opening that hooks the reader. Use a slightly less formal register than a letter — you can address the reader directly and use rhetorical techniques. End with a memorable closing statement or call to action.</p>

<h4>Speeches</h4>
<p>Speeches demand <strong>direct address</strong> ("Ladies and gentlemen," "Fellow students"), rhetorical questions, and a strong sense of voice. Use tricolons, repetition, and emotional appeals. Imagine delivering it aloud — if a sentence is too long to say in one breath, break it up.</p>

<h4>Reports</h4>
<p>Reports use a more impersonal, objective tone. Include a clear title, numbered or headed sections, and evidence-based recommendations. Avoid first-person opinions unless specifically asked for them.</p>

<h3>Drawing on the Source Texts</h3>
<p>The examiner allocates <strong>10 marks (AO1)</strong> for how well you use ideas from the reading texts. This does not mean copying — it means synthesising. Refer to arguments, statistics, or perspectives from the extracts and develop them in your own voice.</p>

<div class="model-answer"><strong>Example:</strong> If the reading texts debate adventure tourism, and you must write a speech, you might say: "As we have seen, the human cost of so-called adventure is not borne by the thrill-seekers themselves but by the communities who must rescue them" — weaving source material into your own argument.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Spend 5 minutes re-reading the source texts with Q8 in mind before you start writing. Underline 3–4 ideas from each text that you can reference. This ensures you hit the AO1 reading marks without having to stop mid-essay to search for material.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Ignoring the form conventions entirely. If the question asks for a letter and you write an essay without any letter features (address, salutation, sign-off), you will lose marks for AO4 — writing appropriately for purpose and audience.</div>`,
      quiz: [
        { id: 'esb-m3-q1', question: 'How many marks is the Section B directed writing task worth?', options: ['20 marks', '25 marks', '30 marks', '40 marks'], correct: 2, explanation: 'Q8 is worth 30 marks: 10 for AO1 (reading comprehension), 12 for AO4 (writing for purpose/audience), and 8 for AO5 (accuracy).' },
        { id: 'esb-m3-q2', question: 'What makes directed writing different from ordinary essay writing?', options: ['It must be handwritten', 'It requires you to draw on ideas from the source texts', 'It is always a letter', 'It does not require paragraphs'], correct: 1, explanation: 'Directed writing requires you to use ideas from the reading texts as a basis for your own writing, combining reading and writing skills.' },
        { id: 'esb-m3-q3', question: 'Which sign-off is correct for a formal letter to an unnamed recipient?', options: ['Yours sincerely', 'Yours faithfully', 'Best wishes', 'Kind regards'], correct: 1, explanation: '"Yours faithfully" is used when you do not know the recipient\'s name (Dear Sir/Madam). "Yours sincerely" is used when you do know the name.' },
        { id: 'esb-m3-q4', question: 'How many AO1 marks are allocated for using the source texts in Q8?', options: ['5 marks', '8 marks', '10 marks', '15 marks'], correct: 2, explanation: '10 marks are allocated to AO1 (reading), rewarding how well you reference and develop ideas from the source texts.' },
      ],
    },
    {
      id: 'esb-m4',
      title: 'Paper 1 Section B: Writing Techniques',
      duration: '35 mins',
      content: `<h2>Audience, Purpose, Form, and Rhetorical Devices</h2>
<p>Scoring highly on the directed writing task requires more than just understanding the source texts — you must demonstrate <strong>sophisticated control of writing for purpose and audience</strong>. AO4 (12 marks) rewards your ability to match your writing to the specified form, engage your audience, and use persuasive or rhetorical techniques effectively.</p>

<div class="key-term"><strong>Key Term: Register</strong> — The level of formality in your writing. A formal letter to a headteacher requires a different register from a magazine article aimed at teenagers. Matching your register to your audience is essential for AO4.</div>

<h3>Understanding Audience</h3>
<p>Before you write a single word, ask yourself: <strong>Who am I writing for?</strong> This determines your vocabulary, tone, sentence structure, and level of formality. Writing for a local council demands precision and objectivity. Writing for fellow students permits more colloquial language and personal anecdotes.</p>

<h3>Understanding Purpose</h3>
<p>The most common purposes in Spec B directed writing are:</p>
<ul>
<li><strong>To argue:</strong> Take a position and defend it with evidence and logic</li>
<li><strong>To persuade:</strong> Convince the reader to agree with you or take action</li>
<li><strong>To advise:</strong> Offer guidance in a supportive, authoritative tone</li>
<li><strong>To inform:</strong> Present facts and information clearly and objectively</li>
</ul>

<h3>Rhetorical Devices — The AFOREST Toolkit</h3>
<p>AFOREST is a useful mnemonic for persuasive and argumentative writing:</p>
<ul>
<li><strong>A</strong>necdote — A brief personal story to engage the reader emotionally</li>
<li><strong>F</strong>acts — Concrete information that adds credibility</li>
<li><strong>O</strong>pinion — Your viewpoint, stated confidently</li>
<li><strong>R</strong>hetorical questions — Questions asked for effect, making the reader think</li>
<li><strong>E</strong>motive language — Words designed to trigger an emotional response</li>
<li><strong>S</strong>tatistics — Numbers and data to support your argument</li>
<li><strong>T</strong>riple/tricolon — A group of three for rhythm and emphasis</li>
</ul>

<h3>Structuring Your Response</h3>
<p>A well-structured directed writing response typically follows this pattern:</p>
<ul>
<li><strong>Opening:</strong> Hook the reader, establish your purpose, and signal your argument</li>
<li><strong>Middle paragraphs (3–4):</strong> Each makes a distinct point, supported by evidence from the source texts and your own ideas</li>
<li><strong>Counter-argument (optional but impressive):</strong> Acknowledge the opposing view before dismantling it</li>
<li><strong>Closing:</strong> A memorable final statement — a call to action, a striking image, or a return to your opening (circular structure)</li>
</ul>

<div class="model-answer"><strong>Strong Opening (Article):</strong> "Every year, 300 million tourists descend on places they have no business visiting. They photograph poverty, they trample sacred ground, and they return home believing they have 'experienced' a culture. Adventure tourism is not exploration — it is consumption with better scenery."</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Vary your sentence lengths deliberately. A long, complex sentence followed by a short, punchy one creates rhythm and emphasis: "The evidence is overwhelming, the testimonies are harrowing, and the statistics paint a picture of systemic failure that should shame every institution involved. And yet, nothing changes."</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Using every rhetorical device in every paragraph. This creates a cluttered, exhausting piece of writing. Select 3–4 devices and use them purposefully. Quality and precision always outscore quantity.</div>`,
      quiz: [
        { id: 'esb-m4-q1', question: 'What does AFOREST stand for?', options: ['A mnemonic for narrative writing techniques', 'Anecdote, Facts, Opinion, Rhetorical questions, Emotive language, Statistics, Triple', 'A structural framework for essays', 'A revision strategy'], correct: 1, explanation: 'AFOREST is a mnemonic for persuasive/argumentative writing devices: Anecdote, Facts, Opinion, Rhetorical questions, Emotive language, Statistics, Triple (tricolon).' },
        { id: 'esb-m4-q2', question: 'What is "register" in writing?', options: ['The number of words you use', 'The level of formality matched to audience and purpose', 'A type of punctuation', 'The speed at which you write'], correct: 1, explanation: 'Register is the level of formality in your writing. It must be matched to the audience (e.g., formal for officials, informal for peers) and purpose.' },
        { id: 'esb-m4-q3', question: 'How many AO4 marks are available for the directed writing task?', options: ['8 marks', '10 marks', '12 marks', '20 marks'], correct: 2, explanation: 'AO4 carries 12 marks in Q8, rewarding your ability to write effectively for the specified purpose, audience, and form.' },
        { id: 'esb-m4-q4', question: 'Why is varying sentence length important?', options: ['It makes your handwriting neater', 'It creates rhythm and emphasis, keeping the reader engaged', 'The examiner counts your sentences', 'It is not important'], correct: 1, explanation: 'Varied sentence length creates rhythm. A long sentence followed by a short one produces emphasis and impact — a key marker of controlled, sophisticated writing.' },
      ],
    },
    {
      id: 'esb-m5',
      title: 'Paper 2 Section A: Reading Fiction',
      duration: '40 mins',
      content: `<h2>Prose Analysis and Narrative Technique</h2>
<p>Although Spec B is a single paper, the reading extracts can include <strong>fiction</strong> as well as non-fiction. When a prose fiction extract appears, the analytical skills you need shift from persuasive techniques to <strong>narrative craft</strong>. Understanding how fiction writers construct prose — through characterisation, setting, atmosphere, and narrative voice — is essential for the higher-mark questions.</p>

<div class="key-term"><strong>Key Term: Narrative voice</strong> — The perspective from which a story is told. First person ("I walked into the room") creates intimacy and subjectivity. Third person ("She walked into the room") allows broader perspective. The choice of narrative voice shapes the reader's relationship with characters and events.</div>

<h3>Key Elements of Prose Fiction</h3>

<h4>Characterisation</h4>
<p>Writers reveal character through multiple methods:</p>
<ul>
<li><strong>Direct description:</strong> "He was a thin, anxious man" — the narrator tells us directly</li>
<li><strong>Action:</strong> What a character does reveals who they are — a character who picks up litter shows conscientiousness</li>
<li><strong>Dialogue:</strong> How a character speaks (vocabulary, sentence length, dialect) reveals personality and social background</li>
<li><strong>Reaction:</strong> How other characters respond to someone reveals their status or personality</li>
<li><strong>Interior thought:</strong> Access to a character's thoughts creates empathy or suspicion</li>
</ul>

<h4>Setting and Atmosphere</h4>
<p>Setting is never just background — it reflects mood, foreshadows events, and reveals character. A decaying house suggests neglect or decline; a storm-lashed coast creates tension and danger. Look for <strong>pathetic fallacy</strong> (environment mirroring emotion), <strong>symbolism</strong> (objects carrying deeper meaning), and <strong>sensory detail</strong> (engaging sight, sound, smell, touch, taste).</p>

<h4>Narrative Structure</h4>
<p>Analyse how the extract is organised:</p>
<ul>
<li>Does it build tension through pacing — accelerating toward a climax?</li>
<li>Does it use flashback or foreshadowing?</li>
<li>Is there a twist or shift in perspective?</li>
<li>How does the opening engage the reader and the ending leave them?</li>
</ul>

<div class="model-answer"><strong>Model Analysis:</strong> The writer opens with a single declarative sentence: "The house was empty." This blunt, factual statement creates an immediate sense of absence and finality. The short sentence length contrasts with the longer, more descriptive sentences that follow, making the emptiness feel stark and deliberate. The use of past tense ("was") implies irreversibility — the house is not temporarily empty but permanently abandoned.</div>

<h3>Analysing Dialogue</h3>
<p>When fiction extracts include dialogue, analyse not just what characters say but how they say it. Short, clipped responses suggest tension or hostility. Long, flowing speech suggests confidence or dominance. Interruptions, pauses (indicated by dashes or ellipses), and unfinished sentences reveal emotional states.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing fiction, always consider the writer's choices, not just the character's actions. Ask: "Why did the WRITER choose to have this character say/do this?" This keeps your analysis focused on craft rather than storytelling.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Retelling the plot instead of analysing technique. Saying "the character walks into the room and sees the letter" is narrative summary. Saying "the writer delays the revelation of the letter's contents, using the character's physical movement through the room to build suspense" is analysis.</div>`,
      quiz: [
        { id: 'esb-m5-q1', question: 'Can fiction texts appear in the Spec B exam?', options: ['No — only non-fiction', 'Yes — both fiction and non-fiction can appear', 'Only poetry', 'Only 19th-century texts'], correct: 1, explanation: 'Spec B can include any text type: fiction, non-fiction, journalism, speeches, letters, autobiography, and more.' },
        { id: 'esb-m5-q2', question: 'What is "pathetic fallacy"?', options: ['A logical error in an argument', 'When the environment mirrors a character\'s emotions', 'A type of dialogue', 'An unreliable narrator'], correct: 1, explanation: 'Pathetic fallacy is when the weather, landscape, or environment reflects the mood or emotions of a character or scene — e.g., a storm during a moment of anger.' },
        { id: 'esb-m5-q3', question: 'What is the difference between plot retelling and analysis?', options: ['They are the same thing', 'Retelling describes what happens; analysis explains why the writer made those choices', 'Analysis is longer than retelling', 'Retelling is better for high marks'], correct: 1, explanation: 'Analysis focuses on the writer\'s craft — why they chose a particular technique and what effect it creates. Retelling simply describes events and scores very few marks.' },
        { id: 'esb-m5-q4', question: 'Which method of characterisation involves what a character does rather than what the narrator says about them?', options: ['Direct description', 'Action', 'Interior thought', 'Dialogue'], correct: 1, explanation: 'Characterisation through action (also called "showing, not telling") reveals personality through behaviour rather than explicit narrator commentary.' },
      ],
    },
    {
      id: 'esb-m6',
      title: 'Paper 2 Section A: Poetry Analysis',
      duration: '35 mins',
      content: `<h2>Approaching Unseen Poetry for Spec B</h2>
<p>While Spec B does <strong>not</strong> include a dedicated poetry component and there is no anthology of set poems, poetry extracts <em>can</em> appear as one of the unseen texts in Section A. When they do, students who have practised unseen poetry analysis have a significant advantage. This module equips you with a transferable approach to any poem you might encounter.</p>

<div class="key-term"><strong>Key Term: Unseen poetry</strong> — A poem you have never studied before, presented in an exam for immediate analysis. Success depends on transferable skills — identifying form, structure, language, and meaning — rather than memorised knowledge.</div>

<h3>Step-by-Step Approach</h3>
<ol>
<li><strong>Read it through twice.</strong> The first read is for overall impression — what is the poem about? The second read is for detail — how does the poet communicate that meaning?</li>
<li><strong>Identify the subject and theme.</strong> What is the poem literally about (surface meaning)? What deeper ideas or emotions does it explore (deeper meaning)?</li>
<li><strong>Consider the speaker.</strong> Who is speaking? What is their attitude or tone? Are they reflective, angry, nostalgic, celebratory?</li>
<li><strong>Examine form and structure.</strong> Is the poem in stanzas or free verse? Does it rhyme? Is there a volta (turn in thought)? Are there enjambment or caesura?</li>
<li><strong>Analyse language.</strong> What imagery, metaphor, symbolism, or sound devices (alliteration, assonance, sibilance) does the poet use? What effects do they create?</li>
</ol>

<h3>Key Poetic Devices</h3>
<ul>
<li><strong>Enjambment:</strong> A sentence running over from one line to the next without punctuation, creating flow or urgency</li>
<li><strong>Caesura:</strong> A pause within a line (usually marked by punctuation), creating emphasis or a sense of interruption</li>
<li><strong>Volta:</strong> A "turn" in the poem where the mood, argument, or direction shifts</li>
<li><strong>Imagery:</strong> Vivid descriptive language that appeals to the senses</li>
<li><strong>Symbolism:</strong> An object or image that represents something beyond its literal meaning</li>
</ul>

<div class="model-answer"><strong>Model Response:</strong> The poet uses enjambment between lines 3 and 4 — "she turned / away from the window" — to mirror the physical act of turning. The line break forces the reader to pause momentarily on "turned," emphasising the significance of this gesture. The lack of punctuation creates a sense of fluid, unstoppable movement, suggesting the character's decision is already made and irreversible.</div>

<h3>Tone and Mood</h3>
<p>Tone is the poet's attitude; mood is the atmosphere created for the reader. A poet might adopt a <strong>bitter</strong> tone while creating a <strong>melancholy</strong> mood. Always name the tone and support it with evidence: "The repetition of 'never' creates a tone of finality and regret."</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Even if you find a poem confusing, you can always comment on form, structure, and sound. Describing the effect of short stanzas, irregular rhythm, or harsh consonant sounds does not require you to understand every line of the poem.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Trying to decode a "hidden meaning" instead of analysing what is on the page. If you are unsure what a poem means, focus on HOW it communicates — the techniques, the structure, the sounds — rather than guessing at a single "correct" interpretation.</div>`,
      quiz: [
        { id: 'esb-m6-q1', question: 'Does Spec B have a dedicated poetry anthology?', options: ['Yes — 15 poems', 'Yes — 10 poems', 'No — but poetry may appear as an unseen text', 'No — poetry never appears on Spec B'], correct: 2, explanation: 'Spec B has no poetry anthology, but poetry extracts can appear as unseen texts in Section A. Being prepared for this possibility is important.' },
        { id: 'esb-m6-q2', question: 'What is a "volta" in poetry?', options: ['A type of rhyme scheme', 'A turn or shift in the poem\'s mood, argument, or direction', 'A poem with 14 lines', 'A repeated refrain'], correct: 1, explanation: 'A volta is a turning point in a poem where the thought, mood, or argument shifts direction. It is especially associated with sonnets but can appear in any poem.' },
        { id: 'esb-m6-q3', question: 'What is the difference between tone and mood?', options: ['They are the same thing', 'Tone is the poet\'s attitude; mood is the atmosphere created for the reader', 'Mood is the poet\'s attitude; tone is the atmosphere', 'Tone relates to sound; mood relates to colour'], correct: 1, explanation: 'Tone is the writer\'s attitude (e.g., bitter, celebratory). Mood is the feeling or atmosphere the reader experiences (e.g., melancholy, tense).' },
        { id: 'esb-m6-q4', question: 'What should you do if you find an unseen poem confusing?', options: ['Skip it entirely', 'Focus on form, structure, and sound devices — you can analyse these without understanding every line', 'Guess the meaning and write about that', 'Write about a poem you have studied instead'], correct: 1, explanation: 'You can always analyse observable features like form, structure, rhyme, rhythm, and sound. These earn marks even if you are unsure of the poem\'s full meaning.' },
      ],
    },
    {
      id: 'esb-m7',
      title: 'Paper 2 Section B: Composition',
      duration: '40 mins',
      content: `<h2>Imaginative, Descriptive, and Narrative Writing</h2>
<p>Section C of the Spec B paper offers you <strong>three writing choices</strong>: a discursive/argumentative task (Q9), a narrative task (Q10), and a descriptive task (Q11). You select <strong>one</strong>, and it is worth <strong>30 marks</strong> — 20 for AO4 (content, purpose, and organisation) and 10 for AO5 (technical accuracy including spelling, punctuation, and grammar). This module focuses on the creative options: narrative and descriptive writing.</p>

<div class="key-term"><strong>Key Term: Composition</strong> — The art of crafting a piece of writing. In Spec B, "composition" in Section C means producing an original piece of writing — either discursive, narrative, or descriptive — without reference to source texts.</div>

<h3>Narrative Writing (Q10)</h3>
<p>A successful narrative in a timed exam is <strong>focused and controlled</strong>. Do not attempt an epic spanning years — choose a single moment, scene, or encounter and explore it in depth.</p>

<h4>Narrative Structure Options</h4>
<ul>
<li><strong>Linear:</strong> Beginning → middle → end in chronological order</li>
<li><strong>In medias res:</strong> Start in the middle of the action, then reveal context</li>
<li><strong>Circular:</strong> End where you began, showing change or irony</li>
<li><strong>Flashback:</strong> Move between present and past to reveal backstory</li>
</ul>

<h4>Techniques for Strong Narrative</h4>
<ul>
<li>Show, don't tell: "Her hands trembled" is stronger than "She was nervous"</li>
<li>Use dialogue sparingly but purposefully — to reveal character or advance the plot</li>
<li>Control pacing: slow down for important moments with detail; speed up transitions</li>
<li>End with impact — a twist, a moment of realisation, or an image that lingers</li>
</ul>

<h3>Descriptive Writing (Q11)</h3>
<p>Descriptive writing is about creating a <strong>vivid, immersive experience</strong> for the reader. There is no plot requirement — you are painting a picture with words.</p>

<h4>The Five Senses Approach</h4>
<p>Engage every sense systematically:</p>
<ul>
<li><strong>Sight:</strong> Colour, light, shadow, movement, shape</li>
<li><strong>Sound:</strong> Volume, rhythm, contrast (silence vs noise)</li>
<li><strong>Smell:</strong> Often the most evocative and overlooked sense</li>
<li><strong>Touch:</strong> Texture, temperature, weight</li>
<li><strong>Taste:</strong> Can be used metaphorically — "the air tasted of salt and rust"</li>
</ul>

<div class="model-answer"><strong>Strong Descriptive Opening:</strong> "The market announced itself long before it came into view. First, the smell — charcoal and cinnamon, layered over something sharper, animal, alive. Then the sound: a low hum of voices that thickened into a roar as the alley opened into a square crammed with canvas and colour."</div>

<h3>Planning Your Composition</h3>
<p>Spend <strong>5–8 minutes planning</strong> before you write. For narrative, sketch out: opening, complication, climax, resolution. For descriptive, plan your focus: what is the central scene, and what senses will each paragraph explore? A plan prevents you from losing direction mid-piece.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> End your piece deliberately. The final sentence should feel crafted, not rushed. A strong closing image or sentence can elevate an entire piece. Draft your final sentence in your plan so you know where you are heading.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Running out of time and scribbling a rushed ending. If you plan properly and monitor your time, you will always have 5 minutes to write a strong conclusion and proofread. A weak ending undermines everything that came before it.</div>`,
      quiz: [
        { id: 'esb-m7-q1', question: 'How many marks is the Section C writing task worth?', options: ['20 marks', '25 marks', '30 marks', '40 marks'], correct: 2, explanation: 'Section C is worth 30 marks: 20 for AO4 (content and organisation) and 10 for AO5 (technical accuracy).' },
        { id: 'esb-m7-q2', question: 'What does "in medias res" mean?', options: ['Writing in the past tense', 'Starting in the middle of the action', 'Using a circular structure', 'Writing from multiple perspectives'], correct: 1, explanation: '"In medias res" is Latin for "in the middle of things." It means beginning your narrative at a dramatic or significant moment, then revealing context afterwards.' },
        { id: 'esb-m7-q3', question: 'Why is "show, don\'t tell" important in narrative writing?', options: ['It makes your writing longer', 'It creates vivid, immersive writing that engages the reader rather than simply stating facts', 'The examiner requires it', 'It is easier to write'], correct: 1, explanation: 'Showing through action, dialogue, and sensory detail creates a vivid experience for the reader. Telling (e.g., "she was sad") is flat and unengaging.' },
        { id: 'esb-m7-q4', question: 'How long should you spend planning your composition?', options: ['No planning — just start writing', '1–2 minutes', '5–8 minutes', '15–20 minutes'], correct: 2, explanation: '5–8 minutes of planning prevents you from losing direction, ensures a strong structure, and leaves time for a proper ending and proofreading.' },
      ],
    },
    {
      id: 'esb-m8',
      title: 'Revision & Exam Strategy',
      duration: '30 mins',
      content: `<h2>Spec B Paper Structure, Timing, and Common Pitfalls</h2>
<p>The Edexcel IGCSE English Language Spec B exam (4EB1) is a <strong>single 3-hour paper worth 100 marks</strong>. There is no second paper and no coursework. Everything rests on this one sitting, which makes strategic time management and awareness of common mistakes absolutely critical.</p>

<div class="key-term"><strong>Key Term: Paper structure</strong> — Section A: Reading (40 marks, ~1 hour) → Section B: Directed Writing (30 marks, ~1 hour) → Section C: Free Writing (30 marks, ~1 hour). The exam is designed in three equal time blocks.</div>

<h3>Section-by-Section Timing</h3>
<table>
<tr><th>Section</th><th>Marks</th><th>Advised Time</th><th>Key Tasks</th></tr>
<tr><td>A: Reading</td><td>40</td><td>60 mins</td><td>Read texts (10 mins), Q1–Q5 (10 mins), Q3 (12 mins), Q6 (12 mins), Q7 (16 mins)</td></tr>
<tr><td>B: Directed Writing</td><td>30</td><td>60 mins</td><td>Re-read texts with Q8 in mind (5 mins), plan (5 mins), write (40 mins), proofread (10 mins)</td></tr>
<tr><td>C: Free Writing</td><td>30</td><td>60 mins</td><td>Choose question (2 mins), plan (5 mins), write (43 mins), proofread (10 mins)</td></tr>
</table>

<h3>The Five Most Common Pitfalls</h3>

<h4>1. Poor Time Management</h4>
<p>The single biggest reason students underperform. If you spend 90 minutes on Section A, you have only 45 minutes each for Sections B and C — losing marks on 60% of the paper. Write your timing targets on the front of the paper as soon as the exam begins.</p>

<h4>2. Ignoring the Source Texts in Q8</h4>
<p>10 marks (one-third of Q8) reward your use of ideas from the reading texts. Students who write a generic essay without referencing the extracts throw away these marks. Always weave in 3–4 specific references.</p>

<h4>3. Feature Spotting Without Analysis</h4>
<p>Naming a technique without explaining its effect is worth almost nothing. Every point must include WHAT the device is, HOW it appears (with a quotation), and WHY it matters (its effect on the reader).</p>

<h4>4. Neglecting Proofreading</h4>
<p>AO5 (technical accuracy) contributes marks across both writing sections. Five minutes of proofreading at the end of each writing task can catch missing full stops, comma splices, spelling errors, and unclear phrasing. These are easy marks to gain — and easy marks to lose.</p>

<h4>5. Choosing the Wrong Section C Question</h4>
<p>Students sometimes pick a question because the topic sounds interesting, without considering whether it suits their writing strengths. If you are better at descriptive writing, choose Q11 even if Q9's topic is more exciting. Play to your strengths.</p>

<h3>Final Revision Checklist</h3>
<ul>
<li>Can you write a WHAT–HOW–WHY paragraph in under 5 minutes?</li>
<li>Can you compare two texts using the ping-pong method?</li>
<li>Do you know the conventions for letters, articles, speeches, and reports?</li>
<li>Have you practised at least two full timed papers under exam conditions?</li>
<li>Can you write a focused narrative or vivid description in 40 minutes?</li>
<li>Do you have a timing plan memorised for the 3-hour exam?</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Practise under timed conditions at least twice before the real exam. Knowing the material is not the same as being able to apply it in 3 hours. Timed practice builds the stamina, pacing, and decision-making skills that separate prepared students from hopeful ones.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Revising by re-reading notes passively. Active revision — writing practice answers, timing yourself, self-marking against the mark scheme — is far more effective. If you haven't written under timed conditions, you haven't truly revised.</div>`,
      quiz: [
        { id: 'esb-m8-q1', question: 'How long is the total Spec B exam?', options: ['2 hours', '2 hours 30 minutes', '3 hours', '3 hours 45 minutes'], correct: 2, explanation: 'The Spec B exam is a single 3-hour paper worth 100 marks. There is no second paper.' },
        { id: 'esb-m8-q2', question: 'What is the advised time split across the three sections?', options: ['30-60-90 minutes', '60-60-60 minutes', '45-45-90 minutes', '90-45-45 minutes'], correct: 1, explanation: 'The advised time is 60 minutes per section: 60 for Reading, 60 for Directed Writing, 60 for Free Writing.' },
        { id: 'esb-m8-q3', question: 'Why is proofreading worth your time?', options: ['It is not worth the time', 'AO5 marks for technical accuracy are easy to gain through proofreading', 'The examiner watches you proofread', 'It makes your handwriting better'], correct: 1, explanation: 'Proofreading catches spelling, punctuation, and grammar errors that cost AO5 marks. Five minutes of checking can gain several marks across both writing sections.' },
        { id: 'esb-m8-q4', question: 'How should you choose your Section C question?', options: ['Pick the topic that sounds most interesting', 'Always choose Q9 (discursive)', 'Choose the form that best suits your writing strengths', 'Pick randomly'], correct: 2, explanation: 'Choose based on your strengths, not the topic. If you write better descriptions than arguments, pick Q11 even if Q9\'s topic appeals to you. Play to your strengths under pressure.' },
      ],
    },
  ],
  assessmentQuestions: [
    { id: 'esb-a1', question: 'What is the Edexcel IGCSE Spec B qualification code?', options: ['4EA1', '4EB1', '1EN2', '8700'], correct: 1, explanation: 'Specification B is coded 4EB1. 4EA1 is Spec A, 1EN2 is Edexcel GCSE, 8700 is AQA.' },
    { id: 'esb-a2', question: 'How many papers make up the Spec B exam?', options: ['1', '2', '3', '4'], correct: 0, explanation: 'Spec B consists of a single 3-hour paper worth 100 marks. There is no second paper or coursework.' },
    { id: 'esb-a3', question: 'What is the total mark for the Spec B exam?', options: ['80', '90', '100', '120'], correct: 2, explanation: 'The Spec B exam is worth 100 marks: 40 (Reading) + 30 (Directed Writing) + 30 (Free Writing).' },
    { id: 'esb-a4', question: 'What is directed writing?', options: ['Copying the source texts', 'Writing that draws on ideas from the reading extracts for a new purpose and audience', 'A dictation exercise', 'Free creative writing'], correct: 1, explanation: 'Directed writing requires you to reference and develop ideas from the source texts while writing for a specified form, purpose, and audience.' },
    { id: 'esb-a5', question: 'Which AO does language and structure analysis test?', options: ['AO1', 'AO2', 'AO3', 'AO4'], correct: 1, explanation: 'AO2 tests your ability to analyse how writers use linguistic and structural devices to achieve effects.' },
    { id: 'esb-a6', question: 'How many marks does Q7 (comparison) carry?', options: ['10', '12', '15', '20'], correct: 2, explanation: 'Q7 is worth 15 marks — the highest-value purely reading question on the Spec B paper.' },
    { id: 'esb-a7', question: 'What is the WHAT–HOW–WHY paragraph structure?', options: ['A revision method', 'Identify technique, provide evidence, explain the effect on the reader', 'A way to structure an essay introduction', 'A timing strategy'], correct: 1, explanation: 'WHAT (identify the technique), HOW (quote evidence), WHY (explain the reader impact). It ensures every analytical point is fully developed.' },
    { id: 'esb-a8', question: 'How many writing options does Section C offer?', options: ['1', '2', '3', '4'], correct: 2, explanation: 'Section C offers three options: discursive/argumentative (Q9), narrative (Q10), and descriptive (Q11). You choose one.' },
    { id: 'esb-a9', question: 'What proportion of the total exam does writing account for?', options: ['30%', '40%', '50%', '60%'], correct: 3, explanation: 'Writing accounts for 60 marks out of 100 (Section B: 30 + Section C: 30), which is 60% of the total. However, 10 of Section B\'s marks are for reading (AO1).' },
    { id: 'esb-a10', question: 'What is the single biggest reason students underperform on Spec B?', options: ['Not knowing enough techniques', 'Poor time management across the 3-hour paper', 'Bad handwriting', 'Not reading enough books'], correct: 1, explanation: 'Poor time management is the most common pitfall. Spending too long on Section A leaves insufficient time for the two writing sections, which are worth 60% of the marks.' },
  ],
};

export default edexcelIgcseSpecB;
