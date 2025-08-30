import { Router, Route } from '@solidjs/router';
import { MetaProvider } from '@solidjs/meta';

// Import pages
import HomePage from '@pages/HomePage';
import SisterTypesPage from '@pages/SisterTypesPage';
import BrotherTypesPage from '@pages/BrotherTypesPage';
import CognitiveFunctionsPage from '@pages/CognitiveFunctionsPage';
import CognitiveFunctionsDetailedPage from '@pages/CognitiveFunctionsDetailedPage';
import RelationshipsPage from '@pages/RelationshipsPage';
import MetabolicPrinciplesPage from '@pages/MetabolicPrinciplesPage';
import MetabolicGamePage from '@pages/MetabolicGamePage';
import ResearchPage from '@pages/ResearchPage';
import AboutPage from '@pages/AboutPage';

// Components
import Header from '@components/Header';
import Footer from '@components/Footer';

// Styles
import '@styles/theme.css';

const App = () => {
  return (
    <MetaProvider>
      <Router>
        <div class="app">
          <Header />
          <main class="main-content">
            <Route path="/" component={HomePage} />
            <Route path="/sister-types" component={SisterTypesPage} />
            <Route path="/brother-types" component={BrotherTypesPage} />
            <Route path="/cognitive-functions" component={CognitiveFunctionsPage} />
            <Route
              path="/cognitive-functions-detailed"
              component={CognitiveFunctionsDetailedPage}
            />
            <Route path="/relationships" component={RelationshipsPage} />
            <Route path="/metabolic-principles" component={MetabolicPrinciplesPage} />
            <Route path="/metabolic-game" component={MetabolicGamePage} />
            <Route path="/research" component={ResearchPage} />
            <Route path="/about" component={AboutPage} />
          </main>
          <Footer />
        </div>
      </Router>
    </MetaProvider>
  );
};

export default App;
