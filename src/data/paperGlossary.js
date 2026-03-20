// paperGlossary.js
// Paper-specific glossary terms organized by board, subject, and paper.
// Each term includes a definition, example, category, and exam tip.

// ─── Shared term banks ────────────────────────────────────────────────────────
// These are re-used across boards with board-specific overrides applied later.

const languagePaper1Terms = [
  {
    term: 'Metaphor',
    definition:
      'A figure of speech that describes something by saying it IS something else, creating a direct comparison without using "like" or "as". Metaphors add layers of meaning and help readers see familiar things in new ways.',
    example:
      '"The sea of troubles" — Shakespeare, or in A Christmas Carol: "Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner!" where Scrooge IS these qualities.',
    category: 'Literary Technique',
    examTip:
      'Don\'t just identify the metaphor — explain what the comparison suggests. Say what the writer wants us to think or feel by linking X to Y.',
  },
  {
    term: 'Simile',
    definition:
      'A comparison using "like" or "as" to show how two different things share a quality. Similes make descriptions vivid and help readers picture exactly what the writer means by connecting the unfamiliar to the familiar.',
    example:
      'In Jane Eyre: "I am no bird; and no net ensnares me" — the simile of a trapped bird conveys Jane\'s desire for freedom.',
    category: 'Literary Technique',
    examTip:
      'Analyse what the simile suggests rather than just spotting it. Focus on the connotations of the thing being compared to.',
  },
  {
    term: 'Personification',
    definition:
      'Giving human qualities, feelings, or actions to something that is not human, such as an object, animal, or idea. This makes descriptions more vivid and can create an emotional connection between the reader and the subject.',
    example:
      'In Great Expectations: "the wind was rushing up the staircase" — the wind is given the human action of rushing, creating a sense of urgency and menace.',
    category: 'Literary Technique',
    examTip:
      'Explain WHY the writer gives human qualities to this thing. What effect does it create? Does it make it threatening, comforting, alive?',
  },
  {
    term: 'Pathetic Fallacy',
    definition:
      'A specific type of personification where the weather or environment reflects or mirrors the mood or emotions of a character or the atmosphere of a scene. It is a powerful tool for setting tone without stating it directly.',
    example:
      'In Macbeth: "So foul and fair a day I have not seen" — the stormy weather mirrors the moral chaos. In Jekyll and Hyde: fog rolls through London to reflect secrecy.',
    category: 'Literary Technique',
    examTip:
      'Link the weather/environment directly to mood or character feelings. Use the phrase "this reflects..." to show the connection clearly.',
  },
  {
    term: 'Semantic Field',
    definition:
      'A group of words in a text that all relate to the same topic or theme, creating a pattern of meaning. Identifying a semantic field shows how a writer builds a consistent mood or idea throughout a passage.',
    example:
      'In A Christmas Carol, Dickens uses a semantic field of coldness — "frozen", "ice", "bitter", "cold" — to reflect Scrooge\'s emotional state before his transformation.',
    category: 'Literary Technique',
    examTip:
      'Name the semantic field clearly (e.g. "semantic field of warfare") and explain how it builds a particular impression across the whole text.',
  },
  {
    term: 'Sibilance',
    definition:
      'The repetition of "s", "sh", "z" or soft "c" sounds in nearby words. Sibilance can create a hissing, sinister, or soothing effect depending on context, and draws the reader\'s attention to specific phrases.',
    example:
      'In Macbeth: "Stars, hide your fires; / Let not light see my black and deep desires" — the repeated "s" sounds create a sinister, secretive whisper.',
    category: 'Literary Technique',
    examTip:
      'Say what mood or feeling the sibilance creates. It can be sinister, seductive, soothing, or secretive — always link to context.',
  },
  {
    term: 'Plosive Sounds',
    definition:
      'Harsh, explosive consonant sounds — "b", "d", "g", "k", "p", "t" — that create a punchy, aggressive, or forceful effect when repeated. Writers use plosives to convey violence, anger, or power in their descriptions.',
    example:
      'In Bayonet Charge by Ted Hughes: "bullets smacking the belly out of the air" — the plosive "b" sounds mimic the brutal impact of gunfire.',
    category: 'Literary Technique',
    examTip:
      'Identify the specific plosive sounds and explain how they make the reader feel the force or violence being described.',
  },
  {
    term: 'Fricative Sounds',
    definition:
      'Consonant sounds made by forcing air through a narrow gap — "f", "v", "th", "sh", "zh" — creating a breathy, friction-filled effect. Fricatives can suggest whispering, fear, fragility, or gentle movement.',
    example:
      'In The Prelude by Wordsworth: "the breath of the wind" — the fricative "th" and "f" sounds create a soft, atmospheric feeling of nature\'s gentle presence.',
    category: 'Literary Technique',
    examTip:
      'Link the soft, breathy quality of fricatives to the mood — are they creating tension, gentleness, or unease?',
  },
  {
    term: 'Imagery',
    definition:
      'Language that appeals to the senses (sight, sound, smell, taste, touch) to create vivid mental pictures. Imagery helps the reader experience the scene rather than just understand it, making writing more immersive and engaging.',
    example:
      'In Great Expectations: "it was a rimy morning, and very damp" — visual and tactile imagery places the reader in the cold, uncomfortable marshes.',
    category: 'Literary Technique',
    examTip:
      'Specify which sense is being appealed to (visual imagery, auditory imagery, etc.) and explain what picture or feeling it creates.',
  },
  {
    term: 'Connotation',
    definition:
      'The associations or feelings a word carries beyond its literal dictionary meaning. Writers carefully choose words for their connotations to subtly influence how readers feel about characters, places, or events.',
    example:
      'Describing a house as a "shack" vs a "cottage" — both mean a small dwelling, but "shack" connotes poverty and neglect while "cottage" connotes warmth and cosiness.',
    category: 'Literary Technique',
    examTip:
      'Use the phrase "the word X connotes..." to show you understand word-level analysis. This is where top marks come from.',
  },
  {
    term: 'Juxtaposition',
    definition:
      'Placing two contrasting ideas, characters, or images side by side to highlight their differences. Juxtaposition forces the reader to compare and draws attention to the qualities of each element.',
    example:
      'In A Christmas Carol: the warmth of the Cratchit family is juxtaposed with Scrooge\'s cold isolation, highlighting what he is missing.',
    category: 'Literary Technique',
    examTip:
      'Name both sides of the contrast clearly and explain what the writer wants us to understand by placing them together.',
  },
  {
    term: 'Oxymoron',
    definition:
      'A figure of speech combining two contradictory words placed together, such as "living death" or "bitter sweet". Oxymorons highlight inner conflict, complexity, or paradox and make the reader pause to consider deeper meaning.',
    example:
      'In Romeo and Juliet: "O brawling love! O loving hate!" — the oxymorons capture Romeo\'s emotional turmoil and the paradox of love and conflict.',
    category: 'Literary Technique',
    examTip:
      'Explain what the contradiction reveals — is the character confused, conflicted, or is the situation paradoxical?',
  },
  {
    term: 'Sensory Language',
    definition:
      'Words and phrases that appeal directly to one or more of the five senses. Sensory language is a broader term than imagery and includes any writing that makes the reader see, hear, smell, taste, or feel what is described.',
    example:
      'In The Woman in Black: "the faint, pale light" (sight), "the sound of the pony trap" (hearing) create an immersive Gothic atmosphere.',
    category: 'Literary Technique',
    examTip:
      'Identify the exact sense being targeted and explain how it positions the reader within the scene.',
  },
  {
    term: 'Cyclical Structure',
    definition:
      'A structural technique where a text ends in the same place, situation, or with the same image as it began, creating a sense of completeness. It can suggest entrapment, resolution, or that nothing has changed.',
    example:
      'In A Christmas Carol: the story begins and ends at Christmas, but Scrooge is transformed — the cyclical structure emphasises his change.',
    category: 'Structure',
    examTip:
      'Compare the opening and ending closely. Explain whether the return suggests change, hopelessness, or resolution.',
  },
  {
    term: 'Narrative Perspective',
    definition:
      'The point of view from which a story is told — first person ("I"), second person ("you"), third person limited (one character\'s thoughts), or third person omniscient (all-knowing). Perspective controls what the reader knows and feels.',
    example:
      'Great Expectations uses first-person narration from Pip, meaning we experience his shame and ambition directly and may share his biases.',
    category: 'Narrative',
    examTip:
      'Explain how the chosen perspective affects the reader — what do we know or not know? Are we biased towards one character?',
  },
  {
    term: 'Foreshadowing',
    definition:
      'Hints or clues placed early in a text that suggest events which will happen later. Foreshadowing creates suspense and tension, encouraging the reader to predict what might happen and building a sense of unease or anticipation.',
    example:
      'In Of Mice and Men: the shooting of Candy\'s dog foreshadows the tragic ending involving Lennie, as both are acts of mercy.',
    category: 'Narrative',
    examTip:
      'Show that you understand the link between the hint and the later event. Explain how it builds tension or prepares the reader.',
  },
  {
    term: 'Symbolism',
    definition:
      'When an object, character, colour, or setting represents something beyond its literal meaning. Symbols add deeper layers of meaning to a text and allow writers to communicate complex ideas through concrete images.',
    example:
      'In An Inspector Calls: the dining table symbolises the Birlings\' wealth and separation from the working class. When it is disrupted, so is their complacency.',
    category: 'Literary Technique',
    examTip:
      'Name the symbol and what it represents, then explain how it develops or changes through the text to track a theme.',
  },
  {
    term: 'Alliteration',
    definition:
      'The repetition of the same consonant sound at the beginning of nearby words. Alliteration creates rhythm, draws attention to a phrase, and can create various effects depending on the sounds used.',
    example:
      'In Exposure by Wilfred Owen: "successive flights of bullets" — the alliterative "s" and "f" sounds mimic the relentless, whistling gunfire.',
    category: 'Literary Technique',
    examTip:
      'Don\'t just spot alliteration — say what the repeated sound does. Soft sounds soothe; hard sounds create force or aggression.',
  },
  {
    term: 'Onomatopoeia',
    definition:
      'A word that sounds like the thing it describes, such as "crash", "whisper", "buzz", or "sizzle". Onomatopoeia brings writing to life by letting the reader hear what is happening as they read.',
    example:
      'In Bayonet Charge: "crackling" and "smacking" — the sounds of war are recreated through the words themselves, making the battle vivid.',
    category: 'Literary Technique',
    examTip:
      'Say the word aloud in your head — what does it sound like? Then explain how hearing that sound affects the reader\'s experience.',
  },
  {
    term: 'Tone',
    definition:
      'The overall attitude or feeling conveyed by the writing — such as angry, mournful, celebratory, sarcastic, or tense. Tone is created through word choice, sentence structure, and imagery working together.',
    example:
      'In An Inspector Calls, the Inspector\'s tone is accusatory and moral: "We are responsible for each other" — his word choices convey moral authority.',
    category: 'Literary Technique',
    examTip:
      'Name the tone precisely (not just "negative" but "bitter" or "resentful") and quote specific words that create it.',
  },
  {
    term: 'Mood / Atmosphere',
    definition:
      'The feeling or emotional quality that a passage creates for the reader. While tone is the writer\'s attitude, mood is the effect on the reader. A tense mood makes the reader anxious; a peaceful mood makes them calm.',
    example:
      'In The Woman in Black: "a faint mist...was crawling" creates an eerie, unsettling mood through the slow, creeping imagery.',
    category: 'Literary Technique',
    examTip:
      'Use the phrase "this creates a mood of..." and choose a precise adjective. Link it to how the reader feels.',
  },
  {
    term: 'Extended Metaphor',
    definition:
      'A metaphor that is developed over several lines or even throughout an entire text, rather than appearing in just one phrase. Extended metaphors allow writers to explore an idea in depth through a sustained comparison.',
    example:
      'In The Prelude, Wordsworth extends the metaphor of nature as a living teacher throughout the poem, with the mountain "strode after" him like a disapproving figure.',
    category: 'Literary Technique',
    examTip:
      'Track how the metaphor develops — does it grow, shift, or break down? This shows sophisticated analysis.',
  },
  {
    term: 'Zoomorphism',
    definition:
      'Describing a human using animal qualities or characteristics, often to dehumanise or highlight primal instincts. It is the opposite of personification and can create fear, disgust, or sympathy.',
    example:
      'In Jekyll and Hyde: Hyde is described as "ape-like" — zoomorphism presents him as less than human, linking to Victorian fears about evolution.',
    category: 'Literary Technique',
    examTip:
      'Explain what the animal comparison suggests — is the character being dehumanised, shown as dangerous, or reduced to instinct?',
  },
  {
    term: 'Listing / Accumulation',
    definition:
      'Using a series of words, phrases, or clauses in sequence to build up an effect. Lists can create a sense of overwhelming quantity, chaos, richness, or monotony depending on context.',
    example:
      'In A Christmas Carol: "a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner" — the list overwhelms the reader with Scrooge\'s meanness.',
    category: 'Literary Technique',
    examTip:
      'Comment on the cumulative effect — does the list build up to something, overwhelm the reader, or create a sense of excess?',
  },
  {
    term: 'Short Sentences',
    definition:
      'Sentences of just a few words, often used for dramatic impact, to create tension, or to emphasise a key point. Short sentences force the reader to pause and absorb the statement.',
    example:
      '"He was dead." — a short sentence used for blunt, shocking impact, forcing the reader to confront the reality.',
    category: 'Structure',
    examTip:
      'Comment on the pace — short sentences slow the reader down and create emphasis. Explain what is being emphasised and why.',
  },
  {
    term: 'Long Complex Sentences',
    definition:
      'Sentences with multiple clauses that build up detail, create a flowing rhythm, or mirror chaotic or overwhelming experiences. They can speed up pace or create a breathless, uncontrollable feeling.',
    example:
      'In Bayonet Charge, Hughes uses long sentences that spill over lines to mirror the soldier\'s frantic, uncontrollable sprint across the battlefield.',
    category: 'Structure',
    examTip:
      'Explain what the length mirrors — is it overwhelming emotion, rapid action, or detailed scene-setting?',
  },
  {
    term: 'Contrast',
    definition:
      'Placing opposing ideas, characters, settings, or images near each other to highlight their differences. Contrast can be structural (between sections) or within a single sentence, and helps the reader see each element more clearly.',
    example:
      'In Jekyll and Hyde: the contrast between Jekyll\'s respectable home and the sinister back door to the laboratory reflects his double life.',
    category: 'Literary Technique',
    examTip:
      'Always explain what the contrast reveals or emphasises — it is never just for decoration.',
  },
  {
    term: 'Motif',
    definition:
      'A recurring image, symbol, idea, or phrase that appears throughout a text and develops or reinforces a theme. Unlike a one-off symbol, a motif gains meaning through repetition.',
    example:
      'In Macbeth, blood is a motif — it represents guilt, violence, and the consequences of ambition, recurring from the battlefield to Lady Macbeth\'s hand-washing.',
    category: 'Literary Technique',
    examTip:
      'Track the motif across the whole text. Show how its meaning shifts or deepens each time it appears.',
  },
  {
    term: 'Assonance',
    definition:
      'The repetition of vowel sounds within nearby words, creating a musical or rhythmic effect. Assonance can create harmony, slow the pace, or build a particular mood through sound.',
    example:
      '"The rain in Spain stays mainly in the plain" — the repeated long "a" sound creates a smooth, flowing rhythm.',
    category: 'Literary Technique',
    examTip:
      'Identify the specific vowel sound and explain whether it creates a slow, smooth, harsh, or discordant effect.',
  },
  {
    term: 'Anaphora',
    definition:
      'The deliberate repetition of a word or phrase at the beginning of successive clauses or sentences. Anaphora creates emphasis, rhythm, and a persuasive or emotional hammering effect.',
    example:
      'In A Christmas Carol: "another idol has displaced me... another idol" — the repetition emphasises how greed has replaced love in Scrooge\'s life.',
    category: 'Literary Technique',
    examTip:
      'Say what is being repeated and why — does it build emotion, create urgency, or hammer home a point?',
  },
  {
    term: 'Ellipsis',
    definition:
      'Three dots (...) used to indicate a pause, trailing off, something left unsaid, or the passage of time. Ellipsis creates suspense and invites the reader to fill in the gap with their own interpretation.',
    example:
      '"She turned to look at the door... and then she saw it." — the ellipsis creates a dramatic pause before the revelation.',
    category: 'Structure',
    examTip:
      'Comment on what is left unsaid. The gap created by ellipsis is often where the tension or meaning lies.',
  },
  {
    term: 'Hyperbole',
    definition:
      'Deliberate and obvious exaggeration used for emphasis, humour, or to convey the intensity of an emotion or experience. Hyperbole is not meant to be taken literally but to communicate strength of feeling.',
    example:
      'In Romeo and Juliet: "I have more care to stay than will to go. Come, death, and welcome!" — Romeo exaggerates to show the depth of his love.',
    category: 'Literary Technique',
    examTip:
      'Explain that the exaggeration is deliberate and what emotion or point it intensifies.',
  },
  {
    term: 'Irony',
    definition:
      'When the intended meaning of words is the opposite of their literal meaning, or when a situation turns out contrary to expectations. Irony can create humour, bitterness, or dramatic tension.',
    example:
      'In An Inspector Calls, Birling says the Titanic is "unsinkable" — the audience knows it sank, making his confidence deeply ironic and undermining his authority.',
    category: 'Literary Technique',
    examTip:
      'Explain the gap between what is said/expected and what is actually true. Show why this gap matters.',
  },
  {
    term: 'Repetition',
    definition:
      'Using the same word, phrase, or structure more than once for emphasis. Repetition draws attention, creates rhythm, and can convey obsession, urgency, or an idea the writer wants to be unforgettable.',
    example:
      'In Macbeth: "Tomorrow, and tomorrow, and tomorrow" — the repetition conveys the meaningless, endless monotony of life after guilt has consumed Macbeth.',
    category: 'Literary Technique',
    examTip:
      'Always say why the writer repeats this specific word or phrase. What feeling or idea does the repetition reinforce?',
  },
  {
    term: 'Emotive Language',
    definition:
      'Words and phrases deliberately chosen to provoke an emotional response in the reader, such as "heartbreaking", "devastating", or "innocent". It is designed to make the reader feel rather than just understand.',
    example:
      'In source texts about war: "the trembling child clutched her mother" — "trembling" and "clutched" make us feel sympathy and fear.',
    category: 'Literary Technique',
    examTip:
      'Name the emotion being triggered (sympathy, anger, fear) and quote the specific words that trigger it.',
  },
  {
    term: 'Declarative Sentence',
    definition:
      'A sentence that makes a statement or declaration of fact. Declarative sentences convey certainty, authority, or calm depending on context and are the most common sentence type in English.',
    example:
      '"It was the best of times, it was the worst of times." — Dickens\' declarative opening establishes authority and scope.',
    category: 'Grammar',
    examTip:
      'Note how declarative sentences can convey confidence or finality. They state something as though it cannot be questioned.',
  },
  {
    term: 'Interrogative Sentence',
    definition:
      'A sentence that asks a question. In fiction, interrogative sentences can show a character\'s confusion, involve the reader by making them think, or create uncertainty and tension.',
    example:
      '"Was this the face that launch\'d a thousand ships?" — the question form invites reflection rather than stating a fact.',
    category: 'Grammar',
    examTip:
      'Explain the purpose of the question — does it show doubt, involve the reader, create suspense, or challenge?',
  },
  {
    term: 'Exclamatory Sentence',
    definition:
      'A sentence ending with an exclamation mark that expresses strong emotion — shock, anger, joy, or fear. Exclamatory sentences convey intensity and can reveal a character\'s heightened emotional state.',
    example:
      'In Romeo and Juliet: "O Romeo, Romeo! Wherefore art thou Romeo!" — Juliet\'s exclamations reveal her passionate desperation.',
    category: 'Grammar',
    examTip:
      'Link the exclamation to the character\'s emotional state. What strong feeling is breaking through?',
  },
  {
    term: 'Imperative Sentence',
    definition:
      'A sentence that gives a command, instruction, or order. In fiction, imperatives can show power, desperation, or control. The subject "you" is often implied rather than stated.',
    example:
      'In Macbeth: "Come, you spirits that tend on mortal thoughts, unsex me here" — Lady Macbeth uses imperatives to command supernatural forces.',
    category: 'Grammar',
    examTip:
      'Consider who is giving the command and what this reveals about power dynamics or emotional state.',
  },
  {
    term: 'Semantic Shift',
    definition:
      'A change in the dominant word field or meaning pattern within a text, marking a turning point in mood, tone, or theme. Tracking semantic shifts shows you understand how a text develops.',
    example:
      'In A Christmas Carol, the language shifts from cold, harsh terms ("hard", "sharp", "flint") to warm, joyful ones ("merry", "happy", "warm") as Scrooge transforms.',
    category: 'Structure',
    examTip:
      'Identify where the shift occurs and what it signals — a change in mood, a revelation, or a turning point.',
  },
  {
    term: 'Volta',
    definition:
      'A turn or shift in a poem or passage where the argument, mood, or focus changes direction. The volta is a crucial structural moment that often holds the key to understanding the writer\'s purpose.',
    example:
      'In many sonnets, the volta occurs at line 9 (Petrarchan) or before the final couplet (Shakespearean), shifting from problem to resolution.',
    category: 'Structure',
    examTip:
      'Identify where the shift happens and what changes — from positive to negative, from question to answer, etc.',
  },
  {
    term: 'In Medias Res',
    definition:
      'A Latin term meaning "in the middle of things" — when a story begins in the middle of the action rather than at the beginning. This technique creates immediate tension and hooks the reader.',
    example:
      'Bayonet Charge by Ted Hughes opens mid-action: "Suddenly he awoke and was running" — the reader is thrust into the chaos of battle.',
    category: 'Structure',
    examTip:
      'Explain how starting in the middle creates urgency, disorientation, or excitement for the reader.',
  },
  {
    term: 'Cliffhanger',
    definition:
      'Ending a chapter, scene, or passage at a moment of high tension or unresolved suspense. Cliffhangers compel the reader to continue reading and maintain engagement.',
    example:
      'Chapter endings in The Woman in Black often end with unanswered questions or sudden scares, compelling the reader forward.',
    category: 'Structure',
    examTip:
      'Explain what is left unresolved and how the uncertainty affects the reader\'s experience.',
  },
  {
    term: 'First Person Narrator',
    definition:
      'A story told from the "I" perspective, where the narrator is a character within the story. First person creates intimacy but also means the reader only knows what this one character knows and thinks.',
    example:
      'In Jane Eyre: "Reader, I married him" — the first person address creates a confiding, intimate relationship with the reader.',
    category: 'Narrative',
    examTip:
      'Consider reliability — does the narrator have biases, limited knowledge, or reasons to mislead?',
  },
  {
    term: 'Third Person Omniscient',
    definition:
      'A narrator who knows everything about all characters, including their thoughts and feelings, and can move freely between perspectives. This gives the reader a god-like overview of events.',
    example:
      'In A Christmas Carol, Dickens\' omniscient narrator can show us Scrooge\'s private thoughts and also describe scenes Scrooge is not present for.',
    category: 'Narrative',
    examTip:
      'Explain what advantage the omniscient viewpoint gives — does it create dramatic irony or provide a balanced view?',
  },
  {
    term: 'Unreliable Narrator',
    definition:
      'A narrator whose account of events cannot be fully trusted, whether because they are biased, mistaken, lying, or mentally unstable. The reader must look beyond their words to find the truth.',
    example:
      'In The Tell-Tale Heart by Poe: the narrator insists they are sane while describing murder — their unreliability creates horror and dramatic irony.',
    category: 'Narrative',
    examTip:
      'Show evidence that the narrator cannot be trusted and explain what effect this has on the reader\'s interpretation.',
  },
  {
    term: 'Syndetic Listing',
    definition:
      'A list that uses conjunctions (and, or, but) between each item, creating a flowing, connected, or overwhelming effect. The repeated conjunction can suggest abundance or endlessness.',
    example:
      '"He bought apples and oranges and grapes and bananas" — the repeated "and" makes the list feel never-ending and plentiful.',
    category: 'Grammar',
    examTip:
      'Contrast with asyndetic listing. The conjunctions slow the pace and create a sense of connection or accumulation.',
  },
  {
    term: 'Asyndetic Listing',
    definition:
      'A list without conjunctions, using only commas to separate items. This creates a fast, breathless pace and can suggest chaos, urgency, or an overwhelming quantity of things.',
    example:
      '"He ran, stumbled, fell, crawled" — the lack of conjunctions creates a rapid, relentless pace mirroring the frantic action.',
    category: 'Grammar',
    examTip:
      'Comment on the pace created. Asyndetic listing speeds things up and can make a scene feel frantic or overwhelming.',
  },
  {
    term: 'Parenthetical Phrase',
    definition:
      'Additional information inserted into a sentence using brackets, dashes, or commas. Parenthetical phrases add extra detail, asides, or commentary without disrupting the main flow of the sentence.',
    example:
      'In first-person narratives: "My father — a cold, distant man — never once smiled" — the aside adds character detail while maintaining narrative flow.',
    category: 'Grammar',
    examTip:
      'Consider why the writer chose to add this information as an aside rather than in the main sentence — is it revealing, ironic, or emotional?',
  },
  {
    term: 'Colons and Semicolons',
    definition:
      'A colon introduces what follows (an explanation, list, or elaboration). A semicolon links two closely related independent clauses. Both create deliberate pauses and show relationships between ideas.',
    example:
      '"She knew one thing: she would never return." — the colon builds anticipation before the revelation.',
    category: 'Grammar',
    examTip:
      'Explain the relationship the punctuation creates — does the colon reveal, explain, or build suspense?',
  },
  {
    term: 'Discourse Markers',
    definition:
      'Words and phrases that signal the direction or structure of a text, such as "however", "moreover", "in contrast", "finally". They guide the reader through the argument or narrative.',
    example:
      '"However, the truth was far more disturbing" — "however" signals a shift from what was expected to a darker reality.',
    category: 'Structure',
    examTip:
      'Identify what change or shift the discourse marker signals — a contradiction, addition, conclusion, or sequence.',
  },
];

