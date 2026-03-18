// ============================================================
// Edexcel GCSE English Literature (1ET0) — Two courses
// ============================================================

const edexcelGcseLitTexts = {
  id: 'edexcel-gcse-lit-texts',
  title: 'Edexcel GCSE Literature: Set Texts (1ET0)',
  subtitle:
    'Master Shakespeare, post-1914, and 19th-century text essays for the Edexcel exam.',
  tier: 'GCSE',
  board: 'Edexcel',
  specId: 'gcse-lit',
  specCode: '1ET0',
  price: 49,
  duration: '4-6 hours',
  level: 'GCSE (Years 10-11)',
  description:
    'Build exam-ready skills for Edexcel GCSE English Literature Components 1 and 2. Learn how to tackle the two-part Shakespeare question, write the post-1914 essay with SPaG marks, and handle 19th-century novel extract and whole-text responses. Every module is aligned to the 1ET0 mark scheme and AO weightings.',
  color: '#dc2626',

  moduleList: [
    // ──────────────────────────────────────────────
    // MODULE 1
    // ──────────────────────────────────────────────
    {
      id: 'edex-lt-m1',
      title: 'Component 1 Section A: Shakespeare Extract Analysis',
      duration: '40 mins',
      content: `
<p>In the Edexcel 1ET0 exam, <span class="key-term">Component 1 Section A</span> tests your ability to analyse Shakespeare through a <strong>two-part question</strong>. Part (a) gives you an extract of roughly 30 lines and asks you to analyse the language — this is worth <strong>20 marks</strong> and assessed purely on <span class="key-term">AO2</span> (analysis of language, form, and structure).</p>

<h3>What the Examiner Wants in Part (a)</h3>
<p>Unlike AQA, where the Shakespeare question blends extract analysis with wider knowledge in a single response, Edexcel <em>separates</em> the two skills. Part (a) is laser-focused on the extract in front of you. You should:</p>
<ul>
  <li>Identify <strong>specific language choices</strong> — individual words, images, and figures of speech.</li>
  <li>Explain <strong>how</strong> Shakespeare uses these choices to create meaning or dramatic effect.</li>
  <li>Comment on <strong>form and structure</strong> within the extract — shifts in tone, use of verse vs. prose, stichomythia, or rhetorical patterning.</li>
</ul>

<div class="examiner-tip">Edexcel mark schemes reward "perceptive, detailed analysis" at the top band. To reach this level, embed short quotations and explain the connotations of individual words rather than paraphrasing whole sentences.</div>

<h3>A Practical Approach</h3>
<p>Spend roughly <strong>10 minutes</strong> reading and annotating the extract. Then write three to four focused analytical paragraphs in <strong>25 minutes</strong>. Each paragraph should follow this pattern:</p>
<ol>
  <li>Identify a technique or language choice with a short embedded quotation.</li>
  <li>Analyse the effect of the specific words chosen.</li>
  <li>Explore alternative interpretations where possible.</li>
</ol>

<div class="model-answer">Shakespeare's use of the imperative "Out, damned spot!" conveys Lady Macbeth's desperation. The word "damned" carries religious connotations of eternal punishment, suggesting she recognises the spiritual weight of the murder. The exclamatory syntax reinforces her loss of control, contrasting sharply with the composed commands she issued in Act 1.</div>

<div class="common-mistake">Do not waste time on context in Part (a). AO3 (context) is not assessed here — it belongs in Part (b). Every sentence should focus on language analysis.</div>

<p>Remember: the set Shakespeare texts for Edexcel include <em>Macbeth</em>, <em>The Tempest</em>, <em>Romeo and Juliet</em>, <em>Much Ado About Nothing</em>, <em>Twelfth Night</em>, and <em>The Merchant of Venice</em>. Whichever play you study, the approach to the extract question remains the same.</p>
`,
      quiz: [
        {
          id: 'edex-lt-m1-q1',
          question:
            'Which Assessment Objective is tested in Edexcel Component 1 Section A Part (a)?',
          options: ['AO1 only', 'AO2 only', 'AO1 and AO3', 'AO2 and AO4'],
          correct: 1,
          explanation:
            'Part (a) of the Shakespeare question is assessed solely on AO2 — analysis of language, form, and structure.',
        },
        {
          id: 'edex-lt-m1-q2',
          question:
            'How long is the Shakespeare extract typically in the Edexcel exam?',
          options: [
            'About 10 lines',
            'About 20 lines',
            'About 30 lines',
            'The whole scene',
          ],
          correct: 2,
          explanation:
            'The Edexcel Shakespeare extract is approximately 30 lines long, giving you enough material for detailed language analysis.',
        },
        {
          id: 'edex-lt-m1-q3',
          question:
            'Why should you avoid writing about historical context in Part (a)?',
          options: [
            'There is no context to discuss in Shakespeare',
            'AO3 is not assessed in Part (a) — only AO2 is rewarded',
            'Context is only relevant to poetry',
            'The mark scheme penalises context',
          ],
          correct: 1,
          explanation:
            'Part (a) tests AO2 only. Writing about context (AO3) here wastes time and earns no marks — save it for Part (b).',
        },
        {
          id: 'edex-lt-m1-q4',
          question: 'What is the best way to use quotations in Part (a)?',
          options: [
            'Copy out the entire extract',
            'Use long block quotations',
            'Embed short quotations and analyse individual word choices',
            'Avoid quotations and paraphrase instead',
          ],
          correct: 2,
          explanation:
            'Embedding short quotations and analysing the connotations of individual words shows the perceptive, detailed analysis that the top band requires.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 2
    // ──────────────────────────────────────────────
    {
      id: 'edex-lt-m2',
      title: 'Component 1 Section A: Shakespeare Theme Essay',
      duration: '35 mins',
      content: `
<p><span class="key-term">Part (b)</span> of the Shakespeare question asks how a theme from the extract is explored <strong>elsewhere in the play</strong>. This is worth <strong>20 marks</strong> and is assessed on <span class="key-term">AO1</span> (critical response with textual references) and <span class="key-term">AO3</span> (context).</p>

<h3>How Part (b) Differs from Part (a)</h3>
<p>Where Part (a) zooms into the extract, Part (b) zooms out. You must discuss at least <strong>two or three other moments</strong> in the play where the same theme appears. The examiner wants to see that you understand the play as a whole and can link ideas across the text.</p>

<div class="examiner-tip">A strong Part (b) response tracks how the theme <em>develops</em> across the play. For example, if the extract concerns ambition in Act 3, show how ambition is introduced in Act 1, intensifies in Act 3, and leads to destruction in Act 5. This demonstrates a sophisticated understanding of dramatic structure.</div>

<h3>Incorporating Context (AO3)</h3>
<p>Unlike AQA, where context often appears throughout the Shakespeare essay, Edexcel separates the AOs across the two parts. Part (b) is where your contextual knowledge earns marks. Effective context is:</p>
<ul>
  <li><strong>Integrated</strong> — woven into your argument, not added in a separate paragraph.</li>
  <li><strong>Relevant</strong> — directly connected to the theme and the moments you discuss.</li>
  <li><strong>Concise</strong> — one or two sentences per contextual point is enough.</li>
</ul>

<div class="model-answer">Shakespeare presents the theme of loyalty elsewhere in Act 4, when Macduff learns of his family's murder. His grief — "All my pretty ones? / Did you say all?" — reveals that true loyalty is rooted in love, contrasting with Macbeth's self-serving allegiance to power. A Jacobean audience, familiar with the Gunpowder Plot, would have understood the play's insistence that disloyalty to a rightful king invites divine retribution.</div>

<div class="common-mistake">Do not simply retell the plot. Every paragraph should make an analytical point about the theme, supported by a quotation and, where appropriate, a contextual link.</div>

<h3>Suggested Timing</h3>
<p>You have roughly <strong>55 minutes</strong> for the entire Shakespeare question. A sensible split is 25 minutes for Part (a) and 25 minutes for Part (b), with 5 minutes for planning. Part (b) should contain three to four well-developed paragraphs.</p>
`,
      quiz: [
        {
          id: 'edex-lt-m2-q1',
          question:
            'Which Assessment Objectives are tested in Part (b) of the Shakespeare question?',
          options: [
            'AO2 only',
            'AO1 and AO3',
            'AO1, AO2, and AO3',
            'AO2 and AO4',
          ],
          correct: 1,
          explanation:
            'Part (b) tests AO1 (critical response with textual references) and AO3 (understanding of context).',
        },
        {
          id: 'edex-lt-m2-q2',
          question: 'What should Part (b) focus on?',
          options: [
            'Detailed analysis of the extract',
            'How a theme from the extract is explored elsewhere in the play',
            'A comparison between two Shakespeare plays',
            'The historical background of Shakespeare\'s life',
          ],
          correct: 1,
          explanation:
            'Part (b) asks you to explore how the identified theme appears in other parts of the play, demonstrating whole-text knowledge.',
        },
        {
          id: 'edex-lt-m2-q3',
          question: 'How should context be used in Part (b)?',
          options: [
            'In a separate introductory paragraph',
            'Only in the conclusion',
            'Integrated into your analytical paragraphs',
            'Context is not assessed in Part (b)',
          ],
          correct: 2,
          explanation:
            'Context should be woven into your argument rather than separated into its own paragraph. Integrated context feels natural and supports your analytical points.',
        },
        {
          id: 'edex-lt-m2-q4',
          question:
            'How many other moments in the play should you typically discuss in Part (b)?',
          options: [
            'One moment is sufficient',
            'At least two or three moments',
            'Every scene in the play',
            'Only the opening and closing scenes',
          ],
          correct: 1,
          explanation:
            'Discussing two or three well-chosen moments from different parts of the play shows breadth of knowledge and allows you to track the theme\'s development.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 3
    // ──────────────────────────────────────────────
    {
      id: 'edex-lt-m3',
      title: 'Component 1 Section B: Post-1914 Essay Skills',
      duration: '40 mins',
      content: `
<p><span class="key-term">Component 1 Section B</span> asks you to write a single essay on your post-1914 British play or novel. You choose one question from two options. This essay is worth <strong>40 marks</strong> (32 for content + 8 for <span class="key-term">SPaG</span>) and is assessed on <span class="key-term">AO1</span>, <span class="key-term">AO3</span>, and <span class="key-term">AO4</span>.</p>

<h3>The Set Texts</h3>
<p>Edexcel offers a wide range of post-1914 options: <em>An Inspector Calls</em>, <em>Hobson's Choice</em>, <em>Blood Brothers</em>, <em>Journey's End</em>, <em>Animal Farm</em>, <em>Lord of the Flies</em>, <em>Anita and Me</em>, <em>The Woman in Black</em>, <em>The Empress</em>, <em>Refugee Boy</em>, <em>Coram Boy</em>, and <em>Boys Don't Cry</em>.</p>

<h3>What the Question Looks Like</h3>
<p>A typical question might read: <em>"How does Priestley present ideas about responsibility in An Inspector Calls?"</em> You must write a <strong>sustained, coherent essay</strong> that covers the whole text — there is no extract provided for this section.</p>

<div class="examiner-tip">Because there is no extract, you need strong knowledge of the text. Aim to memorise 15–20 key quotations for your chosen text, spread across the whole narrative. Choose quotations that are short enough to embed and rich enough to analyse.</div>

<h3>Building a Strong Essay</h3>
<p>Structure your response with a clear argument that runs through every paragraph:</p>
<ol>
  <li><strong>Introduction</strong> — state your argument in one or two sentences. Avoid generic openings.</li>
  <li><strong>Body paragraphs</strong> (3–4) — each should make a distinct point, supported by a quotation, with analysis and context.</li>
  <li><strong>Conclusion</strong> — briefly draw your argument together. A single sentence is often enough.</li>
</ol>

<div class="model-answer">Priestley uses the character of Mr Birling to embody capitalist complacency. His assertion that "a man has to mind his own business" reveals a philosophy of self-interest that the play systematically dismantles. Writing in 1945 but setting the play in 1912, Priestley uses dramatic irony to expose the limitations of Birling's worldview, encouraging a post-war audience to embrace collective responsibility.</div>

<div class="common-mistake">Do not confuse this with AQA's structure: on AQA, SPaG marks sit with the Shakespeare question. On Edexcel, the 8 SPaG marks are on this Post-1914 essay — so accuracy of spelling, punctuation, and grammar really matters here.</div>

<p>Allow approximately <strong>50 minutes</strong> for this essay, including 5 minutes of planning and 5 minutes of checking your SPaG at the end.</p>
`,
      quiz: [
        {
          id: 'edex-lt-m3-q1',
          question:
            'How many marks is the Post-1914 essay worth in total (including SPaG)?',
          options: ['20 marks', '30 marks', '40 marks', '50 marks'],
          correct: 2,
          explanation:
            'The Post-1914 essay is worth 40 marks in total: 32 for content (AO1 and AO3) plus 8 for SPaG (AO4).',
        },
        {
          id: 'edex-lt-m3-q2',
          question:
            'Where do the SPaG marks sit in the Edexcel Literature exam?',
          options: [
            'On the Shakespeare question',
            'On the Post-1914 essay',
            'On the 19th-century novel question',
            'Spread across all questions',
          ],
          correct: 1,
          explanation:
            'In Edexcel 1ET0, the 8 SPaG marks (AO4) are assessed on the Post-1914 essay in Component 1 Section B. This differs from AQA, where SPaG is on the Shakespeare question.',
        },
        {
          id: 'edex-lt-m3-q3',
          question: 'Is an extract provided for the Post-1914 essay?',
          options: [
            'Yes, an extract of about 30 lines',
            'Yes, an extract of about 400 words',
            'No, it is a whole-text essay with no extract',
            'An extract is optional',
          ],
          correct: 2,
          explanation:
            'Component 1 Section B does not provide an extract. You must write a whole-text essay from memory, which is why strong quotation knowledge is essential.',
        },
        {
          id: 'edex-lt-m3-q4',
          question:
            'How many key quotations should you aim to memorise for your post-1914 text?',
          options: ['5–8', '10–12', '15–20', '30+'],
          correct: 2,
          explanation:
            'Memorising 15–20 key quotations, spread across the narrative, gives you enough material to respond to any question on the text.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 4
    // ──────────────────────────────────────────────
    {
      id: 'edex-lt-m4',
      title: 'Component 1 Section B: Context and SPaG in the Post-1914 Essay',
      duration: '30 mins',
      content: `
<p>Two elements can make or break your Post-1914 essay on Edexcel: <span class="key-term">context (AO3)</span> and <span class="key-term">SPaG (AO4)</span>. Together they account for a significant portion of the 40 marks, yet many students either neglect context or forget to proofread.</p>

<h3>Getting Context Right</h3>
<p>AO3 asks you to "demonstrate understanding of the relationships between texts and the contexts in which they were written." This means you should consider:</p>
<ul>
  <li><strong>When the text was written</strong> and <strong>when it is set</strong> — these are often different (e.g., <em>An Inspector Calls</em> written 1945, set 1912).</li>
  <li><strong>Social and political issues</strong> the writer was responding to.</li>
  <li><strong>The writer's purpose</strong> — what they wanted the audience to think, feel, or do.</li>
</ul>

<div class="examiner-tip">The Edexcel mark scheme rewards context that is "convincingly linked" to your argument. A top-band response makes context feel like a natural part of analysis, not an afterthought. Try weaving a contextual sentence into the middle of your analytical paragraphs rather than tacking it on at the end.</div>

<h3>Earning All 8 SPaG Marks</h3>
<p>The <span class="key-term">AO4 SPaG marks</span> are unique to this essay in the Edexcel exam. The mark scheme awards them in three bands:</p>
<ul>
  <li><strong>Band 1 (1–2 marks)</strong>: basic accuracy with some errors.</li>
  <li><strong>Band 2 (3–5 marks)</strong>: generally accurate with good use of vocabulary.</li>
  <li><strong>Band 3 (6–8 marks)</strong>: consistently accurate with a wide, ambitious vocabulary and varied sentence structures.</li>
</ul>

<div class="common-mistake">Many students lose SPaG marks by using literary vocabulary incorrectly — for example, writing "pathetic fallacy" when they mean "personification," or misspelling "Shakespeare" and "Priestley." Practise spelling the names of authors and key terms until they are automatic.</div>

<h3>A SPaG Checklist</h3>
<p>In the final five minutes of Component 1, re-read your Post-1914 essay and check for:</p>
<ol>
  <li>Capital letters for proper nouns and sentence starts.</li>
  <li>Apostrophes in the right places (especially <em>Birling's</em>, <em>Priestley's</em>).</li>
  <li>Full stops at the end of every sentence — no run-on sentences.</li>
  <li>Correct spelling of key terms: <em>responsibility</em>, <em>hierarchy</em>, <em>patriarchal</em>.</li>
</ol>

<div class="model-answer">Russell uses Mrs Johnstone's superstitious nature to reflect the fatalism experienced by many working-class women in 1960s Liverpool. Her belief that "shoes on the table" will bring bad luck externalises her powerlessness — she attributes the family's suffering to fate rather than the class system that constrains her. This aligns with Russell's socialist critique: by showing how superstition replaces systemic understanding, he encourages the audience to look beyond individual blame.</div>
`,
      quiz: [
        {
          id: 'edex-lt-m4-q1',
          question: 'How many SPaG marks are available on the Post-1914 essay?',
          options: ['4 marks', '6 marks', '8 marks', '12 marks'],
          correct: 2,
          explanation:
            'There are 8 SPaG marks (AO4) available on the Post-1914 essay in Component 1 Section B.',
        },
        {
          id: 'edex-lt-m4-q2',
          question:
            'What does the Edexcel mark scheme mean by context that is "convincingly linked"?',
          options: [
            'Context placed in a separate paragraph',
            'Context that is woven naturally into your analytical argument',
            'A timeline of historical events',
            'Context copied from a revision guide',
          ],
          correct: 1,
          explanation:
            'The mark scheme rewards context that is integrated into your argument, supporting your analytical points rather than sitting in isolation.',
        },
        {
          id: 'edex-lt-m4-q3',
          question:
            'What is the highest SPaG band, and what does it require?',
          options: [
            'Band 3 (6–8 marks): consistently accurate with ambitious vocabulary',
            'Band 2 (3–5 marks): generally accurate',
            'Band 3 (7–8 marks): perfect spelling throughout',
            'Band 4 (9–12 marks): academic-level writing',
          ],
          correct: 0,
          explanation:
            'Band 3 awards 6–8 marks for consistently accurate spelling, punctuation, and grammar, with a wide and ambitious vocabulary and varied sentence structures.',
        },
        {
          id: 'edex-lt-m4-q4',
          question:
            'Why is the difference between when a text was written and when it is set important for AO3?',
          options: [
            'It is not important — only the setting matters',
            'It allows you to discuss dramatic irony and the writer\'s purpose for their original audience',
            'It lets you write a biography of the author',
            'The examiner only cares about the date of publication',
          ],
          correct: 1,
          explanation:
            'The gap between writing date and setting often reveals the writer\'s purpose — for example, Priestley setting An Inspector Calls in 1912 but writing in 1945 creates dramatic irony that serves his socialist message.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 5
    // ──────────────────────────────────────────────
    {
      id: 'edex-lt-m5',
      title: 'Component 2 Section A: 19th-Century Novel Extract Analysis',
      duration: '40 mins',
      content: `
<p><span class="key-term">Component 2 Section A</span> focuses on your 19th-century novel. Like the Shakespeare question, it is split into two parts. <strong>Part (a)</strong> provides an extract of approximately <strong>400 words</strong> and asks you to analyse the writer's use of language. It is worth <strong>20 marks</strong>, assessed on <span class="key-term">AO2</span>.</p>

<h3>Set Texts</h3>
<p>The Edexcel 19th-century novel options are: <em>Jane Eyre</em>, <em>Great Expectations</em>, <em>Dr Jekyll and Mr Hyde</em>, <em>A Christmas Carol</em>, <em>Pride and Prejudice</em>, <em>Silas Marner</em>, and <em>Frankenstein</em>.</p>

<h3>Approaching a Prose Extract</h3>
<p>A 400-word prose extract is longer than the Shakespeare extract, giving you more material to work with. Your approach should be:</p>
<ol>
  <li><strong>Read twice</strong> — once for understanding, once for annotation.</li>
  <li><strong>Identify three or four language features</strong> worth analysing in depth.</li>
  <li><strong>Write focused paragraphs</strong> that move through the extract in a logical order.</li>
</ol>

<div class="examiner-tip">The Edexcel mark scheme for this question values "analysis of the writer's methods." This means you should discuss not just what language is used, but why the writer chose it and what effect it has on the reader. Think about narrative voice, sentence structure, and imagery as well as individual word choices.</div>

<h3>Key Language Features in 19th-Century Prose</h3>
<p>Nineteenth-century writers often employ:</p>
<ul>
  <li><span class="key-term">Pathetic fallacy</span> — weather and setting reflecting characters' emotions.</li>
  <li><span class="key-term">Narrative perspective</span> — first person (Jane Eyre, Pip) vs. third person (A Christmas Carol) and the effects of each.</li>
  <li><span class="key-term">Elaborate sentence structures</span> — long, complex sentences that build tension or convey status.</li>
  <li><span class="key-term">Symbolism</span> — objects, settings, or names that carry deeper meaning.</li>
</ul>

<div class="text-extract">
  The room was dark, for the candles had burned low; and the fire, which had blazed so fiercely only an hour ago, was now little more than a heap of red embers, casting uncertain shadows upon the walls.
  <div class="source">— Style model (original example for analysis practice)</div>
</div>

<p>In this style model, the <strong>pathetic fallacy</strong> of the dying fire mirrors a decline in hope or energy. The contrast between "blazed so fiercely" and "little more than a heap" uses juxtaposition to emphasise the change. The "uncertain shadows" create an atmosphere of unease, with the adjective "uncertain" suggesting instability.</p>

<div class="common-mistake">Avoid simply listing techniques. The mark scheme distinguishes between "some comment" (lower band) and "detailed, perceptive analysis" (top band). Always explain the effect and link it back to the writer's purpose.</div>
`,
      quiz: [
        {
          id: 'edex-lt-m5-q1',
          question:
            'How long is the prose extract in Component 2 Section A Part (a)?',
          options: [
            'About 30 lines',
            'About 200 words',
            'About 400 words',
            'About 600 words',
          ],
          correct: 2,
          explanation:
            'The 19th-century novel extract in Component 2 is approximately 400 words — longer than the Shakespeare extract in Component 1.',
        },
        {
          id: 'edex-lt-m5-q2',
          question:
            'Which Assessment Objective is tested in Component 2 Section A Part (a)?',
          options: ['AO1 only', 'AO2 only', 'AO1 and AO3', 'AO2 and AO3'],
          correct: 1,
          explanation:
            'Part (a) of the 19th-century novel question is assessed on AO2 — analysis of the writer\'s use of language, form, and structure.',
        },
        {
          id: 'edex-lt-m5-q3',
          question:
            'What is pathetic fallacy?',
          options: [
            'When a character feels sorry for themselves',
            'When weather or setting reflects a character\'s emotions',
            'A logical error in an argument',
            'When the narrator lies to the reader',
          ],
          correct: 1,
          explanation:
            'Pathetic fallacy is a technique where the weather, setting, or natural world reflects the emotions of a character or the mood of the scene.',
        },
        {
          id: 'edex-lt-m5-q4',
          question:
            'How many language features should you aim to analyse in the prose extract?',
          options: [
            'One feature in great depth',
            'Two features briefly',
            'Three or four features in depth',
            'As many as possible, briefly',
          ],
          correct: 2,
          explanation:
            'Aim for three or four well-developed analytical points. This gives you enough breadth to cover the extract while maintaining the depth the mark scheme rewards.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 6
    // ──────────────────────────────────────────────
    {
      id: 'edex-lt-m6',
      title: 'Component 2 Section A: 19th-Century Novel Whole Text Essay',
      duration: '35 mins',
      content: `
<p><span class="key-term">Part (b)</span> of the 19th-century novel question asks you to write about a theme or character across the <strong>whole text</strong>. It is worth <strong>20 marks</strong> and assessed on <span class="key-term">AO1</span> (critical, informed response supported by textual references).</p>

<h3>How Part (b) Differs from Part (a)</h3>
<p>Part (a) was pure language analysis (AO2). Part (b) shifts to AO1: your ability to construct a clear, well-supported argument about the text as a whole. Note that, unlike the Shakespeare Part (b), <strong>AO3 (context) is not assessed here</strong>. This means you should focus on textual evidence and argument rather than historical background.</p>

<div class="examiner-tip">Because AO3 is not assessed in this part, every sentence should focus on your argument and supporting evidence. Students who spend time on context here are wasting precious minutes that could be spent developing their analysis.</div>

<h3>Structuring the Response</h3>
<p>A strong Part (b) essay should:</p>
<ul>
  <li>Open with a clear <strong>thesis</strong> that directly addresses the question.</li>
  <li>Develop three to four paragraphs that track the theme or character across the text, covering beginning, middle, and end.</li>
  <li>Use <strong>short, embedded quotations</strong> from memory to support each point.</li>
  <li>Show awareness of <strong>how the writer shapes meaning</strong> — even though AO2 is not formally assessed here, references to the writer's craft strengthen your argument.</li>
</ul>

<div class="model-answer">Dickens presents Scrooge's transformation as a moral journey from isolation to community. In Stave 1, Scrooge is described as "solitary as an oyster," a simile that suggests both his hard exterior and his self-imposed enclosure. By Stave 5, he has become "as good a friend, as good a master, and as good a man, as the good old city knew," where the tricolon and repetition of "good" emphasise the completeness of his change. Dickens structures this transformation across five staves — mirroring the five acts of a play — to argue that redemption is always possible when a person chooses compassion over greed.</div>

<div class="common-mistake">Do not retell the plot. The mark scheme says students in the lower bands "describe" events, while those in the top band "critically explore" ideas. Every paragraph should answer the question, not narrate the story.</div>

<h3>Timing</h3>
<p>You have about <strong>55 minutes</strong> for the entire 19th-century novel question. Spend roughly 25 minutes on Part (a) and 25 on Part (b), with 5 minutes for reading and planning. This gives you enough time for a focused, well-structured response.</p>
`,
      quiz: [
        {
          id: 'edex-lt-m6-q1',
          question:
            'Which Assessment Objective is tested in Component 2 Section A Part (b)?',
          options: ['AO1 only', 'AO2 only', 'AO1 and AO3', 'AO2 and AO3'],
          correct: 0,
          explanation:
            'Part (b) of the 19th-century novel question is assessed solely on AO1 — a critical, informed response supported by textual references.',
        },
        {
          id: 'edex-lt-m6-q2',
          question: 'Is AO3 (context) assessed in this part of the exam?',
          options: [
            'Yes, it is the main focus',
            'Yes, but only for top-band marks',
            'No, AO3 is not assessed in Part (b)',
            'Only if you are studying A Christmas Carol',
          ],
          correct: 2,
          explanation:
            'AO3 is not assessed in Component 2 Section A Part (b). Focus your time on building a strong argument with textual evidence (AO1).',
        },
        {
          id: 'edex-lt-m6-q3',
          question:
            'What distinguishes a top-band response from a lower-band response in Part (b)?',
          options: [
            'Using longer quotations',
            'Including more historical context',
            'Critically exploring ideas rather than describing events',
            'Writing more paragraphs',
          ],
          correct: 2,
          explanation:
            'The mark scheme distinguishes between students who "describe" (lower band) and those who "critically explore" (top band). Every paragraph should analyse, not narrate.',
        },
        {
          id: 'edex-lt-m6-q4',
          question:
            'How should you track a theme across the whole text?',
          options: [
            'Only discuss the beginning and end',
            'Cover the beginning, middle, and end to show how the theme develops',
            'Focus entirely on one scene',
            'Discuss only the climax of the novel',
          ],
          correct: 1,
          explanation:
            'Tracking a theme across the beginning, middle, and end demonstrates whole-text knowledge and shows how the writer develops ideas across the narrative arc.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 7
    // ──────────────────────────────────────────────
    {
      id: 'edex-lt-m7',
      title: 'Writing Literature Essays for Edexcel',
      duration: '35 mins',
      content: `
<p>Across both components of the Edexcel GCSE Literature exam, you write six responses. Your ability to construct clear, analytical essays is critical. This module focuses on the <span class="key-term">craft of essay writing</span> specific to the Edexcel mark scheme.</p>

<h3>The Edexcel Mark Scheme Language</h3>
<p>Understanding what the mark scheme values helps you target your writing. At the top band, examiners look for:</p>
<ul>
  <li><strong>AO1</strong>: "Critical, exploratory, conceptualised response" with "judicious use of precise references."</li>
  <li><strong>AO2</strong>: "Perceptive, detailed analysis" of the writer's methods.</li>
  <li><strong>AO3</strong>: "Perceptive understanding of context" that is "convincingly linked" to the response.</li>
</ul>

<div class="key-term">The word "perceptive" appears repeatedly in the Edexcel top band. It means showing insight beyond the obvious — finding meanings, connections, or effects that a surface reading would miss.</div>

<h3>Paragraph Structure: WHAT–HOW–WHY</h3>
<p>For Edexcel, a reliable paragraph structure is:</p>
<ol>
  <li><strong>WHAT</strong> — What is the writer doing or saying? (Your point.)</li>
  <li><strong>HOW</strong> — How do they achieve this? (Quotation + language/structure analysis.)</li>
  <li><strong>WHY</strong> — Why does this matter? (Effect on reader, writer's purpose, context where assessed.)</li>
</ol>

<div class="model-answer"><strong>WHAT:</strong> Stevenson presents Mr Hyde as a figure who disrupts Victorian respectability. <strong>HOW:</strong> The description of Hyde as possessing "something displeasing, something downright detestable" uses repetition and the intensifying adverb "downright" to convey a visceral, instinctive revulsion. <strong>WHY:</strong> The vagueness of "something" suggests that Hyde's threat cannot be articulated within polite Victorian discourse — his very existence challenges the rational categorisation that men like Utterson rely upon.</div>

<h3>Connecting Paragraphs</h3>
<p>Strong essays do not feel like a list of separate points. Use connectives that develop your argument:</p>
<ul>
  <li><em>Furthermore</em>, <em>Moreover</em> — to build on a point.</li>
  <li><em>However</em>, <em>In contrast</em> — to introduce a shift or counter-argument.</li>
  <li><em>Significantly</em>, <em>Crucially</em> — to signal an important moment.</li>
</ul>

<div class="common-mistake">Avoid mechanical "PEE" or "PEEL" chains where every paragraph follows the same rigid formula. Examiners describe top-band essays as "fluent" and "conceptualised" — this means your argument should flow naturally, not feel like a checklist.</div>

<p>Practise writing timed paragraphs (7–8 minutes each) to build the stamina and fluency needed across two exam papers totalling four hours.</p>
`,
      quiz: [
        {
          id: 'edex-lt-m7-q1',
          question:
            'What does "perceptive" mean in the context of the Edexcel top band?',
          options: [
            'Writing very long essays',
            'Showing insight beyond the obvious, finding deeper meanings',
            'Using as many techniques as possible',
            'Agreeing with the examiner\'s interpretation',
          ],
          correct: 1,
          explanation:
            '"Perceptive" in the Edexcel mark scheme means showing insight beyond a surface reading — finding connections, effects, or meanings that demonstrate sophisticated understanding.',
        },
        {
          id: 'edex-lt-m7-q2',
          question: 'What does the WHAT–HOW–WHY structure help you do?',
          options: [
            'Memorise quotations more easily',
            'Write a clear introduction',
            'Build analytical paragraphs that cover point, evidence, and effect',
            'Plan your revision timetable',
          ],
          correct: 2,
          explanation:
            'WHAT–HOW–WHY ensures each paragraph makes a point (WHAT), supports it with evidence and analysis (HOW), and explains the significance (WHY).',
        },
        {
          id: 'edex-lt-m7-q3',
          question:
            'Why should you avoid rigid "PEE chain" paragraphs in a top-band response?',
          options: [
            'PEE is only for AQA exams',
            'Examiners value fluent, conceptualised argument over mechanical formulas',
            'PEE paragraphs are too short',
            'The mark scheme penalises acronyms',
          ],
          correct: 1,
          explanation:
            'The top band requires a "fluent" and "conceptualised" response. While PEE can help structure weaker writing, top-band essays should feel like a flowing argument, not a mechanical checklist.',
        },
        {
          id: 'edex-lt-m7-q4',
          question:
            'What does "judicious use of precise references" mean in the AO1 descriptor?',
          options: [
            'Using references from a judge or legal text',
            'Quoting entire passages from the text',
            'Choosing short, well-selected quotations that directly support your point',
            'Referencing at least ten quotations per paragraph',
          ],
          correct: 2,
          explanation:
            '"Judicious" means wisely chosen. The mark scheme rewards carefully selected, precise references — not long block quotations — that directly support the argument you are making.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 8
    // ──────────────────────────────────────────────
    {
      id: 'edex-lt-m8',
      title: 'Exam Strategy: Timing and Planning Both Components',
      duration: '25 mins',
      content: `
<p>The Edexcel GCSE Literature exam is split across <strong>two papers</strong> totalling <strong>4 hours</strong>. Effective time management is the difference between a complete, polished paper and a rushed, unfinished one.</p>

<h3>Component 1: Shakespeare and Post-1914 Literature (1h 45m, 80 marks)</h3>
<p>Recommended time allocation:</p>
<ul>
  <li><strong>Section A — Shakespeare</strong> (55 mins total): 5 mins reading/planning, 25 mins Part (a), 25 mins Part (b).</li>
  <li><strong>Section B — Post-1914</strong> (50 mins total): 5 mins planning, 40 mins writing, 5 mins SPaG check.</li>
</ul>

<h3>Component 2: 19th-Century Novel and Poetry (2h 15m, 80 marks)</h3>
<p>Recommended time allocation:</p>
<ul>
  <li><strong>Section A — 19th-Century Novel</strong> (55 mins): 5 mins reading/planning, 25 mins Part (a), 25 mins Part (b).</li>
  <li><strong>Section B Part 1 — Anthology Poetry Comparison</strong> (40 mins): 5 mins planning, 35 mins writing.</li>
  <li><strong>Section B Part 2 — Unseen Poetry Comparison</strong> (40 mins): 10 mins reading/annotating, 30 mins writing.</li>
</ul>

<div class="examiner-tip">The single biggest cause of underperformance is spending too long on early questions and rushing or skipping later ones. Every mark on the paper is equal — a mark lost on Question 1 is the same as a mark lost on the poetry comparison. Stick to your timings.</div>

<h3>Planning Each Response</h3>
<p>A <strong>5-minute plan</strong> saves you time in the long run. For each response:</p>
<ol>
  <li>Underline key words in the question.</li>
  <li>Jot down 3–4 points you want to make.</li>
  <li>Note a quotation (or page reference) for each point.</li>
  <li>Order your points to build an argument.</li>
</ol>

<div class="common-mistake">Do not write a plan and then ignore it. If you find yourself drifting from your plan, either return to it or consciously adjust — but do not abandon structure halfway through an essay.</div>

<h3>What to Do If You Run Out of Time</h3>
<p>If you have two minutes left and an unfinished essay:</p>
<ul>
  <li>Write a <strong>brief conclusion</strong> that summarises your argument — this shows the examiner you had a clear line of thinking.</li>
  <li>If you haven't started a section, write <strong>bullet-point notes</strong> — examiners can award marks for ideas even in note form.</li>
  <li>Never leave a question blank. Even partial responses earn marks.</li>
</ul>

<p>Practise completing full past papers under timed conditions. This builds the stamina and confidence you need for the real exam.</p>
`,
      quiz: [
        {
          id: 'edex-lt-m8-q1',
          question: 'How long is Component 1 of the Edexcel Literature exam?',
          options: [
            '1 hour 30 minutes',
            '1 hour 45 minutes',
            '2 hours',
            '2 hours 15 minutes',
          ],
          correct: 1,
          explanation:
            'Component 1 (Shakespeare and Post-1914 Literature) is 1 hour 45 minutes long, worth 80 marks (50% of the total).',
        },
        {
          id: 'edex-lt-m8-q2',
          question:
            'Why should you spend 5 minutes checking SPaG at the end of Component 1?',
          options: [
            'SPaG marks are awarded on every question',
            'The 8 SPaG marks on the Post-1914 essay are easy to secure with a quick proofread',
            'SPaG errors lead to automatic disqualification',
            'The examiner deducts marks for every error',
          ],
          correct: 1,
          explanation:
            'The 8 SPaG marks (AO4) on the Post-1914 essay reward accurate spelling, punctuation, and grammar. A focused proofread can catch careless errors and secure these marks.',
        },
        {
          id: 'edex-lt-m8-q3',
          question:
            'What should you do if you run out of time and haven\'t started a question?',
          options: [
            'Leave it blank and hope for the best',
            'Write bullet-point notes to show your ideas',
            'Go back and add more to an earlier question',
            'Ask the invigilator for extra time',
          ],
          correct: 1,
          explanation:
            'Examiners can award marks for ideas even in note form. Bullet points with quotations and brief analysis are far better than a blank page.',
        },
        {
          id: 'edex-lt-m8-q4',
          question:
            'How long should you allocate to the Unseen Poetry Comparison on Component 2?',
          options: [
            '20 minutes',
            '30 minutes',
            '40 minutes',
            '55 minutes',
          ],
          correct: 2,
          explanation:
            'Allocate approximately 40 minutes to the Unseen Poetry Comparison: 10 minutes for reading and annotating both poems, and 30 minutes for writing your comparative response.',
        },
      ],
    },
  ],

  // ──────────────────────────────────────────────
  // ASSESSMENT QUESTIONS
  // ──────────────────────────────────────────────
  assessmentQuestions: [
    {
      id: 'edex-lt-a1',
      question:
        'Which Assessment Objective is tested in the Shakespeare extract analysis (Component 1, Section A, Part a)?',
      options: ['AO1', 'AO2', 'AO3', 'AO4'],
      correct: 1,
      explanation:
        'Part (a) of the Shakespeare question tests AO2 — analysis of language, form, and structure within the extract.',
    },
    {
      id: 'edex-lt-a2',
      question:
        'How does the Edexcel Shakespeare question differ from AQA\'s?',
      options: [
        'Edexcel does not include Shakespeare',
        'Edexcel splits the question into extract analysis (a) and theme elsewhere (b); AQA combines them',
        'AQA gives two Shakespeare extracts; Edexcel gives one',
        'There is no difference',
      ],
      correct: 1,
      explanation:
        'Edexcel separates the Shakespeare question into Part (a) for extract analysis (AO2) and Part (b) for theme across the play (AO1 + AO3), while AQA combines extract and whole-text analysis in a single response.',
    },
    {
      id: 'edex-lt-a3',
      question:
        'Where are the SPaG marks (AO4) assessed in the Edexcel Literature exam?',
      options: [
        'On the Shakespeare question',
        'On the 19th-century novel question',
        'On the Post-1914 essay (Component 1 Section B)',
        'On the poetry comparison',
      ],
      correct: 2,
      explanation:
        'The 8 SPaG marks sit on the Post-1914 essay in Component 1 Section B. This is different from AQA, where SPaG marks are on the Shakespeare question.',
    },
    {
      id: 'edex-lt-a4',
      question:
        'How many marks is the Post-1914 essay worth in total?',
      options: ['20 marks', '30 marks', '40 marks', '50 marks'],
      correct: 2,
      explanation:
        'The Post-1914 essay is worth 40 marks: 32 for content (AO1 + AO3) and 8 for SPaG (AO4).',
    },
    {
      id: 'edex-lt-a5',
      question:
        'Is an extract provided for the Post-1914 essay on Component 1?',
      options: [
        'Yes, about 30 lines',
        'Yes, about 400 words',
        'No, it is a whole-text essay',
        'It depends on the text studied',
      ],
      correct: 2,
      explanation:
        'No extract is provided for the Post-1914 essay. You must write about the whole text from memory.',
    },
    {
      id: 'edex-lt-a6',
      question:
        'How long is the prose extract in Component 2 Section A Part (a)?',
      options: [
        'About 30 lines',
        'About 200 words',
        'About 400 words',
        'About 1000 words',
      ],
      correct: 2,
      explanation:
        'The 19th-century novel extract is approximately 400 words, providing substantial material for language analysis.',
    },
    {
      id: 'edex-lt-a7',
      question:
        'Which AO is tested in Component 2 Section A Part (b)?',
      options: ['AO1 only', 'AO2 only', 'AO1 and AO3', 'AO2 and AO4'],
      correct: 0,
      explanation:
        'Part (b) of the 19th-century novel question tests AO1 only — your ability to construct a critical, informed response supported by textual references.',
    },
    {
      id: 'edex-lt-a8',
      question:
        'What does "perceptive" mean in the Edexcel top-band descriptors?',
      options: [
        'Writing at great length',
        'Showing insight beyond the obvious',
        'Using specialist vocabulary',
        'Avoiding personal opinions',
      ],
      correct: 1,
      explanation:
        '"Perceptive" means demonstrating insight beyond surface reading — finding deeper meanings, connections, or effects that show sophisticated understanding.',
    },
    {
      id: 'edex-lt-a9',
      question:
        'What is the recommended time for the Shakespeare question on Component 1?',
      options: ['30 minutes', '45 minutes', '55 minutes', '70 minutes'],
      correct: 2,
      explanation:
        'Allocate approximately 55 minutes to the Shakespeare question: 5 minutes planning, 25 minutes for Part (a), and 25 minutes for Part (b).',
    },
    {
      id: 'edex-lt-a10',
      question:
        'What should you do if you run out of time on a question?',
      options: [
        'Leave it blank',
        'Write bullet-point notes with quotations',
        'Go back and expand an earlier answer',
        'Cross out your plan',
      ],
      correct: 1,
      explanation:
        'Examiners can award marks for ideas even in note form. Writing bullet points with key quotations and brief analysis is far better than leaving a blank space.',
    },
    {
      id: 'edex-lt-a11',
      question:
        'How does Edexcel pair Shakespeare on its exam papers compared to AQA?',
      options: [
        'Edexcel pairs Shakespeare with post-1914 texts; AQA pairs Shakespeare with 19th-century novel',
        'Both boards pair Shakespeare with post-1914 texts',
        'Edexcel pairs Shakespeare with poetry; AQA pairs Shakespeare with post-1914 texts',
        'Both boards pair Shakespeare with 19th-century novel',
      ],
      correct: 0,
      explanation:
        'Edexcel places Shakespeare alongside post-1914 literature on Component 1, while AQA places Shakespeare alongside the 19th-century novel on Paper 1.',
    },
    {
      id: 'edex-lt-a12',
      question:
        'What is the total mark for Component 1?',
      options: ['40 marks', '60 marks', '80 marks', '100 marks'],
      correct: 2,
      explanation:
        'Component 1 (Shakespeare and Post-1914 Literature) is worth 80 marks in total (50% of the qualification).',
    },
    {
      id: 'edex-lt-a13',
      question:
        'Which of these is NOT an Edexcel set text for 19th-century novel?',
      options: [
        'Great Expectations',
        'Jane Eyre',
        'Wuthering Heights',
        'Frankenstein',
      ],
      correct: 2,
      explanation:
        'Wuthering Heights is not on the Edexcel 1ET0 set text list. The options are Jane Eyre, Great Expectations, Dr Jekyll and Mr Hyde, A Christmas Carol, Pride and Prejudice, Silas Marner, and Frankenstein.',
    },
    {
      id: 'edex-lt-a14',
      question:
        'What paragraph structure is recommended for Edexcel literature essays?',
      options: ['PEE', 'PETAL', 'WHAT–HOW–WHY', 'Introduction–Body–Conclusion'],
      correct: 2,
      explanation:
        'WHAT–HOW–WHY helps you make a point (WHAT), support it with evidence and analysis (HOW), and explain its significance (WHY). It encourages analytical depth over mechanical formulas.',
    },
    {
      id: 'edex-lt-a15',
      question:
        'How should context be incorporated in a top-band response?',
      options: [
        'In a separate introductory paragraph',
        'Only in the conclusion',
        'Integrated naturally into analytical paragraphs',
        'Context is not assessed in any Edexcel question',
      ],
      correct: 2,
      explanation:
        'The Edexcel mark scheme rewards context that is "convincingly linked" to the response — woven into analytical paragraphs, not isolated in its own section.',
    },
    {
      id: 'edex-lt-a16',
      question:
        'How many SPaG bands are there in the Edexcel mark scheme?',
      options: ['Two bands', 'Three bands', 'Four bands', 'Five bands'],
      correct: 1,
      explanation:
        'There are three SPaG bands: Band 1 (1–2 marks), Band 2 (3–5 marks), and Band 3 (6–8 marks).',
    },
    {
      id: 'edex-lt-a17',
      question:
        'What does "judicious use of precise references" mean?',
      options: [
        'Using references from legal texts',
        'Quoting entire paragraphs',
        'Choosing short, well-selected quotations that directly support your point',
        'Including at least ten quotations per paragraph',
      ],
      correct: 2,
      explanation:
        '"Judicious" means wisely chosen. The mark scheme rewards carefully selected, precise references that directly support your analytical argument.',
    },
    {
      id: 'edex-lt-a18',
      question:
        'How long is Component 2 of the Edexcel Literature exam?',
      options: [
        '1 hour 30 minutes',
        '1 hour 45 minutes',
        '2 hours',
        '2 hours 15 minutes',
      ],
      correct: 3,
      explanation:
        'Component 2 (19th-Century Novel and Poetry since 1789) is 2 hours 15 minutes long, worth 80 marks (50% of the total).',
    },
    {
      id: 'edex-lt-a19',
      question:
        'Why is it important to track a theme across the beginning, middle, and end of a text?',
      options: [
        'It makes your essay longer',
        'It shows whole-text knowledge and demonstrates how the writer develops ideas',
        'The mark scheme requires exactly three paragraphs',
        'It is only needed for the Shakespeare question',
      ],
      correct: 1,
      explanation:
        'Tracking a theme across the whole text demonstrates breadth of knowledge and shows the examiner that you understand how the writer develops ideas across the narrative arc.',
    },
    {
      id: 'edex-lt-a20',
      question:
        'Which of these is an Edexcel post-1914 set text?',
      options: [
        'Of Mice and Men',
        'Never Let Me Go',
        'Blood Brothers',
        'The Great Gatsby',
      ],
      correct: 2,
      explanation:
        'Blood Brothers by Willy Russell is on the Edexcel post-1914 set text list. Of Mice and Men, Never Let Me Go, and The Great Gatsby are not Edexcel 1ET0 options.',
    },
  ],
};

// ============================================================
// COURSE 2: EDEXCEL GCSE LITERATURE — POETRY
// ============================================================

const edexcelGcseLitPoetry = {
  id: 'edexcel-gcse-lit-poetry',
  title: 'Edexcel GCSE Literature: Poetry (1ET0)',
  subtitle:
    'Conquer anthology comparisons and unseen poetry for the Edexcel exam.',
  tier: 'GCSE',
  board: 'Edexcel',
  specId: 'gcse-lit',
  specCode: '1ET0',
  price: 39,
  duration: '3-5 hours',
  level: 'GCSE (Years 10-11)',
  description:
    'Master the poetry sections of Edexcel GCSE English Literature Component 2. Learn to analyse and compare poems from the four Edexcel anthology collections (Relationships, Conflict, Time and Place, Belonging), and develop confident strategies for unseen poetry comparison. Every module is tailored to the 1ET0 mark scheme.',
  color: '#dc2626',

  moduleList: [
    // ──────────────────────────────────────────────
    // MODULE 1
    // ──────────────────────────────────────────────
    {
      id: 'edex-lp-m1',
      title: 'Understanding the Edexcel Poetry Anthology',
      duration: '30 mins',
      content: `
<p>The Edexcel poetry anthology is fundamentally different from AQA's. While AQA offers a single collection (<em>Power and Conflict</em>), Edexcel provides <strong>four thematic collections</strong> to choose from:</p>
<ul>
  <li><span class="key-term">Relationships</span></li>
  <li><span class="key-term">Conflict</span></li>
  <li><span class="key-term">Time and Place</span></li>
  <li><span class="key-term">Belonging</span></li>
</ul>
<p>Each collection contains <strong>15 poems</strong>. Your school will have chosen one collection, and you must know all the poems within it.</p>

<h3>How the Anthology Is Examined</h3>
<p>The anthology question appears in <span class="key-term">Component 2, Section B, Part 1</span>. It is worth <strong>20 marks</strong> and is assessed on <span class="key-term">AO2</span> (analysis of language, form, and structure) and <span class="key-term">AO3</span> (context). The question format is:</p>
<ul>
  <li>The examiner <strong>names one poem</strong> from your collection and prints it on the paper.</li>
  <li>You must <strong>compare</strong> the named poem with <strong>one other poem of your choice</strong> from the same collection.</li>
</ul>

<div class="examiner-tip">Because the examiner names one poem for you, you cannot predict which poem will come up. You must know all 15 poems well enough to write about any of them. However, you choose the second poem — so have two or three "go-to" poems that you know inside out and can pair with almost any theme.</div>

<h3>Key Differences from AQA Poetry</h3>
<p>Understanding these differences prevents you from studying the wrong skills:</p>
<ul>
  <li>AQA prints both poems (named + one for comparison from the cluster). Edexcel prints <strong>only the named poem</strong> — you must recall the comparison poem from memory.</li>
  <li>AQA assesses AO1, AO2, and AO3 on the anthology question. Edexcel assesses <strong>AO2 and AO3 only</strong> — meaning language analysis and context are the priority, not a general critical response.</li>
  <li>AQA has one cluster. Edexcel has <strong>four collections</strong>, so exam preparation depends entirely on which one your school teaches.</li>
</ul>

<div class="common-mistake">Do not assume that revision resources for "GCSE poetry" will cover your Edexcel collection. Many online resources focus on AQA's Power and Conflict. Always check that materials match your specific Edexcel collection.</div>

<p>In the following modules, you will learn how to analyse individual poems, compare them effectively, and tackle the unseen poetry section.</p>
`,
      quiz: [
        {
          id: 'edex-lp-m1-q1',
          question:
            'How many poetry collections does the Edexcel anthology offer?',
          options: ['One', 'Two', 'Four', 'Six'],
          correct: 2,
          explanation:
            'Edexcel offers four thematic collections: Relationships, Conflict, Time and Place, and Belonging. This contrasts with AQA, which offers only one cluster (Power and Conflict).',
        },
        {
          id: 'edex-lp-m1-q2',
          question:
            'Which Assessment Objectives are tested on the Edexcel anthology comparison?',
          options: [
            'AO1 and AO2',
            'AO2 and AO3',
            'AO1, AO2, and AO3',
            'AO2 and AO4',
          ],
          correct: 1,
          explanation:
            'The Edexcel anthology comparison is assessed on AO2 (language, form, and structure analysis) and AO3 (context).',
        },
        {
          id: 'edex-lp-m1-q3',
          question:
            'In the Edexcel anthology question, how many poems are printed on the exam paper?',
          options: [
            'Both poems are printed',
            'Only the named poem is printed',
            'Neither poem is printed',
            'All 15 poems are printed',
          ],
          correct: 1,
          explanation:
            'Only the named poem is printed. You must recall your chosen comparison poem from memory, which is why thorough knowledge of all poems in your collection is essential.',
        },
        {
          id: 'edex-lp-m1-q4',
          question:
            'Why should you have "go-to" poems prepared for the anthology comparison?',
          options: [
            'The examiner always names the same poem',
            'You choose the second poem, so having versatile poems ready saves planning time',
            'You can only write about poems you have memorised',
            'The mark scheme requires you to name your poem in the introduction',
          ],
          correct: 1,
          explanation:
            'Since you choose the comparison poem, having two or three well-prepared poems that connect to multiple themes means you can respond confidently to any named poem.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 2
    // ──────────────────────────────────────────────
    {
      id: 'edex-lp-m2',
      title: 'Analysing Individual Poems: SMILE and Beyond',
      duration: '35 mins',
      content: `
<p>Before you can compare poems, you need to be able to analyse a single poem in depth. The <span class="key-term">SMILE framework</span> (Structure, Meaning, Imagery, Language, Effect) is a useful starting point, but for top-band marks on Edexcel you need to go further.</p>

<h3>SMILE as a Foundation</h3>
<ul>
  <li><strong>S — Structure</strong>: stanza form, line length, enjambment, caesura, volta (a turn or shift in the poem).</li>
  <li><strong>M — Meaning</strong>: surface meaning and deeper themes.</li>
  <li><strong>I — Imagery</strong>: metaphor, simile, personification, symbolism.</li>
  <li><strong>L — Language</strong>: word choice (diction), tone, register, sound devices (alliteration, sibilance, assonance).</li>
  <li><strong>E — Effect</strong>: impact on the reader; the poet's purpose.</li>
</ul>

<h3>Going Beyond SMILE</h3>
<p>To reach the top band on Edexcel (AO2), you need <span class="key-term">"perceptive, detailed analysis"</span>. This means:</p>
<ul>
  <li><strong>Zooming into individual words</strong> — explore connotations, ambiguity, and alternative readings.</li>
  <li><strong>Discussing form</strong> — is the poem a sonnet, dramatic monologue, free verse? How does the form relate to the content?</li>
  <li><strong>Examining structural choices</strong> — how does the poem begin and end? Is there a shift in tone or perspective? Where is the climax?</li>
</ul>

<div class="text-extract">
  Half a league, half a league,<br>
  Half a league onward,<br>
  All in the valley of Death<br>
  Rode the six hundred.
  <div class="source">— Alfred, Lord Tennyson, "The Charge of the Light Brigade"</div>
</div>

<p>Applying analysis beyond SMILE: the <strong>dactylic rhythm</strong> ("HALF a league") mimics the galloping of horses, making the reader feel the physical momentum of the charge. The <strong>repetition</strong> of "half a league" three times creates a sense of unstoppable forward motion. The capitalisation of "Death" personifies it, turning the valley into a living, consuming force — foreshadowing the fate of the soldiers.</p>

<div class="examiner-tip">When analysing for Edexcel, always connect your analysis to AO3 (context) where relevant. For the anthology question, a brief contextual point about the poet's life, the historical period, or the social context of the poem can elevate your response from "clear" to "perceptive."</div>

<div class="common-mistake">Do not analyse every line of a poem. Select three or four rich moments and explore them in depth. Quality of analysis always matters more than quantity.</div>

<div class="model-answer">Tennyson's use of dactylic metre in "Half a league, half a league" replicates the relentless rhythm of a cavalry charge, immersing the reader in the soldiers' experience. The repetition suggests both determination and helplessness — the soldiers cannot turn back. The phrase "valley of Death," capitalised to echo Psalm 23, transforms a geographical location into a biblical landscape of sacrifice, positioning the soldiers as martyrs rather than victims.</div>
`,
      quiz: [
        {
          id: 'edex-lp-m2-q1',
          question: 'What does the "S" in SMILE stand for?',
          options: ['Simile', 'Structure', 'Symbolism', 'Sound'],
          correct: 1,
          explanation:
            'In the SMILE framework, S stands for Structure — how the poem is arranged, including stanza form, line length, and structural shifts.',
        },
        {
          id: 'edex-lp-m2-q2',
          question:
            'What does the Edexcel top band require beyond basic SMILE analysis?',
          options: [
            'Longer essays with more quotations',
            'Perceptive, detailed analysis including word-level exploration and discussion of form',
            'A biography of the poet',
            'Comparison with at least three other poems',
          ],
          correct: 1,
          explanation:
            'The top band requires "perceptive, detailed analysis" — this means zooming into individual words, discussing form, and examining structural choices beyond what SMILE alone covers.',
        },
        {
          id: 'edex-lp-m2-q3',
          question: 'What is a volta in poetry?',
          options: [
            'A type of rhyme scheme',
            'A turn or shift in the poem\'s tone, argument, or perspective',
            'The title of a poem',
            'A poetic form from Italy',
          ],
          correct: 1,
          explanation:
            'A volta is a turn or shift in a poem — a change in tone, argument, or perspective that often marks a key moment in the poem\'s development.',
        },
        {
          id: 'edex-lp-m2-q4',
          question:
            'Why should you select only three or four moments to analyse in a poem?',
          options: [
            'The mark scheme limits you to four quotations',
            'Quality of analysis matters more than quantity',
            'Poems only have three or four techniques',
            'You do not have time to read the whole poem',
          ],
          correct: 1,
          explanation:
            'Selecting a few rich moments allows you to analyse in depth. The mark scheme rewards detailed, perceptive analysis over a superficial survey of every line.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 3
    // ──────────────────────────────────────────────
    {
      id: 'edex-lp-m3',
      title: 'Comparing Anthology Poems',
      duration: '40 mins',
      content: `
<p>The <span class="key-term">anthology comparison</span> in Component 2, Section B, Part 1 is worth <strong>20 marks</strong>. The examiner names one poem and you compare it with another from the same collection. Success depends on three skills: choosing the right comparison poem, structuring your comparison, and balancing AO2 with AO3.</p>

<h3>Choosing Your Comparison Poem</h3>
<p>When you see the named poem, ask yourself:</p>
<ol>
  <li>What is the <strong>theme</strong> of this poem? Which other poems share this theme?</li>
  <li>Are there <strong>contrasts</strong> in how poets approach the theme? (Contrasts often produce richer comparisons than similarities.)</li>
  <li>Which of my "go-to" poems has the most interesting points of comparison?</li>
</ol>

<div class="examiner-tip">The best comparisons find both similarities and differences. A response that only lists similarities feels descriptive; one that explores how two poets approach the same theme differently feels analytical. Aim for a balance: "Both poets explore X, but while Poet A uses Y to suggest Z, Poet B uses W to imply V."</div>

<h3>Structuring a Comparative Response</h3>
<p>There are two main approaches:</p>
<ul>
  <li><strong>Alternating structure</strong>: Each paragraph discusses both poems, moving between them point by point. This keeps the comparison tight and integrated.</li>
  <li><strong>Block structure</strong>: Discuss one poem fully, then the other, with a comparative conclusion. This is simpler but can feel disconnected.</li>
</ul>
<p>For Edexcel, the <strong>alternating structure</strong> is recommended because it produces the "sustained comparison" the mark scheme rewards.</p>

<div class="model-answer">Both "Sonnet 43" and "La Belle Dame Sans Merci" present love as an overwhelming force, yet they differ in their portrayal of its effects. Barrett Browning's speaker declares "I love thee to the depth and breadth and height / My soul can reach," using spatial metaphors and the regularity of the Petrarchan sonnet form to suggest that love brings order and fulfilment. In contrast, Keats presents love as destructive: the knight is found "Alone and palely loitering," where the adjective "palely" and the present participle "loitering" suggest a figure drained of vitality and purpose. Barrett Browning, writing in the Victorian era, frames love within the socially acceptable structure of marriage; Keats, influenced by Romantic ideals, explores love as a dangerous encounter with the sublime.</div>

<h3>Balancing AO2 and AO3</h3>
<p>Remember that this question assesses <strong>AO2 and AO3</strong>. Your analysis of language, form, and structure (AO2) should form the bulk of your response, with contextual points (AO3) woven in to add depth. A good rule of thumb: for every two or three AO2 sentences, include one AO3 observation.</p>

<div class="common-mistake">Do not write about the two poems in complete isolation. Every paragraph should make an explicit comparison — use comparative connectives like "similarly," "in contrast," "whereas," and "both poets."</div>
`,
      quiz: [
        {
          id: 'edex-lp-m3-q1',
          question:
            'Which structure is recommended for the Edexcel anthology comparison?',
          options: [
            'Block structure (one poem then the other)',
            'Alternating structure (both poems in each paragraph)',
            'Chronological structure (oldest poem first)',
            'Random structure (whatever comes to mind)',
          ],
          correct: 1,
          explanation:
            'The alternating structure is recommended because it produces the "sustained comparison" that the Edexcel mark scheme rewards, keeping both poems in dialogue throughout.',
        },
        {
          id: 'edex-lp-m3-q2',
          question:
            'Why do contrasts often produce richer comparisons than similarities?',
          options: [
            'The mark scheme only rewards differences',
            'Contrasts allow you to explore how poets approach the same theme differently, showing analytical depth',
            'Similarities are too easy to find',
            'The examiner prefers negative analysis',
          ],
          correct: 1,
          explanation:
            'Exploring contrasts shows that you can analyse how different poets use different methods to engage with the same theme, which demonstrates the analytical depth the top band requires.',
        },
        {
          id: 'edex-lp-m3-q3',
          question:
            'What is the recommended balance between AO2 and AO3 in the anthology comparison?',
          options: [
            'Equal amounts of both',
            'AO2 should form the bulk, with AO3 woven in for depth',
            'AO3 should dominate',
            'Only AO2 matters',
          ],
          correct: 1,
          explanation:
            'AO2 (language, form, and structure analysis) should form the core of your response, with AO3 (context) integrated to add depth. For every two or three AO2 sentences, include one AO3 observation.',
        },
        {
          id: 'edex-lp-m3-q4',
          question:
            'What should you do in every paragraph of a comparison essay?',
          options: [
            'Discuss only one poem per paragraph',
            'Include a biographical fact about the poet',
            'Make an explicit comparison using comparative connectives',
            'Quote at least five lines from each poem',
          ],
          correct: 2,
          explanation:
            'Every paragraph should make an explicit comparison between the two poems, using connectives like "similarly," "in contrast," "whereas," and "both poets" to keep the comparison sustained.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 4
    // ──────────────────────────────────────────────
    {
      id: 'edex-lp-m4',
      title: 'Unseen Poetry: First Reading Strategies',
      duration: '30 mins',
      content: `
<p><span class="key-term">Component 2, Section B, Part 2</span> presents you with <strong>two unseen contemporary poems</strong> and asks you to compare them. This is worth <strong>20 marks</strong>, assessed on <span class="key-term">AO1</span> (critical response with textual references) and <span class="key-term">AO2</span> (analysis of language, form, and structure).</p>

<h3>How Edexcel Unseen Poetry Differs from AQA</h3>
<p>On AQA, unseen poetry is split into two questions: one on a single poem (24 marks) and one short comparison (8 marks). On Edexcel, you write <strong>one comparative response</strong> on two poems. This means comparison skills are essential from the start.</p>

<div class="examiner-tip">You have no prior knowledge of these poems, so your first reading is crucial. Spend a full 10 minutes reading and annotating both poems before you write a single sentence. Students who rush into writing often misread the poems and cannot recover.</div>

<h3>A Strategy for First Reading</h3>
<p>Follow these steps for each poem:</p>
<ol>
  <li><strong>Read the title</strong> — it often signals the subject or theme.</li>
  <li><strong>Read the poem through once</strong> without writing anything. Let the overall impression settle.</li>
  <li><strong>Read again and annotate</strong>:</li>
  <ul>
    <li>Circle striking words or images.</li>
    <li>Underline any shifts in tone or perspective.</li>
    <li>Note the form — how many stanzas? Regular or irregular? Rhyme?</li>
    <li>Write a one-sentence summary of what the poem is about.</li>
  </ul>
  <li><strong>Identify connections</strong> — after annotating both poems, jot down two or three points of comparison (similarities and differences).</li>
</ol>

<h3>What If You Don't Understand the Poem?</h3>
<p>It is normal to feel uncertain about an unseen poem. If this happens:</p>
<ul>
  <li>Focus on what you <em>can</em> understand — even one clear image or phrase gives you material to analyse.</li>
  <li>Look at the <strong>final lines</strong> — poets often place their key idea or resolution at the end.</li>
  <li>Consider the <strong>tone</strong> — even if you cannot paraphrase the poem, you can often identify whether it feels sad, angry, celebratory, or reflective.</li>
</ul>

<div class="common-mistake">Do not panic if the poems feel difficult. The mark scheme rewards "engagement" with the text — even tentative analysis ("This could suggest...") is better than no analysis. Examiners are looking for your ability to explore meaning, not to produce a "correct" interpretation.</div>

<div class="text-extract">
  She counted the bruises like coins,<br>
  each one a currency of silence.
  <div class="source">— Original example for annotation practice</div>
</div>

<p>Even from two lines, you can identify a <strong>simile</strong> ("like coins"), a <strong>metaphor</strong> ("currency of silence"), and infer a theme of hidden suffering. The word "counted" suggests ritual or resignation, while "currency" implies that silence has a cost — perhaps the speaker pays for safety with secrecy.</p>
`,
      quiz: [
        {
          id: 'edex-lp-m4-q1',
          question:
            'How many unseen poems are given in the Edexcel exam?',
          options: ['One poem', 'Two poems', 'Three poems', 'Four poems'],
          correct: 1,
          explanation:
            'Edexcel presents two unseen contemporary poems and asks you to compare them in a single response.',
        },
        {
          id: 'edex-lp-m4-q2',
          question:
            'Which Assessment Objectives are tested on the unseen poetry question?',
          options: [
            'AO1 and AO2',
            'AO2 and AO3',
            'AO1, AO2, and AO3',
            'AO2 only',
          ],
          correct: 0,
          explanation:
            'The unseen poetry comparison is assessed on AO1 (critical response with textual references) and AO2 (analysis of language, form, and structure). AO3 (context) is not assessed here because the poems are unseen.',
        },
        {
          id: 'edex-lp-m4-q3',
          question:
            'How long should you spend reading and annotating the unseen poems before writing?',
          options: [
            '2 minutes',
            '5 minutes',
            '10 minutes',
            '15 minutes',
          ],
          correct: 2,
          explanation:
            'Spend a full 10 minutes reading and annotating both poems. Rushing into writing often leads to misreadings that are difficult to correct.',
        },
        {
          id: 'edex-lp-m4-q4',
          question:
            'What should you do if you find an unseen poem difficult to understand?',
          options: [
            'Skip it and focus on the other poem',
            'Write that you do not understand the poem',
            'Focus on what you can understand and explore possible meanings tentatively',
            'Copy out the poem to fill space',
          ],
          correct: 2,
          explanation:
            'Focus on what you can understand — even one image or phrase gives you material. Tentative exploration ("This could suggest...") is rewarded by the mark scheme.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 5
    // ──────────────────────────────────────────────
    {
      id: 'edex-lp-m5',
      title: 'Unseen Poetry Comparison',
      duration: '35 mins',
      content: `
<p>Now that you can read and annotate unseen poems, the next step is writing a <span class="key-term">comparative response</span>. The Edexcel unseen poetry question asks you to compare two poems, and your response should be a sustained, integrated comparison — not two separate analyses.</p>

<h3>Planning Your Comparison</h3>
<p>After annotating both poems, identify <strong>two or three points of comparison</strong>. These might be:</p>
<ul>
  <li><strong>Theme</strong> — Do both poems explore the same idea? How do they differ in their perspective?</li>
  <li><strong>Tone and mood</strong> — Is one poem angry and the other reflective? One hopeful and the other resigned?</li>
  <li><strong>Methods</strong> — Do both poets use imagery, but in different ways? Does one use regular form while the other uses free verse?</li>
</ul>

<div class="examiner-tip">The strongest unseen poetry responses compare methods, not just themes. Saying "both poems are about loss" is descriptive. Saying "both poets explore loss, but Poet A uses a tightly controlled sonnet form to suggest containment of grief while Poet B uses fragmented free verse to convey emotional disintegration" is analytical.</div>

<h3>Writing the Response</h3>
<p>Use the <strong>alternating structure</strong>: each paragraph discusses both poems. A model paragraph might follow this pattern:</p>
<ol>
  <li>State a point of comparison (theme, method, or effect).</li>
  <li>Analyse how Poem 1 handles this, with a quotation and close reading.</li>
  <li>Compare with Poem 2, highlighting similarity or contrast, with a quotation and close reading.</li>
  <li>Reflect on the overall effect of the difference or similarity.</li>
</ol>

<div class="model-answer">Both poets explore the theme of memory, yet they present it through contrasting imagery. In Poem 1, the speaker describes memories as "pressed flowers between the pages of a book," a simile that suggests memories are preserved, beautiful, and fragile — kept safe but no longer alive. In contrast, Poem 2 presents memories as "a tide that won't stop pulling," where the metaphor of the tide implies that memories are powerful, involuntary, and potentially overwhelming. While Poem 1's speaker seems at peace with the past, Poem 2's speaker is struggling against it, suggesting that the relationship between memory and the present is more troubled.</div>

<h3>Timing</h3>
<p>You have approximately <strong>40 minutes</strong> for this question. Spend 10 minutes reading and annotating, and 30 minutes writing. Aim for three to four comparative paragraphs.</p>

<div class="common-mistake">Do not write about Poem 1 for half your response and then Poem 2 for the other half. This "block" approach makes it hard to sustain comparison. The mark scheme rewards responses where both poems are discussed throughout.</div>

<p>Remember: AO3 (context) is <strong>not assessed</strong> on the unseen poetry question. Do not waste time speculating about when the poems were written or who the poets are. Focus entirely on what is on the page.</p>
`,
      quiz: [
        {
          id: 'edex-lp-m5-q1',
          question:
            'What makes a strong unseen poetry comparison according to the Edexcel mark scheme?',
          options: [
            'Discussing the poets\' biographies',
            'Comparing methods, not just themes',
            'Writing about each poem separately',
            'Identifying as many techniques as possible',
          ],
          correct: 1,
          explanation:
            'The strongest responses compare how poets use different methods to explore similar themes, rather than simply stating that both poems are about the same subject.',
        },
        {
          id: 'edex-lp-m5-q2',
          question:
            'Is AO3 (context) assessed on the unseen poetry question?',
          options: [
            'Yes, you must discuss historical context',
            'Yes, but only for top-band marks',
            'No, AO3 is not assessed on unseen poetry',
            'Only if the poems are pre-1900',
          ],
          correct: 2,
          explanation:
            'AO3 is not assessed on the unseen poetry comparison. Focus entirely on AO1 (critical response) and AO2 (analysis of language, form, and structure).',
        },
        {
          id: 'edex-lp-m5-q3',
          question:
            'How many comparative paragraphs should you aim for?',
          options: [
            'One long paragraph',
            'Two paragraphs',
            'Three to four paragraphs',
            'Six or more paragraphs',
          ],
          correct: 2,
          explanation:
            'Three to four well-developed comparative paragraphs give you enough scope to explore multiple points of comparison in depth within the 30 minutes of writing time.',
        },
        {
          id: 'edex-lp-m5-q4',
          question:
            'What is the recommended structure for each paragraph?',
          options: [
            'Poem 1 analysis only, then Poem 2 analysis only in the next paragraph',
            'Point of comparison, analyse Poem 1, compare with Poem 2, reflect on effect',
            'Introduction, three PEE chains, conclusion',
            'Context, quotation, technique name',
          ],
          correct: 1,
          explanation:
            'Each paragraph should state a point of comparison, analyse it in Poem 1 with a quotation, compare with Poem 2 with a quotation, and reflect on the effect of the similarity or difference.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 6
    // ──────────────────────────────────────────────
    {
      id: 'edex-lp-m6',
      title: 'Writing the Perfect Poetry Essay for Edexcel',
      duration: '35 mins',
      content: `
<p>This module brings together everything you have learned and focuses on the specific skills needed to produce a <span class="key-term">top-band poetry essay</span> for Edexcel. Whether you are writing about the anthology or unseen poems, the principles are the same.</p>

<h3>What the Mark Scheme Rewards</h3>
<p>At the top band, the Edexcel poetry mark scheme looks for:</p>
<ul>
  <li><strong>AO2</strong>: "Perceptive, detailed analysis of the ways in which writers use language, form, and structure to create meanings and effects."</li>
  <li><strong>AO3</strong> (anthology only): "Perceptive understanding of the significance and influence of contexts."</li>
  <li><strong>AO1</strong> (unseen only): "Critical, exploratory, conceptualised response" with "judicious textual references."</li>
</ul>

<h3>Techniques for Elevating Your Analysis</h3>
<p>Move beyond naming techniques. Use these strategies:</p>
<ul>
  <li><span class="key-term">Explore ambiguity</span> — "The word X could suggest Y, but it might also imply Z." This shows the examiner that you recognise complexity.</li>
  <li><span class="key-term">Discuss the effect on the reader</span> — "This creates a sense of unease" or "The reader is positioned to sympathise with..." Connecting analysis to reader response demonstrates AO2 at its best.</li>
  <li><span class="key-term">Link form to meaning</span> — "The poet's use of a sonnet form, traditionally associated with love, is subverted here to explore conflict, creating tension between the form and the content."</li>
</ul>

<div class="model-answer">Duffy's decision to write "Valentine" as a free-verse poem, rejecting the traditional sonnet form associated with love poetry, mirrors the speaker's rejection of conventional romantic gestures. The irregular line lengths — from the blunt "Not a red rose" to the expansive "Its platinum loops shrink to a wedding ring" — reflect the unpredictable, uncontrollable nature of real love. The lack of a regular rhyme scheme reinforces the idea that genuine emotion cannot be contained within neat, expected patterns.</div>

<div class="examiner-tip">When comparing poems, the strongest responses do not just say "Poet A and Poet B both use metaphor." They explain how the metaphors work differently and what this reveals about each poet's perspective. Comparative analysis of method — not just theme — is what separates the top band from the middle.</div>

<h3>Final Checklist Before the Exam</h3>
<p>Before you sit Component 2, make sure you can:</p>
<ul>
  <li>Recall key quotations from at least 8–10 anthology poems.</li>
  <li>Identify your 2–3 "go-to" comparison poems and explain why they are versatile.</li>
  <li>Annotate an unseen poem in under 5 minutes.</li>
  <li>Write a comparative paragraph in under 8 minutes.</li>
  <li>Distinguish between AO2 (language analysis) and AO3 (context) — and know which is assessed where.</li>
</ul>

<div class="common-mistake">In the final weeks before the exam, do not try to learn new poems. Instead, deepen your knowledge of the ones you already know. Practise writing about them under timed conditions. Familiarity breeds confidence, and confidence produces fluent, assured essays.</div>
`,
      quiz: [
        {
          id: 'edex-lp-m6-q1',
          question:
            'What does "exploring ambiguity" mean in a poetry essay?',
          options: [
            'Saying you are confused by the poem',
            'Offering multiple possible interpretations of a word or image',
            'Disagreeing with the poet\'s message',
            'Using ambiguous language in your own writing',
          ],
          correct: 1,
          explanation:
            'Exploring ambiguity means offering multiple possible interpretations — "X could suggest Y, but might also imply Z." This demonstrates sophisticated engagement with the text.',
        },
        {
          id: 'edex-lp-m6-q2',
          question:
            'How many anthology poems should you be able to recall quotations from?',
          options: ['3–4 poems', '5–7 poems', '8–10 poems', 'All 15 poems'],
          correct: 2,
          explanation:
            'You should know quotations from at least 8–10 poems. While knowing all 15 is ideal, having strong knowledge of 8–10 ensures you can always find a suitable comparison poem.',
        },
        {
          id: 'edex-lp-m6-q3',
          question:
            'What separates top-band comparative analysis from mid-band?',
          options: [
            'Top band uses longer quotations',
            'Top band compares methods, not just themes',
            'Top band only discusses differences',
            'Top band includes more context',
          ],
          correct: 1,
          explanation:
            'Top-band responses compare how poets use different methods (language, form, structure) to explore themes, rather than simply noting that both poems are about the same subject.',
        },
        {
          id: 'edex-lp-m6-q4',
          question:
            'What should you focus on in the final weeks before the exam?',
          options: [
            'Learning new poems you have never seen before',
            'Deepening knowledge of poems you already know through timed practice',
            'Memorising the mark scheme word for word',
            'Reading as many revision guides as possible',
          ],
          correct: 1,
          explanation:
            'In the final weeks, deepen your knowledge of familiar poems through timed practice rather than trying to learn new material. Familiarity breeds the confidence needed for fluent, assured exam writing.',
        },
      ],
    },
  ],

  // ──────────────────────────────────────────────
  // ASSESSMENT QUESTIONS
  // ──────────────────────────────────────────────
  assessmentQuestions: [
    {
      id: 'edex-lp-a1',
      question:
        'How many poetry collections does the Edexcel anthology offer?',
      options: ['One', 'Two', 'Four', 'Six'],
      correct: 2,
      explanation:
        'Edexcel offers four collections: Relationships, Conflict, Time and Place, and Belonging.',
    },
    {
      id: 'edex-lp-a2',
      question:
        'Which Assessment Objectives are tested on the Edexcel anthology comparison?',
      options: ['AO1 and AO2', 'AO2 and AO3', 'AO1, AO2, and AO3', 'AO1 only'],
      correct: 1,
      explanation:
        'The anthology comparison tests AO2 (language, form, and structure) and AO3 (context).',
    },
    {
      id: 'edex-lp-a3',
      question:
        'In the anthology question, how many poems are printed on the exam paper?',
      options: [
        'Both poems',
        'Only the named poem',
        'Neither poem',
        'All poems in the collection',
      ],
      correct: 1,
      explanation:
        'Only the named poem is printed. You must recall your chosen comparison poem from memory.',
    },
    {
      id: 'edex-lp-a4',
      question: 'What does the "M" in SMILE stand for?',
      options: ['Metaphor', 'Meaning', 'Mood', 'Metre'],
      correct: 1,
      explanation:
        'In SMILE, M stands for Meaning — both the surface meaning and deeper themes of the poem.',
    },
    {
      id: 'edex-lp-a5',
      question: 'What is a volta?',
      options: [
        'A type of rhyme scheme',
        'A turn or shift in a poem',
        'A verse form from Italy',
        'A sound device',
      ],
      correct: 1,
      explanation:
        'A volta is a turn or shift in the poem\'s tone, argument, or perspective — often a key structural moment.',
    },
    {
      id: 'edex-lp-a6',
      question:
        'Which structure is best for the Edexcel anthology comparison?',
      options: [
        'Block structure',
        'Alternating structure',
        'Chronological structure',
        'Single-paragraph structure',
      ],
      correct: 1,
      explanation:
        'The alternating structure — discussing both poems in each paragraph — produces the sustained comparison the Edexcel mark scheme rewards.',
    },
    {
      id: 'edex-lp-a7',
      question:
        'How many unseen poems are given in the Edexcel exam?',
      options: ['One', 'Two', 'Three', 'Four'],
      correct: 1,
      explanation:
        'Edexcel presents two unseen contemporary poems and asks you to compare them.',
    },
    {
      id: 'edex-lp-a8',
      question:
        'Which AOs are tested on the unseen poetry comparison?',
      options: ['AO1 and AO2', 'AO2 and AO3', 'AO1 and AO3', 'AO2 only'],
      correct: 0,
      explanation:
        'The unseen poetry comparison tests AO1 (critical response) and AO2 (analysis of language, form, and structure). AO3 is not assessed because the poems are unseen.',
    },
    {
      id: 'edex-lp-a9',
      question:
        'How long should you spend reading and annotating the unseen poems?',
      options: ['2 minutes', '5 minutes', '10 minutes', '20 minutes'],
      correct: 2,
      explanation:
        'Spend 10 minutes reading and annotating both poems before writing to ensure a strong understanding.',
    },
    {
      id: 'edex-lp-a10',
      question:
        'What does "perceptive, detailed analysis" mean in the top band?',
      options: [
        'Writing at great length',
        'Showing insight beyond the obvious with close word-level analysis',
        'Using the most complex vocabulary possible',
        'Identifying every technique in the poem',
      ],
      correct: 1,
      explanation:
        '"Perceptive, detailed analysis" means showing insight beyond surface reading — exploring connotations, ambiguity, and the effects of specific word choices.',
    },
    {
      id: 'edex-lp-a11',
      question:
        'Why should you compare methods rather than just themes?',
      options: [
        'The mark scheme only rewards discussion of methods',
        'Comparing methods shows analytical depth and is characteristic of top-band responses',
        'Themes are not important in poetry',
        'Methods are easier to identify',
      ],
      correct: 1,
      explanation:
        'Comparing how poets use different methods to explore themes demonstrates the analytical depth that distinguishes top-band responses from mid-band ones.',
    },
    {
      id: 'edex-lp-a12',
      question:
        'What should you do if you don\'t understand an unseen poem?',
      options: [
        'Leave the question blank',
        'Focus on what you can understand and explore possible meanings tentatively',
        'Write about a different poem you have studied',
        'Copy out the poem',
      ],
      correct: 1,
      explanation:
        'Focus on what you can understand. Even tentative analysis is rewarded — the mark scheme values engagement and exploration of meaning.',
    },
    {
      id: 'edex-lp-a13',
      question:
        'How does the Edexcel unseen poetry question differ from AQA\'s?',
      options: [
        'Edexcel gives one poem; AQA gives two',
        'Edexcel asks for one comparative response on two poems; AQA splits it into two separate questions',
        'There is no difference',
        'AQA does not include unseen poetry',
      ],
      correct: 1,
      explanation:
        'Edexcel asks for one comparative response on two unseen poems, while AQA splits unseen poetry into two questions: one on a single poem (24 marks) and a short comparison (8 marks).',
    },
    {
      id: 'edex-lp-a14',
      question:
        'What does "exploring ambiguity" demonstrate to an examiner?',
      options: [
        'That you are confused',
        'That you can offer multiple valid interpretations, showing sophisticated engagement',
        'That the poem is badly written',
        'That you disagree with the poet',
      ],
      correct: 1,
      explanation:
        'Exploring ambiguity shows sophisticated engagement — you recognise that words and images can carry multiple meanings, which is a hallmark of perceptive analysis.',
    },
    {
      id: 'edex-lp-a15',
      question:
        'How many marks is the anthology poetry comparison worth?',
      options: ['10 marks', '15 marks', '20 marks', '30 marks'],
      correct: 2,
      explanation:
        'The anthology poetry comparison (Component 2, Section B, Part 1) is worth 20 marks.',
    },
    {
      id: 'edex-lp-a16',
      question:
        'How many marks is the unseen poetry comparison worth?',
      options: ['8 marks', '15 marks', '20 marks', '24 marks'],
      correct: 2,
      explanation:
        'The unseen poetry comparison (Component 2, Section B, Part 2) is worth 20 marks.',
    },
    {
      id: 'edex-lp-a17',
      question:
        'What is the total time for Component 2?',
      options: [
        '1 hour 30 minutes',
        '1 hour 45 minutes',
        '2 hours',
        '2 hours 15 minutes',
      ],
      correct: 3,
      explanation:
        'Component 2 (19th-Century Novel and Poetry since 1789) is 2 hours 15 minutes.',
    },
    {
      id: 'edex-lp-a18',
      question:
        'Which of these is NOT an Edexcel anthology collection?',
      options: ['Relationships', 'Power and Conflict', 'Time and Place', 'Belonging'],
      correct: 1,
      explanation:
        'Power and Conflict is the AQA anthology cluster, not an Edexcel collection. Edexcel\'s four collections are Relationships, Conflict, Time and Place, and Belonging.',
    },
    {
      id: 'edex-lp-a19',
      question:
        'How many poems are in each Edexcel anthology collection?',
      options: ['10 poems', '15 poems', '18 poems', '20 poems'],
      correct: 1,
      explanation:
        'Each of the four Edexcel anthology collections contains 15 poems.',
    },
    {
      id: 'edex-lp-a20',
      question:
        'What should you prioritise in the final weeks before the exam?',
      options: [
        'Learning new poems',
        'Timed practice on poems you already know',
        'Reading literary criticism',
        'Memorising the mark scheme',
      ],
      correct: 1,
      explanation:
        'In the final weeks, deepen your knowledge through timed practice on familiar poems. Familiarity builds the confidence needed for fluent, assured exam writing.',
    },
  ],
};

export { edexcelGcseLitTexts, edexcelGcseLitPoetry };
export default [edexcelGcseLitTexts, edexcelGcseLitPoetry];
