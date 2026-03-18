const deck = {
  id: 'edexcel-belonging-poetry',
  title: 'Edexcel GCSE Poetry — Belonging Cluster',
  description: '30 flashcards covering the 15 poems in the Belonging cluster (2 per poem)',
  category: 'Poetry',
  board: 'Edexcel',
  cards: [
    // The Émigrée — Carol Rumens
    {
      id: 'eb-1',
      front: '"There once was a country… I left it as a child / but my memory of it is sunlight-clear."',
      back: `The opening establishes the speaker's idealised memory of a homeland left behind in childhood. "Sunlight-clear" is a compound adjective that makes the memory vivid and warm — almost impossibly perfect. The fairy-tale register of "There once was" hints that the country may no longer exist as she remembers it. This tension between nostalgic belonging and present displacement runs through the entire poem.`,
      poem: 'The Émigrée',
      poet: 'Carol Rumens',
    },
    {
      id: 'eb-2',
      front: 'How does Rumens use light imagery in "The Émigrée" to explore the theme of belonging?',
      back: `Rumens saturates the poem with light — "sunlight-clear," "white," "bright." The speaker's homeland is always bathed in radiance, no matter how dark reality becomes ("They accuse me of being dark"). Light symbolises the warmth of belonging and cultural identity that the speaker refuses to surrender. The repeated defiance of external negativity shows that belonging can be an internal, emotional state — not just a physical place.`,
      poem: 'The Émigrée',
      poet: 'Carol Rumens',
    },
    // Presents from My Aunts in Pakistan — Moniza Alvi
    {
      id: 'eb-3',
      front: '"I could never be as lovely / as those clothes."',
      back: `Alvi expresses a painful sense of inadequacy — the speaker feels she cannot live up to the beauty and cultural richness the Pakistani clothes represent. The simple, declarative sentence conveys resigned sadness. The clothes symbolise a heritage she admires but feels disconnected from, highlighting the fractured identity of someone caught between two cultures. She belongs fully to neither.`,
      poem: 'Presents from My Aunts in Pakistan',
      poet: 'Moniza Alvi',
    },
    {
      id: 'eb-4',
      front: 'How does Alvi present the conflict between two cultures in "Presents from My Aunts in Pakistan"?',
      back: `Alvi juxtaposes Pakistani garments ("salwar kameez," "apple-green sari") with Western clothing ("denim and corduroy"). The speaker is drawn to both but comfortable in neither — she requests cardigans from Marks and Spencer while marvelling at the embroidered fabrics. This dual pull creates a sense of cultural limbo. The poem suggests that belonging is complicated for those who straddle two worlds, and identity cannot be simply worn like a costume.`,
      poem: 'Presents from My Aunts in Pakistan',
      poet: 'Moniza Alvi',
    },
    // Search For My Tongue — Sujata Bhatt
    {
      id: 'eb-5',
      front: '"I ask you, what would you do / if you had two tongues in your mouth?"',
      back: `Bhatt uses the extended metaphor of the tongue to represent language and cultural identity. The direct address ("I ask you") challenges the reader to empathise. Having "two tongues" captures the bilingual experience as something physically uncomfortable — the languages compete for space. The question format conveys frustration at not being understood, linking language loss to a loss of belonging.`,
      poem: 'Search For My Tongue',
      poet: 'Sujata Bhatt',
    },
    {
      id: 'eb-6',
      front: 'What is the significance of the Gujarati script section in "Search For My Tongue"?',
      back: `Bhatt inserts lines in Gujarati script and phonetic transliteration into the middle of the poem. This forces the English-speaking reader to experience linguistic alienation — exactly what the speaker feels daily. The mother tongue then "grows back" like a plant ("grows longer, grows moist, grows strong veins"), using organic imagery to show that cultural identity is resilient and natural. Belonging to one's heritage cannot be fully erased, even by immersion in another language.`,
      poem: 'Search For My Tongue',
      poet: 'Sujata Bhatt',
    },
    // Half-Caste — John Agard
    {
      id: 'eb-7',
      front: '"Explain yuself / wha yu mean / when yu say half-caste."',
      back: `Agard's imperative opening directly confronts the reader, demanding they justify the offensive term "half-caste." The use of Caribbean dialect ("yuself," "wha yu mean") asserts cultural identity and refuses to conform to Standard English. The repetition of "explain yuself" throughout the poem builds an insistent, rhetorical challenge — belonging should not require halving one's identity to fit someone else's narrow categories.`,
      poem: 'Half-Caste',
      poet: 'John Agard',
    },
    {
      id: 'eb-8',
      front: 'How does Agard use humour and absurdity to challenge prejudice in "Half-Caste"?',
      back: `Agard asks whether Picasso mixing red and green is "half-caste canvas" or whether Tchaikovsky using black and white keys makes a "half-caste symphony." These absurd analogies expose the illogic of the term — mixing is celebrated in art and music but condemned in people. The humour disarms the reader while delivering a serious message: mixed heritage is whole, not half. The poem asserts that belonging to multiple cultures is a strength, not a deficiency.`,
      poem: 'Half-Caste',
      poet: 'John Agard',
    },
    // What Were They Like? — Denise Levertov
    {
      id: 'eb-9',
      front: '"Did the people of Viet Nam / use lanterns of stone?"',
      back: `The poem opens with a series of gentle, curious questions about Vietnamese culture — lanterns, ceremonies, song. The past tense ("Were they") is devastating: it implies the culture has been destroyed. Levertov uses the question-and-answer structure to show how war erases not just lives but entire ways of belonging. The beautiful details (stone lanterns, silk, ornament) emphasise what has been irretrievably lost.`,
      poem: 'What Were They Like?',
      poet: 'Denise Levertov',
    },
    {
      id: 'eb-10',
      front: 'How does the structure of "What Were They Like?" reinforce its anti-war message?',
      back: `The poem is divided into numbered questions (section 1) and corresponding answers (section 2). The questions are innocent and respectful; the answers are bitter and grief-stricken — "Sir, their light hearts turned to stone." This structural contrast mirrors the destruction of a culture by outsiders who never bothered to understand it. Levertov suggests that belonging to a community means nothing to those who bomb it from above, and cultural annihilation is war's cruellest consequence.`,
      poem: 'What Were They Like?',
      poet: 'Denise Levertov',
    },
    // Home — Simon Armitage
    {
      id: 'eb-11',
      front: '"And the doorbell might ring / and it might be a neighbour."',
      back: `The modal verb "might" recurs throughout the poem, creating a tone of tentative hope. The speaker imagines the small, ordinary comforts of having a home — a doorbell, a neighbour. These mundane details are made precious by their absence. Armitage shows that belonging is not glamorous; it is the simple security of a front door, a bed, a place where you are known. The conditional mood ("might") reminds us that for many, this belonging remains out of reach.`,
      poem: 'Home',
      poet: 'Simon Armitage',
    },
    {
      id: 'eb-12',
      front: 'How does Armitage present the idea of home and belonging in "Home"?',
      back: `Armitage builds the poem around everyday domestic details — a clock, curtains, a dining table. These objects become symbols of stability and identity. The speaker's longing for these things reveals that belonging is not abstract but rooted in the physical, tangible space of a home. The poem's conversational, understated tone makes the desire all the more poignant — it is not a grand wish but a basic human need that homelessness or displacement denies.`,
      poem: 'Home',
      poet: 'Simon Armitage',
    },
    // In Paris with You — James Fenton
    {
      id: 'eb-13',
      front: '"Don\'t talk to me of love. I\'ve had an earful."',
      back: `The colloquial, blunt opening ("an earful") immediately establishes a cynical, world-weary speaker. The imperative "Don't talk to me" sets up resistance to romantic clichés. Fenton's conversational register and dark humour mask genuine vulnerability — the speaker has been hurt and now deflects with wit. The poem explores belonging to another person while simultaneously pushing them away, capturing the messy reality of emotional attachment after heartbreak.`,
      poem: 'In Paris with You',
      poet: 'James Fenton',
    },
    {
      id: 'eb-14',
      front: 'How does Fenton subvert the romantic tradition of Paris in "In Paris with You"?',
      back: `Instead of celebrating Paris's famous landmarks, the speaker insists: "I'm in Paris with the slightest / Bit of love left over." They are in a "sleazy hotel" rather than beneath the Eiffel Tower. Fenton deliberately undermines the tourist-postcard version of romance to explore a rawer, more honest form of belonging — two damaged people finding temporary connection. The refrain "I'm in Paris with you" shifts from dismissive to tender, showing that belonging to someone matters more than belonging to a place.`,
      poem: 'In Paris with You',
      poet: 'James Fenton',
    },
    // Checking Out Me History — John Agard
    {
      id: 'eb-15',
      front: '"Dem tell me / Dem tell me / Wha dem want to tell me."',
      back: `The repetition of "Dem tell me" creates a drumbeat rhythm that evokes oral storytelling traditions. "Dem" (they) refers to the colonial education system that controlled the narrative. The rhyme and Caribbean dialect assert cultural identity in defiance of the Standard English that was imposed. Agard shows that belonging requires knowing your own history — and that being denied it is a form of cultural erasure.`,
      poem: 'Checking Out Me History',
      poet: 'John Agard',
    },
    {
      id: 'eb-16',
      front: 'How does Agard contrast British and Caribbean history in "Checking Out Me History"?',
      back: `Agard alternates between stanzas about British figures (Dick Whittington, Lord Nelson, Florence Nightingale) taught in school and stanzas about Caribbean/Black heroes (Toussaint L'Ouverture, Nanny de Maroon, Mary Seacole) who were omitted. The British references are presented in a mocking, nursery-rhyme register, while the Caribbean figures are described with reverence and vivid imagery — "a fire-Loss of belonging. woman." This contrast exposes how colonial education erased Black history, and the speaker's act of reclaiming it is an act of self-determined belonging.`,
      poem: 'Checking Out Me History',
      poet: 'John Agard',
    },
    // The Class Game — Mary Casey
    {
      id: 'eb-17',
      front: '"How can you tell what class I\'m from? / I can tell you where I\'m not."',
      back: `Casey opens with a direct, confrontational question that challenges class prejudice head-on. The speaker immediately defines herself by negation — she knows she is excluded from the upper class. The rhyming couplet gives the poem a punchy, defiant energy. The title itself frames class as a "game" — something artificial and performative — suggesting that social belonging based on class is a construct, not a reality.`,
      poem: 'The Class Game',
      poet: 'Mary Casey',
    },
    {
      id: 'eb-18',
      front: 'How does Casey use language and dialect to explore belonging and class in "The Class Game"?',
      back: `Casey contrasts working-class speech ("corpy," "council," "tara") with upper-class markers ("semis," "au revoir"). The poem proudly uses colloquial Liverpool dialect, refusing to adopt "proper" English. By listing class signifiers — clothing, housing, vocabulary — Casey exposes how belonging in British society is policed through superficial markers. The final assertion of pride in her background reclaims working-class identity as something to celebrate, not hide.`,
      poem: 'The Class Game',
      poet: 'Mary Casey',
    },
    // Singh Song! — Daljit Nagra
    {
      id: 'eb-19',
      front: '"My bride / she effing at my mum / in all di colours of Punjabi."',
      back: `Nagra's playful blend of English and Punjabi creates a vibrant, hybrid voice. "Effing" humorously suggests swearing without spelling it out, while "all di colours of Punjabi" turns language into something rich and sensory. The bride's rebelliousness and the speaker's delight in it celebrate a new, irreverent form of belonging — one that embraces cultural fusion rather than conforming to tradition. The humour masks a serious point about forging identity across cultures.`,
      poem: 'Singh Song!',
      poet: 'Daljit Nagra',
    },
    {
      id: 'eb-20',
      front: 'How does Nagra present the tension between duty and desire in "Singh Song!"?',
      back: `The speaker neglects his father's shop to be with his new wife — "I run my daddy's Indian shop / from 9 o'clock to 9 o'clock." The rigid hours contrast with the freedom of the romantic interludes. Nagra uses this tension between filial duty (belonging to family and tradition) and personal desire (belonging to a partner) to explore how second-generation immigrants navigate competing loyalties. The joyful, irreverent tone suggests that new forms of belonging can coexist with inherited ones.`,
      poem: 'Singh Song!',
      poet: 'Daljit Nagra',
    },
    // Cousin Kate — Christina Rossetti
    {
      id: 'eb-21',
      front: '"He lured me to his palace home — / Woe\'s me for joy thereof."',
      back: `"Lured" presents the lord as a predator and the speaker as prey, removing her agency. "Palace home" contrasts with her humble "cottage" origins — she is taken out of her world. "Woe's me for joy thereof" is an oxymoron: the joy of the relationship brought only sorrow. Rossetti explores how a woman's social belonging can be destroyed when she is used and discarded by a man of higher class, exposing Victorian double standards.`,
      poem: 'Cousin Kate',
      poet: 'Christina Rossetti',
    },
    {
      id: 'eb-22',
      front: 'How does Rossetti use the speaker\'s child to explore belonging in "Cousin Kate"?',
      back: `The speaker ends with triumph: "my fair-haired son, my shame, my pride." The child is simultaneously a mark of social disgrace ("shame") and a source of fierce maternal belonging ("pride"). Kate, though she has the lord's ring, has no heir — "Yet I've a gift you have not got." Rossetti subverts the expected power dynamic: the "fallen woman" possesses the deepest form of belonging through motherhood, while the respectable wife remains incomplete.`,
      poem: 'Cousin Kate',
      poet: 'Christina Rossetti',
    },
    // My Last Duchess — Robert Browning
    {
      id: 'eb-23',
      front: '"That\'s my last Duchess painted on the wall, / Looking as if she were alive."',
      back: `The possessive "my" immediately establishes the Duke's view of his wife as property. "Last" chillingly implies there will be a next. "Looking as if she were alive" is darkly ironic — the subjunctive "were" confirms she is dead, and the Duke now controls her image completely. Browning reveals that the Duke's concept of belonging is one of ownership: the Duchess belongs to him, not as a partner but as a possession to be displayed.`,
      poem: 'My Last Duchess',
      poet: 'Robert Browning',
    },
    {
      id: 'eb-24',
      front: 'How does Browning use the dramatic monologue form to explore power and belonging in "My Last Duchess"?',
      back: `The Duke speaks uninterrupted in iambic pentameter couplets, his control of the conversation mirroring his desire to control everything — including people. He reveals his jealousy that the Duchess's smiles belonged to everyone, not just him: "she liked whate'er / She looked on, and her looks went everywhere." The dramatic monologue lets the reader see the Duke's possessiveness while he remains oblivious to his own cruelty. Browning shows that toxic belonging — treating a person as property — leads to destruction.`,
      poem: 'My Last Duchess',
      poet: 'Robert Browning',
    },
    // Sonnet 43 (How Do I Love Thee?) — Elizabeth Barrett Browning
    {
      id: 'eb-25',
      front: '"How do I love thee? Let me count the ways. / I love thee to the depth and breadth and height / My soul can reach."',
      back: `Barrett Browning opens with a rhetorical question that the entire sonnet answers. The spatial metaphors ("depth," "breadth," "height") attempt to measure the immeasurable, giving love a physical, three-dimensional quality. "My soul can reach" elevates the love beyond the body into the spiritual. The Petrarchan sonnet form — traditionally used for unrequited love — is here filled with confident, reciprocated devotion. Belonging to another person is presented as the soul's highest purpose.`,
      poem: 'Sonnet 43',
      poet: 'Elizabeth Barrett Browning',
    },
    {
      id: 'eb-26',
      front: 'How does Barrett Browning use repetition and structure to convey devotion in "Sonnet 43"?',
      back: `The anaphoric repetition of "I love thee" (eight times) creates a litany — almost a prayer. Each repetition adds a new dimension: everyday life ("sun and candle-light"), passion ("freely," "purely"), suffering ("my old griefs"), and faith ("my childhood's faith"). The sonnet builds to its climax: "I shall but love thee better after death." Barrett Browning presents belonging to a loved one as eternal and all-encompassing, transcending even mortality. The strict sonnet form contains and dignifies the overwhelming emotion.`,
      poem: 'Sonnet 43',
      poet: 'Elizabeth Barrett Browning',
    },
    // Walking Away — Cecil Day-Lewis
    {
      id: 'eb-27',
      front: '"I have had worse partings, but none that so / Gnaws at my mind still."',
      back: `The opening confession — that this small moment "gnaws" more than worse losses — immediately signals its emotional weight. "Gnaws" is animalistic and persistent, suggesting the memory is a wound that never heals. Day-Lewis captures the paradox of parental belonging: the deeper the bond, the more painful the necessary separation. The present tense "gnaws… still" (eighteen years later) shows that letting a child go is a permanent ache, not a one-time event.`,
      poem: 'Walking Away',
      poet: 'Cecil Day-Lewis',
    },
    {
      id: 'eb-28',
      front: 'How does Day-Lewis use natural imagery to explore the parent-child bond in "Walking Away"?',
      back: `Day-Lewis compares his son to "a satellite / Wrenched from its orbit" and "a winged seed loosened from its parent stem." The satellite image suggests violent separation from a gravitational centre (the parent). The seed image is gentler — separation is natural, necessary for growth. This progression shows the father accepting that belonging must evolve: a child cannot remain in orbit forever. The final line — "selfhood begins with a walking away" — redefines belonging as the courage to let go.`,
      poem: 'Walking Away',
      poet: 'Cecil Day-Lewis',
    },
    // Eden Rock — Charles Causley
    {
      id: 'eb-29',
      front: '"They are waiting for me somewhere beyond Eden Rock."',
      back: `The final line is profoundly ambiguous. "Beyond Eden Rock" suggests the afterlife — the speaker's deceased parents wait for him on the other side. "Eden" evokes paradise and innocence, a prelapsarian world of perfect belonging. The calm, matter-of-fact tone ("They are waiting") removes fear from death, presenting it as a reunion. Causley transforms mortality into a homecoming, suggesting that the deepest belonging — to family — persists even beyond life.`,
      poem: 'Eden Rock',
      poet: 'Charles Causley',
    },
    {
      id: 'eb-30',
      front: 'How does Causley use precise, domestic detail in "Eden Rock" to evoke belonging?',
      back: `Causley fills the poem with hyper-specific details: his mother's "sprigged dress," the "old H.P. Sauce bottle" holding milk, his father's "survey the kingdom" stance. These tiny, vivid memories recreate a childhood scene with photographic clarity. The specificity makes the parents feel real and present, even though they are dead. Belonging here is built from accumulation of small, shared moments — the poem argues that love is stored in ordinary objects and rituals, and these details are what we carry into eternity.`,
      poem: 'Eden Rock',
      poet: 'Charles Causley',
    },
  ],
};
export default deck;
