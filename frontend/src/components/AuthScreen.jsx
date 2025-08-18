import React, { useState, useEffect } from 'react';
import { LogIn, User as UserIcon, Shield, ArrowLeft, Zap, Sparkles } from 'lucide-react';

function AuthScreen({ onLogin, onRegister, message }) {
    const [isLoginMode, setIsLoginMode] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentAuthMessage, setCurrentAuthMessage] = useState(message);
    const [showLanding, setShowLanding] = useState(true);

    useEffect(() => {
        setCurrentAuthMessage(message);
    }, [message, isLoginMode]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCurrentAuthMessage('');
        if (isLoginMode) {
            onLogin(email, password);
        } else {
            onRegister(name, email, password);
        }
    };

    const handleUserLoginClick = () => {
        setShowLanding(false);
        setIsLoginMode(true);
    };

    const handleAdminLoginClick = () => {
        setShowLanding(false);
        setIsLoginMode(true);
    };

    const handleRegisterClick = () => {
        setShowLanding(false);
        setIsLoginMode(false);
    };

    const handleBackToLanding = () => {
        setShowLanding(true);
        setName('');
        setEmail('');
        setPassword('');
        setCurrentAuthMessage('');
    };

    if (showLanding) {
        return (
            <div className="min-vh-100 d-flex align-items-center justify-content-center p-4" 
                 style={{ 
                     background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)',
                     minHeight: '100vh',
                     position: 'relative',
                     overflow: 'hidden'
                 }}>
                
                {/* Animated Background Elements */}
                <div className="position-absolute w-100 h-100" style={{ zIndex: 0 }}>
                    <div className="position-absolute" style={{ 
                        top: '10%', 
                        left: '10%', 
                        width: '200px', 
                        height: '200px', 
                        background: 'radial-gradient(circle, rgba(101, 115, 255, 0.1) 0%, transparent 70%)',
                        borderRadius: '50%',
                        animation: 'pulse 4s ease-in-out infinite'
                    }}></div>
                    <div className="position-absolute" style={{ 
                        top: '60%', 
                        right: '15%', 
                        width: '150px', 
                        height: '150px', 
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
                        borderRadius: '50%',
                        animation: 'pulse 4s ease-in-out infinite 1s'
                    }}></div>
                    <div className="position-absolute" style={{ 
                        bottom: '20%', 
                        left: '20%', 
                        width: '100px', 
                        height: '100px', 
                        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
                        borderRadius: '50%',
                        animation: 'pulse 4s ease-in-out infinite 2s'
                    }}></div>
                </div>

                <div className="container" style={{ zIndex: 1, position: 'relative' }}>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <div className="text-center mb-5 animate-fade-in">
                                <div className="d-flex align-items-center justify-content-center mb-4"
                                     style={{
                                         width: '120px',
                                         height: '120px',
                                         background: 'linear-gradient(135deg, #6573ff, #8b5cf6)',
                                         borderRadius: '32px',
                                         margin: '0 auto',
                                         boxShadow: '0 20px 40px rgba(101, 115, 255, 0.3)',
                                         animation: 'pulse 3s ease-in-out infinite'
                                     }}>
                                    <Zap size={48} color="white" />
                                </div>
                                <h1 className="display-4 fw-bold mb-3" style={{
                                    background: 'linear-gradient(135deg, #6573ff, #8b5cf6, #06b6d4)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    fontWeight: '800',
                                    letterSpacing: '-0.02em'
                                }}>
                                    Welcome to EulerHub
                                </h1>
                                <p className="lead text-light mb-5" style={{ 
                                    fontSize: '1.25rem',
                                    color: 'var(--text-secondary)',
                                    maxWidth: '600px',
                                    margin: '0 auto'
                                }}>
                                    Advanced problem solving platform for competitive programming enthusiasts
                                </p>
                            </div>

                            <div className="row g-4 justify-content-center animate-slide-in">
                                <div className="col-md-6">
                                    <div className="card card-modern h-100" 
                                         style={{ 
                                             cursor: 'pointer',
                                             transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                         }}
                                         onClick={handleUserLoginClick}
                                         onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
                                         onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                                        <div className="card-body text-center p-5">
                                            <div className="mb-4" style={{
                                                width: '80px',
                                                height: '80px',
                                                background: 'linear-gradient(135deg, #10b981, #059669)',
                                                borderRadius: '24px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto',
                                                boxShadow: '0 12px 24px rgba(16, 185, 129, 0.3)'
                                            }}>
                                                <UserIcon size={32} color="white" />
                                            </div>
                                            <h3 className="h4 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                                                User Login
                                            </h3>
                                            {/* <p className="text-muted mb-0" style={{ color: 'var(--text-secondary)' }}>
                                                Access problems, submit solutions, and track your progress
                                            </p> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card card-modern h-100" 
                                         style={{ 
                                             cursor: 'pointer',
                                             transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                         }}
                                         onClick={handleAdminLoginClick}
                                         onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
                                         onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                                        <div className="card-body text-center p-5">
                                            <div className="mb-4" style={{
                                                width: '80px',
                                                height: '80px',
                                                background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                                                borderRadius: '24px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto',
                                                boxShadow: '0 12px 24px rgba(6, 182, 212, 0.3)'
                                            }}>
                                                <Shield size={32} color="white" />
                                            </div>
                                            <h3 className="h4 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                                                Admin Access
                                            </h3>
                                            {/* <p className="text-muted mb-0" style={{ color: 'var(--text-secondary)' }}>
                                                Manage problems, contests, and platform administration
                                            </p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-5 animate-fade-in">
                                <button 
                                    onClick={handleRegisterClick}
                                    className="btn btn-modern-secondary btn-lg px-5 py-3"
                                    style={{ fontSize: '1.1rem' }}>
                                    <Sparkles size={20} className="me-2" />
                                    New User? Join EulerHub
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center p-4" 
             style={{ 
                 background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)',
                 minHeight: '100vh'
             }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-xl-5">
                        <div className="card card-modern">
                            <div className="card-body p-5">
                                <div className="text-center mb-4">
                                    <button 
                                        onClick={handleBackToLanding}
                                        className="btn btn-link text-decoration-none position-absolute"
                                        style={{ 
                                            top: '20px', 
                                            left: '20px',
                                            color: 'var(--text-secondary)',
                                            zIndex: 10
                                        }}>
                                        <ArrowLeft size={20} />
                                    </button>
                                    
                                    <div className="d-flex align-items-center justify-content-center mb-4"
                                         style={{
                                             width: '80px',
                                             height: '80px',
                                             background: 'linear-gradient(135deg, #6573ff, #8b5cf6)',
                                             borderRadius: '24px',
                                             margin: '0 auto',
                                             boxShadow: '0 16px 32px rgba(101, 115, 255, 0.3)'
                                         }}>
                                        <Zap size={32} color="white" />
                                    </div>
                                    
                                    <h2 className="h3 fw-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                                        {isLoginMode ? 'Welcome Back' : 'Join EulerHub'}
                                    </h2>
                                    {/* <p className="text-muted" style={{  color: "#d1d5db" }}>
                                        {isLoginMode ? 'Sign in to continue your journey' : 'Start your problem-solving adventure'}
                                    </p> */}
                                </div>

                                {currentAuthMessage && (
                                    <div className={`alert ${currentAuthMessage.includes('successful') ? 'alert-success' : 'alert-danger'} mb-4`}
                                         style={{
                                             background: currentAuthMessage.includes('successful') 
                                                 ? 'rgba(16, 185, 129, 0.1)' 
                                                 : 'rgba(239, 68, 68, 0.1)',
                                             border: currentAuthMessage.includes('successful') 
                                                 ? '1px solid rgba(16, 185, 129, 0.3)' 
                                                 : '1px solid rgba(239, 68, 68, 0.3)',
                                             color: currentAuthMessage.includes('successful') ? '#10b981' : '#ef4444',
                                             borderRadius: '16px'
                                         }}>
                                        {currentAuthMessage}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    {!isLoginMode && (
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold" style={{ color: 'var(--text-primary)' }}>
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control form-control-modern"
                                                style={{ color: "white" }}
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Enter your full name"
                                                required={!isLoginMode}
                                            />
                                        </div>
                                    )}

                                    <div className="mb-4">
                                        <label className="form-label fw-semibold" style={{ color: 'var(--text-primary)' }}>
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control form-control-modern"
                                            style={{ color: "white" }} 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label fw-semibold" style={{ color: 'var(--text-primary)' }}>
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control form-control-modern"
                                            style={{ color: "white" }} 
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter your password"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-modern-primary w-100 py-3 mb-3"
                                        style={{ fontSize: '1.1rem' }}>
                                        {isLoginMode ? (
                                            <>
                                                <LogIn size={20} className="me-2" />
                                                Sign In
                                            </>
                                        ) : (
                                            <>
                                                <UserIcon size={20} className="me-2" />
                                                Create Account
                                            </>
                                        )}
                                    </button>

                                    <div className="text-center">
                                        <button
                                            type="button"
                                            onClick={() => setIsLoginMode(!isLoginMode)}
                                            className="btn btn-link text-decoration-none"
                                            style={{ color: 'var(--accent-primary)' }}>
                                            {isLoginMode 
                                                ? "Don't have an account? Sign up" 
                                                : "Already have an account? Sign in"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthScreen;