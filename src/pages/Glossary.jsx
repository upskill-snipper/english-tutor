import { useState, useMemo, useRef } from 'react';
import { Search, BookText, ArrowUp } from 'lucide-react';
import Navbar from '../components/Navbar';

const glossaryTerms = [
  // --- Literary Techniques ---
  { term: 'Allegory', category: 'Literary Technique', definition: 'A narrative in which characters and events symbolise deeper moral or political meanings.', example: '"Animal Farm" by George Orwell is an allegory for the Russian Revolution.' },
  { term: 'Alliteration', category: 'Literary Technique', definition: 'The repetition of the same consonant sound at the beginning of closely connected words.', example: '"From forth the fatal loins of these two foes" — Shakespeare, Romeo and Juliet.' },
  { term: 'Allusion', category: 'Literary Technique', definition: 'An indirect reference to a person, place, event, or another text.', example: 'Dickens alludes to the French Revolution throughout "A Tale of Two Cities".' },
  { term: 'Anaphora', category: 'Literary Technique', definition: 'The repetition of a word or phrase at the beginning of successive clauses or sentences.', example: '"It was the best of times, it was the worst of times" — Dickens, A Tale of Two Cities.' },
  { term: 'Antithesis', category: 'Literary Technique', definition: 'The juxtaposition of contrasting ideas in balanced phrases or clauses.', example: '"It was the best of times, it was the worst of times" — Dickens, A Tale of Two Cities.' },
  { term: 'Assonance', category: 'Literary Technique', definition: 'The repetition of vowel sounds within closely placed words.', example: '"Hear the mellow wedding bells" — Edgar Allan Poe, The Bells.' },
  { term: 'Bathos', category: 'Literary Technique', definition: 'An abrupt, often ludicrous descent from the elevated to the commonplace.', example: 'Used by Pope in "The Rape of the Lock" for satirical effect.' },
  { term: 'Bildungsroman', category: 'Literary Technique', definition: 'A novel that traces the moral and psychological growth of the main character from youth to adulthood.', example: '"Great Expectations" by Dickens follows Pip\'s journey to maturity.' },
  { term: 'Catharsis', category: 'Literary Technique', definition: 'The release of strong emotions through art, especially tragedy, leading to renewal.', example: 'The audience experiences catharsis at the end of "Macbeth" when order is restored.' },
  { term: 'Colloquialism', category: 'Literary Technique', definition: 'Informal language or slang used in everyday speech, employed in writing for realism.', example: 'Steinbeck uses colloquial dialogue throughout "Of Mice and Men".' },
  { term: 'Dramatic Irony', category: 'Literary Technique', definition: 'When the audience knows something that the characters do not.', example: 'In "Romeo and Juliet", the audience knows Juliet is not truly dead.' },
  { term: 'Emotive Language', category: 'Literary Technique', definition: 'Word choices deliberately aimed at provoking an emotional response from the reader.', example: 'Wilfred Owen uses emotive language in "Dulce et Decorum Est" to convey the horrors of war.' },
  { term: 'Euphemism', category: 'Literary Technique', definition: 'A mild or indirect expression substituted for one considered too harsh or blunt.', example: '"Passed away" instead of "died" — commonly used across literature.' },
  { term: 'Extended Metaphor', category: 'Literary Technique', definition: 'A metaphor that is developed over several lines or throughout an entire work.', example: 'Shakespeare extends the metaphor of the world as a stage in "As You Like It".' },
  { term: 'Flashback', category: 'Literary Technique', definition: 'A scene set in a time earlier than the main narrative, providing background information.', example: 'Priestley uses Eva Smith\'s backstory as revealed flashbacks in "An Inspector Calls".' },
  { term: 'Foreshadowing', category: 'Literary Technique', definition: 'Hints or clues about events that will occur later in the narrative.', example: 'The witches\' prophecies foreshadow Macbeth\'s rise and fall in "Macbeth".' },
  { term: 'Hyperbole', category: 'Literary Technique', definition: 'Deliberate exaggeration for emphasis or comic effect.', example: '"I\'ll love you till the ocean is folded and hung up to dry" — W.H. Auden.' },
  { term: 'Imagery', category: 'Literary Technique', definition: 'Visually descriptive language that appeals to the senses.', example: 'Ted Hughes creates vivid imagery in "Bayonet Charge": "bullets smacking the belly out of the air".' },
  { term: 'In Medias Res', category: 'Literary Technique', definition: 'Beginning a narrative in the middle of the action rather than at the beginning.', example: 'Homer\'s "The Odyssey" begins in the middle of Odysseus\'s journey.' },
  { term: 'Irony', category: 'Literary Technique', definition: 'A contrast between expectation and reality, often for humorous or emphatic effect.', example: 'In "An Inspector Calls", Birling\'s confident predictions about the Titanic are ironic.' },
  { term: 'Juxtaposition', category: 'Literary Technique', definition: 'Placing two contrasting elements side by side for comparison or emphasis.', example: 'Dickens juxtaposes wealth and poverty in "A Christmas Carol".' },
  { term: 'Metaphor', category: 'Literary Technique', definition: 'A figure of speech that directly compares two unlike things by stating one is the other.', example: '"All the world\'s a stage" — Shakespeare, As You Like It.' },
  { term: 'Metonymy', category: 'Literary Technique', definition: 'A figure of speech in which something is referred to by the name of something closely associated with it.', example: '"The crown" to refer to the monarchy in Shakespeare\'s history plays.' },
  { term: 'Motif', category: 'Literary Technique', definition: 'A recurring element, image, or idea that has symbolic significance in a text.', example: 'The motif of blood recurs throughout "Macbeth" to symbolise guilt.' },
  { term: 'Onomatopoeia', category: 'Literary Technique', definition: 'A word that phonetically imitates the sound it describes.', example: '"Bang" and "rattle" in Wilfred Owen\'s war poetry.' },
  { term: 'Oxymoron', category: 'Literary Technique', definition: 'A figure of speech combining two contradictory terms.', example: '"Parting is such sweet sorrow" — Shakespeare, Romeo and Juliet.' },
  { term: 'Paradox', category: 'Literary Technique', definition: 'A seemingly contradictory statement that reveals a deeper truth.', example: '"Fair is foul, and foul is fair" — Shakespeare, Macbeth.' },
  { term: 'Pathetic Fallacy', category: 'Literary Technique', definition: 'Attributing human emotions to nature or weather to reflect the mood of a scene.', example: 'The storm in "King Lear" mirrors Lear\'s inner turmoil.' },
  { term: 'Personification', category: 'Literary Technique', definition: 'Giving human qualities to non-human things or abstract concepts.', example: '"Because I could not stop for Death — He kindly stopped for me" — Emily Dickinson.' },
  { term: 'Satire', category: 'Literary Technique', definition: 'The use of humour, irony, or exaggeration to criticise people or society.', example: 'Jonathan Swift\'s "Gulliver\'s Travels" satirises human nature and politics.' },
  { term: 'Sibilance', category: 'Literary Technique', definition: 'Repetition of "s" and "sh" sounds, often creating a sinister or soothing effect.', example: '"And the silken, sad, uncertain rustling" — Poe, The Raven.' },
  { term: 'Simile', category: 'Literary Technique', definition: 'A comparison between two unlike things using "like" or "as".', example: '"My love is like a red, red rose" — Robert Burns.' },
  { term: 'Symbolism', category: 'Literary Technique', definition: 'Using objects, characters, or colours to represent abstract ideas or concepts.', example: 'The green light in "The Great Gatsby" symbolises Gatsby\'s hopes and dreams.' },
  { term: 'Synecdoche', category: 'Literary Technique', definition: 'A figure of speech where a part represents the whole or vice versa.', example: '"All hands on deck" — "hands" represents the sailors.' },
  { term: 'Tone', category: 'Literary Technique', definition: 'The attitude or feeling conveyed by the writer through their choice of words and style.', example: 'The bitter, resentful tone of the narrator in "My Last Duchess" by Browning.' },
  { term: 'Unreliable Narrator', category: 'Literary Technique', definition: 'A narrator whose account of events cannot be fully trusted.', example: 'The narrator in "The Tell-Tale Heart" by Poe is clearly unreliable.' },

  // --- Grammar Terms ---
  { term: 'Active Voice', category: 'Grammar', definition: 'A sentence construction where the subject performs the action of the verb.', example: '"The cat sat on the mat" — the subject (cat) performs the action.' },
  { term: 'Adjective', category: 'Grammar', definition: 'A word that describes or modifies a noun or pronoun.', example: '"The ancient, crumbling house" — "ancient" and "crumbling" are adjectives.' },
  { term: 'Adverb', category: 'Grammar', definition: 'A word that modifies a verb, adjective, or other adverb, often ending in -ly.', example: '"She whispered softly" — "softly" modifies the verb "whispered".' },
  { term: 'Clause', category: 'Grammar', definition: 'A group of words containing a subject and a verb, forming part of a sentence.', example: '"When the bell rang" is a subordinate clause in "When the bell rang, we left."' },
  { term: 'Complex Sentence', category: 'Grammar', definition: 'A sentence containing an independent clause and at least one subordinate clause.', example: '"Although it rained, we enjoyed the trip" — common in literary analysis writing.' },
  { term: 'Compound Sentence', category: 'Grammar', definition: 'A sentence made up of two or more independent clauses joined by a conjunction.', example: '"The sun set and the stars appeared" — two independent clauses joined by "and".' },
  { term: 'Conjunction', category: 'Grammar', definition: 'A word used to connect clauses, sentences, or words (e.g., and, but, or, because).', example: '"But" and "yet" in "It was sunny, but cold" are conjunctions.' },
  { term: 'Declarative Sentence', category: 'Grammar', definition: 'A sentence that makes a statement or expresses an opinion.', example: '"Mr Birling is a prosperous manufacturer" — Priestley, An Inspector Calls.' },
  { term: 'Determiner', category: 'Grammar', definition: 'A word that introduces a noun and identifies it in detail (e.g., the, a, this, my).', example: '"The boy" vs "a boy" — determiners specify which noun is meant.' },
  { term: 'Exclamatory Sentence', category: 'Grammar', definition: 'A sentence that expresses strong emotion, ending with an exclamation mark.', example: '"Out, damned spot!" — Shakespeare, Macbeth.' },
  { term: 'Imperative', category: 'Grammar', definition: 'A verb form or sentence type that gives a command or instruction.', example: '"Look at this photograph" — a direct command to the reader.' },
  { term: 'Interrogative Sentence', category: 'Grammar', definition: 'A sentence that asks a question.', example: '"Is this a dagger which I see before me?" — Shakespeare, Macbeth.' },
  { term: 'Modal Verb', category: 'Grammar', definition: 'A verb that expresses necessity, possibility, or obligation (e.g., must, should, could).', example: '"You should revise" — "should" indicates advice or obligation.' },
  { term: 'Noun', category: 'Grammar', definition: 'A word that names a person, place, thing, or idea.', example: '"London", "fear", "Scrooge" — all are nouns used in GCSE texts.' },
  { term: 'Passive Voice', category: 'Grammar', definition: 'A sentence construction where the subject receives the action of the verb.', example: '"The letter was written by Sheila" — the subject receives the action.' },
  { term: 'Phrase', category: 'Grammar', definition: 'A small group of words forming a unit within a clause, without a subject-verb pair.', example: '"In the dark forest" is a prepositional phrase in many Gothic texts.' },
  { term: 'Preposition', category: 'Grammar', definition: 'A word that shows the relationship between a noun or pronoun and other words (e.g., in, on, under, between).', example: '"Under the bridge" — "under" is the preposition.' },
  { term: 'Pronoun', category: 'Grammar', definition: 'A word that takes the place of a noun (e.g., he, she, it, they, we).', example: 'Stevenson uses "he" and "it" to obscure Hyde\'s identity in "Jekyll and Hyde".' },
  { term: 'Proper Noun', category: 'Grammar', definition: 'A noun that names a specific person, place, or thing, always capitalised.', example: '"Scrooge", "London", "Christmas" in "A Christmas Carol".' },
  { term: 'Rhetorical Question', category: 'Grammar', definition: 'A question asked for effect rather than to elicit an answer.', example: '"If you prick us, do we not bleed?" — Shakespeare, The Merchant of Venice.' },
  { term: 'Simple Sentence', category: 'Grammar', definition: 'A sentence containing a single independent clause with one subject and one verb.', example: '"Scrooge was dead." — the blunt opening of "A Christmas Carol".' },
  { term: 'Subordinate Clause', category: 'Grammar', definition: 'A clause that depends on the main clause and cannot stand alone as a sentence.', example: '"Because he was afraid" is subordinate in "He ran because he was afraid."' },
  { term: 'Verb', category: 'Grammar', definition: 'A word that expresses an action, state, or occurrence.', example: '"Murdered", "trembled", "whispered" — strong verbs create vivid images.' },

  // --- Poetry Terms ---
  { term: 'Blank Verse', category: 'Poetry', definition: 'Unrhymed poetry written in iambic pentameter.', example: 'Shakespeare\'s plays are largely written in blank verse: "But soft, what light through yonder window breaks?"' },
  { term: 'Caesura', category: 'Poetry', definition: 'A pause near the middle of a line of poetry, often marked by punctuation.', example: '"I met a traveller || from an antique land" — Shelley, Ozymandias.' },
  { term: 'Couplet', category: 'Poetry', definition: 'Two consecutive lines of poetry that rhyme and have the same metre.', example: '"So long as men can breathe or eyes can see, / So long lives this, and this gives life to thee" — Shakespeare, Sonnet 18.' },
  { term: 'Dramatic Monologue', category: 'Poetry', definition: 'A poem in which a single speaker addresses a silent listener, revealing their character.', example: 'Robert Browning\'s "My Last Duchess" is a classic dramatic monologue.' },
  { term: 'End-Stopped Line', category: 'Poetry', definition: 'A line of poetry that ends with a natural pause, marked by punctuation.', example: '"Shall I compare thee to a summer\'s day?" — Shakespeare, Sonnet 18.' },
  { term: 'Enjambment', category: 'Poetry', definition: 'The continuation of a sentence beyond the end of a line or stanza without a pause.', example: '"My mother\'s countenance / Could not unfrown itself" — Heaney, Follower.' },
  { term: 'Free Verse', category: 'Poetry', definition: 'Poetry that does not follow a regular metre or rhyme scheme.', example: 'Carol Ann Duffy\'s "War Photographer" is written in free verse with varied line lengths.' },
  { term: 'Iambic Pentameter', category: 'Poetry', definition: 'A metrical pattern of five pairs of unstressed and stressed syllables per line.', example: '"Shall I compare thee to a summer\'s day?" — Shakespeare, Sonnet 18.' },
  { term: 'Metre', category: 'Poetry', definition: 'The rhythmic pattern of stressed and unstressed syllables in a line of poetry.', example: 'The regular metre in "The Charge of the Light Brigade" mimics galloping horses.' },
  { term: 'Octave', category: 'Poetry', definition: 'The first eight lines of a Petrarchan sonnet, usually presenting a problem or situation.', example: 'The octave of Shelley\'s "Ozymandias" describes the ruined statue.' },
  { term: 'Quatrain', category: 'Poetry', definition: 'A stanza or poem of four lines, often with alternating rhyme.', example: 'Shakespeare\'s sonnets contain three quatrains followed by a couplet.' },
  { term: 'Refrain', category: 'Poetry', definition: 'A repeated line or group of lines at the end of each stanza.', example: '"Nevermore" is the haunting refrain in Poe\'s "The Raven".' },
  { term: 'Rhyme Scheme', category: 'Poetry', definition: 'The ordered pattern of end rhymes in a poem, denoted by letters (ABAB, ABBA, etc.).', example: 'Shakespeare\'s sonnets follow an ABAB CDCD EFEF GG rhyme scheme.' },
  { term: 'Sestet', category: 'Poetry', definition: 'The last six lines of a Petrarchan sonnet, usually offering a resolution.', example: 'The sestet of "Ozymandias" reflects on the impermanence of power.' },
  { term: 'Sonnet', category: 'Poetry', definition: 'A 14-line poem with a specific rhyme scheme and metre, often about love or beauty.', example: 'Shakespeare\'s Sonnet 18: "Shall I compare thee to a summer\'s day?"' },
  { term: 'Stanza', category: 'Poetry', definition: 'A grouped set of lines within a poem, separated by a blank line from other stanzas.', example: '"Ozymandias" by Shelley is written as a single 14-line stanza (a sonnet).' },
  { term: 'Volta', category: 'Poetry', definition: 'The turn or shift in argument or mood in a sonnet, usually between the octave and sestet.', example: 'In "Ozymandias", the volta occurs at line 9 where the focus shifts to the desert.' },

  // --- Drama Terms ---
  { term: 'Aside', category: 'Drama', definition: 'A short remark made by a character to the audience, unheard by other characters on stage.', example: 'Macbeth\'s asides reveal his inner conflict about killing Duncan.' },
  { term: 'Catharsis (Drama)', category: 'Drama', definition: 'The purging of emotions experienced by the audience at the climax or resolution of a tragedy.', example: 'The audience feels catharsis during the final scene of "Romeo and Juliet".' },
  { term: 'Chorus', category: 'Drama', definition: 'A group or character who comments on the action of a play, providing context or moral guidance.', example: 'The Inspector functions as a chorus figure in "An Inspector Calls".' },
  { term: 'Denouement', category: 'Drama', definition: 'The final resolution of the plot after the climax.', example: 'The denouement of "Macbeth" sees Malcolm crowned King of Scotland.' },
  { term: 'Dialogue', category: 'Drama', definition: 'Conversation between two or more characters in a literary work.', example: 'The rapid dialogue between the Inspector and Birling builds tension in "An Inspector Calls".' },
  { term: 'Dramatic Tension', category: 'Drama', definition: 'The sense of anticipation and uncertainty about what will happen next in a play.', example: 'Tension builds in "Macbeth" as the audience awaits Duncan\'s murder.' },
  { term: 'Epilogue', category: 'Drama', definition: 'A concluding section that rounds off the action of a play or novel.', example: 'The epilogue of "The Tempest" features Prospero\'s final speech to the audience.' },
  { term: 'Foil', category: 'Drama', definition: 'A character who contrasts with another character, highlighting their qualities.', example: 'Banquo serves as a foil to Macbeth, representing moral integrity.' },
  { term: 'Hamartia', category: 'Drama', definition: 'The fatal flaw in a tragic hero that leads to their downfall.', example: 'Macbeth\'s hamartia is his "vaulting ambition".' },
  { term: 'Hubris', category: 'Drama', definition: 'Excessive pride or arrogance that leads to a character\'s downfall.', example: 'Mr Birling\'s hubris in "An Inspector Calls" blinds him to his responsibilities.' },
  { term: 'Monologue', category: 'Drama', definition: 'A long speech by one character in a play, addressed to other characters.', example: 'The Inspector\'s final monologue in "An Inspector Calls" delivers the moral message.' },
  { term: 'Peripeteia', category: 'Drama', definition: 'A sudden reversal of fortune or change in circumstances, especially in tragedy.', example: 'Macbeth experiences peripeteia when his allies turn against him.' },
  { term: 'Prologue', category: 'Drama', definition: 'An introductory section of a literary work that sets the scene.', example: '"Two households, both alike in dignity" — the Prologue of Romeo and Juliet.' },
  { term: 'Soliloquy', category: 'Drama', definition: 'A speech in which a character speaks their thoughts aloud while alone on stage.', example: '"To be or not to be" — Hamlet\'s most famous soliloquy.' },
  { term: 'Stage Directions', category: 'Drama', definition: 'Instructions in a play script indicating movement, expression, or setting.', example: 'Priestley\'s stage directions describe the lighting change when the Inspector arrives.' },
  { term: 'Tragedy', category: 'Drama', definition: 'A serious drama in which the protagonist suffers a downfall, often ending in death.', example: '"Macbeth" is a Shakespearean tragedy driven by ambition and guilt.' },
  { term: 'Tragic Hero', category: 'Drama', definition: 'A protagonist of noble stature whose downfall is caused by a fatal flaw.', example: 'Macbeth is a tragic hero whose ambition destroys him.' },

  // --- Essay / Exam Terms ---
  { term: 'Analyse', category: 'Essay/Exam', definition: 'Examine something in detail, breaking it down into its component parts to understand its meaning.', example: '"Analyse how Shakespeare presents the theme of power in Macbeth."' },
  { term: 'Audience', category: 'Essay/Exam', definition: 'The intended reader, listener, or viewer of a text.', example: 'Consider the audience when writing a persuasive letter vs. an analytical essay.' },
  { term: 'Compare', category: 'Essay/Exam', definition: 'Identify the similarities and differences between two or more things.', example: '"Compare how poets present conflict in two poems from your anthology."' },
  { term: 'Context', category: 'Essay/Exam', definition: 'The circumstances or background that inform and influence a text.', example: 'Victorian social context is essential when analysing "A Christmas Carol".' },
  { term: 'Contrast', category: 'Essay/Exam', definition: 'Highlight the differences between two or more things.', example: '"Contrast the attitudes of Mr Birling and the Inspector in An Inspector Calls."' },
  { term: 'Critique', category: 'Essay/Exam', definition: 'A detailed analysis and assessment of something, especially a literary or artistic work.', example: '"Write a critique of Shelley\'s use of form in Ozymandias."' },
  { term: 'Evaluate', category: 'Essay/Exam', definition: 'Assess the value or effectiveness of something, making a judgement with evidence.', example: '"Evaluate the statement: Macbeth is entirely responsible for his own downfall."' },
  { term: 'Evidence', category: 'Essay/Exam', definition: 'Quotations or references from a text used to support an argument.', example: 'Always embed evidence: Shakespeare uses the metaphor "vaulting ambition" to show...' },
  { term: 'Explain', category: 'Essay/Exam', definition: 'Make something clear by describing it in detail and giving reasons.', example: '"Explain how Dickens presents Scrooge\'s transformation in A Christmas Carol."' },
  { term: 'Explore', category: 'Essay/Exam', definition: 'Investigate a topic thoroughly, considering different aspects and interpretations.', example: '"Explore how Priestley presents ideas about responsibility."' },
  { term: 'Form', category: 'Essay/Exam', definition: 'The overall structure and type of a text (e.g., sonnet, novel, play, letter).', example: 'The form of "Ozymandias" as a sonnet contains and constrains the theme of power.' },
  { term: 'Interpret', category: 'Essay/Exam', definition: 'Explain the meaning of something, offering your own understanding.', example: '"Interpret the significance of the ghost of Christmas Yet to Come."' },
  { term: 'Language', category: 'Essay/Exam', definition: 'The specific words and phrases chosen by a writer and their effects.', example: '"Comment on the language used in the opening of A Christmas Carol."' },
  { term: 'Narrative Voice', category: 'Essay/Exam', definition: 'The perspective from which a story is told (first person, third person, omniscient, etc.).', example: 'Dickens uses an omniscient narrative voice in "A Christmas Carol".' },
  { term: 'P.E.E.L.', category: 'Essay/Exam', definition: 'A paragraph structure: Point, Evidence, Explanation, Link.', example: 'Use P.E.E.L. to structure analytical paragraphs in literature essays.' },
  { term: 'Purpose', category: 'Essay/Exam', definition: 'The reason a text was written (to inform, persuade, entertain, argue, etc.).', example: 'Priestley\'s purpose in "An Inspector Calls" is to challenge capitalist attitudes.' },
  { term: 'Structure', category: 'Essay/Exam', definition: 'How a text is organised and ordered, including its narrative arc, chapters, or stanzas.', example: 'The cyclical structure of "A Christmas Carol" mirrors Scrooge\'s transformation.' },
  { term: 'Summarise', category: 'Essay/Exam', definition: 'Give a brief account of the main points of something.', example: '"Summarise the key events of Act 1 in Macbeth."' },
  { term: 'Theme', category: 'Essay/Exam', definition: 'The central idea or message explored throughout a text.', example: 'Key themes in "Macbeth" include ambition, guilt, and the supernatural.' },
  { term: 'Thesis', category: 'Essay/Exam', definition: 'The main argument or claim that an essay sets out to prove.', example: '"Shakespeare presents Macbeth as a victim of supernatural manipulation" — a thesis statement.' },
  { term: 'Writer\'s Intention', category: 'Essay/Exam', definition: 'What the author aimed to achieve or communicate through their text.', example: 'Shelley\'s intention in "Ozymandias" is to show the transience of power.' },
];

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function Glossary() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const sectionRefs = useRef({});

  const categories = ['All', ...Array.from(new Set(glossaryTerms.map(t => t.category))).sort()];

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return glossaryTerms
      .filter(t => {
        const matchesSearch = !q || t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q);
        const matchesCategory = categoryFilter === 'All' || t.category === categoryFilter;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [search, categoryFilter]);

  const grouped = useMemo(() => {
    const map = {};
    for (const t of filtered) {
      const letter = t.term[0].toUpperCase();
      if (!map[letter]) map[letter] = [];
      map[letter].push(t);
    }
    return map;
  }, [filtered]);

  const activeLetters = new Set(Object.keys(grouped));

  const scrollToLetter = (letter) => {
    const el = sectionRefs.current[letter];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const categoryColor = (cat) => {
    switch (cat) {
      case 'Literary Technique': return { bg: 'rgba(16,185,129,0.12)', text: '#10b981' };
      case 'Grammar': return { bg: 'rgba(59,130,246,0.12)', text: '#60a5fa' };
      case 'Poetry': return { bg: 'rgba(168,85,247,0.12)', text: '#c084fc' };
      case 'Drama': return { bg: 'rgba(244,63,94,0.12)', text: '#fb7185' };
      case 'Essay/Exam': return { bg: 'rgba(251,191,36,0.12)', text: '#fbbf24' };
      default: return { bg: 'rgba(148,163,184,0.12)', text: '#94a3b8' };
    }
  };

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />
      <div id="main-content" role="main" style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{
              width: '44px', height: '44px', borderRadius: '12px',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <BookText size={24} color="white" />
            </div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.02em' }}>English Glossary</h1>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto' }}>
            A comprehensive reference of {glossaryTerms.length}+ literary, grammar, poetry, drama, and exam terms — each with a clear definition and example from well-known texts.
          </p>
        </div>

        {/* Search & Filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem', alignItems: 'center' }}>
          <div style={{
            flex: '1 1 280px', position: 'relative',
          }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
            <input
              type="text"
              placeholder="Search terms or definitions..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: '100%', padding: '0.625rem 0.75rem 0.625rem 2.25rem',
                background: 'rgba(30,41,59,0.7)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px', color: '#f1f5f9', fontSize: '0.9rem', outline: 'none',
              }}
            />
          </div>
          <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                style={{
                  padding: '0.375rem 0.75rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600,
                  border: 'none', cursor: 'pointer',
                  background: categoryFilter === cat ? '#10b981' : 'rgba(30,41,59,0.7)',
                  color: categoryFilter === cat ? '#fff' : '#94a3b8',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Alphabetical Index */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '1.5rem',
          padding: '0.75rem', background: 'rgba(30,41,59,0.5)', borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.05)',
        }}>
          {ALPHABET.map(letter => (
            <button
              key={letter}
              onClick={() => activeLetters.has(letter) && scrollToLetter(letter)}
              disabled={!activeLetters.has(letter)}
              style={{
                width: '32px', height: '32px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700,
                border: 'none', cursor: activeLetters.has(letter) ? 'pointer' : 'default',
                background: activeLetters.has(letter) ? 'rgba(16,185,129,0.15)' : 'transparent',
                color: activeLetters.has(letter) ? '#10b981' : '#334155',
                transition: 'all 0.2s',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '1.25rem' }}>
          Showing {filtered.length} term{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Term sections */}
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#64748b' }}>
            <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>No terms found.</p>
            <p style={{ fontSize: '0.85rem' }}>Try adjusting your search or filter.</p>
          </div>
        )}

        {ALPHABET.filter(l => grouped[l]).map(letter => (
          <div key={letter} ref={el => sectionRefs.current[letter] = el} style={{ marginBottom: '2rem', scrollMarginTop: '80px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem',
            }}>
              <span style={{
                width: '36px', height: '36px', borderRadius: '8px',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '1rem', color: '#fff', flexShrink: 0,
              }}>
                {letter}
              </span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
              <span style={{ color: '#64748b', fontSize: '0.75rem' }}>{grouped[letter].length} term{grouped[letter].length !== 1 ? 's' : ''}</span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '0.75rem',
            }}>
              {grouped[letter].map(t => {
                const catColor = categoryColor(t.category);
                return (
                  <div key={t.term} style={{
                    background: 'rgba(30,41,59,0.55)', borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.06)',
                    padding: '1rem 1.125rem', transition: 'border-color 0.2s',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f1f5f9' }}>{t.term}</h3>
                      <span style={{
                        fontSize: '0.65rem', fontWeight: 600, padding: '0.2rem 0.5rem',
                        borderRadius: '6px', background: catColor.bg, color: catColor.text,
                        whiteSpace: 'nowrap', flexShrink: 0,
                      }}>
                        {t.category}
                      </span>
                    </div>
                    <p style={{ color: '#cbd5e1', fontSize: '0.835rem', lineHeight: 1.55, marginBottom: '0.5rem' }}>
                      {t.definition}
                    </p>
                    <p style={{ color: '#64748b', fontSize: '0.78rem', lineHeight: 1.5, fontStyle: 'italic' }}>
                      {t.example}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Back to top */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              background: 'rgba(30,41,59,0.7)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '10px', padding: '0.5rem 1.25rem', color: '#94a3b8',
              fontSize: '0.85rem', cursor: 'pointer', display: 'inline-flex',
              alignItems: 'center', gap: '0.375rem',
            }}
          >
            <ArrowUp size={14} /> Back to top
          </button>
        </div>
      </div>
    </div>
  );
}
