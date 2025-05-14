// File: src/App.jsx

import Footer from "./components/Footer";
import Header from "./components/Header";
import TypeTable from "./components/TypeTable";
import About from "./components/About";
import "./index.css";

const App = () => {
  // Define the data for each type comparison
  const typeComparisons = [
    {
      title: "INTP vs INTJ",
      type1: "INTP",
      type2: "INTJ",
      rows: [
        {
          symbol: "🧠",
          type1:
            "Primary cognitive driver: <strong>Ti ⚙️</strong> (Accuracy). The INTP dissects problems like a watchmaker, pursuing internally consistent models and delaying judgment until every logical gear meshes perfectly.",
          type2:
            "Primary cognitive driver: <strong>Ni 🔮</strong> (Perspectives). The INTJ aggregates seemingly unrelated data into elegant long-range forecasts, mapping out future scenarios with chess-master precision.",
        },
        {
          symbol: "🛡️",
          type1:
            'During adolescence, develops tactical "escape hatches" (humor, debate, or retreat) that insulate the ego from the embarrassment of being proven wrong, reinforcing a lifelong quest for airtight arguments.',
          type2:
            "Early life strategy centers on minimizing existential vulnerability—quietly stockpiling knowledge, credentials, and contingencies so that external forces rarely catch them unprepared or off balance.",
        },
        {
          symbol: "🎭",
          type1:
            "Emotional signals register late; yet once a personal boundary is breached, the suppressed feelings erupt in a vivid, sometimes surprising torrent that catches observers off guard.",
          type2:
            "Continuously tracks its own emotional dashboard, but prefers expressing sentiment through refined understatement—displaying a cool façade even while quietly processing deep undercurrents.",
        },
        {
          symbol: "🚫",
          type1:
            "Views status rituals as arbitrary constraints. If forced into social hierarchies, will either subvert them with satire or vanish into intellectual side-quests rather than compete overtly.",
          type2:
            "Perceives the hierarchy as a practical structure. Will consciously engage rank, titles, or influence when those levers accelerate the implementation of a strategic objective.",
        },
        {
          symbol: "🎁",
          type1:
            "Contributes to society by calling out inconsistencies others ignore, offering disarmingly blunt assessments that sharpen collective reasoning despite occasional friction.",
          type2:
            "Offers the world rigorous conceptual blueprints—frameworks that blend originality and pragmatism, elevating discourse while maintaining fidelity to long-term vision.",
        },
      ],
    },
    {
      title: "ENFP vs ENFJ",
      type1: "ENFP",
      type2: "ENFJ",
      rows: [
        {
          symbol: "🔍",
          type1:
            "Primary driver: <strong>Ne 💭</strong> (Exploration). Ideas branch like fireworks; each spark invites another possibility, powering enthusiasm for tangents, emergent connections, and paradigm shifts.",
          type2:
            "Primary driver: <strong>Fe 👥</strong> (Harmony). Instinctively senses interpersonal currents, calibrating tone, timing, and language to keep collective morale buoyant and aligned.",
        },
        {
          symbol: "🗺️",
          type1:
            'Adopts an "open doors" policy toward life—sampling courses, careers, cultures, and relationships to gather experiential ingredients for future creative synthesis.',
          type2:
            "Hones an early talent for social cartography: reading unspoken expectations, sidestepping faux-pas, and positioning peers so that everyone feels acknowledged and useful.",
        },
        {
          symbol: "🎭",
          type1:
            "Emotional weather can shift from radiant amusement to thunderous conviction in seconds when core values are poked, lending the personality a captivating dramatic arc.",
          type2:
            "Possesses high-fidelity empathy but often shields personal anguish behind a polished diplomatic shell, releasing vulnerability selectively to maintain group stability.",
        },
        {
          symbol: "🚦",
          type1:
            "Bristles at regimented authority or clock-punching routines, preferring spontaneous, people-centric environments where play and productivity intertwine seamlessly.",
          type2:
            "Comfortably coordinates within formal structures—committee charters, org charts, ceremonies—so long as those structures serve the overarching mission of cohesion.",
        },
        {
          symbol: "🎁",
          type1:
            "Acts as a catalytic spark-plug, igniting latent passions in others through contagious wonder, imaginative storytelling, and permission to think impossibly.",
          type2:
            "Provides steady emotional scaffolding, weaving disparate individuals into a chorus that can pursue ambitious goals with unified purpose and mutual uplift.",
        },
      ],
    },
    {
      title: "ENTP vs ENTJ",
      type1: "ENTP",
      type2: "ENTJ",
      rows: [
        {
          symbol: "💡",
          type1:
            "Leads with <strong>Ne 🎯</strong> (Exploration), firing off hypotheticals, devil's-advocate riffs, and conceptual pivots that dismantle complacent thinking and spawn novel angles.",
          type2:
            "Leads with <strong>Te ⚡</strong> (Effectiveness), locking onto measurable outcomes, sequencing resources, and issuing clear directives to keep momentum relentlessly on track.",
        },
        {
          symbol: "🗣️",
          type1:
            "In youth, wields rhetorical agility as a freedom-preserving weapon—debate, wit, or irony provide exits from micromanagement and spark intellectual play.",
          type2:
            "Develops an early habit of stepping into power vacuums, corralling chaos through decisive planning so objectives translate from concept to concrete milestones.",
        },
        {
          symbol: "😄",
          type1:
            "Presents an irreverent grin, keeping emotional stakes low until a mental chess-match summons passionate intensity, which quickly fades once the puzzle resolves.",
          type2:
            "Exudes purposeful intensity; emotions are channeled into swift, results-oriented moves rather than verbal exposition, maintaining a brisk executive cadence.",
        },
        {
          symbol: "🏁",
          type1:
            "Finds adrenaline in challenging stale hierarchies, reframing rules as flexible guidelines or playful boundaries meant to be tested for efficiency gaps.",
          type2:
            "Regards hierarchy as a framework for responsibility assignment; will fortify or restructure it pragmatically to accelerate project throughput.",
        },
        {
          symbol: "🎯",
          type1:
            "Delivers disruptive innovation, comedic relief, and intellectual cross-pollination that keep teams lithe and future-oriented.",
          type2:
            "Supplies relentless strategic drive, transforming visionary sketches into scalable systems with tangible market impact.",
        },
      ],
    },
    {
      title: "INFP vs INFJ",
      type1: "INFP",
      type2: "INFJ",
      rows: [
        {
          symbol: "💖",
          type1:
            "<strong>Fi 🌈</strong> (Authenticity) anchors decisions; an internal moral compass evaluates every action for resonance with deeply held personal ideals and narrative coherence.",
          type2:
            "<strong>Ni 🔮</strong> (Perspectives) orchestrates an inner movie of future storylines, weighing symbolic patterns to craft compassionate, big-picture counsel.",
        },
        {
          symbol: "🌱",
          type1:
            "Guards its values like a secret garden, erecting imaginative fences that prevent social demands from trampling creative seedlings.",
          type2:
            "Uses anticipatory insight to sidestep impending conflicts, subtly guiding circumstances toward harmonious outcomes before friction escalates.",
        },
        {
          symbol: "🌊",
          type1:
            "Emotions pool beneath a tranquil surface; when stirred, expression pours out through poetry, music, or intimate confession rather than public display.",
          type2:
            "Absorbs the emotional spectrum of others like a tuning fork, then re-emits a calming resonance that grants people permission to process safely.",
        },
        {
          symbol: "🛤️",
          type1:
            "Rejects social scripts that betray self-authorship, happily trading convention for authenticity even if that means walking a solitary path.",
          type2:
            "Assumes a quiet shepherd role, nudging groups toward cohesive cooperation through gentle observations and symbolic storytelling.",
        },
        {
          symbol: "🎁",
          type1:
            "Offers humanity rich, heartfelt narratives that illuminate universal truths through singular, intimate detail.",
          type2:
            "Presents visionary mentorship, distilling complex emotional and strategic insights into actionable wisdom.",
        },
      ],
    },
    {
      title: "ISTP vs ISTJ",
      type1: "ISTP",
      type2: "ISTJ",
      rows: [
        {
          symbol: "🔧",
          type1:
            "<strong>Ti ⚙️ + Se 👁️</strong> (Accuracy + Sensation) enables instinctive deconstruction of physical systems—motors, code, or crises—seeking the cleanest fix.",
          type2:
            "<strong>Si 📚 + Te ⚡</strong> (Memory + Effectiveness) indexes a detailed archive of procedures and historical data to deliver consistent, risk-averse solutions.",
        },
        {
          symbol: "🛠️",
          type1:
            "Childhood curiosity drives literal trial-and-error: dismantling gadgets, hacking rules, or engaging extreme sports to map the limits of mechanics and the body.",
          type2:
            "Early reliance on precedent builds an intuitive manual for life; proven checklists and institutional knowledge form a sturdy safety net.",
        },
        {
          symbol: "😐",
          type1:
            "Keeps affect neutral until adrenaline or intellectual intrigue trips an internal switch, unleashing laser-focused engagement.",
          type2:
            "Exhibits understated loyalty; emotions manifest as dutiful service and methodical follow-through rather than overt sentiment.",
        },
        {
          symbol: "📜",
          type1:
            "Views bureaucracy as red tape best avoided or streamlined; appreciates autonomy where improvisation can outpace protocol.",
          type2:
            "Regards structured policy as the backbone of quality control, willingly enduring paperwork to protect institutional integrity.",
        },
        {
          symbol: "🎁",
          type1:
            "Provides surgical, on-the-spot troubleshooting—whether disarming a technical glitch or neutralizing a volatile scenario.",
          type2:
            "Delivers procedural dependability, preserving institutional memory and minimizing preventable errors through meticulous rigor.",
        },
      ],
    },
    {
      title: "ISFP vs ISFJ",
      type1: "ISFP",
      type2: "ISFJ",
      rows: [
        {
          symbol: "🎨",
          type1:
            "Guided by <strong>Fi 🌈</strong> (Authenticity), the ISFP channels emotion into tactile artistry—design, culinary craft, dance—turning feelings into sensory experiences.",
          type2:
            "Anchored by <strong>Si 📚</strong> (Memory), the ISFJ protects tradition and community lore, weaving personal attention into every helpful gesture.",
        },
        {
          symbol: "🛤️",
          type1:
            "Follows an inner compass that prizes spontaneity over calendars; projects launch when inspiration strikes and pause when the muse sleeps.",
          type2:
            "Secures belonging through consistent acts of service: remembering preferences, maintaining rituals, and ensuring everyone's logistical comfort.",
        },
        {
          symbol: "🌼",
          type1:
            "Expresses emotion via aesthetics—color palettes, melodies, or fashion—inviting others into a vivid, sensory dialogue.",
          type2:
            "Radiates gentle compassion, offering attentive listening and pragmatic caretaking instead of dramatic displays.",
        },
        {
          symbol: "⚡",
          type1:
            "Chafes at rigid rules that stifle creative flow; may quietly rebel or exit environments where artistry feels boxed in.",
          type2:
            "Upholds communal norms, interpreting protocol as a safeguard for collective well-being rather than a constraint on individuality.",
        },
        {
          symbol: "🎁",
          type1:
            "Enriches culture with authentic, sensory-rich expressions that celebrate individuality and present-moment awareness.",
          type2:
            "Offers reliable, nurturing stability, preserving emotional continuity and practical order for family, teams, and institutions.",
        },
      ],
    },
    {
      title: "ESTP vs ESTJ",
      type1: "ESTP",
      type2: "ESTJ",
      rows: [
        {
          symbol: "🏃‍♂️",
          type1:
            "Drives action through <strong>Se 👁️</strong> (Sensation); thrives on high-resolution data from the immediate environment, enabling split-second pivots and persuasive charm.",
          type2:
            "Operates via <strong>Te ⚡</strong> (Effectiveness); structures workflows, assigns roles, and enforces metrics to move projects from initiation to completion with brisk certainty.",
        },
        {
          symbol: "🎲",
          type1:
            "Relishes improvisation—reading the room, flipping risk into opportunity, and leveraging momentum to outmaneuver slower movers.",
          type2:
            "Strategically pre-plans, building Gantt charts and contingency matrices so that unpredictable variables have minimal disruptive impact.",
        },
        {
          symbol: "😎",
          type1:
            "Projects laid-back confidence, inviting camaraderie while defusing tension through humor and visible competence.",
          type2:
            "Commands respect through a no-nonsense demeanor; warmth is expressed via safeguarding the team's tangible interests.",
        },
        {
          symbol: "🚧",
          type1:
            "Views rules as pliable—tools to bend for efficiency or excitement as long as real-time results improve.",
          type2:
            "Sees rules as non-negotiable guardrails; will rewrite them officially if necessary, but never ignores them outright.",
        },
        {
          symbol: "🎁",
          type1:
            "Supplies live-wire adaptability, crisis triage, and kinetic encouragement that keeps collective energy high.",
          type2:
            "Provides organizational muscle, transforming vague goals into structured operations and predictable deliverables.",
        },
      ],
    },
    {
      title: "ESFP vs ESFJ",
      type1: "ESFP",
      type2: "ESFJ",
      rows: [
        {
          symbol: "🎉",
          type1:
            "Leads with <strong>Se 👁️</strong> (Sensation), diving into sights, sounds, tastes, and textures with full-bodied enthusiasm that transforms ordinary moments into celebrations.",
          type2:
            "Leads with <strong>Fe 👥</strong> (Harmony), monitoring group sentiment minute-by-minute and adjusting social choreography to keep atmospheres welcoming.",
        },
        {
          symbol: "🌟",
          type1:
            "Seeks novelty—new cities, events, or creative ventures—to feed sensory curiosity and accumulate stories worth retelling.",
          type2:
            "Focuses on continuity—birthdays remembered, traditions upheld, shared meals prepared—to weave stability from daily kindness.",
        },
        {
          symbol: "💬",
          type1:
            "Speaks in spontaneous, animated bursts that prioritize authenticity over politeness, making conversations feel unfiltered and alive.",
          type2:
            "Adapts tone and vocabulary to audience, smoothing edges and amplifying warmth so everyone feels respected and included.",
        },
        {
          symbol: "🕺",
          type1:
            "Questions authority instinctively, testing limits to protect individual freedom and inject spontaneity into rigid contexts.",
          type2:
            "Respects legitimate authority structures as anchors of group security; will lobby within the system rather than bypass it.",
        },
        {
          symbol: "🎁",
          type1:
            "Radiates contagious joy, inspiring others to savor the present and embrace experiential learning.",
          type2:
            "Provides reliable hospitality—thoughtful hosting, emotional check-ins, and practical support that make communities feel like home.",
        },
      ],
    },
  ];

  return (
    <div class="app">
      <Header />
      <main class="main-content">
        <div class="container" id="types">
          <h1>Sister Types and their respective strategies</h1>
          <p>A sister type has judging and perceiving swapped.</p>
          <p>
            To clarify: a brother type has extroversion/introversion swapped
            instead
          </p>

          {/* Map through each type comparison and render a TypeTable */}
          {typeComparisons.map((comparison) => (
            <TypeTable
              title={comparison.title}
              type1={comparison.type1}
              type2={comparison.type2}
              rows={comparison.rows}
            />
          ))}
        </div>

        {/* About section */}
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;