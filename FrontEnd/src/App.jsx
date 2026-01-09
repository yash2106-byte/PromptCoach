import React, { useState } from 'react';
import Layout from './components/Layout';
import PromptInput from './components/PromptInput';
import AnalysisResult from './components/AnalysisResult';

/*
  TEACHING MOMENT: The "Smart" Component
  App.jsx is the "Brain" of the frontend right now.
  It holds the state (data) for the whole specific feature.
*/
function App() {
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState(null);

    // This function is called when the user clicks "Analyze"
    const handleAnalyze = async (promptText) => {
        setIsAnalyzing(true);
        setResult(null); // Clear previous result

        // Simulate an API call (waiting 1.5 seconds)
        // Later, we will replace this with a real fetch() to your Node.js backend!
        setTimeout(() => {
            setResult({
                score: 85,
                feedback: [
                    "Good clarity on the main objective.",
                    "Could be more specific about the tone (e.g., 'professional' vs 'casual').",
                    "Adding a constraint like 'under 50 words' would help precision."
                ],
                improvedPrompt: `${promptText} Ensure the tone is professional and concise, keeping the response under 50 words.`
            });
            setIsAnalyzing(false);
        }, 1500);
    };

    return (
        <Layout>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                <PromptInput onSubmit={handleAnalyze} isAnalyzing={isAnalyzing} />
                <AnalysisResult result={result} />
            </div>
        </Layout>
    );
}

export default App;
