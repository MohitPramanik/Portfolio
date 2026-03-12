import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'Commonwealth Management Portal',
        description: 'An enterprise fintech platform to automate complex loan repayment processes. I engineered high-performance frontend modules that reduced initial load times by ~1.8s and improved overall page speed by 30% through strategic code refactoring and lazy loading.',
        tech: ['React.js', 'TypeScript', 'Redux', 'Bootstrap', 'SASS'],
        link: '',
        github: '',
        featured: true,
        organization: 'Inadev India'
    },
    {
        id: 2,
        title: 'BlogHub: Full Stack Platform',
        description: 'A production-ready MERN stack publishing system focusing on scalability. Features include secure JWT-based Auth, MVC backend architecture, soft-delete functionality, and server-side pagination. Optimized with frontend code-splitting and memoization to prevent unnecessary re-renders.',
        tech: ['MERN', 'TypeScript', 'Bootstrap'],
        link: 'https://bloghub-fe.onrender.com',
        github: '',
        featured: true
    },
    {
        id: 3,
        title: 'Invitation Template Platform',
        description: 'A dynamic platform for creating custom invitations for weddings and events. I implemented complex scroll-based animations (GSAP) and a real-time preview system integrated with 17+ REST API endpoints.',
        tech: ['React.js', 'JavaScript', 'GSAP', 'CSS3'],
        link: '',
        github: '',
        featured: true,
        organization: 'Code Nimbus Solutions'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        A selection of my recent work focusing on scalable architecture, performance, and user experience.
                    </p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`glass-card project-card ${project.featured ? 'featured' : ''}`}
                        >
                            <div className="project-header">
                                <Folder size={40} className="project-folder-icon" />
                                <div className="project-links">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.link && project.link !== '#' && (
                                        <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">
                                    {project.link || project.github ? (
                                        <a href={project.link && project.link !== '#' ? project.link : project.github} target="_blank" rel="noreferrer">
                                            {project.title}
                                        </a>
                                    ) : (
                                        <span>{project.title}</span>
                                    )}
                                </h3>
                                {project.organization && (
                                    <div className="project-meta">
                                        <span className="org-badge">{project.organization}</span>
                                    </div>
                                )}
                                <p className="project-description">{project.description}</p>
                            </div>

                            <div className="project-footer">
                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
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

export default Projects;
