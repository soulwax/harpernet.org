// File: src/components/MetabolicExplorationGame.jsx

import { createMemo, createSignal, For, Show } from 'solid-js';
import gameData from '../data/metabolicGameData.json';
import styles from './MetabolicExplorationGame.module.css';

const MetabolicExplorationGame = () => {
  // Game state
  const [currentQuestionIndex, setCurrentQuestionIndex] = createSignal(0);
  const [answers, setAnswers] = createSignal([]);
  const [showResults, setShowResults] = createSignal(false);
  const [hoveredChoice, setHoveredChoice] = createSignal(null);
  const [selectedQuestions, setSelectedQuestions] = createSignal([]);

  // Randomise all questions
  const initializeQuestions = () => {
    const shuffled = [...gameData.questions].sort(() => Math.random() - 0.5);
    setSelectedQuestions(shuffled.slice(0, shuffled.length)); // Use all questions (slice is exclusive toward the end parameter)
  };

  if (selectedQuestions().length === 0) {
    initializeQuestions();
  }

  const questions = selectedQuestions();

  // Function to calculate metabolic profile
  const calculateProfile = () => {
    const profile = {
      functions: {
        Ti: 0,
        Te: 0,
        Fi: 0,
        Fe: 0,
        Ni: 0,
        Ne: 0,
        Si: 0,
        Se: 0,
        Ji: 0,
        Je: 0,
        Pi: 0,
        Pe: 0,
      },
      dynamics: { revision: 0, conducting: 0, density: 0, expansion: 0 },
    };

    answers().forEach((answer) => {
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
    const sortedDynamics = Object.entries(profile.dynamics).sort((a, b) => b[1] - a[1]);

    const primaryFunction = sortedFunctions[0];
    const secondaryFunction = sortedFunctions[1];
    const primaryDynamic = sortedDynamics[0];

    // Generate interpretation
    const functionDescriptions = gameData.functionDescriptions

    const dynamicDescriptions = gameData.dynamicDescriptions;

    return {
      primary: primaryFunction,
      secondary: secondaryFunction,
      dynamic: primaryDynamic,
      functionDesc: functionDescriptions,
      dynamicDesc: dynamicDescriptions,
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
    initializeQuestions(); // Get new random questions
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
                  {interpretProfile().primary[0]}:{' '}
                  {interpretProfile().functionDesc[interpretProfile().primary[0]]}
                </div>
                <div class={styles.secondaryFunction}>
                  Supporting: {interpretProfile().secondary[0]} -{' '}
                  {interpretProfile().functionDesc[interpretProfile().secondary[0]]}
                </div>
              </div>

              <div class={styles.dynamicProfile}>
                <h3>Metabolic Pattern</h3>
                <div class={styles.primaryDynamic}>
                  Your cognitive metabolism tends toward{' '}
                  <strong>{interpretProfile().dynamic[0]}</strong>:
                  {interpretProfile().dynamicDesc[interpretProfile().dynamic[0]]}
                </div>
              </div>

              <div class={styles.interpretation}>
                <p>
                  Your responses reveal a mind that navigates reality through{' '}
                  {interpretProfile().functionDesc[interpretProfile().primary[0]]}, while{' '}
                  {interpretProfile().dynamicDesc[interpretProfile().dynamic[0]]}. This creates a
                  unique cognitive signature that shapes how you process experience and make
                  meaning.
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

          <div class={styles.scenario}>{questions[currentQuestionIndex()].scenario}</div>

          <div class={styles.prompt}>{questions[currentQuestionIndex()].prompt}</div>

          <div class={styles.choices}>
            <For each={questions[currentQuestionIndex()].choices}>
              {(choice, index) => (
                <button
                  class={styles.choice}
                  onClick={() => selectAnswer(choice)}
                  onMouseEnter={() => setHoveredChoice(index())}
                  onMouseLeave={() => setHoveredChoice(null)}
                  style={hoveredChoice() === index() ? 'transform: translateX(10px);' : ''}
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
