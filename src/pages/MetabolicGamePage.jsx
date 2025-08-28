// File: src/pages/MetabolicGamePage.jsx

import Footer from '../components/Footer';
import Header from '../components/Header';
import MetabolicExplorationGame from '../components/MetabolicExplorationGame';

const MetabolicGamePage = () => {
  return (
    <div class="app">
      <Header />
      <main class="main">
        <div style="text-align: center; margin-bottom: 2rem;">
          <h1>Metabolic Exploration</h1>
          <p style="max-width: 600px; margin: 0 auto; color: var(--text-secondary, #6b7280);">
            Travel with your mind's eye within metaphorical dream landscapes to explore your
            cognitive metabolism. Each choice reveals patterns of your mind processes and how it
            might transform information.
          </p>
        </div>
        <MetabolicExplorationGame />
      </main>
      <div style="text-align: center; margin-bottom: 2rem;">
        <p style="max-width: 600px; margin: 0 auto; color: var(--text-secondary, #6b7280);">
          {/* Explain how the questioning and the style of questions and answers favours intuitives but one shouldn't be discouraged */}
          Note: The questioning style and answer choices may resonate more with intuitive types, but
          I encourage all people to engage with the quiz. The goal is to explore your cognitive
          patterns, regardless of your MBTI classification.
        </p>
        <br />
        <p style="max-width: 600px; margin: 0 auto; color: var(--text-secondary, #6b7280);">
          Side Note: My conviction and challenge at the same time was to create a quiz that would
          stump people who took these tests so often they could just get a result they wanted. This
          should be more of a challenge to you and hopefully spark your imagination at the same
          time, revealing your innermost thought patterns.
        </p>
        <br />
        <p style="max-width: 600px; margin: 0 auto; color: var(--text-secondary, #6b7280);">
          For accuracy I will probably extend this much further in the future.
        </p>
        <br />
        <p style="max-width: 600px; margin: 0 auto; color: var(--text-secondary, #6b7280);">
          Beta Phase 2: State - 48 questions (divisible by 16 and 8 for balance for all function
          combinations)
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default MetabolicGamePage;
