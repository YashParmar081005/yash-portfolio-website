const techs = [
    { name: 'JavaScript', icon: 'fa-js', color: '#f7df1e', bg: 'rgba(247,223,30,0.1)' },
    { name: 'TypeScript', icon: 'fa-js', color: '#3178c6', bg: 'rgba(49,120,198,0.1)' },
    { name: 'Python', icon: 'fa-python', color: '#3776ab', bg: 'rgba(55,118,171,0.1)' },
    { name: 'Java', icon: 'fa-java', color: '#007396', bg: 'rgba(0,115,150,0.1)' },
    { name: 'C++', icon: 'fa-cuttlefish', color: '#00599c', bg: 'rgba(0,89,156,0.1)' },
    { name: 'React', icon: 'fa-react', color: '#61dafb', bg: 'rgba(97,218,251,0.1)' },
    { name: 'Next.js', icon: 'fa-react', color: '#ffffff', bg: 'rgba(255,255,255,0.05)' },
    { name: 'Node.js', icon: 'fa-node-js', color: '#339933', bg: 'rgba(51,153,51,0.1)' },
    { name: 'Express', icon: 'fa-node', color: '#ffffff', bg: 'rgba(255,255,255,0.05)' },
    { name: 'HTML5', icon: 'fa-html5', color: '#e34f26', bg: 'rgba(227,79,38,0.1)' },
    { name: 'CSS3', icon: 'fa-css3-alt', color: '#1572b6', bg: 'rgba(21,114,182,0.1)' },
    { name: 'TailwindCSS', icon: 'fa-css3', color: '#38bdf8', bg: 'rgba(56,189,248,0.1)' },
    { name: 'Bootstrap', icon: 'fa-bootstrap', color: '#7952b3', bg: 'rgba(121,82,179,0.1)' },
    { name: 'MongoDB', icon: 'fa-database', color: '#47a248', bg: 'rgba(71,162,72,0.1)' },
    { name: 'MySQL', icon: 'fa-database', color: '#4479a1', bg: 'rgba(68,121,161,0.1)' },
    { name: 'PostgreSQL', icon: 'fa-database', color: '#336791', bg: 'rgba(51,103,145,0.1)' },
    { name: 'Git', icon: 'fa-git-alt', color: '#f05032', bg: 'rgba(240,80,50,0.1)' },
    { name: 'GitHub', icon: 'fa-github', color: '#ffffff', bg: 'rgba(255,255,255,0.05)' },
    { name: 'Postman', icon: 'fa-space-shuttle', color: '#ff6c37', bg: 'rgba(255,108,55,0.1)' },
    { name: 'Docker', icon: 'fa-docker', color: '#2496ed', bg: 'rgba(36,150,237,0.1)' },
    { name: 'Linux', icon: 'fa-linux', color: '#fcc624', bg: 'rgba(252,198,36,0.1)' },
    { name: 'Supabase', icon: 'fa-database', color: '#3ecf8e', bg: 'rgba(62,207,142,0.1)' },
    { name: 'TensorFlow', icon: 'fa-brain', color: '#ff6f00', bg: 'rgba(255,111,0,0.1)' },
    { name: 'Scikit-Learn', icon: 'fa-brain', color: '#f7931e', bg: 'rgba(247,147,30,0.1)' },
    { name: 'Pandas', icon: 'fa-table', color: '#150458', bg: 'rgba(21,4,88,0.1)' },
    { name: 'NumPy', icon: 'fa-calculator', color: '#4dabcf', bg: 'rgba(77,171,207,0.1)' },
];

export default function TechStack() {
    return (
        <>
            <div className="divider"></div>
            <section id="techstack" className="px-6 md:px-16 lg:px-24 py-24">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-14 text-center" data-aos="fade-up">
                        <p className="mono text-sm mb-3" style={{ color: 'var(--blue)' }}>// tools & technologies</p>
                        <h2 className="text-4xl md:text-5xl font-black">Tech Stack</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {techs.map((t, i) => (
                            <div
                                key={i}
                                className="tech-badge glass px-4 py-2 rounded-xl flex items-center gap-2"
                                data-aos="zoom-in"
                                data-aos-delay={(i % 10) * 50}
                                style={{ border: `1px solid ${t.bg}` }}
                            >
                                <i className={`fab ${t.icon}`} style={{ color: t.color }}></i>
                                <span className="font-semibold text-sm">{t.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
