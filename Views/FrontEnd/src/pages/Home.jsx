import React, { useState } from 'react';
import Layout from '../components/Layout';
import PromptInput from '../components/PromptInput';
import AnalysisResult from '../components/AnalysisResult';

/*
  TEACHING MOMENT: The "Smart" Component
  Home.jsx is now the "Brain" of the prompt coach feature.
  It holds the state (data) for the whole specific feature.
*/
function Home() {
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState(null);

    // This function is called when the user clicks "Analyze"
    const handleAnalyze = async (promptText) => {
        setIsAnalyzing(true);
        setResult(null); // Clear previous result

        try {
            const response = await fetch("http://localhost:8000/api/analyze", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    promptText: promptText, // ⬅️ SENT TO BACKEND
                }),
            });

            const data = await response.json();

            setResult(data); // ⬅️ DATA COMING FROM BACKEND
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsAnalyzing(false);
        }
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

export default Home;
