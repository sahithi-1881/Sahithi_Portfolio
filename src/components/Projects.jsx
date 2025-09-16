import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Emergency Room Patient Visit Analytics',
      technologies: ['Power BI', 'SQL(CTEs, Window Functions, Stored Procedures)'],
      description: `Crafted interactive Power BI dashboard using DAX and advanced SQL queries to analyze 4,600+ ER visits tracking patient flow KPIs and operational metrics.`,
    link: 'https://github.com/sahithi-1881/Patient-Visit-Analysis-for-Emergency-Care'},
    {
      title: 'Customer Segmentation Pipeline',
      technologies: ['Snowflake', 'dbt','Clustering'],
      description: `Built RFM metrics by transforming 20K+ customer transactions in Snowflake with dbt models, ensuring standardized business logic.
      Segmented customers with KMeans and visualized cohorts in Tableau, improving insights into 5K+ records and supporting marketing strategies projected to boost engagement by 12%.`,
    link: 'https://github.com/sahithi-1881/Customer-Segmentation-Pipeline'},
    {
      title: 'Stock Market Real-Time Data Analysis Using Kafka',
      technologies: ['AWS (S3,Glue,Redshift)', 'Apache Spark', 'Kafka', 'Tableau'],
      description: `Streamlined real-time analysis of over 1 million daily stock market messages, enhancing market decision-making speed.
      Deployed scalable AWS infrastructure (S3, Glue, Redshift) and Tableau for analytics visualization, reducing overall data latency by 8ms`,
    link: 'https://github.com/sahithi-1881/Stock-Market-Real-Time-Data-Analysis'},
    {
      title: 'CarePal: AI-Driven Health and Wellness Chatbot',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn'],
      description: `Developed an AI-powered chatbot using Llama 2 and Pinecone, achieving 90% user satisfaction.
      Applied NLP techniques (spaCy, NLTK) for entity recognition and query preprocessing, enhancing response quality`,
    link: 'https://github.com/sahithi-1881/Health-Wellness-Chatbot'},
    {
      title: 'Phishing Website Detection Using Machine Learning Algorithms',
      technologies: ['Machine Learning', 'Python', 'Feature Engineering'],
      description: `Built an AI-powered phishing website detection system addressing a critical cybersecurity challenge.\n
      Implemented and compared multiple ML models; XGBoost achieved 94% detection accuracy.`,
      link: 'https://github.com/sahithi-1881/Phishing-Website-Detection-Using-Machine-Learning-Algorithms'},
    {
      title: 'Data Professional Survey Dashboard',
      technologies: ['Power BI', 'DAX'],
      description: 'Developed an interactive Power BI dashboard analyzing survey data from professionals, uncovering insights on salary trends and barriers to entry in the data industry.',
      link: 'https://github.com/sahithi-1881/Data-Professional-Survey'}
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
              <ul>
              {(Array.isArray(project.description)
              ? project.description
              : String(project.description)
              .split('\n')                  // support "\n" separated strings
              .filter(Boolean)
              ).map((point, i) => (
              <li key={i}>{point.replace(/^•\s*/, '')}</li>  // strip any leading bullet chars
              ))}
              </ul>


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