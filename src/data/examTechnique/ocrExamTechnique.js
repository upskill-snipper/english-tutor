// OCR Exam Technique Masterclass — Component 01 & Component 02
// Covers Language (J351) and Literature (J352) exam skills

const ocrExamTechnique = {
  id: 'exam-technique-ocr',
  title: 'OCR Exam Technique Masterclass',
  subtitle: 'Component 01 & Component 02',
  tier: 'GCSE',
  board: 'OCR',
  specCode: 'J351/J352',
  price: 0,
  duration: '3 hours',
  level: 'All levels',
  description: 'Master the exact skills OCR examiners reward across Language and Literature components.',
  color: 'from-purple-600 to-purple-800',
  moduleList: [
    {
      id: 'ocr-et-m1',
      title: 'Component 01 Q3: Synthesis Across Two Sources',
      duration: '20 min',
      content: `<h2>Component 01 Q3: Synthesis - Combining Information from Two Sources</h2>
<p>Question 3 on OCR Component 01 (Communicating Information and Ideas) is a <strong>synthesis question worth 12 marks</strong>. It asks you to combine information and ideas from both texts provided on the paper - the 19th-century non-fiction source and the 20th/21st-century non-fiction source. This is an OCR-specific skill that differs from other boards: OCR wants you to <strong>draw together relevant material from both sources</strong> and present a coherent, unified response that addresses the question focus.</p>

<div class="key-term"><strong>Key Term: Synthesis</strong> - The process of selecting, combining, and organising information from two or more sources into a single, cohesive response. Unlike comparison, synthesis does not require you to analyse differences in method - it focuses on gathering and connecting relevant content.</div>

<h3>What the OCR Examiner Expects</h3>
<p>The OCR mark scheme for Q3 rewards students who demonstrate three core abilities:</p>
<ul>
<li><strong>Selection:</strong> Choose relevant and precise details from both texts that directly address the question. Do not copy large chunks - pick specific, telling details.</li>
<li><strong>Integration:</strong> Weave material from both sources together rather than treating them as separate blocks. The strongest responses move fluidly between texts.</li>
<li><strong>Inference:</strong> Go beyond surface-level repetition of facts. Show that you can read between the lines and draw out implicit meanings from the information provided.</li>
</ul>

<div class="text-extract">"Using details from both sources, explain what you learn about the challenges faced by travellers in unfamiliar environments."<div class="source">Example Q3 in the style of OCR Component 01</div></div>

<h3>The OCR Synthesis Framework: SELECT - CONNECT - INFER</h3>
<p>Use this three-step approach for every synthesis paragraph:</p>
<ol>
<li><strong>SELECT</strong> a relevant detail from one source. Embed a brief reference or quotation that directly addresses the question focus. For example: "Source A reveals that 19th-century explorers relied on local guides who 'knew every treacherous pass.'"</li>
<li><strong>CONNECT</strong> to the other source by finding a related detail. Use connective phrases such as "Similarly," "In contrast," "Source B reinforces this by," or "This is echoed in the modern text, where." For example: "Source B similarly highlights dependence on local knowledge, noting that modern hikers consult community-led trail apps."</li>
<li><strong>INFER</strong> what the combined information reveals about the question topic. This is where you show understanding beyond the literal. For example: "Together, these details suggest that regardless of the era, navigating unfamiliar terrain requires trusting those with direct experience of the landscape."</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> OCR examiners specifically look for balance across both sources. A response that draws heavily on one text and barely mentions the other will be capped at the lower bands. Aim for at least three well-developed synthesis points, each drawing on both sources. This typically means six or more textual references in total.</div>

<h3>Common Pitfalls on OCR Q3</h3>
<p>Students frequently lose marks on this question by falling into predictable traps:</p>
<ul>
<li><strong>Retelling instead of synthesising:</strong> Simply summarising each text separately does not constitute synthesis. You must show how the information from both sources connects or contrasts.</li>
<li><strong>Analysing language:</strong> Q3 is not a language analysis question. Avoid writing about metaphors, similes, or tone here - save those skills for Q4. The examiner wants content and ideas.</li>
<li><strong>Ignoring the question focus:</strong> Every detail you include must be relevant to the specific question asked. A general summary of both texts will not score highly.</li>
<li><strong>Imbalanced coverage:</strong> Using five references from one source and only one from the other signals weak synthesis. Discipline yourself to alternate between sources.</li>
</ul>

<div class="model-answer"><strong>Model Response (Extract):</strong> From Source A, the 19th-century traveller describes the disorientation of arriving in a city where "not a single sign bore letters I could decipher," suggesting that language barriers created an immediate sense of isolation. Source B reinforces this challenge from a modern perspective, explaining that even with translation apps, the writer felt "perpetually one step behind the conversation." Together, these accounts reveal that the fundamental challenge of communication in unfamiliar places persists across centuries - technology has reduced but not eliminated the alienation that comes from being unable to understand those around you.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing "Source A says... Source B says..." as two separate paragraphs with no connection between them. This is summary, not synthesis. You must explicitly link the information, showing what the combined details reveal about the topic.</div>`,
      quiz: [
        { id: 'ocr-et-m1-q1', question: 'How many marks is Q3 on OCR Component 01 worth?', options: ['6 marks', '8 marks', '12 marks', '18 marks'], answer: 2, explanation: 'Q3 on Component 01 is worth 12 marks. It is a synthesis question requiring you to combine information from both sources.' },
        { id: 'ocr-et-m1-q2', question: 'What does OCR mean by "synthesis" in Q3?', options: ['Analysing language techniques across two texts', 'Combining information from two sources into a unified response', 'Comparing the writers\' opinions on a topic', 'Evaluating the effectiveness of both texts'], answer: 1, explanation: 'Synthesis means selecting, combining, and organising information from both sources into a single, coherent response - not analysing techniques or comparing methods.' },
        { id: 'ocr-et-m1-q3', question: 'Which approach should you avoid on OCR Q3?', options: ['Embedding quotations from both texts', 'Drawing inferences from the combined information', 'Analysing the writer\'s use of metaphor and imagery', 'Balancing references across both sources equally'], answer: 2, explanation: 'Q3 is not a language analysis question. Analysing metaphors and imagery should be saved for Q4. Q3 focuses on content and ideas from both sources.' },
        { id: 'ocr-et-m1-q4', question: 'What is the SELECT-CONNECT-INFER framework?', options: ['A method for planning creative writing', 'A three-step synthesis approach: pick a detail, link to the other source, draw out meaning', 'A way to structure comparative essays', 'A technique for memorising quotations'], answer: 1, explanation: 'SELECT a relevant detail from one source, CONNECT it to a related detail from the other source, and INFER what the combined information reveals about the question topic.' },
      ],
    },
    {
      id: 'ocr-et-m2',
      title: 'Component 01 Q4: Evaluation of Writer\'s Methods',
      duration: '20 min',
      content: `<h2>Component 01 Q4: Evaluating How Writers Achieve Effects</h2>
<p>Question 4 is the <strong>highest-value reading question on Component 01</strong>, worth <strong>18 marks</strong>. It is an evaluative comparison question that asks you to assess how both writers use language and/or structure to achieve their purposes. This is where OCR tests your critical response skills - your ability to judge how effectively writers communicate their ideas and influence the reader. Unlike Q3, which focuses on content, Q4 demands close attention to <strong>method</strong>: the techniques writers choose and the effects those techniques create.</p>

<div class="key-term"><strong>Key Term: Evaluation</strong> - Making a judgement about the effectiveness of a writer's choices. This goes beyond identification ("the writer uses a metaphor") to assessment ("the metaphor is particularly effective because..."). OCR rewards responses that show genuine critical thinking, not just technique-spotting.</div>

<h3>The OCR Q4 Structure</h3>
<p>The question will typically present a statement or viewpoint and ask you to evaluate how far you agree by examining both texts. For example:</p>
<div class="text-extract">"Both writers attempt to persuade the reader to share their viewpoint on urban development. Evaluate how successfully each writer achieves this."<div class="source">Example Q4 in the style of OCR Component 01</div></div>

<h3>Building an Evaluative Response: The JUDGE Framework</h3>
<p>For each analytical paragraph, follow this pattern:</p>
<ul>
<li><strong>J - Judgement:</strong> Open with a clear evaluative statement. For example: "Writer A is particularly effective in conveying the urgency of the situation through their lexical choices."</li>
<li><strong>U - Use of evidence:</strong> Embed a precise quotation that supports your judgement. Select words or phrases that you can analyse in detail.</li>
<li><strong>D - Deconstruct the technique:</strong> Identify the specific method and explain how it works. Name the technique (emotive language, tricolon, direct address) and show how it creates meaning.</li>
<li><strong>G - Gauge the effect:</strong> Explain the impact on the reader. What does the reader think, feel, or understand as a result? Be specific - avoid vague phrases like "it makes the reader want to read on."</li>
<li><strong>E - Evaluate success:</strong> Return to your opening judgement and reinforce or refine it. How successfully does this technique serve the writer's overall purpose?</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> OCR examiners report that the difference between Band 4 and Band 5 (the top band) responses is the quality of evaluation. Band 4 students analyse well but stop short of making sustained judgements. Band 5 students thread evaluation throughout every paragraph - their response reads as a critical assessment, not a list of techniques.</div>

<h3>Comparing Across Both Texts</h3>
<p>Q4 requires you to address both texts, and the strongest responses draw explicit comparisons:</p>
<ul>
<li>Compare how both writers approach the same topic using different methods</li>
<li>Evaluate which writer is more effective at a particular aspect and explain why</li>
<li>Note how context influences each writer's choices - the 19th-century writer may rely on formal rhetoric while the modern writer uses informal, conversational techniques</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about both texts separately without any comparison. OCR Q4 rewards integrated responses. After analysing a technique in Text 1, immediately connect to a related technique in Text 2. Phrases like "While Writer A relies on... Writer B instead chooses to..." signal to the examiner that you are comparing, not just listing.</div>

<h3>Vocabulary for Evaluation</h3>
<p>Strengthen your evaluative voice with precise language:</p>
<ul>
<li>"Compellingly conveys..." / "Less effectively communicates..."</li>
<li>"This is a particularly shrewd choice because..."</li>
<li>"The writer's strategy here is successful insofar as..."</li>
<li>"While technically accomplished, this approach may alienate readers who..."</li>
<li>"The cumulative effect of these choices is to..."</li>
</ul>

<div class="model-answer"><strong>Model Paragraph:</strong> Writer A compellingly conveys the devastation of the flood through the extended metaphor of the town as "a corpse laid out for viewing, pale and still." The comparison to a dead body transforms the damaged buildings into something deeply personal and human, forcing the reader to feel grief rather than mere sympathy. The word "viewing" specifically evokes a funeral parlour, suggesting the community has gathered not to repair but to mourn. Writer B, by contrast, adopts a more restrained approach, using factual enumeration - "fourteen homes, three schools, one church" - to convey scale through accumulation rather than emotion. Both strategies are effective, but Writer A's metaphorical approach creates a more visceral, immediate response, while Writer B's measured listing builds a quieter, more devastating sense of loss through sheer quantity.</div>`,
      quiz: [
        { id: 'ocr-et-m2-q1', question: 'How many marks is Q4 worth on Component 01?', options: ['8 marks', '12 marks', '16 marks', '18 marks'], answer: 3, explanation: 'Q4 is worth 18 marks, making it the highest-value reading question on Component 01. It tests evaluation and comparative analysis across both texts.' },
        { id: 'ocr-et-m2-q2', question: 'What is the key difference between Q3 and Q4 on Component 01?', options: ['Q3 is about the 19th-century text; Q4 is about the modern text', 'Q3 focuses on content and information; Q4 focuses on methods and evaluation', 'Q3 is worth more marks than Q4', 'Q3 requires quotations; Q4 does not'], answer: 1, explanation: 'Q3 is a synthesis question about content from both sources. Q4 is an evaluative question about how writers use methods to achieve effects - it demands critical judgement, not just information gathering.' },
        { id: 'ocr-et-m2-q3', question: 'What separates a Band 5 response from a Band 4 response on Q4?', options: ['Using more quotations', 'Writing longer paragraphs', 'Threading sustained evaluation and judgement throughout', 'Identifying more techniques by name'], answer: 2, explanation: 'OCR examiners report that Band 5 responses sustain evaluation throughout every paragraph, making critical judgements rather than simply identifying and analysing techniques.' },
        { id: 'ocr-et-m2-q4', question: 'What does the "E" stand for in the JUDGE framework?', options: ['Evidence', 'Example', 'Evaluate success', 'Explain context'], answer: 2, explanation: 'The E in JUDGE stands for Evaluate success - returning to your opening judgement to reinforce or refine your assessment of how effectively the technique serves the writer\'s purpose.' },
        { id: 'ocr-et-m2-q5', question: 'Why should you compare techniques across both texts in Q4?', options: ['Because Q4 only gives marks for comparison', 'Because OCR rewards integrated responses that draw explicit connections between writers\' methods', 'Because you must decide which text is better', 'Because the mark scheme requires exactly three comparisons'], answer: 1, explanation: 'OCR Q4 rewards integrated responses. Explicitly comparing how both writers approach the topic using different methods demonstrates the critical thinking examiners look for at the highest bands.' },
      ],
    },
    {
      id: 'ocr-et-m3',
      title: 'Component 02 Q3: Language and Structure Analysis (Fiction)',
      duration: '20 min',
      content: `<h2>Component 02 Q3: Analysing Language and Structure in Fiction</h2>
<p>Component 02 (Fiction and Imaginative Writing) presents you with an <strong>unseen fiction extract</strong>, and Question 3 is the centrepiece reading question, worth <strong>24 marks</strong>. This is the single highest-value reading question across both Language components. It asks you to analyse how the writer uses language and structure to create meaning and effect. The assessment objective in play is <strong>AO2</strong>: explain, comment on, and analyse how writers use language and structure to achieve effects and influence readers.</p>

<div class="key-term"><strong>Key Term: AO2</strong> - "Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology to support your views." This is the dominant assessment objective for Component 02 Q3 - every mark depends on your ability to move beyond identification to analysis of effect.</div>

<h3>Language Analysis: Going Beyond the Obvious</h3>
<p>OCR examiners consistently reward students who analyse language at word level. This means zooming in on individual words within a quotation and explaining precisely why the writer chose that word over alternatives:</p>
<ul>
<li><strong>Connotation:</strong> What associations does the word carry? A character described as "slithering" through a crowd carries connotations of snakes - deception, danger, cold-bloodedness.</li>
<li><strong>Sound:</strong> Consider plosive, sibilant, or fricative sounds. "The boots battered the broken boards" uses plosive B sounds to create a harsh, aggressive rhythm.</li>
<li><strong>Register shift:</strong> When the writer suddenly changes from formal to informal language (or vice versa), this signals a shift in tone, mood, or character attitude.</li>
<li><strong>Semantic fields:</strong> Groups of words relating to the same theme. A passage describing a relationship using words like "contract," "debt," "interest," and "bankrupt" draws on the semantic field of finance, suggesting the relationship is transactional.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> OCR marks language and structure together on this question, so you must address both. A response that only discusses language - however brilliantly - is limiting itself. Aim for at least two paragraphs focused on structural choices alongside your language analysis.</div>

<h3>Structure Analysis: The OCR Approach</h3>
<p>Structure refers to how the writer organises and sequences the text to shape the reader's experience. OCR-specific structural features to analyse include:</p>
<ul>
<li><strong>Narrative perspective:</strong> First person creates intimacy; third person allows omniscience. Consider how shifts in perspective affect the reader's relationship with events.</li>
<li><strong>Opening and closing:</strong> How does the extract begin and end? Does it open in medias res (in the middle of action)? Does it end on a cliffhanger, a revelation, or a moment of reflection?</li>
<li><strong>Pacing:</strong> Short sentences and paragraphs accelerate pace during tense moments. Long, complex sentences slow the narrative during descriptive or reflective passages. Analyse how the writer manipulates pace to control the reader's emotional response.</li>
<li><strong>Focus shifts:</strong> The writer may zoom in from a wide setting to a close-up detail, or shift from external action to internal thought. These shifts direct the reader's attention deliberately.</li>
<li><strong>Chronology:</strong> Flashbacks, foreshadowing, and non-linear timelines create suspense, dramatic irony, or emotional depth.</li>
</ul>

<h3>The WHAT-HOW-WHY-SO Approach for OCR</h3>
<p>Each analytical paragraph should follow this extended pattern:</p>
<ol>
<li><strong>WHAT:</strong> Identify the technique precisely. "The writer uses a simile comparing the house to a tomb."</li>
<li><strong>HOW:</strong> Embed your quotation and show how the technique works at word level. "The phrase 'the house sat like a sealed tomb' creates a comparison between the domestic space and a place of death."</li>
<li><strong>WHY:</strong> Explain the effect on the reader. "The word 'sealed' implies that nothing can enter or escape, evoking a sense of suffocating entrapment."</li>
<li><strong>SO:</strong> Connect to the bigger picture. "This contributes to the writer's broader portrayal of the house as a place where the protagonist's freedom has been buried, reinforcing the theme of domestic imprisonment."</li>
</ol>

<div class="model-answer"><strong>Model Paragraph:</strong> The writer structures the opening to create a disorienting sense of confusion that mirrors the protagonist's state of mind. The extract begins in medias res with the fragmented sentence "Running. Just running." The absence of context - no setting, no explanation - forces the reader into the character's panicked consciousness, experiencing the same lack of clarity. The repetition of "running" with the qualifier "just" strips the action down to its most basic, desperate form, suggesting the character is acting on pure instinct rather than rational thought. Structurally, this abrupt opening contrasts sharply with the measured, descriptive paragraph that follows, where the writer slows the pace to reveal the setting "a corridor of grey lockers stretching into shadow." This shift from frantic action to controlled description creates a push-pull rhythm that keeps the reader suspended between urgency and unease.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Feature-spotting without analysis. Writing "the writer uses alliteration" or "there is a metaphor in line 4" without explaining the effect earns very few marks. Every technique you identify must be followed by detailed analysis of its impact on the reader and its contribution to the writer's purpose.</div>`,
      quiz: [
        { id: 'ocr-et-m3-q1', question: 'How many marks is Q3 on Component 02 worth?', options: ['12 marks', '18 marks', '24 marks', '30 marks'], answer: 2, explanation: 'Q3 on Component 02 is worth 24 marks - the single highest-value reading question across both OCR Language components.' },
        { id: 'ocr-et-m3-q2', question: 'Which assessment objective does Component 02 Q3 primarily test?', options: ['AO1 - Identifying information', 'AO2 - Language and structure analysis', 'AO3 - Comparison across texts', 'AO4 - Spelling and grammar'], answer: 1, explanation: 'AO2 is the dominant assessment objective for Q3: explain, comment on, and analyse how writers use language and structure to achieve effects and influence readers.' },
        { id: 'ocr-et-m3-q3', question: 'What does the "SO" step add to WHAT-HOW-WHY analysis?', options: ['A summary of the paragraph', 'A connection to the bigger picture and the writer\'s broader purpose', 'A quotation from the text', 'A comparison with another technique'], answer: 1, explanation: 'The "SO" step connects your analysis to the writer\'s broader purpose or theme, showing the examiner that you understand how individual techniques contribute to the overall meaning of the text.' },
        { id: 'ocr-et-m3-q4', question: 'Why must you include structural analysis alongside language analysis?', options: ['Because structure is worth more marks than language', 'Because OCR marks language and structure together on this question', 'Because you cannot discuss language without discussing structure', 'Because structural analysis is easier than language analysis'], answer: 1, explanation: 'OCR marks language and structure together on Q3. A response that only discusses language - however brilliantly - is limiting itself and cannot access the full range of marks.' },
        { id: 'ocr-et-m3-q5', question: 'What is "feature-spotting" and why should you avoid it?', options: ['Identifying too many techniques - you should only use one per paragraph', 'Naming techniques without analysing their effect on the reader', 'Spotting features in the wrong part of the text', 'Using incorrect terminology for techniques'], answer: 1, explanation: 'Feature-spotting means identifying techniques (e.g., "the writer uses alliteration") without explaining the effect. Every technique must be followed by detailed analysis of its impact.' },
      ],
    },
    {
      id: 'ocr-et-m4',
      title: 'Literature: The OCR Comparative Essay',
      duration: '20 min',
      content: `<h2>OCR Literature: Mastering the Comparative Essay</h2>
<p>OCR English Literature (J352) places <strong>comparison at the heart of every essay</strong>. Whether you are writing about poetry, prose, or drama, the OCR approach demands that you analyse two texts side by side, drawing out connections and contrasts in themes, methods, and contexts. The comparative essay is not an add-on or extension task - it is the fundamental structure that OCR examiners expect. Understanding how to build a genuinely comparative response is the single most important skill for OCR Literature success.</p>

<div class="key-term"><strong>Key Term: Comparative Analysis</strong> - Examining two texts together to explore similarities and differences in their themes, writers' methods, and contextual influences. OCR requires sustained comparison throughout the essay, not a bolt-on paragraph at the end.</div>

<h3>The OCR Comparative Structure</h3>
<p>OCR examiners consistently reward essays that integrate comparison from the very first paragraph. The following structure ensures comparison is embedded throughout:</p>

<h4>Opening: Establish the Comparative Framework</h4>
<p>Your introduction should immediately signal that you are comparing. State the key similarity or difference that your essay will explore. For example: "Both Shelley in 'Ozymandias' and Browning in 'My Last Duchess' explore the corrupting influence of power, but while Shelley presents power as ultimately futile, Browning reveals it as a tool for ongoing domestic control."</p>

<h4>Body Paragraphs: The Integrated Approach</h4>
<p>Each paragraph should discuss both texts, structured around a shared theme or technique:</p>
<ol>
<li><strong>Comparative topic sentence:</strong> Introduce the point of comparison. "Both writers use imagery of possession to convey the theme of control, though their approaches differ significantly."</li>
<li><strong>Text A analysis:</strong> Analyse a quotation from the first text with detailed attention to method and effect.</li>
<li><strong>Pivot to Text B:</strong> Use a comparative connective ("Similarly," "In contrast," "While Text A..., Text B...") and analyse a quotation from the second text.</li>
<li><strong>Evaluative comparison:</strong> Assess the significance of the similarity or difference. What does it reveal about each writer's message, purpose, or context?</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> OCR examiners describe the best essays as "genuinely comparative" - meaning the student is thinking about both texts simultaneously, not writing about one and then the other. The alternating structure (Text A paragraph, then Text B paragraph) will cap your marks. You must discuss both texts within the same paragraph to reach the top bands.</div>

<h3>Linking Texts Through Context</h3>
<p>AO3 (context) is assessed in OCR Literature, and comparison provides a natural vehicle for contextual discussion. Consider how the historical, social, or literary context of each text influences the writer's approach:</p>
<ul>
<li><strong>Historical context:</strong> A Victorian writer's treatment of gender roles compared to a contemporary poet's approach reveals changing social attitudes.</li>
<li><strong>Literary context:</strong> A Romantic poet's use of nature imagery serves a different purpose from a War poet's use of the same imagery.</li>
<li><strong>Biographical context:</strong> How each writer's personal experience shapes their perspective on the shared theme.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Bolting context onto the end of a paragraph as an afterthought. "This was written during the Victorian era" adds nothing unless you explain how Victorian values directly influenced the writer's choices. Context should illuminate the text, not decorate the essay.</div>

<h3>Comparative Connectives for OCR Essays</h3>
<p>Build a repertoire of comparative phrases that go beyond "similarly" and "however":</p>
<ul>
<li>"While [Writer A] foregrounds... [Writer B] instead privileges..."</li>
<li>"Both writers converge in their treatment of... yet diverge sharply in..."</li>
<li>"Where [Writer A] employs [technique] to suggest... [Writer B] achieves a comparable effect through..."</li>
<li>"This mirrors [Writer B]'s approach, though the underlying motivation differs fundamentally..."</li>
<li>"The contrast between [Writer A]'s [method] and [Writer B]'s [method] reveals..."</li>
</ul>

<h3>Planning a Comparative Essay Under Timed Conditions</h3>
<p>Spend <strong>5 minutes planning</strong> before you write. Use a quick comparison grid:</p>
<ul>
<li>Draw a table with the theme/question focus across the top</li>
<li>List 3-4 key points of comparison down the side</li>
<li>For each point, note a quotation from each text and whether the comparison is a similarity, difference, or both</li>
<li>Decide the order of your paragraphs - lead with your strongest comparative point</li>
</ul>

<div class="model-answer"><strong>Model Paragraph:</strong> Both Hardy in 'Neutral Tones' and Jennings in 'One Flesh' explore relationships defined by emotional distance, yet their structural choices reflect fundamentally different stages of disconnection. Hardy's cyclical structure - opening and closing at "a pond edged with greyish leaves" - traps the speaker in an inescapable memory, suggesting that the emotional damage of a failed relationship is permanent and recurring. Jennings, by contrast, uses the progressive structure of her three stanzas to chart a gradual process of separation: the couple moves from "lying apart" to being described as "strangely close" yet "apart," suggesting a slow erosion rather than a single devastating moment. The difference is revealing: Hardy presents emotional distance as a wound inflicted at a specific moment, while Jennings portrays it as an accumulation of years, making it at once less dramatic and more quietly devastating.</div>`,
      quiz: [
        { id: 'ocr-et-m4-q1', question: 'How should body paragraphs be structured in an OCR comparative essay?', options: ['One paragraph per text, then a comparison paragraph at the end', 'Both texts discussed within each paragraph, structured around shared themes', 'Only discuss the stronger text in detail, with brief references to the other', 'Alternate between texts every other paragraph'], answer: 1, explanation: 'OCR examiners reward integrated comparison. Both texts should be discussed within each paragraph, structured around a shared theme or technique, not treated separately.' },
        { id: 'ocr-et-m4-q2', question: 'What is the role of context (AO3) in an OCR comparative essay?', options: ['It should be a separate paragraph at the end of the essay', 'It should illuminate the text by explaining how context influenced the writer\'s choices', 'It is not assessed in OCR Literature', 'It should be the main focus of every paragraph'], answer: 1, explanation: 'Context should illuminate the text by explaining how historical, social, or literary context directly influenced the writer\'s choices. It should be woven into analysis, not bolted on as an afterthought.' },
        { id: 'ocr-et-m4-q3', question: 'Why does the alternating structure (Text A paragraph then Text B paragraph) limit your marks?', options: ['Because it takes too much time', 'Because it prevents genuine comparison within paragraphs, which OCR requires for top bands', 'Because OCR only allows three paragraphs per essay', 'Because the examiner cannot follow alternating structures'], answer: 1, explanation: 'OCR examiners describe the best essays as "genuinely comparative." The alternating structure treats texts separately rather than comparing them simultaneously, which caps your marks below the top bands.' },
        { id: 'ocr-et-m4-q4', question: 'How long should you spend planning a comparative essay under timed conditions?', options: ['No planning - start writing immediately', '2 minutes', '5 minutes', '15 minutes'], answer: 2, explanation: 'Spend 5 minutes planning using a comparison grid. This ensures your essay is structured around clear points of comparison with quotations from both texts, leading to a more coherent and higher-scoring response.' },
      ],
    },
    {
      id: 'ocr-et-m5',
      title: 'Unseen Poetry: Systematic Analysis for OCR',
      duration: '20 min',
      content: `<h2>Unseen Poetry: A Systematic Approach for OCR</h2>
<p>The unseen poetry component of OCR English Literature requires you to analyse a poem you have never seen before under timed exam conditions. This is the question that causes the most anxiety among students, but it is also the question where a <strong>systematic approach</strong> yields the biggest gains. Unlike set text questions where you can rely on memorised quotations and pre-prepared analysis, unseen poetry rewards the student who has a reliable, repeatable method for unlocking any poem. OCR typically asks you to explore how the poet presents a theme, idea, or feeling - and the key to success is knowing exactly where to look and in what order.</p>

<div class="key-term"><strong>Key Term: Unseen Poetry</strong> - A poem you encounter for the first time in the exam. You cannot prepare specific content, but you can prepare a systematic method of analysis that works for any poem. OCR assesses your ability to analyse language, structure, and form (AO2) alongside your personal interpretation (AO1).</div>

<h3>The Five-Step Reading Method</h3>
<p>Before you write a single word of your response, read the poem using this structured approach:</p>
<ol>
<li><strong>First read - The big picture:</strong> Read the poem through once without stopping. Ask: What is happening? Who is speaking? What is the tone or mood? Do not worry about individual words yet - capture the overall impression.</li>
<li><strong>Second read - Mark the shifts:</strong> Read again and note where the poem changes. Look for shifts in tone, focus, time, or perspective. These shifts are structurally significant and often hold the key to the poem's meaning.</li>
<li><strong>Third read - Zoom in on language:</strong> Now examine specific words and phrases. Circle or underline striking imagery, unusual word choices, and patterns of language (repetition, semantic fields, contrasts).</li>
<li><strong>Note the form:</strong> Consider the poem's shape on the page. Is it in regular stanzas or free verse? Are there rhymes or a specific metre? Does the form reinforce or contrast with the content?</li>
<li><strong>Formulate your interpretation:</strong> Before writing, decide on your reading of the poem. What is the poet's message or central idea? Your response should be anchored by a clear interpretation, not a random collection of observations.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> OCR examiners value a coherent personal response over exhaustive coverage. A focused essay that analyses six well-chosen details in depth will outscore a scattered response that mentions twenty features superficially. Quality of analysis always trumps quantity of observations.</div>

<h3>What to Analyse: The OCR Priority List</h3>
<p>When time is limited, focus your analysis on these elements in order of importance:</p>
<ul>
<li><strong>Imagery and figurative language:</strong> Metaphors, similes, personification. These are almost always present and offer the richest material for analysis. What picture does the poet create, and what does it suggest beyond the literal?</li>
<li><strong>Word choice (diction):</strong> Individual words that carry strong connotations, unusual or unexpected vocabulary, and words with multiple meanings. Zoom in to word level for the most detailed analysis.</li>
<li><strong>Structure and form:</strong> Stanza breaks, line lengths, enjambment, caesura, the poem's opening and closing. How does the poet organise the poem to shape the reader's experience?</li>
<li><strong>Sound and rhythm:</strong> Rhyme scheme, metre, alliteration, assonance. How do the sounds of the poem contribute to its tone and meaning?</li>
<li><strong>Voice and tone:</strong> Who is speaking? What is their attitude? Does the tone shift? A change in tone is often the most important structural feature of a poem.</li>
</ul>

<h3>Structuring Your Unseen Poetry Response</h3>
<p>Use this framework to organise your answer:</p>
<ul>
<li><strong>Opening sentence:</strong> State your interpretation of the poem's central theme or idea, linking it to the question. "The poet presents grief as a physical, tangible force that reshapes the speaker's entire perception of the world."</li>
<li><strong>Paragraph 1:</strong> Analyse the poem's opening - how does the poet establish tone, setting, or situation? What methods are used?</li>
<li><strong>Paragraph 2:</strong> Analyse a key moment of development or shift in the poem. How does the poem progress from its opening?</li>
<li><strong>Paragraph 3:</strong> Analyse the poem's conclusion or climax. How does the ending resolve, complicate, or transform the ideas established earlier?</li>
<li><strong>Throughout:</strong> Ensure every point connects back to the question focus and your overarching interpretation.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Working through the poem line by line from start to finish. This produces a narrative commentary ("In line 1 the poet says... In line 2...") rather than an analytical essay. Organise your response around themes, techniques, or structural movements instead.</div>

<div class="model-answer"><strong>Model Opening:</strong> The poet presents isolation not as an absence but as a presence - a heavy, tangible force that fills every space the speaker inhabits. The opening image of "the room thick with the weight of nothing" immediately establishes this paradox: emptiness itself has become oppressive. The oxymoronic phrase "weight of nothing" encapsulates the central tension of the poem, suggesting that loneliness is not about what is missing but about the overwhelming awareness of that absence. The sibilant sounds in "silence settled like a second skin" reinforce the sense of isolation as something that has physically attached itself to the speaker, becoming inseparable from their identity.</div>`,
      quiz: [
        { id: 'ocr-et-m5-q1', question: 'How many times should you read the poem before writing?', options: ['Once - to save time for writing', 'Twice - a quick read then a detailed read', 'Three times minimum - big picture, shifts, then language detail', 'Five times - once for each analytical technique'], answer: 2, explanation: 'The five-step method recommends at least three focused reads: first for the big picture, second to mark shifts, and third to zoom in on language. Steps 4 and 5 (form and interpretation) happen during or after these reads.' },
        { id: 'ocr-et-m5-q2', question: 'What should you avoid when structuring an unseen poetry response?', options: ['Analysing imagery and figurative language', 'Working through the poem line by line from start to finish', 'Stating your interpretation in the opening sentence', 'Discussing the poem\'s structure and form'], answer: 1, explanation: 'Working line by line produces a narrative commentary rather than an analytical essay. Organise your response around themes, techniques, or structural movements instead.' },
        { id: 'ocr-et-m5-q3', question: 'According to OCR examiners, what is more important in unseen poetry?', options: ['Mentioning as many techniques as possible', 'Writing at least five paragraphs', 'Quality of analysis over quantity of observations', 'Using specialist terminology in every sentence'], answer: 2, explanation: 'OCR examiners value a coherent personal response over exhaustive coverage. Analysing six details in depth will outscore a scattered response mentioning twenty features superficially.' },
        { id: 'ocr-et-m5-q4', question: 'What is the first element on the OCR priority list for analysis?', options: ['Rhyme scheme and metre', 'Voice and tone', 'Imagery and figurative language', 'Structure and form'], answer: 2, explanation: 'Imagery and figurative language are the top priority. Metaphors, similes, and personification are almost always present and offer the richest material for detailed analysis.' },
      ],
    },
    {
      id: 'ocr-et-m6',
      title: 'Time Management: Minute-by-Minute for OCR Components',
      duration: '20 min',
      content: `<h2>Time Management: Minute-by-Minute Plans for OCR Exams</h2>
<p>Time management is the invisible skill that separates students who achieve their potential from those who underperform. Every year, OCR examiners report that <strong>incomplete papers</strong> are one of the most common reasons students score below their ability. A student who writes a brilliant Q3 but runs out of time on Q4 will lose far more marks than a student who writes good (not brilliant) responses to both. The principle is simple: <strong>every question deserves its time allocation</strong>, and you must have a plan before you walk into the exam room.</p>

<div class="key-term"><strong>Key Principle: Marks per Minute</strong> - The time you spend on each question should be proportional to its mark value. On a 2-hour paper worth 80 marks, each mark is worth approximately 1.5 minutes. A 12-mark question deserves roughly 18 minutes; an 18-mark question deserves roughly 27 minutes. Use this ratio to plan your time.</div>

<h3>Component 01: Communicating Information and Ideas (2 hours, 80 marks)</h3>
<p>Component 01 has a reading section and a writing section. Here is your minute-by-minute plan:</p>

<h4>Reading Section (Questions 1-4)</h4>
<table>
<tr><th>Task</th><th>Time</th><th>Running Total</th></tr>
<tr><td>Read both source texts carefully</td><td>10 minutes</td><td>0:10</td></tr>
<tr><td>Q1: Retrieval (4 marks)</td><td>5 minutes</td><td>0:15</td></tr>
<tr><td>Q2: Inference (6 marks)</td><td>8 minutes</td><td>0:23</td></tr>
<tr><td>Q3: Synthesis (12 marks)</td><td>18 minutes</td><td>0:41</td></tr>
<tr><td>Q4: Evaluation (18 marks)</td><td>27 minutes</td><td>1:08</td></tr>
</table>

<h4>Writing Section (Questions 5-6)</h4>
<table>
<tr><th>Task</th><th>Time</th><th>Running Total</th></tr>
<tr><td>Q5: Writing task (24 marks) - plan</td><td>5 minutes</td><td>1:13</td></tr>
<tr><td>Q5: Writing task - write</td><td>25 minutes</td><td>1:38</td></tr>
<tr><td>Q6: Writing task (16 marks) - plan</td><td>3 minutes</td><td>1:41</td></tr>
<tr><td>Q6: Writing task - write</td><td>15 minutes</td><td>1:56</td></tr>
<tr><td>Proofread both writing responses</td><td>4 minutes</td><td>2:00</td></tr>
</table>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The reading section should take no more than 68 minutes in total. If you find yourself spending 40 minutes on Q4, you are over-writing. A focused, well-structured 27-minute response to Q4 will score as well as or better than a 40-minute response that runs out of new points halfway through.</div>

<h3>Component 02: Fiction and Imaginative Writing (2 hours, 80 marks)</h3>
<p>Component 02 has a reading section based on an unseen fiction extract and a writing section.</p>

<h4>Reading Section (Questions 1-3)</h4>
<table>
<tr><th>Task</th><th>Time</th><th>Running Total</th></tr>
<tr><td>Read the fiction extract carefully (twice)</td><td>10 minutes</td><td>0:10</td></tr>
<tr><td>Q1: Retrieval (4 marks)</td><td>5 minutes</td><td>0:15</td></tr>
<tr><td>Q2: Explanation/inference (6 marks)</td><td>10 minutes</td><td>0:25</td></tr>
<tr><td>Q3: Language and structure analysis (24 marks)</td><td>35 minutes</td><td>1:00</td></tr>
</table>

<h4>Writing Section (Questions 4-5)</h4>
<table>
<tr><th>Task</th><th>Time</th><th>Running Total</th></tr>
<tr><td>Q4: Imaginative writing (24 marks) - plan</td><td>5 minutes</td><td>1:05</td></tr>
<tr><td>Q4: Write response</td><td>27 minutes</td><td>1:32</td></tr>
<tr><td>Q5: Imaginative writing (16 marks) - plan</td><td>3 minutes</td><td>1:35</td></tr>
<tr><td>Q5: Write response</td><td>20 minutes</td><td>1:55</td></tr>
<tr><td>Proofread both writing responses</td><td>5 minutes</td><td>2:00</td></tr>
</table>

<h3>What to Do When You Fall Behind</h3>
<p>Even with perfect planning, you may find yourself running over on a question. Here is your emergency protocol:</p>
<ul>
<li><strong>Set checkpoints:</strong> At 30 minutes, check whether you are on track. At 60 minutes, you should be entering the writing section of Component 01 or starting Q3 on Component 02.</li>
<li><strong>Cut your losses:</strong> If you have spent 5 extra minutes on a question, do not try to "make up" time by rushing the next question. Accept the overspend and give the next question its proper time minus only 2-3 minutes.</li>
<li><strong>Never skip a question:</strong> A half-finished response to Q4 still earns marks. A skipped question earns zero. Even bullet-pointed analysis is better than a blank page.</li>
<li><strong>Protect the writing section:</strong> Students routinely over-spend on reading and then rush their writing. The writing section carries 40 marks on both components - treat it with equal seriousness.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending 45 minutes on Component 02 Q3 because it is "the big question." Yes, it is worth 24 marks, but those extra 10 minutes will cost you more marks on the writing section than they will gain on Q3. Diminishing returns set in after 35 minutes - your fourth and fifth paragraphs of analysis rarely add significant marks.</div>

<h3>Literature Component Timing</h3>
<p>For OCR Literature essays (typically 45-50 minutes per essay), use this structure:</p>
<ul>
<li><strong>Planning:</strong> 5 minutes - create your comparison grid with quotations</li>
<li><strong>Introduction:</strong> 3 minutes - establish your thesis and comparative framework</li>
<li><strong>Body paragraphs:</strong> 30 minutes - aim for 3-4 comparative paragraphs (7-8 minutes each)</li>
<li><strong>Conclusion:</strong> 3 minutes - synthesise your argument and offer a final evaluative judgement</li>
<li><strong>Proofread:</strong> 2 minutes - check quotation accuracy, spelling, and expression</li>
</ul>

<div class="model-answer"><strong>Practical Tip:</strong> In your first practice exam, write the time next to each question as you start it. Afterwards, compare your actual timings to the plan above. Identify where you over-spent and practise that question type under strict timed conditions until you can consistently finish within the allocation. Time discipline is a skill that improves with deliberate practice, just like analytical writing.</div>`,
      quiz: [
        { id: 'ocr-et-m6-q1', question: 'How long should you spend on Q4 (evaluation) on Component 01?', options: ['15 minutes', '20 minutes', '27 minutes', '40 minutes'], answer: 2, explanation: 'Q4 is worth 18 marks on a 2-hour, 80-mark paper. At approximately 1.5 minutes per mark, this gives a 27-minute allocation. Spending longer produces diminishing returns.' },
        { id: 'ocr-et-m6-q2', question: 'What should you do if you fall 5 minutes behind schedule?', options: ['Skip the next question entirely', 'Rush through the rest of the paper to make up time', 'Accept the overspend and give the next question its proper time minus only 2-3 minutes', 'Start writing in bullet points for all remaining questions'], answer: 2, explanation: 'Cut your losses rather than creating a cascading time problem. Accept the overspend and give the next question close to its full allocation, trimming only 2-3 minutes.' },
        { id: 'ocr-et-m6-q3', question: 'How long should you spend on Q3 on Component 02?', options: ['20 minutes', '25 minutes', '35 minutes', '45 minutes'], answer: 2, explanation: 'Q3 on Component 02 is worth 24 marks and deserves approximately 35 minutes. Spending longer produces diminishing returns and steals time from the writing section.' },
        { id: 'ocr-et-m6-q4', question: 'Why is it important to protect the writing section?', options: ['Because writing is easier than reading', 'Because the writing section carries 40 marks on both components', 'Because examiners mark writing more generously', 'Because you can copy from the source texts'], answer: 1, explanation: 'The writing section carries 40 marks on both components - half the total. Students who over-spend on reading and rush their writing lose more marks than they gain from extended reading responses.' },
        { id: 'ocr-et-m6-q5', question: 'How many minutes per mark is the approximate ratio on an OCR 2-hour paper?', options: ['0.5 minutes per mark', '1 minute per mark', '1.5 minutes per mark', '2 minutes per mark'], answer: 2, explanation: 'On a 2-hour (120-minute) paper worth 80 marks, each mark is worth approximately 1.5 minutes. Use this ratio to calculate the time allocation for every question.' },
      ],
    },
  ],
  assessmentQuestions: [
    { id: 'ocr-et-a1', question: 'What type of question is Q3 on OCR Component 01?', options: ['Retrieval', 'Synthesis across two sources', 'Language analysis', 'Creative writing'], answer: 1, explanation: 'Q3 on Component 01 is a synthesis question requiring you to combine information from both the 19th-century and modern non-fiction sources.' },
    { id: 'ocr-et-a2', question: 'Which is the highest-value reading question on Component 01?', options: ['Q1 (4 marks)', 'Q2 (6 marks)', 'Q3 (12 marks)', 'Q4 (18 marks)'], answer: 3, explanation: 'Q4 is worth 18 marks, making it the highest-value reading question on Component 01. It tests evaluative comparison across both texts.' },
    { id: 'ocr-et-a3', question: 'How many marks is the language and structure question worth on Component 02?', options: ['12 marks', '18 marks', '24 marks', '30 marks'], answer: 2, explanation: 'Q3 on Component 02 is worth 24 marks - the single highest-value reading question across both OCR Language components.' },
    { id: 'ocr-et-a4', question: 'What assessment objective does Component 02 Q3 primarily test?', options: ['AO1 - Identifying information', 'AO2 - Language and structure analysis', 'AO3 - Comparison and context', 'AO4 - Technical accuracy'], answer: 1, explanation: 'AO2 is the dominant assessment objective: explain, comment on, and analyse how writers use language and structure to achieve effects and influence readers.' },
    { id: 'ocr-et-a5', question: 'In an OCR comparative essay, where should comparison appear?', options: ['Only in the introduction', 'Only in the conclusion', 'In a dedicated comparison paragraph', 'Integrated throughout every body paragraph'], answer: 3, explanation: 'OCR examiners reward essays that integrate comparison throughout every body paragraph. Both texts should be discussed within each paragraph, not in separate sections.' },
    { id: 'ocr-et-a6', question: 'What is the recommended approach for unseen poetry on OCR?', options: ['Read once quickly and start writing immediately', 'Use a systematic five-step reading method before writing', 'Focus only on rhyme and rhythm', 'Identify as many techniques as possible without analysis'], answer: 1, explanation: 'The five-step reading method (big picture, mark shifts, zoom in on language, note form, formulate interpretation) provides a reliable, repeatable approach for any unseen poem.' },
    { id: 'ocr-et-a7', question: 'How long is each OCR Language component?', options: ['1 hour', '1 hour 30 minutes', '2 hours', '2 hours 30 minutes'], answer: 2, explanation: 'Both Component 01 and Component 02 are 2-hour exams, each worth 80 marks. This gives approximately 1.5 minutes per mark.' },
    { id: 'ocr-et-a8', question: 'What is the most common reason students underperform according to OCR examiners?', options: ['Poor handwriting', 'Incomplete papers due to time mismanagement', 'Not using enough quotations', 'Writing too much'], answer: 1, explanation: 'OCR examiners consistently report that incomplete papers are one of the most common reasons students score below their ability. Time management is the invisible skill that prevents this.' },
    { id: 'ocr-et-a9', question: 'What does the JUDGE framework help you do on Component 01 Q4?', options: ['Plan creative writing', 'Structure an evaluative response with sustained critical judgement', 'Memorise quotations', 'Write a comparative literature essay'], answer: 1, explanation: 'JUDGE (Judgement, Use of evidence, Deconstruct technique, Gauge effect, Evaluate success) structures an evaluative response that threads critical judgement throughout - exactly what OCR rewards at the top bands.' },
    { id: 'ocr-et-a10', question: 'Why should you avoid feature-spotting in your analysis?', options: ['Because examiners do not know the technical terms', 'Because naming techniques without analysing their effect earns very few marks', 'Because you should only use one technique per paragraph', 'Because feature-spotting takes too long'], answer: 1, explanation: 'Feature-spotting means identifying techniques without explaining their effect on the reader. Every technique you identify must be followed by detailed analysis of its impact and contribution to the writer\'s purpose.' },
  ],
};

export default ocrExamTechnique;
