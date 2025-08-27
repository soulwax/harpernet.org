// File: src/pages/MetabolicGamePage.jsx

import Footer from "../components/Footer";
import Header from "../components/Header";
import MetabolicExplorationGame from "../components/MetabolicExplorationGame";

const MetabolicGamePage = () => {
    return (
        <div class="app">
            <Header />
            <main class="main">
                <div style="text-align: center; margin-bottom: 2rem;">
                    <h1>Metabolic Exploration</h1>
                    <p style="max-width: 600px; margin: 0 auto; color: var(--text-secondary, #6b7280);">
                        Journey through metaphorical landscapes to discover your cognitive metabolism.
                        Each choice reveals patterns in how your mind processes and transforms information.
                    </p>
                </div>
                <MetabolicExplorationGame />
            </main>
            <Footer />
        </div>
    );
};

export default MetabolicGamePage;