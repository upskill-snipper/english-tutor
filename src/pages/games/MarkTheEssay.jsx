import { useState, useEffect, useCallback } from 'react';
import { RotateCcw, Trophy, Star, Target, ChevronRight, BookOpen, Award, CheckCircle, Eye } from 'lucide-react';
import Navbar from '../../components/Navbar';
import GameWrapper from '../../components/GameWrapper';
import Lauren from '../../components/Lauren';

/* ───────────────────────── ESSAY EXCERPT DATA ───────────────────────── */

const ESSAYS = [
  // ── Grade 9 ──────────────────────────────────────────────────
  {
    id: 1,
    grade: 9,
    topic: "Macbeth — Ambition",
    excerpt: `Shakespeare masterfully constructs Macbeth's ambition as an insidious force that corrodes moral integrity. The metaphor "vaulting ambition, which o'erleaps itself" encapsulates the self-destructive paradox at the heart of the play: ambition, by its very nature, sows the seeds of its own downfall. The verb "o'erleaps" suggests a hubristic overreach reminiscent of Icarus, drawing on a classical archetype that Jacobean audiences would have recognised instantly.

Furthermore, the progressive deterioration of Macbeth's soliloquies — from measured deliberation in Act 1 to fragmented nihilism in "Tomorrow, and tomorrow, and tomorrow" — structurally mirrors his psychological disintegration. Shakespeare thus uses form itself as a vehicle for meaning, compelling the audience to experience the entropy of unchecked ambition viscerally rather than merely intellectually.`,
    feedback: "This response demonstrates sophisticated, conceptualised analysis with seamless integration of subject terminology. The candidate explores multiple layers of meaning, links to contextual factors (Jacobean audience, classical archetypes), and analyses structural choices with perceptive originality. The writing is fluent, academic, and precisely controlled throughout."
  },
  {
    id: 2,
    grade: 9,
    topic: "An Inspector Calls — Responsibility",
    excerpt: `Priestley weaponises dramatic irony to dismantle Birling's capitalist philosophy before it has even been fully articulated. The audience, armed with historical hindsight regarding the Titanic and two World Wars, perceives Birling not merely as wrong but as dangerously, almost comically, deluded. This positions the audience as ideological allies of the Inspector before he even arrives, a masterful piece of theatrical manipulation.

The cyclical structure — the telephone ringing at the denouement mirroring the Inspector's initial entrance — transforms what could be a neat morality tale into something far more disturbing. Priestley implies that social responsibility is not a lesson learned once but a perpetual struggle against the gravitational pull of self-interest. The play, therefore, functions not as a conclusion but as a warning, its open ending demanding continued vigilance from every generation that encounters it.`,
    feedback: "Assured, perceptive analysis that synthesises form, structure, and context with conceptualised fluency. The candidate moves beyond character analysis to interrogate Priestley's craft and ideological project. Vocabulary is precise and ambitious; the argument is sustained and original throughout."
  },
  {
    id: 3,
    grade: 9,
    topic: "Power and Conflict Poetry — Exposure",
    excerpt: `Owen subverts the conventional war poem by making the true antagonist not the enemy but the weather itself. The sibilance in "merciless iced east winds that knive us" transforms nature into a predatory force, while the neologism "knive" — grammatically jarring as a verb — enacts the violence it describes at the level of language itself. This is poetry that performs its own argument.

Structurally, the pararhyme ("knife/knive," "silent/salient") creates a persistent sense of incompleteness, an acoustic dissonance that mirrors the soldiers' psychological state. Nothing resolves; nothing concludes. The repeated refrain "But nothing happens" is devastating precisely because of its banality — Owen denies the reader the catharsis of action, trapping us in the same paralysing stasis as the men in the trenches.`,
    feedback: "Exceptional analysis that operates at the highest conceptual level. The candidate examines how Owen's linguistic and structural choices embody meaning rather than merely conveying it. The discussion of pararhyme and its psychological implications is sophisticated and original. This is assured Grade 9 work throughout."
  },
  // ── Grade 8 ──────────────────────────────────────────────────
  {
    id: 4,
    grade: 8,
    topic: "A Christmas Carol — Redemption",
    excerpt: `Dickens presents Scrooge's transformation as both personal redemption and social critique. The simile "hard and sharp as flint" in Stave 1 dehumanises Scrooge, reducing him to an object incapable of warmth. This contrasts powerfully with the exclamatory joy of Stave 5 — "I am as light as a feather!" — where the tricolon of similes suggests an almost childlike rebirth.

Contextually, Dickens uses Scrooge as a vehicle to challenge the utilitarian philosophy prevalent among the Victorian upper classes. The rhetorical questions "Are there no prisons? Are there no workhouses?" echo the callous attitudes Dickens witnessed firsthand, making the novella a deliberate act of social advocacy as much as a festive tale.`,
    feedback: "Detailed, perceptive analysis with well-integrated context and terminology. The candidate tracks Scrooge's transformation structurally and links language choices to wider Victorian attitudes. Expression is fluent and the argument well-sustained, though it could push further into the conceptualised territory of a Grade 9 by exploring more original or ambitious interpretations."
  },
  {
    id: 5,
    grade: 8,
    topic: "Romeo and Juliet — Love",
    excerpt: `Shakespeare presents love as a consuming, almost violent force through sustained light and dark imagery. Romeo's metaphor "Juliet is the sun" elevates her beyond the mortal, yet this deification also foreshadows tragedy: the sun must set. The juxtaposition of Petrarchan conventions with genuine emotion — Romeo abandons his formulaic love for Rosaline the instant he sees Juliet — critiques superficial courtly love while affirming the destructive authenticity of passion.

The sonnet form shared by Romeo and Juliet at their first meeting is structurally significant: Shakespeare merges two voices into one poetic form, symbolising their unity while the rigid structure foreshadows the societal constraints that will ultimately destroy them.`,
    feedback: "Thoughtful and well-evidenced analysis that moves between language, structure, and context effectively. The candidate demonstrates strong understanding of Shakespeare's craft and uses terminology precisely. A confident top-of-Band-5 response that occasionally reaches the perceptive, conceptualised quality of a Grade 9."
  },
  // ── Grade 7 ──────────────────────────────────────────────────
  {
    id: 6,
    grade: 7,
    topic: "Macbeth — Guilt",
    excerpt: `Shakespeare uses the motif of blood to symbolise Macbeth's guilt. After killing Duncan, Macbeth asks "Will all great Neptune's ocean wash this blood clean from my hand?" The hyperbole suggests that his guilt is so overwhelming that nothing in nature could remove it. The reference to Neptune, the Roman god of the sea, elevates the scale of his crime to something cosmic.

Lady Macbeth's sleepwalking scene mirrors this imagery. Her repetition of "Out, damned spot!" reveals that the guilt she initially dismissed has consumed her. The shift from her earlier confident tone to fragmented, desperate language shows how guilt has destroyed her psychological stability.`,
    feedback: "Clear, well-structured analysis that identifies relevant techniques and explains their effects thoughtfully. The candidate links language to themes and tracks character development across the play. To reach Grade 8, the response would benefit from more sustained exploration of context and more ambitious conceptualised interpretations rather than explaining individual techniques sequentially."
  },
  {
    id: 7,
    grade: 7,
    topic: "An Inspector Calls — Generational Divide",
    excerpt: `Priestley presents the younger generation as more capable of moral growth than their parents. Sheila's exclamation "But these girls aren't cheap labour — they're people" shows her developing social conscience, contrasting with Mrs Birling's cold declaration "I accept no blame for it at all." The antithesis between mother and daughter highlights Priestley's message that hope lies with the young.

Eric also changes, confronting his father with "You're not the kind of father a chap could go to when he's in trouble." The direct address is accusatory, suggesting Eric now sees through the facade of respectability. Priestley uses these generational contrasts to suggest that post-war Britain could be rebuilt only if the young reject the values of their elders.`,
    feedback: "A solid, well-organised response that makes clear points supported by relevant quotations. The candidate identifies techniques and links them to Priestley's message effectively. The contextual references are present but somewhat bolted-on rather than woven into the analysis. Consistent Grade 7 work."
  },
  // ── Grade 6 ──────────────────────────────────────────────────
  {
    id: 8,
    grade: 6,
    topic: "A Christmas Carol — Social Class",
    excerpt: `Dickens shows the divide between rich and poor in Victorian society. Scrooge represents the wealthy upper class who do not care about the poor. When he says "decrease the surplus population" it shows he sees poor people as a burden rather than as human beings. This is a very harsh and uncaring statement.

The Cratchit family are presented as the opposite of Scrooge. Despite being poor, they are happy and loving. Bob Cratchit toasts Scrooge even though Scrooge treats him badly. Dickens uses this contrast to show that money does not equal goodness, and that the poor often have more moral value than the rich.`,
    feedback: "The response makes relevant points and selects appropriate quotations. There is some explanation of language effects, though this tends toward narration ('it shows he sees poor people as a burden') rather than close analysis of specific words. The contrast between Scrooge and the Cratchits is identified but could be explored with more precision and terminology. Solid Grade 6."
  },
  {
    id: 9,
    grade: 6,
    topic: "Jekyll and Hyde — Duality",
    excerpt: `Stevenson presents the idea of duality through the characters of Jekyll and Hyde. Jekyll describes himself as having "two natures" which shows that he believes everyone has a good side and a bad side. Hyde is described as giving "an impression of deformity" which suggests that evil manifests physically.

The setting of London also reflects duality. The respectable streets contrast with the dark, sinister back alleys where Hyde is often found. This could represent the idea that Victorian society had a public face of respectability but hid its darker desires behind closed doors. Stevenson uses this to criticise the hypocrisy of the time.`,
    feedback: "Clearly written with relevant points and some awareness of context. The candidate identifies the theme of duality at both character and setting level, which is promising. However, the analysis of language is underdeveloped — phrases like 'which shows that' signal explanation rather than analysis. More precise terminology and closer engagement with individual word choices would push this higher."
  },
  {
    id: 10,
    grade: 6,
    topic: "Lord of the Flies — Civilisation",
    excerpt: `Golding uses the conch shell as a symbol of civilisation and democracy. When the boys first arrive on the island, the conch is used to call meetings and whoever holds it is allowed to speak. This represents order and fairness, similar to a democratic society.

As the boys become more savage, the conch loses its power. When it is finally destroyed along with Piggy, it shows that civilisation has completely broken down. Golding might be suggesting that civilisation is fragile and can easily be destroyed when people give in to their darker instincts. The island could represent the wider world.`,
    feedback: "The candidate identifies the conch as a symbol and tracks its significance through the novel with some effectiveness. The analysis shows understanding of Golding's allegorical intentions. However, the response lacks close language analysis — there are no quotations examined at word level. The final point about the island as microcosm is valid but undeveloped. A secure Grade 6 response."
  },
  // ── Grade 5 ──────────────────────────────────────────────────
  {
    id: 11,
    grade: 5,
    topic: "Macbeth — Supernatural",
    excerpt: `The witches are important in the play because they start everything off by telling Macbeth he will be king. Their chant "Double, double toil and trouble" creates a spooky atmosphere and would have scared the audience in Shakespeare's time because people believed in witchcraft.

Macbeth sees a floating dagger before he kills Duncan which shows his mind is disturbed. The audience doesn't know if the dagger is real or just in his imagination. This creates tension because it makes us question whether Macbeth is going mad or if supernatural forces are actually at work.`,
    feedback: "The response shows understanding of the text and makes relevant points about the supernatural. There is a reference to context (Jacobean belief in witchcraft) though it is not developed. The analysis tends to describe events rather than analyse language closely. The candidate would benefit from using more subject terminology and examining specific word choices rather than summarising what happens."
  },
  {
    id: 12,
    grade: 5,
    topic: "An Inspector Calls — Social Inequality",
    excerpt: `Priestley shows that the rich have power over the poor. Mr Birling fired Eva Smith because she asked for higher wages, which shows he only cares about money. The Inspector tries to make the family see that their actions have consequences for other people.

Sheila feels guilty when she finds out what happened, but her parents do not change. This might be because Priestley wanted to show that older people are set in their ways. The play was written in 1945 but set in 1912, which helps the audience see how attitudes have changed and need to keep changing.`,
    feedback: "A competent response that demonstrates understanding of the plot and Priestley's message. The candidate makes valid points but relies on narrative rather than textual analysis. The contextual point about the dual time setting is relevant but undeveloped. More direct engagement with quotations and language features would strengthen this to a Grade 6."
  },
  // ── Grade 4 ──────────────────────────────────────────────────
  {
    id: 13,
    grade: 4,
    topic: "Romeo and Juliet — Conflict",
    excerpt: `Romeo and Juliet is about two families who hate each other. The Montagues and Capulets are always fighting which causes problems for Romeo and Juliet who are in love. When Tybalt kills Mercutio, Romeo gets angry and kills Tybalt which gets him banished.

This is important because it means Romeo can't be with Juliet anymore. The conflict between the families is the main reason the play ends in tragedy. Shakespeare is trying to show that fighting and hatred only lead to bad things happening.`,
    feedback: "The candidate retells events accurately but offers very limited analysis. There are no quotations from the text and no discussion of language or techniques. The final sentence gestures toward Shakespeare's intentions but remains vague. To improve, the candidate needs to embed quotations and analyse how Shakespeare uses language and structure to present conflict."
  },
  {
    id: 14,
    grade: 4,
    topic: "A Christmas Carol — Scrooge",
    excerpt: `At the start of the story Scrooge is mean and doesn't like Christmas. He says "Bah! Humbug!" when people wish him merry Christmas. He won't give money to charity and makes Bob Cratchit work in the cold.

After being visited by three ghosts he changes and becomes a nice person. He buys a turkey for the Cratchits and gives money to the poor. Dickens wanted to show that people can change and become better. The story has a happy ending because Scrooge learns his lesson.`,
    feedback: "The response demonstrates basic understanding of the text and uses one quotation. However, the analysis is very surface-level, largely retelling the plot. Phrases like 'mean' and 'nice person' lack precision. There is no analysis of language techniques and the contextual comment is generic. The candidate needs to move beyond describing what happens to examining how Dickens uses language to convey meaning."
  },
  // ── Grade 3 ──────────────────────────────────────────────────
  {
    id: 15,
    grade: 3,
    topic: "Macbeth — Power",
    excerpt: `Macbeth wants to be king so he kills Duncan. Lady Macbeth helps him plan it. After he becomes king he starts killing more people because he is worried they will find out. He becomes a bad king and everyone turns against him. In the end Macduff kills him.

Shakespeare is showing that wanting too much power is bad. Macbeth goes from being a good soldier to a terrible king because of his ambition. The play teaches us that we shouldn't be too greedy.`,
    feedback: "This response retells the plot without analysing the text. There are no quotations, no identification of techniques, and no engagement with language or structure. The 'moral' identified is simplistic. The candidate needs to use evidence from the text and begin to explain how Shakespeare communicates ideas through his writing choices."
  },
  {
    id: 16,
    grade: 3,
    topic: "An Inspector Calls — The Inspector",
    excerpt: `The Inspector comes to the Birling house and asks them questions about a girl who died. He shows them a photo and they all had something to do with her. Mr Birling fired her and Sheila got her fired from a shop.

The Inspector makes them feel bad about what they did. At the end they find out he might not be a real inspector which is confusing. Priestley probably wanted to show that everyone should be nice to each other and think about how their actions affect other people.`,
    feedback: "The response shows basic awareness of the plot but offers no analysis of language, form, or structure. There are no quotations and the candidate relies entirely on retelling events. Comments on Priestley's intentions are simplistic ('everyone should be nice'). Significant improvement needed in textual analysis and use of evidence."
  },
  {
    id: 17,
    grade: 3,
    topic: "Romeo and Juliet — Fate",
    excerpt: `Romeo and Juliet were not lucky because everything went wrong for them. If the letter had arrived in time Romeo would have known Juliet wasn't really dead. It seems like they were always going to die because of bad luck and timing.

Shakespeare might be saying that some things are meant to happen and you can't stop them. The prologue says they are "star-cross'd lovers" which means the stars are against them. The play is very sad because they both die at the end.`,
    feedback: "The candidate shows some understanding of fate as a theme and includes one brief quotation. However, the analysis remains at a narrative level — describing what happens rather than how Shakespeare presents the theme through language and structural choices. The single quotation is identified but not analysed. More evidence, terminology, and analytical depth are required."
  }
];