const languagePaper2Terms = [
  {
    term: 'Rhetoric',
    definition:
      'The art of persuasive speaking or writing. Rhetoric uses techniques like repetition, rhetorical questions, and emotive language to convince, persuade, or move an audience. Understanding rhetoric helps you analyse non-fiction texts.',
    example:
      'Martin Luther King\'s "I Have a Dream" speech uses rhetoric masterfully — repetition, metaphor, and direct address combine to inspire and persuade.',
    category: 'Rhetoric',
    examTip:
      'Use "rhetoric" as an umbrella term when several persuasive techniques work together. Show how they combine for effect.',
  },
  {
    term: 'Rhetorical Question',
    definition:
      'A question asked for effect rather than to get an answer. Rhetorical questions make the reader think, create a sense of shared agreement, or challenge opposing views without stating a position directly.',
    example:
      '"Are we really going to stand by and do nothing?" — the expected answer is "no", making the audience feel compelled to act.',
    category: 'Rhetoric',
    examTip:
      'Explain the implied answer and how it positions the reader to agree with the writer.',
  },
  {
    term: 'Tricolon (Rule of Three)',
    definition:
      'A group of three words, phrases, or clauses used together for emphasis. Three items create a satisfying pattern that feels complete and memorable. Tricolons are a cornerstone of persuasive writing.',
    example:
      '"Government of the people, by the people, for the people" — Lincoln\'s tricolon creates a powerful, memorable rhythm.',
    category: 'Rhetoric',
    examTip:
      'Identify all three elements and explain how the pattern creates emphasis, rhythm, or a sense of completeness.',
  },
  {
    term: 'Anaphora',
    definition:
      'The deliberate repetition of a word or phrase at the start of successive sentences or clauses. In non-fiction, anaphora creates a rhythmic, persuasive beat that builds momentum and hammers home a message.',
    example:
      '"We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields" — Churchill\'s anaphora builds determination.',
    category: 'Rhetoric',
    examTip:
      'Comment on the cumulative effect — each repetition adds weight and urgency to the argument.',
  },
  {
    term: 'Hyperbole',
    definition:
      'Deliberate exaggeration used to emphasise a point, create humour, or express strong feelings in persuasive or non-fiction writing. Readers know it is not literally true, but it conveys the intensity of the writer\'s view.',
    example:
      '"This will be the greatest disaster in human history" — the exaggeration amplifies the urgency of the writer\'s argument.',
    category: 'Rhetoric',
    examTip:
      'Explain that the exaggeration is intentional and what emotional response it aims to provoke in the reader.',
  },
  {
    term: 'Statistics',
    definition:
      'Numerical data used in non-fiction texts to support arguments with evidence. Statistics make claims seem factual, credible, and researched, though they can also be used selectively to mislead.',
    example:
      '"90% of scientists agree that climate change is real" — the statistic gives the argument authority and makes disagreement seem unreasonable.',
    category: 'Rhetoric',
    examTip:
      'Consider whether the statistics are used fairly or selectively. Do they genuinely support the argument or manipulate the reader?',
  },
  {
    term: 'Counter-Argument',
    definition:
      'Acknowledging and addressing an opposing viewpoint before dismissing or refuting it. Including counter-arguments makes a writer seem fair and reasonable while actually strengthening their own position.',
    example:
      '"Some may argue that homework is beneficial; however, research shows that excessive homework increases student stress without improving outcomes."',
    category: 'Rhetoric',
    examTip:
      'Show how the writer uses the counter-argument to their advantage — they seem balanced while actually undermining the opposition.',
  },
  {
    term: 'Emotive Language',
    definition:
      'Words and phrases chosen specifically to trigger an emotional response in the reader, such as "innocent children", "heartless cruelty", or "devastating loss". It bypasses logic to appeal directly to feelings.',
    example:
      '"Thousands of helpless animals are abandoned every winter" — "helpless" and "abandoned" trigger sympathy and guilt in the reader.',
    category: 'Rhetoric',
    examTip:
      'Name the specific emotion being targeted and explain how it supports the writer\'s purpose.',
  },
  {
    term: 'Imperative Verbs',
    definition:
      'Command words that tell the reader to do something: "consider", "imagine", "stop", "act". In non-fiction, imperatives create urgency, authority, and a sense that the reader must respond.',
    example:
      '"Act now before it is too late." — the imperative "act" puts pressure on the reader to respond immediately.',
    category: 'Rhetoric',
    examTip:
      'Explain the power dynamic — the writer positions themselves as an authority telling the reader what to do.',
  },
  {
    term: 'Direct Address',
    definition:
      'Speaking directly to the reader or audience using "you" or "we". "You" challenges or involves the reader personally. "We" creates a sense of unity and shared responsibility between writer and audience.',
    example:
      '"You cannot ignore this problem any longer" — direct address makes the issue feel personal and unavoidable.',
    category: 'Rhetoric',
    examTip:
      'Distinguish between "you" (confrontational or personal) and "we" (inclusive, building solidarity) and explain the effect.',
  },
  {
    term: 'Inclusive Pronouns',
    definition:
      'Using "we", "us", and "our" to create a sense of shared identity and common purpose between the writer and the audience. This makes the reader feel included in the argument rather than lectured at.',
    example:
      '"We must act together to protect our future" — "we" and "our" make the reader feel part of a collective responsibility.',
    category: 'Rhetoric',
    examTip:
      'Explain how inclusive pronouns build solidarity and make the reader feel they share the writer\'s values.',
  },
  {
    term: 'Expert Opinion / Appeal to Authority',
    definition:
      'Quoting or referencing an expert, professional, or respected figure to support an argument. This gives the writing credibility and makes the audience more likely to trust the claims being made.',
    example:
      '"According to Dr Sarah Jones, a leading psychologist, screen time directly affects sleep quality in teenagers."',
    category: 'Rhetoric',
    examTip:
      'Consider how the expert\'s credentials are used — does naming them as an expert make the argument harder to challenge?',
  },
  {
    term: 'Anecdote',
    definition:
      'A brief personal story or real-life example used to illustrate a point. Anecdotes make abstract arguments feel concrete and relatable, creating an emotional connection with the reader.',
    example:
      '"I remember, as a child, watching the last tree on our street being cut down. That moment stayed with me" — personal experience adds authenticity.',
    category: 'Rhetoric',
    examTip:
      'Explain how the anecdote makes the argument personal and relatable rather than abstract.',
  },
  {
    term: 'Tone',
    definition:
      'The attitude conveyed through the writer\'s word choices — angry, sarcastic, earnest, pleading, formal, or informal. In non-fiction, tone reveals the writer\'s position and influences how the reader responds.',
    example:
      'A newspaper editorial might adopt a mocking tone towards a politician: "Oh, how noble of them to finally notice."',
    category: 'Rhetoric',
    examTip:
      'Name the tone precisely and show which specific words create it. Explain how it positions the reader.',
  },
  {
    term: 'Sarcasm / Irony',
    definition:
      'Saying the opposite of what you mean, often to mock, criticise, or highlight absurdity. In non-fiction, sarcasm can undermine an opponent\'s argument by making it seem ridiculous.',
    example:
      '"What a wonderful idea — let\'s just ignore the problem and hope it goes away" — the sarcasm makes the opposing view seem foolish.',
    category: 'Rhetoric',
    examTip:
      'Show the gap between literal meaning and intended meaning, and explain how this undermines the target.',
  },
  {
    term: 'Formal Register',
    definition:
      'Using sophisticated vocabulary, complex sentences, and an impersonal tone appropriate for academic or professional contexts. Formal register conveys authority, seriousness, and expertise.',
    example:
      'A broadsheet editorial: "It is imperative that the government reconsiders its position" — formal register conveys authority and gravitas.',
    category: 'Rhetoric',
    examTip:
      'Explain how the level of formality affects credibility — does it make the writer seem knowledgeable and trustworthy?',
  },
  {
    term: 'Informal Register',
    definition:
      'Using colloquial language, contractions, slang, or a conversational tone to seem approachable and relatable. Informal register breaks down barriers between writer and reader.',
    example:
      '"Look, we all know the school lunch situation is a total mess" — the informal tone makes the writer seem like a friend, not a lecturer.',
    category: 'Rhetoric',
    examTip:
      'Explain how the informal tone builds rapport and makes the reader more receptive to the message.',
  },
  {
    term: 'Antithesis',
    definition:
      'Placing two opposing ideas in a balanced, parallel structure within a sentence. Antithesis creates a sharp contrast that is memorable and emphasises the difference between two positions.',
    example:
      '"It was the best of times, it was the worst of times" — Dickens\' antithesis captures the contradiction of the era.',
    category: 'Rhetoric',
    examTip:
      'Identify both halves of the contrast and explain what the balanced structure adds to the meaning.',
  },
  {
    term: 'Analogy',
    definition:
      'An extended comparison between two different things to explain a complex idea by relating it to something familiar. Analogies make difficult concepts accessible and can be very persuasive.',
    example:
      '"Trying to control the internet is like trying to hold water in your hands" — the analogy makes the impossibility of the task vivid and understandable.',
    category: 'Rhetoric',
    examTip:
      'Explain what the analogy helps the reader understand and whether the comparison is fair or misleading.',
  },
  {
    term: 'Allusion',
    definition:
      'An indirect reference to a well-known person, event, text, or cultural touchstone. Allusions add layers of meaning for readers who recognise the reference and can quickly evoke complex ideas.',
    example:
      '"This is not our finest hour" — alluding to Churchill suggests failure by inverting the famous wartime phrase.',
    category: 'Rhetoric',
    examTip:
      'Explain what the allusion references and what associations or feelings it brings into the text.',
  },
  {
    term: 'Flattery',
    definition:
      'Complimenting or praising the audience to win their favour and make them more receptive to the writer\'s argument. Flattery makes people feel valued and therefore more willing to agree.',
    example:
      '"As intelligent, caring citizens, you already know that this cannot continue" — flattery positions the audience as the kind of people who would agree.',
    category: 'Rhetoric',
    examTip:
      'Show how the flattery manipulates the audience into agreement by appealing to their self-image.',
  },
  {
    term: 'Loaded Language',
    definition:
      'Words chosen for their strong positive or negative connotations to influence the reader\'s opinion without presenting a balanced argument. Loaded language is a subtle form of bias.',
    example:
      'Describing migrants as "flooding" into a country uses loaded language — "flooding" connotes disaster and being overwhelmed.',
    category: 'Rhetoric',
    examTip:
      'Identify the loaded word, explain its connotations, and show how it biases the reader\'s response.',
  },
  {
    term: 'Logos (Logical Appeal)',
    definition:
      'Persuasion through logic, facts, evidence, and reasoning. Logos appeals to the reader\'s rationality by presenting well-structured arguments supported by data, making the case seem irrefutable.',
    example:
      '"Studies show that students who read for 20 minutes daily score 15% higher in comprehension tests" — logical evidence supports the claim.',
    category: 'Rhetoric',
    examTip:
      'Explain how the factual evidence or logical reasoning makes the argument harder to disagree with.',
  },
  {
    term: 'Ethos (Ethical Appeal)',
    definition:
      'Persuasion through establishing the writer\'s credibility, trustworthiness, or moral authority. Ethos makes the audience trust the writer and therefore accept their argument.',
    example:
      '"As a teacher with thirty years of experience, I can tell you..." — the writer uses their credentials to build trust.',
    category: 'Rhetoric',
    examTip:
      'Show how the writer establishes themselves as trustworthy, experienced, or morally upright.',
  },
  {
    term: 'Pathos (Emotional Appeal)',
    definition:
      'Persuasion through appealing to the reader\'s emotions — sympathy, fear, anger, guilt, or hope. Pathos bypasses logic and speaks directly to how the audience feels.',
    example:
      '"Imagine a child, alone and afraid, waiting for a meal that may never come" — pathos triggers sympathy and guilt to drive action.',
    category: 'Rhetoric',
    examTip:
      'Name the specific emotion being targeted and explain how it motivates the reader to think or act differently.',
  },
  {
    term: 'Bias',
    definition:
      'A one-sided or prejudiced presentation that favours a particular viewpoint. Bias can be shown through selective evidence, loaded language, omission of counter-arguments, or unfair representation.',
    example:
      'A newspaper that only quotes supporters of a policy and ignores critics is showing bias through selective evidence.',
    category: 'Rhetoric',
    examTip:
      'Identify specific evidence of bias — what has been included, excluded, exaggerated, or downplayed?',
  },
  {
    term: 'Subheadings',
    definition:
      'Titles given to sections within a text that break up content and guide the reader through the argument. Subheadings can be informative, provocative, or use rhetorical techniques.',
    example:
      'A subheading like "The Hidden Cost of Fast Fashion" signals the topic while using emotive language to engage the reader.',
    category: 'Structure',
    examTip:
      'Analyse the language of subheadings — they often use rhetorical techniques in miniature.',
  },
  {
    term: 'Topic Sentence',
    definition:
      'The opening sentence of a paragraph that introduces the main idea. In non-fiction, strong topic sentences guide the reader through the argument and create clear, logical structure.',
    example:
      '"The most compelling reason to ban plastic bags is the damage they cause to marine life." — this topic sentence signals the paragraph\'s focus.',
    category: 'Structure',
    examTip:
      'Note how topic sentences signal the direction of the argument. Strong writers use them to control the reader\'s journey.',
  },
  {
    term: 'Conclusion / Summation',
    definition:
      'The final section of a non-fiction text that draws together the argument, often with a call to action, memorable statement, or emotional appeal. A strong conclusion leaves a lasting impression.',
    example:
      '"The time for debate is over. The time for action is now." — a conclusion using short sentences and antithesis for maximum impact.',
    category: 'Structure',
    examTip:
      'Analyse how the ending reinforces the writer\'s message — does it summarise, challenge, or inspire?',
  },
  {
    term: 'Colloquialism',
    definition:
      'Informal, everyday language or slang used in writing to create a conversational tone. Colloquialisms make the writer seem relatable and down-to-earth, particularly when addressing a young audience.',
    example:
      '"Let\'s be real — nobody actually enjoys homework" — "let\'s be real" is colloquial and creates a casual, honest tone.',
    category: 'Rhetoric',
    examTip:
      'Explain how the colloquial language affects the writer-reader relationship and makes the argument more accessible.',
  },
  {
    term: 'Superlative',
    definition:
      'The highest degree of an adjective — "greatest", "worst", "most important". Superlatives create a sense of extremity and can make claims seem absolute and undeniable.',
    example:
      '"This is the most urgent crisis of our generation" — the superlative "most urgent" makes the issue seem unrivalled in importance.',
    category: 'Grammar',
    examTip:
      'Show how the superlative exaggerates or emphasises the writer\'s point and whether this is justified.',
  },
  {
    term: 'Comparative',
    definition:
      'A form of adjective or adverb used to compare two things — "better", "worse", "more significant". Comparatives help writers make judgements and rank the importance of issues.',
    example:
      '"Education is more important than ever in today\'s economy" — the comparative suggests increasing significance.',
    category: 'Grammar',
    examTip:
      'Explain what is being compared and what the comparison reveals about the writer\'s values or argument.',
  },
  {
    term: 'Conditional Language',
    definition:
      'Language that expresses possibilities or hypothetical situations using words like "if", "could", "might", "would". Conditional language creates uncertainty or presents scenarios the writer wants the reader to imagine.',
    example:
      '"If we do nothing, our children will inherit a broken world" — the conditional creates an alarming hypothetical future.',
    category: 'Grammar',
    examTip:
      'Explain whether the conditional is used to frighten, inspire hope, or present a fair consideration of possibilities.',
  },
  {
    term: 'Passive Voice',
    definition:
      'A sentence structure where the subject receives the action rather than performing it: "mistakes were made" instead of "I made mistakes". Passive voice can obscure responsibility or create a formal, impersonal tone.',
    example:
      '"Children are being failed by the education system" — the passive voice emphasises the children as victims rather than naming who is responsible.',
    category: 'Grammar',
    examTip:
      'Ask who is doing the action — if the passive voice hides this, explain why the writer might want to obscure responsibility.',
  },
  {
    term: 'Active Voice',
    definition:
      'A sentence structure where the subject performs the action directly: "The government failed children" is more direct and confrontational than the passive equivalent. Active voice creates clarity and accountability.',
    example:
      '"The council destroyed the historic building" — active voice names the responsible party directly, creating accountability.',
    category: 'Grammar',
    examTip:
      'Explain how the active voice makes the writing more direct, forceful, or confrontational.',
  },
  {
    term: 'Juxtaposition',
    definition:
      'Placing two contrasting ideas, facts, or images side by side to highlight their differences. In non-fiction, juxtaposition can expose hypocrisy, inequality, or contradiction in a powerful way.',
    example:
      '"While CEOs earn millions, their workers struggle to feed their families" — the juxtaposition exposes inequality.',
    category: 'Rhetoric',
    examTip:
      'Name both sides of the contrast and explain what point the writer makes by placing them together.',
  },
  {
    term: 'Climactic Order',
    definition:
      'Arranging ideas, arguments, or items in order of increasing importance, with the most powerful point saved for last. This builds momentum and ensures the strongest argument has the greatest impact.',
    example:
      '"Plastic harms wildlife, pollutes our oceans, and threatens human survival itself" — the arguments build in severity.',
    category: 'Structure',
    examTip:
      'Identify the progression from weakest to strongest and explain how the final point carries the most weight.',
  },
  {
    term: 'Shift in Tone',
    definition:
      'A deliberate change in the writer\'s attitude or voice within a text, such as moving from humour to seriousness, or from calm reasoning to passionate anger. Shifts grab attention and mark key turning points.',
    example:
      'An article might begin with lighthearted anecdotes before shifting to a serious, urgent tone: "But the reality is far from funny."',
    category: 'Structure',
    examTip:
      'Identify where the shift occurs, name both tones, and explain why the writer changes approach at that point.',
  },
  {
    term: 'Facts and Opinions',
    definition:
      'Facts are verifiable truths ("The population is 67 million"). Opinions are personal views ("This is unacceptable"). Writers blend facts and opinions to make their opinions seem factual and hard to challenge.',
    example:
      '"67 million people live in the UK, and the government is failing every single one" — a fact followed by an opinion presented as equally certain.',
    category: 'Rhetoric',
    examTip:
      'Distinguish between facts and opinions in the text. Show how blending them makes the argument more persuasive.',
  },
  {
    term: 'Call to Action',
    definition:
      'A direct appeal to the reader to do something specific — sign a petition, change behaviour, donate, or speak out. Calls to action are often placed at the end of persuasive texts for maximum impact.',
    example:
      '"Write to your MP today. Demand change. Do not let this injustice continue." — the call to action gives the reader a concrete next step.',
    category: 'Rhetoric',
    examTip:
      'Explain how the call to action makes the argument feel urgent and personal, giving the reader agency.',
  },
  {
    term: 'Epiphora (Epistrophe)',
    definition:
      'The repetition of a word or phrase at the END of successive clauses or sentences, the counterpart of anaphora. It creates emphasis through a hammering, conclusive effect.',
    example:
      '"...of the people, by the people, for the people" — "the people" at each clause\'s end emphasises democracy\'s core.',
    category: 'Rhetoric',
    examTip:
      'Identify the repeated ending word/phrase and explain what concept is being driven home through its repetition.',
  },
  {
    term: 'Parenthetical Aside',
    definition:
      'An additional comment inserted using brackets or dashes that adds the writer\'s personal opinion, a witty remark, or extra context. It creates a conversational, confiding tone.',
    example:
      '"The new policy (and I use that word loosely) has failed spectacularly" — the aside adds sarcastic commentary.',
    category: 'Rhetoric',
    examTip:
      'Explain the extra layer the aside adds — is it humorous, sarcastic, confiding, or explanatory?',
  },
];

