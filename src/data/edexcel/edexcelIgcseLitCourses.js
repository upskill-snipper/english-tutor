const edexcelIgcseLit = {
  id: 'edexcel-igcse-lit',
  title: 'Edexcel IGCSE English Literature (4ET1)',
  subtitle: 'Master poetry, prose, drama and literary heritage for the Edexcel International GCSE.',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: 'igcse-lit',
  specCode: '4ET1',
  price: 49,
  duration: '4-5 hours',
  level: 'IGCSE (Years 10-11)',
  description:
    'A comprehensive course covering both components of Edexcel IGCSE English Literature. Build skills in unseen poetry analysis, anthology comparison, modern prose and drama essays, literary heritage writing, and open book exam technique. Includes model answers and examiner-focused strategies.',
  color: '#dc2626',

  moduleList: [
    // ──────────────────────────────────────────────
    // MODULE 1
    // ──────────────────────────────────────────────
    {
      id: 'eix-lit-m1',
      title: 'Paper 1 Section A: Unseen Poetry Analysis',
      duration: '35 mins',
      content: `
<p>Section A of Paper 1 is worth <span class="key-term">20 marks</span> and requires you to analyse <strong>one unseen poem</strong>. The assessment objective is <span class="key-term">AO2</span>: analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.</p>

<h3>A Reliable Approach: The Three-Read Method</h3>
<p>Read the poem three times before you write anything. On the first read, absorb the overall mood and subject. On the second, underline striking language choices, images and structural features. On the third, annotate the margins with ideas about <em>why</em> the poet has made those choices and <em>what effect</em> they create.</p>

<div class="examiner-tip">Edexcel examiners reward responses that move beyond feature-spotting. Every point you make should connect a technique to its effect on the reader. Aim for depth over breadth — three well-developed points beat six shallow ones.</div>

<h3>Structuring Your Response</h3>
<p>Use the <span class="key-term">PEAL</span> framework for each paragraph:</p>
<ul>
  <li><strong>P</strong> — <span class="key-term">Point</span>: a clear analytical statement linked to the question.</li>
  <li><strong>E</strong> — <span class="key-term">Evidence</span>: a short, well-chosen quotation.</li>
  <li><strong>A</strong> — <span class="key-term">Analysis</span>: explore language, imagery, sound or structure in the quotation.</li>
  <li><strong>L</strong> — <span class="key-term">Link</span>: connect back to the question or forward to the next idea.</li>
</ul>

<h3>What to Look For</h3>
<p>Consider <span class="key-term">imagery</span> (metaphor, simile, personification), <span class="key-term">sound</span> (alliteration, sibilance, assonance), <span class="key-term">structure</span> (enjambment, caesura, stanza breaks, volta), and <span class="key-term">form</span> (sonnet, free verse, dramatic monologue). Always ask: what effect does this choice create?</p>

<div class="text-extract">
  The morning cracked its shell above the roofs,<br>
  spilling gold across the wet slate tiles<br>
  like something no one asked for, given freely.
  <div class="source">— Original example for annotation practice</div>
</div>

<p>Here the metaphor of the morning "cracking its shell" suggests birth and fragility. The simile "like something no one asked for, given freely" transforms the sunrise into an act of unexpected generosity, creating a tone of quiet wonder.</p>

<div class="common-mistake">Do not waste time writing a lengthy introduction that restates the question. Begin your first paragraph with analysis immediately — every sentence should earn marks.</div>

<p>Practise timed responses of 30-35 minutes to build the habit of writing concisely and analytically under pressure.</p>
`,
      quiz: [
        {
          id: 'eix-lit-m1-q1',
          question: 'Which assessment objective is tested in Paper 1 Section A?',
          options: ['AO1', 'AO2', 'AO3', 'AO4'],
          correct: 1,
          explanation:
            'Section A (Unseen Poetry) tests AO2: analyse the language, form and structure used by a writer to create meanings and effects.',
        },
        {
          id: 'eix-lit-m1-q2',
          question: 'How many unseen poems must you analyse in Section A?',
          options: ['One', 'Two', 'Three', 'You choose from a selection'],
          correct: 0,
          explanation:
            'Section A requires you to analyse one unseen poem. There is no comparison element in this section.',
        },
        {
          id: 'eix-lit-m1-q3',
          question: 'What does the "A" in PEAL stand for?',
          options: ['Audience', 'Alliteration', 'Analysis', 'Assessment'],
          correct: 2,
          explanation:
            'In the PEAL framework, A stands for Analysis — where you explore the effect of the language, imagery or structure in your chosen quotation.',
        },
        {
          id: 'eix-lit-m1-q4',
          question: 'Why should you avoid writing a long introduction that restates the question?',
          options: [
            'It is grammatically incorrect',
            'It wastes time and does not earn marks',
            'The examiner will penalise you for it',
            'You should only write one paragraph',
          ],
          correct: 1,
          explanation:
            'A lengthy introduction that simply restates the question wastes valuable time. Begin with analysis immediately so that every sentence earns marks.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 2
    // ──────────────────────────────────────────────
    {
      id: 'eix-lit-m2',
      title: 'Paper 1 Section B: Anthology Poetry — Understanding the 16 Poems',
      duration: '40 mins',
      content: `
<p>The Edexcel IGCSE anthology contains <span class="key-term">16 poems</span> that you must study. In Section B of Paper 1 (worth <span class="key-term">30 marks</span>) you will compare two of these poems. The poems are provided in the exam paper, so you do not need to memorise them — but you <em>do</em> need to know them inside out.</p>

<h3>The 16 Anthology Poems</h3>
<p>The poems span several centuries and a wide range of themes. Group them mentally by theme to make comparison easier:</p>
<ul>
  <li><strong>Identity and Culture:</strong> <em>Search For My Tongue</em> (Bhatt), <em>Half-caste</em> (Agard), <em>Poem at Thirty-Nine</em> (Walker)</li>
  <li><strong>Power and Control:</strong> <em>My Last Duchess</em> (Browning), <em>The Tyger</em> (Blake), <em>Sonnet 116</em> (Shakespeare)</li>
  <li><strong>Childhood and Memory:</strong> <em>Half-past Two</em> (Fanthorpe), <em>Piano</em> (Lawrence), <em>Hide and Seek</em> (Scannell)</li>
  <li><strong>Conflict and Mortality:</strong> <em>War Photographer</em> (Duffy), <em>Do not go gentle into that good night</em> (Thomas), <em>La Belle Dame sans Merci</em> (Keats), <em>Remember</em> (Rossetti)</li>
  <li><strong>Hope and Resilience:</strong> <em>If—</em> (Kipling), <em>Prayer Before Birth</em> (MacNeice), <em>Blessing</em> (Dharker)</li>
</ul>

<div class="examiner-tip">You will not know in advance which poems will appear on the paper. Prepare links between at least three or four poems for each major theme so you are ready for any combination.</div>

<h3>Building a Poem Profile</h3>
<p>For each poem, create a revision profile covering: <span class="key-term">subject and themes</span>, <span class="key-term">speaker and tone</span>, <span class="key-term">key techniques</span> (with quotations), <span class="key-term">form and structure</span>, and <span class="key-term">context</span> where relevant. This gives you a mental toolkit to draw on in the exam.</p>

<div class="text-extract">
  "Do not go gentle into that good night,<br>
  Old age should burn and rave at close of day;<br>
  Rage, rage against the dying of the light."
  <div class="source">— Dylan Thomas</div>
</div>

<p>Thomas uses the <span class="key-term">villanelle</span> form with its repeated refrains to create an insistent, urgent plea against passive acceptance of death. The imperative "Rage, rage" and the metaphor of death as "dying of the light" transform a personal elegy into a universal statement about human resilience.</p>

<div class="common-mistake">Do not treat context as a separate paragraph bolted onto your essay. Weave contextual understanding naturally into your analysis of language and themes.</div>

<p>In the next module you will learn how to compare these poems effectively under timed conditions.</p>
`,
      quiz: [
        {
          id: 'eix-lit-m2-q1',
          question: 'How many poems are in the Edexcel IGCSE anthology?',
          options: ['12', '15', '16', '20'],
          correct: 2,
          explanation:
            'The Edexcel IGCSE English Literature anthology contains 16 poems spanning multiple centuries and themes.',
        },
        {
          id: 'eix-lit-m2-q2',
          question: 'Are the anthology poems provided in the exam?',
          options: [
            'No, you must memorise them',
            'Yes, the poems are printed in the exam paper',
            'Only the titles are given',
            'Only half of them are provided',
          ],
          correct: 1,
          explanation:
            'The anthology poems are provided in the exam paper, so memorisation is not required — but thorough knowledge of each poem is essential.',
        },
        {
          id: 'eix-lit-m2-q3',
          question: 'What poetic form does Dylan Thomas use in "Do not go gentle into that good night"?',
          options: ['Sonnet', 'Ballad', 'Villanelle', 'Free verse'],
          correct: 2,
          explanation:
            'Thomas uses the villanelle form, characterised by its 19 lines, two repeating refrains, and an insistent, cyclical structure.',
        },
        {
          id: 'eix-lit-m2-q4',
          question: 'Why is it useful to group the anthology poems by theme?',
          options: [
            'Because the exam always groups poems by theme',
            'Because it helps you prepare comparison links for any combination of poems',
            'Because you only need to study one theme group',
            'Because context is the most important assessment objective',
          ],
          correct: 1,
          explanation:
            'Grouping poems by theme helps you prepare multiple comparison links so you are ready no matter which poems appear on the paper.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 3
    // ──────────────────────────────────────────────
    {
      id: 'eix-lit-m3',
      title: 'Paper 1 Section B: Comparing Anthology Poems',
      duration: '40 mins',
      content: `
<p>Section B tests <span class="key-term">AO2</span> (language, form and structure) and <span class="key-term">AO3</span> (relationships between texts). You must compare two anthology poems, and the quality of your <em>comparison</em> — not just your analysis of individual poems — determines your mark.</p>

<h3>The Integrated Comparison Method</h3>
<p>Avoid the "Poem A then Poem B" structure. Instead, use an <span class="key-term">integrated approach</span> where every paragraph discusses <strong>both poems</strong>. Each paragraph should focus on one shared aspect — a theme, a technique, or a structural choice — and explore how the two poets treat it differently or similarly.</p>

<div class="model-answer">
<strong>Example paragraph opening:</strong> "Both Duffy in 'War Photographer' and Thomas in 'Do not go gentle' confront mortality, yet while Duffy's speaker adopts a detached, observational tone, Thomas's speaker is urgently imperative. This contrast reveals two very different responses to death: quiet documentation versus passionate resistance."
</div>

<h3>Comparative Connectives</h3>
<p>Use these to weave your comparison together:</p>
<ul>
  <li><strong>Similarity:</strong> similarly, likewise, in the same way, both poets, equally</li>
  <li><strong>Contrast:</strong> however, in contrast, whereas, conversely, on the other hand, unlike</li>
  <li><strong>Development:</strong> furthermore, moreover, this is developed further in, building on this idea</li>
</ul>

<div class="examiner-tip">The strongest responses do not simply alternate between poems. They make a comparative point, support it with evidence from both texts, and then explore the significance of the similarity or difference. Aim for genuine dialogue between the poems.</div>

<h3>Planning Under Pressure</h3>
<p>Spend 5 minutes planning before you write. Identify <span class="key-term">three comparison points</span> — for example, tone, imagery and structure — and jot down a key quotation from each poem for each point. This skeleton plan keeps your essay focused and prevents you from drifting into narrative summary.</p>

<div class="text-extract">
  "A hundred blessings<br>
  gather in the small bones of the child's hands."
  <div class="source">— Imtiaz Dharker, 'Blessing'</div>
</div>

<p>If comparing "Blessing" with "If—", you might note that Dharker localises hope in the physical ("small bones of the child's hands") while Kipling abstracts it into moral imperatives ("If you can keep your head"). Both celebrate resilience, but through strikingly different poetic strategies.</p>

<div class="common-mistake">Do not retell the poem's story. The examiner knows what happens — they want to see <em>analysis</em> of how and why the poet creates meaning.</div>
`,
      quiz: [
        {
          id: 'eix-lit-m3-q1',
          question: 'Which assessment objectives are tested in Paper 1 Section B?',
          options: ['AO1 and AO4', 'AO2 and AO3', 'AO1 and AO2', 'AO3 and AO4'],
          correct: 1,
          explanation:
            'Section B tests AO2 (language, form and structure) and AO3 (relationships between texts — the comparison element).',
        },
        {
          id: 'eix-lit-m3-q2',
          question: 'What is the "integrated approach" to comparing poems?',
          options: [
            'Writing about Poem A in full, then Poem B in full',
            'Discussing both poems within each paragraph, comparing them point by point',
            'Only writing about the poem you know best',
            'Alternating paragraphs: one on Poem A, one on Poem B',
          ],
          correct: 1,
          explanation:
            'The integrated approach discusses both poems within each paragraph, comparing them on shared aspects. This demonstrates genuine comparison and earns higher marks.',
        },
        {
          id: 'eix-lit-m3-q3',
          question: 'How long should you spend planning your comparison essay?',
          options: ['No planning needed', 'About 1 minute', 'About 5 minutes', 'About 15 minutes'],
          correct: 2,
          explanation:
            'Spending about 5 minutes planning ensures you have a clear structure with three comparison points and key quotations, keeping your essay focused.',
        },
        {
          id: 'eix-lit-m3-q4',
          question: 'Which word is an effective comparative connective for showing contrast?',
          options: ['Furthermore', 'Likewise', 'Whereas', 'Similarly'],
          correct: 2,
          explanation:
            '"Whereas" signals a contrast between the two poems, helping to weave genuine comparison into your writing.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 4
    // ──────────────────────────────────────────────
    {
      id: 'eix-lit-m4',
      title: 'Paper 1 Section C: Modern Prose Essay Skills',
      duration: '40 mins',
      content: `
<p>Section C is the highest-weighted section on Paper 1, worth <span class="key-term">40 marks</span>. You write an essay on your studied modern prose text. The assessment objectives are <span class="key-term">AO1</span> (critical response with textual references) and <span class="key-term">AO4</span> (relationship between text and its contexts).</p>

<h3>The Set Texts</h3>
<p>Your teacher will have chosen one of the following: <em>To Kill a Mockingbird</em> (Lee), <em>Of Mice and Men</em> (Steinbeck), <em>The Whale Rider</em> (Ihimaera), <em>The Joy Luck Club</em> (Tan), <em>Things Fall Apart</em> (Achebe), <em>Klara and the Sun</em> (Ishiguro), or <em>Western Lane</em> (Patel).</p>

<h3>Building a Strong Argument</h3>
<p>The question will ask you to explore a theme, character or relationship. Your essay must present a clear <span class="key-term">argument</span> — not a retelling of the plot. Each paragraph should make a point that advances your argument, supported by precise textual references.</p>

<div class="model-answer">
<strong>Strong thesis example:</strong> "Lee uses Atticus Finch not simply as a moral hero but as a lens through which Scout — and the reader — must confront the gap between idealism and the reality of systemic racial injustice in 1930s Alabama."
</div>

<h3>Embedding Quotations</h3>
<p>Quotations should be <span class="key-term">embedded</span> within your sentences, not dropped in as separate chunks. Keep them short — a word or phrase is often more effective than a full sentence.</p>

<div class="text-extract">
  <strong>Weak:</strong> Steinbeck writes "A guy needs somebody — to be near him." This shows loneliness.<br><br>
  <strong>Strong:</strong> Crooks's admission that "a guy needs somebody — to be near him" reveals the corrosive effect of enforced isolation, with the dash creating a hesitation that mirrors his vulnerability.
  <div class="source">— Embedding comparison</div>
</div>

<div class="examiner-tip">AO4 asks you to show understanding of context, but this must be woven into your analysis. Do not write a separate "context paragraph." Instead, connect context to the writer's choices: "Achebe presents Okonkwo's fear of weakness in the context of Igbo masculinity norms, which..."</div>

<h3>Paragraph Structure</h3>
<p>Use a <span class="key-term">Point-Evidence-Analysis-Context-Link</span> structure. The context element is what distinguishes a good response from an excellent one at IGCSE level. Always ask: <em>why</em> might the writer have made this choice, given the time and society in which they were writing?</p>

<div class="common-mistake">Avoid beginning every paragraph with "This shows that..." Vary your sentence openings to create a more fluent, sophisticated essay style.</div>
`,
      quiz: [
        {
          id: 'eix-lit-m4-q1',
          question: 'How many marks is Paper 1 Section C worth?',
          options: ['20 marks', '30 marks', '40 marks', '60 marks'],
          correct: 2,
          explanation:
            'Section C (Modern Prose) is worth 40 marks, making it the highest-weighted section on Paper 1.',
        },
        {
          id: 'eix-lit-m4-q2',
          question: 'Which assessment objectives are tested in the modern prose essay?',
          options: ['AO2 and AO3', 'AO1 and AO4', 'AO1 and AO2', 'AO3 and AO4'],
          correct: 1,
          explanation:
            'The modern prose essay tests AO1 (critical response with textual references) and AO4 (relationship between text and its contexts).',
        },
        {
          id: 'eix-lit-m4-q3',
          question: 'Why should quotations be embedded within your sentences?',
          options: [
            'Because the examiner cannot read standalone quotations',
            'Because it demonstrates fluency and integrates evidence into your argument',
            'Because long quotations earn more marks',
            'Because the mark scheme requires quotation marks',
          ],
          correct: 1,
          explanation:
            'Embedding quotations demonstrates fluency and shows that your evidence is integrated into your argument rather than simply dropped in.',
        },
        {
          id: 'eix-lit-m4-q4',
          question: 'What is the best way to incorporate contextual knowledge (AO4)?',
          options: [
            'Write a separate introductory paragraph about the historical period',
            'Include a footnote at the end of the essay',
            'Weave context into your analysis of the writer\'s choices throughout the essay',
            'Only mention context if the question specifically asks for it',
          ],
          correct: 2,
          explanation:
            'Context should be woven naturally into your analysis, connecting the writer\'s choices to the social, historical or cultural circumstances in which they were writing.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 5
    // ──────────────────────────────────────────────
    {
      id: 'eix-lit-m5',
      title: 'Paper 2 Section A: Modern Drama Essay Skills',
      duration: '35 mins',
      content: `
<p>Paper 2 is worth <span class="key-term">60 marks (40%)</span> and lasts <span class="key-term">1 hour 30 minutes</span>. Section A focuses on your modern drama text and is worth <span class="key-term">30 marks</span>. The assessment objectives are <span class="key-term">AO1</span> and <span class="key-term">AO2</span>. Crucially, Paper 2 is <span class="key-term">open book</span> — you may bring clean copies of your texts into the exam.</p>

<h3>The Set Texts</h3>
<p>Your teacher will have chosen one of: <em>A View from the Bridge</em> (Miller), <em>An Inspector Calls</em> (Priestley), <em>The Curious Incident of the Dog in the Night-Time</em> (Stephens), <em>Kindertransport</em> (Samuels), or <em>Death and the King's Horseman</em> (Soyinka).</p>

<h3>Writing About Drama</h3>
<p>The key difference between prose and drama analysis is that drama is written to be <span class="key-term">performed</span>. Your essay must show awareness of dramatic techniques: stage directions, dialogue, dramatic irony, tension, audience response, and the visual/physical elements of theatre.</p>

<div class="model-answer">
<strong>Drama-aware analysis:</strong> "Priestley's use of the doorbell as a stage direction — interrupting Birling's capitalist monologue — is a masterclass in dramatic timing. The audience hears what Birling cannot yet understand: that his complacency is about to be shattered."
</div>

<h3>AO2 in Drama</h3>
<p>AO2 asks you to analyse the writer's methods. In drama, this includes:</p>
<ul>
  <li><span class="key-term">Stage directions</span> — lighting, movement, props, pauses</li>
  <li><span class="key-term">Dialogue</span> — what characters say, how they say it, what they withhold</li>
  <li><span class="key-term">Dramatic irony</span> — when the audience knows something a character does not</li>
  <li><span class="key-term">Structure</span> — act/scene divisions, the build of tension, climax and resolution</li>
</ul>

<div class="examiner-tip">Always refer to the playwright by name ("Miller presents...") rather than treating characters as real people ("Eddie feels..."). This keeps your response analytical rather than narrative.</div>

<div class="text-extract">
  "[Catherine lights a cigarette and Eddie turns to look at her.]"
  <div class="source">— Arthur Miller, <em>A View from the Bridge</em></div>
</div>

<p>This stage direction signals Catherine's growing independence and Eddie's inability to accept it. Analysing such moments shows the examiner you understand drama as a performed art form.</p>

<div class="common-mistake">Do not ignore stage directions. Many students treat plays like novels and only analyse dialogue. Stage directions are deliberate writer choices and earn AO2 marks.</div>
`,
      quiz: [
        {
          id: 'eix-lit-m5-q1',
          question: 'What is distinctive about Paper 2 compared to Paper 1?',
          options: [
            'It is longer',
            'It is open book — you can bring clean copies of your texts',
            'It only tests AO3',
            'It is coursework, not an exam',
          ],
          correct: 1,
          explanation:
            'Paper 2 is open book, meaning you may take clean, unannotated copies of your prescribed texts into the exam.',
        },
        {
          id: 'eix-lit-m5-q2',
          question: 'Why is it important to analyse stage directions in a drama essay?',
          options: [
            'Because stage directions are worth more marks than dialogue',
            'Because they show understanding of drama as a performed art form and count as writer\'s methods (AO2)',
            'Because the examiner will deduct marks if you ignore them',
            'Because stage directions are the only part of a play that the author writes',
          ],
          correct: 1,
          explanation:
            'Stage directions are deliberate choices by the playwright. Analysing them demonstrates understanding of drama as performance and earns AO2 marks.',
        },
        {
          id: 'eix-lit-m5-q3',
          question: 'How should you refer to characters in an analytical drama essay?',
          options: [
            'As real people: "Eddie feels angry"',
            'As constructs of the playwright: "Miller presents Eddie as..."',
            'By their first names only',
            'You should avoid mentioning characters by name',
          ],
          correct: 1,
          explanation:
            'Referring to characters as constructs of the playwright ("Miller presents...") keeps your response analytical and shows awareness that the text is a crafted work.',
        },
        {
          id: 'eix-lit-m5-q4',
          question: 'Which assessment objectives are tested in Paper 2 Section A?',
          options: ['AO1 and AO2', 'AO2 and AO3', 'AO1 and AO4', 'AO3 and AO4'],
          correct: 0,
          explanation:
            'Section A of Paper 2 tests AO1 (critical response with textual references) and AO2 (analysis of language, form and structure).',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 6
    // ──────────────────────────────────────────────
    {
      id: 'eix-lit-m6',
      title: 'Paper 2 Section B: Literary Heritage Essay Skills',
      duration: '35 mins',
      content: `
<p>Section B of Paper 2 is worth <span class="key-term">30 marks</span> and tests <span class="key-term">AO1</span>, <span class="key-term">AO2</span> and <span class="key-term">AO4</span>. You write an essay on your literary heritage text — a work from the established English literary canon. The addition of AO4 means context is assessed explicitly here.</p>

<h3>The Set Texts</h3>
<p>Options include: <em>Romeo and Juliet</em>, <em>Macbeth</em>, or <em>The Merchant of Venice</em> (Shakespeare); <em>Pride and Prejudice</em> (Austen); <em>Great Expectations</em> (Dickens); <em>The Scarlet Letter</em> (Hawthorne).</p>

<h3>Handling Older Language</h3>
<p>Literary heritage texts use language that can feel unfamiliar. The key is not to translate every word but to identify <span class="key-term">significant word choices</span> and explore their connotations. Shakespeare's language rewards close analysis — even a single word can carry multiple meanings.</p>

<div class="text-extract">
  "Look like th'innocent flower,<br>
  But be the serpent under't."
  <div class="source">— Shakespeare, <em>Macbeth</em> (Lady Macbeth, Act 1 Scene 5)</div>
</div>

<p>Lady Macbeth's imperative uses the <span class="key-term">juxtaposition</span> of "flower" and "serpent" — beauty and danger — to reveal her manipulative nature. The biblical echo of the serpent connects her to temptation and the Fall, a context a Jacobean audience would have instantly recognised.</p>

<div class="examiner-tip">For literary heritage texts, AO4 is crucial. Connect the writer's choices to the values, beliefs and social structures of their time. For Shakespeare, consider Jacobean attitudes to kingship, gender and the supernatural. For Austen, consider Regency class structures and marriage conventions.</div>

<h3>Balancing AO1, AO2 and AO4</h3>
<p>Think of these as layers in every paragraph:</p>
<ul>
  <li><span class="key-term">AO1</span>: your argument and textual references</li>
  <li><span class="key-term">AO2</span>: analysis of specific language, form and structural choices</li>
  <li><span class="key-term">AO4</span>: how context shapes meaning — woven in, not bolted on</li>
</ul>

<div class="model-answer">
<strong>Layered example:</strong> "Shakespeare presents Lady Macbeth's command to 'unsex me here' (AO1) as a violent rejection of femininity through the imperative verb (AO2), reflecting Jacobean anxieties about women who transgressed their prescribed gender roles (AO4)."
</div>

<div class="common-mistake">Do not write long paragraphs of historical context disconnected from the text. Every contextual point must be linked directly to a specific moment or technique in the writing.</div>
`,
      quiz: [
        {
          id: 'eix-lit-m6-q1',
          question: 'Which assessment objectives are tested in Paper 2 Section B?',
          options: ['AO1 and AO2 only', 'AO2 and AO3', 'AO1, AO2 and AO4', 'AO1, AO3 and AO4'],
          correct: 2,
          explanation:
            'Section B tests AO1 (critical response), AO2 (writer\'s methods) and AO4 (context) — all three must be addressed in your essay.',
        },
        {
          id: 'eix-lit-m6-q2',
          question: 'What biblical allusion does the "serpent" imagery in Macbeth carry?',
          options: [
            'The story of Noah\'s Ark',
            'The temptation and Fall in the Garden of Eden',
            'The parting of the Red Sea',
            'The Book of Revelation',
          ],
          correct: 1,
          explanation:
            'The serpent alludes to the temptation in the Garden of Eden, connecting Lady Macbeth to evil temptation — a reference a Jacobean audience would immediately recognise.',
        },
        {
          id: 'eix-lit-m6-q3',
          question: 'How should contextual knowledge (AO4) be presented in your essay?',
          options: [
            'In a separate context paragraph at the start',
            'Only in the conclusion',
            'Woven into your analysis throughout the essay, linked to specific textual moments',
            'As footnotes at the bottom of each page',
          ],
          correct: 2,
          explanation:
            'Context must be integrated naturally into your analysis, connected to specific moments in the text rather than presented in a separate block.',
        },
        {
          id: 'eix-lit-m6-q4',
          question: 'Why do literary heritage texts require particular attention to language analysis?',
          options: [
            'Because the language is always incorrect',
            'Because older word choices often carry multiple meanings and rich connotations worth exploring',
            'Because the examiner wants you to translate into modern English',
            'Because AO2 is worth more marks in Section B than Section A',
          ],
          correct: 1,
          explanation:
            'Older texts, especially Shakespeare, use language rich with multiple meanings, connotations and cultural echoes that reward close, detailed analysis.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 7
    // ──────────────────────────────────────────────
    {
      id: 'eix-lit-m7',
      title: 'Open Book Strategy: Using Your Texts in the Exam',
      duration: '25 mins',
      content: `
<p>Paper 2 is <span class="key-term">open book</span>: you may bring clean, unannotated copies of your prescribed texts into the exam. This is a significant advantage — but only if you know how to use it properly. Many students waste time flicking through pages rather than writing. This module teaches you how to make the open book format work for you.</p>

<h3>Preparing Your Texts</h3>
<p>Although your copies must be <span class="key-term">clean</span> (no annotations, highlights or sticky notes), you can prepare by knowing your text so well that you can navigate it quickly:</p>
<ul>
  <li>Learn the <span class="key-term">structure</span> of your text — key scenes, chapter divisions, act and scene numbers</li>
  <li>Memorise approximately where key moments fall in the book (beginning, middle, end)</li>
  <li>Practise finding quotations quickly by associating them with their position on the page</li>
</ul>

<div class="examiner-tip">The open book exam is not an invitation to copy out long passages. Short, precise quotations embedded in your analysis are far more effective than lengthy extracts. The examiner wants to see what you do with the quotation, not the quotation itself.</div>

<h3>The 80/20 Rule</h3>
<p>Aim to have <span class="key-term">80% of your key quotations memorised</span> and only use the text to check accuracy or find one or two additional references. If you rely entirely on the text during the exam, you will run out of time.</p>

<h3>Strategic Use During the Exam</h3>
<p>Follow this approach:</p>
<ol>
  <li><strong>Read the question</strong> and plan your essay (5 minutes) — jot down quotations you already know</li>
  <li><strong>Quick-find</strong> any additional quotations you need (2-3 minutes maximum)</li>
  <li><strong>Write your essay</strong>, only returning to the text if you need to verify a specific word</li>
</ol>

<div class="common-mistake">Do not bring your text into the exam without having practised using it under timed conditions. Students who have not practised often spend 10-15 minutes searching for quotations and run out of writing time.</div>

<h3>What Counts as "Clean"?</h3>
<p>Your copy must have <span class="key-term">no writing, highlighting, underlining, or sticky tabs</span>. If an invigilator finds annotations, your text may be confiscated. Use a fresh copy if your study copy is annotated.</p>

<div class="model-answer">
<strong>Efficient open book use:</strong> A student who has memorised "the American Dream" quotations from <em>Of Mice and Men</em> writes three analytical paragraphs in 20 minutes, then spends 2 minutes finding one additional quotation from Crooks's speech to strengthen their argument. This is the ideal balance.
</div>
`,
      quiz: [
        {
          id: 'eix-lit-m7-q1',
          question: 'What does "clean copy" mean in the context of the open book exam?',
          options: [
            'A recently purchased copy',
            'A copy with no annotations, highlighting, underlining or sticky tabs',
            'A copy that has been approved by the teacher',
            'A digital copy on a tablet',
          ],
          correct: 1,
          explanation:
            'A clean copy means no writing, highlighting, underlining, or sticky tabs of any kind. Annotated copies may be confiscated by invigilators.',
        },
        {
          id: 'eix-lit-m7-q2',
          question: 'What is the recommended "80/20 rule" for the open book exam?',
          options: [
            'Spend 80% of time reading and 20% writing',
            'Memorise 80% of key quotations and use the text for the remaining 20%',
            'Write 80% about context and 20% about language',
            'Answer 80% of the question and leave 20% blank',
          ],
          correct: 1,
          explanation:
            'The 80/20 rule means having most key quotations memorised and using the text only to check accuracy or find a small number of additional references.',
        },
        {
          id: 'eix-lit-m7-q3',
          question: 'How long should you spend searching for quotations during the exam?',
          options: [
            'As long as needed',
            '10-15 minutes',
            '2-3 minutes maximum',
            'You should not use the text at all',
          ],
          correct: 2,
          explanation:
            'Limit quotation searching to 2-3 minutes. Spending more time than this eats into your writing time and suggests insufficient preparation.',
        },
        {
          id: 'eix-lit-m7-q4',
          question: 'Which component of the Edexcel IGCSE Literature exam is open book?',
          options: [
            'Paper 1 only',
            'Paper 2 only',
            'Both components',
            'Neither component',
          ],
          correct: 1,
          explanation:
            'Only Paper 2 (Modern Drama and Literary Heritage) is open book. Paper 1 (Poetry and Modern Prose) is a closed book exam.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 8
    // ──────────────────────────────────────────────
    {
      id: 'eix-lit-m8',
      title: 'Exam Strategy & Model Answers',
      duration: '30 mins',
      content: `
<p>This final module brings everything together with timing strategies and model answer analysis. The full exam comprises <span class="key-term">Paper 1 (2 hours, 90 marks, 60%)</span> and <span class="key-term">Paper 2 (1 hour 30 minutes, 60 marks, 40%)</span>. Every question is <span class="key-term">essay-based</span> — there are no extract-based questions on this specification.</p>

<h3>Timing Strategy: Paper 1</h3>
<ul>
  <li><strong>Section A</strong> (Unseen Poetry, 20 marks): approximately <strong>30 minutes</strong></li>
  <li><strong>Section B</strong> (Anthology Comparison, 30 marks): approximately <strong>40 minutes</strong></li>
  <li><strong>Section C</strong> (Modern Prose, 40 marks): approximately <strong>50 minutes</strong></li>
</ul>

<h3>Timing Strategy: Paper 2</h3>
<ul>
  <li><strong>Section A</strong> (Modern Drama, 30 marks): approximately <strong>45 minutes</strong></li>
  <li><strong>Section B</strong> (Literary Heritage, 30 marks): approximately <strong>45 minutes</strong></li>
</ul>

<div class="examiner-tip">Allocate time in proportion to marks. The most common reason students underperform is spending too long on earlier sections and rushing the final question. Practise sticking to time limits religiously.</div>

<h3>What Top-Band Responses Look Like</h3>
<p>Edexcel's top band (Level 5) descriptors consistently reward:</p>
<ul>
  <li><span class="key-term">Perceptive, critical analysis</span> — not just competent, but insightful</li>
  <li><span class="key-term">Precise, well-chosen evidence</span> — short quotations used with surgical accuracy</li>
  <li><span class="key-term">Sophisticated understanding</span> of writers' methods and their effects</li>
  <li><span class="key-term">Convincing, well-structured arguments</span> sustained throughout the essay</li>
</ul>

<div class="model-answer">
<strong>Model opening (Literary Heritage):</strong> "Shakespeare constructs Macbeth's soliloquy in Act 1 Scene 7 as a battlefield of the mind. The conditional 'If it were done when 'tis done' betrays Macbeth's awareness that murder cannot be so neatly contained, while the eruption of violent imagery — 'bloody instructions' that 'return / To plague th'inventor' — reveals a man arguing against his own ambition. For a Jacobean audience steeped in the doctrine of divine retribution, Macbeth's hesitation would signal not weakness but moral clarity, making his eventual choice all the more damning."
</div>

<h3>Final Checklist</h3>
<p>Before submitting each essay, quickly check:</p>
<ul>
  <li>Have I answered the specific question asked, not a generic essay on the text?</li>
  <li>Have I included analysis of language, form <em>and</em> structure?</li>
  <li>Are my quotations short, embedded and analysed?</li>
  <li>Have I used comparative connectives (Section B, Paper 1)?</li>
  <li>Have I integrated context where relevant (AO4 sections)?</li>
</ul>

<div class="common-mistake">Do not write a generic essay you have memorised and try to force it to fit the question. Examiners recognise pre-prepared responses instantly, and they will not score well because they do not address the specific question.</div>

<p>With thorough preparation, clear analytical writing and disciplined time management, you are well placed to achieve your best possible grade on this specification.</p>
`,
      quiz: [
        {
          id: 'eix-lit-m8-q1',
          question: 'How long is the Paper 1 exam?',
          options: ['1 hour', '1 hour 30 minutes', '2 hours', '2 hours 30 minutes'],
          correct: 2,
          explanation:
            'Paper 1 (Poetry and Modern Prose) lasts 2 hours and is worth 90 marks (60% of the total).',
        },
        {
          id: 'eix-lit-m8-q2',
          question: 'What is the most common reason students underperform in the exam?',
          options: [
            'Not knowing the texts',
            'Poor handwriting',
            'Spending too long on earlier sections and rushing the final question',
            'Using too many quotations',
          ],
          correct: 2,
          explanation:
            'Poor time management — spending too long on earlier sections — is the most common cause of underperformance. Allocate time in proportion to marks.',
        },
        {
          id: 'eix-lit-m8-q3',
          question: 'Are there any extract-based questions on the Edexcel IGCSE Literature exam?',
          options: [
            'Yes, in every section',
            'Only in Paper 1',
            'Only in Paper 2',
            'No — all questions are essay-based',
          ],
          correct: 3,
          explanation:
            'The Edexcel IGCSE English Literature specification uses essay-based questions throughout. There are no extract-based questions.',
        },
        {
          id: 'eix-lit-m8-q4',
          question: 'Why do examiners penalise pre-prepared, generic essays?',
          options: [
            'Because they are too long',
            'Because they do not address the specific question asked',
            'Because memorisation is not allowed',
            'Because they contain too many quotations',
          ],
          correct: 1,
          explanation:
            'Pre-prepared essays are penalised because they do not respond to the specific question. Examiners reward answers that are tailored to what is actually being asked.',
        },
      ],
    },
  ],

  // ──────────────────────────────────────────────
  // ASSESSMENT QUESTIONS
  // ──────────────────────────────────────────────
  assessmentQuestions: [
    {
      id: 'eix-lit-a1',
      question: 'Which assessment objective focuses on analysing language, form and structure?',
      options: ['AO1', 'AO2', 'AO3', 'AO4'],
      correct: 1,
      explanation:
        'AO2 requires you to analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology.',
    },
    {
      id: 'eix-lit-a2',
      question: 'How many poems are in the Edexcel IGCSE anthology?',
      options: ['12', '14', '16', '18'],
      correct: 2,
      explanation:
        'The anthology contains 16 poems spanning several centuries and a range of themes, from Shakespeare to contemporary poets.',
    },
    {
      id: 'eix-lit-a3',
      question: 'What percentage of the total mark does Paper 1 represent?',
      options: ['40%', '50%', '60%', '70%'],
      correct: 2,
      explanation:
        'Paper 1 (Poetry and Modern Prose) is worth 60% of the total mark (90 marks out of 150).',
    },
    {
      id: 'eix-lit-a4',
      question: 'Which component is open book?',
      options: ['Paper 1', 'Paper 2', 'Both components', 'Neither component'],
      correct: 1,
      explanation:
        'Paper 2 (Modern Drama and Literary Heritage) is open book — you may bring clean, unannotated copies of your prescribed texts.',
    },
    {
      id: 'eix-lit-a5',
      question: 'What does "integrated comparison" mean when writing about two poems?',
      options: [
        'Writing about one poem at a time',
        'Comparing both poems within each paragraph rather than writing about each separately',
        'Only writing about the similarities between poems',
        'Using quotations from both poems in your introduction',
      ],
      correct: 1,
      explanation:
        'An integrated comparison discusses both poems within each paragraph, comparing them on shared aspects to demonstrate genuine analytical comparison.',
    },
    {
      id: 'eix-lit-a6',
      question: 'In Paper 1 Section A, how many unseen poems must you analyse?',
      options: ['One', 'Two', 'Three', 'You choose from a selection'],
      correct: 0,
      explanation:
        'Section A requires analysis of one unseen poem. There is no comparison element in this section.',
    },
    {
      id: 'eix-lit-a7',
      question: 'Why should you refer to the playwright by name rather than treating characters as real people?',
      options: [
        'Because the examiner prefers formal language',
        'Because it keeps your response analytical and shows awareness of the text as a crafted work',
        'Because characters are fictional and therefore unimportant',
        'Because it saves time',
      ],
      correct: 1,
      explanation:
        'Referring to the playwright ("Miller presents...") keeps your response analytical and demonstrates awareness that characters are constructs, not real people.',
    },
    {
      id: 'eix-lit-a8',
      question: 'What does the "80/20 rule" refer to in the open book exam?',
      options: [
        'Spending 80% on analysis and 20% on context',
        'Having 80% of quotations memorised and using the text for the remaining 20%',
        'Writing 80% about drama and 20% about heritage',
        'Allocating 80% of time to writing and 20% to reading',
      ],
      correct: 1,
      explanation:
        'The 80/20 rule means memorising most key quotations and only using the physical text to verify or find a small number of additional references.',
    },
    {
      id: 'eix-lit-a9',
      question: 'Which poetic form does Dylan Thomas use in "Do not go gentle into that good night"?',
      options: ['Petrarchan sonnet', 'Villanelle', 'Ballad', 'Ode'],
      correct: 1,
      explanation:
        'Thomas uses the villanelle, characterised by 19 lines, two repeating refrains and a strict rhyme scheme that creates an insistent, cyclical quality.',
    },
    {
      id: 'eix-lit-a10',
      question: 'What is the total duration of Paper 2?',
      options: ['1 hour', '1 hour 30 minutes', '2 hours', '2 hours 30 minutes'],
      correct: 1,
      explanation:
        'Paper 2 lasts 1 hour 30 minutes and is worth 60 marks (40% of the total).',
    },
    {
      id: 'eix-lit-a11',
      question: 'What does AO4 assess?',
      options: [
        'Spelling and grammar',
        'Comparison between texts',
        'The relationship between a text and its contexts',
        'Use of quotations',
      ],
      correct: 2,
      explanation:
        'AO4 assesses your understanding of the relationship between texts and the contexts in which they were written — social, historical, cultural and literary.',
    },
    {
      id: 'eix-lit-a12',
      question: 'Why is it important to embed quotations within your sentences?',
      options: [
        'Because standalone quotations are grammatically incorrect',
        'Because embedding demonstrates fluency and integrates evidence into your argument',
        'Because the mark scheme requires a minimum number of embedded quotations',
        'Because embedded quotations are easier to memorise',
      ],
      correct: 1,
      explanation:
        'Embedding quotations within your sentences creates fluency and shows that evidence is integrated into your argument, not simply dropped in.',
    },
    {
      id: 'eix-lit-a13',
      question: 'What type of question format does the Edexcel IGCSE Literature exam use?',
      options: [
        'Multiple choice',
        'Extract-based questions',
        'Essay-based questions throughout',
        'A mixture of short answer and essay',
      ],
      correct: 2,
      explanation:
        'All questions on the Edexcel IGCSE English Literature exam are essay-based. There are no extract-based or short-answer questions.',
    },
    {
      id: 'eix-lit-a14',
      question: 'Which sections of the exam test AO3 (comparison)?',
      options: [
        'Paper 1 Section A only',
        'Paper 1 Section B only',
        'Paper 2 Section A and B',
        'All sections',
      ],
      correct: 1,
      explanation:
        'AO3 (relationships between texts) is tested in Paper 1 Section B, where you compare two anthology poems.',
    },
    {
      id: 'eix-lit-a15',
      question: 'What makes a "clean copy" acceptable for the open book exam?',
      options: [
        'A copy with only pencil annotations',
        'A copy with no annotations, highlighting, underlining or sticky tabs',
        'Any copy approved by your teacher',
        'A copy with highlighted key quotations only',
      ],
      correct: 1,
      explanation:
        'A clean copy must have absolutely no annotations, highlighting, underlining or sticky tabs. Any markings could result in the text being confiscated.',
    },
    {
      id: 'eix-lit-a16',
      question: 'How many marks is Paper 1 Section C (Modern Prose) worth?',
      options: ['20 marks', '30 marks', '40 marks', '50 marks'],
      correct: 2,
      explanation:
        'Section C is worth 40 marks, making it the highest-weighted section on Paper 1.',
    },
    {
      id: 'eix-lit-a17',
      question: 'Which of the following is a modern drama set text for this specification?',
      options: [
        'Romeo and Juliet',
        'Pride and Prejudice',
        'An Inspector Calls',
        'To Kill a Mockingbird',
      ],
      correct: 2,
      explanation:
        'An Inspector Calls (Priestley) is one of the modern drama options for Paper 2 Section A. Romeo and Juliet is literary heritage; the others are prose.',
    },
    {
      id: 'eix-lit-a18',
      question: 'What is the best way to begin a comparison paragraph?',
      options: [
        'With a long quotation from the first poem',
        'With a comparative point about a shared theme or technique',
        'By defining a literary term',
        'By listing the differences between the two poets',
      ],
      correct: 1,
      explanation:
        'Begin with a comparative point about a shared theme or aspect. This establishes the basis for comparison before you analyse each poem.',
    },
    {
      id: 'eix-lit-a19',
      question: 'Why should you avoid writing a pre-prepared, memorised essay in the exam?',
      options: [
        'Because memorisation is against the rules',
        'Because it will be too short',
        'Because it will not address the specific question and examiners recognise generic responses',
        'Because pre-prepared essays always contain incorrect quotations',
      ],
      correct: 2,
      explanation:
        'Pre-prepared essays do not respond to the specific question asked. Examiners reward responses that are tailored to the particular focus of the question.',
    },
    {
      id: 'eix-lit-a20',
      question: 'How should you allocate time across Paper 1?',
      options: [
        'Equal time for each section',
        'Most time on Section A (Unseen Poetry)',
        'In proportion to marks: ~30 min Section A, ~40 min Section B, ~50 min Section C',
        'All time on the section you find easiest',
      ],
      correct: 2,
      explanation:
        'Allocate time in proportion to marks: approximately 30 minutes for Section A (20 marks), 40 minutes for Section B (30 marks) and 50 minutes for Section C (40 marks).',
    },
  ],
};

export default [edexcelIgcseLit];
