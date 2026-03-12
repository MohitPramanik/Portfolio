import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'Commonwealth Management Portal',
        description: 'An enterprise fintech portal for automating complex loan repayment workflows, featuring role-based screens, data-heavy tables, and end-to-end repayment process flows. Built with React + TypeScript, modular UI components, and route-level lazy loading.',
        tech: ['React.js', 'TypeScript', 'Redux', 'Bootstrap', 'SASS'],
        link: '',
        github: '',
        featured: true,
        organization: 'Inadev India'
    },
    {
        id: 2,
        title: 'BlogHub: Full Stack Platform',
        description: 'A full‑stack MERN blog platform with secure authentication and a fully responsive UI, where users can publish and manage posts, like/follow, comment, and save posts for later. It includes profile management with image upload, category filtering, theme toggle, pagination, and lazy loading, backed by an MVC API with ownership-based access control so users can’t modify others’ posts or comments.',
        tech: ['MERN', 'TypeScript', 'Bootstrap'],
        link: 'https://bloghub-fe.onrender.com',
        github: 'https://github.com/MohitPramanik/Blog-application',
        featured: true
    },
    {
        id: 3,
        title: 'Invitation Template Platform',
        description: 'A dynamic invitation template platform for weddings and events featuring multiple templates, scroll-based animations, and fully responsive layouts. Templates are implemented as reusable React components, with content and sections managed via code and API-driven data for rendering',
        tech: ['React.js', 'JavaScript', 'GSAP', 'CSS3'],
        link: '',
        github: '',
        featured: true,
        organization: 'Code Nimbus Solutions'
    },
    {
        id: 4,
        title: 'Image Editing Platform',
        description: 'A lightweight, browser-based image editor supporting crop/rotate, drawing, and annotations with multi-select editing and layer controls. Includes zoom/pan for large canvases and selective export of chosen objects, making it useful for quick mockups, documentation screenshots, and everyday image edits.',
        tech: ['React.js', 'TypeScript', 'Fabric.js', 'Bootstrap'],
        link: 'https://image-editor-eight-zeta.vercel.app/',
        github: 'https://github.com/MohitPramanik/Image-Editor?tab=readme-ov-file',
        featured: true
    },
    {
        id: 5,
        title: 'DSPMU Clone',
        description: 'A responsive UI clone of the DSPMU website built with semantic HTML, modern CSS, and vanilla JavaScript. Recreates key pages, layout structure, and interactive UI behaviors.',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        link: 'https://mohitpramanik.github.io/DSPMU-wesbsite-clone/HTML/',
        github: 'https://github.com/MohitPramanik/DSPMU-wesbsite-clone',
        featured: false
    },
    {
        id: 6,
        title: 'E-Kalyan Clone',
        description: 'A front-end UI clone of the E-Kalyan website built with HTML, CSS, and JavaScript, focused on responsive layouts, component-like sections, and pixel-accurate styling.',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        link: 'https://mohitpramanik.github.io/E-kalyan-website-clone/HTML/index.html',
        github: 'https://github.com/MohitPramanik/E-kalyan-website-clone',
        featured: false
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
                                    {project.organization && (
                                        <div className="project-meta">
                                            <span className="org-badge">{project.organization}</span>
                                        </div>
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
