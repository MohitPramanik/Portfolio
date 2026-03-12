import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
    ];

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
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="nav-link"
                            >
                                {link.name}
                            </a>
                        ))}
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
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsOpen(false);
                                        setTimeout(() => {
                                            const element = document.querySelector(link.href);
                                            element?.scrollIntoView({ behavior: 'smooth' });
                                        }, 300); // Wait for menu close animation
                                    }}
                                    className="mobile-nav-link"
                                >
                                    {link.name}
                                </a>
                            ))}
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
