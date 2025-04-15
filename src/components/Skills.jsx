import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
   {
    title: 'Technical',
    skills: [
      { name: 'Python', percentage: 99 },
      { name: 'SQL', percentage: 85 },
      { name: 'R Language', percentage: 75 },
      { name: 'Tableau', percentage: 90 },
      { name: 'Power BI', percentage: 85 }
    ]
  },
  {
    title: 'Additional Skills',
    skills: [
      { name: 'Excel', percentage: 95 },
      { name: 'Machine Learning', percentage: 80 },
      { name: 'Data Visualization', percentage: 90 },
      { name: 'Problem Solving', percentage: 90 },
      { name: 'Communication', percentage: 85 }
    ]
  }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <blockquote>"Mastering tools that transform ideas into scalable solutions"</blockquote>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;