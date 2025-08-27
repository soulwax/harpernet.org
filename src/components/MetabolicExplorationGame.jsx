// File: src/components/MetabolicExplorationGame.jsx

import { createMemo, createSignal, For, Show } from "solid-js";
import styles from "./MetabolicExplorationGame.module.css";

const MetabolicExplorationGame = () => {
    // Game state
    const [currentQuestionIndex, setCurrentQuestionIndex] = createSignal(0);
    const [answers, setAnswers] = createSignal([]);
    const [showResults, setShowResults] = createSignal(false);
    const [hoveredChoice, setHoveredChoice] = createSignal(null);

    // Metaphorical questions that indirectly reveal metabolic patterns
    const questions = [
        {
            id: "garden-growth",
            scenario: "You discover an ancient garden where time moves differently. The plants seem to respond to your presence.",
            prompt: "How do you tend this temporal garden?",
            choices: [
                {
                    text: "Study the patterns of light and shadow, mapping how each corner ages differently",
                    weights: { Si: 3, Ni: 2, "density": 2 }
                },
                {
                    text: "Orchestrate a symphony of growth, pruning and watering to achieve a grand design",
                    weights: { Te: 3, Ni: 1, "conducting": 3 }
                },
                {
                    text: "Let curiosity guide you to taste strange fruits and follow glowing insects",
                    weights: { Ne: 3, Se: 1, "expansion": 2 }
                },
                {
                    text: "Cultivate the essence of each plant, understanding what makes it truly itself",
                    weights: { Ti: 2, Fi: 2, "revision": 2 }
                }
            ]
        },
        {
            id: "river-crossing",
            scenario: "A river of liquid mercury flows before you, its surface showing glimpses of possible futures and forgotten pasts.",
            prompt: "The ferryman offers you passage, but demands you choose your vessel:",
            choices: [
                {
                    text: "A boat that remembers every journey it has taken, humming with accumulated wisdom",
                    weights: { Si: 3, Pi: 2, "density": 3 }
                },
                {
                    text: "A raft that dissolves and reforms with each wave, always becoming something new",
                    weights: { Ne: 3, Pe: 2, "revision": 3 }
                },
                {
                    text: "A bridge that builds itself as you walk, each step calculated and purposeful",
                    weights: { Te: 3, Je: 2, "conducting": 2 }
                },
                {
                    text: "A vessel that moves by feeling the river's deepest currents and hidden emotions",
                    weights: { Fe: 2, Fi: 2, Ni: 1 }
                }
            ]
        },
        {
            id: "echo-chamber",
            scenario: "In a crystalline cave, every sound creates visible patterns in the air that linger and evolve.",
            prompt: "You must compose a message that will echo through eternity. How do you craft it?",
            choices: [
                {
                    text: "Layer harmonies that build upon themselves, each echo adding depth to the original",
                    weights: { Ji: 2, Pi: 2, "density": 3 }
                },
                {
                    text: "Release a cascade of varied tones, watching them scatter and transform unpredictably",
                    weights: { Pe: 3, "expansion": 3, Ne: 2 }
                },
                {
                    text: "Conduct a precise sequence that guides future echoes toward a specific resonance",
                    weights: { Je: 3, "conducting": 3, Te: 1 }
                },
                {
                    text: "Whisper truths that change their meaning with each reflection, always revealing more",
                    weights: { Ji: 2, Pe: 1, "revision": 3 }
                }
            ]
        },
        {
            id: "clockwork-city",
            scenario: "A city of gears and pendulums where every action ripples through the mechanical ecosystem.",
            prompt: "The Keeper offers you control of one mechanism. Which do you choose?",
            choices: [
                {
                    text: "The central governor that maintains the rhythm of all other systems",
                    weights: { Te: 3, Si: 1, "conducting": 3 }
                },
                {
                    text: "The wild gear that introduces controlled chaos, preventing stagnation",
                    weights: { Ne: 3, "expansion": 2, Pe: 2 }
                },
                {
                    text: "The memory drum that records and replays the city's operational history",
                    weights: { Si: 3, "density": 2, Pi: 2 }
                },
                {
                    text: "The empathy engine that senses when components are strained and adjusts accordingly",
                    weights: { Fe: 3, "revision": 1, Ji: 1 }
                }
            ]
        },
        {
            id: "dream-weaver",
            scenario: "You find a loom that weaves dreams into reality. The threads shimmer between possible and actual.",
            prompt: "What pattern do you weave into existence?",
            choices: [
                {
                    text: "A tapestry where each thread perfectly complements its neighbors in inevitable harmony",
                    weights: { Ti: 2, Ni: 2, "density": 2 }
                },
                {
                    text: "An ever-shifting fabric that responds to the observer's deepest needs",
                    weights: { Fe: 3, Ne: 1, "revision": 2 }
                },
                {
                    text: "A bold design that manifests your will upon the world, thread by deliberate thread",
                    weights: { Te: 2, Se: 2, "conducting": 2 }
                },
                {
                    text: "A web of infinite connections where pulling one thread reveals ten more possibilities",
                    weights: { Ne: 3, "expansion": 3, Pe: 1 }
                }
            ]
        },
        {
            id: "mirror-maze",
            scenario: "A labyrinth of mirrors that show not your reflection, but your cognitive shadows.",
            prompt: "You must choose which reflection to follow deeper into the maze:",
            choices: [
                {
                    text: "The shadow that moves before you think, always knowing the next turn",
                    weights: { Ni: 3, "conducting": 2, Pi: 2 }
                },
                {
                    text: "The fractal reflection that splits into infinite variations of possibility",
                    weights: { Ne: 3, "expansion": 3, Pe: 2 }
                },
                {
                    text: "The solid shadow that remembers every path you've taken before",
                    weights: { Si: 3, "density": 3, Pi: 1 }
                },
                {
                    text: "The reflection that harmonizes all the others into a unified dance",
                    weights: { Fe: 2, Ti: 1, "revision": 2 }
                }
            ]
        },
        {
            id: "element-forge",
            scenario: "An ancient forge where thoughts become elements and emotions become alloys.",
            prompt: "The Master Smith asks you to create a tool for navigating reality. What do you forge?",
            choices: [
                {
                    text: "A compass that points not north, but toward the most efficient path",
                    weights: { Te: 3, "conducting": 3, Je: 2 }
                },
                {
                    text: "A prism that reveals the hidden spectra in everyday moments",
                    weights: { Ni: 2, Ne: 2, "revision": 2 }
                },
                {
                    text: "An anchor that grounds you to accumulated truth and tested wisdom",
                    weights: { Si: 3, Ti: 1, "density": 3 }
                },
                {
                    text: "Wings that catch every current of change and possibility",
                    weights: { Ne: 3, Se: 1, "expansion": 3 }
                }
            ]
        },
        {
            id: "song-stones",
            scenario: "Seven stones sing in harmony, but one has fallen silent. Each stone resonates with a different aspect of existence.",
            prompt: "To restore the harmony, which stone's song do you amplify?",
            choices: [
                {
                    text: "The stone that sings of what has always been true and always will be",
                    weights: { Ti: 3, Si: 1, "density": 2 }
                },
                {
                    text: "The stone that improvises new melodies with each listener",
                    weights: { Ne: 2, Fe: 1, "expansion": 2 }
                },
                {
                    text: "The stone that conducts the others, maintaining the rhythm of the whole",
                    weights: { Te: 2, "conducting": 3, Je: 2 }
                },
                {
                    text: "The stone that remembers every song ever sung in its presence",
                    weights: { Si: 3, "density": 2, Fi: 1 }
                }
            ]
        }
    ];

    // Function to calculate metabolic profile
    const calculateProfile = () => {
        const profile = {
            functions: { Ti: 0, Te: 0, Fi: 0, Fe: 0, Ni: 0, Ne: 0, Si: 0, Se: 0, Ji: 0, Je: 0, Pi: 0, Pe: 0 },
            dynamics: { revision: 0, conducting: 0, density: 0, expansion: 0 }
        };

        answers().forEach(answer => {
            Object.entries(answer.weights).forEach(([key, value]) => {
                if (profile.functions[key] !== undefined) {
                    profile.functions[key] += value;
                } else if (profile.dynamics[key] !== undefined) {
                    profile.dynamics[key] += value;
                }
            });
        });

        return profile;
    };

    // Interpret the metabolic profile
    const interpretProfile = createMemo(() => {
        if (!showResults()) return null;

        const profile = calculateProfile();

        // Find dominant functions
        const sortedFunctions = Object.entries(profile.functions)
            .filter(([key]) => !['Ji', 'Je', 'Pi', 'Pe'].includes(key))
            .sort((a, b) => b[1] - a[1]);

        // Find dominant dynamic
        const sortedDynamics = Object.entries(profile.dynamics)
            .sort((a, b) => b[1] - a[1]);

        const primaryFunction = sortedFunctions[0];
        const secondaryFunction = sortedFunctions[1];
        const primaryDynamic = sortedDynamics[0];

        // Generate interpretation
        const functionDescriptions = {
            Ti: "logical precision and systematic understanding",
            Te: "efficient execution and objective results",
            Fi: "authentic values and inner harmony",
            Fe: "collective harmony and emotional connection",
            Ni: "symbolic vision and pattern recognition",
            Ne: "innovative connections and possibilities",
            Si: "embodied memory and sensory detail",
            Se: "immediate engagement and sensory impact"
        };

        const dynamicDescriptions = {
            revision: "constantly refining and reconsidering, cycling between essence and exploration",
            conducting: "orchestrating steady progress through careful mapping and execution",
            density: "deepening understanding through concentrated focus and layered meaning",
            expansion: "rapidly generating and implementing new possibilities without hesitation"
        };

        return {
            primary: primaryFunction,
            secondary: secondaryFunction,
            dynamic: primaryDynamic,
            functionDesc: functionDescriptions,
            dynamicDesc: dynamicDescriptions
        };
    });

    // Handle answer selection
    const selectAnswer = (choice) => {
        setAnswers([...answers(), choice]);

        if (currentQuestionIndex() < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex() + 1);
        } else {
            setShowResults(true);
        }
    };

    // Reset game
    const resetGame = () => {
        setCurrentQuestionIndex(0);
        setAnswers([]);
        setShowResults(false);
    };

    return (
        <div class={styles.gameContainer}>
            <Show
                when={!showResults()}
                fallback={
                    <div class={styles.results}>
                        <h2 class={styles.resultsTitle}>Your Metabolic Landscape</h2>

                        <div class={styles.profileCard}>
                            <div class={styles.functionProfile}>
                                <h3>Primary Resonance</h3>
                                <div class={styles.primaryFunction}>
                                    {interpretProfile().primary[0]}: {interpretProfile().functionDesc[interpretProfile().primary[0]]}
                                </div>
                                <div class={styles.secondaryFunction}>
                                    Supporting: {interpretProfile().secondary[0]} - {interpretProfile().functionDesc[interpretProfile().secondary[0]]}
                                </div>
                            </div>

                            <div class={styles.dynamicProfile}>
                                <h3>Metabolic Pattern</h3>
                                <div class={styles.primaryDynamic}>
                                    Your cognitive metabolism tends toward <strong>{interpretProfile().dynamic[0]}</strong>:
                                    {interpretProfile().dynamicDesc[interpretProfile().dynamic[0]]}
                                </div>
                            </div>

                            <div class={styles.interpretation}>
                                <p>
                                    Your responses reveal a mind that navigates reality through {interpretProfile().functionDesc[interpretProfile().primary[0]]},
                                    while {interpretProfile().dynamicDesc[interpretProfile().dynamic[0]]}.
                                    This creates a unique cognitive signature that shapes how you process experience and make meaning.
                                </p>
                            </div>
                        </div>

                        <button onClick={resetGame} class={styles.resetButton}>
                            Explore Again
                        </button>
                    </div>
                }
            >
                <div class={styles.questionContainer}>
                    <div class={styles.progress}>
                        <div
                            class={styles.progressBar}
                            style={`width: ${((currentQuestionIndex() + 1) / questions.length) * 100}%`}
                        />
                        <span class={styles.progressText}>
                            Question {currentQuestionIndex() + 1} of {questions.length}
                        </span>
                    </div>

                    <div class={styles.scenario}>
                        {questions[currentQuestionIndex()].scenario}
                    </div>

                    <div class={styles.prompt}>
                        {questions[currentQuestionIndex()].prompt}
                    </div>

                    <div class={styles.choices}>
                        <For each={questions[currentQuestionIndex()].choices}>
                            {(choice, index) => (
                                <button
                                    class={styles.choice}
                                    onClick={() => selectAnswer(choice)}
                                    onMouseEnter={() => setHoveredChoice(index())}
                                    onMouseLeave={() => setHoveredChoice(null)}
                                    style={hoveredChoice() === index() ? "transform: translateX(10px);" : ""}
                                >
                                    <span class={styles.choiceNumber}>{index() + 1}</span>
                                    <span class={styles.choiceText}>{choice.text}</span>
                                </button>
                            )}
                        </For>
                    </div>
                </div>
            </Show>
        </div>
    );
};

export default MetabolicExplorationGame;