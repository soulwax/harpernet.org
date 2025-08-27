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
          <br />
          <p style="max-width: 600px; margin: 0 auto; color: var(--text-secondary, #6b7280);">
            Side Note: My conviction and challenge at the same time was to create a quiz that would
            stump people who took these tests so often they could just get a result they wanted.
            This should be more of a challenge to you and hopefully spark your imagination at the
            same time, revealing your innermost thought patterns.
          </p>
          <p style="max-width: 600px; margin: 0 auto; color: var(--text-secondary, #6b7280);">
            For accuracy I will probably extend this much further in the future.
          </p>
        </div>
        <MetabolicExplorationGame />
      </main>
      <Footer />
    </div>
  );
};

export default MetabolicGamePage;
