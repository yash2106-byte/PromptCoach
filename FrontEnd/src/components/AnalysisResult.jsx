import React from 'react';

export default function AnalysisResult({ result }) {
    if (!result) return null;

    return (
        <div style={{ marginTop: '40px', animation: 'fadeIn 0.5s ease' }}>
            {/* The "Message" from the AI Coach */}
            <div style={{
                background: 'var(--bg-panel)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                    <div style={{
                        width: '60px', height: '60px',
                        borderRadius: '50%',
                        background: 'var(--text-accent)',
                        color: 'white',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '24px', fontWeight: 'bold'
                    }}>
                        {result.score}
                    </div>
                    <div>
                        <h3 style={{ margin: 0 }}>Analysis Complete</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Here is how we can improve your prompt.</p>
                    </div>
                </div>

                <ul style={{ paddingLeft: '20px', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {result.feedback.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Improved Prompt Section */}
            {result.improvedPrompt && (
                <div style={{ marginTop: '20px' }}>
                    <h4 style={{ marginBottom: '8px', fontFamily: 'var(--font-sans)', color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px' }}>Suggested Refinement</h4>
                    <div style={{
                        background: '#FAF9F6',
                        padding: '16px',
                        borderRadius: 'var(--radius-lg)',
                        borderLeft: '4px solid var(--text-accent)',
                        fontFamily: 'monospace',
                        color: '#444'
                    }}>
                        {result.improvedPrompt}
                    </div>
                </div>
            )}
        </div>
    );
}
