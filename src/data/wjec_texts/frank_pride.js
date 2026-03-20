// WJEC Eduqas GCSE Literature — Frankenstein & Pride and Prejudice Study Data
// Component 2 (C720U20): 19th-Century Prose
// All content is WJEC Eduqas-specific

const frankPride = [
  // ═══════════════════════════════════════════════════════════════
  //  FRANKENSTEIN — Mary Shelley (1818 / revised 1831)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'frankenstein-wjec',
    title: 'Frankenstein',
    author: 'Mary Shelley',
    board: 'wjec',
    paper: 'paper2',
    type: '19th-century',

    // ── THEMES ──────────────────────────────────────────────────
    themes: [
      {
        theme: 'Dangerous Knowledge and Ambition',
        analysis:
          'The pursuit of forbidden knowledge is the engine that drives Frankenstein. ' +
          'Victor Frankenstein\'s obsession with discovering "the cause of generation and life" ' +
          'leads him to transgress the boundaries of natural philosophy, echoing the Prometheus myth ' +
          'that gives the novel its subtitle. Shelley frames this ambition as inherently destructive: ' +
          'Victor abandons family, health, and moral judgement in his quest, and the moment of creation ' +
          'is not triumphant but horrifying — "I saw the dull yellow eye of the creature open." ' +
          'The novel draws on Romantic-era anxieties about the rapid advancement of science, particularly ' +
          'galvanism and anatomy, suggesting that knowledge without ethical restraint leads to catastrophe. ' +
          'Walton\'s parallel quest to reach the North Pole mirrors Victor\'s hubris, and it is only by ' +
          'heeding Victor\'s cautionary tale that Walton turns back. For WJEC, this theme connects directly ' +
          'to AO3 context: Shelley was writing during a period of intense scientific experimentation, and ' +
          'her novel asks whether humanity has the moral maturity to handle the power that knowledge confers. ' +
          'The Creature himself becomes a living emblem of knowledge without responsibility — brought into ' +
          'the world and then abandoned by his creator.',
      },
      {
        theme: 'Creation, Parenthood and Responsibility',
        analysis:
          'Shelley explores the moral obligations of creators toward their creations through Victor\'s ' +
          'catastrophic failure as a parent figure. The moment the Creature opens his eyes, Victor flees ' +
          'in disgust — "I had desired it with an ardour that far exceeded moderation; but now that I had ' +
          'finished, the beauty of the dream vanished." This abandonment is the novel\'s original sin: every ' +
          'subsequent act of violence by the Creature can be traced back to Victor\'s refusal to take ' +
          'responsibility. The Creature\'s eloquent account of his early life — learning language from the ' +
          'De Laceys, reading Paradise Lost, Plutarch\'s Lives, and The Sorrows of Werther — reveals a being ' +
          'capable of profound sensitivity and moral reasoning, twisted into rage only by universal rejection. ' +
          'Shelley draws a devastating parallel with Milton\'s Satan: "I ought to be thy Adam, but I am rather ' +
          'the fallen angel." For WJEC AO3, this theme connects to Shelley\'s own life — she lost her mother ' +
          'Mary Wollstonecraft shortly after birth, and her first child died in infancy. The novel is haunted ' +
          'by questions of what parents owe their children and what happens when that bond is severed. Victor\'s ' +
          'failure is not merely personal but cosmic: he usurps the role of God and then refuses the duties ' +
          'that role entails.',
      },
      {
        theme: 'Isolation and Loneliness',
        analysis:
          'Isolation operates on multiple levels in Frankenstein. Victor isolates himself physically during ' +
          'his two years of obsessive work in Ingolstadt, cutting himself off from his family and from the ' +
          'natural world that the Romantics believed was essential to spiritual health. The Creature is ' +
          'isolated by his very existence — rejected by his creator, driven away by the De Laceys, shot by ' +
          'a stranger after saving a drowning girl. His plea to Victor is fundamentally about companionship: ' +
          '"I am alone and miserable; man will not associate with me." The framing narrative reinforces this: ' +
          'Walton writes to his sister about his desperate desire for "the company of a man who could ' +
          'sympathise with me," and Victor arrives as a ghostly fulfilment of that wish. Shelley uses the ' +
          'Arctic setting — vast, empty, inhospitable — as a physical embodiment of the emotional wasteland ' +
          'that both Victor and the Creature inhabit. For WJEC, connecting isolation to Romantic philosophy ' +
          'is crucial: the Romantics valued solitude in nature as restorative, but Shelley shows that enforced ' +
          'isolation — isolation without choice or connection — is destructive. The Creature\'s loneliness is ' +
          'not contemplative but agonising, and it transforms a potentially benevolent being into a murderer. ' +
          'This inversion of Romantic solitude is a sophisticated AO3 point.',
      },
      {
        theme: 'Monstrosity and Appearance',
        analysis:
          'Shelley systematically challenges the reader\'s understanding of who the real "monster" is. The ' +
          'Creature is physically hideous — "his yellow skin scarcely covered the work of muscles and ' +
          'arteries beneath" — but his actions in the first half of the novel are uniformly gentle: he gathers ' +
          'firewood for the De Laceys, saves a drowning child, and weeps at the beauty of nature. It is the ' +
          'reactions of others that transform him. Every encounter with humanity results in violence or ' +
          'rejection based solely on his appearance. Felix De Lacey beats him; villagers throw stones; the man ' +
          'whose child he saves shoots him. Shelley uses these episodes to expose the superficiality of human ' +
          'judgement and to argue that monstrosity is created by society, not inherent in the individual. ' +
          'Victor, by contrast, is outwardly handsome and socially privileged, yet his actions — creating and ' +
          'abandoning a sentient being, allowing Justine to be executed for a crime she did not commit, ' +
          'destroying the female creature — are genuinely monstrous. For WJEC, this theme connects to AO3 ' +
          'through Mary Wollstonecraft\'s arguments about prejudice and the Romantic emphasis on looking ' +
          'beyond surface appearances to find deeper truths. It also anticipates modern discussions about ' +
          'discrimination and the social construction of "otherness."',
      },
      {
        theme: 'Nature and the Sublime',
        analysis:
          'The natural world in Frankenstein functions as both a restorative force and a reminder of human ' +
          'insignificance. When Victor is overwhelmed by guilt after William\'s death and Justine\'s execution, ' +
          'he travels to the Alps and experiences a temporary lifting of his despair: "These sublime and ' +
          'magnificent scenes afforded me the greatest consolation." Shelley draws directly on Romantic ' +
          'aesthetics — particularly Edmund Burke\'s concept of the sublime, which describes the mixture of ' +
          'terror and awe inspired by vast natural phenomena. Mont Blanc, the Mer de Glace, and the Rhine ' +
          'valley are described with painterly precision, reflecting the Shelleys\' own travels through Europe. ' +
          'However, nature in this novel is not simply therapeutic. The Creature confronts Victor on the Mer ' +
          'de Glace — a glacial landscape that is simultaneously beautiful and threatening — and the Arctic ' +
          'wastes where the novel opens and closes are utterly indifferent to human suffering. Shelley suggests ' +
          'that nature can console but cannot redeem; Victor\'s relief is always temporary because he refuses ' +
          'to confront his moral failure. For WJEC AO2, the pathetic fallacy is worth analysing: storms ' +
          'accompany moments of crisis, and the descriptions of Alpine scenery use language that mirrors the ' +
          'characters\' emotional states. This is a key technique for extract-based questions.',
      },
    ],

    // ── CHARACTERS ──────────────────────────────────────────────
    characters: [
      {
        name: 'Victor Frankenstein',
        description:
          'Victor is the novel\'s tragic protagonist, a brilliant natural philosopher whose ' +
          'obsessive ambition leads to the destruction of everyone he loves. Raised in a loving ' +
          'Genevan family, Victor develops an early passion for the works of Cornelius Agrippa and ' +
          'Paracelsus — outdated alchemists whom his father dismisses but never properly explains. ' +
          'At the University of Ingolstadt, he is inspired by Professor Waldman to pursue modern ' +
          'chemistry and becomes consumed by the desire to discover "the cause of generation and ' +
          'life." His creation of the Creature is presented not as a moment of triumph but of horror ' +
          'and immediate regret. Victor\'s defining characteristic is his refusal to take responsibility: ' +
          'he abandons the Creature at birth, conceals the truth when Justine is wrongly accused, and ' +
          'destroys the female companion he had promised. Shelley constructs Victor as a Romantic ' +
          'overreacher in the tradition of Prometheus and Faust — a figure whose intellectual brilliance ' +
          'is matched by his moral blindness. His self-pity is relentless; he consistently frames himself ' +
          'as the victim even as his choices cause suffering. For WJEC, Victor\'s unreliable narration ' +
          'is an important AO2 point: his account is filtered through Walton\'s letters and shaped by his ' +
          'desire for sympathy, meaning the reader must question his version of events.',
        keyQuotes: [
          {
            quote: 'I had worked hard for nearly two years, for the sole purpose of infusing life into an inanimate body.',
            analysis:
              'This reveals the obsessive single-mindedness of Victor\'s pursuit. The phrase "sole ' +
              'purpose" shows how his ambition has narrowed his world — he has sacrificed health, ' +
              'relationships, and moral reflection for this one goal. The clinical word "infusing" ' +
              'strips the act of creation of any wonder or sanctity, reducing it to a mechanical ' +
              'procedure. For WJEC AO2, note the contrast between Victor\'s scientific detachment ' +
              'here and his horrified emotional response when the Creature actually awakens.',
          },
          {
            quote: 'I beheld the wretch — the miserable monster whom I had created.',
            analysis:
              'The shift from "wretch" to "miserable monster" reveals Victor\'s immediate dehumanisation ' +
              'of his creation. He does not see a newborn being in need of care but a thing deserving ' +
              'of contempt. The possessive "whom I had created" acknowledges parentage while simultaneously ' +
              'rejecting it. For WJEC, this moment is pivotal for the theme of responsibility — Victor ' +
              'names his creation "monster" before it has performed a single act, suggesting that monstrosity ' +
              'is projected onto the Creature rather than inherent.',
          },
          {
            quote: 'Learn from me, if not by my precepts, at least by my example, how dangerous is the acquirement of knowledge.',
            analysis:
              'Victor\'s warning to Walton frames the entire narrative as a cautionary tale. The formal, ' +
              'didactic tone — "precepts," "acquirement" — positions Victor as a sage imparting wisdom, ' +
              'yet there is deep irony: even as he warns Walton, Victor does not fully accept his own ' +
              'culpability. He blames "knowledge" rather than his own choices. For WJEC AO1, this quote ' +
              'is useful for exploring how Shelley uses the frame narrative to invite the reader to judge ' +
              'Victor more critically than he judges himself.',
          },
        ],
      },
      {
        name: 'The Creature',
        description:
          'The Creature is Shelley\'s most complex and sympathetic creation — a being assembled from ' +
          'dead matter, brought to life, and immediately abandoned. His narrative, which occupies the ' +
          'centre of the novel\'s nested structure, is the most eloquent and self-aware account in the ' +
          'text. He describes learning language by observing the De Lacey family, educating himself ' +
          'through Paradise Lost, Plutarch\'s Lives, and The Sorrows of Werther, and gradually coming ' +
          'to understand his own wretched position in the world. The Creature begins as an innocent — ' +
          'he is moved to tears by the De Laceys\' poverty and secretly gathers firewood for them — but ' +
          'every attempt at human connection ends in violent rejection. The pivotal moment is his approach ' +
          'to the blind old De Lacey: the one person who cannot judge him by appearance responds with ' +
          'kindness, but Felix returns and beats the Creature with a stick. This systematic rejection ' +
          'transforms the Creature from a benevolent, Rousseauian "noble savage" into a figure of ' +
          'vengeance. Shelley gives the Creature the novel\'s most powerful rhetoric, allowing him to ' +
          'out-argue Victor at every turn. For WJEC, the Creature\'s voice is essential for AO2 analysis: ' +
          'his use of Miltonic language, rhetorical questions, and emotional appeals makes him the novel\'s ' +
          'most persuasive narrator, complicating the reader\'s sympathies.',
        keyQuotes: [
          {
            quote: 'I ought to be thy Adam, but I am rather the fallen angel, whom thou drivest from joy for no misdeed.',
            analysis:
              'This allusion to Paradise Lost is the Creature\'s most devastating accusation. He positions ' +
              'Victor as God and himself as Adam — the first creation who deserved love and guidance — but ' +
              'acknowledges that he has been cast out like Satan, "for no misdeed." The key phrase is "no ' +
              'misdeed": the Creature insists that his fall from innocence was caused not by his own sin but ' +
              'by his creator\'s abandonment. For WJEC AO3, the Miltonic parallel is essential — Shelley ' +
              'expects the reader to recognise that the Creature has read Paradise Lost and uses it to ' +
              'articulate his existential situation.',
          },
          {
            quote: 'I am malicious because I am miserable. Am I not shunned and hated by all mankind?',
            analysis:
              'This rhetorical question encapsulates Shelley\'s argument that environment creates character. ' +
              'The causal structure — "malicious because I am miserable" — places the blame squarely on ' +
              'society\'s treatment of the Creature, not on any innate evil. The question "Am I not shunned ' +
              'and hated?" demands the reader\'s agreement and sympathy. For WJEC, this connects to ' +
              'Rousseau\'s philosophy that man is born good and corrupted by society, a key Romantic-era ' +
              'context point that supports AO3.',
          },
          {
            quote: 'If I cannot inspire love, I will cause fear!',
            analysis:
              'This declaration marks the Creature\'s transition from hope to vengeance. The conditional ' +
              'structure — "if...I will" — presents his violence as a last resort, the consequence of ' +
              'failed attempts at connection. The opposition of "love" and "fear" echoes Machiavelli and ' +
              'suggests that the Creature has learned from humanity\'s own power structures. For WJEC, this ' +
              'is a key moment for tracking the Creature\'s development across the novel and for analysing ' +
              'how Shelley generates sympathy for a character who commits murder.',
          },
        ],
      },
      {
        name: 'Robert Walton',
        description:
          'Walton is the outermost narrator, an Arctic explorer whose letters to his sister Margaret ' +
          'frame the entire novel. He functions as a mirror for Victor: he is ambitious, driven by a ' +
          'desire for glory, and craves companionship. His opening letters reveal a Romantic idealist ' +
          'who dreams of discovering the Northwest Passage and finding "a land surpassing in wonders ' +
          'and in beauty every region hitherto discovered." When Victor arrives on the ice, half-dead ' +
          'and pursuing the Creature, Walton sees a kindred spirit and records his tale. Walton\'s role ' +
          'is crucial for the novel\'s structure — he provides a relatively neutral frame through which ' +
          'the reader receives Victor\'s and the Creature\'s accounts — but he is not merely a passive ' +
          'listener. His decision to turn the ship back at the end, heeding Victor\'s warning, provides ' +
          'the novel\'s only moment of hope: one ambitious man learning from another\'s catastrophe. For ' +
          'WJEC, Walton is important for AO2 analysis of narrative structure and for AO1 discussions of ' +
          'ambition. His letters humanise the frame by grounding the Gothic events in a recognisable ' +
          'epistolary format, and his loneliness — "I have no friend, Margaret" — introduces the theme ' +
          'of isolation before Victor\'s story even begins.',
        keyQuotes: [
          {
            quote: 'I shall satiate my ardent curiosity with the sight of a part of the world never before visited.',
            analysis:
              'Walton\'s language mirrors Victor\'s obsessive ambition. The verb "satiate" implies a hunger ' +
              'that cannot be easily satisfied, and "ardent curiosity" echoes Victor\'s own desire to ' +
              'penetrate nature\'s secrets. The phrase "never before visited" reveals a drive to be first, ' +
              'to conquer the unknown — the same impulse that leads Victor to create life. For WJEC, this ' +
              'parallel is essential: Shelley establishes the pattern of destructive ambition in the frame ' +
              'before the main narrative confirms it.',
          },
          {
            quote: 'I have no friend, Margaret.',
            analysis:
              'This stark admission introduces the theme of isolation before Victor\'s narrative even ' +
              'begins. The direct address to his sister emphasises that Walton\'s only intimate ' +
              'relationship is conducted through letters — he is surrounded by sailors but emotionally ' +
              'alone. The simplicity of the sentence contrasts with Walton\'s otherwise elevated prose, ' +
              'suggesting raw, unguarded feeling. For WJEC, this establishes isolation as a structural ' +
              'concern that connects all three narrators: Walton, Victor, and the Creature.',
          },
        ],
      },
      {
        name: 'Elizabeth Lavenza',
        description:
          'Elizabeth is Victor\'s adoptive sister and eventual wife, presented as an idealised figure ' +
          'of domestic virtue. She is described in terms that emphasise beauty, gentleness, and ' +
          'self-sacrifice — "the saintly soul of Elizabeth shone like a shrine-dedicated lamp in our ' +
          'peaceful home." Her role in the novel is largely passive: she waits for Victor, writes ' +
          'letters expressing concern, and advocates for Justine at her trial. Her murder on her ' +
          'wedding night is the Creature\'s ultimate revenge on Victor, yet even this horrific act ' +
          'primarily serves Victor\'s narrative arc rather than Elizabeth\'s own character development. ' +
          'For WJEC AO3, Elizabeth can be analysed through the lens of early feminism: Mary Shelley\'s ' +
          'mother, Mary Wollstonecraft, argued in A Vindication of the Rights of Woman that women were ' +
          'diminished by being reduced to ornamental, passive roles. Elizabeth\'s characterisation can be ' +
          'read as Shelley\'s critique of the "angel in the house" ideal — a woman defined entirely by ' +
          'her relationship to men and ultimately destroyed because of Victor\'s actions, not her own. ' +
          'This is a sophisticated contextual argument that WJEC examiners reward.',
        keyQuotes: [
          {
            quote: 'I have a pretty present for my Victor — tomorrow he shall have it.',
            analysis:
              'Caroline Frankenstein\'s description of the young Elizabeth as a "present" for Victor ' +
              'reveals the commodification of women in the novel. Elizabeth is literally gifted to ' +
              'Victor, her value defined by her beauty and her usefulness as a companion. For WJEC AO3, ' +
              'this connects to Wollstonecraft\'s critique of women being treated as property and ' +
              'ornaments rather than autonomous individuals. The casual possessive "my Victor" further ' +
              'emphasises familial ownership.',
          },
        ],
      },
      {
        name: 'Henry Clerval',
        description:
          'Henry Clerval is Victor\'s closest friend and his moral counterpart. Where Victor is ' +
          'consumed by science, Clerval is devoted to languages, literature, and human connection. ' +
          'He nurses Victor back to health after his breakdown in Ingolstadt and accompanies him on ' +
          'the journey to England, providing companionship and emotional grounding. Clerval represents ' +
          'what Victor might have been without his destructive obsession — he is creative, empathetic, ' +
          'and socially engaged. His murder by the Creature is particularly devastating because it ' +
          'destroys the novel\'s most unambiguously good character. For WJEC, Clerval functions as a ' +
          'dramatic foil to Victor: their contrasting responses to knowledge — Victor pursues power ' +
          'over nature while Clerval pursues understanding of humanity — highlight the difference ' +
          'between knowledge used responsibly and knowledge used recklessly. Clerval\'s death also ' +
          'deepens Victor\'s guilt and isolation, removing his last connection to the world outside ' +
          'his obsession.',
        keyQuotes: [
          {
            quote: 'He was a boy of singular talent and fancy... deeply read in books of chivalry and romance.',
            analysis:
              'The description of Clerval as devoted to "chivalry and romance" positions him in direct ' +
              'contrast to Victor\'s scientific obsession. While Victor seeks to master nature, Clerval ' +
              'immerses himself in human stories and values. The word "fancy" suggests imagination tempered ' +
              'by warmth, unlike Victor\'s cold ambition. For WJEC AO2, Clerval represents a humanistic ' +
              'alternative to Victor\'s Promethean overreach — his interests unite him with the world ' +
              'rather than separating him from it.',
          },
        ],
      },
      {
        name: 'Justine Moritz',
        description:
          'Justine is a servant in the Frankenstein household who is falsely accused and executed for ' +
          'the murder of William. Her trial is one of the novel\'s most pointed critiques of institutional ' +
          'injustice: despite her innocence, she confesses under pressure from her confessor, who ' +
          'threatens her with excommunication. Victor knows the truth but remains silent, making him ' +
          'complicit in her death. For WJEC, Justine is important for several reasons. She demonstrates ' +
          'the theme of injustice and the failure of institutions — the legal system condemns an innocent ' +
          'woman while the truly guilty party (Victor, by proxy) goes free. She also connects to the ' +
          'Creature\'s argument that society creates its own monsters: just as the Creature is condemned ' +
          'by appearance, Justine is condemned by circumstance. Her gentle, forgiving death — she tells ' +
          'Elizabeth "I do not fear to die" — contrasts sharply with Victor\'s self-pitying response, ' +
          'further exposing his moral cowardice. For AO3, Justine\'s vulnerability as a servant and a ' +
          'woman reflects Shelley\'s awareness of how class and gender determine who is believed and ' +
          'who is sacrificed.',
        keyQuotes: [
          {
            quote: 'I confessed, that I might obtain absolution; but now that falsehood lies heavier at my heart than all my other sins.',
            analysis:
              'Justine\'s forced confession exposes the corruption of religious authority. She confesses ' +
              'not because she is guilty but because her confessor manipulates her faith. The paradox — ' +
              'a false confession weighing heavier than "all my other sins" — reveals a deeply moral ' +
              'character tormented by dishonesty. For WJEC AO3, this critiques institutional religion\'s ' +
              'capacity to coerce the vulnerable, a concern shared by many Romantic writers including ' +
              'Shelley\'s circle.',
          },
        ],
      },
      {
        name: 'The De Lacey Family',
        description:
          'The De Lacey family — the blind father, Felix, Agatha, and the Arabian Safie — function ' +
          'as a microcosm of human society for the Creature. Observing them through a chink in his ' +
          'hovel, the Creature learns language, emotion, and social relationships. They are exiled and ' +
          'impoverished yet retain their dignity, kindness, and love for one another. Old De Lacey, ' +
          'being blind, is the only character who responds to the Creature without prejudice, conversing ' +
          'with him warmly until Felix returns and attacks. The De Laceys embody the Romantic ideal of ' +
          'virtuous simplicity, but their violent rejection of the Creature exposes the limits of that ' +
          'idealism: even the most compassionate humans cannot overcome their instinctive horror at ' +
          'physical difference. For WJEC, the De Lacey episode is central to the theme of prejudice and ' +
          'to the Creature\'s development. Safie\'s subplot — a Muslim woman fleeing her father\'s ' +
          'patriarchal control — adds a layer of cultural commentary, connecting the novel to wider ' +
          'debates about liberty, gender, and cultural exchange that were current in the Romantic period.',
        keyQuotes: [
          {
            quote: 'The hearts of those to whom I address myself may be turned from me... yet I am innocent and harmless.',
            analysis:
              'The Creature\'s words to De Lacey reveal his awareness that he will be judged on appearance, ' +
              'not character. The contrast between "turned from me" and "innocent and harmless" encapsulates ' +
              'the novel\'s central injustice: the Creature possesses genuine virtue but is denied the chance ' +
              'to demonstrate it. For WJEC, this moment is the emotional climax of the Creature\'s narrative ' +
              'and a key passage for AO1 arguments about sympathy and prejudice.',
          },
        ],
      },
    ],

    // ── KEY QUOTES ──────────────────────────────────────────────
    keyQuotes: [
      {
        quote: 'It was the secrets of heaven and earth that I desired to learn.',
        speaker: 'Victor Frankenstein',
        chapter: 'Chapter 2',
        analysis:
          'Victor\'s youthful ambition is framed in religious language — "secrets of heaven and earth" — ' +
          'suggesting a desire to rival God. The verb "desired" connotes both intellectual hunger and ' +
          'something more dangerous: a craving that borders on obsession. For WJEC, this early quote ' +
          'establishes the theme of dangerous knowledge and foreshadows Victor\'s later transgression. ' +
          'It also connects to the Prometheus myth: stealing divine secrets for human use.',
        themes: ['Dangerous Knowledge and Ambition', 'Nature and the Sublime'],
      },
      {
        quote: 'I saw the dull yellow eye of the creature open; it breathed hard, and a convulsive motion agitated its limbs.',
        speaker: 'Victor Frankenstein',
        chapter: 'Chapter 5',
        analysis:
          'The moment of creation is deliberately anti-climactic. Instead of triumph, Victor describes ' +
          'horror: the "dull yellow eye" and "convulsive motion" reduce the Creature to something ' +
          'grotesque and mechanical. The passive observation — "I saw" — distances Victor from his own ' +
          'act. For WJEC AO2, contrast this with the language of Romantic wonder Shelley uses elsewhere; ' +
          'the absence of sublimity here signals that Victor has produced something unnatural.',
        themes: ['Creation, Parenthood and Responsibility', 'Monstrosity and Appearance'],
      },
      {
        quote: 'Did I request thee, Maker, from my clay to mould me man?',
        speaker: 'Epigraph (Paradise Lost, Book X)',
        chapter: 'Epigraph',
        analysis:
          'Shelley\'s choice of epigraph from Milton\'s Paradise Lost frames the entire novel as a story ' +
          'about the relationship between creator and creation. Adam\'s question to God — did I ask to be ' +
          'made? — becomes the Creature\'s implicit accusation against Victor. The word "clay" emphasises ' +
          'the Creature\'s assembled, material nature. For WJEC, this epigraph is essential for AO3: it ' +
          'signals the Miltonic framework that structures the Creature\'s self-understanding and Victor\'s ' +
          'role as a failed God.',
        themes: ['Creation, Parenthood and Responsibility', 'Dangerous Knowledge and Ambition'],
      },
      {
        quote: 'All men hate the wretched; how, then, must I be hated, who am miserable beyond all living things!',
        speaker: 'The Creature',
        chapter: 'Chapter 11',
        analysis:
          'The Creature\'s rhetorical logic is devastating: if all wretched beings are hated, then the ' +
          'most wretched must be the most hated. The superlative "beyond all living things" claims a unique ' +
          'and absolute suffering. The exclamation mark conveys passionate anguish rather than self-pity. ' +
          'For WJEC, this demonstrates the Creature\'s sophisticated use of rhetoric — he constructs a ' +
          'logical argument while simultaneously appealing to the reader\'s emotions, making him a more ' +
          'persuasive narrator than Victor.',
        themes: ['Isolation and Loneliness', 'Monstrosity and Appearance'],
      },
      {
        quote: 'Beware; for I am fearless, and therefore powerful.',
        speaker: 'The Creature',
        chapter: 'Chapter 24',
        analysis:
          'This warning reverses the expected power dynamic: the Creature, who is hunted and outcast, ' +
          'claims superiority through his very desperation. Having nothing left to lose, he is "fearless" ' +
          'and therefore more dangerous than any creature with attachments. The imperative "Beware" ' +
          'positions Victor as the vulnerable party. For WJEC, this quote is useful for discussing how ' +
          'Shelley subverts the hunter/hunted dynamic and for exploring the Creature\'s psychological ' +
          'evolution from innocence to defiance.',
        themes: ['Monstrosity and Appearance', 'Isolation and Loneliness'],
      },
      {
        quote: 'A new species would bless me as its creator and source; many happy and excellent natures would owe their being to me.',
        speaker: 'Victor Frankenstein',
        chapter: 'Chapter 4',
        analysis:
          'Victor\'s fantasy reveals the true nature of his ambition: he does not seek knowledge for its ' +
          'own sake but desires worship — a "new species" that would "bless" him. The language of religion ' +
          '("creator," "source," "bless") confirms that Victor is attempting to usurp God\'s role. For ' +
          'WJEC, this quote is crucial evidence that Victor\'s motivation is egotistical rather than ' +
          'scientific, supporting arguments about hubris and the Promethean overreacher.',
        themes: ['Dangerous Knowledge and Ambition', 'Creation, Parenthood and Responsibility'],
      },
      {
        quote: 'Even broken in spirit as he is, no one can feel more deeply than he does the beauties of nature.',
        speaker: 'Robert Walton',
        chapter: 'Letter 4',
        analysis:
          'Walton\'s observation about Victor connects the Romantic value of sensitivity to nature with ' +
          'Victor\'s tragic character. The phrase "broken in spirit" suggests that Victor\'s appreciation ' +
          'of nature survives even his moral destruction, implying that aesthetic sensibility and ethical ' +
          'behaviour are not the same thing. For WJEC, this complicates simple readings of Victor as ' +
          'merely villainous and supports AO2 analysis of Walton as a narrator who shapes the reader\'s ' +
          'perception of Victor.',
        themes: ['Nature and the Sublime', 'Isolation and Loneliness'],
      },
      {
        quote: 'I, the miserable and the abandoned, am an abortion, to be spurned at, and kicked, and trampled on.',
        speaker: 'The Creature',
        chapter: 'Walton\'s final letters',
        analysis:
          'The Creature\'s final self-description is devastating in its self-loathing. The word "abortion" — ' +
          'meaning something brought into being but rejected as monstrous — is the most violent term he ' +
          'uses for himself. The passive constructions "spurned at, kicked, trampled on" list the physical ' +
          'violence he has endured. For WJEC, this final speech generates intense pathos and forces the ' +
          'reader to question who the true monster is, making it essential for conclusion paragraphs about ' +
          'sympathy and moral judgement.',
        themes: ['Monstrosity and Appearance', 'Isolation and Loneliness', 'Creation, Parenthood and Responsibility'],
      },
      {
        quote: 'Life, although it may only be an accumulation of anguish, is dear to me, and I will defend it.',
        speaker: 'The Creature',
        chapter: 'Chapter 17',
        analysis:
          'This paradox — that life is both "an accumulation of anguish" and something worth defending — ' +
          'reveals the Creature\'s complex relationship with existence. Despite unrelenting suffering, he ' +
          'clings to life, demonstrating a resilience and will to survive that Victor, with all his ' +
          'advantages, never shows. For WJEC, this contradicts Victor\'s portrayal of the Creature as ' +
          'purely destructive and supports arguments that the Creature possesses a richer inner life ' +
          'than his creator.',
        themes: ['Isolation and Loneliness', 'Creation, Parenthood and Responsibility'],
      },
      {
        quote: 'How can I describe my emotions at this catastrophe, or how delineate the wretch whom with such infinite pains and care I had endeavoured to form?',
        speaker: 'Victor Frankenstein',
        chapter: 'Chapter 5',
        analysis:
          'The rhetorical questions reveal Victor\'s inability — or unwillingness — to process what he ' +
          'has done. The word "catastrophe" reframes creation as disaster, while "infinite pains and care" ' +
          'reminds the reader of the effort Victor invested, deepening the irony of his immediate ' +
          'rejection. For WJEC AO2, note how Victor\'s language distances him from responsibility: the ' +
          'questions deflect rather than confront, a pattern that recurs throughout his narrative.',
        themes: ['Creation, Parenthood and Responsibility', 'Dangerous Knowledge and Ambition'],
      },
      {
        quote: 'When I looked around I saw and heard of none like me. Was I, then, a monster, a blot upon the earth, from which all men fled and whom all men disowned?',
        speaker: 'The Creature',
        chapter: 'Chapter 13',
        analysis:
          'The Creature\'s dawning self-awareness is framed as existential horror. The rhetorical question — ' +
          '"Was I, then, a monster?" — shows him adopting the language society uses to describe him, ' +
          'internalising the prejudice he encounters. The metaphor "a blot upon the earth" suggests erasure ' +
          'and unworthiness. For WJEC, this passage is powerful for AO1 arguments about how identity is ' +
          'socially constructed: the Creature becomes a "monster" not through his own nature but through ' +
          'the reactions of others.',
        themes: ['Monstrosity and Appearance', 'Isolation and Loneliness'],
      },
      {
        quote: 'I compassionated him and sometimes felt a wish to console him, but when I looked upon him, when I saw the filthy mass that moved and talked, my heart sickened and my feelings were altered to those of horror and hatred.',
        speaker: 'Victor Frankenstein',
        chapter: 'Chapter 17',
        analysis:
          'This passage captures Victor\'s moral failure in miniature. He acknowledges compassion — the ' +
          'capacity is there — but it is overridden by physical disgust. The dehumanising phrase "filthy ' +
          'mass that moved and talked" reduces the Creature to an object. For WJEC, the internal conflict ' +
          'here — compassion versus revulsion — is crucial for nuanced AO1 analysis. Victor is not incapable ' +
          'of empathy; he chooses to prioritise his own comfort, which makes his failure more culpable ' +
          'than simple ignorance.',
        themes: ['Monstrosity and Appearance', 'Creation, Parenthood and Responsibility'],
      },
    ],

    // ── CONTEXT POINTS ──────────────────────────────────────────
    contextPoints: [
      'Mary Shelley wrote Frankenstein in 1816 during the "Year Without a Summer," when volcanic ash ' +
        'from Mount Tambora darkened European skies — an apocalyptic atmosphere that infuses the ' +
        'novel\'s Gothic imagery.',
      'The novel was conceived during a ghost-story competition at the Villa Diodati on Lake Geneva, ' +
        'with Lord Byron, Percy Bysshe Shelley, and John Polidori. Shelley was only 18 years old.',
      'Luigi Galvani\'s experiments with electricity and dead frogs (galvanism) were widely discussed ' +
        'in the early 19th century. Shelley attended lectures on the topic, and the idea that electricity ' +
        'could reanimate dead tissue directly influenced the novel.',
      'Shelley\'s mother, Mary Wollstonecraft, died shortly after giving birth to her. This personal ' +
        'experience of creation linked to death haunts the novel\'s exploration of parenthood ' +
        'and responsibility.',
      'The Romantic movement, led by poets like Wordsworth, Coleridge, Byron, and Percy Shelley, valued ' +
        'emotion, nature, individualism, and the sublime. Frankenstein both draws on and critiques ' +
        'Romantic ideals — Victor\'s Romantic sensibility does not prevent his moral failure.',
      'The subtitle "The Modern Prometheus" references the Greek Titan who stole fire from the gods ' +
        'and was punished eternally. Victor\'s attempt to create life mirrors Prometheus\'s transgression — ' +
        'bringing divine power to the human realm with devastating consequences.',
      'The novel\'s epistolary and nested narrative structure — Walton\'s letters containing Victor\'s ' +
        'story containing the Creature\'s story — was influenced by Gothic novels and by the epistolary ' +
        'tradition of Richardson and Rousseau. This structure forces the reader to evaluate competing ' +
        'perspectives and consider questions of narrative reliability.',
      'The French Revolution (1789) and its aftermath shaped Romantic-era anxieties about the dangers ' +
        'of radical change and the mob. The Creature\'s transformation from innocent to avenger can be ' +
        'read as an allegory for revolutionary violence born of social injustice.',
    ],

    // ── EXAM TIPS ───────────────────────────────────────────────
    examTips: [
      'WJEC Eduqas Component 2 gives you an extract and asks you to analyse it before widening to ' +
        'the whole text. Spend roughly 10 minutes on the extract (close language analysis, AO2) and ' +
        '20 minutes on the wider text (themes, character development, context — AO1, AO3).',
      'Always identify the narrative layer you are discussing: Walton\'s frame, Victor\'s account, or ' +
        'the Creature\'s embedded narrative. WJEC rewards awareness of how the nested structure shapes ' +
        'meaning and reliability.',
      'For AO3 (context), avoid bolted-on context. Do not write "In the Romantic period..." as a ' +
        'separate paragraph. Instead, integrate context into your analysis: "Shelley draws on Romantic ' +
        'ideas about the restorative power of nature to highlight Victor\'s spiritual emptiness."',
      'The Creature\'s narrative voice is the novel\'s richest source of AO2 material. His Miltonic ' +
        'allusions, rhetorical questions, and formal eloquence challenge the reader\'s assumptions about ' +
        'monstrosity — always link language analysis to character interpretation.',
      'Never describe the Creature as "Frankenstein" — that is the creator\'s name. WJEC examiners ' +
        'note this as a common error. Use "the Creature," "the Being," or "Frankenstein\'s creation."',
      'For top-band WJEC responses, engage with alternative interpretations. Is Victor a tragic hero ' +
        'or a moral coward? Is the Creature a victim or a villain? The examiner rewards nuanced, ' +
        'balanced arguments that acknowledge complexity.',
      'Time management is critical on Paper 2. You have approximately 45 minutes per question. Plan ' +
        'for 5 minutes, write for 35 minutes, and review for 5 minutes. A well-structured response ' +
        'with clear paragraphs will always outperform a longer, disorganised one.',
    ],

    // ── SAMPLE QUESTIONS ────────────────────────────────────────
    sampleQuestions: [
      {
        question:
          'How does Shelley present the theme of responsibility in Frankenstein? ' +
          'You should refer to the extract and the novel as a whole.',
        planPoints: [
          'Extract analysis: close reading of Victor\'s language — evasion, passive constructions, ' +
            'self-pity — that deflects responsibility from himself.',
          'Victor\'s abandonment of the Creature at the moment of creation — the foundational failure ' +
            'that drives the entire plot.',
          'Victor\'s silence during Justine\'s trial — he knows the truth but protects himself, making ' +
            'him complicit in her execution.',
          'The Creature\'s argument that Victor owes him a companion: "You, my creator, would tear me ' +
            'from the world" — the moral logic of parental duty.',
          'The destruction of the female creature — Victor again prioritises his own fears over his ' +
            'obligations, provoking the Creature\'s final revenge.',
          'Context: connect to Shelley\'s own experiences of parenthood and loss, and to Romantic-era ' +
            'debates about the relationship between creator and creation (Prometheus, Paradise Lost).',
        ],
      },
      {
        question:
          'How does Shelley use the character of the Creature to explore ideas about prejudice?',
        planPoints: [
          'The Creature\'s physical appearance and the universal horror it provokes — every human ' +
            'encounter ends in rejection or violence based on looks alone.',
          'The De Lacey episode: the blind man\'s acceptance versus Felix\'s violent rejection — sight ' +
            'as the basis for prejudice.',
          'The Creature\'s eloquence and learning — Shelley gives him the novel\'s most sophisticated ' +
            'voice, challenging the reader\'s own assumptions about "monsters."',
          'Victor\'s language: "filthy mass," "wretch," "daemon" — the creator\'s dehumanising ' +
            'vocabulary reinforces rather than challenges prejudice.',
          'Context: Mary Wollstonecraft\'s arguments about prejudice; Rousseau\'s idea of the "noble ' +
            'savage" corrupted by society; Romantic emphasis on looking beyond surface appearance.',
        ],
      },
      {
        question:
          'How does Shelley present the relationship between humans and the natural world ' +
          'in Frankenstein?',
        planPoints: [
          'Victor\'s experience of the Alpine sublime — temporary consolation that never addresses ' +
            'his moral failure.',
          'The Creature\'s early wonder at nature — his delight in birdsong, moonlight, and the ' +
            'forest — contrasted with his later association with ice and desolation.',
          'The Arctic setting: vast, indifferent, and deadly — nature as a force beyond human control, ' +
            'framing the novel\'s opening and closing.',
          'Pathetic fallacy and weather: storms at moments of crisis, spring during periods of ' +
            'recovery — Shelley\'s use of nature to mirror emotional states.',
          'Context: Burke\'s concept of the sublime; the Romantic belief in nature\'s spiritual power; ' +
            'the contrast between Shelley\'s use of nature and Wordsworth\'s more optimistic vision.',
        ],
      },
      {
        question:
          'How does Shelley use narrative structure to shape the reader\'s response to ' +
          'Victor Frankenstein?',
        planPoints: [
          'Walton\'s frame: his admiration for Victor colours the reader\'s first impression — we ' +
            'meet Victor through the eyes of a sympathiser.',
          'Victor\'s unreliable narration: his self-pitying language and evasion of blame invite the ' +
            'reader to question his account.',
          'The Creature\'s embedded narrative: placed at the structural centre, it challenges ' +
            'everything Victor has said and generates sympathy for the Creature.',
          'The return to Walton\'s frame at the end: the reader now has all three perspectives and ' +
            'must judge for themselves.',
          'AO2 focus: analyse specific language choices in each narrative layer — Victor\'s Gothic ' +
            'rhetoric versus the Creature\'s Miltonic eloquence versus Walton\'s Romantic idealism.',
        ],
      },
    ],

    // ── GRADE BOOST ─────────────────────────────────────────────
    gradeBoost: {
      grade5:
        'At Grade 5, you need to show clear understanding of the text with relevant quotations and ' +
        'some awareness of context. Make sure every paragraph has a clear point, a quotation, and an ' +
        'explanation of how language creates meaning. Use topic sentences that directly address the ' +
        'question. For Frankenstein, ensure you can explain Victor\'s ambition, the Creature\'s ' +
        'isolation, and at least two key context points (e.g., galvanism, the Prometheus myth).',
      grade7:
        'At Grade 7, you need thoughtful, developed analysis that explores how Shelley shapes meaning ' +
        'through language, structure, and form. Move beyond identifying techniques to explaining their ' +
        'effect. For example, don\'t just note that the Creature uses a rhetorical question — explain ' +
        'how it positions Victor as morally accountable and generates sympathy for the Creature. ' +
        'Integrate context fluently into your analysis rather than adding it as a separate section. ' +
        'Consider alternative readings: is Victor a tragic hero or simply selfish?',
      grade9:
        'At Grade 9, you need a conceptualised, exploratory response that demonstrates independent ' +
        'critical thinking. Engage with the novel\'s ambiguities: the unreliability of all three ' +
        'narrators, the tension between Romantic ideals and their consequences, the impossibility ' +
        'of deciding definitively who the "monster" is. Use critical terminology precisely — "Byronic ' +
        'hero," "Promethean overreacher," "Rousseauian noble savage" — and weave context seamlessly ' +
        'into your argument. Your response should feel like a coherent essay with a clear thesis, not ' +
        'a series of disconnected paragraphs.',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  //  PRIDE AND PREJUDICE — Jane Austen (1813)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'pride-prejudice-wjec',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    board: 'wjec',
    paper: 'paper2',
    type: '19th-century',

    // ── THEMES ──────────────────────────────────────────────────
    themes: [
      {
        theme: 'Pride and Prejudice (as Character Flaws)',
        analysis:
          'The novel\'s title names its central thematic concern: the destructive effects of excessive ' +
          'pride and hasty prejudice on human relationships. Darcy\'s pride is rooted in class — he ' +
          'initially considers Elizabeth and her family beneath him, dismissing her at the Meryton ball ' +
          'as "tolerable, but not handsome enough to tempt me." Elizabeth\'s prejudice, meanwhile, is a ' +
          'defensive reaction to Darcy\'s slight and is reinforced by Wickham\'s lies. Austen structures ' +
          'the novel so that both protagonists must recognise and overcome their respective flaws: Darcy ' +
          'must learn humility, and Elizabeth must learn to question her own judgement. The turning point ' +
          'is Darcy\'s letter after the failed first proposal, which forces Elizabeth to confront the ' +
          'inaccuracy of her assumptions: "Till this moment I never knew myself." Austen does not ' +
          'distribute blame equally, however — she makes clear that pride based on genuine merit (Darcy\'s ' +
          'intelligence and integrity) is less harmful than pride based on social pretension (Lady ' +
          'Catherine, Mr Collins). For WJEC, this theme connects to AO3 through Regency-era class ' +
          'structures: pride was a natural consequence of a rigid social hierarchy in which birth determined ' +
          'worth, and Austen simultaneously critiques and navigates that system.',
      },
      {
        theme: 'Marriage and Social Mobility',
        analysis:
          'Marriage in Pride and Prejudice is not merely a romantic union but an economic and social ' +
          'transaction. Mrs Bennet\'s obsessive pursuit of wealthy husbands for her daughters is driven ' +
          'by genuine financial anxiety: the Bennet estate is entailed to Mr Collins, meaning that upon ' +
          'Mr Bennet\'s death, the women will have no home and limited income. Charlotte Lucas\'s acceptance ' +
          'of Mr Collins — "I am not romantic, you know; I never was. I ask only a comfortable home" — is ' +
          'presented without authorial condemnation, acknowledging the pragmatic reality that marriage was ' +
          'one of the few routes to financial security for women. Austen contrasts several models of ' +
          'marriage: the mercenary (Charlotte and Collins), the passionate but irresponsible (Lydia and ' +
          'Wickham), the stale and mismatched (Mr and Mrs Bennet), and the ideal (Elizabeth and Darcy, ' +
          'Jane and Bingley). For WJEC AO3, understanding Regency marriage law is essential. Women could ' +
          'not inherit property under primogeniture, had limited employment options, and lost their legal ' +
          'identity upon marriage under coverture law. Austen writes within and against these constraints, ' +
          'presenting Elizabeth\'s refusal of both Collins and Darcy\'s first proposal as acts of remarkable ' +
          'independence that risked genuine financial hardship.',
      },
      {
        theme: 'Class, Wealth and Social Status',
        analysis:
          'Austen\'s novel is a meticulous anatomy of the English class system during the Regency period. ' +
          'The characters occupy a narrow but precisely stratified social band: Lady Catherine de Bourgh ' +
          'represents the aristocracy; Darcy the established landed gentry; Bingley the newly wealthy whose ' +
          'fortune comes from trade; the Bennets the lesser gentry; and the Gardiners the respectable middle ' +
          'class. Austen uses these distinctions to explore how wealth and birth shape behaviour, expectations, ' +
          'and moral judgement. Miss Bingley\'s snobbery toward Elizabeth — her sneering references to the ' +
          'Bennets\' "low connections" and "an uncle who lives somewhere near Cheapside" — reveals how the ' +
          'newly wealthy often police class boundaries more aggressively than the established elite. Darcy\'s ' +
          'initial pride is class-based, but his character development involves recognising merit independent ' +
          'of social position. The Gardiners, who are "in trade," prove to be the novel\'s most sensible and ' +
          'dignified characters, undermining the assumption that class determines character. For WJEC AO3, ' +
          'the tension between inherited status and personal merit was a live debate in Regency England, ' +
          'fuelled by the rise of the industrial and commercial classes.',
      },
      {
        theme: 'Women\'s Independence and Autonomy',
        analysis:
          'Pride and Prejudice explores the limited options available to women in Regency England and ' +
          'celebrates Elizabeth Bennet\'s determination to act according to her own judgement. Elizabeth\'s ' +
          'refusal of Mr Collins is an act of significant courage: she rejects financial security and defies ' +
          'her mother\'s wishes because she will not marry without respect and affection. Her refusal of ' +
          'Darcy\'s first proposal is even more remarkable — she turns down one of the wealthiest men in ' +
          'England because his manner offends her principles. Austen presents Elizabeth\'s independence of ' +
          'mind as her defining virtue, but she is careful to show the risks: Charlotte Lucas, who lacks ' +
          'Elizabeth\'s beauty and wit, makes the "rational" choice to marry Collins, and Austen treats her ' +
          'with sympathy rather than scorn. The contrast between Elizabeth and the passive, compliant Jane ' +
          'highlights different strategies for navigating a patriarchal society. For WJEC AO3, connecting ' +
          'Elizabeth\'s independence to wider debates about women\'s roles is valuable. While Austen was not ' +
          'a political radical like Mary Wollstonecraft, her novels consistently argue that women\'s ' +
          'intelligence and moral judgement deserve respect. Lady Catherine\'s attempt to prevent the ' +
          'Darcy-Elizabeth match — invoking "honour, decorum, prudence, nay, interest" — represents the ' +
          'patriarchal establishment\'s resistance to women who defy convention.',
      },
      {
        theme: 'Reputation and Propriety',
        analysis:
          'In the Regency world Austen depicts, reputation — particularly female reputation — is both ' +
          'fragile and consequential. Lydia\'s elopement with Wickham threatens to destroy the entire Bennet ' +
          'family\'s social standing: "She is lost for ever," Mr Bennet declares, and the narrator confirms ' +
          'that the disgrace would have prevented the older sisters from making respectable marriages. The ' +
          'double standard is stark: Wickham\'s reputation survives largely intact (he is merely considered ' +
          'rakish), while Lydia\'s is ruined. Austen uses the elopement plot to show how the rigid codes of ' +
          'propriety could be weaponised against women: one transgression — or even the rumour of one — could ' +
          'result in permanent social exclusion. Lady Catherine\'s outrage at the prospect of Elizabeth ' +
          'marrying Darcy is also framed in terms of propriety and family honour, revealing how social ' +
          'conventions serve the powerful. Yet Austen also shows characters who deploy propriety wisely: ' +
          'Elizabeth\'s refusal to be intimidated by Lady Catherine, and Darcy\'s quiet intervention to save ' +
          'Lydia, demonstrate that true honour lies in moral action rather than social performance. For WJEC, ' +
          'reputation connects to AO3 through the conduct-book tradition that prescribed feminine behaviour ' +
          'and the real social consequences women faced for stepping outside those norms.',
      },
    ],

    // ── CHARACTERS ──────────────────────────────────────────────
    characters: [
      {
        name: 'Elizabeth Bennet',
        description:
          'Elizabeth is Austen\'s most celebrated heroine — intelligent, witty, principled, and fiercely ' +
          'independent. She is introduced as her father\'s favourite, distinguished from her sisters by her ' +
          '"quickness of observation" and willingness to laugh at the world\'s absurdities. Her central ' +
          'journey is one of self-knowledge: she begins the novel confident in her ability to judge character, ' +
          'only to discover that her prejudice against Darcy and trust in Wickham were both misplaced. The ' +
          'pivotal moment is her reading of Darcy\'s letter, which forces her to re-examine every assumption: ' +
          '"How despicably I have acted! I, who have prided myself on my discernment!" Elizabeth\'s willingness ' +
          'to change — to acknowledge error and grow — is what distinguishes her from characters like Lady ' +
          'Catherine or Mrs Bennet, who are imprisoned by their fixed attitudes. For WJEC, Elizabeth is ' +
          'essential for AO2 analysis: Austen uses free indirect discourse to blend Elizabeth\'s thoughts ' +
          'with the narrator\'s voice, creating a perspective that is simultaneously intimate and ironic. The ' +
          'reader often knows more than Elizabeth does, generating dramatic irony that rewards close reading.',
        keyQuotes: [
          {
            quote: 'Till this moment I never knew myself.',
            analysis:
              'This is the novel\'s most important moment of anagnorisis — the protagonist\'s recognition ' +
              'of their own error. Elizabeth realises that her prejudice against Darcy was not rational ' +
              'judgement but emotional reaction. The phrase "never knew myself" is devastating in its ' +
              'simplicity: Elizabeth, who has prided herself on her insight, discovers she is blind to her ' +
              'own flaws. For WJEC, this quote is essential for any question about character development ' +
              'or the theme of self-knowledge.',
          },
          {
            quote: 'There is a stubbornness about me that never can bear to be frightened at the will of others. My courage always rises at every attempt to intimidate me.',
            analysis:
              'Elizabeth\'s defiance of Lady Catherine de Bourgh reveals the steel beneath her wit. The ' +
              'word "stubbornness" is self-aware — she recognises that her independence can be a flaw — but ' +
              '"courage" reframes it as a virtue. For WJEC AO3, this is a remarkable statement for a woman ' +
              'in Regency England, where female compliance was a social expectation. Elizabeth\'s refusal to ' +
              'submit to aristocratic authority challenges the class hierarchy itself.',
          },
          {
            quote: 'I could easily forgive his pride, if he had not mortified mine.',
            analysis:
              'This early remark reveals Elizabeth\'s self-awareness and her blind spot simultaneously. She ' +
              'acknowledges that pride is forgivable — even natural — but her own wounded vanity prevents her ' +
              'from extending that forgiveness to Darcy. The balanced syntax ("his pride / mine") mirrors the ' +
              'novel\'s central structure of two proud characters in opposition. For WJEC, this quote supports ' +
              'AO1 arguments about how Elizabeth\'s prejudice is rooted in personal affront rather than ' +
              'rational assessment.',
          },
        ],
      },
      {
        name: 'Mr Darcy',
        description:
          'Fitzwilliam Darcy is the novel\'s romantic hero, though he begins as its apparent antagonist. ' +
          'His initial behaviour — the insulting remark at the Meryton ball, his cold reserve, his ' +
          'interference in separating Jane and Bingley — creates a powerful first impression of arrogance. ' +
          'Yet Austen gradually reveals a more complex character: Darcy is shy rather than proud in some ' +
          'readings, principled rather than cold, and his housekeeper Mrs Reynolds testifies that "I have ' +
          'never had a cross word from him in my life." His letter to Elizabeth after the failed first ' +
          'proposal is the novel\'s structural pivot: it reveals Wickham\'s true character, explains his ' +
          'objections to the Bennet family, and demonstrates a capacity for honest self-examination. Darcy\'s ' +
          'secret intervention to save Lydia from disgrace — paying Wickham to marry her — proves that his ' +
          'reformation is genuine: he acts for Elizabeth\'s sake without seeking credit. For WJEC, Darcy\'s ' +
          'character arc parallels Elizabeth\'s: both must overcome a defining flaw to deserve each other. His ' +
          'development from "I have been a selfish being all my life" to the generous, self-effacing man of ' +
          'the final chapters is essential for AO1 discussions of moral growth.',
        keyQuotes: [
          {
            quote: 'She is tolerable, but not handsome enough to tempt me.',
            analysis:
              'Darcy\'s dismissal of Elizabeth at the Meryton ball is the novel\'s inciting incident. The ' +
              'condescending "tolerable" reduces Elizabeth to an object of assessment, while "tempt me" ' +
              'implies that he is the arbiter of worth. For WJEC, this quote establishes Darcy\'s class-based ' +
              'pride and provides the personal slight that fuels Elizabeth\'s prejudice for most of the novel. ' +
              'It also creates dramatic irony: the reader watches Darcy fall for the woman he publicly ' +
              'dismissed.',
          },
          {
            quote: 'In vain I have struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you.',
            analysis:
              'Darcy\'s first proposal is a masterclass in how not to propose. The language of struggle — ' +
              '"in vain," "repressed" — frames his love as a weakness he has fought against, insulting ' +
              'Elizabeth even as he declares his affection. The word "ardently" reveals genuine passion, but ' +
              'it is buried under condescension. For WJEC AO2, analyse the contrast between form and content: ' +
              'the proposal is syntactically elegant but emotionally tone-deaf, revealing Darcy\'s inability ' +
              'at this point to see beyond class.',
          },
          {
            quote: 'I have been a selfish being all my life, in practice, though not in principle.',
            analysis:
              'Darcy\'s self-assessment near the novel\'s end shows genuine moral growth. The distinction ' +
              'between "practice" and "principle" is crucial: Darcy was raised with good values but taught to ' +
              'apply them only within his own class. Elizabeth\'s rejection forced him to examine the gap ' +
              'between his beliefs and his behaviour. For WJEC, this quote is key evidence that Darcy\'s ' +
              'transformation is internal and principled, not merely strategic — he changes who he is, not ' +
              'just how he acts.',
          },
        ],
      },
      {
        name: 'Mr Bennet',
        description:
          'Mr Bennet is one of Austen\'s most complex creations — a witty, intelligent man who has ' +
          'retreated into ironic detachment as a defence against a disappointing marriage. He is Elizabeth\'s ' +
          'intellectual companion and shares her love of absurdity, but his failure to discipline Lydia and ' +
          'Kitty, to save for his family\'s future, or to take Mrs Bennet\'s anxieties seriously has real ' +
          'consequences. When Lydia elopes with Wickham, Mr Bennet acknowledges his culpability: "No, Lizzy, ' +
          'let me once in my life feel how much I have been to blame." This is a rare moment of genuine ' +
          'emotion from a character who habitually deflects serious feeling with wit. For WJEC, Mr Bennet ' +
          'represents the danger of intelligence without responsibility — a theme that connects him, ' +
          'interestingly, to Victor Frankenstein. His sardonic humour entertains the reader but also enables ' +
          'his passivity: laughing at his wife and youngest daughters is easier than governing them. Austen ' +
          'uses him to argue that wit without moral engagement is a form of neglect.',
        keyQuotes: [
          {
            quote: 'For what do we live, but to make sport for our neighbours, and laugh at them in our turn?',
            analysis:
              'Mr Bennet\'s philosophy of life encapsulates both his charm and his failure. The rhetorical ' +
              'question presents mockery as life\'s purpose, revealing a man who has substituted amusement ' +
              'for action. For WJEC, this quote supports arguments about how Austen uses humour critically: ' +
              'Mr Bennet is funny, but his philosophy has consequences — his family\'s near-ruin is partly ' +
              'the result of his refusal to take anything seriously.',
          },
          {
            quote: 'No, Lizzy, let me once in my life feel how much I have been to blame.',
            analysis:
              'This rare moment of genuine self-reproach breaks through Mr Bennet\'s habitual irony. The ' +
              'phrase "once in my life" admits a lifetime of evasion, while "how much" acknowledges the ' +
              'scale of his failure. For WJEC, this is powerful evidence for AO1 arguments about parental ' +
              'responsibility and the consequences of emotional disengagement. The contrast with his usual ' +
              'sardonic tone makes the honesty all the more striking.',
          },
        ],
      },
      {
        name: 'Mrs Bennet',
        description:
          'Mrs Bennet is often read as a purely comic figure — "a woman of mean understanding, little ' +
          'information, and uncertain temper" — but Austen imbues her with a genuine, if hysterical, anxiety ' +
          'about her daughters\' futures. The entailment of the Bennet estate means that upon her husband\'s ' +
          'death, Mrs Bennet and her unmarried daughters will be homeless and dependent on relatives. Her ' +
          'relentless matchmaking, though socially embarrassing, is a rational response to a real threat. ' +
          'Austen\'s ironic narration invites the reader to laugh at Mrs Bennet, but a careful reading ' +
          'reveals that the patriarchal system which renders women financially dependent is the true object ' +
          'of critique. For WJEC AO3, Mrs Bennet can be analysed as a product of a society that gave women ' +
          'no economic autonomy: her "business" of marrying off her daughters is the only meaningful work ' +
          'available to her. Her nerves, which the family treats as a joke, may also be read as a symptom ' +
          'of genuine anxiety about destitution — a surprisingly sympathetic reading that WJEC examiners ' +
          'reward.',
        keyQuotes: [
          {
            quote: 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
            analysis:
              'The novel\'s famous opening sentence is spoken in Mrs Bennet\'s idiom but delivered with ' +
              'Austen\'s irony. The pompous "universally acknowledged" and the legalistic "in possession of ' +
              'a good fortune" satirise the marriage market while also exposing its economic reality. For ' +
              'WJEC AO2, this sentence demonstrates Austen\'s use of free indirect discourse: the narrator ' +
              'simultaneously adopts and mocks Mrs Bennet\'s worldview, establishing the ironic tone that ' +
              'governs the entire novel.',
          },
          {
            quote: 'Oh! Mr Bennet, you have no compassion on my poor nerves.',
            analysis:
              'Mrs Bennet\'s complaint about her "poor nerves" is played for comedy, but the underlying ' +
              'anxiety is real. In the Regency period, "nerves" was a common term for women\'s emotional ' +
              'distress, often trivialised by men. Mr Bennet\'s mocking response — "I have a high respect ' +
              'for your nerves. They are my old friends" — epitomises his strategy of deflecting his wife\'s ' +
              'genuine fears with wit. For WJEC AO3, this exchange reveals the gendered dynamics of the ' +
              'Bennet marriage and the way women\'s concerns were routinely dismissed.',
          },
        ],
      },
      {
        name: 'Mr Wickham',
        description:
          'Wickham is the novel\'s primary antagonist, though his villainy is disguised behind charm ' +
          'and good looks. He seduces Elizabeth and the reader with his plausible account of Darcy\'s ' +
          'cruelty, exploiting society\'s tendency to judge by appearance. His true character — he attempted ' +
          'to elope with Georgiana Darcy for her fortune and gambles recklessly — is revealed only through ' +
          'Darcy\'s letter. Wickham represents the danger of surface without substance: he has the manners ' +
          'of a gentleman without the morality. His elopement with Lydia is motivated entirely by self-interest ' +
          '— he has no intention of marrying her until Darcy pays his debts and buys him a commission. For ' +
          'WJEC, Wickham serves as a foil to Darcy: both are handsome and socially adept, but where Darcy\'s ' +
          'rough exterior conceals genuine integrity, Wickham\'s polished surface conceals moral bankruptcy. ' +
          'Austen uses him to reinforce the novel\'s central argument that appearances are unreliable guides ' +
          'to character — the very prejudice Elizabeth must overcome.',
        keyQuotes: [
          {
            quote: 'Mr Wickham is blessed with such happy manners as may ensure his making friends — whether he may be equally capable of retaining them, is less certain.',
            analysis:
              'This observation captures the essence of Wickham\'s character: he excels at first impressions ' +
              'but cannot sustain them. The word "blessed" is ironic — his charm is a natural gift that he ' +
              'uses destructively. The second clause introduces doubt without direct accusation, demonstrating ' +
              'Austen\'s mastery of understatement. For WJEC AO2, this is a fine example of how Austen ' +
              'conveys moral judgement through narrative tone rather than explicit statement.',
          },
        ],
      },
      {
        name: 'Charlotte Lucas',
        description:
          'Charlotte is Elizabeth\'s closest friend and her philosophical opposite on the question of ' +
          'marriage. "I am not romantic, you know; I never was. I ask only a comfortable home," she tells ' +
          'Elizabeth after accepting Mr Collins. Charlotte\'s decision is pragmatic: at twenty-seven, unmarried, ' +
          'and without beauty or fortune, her options are limited. Austen presents this choice without ' +
          'condemnation — Charlotte manages her married life with dignity, carving out private space in her ' +
          'home and quietly minimising her exposure to Collins\'s absurdity. For WJEC, Charlotte is crucial ' +
          'for AO3 analysis of women\'s limited choices in Regency England. Her acceptance of Collins ' +
          'highlights the economic coercion underlying the marriage market: Charlotte does not love Collins, ' +
          'but love is a luxury she cannot afford. Elizabeth\'s disapproval, though understandable, comes from ' +
          'a position of relative privilege — she has the beauty and wit to hold out for a better match. ' +
          'Charlotte\'s pragmatism complicates the novel\'s romantic plot and forces the reader to consider ' +
          'how much "choice" women actually had.',
        keyQuotes: [
          {
            quote: 'Happiness in marriage is entirely a matter of chance.',
            analysis:
              'Charlotte\'s statement challenges the Romantic ideal of marriage as a union of hearts. The ' +
              'word "entirely" is uncompromising — she leaves no room for the idea that love or compatibility ' +
              'can be planned. "Chance" reduces marriage to a gamble, reflecting the reality that Regency ' +
              'women often married men they barely knew. For WJEC, this quote is valuable for comparing ' +
              'Charlotte\'s worldview with Elizabeth\'s and for exploring how Austen presents multiple ' +
              'perspectives on marriage without definitively endorsing one.',
          },
        ],
      },
      {
        name: 'Lady Catherine de Bourgh',
        description:
          'Lady Catherine is Austen\'s most formidable comic villain — an aristocrat whose wealth and ' +
          'title have insulated her from any need for self-reflection. She dispenses unsolicited advice, ' +
          'interrogates Elizabeth about her family with breathtaking rudeness, and attempts to prevent the ' +
          'Darcy-Elizabeth match by invoking family honour and social propriety. Her confrontation with ' +
          'Elizabeth at Longbourn — "Are the shades of Pemberley to be thus polluted?" — is one of the ' +
          'novel\'s most dramatic scenes, and Elizabeth\'s calm refusal to be intimidated marks her final ' +
          'triumph over the class system\'s attempts to define her worth. For WJEC, Lady Catherine ' +
          'represents the aristocratic establishment that Austen satirises throughout the novel. Her ' +
          'certainty that birth determines value is the extreme version of Darcy\'s initial pride, and ' +
          'Elizabeth\'s resistance to her demonstrates that personal integrity outweighs social rank. ' +
          'Ironically, Lady Catherine\'s interference hastens the very marriage she tried to prevent, as ' +
          'her report of Elizabeth\'s refusal to promise not to accept Darcy gives him hope.',
        keyQuotes: [
          {
            quote: 'Are the shades of Pemberley to be thus polluted?',
            analysis:
              'Lady Catherine\'s outraged question treats Elizabeth as a contaminant — the word "polluted" ' +
              'implies that her inferior birth would physically taint the Darcy estate. This is the most ' +
              'explicit statement of class prejudice in the novel. For WJEC, the metaphor of pollution ' +
              'reveals how deeply entrenched aristocratic snobbery was: Lady Catherine cannot conceive of ' +
              'merit independent of birth. Elizabeth\'s composed response demolishes this position, asserting ' +
              'that Darcy\'s choice of wife is not Lady Catherine\'s to make.',
          },
        ],
      },
      {
        name: 'Mr Collins',
        description:
          'Mr Collins is the clergyman who stands to inherit the Bennet estate through the entail. He is ' +
          'a figure of sustained comic absurdity — pompous, obsequious, and entirely lacking in self-awareness. ' +
          'His proposal to Elizabeth is one of the novel\'s funniest scenes: he assumes her refusal is merely ' +
          'a feminine formality and lists his reasons for marrying as though presenting a business case, with ' +
          'Lady Catherine\'s recommendation as his strongest argument. Collins serves multiple functions in the ' +
          'novel. He embodies the entail that threatens the Bennet women, making the patriarchal system visible ' +
          'and absurd. His servile devotion to Lady Catherine satirises the patronage system that structured ' +
          'Regency social relations. And his marriage to Charlotte provides a foil for the Elizabeth-Darcy ' +
          'match, demonstrating what marriage looks like when it is purely transactional. For WJEC, Collins is ' +
          'useful for AO2 analysis of Austen\'s comic technique — his speeches are masterpieces of unconscious ' +
          'irony — and for AO3 discussions of how the entail system disadvantaged women.',
        keyQuotes: [
          {
            quote: 'You are too hasty, sir. You forget that I have made no answer. Let me do it without further loss of time. Accept my thanks for the compliment you are paying me.',
            analysis:
              'Elizabeth\'s response to Collins\'s proposal is a masterclass in controlled irony. She turns ' +
              'his own formal language against him, matching his pomposity with exaggerated politeness. The ' +
              'phrase "without further loss of time" briskly dismisses his assumption that she would accept. ' +
              'For WJEC AO2, this exchange demonstrates how Austen uses dialogue to reveal character: ' +
              'Elizabeth\'s wit and self-possession contrast sharply with Collins\'s bumbling presumption.',
          },
        ],
      },
    ],

    // ── KEY QUOTES ──────────────────────────────────────────────
    keyQuotes: [
      {
        quote: 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
        speaker: 'Narrator',
        chapter: 'Chapter 1',
        analysis:
          'The novel\'s opening sentence operates on multiple levels. Literally, it states a social ' +
          'assumption of Regency England; ironically, it exposes the mercenary nature of the marriage ' +
          'market — the "truth" is really the projection of anxious mothers. The passive voice ' +
          '("universally acknowledged") gives the statement a mock-authoritative tone. For WJEC AO2, ' +
          'this is the definitive example of Austen\'s irony: the gap between what is said and what is ' +
          'meant establishes the critical, witty perspective that governs the entire novel.',
        themes: ['Marriage and Social Mobility', 'Class, Wealth and Social Status'],
      },
      {
        quote: 'She is tolerable, but not handsome enough to tempt me; and I am in no humour at present to give consequence to young ladies who are slighted by other men.',
        speaker: 'Mr Darcy',
        chapter: 'Chapter 3',
        analysis:
          'Darcy\'s dismissal of Elizabeth at the Meryton ball is the inciting incident of the plot. ' +
          '"Tolerable" is deliberately insulting — it acknowledges Elizabeth\'s attractiveness only to ' +
          'dismiss it as insufficient. The phrase "give consequence to" reveals Darcy\'s assumption that ' +
          'his attention confers value on women, betraying both class arrogance and gender condescension. ' +
          'For WJEC, this quote fuels Elizabeth\'s prejudice for half the novel and creates the dramatic ' +
          'irony of watching Darcy fall for the woman he publicly disdained.',
        themes: ['Pride and Prejudice (as Character Flaws)', 'Class, Wealth and Social Status'],
      },
      {
        quote: 'In vain I have struggled. It will not do. My feelings will not be repressed.',
        speaker: 'Mr Darcy',
        chapter: 'Chapter 34',
        analysis:
          'The opening of Darcy\'s first proposal reveals a man at war with himself. "In vain" and ' +
          '"struggled" frame love as a battle against his own better judgement, while "repressed" suggests ' +
          'he views his attraction to Elizabeth as something shameful. The proposal fails because Darcy ' +
          'cannot separate his love from his class consciousness. For WJEC AO2, the syntax — short, tense ' +
          'clauses — mirrors Darcy\'s agitation, and the progression from "struggled" to "will not be ' +
          'repressed" shows emotion overpowering reason.',
        themes: ['Pride and Prejudice (as Character Flaws)', 'Marriage and Social Mobility'],
      },
      {
        quote: 'Till this moment I never knew myself.',
        speaker: 'Elizabeth Bennet',
        chapter: 'Chapter 36',
        analysis:
          'Elizabeth\'s moment of anagnorisis — self-recognition — is the novel\'s emotional climax. The ' +
          'simplicity of the sentence contrasts with the enormity of the realisation: everything she believed ' +
          'about Darcy and Wickham was wrong. "Never knew myself" admits that her prejudice was not a rational ' +
          'assessment but a failure of self-awareness. For WJEC, this is the single most important quote for ' +
          'any question about Elizabeth\'s character development, and it connects directly to the novel\'s ' +
          'title — prejudice, once recognised, can be overcome.',
        themes: ['Pride and Prejudice (as Character Flaws)', 'Women\'s Independence and Autonomy'],
      },
      {
        quote: 'I am not romantic, you know; I never was. I ask only a comfortable home.',
        speaker: 'Charlotte Lucas',
        chapter: 'Chapter 22',
        analysis:
          'Charlotte\'s justification for marrying Collins is pragmatic to the point of bleakness. The ' +
          'repetition — "I am not romantic... I never was" — insists on her own clear-sightedness, while ' +
          '"comfortable home" reduces marriage to a property transaction. For WJEC AO3, Charlotte\'s words ' +
          'expose the economic reality that underpinned Regency marriage: without a fortune or exceptional ' +
          'beauty, a woman\'s options were marriage, dependency on relatives, or genteel poverty. Charlotte ' +
          'chooses security over romance because she cannot afford idealism.',
        themes: ['Marriage and Social Mobility', 'Women\'s Independence and Autonomy'],
      },
      {
        quote: 'You must allow me to tell you how ardently I admire and love you.',
        speaker: 'Mr Darcy',
        chapter: 'Chapter 34',
        analysis:
          'The word "ardently" is the emotional core of Darcy\'s first proposal — a word of genuine, even ' +
          'vulnerable, passion. Yet it is framed by "You must allow me," which demands rather than asks, ' +
          'revealing Darcy\'s assumption that his declaration should be received with gratitude. For WJEC ' +
          'AO2, the tension between "ardently" (sincere feeling) and "must" (social entitlement) encapsulates ' +
          'Darcy\'s character at this point: his love is real, but his pride prevents him from expressing it ' +
          'as anything other than a concession.',
        themes: ['Pride and Prejudice (as Character Flaws)', 'Marriage and Social Mobility'],
      },
      {
        quote: 'I have been a selfish being all my life, in practice, though not in principle.',
        speaker: 'Mr Darcy',
        chapter: 'Chapter 58',
        analysis:
          'Darcy\'s confession acknowledges that good principles are meaningless without good practice. The ' +
          'distinction is precise and self-critical: he was raised to think rightly but to apply his values ' +
          'only to his social equals. Elizabeth taught him to extend his moral consideration beyond his own ' +
          'class. For WJEC, this quote proves that Darcy\'s transformation is genuine — he has not merely ' +
          'adopted better manners but has fundamentally re-examined his relationship to class and privilege.',
        themes: ['Pride and Prejudice (as Character Flaws)', 'Class, Wealth and Social Status'],
      },
      {
        quote: 'There are few people whom I really love, and still fewer of whom I think well.',
        speaker: 'Elizabeth Bennet',
        chapter: 'Chapter 24',
        analysis:
          'Elizabeth\'s sharp observation reveals her exacting standards for both love and respect. The ' +
          'parallel structure — "few...still fewer" — creates an ascending scale of rarity that positions ' +
          'Elizabeth as a rigorous judge of character. For WJEC, this quote cuts both ways: it shows ' +
          'Elizabeth\'s intelligence and discrimination, but also her tendency to judge others harshly, which ' +
          'is the very prejudice she must overcome. It is a useful quote for balanced AO1 analysis of her ' +
          'strengths and flaws.',
        themes: ['Pride and Prejudice (as Character Flaws)', 'Women\'s Independence and Autonomy'],
      },
      {
        quote: 'What are men to rocks and mountains?',
        speaker: 'Elizabeth Bennet',
        chapter: 'Chapter 27',
        analysis:
          'Elizabeth\'s exclamation before visiting the Lake District seems lighthearted, but it carries ' +
          'thematic weight. The comparison elevates nature above human society, echoing Romantic values while ' +
          'also revealing Elizabeth\'s desire to escape the marriage anxieties that dominate her world. For ' +
          'WJEC AO3, this connects to the Romantic context: even Austen\'s resolutely social novel ' +
          'acknowledges the Romantic impulse to find meaning in the natural world rather than in human ' +
          'institutions.',
        themes: ['Women\'s Independence and Autonomy', 'Class, Wealth and Social Status'],
      },
      {
        quote: 'For what do we live, but to make sport for our neighbours, and laugh at them in our turn?',
        speaker: 'Mr Bennet',
        chapter: 'Chapter 57',
        analysis:
          'Mr Bennet\'s philosophy encapsulates both his charm and his failure. The balanced clause — ' +
          '"make sport...laugh at them" — presents social life as a game of mutual mockery, revealing a man ' +
          'who has substituted wit for responsibility. For WJEC, this quote supports arguments about ' +
          'Austen\'s critical view of detachment: Mr Bennet is entertaining but his refusal to engage ' +
          'seriously has contributed to Lydia\'s moral recklessness and the family\'s near-disgrace.',
        themes: ['Pride and Prejudice (as Character Flaws)', 'Reputation and Propriety'],
      },
      {
        quote: 'She is lost for ever.',
        speaker: 'Mr Bennet',
        chapter: 'Chapter 46',
        analysis:
          'Mr Bennet\'s devastated response to Lydia\'s elopement reveals the real stakes of female ' +
          'reputation in Regency society. "Lost" implies social death — a woman who has eloped without ' +
          'marriage is ruined, and her family shares the disgrace. The brevity of the sentence conveys ' +
          'genuine anguish from a character who usually hides behind irony. For WJEC AO3, this moment ' +
          'illustrates the double standard of Regency morality: Wickham faces no comparable social ' +
          'penalty, while Lydia and her sisters risk permanent exclusion from respectable society.',
        themes: ['Reputation and Propriety', 'Women\'s Independence and Autonomy'],
      },
      {
        quote: 'Are the shades of Pemberley to be thus polluted?',
        speaker: 'Lady Catherine de Bourgh',
        chapter: 'Chapter 56',
        analysis:
          'Lady Catherine\'s outraged question treats Elizabeth as a contaminant — the word "polluted" ' +
          'implies that her inferior birth would physically corrupt the Darcy estate. The rhetorical ' +
          'question expects agreement but receives none from Elizabeth. For WJEC, this is the novel\'s most ' +
          'explicit articulation of class prejudice and is essential for any essay on social status. The ' +
          'metaphor of pollution reveals how aristocratic ideology naturalised inequality, treating social ' +
          'boundaries as matters of purity and contamination.',
        themes: ['Class, Wealth and Social Status', 'Pride and Prejudice (as Character Flaws)'],
      },
    ],

    // ── CONTEXT POINTS ──────────────────────────────────────────
    contextPoints: [
      'Austen wrote during the Regency period (1811-1820), a time of rigid social hierarchy in which ' +
        'birth, wealth, and connections determined one\'s place in society. The landed gentry — families ' +
        'like the Darcys and Bennets — occupied a specific social tier, and movement between classes ' +
        'was closely scrutinised.',
      'Under the laws of primogeniture and entailment, property passed to the nearest male heir. The ' +
        'Bennet estate is entailed to Mr Collins, meaning that Mrs Bennet\'s anxiety about her daughters\' ' +
        'futures is financially grounded, not merely hysterical.',
      'Coverture law meant that a married woman\'s legal identity was absorbed into her husband\'s — she ' +
        'could not own property, sign contracts, or retain her own earnings. Marriage was therefore not ' +
        'just a romantic choice but a legal and economic transformation.',
      'The Napoleonic Wars (1803-1815) form the background to the novel. The militia officers stationed ' +
        'in Meryton — including Wickham — are there because of the threat of French invasion, connecting ' +
        'the domestic plot to wider national anxiety.',
      'Austen was influenced by the 18th-century novel of manners tradition, particularly Samuel ' +
        'Richardson and Fanny Burney. Her innovation was to combine social satire with psychological ' +
        'depth, using free indirect discourse to blur the boundary between narrator and character.',
      'The novel was originally drafted as "First Impressions" in 1796-97, emphasising its concern with ' +
        'how initial judgements can be misleading. The published title, Pride and Prejudice, shifts the ' +
        'focus to the specific character flaws that obstruct understanding.',
      'Austen published her novels anonymously — "By a Lady" — reflecting the social stigma attached ' +
        'to female authorship in the Regency period. Despite commercial success, she never publicly ' +
        'claimed her work during her lifetime.',
    ],

    // ── EXAM TIPS ───────────────────────────────────────────────
    examTips: [
      'For WJEC Component 2, you will receive an extract and a question asking you to analyse it in ' +
        'relation to the whole text. Divide your time: roughly one-third on close analysis of the extract ' +
        '(AO2: language, structure, form) and two-thirds on the wider text (AO1: argument and ' +
        'interpretation; AO3: context).',
      'Austen\'s irony is your most powerful AO2 tool. Always consider the gap between what characters ' +
        'say and what Austen means — the opening sentence, Lady Catherine\'s pronouncements, and Mr ' +
        'Collins\'s speeches all reward ironic reading.',
      'Integrate context (AO3) into your analysis rather than bolting it on. Instead of "In Regency ' +
        'England, women could not own property," write: "Charlotte\'s acceptance of Collins reflects the ' +
        'economic reality of coverture law, which left unmarried women with few routes to financial security."',
      'For questions about marriage, always discuss at least three different marriages (e.g., ' +
        'Elizabeth/Darcy, Charlotte/Collins, Lydia/Wickham) to show breadth of knowledge and the ability ' +
        'to compare Austen\'s contrasting models.',
      'Free indirect discourse is Austen\'s signature technique. If you can identify moments where the ' +
        'narrator\'s voice blends with a character\'s thoughts — and explain the effect — you will access ' +
        'the top mark bands for AO2.',
      'Do not reduce Austen to a simple romance writer. WJEC examiners reward responses that engage ' +
        'with the novel\'s social criticism: its examination of class, gender, money, and the marriage ' +
        'market. The love story is the vehicle, not the destination.',
      'Plan your essay before writing. A clear structure — introduction with thesis, three to four ' +
        'developed paragraphs, conclusion — will always outperform a longer, unstructured response. Each ' +
        'paragraph should make one clear argument, supported by evidence and linked to the question.',
    ],

    // ── SAMPLE QUESTIONS ────────────────────────────────────────
    sampleQuestions: [
      {
        question:
          'How does Austen present the importance of first impressions in Pride and Prejudice? ' +
          'You should refer to the extract and the novel as a whole.',
        planPoints: [
          'Extract analysis: close reading of language — how characters judge each other based on ' +
            'appearance, manner, and social status in the given passage.',
          'Darcy\'s first impression at the Meryton ball: "tolerable, but not handsome enough" — how ' +
            'this shapes Elizabeth\'s prejudice for half the novel.',
          'Wickham\'s charming first impression versus his true character — Austen shows that pleasing ' +
            'manners can be more deceptive than cold reserve.',
          'Elizabeth\'s moment of self-recognition: "Till this moment I never knew myself" — the ' +
            'admission that her first impressions were wrong.',
          'The role of Darcy\'s letter as the instrument that corrects first impressions and enables ' +
            'both characters to see clearly.',
          'Context: the original title "First Impressions" and the Regency social world in which brief ' +
            'encounters at balls and assemblies determined reputations.',
        ],
      },
      {
        question:
          'How does Austen present the theme of marriage in Pride and Prejudice?',
        planPoints: [
          'The opening sentence as a thesis statement about the marriage market — ironic commentary on ' +
            'social expectations.',
          'Charlotte and Collins: marriage as economic pragmatism — "I ask only a comfortable home."',
          'Lydia and Wickham: marriage as social rescue — passionate but reckless, with no foundation ' +
            'of respect or understanding.',
          'Mr and Mrs Bennet: marriage as a cautionary tale — intellectual mismatch leading to ' +
            'dysfunction.',
          'Elizabeth and Darcy: marriage as moral partnership — mutual growth, respect, and genuine ' +
            'affection.',
          'Context: entailment, coverture, and the limited options available to women; the tension ' +
            'between romantic idealism and economic reality in Regency England.',
        ],
      },
      {
        question:
          'How does Austen use the character of Elizabeth Bennet to challenge social conventions?',
        planPoints: [
          'Elizabeth\'s refusal of Mr Collins — rejecting financial security because she will not marry ' +
            'without respect.',
          'Her refusal of Darcy\'s first proposal — rejecting wealth and status because his manner ' +
            'offends her principles.',
          'Her defiance of Lady Catherine — refusing to be intimidated by aristocratic authority: "My ' +
            'courage always rises at every attempt to intimidate me."',
          'Her independence of judgement throughout the novel — she thinks for herself rather than ' +
            'deferring to social consensus.',
          'Context: Regency expectations of female compliance; the conduct-book tradition; Austen\'s ' +
            'own position as an unmarried woman who chose not to marry for convenience.',
        ],
      },
      {
        question:
          'How does Austen present ideas about class and social status in Pride and Prejudice?',
        planPoints: [
          'Darcy\'s initial class-based pride and his journey toward recognising merit independent of ' +
            'birth.',
          'Miss Bingley\'s snobbery — the newly wealthy policing class boundaries more aggressively ' +
            'than the established gentry.',
          'Lady Catherine as the aristocratic establishment — "Are the shades of Pemberley to be ' +
            'thus polluted?"',
          'The Gardiners as Austen\'s argument that class does not determine character — respectable, ' +
            'dignified, and morally superior to many above them in rank.',
          'The entailment of the Bennet estate — how legal structures reinforced class inequality and ' +
            'disadvantaged women.',
          'Context: the rigidity of Regency class hierarchy; the rise of the commercial and industrial ' +
            'classes; Austen\'s nuanced position within the gentry.',
        ],
      },
    ],

    // ── GRADE BOOST ─────────────────────────────────────────────
    gradeBoost: {
      grade5:
        'At Grade 5, you need to show clear understanding of the text with relevant quotations and ' +
        'some awareness of Austen\'s methods. Every paragraph should have a point, a quotation, and an ' +
        'explanation. Make sure you can explain the main character arcs (Elizabeth overcoming prejudice, ' +
        'Darcy overcoming pride) and at least two context points (e.g., entailment, the marriage market). ' +
        'Use the characters\' full names and refer to Austen as the author who shapes meaning, not just ' +
        'a storyteller.',
      grade7:
        'At Grade 7, you need thoughtful, developed analysis that explores how Austen creates meaning ' +
        'through language, structure, and narrative technique. Identify Austen\'s irony — the gap between ' +
        'surface meaning and intended meaning — and explain its effect. Compare different characters\' ' +
        'experiences of the same theme (e.g., Elizabeth\'s and Charlotte\'s different approaches to ' +
        'marriage). Integrate context into your analysis: don\'t just state facts about Regency England, ' +
        'but show how they illuminate the text. Begin to consider alternative interpretations.',
      grade9:
        'At Grade 9, you need a conceptualised, exploratory response that treats the novel as a crafted ' +
        'literary artefact. Engage with Austen\'s narrative technique — free indirect discourse, dramatic ' +
        'irony, structural parallels — and show how these shape the reader\'s moral judgement. Develop a ' +
        'thesis that you sustain across the essay: for example, "Austen presents marriage as a compromise ' +
        'between romantic idealism and economic pragmatism, and reserves her sharpest criticism for ' +
        'characters who refuse to acknowledge this tension." Use precise critical vocabulary and weave ' +
        'context seamlessly. Your response should demonstrate independent thinking and an awareness of ' +
        'the novel\'s complexities and ambiguities.',
    },
  },
];

export default frankPride;
