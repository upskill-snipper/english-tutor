// WJEC Eduqas GCSE Literature — The Woman in Black & Silas Marner
// Component 2: Post-1914 Prose / 19th-Century Prose

const wjecWomanBlackAndSilas = [
  // ─────────────────────────────────────────────────────────
  //  TEXT 1 — The Woman in Black (Susan Hill)
  // ─────────────────────────────────────────────────────────
  {
    id: 'woman-in-black-wjec',
    title: 'The Woman in Black',
    author: 'Susan Hill',
    board: 'wjec',
    paper: 'paper2',
    type: 'modern-prose',

    // ── THEMES ──────────────────────────────────────────────
    themes: [
      {
        theme: 'The Supernatural and the Gothic',
        analysis:
          `The supernatural is the dominant force in The Woman in Black, driving the plot and ` +
          `shaping every aspect of the narrative. Susan Hill draws heavily on the traditions of ` +
          `the Victorian ghost story, employing conventions such as isolated settings, spectral ` +
          `apparitions, and an atmosphere of creeping dread. The ghost of Jennet Humfrye is not ` +
          `a benign presence; she is malevolent, vengeful, and inescapable. Her appearances are ` +
          `always accompanied by death — specifically the death of a child — which elevates her ` +
          `beyond a simple haunting into something far more terrifying: a supernatural force that ` +
          `punishes the living for the sins of the past. Hill uses the ghost to explore how ` +
          `unresolved grief and injustice can transcend death itself, refusing to be buried or ` +
          `forgotten. The marshes surrounding Eel Marsh House function as a liminal space between ` +
          `the living and the dead, a place where the natural laws of the world seem to dissolve. ` +
          `The sea fret, the quicksand of the Nine Lives Causeway, and the perpetual mist all ` +
          `contribute to a landscape that mirrors the psychological disorientation Arthur Kipps ` +
          `experiences. Hill suggests that the supernatural is not something that can be ` +
          `rationalised or defeated — Arthur's attempts to apply logic to his experiences at Eel ` +
          `Marsh House consistently fail. This aligns with the Gothic tradition in which the ` +
          `unknown remains unknowable, and the rational mind is shown to be inadequate against ` +
          `forces it cannot comprehend.`,
      },
      {
        theme: 'Isolation and Vulnerability',
        analysis:
          `Isolation is central to the horror of The Woman in Black. Arthur Kipps is deliberately ` +
          `placed in situations where he is cut off from help, companionship, and the comforting ` +
          `structures of civilised society. Eel Marsh House itself is the primary symbol of ` +
          `isolation — accessible only via the Nine Lives Causeway, which is submerged at high ` +
          `tide, the house becomes a prison. Hill exploits this geographical isolation to create ` +
          `an intensifying sense of claustrophobia and vulnerability. Arthur is alone in the ` +
          `house with no telephone, no neighbours, and no means of escape when the tide comes ` +
          `in. This physical isolation mirrors his psychological isolation: the townspeople of ` +
          `Crythin Gifford refuse to speak about the woman in black, leaving Arthur without ` +
          `information or allies. Their silence is itself a form of abandonment. Hill uses ` +
          `isolation to strip away the protagonist's defences one by one. In London, Arthur is ` +
          `confident, rational, and professionally competent. At Eel Marsh House, these ` +
          `qualities become useless. The isolation forces him to confront experiences that his ` +
          `worldview cannot accommodate, and it is this confrontation — between the rational ` +
          `self and the inexplicable — that generates the novel's deepest horror. The theme ` +
          `also connects to Jennet Humfrye's own isolation: she was separated from her child ` +
          `and ostracised by her family, and her rage is born from that enforced solitude.`,
      },
      {
        theme: 'Grief, Loss, and Revenge',
        analysis:
          `Grief is the engine that drives the supernatural horror of the novel. Jennet ` +
          `Humfrye's grief at the loss of her son Nathaniel is so intense that it persists ` +
          `beyond death, manifesting as a vengeful ghost who causes the deaths of other ` +
          `people's children. Hill presents grief as a force that can be corrupting and ` +
          `destructive rather than redemptive. Jennet's grief does not lead to acceptance or ` +
          `peace; instead, it curdles into pure malice. Every time someone sees the woman in ` +
          `black, a child dies — this is Jennet's way of forcing others to experience the ` +
          `agony she endured. The novel suggests that unresolved grief is dangerous, that it ` +
          `festers and poisons. Arthur Kipps himself becomes a victim of this cycle when his ` +
          `own child and wife are killed at the novel's devastating conclusion. His grief ` +
          `mirrors Jennet's, creating a terrible symmetry: the woman in black has not simply ` +
          `haunted him but has made him understand, through his own loss, exactly what drove ` +
          `her to become what she is. Hill also uses the character of Mrs Drablow to explore ` +
          `how grief and guilt intertwine. Mrs Drablow's complicity in separating Jennet from ` +
          `her child creates a legacy of suffering that outlasts all the original participants. ` +
          `The novel's message is bleak: grief of this magnitude cannot be appeased, and the ` +
          `innocent suffer alongside the guilty.`,
      },
      {
        theme: 'The Power of the Past',
        analysis:
          `The Woman in Black is fundamentally a novel about how the past refuses to remain ` +
          `buried. The events that created the ghost — Jennet's forced separation from her ` +
          `child, Nathaniel's death in the marshes, Mrs Drablow's guilt — all occurred decades ` +
          `before Arthur Kipps arrives at Eel Marsh House, yet they continue to exert a ` +
          `devastating influence on the present. Hill structures the novel as a frame narrative: ` +
          `the older Arthur is writing down his past experiences, attempting to process and ` +
          `contain them through the act of storytelling. Yet the very existence of the narrative ` +
          `proves that the past cannot be contained — it has shaped and damaged Arthur ` +
          `irrevocably. The locked room in Eel Marsh House, filled with Jennet's letters and ` +
          `Nathaniel's possessions, functions as a physical manifestation of suppressed history. ` +
          `When Arthur enters the room and reads the documents, he is literally uncovering a ` +
          `past that others have tried to conceal. The townspeople of Crythin Gifford have ` +
          `adopted a policy of silence, hoping that by refusing to speak of the woman in black ` +
          `they can neutralise her power. This strategy fails entirely — the ghost does not need ` +
          `to be acknowledged to act. Hill suggests that denial is not a defence against the ` +
          `past but merely a way of ensuring that its victims are unprepared when it resurfaces. ` +
          `The novel warns that secrets and unresolved injustices will always find a way to ` +
          `reassert themselves.`,
      },
      {
        theme: 'Courage and Masculinity',
        analysis:
          `Arthur Kipps embodies a particular kind of Edwardian masculine confidence at the ` +
          `start of the novel. He is a young solicitor, rational, self-assured, and dismissive ` +
          `of superstition. His decision to stay at Eel Marsh House despite mounting warnings ` +
          `is driven partly by professional duty and partly by a masculine pride that refuses ` +
          `to admit fear. Hill uses Arthur's gradual psychological disintegration to interrogate ` +
          `this model of masculinity. His courage is real — he does not flee when he hears the ` +
          `sounds of the pony trap, and he ventures into the marshes to investigate — but it is ` +
          `ultimately futile. The novel suggests that true horror cannot be overcome by bravery ` +
          `alone. Arthur's rational courage is the wrong tool for the situation he faces, much ` +
          `as a soldier's physical bravery would be useless against a disease. Samuel Daily ` +
          `represents a more pragmatic form of masculinity: he warns Arthur without mocking him, ` +
          `and he acknowledges the reality of the supernatural without shame. The contrast ` +
          `between Arthur's stubborn rationalism and Daily's experienced caution highlights the ` +
          `limitations of youthful confidence. By the novel's end, Arthur's courage has been ` +
          `entirely broken. The man who writes the narrative is haunted, grief-stricken, and ` +
          `fundamentally altered. Hill implies that the traditional masculine virtues of ` +
          `stoicism and bravery are insufficient protection against genuine evil, and that the ` +
          `refusal to show vulnerability can itself become a form of danger.`,
      },
    ],

    // ── CHARACTERS ───────────────────────────────────────────
    characters: [
      {
        name: 'Arthur Kipps',
        description:
          `Arthur Kipps is the protagonist and narrator of The Woman in Black. As a young ` +
          `solicitor sent to Eel Marsh House to settle the affairs of the deceased Mrs Drablow, ` +
          `he functions as the classic Gothic narrator: rational, educated, and entirely ` +
          `unprepared for the supernatural horrors he will encounter. Hill constructs Arthur as ` +
          `an Everyman figure whose ordinariness makes his experiences all the more terrifying ` +
          `— if this can happen to a sensible, professional young man, it can happen to anyone. ` +
          `At the start of the novel, Arthur is confident and somewhat dismissive of local ` +
          `superstition. He interprets the townspeople's reluctance to discuss Mrs Drablow and ` +
          `Eel Marsh House as provincial foolishness rather than genuine warning. This arrogance ` +
          `is a form of dramatic irony, as the reader senses the danger that Arthur cannot. His ` +
          `gradual transformation from confident rationalist to terrified victim is the emotional ` +
          `arc of the novel. Arthur's role as narrator is crucial: the frame narrative establishes ` +
          `that he is writing the story many years later, as an old man still haunted by what ` +
          `happened. This structure tells us from the outset that Arthur survives physically but ` +
          `is permanently damaged psychologically. He represents the novel's central argument ` +
          `that some experiences are so devastating that they cannot be processed, rationalised, ` +
          `or overcome.`,
        keyQuotes: [
          {
            quote: 'I was a young man, and I was inclined to be sceptical about ghosts.',
            analysis:
              `This early statement establishes Arthur's rationalist worldview and creates ` +
              `dramatic irony. The reader understands that his scepticism will be tested and ` +
              `ultimately destroyed. Hill uses Arthur's confidence to heighten the impact of ` +
              `his later terror — the further he falls from this assured starting point, the ` +
              `more devastating the horror becomes. The past tense ('I was inclined') also ` +
              `signals retrospectively that this scepticism no longer exists.`,
          },
          {
            quote: 'I had the impression of someone who had been overcome with such dreadful grief and distress.',
            analysis:
              `Arthur's first description of the woman in black emphasises suffering rather ` +
              `than malice. Hill initially presents the ghost as a figure of pity, which makes ` +
              `the later revelation of her vengeful nature all the more shocking. The word ` +
              `'overcome' suggests that Jennet's grief has consumed her entirely, that she has ` +
              `been defeated by her own emotions. This creates a complex response in both ` +
              `Arthur and the reader: sympathy and horror coexist.`,
          },
          {
            quote: 'I was forced to stop and to sit on the wall beside the path, shaking all over.',
            analysis:
              `This moment of physical collapse marks a turning point in Arthur's ` +
              `characterisation. The man who prided himself on rational composure is reduced ` +
              `to trembling helplessness. Hill uses the physical symptoms of fear — shaking, ` +
              `inability to walk — to convey a terror that goes beyond intellectual ` +
              `understanding. Arthur's body responds to the horror even as his mind struggles ` +
              `to process it, suggesting that the supernatural bypasses rational thought ` +
              `entirely.`,
          },
        ],
      },
      {
        name: 'Jennet Humfrye (The Woman in Black)',
        description:
          `Jennet Humfrye is the antagonist of the novel, a ghost whose appearances invariably ` +
          `herald the death of a child. In life, she was an unmarried mother forced to give up ` +
          `her son Nathaniel to her sister, Alice Drablow. When Nathaniel drowned in the ` +
          `marshes, Jennet's grief and fury transformed into a supernatural vengeance that ` +
          `persists beyond death. Hill presents Jennet as both victim and monster — her ` +
          `suffering was genuine and her treatment unjust, but her response is ` +
          `disproportionately cruel, targeting innocent children who have no connection to her ` +
          `original grievance. Jennet's physical appearance is deliberately disturbing: she is ` +
          `described as gaunt, wasted, with a face contorted by a mixture of grief and malice. ` +
          `Her expression of 'desperate, yearning malevolence' captures the paradox of her ` +
          `character — she is simultaneously consumed by longing for her lost child and by ` +
          `hatred toward the living. Unlike many literary ghosts, Jennet cannot be appeased, ` +
          `exorcised, or reasoned with. She is a force of pure, irrational vengeance, and the ` +
          `novel offers no mechanism for stopping her. This makes her one of the most ` +
          `terrifying figures in modern Gothic fiction, because she removes the possibility ` +
          `of resolution or hope.`,
        keyQuotes: [
          {
            quote: 'a wasted face...with an expression of what I can only describe as desperate, yearning malevolence',
            analysis:
              `This description captures the essential paradox of Jennet's character. The ` +
              `oxymoron of 'yearning malevolence' — combining desperate longing with active ` +
              `hostility — conveys a ghost driven by contradictory emotions. She simultaneously ` +
              `grieves for her lost child and rages against the living. Hill's phrase 'what I ` +
              `can only describe as' acknowledges the inadequacy of language to capture what ` +
              `Arthur sees, heightening the sense of the uncanny.`,
          },
          {
            quote: 'Whenever she has been seen...in some way, a child has died.',
            analysis:
              `Samuel Daily's blunt statement establishes the terrifying pattern that defines ` +
              `Jennet's power. The causal link between seeing the ghost and a child's death ` +
              `removes any ambiguity about her nature — she is not a passive haunting but an ` +
              `active, malevolent force. The phrase 'in some way' suggests that the deaths ` +
              `vary in method, making them harder to predict or prevent. Hill uses this ` +
              `revelation to transform the reader's understanding of every previous sighting.`,
          },
        ],
      },
      {
        name: 'Samuel Daily',
        description:
          `Samuel Daily is Arthur Kipps's most significant ally in the novel, a wealthy local ` +
          `landowner who provides both practical assistance and crucial information about the ` +
          `woman in black. Daily represents a middle ground between Arthur's stubborn rationalism ` +
          `and the townspeople's superstitious silence. He accepts the reality of the ` +
          `supernatural without being paralysed by it, and he attempts to warn Arthur without ` +
          `undermining his autonomy. Daily functions as a mentor figure in the Gothic tradition ` +
          `— the experienced guide who has knowledge the protagonist lacks. However, Hill ` +
          `subverts this convention by making Daily's help ultimately insufficient. He cannot ` +
          `protect Arthur from the woman in black's vengeance, and his practical measures — ` +
          `lending Arthur a dog, driving him to Eel Marsh House — offer only temporary comfort ` +
          `against a supernatural threat. Daily's wife is revealed to have lost a child because ` +
          `of the woman in black, giving him a personal connection to the horror that informs ` +
          `his cautious approach. His willingness to speak about the ghost when others will not ` +
          `marks him as a figure of moral courage, though even he initially tries to dissuade ` +
          `Arthur from staying at Eel Marsh House rather than confronting the truth directly.`,
        keyQuotes: [
          {
            quote: 'You are not the first to come to Crythin Gifford on business, and to have your life turned upside down.',
            analysis:
              `Daily's warning reveals that Arthur is not unique — others have been drawn into ` +
              `the woman in black's orbit and suffered. The phrase 'turned upside down' ` +
              `understates the devastation while conveying its totality. Hill uses Daily as a ` +
              `chorus figure here, providing the wider context that Arthur, as a newcomer, ` +
              `cannot see. The warning also creates dramatic irony, as the reader suspects ` +
              `that 'turned upside down' means something far worse than Arthur imagines.`,
          },
          {
            quote: 'I am not a superstitious man... But I know what I have seen and what I have heard.',
            analysis:
              `This statement establishes Daily's credibility as a witness. By explicitly ` +
              `distancing himself from superstition, he makes his testimony about the woman ` +
              `in black more convincing. Hill uses Daily to bridge the gap between rational ` +
              `and supernatural worldviews — he is neither a credulous villager nor an arrogant ` +
              `sceptic, but a practical man who has been forced to accept uncomfortable truths ` +
              `by direct experience.`,
          },
        ],
      },
      {
        name: 'Mrs Alice Drablow',
        description:
          `Mrs Alice Drablow never appears as a living character in the novel — she is already ` +
          `dead when the story begins — yet her influence pervades the entire narrative. As the ` +
          `deceased owner of Eel Marsh House, she is the reason Arthur Kipps is sent to Crythin ` +
          `Gifford, and the secrets she kept in life are the cause of the horror he encounters. ` +
          `Drablow adopted her sister Jennet's illegitimate son Nathaniel and raised him at Eel ` +
          `Marsh House. When Nathaniel drowned in the marshes, the guilt and secrecy surrounding ` +
          `his death created the conditions for Jennet's haunting. Hill presents Drablow as ` +
          `complicit in a system that punished unmarried mothers and separated them from their ` +
          `children. The locked room in Eel Marsh House, containing Jennet's anguished letters ` +
          `and Nathaniel's belongings, represents the suppressed history that Drablow tried to ` +
          `contain but could not. She lived alone at Eel Marsh House for decades, presumably ` +
          `haunted by the woman in black herself, yet she never spoke publicly about what she ` +
          `knew. This silence mirrors the wider community's refusal to discuss the ghost, and ` +
          `Hill implies that such enforced secrecy only strengthens the power of the past. ` +
          `Drablow is a figure of guilt — not a villain exactly, but someone whose participation ` +
          `in an unjust system created a legacy of suffering.`,
        keyQuotes: [
          {
            quote: 'She had been a recluse... shunned by the townspeople.',
            analysis:
              `Mrs Drablow's reclusiveness mirrors the isolation that characterises Eel Marsh ` +
              `House itself. The fact that the townspeople shunned her suggests they blame her, ` +
              `at least partly, for the curse that afflicts their community. Hill uses Drablow's ` +
              `social isolation to reinforce the theme that guilt — even unexpressed, even ` +
              `denied — creates visible consequences. Her withdrawal from society is itself a ` +
              `form of confession.`,
          },
        ],
      },
      {
        name: 'Nathaniel Drablow (Jennet\'s Son)',
        description:
          `Nathaniel is a character who never appears alive in the narrative but whose death is ` +
          `the originating tragedy that generates the entire haunting. Born to Jennet Humfrye ` +
          `out of wedlock, Nathaniel was forcibly taken from his mother and adopted by Alice ` +
          `Drablow. He drowned in the marshes surrounding Eel Marsh House when the pony and ` +
          `trap carrying him sank into the mud. Hill uses Nathaniel's death as the traumatic ` +
          `event around which the novel's horror revolves. The recurring sound of the pony and ` +
          `trap — which Arthur hears multiple times at Eel Marsh House — is an auditory ` +
          `haunting, a ghostly re-enactment of the accident that killed Nathaniel. This sound ` +
          `is one of the novel's most effective devices, as it forces both Arthur and the reader ` +
          `to imaginatively witness a child's death without being able to intervene. Nathaniel's ` +
          `story also connects to the novel's exploration of social injustice: as the ` +
          `illegitimate child of an unmarried mother, he was subject to the punitive moral ` +
          `codes of the Victorian era. His removal from Jennet was sanctioned by a society that ` +
          `viewed illegitimacy as shameful. Hill suggests that this institutional cruelty is the ` +
          `root cause of all the horror that follows — the supernatural vengeance is born from ` +
          `a very real, very human injustice.`,
        keyQuotes: [
          {
            quote: 'the sound of the pony trap... the child crying out',
            analysis:
              `The recurring auditory haunting of the pony trap is one of the novel's most ` +
              `disturbing elements. Hill uses sound rather than sight to convey horror, which ` +
              `is particularly effective because sound is harder to dismiss or rationalise than ` +
              `a visual apparition. The child's cry connects every subsequent sighting of the ` +
              `woman in black to Nathaniel's death, reminding the reader that the haunting is ` +
              `rooted in the specific, unbearable grief of a mother who heard her child die.`,
          },
        ],
      },
      {
        name: 'Spider (the Dog)',
        description:
          `Spider is Samuel Daily's dog, lent to Arthur Kipps as a companion during his stay ` +
          `at Eel Marsh House. Though not a human character, Spider serves several important ` +
          `narrative functions. She provides Arthur with companionship and a sense of normality ` +
          `in an environment designed to strip both away. Her reactions to the supernatural — ` +
          `her distress, barking, and the terrifying episode in which she becomes trapped in ` +
          `the marshes — function as an objective confirmation that the haunting is real. If ` +
          `only Arthur experienced the strange events, they could be dismissed as hallucination ` +
          `or madness; Spider's terror validates his experiences. The episode in which Spider ` +
          `sinks into the marshes and Arthur must rescue her is one of the novel's most tense ` +
          `sequences. Hill uses the dog's vulnerability to create a different kind of fear — ` +
          `not the supernatural dread of the ghost, but the primal terror of watching a living ` +
          `creature struggle against a hostile landscape. Spider's near-death in the mud also ` +
          `parallels Nathaniel's death in the same marshes, creating an echo that deepens the ` +
          `horror. Arthur's frantic efforts to save Spider reveal his essential decency and his ` +
          `capacity for love, qualities that make his eventual loss all the more devastating.`,
        keyQuotes: [
          {
            quote: 'Spider was whimpering and her body was rigid, her hackles raised.',
            analysis:
              `Spider's physical response to the supernatural functions as objective proof ` +
              `that the haunting is real. Animals in Gothic literature are traditionally ` +
              `sensitive to supernatural presences, and Hill uses this convention to validate ` +
              `Arthur's experiences. The specificity of the description — 'rigid,' 'hackles ` +
              `raised' — moves beyond general fear to suggest that Spider is sensing a precise, ` +
              `localised threat. Her terror mirrors and amplifies Arthur's own growing dread.`,
          },
        ],
      },
      {
        name: 'Mr Jerome',
        description:
          `Mr Jerome is a local land agent in Crythin Gifford who represents the wider ` +
          `community's terrified silence regarding the woman in black. When Arthur mentions his ` +
          `encounter with the ghost at Mrs Drablow's funeral, Jerome's reaction — physical ` +
          `distress, an abrupt refusal to discuss the matter — is Arthur's first clear ` +
          `indication that something is seriously wrong. Hill uses Jerome as a barometer of the ` +
          `town's fear. His inability to speak about the woman in black is not mere superstition ` +
          `but genuine, paralysing terror born from personal experience. Jerome's reaction ` +
          `serves a crucial narrative function: it escalates Arthur's curiosity while ` +
          `simultaneously warning the reader that Arthur is walking into danger. His silence is ` +
          `a form of self-preservation — the townspeople believe that speaking about the woman ` +
          `in black may draw her attention — but it also leaves Arthur dangerously uninformed. ` +
          `Jerome embodies the novel's argument that silence and denial, however well-intentioned, ` +
          `are inadequate defences against the horrors of the past. By refusing to warn Arthur ` +
          `explicitly, Jerome and the other townspeople become unwitting accomplices to his ` +
          `destruction.`,
        keyQuotes: [
          {
            quote: 'His face was drained of colour, his eyes were haunted.',
            analysis:
              `Jerome's physical reaction to Arthur's mention of the woman in black reveals ` +
              `the depth of the community's trauma. The word 'haunted' is significant — Jerome ` +
              `may not be literally haunted by the ghost, but he is haunted by the knowledge of ` +
              `what she can do. Hill uses Jerome's visceral fear to foreshadow the true horror ` +
              `of the woman in black, communicating through his body language what he cannot or ` +
              `will not put into words.`,
          },
        ],
      },
    ],

    // ── KEY QUOTES ───────────────────────────────────────────
    keyQuotes: [
      {
        quote: 'I did not believe in ghosts.',
        speaker: 'Arthur Kipps',
        chapter: 'Christmas Eve (Frame Narrative)',
        analysis:
          `The simple declarative sentence establishes Arthur's initial rationalism while the ` +
          `past tense signals its destruction. Hill places this statement at the very beginning ` +
          `of the narrative to create dramatic irony — the reader knows that Arthur's scepticism ` +
          `will be shattered. The starkness of the statement, with its monosyllabic vocabulary ` +
          `and lack of qualification, suggests a certainty that the rest of the novel will ` +
          `systematically dismantle.`,
        themes: ['The Supernatural and the Gothic', 'Courage and Masculinity'],
      },
      {
        quote: 'I had the strangest sensation of someone watching me.',
        speaker: 'Arthur Kipps',
        chapter: 'The Funeral of Mrs Drablow',
        analysis:
          `This quote introduces the uncanny — the feeling of being observed by an unseen ` +
          `presence — which is a cornerstone of Gothic horror. The word 'sensation' places the ` +
          `experience in the body rather than the mind, suggesting that Arthur's fear operates ` +
          `below conscious thought. Hill builds dread through suggestion rather than spectacle, ` +
          `using the unseen and the felt to create a more insidious form of terror than any ` +
          `visual shock could provide.`,
        themes: ['The Supernatural and the Gothic', 'Isolation and Vulnerability'],
      },
      {
        quote: 'a wasted face...with an expression of what I can only describe as desperate, yearning malevolence',
        speaker: 'Arthur Kipps (describing Jennet)',
        chapter: 'The Funeral of Mrs Drablow',
        analysis:
          `The oxymoron of 'yearning malevolence' is one of the novel's most quoted phrases. ` +
          `It captures the dual nature of the woman in black: she simultaneously grieves and ` +
          `destroys. Hill's use of 'I can only describe as' acknowledges the inadequacy of ` +
          `language to capture the supernatural, a technique that heightens the uncanny by ` +
          `suggesting that what Arthur sees exceeds the capacity of rational expression.`,
        themes: ['Grief, Loss, and Revenge', 'The Supernatural and the Gothic'],
      },
      {
        quote: 'the sound of a pony and trap...and then the terrible cry of a child.',
        speaker: 'Arthur Kipps',
        chapter: 'The Sound of a Pony and Trap',
        analysis:
          `The auditory haunting of the pony trap is arguably the novel's most effective scare. ` +
          `Hill chooses sound over sight because sound is more invasive — it cannot be avoided ` +
          `by closing one's eyes. The child's cry connects the haunting to its origin in ` +
          `Nathaniel's death and transforms the marshes from a geographical feature into a site ` +
          `of endlessly replayed trauma. The ellipsis in the original text creates a pause that ` +
          `mirrors Arthur's horrified dawning comprehension.`,
        themes: ['Grief, Loss, and Revenge', 'The Power of the Past'],
      },
      {
        quote: 'Eel Marsh House was tall and gaunt and grey.',
        speaker: 'Arthur Kipps',
        chapter: 'Across the Causeway',
        analysis:
          `Hill uses the tricolon of 'tall and gaunt and grey' to personify the house, giving ` +
          `it the same wasted quality as the ghost herself. The adjective 'gaunt' is more ` +
          `commonly applied to emaciated human faces, blurring the boundary between building ` +
          `and body, between the living and the dead. The house becomes a physical extension of ` +
          `Jennet's suffering — both are skeletal, drained, and hostile.`,
        themes: ['Isolation and Vulnerability', 'The Supernatural and the Gothic'],
      },
      {
        quote: 'I was quite alone... the marshes stretched away in all directions.',
        speaker: 'Arthur Kipps',
        chapter: 'Across the Causeway',
        analysis:
          `This statement encapsulates the novel's central horror: isolation. The flat, ` +
          `featureless marshes offer no shelter, no landmarks, and no escape. Hill uses the ` +
          `expansiveness of the landscape paradoxically to create claustrophobia — there is ` +
          `nowhere to hide, nowhere to run, and the protagonist is exposed and defenceless. ` +
          `The simplicity of the language mirrors the starkness of the environment.`,
        themes: ['Isolation and Vulnerability', 'Courage and Masculinity'],
      },
      {
        quote: 'Whenever she has been seen...in some way, a child has died.',
        speaker: 'Samuel Daily',
        chapter: 'Mr Jerome is Afraid',
        analysis:
          `Daily's revelation is the novel's most devastating plot point. The flat, factual ` +
          `tone — delivered without melodrama — makes it all the more chilling. The causal ` +
          `certainty of 'whenever' (not 'sometimes' or 'often') removes any possibility of ` +
          `coincidence or escape. Hill delays this revelation until Arthur has already seen the ` +
          `ghost multiple times, retroactively charging every previous sighting with lethal ` +
          `significance.`,
        themes: ['Grief, Loss, and Revenge', 'The Supernatural and the Gothic'],
      },
      {
        quote: 'They have learned to live with it. What else can they do?',
        speaker: 'Samuel Daily',
        chapter: 'Mr Jerome is Afraid',
        analysis:
          `Daily's resigned question reveals the hopelessness of the townspeople's situation. ` +
          `There is no exorcism, no ritual, no solution — only endurance. Hill uses this line ` +
          `to distinguish her novel from ghost stories that offer resolution. The rhetorical ` +
          `question 'What else can they do?' is directed as much at the reader as at Arthur, ` +
          `forcing us to confront the possibility that some horrors have no remedy.`,
        themes: ['The Power of the Past', 'Isolation and Vulnerability'],
      },
      {
        quote: 'I knew I had been hearing the sound of a pony trap and of the desperate cries of a child.',
        speaker: 'Arthur Kipps',
        chapter: 'The Sound of a Pony and Trap',
        analysis:
          `The verb 'knew' marks a turning point in Arthur's psychological journey. He is no ` +
          `longer speculating or doubting — he has crossed from scepticism to certainty. The ` +
          `word 'desperate' applied to the child's cries humanises the ghost story, reminding ` +
          `the reader that at its core this is a narrative about a child's death. Hill uses ` +
          `Arthur's knowledge to trap him: once he knows, he cannot unknow, and this knowledge ` +
          `will pursue him for the rest of his life.`,
        themes: ['The Supernatural and the Gothic', 'Grief, Loss, and Revenge'],
      },
      {
        quote: 'the fingers of the dead were in my flesh and the water of the marshes was closing over my head.',
        speaker: 'Arthur Kipps',
        chapter: 'In the Nursery',
        analysis:
          `This visceral image blurs the boundary between the supernatural and the physical ` +
          `landscape. The 'fingers of the dead' could be the ghost's literal grip or a metaphor ` +
          `for the marsh's pull — Hill deliberately refuses to clarify, maintaining the ` +
          `ambiguity that makes the novel so effective. The image of drowning connects Arthur's ` +
          `experience to Nathaniel's death, suggesting that the past is literally pulling him ` +
          `under.`,
        themes: ['The Supernatural and the Gothic', 'The Power of the Past'],
      },
      {
        quote: 'The worst thing was not the ghost... but the knowledge that she had been watching me.',
        speaker: 'Arthur Kipps',
        chapter: 'In the Nursery',
        analysis:
          `Arthur's distinction between the ghost's appearance and her act of watching is ` +
          `psychologically astute. The horror lies not in the spectacle but in the ` +
          `intentionality — the woman in black is not a residual haunting but a conscious, ` +
          `purposeful presence that has chosen Arthur as its target. Hill's insight here is ` +
          `that being observed by something malevolent is more terrifying than seeing it, ` +
          `because observation implies deliberation and intent.`,
        themes: ['The Supernatural and the Gothic', 'Isolation and Vulnerability'],
      },
      {
        quote: 'They asked for my story. I have told it. Enough.',
        speaker: 'Arthur Kipps',
        chapter: 'The Woman in Black (Final Chapter)',
        analysis:
          `The final word — 'Enough' — is devastating in its curtness. After an entire novel ` +
          `of detailed, careful narration, Arthur reduces his conclusion to a single word that ` +
          `conveys exhaustion, finality, and the impossibility of saying more. Hill's choice to ` +
          `end on this abrupt note refuses the reader the comfort of a neat resolution. The ` +
          `story is over, but Arthur's suffering is not; the word 'enough' suggests he has ` +
          `reached the limit of what he can bear to articulate.`,
        themes: ['Grief, Loss, and Revenge', 'Courage and Masculinity'],
      },
    ],

    // ── CONTEXT POINTS ───────────────────────────────────────
    contextPoints: [
      'Published in 1983, The Woman in Black is a deliberate homage to the Victorian ghost ' +
        'story tradition, drawing on the work of M. R. James, Henry James (The Turn of the ' +
        'Screw), and Charles Dickens.',
      'The novel is set in the Edwardian era (early 1900s), a period in which rationalism and ' +
        'scientific progress were dominant cultural values — making the irruption of the ' +
        'supernatural all the more disruptive.',
      'Susan Hill wrote the novel partly in response to the decline of the traditional ghost ' +
        'story, aiming to prove that the genre could still terrify a modern audience when ' +
        'executed with restraint and psychological depth.',
      'The treatment of unmarried mothers in the Victorian and Edwardian periods was punitive: ' +
        'women who had children outside marriage were socially ostracised, and their children ' +
        'were frequently taken from them. This is the injustice that creates Jennet Humfrye\'s ' +
        'vengeance.',
      'The novel draws on the Gothic tradition of the "Female Gothic," in which women\'s ' +
        'suffering — particularly their confinement, silencing, and loss of autonomy — ' +
        'generates the horror of the narrative.',
      'The frame narrative structure (Arthur telling his story years later) is a convention of ' +
        'the Victorian ghost story, used by authors such as Joseph Conrad and Henry James to ' +
        'create distance between the narrator and the events while simultaneously suggesting ' +
        'that the past continues to haunt the present.',
      'Hill\'s use of the English marshland setting draws on a long literary tradition of ' +
        'liminal landscapes — places that are neither land nor sea, neither safe nor navigable ' +
        '— as spaces where the boundary between the natural and supernatural dissolves.',
    ],

    // ── EXAM TIPS ────────────────────────────────────────────
    examTips: [
      'Always refer to Hill as a conscious craftsperson — use phrases like "Hill constructs," ' +
        '"Hill manipulates the reader," or "Hill deploys the Gothic convention of..." to ' +
        'demonstrate AO2 awareness of the writer\'s methods.',
      'When analysing atmosphere, focus on Hill\'s use of setting as a reflection of ' +
        'psychological states. The marshes, the fog, and the isolation of Eel Marsh House are ' +
        'not just backdrop — they are active agents in creating horror.',
      'For AO3 (context), connect Jennet Humfrye\'s story to the historical treatment of ' +
        'unmarried mothers and the social codes that separated women from their illegitimate ' +
        'children.',
      'Avoid simply retelling the plot. The examiner wants analysis of how Hill creates ' +
        'effects, not a summary of what happens. Every point should link technique to reader ' +
        'response.',
      'When discussing the supernatural, explore Hill\'s use of restraint. She shows very ' +
        'little — most of the horror comes from suggestion, sound, and the unseen. This ' +
        'restraint is itself a technique worth analysing.',
      'Compare Arthur\'s rationalism at the start with his broken state at the end. Tracking ' +
        'character development across the whole novel demonstrates a sophisticated, holistic ' +
        'understanding.',
      'Use the frame narrative structure as evidence of the theme of the power of the past: ' +
        'Arthur is still haunted decades later, proving that the woman in black\'s influence ' +
        'extends far beyond the events at Eel Marsh House.',
    ],

    // ── SAMPLE QUESTIONS ─────────────────────────────────────
    sampleQuestions: [
      {
        question: 'How does Susan Hill present the theme of fear in The Woman in Black?',
        planPoints: [
          'Analyse Hill\'s use of setting — the marshes, Eel Marsh House, and the Nine Lives ' +
            'Causeway — to create an atmosphere of inescapable dread.',
          'Explore the contrast between Arthur\'s initial rationalism and his gradual ' +
            'psychological disintegration as evidence of how fear operates on the mind.',
          'Discuss Hill\'s technique of suggestion and restraint — the unseen is more ' +
            'frightening than the seen (the sound of the pony trap, the locked nursery door).',
          'Examine the role of silence and the townspeople\'s refusal to speak as a form of ' +
            'communal fear that isolates Arthur further.',
          'Connect to context: the novel\'s Edwardian setting means that fear of the ' +
            'supernatural is culturally suppressed, making its eruption more devastating.',
        ],
      },
      {
        question: 'How does Hill use the character of Jennet Humfrye to explore ideas about ' +
          'grief and revenge?',
        planPoints: [
          'Analyse Jennet as both victim and villain — her grief is genuine but her vengeance ' +
            'is disproportionate, targeting innocent children.',
          'Explore the oxymoron of "yearning malevolence" as encapsulating her dual nature: ' +
            'she simultaneously mourns and destroys.',
          'Discuss the pattern "whenever she has been seen, a child has died" as evidence of ' +
            'grief transformed into mechanical, inescapable vengeance.',
          'Connect to context: Jennet\'s suffering is rooted in the Victorian treatment of ' +
            'unmarried mothers, making her a figure of social injustice as well as supernatural ' +
            'horror.',
          'Examine the cyclical structure — Arthur\'s own loss at the end mirrors Jennet\'s, ' +
            'suggesting that grief generates more grief in an unbreakable chain.',
        ],
      },
      {
        question: 'How does Hill create a sense of isolation in The Woman in Black?',
        planPoints: [
          'Analyse the geographical isolation of Eel Marsh House — the Nine Lives Causeway, ' +
            'the tidal marshes, the absence of neighbours — as a physical trap.',
          'Explore Arthur\'s psychological isolation: the townspeople\'s silence leaves him ' +
            'without information or allies.',
          'Discuss the contrast between London (safety, civilisation, companionship) and ' +
            'Crythin Gifford (danger, superstition, solitude).',
          'Examine Jennet\'s isolation in life — separated from her child, ostracised by her ' +
            'family — as the origin of her supernatural vengeance.',
          'Connect to the Gothic tradition of the isolated protagonist who must face horror ' +
            'alone, without the support structures of normal society.',
        ],
      },
      {
        question: 'How does Hill use the setting of Eel Marsh House to create tension and ' +
          'suspense?',
        planPoints: [
          'Analyse the house as a Gothic archetype — "tall and gaunt and grey" personifies it ' +
            'as a wasted, hostile presence.',
          'Explore the locked nursery as a symbol of suppressed secrets and unresolved trauma.',
          'Discuss the marshes as a liminal space that blurs the boundary between safety and ' +
            'danger, the living and the dead.',
          'Examine Hill\'s use of sound — the rocking chair, the bumping noise, the pony and ' +
            'trap — to animate the house with unseen presences.',
          'Connect to the pathetic fallacy: the weather (fog, wind, cold) mirrors Arthur\'s ' +
            'emotional state and intensifies the reader\'s unease.',
        ],
      },
    ],

    // ── GRADE BOOST ──────────────────────────────────────────
    gradeBoost: {
      grade5:
        'At Grade 5, you need to show clear understanding of the text with relevant ' +
        'quotations. Explain how Hill uses language and structure to create effects — for ' +
        'example, how the isolated setting of Eel Marsh House creates fear, or how the ' +
        'auditory haunting of the pony trap builds tension. Use context to support your ' +
        'points: mention the Gothic genre and the Victorian/Edwardian setting.',
      grade7:
        'At Grade 7, you should analyse Hill\'s methods with precision. Explore how specific ' +
        'word choices create meaning — for instance, the oxymoron "yearning malevolence" or ' +
        'the personification of the house as "gaunt." Discuss structural choices such as the ' +
        'frame narrative and what it reveals about the lasting power of trauma. Integrate ' +
        'context seamlessly: link Jennet\'s story to the treatment of unmarried mothers ' +
        'without bolting context on as a separate paragraph.',
      grade9:
        'At Grade 9, you should offer a critical, evaluative response that considers ' +
        'alternative interpretations. Is Jennet a villain or a victim of patriarchal ' +
        'injustice? Does Hill\'s use of the Gothic genre celebrate or critique the Edwardian ' +
        'rationalism Arthur represents? Explore the novel\'s refusal to offer resolution as ' +
        'a deliberate artistic choice — the absence of a happy ending is itself a statement ' +
        'about the nature of grief and the limitations of human agency. Engage with the text ' +
        'as a constructed artefact, analysing how Hill manipulates genre conventions to ' +
        'create meaning.',
    },
  },

  // ─────────────────────────────────────────────────────────
  //  TEXT 2 — Silas Marner (George Eliot)
  // ─────────────────────────────────────────────────────────
  {
    id: 'silas-marner-wjec',
    title: 'Silas Marner',
    author: 'George Eliot',
    board: 'wjec',
    paper: 'paper2',
    type: '19th-century',

    // ── THEMES ──────────────────────────────────────────────
    themes: [
      {
        theme: 'Community and Belonging',
        analysis:
          `Community is the central redemptive force in Silas Marner. Eliot traces Silas's ` +
          `journey from the tight-knit but ultimately false community of Lantern Yard to his ` +
          `painful isolation in Raveloe, and finally to his reintegration into village life ` +
          `through the arrival of Eppie. Silas's exile from Lantern Yard is devastating ` +
          `precisely because the community meant everything to him — when his supposed friend ` +
          `William Dane frames him for theft and the congregation finds him guilty by drawing ` +
          `lots, Silas loses not just his reputation but his entire framework of meaning. His ` +
          `faith, his friendships, and his sense of belonging are all destroyed simultaneously. ` +
          `In Raveloe, Silas initially exists on the margins — he is viewed with suspicion as ` +
          `a stranger and a possible practitioner of dark arts. Eliot uses this marginalisation ` +
          `to explore how communities define themselves by excluding outsiders. The villagers' ` +
          `distrust of Silas is rooted not in anything he has done but in his difference — his ` +
          `pale appearance, his solitary habits, his weaving. It is only when Eppie arrives and ` +
          `Silas begins to need the village — for childcare advice, for companionship, for ` +
          `practical support — that the community slowly absorbs him. Eliot argues that genuine ` +
          `community is built on mutual dependence and shared experience, not on the rigid ` +
          `doctrines that governed Lantern Yard.`,
      },
      {
        theme: 'The Transformative Power of Love',
        analysis:
          `Love, specifically the love between parent and child, is the force that redeems ` +
          `Silas Marner. When Eppie crawls through the open door and falls asleep by his ` +
          `hearth, she replaces the stolen gold not merely symbolically but functionally — she ` +
          `becomes the centre of Silas's emotional life, the thing around which his days ` +
          `revolve. Eliot is careful to show that this transformation is gradual rather than ` +
          `instantaneous. Silas must learn how to care for a child, and his clumsy early ` +
          `attempts — consulting Dolly Winthrop, trying to discipline Eppie by putting her in ` +
          `the coal-hole — are both comic and deeply moving. The love Silas develops for Eppie ` +
          `is transformative because it reconnects him to the human world. His gold required no ` +
          `reciprocity — he could hoard it, count it, and possess it without any emotional ` +
          `risk. Eppie, by contrast, demands engagement, vulnerability, and growth. She forces ` +
          `Silas out of his cottage and into the community, she requires him to interact with ` +
          `neighbours, and she gives him a reason to care about the future. Eliot presents love ` +
          `not as a sentimental abstraction but as a practical, demanding force that reshapes a ` +
          `person's relationship with the world. The contrast with Godfrey Cass is instructive: ` +
          `Godfrey's failure to love openly — his refusal to acknowledge Eppie as his daughter ` +
          `— leads to emotional impoverishment, while Silas's wholehearted embrace of love ` +
          `leads to fulfilment.`,
      },
      {
        theme: 'Class and Social Hierarchy',
        analysis:
          `Eliot uses the parallel plots of Silas Marner and Godfrey Cass to examine the ` +
          `rigidities and hypocrisies of the English class system. Godfrey is a member of the ` +
          `rural gentry, privileged by birth and wealth, yet morally compromised by his secret ` +
          `marriage to Molly Farren and his refusal to acknowledge Eppie. Silas is a poor ` +
          `weaver, socially insignificant, yet morally superior in his devotion to Eppie. Eliot ` +
          `inverts the expected hierarchy: it is the humble artisan who demonstrates true ` +
          `virtue, while the gentleman is revealed as weak and dishonest. The climactic scene ` +
          `in which Godfrey and Nancy attempt to reclaim Eppie exposes the class assumptions ` +
          `that underpin their worldview. They assume that Eppie will naturally prefer the ` +
          `wealth and status of the Cass household to the modest cottage she shares with Silas. ` +
          `Eppie's refusal — her declaration that she will not leave the father who raised her ` +
          `— is a rejection not just of Godfrey but of the class system itself. Eliot uses this ` +
          `moment to argue that bonds formed through love and shared experience are more ` +
          `legitimate than those claimed through blood or social position. The novel also ` +
          `examines class through the Raveloe community: the distinction between the Red House ` +
          `(the Cass family) and the village is ever-present, and Eliot shows how wealth ` +
          `insulates the gentry from consequences while the poor bear the burden of their ` +
          `decisions.`,
      },
      {
        theme: 'Faith, Doubt, and Moral Justice',
        analysis:
          `Silas Marner traces a complex journey of faith. At Lantern Yard, Silas is a devout ` +
          `member of a dissenting congregation that practices a rigid, doctrinaire form of ` +
          `Christianity. When the drawing of lots — supposedly a direct appeal to God's ` +
          `judgement — declares him guilty of a theft he did not commit, Silas's faith is ` +
          `shattered. He concludes that either God does not exist or that God is unjust, and ` +
          `he retreats into a godless existence focused entirely on material accumulation. ` +
          `Eliot presents this crisis of faith sympathetically but does not endorse Lantern ` +
          `Yard's theology — the congregation's reliance on drawing lots is shown to be a form ` +
          `of superstition rather than genuine spiritual discernment. In Raveloe, Silas ` +
          `encounters a different kind of faith through Dolly Winthrop, whose simple, practical ` +
          `Christianity is based on kindness, community, and trust in a benevolent providence. ` +
          `Dolly does not theologise or judge; she bakes lard-cakes and offers practical help. ` +
          `Eliot uses Dolly to suggest that authentic faith is found not in doctrine but in ` +
          `compassion. The novel's moral scheme operates as a form of secular providence: ` +
          `Dunstan Cass, who steals the gold, is found dead; Godfrey, who refuses to ` +
          `acknowledge his child, is denied children of his own; Silas, who loses everything, ` +
          `is given the love that transforms his life. Eliot creates a moral universe in which ` +
          `justice is ultimately served, though not through supernatural intervention but ` +
          `through the natural consequences of human choices.`,
      },
      {
        theme: 'Wealth, Materialism, and True Value',
        analysis:
          `The contrast between gold and human connection is the novel's central symbolic ` +
          `structure. Silas's gold represents a form of false value — he accumulates it ` +
          `obsessively, counting it each night, deriving a sensory pleasure from its weight ` +
          `and shine that substitutes for genuine human warmth. Eliot describes his relationship ` +
          `with the gold in language that evokes addiction: it is compulsive, isolating, and ` +
          `ultimately empty. When Dunstan Cass steals the gold, Silas is devastated — but the ` +
          `theft creates the void that Eppie will fill. Eliot's symbolic logic is clear: ` +
          `material wealth must be removed before spiritual wealth can take its place. The ` +
          `golden-haired Eppie literally replaces the golden coins, and Silas's love for her ` +
          `proves infinitely more sustaining than his love for money. Eliot does not romanticise ` +
          `poverty, however. She is careful to show that material security matters — Silas needs ` +
          `to earn a living to support Eppie, and the return of his gold at the novel's end ` +
          `provides practical benefit. The critique is directed not at wealth itself but at the ` +
          `worship of wealth as an end in itself, the substitution of material accumulation for ` +
          `human relationship. Godfrey Cass's wealth does not make him happy; it merely gives ` +
          `him the means to avoid confronting his moral failures. True value, Eliot argues, is ` +
          `found in love, community, and the willingness to be vulnerable.`,
      },
    ],

    // ── CHARACTERS ───────────────────────────────────────────
    characters: [
      {
        name: 'Silas Marner',
        description:
          `Silas Marner is the protagonist of the novel and one of the most fully realised ` +
          `characters in Victorian fiction. A linen weaver by trade, Silas is initially ` +
          `presented as a victim of injustice: falsely accused of theft by his supposed friend ` +
          `William Dane and expelled from the Lantern Yard community, he retreats to the ` +
          `village of Raveloe where he lives as a recluse for fifteen years, his only companion ` +
          `the growing pile of gold coins he earns from his weaving. Eliot presents Silas's ` +
          `obsession with gold as a symptom of emotional starvation — deprived of human ` +
          `connection, trust, and faith, he transfers his need for meaning onto the only thing ` +
          `that cannot betray him. His transformation begins when the gold is stolen and the ` +
          `child Eppie arrives, but Eliot is careful to show this as a process rather than a ` +
          `miracle. Silas must learn to love, to trust, and to re-enter the community, and ` +
          `these are skills that have atrophied during his years of isolation. His journey from ` +
          `isolation to integration, from materialism to love, constitutes the novel's moral ` +
          `argument: that human beings are fundamentally social creatures who cannot thrive ` +
          `without connection, and that the capacity for love, once awakened, can redeem even ` +
          `the most damaged life.`,
        keyQuotes: [
          {
            quote: 'He seemed to weave, like the spider, from pure impulse, without reflection.',
            analysis:
              `Eliot's simile comparing Silas to a spider is richly significant. Like a ` +
              `spider, Silas is solitary, mechanical, and trapped in a web of his own making. ` +
              `The phrase 'without reflection' suggests that his weaving has become automatic ` +
              `— he has ceased to think, to feel, to engage with the world. This ` +
              `dehumanisation is the cost of his isolation, and it is this state from which ` +
              `Eppie will rescue him. The simile also anticipates his later transformation: a ` +
              `spider cannot change its nature, but Silas, being human, can.`,
          },
          {
            quote: 'The gold had kept his thoughts in an ever-repeated circle.',
            analysis:
              `The image of the 'ever-repeated circle' captures the sterility of Silas's ` +
              `pre-Eppie existence. His life has no progression, no development, no growth — ` +
              `only repetition. The gold does not enrich him; it traps him. Eliot uses this ` +
              `circular imagery to contrast with the linear, developmental nature of Silas's ` +
              `life after Eppie arrives. With a child, there is always change, always forward ` +
              `movement, always the possibility of something new.`,
          },
          {
            quote: 'In old days there were angels who came and took men by the hand and led them away from the city of destruction.',
            analysis:
              `This allusion to Bunyan's The Pilgrim's Progress frames Eppie as a figure of ` +
              `divine providence. Eliot, who had abandoned orthodox Christianity, nonetheless ` +
              `uses religious imagery to suggest that Eppie's arrival has a redemptive, almost ` +
              `miraculous quality. The phrase 'city of destruction' refers to Silas's ` +
              `self-imposed exile of miserliness and despair. Eppie leads him out of this ` +
              `spiritual wasteland not through doctrine but through the simple, transformative ` +
              `power of love.`,
          },
        ],
      },
      {
        name: 'Eppie',
        description:
          `Eppie is the golden-haired child who arrives at Silas's cottage and transforms his ` +
          `life. The daughter of Godfrey Cass and Molly Farren, she is abandoned by ` +
          `circumstance when her mother dies in the snow and she toddles through Silas's open ` +
          `door, drawn by the light of his fire. Eliot constructs Eppie as both a realistic ` +
          `child and a symbolic figure: she is the novel's embodiment of natural goodness, ` +
          `warmth, and the redemptive power of love. Her golden hair explicitly echoes Silas's ` +
          `golden coins, establishing her as the true treasure that replaces the false one. As ` +
          `she grows, Eppie becomes the catalyst for Silas's reintegration into the Raveloe ` +
          `community — he must interact with neighbours, seek advice from Dolly Winthrop, and ` +
          `participate in village life in order to raise her. Her decision to remain with Silas ` +
          `rather than accept Godfrey Cass's offer of wealth and status is the novel's moral ` +
          `climax. Eppie chooses love over privilege, affirming Eliot's argument that bonds ` +
          `formed through daily care and devotion are more meaningful than those claimed through ` +
          `blood. She represents the possibility of a social order based on affection and ` +
          `mutual respect rather than class and inheritance.`,
        keyQuotes: [
          {
            quote: 'I can\'t feel as I\'ve got any father but one... I can\'t think o\' no other home.',
            analysis:
              `Eppie's declaration is the novel's emotional and moral climax. Her language is ` +
              `simple and dialect-inflected, contrasting with the educated speech of Godfrey ` +
              `and Nancy, yet it carries more moral authority than anything the gentry can say. ` +
              `The repetition of 'I can\'t' is significant — it is not that she will not accept ` +
              `Godfrey, but that she cannot, because her identity and her love are inseparable ` +
              `from the life she has lived with Silas. Eliot uses Eppie's refusal to validate ` +
              `the bonds of nurture over the claims of nature.`,
          },
          {
            quote: 'the gold had turned into the gold-haired child',
            analysis:
              `This is the novel's central symbolic transformation, stated with elegant ` +
              `simplicity. Eliot makes the substitution explicit: material gold has been ` +
              `replaced by human gold. The metaphor works because it acknowledges continuity ` +
              `— Silas still has something precious at the centre of his life — while marking ` +
              `a fundamental change in what he values. The 'turning' implies an alchemical ` +
              `process, suggesting that Eppie's arrival has transmuted Silas's base materialism ` +
              `into something genuinely precious.`,
          },
        ],
      },
      {
        name: 'Godfrey Cass',
        description:
          `Godfrey Cass is the eldest son of Squire Cass and the novel's most morally complex ` +
          `character. Handsome, well-meaning, but fatally weak, Godfrey is defined by his ` +
          `inability to act honestly. His secret marriage to the opium-addicted Molly Farren, ` +
          `his refusal to acknowledge Eppie as his daughter, and his reliance on chance to ` +
          `resolve his problems all stem from a fundamental moral cowardice. Eliot treats ` +
          `Godfrey with a mixture of sympathy and judgement. She understands the social ` +
          `pressures that make honesty difficult — acknowledging Molly would mean disgrace and ` +
          `the loss of Nancy Lammeter — but she does not excuse the consequences of his ` +
          `dishonesty. Godfrey's punishment is poetic: having refused to claim his child when ` +
          `he could have, he is denied her when he finally tries. His childless marriage to ` +
          `Nancy becomes its own form of retribution. Eliot uses Godfrey to explore how ` +
          `privilege can become a trap — his wealth and status give him the power to evade ` +
          `consequences temporarily, but they also enable the moral laziness that ultimately ` +
          `costs him what he most desires. He is a cautionary figure, demonstrating that the ` +
          `avoidance of difficulty in the present creates far greater suffering in the future.`,
        keyQuotes: [
          {
            quote: 'I\'d nothing to do but to trust to Chance... and if I\'d had the luck to be found innocent, I shouldn\'t have run away.',
            analysis:
              `Godfrey's reliance on 'Chance' (capitalised as though it were a deity) reveals ` +
              `his fundamental passivity. He does not make moral choices; he waits for ` +
              `circumstances to make them for him. Eliot's irony is sharp here: Godfrey ` +
              `presents his passivity as though it were a reasonable strategy, when in fact it ` +
              `is a form of moral abdication. The reference to being 'found innocent' ` +
              `unconsciously echoes Silas's trial at Lantern Yard, creating a parallel that ` +
              `highlights the contrast between the two men.`,
          },
          {
            quote: 'It is too late now. That is a debt I can\'t repay.',
            analysis:
              `Godfrey's acknowledgement comes at the moment when it can do the least good. ` +
              `The metaphor of 'debt' reduces his relationship with Eppie to a financial ` +
              `transaction, which is itself revealing — Godfrey understands obligation better ` +
              `than love. Eliot uses 'too late' as a moral verdict: there is a window for ` +
              `right action, and once it closes, no amount of wealth or good intentions can ` +
              `reopen it.`,
          },
        ],
      },
      {
        name: 'Dolly Winthrop',
        description:
          `Dolly Winthrop is the wife of the wheelwright Ben Winthrop and the character who ` +
          `most fully embodies Eliot's ideal of practical, compassionate community. She is the ` +
          `first villager to reach out to Silas after Eppie's arrival, offering childcare ` +
          `advice, lending baby clothes, and providing the steady, undemanding friendship that ` +
          `Silas desperately needs. Dolly's Christianity is the antithesis of Lantern Yard's ` +
          `rigid doctrine — it is based on kindness, neighbourliness, and a simple trust that ` +
          `'them above' have a benevolent plan. She does not judge Silas for his strange habits ` +
          `or his lack of faith; she simply helps him. Eliot uses Dolly to argue that genuine ` +
          `religion is expressed through action rather than theology. Dolly cannot articulate ` +
          `complex doctrines, but her instinctive goodness is more spiritually authentic than ` +
          `the drawing of lots at Lantern Yard. She also functions as a bridge between Silas ` +
          `and the wider community, normalising his presence in Raveloe and teaching him the ` +
          `social skills that his years of isolation have eroded. Her dialect speech — warm, ` +
          `repetitive, full of homely wisdom — is one of Eliot's finest achievements, ` +
          `capturing a voice that is uneducated but profoundly wise.`,
        keyQuotes: [
          {
            quote: 'there\'s dealings as is brought to light and made clear... and there\'s things as is never known in this world.',
            analysis:
              `Dolly's gentle philosophy acknowledges the limits of human understanding without ` +
              `descending into despair. She accepts that some things cannot be explained while ` +
              `trusting that a broader justice operates beyond individual comprehension. Eliot ` +
              `uses Dolly's words as a corrective to both Silas's bitter rejection of faith ` +
              `and Lantern Yard's rigid certainty. True wisdom, Eliot suggests, lies in the ` +
              `space between these extremes — in accepting mystery while continuing to act ` +
              `with kindness.`,
          },
          {
            quote: 'You\'ll happen be a bit moithered with it... but what I say is, them as are above knows better nor we do.',
            analysis:
              `The dialect word 'moithered' (bewildered, confused) captures Dolly's awareness ` +
              `that Silas is overwhelmed but also her faith that things will work out. Her ` +
              `theology is entirely practical: she does not claim to understand God's plan, ` +
              `merely to trust it. Eliot uses Dolly's unsophisticated speech to convey a ` +
              `wisdom that the novel's educated characters — Godfrey, the Lantern Yard elders ` +
              `— conspicuously lack.`,
          },
        ],
      },
      {
        name: 'Dunstan (Dunsey) Cass',
        description:
          `Dunstan Cass is Godfrey's younger brother and the novel's most straightforwardly ` +
          `villainous character. Dissolute, spiteful, and parasitic, Dunstan blackmails ` +
          `Godfrey over his secret marriage to Molly Farren and ultimately steals Silas's gold ` +
          `after killing Godfrey's horse Wildfire in a hunting accident. He is the catalyst for ` +
          `the novel's central crisis — the theft of the gold — and his disappearance after ` +
          `the robbery creates a mystery that is not resolved until his skeleton is found in ` +
          `the Stone-pits sixteen years later, the gold still beside him. Eliot uses Dunstan ` +
          `as a foil to Godfrey: where Godfrey is weak but not malicious, Dunstan is actively ` +
          `cruel. His contempt for Silas — he regards the weaver as a subhuman creature whose ` +
          `possessions are fair game — reflects the broader class contempt of the gentry for ` +
          `the labouring poor. Dunstan's death in the Stone-pits functions as a form of moral ` +
          `justice: the stolen gold, which he could never spend, becomes his gravestone. ` +
          `Eliot's message is clear — ill-gotten wealth does not profit the thief. Dunstan's ` +
          `fate also serves a structural purpose, as the discovery of his skeleton coincides ` +
          `with Godfrey's confession, bringing all the novel's secrets to light simultaneously.`,
        keyQuotes: [
          {
            quote: 'What do I care about the weaver... a half-crazy miser.',
            analysis:
              `Dunstan's dismissal of Silas reveals the dehumanising effect of class ` +
              `prejudice. By reducing Silas to 'a half-crazy miser,' Dunstan can rob him ` +
              `without guilt. The phrase also reflects the Raveloe community's broader view ` +
              `of Silas before Eppie's arrival — he is not fully human to them, merely an ` +
              `oddity. Eliot uses Dunstan's contempt to expose the moral bankruptcy of a ` +
              `social order that values birth and wealth over character.`,
          },
        ],
      },
      {
        name: 'Nancy Lammeter (Cass)',
        description:
          `Nancy Lammeter, who becomes Nancy Cass after marrying Godfrey, is a woman of rigid ` +
          `moral principles and genuine goodness. She is beautiful, devout, and utterly sincere ` +
          `in her beliefs, yet Eliot presents her moral rigidity as both a strength and a ` +
          `limitation. Nancy's refusal to consider adoption — she believes it goes against ` +
          `providence — means that she and Godfrey remain childless, a source of deep ` +
          `unhappiness for both. Had she been more flexible, Godfrey might have proposed ` +
          `adopting Eppie earlier. Nancy's principles are admirable in their consistency but ` +
          `inflexible in their application, and Eliot uses her to explore how even virtuous ` +
          `convictions can have damaging consequences when applied without sensitivity to ` +
          `circumstance. Nancy is also a victim of Godfrey's dishonesty: she does not know ` +
          `about his first marriage or his relationship to Eppie, and when the truth emerges ` +
          `she is hurt but dignified. Eliot treats Nancy with great respect, presenting her as ` +
          `a genuinely good woman operating within the limitations of her upbringing and her ` +
          `class. Her final acceptance that Eppie cannot be reclaimed is one of the novel's ` +
          `most quietly moving moments — she recognises the justice of Eppie's choice even as ` +
          `it causes her pain.`,
        keyQuotes: [
          {
            quote: 'I should have no delight i\' life any more if I lost my trust in you.',
            analysis:
              `Nancy's words to Godfrey reveal how completely her happiness depends on his ` +
              `honesty — which makes his long deception all the more painful. The phrase 'no ` +
              `delight i\' life' suggests that trust is not merely a component of their ` +
              `marriage but its foundation. Eliot uses Nancy's sincerity to heighten the ` +
              `dramatic irony of Godfrey's secret, and to ensure that the reader understands ` +
              `the cost of his dishonesty to someone who deserves better.`,
          },
        ],
      },
      {
        name: 'Squire Cass',
        description:
          `Squire Cass is the father of Godfrey and Dunstan and the wealthiest man in Raveloe. ` +
          `He represents the old rural gentry in decline — his household is poorly managed, ` +
          `his sons are undisciplined, and his authority is exercised through bluster rather ` +
          `than genuine leadership. Eliot uses the Squire to illustrate the failure of the ` +
          `patriarchal class system. He has raised sons who are morally weak (Godfrey) or ` +
          `actively criminal (Dunstan) because his own parenting has been negligent and ` +
          `indulgent. The Red House, the Cass family seat, becomes a symbol of decayed ` +
          `privilege — impressive from the outside but disordered within. The Squire's loud, ` +
          `bullying manner contrasts with Silas's quiet dignity, reinforcing Eliot's argument ` +
          `that social rank is no indicator of moral worth. He also represents the complacency ` +
          `of the landed class, assuming that wealth and position will insulate his family from ` +
          `the consequences of their behaviour — an assumption the novel systematically ` +
          `disproves.`,
        keyQuotes: [
          {
            quote: 'I\'ve been too good a father to you... that\'s what it is.',
            analysis:
              `The Squire's self-assessment is unconsciously ironic. He believes he has been ` +
              `too generous, when in fact he has been too negligent. His 'goodness' as a father ` +
              `has consisted of providing material comfort without moral guidance, producing ` +
              `sons who are wealthy but ethically bankrupt. Eliot uses the Squire's ` +
              `self-deception to critique a parenting model based on indulgence rather than ` +
              `instruction.`,
          },
        ],
      },
    ],

    // ── KEY QUOTES ───────────────────────────────────────────
    keyQuotes: [
      {
        quote: 'He seemed to weave, like the spider, from pure impulse, without reflection.',
        speaker: 'Narrator',
        chapter: 'Chapter 2',
        analysis:
          `The spider simile captures Silas's dehumanisation during his years of isolation. ` +
          `Weaving has become a mechanical, unreflective activity — he is no longer a craftsman ` +
          `creating something meaningful but an automaton producing cloth. The comparison to a ` +
          `spider also implies entrapment: Silas is caught in the web of his own isolation, ` +
          `unable to break free. Eliot uses this image to establish the baseline from which ` +
          `Silas's transformation will be measured.`,
        themes: ['Isolation and Vulnerability', 'Wealth, Materialism, and True Value'],
      },
      {
        quote: 'The gold had kept his thoughts in an ever-repeated circle.',
        speaker: 'Narrator',
        chapter: 'Chapter 2',
        analysis:
          `The metaphor of the 'ever-repeated circle' is significant both psychologically and ` +
          `structurally. Silas's life has no narrative — no development, no change, no growth. ` +
          `The gold provides comfort but not meaning, security but not purpose. Eliot uses this ` +
          `image of circularity to contrast with the linear, progressive narrative that begins ` +
          `when Eppie arrives, suggesting that genuine human connection is the prerequisite ` +
          `for a meaningful life.`,
        themes: ['Wealth, Materialism, and True Value', 'Community and Belonging'],
      },
      {
        quote: 'In old days there were angels who came and took men by the hand and led them away from the city of destruction.',
        speaker: 'Narrator',
        chapter: 'Chapter 14',
        analysis:
          `This Bunyan allusion frames Eppie's arrival in providential terms. Eliot, who was ` +
          `not a conventional Christian, nonetheless uses the language of religious salvation ` +
          `to describe Silas's rescue from spiritual death. The 'city of destruction' is his ` +
          `cottage — a place of isolation and obsessive materialism. Eppie is the 'angel' who ` +
          `leads him out, though Eliot's point is that salvation comes through human love ` +
          `rather than divine intervention.`,
        themes: ['The Transformative Power of Love', 'Faith, Doubt, and Moral Justice'],
      },
      {
        quote: 'the gold had turned into the gold-haired child',
        speaker: 'Narrator',
        chapter: 'Chapter 14',
        analysis:
          `This is the novel's most concentrated symbolic statement. The transformation of ` +
          `gold coins into a golden-haired child encapsulates the entire moral arc: material ` +
          `wealth is replaced by human love. The verb 'turned' suggests alchemy — a magical ` +
          `transformation of base metal into something precious. Eliot's imagery asserts that ` +
          `Eppie is not merely a consolation for the lost gold but something categorically ` +
          `superior to it.`,
        themes: ['Wealth, Materialism, and True Value', 'The Transformative Power of Love'],
      },
      {
        quote: 'I can\'t feel as I\'ve got any father but one.',
        speaker: 'Eppie',
        chapter: 'Chapter 19',
        analysis:
          `Eppie's refusal of Godfrey is the novel's moral climax. Her simple, ` +
          `dialect-inflected language carries more authority than any educated speech could, ` +
          `because it speaks from lived experience rather than abstract principle. She defines ` +
          `fatherhood as a relationship built through daily care, not biological connection — ` +
          `a radical claim in a society structured by blood and inheritance. Eliot uses Eppie's ` +
          `voice to deliver the novel's central argument.`,
        themes: ['The Transformative Power of Love', 'Class and Social Hierarchy'],
      },
      {
        quote: 'It is too late now. That is a debt I can\'t repay.',
        speaker: 'Godfrey Cass',
        chapter: 'Chapter 20',
        analysis:
          `Godfrey's acknowledgement of his failure is the novel's most poignant admission of ` +
          `guilt. The financial metaphor — 'debt' — is characteristically Godfrey: he ` +
          `understands obligation better than love. The finality of 'too late' carries the ` +
          `weight of the novel's moral scheme: there is a time for right action, and when that ` +
          `time passes, it cannot be reclaimed. Eliot refuses to grant Godfrey redemption, ` +
          `because his sin was not a single act but sixteen years of sustained dishonesty.`,
        themes: ['Faith, Doubt, and Moral Justice', 'Class and Social Hierarchy'],
      },
      {
        quote: 'there\'s dealings as is brought to light and made clear.',
        speaker: 'Dolly Winthrop',
        chapter: 'Chapter 16',
        analysis:
          `Dolly's words articulate the novel's faith in an ultimately just moral order. The ` +
          `image of things being 'brought to light' connects to the novel's recurring imagery ` +
          `of darkness and illumination — Silas's dark cottage, the light of his fire that ` +
          `draws Eppie in, the eventual exposure of all secrets. Dolly does not claim to ` +
          `understand the mechanism of justice, only to trust in its existence. Eliot uses her ` +
          `as the voice of an instinctive moral wisdom that proves more reliable than either ` +
          `Lantern Yard's dogmatism or Godfrey's evasion.`,
        themes: ['Faith, Doubt, and Moral Justice', 'Community and Belonging'],
      },
      {
        quote: 'I\'d nothing to do but to trust to Chance.',
        speaker: 'Godfrey Cass',
        chapter: 'Chapter 9',
        analysis:
          `Godfrey's capitalisation of 'Chance' is revealing — he has elevated randomness to ` +
          `the status of a guiding principle, a substitute for the moral agency he refuses to ` +
          `exercise. Eliot contrasts this with the novel's actual moral structure, in which ` +
          `consequences follow choices with relentless logic. Godfrey's faith in chance is ` +
          `the antithesis of Dolly's faith in providence, and Eliot makes clear which is the ` +
          `more reliable guide.`,
        themes: ['Faith, Doubt, and Moral Justice', 'Class and Social Hierarchy'],
      },
      {
        quote: 'When Marner\'s sensibility returned... he saw a golden head on his hearth.',
        speaker: 'Narrator',
        chapter: 'Chapter 12',
        analysis:
          `The moment when Silas sees Eppie for the first time is carefully constructed to echo ` +
          `his relationship with his gold. The 'golden head' on his hearth recalls the golden ` +
          `coins he kept by the same fire. Eliot uses the repetition of 'golden' to signal ` +
          `both continuity and transformation — Silas's capacity for devotion has not changed, ` +
          `but its object has been elevated from metal to a human being. The word 'sensibility' ` +
          `also suggests that Eppie restores not just his attention but his capacity to feel.`,
        themes: ['The Transformative Power of Love', 'Wealth, Materialism, and True Value'],
      },
      {
        quote: 'The child was sent to me: there\'s dealings with us — there\'s dealings.',
        speaker: 'Silas Marner',
        chapter: 'Chapter 13',
        analysis:
          `Silas's repetition of 'there\'s dealings' marks the beginning of his return to ` +
          `faith — not the dogmatic faith of Lantern Yard, but a tentative trust that the ` +
          `universe is not entirely indifferent. He borrows Dolly's language ('dealings') ` +
          `because he has no vocabulary of his own for this new feeling. Eliot shows faith ` +
          `being reborn not through theology but through the experience of receiving an ` +
          `undeserved gift. The passive construction — 'the child was sent to me' — implies ` +
          `a sender, though Silas cannot yet name one.`,
        themes: ['Faith, Doubt, and Moral Justice', 'The Transformative Power of Love'],
      },
      {
        quote: 'Since the time the child was sent to me and I\'ve come to love her... I\'ve had light enough to trusten by.',
        speaker: 'Silas Marner',
        chapter: 'Chapter 16',
        analysis:
          `The metaphor of light is central to the novel. Silas has moved from the darkness ` +
          `of isolation and miserliness to the illumination of love and faith. The dialect ` +
          `word 'trusten' gives the statement an earnest, unpolished quality that enhances its ` +
          `sincerity. Eliot uses light throughout the novel — Silas's fire draws Eppie in, the ` +
          `discovery of Dunstan's body brings truth to light — to structure a narrative that ` +
          `moves from darkness to illumination, from ignorance to understanding.`,
        themes: ['Faith, Doubt, and Moral Justice', 'The Transformative Power of Love'],
      },
      {
        quote: 'I think those have the least conscience that have the most lace on their coats.',
        speaker: 'Dolly Winthrop',
        chapter: 'Chapter 16',
        analysis:
          `Dolly's observation is a concise indictment of the class system. 'Lace on their ` +
          `coats' is a metonym for wealth and social status, and Dolly's claim that the ` +
          `wealthy have the 'least conscience' is borne out by the novel's plot — it is the ` +
          `gentry (Godfrey, Dunstan, the Squire) who act dishonestly, while the humble ` +
          `villagers demonstrate greater integrity. Eliot gives this radical social critique ` +
          `to the least educated character in the novel, suggesting that moral insight has ` +
          `nothing to do with intellectual sophistication.`,
        themes: ['Class and Social Hierarchy', 'Community and Belonging'],
      },
    ],

    // ── CONTEXT POINTS ───────────────────────────────────────
    contextPoints: [
      'Published in 1861, Silas Marner is set in the early 19th century (around 1800-1830), ' +
        'a period of rapid industrialisation and social change in England. The rural village ' +
        'of Raveloe represents a pre-industrial world that was already disappearing when ' +
        'Eliot wrote the novel.',
      'George Eliot was the pen name of Mary Ann Evans, who adopted a male pseudonym to ' +
        'ensure her work would be taken seriously in a literary culture that was dismissive ' +
        'of women writers.',
      'Eliot had abandoned orthodox Christianity by the time she wrote Silas Marner, ' +
        'influenced by German Higher Criticism and the philosophy of Ludwig Feuerbach. The ' +
        'novel\'s treatment of faith reflects her belief that religion\'s value lies in its ' +
        'capacity to foster human sympathy rather than in its doctrinal truth claims.',
      'The Dissenting chapel at Lantern Yard represents the narrow, doctrinaire form of ' +
        'Protestantism that Eliot knew from her Midlands upbringing. The drawing of lots as ' +
        'a method of determining guilt was a real practice among some Nonconformist ' +
        'congregations.',
      'The novel explores the condition of the English rural poor in the early 19th century. ' +
        'Handloom weavers like Silas were among the most economically vulnerable workers, ' +
        'their livelihoods increasingly threatened by mechanised factory production.',
      'Eliot\'s concept of moral consequences — sometimes called her "religion of humanity" ' +
        '— underpins the novel\'s structure. She believed that actions have natural ' +
        'consequences and that a just moral order can exist without supernatural enforcement.',
      'The novel\'s parallel plot structure — Silas\'s story and Godfrey\'s story — allows ' +
        'Eliot to examine the same themes (parenthood, honesty, wealth, love) across ' +
        'different social classes, reinforcing her argument that moral worth is independent ' +
        'of social status.',
    ],

    // ── EXAM TIPS ────────────────────────────────────────────
    examTips: [
      'Always refer to Eliot as a conscious craftsperson. Use phrases like "Eliot ' +
        'constructs," "Eliot juxtaposes," or "Eliot uses the parallel plot structure to..." ' +
        'to demonstrate AO2 awareness of the writer\'s methods.',
      'When discussing the 19th-century context (AO3), focus on specific, relevant points: ' +
        'the treatment of Dissenting congregations, the economic vulnerability of handloom ' +
        'weavers, the social stigma of illegitimacy, and the rigid class hierarchy of rural ' +
        'England.',
      'Track the gold-to-Eppie symbolism throughout your response. The substitution of ' +
        'material gold for human gold is the novel\'s central symbolic structure and should ' +
        'feature in almost any essay you write about Silas Marner.',
      'Compare Silas and Godfrey as parallel figures: both are fathers, both face moral ' +
        'choices, and both are shaped by the consequences of those choices. This comparison ' +
        'allows you to address multiple themes simultaneously.',
      'Analyse Eliot\'s use of dialect. Characters like Dolly Winthrop and Eppie speak in ' +
        'Midlands dialect, which signals their class position but also their moral ' +
        'authenticity — they speak plainly because they think and feel honestly.',
      'For top-band responses, engage with Eliot\'s moral philosophy. She does not use ' +
        'supernatural punishment or reward; instead, consequences arise naturally from ' +
        'characters\' choices. This "religion of humanity" is a key contextual point that ' +
        'distinguishes sophisticated responses.',
      'Do not treat Silas Marner as a simple fable. While it has fairy-tale elements (the ' +
        'foundling child, the miser redeemed by love), Eliot\'s psychological realism and ' +
        'social critique give it a complexity that examiners want to see explored.',
    ],

    // ── SAMPLE QUESTIONS ─────────────────────────────────────
    sampleQuestions: [
      {
        question: 'How does Eliot present the importance of community in Silas Marner?',
        planPoints: [
          'Contrast the false community of Lantern Yard (rigid doctrine, drawing of lots, ' +
            'betrayal by William Dane) with the genuine community of Raveloe (Dolly ' +
            'Winthrop\'s practical kindness, shared celebrations).',
          'Analyse Silas\'s isolation as a form of spiritual death — without community, he ' +
            'becomes mechanical, "like the spider."',
          'Explore how Eppie\'s arrival forces Silas back into the community: he must ' +
            'interact with neighbours, seek advice, and participate in village life.',
          'Discuss the role of Dolly Winthrop as the embodiment of community values: ' +
            'kindness, practical help, and non-judgemental acceptance.',
          'Connect to 19th-century context: the novel is set during a period of rapid social ' +
            'change, and Eliot uses Raveloe to explore what is lost when traditional ' +
            'communities break down.',
        ],
      },
      {
        question: 'How does Eliot use the character of Godfrey Cass to explore ideas about ' +
          'moral responsibility?',
        planPoints: [
          'Analyse Godfrey\'s reliance on "Chance" as a substitute for moral agency — he ' +
            'avoids making decisions and hopes circumstances will resolve themselves.',
          'Explore the dramatic irony of Godfrey\'s secret: the reader knows about his ' +
            'marriage and his child long before the truth is revealed to other characters.',
          'Discuss Godfrey\'s attempt to reclaim Eppie as an act of class presumption — he ' +
            'assumes that wealth entitles him to a relationship he has not earned.',
          'Examine Eliot\'s moral scheme: Godfrey\'s punishment (childlessness, the loss of ' +
            'Eppie) arises naturally from his choices rather than from supernatural ' +
            'intervention.',
          'Connect to context: Godfrey\'s privilege as a member of the rural gentry enables ' +
            'his dishonesty — wealth provides the means to avoid consequences that the poor ' +
            'cannot escape.',
        ],
      },
      {
        question: 'How does Eliot present the theme of wealth and its limitations in Silas ' +
          'Marner?',
        planPoints: [
          'Analyse Silas\'s relationship with his gold as a form of emotional substitution — ' +
            'the coins replace human connection, providing comfort but not meaning.',
          'Explore the symbolic replacement of gold coins with the golden-haired Eppie: ' +
            'material wealth is supplanted by human love.',
          'Discuss Godfrey Cass\'s wealth as a source of moral weakness — his money enables ' +
            'him to avoid consequences and delay honest action.',
          'Examine Dunstan\'s theft and death as a parable about the futility of ill-gotten ' +
            'wealth: the gold he stole accompanied him to his grave but could never be spent.',
          'Connect to context: Eliot\'s "religion of humanity" argues that moral worth is ' +
            'independent of material wealth, a radical claim in a class-stratified society.',
        ],
      },
      {
        question: 'How does Eliot explore ideas about parenthood and family in Silas Marner?',
        planPoints: [
          'Compare Silas\'s devoted parenting with Godfrey\'s abandonment — both are fathers, ' +
            'but only one acts on the responsibilities that come with the role.',
          'Analyse Eppie\'s choice to stay with Silas as a validation of nurture over nature ' +
            '— the parent who raised her has a greater claim than the parent who conceived her.',
          'Explore the Squire Cass\'s failed patriarchy: his negligent parenting produces sons ' +
            'who are morally weak (Godfrey) or criminal (Dunstan).',
          'Discuss Dolly Winthrop as a model of community-supported parenting: she helps ' +
            'Silas raise Eppie, demonstrating that children thrive when cared for by a ' +
            'village, not just an individual.',
          'Connect to 19th-century context: illegitimacy carried severe social stigma, and ' +
            'Eliot critiques a system that punished children for the circumstances of their ' +
            'birth.',
        ],
      },
    ],

    // ── GRADE BOOST ──────────────────────────────────────────
    gradeBoost: {
      grade5:
        'At Grade 5, you need to show clear understanding of the text with relevant ' +
        'quotations. Explain how Eliot uses language and structure to create effects — for ' +
        'example, how the symbolism of gold connects to the theme of wealth, or how the ' +
        'parallel plots of Silas and Godfrey highlight the importance of honesty. Use context ' +
        'to support your points: mention the class system, the treatment of Dissenting ' +
        'communities, and the economic vulnerability of weavers.',
      grade7:
        'At Grade 7, you should analyse Eliot\'s methods with precision. Explore how specific ' +
        'images — the spider simile, the "ever-repeated circle," the golden-haired child — ' +
        'create layers of meaning. Discuss structural choices such as the parallel plot, the ' +
        'time leap of sixteen years, and the coincidence of Eppie\'s arrival with the theft ' +
        'of the gold. Integrate context fluidly: connect Eliot\'s moral philosophy (her ' +
        '"religion of humanity") to the novel\'s treatment of faith, consequence, and social ' +
        'justice without writing a separate context paragraph.',
      grade9:
        'At Grade 9, you should offer a critical, evaluative response that considers the ' +
        'novel\'s complexities and ambiguities. Is Eliot\'s moral scheme convincingly ' +
        'realistic or does it rely on fairy-tale coincidence? Does Eppie\'s refusal of ' +
        'Godfrey represent genuine agency or is she merely choosing what she knows? Explore ' +
        'Eliot\'s narrative voice — her combination of sympathy and irony, her ability to ' +
        'inhabit characters across class boundaries — as a technique in itself. Engage with ' +
        'the novel as a product of its historical moment: Eliot writes about a pre-industrial ' +
        'past from the vantage point of the 1860s, and this temporal distance shapes her ' +
        'perspective in ways worth examining.',
    },
  },
];

export default wjecWomanBlackAndSilas;
