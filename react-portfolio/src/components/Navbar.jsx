import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaMoon, FaSun, FaLinkedinIn, FaGithub, FaYoutube, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Navbar({ theme, toggleTheme }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeHash, setActiveHash] = useState('#home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'hackathons', 'techstack', 'skills', 'contact'];
            let current = '';
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) {
                        current = `#${section}`;
                    }
                }
            }
            if (current && current !== activeHash) {
                setActiveHash(current);
            }
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeHash]);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const menuOverlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        zIndex: 99999,
        background: theme === 'dark' ? '#060610' : '#f0f4f8',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        opacity: isMobileMenuOpen ? 1 : 0,
        visibility: isMobileMenuOpen ? 'visible' : 'hidden',
        transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'opacity 0.35s ease, transform 0.35s ease, visibility 0.35s ease',
        pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
    };

    const linkStyle = {
        fontSize: '24px',
        fontWeight: 700,
        color: theme === 'dark' ? '#e2e8f0' : '#1a1a2e',
        textDecoration: 'none',
        padding: '8px 16px',
    };

    const closeBtnStyle = {
        position: 'absolute',
        top: '16px',
        right: '20px',
        fontSize: '28px',
        color: theme === 'dark' ? '#e2e8f0' : '#1a1a2e',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
    };

    const socialBtnStyle = (bg) => ({
        width: 42,
        height: 42,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        background: bg,
        textDecoration: 'none',
    });

    return (
        <>
            <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, backdropFilter: scrolled ? 'blur(20px)' : 'none', WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none', background: scrolled ? 'var(--glass-bg)' : 'transparent', borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent', boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.12)' : 'none', transition: 'all 0.4s ease' }}>
                <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <a href="#home" onClick={closeMobileMenu} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '20px', fontWeight: 'bold', background: 'linear-gradient(135deg, #00d4ff, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>
                        &lt; YASH /&gt;
                    </a>

                    {/* Desktop nav links */}
                    <div className="hidden lg:flex items-center gap-4 xl:gap-8">
                        {['Home', 'About', 'Projects', 'Hackathons', 'Tech Stack', 'Skills', 'Contact'].map(item => {
                            const hash = `#${item.toLowerCase().replace(' ', '')}`;
                            return (
                                <a key={item} href={hash}
                                    className={`nav-link text-sm ${activeHash === hash ? 'active text-[var(--blue)]' : 'text-gray-300'}`}>
                                    {item}
                                </a>
                            );
                        })}
                    </div>

                    {/* Desktop social icons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <button
                            className="theme-toggle w-[42px] h-[42px] rounded-full border-2 border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-[10px] cursor-pointer flex items-center justify-center text-[1.15rem] transition-all duration-300 text-[var(--text-primary)] hover:border-[var(--blue)] hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:scale-110"
                            onClick={toggleTheme} title="Toggle theme">
                            {theme === 'dark' ? <FaMoon /> : <FaSun className="text-yellow-500" />}
                        </button>
                        <a href="https://www.linkedin.com/in/yash-parmar-a907b2320" target="_blank" rel="noreferrer"
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-all hover:scale-110 shadow-[0_0_10px_rgba(0,119,181,0.4)]"
                            style={{ background: '#0077b5', color: 'white' }}><FaLinkedinIn /></a>
                        <a href="https://github.com/YashParmar081005" target="_blank" rel="noreferrer"
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-all hover:scale-110 shadow-[0_0_10px_rgba(255,69,0,0.4)]"
                            style={{ background: '#24292e', color: 'white' }}><FaGithub /></a>
                        <a href="https://leetcode.com/u/parmaryash/" target="_blank" rel="noreferrer"
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-all hover:scale-110 shadow-[0_0_10px_rgba(255,161,22,0.4)]"
                            style={{ background: '#ffa116', color: 'white' }}><SiLeetcode /></a>
                        <a href="https://www.youtube.com/@parmaryash5237" target="_blank" rel="noreferrer"
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-all hover:scale-110 shadow-[0_0_10px_rgba(255,0,0,0.4)]"
                            style={{ background: '#ff0000', color: 'white' }}><FaYoutube /></a>
                        <a href="mailto:yashparmarh97236@gmail.com"
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-all hover:scale-110 shadow-[0_0_10px_rgba(234,67,53,0.4)]"
                            style={{ background: '#ea4335', color: 'white' }}><FaEnvelope /></a>
                    </div>

                    {/* Mobile hamburger */}
                    <div className="lg:hidden flex items-center gap-3">
                        <button
                            onClick={toggleTheme} title="Toggle theme"
                            style={{ width: 36, height: 36, fontSize: '1rem', borderRadius: '50%', border: '2px solid var(--glass-border)', background: 'var(--glass-bg)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
                            {theme === 'dark' ? <FaMoon /> : <FaSun style={{ color: '#eab308' }} />}
                        </button>
                        <button
                            onClick={toggleMobileMenu}
                            style={{ background: 'none', border: 'none', fontSize: '24px', color: theme === 'dark' ? '#e2e8f0' : '#1a1a2e', cursor: 'pointer' }}>
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Portal - always mounted, toggle via display */}
            {createPortal(
                <div id="mobile-menu-portal" style={menuOverlayStyle}>
                    <button onClick={closeMobileMenu} style={closeBtnStyle}>
                        <FaTimes />
                    </button>

                    {['Home', 'About', 'Projects', 'Hackathons', 'Tech Stack', 'Skills', 'Contact'].map(item => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '')}`}
                            onClick={closeMobileMenu}
                            style={linkStyle}
                        >
                            {item}
                        </a>
                    ))}

                    <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                        <a href="https://www.linkedin.com/in/yash-parmar-a907b2320" target="_blank" rel="noreferrer" style={socialBtnStyle('#0077b5')}><FaLinkedinIn /></a>
                        <a href="https://github.com/YashParmar081005" target="_blank" rel="noreferrer" style={socialBtnStyle('#24292e')}><FaGithub /></a>
                        <a href="https://leetcode.com/u/parmaryash/" target="_blank" rel="noreferrer" style={socialBtnStyle('#ffa116')}><SiLeetcode /></a>
                        <a href="https://www.youtube.com/@parmaryash5237" target="_blank" rel="noreferrer" style={socialBtnStyle('#ff0000')}><FaYoutube /></a>
                        <a href="mailto:yashparmarh97236@gmail.com" style={socialBtnStyle('#ea4335')}><FaEnvelope /></a>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