const literaturePaper1Terms = [
  {
    term: 'Soliloquy',
    definition:
      'A speech in a play where a character speaks their thoughts aloud while alone on stage. Soliloquies reveal a character\'s true feelings, inner conflicts, and motivations that they hide from other characters.',
    example:
      'In Macbeth: "Is this a dagger which I see before me?" — Macbeth\'s soliloquy reveals his guilt and hallucination before Duncan\'s murder.',
    category: 'Drama',
    examTip:
      'Explain what the soliloquy reveals that other characters do NOT know. This often connects to dramatic irony.',
  },
  {
    term: 'Dramatic Irony',
    definition:
      'When the audience knows something that one or more characters on stage do not. Dramatic irony creates tension, humour, or pathos because the audience can see the gap between reality and the character\'s understanding.',
    example:
      'In Macbeth: Duncan praises Macbeth\'s loyalty while the audience knows Macbeth plans to murder him — creating unbearable tension.',
    category: 'Drama',
    examTip:
      'Always explain the gap: what does the audience know that the character does not? Then explain how this gap creates tension or pathos.',
  },
  {
    term: 'Tragic Hero',
    definition:
      'A protagonist of high status who falls from greatness due to a fatal flaw (hamartia) in their character. The tragic hero\'s downfall evokes pity and fear in the audience and often carries a moral lesson.',
    example:
      'Macbeth is a tragic hero — a respected warrior whose ambition (hamartia) leads to murder, madness, and death.',
    category: 'Drama',
    examTip:
      'Name the character\'s high status, their fatal flaw, and how the flaw leads to their downfall. Link to audience response.',
  },
  {
    term: 'Hamartia',
    definition:
      'A Greek term meaning "fatal flaw" — the weakness or error in judgement that leads to a tragic hero\'s downfall. Hamartia is what makes tragedy feel inevitable, as the seeds of destruction lie within the hero.',
    example:
      'In Macbeth: ambition is Macbeth\'s hamartia. In Romeo and Juliet: impulsiveness is Romeo\'s fatal flaw.',
    category: 'Drama',
    examTip:
      'Name the specific flaw (ambition, jealousy, pride) and show how it directly causes the character\'s suffering.',
  },
  {
    term: 'Hubris',
    definition:
      'Excessive pride or arrogance that leads a character to overreach or defy natural or divine order. Hubris often provokes punishment and is closely linked to the tragic hero\'s downfall.',
    example:
      'In Macbeth: Macbeth\'s hubris grows as he believes himself invincible after the witches\' prophecies — "I bear a charmed life."',
    category: 'Drama',
    examTip:
      'Show where the character\'s pride exceeds what is justified and explain how this arrogance leads to their punishment.',
  },
  {
    term: 'Catharsis',
    definition:
      'The emotional release or purging experienced by the audience at the end of a tragedy. Through pity and fear, the audience is moved to reflect on the themes and feel a sense of emotional resolution.',
    example:
      'At the end of Macbeth, the audience feels catharsis — pity for Macbeth\'s wasted potential and relief that order is restored.',
    category: 'Drama',
    examTip:
      'Link catharsis to the audience\'s experience: what emotions are released and what moral reflection is provoked?',
  },
  {
    term: 'Aside',
    definition:
      'A short remark made by a character that is heard by the audience but not by other characters on stage. Asides reveal hidden thoughts, create dramatic irony, and let the audience in on secrets.',
    example:
      'In Macbeth: "The Prince of Cumberland! That is a step / On which I must fall down, or else o\'erleap" — Macbeth\'s aside reveals his murderous intent.',
    category: 'Drama',
    examTip:
      'Explain what the aside reveals to the audience that other characters cannot hear, and why this matters.',
  },
  {
    term: 'Foreshadowing',
    definition:
      'Hints or clues early in a text that suggest future events. In Shakespeare and novels, foreshadowing builds dramatic tension by creating a sense of inevitability about what is to come.',
    example:
      'In Romeo and Juliet: "My only love sprung from my only hate" — Juliet\'s words foreshadow the tragic outcome of loving an enemy.',
    category: 'Narrative',
    examTip:
      'Connect the early hint to the later event explicitly. Explain how it makes the reader/audience feel the outcome is unavoidable.',
  },
  {
    term: 'Motif',
    definition:
      'A recurring image, idea, or symbol throughout a text that reinforces themes. In Shakespeare and novels, motifs create patterns of meaning that deepen the reader\'s understanding of key ideas.',
    example:
      'In Macbeth: blood is a motif representing guilt — from "bloody execution" to "Will all great Neptune\'s ocean wash this blood clean?"',
    category: 'Literary Technique',
    examTip:
      'Track the motif through the text. Show how it appears at different points and how its meaning develops.',
  },
  {
    term: 'Symbolism',
    definition:
      'When an object, character, setting, or colour represents a deeper meaning beyond its literal purpose. Symbols communicate complex themes through concrete, memorable images.',
    example:
      'In A Christmas Carol: Marley\'s chains symbolise the burden of greed — "I wear the chain I forged in life."',
    category: 'Literary Technique',
    examTip:
      'Name what the symbol represents and show how it connects to the text\'s broader themes.',
  },
  {
    term: 'Allegory',
    definition:
      'A story where characters, events, and settings represent abstract ideas or moral/political concepts, creating a sustained metaphor throughout the entire text. The surface story has a deeper, hidden meaning.',
    example:
      'Animal Farm by Orwell is an allegory of the Russian Revolution — each animal represents a political figure or group.',
    category: 'Literary Technique',
    examTip:
      'Explain both the surface meaning and the deeper meaning, showing how the allegory works on two levels throughout.',
  },
  {
    term: 'Gothic',
    definition:
      'A genre and set of conventions featuring darkness, mystery, supernatural elements, extreme emotions, decay, and the blurring of boundaries. Gothic writing explores fear, the unknown, and transgression.',
    example:
      'In Jekyll and Hyde: the foggy London streets, the mysterious door, and the theme of hidden evil are all Gothic conventions.',
    category: 'Literary Technique',
    examTip:
      'Name specific Gothic elements (darkness, decay, supernatural, isolation) and explain what fears or themes they explore.',
  },
  {
    term: 'Tragic Flaw',
    definition:
      'The character weakness that ultimately leads to a tragic hero\'s destruction. Closely related to hamartia, a tragic flaw is the single quality that, unchecked, brings about the hero\'s ruin.',
    example:
      'In Othello: jealousy is the tragic flaw that Iago exploits, transforming Othello from a noble general into a murderer.',
    category: 'Drama',
    examTip:
      'Show how the flaw is exploited by circumstances or other characters, and how different the outcome might have been without it.',
  },
  {
    term: 'Stage Directions',
    definition:
      'Instructions in a play script (usually in italics or brackets) that describe how actors should move, speak, or behave, or what the set should look like. They reveal character psychology and atmosphere.',
    example:
      'In An Inspector Calls: "(She looks at him almost in triumph)" — the stage direction reveals Sheila\'s growing confidence.',
    category: 'Drama',
    examTip:
      'Analyse stage directions as carefully as dialogue — they reveal emotions, power shifts, and atmosphere that words alone do not.',
  },
  {
    term: 'Monologue',
    definition:
      'A long speech by one character, either to other characters or to the audience. Unlike a soliloquy, other characters may be present. Monologues reveal character and advance themes.',
    example:
      'In An Inspector Calls: the Inspector\'s final speech is a monologue that serves as the moral message of the entire play.',
    category: 'Drama',
    examTip:
      'Explain what the monologue reveals or argues and how other characters and the audience respond to it.',
  },
  {
    term: 'Protagonist',
    definition:
      'The main character in a story or play, around whom the central conflict revolves. The protagonist is not always heroic — they may be morally complex or even villainous.',
    example:
      'In Macbeth, Macbeth is the protagonist — the play follows his rise to power and devastating moral decline.',
    category: 'Drama',
    examTip:
      'Consider whether the protagonist changes (dynamic) or stays the same (static), and what their journey reveals.',
  },
  {
    term: 'Antagonist',
    definition:
      'A character who opposes, conflicts with, or creates obstacles for the protagonist. Antagonists drive the plot forward and often embody themes or values opposite to the protagonist.',
    example:
      'In A Christmas Carol, Scrooge is initially his own antagonist — his miserly nature opposes his potential for goodness.',
    category: 'Drama',
    examTip:
      'Consider whether the antagonist is a character, a force, or even an aspect of the protagonist themselves.',
  },
  {
    term: 'Iambic Pentameter',
    definition:
      'A rhythmic pattern of ten syllables per line, alternating unstressed and stressed beats (da-DUM da-DUM da-DUM da-DUM da-DUM). Shakespeare uses it for noble characters, with disruptions signalling emotional turmoil.',
    example:
      'In Macbeth: "So FOUL and FAIR a DAY I HAVE not SEEN" — the regular iambic pentameter creates a formal, measured rhythm.',
    category: 'Poetry',
    examTip:
      'Note when characters break from iambic pentameter — disrupted rhythm suggests emotional disturbance or a shift in power.',
  },
  {
    term: 'Prose vs Verse',
    definition:
      'In Shakespeare, higher-status or emotionally elevated characters often speak in verse (rhythmic, structured lines), while lower-status or comic characters speak in prose (unstructured). Shifts between them reveal character.',
    example:
      'In Macbeth, the Porter speaks in prose, contrasting with the verse of the nobles. Lady Macbeth shifts to prose when she goes mad.',
    category: 'Drama',
    examTip:
      'If a character switches from verse to prose or vice versa, explain what this reveals about their state of mind or status.',
  },
  {
    term: 'Pathetic Fallacy',
    definition:
      'When the weather or environment reflects the emotional state of characters or the moral atmosphere of a scene. In Shakespeare and novels, storms often accompany moral chaos or violence.',
    example:
      'In Macbeth, the night of Duncan\'s murder is filled with "unruly" weather — nature itself reflects the horror of regicide.',
    category: 'Literary Technique',
    examTip:
      'Link the specific weather/natural event to the specific emotion or moral event it mirrors.',
  },
  {
    term: 'Social Context',
    definition:
      'The historical and cultural circumstances in which a text was written or set, and how these influence its themes and characters. Understanding context helps explain why characters act as they do.',
    example:
      'In An Inspector Calls (set 1912, written 1945), the social context of class inequality is central — Priestley critiques Edwardian attitudes.',
    category: 'Literary Technique',
    examTip:
      'Never bolt context on — weave it into your analysis. Explain HOW the context shapes the characters\' behaviour or the writer\'s message.',
  },
  {
    term: 'Peripeteia (Reversal of Fortune)',
    definition:
      'A sudden reversal in a character\'s circumstances, from good to bad or bad to good. In tragedy, peripeteia marks the turning point where the hero\'s fortunes begin to decline irreversibly.',
    example:
      'In Macbeth: the murder of Duncan is the peripeteia — from this point, Macbeth\'s life spirals into paranoia and destruction.',
    category: 'Drama',
    examTip:
      'Identify the exact moment of reversal and explain how everything changes from that point.',
  },
  {
    term: 'Anagnorisis (Recognition)',
    definition:
      'The moment when a character realises the truth about their situation or themselves. In tragedy, anagnorisis often comes too late to prevent disaster but adds depth to the character\'s suffering.',
    example:
      'In Macbeth: "I have lived long enough" — Macbeth finally recognises the emptiness of his ambition, but it is too late.',
    category: 'Drama',
    examTip:
      'Show what the character finally understands, why it is too late, and how it affects the audience\'s response.',
  },
  {
    term: 'Deus Ex Machina',
    definition:
      'An unexpected power, event, or character that suddenly appears to solve an otherwise unsolvable problem. In some texts this is seen as a weakness; in others, it serves a deliberate purpose.',
    example:
      'The ghosts in A Christmas Carol function as a deus ex machina — supernatural intervention that forces Scrooge\'s transformation.',
    category: 'Narrative',
    examTip:
      'Consider whether the sudden resolution feels earned or forced, and what it suggests about the writer\'s message.',
  },
  {
    term: 'Foil Character',
    definition:
      'A character whose qualities contrast with and highlight those of another character, usually the protagonist. Foils help the audience understand both characters more clearly through comparison.',
    example:
      'In Jekyll and Hyde: Utterson is a foil to Jekyll — his restraint and morality highlight Jekyll\'s recklessness and transgression.',
    category: 'Drama',
    examTip:
      'Explain what the contrast reveals about each character and how it deepens our understanding of both.',
  },
  {
    term: 'Bildungsroman',
    definition:
      'A "coming of age" story that follows the moral, psychological, and emotional growth of a young protagonist from childhood to adulthood. The genre focuses on personal development and self-discovery.',
    example:
      'Great Expectations is a bildungsroman — Pip grows from a naive boy into a man who understands the true meaning of being a gentleman.',
    category: 'Narrative',
    examTip:
      'Track how the protagonist changes over the course of the novel and what experiences drive their growth.',
  },
  {
    term: 'Microcosm',
    definition:
      'A small, contained setting or group that represents the larger world. Writers use microcosms to explore big themes on a manageable scale, making abstract ideas concrete.',
    example:
      'In An Inspector Calls: the Birling dining room is a microcosm of Edwardian society — each character represents a different social attitude.',
    category: 'Literary Technique',
    examTip:
      'Explain how the small setting represents the wider world and what the writer is saying about society through it.',
  },
  {
    term: 'The Supernatural',
    definition:
      'Elements that go beyond the natural world — ghosts, witches, visions, prophecies, or unexplained phenomena. The supernatural creates fear, wonder, and moral questions about the boundaries of human experience.',
    example:
      'In Macbeth: the witches, Banquo\'s ghost, and the dagger vision are supernatural elements that blur the line between guilt and the paranormal.',
    category: 'Literary Technique',
    examTip:
      'Consider whether the supernatural is real within the text or a projection of a character\'s mind, and what this ambiguity adds.',
  },
  {
    term: 'Dramatic Tension',
    definition:
      'The sense of anticipation, uncertainty, or suspense created in a play through conflict, secrets, timing, or audience knowledge. Dramatic tension keeps the audience engaged and emotionally invested.',
    example:
      'In Macbeth: dramatic tension builds as Macbeth debates whether to murder Duncan — the audience waits, horrified, to see if he will go through with it.',
    category: 'Drama',
    examTip:
      'Identify what creates the tension (conflict, secret, dilemma) and explain how the audience is affected.',
  },
  {
    term: 'Dramatic Climax',
    definition:
      'The point of highest tension or intensity in a play or novel, where the central conflict reaches its peak. The climax is the moment of greatest emotional impact and often determines the final outcome.',
    example:
      'In Macbeth: the climax can be identified as the banquet scene, where Macbeth\'s guilt and paranoia are publicly exposed through Banquo\'s ghost.',
    category: 'Drama',
    examTip:
      'Explain why this moment is the peak of tension and how it determines what follows.',
  },
  {
    term: 'Denouement',
    definition:
      'The final outcome or resolution of a story, following the climax. The denouement ties up loose ends, reveals consequences, and establishes a new status quo for the surviving characters.',
    example:
      'In Macbeth: the denouement sees Malcolm crowned king, restoring order — "the time is free" signals that Macbeth\'s tyranny is over.',
    category: 'Narrative',
    examTip:
      'Explain how the denouement resolves the conflict and what final message or feeling it leaves the audience with.',
  },
  {
    term: 'Omniscient Narrator',
    definition:
      'A narrator who knows everything about all characters and events, including their thoughts and feelings. In novels, omniscient narrators can comment on events, guide the reader\'s judgement, and create dramatic irony.',
    example:
      'In A Christmas Carol, the omniscient narrator describes Scrooge\'s inner transformation and can move between different locations and times.',
    category: 'Narrative',
    examTip:
      'Show how the narrator\'s knowledge shapes what the reader knows and how this creates particular effects.',
  },
  {
    term: 'Setting as Character',
    definition:
      'When a setting is described so vividly or plays such a significant role that it functions almost like a character in its own right, influencing events and reflecting themes.',
    example:
      'In Jekyll and Hyde: London is almost a character — its fog, dark streets, and hidden spaces mirror the secrecy and duality of the plot.',
    category: 'Literary Technique',
    examTip:
      'Show how the setting is active rather than passive — does it influence characters, reflect themes, or create atmosphere?',
  },
  {
    term: 'Linear Narrative',
    definition:
      'A story told in chronological order, from beginning to middle to end. Linear narratives are straightforward and allow the reader to follow cause and effect clearly.',
    example:
      'A Christmas Carol follows a linear structure across one night: past, present, future, then morning — mirroring Scrooge\'s clear journey of transformation.',
    category: 'Structure',
    examTip:
      'Explain why the writer chose a linear structure — does it create a clear moral journey or show cause and effect?',
  },
  {
    term: 'Non-Linear Narrative',
    definition:
      'A story told out of chronological order, using flashbacks, flash-forwards, multiple timelines, or fragmented structure. Non-linear narratives can mirror confusion, reveal information gradually, or create suspense.',
    example:
      'In An Inspector Calls, the Inspector reveals events out of order, forcing each character to confront their part in Eva Smith\'s death gradually.',
    category: 'Structure',
    examTip:
      'Explain why the writer breaks chronological order — does it create mystery, mirror a character\'s state, or control revelation?',
  },
  {
    term: 'Morality Play',
    definition:
      'A type of drama that teaches a moral lesson, often featuring characters who represent abstract qualities like greed, charity, or justice. The audience learns through the characters\' experiences.',
    example:
      'An Inspector Calls has elements of a morality play — the Inspector acts as a moral figure judging the Birlings\' sins.',
    category: 'Drama',
    examTip:
      'Identify the moral lesson and explain how the characters\' fates teach the audience about right and wrong.',
  },
  {
    term: 'Subtext',
    definition:
      'The underlying meaning beneath what characters actually say — the unspoken thoughts, feelings, or implications hidden in dialogue. What is left unsaid can be as important as what is said.',
    example:
      'In An Inspector Calls: when Gerald says "I\'d had a hard day" while explaining his affair, the subtext is that he wants sympathy.',
    category: 'Drama',
    examTip:
      'Explain what the character really means beneath their words and why they cannot or will not say it directly.',
  },
  {
    term: 'Power Dynamics',
    definition:
      'The shifting relationships of control, authority, and influence between characters in a text. Power dynamics reveal social hierarchies, gender roles, and the nature of leadership or oppression.',
    example:
      'In Macbeth: the power dynamic between Macbeth and Lady Macbeth shifts — she initially dominates but becomes powerless as guilt destroys her.',
    category: 'Drama',
    examTip:
      'Track how power shifts between characters and explain what causes these shifts and what they reveal.',
  },
  {
    term: 'Eponymous Character',
    definition:
      'A character who gives their name to the title of the work. The eponymous character is usually, but not always, the protagonist.',
    example:
      'In Macbeth, Macbeth is the eponymous character; in Jekyll and Hyde, both Jekyll and Hyde share the eponymous role, reflecting duality.',
    category: 'Narrative',
    examTip:
      'Use the correct term: "the eponymous Macbeth" is more sophisticated than just "the title character".',
  },
  {
    term: 'Didactic',
    definition:
      'Writing that is intended to teach a moral lesson or instruct the reader. Didactic texts have a clear message the writer wants the audience to learn and apply to their own lives.',
    example:
      'A Christmas Carol is didactic — Dickens explicitly teaches the reader about the importance of generosity and compassion through Scrooge\'s transformation.',
    category: 'Literary Technique',
    examTip:
      'Name the lesson the writer wants to teach and explain how the narrative structure delivers it.',
  },
];

