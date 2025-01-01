import React from 'react';
import { Bar,Pie } from 'react-chartjs-2';
import '../styles/YouTube.css';

function VideoLikesChart({ videoStats }) {
    const videoLikesChartData = {
        labels: videoStats?.map((video) => {
            const title = video.title;
            const firstSeparatorIndex = title.indexOf('|');
            const lastSeparatorIndex = title.lastIndexOf('|');
            if (firstSeparatorIndex === -1 || firstSeparatorIndex === lastSeparatorIndex) {
                const words = title.trim().split(' ');
                return words[words.length - 1]; 
            } else {
                return title.slice(firstSeparatorIndex + 1, lastSeparatorIndex).trim();
            }
        }) || [],
        datasets: [
            {
                label: 'Top 5 Video Likes',
                data: videoStats?.map((video) => video.likeCount) || [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',  // Red
                    'rgba(54, 162, 235, 0.6)',  // Blue
                    'rgba(255, 206, 86, 0.6)',  // Yellow
                    'rgba(75, 192, 192, 0.6)',  // Teal
                    'rgba(153, 102, 255, 0.6)', // Purple
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',  // Red
                    'rgba(54, 162, 235, 1)',  // Blue
                    'rgba(255, 206, 86, 1)',  // Yellow
                    'rgba(75, 192, 192, 1)',  // Teal
                    'rgba(153, 102, 255, 1)', // Purple
                ],
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
            <h2>Top 5 Video Likes</h2>
            <div className="chart">
                <Pie
                    data={videoLikesChartData}
                    options={{
                        responsive: true,
                        plugins: {
                            legend: { display: true, position: 'top' },
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

export default VideoLikesChart;
