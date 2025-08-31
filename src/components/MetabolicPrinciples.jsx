// File: src/components/MetabolicPrinciples.jsx

import { createSignal } from 'solid-js';
import metabolicPrinciplesData from '../data/metabolicPrinciples.json';
import styles from './MetabolicPrinciples.module.css';

const MetabolicPrinciples = () => {
  const [activeSection, setActiveSection] = createSignal('overview');
  const [activeSubsection, setActiveSubsection] = createSignal(null);

  // Use the imported data directly
  const metabolicData = () => metabolicPrinciplesData;

  const renderSection = () => {
    const data = metabolicData();
    if (!data) return null;

    switch (activeSection()) {
      case 'overview':
        return renderOverview(data);
      case 'functions':
        return renderSpecificFunctions(data.specificFunctions);
      case 'dynamics':
        return renderDynamics(data);
      case 'quadras':
        return renderQuadras(data.quadras);
      case 'development':
        return renderDevelopment(data);
      case 'applications':
        return renderApplications(data);
      case 'research':
        return renderResearch(data);
      case 'foundations':
        return renderFoundations(data.theoreticalFoundations);
      default:
        return renderOverview(data);
    }
  };

  const renderOverview = (data) => (
    <div class={styles.sectionContent}>
      <h2>Metabolic Information Processing Framework</h2>
      <div class={styles.introText}>
        <p>{data.metabolicPrinciples.description}</p>
      </div>

      <div class={styles.coreAxiomsSection}>
        <h3>Core Axioms</h3>
        <div class={styles.axiomGrid}>
          {Object.entries(data.metabolicPrinciples.coreAxioms).map(([key, axiom]) => (
            <div class={styles.axiomCard}>
              <h4>{axiom.title}</h4>
              <p class={styles.axiomDescription}>{axiom.description}</p>
              <div class={styles.axiomSource}>
                <strong>Source:</strong> {axiom.source}
              </div>
              <div class={styles.axiomImplications}>
                <strong>Practical Implications:</strong> {axiom.practicalImplications}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class={styles.fundamentalProcessesSection}>
        <h3>Fundamental Processes</h3>
        <div class={styles.processGrid}>
          {Object.entries(data.fundamentalProcesses).map(([key, process]) => (
            <div class={styles.processCard}>
              <h4>{process.name}</h4>
              <p>{process.description}</p>
              <div class={styles.processFunctions}>
                <strong>Functions:</strong> {process.functions.join(', ')}
              </div>
              <div class={styles.processPrinciple}>
                <strong>Principle:</strong> {process.principle}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class={styles.orientationsSection}>
        <h3>Orientations</h3>
        <div class={styles.orientationGrid}>
          {Object.entries(data.orientations).map(([key, orientation]) => (
            <div class={styles.orientationCard}>
              <h4>
                {orientation.name} ({orientation.symbol})
              </h4>
              <p>{orientation.description}</p>
              <div class={styles.orientationMechanism}>
                <strong>Mechanism:</strong> {orientation.mechanism} → {orientation.effect}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSpecificFunctions = (functions) => (
    <div class={styles.sectionContent}>
      <h2>Specific Cognitive Functions</h2>
      <div class={styles.functionGrid}>
        {Object.entries(functions).map(([key, func]) => (
          <div class={styles.functionCard}>
            <h3>{func.name}</h3>
            <p class={styles.functionDescription}>{func.description}</p>

            <div class={styles.functionMechanism}>
              <strong>Mechanism:</strong> {func.mechanism}
            </div>

            <div class={styles.functionEffect}>
              <strong>Effect:</strong> {func.effect}
            </div>

            {func.metabolicProfile && (
              <div class={styles.metabolicProfile}>
                <h4>Metabolic Profile</h4>
                <div class={styles.profileGrid}>
                  {Object.entries(func.metabolicProfile).map(([profKey, profValue]) => (
                    <div class={styles.profileItem}>
                      <strong>
                        {profKey
                          .replace(/([A-Z])/g, ' $1')
                          .replace(/^./, (str) => str.toUpperCase())}
                        :
                      </strong>{' '}
                      {profValue}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {func.practicalApplications && (
              <div class={styles.practicalApplications}>
                <h4>Applications</h4>
                <div class={styles.applicationGrid}>
                  {Object.entries(func.practicalApplications).map(([appKey, appValue]) => (
                    <div class={styles.applicationItem}>
                      <strong>
                        {appKey
                          .replace(/([A-Z])/g, ' $1')
                          .replace(/^./, (str) => str.toUpperCase())}
                        :
                      </strong>{' '}
                      {appValue}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div class={styles.functionSource}>
              <strong>Source:</strong> {func.source}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDynamics = (data) => (
    <div class={styles.sectionContent}>
      <h2>Inter-Function Dynamics</h2>
      <div class={styles.dynamicsIntro}>
        <p>
          {data.interFunctionDynamics?.definition ||
            'Explore the complex interactions between cognitive functions in information processing.'}
        </p>
      </div>

      {data.interFunctionDynamics?.dynamics && (
        <div class={styles.dynamicsGrid}>
          {Object.entries(data.interFunctionDynamics.dynamics).map(([key, dynamic]) => (
            <div class={styles.dynamicCard}>
              <h3>{dynamic.name}</h3>
              <div class={styles.dynamicFunctions}>
                <strong>Functions:</strong> {dynamic.functions.join(' + ')}
              </div>
              <p>{dynamic.description}</p>

              {dynamic.outcomes && (
                <div class={styles.dynamicOutcomes}>
                  <div class={styles.outcomePositive}>
                    <strong>Positive:</strong> {dynamic.outcomes.positive}
                  </div>
                  <div class={styles.outcomeNegative}>
                    <strong>Negative:</strong> {dynamic.outcomes.negative}
                  </div>
                </div>
              )}

              {dynamic.practicalApplications && (
                <div class={styles.dynamicApplications}>
                  <h4>Applications</h4>
                  {Object.entries(dynamic.practicalApplications).map(([appKey, appValue]) => (
                    <div class={styles.applicationDetail}>
                      <strong>
                        {appKey
                          .replace(/([A-Z])/g, ' $1')
                          .replace(/^./, (str) => str.toUpperCase())}
                        :
                      </strong>{' '}
                      {appValue}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {data.energeticDynamics && (
        <div class={styles.energeticSection}>
          <h3>Energetic Dynamics</h3>
          <div class={styles.energeticGrid}>
            {Object.entries(data.energeticDynamics).map(([key, dynamic]) => (
              <div class={styles.energeticCard}>
                <h4>
                  {dynamic.name ||
                    key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                </h4>
                <p>{dynamic.definition || dynamic.description}</p>
                {dynamic.mechanism && (
                  <div class={styles.energeticMechanism}>
                    <strong>Mechanism:</strong> {dynamic.mechanism}
                  </div>
                )}
                {dynamic.effect && (
                  <div class={styles.energeticEffect}>
                    <strong>Effect:</strong> {dynamic.effect}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderQuadras = (quadras) => {
    if (!quadras) {
      return (
        <div class={styles.sectionContent}>
          <h2>Quadras</h2>
          <p>Quadra information is not available in the current dataset.</p>
        </div>
      );
    }

    return (
      <div class={styles.sectionContent}>
        <h2>Quadras</h2>
        <div class={styles.quadraGrid}>
          {Object.entries(quadras).map(([key, quadra]) => (
            <div class={styles.quadraCard}>
              <h3>{quadra.name}</h3>
              <p>{quadra.description}</p>
              {quadra.types && (
                <div class={styles.quadraTypes}>
                  <strong>Types:</strong> {quadra.types.join(', ')}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderDevelopment = (data) => (
    <div class={styles.sectionContent}>
      <h2>Developmental Trajectories</h2>

      {/* Render developmentalTrajectories if it exists */}
      {data.developmentalTrajectories && (
        <div class={styles.developmentSection}>
          <h3>{data.developmentalTrajectories.title}</h3>
          <p>{data.developmentalTrajectories.description}</p>

          {data.developmentalTrajectories.neuroplasticityBasis && (
            <div class={styles.neuroplasticityInfo}>
              <strong>Neuroplasticity Basis:</strong>{' '}
              {data.developmentalTrajectories.neuroplasticityBasis}
            </div>
          )}

          {data.developmentalTrajectories.stages && (
            <div class={styles.stagesGrid}>
              {Object.entries(data.developmentalTrajectories.stages).map(([stageKey, stage]) => (
                <div class={styles.stageCard}>
                  <h4>
                    {stageKey.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                    {stage.ages && ` (${stage.ages})`}
                    {stage.ageRange && ` (${stage.ageRange})`}
                  </h4>
                  <p>{stage.characteristics}</p>

                  {stage.developmentFocus && (
                    <div class={styles.developmentFocus}>
                      <strong>Development Focus:</strong> {stage.developmentFocus}
                    </div>
                  )}

                  {stage.supportStrategies && (
                    <div class={styles.supportStrategies}>
                      <strong>Support Strategies:</strong>
                      <ul>
                        {stage.supportStrategies.map((strategy) => (
                          <li>{strategy}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {stage.developmentalTasks && (
                    <div class={styles.developmentalTasks}>
                      <strong>Developmental Tasks:</strong>
                      <ul>
                        {stage.developmentalTasks.map((task) => (
                          <li>{task}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {stage.neurobiologicalBasis && (
                    <div class={styles.neurobiologicalBasis}>
                      <strong>Neurobiological Basis:</strong> {stage.neurobiologicalBasis}
                    </div>
                  )}

                  {stage.commonChallenges && (
                    <div class={styles.commonChallenges}>
                      <strong>Common Challenges:</strong> {stage.commonChallenges}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );

  const renderApplications = (data) => (
    <div class={styles.sectionContent}>
      <h2>Practical Applications</h2>

      {data.metabolicPrinciples?.practicalApplications && (
        <div class={styles.applicationsSection}>
          {Object.entries(data.metabolicPrinciples.practicalApplications).map(
            ([appKey, appData]) => (
              <div class={styles.applicationCategory}>
                <h3>
                  {appKey.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                </h3>
                {Object.entries(appData).map(([subKey, subData]) => (
                  <div class={styles.applicationSubsection}>
                    <h4>
                      {subKey.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                    </h4>
                    <p>{subData.description}</p>

                    {subData.strategies && (
                      <div class={styles.strategiesList}>
                        <strong>Strategies:</strong>
                        <ul>
                          {subData.strategies.map((strategy) => (
                            <li>{strategy}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {subData.measuredBenefits && (
                      <div class={styles.benefitsList}>
                        <strong>Measured Benefits:</strong>
                        <ul>
                          {subData.measuredBenefits.map((benefit) => (
                            <li>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {subData.approaches && (
                      <div class={styles.approachesList}>
                        <strong>Approaches:</strong>
                        <ul>
                          {subData.approaches.map((approach) => (
                            <li>{approach}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {subData.applications && (
                      <div class={styles.applicationsList}>
                        <strong>Applications:</strong>
                        <ul>
                          {subData.applications.map((app) => (
                            <li>{app}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );

  const renderResearch = (data) => (
    <div class={styles.sectionContent}>
      <h2>Research Validation</h2>

      {data.researchValidation && (
        <div class={styles.researchSection}>
          {Object.entries(data.researchValidation).map(([researchKey, researchData]) => (
            <div class={styles.researchCategory}>
              <h3>
                {researchKey.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
              </h3>

              {Array.isArray(researchData) ? (
                <ul>
                  {researchData.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              ) : typeof researchData === 'object' ? (
                <div class={styles.researchDetails}>
                  {Object.entries(researchData).map(([detailKey, detailValue]) => (
                    <div class={styles.researchDetail}>
                      <strong>
                        {detailKey
                          .replace(/([A-Z])/g, ' $1')
                          .replace(/^./, (str) => str.toUpperCase())}
                        :
                      </strong>{' '}
                      {Array.isArray(detailValue) ? (
                        <ul>
                          {detailValue.map((item) => (
                            <li>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        detailValue
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p>{researchData}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderFoundations = (foundations) => {
    if (!foundations) {
      return (
        <div class={styles.sectionContent}>
          <h2>Theoretical Foundations</h2>
          <p>Theoretical foundations information is not available in the current dataset.</p>
        </div>
      );
    }

    return (
      <div class={styles.sectionContent}>
        <h2>Theoretical Foundations</h2>

        <div class={styles.foundationsGrid}>
          {Object.entries(foundations).map(([key, foundation]) => (
            <div class={styles.foundationCard}>
              <h3>{foundation.title}</h3>
              <p>{foundation.description}</p>

              {foundation.keyPrinciples && (
                <div class={styles.keyPrinciples}>
                  <strong>Key Principles:</strong>
                  <ul>
                    {foundation.keyPrinciples.map((principle) => (
                      <li>{principle}</li>
                    ))}
                  </ul>
                </div>
              )}

              {foundation.source && (
                <div class={styles.foundationSource}>
                  <strong>Source:</strong> {foundation.source}
                </div>
              )}

              {foundation.modernValidation && (
                <div class={styles.modernValidation}>
                  <strong>Modern Validation:</strong> {foundation.modernValidation}
                </div>
              )}

              {foundation.practicalApplications && (
                <div class={styles.practicalApps}>
                  <strong>Applications:</strong>
                  <ul>
                    {foundation.practicalApplications.map((app) => (
                      <li>{app}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div class={styles.metabolicContainer}>
      <div class={styles.header}>
        <h1>Metabolic Information Processing Principles</h1>
        <p class={styles.subtitle}>
          Comprehensive framework integrating Jung's psychological types with modern neuroscience
          research
        </p>
      </div>

      <nav class={styles.sectionNav}>
        <button
          onClick={() => setActiveSection('overview')}
          class={`${styles.navButton} ${activeSection() === 'overview' ? styles.activeNav : ''}`}
        >
          🔍 Overview
        </button>
        <button
          onClick={() => setActiveSection('functions')}
          class={`${styles.navButton} ${activeSection() === 'functions' ? styles.activeNav : ''}`}
        >
          ⚙️ Functions
        </button>
        <button
          onClick={() => setActiveSection('dynamics')}
          class={`${styles.navButton} ${activeSection() === 'dynamics' ? styles.activeNav : ''}`}
        >
          🔄 Dynamics
        </button>
        <button
          onClick={() => setActiveSection('quadras')}
          class={`${styles.navButton} ${activeSection() === 'quadras' ? styles.activeNav : ''}`}
        >
          🎯 Quadras
        </button>
        <button
          onClick={() => setActiveSection('development')}
          class={`${styles.navButton} ${activeSection() === 'development' ? styles.activeNav : ''}`}
        >
          📈 Development
        </button>
        <button
          onClick={() => setActiveSection('applications')}
          class={`${styles.navButton} ${activeSection() === 'applications' ? styles.activeNav : ''}`}
        >
          🛠️ Applications
        </button>
        <button
          onClick={() => setActiveSection('research')}
          class={`${styles.navButton} ${activeSection() === 'research' ? styles.activeNav : ''}`}
        >
          🔬 Research
        </button>
        <button
          onClick={() => setActiveSection('foundations')}
          class={`${styles.navButton} ${activeSection() === 'foundations' ? styles.activeNav : ''}`}
        >
          🏛️ Foundations
        </button>
      </nav>

      <div class={styles.content}>{renderSection()}</div>
    </div>
  );
};

export default MetabolicPrinciples;