const literaturePaper2Terms = [
  {
    term: 'Enjambment',
    definition:
      'When a sentence or phrase runs over from one line of poetry to the next without punctuation, creating a flowing, unbroken rhythm. Enjambment can mirror movement, urgency, or uncontrollable emotion.',
    example:
      'In Storm on the Island by Heaney: "We are prepared: we build our houses squat, / Sink walls in rock" — enjambment carries the action forward.',
    category: 'Poetry',
    examTip:
      'Explain what the enjambment mirrors — is it flowing thought, urgency, loss of control, or continuous movement?',
  },
  {
    term: 'Caesura',
    definition:
      'A pause within a line of poetry, created by punctuation (comma, full stop, dash) in the middle of a line. Caesura breaks the rhythm, creating emphasis, hesitation, or a dramatic pause.',
    example:
      'In Remains by Armitage: "his bloody life in my bloody hands." — the full stop creates a caesura that forces the reader to pause on the horror.',
    category: 'Poetry',
    examTip:
      'Identify the punctuation that creates the pause and explain its effect — does it create shock, reflection, or emphasis?',
  },
  {
    term: 'Volta',
    definition:
      'A "turn" in a poem where the argument, mood, or focus shifts direction. The volta is a crucial structural moment, especially in sonnets, and often holds the key to the poem\'s meaning.',
    example:
      'In Sonnet 29 by Shakespeare: the volta at "Yet in these thoughts myself almost despising" shifts from self-pity to joy.',
    category: 'Poetry',
    examTip:
      'Name exactly where the volta occurs and what changes — from despair to hope, from present to past, etc.',
  },
  {
    term: 'Stanza',
    definition:
      'A group of lines in a poem separated from other groups by a blank line, similar to a paragraph in prose. Stanza length and regularity affect rhythm, pace, and visual impact.',
    example:
      'In Ozymandias, the single 14-line stanza mirrors the unbroken desert landscape and the relentless passage of time.',
    category: 'Poetry',
    examTip:
      'Comment on stanza length and regularity — does the structure feel controlled, chaotic, or fragmented?',
  },
  {
    term: 'Quatrain',
    definition:
      'A four-line stanza or section of a poem. Quatrains are one of the most common structural units in English poetry and form the building blocks of many sonnets and ballads.',
    example:
      'In London by Blake: the poem is structured in quatrains with an ABAB rhyme scheme, creating a controlled, measured rhythm.',
    category: 'Poetry',
    examTip:
      'Note what the regular four-line structure contributes — control, formality, a song-like quality, or containment.',
  },
  {
    term: 'Couplet',
    definition:
      'Two consecutive lines of poetry that usually rhyme and form a complete thought. In sonnets, the final couplet often delivers a twist, conclusion, or summary of the poem\'s argument.',
    example:
      'In Shakespeare\'s Sonnet 18: "So long as men can breathe, or eyes can see, / So long lives this, and this gives life to thee" — the couplet resolves the poem.',
    category: 'Poetry',
    examTip:
      'Explain how the couplet wraps up or twists the poem\'s argument. What final thought does it leave the reader with?',
  },
  {
    term: 'Free Verse',
    definition:
      'Poetry that does not follow a regular metre, rhyme scheme, or line length. Free verse gives the poet freedom to shape rhythm around meaning and can feel natural, conversational, or unpredictable.',
    example:
      'In Tissue by Imtiaz Dharker: the free verse and varying line lengths mirror the fragility and flexibility of paper.',
    category: 'Poetry',
    examTip:
      'Explain WHY the poet chose free verse — does it mirror freedom, disorder, natural speech, or lack of control?',
  },
  {
    term: 'Iambic Pentameter',
    definition:
      'A rhythm of ten syllables per line, alternating unstressed and stressed: da-DUM da-DUM da-DUM da-DUM da-DUM. It mirrors the natural rhythm of English speech and is associated with formality.',
    example:
      'In Ozymandias: "I MET a TRA-vel-ler FROM an AN-tique LAND" — the iambic pentameter gives the sonnet a measured, storytelling rhythm.',
    category: 'Poetry',
    examTip:
      'Note where the rhythm is regular (suggesting control) and where it breaks (suggesting emotional disruption).',
  },
  {
    term: 'Dramatic Monologue',
    definition:
      'A poem spoken by a single character (not the poet) to a silent listener, revealing the speaker\'s personality, attitudes, and often their flaws. The reader must read between the lines.',
    example:
      'My Last Duchess by Browning is a dramatic monologue — the Duke reveals his controlling, jealous nature while seeming to discuss art.',
    category: 'Poetry',
    examTip:
      'Explain what the speaker reveals about themselves unintentionally. The gap between what they say and what we understand is key.',
  },
  {
    term: 'Rhyme Scheme',
    definition:
      'The pattern of rhyming words at the end of each line, labelled with letters (ABAB, ABBA, etc.). Rhyme scheme creates structure, musicality, and can link ideas or create a sense of completion.',
    example:
      'In London by Blake: the ABAB rhyme scheme creates a relentless, march-like rhythm, mirroring the speaker\'s walk through the city.',
    category: 'Poetry',
    examTip:
      'Identify the pattern and explain what it contributes — does it feel controlled, natural, forced, or liberating?',
  },
  {
    term: 'Half Rhyme (Slant Rhyme)',
    definition:
      'Words that almost rhyme but do not quite match, such as "eyes/light" or "moon/on". Half rhymes create a sense of unease, incompleteness, or dissonance that undermines expectations.',
    example:
      'In Exposure by Owen: "snow-dazed / dozed" — the half rhymes create discomfort, reflecting the soldiers\' suffering.',
    category: 'Poetry',
    examTip:
      'Explain how the near-miss of the rhyme creates unease or dissatisfaction, mirroring the poem\'s themes.',
  },
  {
    term: 'Sonnet',
    definition:
      'A 14-line poem with a specific structure and rhyme scheme. Petrarchan sonnets have an octave (8 lines) and sestet (6 lines). Shakespearean sonnets have three quatrains and a final couplet.',
    example:
      'Ozymandias by Shelley is a Petrarchan sonnet, though its irregular rhyme scheme mirrors the decay and disorder of the ruined statue.',
    category: 'Poetry',
    examTip:
      'Identify which type of sonnet and explain how the structure (especially the volta) develops the argument.',
  },
  {
    term: 'Ballad',
    definition:
      'A narrative poem that tells a story, traditionally with regular four-line stanzas (quatrains), an ABAB or ABCB rhyme scheme, and a musical quality. Ballads often deal with love, loss, or dramatic events.',
    example:
      'The Charge of the Light Brigade by Tennyson has a ballad-like quality, telling the story of the soldiers\' doomed charge in a rhythmic, memorable way.',
    category: 'Poetry',
    examTip:
      'Link the ballad form to its content — ballads tell stories, so consider how the narrative quality serves the poem.',
  },
  {
    term: 'Elegy',
    definition:
      'A poem of mourning for the dead, expressing grief and often celebrating the life of the person lost. Elegies can also mourn the loss of something abstract, like youth or innocence.',
    example:
      'Poppies by Jane Weir has elegiac qualities — the mother mourns the loss of her son, weaving memories with grief.',
    category: 'Poetry',
    examTip:
      'Identify what or who is being mourned and how the poem moves between grief, memory, and acceptance.',
  },
  {
    term: 'Persona',
    definition:
      'The voice or character adopted by the poet, which may or may not be the poet themselves. Understanding persona means not automatically assuming the "I" in a poem is the poet\'s own voice.',
    example:
      'In Checking Out Me History by John Agard, the persona is a Caribbean voice challenging the Eurocentric education system.',
    category: 'Poetry',
    examTip:
      'Distinguish between the poet and the persona. Use "the speaker" rather than the poet\'s name when discussing the voice.',
  },
  {
    term: 'Refrain',
    definition:
      'A line or group of lines repeated at intervals throughout a poem, often at the end of each stanza. Refrains create rhythm, emphasis, and can develop in meaning through repetition.',
    example:
      'In Checking Out Me History: "Dem tell me" is a refrain — its repetition emphasises the frustration of being taught only European history.',
    category: 'Poetry',
    examTip:
      'Track how the refrain\'s meaning or emotional weight changes each time it appears.',
  },
  {
    term: 'Sibilance',
    definition:
      'Repetition of "s", "sh", and soft "c" sounds, creating a hissing or whispering effect. In poetry, sibilance can be sinister, seductive, soothing, or secretive depending on context.',
    example:
      'In Ozymandias: "the lone and level sands stretch" — the sibilance mimics the sound of sand and wind across the empty desert.',
    category: 'Poetry',
    examTip:
      'Link the hissing sound to the mood. Is it threatening, peaceful, secretive, or desolate?',
  },
  {
    term: 'Alliteration',
    definition:
      'Repetition of consonant sounds at the beginning of nearby words. In poetry, alliteration creates rhythm, draws attention to phrases, and can create sound effects that mirror meaning.',
    example:
      'In The Charge of the Light Brigade: "Storm\'d at with shot and shell" — the alliterative "s" and "sh" sounds mimic gunfire.',
    category: 'Poetry',
    examTip:
      'Name the specific sound and explain what effect it creates — is it harsh, soft, rhythmic, or violent?',
  },
  {
    term: 'Anaphora',
    definition:
      'Repetition of a word or phrase at the start of successive lines or stanzas in poetry. Anaphora creates a rhythmic, accumulating, or incantatory effect that builds emotional power.',
    example:
      'In London by Blake: "In every..." is repeated at the start of lines, creating a sense of universality — suffering is everywhere.',
    category: 'Poetry',
    examTip:
      'Explain the hammering effect of the repetition and what idea or emotion it reinforces.',
  },
  {
    term: 'End-Stopped Line',
    definition:
      'A line of poetry that ends with punctuation (full stop, comma, semicolon), creating a pause at the line\'s end. End-stopped lines feel complete, controlled, and measured.',
    example:
      'In London by Blake: "I wander thro\' each charter\'d street," — each end-stopped line feels definitive and controlled.',
    category: 'Poetry',
    examTip:
      'Contrast with enjambment. End-stopped lines feel controlled, while enjambment feels flowing or uncontrolled.',
  },
  {
    term: 'Metre',
    definition:
      'The rhythmic pattern of stressed and unstressed syllables in a line of poetry. Metre creates the beat and pace of a poem — regular metre feels controlled; irregular metre feels disrupted.',
    example:
      'In The Charge of the Light Brigade: the galloping dactylic metre (DUM-da-da) mimics the rhythm of horses charging into battle.',
    category: 'Poetry',
    examTip:
      'Describe the effect of the rhythm. Does it feel like a heartbeat, a march, a gallop, or a stumble?',
  },
  {
    term: 'Blank Verse',
    definition:
      'Poetry written in iambic pentameter that does NOT rhyme. Blank verse sounds natural and speech-like while maintaining a formal rhythm, making it ideal for serious or reflective content.',
    example:
      'In The Prelude by Wordsworth: the blank verse mirrors natural speech while giving the autobiographical reflections a dignified rhythm.',
    category: 'Poetry',
    examTip:
      'Explain how blank verse balances formality (the metre) with naturalness (no rhyme).',
  },
  {
    term: 'Irony',
    definition:
      'When words mean the opposite of their surface meaning, or when outcomes contradict expectations. In poetry, irony creates bitterness, dark humour, or a critique of the gap between appearance and reality.',
    example:
      'In Ozymandias: "Look on my Works, ye Mighty, and despair!" is deeply ironic — the works have crumbled, and there is nothing to despair at.',
    category: 'Poetry',
    examTip:
      'Show the gap between what is said/expected and what is actually true, and explain the poet\'s purpose.',
  },
  {
    term: 'Juxtaposition',
    definition:
      'Placing contrasting ideas, images, or emotions side by side in a poem to highlight their differences and deepen meaning. Juxtaposition forces the reader to compare and reflect.',
    example:
      'In War Photographer by Duffy: the juxtaposition of the "fields which don\'t explode beneath the feet of running children" with the war zones creates a stark contrast.',
    category: 'Poetry',
    examTip:
      'Name both elements being contrasted and explain what the juxtaposition reveals or emphasises.',
  },
  {
    term: 'Symbolism',
    definition:
      'When an image or object in a poem represents something deeper or more abstract. Symbols give poems multiple layers of meaning and allow poets to communicate complex ideas through concrete images.',
    example:
      'In Tissue by Dharker: paper symbolises the fragility of human constructs — borders, money, identity — all as thin as tissue.',
    category: 'Poetry',
    examTip:
      'Name what the symbol represents and track how it develops through the poem.',
  },
  {
    term: 'Oxymoron',
    definition:
      'Two contradictory words placed together to create a paradox, such as "sweet sorrow" or "living death". In poetry, oxymorons capture complex, conflicting emotions or situations.',
    example:
      'In War Photographer: "ordinary pain" — the oxymoron suggests that in war zones, suffering has become grotesquely normal.',
    category: 'Poetry',
    examTip:
      'Explain what the contradiction reveals — what two conflicting ideas or emotions does it capture?',
  },
  {
    term: 'Pathetic Fallacy',
    definition:
      'When the natural world reflects or mirrors human emotions in a poem. Weather, landscape, and seasons are used to externalise internal feelings and create atmosphere.',
    example:
      'In Storm on the Island: the storm can be read as a metaphor for political conflict — nature reflects human turmoil.',
    category: 'Poetry',
    examTip:
      'Link the natural description directly to the emotional or thematic content of the poem.',
  },
  {
    term: 'Extended Metaphor',
    definition:
      'A metaphor that is developed and sustained over several lines or an entire poem, building a layered comparison. Extended metaphors allow poets to explore an idea in depth.',
    example:
      'In The Emigree by Carol Rumens: the lost city is an extended metaphor for memory, identity, and belonging.',
    category: 'Poetry',
    examTip:
      'Track how the metaphor develops — does it evolve, intensify, or shift as the poem progresses?',
  },
  {
    term: 'Ambiguity',
    definition:
      'When a word, phrase, or image has more than one possible meaning. Poets use ambiguity deliberately to create richness — different readers can interpret the same line in different, equally valid ways.',
    example:
      'In Remains by Armitage: "his bloody life in my bloody hands" — "bloody" could be literal (blood-covered) or a curse word, or both.',
    category: 'Poetry',
    examTip:
      'Explore multiple interpretations and use "this could suggest... alternatively..." to show sophisticated analysis.',
  },
  {
    term: 'Semantic Field',
    definition:
      'A group of words in a poem that relate to the same topic, creating a pattern of meaning. Semantic fields build atmosphere and reinforce themes through accumulated associations.',
    example:
      'In Exposure by Owen: a semantic field of cold — "iced", "frost", "frozen", "snow" — dominates, emphasising the soldiers\' suffering.',
    category: 'Poetry',
    examTip:
      'Name the semantic field precisely and explain how the pattern of related words builds a particular impression.',
  },
  {
    term: 'Persona',
    definition:
      'The voice or character through which a poem is spoken, which is NOT necessarily the poet. The persona may be a fictional character, a historical figure, or a version of the poet.',
    example:
      'In My Last Duchess by Browning: the persona is the Duke of Ferrara — a proud, controlling man revealing his dark nature.',
    category: 'Poetry',
    examTip:
      'Use "the speaker" rather than the poet\'s name. Analyse what the persona reveals, including unintentional self-exposure.',
  },
  {
    term: 'Tone Shift',
    definition:
      'A change in the poet\'s attitude or emotional register within a poem. Tone shifts mark key moments of realisation, contrast, or development and often coincide with the volta.',
    example:
      'In Poppies: the tone shifts from tender nostalgia to raw grief — "I traced the inscriptions on the war memorial" marks the turn.',
    category: 'Poetry',
    examTip:
      'Identify where the tone shifts, name both tones, and explain what triggers the change.',
  },
  {
    term: 'Imperative Verb',
    definition:
      'A command word used in poetry to create urgency, authority, or a rallying call. Imperatives demand action and position the speaker as powerful or passionate.',
    example:
      'In Ozymandias: "Look on my Works, ye Mighty, and despair!" — the imperative "Look" commands attention, though ironically there is nothing to see.',
    category: 'Poetry',
    examTip:
      'Explain who is commanding whom and what power dynamic this creates.',
  },
  {
    term: 'Concrete Poetry',
    definition:
      'Poetry where the visual arrangement of words on the page contributes to the meaning. The shape, layout, or typography of the poem is part of its message.',
    example:
      'In Tissue: the thin, sparse lines on the page mirror the thinness and fragility of the paper being described.',
    category: 'Poetry',
    examTip:
      'Describe how the poem looks on the page and explain how the visual layout reinforces the meaning.',
  },
  {
    term: 'Monologue',
    definition:
      'A poem or speech delivered by a single voice, often revealing the speaker\'s character through what they choose to say and how they say it. The reader must listen critically.',
    example:
      'In Remains: the soldier\'s monologue reveals his PTSD through repetitive, haunted language and the inability to stop reliving the event.',
    category: 'Poetry',
    examTip:
      'Consider what the speaker reveals unintentionally about themselves through their word choices and obsessions.',
  },
  {
    term: 'Epigraph',
    definition:
      'A short quotation or text placed at the beginning of a poem that sets the context, theme, or tone. Epigraphs frame the reader\'s interpretation before they even begin the poem.',
    example:
      'Some poems in the Power and Conflict anthology use epigraphs to provide historical context or set the mood.',
    category: 'Poetry',
    examTip:
      'Explain how the epigraph frames or informs the poem — what expectations or context does it create?',
  },
  {
    term: 'Deixis',
    definition:
      'Words whose meaning depends on context — "this", "that", "here", "there", "now", "then". In poetry, deixis can create immediacy, distance, or ambiguity about time and place.',
    example:
      'In Remains: "this looter" — the demonstrative "this" makes the memory feel immediate, as though the soldier is reliving it right now.',
    category: 'Poetry',
    examTip:
      'Explain whether the deictic word creates closeness or distance and what this suggests about the speaker\'s relationship to the subject.',
  },
  {
    term: 'Asyndeton',
    definition:
      'The omission of conjunctions between words, phrases, or clauses in a list. In poetry, asyndeton creates speed, urgency, or a sense of overwhelming accumulation.',
    example:
      'In Bayonet Charge: "raw / In raw-seamed hot khaki" — the lack of conjunctions creates a breathless, frantic pace.',
    category: 'Poetry',
    examTip:
      'Comment on the pace. Asyndeton speeds up the rhythm and can create a sense of chaos or relentlessness.',
  },
  {
    term: 'Polysyndeton',
    definition:
      'The deliberate use of many conjunctions between words, phrases, or clauses. Polysyndeton slows the pace and creates a sense of accumulation, endlessness, or weariness.',
    example:
      '"And the rain and the cold and the darkness" — the repeated "and" makes the misery feel unending.',
    category: 'Poetry',
    examTip:
      'Explain how the repeated conjunctions slow the reader down and create a sense of overwhelming quantity.',
  },
  {
    term: 'Tercet',
    definition:
      'A three-line stanza. Tercets can create a sense of instability (unlike the balanced four-line quatrain) and are associated with progression and unresolved tension.',
    example:
      'In The Emigree: the shifting between longer and shorter stanzas, including tercet-like groupings, mirrors the speaker\'s fragmented memories.',
    category: 'Poetry',
    examTip:
      'Comment on what the three-line form contributes — does it feel incomplete, unstable, or progressive?',
  },
  {
    term: 'Villanelle',
    definition:
      'A 19-line poem with five tercets and a final quatrain, using two repeating refrains and a strict ABA rhyme scheme. The repetitive structure creates an obsessive, incantatory quality.',
    example:
      'Dylan Thomas\'s "Do Not Go Gentle Into That Good Night" is a villanelle — the repeated lines create an urgent, pleading refrain.',
    category: 'Poetry',
    examTip:
      'Link the obsessive repetition of the form to the poem\'s theme — what idea or emotion is being circled around?',
  },
  {
    term: 'Lyric Poetry',
    definition:
      'A short poem expressing personal thoughts and emotions, often with a musical quality. Most poems in GCSE anthologies are lyric poems, focusing on the speaker\'s inner experience.',
    example:
      'In Poppies by Jane Weir: the poem is lyric — it expresses a mother\'s deeply personal grief and memory.',
    category: 'Poetry',
    examTip:
      'Identify the personal emotion at the heart of the poem and explain how the poet communicates it.',
  },
];

