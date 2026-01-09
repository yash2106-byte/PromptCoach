import React from 'react';

// Simple wrapper component to keep layout consistent
// "children" is a special React prop that represents whatever is inside <Layout>...</Layout>
export default function Layout({ children }) {
    return (
        <div className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <header style={{ padding: '40px 0', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Prompt Coach</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Refine your ideas into clear instructions.</p>
            </header>

            <main style={{ flex: 1, paddingBottom: '60px' }}>
                {children}
            </main>
        </div>
    );
}
