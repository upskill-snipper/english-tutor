// OCR GCSE English Literature: Texts — Spec J352
// All content is OCR GCSE-specific — NOT AQA, NOT Edexcel

const ocrGcseLitTexts = {
  id: 'ocr-gcse-lit-texts',
  title: 'OCR GCSE Literature: Texts',
  subtitle: 'Master the J352 specification with modern prose, 19th-century fiction, and Shakespeare.',
  tier: 'GCSE',
  board: 'OCR',
  specCode: 'J352',
  price: 39,
  duration: '5-7 hours',
  level: 'GCSE (Years 10-11)',
  description: 'Complete preparation for OCR GCSE English Literature. Learn how to tackle the unique comparative extract question on Paper 1, master modern and 19th-century text essays, and develop confident Shakespeare responses across extract and discursive formats.',
  color: '#7c3aed',
  moduleList: [
    {
      id: 'ocr-lt-m1',
      title: 'Paper 1 Part (a): Comparing Studied Text with Unseen Extract',
      duration: '40 mins',
      content: `<h2>The OCR Comparative Extract Question (20 marks)</h2>
<p>This question is <strong>unique to OCR</strong> and catches many students off guard. You are given an extract from your studied modern prose or drama text alongside an <strong>unseen extract from the same genre</strong>. You must compare how both writers present a particular theme, character type, or idea.</p>

<div class="key-term"><strong>Key Term: Comparative extract question</strong> — A question requiring you to analyse connections between a passage from your studied text and a previously unseen extract. Both texts share the same genre (prose with prose, drama with drama). You must compare writers' methods, not just content.</div>

<h3>How It Works in the Exam</h3>
<p>Paper 1, Section A, Part (a) prints an extract from your studied modern text. Below it, you receive an unseen extract from a different text in the same genre. The question asks you to compare how both writers present something specific — for example, how they present conflict, isolation, power, or family relationships.</p>

<div class="text-extract">"Compare how the writers of these two extracts present ideas about control. In your answer you should consider the writers' use of language, structure and form."<div class="source">Example Part (a) question style — OCR J352 Paper 1</div></div>

<h3>Set Texts for Modern Prose and Drama</h3>
<p>You will have studied ONE of the following:</p>
<ul>
<li><strong>Anita and Me</strong> — Meera Syal (prose)</li>
<li><strong>Never Let Me Go</strong> — Kazuo Ishiguro (prose)</li>
<li><strong>Animal Farm</strong> — George Orwell (prose)</li>
<li><strong>An Inspector Calls</strong> — J.B. Priestley (drama)</li>
<li><strong>DNA</strong> — Dennis Kelly (drama)</li>
<li><strong>Leave Taking</strong> — Winsome Pinnock (drama)</li>
</ul>

<h3>Structuring Your Comparison</h3>
<p>Use an <strong>alternating comparison</strong> structure. Each paragraph should discuss both texts, linked by comparative connectives (similarly, in contrast, whereas, however). Aim for 3-4 developed comparative paragraphs covering language, structure, and form.</p>

<div class="model-answer"><strong>Model Opening (Animal Farm + unseen):</strong> Both writers present control through the manipulation of language, but in strikingly different ways. Orwell uses Squealer's rhetorical questions — "Surely, comrades, you do not want Jones back?" — to show how authority figures weaponise fear to maintain obedience. The implied threat silences dissent. In contrast, the unseen extract presents control through silence; the protagonist's inability to speak becomes a metaphor for powerlessness, with the short, fragmented sentences mirroring their restricted agency.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> You cannot predict the unseen extract, but you CAN prepare your studied text thoroughly. Know its key themes, techniques, and quotations so well that you can quickly find connections with any unseen passage.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about each text separately — one half on the studied text, one half on the unseen. This is NOT comparison. You must weave both texts together within each paragraph to show genuine comparative thinking.</div>`,
      quiz: [
        { id: 'ocr-lt-m1-q1', question: 'What makes the OCR Paper 1 Part (a) question unique compared to other exam boards?', options: ['It only tests the studied text', 'It requires comparing the studied text with an unseen same-genre extract', 'It is a multiple-choice question', 'It tests two studied texts against each other'], correct: 1, explanation: 'OCR uniquely requires students to compare an extract from their studied modern text with an unseen extract from the same genre — a skill no other major board tests in this way.' },
        { id: 'ocr-lt-m1-q2', question: 'How many marks is the Part (a) comparative question worth?', options: ['10 marks', '15 marks', '20 marks', '40 marks'], correct: 2, explanation: 'Part (a) is worth 20 marks. It tests your ability to compare writers\' methods across a studied and an unseen extract.' },
        { id: 'ocr-lt-m1-q3', question: 'Which of the following is a set modern drama text for OCR J352?', options: ['Blood Brothers', 'An Inspector Calls', 'The Crucible', 'A Taste of Honey'], correct: 1, explanation: 'An Inspector Calls by J.B. Priestley is one of the set modern drama texts for OCR GCSE Literature. The others listed are set texts for different boards.' },
        { id: 'ocr-lt-m1-q4', question: 'What is the best paragraph structure for Part (a)?', options: ['All about the studied text, then all about the unseen', 'Alternating comparison — both texts discussed in every paragraph', 'Only discuss the unseen extract in detail', 'Write a summary of each text separately'], correct: 1, explanation: 'An alternating structure — discussing both texts within each paragraph using comparative connectives — demonstrates sustained comparison, which is essential for the higher mark bands.' },
      ],
    },
    {
      id: 'ocr-lt-m2',
      title: 'Paper 1 Part (b): Modern Text Essay',
      duration: '35 mins',
      content: `<h2>The Modern Text Essay (20 marks)</h2>
<p>Part (b) follows directly from Part (a) and tests a <strong>different aspect</strong> of the same modern text you studied. While Part (a) gave you an extract to work with, Part (b) requires you to write about the <strong>whole text</strong> from memory — no extract is provided.</p>

<div class="key-term"><strong>Key Term: Whole-text essay</strong> — An essay that draws on your knowledge of the entire text, not just a single extract. You must select your own quotations and references from across the text to support your argument.</div>

<h3>What the Question Looks Like</h3>
<p>The question will focus on a different theme, character, or idea from the one tested in Part (a). This ensures you demonstrate breadth of knowledge across the whole text.</p>

<div class="text-extract">"Explore how Priestley presents ideas about responsibility in An Inspector Calls. You should refer to the context of the play in your answer."<div class="source">Example Part (b) question style — OCR J352 Paper 1</div></div>

<h3>Planning Your Essay</h3>
<p>You have approximately <strong>35 minutes</strong>. Spend 5 minutes planning and 30 minutes writing. A strong essay needs:</p>
<ul>
<li><strong>3-4 developed paragraphs</strong> each with a clear analytical point</li>
<li><strong>Embedded quotations</strong> — short, precise, woven into your sentences</li>
<li><strong>Context</strong> — link the writer's choices to the historical, social, or literary context</li>
<li><strong>Writer's purpose</strong> — explain WHY the writer made these choices</li>
</ul>

<div class="model-answer"><strong>Model Paragraph (An Inspector Calls):</strong> Priestley uses the character of Mr Birling as a vehicle to critique capitalist self-interest. Birling's assertion that "a man has to mind his own business and look after himself" encapsulates the individualism Priestley saw as destructive in 1912 Edwardian society. The dramatic irony of Birling's confident predictions — that the Titanic is "unsinkable" and war is impossible — undermines his authority entirely, encouraging the 1945 audience to reject his worldview. Priestley's purpose is clear: collective responsibility must replace selfish capitalism.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Part (b) will always test a different aspect from Part (a). If Part (a) focused on power, Part (b) might focus on relationships or social class. Prepare at least four distinct themes for your studied text so you are never caught off guard.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Retelling the plot instead of analysing the writer's methods. Examiners reward analysis of HOW and WHY, not narrative summary. Every paragraph should focus on the writer's craft, not what happens next in the story.</div>

<h3>Context — How to Use It</h3>
<p>OCR rewards contextual understanding, but context must be <strong>integrated</strong>, not bolted on. Do not write a separate "context paragraph" — instead, weave context into your analysis to explain why the writer made particular choices.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a standalone context paragraph that reads like a history essay. Context should explain the writer's choices — e.g., "Priestley, writing in 1945 for an audience that had experienced two world wars, uses Birling's hubris to warn against repeating pre-war complacency."</div>`,
      quiz: [
        { id: 'ocr-lt-m2-q1', question: 'How does Part (b) differ from Part (a) on Paper 1?', options: ['Part (b) tests a different text entirely', 'Part (b) tests the same text but on a different aspect, without a printed extract', 'Part (b) is a creative writing task', 'Part (b) tests the unseen extract only'], correct: 1, explanation: 'Part (b) tests a different theme or aspect of the SAME studied text, but unlike Part (a), no extract is provided — you must refer to the whole text from memory.' },
        { id: 'ocr-lt-m2-q2', question: 'How many marks is Part (b) worth?', options: ['10 marks', '20 marks', '30 marks', '40 marks'], correct: 1, explanation: 'Part (b) is worth 20 marks, the same as Part (a). Together, Section A is worth 40 marks.' },
        { id: 'ocr-lt-m2-q3', question: 'How should context be used in the essay?', options: ['In a separate introductory paragraph', 'Integrated into analysis to explain the writer\'s choices', 'Only in the conclusion', 'Context is not required for OCR'], correct: 1, explanation: 'Context should be woven into your analytical paragraphs to explain WHY the writer made particular choices, not written as a separate block of historical information.' },
        { id: 'ocr-lt-m2-q4', question: 'What is the recommended time allocation for Part (b)?', options: ['20 minutes', '35 minutes', '50 minutes', '1 hour'], correct: 1, explanation: 'Approximately 35 minutes is recommended for Part (b): 5 minutes planning and 30 minutes writing 3-4 developed analytical paragraphs.' },
      ],
    },
    {
      id: 'ocr-lt-m3',
      title: 'Paper 1 Section B: 19th-Century Extract Questions',
      duration: '40 mins',
      content: `<h2>19th-Century Literature: The Extract Route (40 marks)</h2>
<p>Section B of Paper 1 tests your knowledge of a <strong>19th-century prose text</strong>. OCR gives you a <strong>choice</strong>: answer an extract-based question OR a discursive (whole-text) essay. This module focuses on the <strong>extract route</strong>.</p>

<div class="key-term"><strong>Key Term: Extract-based question</strong> — A question that prints a passage from your studied 19th-century text and asks you to analyse how the writer uses language, structure, and form in that extract, then extend your discussion to the wider text. Worth 40 marks.</div>

<h3>The Set 19th-Century Texts</h3>
<p>You will have studied ONE of the following:</p>
<ul>
<li><strong>Great Expectations</strong> — Charles Dickens</li>
<li><strong>Pride and Prejudice</strong> — Jane Austen</li>
<li><strong>The War of the Worlds</strong> — H.G. Wells</li>
<li><strong>The Strange Case of Dr Jekyll and Mr Hyde</strong> — Robert Louis Stevenson</li>
<li><strong>Jane Eyre</strong> — Charlotte Bront&euml;</li>
<li><strong>A Christmas Carol</strong> — Charles Dickens</li>
</ul>

<h3>How the Extract Question Works</h3>
<p>The exam prints a passage (typically 20-30 lines) from your studied text. The question asks you to analyse the extract closely AND relate your analysis to the wider text. You must cover:</p>
<ul>
<li><strong>Close language analysis</strong> — word choices, imagery, figurative language</li>
<li><strong>Structural choices</strong> — sentence types, paragraph organisation, narrative voice</li>
<li><strong>Links to the wider text</strong> — how this extract connects to themes, character development, and the writer's overall purpose</li>
<li><strong>Context</strong> — Victorian/19th-century social, historical, and literary context</li>
</ul>

<div class="text-extract">"Explore how Stevenson presents the theme of duality in this extract and elsewhere in the novel."<div class="source">Example extract question style — OCR J352 Paper 1 Section B</div></div>

<div class="model-answer"><strong>Model Paragraph (Jekyll and Hyde):</strong> In this extract, Stevenson uses the fog-shrouded streets of London as a physical manifestation of moral obscurity. The "great chocolate-coloured pall" that hangs over the city mirrors the concealment at the heart of Jekyll's experiment — just as the fog hides London's buildings, Victorian respectability hides the "primitive" desires that Hyde embodies. The adjective "chocolate-coloured" is deliberately unsettling, blending the domestic and the sinister. Elsewhere in the novella, Stevenson extends this motif through the "two doors" of Jekyll's house: the respectable front entrance and the "blistered" back door, structurally encoding the duality that defines the text.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The extract question is often the safer choice if you are confident with close language analysis. You have the text in front of you, so you do not need to rely entirely on memory. However, you MUST also discuss the wider text — do not just analyse the extract in isolation.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Only analysing the printed extract and ignoring the "and elsewhere in the novel" instruction. The question explicitly asks you to connect the extract to the wider text. Aim for roughly 60% extract analysis and 40% wider text discussion.</div>`,
      quiz: [
        { id: 'ocr-lt-m3-q1', question: 'How many marks is the Section B 19th-century question worth?', options: ['20 marks', '30 marks', '40 marks', '50 marks'], correct: 2, explanation: 'The Section B question is worth 40 marks — the single highest-value question on Paper 1.' },
        { id: 'ocr-lt-m3-q2', question: 'What choice does OCR give you for the 19th-century question?', options: ['Choice of two different texts', 'Choice of extract-based OR discursive essay', 'Choice of poetry OR prose', 'No choice — one compulsory question'], correct: 1, explanation: 'OCR uniquely offers a choice between an extract-based question and a discursive (whole-text) essay for the 19th-century text.' },
        { id: 'ocr-lt-m3-q3', question: 'When answering the extract question, what balance should you aim for?', options: ['100% extract analysis', '60% extract, 40% wider text', '50% context, 50% analysis', '100% wider text'], correct: 1, explanation: 'You should spend roughly 60% of your answer on close analysis of the printed extract and 40% discussing how the themes connect to the wider text.' },
        { id: 'ocr-lt-m3-q4', question: 'Which of these is NOT a set 19th-century text for OCR J352?', options: ['Great Expectations', 'Frankenstein', 'Jane Eyre', 'A Christmas Carol'], correct: 1, explanation: 'Frankenstein is not on the OCR J352 set text list. The six options are Great Expectations, Pride and Prejudice, The War of the Worlds, Jekyll and Hyde, Jane Eyre, and A Christmas Carol.' },
      ],
    },
    {
      id: 'ocr-lt-m4',
      title: 'Paper 1 Section B: 19th-Century Discursive Essays',
      duration: '35 mins',
      content: `<h2>The Discursive Essay Route (40 marks)</h2>
<p>If you choose the discursive option instead of the extract question, you write a <strong>whole-text essay</strong> with no printed extract. This requires excellent knowledge of the text, including memorised quotations and detailed understanding of the writer's methods across the entire novel.</p>

<div class="key-term"><strong>Key Term: Discursive essay</strong> — An essay that argues a particular interpretation across the whole text. Unlike the extract question, no passage is provided — you must select and deploy your own evidence entirely from memory.</div>

<h3>When to Choose Discursive</h3>
<p>The discursive route suits you if:</p>
<ul>
<li>You have <strong>strong memorised quotations</strong> across the whole text</li>
<li>You are confident discussing <strong>multiple chapters/sections</strong></li>
<li>You prefer building a <strong>sustained argument</strong> rather than close reading</li>
<li>The discursive question aligns better with your <strong>prepared themes</strong></li>
</ul>

<div class="text-extract">"'Dickens presents Scrooge's transformation as inevitable from the very beginning.' How far do you agree with this statement?"<div class="source">Example discursive question style — OCR J352 Paper 1 Section B</div></div>

<h3>Structuring a Discursive Essay</h3>
<p>A strong discursive essay follows an <strong>argument structure</strong>:</p>
<ul>
<li><strong>Introduction:</strong> State your thesis clearly — do you agree, disagree, or partially agree?</li>
<li><strong>Paragraphs 1-2:</strong> Evidence supporting one side of the argument</li>
<li><strong>Paragraphs 3-4:</strong> Evidence for the counterargument or a more nuanced view</li>
<li><strong>Conclusion:</strong> A considered judgement that reflects the complexity of the text</li>
</ul>

<div class="model-answer"><strong>Model Paragraph (A Christmas Carol):</strong> Dickens arguably foreshadows Scrooge's redemption from the opening stave through the narrator's playful, digressive tone. The extended aside about doornails — "Old Marley was as dead as a door-nail" — establishes an intimate, humorous narrative voice that seems to be guiding the reader toward a comic rather than tragic resolution. This contrasts sharply with the Gothic description of Marley's ghost, whose "face" on the knocker is rendered in chilling detail. The tonal oscillation suggests that Dickens, writing for a Victorian Christmas audience, always intended the story as a moral fable of transformation rather than a psychological study of change.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> "How far do you agree?" questions demand a <strong>balanced argument</strong>. The strongest answers do not simply agree or disagree — they explore different perspectives and reach a nuanced conclusion. Show the examiner you can hold multiple interpretations simultaneously.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Choosing the discursive route without enough memorised quotations. If you can only remember 2-3 quotations, you will struggle to build a sustained argument across 4-5 paragraphs. In that case, the extract question is the safer option.</div>

<h3>Quotation Strategy</h3>
<p>For the discursive essay, aim to have <strong>10-15 short quotations</strong> memorised for your 19th-century text, covering different themes and moments. Short quotations (3-6 words) are easier to memorise and embed naturally into sentences.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> You do not need to memorise full sentences. Short, impactful phrases work better: "hard and sharp as flint" (Scrooge), "secret pleasures" (Jekyll), "I am no bird" (Jane Eyre). These are easy to embed and rich in analysis potential.</div>`,
      quiz: [
        { id: 'ocr-lt-m4-q1', question: 'What is the key difference between the extract and discursive routes?', options: ['They are worth different marks', 'The discursive provides no printed extract — you must rely on memory', 'The extract question is harder', 'The discursive tests a different text'], correct: 1, explanation: 'Both routes are worth 40 marks and test the same text. The key difference is that the discursive provides no printed extract, so you must select and deploy your own evidence from memory.' },
        { id: 'ocr-lt-m4-q2', question: 'How should you respond to a "How far do you agree?" question?', options: ['Simply agree with the statement', 'Simply disagree with the statement', 'Explore multiple perspectives and reach a nuanced conclusion', 'Ignore the statement and write about your favourite theme'], correct: 2, explanation: '"How far do you agree?" demands a balanced argument exploring different perspectives. The strongest answers show nuanced thinking and reach a considered judgement.' },
        { id: 'ocr-lt-m4-q3', question: 'How many memorised quotations should you aim for in the discursive essay?', options: ['2-3 long quotations', '10-15 short quotations covering different themes', '1 quotation per paragraph', 'No quotations are needed'], correct: 1, explanation: 'Aim for 10-15 short (3-6 word) quotations covering different themes and moments in the text. These are easy to memorise and embed naturally.' },
        { id: 'ocr-lt-m4-q4', question: 'When is the discursive route the WRONG choice?', options: ['When you prefer sustained arguments', 'When you have strong memorised quotations', 'When you can only remember 2-3 quotations', 'When the question matches your prepared themes'], correct: 2, explanation: 'If you only know a few quotations, you will struggle to build a sustained whole-text argument. The extract route gives you text on the page to analyse, making it safer when your memorisation is weak.' },
      ],
    },
    {
      id: 'ocr-lt-m5',
      title: 'Paper 2 Section B: Shakespeare',
      duration: '40 mins',
      content: `<h2>Shakespeare (40 marks)</h2>
<p>Paper 2, Section B tests your knowledge of a <strong>Shakespeare play</strong>. As with the 19th-century question, OCR gives you a <strong>choice</strong> between an extract-based question and a discursive essay. Both are worth 40 marks.</p>

<div class="key-term"><strong>Key Term: Paper 2</strong> — The second examined paper of OCR J352. Section A covers poetry (anthology and unseen). Section B covers Shakespeare. The paper is 2 hours long.</div>

<h3>The Set Shakespeare Plays</h3>
<p>You will have studied ONE of the following:</p>
<ul>
<li><strong>Romeo and Juliet</strong></li>
<li><strong>The Merchant of Venice</strong></li>
<li><strong>Macbeth</strong></li>
<li><strong>Much Ado About Nothing</strong></li>
</ul>

<h3>Extract-Based Shakespeare Question</h3>
<p>The exam prints a passage (typically 20-40 lines) from your studied play. You analyse the extract closely and connect it to the wider play. The same skills from Module 3 apply, but with additional focus on:</p>
<ul>
<li><strong>Dramatic techniques</strong> — soliloquy, aside, dramatic irony, staging</li>
<li><strong>Verse and prose</strong> — why Shakespeare switches between them</li>
<li><strong>Theatrical context</strong> — how the scene would work in performance</li>
</ul>

<div class="text-extract">"Explore how Shakespeare presents the relationship between Macbeth and Lady Macbeth in this extract and elsewhere in the play."<div class="source">Example extract question style — OCR J352 Paper 2 Section B</div></div>

<div class="model-answer"><strong>Model Paragraph (Macbeth):</strong> In this extract, Shakespeare inverts the expected gender dynamics of Jacobean society through Lady Macbeth's imperative commands: "look like th'innocent flower, / But be the serpent under't." The biblical allusion to the serpent in Eden positions Lady Macbeth as the tempter, subverting the early modern expectation of feminine obedience. The caesura in the line creates a dramatic pause that mirrors the deception she advocates — the surface appearance (flower) violently interrupted by the hidden reality (serpent). Elsewhere in the play, this dynamic shifts dramatically; by Act 5, Lady Macbeth is reduced to sleepwalking and hand-washing, her earlier control dissolved into guilt-driven madness.</div>

<h3>Discursive Shakespeare Essay</h3>
<p>The discursive option works identically to the 19th-century discursive route: no extract, whole-text argument, memorised quotations required. Shakespeare quotations can be harder to memorise, so prepare short, impactful phrases:</p>
<ul>
<li>"Look like th'innocent flower" (Macbeth)</li>
<li>"If you prick us, do we not bleed?" (Merchant of Venice)</li>
<li>"Star-crossed lovers" (Romeo and Juliet)</li>
<li>"Disdain and scorn ride sparkling in her eyes" (Much Ado)</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing Shakespeare, always consider the <strong>audience's perspective</strong>. A Jacobean audience would have different reactions from a modern audience — exploring this tension between historical and contemporary readings demonstrates sophisticated understanding.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating Shakespeare as a novel rather than a play. Always remember it is a dramatic text — discuss staging, audience response, dramatic tension, and theatrical effects alongside language analysis.</div>`,
      quiz: [
        { id: 'ocr-lt-m5-q1', question: 'How many marks is the Shakespeare question worth?', options: ['20 marks', '30 marks', '40 marks', '50 marks'], correct: 2, explanation: 'The Shakespeare question on Paper 2 Section B is worth 40 marks, whether you choose the extract or discursive route.' },
        { id: 'ocr-lt-m5-q2', question: 'Which of the following is NOT a set Shakespeare play for OCR J352?', options: ['Macbeth', 'Hamlet', 'Romeo and Juliet', 'The Merchant of Venice'], correct: 1, explanation: 'Hamlet is not on the OCR J352 set text list. The four options are Romeo and Juliet, The Merchant of Venice, Macbeth, and Much Ado About Nothing.' },
        { id: 'ocr-lt-m5-q3', question: 'What should you always consider when analysing Shakespeare?', options: ['Only the language techniques', 'That it is a dramatic text — staging, audience, and theatrical effects matter', 'Only the historical context', 'The number of acts in the play'], correct: 1, explanation: 'Shakespeare wrote plays for performance. You must discuss dramatic techniques, staging, audience response, and theatrical effects — not just treat it like a novel.' },
        { id: 'ocr-lt-m5-q4', question: 'What choice does OCR give for the Shakespeare question?', options: ['Choice of two different plays', 'Choice of extract-based or discursive essay', 'Choice of essay or creative writing', 'No choice — one compulsory question'], correct: 1, explanation: 'As with the 19th-century text, OCR offers a choice between an extract-based question and a discursive (whole-text) essay for the Shakespeare question.' },
      ],
    },
    {
      id: 'ocr-lt-m6',
      title: 'Extract vs Discursive: Choosing Your Question',
      duration: '25 mins',
      content: `<h2>Making the Right Choice in the Exam</h2>
<p>OCR is the only major board that gives you a <strong>genuine choice</strong> between extract-based and discursive questions for both the 19th-century text and Shakespeare. This is a significant advantage — but only if you make the right choice quickly and confidently.</p>

<div class="key-term"><strong>Key Term: Question choice</strong> — On Paper 1 Section B (19th-century) and Paper 2 Section B (Shakespeare), you choose between an extract-based question and a discursive whole-text essay. Both are worth 40 marks. You answer ONE only.</div>

<h3>Extract-Based: Pros and Cons</h3>
<table>
<tr><td><strong>Advantages</strong></td><td><strong>Disadvantages</strong></td></tr>
<tr><td>Text is in front of you — less reliance on memory</td><td>Can feel restrictive — you must start with the extract</td></tr>
<tr><td>Easier to do close language analysis</td><td>Still requires wider text knowledge (you cannot just analyse the extract)</td></tr>
<tr><td>Good for students who excel at detailed reading</td><td>Risk of spending too long on the extract and neglecting the wider text</td></tr>
</table>

<h3>Discursive: Pros and Cons</h3>
<table>
<tr><td><strong>Advantages</strong></td><td><strong>Disadvantages</strong></td></tr>
<tr><td>Freedom to choose your own evidence</td><td>Requires strong memorised quotations</td></tr>
<tr><td>Can build a more sophisticated argument</td><td>Risk of vague or generalised points without textual evidence</td></tr>
<tr><td>Good for students who know the whole text very well</td><td>Harder to demonstrate close language analysis</td></tr>
</table>

<h3>Decision-Making Strategy</h3>
<p>Follow this <strong>60-second decision process</strong> in the exam:</p>
<ol>
<li><strong>Read both questions</strong> — do not just jump to your preferred format</li>
<li><strong>Check the extract question</strong> — do you recognise the passage? Can you analyse its language?</li>
<li><strong>Check the discursive question</strong> — do you have enough memorised evidence for this topic?</li>
<li><strong>Choose the question where you can write the most detailed analysis</strong></li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Do NOT decide before the exam which format you will always choose. Read both questions every time. Sometimes the extract will be from a section you know brilliantly; other times the discursive question will align perfectly with your prepared themes. Be flexible.</div>

<div class="model-answer"><strong>Example Decision:</strong> The extract question prints the opening of Chapter 1 of Jekyll and Hyde (the door description). You know this passage well and can analyse the symbolism of the "two doors." The discursive question asks about secrecy — a theme you have fewer quotations for. Choose the extract question.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Deciding before the exam to "always do extract" or "always do discursive." This removes the advantage OCR gives you. Prepare for both routes and choose based on the specific questions in your exam.</div>

<h3>Time Management Across the Paper</h3>
<p>Paper 1 is <strong>2 hours</strong>. Section A (modern text Parts a and b) is worth 40 marks. Section B (19th-century) is worth 40 marks. Split your time evenly:</p>
<ul>
<li><strong>Section A Part (a):</strong> 40 minutes (comparison)</li>
<li><strong>Section A Part (b):</strong> 35 minutes (essay)</li>
<li><strong>Section B:</strong> 40 minutes (extract or discursive)</li>
<li><strong>Remaining 5 minutes:</strong> Reading and checking</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending too long on Section A and rushing Section B. Both sections are worth 40 marks — they deserve equal time. Use a watch and stick to your timing plan.</div>`,
      quiz: [
        { id: 'ocr-lt-m6-q1', question: 'How long should you spend deciding which question to answer?', options: ['No time — decide before the exam', '60 seconds — read both questions quickly', '10 minutes — plan both before choosing', '30 minutes — write half of each'], correct: 1, explanation: 'Spend about 60 seconds reading both questions and assessing which one you can write the most detailed analysis for. Do not decide before seeing the paper.' },
        { id: 'ocr-lt-m6-q2', question: 'When is the extract question the better choice?', options: ['Always', 'When you recognise the passage and can analyse its language closely', 'When you have no memorised quotations', 'Only for Shakespeare'], correct: 1, explanation: 'The extract question suits you when you recognise the passage, can analyse its language in detail, and can also link it to the wider text.' },
        { id: 'ocr-lt-m6-q3', question: 'How long is the Paper 1 exam?', options: ['1 hour', '1 hour 30 minutes', '2 hours', '2 hours 30 minutes'], correct: 2, explanation: 'Paper 1 is 2 hours long, covering Section A (modern text, 40 marks) and Section B (19th-century text, 40 marks).' },
        { id: 'ocr-lt-m6-q4', question: 'What is the biggest risk of pre-deciding your question format?', options: ['You might finish early', 'You lose the advantage of choice — the other question might suit you better', 'The examiner will know', 'There is no risk'], correct: 1, explanation: 'Pre-deciding removes OCR\'s unique advantage. The question you didn\'t plan for might be easier on the day. Always read both and choose based on the actual paper.' },
      ],
    },
  ],
  assessmentQuestions: [
    { id: 'ocr-lt-a1', question: 'What is the OCR GCSE Literature specification code?', options: ['8702', 'J352', '1ET0', '8520'], correct: 1, explanation: 'OCR GCSE English Literature is specification J352. 8702 is AQA, 1ET0 is Edexcel, and 8520 does not correspond to a major English Literature spec.' },
    { id: 'ocr-lt-a2', question: 'What is unique about OCR Paper 1 Part (a)?', options: ['It tests poetry', 'It requires comparing a studied modern text extract with an unseen same-genre extract', 'It is a creative writing task', 'It tests two Shakespeare plays'], correct: 1, explanation: 'OCR is unique in requiring students to compare an extract from their studied modern text with an unseen extract from the same genre. No other major board does this.' },
    { id: 'ocr-lt-a3', question: 'How many marks is Paper 1 worth in total?', options: ['40 marks', '60 marks', '80 marks', '100 marks'], correct: 2, explanation: 'Paper 1 is worth 80 marks total: Section A (Parts a and b) worth 40 marks, and Section B (19th-century text) worth 40 marks.' },
    { id: 'ocr-lt-a4', question: 'Which of these is a set modern prose text for OCR J352?', options: ['Lord of the Flies', 'Never Let Me Go', 'Of Mice and Men', 'The Woman in Black'], correct: 1, explanation: 'Never Let Me Go by Kazuo Ishiguro is one of the set modern prose texts for OCR J352.' },
    { id: 'ocr-lt-a5', question: 'What choice does OCR give for the 19th-century and Shakespeare questions?', options: ['Choice of text', 'Choice of extract-based or discursive essay', 'Choice of poetry or prose', 'No choice at all'], correct: 1, explanation: 'OCR uniquely offers a choice between an extract-based question and a discursive whole-text essay for both the 19th-century text and Shakespeare.' },
    { id: 'ocr-lt-a6', question: 'Which assessment is tested through the Part (b) modern text essay?', options: ['Close reading of a printed extract', 'Whole-text knowledge on a different aspect from Part (a)', 'Comparison with an unseen text', 'Creative writing in response to the text'], correct: 1, explanation: 'Part (b) tests whole-text knowledge on a different theme or aspect from the one tested in Part (a), with no printed extract provided.' },
    { id: 'ocr-lt-a7', question: 'How should context be used in OCR Literature essays?', options: ['In a separate paragraph at the start', 'Integrated into analysis to explain the writer\'s choices', 'Only mentioned in the conclusion', 'Context is not assessed by OCR'], correct: 1, explanation: 'Context should be woven into your analysis to explain why the writer made particular choices — not written as a standalone history paragraph.' },
    { id: 'ocr-lt-a8', question: 'Which 19th-century text features the theme of duality through Dr Jekyll?', options: ['Great Expectations', 'Pride and Prejudice', 'The Strange Case of Dr Jekyll and Mr Hyde', 'A Christmas Carol'], correct: 2, explanation: 'Stevenson\'s Jekyll and Hyde explores duality — the idea that every person contains both good and evil impulses beneath a respectable exterior.' },
    { id: 'ocr-lt-a9', question: 'How long is the Paper 1 exam?', options: ['1 hour', '1 hour 30 minutes', '2 hours', '3 hours'], correct: 2, explanation: 'Paper 1 is a 2-hour exam covering modern text (Section A, 40 marks) and 19th-century text (Section B, 40 marks).' },
    { id: 'ocr-lt-a10', question: 'Which Shakespeare play features the line "If you prick us, do we not bleed?"', options: ['Macbeth', 'Romeo and Juliet', 'The Merchant of Venice', 'Much Ado About Nothing'], correct: 2, explanation: 'This famous line is spoken by Shylock in The Merchant of Venice (Act 3, Scene 1), arguing for the common humanity of Jewish people.' },
    { id: 'ocr-lt-a11', question: 'What is the recommended balance for an extract-based answer?', options: ['100% extract analysis', '60% extract, 40% wider text', '40% extract, 60% context', '50% plot summary, 50% analysis'], correct: 1, explanation: 'Aim for roughly 60% close analysis of the printed extract and 40% discussion of how its themes connect to the wider text.' },
    { id: 'ocr-lt-a12', question: 'Why should you NOT pre-decide which question format to choose?', options: ['It is against exam rules', 'The other format might suit the actual questions better on the day', 'Pre-deciding is always the best strategy', 'Both formats are identical'], correct: 1, explanation: 'Pre-deciding removes OCR\'s unique advantage of choice. The specific questions on your paper might favour the format you didn\'t plan for.' },
    { id: 'ocr-lt-a13', question: 'How many set Shakespeare plays does OCR J352 offer?', options: ['2', '3', '4', '6'], correct: 2, explanation: 'OCR offers four Shakespeare plays: Romeo and Juliet, The Merchant of Venice, Macbeth, and Much Ado About Nothing.' },
    { id: 'ocr-lt-a14', question: 'What is the biggest risk when choosing the discursive route?', options: ['It is worth fewer marks', 'You may lack enough memorised quotations to sustain the argument', 'You cannot discuss context', 'The questions are always harder'], correct: 1, explanation: 'The discursive route provides no printed text, so you must rely entirely on memory. Without enough memorised quotations, your analysis becomes vague and generalised.' },
    { id: 'ocr-lt-a15', question: 'Which modern drama text is written by Dennis Kelly?', options: ['An Inspector Calls', 'DNA', 'Leave Taking', 'Blood Brothers'], correct: 1, explanation: 'DNA by Dennis Kelly is one of the set modern drama texts for OCR J352. It explores themes of peer pressure, morality, and group dynamics.' },
    { id: 'ocr-lt-a16', question: 'What should every analytical paragraph demonstrate?', options: ['Plot summary and character description', 'Analysis of the writer\'s methods — language, structure, and their effects', 'Personal opinion without evidence', 'Historical facts about the author'], correct: 1, explanation: 'Every paragraph should analyse HOW the writer creates meaning through language and structure, and WHY — what effect these choices have on the reader.' },
    { id: 'ocr-lt-a17', question: 'In Paper 1 Part (a), what genre relationship must the unseen extract have with the studied text?', options: ['It must be the opposite genre', 'It must be the same genre — prose with prose, drama with drama', 'It is always poetry', 'There is no genre requirement'], correct: 1, explanation: 'The unseen extract is always from the same genre as your studied text: if you studied a prose text, the unseen will be prose; if drama, the unseen will be drama.' },
    { id: 'ocr-lt-a18', question: 'Which 19th-century text is set during a Martian invasion?', options: ['Jane Eyre', 'Great Expectations', 'The War of the Worlds', 'Pride and Prejudice'], correct: 2, explanation: 'H.G. Wells\' The War of the Worlds depicts a Martian invasion of Earth. It explores themes of imperialism, evolution, and human vulnerability.' },
    { id: 'ocr-lt-a19', question: 'What is the recommended time for Section B of Paper 1?', options: ['20 minutes', '30 minutes', '40 minutes', '60 minutes'], correct: 2, explanation: '40 minutes is recommended for Section B (19th-century text), matching the 40 marks available. This leaves appropriate time for Section A.' },
    { id: 'ocr-lt-a20', question: 'When analysing Shakespeare, what must you remember about the text form?', options: ['It is a novel', 'It is a dramatic text — consider staging, performance, and audience response', 'It is a poem', 'Form does not matter'], correct: 1, explanation: 'Shakespeare wrote plays for performance. You must discuss dramatic techniques, staging, audience response, and theatrical effects — not just treat the text as prose on a page.' },
  ],
};

export default ocrGcseLitTexts;
