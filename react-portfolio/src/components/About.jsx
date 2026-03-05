import { useState, useEffect, useRef } from 'react';

const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasStarted) {
                setHasStarted(true);
            }
        }, { threshold: 0.1 });

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [hasStarted, end, duration]);

    return <span ref={ref}>{count}</span>;
}


export default function About() {
    return (
        <section id="about" className="px-6 md:px-16 lg:px-24 py-24">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <div data-aos="fade-right">
                    <p className="mono text-sm mb-3" style={{ color: 'var(--blue)' }}>// about me</p>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 section-title">Who Am I?</h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        I'm a passionate <span className="text-white font-semibold">Full Stack Developer</span> and <span
                            className="text-white font-semibold">AI/ML Engineer</span> who loves turning complex problems into
                        elegant digital solutions. From crafting pixel-perfect UIs to deploying machine learning models in
                        production, I thrive across the entire technology stack.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        I've built <span className="gradient-text font-bold">real-world projects</span> ranging from library
                        management systems to deep learning classifiers, and competed in national-level hackathons where I
                        delivered impactful solutions under pressure.
                    </p>
                    <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-green-400" style={{ animation: 'pulse-dot 2s infinite' }}></span>
                        <span className="text-green-400 text-sm font-semibold">Available for freelance & full-time roles</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5" data-aos="fade-left">
                    <div className="glass rounded-2xl p-6 text-center counter-card" data-aos="zoom-in" data-aos-delay="100">
                        <div className="stat-num gradient-text"><CountUp end={17} /></div>
                        <div className="text-gray-400 text-sm mt-1">Projects Built</div>
                    </div>
                    <div className="glass rounded-2xl p-6 text-center counter-card" data-aos="zoom-in" data-aos-delay="200">
                        <div className="stat-num gradient-text"><CountUp end={6} /></div>
                        <div className="text-gray-400 text-sm mt-1">ML Models</div>
                    </div>
                    <div className="glass rounded-2xl p-6 text-center counter-card" data-aos="zoom-in" data-aos-delay="300">
                        <div className="stat-num gradient-text"><CountUp end={2} /></div>
                        <div className="text-gray-400 text-sm mt-1">Hackathons</div>
                    </div>
                    <div className="glass rounded-2xl p-6 text-center counter-card" data-aos="zoom-in" data-aos-delay="400">
                        <div className="stat-num gradient-text"><CountUp end={28} /></div>
                        <div className="text-gray-400 text-sm mt-1">Technologies</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
