// File: src/components/Relationships.jsx

import { createMemo, createSignal } from "solid-js";
import styles from "./Relationships.module.css";

// Import the data directly
import relationshipsData from "../data/relationships.json";

const Relationships = () => {
    const [selectedType1, setSelectedType1] = createSignal("");
    const [selectedType2, setSelectedType2] = createSignal("");
    const [selectedRelationshipType, setSelectedRelationshipType] = createSignal("");

    // All 16 MBTI types
    const allTypes = Object.keys(relationshipsData.types);

    // Get cognitive function by number
    const getCognitiveFunctionName = (num) => {
        const functions = relationshipsData.cognitive_functions;
        return Object.keys(functions).find(key => functions[key] === num) || num;
    };

    // Get relationship between two types
    const getRelationship = createMemo(() => {
        if (!selectedType1() || !selectedType2()) return null;

        const type1 = selectedType1();
        const type2 = selectedType2();

        // Check each relationship type
        for (const [relType, relationships] of Object.entries(relationshipsData.relationships)) {
            const match = relationships.find(rel =>
                (rel.type1 === type1 && rel.type2 === type2) ||
                (rel.type1 === type2 && rel.type2 === type1)
            );
            if (match) {
                return {
                    type: relType,
                    description: relationshipsData.relationship_descriptions[relType],
                    arrows: match.arrows,
                    isReversed: rel.type1 === type2 && rel.type2 === type1
                };
            }
        }
        return null;
    });

    // Get all relationships of a specific type
    const getRelationshipsByType = (relType) => {
        return relationshipsData.relationships[relType] || [];
    };

    // Function stack display
    const getFunctionStack = (type) => {
        return relationshipsData.types[type] || [];
    };

    return (
        <div class={styles.relationshipsContainer} id="relationships">
            <div class={styles.introSection}>
                <h1>MBTI Type Relationships</h1>

                <div class={styles.explanationBox}>
                    <h3>Understanding Type Relationships</h3>
                    <p>
                        Type relationships in MBTI theory describe how different personality types interact with each other based on their cognitive function stacks. Each relationship type has distinct characteristics that influence communication, compatibility, and dynamics between individuals.
                    </p>
                    <p>
                        This comprehensive analysis covers all 16 relationship types, from the ideal complement of Duality to the challenging dynamics of Conflict relationships. Use the tools below to explore specific type pairings or browse relationships by category.
                    </p>
                </div>
            </div>

            {/* Type Comparison Tool */}
            <div class={styles.comparisonTool}>
                <h2>Type Relationship Analyzer</h2>
                <div class={styles.typeSelectors}>
                    <div class={styles.selectorGroup}>
                        <label for="type1-select">First Type:</label>
                        <select
                            id="type1-select"
                            class={styles.typeSelect}
                            value={selectedType1()}
                            onChange={(e) => setSelectedType1(e.target.value)}
                        >
                            <option value="">Select Type 1</option>
                            {allTypes.map(type => (
                                <option value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                    <div class={styles.selectorGroup}>
                        <label for="type2-select">Second Type:</label>
                        <select
                            id="type2-select"
                            class={styles.typeSelect}
                            value={selectedType2()}
                            onChange={(e) => setSelectedType2(e.target.value)}
                        >
                            <option value="">Select Type 2</option>
                            {allTypes.map(type => (
                                <option value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {getRelationship() && (
                    <div class={styles.relationshipResult}>
                        <div class={styles.relationshipHeader}>
                            <h3>{selectedType1()} & {selectedType2()}</h3>
                            <div class={styles.relationshipType}>
                                <span class={styles.relationshipLabel}>
                                    {getRelationship().type.replace(/_/g, ' ').toUpperCase()}
                                </span>
                            </div>
                        </div>
                        <p class={styles.relationshipDescription}>
                            {getRelationship().description}
                        </p>

                        {/* Function Stack Comparison */}
                        <div class={styles.functionComparison}>
                            <div class={styles.functionStack}>
                                <h4>{selectedType1()} Functions</h4>
                                <div class={styles.functionList}>
                                    {getFunctionStack(selectedType1()).map((funcNum, index) => (
                                        <div class={styles.functionItem}>
                                            <span class={styles.functionPosition}>{index + 1}</span>
                                            <span class={styles.functionName}>
                                                {getCognitiveFunctionName(funcNum)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div class={styles.functionStack}>
                                <h4>{selectedType2()} Functions</h4>
                                <div class={styles.functionList}>
                                    {getFunctionStack(selectedType2()).map((funcNum, index) => (
                                        <div class={styles.functionItem}>
                                            <span class={styles.functionPosition}>{index + 1}</span>
                                            <span class={styles.functionName}>
                                                {getCognitiveFunctionName(funcNum)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Relationship Types Browser */}
            <div class={styles.relationshipBrowser}>
                <h2>Browse by Relationship Type</h2>
                <div class={styles.relationshipSelector}>
                    <select
                        class={styles.relationshipSelect}
                        value={selectedRelationshipType()}
                        onChange={(e) => setSelectedRelationshipType(e.target.value)}
                    >
                        <option value="">Select Relationship Type</option>
                        {Object.keys(relationshipsData.relationships).map(relType => (
                            <option value={relType}>
                                {relType.replace(/_/g, ' ').toUpperCase()}
                            </option>
                        ))}
                    </select>
                </div>

                {selectedRelationshipType() && (
                    <div class={styles.relationshipGrid}>
                        <div class={styles.relationshipTypeInfo}>
                            <h3>{selectedRelationshipType().replace(/_/g, ' ').toUpperCase()}</h3>
                            <p>{relationshipsData.relationship_descriptions[selectedRelationshipType()]}</p>
                        </div>
                        <div class={styles.relationshipPairs}>
                            {getRelationshipsByType(selectedRelationshipType()).map(rel => (
                                <div class={styles.relationshipPair}>
                                    <div class={styles.pairTypes}>
                                        <span class={styles.pairType}>{rel.type1}</span>
                                        <span class={styles.pairConnector}>↔</span>
                                        <span class={styles.pairType}>{rel.type2}</span>
                                    </div>
                                    <button
                                        class={styles.analyzeButton}
                                        onClick={() => {
                                            setSelectedType1(rel.type1);
                                            setSelectedType2(rel.type2);
                                        }}
                                    >
                                        Analyze
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Relationship Types Overview */}
            <div class={styles.overviewSection}>
                <h2>Relationship Types Overview</h2>
                <div class={styles.relationshipTypes}>
                    {Object.entries(relationshipsData.relationship_descriptions).map(([type, description]) => (
                        <div class={styles.relationshipTypeCard}>
                            <h4>{type.replace(/_/g, ' ').toUpperCase()}</h4>
                            <p>{description}</p>
                            <button
                                class={styles.exploreButton}
                                onClick={() => setSelectedRelationshipType(type)}
                            >
                                Explore Examples
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Relationships;