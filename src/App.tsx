import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SkillsDemo from './components/SkillsDemo';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        {/* <SkillsDemo /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
