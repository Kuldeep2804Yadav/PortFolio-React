
import React from 'react';
import SkillBar from './SkillBar';
import './Skill.css';

const skills = [
  { skillName: "HTML", percentage: 85 },
  { skillName: "CSS", percentage: 80 },
  { skillName: "JavaScript", percentage: 75 },
  { skillName: "React", percentage: 60 },
  { skillName: "MongoDB", percentage: 65 },
  { skillName: "DSA", percentage: 55 },
  { skillName: "GitHub", percentage: 75 },

];

const Skill = () => {
  return (
    <div id="skill">
      <h2>My Skills</h2>
      {skills.map((skill, index) => (
        <SkillBar key={index} skillName={skill.skillName} percentage={skill.percentage} />
      ))}
    </div>
  );
};

export default Skill;