const GRADE_BANDS = [9, 8, 7, 6, 5, 4, 3];

const GRADE_COLORS = {
  9: "#a855f7",
  8: "#8b5cf6",
  7: "#3b82f6",
  6: "#10b981",
  5: "#f59e0b",
  4: "#f97316",
  3: "#ef4444"
};

function getExaminerRating(accuracy) {
  if (accuracy >= 90) return { title: "Senior Examiner", color: "#a855f7", desc: "Exceptional judgement — you could lead a marking team." };
  if (accuracy >= 75) return { title: "Lead Examiner", color: "#8b5cf6", desc: "Highly accurate grading with strong consistency." };
  if (accuracy >= 60) return { title: "Experienced Examiner", color: "#3b82f6", desc: "Solid marking skills with good instincts." };
  if (accuracy >= 45) return { title: "Examiner", color: "#10b981", desc: "Competent grading — keep practising for greater precision." };
  if (accuracy >= 30) return { title: "Assistant Examiner", color: "#f59e0b", desc: "Developing your eye — focus on what separates each band." };
  return { title: "Trainee Examiner", color: "#f97316", desc: "Early days — read more exemplar essays to calibrate your judgement." };
}

function getPointsForDiff(diff) {
  if (diff === 0) return 100;
  if (diff === 1) return 60;
  if (diff === 2) return 20;
  return 0;
}

