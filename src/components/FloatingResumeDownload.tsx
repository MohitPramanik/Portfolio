import { Download } from 'lucide-react';
import './FloatingResumeDownload.css';

const FloatingResumeDownload = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1H1hDapoZD5rFJnUPJzx9gAnRx4YdQt_3/view?usp=sharing"
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
