import { useEffect, useRef, useState } from 'react';

const SkillItem = ({ name, percent }) => {
    const [progress, setProgress] = useState(0);
    const ref = useRef(null);
    const radius = 28;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                const target = percent;
                const duration = 1500;
                const startTime = performance.now();

                const animate = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const p = Math.min(elapsed / duration, 1);
                    const easeOut = 1 - Math.pow(1 - p, 4);
                    const currentProgress = Math.floor(easeOut * target);

                    setProgress(currentProgress);

                    if (p < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        setProgress(target);
                    }
                };
                requestAnimationFrame(animate);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.2 });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [percent]);

    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div ref={ref} className="skill-card group relative p-4 rounded-3xl glass flex flex-col items-center justify-center gap-3 overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,212,255,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

            <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 z-10">
                <svg className="w-full h-full transform -rotate-90 filter drop-shadow-[0_0_8px_rgba(0,212,255,0.2)] group-hover:drop-shadow-[0_0_12px_rgba(0,212,255,0.6)] transition-all duration-300">
                    <circle cx="40" cy="40" r={radius} stroke="currentColor" strokeWidth="4" fill="transparent" className="text-gray-700/30" />
                    <circle cx="40" cy="40" r={radius} stroke="url(#gradient-skill)" strokeWidth="5" strokeLinecap="round" fill="transparent" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} className="transition-all duration-75 ease-linear" />
                    <defs>
                        <linearGradient id="gradient-skill" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="var(--blue)" />
                            <stop offset="100%" stopColor="var(--purple)" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                    <div className="flex items-baseline">
                        <span className="text-lg sm:text-xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                            {progress}
                        </span>
                        <span className="text-[10px] text-gray-500 font-bold ml-0.5">%</span>
                    </div>
                </div>
            </div>

            <span className="relative z-10 text-xs sm:text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 text-center tracking-wide">
                {name}
            </span>
        </div>
    );
};

export default function Skills() {
    const frontendSkills = [
        { name: 'React', percent: 90 },
        { name: 'Next.js', percent: 80 },
        { name: 'TypeScript', percent: 70 },
        { name: 'JavaScript', percent: 90 },
        { name: 'TailwindCSS', percent: 95 }
    ];

    const backendSkills = [
        { name: 'Node.js', percent: 90 },
        { name: 'Python', percent: 90 },
        { name: 'Java', percent: 80 },
        { name: 'C', percent: 85 },
        { name: 'REST APIs', percent: 85 }
    ];

    const databaseSkills = [
        { name: 'MongoDB', percent: 85 },
        { name: 'PostgreSQL', percent: 80 },
        { name: 'MySQL', percent: 85 },
        { name: 'Supabase', percent: 80 },
        { name: 'Firebase', percent: 70 }
    ];

    const mlSkills = [
        { name: 'Scikit-learn', percent: 80 },
        { name: 'NumPy / Pandas', percent: 85 },
        { name: 'TensorFlow', percent: 75 },
        { name: 'Streamlit', percent: 50 },
        { name: 'Matplotlib', percent: 70 }
    ];

    const genAiSkills = [
        { name: 'LangChain', percent: 80 },
        { name: 'LangGraph', percent: 80 },
        { name: 'Hugging Face', percent: 80 },
        { name: 'RAG Pipelines', percent: 85 },
        { name: 'Prompt Engineering', percent: 90 }
    ];

    const cloudSkills = [
        { name: 'AWS', percent: 70 },
        { name: 'Render', percent: 85 },
        { name: 'Vercel', percent: 90 },
        { name: 'Docker', percent: 75 }
    ];

    return (
        <>
            <div className="divider"></div>
            <section id="skills" className="px-4 sm:px-6 md:px-16 lg:px-24 py-16 sm:py-24 relative overflow-hidden">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="mb-14" data-aos="fade-up">
                        <p className="mono text-sm mb-3" style={{ color: 'var(--blue)' }}>// expertise level</p>
                        <h2 className="text-4xl md:text-5xl font-black section-title inline-block">Skills</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Frontend */}
                        <div data-aos="fade-right">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 pb-3 border-b border-white/5">
                                <span className="p-2 rounded-lg bg-white/5">🎨</span>
                                <span className="gradient-text tracking-wide">Frontend</span>
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {frontendSkills.map((s, i) => <SkillItem key={i} {...s} />)}
                            </div>
                        </div>

                        {/* Backend */}
                        <div data-aos="fade-left">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 pb-3 border-b border-white/5">
                                <span className="p-2 rounded-lg bg-white/5">⚙️</span>
                                <span className="gradient-text tracking-wide">Backend</span>
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {backendSkills.map((s, i) => <SkillItem key={i} {...s} />)}
                            </div>
                        </div>

                        {/* Database */}
                        <div data-aos="fade-right" data-aos-delay="100">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 pb-3 border-b border-white/5 mt-4 lg:mt-0">
                                <span className="p-2 rounded-lg bg-white/5">🗄️</span>
                                <span className="gradient-text tracking-wide">Database</span>
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {databaseSkills.map((s, i) => <SkillItem key={i} {...s} />)}
                            </div>
                        </div>

                        {/* AI / ML */}
                        <div data-aos="fade-left" data-aos-delay="100">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 pb-3 border-b border-white/5 mt-4 lg:mt-0">
                                <span className="p-2 rounded-lg bg-white/5">�</span>
                                <span className="gradient-text tracking-wide">AI / ML</span>
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {mlSkills.map((s, i) => <SkillItem key={i} {...s} />)}
                            </div>
                        </div>

                        {/* Gen AI */}
                        <div data-aos="fade-right" data-aos-delay="150">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 pb-3 border-b border-white/5 mt-4 lg:mt-0">
                                <span className="p-2 rounded-lg bg-white/5">🧠</span>
                                <span className="gradient-text tracking-wide">Gen AI</span>
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {genAiSkills.map((s, i) => <SkillItem key={i} {...s} />)}
                            </div>
                        </div>

                        {/* Cloud & DevOps */}
                        <div data-aos="fade-left" data-aos-delay="150">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 pb-3 border-b border-white/5 mt-4 lg:mt-0">
                                <span className="p-2 rounded-lg bg-white/5">☁️</span>
                                <span className="gradient-text tracking-wide">Cloud & DevOps</span>
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {cloudSkills.map((s, i) => <SkillItem key={i} {...s} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
