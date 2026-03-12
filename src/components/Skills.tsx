import { motion } from 'framer-motion';
import { Code2, Database, Layout, GitBranch, Terminal } from 'lucide-react';
import './Skills.css';

const skillCategories = [
    {
        title: 'Frontend Libraries & Frameworks',
        icon: <Layout className="skill-icon" size={24} />,
        skills: ['React.js', 'Next.js', 'Angular.js'],
        color: '#61dafb'
    },
    {
        title: 'Core Languages',
        icon: <Code2 className="skill-icon" size={24} />,
        skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
        color: '#f7df1e'
    },
    {
        title: 'Styling & Animation',
        icon: <Layout className="skill-icon" size={24} />,
        skills: ['Tailwind CSS', 'Bootstrap', 'GSAP', 'CSS Modules'],
        color: '#38bdf8'
    },
    {
        title: 'State Management',
        icon: <Database className="skill-icon" size={24} />,
        skills: ['Redux Toolkit', 'Context API', 'React Query'],
        color: '#764abc'
    },
    {
        title: 'Backend & Databases',
        icon: <Database className="skill-icon" size={24} />,
        skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL'],
        color: '#4db33d'
    },
    {
        title: 'Tools & Version Control',
        icon: <GitBranch className="skill-icon" size={24} />,
        skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
        color: '#f05032'
    }
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="section-subtitle">
                        A comprehensive overview of my technical expertise and the tools I use to build robust applications.
                    </p>
                </motion.div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card skill-card"
                        >
                            <div
                                className="skill-icon-wrapper"
                                style={{ backgroundColor: `${category.color}15`, border: `1px solid ${category.color}30` }}
                            >
                                <div style={{ color: category.color }}>{category.icon}</div>
                            </div>
                            <h3 className="skill-category-title">{category.title}</h3>

                            <ul className="skill-list">
                                {category.skills.map((skill, i) => (
                                    <li key={i} className="skill-item">
                                        <Terminal size={14} className="skill-bullet" style={{ color: category.color }} />
                                        <span>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="education-cert-container glass-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="education-column">
                        <h3 className="gradient-text">Education</h3>
                        <h4>Bachelor of Science in Computer Application</h4>
                        <p>Dr. Shyama Prasad Mukherjee University, Ranchi</p>
                        <div className="edu-meta">
                            <span>2021 – 2024</span>
                            <span className="cgpa-badge">CGPA: 8.66</span>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <div className="education-column">
                        <h3 className="gradient-text">Certification</h3>
                        <h4>Full Stack Web Development</h4>
                        <p>Apna College</p>
                        <div className="edu-meta mt-2">
                            <span className="cgpa-badge border-green">Completed</span>
                            <a
                                href="https://drive.google.com/file/d/1jK0mI_uNBKvApBuU-vj5-4wrOJGdlJNY/view"
                                target="_blank"
                                rel="noreferrer"
                                className="cert-link"
                            >
                                View Certificate <span>↗</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