// ─── Board-specific assemblies ────────────────────────────────────────────────

// Helper: deep-clone an array of term objects
const clone = (arr) => arr.map((t) => ({ ...t }));

// AQA-specific additions / overrides
const aqaLang1Extra = [
  {
    term: 'Evaluate',
    definition:
      'An AQA-specific command word meaning to weigh up the effectiveness of a writer\'s methods by considering evidence for and against. You must give a personal judgement supported by textual evidence.',
    example:
      'AQA Paper 1 Q4: "To what extent do you agree?" requires you to evaluate — weigh up how effectively the writer creates tension using specific evidence.',
    category: 'Literary Technique',
    examTip:
      'Use phrases like "To a great extent..." or "While the writer effectively... it could be argued..." to show evaluation.',
  },
  {
    term: 'Narrative Voice',
    definition:
      'The distinctive voice through which a story is told, encompassing perspective, tone, attitude, and style. AQA Paper 1 often asks you to analyse how the narrative voice creates effects.',
    example:
      'In the 2019 AQA Paper 1 extract, the first-person narrator\'s breathless, fragmented voice conveys panic.',
    category: 'Narrative',
    examTip:
      'Comment on the narrator\'s word choices, sentence lengths, and attitude to show how their voice creates specific effects.',
  },
];

