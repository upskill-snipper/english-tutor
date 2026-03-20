// ═══════════════════════════════════════════════════════════════════════════
// WJEC Eduqas GCSE English Literature — Expanded Set Text Content
// Spec code: C720U  |  Board: WJEC Eduqas
// Paper 1 (formerly Component 1): Shakespeare and Poetry
// Paper 2 (formerly Component 2): Post-1914 Prose/Drama & 19th-Century Prose
// ═══════════════════════════════════════════════════════════════════════════

const wjecLitTextsExpanded = [

  // ─────────────────────────────────────────────────────────────────────────
  //  1. MACBETH — Paper 1, Shakespeare
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'macbeth-wjec',
    title: 'Macbeth',
    author: 'William Shakespeare',
    board: 'wjec',
    paper: 'paper1',
    type: 'shakespeare',

    themes: [
      'Ambition and its consequences',
      'The supernatural and fate',
      'Guilt and conscience',
      'Appearance vs reality / equivocation',
      'Masculinity and gender roles',
      'Kingship and tyranny',
      'The natural order and the Great Chain of Being',
      'Violence and its psychological cost',
      'Loyalty and betrayal',
    ],

    characters: [
      {
        name: 'Macbeth',
        description:
          'A Scottish general whose bravery in battle earns him the title Thane of Cawdor. The witches\' prophecy ignites his latent ambition, and Lady Macbeth\'s manipulation pushes him to commit regicide. Once crowned, he becomes increasingly tyrannical and paranoid, ordering further murders to secure his throne. His trajectory is a textbook tragic arc: a noble figure undone by his fatal flaw ("vaulting ambition"). By Act 5, he is isolated, nihilistic, and fatalistic — yet Shakespeare preserves a sliver of tragic dignity in his refusal to surrender.',
        keyQuotes: [
          {
            quote: 'Stars, hide your fires; / Let not light see my black and deep desires.',
            analysis:
              'The imperative "hide" shows Macbeth already concealing murderous thoughts. The juxtaposition of "light" and "black" introduces the darkness motif that pervades the play. He is aware that his desires are shameful, yet he does not reject them — he merely hides them.',
          },
          {
            quote: 'I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o\'erleaps itself / And falls on th\'other.',
            analysis:
              'The horse-riding metaphor reveals Macbeth\'s self-awareness: ambition is his only motivation, and he recognises it may destroy him. The image of overleaping and falling foreshadows his downfall. This is his hamartia explicitly stated.',
          },
          {
            quote: 'Will all great Neptune\'s ocean wash this blood / Clean from my hand?',
            analysis:
              'The hyperbolic reference to Neptune\'s entire ocean signals that Macbeth\'s guilt is cosmic in scale. Blood symbolises guilt throughout the play, and the rhetorical question suggests he already knows the answer: nothing can undo the murder.',
          },
          {
            quote: 'Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day.',
            analysis:
              'The repetition and monosyllabic rhythm create a flat, exhausted tone. Life has become meaningless to Macbeth — a "tale / Told by an idiot, full of sound and fury, / Signifying nothing." This nihilistic speech shows the spiritual emptiness that tyranny has produced.',
          },
        ],
      },
      {
        name: 'Lady Macbeth',
        description:
          'Macbeth\'s wife and the driving force behind Duncan\'s murder. She calls upon dark spirits to "unsex" her, suppressing her femininity to become ruthless enough to push Macbeth into action. She is pragmatic, manipulative, and psychologically astute — attacking Macbeth\'s sense of manhood to overcome his hesitation. However, her composure fractures across the play: by Act 5, she sleepwalks, obsessively washing imaginary blood from her hands. Her descent into madness and eventual suicide demonstrate that guilt cannot be suppressed indefinitely.',
        keyQuotes: [
          {
            quote: 'Come, you spirits / That tend on mortal thoughts, unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty.',
            analysis:
              'The invocation to dark spirits is transgressive: Lady Macbeth asks to have her femininity — associated with compassion and nurture — stripped away. "Unsex" is violent and deliberate, suggesting ambition and femininity are incompatible in this world. A Jacobean audience would find this deeply shocking.',
          },
          {
            quote: 'Look like th\'innocent flower, / But be the serpent under\'t.',
            analysis:
              'The biblical allusion to the serpent in Eden links the murder plot to original sin. Lady Macbeth instructs Macbeth in deception, reinforcing the theme of appearance vs reality. The imperative tone shows her dominance in the relationship at this point.',
          },
          {
            quote: 'Out, damned spot! Out, I say!',
            analysis:
              'The imaginary bloodstain that Lady Macbeth cannot wash away in her sleepwalking scene is the physical manifestation of inescapable guilt. This directly contradicts her earlier claim that "a little water clears us of this deed," creating powerful structural irony across the play.',
          },
        ],
      },
      {
        name: 'Banquo',
        description:
          'Macbeth\'s fellow general and a dramatic foil. He receives a prophecy too — that his descendants will be kings — but responds with caution rather than ambition. His moral restraint highlights Macbeth\'s lack of it. After his murder on Macbeth\'s orders, his ghost haunts the banquet scene, symbolising Macbeth\'s guilt and the impossibility of silencing conscience through violence.',
        keyQuotes: [
          {
            quote: 'Oftentimes, to win us to our harm, / The instruments of darkness tell us truths.',
            analysis:
              'Banquo recognises the danger of the witches\' prophecy where Macbeth does not. The phrase "instruments of darkness" frames the witches as agents of evil who use truth as a weapon of manipulation. This makes Banquo a voice of reason and moral clarity.',
          },
          {
            quote: 'Thou hast it now: King, Cawdor, Glamis, all, / As the weird women promised, and I fear / Thou played\'st most foully for\'t.',
            analysis:
              'Banquo suspects Macbeth of murder but does not act on his suspicion — a morally ambiguous position. The adverb "foully" echoes the witches\' "fair is foul," linking Macbeth\'s rise to the play\'s central moral inversion.',
          },
        ],
      },
      {
        name: 'The Witches (Weird Sisters)',
        description:
          'Three supernatural figures who deliver the prophecy that sets the plot in motion. They are agents of chaos whose equivocal language — "fair is foul, and foul is fair" — collapses moral certainty. Crucially, they prophesy but never command: the question of whether Macbeth acts from fate or free will is deliberately left unresolved. In the Jacobean context, witchcraft was a genuine fear, and King James I had written a treatise on demonology.',
        keyQuotes: [
          {
            quote: 'Fair is foul, and foul is fair.',
            analysis:
              'This paradox establishes the theme of equivocation — the confusion of good and evil, appearance and reality — that runs throughout the play. It signals that the natural moral order has been disrupted from the very first scene.',
          },
          {
            quote: 'None of woman born / Shall harm Macbeth.',
            analysis:
              'A deliberately equivocal prophecy designed to give Macbeth a false sense of invincibility. The loophole — Macduff was "from his mother\'s womb / Untimely ripped" (born by Caesarean section) — demonstrates how the witches use literal truth to deceive.',
          },
        ],
      },
      {
        name: 'Macduff',
        description:
          'The Thane of Fife who becomes the moral avenger of the play. His discovery of Duncan\'s body, his flight to England, and the brutal murder of his family by Macbeth\'s forces provide the motivation for the final confrontation. His grief — "He has no children" — is among the most raw and human moments in the play. He ultimately kills Macbeth, fulfilling the witches\' prophecy and restoring order.',
        keyQuotes: [
          {
            quote: 'O horror, horror, horror! / Tongue nor heart cannot conceive nor name thee!',
            analysis:
              'Macduff\'s reaction to Duncan\'s murder is characterised by genuine, overwhelming emotion — a contrast to Macbeth\'s performed grief. The triple repetition of "horror" and the claim that language itself fails ("tongue nor heart cannot conceive") signal the magnitude of the crime.',
          },
          {
            quote: 'He has no children. All my pretty ones? / Did you say all?',
            analysis:
              'Macduff\'s grief at learning of his family\'s murder is devastating in its simplicity. "All my pretty ones" is tender and intimate, a father\'s language stripped of rhetoric. The repetition of "all" shows disbelief. Shakespeare uses understatement to create the play\'s most emotionally affecting moment.',
          },
        ],
      },
    ],

    keyQuotes: [
      {
        quote: 'Fair is foul, and foul is fair.',
        speaker: 'The Witches',
        act: 1,
        scene: 1,
        analysis: 'Establishes the central paradox of the play: moral categories are collapsed and nothing can be trusted at face value.',
        themes: ['Appearance vs reality', 'The supernatural'],
      },
      {
        quote: 'Yet do I fear thy nature; / It is too full o\'th\' milk of human kindness.',
        speaker: 'Lady Macbeth',
        act: 1,
        scene: 5,
        analysis: 'Lady Macbeth uses the maternal image of breastmilk to frame Macbeth\'s compassion as weakness, revealing how she equates kindness with impotence and cruelty with strength.',
        themes: ['Masculinity and gender roles', 'Ambition'],
      },
      {
        quote: 'Is this a dagger which I see before me, / The handle toward my hand?',
        speaker: 'Macbeth',
        act: 2,
        scene: 1,
        analysis: 'The hallucinatory dagger symbolises Macbeth\'s fractured psyche. The handle pointing toward his hand suggests fate is guiding him, yet the hallucination may also be a product of guilty conscience.',
        themes: ['Guilt and conscience', 'The supernatural'],
      },
      {
        quote: 'Will all great Neptune\'s ocean wash this blood / Clean from my hand?',
        speaker: 'Macbeth',
        act: 2,
        scene: 2,
        analysis: 'Macbeth\'s guilt is presented as infinite — even an ocean cannot cleanse it. Blood becomes the play\'s dominant symbol of irreversible moral corruption.',
        themes: ['Guilt and conscience', 'Violence'],
      },
      {
        quote: 'Sleep no more! Macbeth does murder sleep.',
        speaker: 'A voice (heard by Macbeth)',
        act: 2,
        scene: 2,
        analysis: 'Sleep symbolises innocence and peace of mind. By murdering Duncan in his sleep, Macbeth has destroyed his own capacity for rest — a prophecy fulfilled by his escalating insomnia and paranoia.',
        themes: ['Guilt and conscience', 'The natural order'],
      },
      {
        quote: 'Look like th\'innocent flower, / But be the serpent under\'t.',
        speaker: 'Lady Macbeth',
        act: 1,
        scene: 5,
        analysis: 'The serpent allusion links the murder plot to Satan and original sin. Lady Macbeth instructs Macbeth in the art of deception, embodying the play\'s theme of equivocation.',
        themes: ['Appearance vs reality', 'Loyalty and betrayal'],
      },
      {
        quote: 'Out, damned spot! Out, I say!',
        speaker: 'Lady Macbeth',
        act: 5,
        scene: 1,
        analysis: 'The imaginary blood that Lady Macbeth cannot wash away represents guilt that has penetrated to her unconscious mind. It is the devastating payoff to her earlier dismissal: "A little water clears us of this deed."',
        themes: ['Guilt and conscience', 'Masculinity and gender roles'],
      },
      {
        quote: 'Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day.',
        speaker: 'Macbeth',
        act: 5,
        scene: 5,
        analysis: 'Macbeth\'s nihilistic meditation on the meaninglessness of life. The repetition and slow rhythm enact the tedium he describes. Life is reduced to "a tale / Told by an idiot, full of sound and fury, / Signifying nothing."',
        themes: ['Ambition and its consequences', 'Kingship and tyranny'],
      },
    ],

    contextPoints: [
      'Written c. 1606 during the reign of King James I, who had a keen interest in witchcraft and wrote Daemonologie (1597). Shakespeare flatters James by dramatising the dangers of regicide and the legitimacy of the Stuart line (Banquo\'s descendants).',
      'The Gunpowder Plot of 1605 — an attempt to assassinate James I — made themes of treason, equivocation, and regicide extremely topical.',
      'Jacobean audiences believed in the Divine Right of Kings: the monarch was God\'s appointed representative on earth. Killing a king was not merely treason but a sin against the cosmic order.',
      'The Great Chain of Being was a hierarchical model of the universe placing God at the top, then angels, then the monarch, then humans, animals, and plants. Disrupting this chain (through regicide) was believed to cause disorder in nature itself.',
      'Witchcraft was widely feared and legally prosecuted. The 1604 Witchcraft Act made it a capital offence. Shakespeare\'s witches would have been genuinely terrifying to the original audience.',
      'Gender roles were rigidly defined: women were expected to be obedient, nurturing, and passive. Lady Macbeth\'s "unsex me here" soliloquy transgresses every expectation, making her both fascinating and horrifying to a Jacobean audience.',
    ],

    examTips: [
      'For Part (a) extract questions, always analyse HOW Shakespeare creates effects — do not retell the plot. Focus on language techniques, dramatic devices, and audience response.',
      'For Part (b) whole-text essays, plan 4-5 key moments from across the play. Show range by selecting from different acts rather than clustering in one section.',
      'Always embed quotations into your sentences rather than bolting them on. Write: Macbeth\'s "vaulting ambition" drives him to regicide — NOT: Macbeth says "vaulting ambition."',
      'Link your analysis to AO3 context naturally. Do not bolt on a context paragraph at the end — weave it into your analysis. For example: "A Jacobean audience, who believed in the Divine Right of Kings, would view Duncan\'s murder as an assault on God\'s ordained order."',
      'Track how themes develop across the play. Guilt, for instance, manifests differently in Macbeth (immediate hallucinations) and Lady Macbeth (delayed sleepwalking). Examiners reward students who trace these structural patterns.',
      'Avoid calling Lady Macbeth "evil." Top-band responses explore her complexity: she must psychologically destroy herself to act, and her later guilt shows the "unsexing" was never complete.',
    ],

    sampleQuestions: [
      {
        question:
          'How does Shakespeare present the theme of guilt in Macbeth?',
        planPoints: [
          'The dagger hallucination (Act 2.1) — guilt manifests before the murder is even committed, suggesting Macbeth\'s conscience is already fractured.',
          '"Will all great Neptune\'s ocean wash this blood clean from my hand?" (Act 2.2) — guilt presented as infinite and permanent through hyperbole.',
          'Banquo\'s ghost at the banquet (Act 3.4) — guilt made visible as a supernatural disruption; Macbeth cannot escape conscience even in public.',
          'Lady Macbeth\'s sleepwalking and "Out, damned spot!" (Act 5.1) — guilt surfaces involuntarily, proving that her earlier composure was self-deception.',
          'Context: regicide was a sin against God (Divine Right of Kings), so guilt is both psychological and spiritual — it disrupts the natural order.',
        ],
      },
      {
        question:
          'How does Shakespeare present the relationship between Macbeth and Lady Macbeth?',
        planPoints: [
          'Act 1: Lady Macbeth is dominant — she challenges his manhood ("When you durst do it, then you were a man") and controls the murder plan.',
          'Act 2: Partnership under strain — she is composed ("A little water clears us of this deed") while he is falling apart, but she must still manage him.',
          'Act 3: Growing distance — Macbeth plans Banquo\'s murder without consulting her ("Be innocent of the knowledge, dearest chuck"), reversing the power dynamic.',
          'Act 5: Total isolation — Macbeth responds to her death with nihilistic detachment ("She should have died hereafter"), showing the relationship has been destroyed by their crimes.',
          'Structural arc: the relationship inverts. Lady Macbeth begins strong and ends broken; Macbeth begins hesitant and ends hardened. Their trajectories mirror and oppose each other.',
        ],
      },
      {
        question:
          'How does Shakespeare use the supernatural to create dramatic effects in Macbeth?',
        planPoints: [
          'The witches\' prophecy (Act 1.3) sets the plot in motion but raises the question of fate vs free will — they predict but never command.',
          'The floating dagger (Act 2.1) blurs the line between reality and hallucination, externalising Macbeth\'s psychological torment.',
          'Banquo\'s ghost (Act 3.4) is visible only to Macbeth, creating dramatic irony and showing guilt as an inescapable supernatural force.',
          'The apparitions (Act 4.1) deliver equivocal prophecies that give Macbeth false confidence and hasten his downfall.',
          'Context: James I\'s interest in witchcraft (Daemonologie) and the 1604 Witchcraft Act make the supernatural elements politically charged and genuinely frightening for the original audience.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  2. ROMEO AND JULIET — Paper 1, Shakespeare
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'romeo-juliet-wjec',
    title: 'Romeo and Juliet',
    author: 'William Shakespeare',
    board: 'wjec',
    paper: 'paper1',
    type: 'shakespeare',

    themes: [
      'Love in its many forms (romantic, familial, unrequited)',
      'Fate and destiny',
      'Family conflict and honour',
      'Youth vs age / impulsiveness vs caution',
      'Violence and masculinity',
      'Light and darkness',
      'Time and haste',
      'Death as the consequence of hatred',
    ],

    characters: [
      {
        name: 'Romeo',
        description:
          'The son of Lord Montague, Romeo begins the play as a Petrarchan lover infatuated with Rosaline, speaking in elaborate conceits and oxymorons. His love for Juliet transforms his language and emotional depth, but his impulsiveness proves fatal: he kills Tybalt in a rage, rushes to buy poison, and dies moments before Juliet wakes. Shakespeare presents Romeo as both deeply passionate and dangerously rash.',
        keyQuotes: [
          {
            quote: 'But soft, what light through yonder window breaks? / It is the east, and Juliet is the sun.',
            analysis:
              'The light/dark imagery elevates Juliet to a celestial force. The metaphor "Juliet is the sun" suggests she brings warmth, life, and illumination to Romeo\'s world. The tender opening "But soft" signals a shift from public bravado to private vulnerability.',
          },
          {
            quote: 'Then I defy you, stars!',
            analysis:
              'Romeo\'s defiance of fate after hearing of Juliet\'s supposed death is both heroic and tragic. It encapsulates the play\'s central tension: the lovers believe they can transcend destiny, but their defiance only hastens the catastrophe the Prologue has already foretold.',
          },
          {
            quote: 'O, I am fortune\'s fool!',
            analysis:
              'Spoken after killing Tybalt, this line reveals Romeo\'s awareness that fate is working against him. The alliterative "fortune\'s fool" links destiny and foolishness, suggesting that the lovers are both victims of circumstance and agents of their own destruction.',
          },
        ],
      },
      {
        name: 'Juliet',
        description:
          'Daughter of Lord Capulet, Juliet is only thirteen but demonstrates remarkable maturity, intelligence, and moral courage. She questions social conventions ("What\'s in a name?"), defies her father, and ultimately chooses death over a life without Romeo. Shakespeare gives her some of the play\'s most sophisticated language, challenging Elizabethan assumptions about female passivity. Her journey from obedient daughter to autonomous woman is one of the play\'s most compelling arcs.',
        keyQuotes: [
          {
            quote: 'What\'s in a name? That which we call a rose / By any other name would smell as sweet.',
            analysis:
              'Juliet\'s philosophical challenge to the arbitrariness of names — and by extension, the feud itself — demonstrates her intellectual independence. She recognises that "Montague" is a label, not an identity, and that the hatred between the families is constructed, not natural.',
          },
          {
            quote: 'My only love sprung from my only hate! / Too early seen unknown, and known too late!',
            analysis:
              'The antithesis of "love" and "hate" encapsulates the play\'s central conflict. The exclamatory tone conveys shock and despair. Juliet recognises the tragic irony immediately — she is more perceptive than Romeo about the impossibility of their situation.',
          },
          {
            quote: 'Give me my Romeo; and, when I shall die, / Take him and cut him out in little stars.',
            analysis:
              'This beautiful image fuses love, death, and the celestial imagery that runs through the play. "Cut him out in little stars" transforms Romeo into something eternal and luminous, foreshadowing the way their deaths ultimately immortalise their love.',
          },
        ],
      },
      {
        name: 'Tybalt',
        description:
          'Juliet\'s cousin and the embodiment of the feud\'s aggression. Known as the "Prince of Cats" for his fighting skill, Tybalt is honour-driven and quick to violence. His killing of Mercutio and subsequent death at Romeo\'s hands is the play\'s turning point, transforming a comedy of young love into a tragedy. He represents the toxic masculinity and rigid honour codes that destroy the lovers.',
        keyQuotes: [
          {
            quote: 'What, drawn, and talk of peace? I hate the word, / As I hate hell, all Montagues, and thee.',
            analysis:
              'Tybalt\'s absolute rejection of peace establishes him as the agent of conflict. The tricolon "hell, all Montagues, and thee" places the Montagues alongside damnation, showing how the feud has become an ideology rather than a rational grievance.',
          },
        ],
      },
      {
        name: 'Mercutio',
        description:
          'Romeo\'s witty, irreverent friend who belongs to neither family. His Queen Mab speech reveals a cynical, imaginative mind, and his death — caused by Romeo\'s attempt to make peace — is the play\'s pivotal moment. His dying curse, "A plague o\' both your houses," condemns both families and echoes across the rest of the play.',
        keyQuotes: [
          {
            quote: 'A plague o\' both your houses! / They have made worms\' meat of me.',
            analysis:
              'Mercutio\'s curse implicates both families in his death and, by extension, in all the deaths that follow. The visceral "worms\' meat" reduces his vibrant personality to a decaying corpse, emphasising the waste caused by the feud.',
          },
        ],
      },
      {
        name: 'Lord Capulet',
        description:
          'Juliet\'s father, who shifts from indulgent parent to tyrannical patriarch. He initially tells Paris that Juliet must consent to marriage, but after Tybalt\'s death he demands her obedience, threatening to disown her. His fury — "Hang, beg, starve, die in the streets" — reveals the patriarchal power that traps Juliet and drives her toward desperate measures.',
        keyQuotes: [
          {
            quote: 'Hang, beg, starve, die in the streets, / For, by my soul, I\'ll ne\'er acknowledge thee.',
            analysis:
              'The four brutal imperatives reveal the extent of Capulet\'s patriarchal power and rage. He reduces Juliet\'s future to a list of punishments, treating her as property rather than a person. This speech is the moment where Juliet realises she has no socially acceptable escape.',
          },
        ],
      },
    ],

    keyQuotes: [
      {
        quote: 'Two households, both alike in dignity, / In fair Verona, where we lay our scene, / From ancient grudge break to new mutiny, / Where civil blood makes civil hands unclean.',
        speaker: 'Chorus (Prologue)',
        act: 0,
        scene: 0,
        analysis: 'The Prologue tells the audience the ending before the play begins, establishing the sense of inescapable fate. "Star-crossed lovers" frames love as doomed by cosmic forces beyond human control.',
        themes: ['Fate and destiny', 'Family conflict'],
      },
      {
        quote: 'But soft, what light through yonder window breaks? / It is the east, and Juliet is the sun.',
        speaker: 'Romeo',
        act: 2,
        scene: 2,
        analysis: 'The balcony scene\'s opening metaphor associates Juliet with the sun — light, warmth, and the promise of a new day. This celestial imagery elevates their love beyond the earthly feud.',
        themes: ['Love', 'Light and darkness'],
      },
      {
        quote: 'These violent delights have violent ends.',
        speaker: 'Friar Lawrence',
        act: 2,
        scene: 6,
        analysis: 'The Friar\'s warning about excessive passion foreshadows the lovers\' deaths. The repetition of "violent" links the intensity of love to the intensity of destruction — the play\'s tragic logic in a single line.',
        themes: ['Love', 'Fate and destiny', 'Violence'],
      },
      {
        quote: 'A plague o\' both your houses!',
        speaker: 'Mercutio',
        act: 3,
        scene: 1,
        analysis: 'Mercutio\'s dying curse condemns both families for the senseless violence of the feud. It marks the play\'s tonal shift from romantic comedy to tragedy.',
        themes: ['Family conflict', 'Violence and masculinity', 'Death'],
      },
      {
        quote: 'O, I am fortune\'s fool!',
        speaker: 'Romeo',
        act: 3,
        scene: 1,
        analysis: 'Romeo recognises that he is fate\'s plaything. The alliterative phrase links fortune (fate) with foolishness, suggesting the lovers are both destined and responsible for their ruin.',
        themes: ['Fate and destiny', 'Youth vs age'],
      },
      {
        quote: 'Then I defy you, stars!',
        speaker: 'Romeo',
        act: 5,
        scene: 1,
        analysis: 'Romeo\'s attempt to resist fate is both courageous and futile. His defiance only accelerates the catastrophe, reinforcing the Prologue\'s message that the lovers are "star-crossed."',
        themes: ['Fate and destiny', 'Impulsiveness'],
      },
    ],

    contextPoints: [
      'Written in the mid-1590s during the Elizabethan era. Arranged marriages were the norm among wealthy families; daughters were effectively property of their fathers. Juliet\'s defiance of her father would have been deeply transgressive.',
      'The Prologue\'s reference to "star-crossed lovers" reflects the Elizabethan belief in astrology and the idea that human destiny was governed by the stars.',
      'Honour culture: duelling and violence over family honour were genuine social problems in Elizabethan England. The Prince\'s edicts against fighting reflect real-world concerns about public disorder.',
      'The play draws on the Italian tradition of tragic love stories (particularly Arthur Brooke\'s poem The Tragicall Historye of Romeus and Juliet, 1562). Shakespeare compresses the timeline from months to days, intensifying the sense of haste and fate.',
      'Patriarchal society: Elizabethan women had very limited legal rights. Juliet\'s situation — forced to choose between an unwanted marriage and disobedience — reflects the genuine powerlessness of women in this period.',
      'The play was performed in open-air theatres in daylight, so Shakespeare uses language (not lighting) to create the night-time atmosphere of the balcony scene and the tomb. The light/dark imagery does double dramatic duty.',
    ],

    examTips: [
      'The Prologue is a gift for discussing fate vs free will. Use it as a structural framing device: the audience knows the ending, which creates dramatic irony throughout.',
      'Track the light/dark motif across the play — it appears in the balcony scene, the aubade (dawn song in Act 3.5), and the tomb scene. Examiners love to see students trace patterns.',
      'Avoid saying Romeo and Juliet are simply "in love." Analyse the type and quality of their love: how does it differ from Romeo\'s infatuation with Rosaline? How does Juliet\'s love show greater maturity than Romeo\'s?',
      'When writing about context, connect it to the text — don\'t bolt on a paragraph about Elizabethan marriage. For example: "Capulet\'s command to Juliet reflects the patriarchal authority that Elizabethan fathers held over their daughters\' lives and marriages."',
      'The play\'s timeline is crucial. Everything happens in about four days. This compression creates urgency and reinforces the theme of haste — "too rash, too unadvised, too sudden."',
    ],

    sampleQuestions: [
      {
        question:
          'How does Shakespeare present the theme of fate in Romeo and Juliet?',
        planPoints: [
          'The Prologue: "star-crossed lovers" and "death-marked love" establish fate as inescapable from the very start, creating dramatic irony.',
          'Romeo\'s premonitions: "my mind misgives / Some consequence yet hanging in the stars" (Act 1.4) — he senses doom before meeting Juliet.',
          '"O, I am fortune\'s fool!" (Act 3.1) — Romeo recognises fate\'s role after killing Tybalt, the event that seals the tragic outcome.',
          '"Then I defy you, stars!" (Act 5.1) — Romeo\'s defiance of fate paradoxically fulfils it, as his rush to die beside Juliet leads to the double suicide.',
          'Structural design: near-misses (the delayed letter, Juliet waking seconds too late) create the sense that fate is deliberately cruel.',
        ],
      },
      {
        question:
          'How does Shakespeare present conflict in Romeo and Juliet?',
        planPoints: [
          'The opening brawl (Act 1.1) establishes the feud as endemic — even servants fight. The Prince\'s ultimatum shows authority struggling to contain the violence.',
          'Tybalt embodies the feud\'s aggression: "I hate the word [peace], as I hate hell, all Montagues, and thee." He is the human face of inherited hatred.',
          'Act 3.1 (the deaths of Mercutio and Tybalt) is the turning point. Romeo\'s attempt to make peace fails, showing that individual goodwill cannot overcome structural conflict.',
          'Internal conflict: Juliet\'s soliloquy after Tybalt\'s death — "My husband lives, that Tybalt would have slain" — dramatises the impossible position of loving someone from the enemy family.',
          'Resolution: the lovers\' deaths finally end the feud, but at devastating cost — "All are punished." Shakespeare implies that entrenched hatred can only be overcome through sacrifice.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  3. AN INSPECTOR CALLS — Paper 2, Modern Drama
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'inspector-calls-wjec',
    title: 'An Inspector Calls',
    author: 'J.B. Priestley',
    board: 'wjec',
    paper: 'paper2',
    type: 'modern-drama',

    themes: [
      'Social responsibility and collective guilt',
      'Class and inequality',
      'Generational conflict (young vs old)',
      'Gender and exploitation',
      'Capitalism vs socialism',
      'Appearance vs reality / hypocrisy',
      'Time and consequence',
      'Power and its abuse',
    ],

    characters: [
      {
        name: 'Inspector Goole',
        description:
          'A mysterious figure who arrives at the Birling household to investigate the death of Eva Smith. He systematically reveals each family member\'s role in her destruction. His identity is never confirmed — he may be a real inspector, a supernatural figure, a representation of conscience, or a time-traveller. His name, a homophone of "ghoul," hints at the supernatural. He functions as Priestley\'s mouthpiece for socialist values, delivering the play\'s moral message.',
        keyQuotes: [
          {
            quote: 'We don\'t live alone. We are members of one body. We are responsible for each other.',
            analysis:
              'The Inspector\'s final speech is the ideological heart of the play. "Members of one body" is a biblical allusion (1 Corinthians 12:27), framing social responsibility as a moral and spiritual duty. Priestley uses the Inspector to articulate the socialist vision of collective responsibility that he believed post-war Britain should embrace.',
          },
          {
            quote: 'And if men will not learn that lesson, then they will be taught it in fire and blood and anguish.',
            analysis:
              'This prophetic warning alludes to the two World Wars that the 1945 audience has already lived through. Priestley collapses the play\'s two timelines (set 1912, performed 1945) to argue that the failure to learn social responsibility leads to catastrophic consequences.',
          },
          {
            quote: 'One person and one line of inquiry at a time. Otherwise there\'s a muddle.',
            analysis:
              'The Inspector controls the pace and structure of the revelations. His insistence on order mirrors Priestley\'s dramatic technique — each character\'s guilt is exposed sequentially, building cumulative horror. The Inspector functions both as a character and as a structural device.',
          },
        ],
      },
      {
        name: 'Mr Arthur Birling',
        description:
          'A wealthy industrialist and self-made man who represents capitalist complacency. His speech at the start of the play — dismissing the possibility of war and praising the Titanic as "unsinkable" — is designed to be laughably wrong to the 1945 audience. He fired Eva Smith from his factory for leading a strike for better wages. He is unrepentant to the end, caring more about his knighthood and reputation than a woman\'s death. He embodies everything Priestley opposes.',
        keyQuotes: [
          {
            quote: 'The Titanic — she sails next week — forty-six thousand eight hundred tons — New York in five days — and every luxury — and unsinkable, absolutely unsinkable.',
            analysis:
              'Birling\'s dramatic irony is devastating: the 1945 audience knows the Titanic sank. Priestley uses this to destroy Birling\'s credibility from the outset, showing that his confident pronouncements about the future are dangerously wrong. If he is wrong about the Titanic, he is wrong about everything.',
          },
          {
            quote: 'A man has to mind his own business and look after himself and his own.',
            analysis:
              'Birling articulates the individualist capitalist philosophy that Priestley attacks throughout the play. This statement is the antithesis of the Inspector\'s "we are responsible for each other" — the play is structured as a debate between these two worldviews.',
          },
        ],
      },
      {
        name: 'Sheila Birling',
        description:
          'The Birlings\' daughter, initially presented as a spoiled young woman who had Eva fired from Milwards out of petty jealousy. However, Sheila undergoes the most complete moral transformation in the play. She accepts her guilt immediately, shows genuine remorse, and by the end is the play\'s moral centre alongside the Inspector. She represents the younger generation\'s capacity for change — Priestley\'s hope for post-war Britain.',
        keyQuotes: [
          {
            quote: 'But these girls aren\'t cheap labour — they\'re people.',
            analysis:
              'Sheila\'s recognition that working-class women are human beings with dignity directly challenges her father\'s view of workers as economic units. This line marks the beginning of her moral awakening and aligns her with the Inspector\'s values.',
          },
          {
            quote: 'I behaved badly too. I know I did. I\'m ashamed of it.',
            analysis:
              'Sheila\'s admission of shame, delivered simply and without excuse, contrasts sharply with her parents\' evasions. The directness of "I know I did" shows genuine self-awareness — the quality Priestley most values.',
          },
          {
            quote: 'You\'re pretending everything\'s just as it was before.',
            analysis:
              'Sheila challenges her parents\' attempt to return to comfortable denial after the Inspector leaves. She recognises that moral knowledge, once gained, cannot be unlearned — a key message of the play.',
          },
        ],
      },
      {
        name: 'Eric Birling',
        description:
          'The Birlings\' son, an alcoholic who got Eva Smith pregnant and stole money from his father\'s firm to support her. Like Sheila, Eric accepts his guilt and is changed by the Inspector\'s visit. His alcoholism and emotional outbursts hint at dysfunction beneath the Birlings\' respectable surface. He represents the younger generation\'s ability to learn and change.',
        keyQuotes: [
          {
            quote: 'You\'re not the kind of father a chap could go to when he\'s in trouble.',
            analysis:
              'Eric\'s accusation exposes the emotional coldness beneath Birling\'s patriarchal authority. The family\'s respectability is revealed as a facade: Birling has been so focused on business that he has failed as a father.',
          },
          {
            quote: 'We did her in all right.',
            analysis:
              'Eric\'s blunt, colloquial admission of collective guilt cuts through the Birlings\' euphemisms and evasions. The informal register ("did her in") is more honest than his parents\' polished denials.',
          },
        ],
      },
      {
        name: 'Mrs Sybil Birling',
        description:
          'Arthur Birling\'s wife, a cold and morally rigid woman who chairs a charitable organisation. She refused to help Eva Smith (using the name "Mrs Birling") on the grounds that the girl was "impertinent." She is the most resistant to guilt, dismissing Eva as morally inferior and insisting the father of the child should bear responsibility — not realising she is condemning her own son. Her hypocrisy is devastating.',
        keyQuotes: [
          {
            quote: 'Girls of that class—',
            analysis:
              'Mrs Birling\'s interrupted phrase reveals her class prejudice in its rawest form. She categorises Eva by class before even considering her as an individual. The dash suggests she is silenced — perhaps by the Inspector, perhaps by the audience\'s anticipated disgust.',
          },
          {
            quote: 'I accept no blame for it at all.',
            analysis:
              'Mrs Birling\'s total refusal of responsibility is the opposite of the Inspector\'s message. She represents the moral blindness of the privileged class — the inability (or refusal) to see how individual actions affect others.',
          },
        ],
      },
      {
        name: 'Eva Smith / Daisy Renton',
        description:
          'The unseen victim whose death the Inspector investigates. She is never seen on stage, which makes her a symbolic figure — she represents all the vulnerable working-class people exploited by the privileged. Her changing names (Eva Smith, Daisy Renton, "Mrs Birling") suggest she is everywoman, not just one person. The question of whether she is one woman or several is deliberately left ambiguous by Priestley.',
        keyQuotes: [
          {
            quote: 'She was a pretty, lively sort of girl, who never did anybody any harm.',
            analysis:
              'The Inspector\'s description of Eva establishes her humanity and innocence, creating sympathy before the revelations of how each Birling exploited her. "Never did anybody any harm" makes the family\'s treatment of her seem all the more cruel and unjust.',
          },
        ],
      },
    ],

    keyQuotes: [
      {
        quote: 'The Titanic — she sails next week ... unsinkable, absolutely unsinkable.',
        speaker: 'Mr Birling',
        act: 1,
        scene: 1,
        analysis: 'Dramatic irony that destroys Birling\'s credibility. The 1945 audience knows the Titanic sank, the wars happened, and Birling\'s optimism was catastrophically misplaced.',
        themes: ['Capitalism vs socialism', 'Appearance vs reality'],
      },
      {
        quote: 'We don\'t live alone. We are members of one body. We are responsible for each other.',
        speaker: 'Inspector Goole',
        act: 3,
        scene: 1,
        analysis: 'The play\'s thesis statement. Priestley uses the Inspector to articulate collective social responsibility as a moral imperative, directly opposing Birling\'s individualism.',
        themes: ['Social responsibility', 'Capitalism vs socialism'],
      },
      {
        quote: 'If men will not learn that lesson, then they will be taught it in fire and blood and anguish.',
        speaker: 'Inspector Goole',
        act: 3,
        scene: 1,
        analysis: 'A prophecy of the World Wars, delivered to a 1945 audience who has already experienced them. Priestley argues that inequality and selfishness lead inevitably to catastrophe.',
        themes: ['Social responsibility', 'Time and consequence'],
      },
      {
        quote: 'But these girls aren\'t cheap labour — they\'re people.',
        speaker: 'Sheila',
        act: 1,
        scene: 1,
        analysis: 'Sheila\'s moral awakening. She recognises the humanity of the working class, marking the beginning of her transformation and aligning her with the Inspector\'s values.',
        themes: ['Class and inequality', 'Generational conflict'],
      },
      {
        quote: 'You\'re not the kind of father a chap could go to when he\'s in trouble.',
        speaker: 'Eric',
        act: 3,
        scene: 1,
        analysis: 'Eric exposes the emotional dysfunction beneath the Birlings\' respectable facade. Birling\'s failure as a father mirrors his failure as an employer and citizen.',
        themes: ['Generational conflict', 'Appearance vs reality'],
      },
      {
        quote: 'A man has to mind his own business and look after himself.',
        speaker: 'Mr Birling',
        act: 1,
        scene: 1,
        analysis: 'Birling\'s individualist creed, which the entire play is designed to dismantle. The Inspector\'s final speech directly contradicts this philosophy.',
        themes: ['Capitalism vs socialism', 'Social responsibility'],
      },
    ],

    contextPoints: [
      'Written in 1945 but set in 1912 — Priestley deliberately exploits the gap between the two time periods. The audience knows that Birling\'s predictions about peace and progress were disastrously wrong.',
      'Priestley was a committed socialist who believed in collective responsibility. He helped found the Common Wealth Party and delivered popular Postscripts radio broadcasts during WWII, arguing for social reform.',
      'The play was first performed in the Soviet Union (Moscow, 1945) before opening in London in 1946. It was written during the period when Clement Attlee\'s Labour government was building the welfare state.',
      'The 1912 setting represents the height of Edwardian capitalism: rigid class hierarchy, no welfare state, limited workers\' rights, and women unable to vote. Eva Smith has virtually no safety net.',
      'The Inspector can be read as a supernatural figure (his name "Goole" echoes "ghoul"), a representative of conscience, or a device from the future. Priestley deliberately leaves his identity ambiguous.',
      'The play\'s structure is a well-made play: three acts, real-time action, a single set. The confined drawing room becomes a pressure cooker as secrets are revealed.',
    ],

    examTips: [
      'Always discuss the dual time frame (set 1912, performed 1945). This is not just context — it is a deliberate structural choice by Priestley that creates dramatic irony and strengthens his political message.',
      'Avoid treating An Inspector Calls as a whodunit. It is a morality play: the question is not "who killed Eva Smith?" but "who is responsible?" — and the answer is everyone.',
      'Track the generational divide. Sheila and Eric change; Mr and Mrs Birling do not. This is Priestley\'s message about where hope for the future lies.',
      'The Inspector\'s final speech is the most commonly quoted passage, but examiners reward students who can also analyse the beginning (Birling\'s speeches) and the ending (the phone call) with equal depth.',
      'The play has no scene changes or intervals in many modern productions. Discuss the claustrophobic effect of the single set — the Birlings cannot escape the Inspector or their guilt.',
      'When discussing Eva Smith, note that she is never seen on stage. She is a construct — possibly one woman, possibly several. Discuss why Priestley makes this choice: it makes her a symbol of all exploited workers.',
    ],

    sampleQuestions: [
      {
        question:
          'How does Priestley present ideas about social responsibility in An Inspector Calls?',
        planPoints: [
          'Birling\'s opening speech ("a man has to mind his own business") establishes the individualist position that the play will systematically demolish.',
          'The Inspector\'s investigation reveals how each character\'s self-interested actions contributed to Eva\'s death — social irresponsibility has fatal consequences.',
          'Sheila and Eric\'s acceptance of guilt shows that moral awareness and change are possible — they represent the hope of the younger generation.',
          'The Inspector\'s final speech — "we are members of one body" — is the play\'s thesis, using biblical language to frame social responsibility as a spiritual duty.',
          'The final phone call: a real inspector is coming. Priestley suggests that if we do not learn the lesson voluntarily, we will be forced to learn it — "in fire and blood and anguish."',
        ],
      },
      {
        question:
          'How does Priestley use the character of Mr Birling to present ideas about capitalism?',
        planPoints: [
          'Birling is introduced as a successful businessman celebrating his daughter\'s engagement — he embodies Edwardian capitalist prosperity.',
          'His predictions (no war, Titanic unsinkable) are devastatingly wrong, destroying his authority for the 1945 audience.',
          'He fired Eva for striking for better wages — Priestley shows capitalism as a system that punishes workers for asserting their rights.',
          'He cares more about his knighthood and public reputation than Eva\'s death — Priestley exposes how capitalism privileges status over human life.',
          'His refusal to accept guilt at the end shows he is incapable of change — Priestley suggests the older generation of capitalists is beyond redemption.',
        ],
      },
      {
        question:
          'How does Priestley present the differences between the older and younger generations in An Inspector Calls?',
        planPoints: [
          'Mr and Mrs Birling represent the older generation: rigid, class-conscious, and resistant to change. They deny responsibility throughout.',
          'Sheila\'s immediate remorse ("I behaved badly too. I know I did. I\'m ashamed of it") contrasts with her mother\'s flat denial: "I accept no blame for it at all."',
          'Eric\'s accusation ("You\'re not the kind of father a chap could go to") exposes the emotional failure of the older generation\'s values.',
          'After the Inspector leaves, the older Birlings try to return to normal; the younger Birlings insist that what they have learned cannot be unlearned.',
          'Priestley addresses the 1945 audience directly: the older generation created the conditions for two world wars; the younger generation must build something better.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  4. A CHRISTMAS CAROL — Paper 2, 19th-Century Prose
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'christmas-carol-wjec',
    title: 'A Christmas Carol',
    author: 'Charles Dickens',
    board: 'wjec',
    paper: 'paper2',
    type: '19th-century',

    themes: [
      'Redemption and moral transformation',
      'Social responsibility and charity',
      'Poverty and inequality',
      'Christmas spirit and generosity',
      'Isolation vs community',
      'The supernatural as a catalyst for change',
      'Family and warmth',
      'Greed and miserliness',
      'Memory, time and mortality',
    ],

    characters: [
      {
        name: 'Ebenezer Scrooge',
        description:
          'A cold, miserly money-lender who hoards his wealth while the poor around him suffer. Dickens uses Scrooge as a symbol of the selfish wealthy class that refuses to help the destitute. Over the course of one night, three spirits show him his past, present, and future, forcing him to confront the consequences of his cruelty. His transformation from miser to generous benefactor is the moral core of the novella — Dickens argues that even the most hardened person can change.',
        keyQuotes: [
          {
            quote: 'Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner!',
            analysis:
              'The accumulation of aggressive present participles ("squeezing, wrenching, grasping") creates a sense of relentless greed. Each word tightens the image of a man who hoards money with physical force. The exclamatory narrator directly addresses the reader, establishing Scrooge as a figure of contempt.',
          },
          {
            quote: 'Are there no prisons? Are there no workhouses?',
            analysis:
              'Scrooge parrots the utilitarian arguments of the Victorian establishment, suggesting that poverty is the responsibility of institutions, not individuals. Dickens makes Scrooge voice these arguments so that the reader can see their cruelty. The Spirit of Christmas Present later throws these words back at Scrooge, demonstrating their heartlessness.',
          },
          {
            quote: 'I will honour Christmas in my heart, and try to keep it all the year.',
            analysis:
              'Scrooge\'s transformation is encapsulated in this pledge. "Christmas" stands for generosity, compassion, and community. The phrase "all the year" extends the Christmas spirit beyond a single day, suggesting a permanent moral change — Dickens\'s vision of sustained social responsibility.',
          },
        ],
      },
      {
        name: 'Bob Cratchit',
        description:
          'Scrooge\'s overworked and underpaid clerk who represents the dignity and warmth of the working poor. Despite earning a pittance, he maintains a loving family and a generous spirit. His loyalty to Scrooge — even toasting him at Christmas dinner — demonstrates a moral superiority that comes from love rather than wealth. He is Dickens\'s argument that poverty does not diminish humanity.',
        keyQuotes: [
          {
            quote: 'Bob Cratchit told them how he had a situation in his eye for Master Peter, which would bring in, if obtained, full five-and-sixpence weekly.',
            analysis:
              'The modest income that excites the Cratchit family highlights the vast inequality between employer and worker. Dickens uses specific financial detail to make the poverty concrete and real for his middle-class readers.',
          },
        ],
      },
      {
        name: 'Tiny Tim',
        description:
          'Bob Cratchit\'s disabled youngest son, whose potential death is used by Dickens as the emotional catalyst for Scrooge\'s transformation. Tiny Tim is a sentimental figure — patient, pious, and uncomplaining — but his function is powerful: he makes the consequences of poverty personal. When the Ghost of Christmas Yet to Come shows Scrooge Tiny Tim\'s empty chair and crutch, the message is clear: neglecting the poor kills children.',
        keyQuotes: [
          {
            quote: 'God bless us, every one!',
            analysis:
              'Tiny Tim\'s blessing is the novella\'s moral refrain. Its inclusivity — "every one" — embodies the communal spirit that Scrooge must learn. The simplicity and innocence of the child\'s voice makes the message more powerful than any sermon.',
          },
        ],
      },
      {
        name: 'Jacob Marley\'s Ghost',
        description:
          'Scrooge\'s dead business partner who appears in chains, warning Scrooge to change his ways. His chains, forged in life from his own greed, symbolise the spiritual consequences of selfishness. Marley is condemned to wander the earth witnessing suffering he can no longer alleviate. He functions as a warning: this is what awaits Scrooge if he does not change.',
        keyQuotes: [
          {
            quote: 'I wear the chain I forged in life. I made it link by link, and yard by yard.',
            analysis:
              'The chain is a metaphor for accumulated sin: each selfish act in life added another link. The repetition of "link by link, and yard by yard" emphasises that moral failure is not one dramatic moment but a lifetime of small choices. Dickens implies that Scrooge is forging his own, even longer chain.',
          },
          {
            quote: 'Mankind was my business. The common welfare was my business; charity, mercy, forbearance, and benevolence, were all my business.',
            analysis:
              'Marley\'s regretful revelation that human welfare should have been his "business" inverts the word\'s meaning from commerce to compassion. Dickens uses the language of capitalism against itself: true "business" is not profit but social responsibility.',
          },
        ],
      },
      {
        name: 'The Ghost of Christmas Present',
        description:
          'A jolly, generous spirit who shows Scrooge how others celebrate Christmas despite their poverty. He reveals the Cratchit family\'s warmth, Tiny Tim\'s fragile health, and the miners and sailors who celebrate in harsh conditions. Beneath his robes, he conceals two children — Ignorance and Want — who represent the social evils Dickens believed Victorian society was neglecting.',
        keyQuotes: [
          {
            quote: 'This boy is Ignorance. This girl is Want. Beware them both, and all of their degree, but most of all beware this boy, for on his brow I see that written which is Doom.',
            analysis:
              'Dickens personifies the social ills of Victorian England as starving children hiding beneath the Spirit\'s robe. The warning that Ignorance leads to "Doom" is directed at the reader as much as at Scrooge — it is a call to action for the educated middle class.',
          },
        ],
      },
    ],

    keyQuotes: [
      {
        quote: 'Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner!',
        speaker: 'Narrator',
        act: 1,
        scene: 1,
        analysis: 'The accumulation of aggressive verbs overwhelms the reader with Scrooge\'s greed. Dickens\'s energetic, exclamatory narrator directly engages the reader\'s moral judgement from the opening page.',
        themes: ['Greed and miserliness', 'Isolation vs community'],
      },
      {
        quote: 'Are there no prisons? Are there no workhouses?',
        speaker: 'Scrooge',
        act: 1,
        scene: 1,
        analysis: 'Scrooge echoes the callous Malthusian arguments used to justify neglecting the poor. Dickens invites the reader to recognise these arguments as morally bankrupt.',
        themes: ['Poverty and inequality', 'Social responsibility'],
      },
      {
        quote: 'I wear the chain I forged in life. I made it link by link, and yard by yard.',
        speaker: 'Marley\'s Ghost',
        act: 1,
        scene: 1,
        analysis: 'The chain symbolises the accumulated weight of a selfish life. Each link represents a missed opportunity to show compassion. Dickens makes sin tangible and measurable.',
        themes: ['Greed and miserliness', 'Redemption'],
      },
      {
        quote: 'Mankind was my business.',
        speaker: 'Marley\'s Ghost',
        act: 1,
        scene: 1,
        analysis: 'Marley redefines "business" from commerce to compassion — the single most important thematic statement in the novella, turning the language of capitalism into a moral imperative.',
        themes: ['Social responsibility', 'Greed and miserliness'],
      },
      {
        quote: 'God bless us, every one!',
        speaker: 'Tiny Tim',
        act: 3,
        scene: 1,
        analysis: 'Tiny Tim\'s inclusive blessing encapsulates the novella\'s moral vision: community, generosity, and universal goodwill. Its repetition at the end of the story signals Scrooge\'s complete transformation.',
        themes: ['Christmas spirit', 'Family and warmth'],
      },
      {
        quote: 'I will honour Christmas in my heart, and try to keep it all the year.',
        speaker: 'Scrooge',
        act: 5,
        scene: 1,
        analysis: 'Scrooge\'s pledge marks his redemption. "All the year" extends the Christmas spirit into a permanent moral commitment — Dickens argues that compassion is not seasonal.',
        themes: ['Redemption', 'Christmas spirit', 'Social responsibility'],
      },
      {
        quote: 'This boy is Ignorance. This girl is Want. Beware them both.',
        speaker: 'Ghost of Christmas Present',
        act: 3,
        scene: 1,
        analysis: 'Dickens personifies social evils to shock his readers. The warning that Ignorance leads to "Doom" is a direct political message aimed at the complacent Victorian middle class.',
        themes: ['Poverty and inequality', 'Social responsibility'],
      },
    ],

    contextPoints: [
      'Published in December 1843 during a period of severe poverty in industrial Britain. The Poor Law Amendment Act of 1834 had created workhouses designed to be so unpleasant that the poor would avoid them — Scrooge\'s "Are there no workhouses?" references this cruel system.',
      'Dickens had personal experience of poverty: as a child, he was sent to work in a blacking factory when his father was imprisoned for debt. This shaped his lifelong compassion for the poor.',
      'Thomas Malthus argued that the poor should be left to die to prevent overpopulation. Scrooge\'s reference to "decreasing the surplus population" echoes Malthusian thinking, which Dickens found morally repugnant.',
      'The novella was written partly as a response to a government report on child labour in mines and factories (1842). Dickens originally planned to write a political pamphlet but chose fiction as more powerful.',
      'Victorian Christmas traditions were being established during this period. A Christmas Carol helped shape the modern idea of Christmas as a time of generosity, family, and goodwill — Dickens is sometimes credited with "inventing" the modern Christmas.',
      'The five-stave structure mirrors a Christmas carol (a song). Each "stave" (not "chapter") reinforces the musical, celebratory tone and the idea that the story itself is a gift to the reader.',
    ],

    examTips: [
      'Always refer to staves, not chapters. Dickens deliberately uses musical terminology to reinforce the novella\'s connection to Christmas carols and celebration.',
      'Track Scrooge\'s transformation across the five staves. A top-band response will analyse HOW Dickens creates change — through supernatural visitation, emotional manipulation, and the fear of death.',
      'Dickens\'s narrator is interventionist and opinionated. Analyse the narrator\'s tone and technique as well as the characters\' words. The opening description of Scrooge, for example, is a deliberate rhetorical assault on the reader.',
      'When discussing poverty, avoid generalising. Use specific textual evidence: the Cratchits\' meagre dinner, Tiny Tim\'s crutch, the children Ignorance and Want. Dickens makes poverty concrete and personal.',
      'The novella is a social polemic disguised as a ghost story. Always acknowledge Dickens\'s purpose: he is not just telling an entertaining tale but campaigning for social change.',
      'Compare Scrooge\'s "Are there no prisons?" with the Ghost of Christmas Present throwing his words back at him. This structural echo shows how Dickens uses repetition to make Scrooge (and the reader) confront the cruelty of these arguments.',
    ],

    sampleQuestions: [
      {
        question:
          'How does Dickens present the theme of redemption in A Christmas Carol?',
        planPoints: [
          'Scrooge begins as the embodiment of selfishness — "a squeezing, wrenching, grasping" miser who refuses all human connection.',
          'Marley\'s Ghost provides the warning: selfishness leads to eternal punishment. The chain metaphor makes sin visible and cumulative.',
          'The Ghost of Christmas Past uses memory and regret (young Scrooge, Belle\'s departure) to begin softening Scrooge\'s hardened heart.',
          'The Ghost of Christmas Present shows Scrooge the warmth he is missing (the Cratchits) and the suffering he is causing (Tiny Tim\'s potential death).',
          'The Ghost of Christmas Yet to Come shows Scrooge his own death — unloved and unmourned. Fear of death completes the transformation. Scrooge\'s pledge to "honour Christmas in my heart" signals genuine moral change.',
        ],
      },
      {
        question:
          'How does Dickens use the character of Scrooge to present ideas about poverty and social responsibility?',
        planPoints: [
          'Scrooge\'s "Are there no workhouses?" echoes the callous Malthusian arguments of the Victorian establishment — Dickens uses Scrooge to voice these ideas so the reader can see their cruelty.',
          'His treatment of Bob Cratchit — low wages, no coal, threatened dismissal — dramatises the exploitation of workers by wealthy employers.',
          'The Cratchit family\'s dignity despite poverty contrasts with Scrooge\'s misery despite wealth, arguing that money does not guarantee happiness but poverty causes real suffering.',
          'Ignorance and Want — the starving children beneath the Spirit\'s robe — are Dickens\'s most direct address to the reader: these are your children, your responsibility.',
          'The transformed Scrooge raises Bob\'s salary and becomes a "second father" to Tiny Tim — individual generosity presented as the first step toward social reform.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  5. JEKYLL AND HYDE — Paper 2, 19th-Century Prose
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'jekyll-hyde-wjec',
    title: 'The Strange Case of Dr Jekyll and Mr Hyde',
    author: 'Robert Louis Stevenson',
    board: 'wjec',
    paper: 'paper2',
    type: '19th-century',

    themes: [
      'Duality of human nature',
      'Repression and Victorian respectability',
      'Science and its dangers',
      'Secrecy and concealment',
      'Good vs evil',
      'Appearance vs reality',
      'Masculinity and homosocial bonds',
      'Urban horror and the Gothic',
      'The unconscious mind',
    ],

    characters: [
      {
        name: 'Dr Henry Jekyll',
        description:
          'A respected, wealthy physician who creates a potion to separate his good and evil selves. Jekyll is not simply a good man corrupted — he admits that he has always felt a "profound duplicity" in his nature and that he enjoyed pleasures he was forced to hide beneath his respectable facade. The potion does not create evil; it releases what was already there. Jekyll represents the hypocrisy of Victorian respectability: a society that demanded moral perfection in public while tolerating vice in private.',
        keyQuotes: [
          {
            quote: 'Man is not truly one, but truly two.',
            analysis:
              'Jekyll\'s central insight articulates the novella\'s thesis: human nature is fundamentally dual. Stevenson challenges the Victorian assumption that people are either good or bad, arguing instead that every individual contains both impulses. This anticipates Freudian psychology.',
          },
          {
            quote: 'I learned to recognise the thorough and primitive duality of man.',
            analysis:
              'The word "primitive" suggests that the dual nature is not a flaw but a fundamental human condition — it predates civilisation. Jekyll\'s error is not recognising duality but attempting to separate it, believing he can have pleasure without moral consequence.',
          },
          {
            quote: 'If I am the chief of sinners, I am the chief of sufferers also.',
            analysis:
              'Jekyll presents himself as both perpetrator and victim. The parallel structure ("chief of sinners ... chief of sufferers") creates a troubling moral equivalence. Stevenson forces the reader to consider whether Jekyll deserves sympathy or condemnation.',
          },
        ],
      },
      {
        name: 'Mr Edward Hyde',
        description:
          'Jekyll\'s alter ego — the physical embodiment of his repressed desires and capacity for evil. Hyde is smaller and younger than Jekyll because, as Jekyll explains, the evil side of his nature has been less exercised. Characters who encounter Hyde feel instinctive revulsion but struggle to articulate why — Stevenson uses this to suggest that evil is recognisable but ultimately indescribable. Hyde becomes progressively more violent (from trampling a child to murdering Sir Danvers Carew) and eventually takes over, suggesting that once evil is released, it cannot be controlled.',
        keyQuotes: [
          {
            quote: 'He gave an impression of deformity without any nameable malformation.',
            analysis:
              'Enfield\'s inability to describe Hyde\'s appearance concretely makes him more, not less, terrifying. The "deformity without any nameable malformation" suggests that Hyde\'s evil is spiritual rather than physical — it is felt rather than seen. This reflects Victorian physiognomic ideas about moral character being visible in appearance.',
          },
          {
            quote: 'I never saw a man I so disliked, and yet I scarce know why.',
            analysis:
              'Utterson\'s response to Hyde — instinctive revulsion without rational explanation — creates unease. Stevenson suggests that humans have an innate ability to sense evil, even when it cannot be logically identified.',
          },
        ],
      },
      {
        name: 'Mr Gabriel John Utterson',
        description:
          'A lawyer and the novella\'s narrative lens for much of the story. Utterson is methodical, rational, and discreet — the ideal Victorian gentleman. His investigation into Hyde functions as a detective narrative, but his discretion also enables Jekyll\'s secrets to persist. Stevenson uses Utterson to represent the Victorian tendency to avoid uncomfortable truths: he suspects something is wrong but repeatedly chooses not to probe too deeply.',
        keyQuotes: [
          {
            quote: 'If he be Mr Hyde, I shall be Mr Seek.',
            analysis:
              'Utterson\'s pun reveals his determination to uncover the truth, but also the game-like quality of his investigation. The hide/seek metaphor captures the novella\'s structure: the truth is concealed behind layers of narrative, letters, and testimony, and is only fully revealed at the very end.',
          },
        ],
      },
      {
        name: 'Dr Hastie Lanyon',
        description:
          'Jekyll\'s former friend and fellow physician, a conventional scientist who dismisses Jekyll\'s experiments as "unscientific balderdash." Witnessing Hyde\'s transformation back into Jekyll shocks Lanyon so profoundly that he dies within weeks. His death represents the destruction of rational certainty: the truth of human duality is literally unbearable for a man who believes in clear moral and scientific categories.',
        keyQuotes: [
          {
            quote: 'My life is shaken to its roots; sleep has left me; the deadliest terror sits by me at all hours.',
            analysis:
              'Lanyon\'s physical and psychological collapse after witnessing the transformation demonstrates that the truth of human duality — that a respectable man contains a monster — is psychologically devastating. The tricolon of suffering intensifies the horror.',
          },
        ],
      },
    ],

    keyQuotes: [
      {
        quote: 'Man is not truly one, but truly two.',
        speaker: 'Dr Jekyll (in his full statement)',
        act: 0,
        scene: 10,
        analysis: 'The novella\'s thesis statement: human nature is fundamentally dual. Stevenson challenges the Victorian binary of good and evil, arguing that both coexist in every person.',
        themes: ['Duality of human nature', 'Repression'],
      },
      {
        quote: 'He gave an impression of deformity without any nameable malformation.',
        speaker: 'Enfield',
        act: 0,
        scene: 1,
        analysis: 'Hyde\'s indescribable wrongness makes him more terrifying. Stevenson suggests that evil is felt instinctively rather than rationally identified, and that language fails in the face of true depravity.',
        themes: ['Good vs evil', 'Appearance vs reality'],
      },
      {
        quote: 'I learned to recognise the thorough and primitive duality of man.',
        speaker: 'Dr Jekyll',
        act: 0,
        scene: 10,
        analysis: '"Primitive" frames duality as an ancient, fundamental human condition — not a modern aberration. Jekyll\'s experiment does not create evil; it reveals what civilisation has been suppressing.',
        themes: ['Duality of human nature', 'Science and its dangers'],
      },
      {
        quote: 'With every day, and from both sides of my intelligence, I thus drew steadily nearer to that truth, by whose partial discovery I have been doomed to such a dreadful shipwreck: that man is not truly one, but truly two.',
        speaker: 'Dr Jekyll',
        act: 0,
        scene: 10,
        analysis: 'The nautical metaphor of "shipwreck" suggests that the pursuit of self-knowledge is dangerous. Knowledge of one\'s dual nature leads not to mastery but to destruction.',
        themes: ['Duality of human nature', 'Science and its dangers'],
      },
      {
        quote: 'If I am the chief of sinners, I am the chief of sufferers also.',
        speaker: 'Dr Jekyll',
        act: 0,
        scene: 10,
        analysis: 'Jekyll claims victim status alongside perpetrator status. The parallel structure forces the reader to question the relationship between sin and suffering — is Jekyll pitiable or culpable?',
        themes: ['Good vs evil', 'Repression'],
      },
      {
        quote: 'All human beings, as we meet them, are commingled out of good and evil.',
        speaker: 'Dr Jekyll',
        act: 0,
        scene: 10,
        analysis: 'Jekyll extends his personal discovery to a universal truth: no one is purely good or purely evil. This challenges Victorian morality, which sought to categorise individuals as one or the other.',
        themes: ['Duality of human nature'],
      },
    ],

    contextPoints: [
      'Published in 1886 during the late Victorian era, a period of rigid moral codes and intense concern with public respectability. The novella explores the cost of this repression.',
      'Charles Darwin\'s On the Origin of Species (1859) had destabilised the idea that humans were fundamentally different from animals. Hyde\'s "ape-like" qualities reflect anxieties about humanity\'s primitive, animalistic nature.',
      'Sigmund Freud had not yet published his theories of the unconscious mind, but Stevenson\'s exploration of a hidden, repressed self anticipates Freudian ideas about the id, ego, and superego.',
      'London in the 1880s was a city of stark contrasts: wealthy, respectable neighbourhoods existed alongside slums, vice, and crime. The geography of the novella — Jekyll\'s grand front entrance vs Hyde\'s sinister back door — mirrors this duality.',
      'The story famously came to Stevenson in a dream. His wife urged him to rewrite the first draft to emphasise the allegory, and he burned the manuscript and rewrote it in three days.',
      'The novella\'s narrative structure — multiple perspectives, delayed revelations, letters within letters — creates secrecy and concealment at the level of form. The reader, like Utterson, must piece together the truth.',
    ],

    examTips: [
      'The novella\'s structure is crucial. Information is deliberately withheld: Jekyll\'s full statement comes last. Discuss HOW Stevenson creates suspense and mirrors the theme of concealment through narrative form.',
      'Avoid the common error of saying Jekyll is "good" and Hyde is "evil." Jekyll himself admits he enjoyed pleasures he had to hide — he is complicit, not innocent. Hyde is not a separate person but part of Jekyll.',
      'Analyse the language used to describe Hyde. Multiple characters try and fail to articulate what is wrong with him. This failure of language is itself significant — Stevenson suggests that evil resists rational description.',
      'Connect the novella to its Victorian context: repression, respectability, and the fear of what lies beneath. Jekyll\'s experiment is a metaphor for what happens when a repressive society forces people to hide their true natures.',
      'The setting matters: fog, narrow streets, locked doors, and back entrances create a Gothic urban landscape that mirrors the theme of concealment. Analyse setting as a technique, not just background.',
      'Consider the all-male world of the novella. There are virtually no women in the story. Discuss what this says about Victorian homosocial bonds, secrecy, and the male public sphere.',
    ],

    sampleQuestions: [
      {
        question:
          'How does Stevenson present the theme of duality in The Strange Case of Dr Jekyll and Mr Hyde?',
        planPoints: [
          'Jekyll\'s statement — "Man is not truly one, but truly two" — is the novella\'s thesis. Duality is presented as a fundamental human condition, not a personal flaw.',
          'The physical contrast: Jekyll is tall, handsome, and aged; Hyde is small, young, and deformed. Hyde is smaller because the "evil" side has been less exercised — duality is a matter of proportion, not absolutes.',
          'The setting mirrors duality: Jekyll\'s respectable front door vs Hyde\'s sinister back entrance; the wealthy streets vs the fog-shrouded alleyways.',
          'Narrative structure: the truth is dual — the story has multiple narrators and perspectives, each revealing only a partial truth. Full understanding comes only with Jekyll\'s final statement.',
          'Context: Victorian society demanded public respectability while tolerating private vice. The novella argues that forced repression produces monsters — Hyde is the product of Jekyll\'s suppression.',
        ],
      },
      {
        question:
          'How does Stevenson create a sense of horror and suspense in the novella?',
        planPoints: [
          'Hyde\'s indescribable appearance — "deformity without any nameable malformation" — makes him more frightening because the reader cannot visualise him. The horror is psychological, not visual.',
          'The narrative structure withholds information: the reader discovers the truth alongside Utterson, creating sustained suspense across the novella.',
          'Gothic setting: fog, darkness, locked doors, and the sinister back entrance create an atmosphere of concealment and dread.',
          'Violence is mostly reported rather than shown (the trampled girl, the Carew murder), forcing the reader to imagine the horror — a technique that intensifies rather than diminishes the impact.',
          'Lanyon\'s death from shock: the truth of human duality is presented as so horrifying that knowledge of it is literally fatal.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  6. LORD OF THE FLIES — Paper 2, Modern Prose
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'lord-flies-wjec',
    title: 'Lord of the Flies',
    author: 'William Golding',
    board: 'wjec',
    paper: 'paper2',
    type: 'modern-prose',

    themes: [
      'Civilisation vs savagery',
      'The inherent evil in human nature',
      'Power and leadership',
      'Fear and the unknown',
      'Loss of innocence',
      'Order vs chaos',
      'The failure of democracy',
      'Violence and mob mentality',
      'Symbolism and allegory',
    ],

    characters: [
      {
        name: 'Ralph',
        description:
          'The elected leader who represents civilisation, order, and democratic values. He insists on maintaining the signal fire (hope of rescue) and building shelters. As the other boys descend into savagery, Ralph becomes increasingly isolated, eventually hunted like an animal. His weeping at the end — "for the end of innocence, the darkness of man\'s heart" — expresses the novel\'s bleak thesis. Ralph is not a hero but a flawed, ordinary boy who cannot hold civilisation together against humanity\'s darker impulses.',
        keyQuotes: [
          {
            quote: 'Ralph wept for the end of innocence, the darkness of man\'s heart, and the fall through the air of the true, wise friend called Piggy.',
            analysis:
              'The novel\'s final image. Ralph\'s tears acknowledge three losses: childhood innocence, faith in human goodness, and Piggy (rationality). The phrase "darkness of man\'s heart" is the novel\'s central thesis — evil is not external but inherent. Golding ends on despair, not redemption.',
          },
          {
            quote: 'We\'ve got to have rules and obey them. After all, we\'re not savages.',
            analysis:
              'Ralph\'s early confidence in the power of rules is bitterly ironic: the boys will become exactly what he denies. Golding suggests that civilisation is a thin veneer, maintained only as long as there is external authority to enforce it.',
          },
        ],
      },
      {
        name: 'Jack Merridew',
        description:
          'The antagonist who represents savagery, authoritarianism, and the lust for power. Initially the head chorister, Jack is humiliated when he loses the leadership vote and gradually builds a rival tribe based on hunting, violence, and fear. He exploits the boys\' terror of the "beast" to consolidate power. His painted face — a mask that liberates him from civilised shame — symbolises the release of primal instincts. Jack does not become evil; Golding suggests the savagery was always there, waiting to emerge.',
        keyQuotes: [
          {
            quote: 'He began to dance and his laughter became a bloodthirsty snarling.',
            analysis:
              'The transformation from laughter to "bloodthirsty snarling" shows Jack\'s regression from boy to predator. The animal imagery — snarling — suggests that the veneer of civilisation has been stripped away, revealing something primitive beneath.',
          },
          {
            quote: 'Kill the beast! Cut his throat! Spill his blood!',
            analysis:
              'The hunters\' chant is a ritualistic expression of mob violence. The rhythmic, imperative structure creates a hypnotic effect — the boys are caught up in a collective frenzy that obliterates individual moral judgement. This chant accompanies Simon\'s murder, the novel\'s most horrifying moment.',
          },
        ],
      },
      {
        name: 'Piggy',
        description:
          'The intellectual voice of reason, representing science, logic, and civilisation. Piggy\'s glasses — used to start the fire — symbolise the power of rational thought. He is physically vulnerable (asthmatic, overweight, near-blind without his glasses) and socially marginalised, yet he is the most perceptive character. His murder by Roger — crushed by a boulder — represents the deliberate destruction of reason by brute force. Golding suggests that intelligence and morality are no protection against savagery.',
        keyQuotes: [
          {
            quote: 'Which is better — to be a pack of painted savages like you are, or to be sensible like Ralph is?',
            analysis:
              'Piggy\'s final appeal to reason is met with his murder. The binary question — savagery or sense — encapsulates the novel\'s central conflict. Golding\'s devastating answer is that savagery wins when there is no external authority to protect civilisation.',
          },
          {
            quote: 'What are we? Humans? Or animals? Or savages?',
            analysis:
              'Piggy articulates the novel\'s philosophical question directly. The three categories — human, animal, savage — suggest a hierarchy of regression. Golding argues that without the structures of civilisation, the distinction between humans and animals collapses.',
          },
        ],
      },
      {
        name: 'Simon',
        description:
          'A quiet, spiritual boy who represents innate human goodness and moral insight. Simon is the only character who recognises that the "beast" is not an external creature but the darkness within the boys themselves. His conversation with the Lord of the Flies (the pig\'s head) confirms this truth. He is murdered by the other boys in a frenzied dance — a Christ-like sacrifice of the innocent. His death represents the destruction of spiritual truth by irrational fear.',
        keyQuotes: [
          {
            quote: 'Maybe there is a beast... maybe it\'s only us.',
            analysis:
              'Simon\'s insight is the novel\'s key revelation: the beast is not an external creature but the capacity for evil within every human being. The hesitant "maybe" shows his humility, but the truth is absolute. The other boys reject this insight because it is too frightening to accept.',
          },
          {
            quote: 'Fancy thinking the Beast was something you could hunt and kill!',
            analysis:
              'The Lord of the Flies (the pig\'s head on a stick) speaks to Simon in a hallucinatory scene. The beast cannot be hunted because it is internal — part of the boys themselves. Golding uses the hallucination to deliver his thesis: evil is inherent, not external.',
          },
        ],
      },
      {
        name: 'Roger',
        description:
          'A sadistic boy who represents the most extreme form of human cruelty. Early in the novel, Roger throws stones near a smaller boy but aims to miss, restrained by "the taboo of the old life" — the memory of civilised rules. By the end, he has killed Piggy with a boulder and become Jack\'s torturer. Golding traces the removal of civilised restraint in precise, chilling detail: Roger is the clearest example of what happens when social controls are removed.',
        keyQuotes: [
          {
            quote: 'Roger gathered a handful of stones and began to throw them. Yet there was a space round Henry... into which he dare not throw. Here, invisible yet strong, was the taboo of the old life.',
            analysis:
              'This passage is central to Golding\'s argument. The "taboo" that restrains Roger is not internal morality but external social conditioning — "the old life" of adults, police, punishment. When that conditioning erodes, Roger becomes capable of murder. Civilisation, Golding implies, is a restraint, not a cure.',
          },
        ],
      },
    ],

    keyQuotes: [
      {
        quote: 'Ralph wept for the end of innocence, the darkness of man\'s heart.',
        speaker: 'Narrator',
        act: 0,
        scene: 12,
        analysis: 'The novel\'s final statement: innocence is irretrievably lost, and the darkness Ralph has witnessed is not unique to the island but inherent in all humanity. There is no redemption.',
        themes: ['Loss of innocence', 'Inherent evil'],
      },
      {
        quote: 'Maybe there is a beast... maybe it\'s only us.',
        speaker: 'Simon',
        act: 0,
        scene: 5,
        analysis: 'Simon articulates the novel\'s central truth: evil is not an external force but an internal human condition. The boys\' refusal to accept this is itself evidence of the denial that enables savagery.',
        themes: ['Inherent evil', 'Fear and the unknown'],
      },
      {
        quote: 'Kill the beast! Cut his throat! Spill his blood!',
        speaker: 'The hunters (chant)',
        act: 0,
        scene: 9,
        analysis: 'The ritualistic chant strips individual identity and moral agency. It accompanies Simon\'s murder, showing how collective frenzy enables individuals to commit acts they would never do alone.',
        themes: ['Violence and mob mentality', 'Civilisation vs savagery'],
      },
      {
        quote: 'Which is better — to be a pack of painted savages like you are, or to be sensible like Ralph is?',
        speaker: 'Piggy',
        act: 0,
        scene: 11,
        analysis: 'Piggy\'s last appeal to reason is immediately followed by his murder. Golding\'s devastating juxtaposition answers the question: in the absence of authority, savagery overcomes sense.',
        themes: ['Civilisation vs savagery', 'The failure of democracy'],
      },
      {
        quote: 'The taboo of the old life... Round the squatting child was the protection of parents and school and policemen and the law.',
        speaker: 'Narrator (about Roger)',
        act: 0,
        scene: 4,
        analysis: 'Golding identifies the source of civilised behaviour as external restraint, not internal morality. When the "old life" fades, the restraints fade with it. Roger\'s trajectory from restrained stone-thrower to murderer proves the point.',
        themes: ['Civilisation vs savagery', 'Inherent evil'],
      },
      {
        quote: 'Fancy thinking the Beast was something you could hunt and kill!',
        speaker: 'The Lord of the Flies',
        act: 0,
        scene: 8,
        analysis: 'The pig\'s head delivers Golding\'s thesis through hallucination: evil cannot be defeated because it is part of human nature. The boys\' belief that they can "hunt" the beast is a delusion that enables further violence.',
        themes: ['Inherent evil', 'Fear and the unknown'],
      },
    ],

    contextPoints: [
      'Published in 1954, in the aftermath of World War II and the Holocaust. Golding, who served in the Royal Navy during the war, said: "I began to see what people were capable of doing." The novel is a direct response to the horrors of the 20th century.',
      'The novel challenges the optimistic tradition of desert island stories, particularly R.M. Ballantyne\'s The Coral Island (1857), where British boys civilise their island. Golding inverts this: British boys destroy theirs.',
      'The Cold War context: the novel opens with the boys evacuated during a nuclear war. The "beast from air" is a dead parachutist from an aerial battle. Even the adult world is engaged in destruction.',
      'Golding was influenced by his experience as a schoolteacher, observing the cruelty that children could inflict on each other without adult supervision.',
      'The title "Lord of the Flies" is a translation of "Beelzebub," a biblical name for the Devil. The pig\'s head on a stick is a literal "lord of the flies" — Golding makes the devil not an external figure but a symbol of internal evil.',
      'Golding said of the novel: "The theme is an attempt to trace the defects of society back to the defects of human nature." The island is a microcosm of the world.',
    ],

    examTips: [
      'The novel is an allegory. Always discuss what the characters and events represent: Ralph = civilisation/democracy, Jack = savagery/dictatorship, Piggy = reason/intellect, Simon = spiritual truth, Roger = pure sadism.',
      'Track the decline of civilisation through specific symbolic moments: the conch losing authority, the fire going out, the glasses being stolen, Piggy\'s murder. Each represents a stage in the collapse of order.',
      'Simon\'s death is the novel\'s most important scene. Analyse it in detail: the storm, the frenzy, the Christ-like innocence of Simon, and the fact that ALL the boys (including Ralph and Piggy) participate. No one is innocent.',
      'Avoid saying the boys "turn into" savages. Golding\'s point is that they were always capable of savagery — civilisation was only restraining it. The island does not corrupt them; it reveals them.',
      'The ending is deliberately ambiguous. The naval officer "rescues" the boys, but he is himself engaged in a war. Golding suggests that adult civilisation is just as violent as the boys\' island — it simply hides it better.',
      'When writing about context, link it directly to the text: "Golding, who witnessed the capacity for human cruelty during WWII, presents Simon\'s murder as evidence that violence is not limited to wartime but is fundamental to human nature."',
    ],

    sampleQuestions: [
      {
        question:
          'How does Golding present the theme of civilisation vs savagery in Lord of the Flies?',
        planPoints: [
          'The conch symbolises democratic order: whoever holds it has the right to speak. Its gradual loss of authority — and final destruction alongside Piggy — charts the collapse of civilisation.',
          'Jack\'s painted face liberates him from shame and civilised identity, enabling violence. The mask becomes a symbol of savagery replacing social self.',
          'Roger\'s trajectory from restrained stone-thrower to killer traces the removal of civilised conditioning in precise detail — the "taboo of the old life" fades without authority to enforce it.',
          'Simon\'s murder is committed by ALL the boys in a collective frenzy — Golding shows that even the "civilised" characters are capable of savagery under the right conditions.',
          'The naval officer\'s arrival restores the appearance of civilisation, but he is himself part of a war. Golding implies that adult society is no less savage — it merely disguises its violence.',
        ],
      },
      {
        question:
          'How does Golding use the character of Simon to present ideas about human nature?',
        planPoints: [
          'Simon is the only character who recognises that the beast is internal — "maybe it\'s only us." He represents spiritual insight and innate goodness.',
          'His encounter with the Lord of the Flies (pig\'s head) is a hallucinatory confrontation with evil itself — "Fancy thinking the Beast was something you could hunt and kill!"',
          'Simon\'s murder by the other boys — during a storm, in a frenzy — is a Christ-like sacrifice: the innocent truth-teller is killed by the community he tried to save.',
          'After his death, his body is carried out to sea in a passage of lyrical beauty ("the great tide moved... the body lifted a fraction of an inch"). Golding gives Simon a dignified, almost transcendent departure.',
          'Context: Golding uses Simon to argue that while goodness exists in human nature, it is fragile and easily overwhelmed by collective fear and violence.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  7. BLOOD BROTHERS — Paper 2, Modern Drama
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'blood-brothers-wjec',
    title: 'Blood Brothers',
    author: 'Willy Russell',
    board: 'wjec',
    paper: 'paper2',
    type: 'modern-drama',

    themes: [
      'Class and inequality',
      'Nature vs nurture',
      'Fate and superstition',
      'Friendship and brotherhood',
      'Motherhood and sacrifice',
      'Social mobility and its limits',
      'Violence as a product of deprivation',
      'Gender and expectations',
      'The Thatcher era and economic division',
    ],

    characters: [
      {
        name: 'Mickey Johnstone',
        description:
          'One of the separated twins, raised by his biological mother Mrs Johnstone in a working-class environment. Mickey is energetic and joyful as a child, but as an adult he becomes unemployed, depressed, and dependent on antidepressants. His trajectory illustrates Russell\'s argument that class — not inherent character — determines life outcomes. Mickey\'s final, devastating question — "Why didn\'t you give me away?" — reveals his understanding that his life might have been entirely different if he had been the twin raised by the Lyons family.',
        keyQuotes: [
          {
            quote: 'I could have been him!',
            analysis:
              'Mickey\'s anguished realisation that his suffering is the result of class, not destiny, is the play\'s emotional climax. The exclamation captures the rage and grief of understanding that inequality is not natural but constructed. Russell uses this moment to make his political argument personal.',
          },
          {
            quote: 'Why didn\'t you give me away? ... I could have been him.',
            analysis:
              'Mickey\'s accusation against his mother reveals the devastating logic of the nature/nurture argument: if the twins are biologically identical, then only environment explains their different outcomes. Russell frames class inequality as a form of theft — Mickey has been robbed of opportunity.',
          },
        ],
      },
      {
        name: 'Edward (Eddie) Lyons',
        description:
          'Mickey\'s twin, raised by the wealthy Mrs Lyons. Edward receives a private education, goes to university, and becomes a successful councillor. He is generous, articulate, and emotionally secure — qualities that Russell attributes to his privileged upbringing rather than innate superiority. His friendship with Mickey across the class divide is genuine but ultimately unsustainable: the structural inequalities of their lives pull them apart.',
        keyQuotes: [
          {
            quote: 'I wish I was our Sammy.',
            analysis:
              'As a child, Edward romanticises working-class life, envying Mickey\'s freedom and large family. This naive desire highlights how class inequality operates in both directions: Edward has material comfort but craves the warmth and spontaneity of the Johnstone household.',
          },
        ],
      },
      {
        name: 'Mrs Johnstone',
        description:
          'The biological mother of both twins, a warm, loving, but financially desperate woman who gives one baby away to Mrs Lyons. She is not a bad mother — Russell is careful to show that her decision is forced by poverty, not character. Her superstitious nature makes her vulnerable to Mrs Lyons\'s manipulation. She represents the working-class mothers whose love cannot protect their children from systemic inequality.',
        keyQuotes: [
          {
            quote: 'Tell me it\'s not true, / Say it\'s just a story.',
            analysis:
              'Mrs Johnstone\'s final song, sung over the bodies of both her sons, is a desperate plea for the tragedy to be fictional. The theatrical self-awareness — asking the audience to say "it\'s just a story" — forces the audience to confront the reality that class-based suffering is not fiction but lived experience.',
          },
          {
            quote: 'We say we\'ll be like them, but we never will.',
            analysis:
              'Mrs Johnstone\'s resigned acknowledgement that social mobility is an illusion. Despite dreams of a better life (Marilyn Monroe, dancing), she remains trapped by economic circumstance. Russell uses her awareness to critique the myth of meritocracy.',
          },
        ],
      },
      {
        name: 'Mrs Lyons',
        description:
          'Edward\'s adoptive mother, a wealthy but emotionally fragile woman who persuades Mrs Johnstone to give her one of the twins. Her increasing paranoia and possessiveness suggest that wealth does not guarantee happiness or stability. She manipulates Mrs Johnstone through superstition and later attempts to keep the twins apart through class prejudice. Russell uses her to show how the upper classes maintain their privilege through fear and control.',
        keyQuotes: [
          {
            quote: 'You\'re a mother. You don\'t need money to be a good mother.',
            analysis:
              'Mrs Lyons\'s flattery is manipulative — she uses the ideal of motherhood to persuade Mrs Johnstone to give up her child. The irony is sharp: Mrs Lyons herself is driven by possessiveness rather than nurture, and Mrs Johnstone\'s poverty is precisely what makes her vulnerable.',
          },
          {
            quote: 'They say that if either twin learns he was one of a pair, they shall both immediately die.',
            analysis:
              'Mrs Lyons invents a superstition to frighten Mrs Johnstone into keeping the secret. The "they say" gives false authority to a lie. Russell shows how the powerful exploit the vulnerable through manufactured fear — a microcosm of how class systems maintain themselves.',
          },
        ],
      },
      {
        name: 'The Narrator',
        description:
          'A Brechtian figure who addresses the audience directly, reminding them of the inevitable tragic ending and commenting on the action. The Narrator prevents emotional immersion, forcing the audience to think critically about the social causes of the tragedy rather than simply feeling sorry for the characters. His repeated question — "did anyone mention the class thing?" — makes Russell\'s political message explicit.',
        keyQuotes: [
          {
            quote: 'And do we blame superstition for what came to pass? / Or could it be what we, the English, have come to know as class?',
            analysis:
              'The Narrator directly addresses the audience with the play\'s central question: are the twins\' deaths caused by fate (superstition) or by class inequality? Russell\'s answer is clear — class, not destiny, is the real killer. The rhyming couplet gives the line a folk-ballad quality that makes it memorable.',
          },
        ],
      },
    ],

    keyQuotes: [
      {
        quote: 'And do we blame superstition for what came to pass? Or could it be what we, the English, have come to know as class?',
        speaker: 'Narrator',
        act: 2,
        scene: 1,
        analysis: 'The play\'s thesis question. Russell uses the Narrator to make the political argument explicit: class inequality, not fate, is responsible for the tragedy.',
        themes: ['Class and inequality', 'Fate and superstition'],
      },
      {
        quote: 'I could have been him!',
        speaker: 'Mickey',
        act: 2,
        scene: 1,
        analysis: 'Mickey\'s realisation that class, not character, explains the difference between his life and Edward\'s. This moment transforms personal grief into political critique.',
        themes: ['Nature vs nurture', 'Class and inequality'],
      },
      {
        quote: 'Tell me it\'s not true, say it\'s just a story.',
        speaker: 'Mrs Johnstone',
        act: 2,
        scene: 1,
        analysis: 'The closing song breaks the fourth wall, asking the audience to deny the tragedy. But they cannot — and Russell implies that real-world class inequality produces equally devastating outcomes.',
        themes: ['Motherhood', 'Fate and superstition'],
      },
      {
        quote: 'We say we\'ll be like them, but we never will.',
        speaker: 'Mrs Johnstone',
        act: 1,
        scene: 1,
        analysis: 'A resigned acknowledgement that social mobility is a fantasy. Russell critiques the myth that hard work alone can overcome structural inequality.',
        themes: ['Class and inequality', 'Social mobility'],
      },
      {
        quote: 'They say that if either twin learns he was one of a pair, they shall both immediately die.',
        speaker: 'Mrs Lyons',
        act: 1,
        scene: 1,
        analysis: 'A manufactured superstition used to control Mrs Johnstone. Russell shows how the powerful maintain their advantage through fear and manipulation.',
        themes: ['Fate and superstition', 'Class and inequality'],
      },
    ],

    contextPoints: [
      'First performed in 1983 during Margaret Thatcher\'s Conservative government, a period of mass unemployment, deindustrialisation, and widening inequality — particularly in Liverpool, where the play is set.',
      'Willy Russell grew up in a working-class Liverpool family and left school at fifteen. His plays consistently explore the damage done by class inequality and the myth of meritocracy.',
      'The play uses the musical genre — songs, a narrator, Brechtian techniques — to create emotional distance and encourage the audience to think critically about social issues rather than simply empathise.',
      'Liverpool in the 1970s-80s experienced severe economic decline: factory closures, rising unemployment, and social deprivation. The Johnstone family\'s poverty reflects real conditions in the city.',
      'The nature vs nurture debate was a prominent intellectual discussion in the late 20th century. Russell uses the twin conceit to dramatise the argument, clearly siding with nurture (environment) over nature (biology).',
      'The play draws on folk traditions of separated twins and forbidden knowledge, giving its political story a mythic quality that makes it feel timeless rather than dated.',
    ],

    examTips: [
      'Always address both superstition and class when discussing the twins\' deaths. Russell presents superstition as a red herring — the real cause is inequality. Top-band responses will explain why Russell includes the superstition element (to show how blame is deflected from systemic problems).',
      'Track Mickey and Edward\'s parallel development: childhood friendship, adolescent bonding, adult divergence, and final confrontation. Their trajectories mirror each other until class pulls them apart.',
      'The Narrator is a crucial dramatic device. He breaks the fourth wall, creates dramatic irony (the audience knows the ending from the start), and prevents comfortable emotional immersion. Always discuss his function, not just his words.',
      'Russell uses the musical form to communicate political ideas through accessible, memorable songs. Discuss how specific songs advance the themes — e.g., "Marilyn Monroe" for aspiration and disappointment, "Tell Me It\'s Not True" for devastating grief.',
      'Avoid treating Mrs Johnstone as a victim and Mrs Lyons as a villain. Russell complicates both: Mrs Johnstone makes a terrible decision under impossible pressure; Mrs Lyons acts out of genuine (if selfish) desire for a child. The system is the villain.',
      'The play\'s ending mirrors its beginning (the deaths are announced in the opening). This circular structure reinforces the sense of inevitability — Russell suggests that in an unequal society, tragedy is predetermined.',
    ],

    sampleQuestions: [
      {
        question:
          'How does Russell present the effects of social class in Blood Brothers?',
        planPoints: [
          'The twin conceit isolates class as a variable: identical biology, different upbringing. Russell argues that outcomes are determined by environment, not innate ability.',
          'Mickey\'s decline — unemployment, depression, crime — contrasts with Edward\'s success — university, career, confidence. Russell shows how class shapes life chances from birth.',
          'Mrs Johnstone\'s poverty forces her impossible decision. Mrs Lyons\'s wealth gives her the power to take a child. Russell dramatises how class creates and exploits vulnerability.',
          'The Narrator asks: "Could it be what we, the English, have come to know as class?" — making the political argument explicit and refusing to let the audience blame fate.',
          'Mickey\'s "I could have been him!" is the emotional climax: personal anguish becomes political critique as Mickey understands that his suffering is systemic, not individual.',
        ],
      },
      {
        question:
          'How does Russell use the character of the Narrator in Blood Brothers?',
        planPoints: [
          'The Narrator announces the twins\' deaths at the very start, removing suspense and creating dramatic irony — the audience watches events knowing the ending, which intensifies the tragedy.',
          'He functions as a Brechtian device, breaking the fourth wall to prevent emotional immersion and encourage critical thinking about the social causes of the tragedy.',
          'His repeated references to superstition create tension but also serve as a decoy — the real cause of the tragedy is class, not the supernatural.',
          'The Narrator asks the audience directly whether the cause is "superstition" or "class," making the political argument explicit and refusing comfortable evasion.',
          'He represents fate or conscience — an omniscient presence who sees the whole picture that the characters cannot. His presence gives the play a ballad-like, mythic quality.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  8. ANIMAL FARM — Paper 2, Modern Prose
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'animal-farm-wjec',
    title: 'Animal Farm',
    author: 'George Orwell',
    board: 'wjec',
    paper: 'paper2',
    type: 'modern-prose',

    themes: [
      'Power and corruption',
      'Revolution and betrayal',
      'Propaganda and manipulation of language',
      'Class exploitation',
      'Education and ignorance',
      'The failure of idealism',
      'Totalitarianism',
      'The rewriting of history',
      'Equality and its impossibility under tyranny',
    ],

    characters: [
      {
        name: 'Napoleon',
        description:
          'A Berkshire boar who seizes power after the revolution, representing Joseph Stalin. Napoleon is not charismatic — he is cunning, ruthless, and strategic. He uses the dogs (secret police) to eliminate opposition, Squealer (propaganda) to control information, and gradually adopts all the humans\' vices he originally condemned. His trajectory from revolutionary to tyrant mirrors Stalin\'s transformation of the Soviet Union from a workers\' state into a dictatorship.',
        keyQuotes: [
          {
            quote: 'Napoleon is always right.',
            analysis:
              'Boxer\'s mantra reveals the danger of blind loyalty. Napoleon exploits the animals\' trust and simplicity, turning their devotion into a tool of oppression. Orwell shows how totalitarian leaders depend on the unquestioning obedience of the masses.',
          },
          {
            quote: 'All animals are equal, but some animals are more equal than others.',
            analysis:
              'The final, corrupted commandment encapsulates the novel\'s thesis: revolutionary ideals are betrayed by those who seize power. The logical impossibility of "more equal" is the point — totalitarian language does not need to make sense; it only needs to assert power.',
          },
        ],
      },
      {
        name: 'Snowball',
        description:
          'An intelligent and idealistic pig who represents Leon Trotsky. Snowball genuinely believes in the revolution and plans to improve the animals\' lives (the windmill, education programmes). He is driven out by Napoleon\'s dogs and subsequently used as a scapegoat — blamed for every failure on the farm. His expulsion mirrors Trotsky\'s exile and demonstrates how totalitarian regimes rewrite history to demonise opponents.',
        keyQuotes: [
          {
            quote: 'He fought bravely at the Battle of the Cowshed.',
            analysis:
              'Snowball\'s genuine heroism is later denied by Napoleon\'s propaganda. Squealer rewrites history to claim Snowball was a traitor. Orwell demonstrates how totalitarian regimes control the past to control the present.',
          },
        ],
      },
      {
        name: 'Boxer',
        description:
          'A loyal, hardworking carthorse who represents the exploited working class. Boxer\'s mottos — "I will work harder" and "Napoleon is always right" — embody the tragedy of the proletariat: his labour builds the new society, but his trust and obedience prevent him from seeing that he is being exploited. When he becomes too old to work, Napoleon sells him to a glue factory. Boxer\'s fate is Orwell\'s most devastating indictment of totalitarianism.',
        keyQuotes: [
          {
            quote: 'I will work harder.',
            analysis:
              'Boxer\'s response to every crisis is to increase his own labour. Orwell shows how the ruling class exploits this working-class ethic: Boxer\'s dedication is not rewarded but consumed. His loyalty is the instrument of his destruction.',
          },
          {
            quote: 'Napoleon is always right.',
            analysis:
              'Boxer\'s blind faith enables Napoleon\'s tyranny. Orwell argues that dictatorships depend not just on violence but on the willingness of ordinary people to surrender their judgement to authority.',
          },
        ],
      },
      {
        name: 'Squealer',
        description:
          'Napoleon\'s propagandist, a pig who represents the Soviet state media (particularly Pravda). Squealer is brilliantly persuasive — he can "turn black into white." He manipulates statistics, rewrites the commandments, and uses fear ("Surely you do not want Jones back?") to silence dissent. Orwell uses Squealer to demonstrate how language can be weaponised to serve power.',
        keyQuotes: [
          {
            quote: 'Surely, comrades, you do not want Jones back?',
            analysis:
              'Squealer\'s rhetorical question shuts down all criticism by invoking the threat of the old regime. Orwell shows how totalitarian propaganda uses fear of the past to justify the crimes of the present. The word "Surely" assumes agreement, making dissent feel disloyal.',
          },
          {
            quote: 'The others said of Squealer that he could turn black into white.',
            analysis:
              'Orwell\'s characterisation of Squealer as someone who can invert reality through language is a warning about the power of propaganda. If truth can be made to mean its opposite, then no opposition is possible.',
          },
        ],
      },
      {
        name: 'Old Major',
        description:
          'An elderly boar whose speech inspires the revolution, representing a combination of Karl Marx and Vladimir Lenin. His vision of animal equality — "All animals are equal" — is genuine and idealistic. However, his death before the revolution means his ideas are vulnerable to distortion by Napoleon and Squealer. Orwell suggests that revolutionary ideals, however noble, are always at risk of corruption by those who implement them.',
        keyQuotes: [
          {
            quote: 'All animals are equal.',
            analysis:
              'Old Major\'s original commandment is clear and absolute. Its eventual corruption into "some animals are more equal than others" charts the entire trajectory of the novel. Orwell uses the commandment as a measure of how far the revolution has fallen.',
          },
        ],
      },
    ],

    keyQuotes: [
      {
        quote: 'All animals are equal, but some animals are more equal than others.',
        speaker: 'The pigs (final commandment)',
        act: 0,
        scene: 10,
        analysis: 'The corrupted commandment is the novel\'s most famous line. Its logical impossibility is the point: totalitarian language does not aim for truth but for power. Equality has been made meaningless.',
        themes: ['Power and corruption', 'Propaganda'],
      },
      {
        quote: 'Four legs good, two legs bad.',
        speaker: 'The sheep',
        act: 0,
        scene: 3,
        analysis: 'The sheep\'s slogan reduces complex political ideology to a mindless chant. Orwell shows how propaganda simplifies ideas to prevent critical thinking. When the pigs walk on two legs, the slogan is changed to "Four legs good, two legs better."',
        themes: ['Propaganda', 'Education and ignorance'],
      },
      {
        quote: 'I will work harder.',
        speaker: 'Boxer',
        act: 0,
        scene: 3,
        analysis: 'Boxer\'s motto represents the exploitation of working-class loyalty. His solution to every problem is more labour, but his labour only enriches the pigs. Orwell argues that hard work without political awareness leads to exploitation.',
        themes: ['Class exploitation', 'Power and corruption'],
      },
      {
        quote: 'The creatures outside looked from pig to man, and from man to pig... but already it was impossible to say which was which.',
        speaker: 'Narrator',
        act: 0,
        scene: 10,
        analysis: 'The novel\'s devastating final image: the revolutionaries have become indistinguishable from the oppressors they overthrew. Orwell argues that power corrupts absolutely — the revolution has come full circle.',
        themes: ['Revolution and betrayal', 'Power and corruption'],
      },
      {
        quote: 'Surely, comrades, you do not want Jones back?',
        speaker: 'Squealer',
        act: 0,
        scene: 5,
        analysis: 'Squealer uses the threat of the old regime to silence all criticism of the new one. Orwell demonstrates how totalitarian propaganda exploits genuine fear to prevent legitimate dissent.',
        themes: ['Propaganda', 'Totalitarianism'],
      },
      {
        quote: 'Napoleon is always right.',
        speaker: 'Boxer',
        act: 0,
        scene: 5,
        analysis: 'Boxer\'s absolute faith in Napoleon enables tyranny. Orwell argues that the greatest danger to freedom is not the tyrant himself but the masses\' willingness to trust without questioning.',
        themes: ['Power and corruption', 'Education and ignorance'],
      },
    ],

    contextPoints: [
      'Published in 1945, Animal Farm is an allegorical novella satirising the Russian Revolution (1917) and the rise of Stalinist totalitarianism in the Soviet Union.',
      'Orwell was a democratic socialist who fought in the Spanish Civil War and witnessed firsthand how revolutionary ideals could be betrayed by authoritarian leaders (particularly the Soviet-backed communists in Spain).',
      'The novel was rejected by several publishers during WWII because the Soviet Union was Britain\'s ally. Orwell struggled to get it published, which itself demonstrated the political censorship he was writing about.',
      'Napoleon represents Joseph Stalin; Snowball represents Leon Trotsky; Old Major represents Marx/Lenin; Squealer represents state propaganda (Pravda); Boxer represents the exploited working class; the dogs represent the secret police (NKVD).',
      'Orwell chose the fable form deliberately: its simplicity makes the political message accessible to all readers, mirroring his belief that political writing should be clear and direct.',
      'The novel\'s subtitle — "A Fairy Story" — is deeply ironic. Fairy stories end happily; Animal Farm ends with the pigs becoming indistinguishable from humans. Orwell subverts the genre to deliver a warning.',
    ],

    examTips: [
      'Always discuss Animal Farm as an allegory. Identify what each character represents and analyse how Orwell uses the fable form to make a political argument accessible.',
      'Track the corruption of the Seven Commandments. They are changed gradually — from "No animal shall kill any other animal" to "No animal shall kill any other animal without cause." This incremental corruption mirrors how totalitarian regimes erode rights slowly.',
      'Squealer\'s rhetoric is a gift for language analysis. Examine his persuasive techniques: rhetorical questions, appeals to fear, false statistics, and the manipulation of memory.',
      'Boxer\'s fate is the novel\'s emotional heart. Analyse how Orwell uses the reader\'s sympathy for Boxer to make the political argument personal: blind loyalty to a corrupt leader leads to destruction.',
      'The final scene — pigs and humans playing cards — is the most important passage for analysis. Discuss the visual image, the collapsed distinction between oppressor and revolutionary, and the cyclical nature of exploitation.',
      'Avoid simply retelling the story of the Russian Revolution. Use the historical parallels to illuminate Orwell\'s broader argument about power, propaganda, and the betrayal of ideals — these themes are universal, not just historical.',
    ],

    sampleQuestions: [
      {
        question:
          'How does Orwell present the theme of power and corruption in Animal Farm?',
        planPoints: [
          'Old Major\'s idealistic speech establishes the revolutionary vision of equality — the starting point against which corruption is measured.',
          'Napoleon\'s gradual seizure of power: he uses the dogs to expel Snowball, then consolidates control through fear and propaganda.',
          'The Seven Commandments are corrupted incrementally, showing how totalitarian regimes erode principles gradually rather than abandoning them all at once.',
          'Squealer\'s propaganda enables Napoleon\'s corruption: he rewrites history, manipulates language, and uses fear ("Jones will come back") to silence dissent.',
          'The final image — pigs and humans indistinguishable — completes the cycle: the revolution has produced a new version of the same oppression it sought to destroy.',
        ],
      },
      {
        question:
          'How does Orwell use the character of Boxer to present ideas about the working class?',
        planPoints: [
          'Boxer\'s strength and loyalty represent the best qualities of the working class — dedication, solidarity, and a genuine desire to build a better society.',
          '"I will work harder" — Boxer\'s response to every crisis is more labour, which Orwell presents as both admirable and tragically misguided.',
          '"Napoleon is always right" — Boxer\'s blind faith prevents him from recognising exploitation. Orwell argues that loyalty without critical thinking enables tyranny.',
          'Boxer\'s sale to the knacker is the novel\'s most emotionally devastating moment: the leader he trusted with absolute faith discards him when he is no longer useful.',
          'Orwell uses Boxer to argue that the working class\'s greatest vulnerability is not weakness but trust — their willingness to believe in their leaders makes them easy to exploit.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  9. JANE EYRE — Paper 2, 19th-Century Prose
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'jane-eyre-wjec',
    title: 'Jane Eyre',
    author: 'Charlotte Bronte',
    board: 'wjec',
    paper: 'paper2',
    type: '19th-century',

    themes: [
      'Independence and self-respect',
      'Social class and inequality',
      'Gender and the position of women',
      'Love and passion vs duty and morality',
      'Religion and spirituality',
      'The Gothic and the supernatural',
      'Isolation and belonging',
      'Colonialism and empire',
      'Education and personal growth',
    ],

    characters: [
      {
        name: 'Jane Eyre',
        description:
          'The protagonist and first-person narrator, an orphan who grows from a mistreated child into a fiercely independent woman. Jane insists on equality in her relationships, refuses to compromise her moral principles, and ultimately achieves love on her own terms. She is neither conventionally beautiful nor wealthy, yet she demands respect through the force of her character. Bronte uses Jane to challenge Victorian assumptions about class, gender, and female passivity.',
        keyQuotes: [
          {
            quote: 'I am no bird; and no net ensnares me: I am a free human being with an independent will.',
            analysis:
              'Jane\'s declaration of autonomy to Rochester is a radical feminist statement. The bird/net metaphor rejects the idea that women are creatures to be captured and owned. The phrase "free human being" insists on her humanity and agency in a society that treated women as dependents.',
          },
          {
            quote: 'Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless? You think wrong! — I have as much soul as you — and full as much heart!',
            analysis:
              'Jane\'s passionate outburst to Rochester insists on spiritual and emotional equality regardless of social status or appearance. The list of her supposed deficiencies ("poor, obscure, plain, and little") mirrors society\'s dismissal of women who lack beauty or wealth. Jane redefines value in terms of soul, not status.',
          },
          {
            quote: 'I care for myself. The more solitary, the more friendless, the more unsustained I am, the more I will respect myself.',
            analysis:
              'Jane\'s refusal to become Rochester\'s mistress is rooted in self-respect, not prudishness. She chooses moral integrity over passion, demonstrating that independence requires sacrifice. The repetition of "the more" builds to a climax of defiant self-reliance.',
          },
        ],
      },
      {
        name: 'Edward Rochester',
        description:
          'The brooding, Byronic master of Thornfield Hall who falls in love with Jane. Rochester is passionate, morally complex, and haunted by his secret — his first wife, Bertha Mason, whom he keeps locked in the attic. His attempted bigamy is morally indefensible, yet Bronte creates sympathy for him by revealing how he was tricked into the marriage. His blinding and maiming in the fire that destroys Thornfield can be read as a symbolic punishment that equalises his relationship with Jane — she returns to him as his equal, not his dependent.',
        keyQuotes: [
          {
            quote: 'I am not an angel... and I will not be one till I die: I will be myself.',
            analysis:
              'Rochester\'s rejection of idealisation parallels Jane\'s insistence on authenticity. Both characters refuse to be reduced to types — angel or brute, plain governess or Byronic hero. Bronte values honest selfhood over social performance.',
          },
        ],
      },
      {
        name: 'Bertha Mason',
        description:
          'Rochester\'s first wife, a Creole woman from Jamaica who is kept locked in the attic of Thornfield. She is described in animalistic terms — "the lunatic" who growls, bites, and sets fires. Modern readings (particularly Jean Rhys\'s Wide Sargasso Sea) have reinterpreted Bertha as a victim of patriarchal and colonial violence. For the WJEC exam, it is important to consider Bertha both as a Gothic device (the "madwoman in the attic") and as a figure whose confinement raises troubling questions about gender, race, and empire.',
        keyQuotes: [
          {
            quote: 'In the deep shade, at the farther end of the room, a figure ran backwards and forwards. What it was, whether beast or human being, one could not, at first sight, tell.',
            analysis:
              'The dehumanising language — "it," "beast or human being" — reflects both the Gothic horror of the scene and the colonial attitudes of the period. Bronte\'s refusal to give Bertha a clear human identity raises questions about who is allowed to be fully "human" in Victorian society.',
          },
        ],
      },
      {
        name: 'St John Rivers',
        description:
          'Jane\'s cousin, a clergyman who offers her a loveless marriage based on Christian duty. St John is cold, controlling, and driven by ambition disguised as piety. His proposal represents the opposite danger from Rochester\'s passion: a life without love or warmth, dedicated entirely to duty. Jane\'s rejection of St John is as important as her return to Rochester — she refuses both passion without principle (Rochester\'s initial offer) and principle without passion (St John\'s).',
        keyQuotes: [
          {
            quote: 'God and nature intended you for a missionary\'s wife.',
            analysis:
              'St John presumes to know God\'s plan for Jane, attempting to control her through religious authority. Jane\'s refusal demonstrates that she will not surrender her autonomy to any man — whether he offers love or duty.',
          },
        ],
      },
    ],

    keyQuotes: [
      {
        quote: 'I am no bird; and no net ensnares me: I am a free human being with an independent will.',
        speaker: 'Jane',
        act: 0,
        scene: 23,
        analysis: 'Jane\'s declaration of independence challenges Victorian gender norms. She insists on autonomy and agency in a society that treated women as property.',
        themes: ['Independence', 'Gender and the position of women'],
      },
      {
        quote: 'Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless?',
        speaker: 'Jane',
        act: 0,
        scene: 23,
        analysis: 'Jane demands recognition of her inner worth regardless of social status or appearance. She redefines value in terms of soul and heart, not wealth and beauty.',
        themes: ['Social class', 'Gender', 'Love'],
      },
      {
        quote: 'I care for myself. The more solitary, the more friendless, the more unsustained I am, the more I will respect myself.',
        speaker: 'Jane',
        act: 0,
        scene: 27,
        analysis: 'Jane chooses self-respect over passion. Her moral integrity is presented as the foundation of true independence — she will not compromise her principles even for love.',
        themes: ['Independence', 'Love vs duty'],
      },
      {
        quote: 'Reader, I married him.',
        speaker: 'Jane',
        act: 0,
        scene: 38,
        analysis: 'The famous direct address gives Jane narrative agency: she is the subject ("I married him"), not the object. The marriage is presented as her choice, made from a position of equality, not dependency.',
        themes: ['Independence', 'Love', 'Gender'],
      },
      {
        quote: 'There was no possibility of taking a walk that day.',
        speaker: 'Jane (opening line)',
        act: 0,
        scene: 1,
        analysis: 'The opening line establishes constraint and confinement — the defining condition of Jane\'s childhood. The passive construction ("no possibility") emphasises her powerlessness, which the novel will progressively overcome.',
        themes: ['Isolation', 'Independence'],
      },
    ],

    contextPoints: [
      'Published in 1847 under the male pseudonym "Currer Bell" because female authors faced prejudice and were not taken seriously as writers of serious fiction.',
      'Victorian women had very limited legal rights: married women could not own property (until the Married Women\'s Property Acts of 1870 and 1882), and were expected to be obedient, domestic, and submissive.',
      'The governess was a particularly vulnerable figure in Victorian society: educated enough to teach but socially inferior to her employers, she occupied an uncomfortable middle ground between servant and family.',
      'The Bronte sisters grew up in relative isolation in Haworth, Yorkshire. Charlotte\'s experiences as a governess and teacher informed Jane\'s story.',
      'Bertha Mason\'s Creole heritage reflects Britain\'s colonial relationship with the Caribbean. Modern postcolonial readings examine how the novel treats race and empire, particularly the wealth that Rochester inherits from the colonial plantation economy.',
      'The novel draws on Gothic conventions (the mysterious house, the hidden wife, the supernatural) but also on the Bildungsroman tradition (a coming-of-age narrative tracing Jane\'s moral and emotional development from child to woman).',
    ],

    examTips: [
      'Jane Eyre is a first-person narrative — analyse how the narrative voice shapes the reader\'s understanding. Jane controls what we see and how we judge other characters.',
      'Track Jane\'s journey through five key locations: Gateshead (oppression), Lowood (endurance), Thornfield (passion), Moor House (independence), and Ferndean (equality). Each represents a stage in her development.',
      'When discussing Rochester, avoid romanticising him uncritically. He attempted bigamy, kept a woman locked in an attic, and disguised himself as a fortune teller to manipulate Jane. Bronte creates sympathy for him, but a top-band response will acknowledge his moral failings.',
      'Bertha Mason is increasingly important in exam questions. Consider her as both a Gothic device and a figure raising questions about gender, race, and colonial power. Do not simply call her "mad" — explore what her confinement means.',
      '"Reader, I married him" — the most famous line in the novel. Analyse the direct address, the active voice ("I married him," not "he married me"), and the equality of the relationship it describes.',
      'Link context to the text naturally: "Jane\'s insistence that she has \'as much soul\' as Rochester challenges the Victorian assumption that a woman\'s worth was determined by her beauty, wealth, and social position."',
    ],

    sampleQuestions: [
      {
        question:
          'How does Bronte present the theme of independence in Jane Eyre?',
        planPoints: [
          'Childhood: Jane\'s rebellion against the Reeds ("You are deceitful") establishes her refusal to accept unjust authority from the novel\'s earliest pages.',
          'Lowood: Helen Burns teaches Jane spiritual resilience, while the harsh conditions strengthen her independence through endurance.',
          'Thornfield: Jane\'s declaration — "I am no bird; and no net ensnares me" — asserts her autonomy in the face of Rochester\'s overwhelming personality.',
          'The rejection of Rochester\'s offer to be his mistress: "I care for myself" — Jane chooses moral integrity over passion, demonstrating that true independence requires sacrifice.',
          'The rejection of St John\'s proposal: Jane refuses duty without love, just as she refused love without principle. She will accept only a relationship of equals.',
          '"Reader, I married him" — Jane returns to Rochester as his equal (she has inherited money; he is blind and dependent). Independence is not isolation but the ability to choose love freely.',
        ],
      },
      {
        question:
          'How does Bronte present the position of women in Jane Eyre?',
        planPoints: [
          'Jane\'s childhood powerlessness at Gateshead reflects the position of women (and girls) in Victorian society — dependent on male relatives for shelter and status.',
          'The governess role: Jane is educated but socially inferior, embodying the impossible position of women who needed to work but were stigmatised for it.',
          'Jane\'s passionate speech to Rochester challenges the assumption that women are passive and emotionless: "I have as much soul as you."',
          'Bertha Mason\'s confinement in the attic literalises the imprisonment of women in Victorian society. She is silenced, hidden, and dehumanised — the extreme version of what patriarchy does to all women.',
          'Jane\'s rejection of both Rochester\'s and St John\'s proposals shows a woman exercising moral choice in a society that expected obedience. Her final marriage is on her terms.',
          'Context: Bronte published under a male pseudonym, demonstrating the very gender inequality the novel critiques.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  10. THE MERCHANT OF VENICE — Paper 1, Shakespeare
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'merchant-venice-wjec',
    title: 'The Merchant of Venice',
    author: 'William Shakespeare',
    board: 'wjec',
    paper: 'paper1',
    type: 'shakespeare',

    themes: [
      'Prejudice and anti-Semitism',
      'Justice vs mercy',
      'Wealth, greed and generosity',
      'Love and friendship',
      'Appearance vs reality',
      'Revenge and justice',
      'Gender, disguise and power',
      'Outsiders and belonging',
      'The law and its limitations',
    ],

    characters: [
      {
        name: 'Shylock',
        description:
          'A Jewish moneylender who demands a pound of Antonio\'s flesh as forfeiture on a loan. Shylock is the play\'s most complex character: he is both villain and victim. He has been spat upon, mocked, and economically marginalised by the Christian characters, yet his insistence on the bond is merciless and his desire for Antonio\'s death is genuine. Shakespeare gives him the "Hath not a Jew eyes?" speech — one of the most powerful pleas for common humanity in all of literature — but also shows him sharpening his knife. The play refuses to let the audience settle on a simple judgement.',
        keyQuotes: [
          {
            quote: 'Hath not a Jew eyes? Hath not a Jew hands, organs, dimensions, senses, affections, passions?',
            analysis:
              'Shylock\'s rhetorical questions insist on his shared humanity with the Christians who persecute him. The accumulation of body parts and feelings builds an irrefutable case for equality. However, the speech ends with a justification of revenge ("If you wrong us, shall we not revenge?"), complicating its moral clarity.',
          },
          {
            quote: 'If you prick us, do we not bleed? If you tickle us, do we not laugh? If you poison us, do we not die? And if you wrong us, shall we not revenge?',
            analysis:
              'The parallel structure builds from shared physical experience (bleeding, laughing, dying) to shared moral impulse (revenge). Shakespeare forces the audience to acknowledge Shylock\'s humanity while simultaneously showing how persecution breeds the desire for vengeance.',
          },
          {
            quote: 'I am a Jew. Hath not a Jew eyes?',
            analysis:
              'The simple declarative "I am a Jew" is a statement of identity that precedes the famous plea. Shylock does not apologise for or downplay his Jewishness — he asserts it as the foundation of his argument for equal treatment.',
          },
        ],
      },
      {
        name: 'Portia',
        description:
          'A wealthy heiress of Belmont who disguises herself as a male lawyer to save Antonio in the trial scene. Portia is intelligent, eloquent, and resourceful — her "quality of mercy" speech is one of Shakespeare\'s most celebrated passages. However, she also participates in the humiliation of Shylock, demanding his forced conversion to Christianity. Shakespeare presents her as both heroic and complicit in the play\'s anti-Semitic power structures.',
        keyQuotes: [
          {
            quote: 'The quality of mercy is not strained. / It droppeth as the gentle rain from heaven / Upon the place beneath.',
            analysis:
              'Portia\'s speech on mercy uses natural imagery ("gentle rain") to present mercy as a divine, universal quality that should not be forced. However, the irony is sharp: the court shows no mercy to Shylock. Portia argues for mercy but practises legal destruction.',
          },
          {
            quote: 'Tarry a little; there is something else. / This bond doth give thee here no jot of blood.',
            analysis:
              'Portia\'s legal manoeuvre — that Shylock may take flesh but not blood — is brilliant but also ruthless. She allows Shylock to believe he has won, then destroys him. The dramatic reversal demonstrates both her intelligence and the Christian characters\' willingness to use the law as a weapon.',
          },
        ],
      },
      {
        name: 'Antonio',
        description:
          'The titular merchant, whose sadness opens the play and whose bond with Shylock drives the plot. Antonio is generous to his friends (especially Bassanio) but viciously anti-Semitic toward Shylock — he admits to spitting on him and calling him "dog." His willingness to die for Bassanio can be read as noble friendship or as evidence of deeper emotional attachment. Shakespeare presents him as both sympathetic and culpable.',
        keyQuotes: [
          {
            quote: 'I am a tainted wether of the flock, / Meetest for death.',
            analysis:
              'Antonio\'s self-description as a "tainted wether" (a castrated ram) suggests a man who feels incomplete and marked for sacrifice. The animal imagery connects him to the play\'s theme of flesh and blood. His passive acceptance of death contrasts with Shylock\'s active pursuit of revenge.',
          },
        ],
      },
    ],

    keyQuotes: [
      {
        quote: 'Hath not a Jew eyes? Hath not a Jew hands, organs, dimensions, senses, affections, passions?',
        speaker: 'Shylock',
        act: 3,
        scene: 1,
        analysis: 'The most powerful plea for common humanity in the play. Shylock insists on his equality with the Christians, though the speech also justifies revenge — complicating any simple reading.',
        themes: ['Prejudice', 'Justice vs mercy', 'Outsiders'],
      },
      {
        quote: 'The quality of mercy is not strained. It droppeth as the gentle rain from heaven.',
        speaker: 'Portia',
        act: 4,
        scene: 1,
        analysis: 'Portia presents mercy as a divine quality that benefits both giver and receiver. The irony is that the court extends no mercy to Shylock — the speech\'s values are preached but not practised.',
        themes: ['Justice vs mercy', 'Appearance vs reality'],
      },
      {
        quote: 'All that glisters is not gold.',
        speaker: 'Inscription in the gold casket',
        act: 2,
        scene: 7,
        analysis: 'The casket test\'s central lesson: appearances are deceptive. True value lies beneath the surface. This applies to the play\'s treatment of identity, prejudice, and the disguises characters adopt.',
        themes: ['Appearance vs reality', 'Wealth'],
      },
      {
        quote: 'In sooth, I know not why I am so sad.',
        speaker: 'Antonio',
        act: 1,
        scene: 1,
        analysis: 'The play\'s opening line establishes Antonio\'s melancholy, which is never fully explained. His sadness may stem from his attachment to Bassanio, his role as outsider in a world of lovers, or an existential loneliness.',
        themes: ['Isolation', 'Love and friendship'],
      },
      {
        quote: 'If you prick us, do we not bleed? ... And if you wrong us, shall we not revenge?',
        speaker: 'Shylock',
        act: 3,
        scene: 1,
        analysis: 'The speech moves from shared humanity (bleeding) to shared moral impulse (revenge). Shakespeare shows that persecution creates the very behaviour the persecutors condemn.',
        themes: ['Prejudice', 'Revenge and justice'],
      },
    ],

    contextPoints: [
      'Written c. 1596-97. Jews had been expelled from England in 1290 and were not formally readmitted until 1656. Most Elizabethan audience members would never have met a Jewish person — their ideas were shaped by stereotypes.',
      'Christopher Marlowe\'s The Jew of Malta (c. 1590) featured a villainous Jewish character. Shakespeare\'s Shylock is often read as a response — more complex and sympathetic than Marlowe\'s Barabas, though still operating within anti-Semitic conventions.',
      'Usury (lending money at interest) was forbidden to Christians by canon law but permitted to Jews, creating a system where Jews were economically necessary but morally condemned for the very role they were forced to play.',
      'The trial scene raises questions about the law\'s relationship to justice: Shylock demands strict legal enforcement of his bond, while Portia argues for mercy — but the court\'s treatment of Shylock (stripping his wealth, forcing conversion) is itself unjust.',
      'Gender disguise was a common device in Elizabethan theatre, where boys played female roles. Portia\'s disguise as a male lawyer adds layers of irony: a boy actor plays a woman disguised as a man.',
      'Modern productions must grapple with the play\'s anti-Semitism. Some emphasise Shylock as victim; others show the Christians\' cruelty. The play does not resolve these tensions — it holds them in productive tension.',
    ],

    examTips: [
      'The most common exam mistake is calling Shylock simply a "villain." Top-band responses explore his complexity: he is both cruel (the bond) and cruelly treated (spat upon, robbed of his daughter, forced to convert).',
      'Portia\'s mercy speech is often quoted but rarely analysed in depth. Consider the irony: she argues for mercy but shows Shylock none. This contradiction is the point — discuss it.',
      'The casket test is a structural and thematic device. The gold and silver caskets represent surface value; the lead casket represents hidden worth. Link this to the play\'s treatment of appearance, identity, and prejudice.',
      'When discussing anti-Semitism, distinguish between what the play depicts and what Shakespeare endorses. The play contains anti-Semitic language and actions, but Shakespeare also gives Shylock the most powerful speech in the play. The relationship between text and values is complex.',
      'Consider the ending carefully. It is usually presented as a comic resolution (lovers united, harmony restored), but Shylock is absent — destroyed, not reconciled. Discuss whether the ending is truly comic or whether it is shadowed by injustice.',
    ],

    sampleQuestions: [
      {
        question:
          'How does Shakespeare present Shylock as both villain and victim in The Merchant of Venice?',
        planPoints: [
          'Shylock as victim: Antonio admits to spitting on him and calling him "dog." The Christians\' persecution is presented as habitual, public, and dehumanising.',
          '"Hath not a Jew eyes?" — Shakespeare gives Shylock the play\'s most powerful speech, insisting on his shared humanity and making his desire for revenge comprehensible.',
          'Shylock as villain: his insistence on the pound of flesh, his knife-sharpening in court, and his rejection of mercy present genuine menace and cruelty.',
          'The trial: Shylock is defeated, stripped of his wealth, and forced to convert to Christianity. Whether this is justice or cruelty depends on the audience\'s perspective — Shakespeare does not resolve the question.',
          'Context: Elizabethan anti-Semitism vs modern sensibility. A top response will explore how the play\'s meaning shifts depending on historical context and staging choices.',
        ],
      },
      {
        question:
          'How does Shakespeare present ideas about justice and mercy in The Merchant of Venice?',
        planPoints: [
          'Shylock demands strict legal justice — "I stand for judgement" — viewing the law as a protection against prejudice. For a marginalised figure, the law is the only guarantee of fairness.',
          'Portia\'s mercy speech argues that mercy is superior to justice: "It is twice blessed; / It blesseth him that gives and him that takes." Mercy is presented as a divine quality.',
          'The trial scene\'s irony: Portia argues for mercy but then uses a legal technicality to destroy Shylock. The court demands Shylock\'s forced conversion — the opposite of mercy.',
          'The casket test parallels the justice/mercy theme: those who judge by appearances (gold, silver) fail; the one who looks beneath the surface (lead) succeeds.',
          'Shakespeare does not resolve the tension between justice and mercy — the play holds both in productive tension, asking the audience to consider whether true justice is possible in an unequal society.',
        ],
      },
    ],
  },
];

export default wjecLitTextsExpanded;
