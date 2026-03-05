import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = {
    fullstack: [
        {
            id: "fs1",
            title: "Upasana SmartRead",
            desc: "A smart library management system for digital & physical book tracking with user dashboards.",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
            icon: "📚",
            tech: [
                { name: "React", bg: "rgba(97,218,251,0.15)", color: "#61dafb" },
                { name: "Node.js", bg: "rgba(71,162,72,0.15)", color: "#68d391" },
                { name: "MongoDB", bg: "rgba(71,162,72,0.15)", color: "#4CAF50" }
            ],
            github: "#",
            live: "#",
            delay: "100"
        },
        {
            id: "fs2",
            title: "Waerly",
            desc: "A modern clothing e-commerce platform with real-time inventory, cart, and seamless checkout.",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
            icon: "👗",
            tech: [
                { name: "React", bg: "rgba(0,212,255,0.15)", color: "#00d4ff" },
                { name: "Supabase", bg: "rgba(62,207,142,0.15)", color: "#3ecf8e" },
                { name: "TailwindCSS", bg: "rgba(56,189,248,0.15)", color: "#38bdf8" }
            ],
            github: "#",
            live: "#",
            delay: "200"
        },
        {
            id: "fs3",
            title: "VidiChat",
            desc: "Real-time chat & video call app with WebRTC peer connections, rooms, and live messaging.",
            img: "vidichat.png",
            icon: "📹",
            tech: [
                { name: "React", bg: "rgba(0,212,255,0.15)", color: "#00d4ff" },
                { name: "Stream", bg: "rgba(255,255,255,0.1)", color: "#eee" },
                { name: "Node.js", bg: "rgba(255,202,40,0.15)", color: "#68d391" }
            ],
            github: "https://github.com/YashParmar081005/VidiChat",
            live: "https://vidichat-amber.vercel.app/",
            delay: "300"
        },
        {
            id: "fs4",
            title: "T3 Chat Clone",
            desc: "A modern, real-time chat application built with the T3 Stack, featuring instant messaging and elegant UI.",
            img: "t3chat.png",
            icon: "💬",
            tech: [
                { name: "Next.js", bg: "rgba(0,0,0,0.4)", color: "#fff", border: "1px solid #333" },
                { name: "JavaScript", bg: "rgba(49,120,198,0.15)", color: "#e8f538" },
                { name: "TailwindCSS", bg: "rgba(56,189,248,0.15)", color: "#38bdf8" },
                { name: "shadcn", bg: "rgba(200,80,250,0.15)", color: "#f1f1f1" }
            ],
            github: "https://github.com/YashParmar081005/t3-chat",
            live: "#",
            delay: "400"
        }
    ],
    aiml: [
        {
            id: "ml1",
            title: "Potato Disease Classification",
            desc: "Deep learning CNN model that classifies potato plant diseases from leaf images with 95%+ accuracy.",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
            icon: "🥔",
            tech: [
                { name: "Deep Learning", bg: "rgba(255,165,0,0.15)", color: "#ffa500" },
                { name: "TensorFlow", bg: "rgba(255,165,0,0.15)", color: "#ff6b35" },
                { name: "Streamlit", bg: "rgba(255,75,75,0.15)", color: "#ff4b4b" }
            ],
            github: "https://github.com/YashParmar081005/potato-disease-classification-model-DL",
            live: "#",
            delay: "100"
        },
        {
            id: "ml2",
            title: "Bengaluru Real Estate Prediction",
            desc: "ML regression model predicting Bengaluru property prices using location, area & BHK features.",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
            icon: "🏠",
            tech: [
                { name: "Scikit-learn", bg: "rgba(247,147,30,0.15)", color: "#f7931e" },
                { name: "Pandas", bg: "rgba(21,4,88,0.5)", color: "#a78bfa", border: "1px solid #7c3aed" },
                { name: "Flask", bg: "rgba(0,212,255,0.1)", color: "#00d4ff" }
            ],
            github: "https://github.com/YashParmar081005/Bengaluru-real-estate-price-predictions-ml-project",
            live: "#",
            delay: "150"
        },
        {
            id: "ml3",
            title: "Movie Recommendation System",
            desc: "Content-based filtering engine recommending movies using cosine similarity & NLP features.",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
            icon: "🎬",
            tech: [
                { name: "Python", bg: "rgba(55,118,171,0.2)", color: "#60a5fa" },
                { name: "Scikit-learn", bg: "rgba(247,147,30,0.15)", color: "#f7931e" },
                { name: "Streamlit", bg: "rgba(255,75,75,0.15)", color: "#ff4b4b" }
            ],
            github: "https://github.com/YashParmar081005/movie-recommendations-system-ml-project",
            live: "#",
            delay: "200"
        },
        {
            id: "ml4",
            title: "Spam Mail Detection",
            desc: "NLP-powered binary classifier detecting spam emails using TF-IDF vectorization and Naive Bayes.",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
            icon: "📧",
            tech: [
                { name: "NLP", bg: "rgba(0,212,255,0.1)", color: "#00d4ff" },
                { name: "Scikit-learn", bg: "rgba(247,147,30,0.15)", color: "#f7931e" },
                { name: "Python", bg: "rgba(55,118,171,0.2)", color: "#60a5fa" }
            ],
            github: "https://github.com/YashParmar081005/spem-mail-detection-ml-project",
            live: "#",
            delay: "250"
        },
        {
            id: "ml5",
            title: "Language Detection",
            desc: "Multi-class ML model identifying 22+ languages from raw text using character n-gram features.",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
            icon: "🌐",
            tech: [
                { name: "ML", bg: "rgba(255,255,255,0.1)", color: "#ddd" },
                { name: "Python", bg: "rgba(55,118,171,0.2)", color: "#60a5fa" },
                { name: "Pandas", bg: "rgba(21,4,88,0.5)", color: "#a78bfa", border: "1px solid #7c3aed" }
            ],
            github: "https://github.com/YashParmar081005/language-detection-ml-project",
            live: "#",
            delay: "300"
        },
        {
            id: "ml6",
            title: "Heart Stroke Prediction",
            desc: "Clinical ML classifier predicting stroke risk from patient health metrics with high recall score.",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
            icon: "❤️",
            tech: [
                { name: "ML", bg: "rgba(255,255,255,0.1)", color: "#ddd" },
                { name: "Scikit-learn", bg: "rgba(247,147,30,0.15)", color: "#f7931e" },
                { name: "NumPy", bg: "rgba(77,171,207,0.2)", color: "#4dabcf" }
            ],
            github: "https://github.com/YashParmar081005/Heart-Stroke-Prediction-ML-",
            live: "#",
            delay: "350"
        }
    ],
    genai: [
        {
            id: "ai1",
            title: "LangChain Chatbot",
            desc: "Conversational AI bot built using LangChain for intelligent question answering and multi-turn chat capabilities.",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
            icon: "🦜",
            tech: [
                { name: "LangChain", bg: "rgba(0,180,120,0.15)", color: "#00b478" },
                { name: "Python", bg: "rgba(55,118,171,0.2)", color: "#60a5fa" },
                { name: "OpenAI", bg: "rgba(16,163,127,0.15)", color: "#10a37f" }
            ],
            github: "https://github.com/YashParmar081005/genAi-with-langchain",
            live: "#",
            delay: "100"
        },
        {
            id: "ai3",
            title: "LangGraph Chatbot",
            desc: "Multi-agent chatbot with stateful conversation flows and graph-based orchestration using LangGraph.",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
            icon: "🕸️",
            tech: [
                { name: "LangGraph", bg: "rgba(100,80,220,0.15)", color: "#8b5cf6" },
                { name: "Python", bg: "rgba(55,118,171,0.2)", color: "#60a5fa" },
                { name: "LLM", bg: "rgba(200,100,255,0.15)", color: "#c084fc" }
            ],
            github: "#",
            live: "#",
            delay: "200"
        },
        {
            id: "ai4",
            title: "Hugging Face Chatbot",
            desc: "NLP chatbot powered by Hugging Face transformer models for natural language understanding and generation.",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
            icon: "🤗",
            tech: [
                { name: "Hugging Face", bg: "rgba(255,200,50,0.15)", color: "#ffd21e" },
                { name: "Transformers", bg: "rgba(255,130,50,0.15)", color: "#ff8232" },
                { name: "Python", bg: "rgba(55,118,171,0.2)", color: "#60a5fa" }
            ],
            github: "#",
            live: "#",
            delay: "250"
        },
        {
            id: "ai5",
            title: "RAG Pipeline Bot",
            desc: "Retrieval-Augmented Generation bot that answers questions from internet sources and uploaded PDFs using vector search.",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
            icon: "🔍",
            tech: [
                { name: "RAG", bg: "rgba(0,180,120,0.15)", color: "#00b478" },
                { name: "LangChain", bg: "rgba(0,180,120,0.15)", color: "#00b478" },
                { name: "FAISS", bg: "rgba(0,150,200,0.15)", color: "#0096c8" },
                { name: "PDF", bg: "rgba(220,50,50,0.15)", color: "#dc3232" }
            ],
            github: "#",
            live: "#",
            delay: "300"
        }
    ],
    miniprojects: [
        {
            id: "mp1",
            title: "Promage AI Bot",
            desc: "Multifunctional AI bot capable of generating images, analyzing uploaded image content, and engaging in natural conversations.",
            img: "promage.png",
            icon: "🖼️",
            tech: [
                { name: "React", bg: "rgba(97,218,251,0.15)", color: "#61dafb" },
                { name: "Gemini API", bg: "rgba(26,115,232,0.15)", color: "#4285F4" },
                { name: "Stability AI", bg: "rgba(180,100,250,0.15)", color: "#b464fa" }
            ],
            github: "https://github.com/YashParmar081005/Promage",
            live: "#",
            delay: "100"
        },
        {
            id: "mp2",
            title: "Jarvis AI Voice Assistant",
            desc: "A simple desktop AI voice assistant inspired by Iron Man's Jarvis, using Python for speech recognition and text-to-speech feedback.",
            img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=600&q=80",
            icon: "🎙️",
            tech: [
                { name: "Python", bg: "rgba(55,118,171,0.2)", color: "#60a5fa" },
                { name: "SpeechRecognition", bg: "rgba(255,100,100,0.15)", color: "#ff6464" },
                { name: "pyttsx3", bg: "rgba(100,200,100,0.15)", color: "#64c864" }
            ],
            github: "#",
            live: "#",
            delay: "150"
        },
        {
            id: "mp3",
            title: "AI Support Widget",
            desc: "An embeddable customer support chatbot script. Integrate it into any web app to provide instant, AI-driven assistance to users.",
            img: "image.png",
            icon: "🎧",
            tech: [
                { name: "Next.js", bg: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid #333" },
                { name: "Widget API", bg: "rgba(255,165,0,0.15)", color: "#ffa500" },
                { name: "TailwindCSS", bg: "rgba(56,189,248,0.15)", color: "#38bdf8" }
            ],
            github: "https://github.com/YashParmar081005/Ai-Support",
            live: "https://ai-support-eta.vercel.app/",
            delay: "200"
        },
        {
            id: "mp4",
            title: "Wanderlust (Airbnb Clone)",
            desc: "A full-featured property listing and booking platform replicating core Airbnb functionalities.",
            img: "wanderlust.png",
            icon: "🌍",
            tech: [
                { name: "React", bg: "rgba(97,218,251,0.15)", color: "#61dafb" },
                { name: "Node.js", bg: "rgba(71,162,72,0.15)", color: "#68d391" },
                { name: "TailwindCSS", bg: "rgba(56,189,248,0.15)", color: "#38bdf8" },
                { name: "MongoDB", bg: "rgba(71,162,72,0.15)", color: "#4CAF50" }
            ],
            github: "#",
            live: "#",
            delay: "250"
        }
    ]
};

const ProjectCard = ({ project }) => (
    <div className="project-card glass rounded-2xl p-6 group h-full flex flex-col" data-aos="fade-up" data-aos-delay={project.delay}>
        <img src={project.img} alt={project.title} className="w-full h-48 object-cover rounded-xl mb-5 opacity-80 group-hover:opacity-100 transition-opacity border border-white/5" />
        <div className="text-4xl mb-4 hidden">{project.icon}</div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.tech.map((t, idx) => (
                <span key={idx} className="px-2 py-1 rounded-md text-xs font-semibold" style={{ background: t.bg, color: t.color, border: t.border }}>
                    {t.name}
                </span>
            ))}
        </div>
        <div className="flex items-center gap-3">
            {project.github && project.github !== '#' && (
                <a href={project.github} target="_blank" rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white">
                    <FaGithub /> GitHub
                </a>
            )}
            {project.live && project.live !== '#' && (
                <a href={project.live} target="_blank" rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-[var(--blue)]">
                    {project.title.includes('Video Demo') ? <FaExternalLinkAlt /> : <FaExternalLinkAlt />} {project.title.includes('Video') ? 'Video Demo' : 'Live Site'}
                </a>
            )}
        </div>
    </div>
);

export default function Projects() {
    const [activeTab, setActiveTab] = useState('fullstack');

    const tabs = [
        { id: 'fullstack', label: 'Full Stack' },
        { id: 'aiml', label: 'AI / ML' },
        { id: 'genai', label: 'Gen AI' },
        { id: 'miniprojects', label: 'Mini Projects' }
    ];

    return (
        <section id="projects" className="px-6 md:px-16 lg:px-24 py-24">
            <div className="max-w-6xl mx-auto">
                <div className="mb-14" data-aos="fade-up">
                    <p className="mono text-sm mb-3" style={{ color: 'var(--blue)' }}>// my work</p>
                    <h2 className="text-4xl md:text-5xl font-black section-title">Projects</h2>
                </div>
                <div className="flex flex-wrap gap-6 mb-10 border-b border-white/10 pb-0" data-aos="fade-up">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`tab-btn text-lg font-bold pb-4 px-2 ${activeTab === tab.id ? 'active' : 'text-gray-400'}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-[fadeInUp_0.4s_ease]">
                    {projectsData[activeTab].map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