const aqaLang2Extra = [
  {
    term: 'Synthesis',
    definition:
      'AQA Paper 2 requires you to synthesise (combine) information from two different sources to show similarities or differences. You must compare across texts rather than analysing them separately.',
    example:
      'AQA Paper 2 Q2: "Use details from both sources to write a summary of the differences between..." requires synthesis.',
    category: 'Rhetoric',
    examTip:
      'Use connectives like "Similarly...", "In contrast...", "Both sources..." to explicitly link information across texts.',
  },
  {
    term: 'Compare',
    definition:
      'To identify similarities and differences between two texts, examining how writers use language and structure differently to present their viewpoints. A key AQA Paper 2 skill.',
    example:
      'AQA Paper 2 Q4: "Compare how the writers convey their different attitudes to..." requires direct comparison of methods.',
    category: 'Rhetoric',
    examTip:
      'Structure paragraphs around methods, not sources. Analyse Source A, then use "Similarly/Conversely, Source B..." to compare directly.',
  },
];

const aqaLit1Extra = [
  {
    term: 'Contextual Integration',
    definition:
      'AQA requires context to be woven into analysis rather than bolted on. You must show how historical, social, or cultural context influences the writer\'s choices and the text\'s meaning.',
    example:
      'Instead of: "In Victorian times, people were poor." Write: "Dickens presents the Cratchits\' poverty to reflect Victorian class inequality."',
    category: 'Literary Technique',
    examTip:
      'Always link context to the writer\'s intentions: "Dickens does X because in Victorian society..." — never separate context from analysis.',
  },
];

const aqaLit2Extra = [
  {
    term: 'Anthology Comparison',
    definition:
      'AQA Literature Paper 2 requires you to compare a named poem with one you choose from the anthology. You must find meaningful connections in theme, method, or structure between the poems.',
    example:
      'If given Ozymandias, you might compare it with My Last Duchess — both explore the theme of power and its abuse through dramatic speakers.',
    category: 'Poetry',
    examTip:
      'Choose a comparison poem that allows you to explore similarities AND differences. Start with the named poem, then bring in your choice.',
  },
  {
    term: 'Unseen Poetry Comparison',
    definition:
      'AQA Paper 2 Section C requires you to compare two unseen poems. You must identify and analyse similarities and differences in theme, language, and structure without prior study.',
    example:
      'The AQA unseen comparison might present two poems about loss — you compare how each poet uses imagery and structure to explore grief.',
    category: 'Poetry',
    examTip:
      'Focus on methods (how the poets write) rather than just themes (what they write about). Use comparative connectives throughout.',
  },
];

// Edexcel-specific additions / overrides
const edexcelLang1Extra = [
  {
    term: 'Assess',
    definition:
      'An Edexcel command word meaning to make a judgement about the quality or effectiveness of something, weighing up strengths and weaknesses. Similar to AQA\'s "evaluate" but Edexcel uses this terminology.',
    example:
      'Edexcel Paper 1 might ask: "Assess how effectively the writer creates a sense of danger." You must judge and justify.',
    category: 'Literary Technique',
    examTip:
      'Make a clear judgement and support it with evidence. Use phrases like "This is highly effective because..." or "While this works to some extent..."',
  },
  {
    term: 'Textual References',
    definition:
      'Edexcel emphasises the use of short, embedded quotations and references to the text rather than long copied-out quotes. Precise references demonstrate close reading.',
    example:
      'Instead of copying a whole sentence, embed: The writer\'s use of "shattered" suggests destruction and irreparable damage.',
    category: 'Literary Technique',
    examTip:
      'Keep quotations short (ideally single words or short phrases) and embed them within your sentences grammatically.',
  },
];

const edexcelLang2Extra = [
  {
    term: 'Analyse Persuasive Techniques',
    definition:
      'Edexcel Paper 2 focuses heavily on identifying and analysing how writers persuade, argue, or advise. You must name specific techniques and explain their intended effect on the reader.',
    example:
      'Edexcel might present a speech and ask you to analyse how the speaker uses language to persuade — identify rhetoric, emotive language, etc.',
    category: 'Rhetoric',
    examTip:
      'For every technique you identify, explain the EFFECT on the reader. What does it make them think, feel, or do?',
  },
];

const edexcelLit1Extra = [
  {
    term: 'Writer\'s Craft',
    definition:
      'Edexcel emphasises analysis of "the writer\'s craft" — the deliberate choices a writer makes regarding language, structure, form, and context. You must show that writing is a constructed artefact.',
    example:
      '"Shakespeare crafts Lady Macbeth\'s imperative verbs to demonstrate her dominance" — this shows awareness of deliberate authorial choice.',
    category: 'Literary Technique',
    examTip:
      'Use phrases like "Shakespeare crafts...", "Dickens constructs...", "the writer deliberately..." to show awareness of authorial intent.',
  },
];

const edexcelLit2Extra = [
  {
    term: 'Thematic Comparison',
    definition:
      'Edexcel Literature requires comparing how different texts explore shared themes. You must find conceptual links and compare writers\' methods, not just their subject matter.',
    example:
      'Comparing how Shelley in Ozymandias and Browning in My Last Duchess both explore the corrupting nature of power through dramatic speakers.',
    category: 'Poetry',
    examTip:
      'Structure around themes, not texts. Each paragraph should compare how both writers approach the same idea using different methods.',
  },
];

// OCR-specific additions / overrides
const ocrLang1Extra = [
  {
    term: 'Explain and Comment',
    definition:
      'OCR frequently uses "explain" and "comment on" as command words. "Explain" means make clear why something happens or what it means. "Comment on" means give your opinion on the effect.',
    example:
      'OCR might ask: "Explain how the writer uses language to create atmosphere" — you must explain the method AND its effect.',
    category: 'Literary Technique',
    examTip:
      'For "explain": focus on the HOW and WHY. For "comment on": add your personal response and judgement.',
  },
];

const ocrLang2Extra = [
  {
    term: 'Spoken Language Study',
    definition:
      'OCR includes spoken language as part of its assessment. You may need to analyse transcripts of speech, considering features like fillers, interruptions, turn-taking, and dialect.',
    example:
      'A transcript might show: "Well, erm, I think... yeah, basically..." — fillers and hedging suggest uncertainty or informal register.',
    category: 'Rhetoric',
    examTip:
      'Analyse spoken language features: pauses, fillers (um, er), overlaps, tag questions, dialect words, and code-switching.',
  },
];

const ocrLit1Extra = [
  {
    term: 'Close Reading',
    definition:
      'OCR places particular emphasis on close, detailed reading of specific passages. You must analyse language at word and phrase level, showing how small details create larger meanings.',
    example:
      'OCR might provide a short extract from a Shakespeare play and ask you to analyse language choices in fine detail.',
    category: 'Literary Technique',
    examTip:
      'Zoom in on individual words. The best OCR answers analyse at word level before zooming out to explain broader effects.',
  },
];

const ocrLit2Extra = [
  {
    term: 'Comparative Essay',
    definition:
      'OCR requires sustained comparison across texts in Literature Paper 2, with integrated analysis of both texts throughout rather than a "text A then text B" approach.',
    example:
      'An OCR essay might compare two modern prose texts, requiring you to weave analysis of both throughout every paragraph.',
    category: 'Literary Technique',
    examTip:
      'Never write a paragraph about only one text. Every paragraph must include comparison using connectives.',
  },
];

// WJEC-specific additions / overrides
const wjecLang1Extra = [
  {
    term: 'Analyse',
    definition:
      'WJEC\'s key command word meaning to examine something in detail by breaking it down into its parts and explaining how they work together. Analysis goes beyond identification to explain effects.',
    example:
      'WJEC might ask: "Analyse how the writer uses language and structure to create tension" — break down individual techniques and their effects.',
    category: 'Literary Technique',
    examTip:
      'For WJEC, always structure: identify technique → quote evidence → explain the effect on the reader.',
  },
  {
    term: 'Proofreading',
    definition:
      'WJEC includes a proofreading task where you must identify and correct errors in grammar, punctuation, and spelling in a given text. This tests technical accuracy directly.',
    example:
      'A WJEC proofreading task might include: "Their going too the shops" — you must correct to "They\'re going to the shops."',
    category: 'Grammar',
    examTip:
      'Read the text slowly and check: homophones (their/there/they\'re), apostrophes, comma splices, and subject-verb agreement.',
  },
];

const wjecLang2Extra = [
  {
    term: 'Transactional Writing',
    definition:
      'WJEC uses the term "transactional writing" for non-fiction writing tasks — letters, articles, speeches, and reports that have a clear purpose, audience, and format.',
    example:
      'A WJEC transactional writing task: "Write a letter to your headteacher arguing for longer lunch breaks." You must match format and audience.',
    category: 'Rhetoric',
    examTip:
      'Match your register, format, and techniques to the specified audience and purpose. A letter differs from a speech.',
  },
];

const wjecLit1Extra = [
  {
    term: 'Extract-Based Question',
    definition:
      'WJEC Literature provides an extract from the set text and asks you to analyse it in detail before broadening to the wider text. You must start close and then zoom out.',
    example:
      'WJEC might provide a passage from Macbeth and ask: "How does Shakespeare present ambition in this extract and elsewhere in the play?"',
    category: 'Literary Technique',
    examTip:
      'Spend roughly half your time on the extract and half on the wider text. Start close, then zoom out to track themes across the play.',
  },
];

const wjecLit2Extra = [
  {
    term: 'Welsh Poetry',
    definition:
      'WJEC anthologies include Welsh poets and poems reflecting Welsh identity, landscape, and experience. Understanding this cultural context enriches analysis of these poems.',
    example:
      'WJEC anthologies may include poets like Owen Sheers, whose work often explores Welsh landscape and identity.',
    category: 'Poetry',
    examTip:
      'When analysing Welsh poets, consider how landscape, community, and national identity inform their themes and imagery.',
  },
];

// ─── KS3 simplified terms ─────────────────────────────────────────────────────

