// WJEC Eduqas GCSE English Language — Writing Skills
// All content is WJEC Eduqas-specific — NOT AQA, NOT Edexcel

const wjecGcseLangWriting = {
  id: 'wjec-gcse-lang-writing',
  title: 'WJEC Eduqas GCSE Language: Writing',
  subtitle: 'Master both writing components for the WJEC Eduqas GCSE English Language specification.',
  tier: 'GCSE',
  board: 'WJEC',
  specCode: 'Eduqas',
  price: 39,
  duration: '5-6 hours',
  level: 'GCSE (Years 10-11)',
  description: 'Complete preparation for the writing tasks across both WJEC Eduqas GCSE English Language components. Cover narrative and descriptive writing for Component 1, transactional writing for Component 2 (including the unique two-task requirement), technical accuracy, and timing strategies.',
  color: '#ea580c',
  moduleList: [
    {
      id: 'wjec-lw-m1',
      title: 'Component 1: Narrative Writing',
      duration: '35 mins',
      content: `<h2>Creative Prose: Telling a Story (40 marks)</h2>
<p>Component 1 Section B gives you a <strong>choice of four titles</strong> for a creative prose writing task. One option is always narrative — writing a story. This section is worth <strong>40 marks</strong> (24 for content/organisation, 16 for technical accuracy) and you should spend approximately 45 minutes on it in the exam.</p>

<div class="key-term"><strong>Key Term: Narrative writing</strong> — Writing that tells a story. It has characters, a setting, a sequence of events, and usually a turning point or moment of change. WJEC rewards controlled, crafted storytelling — not sprawling plots.</div>

<h3>The Four Title Choices</h3>
<p>WJEC Eduqas always provides <strong>four title options</strong> in Section B. These are typically short, evocative prompts:</p>
<ul>
<li>A single word: <em>"Trapped"</em></li>
<li>A phrase: <em>"The Last Day"</em></li>
<li>An opening line: <em>"I knew from the moment I saw it that everything had changed."</em></li>
<li>A scenario: <em>"Write about a time when you had to make a difficult decision."</em></li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Choose the title that sparks an immediate idea. Don't waste five minutes deliberating — pick the one you can picture most clearly and start planning. The best narratives come from genuine engagement with the prompt, not the "cleverest" title.</div>

<h3>Structure for Success</h3>
<p>WJEC examiners reward a <strong>clear narrative arc</strong>:</p>
<ul>
<li><strong>Opening:</strong> Hook the reader — start in the middle of the action or with a striking image</li>
<li><strong>Development:</strong> Build tension, reveal character through action and dialogue</li>
<li><strong>Turning point:</strong> A moment of change, realisation, or crisis</li>
<li><strong>Resolution:</strong> A satisfying ending — circular, ambiguous, or reflective</li>
</ul>

<div class="model-answer"><strong>Model Opening:</strong> "The envelope sat on the kitchen table for three days before anyone touched it. My mother walked past it each morning, adjusting its position slightly — a centimetre to the left, a nudge toward the fruit bowl — as though she could rearrange its contents by rearranging its place."</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Trying to write a blockbuster with car chases, explosions, and plot twists. WJEC rewards control and craft. A quiet, well-observed story about a family meal will outscore a chaotic action thriller every time. Keep your scope small — one scene, one moment, one shift.</div>`,
      quiz: [
        { id: 'wjec-lw-m1-q1', question: 'How many title options are given for the Component 1 writing task?', options: ['Two', 'Three', 'Four', 'Five'], correct: 2, explanation: 'WJEC Eduqas provides four title options in Component 1 Section B. You choose one.' },
        { id: 'wjec-lw-m1-q2', question: 'How many marks is the Component 1 writing task worth?', options: ['20 marks', '30 marks', '40 marks', '50 marks'], correct: 2, explanation: 'The writing task is worth 40 marks: 24 for content and organisation, 16 for technical accuracy.' },
        { id: 'wjec-lw-m1-q3', question: 'What is the best scope for a narrative in a timed exam?', options: ['An epic spanning several years', 'A single scene or moment explored in depth', 'As many characters as possible', 'Multiple storylines that interweave'], correct: 1, explanation: 'WJEC examiners reward controlled, crafted writing. Focusing on a single scene allows you to develop it richly with detail and technique.' },
        { id: 'wjec-lw-m1-q4', question: 'What should a strong narrative opening do?', options: ['Introduce every character', 'Explain the entire backstory', 'Hook the reader with action or a striking image', 'Describe the weather in detail'], correct: 2, explanation: 'A strong opening hooks the reader immediately — starting in the middle of the action or with a compelling image draws the examiner in from the first line.' },
      ],
    },
    {
      id: 'wjec-lw-m2',
      title: 'Component 1: Descriptive Writing',
      duration: '35 mins',
      content: `<h2>Creative Prose: Painting a Picture (40 marks)</h2>
<p>Among the four title choices in Component 1 Section B, at least one option will suit <strong>descriptive writing</strong> — writing that creates a vivid scene or atmosphere rather than telling a story. The same 40-mark scheme applies: 24 for content/organisation, 16 for technical accuracy.</p>

<div class="key-term"><strong>Key Term: Descriptive writing</strong> — Writing that creates a vivid picture using sensory detail, figurative language, and carefully chosen vocabulary. Unlike narrative, it does not need a plot — instead it explores a place, person, or moment in rich detail.</div>

<h3>The Five Senses Approach</h3>
<p>The strongest descriptive writing engages <strong>all five senses</strong>, not just sight:</p>
<ul>
<li><strong>Sight:</strong> Colour, light, shadow, movement, shape</li>
<li><strong>Sound:</strong> Volume, rhythm, silence, contrast</li>
<li><strong>Smell:</strong> Sharp, sweet, chemical, natural</li>
<li><strong>Touch:</strong> Texture, temperature, weight, pressure</li>
<li><strong>Taste:</strong> Often metaphorical — "the air tasted of salt and rust"</li>
</ul>

<div class="text-extract">"The market heaved. Crates of oranges blazed under strip lights, their skins dimpled and waxy, releasing a sharp sweetness that cut through the diesel fumes drifting from the loading bay. Underfoot, cabbage leaves and cardboard pulped together into a slick, grey paste."<div class="source">Example descriptive writing — a market scene</div></div>

<h3>Structural Techniques for Description</h3>
<p>Even without a plot, descriptive writing needs <strong>structure</strong>:</p>
<ul>
<li><strong>Zoom in / zoom out:</strong> Start with a wide shot, then focus on a single detail</li>
<li><strong>Shift in time:</strong> Move from morning to evening, or present to past</li>
<li><strong>Contrast:</strong> Juxtapose two different elements — noise and silence, beauty and decay</li>
<li><strong>Circular structure:</strong> Return to the opening image at the end with a new perspective</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> WJEC mark schemes reward "ambitious and adventurous" vocabulary. This does not mean using the longest word you know — it means choosing the <em>precise</em> word. "Dimpled" is more effective than "bumpy." "Blazed" is more vivid than "were bright."</div>

<div class="model-answer"><strong>Model Paragraph (Person Description):</strong> "My grandmother's hands told the story her voice never would. Each knuckle was swollen like a knot in old rope, the skin between them papery and translucent, mapped with veins the colour of bruised plums. She held the teacup as though it were a small bird — gently, precisely, aware that one wrong movement could shatter the moment."</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a list of adjectives without creating atmosphere. "The room was big, dark, cold, and scary" scores far lower than a single well-developed image: "The room breathed cold. Somewhere in the dark, a tap dripped, each drop hitting porcelain like a countdown." Quality over quantity, always.</div>`,
      quiz: [
        { id: 'wjec-lw-m2-q1', question: 'How many senses should strong descriptive writing engage?', options: ['One (sight only)', 'Two (sight and sound)', 'Three (sight, sound, smell)', 'All five senses'], correct: 3, explanation: 'The best descriptive writing engages all five senses — sight, sound, smell, touch, and taste — creating an immersive experience for the reader.' },
        { id: 'wjec-lw-m2-q2', question: 'What does "ambitious and adventurous vocabulary" mean in the WJEC mark scheme?', options: ['Using the longest words possible', 'Choosing precise, vivid words rather than generic ones', 'Including at least 10 metaphors', 'Using words from other languages'], correct: 1, explanation: 'The mark scheme rewards precise word choice — selecting the exact word that captures a detail vividly. Precision is more impressive than length.' },
        { id: 'wjec-lw-m2-q3', question: 'What structural technique involves starting wide then focusing on a detail?', options: ['Flashback', 'Zoom in / zoom out', 'Circular structure', 'Stream of consciousness'], correct: 1, explanation: 'Zooming in starts with a broad view of the scene, then narrows to a specific detail. This gives the reader a sense of place before drawing them into a focused moment.' },
        { id: 'wjec-lw-m2-q4', question: 'What is the difference between descriptive and narrative writing?', options: ['Descriptive is longer', 'Descriptive creates a vivid scene; narrative tells a story with events', 'Narrative uses more adjectives', 'There is no difference'], correct: 1, explanation: 'Descriptive writing paints a picture of a place, person, or moment. Narrative writing tells a story with characters and events. Descriptive writing does not need a plot.' },
      ],
    },
    {
      id: 'wjec-lw-m3',
      title: 'Component 2: Transactional Writing Task 1',
      duration: '35 mins',
      content: `<h2>Writing for Purpose and Audience (20 marks)</h2>
<p>Component 2 Section B tests your <strong>transactional writing</strong> — real-world writing with a clear purpose, audience, and form. Task 1 is a compulsory writing task worth <strong>20 marks</strong> (12 for content/organisation, 8 for technical accuracy). You should spend approximately 30 minutes on it.</p>

<div class="key-term"><strong>Key Term: Transactional writing</strong> — Writing that communicates for a practical purpose: to argue, persuade, advise, inform, explain, or review. It always specifies a form (article, speech, letter, report, review) and an audience (headteacher, local newspaper readers, peers).</div>

<h3>Common Forms in WJEC Exams</h3>
<ul>
<li><strong>Article</strong> — for a newspaper or magazine (headline, subheadings, engaging opening)</li>
<li><strong>Speech</strong> — to persuade a live audience (rhetorical devices, direct address)</li>
<li><strong>Letter</strong> — formal or informal depending on recipient (appropriate salutation, register)</li>
<li><strong>Report</strong> — presenting findings or recommendations (headings, formal tone)</li>
<li><strong>Review</strong> — evaluating something for readers (balanced judgement, personal voice)</li>
</ul>

<div class="text-extract">"Your school is considering banning mobile phones on the premises. Write an article for the school magazine in which you give your views on this proposal."<div class="source">Example WJEC Eduqas Component 2 writing task</div></div>

<h3>Matching Form and Register</h3>
<p>The <strong>form</strong> dictates your layout and conventions. The <strong>audience</strong> dictates your register:</p>
<ul>
<li>Letter to an MP → formal register, measured tone, Dear Sir/Madam</li>
<li>Article for a teen magazine → semi-formal, engaging, conversational</li>
<li>Speech to your year group → direct address, humour, rhetorical questions</li>
</ul>

<div class="model-answer"><strong>Model Speech Opening:</strong> "Picture this: it's Monday morning, 8:47 a.m., and you're sat in registration scrolling through last night's messages. Your thumb moves on autopilot. You don't even know what you're looking at. And then — confiscated. Gone. And suddenly, the next six hours feel like six years. Sound familiar? That's exactly why we need to talk about this phone ban."</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> WJEC examiners specifically check that you have used the correct form conventions. If the task says "write a letter," you MUST include an address, date, salutation, and sign-off. Missing these costs marks on content and organisation.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Ignoring the specified audience. A letter to your headteacher should not read like a text to your friend. Mismatched register is one of the most common reasons students drop marks on transactional writing.</div>`,
      quiz: [
        { id: 'wjec-lw-m3-q1', question: 'How many marks is each transactional writing task worth on Component 2?', options: ['10 marks', '15 marks', '20 marks', '40 marks'], correct: 2, explanation: 'Each transactional writing task on Component 2 is worth 20 marks: 12 for content and organisation, 8 for technical accuracy.' },
        { id: 'wjec-lw-m3-q2', question: 'What must you include if the task asks you to write a letter?', options: ['Just the letter body', 'Address, date, salutation, and sign-off', 'A headline and subheadings', 'Bullet points'], correct: 1, explanation: 'A letter requires proper conventions: address, date, Dear Sir/Madam (or named recipient), the letter body, and Yours faithfully/sincerely. Missing these loses marks.' },
        { id: 'wjec-lw-m3-q3', question: 'What does "register" mean in transactional writing?', options: ['A list of names', 'The level of formality matching your audience', 'The number of paragraphs', 'A type of sentence structure'], correct: 1, explanation: 'Register is the level of formality in your writing. It must be appropriate for the specified audience — formal for authority figures, semi-formal for peers.' },
        { id: 'wjec-lw-m3-q4', question: 'Which persuasive technique involves asking questions the audience cannot answer?', options: ['Anecdote', 'Emotive language', 'Rhetorical question', 'Statistics'], correct: 2, explanation: 'Rhetorical questions engage the audience by making them think without requiring a verbal answer. They are especially effective in speeches and articles.' },
      ],
    },
    {
      id: 'wjec-lw-m4',
      title: 'Component 2: Transactional Writing Task 2',
      duration: '35 mins',
      content: `<h2>The Second Compulsory Task: A Key WJEC Difference (20 marks)</h2>
<p>This is one of the most important differences between WJEC Eduqas and other exam boards. On Component 2, you must write <strong>TWO transactional pieces</strong> — not a choice of one from two, but <strong>both tasks are compulsory</strong>. Task 2 is also worth 20 marks (12 for content/organisation, 8 for technical accuracy).</p>

<div class="key-term"><strong>Key WJEC Difference:</strong> Unlike AQA (which offers one writing task) or Edexcel (which offers a choice), WJEC Eduqas requires students to write TWO separate transactional pieces in Component 2. This means you must be confident in multiple forms and manage your time carefully.</div>

<h3>Why Two Tasks?</h3>
<p>WJEC designed this to test your <strong>range and adaptability</strong>. The two tasks will always differ in:</p>
<ul>
<li><strong>Form:</strong> If Task 1 is an article, Task 2 might be a letter or speech</li>
<li><strong>Purpose:</strong> If Task 1 asks you to argue, Task 2 might ask you to advise or inform</li>
<li><strong>Audience:</strong> If Task 1 targets adults, Task 2 might target peers</li>
</ul>

<div class="text-extract">"Task 1: Write an article for a national newspaper in which you argue that young people should be given the vote at 16.<br><br>Task 2: Write a letter to your local MP in which you explain the issues that matter most to young people in your area."<div class="source">Example WJEC Eduqas Component 2 paired tasks</div></div>

<h3>Adapting Between Tasks</h3>
<p>The examiner is looking for <strong>clear shifts</strong> between your two pieces:</p>
<ul>
<li>Different opening strategies (a shocking statistic for the article; a formal greeting for the letter)</li>
<li>Different tone and register (polemical and punchy for the article; measured and respectful for the letter)</li>
<li>Different structural conventions (subheadings for the article; paragraphed prose for the letter)</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Do NOT copy content from Task 1 into Task 2. Even though the tasks may share a theme, the examiner wants to see two distinct pieces with different approaches. Recycling paragraphs will be penalised.</div>

<div class="model-answer"><strong>Adapting the Same Theme:</strong> If both tasks relate to "young people and politics," your article might use bold statistics and provocative rhetorical questions, while your letter should take a measured, evidence-based approach with specific local examples. Same topic, completely different execution.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending too long on Task 1 and rushing Task 2. Both tasks carry equal marks (20 each). Students who spend 40 minutes on Task 1 and only 15 on Task 2 are throwing away marks. Split your time evenly — approximately 30 minutes each.</div>`,
      quiz: [
        { id: 'wjec-lw-m4-q1', question: 'How many transactional writing tasks must you complete on Component 2?', options: ['One (from a choice of two)', 'One (compulsory)', 'Two (both compulsory)', 'Three (choose two)'], correct: 2, explanation: 'WJEC Eduqas requires TWO compulsory transactional writing tasks on Component 2. This is unique to WJEC — AQA and Edexcel do not require two separate pieces.' },
        { id: 'wjec-lw-m4-q2', question: 'How should you split your time between the two writing tasks?', options: ['Spend most time on Task 1', 'Spend most time on Task 2', 'Split time evenly — about 30 minutes each', 'It does not matter'], correct: 2, explanation: 'Both tasks are worth 20 marks each, so you should spend roughly equal time on both — approximately 30 minutes per task.' },
        { id: 'wjec-lw-m4-q3', question: 'Can you reuse content from Task 1 in Task 2?', options: ['Yes — it saves time', 'Yes — if you change a few words', 'No — the examiner wants two distinct pieces', 'Only the conclusion'], correct: 2, explanation: 'The examiner wants to see two distinct pieces with different approaches, register, and structure. Recycling content from Task 1 into Task 2 will be penalised.' },
        { id: 'wjec-lw-m4-q4', question: 'What makes the two WJEC tasks different from each other?', options: ['They test different subjects', 'They differ in form, purpose, and audience', 'They are always the same form', 'Only the word count is different'], correct: 1, explanation: 'The two tasks will differ in form (e.g., article vs letter), purpose (e.g., argue vs advise), and audience (e.g., general public vs a specific person). This tests your range and adaptability.' },
      ],
    },
    {
      id: 'wjec-lw-m5',
      title: 'SPaG & Technical Accuracy for WJEC',
      duration: '30 mins',
      content: `<h2>Technical Accuracy: 16 Marks on Component 1, 16 Marks on Component 2</h2>
<p>Across both components, <strong>technical accuracy accounts for a significant portion of your writing marks</strong>. On Component 1, 16 of the 40 writing marks are for accuracy. On Component 2, 8 marks per task (16 total) reward spelling, punctuation, and grammar. Getting SPaG right is one of the easiest ways to boost your grade.</p>

<div class="key-term"><strong>Key Term: SPaG</strong> — Spelling, Punctuation, and Grammar. In the WJEC mark scheme, this falls under "technical accuracy" and is assessed alongside vocabulary range and sentence control. It is not a bolt-on — it is integrated into every writing mark band.</div>

<h3>Punctuation That Impresses</h3>
<p>WJEC examiners reward <strong>ambitious punctuation used correctly</strong>:</p>
<ul>
<li><strong>Semicolons:</strong> Join two related sentences — "The door creaked open; nobody was there."</li>
<li><strong>Colons:</strong> Introduce a list or explanation — "There was only one option: run."</li>
<li><strong>Dashes:</strong> For parenthetical asides — "The house — if you could call it that — leaned at an impossible angle."</li>
<li><strong>Ellipsis:</strong> For trailing off or building suspense — "She reached for the handle and…"</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The WJEC mark scheme specifically rewards "a range of punctuation used accurately." Using only full stops and commas limits you to Band 2. To reach Band 4 (the highest), you must demonstrate semicolons, colons, dashes, and other punctuation — and use them correctly.</div>

<h3>Sentence Variety</h3>
<p>Vary your sentence structures deliberately:</p>
<ul>
<li><strong>Short sentence for impact:</strong> "She stopped."</li>
<li><strong>Complex sentence:</strong> "Although the rain had eased, the streets still glistened with a slick, oily sheen."</li>
<li><strong>Fronted adverbial:</strong> "Carefully, she placed the letter on the table."</li>
<li><strong>Noun phrase opener:</strong> "A flicker of doubt — barely perceptible — crossed his face."</li>
</ul>

<h3>Common Spelling Errors to Avoid</h3>
<p>These are the words WJEC examiners report as most frequently misspelled:</p>
<ul>
<li><em>their / there / they're</em> — possessive / place / they are</li>
<li><em>its / it's</em> — belonging to it / it is</li>
<li><em>definitely</em> (not "definately")</li>
<li><em>separate</em> (not "seperate")</li>
<li><em>because</em> (not "becuase")</li>
</ul>

<div class="model-answer"><strong>Proofreading Checklist:</strong> In the final 3-5 minutes of each writing task, check: 1) Every sentence has a capital letter and full stop. 2) Apostrophes are correct. 3) Homophones are right (their/there/they're). 4) Paragraphs are used. 5) At least one semicolon or colon is used correctly.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Using ambitious vocabulary that you cannot spell. "The atmosphere was eerily tense" scores higher than "The atmsophere was uncannily forebodding." If you are unsure how to spell a word, use a simpler synonym that you can spell correctly.</div>`,
      quiz: [
        { id: 'wjec-lw-m5-q1', question: 'How many marks are allocated to technical accuracy on the Component 1 writing task?', options: ['8 marks', '12 marks', '16 marks', '24 marks'], correct: 2, explanation: 'On Component 1, 16 of the 40 writing marks are for technical accuracy (spelling, punctuation, grammar, and sentence control).' },
        { id: 'wjec-lw-m5-q2', question: 'What punctuation must you use to reach the highest mark band for technical accuracy?', options: ['Only full stops and commas', 'Full stops, commas, and question marks', 'A range including semicolons, colons, and dashes', 'Exclamation marks in every paragraph'], correct: 2, explanation: 'The WJEC mark scheme requires "a range of punctuation used accurately" for the highest bands. This includes semicolons, colons, dashes, and other ambitious punctuation.' },
        { id: 'wjec-lw-m5-q3', question: 'What is the correct use of a semicolon?', options: ['Before a list', 'To join two related independent clauses', 'After a greeting in a letter', 'To indicate a question'], correct: 1, explanation: 'A semicolon joins two closely related independent clauses: "The door creaked open; nobody was there." Both halves must be complete sentences.' },
        { id: 'wjec-lw-m5-q4', question: 'What should you do if you are unsure how to spell a word?', options: ['Use it anyway — the examiner will understand', 'Use a simpler synonym you can spell correctly', 'Leave a blank space', 'Write it phonetically'], correct: 1, explanation: 'Misspelled ambitious vocabulary scores lower than correctly spelled simpler alternatives. If in doubt, choose a word you know you can spell.' },
      ],
    },
    {
      id: 'wjec-lw-m6',
      title: 'Planning & Timing: Managing Two Writing Tasks',
      duration: '25 mins',
      content: `<h2>Exam Strategy: Time Management Across Both Components</h2>
<p>WJEC Eduqas GCSE English Language has <strong>three writing tasks in total</strong>: one on Component 1 (creative prose) and two on Component 2 (transactional). Managing your time across all three is essential — many students lose marks not through lack of skill but through poor timing.</p>

<div class="key-term"><strong>Key Term: Timing strategy</strong> — A pre-planned allocation of minutes to each section and task. Writing your timing targets on the exam paper before you start helps you stay on track without constantly watching the clock.</div>

<h3>Component 1 Timing (1 hour 45 minutes total)</h3>
<ul>
<li><strong>Section A (Reading):</strong> 60 minutes</li>
<li><strong>Section B (Writing):</strong> 45 minutes — including 5 minutes planning and 5 minutes proofreading</li>
</ul>

<h3>Component 2 Timing (2 hours total)</h3>
<ul>
<li><strong>Section A (Reading):</strong> 60 minutes</li>
<li><strong>Section B (Writing):</strong> 60 minutes — 30 minutes per task</li>
</ul>

<div class="text-extract">"For each writing task, use the 5-25-5 rule: 5 minutes planning, 25 minutes writing, 5 minutes proofreading. This applies to Component 2 tasks. For Component 1 (which has more time), extend to 5-35-5."<div class="source">Recommended WJEC timing strategy</div></div>

<h3>Planning in 5 Minutes</h3>
<p>A quick plan transforms your writing. Use a <strong>spider diagram or bullet list</strong>:</p>
<ul>
<li><strong>For narrative:</strong> Opening image → key events (3-4) → turning point → ending</li>
<li><strong>For descriptive:</strong> Setting overview → 4 focus points (each using different senses) → closing image</li>
<li><strong>For transactional:</strong> Opening hook → 3-4 arguments/points → counterargument → conclusion + call to action</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> On Component 2, write your timing targets at the top of the page: "Task 1: start [time], finish by [time]. Task 2: start [time], finish by [time]." Stick to these strictly. A complete Task 2 at Band 2 is worth more than no Task 2 at all.</div>

<h3>What If You Run Out of Time?</h3>
<p>If you have only 5 minutes left for a task:</p>
<ul>
<li>Write a brief conclusion to whatever you have</li>
<li>Make sure your piece has an ending — even two sentences of closure</li>
<li>Check your SPaG in what you have written</li>
<li>A shorter, complete piece always scores higher than a longer, unfinished one</li>
</ul>

<div class="model-answer"><strong>Emergency Ending (Transactional):</strong> "Ultimately, this is not a question of convenience — it is a question of fairness. I urge you to reconsider this decision before it is too late." — Even two sentences can create a satisfying conclusion that rounds off your argument.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Not attempting Task 2 on Component 2. Some students spend the entire hour on Task 1 and never start Task 2. This means throwing away 20 marks — an entire grade boundary. Even a short, rushed Task 2 will pick up marks. Always attempt both tasks.</div>`,
      quiz: [
        { id: 'wjec-lw-m6-q1', question: 'How long should you spend on each Component 2 writing task?', options: ['15 minutes each', '20 minutes each', '30 minutes each', '45 minutes each'], correct: 2, explanation: 'With 60 minutes for two writing tasks on Component 2, you should spend approximately 30 minutes on each — including planning and proofreading time.' },
        { id: 'wjec-lw-m6-q2', question: 'What is the 5-25-5 rule?', options: ['5 paragraphs, 25 words each, 5 techniques', '5 minutes planning, 25 minutes writing, 5 minutes proofreading', '5 arguments, 25 minutes reading, 5 quotations', '5 senses, 25 adjectives, 5 metaphors'], correct: 1, explanation: 'The 5-25-5 rule allocates 5 minutes to planning, 25 minutes to writing, and 5 minutes to proofreading for each Component 2 task.' },
        { id: 'wjec-lw-m6-q3', question: 'What should you do if you run out of time?', options: ['Leave the task blank', 'Write a brief conclusion and proofread what you have', 'Start crossing out earlier work', 'Ask for extra time'], correct: 1, explanation: 'A shorter, complete piece with a conclusion scores higher than a longer, unfinished one. Always write a brief ending, even if it is only two sentences.' },
        { id: 'wjec-lw-m6-q4', question: 'How many total writing tasks are there across both WJEC components?', options: ['One', 'Two', 'Three', 'Four'], correct: 2, explanation: 'There are three writing tasks in total: one creative prose task on Component 1, and two transactional writing tasks on Component 2.' },
      ],
    },
  ],
  assessmentQuestions: [
    { id: 'wjec-lw-a1', question: 'How many title options are given for the Component 1 creative writing task?', options: ['Two', 'Three', 'Four', 'Six'], correct: 2, explanation: 'WJEC Eduqas provides four title options for the Component 1 Section B creative prose task.' },
    { id: 'wjec-lw-a2', question: 'How many marks is the Component 1 writing task worth in total?', options: ['20 marks', '30 marks', '40 marks', '50 marks'], correct: 2, explanation: 'The Component 1 writing task is worth 40 marks: 24 for content and organisation, 16 for technical accuracy.' },
    { id: 'wjec-lw-a3', question: 'What is unique about the WJEC Component 2 writing section compared to AQA?', options: ['It is optional', 'You must write TWO transactional pieces, not one', 'It includes creative writing', 'It is worth fewer marks'], correct: 1, explanation: 'WJEC Eduqas requires two compulsory transactional writing tasks on Component 2, unlike AQA which has one writing task.' },
    { id: 'wjec-lw-a4', question: 'How many marks is each Component 2 transactional writing task worth?', options: ['10 marks', '15 marks', '20 marks', '25 marks'], correct: 2, explanation: 'Each transactional writing task on Component 2 is worth 20 marks: 12 for content/organisation and 8 for technical accuracy.' },
    { id: 'wjec-lw-a5', question: 'What is the recommended timing for each Component 2 writing task?', options: ['15 minutes', '20 minutes', '30 minutes', '45 minutes'], correct: 2, explanation: 'With 60 minutes allocated to writing on Component 2, you should spend approximately 30 minutes on each of the two tasks.' },
    { id: 'wjec-lw-a6', question: 'What does "register" mean in transactional writing?', options: ['A type of punctuation', 'The level of formality appropriate to your audience', 'The length of your response', 'A structural feature'], correct: 1, explanation: 'Register is the level of formality in your writing. A letter to an MP requires formal register; a magazine article for teens uses semi-formal register.' },
    { id: 'wjec-lw-a7', question: 'How many total marks are available for technical accuracy across the Component 1 writing task?', options: ['8 marks', '12 marks', '16 marks', '24 marks'], correct: 2, explanation: 'On the Component 1 writing task, 16 of the 40 marks are allocated to technical accuracy (spelling, punctuation, grammar).' },
    { id: 'wjec-lw-a8', question: 'What punctuation range is required for the highest mark band?', options: ['Full stops and commas only', 'Full stops, commas, and question marks', 'Semicolons, colons, dashes, and other ambitious punctuation', 'Exclamation marks and ellipsis only'], correct: 2, explanation: 'The highest mark band requires "a range of punctuation used accurately," including semicolons, colons, dashes, and parenthetical punctuation.' },
    { id: 'wjec-lw-a9', question: 'What is the best scope for a narrative writing piece in a timed exam?', options: ['A sprawling plot with many characters', 'A single scene or moment explored in rich detail', 'An autobiography covering several years', 'Multiple storylines that connect at the end'], correct: 1, explanation: 'A focused narrative about one scene or moment allows you to develop it with rich detail and controlled technique, which WJEC examiners reward.' },
    { id: 'wjec-lw-a10', question: 'Which senses should strong descriptive writing engage?', options: ['Sight only', 'Sight and sound', 'Sight, sound, and smell', 'All five senses'], correct: 3, explanation: 'The best descriptive writing engages all five senses — sight, sound, smell, touch, and taste — creating a fully immersive experience.' },
    { id: 'wjec-lw-a11', question: 'Can you reuse content between the two Component 2 writing tasks?', options: ['Yes — it shows consistency', 'Yes — if you change the wording slightly', 'No — each must be a distinct, separate piece', 'Only the introduction'], correct: 2, explanation: 'The examiner expects two distinct pieces with different form, register, and approach. Recycling content between tasks will be penalised.' },
    { id: 'wjec-lw-a12', question: 'What is a semicolon used for?', options: ['Ending a sentence', 'Joining two related independent clauses', 'Introducing a list', 'Indicating a question'], correct: 1, explanation: 'A semicolon joins two closely related independent clauses that could each stand as separate sentences.' },
    { id: 'wjec-lw-a13', question: 'What should you do if you cannot spell an ambitious word?', options: ['Use it anyway', 'Leave a gap', 'Use a simpler synonym you can spell correctly', 'Write it phonetically'], correct: 2, explanation: 'A correctly spelled simpler word scores higher than a misspelled ambitious one. Choose vocabulary you can use confidently.' },
    { id: 'wjec-lw-a14', question: 'How should you structure a plan for transactional writing?', options: ['No plan needed', 'Opening hook, 3-4 arguments, counterargument, conclusion', 'Write the conclusion first', 'List every word you want to use'], correct: 1, explanation: 'A quick plan with an opening hook, 3-4 main points, a counterargument, and a conclusion gives your transactional writing clear direction and structure.' },
    { id: 'wjec-lw-a15', question: 'What is the total time for Component 1?', options: ['1 hour', '1 hour 30 minutes', '1 hour 45 minutes', '2 hours'], correct: 2, explanation: 'Component 1 is 1 hour 45 minutes total: approximately 60 minutes for reading (Section A) and 45 minutes for writing (Section B).' },
    { id: 'wjec-lw-a16', question: 'What is the total time for Component 2?', options: ['1 hour 30 minutes', '1 hour 45 minutes', '2 hours', '2 hours 30 minutes'], correct: 2, explanation: 'Component 2 is 2 hours total: approximately 60 minutes for reading and 60 minutes for writing (two tasks at 30 minutes each).' },
    { id: 'wjec-lw-a17', question: 'What structural technique involves returning to the opening image at the end?', options: ['Flashback', 'Foreshadowing', 'Circular structure', 'Zoom in'], correct: 2, explanation: 'A circular structure returns to the opening image or idea at the end, giving the piece a sense of completeness and crafted design.' },
    { id: 'wjec-lw-a18', question: 'What should you include if the task asks you to write a formal letter?', options: ['Just the body text', 'Address, date, salutation, body, sign-off', 'A headline and subheadings', 'Bullet points only'], correct: 1, explanation: 'A formal letter requires proper conventions: sender address, date, recipient address, salutation (Dear...), the body, and a sign-off (Yours faithfully/sincerely).' },
    { id: 'wjec-lw-a19', question: 'What is the 5-25-5 timing rule?', options: ['5 paragraphs, 25 sentences, 5 techniques', '5 minutes planning, 25 minutes writing, 5 minutes proofreading', '5 points, 25 minutes, 5 quotations', '5 senses, 25 adjectives, 5 similes'], correct: 1, explanation: 'The 5-25-5 rule allocates your 30 minutes per Component 2 task: 5 minutes planning, 25 minutes writing, 5 minutes proofreading.' },
    { id: 'wjec-lw-a20', question: 'Why is it essential to attempt both writing tasks on Component 2?', options: ['The examiner prefers two short pieces', 'Each task is worth 20 marks — skipping one loses an entire grade boundary of marks', 'It is optional', 'Only Task 2 is marked'], correct: 1, explanation: 'Each task is worth 20 marks. Not attempting Task 2 means losing 20 marks — equivalent to an entire grade boundary. Even a short, rushed attempt will pick up marks.' },
  ],
};

export default wjecGcseLangWriting;
