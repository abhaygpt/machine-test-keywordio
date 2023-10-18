import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: [ '25% Female', '35% Unknown', '45% Male'],
    datasets: [
      {
        label: '# of Votes',
        data: [25,35,45],
        backgroundColor: [
          
          'Blue',
          'Black',
          'orange'
        ],
        borderColor: [
            'Blue',
            'Black',
            'orange'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Set to false to maintain the size of the chart
    responsive: true,
    // You can also set other chart options here, such as title, legend, etc.

    plugins: {
        legend: {
          position: 'right',
           // Change the position of labels (top, bottom, left, right)
        },
      },
  };



const Chart = () => {
  return (
   <div style={{ height: '300px' }} className="doughnutchart col-lg-10">
    <Doughnut data={data} options={options} />
   </div>
  )
}

export default Chart