const ks3LangReading = [
  {
    term: 'Metaphor',
    definition:
      'Saying something IS something else to make a comparison. For example, "he is a lion" does not mean he is actually a lion — it means he is brave and strong.',
    example:
      '"The classroom was a zoo" — this means it was noisy and chaotic, not that there were actual animals.',
    category: 'Literary Technique',
    examTip:
      'When you spot a metaphor, explain what the comparison tells us. What quality is being shared between the two things?',
  },
  {
    term: 'Simile',
    definition:
      'A comparison using "like" or "as" to describe something by linking it to something else. Similes help you picture what the writer means.',
    example:
      '"She ran like the wind" — this tells us she was very fast.',
    category: 'Literary Technique',
    examTip:
      'Look for "like" or "as" and explain what the comparison tells the reader about the person, place, or thing.',
  },
  {
    term: 'Personification',
    definition:
      'Making something that is not human sound like it is alive by giving it human actions or feelings. For example, "the sun smiled" gives the sun a human action.',
    example:
      '"The wind howled through the trees" — wind cannot actually howl, but this makes it sound alive and scary.',
    category: 'Literary Technique',
    examTip:
      'Ask yourself: can this thing really do this action? If not, it is personification. Explain what feeling it creates.',
  },
  {
    term: 'Alliteration',
    definition:
      'When words close together start with the same sound. Alliteration makes phrases catchy and draws your attention to them.',
    example:
      '"Peter Piper picked a peck of pickled peppers" — the repeated "p" sound makes this fun to say and easy to remember.',
    category: 'Literary Technique',
    examTip:
      'Say the sounds out loud. Do they sound soft, harsh, funny, or scary? That is the effect the writer wanted.',
  },
  {
    term: 'Onomatopoeia',
    definition:
      'A word that sounds like the noise it describes. Words like "bang", "crash", "whisper", and "sizzle" let you hear what is happening.',
    example:
      '"The bacon sizzled in the pan" — you can almost hear the sound just by reading the word "sizzled".',
    category: 'Literary Technique',
    examTip:
      'If a word sounds like what it describes, that is onomatopoeia. Explain how it helps the reader experience the scene.',
  },
  {
    term: 'Adjective',
    definition:
      'A describing word that tells you more about a noun (person, place, or thing). Adjectives help writers create pictures in your mind.',
    example:
      '"The tall, dark, mysterious stranger" — each adjective adds detail and builds a picture of the character.',
    category: 'Grammar',
    examTip:
      'When analysing a text, focus on interesting adjectives and explain what picture or feeling they create.',
  },
  {
    term: 'Verb',
    definition:
      'An action word or a "being" word. Strong verbs make writing more vivid and energetic. "Sprinted" is more powerful than "ran".',
    example:
      '"She crept through the darkness" — "crept" is a much more descriptive verb than "walked" because it suggests secrecy and care.',
    category: 'Grammar',
    examTip:
      'Look for powerful verbs and explain what they tell you beyond the basic action. What mood or feeling do they create?',
  },
  {
    term: 'Adverb',
    definition:
      'A word that describes how, when, or where something happens. Adverbs modify verbs and often end in "-ly".',
    example:
      '"She whispered softly" — "softly" tells us how she whispered, making the moment feel gentle and quiet.',
    category: 'Grammar',
    examTip:
      'Find adverbs and explain how they change the meaning of the verb. Does it make the action faster, slower, scarier, or gentler?',
  },
  {
    term: 'Noun',
    definition:
      'A word that names a person, place, thing, or idea. Abstract nouns name things you cannot touch (love, fear, hope). Concrete nouns name things you can (table, dog, river).',
    example:
      '"Fear filled the room" — "fear" is an abstract noun that names an emotion, while "room" is a concrete noun you can see.',
    category: 'Grammar',
    examTip:
      'Pay attention to abstract nouns (emotions, ideas) as they often reveal themes.',
  },
  {
    term: 'Pathetic Fallacy',
    definition:
      'When the weather matches the mood of a story. If a character is sad, it might be raining. If something scary is happening, it might be stormy and dark.',
    example:
      'In horror films, it always seems to be stormy when something bad happens — that is pathetic fallacy.',
    category: 'Literary Technique',
    examTip:
      'If you notice the weather matches the mood, point it out and explain the connection.',
  },
  {
    term: 'Imagery',
    definition:
      'Words that create pictures in your mind by appealing to your senses — what you can see, hear, smell, taste, or touch.',
    example:
      '"The warm, golden sunlight streamed through the window" — you can picture and almost feel the warmth.',
    category: 'Literary Technique',
    examTip:
      'Which of your five senses does the description appeal to? Name the sense and explain what you picture or feel.',
  },
  {
    term: 'Repetition',
    definition:
      'Using the same word or phrase more than once to make it stand out and emphasise its importance.',
    example:
      '"Never, never, never give up" — repeating "never" three times makes the message much stronger.',
    category: 'Literary Technique',
    examTip:
      'If a word is repeated, the writer wants you to notice it. Explain what idea or feeling it emphasises.',
  },
  {
    term: 'Rhetorical Question',
    definition:
      'A question that does not expect an answer. It is used to make the reader think or to make a point without stating it directly.',
    example:
      '"Who would want to live in a world without music?" — the expected answer is "nobody", making the point that music matters.',
    category: 'Rhetoric',
    examTip:
      'Work out what the expected answer is and explain what point the writer is making by asking rather than telling.',
  },
  {
    term: 'Emotive Language',
    definition:
      'Words chosen to make you feel a strong emotion — sympathy, anger, happiness, or fear. Writers use emotive language to influence how you feel about something.',
    example:
      '"The tiny, frightened kitten was abandoned in the cold" — words like "tiny", "frightened", and "abandoned" make you feel sorry for the kitten.',
    category: 'Literary Technique',
    examTip:
      'Name the emotion the words make you feel and explain which specific words trigger that emotion.',
  },
  {
    term: 'Contrast',
    definition:
      'When two very different things are placed next to each other so you notice their differences. Contrast helps the writer highlight important points.',
    example:
      '"The rich man in his mansion; the poor child in the street" — placing them side by side highlights the unfairness.',
    category: 'Literary Technique',
    examTip:
      'Name both things being contrasted and explain what the difference shows or teaches the reader.',
  },
  {
    term: 'First Person',
    definition:
      'When the story is told using "I" and "me" — the narrator is a character in the story. You see everything through their eyes only.',
    example:
      '"I walked into the room and immediately felt uneasy" — the "I" tells us this is first person and we experience what the narrator experiences.',
    category: 'Narrative',
    examTip:
      'If a text uses "I", consider what we can and cannot know. We only get one character\'s side of the story.',
  },
  {
    term: 'Third Person',
    definition:
      'When the story is told using "he", "she", or "they" — the narrator is outside the story looking in and can describe what different characters do.',
    example:
      '"She opened the door carefully. He waited outside, nervous." — the narrator describes both characters from the outside.',
    category: 'Narrative',
    examTip:
      'Third person lets the narrator describe multiple characters. Does the narrator seem to know everything, or just observe?',
  },
  {
    term: 'Setting',
    definition:
      'Where and when a story takes place. The setting creates mood and atmosphere and can tell you a lot about the characters and themes.',
    example:
      'A story set in a dark, abandoned house creates a very different mood from one set on a sunny beach.',
    category: 'Narrative',
    examTip:
      'Describe the setting and explain what mood it creates. How does it make the reader feel?',
  },
  {
    term: 'Tension',
    definition:
      'The feeling of suspense or worry that a writer creates to keep you reading. Tension makes you want to know what happens next.',
    example:
      '"She reached for the door handle. Something moved in the shadows behind her." — you want to keep reading to find out what happens.',
    category: 'Narrative',
    examTip:
      'If a passage makes you feel anxious or curious, explain HOW the writer creates that feeling — short sentences, scary words, unanswered questions.',
  },
  {
    term: 'Connotation',
    definition:
      'The hidden meaning or feeling behind a word. "Home" and "house" both mean where you live, but "home" feels warm and safe while "house" is just a building.',
    example:
      'Calling someone "childish" is negative, but calling them "childlike" is positive — even though both relate to children.',
    category: 'Literary Technique',
    examTip:
      'Think about what a word makes you feel or think of beyond its basic meaning. That is the connotation.',
  },
  {
    term: 'Hyperbole',
    definition:
      'A massive exaggeration used to make a point or be funny. Nobody means it literally — it is just to emphasise how strongly they feel.',
    example:
      '"I have told you a million times!" — obviously not literally a million, but the exaggeration shows frustration.',
    category: 'Literary Technique',
    examTip:
      'If something seems too extreme to be true, it is probably hyperbole. Explain what the exaggeration emphasises.',
  },
  {
    term: 'Dialogue',
    definition:
      'When characters speak to each other in a story. Dialogue reveals personality, relationships, and information in an engaging way.',
    example:
      '"Please," she whispered. "You have to help me." — the dialogue shows desperation and the relationship between characters.',
    category: 'Narrative',
    examTip:
      'Pay attention to HOW characters speak (what words they use, their tone) as well as WHAT they say.',
  },
  {
    term: 'Symbolism',
    definition:
      'When an object in a story represents something bigger. A dove might represent peace. A storm might represent anger or chaos.',
    example:
      'A wilting flower in a story might symbolise a dying relationship or fading hope.',
    category: 'Literary Technique',
    examTip:
      'If an object seems important or keeps appearing, think about what bigger idea it might represent.',
  },
  {
    term: 'Foreshadowing',
    definition:
      'Clues or hints early in a story about what will happen later. Foreshadowing builds suspense and makes you feel that something is coming.',
    example:
      '"Little did she know, this would be the last time she saw her home." — this hints that something bad is about to happen.',
    category: 'Narrative',
    examTip:
      'If a detail seems oddly specific or ominous, it might be foreshadowing. Note what it hints at.',
  },
  {
    term: 'Sentence Length',
    definition:
      'Writers change sentence length for effect. Short sentences create drama and tension. Long sentences build detail or create a flowing, calm feeling.',
    example:
      '"She stopped. Silence. Then — a scream." — the short sentences create tension and make each moment feel important.',
    category: 'Structure',
    examTip:
      'Notice when sentences suddenly get shorter or longer. The change is deliberate — explain what effect it creates.',
  },
  {
    term: 'Paragraph Structure',
    definition:
      'How a writer organises their paragraphs affects pace and focus. Short paragraphs create emphasis. Long paragraphs develop ideas in detail. One-line paragraphs grab attention.',
    example:
      'A one-sentence paragraph in the middle of a story — "He was gone." — stands out and creates dramatic impact.',
    category: 'Structure',
    examTip:
      'If a paragraph is noticeably short or long compared to others, the writer did this on purpose. Say why.',
  },
];

const ks3LangWriting = [
  {
    term: 'Topic Sentence',
    definition:
      'The first sentence of a paragraph that tells the reader what the paragraph will be about. A good topic sentence keeps your writing focused and organised.',
    example:
      '"School uniforms should be abolished for three important reasons." — this tells the reader exactly what the paragraph will argue.',
    category: 'Structure',
    examTip:
      'Start every paragraph with a clear topic sentence. It keeps you on track and helps the reader follow your argument.',
  },
  {
    term: 'Connective / Linking Word',
    definition:
      'Words and phrases that join ideas together — "however", "furthermore", "on the other hand", "in addition". They help your writing flow and show how your ideas connect.',
    example:
      '"School lunches are unhealthy. Furthermore, they are overpriced." — "furthermore" adds a second point to the first.',
    category: 'Grammar',
    examTip:
      'Use a variety of connectives. "However" shows contrast, "furthermore" adds a point, "therefore" shows a result.',
  },
  {
    term: 'Paragraph',
    definition:
      'A group of sentences about one main idea. Starting a new paragraph shows the reader that you are moving to a new point, time, place, or speaker.',
    example:
      'In an argument, each paragraph might cover one reason: Paragraph 1 — health; Paragraph 2 — cost; Paragraph 3 — environment.',
    category: 'Structure',
    examTip:
      'Use TiPToP to know when to start a new paragraph: Time changes, Place changes, Topic changes, Person changes.',
  },
  {
    term: 'Formal Language',
    definition:
      'Language that is serious, polite, and professional. You use formal language for essays, letters to important people, and speeches. Avoid slang and contractions.',
    example:
      'Formal: "I believe this issue requires urgent attention." Informal: "I reckon we need to sort this out."',
    category: 'Grammar',
    examTip:
      'Match your language to your audience. If writing to a headteacher or newspaper, use formal language.',
  },
  {
    term: 'Informal Language',
    definition:
      'Casual, everyday language that feels friendly and relaxed. You might use it in a blog, a conversation, or a letter to a friend. Contractions and slang are acceptable.',
    example:
      '"Can\'t believe they\'re getting rid of the school field — that\'s so unfair!" — casual and conversational.',
    category: 'Grammar',
    examTip:
      'Only use informal language when the task asks for it — like a blog post, a diary entry, or a letter to a friend.',
  },
  {
    term: 'Persuasive Writing',
    definition:
      'Writing that tries to convince the reader to agree with your point of view. It uses facts, opinions, emotional language, and rhetorical techniques.',
    example:
      'A letter arguing for longer break times might use statistics, emotional appeals, and rhetorical questions to persuade.',
    category: 'Rhetoric',
    examTip:
      'Remember the acronym AFOREST: Alliteration, Facts, Opinions, Rhetorical questions, Emotive language, Statistics, Tricolon.',
  },
  {
    term: 'Rule of Three',
    definition:
      'Using three words, phrases, or ideas together for a satisfying and memorable effect. Three just sounds right.',
    example:
      '"Education, education, education" or "We need to be braver, stronger, and more united than ever."',
    category: 'Rhetoric',
    examTip:
      'Use a rule of three in your own writing to make important points sound powerful and complete.',
  },
  {
    term: 'Rhetorical Question',
    definition:
      'A question you ask to make the reader think rather than to get an actual answer. It is a powerful persuasive technique.',
    example:
      '"Do we really want to live in a world where children go hungry?" — you do not expect anyone to say "yes".',
    category: 'Rhetoric',
    examTip:
      'Use rhetorical questions in speeches and arguments to involve the reader and make them agree with you.',
  },
  {
    term: 'Direct Address',
    definition:
      'Speaking directly to the reader using "you" or "we". It makes the reader feel personally involved and can be very persuasive.',
    example:
      '"You might think this does not affect you — but it does." — using "you" makes the reader feel personally targeted.',
    category: 'Rhetoric',
    examTip:
      'Use "you" to challenge or involve the reader. Use "we" to make them feel like you are on the same side.',
  },
  {
    term: 'Opening Hook',
    definition:
      'The first sentence or paragraph that grabs the reader\'s attention and makes them want to keep reading. Hooks can be questions, shocking facts, descriptions, or bold statements.',
    example:
      '"Imagine waking up tomorrow and discovering that books no longer exist." — an imaginative hook that instantly engages.',
    category: 'Structure',
    examTip:
      'Never start with "I am writing to..." — start with something that makes the reader sit up and pay attention.',
  },
  {
    term: 'Conclusion',
    definition:
      'The final paragraph of your writing that sums up your argument or leaves the reader with a memorable final thought. A strong conclusion is just as important as a strong opening.',
    example:
      '"We owe it to ourselves, and to future generations, to act now." — a conclusion that reinforces the argument and looks forward.',
    category: 'Structure',
    examTip:
      'Refer back to your opening to create a satisfying circular structure. End with a powerful statement, not a weak summary.',
  },
  {
    term: 'Counter-Argument',
    definition:
      'Acknowledging what the other side thinks before explaining why you disagree. This makes your argument stronger because you seem fair and open-minded.',
    example:
      '"Some people believe homework is essential. However, research shows that too much homework can actually reduce learning."',
    category: 'Rhetoric',
    examTip:
      'Use phrases like "Some may argue..." or "Critics might suggest..." before giving your response with "However..."',
  },
  {
    term: 'Varied Sentence Starters',
    definition:
      'Starting sentences in different ways to keep your writing interesting. You can start with adverbs, -ing words, conjunctions, or prepositional phrases.',
    example:
      'Instead of: "The dog barked. The dog ran. The dog jumped." Try: "Furiously, the dog barked. Racing forward, it sprinted. With a mighty leap, it jumped."',
    category: 'Grammar',
    examTip:
      'Never start three sentences in a row the same way. Vary your openings to impress the examiner.',
  },
  {
    term: 'Ambitious Vocabulary',
    definition:
      'Using interesting, precise words instead of basic ones. "Devastated" is more powerful than "sad". "Sprinted" is more vivid than "ran". Choose words carefully for effect.',
    example:
      'Instead of "The food was nice", try "The food was exquisite" or "The meal was a symphony of flavours."',
    category: 'Grammar',
    examTip:
      'You do not need a thesaurus for every word, but replace basic words with more precise or interesting ones where it matters most.',
  },
  {
    term: 'Semicolon',
    definition:
      'A punctuation mark (;) used to join two related sentences into one, or to separate items in a complex list. Using semicolons correctly impresses examiners.',
    example:
      '"The rain poured down; the streets were empty." — the semicolon shows these two ideas are closely connected.',
    category: 'Grammar',
    examTip:
      'Only use a semicolon between two complete sentences that are closely related. If in doubt, use a full stop instead.',
  },
  {
    term: 'Colon',
    definition:
      'A punctuation mark (:) used to introduce an explanation, a list, or a dramatic statement. It says to the reader: "here is what I mean."',
    example:
      '"There was only one thing left to do: run." — the colon builds suspense before the dramatic word.',
    category: 'Grammar',
    examTip:
      'Use a colon to introduce something important. The part before the colon should be a complete sentence.',
  },
  {
    term: 'Apostrophe',
    definition:
      'A punctuation mark (\') used for two things: to show ownership (the dog\'s bone) or to show missing letters in contractions (don\'t = do not).',
    example:
      '"The children\'s playground was closed." — the apostrophe shows the playground belongs to the children.',
    category: 'Grammar',
    examTip:
      'Common mistake: "it\'s" means "it is". "Its" (no apostrophe) means "belonging to it". Never write "banana\'s" for a plural.',
  },
  {
    term: 'Speech Marks',
    definition:
      'Punctuation used to show when someone is speaking. Everything a character says goes inside the speech marks, with correct punctuation inside.',
    example:
      '"I can\'t believe it!" she shouted. — notice the exclamation mark is inside the speech marks.',
    category: 'Grammar',
    examTip:
      'New speaker = new line. Punctuation goes inside the speech marks. Use a variety of speech verbs (whispered, exclaimed, muttered).',
  },
  {
    term: 'Simile',
    definition:
      'Using "like" or "as" to compare two things in your own writing. Similes make your descriptions more vivid and interesting.',
    example:
      'Instead of "The room was quiet", try "The room was as silent as a graveyard" — much more atmospheric.',
    category: 'Literary Technique',
    examTip:
      'Include at least one or two similes in your creative writing. Make sure they add something — avoid cliches like "as white as snow".',
  },
  {
    term: 'Metaphor',
    definition:
      'Saying something IS something else in your own writing to create a vivid comparison. Metaphors make your writing more powerful and imaginative.',
    example:
      'Instead of "She was very angry", try "She was a volcano about to erupt" — this paints a much stronger picture.',
    category: 'Literary Technique',
    examTip:
      'Use metaphors to show, not tell. Do not say how someone feels — compare them to something that shows it.',
  },
  {
    term: 'Show, Don\'t Tell',
    definition:
      'Instead of telling the reader how a character feels ("he was scared"), show them through actions, details, and senses ("his hands trembled; his breath came in short gasps").',
    example:
      'Tell: "She was happy." Show: "A grin spread across her face as she bounced on her toes, barely able to stand still."',
    category: 'Narrative',
    examTip:
      'This is one of the biggest things that separates good writing from great writing. Always try to SHOW emotions through actions and details.',
  },
  {
    term: 'Sensory Language',
    definition:
      'Writing that appeals to the five senses — sight, sound, smell, taste, and touch — to put the reader right in the middle of the scene.',
    example:
      '"The sharp tang of salt stung her lips as the cold spray hit her face" — taste and touch bring the seaside to life.',
    category: 'Literary Technique',
    examTip:
      'Try to include at least three different senses in your creative writing. Most students only write about what things look like.',
  },
  {
    term: 'Short Sentence for Effect',
    definition:
      'Using a very short sentence after longer ones to create drama, shock, or emphasis. The sudden change in length makes the reader pause.',
    example:
      '"She had been planning this moment for months, rehearsing every word, preparing for every outcome. She froze."',
    category: 'Structure',
    examTip:
      'Place one short sentence after several longer ones. The contrast creates impact.',
  },
  {
    term: 'Empathy',
    definition:
      'Understanding and sharing the feelings of another person. In writing, creating empathy means making the reader feel what your character feels.',
    example:
      'Making the reader feel sympathy for a lonely character by describing their small, empty flat and silent evenings.',
    category: 'Narrative',
    examTip:
      'To create empathy, use first person, include specific small details, and appeal to the reader\'s own experiences.',
  },
];

