import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import './Footer.css';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2 className="logo">
                            &lt;<span className="gradient-text">Mohit</span> /&gt;
                        </h2>
                        <p className="footer-description">
                            Frontend Developer specializing in React.js, TypeScript, and modern web technologies. Focuses on delivering clean architecture, dynamic animations, and scalable end-to-end features.
                        </p>
                    </div>

                    <div className="footer-links-group">
                        <div className="footer-links">
                            <h3>Quick Links</h3>
                            <Link to={"/"} state={{ scrollTo: "hero-section" }}>Home</Link>
                            <Link to={"/"} state={{ scrollTo: "experience-section" }}>Experience</Link>
                            <Link to={"/projects"}>Projects</Link>
                            <Link to={"/"} state={{ scrollTo: "skills-section" }}>Skills</Link>
                        </div>

                        <div className="footer-links">
                            <h3>Connect</h3>
                            <a href="https://github.com/MohitPramanik" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                                <Github size={16} /> GitHub
                            </a>
                            <a href="https://linkedin.com/in/mohitkumarpramanik" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                                <Linkedin size={16} /> LinkedIn
                            </a>
                            <a href="mailto:mohitpramanik548@gmail.com" className="flex items-center gap-2">
                                <Mail size={16} /> mohitpramanik548@gmail.com
                            </a>
                            <a href="tel:+916203354784" className="flex items-center gap-2">
                                <Phone size={16} /> +91 6203354784
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Mohit Kumar Pramanik. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
