import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="experience-item">
          <h3> Data Analyst</h3>
          <h4>Project 990 | May 2024 - Present</h4>
          <ul>

          <li>Engineered an ETL pipeline with SQL & Python, processing 2.5M+ records, improving data throughput by 30%.</li> 
          <li>Designed Tableau geographic heat maps for healthcare philanthropy, identifying 50+ under-served regions for resource allocation</li>
          <li>Devised NLP features using spaCy to analyze 160,000 non-profit mission statements, extracting race and ethnicity insights for diversity initiatives</li>
          <li>Created a Tableau dashboard to visualize education philanthropy deserts in 50+ regions, facilitating targeted educational funding to improve graduation rates</li>
         </ul>
        </div>
        
        <div className="experience-item">
          <h3> Research Assistant</h3>
          <h4>Indiana University, Bloomington | August 2024 - December 2024</h4>
          <ul>
           <li>Developed interactive Power BI dashboards visualizing 20+ years of crop and economic data for local farmers, improving actionable insights and operational efficiency by 25%</li>
         <li>Implemented NLP-based news feeds using OpenAI’s GPT-4, summarizing real-time agricultural updates from 10+ sources, boosting user engagement by 30%</li>
         <li>Curated a centralized data catalog with 100+ metadata entries, enhancing data accessibility and usability for diverse stakeholders across agricultural communities</li>
          </ul>        
          </div>

<div className="experience-item">
          <h3> Marketing Data Analyst</h3>
          <h4> EFORGE NexGen INNOVATIONS Pvt. Ltd. | October 2022 - April 2023</h4>
          <ul>
          <li> Analyzed market data in Excel to identify key consumer trends, driving a 15% increase in customer acquisition</li>
          <li>Designed Power BI dashboards to track 20+ marketing KPIs, optimizing resource allocation and boosting campaign ROI by 25%</li>
  </ul>      </div>
        
        <h2 className="section-title">Education</h2>
        
        <div className="experience-item">
          <h3>Master of Science in Data Science</h3>
          <h4> Indiana University, Bloomington |  August 2023 - May 2025 | Bloomington, Indiana </h4>
          <p>Specialized in Analysis, problem solving and visualizing skills.</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;