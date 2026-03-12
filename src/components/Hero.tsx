import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>

            <div className="container hero-container">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-content"
                >
                    <div className="hero-badge">
                        <span className="pulse-dot"></span>
                        Available for new opportunities
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm <br />
                        <span className="gradient-text">Mohit Kumar Pramanik</span>
                    </h1>

                    <h2 className="hero-subtitle">Software Developer</h2>

                    <p className="hero-description">
                        With 1.5+ years of experience specializing in React.js, TypeScript, and the MERN stack.
                        I build scalable, production-ready applications with a strong focus on clean architecture, performance optimization, and premium user experiences.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View Work <ArrowRight size={18} />
                        </a>
                        <a href="mailto:mohitpramanik548@gmail.com" className="btn btn-secondary">
                            Contact Me <Download size={18} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hero-image-wrapper"
                >
                    <div className="hero-image-glow"></div>
                    <img src="/profile.png" alt="Mohit Kumar Pramanik" className="hero-image" />

                    {/* Floating badges */}
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="floating-badge badge-react glass"
                    >
                        Atom
                        <span>React.js</span>
                    </motion.div>

                    <motion.div
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="floating-badge badge-ts glass"
                    >
                        TS
                        <span>TypeScript</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
