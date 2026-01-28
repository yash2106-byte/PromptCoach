import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({
        Gmail: '',
        Password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // ← YOU WERE MISSING THIS FUNCTION!
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
            const response = await fetch('https://promptcoach-backend.onrender.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Gmail: formData.Gmail,
                    Password: formData.Password
                })
            });

            const ans = await response.json();

            if (!response.ok) {
                setError(ans.error || "Something went wrong");
                return;
            }

            if (ans.status === "success") {
                navigate('/');
                return;
            }
        } catch (err) {
            setError('Failed to login. Please try again.');
            console.error(err);
        }
    };

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
                <h2 style={{ marginBottom: '20px', color: 'var(--text-primary)' }}>
                    Welcome Back
                </h2>

                {/* Display error message if exists */}
                {error && (
                    <div style={{
                        backgroundColor: '#fee',
                        color: '#c33',
                        padding: '10px',
                        borderRadius: '8px',
                        marginBottom: '15px',
                        fontSize: '0.9rem'
                    }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px'
                }}>
                    <div style={{ textAlign: 'left' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '5px',
                            fontSize: '0.9rem',
                            color: 'var(--text-secondary)'
                        }}>
                            Email
                        </label>
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
                        <label style={{
                            display: 'block',
                            marginBottom: '5px',
                            fontSize: '0.9rem',
                            color: 'var(--text-secondary)'
                        }}>
                            Password
                        </label>
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
                            border: 'none',
                            borderRadius: 'var(--radius-pill)',
                            fontWeight: '600',
                            fontSize: '1rem',
                            cursor: 'pointer'
                        }}
                    >
                        Log In
                    </button>
                </form>

                <p style={{
                    marginTop: '20px',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)'
                }}>
                    Don't have an account?{' '}
                    <Link
                        to="/signup"
                        style={{
                            color: 'var(--text-accent)',
                            textDecoration: 'none',
                            fontWeight: '500'
                        }}
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;