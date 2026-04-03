import Navbar from './components/Navbar';
import Projects from './components/Projects';
import FloatingResumeDownload from './components/FloatingResumeDownload';
import Footer from './components/Footer';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/Home';

function App() {

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
