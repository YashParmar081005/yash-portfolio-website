import { useEffect, useState, useMemo } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function Hero({ theme }) {
    // Typing effect logic
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    const words = useMemo(() => ["Full Stack Developer", "AI/ML Engineer", "Problem Solver"], []);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setTypedText(
                isDeleting
                    ? fullText.substring(0, typedText.length - 1)
                    : fullText.substring(0, typedText.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 100);

            if (!isDeleting && typedText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && typedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(500);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [typedText, isDeleting, loopNum, typingSpeed, words]);

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <div id="hero-greeting" className="text-gray-400 mono text-lg mb-2">Hello World! 👋</div>
                <h1 id="hero-title" className="text-5xl md:text-7xl font-black mb-4 leading-tight">
                    Hi, I'm <span className="gradient-text">YASH PARMAR</span>
                </h1>
                <div className="text-2xl md:text-3xl font-bold mb-6 h-12">
                    <span id="typed-text" style={{ color: 'var(--blue)' }}>{typedText}</span>
                    <span className="animate-pulse" style={{ color: 'var(--blue)' }}>|</span>
                </div>
                <p id="hero-sub" className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                    Crafting full-stack experiences & intelligent ML systems. Passionate about building products that matter — from scalable web apps to deep learning models.
                </p>
                <div id="hero-btns" className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#projects"
                        className="hero-btn-primary relative z-10 px-8 py-3 rounded-full font-bold text-white text-sm tracking-wide transition-all hover:scale-105 hover:shadow-lg"
                        style={{ boxShadow: '0 0 30px rgba(0,212,255,0.3)' }}>
                        <span className="relative z-10">View Projects</span>
                    </a>
                    <a href="#contact"
                        className="hero-btn-outline px-8 py-3 rounded-full font-bold text-sm tracking-wide text-blue-300">
                        Contact Me
                    </a>
                </div>
            </div>

            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-anim text-gray-500 cursor-pointer z-10"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
                <FaChevronDown className="text-xl" style={{ color: 'var(--blue)' }} />
            </div>
        </section>
    );
}
