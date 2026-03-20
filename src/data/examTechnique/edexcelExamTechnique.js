const edexcelExamTechnique = {
  id: 'exam-technique-edexcel',
  title: 'Edexcel Exam Technique Masterclass',
  subtitle: 'Paper 1 & Paper 2 — Language & Literature',
  tier: 'GCSE',
  board: 'Edexcel',
  specCode: '1EN2/1ET0',
  price: 29,
  duration: '3 hours',
  level: 'All levels',
  description: 'Master the exact skills Edexcel examiners reward across Language and Literature papers.',
  color: 'from-red-600 to-red-800',

  moduleList: [
    // ── MODULE 1: Paper 1 Q3 Language Analysis ──
    {
      id: 'edexcel-et-mod-1',
      title: 'Paper 1 Q3 Language Analysis',
      duration: '20 min',
      content: `
<h2>Paper 1 Question 3 — Language Analysis the Edexcel Way</h2>

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

<h3>Practical Strategy</h3>

<p>Spend roughly <strong>20 minutes</strong> on Q3. Read the extract twice before writing: once for general understanding, once to annotate language and structural features. Plan three analytical paragraphs, each built around a different aspect of the writer's craft. Use the <strong>What-How-Why</strong> framework: What has the writer done? How have they done it (specific technique and quotation)? Why — what is the effect on the reader? Every paragraph should contain at least one embedded quotation and one piece of subject terminology used to deepen your point rather than merely label it.</p>

<h3>Common Mistakes to Avoid</h3>

<p>Many students lose marks by feature-spotting: "The writer uses a metaphor." This tells the examiner nothing. Instead, explore the connotations of the metaphor, explain what it suggests about the character or setting, and link it to the wider mood of the extract. Another common error is ignoring structure entirely. Even one well-made structural observation — such as noting how the extract moves from calm to chaos, or how the final line echoes the opening — can push your answer into the higher bands.</p>
`,
      quiz: [
        {
          id: 'edexcel-et-m1-q1',
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
          id: 'edexcel-et-m1-q2',
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
          id: 'edexcel-et-m1-q3',
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
          id: 'edexcel-et-m1-q4',
          question: 'What is "feature-spotting" and why should you avoid it?',
          options: [
            'Identifying a technique without analysing its effect — it gains minimal credit',
            'Spotting too many features, which wastes time',
            'Focusing on structure instead of language',
            'Using highlighters during the exam'
          ],
          answer: 0,
          explanation: 'Feature-spotting means simply naming a technique (e.g. "The writer uses a simile") without exploring its connotations or effect on the reader. Examiners want analysis, not identification.'
        }
      ]
    },

    // ── MODULE 2: Paper 2 Q6 Extended Response ──
    {
      id: 'edexcel-et-mod-2',
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

<h3>Avoiding the "Agree and List" Trap</h3>

<p>The most common mistake is to simply state "I agree with this statement" and then list quotations from each text. This is description, not evaluation. To evaluate, you need to interrogate the statement: Is it entirely accurate? Does it apply equally to both writers? Are there moments where a writer's view is more complex than the statement suggests? Examiners want to see you thinking critically, not just retrieving information.</p>

<h3>Time and Planning</h3>

<p>Allocate approximately <strong>25 minutes</strong> to Q6. Spend 3–4 minutes planning your argument before you start writing. Identify two or three quotations from each source and decide in advance where you will agree and where you will challenge the statement. This planning time is not wasted — it produces a far more coherent and persuasive response than diving straight in. Remember that Q6 rewards quality of argument over quantity of quotations: three well-analysed points will outscore six superficial ones every time.</p>
`,
      quiz: [
        {
          id: 'edexcel-et-m2-q1',
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
          id: 'edexcel-et-m2-q2',
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
          id: 'edexcel-et-m2-q3',
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
          id: 'edexcel-et-m2-q4',
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
          id: 'edexcel-et-m2-q5',
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

    // ── MODULE 3: Paper 1 Writing for Purpose ──
    {
      id: 'edexcel-et-mod-3',
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

<h3>Practical Tips</h3>

<p>Spend <strong>5 minutes planning</strong> your response. Decide on 4–5 key points or arguments and the order you will present them. Think about your opening (hook the reader immediately) and your ending (leave a lasting impression). Use discourse markers to guide your reader through your argument: "Furthermore," "However," "Crucially," "Despite this." Vary your sentence lengths deliberately: a short, punchy sentence after a longer complex one creates emphasis and demonstrates control. Finally, leave <strong>5 minutes to proofread</strong> — correcting even a few errors in spelling and punctuation can lift your technical accuracy by a full band.</p>
`,
      quiz: [
        {
          id: 'edexcel-et-m3-q1',
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
          id: 'edexcel-et-m3-q2',
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
          id: 'edexcel-et-m3-q3',
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
          id: 'edexcel-et-m3-q4',
          question: 'How are writing marks split in Edexcel Paper 1 Section B?',
          options: [
            '20 marks for content, 20 marks for accuracy',
            '24 marks for Content and Organisation, 16 marks for Technical Accuracy',
            '30 marks for language, 10 marks for structure',
            '15 marks for ideas, 15 marks for vocabulary, 10 marks for spelling'
          ],
          answer: 1,
          explanation: 'Edexcel splits writing marks into Content and Organisation (24 marks) and Technical Accuracy (16 marks), making both the quality of your ideas and your technical skill equally important.'
        }
      ]
    },

    // ── MODULE 4: Literature Essay Structure ──
    {
      id: 'edexcel-et-mod-4',
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

<h3>Timing Your Literature Essays</h3>

<p>For a 40-mark essay, allocate roughly <strong>45 minutes</strong>: 5 minutes planning, 35 minutes writing, and 5 minutes reviewing. Your plan should identify your thesis, your key points, and the quotations you intend to use. Write in full paragraphs — bullet points or note-form responses are not rewarded. Aim for four to five substantial analytical paragraphs plus an introduction and conclusion.</p>
`,
      quiz: [
        {
          id: 'edexcel-et-m4-q1',
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
          id: 'edexcel-et-m4-q2',
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
          id: 'edexcel-et-m4-q3',
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
          id: 'edexcel-et-m4-q4',
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
          id: 'edexcel-et-m4-q5',
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

    // ── MODULE 5: Poetry Unseen Analysis ──
    {
      id: 'edexcel-et-mod-5',
      title: 'Poetry Unseen Analysis',
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

<h3>Reading the Poem</h3>

<p>Read the poem at least <strong>three times</strong> before writing:</p>
<ol>
  <li><strong>First reading:</strong> Get a general sense of what the poem is about. Do not worry about techniques yet.</li>
  <li><strong>Second reading:</strong> Annotate. Circle striking words, underline imagery, mark structural features, note your emotional responses in the margin.</li>
  <li><strong>Third reading:</strong> Look for patterns and connections. How do the language choices connect to the structure? How does the tone shift? What is the overall message or theme?</li>
</ol>

<h3>Writing Your Response</h3>

<p>You do not need to write about every element of SMILE in equal depth. Choose the features that are most <strong>prominent and interesting</strong> in the specific poem you are given. If the poem's most striking quality is its imagery, spend more time on that. If the structure is unusual, foreground your structural analysis. Examiners reward students who respond to the individual poem in front of them rather than applying a rigid formula mechanically.</p>

<h3>Comparative Unseen Poetry</h3>

<p>Edexcel may also ask you to compare two unseen poems. If so, do not write about Poem A and then Poem B separately. Instead, use a <strong>comparative framework</strong>: identify similarities and differences in theme, tone, imagery, or structure, and write paragraphs that discuss both poems together. Useful comparative connectives include: "Similarly," "In contrast," "While Poem A..., Poem B...," "Both poets...," and "However, the tone in Poem B shifts to..."</p>

<h3>Common Pitfalls</h3>

<p>Avoid paraphrasing the poem line by line — this is retelling, not analysis. Avoid making vague claims like "This creates a nice effect" without specifying what the effect is. And avoid ignoring the title: poets choose their titles deliberately, and the title often provides crucial context for understanding the poem's meaning and purpose.</p>
`,
      quiz: [
        {
          id: 'edexcel-et-m5-q1',
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
          id: 'edexcel-et-m5-q2',
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
          id: 'edexcel-et-m5-q3',
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
          id: 'edexcel-et-m5-q4',
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

    // ── MODULE 6: Time Management ──
    {
      id: 'edexcel-et-mod-6',
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

<h3>How Edexcel Timings Differ from AQA</h3>

<p>AQA English Language papers are 1 hour 45 minutes each, with a simpler two-section format. Edexcel Paper 2, at <strong>2 hours 5 minutes</strong>, is notably longer, giving you more time per mark — but only if you use that time wisely. The danger is complacency: students who feel they have plenty of time often spend too long on early questions and then rush the high-mark writing task at the end. Stick to your timing plan regardless of how much time you think you have left.</p>

<h3>The Golden Rules of Exam Timing</h3>

<ul>
  <li><strong>Marks equal minutes:</strong> A rough rule is to spend approximately one minute per mark, plus reading time. This is a guide, not a rigid formula.</li>
  <li><strong>Never leave a question blank:</strong> Even a brief response will pick up some marks. A blank answer scores zero.</li>
  <li><strong>Wear a watch:</strong> Do not rely on the exam hall clock. Write your target finish time for each question at the top of the paper before you start.</li>
  <li><strong>Protect your writing time:</strong> The writing section carries the most marks (40). Do not let reading overruns steal time from your biggest scoring opportunity.</li>
  <li><strong>Practise under timed conditions:</strong> The only way to build reliable exam timing is to complete full past papers under strict timed conditions at home.</li>
</ul>

<h3>What To Do If You Run Out of Time</h3>

<p>If you realise you are running short, do not panic. For reading questions, write bullet points with quotations and brief analysis — examiners can still award marks for relevant points even in note form. For writing, skip straight to your conclusion so you have a finished piece, then go back and fill in the middle if time allows. A complete but shorter response will always outscore an unfinished one.</p>
`,
      quiz: [
        {
          id: 'edexcel-et-m6-q1',
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
          id: 'edexcel-et-m6-q2',
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
          id: 'edexcel-et-m6-q3',
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
          id: 'edexcel-et-m6-q4',
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
          id: 'edexcel-et-m6-q5',
          question: 'Why is it important to write target finish times on your paper before starting?',
          options: [
            'It impresses the examiner and gains extra marks',
            'It ensures you allocate time proportionally and do not overrun on early questions',
            'It is a requirement of the Edexcel exam rules',
            'It helps you calculate your predicted grade'
          ],
          answer: 1,
          explanation: 'Writing target finish times prevents you from spending too long on early, lower-mark questions and protects your time for the high-mark writing section at the end of the paper.'
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
    }
  ]
};

export default edexcelExamTechnique;
