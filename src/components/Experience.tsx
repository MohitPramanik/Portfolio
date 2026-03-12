import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const experiences = [
    {
        id: 1,
        role: 'Software Developer',
        company: 'Inadev India Pvt. Ltd.',
        location: 'Kolkata, West Bengal',
        duration: 'Dec 2024 – Feb 2026',
        description: 'Led frontend development for 3 core modules using React.js and TypeScript. Built 20+ reusable components and collaborated with Agile cross-functional teams to deliver 25+ business features.',
        tech: ['React.js', 'TypeScript', 'Redux', 'Bootstrap', 'HTML5', 'SASS']
    },
    {
        id: 2,
        role: 'Frontend Developer Intern',
        company: 'Code Nimbus Solutions',
        location: 'Bangalore, Karnataka',
        duration: 'June 2024 – Nov 2024',
        description: 'Developed a dynamic invitation platform with 10+ real-time customizable templates. Created 15+ modular ES6+ components and integrated 17+ REST APIs while ensuring cross-browser UI stability.',
        tech: ['React.js', 'JavaScript', 'GSAP', 'HTML5', 'CSS3'],
        certificate: 'https://drive.google.com/file/d/1ECIrLN3TQnELsLcIQ2CojMsgaj1rakgq/view'
    }
];

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Professional <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="section-subtitle">
                        My journey through tech, building scalable frontend solutions and impactful user interfaces.
                    </p>
                </motion.div>

                <div className="timeline">
                    <div className="timeline-line"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        >
                            <div className="timeline-dot">
                                <Briefcase size={20} />
                            </div>

                            <div className="glass-card timeline-content">
                                <div className="timeline-header">
                                    <h3 className="timeline-role">{exp.role}</h3>
                                    <div className="timeline-duration">
                                        <Calendar size={16} /> {exp.duration}
                                    </div>
                                </div>

                                <h4 className="timeline-company">{exp.company} <br />{exp.location}</h4>

                                <p className="timeline-description">
                                    {exp.description}
                                </p>

                                {exp.certificate && (
                                    <div className="mb-4">
                                        <a
                                            href={exp.certificate}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="exp-cert-link"
                                        >
                                            View Certificate <span>↗</span>
                                        </a>
                                    </div>
                                )}

                                <div className="timeline-tech">
                                    {exp.tech.map((tech, i) => (
                                        <span key={i} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
