
import React from 'react';
import './SkillBar.css';

const SkillBar = ({ skillName, percentage }) => {
  return (
    <div className="skill-bar">
      <div className='skill-name'>{skillName}</div>
      <div className="bar-container" id='skill-name'>
        <div className="bar" style={{ width: `${percentage}%` }}>
          <span className="percentage">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