const ks3LitTerms1 = [
  {
    term: 'Plot',
    definition:
      'The sequence of events in a story — what happens from beginning to end. Understanding the plot helps you follow the story and discuss key moments.',
    example:
      'The plot of Romeo and Juliet: two young lovers from rival families meet, fall in love, and tragically die.',
    category: 'Narrative',
    examTip:
      'When discussing plot, focus on the most important events. What are the turning points that change everything?',
  },
  {
    term: 'Character',
    definition:
      'A person (or sometimes animal or creature) in a story. Characters have personalities, motivations, and relationships that drive the plot forward.',
    example:
      'Scrooge in A Christmas Carol is a character who starts as mean and miserly but transforms into a generous, kind man.',
    category: 'Narrative',
    examTip:
      'Think about what motivates a character — what do they want? What are they afraid of? How do they change?',
  },
  {
    term: 'Theme',
    definition:
      'The big ideas or messages in a text — like love, power, good vs evil, or growing up. Themes are what the writer wants you to think about.',
    example:
      'The theme of friendship in Of Mice and Men — Steinbeck explores how George and Lennie\'s bond gives them strength.',
    category: 'Literary Technique',
    examTip:
      'Themes are NOT the same as the plot. The plot is what happens; the theme is what it MEANS.',
  },
  {
    term: 'Genre',
    definition:
      'The type or category of a text — such as horror, comedy, romance, science fiction, fantasy, or thriller. Each genre has its own typical features.',
    example:
      'Horror features: darkness, suspense, monsters or ghosts, isolated settings, fear. Comedy features: misunderstandings, happy endings, funny characters.',
    category: 'Narrative',
    examTip:
      'Identify the genre and explain which features of the text fit that genre.',
  },
  {
    term: 'Protagonist',
    definition:
      'The main character in a story — the one the story is mostly about. The protagonist is not always a hero; sometimes they are flawed or even villainous.',
    example:
      'In The Hunger Games, Katniss is the protagonist — the story follows her journey and her struggles.',
    category: 'Narrative',
    examTip:
      'Ask: whose story is this? The protagonist is the character whose journey we follow and care about most.',
  },
  {
    term: 'Antagonist',
    definition:
      'The character who opposes or causes problems for the protagonist. The antagonist creates the conflict that drives the story forward.',
    example:
      'In Harry Potter, Voldemort is the antagonist — he is the villain Harry must defeat.',
    category: 'Narrative',
    examTip:
      'The antagonist does not have to be a person — it could be nature, society, or even the protagonist\'s own flaws.',
  },
  {
    term: 'Stage Directions',
    definition:
      'Instructions in a play (usually in italics or brackets) that tell actors how to move, speak, or behave. They also describe the set and lighting.',
    example:
      '"(She turns away angrily)" — this stage direction tells us the character is upset without any words being spoken.',
    category: 'Drama',
    examTip:
      'Stage directions are just as important as the words characters say. They reveal hidden emotions and reactions.',
  },
  {
    term: 'Soliloquy',
    definition:
      'A speech in a play where a character talks to themselves, sharing their private thoughts with the audience. No other characters hear it.',
    example:
      'In Romeo and Juliet, Juliet\'s "O Romeo, Romeo! Wherefore art thou Romeo?" is a soliloquy — she is thinking aloud.',
    category: 'Drama',
    examTip:
      'Soliloquies reveal what a character truly thinks and feels when nobody else is listening. They are very important to analyse.',
  },
  {
    term: 'Dramatic Irony',
    definition:
      'When the audience knows something that the characters in the play do not. This creates tension because you can see trouble coming but cannot warn them.',
    example:
      'In Romeo and Juliet, the audience knows Juliet is not really dead, but Romeo does not — this creates tragic dramatic irony.',
    category: 'Drama',
    examTip:
      'Explain what the audience knows and what the character does not, then explain what feelings this gap creates.',
  },
  {
    term: 'Rhyme',
    definition:
      'When words end with the same sound, like "cat" and "hat" or "love" and "dove". Rhyme makes poetry musical and memorable.',
    example:
      '"Twinkle, twinkle, little star / How I wonder what you are" — "star" and "are" rhyme.',
    category: 'Poetry',
    examTip:
      'Notice the rhyme pattern (AABB, ABAB, etc.) and think about what effect it creates — is it fun, formal, or sad?',
  },
  {
    term: 'Rhythm',
    definition:
      'The beat or pattern of stressed sounds in a poem. Like music, rhythm makes poetry flow and creates a mood.',
    example:
      'A fast rhythm (short words, strong beats) creates excitement. A slow rhythm (long words, gentle beats) creates calm.',
    category: 'Poetry',
    examTip:
      'Read the poem aloud to hear the rhythm. Does it sound like a march, a song, a heartbeat, or natural speech?',
  },
  {
    term: 'Stanza',
    definition:
      'A group of lines in a poem, separated by a blank line. Stanzas in poetry are like paragraphs in a story — they organise ideas.',
    example:
      'A poem with four stanzas of four lines each has a very regular, organised structure.',
    category: 'Poetry',
    examTip:
      'Count the stanzas and note if they are regular (same length) or irregular. This tells you about the poem\'s structure.',
  },
  {
    term: 'Flashback',
    definition:
      'When a story jumps back in time to show something that happened before the main events. Flashbacks give background information and help explain characters\' actions.',
    example:
      'A character might remember a childhood event that explains why they are afraid of water.',
    category: 'Narrative',
    examTip:
      'When you spot a flashback, explain what information it gives the reader and why the writer included it.',
  },
  {
    term: 'Cliff-hanger',
    definition:
      'Ending a chapter or scene at an exciting or tense moment, leaving the reader desperate to find out what happens next.',
    example:
      '"She reached for the door handle. Something grabbed her wrist. Then — darkness." — you have to keep reading!',
    category: 'Structure',
    examTip:
      'If a chapter ends with unanswered questions or mid-action, that is a cliff-hanger. Explain how it keeps you hooked.',
  },
  {
    term: 'Moral',
    definition:
      'The lesson or message that a story teaches. Fables and fairy tales have obvious morals, but most stories have morals too — they are just more subtle.',
    example:
      'The moral of A Christmas Carol: generosity and kindness are more important than money.',
    category: 'Literary Technique',
    examTip:
      'Ask yourself: what does the writer want me to learn from this story? That is the moral.',
  },
  {
    term: 'Tension',
    definition:
      'The feeling of suspense or unease in a text that keeps you on the edge of your seat. Writers create tension through pacing, description, and withholding information.',
    example:
      '"The door creaked open. Silence. Then footsteps — getting closer." — you feel tense because you do not know who is there.',
    category: 'Narrative',
    examTip:
      'Identify specific techniques the writer uses to build tension: short sentences, mysterious details, unanswered questions.',
  },
  {
    term: 'Context',
    definition:
      'The background information about when and where a text was written and what was happening in the world at that time. Context helps you understand why the writer wrote what they did.',
    example:
      'Knowing that Charles Dickens lived during the Industrial Revolution helps you understand why he wrote about poverty and inequality.',
    category: 'Literary Technique',
    examTip:
      'Always link context to the text. Do not just state facts about the time period — explain how they connect to what the writer does.',
  },
  {
    term: 'Narrator',
    definition:
      'The person or voice telling the story. The narrator might be a character in the story (first person) or someone outside it (third person).',
    example:
      'In Treasure Island, Jim Hawkins is the narrator — he tells us the story in his own words.',
    category: 'Narrative',
    examTip:
      'Think about whether you trust the narrator. Do they know everything? Could they be wrong or biased?',
  },
  {
    term: 'Monologue',
    definition:
      'A long speech by one character in a play, spoken to other characters (unlike a soliloquy, which is spoken alone). A monologue reveals character and advances the story.',
    example:
      'When a character gives a long speech explaining their past or their feelings to others, that is a monologue.',
    category: 'Drama',
    examTip:
      'Pay attention to what the character reveals in a monologue and how other characters react.',
  },
  {
    term: 'Verse',
    definition:
      'Writing arranged in lines with rhythm and often rhyme — the form used in poetry. Shakespeare also wrote many of his plays in verse.',
    example:
      'Romeo speaks in verse: "But soft, what light through yonder window breaks? / It is the east, and Juliet is the sun."',
    category: 'Poetry',
    examTip:
      'In Shakespeare, notice when characters switch from verse to prose — verse usually means the moment is more formal or emotional.',
  },
];

const ks3LitTerms2 = [
  {
    term: 'Speaking and Listening',
    definition:
      'The skills you need for effective communication — presenting ideas clearly, listening to others, and responding thoughtfully in discussions and presentations.',
    example:
      'In a class debate, you need to speak clearly, listen to the other side, and respond to their points.',
    category: 'Rhetoric',
    examTip:
      'Speak clearly, make eye contact, and use evidence to support your points. Listen actively and respond to what others say.',
  },
  {
    term: 'Body Language',
    definition:
      'Non-verbal communication through posture, gestures, facial expressions, and eye contact. How you stand and move affects how your audience receives your message.',
    example:
      'Standing tall with open arms suggests confidence. Crossing your arms and looking at the floor suggests nervousness or defensiveness.',
    category: 'Rhetoric',
    examTip:
      'In presentations, stand up straight, use hand gestures naturally, and make eye contact with different parts of the audience.',
  },
  {
    term: 'Tone of Voice',
    definition:
      'How you say something — your pitch, volume, speed, and emphasis. Changing your tone of voice can completely change the meaning of the same words.',
    example:
      'Saying "That\'s great" enthusiastically means you are genuinely pleased. Saying it flatly or sarcastically means the opposite.',
    category: 'Rhetoric',
    examTip:
      'Vary your tone to keep listeners engaged. Slow down for important points. Get louder for emphasis. Pause for dramatic effect.',
  },
  {
    term: 'Audience',
    definition:
      'The people who will read, hear, or watch your work. You must adjust your language, tone, and content to suit your audience.',
    example:
      'A speech to your classmates would be different from a speech to the headteacher — the audience changes your language choices.',
    category: 'Rhetoric',
    examTip:
      'Always think: who am I writing/speaking for? Adjust your formality, vocabulary, and examples to suit them.',
  },
  {
    term: 'Purpose',
    definition:
      'The reason for writing or speaking — to persuade, inform, entertain, describe, explain, or instruct. Your purpose determines your techniques and structure.',
    example:
      'A charity leaflet aims to persuade you to donate. A recipe aims to instruct you to cook a dish. Each has a different purpose.',
    category: 'Rhetoric',
    examTip:
      'Identify the purpose first, then choose techniques that match. Persuasion needs rhetoric; information needs facts; entertainment needs vivid language.',
  },
  {
    term: 'Presentation',
    definition:
      'A spoken piece delivered to an audience on a specific topic. Good presentations are well-structured, engaging, and delivered with confidence.',
    example:
      'A presentation about climate change might use facts, images, and a call to action to engage the audience.',
    category: 'Rhetoric',
    examTip:
      'Structure your presentation with a clear introduction, main points, and conclusion. Use cue cards, not a full script.',
  },
  {
    term: 'Debate',
    definition:
      'A structured argument where two sides present opposing viewpoints on a topic. In a debate, you must argue your position and respond to the other side.',
    example:
      'A debate about school uniforms: one side argues they promote equality; the other argues they limit individuality.',
    category: 'Rhetoric',
    examTip:
      'Listen to the other side carefully and respond to their specific points. Don\'t just repeat your own arguments — engage with theirs.',
  },
  {
    term: 'Feedback',
    definition:
      'Comments and suggestions given to help someone improve their work or performance. Good feedback is specific, kind, and helpful.',
    example:
      '"Your opening was really strong — try to use the same energy in your conclusion" — specific and constructive feedback.',
    category: 'Rhetoric',
    examTip:
      'When giving feedback, start with something positive, then suggest improvements, then end on an encouraging note.',
  },
  {
    term: 'Pace',
    definition:
      'How fast or slow you speak during a presentation. Varying your pace keeps the audience interested and helps emphasise important points.',
    example:
      'Speaking quickly during an exciting part creates energy. Slowing down for a key point makes the audience listen more carefully.',
    category: 'Rhetoric',
    examTip:
      'If you are nervous, you probably speak too fast. Consciously slow down, especially for your most important points.',
  },
  {
    term: 'Eye Contact',
    definition:
      'Looking at your audience while speaking, moving your gaze around the room. Eye contact builds trust, shows confidence, and keeps people engaged.',
    example:
      'Looking at different sections of the audience (left, middle, right) makes everyone feel included in your presentation.',
    category: 'Rhetoric',
    examTip:
      'Don\'t stare at one person or read from your notes the whole time. Glance at notes, then look up and speak to the audience.',
  },
  {
    term: 'Rhetorical Question (in speeches)',
    definition:
      'A question asked during a speech to make the audience think, not to get an answer. It is one of the most powerful speech techniques.',
    example:
      '"Do we want to be the generation that did nothing?" — the audience automatically thinks "no" and agrees with you.',
    category: 'Rhetoric',
    examTip:
      'Use rhetorical questions to open your speech or to transition between points. Pause after asking one for dramatic effect.',
  },
  {
    term: 'Power of Three (in speeches)',
    definition:
      'Using three words, phrases, or ideas together in a speech for maximum impact. Groups of three sound complete and are easy to remember.',
    example:
      '"We are determined, we are united, and we will succeed." — the three phrases build confidence and feel complete.',
    category: 'Rhetoric',
    examTip:
      'Use a power of three at the start or end of your speech for maximum impact.',
  },
  {
    term: 'Anecdote (in speeches)',
    definition:
      'A short personal story used in a speech to make your point relatable and real. Anecdotes connect with the audience on an emotional level.',
    example:
      '"Last summer, I volunteered at a food bank. One woman told me she hadn\'t eaten in two days." — personal and powerful.',
    category: 'Rhetoric',
    examTip:
      'Use a brief anecdote to open your speech or to illustrate your main point. Keep it short and relevant.',
  },
  {
    term: 'Cue Cards',
    definition:
      'Small cards with key words or phrases to remind you of your points during a speech. They help you stay on track without reading a full script.',
    example:
      'Instead of writing your whole speech on cards, write: "Point 1: health stats / Point 2: personal story / Point 3: call to action."',
    category: 'Rhetoric',
    examTip:
      'Write only key words on cue cards, not full sentences. This forces you to speak naturally rather than read robotically.',
  },
  {
    term: 'Conclusion (in speeches)',
    definition:
      'The final part of your speech that leaves a lasting impression. A strong conclusion sums up your argument and ends with something memorable.',
    example:
      '"So I ask you: will you be a bystander, or will you stand up and be counted?" — a powerful, challenging conclusion.',
    category: 'Rhetoric',
    examTip:
      'End with a rhetorical question, a call to action, or a power of three. Never end with "so, yeah, that\'s it."',
  },
];

// ─── Assemble the glossary ────────────────────────────────────────────────────

const paperGlossary = {
  AQA: {
    language: {
      1: [...clone(languagePaper1Terms), ...aqaLang1Extra],
      2: [...clone(languagePaper2Terms), ...aqaLang2Extra],
    },
    literature: {
      1: [...clone(literaturePaper1Terms), ...aqaLit1Extra],
      2: [...clone(literaturePaper2Terms), ...aqaLit2Extra],
    },
  },
  Edexcel: {
    language: {
      1: [...clone(languagePaper1Terms), ...edexcelLang1Extra],
      2: [...clone(languagePaper2Terms), ...edexcelLang2Extra],
    },
    literature: {
      1: [...clone(literaturePaper1Terms), ...edexcelLit1Extra],
      2: [...clone(literaturePaper2Terms), ...edexcelLit2Extra],
    },
  },
  OCR: {
    language: {
      1: [...clone(languagePaper1Terms), ...ocrLang1Extra],
      2: [...clone(languagePaper2Terms), ...ocrLang2Extra],
    },
    literature: {
      1: [...clone(literaturePaper1Terms), ...ocrLit1Extra],
      2: [...clone(literaturePaper2Terms), ...ocrLit2Extra],
    },
  },
  WJEC: {
    language: {
      1: [...clone(languagePaper1Terms), ...wjecLang1Extra],
      2: [...clone(languagePaper2Terms), ...wjecLang2Extra],
    },
    literature: {
      1: [...clone(literaturePaper1Terms), ...wjecLit1Extra],
      2: [...clone(literaturePaper2Terms), ...wjecLit2Extra],
    },
  },
  KS3: {
    language: {
      1: ks3LangReading,
      2: ks3LangWriting,
    },
    literature: {
      1: ks3LitTerms1,
      2: ks3LitTerms2,
    },
  },
};

export default paperGlossary;
