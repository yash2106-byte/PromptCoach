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

    // this is the place where the input data are being recived 
    const handleAnalyze = async (promptText) => {
        setIsAnalyzing(true);
        setResult(null); // Clear previous result

        // Simulate an API call (waiting 1.5 seconds)
        // Later, we will replace this with a real fetch() to your Node.js backend!
        //this set timeout is simulating the backend so for now we will comment this
        // setTimeout(() => {
        //     //this is the place where the output is generated
        //     setResult({
        //         score: 85,
        //         feedback: [
        //             "Good clarity on the main objective.",
        //             "Could be more specific about the tone (e.g., 'professional' vs 'casual').",
        //             "Adding a constraint like 'under 50 words' would help precision."
        //         ],
        //         improvedPrompt: `${promptText} this is  Ensure the tone is professional and concise, keeping the response under 50 words.`
        //     });
        //     setIsAnalyzing(false);
        // }, 1500);
        // this thing is working fine with all the things
        try {
        const response = await fetch("http://localhost:5000/analyze", {
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

export default App;
