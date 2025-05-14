// File: src/pages/HomePage.jsx

import TypeTable from "../components/TypeTable";
import About from "../components/About";
import "../index.css";

const HomePage = () => {
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
    /* Remaining type comparisons omitted for brevity, unchanged from the original */
  ];

  return (
    <>
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
    </>
  );
};

export default HomePage;
