import { FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';

const experiences = [
    {
        role: 'Software Development Intern',
        company: 'One Web Mart Solution',
        website: 'https://onewebmart.com/',
        period: 'May 2026 — Present',
        type: 'Internship · Ongoing',
        summary: 'Working hands-on with the development team to build and ship multiple live, production-grade products across AI, healthcare, and e-commerce domains — contributing to real features from development through deployment.',
        projects: [
            {
                name: 'AI Voice Calling Platform',
                desc: 'Developing conversational AI voice agents that handle automated, real-time customer calls and natural spoken responses.',
            },
            {
                name: 'Healthcare AI CRM',
                desc: 'Building an AI-powered CRM tailored for healthcare workflows — patient management, automation, and intelligent insights.',
            },
            {
                name: 'E-Commerce Clothing App',
                desc: 'Contributing to a full-stack online clothing store featuring a product catalog, cart, and a seamless checkout flow.',
            },
            {
                name: 'ERP System',
                desc: 'Helping develop an enterprise resource planning system that streamlines and automates core business operations.',
            },
        ],
    },
];

export default function Experience() {
    return (
        <>
            <div className="divider"></div>
            <section id="experience" className="px-4 sm:px-6 md:px-16 lg:px-24 py-16 sm:py-24">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-14" data-aos="fade-up">
                        <p className="mono text-sm mb-3" style={{ color: 'var(--blue)' }}>// professional experience</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black section-title">Experience</h2>
                    </div>

                    {experiences.map((exp, i) => (
                        <div key={i} className="glass rounded-2xl p-6 sm:p-8 md:p-10" data-aos="fade-up">
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                                <div className="flex items-start gap-4">
                                    <span
                                        className="hidden sm:flex w-12 h-12 rounded-xl items-center justify-center text-xl flex-shrink-0"
                                        style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'var(--blue)' }}
                                    >
                                        <FaBriefcase />
                                    </span>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold leading-tight">{exp.role}</h3>
                                        <a
                                            href={exp.website}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 w-fit group/link hover:opacity-80 transition-opacity"
                                        >
                                            <span className="text-lg font-semibold gradient-text">{exp.company}</span>
                                            <FaExternalLinkAlt className="text-xs transition-transform group-hover/link:translate-x-0.5" style={{ color: 'var(--blue)' }} />
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:items-end gap-2 sm:pl-16 md:pl-0">
                                    <span
                                        className="mono text-xs px-3 py-1.5 rounded-full self-start sm:self-auto whitespace-nowrap"
                                        style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}
                                    >
                                        {exp.period}
                                    </span>
                                    <span className="flex items-center gap-2 text-xs font-semibold text-green-400 whitespace-nowrap">
                                        <span className="w-2 h-2 rounded-full bg-green-400" style={{ animation: 'pulse-dot 2s infinite' }}></span>
                                        {exp.type}
                                    </span>
                                </div>
                            </div>

                            <p className="text-gray-400 leading-relaxed mb-8 sm:pl-16">{exp.summary}</p>

                            {/* Live projects */}
                            <div className="sm:pl-16">
                                <p className="mono text-xs mb-5" style={{ color: 'var(--purple)' }}>// live projects i'm building</p>
                                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
                                    {exp.projects.map((p, idx) => (
                                        <div key={idx} className="flex gap-3">
                                            <span className="mt-0.5 flex-shrink-0 font-bold" style={{ color: 'var(--blue)' }}>▹</span>
                                            <div>
                                                <h4 className="font-bold mb-1">{p.name}</h4>
                                                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
