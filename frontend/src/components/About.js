import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Our Social Media Analytics Dashboard</h1>
      <section className="about-section">
      <h2>Our Vision</h2>
      <p>
        Our Social Media Analytics Dashboard is designed to provide real-time data analysis
        from various social media platforms, helping you track your performance, audience engagement, 
        and heps you to growth across social media platfrom such as YouTube and twitter.
      </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>We aim provide users with data-driven insights to make better decisions and understand 
          their social media reach and engagement. Our dashboard is built to be user-friendly, 
          informative, and meets the needs of businesses people and individuals.
        </p>
      </section>

      <section className="about-section">
        <h2>Features</h2>
        <ul>
          <li>Real-time analytics from YouTube and Twitter</li>
          <li>Data customization in reports and can be visualized</li>
          <li>Detailed engagement metrics is displayed using pie chart and graph</li>
          <li>Profile information about the person can be viewed</li>
        </ul>
      </section>

     
      <section className="about-section">
        <h2>Contact</h2>
        <p>
          Any querys ? Reach out to us <a href="mailto:nidhekshaank.22csd@kongu.edu">nidhekshaank.22csd@kongu.edu</a>.
        </p>
      </section>
    </div>
  );
}

export default About;
