const aqaLitSetTexts = [
  // ─────────────────────────────────────────────────────────
  //  COURSE 1 — AQA Macbeth Study Guide
  // ─────────────────────────────────────────────────────────
  {
    id: 'aqa-lit-macbeth',
    title: 'AQA Literature: Macbeth',
    subtitle: 'Shakespeare — Paper 1 Section A (8702)',
    tier: 'GCSE',
    board: 'AQA',
    specCode: '8702',
    price: 39,
    duration: '4 hours',
    level: 'Intermediate',
    description: 'Complete Macbeth study guide for AQA GCSE Literature Paper 1.',
    color: 'from-blue-600 to-blue-800',

    moduleList: [
      // ── Module 1: Act 1 ──
      {
        id: 'aqa-mac-m1',
        title: 'Act 1: Witches, Ambition & Lady Macbeth',
        duration: '40 mins',
        content: `<h2>Act 1 — The Seeds of Destruction</h2>

<p>Act 1 of <em>Macbeth</em> establishes the central forces that will drive the tragedy: the <span class="key-term">supernatural</span>, unchecked <span class="key-term">ambition</span>, and the formidable influence of Lady Macbeth. Shakespeare opens on a battlefield shrouded in thunder and lightning, immediately signalling that the natural order is disturbed. The Weird Sisters appear in the very first scene, chanting "Fair is foul, and foul is fair" — a paradox that collapses the boundary between good and evil and sets the moral confusion that haunts the entire play.</p>

<h3>The Weird Sisters and the Prophecy</h3>
<p>When Macbeth and Banquo encounter the witches on the heath (Act 1 Scene 3), they are greeted with three prophecies: Macbeth shall be Thane of Glamis (which he already is), Thane of Cawdor, and "King hereafter." Banquo is told he will be "lesser than Macbeth and greater" and that his descendants will be kings. The witches vanish, leaving Macbeth stunned. Almost immediately, Ross arrives to announce that Macbeth has been named Thane of Cawdor — the first prophecy fulfilled. This ignites a dangerous chain of thought.</p>

<div class="text-extract">"If chance will have me king, why, chance may crown me<br>Without my stir."<div class="source">Macbeth, Act 1 Scene 3</div></div>

<p>At this point, Macbeth entertains the idea that he might become king passively — "without my stir." However, this passive hope quickly gives way to active plotting once Lady Macbeth intervenes. Shakespeare shows how quickly ambition can shift from idle thought to murderous intent when the right catalyst appears.</p>

<h3>Ambition: The Spark and the Fuel</h3>
<p>King Duncan names his son Malcolm as heir to the throne (Act 1 Scene 4), which Macbeth privately calls "a step / On which I must fall down, or else o'erleap." The metaphor of leaping over an obstacle reveals that Macbeth already sees the succession as a barrier to overcome rather than a legitimate political arrangement. Ambition is no longer idle — it is actively seeking a path forward. Duncan's visit to Macbeth's castle at Inverness provides the opportunity.</p>

<div class="key-term"><strong>Key Term: Hamartia</strong> — A tragic hero's fatal flaw. Macbeth's hamartia is his "vaulting ambition," which he identifies in the Act 1 Scene 7 soliloquy. This flaw drives every destructive decision he makes.</div>

<h3>Lady Macbeth: The Driving Force</h3>
<p>Lady Macbeth receives her husband's letter about the prophecy (Act 1 Scene 5) and immediately resolves that Duncan must die. She fears Macbeth is "too full o'th' milk of human kindness" to act and calls upon dark spirits to "unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty." This invocation is Shakespeare's way of showing that Lady Macbeth must actively suppress her humanity — her natural compassion — to push the murder forward. The verb "unsex" suggests she sees femininity as an obstacle to ruthlessness.</p>

<div class="text-extract">"Look like th'innocent flower,<br>But be the serpent under't."<div class="source">Lady Macbeth, Act 1 Scene 5</div></div>

<p>Lady Macbeth's advice to Macbeth draws on the biblical imagery of the serpent in the Garden of Eden, linking their plot to original sin. She becomes the dominant partner, mocking Macbeth's hesitation in Act 1 Scene 7 by questioning his manhood: "When you durst do it, then you were a man." Her manipulation is psychological — she attacks his identity until he agrees to act.</p>

<h3>The "If it were done" Soliloquy (Act 1 Scene 7)</h3>
<p>Macbeth's soliloquy is the moral heart of Act 1. He lists reasons <em>not</em> to kill Duncan: he is Duncan's kinsman, his host, and his subject. Duncan has been a good king. Macbeth concludes that only "vaulting ambition" drives him — and yet this single flaw is enough. When Lady Macbeth attacks his courage, he capitulates. The act ends with the couple united in their plan, but the soliloquy has shown the audience that Macbeth knows the murder is wrong. This awareness makes his choice all the more damning.</p>

<div class="examiner-tip"><strong>AO1 Tip:</strong> When writing about Act 1, show how Shakespeare builds Macbeth's internal conflict. A top-band response will trace how Macbeth moves from passive hope ("chance may crown me") to active decision, driven by Lady Macbeth's manipulation and his own ambition.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Saying the witches "made" Macbeth kill Duncan. The witches prophesy but never command. Shakespeare leaves the question of free will deliberately ambiguous — and examiners reward students who explore this.</div>`,
        quiz: [
          { id: 'aqa-mac-m1-q1', question: 'What three titles do the Weird Sisters prophesy for Macbeth?', options: ['King of Scotland, King of England, Emperor', 'Thane of Glamis, Thane of Cawdor, King hereafter', 'Duke of Cawdor, Prince of Cumberland, King of Scotland', 'Earl of Glamis, Thane of Cawdor, Lord of Inverness'], correct: 1, explanation: 'The witches hail Macbeth as Thane of Glamis (his current title), Thane of Cawdor (which is immediately confirmed by Ross), and "King hereafter." This triple prophecy ignites the ambition that drives the tragedy.' },
          { id: 'aqa-mac-m1-q2', question: 'What does Lady Macbeth mean by "unsex me here"?', options: ['She wants to disguise herself as a man', 'She wants to remove her feminine compassion so she can be ruthless', 'She wants to divorce Macbeth', 'She is calling on the witches to give her supernatural powers'], correct: 1, explanation: 'Lady Macbeth asks dark spirits to strip away her femininity — the compassion and tenderness associated with womanhood — so she can drive the murder of Duncan without hesitation. It shows she must actively suppress her humanity to act.' },
          { id: 'aqa-mac-m1-q3', question: 'In his Act 1 Scene 7 soliloquy, what does Macbeth identify as his only motivation for killing Duncan?', options: ['Revenge for a past wrong', 'Vaulting ambition', 'Loyalty to his wife', 'Fear of the witches\' curse'], correct: 1, explanation: 'Macbeth acknowledges he has "no spur / To prick the sides of my intent, but only / Vaulting ambition." He cannot find a moral or rational reason — only raw ambition — making his decision to proceed all the more tragic.' },
          { id: 'aqa-mac-m1-q4', question: 'What biblical allusion does Lady Macbeth use when she tells Macbeth to "look like th\'innocent flower, but be the serpent under\'t"?', options: ['The story of Noah and the flood', 'The serpent in the Garden of Eden', 'The burning bush seen by Moses', 'The betrayal of Jesus by Judas'], correct: 1, explanation: 'The serpent alludes to Satan in the Garden of Eden who deceived Eve. Lady Macbeth is telling Macbeth to appear innocent while concealing murderous intent, linking their plot to original sin and the fall of humankind.' },
        ],
      },

      // ── Module 2: Act 2 ──
      {
        id: 'aqa-mac-m2',
        title: 'Act 2: Regicide, Guilt & Dramatic Irony',
        duration: '40 mins',
        content: `<h2>Act 2 — The Murder of Duncan</h2>

<p>Act 2 is the dramatic turning point of the play. Macbeth murders King Duncan, an act that is never shown on stage — Shakespeare keeps it off-stage to preserve its horror and force the audience to imagine it. The act explores the immediate psychological aftermath of regicide: guilt, paranoia, and the fracturing of Macbeth's mind. It is also rich in <span class="key-term">dramatic irony</span>, as characters unknowingly comment on events the audience already understands.</p>

<h3>The Dagger Soliloquy (Act 2 Scene 1)</h3>
<p>Before committing the murder, Macbeth hallucinates a floating dagger leading him towards Duncan's chamber. "Is this a dagger which I see before me, / The handle toward my hand?" The dagger is a powerful symbol of Macbeth's tortured conscience. He cannot tell whether it is real or "a dagger of the mind, a false creation / Proceeding from the heat-oppressed brain." The hallucination reveals that Macbeth's psyche is already fragmenting under the weight of what he is about to do.</p>

<div class="text-extract">"Is this a dagger which I see before me,<br>The handle toward my hand? Come, let me clutch thee.<br>I have thee not, and yet I see thee still."<div class="source">Macbeth, Act 2 Scene 1</div></div>

<p>Shakespeare uses the soliloquy to build unbearable tension. The audience watches Macbeth wrestle with his own mind, knowing that he will go through with the murder. The contradictions — "I have thee not, and yet I see thee still" — mirror the paradox of a man who knows murder is wrong yet cannot stop himself. The dagger's handle points toward his hand, as if fate itself is guiding him, raising the question of agency that runs throughout the play.</p>

<h3>The Murder and Its Immediate Aftermath</h3>
<p>After killing Duncan off-stage, Macbeth returns to Lady Macbeth in a state of horror (Act 2 Scene 2). He carries the daggers with him — a crucial mistake — and stares at his bloody hands: "Will all great Neptune's ocean wash this blood / Clean from my hand? No, this my hand will rather / The multitudinous seas incarnadine, / Making the green one red." The shift from the elaborate Latinate "incarnadine" to the blunt monosyllables "making the green one red" captures a mind veering between poetic abstraction and raw, horrified simplicity.</p>

<div class="key-term"><strong>Key Term: Regicide</strong> — The killing of a king. In Jacobean England, regicide was considered not just treason but a sin against God, because monarchs were believed to rule by divine appointment (the Divine Right of Kings).</div>

<p>Lady Macbeth, by contrast, is calm and pragmatic. She chides Macbeth for bringing the daggers back and returns them herself, smearing the sleeping grooms with blood. She dismisses his guilt with "A little water clears us of this deed," a line that becomes bitterly ironic when she later sleepwalks, obsessively trying to wash imaginary blood from her hands.</p>

<h3>Dramatic Irony: The Porter Scene and the Discovery</h3>
<p>The Porter's comic scene (Act 2 Scene 3) provides a moment of dark humour amid the horror. He imagines himself as the gatekeeper of hell — "Here's a knocking indeed! If a man were porter of hell-gate, he should have old turning the key." The joke is that the castle <em>has</em> become hell: a king has been murdered within its walls. This is dramatic irony of the bleakest kind.</p>

<p>When Macduff discovers Duncan's body, Macbeth performs a display of grief that the audience knows is false. He claims to have killed the grooms in a rage of loyalty — "Who could refrain, / That had a heart to love, and in that heart / Courage to make's love known?" — but the audience recognises this as a calculated cover-up. Meanwhile, Malcolm and Donalbain flee, recognising that they may be next, and their flight makes them look guilty — another layer of irony.</p>

<h3>The Disruption of Nature</h3>
<p>Shakespeare reinforces the horror of regicide through unnatural events. The Old Man reports that "a falcon, towering in her pride of place, / Was by a mousing owl hawked at and killed" and that Duncan's horses "turned wild in nature, broke their stalls." These disturbances reflect the Jacobean belief that killing a divinely appointed king disrupts the entire natural order — the <span class="key-term">Great Chain of Being</span>.</p>

<div class="examiner-tip"><strong>AO2 Tip:</strong> Analyse Shakespeare's language choices closely. The shift from "incarnadine" to "making the green one red" is a gift for close reading — discuss how the change in register mirrors Macbeth's psychological state.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Forgetting that Duncan's murder happens off-stage. Shakespeare deliberately keeps the act of regicide unseen. Discuss <em>why</em> — it forces the audience to focus on the psychological horror rather than physical violence, and it preserves the sacred horror of killing a king.</div>`,
        quiz: [
          { id: 'aqa-mac-m2-q1', question: 'What does Macbeth hallucinate before murdering Duncan?', options: ['Banquo\'s ghost', 'A floating dagger', 'A crown of blood', 'The Weird Sisters dancing'], correct: 1, explanation: 'Macbeth sees a floating dagger leading him toward Duncan\'s chamber. The hallucination symbolises his tortured conscience and fractured mental state. He cannot tell if it is real or "a dagger of the mind."' },
          { id: 'aqa-mac-m2-q2', question: 'Why is Lady Macbeth\'s line "A little water clears us of this deed" dramatically ironic?', options: ['Because water cannot actually remove blood stains', 'Because she later sleepwalks obsessively trying to wash imaginary blood from her hands', 'Because Macbeth drowns in a river later in the play', 'Because the grooms were washed in water before being killed'], correct: 1, explanation: 'In Act 5, Lady Macbeth sleepwalks and desperately tries to wash imaginary blood from her hands — "Out, damned spot!" Her dismissive claim that "a little water" would suffice is bitterly ironic: guilt cannot be washed away.' },
          { id: 'aqa-mac-m2-q3', question: 'What is the dramatic function of the Porter scene (Act 2 Scene 3)?', options: ['To provide a rest for the lead actors', 'To show that the servants are disloyal', 'To create dark comedy and reinforce the idea that Macbeth\'s castle has become hell', 'To introduce a new subplot about religion'], correct: 2, explanation: 'The Porter imagines he is the gatekeeper of hell. The dark humour provides brief relief from tension while reinforcing the horror: Macbeth\'s castle has literally become a place of damnation after the king\'s murder.' },
          { id: 'aqa-mac-m2-q4', question: 'What do the unnatural events after Duncan\'s murder (horses eating each other, an owl killing a falcon) signify?', options: ['That the witches are casting new spells', 'That a storm is approaching Scotland', 'That regicide disrupts the Great Chain of Being and the natural order', 'That Scotland is being invaded by a foreign army'], correct: 2, explanation: 'For a Jacobean audience, the king sat at the top of the natural order (the Great Chain of Being), appointed by God. Killing the king disrupts this chain, causing nature itself to rebel — reflecting the cosmic horror of regicide.' },
        ],
      },

      // ── Module 3: Act 3 ──
      {
        id: 'aqa-mac-m3',
        title: 'Act 3: Tyranny, Banquo & the Feast',
        duration: '40 mins',
        content: `<h2>Act 3 — Macbeth's Descent into Tyranny</h2>

<p>By Act 3, Macbeth has achieved the crown, but the witches' prophecy about Banquo — that his descendants will be kings — gnaws at him. The murder of Duncan has not brought peace; it has bred paranoia and a compulsion to kill again. Shakespeare shows that once the moral boundary of regicide is crossed, further violence becomes easier and more cold-blooded. Macbeth's transformation from reluctant murderer to calculating tyrant accelerates in this act.</p>

<h3>Macbeth's Fear of Banquo</h3>
<p>In the opening soliloquy of Act 3, Macbeth reflects on the witches' prophecy: "They hailed him father to a line of kings. / Upon my head they placed a fruitless crown." The adjective "fruitless" is loaded with meaning — it suggests sterility, futility, and the absence of legacy. Macbeth has committed the ultimate sin for a crown that will pass not to his own children but to Banquo's. This is what drives him to order Banquo's assassination.</p>

<div class="text-extract">"To be thus is nothing,<br>But to be safely thus. Our fears in Banquo<br>Stick deep."<div class="source">Macbeth, Act 3 Scene 1</div></div>

<p>Notice the shift from Act 1: Macbeth no longer needs Lady Macbeth's persuasion. He arranges the murder of Banquo and his son Fleance alone, hiring murderers and manipulating them much as Lady Macbeth once manipulated him. He has become self-sufficient in evil. He even keeps Lady Macbeth in the dark — "Be innocent of the knowledge, dearest chuck" — a reversal of their earlier dynamic where she was the dominant plotter.</p>

<h3>The Murder of Banquo</h3>
<p>The murderers ambush Banquo and Fleance in Act 3 Scene 3. Banquo is killed but Fleance escapes — a crucial detail, because it means the prophecy that Banquo's descendants will be kings remains intact. Macbeth's attempt to control fate has failed. When the murderer reports that Fleance escaped, Macbeth's reaction is telling: "Then comes my fit again. I had else been perfect." The word "fit" suggests both a seizure of rage and a recurring illness — his paranoia is now a chronic condition.</p>

<div class="key-term"><strong>Key Term: Tyrant</strong> — A ruler who governs through fear and violence rather than justice. By Act 3, Macbeth fits this definition: he orders murders, spies on his nobles, and trusts no one. The word "tyrant" is used repeatedly by other characters later in the play.</div>

<h3>The Banquet Scene (Act 3 Scene 4)</h3>
<p>The banquet scene is one of the most theatrically powerful moments in the play. Macbeth hosts a feast for his lords — a public display of kingship and authority. But when Banquo's ghost appears, sitting in Macbeth's chair, Macbeth's composure shatters. He addresses the ghost in front of his terrified guests: "Thou canst not say I did it. Never shake / Thy gory locks at me." The ghost is visible only to Macbeth, so the lords see their king raving at an empty chair.</p>

<div class="text-extract">"It will have blood, they say. Blood will have blood.<br>Stones have been known to move, and trees to speak."<div class="source">Macbeth, Act 3 Scene 4</div></div>

<p>Lady Macbeth tries to control the damage, dismissing his behaviour as a childhood affliction — "My lord is often thus, / And hath been from his youth." She echoes her earlier role as the rational, controlling partner, but her authority is slipping. By the end of the scene, the guests have departed, the feast is ruined, and Macbeth's public credibility as king is destroyed. The banquet, which should symbolise order and community, becomes a stage for Macbeth's private horror to become public.</p>

<h3>The Turning Point</h3>
<p>After the feast, Macbeth resolves to visit the witches again: "I will tomorrow — and betimes I will — to the Weird Sisters." He also notes that Macduff has refused to attend the banquet, planting the seeds of the catastrophe in Act 4. Macbeth declares that he is "in blood / Stepped in so far that, should I wade no more, / Returning were as tedious as go o'er." This metaphor of wading through a river of blood captures his moral point of no return — he cannot go back, so he will press on with further violence.</p>

<div class="examiner-tip"><strong>AO1 Tip:</strong> The banquet scene is excellent for exploring Macbeth as a character. A strong response will analyse how the ghost of Banquo externalises Macbeth's guilt and how the public setting amplifies the dramatic tension — his private crime is leaking into his public role as king.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating Banquo's ghost as a literal supernatural event. It may be a hallucination, like the dagger — Shakespeare leaves this ambiguous. The best responses explore both possibilities and what each suggests about Macbeth's psychological state.</div>`,
        quiz: [
          { id: 'aqa-mac-m3-q1', question: 'Why does Macbeth describe his crown as "fruitless"?', options: ['Because it is made of metal, not real gold', 'Because the witches prophesied that Banquo\'s descendants, not his, will be future kings', 'Because Lady Macbeth refuses to wear a crown', 'Because Duncan\'s sons are still alive and may reclaim the throne'], correct: 1, explanation: '"Fruitless" means barren — without offspring to inherit. Macbeth has murdered a king only to gain a crown that will pass to Banquo\'s line, not his own. This futility drives him to order Banquo\'s murder.' },
          { id: 'aqa-mac-m3-q2', question: 'What is significant about Macbeth arranging Banquo\'s murder without Lady Macbeth\'s involvement?', options: ['It shows he has forgotten about her', 'It shows he has become self-sufficient in evil, reversing their earlier dynamic', 'It shows he no longer trusts the murderers', 'It shows Lady Macbeth has already gone mad'], correct: 1, explanation: 'In Act 1, Lady Macbeth drove the murder of Duncan. By Act 3, Macbeth acts alone, even telling her to "be innocent of the knowledge." The reversal shows Macbeth has fully embraced tyranny and no longer needs external persuasion.' },
          { id: 'aqa-mac-m3-q3', question: 'What happens when Banquo\'s ghost appears at the banquet?', options: ['All the guests see the ghost and flee', 'Only Lady Macbeth can see the ghost and she faints', 'Only Macbeth sees the ghost and he loses his composure in front of his lords', 'Macbeth calmly ignores the ghost and continues the feast'], correct: 2, explanation: 'Banquo\'s ghost is visible only to Macbeth. He addresses the ghost in terror while his lords watch their king apparently raving at an empty chair. Lady Macbeth tries to cover for him, but the damage to his public credibility is done.' },
          { id: 'aqa-mac-m3-q4', question: 'What does the metaphor "I am in blood / Stepped in so far" suggest about Macbeth\'s moral state?', options: ['He is physically covered in blood from battle', 'He has passed the point of no return and will continue with further violence', 'He is planning to cross a river to escape Scotland', 'He regrets his actions and wants to turn back'], correct: 1, explanation: 'The river of blood metaphor captures Macbeth\'s moral point of no return. He has committed so many crimes that turning back would be as difficult as continuing forward. He chooses to press on with further violence rather than seek redemption.' },
        ],
      },

      // ── Module 4: Act 4 ──
      {
        id: 'aqa-mac-m4',
        title: 'Act 4: Apparitions & Macduff',
        duration: '40 mins',
        content: `<h2>Act 4 — False Security and True Horror</h2>

<p>Act 4 is structured around two contrasting scenes: Macbeth's visit to the witches, where he receives riddling prophecies that give him false confidence; and the devastating murder of Macduff's family, which reveals the full depth of Macbeth's tyranny. The act also develops Macduff as the instrument of Macbeth's eventual downfall and introduces the political subplot of Malcolm testing Macduff's loyalty in England.</p>

<h3>The Apparitions (Act 4 Scene 1)</h3>
<p>Macbeth seeks out the Weird Sisters, demanding answers. They conjure three apparitions, each delivering a prophecy:</p>
<ul>
<li><strong>First Apparition (an armed head):</strong> "Beware Macduff." This confirms Macbeth's existing suspicion and drives him to destroy Macduff's family.</li>
<li><strong>Second Apparition (a bloody child):</strong> "None of woman born / Shall harm Macbeth." This gives Macbeth false confidence — he believes he is invincible, not realising the loophole that Macduff was delivered by Caesarean section ("untimely ripped from his mother's womb").</li>
<li><strong>Third Apparition (a crowned child holding a tree):</strong> "Macbeth shall never vanquished be until / Great Birnam Wood to high Dunsinane Hill / Shall come against him." Macbeth dismisses this as impossible, not foreseeing that Malcolm's soldiers will camouflage themselves with branches.</li>
</ul>

<div class="text-extract">"Be bloody, bold, and resolute; laugh to scorn<br>The power of man, for none of woman born<br>Shall harm Macbeth."<div class="source">Second Apparition, Act 4 Scene 1</div></div>

<p>The apparitions are masterful examples of <span class="key-term">equivocation</span> — statements that are technically true but deliberately misleading. Shakespeare connects this to the theme of deceptive appearances ("Fair is foul") and to the real-world context of the Gunpowder Plot, where the Jesuit Henry Garnet argued that equivocation (lying by telling a partial truth) was morally acceptable. The witches equivocate to lure Macbeth into a false sense of security.</p>

<div class="key-term"><strong>Key Term: Equivocation</strong> — The use of ambiguous language to conceal the truth. The witches' prophecies are equivocations: they appear to promise Macbeth safety but actually foretell his doom. Shakespeare links this to the Gunpowder Plot trials, where equivocation was a major controversy.</div>

<h3>The Murder of Macduff's Family (Act 4 Scene 2)</h3>
<p>In one of the play's most harrowing scenes, Macbeth sends murderers to slaughter Macduff's wife and children. Unlike Duncan's murder, this atrocity is shown on stage — Shakespeare forces the audience to witness the senseless killing of innocents. Lady Macduff and her young son are given a touching, domestic exchange before the murderers arrive, making the violence all the more shocking.</p>

<p>This scene marks Macbeth's complete transformation. Duncan's murder was driven by ambition; Banquo's by fear. The slaughter of Macduff's family is pure, calculated cruelty — there is no strategic benefit, only the desire to punish Macduff for his disloyalty. Macbeth has become the "butcher" that Malcolm will later call him.</p>

<h3>Malcolm and Macduff in England (Act 4 Scene 3)</h3>
<p>The longest scene in the play takes place in England, where Malcolm tests Macduff's loyalty by pretending to be an even worse tyrant than Macbeth. He claims to be lustful, greedy, and without a single kingly virtue. When Macduff despairs — "O Scotland, Scotland!" — Malcolm reveals the test was a deception to ensure Macduff is genuine. This scene contrasts the legitimate political order (Malcolm as rightful heir, supported by the English King Edward) with Macbeth's illegitimate tyranny.</p>

<p>The scene reaches its emotional climax when Ross arrives with news that Macduff's family has been murdered. Macduff's grief is raw and devastating: "All my pretty ones? / Did you say all? O hell-kite! All?" Malcolm urges him to convert his grief into anger — "Let grief / Convert to anger; blunt not the heart, enrage it" — setting up the final act's retribution.</p>

<div class="text-extract">"He has no children. All my pretty ones?<br>Did you say all? O hell-kite! All?<br>What, all my pretty chickens and their dam<br>At one fell swoop?"<div class="source">Macduff, Act 4 Scene 3</div></div>

<p>Macduff's use of "pretty chickens" and "dam" creates a tender, domestic image that contrasts devastatingly with the "hell-kite" (a bird of prey from hell) that is Macbeth. Shakespeare gives Macduff the moral authority that will justify his killing of Macbeth in Act 5.</p>

<div class="examiner-tip"><strong>AO3 Tip:</strong> Connect the apparitions' equivocation to the historical context of the Gunpowder Plot (1605). The Jesuit priest Henry Garnet used equivocation during his trial, and the topic was a live controversy when Shakespeare wrote Macbeth. This gives the witches' riddling prophecies an extra layer of meaning for the original audience.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Overlooking Act 4 Scene 3 (the England scene) because it seems less dramatic. Examiners value responses that discuss Malcolm's "testing" of Macduff and what this reveals about legitimate versus illegitimate kingship.</div>`,
        quiz: [
          { id: 'aqa-mac-m4-q1', question: 'What does the second apparition tell Macbeth?', options: ['Beware Macduff', 'None of woman born shall harm Macbeth', 'Birnam Wood will come to Dunsinane', 'He will be king until the end of time'], correct: 1, explanation: 'The second apparition (a bloody child) tells Macbeth that "none of woman born / Shall harm Macbeth." This gives him false confidence, because the prophecy conceals the fact that Macduff was born by Caesarean section.' },
          { id: 'aqa-mac-m4-q2', question: 'What is equivocation and how do the witches use it?', options: ['Speaking in rhyming couplets to sound mystical', 'Using ambiguous language that is technically true but deliberately misleading', 'Telling outright lies to confuse Macbeth', 'Repeating the same prophecy in different words'], correct: 1, explanation: 'Equivocation means using language that appears to say one thing but actually means another. The witches\' prophecies are technically true but mislead Macbeth into believing he is invincible, when in fact they foretell his doom.' },
          { id: 'aqa-mac-m4-q3', question: 'Why does Shakespeare show the murder of Macduff\'s family on stage, unlike Duncan\'s murder?', options: ['Because the actors demanded more stage time', 'To show that this act of violence is senseless cruelty against innocents, forcing the audience to witness Macbeth\'s full moral degradation', 'Because the audience would not believe it happened otherwise', 'To provide a dramatic battle scene'], correct: 1, explanation: 'Duncan\'s murder is kept off-stage to preserve its sacred horror. By contrast, Shakespeare forces the audience to watch the slaughter of innocent women and children, making Macbeth\'s tyranny undeniable and building sympathy for Macduff\'s revenge.' },
          { id: 'aqa-mac-m4-q4', question: 'Why does Malcolm pretend to be a terrible person when speaking to Macduff in England?', options: ['He has genuinely become corrupt in exile', 'He is testing Macduff\'s loyalty to ensure he is not a spy for Macbeth', 'He wants Macduff to return to Scotland alone', 'He is rehearsing a speech for the English king'], correct: 1, explanation: 'Malcolm tests Macduff by claiming to possess terrible vices. When Macduff responds with genuine despair for Scotland rather than blind flattery, Malcolm knows he is trustworthy. The scene contrasts legitimate kingship with Macbeth\'s tyranny.' },
        ],
      },

      // ── Module 5: Act 5 ──
      {
        id: 'aqa-mac-m5',
        title: 'Act 5: Madness, Nemesis & Restoration',
        duration: '40 mins',
        content: `<h2>Act 5 — The Fall of the Tyrant</h2>

<p>Act 5 brings the tragedy to its devastating conclusion. The witches' equivocal prophecies unravel, Lady Macbeth succumbs to guilt-driven madness, and Macbeth faces his nemesis in Macduff. Shakespeare structures the final act as a rapid sequence of short scenes, creating a breathless momentum that mirrors the accelerating collapse of Macbeth's world. The act ends with the restoration of legitimate order under Malcolm — the natural order that Macbeth's regicide disrupted is finally repaired.</p>

<h3>Lady Macbeth's Sleepwalking (Act 5 Scene 1)</h3>
<p>Lady Macbeth's sleepwalking scene is one of the most powerful in all of Shakespeare. A doctor and a gentlewoman observe Lady Macbeth walking in her sleep, rubbing her hands and muttering: "Out, damned spot! Out, I say!" She is trying to wash imaginary blood from her hands — the blood of Duncan that she once dismissed with "A little water clears us of this deed." The dramatic irony is devastating: the woman who suppressed all guilt has been destroyed by it.</p>

<div class="text-extract">"Here's the smell of the blood still. All the<br>perfumes of Arabia will not sweeten this little<br>hand. Oh, Oh, Oh!"<div class="source">Lady Macbeth, Act 5 Scene 1</div></div>

<p>Shakespeare switches Lady Macbeth from verse to prose in this scene — a significant choice. Verse is associated with control, status, and rationality; prose with disorder and madness. Lady Macbeth, who once spoke in commanding iambic pentameter, now speaks in broken, fragmented prose. Her language has disintegrated along with her mind. The triple exclamation "Oh, Oh, Oh!" is raw, primal grief stripped of all eloquence.</p>

<div class="key-term"><strong>Key Term: Nemesis</strong> — The inescapable agent of someone's downfall; also the concept of divine retribution. Macduff is Macbeth's nemesis — the instrument of justice who fulfils the witches' warning to "beware Macduff." In Greek tragedy, nemesis is the punishment that follows hubris (excessive pride).</div>

<h3>"Tomorrow and tomorrow and tomorrow" (Act 5 Scene 5)</h3>
<p>When Macbeth learns of Lady Macbeth's death, his response is one of Shakespeare's most famous speeches. Rather than grief, Macbeth expresses a bleak, nihilistic despair:</p>

<div class="text-extract">"Tomorrow, and tomorrow, and tomorrow,<br>Creeps in this petty pace from day to day<br>To the last syllable of recorded time;<br>And all our yesterdays have lighted fools<br>The way to dusty death. Out, out, brief candle!<br>Life's but a walking shadow, a poor player<br>That struts and frets his hour upon the stage<br>And then is heard no more. It is a tale<br>Told by an idiot, full of sound and fury,<br>Signifying nothing."<div class="source">Macbeth, Act 5 Scene 5</div></div>

<p>This speech reveals that Macbeth has lost everything that makes life meaningful. The repetition of "tomorrow" creates a monotonous, plodding rhythm — time has become meaningless. The theatrical metaphor of the "poor player" is especially poignant: Macbeth sees life as a performance with no audience, no meaning, and no legacy. His ambition has brought him a crown but emptied his existence of all purpose.</p>

<h3>The Unravelling of the Prophecies</h3>
<p>Birnam Wood "moves" when Malcolm orders his soldiers to cut branches and carry them as camouflage (Act 5 Scene 4). When a messenger reports that the wood appears to be moving, Macbeth begins to doubt the witches for the first time: "I pull in resolution and begin / To doubt th'equivocation of the fiend." The word "equivocation" shows that Macbeth finally understands he has been deceived — but it is too late.</p>

<p>In the final confrontation, Macduff reveals that he was "from his mother's womb / Untimely ripped" — born by Caesarean section, and therefore not technically "of woman born." The second prophecy collapses. Macbeth's false security is stripped away entirely, and he must face his death knowing he was duped by the very forces he trusted.</p>

<h3>Macbeth's Death and the Restoration of Order</h3>
<p>Despite knowing he is doomed, Macbeth fights on: "Yet I will try the last." This final defiance is both admirable and tragic — a last flicker of the bravery that defined him at the start of the play. Macduff kills Macbeth off-stage and returns with his severed head. Malcolm is hailed as king, and he promises to restore order, calling Macbeth and Lady Macbeth "this dead butcher and his fiend-like queen."</p>

<p>The play ends with the restoration of legitimate kingship — the <span class="key-term">Great Chain of Being</span> is repaired. However, Malcolm's dismissive summary of Macbeth as a "butcher" feels reductive after the complex psychological journey the audience has witnessed. Shakespeare leaves the audience to grapple with the gap between political narrative and tragic truth.</p>

<div class="examiner-tip"><strong>AO1 Tip:</strong> The "Tomorrow" soliloquy is a goldmine for analysis. Discuss how the theatrical metaphor ("poor player," "stage") creates a metatheatrical moment — Macbeth is a character in a play commenting on the meaninglessness of playing a part. Link this to his realisation that his kingship has been an empty performance.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Calling Malcolm's final speech a wholly satisfying conclusion. The best responses note the tension: Malcolm reduces Macbeth to a "butcher," but the audience has spent the play inside Macbeth's tortured mind. Shakespeare invites us to question whether neat political endings can account for the complexity of human tragedy.</div>`,
        quiz: [
          { id: 'aqa-mac-m5-q1', question: 'Why does Shakespeare switch Lady Macbeth from verse to prose in the sleepwalking scene?', options: ['Because prose is easier for the actress to memorise', 'Because prose signals disorder, madness, and loss of control — mirroring her mental disintegration', 'Because she is speaking to servants who do not deserve verse', 'Because the scene takes place at night'], correct: 1, explanation: 'In Shakespeare, verse is associated with status, control, and rationality. Prose signals disorder and lower status. Lady Macbeth\'s shift to broken prose mirrors her psychological collapse — her language disintegrates along with her mind.' },
          { id: 'aqa-mac-m5-q2', question: 'In the "Tomorrow and tomorrow" soliloquy, what does Macbeth compare life to?', options: ['A river flowing to the sea', 'A walking shadow and a poor player on a stage', 'A garden that has been neglected', 'A battle that cannot be won'], correct: 1, explanation: 'Macbeth describes life as "a walking shadow, a poor player / That struts and frets his hour upon the stage / And then is heard no more." The theatrical metaphor suggests life is a meaningless performance — his ambition has left him with nothing.' },
          { id: 'aqa-mac-m5-q3', question: 'How is the prophecy "none of woman born shall harm Macbeth" fulfilled?', options: ['Macbeth is killed by a woman disguised as a man', 'Macduff reveals he was born by Caesarean section, not natural birth', 'Malcolm uses magic to bypass the prophecy', 'Macbeth dies of natural causes, not by any person\'s hand'], correct: 1, explanation: 'Macduff was "from his mother\'s womb / Untimely ripped" — delivered by Caesarean section. This means he was not technically "born" of a woman in the conventional sense, fulfilling the prophecy\'s equivocation and destroying Macbeth\'s false confidence.' },
          { id: 'aqa-mac-m5-q4', question: 'What does Malcolm call Macbeth and Lady Macbeth in his final speech?', options: ['"A noble warrior and his devoted queen"', '"This dead butcher and his fiend-like queen"', '"A tragic hero and his ambitious wife"', '"The cursed king and his tormented queen"'], correct: 1, explanation: 'Malcolm dismisses them as "this dead butcher and his fiend-like queen." However, this reductive summary contrasts with the complex psychological journey the audience has witnessed, inviting us to question whether political narratives capture the full truth of tragedy.' },
        ],
      },

      // ── Module 6: Themes & AO3 Context ──
      {
        id: 'aqa-mac-m6',
        title: 'Themes & AO3 Context',
        duration: '40 mins',
        content: `<h2>Themes & Contextual Factors (AO3)</h2>

<p>AO3 requires you to demonstrate understanding of the relationship between a text and the contexts in which it was written and received. For Macbeth, this means connecting Shakespeare's dramatic choices to the political, religious, and social world of Jacobean England. Context should not be bolted on as a separate paragraph — it must be woven into your analysis of language, character, and theme. This module covers the key contextual factors and how they connect to the play's major themes.</p>

<h3>The Divine Right of Kings</h3>
<p>King James I of England (James VI of Scotland) believed that monarchs were appointed by God and answerable only to God — the <span class="key-term">Divine Right of Kings</span>. This belief underpins the entire moral framework of Macbeth. When Macbeth murders Duncan, he is not merely committing treason; he is committing a sin against the divine order. This is why nature itself rebels after the murder: horses eat each other, storms rage, and an owl kills a falcon. The cosmos is disrupted because a divinely appointed king has been unlawfully killed.</p>

<div class="key-term"><strong>Key Term: Divine Right of Kings</strong> — The doctrine that monarchs derive their authority directly from God and cannot be legitimately challenged by earthly powers. Regicide (killing a king) was therefore both a political crime and a religious sin.</div>

<p>Shakespeare flatters James I by presenting regicide as the ultimate catastrophe. Duncan is portrayed as a virtuous, benevolent king — "so clear in his great office" — making the crime even more horrifying. The play's conclusion restores legitimate kingship through Malcolm, reinforcing the idea that the divine order is self-correcting: tyrants will always fall.</p>

<h3>The Gunpowder Plot (1605)</h3>
<p>On 5 November 1605, a group of Catholic conspirators attempted to blow up the Houses of Parliament and assassinate King James I. The plot was discovered just in time, and the conspirators were executed. Shakespeare wrote Macbeth approximately one year later, in 1606. A play about the murder of a king and its catastrophic consequences would have resonated powerfully with an audience still shaken by the Gunpowder Plot.</p>

<p>The theme of <strong>equivocation</strong> also connects to this context. During the trial of the Gunpowder Plot conspirators, the Jesuit priest Henry Garnet argued that equivocation — using deliberately ambiguous language to mislead without technically lying — was morally permissible. The Porter in Act 2 directly references this: "Here's an equivocator, that could swear in both the scales against either scale." The witches' equivocal prophecies echo this real-world controversy.</p>

<h3>The Great Chain of Being</h3>
<p>Jacobean society was structured around the concept of a divinely ordained hierarchy — the <span class="key-term">Great Chain of Being</span>. God sat at the top, followed by angels, then the monarch, then nobles, then commoners, then animals, then plants, then minerals. Every being had its appointed place, and disrupting this hierarchy caused chaos at every level.</p>

<p>Macbeth's regicide shatters the Chain. The unnatural events after Duncan's murder — the darkness at noon, the cannibalistic horses, the predatory owl — symbolise the collapse of natural order. Shakespeare uses pathetic fallacy on a cosmic scale: when the political world is disordered, the natural world mirrors that disorder. The restoration of Malcolm to the throne repairs the Chain and returns the world to its proper state.</p>

<div class="text-extract">"By th'clock 'tis day,<br>And yet dark night strangles the travelling lamp."<div class="source">Ross, Act 2 Scene 4</div></div>

<h3>Witchcraft and the Supernatural</h3>
<p>King James I was fascinated by witchcraft and wrote a treatise called <em>Daemonologie</em> (1597), which argued that witches were real and should be prosecuted. The Witchcraft Act of 1604 made witchcraft a capital offence. Shakespeare's inclusion of the Weird Sisters would have thrilled and terrified a Jacobean audience who genuinely believed in the power of witches to influence human affairs.</p>

<p>However, Shakespeare is more subtle than simple demonisation. The witches prophesy but never command — they plant seeds of ambition that Macbeth chooses to act upon. This ambiguity about free will versus fate is central to the play's tragic power. Were the witches agents of destiny, or did Macbeth destroy himself through his own choices? Shakespeare refuses to give a definitive answer.</p>

<h3>Gender and Patriarchy</h3>
<p>Jacobean society was rigidly patriarchal: women were expected to be obedient, nurturing, and subordinate to men. Lady Macbeth's ambition, dominance over her husband, and invocation to "unsex me here" would have been profoundly transgressive. She rejects her femininity to pursue power, and Shakespeare punishes her for it: her madness and death can be read as the consequence of violating gender norms.</p>

<p>Yet Shakespeare also uses Lady Macbeth to expose the toxicity of the masculine ideal she invokes. She goads Macbeth by questioning his manhood — "When you durst do it, then you were a man" — equating masculinity with violence. Macbeth internalises this, telling the murderers that killing Banquo will prove they are men. Shakespeare suggests that a culture that defines manhood through violence will inevitably produce tyranny.</p>

<div class="examiner-tip"><strong>AO3 Tip:</strong> The best AO3 responses integrate context into analysis seamlessly. Instead of writing a separate paragraph about the Divine Right of Kings, weave it into your point: "Shakespeare uses the unnatural darkness after Duncan's murder to reflect the Jacobean belief in the Great Chain of Being — regicide disrupts the divinely ordained natural order, causing cosmic chaos that mirrors the political disorder."</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing long paragraphs of historical context without connecting them to the text. AO3 is about the <em>relationship</em> between text and context. Every contextual point must be linked to a specific moment, character, or technique in the play.</div>`,
        quiz: [
          { id: 'aqa-mac-m6-q1', question: 'What is the Divine Right of Kings and how does it relate to Macbeth?', options: ['The right of kings to declare war; Macbeth uses it to justify invading England', 'The belief that monarchs are appointed by God; killing Duncan is therefore a sin against the divine order', 'The right of kings to choose their successor; Duncan choosing Malcolm triggers the plot', 'The belief that kings cannot die; this is why Macbeth fears Duncan\'s ghost'], correct: 1, explanation: 'The Divine Right of Kings held that monarchs derived their authority from God. Macbeth\'s murder of Duncan is therefore not just treason but a sin against the divine order, which is why nature itself erupts in chaos after the killing.' },
          { id: 'aqa-mac-m6-q2', question: 'How does the Gunpowder Plot (1605) connect to Macbeth?', options: ['Shakespeare was a suspect in the plot', 'A play about regicide and its catastrophic consequences would have resonated with an audience recently shaken by an assassination attempt on their king', 'The play was commissioned by the Gunpowder Plot conspirators', 'The witches in the play represent the Catholic conspirators'], correct: 1, explanation: 'The Gunpowder Plot was a failed attempt to assassinate King James I in 1605. Shakespeare wrote Macbeth in approximately 1606 — a play about the murder of a king and its terrible consequences would have felt immediate and dangerous to the original audience.' },
          { id: 'aqa-mac-m6-q3', question: 'What is the Great Chain of Being?', options: ['A literal chain worn by the king as a symbol of power', 'A Jacobean concept of a divinely ordained hierarchy from God down to minerals, which regicide disrupts', 'A chain of evidence connecting Macbeth to Duncan\'s murder', 'A metaphor for the witches\' control over Macbeth'], correct: 1, explanation: 'The Great Chain of Being was the Jacobean concept of a fixed hierarchy: God, angels, king, nobles, commoners, animals, plants, minerals. Disrupting this order (through regicide) causes cosmic chaos, which Shakespeare dramatises through the unnatural events after Duncan\'s murder.' },
          { id: 'aqa-mac-m6-q4', question: 'How does Shakespeare use Lady Macbeth to explore Jacobean attitudes to gender?', options: ['He presents her as a perfect example of Jacobean womanhood', 'She rejects femininity ("unsex me here") and equates masculinity with violence, but is ultimately destroyed by guilt — suggesting transgression of gender norms leads to punishment', 'She represents the power of women in Jacobean society', 'She is a comedic character who parodies gender expectations'], correct: 1, explanation: 'Lady Macbeth\'s call to "unsex me here" rejects Jacobean femininity. She goads Macbeth by questioning his manhood, equating masculinity with violence. Her madness and death can be read as punishment for transgressing gender norms, but Shakespeare also critiques the toxic masculinity she invokes.' },
        ],
      },
    ],

    assessmentQuestions: [
      { id: 'aqa-mac-a1', question: 'What is Macbeth\'s hamartia (tragic flaw)?', options: ['Cowardice', 'Vaulting ambition', 'Jealousy', 'Greed'], correct: 1, explanation: 'Macbeth identifies "vaulting ambition" as his only motivation for killing Duncan. This unchecked ambition is his hamartia — the fatal flaw that drives every destructive decision in the play.' },
      { id: 'aqa-mac-a2', question: 'Which of the following best describes Lady Macbeth\'s character arc?', options: ['She is weak throughout and controlled by Macbeth', 'She moves from commanding dominance to guilt-driven madness and death', 'She grows stronger as the play progresses', 'She remains unchanged from beginning to end'], correct: 1, explanation: 'Lady Macbeth begins as the dominant partner, driving the murder of Duncan. By Act 5, guilt has destroyed her mind — she sleepwalks, trying to wash imaginary blood from her hands, before dying off-stage.' },
      { id: 'aqa-mac-a3', question: 'What is the significance of the witches\' prophecies being equivocal?', options: ['It means the prophecies are completely false', 'They are technically true but deliberately misleading, giving Macbeth false security', 'It means the witches are speaking in a foreign language', 'It shows the witches are powerless'], correct: 1, explanation: 'Equivocation means using ambiguous language that is technically true but misleading. The prophecies give Macbeth false confidence — "none of woman born" conceals the Caesarean loophole — connecting to the Gunpowder Plot context of equivocation.' },
      { id: 'aqa-mac-a4', question: 'Why does Shakespeare keep Duncan\'s murder off-stage?', options: ['The actors refused to perform the scene', 'To maintain the sacred horror of regicide and focus the audience on psychological rather than physical violence', 'Because stage technology could not create realistic blood effects', 'To save time in the performance'], correct: 1, explanation: 'Shakespeare keeps the murder off-stage to preserve its unspeakable horror. For a Jacobean audience who believed in the Divine Right of Kings, showing regicide on stage would have been almost sacrilegious. The focus remains on Macbeth\'s psychological torment.' },
      { id: 'aqa-mac-a5', question: 'What does the banquet scene (Act 3 Scene 4) reveal about Macbeth?', options: ['That he is a generous and popular king', 'That his private guilt is breaking through into his public role, destroying his credibility as king', 'That he has the ability to see the future', 'That the lords are plotting against him'], correct: 1, explanation: 'Banquo\'s ghost, visible only to Macbeth, causes him to lose composure in front of his lords. His private guilt erupts into his public role as king, destroying the feast that should symbolise order and authority.' },
      { id: 'aqa-mac-a6', question: 'How does Shakespeare use the "Tomorrow and tomorrow" soliloquy to convey Macbeth\'s state of mind?', options: ['It shows Macbeth is optimistic about the future', 'It reveals nihilistic despair — life is a meaningless performance that "signifies nothing"', 'It demonstrates Macbeth\'s religious faith', 'It shows Macbeth planning his escape from Scotland'], correct: 1, explanation: 'The soliloquy expresses total nihilism. Macbeth sees life as "a tale / Told by an idiot, full of sound and fury, / Signifying nothing." His ambition has brought him a crown but emptied his existence of all meaning.' },
      { id: 'aqa-mac-a7', question: 'What contextual factor explains why nature erupts in chaos after Duncan\'s murder?', options: ['Scotland was historically prone to natural disasters', 'The Jacobean belief in the Great Chain of Being — killing the divinely appointed king disrupts the entire natural order', 'Shakespeare wanted to create exciting special effects', 'The witches cast a spell on the weather'], correct: 1, explanation: 'The Great Chain of Being placed the king directly below God. Killing a divinely appointed monarch disrupts the entire chain, causing chaos in the natural world. Shakespeare uses pathetic fallacy on a cosmic scale to dramatise this Jacobean belief.' },
      { id: 'aqa-mac-a8', question: 'How does Macduff serve as Macbeth\'s nemesis?', options: ['He is Macbeth\'s closest friend who betrays him', 'He fulfils the witches\' warning ("beware Macduff") and kills Macbeth, having been born by Caesarean section', 'He poisons Macbeth at the banquet', 'He convinces Lady Macbeth to betray her husband'], correct: 1, explanation: 'Macduff is the instrument of Macbeth\'s downfall. Born by Caesarean section ("from his mother\'s womb / Untimely ripped"), he bypasses the "none of woman born" prophecy and kills Macbeth, fulfilling the first apparition\'s warning.' },
      { id: 'aqa-mac-a9', question: 'What is the dramatic function of the Porter scene?', options: ['To introduce a romantic subplot', 'To provide dark comic relief while reinforcing the idea that Macbeth\'s castle has become a kind of hell', 'To show that the servants are loyal to Duncan', 'To reveal that the Porter knows about the murder'], correct: 1, explanation: 'The Porter imagines he is the gatekeeper of hell. His dark comedy provides brief relief from tension while grimly reinforcing the horror: after Duncan\'s murder, Macbeth\'s castle has literally become a hellish place.' },
      { id: 'aqa-mac-a10', question: 'How does Malcolm\'s description of Macbeth as "this dead butcher" create tension at the end of the play?', options: ['It is a completely accurate summary of Macbeth\'s character', 'It is reductive — the audience has witnessed Macbeth\'s complex psychological journey, making the neat political summary feel inadequate', 'It shows Malcolm is as cruel as Macbeth', 'It is a quotation from one of the witches\' prophecies'], correct: 1, explanation: 'Malcolm\'s dismissive label contrasts with the audience\'s experience of Macbeth\'s tortured soliloquies, hallucinations, and despair. Shakespeare creates tension between the political need for a simple narrative and the tragic complexity the audience has witnessed.' },
    ],
  },

  // ─────────────────────────────────────────────────────────
  //  COURSE 2 — AQA An Inspector Calls Study Guide
  // ─────────────────────────────────────────────────────────
  {
    id: 'aqa-lit-inspector-calls',
    title: 'AQA Literature: An Inspector Calls',
    subtitle: 'Modern Text — Paper 2 Section A (8702)',
    tier: 'GCSE',
    board: 'AQA',
    specCode: '8702',
    price: 39,
    duration: '4 hours',
    level: 'Intermediate',
    description: 'Complete An Inspector Calls study guide for AQA GCSE Literature Paper 2.',
    color: 'from-blue-600 to-blue-800',

    moduleList: [
      // ── Module 1: Act 1 ──
      {
        id: 'aqa-aic-m1',
        title: 'Act 1: Birling, Eva Smith & Dramatic Irony',
        duration: '40 mins',
        content: `<h2>Act 1 — An Evening Interrupted</h2>

<p>The play opens on a prosperous, self-satisfied scene: the Birling family are celebrating the engagement of Sheila Birling to Gerald Croft in their comfortable dining room in the fictional industrial city of Brumley, in 1912. The stage directions describe "a fairly large suburban house, belonging to a prosperous manufacturer." The lighting is "pink and intimate" — warm, complacent, and rose-tinted — until the Inspector arrives, when it becomes "brighter and harder," symbolising the harsh scrutiny that is about to be applied to the family's comfortable world.</p>

<h3>Arthur Birling: Captain of Industry</h3>
<p>Arthur Birling dominates the early part of Act 1 with a series of confident speeches. He is a "hard-headed practical man of business" who prides himself on his knowledge of the world. He tells Gerald and Eric that "a man has to mind his own business and look after himself and his own." This is Priestley's distillation of the capitalist, individualist worldview that the play sets out to demolish.</p>

<div class="text-extract">"The Titanic — she sails next week — forty-six thousand eight hundred tons — New York in five days — and every luxury — and unsinkable, absolutely unsinkable."<div class="source">Mr Birling, Act 1</div></div>

<p>Birling's speech about the Titanic is the play's most famous example of <span class="key-term">dramatic irony</span>. The 1945 audience knew the Titanic sank on its maiden voyage in April 1912, killing over 1,500 people. Birling's absolute confidence — "unsinkable, absolutely unsinkable" — is spectacularly wrong. Priestley uses this to destroy Birling's credibility before the Inspector even arrives. If Birling is wrong about the Titanic, he is wrong about everything: about war not coming, about community being "nonsense," about a man only needing to look after himself.</p>

<div class="key-term"><strong>Key Term: Dramatic irony</strong> — When the audience possesses knowledge that the characters do not. Priestley exploits the time gap between the 1912 setting and the 1945 performance to create dramatic irony: the audience knows that Birling's confident predictions are catastrophically wrong.</div>

<h3>Eva Smith: The Unseen Victim</h3>
<p>Inspector Goole arrives and announces that a young woman named Eva Smith has died — "she'd swallowed a lot of strong disinfectant. Burnt her inside out." The graphic description is deliberate: Priestley forces the audience to confront the physical horror of poverty and desperation. Eva is never seen on stage, but she is the play's moral centre. She represents every working-class person exploited, dismissed, and destroyed by the selfishness of people like the Birlings.</p>

<p>Birling is the first to be interrogated. He sacked Eva from his factory because she was one of the ringleaders of a strike for higher wages — the workers wanted twenty-five shillings a week instead of twenty-two and six. Birling defends his decision on purely economic grounds: "If I'd agreed to this demand for a new rate we'd have added about twelve per cent to our labour costs." He sees no moral dimension — only profit and loss.</p>

<h3>The Inspector's Method</h3>
<p>The Inspector works methodically, interrogating one character at a time. His technique is described in the stage directions: he creates "an impression of massiveness, solidity and purposefulness." He speaks "carefully, weightily," and his presence is commanding. Unlike a normal detective who might ask open questions, Goole makes statements and waits for confessions. He already seems to know the answers.</p>

<p>The Inspector's name — "Goole" — is a homophone of "ghoul," a supernatural being associated with death. Priestley leaves his true identity deliberately ambiguous: is he a real policeman, a ghost, a time-traveller, or a manifestation of collective guilt? This ambiguity is central to the play's power. What matters is not who the Inspector is, but the moral truth he forces the family to confront.</p>

<h3>Sheila's Confession</h3>
<p>By the end of Act 1, Sheila has also been implicated. She had Eva sacked from her job at Milwards department store because Eva smiled when Sheila tried on a dress that did not suit her. Sheila admits this was motivated by jealousy and vanity — "I was in a furious temper" — and is visibly shaken by her role in Eva's chain of suffering. Unlike her father, Sheila begins to accept responsibility immediately, marking the start of her transformation.</p>

<div class="examiner-tip"><strong>AO2 Tip:</strong> Pay close attention to Priestley's use of stage directions. The shift in lighting from "pink and intimate" to "brighter and harder" is a deliberate directorial choice that symbolises the transition from complacent self-deception to uncomfortable truth. Analysing stage directions shows examiners you understand the play as a piece of theatre, not just a text.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating Birling as a one-dimensional villain. While Priestley clearly uses him to represent capitalist selfishness, a strong response will note that Birling is also anxious about status (he hopes for a knighthood) and is a product of his class and era. Understanding why he thinks as he does makes your analysis more sophisticated.</div>`,
        quiz: [
          { id: 'aqa-aic-m1-q1', question: 'What does the change in lighting when the Inspector arrives symbolise?', options: ['The time of day changing from evening to night', 'The shift from complacent self-deception to harsh scrutiny of the truth', 'The Inspector turning on an electric light', 'The mood becoming more romantic'], correct: 1, explanation: 'The lighting shifts from "pink and intimate" to "brighter and harder." The warm, rose-tinted light represents the Birlings\' comfortable self-deception; the harder light represents the Inspector\'s uncomfortable moral scrutiny.' },
          { id: 'aqa-aic-m1-q2', question: 'Why is Birling\'s speech about the Titanic an example of dramatic irony?', options: ['Because the Titanic was a real ship', 'Because the 1945 audience knew the Titanic sank, making Birling\'s confidence spectacularly wrong', 'Because Birling is lying about the Titanic deliberately', 'Because Sheila interrupts him before he finishes'], correct: 1, explanation: 'The 1945 audience knew the Titanic sank in 1912. Birling\'s absolute confidence that it is "unsinkable" is catastrophically wrong. Priestley uses this to destroy Birling\'s credibility and, by extension, his entire worldview.' },
          { id: 'aqa-aic-m1-q3', question: 'Why did Birling sack Eva Smith from his factory?', options: ['She stole money from the company', 'She was one of the ringleaders of a strike for higher wages', 'She was rude to a customer', 'She arrived late to work repeatedly'], correct: 1, explanation: 'Eva was sacked for leading a strike demanding higher wages (twenty-five shillings instead of twenty-two and six). Birling defends this on economic grounds, seeing no moral dimension — only the impact on his profits.' },
          { id: 'aqa-aic-m1-q4', question: 'What is significant about the Inspector\'s name, "Goole"?', options: ['It is a common surname in northern England', 'It is a homophone of "ghoul," suggesting a supernatural or spectral quality', 'It is an anagram of "logic"', 'It is the name of the street where Eva lived'], correct: 1, explanation: '"Goole" sounds like "ghoul" — a spirit associated with death. This hints at the Inspector\'s possible supernatural nature and supports the interpretation that he is not a real policeman but a moral or spectral force.' },
        ],
      },

      // ── Module 2: Act 2 ──
      {
        id: 'aqa-aic-m2',
        title: 'Act 2: Sheila, Gerald & Mrs Birling',
        duration: '40 mins',
        content: `<h2>Act 2 — Layers of Complicity</h2>

<p>Act 2 deepens the investigation as the Inspector turns his attention to Gerald Croft and then to Sybil Birling (Mrs Birling). Each revelation adds another layer to Eva Smith's suffering, building a chain of exploitation that implicates the entire upper-middle class. Sheila's role shifts in this act: she becomes almost an ally of the Inspector, watching the other characters with growing understanding and moral clarity.</p>

<h3>Sheila's Transformation</h3>
<p>At the start of Act 2, Sheila has already accepted her guilt. She warns Gerald: "You'll see. You'll see." She recognises the Inspector's power before anyone else and understands that evasion is futile. When Gerald tries to send her away to spare her the details of his affair, she refuses: "I've been through it — and now I'm not going to be sent away from it." This assertiveness marks a dramatic change from the "pretty" and "pleased" girl of Act 1. Sheila is shedding her naivety and developing a moral conscience.</p>

<div class="text-extract">"No, he's giving us the rope — so that we'll hang ourselves."<div class="source">Sheila, Act 2</div></div>

<p>Sheila's perceptiveness is crucial. She understands the Inspector's method: he does not need to accuse anyone directly — he simply gives them the opportunity to incriminate themselves. The metaphor of "giving us the rope" is chillingly apt, recalling the punishment for serious crimes. Sheila becomes Priestley's proxy in the play — the character who sees the truth and voices what the audience is thinking.</p>

<h3>Gerald's Affair with Daisy Renton</h3>
<p>Gerald reveals that he had an affair with Eva Smith, who was using the name Daisy Renton at the time. He rescued her from the unwanted attentions of Alderman Meggarty at the Palace Bar and installed her in a friend's flat. Gerald claims the relationship was based on genuine affection — "She was young and pretty and warm-hearted — and intensely grateful" — but Priestley invites the audience to question the power dynamics. Gerald was wealthy and powerful; Eva was homeless and desperate. Was it truly a love affair, or exploitation disguised as kindness?</p>

<p>When the affair ended, Gerald gave Eva some money to keep her going and she disappeared. Gerald shows emotion — he is "distressed" — but his feelings are short-lived. By Act 3, he is helping Mr Birling find ways to discredit the Inspector rather than confronting the moral implications of his behaviour. His brief emotional response gives way to self-preservation.</p>

<div class="key-term"><strong>Key Term: Power dynamics</strong> — The balance of power in a relationship. Priestley invites the audience to question Gerald's relationship with Eva/Daisy: a wealthy man "rescuing" a destitute young woman creates a profound imbalance of power, regardless of Gerald's intentions.</div>

<h3>Mrs Birling: Cold Authority</h3>
<p>Sybil Birling is the most morally repugnant character in the play. As chairwoman of the Brumley Women's Charity Organisation, she had the power to help Eva when she came seeking assistance — pregnant, desperate, and penniless. Instead, Mrs Birling refused her case because Eva had used the name "Mrs Birling," which Sybil found impertinent. She was also offended that Eva refused to accept stolen money (Eric's) and judged her for becoming pregnant outside marriage.</p>

<div class="text-extract">"She only had herself to blame."<div class="source">Mrs Birling, Act 2</div></div>

<p>Mrs Birling's repeated insistence that Eva "only had herself to blame" is Priestley's most damning indictment of upper-class moral blindness. She refuses to see any connection between her actions and Eva's death. Even more devastatingly, Mrs Birling argues that the "father of the child" should bear the main responsibility — not realising that she is condemning her own son, Eric. This is a masterful piece of dramatic irony: Mrs Birling builds the trap that will ensnare her own family.</p>

<p>Mrs Birling represents the class system at its cruellest. She has the resources and the institutional power to help, but her class prejudice, snobbery, and lack of empathy prevent her. For Priestley, she embodies the moral failure of the privileged — those who could make a difference but choose not to because they see the poor as beneath their concern.</p>

<h3>The Chain of Responsibility</h3>
<p>By the end of Act 2, the chain is nearly complete: Birling sacked Eva, Sheila had her dismissed from Milwards, Gerald used and abandoned her, and Mrs Birling denied her charity when she was most desperate. Only Eric's role remains to be revealed. Priestley structures the play so that each act of cruelty compounds the last — no single person killed Eva, but their collective indifference destroyed her. This is the play's central argument: we are all responsible for each other.</p>

<div class="examiner-tip"><strong>AO1 Tip:</strong> When writing about Mrs Birling, always connect her refusal to help Eva to Priestley's broader socialist message. Mrs Birling is not just a cruel individual — she represents an entire class that uses charity as a way of managing the poor rather than genuinely helping them. Her charity work is about maintaining her social position, not alleviating suffering.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Describing Gerald as straightforwardly heroic for "rescuing" Eva. Priestley wants the audience to question this narrative. Gerald had wealth and power; Eva had nothing. The relationship, however well-intentioned, was built on a profound inequality that Gerald never acknowledges.</div>`,
        quiz: [
          { id: 'aqa-aic-m2-q1', question: 'How does Sheila\'s role change in Act 2?', options: ['She becomes the Inspector\'s enemy and tries to stop the investigation', 'She becomes perceptive and morally aware, almost an ally of the Inspector', 'She leaves the room and does not participate', 'She takes over the role of interviewer from the Inspector'], correct: 1, explanation: 'Sheila transforms from a naive young woman into a perceptive moral voice. She warns others, understands the Inspector\'s method ("he\'s giving us the rope"), and refuses to be sent away. She becomes Priestley\'s proxy — the character who sees and speaks the truth.' },
          { id: 'aqa-aic-m2-q2', question: 'Why does Priestley invite the audience to question Gerald\'s relationship with Eva/Daisy?', options: ['Because Gerald lied about knowing her', 'Because Gerald was married to someone else at the time', 'Because the power imbalance between a wealthy man and a destitute woman complicates the idea of genuine affection', 'Because Eva told the Inspector she hated Gerald'], correct: 2, explanation: 'Gerald was wealthy and powerful; Eva was homeless and desperate. Priestley invites the audience to question whether a relationship built on such profound inequality can truly be called love, regardless of Gerald\'s intentions.' },
          { id: 'aqa-aic-m2-q3', question: 'Why is Mrs Birling\'s demand that "the father of the child" be held responsible an example of dramatic irony?', options: ['Because the audience knows the father has already been punished', 'Because she does not realise she is condemning her own son, Eric', 'Because the Inspector has already told her who the father is', 'Because the father of the child is Gerald, who is in the room'], correct: 1, explanation: 'Mrs Birling insists that the "father of the child" bears chief responsibility, not realising the father is her own son Eric. She builds a moral trap that will ensnare her own family — a devastating piece of dramatic irony.' },
          { id: 'aqa-aic-m2-q4', question: 'Why did Mrs Birling refuse to help Eva at the charity?', options: ['Eva was rude and aggressive during the meeting', 'Eva used the name "Mrs Birling," which Sybil found impertinent, and Eva refused stolen money on principle', 'The charity had run out of funds', 'Mrs Birling did not believe Eva was really pregnant'], correct: 1, explanation: 'Mrs Birling was offended that Eva used the name "Mrs Birling" and judged her for becoming pregnant outside marriage. She also disapproved of Eva refusing to accept stolen money (Eric\'s). Her class prejudice and snobbery prevented her from offering help.' },
        ],
      },

      // ── Module 3: Act 3 ──
      {
        id: 'aqa-aic-m3',
        title: 'Act 3: Eric, the Inspector\'s Speech & the Ending',
        duration: '40 mins',
        content: `<h2>Act 3 — Reckoning and Reversal</h2>

<p>Act 3 delivers the play's emotional and moral climax. Eric's involvement is revealed, the Inspector delivers his famous final speech, and then — in a stunning theatrical twist — the family discovers that Inspector Goole may not have been a real policeman at all. The act splits the characters into two camps: those who have been changed by the experience (Sheila and Eric) and those who desperately try to return to their previous complacency (Mr and Mrs Birling, Gerald). The final phone call ensures that the audience leaves the theatre shaken, not reassured.</p>

<h3>Eric's Confession</h3>
<p>Eric returns to the stage knowing that his role in Eva's story has been exposed. He forced his way into Eva's lodgings when drunk, began a relationship with her, and got her pregnant. He stole money from his father's business — approximately fifty pounds — to support her. Eva refused to accept the money when she realised it was stolen, showing more moral integrity than any of the Birlings.</p>

<div class="text-extract">"You're not the kind of father a chap could go to when he's in trouble."<div class="source">Eric, Act 3</div></div>

<p>Eric's accusation against his father is devastating. It exposes the hollowness of Birling's family values: the "hard-headed practical man of business" has created a home where his own son cannot seek help or honesty. Eric, like Sheila, accepts responsibility and is genuinely ashamed. His drinking problem, which has been hinted at throughout the play, is finally acknowledged — another family secret exposed by the Inspector's visit. Priestley uses Eric to show that the young generation, however flawed, has the capacity for growth and moral change.</p>

<h3>The Inspector's Final Speech</h3>
<p>Before leaving, the Inspector delivers the play's moral manifesto — one of the most powerful speeches in twentieth-century British drama:</p>

<div class="text-extract">"But just remember this. One Eva Smith has gone — but there are millions and millions and millions of Eva Smiths and John Smiths still left with us, with their lives, their hopes and fears, their suffering, and chance of happiness, all intertwined with our lives, with what we think and say and do. We don't live alone. We are members of one body. We are responsible for each other. And I tell you that the time will soon come when, if men will not learn that lesson, then they will be taught it in fire and blood and anguish."<div class="source">Inspector Goole, Act 3</div></div>

<p>The speech operates on multiple levels. "Millions and millions of Eva Smiths" universalises the play's message — this is not about one family but about an entire social system. "We are members of one body" echoes the Christian idea of the body of Christ and socialist principles of collective responsibility. "Fire and blood and anguish" refers to the two World Wars: the 1945 audience had just lived through the devastation that Priestley warned about. The speech is simultaneously a plea, a warning, and a prophecy.</p>

<div class="key-term"><strong>Key Term: Didactic</strong> — A text that is designed to teach a moral lesson. <em>An Inspector Calls</em> is a didactic play: Priestley uses the Inspector as his mouthpiece to deliver a clear socialist message about collective responsibility, equality, and the dangers of selfish individualism.</div>

<h3>The Aftermath: Who Has Changed?</h3>
<p>After the Inspector leaves, Gerald and Mr Birling begin to dismantle the evening's revelations. They discover that no "Inspector Goole" exists on the police force. They phone the infirmary and learn that no girl has died that evening. Mr Birling is relieved — "the whole thing's different now" — and Gerald triumphantly declares that they have been "hoaxed."</p>

<p>But Sheila and Eric refuse to accept this. Sheila argues: "It doesn't much matter who it was — the point is, you're all still the same." Even if the Inspector was not real, the moral truths he exposed remain. Birling <em>did</em> sack a worker for asking for fair wages. Sheila <em>did</em> have a girl fired out of jealousy. Gerald <em>did</em> exploit a vulnerable woman. Eric <em>did</em> steal and force himself on Eva. The facts do not change simply because the questioner was not a policeman.</p>

<h3>The Final Phone Call</h3>
<p>Just as Birling and Gerald are congratulating themselves on escaping scandal, the telephone rings. Birling answers and reports: "That was the police. A girl has just died — on her way to the Infirmary — after swallowing some disinfectant. And a police inspector is on his way here — to ask some — questions." The curtain falls on stunned silence.</p>

<p>This twist is Priestley's masterstroke. It denies the older generation their comfortable escape and forces the audience to confront an unsettling question: if the Inspector was not real, how did he know what was going to happen? The circular structure — the play seems about to begin again — suggests that those who refuse to learn from the past are condemned to repeat it. For the 1945 audience, the message was pointed: the First World War should have taught the lesson of social responsibility, but it took a Second World War to drive the point home.</p>

<div class="examiner-tip"><strong>AO1 Tip:</strong> The final phone call is crucial for any essay on the play's ending or message. A top-band response will discuss how the circular structure reinforces Priestley's warning: those who do not learn from experience are doomed to repeat it. Connect this to the 1945 audience's experience of two world wars.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Saying the play has a "happy ending" because the truth comes out. The ending is deliberately unsettling: the older generation has learned nothing, and the cycle appears to be starting again. Priestley leaves the audience with anxiety, not comfort.</div>`,
        quiz: [
          { id: 'aqa-aic-m3-q1', question: 'What does Eric\'s accusation — "You\'re not the kind of father a chap could go to when he\'s in trouble" — reveal about the Birling family?', options: ['That Eric is ungrateful for his privileged upbringing', 'That Birling\'s focus on business and status has created a family where honesty and vulnerability are impossible', 'That Eric is trying to deflect blame onto his father', 'That Birling has been physically abusive'], correct: 1, explanation: 'Eric\'s accusation exposes the emotional hollowness beneath Birling\'s prosperous exterior. His obsession with business and respectability has created a home where his own son cannot seek help, revealing the human cost of Birling\'s values.' },
          { id: 'aqa-aic-m3-q2', question: 'What does "fire and blood and anguish" in the Inspector\'s final speech refer to?', options: ['A fire at the Birling factory', 'The two World Wars that the 1945 audience had just lived through', 'A Biblical prophecy about hell', 'The Inspector\'s threat to burn down their house'], correct: 1, explanation: '"Fire and blood and anguish" refers to the devastation of the two World Wars (1914-18 and 1939-45). The 1945 audience had just experienced this horror. Priestley warns that refusing to learn the lesson of social responsibility leads to catastrophic consequences.' },
          { id: 'aqa-aic-m3-q3', question: 'Why does Sheila say "It doesn\'t much matter who it was" after the Inspector is exposed as possibly fake?', options: ['Because she did not like the Inspector personally', 'Because the moral truths the Inspector exposed remain valid regardless of his identity', 'Because she already knew the Inspector was not real', 'Because she wants to protect Gerald from further questioning'], correct: 1, explanation: 'Sheila understands that the Inspector\'s identity is irrelevant — the facts he exposed are real. Birling did sack Eva, Sheila did have her fired, Gerald did exploit her. The moral truths stand regardless of who asked the questions.' },
          { id: 'aqa-aic-m3-q4', question: 'What is the dramatic effect of the final phone call?', options: ['It provides a happy resolution to the plot', 'It denies the older generation their comfortable escape and suggests the cycle of guilt will begin again', 'It confirms that the Inspector was a real policeman all along', 'It reveals that Eva Smith is still alive'], correct: 1, explanation: 'The final phone call shatters Birling and Gerald\'s relief. The circular structure — a real inspector is now coming — suggests those who refuse to learn are condemned to repeat their failures. Priestley denies the audience a comfortable ending.' },
        ],
      },

      // ── Module 4: The Inspector as a Character ──
      {
        id: 'aqa-aic-m4',
        title: 'The Inspector as a Character',
        duration: '35 mins',
        content: `<h2>Inspector Goole — Priestley's Moral Voice</h2>

<p>Inspector Goole is the most enigmatic and dramatically powerful character in <em>An Inspector Calls</em>. He drives the plot, controls the pace of revelations, and delivers the play's moral message. Yet his true identity is never confirmed. Is he a real policeman? A ghost? A manifestation of collective guilt? A time-traveller? Priestley deliberately leaves this question unanswered, because the Inspector's power lies not in who he is but in what he represents: an inescapable moral conscience that forces comfortable people to confront uncomfortable truths.</p>

<h3>The Inspector's Dramatic Function</h3>
<p>The Inspector functions as Priestley's <span class="key-term">mouthpiece</span> — the character through whom the playwright communicates his socialist message directly to the audience. Every line the Inspector speaks advances Priestley's argument that we have a collective responsibility to care for one another. He is not a realistic character in the conventional sense; he is a dramatic device, a moral force given human form.</p>

<p>His method of investigation is unusual for a detective. He interrogates one person at a time, insisting on proceeding "one line of inquiry at a time." He shows the photograph to only one person at a time — a detail that later allows Gerald and Birling to suggest the Inspector may have shown different photographs to different people, casting doubt on whether the "Eva Smith" they each knew was the same woman. But this doubt is beside the point: even if there were multiple women, the Birlings' behaviour was still morally wrong.</p>

<div class="text-extract">"We hear the sharp ring of a front door bell. Birling stops to listen."<div class="source">Stage direction, Act 1</div></div>

<p>The Inspector's arrival is marked by the sharp ring of the doorbell — interrupting Birling mid-speech as he lectures Gerald and Eric about self-reliance. The timing is theatrically perfect: the Inspector arrives at the exact moment Birling is articulating the selfish worldview that the play will dismantle. Priestley uses the doorbell as a symbol of conscience — an interruption that cannot be ignored.</p>

<div class="key-term"><strong>Key Term: Mouthpiece</strong> — A character who speaks on behalf of the playwright, expressing their views and values directly. The Inspector is Priestley's mouthpiece for socialist ideas about collective responsibility and social justice.</div>

<h3>Possible Interpretations of the Inspector</h3>
<p><strong>A supernatural figure:</strong> His name "Goole" (ghoul) and his mysterious knowledge suggest a spectral presence. He knows things he should not know, he cannot be traced, and he appears to exist outside normal time. Some productions emphasise the supernatural by giving him an otherworldly quality in lighting and staging.</p>

<p><strong>A figure of conscience:</strong> The Inspector may represent the collective conscience of society — the moral awareness that comfortable people suppress. He forces the Birlings to see themselves clearly, then vanishes. The fact that a real inspector is coming at the end suggests that the moral truths he exposed will have real-world consequences.</p>

<p><strong>A time-traveller or prophet:</strong> He knows that Eva will die before it happens (or does it happen later?). His speech about "fire and blood and anguish" is prophetic — it refers to events that have not yet occurred in 1912. This interpretation aligns with Priestley's known interest in time theories, particularly J.W. Dunne's <em>An Experiment with Time</em>.</p>

<p><strong>A political symbol:</strong> The Inspector embodies the socialist principle that society must hold the powerful accountable. He represents the post-war Labour government's agenda of social reform — the welfare state, the NHS, and the redistribution of wealth that Priestley passionately supported.</p>

<h3>The Inspector's Language</h3>
<p>The Inspector speaks in short, direct sentences that contrast with Birling's blustering verbosity. Where Birling rambles, the Inspector is precise. Where Birling evades, the Inspector confronts. His language carries moral authority — he uses imperatives ("Look at her"), rhetorical questions ("You think young women ought to be protected against unpleasant and disturbing things?"), and stark, factual descriptions of Eva's suffering.</p>

<p>His final speech shifts register to something almost oratorical — the rhythmic repetition of "millions and millions and millions" builds like a sermon. The sentence "We are members of one body" uses the collective "we," including the audience in the moral argument. The Inspector does not just speak <em>to</em> the Birlings; he speaks to everyone in the theatre.</p>

<h3>The Inspector and the Audience</h3>
<p>Priestley designs the Inspector to break the fourth wall psychologically, if not literally. His final speech addresses the audience as much as the Birlings. The 1945 audience, having lived through two world wars and facing the challenge of rebuilding society, was Priestley's real target. The Inspector asks them — and, by extension, every audience since — whether they will choose Birling's individualism or the Inspector's collectivism. The play does not allow neutrality.</p>

<div class="examiner-tip"><strong>AO2 Tip:</strong> When analysing the Inspector, always discuss him as a dramatic device, not just a character. Discuss how Priestley uses him structurally (to control pace and revelations), linguistically (direct, imperative language), and thematically (as a mouthpiece for socialist values). This shows sophisticated understanding of the play as a piece of theatre.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending too much time speculating about whether the Inspector is "real." The point is not to solve the mystery but to analyse his function. Priestley keeps his identity ambiguous because the moral message matters more than the detective plot.</div>`,
        quiz: [
          { id: 'aqa-aic-m4-q1', question: 'What does the name "Goole" suggest about the Inspector?', options: ['It is a reference to the town of Goole in Yorkshire', 'It is a homophone of "ghoul," suggesting a supernatural or spectral quality', 'It means "truth-seeker" in Old English', 'It is an anagram of "Ogle," meaning he watches people closely'], correct: 1, explanation: '"Goole" sounds like "ghoul" — a supernatural being associated with death. This hints at the Inspector\'s mysterious, possibly spectral nature and supports interpretations of him as a figure beyond ordinary reality.' },
          { id: 'aqa-aic-m4-q2', question: 'Why does Priestley leave the Inspector\'s true identity ambiguous?', options: ['Because he ran out of time to finish the play', 'Because the Inspector\'s identity is less important than the moral truths he exposes — the message matters more than the mystery', 'Because he wanted a sequel to resolve the mystery', 'Because ambiguity was fashionable in 1945 theatre'], correct: 1, explanation: 'Priestley deliberately keeps the Inspector\'s identity unresolved because the play\'s power lies in its moral argument, not its detective plot. Whether the Inspector is real, supernatural, or symbolic, the truths he exposes remain valid.' },
          { id: 'aqa-aic-m4-q3', question: 'How does the Inspector\'s language differ from Birling\'s?', options: ['The Inspector speaks in verse while Birling speaks in prose', 'The Inspector uses short, direct sentences while Birling blusters and rambles', 'The Inspector uses more complex vocabulary', 'There is no significant difference in their language'], correct: 1, explanation: 'The Inspector speaks in short, precise, authoritative sentences. Birling rambles, repeats himself, and evades. The contrast in language mirrors the contrast in values: the Inspector is honest and purposeful, Birling is evasive and self-serving.' },
          { id: 'aqa-aic-m4-q4', question: 'What was J.B. Priestley\'s known interest that may inform the Inspector\'s apparent knowledge of future events?', options: ['Priestley was a professional magician', 'Priestley was interested in time theories, particularly J.W. Dunne\'s ideas about the nature of time', 'Priestley was a spiritualist who believed in ghosts', 'Priestley worked as a police detective before becoming a writer'], correct: 1, explanation: 'Priestley was fascinated by J.W. Dunne\'s time theories, which proposed that past, present, and future could coexist. This may explain why the Inspector appears to know about events before they happen, and supports the "time-traveller" interpretation.' },
        ],
      },

      // ── Module 5: Themes ──
      {
        id: 'aqa-aic-m5',
        title: 'Themes: Responsibility, Class, Gender & Generations',
        duration: '40 mins',
        content: `<h2>Major Themes in An Inspector Calls</h2>

<p>Priestley weaves several interconnected themes through <em>An Inspector Calls</em>, all of which serve his central argument: that a just society requires collective responsibility, empathy, and the dismantling of rigid class and gender hierarchies. Understanding these themes — and how they connect to one another — is essential for achieving high marks on AQA Paper 2.</p>

<h3>Theme 1: Social Responsibility</h3>
<p>This is the play's most important theme. Priestley argues that every person has a duty to care for others, especially the vulnerable. The Birlings represent the opposite view: Arthur Birling insists that "a man has to mind his own business and look after himself and his own." The Inspector's final speech — "We are responsible for each other" — directly contradicts this. Eva Smith's death is not caused by any single person but by a chain of selfish actions. No one felt responsible, so everyone is responsible.</p>

<p>Priestley structures the play so that responsibility cannot be evaded. Each character is confronted with the specific consequences of their specific actions. The Inspector does not deal in abstract principles — he shows them what they did and what it led to. This makes the theme of responsibility personal, concrete, and inescapable.</p>

<div class="text-extract">"We are members of one body. We are responsible for each other."<div class="source">Inspector Goole, Act 3</div></div>

<h3>Theme 2: Class</h3>
<p>Class is the mechanism through which irresponsibility operates. The Birlings can exploit Eva because of the power that wealth and social position give them. Birling can sack workers; Sheila can have shop assistants fired; Mrs Birling can deny charity to a desperate woman. Eva has no recourse because she is working class — she lacks the money, connections, and social standing to fight back.</p>

<p>Priestley exposes the hypocrisy of the class system through Mrs Birling. She chairs a charity supposedly dedicated to helping women in need, yet she turns Eva away because Eva dared to use the name "Mrs Birling." The charity exists not to help the poor but to allow the wealthy to feel virtuous while maintaining their superiority. It is performative compassion — compassion that serves the giver rather than the recipient.</p>

<div class="key-term"><strong>Key Term: Social hierarchy</strong> — The ranking of people in society based on wealth, birth, or status. Priestley argues that the rigid class hierarchy of Edwardian England enabled exploitation by giving the wealthy power over the poor without accountability.</div>

<h3>Theme 3: Gender</h3>
<p>Eva Smith's fate is shaped by her gender as much as her class. She is exploited by men (Gerald uses her as a mistress; Eric forces himself on her when drunk), judged by women according to patriarchal standards (Mrs Birling condemns her for being an unmarried mother), and denied agency at every turn. Priestley shows that working-class women were doubly disadvantaged — oppressed by both class and gender.</p>

<p>Sheila's transformation also has a gendered dimension. At the start of the play, she is a conventional young woman whose identity revolves around her engagement to Gerald. By the end, she has developed her own moral voice and is willing to challenge her parents and break off her engagement. Priestley suggests that moral growth requires rejecting the passive, decorative role that Edwardian society assigned to women.</p>

<p>Gerald's relationship with Eva/Daisy illustrates the sexual double standard. Gerald keeps a mistress — and his future in-laws are relatively understanding ("Well, I think it was a good thing that you broke it off" — Mrs Birling). But Eva, the woman in the affair, is left destitute when it ends. The man walks away unscathed; the woman is destroyed.</p>

<h3>Theme 4: Generations</h3>
<p>The generational divide is central to Priestley's message. The older generation — Arthur and Sybil Birling — refuse to accept responsibility. After the Inspector leaves, they are concerned only with avoiding a "public scandal." When they discover the Inspector may not be real, they are relieved and want to forget the whole evening. They have learned nothing.</p>

<p>The younger generation — Sheila and Eric — accept responsibility, feel genuine remorse, and refuse to pretend nothing happened. Sheila tells her parents: "You began to learn something. And now you've stopped." This generational divide represents Priestley's hope: the older, entrenched generation may be beyond redemption, but the young have the capacity to build a better, more equal society.</p>

<div class="text-extract">"You began to learn something. And now you've stopped."<div class="source">Sheila, Act 3</div></div>

<p>Priestley wrote the play in 1945, as Britain was about to elect a Labour government that would create the welfare state. His audience was being asked to choose between the old world (Birling's capitalism) and a new, fairer society. The younger generation in the play embodies this hope for change.</p>

<div class="examiner-tip"><strong>Exam Tip:</strong> The best responses connect multiple themes together. For example: "Priestley uses Mrs Birling to show how class prejudice and gender expectations intersect — she judges Eva both for being working class and for being an unmarried mother, demonstrating how the most vulnerable members of society face multiple forms of discrimination."</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating themes as separate, isolated topics. In reality, Priestley's themes are deeply interconnected. Class enables exploitation; gender compounds it; the generational divide determines who learns from it. The strongest essays explore these connections.</div>`,
        quiz: [
          { id: 'aqa-aic-m5-q1', question: 'What is the central theme of An Inspector Calls?', options: ['The importance of family loyalty', 'Social responsibility — we are all responsible for each other', 'The dangers of alcohol abuse', 'The superiority of the upper classes'], correct: 1, explanation: 'Social responsibility is the play\'s central theme. Priestley argues through the Inspector that "we are responsible for each other" and that selfishness and indifference to others\' suffering lead to catastrophic consequences.' },
          { id: 'aqa-aic-m5-q2', question: 'How does Priestley use Mrs Birling to criticise the class system?', options: ['He shows her as a generous woman who is punished unfairly', 'He shows her using a charity to maintain social superiority rather than genuinely help the poor', 'He shows her as a working-class woman who has risen to the upper class', 'He shows her rebelling against the class system'], correct: 1, explanation: 'Mrs Birling chairs a charity but turns away a desperate woman because of class prejudice and personal offence. Priestley exposes charitable work as performative — designed to make the wealthy feel virtuous while maintaining their superiority over the poor.' },
          { id: 'aqa-aic-m5-q3', question: 'How does Eva Smith\'s fate illustrate the theme of gender?', options: ['Eva is treated equally by men and women throughout the play', 'She is exploited by men, judged by patriarchal standards, and denied agency — doubly disadvantaged by class and gender', 'She uses her gender to manipulate the Birling family', 'Her gender is irrelevant to her story'], correct: 1, explanation: 'Eva is exploited by Gerald and Eric, judged by Mrs Birling for being an unmarried mother, and denied agency at every turn. Priestley shows that working-class women face double oppression — from both the class system and the patriarchal gender hierarchy.' },
          { id: 'aqa-aic-m5-q4', question: 'What does the generational divide in the play represent?', options: ['The natural rebellion of teenagers against their parents', 'Priestley\'s hope that the younger generation can build a fairer society where the older generation has failed', 'The idea that older people are always wiser than younger people', 'The conflict between traditional and modern fashion'], correct: 1, explanation: 'Sheila and Eric accept responsibility and change; Arthur and Sybil refuse. Priestley uses this divide to express hope: the entrenched older generation may be beyond redemption, but the young have the capacity to create a more equal, compassionate society.' },
        ],
      },

      // ── Module 6: Context ──
      {
        id: 'aqa-aic-m6',
        title: 'Context: 1912 vs 1945 & Priestley\'s Socialism',
        duration: '35 mins',
        content: `<h2>Context — 1912, 1945, and Priestley's Political Vision</h2>

<p>Understanding the historical and political context of <em>An Inspector Calls</em> is essential for AO3. Priestley made two crucial decisions that shape everything in the play: he <strong>set</strong> it in 1912 and <strong>wrote</strong> it in 1945. This time gap is not incidental — it is the play's most important structural device. It allows Priestley to use dramatic irony to expose the failures of Edwardian capitalism and to argue for the socialist alternative that was being debated in 1945.</p>

<h3>1912: The Edwardian World</h3>
<p>The play is set in spring 1912, just before the sinking of the Titanic (April 1912) and two years before the outbreak of the First World War (1914). This was a period of enormous social inequality in Britain. The wealthy industrialist class — represented by the Birlings — enjoyed unprecedented luxury while the working class endured poverty wages, dangerous working conditions, and no social safety net. There was no welfare state, no NHS, and no universal suffrage.</p>

<p>Key features of the 1912 setting:</p>
<ul>
<li><strong>Rigid class system:</strong> Social mobility was extremely limited. The Birlings' wealth gives them power over workers like Eva Smith, who has no protection or recourse.</li>
<li><strong>Patriarchal society:</strong> Women could not vote (women over 30 gained the vote in 1918; universal female suffrage came in 1928). Sheila's role is defined by her engagement to Gerald; Eva's options are limited to factory work, shop work, or dependence on men.</li>
<li><strong>Capitalist confidence:</strong> Birling represents the capitalist belief that progress, profit, and individual self-interest will solve all problems. His speeches about the Titanic and the impossibility of war embody this misplaced optimism.</li>
<li><strong>No welfare state:</strong> When Eva becomes destitute, the only option is private charity (Mrs Birling's organisation). There is no safety net — and the charity can refuse her on a whim.</li>
</ul>

<div class="key-term"><strong>Key Term: Edwardian era</strong> — The period of King Edward VII's reign (1901-1910), often extended to 1914. It was characterised by rigid class hierarchy, imperial confidence, and vast inequality between rich and poor. The Birlings embody the values of this era.</div>

<h3>1945: The Post-War Moment</h3>
<p>Priestley wrote <em>An Inspector Calls</em> in 1945, as the Second World War was ending. Britain was exhausted, traumatised, and facing a fundamental choice about its future. The 1945 general election — held on 5 July 1945 — resulted in a landslide victory for Clement Attlee's Labour Party, which defeated Winston Churchill's Conservatives. Labour's programme included the creation of the welfare state, the National Health Service, nationalisation of key industries, and a commitment to full employment.</p>

<p>Priestley was a passionate supporter of these ideas. During the war, his BBC radio broadcasts (<em>Postscripts</em>) reached millions of listeners and argued for a fairer, more equal post-war society. He was eventually taken off the air — reportedly because the government felt his broadcasts were too politically radical. <em>An Inspector Calls</em> is the theatrical expression of these same convictions.</p>

<h3>How the Time Gap Creates Meaning</h3>
<p>The gap between 1912 (setting) and 1945 (writing and first performance) is not just a clever theatrical device — it is the engine that drives Priestley's argument:</p>
<ul>
<li><strong>Dramatic irony:</strong> Birling's confident predictions ("no war," the Titanic "unsinkable") are destroyed by the audience's historical knowledge. If Birling is wrong about these, he is wrong about everything.</li>
<li><strong>Moral hindsight:</strong> The 1945 audience had lived through two world wars, the Great Depression, and the Blitz. They could see that the Edwardian confidence in progress and individualism had led to catastrophe.</li>
<li><strong>A call to action:</strong> Priestley is not just criticising the past — he is warning the present. The play asks the 1945 audience: will you rebuild the old world of inequality and selfishness, or will you create something better? The Inspector's warning about "fire and blood and anguish" had already come true — twice.</li>
</ul>

<h3>Priestley's Socialism</h3>
<p>Priestley was not a Marxist revolutionary but a democratic socialist who believed in gradual reform through the ballot box. His vision was of a society where wealth and opportunity were more equally distributed, where the state provided a safety net for the vulnerable, and where community responsibility replaced individual self-interest. The Inspector embodies this vision; the Birlings represent the obstacle to it.</p>

<div class="text-extract">"We don't live alone. We are members of one body."<div class="source">Inspector Goole, Act 3</div></div>

<p>The phrase "members of one body" carries both Christian and socialist resonance. In Christianity, the "body of Christ" refers to the interconnected community of believers. In socialism, the idea of the "body politic" emphasises that society functions only when all its members are cared for. Priestley fuses these traditions to make his argument as broadly appealing as possible — this is not sectarian politics but a universal moral principle.</p>

<h3>The Play's Legacy</h3>
<p>The Labour government of 1945-51 did create the welfare state and the NHS — the very institutions that would have saved Eva Smith. Priestley's play can be read as both a warning about the past and a manifesto for the future that was, at the time of writing, just beginning to be realised. For modern audiences, the play raises ongoing questions: have we learned the lesson of social responsibility, or are we still, like the Birlings, looking after ourselves?</p>

<div class="examiner-tip"><strong>AO3 Tip:</strong> Never write about context in isolation. Always connect it to the text. For example: "Priestley sets the play in 1912 so that the 1945 audience can see, through dramatic irony, how Birling's capitalist confidence led directly to the catastrophes of two world wars. This retrospective structure makes the argument for social change feel urgent and evidence-based."</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a long paragraph about World War I or II without connecting it to the play. AO3 marks are awarded for showing the <em>relationship</em> between text and context — not for historical knowledge on its own.</div>`,
        quiz: [
          { id: 'aqa-aic-m6-q1', question: 'Why does Priestley set the play in 1912 but write it in 1945?', options: ['Because he started writing the play in 1912 and took a long time to finish it', 'To exploit the time gap for dramatic irony — the 1945 audience knows Birling\'s predictions are wrong, undermining his entire worldview', 'Because 1912 was a more interesting historical period', 'Because the play was originally written as a history textbook'], correct: 1, explanation: 'The time gap allows Priestley to use dramatic irony: the 1945 audience knows the Titanic sank and two world wars occurred, making Birling\'s confident predictions spectacularly wrong. This undermines Birling\'s capitalist worldview and strengthens Priestley\'s socialist argument.' },
          { id: 'aqa-aic-m6-q2', question: 'What political event of 1945 is relevant to understanding Priestley\'s message?', options: ['The coronation of a new king', 'The Labour Party\'s landslide election victory, which led to the creation of the welfare state and NHS', 'The signing of a peace treaty with Germany', 'The opening of the United Nations'], correct: 1, explanation: 'Labour\'s 1945 election victory led to the creation of the welfare state and NHS — exactly the kind of social safety net that could have saved Eva Smith. Priestley\'s play argues for the collectivist values that the Labour government was about to implement.' },
          { id: 'aqa-aic-m6-q3', question: 'What were Priestley\'s BBC "Postscripts" broadcasts?', options: ['Radio dramas adapted from his plays', 'Wartime broadcasts arguing for a fairer, more equal post-war society, which reached millions of listeners', 'News bulletins about the progress of the war', 'Comedy programmes designed to boost morale'], correct: 1, explanation: 'Priestley\'s "Postscripts" broadcasts reached millions during the war and argued passionately for social reform and equality. They were so politically influential that he was reportedly taken off the air. An Inspector Calls expresses the same convictions in theatrical form.' },
          { id: 'aqa-aic-m6-q4', question: 'What does the phrase "members of one body" draw on?', options: ['Medical terminology about human anatomy', 'Both Christian theology (the body of Christ) and socialist principles (the body politic), making the argument universally appealing', 'A quotation from Karl Marx\'s Communist Manifesto', 'A popular advertising slogan from the 1940s'], correct: 1, explanation: 'Priestley fuses Christian language ("the body of Christ" = interconnected community) with socialist ideas ("the body politic" = collective responsibility). This dual resonance makes his argument as broadly appealing as possible — not sectarian politics but universal morality.' },
        ],
      },
    ],

    assessmentQuestions: [
      { id: 'aqa-aic-a1', question: 'What is the central message of An Inspector Calls?', options: ['That crime does not pay', 'That we are all responsible for each other and selfishness leads to suffering', 'That the police always discover the truth', 'That the upper classes are always correct'], correct: 1, explanation: 'Priestley\'s central message, delivered through the Inspector, is that "we are responsible for each other." The play shows how a chain of selfish actions by comfortable people destroyed a vulnerable woman — and argues that this pattern will lead to "fire and blood and anguish" if not corrected.' },
      { id: 'aqa-aic-a2', question: 'How does Priestley use dramatic irony through the 1912 setting?', options: ['By having characters speak in old-fashioned language', 'By giving Birling predictions that the 1945 audience knows are catastrophically wrong, undermining his authority', 'By including historical events that the characters could not know about', 'By setting the play during a famous historical event'], correct: 1, explanation: 'Birling\'s confident predictions — the Titanic is "unsinkable," there will be no war — are demolished by the audience\'s hindsight. Priestley uses this dramatic irony to destroy Birling\'s credibility and, by extension, the capitalist individualism he represents.' },
      { id: 'aqa-aic-a3', question: 'Which character undergoes the most significant moral transformation?', options: ['Mr Birling', 'Gerald Croft', 'Sheila Birling', 'Mrs Birling'], correct: 2, explanation: 'Sheila transforms from a naive, privileged young woman into a morally aware individual who accepts responsibility, challenges her parents, and refuses to pretend "nothing happened." She represents Priestley\'s hope for the younger generation.' },
      { id: 'aqa-aic-a4', question: 'What does the Inspector represent in the play?', options: ['The incompetence of the police force', 'Priestley\'s moral voice and the principle of collective social responsibility', 'The power of the upper class to control investigations', 'The danger of socialism to British society'], correct: 1, explanation: 'The Inspector is Priestley\'s dramatic device for delivering his socialist message. He represents collective conscience, moral accountability, and the principle that "we are responsible for each other." He functions as a mouthpiece rather than a realistic character.' },
      { id: 'aqa-aic-a5', question: 'Why does Mrs Birling refuse to help Eva at the charity?', options: ['The charity had no funds available', 'Eva was rude and threatening', 'Eva used the name "Mrs Birling" and Sybil found her impertinent; she also judged Eva for being an unmarried mother', 'Eva had already received help and was not eligible again'], correct: 2, explanation: 'Mrs Birling was offended that Eva used the name "Mrs Birling" and judged her for pregnancy outside marriage. Her class prejudice and personal snobbery prevented her from helping a desperate woman, demonstrating the cruelty of the class system.' },
      { id: 'aqa-aic-a6', question: 'What is the significance of the play\'s circular ending?', options: ['It provides a satisfying conclusion', 'It suggests that those who refuse to learn from their mistakes are condemned to repeat them', 'It confirms the Inspector was real', 'It shows that the Birlings will escape punishment'], correct: 1, explanation: 'The final phone call announces a real inspector is coming, suggesting the cycle will begin again. Priestley\'s message: those who refuse to learn (Birling, Mrs Birling) are doomed to repeat their failures. For the 1945 audience, the lesson was pointed — one world war should have been enough.' },
      { id: 'aqa-aic-a7', question: 'How does Gerald\'s treatment of Eva/Daisy illustrate the theme of gender?', options: ['Gerald treats Eva as an equal partner', 'He rescues a destitute woman but the power imbalance means the relationship is exploitative, and he walks away unscathed while she is destroyed', 'He refuses to have any relationship with her', 'He reports her to the police for theft'], correct: 1, explanation: 'Gerald "rescued" Eva but the power imbalance — wealthy man, homeless woman — made the relationship inherently exploitative. When it ended, Gerald walked away to his comfortable life while Eva was left destitute. The sexual double standard is exposed.' },
      { id: 'aqa-aic-a8', question: 'What does Birling\'s line "a man has to look after himself" represent?', options: ['A reasonable approach to personal finance', 'The capitalist, individualist worldview that Priestley\'s play argues against', 'Priestley\'s own political views', 'A quotation from a famous economist'], correct: 1, explanation: 'Birling\'s philosophy of self-interest is the antithesis of the Inspector\'s message. Priestley uses Birling to represent the capitalist individualism that he believed caused the suffering of the working class and ultimately led to the catastrophes of two world wars.' },
      { id: 'aqa-aic-a9', question: 'How does Priestley use Eva Smith, a character who never appears on stage?', options: ['As a minor background character', 'As the moral centre of the play — she represents every working-class person exploited by the selfishness of the privileged', 'As a symbol of criminal behaviour', 'As a love interest for the Inspector'], correct: 1, explanation: 'Eva is never seen but is the play\'s moral centre. She represents "millions and millions of Eva Smiths" — all working-class people exploited by the powerful. Her absence makes her universal: she could be anyone destroyed by the indifference of the comfortable.' },
      { id: 'aqa-aic-a10', question: 'What was the political significance of Priestley writing the play in 1945?', options: ['1945 was the year theatre was legalised in Britain', 'Britain was choosing between the old capitalist order and a new socialist welfare state — the play argues passionately for the latter', 'There was no political significance to the date', 'Priestley wanted to avoid wartime censorship'], correct: 1, explanation: 'In 1945, Britain elected a Labour government that created the welfare state and NHS. Priestley\'s play argues for exactly this kind of collective responsibility and social reform, making it both a critique of the past and a manifesto for the future being debated at the time of writing.' },
    ],
  },
];

export default aqaLitSetTexts;
