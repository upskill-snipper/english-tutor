// OCR GCSE English Literature: Poetry — Spec J352
// All content is OCR GCSE-specific — "Towards a World Unknown" V2 anthology

const ocrGcseLitPoetry = {
  id: 'ocr-gcse-lit-poetry',
  title: 'OCR GCSE Literature: Poetry',
  subtitle: 'Master the "Towards a World Unknown" anthology and OCR\'s unique comparison-with-unseen format.',
  tier: 'GCSE',
  board: 'OCR',
  specCode: 'J352',
  price: 39,
  duration: '5-6 hours',
  level: 'GCSE (Years 10-11)',
  description: 'Complete preparation for the OCR GCSE English Literature poetry paper. Study all three clusters of the "Towards a World Unknown" anthology, master the unique Part (a) comparison with an unseen poem, and build confident unseen analysis skills.',
  color: '#7c3aed',
  moduleList: [
    {
      id: 'ocr-lp-m1',
      title: 'The OCR Anthology: Three Clusters',
      duration: '30 mins',
      content: `<h2>"Towards a World Unknown" — Version 2</h2>
<p>The OCR GCSE Literature poetry paper is built around the <strong>"Towards a World Unknown"</strong> anthology (Version 2). Unlike other boards that use a single group of poems, OCR organises its anthology into <strong>three thematic clusters</strong>, each containing 15 poems. You study <strong>one cluster</strong> in class, but you need to know its poems inside out.</p>

<div class="key-term"><strong>Key Term: Cluster</strong> — A thematic grouping of 15 poems within the OCR anthology. The three clusters are Love & Relationships, Conflict, and Youth & Age. Your teacher will choose one cluster for your class to study.</div>

<h3>Cluster 1: Love & Relationships</h3>
<p>This cluster explores romantic love, family bonds, longing, and the complexities of human connection. Key poems include:</p>
<ul>
<li><strong>"In Paris with You"</strong> — James Fenton: A sardonic, post-breakup poem rejecting romantic cliches; the speaker insists on staying in the hotel room, not sightseeing; ironic tone masks genuine vulnerability</li>
<li><strong>"The Breather"</strong> — Billy Collins: A quiet, reflective poem about pausing and observing; gentle tone; domestic simplicity as a form of love</li>
<li><strong>"Dusting the Phone"</strong> — Jackie Kay: Waiting anxiously for a phone call from a lover; obsessive behaviour as a sign of longing; humour and pathos combined</li>
<li><strong>"Love and Friendship"</strong> — Emily Bronte: Contrasts the wild rose (love) with the holly (friendship); love fades but friendship endures; regular rhyme scheme mirrors the simplicity of the message</li>
<li><strong>"The Perseverance"</strong> — Raymond Antrobus: A deeply personal poem about a father-son relationship and deafness; explores communication, identity, and grief; the title references a pub name tied to family history</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> You do NOT need to memorise all 15 poems equally. Focus on learning 8-10 poems in real depth — with quotations, techniques, and context — and have a working knowledge of the rest. The exam names one poem for you, but you choose which poem to write about in Part (b).</div>

<h3>Cluster 2: Conflict</h3>
<p>This cluster examines war, political tension, personal struggle, and the aftermath of violence:</p>
<ul>
<li><strong>"We Lived Happily during the War"</strong> — Ilya Kaminsky: Guilt and complicity in times of conflict; the speaker's happiness while others suffer; short, punchy lines create moral discomfort</li>
<li><strong>"Anthem for Doomed Youth"</strong> — Wilfred Owen: A Petrarchan sonnet mourning soldiers who die without proper funeral rites; auditory imagery of battle replaces church bells; octave/sestet shift from battlefield to home</li>
<li><strong>"What Were They Like?"</strong> — Denise Levertov: A Q&A structure imagining Vietnamese culture destroyed by war; the questions are clinical, the answers are devastated; anti-war protest poem</li>
<li><strong>"Lament"</strong> — Gillian Clarke: Each stanza begins with "For" — a litany of environmental and human destruction caused by the Gulf War; elegiac tone; nature as a victim of conflict</li>
<li><strong>"Vergissmeinnicht"</strong> — Keith Douglas: A WW2 soldier discovers the body of an enemy with a photograph inscribed "Vergissmeinnicht" (Forget me not); love and death intertwined; the shared humanity of soldiers on opposing sides</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about poems from the wrong cluster. If your class studied Love & Relationships, do NOT write about "Anthem for Doomed Youth" from the Conflict cluster — the examiner will not credit it in Part (b).</div>

<h3>Cluster 3: Youth & Age</h3>
<p>This cluster explores growing up, parenthood, ageing, and the passage of time:</p>
<ul>
<li><strong>"Happy Birthday Moon"</strong> — Raymond Antrobus: A child's innocent conversation with the moon becomes a meditation on deafness and miscommunication; tender tone; draws on a children's picture book</li>
<li><strong>"You're"</strong> — Sylvia Plath: An exuberant riddle-poem addressed to an unborn baby; densely packed metaphors in every line; playful, celebratory tone unusual for Plath</li>
<li><strong>"Farther"</strong> — Owen Sheers: A son observes his ageing father; role reversal between parent and child; the pun in the title ("farther" / "father") suggests growing distance</li>
<li><strong>"My First Week"</strong> — Sharon Olds: A newborn's first week described through vivid sensory imagery; the baby is both alien and miraculous; conversational, intimate tone</li>
<li><strong>"Baby Song"</strong> — Thom Gunn: A baby's perspective on being born; short, rhythmic lines mirror a nursery rhyme; deceptively simple language with darker undertones about separation</li>
</ul>

<div class="text-extract">"Don't talk to me of love. Let's talk of Paris,<br>with its towers and alleys and its dark café."<div class="source">James Fenton, "In Paris with You" — Love & Relationships cluster</div></div>

<h3>How the Exam Works</h3>
<p>The poetry section of Paper 2 is worth <strong>40 marks</strong> and has two parts. Part (a) names a specific anthology poem and pairs it with an unseen poem — you compare both. Part (b) asks you to write about a poem of your own choice from the same cluster. This structure is <strong>unique to OCR</strong> and requires a different approach from AQA or Edexcel.</p>`,
      quiz: [
        { id: 'ocr-lp-m1-q1', question: 'How many thematic clusters are in the OCR "Towards a World Unknown" anthology?', options: ['2', '3', '4', '5'], correct: 1, explanation: 'The anthology is divided into three clusters: Love & Relationships, Conflict, and Youth & Age. You study one cluster.' },
        { id: 'ocr-lp-m1-q2', question: 'How many poems are in each cluster?', options: ['10', '12', '15', '20'], correct: 2, explanation: 'Each of the three clusters contains 15 poems.' },
        { id: 'ocr-lp-m1-q3', question: 'Which poem uses a Q&A structure to protest the Vietnam War?', options: ['Lament', 'Anthem for Doomed Youth', 'What Were They Like?', 'We Lived Happily during the War'], correct: 2, explanation: '"What Were They Like?" by Denise Levertov uses a question-and-answer format to highlight the cultural destruction caused by the Vietnam War.' },
        { id: 'ocr-lp-m1-q4', question: 'What is unique about the OCR poetry exam compared to other boards?', options: ['It only tests unseen poetry', 'It pairs a named anthology poem with an unseen poem for comparison', 'It requires you to write your own poem', 'There is no anthology at all'], correct: 1, explanation: 'OCR uniquely asks you to compare a named anthology poem with an unseen poem in Part (a), then write about your own chosen poem in Part (b).' },
      ],
    },
    {
      id: 'ocr-lp-m2',
      title: 'Analysing Individual Anthology Poems',
      duration: '35 mins',
      content: `<h2>Deep-Diving into Your Cluster Poems</h2>
<p>To succeed on the OCR poetry paper, you need to be able to write analytically about any poem in your cluster at speed. This means preparing detailed notes on each poem <strong>before</strong> the exam, not trying to work it all out on the day.</p>

<div class="key-term"><strong>Key Term: SMILE</strong> — A framework for analysing poetry: <strong>S</strong>tructure, <strong>M</strong>eanings/messages, <strong>I</strong>magery, <strong>L</strong>anguage, <strong>E</strong>ffect on the reader. Use this as a checklist to ensure you cover all the key elements.</div>

<h3>The SMILE Framework</h3>
<ul>
<li><strong>Structure:</strong> Form (sonnet, free verse, ballad?), stanza pattern, line lengths, enjambment, caesura, rhyme scheme, volta or shift</li>
<li><strong>Meanings/Messages:</strong> What is the poem about on the surface? What deeper themes does it explore? What is the poet's attitude or message?</li>
<li><strong>Imagery:</strong> Metaphors, similes, personification, symbolism — what pictures does the poet create and why?</li>
<li><strong>Language:</strong> Word choice (diction), tone, sound devices (alliteration, sibilance, assonance), register, semantic fields</li>
<li><strong>Effect:</strong> How does the poem make the reader feel? What response does the poet want? How do form and content work together?</li>
</ul>

<h3>WHAT-HOW-WHY: The Analytical Paragraph</h3>
<p>Every point you make should follow the <strong>WHAT-HOW-WHY</strong> structure:</p>
<ul>
<li><strong>WHAT</strong> — Identify the technique or feature</li>
<li><strong>HOW</strong> — Embed a quotation and explain how the technique works</li>
<li><strong>WHY</strong> — Analyse the effect on the reader and connect to the poet's purpose</li>
</ul>

<div class="model-answer"><strong>Model Paragraph (Love & Relationships):</strong> Fenton uses the refrain "Don't talk to me of love" to establish a defiant, anti-romantic tone. The imperative "Don't" signals the speaker's resistance to sentimentality, yet the very repetition of the word "love" undermines this resistance — the speaker cannot stop invoking the thing they claim to reject. This creates an ironic tension that reveals the speaker's vulnerability beneath their bravado, allowing the reader to sense genuine heartbreak masked by sardonic wit.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always embed quotations rather than writing them as separate block quotes. "The metaphor 'wed in this instant' suggests..." is far more fluent than: "There is a quote: 'wed in this instant.' This is a metaphor." Embedding shows confidence and saves time.</div>

<h3>Preparing Your Poems</h3>
<p>For each poem in your cluster, prepare:</p>
<ul>
<li><strong>3-4 key quotations</strong> you can analyse in detail</li>
<li><strong>2-3 techniques</strong> the poet uses and their effects</li>
<li><strong>1 structural point</strong> (form, volta, stanza pattern)</li>
<li><strong>Context</strong> — but only where it genuinely enhances your analysis</li>
</ul>

<div class="text-extract">"For the green turtle with her pulsing burden,<br>in search of the breeding beach,<br>for her eggs laid in their nest of sickness."<div class="source">Gillian Clarke, "Lament" — Conflict cluster</div></div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a paragraph of context before any analysis. Context should be woven into your analytical points, not bolted on as a separate introduction. "Owen, who fought in WW1, uses the phrase 'doomed youth' to..." is better than a paragraph about Owen's biography.</div>`,
      quiz: [
        { id: 'ocr-lp-m2-q1', question: 'What does SMILE stand for in poetry analysis?', options: ['Story, Meaning, Ideas, Layout, Emotion', 'Structure, Meanings/Messages, Imagery, Language, Effect', 'Setting, Mood, Irony, Lines, Ending', 'Sound, Metaphor, Imagery, Length, Evidence'], correct: 1, explanation: 'SMILE stands for Structure, Meanings/Messages, Imagery, Language, and Effect on the reader.' },
        { id: 'ocr-lp-m2-q2', question: 'In the WHAT-HOW-WHY method, what does HOW involve?', options: ['Explaining the poem\'s historical context', 'Embedding a quotation and explaining how the technique works', 'Describing what the poem is about', 'Listing all techniques in the poem'], correct: 1, explanation: 'HOW means embedding a quotation and explaining how the specific technique operates — the mechanism of its effect.' },
        { id: 'ocr-lp-m2-q3', question: 'How should context be used in a poetry essay?', options: ['As a full separate paragraph at the start', 'Woven into analytical points where it enhances analysis', 'Avoided entirely', 'Only in the conclusion'], correct: 1, explanation: 'Context should be integrated into your analysis, not bolted on. It should enhance your reading of the poem, not replace it.' },
        { id: 'ocr-lp-m2-q4', question: 'How many key quotations should you prepare per poem?', options: ['1', '2', '3-4', '10+'], correct: 2, explanation: 'Preparing 3-4 key quotations per poem gives you enough material for a detailed essay without overwhelming your memory.' },
      ],
    },
    {
      id: 'ocr-lp-m3',
      title: 'Part (a): Comparing Anthology Poem with Unseen',
      duration: '40 mins',
      content: `<h2>The OCR Comparison Question (20 marks)</h2>
<p>Part (a) is what makes the OCR poetry exam <strong>unique</strong>. You are given a <strong>named poem from your cluster</strong> (printed in the exam) alongside an <strong>unseen poem</strong>. You must compare how both poets present a shared theme or idea. This is worth <strong>20 marks</strong>.</p>

<div class="key-term"><strong>Key Term: Part (a) — Comparative response</strong> — You compare a named anthology poem with an unseen poem. The question will specify the theme to compare (e.g., "Compare how the poets present ideas about loss"). You must discuss BOTH poems with equal depth.</div>

<h3>What the Question Looks Like</h3>
<div class="text-extract">"Compare how the poets present ideas about conflict in 'Anthem for Doomed Youth' and the unseen poem. You should consider the poets' use of language, structure, and form."<div class="source">Example Part (a) question — OCR J352</div></div>

<h3>How to Structure Your Comparison</h3>
<p>Use an <strong>alternating (ping-pong) structure</strong> — discuss both poems in every paragraph:</p>
<ul>
<li><strong>Introduction (2-3 sentences):</strong> Identify the shared theme and signal the key difference in approach</li>
<li><strong>Paragraph 1:</strong> Compare how both poets present [aspect 1] — language focus</li>
<li><strong>Paragraph 2:</strong> Compare how both poets present [aspect 2] — imagery or tone focus</li>
<li><strong>Paragraph 3:</strong> Compare structural choices and their effects</li>
<li><strong>Conclusion (2-3 sentences):</strong> Sum up the key difference in how the poets approach the theme</li>
</ul>

<div class="model-answer"><strong>Model Comparison Opening:</strong> Both Owen and the unseen poet explore the devastating impact of war on young soldiers, yet their methods diverge sharply. Owen's "Anthem for Doomed Youth" uses the rigid structure of a Petrarchan sonnet to impose order on chaos, while the unseen poem's fragmented free verse mirrors the disorder of conflict itself. This structural contrast reflects fundamentally different responses to the same horror.</div>

<h3>Dealing with the Unseen Poem</h3>
<p>The unseen poem is the challenge. You have never seen it before, so you must:</p>
<ul>
<li><strong>Read it three times:</strong> Once for gist, once for techniques, once to select quotations</li>
<li><strong>Identify the theme immediately:</strong> The question tells you what to look for</li>
<li><strong>Find 3-4 quotations</strong> you can analyse</li>
<li><strong>Look for connections AND contrasts</strong> with the named anthology poem</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Spend roughly 5 minutes reading and annotating the unseen poem before you start writing. Time spent understanding the poem saves time later — rushing into writing with a half-understood unseen produces confused analysis.</div>

<h3>Comparative Connectives</h3>
<p>Use these to weave your comparison together: <em>similarly, in contrast, whereas, conversely, both poets, unlike, however, while, equally, on the other hand</em>.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about the anthology poem for half the essay, then the unseen poem for the other half. This is two separate analyses, NOT a comparison. Every paragraph must discuss BOTH poems.</div>`,
      quiz: [
        { id: 'ocr-lp-m3-q1', question: 'How many marks is Part (a) worth?', options: ['10 marks', '15 marks', '20 marks', '25 marks'], correct: 2, explanation: 'Part (a) is worth 20 marks for comparing a named anthology poem with an unseen poem.' },
        { id: 'ocr-lp-m3-q2', question: 'What makes the OCR Part (a) question unique compared to other boards?', options: ['It only tests unseen poetry', 'It compares a named anthology poem with an unseen poem', 'It requires you to write your own poem', 'It is an open-book exam'], correct: 1, explanation: 'OCR uniquely pairs a named anthology poem with an unseen poem for comparison — other boards either compare two anthology poems or test unseen poetry separately.' },
        { id: 'ocr-lp-m3-q3', question: 'How should you structure a Part (a) response?', options: ['Write about the anthology poem first, then the unseen poem', 'Use an alternating structure, discussing both poems in every paragraph', 'Only write about the unseen poem', 'Write a paragraph on each poem separately'], correct: 1, explanation: 'An alternating (ping-pong) structure ensures sustained comparison throughout your answer, which is essential for the top mark bands.' },
        { id: 'ocr-lp-m3-q4', question: 'How many times should you read the unseen poem before writing?', options: ['Once quickly', 'Twice', 'Three times — for gist, techniques, and quotation selection', 'You don\'t need to read it'], correct: 2, explanation: 'Three readings give you a solid understanding: first for overall meaning, second for techniques and effects, third for selecting the best quotations to use.' },
      ],
    },
    {
      id: 'ocr-lp-m4',
      title: 'Part (b): Writing About Your Chosen Poem',
      duration: '35 mins',
      content: `<h2>Your Choice, Your Poem (20 marks)</h2>
<p>Part (b) is where your preparation pays off. The question gives you a theme and asks you to write about <strong>a poem of your choice</strong> from the same cluster. You select which poem to discuss — and this means you can play to your strengths.</p>

<div class="key-term"><strong>Key Term: Part (b) — Single poem response</strong> — You choose one poem from your studied cluster and write about how the poet presents the theme specified in the question. This is worth 20 marks. The poem you choose MUST be different from the one named in Part (a).</div>

<h3>What the Question Looks Like</h3>
<div class="text-extract">"Explore how one other poem from your anthology cluster presents ideas about conflict. Write about the poem and its context."<div class="source">Example Part (b) question — OCR J352</div></div>

<h3>Choosing Your Poem</h3>
<p>Your choice of poem is a tactical decision. Consider:</p>
<ul>
<li><strong>Relevance:</strong> Which poem connects most clearly to the theme in the question?</li>
<li><strong>Confidence:</strong> Which poem do you know best — quotations, techniques, context?</li>
<li><strong>Range:</strong> Which poem gives you enough material for a full, detailed response?</li>
<li><strong>Avoid repetition:</strong> You CANNOT write about the poem named in Part (a)</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Before the exam, prepare 3-4 "go-to" poems that you can write about for almost any theme. Poems with rich thematic scope — like "The Perseverance" (love, identity, communication, grief) or "Anthem for Doomed Youth" (conflict, loss, religion, youth) — are versatile choices.</div>

<h3>Structuring Your Part (b) Response</h3>
<ul>
<li><strong>Opening:</strong> Name your chosen poem and poet; make a clear statement about how it presents the theme</li>
<li><strong>Paragraph 1:</strong> First analytical point — WHAT-HOW-WHY with embedded quotation</li>
<li><strong>Paragraph 2:</strong> Second analytical point — focus on a different technique or aspect</li>
<li><strong>Paragraph 3:</strong> Structural analysis — how does the poem's form contribute to meaning?</li>
<li><strong>Paragraph 4 (if time):</strong> Context — how does the poet's background or the poem's historical moment enrich the theme?</li>
<li><strong>Conclusion:</strong> Brief summary of the poet's overall message or effect</li>
</ul>

<div class="model-answer"><strong>Model Opening:</strong> In "Vergissmeinnicht," Keith Douglas presents conflict not as heroic triumph but as a deeply human tragedy that connects soldiers on both sides of the battlefield. The German title — meaning "Forget me not" — immediately introduces the theme of memory and love surviving beyond death, framing the poem as an elegy rather than a war narrative.</div>

<h3>Using Context Effectively</h3>
<p>OCR values context, but only when it <strong>enhances analysis</strong>:</p>
<ul>
<li><strong>Good:</strong> "Douglas, who was killed in action at 24, writes with the authority of firsthand experience — the clinical precision of 'the dust upon the paper eye' reflects a soldier's desensitised gaze."</li>
<li><strong>Bad:</strong> "Keith Douglas was born in 1920 and died in 1944. He was a soldier in WW2."</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Choosing a poem you barely know because it seems to fit the theme. It is always better to choose a poem you know well and connect it to the theme, than to choose a thematically perfect poem you cannot analyse in depth.</div>`,
      quiz: [
        { id: 'ocr-lp-m4-q1', question: 'How many marks is Part (b) worth?', options: ['10 marks', '15 marks', '20 marks', '30 marks'], correct: 2, explanation: 'Part (b) is worth 20 marks — the same as Part (a). Together they make up 40 marks for the poetry section.' },
        { id: 'ocr-lp-m4-q2', question: 'Can you write about the same poem in Part (a) and Part (b)?', options: ['Yes, if you analyse it differently', 'No — you must choose a different poem for Part (b)', 'Yes, the examiner encourages it', 'Only if it is the best poem in the cluster'], correct: 1, explanation: 'Part (b) explicitly asks for "one other poem" — you must choose a different poem from the one named in Part (a).' },
        { id: 'ocr-lp-m4-q3', question: 'What makes a good "go-to" poem for Part (b)?', options: ['The shortest poem in the cluster', 'A poem with rich thematic scope that suits many possible themes', 'The first poem listed in the anthology', 'A poem with no context'], correct: 1, explanation: 'Poems with multiple themes and rich analytical material can be adapted to suit various Part (b) questions, making them reliable choices.' },
        { id: 'ocr-lp-m4-q4', question: 'How should context be used in Part (b)?', options: ['As a standalone paragraph of biography', 'Only when it directly enhances analysis of the poem', 'It should be avoided entirely', 'As the main focus of every paragraph'], correct: 1, explanation: 'Context should be integrated into your analysis to deepen your reading of the poem — not presented as a separate biographical summary.' },
      ],
    },
    {
      id: 'ocr-lp-m5',
      title: 'Building Quick Unseen Analysis Skills',
      duration: '30 mins',
      content: `<h2>Tackling the Unseen Poem with Confidence</h2>
<p>The unseen poem in Part (a) is what students fear most — but with a systematic approach, it becomes manageable. You already know how to analyse poetry from your cluster work; the unseen just requires you to apply those skills under pressure to a poem you have not seen before.</p>

<div class="key-term"><strong>Key Term: Unseen poem</strong> — A poem you have never studied that appears in the exam. In OCR, it is always paired with a named anthology poem in Part (a) for comparison. The question tells you the theme to focus on.</div>

<h3>The 5-Minute Reading Strategy</h3>
<p>Before you write a single word of your answer, spend 5 minutes reading and annotating:</p>
<ul>
<li><strong>Read 1 — Gist (1 minute):</strong> What is the poem about? What is the overall mood or tone? Who is speaking and to whom?</li>
<li><strong>Read 2 — Techniques (2 minutes):</strong> Circle or underline striking images, sound devices, structural choices. Note the form — is it a sonnet, free verse, ballad? Look for a volta or tonal shift.</li>
<li><strong>Read 3 — Quotations (2 minutes):</strong> Select 3-4 quotations you can analyse in detail. Choose ones with clear techniques and effects you can explain.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The question itself is your biggest clue. If it says "Compare how the poets present ideas about loss," every technique you identify in the unseen should be connected back to the theme of loss. Don't waste time analysing features that have nothing to do with the question.</div>

<h3>What to Look For in an Unseen Poem</h3>
<p>Use a mental checklist:</p>
<ul>
<li><strong>Title:</strong> Does it set up a theme, create expectation, or work ironically?</li>
<li><strong>Opening:</strong> How does the poem begin — with an image, a statement, a question?</li>
<li><strong>Imagery:</strong> What pictures are created? Are there extended metaphors or symbols?</li>
<li><strong>Tone:</strong> Is it angry, tender, nostalgic, bitter, celebratory, resigned?</li>
<li><strong>Sound:</strong> Alliteration, assonance, rhyme (or lack of it), rhythm</li>
<li><strong>Structure:</strong> Stanza lengths, line lengths, enjambment, caesura, a shift or volta</li>
<li><strong>Ending:</strong> Does it resolve, leave things open, twist, or circle back?</li>
</ul>

<div class="model-answer"><strong>Model Unseen Analysis:</strong> The unseen poet opens with the stark declaration "I have forgotten nothing," using the double negative to emphasise the inescapability of memory. The monosyllabic simplicity of "nothing" contrasts with the emotional weight it carries, suggesting that the speaker's memories are both ordinary and overwhelming. This directness of tone immediately engages the reader with the theme of loss as something permanent and unshakeable.</div>

<h3>Common Unseen Poem Types</h3>
<p>OCR tends to choose unseen poems that are:</p>
<ul>
<li>Accessible in subject matter but rich in technique</li>
<li>Thematically connected to the named anthology poem</li>
<li>Between 15-30 lines long</li>
<li>From a range of time periods and traditions</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Panicking and writing about the unseen poem superficially while over-writing about the anthology poem. Both poems should receive roughly equal treatment in Part (a). If anything, the examiner is more impressed by strong unseen analysis because it proves genuine skill, not just memorisation.</div>`,
      quiz: [
        { id: 'ocr-lp-m5-q1', question: 'How long should you spend reading the unseen poem before writing?', options: ['No time — start writing immediately', '2 minutes', '5 minutes', '15 minutes'], correct: 2, explanation: 'Spending about 5 minutes reading and annotating the unseen poem gives you a solid foundation — rushing into writing leads to confused analysis.' },
        { id: 'ocr-lp-m5-q2', question: 'What is the most important clue for analysing the unseen poem?', options: ['The poet\'s name', 'The number of stanzas', 'The question itself — it tells you the theme to focus on', 'The length of the poem'], correct: 2, explanation: 'The question specifies the theme you should compare, so everything you identify in the unseen should connect back to that theme.' },
        { id: 'ocr-lp-m5-q3', question: 'Should you give equal attention to both poems in Part (a)?', options: ['No — focus mainly on the anthology poem', 'No — focus mainly on the unseen poem', 'Yes — both poems should receive roughly equal treatment', 'Only discuss the unseen poem'], correct: 2, explanation: 'Both poems should receive roughly equal depth of analysis. Neglecting either one will limit your marks significantly.' },
        { id: 'ocr-lp-m5-q4', question: 'What should you look at first when encountering an unseen poem?', options: ['Count the words', 'Read for overall gist and tone', 'Look up the poet\'s biography', 'Count the stanzas'], correct: 1, explanation: 'Your first reading should establish the gist — what the poem is about, the overall mood, and who is speaking. Detail comes on the second and third readings.' },
      ],
    },
    {
      id: 'ocr-lp-m6',
      title: 'The Perfect OCR Poetry Essay',
      duration: '30 mins',
      content: `<h2>Pulling It All Together</h2>
<p>You now have all the skills — SMILE analysis, WHAT-HOW-WHY paragraphs, comparison technique, unseen strategy, and Part (b) poem selection. This module shows you how to manage the full poetry section under timed exam conditions.</p>

<h3>Timing the Poetry Section</h3>
<p>The poetry section gives you roughly <strong>1 hour</strong>. Split it wisely:</p>
<ul>
<li><strong>Part (a) — 35 minutes:</strong> 5 minutes reading/annotating + 30 minutes writing</li>
<li><strong>Part (b) — 25 minutes:</strong> 2 minutes planning + 20 minutes writing + 3 minutes checking</li>
</ul>

<div class="key-term"><strong>Key Term: Assessment Objectives for Poetry</strong> — AO1: Response to text with supporting quotations. AO2: Analysis of language, form, and structure. AO3: Comparison of texts (Part (a) only). AO4: Relationship between texts and contexts.</div>

<h3>Hitting All the AOs</h3>
<p>The examiner marks against specific assessment objectives. Make sure every essay includes:</p>
<ul>
<li><strong>AO1:</strong> Clear understanding of the poem(s) supported by well-chosen, embedded quotations</li>
<li><strong>AO2:</strong> Analysis of HOW the poet uses language, form, and structure to create effects</li>
<li><strong>AO3 (Part (a) only):</strong> Sustained comparison — both poems discussed in every paragraph</li>
<li><strong>AO4:</strong> Contextual understanding woven into analysis where it adds value</li>
</ul>

<div class="model-answer"><strong>Model Part (a) Paragraph Hitting All AOs:</strong> Both poets use sound to convey the horror of conflict, but to strikingly different ends. Owen's "stuttering rifles' rapid rattle" employs plosive alliteration to mimic gunfire, transforming the sonnet's musical form into something violent and discordant — the beauty of poetry corrupted by war [AO2]. The unseen poet, by contrast, uses silence: "the town held its breath," personifying the community's terror through the absence of sound. Where Owen fills his poem with noise to overwhelm the reader, the unseen poet uses quiet to create an eerie tension [AO3]. Owen, writing from the Western Front in 1917, channels his firsthand horror into a protest against the sanitised narratives of war; the unseen poet's modern perspective suggests that the psychological impact of conflict persists long after the noise has stopped [AO4].</div>

<h3>The Top-Band Checklist</h3>
<p>Before you finish each response, mentally check:</p>
<ul>
<li>Have I embedded quotations, not just dropped them in?</li>
<li>Have I analysed effects on the reader, not just identified techniques?</li>
<li>Have I discussed structure and form, not just language?</li>
<li>In Part (a): Have I compared in every paragraph?</li>
<li>Have I used context to deepen analysis, not as filler?</li>
<li>Is my argument clear and sustained from start to finish?</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The difference between a Grade 7 and a Grade 9 is not more content — it is more sophisticated analysis. Explore <strong>alternative interpretations</strong> ("This could suggest... but it might also imply..."), consider <strong>ambiguity</strong>, and make <strong>perceptive connections</strong> between form and meaning.</div>

<h3>Final Exam Day Reminders</h3>
<ul>
<li>Read the question twice — underline the key theme</li>
<li>Annotate both poems before writing Part (a)</li>
<li>Choose your Part (b) poem before you start Part (a) — it saves time and avoids repetition</li>
<li>Leave 3 minutes at the end to proofread for SPaG errors</li>
<li>If you run out of time, bullet-point your remaining ideas — partial marks are better than no marks</li>
</ul>

<div class="text-extract">"What were they like?<br>Did they use bone and ivory,<br>jade and silver, for ornament?"<div class="source">Denise Levertov, "What Were They Like?" — Conflict cluster</div></div>

<div class="common-mistake"><strong>Common Mistake:</strong> Running out of time on Part (b) because you spent too long on Part (a). Both parts are worth 20 marks each — giving Part (a) 50 minutes and Part (b) 10 minutes is a terrible trade-off. Stick to your timing plan.</div>`,
      quiz: [
        { id: 'ocr-lp-m6-q1', question: 'How should you split your time across Part (a) and Part (b)?', options: ['50 minutes on Part (a), 10 on Part (b)', '35 minutes on Part (a), 25 on Part (b)', '20 minutes each with 20 minutes spare', 'All the time on Part (a)'], correct: 1, explanation: 'Roughly 35 minutes for Part (a) and 25 for Part (b) ensures both 20-mark questions get adequate time.' },
        { id: 'ocr-lp-m6-q2', question: 'What distinguishes a Grade 9 response from a Grade 7?', options: ['Writing more pages', 'Using longer quotations', 'Exploring alternative interpretations and ambiguity with perceptive connections', 'Listing more techniques'], correct: 2, explanation: 'Top-band responses show sophistication through exploring ambiguity, alternative readings, and perceptive connections between form and meaning — not through sheer volume.' },
        { id: 'ocr-lp-m6-q3', question: 'When should you choose your Part (b) poem?', options: ['After finishing Part (a)', 'Before you start writing Part (a)', 'During Part (a)', 'It doesn\'t matter when'], correct: 1, explanation: 'Choosing your Part (b) poem before writing Part (a) saves time and ensures you do not accidentally duplicate material across both answers.' },
        { id: 'ocr-lp-m6-q4', question: 'If you run out of time, what should you do?', options: ['Leave it blank', 'Bullet-point your remaining ideas for partial marks', 'Copy out quotations without analysis', 'Write "I ran out of time"'], correct: 1, explanation: 'Bullet-pointed ideas with brief quotations can still earn marks for AO1 and AO2. A blank page earns nothing.' },
      ],
    },
  ],
  assessmentQuestions: [
    { id: 'ocr-lp-a1', question: 'What is the OCR GCSE English Literature specification code?', options: ['8702', '1EN2', 'J352', '4EA1'], correct: 2, explanation: 'The OCR GCSE English Literature specification code is J352.' },
    { id: 'ocr-lp-a2', question: 'What is the name of the OCR poetry anthology?', options: ['Moon on the Tides', 'Towards a World Unknown', 'Poems of the Decade', 'The Forward Book of Poetry'], correct: 1, explanation: 'The OCR anthology is called "Towards a World Unknown" (Version 2), containing poems across three thematic clusters.' },
    { id: 'ocr-lp-a3', question: 'How many poems are in each cluster?', options: ['10', '12', '15', '20'], correct: 2, explanation: 'Each of the three clusters — Love & Relationships, Conflict, and Youth & Age — contains 15 poems.' },
    { id: 'ocr-lp-a4', question: 'What is unique about OCR\'s Part (a) poetry question?', options: ['It compares two anthology poems', 'It compares a named anthology poem with an unseen poem', 'It is an unseen-only question', 'It asks you to write a poem'], correct: 1, explanation: 'OCR uniquely pairs a named anthology poem with an unseen poem for comparison — this is not done by AQA or Edexcel.' },
    { id: 'ocr-lp-a5', question: 'How many marks is the poetry section worth in total?', options: ['20 marks', '30 marks', '40 marks', '50 marks'], correct: 2, explanation: 'The poetry section is worth 40 marks total: 20 for Part (a) comparison and 20 for Part (b) chosen poem.' },
    { id: 'ocr-lp-a6', question: 'In Part (b), can you write about the poem named in Part (a)?', options: ['Yes', 'No — you must choose a different poem', 'Only if you analyse it differently', 'Only if it is the best fit'], correct: 1, explanation: 'Part (b) asks for "one other poem" — you must choose a different poem from the one specified in Part (a).' },
    { id: 'ocr-lp-a7', question: 'Which cluster contains "Anthem for Doomed Youth" by Wilfred Owen?', options: ['Love & Relationships', 'Conflict', 'Youth & Age', 'It is not in the anthology'], correct: 1, explanation: '"Anthem for Doomed Youth" is in the Conflict cluster.' },
    { id: 'ocr-lp-a8', question: 'What does SMILE stand for?', options: ['Sound, Mood, Irony, Lines, Ending', 'Structure, Meanings, Imagery, Language, Effect', 'Story, Method, Ideas, Layout, Evidence', 'Setting, Metaphor, Intent, Language, Emotion'], correct: 1, explanation: 'SMILE stands for Structure, Meanings/Messages, Imagery, Language, and Effect on the reader.' },
    { id: 'ocr-lp-a9', question: 'Which poet wrote "In Paris with You"?', options: ['Billy Collins', 'Jackie Kay', 'James Fenton', 'Emily Bronte'], correct: 2, explanation: '"In Paris with You" is by James Fenton, from the Love & Relationships cluster.' },
    { id: 'ocr-lp-a10', question: 'What does "Vergissmeinnicht" mean?', options: ['Goodbye', 'Forget me not', 'I love you', 'Never again'], correct: 1, explanation: '"Vergissmeinnicht" is German for "Forget me not" — the inscription found on a photograph beside a dead enemy soldier in Keith Douglas\'s poem.' },
    { id: 'ocr-lp-a11', question: 'How should you structure a Part (a) comparison?', options: ['Write about each poem separately', 'Alternate between both poems in every paragraph', 'Only analyse the unseen poem', 'Write a list of similarities'], correct: 1, explanation: 'An alternating (ping-pong) structure ensures sustained comparison throughout, which is essential for the top mark bands.' },
    { id: 'ocr-lp-a12', question: 'Which assessment objective tests comparison skills?', options: ['AO1', 'AO2', 'AO3', 'AO4'], correct: 2, explanation: 'AO3 assesses your ability to compare texts — exploring links and connections between poets\' ideas and methods.' },
    { id: 'ocr-lp-a13', question: 'Which poem in the Youth & Age cluster is by Sylvia Plath?', options: ['Baby Song', 'My First Week', 'You\'re', 'Happy Birthday Moon'], correct: 2, explanation: '"You\'re" by Sylvia Plath is an exuberant riddle-poem addressed to an unborn baby, from the Youth & Age cluster.' },
    { id: 'ocr-lp-a14', question: 'How long should you spend reading the unseen poem before writing?', options: ['No time', '2 minutes', '5 minutes', '10 minutes'], correct: 2, explanation: 'About 5 minutes of reading and annotating gives you a solid understanding of the unseen poem before you begin writing your comparison.' },
    { id: 'ocr-lp-a15', question: 'What is the WHAT-HOW-WHY method?', options: ['A planning technique', 'A way to structure analytical paragraphs: identify technique, embed quotation, analyse effect', 'A revision timetable method', 'A way to memorise poems'], correct: 1, explanation: 'WHAT = identify the technique, HOW = embed a quotation and explain how it works, WHY = analyse the effect on the reader.' },
    { id: 'ocr-lp-a16', question: 'Which poem uses "For" at the start of each stanza as a litany of destruction?', options: ['Lament', 'Anthem for Doomed Youth', 'We Lived Happily during the War', 'What Were They Like?'], correct: 0, explanation: '"Lament" by Gillian Clarke begins each stanza with "For," creating a litany of environmental and human destruction caused by the Gulf War.' },
    { id: 'ocr-lp-a17', question: 'What distinguishes a Grade 9 poetry response?', options: ['It is longer than other responses', 'It explores alternative interpretations and ambiguity', 'It includes more quotations', 'It discusses every poem in the cluster'], correct: 1, explanation: 'Grade 9 responses show sophistication by exploring ambiguity, alternative readings, and perceptive connections between form and meaning.' },
    { id: 'ocr-lp-a18', question: 'In "Farther" by Owen Sheers, what does the title pun on?', options: ['Further and farther', 'Farther and father', 'Farmer and farther', 'Far and near'], correct: 1, explanation: 'The title puns on "farther" (greater distance) and "father," suggesting the growing emotional and physical distance between parent and child.' },
    { id: 'ocr-lp-a19', question: 'How should context be used in a poetry essay?', options: ['As a separate introductory paragraph', 'Woven into analysis to deepen your reading', 'Avoided entirely', 'Only in Part (b)'], correct: 1, explanation: 'Context should be integrated into your analytical points where it enhances your reading of the poem — not bolted on as a biographical paragraph.' },
    { id: 'ocr-lp-a20', question: 'What is the recommended timing split for the poetry section?', options: ['50 minutes Part (a), 10 minutes Part (b)', '35 minutes Part (a), 25 minutes Part (b)', '30 minutes each', 'All time on Part (a)'], correct: 1, explanation: 'Roughly 35 minutes for Part (a) and 25 for Part (b) ensures both 20-mark questions receive adequate attention.' },
  ],
};

export default ocrGcseLitPoetry;
