// File: src/components/BrotherTypes.jsx

import { createSignal } from "solid-js";
import styles from "./BrotherTypes.module.css";
import TypeTable from "./TypeTable";

const BrotherTypes = () => {
  // onMount(() => {
  //   // Small delay to ensure DOM is ready
  //   setTimeout(() => window.scrollTo(0, 0), 50);
  // });

  // Define the data for each brother type comparison
  const brotherTypeComparisons = [
    {
      title: "ENTP vs INTP",
      type1: "ENTP",
      type2: "INTP",
      rows: [
        {
          symbol: "🧠",
          type1:
            "Primary cognitive drivers: <strong>Ne 🎯 + Ti ⚙️</strong> (Exploration + Accuracy). The ENTP thrives on connecting disparate ideas from the external world, then analyzing them through an internal logical framework.",
          type2:
            "Primary cognitive drivers: <strong>Ti ⚙️ + Ne 🎯</strong> (Accuracy + Exploration). The INTP first builds precise internal logical systems, then tests them against external possibilities and connections.",
        },
        {
          symbol: "🗣️",
          type1:
            "Verbally agile debater who actively seeks intellectual sparring partners to refine ideas and discover new perspectives through energetic external engagement.",
          type2:
            "Introspective theorist who deeply analyzes concepts internally before selectively sharing refined conclusions with those who appreciate the logical journey.",
        },
        {
          symbol: "🌍",
          type1:
            "Scans the environment for possibilities and connections, energized by brainstorming with others and improvising solutions in real-time collaborative settings.",
          type2:
            "Prefers solitary deep dives into complex problems, meticulously examining each angle internally before engaging with the external world's input.",
        },
        {
          symbol: "⏱️",
          type1:
            "Shorter, more frequent bursts of intense intellectual energy directed at multiple evolving projects, pivoting quickly between them as inspiration strikes.",
          type2:
            "Extended periods of concentrated focus on fewer subjects, with deeper, more exhaustive analysis before moving to new intellectual territory.",
        },
        {
          symbol: "🎁",
          type1:
            "Contributes innovative disruption, challenging group assumptions through provocative questions and championing unconventional approaches with persuasive enthusiasm.",
          type2:
            "Offers architectural precision, crafting comprehensive theoretical frameworks and identifying logical inconsistencies that others miss in their reasoning.",
        },
      ],
    },
    {
      title: "ENTJ vs INTJ",
      type1: "ENTJ",
      type2: "INTJ",
      rows: [
        {
          symbol: "🧠",
          type1:
            "Primary cognitive drivers: <strong>Te ⚡ + Ni 🔮</strong> (Effectiveness + Perspectives). The ENTJ focuses on implementing efficient external systems based on their strategic internal vision.",
          type2:
            "Primary cognitive drivers: <strong>Ni 🔮 + Te ⚡</strong> (Perspectives + Effectiveness). The INTJ prioritizes developing comprehensive internal visions before efficiently executing them externally.",
        },
        {
          symbol: "👑",
          type1:
            "Natural commander who directly assumes leadership positions, making decisive structural changes and mobilizing teams toward concrete strategic objectives.",
          type2:
            "Strategic architect who often influences from advisory positions, designing systems and offering crucial insights that guide leadership decisions.",
        },
        {
          symbol: "📣",
          type1:
            "Verbally direct and authoritative, clearly articulating expectations and readily providing feedback to optimize collective performance.",
          type2:
            "Selectively communicative, sharing meticulously developed insights only when they meet an internal threshold of relevance and value.",
        },
        {
          symbol: "⚡",
          type1:
            "Drives rapid implementation of ideas through external organizing, creating momentum through clear directives and performance metrics.",
          type2:
            "Prioritizes thorough internal analysis and strategic foresight before committing resources, ensuring plans are comprehensive before execution.",
        },
        {
          symbol: "🎁",
          type1:
            "Contributes decisive leadership during complex transitions, efficiently restructuring systems and motivating teams to achieve ambitious strategic objectives.",
          type2:
            "Offers penetrating strategic foresight, identifying critical patterns and developing contingency plans that anticipate multiple future scenarios.",
        },
      ],
    },
    {
      title: "ENFP vs INFP",
      type1: "ENFP",
      type2: "INFP",
      rows: [
        {
          symbol: "🧠",
          type1:
            "Primary cognitive drivers: <strong>Ne 💭 + Fi 🌈</strong> (Exploration + Authenticity). The ENFP generates possibilities in the external world, filtering them through internal values.",
          type2:
            "Primary cognitive drivers: <strong>Fi 🌈 + Ne 💭</strong> (Authenticity + Exploration). The INFP first consults their internal value compass, then explores how those values might manifest externally.",
        },
        {
          symbol: "🌟",
          type1:
            "Enthusiastic catalyst who sparks creative energy in group settings, drawing others into their vision through animated storytelling and inclusive brainstorming.",
          type2:
            "Gentle idealist who nurtures their inner garden of values, selectively sharing authentic expressions with those who demonstrate genuine appreciation.",
        },
        {
          symbol: "💬",
          type1:
            "Verbally expressive, processing thoughts externally through animated conversation and seeking immediate feedback from various perspectives.",
          type2:
            "Reflective communicator who carefully crafts expressions that authentically represent their complex inner emotional landscape.",
        },
        {
          symbol: "🔍",
          type1:
            "Explores breadth of human experience through multiple relationships and activities, connecting diverse people and creating vibrant social networks.",
          type2:
            "Examines depth of human experience through profound personal reflection and selective, meaningful connections with kindred spirits.",
        },
        {
          symbol: "🎁",
          type1:
            "Contributes infectious enthusiasm that inspires collective action, spotting hidden potential in others and championing innovative approaches to human connection.",
          type2:
            "Offers authentic emotional resonance and moral clarity, creating spaces where vulnerability is honored and individual uniqueness is celebrated.",
        },
      ],
    },
    {
      title: "ENFJ vs INFJ",
      type1: "ENFJ",
      type2: "INFJ",
      rows: [
        {
          symbol: "🧠",
          type1:
            "Primary cognitive drivers: <strong>Fe 👥 + Ni 🔮</strong> (Harmony + Perspectives). The ENFJ focuses on orchestrating group harmony guided by their internal vision of human potential.",
          type2:
            "Primary cognitive drivers: <strong>Ni 🔮 + Fe 👥</strong> (Perspectives + Harmony). The INFJ develops profound internal insights about people before selectively engaging to facilitate growth.",
        },
        {
          symbol: "👐",
          type1:
            "Proactive community builder who initiates transformative group experiences, creating structured opportunities for people to connect and develop together.",
          type2:
            "Perceptive guide who offers individualized insights, preferring one-on-one or small group settings where deeper personal transformation can occur.",
        },
        {
          symbol: "🔄",
          type1:
            "Actively shapes social environments, reading and responding to emotional currents in real-time to maintain group cohesion and forward progress.",
          type2:
            "Observes social dynamics with penetrating insight, selectively intervening at pivotal moments with carefully considered perspective that realigns understanding.",
        },
        {
          symbol: "🗣️",
          type1:
            "Communicates with warm charisma designed to inspire and unify, articulating shared values and modeling the emotional tone needed for group success.",
          type2:
            "Speaks with quiet conviction from a place of deep reflection, offering metaphorical insights that invite others into new perspectives.",
        },
        {
          symbol: "🎁",
          type1:
            "Contributes organizational empathy that mobilizes communities toward collaborative achievement, ensuring everyone feels valued in a collective mission.",
          type2:
            "Offers profound insight into human patterns and motivations, creating bridges of understanding that help resolve complex interpersonal challenges.",
        },
      ],
    },
    {
      title: "ESTP vs ISTP",
      type1: "ESTP",
      type2: "ISTP",
      rows: [
        {
          symbol: "🧠",
          type1:
            "Primary cognitive drivers: <strong>Se 👁️ + Ti ⚙️</strong> (Sensation + Accuracy). The ESTP engages directly with immediate physical realities, then analyzes findings with internal logic.",
          type2:
            "Primary cognitive drivers: <strong>Ti ⚙️ + Se 👁️</strong> (Accuracy + Sensation). The ISTP prioritizes internal logical understanding before tactically engaging with the physical environment.",
        },
        {
          symbol: "🚀",
          type1:
            "Action-oriented opportunist who thrives when actively responding to emerging situations, making split-second decisions based on environmental feedback.",
          type2:
            "Analytical troubleshooter who observes extensively before intervening, pinpointing the precise moment when minimal effort will yield maximum impact.",
        },
        {
          symbol: "🔧",
          type1:
            "Approaches problems through hands-on interaction and visible experimentation, learning by doing and adapting strategies based on immediate results.",
          type2:
            "Deconstructs problems internally first, mentally testing solutions before implementing the most efficient and elegant approach with precision.",
        },
        {
          symbol: "👥",
          type1:
            "Engages actively with groups, reading and responding to social dynamics with charismatic energy that naturally draws others into collaborative action.",
          type2:
            "Operates independently with selective engagement, contributing specialized expertise at critical junctures while maintaining personal autonomy.",
        },
        {
          symbol: "🎁",
          type1:
            "Contributes pragmatic resourcefulness during high-pressure situations, improvising effective solutions using whatever tools and resources are immediately available.",
          type2:
            "Offers precision intervention at critical moments, applying deep technical understanding to resolve complex mechanical, logical, or tactical challenges.",
        },
      ],
    },
    {
      title: "ESTJ vs ISTJ",
      type1: "ESTJ",
      type2: "ISTJ",
      rows: [
        {
          symbol: "🧠",
          type1:
            "Primary cognitive drivers: <strong>Te ⚡ + Si 📚</strong> (Effectiveness + Memory). The ESTJ implements structured external systems based on proven methods and established procedures.",
          type2:
            "Primary cognitive drivers: <strong>Si 📚 + Te ⚡</strong> (Memory + Effectiveness). The ISTJ first verifies information against internal archived knowledge before implementing methodical solutions.",
        },
        {
          symbol: "📋",
          type1:
            "Proactive systems organizer who establishes clear protocols and accountability measures, directly addressing inefficiencies through structural improvements.",
          type2:
            "Meticulous verifier who ensures accuracy and completeness, methodically cross-referencing information against established standards before proceeding.",
        },
        {
          symbol: "👨‍💼",
          type1:
            "Leads through direct oversight and clear expectations, creating environments where responsibilities are explicitly defined and consistently enforced.",
          type2:
            "Provides stability through reliable expertise and thorough follow-through, establishing themselves as a trustworthy authority on procedural matters.",
        },
        {
          symbol: "🔄",
          type1:
            "Drives implementation of standardized processes across organizations, readily providing corrective feedback to maintain operational consistency.",
          type2:
            "Preserves institutional knowledge and ensures continuity, meticulously documenting procedures and safeguarding against potential errors or omissions.",
        },
        {
          symbol: "🎁",
          type1:
            "Contributes practical leadership that establishes functional order from chaos, creating sustainable systems that reliably produce consistent results.",
          type2:
            "Offers dependable diligence that ensures critical details are properly managed, providing the foundational accuracy upon which organizational integrity rests.",
        },
      ],
    },
    {
      title: "ESFP vs ISFP",
      type1: "ESFP",
      type2: "ISFP",
      rows: [
        {
          symbol: "🧠",
          type1:
            "Primary cognitive drivers: <strong>Se 👁️ + Fi 🌈</strong> (Sensation + Authenticity). The ESFP directly engages with sensory experiences, evaluating them through the lens of personal values.",
          type2:
            "Primary cognitive drivers: <strong>Fi 🌈 + Se 👁️</strong> (Authenticity + Sensation). The ISFP filters experiences through deeply held values before responding to the sensory environment.",
        },
        {
          symbol: "✨",
          type1:
            "Vibrant performer who naturally attracts attention, transforming everyday moments into memorable experiences through spontaneous expression and inclusive energy.",
          type2:
            "Gentle artist who creates subtle yet profound impressions, expressing deeply personal values through carefully crafted aesthetic choices and authentic moments.",
        },
        {
          symbol: "🌈",
          type1:
            "Communicates through animated expression and interactive engagement, reading and responding to audience feedback with adaptable, in-the-moment adjustments.",
          type2:
            "Conveys meaning through nuanced symbolism and personalized expression, revealing carefully selected glimpses of their rich inner emotional landscape.",
        },
        {
          symbol: "🎭",
          type1:
            "Seeks variety and stimulation through active participation in diverse social settings, bringing lightness and enthusiasm that elevates collective mood.",
          type2:
            "Pursues authenticity through selective immersion in personally meaningful experiences, creating harmonious spaces aligned with core aesthetic values.",
        },
        {
          symbol: "🎁",
          type1:
            "Contributes celebratory energy that brings people together through shared enjoyment, finding practical ways to make the present moment more vivid and engaging.",
          type2:
            "Offers authentic expression that honors individual experience, creating personal connections through genuine appreciation of unique beauty and emotional truth.",
        },
      ],
    },
    {
      title: "ESFJ vs ISFJ",
      type1: "ESFJ",
      type2: "ISFJ",
      rows: [
        {
          symbol: "🧠",
          type1:
            "Primary cognitive drivers: <strong>Fe 👥 + Si 📚</strong> (Harmony + Memory). The ESFJ actively maintains social cohesion by upholding valued traditions and meeting others' needs.",
          type2:
            "Primary cognitive drivers: <strong>Si 📚 + Fe 👥</strong> (Memory + Harmony). The ISFJ first ensures reliability and continuity before quietly addressing others' needs and comfort.",
        },
        {
          symbol: "🏠",
          type1:
            "Community connector who actively identifies and fulfills group needs, creating inclusive gatherings and openly acknowledging others' contributions.",
          type2:
            "Behind-the-scenes supporter who provides consistent practical care, noticing and addressing individual needs with thoughtful attention to personal preferences.",
        },
        {
          symbol: "🤝",
          type1:
            "Establishes and maintains social networks through regular outreach and organized activities, keeping people connected through shared traditions and celebrations.",
          type2:
            "Creates safe, comfortable spaces through reliable presence and accumulated knowledge of individual preferences, offering stability during transitions or challenges.",
        },
        {
          symbol: "💬",
          type1:
            "Communicates warmly and expressively, actively facilitating conversations that include everyone and reinforce shared values and social bonds.",
          type2:
            "Listens attentively and speaks thoughtfully, sharing carefully considered perspectives and gently preserving relational harmony through diplomatic phrasing.",
        },
        {
          symbol: "🎁",
          type1:
            "Contributes social cohesion that unites communities around shared values, ensuring everyone feels welcomed and their contributions are publicly appreciated.",
          type2:
            "Offers steadfast support that provides essential stability, maintaining crucial systems and traditions while attending to often-overlooked practical and emotional needs.",
        },
      ],
    },
  ];

  // Create a signal to toggle showing all comparisons or just the main categories
  const [showDetailed, setShowDetailed] = createSignal(true);

  return (
    <div class={styles.brotherTypesContainer} id="brother-types">
      <div class={styles.introSection}>
        <h1>Brother Types and their respective strategies</h1>
        <h2>A brother type has extraversion and introversion swapped.</h2>
        <h2>
          To clarify: a sister type has judging and perceiving swapped instead
        </h2>

        <div class={styles.explanationBox}>
          <h3>How Brother Types Work</h3>
          <p>
            Brother types in MBTI share the same cognitive functions but with
            opposite orientations (extraverted vs. introverted).
          </p>
          <ol class={styles.criteriaList}>
            <li>Primary cognitive drivers and their expression</li>
            <li>Characteristic approaches to problem-solving and engagement</li>
            <li>
              Information processing and communication styles, esp. emotional
            </li>
            <li>Energy management and focus patterns</li>
            <li>Distinctive contributions to teams and communities</li>
          </ol>
        </div>

        <div class={styles.controlsContainer}>
          <button
            class={styles.toggleButton}
            onClick={() => setShowDetailed(!showDetailed())}
          >
            {showDetailed() ? "Show Summary View" : "Show Detailed View"}
          </button>
        </div>
      </div>

      {/* Map through each type comparison and render a TypeTable */}
      {brotherTypeComparisons.map((comparison) => (
        <TypeTable
          title={comparison.title}
          type1={comparison.type1}
          type2={comparison.type2}
          rows={comparison.rows}
          detailed={showDetailed()}
        />
      ))}
    </div>
  );
};

export default BrotherTypes;
