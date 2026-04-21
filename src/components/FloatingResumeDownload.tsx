import { Download } from 'lucide-react';
import './FloatingResumeDownload.css';

const FloatingResumeDownload = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1LO5yfKm20Y-FHpl_ZXWp_qWiWf5LMuxN/view?usp=sharing"
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
