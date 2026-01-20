import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    // formdata here is the address of the memory which is being used by the form
    // to store all the data and setFormData is the key to update this data
    const [formData, setFormData] = useState({
        Name: '',
        Gmail: '',
        Password: ''
    });

    // this is used to check wheather the “Email already exists” “Password too short”
    const [error, setError] = useState('');

    // this helps us to changes pages
    const navigate = useNavigate();

    // this functions ensure that every value is mapped with its actual key name
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // this is the place where data is sent to the backend
    // and if it is ok then new page will render
    const handleMockSubmit = async (e) => {
        e.preventDefault();
        console.log("Signup attempt:", formData);
        setError('');

        try {
            const response = await fetch("http://localhost:8000/signup", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    formData: formData,
                }),
            });

            const answer = await response.json();

            if (!response.ok) {
                setError(answer.error || "Something went wrong");
                return;
            }

            if (answer.status === "success") {
                navigate('/login');
                return;
            }
            else{
                return 
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Server error");
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
                    Create Account
                </h2>

                {/* error message stays minimal and non-intrusive */}
                {error && (
                    <p style={{ color: 'red', marginBottom: '10px' }}>
                        {error}
                    </p>
                )}

                <form
                    onSubmit={handleMockSubmit}
                    style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
                >
                    <div style={{ textAlign: 'left' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '5px',
                            fontSize: '0.9rem',
                            color: 'var(--text-secondary)'
                        }}>
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="Name"
                            value={formData.Name}
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
                            minLength="6"
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
                        Sign Up
                    </button>
                </form>

                <p style={{
                    marginTop: '20px',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)'
                }}>
                    Already have an account?{' '}
                    <Link
                        to="/login"
                        style={{
                            color: 'var(--text-accent)',
                            textDecoration: 'none',
                            fontWeight: '500'
                        }}
                    >
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
