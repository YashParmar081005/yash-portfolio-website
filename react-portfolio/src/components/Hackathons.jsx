import { FaTrophy, FaMedal, FaExternalLinkAlt } from 'react-icons/fa';

export default function Hackathons() {
    return (
        <>
            <div className="divider"></div>
            <section id="hackathons" className="px-6 md:px-16 lg:px-24 py-24">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-14" data-aos="fade-up">
                        <p className="mono text-sm mb-3" style={{ color: '#f59e0b' }}>// achievements</p>
                        <h2 className="text-4xl md:text-5xl font-black section-title">Hackathons</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="hack-card glass-gold rounded-2xl p-8 relative overflow-hidden" data-aos="fade-right">
                            <div className="ribbon">TOP 10</div>
                            <div className="text-5xl mb-4">🏆</div>
                            <div className="mono text-xs mb-2" style={{ color: '#f59e0b' }}>HACKATHON</div>
                            <h3 className="text-2xl font-black mb-1 gradient-text-gold">Hack A Throne</h3>
                            <div className="text-lg font-bold mb-3">UniNest Project</div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-5">
                                A smart platform connecting students to PG accommodations, roommates & college housing — built end-to-end during the hackathon sprint.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-2 py-1 rounded-md text-xs font-semibold" style={{ background: 'rgba(245,158,11,0.2)', color: '#f59e0b' }}>React</span>
                                <span className="px-2 py-1 rounded-md text-xs font-semibold" style={{ background: 'rgba(245,158,11,0.2)', color: '#f59e0b' }}>Node Js</span>
                                <span className="px-2 py-1 rounded-md text-xs font-semibold" style={{ background: 'rgba(245,158,11,0.2)', color: '#f59e0b' }}>MongoDB</span>
                                <span className="px-2 py-1 rounded-md text-xs font-semibold" style={{ background: 'rgba(245,158,11,0.2)', color: '#f59e0b' }}>Express Js</span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2 text-sm" style={{ color: '#f59e0b' }}>
                                    <FaTrophy /><span className="font-semibold">College Level Hackathon</span>
                                </div>
                                <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-[#f59e0b] hover:text-white">
                                    <FaExternalLinkAlt /> Certificate
                                </a>
                            </div>
                        </div>

                        <div className="hack-card glass-gold rounded-2xl p-8 relative overflow-hidden" data-aos="fade-left">
                            <div className="ribbon">TOP 20</div>
                            <div className="text-5xl mb-4">🏆</div>
                            <div className="mono text-xs mb-2" style={{ color: '#f59e0b' }}>HACKATHON</div>
                            <h3 className="text-2xl font-black mb-1 gradient-text-gold">OdooXGCET</h3>
                            <div className="text-lg font-bold mb-3">RentFlow Project</div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-5">
                                An automated rental management solution built on Odoo — streamlining property listings, rent tracking, maintenance requests & tenant onboarding.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-2 py-1 rounded-md text-xs font-semibold" style={{ background: 'rgba(245,158,11,0.2)', color: '#f59e0b' }}>React</span>
                                <span className="px-2 py-1 rounded-md text-xs font-semibold" style={{ background: 'rgba(245,158,11,0.2)', color: '#f59e0b' }}>Node Js</span>
                                <span className="px-2 py-1 rounded-md text-xs font-semibold" style={{ background: 'rgba(245,158,11,0.2)', color: '#f59e0b' }}>MongoDB</span>
                                <span className="px-2 py-1 rounded-md text-xs font-semibold" style={{ background: 'rgba(245,158,11,0.2)', color: '#f59e0b' }}>Express Js</span>
                            </div>
                            <div className="flex items-center justify-between mt-2 flex-wrap gap-2">
                                <div className="flex items-center gap-2 text-sm" style={{ color: '#f59e0b' }}>
                                    <FaMedal /><span className="font-semibold">OdooXGCET Hackathon</span>
                                </div>
                                <div className="flex gap-2 w-full mt-2 lg:mt-0 lg:w-auto">
                                    <a href="#" target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-[#f59e0b] hover:text-white">
                                        <FaExternalLinkAlt /> Certificate
                                    </a>
                                    <a href="https://youtu.be/d9yot-hHn4g" target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-[#f59e0b] hover:text-white">
                                        <FaExternalLinkAlt /> Video Demo
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
