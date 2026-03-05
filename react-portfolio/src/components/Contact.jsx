import { useState } from 'react';
import { FaPaperPlane, FaHeart, FaLinkedinIn, FaGithub, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setToastMessage('Please fill all fields');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
            return;
        }

        // Simulate send
        setToastMessage('Message sent successfully!');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        setFormData({ name: '', email: '', message: '' });
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
                    <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--blue)] to-[var(--purple)]"></div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-[var(--text-secondary)]">Name</label>
                                    <input
                                        type="text"
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
                                    className="form-input bg-[var(--glass-bg)] border-[var(--glass-border)] text-[var(--text-primary)] h-32 resize-none"
                                    placeholder="Hello Yash, I'd like to discuss..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button type="submit" className="hero-btn-primary w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all border-none">
                                Send Message <FaPaperPlane />
                            </button>
                        </form>
                    </div>
                </div>

                <div
                    id="toast"
                    className={`glass bg-[var(--bg)] px-6 py-4 rounded-xl border border-[var(--blue)] fixed bottom-8 right-8 z-[100] flex items-center gap-3 transition-transform duration-300 ${showToast ? 'translate-x-0 opacity-100' : 'translate-x-[200%] opacity-0'}`}
                >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-500 text-white shadow-[0_0_10px_rgba(34,197,94,0.5)]">✓</div>
                    <div>
                        <div className="font-bold text-sm text-[var(--text-primary)]">{toastMessage}</div>
                    </div>
                </div>
            </section>

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
