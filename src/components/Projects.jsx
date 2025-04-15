import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Stock Market Real-Time Data Analysis Using Kafka',
      technologies: ['Python', 'Kafka', "Database"],
      description: ' Streamlined real-time analysis of over 1 million daily stock market messages using Apache Kafka, enhancing market decision-making speed',
 link: 'https://github.com/sahithi-1881/Data-Professional-Survey'},
    {
      title: ' Emergency Room Patient Visit Analytics',
      technologies: ['Python', 'PowerBi', 'Analysis'],
      description: 'Deployed an interactive Power BI dashboard to analyze trends from 4,600+ ER visits, improving healthcare response strategies',
    link: 'https://github.com/sahithi-1881/Patient-Visit-Analysis-for-Emergency-Care'},
    {
      title: ' CarePal: AI-Driven Health and Wellness Chatbot',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn'],
      description: '{ Developed and deployed CarePal, an AI-driven health chatbot leveraging Llama 2 and Pinecone, achieving 90% user satisfaction',
    link: 'https://github.com/sahithi-1881/Exploratory-Data-Analysis-Project'},
    {
      title: ' Phishing Website Detection Using Machine Learning Algorithms',
      technologies: ['Python','Machine Learning', 'JavaScript', 'XGBoost'],
      description: ' Established an XGBoost-based AI system with a 94% accuracy rate in detecting phishing websites.',
      link: 'https://github.com/sahithi-1881/Phishing-Website-Detection-Using-Machine-Learning-Algorithms'}
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <div className="project-technologies">
                {project.technologies.join(' • ')}
              </div>
              <p>{project.description}</p>
              <a 
                href={project.link || '#'} 
                className="btn"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;