import React from 'react';
import { Pie, Line } from 'react-chartjs-2';
import './Dashboard.css';
import 'chart.js/auto';
const Dashboard = () => {
  // Dummy data for pie charts
  const buySellData = {
    labels: ['Buy', 'Sell'],
    datasets: [
      {
        data: [30, 70],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  const tradeStatusData = {
    labels: ['Open', 'Executed', 'Cancelled'],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384'],
      },
    ],
  };

  // Dummy data for time series graph
  const timeSeriesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Replace with actual dates
    datasets: [
      {
        label: 'Average Settlement Date - Trade Date Duration',
        data: [5, 7, 3, 8, 6], // Replace with actual data
        borderColor: '#36A2EB',
        fill: false,
      },
    ],
  };

  return (
    <div className="Dashboard">
      <div className="chart">
        <Pie data={buySellData} />
      </div>
      <div className="chart">
        <Pie data={tradeStatusData} />
      </div>
      <div className="chart">
        <Line data={timeSeriesData} />
      </div>
    </div>
  );
};

export default Dashboard;
