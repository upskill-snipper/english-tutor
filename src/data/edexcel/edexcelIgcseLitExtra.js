const edexcelIgcseLitUnseen = {
  id: 'edexcel-igcse-lit-unseen',
  title: 'IGCSE Literature: Unseen Analysis',
  subtitle: 'Poetry & Prose Unseen Techniques — Spec 4ET1',
  tier: 'IGCSE',
  board: 'Edexcel',
  specCode: '4ET1',
  price: 49,
  duration: '4 hours',
  level: 'Intermediate',
  description:
    'Develop systematic approaches to unseen poetry and prose analysis for the Edexcel IGCSE Literature exam.',
  color: 'from-red-700 to-red-900',

  moduleList: [
    // ──────────────────────────────────────────────
    // MODULE 1
    // ──────────────────────────────────────────────
    {
      id: 'eix-unseen-m1',
      title: 'Approaching Unseen Poetry',
      duration: '40 mins',
      content: `
<p>Unseen poetry is one of the most challenging — and rewarding — parts of the Edexcel IGCSE Literature exam. Because you cannot prepare the specific text in advance, success depends entirely on having a <span class="key-term">reliable method</span> that you can apply to any poem placed in front of you. This module introduces the strategies that will form the foundation of your unseen analysis toolkit.</p>

<h3>The First Read: Absorb, Don't Analyse</h3>
<p>When you first encounter an unseen poem, resist the temptation to start underlining immediately. Your first read should be about <span class="key-term">absorbing the whole</span>. Ask yourself three simple questions: What is the poem about on the surface? What is the overall mood or tone? Who is the speaker and who are they addressing? These initial impressions are surprisingly valuable — they give you a framework on which to hang your detailed analysis later.</p>

<div class="examiner-tip">Examiners report that candidates who rush into feature-spotting without establishing a sense of the poem's overall meaning frequently produce disjointed, superficial responses. Take thirty seconds to absorb the poem before you pick up your pen.</div>

<h3>The Second Read: Annotate Strategically</h3>
<p>On your second pass, begin to <span class="key-term">annotate</span>. Circle or underline words and phrases that strike you — unusual vocabulary, vivid images, words with strong connotations. Mark shifts in tone, changes in rhythm, and any structural features that stand out such as enjambment, caesura, or stanza breaks. Use the margins to jot brief notes about <em>why</em> these features are significant, not just <em>what</em> they are.</p>

<h3>The Third Read: Find Patterns and Connections</h3>
<p>Your third reading is where analysis truly begins. Look for <span class="key-term">patterns</span>: repeated images, a developing metaphor, contrasts between the opening and closing stanzas, or a shift in the speaker's attitude. These patterns often reveal the poem's deeper meaning and give your essay a sense of <span class="key-term">coherent argument</span> rather than a list of disconnected observations.</p>

<div class="common-mistake">A common error is treating annotation as the same thing as analysis. Underlining a metaphor is not analysis; explaining what that metaphor suggests about the speaker's feelings and how it connects to the poem's wider meaning is analysis. Always push beyond identification to interpretation.</div>

<h3>Building Your Annotation Shorthand</h3>
<p>Develop a personal system of symbols to speed up your annotation: a star for key images, an arrow for enjambment, a wavy line for sound effects, a question mark for ambiguity. The faster you annotate, the more time you have for writing. Practise this shorthand regularly so it becomes second nature under exam conditions. Remember that annotation is a means to an end — the end is a well-structured, perceptive essay.</p>

<p>With these three reads complete, you will have a clear sense of the poem's subject, tone, and key techniques. In the next module, we will examine the specific poetic techniques you should look for and how to write about them with precision.</p>
`,
      quiz: [
        {
          id: 'eix-unseen-m1-q1',
          question: 'What should your first read of an unseen poem focus on?',
          options: [
            'Identifying every poetic technique',
            'Absorbing the overall meaning, mood and speaker',
            'Writing your introduction',
            'Counting the syllables in each line',
          ],
          correct: 1,
          explanation:
            'The first read should focus on absorbing the poem as a whole — its subject, mood and speaker — before you begin detailed annotation.',
        },
        {
          id: 'eix-unseen-m1-q2',
          question: 'How many reads are recommended before you begin writing?',
          options: ['One', 'Two', 'Three', 'Four'],
          correct: 2,
          explanation:
            'Three reads are recommended: the first to absorb, the second to annotate, and the third to find patterns and connections.',
        },
        {
          id: 'eix-unseen-m1-q3',
          question: 'What is the difference between annotation and analysis?',
          options: [
            'There is no difference',
            'Annotation identifies features; analysis explains their effects and significance',
            'Annotation is done in the exam; analysis is done at home',
            'Analysis is shorter than annotation',
          ],
          correct: 1,
          explanation:
            'Annotation identifies features on the page, while analysis explains what those features mean, why the poet chose them, and what effect they create.',
        },
        {
          id: 'eix-unseen-m1-q4',
          question: 'Why is developing an annotation shorthand useful?',
          options: [
            'It impresses the examiner',
            'It speeds up the annotation process, leaving more time for writing',
            'It is a requirement of the specification',
            'It makes the poem easier to memorise',
          ],
          correct: 1,
          explanation:
            'A personal shorthand system speeds up annotation so you can spend more of your limited exam time on writing a detailed, well-structured response.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 2
    // ──────────────────────────────────────────────
    {
      id: 'eix-unseen-m2',
      title: 'Analysing Poetic Techniques',
      duration: '40 mins',
      content: `
<p>Once you have read and annotated an unseen poem, you need to identify and analyse the specific techniques the poet has used. This module covers the four main categories of poetic technique that examiners expect you to explore: <span class="key-term">imagery</span>, <span class="key-term">sound</span>, <span class="key-term">structure</span>, and <span class="key-term">form</span>. Understanding these categories gives you a systematic way to approach any poem.</p>

<h3>Imagery: Pictures in Words</h3>
<p>Imagery is the poet's use of language to create vivid pictures, sensations, or ideas in the reader's mind. The most common types are <span class="key-term">metaphor</span> (a direct comparison), <span class="key-term">simile</span> (a comparison using "like" or "as"), and <span class="key-term">personification</span> (giving human qualities to non-human things). Look also for <span class="key-term">symbolism</span>, where an object or image represents something beyond its literal meaning, and <span class="key-term">extended metaphor</span>, where a single comparison is developed across several lines or the whole poem.</p>

<div class="text-extract">
  The sea is a hungry dog,<br>
  Giant and grey.<br>
  He rolls on the beach all day.
  <div class="source">— James Reeves, "The Sea"</div>
</div>

<p>Here Reeves uses an <span class="key-term">extended metaphor</span>, comparing the sea to a hungry dog throughout the poem. The personification creates a sense of the sea as a living, restless force — playful yet potentially dangerous.</p>

<h3>Sound: The Music of Poetry</h3>
<p>Sound effects are a vital part of how a poem creates meaning. Key techniques include <span class="key-term">alliteration</span> (repeated consonant sounds at the start of words), <span class="key-term">sibilance</span> (repeated "s" sounds, often creating a soft or sinister effect), <span class="key-term">assonance</span> (repeated vowel sounds), and <span class="key-term">onomatopoeia</span> (words that imitate sounds). Consider also <span class="key-term">rhythm</span> and <span class="key-term">rhyme</span>: a regular rhythm might suggest control or formality, while an irregular rhythm could mirror emotional turmoil or natural speech.</p>

<div class="examiner-tip">When discussing sound, always connect the sound effect to meaning. Saying "the poet uses alliteration" earns very few marks. Saying "the harsh plosive alliteration of 'bitter black bile' mirrors the speaker's anger" shows genuine analytical skill.</div>

<h3>Structure: How the Poem Is Organised</h3>
<p>Structure refers to how the poem is arranged on the page and how ideas develop. Key structural features include <span class="key-term">enjambment</span> (lines running on without punctuation, creating pace or urgency), <span class="key-term">caesura</span> (a pause mid-line, often creating a dramatic break), <span class="key-term">volta</span> (a turn or shift in argument or mood), and <span class="key-term">stanza breaks</span> (which may signal shifts in time, tone or focus). Consider the poem's opening and closing lines — how does the ending relate to the beginning?</p>

<h3>Form: The Poem's Blueprint</h3>
<p>Form is the overall design or template of the poem. Recognising common forms helps you comment on the poet's choices. A <span class="key-term">sonnet</span> (14 lines, often about love or argument) carries centuries of convention. <span class="key-term">Free verse</span> (no regular rhyme or metre) may suggest freedom or fragmentation. A <span class="key-term">dramatic monologue</span> reveals character through a single speaker. A <span class="key-term">ballad</span> tells a story with a regular rhythm and rhyme scheme. Even if you cannot name the form, you can describe its features and their effects.</p>

<div class="common-mistake">Avoid listing techniques without analysis. A paragraph that says "the poet uses a metaphor, alliteration, and enjambment" without explaining the effect of each is feature-spotting, not analysis. Quality of analysis always beats quantity of identification.</div>

<p>In the next module, you will learn how to turn this technical knowledge into a well-structured essay that meets the assessment objectives.</p>
`,
      quiz: [
        {
          id: 'eix-unseen-m2-q1',
          question: 'What is an extended metaphor?',
          options: [
            'A simile that uses "as" instead of "like"',
            'A single comparison developed across several lines or the whole poem',
            'A metaphor that includes personification',
            'A metaphor found at the end of a poem',
          ],
          correct: 1,
          explanation:
            'An extended metaphor is a single comparison that is sustained and developed across several lines or even the entire poem, creating a rich and layered image.',
        },
        {
          id: 'eix-unseen-m2-q2',
          question: 'What effect does sibilance typically create?',
          options: [
            'A loud, aggressive tone',
            'A soft, whispering or sinister quality',
            'A sense of humour',
            'A formal, elevated register',
          ],
          correct: 1,
          explanation:
            'Sibilance — the repetition of "s" sounds — often creates a soft, whispering quality that can suggest gentleness, secrecy, or something sinister depending on context.',
        },
        {
          id: 'eix-unseen-m2-q3',
          question: 'What is a volta in poetry?',
          options: [
            'A type of rhyme scheme',
            'A turn or shift in the poem\'s argument, mood, or direction',
            'The final line of a sonnet',
            'A repeated refrain',
          ],
          correct: 1,
          explanation:
            'A volta is a turn or shift in the poem — a change in argument, mood, tone, or direction. It is commonly found in sonnets but can appear in any form.',
        },
        {
          id: 'eix-unseen-m2-q4',
          question: 'Why is "feature-spotting" a weak approach to analysis?',
          options: [
            'Because examiners do not recognise technical terms',
            'Because it identifies techniques without explaining their effects or significance',
            'Because it takes too long',
            'Because you should only discuss one technique per essay',
          ],
          correct: 1,
          explanation:
            'Feature-spotting simply names techniques without exploring their effects on meaning or the reader. Examiners reward responses that explain why a technique matters, not just that it exists.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 3
    // ──────────────────────────────────────────────
    {
      id: 'eix-unseen-m3',
      title: 'Writing the Unseen Poetry Essay',
      duration: '40 mins',
      content: `
<p>Having read, annotated, and identified key techniques, you now need to transform your ideas into a coherent, well-structured essay. This module focuses on <span class="key-term">paragraph structure</span>, the assessment objective focus required by Edexcel, and the practical habits that turn good analysis into top-band responses.</p>

<h3>The Assessment Objective: AO2</h3>
<p>The unseen poetry question on the Edexcel IGCSE Literature exam tests <span class="key-term">AO2</span>: "Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate." Every sentence you write should serve this objective. You are not being asked to retell the poem, give your personal opinion, or discuss the poet's biography. You are being asked to analyse <em>how</em> the poem works and <em>what effects</em> the poet creates.</p>

<h3>Paragraph Structure: PEAL in Practice</h3>
<p>The <span class="key-term">PEAL</span> framework provides a reliable structure for each analytical paragraph:</p>
<ul>
  <li><strong>Point</strong>: Open with a clear analytical statement that responds to the question. For example: "The poet uses natural imagery to convey a sense of renewal and hope."</li>
  <li><strong>Evidence</strong>: Embed a short, well-chosen quotation within your sentence. Do not copy out long passages — select the most striking words or phrase.</li>
  <li><strong>Analysis</strong>: This is the heart of your paragraph. Explore the connotations of individual words, the effect of the technique, and how it contributes to the poem's meaning. Use phrases like "this suggests," "the connotations of," "this creates an effect of."</li>
  <li><strong>Link</strong>: Connect your point back to the question or forward to your next idea, creating a sense of progression through your essay.</li>
</ul>

<div class="model-answer">
<strong>Example PEAL paragraph:</strong> "The speaker's isolation is reinforced through the image of 'the empty chair that faced the wall.' The adjective 'empty' connotes absence and loss, while the detail that the chair 'faced the wall' — turned away from the room and from human company — suggests a deliberate withdrawal from life. This domestic image is all the more powerful for its ordinariness: the reader recognises the scene and feels the weight of loneliness within it. The poet thereby transforms a mundane object into a symbol of grief."
</div>

<h3>Planning Before Writing</h3>
<p>Spend <span class="key-term">five minutes planning</span> before you begin writing. Jot down three or four key points you want to make, each linked to a specific quotation. Arrange them in a logical order — perhaps moving from the poem's opening to its close, or from surface meaning to deeper interpretation. A brief plan prevents repetition and ensures your essay has a clear line of argument.</p>

<div class="examiner-tip">Top-band responses do not simply work through the poem line by line. They are organised around analytical points, selecting evidence from different parts of the poem to support each point. This shows the examiner that you understand the poem as a whole, not just its individual lines.</div>

<h3>Openings and Conclusions</h3>
<p>Your opening sentence should address the question directly and signal your overall interpretation. Avoid generic openings like "In this poem the poet uses many techniques." Instead, try something specific: "Through contrasting images of light and darkness, the poet explores the tension between hope and despair." Your conclusion should briefly draw your argument together — perhaps noting an overarching effect or a final insight — but keep it short. A sentence or two is enough; do not waste time repeating what you have already said.</p>

<div class="common-mistake">Do not use the conclusion to introduce new points. If you have a new idea, add it as a new paragraph before the conclusion. The conclusion should consolidate, not expand.</div>

<p>In the next module, we turn from poetry to prose: you will learn how to approach unseen prose passages with the same systematic confidence.</p>
`,
      quiz: [
        {
          id: 'eix-unseen-m3-q1',
          question: 'Which assessment objective does the unseen poetry question test?',
          options: ['AO1', 'AO2', 'AO3', 'AO4'],
          correct: 1,
          explanation:
            'The unseen poetry question tests AO2: analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.',
        },
        {
          id: 'eix-unseen-m3-q2',
          question: 'What does the "E" in PEAL stand for?',
          options: ['Explanation', 'Evidence', 'Example', 'Effect'],
          correct: 1,
          explanation:
            'In the PEAL framework, E stands for Evidence — a short, well-chosen quotation embedded within your sentence to support your analytical point.',
        },
        {
          id: 'eix-unseen-m3-q3',
          question: 'How long should you spend planning your unseen poetry essay?',
          options: [
            'No planning is needed',
            'About five minutes',
            'At least fifteen minutes',
            'Half of the available time',
          ],
          correct: 1,
          explanation:
            'Spending about five minutes planning helps you organise three or four key points in a logical order, preventing repetition and ensuring a clear line of argument.',
        },
        {
          id: 'eix-unseen-m3-q4',
          question: 'What is the problem with a line-by-line approach to unseen poetry?',
          options: [
            'It takes too little time',
            'It does not show understanding of the poem as a whole',
            'It is against the exam rules',
            'It produces too many quotations',
          ],
          correct: 1,
          explanation:
            'A line-by-line approach often becomes a running commentary rather than an argument. Top-band responses are organised around analytical points, drawing evidence from across the poem.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 4
    // ──────────────────────────────────────────────
    {
      id: 'eix-unseen-m4',
      title: 'Approaching Unseen Prose',
      duration: '40 mins',
      content: `
<p>While unseen poetry is a prominent feature of the Edexcel IGCSE Literature exam, the ability to analyse unseen prose is equally important for developing your overall literary skills. Prose analysis requires you to pay attention to <span class="key-term">narrative voice</span>, <span class="key-term">characterisation</span>, and <span class="key-term">setting</span> — elements that work differently in prose than in poetry. This module equips you with a systematic method for approaching any unseen prose passage.</p>

<h3>Narrative Voice: Who Is Telling the Story?</h3>
<p>The first thing to establish when reading an unseen prose extract is the <span class="key-term">narrative perspective</span>. Is the narrator a character within the story (first person) or an outside observer (third person)? Is the narration <span class="key-term">reliable</span> or <span class="key-term">unreliable</span>? A first-person narrator gives us intimate access to their thoughts but limits our perspective; a third-person omniscient narrator can reveal the inner lives of multiple characters. Consider also the narrator's <span class="key-term">tone</span>: is it detached and objective, warmly sympathetic, bitterly ironic, or something else entirely?</p>

<div class="text-extract">
  I did not want to go. Every step towards the station felt heavier than the last, as if the pavement itself were conspiring to hold me back. But I went, because that is what people do when they have no choices left — they move forward, not out of courage but out of a failure to think of anything else.
  <div class="source">— Original example for analysis practice</div>
</div>

<p>This first-person narrator reveals their reluctance through physical sensation ("every step… felt heavier") and a darkly ironic philosophy ("not out of courage but out of a failure to think of anything else"). The voice is self-aware yet resigned, creating a tone of weary acceptance.</p>

<h3>Characterisation: How Characters Are Presented</h3>
<p>In prose, characters are revealed through a combination of <span class="key-term">direct description</span> (the narrator tells us what a character is like), <span class="key-term">dialogue</span> (what characters say and how they say it), <span class="key-term">action</span> (what characters do), and <span class="key-term">internal thought</span> (what characters think and feel). Pay close attention to the <em>method</em> of characterisation: a writer who shows a character's cruelty through their dialogue rather than telling us they are cruel creates a more powerful and nuanced effect.</p>

<div class="examiner-tip">When analysing characterisation, focus on the writer's choices. Instead of saying "the character is angry," say "the writer conveys the character's anger through the short, clipped sentences and the aggressive verb 'snarled.'" This keeps your focus on the writer's craft, which is what AO2 requires.</div>

<h3>Setting: More Than Just Background</h3>
<p>Setting in prose is rarely just a backdrop. It often reflects or contrasts with the characters' emotions, establishes atmosphere, and contributes to the text's themes. Look for <span class="key-term">pathetic fallacy</span> (where the environment mirrors a character's mood), <span class="key-term">symbolic settings</span> (a decaying house representing moral decline, for example), and the way a writer uses <span class="key-term">sensory detail</span> — sight, sound, smell, touch, taste — to immerse the reader in the world of the text.</p>

<h3>Language in Prose: The Same Skills, Different Context</h3>
<p>Many of the language analysis skills you use for poetry apply equally to prose. Look for <span class="key-term">figurative language</span> (metaphor, simile, personification), <span class="key-term">word choice</span> (the connotations of specific words), <span class="key-term">sentence structure</span> (short sentences for tension, long flowing sentences for description or reflection), and <span class="key-term">repetition</span> (which may emphasise obsession, monotony, or emotional intensity). The key difference is that prose analysis must also account for narrative elements like voice, dialogue, and pacing.</p>

<div class="common-mistake">Do not ignore the structure of a prose passage. Just as poems have structural features, prose passages have paragraph breaks, shifts in focus, changes in pace, and narrative turning points. Commenting on these shows the examiner that you understand how the passage is constructed, not just what it says.</div>

<p>In the next module, you will learn how to compare two unseen texts — a skill that draws on both your poetry and prose analysis abilities.</p>
`,
      quiz: [
        {
          id: 'eix-unseen-m4-q1',
          question: 'What is the first thing to establish when reading an unseen prose extract?',
          options: [
            'The setting',
            'The narrative perspective',
            'The number of characters',
            'The historical context',
          ],
          correct: 1,
          explanation:
            'Establishing the narrative perspective — who is telling the story, from what viewpoint, and in what tone — gives you a framework for understanding everything else in the passage.',
        },
        {
          id: 'eix-unseen-m4-q2',
          question: 'What is the difference between "showing" and "telling" in characterisation?',
          options: [
            'Showing uses adjectives; telling uses verbs',
            'Showing reveals character through dialogue and action; telling states qualities directly',
            'Showing is used in poetry; telling is used in prose',
            'There is no meaningful difference',
          ],
          correct: 1,
          explanation:
            'Showing reveals character indirectly through dialogue, action and thought, while telling states qualities directly. Showing is generally considered more effective and nuanced.',
        },
        {
          id: 'eix-unseen-m4-q3',
          question: 'What is pathetic fallacy?',
          options: [
            'A logical error in an argument',
            'When the natural environment mirrors a character\'s emotions',
            'A type of unreliable narration',
            'A technique unique to drama',
          ],
          correct: 1,
          explanation:
            'Pathetic fallacy is when the natural environment or weather reflects or mirrors a character\'s emotional state — for example, a storm during a moment of anger.',
        },
        {
          id: 'eix-unseen-m4-q4',
          question: 'Why should you comment on the structure of a prose passage?',
          options: [
            'Because structure is only relevant to poetry',
            'Because it shows the examiner you understand how the passage is constructed',
            'Because the mark scheme requires at least two structural points',
            'Because prose passages always use enjambment',
          ],
          correct: 1,
          explanation:
            'Commenting on prose structure — paragraph breaks, shifts in focus, pacing, narrative turning points — demonstrates that you understand how the writer has crafted the passage, not just what it contains.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 5
    // ──────────────────────────────────────────────
    {
      id: 'eix-unseen-m5',
      title: 'Comparing Unseen Texts',
      duration: '40 mins',
      content: `
<p>Comparison is a higher-order skill that demonstrates your ability to see connections and distinctions between texts. Whether you are comparing two unseen poems, two prose passages, or a poem and a prose extract, the principles are the same: you need a <span class="key-term">comparison framework</span>, effective <span class="key-term">linking methods</span>, and the discipline to discuss both texts in every paragraph. This module gives you the tools to compare any two unseen texts with confidence.</p>

<h3>Choosing a Comparison Framework</h3>
<p>Before you begin writing, decide on the <span class="key-term">basis of your comparison</span>. The best comparisons are organised around shared aspects rather than structured as "Text A then Text B." Consider these possible frameworks:</p>
<ul>
  <li><strong>Theme:</strong> Both texts deal with loss, but one presents it as painful while the other finds acceptance.</li>
  <li><strong>Tone:</strong> One text is angry and confrontational; the other is reflective and measured.</li>
  <li><strong>Technique:</strong> Both writers use imagery drawn from nature, but to very different effects.</li>
  <li><strong>Structure:</strong> One text builds to a climax; the other is circular, returning to where it began.</li>
  <li><strong>Perspective:</strong> One uses a first-person voice for intimacy; the other uses third person for detachment.</li>
</ul>

<div class="examiner-tip">The strongest comparison essays use two or three of these frameworks across their paragraphs, creating a rich, multi-layered response. You do not need to cover every possible comparison — depth is more valuable than breadth.</div>

<h3>The Integrated Comparison Method</h3>
<p>Each paragraph should discuss <span class="key-term">both texts</span>. Begin with a comparative point, analyse a feature or quotation from the first text, then pivot to the second text using a comparative connective. This integrated structure shows the examiner that you are genuinely comparing, not simply writing two separate analyses side by side.</p>

<h3>Comparative Connectives</h3>
<p>Use a range of connectives to link your discussion of the two texts. For similarities: <span class="key-term">"similarly," "in the same way," "both writers," "this is echoed in"</span>. For differences: <span class="key-term">"in contrast," "whereas," "however," "while Text A… Text B…," "conversely"</span>. For nuanced connections: <span class="key-term">"although both texts… the effect is markedly different," "while they share a concern with… their approaches diverge"</span>. Varying your connectives prevents your essay from feeling repetitive.</p>

<div class="model-answer">
<strong>Example comparison paragraph:</strong> "Both writers use the motif of water to explore emotional turbulence. In Text A, the 'rising tide that swallowed the shore' suggests emotions that are overwhelming and destructive, the verb 'swallowed' connoting consumption and loss of control. In contrast, the 'still pond' in Text B represents suppressed emotion — the calm surface concealing unseen depths. Where Text A presents emotion as an external, uncontrollable force, Text B internalises it, creating a sense of quiet, unspoken suffering."
</div>

<h3>Linking Methods: Beyond Simple Comparison</h3>
<p>The most sophisticated comparisons do more than note similarities and differences. They explore <span class="key-term">why</span> the writers might have made different choices and <span class="key-term">what effect</span> those differences create for the reader. Consider the historical or cultural context that might explain a different perspective. Consider how the form of each text — a poem's compressed imagery versus a prose passage's extended narrative — shapes the way meaning is communicated. These deeper connections elevate your response from competent to excellent.</p>

<div class="common-mistake">Avoid the "bolt-on" comparison, where you write a full analysis of Text A and then add a paragraph saying "Text B is similar because…" This structure does not demonstrate genuine comparison. Every paragraph must engage with both texts.</div>

<p>Your final module will focus on managing the unseen section under timed conditions — turning your analytical skills into exam-ready performance.</p>
`,
      quiz: [
        {
          id: 'eix-unseen-m5-q1',
          question: 'What is the best way to structure a comparison essay?',
          options: [
            'Text A in full, then Text B in full',
            'An integrated approach where every paragraph discusses both texts',
            'Alternate paragraphs: one on Text A, one on Text B',
            'Focus only on the text you find more interesting',
          ],
          correct: 1,
          explanation:
            'An integrated approach where every paragraph discusses both texts demonstrates genuine comparison. The "Text A then Text B" structure produces two separate analyses rather than a true comparison.',
        },
        {
          id: 'eix-unseen-m5-q2',
          question: 'Which of the following is a comparative connective for showing difference?',
          options: [
            '"Similarly"',
            '"In the same way"',
            '"In contrast"',
            '"This is echoed in"',
          ],
          correct: 2,
          explanation:
            '"In contrast" signals a difference between the two texts. "Similarly," "in the same way," and "this is echoed in" all signal similarity.',
        },
        {
          id: 'eix-unseen-m5-q3',
          question: 'What makes a comparison "sophisticated" rather than just competent?',
          options: [
            'Using longer quotations',
            'Exploring why writers made different choices and what effect those differences create',
            'Discussing more than five techniques',
            'Writing a longer conclusion',
          ],
          correct: 1,
          explanation:
            'Sophisticated comparisons go beyond noting similarities and differences to explore the reasons behind different choices and the effects those differences create for the reader.',
        },
        {
          id: 'eix-unseen-m5-q4',
          question: 'What is a "bolt-on" comparison and why should it be avoided?',
          options: [
            'A comparison that uses too many connectives',
            'A full analysis of one text with a brief comparison added at the end, which fails to demonstrate genuine comparative skill',
            'A comparison that focuses only on differences',
            'A comparison written without quotations',
          ],
          correct: 1,
          explanation:
            'A bolt-on comparison writes about one text in full and then adds a brief comparison to the second text. This fails to demonstrate genuine comparative skill because the texts are not discussed together throughout.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 6
    // ──────────────────────────────────────────────
    {
      id: 'eix-unseen-m6',
      title: 'Timed Practice Strategies',
      duration: '40 mins',
      content: `
<p>All the analytical skill in the world is wasted if you cannot deploy it effectively under exam conditions. The unseen section of the Edexcel IGCSE Literature exam requires you to read, annotate, plan, and write within a strict time limit. This module focuses on <span class="key-term">time management</span>, <span class="key-term">prioritisation</span>, and the practical strategies that turn your skills into marks on the day.</p>

<h3>Know Your Timings</h3>
<p>The unseen poetry question on Paper 1 Section A is worth <span class="key-term">20 marks</span>, and you should allocate approximately <span class="key-term">30 minutes</span> to it. Within those 30 minutes, a reliable breakdown is:</p>
<ul>
  <li><strong>5 minutes</strong>: Three reads and annotation</li>
  <li><strong>3 minutes</strong>: Planning your three or four key points</li>
  <li><strong>20 minutes</strong>: Writing your response</li>
  <li><strong>2 minutes</strong>: Checking and correcting</li>
</ul>
<p>Practise this timing repeatedly until it becomes instinctive. Use a stopwatch during practice sessions so you develop a feel for how long each stage should take.</p>

<div class="examiner-tip">Examiners consistently note that candidates who run out of time on later sections often spent too long on the unseen question. Discipline in Section A protects your performance across the whole paper.</div>

<h3>Prioritising Under Pressure</h3>
<p>When time is limited, you must <span class="key-term">prioritise quality over quantity</span>. Three well-developed PEAL paragraphs will score higher than five rushed, superficial ones. If you feel pressed for time, focus on your strongest points — the ones with the clearest quotations and the most to say. It is better to write three excellent paragraphs than four mediocre ones and an incomplete fifth.</p>

<h3>What to Do If You Get Stuck</h3>
<p>Every student encounters poems that feel baffling at first. If this happens, do not panic. Return to the basics: What is the subject? What is the mood? Who is speaking? Even a poem that seems impenetrable will yield something to these simple questions. Focus on what you <em>can</em> see — a striking image, an unusual word choice, a shift in tone — and build your analysis outward from there. You do not need to understand every line to write a strong response.</p>

<div class="common-mistake">Some candidates spend so long trying to "decode" a difficult poem that they leave insufficient time for writing. Remember: you are assessed on your written analysis, not on your ability to solve every ambiguity in the poem. Write about what you understand with confidence.</div>

<h3>Building Exam Stamina</h3>
<p>The IGCSE Literature exam is long and demanding. Build your stamina by practising <span class="key-term">full timed papers</span>, not just individual sections. Your concentration and quality of writing in the final hour of the exam will determine your grade as much as your performance in the first hour. Regular timed practice — at least one full paper per fortnight in the months before the exam — trains your brain to sustain analytical focus over an extended period.</p>

<h3>The Revision Cycle</h3>
<p>After each timed practice, <span class="key-term">review your work critically</span>. Ask yourself: Did I address the question? Did every paragraph have a clear point, evidence, and analysis? Did I manage my time effectively? Identify one specific area to improve and focus on it in your next practice. This cycle of practice, review, and targeted improvement is far more effective than simply reading revision notes.</p>

<div class="examiner-tip">Keep a log of your timed practice scores and the feedback you give yourself. Over time, you will see patterns — perhaps you consistently rush your conclusions, or neglect structural analysis. Addressing these patterns systematically is the fastest route to improvement.</div>

<p>You now have a complete toolkit for unseen analysis: a reading method, technical knowledge, essay structure, prose analysis skills, comparison frameworks, and timed practice strategies. The final step is to put them all into practice — repeatedly, rigorously, and with honest self-assessment.</p>
`,
      quiz: [
        {
          id: 'eix-unseen-m6-q1',
          question: 'How long should you spend on the unseen poetry question (Section A)?',
          options: [
            'About 15 minutes',
            'About 30 minutes',
            'About 45 minutes',
            'As long as you need',
          ],
          correct: 1,
          explanation:
            'Section A is worth 20 marks and you should allocate approximately 30 minutes to it, leaving adequate time for the higher-weighted sections that follow.',
        },
        {
          id: 'eix-unseen-m6-q2',
          question: 'What should you do if you encounter a poem that seems impenetrable?',
          options: [
            'Skip it and move on to the next section',
            'Spend extra time decoding every line before writing',
            'Focus on what you can see — subject, mood, key images — and build outward',
            'Write about a different poem you have studied',
          ],
          correct: 2,
          explanation:
            'When a poem seems difficult, return to the basics — subject, mood, speaker — and focus on what you can identify. You do not need to understand every line to write a strong response.',
        },
        {
          id: 'eix-unseen-m6-q3',
          question: 'Why is it better to write three well-developed paragraphs than five rushed ones?',
          options: [
            'Because the mark scheme caps you at three paragraphs',
            'Because quality of analysis scores higher than quantity of points',
            'Because five paragraphs would exceed the word limit',
            'Because the examiner only reads the first three paragraphs',
          ],
          correct: 1,
          explanation:
            'Quality always beats quantity in unseen analysis. Three well-developed paragraphs with detailed analysis will earn higher marks than five superficial ones that merely identify features.',
        },
        {
          id: 'eix-unseen-m6-q4',
          question: 'What is the most effective revision strategy for unseen analysis?',
          options: [
            'Reading revision notes repeatedly',
            'Memorising model answers',
            'A cycle of timed practice, self-review, and targeted improvement',
            'Studying only the poems in the anthology',
          ],
          correct: 2,
          explanation:
            'A cycle of timed practice, honest self-review, and targeted improvement is the most effective strategy. Simply reading notes or memorising answers does not build the skills needed for unseen analysis.',
        },
      ],
    },
  ],

  // ──────────────────────────────────────────────
  // ASSESSMENT QUESTIONS
  // ──────────────────────────────────────────────
  assessmentQuestions: [
    {
      id: 'eix-unseen-a1',
      question: 'What is the primary purpose of the first read of an unseen poem?',
      options: [
        'To identify all poetic techniques',
        'To absorb the overall meaning, mood and speaker',
        'To begin writing your essay plan',
        'To memorise key quotations',
      ],
      correct: 1,
      explanation:
        'The first read should focus on absorbing the poem as a whole — its subject, mood, tone and speaker — before any detailed annotation begins.',
    },
    {
      id: 'eix-unseen-a2',
      question: 'Which assessment objective is tested by the unseen poetry question on the Edexcel IGCSE?',
      options: ['AO1', 'AO2', 'AO3', 'AO4'],
      correct: 1,
      explanation:
        'The unseen poetry question tests AO2: analyse the language, form and structure used by a writer to create meanings and effects.',
    },
    {
      id: 'eix-unseen-a3',
      question: 'What distinguishes an extended metaphor from a simple metaphor?',
      options: [
        'An extended metaphor uses "like" or "as"',
        'An extended metaphor is developed across several lines or the whole text',
        'An extended metaphor always involves personification',
        'An extended metaphor appears only in the final stanza',
      ],
      correct: 1,
      explanation:
        'An extended metaphor sustains and develops a single comparison across several lines or even the entire text, creating a layered and cohesive image.',
    },
    {
      id: 'eix-unseen-a4',
      question: 'In the PEAL framework, which element is considered the heart of an analytical paragraph?',
      options: ['Point', 'Evidence', 'Analysis', 'Link'],
      correct: 2,
      explanation:
        'Analysis is the heart of the paragraph — it is where you explore the connotations of words, the effect of techniques, and how they contribute to the text\'s meaning.',
    },
    {
      id: 'eix-unseen-a5',
      question: 'What is the main advantage of an integrated comparison structure?',
      options: [
        'It is shorter to write',
        'It discusses both texts in every paragraph, demonstrating genuine comparative skill',
        'It requires fewer quotations',
        'It allows you to ignore one of the texts',
      ],
      correct: 1,
      explanation:
        'An integrated structure discusses both texts in every paragraph, showing the examiner that you are genuinely comparing rather than writing two separate analyses.',
    },
    {
      id: 'eix-unseen-a6',
      question: 'What is pathetic fallacy?',
      options: [
        'A weak argument in an essay',
        'When the natural environment mirrors a character\'s emotions',
        'A type of unreliable narration',
        'A figure of speech that exaggerates for effect',
      ],
      correct: 1,
      explanation:
        'Pathetic fallacy is a literary technique where the natural environment or weather reflects a character\'s emotional state.',
    },
    {
      id: 'eix-unseen-a7',
      question: 'Why should you avoid starting an unseen essay with "In this poem the poet uses many techniques"?',
      options: [
        'Because it is grammatically incorrect',
        'Because it is generic, wastes time, and does not demonstrate analytical thinking',
        'Because it exceeds the word limit',
        'Because the examiner will penalise you',
      ],
      correct: 1,
      explanation:
        'Generic openings waste time and show no analytical engagement. A strong opening addresses the question directly with a specific interpretive statement.',
    },
    {
      id: 'eix-unseen-a8',
      question: 'How should you handle a prose passage\'s structure in your analysis?',
      options: [
        'Ignore it — structure only matters in poetry',
        'Comment on paragraph breaks, shifts in focus, pacing and narrative turning points',
        'Only mention the number of paragraphs',
        'Discuss structure in your conclusion only',
      ],
      correct: 1,
      explanation:
        'Prose passages have structural features — paragraph breaks, shifts in focus, pacing, and narrative turning points — that deserve analysis just as poetic structures do.',
    },
    {
      id: 'eix-unseen-a9',
      question: 'What is the recommended time allocation for the unseen poetry question (20 marks)?',
      options: [
        'About 15 minutes',
        'About 30 minutes',
        'About 45 minutes',
        'About 60 minutes',
      ],
      correct: 1,
      explanation:
        'Approximately 30 minutes should be allocated to the 20-mark unseen poetry question, allowing proportionate time for the higher-weighted sections.',
    },
    {
      id: 'eix-unseen-a10',
      question: 'What is the most effective way to improve your unseen analysis skills?',
      options: [
        'Memorise model answers for common themes',
        'Read as many revision guides as possible',
        'A cycle of timed practice, self-review and targeted improvement',
        'Focus only on learning technical terminology',
      ],
      correct: 2,
      explanation:
        'Regular timed practice followed by honest self-review and targeted improvement is the most effective strategy. It builds both analytical skill and exam stamina.',
    },
  ],
};

export default edexcelIgcseLitUnseen;
