import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaHeart, FaLinkedinIn, FaGithub, FaYoutube, FaEnvelope, FaSpinner } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

// ============================================================
// 📧 EmailJS Configuration — REPLACE THESE WITH YOUR OWN IDs
// ============================================================
// 1. Go to https://www.emailjs.com and sign up (free)
// 2. Add an Email Service (e.g. Gmail) → copy the Service ID
// 3. Create an Email Template → copy the Template ID
//    - Use these variables in your template:
//      Subject: New message from {{from_name}}
//      Body:    Name: {{from_name}}
//               Email: {{from_email}}
//               Message: {{message}}
// 4. Go to Account → General → copy your Public Key
// ============================================================
const EMAILJS_SERVICE_ID = 'service_sg26svf';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_6xzenjo';  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY = 'lvmOpOQuSvZT2i-W-';   // e.g. 'AbCdEfGhIjKlMn'

export default function Contact() {
    const formRef = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [sending, setSending] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('success'); // 'success' or 'error'
    const [showToast, setShowToast] = useState(false);

    const showToastMsg = (msg, type = 'success') => {
        setToastMessage(msg);
        setToastType(type);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            showToastMsg('Please fill all fields', 'error');
            return;
        }

        setSending(true);

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            showToastMsg('Message sent successfully! I\'ll get back to you soon 🚀', 'success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            showToastMsg('Failed to send message. Please try again or email me directly.', 'error');
        } finally {
            setSending(false);
        }
    };

    return (
        <>
            <section id="contact" className="px-6 md:px-16 lg:px-24 py-24 bg-[var(--bg-secondary)] relative border-t border-[var(--glass-border)]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-14" data-aos="fade-up">
                        <p className="mono text-sm mb-3 text-[var(--blue)]">// get in touch</p>
                        <h2 className="text-4xl md:text-5xl font-black section-title mb-6">Let's Connect</h2>
                        <p className="text-[var(--text-secondary)] max-w-xl mx-auto font-medium">
                            Open for freelance opportunities, open-source collaborations, and engaging technical discussions. Drop a message!
                        </p>
                    </div>

                    {/* Quick Connect Cards */}
                    <div className="grid md:grid-cols-2 gap-4 mb-8" data-aos="fade-up" data-aos-delay="50">
                        <a href="mailto:yashparmarh97236@gmail.com"
                            className="glass rounded-xl p-5 flex items-center gap-4 group hover:border-[var(--blue)] transition-all duration-300 no-underline">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-lg"
                                style={{ background: 'linear-gradient(135deg, #ea4335, #ff6b6b)' }}>
                                <FaEnvelope size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-[var(--text-secondary)] font-semibold mb-1">Email Me Directly</p>
                                <p className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--blue)] transition-colors">
                                    yashparmarh97236@gmail.com
                                </p>
                            </div>
                        </a>
                        <a href="https://linkedin.com/in/yash-parmar-a907b2320" target="_blank" rel="noreferrer"
                            className="glass rounded-xl p-5 flex items-center gap-4 group hover:border-[var(--blue)] transition-all duration-300 no-underline">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-lg"
                                style={{ background: 'linear-gradient(135deg, #0077b5, #00a0dc)' }}>
                                <FaLinkedinIn size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-[var(--text-secondary)] font-semibold mb-1">Connect on LinkedIn</p>
                                <p className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--blue)] transition-colors">
                                    Yash Parmar
                                </p>
                            </div>
                        </a>
                    </div>

                    {/* Contact Form */}
                    <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--blue)] to-[var(--purple)]"></div>
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-[var(--text-secondary)]">Name</label>
                                    <input
                                        type="text"
                                        name="from_name"
                                        className="form-input bg-[var(--glass-bg)] border-[var(--glass-border)] text-[var(--text-primary)]"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-[var(--text-secondary)]">Email</label>
                                    <input
                                        type="email"
                                        name="from_email"
                                        className="form-input bg-[var(--glass-bg)] border-[var(--glass-border)] text-[var(--text-primary)]"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 text-[var(--text-secondary)]">Message</label>
                                <textarea
                                    name="message"
                                    className="form-input bg-[var(--glass-bg)] border-[var(--glass-border)] text-[var(--text-primary)] h-32 resize-none"
                                    placeholder="Hello Yash, I'd like to discuss..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={sending}
                                className="hero-btn-primary w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all border-none disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {sending ? (
                                    <>Sending... <FaSpinner className="animate-spin" /></>
                                ) : (
                                    <>Send Message <FaPaperPlane /></>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Toast Notification — fixed position, outside section to avoid clipping */}
            <div
                id="toast"
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem 1.5rem',
                    borderRadius: '0.75rem',
                    border: `2px solid ${toastType === 'success' ? '#22c55e' : '#ef4444'}`,
                    background: 'var(--bg, #0a0a0f)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: toastType === 'success'
                        ? '0 0 20px rgba(34,197,94,0.3)'
                        : '0 0 20px rgba(239,68,68,0.3)',
                    transform: showToast ? 'translateY(0)' : 'translateY(150%)',
                    opacity: showToast ? 1 : 0,
                    transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
                    pointerEvents: showToast ? 'auto' : 'none',
                }}
            >
                <div style={{
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '0.875rem',
                    background: toastType === 'success' ? '#22c55e' : '#ef4444',
                    boxShadow: toastType === 'success'
                        ? '0 0 10px rgba(34,197,94,0.5)'
                        : '0 0 10px rgba(239,68,68,0.5)',
                }}>
                    {toastType === 'success' ? '✓' : '✕'}
                </div>
                <div style={{
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: 'var(--text-primary, #fff)',
                }}>
                    {toastMessage}
                </div>
            </div>

            <footer className="border-t border-[var(--glass-border)] px-6 md:px-16 lg:px-24 py-12 relative z-10 bg-[var(--bg)]"
                style={{ borderImage: 'linear-gradient(90deg, transparent, var(--blue), var(--purple), transparent) 1' }}>
                <div className="max-w-6xl mx-auto text-center">
                    <div className="mono text-xl font-bold gradient-text mb-6">&lt; Portfolio /&gt;</div>

                    <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium text-[var(--text-secondary)]">
                        {['Home', 'About', 'Projects', 'Hackathons', 'Tech Stack', 'Skills', 'Contact'].map(item => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '')}`}
                                className="hover:text-[var(--blue)] transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex justify-center gap-4 mb-8">
                        <a href="https://linkedin.com/in/yash-parmar-a907b2320" target="_blank" rel="noreferrer"
                            className="w-10 h-10 rounded-lg flex items-center justify-center text-sm transition-all hover:scale-110 hover:-translate-y-1 shadow-lg"
                            style={{ background: '#0077b5', color: 'white' }}>
                            <FaLinkedinIn size={18} />
                        </a>
                        <a href="https://github.com/YashParmar081005" target="_blank" rel="noreferrer"
                            className="w-10 h-10 rounded-lg flex items-center justify-center text-sm transition-all hover:scale-110 hover:-translate-y-1 shadow-lg"
                            style={{ background: '#24292e', color: 'white' }}>
                            <FaGithub size={18} />
                        </a>
                        <a href="https://leetcode.com/u/parmaryash/" target="_blank" rel="noreferrer"
                            className="w-10 h-10 rounded-lg flex items-center justify-center text-sm transition-all hover:scale-110 hover:-translate-y-1 shadow-lg"
                            style={{ background: '#ffa116', color: 'white' }}>
                            <SiLeetcode size={18} />
                        </a>
                        <a href="https://www.youtube.com/@parmaryash5237" target="_blank" rel="noreferrer"
                            className="w-10 h-10 rounded-lg flex items-center justify-center text-sm transition-all hover:scale-110 hover:-translate-y-1 shadow-lg"
                            style={{ background: '#ff0000', color: 'white' }}>
                            <FaYoutube size={18} />
                        </a>
                        <a href="mailto:yashparmarh97236@gmail.com"
                            className="w-10 h-10 rounded-lg flex items-center justify-center text-sm transition-all hover:scale-110 hover:-translate-y-1 shadow-lg"
                            style={{ background: '#ea4335', color: 'white' }}>
                            <FaEnvelope size={18} />
                        </a>
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm font-medium">
                        © {new Date().getFullYear()} Portfolio. Crafted with <FaHeart className="inline text-red-500 animate-pulse mx-1" /> by <span className="gradient-text font-black tracking-wider">YASH PARMAR</span>
                    </p>
                </div>
            </footer>
        </>
    );
}
