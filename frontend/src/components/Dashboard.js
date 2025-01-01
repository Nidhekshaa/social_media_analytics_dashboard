import React from 'react';
import { Link } from 'react-router-dom';  // Add Link for navigation
import '../styles/Dashboard.css';
import socialMediaImg from '../styles/images/socialmedia.png';
function Dashboard() {
    return (
        <div className="landing-page">
           

            {/* Features Section */}
            <section className="features-section">
                <h2>Dashboard Highlights</h2>
                <div className="features">

                    <div className="feature">
                        <h3>Real-Time Data</h3>
                        <p>Get the updates on your social media statistics.</p>
                    </div>
                    
                    <div className="feature">
                        <h3>Data Visualization</h3>
                        <p>Use visually charts, graphs for data interpretation.</p>
                    </div>
                    <div className="feature">
                        <h3>Data driven Analytics</h3>
                        <p>Data-driven analytics that can be integrated into our dashboard to make it insightful and actionable Data Overview.</p>
                    </div>
                    <div className="feature">
                        <h3>Platform-Specific Metrics</h3>
                        <p>Each platform has unique metrics such as video views, subscriber count, Date joined, Followers count, Following count</p>
                    </div>
                    <div className="feature">
                    <img src={socialMediaImg}
                    style={{ width: '100%', borderRadius: '10px' }}/>

                    </div>
                    <div className="feature">
                        <h3>Tailored Reporting</h3>
                        <p>Design and share detailed, customized reports with your team, highlighting critical insights for strategic decision-making.</p>
                    </div>
                    <div className="feature">
                        <h3>Comprehensive Analytics</h3>
                        <p>Track follower growth, engagement rates, and post performance across all platforms.</p>
                    </div>
                    <div className="feature">
                        <h3>Integrated Metrics Dashboard</h3>
                        <p>Unify data from all platforms into a single, user-friendly dashboard for seamless comparison and actionable insights to amplify your social media strategy.</p>
                    </div>
                    
                    <div className="feature">
                        <h3>Interactive Visualizations</h3>
                        <p>Transform raw data into stunning visuals with interactive charts, graphs, and infographics for effortless data interpretation and presentation.</p>
                    </div>
                </div>
            </section>          

            {/* Footer Section */}
            <footer className="footer">
                <p>&copy; 2024 Social Media Analytics Dashboard</p>
            </footer>
        </div>
    );
}

export default Dashboard;
