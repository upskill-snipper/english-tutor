const wjecExamTechnique = {
  id: 'exam-technique-wjec',
  title: 'WJEC Eduqas Exam Technique Masterclass',
  subtitle: 'Component 1 & Component 2',
  tier: 'GCSE',
  board: 'WJEC',
  specCode: 'C700U/C720U',
  price: 0,
  duration: '3 hours',
  level: 'All levels',
  description:
    'Master the exact skills WJEC Eduqas examiners reward across Language and Literature components.',
  color: 'from-orange-600 to-orange-800',
  moduleList: [
    // ──────────────────────────────────────────────
    // MODULE 1 — Component 1 Reading Analysis
    // ──────────────────────────────────────────────
    {
      id: 'wjec-et-m1',
      title: 'Component 1 Reading Analysis',
      duration: '20 min',
      content: `
<h2>Component 1 Reading: The Integrated Approach</h2>

<p>WJEC Eduqas Component 1 is called <strong>"20th Century Literature Reading and Creative Prose Writing"</strong>. The reading section is worth <strong>40 marks</strong> and is based on a single literary prose extract from the 20th century. You have roughly <strong>1 hour</strong> for the reading section out of the total 1 hour 45 minutes for the whole paper. Understanding how WJEC structures its reading questions is the first step to consistently high marks.</p>

<div class="key-term"><strong>Key Term: Integrated Reading</strong> — WJEC Eduqas reading questions are designed to test language analysis, structural analysis, and evaluation within a flowing set of questions that build in complexity. Unlike AQA, which separates language and structure into distinct questions, WJEC often integrates these skills within broader prompts.</div>

<h3>How WJEC Differs from Other Boards</h3>

<p>If you have ever looked at AQA or Edexcel papers, you will notice they break reading into four or five neatly labelled questions. WJEC takes a different approach. The reading section typically contains <strong>five questions</strong>, but the mark allocations and question styles are distinctive:</p>

<ul>
  <li><strong>Question A1 (5 marks)</strong> — A retrieval and summary question. You must select and organise information from a specific section of the extract. This is your warm-up: straightforward, fact-based, and quick.</li>
  <li><strong>Question A2 (5 marks)</strong> — Focuses on how the writer uses language to create effects. You are expected to analyse specific words and phrases, commenting on their impact on the reader.</li>
  <li><strong>Question A3 (10 marks)</strong> — Asks about the writer's use of language and/or structure in a broader section. This is where you need to show sustained analysis and the ability to comment on how the text is crafted.</li>
  <li><strong>Question A4 (10 marks)</strong> — A longer response focusing on a particular aspect of the text, often asking you to evaluate the writer's success in creating mood, atmosphere, or character. You must offer a personal response supported by textual evidence.</li>
  <li><strong>Question A5 (10 marks)</strong> — A critical evaluation question that requires you to consider how effectively the writer achieves a stated purpose. This demands a balanced, exploratory response.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> WJEC mark schemes reward what they call "perceptive" and "assured" responses. This means going beyond identifying a technique and instead exploring why the writer chose it, what effect it creates, and how it contributes to the whole text. Surface-level feature-spotting will cap you at mid-band.</div>

<h3>The Five-Step WJEC Reading Strategy</h3>

<ol>
  <li><strong>Read the extract fully first</strong> — Spend 5 minutes absorbing the whole passage. Note the mood, any shifts, and the writer's apparent purpose. Jot a one-sentence summary in the margin.</li>
  <li><strong>Attack A1 quickly</strong> — This is retrieval. Identify your five points (or however many the question asks for), write them concisely, and move on. Do not spend more than 5 minutes here.</li>
  <li><strong>Annotate before writing A2-A5</strong> — Before writing each answer, underline key words and phrases in the relevant section. Write brief marginal notes about technique and effect.</li>
  <li><strong>Use the WJEC "What-How-Why" frame</strong> — What does the writer do? How do they do it (technique, word choice, structure)? Why does it matter (effect on reader, contribution to meaning)?</li>
  <li><strong>Save 10 minutes for A5</strong> — The evaluation question is worth 10 marks and requires a sophisticated, balanced response. Do not rush it because you ran out of time on earlier questions.</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Many students treat A5 as a simple agree/disagree question. WJEC examiners want to see you weigh evidence from the text, consider alternative interpretations, and arrive at a nuanced judgement. A one-sided response that simply agrees with the statement will not reach the top band.</div>

<h3>Building a Top-Band Reading Response</h3>

<p>The highest band for WJEC reading requires you to demonstrate <em>"detailed and perceptive"</em> understanding. This means every paragraph should contain a specific quotation, a named technique (where applicable), and a developed comment on effect. Your analysis should track how meaning builds across the extract, not just jump from quotation to quotation.</p>

<p>Consider embedding short quotations within your sentences rather than block-quoting long passages. For example: <em>"The writer's description of the walls as 'closing in' uses spatial imagery to convey the protagonist's growing claustrophobia and panic."</em> This approach keeps your analysis tight and demonstrates confident handling of the text.</p>

<p>Finally, always link back to the question. WJEC examiners penalise responses that drift away from the specific focus. If the question asks about atmosphere, every paragraph should connect to atmosphere. If it asks about character, every paragraph should connect to character. Relevance is non-negotiable.</p>
`,
      quiz: [
        {
          id: 'wjec-et-m1-q1',
          question: 'How many marks is the Component 1 reading section worth in total?',
          options: ['20 marks', '30 marks', '40 marks', '50 marks'],
          answer: 2,
          explanation:
            'The Component 1 reading section is worth 40 marks across all five questions (A1-A5).',
        },
        {
          id: 'wjec-et-m1-q2',
          question: 'What makes WJEC reading questions different from AQA?',
          options: [
            'WJEC only tests language, not structure',
            'WJEC integrates language and structure analysis within broader prompts',
            'WJEC does not require quotations',
            'WJEC reading is entirely multiple choice',
          ],
          answer: 1,
          explanation:
            'Unlike AQA, which separates language and structure into distinct questions, WJEC integrates these skills within broader analytical prompts.',
        },
        {
          id: 'wjec-et-m1-q3',
          question: 'Which question should you spend the least time on in Component 1 reading?',
          options: ['A3 (10 marks)', 'A5 (10 marks)', 'A1 (5 marks)', 'A4 (10 marks)'],
          answer: 2,
          explanation:
            'A1 is a retrieval question worth only 5 marks. It requires concise, factual answers and should take no more than 5 minutes.',
        },
        {
          id: 'wjec-et-m1-q4',
          question: 'What does a top-band WJEC reading response require?',
          options: [
            'Listing as many techniques as possible',
            'Detailed and perceptive analysis with specific quotations and developed comments on effect',
            'Writing at least two pages per question',
            'Using PEE paragraphs exclusively',
          ],
          answer: 1,
          explanation:
            'WJEC top-band descriptors ask for "detailed and perceptive" responses that analyse specific quotations with developed commentary on effect and meaning.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 2 — Component 1 Narrative Writing
    // ──────────────────────────────────────────────
    {
      id: 'wjec-et-m2',
      title: 'Component 1 Narrative Writing',
      duration: '20 min',
      content: `
<h2>Component 1 Section B: Creative Prose Writing</h2>

<p>Section B of Component 1 is the <strong>creative prose writing</strong> task. It is worth <strong>40 marks</strong> — exactly the same as the reading section — and you should allocate approximately <strong>45 minutes</strong> to it. You will be given a choice of <strong>four titles or prompts</strong> and must select one. The task always requires prose writing: a story, a narrative opening, or a piece of descriptive writing.</p>

<div class="key-term"><strong>Key Term: Eduqas Marking Criteria</strong> — WJEC Eduqas assesses creative writing against two Assessment Objectives: <strong>AO5 (content and organisation, 24 marks)</strong> and <strong>AO6 (technical accuracy, 16 marks)</strong>. This means 60% of your marks come from what you write and how you structure it, while 40% come from spelling, punctuation, grammar, and vocabulary.</div>

<h3>Understanding the Mark Scheme</h3>

<p>The AO5 mark scheme for WJEC Eduqas creative writing is divided into six bands. Understanding what separates a Band 4 response (good) from a Band 5 or 6 response (excellent or exceptional) is critical:</p>

<ul>
  <li><strong>Band 3 (9-12 marks)</strong> — "Competent" writing. Clear narrative with some descriptive detail. Paragraphs are used but structure may be straightforward.</li>
  <li><strong>Band 4 (13-16 marks)</strong> — "Secure" writing. Engaging narrative with sustained descriptive detail. Structure is controlled and deliberate.</li>
  <li><strong>Band 5 (17-20 marks)</strong> — "Convincing" writing. Compelling narrative with carefully chosen vocabulary. Structural choices create specific effects on the reader.</li>
  <li><strong>Band 6 (21-24 marks)</strong> — "Exceptional" writing. Sophisticated, original, and assured. Every word earns its place. Structure is used innovatively to enhance meaning.</li>
</ul>

<h3>The WJEC Prose Writing Blueprint</h3>

<p>Follow this blueprint to give your creative writing the best chance of reaching the top bands:</p>

<ol>
  <li><strong>Choose wisely (2 minutes)</strong> — Read all four prompts. Pick the one that immediately sparks a vivid image or scene in your mind. Do not pick the one that sounds "easiest" unless you can genuinely write it well.</li>
  <li><strong>Plan your arc (5 minutes)</strong> — Sketch a beginning, development, climax, and resolution. WJEC examiners value a clear narrative shape. Even descriptive pieces need a sense of progression — perhaps a shift in mood, a revelation, or a change in perspective.</li>
  <li><strong>Open with impact (first paragraph)</strong> — Your opening sentence sets the tone. Consider starting with a sensory detail, a striking image, or a fragment of dialogue. Avoid generic openings like "It was a dark and stormy night" or "One day I woke up."</li>
  <li><strong>Vary your sentence structures throughout</strong> — Mix short, punchy sentences with longer, more complex ones. Use one-sentence paragraphs for dramatic effect. Vary your sentence openers (adverb, participle, prepositional phrase) to avoid monotony.</li>
  <li><strong>End memorably (final paragraph)</strong> — Your ending should resonate. Consider a cyclical structure (echoing the opening), an ambiguous ending, or a powerful final image. Avoid wrapping everything up neatly unless the prompt calls for it.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> WJEC examiners repeatedly state that shorter, polished pieces score higher than long, rambling ones. Aim for quality over quantity. A tightly crafted 350-400 word piece with precise vocabulary and controlled structure will outscore a 600-word piece full of cliches and errors every time.</div>

<h3>Technical Accuracy: The 16 Marks You Cannot Afford to Lose</h3>

<p>AO6 is worth 16 marks, and this is where many students leave easy marks on the table. WJEC examiners are looking for:</p>

<ul>
  <li><strong>Accurate spelling</strong> — especially of ambitious vocabulary. If you are unsure how to spell a word, use a synonym you can spell correctly.</li>
  <li><strong>Varied punctuation</strong> — commas, semicolons, colons, dashes, ellipses, and exclamation marks should all appear naturally. Do not force them in, but do use them where appropriate.</li>
  <li><strong>Secure paragraphing</strong> — each paragraph should have a clear focus. Use paragraph breaks to signal shifts in time, place, focus, or mood.</li>
  <li><strong>Grammatically complex sentences</strong> — subordinate clauses, relative clauses, and varied syntax all demonstrate control of written English.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing in a rushed, breathless style because you are anxious about time. If you have planned properly, you can write calmly and deliberately. Rushed writing leads to comma splices, missing full stops, and inconsistent tense — all of which cost marks in AO6.</div>

<p>Remember: creative writing is not just about imagination. It is a technical skill that rewards deliberate craft. Every word, sentence, and paragraph should be a conscious choice. WJEC examiners are trained to spot the difference between writing that flows naturally and writing that has been carefully constructed to appear natural — and they reward the latter.</p>
`,
      quiz: [
        {
          id: 'wjec-et-m2-q1',
          question: 'How are the 40 marks for Component 1 creative writing split between the two AOs?',
          options: [
            '20 marks AO5, 20 marks AO6',
            '24 marks AO5, 16 marks AO6',
            '30 marks AO5, 10 marks AO6',
            '16 marks AO5, 24 marks AO6',
          ],
          answer: 1,
          explanation:
            'AO5 (content and organisation) is worth 24 marks and AO6 (technical accuracy) is worth 16 marks, totalling 40 marks.',
        },
        {
          id: 'wjec-et-m2-q2',
          question: 'How many title/prompt choices are given for the creative writing task?',
          options: ['Two', 'Three', 'Four', 'Five'],
          answer: 2,
          explanation:
            'WJEC Eduqas gives you a choice of four titles or prompts for the creative writing section.',
        },
        {
          id: 'wjec-et-m2-q3',
          question: 'What distinguishes Band 6 (exceptional) creative writing from Band 5?',
          options: [
            'It is longer',
            'It uses more techniques',
            'It is sophisticated, original, and assured with innovative structure',
            'It includes dialogue',
          ],
          answer: 2,
          explanation:
            'Band 6 writing is characterised by sophistication, originality, and assurance. Every word earns its place and structure is used innovatively to enhance meaning.',
        },
        {
          id: 'wjec-et-m2-q4',
          question: 'What do WJEC examiners say about the length of creative writing responses?',
          options: [
            'Longer responses always score higher',
            'Aim for at least 600 words',
            'Shorter, polished pieces score higher than long, rambling ones',
            'Word count does not matter at all',
          ],
          answer: 2,
          explanation:
            'WJEC examiners repeatedly state that shorter, polished pieces with precise vocabulary and controlled structure outscore longer, rambling pieces full of errors.',
        },
        {
          id: 'wjec-et-m2-q5',
          question: 'Which of the following is NOT assessed under AO6?',
          options: [
            'Spelling accuracy',
            'Varied punctuation',
            'Imaginative content',
            'Grammatically complex sentences',
          ],
          answer: 2,
          explanation:
            'Imaginative content is assessed under AO5 (content and organisation). AO6 covers technical accuracy: spelling, punctuation, grammar, and sentence construction.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 3 — Component 2 Comparison
    // ──────────────────────────────────────────────
    {
      id: 'wjec-et-m3',
      title: 'Component 2 Reading: Comparison Across Centuries',
      duration: '20 min',
      content: `
<h2>Component 2 Reading: 19th and 21st Century Non-Fiction</h2>

<p>WJEC Eduqas Component 2 is <strong>"19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing"</strong>. The reading section is worth <strong>40 marks</strong> and presents you with <strong>two non-fiction texts</strong>: one from the 21st century and one from the 19th century. The exam lasts <strong>2 hours</strong> in total, and you should allocate approximately <strong>1 hour</strong> to the reading section.</p>

<div class="key-term"><strong>Key Term: Cross-Century Comparison</strong> — The skill of identifying similarities and differences in how writers from different historical periods approach a shared theme or topic. WJEC specifically tests your ability to synthesise ideas across the two texts and compare the writers' methods.</div>

<h3>The Question Structure</h3>

<p>Component 2 reading typically follows this structure:</p>

<ul>
  <li><strong>Question A1 (2 marks)</strong> — A brief retrieval question based on one of the texts. Quick and factual.</li>
  <li><strong>Question A2 (4 marks)</strong> — Asks you to summarise or explain ideas from one text. Slightly more developed than A1.</li>
  <li><strong>Question A3 (8 marks)</strong> — Asks you to analyse how one writer uses language to achieve a particular effect.</li>
  <li><strong>Question A4 (10 marks)</strong> — Asks how one writer uses language and structure to influence the reader.</li>
  <li><strong>Question A5 (4 marks)</strong> — A synthesis question requiring you to use both texts. This is unique to WJEC and tests your ability to draw connections across the two sources.</li>
  <li><strong>Question A6 (12 marks)</strong> — The big comparison question. You must compare how the two writers present their ideas on the shared theme, considering both content and method.</li>
</ul>

<h3>Tackling the 19th-Century Text</h3>

<p>Many students feel intimidated by the 19th-century text. The vocabulary is more formal, sentences are longer, and the rhetorical style can feel unfamiliar. Here is how to approach it with confidence:</p>

<ol>
  <li><strong>Read it twice</strong> — The first read gives you the gist. The second read lets you focus on specific language choices and structural features.</li>
  <li><strong>Translate as you go</strong> — If a sentence is dense, mentally paraphrase it into modern English. What is the writer actually saying?</li>
  <li><strong>Look for rhetorical patterns</strong> — 19th-century writers loved tricolons, rhetorical questions, direct address, and elaborate imagery. These techniques are your analytical goldmine.</li>
  <li><strong>Identify the purpose</strong> — Is the writer persuading, informing, entertaining, or arguing? 19th-century non-fiction often has a clear moral or social purpose.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Do not panic if you do not understand every word of the 19th-century text. Focus on the overall purpose, the tone, and the key methods the writer uses. You can score highly by analysing a few well-chosen quotations in depth, even if you have not fully decoded every sentence.</div>

<h3>The Comparison Question (A6): A Step-by-Step Method</h3>

<p>Question A6 is worth 12 marks and is the most challenging part of Component 2 reading. It requires you to compare the two texts systematically. Here is a proven approach:</p>

<ol>
  <li><strong>Identify 3-4 points of comparison</strong> — Before writing, list the key similarities and differences in how the two writers approach the topic. Consider: tone, purpose, audience, techniques, perspective.</li>
  <li><strong>Use a comparative structure</strong> — Do NOT write about Text 1 for half your answer and Text 2 for the other half. Instead, integrate your comparison point by point. Each paragraph should reference both texts.</li>
  <li><strong>Use comparison connectives</strong> — "Similarly," "In contrast," "Whereas," "Both writers," "However, the 19th-century writer." These connectives signal to the examiner that you are genuinely comparing, not just describing each text separately.</li>
  <li><strong>Comment on the effect of the time period</strong> — The fact that the texts are from different centuries is not accidental. Consider how the historical context shapes each writer's language, assumptions, and methods. A 19th-century writer addressing poverty will use very different rhetoric from a 21st-century journalist covering the same topic.</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about each text separately and adding a brief comparison at the end. This approach will cap you at the lower bands. WJEC examiners want to see sustained, integrated comparison throughout your response. Every paragraph should address both texts.</div>

<h3>Synthesis vs Comparison</h3>

<p>Students often confuse the synthesis question (A5) with the comparison question (A6). The difference is important:</p>

<ul>
  <li><strong>Synthesis (A5)</strong> — Drawing together information from both texts to present a combined picture of the topic. You are identifying what both texts tell you about the subject.</li>
  <li><strong>Comparison (A6)</strong> — Analysing how the two writers use different methods to present their views. You are comparing the craft of writing, not just the content.</li>
</ul>

<p>For A5, you might write: "Both texts suggest that poverty is caused by systemic inequality, with Text 1 citing government policy and Text 2 blaming the class system." For A6, you would write: "Both writers convey the injustice of poverty, but whereas the 21st-century writer uses statistical evidence to create a logical, measured argument, the 19th-century writer employs emotive imagery and direct address to provoke moral outrage in the reader."</p>

<p>Mastering this distinction is essential for maximising your marks across both questions.</p>
`,
      quiz: [
        {
          id: 'wjec-et-m3-q1',
          question: 'How many marks is the Component 2 comparison question (A6) worth?',
          options: ['8 marks', '10 marks', '12 marks', '15 marks'],
          answer: 2,
          explanation:
            'Question A6 is worth 12 marks and requires sustained, integrated comparison of the two writers\' methods.',
        },
        {
          id: 'wjec-et-m3-q2',
          question: 'What is the key difference between the synthesis question (A5) and the comparison question (A6)?',
          options: [
            'A5 is longer than A6',
            'A5 combines information from both texts; A6 compares the writers\' methods',
            'A5 is about the 19th-century text only',
            'There is no difference',
          ],
          answer: 1,
          explanation:
            'Synthesis (A5) draws together content from both texts, while comparison (A6) analyses and compares the writers\' craft and methods.',
        },
        {
          id: 'wjec-et-m3-q3',
          question: 'What is the best structure for the comparison question?',
          options: [
            'Write about Text 1 first, then Text 2',
            'Write a paragraph on similarities, then a paragraph on differences',
            'Integrate comparison point by point, referencing both texts in every paragraph',
            'Focus mainly on the text you understand best',
          ],
          answer: 2,
          explanation:
            'WJEC examiners reward sustained, integrated comparison. Each paragraph should reference both texts rather than discussing them separately.',
        },
        {
          id: 'wjec-et-m3-q4',
          question: 'What should you do if you find the 19th-century text difficult to understand?',
          options: [
            'Skip it and focus on the 21st-century text',
            'Copy out long quotations to fill space',
            'Focus on overall purpose and tone, analysing a few well-chosen quotations in depth',
            'Write about how confusing the language is',
          ],
          answer: 2,
          explanation:
            'You can score highly by focusing on the overall purpose and tone, then analysing a few well-chosen quotations in depth, even without understanding every word.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 4 — Literature Shakespeare Essay
    // ──────────────────────────────────────────────
    {
      id: 'wjec-et-m4',
      title: 'Literature: Shakespeare Extract-Based Essay',
      duration: '20 min',
      content: `
<h2>Shakespeare Extract-Based Essay: Component 1 Literature</h2>

<p>The Shakespeare section of WJEC Eduqas Literature Component 1 is worth a combined <strong>40 marks</strong>, split into two parts: <strong>Part (a) — the extract question (15 marks)</strong> and <strong>Part (b) — the whole-text essay (25 marks)</strong>. Together, they account for <strong>40% of your total Literature GCSE</strong>. Getting this section right is critical to your overall grade.</p>

<div class="key-term"><strong>Key Term: Extract-Based Essay</strong> — A question that provides a printed extract from the play and asks you to analyse how Shakespeare uses language, form, and structure to create meaning within that specific passage. You must demonstrate close reading skills while showing awareness of the extract's place in the wider play.</div>

<h3>Understanding the Assessment Objectives</h3>

<p>The Shakespeare questions assess all four AOs, but with different weightings across Parts (a) and (b):</p>

<ul>
  <li><strong>AO1 — Informed personal response (both parts)</strong>: Read, understand, and respond to texts. Use textual references, including quotations, to support your interpretation. This is the foundation of every point you make.</li>
  <li><strong>AO2 — Analysis of language, form, and structure (heavier in Part a)</strong>: Analyse the language, form, and structure used by a writer to create meanings and effects. Use relevant subject terminology where appropriate. This is where your close analysis of the extract earns its marks.</li>
  <li><strong>AO3 — Context (heavier in Part b)</strong>: Show understanding of the relationships between texts and the contexts in which they were written. For Shakespeare, this means Elizabethan/Jacobean social norms, theatrical conventions, religious beliefs, and political structures.</li>
  <li><strong>AO4 — Comparison (not assessed in Shakespeare)</strong>: This AO is assessed in the poetry section, not Shakespeare. Do not waste time comparing plays.</li>
</ul>

<h3>Part (a): The Extract Question (15 marks)</h3>

<p>You are given an extract of approximately 30-40 lines and asked how Shakespeare presents a character, theme, or relationship within that passage. Your response should:</p>

<ol>
  <li><strong>Open with a clear thesis</strong> — State your interpretation of what Shakespeare is doing in this extract. For example: "In this extract, Shakespeare presents Lady Macbeth as a figure of terrifying authority who subverts Jacobean gender expectations through her command of manipulative rhetoric."</li>
  <li><strong>Analyse 3-4 key quotations</strong> — Select short, specific quotations and analyse them closely. Identify techniques (imagery, metre, dramatic irony, etc.) and explain their effect on the audience.</li>
  <li><strong>Consider dramatic context</strong> — Where does this extract sit in the play? What has just happened? What is about to happen? How does this context shape the audience's response to the extract?</li>
  <li><strong>Track shifts within the extract</strong> — Does the tone, mood, or power dynamic change during the passage? Commenting on structural shifts within the extract demonstrates sophisticated reading.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> For Part (a), the extract is printed on the page, so you do not need to memorise quotations. However, you DO need to show that you understand the extract in the context of the whole play. Brief references to events before or after the extract show the examiner you know the text as a whole.</div>

<h3>Part (b): The Whole-Text Essay (25 marks)</h3>

<p>Part (b) asks a broader question about the same play — usually about a character, theme, or Shakespeare's methods. This is where your knowledge of the whole text is tested. You should:</p>

<ol>
  <li><strong>Plan 4-5 key moments from across the play</strong> — Show range by selecting moments from the beginning, middle, and end. An essay that only discusses Acts 1 and 2 suggests incomplete knowledge.</li>
  <li><strong>Embed memorised quotations</strong> — Unlike Part (a), you do not have the text in front of you. You need to have quotations ready. Aim for 8-10 short, versatile quotations per character/theme.</li>
  <li><strong>Weave in context naturally</strong> — Do not write a separate "context paragraph." Instead, integrate contextual understanding into your analysis: "Shakespeare's audience, living under the divine right of kings, would have viewed Macbeth's regicide as an act of cosmic disorder, not merely political ambition."</li>
  <li><strong>Track character development or thematic progression</strong> — Show how the character changes or how the theme develops across the play. This demonstrates whole-text understanding and earns top-band marks.</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Retelling the plot. WJEC examiners call this "narrative paraphrase" and it is one of the most common reasons for low marks. Every sentence should analyse, not describe. Instead of "Macbeth kills Duncan," write "Shakespeare's decision to have the murder occur offstage forces the audience to imagine the violence, intensifying the horror through what is left unseen."</div>

<h3>Bringing It All Together</h3>

<p>The Shakespeare section rewards students who can move fluidly between close analysis and big-picture interpretation. In Part (a), anchor yourself in the extract but gesture outward to the whole play. In Part (b), range across the whole play but anchor each point in specific textual detail. This balance between the micro and the macro is what separates competent responses from truly impressive ones.</p>

<p>Time allocation matters enormously. Spend approximately <strong>20 minutes on Part (a)</strong> and <strong>30 minutes on Part (b)</strong>. Part (b) is worth significantly more marks, so it deserves more time and more developed analysis. Students who spend too long on the extract question often produce a rushed, underdeveloped whole-text essay — and that imbalance costs them more marks than they gained.</p>
`,
      quiz: [
        {
          id: 'wjec-et-m4-q1',
          question: 'How are marks split between Part (a) and Part (b) of the Shakespeare section?',
          options: [
            '20 marks each',
            '15 marks Part (a), 25 marks Part (b)',
            '10 marks Part (a), 30 marks Part (b)',
            '25 marks Part (a), 15 marks Part (b)',
          ],
          answer: 1,
          explanation:
            'Part (a) the extract question is worth 15 marks and Part (b) the whole-text essay is worth 25 marks, totalling 40 marks.',
        },
        {
          id: 'wjec-et-m4-q2',
          question: 'Which Assessment Objective is NOT assessed in the Shakespeare section?',
          options: ['AO1', 'AO2', 'AO3', 'AO4'],
          answer: 3,
          explanation:
            'AO4 (comparison) is assessed in the poetry section, not in the Shakespeare section.',
        },
        {
          id: 'wjec-et-m4-q3',
          question: 'What is the most common reason for low marks in the Shakespeare essay?',
          options: [
            'Using too many quotations',
            'Narrative paraphrase (retelling the plot instead of analysing)',
            'Writing too much about context',
            'Not using enough subject terminology',
          ],
          answer: 1,
          explanation:
            'WJEC examiners identify "narrative paraphrase" as one of the most common reasons for low marks. Every sentence should analyse, not describe.',
        },
        {
          id: 'wjec-et-m4-q4',
          question: 'How should context be included in Part (b)?',
          options: [
            'In a separate context paragraph at the start',
            'Only in the conclusion',
            'Woven naturally into your analytical points',
            'Context is not needed for Shakespeare',
          ],
          answer: 2,
          explanation:
            'Context should be integrated naturally into your analysis, showing how it connects to Shakespeare\'s purpose and the meaning of the text, rather than being bolted on in a separate paragraph.',
        },
        {
          id: 'wjec-et-m4-q5',
          question: 'What is the recommended time split between Part (a) and Part (b)?',
          options: [
            '25 minutes each',
            '30 minutes Part (a), 20 minutes Part (b)',
            '20 minutes Part (a), 30 minutes Part (b)',
            '15 minutes Part (a), 35 minutes Part (b)',
          ],
          answer: 2,
          explanation:
            'Spend approximately 20 minutes on Part (a) and 30 minutes on Part (b). Part (b) is worth more marks and needs more developed analysis.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 5 — Poetry Comparison
    // ──────────────────────────────────────────────
    {
      id: 'wjec-et-m5',
      title: 'Poetry Comparison: Eduqas Anthology Method',
      duration: '20 min',
      content: `
<h2>Poetry Comparison: The Eduqas Anthology Approach</h2>

<p>The poetry section of WJEC Eduqas Literature Component 2 is worth <strong>40 marks</strong>, split between the <strong>anthology comparison (20 marks)</strong> and the <strong>unseen poetry section (20 marks)</strong>. The anthology comparison question names one poem and asks you to compare it with another poem of your choice from the anthology. This module focuses on mastering that comparison technique.</p>

<div class="key-term"><strong>Key Term: Anthology Comparison</strong> — A question that names one poem from the WJEC Eduqas anthology and asks you to compare how two poets present a specific theme, idea, or experience. You must select a second poem yourself, making your choice of comparison poem a strategic decision.</div>

<h3>The Eduqas Poetry Anthology</h3>

<p>The WJEC Eduqas anthology contains <strong>18 poems</strong> grouped into two thematic clusters. Unlike AQA, where you study 15 poems in a single cluster, Eduqas gives you two clusters of poems and you must study both. The exam will name a poem from one cluster and you choose your comparison from the same cluster. Knowing which cluster each poem belongs to, and having prepared comparison pairings in advance, is essential preparation.</p>

<h3>Choosing Your Comparison Poem</h3>

<p>The choice of your second poem is one of the most important decisions you make in this section. A strong pairing creates rich comparison opportunities; a weak pairing leads to forced, superficial connections. Follow these principles:</p>

<ol>
  <li><strong>Prepare pairings in advance</strong> — For every poem in the anthology, have at least two possible comparison partners ready. Know why they work together (shared theme, contrasting perspective, similar technique used differently).</li>
  <li><strong>Choose for contrast as well as similarity</strong> — The best comparisons explore both how the poems are similar AND how they differ. A pairing where the poems are too similar limits your analytical range.</li>
  <li><strong>Choose a poem you know well</strong> — Under exam pressure, pick the poem you can write about most confidently. A well-known poem with memorised quotations will always serve you better than an ambitious choice you half-remember.</li>
  <li><strong>Match the question focus</strong> — If the question asks about "how poets present conflict," choose a poem where conflict is a central concern, not a minor detail. Relevance is critical.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> WJEC examiners report that the most common weakness in poetry comparison is students who write about each poem separately and add a brief comparison at the end. This approach will not reach the top bands. You must compare throughout your response.</div>

<h3>The Four-Stage Comparison Method</h3>

<p>Use this method to structure a sustained, integrated comparison:</p>

<ol>
  <li><strong>Stage 1: Establish the connection (opening paragraph)</strong> — Begin by stating how both poems address the question focus, immediately establishing a point of comparison. For example: "Both Owen in 'Dulce et Decorum Est' and Sheers in 'Mametz Wood' explore the physical destruction of soldiers' bodies, but while Owen's account is immediate and visceral, Sheers writes with the retrospective tenderness of archaeological discovery."</li>
  <li><strong>Stage 2: Analyse Poem 1 in detail (2-3 paragraphs)</strong> — Focus on the named poem first. Select key quotations and analyse language, form, and structure. Always link your analysis back to the question focus. At the end of each paragraph, make a brief comparative reference to Poem 2.</li>
  <li><strong>Stage 3: Analyse Poem 2 with constant comparison (2-3 paragraphs)</strong> — Now focus on your chosen poem, but constantly compare back to Poem 1. Use comparative connectives: "Whereas Owen uses..., Sheers instead...", "Similarly to the named poem, this poet...", "In contrast to the visceral imagery of Poem 1..."</li>
  <li><strong>Stage 4: Conclude with an evaluative comparison</strong> — End by reflecting on the overall effect of each poem's approach. Which is more effective and why? What does each poet ultimately achieve? This evaluative element pushes you into the top bands.</li>
</ol>

<h3>Assessment Objectives in Poetry Comparison</h3>

<p>The poetry comparison assesses AO1, AO2, and AO4:</p>

<ul>
  <li><strong>AO1 (informed personal response)</strong> — Your interpretation of both poems, supported by well-chosen quotations. Do not just describe what happens; engage critically with what the poets are doing and why.</li>
  <li><strong>AO2 (analysis of methods)</strong> — How do the poets use language, form, and structure to create meaning? This includes imagery, rhythm, rhyme scheme, stanza structure, enjambment, caesura, and tone.</li>
  <li><strong>AO4 (comparison)</strong> — This is the AO that is unique to this question. You must compare the poets' methods and effects, not just their subject matter. Comparing what the poems are about is content comparison; comparing how they achieve their effects is method comparison. WJEC rewards the latter.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Comparing only the content of the poems ("Both poems are about war") without comparing the methods ("Both poets use violent imagery, but Owen's is relentlessly graphic while Sheers' is eerily beautiful"). Method comparison is where the marks are.</div>

<p>One final piece of advice: do not try to cover everything. A detailed comparison of three or four well-chosen aspects of each poem will score higher than a rushed survey of every technique you can spot. Depth beats breadth in poetry comparison every time.</p>
`,
      quiz: [
        {
          id: 'wjec-et-m5-q1',
          question: 'How many marks is the anthology poetry comparison worth?',
          options: ['10 marks', '15 marks', '20 marks', '25 marks'],
          answer: 2,
          explanation:
            'The anthology comparison question is worth 20 marks, which is half of the 40-mark poetry section.',
        },
        {
          id: 'wjec-et-m5-q2',
          question: 'What is the most common weakness WJEC examiners report in poetry comparison?',
          options: [
            'Not enough quotations',
            'Writing about each poem separately instead of comparing throughout',
            'Choosing the wrong poem to compare',
            'Writing too much',
          ],
          answer: 1,
          explanation:
            'WJEC examiners consistently identify writing about poems separately (rather than comparing throughout) as the most common weakness in comparison responses.',
        },
        {
          id: 'wjec-et-m5-q3',
          question: 'Which Assessment Objective is unique to the poetry comparison question?',
          options: ['AO1', 'AO2', 'AO3', 'AO4'],
          answer: 3,
          explanation:
            'AO4 (comparison) is specifically assessed in the poetry comparison question and is not assessed in the Shakespeare section.',
        },
        {
          id: 'wjec-et-m5-q4',
          question: 'What is more valuable than comparing the content of two poems?',
          options: [
            'Comparing the length of the poems',
            'Comparing the poets\' biographies',
            'Comparing the poets\' methods and how they achieve effects',
            'Comparing the historical periods',
          ],
          answer: 2,
          explanation:
            'Method comparison (how poets achieve effects through language, form, and structure) earns more marks than content comparison (what the poems are about).',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 6 — Time Management
    // ──────────────────────────────────────────────
    {
      id: 'wjec-et-m6',
      title: 'Time Management: Minute-by-Minute for WJEC Components',
      duration: '20 min',
      content: `
<h2>Time Management: Your Minute-by-Minute Exam Plan</h2>

<p>Poor time management is the single biggest reason students underperform in GCSE English exams. You might have brilliant ideas, but if you run out of time on your final question, you are throwing away marks you would otherwise have earned. This module gives you a precise, minute-by-minute plan for every WJEC Eduqas component so you never run out of time again.</p>

<div class="key-term"><strong>Key Principle: Marks Per Minute</strong> — The simplest way to allocate time is to calculate how many marks each question is worth and divide your total exam time proportionally. For WJEC papers, a rough guide is approximately 1 minute per mark, with a small buffer for reading and planning.</div>

<h3>Component 1: 20th Century Literature Reading and Creative Prose Writing</h3>
<p><strong>Total time: 1 hour 45 minutes (105 minutes)</strong></p>

<table>
  <thead>
    <tr><th>Task</th><th>Marks</th><th>Time</th><th>Clock</th></tr>
  </thead>
  <tbody>
    <tr><td>Read the extract carefully</td><td>-</td><td>5 min</td><td>0:00 - 0:05</td></tr>
    <tr><td>Question A1 (retrieval/summary)</td><td>5</td><td>5 min</td><td>0:05 - 0:10</td></tr>
    <tr><td>Question A2 (language analysis)</td><td>5</td><td>7 min</td><td>0:10 - 0:17</td></tr>
    <tr><td>Question A3 (language/structure)</td><td>10</td><td>12 min</td><td>0:17 - 0:29</td></tr>
    <tr><td>Question A4 (extended response)</td><td>10</td><td>12 min</td><td>0:29 - 0:41</td></tr>
    <tr><td>Question A5 (evaluation)</td><td>10</td><td>14 min</td><td>0:41 - 0:55</td></tr>
    <tr><td>Plan creative writing</td><td>-</td><td>5 min</td><td>0:55 - 1:00</td></tr>
    <tr><td>Write creative prose</td><td>40</td><td>40 min</td><td>1:00 - 1:40</td></tr>
    <tr><td>Proofread and edit</td><td>-</td><td>5 min</td><td>1:40 - 1:45</td></tr>
  </tbody>
</table>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The 5-minute proofread at the end of Component 1 is non-negotiable. AO6 is worth 16 marks for creative writing. Catching and correcting three or four spelling errors, adding missing punctuation, and fixing a tense inconsistency in those final minutes can gain you 2-3 marks — the equivalent of an entire grade boundary in some years.</div>

<h3>Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing</h3>
<p><strong>Total time: 2 hours (120 minutes)</strong></p>

<table>
  <thead>
    <tr><th>Task</th><th>Marks</th><th>Time</th><th>Clock</th></tr>
  </thead>
  <tbody>
    <tr><td>Read both texts carefully</td><td>-</td><td>10 min</td><td>0:00 - 0:10</td></tr>
    <tr><td>Question A1 (retrieval)</td><td>2</td><td>2 min</td><td>0:10 - 0:12</td></tr>
    <tr><td>Question A2 (summary/explanation)</td><td>4</td><td>5 min</td><td>0:12 - 0:17</td></tr>
    <tr><td>Question A3 (language analysis)</td><td>8</td><td>10 min</td><td>0:17 - 0:27</td></tr>
    <tr><td>Question A4 (language and structure)</td><td>10</td><td>12 min</td><td>0:27 - 0:39</td></tr>
    <tr><td>Question A5 (synthesis)</td><td>4</td><td>5 min</td><td>0:39 - 0:44</td></tr>
    <tr><td>Question A6 (comparison)</td><td>12</td><td>16 min</td><td>0:44 - 1:00</td></tr>
    <tr><td>Plan transactional writing Task 1</td><td>-</td><td>3 min</td><td>1:00 - 1:03</td></tr>
    <tr><td>Write Task 1</td><td>20</td><td>22 min</td><td>1:03 - 1:25</td></tr>
    <tr><td>Plan transactional writing Task 2</td><td>-</td><td>3 min</td><td>1:25 - 1:28</td></tr>
    <tr><td>Write Task 2</td><td>20</td><td>22 min</td><td>1:28 - 1:50</td></tr>
    <tr><td>Proofread both writing tasks</td><td>-</td><td>10 min</td><td>1:50 - 2:00</td></tr>
  </tbody>
</table>

<h3>Literature Component 1: Shakespeare and Poetry</h3>
<p><strong>Total time: 2 hours (120 minutes)</strong></p>

<table>
  <thead>
    <tr><th>Task</th><th>Marks</th><th>Time</th><th>Clock</th></tr>
  </thead>
  <tbody>
    <tr><td>Read Shakespeare extract</td><td>-</td><td>3 min</td><td>0:00 - 0:03</td></tr>
    <tr><td>Shakespeare Part (a) extract</td><td>15</td><td>17 min</td><td>0:03 - 0:20</td></tr>
    <tr><td>Plan Shakespeare Part (b)</td><td>-</td><td>5 min</td><td>0:20 - 0:25</td></tr>
    <tr><td>Shakespeare Part (b) essay</td><td>25</td><td>30 min</td><td>0:25 - 0:55</td></tr>
    <tr><td>Read named poem</td><td>-</td><td>2 min</td><td>0:55 - 0:57</td></tr>
    <tr><td>Plan poetry comparison</td><td>-</td><td>5 min</td><td>0:57 - 1:02</td></tr>
    <tr><td>Write poetry comparison</td><td>20</td><td>25 min</td><td>1:02 - 1:27</td></tr>
    <tr><td>Read unseen poem(s)</td><td>-</td><td>5 min</td><td>1:27 - 1:32</td></tr>
    <tr><td>Unseen poetry response(s)</td><td>20</td><td>25 min</td><td>1:32 - 1:57</td></tr>
    <tr><td>Review and check all answers</td><td>-</td><td>3 min</td><td>1:57 - 2:00</td></tr>
  </tbody>
</table>

<h3>What To Do When You Fall Behind</h3>

<p>Even with the best plan, things go wrong. Here is your emergency protocol for when you are running out of time:</p>

<ol>
  <li><strong>Do not spend extra time trying to perfect the current answer.</strong> An answer that scores 7/10 in the time allowed is better than a 9/10 answer that causes you to score 0 on the next question.</li>
  <li><strong>Move on and bullet-point if necessary.</strong> If you have less than 5 minutes for your final question, write bullet points with key quotations and brief analysis. This can still earn marks in the lower-to-mid bands.</li>
  <li><strong>Never leave a question blank.</strong> A blank answer scores zero. Even a single relevant sentence can earn a mark.</li>
  <li><strong>Use the reading time wisely.</strong> If you read the texts efficiently at the start, you save time on every subsequent question because you already know where to find evidence.</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending 25 minutes on a 5-mark question because you want it to be "perfect." Perfectionism is the enemy of time management. A 5-mark question deserves 5-7 minutes. Write a focused, concise answer and move on. The marks you gain from answering every question will always outweigh the marks you might gain from perfecting one answer.</div>

<h3>Practice Under Timed Conditions</h3>

<p>The only way to internalise these timings is to practise under timed conditions. Set a timer for each question and stick to it ruthlessly. The first few times will feel uncomfortable, but with practice, your writing speed and efficiency will improve dramatically. By exam day, the timings should feel automatic, freeing your mental energy for the actual analysis.</p>

<p>Print out the timing tables from this module and keep them in your revision folder. Before every practice paper, review the plan. After every practice paper, check whether you hit your time targets. If you consistently overrun on one question type, adjust your approach to that question rather than stealing time from other sections.</p>
`,
      quiz: [
        {
          id: 'wjec-et-m6-q1',
          question: 'How long is the WJEC Eduqas Language Component 1 exam?',
          options: ['1 hour 30 minutes', '1 hour 45 minutes', '2 hours', '2 hours 15 minutes'],
          answer: 1,
          explanation:
            'Component 1 (20th Century Literature Reading and Creative Prose Writing) lasts 1 hour 45 minutes (105 minutes).',
        },
        {
          id: 'wjec-et-m6-q2',
          question: 'What should you do if you are running out of time on your final question?',
          options: [
            'Leave it blank and check earlier answers',
            'Write bullet points with key quotations and brief analysis',
            'Ask for extra time',
            'Rush through without quotations',
          ],
          answer: 1,
          explanation:
            'Bullet points with key quotations can still earn marks in the lower-to-mid bands. A blank answer always scores zero.',
        },
        {
          id: 'wjec-et-m6-q3',
          question: 'Why is the 5-minute proofread at the end of creative writing so important?',
          options: [
            'It lets you add more content',
            'AO6 is worth 16 marks and correcting errors can gain 2-3 marks',
            'Examiners expect you to use all the time',
            'It is not important',
          ],
          answer: 1,
          explanation:
            'AO6 (technical accuracy) is worth 16 marks. Catching spelling errors, adding punctuation, and fixing tense inconsistencies in a final proofread can gain 2-3 marks.',
        },
        {
          id: 'wjec-et-m6-q4',
          question: 'What is the rough guide for allocating time per mark in WJEC exams?',
          options: [
            'Approximately 30 seconds per mark',
            'Approximately 1 minute per mark',
            'Approximately 2 minutes per mark',
            'It varies too much to generalise',
          ],
          answer: 1,
          explanation:
            'A rough guide is approximately 1 minute per mark, with a small buffer for reading and planning time.',
        },
        {
          id: 'wjec-et-m6-q5',
          question: 'What is the biggest enemy of good time management?',
          options: [
            'Writing too quickly',
            'Not reading the questions',
            'Perfectionism on individual questions',
            'Using bullet points',
          ],
          answer: 2,
          explanation:
            'Perfectionism causes students to spend too long on one question, stealing time from others. A focused, concise answer that hits the time target is always better strategy.',
        },
      ],
    },
  ],

  assessmentQuestions: [
    {
      id: 'wjec-et-a1',
      question: 'How many marks is Component 1 reading worth?',
      options: ['20 marks', '30 marks', '40 marks', '50 marks'],
      answer: 2,
      explanation:
        'Component 1 reading is worth 40 marks across five questions (A1-A5).',
    },
    {
      id: 'wjec-et-a2',
      question: 'What is the total mark for the Shakespeare section (Parts a and b combined)?',
      options: ['25 marks', '30 marks', '40 marks', '50 marks'],
      answer: 2,
      explanation:
        'Part (a) is worth 15 marks and Part (b) is worth 25 marks, giving a combined total of 40 marks.',
    },
    {
      id: 'wjec-et-a3',
      question: 'In the Component 2 comparison question (A6), what structure should you use?',
      options: [
        'Write about Text 1 then Text 2 separately',
        'Integrate comparison point by point, referencing both texts in every paragraph',
        'Focus only on similarities',
        'Write a list of differences',
      ],
      answer: 1,
      explanation:
        'WJEC examiners reward sustained, integrated comparison where every paragraph references both texts, not a split structure.',
    },
    {
      id: 'wjec-et-a4',
      question: 'How are the 40 marks for Component 1 creative writing split?',
      options: [
        '20 marks AO5, 20 marks AO6',
        '24 marks AO5, 16 marks AO6',
        '30 marks AO5, 10 marks AO6',
        '32 marks AO5, 8 marks AO6',
      ],
      answer: 1,
      explanation:
        'AO5 (content and organisation) is worth 24 marks and AO6 (technical accuracy) is worth 16 marks.',
    },
    {
      id: 'wjec-et-a5',
      question: 'Which Assessment Objective assesses comparison skills?',
      options: ['AO1', 'AO2', 'AO3', 'AO4'],
      answer: 3,
      explanation:
        'AO4 assesses comparison. It is tested in the poetry comparison section but not in the Shakespeare section.',
    },
    {
      id: 'wjec-et-a6',
      question: 'What is the difference between synthesis and comparison in Component 2?',
      options: [
        'They are the same skill',
        'Synthesis draws together content from both texts; comparison analyses the writers\' methods',
        'Synthesis is harder than comparison',
        'Comparison only looks at one text',
      ],
      answer: 1,
      explanation:
        'Synthesis (A5) combines content from both texts. Comparison (A6) analyses and compares how the writers use different methods to present their views.',
    },
    {
      id: 'wjec-et-a7',
      question: 'What do WJEC examiners call retelling the plot instead of analysing?',
      options: [
        'Feature spotting',
        'Narrative paraphrase',
        'Surface reading',
        'Plot summary',
      ],
      answer: 1,
      explanation:
        'WJEC examiners use the term "narrative paraphrase" to describe responses that retell the story rather than analysing the writer\'s craft.',
    },
    {
      id: 'wjec-et-a8',
      question: 'How long is the Language Component 2 exam?',
      options: ['1 hour 30 minutes', '1 hour 45 minutes', '2 hours', '2 hours 30 minutes'],
      answer: 2,
      explanation:
        'Component 2 (19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing) lasts 2 hours.',
    },
    {
      id: 'wjec-et-a9',
      question: 'In the poetry comparison, what is more valuable than comparing content?',
      options: [
        'Comparing the poems\' lengths',
        'Comparing the poets\' methods and how they achieve effects',
        'Comparing the dates the poems were written',
        'Comparing the poets\' nationalities',
      ],
      answer: 1,
      explanation:
        'Method comparison (how poets use language, form, and structure to achieve effects) earns significantly more marks than content comparison (what the poems are about).',
    },
    {
      id: 'wjec-et-a10',
      question: 'What should you do in the final 5 minutes of the creative writing section?',
      options: [
        'Add another paragraph',
        'Proofread for spelling, punctuation, and grammar errors',
        'Rewrite your opening',
        'Leave early',
      ],
      answer: 1,
      explanation:
        'Proofreading in the final 5 minutes can catch errors worth 2-3 marks in AO6 (technical accuracy), which is worth 16 marks total.',
    },
  ],
};

export default wjecExamTechnique;
