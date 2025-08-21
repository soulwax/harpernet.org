// File: src/pages/RelationshipsPage.jsx

import Footer from "../components/Footer";
import Header from "../components/Header";
import Relationships from "../components/Relationships";

const RelationshipsPage = () => {
    return (
        <div class="app" id="relationships-page">
            <Header />
            <main class="main-content">
                <Relationships />
            </main>
            <Footer />
        </div>
    );
};

export default RelationshipsPage;