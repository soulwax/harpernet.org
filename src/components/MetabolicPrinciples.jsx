// File: src/components/MetabolicPrinciples.jsx

import { createSignal, onMount } from "solid-js";
import styles from "./MetabolicPrinciples.module.css";

const MetabolicPrinciples = () => {
    const [metabolicData, setMetabolicData] = createSignal(null);
    const [activeSection, setActiveSection] = createSignal("overview");
    const [loading, setLoading] = createSignal(true);

    onMount(async () => {
        try {
            const response = await fetch("/src/data/metabolicPrinciples.json");
            const data = await response.json();
            setMetabolicData(data);
            setLoading(false);
        } catch (error) {
            console.error("Error loading metabolic principles data:", error);
            setLoading(false);
        }
    });

    const renderSection = () => {
        const data = metabolicData();
        if (!data) return null;

        switch (activeSection()) {
            case "overview":
                return renderOverview(data);
            case "applications":
                return renderApplications(data.practicalApplications);
            case "development":
                return renderDevelopment(data.developmentalTrajectories);
            case "research":
                return renderResearch(data.researchValidation);
            default:
                return renderOverview(data);
        }
    };

    const renderOverview = (data) => (
        <div class={styles.sectionContent}>
            <h2>Metabolic Information Processing</h2>
            <div class={styles.introText}>
                <p>
                    Information metabolism theory, developed by Antoni Kępiński and integrated with Jungian psychology,
                    describes how individuals process and metabolize information from their environment. This framework
                    provides scientific understanding of cognitive function preferences and their manifestation in
                    personality types.
                </p>
            </div>

            <div class={styles.principleGrid}>
                <div class={styles.principleCard}>
                    <h3>🧠 Neural Basis</h3>
                    <p>
                        Modern neuroscience validates metabolic principles through brain imaging studies showing
                        distinct neural network activation patterns for different cognitive functions.
                    </p>
                </div>

                <div class={styles.principleCard}>
                    <h3>⚖️ Energy Conservation</h3>
                    <p>
                        The brain conserves energy by developing efficient pathways for preferred information
                        processing styles, creating stable metabolic patterns throughout life.
                    </p>
                </div>

                <div class={styles.principleCard}>
                    <h3>🔄 Dynamic Integration</h3>
                    <p>
                        Healthy development involves integrating all functions while maintaining efficiency
                        in preferred metabolic pathways for optimal psychological functioning.
                    </p>
                </div>

                <div class={styles.principleCard}>
                    <h3>🌱 Developmental Stages</h3>
                    <p>
                        Metabolic patterns emerge in childhood, strengthen in adolescence, and continue
                        evolving throughout the lifespan with proper support and development.
                    </p>
                </div>
            </div>
        </div>
    );

    const renderApplications = (applications) => (
        <div class={styles.sectionContent}>
            <h2>Practical Applications</h2>

            <div class={styles.applicationSection}>
                <h3>🏢 Organizational Psychology</h3>
                <div class={styles.applicationContent}>
                    <h4>Team Composition</h4>
                    <p>{applications.organizationalPsychology.teamOptimization.description}</p>
                    <div class={styles.strategiesList}>
                        {applications.organizationalPsychology.teamOptimization.strategies.map((strategy) => (
                            <div class={styles.strategyItem}>{strategy}</div>
                        ))}
                    </div>

                    <h4>Measured Benefits</h4>
                    <div class={styles.benefitsList}>
                        {applications.organizationalPsychology.teamOptimization.measuredBenefits.map((benefit) => (
                            <div class={styles.benefitItem}>{benefit}</div>
                        ))}
                    </div>
                </div>
            </div>

            <div class={styles.applicationSection}>
                <h3>🎓 Educational Applications</h3>
                <div class={styles.applicationContent}>
                    <h4>Learning Optimization</h4>
                    <p>{applications.educationalApplications.learningOptimization.description}</p>
                    <div class={styles.approachesList}>
                        {applications.educationalApplications.learningOptimization.approaches.map((approach) => (
                            <div class={styles.approachItem}>{approach}</div>
                        ))}
                    </div>
                    <div class={styles.researchNote}>
                        <strong>Research Finding:</strong> {applications.educationalApplications.learningOptimization.research}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderDevelopment = (development) => (
        <div class={styles.sectionContent}>
            <h2>{development.title}</h2>
            <p class={styles.sectionDescription}>{development.description}</p>

            <div class={styles.stagesContainer}>
                <div class={styles.stageCard}>
                    <h3>👶 Childhood ({development.stages.childhood.ages})</h3>
                    <p><strong>Characteristics:</strong> {development.stages.childhood.characteristics}</p>
                    <p><strong>Development Focus:</strong> {development.stages.childhood.development_focus}</p>

                    <h4>Support Strategies:</h4>
                    <div class={styles.strategiesList}>
                        {development.stages.childhood.support_strategies.map((strategy) => (
                            <div class={styles.strategyItem}>{strategy}</div>
                        ))}
                    </div>

                    <div class={styles.challengesBox}>
                        <strong>Common Challenges:</strong> {development.stages.childhood.common_challenges}
                    </div>
                </div>

                <div class={styles.stageCard}>
                    <h3>🧑‍🎓 Adolescence ({development.stages.adolescence.ages})</h3>
                    <p><strong>Characteristics:</strong> {development.stages.adolescence.characteristics}</p>
                    <p><strong>Development Focus:</strong> {development.stages.adolescence.development_focus}</p>

                    <h4>Support Strategies:</h4>
                    <div class={styles.strategiesList}>
                        {development.stages.adolescence.support_strategies.map((strategy) => (
                            <div class={styles.strategyItem}>{strategy}</div>
                        ))}
                    </div>

                    <div class={styles.challengesBox}>
                        <strong>Common Challenges:</strong> {development.stages.adolescence.common_challenges}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderResearch = (research) => (
        <div class={styles.sectionContent}>
            <h2>{research.title}</h2>
            <p class={styles.sectionDescription}>{research.description}</p>

            <div class={styles.researchSection}>
                <h3>🧬 Neuroscience Studies</h3>

                <div class={styles.studyCategory}>
                    <h4>Brain Imaging Research</h4>
                    <div class={styles.studyList}>
                        {research.neuroscienceStudies.brainImaging.map((study) => (
                            <div class={styles.studyItem}>{study}</div>
                        ))}
                    </div>
                </div>

                <div class={styles.studyCategory}>
                    <h4>Key Findings</h4>
                    <div class={styles.findingsList}>
                        {research.neuroscienceStudies.findings.map((finding) => (
                            <div class={styles.findingItem}>{finding}</div>
                        ))}
                    </div>
                </div>

                <div class={styles.implicationBox}>
                    <strong>Implications:</strong> {research.neuroscienceStudies.implications}
                </div>
            </div>

            <div class={styles.researchSection}>
                <h3>🔬 Psychological Studies</h3>

                <div class={styles.studyCategory}>
                    <h4>Longitudinal Research</h4>
                    <div class={styles.studyList}>
                        {research.psychologicalStudies.longitudinalResearch.map((study) => (
                            <div class={styles.studyItem}>{study}</div>
                        ))}
                    </div>
                </div>

                <div class={styles.studyCategory}>
                    <h4>Cross-Cultural Validation</h4>
                    <div class={styles.studyList}>
                        {research.psychologicalStudies.crossCulturalValidation.map((study) => (
                            <div class={styles.studyItem}>{study}</div>
                        ))}
                    </div>
                </div>
            </div>

            <div class={styles.researchSection}>
                <h3>🏥 Clinical Applications</h3>
                <div class={styles.clinicalList}>
                    {research.clinicalApplicationStudies.map((study) => (
                        <div class={styles.clinicalItem}>{study}</div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div class={styles.metabolicContainer}>
            <div class={styles.header}>
                <h1>Metabolic Information Processing Principles</h1>
                <p class={styles.subtitle}>
                    Scientific foundations of cognitive function preferences and personality type development
                </p>
            </div>

            <nav class={styles.sectionNav}>
                <button
                    onClick={() => setActiveSection("overview")}
                    class={`${styles.navButton} ${activeSection() === "overview" ? styles.activeNav : ""}`}
                >
                    🌟 Overview
                </button>
                <button
                    onClick={() => setActiveSection("applications")}
                    class={`${styles.navButton} ${activeSection() === "applications" ? styles.activeNav : ""}`}
                >
                    🛠️ Applications
                </button>
                <button
                    onClick={() => setActiveSection("development")}
                    class={`${styles.navButton} ${activeSection() === "development" ? styles.activeNav : ""}`}
                >
                    📈 Development
                </button>
                <button
                    onClick={() => setActiveSection("research")}
                    class={`${styles.navButton} ${activeSection() === "research" ? styles.activeNav : ""}`}
                >
                    🔬 Research
                </button>
            </nav>

            <div class={styles.content}>
                {loading() ? (
                    <div class={styles.loading}>Loading metabolic principles...</div>
                ) : (
                    renderSection()
                )}
            </div>
        </div>
    );
};

export default MetabolicPrinciples;