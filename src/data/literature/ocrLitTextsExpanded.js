// OCR (J352) English Literature GCSE - Set Texts and Study Content
// Comprehensive revision data for all OCR Literature set texts

const ocrLitTextsExpanded = {
  shakespeare: {
    macbeth: {
      title: "Macbeth",
      author: "William Shakespeare",
      examBoard: "OCR",
      year: "c. 1606",
      genre: "Tragedy",
      summary:
        "Macbeth, a Scottish nobleman and war hero, encounters three witches who prophesy he will become King of Scotland. Encouraged by his ambitious wife, Lady Macbeth, he murders King Duncan and seizes the throne. Consumed by guilt and paranoia, Macbeth commits further murders to secure his power. Lady Macbeth descends into madness and takes her own life. Macbeth is ultimately killed by Macduff, and Malcolm becomes the rightful king, restoring order to Scotland.",
      characters: {
        macbeth: {
          name: "Macbeth",
          description:
            "A brave Scottish general whose ambition leads him to regicide and tyranny. He begins as a loyal warrior but becomes increasingly corrupted by power and guilt.",
          quotes: [
            {
              quote: "Stars, hide your fires; Let not light see my black and deep desires.",
              analysis:
                "Reveals Macbeth's awareness that his ambition is morally wrong. The imperative 'hide' shows he wants to conceal his dark thoughts, suggesting inner conflict between ambition and conscience.",
            },
            {
              quote: "Is this a dagger which I see before me, The handle toward my hand?",
              analysis:
                "The hallucinated dagger symbolises Macbeth's tortured psyche before Duncan's murder. The rhetorical question suggests he is losing grip on reality, foreshadowing his mental deterioration.",
            },
            {
              quote: "Will all great Neptune's ocean wash this blood clean from my hand?",
              analysis:
                "Hyperbolic reference to Neptune's ocean emphasises the enormity of his guilt. The blood motif recurs throughout, symbolising the permanence of his crime.",
            },
            {
              quote: "I am in blood Stepped in so far that, should I wade no more, Returning were as tedious as go o'er.",
              analysis:
                "Extended metaphor of wading through blood shows Macbeth has passed the point of no return. 'Tedious' is chillingly casual, suggesting moral numbness.",
            },
            {
              quote: "Life's but a walking shadow, a poor player That struts and frets his hour upon the stage.",
              analysis:
                "Nihilistic soliloquy after Lady Macbeth's death reveals total despair. The theatrical metaphor suggests life has become meaningless performance.",
            },
          ],
        },
        ladyMacbeth: {
          name: "Lady Macbeth",
          description:
            "Macbeth's wife, initially the driving force behind Duncan's murder. She is ambitious and manipulative but ultimately destroyed by guilt.",
          quotes: [
            {
              quote: "Come, you spirits That tend on mortal thoughts, unsex me here.",
              analysis:
                "Lady Macbeth calls on supernatural forces to strip her of feminine compassion. 'Unsex me' challenges Jacobean gender roles and links ambition to masculinity.",
            },
            {
              quote: "Look like th' innocent flower, But be the serpent under 't.",
              analysis:
                "Biblical allusion to the serpent in Eden positions Lady Macbeth as a tempter figure. The contrast between appearance and reality is a key theme.",
            },
            {
              quote: "Out, damned spot! Out, I say!",
              analysis:
                "During her sleepwalking scene, Lady Macbeth compulsively tries to wash imagined blood from her hands. The involuntary confession reveals guilt has destroyed her sanity.",
            },
            {
              quote: "What, will these hands ne'er be clean?",
              analysis:
                "Mirrors Macbeth's earlier 'Will all great Neptune's ocean' speech. The shared blood imagery connects them in guilt, though she now suffers more visibly.",
            },
          ],
        },
        banquo: {
          name: "Banquo",
          description:
            "Macbeth's fellow general and friend. He also hears the witches' prophecy but remains honourable, making him a foil to Macbeth.",
          quotes: [
            {
              quote: "Thou hast it now: King, Cawdor, Glamis, all, As the weird women promised, and I fear Thou played'st most foully for 't.",
              analysis:
                "Banquo suspects Macbeth's treachery but does not act, creating dramatic tension. His inaction contrasts with Macbeth's decisiveness.",
            },
            {
              quote: "In the great hand of God I stand, and thence Against the undivulged pretence I fight Of treasonous malice.",
              analysis:
                "Banquo aligns himself with God and righteousness, contrasting Macbeth who allies with the supernatural and evil.",
            },
          ],
        },
        threeWitches: {
          name: "The Three Witches",
          description:
            "Supernatural beings who prophesy Macbeth's rise and fall. They represent fate, temptation, and the disruption of natural order.",
          quotes: [
            {
              quote: "Fair is foul, and foul is fair.",
              analysis:
                "Establishes the play's central paradox: moral inversion where good and evil become interchangeable. This chiasmus sets the tone of deception.",
            },
            {
              quote: "Double, double toil and trouble; Fire burn, and cauldron bubble.",
              analysis:
                "The incantation's trochaic tetrameter and rhyming couplets create an unsettling, ritualistic rhythm that emphasises the witches' otherness.",
            },
          ],
        },
        macduff: {
          name: "Macduff",
          description:
            "A Scottish nobleman who becomes the instrument of Macbeth's downfall. His family is murdered by Macbeth, giving him personal motivation for revenge.",
          quotes: [
            {
              quote: "O horror, horror, horror! Tongue nor heart Cannot conceive nor name thee!",
              analysis:
                "Macduff's reaction to Duncan's murder is raw and genuine, contrasting with Macbeth's performed grief. The triple repetition conveys authentic shock.",
            },
            {
              quote: "He has no children. All my pretty ones? Did you say all?",
              analysis:
                "His devastated response to his family's murder humanises him and underscores Macbeth's cruelty. The questions show he cannot process the enormity of his loss.",
            },
          ],
        },
        duncan: {
          name: "King Duncan",
          description:
            "The good and trusting King of Scotland whose murder sets the tragedy in motion. He represents legitimate, divinely ordained authority.",
          quotes: [
            {
              quote: "There's no art To find the mind's construction in the face.",
              analysis:
                "Dramatic irony: Duncan says this about the traitorous Thane of Cawdor, unaware that Macbeth, the new Thane, will also betray him.",
            },
          ],
        },
        malcolm: {
          name: "Malcolm",
          description:
            "Duncan's eldest son who eventually reclaims the throne. He represents the restoration of legitimate order.",
          quotes: [
            {
              quote: "This dead butcher and his fiend-like queen.",
              analysis:
                "Malcolm's final judgement reduces Macbeth and Lady Macbeth to simple evil. This reductive summary contrasts with the complexity the audience has witnessed.",
            },
          ],
        },
      },
      themes: {
        ambition: {
          name: "Ambition",
          description:
            "Ambition is presented as a destructive force when unchecked by moral conscience. Macbeth's 'vaulting ambition' leads to his downfall, warning that unrestrained desire for power corrupts absolutely.",
          keyQuotes: [
            "I have no spur to prick the sides of my intent, but only Vaulting ambition, which o'erleaps itself.",
            "Stars, hide your fires; Let not light see my black and deep desires.",
          ],
        },
        guiltAndConscience: {
          name: "Guilt and Conscience",
          description:
            "Both Macbeth and Lady Macbeth are tormented by guilt. Shakespeare shows that even the most hardened criminals cannot escape their conscience, manifested through hallucinations and madness.",
          keyQuotes: [
            "Will all great Neptune's ocean wash this blood clean from my hand?",
            "Out, damned spot! Out, I say!",
          ],
        },
        supernatural: {
          name: "The Supernatural",
          description:
            "The witches, ghosts, and hallucinations blur the line between reality and the supernatural. For a Jacobean audience, the supernatural would have been terrifyingly real, reflecting James I's interest in witchcraft.",
          keyQuotes: [
            "Fair is foul, and foul is fair.",
            "Is this a dagger which I see before me?",
          ],
        },
        kingshipAndTyranny: {
          name: "Kingship and Tyranny",
          description:
            "The play contrasts Duncan's benevolent rule with Macbeth's tyranny. It explores the divine right of kings and the consequences of illegitimate rule, relevant to the Gunpowder Plot context.",
          keyQuotes: [
            "There's no art To find the mind's construction in the face.",
            "This dead butcher and his fiend-like queen.",
          ],
        },
        genderAndPower: {
          name: "Gender and Power",
          description:
            "Lady Macbeth challenges Jacobean gender norms by seeking masculine ruthlessness. The play suggests that disrupting natural gender roles leads to chaos and destruction.",
          keyQuotes: [
            "Come, you spirits That tend on mortal thoughts, unsex me here.",
            "When you durst do it, then you were a man.",
          ],
        },
        appearanceVsReality: {
          name: "Appearance vs Reality",
          description:
            "Characters hide their true intentions behind false appearances. The play warns that things are not always what they seem.",
          keyQuotes: [
            "Look like th' innocent flower, But be the serpent under 't.",
            "False face must hide what the false heart doth know.",
          ],
        },
      },
      keyQuotes: [
        { quote: "Fair is foul, and foul is fair.", speaker: "Witches", act: "1.1", analysis: "Establishes moral inversion as the play's central concern." },
        { quote: "Yet do I fear thy nature; It is too full o' the milk of human kindness.", speaker: "Lady Macbeth", act: "1.5", analysis: "Lady Macbeth fears her husband is too gentle to seize power, introducing the theme of masculinity and ambition." },
        { quote: "Stars, hide your fires; Let not light see my black and deep desires.", speaker: "Macbeth", act: "1.4", analysis: "Light/dark imagery reflects the internal battle between good and evil." },
        { quote: "Come, you spirits That tend on mortal thoughts, unsex me here.", speaker: "Lady Macbeth", act: "1.5", analysis: "Invocation of evil spirits links ambition to the supernatural and challenges gender roles." },
        { quote: "Look like th' innocent flower, But be the serpent under 't.", speaker: "Lady Macbeth", act: "1.5", analysis: "Biblical serpent imagery connects deception to original sin." },
        { quote: "Is this a dagger which I see before me, The handle toward my hand?", speaker: "Macbeth", act: "2.1", analysis: "The hallucination signals Macbeth's psychological breakdown before the murder." },
        { quote: "Will all great Neptune's ocean wash this blood clean from my hand?", speaker: "Macbeth", act: "2.2", analysis: "Hyperbole conveys overwhelming guilt; blood becomes a symbol of moral stain." },
        { quote: "A little water clears us of this deed.", speaker: "Lady Macbeth", act: "2.2", analysis: "Ironic contrast with her later sleepwalking scene; she underestimates the power of guilt." },
        { quote: "O horror, horror, horror!", speaker: "Macduff", act: "2.3", analysis: "Triple repetition expresses genuine shock, contrasting Macbeth's performed grief." },
        { quote: "Thou hast it now: King, Cawdor, Glamis, all.", speaker: "Banquo", act: "3.1", analysis: "Banquo's suspicion creates dramatic tension and seals his fate." },
        { quote: "I am in blood Stepped in so far that, should I wade no more, Returning were as tedious as go o'er.", speaker: "Macbeth", act: "3.4", analysis: "Blood river metaphor shows Macbeth recognises he cannot undo his crimes." },
        { quote: "Double, double toil and trouble.", speaker: "Witches", act: "4.1", analysis: "Ritualistic chant reinforces the supernatural atmosphere and the witches' power." },
        { quote: "He has no children. All my pretty ones?", speaker: "Macduff", act: "4.3", analysis: "Raw grief humanises Macduff and condemns Macbeth's tyranny." },
        { quote: "Out, damned spot! Out, I say!", speaker: "Lady Macbeth", act: "5.1", analysis: "Guilt manifests physically; she cannot escape the psychological consequences of murder." },
        { quote: "Life's but a walking shadow, a poor player That struts and frets his hour upon the stage.", speaker: "Macbeth", act: "5.5", analysis: "Nihilistic soliloquy reveals Macbeth's total despair and loss of meaning." },
        { quote: "This dead butcher and his fiend-like queen.", speaker: "Malcolm", act: "5.8", analysis: "Final judgement simplifies the complex characters, restoring moral clarity." },
      ],
      context: {
        historical:
          "Written c.1606, shortly after the Gunpowder Plot (1605) and James I's accession. The play flatters James by dramatising his supposed ancestor Banquo positively and by condemning regicide.",
        social:
          "Jacobean society believed firmly in the divine right of kings and the Great Chain of Being. Disrupting this order was considered both a political and spiritual crime.",
        literary:
          "Shakespeare drew on Holinshed's Chronicles for the historical basis but significantly altered events. The play is one of his shortest tragedies, creating a relentless, claustrophobic atmosphere.",
        cultural:
          "James I wrote 'Daemonologie' (1597) about witchcraft, making the supernatural elements particularly relevant. Witchcraft trials were common in this period.",
      },
    },
    romeoAndJuliet: {
      title: "Romeo and Juliet",
      author: "William Shakespeare",
      examBoard: "OCR",
      year: "c. 1595",
      genre: "Tragedy",
      summary:
        "In Verona, two feuding families — the Montagues and Capulets — are locked in an ancient grudge. Romeo Montague and Juliet Capulet meet at a ball and fall instantly in love. They marry secretly with the help of Friar Lawrence. After Romeo kills Juliet's cousin Tybalt in a fight and is banished, Juliet takes a sleeping potion to avoid a forced marriage to Paris. Romeo, believing her dead, takes poison. Juliet wakes to find Romeo dead and stabs herself. Their deaths finally reconcile the feuding families.",
      characters: {
        romeo: {
          name: "Romeo",
          description:
            "A young Montague who is passionate and impulsive. He transforms from a lovesick youth pining for Rosaline to a devoted, tragic lover of Juliet.",
          quotes: [
            {
              quote: "Did my heart love till now? Forswear it, sight! For I ne'er saw true beauty till this night.",
              analysis:
                "Romeo's instant abandonment of Rosaline raises questions about the depth of his love. The rhyming couplet suggests romantic convention rather than genuine feeling.",
            },
            {
              quote: "But soft, what light through yonder window breaks? It is the east, and Juliet is the sun.",
              analysis:
                "Romeo elevates Juliet through celestial imagery, associating her with light, warmth, and life. This contrasts with the darkness and death that will follow.",
            },
            {
              quote: "Then I defy you, stars!",
              analysis:
                "Romeo's defiance of fate upon hearing of Juliet's 'death' is both heroic and reckless. It encapsulates his impulsive nature and the play's theme of fate.",
            },
          ],
        },
        juliet: {
          name: "Juliet",
          description:
            "A young Capulet, only thirteen years old. She is initially obedient but shows increasing independence and maturity as the play progresses.",
          quotes: [
            {
              quote: "What's in a name? That which we call a rose By any other name would smell as sweet.",
              analysis:
                "Juliet questions the power of names and social identity. She recognises that the feud is based on arbitrary labels, showing intellectual maturity beyond her years.",
            },
            {
              quote: "My only love sprung from my only hate! Too early seen unknown, and known too late!",
              analysis:
                "The paradox of love and hate being intertwined foreshadows the tragic outcome. The exclamation marks convey Juliet's shock and distress.",
            },
            {
              quote: "O happy dagger! This is thy sheath; there rust, and let me die.",
              analysis:
                "Juliet's final words show decisive action. The personification of the dagger as 'happy' is darkly ironic, and her death mirrors Romeo's impulsiveness.",
            },
          ],
        },
        tybalt: {
          name: "Tybalt",
          description:
            "Juliet's hot-tempered cousin, known as the 'Prince of Cats.' He embodies the destructive nature of the family feud.",
          quotes: [
            {
              quote: "What, drawn, and talk of peace? I hate the word, As I hate hell, all Montagues, and thee.",
              analysis:
                "Tybalt's aggression is established immediately. The tricolon builds intensity, equating Montagues with hell itself.",
            },
          ],
        },
        friarLawrence: {
          name: "Friar Lawrence",
          description:
            "A well-intentioned Franciscan friar who secretly marries Romeo and Juliet, hoping to end the feud. His plans ultimately fail with tragic consequences.",
          quotes: [
            {
              quote: "These violent delights have violent ends And in their triumph die, like fire and powder.",
              analysis:
                "The friar's warning foreshadows the tragic outcome. The simile of fire and gunpowder suggests the lovers' passion is inherently destructive.",
            },
            {
              quote: "Wisely and slow; they stumble that run fast.",
              analysis:
                "Proverbial wisdom that contrasts with Romeo's impulsiveness. The friar's advice is ignored, contributing to the tragedy.",
            },
          ],
        },
        mercutio: {
          name: "Mercutio",
          description:
            "Romeo's witty and cynical friend. His death at Tybalt's hands marks the play's shift from comedy to tragedy.",
          quotes: [
            {
              quote: "A plague o' both your houses!",
              analysis:
                "Mercutio's dying curse blames both families equally. His death is the consequence of a feud he has no personal stake in, highlighting its senseless destruction.",
            },
            {
              quote: "O, then, I see Queen Mab hath been with you.",
              analysis:
                "The Queen Mab speech mocks romantic fantasy and foreshadows how dreams and illusions lead to destruction.",
            },
          ],
        },
        nurse: {
          name: "The Nurse",
          description:
            "Juliet's loyal caretaker who acts as a confidante and messenger. She ultimately betrays Juliet by advising her to marry Paris.",
          quotes: [
            {
              quote: "I think it best you married with the County. O, he's a lovely gentleman! Romeo's a dishclout to him.",
              analysis:
                "The Nurse's pragmatic advice devastates Juliet. Her casual dismissal of Romeo shows she does not understand the depth of Juliet's love.",
            },
          ],
        },
        lordCapulet: {
          name: "Lord Capulet",
          description:
            "Juliet's father, who shifts from protective parent to aggressive patriarch when Juliet refuses to marry Paris.",
          quotes: [
            {
              quote: "Hang thee, young baggage! Disobedient wretch!",
              analysis:
                "Lord Capulet's violent language reveals the patriarchal control that drives Juliet to desperate measures. His insults reduce her to property.",
            },
          ],
        },
      },
      themes: {
        loveAndHate: {
          name: "Love and Hate",
          description:
            "The play explores the paradox that love and hate are closely intertwined. The lovers' passion exists within and is shaped by the context of family hatred.",
          keyQuotes: [
            "My only love sprung from my only hate!",
            "Here's much to do with hate, but more with love.",
          ],
        },
        fateAndDestiny: {
          name: "Fate and Destiny",
          description:
            "Romeo and Juliet are described as 'star-crossed lovers' from the prologue. The play questions whether their deaths are inevitable or the result of human choices.",
          keyQuotes: [
            "A pair of star-cross'd lovers take their life.",
            "Then I defy you, stars!",
          ],
        },
        conflictAndViolence: {
          name: "Conflict and Violence",
          description:
            "The ancient grudge between the families creates a cycle of violence that consumes even innocent parties. Only the lovers' deaths can end the feud.",
          keyQuotes: [
            "A plague o' both your houses!",
            "What, drawn, and talk of peace? I hate the word.",
          ],
        },
        youthAndAge: {
          name: "Youth and Age",
          description:
            "The impulsiveness of youth contrasts with the caution of age. The older generation's feud destroys the younger generation's hopes.",
          keyQuotes: [
            "Wisely and slow; they stumble that run fast.",
            "These violent delights have violent ends.",
          ],
        },
        lightAndDark: {
          name: "Light and Dark",
          description:
            "Light imagery is associated with the lovers' passion, while darkness conceals and protects them. Paradoxically, their love can only exist in darkness.",
          keyQuotes: [
            "It is the east, and Juliet is the sun.",
            "Come, gentle night, come, loving, black-brow'd night.",
          ],
        },
        patriarchalPower: {
          name: "Patriarchal Power",
          description:
            "Juliet exists within a rigid patriarchal system where her father controls her future. Her rebellion against this system, though brave, ultimately leads to her death.",
          keyQuotes: [
            "Hang thee, young baggage! Disobedient wretch!",
            "An you be mine, I'll give you to my friend; An you be not, hang, beg, starve, die in the streets.",
          ],
        },
      },
      keyQuotes: [
        { quote: "Two households, both alike in dignity, In fair Verona, where we lay our scene.", speaker: "Prologue", act: "Prologue", analysis: "The prologue establishes the setting and conflict. 'Alike in dignity' suggests both families are equally culpable." },
        { quote: "A pair of star-cross'd lovers take their life.", speaker: "Prologue", act: "Prologue", analysis: "The audience knows the outcome from the start, creating dramatic irony throughout." },
        { quote: "Did my heart love till now? Forswear it, sight!", speaker: "Romeo", act: "1.5", analysis: "Romeo's instant love for Juliet raises questions about the nature of true love versus infatuation." },
        { quote: "My only love sprung from my only hate!", speaker: "Juliet", act: "1.5", analysis: "Paradox captures the central tension between love and family loyalty." },
        { quote: "But soft, what light through yonder window breaks?", speaker: "Romeo", act: "2.2", analysis: "The balcony scene's opening line uses light imagery to elevate Juliet above the mortal world." },
        { quote: "What's in a name? That which we call a rose By any other name would smell as sweet.", speaker: "Juliet", act: "2.2", analysis: "Juliet questions whether identity is inherent or socially constructed." },
        { quote: "Wisely and slow; they stumble that run fast.", speaker: "Friar Lawrence", act: "2.3", analysis: "Proverbial warning about haste that goes unheeded." },
        { quote: "These violent delights have violent ends.", speaker: "Friar Lawrence", act: "2.6", analysis: "Foreshadows the tragedy; the friar recognises the danger of excessive passion." },
        { quote: "A plague o' both your houses!", speaker: "Mercutio", act: "3.1", analysis: "Dying curse blames both families and marks the shift to tragedy." },
        { quote: "O, I am fortune's fool!", speaker: "Romeo", act: "3.1", analysis: "Romeo acknowledges he is a victim of fate after killing Tybalt." },
        { quote: "Hang thee, young baggage! Disobedient wretch!", speaker: "Lord Capulet", act: "3.5", analysis: "Capulet's patriarchal rage shows daughters were considered property." },
        { quote: "Then I defy you, stars!", speaker: "Romeo", act: "5.1", analysis: "Romeo challenges fate itself, showing both courage and tragic recklessness." },
        { quote: "O happy dagger! This is thy sheath; there rust, and let me die.", speaker: "Juliet", act: "5.3", analysis: "Juliet's decisive action in death contrasts with her restricted agency in life." },
        { quote: "All are punish'd.", speaker: "Prince", act: "5.3", analysis: "The Prince's final words emphasise collective responsibility for the tragedy." },
        { quote: "For never was a story of more woe Than this of Juliet and her Romeo.", speaker: "Prince", act: "5.3", analysis: "The closing couplet frames the story as a cautionary tale about the destructiveness of feuding." },
      ],
      context: {
        historical:
          "Written c.1595 during the Elizabethan era. Arranged marriages were common among wealthy families, and children — especially daughters — had little say in their futures.",
        social:
          "Elizabethan society was strictly patriarchal. Women were expected to be obedient to fathers and husbands. Juliet's rebellion would have shocked contemporary audiences.",
        literary:
          "Based on Arthur Brooke's narrative poem 'The Tragicall Historye of Romeus and Juliet' (1562). Shakespeare compressed the timeline from months to days, intensifying the drama.",
        cultural:
          "The Italian setting reflects Elizabethan fascination with Italy as a place of passion, intrigue, and violence. Verona's feuding families mirror real political conflicts of the period.",
      },
    },
    aMidsummerNightsDream: {
      title: "A Midsummer Night's Dream",
      author: "William Shakespeare",
      examBoard: "OCR",
      year: "c. 1595-96",
      genre: "Comedy",
      summary:
        "In Athens, Hermia loves Lysander but her father insists she marry Demetrius, who is loved by Helena. The four lovers flee into the forest, where fairy king Oberon and his servant Puck use a magical flower to manipulate their affections, causing chaos. Meanwhile, a group of Athenian craftsmen ('the mechanicals') rehearse a play for the Duke's wedding. Puck gives Bottom the weaver a donkey's head, and the enchanted Fairy Queen Titania falls in love with him. Eventually, order is restored: the correct lovers are paired, Titania and Oberon reconcile, and the mechanicals perform their absurd play at the wedding of Theseus and Hippolyta.",
      characters: {
        oberon: {
          name: "Oberon",
          description:
            "King of the Fairies. He is powerful and sometimes manipulative, using magic to control others, but ultimately restores harmony.",
          quotes: [
            {
              quote: "Ill met by moonlight, proud Titania.",
              analysis:
                "The formal address and hostile tone immediately establish the conflict between the fairy rulers. Moonlight connects to the dream-like, nocturnal setting.",
            },
            {
              quote: "I know a bank where the wild thyme blows, Where oxlips and the nodding violet grows.",
              analysis:
                "Beautiful natural imagery creates an enchanted, pastoral atmosphere. The detailed description of the fairy world contrasts with the rigid Athenian court.",
            },
          ],
        },
        titania: {
          name: "Titania",
          description:
            "Queen of the Fairies. She is proud and independent, refusing to submit to Oberon's demands until enchanted by the love juice.",
          quotes: [
            {
              quote: "What, jealous Oberon? Fairies, skip hence: I have forsworn his bed and company.",
              analysis:
                "Titania asserts her independence and defies her husband, challenging patriarchal power structures even in the fairy world.",
            },
            {
              quote: "The seasons alter... the spring, the summer, The childing autumn, angry winter, change Their wonted liveries.",
              analysis:
                "The disruption of nature reflects the discord between Titania and Oberon. This shows how personal conflict can have wider consequences.",
            },
          ],
        },
        puck: {
          name: "Puck (Robin Goodfellow)",
          description:
            "Oberon's mischievous servant. He embodies the play's spirit of chaos, comedy, and transformation.",
          quotes: [
            {
              quote: "Lord, what fools these mortals be!",
              analysis:
                "Puck's amused observation highlights the absurdity of human love and behaviour from an outsider's perspective.",
            },
            {
              quote: "If we shadows have offended, Think but this, and all is mended, That you have but slumbered here While these visions did appear.",
              analysis:
                "The epilogue blurs the line between dream and reality, theatre and life. Puck invites the audience to dismiss the play as a dream.",
            },
          ],
        },
        hermia: {
          name: "Hermia",
          description:
            "A young Athenian woman who defies her father to be with Lysander. She is brave, passionate, and fiercely loyal.",
          quotes: [
            {
              quote: "I would my father look'd but with my eyes.",
              analysis:
                "Hermia challenges patriarchal authority by asserting her right to choose her own husband, a radical stance in Elizabethan context.",
            },
          ],
        },
        helena: {
          name: "Helena",
          description:
            "Hermia's friend, hopelessly in love with Demetrius. She is insecure and self-deprecating but persistent.",
          quotes: [
            {
              quote: "And even for that do I love you the more. I am your spaniel; and, Demetrius, The more you beat me, I will fawn on you.",
              analysis:
                "Helena's degrading comparison of herself to a dog highlights the power imbalance in unrequited love and raises questions about female dignity.",
            },
            {
              quote: "Love looks not with the eyes, but with the mind, And therefore is winged Cupid painted blind.",
              analysis:
                "Helena's philosophical observation on love's irrationality is central to the play's theme that love defies logic.",
            },
          ],
        },
        bottom: {
          name: "Nick Bottom",
          description:
            "A weaver and enthusiastic amateur actor. His transformation with a donkey's head is the play's most iconic comic image.",
          quotes: [
            {
              quote: "I have had a most rare vision. I have had a dream, past the wit of man to say what dream it was.",
              analysis:
                "Bottom's bumbling attempt to articulate his magical experience is both comic and touching. It echoes the play's wider theme of dreams and reality.",
            },
          ],
        },
        theseus: {
          name: "Theseus",
          description:
            "Duke of Athens, representing law and rational order. His marriage to Hippolyta frames the play.",
          quotes: [
            {
              quote: "The lunatic, the lover and the poet Are of imagination all compact.",
              analysis:
                "Theseus links madness, love, and art through imagination. This meta-theatrical comment reflects on the play's own use of fantasy.",
            },
          ],
        },
      },
      themes: {
        loveAndDesire: {
          name: "Love and Desire",
          description:
            "The play presents love as irrational, unpredictable, and transformative. The magic flower literalises the arbitrary nature of romantic attraction.",
          keyQuotes: [
            "Love looks not with the eyes, but with the mind.",
            "Lord, what fools these mortals be!",
          ],
        },
        dreamAndReality: {
          name: "Dream and Reality",
          description:
            "The forest represents a dream world where normal rules are suspended. The play questions the boundary between waking life and dreams, art and reality.",
          keyQuotes: [
            "I have had a most rare vision.",
            "If we shadows have offended, Think but this, and all is mended.",
          ],
        },
        orderAndChaos: {
          name: "Order and Chaos",
          description:
            "Athens represents order and law; the forest represents chaos and transformation. Characters must pass through chaos to achieve new harmony.",
          keyQuotes: [
            "The course of true love never did run smooth.",
            "The lunatic, the lover and the poet Are of imagination all compact.",
          ],
        },
        powerAndControl: {
          name: "Power and Control",
          description:
            "The play explores power dynamics in relationships: Theseus over Hippolyta, Egeus over Hermia, Oberon over Titania. Male authority is both reinforced and questioned.",
          keyQuotes: [
            "I would my father look'd but with my eyes.",
            "What, jealous Oberon?",
          ],
        },
        transformationAndMagic: {
          name: "Transformation and Magic",
          description:
            "Characters are physically and emotionally transformed. Bottom's literal transformation mirrors the lovers' changing affections, suggesting all change is magical.",
          keyQuotes: [
            "The seasons alter... the spring, the summer...",
            "Bless thee, Bottom! Bless thee! Thou art translated.",
          ],
        },
      },
      keyQuotes: [
        { quote: "The course of true love never did run smooth.", speaker: "Lysander", act: "1.1", analysis: "Establishes the central theme that love always encounters obstacles." },
        { quote: "Love looks not with the eyes, but with the mind, And therefore is winged Cupid painted blind.", speaker: "Helena", act: "1.1", analysis: "Key thematic statement about the irrationality of love." },
        { quote: "I would my father look'd but with my eyes.", speaker: "Hermia", act: "1.1", analysis: "Hermia asserts her right to personal choice against patriarchal authority." },
        { quote: "Ill met by moonlight, proud Titania.", speaker: "Oberon", act: "2.1", analysis: "Establishes the fairy conflict that mirrors and intensifies the human lovers' discord." },
        { quote: "I know a bank where the wild thyme blows.", speaker: "Oberon", act: "2.1", analysis: "Rich natural imagery creates the enchanted forest atmosphere." },
        { quote: "I am your spaniel; and, Demetrius, The more you beat me, I will fawn on you.", speaker: "Helena", act: "2.1", analysis: "Degrading self-comparison raises questions about female agency in love." },
        { quote: "Lord, what fools these mortals be!", speaker: "Puck", act: "3.2", analysis: "Comic metatheatrical commentary on human absurdity." },
        { quote: "I have had a most rare vision.", speaker: "Bottom", act: "4.1", analysis: "Bottom's response to his transformation is both comic and profound." },
        { quote: "The lunatic, the lover and the poet Are of imagination all compact.", speaker: "Theseus", act: "5.1", analysis: "Philosophical reflection linking creativity, love, and madness." },
        { quote: "If we shadows have offended, Think but this, and all is mended.", speaker: "Puck", act: "5.1", analysis: "Epilogue blurs the boundary between play and dream, actor and fairy." },
        { quote: "So quick bright things come to confusion.", speaker: "Lysander", act: "1.1", analysis: "Foreshadows the chaos that love will cause in the forest." },
        { quote: "Bless thee, Bottom! Bless thee! Thou art translated.", speaker: "Quince", act: "3.1", analysis: "'Translated' means transformed — the word captures the play's theme of change." },
        { quote: "What angel wakes me from my flowery bed?", speaker: "Titania", act: "3.1", analysis: "Comic irony: Titania, enchanted, perceives the donkey-headed Bottom as angelic." },
        { quote: "The iron tongue of midnight hath told twelve.", speaker: "Theseus", act: "5.1", analysis: "Marks the transition from the magical night back to the ordered world of day." },
        { quote: "And the country proverb known, That every man should take his own, In your waking shall be shown.", speaker: "Puck", act: "3.2", analysis: "Puck promises resolution — everyone will end up with the right partner." },
      ],
      context: {
        historical:
          "Written c.1595-96, possibly for an aristocratic wedding celebration. Elizabeth I's court enjoyed elaborate entertainments and masques.",
        social:
          "Elizabethan marriage laws gave fathers near-absolute authority over daughters. Egeus's demand that Hermia obey him or face death/nunnery reflects real legal power.",
        literary:
          "Shakespeare weaves together multiple sources: Ovid's Metamorphoses, Chaucer's 'The Knight's Tale,' and English fairy folklore. The play-within-a-play of Pyramus and Thisbe parodies tragic love stories.",
        cultural:
          "The fairy world draws on English folk traditions of Puck/Robin Goodfellow. May Day and Midsummer festivals were associated with love, magic, and the suspension of social norms.",
      },
    },
    theMerchantOfVenice: {
      title: "The Merchant of Venice",
      author: "William Shakespeare",
      examBoard: "OCR",
      year: "c. 1596-98",
      genre: "Comedy / Problem Play",
      summary:
        "Bassanio needs money to court the wealthy Portia in Belmont. His friend Antonio, a merchant, borrows from the Jewish moneylender Shylock, agreeing to forfeit a pound of flesh if the loan is not repaid. Bassanio wins Portia by choosing the correct casket. When Antonio's ships are lost, Shylock demands his pound of flesh. Portia disguises herself as a lawyer and defeats Shylock in court by arguing he may take flesh but not blood. Shylock is stripped of his wealth and forced to convert to Christianity.",
      characters: {
        shylock: {
          name: "Shylock",
          description:
            "A Jewish moneylender who is both villain and victim. He has been treated with contempt by Venetian Christians, which fuels his desire for revenge against Antonio.",
          quotes: [
            {
              quote: "Hath not a Jew eyes? Hath not a Jew hands, organs, dimensions, senses, affections, passions?",
              analysis:
                "Shylock's famous speech asserts his shared humanity with Christians. The rhetorical questions challenge anti-Semitic prejudice and demand empathy.",
            },
            {
              quote: "If you prick us, do we not bleed? If you tickle us, do we not laugh? If you poison us, do we not die? And if you wrong us, shall we not revenge?",
              analysis:
                "The parallel structure builds from shared humanity to the justification of revenge, showing how persecution breeds retaliation.",
            },
            {
              quote: "I would my daughter were dead at my foot, and the jewels in her ear!",
              analysis:
                "Shylock seemingly values money over his daughter, though this may reflect his pain at Jessica's betrayal and elopement with a Christian.",
            },
          ],
        },
        portia: {
          name: "Portia",
          description:
            "A wealthy heiress of Belmont who is intelligent and resourceful. She disguises herself as a male lawyer and saves Antonio.",
          quotes: [
            {
              quote: "The quality of mercy is not strained; It droppeth as the gentle rain from heaven.",
              analysis:
                "Portia's speech advocates mercy over strict justice, using natural imagery. Ironically, little mercy is shown to Shylock by the end.",
            },
            {
              quote: "In Belmont is a lady richly left; And she is fair, and fairer than that word, Of wondrous virtues.",
              analysis:
                "Portia is introduced through Bassanio's description, which notably begins with her wealth before her beauty or virtue.",
            },
          ],
        },
        antonio: {
          name: "Antonio",
          description:
            "The merchant of the title. He is generous to his friends but prejudiced against Shylock. His sadness at the play's opening is never fully explained.",
          quotes: [
            {
              quote: "In sooth, I know not why I am so sad.",
              analysis:
                "Antonio's opening line establishes a melancholy that pervades his character. Some critics interpret this as repressed love for Bassanio.",
            },
            {
              quote: "I am a tainted wether of the flock, Meetest for death.",
              analysis:
                "Antonio compares himself to a castrated sheep, suggesting feelings of worthlessness and sacrifice. The animal imagery dehumanises him, echoing how he dehumanises Shylock.",
            },
          ],
        },
        bassanio: {
          name: "Bassanio",
          description:
            "Antonio's close friend who seeks to marry Portia. He is charming but financially reckless, relying on others' generosity.",
          quotes: [
            {
              quote: "So may the outward shows be least themselves: The world is still deceived with ornament.",
              analysis:
                "Bassanio's reasoning when choosing the lead casket reflects the play's theme that appearances are deceptive.",
            },
          ],
        },
        jessica: {
          name: "Jessica",
          description:
            "Shylock's daughter who elopes with the Christian Lorenzo, stealing her father's money and jewels. Her betrayal deepens Shylock's bitterness.",
          quotes: [
            {
              quote: "I am ashamed to be my father's child.",
              analysis:
                "Jessica's rejection of her father and Jewish identity raises questions about assimilation, loyalty, and self-hatred.",
            },
          ],
        },
      },
      themes: {
        justiceAndMercy: {
          name: "Justice and Mercy",
          description:
            "The play interrogates the relationship between strict legal justice and moral mercy. Shylock demands the letter of the law; Portia advocates mercy — but the Christians themselves show little mercy.",
          keyQuotes: [
            "The quality of mercy is not strained.",
            "I crave the law, The penalty and forfeit of my bond.",
          ],
        },
        prejudiceAndRace: {
          name: "Prejudice and Race",
          description:
            "Anti-Semitism is central to the play. The Christian characters routinely abuse Shylock, raising questions about whether he is a villain or a victim created by persecution.",
          keyQuotes: [
            "Hath not a Jew eyes?",
            "You call me misbeliever, cut-throat dog, And spit upon my Jewish gaberdine.",
          ],
        },
        wealthAndGreed: {
          name: "Wealth and Greed",
          description:
            "Money drives nearly every relationship in the play. Love and commerce are intertwined, from the casket test to Antonio's bond.",
          keyQuotes: [
            "All that glisters is not gold.",
            "My daughter! O my ducats! O my daughter!",
          ],
        },
        appearanceVsReality: {
          name: "Appearance vs Reality",
          description:
            "The casket test literalises the theme: true worth is hidden beneath humble appearances. Portia's disguise and Shylock's complex characterisation reinforce this.",
          keyQuotes: [
            "So may the outward shows be least themselves.",
            "All that glisters is not gold.",
          ],
        },
      },
      keyQuotes: [
        { quote: "In sooth, I know not why I am so sad.", speaker: "Antonio", act: "1.1", analysis: "Antonio's melancholy opens the play and remains unexplained." },
        { quote: "Hath not a Jew eyes?", speaker: "Shylock", act: "3.1", analysis: "Powerful assertion of shared humanity that challenges prejudice." },
        { quote: "If you prick us, do we not bleed?", speaker: "Shylock", act: "3.1", analysis: "Rhetorical questions build toward a justification of revenge born from oppression." },
        { quote: "The quality of mercy is not strained.", speaker: "Portia", act: "4.1", analysis: "Famous speech on mercy — though ironically, Shylock receives none." },
        { quote: "All that glisters is not gold.", speaker: "Morocco (casket)", act: "2.7", analysis: "Proverbial wisdom warning against superficial judgement." },
        { quote: "The devil can cite Scripture for his purpose.", speaker: "Antonio", act: "1.3", analysis: "Antonio dismisses Shylock's biblical reasoning, showing prejudice." },
        { quote: "I am a Jew. Hath not a Jew eyes?", speaker: "Shylock", act: "3.1", analysis: "Defiant assertion of identity against dehumanising prejudice." },
        { quote: "You call me misbeliever, cut-throat dog, And spit upon my Jewish gaberdine.", speaker: "Shylock", act: "1.3", analysis: "Shylock catalogues the abuse he has suffered, complicating audience sympathy." },
        { quote: "I crave the law, The penalty and forfeit of my bond.", speaker: "Shylock", act: "4.1", analysis: "Shylock insists on strict legal justice, refusing mercy." },
        { quote: "So may the outward shows be least themselves.", speaker: "Bassanio", act: "3.2", analysis: "Bassanio's insight about appearances helps him choose the correct casket." },
        { quote: "I am ashamed to be my father's child.", speaker: "Jessica", act: "2.3", analysis: "Jessica's shame drives her elopement and conversion." },
        { quote: "I would my daughter were dead at my foot, and the jewels in her ear!", speaker: "Shylock", act: "3.1", analysis: "Ambiguous: grief at losing his daughter or anger at losing his money?" },
        { quote: "I am a tainted wether of the flock, Meetest for death.", speaker: "Antonio", act: "4.1", analysis: "Antonio accepts his fate with resignation and self-pity." },
        { quote: "He is well paid that is well satisfied.", speaker: "Portia", act: "4.1", analysis: "Portia values moral satisfaction over material reward." },
        { quote: "How far that little candle throws his beams! So shines a good deed in a naughty world.", speaker: "Portia", act: "5.1", analysis: "Light imagery suggests that goodness stands out against the play's moral darkness." },
      ],
      context: {
        historical:
          "Written c.1596-98. Jews had been expelled from England in 1290 and were not officially readmitted until 1657. Most Elizabethans would never have met a Jewish person.",
        social:
          "Anti-Semitic stereotypes were widespread. Christopher Marlowe's 'The Jew of Malta' (c.1590) featured a villainous Jewish protagonist. Shakespeare complicates this tradition by humanising Shylock.",
        literary:
          "The play is classified as a comedy but has dark elements. The casket plot comes from medieval tales; the pound of flesh from Italian sources. The uneasy ending resists simple comedic resolution.",
        cultural:
          "Venice was a major trading centre known for its cosmopolitan population and legal system. The Rialto was the heart of commercial Venice, where Christians and Jews interacted through commerce.",
      },
    },
    muchAdoAboutNothing: {
      title: "Much Ado About Nothing",
      author: "William Shakespeare",
      examBoard: "OCR",
      year: "c. 1598-99",
      genre: "Comedy",
      summary:
        "In Messina, soldiers return from war. Benedick and Beatrice engage in a 'merry war' of witty insults, both claiming to despise love and marriage. Their friends trick them into believing each loves the other, and they fall in love. Meanwhile, Claudio falls for Hero, but the villainous Don John deceives Claudio into believing Hero is unfaithful. Claudio publicly shames Hero at their wedding. Hero feigns death while the truth is uncovered by the bumbling constable Dogberry. Claudio repents, the couples are reunited, and the play ends with a double wedding.",
      characters: {
        beatrice: {
          name: "Beatrice",
          description:
            "Sharp-witted, independent, and outspoken. She challenges gender expectations with her intelligence and reluctance to marry, making her one of Shakespeare's most compelling female characters.",
          quotes: [
            {
              quote: "I had rather hear my dog bark at a crow than a man swear he loves me.",
              analysis:
                "Beatrice's comic hyperbole masks genuine resistance to male authority. Her wit is both a weapon and a shield.",
            },
            {
              quote: "O that I were a man! What, bear her in hand until they come to take hands, and then, with public accusation, uncovered slander, unmitigated rancour — O God, that I were a man! I would eat his heart in the marketplace.",
              analysis:
                "Beatrice's frustration at being unable to challenge Claudio reveals the limitations placed on women. Her violent language shows the intensity of her loyalty to Hero.",
            },
            {
              quote: "Kill Claudio.",
              analysis:
                "Two stark words that shift the tone from comedy to serious drama. Beatrice demands action that Benedick can take as a man that she cannot.",
            },
          ],
        },
        benedick: {
          name: "Benedick",
          description:
            "A witty, confirmed bachelor who matches Beatrice in intelligence. He undergoes genuine growth, moving from shallow misogyny to mature love.",
          quotes: [
            {
              quote: "I do love nothing in the world so well as you: is not that strange?",
              analysis:
                "Benedick's honest declaration is touchingly direct after all his witty evasions. The question acknowledges how surprising his transformation is.",
            },
            {
              quote: "When I said I would die a bachelor, I did not think I should live till I were married.",
              analysis:
                "Comic self-awareness as Benedick acknowledges his change of heart. The wit remains, but now serves love rather than resisting it.",
            },
          ],
        },
        hero: {
          name: "Hero",
          description:
            "Leonato's dutiful daughter. She is modest and obedient — the ideal Elizabethan woman — but is publicly shamed despite her innocence.",
          quotes: [
            {
              quote: "Is my lord well, that he doth speak so wide?",
              analysis:
                "Hero's bewildered response to Claudio's accusation shows her innocence. She cannot even comprehend what she is being accused of.",
            },
          ],
        },
        claudio: {
          name: "Claudio",
          description:
            "A young soldier who falls quickly for Hero but is equally quick to believe the worst of her. His treatment of Hero exposes the fragility of male honour.",
          quotes: [
            {
              quote: "Give not this rotten orange to your friend.",
              analysis:
                "Claudio's cruel public shaming of Hero uses marketplace imagery, treating her as defective goods. This reveals how women's worth was tied to sexual purity.",
            },
          ],
        },
        donJohn: {
          name: "Don John",
          description:
            "The illegitimate brother of Don Pedro. He is the play's villain, motivated by bitterness and a desire to cause misery.",
          quotes: [
            {
              quote: "I am a plain-dealing villain.",
              analysis:
                "Don John's self-awareness as a villain is unusually honest. His illegitimacy marks him as an outsider, and his malice is partly motivated by exclusion.",
            },
          ],
        },
        dogberry: {
          name: "Dogberry",
          description:
            "The comically incompetent constable whose malapropisms and bumbling accidentally uncover Don John's plot.",
          quotes: [
            {
              quote: "Write down, that they hope they serve God: and write God first; for God defend but God should go before such villains!",
              analysis:
                "Dogberry's confused logic is comic but he stumbles upon the truth. His incompetence contrasts with the intelligent characters who are deceived.",
            },
          ],
        },
      },
      themes: {
        deceptionAndAppearance: {
          name: "Deception and Appearance",
          description:
            "The play is built on deceptions both benign (tricking Beatrice and Benedick into love) and malicious (Don John's plot against Hero). 'Nothing' in the title may pun on 'noting' — observing and misinterpreting.",
          keyQuotes: [
            "I am a plain-dealing villain.",
            "Are these things spoken, or do I but dream?",
          ],
        },
        honourAndShame: {
          name: "Honour and Shame",
          description:
            "Female honour is equated with sexual purity. Hero's perceived loss of honour has devastating consequences, revealing the double standards of patriarchal society.",
          keyQuotes: [
            "Give not this rotten orange to your friend.",
            "Death is the fairest cover for her shame.",
          ],
        },
        loveAndMarriage: {
          name: "Love and Marriage",
          description:
            "The play contrasts superficial, conventional love (Claudio/Hero) with the deeper, hard-won love of Beatrice and Benedick, which is built on mutual respect and wit.",
          keyQuotes: [
            "I do love nothing in the world so well as you.",
            "I had rather hear my dog bark at a crow.",
          ],
        },
        genderAndPower: {
          name: "Gender and Power",
          description:
            "Beatrice's intelligence and independence challenge patriarchal norms. Hero's public shaming shows the vulnerability of women within a male-dominated society.",
          keyQuotes: [
            "O that I were a man!",
            "Kill Claudio.",
          ],
        },
        witAndLanguage: {
          name: "Wit and Language",
          description:
            "Language is power in this play. Beatrice and Benedick use wit as both weapon and armour. The play celebrates verbal dexterity while showing how words can also wound.",
          keyQuotes: [
            "There's a double meaning in that.",
            "Thou and I are too wise to woo peaceably.",
          ],
        },
      },
      keyQuotes: [
        { quote: "I had rather hear my dog bark at a crow than a man swear he loves me.", speaker: "Beatrice", act: "1.1", analysis: "Beatrice's hostility to romantic love is comic but reveals genuine independence." },
        { quote: "I am a plain-dealing villain.", speaker: "Don John", act: "1.3", analysis: "Unusually honest self-identification as the play's antagonist." },
        { quote: "Sigh no more, ladies, sigh no more, Men were deceivers ever.", speaker: "Balthasar (song)", act: "2.3", analysis: "The song foreshadows the deception of Hero and warns about male fickleness." },
        { quote: "I do love nothing in the world so well as you: is not that strange?", speaker: "Benedick", act: "4.1", analysis: "Benedick's sincere declaration marks his transformation from mocker to lover." },
        { quote: "Kill Claudio.", speaker: "Beatrice", act: "4.1", analysis: "Beatrice demands justice she cannot enact herself as a woman." },
        { quote: "O that I were a man!", speaker: "Beatrice", act: "4.1", analysis: "Frustration at gender limitations; Beatrice is constrained by her sex." },
        { quote: "Give not this rotten orange to your friend.", speaker: "Claudio", act: "4.1", analysis: "Claudio reduces Hero to spoiled goods, exposing patriarchal attitudes." },
        { quote: "Death is the fairest cover for her shame.", speaker: "Leonato", act: "4.1", analysis: "Leonato values honour over his own daughter's life, showing patriarchal extremism." },
        { quote: "When I said I would die a bachelor, I did not think I should live till I were married.", speaker: "Benedick", act: "2.3", analysis: "Comic self-awareness about his own transformation." },
        { quote: "There's a double meaning in that.", speaker: "Benedick", act: "2.3", analysis: "Metatheatrical comment highlighting the play's obsession with multiple interpretations." },
        { quote: "Thou and I are too wise to woo peaceably.", speaker: "Benedick", act: "5.2", analysis: "Benedick acknowledges that their relationship is built on conflict and wit." },
        { quote: "Speak, cousin; or, if you cannot, stop his mouth with a kiss.", speaker: "Beatrice", act: "5.4", analysis: "The final kiss resolves the 'merry war' — love triumphs over words." },
        { quote: "For man is a giddy thing, and this is my conclusion.", speaker: "Benedick", act: "5.4", analysis: "Benedick embraces human changeability rather than fighting it." },
        { quote: "Some Cupid kills with arrows, some with traps.", speaker: "Hero", act: "3.1", analysis: "Hero's observation about love's unpredictability applies to both pairs of lovers." },
        { quote: "Are these things spoken, or do I but dream?", speaker: "Benedick", act: "2.3", analysis: "Benedick questions reality after overhearing that Beatrice loves him." },
      ],
      context: {
        historical:
          "Written c.1598-99. The Italian setting of Messina was exotic to Elizabethan audiences, associated with passion and intrigue.",
        social:
          "Female honour and virginity were central to marriage negotiations. A woman's sexual reputation could be destroyed by rumour alone, as the play demonstrates.",
        literary:
          "Shakespeare's source was Bandello's 'Novelle' (1554). The Beatrice/Benedick plot is largely Shakespeare's invention and has become the more celebrated storyline.",
        cultural:
          "The play was written during a period of theatrical innovation. The 'merry war' between Beatrice and Benedick established the template for the romantic comedy genre.",
      },
    },
  },

  modernTexts: {
    anInspectorCalls: {
      title: "An Inspector Calls",
      author: "J.B. Priestley",
      examBoard: "OCR",
      year: "1945 (set in 1912)",
      genre: "Drama / Morality Play",
      summary:
        "The wealthy Birling family are celebrating the engagement of Sheila Birling to Gerald Croft when Inspector Goole arrives to investigate the death of a young woman, Eva Smith. Through his questioning, each family member is revealed to have played a part in her downfall: Mr Birling sacked her, Sheila had her fired from a shop, Gerald kept her as a mistress, Mrs Birling refused her charity, and Eric fathered her child and stole money. After the Inspector leaves, the family discover he may not be a real inspector, but a final phone call reveals a real inspector is on his way.",
      characters: {
        inspectorGoole: {
          name: "Inspector Goole",
          description:
            "A mysterious figure who functions as Priestley's mouthpiece for socialist values. His name puns on 'ghoul,' suggesting he may be supernatural.",
          quotes: [
            {
              quote: "We don't live alone. We are members of one body. We are responsible for each other.",
              analysis:
                "The Inspector's final speech encapsulates Priestley's socialist message. 'One body' echoes Christian theology, universalising the message of collective responsibility.",
            },
            {
              quote: "If men will not learn that lesson, then they will be taught it in fire and blood and anguish.",
              analysis:
                "A prophetic warning that alludes to both World Wars. Written in 1945, the audience would recognise how tragically accurate this prediction was.",
            },
            {
              quote: "One person and one line of inquiry at a time. Otherwise there's a muddle.",
              analysis:
                "The Inspector controls the pace and structure of the interrogation, refusing to let the Birlings derail his purpose.",
            },
          ],
        },
        mrBirling: {
          name: "Mr Arthur Birling",
          description:
            "A wealthy industrialist who is pompous, selfish, and obsessed with social status. He represents the failures of capitalism and the older generation's refusal to change.",
          quotes: [
            {
              quote: "The Titanic — she sails next week... unsinkable, absolutely unsinkable.",
              analysis:
                "Dramatic irony: the 1945 audience knows the Titanic sank. Birling's confident prediction undermines everything else he says, including his optimistic capitalist views.",
            },
            {
              quote: "A man has to make his own way — has to look after himself.",
              analysis:
                "Birling's selfish individualism is the antithesis of the Inspector's collectivist message. Priestley positions this as morally bankrupt.",
            },
            {
              quote: "If we were all responsible for everything that happened to everybody we'd had anything to do with, it would be very awkward.",
              analysis:
                "Birling rejects social responsibility, but the play argues that this is exactly the attitude that destroys lives like Eva's.",
            },
          ],
        },
        mrsBirling: {
          name: "Mrs Sybil Birling",
          description:
            "Arthur's wife, cold and snobbish. She is the most resistant to change, showing no remorse for her treatment of Eva.",
          quotes: [
            {
              quote: "Girls of that class.",
              analysis:
                "Mrs Birling's dismissive phrase reveals her class prejudice. She cannot see Eva as a fellow human being, only as a social inferior.",
            },
            {
              quote: "I accept no blame for it at all.",
              analysis:
                "Mrs Birling's total refusal to accept responsibility makes her the most morally culpable character in the play.",
            },
          ],
        },
        sheila: {
          name: "Sheila Birling",
          description:
            "The Birlings' daughter, initially shallow and privileged. She undergoes the most significant moral transformation, accepting responsibility and challenging her parents.",
          quotes: [
            {
              quote: "But these girls aren't cheap labour — they're people.",
              analysis:
                "Sheila's empathetic response contrasts sharply with her father's attitude. She represents the hope that the younger generation can change.",
            },
            {
              quote: "I know I'm to blame — and I'm desperately sorry.",
              analysis:
                "Sheila's genuine remorse sets her apart from her parents, who seek to evade responsibility.",
            },
            {
              quote: "You're pretending everything's just as it was before.",
              analysis:
                "Sheila confronts her parents' desire to return to comfortable ignorance, showing she has learned the Inspector's lesson.",
            },
          ],
        },
        eric: {
          name: "Eric Birling",
          description:
            "The Birlings' son, who has a drinking problem. He forced himself on Eva, got her pregnant, and stole money from his father. Like Sheila, he accepts responsibility.",
          quotes: [
            {
              quote: "You're not the kind of father a chap could go to when he's in trouble.",
              analysis:
                "Eric's accusation exposes the failure of the Birling family's relationships. The emphasis on respectability has prevented genuine connection.",
            },
            {
              quote: "We did her in all right.",
              analysis:
                "Eric's blunt, colloquial admission contrasts with his parents' euphemistic evasions. He faces the truth directly.",
            },
          ],
        },
        gerald: {
          name: "Gerald Croft",
          description:
            "Sheila's fiance, from an even wealthier family. He kept Eva as a mistress and, while initially kind to her, ultimately abandoned her.",
          quotes: [
            {
              quote: "She was young and pretty and warm-hearted — and intensely grateful.",
              analysis:
                "Gerald's description reveals how power imbalance shaped the relationship. Eva's 'gratitude' highlights her vulnerability and his advantage.",
            },
          ],
        },
      },
      themes: {
        socialResponsibility: {
          name: "Social Responsibility",
          description:
            "The central message: we are all connected and must care for one another. Priestley uses the Birlings' treatment of Eva to argue for a welfare state and socialist values.",
          keyQuotes: [
            "We are members of one body. We are responsible for each other.",
            "If men will not learn that lesson, then they will be taught it in fire and blood and anguish.",
          ],
        },
        classAndInequality: {
          name: "Class and Inequality",
          description:
            "The Birlings represent the wealthy upper-middle class who exploit the working class. Eva Smith represents all working-class women who suffer at the hands of the privileged.",
          keyQuotes: [
            "Girls of that class.",
            "But these girls aren't cheap labour — they're people.",
          ],
        },
        generationalConflict: {
          name: "Generational Conflict",
          description:
            "The younger Birlings (Sheila and Eric) accept the Inspector's message while the older generation refuses to change. Priestley's hope lies with the young.",
          keyQuotes: [
            "You're pretending everything's just as it was before.",
            "You're not the kind of father a chap could go to when he's in trouble.",
          ],
        },
        genderAndExploitation: {
          name: "Gender and Exploitation",
          description:
            "Eva is exploited by every character, but particularly by the men. The play exposes how patriarchal society leaves working-class women vulnerable.",
          keyQuotes: [
            "She was young and pretty and warm-hearted — and intensely grateful.",
            "She'd had a lot to say — far too much — she'd have to go.",
          ],
        },
        guiltAndResponsibility: {
          name: "Guilt and Responsibility",
          description:
            "The play tests each character's capacity for guilt and self-reflection. Only those who accept guilt show moral growth.",
          keyQuotes: [
            "I know I'm to blame — and I'm desperately sorry.",
            "I accept no blame for it at all.",
          ],
        },
      },
      keyQuotes: [
        { quote: "The Titanic — she sails next week... unsinkable, absolutely unsinkable.", speaker: "Mr Birling", act: "Act 1", analysis: "Dramatic irony undermines Birling's authority and his capitalist optimism." },
        { quote: "A man has to make his own way — has to look after himself.", speaker: "Mr Birling", act: "Act 1", analysis: "Selfish individualism directly opposed to the play's message." },
        { quote: "We are members of one body. We are responsible for each other.", speaker: "Inspector", act: "Act 3", analysis: "The play's thesis statement; Priestley's vision of collective responsibility." },
        { quote: "If men will not learn that lesson, then they will be taught it in fire and blood and anguish.", speaker: "Inspector", act: "Act 3", analysis: "Prophetic warning about the consequences of social irresponsibility." },
        { quote: "But these girls aren't cheap labour — they're people.", speaker: "Sheila", act: "Act 1", analysis: "Sheila's empathy marks the beginning of her moral awakening." },
        { quote: "I know I'm to blame — and I'm desperately sorry.", speaker: "Sheila", act: "Act 2", analysis: "Genuine remorse contrasts with parental denial." },
        { quote: "Girls of that class.", speaker: "Mrs Birling", act: "Act 2", analysis: "Reveals entrenched class snobbery that dehumanises the working class." },
        { quote: "I accept no blame for it at all.", speaker: "Mrs Birling", act: "Act 2", analysis: "Total moral failure; Mrs Birling refuses to learn." },
        { quote: "You're pretending everything's just as it was before.", speaker: "Sheila", act: "Act 3", analysis: "Sheila recognises her parents' moral cowardice." },
        { quote: "We did her in all right.", speaker: "Eric", act: "Act 3", analysis: "Blunt honesty about collective guilt." },
        { quote: "You're not the kind of father a chap could go to when he's in trouble.", speaker: "Eric", act: "Act 3", analysis: "Exposes the failure of the Birling family unit." },
        { quote: "She was young and pretty and warm-hearted — and intensely grateful.", speaker: "Gerald", act: "Act 2", analysis: "Power imbalance in Gerald's relationship with Eva." },
        { quote: "Public men, Mr Birling, have responsibilities as well as privileges.", speaker: "Inspector", act: "Act 1", analysis: "Directly challenges Birling's belief in personal gain without social duty." },
        { quote: "One Eva Smith has gone — but there are millions and millions and millions of Eva Smiths.", speaker: "Inspector", act: "Act 3", analysis: "Eva becomes symbolic of all exploited working-class people." },
        { quote: "If we were all responsible for everything that happened to everybody... it would be very awkward.", speaker: "Mr Birling", act: "Act 1", analysis: "Birling dismisses exactly the principle the play endorses." },
      ],
      context: {
        historical:
          "Written in 1945 at the end of WWII, set in 1912 before WWI. The time gap allows dramatic irony — the audience knows what the characters do not about the wars to come.",
        social:
          "1945 was the year of the Labour landslide election and the creation of the welfare state. Priestley was a passionate socialist who wanted to prevent a return to pre-war inequality.",
        literary:
          "The play uses the structure of a detective thriller but subverts it: the mystery is not who did it but whether the characters will accept moral responsibility.",
        cultural:
          "Priestley's wartime broadcasts on the BBC (Postscripts) had made him a nationally recognised voice for social reform. The play extends his argument for collective responsibility.",
      },
    },
    lordOfTheFlies: {
      title: "Lord of the Flies",
      author: "William Golding",
      examBoard: "OCR",
      year: "1954",
      genre: "Allegorical Novel",
      summary:
        "A group of British schoolboys are stranded on an uninhabited island after a plane crash during a nuclear war. Ralph is elected leader and tries to maintain order, building shelters and keeping a signal fire. Jack, the leader of the choirboys-turned-hunters, becomes increasingly savage. Simon, a spiritual and perceptive boy, discovers the 'beast' is actually a dead parachutist and is killed in a frenzy. Piggy, the voice of reason, is murdered by Roger. Jack's tribe hunts Ralph, who is saved only by the arrival of a naval officer. The boys' descent into savagery reflects Golding's belief in humanity's inherent evil.",
      characters: {
        ralph: {
          name: "Ralph",
          description:
            "The elected leader who represents democracy, order, and civilisation. He tries to maintain rules and a signal fire but gradually loses authority to Jack.",
          quotes: [
            {
              quote: "We've got to have rules and obey them. After all, we're not savages.",
              analysis:
                "Dramatic irony: Ralph insists on civilised behaviour, but the boys will become exactly what he denies. His faith in rules proves insufficient against primal instincts.",
            },
            {
              quote: "Ralph wept for the end of innocence, the darkness of man's heart.",
              analysis:
                "The novel's final image. Ralph's weeping represents the loss of childhood innocence and the devastating recognition of human capacity for evil.",
            },
          ],
        },
        jack: {
          name: "Jack Merridew",
          description:
            "The antagonist who represents savagery, dictatorial power, and the id. He transforms from a choirboy into a violent tribal leader.",
          quotes: [
            {
              quote: "Kill the pig! Cut her throat! Spill her blood!",
              analysis:
                "The hunting chant's rhythmic, ritualistic quality shows how violence becomes a shared, intoxicating experience. The pronoun 'her' connects hunting to gendered violence.",
            },
            {
              quote: "Bollocks to the rules! We're strong — we hunt!",
              analysis:
                "Jack explicitly rejects civilised order in favour of primal strength. Power through force replaces democratic authority.",
            },
          ],
        },
        piggy: {
          name: "Piggy",
          description:
            "Overweight, asthmatic, and bespectacled, Piggy represents intellect, reason, and scientific thinking. He is mocked and ultimately murdered.",
          quotes: [
            {
              quote: "Which is better — to have rules and agree, or to hunt and kill?",
              analysis:
                "Piggy poses the novel's central question moments before his death. His rhetorical question highlights the choice between civilisation and savagery.",
            },
            {
              quote: "I got the conch! I got a right to speak!",
              analysis:
                "Piggy clings to democratic symbols even as they lose all power. His faith in rules and rights is both admirable and tragically naive.",
            },
          ],
        },
        simon: {
          name: "Simon",
          description:
            "A quiet, spiritual boy who represents innate goodness and moral vision. He alone recognises that the beast is internal — the darkness within humanity.",
          quotes: [
            {
              quote: "Maybe there is a beast... maybe it's only us.",
              analysis:
                "Simon's profound insight is the novel's key revelation: evil is not external but an inherent part of human nature.",
            },
            {
              quote: "You knew, didn't you? I'm part of you? Close, close, close!",
              analysis:
                "The Lord of the Flies (pig's head) 'speaks' to Simon, confirming that the beast is within every person. This hallucinatory scene is the novel's moral climax.",
            },
          ],
        },
        roger: {
          name: "Roger",
          description:
            "Jack's lieutenant who represents pure cruelty and sadism. He is the one who kills Piggy by pushing a boulder onto him.",
          quotes: [
            {
              quote: "Roger, with a sense of delirious abandonment, leaned all his weight on the lever.",
              analysis:
                "Roger's murder of Piggy is described with disturbing pleasure. The 'delirious abandonment' shows civilised restraints have been completely stripped away.",
            },
          ],
        },
      },
      themes: {
        civilisationVsSavagery: {
          name: "Civilisation vs Savagery",
          description:
            "The central conflict. Golding suggests that civilisation is a thin veneer that can be easily stripped away, revealing the savage nature beneath.",
          keyQuotes: [
            "We've got to have rules and obey them. After all, we're not savages.",
            "Bollocks to the rules! We're strong — we hunt!",
          ],
        },
        inherentEvil: {
          name: "Inherent Human Evil",
          description:
            "Golding challenges the Rousseauian idea that humans are naturally good. The 'beast' is not an external creature but the darkness within each person.",
          keyQuotes: [
            "Maybe there is a beast... maybe it's only us.",
            "You knew, didn't you? I'm part of you?",
          ],
        },
        powerAndLeadership: {
          name: "Power and Leadership",
          description:
            "Ralph's democratic leadership is overthrown by Jack's authoritarian rule. The novel shows how fear and violence are more effective tools of control than reason and consent.",
          keyQuotes: [
            "I got the conch! I got a right to speak!",
            "Kill the pig! Cut her throat! Spill her blood!",
          ],
        },
        lossOfInnocence: {
          name: "Loss of Innocence",
          description:
            "The boys arrive as children and become killers. Their island experience strips away the innocence of childhood, revealing the adult capacity for evil.",
          keyQuotes: [
            "Ralph wept for the end of innocence, the darkness of man's heart.",
            "The world, that understandable and lawful world, was slipping away.",
          ],
        },
        fearAndTheBeast: {
          name: "Fear and the Beast",
          description:
            "The boys' fear of an imaginary beast is exploited by Jack for power. The real beast, as Simon discovers, is the potential for evil within each boy.",
          keyQuotes: [
            "Maybe there is a beast... maybe it's only us.",
            "Fancy thinking the Beast was something you could hunt and kill!",
          ],
        },
      },
      keyQuotes: [
        { quote: "We've got to have rules and obey them. After all, we're not savages.", speaker: "Ralph", chapter: "Ch. 2", analysis: "Dramatic irony as the boys will become precisely this." },
        { quote: "Kill the pig! Cut her throat! Spill her blood!", speaker: "Hunters", chapter: "Ch. 4", analysis: "Ritualistic chant showing descent into collective savagery." },
        { quote: "Maybe there is a beast... maybe it's only us.", speaker: "Simon", chapter: "Ch. 5", analysis: "The novel's central insight about the nature of evil." },
        { quote: "You knew, didn't you? I'm part of you?", speaker: "Lord of the Flies", chapter: "Ch. 8", analysis: "The pig's head confirms the beast is internal." },
        { quote: "Fancy thinking the Beast was something you could hunt and kill!", speaker: "Lord of the Flies", chapter: "Ch. 8", analysis: "Evil cannot be destroyed because it exists within us." },
        { quote: "Which is better — to have rules and agree, or to hunt and kill?", speaker: "Piggy", chapter: "Ch. 11", analysis: "Piggy's final appeal for civilisation moments before his death." },
        { quote: "I got the conch! I got a right to speak!", speaker: "Piggy", chapter: "Ch. 11", analysis: "Democratic symbols are meaningless against brute force." },
        { quote: "Bollocks to the rules! We're strong — we hunt!", speaker: "Jack", chapter: "Ch. 5", analysis: "Jack's rejection of democracy in favour of might." },
        { quote: "Ralph wept for the end of innocence, the darkness of man's heart.", speaker: "Narrator", chapter: "Ch. 12", analysis: "The novel's devastating final reflection." },
        { quote: "Roger, with a sense of delirious abandonment, leaned all his weight on the lever.", speaker: "Narrator", chapter: "Ch. 11", analysis: "Roger's murder of Piggy shows total loss of moral restraint." },
        { quote: "The world, that understandable and lawful world, was slipping away.", speaker: "Narrator", chapter: "Ch. 5", analysis: "Civilised order disintegrates." },
        { quote: "He began to dance and his laughter became a bloodthirsty snarling.", speaker: "Narrator (about Jack)", chapter: "Ch. 4", analysis: "Jack's transformation from boy to savage is physical and behavioural." },
        { quote: "What are we? Humans? Or animals? Or savages?", speaker: "Piggy", chapter: "Ch. 5", analysis: "Piggy articulates the central question of human nature." },
        { quote: "The conch exploded into a thousand white fragments and ceased to exist.", speaker: "Narrator", chapter: "Ch. 11", analysis: "The conch's destruction symbolises the death of democracy and order." },
        { quote: "The mask was a thing on its own, behind which Jack hid, liberated from shame and self-consciousness.", speaker: "Narrator", chapter: "Ch. 4", analysis: "The painted mask removes individual identity and moral accountability." },
      ],
      context: {
        historical:
          "Published in 1954, in the aftermath of WWII and during the Cold War. Golding served in the Royal Navy and witnessed the horrors of D-Day, which profoundly shaped his view of human nature.",
        social:
          "Post-war disillusionment challenged the idea that civilisation could prevent atrocity. The Holocaust and atomic bomb raised fundamental questions about human nature.",
        literary:
          "Golding explicitly responds to R.M. Ballantyne's 'The Coral Island' (1857), which portrayed shipwrecked boys as virtuous empire-builders. Golding subverts this colonial adventure narrative.",
        cultural:
          "The novel was published during a period of social upheaval and questioning of British imperial identity. The boys' public school backgrounds connect to the class system that produced Britain's leaders.",
      },
    },
    animalFarm: {
      title: "Animal Farm",
      author: "George Orwell",
      examBoard: "OCR",
      year: "1945",
      genre: "Allegorical Novella / Political Satire",
      summary:
        "The animals of Manor Farm, led by the pigs, overthrow their drunken farmer Mr Jones. They establish 'Animal Farm' based on the principles of Animalism: all animals are equal. The pigs Napoleon and Snowball compete for leadership. Napoleon uses his private army of dogs to expel Snowball and seizes dictatorial power. Gradually, the pigs adopt human behaviours — walking upright, wearing clothes, drinking alcohol, and trading with humans. The commandments are altered, and the final one reads: 'All animals are equal, but some animals are more equal than others.' By the end, the animals cannot distinguish the pigs from the humans.",
      characters: {
        napoleon: {
          name: "Napoleon",
          description:
            "A Berkshire boar who represents Joseph Stalin. He is cunning, ruthless, and uses fear and propaganda to maintain absolute power.",
          quotes: [
            {
              quote: "Napoleon is always right.",
              analysis:
                "This mantra, repeated by Boxer, shows how dictators use cult of personality and unquestioning loyalty to maintain power.",
            },
            {
              quote: "All animals are equal, but some animals are more equal than others.",
              analysis:
                "The final corruption of Animalism into its opposite. The logical impossibility exposes the hypocrisy of totalitarian regimes that claim to serve the people.",
            },
          ],
        },
        snowball: {
          name: "Snowball",
          description:
            "An intelligent and idealistic pig who represents Leon Trotsky. He genuinely works for the animals' welfare but is expelled by Napoleon's dogs.",
          quotes: [
            {
              quote: "Snowball had made his plans for the windmill from a journal of 'Farming and Livestock' belonging to Mr Jones.",
              analysis:
                "Snowball's practical vision for improving the farm is later stolen by Napoleon, who claims credit, mirroring how Stalin appropriated Trotsky's ideas.",
            },
          ],
        },
        boxer: {
          name: "Boxer",
          description:
            "A loyal, hardworking carthorse who represents the exploited working class. His mottos are 'I will work harder' and 'Napoleon is always right.'",
          quotes: [
            {
              quote: "I will work harder.",
              analysis:
                "Boxer's response to every problem is more effort, representing the exploited proletariat who believe hard work alone will improve their situation.",
            },
            {
              quote: "Napoleon is always right.",
              analysis:
                "Boxer's blind faith prevents him from questioning authority. His loyalty is rewarded with betrayal when Napoleon sends him to the knacker.",
            },
          ],
        },
        squealer: {
          name: "Squealer",
          description:
            "Napoleon's propagandist, a pig who represents Pravda and state-controlled media. He manipulates language to justify the pigs' actions.",
          quotes: [
            {
              quote: "Surely, comrades, you do not want Jones back?",
              analysis:
                "Squealer's rhetorical question exploits the animals' fear of the past to suppress any criticism of the present regime.",
            },
            {
              quote: "He could turn black into white.",
              analysis:
                "Squealer's ability to distort truth represents the power of propaganda to reshape reality.",
            },
          ],
        },
        oldMajor: {
          name: "Old Major",
          description:
            "An elderly prize boar whose speech inspires the rebellion. He represents Karl Marx and Vladimir Lenin, whose ideals are corrupted after their deaths.",
          quotes: [
            {
              quote: "All men are enemies. All animals are comrades.",
              analysis:
                "Old Major's binary vision is idealistic but simplistic. It fails to account for the possibility that animals (the revolutionaries) might become oppressors themselves.",
            },
          ],
        },
        benjamin: {
          name: "Benjamin",
          description:
            "A cynical old donkey who sees through the pigs' lies but refuses to act. He represents political apathy and the danger of cynicism without action.",
          quotes: [
            {
              quote: "Donkeys live a long time. None of you has ever seen a dead donkey.",
              analysis:
                "Benjamin's fatalism reflects those who see injustice but do nothing. His passivity enables the pigs' tyranny.",
            },
          ],
        },
      },
      themes: {
        powerAndCorruption: {
          name: "Power and Corruption",
          description:
            "The central theme: power corrupts absolutely. The pigs begin as liberators and end as tyrants, becoming indistinguishable from the humans they overthrew.",
          keyQuotes: [
            "All animals are equal, but some animals are more equal than others.",
            "The creatures outside looked from pig to man, and from man to pig... it was impossible to say which was which.",
          ],
        },
        propagandaAndLanguage: {
          name: "Propaganda and Language",
          description:
            "Orwell shows how language is manipulated to control thought. The commandments are gradually altered, and Squealer's rhetoric suppresses dissent.",
          keyQuotes: [
            "He could turn black into white.",
            "Surely, comrades, you do not want Jones back?",
          ],
        },
        classExploitation: {
          name: "Class and Exploitation",
          description:
            "The revolution promises equality but creates a new ruling class. The working animals (especially Boxer) are exploited by the intellectual elite (pigs).",
          keyQuotes: [
            "I will work harder.",
            "Napoleon is always right.",
          ],
        },
        revolutionBetrayed: {
          name: "Revolution Betrayed",
          description:
            "The novella shows how revolutionary ideals are corrupted by those who seize power. The cycle of oppression continues under new management.",
          keyQuotes: [
            "All animals are equal, but some animals are more equal than others.",
            "All men are enemies. All animals are comrades.",
          ],
        },
        ignoranceAndApathy: {
          name: "Ignorance and Apathy",
          description:
            "The animals' inability to read and their willingness to accept the pigs' explanations enables tyranny. Benjamin's knowing inaction is equally culpable.",
          keyQuotes: [
            "Donkeys live a long time.",
            "The animals could not remember whether the commandment had always been like that.",
          ],
        },
      },
      keyQuotes: [
        { quote: "All animals are equal.", speaker: "Seven Commandments", chapter: "Ch. 2", analysis: "The founding principle of Animalism, which is gradually corrupted." },
        { quote: "All animals are equal, but some animals are more equal than others.", speaker: "Revised commandment", chapter: "Ch. 10", analysis: "The ultimate corruption: equality becomes a justification for inequality." },
        { quote: "Four legs good, two legs bad.", speaker: "Sheep", chapter: "Ch. 3", analysis: "Complex ideology reduced to a slogan; shows how propaganda simplifies thought." },
        { quote: "Four legs good, two legs better!", speaker: "Sheep", chapter: "Ch. 10", analysis: "The chant's reversal shows how propaganda can completely invert meaning." },
        { quote: "I will work harder.", speaker: "Boxer", chapter: "Ch. 3", analysis: "Boxer's naive faith that effort alone will solve everything." },
        { quote: "Napoleon is always right.", speaker: "Boxer", chapter: "Ch. 5", analysis: "Blind loyalty to authority enables dictatorship." },
        { quote: "He could turn black into white.", speaker: "Narrator (about Squealer)", chapter: "Ch. 2", analysis: "Propaganda's power to distort reality." },
        { quote: "Surely, comrades, you do not want Jones back?", speaker: "Squealer", chapter: "Ch. 5", analysis: "Fear of the past is used to prevent criticism of the present." },
        { quote: "The creatures outside looked from pig to man, and from man to pig... it was impossible to say which was which.", speaker: "Narrator", chapter: "Ch. 10", analysis: "The revolutionaries have become identical to the oppressors they replaced." },
        { quote: "All men are enemies. All animals are comrades.", speaker: "Old Major", chapter: "Ch. 1", analysis: "Idealistic but fatally simplistic worldview." },
        { quote: "Donkeys live a long time. None of you has ever seen a dead donkey.", speaker: "Benjamin", chapter: "Ch. 3", analysis: "Cynical fatalism that enables tyranny through inaction." },
        { quote: "No animal shall sleep in a bed with sheets.", speaker: "Revised commandment", chapter: "Ch. 6", analysis: "The sly addition of 'with sheets' shows how rules are manipulated." },
        { quote: "No animal shall drink alcohol to excess.", speaker: "Revised commandment", chapter: "Ch. 8", analysis: "Another commandment altered to accommodate the pigs' behaviour." },
        { quote: "The only good human being is a dead one.", speaker: "Old Major", chapter: "Ch. 1", analysis: "Revolutionary rhetoric that dehumanises the enemy." },
        { quote: "If you have your lower animals to contend with, we have our lower classes.", speaker: "Mr Pilkington", chapter: "Ch. 10", analysis: "The human farmers explicitly compare animal oppression to class oppression." },
      ],
      context: {
        historical:
          "Published in 1945, the novella allegorises the Russian Revolution (1917) and the rise of Stalinism. Old Major = Marx/Lenin, Napoleon = Stalin, Snowball = Trotsky, Boxer = the proletariat.",
        social:
          "Orwell was a democratic socialist who opposed Stalinism. He struggled to find a publisher because the Soviet Union was Britain's wartime ally and publishers feared offending them.",
        literary:
          "The beast fable tradition (Aesop, La Fontaine) allows Orwell to make complex political points accessible. The simplicity of the prose mirrors the simplicity the pigs exploit.",
        cultural:
          "The book became a Cold War text, used by Western governments to critique communism. However, Orwell's target was specifically Stalinism, not socialism itself.",
      },
    },
    theWomanInBlack: {
      title: "The Woman in Black",
      author: "Susan Hill",
      examBoard: "OCR",
      year: "1983",
      genre: "Gothic Horror",
      summary:
        "Arthur Kipps, a young solicitor, is sent to the remote Eel Marsh House to settle the estate of the recently deceased Mrs Alice Drablow. The house is accessible only by a causeway that floods at high tide, cutting it off from the town of Crythin Gifford. Arthur encounters the ghost of Jennet Humfrye, the 'woman in black,' whose appearances are connected to the deaths of children. Despite warnings from the locals, Arthur stays and witnesses terrifying events. Years later, the woman in black appears again, causing the death of Arthur's wife and child in a carriage accident.",
      characters: {
        arthurKipps: {
          name: "Arthur Kipps",
          description:
            "The narrator and protagonist. Initially rational and sceptical, his encounters at Eel Marsh House transform him into a haunted, traumatised man.",
          quotes: [
            {
              quote: "I was not afraid of ghosts... I was not afraid of anything.",
              analysis:
                "Arthur's early confidence and rationalism is dramatically ironic. His certainty will be systematically dismantled by supernatural experiences.",
            },
            {
              quote: "They have been coming to me in nightmares... for all these years.",
              analysis:
                "The frame narrative reveals that the events have left permanent psychological scars. The horror continues long after the events themselves.",
            },
          ],
        },
        jennetHumfrye: {
          name: "Jennet Humfrye (The Woman in Black)",
          description:
            "The ghost whose appearances herald the death of a child. Her rage stems from having her son taken from her and his subsequent death.",
          quotes: [
            {
              quote: "Her face, in its dreadful ravaged pallor... expressed malevolence and bitter anger.",
              analysis:
                "The woman in black's appearance combines suffering and rage. Her wasted face suggests both death and consuming hatred.",
            },
          ],
        },
        samuelDaily: {
          name: "Samuel Daily",
          description:
            "A local landowner who befriends Arthur. He represents practical knowledge and warns Arthur about the danger, though ultimately cannot protect him.",
          quotes: [
            {
              quote: "You don't have to go... there is nothing you need concern yourself with there.",
              analysis:
                "Samuel's oblique warning hints at the horror without revealing it directly. The locals' conspiracy of silence creates atmospheric tension.",
            },
          ],
        },
      },
      themes: {
        isolation: {
          name: "Isolation",
          description:
            "Eel Marsh House's physical isolation mirrors Arthur's psychological isolation. The causeway's flooding traps him with the supernatural, and his trauma later isolates him emotionally.",
          keyQuotes: [
            "I had never been quite so alone, nor felt quite so small and insignificant.",
            "The mist... surrounded and enclosed me as though I were in a damp, clinging web.",
          ],
        },
        theSupernaturalAndFear: {
          name: "The Supernatural and Fear",
          description:
            "Hill uses classic Gothic techniques — isolation, atmosphere, suggestion — to create terror. The supernatural is presented as genuinely malevolent and inescapable.",
          keyQuotes: [
            "I was not afraid of ghosts.",
            "Her face... expressed malevolence and bitter anger.",
          ],
        },
        griefAndLoss: {
          name: "Grief and Loss",
          description:
            "Jennet's grief at losing her son drives her vengeful haunting. Arthur's own loss at the end mirrors Jennet's, creating a tragic cycle of bereavement.",
          keyQuotes: [
            "They have been coming to me in nightmares... for all these years.",
            "She wanted them to suffer as she had suffered.",
          ],
        },
        vengeanceAndInjustice: {
          name: "Vengeance and Injustice",
          description:
            "Jennet's haunting is motivated by the injustice of having her child taken. Her revenge, however, is indiscriminate, targeting innocent children.",
          keyQuotes: [
            "Whenever she has been seen... a child has died.",
            "She wanted them to suffer as she had suffered.",
          ],
        },
        powerOfThePast: {
          name: "The Power of the Past",
          description:
            "The past refuses to stay buried. Mrs Drablow's secrets, Jennet's suffering, and the town's history all reach into the present with destructive consequences.",
          keyQuotes: [
            "The events... are written about here for the first time.",
            "I had been afraid... with a fear which mounted and overwhelmed me.",
          ],
        },
      },
      keyQuotes: [
        { quote: "I was not afraid of ghosts... I was not afraid of anything.", speaker: "Arthur", chapter: "Ch. 1", analysis: "Dramatic irony establishes Arthur's vulnerability through false confidence." },
        { quote: "They have been coming to me in nightmares... for all these years.", speaker: "Arthur", chapter: "Ch. 1", analysis: "Frame narrative reveals lasting psychological damage." },
        { quote: "I had never been quite so alone, nor felt quite so small and insignificant.", speaker: "Arthur", chapter: "Ch. 5", analysis: "Isolation amplifies vulnerability and fear." },
        { quote: "The mist... surrounded and enclosed me as though I were in a damp, clinging web.", speaker: "Arthur", chapter: "Ch. 5", analysis: "Pathetic fallacy: the landscape itself traps and threatens." },
        { quote: "Her face, in its dreadful ravaged pallor... expressed malevolence and bitter anger.", speaker: "Arthur", chapter: "Ch. 3", analysis: "First clear description of the ghost combines horror with suffering." },
        { quote: "Whenever she has been seen... a child has died.", speaker: "Samuel Daily", chapter: "Ch. 9", analysis: "Reveals the ghost's terrible pattern of vengeance." },
        { quote: "She wanted them to suffer as she had suffered.", speaker: "Narrator", chapter: "Ch. 9", analysis: "Explains Jennet's motivation: shared suffering." },
        { quote: "You don't have to go.", speaker: "Samuel Daily", chapter: "Ch. 2", analysis: "Warning that Arthur ignores at his cost." },
        { quote: "It was not a rat or a dog or any other animal... it was a child.", speaker: "Arthur", chapter: "Ch. 6", analysis: "The sounds of the pony trap and drowning child are the novel's most terrifying moment." },
        { quote: "I saw the woman in black.", speaker: "Arthur", chapter: "Ch. 3", analysis: "Simple, stark statement that carries enormous weight through repetition." },
        { quote: "In another moment I would be on my knees before her pleading for mercy.", speaker: "Arthur", chapter: "Ch. 6", analysis: "Arthur's rational mind collapses under supernatural terror." },
        { quote: "I had been afraid... with a fear which mounted and overwhelmed me.", speaker: "Arthur", chapter: "Ch. 6", analysis: "Building fear reflects Gothic conventions of escalating horror." },
        { quote: "The events... are written about here for the first time.", speaker: "Arthur", chapter: "Ch. 1", analysis: "The act of writing is both therapeutic and a warning." },
        { quote: "I did not believe in ghosts. But I had heard a ghost.", speaker: "Arthur", chapter: "Ch. 5", analysis: "Arthur's rational worldview begins to crack." },
        { quote: "She was in my mind... like a sickness.", speaker: "Arthur", chapter: "Ch. 9", analysis: "The haunting becomes psychological as well as supernatural." },
      ],
      context: {
        historical:
          "Published in 1983, the novel is set in the Edwardian era. Hill deliberately evokes the Victorian and Edwardian ghost story tradition of writers like M.R. James and Henry James.",
        social:
          "The novel explores attitudes toward unmarried mothers (Jennet) and adoption. The cruelty of separating mother and child reflects real historical practices.",
        literary:
          "Hill draws on Gothic conventions: isolated setting, unreliable narrator, the uncanny, pathetic fallacy. The frame narrative (Arthur writing years later) adds layers of reflection and trauma.",
        cultural:
          "The 1989 stage adaptation became one of the longest-running plays in London's West End, demonstrating the story's enduring power to terrify through suggestion rather than graphic horror.",
      },
    },
    anitaAndMe: {
      title: "Anita and Me",
      author: "Meera Syal",
      examBoard: "OCR",
      year: "1996",
      genre: "Semi-autobiographical Novel / Coming-of-Age",
      summary:
        "Nine-year-old Meena Kumar is the daughter of the only Punjabi family in the fictional Black Country village of Tollington in the 1960s. She idolises the bold, rebellious Anita Rutter, a white working-class girl who becomes her best friend. Through their friendship, Meena navigates issues of cultural identity, racism, and belonging. As she matures, Meena recognises Anita's limitations and casual racism. A serious illness forces Meena to re-evaluate her priorities, and she ultimately embraces her Indian heritage while accepting that she and Anita have grown apart.",
      characters: {
        meena: {
          name: "Meena Kumar",
          description:
            "The narrator, a bright and imaginative Punjabi girl who struggles to reconcile her Indian heritage with her desire to fit into English village life.",
          quotes: [
            {
              quote: "I was the only dark face for miles around.",
              analysis:
                "Simple statement that captures Meena's isolation and visibility as an ethnic minority in a white community. Her difference is inescapable.",
            },
            {
              quote: "I wanted to be part of their gang, to speak their language, to know their customs.",
              analysis:
                "Meena's desire for belonging drives her to suppress her Indian identity. The ironic use of 'customs' — usually applied to foreign cultures — shows how English working-class culture is exotic to her.",
            },
            {
              quote: "I knew I was not a bad girl... I was just a girl who wanted to be somebody else.",
              analysis:
                "Meena's struggle with identity is the novel's emotional core. She is not rebelling but searching for a sense of self.",
            },
          ],
        },
        anita: {
          name: "Anita Rutter",
          description:
            "A confident, streetwise white girl who Meena idolises. She is bold and charismatic but also neglected, uneducated, and casually racist.",
          quotes: [
            {
              quote: "Anita was the queen of our yard.",
              analysis:
                "Meena's admiration elevates Anita to royalty. The small domain of 'our yard' is ironic — Anita's power is limited to a tiny, impoverished world.",
            },
            {
              quote: "I don't care what colour you are... just don't act like one of them.",
              analysis:
                "Anita's conditional acceptance reveals the racism underlying their friendship. Meena is tolerated only if she suppresses her heritage.",
            },
          ],
        },
        meenasMother: {
          name: "Meena's Mother (Daljit)",
          description:
            "A dignified, loving mother who maintains Indian traditions and values while adapting to English life. She represents the strength of cultural identity.",
          quotes: [
            {
              quote: "You are what your parents are, beta. That is your blood.",
              analysis:
                "Her mother's emphasis on heritage and blood provides a counterpoint to Meena's desire to assimilate. 'Beta' (term of endearment) reinforces cultural connection.",
            },
          ],
        },
        meenasFather: {
          name: "Meena's Father (Shyam)",
          description:
            "An educated, gentle man who faces racism with quiet dignity. He represents the immigrant experience of maintaining integrity in a hostile environment.",
          quotes: [
            {
              quote: "Always be polite to these people... they are not used to us yet.",
              analysis:
                "His measured response to racism shows patience but also the burden of constantly managing white discomfort.",
            },
          ],
        },
      },
      themes: {
        identityAndBelonging: {
          name: "Identity and Belonging",
          description:
            "Meena's central struggle is reconciling her Indian heritage with her desire to belong in English society. She exists between two cultures, feeling fully accepted by neither.",
          keyQuotes: [
            "I was the only dark face for miles around.",
            "I knew I was not a bad girl... I was just a girl who wanted to be somebody else.",
          ],
        },
        racismAndPrejudice: {
          name: "Racism and Prejudice",
          description:
            "The novel portrays racism ranging from casual comments to overt hostility. Set in the 1960s, it captures the experience of immigrant families in small-town England.",
          keyQuotes: [
            "I don't care what colour you are... just don't act like one of them.",
            "Always be polite to these people... they are not used to us yet.",
          ],
        },
        friendshipAndGrowingUp: {
          name: "Friendship and Growing Up",
          description:
            "Meena's friendship with Anita is the vehicle for her coming-of-age. She must outgrow Anita to find her true self, learning that fitting in is not the same as belonging.",
          keyQuotes: [
            "Anita was the queen of our yard.",
            "I wanted to be part of their gang.",
          ],
        },
        communityAndClass: {
          name: "Community and Class",
          description:
            "Tollington is a working-class community experiencing economic decline. The Kumars' education and aspirations set them apart, complicating their position in the village.",
          keyQuotes: [
            "Tollington was a forgotten, passed-over place.",
            "We were them posh Indians.",
          ],
        },
        familyAndHeritage: {
          name: "Family and Heritage",
          description:
            "Meena's Indian family provides warmth, storytelling, and cultural richness that contrast with Anita's neglected home life. Syal celebrates Indian culture without idealising it.",
          keyQuotes: [
            "You are what your parents are, beta. That is your blood.",
            "The stories my parents told me... were like fairy tales from another world.",
          ],
        },
      },
      keyQuotes: [
        { quote: "I was the only dark face for miles around.", speaker: "Meena", chapter: "Ch. 1", analysis: "Establishes Meena's isolation and visibility." },
        { quote: "I wanted to be part of their gang, to speak their language, to know their customs.", speaker: "Meena", chapter: "Ch. 2", analysis: "Desire for belonging drives Meena's actions." },
        { quote: "I knew I was not a bad girl... I was just a girl who wanted to be somebody else.", speaker: "Meena", chapter: "Ch. 3", analysis: "Identity crisis at the heart of the novel." },
        { quote: "Anita was the queen of our yard.", speaker: "Meena", chapter: "Ch. 1", analysis: "Anita's charisma is ironic given her limited world." },
        { quote: "I don't care what colour you are... just don't act like one of them.", speaker: "Anita", chapter: "Ch. 8", analysis: "Conditional acceptance reveals underlying racism." },
        { quote: "You are what your parents are, beta. That is your blood.", speaker: "Meena's mother", chapter: "Ch. 5", analysis: "Heritage as identity anchor." },
        { quote: "Always be polite to these people... they are not used to us yet.", speaker: "Meena's father", chapter: "Ch. 3", analysis: "Immigrant burden of managing others' prejudice." },
        { quote: "Tollington was a forgotten, passed-over place.", speaker: "Meena", chapter: "Ch. 1", analysis: "Setting reflects marginalisation and decline." },
        { quote: "We were them posh Indians.", speaker: "Meena", chapter: "Ch. 2", analysis: "The Kumars' education complicates their class position." },
        { quote: "The stories my parents told me... were like fairy tales from another world.", speaker: "Meena", chapter: "Ch. 4", analysis: "Indian heritage is exotic but remote to young Meena." },
        { quote: "I finally knew where I belonged.", speaker: "Meena", chapter: "Ch. 12", analysis: "Resolution: Meena accepts her dual identity." },
        { quote: "I was a chameleon, changing colours depending on where I was.", speaker: "Meena", chapter: "Ch. 6", analysis: "Meena adapts to different cultural contexts." },
        { quote: "She was everything I wanted to be: daring, rude, and utterly free.", speaker: "Meena (about Anita)", chapter: "Ch. 1", analysis: "Anita represents freedom from cultural expectations." },
        { quote: "I felt my roots wrapping themselves around me.", speaker: "Meena", chapter: "Ch. 11", analysis: "Roots metaphor shows Meena embracing her heritage." },
        { quote: "Growing up is about learning who you really are.", speaker: "Meena", chapter: "Ch. 12", analysis: "The novel's conclusion: identity comes from self-knowledge, not imitation." },
      ],
      context: {
        historical:
          "Set in the late 1960s during a period of significant immigration from former British colonies. Enoch Powell's 'Rivers of Blood' speech (1968) inflamed racial tensions.",
        social:
          "The novel captures the experience of South Asian immigrants in working-class England. Cultural clashes, casual racism, and the struggle to maintain identity while assimilating are central concerns.",
        literary:
          "The novel is semi-autobiographical, based on Syal's own childhood in Essington, Staffordshire. It combines humour with serious social commentary in the tradition of coming-of-age fiction.",
        cultural:
          "Syal is a prominent figure in British Asian culture (writer, actress, comedian). The novel was adapted into a film (2002) and contributed to the growing visibility of British Asian stories.",
      },
    },
  },

  poetry: {
    loveAndRelationships: {
      title: "OCR Love and Relationships Poetry Anthology",
      examBoard: "OCR",
      poems: {
        sonnet43: {
          title: "Sonnet 43 (How Do I Love Thee?)",
          poet: "Elizabeth Barrett Browning",
          year: "1850",
          form: "Petrarchan sonnet",
          summary:
            "The speaker catalogues the many ways and dimensions of her love, comparing it to everyday needs, political ideals, and religious faith. The love described is absolute and transcendent.",
          keyQuotes: [
            {
              quote: "How do I love thee? Let me count the ways.",
              analysis:
                "The opening rhetorical question structures the poem as an enumeration. 'Count' suggests attempting to quantify something immeasurable.",
            },
            {
              quote: "I love thee to the depth and breadth and height My soul can reach.",
              analysis:
                "Spatial metaphor gives love physical dimensions, suggesting it fills her entire being. The soul's capacity defines the extent of love.",
            },
            {
              quote: "I love thee with a love I seemed to lose With my lost saints.",
              analysis:
                "Connects romantic love with religious devotion. Childhood faith has been replaced by love, giving it a sacred quality.",
            },
            {
              quote: "I shall but love thee better after death.",
              analysis:
                "Love transcends mortality. The final line elevates their relationship beyond earthly constraints.",
            },
          ],
          themes: ["Intense romantic love", "Spiritual devotion", "Immortality of love"],
          comparisonLinks: ["La Belle Dame sans Merci (obsessive love)", "Valentine (unconventional love declarations)", "Sonnet 116 (eternal love)"],
        },
        laBelleDameSansMerci: {
          title: "La Belle Dame sans Merci",
          poet: "John Keats",
          year: "1819",
          form: "Ballad",
          summary:
            "A knight recounts being seduced by a beautiful, mysterious woman ('la belle dame') who takes him to her cave, where he falls asleep and dreams of pale kings and warriors who warn him he is in her thrall. He wakes alone on a cold hillside, wasting away.",
          keyQuotes: [
            {
              quote: "O what can ail thee, knight-at-arms, Alone and palely loitering?",
              analysis:
                "The opening question establishes the knight's desolate state. 'Palely loitering' suggests both physical weakness and aimless existence.",
            },
            {
              quote: "She look'd at me as she did love, And made sweet moan.",
              analysis:
                "Ambiguity: 'as she did love' means 'as if she loved' — the appearance of love, not necessarily real love. This captures the poem's theme of deception.",
            },
            {
              quote: "I saw pale kings and princes too, Pale warriors, death-pale were they all.",
              analysis:
                "The repetition of 'pale' creates a vision of death. The knight's predecessors warn him but he cannot escape.",
            },
            {
              quote: "And I awoke and found me here, On the cold hill's side.",
              analysis:
                "The abrupt awakening strips away the enchantment, leaving only desolation. The cold landscape mirrors emotional emptiness.",
            },
          ],
          themes: ["Destructive love", "Enchantment and entrapment", "Loss and isolation"],
          comparisonLinks: ["Sonnet 43 (contrasting types of love)", "Porphyria's Lover (obsessive love with power dynamics)", "A Complaint (abandoned love)"],
        },
        porphyriasLover: {
          title: "Porphyria's Lover",
          poet: "Robert Browning",
          year: "1836",
          form: "Dramatic monologue",
          summary:
            "The speaker describes his lover Porphyria arriving at his cottage in a storm. Realising she loves him completely in this moment, he strangles her with her own hair to preserve the perfection of the moment forever. He sits with her body all night, noting that 'God has not said a word.'",
          keyQuotes: [
            {
              quote: "That moment she was mine, mine, fair, Perfectly pure and good.",
              analysis:
                "The possessive repetition of 'mine' reveals the speaker's desire to own Porphyria. 'Pure and good' is deeply ironic given the murder he has just committed.",
            },
            {
              quote: "I found A thing to do, and all her hair In three yellow strings I wound... and strangled her.",
              analysis:
                "The casual, matter-of-fact tone is chilling. 'A thing to do' reduces murder to a simple task, revealing psychopathic detachment.",
            },
            {
              quote: "And yet God has not said a word!",
              analysis:
                "The final line's exclamation mark suggests triumph — the speaker expects divine punishment that does not come. This absence of judgement is deeply unsettling.",
            },
          ],
          themes: ["Obsessive love", "Power and control", "Madness", "Morality"],
          comparisonLinks: ["La Belle Dame sans Merci (destructive love)", "My Last Duchess (male control over women)", "Sonnet 43 (contrasting expressions of love)"],
        },
        valentine: {
          title: "Valentine",
          poet: "Carol Ann Duffy",
          year: "1993",
          form: "Free verse",
          summary:
            "The speaker rejects conventional Valentine's gifts (roses, satin hearts) in favour of an onion, which she presents as an honest metaphor for love — it makes you cry, it is fierce, it clings to you, and at its centre is a smaller version of itself.",
          keyQuotes: [
            {
              quote: "Not a red rose or a satin heart. I give you an onion.",
              analysis:
                "The blunt opening rejects romantic cliches. The onion as love token is deliberately unromantic, insisting on honesty over sentimentality.",
            },
            {
              quote: "It will blind you with tears like a lover.",
              analysis:
                "Love causes pain — tears — like an onion. The simile works in both directions, making the unusual comparison feel inevitable.",
            },
            {
              quote: "Its fierce kiss will stay on your lips, possessive and faithful.",
              analysis:
                "The taste of onion lingers, like the memory of a relationship. 'Possessive and faithful' are contradictory qualities that capture love's complexity.",
            },
            {
              quote: "Lethal. Its scent will cling to your fingers, cling to your knife.",
              analysis:
                "The final stanza turns dark. 'Lethal' and 'knife' introduce violence, suggesting love can be dangerous and inescapable.",
            },
          ],
          themes: ["Unconventional love", "Honesty vs sentimentality", "Love's danger"],
          comparisonLinks: ["Sonnet 43 (conventional vs unconventional declarations)", "Porphyria's Lover (dark side of love)", "Nettles (love expressed through unusual imagery)"],
        },
        nettles: {
          title: "Nettles",
          poet: "Vernon Scannell",
          year: "1962",
          form: "Single stanza, sonnet-length",
          summary:
            "A father tends to his young son who has fallen into a bed of nettles. He soothes the boy, then attacks the nettles with a billhook, but they grow back. The military metaphor reveals the father's awareness that he cannot always protect his child.",
          keyQuotes: [
            {
              quote: "My son aged three fell in the nettle bed. 'Bed' seemed a first kind word for so much pain.",
              analysis:
                "The pun on 'bed' contrasts comfort with harm. The father's observation reveals his sensitivity to language and his child's suffering.",
            },
            {
              quote: "I took my billhook, honed the blade And went outside and slashed in fury.",
              analysis:
                "Military-sounding action verbs ('honed,' 'slashed') transform gardening into warfare. The father fights nature itself to protect his child.",
            },
            {
              quote: "My son would often feel sharp wounds again. Tall nettles waited like an army.",
              analysis:
                "The nettles regenerate, symbolising the inevitability of future pain. The military simile reflects Scannell's experience as a soldier.",
            },
          ],
          themes: ["Parental love", "Protection and vulnerability", "War and violence"],
          comparisonLinks: ["Valentine (love through unusual imagery)", "Sonnet 43 (different forms of love)", "A Complaint (helplessness in love)"],
        },
        myLastDuchess: {
          title: "My Last Duchess",
          poet: "Robert Browning",
          year: "1842",
          form: "Dramatic monologue, rhyming couplets",
          summary:
            "The Duke of Ferrara shows a visitor a portrait of his late wife, the 'last Duchess.' Through his description, the Duke reveals his possessiveness, jealousy, and implied responsibility for her death. He objected to her being too friendly and easily pleased by others.",
          keyQuotes: [
            {
              quote: "That's my last Duchess painted on the wall, Looking as if she were alive.",
              analysis:
                "The opening line is chillingly casual. 'As if she were alive' implies she is dead, and the portrait is now the only form in which the Duke can control her.",
            },
            {
              quote: "She had A heart — how shall I say? — too soon made glad.",
              analysis:
                "The Duke's complaint is that his wife was too easily pleased by others. The pause ('how shall I say?') reveals careful self-censorship hiding violent jealousy.",
            },
            {
              quote: "I gave commands; Then all smiles stopped together.",
              analysis:
                "The most sinister line: euphemistic language barely conceals that the Duke had his wife killed. 'Commands' suggests absolute power exercised without remorse.",
            },
            {
              quote: "Notice Neptune, though, Taming a sea-horse, thought a rarity.",
              analysis:
                "The Duke's final reference to a sculpture of Neptune taming a creature mirrors his desire to control women. Art becomes a tool of dominance.",
            },
          ],
          themes: ["Power and control", "Jealousy", "Objectification of women", "Art and possession"],
          comparisonLinks: ["Porphyria's Lover (male control, murder)", "Valentine (possessive love)", "Sonnet 43 (contrasting loving vs controlling relationships)"],
        },
        aComplaint: {
          title: "A Complaint",
          poet: "William Wordsworth",
          year: "1807",
          form: "Three stanzas, regular rhythm",
          summary:
            "The speaker mourns the loss of a deep emotional connection with someone whose love once flowed freely like a fountain. Now that warmth has dried up, leaving only a 'comfortless and hidden well' — the relationship has become cold and distant.",
          keyQuotes: [
            {
              quote: "There is a change — and I am poor.",
              analysis:
                "Simple, devastating statement. The emotional loss is expressed as impoverishment, suggesting the speaker's wellbeing depended on the other's love.",
            },
            {
              quote: "A well of love — it may be deep — I trust it is, — and never dry.",
              analysis:
                "The speaker tries to reassure himself that love still exists beneath the surface, but the dashes convey uncertainty and desperation.",
            },
            {
              quote: "A comfortless and hidden well.",
              analysis:
                "The once-flowing fountain has become a hidden well — the love may still exist but is inaccessible, offering no comfort.",
            },
          ],
          themes: ["Loss of love", "Emotional change", "Dependency"],
          comparisonLinks: ["La Belle Dame sans Merci (love withdrawn)", "Nettles (vulnerability in love)", "Sonnet 43 (love's abundance vs its absence)"],
        },
        sonnet116: {
          title: "Sonnet 116 (Let me not to the marriage of true minds)",
          poet: "William Shakespeare",
          year: "1609",
          form: "Shakespearean sonnet",
          summary:
            "The speaker defines true love as constant and unchanging. It does not alter when circumstances change, is not shaken by time or death, and serves as a fixed guide like a star for lost ships.",
          keyQuotes: [
            {
              quote: "Let me not to the marriage of true minds Admit impediments.",
              analysis:
                "Echoes the marriage service ('if any know of impediments'). True love is a spiritual union of minds, not just bodies.",
            },
            {
              quote: "Love is not love Which alters when it alteration finds.",
              analysis:
                "True love is defined by what it is NOT — changeable. The repetition of 'alter/alteration' reinforces the message of constancy.",
            },
            {
              quote: "It is an ever-fixed mark That looks on tempests and is never shaken.",
              analysis:
                "The nautical metaphor of a lighthouse or star positions love as a guide through life's storms. 'Ever-fixed' emphasises permanence.",
            },
            {
              quote: "Love's not Time's fool, though rosy lips and cheeks Within his bending sickle's compass come.",
              analysis:
                "Personified Time with a sickle (like death) destroys physical beauty but cannot touch true love. Love transcends mortality.",
            },
          ],
          themes: ["Eternal love", "Constancy", "Love's transcendence"],
          comparisonLinks: ["Sonnet 43 (eternal, devoted love)", "A Complaint (love that does change)", "Valentine (different definition of love)"],
        },
        toHisCoyMistress: {
          title: "To His Coy Mistress",
          poet: "Andrew Marvell",
          year: "c. 1650s",
          form: "Three-section argument, rhyming couplets",
          summary:
            "The speaker attempts to persuade his reluctant lover to sleep with him. He argues: if they had infinite time, her coyness would be fine; but time is short and death approaches; therefore, they should seize the moment and enjoy their youth together.",
          keyQuotes: [
            {
              quote: "Had we but world enough and time, This coyness, lady, were no crime.",
              analysis:
                "The conditional 'had we' establishes a hypothetical that the speaker will demolish. The logical structure mimics a philosophical argument.",
            },
            {
              quote: "But at my back I always hear Time's wingèd chariot hurrying near.",
              analysis:
                "Personified Time pursuing them creates urgency. The image is both grand and threatening, shifting the poem's tone from playful to ominous.",
            },
            {
              quote: "The grave's a fine and private place, But none, I think, do there embrace.",
              analysis:
                "Darkly witty understatement. The proximity of death is used as seduction — a carpe diem argument that love must be physical and immediate.",
            },
            {
              quote: "Let us roll all our strength and all Our sweetness up into one ball.",
              analysis:
                "Energetic, compressed imagery of physical passion. 'Ball' suggests concentrated force and intensity.",
            },
          ],
          themes: ["Carpe diem", "Time and mortality", "Desire and persuasion"],
          comparisonLinks: ["Sonnet 116 (love and time)", "Sonnet 43 (declarations of love)", "Valentine (direct, honest approach to love)"],
        },
        cozyApologia: {
          title: "Cozy Apologia",
          poet: "Rita Dove",
          year: "2004",
          form: "Three stanzas, free verse with rhyme",
          summary:
            "Written as Hurricane Floyd approaches, the speaker reflects on her comfortable domestic love, comparing it to the dramatic, idealised romances of her youth. She celebrates the ordinary, mature love she shares with her partner.",
          keyQuotes: [
            {
              quote: "I could pick anything and think of you — a crumpled corduroy sleeve, a passage from Moby Dick.",
              analysis:
                "Everyday, unremarkable objects trigger thoughts of the beloved. Love is woven into the fabric of ordinary life.",
            },
            {
              quote: "I think of you and me, sipping the afternoon away in our snug cocoon.",
              analysis:
                "'Snug cocoon' suggests warmth and protection. The domestic scene contrasts with the approaching hurricane — love as shelter from chaos.",
            },
            {
              quote: "Now I've got an idea of what I won't take.",
              analysis:
                "Maturity brings clarity about what love should be. The speaker values real companionship over youthful fantasy.",
            },
          ],
          themes: ["Mature love", "Domesticity", "Love as shelter"],
          comparisonLinks: ["Sonnet 43 (devoted love)", "Valentine (unconventional love)", "To His Coy Mistress (contrasting urgency with contentment)"],
        },
        iWannaBeYours: {
          title: "i wanna be yours",
          poet: "John Cooper Clarke",
          year: "1982",
          form: "Free verse, repetitive structure",
          summary:
            "The speaker declares devotion through a series of increasingly absurd domestic metaphors — wanting to be a vacuum cleaner, a Ford Cortina, a raincoat. The cumulative effect is both humorous and genuinely loving.",
          keyQuotes: [
            {
              quote: "I wanna be your vacuum cleaner Breathing in your dust.",
              analysis:
                "The mundane domestic image is comic but sincere — the speaker wants to be useful, essential to daily life, close enough to breathe the beloved's air.",
            },
            {
              quote: "I wanna be your electric meter, I will not run out.",
              analysis:
                "The promise of constancy through a prepayment meter metaphor is both funny and touching. Love as reliable supply of energy.",
            },
            {
              quote: "I don't wanna be hers, I wanna be yours.",
              analysis:
                "The simple refrain strips away metaphor for direct declaration. The possessive 'yours' echoes throughout, emphasising total devotion.",
            },
          ],
          themes: ["Devotion", "Everyday love", "Humour and sincerity"],
          comparisonLinks: ["Valentine (unconventional love imagery)", "Cozy Apologia (domestic love)", "Sonnet 43 (cataloguing love)"],
        },
        oneFleshByElizabethJennings: {
          title: "One Flesh",
          poet: "Elizabeth Jennings",
          year: "1966",
          form: "Three stanzas, regular rhythm",
          summary:
            "The speaker observes her elderly parents sleeping in separate beds. Though they were once passionate, they now seem distant, 'strangely apart.' The poem meditates on how love changes over time — from fire to silence.",
          keyQuotes: [
            {
              quote: "Lying apart now, each in a separate bed.",
              analysis:
                "The physical separation symbolises emotional distance. The simple declarative tone conveys sad acceptance.",
            },
            {
              quote: "Do they know they're old, These two who are my father and my mother?",
              analysis:
                "The childlike question reveals vulnerability. The speaker cannot reconcile her parents' age with her image of them.",
            },
            {
              quote: "Whose fire from which I came, has now grown cold.",
              analysis:
                "The 'fire' of passion that produced the speaker has cooled. The metaphor connects sexual love with the speaker's own existence.",
            },
            {
              quote: "Strangely apart, yet strangely close together, Silence between them like a thread to hold And not wind in.",
              analysis:
                "The paradox captures the complexity of long marriage — distance and connection coexist. Silence is fragile ('thread'), precious but easily broken.",
            },
          ],
          themes: ["Ageing love", "Marriage", "Distance and connection"],
          comparisonLinks: ["Cozy Apologia (domestic love)", "A Complaint (love's change over time)", "Sonnet 116 (love's constancy challenged)"],
        },
        bornYesterday: {
          title: "Born Yesterday",
          poet: "Philip Larkin",
          year: "1954",
          form: "Free verse, conversational",
          summary:
            "Written for the birth of Sally Amis (daughter of novelist Kingsley Amis), the speaker wishes the newborn not beauty or talent but ordinariness and the ability to be 'dull' enough to be happy.",
          keyQuotes: [
            {
              quote: "Tightly-folded bud, I have wished you something None of the others would.",
              analysis:
                "The 'bud' metaphor captures newborn potential. The speaker's contrarian wish sets the poem apart from conventional birthday poems.",
            },
            {
              quote: "May you be ordinary; Have, like other women, An average of talents.",
              analysis:
                "Larkin subverts expectations by wishing for ordinariness. He suggests that exceptionality brings unhappiness.",
            },
            {
              quote: "In fact, may you be dull — If that is what a skilled, Vigilant, flexible, Unemphasised, enthralled Catching of happiness is called.",
              analysis:
                "The final redefinition is masterful: what looks like 'dullness' is actually a complex, active state of contentment. Happiness requires skill.",
            },
          ],
          themes: ["Love and hope for children", "Ordinariness as virtue", "Happiness"],
          comparisonLinks: ["Nettles (parental love)", "One Flesh (family relationships)", "Cozy Apologia (valuing the ordinary)"],
        },
        letters: {
          title: "Letters",
          poet: "Leanne O'Sullivan",
          year: "2011",
          form: "Free verse",
          summary:
            "The speaker describes a loved one recovering from a brain injury, relearning language and identity through old letters. The letters become a bridge between past and present, helping to reconstruct a fractured sense of self.",
          keyQuotes: [
            {
              quote: "You were relearning the alphabet of yourself.",
              analysis:
                "Beautiful metaphor comparing recovery to learning to read. Identity is a language that must be reacquired after trauma.",
            },
            {
              quote: "Each letter a small holding of memory.",
              analysis:
                "Letters are physical containers of the past. 'Small holding' suggests both a modest possession and something gripped tightly.",
            },
            {
              quote: "And I watched you read yourself back into being.",
              analysis:
                "Reading the letters reconstructs identity. The passive construction ('yourself back into being') suggests the gradual, almost magical nature of recovery.",
            },
          ],
          themes: ["Love through adversity", "Identity and memory", "Language and healing"],
          comparisonLinks: ["Nettles (love in the face of pain)", "One Flesh (love challenged by change)", "A Complaint (love tested by loss)"],
        },
      },
    },
  },
};

export default ocrLitTextsExpanded;
