    import './Dashboard.css'
    import React from 'react';
    import { Bar } from 'react-chartjs-2';
    import {
      Chart as ChartJS,
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend,
    } from 'chart.js';

    // Register Chart.js components
    ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
    );

    const FakeBarChart = () => {
      // Define your static data
      const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Sales',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 70], // Static data points
          },
        ],
      };

      // Define chart options (optional, for customization)
      const options = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Fake Sales Data',
          },
        },
      };

      return (
        <div className='fakeChart'>
          <h2>Dashboard Chart Example</h2>
          <Bar data={data} options={options}  />
        </div>
      );
    };

    export default FakeBarChart;