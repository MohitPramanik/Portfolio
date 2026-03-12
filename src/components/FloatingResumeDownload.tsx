import { Download } from 'lucide-react';
import './FloatingResumeDownload.css';

const FloatingResumeDownload = () => {
  return (
    <a
      href="/resume.pdf"
      download
      className="floating-resume"
      aria-label="Download resume"
      title="Download resume"
    >
      <Download size={20} />
    </a>
  );
};

export default FloatingResumeDownload;
