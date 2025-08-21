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

    // Safe data access with error handling
    const safeMetabolicData = createMemo(() => {
        if (!metabolicData || typeof metabolicData !== 'object') {
            console.warn('Metabolic data is missing or invalid');
            return {
                metabolicPrinciples: { coreAxioms: {} },
                fundamentalProcesses: {},
                orientations: {},
                attitudeProcesses: {},
                ontologicalRegistrations: {},
                specificFunctions: {},
                interFunctionDynamics: { definition: '', dynamics: {} },
                quadras: {}
            };
        }
        return metabolicData;
    });

    // Function color helper with fallback
    const getFunctionColor = (func) => {
        if (functionColors[func]) return functionColors[func];
        // Handle compound functions like "Ji", "Pe"
        if (func.includes('i')) return '#6c757d';
        if (func.includes('e')) return '#9c9c9c';
        return '#6c757d'; // Default fallback
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

    const handleKeyNavigation = (event, section) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleSectionChange(section);
        }
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

            <div class={styles.navigation} role="tablist" aria-label="Metabolic framework sections">
                {sections.map((section) => (
                    <button
                        key={section.key}
                        class={`${styles.navButton} ${selectedSection() === section.key ? styles.activeNav : ""}`}
                        onClick={() => handleSectionChange(section.key)}
                        onKeyDown={(e) => handleKeyNavigation(e, section.key)}
                        aria-pressed={selectedSection() === section.key}
                        aria-controls={`section-${section.key}`}
                        role="tab"
                        tabIndex={selectedSection() === section.key ? 0 : -1}
                    >
                        <span class={styles.navIcon} aria-hidden="true">{section.icon}</span>
                        {section.label}
                    </button>
                ))}
            </div>

            <div class={styles.content}>
                {/* Core Principles */}
                {selectedSection() === "principles" && (
                    <div class={styles.section} id="section-principles" role="tabpanel">
                        <h2 class={styles.sectionTitle}>🧠 Core Metabolic Principles</h2>
                        <div class={styles.principlesGrid}>
                            {Object.entries(safeMetabolicData().metabolicPrinciples?.coreAxioms || {}).map(([key, principle]) => (
                                <div key={key} class={styles.principleCard}>
                                    <h3 class={styles.principleTitle}>{principle?.title || 'Untitled Principle'}</h3>
                                    <p class={styles.principleDescription}>{principle?.description || 'No description available'}</p>
                                    {principle?.source && (
                                        <div class={styles.source}>
                                            <strong>Source:</strong> {principle.source}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Fundamental Processes */}
                {selectedSection() === "processes" && (
                    <div class={styles.section} id="section-processes" role="tabpanel">
                        <h2 class={styles.sectionTitle}>⚙️ Fundamental Processes</h2>
                        <div class={styles.processesGrid}>
                            {Object.entries(safeMetabolicData().fundamentalProcesses || {}).map(([key, process]) => (
                                <div key={key} class={styles.processCard}>
                                    <h3 class={styles.processTitle}>{process?.name || 'Unnamed Process'}</h3>
                                    <p class={styles.processDescription}>{process?.description || 'No description available'}</p>
                                    <div class={styles.processMeta}>
                                        {process?.functions && (
                                            <div class={styles.functions}>
                                                <strong>Functions:</strong> {process.functions.join(", ")}
                                            </div>
                                        )}
                                        {process?.principle && (
                                            <div class={styles.principle}>
                                                <strong>Principle:</strong> {process.principle}
                                            </div>
                                        )}
                                        {process?.source && (
                                            <div class={styles.source}>
                                                <strong>Source:</strong> {process.source}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Orientations */}
                {selectedSection() === "orientations" && (
                    <div class={styles.section} id="section-orientations" role="tabpanel">
                        <h2 class={styles.sectionTitle}>🔄 Cognitive Orientations</h2>
                        <div class={styles.orientationsGrid}>
                            {Object.entries(safeMetabolicData().orientations || {}).map(([key, orientation]) => (
                                <div key={key} class={styles.orientationCard}>
                                    <h3 class={styles.orientationTitle}>
                                        {orientation?.name || 'Unnamed Orientation'}
                                        {orientation?.symbol && <span class={styles.symbol}>({orientation.symbol})</span>}
                                    </h3>
                                    <p class={styles.orientationDescription}>{orientation?.description || 'No description available'}</p>
                                    <div class={styles.orientationMeta}>
                                        {orientation?.mechanism && <div><strong>Mechanism:</strong> {orientation.mechanism}</div>}
                                        {orientation?.effect && <div><strong>Effect:</strong> {orientation.effect}</div>}
                                        {orientation?.source && (
                                            <div class={styles.source}>
                                                <strong>Source:</strong> {orientation.source}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Attitude Processes */}
                {selectedSection() === "attitudes" && (
                    <div class={styles.section} id="section-attitudes" role="tabpanel">
                        <h2 class={styles.sectionTitle}>🎯 Attitude Processes</h2>
                        <div class={styles.attitudesGrid}>
                            {Object.entries(safeMetabolicData().attitudeProcesses || {}).map(([key, attitude]) => (
                                <div key={key} class={styles.attitudeCard}>
                                    <h3 class={styles.attitudeTitle}>{attitude?.name || 'Unnamed Attitude'}</h3>
                                    {attitude?.functions && (
                                        <div class={styles.attitudeFunctions}>
                                            {attitude.functions.map(func => (
                                                <span
                                                    key={func}
                                                    class={styles.functionBadge}
                                                    style={{ "background-color": getFunctionColor(func) }}
                                                >
                                                    {func}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <p class={styles.attitudeDescription}>{attitude?.description || 'No description available'}</p>
                                    {attitude?.examples && (
                                        <div class={styles.examples}>
                                            <strong>Examples:</strong> {attitude.examples.join(", ")}
                                        </div>
                                    )}
                                    {attitude?.source && (
                                        <div class={styles.source}>
                                            <strong>Source:</strong> {attitude.source}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Ontological Registrations */}
                {selectedSection() === "ontology" && (
                    <div class={styles.section} id="section-ontology" role="tabpanel">
                        <h2 class={styles.sectionTitle}>🌐 Ontological Registrations</h2>
                        <div class={styles.ontologyGrid}>
                            {Object.entries(safeMetabolicData().ontologicalRegistrations || {}).map(([key, registration]) => (
                                <div key={key} class={styles.ontologyCard}>
                                    <h3 class={styles.ontologyTitle}>{registration?.name || 'Unnamed Registration'}</h3>
                                    {registration?.functions && (
                                        <div class={styles.ontologyFunctions}>
                                            {registration.functions.map(func => (
                                                <span
                                                    key={func}
                                                    class={styles.functionBadge}
                                                    style={{ "background-color": getFunctionColor(func) }}
                                                >
                                                    {func}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <p class={styles.ontologyDescription}>{registration?.description || 'No description available'}</p>
                                    <div class={styles.ontologyMeta}>
                                        {registration?.evaluation && (
                                            <div><strong>Evaluation:</strong> {registration.evaluation}</div>
                                        )}
                                        {registration?.characteristic && (
                                            <div><strong>Characteristic:</strong> {registration.characteristic}</div>
                                        )}
                                        {registration?.source && (
                                            <div class={styles.source}>
                                                <strong>Source:</strong> {registration.source}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Specific Functions */}
                {selectedSection() === "functions" && (
                    <div class={styles.section} id="section-functions" role="tabpanel">
                        <h2 class={styles.sectionTitle}>🔧 Specific Functions</h2>
                        <div class={styles.functionsGrid}>
                            {Object.entries(safeMetabolicData().specificFunctions || {}).map(([funcKey, func]) => (
                                <div
                                    key={funcKey}
                                    class={`${styles.functionCard} ${selectedFunction() === funcKey ? styles.selectedFunction : ""}`}
                                    onClick={() => setSelectedFunction(selectedFunction() === funcKey ? null : funcKey)}
                                    role="button"
                                    tabIndex="0"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            setSelectedFunction(selectedFunction() === funcKey ? null : funcKey);
                                        }
                                    }}
                                    aria-expanded={selectedFunction() === funcKey}
                                >
                                    <h3
                                        class={styles.functionTitle}
                                        style={{ color: getFunctionColor(funcKey) }}
                                    >
                                        {func?.name || `Function ${funcKey}`}
                                    </h3>
                                    <p class={styles.functionDescription}>{func?.description || 'No description available'}</p>
                                    <div class={styles.functionMeta}>
                                        {func?.mechanism && <div><strong>Mechanism:</strong> {func.mechanism}</div>}
                                        {func?.effect && <div><strong>Effect:</strong> {func.effect}</div>}
                                        {func?.source && (
                                            <div class={styles.source}>
                                                <strong>Source:</strong> {func.source}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Inter-Function Dynamics */}
                {selectedSection() === "dynamics" && (
                    <div class={styles.section} id="section-dynamics" role="tabpanel">
                        <h2 class={styles.sectionTitle}>⚡ Inter-Function Dynamics</h2>
                        <p class={styles.dynamicsIntro}>
                            {safeMetabolicData().interFunctionDynamics?.definition || 'Dynamics information not available'}
                        </p>
                        <div class={styles.dynamicsGrid}>
                            {Object.entries(safeMetabolicData().interFunctionDynamics?.dynamics || {}).map(([key, dynamic]) => (
                                <div
                                    key={key}
                                    class={`${styles.dynamicCard} ${selectedDynamic() === key ? styles.selectedDynamic : ""}`}
                                    onClick={() => setSelectedDynamic(selectedDynamic() === key ? null : key)}
                                    role="button"
                                    tabIndex="0"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            setSelectedDynamic(selectedDynamic() === key ? null : key);
                                        }
                                    }}
                                    aria-expanded={selectedDynamic() === key}
                                >
                                    <h3 class={styles.dynamicTitle}>{dynamic?.name || 'Unnamed Dynamic'}</h3>
                                    {dynamic?.functions && (
                                        <div class={styles.dynamicFunctions}>
                                            {dynamic.functions.map(func => (
                                                <span
                                                    key={func}
                                                    class={styles.functionBadge}
                                                    style={{ "background-color": getFunctionColor(func) }}
                                                >
                                                    {func}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <p class={styles.dynamicDescription}>{dynamic?.description || 'No description available'}</p>
                                    {dynamic?.example && (
                                        <div class={styles.dynamicExample}>
                                            <strong>Example:</strong> {dynamic.example}
                                        </div>
                                    )}
                                    {dynamic?.outcomes && (
                                        <div class={styles.outcomes}>
                                            {dynamic.outcomes.positive && (
                                                <div class={styles.positiveOutcome}>
                                                    <strong>✓ Positive:</strong> {dynamic.outcomes.positive}
                                                </div>
                                            )}
                                            {dynamic.outcomes.negative && (
                                                <div class={styles.negativeOutcome}>
                                                    <strong>✗ Negative:</strong> {dynamic.outcomes.negative}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    {dynamic?.source && (
                                        <div class={styles.source}>
                                            <strong>Source:</strong> {dynamic.source}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Quadras */}
                {selectedSection() === "quadras" && (
                    <div class={styles.section} id="section-quadras" role="tabpanel">
                        <h2 class={styles.sectionTitle}>🎭 Quadras</h2>
                        <div class={styles.quadrasGrid}>
                            {Object.entries(safeMetabolicData().quadras || {}).map(([key, quadra]) => (
                                <div
                                    key={key}
                                    class={`${styles.quadraCard} ${selectedQuadra() === key ? styles.selectedQuadra : ""}`}
                                    onClick={() => setSelectedQuadra(selectedQuadra() === key ? null : key)}
                                    role="button"
                                    tabIndex="0"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            setSelectedQuadra(selectedQuadra() === key ? null : key);
                                        }
                                    }}
                                    aria-expanded={selectedQuadra() === key}
                                >
                                    <h3 class={styles.quadraTitle}>{quadra?.name || 'Unnamed Quadra'}</h3>
                                    {quadra?.axes && (
                                        <div class={styles.quadraAxes}>
                                            <strong>Axes:</strong> {quadra.axes.join(" × ")}
                                        </div>
                                    )}
                                    {quadra?.types && (
                                        <div class={styles.quadraTypes}>
                                            <strong>Types:</strong> {quadra.types.join(", ")}
                                        </div>
                                    )}
                                    {quadra?.dynamics && (
                                        <div class={styles.quadraDynamics}>
                                            {quadra.dynamics.primary && (
                                                <div class={styles.primaryDynamics}>
                                                    <h4>Primary Dynamics</h4>
                                                    {Object.entries(quadra.dynamics.primary).map(([name, funcs]) => (
                                                        <div key={name} class={styles.dynamicItem}>
                                                            <strong>{name}:</strong> {funcs}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                            {quadra.dynamics.secondary && (
                                                <div class={styles.secondaryDynamics}>
                                                    <h4>Secondary Dynamics</h4>
                                                    {Object.entries(quadra.dynamics.secondary).map(([name, funcs]) => (
                                                        <div key={name} class={styles.dynamicItem}>
                                                            <strong>{name}:</strong> {funcs}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                            {quadra.dynamics.compound && (
                                                <div class={styles.compoundEffects}>
                                                    <h4>Compound Effects</h4>
                                                    <div class={styles.compounds}>
                                                        {quadra.dynamics.compound.map(compound => (
                                                            <span key={compound} class={styles.compoundBadge}>{compound}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    <p class={styles.quadraDescription}>{quadra?.description || 'No description available'}</p>
                                    {quadra?.source && (
                                        <div class={styles.source}>
                                            <strong>Source:</strong> {quadra.source}
                                        </div>
                                    )}
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
