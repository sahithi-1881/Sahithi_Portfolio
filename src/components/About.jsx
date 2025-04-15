import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Data Analyst skilled in Analytics, Modeling & Management</h3>
            <p>
            Data Analyst with 2 years of experience in SQL, Python, Power BI, and AWS, specializing in data pipelines,
 dashboards, and process optimization. Proven ability to translate complex data into actionable insights that
 support business decisions across healthcare, marketing, and nonprofit sectors.</p>
            <div className="about-details">
              <div>
                <strong>Name:</strong> Sahithi Vangala
              </div>
              <div>
                <strong>Email:</strong> svangal@iu.edu
              </div>
              <div>
                <strong>Location:</strong> Bloomington, Indiana
              </div>
              <div>
                <strong>Availability:</strong> Full-time
              </div>
            </div>
            <blockquote>
              "It is important to follow your dreams and heart. Do something that excites you."
            </blockquote>
          </div>
          <div className="about-stats">
            <div className="stat-box">
              <h4>2+ Years</h4>
              <p>Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;