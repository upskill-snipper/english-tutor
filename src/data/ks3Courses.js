const ks3Courses = [
  {
    id: 'ks3-reading',
    title: 'KS3 Reading Skills',
    subtitle: 'Master comprehension, inference, and language analysis for Years 7-9.',
    tier: 'KS3',
    price: 29,
    duration: '4-6 hours',
    level: 'KS3 (Years 7-9)',
    description: 'Build a rock-solid foundation in reading comprehension. Learn how to find evidence, analyse language, understand structure, compare texts, and read between the lines. Every skill you need before GCSE.',
    color: '#10b981',
    moduleList: [
      {
        id: 'ks3r-m1',
        title: 'Understanding the Question',
        duration: '30 mins',
        content: `<h2>What Does the Examiner Actually Want?</h2>
<p>Before you can answer a question well, you need to understand exactly what it is asking. This sounds obvious, but it is the single biggest reason students lose marks: they answer the wrong question, or they answer the right question badly because they misread it.</p>

<h3>Command Words</h3>
<p>Every exam question contains a <strong>command word</strong> that tells you what to do. Learn these and you will never waste time again:</p>
<ul>
<li><strong>Identify / List</strong> — Find information and write it down. No analysis needed.</li>
<li><strong>Explain</strong> — Say what something means AND why it matters.</li>
<li><strong>Analyse</strong> — Break something apart and examine how it works. This is where you discuss techniques, word choices, and effects on the reader.</li>
<li><strong>Compare</strong> — Find similarities AND differences between two things.</li>
<li><strong>Evaluate</strong> — Make a judgement. Do you agree? Is the writer successful? Give your opinion with evidence.</li>
</ul>

<div class="key-term"><strong>Key Term: Command word</strong> — The verb in a question that tells you exactly what skill to use. Underlining it before you start writing is a simple habit that prevents costly mistakes.</div>

<h3>How to Allocate Your Time</h3>
<p>Look at the marks available. A 4-mark question needs a shorter, more focused answer than a 20-mark question. A good rule of thumb: spend roughly one minute per mark.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Before writing anything, underline the command word, circle the number of marks, and highlight any specific focus the question asks for (e.g., "How does the writer use language to..." means you MUST discuss language techniques).</div>

<h3>Worked Example</h3>
<p>Question: <em>"How does the writer use language to create a sense of danger in lines 5-12?"</em></p>
<p>What is the command word? <strong>How</strong> — this means explain the methods.</p>
<p>What must you focus on? <strong>Language</strong> — so discuss word choices, techniques, imagery.</p>
<p>What is the theme? <strong>Danger</strong> — every point must link back to danger.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about the whole text when the question says "lines 5-12." Stick to the lines specified. Going outside them wastes time and scores zero extra marks.</div>`,
        quiz: [
          { id: 'ks3r-m1-q1', question: 'What does the command word "analyse" require you to do?', options: ['List facts from the text', 'Break something apart and examine how it works', 'Give your personal opinion', 'Retell the story in your own words'], correct: 1, explanation: '"Analyse" means you need to examine the details closely — look at techniques, word choices, and their effects on the reader. It is more detailed than "explain."' },
          { id: 'ks3r-m1-q2', question: 'A question is worth 8 marks. Roughly how many minutes should you spend on it?', options: ['4 minutes', '8 minutes', '15 minutes', '20 minutes'], correct: 1, explanation: 'The rule of thumb is one minute per mark. An 8-mark question deserves about 8 minutes of focused writing.' },
          { id: 'ks3r-m1-q3', question: 'If a question asks "How does the writer use language to create tension?", what must your answer focus on?', options: ['The plot of the story', 'The writer\'s use of language techniques', 'Your own feelings about the text', 'The historical context'], correct: 1, explanation: 'The question specifically asks about language. You must discuss word choices, techniques like metaphor or short sentences, and explain how they create tension.' },
          { id: 'ks3r-m1-q4', question: 'What should you do FIRST when you read an exam question?', options: ['Start writing immediately', 'Read the whole text again', 'Underline the command word and check the marks', 'Plan your conclusion'], correct: 2, explanation: 'Always identify the command word and marks first. This tells you exactly what to do and how long to spend. It takes 10 seconds and saves minutes of wasted effort.' },
        ],
      },
      {
        id: 'ks3r-m2',
        title: 'Finding and Using Evidence',
        duration: '35 mins',
        content: `<h2>Quotations Are Your Proof</h2>
<p>In English, every point you make must be supported by evidence from the text. No evidence = no marks. It is that simple.</p>

<h3>What Makes a Good Quotation?</h3>
<ul>
<li><strong>Short</strong> — one word to one sentence. Long quotations waste time and show you cannot select the key words.</li>
<li><strong>Relevant</strong> — it must directly support the point you are making.</li>
<li><strong>Specific</strong> — choose the most powerful word or phrase, not a vague chunk of text.</li>
</ul>

<h3>The PEE/PEEL Structure</h3>
<p>This is the backbone of every analytical paragraph:</p>
<ul>
<li><strong>P</strong>oint — State your argument clearly in one sentence.</li>
<li><strong>E</strong>vidence — Provide a quotation from the text.</li>
<li><strong>E</strong>xplain — Analyse the evidence. What does it mean? How does it work? What effect does it have?</li>
<li><strong>L</strong>ink — Connect back to the question or develop your point further.</li>
</ul>

<div class="key-term"><strong>Key Term: Embedding</strong> — Weaving a short quotation into your own sentence so it reads naturally. For example: The writer describes the fog as having "cold fingers," which creates a sense of threat through personification.</div>

<h3>Embedding vs Bolt-On Quotations</h3>
<p><strong>Bolt-on (weaker):</strong> The writer uses personification. "The fog crept across the marshes like a living thing." This shows it is dangerous.</p>
<p><strong>Embedded (stronger):</strong> The fog is personified as a predatory force that "crept" with "cold fingers," suggesting it is actively hunting the narrator.</p>

<div class="text-extract">"It was a dark and stormy night; the rain fell in torrents — except at occasional intervals, when it was checked by a violent gust of wind which swept up the streets."<div class="source">Edward Bulwer-Lytton, Paul Clifford</div></div>

<div class="model-answer"><div class="model-answer-header">MODEL ANSWER</div>
<p><strong>Point:</strong> The writer creates an atmosphere of chaos and danger through the weather.</p>
<p><strong>Evidence:</strong> The rain is described as falling "in torrents," while "violent" gusts of wind "swept up the streets."</p>
<p><strong>Explain:</strong> The noun "torrents" suggests an overwhelming, unstoppable force — rain so heavy it feels like a flood. The adjective "violent" personifies the wind as aggressive and hostile, while the verb "swept" implies it is powerful enough to dominate the entire street. Together, these word choices make the storm feel threatening rather than merely unpleasant.</p>
</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Using quotations longer than one sentence. If your quotation is longer than about ten words, you are probably including unnecessary material. Cut it down to the key phrase.</div>`,
        quiz: [
          { id: 'ks3r-m2-q1', question: 'What does the "E" in PEEL stand for?', options: ['Example', 'Evidence and Explain', 'Evaluate', 'Engage'], correct: 1, explanation: 'PEEL stands for Point, Evidence, Explain, Link. The two E\'s are Evidence (the quotation) and Explain (your analysis of what it means).' },
          { id: 'ks3r-m2-q2', question: 'Which is an example of an embedded quotation?', options: ['The writer says "the fog was cold." This shows the weather is bad.', 'The fog is described as "cold" and threatening.', '"The fog was cold and damp" (line 3).', 'In the text it says that the fog was cold.'], correct: 1, explanation: 'An embedded quotation is woven naturally into your own sentence. Option B does this by placing "cold" inside the writer\'s analysis sentence.' },
          { id: 'ks3r-m2-q3', question: 'How long should a quotation ideally be?', options: ['A full paragraph', 'Two to three sentences', 'One word to one sentence', 'At least 20 words'], correct: 2, explanation: 'Short quotations (one word to one sentence) show you can select the most important words. Long quotations suggest you cannot identify what matters.' },
          { id: 'ks3r-m2-q4', question: 'What is the purpose of the "L" in PEEL?', options: ['To list more quotations', 'To link back to the question or extend the point', 'To end your essay', 'To identify language techniques'], correct: 1, explanation: 'The Link step connects your analysis back to the original question, or develops your point by considering wider implications. It shows you are answering the question, not just describing the text.' },
        ],
      },
      {
        id: 'ks3r-m3',
        title: 'Language Analysis',
        duration: '40 mins',
        content: `<h2>How Writers Use Language to Create Effects</h2>
<p>Language analysis is the most important skill in English. It means looking at the specific words a writer has chosen and explaining <strong>why</strong> those words were chosen and <strong>what effect</strong> they have on the reader.</p>

<h3>The Big Five Techniques</h3>
<p>You should be able to spot and analyse all of these:</p>

<p><strong>1. Metaphor</strong> — saying something IS something else. "The classroom was a zoo." This does not mean there were actual animals — it means it was chaotic and noisy.</p>

<p><strong>2. Simile</strong> — a comparison using "like" or "as." "Her voice was like honey." This suggests something sweet, smooth, and pleasant.</p>

<p><strong>3. Personification</strong> — giving human qualities to something non-human. "The wind whispered through the trees." Wind cannot whisper, but this makes it feel gentle and secretive.</p>

<p><strong>4. Alliteration</strong> — repeating the same consonant sound. "The dark, damp dungeon." The repeated "d" sounds feel heavy and oppressive.</p>

<p><strong>5. Sibilance</strong> — repeating "s" or "sh" sounds. "The snake slithered silently." The hissing sounds mirror the movement of the snake.</p>

<div class="text-extract">"The sea was angry that day, my friends — like an old man trying to send back soup in a deli."<div class="source">George Costanza (adapted for educational purposes)</div></div>

<p>This contains personification ("angry"), a simile ("like an old man"), and humour through the unexpected comparison. The effect is to make the sea seem both powerful and absurdly relatable.</p>

<div class="key-term"><strong>Key Term: Connotation</strong> — The feelings or ideas a word suggests beyond its literal meaning. "Home" literally means a building you live in, but it connotes warmth, safety, and belonging.</div>

<h3>How to Write About Language</h3>
<p>Never just spot a technique — always explain its effect:</p>
<ul>
<li><strong>Weak:</strong> "The writer uses a metaphor."</li>
<li><strong>Better:</strong> "The metaphor comparing the city to a 'concrete jungle' suggests a harsh, wild environment where people struggle to survive."</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best language analysis zooms in on a single word and explores its connotations. Saying "the verb 'crept' suggests something sneaky and threatening" is more impressive than identifying three techniques without explaining any of them.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> "Feature spotting" — just naming techniques without explaining their effect. Saying "The writer uses alliteration" earns zero marks unless you explain what the alliteration DOES.</div>`,
        quiz: [
          { id: 'ks3r-m3-q1', question: '"The stars danced in the midnight sky." What technique is this?', options: ['Simile', 'Metaphor', 'Personification', 'Alliteration'], correct: 2, explanation: 'Stars cannot literally dance — this gives them a human action. Personification makes the sky feel alive and joyful.' },
          { id: 'ks3r-m3-q2', question: 'What is a connotation?', options: ['The dictionary definition of a word', 'The feelings or ideas a word suggests', 'A type of punctuation', 'A comparison using "like"'], correct: 1, explanation: 'Connotation is the emotional or cultural meaning beyond the literal definition. "Childish" and "childlike" have the same literal meaning but very different connotations.' },
          { id: 'ks3r-m3-q3', question: '"The bitter, brutal cold bit through his coat." What sound technique is used here?', options: ['Sibilance', 'Onomatopoeia', 'Plosive alliteration', 'Rhyme'], correct: 2, explanation: 'The repeated hard "b" sounds are plosive consonants. The harsh, explosive sounds mirror the harsh, aggressive cold.' },
          { id: 'ks3r-m3-q4', question: 'Which is the BEST way to analyse language?', options: ['List every technique you can find', 'Pick one word and explore its connotations in depth', 'Describe what happens in the text', 'Quote as much as possible'], correct: 1, explanation: 'Depth beats breadth. Zooming in on a single word and exploring what it suggests in context is more impressive than listing five techniques without explanation.' },
        ],
      },
      {
        id: 'ks3r-m4',
        title: 'Structure Analysis',
        duration: '35 mins',
        content: `<h2>How Writers Organise Their Ideas</h2>
<p>Structure is about the <strong>order</strong> in which a writer presents information and ideas. It is not about what happens — it is about <strong>why things happen in that order</strong> and how the arrangement affects the reader.</p>

<h3>Whole-Text Structure</h3>
<p>Think about how the text is organised from beginning to end:</p>
<ul>
<li><strong>Beginning</strong> — What does the writer focus your attention on first? Why?</li>
<li><strong>Middle</strong> — How does the focus shift? Is there a turning point?</li>
<li><strong>End</strong> — How does the text conclude? Is there a twist, a resolution, or an open ending?</li>
</ul>

<h3>Paragraph-Level Structure</h3>
<p>Look at how individual paragraphs work:</p>
<ul>
<li><strong>Topic sentences</strong> — The first sentence often introduces the paragraph's main idea.</li>
<li><strong>Short paragraphs</strong> — Create emphasis or pace. A one-sentence paragraph stands out.</li>
<li><strong>Long paragraphs</strong> — Can create a flowing, immersive feeling or build detailed description.</li>
</ul>

<h3>Sentence-Level Structure</h3>
<ul>
<li><strong>Short sentences</strong> — Create tension, impact, urgency. "He ran. The door was locked."</li>
<li><strong>Long sentences</strong> — Build atmosphere, create a flowing rhythm, pile up details.</li>
<li><strong>Questions</strong> — Engage the reader and create uncertainty.</li>
</ul>

<div class="key-term"><strong>Key Term: Narrative perspective</strong> — Who is telling the story and what they can see. First person ("I") feels intimate and personal. Third person ("he/she") can give a wider view of events.</div>

<div class="text-extract">"The house stood alone. It had stood alone for as long as anyone could remember, and the lane leading to it was overgrown with nettles and wild grass. No one walked that way any more."<div class="source">Original composition</div></div>

<div class="model-answer"><div class="model-answer-header">MODEL ANSWER</div>
<p>The writer opens with a short declarative sentence — "The house stood alone" — which immediately establishes isolation as the dominant mood. The repetition of "stood alone" in the next sentence reinforces this emptiness through structural echoing. The writer then widens the focus from the house itself to the "lane leading to it," moving the reader's eye outward to show that the isolation extends beyond the building. The final sentence — "No one walked that way any more" — ends on absence. The adverb "any more" implies that people once did walk this way, suggesting decline and abandonment. The progression from present description to implied past creates a sense of loss.</p>
</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When writing about structure, use phrases like "the writer shifts focus from... to..." or "the text moves from... towards..." This shows you are tracking how the writing develops, not just describing it.</div>`,
        quiz: [
          { id: 'ks3r-m4-q1', question: 'What effect does a very short sentence usually create?', options: ['A calm, peaceful mood', 'Emphasis, tension, or impact', 'Confusion', 'Detailed description'], correct: 1, explanation: 'Short sentences create punch. They stand out against longer sentences and force the reader to pause, creating tension or emphasis.' },
          { id: 'ks3r-m4-q2', question: 'What does "narrative perspective" mean?', options: ['How the story ends', 'Who is telling the story and what they can see', 'The moral of the story', 'The setting of the text'], correct: 1, explanation: 'Narrative perspective is the point of view from which the story is told. First person (I) gives personal intimacy; third person gives distance and a wider view.' },
          { id: 'ks3r-m4-q3', question: 'When analysing structure, what should you focus on?', options: ['Only the beginning of the text', 'The order in which ideas are presented and why', 'Rhyme and rhythm', 'Spelling and grammar'], correct: 1, explanation: 'Structure analysis means examining how a text is organised — why certain things come first, how the focus shifts, and what effect the arrangement has on the reader.' },
          { id: 'ks3r-m4-q4', question: 'A writer begins with a peaceful scene and gradually introduces threatening details. What structural technique is this?', options: ['Flashback', 'A shift from calm to tension', 'Repetition', 'First person narration'], correct: 1, explanation: 'This is a structural shift — the writer deliberately moves from peace to threat to unsettle the reader. The contrast makes the danger feel more alarming.' },
        ],
      },
      {
        id: 'ks3r-m5',
        title: 'Comparing Texts',
        duration: '35 mins',
        content: `<h2>Finding Links and Differences</h2>
<p>Comparing texts means writing about two sources at the same time, showing how they are similar and different. The key is to weave your discussion together, not write about one text and then the other.</p>

<h3>How to Structure a Comparison</h3>
<p>The strongest approach is to organise by <strong>theme or method</strong>, not by source:</p>
<ul>
<li><strong>Weak structure:</strong> "Source A says X. Source B says Y." (This is two separate summaries, not a comparison.)</li>
<li><strong>Strong structure:</strong> "Both writers address the theme of X. Source A uses technique Y to suggest..., whereas Source B takes a different approach by..."</li>
</ul>

<h3>Comparative Connectives</h3>
<p>These words and phrases signal that you are comparing:</p>
<ul>
<li><strong>Similarly / Likewise / In the same way</strong> — for similarities</li>
<li><strong>However / In contrast / Whereas / On the other hand</strong> — for differences</li>
<li><strong>While Source A... Source B...</strong> — for simultaneous comparison</li>
<li><strong>Both writers... but...</strong> — for shared ground with a difference</li>
</ul>

<div class="key-term"><strong>Key Term: Cross-referencing</strong> — Discussing both texts within the same paragraph rather than in separate sections. This is what examiners look for in a comparison.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Every paragraph in a comparison answer should mention BOTH texts. If a paragraph only discusses one text, you are not comparing — you are describing.</div>

<h3>What to Compare</h3>
<ul>
<li><strong>Theme</strong> — What are both texts about? Do they agree or disagree?</li>
<li><strong>Tone</strong> — Is one angry and the other calm? One serious and the other humorous?</li>
<li><strong>Methods</strong> — Do the writers use the same techniques for different effects?</li>
<li><strong>Audience</strong> — Who is each text written for? How does this change the language?</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about Source A for half the answer and then Source B for the other half. This is not comparing — this is two mini-essays stapled together. Weave the texts together in every paragraph.</div>`,
        quiz: [
          { id: 'ks3r-m5-q1', question: 'Which is the best structure for a comparison answer?', options: ['All about Source A, then all about Source B', 'Organised by theme, discussing both texts in each paragraph', 'A summary of both texts', 'Only discuss the differences'], correct: 1, explanation: 'Organising by theme and discussing both texts together in every paragraph is the strongest approach. It shows genuine comparison, not separate descriptions.' },
          { id: 'ks3r-m5-q2', question: 'Which word signals a difference between two texts?', options: ['Similarly', 'Furthermore', 'However', 'Also'], correct: 2, explanation: '"However" signals a contrast or difference. Using comparative connectives clearly shows the examiner you are comparing, not just describing.' },
          { id: 'ks3r-m5-q3', question: 'What is cross-referencing?', options: ['Checking your spelling', 'Discussing both texts within the same paragraph', 'Using footnotes', 'Copying from the text'], correct: 1, explanation: 'Cross-referencing means bringing both texts together in the same paragraph. This is the hallmark of a strong comparison.' },
          { id: 'ks3r-m5-q4', question: 'What can you compare between two texts?', options: ['Only the language techniques', 'Theme, tone, methods, and audience', 'Only the plots', 'Only the characters'], correct: 1, explanation: 'You can compare theme (what they are about), tone (the feeling), methods (techniques used), and audience (who they are written for). The best answers compare several of these.' },
        ],
      },
      {
        id: 'ks3r-m6',
        title: 'Inference and Implicit Meaning',
        duration: '30 mins',
        content: `<h2>Reading Between the Lines</h2>
<p>Not everything a writer wants to communicate is stated directly. <strong>Inference</strong> means working out what a writer is suggesting without them saying it outright. It is one of the most important reading skills you can develop.</p>

<h3>How Inference Works</h3>
<p>A writer might not say "the character was nervous." Instead, they might write:</p>

<div class="text-extract">"She checked her watch for the third time. Her fingers drummed against the table and her coffee sat untouched, growing cold."<div class="source">Original composition</div></div>

<p>Nothing here directly says "nervous." But we can infer it from the evidence:</p>
<ul>
<li><strong>Checking her watch</strong> repeatedly — she is waiting anxiously for something.</li>
<li><strong>Fingers drumming</strong> — a physical sign of restlessness.</li>
<li><strong>Untouched coffee</strong> — she is too distracted to drink. The coffee "growing cold" suggests she has been waiting a long time.</li>
</ul>

<div class="key-term"><strong>Key Term: Inference</strong> — Drawing a conclusion based on evidence and reasoning, not on what is directly stated. "Reading between the lines."</div>

<h3>Authorial Intent</h3>
<p>Always ask yourself: <strong>why did the writer include this detail?</strong> Nothing in a well-crafted text is accidental. If a writer mentions the weather, it is probably reflecting the mood. If they describe what a character is wearing, it is probably telling you something about their personality or status.</p>

<h3>Context Clues</h3>
<p>Sometimes you can work out the meaning of an unfamiliar word from the words around it:</p>
<p>"The room was <strong>spartan</strong> — bare walls, a single chair, no decoration of any kind."</p>
<p>Even if you do not know what "spartan" means, the words around it (bare, single, no decoration) tell you it means plain, minimal, without comfort.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best inference answers use the phrase "This suggests that..." or "This implies that..." These show you are going beyond the surface meaning.</div>

<div class="model-answer"><div class="model-answer-header">MODEL ANSWER</div>
<p>The writer implies that the character is anxious about an important meeting. The repetitive action of checking her watch "for the third time" suggests she is counting down to something, while the "untouched" coffee implies she is too preoccupied to engage in normal activities. The detail of the coffee "growing cold" subtly reinforces the passage of time, suggesting she has been in this heightened state for a while. Together, these details build a picture of someone on edge without the writer ever needing to state it directly.</p>
</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Confusing inference with guessing. Inference must always be supported by evidence from the text. "I think she is nervous" is a guess. "The repeated action of checking her watch suggests nervousness" is an inference backed by evidence.</div>`,
        quiz: [
          { id: 'ks3r-m6-q1', question: 'What does inference mean?', options: ['Copying directly from the text', 'Drawing conclusions from clues in the text', 'Making up your own story', 'Summarising what happens'], correct: 1, explanation: 'Inference means working out what the writer is suggesting based on evidence, rather than relying on what is directly stated.' },
          { id: 'ks3r-m6-q2', question: '"He slammed the door and threw his bag on the floor." What can you infer about the character?', options: ['He is happy', 'He is tired', 'He is angry or frustrated', 'He is in a hurry'], correct: 2, explanation: 'The violent actions of "slammed" and "threw" suggest strong negative emotion — most likely anger or frustration. The force behind these actions is the clue.' },
          { id: 'ks3r-m6-q3', question: 'What phrase is useful when writing about inference?', options: ['"The text says..."', '"This suggests that..."', '"In conclusion..."', '"I think maybe..."'], correct: 1, explanation: '"This suggests that..." is the perfect phrase for inference. It shows you are interpreting evidence rather than just quoting it or guessing.' },
          { id: 'ks3r-m6-q4', question: 'What is the difference between inference and guessing?', options: ['There is no difference', 'Inference is supported by evidence; guessing is not', 'Guessing is more accurate', 'Inference only works with poetry'], correct: 1, explanation: 'Inference is always grounded in evidence from the text. A guess has no support. Always show the evidence that leads to your inference.' },
        ],
      },
    ],
    assessmentQuestions: [
      { id: 'ks3r-a1', question: 'What does the command word "evaluate" require you to do?', options: ['List facts', 'Make a judgement supported by evidence', 'Describe what happens', 'Compare two texts'], correct: 1, explanation: '"Evaluate" means forming a judgement — do you agree or disagree? You must support your opinion with evidence from the text.' },
      { id: 'ks3r-a2', question: 'What does PEEL stand for?', options: ['Point, Evidence, Explain, Link', 'Plan, Edit, Evaluate, Learn', 'Paragraph, Example, Effect, Language', 'Point, Extract, Examine, List'], correct: 0, explanation: 'PEEL stands for Point, Evidence, Explain, Link — the structure for analytical paragraphs.' },
      { id: 'ks3r-a3', question: '"Her smile was like sunshine after rain." What technique is this?', options: ['Metaphor', 'Personification', 'Simile', 'Alliteration'], correct: 2, explanation: 'This uses "like" to compare her smile to sunshine — a simile.' },
      { id: 'ks3r-a4', question: 'What is an embedded quotation?', options: ['A very long quotation', 'A quotation woven into your own sentence', 'A quotation at the end of an essay', 'A quotation from memory'], correct: 1, explanation: 'An embedded quotation is smoothly woven into your own sentence so it reads naturally.' },
      { id: 'ks3r-a5', question: '"The thunder growled in anger." What technique is used here?', options: ['Simile', 'Personification and pathetic fallacy', 'Onomatopoeia', 'Hyperbole'], correct: 1, explanation: 'Thunder is given the human quality of "growling in anger" (personification), and the weather reflects mood (pathetic fallacy).' },
      { id: 'ks3r-a6', question: 'What is a connotation?', options: ['The dictionary definition of a word', 'The feelings or ideas a word suggests', 'A type of sentence', 'A writing technique'], correct: 1, explanation: 'Connotation is the emotional associations a word carries beyond its literal meaning.' },
      { id: 'ks3r-a7', question: 'What effect do short sentences create?', options: ['Detailed description', 'Emphasis, tension, or impact', 'A flowing rhythm', 'Confusion'], correct: 1, explanation: 'Short sentences create punch and impact. They force the reader to pause and pay attention.' },
      { id: 'ks3r-a8', question: 'Which word would you use to signal a DIFFERENCE in a comparison?', options: ['Similarly', 'Furthermore', 'In contrast', 'Additionally'], correct: 2, explanation: '"In contrast" signals a difference between two texts or ideas.' },
      { id: 'ks3r-a9', question: 'What is inference?', options: ['Copying from the text', 'Drawing conclusions from evidence in the text', 'Summarising the plot', 'Guessing what the writer means'], correct: 1, explanation: 'Inference means drawing conclusions based on clues and evidence, not explicit statements.' },
      { id: 'ks3r-a10', question: 'What is sibilance?', options: ['Repetition of "s" or "sh" sounds', 'Repetition of "b" or "d" sounds', 'A type of rhyme', 'A narrative technique'], correct: 0, explanation: 'Sibilance is the repetition of soft "s" and "sh" sounds, often creating a sinister or soothing atmosphere.' },
      { id: 'ks3r-a11', question: 'Which is better: identifying three techniques or analysing one in depth?', options: ['Identifying three', 'Analysing one in depth', 'Neither matters', 'Both are equally valued'], correct: 1, explanation: 'Depth always beats breadth. One technique analysed in detail scores higher than three techniques just named.' },
      { id: 'ks3r-a12', question: 'What is authorial intent?', options: ['What the writer had for breakfast', 'Why the writer made specific choices', 'The publication date', 'The genre'], correct: 1, explanation: 'Authorial intent is the reason behind a writer\'s choices — why they selected specific words, structures, or techniques.' },
      { id: 'ks3r-a13', question: 'What does "narrative perspective" refer to?', options: ['The theme of the story', 'Who is telling the story', 'The length of the text', 'The setting'], correct: 1, explanation: 'Narrative perspective is the viewpoint from which the story is told — first person, third person, etc.' },
      { id: 'ks3r-a14', question: '"The bitter cold bit through his bones." What sound effect is created by the repeated "b"?', options: ['A soft, gentle feeling', 'A harsh, aggressive quality', 'A musical rhythm', 'A whispering sound'], correct: 1, explanation: 'Plosive "b" sounds are hard and percussive, creating a harsh quality that mirrors the biting cold.' },
      { id: 'ks3r-a15', question: 'When comparing texts, what should every paragraph contain?', options: ['Only Source A', 'Only Source B', 'References to both texts', 'Personal opinions only'], correct: 2, explanation: 'Every paragraph in a comparison should reference both texts to show genuine comparison.' },
      { id: 'ks3r-a16', question: 'A 4-mark question should take approximately how long?', options: ['1 minute', '4 minutes', '10 minutes', '20 minutes'], correct: 1, explanation: 'The rule of thumb is one minute per mark, so a 4-mark question should take about 4 minutes.' },
      { id: 'ks3r-a17', question: 'What is the effect of a one-sentence paragraph?', options: ['It saves space', 'It creates emphasis and draws attention', 'It shows poor planning', 'It has no particular effect'], correct: 1, explanation: 'A one-sentence paragraph stands out dramatically, creating emphasis and forcing the reader to pay attention.' },
      { id: 'ks3r-a18', question: '"All the world\'s a stage." What technique is this?', options: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'], correct: 1, explanation: 'This is a metaphor — it says the world IS a stage, not that it is LIKE a stage. It implies life is a performance.' },
      { id: 'ks3r-a19', question: 'What should you do BEFORE answering an exam question?', options: ['Start writing immediately', 'Underline the command word and note the marks', 'Read the whole text three times', 'Write a full essay plan'], correct: 1, explanation: 'Always identify the command word and marks first — this tells you what to do and how long to spend.' },
      { id: 'ks3r-a20', question: 'Which phrase shows you are making an inference?', options: ['"The text says..."', '"This suggests that..."', '"I think..."', '"In conclusion..."'], correct: 1, explanation: '"This suggests that..." shows you are interpreting evidence rather than just quoting or guessing.' },
    ],
  },
  {
    id: 'ks3-writing',
    title: 'KS3 Writing Skills',
    subtitle: 'Build confidence in descriptive, narrative, and persuasive writing.',
    tier: 'KS3',
    price: 29,
    duration: '4-6 hours',
    level: 'KS3 (Years 7-9)',
    description: 'Learn to write with purpose, clarity, and style. From planning to proofreading, this course covers descriptive, narrative, and persuasive writing — the three pillars of English writing at KS3 and beyond.',
    color: '#10b981',
    moduleList: [
      {
        id: 'ks3w-m1',
        title: 'Audience and Purpose',
        duration: '30 mins',
        content: `<h2>Who Are You Writing For?</h2>
<p>Every piece of writing has two things: an <strong>audience</strong> (who reads it) and a <strong>purpose</strong> (why you are writing it). Get these right, and the rest follows naturally.</p>

<h3>Audience</h3>
<p>Your language, tone, and level of detail should change depending on who will read your work:</p>
<ul>
<li><strong>Teenagers</strong> — informal, relatable, direct. You can use contractions and modern references.</li>
<li><strong>Adults / Parents</strong> — slightly more formal, clear, respectful. Avoid slang.</li>
<li><strong>A headteacher</strong> — formal, polite, professional. Standard English, no contractions.</li>
<li><strong>Young children</strong> — simple vocabulary, short sentences, friendly tone.</li>
</ul>

<h3>Purpose</h3>
<p>The main purposes you will write for:</p>
<ul>
<li><strong>Describe</strong> — Paint a picture with words. Use the senses.</li>
<li><strong>Narrate</strong> — Tell a story with characters, setting, and plot.</li>
<li><strong>Argue / Persuade</strong> — Convince the reader of your viewpoint.</li>
<li><strong>Inform / Explain</strong> — Give clear, organised facts or instructions.</li>
<li><strong>Advise</strong> — Offer helpful suggestions with a friendly, supportive tone.</li>
</ul>

<div class="key-term"><strong>Key Term: Register</strong> — The level of formality in your writing. A text message to a friend uses informal register. A letter to a business uses formal register. Matching register to audience is a sign of strong writing.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Before you start writing, write two words at the top of your plan: your audience and your purpose. Check every paragraph against them. If a sentence does not serve your purpose or suit your audience, cut it.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Using slang or text speak when writing for a formal audience. "The school should of done better" loses marks. "The school should have done better" is correct and appropriate.</div>`,
        quiz: [
          { id: 'ks3w-m1-q1', question: 'What is "register" in writing?', options: ['A list of students', 'The level of formality', 'A type of sentence', 'The topic of the text'], correct: 1, explanation: 'Register means the level of formality. You adjust your register to match your audience — informal for friends, formal for business.' },
          { id: 'ks3w-m1-q2', question: 'If your audience is a headteacher, which style is most appropriate?', options: ['Slang and abbreviations', 'Formal, polite, Standard English', 'Casual and chatty', 'Poetic and emotional'], correct: 1, explanation: 'A headteacher expects formal, professional writing. Use Standard English, full sentences, and a respectful tone.' },
          { id: 'ks3w-m1-q3', question: 'What is the purpose of persuasive writing?', options: ['To tell a story', 'To describe a scene', 'To convince the reader of your viewpoint', 'To list facts'], correct: 2, explanation: 'Persuasive writing aims to convince. It uses rhetorical devices, evidence, and emotive language to sway the reader.' },
          { id: 'ks3w-m1-q4', question: 'What two things should you identify before starting any writing task?', options: ['Title and word count', 'Audience and purpose', 'First and last sentence', 'Spelling and grammar'], correct: 1, explanation: 'Audience (who) and purpose (why) should guide every choice you make in your writing.' },
        ],
      },
      {
        id: 'ks3w-m2',
        title: 'Planning Your Writing',
        duration: '25 mins',
        content: `<h2>Why Planning Matters</h2>
<p>Students who plan their writing almost always score higher than those who do not. A plan takes five minutes and saves you from rambling, repeating yourself, or running out of ideas halfway through.</p>

<h3>Two Quick Planning Methods</h3>
<p><strong>1. Spider Diagram</strong> — Write your topic in the centre. Branch out with your main ideas. Add details, examples, or techniques to each branch. This works well for descriptive and persuasive writing.</p>

<p><strong>2. Linear Plan</strong> — Number your paragraphs. Write one sentence for each paragraph summarising what it will contain. This works well for narrative writing and arguments.</p>

<h3>How Long to Plan</h3>
<p>For a 45-minute writing task, spend <strong>5 minutes planning</strong>. That leaves 35 minutes for writing and 5 for checking. Five minutes of planning is worth more than five minutes of extra writing.</p>

<div class="key-term"><strong>Key Term: Paragraph plan</strong> — A brief outline showing what each paragraph will cover. Even just one word per paragraph helps keep your writing focused and organised.</div>

<h3>What a Good Plan Includes</h3>
<ul>
<li>Your audience and purpose (at the top)</li>
<li>An opening idea — how will you hook the reader?</li>
<li>3-4 main paragraph ideas</li>
<li>A closing idea — how will you end powerfully?</li>
<li>2-3 techniques you want to include (e.g., metaphor, rhetorical question, short sentence for impact)</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Plan your ENDING before you start writing. The best writers know where they are going. A planned ending is almost always stronger than one you make up in the last minute.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Not planning at all because "there isn't time." Students who plan actually finish faster because they do not waste time figuring out what to say next. Five minutes planning saves ten minutes of rewriting.</div>`,
        quiz: [
          { id: 'ks3w-m2-q1', question: 'How long should you spend planning a 45-minute writing task?', options: ['0 minutes', '5 minutes', '15 minutes', '20 minutes'], correct: 1, explanation: '5 minutes of planning leaves 35 for writing and 5 for checking. This is the ideal split.' },
          { id: 'ks3w-m2-q2', question: 'What should you plan BEFORE you start writing the opening?', options: ['The title', 'The ending', 'The font', 'The word count'], correct: 1, explanation: 'Knowing your ending before you begin gives your writing direction and purpose. A planned ending is always stronger.' },
          { id: 'ks3w-m2-q3', question: 'Which planning method works best for narrative writing?', options: ['Spider diagram', 'Linear plan with numbered paragraphs', 'Mind map', 'No plan needed'], correct: 1, explanation: 'A linear plan with numbered paragraphs suits narrative writing because stories follow a sequence.' },
          { id: 'ks3w-m2-q4', question: 'Why does planning save time overall?', options: ['It makes you write faster', 'It prevents rambling and repetition', 'Plans count toward the word count', 'It does not save time'], correct: 1, explanation: 'Planning stops you from going off-topic, repeating yourself, or getting stuck mid-paragraph. The time invested in planning pays off.' },
        ],
      },
      {
        id: 'ks3w-m3',
        title: 'Descriptive Writing',
        duration: '40 mins',
        content: `<h2>Show, Do Not Tell</h2>
<p>The golden rule of descriptive writing: <strong>show the reader, do not tell them</strong>. Instead of writing "she was scared," describe what fear looks like, sounds like, and feels like.</p>

<p><strong>Telling:</strong> "The man was old."</p>
<p><strong>Showing:</strong> "His hands trembled as he reached for the cup, the skin stretched thin as paper over knotted knuckles."</p>

<h3>The Five Senses</h3>
<p>Great description uses more than just sight. Include:</p>
<ul>
<li><strong>Sight</strong> — colours, shapes, light, movement</li>
<li><strong>Sound</strong> — use onomatopoeia and similes for sound</li>
<li><strong>Touch</strong> — textures, temperature, pressure</li>
<li><strong>Smell</strong> — often the most evocative sense; smells trigger memories</li>
<li><strong>Taste</strong> — less common but powerful when used well</li>
</ul>

<div class="key-term"><strong>Key Term: Pathetic fallacy</strong> — Using the weather or environment to reflect a character's mood. Dark clouds for sadness. Bright sunshine for happiness. A storm for conflict.</div>

<h3>Creating Atmosphere</h3>
<p>Atmosphere is the overall feeling or mood of a piece of writing. You create it through:</p>
<ul>
<li><strong>Word choice</strong> — "gloomy" vs "shaded" vs "dark" all describe low light but feel different.</li>
<li><strong>Sentence length</strong> — long, flowing sentences feel peaceful; short, sharp sentences feel tense.</li>
<li><strong>Figurative language</strong> — metaphors and similes shape how the reader sees the world.</li>
</ul>

<div class="text-extract">"The fog comes on little cat feet. It sits looking over harbor and city on silent haunches and then moves on."<div class="source">Carl Sandburg, "Fog"</div></div>

<p>Sandburg uses an extended metaphor comparing fog to a cat. The fog does not roar in — it arrives quietly, "on little cat feet." It "sits" and "looks" — patient, silent, watchful. The whole poem creates an atmosphere of stillness and gentle mystery.</p>

<div class="model-answer"><div class="model-answer-header">MODEL ANSWER — Describing a Busy Market</div>
<p>The market roared with life. Stalls lined the narrow street like colourful teeth in an enormous jaw, each one spilling its contents onto the cobblestones: silk scarves that slithered through your fingers, pyramids of oranges bright as small suns, and fish laid out in silver rows, their dead eyes catching the light. The air was thick with the smell of roasting chestnuts and diesel fumes — sweet and sharp at once. Somewhere behind me, a radio crackled with a song I almost recognised, and a child's laughter punched through the noise like a bell.</p>
</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best descriptive writing does not try to describe everything. Focus on three or four carefully chosen details. Quality always beats quantity.</div>`,
        quiz: [
          { id: 'ks3w-m3-q1', question: 'What does "show, don\'t tell" mean?', options: ['Use pictures instead of words', 'Describe how something looks/sounds/feels rather than just naming the emotion', 'Show your plan to the teacher', 'Tell a story instead of describing'], correct: 1, explanation: '"Show, don\'t tell" means using sensory details and actions to convey emotions rather than just labelling them.' },
          { id: 'ks3w-m3-q2', question: 'What is pathetic fallacy?', options: ['A logical error', 'Using weather to reflect a character\'s mood', 'A weak argument', 'A type of metaphor'], correct: 1, explanation: 'Pathetic fallacy is when the environment mirrors a character\'s emotions — rain for sadness, storms for conflict, sunshine for joy.' },
          { id: 'ks3w-m3-q3', question: 'Which sense is often described as the most evocative?', options: ['Sight', 'Sound', 'Smell', 'Touch'], correct: 2, explanation: 'Smell is strongly connected to memory and emotion, making it particularly powerful in descriptive writing.' },
          { id: 'ks3w-m3-q4', question: 'What creates the strongest descriptive writing?', options: ['Describing every single detail', 'A few carefully chosen details described vividly', 'Using as many adjectives as possible', 'Long paragraphs with no breaks'], correct: 1, explanation: 'Quality beats quantity. Three vivid, specific details are more powerful than ten vague ones.' },
        ],
      },
      {
        id: 'ks3w-m4',
        title: 'Narrative Writing',
        duration: '40 mins',
        content: `<h2>Telling a Great Story</h2>
<p>Narrative writing means telling a story. The best narratives have a clear structure, engaging characters, and a satisfying ending. You do not need a complicated plot — a simple story told brilliantly will always beat a complex story told badly.</p>

<h3>Freytag's Pyramid: Story Structure</h3>
<ul>
<li><strong>Exposition</strong> — Set the scene. Introduce the character, setting, and situation.</li>
<li><strong>Rising Action</strong> — Something changes. Tension builds. The character faces a problem.</li>
<li><strong>Climax</strong> — The most intense moment. The turning point.</li>
<li><strong>Falling Action</strong> — The consequences unfold.</li>
<li><strong>Resolution</strong> — The ending. Things settle — but they do not have to be happy.</li>
</ul>

<h3>Creating Tension</h3>
<p>Tension keeps readers turning the page. You can create it through:</p>
<ul>
<li><strong>Short sentences</strong> — "She stopped. Listened. Nothing."</li>
<li><strong>Withholding information</strong> — "Something moved in the darkness. Something large."</li>
<li><strong>Time pressure</strong> — "The clock showed 11:58. Two minutes."</li>
<li><strong>Sensory overload</strong> — pile on sounds, sights, and physical sensations.</li>
</ul>

<div class="key-term"><strong>Key Term: Dialogue</strong> — Conversation between characters. Good dialogue sounds natural, reveals character, and moves the story forward. Bad dialogue just fills space.</div>

<h3>Dialogue Rules</h3>
<ul>
<li>New speaker = new line.</li>
<li>Use speech marks: "Like this," she said.</li>
<li>Vary your speech verbs: whispered, muttered, snapped — not just "said" every time.</li>
<li>Keep it short. Real people do not speak in paragraphs.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Open with action or description, not "One day..." or "It was a normal morning..." Hook the reader in your first sentence. Drop them into the middle of something interesting.</div>

<div class="model-answer"><div class="model-answer-header">MODEL ANSWER — Strong Opening</div>
<p>The letter arrived on a Tuesday, which was unusual because nothing ever arrived on a Tuesday. She turned it over in her hands. No return address. No stamp. Just her name — <em>Mira</em> — in handwriting she had not seen in seven years.</p>
</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Trying to fit too much plot into a short piece. In an exam, you have 45 minutes. That is enough for one scene or one moment, not an entire adventure. Keep your story focused on a single event.</div>`,
        quiz: [
          { id: 'ks3w-m4-q1', question: 'What is the climax of a story?', options: ['The beginning', 'The most intense turning point', 'The ending', 'The introduction of characters'], correct: 1, explanation: 'The climax is the peak of tension — the most intense, dramatic moment where everything changes.' },
          { id: 'ks3w-m4-q2', question: 'Which opening is strongest?', options: ['"One day, a girl went to school."', '"The letter arrived on a Tuesday."', '"This story is about a girl called Mira."', '"I am going to write about something that happened."'], correct: 1, explanation: 'This opening drops the reader into an unusual event immediately. It creates intrigue without explaining everything.' },
          { id: 'ks3w-m4-q3', question: 'How can short sentences create tension?', options: ['They make writing easier to read', 'They force pauses that build suspense', 'They save time', 'They look neater'], correct: 1, explanation: 'Short sentences create pauses. Each pause builds anticipation. The reader slows down, mirroring the character\'s heightened awareness.' },
          { id: 'ks3w-m4-q4', question: 'In a 45-minute exam, how much plot should your story contain?', options: ['An entire adventure from start to finish', 'One focused scene or moment', 'At least three subplots', 'As much as possible'], correct: 1, explanation: 'One well-told scene is always better than a rushed adventure. Focus on depth — description, emotion, tension — not breadth.' },
        ],
      },
      {
        id: 'ks3w-m5',
        title: 'Persuasive and Argument Writing',
        duration: '35 mins',
        content: `<h2>Making Your Case</h2>
<p>Persuasive writing is about changing someone's mind. Argument writing is about presenting a balanced debate and reaching a conclusion. Both require clear structure, strong evidence, and rhetorical skill.</p>

<h3>AFOREST — Your Rhetorical Toolkit</h3>
<ul>
<li><strong>A</strong>lliteration — "Cruel, callous, and completely unacceptable."</li>
<li><strong>F</strong>acts — "85% of students report feeling stressed by exams."</li>
<li><strong>O</strong>pinion (presented as fact) — "Everyone knows that homework is outdated."</li>
<li><strong>R</strong>hetorical question — "How long must we accept this?"</li>
<li><strong>E</strong>motive language — "Helpless children are being let down by the system."</li>
<li><strong>S</strong>tatistics — "One in five teenagers has experienced cyberbullying."</li>
<li><strong>T</strong>ricolon (rule of three) — "We need change. We need action. We need it now."</li>
</ul>

<h3>Structuring an Argument</h3>
<ol>
<li><strong>Introduction</strong> — State your position clearly. Hook the reader.</li>
<li><strong>Point 1</strong> — Your strongest argument, with evidence.</li>
<li><strong>Point 2</strong> — Your second argument.</li>
<li><strong>Counter-argument</strong> — Acknowledge the other side, then explain why your view is stronger.</li>
<li><strong>Conclusion</strong> — Restate your position powerfully. End with a call to action or a memorable line.</li>
</ol>

<div class="key-term"><strong>Key Term: Counter-argument</strong> — Acknowledging the opposing viewpoint before explaining why your argument is stronger. "Some may say... however..." This shows you have considered both sides and makes your argument more convincing.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Your opening sentence should be punchy and memorable. Start with a bold statement, a shocking fact, or a rhetorical question. Never start with "In this essay I will argue..." — it is dull and wastes words.</div>

<div class="model-answer"><div class="model-answer-header">MODEL ANSWER — Strong Opening for Persuasive Writing</div>
<p>Every morning, three million British teenagers drag themselves out of bed before their brains have finished sleeping. The science is clear: adolescents need nine hours of rest, yet school start times force them to function on seven. We are not educating our children — we are exhausting them. It is time for schools to start at 10am.</p>
</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Forgetting the counter-argument. If you only present your side, your argument looks one-sided and naive. Always include at least one paragraph that considers the other viewpoint — then explain why your position is stronger.</div>`,
        quiz: [
          { id: 'ks3w-m5-q1', question: 'What does AFOREST stand for?', options: ['A type of poem', 'Alliteration, Facts, Opinion, Rhetorical question, Emotive language, Statistics, Tricolon', 'A planning technique', 'A grading system'], correct: 1, explanation: 'AFOREST is a toolkit of persuasive techniques: Alliteration, Facts, Opinion, Rhetorical question, Emotive language, Statistics, Tricolon (rule of three).' },
          { id: 'ks3w-m5-q2', question: 'Why should you include a counter-argument?', options: ['To confuse the reader', 'To show you have considered both sides, making your argument stronger', 'Because the question requires it', 'To fill space'], correct: 1, explanation: 'Including a counter-argument shows maturity and balance. It actually strengthens your position because you demonstrate you can dismiss the opposition with evidence.' },
          { id: 'ks3w-m5-q3', question: '"How long must we tolerate this injustice?" What technique is this?', options: ['Statistic', 'Rhetorical question', 'Simile', 'Counter-argument'], correct: 1, explanation: 'This is a rhetorical question — asked for effect, not expecting an answer. It makes the reader feel the answer is obvious.' },
          { id: 'ks3w-m5-q4', question: 'Which opening is best for persuasive writing?', options: ['"In this essay I will argue..."', '"A shocking statistic followed by a bold claim"', '"Dear Sir or Madam"', '"Once upon a time..."'], correct: 1, explanation: 'A punchy opening grabs attention immediately. Starting with a fact, bold claim, or rhetorical question is far more effective than announcing what you will argue.' },
        ],
      },
      {
        id: 'ks3w-m6',
        title: 'Technical Accuracy',
        duration: '35 mins',
        content: `<h2>Getting the Basics Right</h2>
<p>Technical accuracy covers spelling, punctuation, and grammar (SPaG). In GCSE exams, this is worth up to 16 marks — you literally cannot afford to get it wrong. Building good habits now will pay off for years.</p>

<h3>Punctuation That Matters Most</h3>
<p><strong>Commas</strong> — Use them to separate items in a list, after introductory phrases, and to add extra information. "My brother, who is twelve, plays football."</p>
<p><strong>Apostrophes</strong> — Two uses only:</p>
<ul>
<li><em>Possession:</em> "the dog's bone" (one dog), "the dogs' bones" (multiple dogs)</li>
<li><em>Contraction:</em> "don't" = "do not," "it's" = "it is"</li>
<li><strong>NEVER</strong> for plurals: "apple's" is always wrong when you mean more than one apple.</li>
</ul>

<p><strong>Semicolons</strong> — Join two closely related sentences: "The rain stopped; the sun emerged." Both sides must be full sentences.</p>
<p><strong>Colons</strong> — Introduce a list or an explanation: "She had one goal: survival."</p>

<h3>Sentence Variety</h3>
<p>Varying your sentence length and type makes your writing more engaging:</p>
<ul>
<li><strong>Simple:</strong> "The door opened." (Impact)</li>
<li><strong>Compound:</strong> "The door opened and light flooded the room." (Connection)</li>
<li><strong>Complex:</strong> "Although she was afraid, she stepped through the door." (Sophistication)</li>
</ul>

<div class="key-term"><strong>Key Term: Sentence variety</strong> — Deliberately using different sentence lengths and types. A mix of short and long sentences creates rhythm, pace, and emphasis.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> After you finish writing, spend your last 5 minutes checking for errors. Read your work slowly, one sentence at a time. Common errors to check: apostrophes, homophones (their/there/they're), and missing full stops.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Confusing "their," "there," and "they're." Their = belonging to them. There = a place. They're = they are. Also: "your" (belonging to you) vs "you're" (you are).</div>

<h3>Paragraphing</h3>
<p>Start a new paragraph when you change:</p>
<ul>
<li><strong>T</strong>ime — "The next morning..."</li>
<li><strong>P</strong>lace — "In the garden..."</li>
<li><strong>T</strong>opic — Moving to a new idea or argument</li>
<li><strong>S</strong>peaker — New person talking in dialogue</li>
</ul>`,
        quiz: [
          { id: 'ks3w-m6-q1', question: 'When do you use an apostrophe?', options: ['For plurals', 'For possession and contractions only', 'At the end of every sentence', 'Before any "s"'], correct: 1, explanation: 'Apostrophes have exactly two uses: possession (the dog\'s bone) and contraction (don\'t). Never for plurals.' },
          { id: 'ks3w-m6-q2', question: 'What does a semicolon do?', options: ['Ends a sentence', 'Joins two closely related complete sentences', 'Introduces a list', 'Replaces a comma'], correct: 1, explanation: 'A semicolon joins two complete sentences that are closely related: "The rain stopped; the sun emerged."' },
          { id: 'ks3w-m6-q3', question: 'Which is correct?', options: ['"Their going to the park."', '"They\'re going to the park."', '"There going to the park."', '"Theyre going to the park."'], correct: 1, explanation: '"They\'re" = "they are." "Their" = belonging to them. "There" = a place. "They\'re going to the park" is correct.' },
          { id: 'ks3w-m6-q4', question: 'When should you start a new paragraph?', options: ['Every five sentences', 'When you change time, place, topic, or speaker', 'Only at the beginning and end', 'Whenever you feel like it'], correct: 1, explanation: 'The TTPS rule: new paragraph for new Time, Place, Topic, or Speaker.' },
        ],
      },
    ],
    assessmentQuestions: [
      { id: 'ks3w-a1', question: 'What is "register" in writing?', options: ['The class attendance list', 'The level of formality', 'A type of paragraph', 'The word count'], correct: 1, explanation: 'Register is the level of formality you use, which should match your audience.' },
      { id: 'ks3w-a2', question: 'How long should you spend planning a 45-minute writing task?', options: ['0 minutes', '5 minutes', '15 minutes', '25 minutes'], correct: 1, explanation: '5 minutes planning, 35 writing, 5 checking is the ideal split.' },
      { id: 'ks3w-a3', question: 'What does "show, don\'t tell" mean?', options: ['Use images instead of text', 'Use sensory details instead of naming emotions directly', 'Show your work to a partner', 'Tell a story instead of an argument'], correct: 1, explanation: 'It means describing what something looks, sounds, and feels like rather than just labelling the emotion.' },
      { id: 'ks3w-a4', question: 'What is the climax of a story?', options: ['The opening', 'The most intense turning point', 'The resolution', 'The description'], correct: 1, explanation: 'The climax is the peak moment of tension — the turning point.' },
      { id: 'ks3w-a5', question: 'What is a counter-argument?', options: ['An argument that supports your view', 'Acknowledging the opposing viewpoint', 'A fact you cannot prove', 'The conclusion'], correct: 1, explanation: 'A counter-argument considers the other side before explaining why your position is stronger.' },
      { id: 'ks3w-a6', question: 'What does a colon introduce?', options: ['A new paragraph', 'A list or explanation', 'A question', 'A dialogue'], correct: 1, explanation: 'A colon introduces what follows: a list, an explanation, or an elaboration.' },
      { id: 'ks3w-a7', question: 'Which is the best opening for a narrative?', options: ['"One normal day..."', '"I woke up and brushed my teeth."', '"The letter arrived without a stamp."', '"This story is about a boy."'], correct: 2, explanation: 'This opening creates immediate intrigue by presenting something unusual.' },
      { id: 'ks3w-a8', question: '"We need change. We need action. We need it now." What technique is this?', options: ['Alliteration', 'Tricolon and anaphora', 'Simile', 'Counter-argument'], correct: 1, explanation: 'This uses both tricolon (three items) and anaphora (repeated "We need") for powerful emphasis.' },
      { id: 'ks3w-a9', question: 'Which sense is described as the most evocative in descriptive writing?', options: ['Sight', 'Hearing', 'Smell', 'Taste'], correct: 2, explanation: 'Smell is strongly connected to memory and emotion, making it particularly powerful.' },
      { id: 'ks3w-a10', question: 'What are the two uses of apostrophes?', options: ['Plurals and possession', 'Possession and contraction', 'Questions and exclamations', 'Lists and quotations'], correct: 1, explanation: 'Apostrophes are for possession (the dog\'s bone) and contraction (don\'t). Never for plurals.' },
      { id: 'ks3w-a11', question: 'What is pathetic fallacy?', options: ['A weak argument', 'Weather reflecting a character\'s mood', 'A type of dialogue', 'An unreliable narrator'], correct: 1, explanation: 'Pathetic fallacy uses weather/environment to mirror emotions — storms for anger, sunshine for happiness.' },
      { id: 'ks3w-a12', question: 'When should you start a new paragraph?', options: ['Every 100 words', 'When changing time, place, topic, or speaker', 'Only when the teacher tells you', 'At the end of each page'], correct: 1, explanation: 'TTPS: new paragraph for new Time, Place, Topic, or Speaker.' },
      { id: 'ks3w-a13', question: 'What is the purpose of the last 5 minutes of a writing exam?', options: ['Writing your conclusion', 'Checking for errors', 'Starting a new paragraph', 'Reading the question again'], correct: 1, explanation: 'The last 5 minutes should be spent checking for spelling, punctuation, and grammar errors.' },
      { id: 'ks3w-a14', question: '"Their," "there," and "they\'re" — which means "belonging to them"?', options: ['There', 'They\'re', 'Their', 'All three'], correct: 2, explanation: '"Their" = belonging to them. "There" = a place. "They\'re" = they are.' },
      { id: 'ks3w-a15', question: 'What makes dialogue effective?', options: ['Long speeches', 'Sounding natural and revealing character', 'Using "said" every time', 'Including every word characters say'], correct: 1, explanation: 'Good dialogue sounds natural, reveals something about the characters, and moves the story forward.' },
      { id: 'ks3w-a16', question: 'What is a rhetorical question?', options: ['A question on the exam paper', 'A question asked for effect, not expecting an answer', 'A question about grammar', 'A question with multiple answers'], correct: 1, explanation: 'Rhetorical questions are asked for impact — they make the reader think without expecting a direct answer.' },
      { id: 'ks3w-a17', question: 'Which sentence type shows sophistication?', options: ['Simple', 'Compound', 'Complex', 'Fragment'], correct: 2, explanation: 'Complex sentences (with subordinate clauses) show sophistication: "Although it was raining, she walked to school."' },
      { id: 'ks3w-a18', question: 'What should your plan include?', options: ['Full sentences for every paragraph', 'Audience, purpose, main points, and planned ending', 'Only your opening line', 'A list of techniques to use'], correct: 1, explanation: 'A good plan includes audience, purpose, main paragraph ideas, and your planned ending.' },
      { id: 'ks3w-a19', question: 'What is the AFOREST technique "E" for?', options: ['Evidence', 'Emotive language', 'Examples', 'Exaggeration'], correct: 1, explanation: 'E in AFOREST stands for Emotive language — words chosen to provoke an emotional response.' },
      { id: 'ks3w-a20', question: 'How many events should a narrative cover in a 45-minute exam?', options: ['As many as possible', 'One focused scene or moment', 'At least five', 'The entire story from birth to death'], correct: 1, explanation: 'One well-developed scene with rich description and tension is far better than a rushed adventure.' },
    ],
  },
  {
    id: 'ks3-grammar',
    title: 'KS3 Grammar & Vocabulary',
    subtitle: 'Master the building blocks of the English language.',
    tier: 'KS3',
    price: 29,
    duration: '3-4 hours',
    level: 'KS3 (Years 7-9)',
    description: 'Understand how English works at the word and sentence level. Parts of speech, sentence types, punctuation, vocabulary building, and spelling strategies — the foundations that everything else is built on.',
    color: '#10b981',
    moduleList: [
      {
        id: 'ks3g-m1',
        title: 'Parts of Speech',
        duration: '30 mins',
        content: `<h2>The Building Blocks of Language</h2>
<p>Every word in the English language belongs to a word class (also called a "part of speech"). Understanding these classes helps you talk about language precisely — which is exactly what examiners want.</p>

<h3>The Main Word Classes</h3>
<p><strong>Nouns</strong> — Names for things. Four types:</p>
<ul>
<li><em>Proper nouns</em> — specific names: London, Shakespeare, Tuesday</li>
<li><em>Common nouns</em> — general names: city, writer, day</li>
<li><em>Abstract nouns</em> — things you cannot touch: love, fear, justice</li>
<li><em>Collective nouns</em> — groups: a flock, a crowd, a team</li>
</ul>

<p><strong>Verbs</strong> — Action or state words. "She <strong>ran</strong>." "He <strong>was</strong> tired."</p>
<ul>
<li><em>Dynamic verbs</em> — show action: run, jump, write</li>
<li><em>Stative verbs</em> — show state: believe, know, feel</li>
</ul>

<p><strong>Adjectives</strong> — Describe nouns. "The <strong>tall</strong>, <strong>dark</strong> stranger."</p>
<p><strong>Adverbs</strong> — Modify verbs, adjectives, or other adverbs. "She ran <strong>quickly</strong>." "It was <strong>extremely</strong> cold."</p>
<p><strong>Conjunctions</strong> — Join words or clauses. Coordinating: and, but, or. Subordinating: because, although, when.</p>
<p><strong>Prepositions</strong> — Show position or relationship: in, on, under, between, through.</p>

<div class="key-term"><strong>Key Term: Subject terminology</strong> — Using the correct grammatical names for things. Saying "the adjective 'cold'" is more precise than "the describing word 'cold'" and earns more marks.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing language, always name the word class. "The verb 'crept' suggests..." is much stronger than "The word 'crept' suggests..." It shows you understand grammar.</div>`,
        quiz: [
          { id: 'ks3g-m1-q1', question: '"Justice" is an example of what type of noun?', options: ['Proper noun', 'Common noun', 'Abstract noun', 'Collective noun'], correct: 2, explanation: '"Justice" is something you cannot physically touch — it is an idea, making it an abstract noun.' },
          { id: 'ks3g-m1-q2', question: 'What does an adverb modify?', options: ['Only nouns', 'Verbs, adjectives, or other adverbs', 'Only sentences', 'Only proper nouns'], correct: 1, explanation: 'Adverbs modify verbs (ran quickly), adjectives (extremely cold), or other adverbs (very slowly).' },
          { id: 'ks3g-m1-q3', question: 'Which of these is a subordinating conjunction?', options: ['And', 'But', 'Because', 'Or'], correct: 2, explanation: '"Because" is a subordinating conjunction — it introduces a subordinate clause that cannot stand alone.' },
          { id: 'ks3g-m1-q4', question: 'Why should you name word classes in your analysis?', options: ['It wastes time', 'It shows grammatical knowledge and earns more marks', 'It is only for grammar questions', 'It is not necessary'], correct: 1, explanation: 'Using correct terminology like "the adjective..." or "the verb..." shows precision and grammatical understanding.' },
        ],
      },
      {
        id: 'ks3g-m2',
        title: 'Sentence Types',
        duration: '25 mins',
        content: `<h2>Four Sentence Types</h2>
<p>Being able to identify and use different sentence types is essential for both analysis and writing. Varying your sentences makes your writing more engaging and sophisticated.</p>

<h3>1. Simple Sentence</h3>
<p>One main clause (subject + verb). "The dog barked." "She sat down."</p>
<p><strong>Effect:</strong> Direct, clear, punchy. Perfect for impact and emphasis.</p>

<h3>2. Compound Sentence</h3>
<p>Two main clauses joined by a coordinating conjunction (and, but, or, so, yet).</p>
<p>"The sun rose <strong>and</strong> the birds began to sing."</p>
<p><strong>Effect:</strong> Shows connection between two equal ideas.</p>

<h3>3. Complex Sentence</h3>
<p>A main clause + one or more subordinate clauses.</p>
<p>"<strong>Although it was raining</strong>, they went outside."</p>
<p>The subordinate clause ("although it was raining") cannot stand alone as a sentence.</p>
<p><strong>Effect:</strong> Shows the relationship between ideas. Demonstrates sophistication.</p>

<h3>4. Compound-Complex Sentence</h3>
<p>Two or more main clauses + at least one subordinate clause.</p>
<p>"<strong>When the bell rang</strong>, the students stood up <strong>and</strong> they filed out of the room."</p>

<div class="key-term"><strong>Key Term: Clause</strong> — A group of words containing a subject and a verb. A main clause can stand alone. A subordinate clause cannot.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> In your own writing, use simple sentences for impact and complex sentences for sophistication. The contrast between them creates rhythm and keeps the reader engaged.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing only in simple sentences makes your work sound childish. Writing only in complex sentences makes it hard to follow. The best writing mixes all types deliberately.</div>`,
        quiz: [
          { id: 'ks3g-m2-q1', question: '"The door slammed." What type of sentence is this?', options: ['Compound', 'Complex', 'Simple', 'Compound-complex'], correct: 2, explanation: 'This has one main clause with a subject (door) and verb (slammed) — a simple sentence.' },
          { id: 'ks3g-m2-q2', question: 'What joins the two parts of a compound sentence?', options: ['A full stop', 'A subordinating conjunction', 'A coordinating conjunction', 'A comma alone'], correct: 2, explanation: 'Compound sentences use coordinating conjunctions: and, but, or, so, yet (FANBOYS).' },
          { id: 'ks3g-m2-q3', question: '"Although she was tired, she kept running." What type of sentence is this?', options: ['Simple', 'Compound', 'Complex', 'Fragment'], correct: 2, explanation: 'This has a main clause ("she kept running") and a subordinate clause ("Although she was tired") — a complex sentence.' },
          { id: 'ks3g-m2-q4', question: 'What is the effect of using simple sentences?', options: ['They sound childish', 'They create impact, clarity, and emphasis', 'They show sophistication', 'They have no particular effect'], correct: 1, explanation: 'Simple sentences are direct and punchy. Used deliberately, they create emphasis and impact.' },
        ],
      },
      {
        id: 'ks3g-m3',
        title: 'Punctuation Mastery',
        duration: '35 mins',
        content: `<h2>Punctuation Changes Meaning</h2>
<p>Punctuation is not decoration. It changes the meaning of sentences. "Let's eat, Grandma!" means something very different from "Let's eat Grandma!" A comma saves a life.</p>

<h3>The Essential Marks</h3>
<p><strong>Full stops (.)</strong> — End a sentence. Every sentence needs one (unless it ends with ? or !).</p>

<p><strong>Commas (,)</strong> — The most misused mark. Use for:</p>
<ul>
<li>Lists: "apples, oranges, and bananas"</li>
<li>After introductory phrases: "However, she disagreed."</li>
<li>Parenthesis: "My brother, who is twelve, plays football."</li>
<li>Before coordinating conjunctions in compound sentences: "It rained, but we went out."</li>
</ul>

<p><strong>Apostrophes (')</strong> — Two uses:</p>
<ul>
<li>Possession: the cat's tail (one cat), the cats' tails (multiple cats)</li>
<li>Contraction: can't, don't, it's (it is)</li>
</ul>

<p><strong>Semicolons (;)</strong> — Join two related complete sentences: "The rain stopped; the sun emerged."</p>

<p><strong>Colons (:)</strong> — Introduce a list, explanation, or elaboration: "She needed three things: courage, patience, and luck."</p>

<p><strong>Dashes (—)</strong> — Add extra information or create a dramatic pause: "The answer was obvious — or so she thought."</p>

<p><strong>Speech marks (" ")</strong> — Surround spoken words: "I'm leaving," she said.</p>

<div class="key-term"><strong>Key Term: Its vs It's</strong> — "It's" = "it is" (contraction). "Its" = belonging to it (possession). This is the most common mistake in English and examiners specifically look for it.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Using a comma to join two complete sentences without a conjunction. "She ran home, she was tired" is a comma splice. Fix it with a semicolon, full stop, or conjunction: "She ran home; she was tired" or "She ran home because she was tired."</div>`,
        quiz: [
          { id: 'ks3g-m3-q1', question: 'Which sentence uses the apostrophe correctly?', options: ['"The dog wagged it\'s tail."', '"The dog wagged its tail."', '"The dogs wagged it\'s tail."', '"The dog\'s wagged its tails."'], correct: 1, explanation: '"Its" (no apostrophe) means belonging to it. "It\'s" means "it is." The dog\'s tail belongs to the dog, so "its" is correct here.' },
          { id: 'ks3g-m3-q2', question: 'What is a comma splice?', options: ['Using too many commas', 'Joining two complete sentences with only a comma', 'Forgetting a comma', 'Using a comma before "and"'], correct: 1, explanation: 'A comma splice incorrectly joins two sentences with just a comma. Fix with a semicolon, conjunction, or full stop.' },
          { id: 'ks3g-m3-q3', question: 'When do you use a semicolon?', options: ['Before a list', 'To join two related complete sentences', 'After every clause', 'Instead of a full stop'], correct: 1, explanation: 'A semicolon joins two complete, closely related sentences: "It rained; we stayed inside."' },
          { id: 'ks3g-m3-q4', question: 'What does a colon introduce?', options: ['A new paragraph', 'A list, explanation, or elaboration', 'A question', 'Dialogue'], correct: 1, explanation: 'A colon introduces what follows — a list, an explanation, or an elaboration of the preceding statement.' },
        ],
      },
      {
        id: 'ks3g-m4',
        title: 'Building Vocabulary',
        duration: '30 mins',
        content: `<h2>Words Are Your Tools</h2>
<p>A wide vocabulary lets you express ideas with precision. Instead of saying something is "good," you can say it is <em>effective, compelling, remarkable, invaluable</em>, or <em>exemplary</em> — each with a slightly different meaning.</p>

<h3>Tier 2 and Tier 3 Vocabulary</h3>
<ul>
<li><strong>Tier 1</strong> — Everyday words: big, happy, said. You already know these.</li>
<li><strong>Tier 2</strong> — Academic words used across subjects: analyse, significant, demonstrate, convey, illustrate. These are the words that upgrade your writing.</li>
<li><strong>Tier 3</strong> — Subject-specific words: metaphor, alliteration, protagonist, semantic field. These show you know the subject.</li>
</ul>

<h3>Connotation: The Hidden Meaning</h3>
<p>Synonyms do not always mean the same thing. Consider: <em>childish</em> vs <em>childlike</em>. Both relate to children, but "childish" is negative (immature) and "childlike" is positive (innocent, pure). The connotations are completely different.</p>

<p>More examples:</p>
<ul>
<li><em>Slender</em> (positive) vs <em>skinny</em> (negative) vs <em>thin</em> (neutral)</li>
<li><em>Determined</em> (positive) vs <em>stubborn</em> (negative) vs <em>persistent</em> (neutral)</li>
</ul>

<div class="key-term"><strong>Key Term: Word family</strong> — A group of words sharing the same root. Terror → terrify → terrifying → terrified → terrorism → terrorist. Knowing one word helps you understand the whole family.</div>

<h3>How to Build Your Vocabulary</h3>
<ol>
<li><strong>Read widely</strong> — novels, newspapers, magazines, non-fiction. Every new word you encounter is a word you can use.</li>
<li><strong>Use a vocabulary journal</strong> — Write down new words with their definition and an example sentence.</li>
<li><strong>Practice using new words</strong> — Try to use one new word in your writing each week. If you can use it correctly three times, it becomes part of your vocabulary.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> You do not need to use complicated words everywhere. The mark for vocabulary is about choosing the RIGHT word, not the longest word. "The cold bit through his coat" is better than "The frigid temperature permeated his outerwear."</div>`,
        quiz: [
          { id: 'ks3g-m4-q1', question: 'What is a Tier 2 word?', options: ['An everyday word like "big"', 'An academic word used across subjects like "analyse"', 'A subject-specific word like "metaphor"', 'A slang word'], correct: 1, explanation: 'Tier 2 words are academic vocabulary used across subjects — words like analyse, significant, demonstrate. They upgrade your writing.' },
          { id: 'ks3g-m4-q2', question: 'What is the difference between "childish" and "childlike"?', options: ['They mean the same thing', '"Childish" is negative; "childlike" is positive', '"Childlike" is negative; "childish" is positive', 'One is a noun and the other is an adjective'], correct: 1, explanation: '"Childish" connotes immaturity (negative). "Childlike" connotes innocence and wonder (positive). Same root, different connotations.' },
          { id: 'ks3g-m4-q3', question: 'What is a word family?', options: ['Words that rhyme', 'A group of words sharing the same root', 'Synonyms', 'Words in the same sentence'], correct: 1, explanation: 'A word family shares a root: terror → terrify → terrifying → terrified. Knowing the root helps you understand related words.' },
          { id: 'ks3g-m4-q4', question: 'Should you always use the longest, most complex word?', options: ['Yes, always', 'No — use the RIGHT word, not the longest', 'Only in conclusions', 'Only in formal writing'], correct: 1, explanation: 'Precision matters more than complexity. The right word at the right moment is more effective than a long word that does not fit.' },
        ],
      },
      {
        id: 'ks3g-m5',
        title: 'Spelling Strategies',
        duration: '25 mins',
        content: `<h2>Common Errors and How to Fix Them</h2>
<p>English spelling is notoriously tricky, but most errors follow patterns. Learn the patterns and you will eliminate the most common mistakes.</p>

<h3>The Top 10 Misspelled Words in English Exams</h3>
<ol>
<li><strong>definitely</strong> — NOT "definately." Think: definite + ly.</li>
<li><strong>separate</strong> — NOT "seperate." There is "a rat" in separate.</li>
<li><strong>because</strong> — NOT "becuase." Mnemonic: Big Elephants Can Always Understand Small Elephants.</li>
<li><strong>believe</strong> — NOT "beleive." There is a "lie" in believe.</li>
<li><strong>their / there / they're</strong> — Their = belonging. There = place. They're = they are.</li>
<li><strong>which</strong> — NOT "wich." Always starts with "wh."</li>
<li><strong>beginning</strong> — Double n: begin + ning.</li>
<li><strong>necessary</strong> — One collar (c), two socks (s): ne<strong>c</strong>e<strong>ss</strong>ary.</li>
<li><strong>embarrass</strong> — Double r, double s: emba<strong>rr</strong>a<strong>ss</strong>.</li>
<li><strong>disappear</strong> — One s, two p's: di<strong>s</strong>a<strong>pp</strong>ear.</li>
</ol>

<h3>Spelling Patterns</h3>
<p><strong>i before e, except after c</strong> (when the sound is "ee"):</p>
<ul>
<li>believe, achieve, piece — i before e</li>
<li>receive, ceiling, deceive — except after c</li>
<li>Exceptions: weird, seize, neither (yes, English is annoying)</li>
</ul>

<p><strong>Doubling consonants:</strong></p>
<ul>
<li>When adding -ing or -ed to a short word ending in a consonant, double it: run → running, stop → stopped</li>
<li>But NOT if the word ends in two consonants: jump → jumping</li>
</ul>

<div class="key-term"><strong>Key Term: Mnemonic</strong> — A memory trick that helps you remember something. "Big Elephants Can Always Understand Small Elephants" = BECAUSE.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> If you are unsure how to spell a word in an exam, use a synonym you CAN spell. Avoid "necessary" if you are not confident — use "essential" instead. Using a simpler word correctly is always better than misspelling a complex one.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> "Should of" instead of "should have." This happens because "should've" sounds like "should of." But "of" is never correct after should/could/would. It is always "should HAVE."</div>`,
        quiz: [
          { id: 'ks3g-m5-q1', question: 'Which spelling is correct?', options: ['Definately', 'Definatly', 'Definitely', 'Definitly'], correct: 2, explanation: '"Definitely" — think "definite" + "ly." The root word is "definite" with an "i," not an "a."' },
          { id: 'ks3g-m5-q2', question: 'What is a mnemonic?', options: ['A type of poem', 'A memory trick for spelling', 'A punctuation mark', 'A word class'], correct: 1, explanation: 'A mnemonic is a memory aid — like "there is a LIE in beLIEve" or "Big Elephants Can Always Understand Small Elephants" for BECAUSE.' },
          { id: 'ks3g-m5-q3', question: 'Which is correct: "should of" or "should have"?', options: ['Should of', 'Should have', 'Both are correct', 'Neither is correct'], correct: 1, explanation: '"Should have" is always correct. "Should of" is a common error caused by the contraction "should\'ve" sounding like "should of."' },
          { id: 'ks3g-m5-q4', question: 'What should you do if you cannot spell a word in an exam?', options: ['Guess and hope for the best', 'Leave a blank space', 'Use a synonym you can spell correctly', 'Write it phonetically'], correct: 2, explanation: 'If you are unsure, use a synonym you can spell. A simpler word spelled correctly is better than a complex word spelled wrong.' },
        ],
      },
    ],
    assessmentQuestions: [
      { id: 'ks3g-a1', question: '"Freedom" is an example of what type of noun?', options: ['Proper', 'Collective', 'Abstract', 'Common'], correct: 2, explanation: '"Freedom" is an abstract noun — you cannot physically touch it.' },
      { id: 'ks3g-a2', question: 'What does an adjective describe?', options: ['A verb', 'A noun', 'An adverb', 'A preposition'], correct: 1, explanation: 'Adjectives describe nouns: "the tall building," "a red car."' },
      { id: 'ks3g-a3', question: '"Although she was tired, she finished the race." What type of sentence?', options: ['Simple', 'Compound', 'Complex', 'Fragment'], correct: 2, explanation: 'This has a subordinate clause ("Although she was tired") + main clause — complex sentence.' },
      { id: 'ks3g-a4', question: 'What is the correct use of a semicolon?', options: ['Before a list', 'Joining two related complete sentences', 'After a conjunction', 'Replacing a comma'], correct: 1, explanation: 'Semicolons join two complete, related sentences without a conjunction.' },
      { id: 'ks3g-a5', question: 'Which word is a subordinating conjunction?', options: ['And', 'But', 'Although', 'Or'], correct: 2, explanation: '"Although" introduces a subordinate clause that cannot stand alone.' },
      { id: 'ks3g-a6', question: '"It\'s" means...', options: ['Belonging to it', 'It is', 'A plural', 'It was'], correct: 1, explanation: '"It\'s" is a contraction of "it is." "Its" (no apostrophe) means belonging to it.' },
      { id: 'ks3g-a7', question: 'What is a Tier 2 word?', options: ['Slang', 'An academic word used across subjects', 'A very long word', 'A word only used in English'], correct: 1, explanation: 'Tier 2 words are academic vocabulary (analyse, significant, demonstrate) used across all subjects.' },
      { id: 'ks3g-a8', question: '"Slender" and "skinny" differ in their...', options: ['Spelling', 'Connotations', 'Pronunciation', 'Length'], correct: 1, explanation: 'Both describe thinness, but "slender" has positive connotations while "skinny" is negative.' },
      { id: 'ks3g-a9', question: 'How do you spell the word meaning "required"?', options: ['Neccesary', 'Neccessary', 'Necessary', 'Necesary'], correct: 2, explanation: '"Necessary" — one c, two s\'s. Remember: one collar, two socks.' },
      { id: 'ks3g-a10', question: 'What type of verb is "believe"?', options: ['Dynamic', 'Stative', 'Modal', 'Auxiliary'], correct: 1, explanation: '"Believe" is a stative verb — it describes a state of mind, not a physical action.' },
      { id: 'ks3g-a11', question: 'What is a comma splice?', options: ['A correctly used comma', 'Joining two sentences with only a comma', 'Using too few commas', 'A comma before "and"'], correct: 1, explanation: 'A comma splice incorrectly joins two complete sentences with just a comma.' },
      { id: 'ks3g-a12', question: 'When do you double the consonant before adding -ing?', options: ['Always', 'When the word ends in a single consonant after a short vowel', 'Never', 'Only for long words'], correct: 1, explanation: 'Double the final consonant when a short word ends consonant-vowel-consonant: run → running, stop → stopping.' },
      { id: 'ks3g-a13', question: 'A preposition shows...', options: ['Time only', 'The relationship between a noun and another word', 'Action', 'Emotion'], correct: 1, explanation: 'Prepositions show relationships of position, time, or direction: in, on, under, between, during.' },
      { id: 'ks3g-a14', question: 'Which is correct?', options: ['"They\'re books are here."', '"Their books are here."', '"There books are here."', '"Theyre books are here."'], correct: 1, explanation: '"Their" = belonging to them. The books belong to them, so "their" is correct.' },
      { id: 'ks3g-a15', question: '"She ran quickly." What word class is "quickly"?', options: ['Adjective', 'Noun', 'Adverb', 'Verb'], correct: 2, explanation: '"Quickly" modifies the verb "ran," telling us how she ran — it is an adverb.' },
      { id: 'ks3g-a16', question: 'What does a colon do?', options: ['Ends a sentence', 'Introduces a list or explanation', 'Joins equal clauses', 'Marks a question'], correct: 1, explanation: 'A colon introduces what follows: a list, explanation, or elaboration.' },
      { id: 'ks3g-a17', question: '"The dog barked and the cat hid." What type of sentence?', options: ['Simple', 'Compound', 'Complex', 'Fragment'], correct: 1, explanation: 'Two main clauses joined by "and" (coordinating conjunction) — compound sentence.' },
      { id: 'ks3g-a18', question: 'What is the best way to build vocabulary?', options: ['Memorise the dictionary', 'Read widely and note new words', 'Only use long words', 'Avoid unfamiliar words'], correct: 1, explanation: 'Reading widely exposes you to new words in context, which is the most effective way to build vocabulary.' },
      { id: 'ks3g-a19', question: '"Should of" is...', options: ['Correct', 'Incorrect — it should be "should have"', 'Only correct in informal writing', 'An alternative spelling'], correct: 1, explanation: '"Should of" is always wrong. The correct form is "should have" (contracted: "should\'ve").' },
      { id: 'ks3g-a20', question: 'In "i before e except after c," which word is an exception?', options: ['Believe', 'Receive', 'Weird', 'Achieve'], correct: 2, explanation: '"Weird" is an exception — it has "ei" without a preceding "c" and does not follow the pattern.' },
    ],
  },
];

export default ks3Courses;
