// frontend/src/components/Navbar.jsx
import React from 'react';
import { Sun, Moon, User as UserIcon, Shield, LogOut, LogIn, LayoutDashboard, Code, Trophy, ListChecks, Zap } from 'lucide-react';

function Navbar({ isAuthenticated, userRole, onLogout, onNavigate, toggleTheme, isDarkMode }) {
    const isAdmin = userRole === 'admin';

    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow-lg py-3 position-sticky top-0 navbar-modern" 
             style={{ 
                 zIndex: 1000
             }}>
            <div className="container-fluid px-4">
                <a className="navbar-brand d-flex align-items-center position-relative" 
                   href="#" 
                   onClick={() => onNavigate('problems')}
                   style={{ 
                       transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                       cursor: 'pointer'
                   }}
                   onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                   onMouseLeave={e => e.target.style.transform = 'scale(1)'}>
                    <div className="position-relative me-3 d-flex align-items-center justify-content-center"
                         style={{
                             width: '48px',
                             height: '48px',
                             background: 'linear-gradient(135deg, #6573ff, #8b5cf6)',
                             borderRadius: '16px',
                             boxShadow: '0 8px 24px rgba(101, 115, 255, 0.3)'
                         }}>
                        <Zap size={24} color="white" />
                    </div>
                    <span className="fw-bold fs-3 position-relative" 
                          style={{ 
                              background: 'linear-gradient(135deg, #6573ff, #8b5cf6, #06b6d4)',
                              backgroundSize: '200% 200%',
                              animation: 'gradient-shift 3s ease-in-out infinite',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              textShadow: '0 0 20px rgba(101, 115, 255, 0.3)',
                              fontWeight: '800',
                              letterSpacing: '-0.02em'
                          }}>
                        EulerHub
                    </span>
                </a>
                
                <button className="navbar-toggler border-0" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                        style={{
                            background: 'rgba(101, 115, 255, 0.1)',
                            borderRadius: '12px',
                            border: '1px solid rgba(101, 115, 255, 0.2)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            padding: '8px 12px'
                        }}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {isAuthenticated && (
                            <>
                                <li className="nav-item mx-1">
                                    <a className={`nav-link d-flex align-items-center px-4 py-3 rounded-3 position-relative nav-link-modern ${userRole === 'admin' ? 'admin-link' : ''}`} 
                                       href="#" 
                                       onClick={() => onNavigate('dashboard')}
                                       style={{
                                           transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                           background: 'rgba(101, 115, 255, 0.05)',
                                           border: '1px solid rgba(101, 115, 255, 0.1)',
                                           backdropFilter: 'blur(10px)',
                                           color: 'var(--text-primary)',
                                           fontWeight: '500'
                                       }}>
                                        <LayoutDashboard size={20} className="me-2" /> 
                                        <span className="nav-text">Dashboard</span>
                                    </a>
                                </li>
                                <li className="nav-item mx-1">
                                    <a className="nav-link d-flex align-items-center px-4 py-3 rounded-3 position-relative nav-link-modern" 
                                       href="#" 
                                       onClick={() => onNavigate('problems')}
                                       style={{
                                           transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                           background: 'rgba(101, 115, 255, 0.05)',
                                           border: '1px solid rgba(101, 115, 255, 0.1)',
                                           backdropFilter: 'blur(10px)',
                                           color: 'var(--text-primary)',
                                           fontWeight: '500'
                                       }}>
                                        <Code size={20} className="me-2" /> 
                                        <span className="nav-text">Problems</span>
                                    </a>
                                </li>
                                <li className="nav-item mx-1">
                                    <a className="nav-link d-flex align-items-center px-4 py-3 rounded-3 position-relative nav-link-modern" 
                                       href="#" 
                                       onClick={() => onNavigate('contests')}
                                       style={{
                                           transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                           background: 'rgba(101, 115, 255, 0.05)',
                                           border: '1px solid rgba(101, 115, 255, 0.1)',
                                           backdropFilter: 'blur(10px)',
                                           color: 'var(--text-primary)',
                                           fontWeight: '500'
                                       }}>
                                        <Trophy size={20} className="me-2" /> 
                                        <span className="nav-text">Contests</span>
                                    </a>
                                </li>
                                <li className="nav-item mx-1">
                                    <a className="nav-link d-flex align-items-center px-4 py-3 rounded-3 position-relative nav-link-modern" 
                                       href="#" 
                                       onClick={() => onNavigate('submissions')}
                                       style={{
                                           transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                           background: 'rgba(101, 115, 255, 0.05)',
                                           border: '1px solid rgba(101, 115, 255, 0.1)',
                                           backdropFilter: 'blur(10px)',
                                           color: 'var(--text-primary)',
                                           fontWeight: '500'
                                       }}>
                                        <ListChecks size={20} className="me-2" /> 
                                        <span className="nav-text">Submissions</span>
                                    </a>
                                </li>
                            </>
                        )}
                    </ul>
                    
                    <div className="d-flex align-items-center" style={{ gap: '0.5rem' }}>
                        {isAuthenticated && (
                            <div className="badge d-flex align-items-center position-relative"
                                 style={{
                                     background: isAdmin 
                                         ? 'linear-gradient(135deg, #06b6d4, #0891b2)' 
                                         : 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                                     border: isAdmin 
                                         ? '1px solid rgba(6, 182, 212, 0.3)' 
                                         : '1px solid rgba(139, 92, 246, 0.3)',
                                     boxShadow: isAdmin 
                                         ? '0 0 20px rgba(6, 182, 212, 0.3)' 
                                         : '0 0 20px rgba(139, 92, 246, 0.3)',
                                     fontSize: '0.75rem',
                                     fontWeight: '600',
                                     letterSpacing: '0.5px',
                                     color: 'white',
                                     animation: isAdmin ? 'pulse-admin 2s infinite' : 'none',
                                     whiteSpace: 'nowrap',
                                     padding: '0.4rem 0.6rem',
                                     borderRadius: '0.5rem',
                                     flexShrink: 0,
                                     minWidth: 'fit-content'
                                 }}>
                                {isAdmin ? (
                                    <Shield size={14} className="me-1" style={{ filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.5))' }} />
                                ) : (
                                    <UserIcon size={14} className="me-1" />
                                )}
                                <span className="d-none d-sm-inline">{userRole.toUpperCase()}</span>
                                <span className="d-inline d-sm-none">{userRole.charAt(0)}</span>
                            </div>
                        )}
                        
                        <button onClick={toggleTheme} 
                                className="btn btn-outline-light rounded-3 theme-toggle" 
                                style={{ 
                                    width: '40px', 
                                    height: '40px', 
                                    minWidth: '40px',
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    border: '1px solid rgba(101, 115, 255, 0.2)',
                                    background: 'rgba(101, 115, 255, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    color: 'var(--text-primary)',
                                    flexShrink: 0,
                                    padding: '0'
                                }}>
                            <div style={{ 
                                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: isDarkMode ? 'rotate(360deg)' : 'rotate(0deg)'
                            }}>
                                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                            </div>
                        </button>
                        
                        {isAuthenticated ? (
                            <button onClick={onLogout} 
                                    className="btn btn-outline-danger d-flex align-items-center rounded-3 logout-btn"
                                    style={{
                                        border: '1px solid #ef4444',
                                        background: 'rgba(239, 68, 68, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        fontWeight: '600',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        color: '#ef4444',
                                        whiteSpace: 'nowrap',
                                        flexShrink: 0,
                                        padding: '0.5rem 0.75rem',
                                        fontSize: '0.875rem',
                                        height: '40px'
                                    }}>
                                <LogOut size={16} className="me-1" /> 
                                <span className="d-none d-lg-inline">Logout</span>
                            </button>
                        ) : (
                            <button onClick={() => alert('Please implement actual navigation to login page or open login modal.')} 
                                    className="btn btn-outline-success d-flex align-items-center rounded-3 login-btn"
                                    style={{
                                        border: '1px solid #10b981',
                                        background: 'rgba(16, 185, 129, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        fontWeight: '600',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        color: '#10b981',
                                        whiteSpace: 'nowrap',
                                        flexShrink: 0,
                                        padding: '0.5rem 0.75rem',
                                        fontSize: '0.875rem',
                                        height: '40px'
                                    }}>
                                <LogIn size={16} className="me-1" /> 
                                <span className="d-none d-lg-inline">Login</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes pulse-admin {
                    0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.3); }
                    50% { box-shadow: 0 0 30px rgba(6, 182, 212, 0.6); }
                }
                
                .nav-link-modern {
                    position: relative;
                    overflow: hidden;
                }
                
                .nav-link-modern::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(101, 115, 255, 0.2), transparent);
                    transition: left 0.5s;
                }
                
                .nav-link-modern:hover::before {
                    left: 100%;
                }
                
                .nav-link-modern:hover {
                    background: rgba(101, 115, 255, 0.15) !important;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(101, 115, 255, 0.2);
                    border-color: rgba(101, 115, 255, 0.3) !important;
                }
                
                .admin-link:hover {
                    background: rgba(6, 182, 212, 0.15) !important;
                    border-color: rgba(6, 182, 212, 0.3) !important;
                    box-shadow: 0 8px 24px rgba(6, 182, 212, 0.2);
                }
                
                .theme-toggle:hover {
                    background: rgba(101, 115, 255, 0.15) !important;
                    border-color: rgba(101, 115, 255, 0.4) !important;
                    transform: scale(1.05);
                    box-shadow: 0 0 24px rgba(101, 115, 255, 0.3);
                }
                
                .logout-btn:hover {
                    background: rgba(239, 68, 68, 0.15) !important;
                    border-color: #ef4444 !important;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(239, 68, 68, 0.3);
                }
                
                .login-btn:hover {
                    background: rgba(16, 185, 129, 0.15) !important;
                    border-color: #10b981 !important;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
                }
                
                .navbar-toggler:hover {
                    background: rgba(101, 115, 255, 0.2) !important;
                    transform: scale(1.05);
                    border-color: rgba(101, 115, 255, 0.4) !important;
                }
                
                .navbar-brand:hover .position-relative {
                    transform: scale(1.05);
                    box-shadow: 0 12px 32px rgba(101, 115, 255, 0.4);
                }
                
                @media (max-width: 991px) {
                    .nav-link-modern {
                        margin: 0.25rem 0;
                        padding: 0.75rem 1rem !important;
                    }
                    
                    .navbar-nav {
                        padding: 1rem 0;
                    }
                    
                    .d-flex.align-items-center {
                        justify-content: flex-start;
                        margin-top: 1rem;
                        padding-top: 1rem;
                        border-top: 1px solid rgba(101, 115, 255, 0.1);
                        gap: 0.4rem !important;
                    }
                }
                
                @media (max-width: 576px) {
                    .d-flex.align-items-center {
                        gap: 0.3rem !important;
                    }
                    
                    .logout-btn, .login-btn {
                        padding: 0.4rem 0.6rem !important;
                        font-size: 0.8rem !important;
                        min-width: 36px !important;
                        height: 36px !important;
                    }
                    
                    .theme-toggle {
                        width: 36px !important;
                        height: 36px !important;
                        min-width: 36px !important;
                    }
                    
                    .badge {
                        padding: 0.3rem 0.5rem !important;
                        font-size: 0.7rem !important;
                    }
                }
            `}</style>
        </nav>
    );
}

export default Navbar;