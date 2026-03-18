const gcseLitPoetry = {
  id: 'gcse-lit-poetry',
  title: 'GCSE Literature: Poetry (AQA)',
  subtitle: 'Analyse unseen poetry and AQA anthology poems with precision.',
  tier: 'GCSE',
  board: 'AQA',
  specId: 'gcse-lit',
  specCode: '8702',
  price: 39,
  duration: '5-7 hours',
  level: 'GCSE (Years 10-11)',
  description:
    'Build your confidence with unseen poetry analysis. Learn to identify techniques, explore meanings, compare poems, and write essays that examiners love. Covers both unseen poetry questions on AQA Paper 2.',
  color: '#10b981',

  moduleList: [
    // ──────────────────────────────────────────────
    // MODULE 1
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lp-m1',
      title: 'Reading a Poem: First Steps',
      duration: '30 mins',
      content: `
<p>When you first encounter an unseen poem, it is tempting to panic. The key is to have a <span class="key-term">repeatable strategy</span> that you can rely on every time. In this module you will learn how to read, annotate, and begin analysing any poem you are given.</p>

<h3>Step 1 — Read the Poem Three Times</h3>
<p>Your first read-through should be relaxed: simply absorb the poem without writing anything. On the second reading, underline any striking words or images. On the third reading, start making marginal notes about what you think the poem is about and how the poet achieves their effects.</p>

<div class="examiner-tip">Examiners can tell when students have only read a poem once. Multiple readings show in the depth of analysis you produce.</div>

<h3>Step 2 — Annotate with SMILE</h3>
<p>Use the <span class="key-term">SMILE</span> framework to organise your annotations:</p>
<ul>
  <li><strong>S</strong> — <span class="key-term">Structure</span>: How is the poem arranged? Note stanza lengths, line lengths, and any shifts in tone or focus.</li>
  <li><strong>M</strong> — <span class="key-term">Meaning</span>: What is the poem about on the surface, and what deeper meanings can you find?</li>
  <li><strong>I</strong> — <span class="key-term">Imagery</span>: What pictures does the poet create in your mind? Look for metaphors, similes, and sensory language.</li>
  <li><strong>L</strong> — <span class="key-term">Language</span>: What specific word choices stand out? Consider connotations and tone.</li>
  <li><strong>E</strong> — <span class="key-term">Effect</span>: How does the poem make you feel? What impact do the poet's choices have on the reader?</li>
</ul>

<h3>Seeing SMILE in Action</h3>
<p>Consider the following short extract:</p>

<div class="text-extract">
  The river does not hurry, yet it arrives.<br>
  Each stone it passes learns a softer shape,<br>
  worn down by nothing more than patience.
  <div class="source">— Original example for annotation practice</div>
</div>

<p>Using SMILE: the <strong>structure</strong> is three unrhymed lines of similar length, giving a calm, unhurried feel that mirrors the subject. The <strong>meaning</strong> on the surface is about a river, but on a deeper level it suggests that persistence achieves more than force. The <strong>imagery</strong> of stones learning "a softer shape" personifies nature. The <strong>language</strong> choice of "patience" turns an abstract quality into something almost physical. The <strong>effect</strong> is contemplative — the reader is invited to slow down, just as the river does.</p>

<div class="common-mistake">Don't just list techniques — always explain <em>why</em> the poet has used them and <em>what effect</em> they create. Technique-spotting without analysis will not earn high marks.</div>

<p>By the end of this module you should feel confident picking up any poem and knowing exactly where to begin. In the next module, we will expand your toolkit of poetic techniques so that your annotations become richer and more precise.</p>
`,
      quiz: [
        {
          id: 'gcse-lp-m1-q1',
          question: 'What does the "E" in SMILE stand for?',
          options: ['Evidence', 'Effect', 'Emotion', 'Enjambment'],
          correct: 1,
          explanation:
            'In the SMILE framework, E stands for Effect — the impact the poet\'s choices have on the reader.',
        },
        {
          id: 'gcse-lp-m1-q2',
          question:
            'How many times should you ideally read an unseen poem before you begin writing your response?',
          options: ['Once', 'Twice', 'Three times', 'Four times'],
          correct: 2,
          explanation:
            'You should read the poem at least three times: once for overall impression, once to underline key words, and once to begin annotating.',
        },
        {
          id: 'gcse-lp-m1-q3',
          question:
            'What is the main danger of "technique-spotting" without further comment?',
          options: [
            'It takes too long',
            'It shows you have not read the poem',
            'It identifies techniques but fails to analyse their effect',
            'It only works with rhyming poems',
          ],
          correct: 2,
          explanation:
            'Simply naming techniques without explaining their effect on the reader will not earn high marks. Analysis means exploring why the poet made that choice.',
        },
        {
          id: 'gcse-lp-m1-q4',
          question:
            'In the river extract, what does the personification of the stones "learning" a softer shape suggest?',
          options: [
            'The stones are alive',
            'Nature is violent and destructive',
            'Change happens gradually through persistent gentle force',
            'Rivers are more powerful than oceans',
          ],
          correct: 2,
          explanation:
            'The personification suggests that gentle, patient persistence — rather than force — shapes and changes things over time.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 2
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lp-m2',
      title: 'Poetic Techniques Toolkit',
      duration: '40 mins',
      content: `
<p>A strong poetry response depends on your ability to identify and discuss <span class="key-term">poetic techniques</span>. This module introduces the techniques you are most likely to encounter at GCSE and shows you how to write about each one with precision.</p>

<h3>Imagery Techniques</h3>
<p>A <span class="key-term">metaphor</span> states that something <em>is</em> something else: "The classroom was a furnace." A <span class="key-term">simile</span> compares using "like" or "as": "Her voice landed like a coin in an empty jar." <span class="key-term">Personification</span> gives human qualities to non-human things: "The wind muttered between the houses."</p>

<div class="text-extract">
  She wore the morning like a coat of light,<br>
  buttoned with birdsong at the throat.
  <div class="source">— Original example for technique analysis</div>
</div>

<p>Here the simile "like a coat of light" creates a vivid visual image of brightness surrounding the subject, while the metaphor of birdsong "buttoned at the throat" merges the natural world with clothing, suggesting harmony between the person and the dawn.</p>

<h3>Sound Techniques</h3>
<p><span class="key-term">Alliteration</span> is the repetition of initial consonant sounds ("crisp, cold currents"). <span class="key-term">Sibilance</span> is a specific form using 's' and 'sh' sounds ("she whispered softly through the silver mist"), often creating a sense of secrecy or calm. <span class="key-term">Assonance</span> repeats vowel sounds within words ("the low moan of the old road").</p>

<div class="examiner-tip">When discussing sound techniques, always read the line aloud in your head. Explain what the sound <em>feels</em> like — harsh, soft, rhythmic — and connect that feeling to the poem's meaning.</div>

<h3>Structural Techniques</h3>
<p><span class="key-term">Enjambment</span> occurs when a sentence runs on past the end of a line without punctuation, pulling the reader forward and creating momentum. <span class="key-term">Caesura</span> is a pause in the middle of a line, often created by punctuation — it can slow the pace or create a dramatic break.</p>

<div class="text-extract">
  I kept on walking. Nothing changed.<br>
  The road stretched on and I could not<br>
  remember why I started out at all.
  <div class="source">— Original example for structural analysis</div>
</div>

<p>The <span class="key-term">caesura</span> after "walking" forces the reader to pause, mirroring the speaker's exhaustion. The <span class="key-term">enjambment</span> between lines two and three ("could not / remember") physically splits the thought across lines, reflecting the speaker's fragmented memory.</p>

<h3>Other Key Terms</h3>
<p>A <span class="key-term">volta</span> is a turning point or shift in a poem — a change in tone, argument, or perspective. The <span class="key-term">rhyme scheme</span> is the pattern of end-rhymes (labelled ABAB, ABBA, etc.). Recognising these patterns helps you discuss how the poet controls the reader's experience.</p>

<div class="common-mistake">Avoid calling every repeated sound "alliteration." If the repeated sounds are vowels, that is assonance. If they are 's' sounds, be specific and call it sibilance. Precision earns marks.</div>
`,
      quiz: [
        {
          id: 'gcse-lp-m2-q1',
          question: 'What is the difference between a metaphor and a simile?',
          options: [
            'A metaphor uses "like" or "as"; a simile does not',
            'A simile uses "like" or "as"; a metaphor states something is something else',
            'They are exactly the same technique',
            'A metaphor only applies to people; a simile applies to objects',
          ],
          correct: 1,
          explanation:
            'A simile compares using "like" or "as," while a metaphor directly states that one thing is another.',
        },
        {
          id: 'gcse-lp-m2-q2',
          question: 'Which technique involves a pause in the middle of a line?',
          options: ['Enjambment', 'Volta', 'Caesura', 'Sibilance'],
          correct: 2,
          explanation:
            'Caesura is a pause within a line of poetry, usually created by punctuation such as a full stop, comma, or dash.',
        },
        {
          id: 'gcse-lp-m2-q3',
          question:
            'In the extract "she whispered softly through the silver mist," the repeated "s" sounds are an example of which technique?',
          options: [
            'Alliteration',
            'Assonance',
            'Sibilance',
            'Onomatopoeia',
          ],
          correct: 2,
          explanation:
            'Sibilance is the specific repetition of "s" and "sh" sounds. While it is a type of alliteration, using the precise term shows stronger knowledge.',
        },
        {
          id: 'gcse-lp-m2-q4',
          question: 'What is a volta in poetry?',
          options: [
            'A repeated refrain at the end of each stanza',
            'A turning point or shift in the poem',
            'A type of rhyme scheme',
            'A form of visual imagery',
          ],
          correct: 1,
          explanation:
            'A volta is a turning point — a shift in tone, argument, mood, or perspective. It is especially associated with sonnets but can appear in any poem.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 3
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lp-m3',
      title: 'Analysing Meaning & Themes',
      duration: '35 mins',
      content: `
<p>Identifying techniques is only half the task. Examiners want to see that you can move beyond the surface to explore <span class="key-term">deeper meanings</span> and connect the poem to broader themes. This module will show you how to think like a literary analyst.</p>

<h3>Surface vs. Deeper Meaning</h3>
<p>The <span class="key-term">surface meaning</span> (or literal meaning) is what the poem describes on a basic level: a storm, a walk through a city, a memory of childhood. The <span class="key-term">deeper meaning</span> is what the poem is really about — its ideas, emotions, and arguments. A poem describing a storm might really be exploring anger; a poem about a locked door might address emotional isolation.</p>

<div class="text-extract">
  The garden had not changed, and yet<br>
  my hands no longer knew the gate,<br>
  its latch a language I had lost.
  <div class="source">— Original example for meaning analysis</div>
</div>

<p>On the surface, the speaker is returning to a familiar garden. The deeper meaning explores how we become estranged from places — and perhaps people — we once knew intimately. The metaphor of the latch as "a language I had lost" suggests that belonging somewhere is a skill that fades without practice.</p>

<h3>Interpreting Symbolism</h3>
<p>A <span class="key-term">symbol</span> is an object, image, or action that represents something beyond itself. Poets rarely state their meaning outright; instead they use symbols to communicate complex ideas economically. When you spot a recurring image or an object given unusual emphasis, ask yourself: <em>What could this represent?</em></p>

<div class="examiner-tip">Use tentative language when exploring meaning: "This could suggest…", "Perhaps the poet implies…", "One interpretation is…". This shows you understand that poems can have multiple valid readings.</div>

<h3>Contextual Understanding</h3>
<p>While the unseen poetry section of the exam does not require you to know the poet's background, you can still make <span class="key-term">contextual inferences</span>. If a poem mentions trenches, you can connect it to war. If it uses archaic language, you might note how the old-fashioned diction creates a sense of formality or distance. The key is to let the poem itself guide your contextual comments rather than bolting on unrelated historical facts.</p>

<h3>Thematic Connections</h3>
<p>Common themes in GCSE poetry include: <strong>power and conflict</strong>, <strong>love and relationships</strong>, <strong>nature</strong>, <strong>identity</strong>, <strong>memory and time</strong>, and <strong>loss</strong>. When you identify a theme, explain <em>what the poem says about it</em>. Saying "the theme is loss" is not analysis. Saying "the poet presents loss as something gradual and almost invisible, noticed only in small domestic details" <em>is</em> analysis.</p>

<div class="common-mistake">Avoid making sweeping claims like "The poet is angry about society." Be specific: which words reveal that anger? What aspect of society? Ground every interpretive claim in the text.</div>

<p>A useful habit is to write a single sentence summarising the poem's message before you begin your essay. This keeps your response focused and prevents you from drifting into a line-by-line paraphrase.</p>
`,
      quiz: [
        {
          id: 'gcse-lp-m3-q1',
          question:
            'In the garden extract, what does the latch described as "a language I had lost" most likely symbolise?',
          options: [
            'The speaker has forgotten how to open gates',
            'The speaker\'s loss of connection to a once-familiar place or past',
            'The garden has been locked by someone else',
            'The speaker does not speak the local language',
          ],
          correct: 1,
          explanation:
            'The metaphor of the latch as a lost language suggests that the speaker has become disconnected from a place — and by extension a past life — that was once intimately known.',
        },
        {
          id: 'gcse-lp-m3-q2',
          question:
            'Why should you use tentative language such as "perhaps" or "could suggest" when analysing poetry?',
          options: [
            'Because your answer is probably wrong',
            'Because poems can have multiple valid interpretations',
            'Because examiners prefer uncertain students',
            'Because you are not allowed to give a definite opinion',
          ],
          correct: 1,
          explanation:
            'Tentative language shows the examiner that you understand poetry is open to interpretation and that you are exploring possibilities rather than making unsupported assertions.',
        },
        {
          id: 'gcse-lp-m3-q3',
          question:
            'What is the difference between identifying a theme and analysing a theme?',
          options: [
            'There is no difference',
            'Identifying means naming the theme; analysing means explaining what the poem says about it',
            'Identifying is harder than analysing',
            'Analysing means listing every technique in the poem',
          ],
          correct: 1,
          explanation:
            'Simply naming a theme (e.g., "loss") is identification. Analysis requires you to explain the poet\'s perspective on that theme and how it is communicated through language and structure.',
        },
        {
          id: 'gcse-lp-m3-q4',
          question:
            'When can you make contextual comments in an unseen poetry response?',
          options: [
            'Never — context is irrelevant to unseen poetry',
            'Only if you recognise the poet',
            'When the poem itself provides clues that allow reasonable inferences',
            'Only if the question specifically asks for context',
          ],
          correct: 2,
          explanation:
            'You can make contextual inferences when the poem provides evidence — such as references to war, historical language, or social settings — but these must be grounded in the text, not bolted on.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 4
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lp-m4',
      title: 'Structure & Form',
      duration: '35 mins',
      content: `
<p>Many students focus heavily on language but neglect <span class="key-term">structure and form</span>. Yet the way a poem is built — its shape on the page, its rhythm, its chosen form — is as meaningful as the words themselves. This module will teach you to read structure with confidence.</p>

<h3>Common Poetic Forms</h3>
<p>A <span class="key-term">sonnet</span> is a 14-line poem, traditionally in iambic pentameter, often exploring love or a single argument. The Shakespearean sonnet has three quatrains and a closing couplet (ABAB CDCD EFEF GG), while the Petrarchan sonnet divides into an octave (8 lines) and a sestet (6 lines). A <span class="key-term">dramatic monologue</span> is a poem written as if a single character is speaking to a silent listener — the reader discovers the speaker's personality through their own words. <span class="key-term">Free verse</span> has no regular metre or rhyme scheme, giving the poet freedom to shape the poem in ways that mirror its content.</p>

<div class="examiner-tip">If a poem uses a recognisable form, ask yourself <em>why</em>. A sonnet about war subverts the form's association with love. Free verse about grief might reflect the unpredictable nature of sorrow. Always connect form to meaning.</div>

<h3>Stanza Structure</h3>
<p>Look at how the poem is divided. Regular stanzas of equal length can suggest order, control, or ritual. A single long stanza (a <span class="key-term">block form</span>) can feel relentless or claustrophobic. A poem that begins with long stanzas and ends with a single isolated line might be dramatising loss or finality.</p>

<div class="text-extract">
  They built the wall in summer,<br>
  stone by stone by stone.<br>
  By autumn it was finished.<br>
  <br>
  Now I walk beside it, alone.
  <div class="source">— Original example for structural analysis</div>
</div>

<p>The first stanza's three lines mirror the steady, repetitive labour of building ("stone by stone by stone"). The second stanza is a single isolated line, physically separated on the page — reflecting the speaker's loneliness. The structural shift from a group of three lines to one line enacts the theme of separation.</p>

<h3>Rhythm and Metre</h3>
<p><span class="key-term">Metre</span> is the pattern of stressed and unstressed syllables in a line. <span class="key-term">Iambic pentameter</span> (five pairs of unstressed-stressed syllables: da-DUM da-DUM da-DUM da-DUM da-DUM) is the most common in English poetry and sounds close to natural speech. When the metre is disrupted — for instance, a sudden <span class="key-term">trochee</span> (DUM-da) at the start of a line — the reader stumbles, and that disruption often coincides with a moment of emotional intensity or surprise.</p>

<div class="common-mistake">Do not claim a poem is written "in iambic pentameter" unless you have checked. Count the stresses. Many students misidentify metre. If you are unsure, describe the rhythm in general terms ("the lines have a regular, steady beat") rather than using a technical term incorrectly.</div>

<p>Remember: structure is not separate from meaning. Every choice the poet makes about line length, stanza breaks, rhythm, and form is a <em>deliberate</em> decision that contributes to the poem's overall impact.</p>
`,
      quiz: [
        {
          id: 'gcse-lp-m4-q1',
          question:
            'How many lines does a sonnet have?',
          options: ['10', '12', '14', '16'],
          correct: 2,
          explanation:
            'A sonnet is a 14-line poem. Both the Shakespearean and Petrarchan forms have 14 lines, though they are structured differently.',
        },
        {
          id: 'gcse-lp-m4-q2',
          question:
            'In the wall extract, why is the final line placed in its own stanza?',
          options: [
            'Because the poet ran out of ideas',
            'To visually isolate the speaker, reflecting the theme of loneliness',
            'Because all poems must end with a short stanza',
            'To create a rhyming couplet',
          ],
          correct: 1,
          explanation:
            'The isolated final line mirrors the speaker\'s loneliness — the physical separation on the page enacts the emotional separation described in the words.',
        },
        {
          id: 'gcse-lp-m4-q3',
          question: 'What is a dramatic monologue?',
          options: [
            'A poem performed on stage with multiple actors',
            'A poem written as speech by a single character to a silent listener',
            'A poem that tells a dramatic story in the third person',
            'A poem that uses only dialogue between two speakers',
          ],
          correct: 1,
          explanation:
            'A dramatic monologue is a poem in which a single character speaks to an implied silent listener. The reader learns about the speaker through what they reveal — intentionally or not — in their words.',
        },
        {
          id: 'gcse-lp-m4-q4',
          question:
            'What is the rhythmic pattern of iambic pentameter?',
          options: [
            'Five pairs of stressed then unstressed syllables (DUM-da)',
            'Five pairs of unstressed then stressed syllables (da-DUM)',
            'Four pairs of unstressed then stressed syllables',
            'Six pairs of alternating stressed and unstressed syllables',
          ],
          correct: 1,
          explanation:
            'Iambic pentameter consists of five iambs — each iamb is an unstressed syllable followed by a stressed syllable (da-DUM), giving ten syllables per line.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 5
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lp-m5',
      title: 'Writing a Poetry Essay',
      duration: '40 mins',
      content: `
<p>Knowing how to analyse a poem is only useful if you can communicate that analysis in a clear, structured essay. This module introduces the <span class="key-term">PETAL</span> paragraph method and shows you how to build a convincing response under timed conditions.</p>

<h3>The PETAL Paragraph</h3>
<p>Each analytical paragraph should follow this structure:</p>
<ul>
  <li><strong>P</strong> — <span class="key-term">Point</span>: State your argument clearly in one sentence.</li>
  <li><strong>E</strong> — <span class="key-term">Evidence</span>: Quote directly from the poem. Keep quotations short — a phrase or single line is usually enough.</li>
  <li><strong>T</strong> — <span class="key-term">Technique</span>: Name the technique the poet has used in your quotation.</li>
  <li><strong>A</strong> — <span class="key-term">Analysis</span>: Explain the effect of that technique on the reader. This is the most important part — it is where you demonstrate understanding.</li>
  <li><strong>L</strong> — <span class="key-term">Link</span>: Connect back to the question or forward to your next point.</li>
</ul>

<div class="text-extract">
  The clock's hands crawled across its face,<br>
  each minute thick as setting glue.
  <div class="source">— Original example for essay-writing practice</div>
</div>

<div class="model-answer">
<strong>Example PETAL paragraph:</strong><br><br>
The poet conveys an oppressive sense of time passing slowly. <strong>[P]</strong> The simile "each minute thick as setting glue" <strong>[E]</strong> compares time to a slow, sticky substance <strong>[T — simile]</strong>. The word "thick" has connotations of heaviness and difficulty, suggesting that the speaker experiences each moment as a burden rather than something that flows naturally. The comparison to "setting glue" implies that time is not merely slow but is solidifying — trapping the speaker in the present moment. <strong>[A]</strong> This reinforces the poem's wider exploration of entrapment and the desire for escape. <strong>[L]</strong>
</div>

<h3>Essay Structure</h3>
<p>For a single-poem response, aim for:</p>
<ol>
  <li>A brief introduction (2–3 sentences) stating your overall interpretation of the poem.</li>
  <li>Three or four PETAL paragraphs, each addressing a different aspect (e.g., imagery, structure, tone).</li>
  <li>A short conclusion that draws your analysis together and offers a final insight.</li>
</ol>

<div class="examiner-tip">You do not need a long introduction. Examiners would rather see you spend time on detailed analysis. One or two sentences that show you have understood the poem's main idea are sufficient.</div>

<h3>Comparing Poems</h3>
<p>When comparing, use an <span class="key-term">integrated approach</span>: discuss both poems within each paragraph rather than writing about one poem in the first half and the other in the second. Use comparative connectives: "Similarly…", "In contrast…", "While Poem A uses… Poem B instead…". This shows the examiner you are genuinely comparing, not just writing two separate analyses.</p>

<div class="common-mistake">Avoid spending so long on your first paragraph that you run out of time. Practise writing to a timer: roughly 8–10 minutes per PETAL paragraph for a 45-minute question.</div>

<p>The best poetry essays feel like a conversation with the text. You are not just describing what you see — you are arguing for an interpretation and supporting it with evidence.</p>
`,
      quiz: [
        {
          id: 'gcse-lp-m5-q1',
          question: 'What does the "A" in PETAL stand for?',
          options: ['Alliteration', 'Argument', 'Analysis', 'Assessment'],
          correct: 2,
          explanation:
            'A stands for Analysis — the part of the paragraph where you explain the effect of the technique on the reader. It is the most important element.',
        },
        {
          id: 'gcse-lp-m5-q2',
          question:
            'What is the recommended approach when comparing two poems in an essay?',
          options: [
            'Write about Poem A in full, then Poem B in full',
            'Only write about the poem you understand better',
            'Use an integrated approach, discussing both poems within each paragraph',
            'Alternate paragraphs — one on Poem A, then one on Poem B',
          ],
          correct: 2,
          explanation:
            'An integrated approach — comparing both poems within each paragraph — demonstrates genuine comparison and is rewarded more highly than a "split" structure.',
        },
        {
          id: 'gcse-lp-m5-q3',
          question: 'How long should your introduction ideally be in a poetry essay?',
          options: [
            'At least half a page',
            'Two to three sentences',
            'One full paragraph with quotations',
            'You should not write an introduction',
          ],
          correct: 1,
          explanation:
            'A brief introduction of two to three sentences is sufficient. Examiners prefer you to spend your time on detailed analysis rather than a lengthy opening.',
        },
        {
          id: 'gcse-lp-m5-q4',
          question:
            'In the model answer, why is the analysis of "setting glue" effective?',
          options: [
            'It identifies the technique as a metaphor',
            'It only explains the surface meaning of the simile',
            'It explores connotations of individual words and links them to the poem\'s wider themes',
            'It compares the poem to another poem',
          ],
          correct: 2,
          explanation:
            'The analysis is effective because it goes beyond naming the simile — it unpacks the connotations of "thick" and "setting," then connects the image to the poem\'s broader theme of entrapment.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 6
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lp-m6',
      title: 'Unseen Poetry Comparison',
      duration: '35 mins',
      content: `
<p>The comparison question on AQA Paper 2 asks you to compare an unseen poem with a second unseen poem. This is often the question students find most challenging because they must work quickly and find meaningful links between two texts they have never seen before. This module gives you a reliable strategy.</p>

<h3>Step 1 — Read Both Poems Carefully</h3>
<p>Read Poem A and Poem B at least twice each. On your first reading, note what each poem is about. On your second reading, start identifying similarities and differences in <span class="key-term">methods</span> — the techniques, structure, and tone each poet uses.</p>

<div class="examiner-tip">The comparison question is worth fewer marks than the single-poem question, so manage your time. Aim for around 20 minutes. Two or three well-developed comparative paragraphs are better than five rushed ones.</div>

<h3>Step 2 — Find Meaningful Links</h3>
<p>Look for connections in three areas:</p>
<ul>
  <li><strong>Theme or subject:</strong> Do both poems explore a similar idea (e.g., loss, nature, identity) but from different angles?</li>
  <li><strong>Methods:</strong> Do both poets use imagery, but one favours metaphor while the other uses personification? Does one use a strict form while the other uses free verse?</li>
  <li><strong>Tone and mood:</strong> Is one poem hopeful while the other is bitter? Do they begin similarly but end in different emotional places?</li>
</ul>

<div class="text-extract">
  <strong>Poem A:</strong> The oak stood firm, its roots like fists<br>
  gripping the dark beneath the hill.<br><br>
  <strong>Poem B:</strong> The sapling bent and bowed and bent,<br>
  finding its strength in giving way.
  <div class="source">— Original paired examples for comparison practice</div>
</div>

<p>Both extracts use trees to explore strength, but they present <em>contrasting</em> ideas of what strength looks like. Poem A's oak is rigid and forceful — the simile "roots like fists" connotes aggression and resistance. Poem B's sapling finds strength in flexibility — the repetition of "bent" and the phrase "giving way" redefine strength as adaptability rather than resistance.</p>

<h3>Step 3 — Structure Your Comparison</h3>
<p>Use this paragraph template for each comparative point:</p>
<ol>
  <li>State the shared theme or area of comparison.</li>
  <li>Analyse how Poem A presents it (with a short quotation).</li>
  <li>Use a comparative connective ("In contrast," "Similarly," "However").</li>
  <li>Analyse how Poem B presents it differently or similarly (with a short quotation).</li>
  <li>Offer a concluding comment on what the difference or similarity reveals.</li>
</ol>

<div class="common-mistake">Do not simply list features of each poem side by side. The examiner wants to see you making <em>connections</em>. Every paragraph must contain a direct comparison, not just separate descriptions.</div>

<div class="model-answer">
<strong>Example comparison opening:</strong><br><br>
Both poets explore the theme of resilience through images of trees, yet they present fundamentally different views of what it means to endure. In Poem A, the oak's "roots like fists" suggest that strength lies in resistance and unyielding force. In contrast, Poem B's sapling "finding its strength in giving way" redefines endurance as flexibility. While Poem A's language is aggressive and combative, Poem B's tone is quieter, almost meditative, implying that true resilience requires adaptability rather than brute force.
</div>

<p>With practice, this comparison structure will become second nature. The key is to always write <em>about the relationship</em> between the two poems, not about each poem in isolation.</p>
`,
      quiz: [
        {
          id: 'gcse-lp-m6-q1',
          question:
            'What is the most important thing to include in every paragraph of a comparison response?',
          options: [
            'A quotation from Poem A only',
            'A direct comparison between the two poems',
            'Historical context about both poets',
            'A definition of a poetic technique',
          ],
          correct: 1,
          explanation:
            'Every paragraph must contain a direct comparison. Writing about the poems separately, without connecting them, will not earn comparison marks.',
        },
        {
          id: 'gcse-lp-m6-q2',
          question:
            'In the tree extracts, how do the two poems present different ideas of strength?',
          options: [
            'Both present strength as physical power',
            'Poem A presents strength as resistance; Poem B presents strength as flexibility',
            'Poem A presents weakness; Poem B presents strength',
            'Both present strength as giving way under pressure',
          ],
          correct: 1,
          explanation:
            'Poem A\'s oak is rigid and forceful ("roots like fists"), associating strength with resistance. Poem B\'s sapling finds strength in "giving way," redefining endurance as adaptability.',
        },
        {
          id: 'gcse-lp-m6-q3',
          question:
            'Which of the following is a useful comparative connective?',
          options: [
            '"Furthermore"',
            '"In contrast"',
            '"For example"',
            '"In conclusion"',
          ],
          correct: 1,
          explanation:
            '"In contrast" is a comparative connective that signals a difference between the two poems. Others like "Similarly" and "However" are also useful for comparison.',
        },
        {
          id: 'gcse-lp-m6-q4',
          question:
            'How much time should you approximately spend on the comparison question?',
          options: [
            '10 minutes',
            '20 minutes',
            '35 minutes',
            '45 minutes',
          ],
          correct: 1,
          explanation:
            'The comparison question carries fewer marks than the single-poem question, so around 20 minutes is appropriate. Two or three well-developed paragraphs are sufficient.',
        },
      ],
    },
  ],

  // ──────────────────────────────────────────────
  // ASSESSMENT QUESTIONS
  // ──────────────────────────────────────────────
  assessmentQuestions: [
    {
      id: 'gcse-lp-a1',
      question: 'What does SMILE stand for in poetry analysis?',
      options: [
        'Sound, Metaphor, Imagery, Language, Emotion',
        'Structure, Meaning, Imagery, Language, Effect',
        'Simile, Metaphor, Irony, Layout, Enjambment',
        'Structure, Mood, Imagery, Lines, Effect',
      ],
      correct: 1,
      explanation:
        'SMILE stands for Structure, Meaning, Imagery, Language, and Effect — a framework for organising poetry annotations.',
    },
    {
      id: 'gcse-lp-a2',
      question:
        'Which of the following is an example of personification?',
      options: [
        '"The sky was as grey as slate"',
        '"The wind whispered through the alley"',
        '"He ran like a startled deer"',
        '"The red door stood at the end of the lane"',
      ],
      correct: 1,
      explanation:
        'Personification gives human qualities to non-human things. The wind "whispering" attributes a human action to a natural force.',
    },
    {
      id: 'gcse-lp-a3',
      question: 'What is enjambment?',
      options: [
        'A pause in the middle of a line of poetry',
        'A poem written in the voice of a character',
        'When a sentence runs on past the end of a line without punctuation',
        'The repetition of consonant sounds at the start of words',
      ],
      correct: 2,
      explanation:
        'Enjambment occurs when a sentence or phrase continues beyond the end of a line without a pause or punctuation, pulling the reader forward.',
    },
    {
      id: 'gcse-lp-a4',
      question: 'What does the "T" in PETAL stand for?',
      options: ['Theme', 'Technique', 'Tone', 'Text'],
      correct: 1,
      explanation:
        'In the PETAL paragraph structure, T stands for Technique — you name the device the poet has used in your chosen quotation.',
    },
    {
      id: 'gcse-lp-a5',
      question:
        'A Shakespearean sonnet typically ends with which structural feature?',
      options: [
        'A sestet',
        'A rhyming couplet',
        'A single isolated line',
        'A repeated refrain',
      ],
      correct: 1,
      explanation:
        'A Shakespearean sonnet has three quatrains followed by a final rhyming couplet (GG), which often delivers a conclusion, twist, or resolution.',
    },
    {
      id: 'gcse-lp-a6',
      question:
        'When comparing two poems, which approach is most effective?',
      options: [
        'Write about Poem A completely, then write about Poem B completely',
        'Discuss only the poem you understand better in detail',
        'Use an integrated approach, comparing both poems within each paragraph',
        'Write a paragraph about techniques, then a paragraph about themes, for each poem separately',
      ],
      correct: 2,
      explanation:
        'An integrated approach — discussing both poems within each paragraph using comparative connectives — demonstrates genuine comparison and earns higher marks.',
    },
    {
      id: 'gcse-lp-a7',
      question:
        'Which term describes the repetition of "s" and "sh" sounds in a line of poetry?',
      options: ['Alliteration', 'Assonance', 'Sibilance', 'Onomatopoeia'],
      correct: 2,
      explanation:
        'Sibilance specifically refers to the repetition of "s" and "sh" sounds. While it is a form of alliteration, using the precise term demonstrates stronger technical knowledge.',
    },
    {
      id: 'gcse-lp-a8',
      question:
        'Why is it important to use tentative language when analysing poetry?',
      options: [
        'Because your interpretation is probably incorrect',
        'Because poems have only one correct meaning',
        'Because it shows awareness that poems can support multiple valid interpretations',
        'Because the examiner prefers students who seem uncertain',
      ],
      correct: 2,
      explanation:
        'Tentative language ("perhaps," "could suggest") shows the examiner you understand that poetry is open to multiple valid readings, a sign of mature analysis.',
    },
    {
      id: 'gcse-lp-a9',
      question: 'What is a volta in poetry?',
      options: [
        'A type of Italian sonnet',
        'A turning point or shift in the poem',
        'A repeated line at the end of each stanza',
        'The rhythm pattern of a line',
      ],
      correct: 1,
      explanation:
        'A volta is a turning point — a shift in tone, argument, or perspective. It is most associated with sonnets but can appear in any poem.',
    },
    {
      id: 'gcse-lp-a10',
      question:
        'What is the key difference between surface meaning and deeper meaning?',
      options: [
        'Surface meaning is correct; deeper meaning is a guess',
        'Surface meaning is the literal content; deeper meaning is the underlying ideas and emotions',
        'Surface meaning is for GCSE; deeper meaning is for A-Level',
        'There is no meaningful difference between the two',
      ],
      correct: 1,
      explanation:
        'Surface meaning is what the poem literally describes. Deeper meaning is the ideas, emotions, and arguments beneath the surface — what the poem is really about.',
    },
    {
      id: 'gcse-lp-a11',
      question:
        'Which of the following best describes caesura?',
      options: [
        'A run-on line with no punctuation at the end',
        'A pause within a line of poetry, often created by punctuation',
        'The final line of a sonnet',
        'A change in the rhyme scheme',
      ],
      correct: 1,
      explanation:
        'Caesura is a pause within a line of poetry, typically created by punctuation such as a full stop, comma, dash, or semicolon.',
    },
    {
      id: 'gcse-lp-a12',
      question: 'What is iambic pentameter?',
      options: [
        'A line with four stressed syllables',
        'A line with five pairs of unstressed-stressed syllables',
        'A line that always rhymes with the next',
        'A line with six pairs of stressed-unstressed syllables',
      ],
      correct: 1,
      explanation:
        'Iambic pentameter consists of five iambs (da-DUM), giving a ten-syllable line with an unstressed-stressed pattern. It is the most common metre in English poetry.',
    },
    {
      id: 'gcse-lp-a13',
      question:
        'In an essay, what is the purpose of the "L" (Link) in a PETAL paragraph?',
      options: [
        'To list additional techniques',
        'To add a quotation from a second poem',
        'To connect back to the question or forward to the next point',
        'To define the technique you have identified',
      ],
      correct: 2,
      explanation:
        'The Link connects your analysis back to the essay question or transitions to your next point, keeping your argument cohesive and focused.',
    },
    {
      id: 'gcse-lp-a14',
      question:
        'A poem written as the speech of a single character to a silent listener is called a:',
      options: [
        'Sonnet',
        'Free verse poem',
        'Dramatic monologue',
        'Ballad',
      ],
      correct: 2,
      explanation:
        'A dramatic monologue is a poem in which a single character speaks to an implied silent listener. The reader learns about the speaker through what they reveal in their words.',
    },
    {
      id: 'gcse-lp-a15',
      question:
        'Why might a poet choose to use free verse rather than a strict form?',
      options: [
        'Because free verse is easier to write',
        'Because free verse allows the shape of the poem to mirror its content without formal constraints',
        'Because strict forms are old-fashioned',
        'Because examiners prefer free verse poems',
      ],
      correct: 1,
      explanation:
        'Free verse gives the poet freedom to shape lines and stanzas in ways that mirror the poem\'s content — for example, fragmented lines for fragmented thoughts.',
    },
    {
      id: 'gcse-lp-a16',
      question:
        'Which of these is the strongest analytical statement?',
      options: [
        '"The poet uses a metaphor."',
        '"The poet uses a metaphor, which is effective."',
        '"The metaphor of the sea as a \'hungry mouth\' suggests nature\'s destructive, consuming power, creating unease in the reader."',
        '"There is a metaphor in line 3 about the sea."',
      ],
      correct: 2,
      explanation:
        'The strongest analysis names the technique, quotes the example, explains the connotations of specific words, and describes the effect on the reader.',
    },
    {
      id: 'gcse-lp-a17',
      question:
        'What is the rhyme scheme of a Shakespearean sonnet?',
      options: [
        'AABB CCDD EEFF GG',
        'ABAB CDCD EFEF GG',
        'ABBA ABBA CDE CDE',
        'ABCABC DEFDEF GG',
      ],
      correct: 1,
      explanation:
        'A Shakespearean sonnet follows the rhyme scheme ABAB CDCD EFEF GG — three quatrains with alternating rhyme, ending with a rhyming couplet.',
    },
    {
      id: 'gcse-lp-a18',
      question:
        'What is the best way to begin a comparison paragraph?',
      options: [
        'With a long quotation from Poem A',
        'With a statement about the shared theme or area you are comparing',
        'By defining a poetic technique',
        'By writing about the poet\'s biography',
      ],
      correct: 1,
      explanation:
        'Begin a comparison paragraph by identifying the shared theme or aspect you will compare. This establishes the basis for comparison before you analyse each poem.',
    },
    {
      id: 'gcse-lp-a19',
      question:
        'How many times should you ideally read an unseen poem before writing your answer?',
      options: ['Once', 'Twice', 'At least three times', 'Five times'],
      correct: 2,
      explanation:
        'Reading at least three times — once for general understanding, once for annotation, and once for deeper analysis — ensures you engage fully with the poem before writing.',
    },
    {
      id: 'gcse-lp-a20',
      question:
        'A student writes: "The theme of this poem is nature." Why is this not effective analysis?',
      options: [
        'Because nature is not a valid theme',
        'Because it identifies the theme without explaining what the poem says about it',
        'Because you should never mention themes in a poetry essay',
        'Because the student should have written about structure instead',
      ],
      correct: 1,
      explanation:
        'Simply naming a theme is identification, not analysis. Analysis requires you to explain the poet\'s perspective — for example, "The poet presents nature as an indifferent force that endures beyond human life."',
    },
  ],
};

export default gcseLitPoetry;