function getDiffLabel(diff) {
  if (diff === 0) return { text: "Exact match!", color: "#10b981" };
  if (diff === 1) return { text: "1 grade off", color: "#34d399" };
  if (diff === 2) return { text: "2 grades off", color: "#f59e0b" };
  return { text: `${diff} grades off`, color: "#ef4444" };
}

const LS_KEY = 'lr_markessay_best';

function loadBest() {
  try { return parseInt(localStorage.getItem(LS_KEY)) || 0; } catch { return 0; }
}
function saveBest(score) {
  const prev = loadBest();
  if (score > prev) localStorage.setItem(LS_KEY, String(score));
}

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */
export default function MarkTheEssay() {
  const [phase, setPhase] = useState('menu');
  const [essays, setEssays] = useState([]);
  const [essayIndex, setEssayIndex] = useState(0);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [results, setResults] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(loadBest);
  const [essayCount, setEssayCount] = useState(10);

  const currentEssay = essays[essayIndex];

  /* Start game */
  const startGame = useCallback(() => {
    const shuffled = [...ESSAYS].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(essayCount, ESSAYS.length));
    setEssays(selected);
    setEssayIndex(0);
    setSelectedGrade(null);
    setRevealed(false);
    setResults([]);
    setScore(0);
    setPhase('playing');
  }, [essayCount]);

  /* Submit grade */
  const handleGradeSelect = useCallback((grade) => {
    if (revealed) return;
    setSelectedGrade(grade);
  }, [revealed]);

  const handleSubmit = useCallback(() => {
    if (selectedGrade === null || revealed) return;
    const diff = Math.abs(selectedGrade - currentEssay.grade);
    const pts = getPointsForDiff(diff);
    const newResults = [...results, { essay: currentEssay, selected: selectedGrade, actual: currentEssay.grade, diff, pts }];
    setResults(newResults);
    setScore(s => s + pts);
    setRevealed(true);
  }, [selectedGrade, revealed, currentEssay, results]);

  /* Next essay */
  const nextEssay = useCallback(() => {
    if (essayIndex + 1 >= essays.length) {
      const finalScore = score;
      saveBest(finalScore);
      setBestScore(Math.max(bestScore, finalScore));
      setPhase('results');
    } else {
      setEssayIndex(i => i + 1);
      setSelectedGrade(null);
      setRevealed(false);
    }
  }, [essayIndex, essays.length, score, bestScore]);

  const accuracy = results.length > 0
    ? Math.round((results.filter(r => r.diff === 0).length / results.length) * 100)
    : 0;
  const closeAccuracy = results.length > 0
    ? Math.round((results.filter(r => r.diff <= 1).length / results.length) * 100)
    : 0;
  const examinerRating = getExaminerRating(closeAccuracy);

  return (
    <div style={{ minHeight: '100vh', background: '#0a0e1a', color: '#f1f5f9' }}>
      <Navbar />
      <GameWrapper gameId="mark-the-essay" gameName="Mark the Essay">
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '24px 16px' }}>

        {/* ── MENU ── */}
        {phase === 'menu' && (
          <div style={{ animation: 'mteSlideUp 0.4s ease' }}>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 72, height: 72, borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)', marginBottom: 16
              }}>
                <BookOpen style={{ width: 36, height: 36, color: '#34d399' }} />
              </div>
              <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Mark the Essay</h1>
              <p style={{ color: '#94a3b8', fontSize: 15, maxWidth: 500, margin: '0 auto' }}>
                Read essay excerpts and assign a GCSE grade band. How close can you get to the real examiner's mark?
              </p>
            </div>

            {/* Essay count selector */}
            <div className="card" style={{
              background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(71, 85, 105, 0.4)',
              borderRadius: 16, padding: 24, marginBottom: 20
            }}>
              <p style={{ color: '#94a3b8', fontSize: 13, marginBottom: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
                Number of essays
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                {[5, 10, 15].map(n => (
                  <button
                    key={n}
                    onClick={() => setEssayCount(n)}
                    style={{
                      flex: 1, padding: '10px 0', borderRadius: 12, fontWeight: 600, fontSize: 15,
                      border: essayCount === n ? '2px solid #10b981' : '2px solid rgba(71, 85, 105, 0.4)',
                      background: essayCount === n ? 'rgba(16, 185, 129, 0.15)' : 'rgba(30, 41, 59, 0.3)',
                      color: essayCount === n ? '#34d399' : '#94a3b8',
                      cursor: 'pointer', transition: 'all 0.2s'
                    }}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Best score */}
            {bestScore > 0 && (
              <div className="card" style={{
                background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(71, 85, 105, 0.4)',
                borderRadius: 16, padding: 16, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12
              }}>
                <Trophy style={{ width: 20, height: 20, color: '#f59e0b' }} />
                <span style={{ color: '#94a3b8', fontSize: 14 }}>Best score:</span>
                <span style={{ color: '#f59e0b', fontWeight: 700, fontSize: 16 }}>{bestScore} pts</span>
              </div>
            )}

            <button
              onClick={startGame}
              style={{
                width: '100%', padding: '14px 0', borderRadius: 14,
                background: 'linear-gradient(135deg, #10b981, #059669)',
                color: '#fff', fontWeight: 700, fontSize: 16,
                border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
              }}
            >
              Start Marking <ChevronRight style={{ width: 18, height: 18 }} />
            </button>
          </div>
        )}

        {/* ── PLAYING ── */}
        {phase === 'playing' && currentEssay && (
          <div style={{ animation: 'mteSlideUp 0.35s ease' }}>
            {/* Top bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <span style={{ fontSize: 13, color: '#94a3b8' }}>
                Essay <span style={{ color: '#e2e8f0', fontWeight: 600 }}>{essayIndex + 1}</span> / {essays.length}
              </span>
              <span style={{ fontSize: 17, fontWeight: 700, color: '#34d399' }}>{score} pts</span>
            </div>

            {/* Progress bar */}
            <div style={{ display: 'flex', gap: 5, marginBottom: 20 }}>
              {essays.map((_, i) => (
                <div
                  key={i}
                  style={{
                    height: 5, flex: 1, borderRadius: 4,
                    background: i < essayIndex ? '#10b981' : i === essayIndex ? 'rgba(16, 185, 129, 0.4)' : '#1e293b',
                    transition: 'background 0.3s'
                  }}
                />
              ))}
            </div>

            {/* Topic badge */}
            <div style={{ marginBottom: 12 }}>
              <span style={{
                display: 'inline-block', fontSize: 12, fontWeight: 600,
                background: 'rgba(16, 185, 129, 0.15)', color: '#34d399',
                padding: '4px 12px', borderRadius: 20
              }}>
                {currentEssay.topic}
              </span>
            </div>

            {/* Essay card */}
            <div className="card" style={{
              background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(71, 85, 105, 0.4)',
              borderRadius: 16, padding: 24, marginBottom: 20, maxHeight: 400, overflowY: 'auto'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <Eye style={{ width: 16, height: 16, color: '#64748b' }} />
                <span style={{ fontSize: 12, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
                  Student Response
                </span>
              </div>
              {currentEssay.excerpt.split('\n\n').map((para, i) => (
                <p key={i} style={{
                  fontSize: 14, lineHeight: 1.75, color: '#cbd5e1',
                  marginBottom: i < currentEssay.excerpt.split('\n\n').length - 1 ? 16 : 0,
                  fontStyle: 'italic'
                }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Grade selection */}
            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 13, color: '#94a3b8', fontWeight: 600, marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>
                Assign a grade
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8 }}>
                {GRADE_BANDS.map(g => {
                  let bg = 'rgba(30, 41, 59, 0.5)';
                  let borderColor = 'rgba(71, 85, 105, 0.4)';
                  let textColor = '#94a3b8';

                  if (revealed) {
                    if (g === currentEssay.grade) {
                      bg = 'rgba(16, 185, 129, 0.2)';
                      borderColor = '#10b981';
                      textColor = '#34d399';
                    } else if (g === selectedGrade && g !== currentEssay.grade) {
                      bg = 'rgba(239, 68, 68, 0.2)';
                      borderColor = '#ef4444';
                      textColor = '#f87171';
                    } else {
                      bg = 'rgba(30, 41, 59, 0.25)';
                      textColor = '#475569';
                    }
                  } else if (g === selectedGrade) {
                    bg = 'rgba(16, 185, 129, 0.15)';
                    borderColor = '#10b981';
                    textColor = '#34d399';
                  }

                  return (
                    <button
                      key={g}
                      onClick={() => handleGradeSelect(g)}
                      disabled={revealed}
                      style={{
                        padding: '12px 0', borderRadius: 12, fontWeight: 700, fontSize: 16,
                        border: `2px solid ${borderColor}`, background: bg, color: textColor,
                        cursor: revealed ? 'default' : 'pointer', transition: 'all 0.2s'
                      }}
                    >
                      {g}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit / Revealed feedback */}
            {!revealed && (
              <button
                onClick={handleSubmit}
                disabled={selectedGrade === null}
                style={{
                  width: '100%', padding: '14px 0', borderRadius: 14,
                  background: selectedGrade !== null
                    ? 'linear-gradient(135deg, #10b981, #059669)'
                    : 'rgba(30, 41, 59, 0.5)',
                  color: selectedGrade !== null ? '#fff' : '#475569',
                  fontWeight: 700, fontSize: 15, border: 'none',
                  cursor: selectedGrade !== null ? 'pointer' : 'default',
                  transition: 'all 0.2s'
                }}
              >
                Submit Grade
              </button>
            )}

            {revealed && (
              <div style={{ animation: 'mteSlideUp 0.3s ease' }}>
                {/* Result banner */}
                {(() => {
                  const diff = Math.abs(selectedGrade - currentEssay.grade);
                  const diffInfo = getDiffLabel(diff);
                  const pts = getPointsForDiff(diff);
                  return (
                    <div className="card" style={{
                      background: diff === 0 ? 'rgba(16, 185, 129, 0.1)' : diff <= 1 ? 'rgba(52, 211, 153, 0.08)' : 'rgba(239, 68, 68, 0.08)',
                      border: `1px solid ${diff <= 1 ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                      borderRadius: 14, padding: 16, marginBottom: 16, textAlign: 'center'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 8 }}>
                        <span style={{ fontSize: 14, color: '#94a3b8' }}>
                          Your grade: <strong style={{ color: GRADE_COLORS[selectedGrade] || '#f1f5f9' }}>{selectedGrade}</strong>
                        </span>
                        <span style={{ color: '#475569' }}>→</span>
                        <span style={{ fontSize: 14, color: '#94a3b8' }}>
                          Actual grade: <strong style={{ color: GRADE_COLORS[currentEssay.grade] || '#f1f5f9' }}>{currentEssay.grade}</strong>
                        </span>
                      </div>
                      <span style={{ fontWeight: 700, fontSize: 16, color: diffInfo.color }}>{diffInfo.text}</span>
                      <span style={{ color: '#64748b', fontSize: 13, marginLeft: 8 }}>+{pts} pts</span>
                    </div>
                  );
                })()}

                {/* Examiner feedback */}
                <div className="card" style={{
                  background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(71, 85, 105, 0.4)',
                  borderRadius: 14, padding: 20, marginBottom: 16
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                    <Award style={{ width: 16, height: 16, color: '#f59e0b' }} />
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: 1 }}>
                      Examiner Feedback
                    </span>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: '#cbd5e1' }}>
                    {currentEssay.feedback}
                  </p>
                </div>

                <button
                  onClick={nextEssay}
                  style={{
                    width: '100%', padding: '14px 0', borderRadius: 14,
                    background: 'rgba(30, 41, 59, 0.6)', border: '1px solid rgba(71, 85, 105, 0.5)',
                    color: '#fff', fontWeight: 600, fontSize: 15, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    transition: 'all 0.2s'
                  }}
                >
                  {essayIndex + 1 >= essays.length ? 'See Results' : 'Next Essay'}
                  <ChevronRight style={{ width: 16, height: 16 }} />
                </button>
              </div>
            )}
          </div>
        )}

        {/* ── RESULTS ── */}
        {phase === 'results' && (
          <div style={{ animation: 'mteSlideUp 0.4s ease', textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 80, height: 80, borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.15)', marginBottom: 20
            }}>
              <Trophy style={{ width: 40, height: 40, color: '#34d399' }} />
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 6 }}>Marking Complete!</h2>
            <p style={{ color: '#94a3b8', marginBottom: 24, fontSize: 15 }}>Here's your examiner report:</p>

            {/* Examiner rating badge */}
            <div className="card" style={{
              background: 'rgba(30, 41, 59, 0.6)', border: `1px solid ${examinerRating.color}40`,
              borderRadius: 16, padding: 20, marginBottom: 24
            }}>
              <Award style={{ width: 28, height: 28, color: examinerRating.color, margin: '0 auto 8px' }} />
              <div style={{ fontSize: 22, fontWeight: 700, color: examinerRating.color, marginBottom: 4 }}>
                {examinerRating.title}
              </div>
              <p style={{ fontSize: 13, color: '#94a3b8' }}>{examinerRating.desc}</p>
            </div>

            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 24 }}>
              <div className="card" style={{
                background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(71, 85, 105, 0.4)',
                borderRadius: 14, padding: 16
              }}>
                <Star style={{ width: 18, height: 18, color: '#f59e0b', margin: '0 auto 4px' }} />
                <div style={{ fontSize: 24, fontWeight: 700, color: '#34d399' }}>{score}</div>
                <div style={{ fontSize: 11, color: '#64748b' }}>Score</div>
              </div>
              <div className="card" style={{
                background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(71, 85, 105, 0.4)',
                borderRadius: 14, padding: 16
              }}>
                <Target style={{ width: 18, height: 18, color: '#3b82f6', margin: '0 auto 4px' }} />
                <div style={{ fontSize: 24, fontWeight: 700, color: '#3b82f6' }}>{accuracy}%</div>
                <div style={{ fontSize: 11, color: '#64748b' }}>Exact Match</div>
              </div>
              <div className="card" style={{
                background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(71, 85, 105, 0.4)',
                borderRadius: 14, padding: 16
              }}>
                <CheckCircle style={{ width: 18, height: 18, color: '#10b981', margin: '0 auto 4px' }} />
                <div style={{ fontSize: 24, fontWeight: 700, color: '#10b981' }}>{closeAccuracy}%</div>
                <div style={{ fontSize: 11, color: '#64748b' }}>Within 1 Grade</div>
              </div>
            </div>

            {/* New best */}
            {score >= bestScore && score > 0 && (
              <div style={{
                background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)',
                borderRadius: 14, padding: 12, marginBottom: 20, color: '#fbbf24', fontWeight: 600, fontSize: 14
              }}>
                New Best Score!
              </div>
            )}

            {/* Results breakdown */}
            <div style={{ textAlign: 'left', marginBottom: 24 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#94a3b8', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>
                Breakdown
              </p>
              {results.map((r, i) => {
                const diffInfo = getDiffLabel(r.diff);
                return (
                  <div key={i} className="card" style={{
                    background: 'rgba(30, 41, 59, 0.4)', border: '1px solid rgba(71, 85, 105, 0.3)',
                    borderRadius: 12, padding: 12, marginBottom: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                  }}>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0', marginBottom: 2 }}>{r.essay.topic}</div>
                      <div style={{ fontSize: 12, color: '#64748b' }}>
                        You: <span style={{ color: GRADE_COLORS[r.selected], fontWeight: 600 }}>{r.selected}</span>
                        {' '} / Actual: <span style={{ color: GRADE_COLORS[r.actual], fontWeight: 600 }}>{r.actual}</span>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: diffInfo.color }}>{diffInfo.text}</div>
                      <div style={{ fontSize: 11, color: '#64748b' }}>+{r.pts}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Lauren feedback */}
            <div style={{ marginBottom: 20 }}>
              <Lauren
                emotion={accuracy >= 90 ? 'celebrating' : accuracy >= 70 ? 'happy' : accuracy >= 50 ? 'encouraging' : 'concerned'}
                message={accuracy >= 90 ? "Outstanding work! You really know your stuff — that's Grade 9 territory!"
                  : accuracy >= 70 ? "Great job! You're showing solid understanding. Keep practising to push even higher!"
                  : accuracy >= 50 ? "Good effort! You're getting there — review the ones you missed and try again."
                  : "Don't worry — this is how we learn! Review the feedback and give it another go."}
                size="medium"
                position="inline"
              />
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: 12 }}>
              <button
                onClick={startGame}
                style={{
                  flex: 1, padding: '14px 0', borderRadius: 14,
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: '#fff', fontWeight: 700, fontSize: 15, border: 'none',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  transition: 'all 0.2s'
                }}
              >
                <RotateCcw style={{ width: 16, height: 16 }} /> Play Again
              </button>
              <button
                onClick={() => setPhase('menu')}
                style={{
                  flex: 1, padding: '14px 0', borderRadius: 14,
                  background: 'rgba(30, 41, 59, 0.6)', border: '1px solid rgba(71, 85, 105, 0.5)',
                  color: '#fff', fontWeight: 600, fontSize: 15, cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                Back to Menu
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes mteSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      </GameWrapper>
    </div>
  );
}
