import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({
        Gmail: '',
        Password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Name: "User", // Login endpoint might expect Name based on checking controller, but usually login only needs email/pass. 
                    // However, examining the Login Controller provided earlier:
                    // const { Name, Gmail, Password } = req.body;
                    // It checks: if (!Name || !Gmail || !Password) return error.
                    // THIS IS A BACKEND FLAVOR: The login controller requires Name? 
                    // Wait, let me check the Login Controller again.
                    // "export const postLogin = async function (req, res) { const { Name, Gmail, Password } = req.body ... if (!Name ...)"
                    // It seems the "postLogin" function is actually a SIGNUP function based on the code: "db.insert(usersTable)..."
                    // User Request was: "design a simple login and signup page... dont connect it to the backend just add the frontend part"
                    // So I will implement standard Login form (Email/Pass) and Signup form (Name/Email/Pass).
                    // Even if backend has issues, I am focused on Frontend Design as requested.
                    // I will NOT connect it to backend for now as per "dont connect it to the backend" instruction, 
                    // BUT I'll leave the fetch code commented out or mocked for now so strictly following "dont connect it".

                    // ACTUALLY: User said "dont connect it to the backend just add the frontend part".
                    // So I will just console log or navigate.
                    Gmail: formData.Gmail,
                    Password: formData.Password
                })
            });
            // For now, just simulate success since we are just doing frontend design
            console.log("Login submitted:", formData);
            navigate('/');
        } catch (err) {
            setError('Failed to login. Please try again.');
            console.error(err);
        }
    };

    // Pure Frontend Mock Submit
    const handleMockSubmit = (e) => {
        e.preventDefault();
        console.log("Login attempt:", formData);
        // Simulate navigation
        navigate('/');
    }

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--bg-app)',
            padding: '20px'
        }}>
            <div style={{
                backgroundColor: 'var(--bg-panel)',
                padding: '40px',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                width: '100%',
                maxWidth: '400px',
                textAlign: 'center'
            }}>
                <h2 style={{ marginBottom: '20px', color: 'var(--text-primary)' }}>Welcome Back</h2>

                <form onSubmit={handleMockSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ textAlign: 'left' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</label>
                        <input
                            type="email"
                            name="Gmail"
                            value={formData.Gmail}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '8px',
                                border: '1px solid var(--border-subtle)',
                                fontSize: '1rem',
                                color: 'var(--text-primary)',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div style={{ textAlign: 'left' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Password</label>
                        <input
                            type="password"
                            name="Password"
                            value={formData.Password}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '8px',
                                border: '1px solid var(--border-subtle)',
                                fontSize: '1rem',
                                color: 'var(--text-primary)',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            marginTop: '10px',
                            backgroundColor: 'var(--text-accent)',
                            color: '#fff',
                            padding: '12px',
                            borderRadius: 'var(--radius-pill)',
                            fontWeight: '600',
                            fontSize: '1rem'
                        }}
                    >
                        Log In
                    </button>
                </form>

                <p style={{ marginTop: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Don't have an account? <Link to="/signup" style={{ color: 'var(--text-accent)', textDecoration: 'none', fontWeight: '500' }}>Sign up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
