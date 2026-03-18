const gcseLangReading = {
  id: 'gcse-lang-reading',
  title: 'GCSE Language: Reading',
  subtitle: 'Conquer Paper 1 and Paper 2 reading questions with confidence.',
  tier: 'GCSE',
  price: 49,
  duration: '8-10 hours',
  level: 'GCSE (Years 10-11)',
  description:
    'From identifying information to evaluating critically, master every AQA English Language reading question type across both papers. Includes model answers at every grade band.',
  color: '#10b981',
  moduleList: [
    // ──────────────────────────────────────────────
    // MODULE 1 — Paper 1 Q1: Information Retrieval
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lr-m1',
      title: 'Paper 1 Q1: Information Retrieval',
      duration: '25 mins',
      content: `
<h2>Paper 1 Question 1 — List Four Things</h2>

<p>Question 1 on AQA Paper 1 is worth <strong>4 marks</strong> and should take no more than <strong>5 minutes</strong> in the exam. You are given a specific section of the source text and asked to <em>list four things</em> about a topic — for example, a character, a setting, or an event.</p>

<div class="key-term"><strong>Key Term: Information Retrieval</strong> — The skill of locating and selecting explicit information from a text without inference or interpretation.</div>

<h3>What the Examiner Wants</h3>
<ul>
  <li>Four <strong>separate</strong> points drawn from the correct lines of the source.</li>
  <li>Each point must be clearly linked to the question focus.</li>
  <li>Direct quotation <strong>or</strong> paraphrase — both are acceptable.</li>
  <li>No analysis or explanation is needed.</li>
</ul>

<div class="text-extract">The kitchen was cold and unwelcoming. Frost clung to the inside of the window pane, and the tap dripped with a relentless, hollow rhythm. A single light bulb hung from the ceiling, casting long shadows across the cracked tiles. On the table sat a bowl of porridge, untouched and already forming a grey skin on its surface.<div class="source">Original passage in the style of AQA exam fiction extracts</div></div>

<h3>Step-by-Step Strategy</h3>
<ol>
  <li><strong>Read the question carefully</strong> — underline the line references and the focus word (e.g. "the kitchen").</li>
  <li><strong>Number the lines</strong> in the specified section so you stay within range.</li>
  <li><strong>Scan and highlight</strong> — look for simple, factual details. Do not overthink.</li>
  <li><strong>Write short statements</strong> — one per line. For example: <em>"The kitchen was cold and unwelcoming."</em></li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Many students lose marks by going outside the specified line range. Always double-check you are reading from the correct section before you write anything.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Giving a point that requires inference — e.g. writing "The person who lives here is poor." The question asks for explicit information, not deduction. Stick to what is directly stated in the text.</div>

<h3>Quick Practice</h3>
<p>Using the extract above, list four things you learn about the kitchen:</p>
<ol>
  <li>The kitchen was cold and unwelcoming.</li>
  <li>Frost clung to the inside of the window pane.</li>
  <li>A single light bulb hung from the ceiling.</li>
  <li>A bowl of porridge sat untouched on the table.</li>
</ol>

<p>Notice how each point is a simple, direct statement lifted from the text. That is all Q1 requires — accuracy and relevance, not flair.</p>
`,
      quiz: [
        {
          id: 'gcse-lr-m1-q1',
          question:
            'How many marks is AQA Paper 1 Question 1 worth?',
          options: ['2 marks', '4 marks', '8 marks', '12 marks'],
          correct: 1,
          explanation:
            'Paper 1 Q1 is worth 4 marks — one mark for each correct, relevant piece of information identified from the specified lines.',
        },
        {
          id: 'gcse-lr-m1-q2',
          question:
            'Which of the following would NOT be an acceptable response to a "list four things" question?',
          options: [
            'A direct quotation from the text',
            'A paraphrased statement of a fact in the text',
            'An inference about a character\'s emotions',
            'A short sentence identifying an explicit detail',
          ],
          correct: 2,
          explanation:
            'Q1 tests information retrieval — explicit details only. Inference about emotions goes beyond what is directly stated and would risk not being credited.',
        },
        {
          id: 'gcse-lr-m1-q3',
          question:
            'What is the most common reason students lose marks on Q1?',
          options: [
            'Writing too much analysis',
            'Using quotations that are too long',
            'Selecting information from outside the specified lines',
            'Not using paragraphs',
          ],
          correct: 2,
          explanation:
            'The single biggest pitfall is going outside the given line range. Any point from outside those lines will not be credited, regardless of how relevant it is.',
        },
        {
          id: 'gcse-lr-m1-q4',
          question:
            'Approximately how long should you spend on Paper 1 Q1 in the exam?',
          options: [
            '1-2 minutes',
            '5 minutes',
            '10 minutes',
            '15 minutes',
          ],
          correct: 1,
          explanation:
            'AQA recommends around 5 minutes for Q1. It is a low-tariff question and spending too long on it eats into time for the higher-mark questions.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 2 — Paper 1 Q2: Language Analysis
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lr-m2',
      title: 'Paper 1 Q2: Language Analysis',
      duration: '40 mins',
      content: `
<h2>Paper 1 Question 2 — How Does the Writer Use Language?</h2>

<p>Question 2 is worth <strong>8 marks</strong> and directs you to a specific section of the source. You must analyse how the writer uses language to achieve effects — this means exploring <strong>word choices</strong>, <strong>imagery</strong>, <strong>figurative language</strong>, and <strong>sentence forms</strong>.</p>

<div class="key-term"><strong>Key Term: Connotation</strong> — The implied or associated meaning of a word beyond its literal definition. For example, "crept" literally means moved slowly, but it connotes secrecy, stealth, or threat.</div>

<h3>The AQA Mark Scheme: What Gets Top Marks</h3>
<ul>
  <li><strong>Level 4 (7-8 marks):</strong> Perceptive, detailed analysis. Uses subject terminology accurately and precisely. Analyses effects of individual words and phrases.</li>
  <li><strong>Level 3 (5-6 marks):</strong> Clear, relevant explanations with appropriate terminology.</li>
  <li><strong>Level 2 (3-4 marks):</strong> Attempts to comment on language with some awareness of methods.</li>
  <li><strong>Level 1 (1-2 marks):</strong> Simple identification of language features with little explanation.</li>
</ul>

<div class="text-extract">The fog did not simply arrive; it devoured the street. Lamp posts became vague, ghostly sentinels, their amber glow reduced to dull smudges of warmth. Every sound was swallowed — footsteps, voices, the distant growl of traffic — all consumed by the grey, suffocating silence.<div class="source">Original passage in the style of AQA exam fiction extracts</div></div>

<h3>Analytical Paragraph Structure</h3>
<p>Use the <strong>What → How → Why</strong> framework:</p>
<ol>
  <li><strong>What</strong> — Identify the technique or language choice (with a short quotation).</li>
  <li><strong>How</strong> — Name the method using subject terminology.</li>
  <li><strong>Why</strong> — Explain the effect on the reader. What does it suggest, imply, or make the reader feel?</li>
</ol>

<div class="model-answer"><strong>Model Answer (Grade 8-9):</strong> The writer personifies the fog through the verb "devoured," which transforms a natural phenomenon into something predatory and consuming. The connotations of violent consumption suggest the fog is not merely present but actively hostile, stripping the street of its identity. This is reinforced by the metaphor "ghostly sentinels" to describe the lamp posts, which implies that familiar, reassuring objects have been rendered spectral and ineffective — guardians that can no longer protect. The cumulative effect of the listing — "footsteps, voices, the distant growl of traffic" — emphasises the totality of the fog's dominance, as every layer of human presence is systematically erased, leaving the reader with a claustrophobic sense of isolation.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Avoid "feature spotting" — simply naming a technique without explaining its effect. The examiner wants to see you explore <em>why</em> the writer chose that particular word or image and what it makes the reader think or feel.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing "This creates a vivid image in the reader's mind" as your entire explanation. This is too vague. Be specific: what kind of image? What atmosphere, emotion, or idea does it convey?</div>

<h3>Key Language Methods to Revise</h3>
<ul>
  <li><strong>Metaphor and simile</strong> — comparisons that shape meaning.</li>
  <li><strong>Personification</strong> — giving human qualities to non-human things.</li>
  <li><strong>Semantic fields</strong> — groups of words from the same topic area.</li>
  <li><strong>Sensory language</strong> — sight, sound, touch, taste, smell.</li>
  <li><strong>Sentence forms</strong> — short sentences for impact, long sentences for building tension.</li>
</ul>
`,
      quiz: [
        {
          id: 'gcse-lr-m2-q1',
          question:
            'How many marks is Paper 1 Question 2 worth?',
          options: ['4 marks', '6 marks', '8 marks', '12 marks'],
          correct: 2,
          explanation:
            'Paper 1 Q2 is worth 8 marks. You should spend approximately 10-12 minutes on it.',
        },
        {
          id: 'gcse-lr-m2-q2',
          question:
            'Which analytical framework is recommended for Q2 paragraphs?',
          options: [
            'Point, Evidence, Explain',
            'What, How, Why',
            'Introduction, Body, Conclusion',
            'Describe, Compare, Evaluate',
          ],
          correct: 1,
          explanation:
            'The What-How-Why framework helps you identify a language feature (What), name the technique (How), and explain its effect on the reader (Why).',
        },
        {
          id: 'gcse-lr-m2-q3',
          question:
            'What does the term "connotation" refer to?',
          options: [
            'The dictionary definition of a word',
            'The implied or associated meaning beyond the literal definition',
            'A word that sounds like what it describes',
            'The grammatical function of a word in a sentence',
          ],
          correct: 1,
          explanation:
            'Connotation refers to the implied, associated, or suggested meanings a word carries beyond its literal dictionary definition. Exploring connotations is essential for high-level language analysis.',
        },
        {
          id: 'gcse-lr-m2-q4',
          question:
            'Which of the following is an example of "feature spotting"?',
          options: [
            '"The metaphor suggests the fog is a predatory force, creating unease."',
            '"The writer uses a metaphor."',
            '"The verb \'devoured\' connotes violent consumption, implying hostility."',
            '"Personification transforms the fog into an active, threatening presence."',
          ],
          correct: 1,
          explanation:
            'Simply stating "The writer uses a metaphor" with no explanation of its effect is feature spotting. You must always explain the impact of the technique to gain marks.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 3 — Paper 1 Q3: Structural Analysis
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lr-m3',
      title: 'Paper 1 Q3: Structural Analysis',
      duration: '40 mins',
      content: `
<h2>Paper 1 Question 3 — How Does the Writer Structure the Text?</h2>

<p>Question 3 is worth <strong>8 marks</strong> and asks you to analyse the <strong>whole source</strong> — not just a section. You must explain how the writer has structured the text to interest the reader. This is about the <em>organisation and arrangement</em> of ideas, not individual word choices.</p>

<div class="key-term"><strong>Key Term: Structural Feature</strong> — A deliberate choice about how a text is organised, including focus shifts, narrative perspective changes, the use of openings and endings, pacing, and the ordering of events.</div>

<h3>What Counts as "Structure"?</h3>
<ul>
  <li><strong>Focus shifts</strong> — moving from a wide shot to a close-up, or from external action to internal thought.</li>
  <li><strong>Openings</strong> — how the writer hooks the reader (e.g. in medias res, mystery, description).</li>
  <li><strong>Endings</strong> — how the text concludes (e.g. cliffhanger, resolution, circular structure).</li>
  <li><strong>Pacing</strong> — acceleration through short sentences/paragraphs; deceleration through long description.</li>
  <li><strong>Narrative perspective</strong> — shifts between characters or between present and past.</li>
  <li><strong>Paragraph length and arrangement</strong> — a single-sentence paragraph for emphasis, for example.</li>
</ul>

<div class="text-extract">The market square was alive. Traders bellowed prices, children darted between stalls, and the smell of roasting chestnuts mingled with engine fumes. Elena stood at the edge of it all, clutching her letter.<br><br>She unfolded it for the third time. The words had not changed. <em>We regret to inform you…</em><br><br>Around her the crowd pressed on, oblivious. A woman laughed. A dog barked. Somewhere a glass shattered.<br><br>Elena folded the letter and placed it in her coat pocket. Then she walked into the crowd and let it swallow her whole.<div class="source">Original passage in the style of AQA exam fiction extracts</div></div>

<h3>Approaching Q3: A Whole-Text Method</h3>
<ol>
  <li><strong>Beginning</strong> — How does the writer open? What is established? What hooks the reader?</li>
  <li><strong>Development</strong> — How does the focus shift? Does the perspective narrow or widen? Does tension build?</li>
  <li><strong>Ending</strong> — How does the writer conclude? Is there resolution, ambiguity, or a twist?</li>
</ol>

<div class="model-answer"><strong>Model Answer (Grade 8-9):</strong> The writer opens with a wide-angle establishing shot of the market square, using listing ("traders bellowed prices, children darted between stalls") to create a sense of bustling normality. The structural shift occurs in the second paragraph, where the focus narrows sharply to Elena and her letter, moving from the communal to the intensely personal. This contrast between the vibrant public scene and the private devastation of "We regret to inform you" creates dramatic irony — the reader understands Elena's pain while the crowd remains "oblivious." The final image of Elena letting the crowd "swallow her whole" provides a circular return to the opening's sense of the market as an overwhelming force, but the reader now perceives it differently: it is no longer alive with energy but threatening to erase Elena's individuality. The ending is deliberately ambiguous, leaving the reader uncertain whether Elena is finding comfort in anonymity or losing herself entirely.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always link structural choices to the reader's experience. Do not just describe what happens ("the writer moves from the market to Elena"). Explain <em>why</em> this shift matters — what effect does it have on the reader?</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Analysing language instead of structure. If you find yourself discussing metaphors or adjectives, you have drifted off-task. Q3 is about how the text is arranged, not how individual words are used.</div>
`,
      quiz: [
        {
          id: 'gcse-lr-m3-q1',
          question:
            'What does Paper 1 Q3 ask you to analyse?',
          options: [
            'The writer\'s use of language in a specific section',
            'How the writer structures the whole text to interest the reader',
            'Whether you agree with the writer\'s perspective',
            'The differences between two source texts',
          ],
          correct: 1,
          explanation:
            'Q3 focuses on structure across the whole source text — how it is organised and arranged to engage the reader, including focus shifts, openings, endings, and pacing.',
        },
        {
          id: 'gcse-lr-m3-q2',
          question:
            'Which of the following is a structural feature?',
          options: [
            'A simile comparing the wind to a knife',
            'A shift in focus from a wide setting to a single character',
            'The use of alliteration in a descriptive paragraph',
            'A semantic field of darkness and decay',
          ],
          correct: 1,
          explanation:
            'A shift in focus — such as moving from a wide establishing shot to a close-up on one character — is a structural choice about how the text is organised. The other options are all language features.',
        },
        {
          id: 'gcse-lr-m3-q3',
          question:
            'What is "in medias res"?',
          options: [
            'A technique where the text ends on a cliffhanger',
            'Beginning a story in the middle of the action',
            'A circular narrative structure',
            'Using flashback to reveal backstory',
          ],
          correct: 1,
          explanation:
            'In medias res (Latin for "into the middle of things") means opening a narrative in the middle of the action, without preamble. It immediately engages the reader by creating questions.',
        },
        {
          id: 'gcse-lr-m3-q4',
          question:
            'What is the most common mistake students make on Q3?',
          options: [
            'Writing too much about the ending',
            'Analysing language features instead of structural choices',
            'Using too many quotations',
            'Forgetting to write in paragraphs',
          ],
          correct: 1,
          explanation:
            'The biggest pitfall is drifting into language analysis — discussing word choices, metaphors, or imagery. Q3 is specifically about structure: how the text is arranged and organised.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 4 — Paper 1 Q4: Critical Evaluation
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lr-m4',
      title: 'Paper 1 Q4: Critical Evaluation',
      duration: '45 mins',
      content: `
<h2>Paper 1 Question 4 — Critical Evaluation</h2>

<p>Question 4 is the highest-tariff reading question on Paper 1, worth <strong>20 marks</strong>. It gives you a statement about the text and asks: <em>"To what extent do you agree?"</em> You must evaluate the text critically, exploring how the writer's methods create specific effects.</p>

<div class="key-term"><strong>Key Term: Evaluation</strong> — Making a critical judgement about a text by weighing up how effectively the writer has achieved a particular purpose or effect, supported by analysis of specific methods.</div>

<h3>Understanding the Question</h3>
<p>A typical Q4 might read: <em>"A student said: 'The writer makes the reader feel great sympathy for the main character.' To what extent do you agree?"</em></p>
<p>You are <strong>not</strong> simply agreeing or disagreeing — you are using the text as evidence to show <em>how</em> the writer creates that effect. Most strong responses broadly agree while exploring nuance.</p>

<h3>The Evaluation Framework</h3>
<ol>
  <li><strong>State your position</strong> — agree, partially agree, or (rarely) disagree.</li>
  <li><strong>Select evidence</strong> — choose 4-5 well-chosen quotations from the specified section.</li>
  <li><strong>Analyse methods</strong> — explore language, structure, and form as tools the writer uses.</li>
  <li><strong>Judge effectiveness</strong> — explain how well the method achieves the stated effect.</li>
</ol>

<div class="text-extract">Marcus pressed his back against the wall, his breath shallow and uneven. The corridor ahead stretched into darkness, each door a closed mouth refusing to speak. He counted his heartbeats — one, two, three — and forced himself forward. His shoes squeaked against the linoleum, absurdly loud. Somewhere above, a strip light buzzed and flickered, throwing his shadow into a frantic, stuttering dance.<div class="source">Original passage in the style of AQA exam fiction extracts</div></div>

<div class="model-answer"><strong>Model Answer (Grade 8-9):</strong> I agree that the writer creates a powerful sense of fear and vulnerability. The physical description of Marcus — "breath shallow and uneven," "pressed his back against the wall" — immediately positions him as someone on the defensive, and the reader's sympathy is engaged through these visceral, bodily details that mirror the physical sensations of anxiety. The metaphor "each door a closed mouth refusing to speak" is particularly effective because it personifies the environment as deliberately withholding and hostile; the doors are not simply closed but actively refusing to help, which intensifies the reader's perception of Marcus as utterly alone. However, the writer also introduces moments of dark absurdity — the shoes that squeak "absurdly loud" — which subtly undercuts the tension and adds a layer of self-awareness to Marcus's fear. This prevents the passage from becoming melodramatic and makes the fear feel more authentic, as real terror often coexists with absurd, mundane details. The final image of the shadow in a "frantic, stuttering dance" externalises Marcus's internal panic, and the word "stuttering" connotes a loss of control, reinforcing the reader's sense that fear has overtaken both his body and the space around him.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Use evaluative verbs and phrases throughout: "effectively conveys," "successfully creates," "powerfully suggests," "this is particularly compelling because." These signal to the examiner that you are evaluating, not just analysing.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Simply retelling the story or describing what happens. Q4 demands critical judgement — you must assess <em>how well</em> the writer achieves the stated effect, not summarise the plot. Every paragraph should include evaluative language.</div>

<h3>Time Management</h3>
<p>At 20 marks, Q4 should take approximately <strong>20-25 minutes</strong>. Aim for 4-5 developed paragraphs. Quality of analysis always beats quantity of points.</p>
`,
      quiz: [
        {
          id: 'gcse-lr-m4-q1',
          question:
            'How many marks is Paper 1 Question 4 worth?',
          options: ['8 marks', '12 marks', '16 marks', '20 marks'],
          correct: 3,
          explanation:
            'Q4 is the highest-tariff reading question on Paper 1, worth 20 marks. It carries more weight than Q2 and Q3 combined.',
        },
        {
          id: 'gcse-lr-m4-q2',
          question:
            'What does Q4 primarily require you to do?',
          options: [
            'List information from the text',
            'Compare two different sources',
            'Evaluate how effectively the writer creates a specific effect',
            'Analyse the structure of the whole text',
          ],
          correct: 2,
          explanation:
            'Q4 is an evaluation question. You must make a critical judgement about how effectively the writer achieves the effect described in the statement, supported by analysis of methods.',
        },
        {
          id: 'gcse-lr-m4-q3',
          question:
            'Which phrase would best demonstrate evaluative writing?',
          options: [
            '"The writer uses a metaphor"',
            '"This effectively conveys the character\'s isolation because…"',
            '"In the next paragraph the writer describes the setting"',
            '"The word \'dark\' means there is no light"',
          ],
          correct: 1,
          explanation:
            'Evaluative writing requires judgement words like "effectively," "powerfully," "compellingly." The phrase "This effectively conveys… because" shows you are assessing the success of the writer\'s methods.',
        },
        {
          id: 'gcse-lr-m4-q4',
          question:
            'How long should you spend on Q4 in the exam?',
          options: [
            '5-10 minutes',
            '10-15 minutes',
            '20-25 minutes',
            '30-35 minutes',
          ],
          correct: 2,
          explanation:
            'At 20 marks, Q4 deserves approximately 20-25 minutes. This gives you time to write 4-5 well-developed evaluative paragraphs.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 5 — Paper 2 Q1: True or False
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lr-m5',
      title: 'Paper 2 Q1: True or False',
      duration: '20 mins',
      content: `
<h2>Paper 2 Question 1 — Choose Four True Statements</h2>

<p>Paper 2 Q1 is worth <strong>4 marks</strong> and is the quickest question on either paper. You are given <strong>eight statements</strong> about a section of Source A and must <strong>shade the boxes of the four that are true</strong>.</p>

<div class="key-term"><strong>Key Term: Explicit Information</strong> — Details that are directly and clearly stated in the text, requiring no inference or interpretation to understand.</div>

<h3>How It Works</h3>
<p>The exam paper presents a list of eight statements labelled A–H. Each statement makes a claim about what happens or what is described in a specified section of Source A. Exactly four statements are true and four are false. You shade the boxes next to the four you believe are true.</p>

<h3>Example Source Extract</h3>
<div class="text-extract">The expedition set out at dawn on 14th March 1897. The party consisted of seven men, two of whom had previously attempted the crossing. They carried provisions for twelve days and a single canvas tent. The weather, which had been fair for a week, turned abruptly; by noon a bitter wind swept across the plateau, reducing visibility to a few yards. Captain Hargreaves ordered a halt and the men made camp beside a frozen stream.<div class="source">Original passage in the style of AQA exam non-fiction extracts</div></div>

<h3>Example Statements</h3>
<p>Which four are true according to the extract above?</p>
<ul>
  <li>A: The expedition left in the morning. <strong>✓ TRUE</strong> — "set out at dawn"</li>
  <li>B: There were eight men in the party. <strong>✗ FALSE</strong> — there were seven.</li>
  <li>C: All the men had attempted the crossing before. <strong>✗ FALSE</strong> — only two had.</li>
  <li>D: They had enough food for twelve days. <strong>✓ TRUE</strong> — "provisions for twelve days"</li>
  <li>E: The weather had been poor for several days. <strong>✗ FALSE</strong> — it had been "fair for a week."</li>
  <li>F: Visibility became very limited. <strong>✓ TRUE</strong> — "reducing visibility to a few yards"</li>
  <li>G: The men camped near a frozen stream. <strong>✓ TRUE</strong> — "beside a frozen stream"</li>
  <li>H: Captain Hargreaves decided to continue marching. <strong>✗ FALSE</strong> — he "ordered a halt."</li>
</ul>

<h3>Top Strategies</h3>
<ol>
  <li><strong>Read the specified lines first</strong> — do not rely on memory from your initial read-through.</li>
  <li><strong>Check each statement against the text</strong> — go through A–H systematically.</li>
  <li><strong>Watch for subtle distortions</strong> — "all" versus "some," "before" versus "after," exact numbers changed slightly.</li>
  <li><strong>Do not shade more than four boxes</strong> — if you shade five or more, you automatically lose marks.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> If you are unsure about one statement, come back to it after checking the others. Often, once you have confidently identified three true statements, the fourth becomes clearer by elimination.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Shading five boxes "just to be safe." The mark scheme explicitly penalises extra selections — if you shade five, you will be marked out of three instead of four. Always select exactly four.</div>
`,
      quiz: [
        {
          id: 'gcse-lr-m5-q1',
          question:
            'How many statements must you select as true in Paper 2 Q1?',
          options: ['Two', 'Three', 'Four', 'Five'],
          correct: 2,
          explanation:
            'You must shade exactly four boxes. Selecting more or fewer will cost you marks.',
        },
        {
          id: 'gcse-lr-m5-q2',
          question:
            'What happens if you shade five boxes instead of four?',
          options: [
            'Nothing — the examiner ignores the extra one',
            'You are marked out of three instead of four',
            'You automatically score zero',
            'Only your first four selections count',
          ],
          correct: 1,
          explanation:
            'If you shade five boxes, the mark scheme penalises you by marking out of three. Shading six means you are marked out of two, and so on.',
        },
        {
          id: 'gcse-lr-m5-q3',
          question:
            'What type of information does Q1 test?',
          options: [
            'Inferential understanding',
            'Explicit information retrieval',
            'Evaluation of writer\'s methods',
            'Comparison of two sources',
          ],
          correct: 1,
          explanation:
            'Q1 tests your ability to identify explicit, directly stated information — facts that are clearly present in the text without needing interpretation.',
        },
        {
          id: 'gcse-lr-m5-q4',
          question:
            'What is the best strategy for tackling a statement you are unsure about?',
          options: [
            'Guess and move on immediately',
            'Shade it along with a fifth statement to be safe',
            'Skip it, complete the others, and return to it using elimination',
            'Write a note to the examiner explaining your uncertainty',
          ],
          correct: 2,
          explanation:
            'The elimination strategy is most effective. Once you have confidently identified three true statements, you can compare the remaining uncertain ones more carefully.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 6 — Paper 2 Q2: Summary & Synthesis
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lr-m6',
      title: 'Paper 2 Q2: Summary & Synthesis',
      duration: '35 mins',
      content: `
<h2>Paper 2 Question 2 — Summary and Synthesis</h2>

<p>Question 2 is worth <strong>8 marks</strong> and asks you to <strong>summarise the differences (or similarities)</strong> between two sources on a specific topic. You must use evidence from <strong>both</strong> sources and make clear, comparative points.</p>

<div class="key-term"><strong>Key Term: Synthesis</strong> — The skill of combining information from two or more sources to identify points of comparison or contrast, presenting them in an integrated, connected way rather than treating each source separately.</div>

<h3>Source Extracts</h3>
<div class="text-extract"><strong>Source A (21st century):</strong> The school canteen had been transformed. Where plastic trays and beige walls once dominated, there were now bright murals, a salad bar, and a digital menu board showing the calorie count of every dish. Students queued with enthusiasm, debating the merits of the Thai curry over the halloumi wrap. Mrs Patel, the head of catering, beamed. "We listened to the students," she said. "This is their space now."<div class="source">Original passage — modern newspaper feature</div></div>

<div class="text-extract"><strong>Source B (19th century):</strong> The dining hall was a grim chamber of long wooden benches and the pervasive odour of boiled cabbage. No child spoke above a whisper. The food, such as it was, consisted of a thin broth and a heel of bread, distributed under the watchful eye of Mr Grantly, whose expression suggested that even this meagre offering was more than the boys deserved.<div class="source">Original passage — Victorian school memoir style</div></div>

<h3>How to Structure Your Response</h3>
<p>Use <strong>comparative connectives</strong> to weave the sources together:</p>
<ul>
  <li>"In Source A… whereas in Source B…"</li>
  <li>"Both sources suggest… however…"</li>
  <li>"While Source A presents… Source B conveys…"</li>
  <li>"In contrast to Source A's depiction of… Source B shows…"</li>
</ul>

<h3>Worked Example</h3>
<p><strong>Point:</strong> The two sources present very different attitudes towards students at mealtimes.</p>
<p>In Source A, the school has "listened to the students" and made the canteen "their space," suggesting respect for student voice and agency. In contrast, Source B describes a dining hall governed by fear: students dare not speak "above a whisper" under the "watchful eye" of Mr Grantly, implying that children's opinions and comfort are irrelevant. While Source A celebrates student choice through its "salad bar" and varied menu, Source B reduces eating to mere survival with "a thin broth and a heel of bread."</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> You must use evidence from <strong>both</strong> sources in every paragraph. A response that discusses Source A for two paragraphs and then Source B for two paragraphs will not score highly because it lacks synthesis — the sources must be woven together.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Analysing language in detail. Q2 is a <em>summary</em> question — you need to identify <em>what</em> the sources say, not <em>how</em> they say it. Brief references to language are fine, but extended analysis of metaphors or imagery is not what the examiner is looking for.</div>

<h3>Key Differences Between Q2 and Q3</h3>
<ul>
  <li><strong>Q2</strong> = Summary (what the sources say) — focus on content and information.</li>
  <li><strong>Q3</strong> = Language comparison (how the writers say it) — focus on methods and effects.</li>
</ul>
<p>Keeping this distinction clear is vital. Many students lose marks by accidentally doing Q3's task in Q2.</p>
`,
      quiz: [
        {
          id: 'gcse-lr-m6-q1',
          question:
            'What skill does Paper 2 Q2 primarily test?',
          options: [
            'Language analysis',
            'Structural analysis',
            'Summary and synthesis of two sources',
            'Evaluation of a single source',
          ],
          correct: 2,
          explanation:
            'Q2 tests your ability to summarise and synthesise — combining information from both sources to identify differences or similarities on a specific topic.',
        },
        {
          id: 'gcse-lr-m6-q2',
          question:
            'How should you structure your Q2 response?',
          options: [
            'Discuss Source A fully, then Source B fully',
            'Weave both sources together using comparative connectives',
            'Focus only on the source you find most interesting',
            'Write a detailed language analysis of each source',
          ],
          correct: 1,
          explanation:
            'You must integrate both sources within each paragraph using comparative connectives like "whereas," "in contrast," and "while." Treating the sources separately lacks synthesis.',
        },
        {
          id: 'gcse-lr-m6-q3',
          question:
            'What is the key difference between Paper 2 Q2 and Q3?',
          options: [
            'Q2 covers Source A only; Q3 covers both',
            'Q2 focuses on what the sources say; Q3 focuses on how they say it',
            'Q2 is worth more marks than Q3',
            'Q2 requires evaluation; Q3 requires summary',
          ],
          correct: 1,
          explanation:
            'Q2 is about content (what the sources say — summary). Q3 is about method (how the writers use language — analysis). This is one of the most important distinctions on Paper 2.',
        },
        {
          id: 'gcse-lr-m6-q4',
          question:
            'Which of the following is an effective comparative connective?',
          options: [
            '"Furthermore"',
            '"In contrast to Source A, Source B suggests…"',
            '"Another point is"',
            '"Firstly"',
          ],
          correct: 1,
          explanation:
            '"In contrast to Source A, Source B suggests…" directly links the two sources and signals a difference, which is exactly what Q2 requires.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 7 — Paper 2 Q3: Language Comparison
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lr-m7',
      title: 'Paper 2 Q3: Language Comparison',
      duration: '40 mins',
      content: `
<h2>Paper 2 Question 3 — Comparing Writers' Use of Language</h2>

<p>Question 3 is worth <strong>12 marks</strong> and asks you to compare how the two writers use language to convey their ideas or perspectives. Unlike Q2, this question demands <strong>detailed analysis of methods</strong> — not just what the writers say, but <em>how</em> they say it.</p>

<div class="key-term"><strong>Key Term: Language Comparison</strong> — Analysing how two writers use different (or similar) language techniques to achieve their purposes, drawing out the effects of their specific word choices, imagery, and rhetorical strategies in relation to each other.</div>

<h3>Source Extracts</h3>
<div class="text-extract"><strong>Source A:</strong> The city was a machine, tireless and indifferent. Cranes swung across the skyline like the arms of giants, and the streets hummed with a restless, electric energy. People moved in streams — purposeful, hurried, eyes fixed ahead. To stand still was to be swept aside.<div class="source">Original passage — modern travel writing style</div></div>

<div class="text-extract"><strong>Source B:</strong> London presented itself to me as a monstrous labyrinth. The streets were choked with horses, carts, and the wretched souls who drove them. Smoke belched from a thousand chimneys, settling upon every surface like a funeral shroud. I confess I felt at once overwhelmed and utterly insignificant.<div class="source">Original passage — 19th-century travel memoir style</div></div>

<h3>Building Comparative Paragraphs</h3>
<p>Each paragraph should follow this pattern:</p>
<ol>
  <li><strong>Identify a shared theme or topic</strong> — e.g. both writers present the city as overwhelming.</li>
  <li><strong>Analyse Source A's language</strong> — select a quotation and explore technique + effect.</li>
  <li><strong>Compare with Source B's language</strong> — select a quotation and analyse how the approach differs or aligns.</li>
  <li><strong>Draw out the contrast or similarity</strong> — explain what this reveals about each writer's perspective.</li>
</ol>

<div class="model-answer"><strong>Model Answer (Grade 8-9):</strong> Both writers present the city as an overpowering force, but they use contrasting imagery to convey this. In Source A, the metaphor "the city was a machine" frames urban life as mechanical, efficient, and impersonal — the connotations of "tireless and indifferent" suggest a system that functions without regard for individual human experience. The simile "like the arms of giants" reinforces this sense of inhuman scale, positioning the cranes as mythic, almost threatening presences. In contrast, Source B uses the metaphor "a monstrous labyrinth," which connotes confusion, entrapment, and danger rather than efficiency. Where Source A's city is coldly functional, Source B's is chaotic and hostile. The simile "like a funeral shroud" introduces connotations of death and mourning entirely absent from Source A, suggesting that the 19th-century writer perceives the city as not merely indifferent but actively destructive. This difference may reflect the writers' distinct historical contexts: Source A's modern narrator accepts the city's relentless pace as normative, while Source B's Victorian narrator is viscerally disturbed by it.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The best responses do not treat the sources separately. Every analytical point about Source A should be connected to Source B through comparison. Use phrases like "Similarly," "In contrast," "Where Source A… Source B instead…" to keep the comparison explicit.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing two separate mini-essays — one about Source A and one about Source B — with a brief comparison sentence at the end. This will cap your mark at Level 2. The comparison must be embedded throughout.</div>

<h3>Useful Comparison Vocabulary</h3>
<ul>
  <li>Similarly / Likewise / In the same way</li>
  <li>In contrast / Conversely / On the other hand</li>
  <li>Where Source A… Source B instead…</li>
  <li>Both writers… however…</li>
  <li>While Source A conveys… Source B suggests…</li>
</ul>
`,
      quiz: [
        {
          id: 'gcse-lr-m7-q1',
          question:
            'How many marks is Paper 2 Question 3 worth?',
          options: ['4 marks', '8 marks', '12 marks', '16 marks'],
          correct: 2,
          explanation:
            'Paper 2 Q3 is worth 12 marks. It requires detailed comparative language analysis across both sources.',
        },
        {
          id: 'gcse-lr-m7-q2',
          question:
            'What is the key difference between Q2 and Q3 on Paper 2?',
          options: [
            'Q2 is about Source A; Q3 is about Source B',
            'Q2 summarises content; Q3 analyses language methods',
            'Q2 is multiple choice; Q3 is extended writing',
            'Q2 is worth more marks than Q3',
          ],
          correct: 1,
          explanation:
            'Q2 asks you to summarise what the sources say (content). Q3 asks you to compare how the writers use language (methods and effects). This is a crucial distinction.',
        },
        {
          id: 'gcse-lr-m7-q3',
          question:
            'What structure should each paragraph in a Q3 response follow?',
          options: [
            'Point about Source A, then point about Source B, no connection',
            'Shared theme, analyse Source A, compare Source B, draw out contrast',
            'Retell Source A, retell Source B, state which is better',
            'List techniques in Source A, list techniques in Source B',
          ],
          correct: 1,
          explanation:
            'Each paragraph should identify a shared theme, analyse one source, then compare the other, drawing out the contrast or similarity throughout.',
        },
        {
          id: 'gcse-lr-m7-q4',
          question:
            'Which response demonstrates effective embedded comparison?',
          options: [
            '"Source A uses metaphor. Source B also uses metaphor."',
            '"Where Source A frames the city as coldly mechanical, Source B instead presents it as chaotically hostile."',
            '"Source A is about a modern city. Source B is about a Victorian city."',
            '"I prefer Source A because it is more descriptive."',
          ],
          correct: 1,
          explanation:
            'This response embeds the comparison by directly contrasting the effects of each writer\'s approach within a single sentence, using "Where… instead" to link them.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // MODULE 8 — Paper 2 Q4: Comparing Viewpoints
    // ──────────────────────────────────────────────
    {
      id: 'gcse-lr-m8',
      title: 'Paper 2 Q4: Comparing Viewpoints',
      duration: '45 mins',
      content: `
<h2>Paper 2 Question 4 — Comparing Writers' Viewpoints and Perspectives</h2>

<p>Question 4 is the most demanding question on Paper 2, worth <strong>16 marks</strong>. You must compare how the two writers convey their <strong>different viewpoints and perspectives</strong> on a shared topic. This requires you to identify what each writer thinks or feels <em>and</em> analyse the methods they use to express those views.</p>

<div class="key-term"><strong>Key Term: Viewpoint</strong> — The writer's attitude, opinion, or perspective on a subject, which may be stated directly or implied through their choice of language, tone, and methods.</div>

<h3>What Makes Q4 Different from Q3?</h3>
<ul>
  <li><strong>Q3</strong> = Compare <em>language</em> (methods and their effects).</li>
  <li><strong>Q4</strong> = Compare <em>viewpoints</em> (what the writers think/feel) AND the methods used to convey them.</li>
</ul>
<p>Q4 is broader. You can discuss language, structure, tone, rhetorical techniques, and the writers' overall attitudes. It demands both <strong>comparison</strong> and <strong>analysis</strong>.</p>

<h3>Source Extracts</h3>
<div class="text-extract"><strong>Source A:</strong> Social media has given every young person a voice. Where previous generations waited for permission to speak — through published letters, public meetings, vetted phone-ins — today's teenagers can broadcast their views to thousands in seconds. This is not narcissism; it is democracy in its purest, most accessible form.<div class="source">Original passage — modern opinion column style</div></div>

<div class="text-extract"><strong>Source B:</strong> I fear that this generation mistakes volume for value. The ease with which any opinion can be published has not elevated public discourse but debased it. When everybody shouts, nobody listens. The great democratisation of speech has produced not a chorus but a cacophony, and the young, intoxicated by the novelty of being heard, have yet to learn that having a platform is not the same as having something to say.<div class="source">Original passage — 20th/21st-century essay style</div></div>

<h3>Structuring Your Response</h3>
<ol>
  <li><strong>Opening</strong> — briefly state the core difference in viewpoints.</li>
  <li><strong>Comparative paragraphs</strong> — each paragraph addresses a shared aspect (e.g. both discuss the value of youth voice) and compares how the writers use methods to convey contrasting views.</li>
  <li><strong>Methods to discuss:</strong> tone, rhetorical questions, direct address, hyperbole, listing, emotive language, sentence structure, counter-argument, analogy.</li>
</ol>

<div class="model-answer"><strong>Model Answer (Grade 8-9):</strong> The two writers hold fundamentally opposing views on youth voice in the digital age. Source A celebrates social media as "democracy in its purest, most accessible form," using the superlative "purest" to frame online expression as an ideal — even utopian — development. The tricolon "published letters, public meetings, vetted phone-ins" catalogues the limitations of previous eras, implying that those barriers were gatekeeping mechanisms that excluded young people. In stark contrast, Source B dismisses digital expression through the antithesis "not a chorus but a cacophony," which suggests that increased participation has produced dissonance rather than harmony. The metaphor of intoxication — "intoxicated by the novelty of being heard" — is particularly loaded, positioning young people as reckless and lacking judgement, which directly counters Source A's respectful framing. Where Source A deliberately rejects the accusation of narcissism ("This is not narcissism"), Source B implicitly endorses it through the cutting assertion that "having a platform is not the same as having something to say." The writers' tones are equally divergent: Source A is celebratory and inclusive, while Source B adopts a weary, authoritative register that positions the writer as a wise elder correcting youthful folly.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always identify both the viewpoint (what the writer thinks) AND the method (how they express it). Stating "Source A thinks social media is good" without analysing the language used to convey this will limit you to Level 2.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Only comparing methods without stating what the viewpoints actually are. You need both: the <em>opinion</em> and the <em>technique</em>. Start each comparative point by making the viewpoint clear, then analyse how it is conveyed.</div>

<h3>Rhetorical Techniques to Look For</h3>
<ul>
  <li><strong>Direct address</strong> — "you" to engage or challenge the reader.</li>
  <li><strong>Rhetorical questions</strong> — to prompt agreement or highlight absurdity.</li>
  <li><strong>Anecdote</strong> — personal stories to build credibility or empathy.</li>
  <li><strong>Counter-argument</strong> — acknowledging the opposing view to appear balanced.</li>
  <li><strong>Hyperbole</strong> — exaggeration for emphasis or persuasion.</li>
  <li><strong>Tone shifts</strong> — moving from humour to seriousness, or calm to anger.</li>
</ul>
`,
      quiz: [
        {
          id: 'gcse-lr-m8-q1',
          question:
            'How many marks is Paper 2 Question 4 worth?',
          options: ['8 marks', '12 marks', '16 marks', '20 marks'],
          correct: 2,
          explanation:
            'Paper 2 Q4 is worth 16 marks. It is the highest-tariff reading question on Paper 2.',
        },
        {
          id: 'gcse-lr-m8-q2',
          question:
            'What must you include in every Q4 paragraph?',
          options: [
            'A quotation from Source A only',
            'Both the writers\' viewpoints and the methods used to convey them',
            'A summary of the historical context',
            'Your personal opinion on the topic',
          ],
          correct: 1,
          explanation:
            'Q4 requires both elements: what the writer thinks (viewpoint) and how they express it (methods). Missing either element will significantly limit your marks.',
        },
        {
          id: 'gcse-lr-m8-q3',
          question:
            'What is the key difference between Paper 2 Q3 and Q4?',
          options: [
            'Q3 is about one source; Q4 is about both',
            'Q3 compares language methods; Q4 compares viewpoints and the methods used to convey them',
            'Q3 is worth more marks than Q4',
            'Q3 requires quotations; Q4 does not',
          ],
          correct: 1,
          explanation:
            'Q3 focuses narrowly on language comparison. Q4 is broader — it asks you to compare the writers\' attitudes and perspectives, analysing a wider range of methods including tone, rhetoric, and structure.',
        },
        {
          id: 'gcse-lr-m8-q4',
          question:
            'Which rhetorical technique involves the writer acknowledging the opposing view?',
          options: [
            'Hyperbole',
            'Anecdote',
            'Counter-argument',
            'Direct address',
          ],
          correct: 2,
          explanation:
            'A counter-argument is when the writer acknowledges the opposing viewpoint before refuting or qualifying it. This technique creates an impression of balance and reasonableness.',
        },
      ],
    },
  ],

  // ──────────────────────────────────────────────
  // ASSESSMENT QUESTIONS (20)
  // ──────────────────────────────────────────────
  assessmentQuestions: [
    {
      id: 'gcse-lr-a1',
      question:
        'Paper 1 Q1 asks you to "list four things." What type of information should you provide?',
      options: [
        'Inferences about character feelings',
        'Explicit, directly stated details from the specified lines',
        'Analytical comments on language techniques',
        'Comparisons with other parts of the text',
      ],
      correct: 1,
      explanation:
        'Q1 tests information retrieval — you must identify explicit, directly stated facts from within the specified line range. No inference or analysis is required.',
    },
    {
      id: 'gcse-lr-a2',
      question:
        'Which analytical framework is most effective for Paper 1 Q2 paragraphs?',
      options: [
        'Summarise, Compare, Evaluate',
        'What, How, Why',
        'Agree, Disagree, Conclude',
        'Describe, Narrate, Persuade',
      ],
      correct: 1,
      explanation:
        'What-How-Why: identify the language feature (What), name the technique (How), and explain its effect on the reader (Why). This ensures you analyse rather than just identify.',
    },
    {
      id: 'gcse-lr-a3',
      question:
        'A student writes: "The writer uses a metaphor and a simile." What is wrong with this response for Q2?',
      options: [
        'It uses incorrect terminology',
        'It identifies techniques without explaining their effects',
        'It includes too much quotation',
        'It discusses structure instead of language',
      ],
      correct: 1,
      explanation:
        'This is "feature spotting" — naming techniques without analysing what they suggest, imply, or make the reader feel. The examiner needs to see the effect of each method explained.',
    },
    {
      id: 'gcse-lr-a4',
      question:
        'Paper 1 Q3 asks about structure. Which of the following is a structural feature?',
      options: [
        'An alliterative phrase',
        'A shift from wide-angle description to close-up on a character',
        'A metaphor comparing the sea to a beast',
        'The use of short, punchy adjectives',
      ],
      correct: 1,
      explanation:
        'A shift in focus — from a wide establishing shot to a close-up — is a structural decision about how the text is organised. The other options are all language features.',
    },
    {
      id: 'gcse-lr-a5',
      question:
        'What does "in medias res" mean?',
      options: [
        'A story told in reverse chronological order',
        'Beginning a narrative in the middle of the action',
        'A circular structure that returns to the opening',
        'A shift from first person to third person narration',
      ],
      correct: 1,
      explanation:
        'In medias res (Latin: "into the middle of things") is an opening technique where the story begins mid-action, immediately engaging the reader by plunging them into events.',
    },
    {
      id: 'gcse-lr-a6',
      question:
        'Paper 1 Q4 is worth 20 marks. What does it require you to do?',
      options: [
        'List information from the source',
        'Analyse language techniques in detail',
        'Evaluate how effectively the writer creates a specific effect',
        'Compare two different source texts',
      ],
      correct: 2,
      explanation:
        'Q4 gives a statement about the text and asks "To what extent do you agree?" You must evaluate the writer\'s methods, judging how effectively they achieve the stated effect.',
    },
    {
      id: 'gcse-lr-a7',
      question:
        'Which phrase demonstrates evaluative writing suitable for Q4?',
      options: [
        '"The writer uses lots of description"',
        '"In the next paragraph, the character goes outside"',
        '"The metaphor powerfully conveys the character\'s desperation because…"',
        '"There are many adjectives in this extract"',
      ],
      correct: 2,
      explanation:
        'The word "powerfully" makes a judgement about effectiveness, and "because" signals that an explanation of the effect follows. This is evaluative writing.',
    },
    {
      id: 'gcse-lr-a8',
      question:
        'On Paper 2 Q1, what happens if a student shades six boxes instead of four?',
      options: [
        'They are marked out of four as normal',
        'They are marked out of two',
        'They automatically score zero',
        'The examiner selects the best four',
      ],
      correct: 1,
      explanation:
        'The penalty system deducts for extra selections: five boxes = marked out of 3, six boxes = marked out of 2, seven boxes = marked out of 1, eight boxes = 0 marks.',
    },
    {
      id: 'gcse-lr-a9',
      question:
        'Paper 2 Q2 asks you to summarise differences between two sources. What should you focus on?',
      options: [
        'The writers\' language techniques in detail',
        'The content — what each source says about the topic',
        'Your personal opinion on which source is better',
        'The historical context of each source',
      ],
      correct: 1,
      explanation:
        'Q2 is a summary question focusing on content — what the sources say. Detailed language analysis belongs in Q3, not Q2.',
    },
    {
      id: 'gcse-lr-a10',
      question:
        'Which connective is most effective for synthesising two sources in Q2?',
      options: [
        '"Furthermore"',
        '"Firstly"',
        '"In contrast to Source A, Source B suggests…"',
        '"In conclusion"',
      ],
      correct: 2,
      explanation:
        '"In contrast to Source A, Source B suggests…" directly links both sources and signals comparison, which is exactly what synthesis requires.',
    },
    {
      id: 'gcse-lr-a11',
      question:
        'What is the critical difference between Paper 2 Q2 and Paper 2 Q3?',
      options: [
        'Q2 covers Source A; Q3 covers Source B',
        'Q2 summarises what sources say; Q3 compares how writers use language',
        'Q2 is worth more marks',
        'Q2 is about viewpoints; Q3 is about structure',
      ],
      correct: 1,
      explanation:
        'Q2 = content (what). Q3 = methods (how). This is the single most important distinction on Paper 2 and confusing the two is a common cause of lost marks.',
    },
    {
      id: 'gcse-lr-a12',
      question:
        'A student writes about Q3: "Source A describes a happy city and Source B describes a sad city." Why would this score poorly?',
      options: [
        'It does not include quotations',
        'It summarises content rather than analysing language methods',
        'It is too short',
        'It does not mention the historical context',
      ],
      correct: 1,
      explanation:
        'Q3 requires analysis of how writers use language — specific techniques, word choices, imagery, and their effects. Simply summarising the mood of each source is a Q2-style response.',
    },
    {
      id: 'gcse-lr-a13',
      question:
        'Paper 2 Q4 asks you to compare viewpoints. What must every paragraph include?',
      options: [
        'A quotation from Source A only',
        'The writers\' viewpoints AND the methods used to convey them',
        'A historical comparison of the two time periods',
        'Your personal agreement or disagreement',
      ],
      correct: 1,
      explanation:
        'Q4 requires both: what the writer thinks (viewpoint) and how they express it (methods). Identifying only the viewpoint or only the method will limit your marks.',
    },
    {
      id: 'gcse-lr-a14',
      question:
        'What is a "counter-argument" in persuasive writing?',
      options: [
        'Repeating your main argument for emphasis',
        'Acknowledging the opposing viewpoint before refuting it',
        'Using emotional language to manipulate the reader',
        'Ending with a rhetorical question',
      ],
      correct: 1,
      explanation:
        'A counter-argument is when the writer acknowledges the other side of the debate before presenting reasons why their own position is stronger. It creates an impression of fairness.',
    },
    {
      id: 'gcse-lr-a15',
      question:
        'Which of the following is the correct mark allocation for Paper 1 reading questions?',
      options: [
        'Q1: 4, Q2: 8, Q3: 8, Q4: 20',
        'Q1: 8, Q2: 8, Q3: 12, Q4: 12',
        'Q1: 4, Q2: 12, Q3: 12, Q4: 12',
        'Q1: 4, Q2: 8, Q3: 12, Q4: 16',
      ],
      correct: 0,
      explanation:
        'AQA Paper 1 reading marks: Q1 = 4, Q2 = 8, Q3 = 8, Q4 = 20, totalling 40 marks for the reading section.',
    },
    {
      id: 'gcse-lr-a16',
      question:
        'What does the term "semantic field" mean?',
      options: [
        'A technique where sentences gradually get longer',
        'A group of words from the same topic or theme area',
        'The literal meaning of a word',
        'A paragraph that focuses on one specific sense',
      ],
      correct: 1,
      explanation:
        'A semantic field is a group of words related to the same theme — for example, "shadow," "darkness," "gloom," and "night" all belong to a semantic field of darkness.',
    },
    {
      id: 'gcse-lr-a17',
      question:
        'When answering Paper 1 Q3 about structure, a student analyses a metaphor in detail. What feedback would the examiner give?',
      options: [
        '"Excellent — detailed language analysis"',
        '"Off-task — Q3 is about structure, not language"',
        '"Good, but needs more quotations"',
        '"Correct approach, but needs evaluative vocabulary"',
      ],
      correct: 1,
      explanation:
        'Q3 specifically asks about structure — how the text is arranged and organised. Analysing a metaphor is a language comment and would not be credited as a structural point.',
    },
    {
      id: 'gcse-lr-a18',
      question:
        'Which is the correct mark allocation for Paper 2 reading questions?',
      options: [
        'Q1: 4, Q2: 8, Q3: 8, Q4: 20',
        'Q1: 4, Q2: 8, Q3: 12, Q4: 16',
        'Q1: 4, Q2: 12, Q3: 12, Q4: 12',
        'Q1: 8, Q2: 8, Q3: 8, Q4: 16',
      ],
      correct: 1,
      explanation:
        'AQA Paper 2 reading marks: Q1 = 4, Q2 = 8, Q3 = 12, Q4 = 16, totalling 40 marks for the reading section.',
    },
    {
      id: 'gcse-lr-a19',
      question:
        'A student\'s Q4 response only discusses what the writers think without analysing any techniques. What level would this likely achieve?',
      options: [
        'Level 4 (top band)',
        'Level 3 (clear and relevant)',
        'Level 2 (some awareness)',
        'Level 1 (simple, limited)',
      ],
      correct: 2,
      explanation:
        'Identifying viewpoints without analysing methods shows "some awareness" but lacks the detailed analytical comparison needed for Level 3 or 4. Both viewpoints and methods are essential.',
    },
    {
      id: 'gcse-lr-a20',
      question:
        'Across both papers, which skill is tested by the highest number of total marks?',
      options: [
        'Information retrieval',
        'Summary and synthesis',
        'Language analysis',
        'Evaluation and comparison of viewpoints',
      ],
      correct: 3,
      explanation:
        'Evaluation (Paper 1 Q4: 20 marks) and comparing viewpoints (Paper 2 Q4: 16 marks) together account for 36 marks — more than any other skill area. These high-tariff questions should be your top revision priority.',
    },
  ],
};

export default gcseLangReading;
