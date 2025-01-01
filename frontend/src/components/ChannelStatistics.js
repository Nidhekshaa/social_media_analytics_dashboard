import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import '../styles/YouTube.css';

function ChannelStatistics({ channelData, channelName }) {
    const channelChartData = {
        labels: ['Subscribers', 'Views', 'Videos'],
        datasets: [
            {
                label: `${channelName} Channel Statistics`,
                data: [
                    channelData?.channelStats?.subscriberCount || 0,
                    channelData?.channelStats?.viewCount || 0,
                    channelData?.channelStats?.videoCount || 0,
                ],
                borderColor: 'rgba(75, 192, 192, 1)', // Line color (Teal)
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Fill under the line (optional)
            borderWidth: 2, // Line thickness
            tension: 0.4, // Smooth curve for the line
            },
        ],
    };

    const formatNumber = (num) => {
        if (num >= 1e6) {
            return (num / 1e6).toFixed(1) + 'M'; 
        } else if (num >= 1e3) {
            return (num / 1e3).toFixed(1) + 'K'; 
        }
        return num; 
    };

    return (
        <div className="chart-container">
            <h2>Channel Statistics</h2>
            
            <div className="statistics-container">
                <p><strong>Total Subscribers:</strong> {formatNumber(channelData.channelStats?.subscriberCount || 0)}</p>
                <p><strong>Total Views:</strong> {formatNumber(channelData.channelStats?.viewCount || 0)}</p>
                <p><strong>Videos Count:</strong> {formatNumber(channelData.channelStats?.videoCount || 0)}</p>
            </div>

            <div className="chart">
                <Line
                    data={channelChartData}
                    options={{
                        responsive: true,
                        plugins: {
                            legend: { display: true, position: 'top' },
                        },
                        
                        layout: {
                            padding: {
                                top: 10,
                                bottom: 10,
                                left: 10,
                                right: 10,
                            },
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                grid: { color: 'rgba(200, 200, 200, 0.3)' },
                                ticks: {
                                    callback: (value) => formatNumber(value),
                                },
                            },
                            x: {
                                grid: { color: 'rgba(200, 200, 200, 0.3)' },
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
}

export default ChannelStatistics;
