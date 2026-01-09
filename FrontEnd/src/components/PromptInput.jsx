import React, { useState } from 'react';
import styles from './PromptInput.module.css'; // Importing the CSS module

/*
  TEACHING MOMENT: Props
  'onSubmit' and 'isAnalyzing' are PROPS. They are data passed DOWN
  from the parent component (App.jsx) to this child.
*/
export default function PromptInput({ onSubmit, isAnalyzing }) {
  // TEACHING MOMENT: State
  // 'prompt' is the current text. 'setPrompt' looks for updates.
  const [prompt, setPrompt] = useState('');

  const handleClick = () => {
    if (prompt.trim()) {
      onSubmit(prompt);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <textarea
        className={styles.textArea}
        placeholder="Describe what you want the AI to do..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        disabled={isAnalyzing}
      />
      
      <div className={styles.footer}>
        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          {prompt.length} characters
        </span>
        <button 
          className={styles.analyzeBtn}
          onClick={handleClick}
          disabled={!prompt.trim() || isAnalyzing}
        >
          {isAnalyzing ? 'Analyzing...' : 'Analyze Prompt'} 
          {!isAnalyzing && <span>→</span>}
        </button>
      </div>
    </div>
  );
}
