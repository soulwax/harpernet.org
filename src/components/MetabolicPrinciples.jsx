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
        return renderDevelopment(data.developmentalTrajectories, data.metabolicDevelopment);
      case 'applications':
        return renderApplications(
          data.modernApplications,
          data.metabolicPrinciples.practicalApplications,
        );
      case 'research':
        return renderResearch(
          data.researchValidation,
          data.metabolicPrinciples.empiricalValidation,
        );
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
        <p>{data.interFunctionDynamics.definition}</p>
      </div>

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
                      {appKey.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}:
                    </strong>{' '}
                    {appValue}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div class={styles.energeticSection}>
        <h3>Energetic Dynamics</h3>
        <div class={styles.energeticGrid}>
          {Object.entries(data.energeticDynamics).map(([key, dynamic]) => (
            <div class={styles.energeticCard}>
              <h4>
                {dynamic.definition
                  ? 'Definition'
                  : key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
              </h4>
              <p>{dynamic.definition || dynamic.description}</p>
              {dynamic.principles && (
                <div class={styles.principlesList}>
                  <strong>Principles:</strong>
                  <ul>
                    {Object.entries(dynamic.principles).map(([princKey, princValue]) => (
                      <li>
                        <strong>{princKey}:</strong> {princValue}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderQuadras = (quadras) => (
    <div class={styles.sectionContent}>
      <h2>Quadra Analysis</h2>
      <div class={styles.quadraGrid}>
        {Object.entries(quadras)
          .filter(([key]) => key !== 'researchBasis')
          .map(([key, quadra]) => (
            <div class={styles.quadraCard}>
              <h3>{quadra.name}</h3>
              <div class={styles.quadraTypes}>
                <strong>Types:</strong> {quadra.types.join(', ')}
              </div>
              <div class={styles.quadraAxes}>
                <strong>Axes:</strong> {quadra.axes.join(' / ')}
              </div>

              <div class={styles.quadraDynamics}>
                <h4>Primary Dynamics</h4>
                {Object.entries(quadra.dynamics.primary).map(([dynKey, dynValue]) => (
                  <div class={styles.dynamicDetail}>
                    <strong>{dynKey}:</strong> {dynValue}
                  </div>
                ))}
              </div>

              <div class={styles.quadraProfile}>
                <h4>Cognitive Profile</h4>
                {Object.entries(quadra.cognitiveProfile).map(([profKey, profValue]) => (
                  <div class={styles.profileDetail}>
                    <strong>
                      {profKey.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                      :
                    </strong>{' '}
                    {profValue}
                  </div>
                ))}
              </div>

              <div class={styles.quadraStrengths}>
                <h4>Team Strengths</h4>
                <ul>
                  {quadra.teamStrengths.map((strength) => (
                    <li>{strength}</li>
                  ))}
                </ul>
              </div>

              <div class={styles.quadraChallenges}>
                <h4>Potential Challenges</h4>
                <ul>
                  {quadra.potentialChallenges.map((challenge) => (
                    <li>{challenge}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>

      {quadras.researchBasis && (
        <div class={styles.researchSection}>
          <h3>{quadras.researchBasis.title}</h3>
          <p>{quadras.researchBasis.description}</p>
          <ul>
            {quadras.researchBasis.researchFindings.map((finding) => (
              <li>{finding}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  const renderDevelopment = (devTrajectories, metabolicDev) => (
    <div class={styles.sectionContent}>
      <h2>Developmental Trajectories</h2>

      {devTrajectories && (
        <div class={styles.developmentSection}>
          <h3>{devTrajectories.title}</h3>
          <p>{devTrajectories.description}</p>

          <div class={styles.stagesGrid}>
            {Object.entries(devTrajectories.stages).map(([key, stage]) => (
              <div class={styles.stageCard}>
                <h4>
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())} (
                  {stage.ages})
                </h4>
                <p>
                  <strong>Characteristics:</strong> {stage.characteristics}
                </p>
                <p>
                  <strong>Development Focus:</strong> {stage.development_focus}
                </p>

                <div class={styles.supportStrategies}>
                  <strong>Support Strategies:</strong>
                  <ul>
                    {stage.support_strategies.map((strategy) => (
                      <li>{strategy}</li>
                    ))}
                  </ul>
                </div>

                <div class={styles.commonChallenges}>
                  <strong>Common Challenges:</strong> {stage.common_challenges}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {metabolicDev && (
        <div class={styles.metabolicDevSection}>
          <h3>{metabolicDev.title}</h3>
          <p>{metabolicDev.description}</p>

          {metabolicDev.developmentalStages && (
            <div class={styles.detailedStages}>
              {Object.entries(metabolicDev.developmentalStages).map(([key, stage]) => (
                <div class={styles.detailedStageCard}>
                  <h4>
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())} (
                    {stage.ageRange})
                  </h4>
                  <p>{stage.characteristics}</p>

                  <div class={styles.developmentalTasks}>
                    <strong>Developmental Tasks:</strong>
                    <ul>
                      {stage.developmentalTasks.map((task) => (
                        <li>{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );

  const renderApplications = (modernApps, practicalApps) => (
    <div class={styles.sectionContent}>
      <h2>Practical Applications</h2>

      {practicalApps && (
        <div class={styles.applicationsSection}>
          {Object.entries(practicalApps).map(([appKey, appData]) => (
            <div class={styles.applicationCategory}>
              <h3>{appKey.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</h3>
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
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {modernApps && (
        <div class={styles.modernAppsSection}>
          <h3>{modernApps.title}</h3>
          <p>{modernApps.description}</p>

          {Object.entries(modernApps.clinicalApplications || {}).map(([clinKey, clinData]) => (
            <div class={styles.clinicalSection}>
              <h4>
                {clinKey.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
              </h4>
              <p>{clinData.description}</p>

              {clinData.methodologies && (
                <div class={styles.methodologies}>
                  <strong>Methodologies:</strong>
                  <ul>
                    {clinData.methodologies.map((method) => (
                      <li>{method}</li>
                    ))}
                  </ul>
                </div>
              )}

              {clinData.evidenceBase && (
                <div class={styles.evidenceBase}>
                  <strong>Evidence Base:</strong> {clinData.evidenceBase}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderResearch = (researchValidation, empiricalValidation) => (
    <div class={styles.sectionContent}>
      <h2>Research Validation</h2>

      {researchValidation && (
        <div class={styles.researchSection}>
          <h3>{researchValidation.title}</h3>
          <p>{researchValidation.description}</p>

          <div class={styles.neuroscienceSection}>
            <h4>Neuroscience Studies</h4>
            <div class={styles.studyCategory}>
              <strong>Brain Imaging:</strong>
              <ul>
                {researchValidation.neuroscienceStudies.brainImaging.map((study) => (
                  <li>{study}</li>
                ))}
              </ul>
            </div>

            <div class={styles.studyCategory}>
              <strong>Key Findings:</strong>
              <ul>
                {researchValidation.neuroscienceStudies.findings.map((finding) => (
                  <li>{finding}</li>
                ))}
              </ul>
            </div>

            <div class={styles.implications}>
              <strong>Implications:</strong> {researchValidation.neuroscienceStudies.implications}
            </div>
          </div>

          <div class={styles.psychologySection}>
            <h4>Psychological Studies</h4>
            {Object.entries(researchValidation.psychologicalStudies).map(([studyKey, studies]) => (
              <div class={styles.studyCategory}>
                <strong>
                  {studyKey.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}:
                </strong>
                <ul>
                  {studies.map((study) => (
                    <li>{study}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div class={styles.clinicalStudies}>
            <h4>Clinical Applications</h4>
            <ul>
              {researchValidation.clinicalApplicationStudies.map((study) => (
                <li>{study}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {empiricalValidation && (
        <div class={styles.empiricalSection}>
          <h3>{empiricalValidation.title}</h3>
          <p>{empiricalValidation.description}</p>

          <div class={styles.findingsGrid}>
            <div class={styles.findingCategory}>
              <strong>Neuroscience Findings:</strong>
              <ul>
                {empiricalValidation.neuroscienceFindings.map((finding) => (
                  <li>{finding}</li>
                ))}
              </ul>
            </div>

            <div class={styles.findingCategory}>
              <strong>Psychological Studies:</strong>
              <ul>
                {empiricalValidation.psychologicalStudies.map((study) => (
                  <li>{study}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderFoundations = (foundations) => (
    <div class={styles.sectionContent}>
      <h2>Theoretical Foundations</h2>

      <div class={styles.foundationsGrid}>
        {Object.entries(foundations).map(([key, foundation]) => (
          <div class={styles.foundationCard}>
            <h3>{foundation.title}</h3>
            <p>{foundation.description}</p>

            <div class={styles.keyPrinciples}>
              <strong>Key Principles:</strong>
              <ul>
                {foundation.keyPrinciples.map((principle) => (
                  <li>{principle}</li>
                ))}
              </ul>
            </div>

            <div class={styles.foundationSource}>
              <strong>Source:</strong> {foundation.source}
            </div>

            <div class={styles.modernValidation}>
              <strong>Modern Validation:</strong> {foundation.modernValidation}
            </div>

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