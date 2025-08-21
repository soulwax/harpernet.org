// File: src/components/MetabolicPrinciples.jsx

import { createSignal, createMemo } from "solid-js";
import styles from "./MetabolicPrinciples.module.css";
import metabolicData from "../data/metabolicPrinciples.json";

const MetabolicPrinciples = () => {
    const [selectedSection, setSelectedSection] = createSignal("principles");
    const [selectedFunction, setSelectedFunction] = createSignal(null);
    const [selectedDynamic, setSelectedDynamic] = createSignal(null);
    const [selectedQuadra, setSelectedQuadra] = createSignal(null);

    const sections = [
        { key: "principles", label: "Core Principles", icon: "🧠" },
        { key: "processes", label: "Fundamental Processes", icon: "⚙️" },
        { key: "orientations", label: "Orientations", icon: "🔄" },
        { key: "attitudes", label: "Attitude Processes", icon: "🎯" },
        { key: "ontology", label: "Ontological Registrations", icon: "🌐" },
        { key: "functions", label: "Specific Functions", icon: "🔧" },
        { key: "dynamics", label: "Inter-Function Dynamics", icon: "⚡" },
        { key: "quadras", label: "Quadras", icon: "🎭" }
    ];

    const functionColors = {
        Ti: "#4A90E2",
        Te: "#2E5BBA",
        Fi: "#E74C3C",
        Fe: "#C0392B",
        Ni: "#8E44AD",
        Ne: "#9B59B6",
        Si: "#27AE60",
        Se: "#F39C12"
    };

    const resetSelections = () => {
        setSelectedFunction(null);
        setSelectedDynamic(null);
        setSelectedQuadra(null);
    };

    const handleSectionChange = (section) => {
        setSelectedSection(section);
        resetSelections();
    };

    return (
        <div class={styles.container}>
            <div class={styles.header}>
                <h1 class={styles.title}>Cognitive Type Metabolism</h1>
                <p class={styles.subtitle}>
                    A comprehensive framework for understanding how cognitive functions process
                    information through metabolic pathways
                </p>
            </div>

            <div class={styles.navigation}>
                {sections.map((section) => (
                    <button
                        class={`${styles.navButton} ${selectedSection() === section.key ? styles.activeNav : ""
                            }`}
                        onClick={() => handleSectionChange(section.key)}
                    >
                        <span class={styles.navIcon}>{section.icon}</span>
                        {section.label}
                    </button>
                ))}
            </div>

            <div class={styles.content}>
                {/* Core Principles */}
                {selectedSection() === "principles" && (
                    <div class={styles.section}>
                        <h2 class={styles.sectionTitle}>🧠 Core Metabolic Principles</h2>
                        <div class={styles.principlesGrid}>
                            {Object.entries(metabolicData.metabolicPrinciples.coreAxioms).map(([key, principle]) => (
                                <div class={styles.principleCard}>
                                    <h3 class={styles.principleTitle}>{principle.title}</h3>
                                    <p class={styles.principleDescription}>{principle.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Fundamental Processes */}
                {selectedSection() === "processes" && (
                    <div class={styles.section}>
                        <h2 class={styles.sectionTitle}>⚙️ Fundamental Processes</h2>
                        <div class={styles.processesGrid}>
                            {Object.entries(metabolicData.fundamentalProcesses).map(([key, process]) => (
                                <div class={styles.processCard}>
                                    <h3 class={styles.processTitle}>{process.name}</h3>
                                    <p class={styles.processDescription}>{process.description}</p>
                                    <div class={styles.processMeta}>
                                        <div class={styles.functions}>
                                            <strong>Functions:</strong> {process.functions.join(", ")}
                                        </div>
                                        <div class={styles.principle}>
                                            <strong>Principle:</strong> {process.principle}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Orientations */}
                {selectedSection() === "orientations" && (
                    <div class={styles.section}>
                        <h2 class={styles.sectionTitle}>🔄 Cognitive Orientations</h2>
                        <div class={styles.orientationsGrid}>
                            {Object.entries(metabolicData.orientations).map(([key, orientation]) => (
                                <div class={styles.orientationCard}>
                                    <h3 class={styles.orientationTitle}>
                                        {orientation.name} <span class={styles.symbol}>({orientation.symbol})</span>
                                    </h3>
                                    <p class={styles.orientationDescription}>{orientation.description}</p>
                                    <div class={styles.orientationMeta}>
                                        <div><strong>Mechanism:</strong> {orientation.mechanism}</div>
                                        <div><strong>Effect:</strong> {orientation.effect}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Attitude Processes */}
                {selectedSection() === "attitudes" && (
                    <div class={styles.section}>
                        <h2 class={styles.sectionTitle}>🎯 Attitude Processes</h2>
                        <div class={styles.attitudesGrid}>
                            {Object.entries(metabolicData.attitudeProcesses).map(([key, attitude]) => (
                                <div class={styles.attitudeCard}>
                                    <h3 class={styles.attitudeTitle}>{attitude.name}</h3>
                                    <div class={styles.attitudeFunctions}>
                                        {attitude.functions.map(func => (
                                            <span
                                                class={styles.functionBadge}
                                                style={{ "background-color": functionColors[func] }}
                                            >
                                                {func}
                                            </span>
                                        ))}
                                    </div>
                                    <p class={styles.attitudeDescription}>{attitude.description}</p>
                                    {attitude.examples && (
                                        <div class={styles.examples}>
                                            <strong>Examples:</strong> {attitude.examples.join(", ")}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Ontological Registrations */}
                {selectedSection() === "ontology" && (
                    <div class={styles.section}>
                        <h2 class={styles.sectionTitle}>🌐 Ontological Registrations</h2>
                        <div class={styles.ontologyGrid}>
                            {Object.entries(metabolicData.ontologicalRegistrations).map(([key, registration]) => (
                                <div class={styles.ontologyCard}>
                                    <h3 class={styles.ontologyTitle}>{registration.name}</h3>
                                    <div class={styles.ontologyFunctions}>
                                        {registration.functions.map(func => (
                                            <span
                                                class={styles.functionBadge}
                                                style={{ "background-color": functionColors[func] }}
                                            >
                                                {func}
                                            </span>
                                        ))}
                                    </div>
                                    <p class={styles.ontologyDescription}>{registration.description}</p>
                                    <div class={styles.ontologyMeta}>
                                        {registration.evaluation && (
                                            <div><strong>Evaluation:</strong> {registration.evaluation}</div>
                                        )}
                                        <div><strong>Characteristic:</strong> {registration.characteristic}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Specific Functions */}
                {selectedSection() === "functions" && (
                    <div class={styles.section}>
                        <h2 class={styles.sectionTitle}>🔧 Specific Functions</h2>
                        <div class={styles.functionsGrid}>
                            {Object.entries(metabolicData.specificFunctions).map(([funcKey, func]) => (
                                <div
                                    class={`${styles.functionCard} ${selectedFunction() === funcKey ? styles.selectedFunction : ""
                                        }`}
                                    onClick={() => setSelectedFunction(selectedFunction() === funcKey ? null : funcKey)}
                                >
                                    <h3
                                        class={styles.functionTitle}
                                        style={{ color: functionColors[funcKey] }}
                                    >
                                        {func.name}
                                    </h3>
                                    <p class={styles.functionDescription}>{func.description}</p>
                                    <div class={styles.functionMeta}>
                                        <div><strong>Mechanism:</strong> {func.mechanism}</div>
                                        <div><strong>Effect:</strong> {func.effect}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Inter-Function Dynamics */}
                {selectedSection() === "dynamics" && (
                    <div class={styles.section}>
                        <h2 class={styles.sectionTitle}>⚡ Inter-Function Dynamics</h2>
                        <p class={styles.dynamicsIntro}>{metabolicData.interFunctionDynamics.definition}</p>
                        <div class={styles.dynamicsGrid}>
                            {Object.entries(metabolicData.interFunctionDynamics.dynamics).map(([key, dynamic]) => (
                                <div
                                    class={`${styles.dynamicCard} ${selectedDynamic() === key ? styles.selectedDynamic : ""
                                        }`}
                                    onClick={() => setSelectedDynamic(selectedDynamic() === key ? null : key)}
                                >
                                    <h3 class={styles.dynamicTitle}>{dynamic.name}</h3>
                                    <div class={styles.dynamicFunctions}>
                                        {dynamic.functions.map(func => (
                                            <span
                                                class={styles.functionBadge}
                                                style={{ "background-color": functionColors[func] }}
                                            >
                                                {func}
                                            </span>
                                        ))}
                                    </div>
                                    <p class={styles.dynamicDescription}>{dynamic.description}</p>
                                    {dynamic.example && (
                                        <div class={styles.dynamicExample}>
                                            <strong>Example:</strong> {dynamic.example}
                                        </div>
                                    )}
                                    <div class={styles.outcomes}>
                                        <div class={styles.positiveOutcome}>
                                            <strong>✓ Positive:</strong> {dynamic.outcomes.positive}
                                        </div>
                                        <div class={styles.negativeOutcome}>
                                            <strong>✗ Negative:</strong> {dynamic.outcomes.negative}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Quadras */}
                {selectedSection() === "quadras" && (
                    <div class={styles.section}>
                        <h2 class={styles.sectionTitle}>🎭 Quadras</h2>
                        <div class={styles.quadrasGrid}>
                            {Object.entries(metabolicData.quadras).map(([key, quadra]) => (
                                <div
                                    class={`${styles.quadraCard} ${selectedQuadra() === key ? styles.selectedQuadra : ""
                                        }`}
                                    onClick={() => setSelectedQuadra(selectedQuadra() === key ? null : key)}
                                >
                                    <h3 class={styles.quadraTitle}>{quadra.name}</h3>
                                    <div class={styles.quadraAxes}>
                                        <strong>Axes:</strong> {quadra.axes.join(" × ")}
                                    </div>
                                    <div class={styles.quadraTypes}>
                                        <strong>Types:</strong> {quadra.types.join(", ")}
                                    </div>
                                    <div class={styles.quadraDynamics}>
                                        <div class={styles.primaryDynamics}>
                                            <h4>Primary Dynamics</h4>
                                            {Object.entries(quadra.dynamics.primary).map(([name, funcs]) => (
                                                <div class={styles.dynamicItem}>
                                                    <strong>{name}:</strong> {funcs}
                                                </div>
                                            ))}
                                        </div>
                                        <div class={styles.secondaryDynamics}>
                                            <h4>Secondary Dynamics</h4>
                                            {Object.entries(quadra.dynamics.secondary).map(([name, funcs]) => (
                                                <div class={styles.dynamicItem}>
                                                    <strong>{name}:</strong> {funcs}
                                                </div>
                                            ))}
                                        </div>
                                        <div class={styles.compoundEffects}>
                                            <h4>Compound Effects</h4>
                                            <div class={styles.compounds}>
                                                {quadra.dynamics.compound.map(compound => (
                                                    <span class={styles.compoundBadge}>{compound}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p class={styles.quadraDescription}>{quadra.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MetabolicPrinciples;