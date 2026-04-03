import Navbar from './components/Navbar';
import Projects from './components/Projects';
import FloatingResumeDownload from './components/FloatingResumeDownload';
import Footer from './components/Footer';
import './App.css';
import { Route, Routes, useLocation } from 'react-router';
import Home from './components/Home';
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname])

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='projects' element={<Projects />} />
        </Routes>
      </main>
      <FloatingResumeDownload />
      <Footer />
    </div>
  );
}

export default App;
