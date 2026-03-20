const edexcelExamTechnique = {
  id: 'exam-technique-edexcel',
  title: 'Edexcel Exam Technique Masterclass',
  subtitle: 'Paper 1 & Paper 2 — Language & Literature',
  tier: 'GCSE',
  board: 'Edexcel',
  specCode: '1EN2/1ET0',
  price: 29,
  duration: '8 hours',
  level: 'All levels',
  description: 'Master the exact skills Edexcel examiners reward across Language and Literature papers.',
  color: 'from-red-600 to-red-800',

  moduleList: [
    // ── MODULE 1: Paper 1 Overview & Timing Strategy ──
    {
      id: 'edexcel-et-mod-1',
      title: 'Paper 1 Overview & Timing Strategy',
      duration: '20 min',
      content: `
<h2>Paper 1 Overview & Timing Strategy</h2>

<p>Edexcel English Language Paper 1 (1EN0/01) is a <strong>1 hour 45 minute</strong> examination split into two sections. Section A tests your reading skills on a <strong>nineteenth-century fiction extract</strong>, while Section B tests <strong>transactional writing</strong>. The paper is worth <strong>64 marks</strong> in total: 24 marks for reading and 40 marks for writing. Understanding this distribution is your first tactical advantage — the writing section carries nearly two-thirds of the marks, yet many students spend most of their time on reading.</p>

<h3>Section A: Reading (Questions 1–4)</h3>

<p>You will receive a single fiction extract, typically 500–700 words, from a nineteenth-century text. You will not have seen this extract before. The questions escalate in difficulty and mark value:</p>
<ul>
  <li><strong>Q1 (4 marks):</strong> A short retrieval question — identify specific information from the text.</li>
  <li><strong>Q2 (8 marks):</strong> Analyse language and/or structure in a specific section of the extract.</li>
  <li><strong>Q3 (15 marks):</strong> The big reading question — analyse how the writer uses language <em>and</em> structure across the whole extract.</li>
  <li><strong>Q4 (15 marks):</strong> An evaluation question — assess a given statement about the text.</li>
</ul>

<div class="key-term"><strong>Key Term — Nineteenth-Century Fiction:</strong> Edexcel always uses a pre-1900 text for Paper 1 Section A. This means you should practise reading Victorian prose (Dickens, Brontë, Hardy, Shelley, Stevenson) so that archaic vocabulary and longer sentence structures do not throw you off on exam day.</div>

<h3>Section B: Writing (Question 5)</h3>

<p>Section B presents a single transactional writing task worth <strong>40 marks</strong>, split into Content and Organisation (24 marks) and Technical Accuracy (16 marks). Unlike AQA, which tests creative writing in Paper 1, Edexcel tests purposeful, real-world writing — letters, articles, speeches, reports, or reviews.</p>

<h3>Minute-by-Minute Timing Plan</h3>

<p>Here is the breakdown that top-performing students follow:</p>
<ul>
  <li><strong>0–10 minutes:</strong> Read the extract carefully twice. Annotate on the second read.</li>
  <li><strong>10–15 minutes:</strong> Q1 (4 marks) — quick retrieval, no analysis needed.</li>
  <li><strong>15–25 minutes:</strong> Q2 (8 marks) — focused language/structure analysis.</li>
  <li><strong>25–45 minutes:</strong> Q3 (15 marks) — integrated language and structure essay.</li>
  <li><strong>45–65 minutes:</strong> Q4 (15 marks) — evaluation with critical judgement.</li>
  <li><strong>65–70 minutes:</strong> Plan your writing response (5 minutes).</li>
  <li><strong>70–100 minutes:</strong> Write your transactional piece (30 minutes).</li>
  <li><strong>100–105 minutes:</strong> Proofread and correct errors (5 minutes).</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Write your target finish times at the top of the paper before you start. For example, if the exam begins at 9:00, write: Q1 by 9:15, Q2 by 9:25, Q3 by 9:45, Q4 by 10:05, Writing by 10:40, Proofread by 10:45. This keeps you accountable throughout.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending 30+ minutes on Q3 because it feels important. Yes, it is worth 15 marks — but so is Q4, and your writing section is worth 40 marks. Do not let one reading question cannibalise time from your highest-scoring opportunity.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m1-q1',
          question: 'How long is Edexcel English Language Paper 1?',
          options: [
            '1 hour 30 minutes',
            '1 hour 45 minutes',
            '2 hours',
            '2 hours 5 minutes'
          ],
          answer: 1,
          explanation: 'Edexcel English Language Paper 1 is 1 hour 45 minutes, split between a reading section on nineteenth-century fiction and a transactional writing task.'
        },
        {
          id: 'edexcel-et-m1-q2',
          question: 'How are the 64 marks on Paper 1 distributed between reading and writing?',
          options: [
            '32 marks reading, 32 marks writing',
            '24 marks reading, 40 marks writing',
            '40 marks reading, 24 marks writing',
            '20 marks reading, 44 marks writing'
          ],
          answer: 1,
          explanation: 'Paper 1 allocates 24 marks to reading (Section A) and 40 marks to writing (Section B). The writing section carries nearly two-thirds of the total marks.'
        },
        {
          id: 'edexcel-et-m1-q3',
          question: 'What type of text is used for Paper 1 Section A?',
          options: [
            'A modern newspaper article',
            'A nineteenth-century fiction extract',
            'Two non-fiction texts from different periods',
            'A contemporary short story'
          ],
          answer: 1,
          explanation: 'Paper 1 Section A always uses a nineteenth-century fiction extract, so students should practise reading Victorian prose.'
        },
        {
          id: 'edexcel-et-m1-q4',
          question: 'Why should you write target finish times at the top of your paper?',
          options: [
            'It earns extra marks for organisation',
            'It prevents you from overrunning on early questions and protects writing time',
            'It is an Edexcel exam requirement',
            'It helps you calculate your final grade'
          ],
          answer: 1,
          explanation: 'Writing target finish times keeps you accountable, preventing you from spending too long on early questions and protecting time for the high-mark writing section.'
        },
        {
          id: 'edexcel-et-m1-q5',
          question: 'How much planning time is recommended before starting the writing task?',
          options: [
            '1 minute',
            '3 minutes',
            '5 minutes',
            '10 minutes'
          ],
          answer: 2,
          explanation: 'Spend approximately 5 minutes planning your transactional writing response. This produces a more coherent and well-structured piece than diving straight in.'
        }
      ]
    },

    // ── MODULE 2: Q1–Q4 Reading Analysis Deep Dive ──
    {
      id: 'edexcel-et-mod-2',
      title: 'Q1–Q4 Reading Analysis Deep Dive',
      duration: '25 min',
      content: `
<h2>Q1–Q4 Reading Analysis Deep Dive</h2>

<p>Each of the four reading questions on Edexcel Paper 1 requires a <strong>different skill</strong>. Students who treat them all the same — writing the same kind of analytical paragraph for each — leave marks on the table. This module breaks down exactly what each question demands so you can tailor your approach and maximise your score across all four.</p>

<h3>Question 1: Information Retrieval (4 marks)</h3>

<p>Q1 is the quickest question on the paper. It asks you to identify specific pieces of information from a defined section of the extract. You might be asked to list four things about a character, a setting, or an event. Each correct identification earns <strong>1 mark</strong>.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Do not waste time analysing in Q1. The examiner is not looking for language analysis here — just accurate retrieval. Keep your answers short and factual. Write five points to be safe; only four will be marked, but an extra point acts as insurance if one is wrong.</div>

<h3>Question 2: Language and/or Structure in a Section (8 marks)</h3>

<p>Q2 directs you to a specific portion of the extract (for example, lines 5–15) and asks you to analyse how the writer uses language and/or structure. This is a focused question — you must stay within the specified lines. The mark scheme rewards:</p>
<ul>
  <li>Selection of appropriate quotations from the specified section</li>
  <li>Analysis of specific words, phrases, and techniques</li>
  <li>Explanation of the effects on the reader</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about the whole extract instead of the specified lines. Q2 gives you a line range for a reason — evidence from outside those lines will not be credited.</div>

<h3>Question 3: Language and Structure Across the Whole Extract (15 marks)</h3>

<p>Q3 is the highest-tariff reading question alongside Q4. It asks you to analyse language <em>and</em> structure across the <strong>entire</strong> extract. This is where Edexcel differs from AQA: instead of separate language and structure questions, you must integrate both in a single response. Cover at least two language points and one structural observation for a balanced answer.</p>

<h3>Question 4: Evaluation (15 marks)</h3>

<p>Q4 presents a statement about the text and asks you to evaluate how far you agree. This requires <strong>critical thinking</strong>, not just analysis. You must weigh evidence for and against the statement, showing that you can think independently about the text. The best responses adopt a nuanced stance — perhaps agreeing partially while identifying complexities the statement overlooks.</p>

<div class="key-term"><strong>Key Term — Evaluation:</strong> To evaluate is to make a judgement based on evidence. It goes beyond analysis (explaining how something works) to assessment (deciding how effective or accurate something is). In Q4, you are judging the truth of the examiner's statement.</div>

<h3>Escalating Your Approach</h3>

<p>Think of the four questions as a ladder of increasing sophistication:</p>
<ul>
  <li><strong>Q1:</strong> Retrieve (find information)</li>
  <li><strong>Q2:</strong> Analyse (explain how language/structure works in a section)</li>
  <li><strong>Q3:</strong> Analyse and synthesise (explain how language and structure work together across the text)</li>
  <li><strong>Q4:</strong> Evaluate (make a critical judgement about the text)</li>
</ul>
`,
      quiz: [
        {
          id: 'edexcel-et-m2-q1',
          question: 'What skill does Q1 primarily test?',
          options: [
            'Language analysis',
            'Structural analysis',
            'Information retrieval',
            'Evaluation'
          ],
          answer: 2,
          explanation: 'Q1 tests information retrieval — identifying specific facts or details from a defined section of the extract. No analysis is required.'
        },
        {
          id: 'edexcel-et-m2-q2',
          question: 'What common mistake do students make on Q2?',
          options: [
            'Writing too little',
            'Using evidence from outside the specified line range',
            'Focusing only on structure',
            'Using too many quotations'
          ],
          answer: 1,
          explanation: 'Q2 specifies a line range and evidence from outside those lines will not be credited. Students must stay within the specified section.'
        },
        {
          id: 'edexcel-et-m2-q3',
          question: 'What makes Q3 unique to Edexcel compared to AQA?',
          options: [
            'It is worth more marks than any AQA question',
            'It integrates language and structure analysis into one question',
            'It requires comparison of two texts',
            'It only assesses vocabulary knowledge'
          ],
          answer: 1,
          explanation: 'Edexcel Q3 combines language and structure analysis into a single 15-mark question, whereas AQA separates these into distinct questions.'
        },
        {
          id: 'edexcel-et-m2-q4',
          question: 'What does Q4 require beyond analysis?',
          options: [
            'Creative writing skills',
            'Memorisation of quotations',
            'Critical evaluation — making a judgement about a statement',
            'Comparison of two texts'
          ],
          answer: 2,
          explanation: 'Q4 goes beyond analysis to require evaluation — weighing evidence for and against a statement and making a critical judgement about how far you agree.'
        },
        {
          id: 'edexcel-et-m2-q5',
          question: 'How many points should you write for Q1 to be safe?',
          options: [
            'Exactly four — one per mark',
            'Five — an extra one as insurance',
            'Three — quality over quantity',
            'As many as possible'
          ],
          answer: 1,
          explanation: 'Write five short points for Q1. Only four will be marked, but an extra point acts as insurance in case one is incorrect.'
        }
      ]
    },

    // ── MODULE 3: Q3 Combined Language & Structure Analysis ──
    {
      id: 'edexcel-et-mod-3',
      title: 'Q3 Combined Language & Structure Analysis',
      duration: '25 min',
      content: `
<h2>Q3 Combined Language & Structure Analysis — The Edexcel Way</h2>

<p>If you have studied AQA's approach to language analysis, you need to reset your expectations before sitting an Edexcel paper. Edexcel's Paper 1, Section A tests your reading skills on a nineteenth-century fiction extract, and Question 3 is the big-mark question worth <strong>15 marks</strong>. Unlike AQA, which separates language and structure into different questions, Edexcel asks you to analyse <strong>both language and structure together</strong> in a single response. This integrated approach rewards students who can weave discussion of word choice, imagery, sentence forms, and structural choices into one cohesive essay.</p>

<h3>How Edexcel Q3 Differs from AQA</h3>

<p>AQA splits language (Q2) and structure (Q3) into separate 8-mark questions. Edexcel combines them. This means you must demonstrate the ability to move fluidly between micro-level analysis (individual words, phrases, figurative language) and macro-level analysis (narrative perspective, paragraph focus shifts, openings and endings). Examiners want to see that you understand how a writer's choices at the sentence level connect to the overall effect of the passage.</p>

<h3>The Integrated Approach</h3>

<p>A strong answer does not treat language and structure as two separate halves bolted together. Instead, you should show how structural decisions reinforce language choices. For example, if a writer uses a short, blunt sentence after a long descriptive passage, you should comment on <em>both</em> the structural shift (sentence length variation, paragraph positioning) and the language within that sentence (word choice, tone). Examiners reward responses that feel like a genuine exploration of the text rather than a mechanical checklist.</p>

<h3>What the Mark Scheme Rewards</h3>

<p>At the top of the mark scheme (bands 4 and 5), examiners look for:</p>
<ul>
  <li><strong>Judicious use of quotations</strong> — short, embedded quotes rather than long copied-out sections.</li>
  <li><strong>Analysis of effect</strong> — going beyond identification to explain what the reader thinks, feels, or imagines.</li>
  <li><strong>Terminology used purposefully</strong> — not name-dropping techniques but using terms to sharpen your analysis.</li>
  <li><strong>Conceptualised response</strong> — a sense that you understand the writer's overall intention and how individual choices serve that intention.</li>
</ul>

<div class="key-term"><strong>Key Term — Conceptualised Response:</strong> A conceptualised response shows you understand the writer's bigger purpose. Rather than analysing techniques in isolation, you connect every observation to the writer's overarching intention — whether that is to create tension, evoke sympathy, or critique a social issue.</div>

<h3>Practical Strategy</h3>

<p>Spend roughly <strong>20 minutes</strong> on Q3. Read the extract twice before writing: once for general understanding, once to annotate language and structural features. Plan three analytical paragraphs, each built around a different aspect of the writer's craft. Use the <strong>What-How-Why</strong> framework: What has the writer done? How have they done it (specific technique and quotation)? Why — what is the effect on the reader? Every paragraph should contain at least one embedded quotation and one piece of subject terminology used to deepen your point rather than merely label it.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The strongest Q3 responses move through the extract chronologically, tracking how the writer builds, shifts, or transforms the mood. This naturally incorporates structural analysis because you are discussing the journey of the text, not just isolated moments.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Feature-spotting: "The writer uses a metaphor." This tells the examiner nothing. Instead, explore the connotations of the metaphor, explain what it suggests about the character or setting, and link it to the wider mood of the extract.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m3-q1',
          question: 'How does Edexcel Paper 1 Q3 differ from AQA\'s approach to language analysis?',
          options: [
            'Edexcel combines language and structure analysis in one question',
            'Edexcel only tests language, not structure',
            'Edexcel gives you two separate texts to compare',
            'Edexcel Q3 is only worth 5 marks'
          ],
          answer: 0,
          explanation: 'Edexcel integrates language and structure into a single 15-mark question, whereas AQA separates them into distinct questions.'
        },
        {
          id: 'edexcel-et-m3-q2',
          question: 'What does the mark scheme mean by a "conceptualised response"?',
          options: [
            'A response that uses as many technical terms as possible',
            'A response showing understanding of the writer\'s overall intention and how choices serve it',
            'A response that retells the story in your own words',
            'A response that only focuses on structural features'
          ],
          answer: 1,
          explanation: 'A conceptualised response demonstrates that you understand the writer\'s bigger purpose and can show how individual language and structural choices contribute to that purpose.'
        },
        {
          id: 'edexcel-et-m3-q3',
          question: 'Which quotation technique do Edexcel examiners reward most highly?',
          options: [
            'Copying out entire sentences for completeness',
            'Paraphrasing the text instead of quoting directly',
            'Short, embedded quotations woven into your sentences',
            'Using quotations only at the end of each paragraph'
          ],
          answer: 2,
          explanation: 'Judicious, embedded quotations — short phrases woven into your analytical sentences — are rewarded at the highest bands of the mark scheme.'
        },
        {
          id: 'edexcel-et-m3-q4',
          question: 'What is "feature-spotting" and why should you avoid it?',
          options: [
            'Identifying a technique without analysing its effect — it gains minimal credit',
            'Spotting too many features, which wastes time',
            'Focusing on structure instead of language',
            'Using highlighters during the exam'
          ],
          answer: 0,
          explanation: 'Feature-spotting means simply naming a technique (e.g. "The writer uses a simile") without exploring its connotations or effect on the reader. Examiners want analysis, not identification.'
        },
        {
          id: 'edexcel-et-m3-q5',
          question: 'What is the recommended approach for moving through the extract in Q3?',
          options: [
            'Jump between random sections to show range',
            'Only analyse the first paragraph in detail',
            'Move chronologically, tracking how the writer builds or shifts mood',
            'Start with the ending and work backwards'
          ],
          answer: 2,
          explanation: 'Moving chronologically through the extract naturally incorporates structural analysis because you track the journey of the text — how mood, tension, or focus shifts from beginning to end.'
        }
      ]
    },

    // ── MODULE 4: Creative Writing Narrative Techniques ──
    {
      id: 'edexcel-et-mod-4',
      title: 'Creative Writing Narrative Techniques',
      duration: '20 min',
      content: `
<h2>Creative Writing — Narrative Techniques</h2>

<p>While Edexcel Paper 1 Section B focuses on transactional writing, <strong>Paper 2 Section B</strong> (or the Edexcel iGCSE specification) may require creative or imaginative writing. Additionally, strong narrative techniques elevate all forms of writing — even a persuasive speech benefits from a well-told anecdote. This module equips you with the narrative tools that examiners reward most highly.</p>

<h3>Point of View</h3>

<p>Your choice of narrative perspective shapes everything the reader experiences:</p>
<ul>
  <li><strong>First person ("I"):</strong> Creates intimacy and immediacy. The reader is locked inside one character's consciousness, sharing their thoughts and emotions directly. Best for personal, emotional narratives.</li>
  <li><strong>Third person limited:</strong> Follows one character but with slight distance. Allows you to describe the character externally while still accessing their thoughts. Offers more flexibility than first person.</li>
  <li><strong>Third person omniscient:</strong> An all-knowing narrator who can dip into any character's mind. Harder to control at GCSE level but powerful when done well.</li>
</ul>

<div class="key-term"><strong>Key Term — Narrative Voice:</strong> This is not just who tells the story but <em>how</em> they tell it. A cynical narrator uses different language from an innocent one. A frightened narrator notices different details from a calm one. Your narrative voice should be consistent and deliberate.</div>

<h3>Structuring a Narrative</h3>

<p>Examiners do not want a full story with beginning, middle, and end crammed into 45 minutes. They want a <strong>crafted slice</strong> — a single moment, scene, or experience explored in vivid detail. The best creative writing responses focus on:</p>
<ul>
  <li><strong>A single setting:</strong> Describe one place richly rather than racing through multiple locations.</li>
  <li><strong>A narrow time frame:</strong> Minutes or hours, not days or years.</li>
  <li><strong>A shift or transformation:</strong> Something changes — the character's understanding, the mood, the situation. This gives your piece shape without needing a complex plot.</li>
</ul>

<h3>Opening Hooks</h3>

<p>The first sentence matters enormously. Examiners read hundreds of responses — a compelling opening makes them sit up and take notice. Strong openings include:</p>
<ul>
  <li><strong>In medias res:</strong> Start in the middle of the action. "The glass shattered before I could move."</li>
  <li><strong>A striking image:</strong> "The sky was the colour of a bruise."</li>
  <li><strong>A provocative statement:</strong> "I had been told the house was empty. They were wrong."</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Avoid starting with "I woke up" or "It was a normal day." These openings signal to the examiner that the writing will be predictable. Start where the story gets interesting.</div>

<h3>Ending with Impact</h3>

<p>Your ending should feel deliberate, not rushed. Techniques include:</p>
<ul>
  <li><strong>Circular structure:</strong> Echo your opening image or phrase, but with changed meaning.</li>
  <li><strong>An unresolved moment:</strong> Leave the reader with a question or lingering image.</li>
  <li><strong>A single, powerful sentence:</strong> "And then the silence returned."</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Trying to write a complete adventure story. Students who attempt car chases, zombie apocalypses, or elaborate plot twists almost always produce rushed, shallow writing. A quiet moment described beautifully will always outscore an action blockbuster described poorly.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m4-q1',
          question: 'What does "in medias res" mean?',
          options: [
            'Starting at the end of a story',
            'Starting in the middle of the action',
            'Writing in the present tense',
            'Using a flashback structure'
          ],
          answer: 1,
          explanation: 'In medias res means starting in the middle of the action — dropping the reader into an interesting moment without lengthy setup. It creates immediate engagement.'
        },
        {
          id: 'edexcel-et-m4-q2',
          question: 'Why should you focus on a single setting in creative writing?',
          options: [
            'Because the exam only allows one paragraph',
            'Because describing one place richly is more effective than racing through multiple locations',
            'Because examiners deduct marks for multiple settings',
            'Because all good stories happen in one place'
          ],
          answer: 1,
          explanation: 'Focusing on a single setting allows you to describe it richly with sensory detail, creating atmosphere and depth rather than producing a rushed overview of multiple locations.'
        },
        {
          id: 'edexcel-et-m4-q3',
          question: 'What is a "circular structure" in creative writing?',
          options: [
            'Writing in a circle on the page',
            'Echoing your opening image or phrase at the end, with changed meaning',
            'Repeating the same paragraph three times',
            'Starting and ending with dialogue'
          ],
          answer: 1,
          explanation: 'A circular structure echoes the opening at the end, but the repetition carries new or deeper meaning because of what has happened in between. It creates a satisfying sense of completeness.'
        },
        {
          id: 'edexcel-et-m4-q4',
          question: 'Which narrative perspective creates the most intimacy with the reader?',
          options: [
            'Third person omniscient',
            'Second person',
            'First person',
            'Third person limited'
          ],
          answer: 2,
          explanation: 'First person ("I") locks the reader inside one character\'s consciousness, sharing their thoughts and emotions directly, which creates the strongest sense of intimacy and immediacy.'
        },
        {
          id: 'edexcel-et-m4-q5',
          question: 'Why is it a mistake to attempt a complex adventure plot in exam creative writing?',
          options: [
            'Adventure stories are banned by Edexcel',
            'Complex plots lead to rushed, shallow writing with no time for craft',
            'Examiners prefer non-fiction',
            'Adventure stories require too many characters'
          ],
          answer: 1,
          explanation: 'Attempting elaborate plots under time pressure produces rushed, surface-level writing. A quiet moment described with craft and detail will always outscore an action-packed story described poorly.'
        }
      ]
    },

    // ── MODULE 5: Creative Writing Descriptive Techniques ──
    {
      id: 'edexcel-et-mod-5',
      title: 'Creative Writing Descriptive Techniques',
      duration: '20 min',
      content: `
<h2>Creative Writing — Descriptive Techniques</h2>

<p>Descriptive writing is not just about creative writing tasks — it elevates every piece you write. A vivid description in an article opening, a sensory detail in a speech anecdote, a carefully chosen adjective in a letter — these are the moments that lift your writing from competent to compelling. This module focuses on the descriptive techniques that Edexcel examiners reward across both Language papers.</p>

<h3>Show, Don't Tell</h3>

<p>This is the single most important principle of descriptive writing. "Telling" states a fact: <em>"She was scared."</em> "Showing" creates an experience: <em>"Her fingers whitened around the banister; each creak of the staircase sent a jolt through her chest."</em> When you show, the reader deduces the emotion from physical details — and that deduction makes the writing feel alive.</p>

<div class="key-term"><strong>Key Term — Show, Don't Tell:</strong> Instead of stating an emotion or quality directly, reveal it through actions, sensory details, dialogue, or physical reactions. Let the reader infer the meaning rather than being told it explicitly.</div>

<h3>The Five Senses</h3>

<p>Most student writing relies heavily on sight. Examiners notice — and reward — writing that engages multiple senses:</p>
<ul>
  <li><strong>Sight:</strong> Colour, light, shadow, movement, shape.</li>
  <li><strong>Sound:</strong> Volume, pitch, rhythm, silence as contrast.</li>
  <li><strong>Touch:</strong> Texture, temperature, pressure, pain.</li>
  <li><strong>Smell:</strong> Often the most evocative sense, strongly linked to memory.</li>
  <li><strong>Taste:</strong> Used sparingly but powerfully — metallic fear, sweet nostalgia.</li>
</ul>

<h3>Zooming In and Out</h3>

<p>Effective description moves between wide-angle and close-up perspectives. Start with a panoramic view of a landscape, then zoom into the texture of bark on a single tree, the beetle crawling across it, the dewdrop trembling on a leaf. This technique gives your writing a cinematic quality and demonstrates control over pacing.</p>

<h3>Figurative Language That Works</h3>

<p>Similes and metaphors are only effective when they are <strong>original and purposeful</strong>:</p>
<ul>
  <li><strong>Avoid clichés:</strong> "As white as snow," "the sun smiled down" — these signal lazy writing.</li>
  <li><strong>Match your imagery to the mood:</strong> A storm scene should not be compared to gentle, comforting things (unless you are being deliberately ironic).</li>
  <li><strong>Extended metaphors:</strong> Sustaining a single metaphor across a paragraph or piece creates coherence and sophistication.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> One original, well-developed metaphor is worth more than five clichéd similes. Quality always beats quantity in descriptive writing.</div>

<h3>Pathetic Fallacy</h3>

<p>Using weather and environment to mirror a character's emotions is a classic technique — but do it with subtlety. Rather than "it was raining because she was sad," try: "The drizzle clung to everything — the benches, the railings, the hem of her coat — as if the morning itself refused to let go." The emotion is embedded in the description, not stated alongside it.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Over-describing everything. Not every noun needs two adjectives. Selective, precise description of key details is far more effective than a wall of adjectives. Choose the details that matter and make them vivid; let the reader's imagination fill in the rest.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m5-q1',
          question: 'What does "show, don\'t tell" mean in descriptive writing?',
          options: [
            'Use diagrams instead of words',
            'Reveal emotions through actions and sensory details rather than stating them directly',
            'Write in the present tense',
            'Include as many adjectives as possible'
          ],
          answer: 1,
          explanation: '"Show, don\'t tell" means revealing emotions and qualities through physical details, actions, and sensory experiences rather than stating them directly. It makes writing vivid and engaging.'
        },
        {
          id: 'edexcel-et-m5-q2',
          question: 'Which sense is often described as the most evocative and linked to memory?',
          options: [
            'Sight',
            'Sound',
            'Smell',
            'Touch'
          ],
          answer: 2,
          explanation: 'Smell is often the most evocative sense and strongly linked to memory, making it a powerful tool in descriptive writing that many students underuse.'
        },
        {
          id: 'edexcel-et-m5-q3',
          question: 'What is the "zooming" technique in descriptive writing?',
          options: [
            'Writing very quickly',
            'Moving between wide-angle panoramic views and close-up details',
            'Only describing objects that are far away',
            'Using a magnifying glass metaphor'
          ],
          answer: 1,
          explanation: 'The zooming technique moves between wide-angle views and close-up details, giving writing a cinematic quality and demonstrating control over pacing and perspective.'
        },
        {
          id: 'edexcel-et-m5-q4',
          question: 'Why should you avoid clichéd similes like "as white as snow"?',
          options: [
            'They are grammatically incorrect',
            'They signal lazy writing and fail to create vivid, original imagery',
            'Examiners deduct marks for using similes',
            'They are too difficult for readers to understand'
          ],
          answer: 1,
          explanation: 'Clichéd similes signal lazy, unoriginal writing. Examiners reward fresh, purposeful imagery that demonstrates genuine craft and thought.'
        },
        {
          id: 'edexcel-et-m5-q5',
          question: 'What is pathetic fallacy?',
          options: [
            'A logical error in an argument',
            'Using weather and environment to mirror a character\'s emotions',
            'A type of dramatic irony',
            'When a character feels sorry for themselves'
          ],
          answer: 1,
          explanation: 'Pathetic fallacy is the technique of using weather, landscape, or environment to reflect or mirror a character\'s emotional state — for example, a storm during a moment of anger.'
        }
      ]
    },

    // ── MODULE 6: Sensory Detail & Imagery Masterclass ──
    {
      id: 'edexcel-et-mod-6',
      title: 'Sensory Detail & Imagery Masterclass',
      duration: '20 min',
      content: `
<h2>Sensory Detail & Imagery Masterclass</h2>

<p>Imagery is the engine of powerful writing. Whether you are crafting a descriptive piece, analysing a poet's choices, or writing a persuasive article, your ability to create and interpret imagery is one of the most transferable skills you can develop. This module takes you beyond basic simile-and-metaphor identification into the deeper world of sensory imagery, symbolism, and extended figurative patterns.</p>

<h3>Types of Imagery</h3>

<p>When we talk about "imagery" in English, we mean any language that creates a picture or sensory experience in the reader's mind. The main types are:</p>
<ul>
  <li><strong>Visual imagery:</strong> Language that creates pictures — colour, light, shape, movement. "The candle threw jagged shadows across the ceiling."</li>
  <li><strong>Auditory imagery:</strong> Language that creates sounds — onomatopoeia, rhythm, described sounds. "The clock's tick sharpened in the silence."</li>
  <li><strong>Tactile imagery:</strong> Language evoking touch — texture, temperature, physical sensation. "The cold bit through her gloves."</li>
  <li><strong>Olfactory imagery:</strong> Language evoking smell. "The corridor smelled of disinfectant and something older, something damp."</li>
  <li><strong>Gustatory imagery:</strong> Language evoking taste. "Fear sat metallic on his tongue."</li>
</ul>

<div class="key-term"><strong>Key Term — Semantic Field:</strong> A group of words that all relate to the same topic or concept. For example, a writer might use words from the semantic field of war — "battle," "siege," "surrender," "armour" — when describing a relationship. Identifying semantic fields shows examiners you can see patterns, not just individual words.</div>

<h3>Symbolism</h3>

<p>Symbols are objects, settings, or actions that carry meaning beyond their literal function. A locked door might symbolise entrapment; a rising sun might symbolise hope or new beginnings. When you identify symbolism in your analysis, always explain what it represents <em>and</em> how the writer develops it across the text. In your own writing, use symbols sparingly but deliberately — a single recurring image (a cracked mirror, an empty chair) can give your piece thematic depth.</p>

<h3>Extended Metaphors</h3>

<p>An extended metaphor sustains a single comparison across several sentences or an entire paragraph. For example, describing a difficult conversation as a chess game — "She opened with a gambit... he countered... neither would sacrifice their position" — creates a sustained, coherent image that demonstrates sophisticated control. In analysis, spotting an extended metaphor shows the examiner you can see the bigger picture, not just isolated techniques.</p>

<h3>Personification and Animacy</h3>

<p>Giving human qualities to non-human things (personification) or animal qualities to humans (animalistic imagery) are powerful tools. When a writer says "the wind howled," they transform weather into a living, emotional force. When a character is described as "prowling" or "baring teeth," we understand their aggression without being told directly. In your analysis, always explore <em>why</em> the writer chose to give life to an object or reduce a human to animal behaviour.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing imagery, use the formula: identify the image, explain its connotations, link to the reader's response. For example: "The 'jagged shadows' suggest danger and unpredictability, creating a sense of unease in the reader as the setting feels threatening and unstable."</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Stating "this creates imagery" as if imagery is an effect. Imagery is a tool; the effect is what the imagery makes the reader feel, see, or understand. Always specify the emotional or intellectual impact.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m6-q1',
          question: 'What is a semantic field?',
          options: [
            'A field described using sensory language',
            'A group of words that all relate to the same topic or concept',
            'The meaning of a single word',
            'A type of metaphor used in poetry'
          ],
          answer: 1,
          explanation: 'A semantic field is a group of words related to the same topic — for example, words from the semantic field of war (battle, siege, surrender) used to describe a non-war situation.'
        },
        {
          id: 'edexcel-et-m6-q2',
          question: 'What is an extended metaphor?',
          options: [
            'A very long simile',
            'A metaphor that sustains a single comparison across several sentences or a whole paragraph',
            'A metaphor that uses more than three words',
            'A metaphor explained in a footnote'
          ],
          answer: 1,
          explanation: 'An extended metaphor sustains a single comparison across multiple sentences or an entire paragraph, creating coherence and demonstrating sophisticated control of language.'
        },
        {
          id: 'edexcel-et-m6-q3',
          question: 'Why is "this creates imagery" a weak analytical statement?',
          options: [
            'Because imagery is a tool, not an effect — you must specify the emotional impact',
            'Because the word "imagery" is too informal for an essay',
            'Because imagery only applies to poetry',
            'Because examiners do not understand the term'
          ],
          answer: 0,
          explanation: 'Imagery is a technique, not an effect. Saying "this creates imagery" is like saying "this creates writing." You must explain what the imagery makes the reader feel, see, or understand.'
        },
        {
          id: 'edexcel-et-m6-q4',
          question: 'Which type of imagery involves evoking the sense of touch?',
          options: [
            'Visual imagery',
            'Auditory imagery',
            'Tactile imagery',
            'Olfactory imagery'
          ],
          answer: 2,
          explanation: 'Tactile imagery evokes the sense of touch — texture, temperature, pressure, or physical sensation. It is an effective way to make descriptions feel physical and immediate.'
        },
        {
          id: 'edexcel-et-m6-q5',
          question: 'When using symbolism in your own creative writing, what is the best approach?',
          options: [
            'Use as many symbols as possible to seem sophisticated',
            'Use symbols sparingly but deliberately — a single recurring image can add depth',
            'Explain what each symbol means in a footnote',
            'Only use symbols that appear in your set texts'
          ],
          answer: 1,
          explanation: 'Use symbols sparingly but deliberately. A single recurring image (such as a cracked mirror or an empty chair) woven through your piece can give it thematic depth without feeling forced.'
        }
      ]
    },

    // ── MODULE 7: Sentence Structures for Effect ──
    {
      id: 'edexcel-et-mod-7',
      title: 'Sentence Structures for Effect',
      duration: '20 min',
      content: `
<h2>Sentence Structures for Effect</h2>

<p>Sentence structure is one of the most underused tools in the student writer's arsenal. Most students can identify a short sentence or a rhetorical question, but few can <strong>deploy sentence structures deliberately</strong> in their own writing or analyse their effects with precision. This module covers the key sentence types and patterns that Edexcel examiners reward — both when you are writing and when you are analysing a writer's choices.</p>

<h3>Simple Sentences for Impact</h3>

<p>A simple sentence contains one main clause: <em>"The door opened."</em> Used after a complex or compound sentence, a simple sentence creates <strong>dramatic emphasis</strong>. It slows the reader down, forcing them to dwell on a single idea. In creative writing, use simple sentences at moments of shock, revelation, or emotional intensity. In analysis, note how a writer places a short sentence to create a pause or shift in pace.</p>

<h3>Complex Sentences for Depth</h3>

<p>Complex sentences contain a main clause and one or more subordinate clauses: <em>"Although the morning had started calmly, the tension in the room was unmistakable."</em> They allow you to layer ideas, show cause and effect, and build atmosphere gradually. In your writing, use complex sentences to develop descriptions and build tension before releasing it with a short sentence.</p>

<h3>Minor Sentences and Fragments</h3>

<p>Minor sentences lack a verb or subject: <em>"Silence. Nothing. Just the drip of water and the dark."</em> Used sparingly, they create a staccato rhythm that can convey shock, fragmentation, or heightened emotion. Overuse them and your writing becomes choppy and hard to follow.</p>

<div class="key-term"><strong>Key Term — Juxtaposition of Sentence Length:</strong> Deliberately placing a short sentence next to a long one (or vice versa) to create contrast. The shift in rhythm draws the reader's attention and can create tension, surprise, or emphasis.</div>

<h3>Fronted Adverbials and Subordinate Clauses</h3>

<p>Starting a sentence with an adverbial phrase or subordinate clause delays the main action and builds anticipation: <em>"Beyond the rusted gate, past the overgrown path, hidden beneath decades of ivy, the house waited."</em> This technique creates suspense by making the reader wait for the main verb. It also demonstrates the varied sentence openings that examiners look for in the technical accuracy mark scheme.</p>

<h3>Listing and Tricolon</h3>

<p>A list of three (tricolon) has a natural rhythm that feels complete and satisfying: <em>"She was tired, she was cold, she was done."</em> Lists longer than three can create a sense of accumulation or overwhelming quantity. In analysis, note whether a writer's list builds to a climax or uses an unexpected final item for bathos.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> In the Technical Accuracy marks (16 marks on Paper 1), examiners specifically look for "a range of sentence structures used for effect." This means you must demonstrate variety — not just short and long sentences, but fronted adverbials, subordinate clauses, rhetorical questions, and deliberate fragments.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Using the same sentence structure for every sentence. Many students write in a pattern of simple-compound-simple-compound throughout their response. This monotony signals a lack of control. Consciously vary your structures to show the examiner you are making deliberate choices.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m7-q1',
          question: 'When is a simple sentence most effective?',
          options: [
            'At the beginning of every paragraph',
            'After a complex or compound sentence, to create dramatic emphasis',
            'When you cannot think of anything else to write',
            'Only in dialogue'
          ],
          answer: 1,
          explanation: 'A simple sentence is most effective after longer, more complex sentences. The sudden brevity creates dramatic emphasis, slowing the reader down and forcing them to dwell on a single idea.'
        },
        {
          id: 'edexcel-et-m7-q2',
          question: 'What is a tricolon?',
          options: [
            'A sentence with three subordinate clauses',
            'A list of three that creates a natural, satisfying rhythm',
            'A paragraph with three sentences',
            'A technique using three different tenses'
          ],
          answer: 1,
          explanation: 'A tricolon is a list of three items or phrases that creates a natural rhythm and sense of completeness: "She was tired, she was cold, she was done."'
        },
        {
          id: 'edexcel-et-m7-q3',
          question: 'What effect do fronted adverbials create?',
          options: [
            'They make sentences shorter',
            'They delay the main action and build anticipation or suspense',
            'They make writing more informal',
            'They eliminate the need for punctuation'
          ],
          answer: 1,
          explanation: 'Fronted adverbials delay the main verb, making the reader wait and building anticipation. They also demonstrate varied sentence openings, which examiners reward.'
        },
        {
          id: 'edexcel-et-m7-q4',
          question: 'How many marks are allocated to Technical Accuracy on Paper 1?',
          options: [
            '8 marks',
            '12 marks',
            '16 marks',
            '24 marks'
          ],
          answer: 2,
          explanation: 'Technical Accuracy is worth 16 marks on Paper 1, and examiners specifically look for a range of sentence structures used deliberately for effect.'
        },
        {
          id: 'edexcel-et-m7-q5',
          question: 'Why should minor sentences and fragments be used sparingly?',
          options: [
            'They are grammatically incorrect and always lose marks',
            'Overuse creates a choppy rhythm that is hard to follow',
            'They are only allowed in poetry',
            'Examiners do not recognise them as sentences'
          ],
          answer: 1,
          explanation: 'Minor sentences and fragments can convey shock or fragmentation, but overuse makes writing choppy and difficult to follow. Their power comes from contrast with longer, more developed sentences.'
        }
      ]
    },

    // ── MODULE 8: Planning Under Pressure ──
    {
      id: 'edexcel-et-mod-8',
      title: 'Planning Under Pressure',
      duration: '15 min',
      content: `
<h2>Planning Under Pressure</h2>

<p>Planning feels like a luxury in a timed exam, but it is actually a <strong>time-saving strategy</strong>. Students who spend 5 minutes planning consistently produce better-organised, more coherent responses than those who dive straight in. The result is fewer crossed-out sections, less repetition, and a clearer argument or narrative — all of which translate into higher marks. This module gives you fast, practical planning methods you can use under exam conditions.</p>

<h3>The 5-Minute Writing Plan</h3>

<p>For any writing task (transactional or creative), follow this rapid planning framework:</p>
<ol>
  <li><strong>Minute 1 — Decode the task:</strong> Underline the purpose, audience, and format. What exactly are you being asked to do?</li>
  <li><strong>Minute 2 — Brainstorm 5–6 key ideas:</strong> Jot these as single words or short phrases. Do not write full sentences.</li>
  <li><strong>Minute 3 — Select and order:</strong> Choose your strongest 4–5 ideas and number them in the order you will present them.</li>
  <li><strong>Minute 4 — Plan your opening and closing:</strong> Write the first sentence and last sentence of your piece. These are the bookends the examiner will remember most.</li>
  <li><strong>Minute 5 — Note key techniques:</strong> Beside each planned paragraph, write one technique you will use (e.g., "anecdote," "statistics," "rhetorical question," "short sentence for impact").</li>
</ol>

<div class="key-term"><strong>Key Term — Discourse Markers:</strong> Words and phrases that guide the reader through your writing: "Furthermore," "However," "In contrast," "Consequently," "Above all." Planning your discourse markers in advance ensures smooth transitions between paragraphs.</div>

<h3>Planning for Reading Questions</h3>

<p>For reading questions (Q3, Q4, Q6), planning looks different:</p>
<ul>
  <li><strong>Annotate the extract:</strong> Circle key words, underline quotations, write marginal notes about technique and effect.</li>
  <li><strong>Identify 3 focus points:</strong> Each paragraph should have a clear analytical focus — a different aspect of the writer's craft.</li>
  <li><strong>Sketch a quick plan:</strong> Three bullet points, each with a technique and quotation, takes 2 minutes but prevents mid-essay panic about "what to write next."</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Your plan does not earn marks directly, but it prevents the two biggest mark-losing problems: running out of ideas mid-response and producing a disorganised piece that the examiner struggles to follow.</div>

<h3>What If Your Plan Goes Wrong?</h3>

<p>Plans are guides, not contracts. If a better idea occurs to you mid-writing, use it. If you realise a planned point is weaker than you thought, skip it. The plan exists to give you direction, not to trap you. Cross out your plan at the end so the examiner knows not to mark it.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a plan that is too detailed — essentially a rough draft. This wastes time. Your plan should be telegraphic: single words, arrows, numbers. It should take 5 minutes at most. If your plan looks like a full paragraph, you are over-planning.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m8-q1',
          question: 'How long should you spend planning a writing response in the exam?',
          options: [
            '1 minute',
            '5 minutes',
            '10 minutes',
            '15 minutes'
          ],
          answer: 1,
          explanation: 'Spend approximately 5 minutes planning. This is enough time to decode the task, brainstorm ideas, order them, and plan your opening and closing.'
        },
        {
          id: 'edexcel-et-m8-q2',
          question: 'What should your plan look like?',
          options: [
            'A full rough draft of your response',
            'Telegraphic — single words, arrows, numbers, quick notes',
            'A detailed mind map with full sentences',
            'A numbered list of quotations'
          ],
          answer: 1,
          explanation: 'Plans should be telegraphic and quick — single words, short phrases, arrows, and numbers. If your plan looks like a full paragraph, you are over-planning.'
        },
        {
          id: 'edexcel-et-m8-q3',
          question: 'What should you do if a better idea occurs to you mid-writing?',
          options: [
            'Ignore it and stick rigidly to your plan',
            'Start your entire response again',
            'Use the better idea — plans are guides, not contracts',
            'Write the new idea in the margin for another question'
          ],
          answer: 2,
          explanation: 'Plans are guides, not contracts. If a stronger idea emerges during writing, use it. The plan exists to give you direction and prevent disorganisation, not to trap you.'
        },
        {
          id: 'edexcel-et-m8-q4',
          question: 'What are discourse markers?',
          options: [
            'Marks awarded for writing in paragraphs',
            'Words and phrases that guide the reader through your writing',
            'The marks you write on the exam paper to track time',
            'Comments the examiner writes on your paper'
          ],
          answer: 1,
          explanation: 'Discourse markers are connective words and phrases like "Furthermore," "However," "In contrast," and "Consequently" that guide the reader smoothly through your argument or narrative.'
        },
        {
          id: 'edexcel-et-m8-q5',
          question: 'What should you do with your plan after finishing your response?',
          options: [
            'Leave it visible so the examiner can see your thinking',
            'Cross it out so the examiner knows not to mark it',
            'Rewrite it neatly at the end',
            'Hand it in on a separate sheet'
          ],
          answer: 1,
          explanation: 'Cross out your plan at the end so the examiner knows not to mark it. This prevents any confusion about what is part of your actual response.'
        }
      ]
    },

    // ── MODULE 9: Paper 2 Overview & Timing ──
    {
      id: 'edexcel-et-mod-9',
      title: 'Paper 2 Overview & Timing',
      duration: '20 min',
      content: `
<h2>Paper 2 Overview & Timing</h2>

<p>Edexcel English Language Paper 2 (1EN0/02) is a <strong>2 hour 5 minute</strong> examination — notably longer than Paper 1 and significantly longer than AQA's equivalent. The paper tests your reading of <strong>two non-fiction texts from different time periods</strong> (one nineteenth-century, one modern) and your ability to produce a piece of <strong>viewpoint writing</strong>. It is worth <strong>64 marks</strong> in total.</p>

<h3>Paper Structure</h3>

<p>Section A (Reading) is worth <strong>40 marks</strong> across five questions, and Section B (Writing) is worth <strong>40 marks</strong> for a single extended writing task. Note the different balance from Paper 1 — here, reading and writing are equally weighted.</p>

<h3>The Questions at a Glance</h3>
<ul>
  <li><strong>Q1 (4 marks):</strong> True/false statements about Source A — quick retrieval.</li>
  <li><strong>Q2 (8 marks):</strong> Summarise and synthesise information from both sources.</li>
  <li><strong>Q3 (12 marks):</strong> Analyse language in one specified source.</li>
  <li><strong>Q4 (16 marks):</strong> Compare writers' viewpoints and methods across both sources.</li>
  <li><strong>Q5 (20 marks):</strong> Evaluate a statement using evidence from both texts.</li>
  <li><strong>Q6 (40 marks):</strong> Writing task — present a viewpoint on a related topic.</li>
</ul>

<h3>Minute-by-Minute Timing Plan</h3>
<ul>
  <li><strong>0–15 minutes:</strong> Read both sources carefully. Annotate key points, methods, and viewpoints.</li>
  <li><strong>15–20 minutes:</strong> Q1 (4 marks) — true/false statements.</li>
  <li><strong>20–30 minutes:</strong> Q2 (8 marks) — summary and synthesis.</li>
  <li><strong>30–45 minutes:</strong> Q3 (12 marks) — language analysis on one source.</li>
  <li><strong>45–65 minutes:</strong> Q4 (16 marks) — compare viewpoints and methods.</li>
  <li><strong>65–85 minutes:</strong> Q5 (20 marks) — evaluate a statement across both texts.</li>
  <li><strong>85–90 minutes:</strong> Plan writing response (5 minutes).</li>
  <li><strong>90–120 minutes:</strong> Write viewpoint piece (30 minutes).</li>
  <li><strong>120–125 minutes:</strong> Proofread (5 minutes).</li>
</ul>

<div class="key-term"><strong>Key Term — Viewpoint Writing:</strong> Paper 2 Section B asks you to present your own viewpoint on a topic related to the reading sources. This is persuasive/argumentative writing — you must take a clear position and defend it convincingly using rhetorical techniques.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The extra 20 minutes compared to Paper 1 is a double-edged sword. Students who manage time well can produce excellent, thorough responses. Students who lack discipline often waste the extra time re-reading unnecessarily or over-writing early answers, then rush the writing section.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating Q5 (evaluation) as the same as Q4 (comparison). Q4 asks you to compare viewpoints and methods. Q5 asks you to evaluate a specific statement. These are different skills — comparison requires balanced coverage of both texts, while evaluation requires critical judgement about accuracy.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m9-q1',
          question: 'How long is Edexcel English Language Paper 2?',
          options: [
            '1 hour 30 minutes',
            '1 hour 45 minutes',
            '2 hours 5 minutes',
            '2 hours 30 minutes'
          ],
          answer: 2,
          explanation: 'Edexcel Paper 2 is 2 hours 5 minutes — notably longer than Paper 1 (1 hour 45 minutes) and longer than AQA\'s equivalent papers.'
        },
        {
          id: 'edexcel-et-m9-q2',
          question: 'How are marks distributed between reading and writing on Paper 2?',
          options: [
            '24 marks reading, 40 marks writing',
            '40 marks reading, 40 marks writing — but the writing Q is Q6 worth 40 marks',
            '30 marks reading, 34 marks writing',
            '50 marks reading, 14 marks writing'
          ],
          answer: 1,
          explanation: 'Paper 2 has a more balanced distribution than Paper 1: reading questions total 40 marks and the writing task (Q6) is worth 40 marks.'
        },
        {
          id: 'edexcel-et-m9-q3',
          question: 'What type of writing does Paper 2 Section B test?',
          options: [
            'Creative fiction writing',
            'Descriptive writing',
            'Viewpoint/persuasive writing on a topic related to the sources',
            'A summary of both reading sources'
          ],
          answer: 2,
          explanation: 'Paper 2 Section B tests viewpoint writing — presenting and defending a clear position on a topic related to the reading sources, using persuasive and rhetorical techniques.'
        },
        {
          id: 'edexcel-et-m9-q4',
          question: 'How do Q4 and Q5 differ on Paper 2?',
          options: [
            'Q4 analyses language; Q5 analyses structure',
            'Q4 compares viewpoints and methods; Q5 evaluates a specific statement',
            'They are essentially the same question asked twice',
            'Q4 covers Source A only; Q5 covers Source B only'
          ],
          answer: 1,
          explanation: 'Q4 requires comparison of viewpoints and methods across both texts, while Q5 requires critical evaluation of a specific statement — these are different skills.'
        },
        {
          id: 'edexcel-et-m9-q5',
          question: 'What is the danger of the extra time available on Paper 2?',
          options: [
            'Students finish too early and get bored',
            'Students may waste it on early questions and still rush the writing section',
            'There is no danger — more time always helps',
            'Students are not allowed to leave early'
          ],
          answer: 1,
          explanation: 'The extra time can lead to complacency — students over-write early answers or re-read unnecessarily, then still rush the high-mark writing task at the end.'
        }
      ]
    },

    // ── MODULE 10: Non-Fiction Reading Strategies ──
    {
      id: 'edexcel-et-mod-10',
      title: 'Non-Fiction Reading Strategies',
      duration: '20 min',
      content: `
<h2>Non-Fiction Reading Strategies</h2>

<p>Paper 2 presents two non-fiction sources — one from the nineteenth century and one modern. Reading non-fiction effectively requires a different approach from fiction. You are not looking for plot or character development; you are identifying <strong>viewpoints, arguments, methods, and rhetorical strategies</strong>. This module teaches you how to read non-fiction texts strategically so you can answer all five reading questions efficiently.</p>

<h3>First Read: Identify the Basics</h3>

<p>On your first read of each source, establish:</p>
<ul>
  <li><strong>Who is writing?</strong> A journalist, a politician, an explorer, a campaigner?</li>
  <li><strong>What is the topic?</strong> Summarise it in one sentence.</li>
  <li><strong>What is their viewpoint?</strong> Are they for or against something? What do they believe?</li>
  <li><strong>Who is their audience?</strong> Newspaper readers, a specific individual, the general public?</li>
  <li><strong>What is the purpose?</strong> To inform, persuade, argue, entertain, advise?</li>
</ul>

<h3>Second Read: Annotate Methods</h3>

<p>On your second read, focus on <em>how</em> the writer communicates their viewpoint:</p>
<ul>
  <li><strong>Tone:</strong> Formal, informal, sarcastic, passionate, measured, outraged?</li>
  <li><strong>Rhetorical devices:</strong> Rhetorical questions, direct address, tricolon, anecdotes, statistics, emotive language.</li>
  <li><strong>Structure:</strong> How does the argument develop? Does the writer build to a climax? Introduce a counter-argument?</li>
  <li><strong>Language choices:</strong> Specific vocabulary, figurative language, semantic fields, connotations of key words.</li>
</ul>

<div class="key-term"><strong>Key Term — Tone:</strong> The attitude or feeling behind the writing. Tone is conveyed through word choice, sentence structure, and punctuation. A writer can shift tone within a single text — moving from humour to seriousness, for example — and identifying these shifts is a high-level analytical skill.</div>

<h3>Reading Nineteenth-Century Non-Fiction</h3>

<p>The older source often uses unfamiliar vocabulary and longer, more complex sentences. Do not panic. Focus on:</p>
<ul>
  <li><strong>Context clues:</strong> Surrounding sentences often explain unfamiliar words.</li>
  <li><strong>The overall argument:</strong> You do not need to understand every word — understand the main point and key evidence.</li>
  <li><strong>Formality:</strong> Nineteenth-century texts are typically more formal and elaborate. This does not make them harder — it means the writer uses different conventions from modern writers.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Spend a full 15 minutes reading and annotating both sources before answering any questions. This upfront investment pays off enormously — you will write faster and more accurately because you already know where key evidence is located.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Reading the questions before the sources. This leads to shallow, question-hunting reading where you skim for answers instead of developing a genuine understanding of the texts. Read the sources first, annotate them, then turn to the questions.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m10-q1',
          question: 'What should you establish on your first read of a non-fiction source?',
          options: [
            'Every rhetorical device used',
            'Who is writing, what the topic is, their viewpoint, audience, and purpose',
            'The exact word count',
            'How it compares to the other source'
          ],
          answer: 1,
          explanation: 'Your first read should establish the basics: who is writing, the topic, their viewpoint, the intended audience, and the purpose. This gives you a framework for deeper analysis.'
        },
        {
          id: 'edexcel-et-m10-q2',
          question: 'How should you approach unfamiliar vocabulary in the nineteenth-century source?',
          options: [
            'Skip any sentence with an unfamiliar word',
            'Use context clues from surrounding sentences and focus on the overall argument',
            'Ask the invigilator for definitions',
            'Assume it means the same as a modern word that sounds similar'
          ],
          answer: 1,
          explanation: 'Use context clues to infer meaning and focus on understanding the overall argument. You do not need to understand every word to analyse the text effectively.'
        },
        {
          id: 'edexcel-et-m10-q3',
          question: 'How much time should you spend reading both sources before answering questions?',
          options: [
            '5 minutes',
            '10 minutes',
            '15 minutes',
            '25 minutes'
          ],
          answer: 2,
          explanation: 'Spend a full 15 minutes reading and annotating both sources. This upfront investment means you write faster and more accurately on the questions.'
        },
        {
          id: 'edexcel-et-m10-q4',
          question: 'Why should you read the sources before the questions?',
          options: [
            'It is an exam rule',
            'Reading questions first leads to shallow, question-hunting reading instead of genuine understanding',
            'The questions change depending on how long you spend reading',
            'The sources are printed before the questions in the booklet'
          ],
          answer: 1,
          explanation: 'Reading questions first leads to skimming for specific answers rather than developing a genuine understanding of the texts, which undermines your ability to analyse methods and evaluate arguments.'
        },
        {
          id: 'edexcel-et-m10-q5',
          question: 'What is "tone" in non-fiction writing?',
          options: [
            'The volume at which the writing should be read',
            'The attitude or feeling behind the writing, conveyed through word choice and structure',
            'The font style used in the text',
            'Whether the text is fiction or non-fiction'
          ],
          answer: 1,
          explanation: 'Tone is the attitude or feeling behind the writing — formal, sarcastic, passionate, measured — conveyed through word choice, sentence structure, and punctuation.'
        }
      ]
    },

    // ── MODULE 11: Viewpoint & Perspective Analysis ──
    {
      id: 'edexcel-et-mod-11',
      title: 'Viewpoint & Perspective Analysis',
      duration: '20 min',
      content: `
<h2>Viewpoint & Perspective Analysis</h2>

<p>Understanding a writer's viewpoint and perspective is central to Paper 2. Questions 4 and 5 both require you to engage with what writers think and how they express those views. But viewpoint analysis goes beyond simply stating "the writer thinks X" — you must explore <strong>how the writer's perspective is shaped, communicated, and made persuasive</strong>.</p>

<h3>Viewpoint vs. Perspective</h3>

<p>These terms are related but distinct:</p>
<ul>
  <li><strong>Viewpoint:</strong> The writer's opinion or position on a topic. What do they think? What are they arguing for or against?</li>
  <li><strong>Perspective:</strong> The lens through which they view the topic, shaped by their background, context, and experiences. A Victorian factory owner and a modern environmental campaigner might both write about industry, but their perspectives will be fundamentally different.</li>
</ul>

<div class="key-term"><strong>Key Term — Perspective:</strong> The personal, social, historical, or cultural lens through which a writer sees a topic. Identifying perspective helps explain <em>why</em> a writer holds a particular viewpoint and why they express it in a particular way.</div>

<h3>How Writers Communicate Viewpoint</h3>

<p>Writers do not simply state their opinions — they use a range of methods to make their viewpoint persuasive:</p>
<ul>
  <li><strong>Emotive language:</strong> Choosing words with strong emotional connotations to provoke a response in the reader.</li>
  <li><strong>Anecdotes:</strong> Personal stories that make abstract arguments feel concrete and relatable.</li>
  <li><strong>Direct address:</strong> Using "you" and "we" to create a connection with the reader and make them feel involved.</li>
  <li><strong>Counter-arguments:</strong> Acknowledging opposing views before dismantling them, which strengthens credibility.</li>
  <li><strong>Expert opinion / statistics:</strong> Lending authority and evidence to the argument.</li>
  <li><strong>Humour or irony:</strong> Making the reader sympathise with the writer's position through wit.</li>
</ul>

<h3>Comparing Viewpoints Across Two Texts</h3>

<p>For Q4 (compare viewpoints and methods), you need a comparative structure:</p>
<ul>
  <li>Identify a shared topic or theme both writers address.</li>
  <li>State how each writer's viewpoint on that topic differs (or agrees).</li>
  <li>Analyse the different methods each writer uses to communicate their viewpoint.</li>
  <li>Explain why their methods might differ — consider context, audience, and purpose.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best Q4 responses do not simply list differences. They explore <em>why</em> the viewpoints and methods differ — often linking this to the different time periods, audiences, or purposes of the two texts.</div>

<h3>Evaluating a Viewpoint</h3>

<p>For Q5 (evaluate a statement), you are not comparing — you are judging. The examiner gives you a statement about one or both writers' views, and you must weigh the evidence. This requires:</p>
<ul>
  <li>Considering evidence that supports the statement.</li>
  <li>Considering evidence that challenges or complicates the statement.</li>
  <li>Reaching a nuanced conclusion about how far the statement is accurate.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Confusing your own opinion with analysis of the writer's viewpoint. In reading questions, the examiner wants to know what the <em>writer</em> thinks, not what <em>you</em> think about the topic. Save your personal views for the writing section.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m11-q1',
          question: 'What is the difference between viewpoint and perspective?',
          options: [
            'They mean exactly the same thing',
            'Viewpoint is the writer\'s opinion; perspective is the lens shaped by their background and context',
            'Viewpoint applies to fiction; perspective applies to non-fiction',
            'Perspective is always first person; viewpoint is always third person'
          ],
          answer: 1,
          explanation: 'Viewpoint is what the writer thinks (their opinion), while perspective is the personal, social, or historical lens through which they view the topic, shaped by background and experience.'
        },
        {
          id: 'edexcel-et-m11-q2',
          question: 'Why do the strongest Q4 responses go beyond simply listing differences?',
          options: [
            'Because listing is not allowed in the exam',
            'Because they explore why viewpoints and methods differ, linking to context and purpose',
            'Because examiners only reward similarities, not differences',
            'Because Q4 only asks about one text'
          ],
          answer: 1,
          explanation: 'Top-band Q4 responses explore the reasons behind different viewpoints and methods — often linking to the different time periods, audiences, or purposes of the two texts.'
        },
        {
          id: 'edexcel-et-m11-q3',
          question: 'What is the role of counter-arguments in communicating a viewpoint?',
          options: [
            'They weaken the writer\'s position',
            'They acknowledge opposing views before dismantling them, strengthening credibility',
            'They are only used in formal debates',
            'They confuse the reader'
          ],
          answer: 1,
          explanation: 'Acknowledging and then dismantling counter-arguments shows the writer has considered other perspectives, which strengthens their credibility and makes their position more persuasive.'
        },
        {
          id: 'edexcel-et-m11-q4',
          question: 'In reading questions, whose opinion should you analyse?',
          options: [
            'Your own opinion about the topic',
            'The writer\'s opinion — not yours',
            'Your teacher\'s opinion from class discussion',
            'The examiner\'s opinion'
          ],
          answer: 1,
          explanation: 'In reading questions, the examiner wants analysis of the writer\'s viewpoint and methods. Save your personal opinions for the writing section.'
        },
        {
          id: 'edexcel-et-m11-q5',
          question: 'Which method involves using "you" and "we" to connect with the reader?',
          options: [
            'Emotive language',
            'Anecdotes',
            'Direct address',
            'Counter-arguments'
          ],
          answer: 2,
          explanation: 'Direct address uses pronouns like "you" and "we" to create a connection with the reader, making them feel personally involved in the argument.'
        }
      ]
    },

    // ── MODULE 12: Writer's Methods in Non-Fiction ──
    {
      id: 'edexcel-et-mod-12',
      title: "Writer's Methods in Non-Fiction",
      duration: '20 min',
      content: `
<h2>Writer's Methods in Non-Fiction</h2>

<p>The phrase "writer's methods" appears repeatedly in Edexcel mark schemes. It is the key differentiator between lower-band responses (which focus on <em>what</em> a writer says) and upper-band responses (which analyse <em>how</em> a writer says it and <em>why</em>). This module catalogues the most common methods used in non-fiction texts and shows you how to analyse them effectively.</p>

<h3>Language Methods</h3>
<ul>
  <li><strong>Emotive language:</strong> Words chosen for their emotional impact. "Innocent children suffer" is more emotive than "young people are affected." Analyse the specific connotations of the word choices.</li>
  <li><strong>Figurative language:</strong> Metaphors, similes, and personification are not exclusive to fiction. A journalist might describe poverty as "a disease eating through our communities" — analyse what the comparison suggests.</li>
  <li><strong>Formal/informal register:</strong> The level of formality is a deliberate choice. A formal register conveys authority; an informal one builds rapport. Note any shifts in register within a text.</li>
  <li><strong>Hyperbole:</strong> Deliberate exaggeration for emphasis. "This is the greatest crisis of our generation" may not be literally true but conveys urgency.</li>
  <li><strong>Irony and sarcasm:</strong> Saying the opposite of what is meant. Powerful for undermining opposing views.</li>
</ul>

<h3>Structural Methods</h3>
<ul>
  <li><strong>Opening hooks:</strong> How does the writer grab attention? A shocking statistic, a provocative question, a vivid anecdote?</li>
  <li><strong>Paragraph progression:</strong> Does the argument build logically? Move from personal to universal? From problem to solution?</li>
  <li><strong>Counter-argument placement:</strong> Where the writer addresses opposing views — and how they transition back to their own position.</li>
  <li><strong>Closing strategy:</strong> Does the writer end with a call to action, a memorable image, a return to the opening, or a final rhetorical question?</li>
</ul>

<div class="key-term"><strong>Key Term — Register:</strong> The level of formality in language. Formal register uses standard English, complex vocabulary, and impersonal tone. Informal register uses colloquialisms, contractions, and a conversational tone. Writers choose their register to match their audience and purpose.</div>

<h3>Analysing Methods, Not Just Identifying Them</h3>

<p>Identification alone earns minimal marks. To analyse a method effectively:</p>
<ol>
  <li><strong>Name the method</strong> using appropriate terminology.</li>
  <li><strong>Quote the example</strong> — keep it short and embedded.</li>
  <li><strong>Explore the connotations</strong> of specific words within the quotation.</li>
  <li><strong>Explain the effect</strong> on the reader — what does it make them think, feel, or do?</li>
  <li><strong>Link to purpose</strong> — how does this method help the writer achieve their overall aim?</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> In the mark scheme, "perceptive analysis of methods" is the phrase that unlocks the top band. This means going beyond surface-level comments to explore layers of meaning — why a specific word was chosen over alternatives, how a structural choice controls the reader's response, why a shift in tone occurs at a particular moment.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Analysing what the writer says without discussing how they say it. "The writer thinks pollution is bad" earns almost no marks. "The writer's use of the metaphor 'choking our future' presents pollution as a violent, suffocating threat, creating urgency in the reader" earns significantly more.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m12-q1',
          question: 'What does "writer\'s methods" mean in Edexcel mark schemes?',
          options: [
            'The writer\'s personal habits and routines',
            'How the writer communicates their ideas — language, structure, and rhetorical techniques',
            'The format of the text (article, letter, speech)',
            'The writer\'s biography and background'
          ],
          answer: 1,
          explanation: '"Writer\'s methods" refers to how a writer communicates their ideas — the specific language choices, structural techniques, and rhetorical strategies they employ.'
        },
        {
          id: 'edexcel-et-m12-q2',
          question: 'What is hyperbole?',
          options: [
            'An understatement for comedic effect',
            'Deliberate exaggeration for emphasis',
            'A type of metaphor comparing two unlike things',
            'Repetition of consonant sounds'
          ],
          answer: 1,
          explanation: 'Hyperbole is deliberate exaggeration used for emphasis or dramatic effect — for example, "This is the greatest crisis of our generation."'
        },
        {
          id: 'edexcel-et-m12-q3',
          question: 'Which analytical step do many students skip when discussing methods?',
          options: [
            'Naming the technique',
            'Quoting the example',
            'Exploring the connotations of specific words and linking to purpose',
            'Writing in paragraphs'
          ],
          answer: 2,
          explanation: 'Many students identify and quote but skip the crucial step of exploring connotations and linking to the writer\'s purpose. This deeper analysis is what earns top-band marks.'
        },
        {
          id: 'edexcel-et-m12-q4',
          question: 'What is the difference between formal and informal register?',
          options: [
            'Formal is written; informal is spoken',
            'Formal uses standard English and complex vocabulary; informal uses colloquialisms and conversational tone',
            'Formal is always better than informal',
            'There is no difference in exam terms'
          ],
          answer: 1,
          explanation: 'Formal register uses standard English, complex vocabulary, and impersonal tone, while informal register uses colloquialisms, contractions, and a conversational tone. Both are valid choices depending on audience and purpose.'
        },
        {
          id: 'edexcel-et-m12-q5',
          question: 'Why is "The writer thinks pollution is bad" a weak analytical statement?',
          options: [
            'Because pollution is not discussed on Paper 2',
            'Because it describes what the writer says without analysing how they say it',
            'Because it is too short',
            'Because you should not give your opinion'
          ],
          answer: 1,
          explanation: 'This statement only describes content (what the writer says) without analysing methods (how they say it). Top-band responses analyse the specific language and techniques used to convey the message.'
        }
      ]
    },

    // ── MODULE 13: Transactional Writing — Articles ──
    {
      id: 'edexcel-et-mod-13',
      title: 'Transactional Writing: Articles',
      duration: '20 min',
      content: `
<h2>Transactional Writing: Articles</h2>

<p>The article is one of the most commonly tested transactional writing formats on Edexcel papers. It requires you to write for a specific publication (newspaper, magazine, website) with a clear <strong>purpose</strong> (inform, persuade, argue, advise) and <strong>audience</strong>. The format conventions of an article are straightforward but must be followed — missing them signals to the examiner that you have not understood the task.</p>

<h3>Format Features</h3>
<ul>
  <li><strong>Headline:</strong> Short, engaging, and relevant. Use a pun, alliteration, or provocative statement. The headline should make the reader want to read on.</li>
  <li><strong>Subheading (optional):</strong> A secondary line that adds context or a different angle. Not required but demonstrates format awareness.</li>
  <li><strong>Byline (optional):</strong> "By [your name]" — shows awareness of the format.</li>
  <li><strong>Opening hook:</strong> The first paragraph must grab the reader. Use a striking fact, a rhetorical question, a bold statement, or a vivid scene.</li>
  <li><strong>Paragraphed body:</strong> Clear paragraphs, each developing a distinct point. Use discourse markers to guide the reader.</li>
  <li><strong>Memorable ending:</strong> A punchy final line, a call to action, or a return to the opening image.</li>
</ul>

<div class="key-term"><strong>Key Term — Headline:</strong> The main title of an article, designed to capture attention and summarise the article's focus. An effective headline is concise, engaging, and often uses wordplay, alliteration, or a provocative claim.</div>

<h3>Matching Tone to Publication</h3>

<p>The tone of your article must match its intended publication:</p>
<ul>
  <li><strong>Broadsheet newspaper:</strong> Formal, measured, evidence-based. Complex sentences, sophisticated vocabulary.</li>
  <li><strong>Tabloid newspaper:</strong> More conversational, direct, emotive. Shorter sentences, punchy language.</li>
  <li><strong>Student magazine:</strong> Semi-formal, engaging, relatable. Direct address ("you"), rhetorical questions, relevant examples.</li>
  <li><strong>Website/blog:</strong> Informal, personal, contemporary. First person, anecdotes, current references.</li>
</ul>

<h3>Building Your Argument</h3>

<p>A strong article structures its argument clearly:</p>
<ol>
  <li><strong>Opening:</strong> State your position or introduce the issue compellingly.</li>
  <li><strong>Body paragraphs:</strong> Each introduces a new argument or piece of evidence. Use a range of persuasive methods — statistics, expert quotes, anecdotes, emotive language, logical reasoning.</li>
  <li><strong>Counter-argument:</strong> Acknowledge the opposing view, then dismantle it. This shows sophistication.</li>
  <li><strong>Conclusion:</strong> Reinforce your main message with a powerful final statement or call to action.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Articles are one of the easiest formats to score well on because they allow the most natural use of rhetorical techniques. If you have practised persuasive writing, an article format lets you deploy all your skills.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Forgetting the headline or writing a headline that is a full sentence. Headlines should be punchy and concise — more like a billboard than a paragraph. "Why We Must Act Now" is better than "I think we should all do something about this problem."</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m13-q1',
          question: 'What format features should an article include?',
          options: [
            'Address, date, and formal sign-off',
            'Headline, opening hook, paragraphed body, and memorable ending',
            'Stage directions and dialogue',
            'Bullet points and numbered lists only'
          ],
          answer: 1,
          explanation: 'Articles need a headline, an engaging opening hook, a clearly paragraphed body, and a memorable ending. Optional features include subheadings and a byline.'
        },
        {
          id: 'edexcel-et-m13-q2',
          question: 'How should the tone differ between a broadsheet and a student magazine article?',
          options: [
            'There should be no difference in tone',
            'A broadsheet should be formal and evidence-based; a student magazine should be semi-formal and relatable',
            'A broadsheet should be informal; a student magazine should be formal',
            'Both should always use an academic tone'
          ],
          answer: 1,
          explanation: 'A broadsheet newspaper requires formal, measured, evidence-based writing, while a student magazine allows a semi-formal, engaging, relatable tone with direct address.'
        },
        {
          id: 'edexcel-et-m13-q3',
          question: 'Why should you include a counter-argument in your article?',
          options: [
            'To show you cannot make up your mind',
            'To fill space when you run out of ideas',
            'To demonstrate sophistication by acknowledging and dismantling the opposing view',
            'Because the mark scheme requires exactly one counter-argument'
          ],
          answer: 2,
          explanation: 'Including a counter-argument and then dismantling it shows sophistication and critical thinking, strengthening your overall position.'
        },
        {
          id: 'edexcel-et-m13-q4',
          question: 'What makes an effective headline?',
          options: [
            'A full sentence explaining your argument',
            'A punchy, concise phrase that grabs attention — possibly using wordplay or alliteration',
            'Your name and the date',
            'A quotation from someone famous'
          ],
          answer: 1,
          explanation: 'Headlines should be short, engaging, and attention-grabbing. Use wordplay, alliteration, or a provocative statement rather than a complete sentence.'
        },
        {
          id: 'edexcel-et-m13-q5',
          question: 'What is the best opening strategy for an article?',
          options: [
            'Start with "In this article I will discuss..."',
            'Begin with a dictionary definition',
            'Use a striking fact, rhetorical question, bold statement, or vivid scene',
            'Start with your conclusion'
          ],
          answer: 2,
          explanation: 'Strong article openings grab the reader immediately with a striking fact, rhetorical question, bold statement, or vivid scene — not with generic introductions.'
        }
      ]
    },

    // ── MODULE 14: Transactional Writing — Letters ──
    {
      id: 'edexcel-et-mod-14',
      title: 'Transactional Writing: Letters',
      duration: '20 min',
      content: `
<h2>Transactional Writing: Letters</h2>

<p>Letter writing is a staple of Edexcel transactional writing tasks. Whether you are writing to a headteacher, a local council, a newspaper editor, or an MP, the letter format requires specific conventions that you must follow. More importantly, letters demand precise <strong>audience awareness</strong> — the relationship between you and your recipient shapes every word you write.</p>

<h3>Format Conventions</h3>
<ul>
  <li><strong>Your address:</strong> Top right corner (you may use a fictional address).</li>
  <li><strong>Date:</strong> Below your address.</li>
  <li><strong>Recipient's name/title:</strong> Left-aligned, below the date.</li>
  <li><strong>Salutation:</strong> "Dear Mr/Mrs/Ms [Name]" if named; "Dear Sir or Madam" if unnamed.</li>
  <li><strong>Sign-off:</strong> "Yours sincerely" if you used a name; "Yours faithfully" if you used "Sir or Madam."</li>
  <li><strong>Your name:</strong> Below the sign-off.</li>
</ul>

<div class="key-term"><strong>Key Term — Register:</strong> In letter writing, register must match your relationship with the recipient. A letter to a friend uses informal register; a letter to the Prime Minister uses formal register. Getting this wrong immediately costs marks because it shows a lack of audience awareness.</div>

<h3>Formal Letter Structure</h3>
<ol>
  <li><strong>Opening paragraph:</strong> State your purpose clearly. Why are you writing? What do you want?</li>
  <li><strong>Body paragraphs (2–3):</strong> Present your arguments, evidence, or points. Each paragraph addresses a different aspect of your case.</li>
  <li><strong>Counter-argument paragraph (optional):</strong> Acknowledge a potential objection and address it. This shows maturity and persuasive skill.</li>
  <li><strong>Closing paragraph:</strong> Summarise your position and state clearly what action you want the recipient to take.</li>
</ol>

<h3>Tone and Language</h3>

<p>Formal letters should be:</p>
<ul>
  <li><strong>Respectful but assertive:</strong> "I would urge you to consider..." not "You should..."</li>
  <li><strong>Evidence-based:</strong> Support claims with reasons, examples, or (invented) statistics.</li>
  <li><strong>Measured in tone:</strong> Avoid aggressive or emotional outbursts — even if the topic is something you feel strongly about.</li>
  <li><strong>Free of contractions:</strong> Write "I would" not "I'd"; "cannot" not "can't" — in formal correspondence.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The letter format is often paired with a persuasive or argumentative purpose. Use the format conventions to frame your argument, then deploy the full range of persuasive techniques within the body. The combination of correct format and strong rhetoric is what earns top marks.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Confusing "Yours sincerely" and "Yours faithfully." This is a simple error that costs marks unnecessarily. Remember: Sincerely = you know their name (Sincerely and Surname both start with S). Faithfully = you do not know their name (Faithfully and "For someone unknown" both start with F).</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m14-q1',
          question: 'When should you use "Yours faithfully" to sign off a letter?',
          options: [
            'When you know the recipient\'s name',
            'When you do not know the recipient\'s name (e.g., "Dear Sir or Madam")',
            'In all formal letters regardless',
            'Only in informal letters'
          ],
          answer: 1,
          explanation: 'Use "Yours faithfully" when you do not know the recipient\'s name (Dear Sir or Madam). Use "Yours sincerely" when you do know their name (Dear Mrs Patel).'
        },
        {
          id: 'edexcel-et-m14-q2',
          question: 'What should the opening paragraph of a formal letter do?',
          options: [
            'Tell the recipient about yourself in detail',
            'State your purpose clearly — why you are writing and what you want',
            'Compliment the recipient',
            'Present your strongest argument immediately'
          ],
          answer: 1,
          explanation: 'The opening paragraph should clearly state your purpose — why you are writing and what outcome you are seeking. This gives the letter direction and clarity.'
        },
        {
          id: 'edexcel-et-m14-q3',
          question: 'Why should you avoid contractions in a formal letter?',
          options: [
            'Contractions are grammatically incorrect',
            'They are too informal for formal correspondence and weaken the professional tone',
            'The examiner deducts marks for each contraction',
            'Contractions are ambiguous'
          ],
          answer: 1,
          explanation: 'Contractions (I\'d, can\'t, won\'t) are too informal for formal correspondence. Using full forms (I would, cannot, will not) maintains a professional, authoritative tone.'
        },
        {
          id: 'edexcel-et-m14-q4',
          question: 'Where should your address appear in a formal letter?',
          options: [
            'Bottom left corner',
            'Centre of the page',
            'Top right corner',
            'After the sign-off'
          ],
          answer: 2,
          explanation: 'Your address should appear in the top right corner of the letter, with the date below it. This is a standard formal letter convention.'
        },
        {
          id: 'edexcel-et-m14-q5',
          question: 'What tone should a formal persuasive letter strike?',
          options: [
            'Aggressive and demanding',
            'Casual and chatty',
            'Respectful but assertive',
            'Neutral and emotionless'
          ],
          answer: 2,
          explanation: 'A formal persuasive letter should be respectful but assertive — making a strong case while maintaining a measured, professional tone. Aggression undermines credibility.'
        }
      ]
    },

    // ── MODULE 15: Transactional Writing — Speeches ──
    {
      id: 'edexcel-et-mod-15',
      title: 'Transactional Writing: Speeches',
      duration: '20 min',
      content: `
<h2>Transactional Writing: Speeches</h2>

<p>Speech writing is a favourite of Edexcel examiners because it tests your ability to write persuasively while maintaining an awareness of the <strong>spoken register</strong>. A speech must read as though it is designed to be delivered aloud to a live audience. This creates specific challenges and opportunities that differ from articles and letters.</p>

<h3>Format Features of a Speech</h3>
<ul>
  <li><strong>Direct address to the audience:</strong> "Ladies and gentlemen," "Fellow students," "Members of the committee."</li>
  <li><strong>Consistent awareness of the spoken context:</strong> Reference the audience, the occasion, the room. "I stand before you today because..."</li>
  <li><strong>No visual formatting features:</strong> Unlike an article, a speech has no headlines, subheadings, or bullet points. It flows as continuous prose with clear rhetorical signposting.</li>
  <li><strong>A strong opening and a memorable closing:</strong> Speeches live or die by their first and last impressions.</li>
</ul>

<h3>Rhetorical Techniques for Speeches</h3>

<p>Speeches are the natural home of rhetoric. Examiners expect to see:</p>
<ul>
  <li><strong>Rhetorical questions:</strong> "How long are we expected to wait?" — engages the audience and implies the answer.</li>
  <li><strong>Tricolon (rule of three):</strong> "We need action, we need change, we need it now."</li>
  <li><strong>Anaphora (repetition at the start of sentences):</strong> "We will fight for our future. We will fight for our community. We will fight until we are heard."</li>
  <li><strong>Inclusive pronouns:</strong> "We" and "our" create a sense of collective identity and shared purpose.</li>
  <li><strong>Contrast/antithesis:</strong> "It is not a question of ability, but of opportunity."</li>
  <li><strong>Emotive anecdotes:</strong> Personal stories that humanise your argument.</li>
</ul>

<div class="key-term"><strong>Key Term — Anaphora:</strong> The deliberate repetition of a word or phrase at the beginning of successive sentences or clauses. It creates rhythm, emphasis, and momentum — think of Martin Luther King's "I have a dream" speech.</div>

<h3>Structuring a Speech</h3>
<ol>
  <li><strong>Opening:</strong> Address the audience. Hook them with a provocative question, a striking fact, or a personal anecdote.</li>
  <li><strong>Establish your thesis:</strong> State your position clearly early on. The audience should know what you are arguing within the first paragraph.</li>
  <li><strong>Supporting arguments (3–4 paragraphs):</strong> Each builds on the last, using a mix of evidence, anecdote, and rhetoric.</li>
  <li><strong>Counter-argument:</strong> Acknowledge the opposition, then refute it firmly.</li>
  <li><strong>Closing:</strong> End with a rallying call to action or a powerful final image. The last line should linger.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Read your speech aloud in your head as you write it. If a sentence feels clunky or breathless, it needs restructuring. Speeches have a natural rhythm — sentences should vary in length, and the writing should flow when spoken.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a speech that reads like an essay. If you could remove the opening address and the piece would still work as an article, it is not a speech. A speech must feel spoken — use direct address throughout, reference the audience, and maintain a conversational energy even when making serious points.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m15-q1',
          question: 'What is anaphora?',
          options: [
            'A type of metaphor',
            'Deliberate repetition of a word or phrase at the start of successive sentences',
            'A concluding statement in a speech',
            'A rhetorical question'
          ],
          answer: 1,
          explanation: 'Anaphora is the deliberate repetition of a word or phrase at the beginning of successive sentences or clauses, creating rhythm, emphasis, and momentum.'
        },
        {
          id: 'edexcel-et-m15-q2',
          question: 'How does a speech differ from an article in format?',
          options: [
            'Speeches use headlines and subheadings',
            'Speeches have no visual formatting — they flow as continuous prose with rhetorical signposting',
            'Speeches must be written in bullet points',
            'There is no difference in format'
          ],
          answer: 1,
          explanation: 'Unlike articles, speeches have no headlines, subheadings, or bullet points. They flow as continuous prose, using rhetorical signposting and direct address to maintain structure.'
        },
        {
          id: 'edexcel-et-m15-q3',
          question: 'Why should you use inclusive pronouns like "we" and "our" in a speech?',
          options: [
            'To avoid using "I" which is too informal',
            'To create a sense of collective identity and shared purpose with the audience',
            'Because examiners count pronoun usage',
            'To make the speech longer'
          ],
          answer: 1,
          explanation: 'Inclusive pronouns ("we," "our") create a sense of collective identity, making the audience feel they share the speaker\'s purpose and are part of the argument.'
        },
        {
          id: 'edexcel-et-m15-q4',
          question: 'What is antithesis in speech writing?',
          options: [
            'The opposite of a thesis statement',
            'A contrast between two opposing ideas in a balanced sentence structure',
            'The conclusion of a speech',
            'An argument against your own position'
          ],
          answer: 1,
          explanation: 'Antithesis places two contrasting ideas in a balanced sentence structure — "It is not a question of ability, but of opportunity" — creating emphasis and clarity.'
        },
        {
          id: 'edexcel-et-m15-q5',
          question: 'How can you tell if your speech reads too much like an essay?',
          options: [
            'It uses paragraphs',
            'If you could remove the opening address and it would still work as an article, it lacks spoken qualities',
            'It contains evidence and arguments',
            'It has a conclusion'
          ],
          answer: 1,
          explanation: 'A speech should feel spoken — with direct address throughout, audience references, and conversational energy. If removing the opening address turns it into an article, it needs more speech-specific qualities.'
        }
      ]
    },

    // ── MODULE 16: Rhetorical Devices Toolkit ──
    {
      id: 'edexcel-et-mod-16',
      title: 'Rhetorical Devices Toolkit',
      duration: '20 min',
      content: `
<h2>Rhetorical Devices Toolkit</h2>

<p>Rhetorical devices are the tools of persuasion. Whether you are analysing a non-fiction source or crafting your own transactional writing, a strong command of rhetoric is essential. This module provides a comprehensive toolkit of the devices Edexcel examiners expect to see deployed in writing and identified in analysis.</p>

<h3>The Essential Devices</h3>

<p><strong>1. Rhetorical Question</strong></p>
<p>A question asked for effect, not to receive an answer. It implies the answer is obvious and draws the audience into the argument: <em>"Is this really the future we want for our children?"</em></p>

<p><strong>2. Tricolon (Rule of Three)</strong></p>
<p>A series of three words, phrases, or clauses that creates rhythm and emphasis: <em>"Education is a right, a responsibility, and a revolution."</em></p>

<p><strong>3. Anaphora</strong></p>
<p>Repetition of a word or phrase at the start of successive clauses: <em>"We deserve better. We demand better. We will achieve better."</em></p>

<p><strong>4. Emotive Language</strong></p>
<p>Words chosen specifically for their emotional impact. Compare "children are affected" with "innocent children are suffering" — the second provokes a stronger response.</p>

<p><strong>5. Hyperbole</strong></p>
<p>Deliberate exaggeration: <em>"This is the most important decision of our lifetime."</em></p>

<p><strong>6. Direct Address</strong></p>
<p>Using "you" to speak directly to the reader/audience: <em>"You have the power to change this."</em></p>

<p><strong>7. Imperative Verbs</strong></p>
<p>Commands that urge action: <em>"Stand up. Speak out. Make your voice heard."</em></p>

<p><strong>8. Statistics and Facts</strong></p>
<p>Concrete evidence that lends authority: <em>"According to recent research, 78% of young people believe..."</em> (In exams, you may invent plausible statistics.)</p>

<p><strong>9. Anecdotes</strong></p>
<p>Personal stories that make abstract arguments concrete and relatable: <em>"Last summer, I witnessed something that changed my perspective entirely..."</em></p>

<p><strong>10. Allusion</strong></p>
<p>A reference to a well-known person, event, or text: <em>"Like David facing Goliath, our small community stood against the corporation."</em></p>

<div class="key-term"><strong>Key Term — DAFOREST:</strong> A common mnemonic for persuasive devices — Direct address, Alliteration, Facts, Opinions, Rhetorical questions, Emotive language, Statistics, Tricolon. While useful as a checklist, remember that deploying these naturally is more important than ticking them off mechanically.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> In your writing, aim to use at least 5–6 different rhetorical devices, but deploy them naturally within your argument. Do not cluster all your devices into one paragraph. Spread them throughout to maintain a consistently persuasive tone.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Using rhetorical devices as decoration rather than argumentation. Every device should serve your argument. A rhetorical question should make the audience think about your specific point, not just demonstrate that you know what a rhetorical question is.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m16-q1',
          question: 'What is a tricolon?',
          options: [
            'A three-paragraph essay structure',
            'A series of three words, phrases, or clauses that creates rhythm and emphasis',
            'A type of punctuation mark',
            'Three rhetorical questions in a row'
          ],
          answer: 1,
          explanation: 'A tricolon (rule of three) is a series of three words, phrases, or clauses used together to create rhythm, emphasis, and a sense of completeness.'
        },
        {
          id: 'edexcel-et-m16-q2',
          question: 'Can you invent statistics in exam writing?',
          options: [
            'No — all facts must be real',
            'Yes — you may invent plausible statistics to support your argument',
            'Only if you label them as invented',
            'Only for speech writing, not articles'
          ],
          answer: 1,
          explanation: 'In exam writing, you may invent plausible statistics to lend authority to your argument. Examiners are assessing your persuasive technique, not fact-checking your claims.'
        },
        {
          id: 'edexcel-et-m16-q3',
          question: 'What does DAFOREST stand for?',
          options: [
            'Description, Alliteration, Figurative language, Onomatopoeia, Rhyme, Enjambment, Simile, Tricolon',
            'Direct address, Alliteration, Facts, Opinions, Rhetorical questions, Emotive language, Statistics, Tricolon',
            'Dialogue, Action, Flashback, Opening, Resolution, Ending, Setting, Theme',
            'Definition, Analysis, Focus, Organisation, Register, Evidence, Structure, Tone'
          ],
          answer: 1,
          explanation: 'DAFOREST stands for Direct address, Alliteration, Facts, Opinions, Rhetorical questions, Emotive language, Statistics, and Tricolon — a mnemonic for key persuasive devices.'
        },
        {
          id: 'edexcel-et-m16-q4',
          question: 'What is an allusion?',
          options: [
            'A visual illusion created by wordplay',
            'A reference to a well-known person, event, or text',
            'A type of simile',
            'A misunderstanding between characters'
          ],
          answer: 1,
          explanation: 'An allusion is a reference to a well-known person, event, or text — for example, comparing a situation to David and Goliath. It adds layers of meaning by drawing on shared cultural knowledge.'
        },
        {
          id: 'edexcel-et-m16-q5',
          question: 'Why should rhetorical devices be spread throughout your writing rather than clustered?',
          options: [
            'Because examiners count the number of paragraphs with devices',
            'To maintain a consistently persuasive tone throughout the whole piece',
            'Because using more than two devices per paragraph is against exam rules',
            'To make your writing longer'
          ],
          answer: 1,
          explanation: 'Spreading rhetorical devices throughout your writing maintains a consistently persuasive tone. Clustering them in one paragraph leaves the rest of your piece flat and unpersuasive.'
        }
      ]
    },

    // ── MODULE 17: Synthesising Information from Two Texts ──
    {
      id: 'edexcel-et-mod-17',
      title: 'Synthesising Information from Two Texts',
      duration: '20 min',
      content: `
<h2>Synthesising Information from Two Texts</h2>

<p>Synthesis — the ability to draw together information from two separate sources — is a skill unique to Paper 2. Question 2 explicitly tests it, but the ability to synthesise also strengthens your responses to Q4 and Q5. Many students struggle with synthesis because they treat it as writing about Source A, then Source B. True synthesis <strong>weaves the sources together</strong>, showing connections and contrasts in the same breath.</p>

<h3>What Synthesis Looks Like</h3>

<p>Compare these two approaches:</p>
<p><strong>Weak (alternating):</strong> "Source A says cities are dangerous. Source B says cities are exciting."</p>
<p><strong>Strong (synthesised):</strong> "Both writers acknowledge the intensity of city life, but while Source A emphasises the dangers — describing streets 'thick with menace' — Source B frames this same intensity as excitement, celebrating the 'electric energy' of urban nights."</p>

<p>The synthesised response draws both sources into the same analytical point, using comparison and contrast within a single sentence or paragraph.</p>

<h3>Strategies for Synthesis</h3>
<ul>
  <li><strong>Find common ground first:</strong> What do both texts discuss? Start with the shared topic, then explore how their treatments differ.</li>
  <li><strong>Use comparative connectives:</strong> "Similarly," "In contrast," "While Source A..., Source B...," "Both writers...," "However," "Unlike Source A, Source B..."</li>
  <li><strong>Quote from both sources in the same paragraph:</strong> This physically demonstrates synthesis on the page.</li>
  <li><strong>Group by theme, not by source:</strong> Organise your paragraphs around topics (e.g., "attitudes to danger") rather than sources (e.g., "Source A says... Source B says...").</li>
</ul>

<div class="key-term"><strong>Key Term — Synthesis:</strong> The skill of drawing together information, ideas, or perspectives from two or more sources into a unified response. It goes beyond summary (what each text says) to connection (how the texts relate to each other).</div>

<h3>Q2: Summary and Synthesis</h3>

<p>Q2 (8 marks) asks you to summarise and synthesise information from both sources on a specific topic. To score well:</p>
<ul>
  <li>Identify what each source says about the specified topic.</li>
  <li>Find similarities and differences between the sources.</li>
  <li>Write a response that moves between both sources, using comparative language.</li>
  <li>Use brief, relevant references (not lengthy quotations) from both texts.</li>
  <li>Keep your response concise — about 10 minutes' worth of writing.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> For Q2, inference is more valuable than retrieval. Instead of simply stating what the text says, explain what can be inferred from the information. "Source A implies that the narrator finds the city threatening" is stronger than "Source A says the streets were dark."</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about Source A in one paragraph and Source B in another with no connections between them. This is comparison, not synthesis. True synthesis requires the sources to be woven together — ideally with references to both sources appearing in each paragraph.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m17-q1',
          question: 'What is the key difference between comparison and synthesis?',
          options: [
            'There is no difference',
            'Comparison treats sources separately; synthesis weaves them together in the same points',
            'Comparison is for fiction; synthesis is for non-fiction',
            'Synthesis is longer than comparison'
          ],
          answer: 1,
          explanation: 'Comparison can treat sources separately (Source A says X, Source B says Y). Synthesis weaves sources together, drawing connections and contrasts within the same analytical points.'
        },
        {
          id: 'edexcel-et-m17-q2',
          question: 'How should you organise paragraphs in a synthesis response?',
          options: [
            'One paragraph per source',
            'By theme or topic, not by source',
            'Alphabetically by source title',
            'Chronologically by date of publication'
          ],
          answer: 1,
          explanation: 'Organise paragraphs by theme or topic rather than by source. This ensures you are drawing the sources together rather than treating them as separate entities.'
        },
        {
          id: 'edexcel-et-m17-q3',
          question: 'Which connective best demonstrates synthesis?',
          options: [
            '"Firstly"',
            '"In conclusion"',
            '"While Source A emphasises danger, Source B frames this same quality as excitement"',
            '"Also"'
          ],
          answer: 2,
          explanation: 'This connective draws both sources into the same analytical point, showing how they relate to each other rather than treating them separately.'
        },
        {
          id: 'edexcel-et-m17-q4',
          question: 'In Q2, what is more valuable than retrieval?',
          options: [
            'Memorisation',
            'Inference — explaining what can be deduced from the information',
            'Copying long quotations',
            'Personal opinions'
          ],
          answer: 1,
          explanation: 'Inference is more valuable than retrieval. Explaining what can be inferred from the text shows deeper understanding than simply restating what it says.'
        },
        {
          id: 'edexcel-et-m17-q5',
          question: 'How long should you spend on Q2 (8 marks)?',
          options: [
            '5 minutes',
            '10 minutes',
            '20 minutes',
            '30 minutes'
          ],
          answer: 1,
          explanation: 'Allocate approximately 10 minutes to Q2. It is worth 8 marks, so keep your response concise and focused rather than over-writing.'
        }
      ]
    },

    // ── MODULE 18: Paper 2 Q6 Extended Response ──
    {
      id: 'edexcel-et-mod-18',
      title: 'Paper 2 Q6 Extended Response',
      duration: '20 min',
      content: `
<h2>Paper 2 Question 6 — Evaluating a Statement</h2>

<p>Paper 2, Section A of Edexcel English Language tests your reading of two non-fiction texts from different time periods. Question 6 is the highest-tariff reading question, worth <strong>20 marks</strong>, and it asks you to evaluate a given statement by considering evidence from <strong>both texts</strong>. This question type is unique to Edexcel and demands a specific skill set: you must build a sustained, balanced argument that shows critical judgement rather than simply agreeing or disagreeing.</p>

<h3>Understanding the Question Format</h3>

<p>The question provides a statement — for example, "Both writers present strongly negative views about city life." You must evaluate how far you agree with this statement, using evidence from both Source A and Source B. The key word is <strong>evaluate</strong>: you are expected to weigh up the evidence, consider nuances, and reach a considered conclusion. A one-sided response that simply agrees and lists supporting quotations will not reach the top bands.</p>

<h3>Building a Sustained Argument</h3>

<p>Think of your response as a mini-essay with a clear line of reasoning. A strong approach is to use a <strong>yes, but</strong> structure:</p>
<ol>
  <li><strong>Paragraph 1:</strong> Agree with the statement using evidence from Source A. Analyse the writer's methods, not just what they say.</li>
  <li><strong>Paragraph 2:</strong> Agree with the statement using evidence from Source B. Draw a brief comparison.</li>
  <li><strong>Paragraph 3:</strong> Challenge or qualify the statement. Perhaps one writer is more nuanced, or the statement oversimplifies their position.</li>
  <li><strong>Paragraph 4:</strong> Reach a balanced conclusion that shows you have weighed the evidence critically.</li>
</ol>

<h3>What Examiners Reward</h3>

<p>The mark scheme distinguishes between students who simply find evidence and those who <strong>evaluate</strong> it. At bands 4 and 5, examiners look for:</p>
<ul>
  <li><strong>Critical evaluation</strong> — examining how writers use language and rhetoric to shape the reader's response.</li>
  <li><strong>Synthesis</strong> — drawing the two texts together rather than treating them entirely separately.</li>
  <li><strong>Developed analysis of methods</strong> — not just what the writers say but how they say it and why.</li>
  <li><strong>A clear evaluative stance</strong> — the examiner should be able to follow your argument from start to finish.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The word "evaluate" is your compass. Every paragraph should contain a judgement — not just "the writer says X" but "the writer suggests X, which partly supports the statement because... however, this is complicated by..."</div>

<h3>Avoiding the "Agree and List" Trap</h3>

<p>The most common mistake is to simply state "I agree with this statement" and then list quotations from each text. This is description, not evaluation. To evaluate, you need to interrogate the statement: Is it entirely accurate? Does it apply equally to both writers? Are there moments where a writer's view is more complex than the statement suggests? Examiners want to see you thinking critically, not just retrieving information.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating Q6 as a simple comprehension question. Students who write "Source A agrees because..." and "Source B agrees because..." without any critical qualification or challenge to the statement will score in the lower bands, regardless of how many quotations they include.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m18-q1',
          question: 'What does Edexcel Paper 2 Q6 require you to do with a given statement?',
          options: [
            'Simply agree with it and find supporting quotations',
            'Evaluate how far you agree, using evidence from both texts',
            'Rewrite the statement in your own words',
            'Compare the two texts without reference to the statement'
          ],
          answer: 1,
          explanation: 'Q6 asks you to evaluate the statement — weighing up evidence from both sources to reach a balanced, critical judgement rather than simply agreeing or disagreeing.'
        },
        {
          id: 'edexcel-et-m18-q2',
          question: 'Which response structure is recommended for Q6?',
          options: [
            'PEE chain repeated six times',
            'A "yes, but" structure that agrees then challenges the statement',
            'Write about Source A only, then Source B only, with no comparison',
            'Start with your conclusion, then work backwards'
          ],
          answer: 1,
          explanation: 'A "yes, but" structure allows you to agree with the statement using evidence, then challenge or qualify it, showing the balanced evaluation examiners reward.'
        },
        {
          id: 'edexcel-et-m18-q3',
          question: 'What is the "agree and list" trap?',
          options: [
            'Agreeing with your teacher\'s model answer',
            'Stating agreement and listing quotations without evaluating them',
            'Making a list of techniques before writing',
            'Agreeing with both sources equally'
          ],
          answer: 1,
          explanation: 'The "agree and list" trap is when students simply state they agree and list quotations without critically evaluating the statement or analysing methods — this is description, not evaluation.'
        },
        {
          id: 'edexcel-et-m18-q4',
          question: 'How much time should you allocate to Q6?',
          options: [
            '10 minutes',
            '15 minutes',
            '25 minutes',
            '40 minutes'
          ],
          answer: 2,
          explanation: 'Approximately 25 minutes is recommended for Q6, including 3–4 minutes of planning time to structure your argument before writing.'
        },
        {
          id: 'edexcel-et-m18-q5',
          question: 'What does "synthesis" mean in the context of Q6?',
          options: [
            'Writing a summary of each text',
            'Drawing the two texts together rather than treating them entirely separately',
            'Using synthetic phonics to decode difficult words',
            'Combining quotations from the same text'
          ],
          answer: 1,
          explanation: 'Synthesis means making connections between the two sources — comparing and contrasting their views and methods — rather than writing about each one in isolation.'
        }
      ]
    },

    // ── MODULE 19: Paper 1 Writing for Purpose ──
    {
      id: 'edexcel-et-mod-19',
      title: 'Paper 1 Writing for Purpose',
      duration: '20 min',
      content: `
<h2>Paper 1 Section B — Transactional Writing</h2>

<p>Edexcel Paper 1, Section B is the writing section, and it tests your ability to produce <strong>transactional writing</strong> — writing that has a clear purpose, audience, and format. Unlike AQA, which offers creative/descriptive writing in its Paper 1, Edexcel focuses on purposeful, real-world writing tasks such as letters, articles, speeches, reviews, and reports. This distinction is crucial: if you prepare only for creative writing, you will be caught off guard by Edexcel's expectations.</p>

<h3>Understanding Transactional Writing</h3>

<p>Transactional writing is writing that gets something done. It might persuade a local council to improve a park, inform readers of a newspaper about an issue, advise younger students about exam preparation, or argue a case for or against a proposal. Every task will specify <strong>three things</strong>: the purpose (persuade, argue, advise, inform, explain), the audience (headteacher, newspaper readers, fellow students, local MP), and the format (letter, article, speech, report, leaflet). You must address all three to access the higher marks.</p>

<h3>Audience Awareness</h3>

<p>This is where many students lose marks unnecessarily. If the task asks you to write a letter to your headteacher, your tone and register must reflect that relationship — respectful, measured, perhaps formally persuasive. If you are writing an article for a student magazine, you can be more conversational, use rhetorical questions, and employ a livelier tone. Examiners can tell immediately when a student has ignored the audience: the writing feels generic and lacks the specific register shifts that demonstrate real skill.</p>

<h3>Format Features</h3>

<p>Each format has conventions you should follow:</p>
<ul>
  <li><strong>Letter:</strong> Address at the top right, date, "Dear...", formal or semi-formal sign-off ("Yours sincerely" if named, "Yours faithfully" if not).</li>
  <li><strong>Article:</strong> Headline, optional subheading, byline, paragraphed body, engaging opening hook.</li>
  <li><strong>Speech:</strong> Direct address to the audience ("Ladies and gentlemen..."), rhetorical devices, clear signposting, memorable closing line.</li>
  <li><strong>Report:</strong> Title, introduction stating purpose, subheadings for sections, formal and impersonal tone, recommendations or conclusion.</li>
  <li><strong>Leaflet:</strong> Heading, subheadings, short paragraphs, direct address, possibly bullet points for key information.</li>
</ul>

<h3>Crafting Your Response</h3>

<p>Edexcel's mark scheme splits writing marks into <strong>Content and Organisation</strong> (24 marks) and <strong>Technical Accuracy</strong> (16 marks). For content and organisation, you need a clear structure, well-developed ideas, effective paragraphing, and a range of persuasive or rhetorical devices appropriate to the task. For technical accuracy, you need varied and secure sentence structures, a wide vocabulary used precisely, and accurate spelling and punctuation throughout.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Leave 5 minutes to proofread your writing section. Correcting even a few errors in spelling and punctuation can lift your technical accuracy by a full band — potentially gaining you 4–5 extra marks for minimal effort.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Ignoring the specified format. If the task asks for a speech, writing an essay without any speech conventions (direct address, audience awareness, rhetorical signposting) will cap your Content and Organisation mark significantly.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m19-q1',
          question: 'How does Edexcel Paper 1 Section B differ from AQA Paper 1 Section B?',
          options: [
            'Edexcel tests transactional writing; AQA tests creative/descriptive writing',
            'Edexcel gives you two writing tasks; AQA gives one',
            'Edexcel only tests letter writing',
            'There is no difference between the two boards'
          ],
          answer: 0,
          explanation: 'Edexcel Paper 1 Section B focuses on transactional writing (letters, articles, speeches, etc.) while AQA Paper 1 Section B focuses on creative or descriptive writing.'
        },
        {
          id: 'edexcel-et-m19-q2',
          question: 'Which three elements must you address in every transactional writing task?',
          options: [
            'Introduction, body, conclusion',
            'Purpose, audience, and format',
            'Language, structure, and form',
            'Spelling, punctuation, and grammar'
          ],
          answer: 1,
          explanation: 'Every transactional writing task specifies a purpose (e.g. persuade), an audience (e.g. headteacher), and a format (e.g. letter). You must address all three for higher marks.'
        },
        {
          id: 'edexcel-et-m19-q3',
          question: 'If writing a formal letter to a named recipient, how should you sign off?',
          options: [
            'Yours faithfully',
            'Yours sincerely',
            'Kind regards',
            'Best wishes'
          ],
          answer: 1,
          explanation: 'When you know the recipient\'s name (e.g. "Dear Mrs Patel"), sign off with "Yours sincerely." Use "Yours faithfully" when the recipient is unnamed ("Dear Sir or Madam").'
        },
        {
          id: 'edexcel-et-m19-q4',
          question: 'How are writing marks split in Edexcel Paper 1 Section B?',
          options: [
            '20 marks for content, 20 marks for accuracy',
            '24 marks for Content and Organisation, 16 marks for Technical Accuracy',
            '30 marks for language, 10 marks for structure',
            '15 marks for ideas, 15 marks for vocabulary, 10 marks for spelling'
          ],
          answer: 1,
          explanation: 'Edexcel splits writing marks into Content and Organisation (24 marks) and Technical Accuracy (16 marks), making both the quality of your ideas and your technical skill equally important.'
        },
        {
          id: 'edexcel-et-m19-q5',
          question: 'Why is proofreading worth the time investment?',
          options: [
            'It is an exam requirement',
            'Correcting a few errors can lift your technical accuracy by a full band — potentially 4–5 extra marks',
            'It makes your handwriting neater',
            'Examiners give bonus marks for proofreading'
          ],
          answer: 1,
          explanation: 'Five minutes of proofreading can catch errors in spelling and punctuation that would otherwise cost you marks. Fixing just a few errors can lift your Technical Accuracy band significantly.'
        }
      ]
    },

    // ── MODULE 20: Shakespeare Extract-Based Questions ──
    {
      id: 'edexcel-et-mod-20',
      title: 'Shakespeare Extract-Based Questions',
      duration: '25 min',
      content: `
<h2>Shakespeare Extract-Based Questions (1ET0)</h2>

<p>The Shakespeare component of Edexcel Literature (Paper 1, Section A) is worth <strong>40 marks</strong> and is <strong>open-book</strong> — you can take a clean, unannotated copy of your set text into the exam. The question provides an extract from your studied play and asks you to analyse it before discussing the wider play. This module teaches you how to approach Shakespeare extract questions strategically.</p>

<h3>The Question Structure</h3>

<p>A typical question might read: "Explore how Shakespeare presents [character/theme] in this extract and in the play as a whole." The two-part nature of the question is essential — you must:</p>
<ol>
  <li><strong>Analyse the extract closely</strong> — specific quotations, language analysis, dramatic techniques.</li>
  <li><strong>Discuss the wider play</strong> — how the theme or character is developed elsewhere, how the extract fits into the play's overall arc.</li>
</ol>

<div class="key-term"><strong>Key Term — Dramatic Techniques:</strong> Shakespeare-specific methods including soliloquy, aside, dramatic irony, stage directions, verse/prose shifts, and the use of imagery patterns. These are distinct from general "language techniques" and show the examiner you understand the text as a <em>play</em>, not just a piece of writing.</div>

<h3>Analysing the Extract</h3>

<p>Spend the first half of your essay on the extract. Focus on:</p>
<ul>
  <li><strong>Key quotations:</strong> Select 3–4 short quotations that reveal character, theme, or mood.</li>
  <li><strong>Word-level analysis:</strong> Zoom into specific words — connotations, imagery, sound patterns.</li>
  <li><strong>Dramatic context:</strong> Who is on stage? Who is the character speaking to? What has just happened?</li>
  <li><strong>Verse and prose:</strong> Is the character speaking in verse (iambic pentameter) or prose? Shifts between the two are significant — verse often signals nobility or heightened emotion, while prose can signal informality or madness.</li>
</ul>

<h3>Moving to the Wider Play</h3>

<p>In the second half, broaden your response:</p>
<ul>
  <li>Trace how the character or theme develops from the extract to other key moments.</li>
  <li>Discuss the significance of the extract's position within the play (early, middle, climax, resolution).</li>
  <li>Include relevant context — social, historical, or theatrical — woven naturally into your points.</li>
  <li>Reference at least 2–3 moments from outside the extract, with brief quotations where possible.</li>
</ul>

<h3>Using the Open Book Effectively</h3>

<p>The open-book advantage means examiners expect <strong>precise quotations</strong>. Before the exam, bookmark or tab 8–10 key passages in your text. In the exam, limit page-turning to 2–3 minutes. The best candidates know their text well enough to find quotations quickly — they use the book to confirm exact wording, not to search for ideas.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always refer to Shakespeare as a <em>playwright</em>, not an author or writer. Discuss what he "presents," "dramatises," or "stages" — language that shows you understand the text is a performance piece.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing only about the extract and ignoring the "wider play" instruction, or vice versa. Both parts carry marks. Aim for a roughly 50/50 split between extract analysis and wider play discussion.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m20-q1',
          question: 'What does the Edexcel Shakespeare question ask you to do?',
          options: [
            'Write about the extract only',
            'Analyse the extract and discuss the wider play',
            'Compare two Shakespeare plays',
            'Write a creative response inspired by the extract'
          ],
          answer: 1,
          explanation: 'The question asks you to analyse the given extract closely AND discuss how the theme or character is developed in the wider play. Both parts carry marks.'
        },
        {
          id: 'edexcel-et-m20-q2',
          question: 'Why is the shift between verse and prose significant in Shakespeare?',
          options: [
            'Verse is always better than prose',
            'Verse often signals nobility or heightened emotion; prose can signal informality or madness',
            'It shows Shakespeare was being lazy',
            'There is no significance — it is random'
          ],
          answer: 1,
          explanation: 'Shakespeare uses verse (iambic pentameter) for noble characters and heightened moments, and prose for informal, comedic, or psychologically disturbed moments. The shifts are deliberate and meaningful.'
        },
        {
          id: 'edexcel-et-m20-q3',
          question: 'How should you refer to Shakespeare in your essay?',
          options: [
            'As an author',
            'As a writer',
            'As a playwright',
            'As a poet'
          ],
          answer: 2,
          explanation: 'Refer to Shakespeare as a "playwright" and discuss what he "presents," "dramatises," or "stages." This shows you understand the text is a performance piece, not just a written work.'
        },
        {
          id: 'edexcel-et-m20-q4',
          question: 'How should you split your essay between extract and wider play?',
          options: [
            '80% extract, 20% wider play',
            '50% extract, 50% wider play',
            '20% extract, 80% wider play',
            '100% extract, no wider play needed'
          ],
          answer: 1,
          explanation: 'Aim for a roughly 50/50 split between extract analysis and wider play discussion. Both parts carry marks, so neglecting either will limit your score.'
        },
        {
          id: 'edexcel-et-m20-q5',
          question: 'How many key passages should you bookmark in your open-book text before the exam?',
          options: [
            '1–2',
            '8–10',
            '20–30',
            'Every page'
          ],
          answer: 1,
          explanation: 'Bookmark 8–10 key passages covering the main characters and themes. This allows you to find quotations quickly without wasting time flicking through the entire text.'
        }
      ]
    },

    // ── MODULE 21: Post-1914 Text Analysis ──
    {
      id: 'edexcel-et-mod-21',
      title: 'Post-1914 Text Analysis',
      duration: '20 min',
      content: `
<h2>Post-1914 Text Analysis (1ET0)</h2>

<p>The Post-1914 prose or drama component of Edexcel Literature is also <strong>open-book</strong> and appears on Paper 1, Section B. Like the Shakespeare question, it provides an extract and asks you to analyse it before discussing the wider text. However, the Post-1914 text brings different analytical challenges — modern language, diverse narrative techniques, and rich opportunities for contextual discussion.</p>

<h3>Common Set Texts</h3>

<p>Edexcel's Post-1914 set texts include novels and plays such as <em>An Inspector Calls</em>, <em>Animal Farm</em>, <em>Lord of the Flies</em>, <em>The Woman in Black</em>, and <em>Blood Brothers</em>. Regardless of your text, the exam skills remain the same: close analysis, awareness of the writer's methods, and meaningful contextual links.</p>

<h3>Approaching the Extract</h3>

<p>For Post-1914 texts, your extract analysis should consider:</p>
<ul>
  <li><strong>Narrative voice:</strong> Who tells the story? Is the narrator reliable? How does their perspective shape what we learn?</li>
  <li><strong>Characterisation:</strong> How does the writer reveal character through dialogue, action, description, or the responses of others?</li>
  <li><strong>Setting and atmosphere:</strong> How does the writer create mood through description of place, time, weather, or sensory detail?</li>
  <li><strong>Themes:</strong> What key ideas or messages emerge from the extract? How do they connect to the text's broader concerns?</li>
  <li><strong>Writer's choices:</strong> Why does the writer include this moment? What is its purpose in the overall narrative?</li>
</ul>

<div class="key-term"><strong>Key Term — Characterisation:</strong> The techniques a writer uses to develop and reveal a character. This includes dialogue, actions, thoughts, appearance, what others say about them, and how they change over time.</div>

<h3>Context for Post-1914 Texts</h3>

<p>Context is particularly important for Post-1914 texts because many were written in response to specific social, political, or cultural conditions:</p>
<ul>
  <li><strong><em>An Inspector Calls:</em></strong> Set in 1912, written in 1945 — Priestley's socialist critique of capitalism and social responsibility.</li>
  <li><strong><em>Animal Farm:</em></strong> Orwell's allegory of the Russian Revolution and totalitarianism.</li>
  <li><strong><em>Lord of the Flies:</em></strong> Golding's post-WWII exploration of human nature, savagery, and civilisation.</li>
  <li><strong><em>Blood Brothers:</em></strong> Russell's exploration of class division, nature vs. nurture, and Thatcherite Britain.</li>
</ul>

<p>Remember: context should be <strong>integrated into your analysis</strong>, not presented as a separate paragraph.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> For Post-1914 drama texts, remember to discuss them as plays. Comment on staging, audience reaction, dramatic tension, and theatrical effects — not just the words on the page.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about the characters as if they are real people. They are constructs of the writer. Use phrases like "Priestley presents the Inspector as..." or "Golding uses Jack to symbolise..." to show you understand the writer's craft.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m21-q1',
          question: 'Is the Post-1914 text component open-book?',
          options: [
            'No — you must memorise all quotations',
            'Yes — you can take a clean, unannotated copy into the exam',
            'Only for certain texts',
            'You receive the text on the day but have not seen it before'
          ],
          answer: 1,
          explanation: 'The Post-1914 component is open-book — you can take a clean, unannotated copy of your set text into the exam, just like the Shakespeare component.'
        },
        {
          id: 'edexcel-et-m21-q2',
          question: 'Why should you refer to characters as "constructs" rather than "real people"?',
          options: [
            'Because examiners dislike personal responses',
            'Because it shows you understand the writer has crafted them deliberately for a purpose',
            'Because the characters are always fictional',
            'Because it makes your essay sound more academic'
          ],
          answer: 1,
          explanation: 'Referring to characters as constructs shows you understand the writer\'s craft — that characters are deliberately created to convey themes and messages.'
        },
        {
          id: 'edexcel-et-m21-q3',
          question: 'How should context be used in a Post-1914 text essay?',
          options: [
            'In a separate paragraph at the start',
            'Not at all — only language analysis matters',
            'Integrated naturally into analytical points',
            'Only in the conclusion'
          ],
          answer: 2,
          explanation: 'Context should be woven into your analysis, deepening your points about character, theme, and method. A separate "context paragraph" reads like a history lesson rather than literary analysis.'
        },
        {
          id: 'edexcel-et-m21-q4',
          question: 'When analysing a drama text, what should you comment on beyond the words?',
          options: [
            'The playwright\'s biography',
            'Staging, audience reaction, dramatic tension, and theatrical effects',
            'The number of acts and scenes',
            'The reviews the play received'
          ],
          answer: 1,
          explanation: 'For drama texts, discuss staging, audience reaction, dramatic tension, and theatrical effects to show you understand the text as a performance piece.'
        },
        {
          id: 'edexcel-et-m21-q5',
          question: 'What makes An Inspector Calls particularly interesting for contextual analysis?',
          options: [
            'It was the longest play written in 1945',
            'It is set in 1912 but written in 1945, creating dramatic irony about social change',
            'It was Shakespeare\'s last play',
            'It has no historical context'
          ],
          answer: 1,
          explanation: 'An Inspector Calls was set in 1912 but written in 1945, allowing Priestley to use dramatic irony — the 1945 audience knew what the 1912 characters did not about world events to come.'
        }
      ]
    },

    // ── MODULE 22: 19th-Century Novel Techniques ──
    {
      id: 'edexcel-et-mod-22',
      title: '19th-Century Novel Techniques',
      duration: '20 min',
      content: `
<h2>19th-Century Novel Techniques</h2>

<p>The nineteenth-century novel component of Edexcel Literature (Paper 2, Section A) is a <strong>closed-book</strong> exam — you will not have the text in front of you. This means you must know your set text thoroughly, with key quotations memorised. The question provides an extract and asks you to analyse it, then discuss the wider novel. Set texts include <em>A Christmas Carol</em>, <em>Great Expectations</em>, <em>Jane Eyre</em>, <em>Frankenstein</em>, <em>Pride and Prejudice</em>, and <em>The Sign of Four</em>.</p>

<h3>Key Techniques in 19th-Century Novels</h3>

<p>Victorian novelists employed distinctive techniques that you should be able to identify and analyse:</p>
<ul>
  <li><strong>Omniscient narration:</strong> An all-knowing narrator who can access any character's thoughts and speak directly to the reader. Dickens uses this to create moral commentary.</li>
  <li><strong>Pathetic fallacy:</strong> Weather and landscape mirroring characters' emotions — storms during moments of crisis, sunshine during moments of joy.</li>
  <li><strong>Symbolism:</strong> Objects, settings, and characters carrying deeper meaning — Scrooge's cold, dark counting house symbolising his emotional coldness.</li>
  <li><strong>Social commentary:</strong> Many Victorian novels critiqued social issues — poverty, class, gender inequality, industrial exploitation. Writers used their characters and plots as vehicles for political messages.</li>
  <li><strong>Gothic elements:</strong> Isolated settings, supernatural events, extreme emotions, the uncanny — present in texts like <em>Frankenstein</em>, <em>Jane Eyre</em>, and <em>A Christmas Carol</em>.</li>
  <li><strong>Serialisation structure:</strong> Many Victorian novels were published in instalments, creating cliff-hangers at the end of each section to maintain reader interest.</li>
</ul>

<div class="key-term"><strong>Key Term — Social Commentary:</strong> The use of fiction to critique or comment on real-world social issues. Dickens's depiction of poverty in <em>A Christmas Carol</em>, for example, is not merely descriptive — it is a deliberate argument for social reform aimed at his affluent Victorian readers.</div>

<h3>Memorising Quotations for Closed-Book</h3>

<p>Since this component is closed-book, you need a bank of memorised quotations. Strategies include:</p>
<ul>
  <li><strong>Learn 2–3 quotations per character/theme:</strong> Quality over quantity. Ten well-chosen quotations are more useful than fifty vague ones.</li>
  <li><strong>Choose versatile quotations:</strong> Select quotes that can be applied to multiple themes or questions.</li>
  <li><strong>Learn short quotes:</strong> "Fire of my setting sun" is easier to remember and more analytically useful than a whole sentence.</li>
  <li><strong>Use flashcards, spaced repetition, and regular testing.</strong></li>
</ul>

<h3>Analysing Victorian Language</h3>

<p>Victorian prose can feel dense and unfamiliar. When analysing it:</p>
<ul>
  <li>Focus on key words and phrases rather than trying to paraphrase entire sentences.</li>
  <li>Look for patterns of imagery — writers often use sustained semantic fields.</li>
  <li>Note the narrative voice — is it sympathetic, ironic, moralistic, detached?</li>
  <li>Consider the sentence structure — long, complex sentences can build tension or create a breathless quality.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> In a closed-book exam, a slight misquotation is better than no quotation at all. If you remember the gist but not the exact words, use a close paraphrase and indicate it: "Scrooge is described as 'cold' and unyielding." Examiners will credit your knowledge even with minor inaccuracies.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a character study instead of answering the question. The question will focus on a theme, relationship, or technique — stay focused on what is being asked rather than writing everything you know about a character.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m22-q1',
          question: 'Is the 19th-Century Novel component open-book or closed-book?',
          options: [
            'Open-book — you can bring the text',
            'Closed-book — you must rely on memorised quotations',
            'It depends on the text you study',
            'You receive the full text in the exam booklet'
          ],
          answer: 1,
          explanation: 'The 19th-Century Novel component is closed-book — you cannot bring the text into the exam and must rely on memorised quotations.'
        },
        {
          id: 'edexcel-et-m22-q2',
          question: 'How many quotations per character/theme should you aim to memorise?',
          options: [
            '1',
            '2–3',
            '10–15',
            'As many as possible'
          ],
          answer: 1,
          explanation: 'Aim for 2–3 high-quality, versatile quotations per character or theme. Quality and applicability are more important than quantity.'
        },
        {
          id: 'edexcel-et-m22-q3',
          question: 'What is "social commentary" in 19th-century novels?',
          options: [
            'Characters having conversations about society',
            'The use of fiction to critique or comment on real-world social issues',
            'Newspaper reviews of the novel',
            'The writer\'s personal diary entries'
          ],
          answer: 1,
          explanation: 'Social commentary uses fiction as a vehicle for critiquing real-world issues — poverty, class, gender inequality — aimed at influencing the reader\'s views and attitudes.'
        },
        {
          id: 'edexcel-et-m22-q4',
          question: 'Why were many Victorian novels published in serialised instalments?',
          options: [
            'Paper was expensive',
            'It created cliff-hangers and maintained reader interest between instalments',
            'Authors could not write quickly enough for full publication',
            'It was a legal requirement'
          ],
          answer: 1,
          explanation: 'Serialisation created cliff-hangers at the end of each instalment, building suspense and maintaining reader interest over weeks or months. This structural feature affected how writers paced their plots.'
        },
        {
          id: 'edexcel-et-m22-q5',
          question: 'What should you do if you cannot remember an exact quotation in a closed-book exam?',
          options: [
            'Leave a blank space',
            'Invent a quotation',
            'Use a close paraphrase — a slight misquotation is better than nothing',
            'Only write about themes without any textual evidence'
          ],
          answer: 2,
          explanation: 'A close paraphrase or slight misquotation is better than no quotation at all. Examiners will credit your knowledge even with minor inaccuracies.'
        }
      ]
    },

    // ── MODULE 23: Poetry Anthology Comparison Method ──
    {
      id: 'edexcel-et-mod-23',
      title: 'Poetry Anthology Comparison Method',
      duration: '20 min',
      content: `
<h2>Poetry Anthology Comparison Method</h2>

<p>The poetry anthology component of Edexcel Literature (Paper 2, Section B) requires you to compare <strong>two poems</strong> from your studied anthology cluster. One poem is named in the question; you choose the second poem to compare it with. This is a closed-book exam — you will not have the poems in front of you. The question is worth <strong>20 marks</strong> and tests your ability to compare themes, methods, and effects across two poems.</p>

<h3>Choosing Your Comparison Poem</h3>

<p>Choosing wisely is half the battle. Before the exam, prepare <strong>comparison pairs</strong> — poems that share themes but use different methods, or poems that take contrasting stances on the same topic. For each poem in the anthology, know which 2–3 other poems it pairs well with and why.</p>

<h3>The Comparative Essay Structure</h3>

<p>Do not write about Poem A then Poem B. Use a comparative structure throughout:</p>
<ol>
  <li><strong>Introduction:</strong> Name both poems and state the key similarity or difference in how they approach the theme.</li>
  <li><strong>Paragraph 1:</strong> Compare a specific aspect — theme, tone, or attitude — across both poems, with quotations from each.</li>
  <li><strong>Paragraph 2:</strong> Compare methods — imagery, form, structure, language techniques — across both poems.</li>
  <li><strong>Paragraph 3:</strong> Compare a more nuanced aspect — how meaning develops, use of voice, or the effect on the reader.</li>
  <li><strong>Conclusion:</strong> Summarise the key comparison and offer a final insight about which poem is more effective or why they differ.</li>
</ol>

<div class="key-term"><strong>Key Term — Comparative Connectives:</strong> Language that links two poems in the same point: "Similarly," "In contrast," "While [Poem A]..., [Poem B]...," "Both poets...," "However," "Unlike [Poem A], [Poem B]..." Using these shows the examiner you are genuinely comparing, not just writing about two poems separately.</div>

<h3>What to Compare</h3>
<ul>
  <li><strong>Theme and subject matter:</strong> Do they address the same topic? From the same angle?</li>
  <li><strong>Tone and mood:</strong> Is one angry while the other is reflective? One hopeful, the other despairing?</li>
  <li><strong>Form and structure:</strong> Regular vs. free verse, sonnet vs. dramatic monologue, use of stanza breaks, rhyme scheme.</li>
  <li><strong>Imagery and language:</strong> What types of imagery dominate each poem? Any shared semantic fields?</li>
  <li><strong>The poet's message:</strong> What is each poet trying to convey, and how effectively do they convey it?</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The mark scheme rewards responses that give <strong>equal weight to both poems</strong>. A common error is writing extensively about the named poem and only briefly mentioning the chosen poem. Both should receive detailed analysis.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Choosing a comparison poem that is too similar to the named poem. If both poems say the same thing in the same way, there is nothing interesting to compare. The best comparisons find poems with shared themes but contrasting methods or attitudes.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m23-q1',
          question: 'In the poetry anthology question, how many poems do you write about?',
          options: [
            'One — the named poem only',
            'Two — the named poem and one you choose',
            'Three — the named poem and two comparisons',
            'All poems in the cluster'
          ],
          answer: 1,
          explanation: 'You write about two poems: the one named in the question and one you choose from the same anthology cluster to compare it with.'
        },
        {
          id: 'edexcel-et-m23-q2',
          question: 'What is the best structure for a poetry comparison essay?',
          options: [
            'Write about Poem A completely, then Poem B completely',
            'A comparative structure that discusses both poems together throughout',
            'Write about themes only, ignoring language',
            'Focus entirely on the named poem with brief references to the second'
          ],
          answer: 1,
          explanation: 'Use a comparative structure throughout, discussing both poems together in each paragraph rather than treating them separately.'
        },
        {
          id: 'edexcel-et-m23-q3',
          question: 'How should you prepare comparison pairs before the exam?',
          options: [
            'Randomly select poems on the day',
            'For each poem, know 2–3 poems it pairs well with and why',
            'Only prepare one pair for the whole anthology',
            'Choose poems that are as similar as possible'
          ],
          answer: 1,
          explanation: 'Prepare comparison pairs in advance — for each poem, know 2–3 other poems it pairs well with, focusing on shared themes with different methods or contrasting stances.'
        },
        {
          id: 'edexcel-et-m23-q4',
          question: 'Why is choosing a poem that is too similar a mistake?',
          options: [
            'Because the examiner will think you only know two poems',
            'Because there is nothing interesting to compare if both poems say the same thing the same way',
            'Because similar poems are worth fewer marks',
            'Because you can only compare contrasting poems'
          ],
          answer: 1,
          explanation: 'If both poems say the same thing in the same way, your comparison will be shallow. The best comparisons find shared themes with contrasting methods or attitudes.'
        },
        {
          id: 'edexcel-et-m23-q5',
          question: 'How should you distribute your analysis between the two poems?',
          options: [
            '80% named poem, 20% chosen poem',
            'Equal weight to both poems',
            'Focus on whichever poem you know better',
            '20% named poem, 80% chosen poem'
          ],
          answer: 1,
          explanation: 'The mark scheme rewards responses that give equal weight to both poems. Writing extensively about one while barely mentioning the other will limit your marks.'
        }
      ]
    },

    // ── MODULE 24: Unseen Poetry Approach ──
    {
      id: 'edexcel-et-mod-24',
      title: 'Unseen Poetry Approach',
      duration: '20 min',
      content: `
<h2>Unseen Poetry — A Systematic Approach</h2>

<p>The unseen poetry question on Edexcel Literature Paper 2 can feel daunting because you have no prior knowledge of the poem to rely on. You cannot revise specific content — you must rely on your <strong>analytical skills</strong>. The good news is that a systematic approach will carry you through any poem the examiners choose. This module introduces the <strong>SMILE method</strong> — a framework designed to ensure you cover all the key areas examiners look for, without missing obvious features or wasting time on irrelevant details.</p>

<h3>The SMILE Method</h3>

<p>SMILE stands for:</p>
<ul>
  <li><strong>S — Structure:</strong> How is the poem organised? Consider stanza length, line length, enjambment, caesura, rhyme scheme (or lack of one), and the overall shape of the poem on the page. Does the structure change at any point — a volta or turning point?</li>
  <li><strong>M — Meaning:</strong> What is the poem about on the surface level, and what deeper meanings lie beneath? Identify the subject, the speaker's attitude or tone, and any shifts in meaning throughout the poem.</li>
  <li><strong>I — Imagery:</strong> What pictures does the poet create? Look for similes, metaphors, personification, sensory imagery (sight, sound, touch, taste, smell), and symbolism. Analyse what these images suggest and why the poet chose them.</li>
  <li><strong>L — Language:</strong> Examine specific word choices. Consider connotations, semantic fields, the register (formal, colloquial, archaic), repetition, alliteration, assonance, and any unusual or striking vocabulary.</li>
  <li><strong>E — Effect:</strong> What is the emotional impact on the reader? How does the poem make you feel, and how do the poet's choices create that feeling? This is the most important element — every point you make should connect back to effect.</li>
</ul>

<div class="key-term"><strong>Key Term — Volta:</strong> A turning point in a poem where the tone, mood, argument, or perspective shifts. In a sonnet, the volta typically occurs at line 9 (Petrarchan) or before the final couplet (Shakespearean). Identifying a volta shows sophisticated structural understanding.</div>

<h3>Reading the Poem</h3>

<p>Read the poem at least <strong>three times</strong> before writing:</p>
<ol>
  <li><strong>First reading:</strong> Get a general sense of what the poem is about. Do not worry about techniques yet.</li>
  <li><strong>Second reading:</strong> Annotate. Circle striking words, underline imagery, mark structural features, note your emotional responses in the margin.</li>
  <li><strong>Third reading:</strong> Look for patterns and connections. How do the language choices connect to the structure? How does the tone shift? What is the overall message or theme?</li>
</ol>

<h3>Comparative Unseen Poetry</h3>

<p>Edexcel may also ask you to compare two unseen poems. If so, do not write about Poem A and then Poem B separately. Instead, use a <strong>comparative framework</strong>: identify similarities and differences in theme, tone, imagery, or structure, and write paragraphs that discuss both poems together.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Do not ignore the title. Poets choose their titles deliberately, and the title often provides crucial context for understanding the poem's meaning and purpose. Start your analysis by considering what the title suggests.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Paraphrasing the poem line by line. This is retelling, not analysis. Instead, select the most significant features and analyse them in depth. Three well-developed analytical points will outscore ten surface-level observations.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m24-q1',
          question: 'What does SMILE stand for in unseen poetry analysis?',
          options: [
            'Subject, Mood, Ideas, Language, Evidence',
            'Structure, Meaning, Imagery, Language, Effect',
            'Simile, Metaphor, Irony, Listing, Emotive language',
            'Setting, Message, Intention, Layout, Emotion'
          ],
          answer: 1,
          explanation: 'SMILE stands for Structure, Meaning, Imagery, Language, and Effect — a framework that ensures you cover the key areas examiners reward in poetry analysis.'
        },
        {
          id: 'edexcel-et-m24-q2',
          question: 'How many times should you read an unseen poem before writing?',
          options: [
            'Once — you do not have time for more',
            'Twice — once for meaning, once for techniques',
            'At least three times — for meaning, annotation, and patterns',
            'Four times — one for each SMILE element'
          ],
          answer: 2,
          explanation: 'Read at least three times: first for general understanding, second to annotate techniques and responses, third to identify patterns and connections across the poem.'
        },
        {
          id: 'edexcel-et-m24-q3',
          question: 'When comparing two unseen poems, what approach should you take?',
          options: [
            'Write about Poem A completely, then write about Poem B',
            'Only write about the poem you understand best',
            'Use a comparative framework, discussing both poems together in each paragraph',
            'Focus entirely on the differences, ignoring similarities'
          ],
          answer: 2,
          explanation: 'Use a comparative framework that discusses both poems together, identifying similarities and differences in theme, tone, imagery, or structure within each paragraph.'
        },
        {
          id: 'edexcel-et-m24-q4',
          question: 'What is a volta?',
          options: [
            'The final line of a poem',
            'A turning point where the tone, mood, or perspective shifts',
            'A type of rhyme scheme',
            'The opening stanza of a sonnet'
          ],
          answer: 1,
          explanation: 'A volta is a turning point in a poem where the tone, mood, argument, or perspective shifts. Identifying a volta demonstrates sophisticated structural understanding.'
        },
        {
          id: 'edexcel-et-m24-q5',
          question: 'Should you cover every element of SMILE in equal depth?',
          options: [
            'Yes — the examiner expects equal coverage of all five elements',
            'No — focus on the features most prominent and interesting in the specific poem',
            'Only cover Structure and Language, as they carry the most marks',
            'Only cover Imagery and Effect'
          ],
          answer: 1,
          explanation: 'Focus on the features most prominent in the specific poem. Examiners reward students who respond to the individual poem rather than applying a rigid formula mechanically.'
        }
      ]
    },

    // ── MODULE 25: How to Embed Quotations Effectively ──
    {
      id: 'edexcel-et-mod-25',
      title: 'How to Embed Quotations Effectively',
      duration: '20 min',
      content: `
<h2>How to Embed Quotations Effectively</h2>

<p>The way you use quotations is one of the clearest indicators of your analytical skill. Examiners can instantly distinguish between a student who drops in long, unintegrated quotations and one who embeds short, precise references seamlessly into their analysis. This module teaches you the embedding techniques that Edexcel examiners reward at the highest bands — across both Language and Literature papers.</p>

<h3>Why Embedding Matters</h3>

<p>An embedded quotation flows naturally within your sentence. Compare:</p>
<p><strong>Weak:</strong> Dickens describes Scrooge. "Oh! But he was a tight-fisted hand at the grindstone." This shows he is mean.</p>
<p><strong>Strong:</strong> Dickens's description of Scrooge as a "tight-fisted hand at the grindstone" reduces him to a single, grasping action, dehumanising him through the metonymic focus on his hand rather than his whole being.</p>

<p>The embedded version is smoother, more analytical, and allows the quotation to serve the point rather than interrupting it.</p>

<h3>Techniques for Embedding</h3>
<ul>
  <li><strong>Weave short phrases into your sentence:</strong> Use 2–5 word quotations that slot naturally into your grammatical structure.</li>
  <li><strong>Use a colon to introduce a quotation after a complete clause:</strong> "Dickens reveals Scrooge's isolation through imagery of cold: 'no warmth could warm' him."</li>
  <li><strong>Integrate single words:</strong> "The 'solitary' nature of Scrooge is emphasised through his isolation from family and community."</li>
  <li><strong>Modify the quotation with square brackets if needed:</strong> "Scrooge '[carries] his own low temperature always about with him' — the verb 'carries' suggesting his coldness is a burden he imposes on others."</li>
</ul>

<div class="key-term"><strong>Key Term — Judicious Quotation:</strong> The mark scheme term for selecting quotations that are precisely relevant, appropriately brief, and smoothly integrated into your analysis. "Judicious" means showing good judgement in your selection — not quoting for the sake of it.</div>

<h3>How Much to Quote</h3>

<p>As a rule of thumb:</p>
<ul>
  <li><strong>Language analysis:</strong> Quote 1–5 words. You are zooming into specific word choices, so keep quotations tight.</li>
  <li><strong>Literature essays:</strong> Quote 3–10 words. Enough to capture the writer's voice but not so much that you are copying the text instead of analysing it.</li>
  <li><strong>Never quote more than one full sentence.</strong> If your quotation is longer than your analysis, the balance is wrong.</li>
</ul>

<h3>Analysing Within the Quotation</h3>

<p>After embedding a quotation, zoom into specific words within it. Do not move on to your next point immediately. For example:</p>
<p>"The description of the city as 'suffocating' suggests a sense of entrapment, with the verb's connotations of airlessness and death implying the city is not merely uncomfortable but actively life-threatening."</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> In closed-book exams, if you cannot remember the exact quotation, paraphrase closely and use a partial quote: "Scrooge is described as having a 'cold' demeanour..." A near-quotation is always better than no quotation.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Quoting long passages and then summarising what they say instead of analysing how they work. If your quotation is three lines long and your analysis says "This shows the character is sad," you have wasted time copying and missed the opportunity to analyse specific word choices.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m25-q1',
          question: 'What makes an embedded quotation effective?',
          options: [
            'It is as long as possible to show knowledge',
            'It flows naturally within your sentence and serves your analytical point',
            'It appears at the end of every paragraph',
            'It is always from the beginning of the text'
          ],
          answer: 1,
          explanation: 'An effective embedded quotation flows naturally within your sentence, supporting and serving your analytical point rather than interrupting it.'
        },
        {
          id: 'edexcel-et-m25-q2',
          question: 'How long should quotations be for language analysis?',
          options: [
            'Full sentences',
            '1–5 words',
            'Entire paragraphs',
            'At least 10 words'
          ],
          answer: 1,
          explanation: 'For language analysis, quote 1–5 words. You are zooming into specific word choices, so tight, focused quotations allow you to analyse at the word level.'
        },
        {
          id: 'edexcel-et-m25-q3',
          question: 'What does "judicious quotation" mean in the mark scheme?',
          options: [
            'Quoting as much as possible',
            'Selecting quotations that are precisely relevant, brief, and smoothly integrated',
            'Only quoting dialogue',
            'Using quotations from secondary sources'
          ],
          answer: 1,
          explanation: '"Judicious" means showing good judgement — selecting quotations that are precisely relevant, appropriately brief, and smoothly integrated into your analysis.'
        },
        {
          id: 'edexcel-et-m25-q4',
          question: 'What should you do after embedding a quotation?',
          options: [
            'Move on to your next point immediately',
            'Zoom into specific words within the quotation and analyse their connotations',
            'Repeat the quotation for emphasis',
            'Explain what the whole passage means'
          ],
          answer: 1,
          explanation: 'After embedding, zoom into specific words within the quotation — analyse their connotations, effects, and contribution to the writer\'s overall purpose.'
        },
        {
          id: 'edexcel-et-m25-q5',
          question: 'What is wrong with quoting a three-line passage and then writing "This shows the character is sad"?',
          options: [
            'Three-line quotations are against exam rules',
            'The quotation is too long and the analysis is too shallow — you should quote less and analyse more',
            'You should never discuss character emotions',
            'The analysis should come before the quotation'
          ],
          answer: 1,
          explanation: 'Long quotations with brief, shallow analysis waste time on copying and miss the opportunity to analyse specific word choices in depth. Quote less, analyse more.'
        }
      ]
    },

    // ── MODULE 26: Literature Essay Structure ──
    {
      id: 'edexcel-et-mod-26',
      title: 'Literature Essay Structure',
      duration: '20 min',
      content: `
<h2>Literature Essay Structure — Edexcel's Open-Book Approach</h2>

<p>One of the most significant differences between Edexcel and other exam boards is that Edexcel Literature exams are <strong>open-book</strong> for the Shakespeare and Post-1914 prose/drama components. This means you can take clean, unannotated copies of your set texts into the exam. While this might sound like an enormous advantage, many students waste this opportunity by spending too long flicking through pages rather than writing. The key to success is understanding how to use the open-book format strategically without letting it become a time trap.</p>

<h3>Using the Extract Effectively</h3>

<p>For extract-based questions, Edexcel provides a passage from your set text and asks you to analyse it before moving to discuss the wider text. The extract is your launchpad: begin your essay by engaging closely with the given passage, analysing specific language and structural choices within it. Then broaden your response to consider how the themes, characters, or ideas in the extract connect to the rest of the text. A common structure is:</p>
<ol>
  <li><strong>Introduction:</strong> Brief response to the question, establishing your argument or thesis.</li>
  <li><strong>Paragraph 1–2:</strong> Close analysis of the extract — specific quotations, language analysis, structural observations.</li>
  <li><strong>Paragraph 3–4:</strong> Move beyond the extract to the wider text — connect themes, trace character development, discuss context.</li>
  <li><strong>Conclusion:</strong> Draw your argument together, returning to the question with a clear final judgement.</li>
</ol>

<h3>The Open-Book Advantage</h3>

<p>Because you have the text in front of you, examiners expect <strong>precise, well-chosen quotations</strong> rather than vaguely remembered ones. Use this to your advantage: before the exam, tab or bookmark key pages so you can find important passages quickly. In the exam itself, limit your page-turning to a maximum of <strong>2–3 minutes per essay</strong>. Any longer and you are eating into valuable writing time. The best candidates go in with a mental map of the text — they know roughly which chapters or scenes contain the key moments — and use the book to confirm exact wording rather than to discover it for the first time.</p>

<h3>Structuring a Top-Band Response</h3>

<p>Edexcel's Literature mark scheme rewards essays that demonstrate:</p>
<ul>
  <li><strong>A critical, personal response</strong> — your own interpretation, not a rehearsed essay learned by heart.</li>
  <li><strong>Analysis of the writer's methods</strong> — how language, form, and structure create meaning.</li>
  <li><strong>Relevant context</strong> — social, historical, or literary context integrated naturally into your argument, not bolted on as a separate paragraph.</li>
  <li><strong>A coherent, well-structured argument</strong> — each paragraph building on the last, with clear topic sentences and logical progression.</li>
</ul>

<h3>Context: Integrated, Not Bolted On</h3>

<p>A very common mistake in Literature essays is to write a separate "context paragraph" that reads like a history lesson. Edexcel examiners want context woven into your analysis. For example, rather than writing "In the Victorian era, women had few rights," you should write something like: "Dickens's portrayal of Miss Havisham as trapped within Satis House reflects the limited agency afforded to women in Victorian society, and his use of decaying imagery suggests that such confinement is ultimately destructive." Here, the context deepens the analysis rather than sitting awkwardly beside it.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> A strong thesis in your introduction sets the direction for the whole essay. Rather than "In this essay I will discuss...", try: "Shakespeare presents Macbeth's ambition as a destructive force that corrupts not only the individual but the entire social order."</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a separate "context paragraph" that reads like a history lesson. Context should be woven into your analytical points, deepening your discussion of language, character, and theme.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m26-q1',
          question: 'What does "open-book" mean for Edexcel Literature exams?',
          options: [
            'You can annotate your texts with notes and essays',
            'You can take clean, unannotated copies of set texts into the exam',
            'The exam questions are released in advance',
            'You can use any edition of the text you like'
          ],
          answer: 1,
          explanation: 'Edexcel allows clean, unannotated copies of set texts for Shakespeare and Post-1914 components. You cannot write notes or annotations in them.'
        },
        {
          id: 'edexcel-et-m26-q2',
          question: 'How should you handle context in an Edexcel Literature essay?',
          options: [
            'Write a dedicated context paragraph at the start of your essay',
            'Avoid mentioning context entirely',
            'Integrate context naturally into your analytical points',
            'Only mention context in your conclusion'
          ],
          answer: 2,
          explanation: 'Examiners want context woven into your analysis — deepening your points about language, character, and theme — rather than presented as a separate, disconnected paragraph.'
        },
        {
          id: 'edexcel-et-m26-q3',
          question: 'How much time should you spend looking through the text during the exam?',
          options: [
            'As long as needed to find the perfect quotation',
            'No more than 2–3 minutes per essay',
            'At least 10 minutes to read the whole text',
            'You should not open the text at all during the exam'
          ],
          answer: 1,
          explanation: 'Limit page-turning to 2–3 minutes per essay. Go in with a mental map of the text and use the book to confirm exact wording, not to discover content for the first time.'
        },
        {
          id: 'edexcel-et-m26-q4',
          question: 'What is the recommended structure for an extract-based Literature essay?',
          options: [
            'Write only about the extract, ignoring the wider text',
            'Start with close analysis of the extract, then broaden to the wider text',
            'Ignore the extract and write about the whole text',
            'Alternate between extract and wider text in every sentence'
          ],
          answer: 1,
          explanation: 'Start by engaging closely with the given extract (analysing specific language and structure), then broaden to discuss how the themes and ideas connect to the wider text.'
        },
        {
          id: 'edexcel-et-m26-q5',
          question: 'How long should you spend on a 40-mark Literature essay?',
          options: [
            '20 minutes',
            '30 minutes',
            '45 minutes',
            '60 minutes'
          ],
          answer: 2,
          explanation: 'Allocate roughly 45 minutes for a 40-mark essay: 5 minutes planning, 35 minutes writing, and 5 minutes reviewing your response.'
        }
      ]
    },

    // ── MODULE 27: Time Management for Edexcel Papers ──
    {
      id: 'edexcel-et-mod-27',
      title: 'Time Management for Edexcel Papers',
      duration: '20 min',
      content: `
<h2>Time Management — Minute-by-Minute for Edexcel Papers</h2>

<p>Time management is one of the most common reasons students underperform in exams, and it is especially critical for Edexcel papers because <strong>the timings differ significantly from AQA</strong>. If you have practised with AQA past papers, you may find that your internal clock is calibrated wrongly. Edexcel papers have different mark distributions, different question structures, and therefore require a different allocation of time. This module gives you a minute-by-minute breakdown so you walk into the exam with a clear plan.</p>

<h3>Edexcel English Language Paper 1 (1 hour 45 minutes)</h3>

<p>Paper 1 has two sections: Section A (Reading) and Section B (Writing). The reading section is based on a nineteenth-century fiction extract, and the writing section is a transactional writing task.</p>

<table>
  <tr><th>Question</th><th>Marks</th><th>Suggested Time</th></tr>
  <tr><td>Reading the extract</td><td>—</td><td>10 minutes</td></tr>
  <tr><td>Q1 (short response)</td><td>4 marks</td><td>5 minutes</td></tr>
  <tr><td>Q2 (language/structure)</td><td>8 marks</td><td>10 minutes</td></tr>
  <tr><td>Q3 (language analysis)</td><td>15 marks</td><td>20 minutes</td></tr>
  <tr><td>Q4 (evaluation)</td><td>15 marks</td><td>20 minutes</td></tr>
  <tr><td>Q5 (transactional writing)</td><td>40 marks</td><td>40 minutes (including 5 min planning, 5 min proofreading)</td></tr>
</table>

<h3>Edexcel English Language Paper 2 (2 hours 5 minutes)</h3>

<p>Paper 2 is longer than Paper 1 and tests both reading (two non-fiction texts) and writing. The extra time reflects the additional reading material and the higher-tariff questions.</p>

<table>
  <tr><th>Question</th><th>Marks</th><th>Suggested Time</th></tr>
  <tr><td>Reading both sources</td><td>—</td><td>15 minutes</td></tr>
  <tr><td>Q1 (true/false statements)</td><td>4 marks</td><td>5 minutes</td></tr>
  <tr><td>Q2 (summary/synthesis)</td><td>8 marks</td><td>10 minutes</td></tr>
  <tr><td>Q3 (language analysis)</td><td>12 marks</td><td>15 minutes</td></tr>
  <tr><td>Q4 (comparison)</td><td>16 marks</td><td>20 minutes</td></tr>
  <tr><td>Q5 (viewpoint writing)</td><td>40 marks</td><td>40 minutes</td></tr>
  <tr><td>Buffer/proofread</td><td>—</td><td>5 minutes</td></tr>
</table>

<h3>Edexcel Literature Timings</h3>

<p>Literature papers require careful time management too:</p>
<ul>
  <li><strong>Paper 1 (1 hour 45 minutes):</strong> Shakespeare (40 marks, ~50 min) + Post-1914 text (40 marks, ~50 min) + 5 min buffer.</li>
  <li><strong>Paper 2 (2 hours 15 minutes):</strong> 19th-Century Novel (40 marks, ~50 min) + Poetry Anthology (20 marks, ~35 min) + Unseen Poetry (20 marks, ~30 min) + 10 min buffer.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The "marks equal minutes" rule is a rough guide: spend approximately one minute per mark, plus reading time. Write your target finish times at the top of every exam paper.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending too long on early, lower-mark questions and then rushing the writing section. The writing section carries the most marks — protect your writing time above all else.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m27-q1',
          question: 'How long is Edexcel English Language Paper 2?',
          options: [
            '1 hour 30 minutes',
            '1 hour 45 minutes',
            '2 hours 5 minutes',
            '2 hours 30 minutes'
          ],
          answer: 2,
          explanation: 'Edexcel English Language Paper 2 is 2 hours 5 minutes — notably longer than AQA\'s 1 hour 45 minutes, reflecting the additional reading material and higher-tariff questions.'
        },
        {
          id: 'edexcel-et-m27-q2',
          question: 'How much time should you allocate to the transactional writing question on Paper 1?',
          options: [
            '20 minutes',
            '30 minutes',
            '40 minutes',
            '50 minutes'
          ],
          answer: 2,
          explanation: 'Allocate approximately 40 minutes to the transactional writing task (Q5), including 5 minutes for planning and 5 minutes for proofreading. It is worth 40 marks — the most on the paper.'
        },
        {
          id: 'edexcel-et-m27-q3',
          question: 'What is the "marks equal minutes" rule?',
          options: [
            'You should write one word per mark available',
            'Spend approximately one minute per mark, plus reading time',
            'Each mark requires exactly 60 seconds of writing',
            'The number of marks tells you how many paragraphs to write'
          ],
          answer: 1,
          explanation: 'The "marks equal minutes" rule is a rough guide: spend approximately one minute per mark available, plus any additional reading time needed. It helps you allocate time proportionally.'
        },
        {
          id: 'edexcel-et-m27-q4',
          question: 'What should you do if you run out of time on a writing question?',
          options: [
            'Leave it blank and focus on checking earlier answers',
            'Write "I ran out of time" and ask for extra marks',
            'Skip to your conclusion so you have a complete piece, then fill in the middle if time allows',
            'Copy out the question to show you understood it'
          ],
          answer: 2,
          explanation: 'Skip straight to your conclusion to create a finished piece, then go back and fill in the middle if time allows. A complete but shorter response always outscores an unfinished one.'
        },
        {
          id: 'edexcel-et-m27-q5',
          question: 'How long should you allocate to each Literature Paper 1 essay?',
          options: [
            '30 minutes',
            '45–50 minutes',
            '60 minutes',
            '75 minutes'
          ],
          answer: 1,
          explanation: 'Each Literature Paper 1 essay (Shakespeare and Post-1914) should take approximately 45–50 minutes out of the 1 hour 45 minute paper, leaving a small buffer.'
        }
      ]
    },

    // ── MODULE 28: Exam Day Strategy ──
    {
      id: 'edexcel-et-mod-28',
      title: 'Exam Day Strategy',
      duration: '15 min',
      content: `
<h2>Exam Day Strategy</h2>

<p>Everything you have revised comes down to a few hours in the exam hall. This module covers the practical strategies that ensure you perform at your best on the day — from the night before to the final minute of the exam. These are not revision tips; they are <strong>performance strategies</strong> that turn knowledge into marks.</p>

<h3>The Night Before</h3>
<ul>
  <li><strong>Do not cram.</strong> If you do not know it by the night before, last-minute memorisation will not help and will increase anxiety.</li>
  <li><strong>Prepare your equipment:</strong> Black pens (at least two), a spare, a watch (not a smart watch), your open-book texts (if applicable), and water.</li>
  <li><strong>Review your timing plan:</strong> Refresh yourself on how long each question should take. This is more useful than last-minute revision.</li>
  <li><strong>Sleep.</strong> Seven to eight hours of sleep improves memory, concentration, and decision-making more than any revision session.</li>
</ul>

<h3>The First Five Minutes</h3>
<ul>
  <li><strong>Read the instructions</strong> — check the paper is what you expected.</li>
  <li><strong>Write your timing targets</strong> at the top of the paper (e.g., "Q1 by 9:15, Q2 by 9:25...").</li>
  <li><strong>Read through all the questions</strong> before starting — this lets your subconscious start processing later questions while you answer earlier ones.</li>
  <li><strong>For reading papers:</strong> Begin by reading the source material carefully, not the questions.</li>
</ul>

<h3>During the Exam</h3>
<ul>
  <li><strong>Answer every question.</strong> A blank response scores zero; even a partial answer can score marks.</li>
  <li><strong>If you get stuck, move on.</strong> Return to the difficult question later — you may find that other questions unlock your thinking.</li>
  <li><strong>Watch your handwriting.</strong> Examiners cannot award marks for writing they cannot read. If your handwriting deteriorates under pressure, slow down slightly.</li>
  <li><strong>Check the clock every 15–20 minutes</strong> — not obsessively, but regularly enough to stay on track.</li>
</ul>

<div class="key-term"><strong>Key Term — Performance Strategy:</strong> A deliberate action taken to optimise your exam performance beyond knowledge and understanding. Time management, stress management, equipment preparation, and reading strategies are all performance strategies.</div>

<h3>Managing Exam Anxiety</h3>

<p>Some anxiety is normal and even helpful — it keeps you alert and focused. But excessive anxiety impairs performance. Strategies to manage it:</p>
<ul>
  <li><strong>Box breathing:</strong> Breathe in for 4 counts, hold for 4, breathe out for 4, hold for 4. Repeat 3–4 times.</li>
  <li><strong>Positive self-talk:</strong> Replace "I can't do this" with "I've prepared for this and I have a plan."</li>
  <li><strong>Focus on process, not outcome:</strong> Think about what you need to do in the next 5 minutes, not about your final grade.</li>
</ul>

<h3>The Last Five Minutes</h3>
<ul>
  <li><strong>Proofread your writing sections</strong> — check for spelling, punctuation, and missing words.</li>
  <li><strong>Cross out any plans</strong> so the examiner knows not to mark them.</li>
  <li><strong>Check you have answered every question</strong> — even a rushed answer is better than a blank one.</li>
  <li><strong>Add any final points</strong> to reading answers — a quick extra quotation or analytical comment can tip you into a higher band.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Neat presentation does not earn marks, but illegible handwriting loses them. If the examiner cannot read a word, they cannot credit it. Take an extra second to form letters clearly, especially under time pressure.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Leaving the exam early. If you have time left, use it. Re-read your responses, add extra analysis to reading answers, proofread writing for technical accuracy errors. There is always something you can improve in the remaining time.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m28-q1',
          question: 'What should you do in the first five minutes of the exam?',
          options: [
            'Start writing immediately to save time',
            'Write timing targets, read instructions, and scan all questions before starting',
            'Read through your open-book text from start to finish',
            'Copy out the first question'
          ],
          answer: 1,
          explanation: 'Use the first five minutes to write timing targets, read instructions, and scan all questions. This lets your subconscious process later questions while you work on earlier ones.'
        },
        {
          id: 'edexcel-et-m28-q2',
          question: 'What is "box breathing" and when should you use it?',
          options: [
            'A writing technique for structuring paragraphs',
            'A breathing technique (4-4-4-4 counts) to manage exam anxiety',
            'A method for boxing up completed questions',
            'A type of paragraph planning'
          ],
          answer: 1,
          explanation: 'Box breathing (breathe in for 4 counts, hold for 4, breathe out for 4, hold for 4) is a calming technique that reduces anxiety and helps you refocus during the exam.'
        },
        {
          id: 'edexcel-et-m28-q3',
          question: 'Why should you never leave an exam early?',
          options: [
            'It is against exam rules',
            'Because there is always something you can improve — extra analysis, proofreading, additional points',
            'Because it upsets other students',
            'Because you must wait for a set time'
          ],
          answer: 1,
          explanation: 'Use any remaining time to re-read responses, add extra analysis to reading answers, and proofread writing for technical accuracy errors. There is always room for improvement.'
        },
        {
          id: 'edexcel-et-m28-q4',
          question: 'What should you do the night before an exam?',
          options: [
            'Stay up late cramming new material',
            'Review your timing plan, prepare equipment, and get 7–8 hours of sleep',
            'Read through the entire set text one more time',
            'Write practice essays until midnight'
          ],
          answer: 1,
          explanation: 'The night before, review your timing plan, prepare equipment, and prioritise sleep. Adequate sleep improves memory, concentration, and decision-making more than last-minute cramming.'
        },
        {
          id: 'edexcel-et-m28-q5',
          question: 'What should you do if you get stuck on a question during the exam?',
          options: [
            'Spend as long as needed until you figure it out',
            'Leave it blank and move to the next question permanently',
            'Move on and return to it later — other questions may unlock your thinking',
            'Ask the invigilator for help'
          ],
          answer: 2,
          explanation: 'Move on and return to the difficult question later. Working through other questions often unlocks your thinking, and you avoid wasting time staring at a question you are stuck on.'
        }
      ]
    },

    // ── MODULE 29: Edexcel vs AQA — Key Differences Summary ──
    {
      id: 'edexcel-et-mod-29',
      title: 'Edexcel vs AQA — Key Differences Summary',
      duration: '15 min',
      content: `
<h2>Edexcel vs AQA — Key Differences Summary</h2>

<p>Many students switch between resources designed for different exam boards without realising the significant differences. If you are sitting Edexcel exams, you must understand how they differ from AQA — the most commonly taught board — so you do not waste time preparing for the wrong skills. This module summarises every critical difference in one place.</p>

<h3>Language Paper 1</h3>
<table>
  <tr><th>Feature</th><th>Edexcel</th><th>AQA</th></tr>
  <tr><td>Duration</td><td>1 hour 45 minutes</td><td>1 hour 45 minutes</td></tr>
  <tr><td>Reading text</td><td>19th-century fiction</td><td>20th/21st-century fiction</td></tr>
  <tr><td>Writing section</td><td>Transactional writing</td><td>Creative/descriptive writing</td></tr>
  <tr><td>Language + Structure</td><td>Combined in Q3 (15 marks)</td><td>Separate questions (Q2 + Q3, 8 marks each)</td></tr>
</table>

<h3>Language Paper 2</h3>
<table>
  <tr><th>Feature</th><th>Edexcel</th><th>AQA</th></tr>
  <tr><td>Duration</td><td>2 hours 5 minutes</td><td>1 hour 45 minutes</td></tr>
  <tr><td>Reading texts</td><td>Two non-fiction (19th C + modern)</td><td>Two non-fiction (19th C + modern)</td></tr>
  <tr><td>Evaluation question</td><td>Q5 (20 marks) — evaluate a statement</td><td>Q4 (16 marks) — evaluate a statement</td></tr>
  <tr><td>Writing section</td><td>Viewpoint writing (40 marks)</td><td>Viewpoint writing (40 marks)</td></tr>
</table>

<h3>Literature</h3>
<table>
  <tr><th>Feature</th><th>Edexcel</th><th>AQA</th></tr>
  <tr><td>Shakespeare</td><td>Open-book, extract + wider text</td><td>Closed-book, extract + wider text</td></tr>
  <tr><td>Post-1914 text</td><td>Open-book</td><td>Closed-book</td></tr>
  <tr><td>19th-Century Novel</td><td>Closed-book, extract + wider text</td><td>Closed-book, extract + wider text</td></tr>
  <tr><td>Poetry</td><td>Anthology comparison + unseen</td><td>Anthology comparison + unseen</td></tr>
</table>

<div class="key-term"><strong>Key Term — Open-Book vs Closed-Book:</strong> Edexcel allows clean, unannotated texts for Shakespeare and Post-1914 components (open-book). AQA requires all texts to be memorised (closed-book). This fundamentally changes how you prepare — Edexcel students must know their text well enough to navigate it quickly; AQA students must memorise quotations precisely.</div>

<h3>What This Means for Your Preparation</h3>
<ul>
  <li><strong>Practise with Edexcel past papers</strong> — not AQA ones, which test different skills in different orders.</li>
  <li><strong>Prepare transactional writing for Paper 1</strong> — not creative writing, which is the AQA approach.</li>
  <li><strong>Practise combined language and structure analysis</strong> — not separate analyses.</li>
  <li><strong>Learn to navigate your open-book texts efficiently</strong> — bookmark key pages and build a mental map.</li>
  <li><strong>Calibrate your timing to Edexcel papers</strong> — especially Paper 2, which is 20 minutes longer than AQA.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The single biggest mistake is using AQA revision guides for Edexcel exams. The question styles, mark schemes, and assessed skills differ enough that AQA-focused preparation can actually harm your Edexcel performance.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Preparing creative writing for Paper 1. Edexcel Paper 1 Section B tests transactional writing (articles, letters, speeches), not stories or descriptions. If you walk in expecting a creative writing task, you will be entirely unprepared.</div>
`,
      quiz: [
        {
          id: 'edexcel-et-m29-q1',
          question: 'What type of text does Edexcel Paper 1 use for reading, compared to AQA?',
          options: [
            'Both use 20th-century fiction',
            'Edexcel uses 19th-century fiction; AQA uses 20th/21st-century fiction',
            'Edexcel uses non-fiction; AQA uses fiction',
            'Both use 19th-century fiction'
          ],
          answer: 1,
          explanation: 'Edexcel Paper 1 uses a 19th-century fiction extract, while AQA Paper 1 uses a 20th or 21st-century fiction extract. This affects the type of language students must be comfortable analysing.'
        },
        {
          id: 'edexcel-et-m29-q2',
          question: 'Which Edexcel Literature components are open-book?',
          options: [
            'All components',
            'Shakespeare and Post-1914 text only',
            '19th-Century Novel only',
            'None — all are closed-book'
          ],
          answer: 1,
          explanation: 'Shakespeare and Post-1914 prose/drama are open-book (clean, unannotated texts allowed). The 19th-Century Novel and Poetry components are closed-book.'
        },
        {
          id: 'edexcel-et-m29-q3',
          question: 'How much longer is Edexcel Paper 2 compared to AQA Paper 2?',
          options: [
            '10 minutes longer',
            '20 minutes longer',
            '30 minutes longer',
            'They are the same length'
          ],
          answer: 1,
          explanation: 'Edexcel Paper 2 is 2 hours 5 minutes while AQA Paper 2 is 1 hour 45 minutes — a difference of 20 minutes.'
        },
        {
          id: 'edexcel-et-m29-q4',
          question: 'Why should you avoid using AQA revision guides for Edexcel exams?',
          options: [
            'They are more expensive',
            'They are written at a lower level',
            'The question styles, mark schemes, and assessed skills differ significantly',
            'They do not contain any useful information'
          ],
          answer: 2,
          explanation: 'AQA and Edexcel differ in question styles, mark allocations, and assessed skills. AQA-focused preparation can actually harm Edexcel performance by training you for the wrong tasks.'
        },
        {
          id: 'edexcel-et-m29-q5',
          question: 'What writing skill does Edexcel Paper 1 test that AQA Paper 1 does not?',
          options: [
            'Poetry writing',
            'Transactional writing (articles, letters, speeches)',
            'Analytical essay writing',
            'Creative/descriptive writing'
          ],
          answer: 1,
          explanation: 'Edexcel Paper 1 tests transactional writing (articles, letters, speeches, etc.) while AQA Paper 1 tests creative/descriptive writing. This is one of the most significant differences between the boards.'
        }
      ]
    }
  ],

  assessmentQuestions: [
    {
      id: 'edexcel-et-aq-1',
      question: 'What is unique about Edexcel Paper 1 Q3 compared to AQA?',
      options: [
        'It combines language and structure analysis into one question',
        'It only tests creative writing skills',
        'It requires comparison of two texts',
        'It is worth 25 marks'
      ],
      answer: 0,
      explanation: 'Edexcel Paper 1 Q3 integrates language and structure analysis into a single 15-mark question, whereas AQA separates these into distinct questions.'
    },
    {
      id: 'edexcel-et-aq-2',
      question: 'In Edexcel Paper 2 Q6, what does "evaluate" mean?',
      options: [
        'Summarise the main points of both texts',
        'Weigh up evidence to reach a balanced, critical judgement about a statement',
        'Copy out relevant quotations from both sources',
        'Identify all the language techniques used'
      ],
      answer: 1,
      explanation: 'To evaluate means to weigh up the evidence, consider nuances, and reach a considered conclusion about how far you agree with the given statement — not simply to agree or list evidence.'
    },
    {
      id: 'edexcel-et-aq-3',
      question: 'What type of writing does Edexcel Paper 1 Section B test?',
      options: [
        'Creative writing (stories and descriptions)',
        'Transactional writing (letters, articles, speeches)',
        'Poetry writing',
        'Analytical essay writing'
      ],
      answer: 1,
      explanation: 'Edexcel Paper 1 Section B tests transactional writing — purposeful, real-world formats such as letters, articles, speeches, reports, and reviews.'
    },
    {
      id: 'edexcel-et-aq-4',
      question: 'What does "open-book" mean in Edexcel Literature exams?',
      options: [
        'You receive the questions in advance',
        'You can bring annotated copies of texts',
        'You can take clean, unannotated copies of set texts into the exam',
        'You can discuss answers with other candidates'
      ],
      answer: 2,
      explanation: 'Open-book means you can bring clean, unannotated copies of your set texts (for Shakespeare and Post-1914 components) into the exam hall.'
    },
    {
      id: 'edexcel-et-aq-5',
      question: 'What does the "E" in SMILE stand for?',
      options: [
        'Evidence',
        'Enjambment',
        'Effect',
        'Explanation'
      ],
      answer: 2,
      explanation: 'The E in SMILE stands for Effect — the emotional impact on the reader. Every analytical point should connect back to the effect the poet\'s choices create.'
    },
    {
      id: 'edexcel-et-aq-6',
      question: 'How long is Edexcel English Language Paper 2?',
      options: [
        '1 hour 30 minutes',
        '1 hour 45 minutes',
        '2 hours 5 minutes',
        '2 hours 15 minutes'
      ],
      answer: 2,
      explanation: 'Edexcel Paper 2 is 2 hours 5 minutes, which is longer than AQA\'s papers, reflecting the additional reading material and higher-tariff questions.'
    },
    {
      id: 'edexcel-et-aq-7',
      question: 'How should context be handled in an Edexcel Literature essay?',
      options: [
        'Write a separate context paragraph at the beginning',
        'Avoid mentioning context to focus on language analysis',
        'Integrate context naturally into your analytical points',
        'Only include context if you have time at the end'
      ],
      answer: 2,
      explanation: 'Context should be woven into your analysis — deepening your points about language, character, and theme — not presented as a separate, disconnected paragraph.'
    },
    {
      id: 'edexcel-et-aq-8',
      question: 'When comparing two unseen poems, what approach is best?',
      options: [
        'Write about Poem A in full, then Poem B in full',
        'Use a comparative framework discussing both poems together',
        'Only compare the poems\' structures',
        'Choose the better poem and write about it in more detail'
      ],
      answer: 1,
      explanation: 'Use a comparative framework that discusses both poems together in each paragraph, identifying similarities and differences in theme, tone, imagery, or structure.'
    },
    {
      id: 'edexcel-et-aq-9',
      question: 'What is the recommended time for the writing section on Paper 1?',
      options: [
        '20 minutes',
        '30 minutes',
        '40 minutes including planning and proofreading',
        '55 minutes'
      ],
      answer: 2,
      explanation: 'Allocate approximately 40 minutes to the writing task, including 5 minutes for planning and 5 minutes for proofreading. The writing section carries 40 marks — the most on the paper.'
    },
    {
      id: 'edexcel-et-aq-10',
      question: 'Which of the following is NOT a feature examiners reward in Q3 language analysis?',
      options: [
        'Judicious use of embedded quotations',
        'Feature-spotting without analysis of effect',
        'Conceptualised understanding of the writer\'s intention',
        'Purposeful use of subject terminology'
      ],
      answer: 1,
      explanation: 'Feature-spotting — naming a technique without exploring its effect — gains minimal credit. Examiners reward analysis that explains connotations and effects, not mere identification.'
    },
    {
      id: 'edexcel-et-aq-11',
      question: 'What is the "show, don\'t tell" principle in descriptive writing?',
      options: [
        'Use diagrams to illustrate your points',
        'Reveal emotions through actions and sensory details rather than stating them',
        'Show your plan to the examiner',
        'Always write in the present tense'
      ],
      answer: 1,
      explanation: '"Show, don\'t tell" means revealing emotions through physical details, actions, and sensory experiences rather than stating them directly — making writing vivid and immersive.'
    },
    {
      id: 'edexcel-et-aq-12',
      question: 'What is a semantic field?',
      options: [
        'A field described using all five senses',
        'A group of words related to the same topic used to create a pattern of meaning',
        'The literal meaning of a word',
        'A type of farm in a Victorian novel'
      ],
      answer: 1,
      explanation: 'A semantic field is a group of words related to the same topic — for example, words from the semantic field of war used to describe a relationship. Identifying semantic fields shows pattern recognition.'
    },
    {
      id: 'edexcel-et-aq-13',
      question: 'In a formal letter, when do you use "Yours sincerely"?',
      options: [
        'When you do not know the recipient\'s name',
        'When you know the recipient\'s name',
        'In all formal letters regardless',
        'Never — it is too informal'
      ],
      answer: 1,
      explanation: 'Use "Yours sincerely" when you know the recipient\'s name (Dear Mrs Patel). Use "Yours faithfully" when you do not (Dear Sir or Madam).'
    },
    {
      id: 'edexcel-et-aq-14',
      question: 'Why should you refer to Shakespeare as a "playwright" not a "writer"?',
      options: [
        'Because "writer" is grammatically incorrect',
        'Because it shows you understand the text is a performance piece',
        'Because Shakespeare was never published as a writer',
        'Because examiners deduct marks for the word "writer"'
      ],
      answer: 1,
      explanation: 'Calling Shakespeare a "playwright" and discussing what he "stages" or "dramatises" shows you understand the text as a performance piece, not just words on a page.'
    },
    {
      id: 'edexcel-et-aq-15',
      question: 'What is the key difference between comparison and synthesis?',
      options: [
        'There is no difference',
        'Comparison treats sources separately; synthesis weaves them together',
        'Synthesis is longer than comparison',
        'Comparison is for poetry; synthesis is for prose'
      ],
      answer: 1,
      explanation: 'Comparison can treat sources separately (A says X, B says Y). Synthesis weaves them together, drawing connections and contrasts within the same analytical points.'
    }
  ]
};

export default edexcelExamTechnique;
