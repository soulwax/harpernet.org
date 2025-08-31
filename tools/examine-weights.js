// File: tools/examine-weights.js

const fs = require('fs');

/**
 * Analyzes the provided JSON file to count questions,
 * calculate weight distributions, and identify overrepresented functions.
 * @param {string} filePath - The path to the JSON file.
 */
function analyzeQuestionnaire(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

    const questions = data.questions || [];
    const questionCount = questions.length;

    const weights = {};

    // Aggregate weights from all choices
    questions.forEach((question) => {
      (question.choices || []).forEach((choice) => {
        for (const func in choice.weights || {}) {
          weights[func] = (weights[func] || 0) + choice.weights[func];
        }
      });
    });

    const totalWeight = Object.values(weights).reduce((sum, value) => sum + value, 0);
    const numFunctions = Object.keys(weights).length;
    const averagePercentage = numFunctions > 0 ? 100 / numFunctions : 0;

    console.log('--- Questionnaire Analysis ---');
    console.log(`Total Questions: ${questionCount}`);
    console.log(`Total Weight Sum: ${totalWeight}`);
    console.log(`Average Representation: ${averagePercentage.toFixed(2)}%`);
    console.log('\\n--- Weight Distribution ---');

    const tableData = Object.keys(weights)
      .sort((a, b) => weights[b] - weights[a])
      .map((func) => ({
        Function: func,
        'Total Weight': weights[func],
        'Percentage (%)': ((weights[func] / totalWeight) * 100).toFixed(2),
      }));

    console.table(tableData);

    console.log('\\n--- Overrepresented Functions (more than 1.5x average) ---');
    let overrepresentedFound = false;
    for (const func in weights) {
      const percentage = (weights[func] / totalWeight) * 100;
      if (percentage > averagePercentage * 1.5) {
        overrepresentedFound = true;
        const overrepresentationFactor = percentage / averagePercentage;
        console.log(
          `- ${func}: ${percentage.toFixed(2)}% (appears ${overrepresentationFactor.toFixed(2)}x more than average)`,
        );
      }
    }

    if (!overrepresentedFound) {
      console.log('No significantly overrepresented functions found.');
    }
  } catch (error) {
    console.error('Error analyzing file:', error.message);
  }
}

// Run the analysis on the provided file
analyzeQuestionnaire('./src/data/metabolicGameData.json');