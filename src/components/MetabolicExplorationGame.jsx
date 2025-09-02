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
  const [isAnimating, setIsAnimating] = createSignal(false);
  const [slideDirection, setSlideDirection] = createSignal('next');

  // Randomise all questions
  const initializeQuestions = () => {
    const shuffled = [...gameData.questions].sort(() => Math.random() - 0.5);
    setSelectedQuestions(shuffled.slice(0, shuffled.length));
  };

  if (selectedQuestions().length === 0) {
    initializeQuestions();
  }

  const questions = selectedQuestions();

  // Enhanced answer selection with animation
  const selectAnswer = (choice) => {
    if (isAnimating()) return;

    setIsAnimating(true);
    setSlideDirection('next');

    // Update or add answer
    const newAnswers = [...answers()];
    newAnswers[currentQuestionIndex()] = choice;
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestionIndex() < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex() + 1);
      } else {
        setShowResults(true);
      }
      setIsAnimating(false);
    }, 300);
  };

  // Navigate to previous question
  const goToPreviousQuestion = () => {
    if (currentQuestionIndex() > 0 && !isAnimating()) {
      setIsAnimating(true);
      setSlideDirection('prev');

      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex() - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  // Navigate to specific question (for breadcrumb navigation)
  const goToQuestion = (index) => {
    if (index !== currentQuestionIndex() && !isAnimating() && index <= answers().length) {
      setIsAnimating(true);
      setSlideDirection(index > currentQuestionIndex() ? 'next' : 'prev');

      setTimeout(() => {
        setCurrentQuestionIndex(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  // Reset game
  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowResults(false);
    setHoveredChoice(null);
    initializeQuestions();
  };

  // Calculate progress percentage
  const progressPercentage = () => {
    return Math.min((answers().length / questions.length) * 100, 100);
  };

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
    const sortedFunctions = Object.entries(profile.functions)
      .filter(([key]) => !['Ji', 'Je', 'Pi', 'Pe'].includes(key))
      .sort(([, a], [, b]) => b - a);

    const dominantFunction = sortedFunctions[0];
    const secondaryFunction = sortedFunctions[1];

    const sortedDynamics = Object.entries(profile.dynamics).sort(([, a], [, b]) => b - a);
    const dominantDynamic = sortedDynamics[0];

    return {
      dominant: dominantFunction,
      secondary: secondaryFunction,
      dynamic: dominantDynamic,
      fullProfile: profile,
    };
  });

  // Get current question's previous answer if exists
  const getCurrentAnswer = () => {
    return answers()[currentQuestionIndex()];
  };

  // Create breadcrumb navigation
  const getBreadcrumbs = () => {
    const breadcrumbs = [];
    const maxVisible = Math.min(answers().length + 1, questions.length);

    for (let i = 0; i < maxVisible; i++) {
      breadcrumbs.push({
        index: i,
        completed: i < answers().length,
        current: i === currentQuestionIndex(),
      });
    }
    return breadcrumbs;
  };

  return (
    <div class={styles.gameContainer}>
      <Show
        when={!showResults()}
        fallback={
          <div class={`${styles.resultsContainer} ${styles.slideIn}`}>
            <div class={styles.resultsHeader}>
              <h2 class={styles.resultsTitle}>🧬 Your Metabolic Profile</h2>
              <div class={styles.completionBadge}>
                <span class={styles.checkmark}>✓</span>
                Assessment Complete
              </div>
            </div>

            <Show when={interpretProfile()}>
              <div class={styles.profileCard}>
                <div class={styles.profileHeader}>
                  <div class={styles.primaryFunction}>
                    <span class={styles.functionLabel}>
                      Dominant: {interpretProfile().dominant[0]}
                    </span>
                    <span class={styles.functionDescription}>
                      Primary cognitive driver with strength:{' '}
                      {interpretProfile().dominant[1].toFixed(1)}
                    </span>
                  </div>

                  <div class={styles.secondaryFunction}>
                    <span class={styles.secondaryLabel}>
                      Secondary: {interpretProfile().secondary[0]}
                    </span>
                    <span class={styles.functionDescription}>
                      Supporting function with strength:{' '}
                      {interpretProfile().secondary[1].toFixed(1)}
                    </span>
                  </div>
                </div>

                <div class={styles.dynamicProfile}>
                  <div class={styles.dynamicTitle}>
                    <span>Your metabolic dynamic:</span>
                    <span class={styles.dynamicName}>{interpretProfile().dynamic[0]}</span>
                    <span class={styles.dynamicScore}>
                      ({interpretProfile().dynamic[1].toFixed(1)})
                    </span>
                  </div>

                  <div class={styles.dynamicResult}>
                    This profile suggests a cognitive metabolism oriented toward{' '}
                    <strong>{interpretProfile().dynamic[0]}</strong> with your dominant{' '}
                    <strong>{interpretProfile().dominant[0]}</strong> function leading the way. Your
                    secondary <strong>{interpretProfile().secondary[0]}</strong> provides essential
                    support and balance to your mental processing style.
                  </div>
                </div>
              </div>
            </Show>

            <div class={styles.actionContainer}>
              <button onClick={resetGame} class={styles.resetButton}>
                <span class={styles.buttonIcon}>🔄</span>
                Explore Again
              </button>
            </div>
          </div>
        }
      >
        <div class={`${styles.questionContainer} ${isAnimating() ? styles[slideDirection()] : ''}`}>
          {/* Enhanced Progress Section */}
          <div class={styles.progressSection}>
            <div class={styles.progressHeader}>
              <span class={styles.progressText}>
                Question {currentQuestionIndex() + 1} of {questions.length}
              </span>
              <span class={styles.progressPercentage}>{Math.round(progressPercentage())}%</span>
            </div>

            <div class={styles.progress}>
              <div class={styles.progressBar} style={`width: ${progressPercentage()}%`} />
            </div>

            {/* Breadcrumb Navigation */}
            <div class={styles.breadcrumbs}>
              <For each={getBreadcrumbs()}>
                {(crumb) => (
                  <button
                    class={`${styles.breadcrumb} ${crumb.completed ? styles.completed : ''} ${crumb.current ? styles.active : ''}`}
                    onClick={() => goToQuestion(crumb.index)}
                    disabled={crumb.index > answers().length}
                    title={`Go to question ${crumb.index + 1}`}
                  >
                    {crumb.completed ? '✓' : crumb.index + 1}
                  </button>
                )}
              </For>
            </div>
          </div>

          {/* Navigation Controls */}
          <div class={styles.navigationControls}>
            <button
              class={`${styles.navButton} ${styles.prevButton}`}
              onClick={goToPreviousQuestion}
              disabled={currentQuestionIndex() === 0 || isAnimating()}
            >
              <span class={styles.buttonIcon}>←</span>
              Previous
            </button>

            <div class={styles.questionNumber}>{currentQuestionIndex() + 1}</div>

            <div class={styles.navSpacer}></div>
          </div>

          {/* Question Content */}
          <div class={styles.questionContent}>
            <div class={styles.scenario}>
              <span class={styles.scenarioIcon}>🌟</span>
              {questions[currentQuestionIndex()].scenario}
            </div>

            <div class={styles.prompt}>{questions[currentQuestionIndex()].prompt}</div>
          </div>

          {/* Enhanced Choices */}
          <div class={styles.choices}>
            <For each={questions[currentQuestionIndex()].choices}>
              {(choice, index) => {
                const isSelected = getCurrentAnswer()?.text === choice.text;
                return (
                  <button
                    class={`${styles.choice} ${isSelected ? styles.selected : ''} ${hoveredChoice() === index() ? styles.hovered : ''}`}
                    onClick={() => selectAnswer(choice)}
                    onMouseEnter={() => setHoveredChoice(index())}
                    onMouseLeave={() => setHoveredChoice(null)}
                    disabled={isAnimating()}
                  >
                    <div class={styles.choiceHeader}>
                      <span class={styles.choiceNumber}>{String.fromCharCode(65 + index())}</span>
                      {isSelected && <span class={styles.selectedIcon}>✓</span>}
                    </div>
                    <span class={styles.choiceText}>{choice.text}</span>
                    <div class={styles.choiceDecoration}></div>
                  </button>
                );
              }}
            </For>
          </div>
        </div>
      </Show>
    </div>
  );
};

export default MetabolicExplorationGame;
