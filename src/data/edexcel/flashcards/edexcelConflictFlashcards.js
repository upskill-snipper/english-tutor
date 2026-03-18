const deck = {
  id: 'edexcel-conflict-poetry',
  title: 'Edexcel Conflict Poetry — Key Quotations & Analysis',
  board: 'Edexcel',
  specCode: '1ET0',
  description: '30 flashcards covering all 15 poems in the Edexcel GCSE English Literature Conflict poetry collection (2 cards per poem).',
  cards: [
    // A Poison Tree — William Blake
    {
      id: 'ec-1',
      front: 'In "A Poison Tree," what does the speaker do with their wrath towards their friend versus their foe?',
      back: `"I was angry with my friend: / I told my wrath, my wrath did end. / I was angry with my foe: / I told it not, my wrath did grow."

The opening stanza establishes the poem's central contrast. Expressed anger is resolved; suppressed anger festers and grows. Blake uses simple, paired couplets to make the moral lesson clear — repression of emotion is dangerous.`,
      poem: 'A Poison Tree',
      poet: 'William Blake',
    },
    {
      id: 'ec-2',
      front: 'What does the "apple bright" symbolise in "A Poison Tree"?',
      back: `"And it grew both day and night, / Till it bore an apple bright."

The apple alludes to the fruit in the Garden of Eden — temptation and the Fall. Blake uses the extended metaphor of a poisoned tree to show how suppressed anger becomes something attractive but deadly. The foe's death at the end reveals that concealed hatred is ultimately destructive.`,
      poem: 'A Poison Tree',
      poet: 'William Blake',
    },
    // The Destruction of Sennacherib — Lord Byron
    {
      id: 'ec-3',
      front: 'How does Byron present the Assyrian army at the start of "The Destruction of Sennacherib"?',
      back: `"The Assyrian came down like the wolf on the fold, / And his cohorts were gleaming in purple and gold."

The opening simile ("like the wolf on the fold") presents the army as predatory and powerful. "Purple and gold" connote royalty and wealth — they seem invincible. Byron establishes grandeur only to destroy it, showing the futility of military power against divine will.`,
      poem: 'The Destruction of Sennacherib',
      poet: 'Lord Byron',
    },
    {
      id: 'ec-4',
      front: 'How does Byron show the aftermath of divine destruction in "The Destruction of Sennacherib"?',
      back: `"And the eyes of the sleepers waxed deadly and chill, / And their hearts but once heaved, and for ever grew still."

The euphemism "sleepers" softens the reality of death, while "deadly and chill" brings the horror back. "For ever grew still" is devastatingly final. The anapaestic metre (da-da-DUM) gives the poem a galloping rhythm that mirrors the army's charge — then stops dead.`,
      poem: 'The Destruction of Sennacherib',
      poet: 'Lord Byron',
    },
    // Extract from The Prelude — William Wordsworth
    {
      id: 'ec-5',
      front: 'How does Wordsworth present nature as initially inviting in the extract from "The Prelude"?',
      back: `"One summer evening (led by her) I found / A little boat tied to a willow tree."

Nature is personified as female ("led by her"), gently guiding the boy. "Little boat" and "willow tree" create a peaceful, pastoral scene. The parenthetical aside suggests nature has a purpose — she is leading him towards a lesson about the sublime.`,
      poem: 'Extract from The Prelude',
      poet: 'William Wordsworth',
    },
    {
      id: 'ec-6',
      front: 'How does the mood shift when the mountain appears in "The Prelude"?',
      back: `"A huge peak, black and huge... / With purpose of its own / And measured motion like a living thing, / Strode after me."

The repetition of "huge" conveys the boy's terror. The mountain is personified as a predatory, purposeful being — "strode after me" suggests pursuit. This is the Romantic sublime: nature is not just beautiful but overwhelmingly powerful. The boy's confidence is shattered by forces beyond human control.`,
      poem: 'Extract from The Prelude',
      poet: 'William Wordsworth',
    },
    // The Man He Killed — Thomas Hardy
    {
      id: 'ec-7',
      front: 'How does Hardy highlight the absurdity of war in "The Man He Killed"?',
      back: `"Had he and I but met / By some old ancient inn, / We should have sat us down to wet / Right many a nipperkin!"

The colloquial, conversational tone ("wet / Right many a nipperkin") creates dramatic irony — the speaker imagines sharing a drink with the man he killed. Hardy uses this contrast between pub and battlefield to expose the arbitrary nature of conflict.`,
      poem: 'The Man He Killed',
      poet: 'Thomas Hardy',
    },
    {
      id: 'ec-8',
      front: 'What does the repetition and hesitation reveal in "The Man He Killed"?',
      back: `"I shot him dead because — / Because he was my foe, / Just so: my foe of course he was; / That's clear enough."

The dash and repetition of "because" show the speaker struggling to justify his actions. "Just so" and "of course" are self-reassurances that ring hollow. "That's clear enough" protests too much. Hardy reveals that the soldier cannot truly rationalise killing a man just like himself.`,
      poem: 'The Man He Killed',
      poet: 'Thomas Hardy',
    },
    // Cousin Kate — Christina Rossetti
    {
      id: 'ec-9',
      front: 'How does the speaker describe her seduction by the lord in "Cousin Kate"?',
      back: `"He lured me to his palace home — / Woe's me for joy thereof."

The verb "lured" implies predatory behaviour — the lord is a hunter and the speaker is prey. "Palace home" contrasts her humble "cottage" origins. "Woe's me for joy thereof" is an oxymoron: what seemed joyful brought ruin. Rossetti critiques the sexual double standard of Victorian society.`,
      poem: 'Cousin Kate',
      poet: 'Christina Rossetti',
    },
    {
      id: 'ec-10',
      front: 'What gives the speaker power at the end of "Cousin Kate"?',
      back: `"Yet I've a gift you have not got, / And seem not like to get."

The speaker's illegitimate son is her triumph — he is the lord's heir, something Kate's "respectable" marriage has not produced. The taunting tone ("seem not like to get") reverses the power dynamic. Rossetti subverts expectations: the "fallen woman" holds the real prize.`,
      poem: 'Cousin Kate',
      poet: 'Christina Rossetti',
    },
    // Exposure — Wilfred Owen
    {
      id: 'ec-11',
      front: 'How does Owen present the weather as the true enemy in "Exposure"?',
      back: `"Our brains ache, in the merciless iced east winds that knive us..."

The opening line makes the weather, not the enemy, the aggressor. "Merciless" personifies the wind as cruel and deliberate. "Knive" is a violent verb — nature attacks the soldiers. The ellipsis at the end of many stanzas creates a trailing, exhausted tone.`,
      poem: 'Exposure',
      poet: 'Wilfred Owen',
    },
    {
      id: 'ec-12',
      front: 'What is the effect of the refrain "But nothing happens" in "Exposure"?',
      back: `"But nothing happens."

This refrain ends multiple stanzas, creating a cyclical structure that mirrors the monotony and futility of trench warfare. The anti-climax is devastating — soldiers are suffering and dying, yet strategically "nothing happens." Owen subverts expectations of heroic war poetry; there is no glory, only endurance.`,
      poem: 'Exposure',
      poet: 'Wilfred Owen',
    },
    // The Charge of the Light Brigade — Alfred, Lord Tennyson
    {
      id: 'ec-13',
      front: 'How does Tennyson create a sense of momentum in "The Charge of the Light Brigade"?',
      back: `"Half a league, half a league, / Half a league onward, / All in the valley of Death / Rode the six hundred."

The dactylic rhythm (DUM-da-da) mimics the galloping of horses. Repetition of "half a league" builds relentless momentum. "Valley of Death" alludes to Psalm 23, foreshadowing destruction. Tennyson makes the charge feel unstoppable — and therefore tragic.`,
      poem: 'The Charge of the Light Brigade',
      poet: 'Alfred, Lord Tennyson',
    },
    {
      id: 'ec-14',
      front: 'How does Tennyson honour the soldiers despite the military blunder?',
      back: `"When can their glory fade? / O the wild charge they made! / ... Honour the charge they made! / Honour the Light Brigade, / Noble six hundred!"

Tennyson shifts from narrative to direct address, commanding the reader to remember. "Honour" is repeated as an imperative. He separates the soldiers' bravery from the commanders' error — "Someone had blundered" — praising courage while quietly condemning incompetence.`,
      poem: 'The Charge of the Light Brigade',
      poet: 'Alfred, Lord Tennyson',
    },
    // Half-caste — John Agard
    {
      id: 'ec-15',
      front: 'How does Agard challenge the term "half-caste" through absurd comparisons?',
      back: `"Explain yuself / wha yu mean / when yu say half-caste / yu mean Picasso / mix red an green / is a half-caste canvas?"

Agard uses reductio ad absurdum — if "half-caste" applied to art, Picasso's mixed colours would be inferior. The phonetic Caribbean dialect asserts cultural identity and rejects Standard English as the only valid voice. The repeated imperative "Explain yuself" demands accountability.`,
      poem: 'Half-caste',
      poet: 'John Agard',
    },
    {
      id: 'ec-16',
      front: 'How does the ending of "Half-caste" shift in tone?',
      back: `"But yu must come back tomorrow / wid de whole of yu eye / an de whole of yu ear / an de whole of yu mind / an I will tell yu / de other half / of my story."

The repetition of "de whole" reverses the "half" motif — Agard implies it is the listener who is incomplete, not him. The final challenge is both witty and serious: come with your full humanity, and I will share mine. Agard reclaims power through language.`,
      poem: 'Half-caste',
      poet: 'John Agard',
    },
    // Catrin — Gillian Clarke
    {
      id: 'ec-17',
      front: 'How does Clarke present the mother-daughter bond in "Catrin"?',
      back: `"I can remember you, child, / As I stood in a white, antiseptic room... / our first, fierce confrontation."

The hospital setting is cold and clinical ("white, antiseptic"), contrasting with the raw emotion of birth. "First, fierce confrontation" uses alliteration and militaristic language — the conflict between mother and child begins at birth. Clarke presents love and conflict as inseparable.`,
      poem: 'Catrin',
      poet: 'Gillian Clarke',
    },
    {
      id: 'ec-18',
      front: 'What does the "red rope of love" symbolise in "Catrin"?',
      back: `"that old rope, / Tightening about my life, / Trailing love and conflict."

The "rope" is the umbilical cord — a physical connection that becomes an emotional metaphor. "Tightening" suggests both closeness and constraint. "Trailing love and conflict" shows these are permanently intertwined. Clarke captures the paradox of parenthood: the bond that gives life also creates lifelong tension.`,
      poem: 'Catrin',
      poet: 'Gillian Clarke',
    },
    // War Photographer — Carole Satyamurti
    {
      id: 'ec-19',
      front: 'How does Satyamurti present the photographer\'s dilemma in "War Photographer"?',
      back: 'The photographer must choose between capturing suffering and intervening. The poem explores the ethics of profiting from others\' pain — the idea of framing a shot has a double meaning (camera frame and moral framework). Satyamurti questions whether war photography exploits victims or educates the public.',
      poem: 'War Photographer',
      poet: 'Carole Satyamurti',
    },
    {
      id: 'ec-20',
      front: 'How does Satyamurti contrast the war zone with the reader\'s comfortable life?',
      back: 'The poem juxtaposes the photographer\'s traumatic experiences with the indifference of those who view the images from safety. The photographs become "something between a prayer and a curse" — they are both a tribute to the dead and an accusation against the living. Satyamurti indicts the audience\'s ability to look, feel momentary sympathy, and move on unchanged.',
      poem: 'War Photographer',
      poet: 'Carole Satyamurti',
    },
    // Belfast Confetti — Ciaran Carson
    {
      id: 'ec-21',
      front: 'How does Carson use punctuation as a metaphor in "Belfast Confetti"?',
      back: `"Suddenly as the riot squad moved in, it was raining exclamation marks!"

Punctuation becomes weaponry — exclamation marks are bullets, question marks are confusion, full stops are dead ends. Carson transforms the language of grammar into the language of violence. The "confetti" of the title is bitterly ironic — usually celebratory, here it means shrapnel and debris.`,
      poem: 'Belfast Confetti',
      poet: 'Ciaran Carson',
    },
    {
      id: 'ec-22',
      front: 'How does Carson convey disorientation in "Belfast Confetti"?',
      back: `"I know this labyrinth so well... / Every move is punctuated."

The speaker knows his own city but cannot navigate it — roadblocks and violence have made the familiar alien. "Labyrinth" alludes to the Minotaur myth, suggesting entrapment. "Punctuated" continues the grammar metaphor. Carson shows how the Troubles transformed everyday Belfast into a war zone.`,
      poem: 'Belfast Confetti',
      poet: 'Ciaran Carson',
    },
    // The Class Game — Mary Casey
    {
      id: 'ec-23',
      front: 'How does Casey use language contrasts to highlight class division in "The Class Game"?',
      back: `"How can you tell what class I'm from?"

Casey directly confronts class prejudice through rhetorical questions. The poem contrasts working-class dialect ("me mam," "our kid") with middle-class markers ("Mummy and Daddy"). By proudly using colloquial language, Casey refuses to apologise for her background and challenges the assumption that class determines worth.`,
      poem: 'The Class Game',
      poet: 'Mary Casey',
    },
    {
      id: 'ec-24',
      front: 'How does the tone of "The Class Game" convey defiance?',
      back: `"And I'm proud of the class that I come from."

The poem ends with a bold declarative statement of pride. Throughout, Casey uses a confrontational, humorous tone — listing working-class signifiers with affection rather than shame. The direct address ("you") challenges the reader to examine their own prejudices. Casey turns class markers from stigma into identity.`,
      poem: 'The Class Game',
      poet: 'Mary Casey',
    },
    // Poppies — Jane Weir
    {
      id: 'ec-25',
      front: 'How does Weir use domestic imagery to convey a mother\'s grief in "Poppies"?',
      back: `"I pinned one onto your lapel, crimped petals, / spasms of paper red."

The mother pins a poppy — a simple, domestic act loaded with significance. "Crimped" suggests craft and care. "Spasms" disrupts the tenderness with a word associated with pain and death. Weir weaves textile and sewing imagery throughout, grounding the mother's grief in the everyday.`,
      poem: 'Poppies',
      poet: 'Jane Weir',
    },
    {
      id: 'ec-26',
      front: 'How does the ending of "Poppies" convey loss?',
      back: `"I listened, hoping to hear / your playground voice catching on the wind."

The mother goes to a memorial and listens for her son's voice. "Playground voice" regresses him to childhood — she remembers the boy, not the soldier. "Catching on the wind" is both beautiful and hopeless. Weir presents war not through combat but through the absence it leaves behind.`,
      poem: 'Poppies',
      poet: 'Jane Weir',
    },
    // No Problem — Benjamin Zephaniah
    {
      id: 'ec-27',
      front: 'How does Zephaniah respond to racism in "No Problem"?',
      back: `"I am not de problem / But I bear de brunt / Of silly playground taunts / An I am a born academic."

Zephaniah uses a calm, measured tone to rebut racist assumptions. "I am not de problem" is a clear declarative that shifts blame from victim to society. The Caribbean dialect is a deliberate assertion of identity — he refuses to code-switch to be taken seriously.`,
      poem: 'No Problem',
      poet: 'Benjamin Zephaniah',
    },
    {
      id: 'ec-28',
      front: 'What is the effect of the title phrase "No Problem" as a refrain?',
      back: `"I am not de problem"

The repeated refrain functions as both a personal mantra and a political statement. "No problem" is colloquial and Caribbean — it is defiant but also generous. Zephaniah refuses to be defined by racism and instead defines himself through resilience, intelligence, and cultural pride. The repetition gives the poem a rhythmic, performative quality rooted in dub poetry.`,
      poem: 'No Problem',
      poet: 'Benjamin Zephaniah',
    },
    // What Were They Like? — Denise Levertov
    {
      id: 'ec-29',
      front: 'How does Levertov structure "What Were They Like?" to convey cultural destruction?',
      back: 'The poem is structured as six questions followed by six answers. The questions ask about Vietnamese culture — "Did they use bone and ivory, jade and silver, for ornament?" The answers reveal that the culture has been obliterated: "It is not remembered." This Q&A format mimics a museum guide or interview, implying Vietnam\'s culture now only exists as a historical artefact.',
      poem: 'What Were They Like?',
      poet: 'Denise Levertov',
    },
    {
      id: 'ec-30',
      front: 'How does Levertov convey the speaker\'s anger in the answers of "What Were They Like?"?',
      back: `"Sir, their light hearts turned to stone. / It is not remembered whether in gardens / stone lanterns illumined pleasant ways."

"Sir" is coldly formal — distancing and accusatory. "Light hearts turned to stone" is a metaphor for joy destroyed by war. "It is not remembered" recurs as a devastating refrain — the destruction is so total that even memory is lost. Levertov indicts America's role in erasing an entire culture.`,
      poem: 'What Were They Like?',
      poet: 'Denise Levertov',
    },
  ],
};

export default deck;
