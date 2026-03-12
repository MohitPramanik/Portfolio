import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Terminal } from 'lucide-react';
import { useState, type ReactNode } from 'react';

type SkillCategory = {
  title: string;
  icon: ReactNode;
  skills: string[];
  color: string;
};

type SkillCategoryCardProps = {
  category: SkillCategory;
  index: number;
  maxVisibleSkills: number;
};

const SkillCategoryCard = ({ category, index, maxVisibleSkills }: SkillCategoryCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasOverflow = category.skills.length > maxVisibleSkills;
  const visibleSkills = hasOverflow && !isExpanded ? category.skills.slice(0, maxVisibleSkills) : category.skills;
  const hiddenCount = Math.max(0, category.skills.length - maxVisibleSkills);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card skill-card"
    >

      <div className='flex-wrapper'>

        <div
          className="skill-icon-wrapper"
          style={{ backgroundColor: `${category.color}15`, border: `1px solid ${category.color}30` }}
        >
          <div style={{ color: category.color }}>{category.icon}</div>
        </div>

        <h3 className="skill-category-title">{category.title}</h3>
      </div>

      <ul className={`skill-list ${hasOverflow && isExpanded ? 'skills-overflow' : ''}`}>
        {visibleSkills.map((skill) => (
          <li key={skill} className="skill-item">
            <Terminal size={14} className="skill-bullet" style={{ color: category.color }} />
            <span>{skill}</span>
          </li>
        ))}
      </ul>

      {hasOverflow && (
        <button
          type="button"
          className="skill-toggle"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Show less' : `Show ${hiddenCount} more`}
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      )}
    </motion.div>
  );
};

export default SkillCategoryCard;
