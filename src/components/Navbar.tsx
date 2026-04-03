import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import './Navbar.css';
import { Link } from 'react-router';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`navbar ${scrolled ? 'scrolled glass' : ''}`}
        >
            <div className="container nav-container">
                <a href="#home" className="logo">
                    &lt;<span className="gradient-text">Mohit</span> /&gt;
                </a>

                {/* Desktop Nav */}
                <div className="desktop-nav">
                    <div className="nav-links">
                        <Link to={"/"} state={{ scrollTo: "hero-section" }} className="nav-link">Home</Link>
                        <Link to={"/"} state={{ scrollTo: "experience-section" }} className="nav-link">Experience</Link>
                        <Link to={"/projects"} className="nav-link">Projects</Link>
                        <Link to={"/"} state={{ scrollTo: "skills-section" }} className="nav-link">Skills</Link>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/MohitPramanik" target="_blank" rel="noreferrer" className="social-icon">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/mohitkumarpramanik" target="_blank" rel="noreferrer" className="social-icon">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-nav glass"
                    >
                        <div className="mobile-nav-content">
                            <Link onClick={() => setIsOpen(false)} to={"/"} state={{ scrollTo: "hero-section" }} className="nav-link">Home</Link>
                            <Link onClick={() => setIsOpen(false)} to={"/"} state={{ scrollTo: "experience-section" }} className="nav-link">Experience</Link>
                            <Link onClick={() => setIsOpen(false)} to={"/projects"} className="nav-link">Projects</Link>
                            <Link onClick={() => setIsOpen(false)} to={"/"} state={{ scrollTo: "skills-section" }} className="nav-link">Skills</Link>

                            <div className="mobile-social-links">
                                <a href="https://github.com/MohitPramanik" target="_blank" rel="noreferrer" className="social-icon">
                                    <Github size={24} />
                                </a>
                                <a href="https://linkedin.com/in/mohitkumarpramanik" target="_blank" rel="noreferrer" className="social-icon">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
