// WJEC Eduqas GCSE English Literature — Texts Course
// All content is WJEC Eduqas GCSE-specific — NOT AQA, NOT Edexcel, NOT OCR

const wjecGcseLitTexts = {
  id: 'wjec-gcse-lit-texts',
  title: 'WJEC Eduqas GCSE Literature: Texts',
  subtitle: 'Master the set texts for WJEC Eduqas GCSE English Literature across Components 1 and 2.',
  tier: 'GCSE',
  board: 'WJEC',
  specCode: 'Eduqas',
  price: 39,
  duration: '5-7 hours',
  level: 'GCSE (Years 10-11)',
  description: 'Complete preparation for WJEC Eduqas GCSE English Literature set text questions. Cover Shakespeare extract and essay responses for Component 1, post-1914 prose/drama and 19th-century prose for Component 2, and learn how to manage the biggest single Literature paper of any board.',
  color: '#ea580c',
  moduleList: [
    {
      id: 'wjec-lt-m1',
      title: 'Component 1 Section A: Shakespeare Extract',
      duration: '40 mins',
      content: `<h2>The Shakespeare Extract Question: Part (a) — 15 Marks</h2>
<p>Component 1 Section A begins with a <strong>printed extract</strong> from your studied Shakespeare play. Part (a) asks you to analyse the extract closely — focusing on language, dramatic techniques, and the effects Shakespeare creates in that specific passage. You have roughly <strong>20 minutes</strong> for this part.</p>

<div class="key-term"><strong>Key Term: Extract-based question</strong> — A question that provides a passage from the text and asks you to analyse it in detail. You must focus primarily on the given extract, though brief links beyond it can show wider understanding.</div>

<h3>The Set Shakespeare Plays</h3>
<ul>
<li><strong>Macbeth</strong> — Ambition, guilt, supernatural, kingship, masculinity</li>
<li><strong>Romeo and Juliet</strong> — Love, fate, family conflict, impulsiveness, honour</li>
<li><strong>Much Ado About Nothing</strong> — Deception, honour, gender roles, wit, love vs pride</li>
<li><strong>Othello</strong> — Jealousy, manipulation, race, trust, appearance vs reality</li>
<li><strong>The Merchant of Venice</strong> — Prejudice, justice vs mercy, wealth, loyalty, identity</li>
<li><strong>Twelfth Night</strong> — Disguise, unrequited love, class, foolishness, identity</li>
</ul>

<h3>How to Approach Part (a)</h3>
<p>The extract is typically 30–40 lines. Read it twice before writing. On your second read, underline key words, imagery, and dramatic devices. Your response should cover:</p>
<ul>
<li><strong>Language</strong> — Imagery, word choice, rhetorical devices, verse vs prose</li>
<li><strong>Dramatic techniques</strong> — Soliloquy, aside, dramatic irony, stage directions</li>
<li><strong>Character</strong> — What the extract reveals about character and relationships</li>
<li><strong>Audience response</strong> — How Shakespeare shapes the audience's reaction</li>
</ul>

<div class="text-extract">"Is this a dagger which I see before me,<br>The handle toward my hand? Come, let me clutch thee.<br>I have thee not, and yet I see thee still."<div class="source">Shakespeare, <em>Macbeth</em>, Act 2 Scene 1</div></div>

<div class="model-answer"><strong>Model Paragraph:</strong> Shakespeare uses the rhetorical question "Is this a dagger which I see before me?" to dramatise Macbeth's psychological disintegration. The questioning tone reveals a man who can no longer trust his own senses, while the imperative "Come, let me clutch thee" suggests he is both repelled by and drawn to the act of murder. The paradox "I have thee not, and yet I see thee still" crystallises his internal conflict — the dagger is simultaneously real and unreal, just as the murder is both desired and dreaded. A Jacobean audience would recognise this as a sign of demonic temptation, intensifying the horror.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Part (a) is worth 15 marks — do not spend more than 20 minutes on it. Write 3–4 focused analytical paragraphs rather than trying to cover every detail. Quality of analysis always beats quantity.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Retelling what happens in the extract rather than analysing HOW Shakespeare creates effects. The examiner knows the plot — they want to see you explore language, structure, and dramatic technique.</div>`,
      quiz: [
        { id: 'wjec-lt-m1-q1', question: 'How many marks is the Part (a) Shakespeare extract question worth?', options: ['10 marks', '15 marks', '20 marks', '25 marks'], correct: 1, explanation: 'Part (a) is worth 15 marks and focuses on close analysis of a printed extract from your Shakespeare play.' },
        { id: 'wjec-lt-m1-q2', question: 'Which of these is NOT a set Shakespeare play for WJEC Eduqas?', options: ['Macbeth', 'Othello', 'Hamlet', 'Twelfth Night'], correct: 2, explanation: 'Hamlet is not on the WJEC Eduqas set text list. The six options are Macbeth, Romeo and Juliet, Much Ado About Nothing, Othello, The Merchant of Venice, and Twelfth Night.' },
        { id: 'wjec-lt-m1-q3', question: 'What should you focus on in the extract question?', options: ['Retelling the plot of the scene', 'How Shakespeare uses language, dramatic techniques, and their effects', 'Listing every technique you can find', 'Writing about the whole play'], correct: 1, explanation: 'The extract question rewards analysis of HOW Shakespeare creates effects through language and dramatic technique, not plot summary or feature spotting.' },
        { id: 'wjec-lt-m1-q4', question: 'How long should you roughly spend on Part (a)?', options: ['10 minutes', '20 minutes', '35 minutes', '45 minutes'], correct: 1, explanation: 'Around 20 minutes for Part (a) leaves enough time for the 25-mark Part (b) essay, which deserves more time because it carries more marks.' },
      ],
    },
    {
      id: 'wjec-lt-m2',
      title: 'Component 1 Section A: Shakespeare Essay',
      duration: '35 mins',
      content: `<h2>Part (b): The Shakespeare Essay — 25 Marks</h2>
<p>Part (b) moves beyond the extract to test your knowledge of the <strong>whole play</strong>. The question links to the same theme or character as Part (a), but you must draw on scenes and moments from across the text. This is worth <strong>25 marks</strong> — the largest single question on Component 1.</p>

<div class="key-term"><strong>Key Term: Whole-text essay</strong> — An essay that requires you to range across the entire play, selecting relevant moments from different acts. You cannot rely solely on the printed extract — you must use memorised quotations from elsewhere in the text.</div>

<h3>What the Question Looks Like</h3>
<p>Part (b) typically says: <em>"Write about [theme/character] in the play as a whole."</em> For example, if Part (a) gave you Macbeth's dagger soliloquy, Part (b) might ask: <em>"How does Shakespeare present the theme of guilt in the play as a whole?"</em></p>

<h3>Planning Your Essay</h3>
<p>Spend 3–4 minutes planning. Choose <strong>4–5 key moments</strong> from across the play that address the question. Aim for range — do not cluster all your points in one act.</p>
<ul>
<li><strong>Opening</strong> — Establish your argument with a clear thesis</li>
<li><strong>3–4 body paragraphs</strong> — Each anchored to a different part of the play with embedded quotations</li>
<li><strong>Conclusion</strong> — Draw your argument together; consider how the theme develops across the play</li>
</ul>

<div class="model-answer"><strong>Model Opening:</strong> Shakespeare presents guilt as a corrosive force that ultimately destroys both Macbeth and Lady Macbeth, though it manifests differently in each character. While Macbeth's guilt is immediate and hallucinatory — he sees a "dagger" and hears a voice cry "sleep no more" — Lady Macbeth suppresses her guilt until it erupts in the sleepwalking scene, where she desperately tries to wash imaginary blood from her hands. This contrast suggests that guilt cannot be avoided, only delayed.</div>

<h3>Assessment Criteria</h3>
<p>The 25 marks reward:</p>
<ul>
<li><strong>AO1</strong> — Informed personal response with textual references (including quotations)</li>
<li><strong>AO2</strong> — Analysis of Shakespeare's language, form, and structure</li>
<li><strong>AO3</strong> — Understanding of the relationship between texts and their social, historical, and literary contexts</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Context must be woven naturally into your analysis, not bolted on. Instead of writing a separate paragraph about Jacobean attitudes, embed it: "A Jacobean audience, who believed in the divine right of kings, would see Macbeth's regicide as an offence against God as well as the state."</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about only one or two scenes. The question says "the play as a whole" — examiners want to see that you know the full text. Aim to reference at least three different acts.</div>`,
      quiz: [
        { id: 'wjec-lt-m2-q1', question: 'How many marks is the Part (b) Shakespeare essay worth?', options: ['15 marks', '20 marks', '25 marks', '30 marks'], correct: 2, explanation: 'Part (b) is worth 25 marks — the highest-value question on Component 1. It tests your knowledge of the whole play.' },
        { id: 'wjec-lt-m2-q2', question: 'What does "the play as a whole" require you to do?', options: ['Only discuss the extract', 'Discuss scenes from across the entire play', 'Only write about the first and last acts', 'Summarise the plot'], correct: 1, explanation: 'You must range across the whole play, drawing on moments from different acts to show full knowledge of the text.' },
        { id: 'wjec-lt-m2-q3', question: 'Which assessment objectives does Part (b) test?', options: ['AO1 only', 'AO1 and AO2 only', 'AO1, AO2, and AO3', 'AO4 and AO5'], correct: 2, explanation: 'Part (b) tests AO1 (personal response with textual references), AO2 (language, form, structure analysis), and AO3 (context).' },
        { id: 'wjec-lt-m2-q4', question: 'How should context be included in your essay?', options: ['In a separate paragraph at the end', 'Woven naturally into your analytical points', 'Only if you have time left over', 'It should not be included'], correct: 1, explanation: 'Context should be embedded into your analysis, not bolted on as a separate paragraph. This shows sophisticated understanding of how context shapes meaning.' },
      ],
    },
    {
      id: 'wjec-lt-m3',
      title: 'Component 2 Section A: Post-1914 Prose/Drama',
      duration: '40 mins',
      content: `<h2>Post-1914 Prose or Drama — 40 Marks</h2>
<p>Component 2 Section A tests your studied <strong>post-1914 prose or drama text</strong>. The question is worth <strong>40 marks</strong> and follows an extract-then-essay format similar to the Shakespeare question — you receive a printed extract and must analyse it before writing about the wider text.</p>

<div class="key-term"><strong>Key Term: Component 2</strong> — The larger of the two Literature papers. It lasts <strong>2 hours 30 minutes</strong>, is worth <strong>120 marks</strong> (60% of your GCSE), and covers three sections: post-1914 prose/drama, 19th-century prose, and unseen poetry.</div>

<h3>How the Question Works</h3>
<p>You are given an extract from your studied text and asked two connected questions:</p>
<ul>
<li><strong>Part (a):</strong> Analyse the extract — focusing on how the writer presents a character, theme, or idea in the passage</li>
<li><strong>Part (b):</strong> Write about how the same character, theme, or idea is presented in the <strong>whole text</strong></li>
</ul>

<h3>Typical Set Texts</h3>
<p>Common post-1914 options include: <em>An Inspector Calls</em> (Priestley), <em>Blood Brothers</em> (Russell), <em>A Taste of Honey</em> (Delaney), <em>Lord of the Flies</em> (Golding), <em>Never Let Me Go</em> (Ishiguro), <em>Anita and Me</em> (Syal). Your school chooses one.</p>

<div class="text-extract">"We don't live alone. We are members of one body. We are responsible for each other."<div class="source">J.B. Priestley, <em>An Inspector Calls</em></div></div>

<div class="model-answer"><strong>Model Paragraph:</strong> Priestley uses the Inspector's final speech to deliver the play's moral message directly to the audience. The short, declarative sentences — "We don't live alone" — are forceful and unambiguous, leaving no room for the Birlings' evasions. The metaphor "members of one body" echoes the Christian concept of the body of Christ, suggesting that social responsibility is not merely political but spiritual. Written in 1945 but set in 1912, Priestley uses dramatic irony to warn a post-war audience against repeating the selfish individualism that led to two world wars.</div>

<h3>Timing Within Component 2</h3>
<p>Component 2 is 2 hours 30 minutes for 120 marks. Section A (post-1914) is worth 40 marks — allocate roughly <strong>50 minutes</strong> to it, split approximately 20 minutes for Part (a) and 30 minutes for Part (b).</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The 40 marks here carry enormous weight — this section alone is worth 20% of your entire Literature GCSE. Prepare at least 10 memorised quotations from your post-1914 text, spread across the whole text, so you can respond to any question.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending too long on Section A and leaving yourself rushed for Sections B and C. Strict timing is essential on this paper — all three sections carry equal weight (40 marks each).</div>`,
      quiz: [
        { id: 'wjec-lt-m3-q1', question: 'How many marks is the post-1914 prose/drama section worth?', options: ['20 marks', '30 marks', '40 marks', '60 marks'], correct: 2, explanation: 'Section A of Component 2 is worth 40 marks, which is one-third of the 120-mark paper.' },
        { id: 'wjec-lt-m3-q2', question: 'How long is the Component 2 exam?', options: ['1 hour 30 minutes', '2 hours', '2 hours 30 minutes', '3 hours'], correct: 2, explanation: 'Component 2 is 2 hours 30 minutes — the longest single Literature exam paper of any board at GCSE.' },
        { id: 'wjec-lt-m3-q3', question: 'What percentage of the total Literature GCSE does Component 2 represent?', options: ['40%', '50%', '60%', '70%'], correct: 2, explanation: 'Component 2 is worth 60% of the total GCSE — 120 marks out of 200. This makes it the dominant paper.' },
        { id: 'wjec-lt-m3-q4', question: 'How should you split your time for Section A?', options: ['All 50 minutes on Part (b)', '20 minutes Part (a), 30 minutes Part (b)', '40 minutes Part (a), 10 minutes Part (b)', 'Write both parts together'], correct: 1, explanation: 'Roughly 20 minutes for Part (a) on the extract and 30 minutes for Part (b) on the whole text, since Part (b) carries more marks and requires wider textual knowledge.' },
      ],
    },
    {
      id: 'wjec-lt-m4',
      title: 'Component 2 Section B: 19th-Century Prose',
      duration: '40 mins',
      content: `<h2>19th-Century Prose — 40 Marks</h2>
<p>Section B tests your studied <strong>19th-century prose text</strong>. Like Section A, it follows an extract-then-essay structure with a printed passage and two connected parts. This section is also worth <strong>40 marks</strong>.</p>

<div class="key-term"><strong>Key Term: 19th-century prose</strong> — Novels written between 1800 and 1899. The WJEC Eduqas set list includes canonical Victorian and Romantic-era texts. Understanding the social and historical context of the period is essential for AO3.</div>

<h3>Typical Set Texts</h3>
<ul>
<li><strong>A Christmas Carol</strong> — Dickens (poverty, redemption, social responsibility, Christmas spirit)</li>
<li><strong>The Strange Case of Dr Jekyll and Mr Hyde</strong> — Stevenson (duality, repression, Victorian morality, science vs nature)</li>
<li><strong>Jane Eyre</strong> — Brontë (independence, gender, class, morality, passion vs duty)</li>
<li><strong>Great Expectations</strong> — Dickens (class, ambition, loyalty, identity, justice)</li>
<li><strong>Pride and Prejudice</strong> — Austen (marriage, class, pride, prejudice, women's limited choices)</li>
<li><strong>Silas Marner</strong> — Eliot (community, isolation, redemption, love, materialism)</li>
</ul>

<h3>Context is Critical</h3>
<p>AO3 (context) is tested explicitly in the 19th-century section. You must show understanding of:</p>
<ul>
<li><strong>Social class</strong> — Rigid Victorian hierarchy; the "deserving" vs "undeserving" poor</li>
<li><strong>Gender</strong> — Limited rights for women; expected domesticity; the "Angel in the House"</li>
<li><strong>Religion and morality</strong> — Christian values underpinning society; fear of damnation</li>
<li><strong>Industrial change</strong> — Urbanisation, factory conditions, the workhouse system</li>
<li><strong>Science</strong> — Darwin, evolution, anxieties about "playing God"</li>
</ul>

<div class="text-extract">"I am too old a man, man! I shall not pass my days in a workhouse, and I can die in a better way than in the open air."<div class="source">Adapted from 19th-century prose extracts</div></div>

<div class="model-answer"><strong>Model Paragraph:</strong> Dickens presents Scrooge's transformation through the contrast between his initial dismissal of charity — "Are there no prisons? Are there no workhouses?" — and his later desperate plea to the Ghost of Christmas Yet to Come. The rhetorical questions in Stave 1 reveal a man who views poverty as a moral failing rather than a social injustice, reflecting the utilitarian attitudes of the Victorian middle class. By Stave 5, Scrooge's generosity is framed as almost frantic — he "chuckled" and "laughed" — suggesting Dickens believed that compassion was not just morally right but personally liberating.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When discussing 19th-century context, always connect it to the writer's PURPOSE. Do not just state facts about the era — explain how the writer uses their text to challenge, reflect, or critique the attitudes of the time.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a history essay instead of a literature essay. Context should support your analysis of the text — "Dickens critiques workhouse culture through Scrooge's callousness" — not replace it.</div>`,
      quiz: [
        { id: 'wjec-lt-m4-q1', question: 'How many marks is the 19th-century prose section worth?', options: ['20 marks', '30 marks', '40 marks', '50 marks'], correct: 2, explanation: 'Section B is worth 40 marks — the same as Section A and Section C, giving the paper a perfectly balanced structure.' },
        { id: 'wjec-lt-m4-q2', question: 'Which assessment objective is particularly important for 19th-century texts?', options: ['AO1', 'AO2', 'AO3 (context)', 'AO4'], correct: 2, explanation: 'AO3 (understanding texts in their social, historical, and literary contexts) is especially important for 19th-century texts, where the period context is crucial to meaning.' },
        { id: 'wjec-lt-m4-q3', question: 'Which of these is NOT a WJEC Eduqas 19th-century set text?', options: ['A Christmas Carol', 'Wuthering Heights', 'Jekyll and Hyde', 'Jane Eyre'], correct: 1, explanation: 'Wuthering Heights is not on the standard WJEC Eduqas set text list. The list includes A Christmas Carol, Jekyll and Hyde, Jane Eyre, Great Expectations, Pride and Prejudice, and Silas Marner.' },
        { id: 'wjec-lt-m4-q4', question: 'How should you use contextual knowledge?', options: ['Write a separate paragraph about the era', 'Weave it into your analysis to explain the writer\'s purpose', 'Only mention it in the conclusion', 'Avoid it entirely'], correct: 1, explanation: 'Context must be integrated into your analysis, showing how it connects to the writer\'s purpose and the effects created in the text.' },
      ],
    },
    {
      id: 'wjec-lt-m5',
      title: 'Writing Literature Essays for WJEC',
      duration: '30 mins',
      content: `<h2>Essay Technique for WJEC Eduqas Literature</h2>
<p>WJEC Eduqas rewards essays that combine <strong>close textual analysis</strong> with <strong>personal engagement</strong> and <strong>contextual understanding</strong>. The mark scheme emphasises "informed personal response" — the examiner wants your interpretation, not a rehearsed model answer.</p>

<div class="key-term"><strong>Key Term: Informed personal response (AO1)</strong> — A response that shows genuine engagement with the text, supported by well-chosen textual references. It means going beyond surface-level reading to offer your own interpretation, backed by evidence.</div>

<h3>The WJEC Paragraph Structure</h3>
<p>Use a clear analytical framework for each paragraph:</p>
<ul>
<li><strong>Point</strong> — Make a clear claim about the text</li>
<li><strong>Evidence</strong> — Embed a short, well-chosen quotation</li>
<li><strong>Analysis</strong> — Explore the language: what are the connotations? What effects are created?</li>
<li><strong>Context</strong> — Where relevant, link to social, historical, or literary context</li>
<li><strong>Development</strong> — Push further: consider alternative interpretations, structural significance, or links to wider themes</li>
</ul>

<h3>What Separates Good from Excellent</h3>
<p>The WJEC mark scheme distinguishes between:</p>
<ul>
<li><strong>Band 3 (mid-range):</strong> Explains the text clearly with some analysis of language</li>
<li><strong>Band 4 (good):</strong> Analyses language in detail, uses context purposefully, shows personal engagement</li>
<li><strong>Band 5 (excellent):</strong> Explores multiple layers of meaning, analyses structure and form, offers sophisticated personal interpretation with integrated context</li>
</ul>

<div class="model-answer"><strong>Band 5 Example:</strong> Shakespeare arguably presents Lady Macbeth's "unsex me here" speech not merely as an invocation of evil, but as a devastating critique of the gender constraints that force ambitious women to reject their femininity in order to access power. The imperative "unsex me" is violent in its self-denial — she must literally unmake herself to act. A feminist reading might suggest that Lady Macbeth's later madness is not simply guilt, but the psychological cost of performing a masculinity that was never sustainable.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> WJEC Eduqas examiners specifically look for "exploratory" responses at the top bands. Use tentative language — "perhaps," "arguably," "this could suggest" — to show you are exploring meaning rather than stating fixed facts.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing formulaic PEE (Point, Evidence, Explain) paragraphs without genuine personal engagement. The mark scheme explicitly rewards candidates who show they have thought about the text, not just memorised analytical templates.</div>`,
      quiz: [
        { id: 'wjec-lt-m5-q1', question: 'What does "informed personal response" mean?', options: ['Copying a model answer', 'Your own interpretation supported by textual evidence', 'Writing about your personal life', 'Summarising the plot'], correct: 1, explanation: 'AO1 rewards genuine engagement with the text — your own interpretation, backed by well-chosen quotations and references.' },
        { id: 'wjec-lt-m5-q2', question: 'What separates Band 4 from Band 5 in the WJEC mark scheme?', options: ['Length of essay', 'Band 5 explores multiple meanings and offers sophisticated interpretation', 'Band 5 uses more quotations', 'There is no difference'], correct: 1, explanation: 'Band 5 requires exploring multiple layers of meaning, analysing form and structure, and offering sophisticated personal interpretation with integrated context.' },
        { id: 'wjec-lt-m5-q3', question: 'Why should you use tentative language like "perhaps" and "arguably"?', options: ['Because you are unsure of the answer', 'To show you are exploring meaning rather than stating fixed facts', 'Because the mark scheme penalises certainty', 'To fill space'], correct: 1, explanation: 'Tentative language signals to the examiner that you are exploring the text and considering multiple interpretations — a key feature of top-band responses.' },
        { id: 'wjec-lt-m5-q4', question: 'What is the danger of using a rigid PEE structure?', options: ['It makes your essay too short', 'It can become formulaic and lack genuine personal engagement', 'PEE is not allowed by WJEC', 'It takes too long to write'], correct: 1, explanation: 'PEE is a useful starting point, but rigid adherence to it can produce formulaic responses that lack the exploratory quality WJEC rewards at the top bands.' },
      ],
    },
    {
      id: 'wjec-lt-m6',
      title: 'Managing Component 2: The 120-Mark Paper',
      duration: '25 mins',
      content: `<h2>The Biggest Single Literature Paper of Any Board</h2>
<p>Component 2 is <strong>2 hours 30 minutes</strong> long and worth <strong>120 marks — 60% of your entire Literature GCSE</strong>. No other exam board sets a single Literature paper this large. Managing your time and energy across three sections is the single most important skill for this exam.</p>

<div class="key-term"><strong>Key Term: Component 2 structure</strong> — Three equally weighted sections, each worth 40 marks: Section A (post-1914 prose/drama), Section B (19th-century prose), Section C (unseen poetry). Total: 120 marks in 2h 30m.</div>

<h3>Timing Breakdown</h3>
<p>With 150 minutes for 120 marks, you have <strong>roughly 1.25 minutes per mark</strong>. Split your time as follows:</p>
<ul>
<li><strong>Section A (post-1914):</strong> 50 minutes — 20 min extract, 30 min essay</li>
<li><strong>Section B (19th-century):</strong> 50 minutes — 20 min extract, 30 min essay</li>
<li><strong>Section C (unseen poetry):</strong> 50 minutes — 30 min single poem, 20 min comparison</li>
</ul>

<h3>Energy Management</h3>
<p>Two and a half hours of continuous essay writing is physically and mentally demanding. Plan for this:</p>
<ul>
<li><strong>Start with your strongest section</strong> — WJEC does not require you to answer in order. Build confidence early.</li>
<li><strong>Take 1-minute micro-breaks</strong> between sections — stretch your writing hand, drink water, refocus</li>
<li><strong>Plan before you write</strong> — 3 minutes of planning saves 10 minutes of unfocused writing</li>
<li><strong>Monitor your time</strong> — Write your target finish times on the paper: e.g., "Section A done by 10:00, Section B done by 10:50, Section C done by 11:40"</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> If you run out of time on your final section, bullet-point your remaining ideas with key quotations. Examiners can award marks for demonstrated knowledge even in note form — a blank page scores zero.</div>

<h3>Common Timing Traps</h3>
<p>The most common reason students underperform on Component 2 is <strong>poor time management</strong>, not poor knowledge. These traps cost marks every year:</p>
<ul>
<li>Spending 70 minutes on Section A because you know the text well, then rushing Sections B and C</li>
<li>Losing 10 minutes re-reading the extract obsessively instead of starting to write</li>
<li>Writing excessively long introductions that add no analytical value</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating all three sections equally in preparation but not in the exam. Students often over-invest in their favourite text and underprepare for unseen poetry. Remember: Section C (unseen poetry) requires no memorised quotations — the poems are in front of you. It is the easiest section to score well on with good technique.</div>

<div class="model-answer"><strong>Exam-Day Template:</strong> Write this on the front of your paper as soon as the exam starts:<br><br>Section A (post-1914): START → [time] — FINISH by [+50 min]<br>Section B (19th-century): START → [time] — FINISH by [+50 min]<br>Section C (unseen poetry): START → [time] — FINISH by [+50 min]<br><br>Stick to these times ruthlessly. An unfinished excellent essay scores lower than three completed good essays.</div>`,
      quiz: [
        { id: 'wjec-lt-m6-q1', question: 'How many marks is Component 2 worth in total?', options: ['60 marks', '80 marks', '100 marks', '120 marks'], correct: 3, explanation: 'Component 2 is worth 120 marks — the largest single Literature paper of any GCSE board. It represents 60% of the total GCSE.' },
        { id: 'wjec-lt-m6-q2', question: 'How should you split your time across the three sections?', options: ['60 min / 60 min / 30 min', '50 min / 50 min / 50 min', '40 min / 40 min / 70 min', '70 min / 50 min / 30 min'], correct: 1, explanation: 'Each section is worth 40 marks, so each deserves roughly 50 minutes. Equal time allocation matches the equal mark allocation.' },
        { id: 'wjec-lt-m6-q3', question: 'What should you do if you run out of time on your final section?', options: ['Leave it blank', 'Bullet-point your remaining ideas with key quotations', 'Rush through with single-sentence paragraphs', 'Go back and improve earlier sections'], correct: 1, explanation: 'Bullet points with key quotations show the examiner your knowledge and can still earn marks. A blank page always scores zero.' },
        { id: 'wjec-lt-m6-q4', question: 'Why is Section C (unseen poetry) potentially the easiest section to score well on?', options: ['The poems are very short', 'It requires no memorised quotations — the poems are printed in front of you', 'It is only worth 20 marks', 'The questions are simpler'], correct: 1, explanation: 'Unlike Sections A and B, where you need memorised quotations from your set texts, Section C gives you the poems on the page. Good analytical technique is all you need.' },
      ],
    },
  ],
  assessmentQuestions: [
    { id: 'wjec-lt-a1', question: 'How many marks is Component 2 worth?', options: ['60', '80', '100', '120'], correct: 3, explanation: 'Component 2 is worth 120 marks — 60% of the total GCSE and the largest single Literature paper of any board.' },
    { id: 'wjec-lt-a2', question: 'How long is the Component 2 exam?', options: ['1h 30m', '2h', '2h 30m', '3h'], correct: 2, explanation: 'Component 2 lasts 2 hours 30 minutes — 150 minutes for 120 marks.' },
    { id: 'wjec-lt-a3', question: 'How many marks is the Shakespeare Part (a) extract question worth?', options: ['10', '15', '20', '25'], correct: 1, explanation: 'Part (a) is worth 15 marks and focuses on close analysis of the printed extract.' },
    { id: 'wjec-lt-a4', question: 'How many marks is the Shakespeare Part (b) essay worth?', options: ['15', '20', '25', '30'], correct: 2, explanation: 'Part (b) is worth 25 marks and requires you to write about the whole play.' },
    { id: 'wjec-lt-a5', question: 'Which Shakespeare play is NOT on the WJEC Eduqas set text list?', options: ['Macbeth', 'Hamlet', 'Othello', 'Twelfth Night'], correct: 1, explanation: 'Hamlet is not on the WJEC Eduqas list. The six set plays are Macbeth, Romeo and Juliet, Much Ado About Nothing, Othello, The Merchant of Venice, and Twelfth Night.' },
    { id: 'wjec-lt-a6', question: 'How many sections does Component 2 have?', options: ['2', '3', '4', '5'], correct: 1, explanation: 'Component 2 has three sections: A (post-1914 prose/drama), B (19th-century prose), and C (unseen poetry), each worth 40 marks.' },
    { id: 'wjec-lt-a7', question: 'What does AO1 assess?', options: ['Language analysis', 'Informed personal response with textual references', 'Context', 'Comparison'], correct: 1, explanation: 'AO1 assesses your ability to read, understand, and respond to texts with an informed personal response supported by textual references.' },
    { id: 'wjec-lt-a8', question: 'What does AO3 assess?', options: ['Language and structure', 'Comparison', 'Social, historical, and literary context', 'Technical accuracy'], correct: 2, explanation: 'AO3 assesses understanding of the relationship between texts and their social, historical, and literary contexts.' },
    { id: 'wjec-lt-a9', question: 'What percentage of the Literature GCSE does Component 2 represent?', options: ['40%', '50%', '60%', '70%'], correct: 2, explanation: 'Component 2 is worth 60% of the total Literature GCSE — making it the dominant paper.' },
    { id: 'wjec-lt-a10', question: 'What kind of language signals an exploratory response?', options: ['Definitive statements only', 'Tentative language like "perhaps" and "arguably"', 'Bullet points', 'First person narrative'], correct: 1, explanation: 'Tentative language shows you are exploring multiple interpretations rather than stating fixed conclusions — a key feature of top-band responses.' },
    { id: 'wjec-lt-a11', question: 'How should you approach timing on Component 2?', options: ['Spend most time on your best section', 'Split roughly 50 minutes per section', 'Spend 90 minutes on set texts, 60 on poetry', 'There is no time pressure'], correct: 1, explanation: 'Each section is worth 40 marks, so roughly 50 minutes each provides equal time for equal marks.' },
    { id: 'wjec-lt-a12', question: 'What is the best way to include context in your essays?', options: ['Write a separate context paragraph', 'Weave it into your analysis to support your argument', 'Only mention it in the introduction', 'Avoid it — it wastes time'], correct: 1, explanation: 'Context should be integrated naturally into your analytical points, showing how it connects to the writer\'s purpose and the meaning of the text.' },
    { id: 'wjec-lt-a13', question: 'What should you do if you run out of time on your final section?', options: ['Leave it blank', 'Bullet-point remaining ideas with quotations', 'Copy out the extract', 'Write an apology to the examiner'], correct: 1, explanation: 'Bullet points with key quotations demonstrate your knowledge and can still earn marks. A blank page scores zero.' },
    { id: 'wjec-lt-a14', question: 'Why is Section C (unseen poetry) a strong opportunity to gain marks?', options: ['It is worth more marks', 'The poems are printed for you — no memorisation needed', 'The questions are easier', 'It is marked more generously'], correct: 1, explanation: 'Unlike set text sections, unseen poetry provides the texts on the page. Good analytical technique is all you need — no memorised quotations required.' },
    { id: 'wjec-lt-a15', question: 'How many key moments should you plan for a whole-text essay?', options: ['1-2', '4-5', '8-10', 'As many as possible'], correct: 1, explanation: 'Planning 4-5 key moments from across the text gives you enough range to show whole-text knowledge without overloading your essay.' },
    { id: 'wjec-lt-a16', question: 'What is the main danger of a rigid PEE structure?', options: ['It is too short', 'It can become formulaic and lack genuine engagement', 'WJEC does not accept PEE', 'It takes too long'], correct: 1, explanation: 'PEE is a useful scaffold, but rigid adherence produces formulaic responses. WJEC rewards exploratory personal engagement over mechanical structures.' },
    { id: 'wjec-lt-a17', question: 'In the Shakespeare extract question, what should you focus on?', options: ['Plot summary', 'How Shakespeare uses language and dramatic techniques to create effects', 'Historical facts about the Elizabethan era', 'Comparing with other plays'], correct: 1, explanation: 'The extract question rewards close analysis of Shakespeare\'s language, imagery, and dramatic techniques — not plot retelling or general context.' },
    { id: 'wjec-lt-a18', question: 'What is the total mark for Component 1 Shakespeare (Parts a and b combined)?', options: ['25 marks', '30 marks', '40 marks', '50 marks'], correct: 2, explanation: 'Part (a) is 15 marks and Part (b) is 25 marks, giving a combined total of 40 marks for the Shakespeare section.' },
    { id: 'wjec-lt-a19', question: 'Which band requires exploring multiple layers of meaning?', options: ['Band 2', 'Band 3', 'Band 4', 'Band 5'], correct: 3, explanation: 'Band 5 (the highest) requires exploring multiple layers of meaning, analysing form and structure, and offering sophisticated personal interpretation.' },
    { id: 'wjec-lt-a20', question: 'What is more effective than writing excessively long introductions?', options: ['Writing longer conclusions', 'Getting straight into analysis with a clear thesis', 'Copying out the question', 'Listing techniques you will use'], correct: 1, explanation: 'Long introductions waste time and add no analytical value. A concise thesis statement followed by immediate analysis is far more effective.' },
  ],
};

export default wjecGcseLitTexts;
