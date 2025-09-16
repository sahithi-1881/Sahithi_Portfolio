import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="experience-item">
          <h3> Data Analyst</h3>
          <h4>Project 990 | May 2024 - July 2025</h4>
          <ul>

          <li>Architected an ETL pipeline using SQL, Python, processing 2.5M+ records, improving data throughput by 30%.</li> 
          <li>Designed Tableau dashboards that highlighted key KPIs, trends, and funding disparities across 50 states,
          enabling leadership to make data-driven funding decisions.</li>
          <li>Performed segmentation analysis of grant distribution, uncovering disparities and supporting targeted funding recommendations.</li>
         </ul>
        </div>
        
        <div className="experience-item">
          <h3> Research Assistant</h3>
          <h4>Indiana University, Bloomington | August 2024 - December 2024</h4>
          <ul>
         <li>Conducted EDA on USDA datasets using Python (Pandas, NumPy), identifying 20+ critical data quality issues and coverage gaps across agricultural indicators.</li>
         <li>Crafted comprehensive Power BI dashboards using DAX calculations, visualizing 20+ years of crop and economic
         time-series data, providing stakeholders with actionable agricultural insights.</li>
         <li>Partnered with product and engineering teams to align dashboard design and KPI tracking with business
          requirements, improving feature optimization.</li>
          </ul>        
          </div>

<div className="experience-item">
          <h3> Marketing Data Analyst</h3>
          <h4> EFORGE NexGen INNOVATIONS Pvt. Ltd. | October 2022 - April 2023 | Hyderabad, India </h4>
          <ul>
          <li>Analyzed campaign and customer data using Excel (PivotTables, Power Query) to identify behavioral trends,
          increasing acquisition by 15%.</li>
          <li>Mapped customer journeys and identified drop-off points across conversion funnels, leading to a 12% uplift in
          lead-to-customer conversion.</li>
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