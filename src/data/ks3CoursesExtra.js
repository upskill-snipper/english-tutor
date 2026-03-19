const ks3CoursesExtra = [
  {
    id: 'ks3-poetry',
    title: 'KS3 Poetry Skills',
    subtitle: 'Explore rhythm, imagery, and the craft of poetry for Years 7-9.',
    tier: 'KS3',
    price: 0,
    duration: '3-5 hours',
    level: 'KS3 (Years 7-9)',
    description: 'Discover how poets use rhythm, rhyme, imagery, and figurative language to create powerful effects. Learn to compare poems, write confidently about poetry, and build a strong foundation for GCSE Literature.',
    color: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    moduleList: [
      {
        id: 'ks3p-m1',
        title: 'What is Poetry?',
        duration: '30 mins',
        content: `<h2>Understanding Poetry as a Literary Form</h2>
<p>Poetry is one of the oldest forms of literature. Long before novels, newspapers, or social media, human beings were telling stories, expressing emotions, and preserving their cultures through poetry. But what exactly makes a poem a poem, and why does it matter in your English studies?</p>

<h3>Poetry vs Prose</h3>
<p>The simplest distinction is that prose is written in continuous sentences and paragraphs (like a novel or newspaper article), while poetry is written in <strong>lines</strong> and often grouped into <strong>stanzas</strong> (the poetry equivalent of paragraphs). However, the differences run much deeper than layout.</p>
<p>Poetry tends to be <strong>compressed</strong> — every single word carries enormous weight. A novelist might use a whole chapter to describe loneliness; a poet might capture the same feeling in a single image. This compression is what makes poetry so powerful and so rewarding to analyse.</p>

<h3>Key Features of Poetry</h3>
<ul>
<li><strong>Line breaks</strong> — Poets choose where to end each line. A line break can create suspense, emphasis, or surprise. When a sentence runs past the end of a line into the next, it is called <strong>enjambment</strong>.</li>
<li><strong>Stanzas</strong> — Groups of lines separated by gaps, similar to paragraphs. Different stanza lengths create different effects: a couplet (two lines) feels tight and punchy; a longer stanza can build atmosphere.</li>
<li><strong>Sound</strong> — Poetry is designed to be heard as well as read. Rhythm, rhyme, alliteration, and assonance all contribute to the musicality of a poem.</li>
<li><strong>Imagery</strong> — Poets use vivid descriptions that appeal to the senses (sight, sound, touch, taste, smell) to make the reader experience something rather than just understand it.</li>
<li><strong>Figurative language</strong> — Metaphor, simile, and personification allow poets to say one thing and mean another, adding layers of meaning.</li>
</ul>

<div class="key-term"><strong>Key Term: Stanza</strong> — A group of lines in a poem, separated from other groups by a blank line. Think of it as a verse or paragraph of poetry.</div>

<h3>Why Study Poetry?</h3>
<p>Poetry sharpens every English skill you have. Because poems are short and dense, you learn to read closely, pick apart language, and explain effects — skills that transfer directly to prose analysis, writing, and even media literacy. Poetry also teaches you to listen to the music of language, which makes your own writing more sophisticated.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When you first read a poem, read it aloud (or in your head as if reading aloud). Poetry is written for the ear as well as the eye, and hearing the rhythm and sounds helps you understand the poet's choices.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating a poem like a puzzle with a single "correct answer." Poems are open to interpretation — what matters is that you support your ideas with evidence from the text.</div>`,
        quiz: [
          { id: 'ks3p-m1-q1', question: 'What is a stanza?', options: ['A type of rhyme scheme', 'A group of lines in a poem separated by a blank line', 'The title of a poem', 'A poem with exactly four lines'], correct: 1, explanation: 'A stanza is a group of lines in a poem, separated from other stanzas by a gap. It functions like a paragraph in prose.' },
          { id: 'ks3p-m1-q2', question: 'What is enjambment?', options: ['When a poem rhymes', 'When a sentence runs past the end of a line into the next', 'When a poem has no punctuation', 'When two words alliterate'], correct: 1, explanation: 'Enjambment occurs when a sentence or phrase continues beyond the end of a line without stopping. It can create momentum or surprise.' },
          { id: 'ks3p-m1-q3', question: 'Why is poetry described as "compressed"?', options: ['Because poems are printed in small font', 'Because every word carries enormous weight and meaning', 'Because poems must be shorter than 100 words', 'Because poets write quickly'], correct: 1, explanation: 'Poetry is compressed because poets pack a great deal of meaning into very few words. Each word is carefully chosen for its sound, connotations, and effect.' },
        ],
      },
      {
        id: 'ks3p-m2',
        title: 'Rhythm & Rhyme',
        duration: '35 mins',
        content: `<h2>The Music of Poetry</h2>
<p>Rhythm and rhyme are the most immediately noticeable features of many poems. They give poetry its musical quality and help create mood, pace, and emphasis. Understanding how rhythm and rhyme work will transform your ability to analyse poems.</p>

<h3>What is Rhythm?</h3>
<p>Rhythm is the pattern of stressed and unstressed syllables in a line of poetry. When you say the word "today," you naturally emphasise the second syllable: to-<strong>DAY</strong>. Poets arrange words so that stressed and unstressed syllables create a regular beat, known as <strong>metre</strong>.</p>

<p>The most common metre in English poetry is <strong>iambic pentameter</strong>: five pairs of syllables where the stress falls on the second beat. Shakespeare used it constantly: "Shall <strong>I</strong> com-<strong>PARE</strong> thee <strong>TO</strong> a <strong>SUM</strong>-mer's <strong>DAY</strong>?" This rhythm sounds natural in English because it mirrors the patterns of everyday speech.</p>

<h3>Why Rhythm Matters</h3>
<ul>
<li><strong>Regular rhythm</strong> can create a calm, controlled, or song-like feel. It suggests order and certainty.</li>
<li><strong>Irregular rhythm</strong> or a sudden break in the pattern can signal emotion, disruption, or a shift in meaning. When a poet breaks the rhythm, pay attention — they are drawing your eye to something important.</li>
<li><strong>Fast rhythm</strong> (short syllables, few pauses) creates urgency and excitement.</li>
<li><strong>Slow rhythm</strong> (long vowel sounds, lots of punctuation) creates a thoughtful or sorrowful tone.</li>
</ul>

<h3>Rhyme Schemes</h3>
<p>Rhyme is when words share the same end sound. Poets use different rhyme patterns, and we label them with letters:</p>
<ul>
<li><strong>ABAB</strong> — alternate rhyme. Line 1 rhymes with line 3, line 2 with line 4. This creates a flowing, song-like quality.</li>
<li><strong>AABB</strong> — rhyming couplets. Each pair of lines rhymes. This feels neat, decisive, and sometimes humorous.</li>
<li><strong>ABBA</strong> — enclosed rhyme. The outer lines rhyme and the inner lines rhyme. This can create a sense of containment or return.</li>
<li><strong>Free verse</strong> — no regular rhyme scheme. The poet relies on other sound effects and imagery instead.</li>
</ul>

<div class="key-term"><strong>Key Term: Metre</strong> — The regular pattern of stressed and unstressed syllables in poetry. Iambic pentameter (five pairs, stress on the second syllable) is the most common metre in English.</div>

<h3>Half-Rhyme and Internal Rhyme</h3>
<p><strong>Half-rhyme</strong> (also called slant rhyme) is when words almost rhyme but not quite: "love" and "move," or "eyes" and "memories." Half-rhyme creates a sense of unease or incompleteness — things not quite fitting together.</p>
<p><strong>Internal rhyme</strong> is rhyme that occurs within a line rather than at the end: "The rain in Spain falls mainly on the plain." Internal rhyme increases the musical quality and pace of a line.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Do not just identify a rhyme scheme — explain its effect. "The AABB rhyme scheme creates a sense of certainty and finality, as each idea is neatly concluded in a couplet" is far stronger than "The poem uses rhyming couplets."</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Saying a poem "flows nicely" without explaining what creates that flow. Be specific: is it the regular rhythm, the rhyme scheme, the enjambment, or the long vowel sounds?</div>`,
        quiz: [
          { id: 'ks3p-m2-q1', question: 'What is iambic pentameter?', options: ['A poem with five stanzas', 'Five pairs of syllables with stress on the second beat', 'A poem that rhymes in couplets', 'A type of free verse'], correct: 1, explanation: 'Iambic pentameter consists of five iambic feet (pairs of syllables where the second is stressed). It is the most common metre in English poetry.' },
          { id: 'ks3p-m2-q2', question: 'What does an ABAB rhyme scheme mean?', options: ['Every line rhymes', 'Lines 1 and 3 rhyme, lines 2 and 4 rhyme', 'Only the last two lines rhyme', 'There is no rhyme'], correct: 1, explanation: 'ABAB means alternate rhyme: the first line rhymes with the third, and the second line rhymes with the fourth.' },
          { id: 'ks3p-m2-q3', question: 'What effect can half-rhyme create?', options: ['A perfect musical quality', 'A sense of unease or incompleteness', 'Humour', 'A fast pace'], correct: 1, explanation: 'Half-rhyme creates a feeling that something is slightly off — words almost match but do not, suggesting tension, unease, or things not fitting together.' },
        ],
      },
      {
        id: 'ks3p-m3',
        title: 'Imagery & Figurative Language',
        duration: '35 mins',
        content: `<h2>Painting Pictures with Words</h2>
<p>Imagery is the lifeblood of poetry. While prose writers can take pages to describe a scene, poets must create vivid pictures in just a few carefully chosen words. Understanding how imagery works is essential for analysing poetry at any level.</p>

<h3>Sensory Imagery</h3>
<p>The most direct form of imagery appeals to the five senses:</p>
<ul>
<li><strong>Visual imagery</strong> (sight) — "The golden leaves spiralled down like tiny suns."</li>
<li><strong>Auditory imagery</strong> (sound) — "The church bells clanged through the morning mist."</li>
<li><strong>Tactile imagery</strong> (touch) — "The rough bark scratched her palms."</li>
<li><strong>Olfactory imagery</strong> (smell) — "The sharp tang of salt filled the air."</li>
<li><strong>Gustatory imagery</strong> (taste) — "Bitterness coated her tongue."</li>
</ul>
<p>Sensory imagery pulls the reader into the poem. Instead of being told about an experience, the reader <strong>feels</strong> it. When you analyse imagery, always explain which sense is being appealed to and what atmosphere or emotion this creates.</p>

<h3>Figurative Language in Poetry</h3>
<p>Figurative language goes beyond literal description to create deeper layers of meaning:</p>

<p><strong>Metaphor</strong> — A direct comparison that says one thing IS another. "Life is a journey" does not literally mean life is a road trip, but it suggests that we travel, face obstacles, and eventually arrive somewhere. Extended metaphors sustain this comparison across several lines or even a whole poem.</p>

<p><strong>Simile</strong> — A comparison using "like" or "as." "My love is like a red, red rose" (Robert Burns) compares the beloved to a rose — beautiful, natural, and perhaps fragile or thorny. Similes keep both things separate while drawing a connection between them.</p>

<p><strong>Personification</strong> — Giving human qualities to non-human things. "Death, be not proud" (John Donne) speaks directly to death as if it were an arrogant person. This makes abstract ideas feel personal and immediate.</p>

<p><strong>Symbolism</strong> — When an object or image represents something larger. A rose might symbolise love; a storm might symbolise conflict; a journey might symbolise personal growth. Symbols add depth without the poet having to explain their meaning directly.</p>

<div class="key-term"><strong>Key Term: Extended metaphor</strong> — A metaphor that is developed over several lines or throughout an entire poem, adding detail and complexity to the comparison.</div>

<div class="text-extract">"I wandered lonely as a cloud<br/>That floats on high o'er vales and hills"<div class="source">William Wordsworth, 'I Wandered Lonely as a Cloud'</div></div>

<p>Wordsworth uses a simile to compare himself to a cloud — solitary, drifting, above the world. The image suggests both loneliness and a certain freedom, floating effortlessly without direction. The word "wandered" reinforces aimlessness, while "lonely" attaches an emotional weight to the cloud image.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing figurative language, always explain the comparison in full. Do not just say "the poet uses a simile." Explain what is being compared to what, and why this comparison is effective.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Confusing metaphor and simile. A simile uses "like" or "as" to compare; a metaphor states that something IS something else. "He fought like a lion" is a simile; "He was a lion in battle" is a metaphor.</div>`,
        quiz: [
          { id: 'ks3p-m3-q1', question: '"The wind howled through the empty streets." What type of imagery is this?', options: ['Visual imagery', 'Auditory imagery and personification', 'Tactile imagery', 'Gustatory imagery'], correct: 1, explanation: 'The wind "howling" appeals to the sense of hearing (auditory imagery) and gives the wind a human action (personification), suggesting something wild and mournful.' },
          { id: 'ks3p-m3-q2', question: 'What is an extended metaphor?', options: ['A very long simile', 'A metaphor sustained over several lines or a whole poem', 'A metaphor using the word "like"', 'A comparison between two poems'], correct: 1, explanation: 'An extended metaphor develops a single comparison across multiple lines or an entire poem, adding layers of detail and meaning.' },
          { id: 'ks3p-m3-q3', question: 'In poetry, what does symbolism involve?', options: ['Using punctuation marks as decorations', 'An object or image representing something larger or deeper', 'Writing in a foreign language', 'Using only literal descriptions'], correct: 1, explanation: 'Symbolism is when a concrete object or image represents an abstract idea — for example, a storm symbolising conflict, or a rose symbolising love.' },
        ],
      },
      {
        id: 'ks3p-m4',
        title: 'Comparing Poems',
        duration: '35 mins',
        content: `<h2>Finding Connections Between Poems</h2>
<p>Comparing poems is a skill you will use throughout your English studies, from KS3 right through to GCSE and beyond. The key to a strong comparison is writing about both poems together, not one after the other. You need to find meaningful connections and differences, then use evidence from both texts to support your ideas.</p>

<h3>What to Compare</h3>
<p>When comparing two poems, consider these four areas:</p>
<ul>
<li><strong>Theme</strong> — What is each poem about? Do they explore the same theme differently, or do they address related but distinct ideas? For example, two poems might both be about love, but one celebrates it while the other mourns its loss.</li>
<li><strong>Tone and mood</strong> — How does each poem feel? Is one angry and the other reflective? Is one hopeful and the other despairing? Tone is created by the poet's word choices, rhythm, and imagery.</li>
<li><strong>Form and structure</strong> — How is each poem arranged? Does one use strict rhyme and metre while the other uses free verse? Is one poem in neat stanzas while the other is a single block of text? These choices reflect the poem's meaning.</li>
<li><strong>Language and imagery</strong> — What techniques does each poet use? Do they share similar images or use completely different approaches? Comparing the specific word choices is where the strongest analysis happens.</li>
</ul>

<h3>How to Structure a Poetry Comparison</h3>
<p>The strongest approach is to organise by idea, not by poem:</p>
<p><strong>Weak:</strong> "Poem A is about X. Now I will talk about Poem B, which is about Y."</p>
<p><strong>Strong:</strong> "Both poems explore the theme of X. In Poem A, the poet uses... to suggest... However, Poem B takes a contrasting approach by..."</p>

<h3>Useful Comparison Phrases</h3>
<ul>
<li>"Both poets explore the idea of... but from different perspectives."</li>
<li>"While Poet A presents X as..., Poet B suggests..."</li>
<li>"Similarly, both poets use [technique] to convey..."</li>
<li>"In contrast to Poem A's [feature], Poem B employs..."</li>
<li>"The poets diverge in their treatment of [theme]..."</li>
</ul>

<div class="key-term"><strong>Key Term: Cross-referencing</strong> — Discussing both poems within the same paragraph rather than writing about one and then the other. This is essential for a strong comparison.</div>

<div class="model-answer"><div class="model-answer-header">MODEL ANSWER (extract)</div>
<p>Both poets explore the destructive power of nature, but they create very different emotional responses. In 'Storm on the Island,' Heaney uses short, blunt sentences — "We are prepared" — to convey resilience and determination in the face of the storm. The collective pronoun "we" suggests community strength. In contrast, Shelley's 'Ozymandias' presents nature's power as slow and inevitable: the "lone and level sands stretch far away," where the long vowel sounds and vast imagery suggest nature's patient, unstoppable erosion of human pride. While Heaney's storm is immediate and violent, Shelley's destruction is quiet and final.</p>
</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Every paragraph in a comparison should mention both poems. If you write a paragraph about only one poem, you are describing, not comparing. Use connectives like "similarly," "in contrast," and "whereas" to link your points.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about Poem A for half the essay and Poem B for the other half. This is two separate analyses stapled together, not a comparison. Weave the poems together throughout.</div>`,
        quiz: [
          { id: 'ks3p-m4-q1', question: 'What is the best way to structure a poetry comparison?', options: ['Write about Poem A, then Poem B', 'Organise by theme, discussing both poems in each paragraph', 'Only focus on the differences', 'Write a summary of each poem'], correct: 1, explanation: 'The strongest comparisons are organised by theme or idea, with both poems discussed in each paragraph. This shows genuine comparison, not separate descriptions.' },
          { id: 'ks3p-m4-q2', question: 'Which of these is a useful comparison connective?', options: ['"Next"', '"In contrast"', '"Finally"', '"For instance"'], correct: 1, explanation: '"In contrast" signals a difference between two poems and shows the examiner you are actively comparing. Other useful connectives include "similarly," "whereas," and "however."' },
          { id: 'ks3p-m4-q3', question: 'What four areas should you compare when analysing two poems?', options: ['Plot, characters, setting, ending', 'Theme, tone, form/structure, language/imagery', 'Length, title, author, date', 'Vocabulary, spelling, grammar, punctuation'], correct: 1, explanation: 'The four key areas for comparing poems are theme (what they are about), tone (how they feel), form and structure (how they are arranged), and language and imagery (the techniques used).' },
        ],
      },
      {
        id: 'ks3p-m5',
        title: 'Writing About Poetry',
        duration: '35 mins',
        content: `<h2>Crafting Strong Poetry Analysis</h2>
<p>Writing about poetry is a skill that improves with practice and structure. Many students find poetry analysis intimidating, but if you follow a clear method and focus on explaining effects rather than just spotting techniques, you will write confident, high-scoring responses every time.</p>

<h3>Step 1: Read the Poem Carefully</h3>
<p>Before you write anything, read the poem at least twice. On your first reading, get a general sense of what the poem is about and how it makes you feel. On your second reading, start noticing specific details: unusual word choices, patterns, imagery, and structural features. If there is a question, identify exactly what it asks you to focus on.</p>

<h3>Step 2: Plan Before You Write</h3>
<p>Even a brief plan (two to three minutes) dramatically improves the quality of your answer. Jot down three or four key points you want to make, each linked to a specific piece of evidence from the poem. Decide on an order — start with the most important or most interesting point.</p>

<h3>Step 3: Use PEEL Paragraphs</h3>
<p>The PEEL structure works brilliantly for poetry analysis:</p>
<ul>
<li><strong>Point</strong> — State what the poet does or what effect is created. Link this clearly to the question.</li>
<li><strong>Evidence</strong> — Quote from the poem. Keep quotations short and embed them in your sentences.</li>
<li><strong>Explain</strong> — This is the most important part. Analyse the language — what do specific words suggest? What are the connotations? How does the technique create meaning?</li>
<li><strong>Link</strong> — Connect back to the question or develop your point further. Consider how this relates to the poem's wider themes or the poet's intentions.</li>
</ul>

<h3>Step 4: Zoom In on Individual Words</h3>
<p>The best poetry analysis focuses on the micro level. Instead of writing broadly about "the imagery," zoom in on a single word and explore its connotations, sounds, and effects. For example, if a poet describes a sunset as "bleeding" across the sky, explore why "bleeding" — not "spreading" or "glowing" — was chosen. What does it suggest about violence, pain, or the death of the day?</p>

<h3>Step 5: Comment on Form and Structure</h3>
<p>Do not forget to discuss how the poem is put together. Comment on stanza lengths, line breaks, enjambment, caesura (a pause in the middle of a line), and the overall shape of the poem. Always link structural features to meaning: "The use of enjambment across stanzas two and three creates a sense of overflow, mirroring the speaker's uncontrollable emotions."</p>

<div class="key-term"><strong>Key Term: Caesura</strong> — A pause in the middle of a line of poetry, usually created by punctuation. It can create emphasis, a sense of interruption, or a moment of reflection.</div>

<div class="model-answer"><div class="model-answer-header">MODEL ANSWER (single paragraph)</div>
<p>The poet uses violent imagery to convey the destructive power of the storm. The verb "rips" in "the wind rips tiles from the roof" suggests sudden, aggressive force — the storm does not gently remove but tears violently, implying a deliberate, almost malicious intent. The harsh plosive consonant in "rips" mirrors this aggression phonetically, the hard sound cutting through the line just as the wind cuts through the roof. This single word encapsulates the poem's broader theme: nature is not gentle or passive but a force that actively destroys human structures.</p>
</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Use phrases like "the poet suggests," "this implies," and "the connotations of X include" to show sophisticated analysis. Avoid "the poet is trying to say" — they are not trying, they ARE saying it.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing "this makes the reader want to read on." This is vague and adds nothing. Instead, be specific about the emotional effect: "This creates a sense of dread in the reader" or "This forces the reader to confront the reality of loss."</div>`,
        quiz: [
          { id: 'ks3p-m5-q1', question: 'What is a caesura?', options: ['A poem with no rhyme', 'A pause in the middle of a line of poetry', 'The last line of a stanza', 'A type of metaphor'], correct: 1, explanation: 'A caesura is a pause in the middle of a line, usually created by punctuation such as a full stop, comma, or dash. It can create emphasis or a sense of interruption.' },
          { id: 'ks3p-m5-q2', question: 'What is the most important part of a PEEL paragraph in poetry analysis?', options: ['The Point', 'The Evidence', 'The Explain section', 'The Link'], correct: 2, explanation: 'The Explain section is where you analyse the language — exploring connotations, effects, and meaning. This is where the marks are earned, not in simply quoting or identifying techniques.' },
          { id: 'ks3p-m5-q3', question: 'Which phrase should you AVOID in poetry analysis?', options: ['"The poet suggests..."', '"This implies..."', '"The poet is trying to say..."', '"The connotations of this word include..."'], correct: 2, explanation: 'Avoid "trying to say" — it implies the poet has failed to communicate clearly. Use confident phrases like "the poet suggests" or "the poet conveys" instead.' },
        ],
      },
    ],
    assessmentQuestions: [
      { id: 'ks3p-a1', question: 'What is the difference between a simile and a metaphor?', options: ['There is no difference', 'A simile uses "like" or "as"; a metaphor says something IS something else', 'A metaphor is always longer', 'A simile is used in poetry; a metaphor in prose'], correct: 1, explanation: 'A simile compares using "like" or "as" ("brave as a lion"), while a metaphor directly states something IS something else ("he was a lion"). Both create comparisons but in different ways.' },
      { id: 'ks3p-a2', question: 'What is an ABAB rhyme scheme?', options: ['Every line rhymes with every other line', 'Lines 1 and 3 rhyme; lines 2 and 4 rhyme', 'Only the first and last lines rhyme', 'There is no rhyme'], correct: 1, explanation: 'In ABAB, alternate lines rhyme: line 1 with line 3 (A), and line 2 with line 4 (B). This creates a flowing, musical quality.' },
      { id: 'ks3p-a3', question: 'What does enjambment do in a poem?', options: ['Ends the poem', 'Carries a sentence past the end of a line into the next', 'Creates a rhyme', 'Adds punctuation'], correct: 1, explanation: 'Enjambment occurs when a thought runs on past the end of a line. It can create urgency, momentum, or a sense of overflow.' },
      { id: 'ks3p-a4', question: '"The moon was a ghostly galleon tossed upon cloudy seas." What technique is this?', options: ['Simile', 'Personification', 'Metaphor', 'Alliteration'], correct: 2, explanation: 'This is a metaphor — the moon IS described as a galleon (ship). It also contains imagery of movement and mystery.' },
      { id: 'ks3p-a5', question: 'What is the effect of a regular, steady rhythm in a poem?', options: ['It always creates sadness', 'It can create a calm, controlled, or song-like quality', 'It makes the poem confusing', 'It has no effect'], correct: 1, explanation: 'A regular rhythm creates a sense of order, control, or musicality. Breaking that rhythm then becomes a powerful way to signal disruption or emotion.' },
      { id: 'ks3p-a6', question: 'When comparing poems, what should every paragraph contain?', options: ['Only Poem A', 'Only Poem B', 'References to both poems', 'A summary of the plot'], correct: 2, explanation: 'Every comparison paragraph should reference both poems, using connectives like "similarly," "in contrast," or "whereas" to link your points.' },
      { id: 'ks3p-a7', question: 'What is a caesura?', options: ['The last word in a line', 'A pause in the middle of a line of poetry', 'A type of stanza', 'A rhyme at the start of a line'], correct: 1, explanation: 'A caesura is a pause within a line, usually created by punctuation. It can create emphasis, a moment of reflection, or a dramatic break.' },
      { id: 'ks3p-a8', question: 'Which is the best approach to analysing a single word in a poem?', options: ['Define it using a dictionary', 'Explore its connotations, sounds, and effects in context', 'Simply name the technique', 'Ignore it and focus on the theme'], correct: 1, explanation: 'The best analysis zooms in on a single word and explores what it suggests (connotations), how it sounds, and what effect it creates in the context of the poem.' },
    ],
  },
  {
    id: 'ks3-shakespeare',
    title: 'KS3 Shakespeare Introduction',
    subtitle: 'Build confidence with Shakespeare\'s language, plays, and performance.',
    tier: 'KS3',
    price: 0,
    duration: '3-5 hours',
    level: 'KS3 (Years 7-9)',
    description: 'Demystify Shakespeare for KS3 students. Understand the language, explore key plays including Macbeth, Romeo and Juliet, and The Tempest, analyse characters and themes, and discover why performance matters.',
    color: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    moduleList: [
      {
        id: 'ks3s-m1',
        title: "Shakespeare's World",
        duration: '30 mins',
        content: `<h2>Who Was William Shakespeare?</h2>
<p>William Shakespeare (1564-1616) is widely regarded as the greatest writer in the English language. He wrote at least 37 plays, 154 sonnets, and several longer poems. His works have been translated into every major language and are performed more often than those of any other playwright. But to understand Shakespeare's writing, you first need to understand the world he lived in.</p>

<h3>Elizabethan and Jacobean England</h3>
<p>Shakespeare lived during the reigns of Queen Elizabeth I and King James I — a period of enormous change. England was becoming a major world power, exploration was opening up new continents, and London was growing into a bustling, exciting, and sometimes dangerous city. The theatre was the entertainment of the masses — there was no television, no cinema, no internet. Going to a play was as popular as watching a football match or streaming a show is today.</p>

<h3>The Globe Theatre</h3>
<p>Shakespeare's plays were performed at the Globe Theatre in London, a circular, open-air theatre that could hold up to 3,000 people. The cheapest tickets cost just a penny — these audience members (called <strong>groundlings</strong>) stood in the yard right in front of the stage. Wealthier patrons sat in covered galleries above. The audience was noisy, interactive, and sometimes threw things. Shakespeare had to write plays that gripped this crowd from the first line.</p>

<h3>Why Context Matters</h3>
<p>Understanding Shakespeare's world helps you understand his plays. Key contextual factors include:</p>
<ul>
<li><strong>The Divine Right of Kings</strong> — People believed monarchs were chosen by God. Killing a king was not just treason but a sin against God. This is crucial for understanding plays like Macbeth.</li>
<li><strong>Gender roles</strong> — Women could not act on stage; female parts were played by boys. Women had very limited rights and were expected to be obedient to their fathers and husbands. This adds layers to characters like Juliet and Lady Macbeth who defy these expectations.</li>
<li><strong>Superstition</strong> — Belief in witches, ghosts, and the supernatural was widespread. The witches in Macbeth would have genuinely terrified Elizabethan audiences.</li>
<li><strong>Social hierarchy</strong> — Society was rigidly structured. Your birth determined your place. Plays that challenge this order (like The Tempest) were both thrilling and controversial.</li>
</ul>

<div class="key-term"><strong>Key Term: Groundlings</strong> — The cheapest audience members at the Globe Theatre, who stood in the open yard. Shakespeare often included physical comedy and dramatic action to keep them entertained.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When writing about Shakespeare, always consider the context. How would the original audience have reacted? What beliefs or values would have shaped their response? This shows sophisticated understanding.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Judging Shakespeare's characters by modern standards alone. While modern perspectives are valid, you should also consider how Elizabethan audiences would have understood the actions and motivations of characters.</div>`,
        quiz: [
          { id: 'ks3s-m1-q1', question: 'What were "groundlings"?', options: ['Actors who performed on the ground', 'Audience members who stood in the yard for a penny', 'Stage managers at the Globe', 'Musicians who played below the stage'], correct: 1, explanation: 'Groundlings were the cheapest ticket holders who stood in the open yard in front of the stage. They paid just one penny for admission.' },
          { id: 'ks3s-m1-q2', question: 'Why is the Divine Right of Kings important for understanding Macbeth?', options: ['It explains why Macbeth is set in Scotland', 'Because killing a king was seen as a sin against God, making Macbeth\'s crime even more horrifying', 'It explains Shakespeare\'s writing style', 'It has no relevance to Macbeth'], correct: 1, explanation: 'The belief that kings were appointed by God meant that murdering a king was not just treason but an offence against the divine order — making Macbeth\'s actions truly monstrous in the eyes of the original audience.' },
          { id: 'ks3s-m1-q3', question: 'Why were female roles played by boys in Shakespeare\'s time?', options: ['Women did not like acting', 'Women were not allowed to perform on stage', 'Boys were better actors', 'There were no female characters in the plays'], correct: 1, explanation: 'Women were forbidden from performing on stage in Elizabethan England. All female roles were played by boy actors, which adds an interesting layer to Shakespeare\'s many cross-dressing plot devices.' },
        ],
      },
      {
        id: 'ks3s-m2',
        title: 'Understanding the Language',
        duration: '35 mins',
        content: `<h2>Cracking the Code of Shakespeare's English</h2>
<p>The biggest barrier most students face with Shakespeare is the language. It can feel like reading a foreign language at first, but here is the truth: Shakespeare wrote in English — just an older version of it. With a few key strategies, you can unlock his language and discover that his writing is vivid, witty, and surprisingly modern in many ways.</p>

<h3>Why Does It Sound Different?</h3>
<p>English has changed significantly in four hundred years. Some words Shakespeare used have changed meaning, some have fallen out of use entirely, and sentence structures were more flexible. However, the core of the language is the same. Once you tune your ear to Shakespearean English, it becomes much easier to follow.</p>

<h3>Common Shakespearean Words</h3>
<p>Here are the most frequently used words that cause confusion:</p>
<ul>
<li><strong>Thou / Thee</strong> — "You" (informal, used with friends, family, or inferiors)</li>
<li><strong>Thy / Thine</strong> — "Your" / "Yours"</li>
<li><strong>Hath</strong> — "Has"</li>
<li><strong>Doth</strong> — "Does"</li>
<li><strong>Art</strong> — "Are" (when used with "thou")</li>
<li><strong>Ere</strong> — "Before"</li>
<li><strong>Hence</strong> — "From here" or "therefore"</li>
<li><strong>Wherefore</strong> — "Why" (NOT "where" — "Wherefore art thou Romeo?" means "Why are you Romeo?", not "Where are you?")</li>
<li><strong>Pray / Prithee</strong> — "Please"</li>
<li><strong>Anon</strong> — "Soon" or "coming!"</li>
<li><strong>Fie</strong> — An exclamation of disgust</li>
<li><strong>Ay</strong> — "Yes"</li>
</ul>

<h3>Strategies for Understanding</h3>
<ol>
<li><strong>Read it aloud.</strong> Shakespeare wrote for actors, not silent readers. Hearing the rhythm and stress helps you grasp the meaning.</li>
<li><strong>Look for the verb.</strong> Shakespeare often places the verb in unusual positions. Rearrange the sentence into modern word order: "What light through yonder window breaks?" becomes "What light breaks through that window over there?"</li>
<li><strong>Use context clues.</strong> If you do not know a word, look at the words around it. The overall situation usually makes the meaning clear.</li>
<li><strong>Focus on key words.</strong> You do not need to understand every single word. Identify the subject, verb, and object, and the meaning usually becomes clear.</li>
<li><strong>Watch for puns and wordplay.</strong> Shakespeare loved puns. Characters often say one thing and mean two. This is especially common in comedies.</li>
</ol>

<div class="key-term"><strong>Key Term: Iambic pentameter</strong> — The rhythmic pattern Shakespeare used most often: five pairs of syllables with the stress on the second beat (da-DUM da-DUM da-DUM da-DUM da-DUM). It mirrors the natural rhythm of English speech.</div>

<h3>Verse vs Prose</h3>
<p>Shakespeare switches between verse (poetry with rhythm) and prose (ordinary speech). This is deliberate:</p>
<ul>
<li><strong>Verse</strong> — Used by noble characters, in emotional moments, or in formal situations.</li>
<li><strong>Prose</strong> — Used by lower-class characters, in comic scenes, or when characters are being casual or mad.</li>
</ul>
<p>When a character switches from verse to prose (or vice versa), it signals a shift in their emotional state or social situation.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> If you do not understand a word, do not panic. Focus on the overall meaning of the speech. You will not lose marks for not knowing one word, but you will gain marks for showing you understand the gist and can analyse the language that you do understand.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Thinking "Wherefore art thou Romeo?" means "Where are you, Romeo?" It actually means "Why are you Romeo?" — Juliet is lamenting that the man she loves belongs to her family's enemy. This is one of the most commonly misquoted lines in all of Shakespeare.</div>`,
        quiz: [
          { id: 'ks3s-m2-q1', question: 'What does "wherefore" mean in Shakespeare?', options: ['Where', 'Why', 'When', 'How'], correct: 1, explanation: '"Wherefore" means "why." "Wherefore art thou Romeo?" means "Why are you Romeo?" — Juliet is asking why the man she loves has to be a Montague.' },
          { id: 'ks3s-m2-q2', question: 'Why does Shakespeare switch between verse and prose?', options: ['He could not decide which to use', 'Verse signals nobility, emotion, or formality; prose signals lower status, comedy, or casualness', 'There is no pattern to when he uses each', 'Prose was easier to memorise'], correct: 1, explanation: 'The switch between verse and prose is deliberate. Verse is used for noble or emotional moments; prose for comic, casual, or lower-status scenes. Shifts between the two signal changes in mood or character.' },
          { id: 'ks3s-m2-q3', question: 'What is the best first strategy for understanding a difficult Shakespeare passage?', options: ['Look up every word in a dictionary', 'Read it aloud to hear the rhythm and meaning', 'Skip it and move on', 'Memorise a modern translation'], correct: 1, explanation: 'Reading aloud is the best first step because Shakespeare wrote for performance. Hearing the rhythm, stress, and flow of the language helps the meaning emerge naturally.' },
        ],
      },
      {
        id: 'ks3s-m3',
        title: 'Key Plays Overview',
        duration: '40 mins',
        content: `<h2>Three Essential Shakespeare Plays</h2>
<p>At KS3, you are likely to encounter at least one of Shakespeare's most frequently taught plays. This module gives you an overview of three major works — Macbeth, Romeo and Juliet, and The Tempest — covering their plots, key characters, and central themes. This foundation will serve you well whether you study one of these at GCSE or encounter them in assessments.</p>

<h3>Macbeth (c. 1606)</h3>
<p><strong>Genre:</strong> Tragedy</p>
<p><strong>Plot summary:</strong> Macbeth, a brave Scottish general, meets three witches who prophesy that he will become King of Scotland. Driven by ambition and urged on by his wife, Lady Macbeth, he murders King Duncan and seizes the throne. However, guilt and paranoia consume them both. Macbeth becomes a tyrant, ordering more murders to secure his power. Lady Macbeth descends into madness and dies. Macbeth is eventually killed in battle by Macduff, and order is restored under Malcolm, Duncan's son.</p>
<p><strong>Key themes:</strong> Ambition and its consequences; the corrupting nature of power; guilt and conscience; the supernatural; appearance vs reality; the natural order and what happens when it is disrupted.</p>
<p><strong>Key characters:</strong> Macbeth (ambitious but morally conflicted), Lady Macbeth (ruthless then guilt-ridden), Duncan (the good king), Banquo (Macbeth's loyal friend, later murdered), the Witches (agents of chaos).</p>

<h3>Romeo and Juliet (c. 1595)</h3>
<p><strong>Genre:</strong> Tragedy</p>
<p><strong>Plot summary:</strong> In Verona, two wealthy families — the Montagues and the Capulets — are locked in a bitter feud. Romeo (a Montague) and Juliet (a Capulet) meet at a party, fall instantly in love, and secretly marry. When Romeo kills Juliet's cousin Tybalt in a street fight, he is banished from Verona. Juliet takes a potion to fake her death so she can escape and join Romeo, but the message explaining the plan never reaches him. Believing Juliet truly dead, Romeo poisons himself at her tomb. Juliet wakes, finds Romeo dead, and stabs herself. Their deaths finally end the feud between their families.</p>
<p><strong>Key themes:</strong> Love and hate; fate and free will; family loyalty vs individual desire; the recklessness of youth; the destructive nature of feuds; light and darkness.</p>
<p><strong>Key characters:</strong> Romeo (passionate, impulsive), Juliet (brave, determined), Mercutio (witty, loyal), Tybalt (hot-tempered), Friar Lawrence (well-meaning but flawed), the Nurse (comic, affectionate).</p>

<h3>The Tempest (c. 1611)</h3>
<p><strong>Genre:</strong> Comedy / Romance</p>
<p><strong>Plot summary:</strong> Prospero, the rightful Duke of Milan, was overthrown by his brother Antonio and cast out to sea with his young daughter Miranda. They have lived on a remote island for twelve years, where Prospero has mastered powerful magic and commands the spirit Ariel and the creature Caliban. When Antonio's ship passes nearby, Prospero conjures a storm (the tempest) to bring his enemies to the island. Through magic and manipulation, he forces them to face their guilt, forgives them, and reclaims his dukedom. He then renounces his magic and prepares to return home.</p>
<p><strong>Key themes:</strong> Power and control; forgiveness vs revenge; colonialism and exploitation; freedom and imprisonment; magic and illusion; nature vs nurture.</p>
<p><strong>Key characters:</strong> Prospero (powerful but controlling), Miranda (innocent, compassionate), Ariel (a spirit bound to serve Prospero), Caliban (the island's original inhabitant, enslaved by Prospero), Antonio (the treacherous brother).</p>

<div class="key-term"><strong>Key Term: Tragedy</strong> — A play in which the main character (the tragic hero) is brought down by a combination of their own flaws and external forces, usually ending in their death.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> You do not need to memorise every plot detail. Focus on understanding the key themes and how the main characters develop. Examiners reward thematic understanding over plot retelling.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending too long retelling the plot in an essay. The examiner knows what happens — they want to see your analysis of HOW and WHY Shakespeare creates meaning through language, structure, and character.</div>`,
        quiz: [
          { id: 'ks3s-m3-q1', question: 'In Macbeth, who prophesies that Macbeth will become king?', options: ['Lady Macbeth', 'King Duncan', 'The three witches', 'Banquo'], correct: 2, explanation: 'The three witches (also called the Weird Sisters) prophesy that Macbeth will become Thane of Cawdor and then King of Scotland. This prophecy triggers Macbeth\'s ambition.' },
          { id: 'ks3s-m3-q2', question: 'Why do Romeo and Juliet\'s deaths end the feud?', options: ['Their parents agree to a truce before they die', 'The families are so grief-stricken that they realise the cost of their hatred', 'The Prince forces them to stop fighting', 'The families run out of money'], correct: 1, explanation: 'The deaths of their children force both families to confront the terrible consequences of their feud. The shock and grief of losing Romeo and Juliet finally motivates the Montagues and Capulets to make peace.' },
          { id: 'ks3s-m3-q3', question: 'In The Tempest, what does Prospero ultimately choose to do?', options: ['Destroy his enemies', 'Remain on the island forever', 'Forgive his enemies and renounce his magic', 'Give the island to Caliban'], correct: 2, explanation: 'Prospero chooses forgiveness over revenge. He forgives Antonio and the others, renounces his magic, and prepares to return to Milan. This choice is central to the play\'s themes.' },
        ],
      },
      {
        id: 'ks3s-m4',
        title: 'Character & Theme Analysis',
        duration: '35 mins',
        content: `<h2>Going Deeper: Characters and Themes</h2>
<p>Analysing characters and themes is at the heart of studying Shakespeare. A strong response does not simply describe what a character does — it explores WHY they behave as they do, HOW Shakespeare presents them through language and structure, and WHAT themes their actions illuminate.</p>

<h3>Analysing Character</h3>
<p>When writing about a Shakespeare character, consider these layers:</p>
<ul>
<li><strong>What they say</strong> — Their actual words reveal their thoughts, emotions, and intentions. Look at their word choices and imagery.</li>
<li><strong>What they do</strong> — Actions reveal character. Does the character act on impulse or with careful thought? Do their actions match their words?</li>
<li><strong>What others say about them</strong> — Other characters' opinions provide a different perspective. Are these views reliable or biased?</li>
<li><strong>How they change</strong> — The best characters develop throughout the play. Tracking this change (or arc) is crucial. Macbeth begins as a noble hero and ends as a tyrannical murderer — this transformation IS the story.</li>
<li><strong>Dramatic techniques</strong> — Soliloquies (speaking alone on stage) reveal inner thoughts. Asides (comments to the audience) create dramatic irony. The verse/prose switch signals emotional shifts.</li>
</ul>

<h3>Key Themes in Shakespeare</h3>
<p>Shakespeare's plays explore themes that are universal and timeless. Here are the most important ones you will encounter:</p>

<p><strong>Power and ambition</strong> — Who holds power? How do they get it? What happens when power corrupts? Macbeth is the ultimate study of ambition destroying a good person. Prospero in The Tempest shows how power can be used for control or, ultimately, relinquished.</p>

<p><strong>Love and relationships</strong> — Shakespeare explores every kind of love: romantic (Romeo and Juliet), familial (King Lear), obsessive (Othello), and platonic (Antonio and Bassanio in The Merchant of Venice). Love in Shakespeare is rarely simple — it is complicated by family, society, jealousy, and fate.</p>

<p><strong>Appearance vs reality</strong> — Things are never what they seem. Characters disguise themselves, lie, manipulate, and deceive. Lady Macbeth tells her husband to "look like the innocent flower, but be the serpent under it" — a perfect encapsulation of this theme.</p>

<p><strong>Order and disorder</strong> — Shakespeare's world valued order: God, king, nobles, commoners. When this order is disrupted (by murder, rebellion, or deception), chaos follows — storms rage, nature behaves strangely, and suffering increases until order is restored.</p>

<p><strong>Fate vs free will</strong> — Are characters in control of their destiny, or are they driven by forces beyond their control? Romeo and Juliet are described as "star-crossed lovers," suggesting fate dooms them — but their own impulsive choices also contribute to the tragedy.</p>

<div class="key-term"><strong>Key Term: Soliloquy</strong> — A speech delivered by a character who is alone on stage, revealing their innermost thoughts and feelings to the audience. It is a window into the character's mind.</div>

<div class="model-answer"><div class="model-answer-header">MODEL ANSWER (extract)</div>
<p>Shakespeare presents Lady Macbeth as a figure who challenges Elizabethan gender roles. In her soliloquy in Act 1, Scene 5, she calls upon dark spirits to "unsex me here," demanding that her feminine compassion be stripped away so she can pursue power without moral hesitation. The verb "unsex" is violent and unnatural, suggesting that ambition of this magnitude requires the destruction of identity itself. For an Elizabethan audience, a woman rejecting her femininity to pursue political power would have been deeply unsettling, reinforcing the play's theme that Macbeth's path to the throne inverts the natural order.</p>
</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always use the author's name — "Shakespeare presents..." or "Shakespeare suggests..." This reminds the examiner (and you) that these are constructed characters, not real people. It signals analytical thinking.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about characters as if they are real people making free choices. Remember: they are constructs created by Shakespeare to explore ideas. Say "Shakespeare presents Macbeth as..." not "Macbeth decides to..."</div>`,
        quiz: [
          { id: 'ks3s-m4-q1', question: 'What is a soliloquy?', options: ['A conversation between two characters', 'A speech delivered by a character alone on stage', 'A song in a play', 'A fight scene'], correct: 1, explanation: 'A soliloquy is when a character speaks alone on stage, revealing their private thoughts to the audience. It is one of Shakespeare\'s most powerful dramatic techniques.' },
          { id: 'ks3s-m4-q2', question: 'Why should you write "Shakespeare presents..." rather than "Macbeth decides..."?', options: ['It sounds more formal', 'It reminds the reader that characters are constructs created by the playwright to explore ideas', 'It is a rule of grammar', 'The examiner prefers longer sentences'], correct: 1, explanation: 'Using "Shakespeare presents" shows you understand that characters are deliberate constructions, not real people. It signals analytical, author-focused thinking — which is what examiners reward.' },
          { id: 'ks3s-m4-q3', question: 'What does the theme "appearance vs reality" involve?', options: ['How characters look physically', 'The difference between what things seem to be and what they truly are', 'The stage set design', 'The difference between poetry and prose'], correct: 1, explanation: 'Appearance vs reality is about deception, disguise, and the gap between surface impressions and deeper truth. Characters often hide their true intentions behind a false exterior.' },
        ],
      },
      {
        id: 'ks3s-m5',
        title: 'Performing Shakespeare',
        duration: '30 mins',
        content: `<h2>From Page to Stage</h2>
<p>Shakespeare did not write his plays to be read silently in a classroom — he wrote them to be performed. Understanding how performance choices bring the text to life is an important part of studying Shakespeare, and it can transform your understanding of the language and characters.</p>

<h3>Why Performance Matters</h3>
<p>A play on the page is only half the story. The other half lives in the performance: the actor's voice, facial expressions, movements, gestures, and interactions with other performers. Two actors can speak the same line and create completely different meanings depending on how they deliver it.</p>
<p>Consider Macbeth's line: "Is this a dagger which I see before me?" An actor might deliver this in a whisper, suggesting terrified hallucination. Another might shout it, suggesting defiance. A third might say it calmly, suggesting Macbeth has already accepted his murderous path. Same words — entirely different interpretations.</p>

<h3>Key Performance Concepts</h3>
<ul>
<li><strong>Tone of voice</strong> — Is the character angry, pleading, sarcastic, afraid, commanding? Tone completely changes meaning. "Get out" can be furious, desperate, or playful depending on delivery.</li>
<li><strong>Pace</strong> — Speaking quickly suggests urgency, excitement, or anxiety. Speaking slowly suggests gravity, menace, or deep thought. Pauses create tension and give weight to the words that follow.</li>
<li><strong>Volume</strong> — Shouting suggests anger or passion. Whispering suggests secrecy, fear, or intimacy. Sudden changes in volume are particularly powerful.</li>
<li><strong>Gesture and movement</strong> — Does the character move towards or away from others? Do they make themselves large and commanding or small and submissive? Physical choices reveal power dynamics.</li>
<li><strong>Staging</strong> — Where characters stand on stage matters. A character alone at the front of the stage feels isolated. Two characters at opposite sides feel divided. Proximity suggests intimacy or confrontation.</li>
</ul>

<h3>Directing a Scene</h3>
<p>One excellent way to understand Shakespeare is to imagine you are directing a scene. Ask yourself:</p>
<ul>
<li>How should this line be delivered? What emotion is behind it?</li>
<li>Where should the characters be standing? Are they close together or far apart?</li>
<li>What is each character doing while the other speaks? (Reactions are as important as actions.)</li>
<li>Is there a moment where a pause would create maximum impact?</li>
<li>How does the mood of the scene change from beginning to end?</li>
</ul>

<div class="key-term"><strong>Key Term: Stage directions</strong> — Instructions in the script that tell actors what to do (e.g., "Enter Macbeth," "Exit, pursued by a bear"). Shakespeare used very few stage directions compared to modern playwrights, leaving much open to interpretation.</div>

<div class="text-extract">"To be, or not to be: that is the question:<br/>Whether 'tis nobler in the mind to suffer<br/>The slings and arrows of outrageous fortune,<br/>Or to take arms against a sea of troubles,<br/>And by opposing end them?"<div class="source">William Shakespeare, Hamlet (Act 3, Scene 1)</div></div>

<p>An actor must decide: does Hamlet say this calmly and philosophically, or is he on the verge of tears? Is he speaking to himself, or does he sense someone watching? These choices shape the audience's entire understanding of the character.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When writing about Shakespeare, consider how a line might be performed. Saying "An actor might deliver this line with a tone of barely suppressed rage, pausing before 'dagger' to heighten the tension" shows sophisticated understanding of drama as performance, not just text.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Forgetting that plays are meant to be performed. If your essay only discusses the words on the page and never considers how they would sound, look, or feel on stage, you are missing a vital dimension of the text.</div>`,
        quiz: [
          { id: 'ks3s-m5-q1', question: 'Why is performance important when studying Shakespeare?', options: ['It is not important — only the text matters', 'Because Shakespeare wrote plays for performance, and delivery choices change meaning', 'Because acting is easier than reading', 'Because Shakespeare gave very detailed stage directions'], correct: 1, explanation: 'Shakespeare wrote for the stage, not the page. Performance choices — tone, pace, gesture, staging — transform the meaning of the text and reveal character in ways that silent reading cannot.' },
          { id: 'ks3s-m5-q2', question: 'How can a pause in performance create effect?', options: ['It gives the actor time to remember their lines', 'It builds tension and gives weight to the words that follow', 'It has no real effect', 'It makes the play longer'], correct: 1, explanation: 'A well-placed pause builds anticipation and tension. The audience waits for what comes next, and the silence makes the following words feel more significant and powerful.' },
          { id: 'ks3s-m5-q3', question: 'What does it mean that Shakespeare used very few stage directions?', options: ['He was lazy', 'Much is left open to interpretation by actors and directors', 'The plays were not meant to be performed', 'Actors already knew what to do'], correct: 1, explanation: 'Shakespeare\'s minimal stage directions mean that actors and directors have enormous freedom to interpret the text. This is why the same play can feel completely different in different productions.' },
        ],
      },
    ],
    assessmentQuestions: [
      { id: 'ks3s-a1', question: 'What does "wherefore" mean in Shakespeare\'s language?', options: ['Where', 'Why', 'When', 'How'], correct: 1, explanation: '"Wherefore" means "why." "Wherefore art thou Romeo?" means "Why are you Romeo?" — not "Where are you?"' },
      { id: 'ks3s-a2', question: 'What is the Divine Right of Kings?', options: ['The king\'s right to write laws', 'The belief that monarchs were chosen by God', 'The king\'s right to act in plays', 'A law about royal marriages'], correct: 1, explanation: 'The Divine Right of Kings was the belief that monarchs were appointed by God, making any rebellion or regicide a sin against the divine order.' },
      { id: 'ks3s-a3', question: 'In Romeo and Juliet, what does "star-crossed" suggest about the lovers?', options: ['They are lucky', 'Their fate is doomed by forces beyond their control', 'They love astronomy', 'They met under the stars'], correct: 1, explanation: '"Star-crossed" means their destiny is controlled by the stars (fate) — suggesting they are doomed from the start, no matter what choices they make.' },
      { id: 'ks3s-a4', question: 'What is a soliloquy?', options: ['A conversation', 'A speech by a character alone on stage revealing inner thoughts', 'A type of poem', 'A stage direction'], correct: 1, explanation: 'A soliloquy is delivered when a character is alone on stage. It lets the audience hear their private thoughts, creating intimacy and dramatic irony.' },
      { id: 'ks3s-a5', question: 'Why does Shakespeare switch between verse and prose?', options: ['He ran out of ideas', 'To signal changes in character status, mood, or emotional state', 'There is no reason', 'Verse is for comedies, prose for tragedies'], correct: 1, explanation: 'Verse signals nobility, emotion, and formality. Prose signals lower status, comedy, or madness. A switch between the two marks a significant shift in mood or character.' },
      { id: 'ks3s-a6', question: 'In The Tempest, what does Prospero ultimately choose?', options: ['Revenge', 'Forgiveness', 'To stay on the island', 'To destroy Caliban'], correct: 1, explanation: 'Prospero chooses forgiveness over revenge, renounces his magic, and frees Ariel. This choice is the moral heart of the play.' },
      { id: 'ks3s-a7', question: 'What does "appearance vs reality" mean as a theme?', options: ['How characters dress', 'The gap between what things seem to be and what they truly are', 'The stage set design', 'The difference between comedy and tragedy'], correct: 1, explanation: 'Appearance vs reality explores deception, disguise, and hidden truths. Characters and situations are often not what they initially appear to be.' },
      { id: 'ks3s-a8', question: 'Why should you write "Shakespeare presents..." in essays?', options: ['Because it is grammatically correct', 'Because it shows characters are deliberate constructions, not real people', 'Because the examiner said so', 'Because Shakespeare is more important than his characters'], correct: 1, explanation: 'Using "Shakespeare presents" demonstrates that you understand characters are crafted by the playwright to explore themes and ideas — a key sign of analytical writing.' },
    ],
  },
  {
    id: 'ks3-media-literacy',
    title: 'KS3 Media Literacy',
    subtitle: 'Analyse advertisements, news, social media, and persuasive media texts.',
    tier: 'KS3',
    price: 0,
    duration: '3-5 hours',
    level: 'KS3 (Years 7-9)',
    description: 'Develop critical thinking skills for the modern media landscape. Learn to analyse advertisements, detect bias in news, understand persuasion on social media, and create your own media texts with confidence.',
    color: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    moduleList: [
      {
        id: 'ks3ml-m1',
        title: 'What is Media Literacy?',
        duration: '30 mins',
        content: `<h2>Reading the World Around You</h2>
<p>Media literacy is the ability to access, analyse, evaluate, and create media in a variety of forms. In the twenty-first century, you are surrounded by media every moment of the day: television, websites, social media posts, advertisements, news articles, podcasts, films, video games, and more. Media literacy gives you the tools to think critically about all of it.</p>

<h3>Why Does Media Literacy Matter?</h3>
<p>Every piece of media you encounter has been <strong>constructed</strong> — someone made choices about what to include, what to leave out, what language to use, and what images to select. These choices shape how you understand the world. Without media literacy, you passively absorb messages without questioning them. With media literacy, you become an active, critical thinker who can see beneath the surface.</p>

<h3>The Five Key Questions</h3>
<p>Media literacy experts use five core questions to analyse any media text:</p>
<ol>
<li><strong>Who created this message?</strong> — Every media text has an author or organisation behind it. Their identity affects the content.</li>
<li><strong>What techniques are used to attract my attention?</strong> — Colours, fonts, layout, camera angles, music, language choices — all are deliberate.</li>
<li><strong>How might different people understand this message differently?</strong> — A teenager, a parent, and a politician might all react differently to the same media text.</li>
<li><strong>What values, lifestyles, and points of view are represented — or missing?</strong> — What is shown matters, but what is left out can be even more revealing.</li>
<li><strong>Why is this message being sent?</strong> — Is the purpose to inform, persuade, entertain, or sell? Most media texts have more than one purpose.</li>
</ol>

<h3>Types of Media Text</h3>
<p>A "media text" is anything that communicates a message through media. This includes:</p>
<ul>
<li><strong>Print media</strong> — newspapers, magazines, posters, leaflets, billboards</li>
<li><strong>Broadcast media</strong> — television programmes, radio shows, podcasts</li>
<li><strong>Digital media</strong> — websites, blogs, social media posts, online videos</li>
<li><strong>Advertising</strong> — any text designed to sell a product, service, or idea</li>
</ul>

<div class="key-term"><strong>Key Term: Media text</strong> — Any piece of communication delivered through a media channel. A tweet, a billboard, a news broadcast, and a film trailer are all media texts.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing any media text, always start with the five key questions. They provide a framework that ensures you cover audience, purpose, techniques, representation, and context.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Assuming media is neutral or objective. Every media text reflects the choices, values, and priorities of its creator. Even a "factual" news report involves decisions about what to cover, which quotes to use, and what headline to write.</div>`,
        quiz: [
          { id: 'ks3ml-m1-q1', question: 'What does media literacy enable you to do?', options: ['Watch more television', 'Access, analyse, evaluate, and create media critically', 'Memorise news headlines', 'Use social media more often'], correct: 1, explanation: 'Media literacy is the ability to critically engage with media — not just consume it passively, but analyse how it is constructed and evaluate its messages.' },
          { id: 'ks3ml-m1-q2', question: 'Why is the question "What is missing?" important in media analysis?', options: ['Because media texts always have errors', 'Because what is left out can be as revealing as what is included', 'Because media texts are always incomplete', 'Because you need to add your own content'], correct: 1, explanation: 'Asking what is missing reveals bias and perspective. If a news report only shows one side of a debate, the absence of the other side shapes the audience\'s understanding just as much as what is included.' },
          { id: 'ks3ml-m1-q3', question: 'What is a "media text"?', options: ['Only written documents', 'Any piece of communication delivered through a media channel', 'Only social media posts', 'Only television programmes'], correct: 1, explanation: 'A media text is any form of communication through media — from a tweet to a billboard to a film trailer. The term encompasses all types of media, not just written text.' },
        ],
      },
      {
        id: 'ks3ml-m2',
        title: 'Analysing Advertisements',
        duration: '35 mins',
        content: `<h2>The Art of Selling</h2>
<p>Advertising is everywhere. By the time you are an adult, you will have seen hundreds of thousands of advertisements. Understanding how advertisements work is one of the most practical and valuable media literacy skills you can develop. Once you can see the techniques, you will never look at an advert the same way again.</p>

<h3>The Purpose of Advertising</h3>
<p>The primary purpose of any advertisement is to <strong>persuade</strong>. Advertisers want you to buy a product, use a service, change your behaviour, or adopt an idea. To achieve this, they use a sophisticated range of techniques that appeal to your emotions, desires, and insecurities.</p>

<h3>Visual Techniques</h3>
<ul>
<li><strong>Colour</strong> — Red creates urgency and excitement. Blue suggests trust and calm. Gold implies luxury. Green suggests nature and health. Colour choices are never accidental.</li>
<li><strong>Camera angles</strong> — A low-angle shot makes a product or person look powerful. A close-up creates intimacy. A wide shot establishes context.</li>
<li><strong>Layout and composition</strong> — Where elements are placed matters. The most important item is usually in the centre or at a focal point. White space creates a sense of luxury and simplicity.</li>
<li><strong>Models and celebrities</strong> — Advertisers use attractive people, famous faces, or relatable "ordinary" people to create associations between the product and desirable qualities.</li>
</ul>

<h3>Language Techniques in Advertising</h3>
<ul>
<li><strong>Imperatives</strong> — Commands like "Buy now," "Try it today," or "Don't miss out" create urgency and directness.</li>
<li><strong>Rhetorical questions</strong> — "Tired of ordinary shampoo?" assumes you agree and draws you into the message.</li>
<li><strong>Superlatives</strong> — "The best," "the fastest," "the most effective" — these claim superiority, often without evidence.</li>
<li><strong>Emotive language</strong> — Words that trigger feelings: "luxury," "freedom," "family," "home," "protect."</li>
<li><strong>Repetition</strong> — Slogans and brand names are repeated to ensure you remember them. "Just Do It." "I'm Lovin' It."</li>
<li><strong>Puns and wordplay</strong> — Humour makes an advert memorable and creates a positive association with the brand.</li>
</ul>

<h3>Persuasion Strategies</h3>
<p>Beyond individual techniques, advertisers use broader strategies:</p>
<ul>
<li><strong>Bandwagon</strong> — "Everyone is buying it" pressures you to join in.</li>
<li><strong>Testimonial</strong> — A satisfied customer or celebrity endorses the product.</li>
<li><strong>Fear appeal</strong> — "Without this product, something bad will happen."</li>
<li><strong>Aspirational appeal</strong> — "Buy this and your life will be like the people in this advert."</li>
<li><strong>Nostalgia</strong> — Evoking happy memories to create warm feelings about a product.</li>
</ul>

<div class="key-term"><strong>Key Term: Target audience</strong> — The specific group of people an advertisement is designed to reach. Advertisers tailor their language, images, and platforms to appeal to this group's interests, values, and desires.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing an advertisement, always identify the target audience first. Once you know who the advert is aimed at, you can explain WHY specific techniques have been chosen — and this "why" is where the marks are.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Describing what you can see in an advertisement without analysing WHY it is there. "There is a picture of a family" earns nothing. "The image of a happy family creates an emotional association between the product and domestic happiness, appealing to parents who want the best for their children" is analysis.</div>`,
        quiz: [
          { id: 'ks3ml-m2-q1', question: 'What is the primary purpose of an advertisement?', options: ['To inform', 'To entertain', 'To persuade', 'To educate'], correct: 2, explanation: 'The primary purpose of advertising is to persuade — to convince you to buy, use, or believe something. While adverts may also inform or entertain, persuasion is always the core goal.' },
          { id: 'ks3ml-m2-q2', question: 'What is a "bandwagon" persuasion technique?', options: ['Using a celebrity endorsement', 'Implying everyone is doing it so you should too', 'Creating fear about not buying the product', 'Using bright colours'], correct: 1, explanation: 'The bandwagon technique pressures you to join in because "everyone else" is already doing it. It exploits the human desire to belong and not miss out.' },
          { id: 'ks3ml-m2-q3', question: 'Why do advertisers use specific colours deliberately?', options: ['Because they look nice', 'Because colours trigger specific emotions and associations', 'Because they are cheaper to print', 'Because the law requires it'], correct: 1, explanation: 'Colour psychology is a key tool in advertising. Red creates urgency, blue builds trust, gold implies luxury — every colour choice is calculated to influence how you feel about the product.' },
        ],
      },
      {
        id: 'ks3ml-m3',
        title: 'News & Bias',
        duration: '35 mins',
        content: `<h2>Is the News Truly Neutral?</h2>
<p>News is one of the most important forms of media because it shapes how we understand the world. We rely on the news to tell us what is happening, what matters, and what we should care about. But news is never simply a mirror held up to reality — it is a construction, shaped by choices, values, and pressures. Understanding how bias operates in news media is a critical skill for any informed citizen.</p>

<h3>What is Bias?</h3>
<p>Bias is a tendency to lean in a particular direction — to favour one perspective over another. In news media, bias can be deliberate (a newspaper with a clear political agenda) or unconscious (a journalist who does not realise their assumptions are affecting their reporting). Either way, it shapes the news you receive.</p>

<h3>How Bias Appears in News</h3>
<ul>
<li><strong>Selection bias</strong> — Which stories are covered and which are ignored? If a newspaper covers one political party's scandals extensively but barely mentions the other's, that is selection bias.</li>
<li><strong>Headline bias</strong> — Headlines are the first (and often only) thing people read. A headline can frame a story positively or negatively: "Government Invests in Schools" vs "Government Throws Money at Failing Schools" describe the same event very differently.</li>
<li><strong>Language bias</strong> — Word choice shapes perception. Is a group "freedom fighters" or "terrorists"? Is a politician "determined" or "stubborn"? Is a crowd a "protest" or a "mob"?</li>
<li><strong>Image bias</strong> — The photos chosen to accompany a story influence how you feel about it. A flattering photo vs an unflattering photo of the same person creates very different impressions.</li>
<li><strong>Source bias</strong> — Who is quoted in the story? Whose voices are heard and whose are missing? If only one side of a debate is represented, the story is biased by omission.</li>
<li><strong>Placement bias</strong> — Stories on the front page or at the top of a website are treated as more important. What gets buried at the bottom is implicitly dismissed.</li>
</ul>

<h3>How to Read News Critically</h3>
<ol>
<li><strong>Check the source.</strong> Who published this? Do they have a known political leaning or commercial interest?</li>
<li><strong>Read beyond the headline.</strong> Headlines are designed to attract clicks and attention. The full article often tells a more nuanced story.</li>
<li><strong>Look for loaded language.</strong> Are words being used to make you feel a certain way rather than simply inform you?</li>
<li><strong>Ask who is missing.</strong> Whose perspective is not represented? This can reveal what the journalist or editor considers unimportant.</li>
<li><strong>Compare sources.</strong> Read the same story from two or three different outlets. Where do they agree? Where do they differ? The differences reveal bias.</li>
</ol>

<div class="key-term"><strong>Key Term: Bias by omission</strong> — When a news source leaves out information that might change how the audience understands a story. What is NOT reported can be as significant as what IS reported.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing a news text, focus on language choices. A single word — "claimed" vs "stated," "regime" vs "government" — can reveal a great deal about the writer's perspective and the publication's bias.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Assuming that a news source is automatically unbiased because it is well-known or popular. Every news outlet has a perspective, even if they strive for balance. Critical readers check multiple sources rather than trusting any single one absolutely.</div>`,
        quiz: [
          { id: 'ks3ml-m3-q1', question: 'What is "selection bias" in news?', options: ['Choosing attractive photographs', 'Deciding which stories to cover and which to ignore', 'Selecting the best journalists', 'Choosing the right font for headlines'], correct: 1, explanation: 'Selection bias occurs when editors choose to cover certain stories while ignoring others. This shapes the audience\'s understanding of what is important and what is happening in the world.' },
          { id: 'ks3ml-m3-q2', question: 'How can a headline create bias?', options: ['Headlines cannot create bias', 'By framing a story positively or negatively through word choice', 'By being too long', 'By using the wrong font'], correct: 1, explanation: 'Headlines frame stories. The same event can be presented positively or negatively depending on the words chosen. Since many people only read headlines, this framing has enormous influence.' },
          { id: 'ks3ml-m3-q3', question: 'What is the best way to identify bias in news?', options: ['Only read one source you trust', 'Compare the same story across multiple sources', 'Ignore the news entirely', 'Only read headlines'], correct: 1, explanation: 'Comparing multiple sources reveals how different outlets frame the same events differently. The differences between them expose bias that you would not notice if you only read one source.' },
        ],
      },
      {
        id: 'ks3ml-m4',
        title: 'Social Media & Persuasion',
        duration: '35 mins',
        content: `<h2>The Persuasion Machine in Your Pocket</h2>
<p>Social media is the most pervasive form of media in your life. You likely spend hours each day scrolling through posts, watching videos, and engaging with content that has been carefully curated — both by the people who create it and by the algorithms that decide what you see. Understanding how social media persuades and influences you is perhaps the most important media literacy skill for the twenty-first century.</p>

<h3>How Social Media Differs from Traditional Media</h3>
<p>Traditional media (television, newspapers) is created by professional organisations and broadcast to large audiences. Social media blurs the line between creator and consumer — anyone can publish content, and the audience can respond, share, and create their own content in return. This interactivity is powerful but also creates new challenges for critical thinking.</p>

<h3>The Algorithm: Your Invisible Editor</h3>
<p>Social media platforms use algorithms — complex mathematical systems — to decide what content appears in your feed. These algorithms are designed to keep you scrolling for as long as possible, because more time on the platform means more advertising revenue. The algorithm learns what you engage with (like, share, comment on, watch for a long time) and shows you more of the same. This creates a <strong>filter bubble</strong> — a personalised reality where you mainly see content that confirms your existing views and interests.</p>

<h3>Persuasion Techniques on Social Media</h3>
<ul>
<li><strong>Influencer marketing</strong> — Content creators are paid to promote products, often in ways that look like personal recommendations rather than advertisements. The line between genuine opinion and paid promotion is deliberately blurred.</li>
<li><strong>Social proof</strong> — High follower counts, likes, and shares signal popularity. We tend to trust content that appears popular, even if those numbers can be artificially inflated.</li>
<li><strong>FOMO (Fear of Missing Out)</strong> — Limited-time offers, exclusive content, and trending topics create anxiety about being left behind, pressuring quick, emotional decisions.</li>
<li><strong>Emotional content</strong> — Posts that trigger strong emotions (anger, joy, outrage, amusement) get more engagement. Creators and algorithms both favour emotional content over balanced, nuanced information.</li>
<li><strong>Clickbait</strong> — Headlines or thumbnails that promise something sensational to get you to click: "You won't BELIEVE what happened next!" The content rarely matches the promise.</li>
<li><strong>Parasocial relationships</strong> — You feel you "know" a content creator because you watch them daily, but the relationship is one-directional. This perceived intimacy makes their recommendations feel like advice from a friend.</li>
</ul>

<h3>Misinformation and Disinformation</h3>
<p><strong>Misinformation</strong> is false information spread without malicious intent — someone shares something inaccurate because they believe it is true. <strong>Disinformation</strong> is false information spread deliberately to deceive. Social media makes both spread rapidly because content can be shared millions of times before anyone checks whether it is true.</p>

<div class="key-term"><strong>Key Term: Filter bubble</strong> — The personalised information environment created by algorithms, which shows you content similar to what you have already engaged with, potentially limiting your exposure to diverse perspectives.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When analysing social media content, always consider the platform, the creator's motivation, and the algorithm's role. A post that appears on your feed has been filtered through multiple layers of selection before reaching you.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating social media content as spontaneous and authentic by default. Much of what appears casual and unscripted on social media is carefully planned, filmed, edited, and strategically posted for maximum engagement.</div>`,
        quiz: [
          { id: 'ks3ml-m4-q1', question: 'What is a "filter bubble"?', options: ['A type of photo filter', 'A personalised information environment that limits exposure to diverse perspectives', 'A way to block unwanted content', 'A social media privacy setting'], correct: 1, explanation: 'A filter bubble is created by algorithms that show you content similar to what you already engage with. Over time, this can limit your exposure to different viewpoints and create a narrow view of reality.' },
          { id: 'ks3ml-m4-q2', question: 'What is the difference between misinformation and disinformation?', options: ['There is no difference', 'Misinformation is accidental; disinformation is deliberate', 'Misinformation is online; disinformation is in print', 'Misinformation is harmless; disinformation is illegal'], correct: 1, explanation: 'Misinformation is false information shared by someone who believes it is true (accidental). Disinformation is false information created and spread deliberately to deceive. Both are harmful, but disinformation is intentionally malicious.' },
          { id: 'ks3ml-m4-q3', question: 'Why do social media algorithms favour emotional content?', options: ['Because it is more accurate', 'Because emotional content gets more engagement, keeping users on the platform longer', 'Because algorithms have emotions too', 'Because calm content is boring'], correct: 1, explanation: 'Algorithms are designed to maximise engagement (and therefore advertising revenue). Content that triggers strong emotions — outrage, joy, surprise — gets more likes, comments, and shares, so the algorithm promotes it.' },
        ],
      },
      {
        id: 'ks3ml-m5',
        title: 'Creating Your Own Media Text',
        duration: '35 mins',
        content: `<h2>From Consumer to Creator</h2>
<p>The final step in media literacy is not just understanding media — it is creating it. When you produce your own media text, you experience first-hand the choices that creators make: what to include, what to leave out, what language to use, and how to target your audience. This practical understanding deepens your analytical skills immensely.</p>

<h3>Planning Your Media Text</h3>
<p>Before you create anything, answer these four questions:</p>
<ol>
<li><strong>What is my purpose?</strong> — Am I trying to inform, persuade, entertain, or a combination? My purpose drives every other decision.</li>
<li><strong>Who is my audience?</strong> — Am I targeting teenagers, parents, a specific community? My audience determines my language, tone, and platform.</li>
<li><strong>What form will it take?</strong> — A poster? A social media post? A news article? A video script? The form dictates the conventions I need to follow.</li>
<li><strong>What message do I want to communicate?</strong> — What is the single most important thing I want my audience to think, feel, or do after encountering my text?</li>
</ol>

<h3>Design Principles</h3>
<p>Whether you are creating a poster, a webpage, or a social media campaign, these principles apply:</p>
<ul>
<li><strong>Hierarchy</strong> — The most important information should be the most prominent (largest, boldest, highest on the page). Guide the reader's eye from the most critical message to the supporting details.</li>
<li><strong>Simplicity</strong> — Less is more. A cluttered design with too much text, too many images, and too many colours overwhelms the audience. The most effective media texts are often the simplest.</li>
<li><strong>Consistency</strong> — Use the same fonts, colours, and style throughout. Consistency creates a professional, trustworthy appearance and reinforces your brand or message.</li>
<li><strong>Contrast</strong> — Use differences in size, colour, or font to make key elements stand out. A bold headline against a plain background draws the eye immediately.</li>
</ul>

<h3>Writing for Different Media Forms</h3>
<p><strong>Poster or advertisement:</strong> Use a bold headline, striking image, minimal text, and a clear call to action. Every word must earn its place — there is no room for waffle.</p>
<p><strong>News article:</strong> Use the inverted pyramid structure — the most important information goes first, with details following in decreasing order of importance. Write a headline that is informative and attention-grabbing. Include quotes from relevant sources.</p>
<p><strong>Social media post:</strong> Hook the reader in the first line. Use language appropriate to the platform (formal on LinkedIn, casual on Instagram). Include a call to action (like, share, comment, visit). Consider the visual element — images and videos dramatically increase engagement.</p>
<p><strong>Blog or opinion piece:</strong> Establish your point of view early. Use evidence and examples to support your arguments. Address potential counterarguments. Write with personality — blogs and opinion pieces allow a more individual voice than news reporting.</p>

<h3>Reflecting on Your Choices</h3>
<p>After creating your media text, reflect on the choices you made. Why did you choose those words? Why that image? Why that layout? This reflection is where your media literacy skills are demonstrated. Being able to articulate WHY you made specific choices — and what effect they create — shows genuine understanding of how media works.</p>

<div class="key-term"><strong>Key Term: Call to action</strong> — A direct instruction telling the audience what to do next: "Buy now," "Share this post," "Sign the petition," "Visit our website." An effective media text almost always includes one.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> If you are asked to create a media text in an assessment, spend a few minutes planning before you start. Identify your purpose, audience, and form. Then choose techniques that are appropriate for all three. A well-planned response is always stronger than one that is rushed.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Cramming too much information into a media text. The most effective advertisements, posters, and social media posts communicate a single clear message. If you try to say everything, you end up saying nothing.</div>`,
        quiz: [
          { id: 'ks3ml-m5-q1', question: 'What should you decide FIRST when creating a media text?', options: ['The colour scheme', 'The purpose and audience', 'The font', 'The number of images'], correct: 1, explanation: 'Purpose and audience are the foundation of every media text. Your purpose (inform, persuade, entertain) and your audience (who you are targeting) determine every other choice you make.' },
          { id: 'ks3ml-m5-q2', question: 'What is a "call to action"?', options: ['A type of camera angle', 'A direct instruction telling the audience what to do next', 'The title of a media text', 'A persuasion technique used only in news'], correct: 1, explanation: 'A call to action is a clear, direct instruction — "Buy now," "Share this post," "Sign up today." It tells the audience exactly what step to take next and is a crucial element of persuasive media.' },
          { id: 'ks3ml-m5-q3', question: 'Why is reflecting on your choices important after creating a media text?', options: ['It is not important', 'Because articulating WHY you made specific choices demonstrates genuine understanding of how media works', 'Because you need to write a bibliography', 'Because the teacher requires it'], correct: 1, explanation: 'Reflecting on your choices shows that you understand the relationship between technique and effect. Being able to explain WHY you chose specific words, images, or layouts demonstrates deep media literacy.' },
        ],
      },
    ],
    assessmentQuestions: [
      { id: 'ks3ml-a1', question: 'What are the five key questions of media literacy?', options: ['Who, what, when, where, why', 'Who created it, what techniques are used, how might people interpret it differently, what is represented or missing, why was it sent', 'Is it true, is it fair, is it legal, is it ethical, is it useful', 'Who is the audience, what is the format, when was it published, where was it shown, how much did it cost'], correct: 1, explanation: 'The five key questions focus on authorship, techniques, interpretation, representation, and purpose. They provide a complete framework for analysing any media text.' },
      { id: 'ks3ml-a2', question: 'What is the primary purpose of advertising?', options: ['To inform', 'To entertain', 'To persuade', 'To educate'], correct: 2, explanation: 'While adverts may inform or entertain, their primary purpose is always to persuade — to convince you to buy, use, or believe something.' },
      { id: 'ks3ml-a3', question: 'What is "bias by omission"?', options: ['Writing biased headlines', 'Leaving out information that would change how the audience understands a story', 'Using biased photographs', 'Interviewing only one source'], correct: 1, explanation: 'Bias by omission occurs when important information is left out. What is NOT reported can shape understanding just as powerfully as what IS reported.' },
      { id: 'ks3ml-a4', question: 'What is a filter bubble?', options: ['A privacy setting on social media', 'An algorithm-created environment that limits exposure to diverse perspectives', 'A type of content filter for children', 'A method of blocking advertisements'], correct: 1, explanation: 'A filter bubble is created when algorithms show you content similar to what you already engage with, gradually narrowing your information environment and potentially reinforcing existing beliefs.' },
      { id: 'ks3ml-a5', question: 'What is the difference between misinformation and disinformation?', options: ['They mean the same thing', 'Misinformation is accidental; disinformation is deliberately deceptive', 'Misinformation is online; disinformation is offline', 'Misinformation is opinion; disinformation is fact'], correct: 1, explanation: 'Misinformation is false information shared without malicious intent. Disinformation is false information deliberately created and spread to deceive. The key difference is intent.' },
      { id: 'ks3ml-a6', question: 'Why do social media algorithms favour emotional content?', options: ['Because emotional content is more truthful', 'Because emotional content generates more engagement, keeping users on the platform longer', 'Because algorithms understand emotions', 'Because emotional content is easier to create'], correct: 1, explanation: 'Algorithms prioritise engagement. Emotional content (outrage, joy, surprise) generates more likes, shares, and comments, which keeps users on the platform and increases advertising revenue.' },
      { id: 'ks3ml-a7', question: 'What is a "call to action" in a media text?', options: ['A dramatic scene in a film', 'A direct instruction telling the audience what to do next', 'A type of news headline', 'A protest or demonstration'], correct: 1, explanation: 'A call to action directly instructs the audience: "Buy now," "Sign up," "Share this." It is a crucial element of persuasive media texts, turning passive viewers into active participants.' },
      { id: 'ks3ml-a8', question: 'When creating a media text, what should you decide first?', options: ['The images to use', 'The purpose and target audience', 'The colour scheme', 'The platform'], correct: 1, explanation: 'Purpose and audience are the foundation of any media text. Every other decision — language, images, layout, platform — flows from knowing why you are creating it and who it is for.' },
    ],
  },
];

export default ks3CoursesExtra;
