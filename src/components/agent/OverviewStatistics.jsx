import React from 'react'
import { Ellipsis } from 'lucide-react';
import { Bar } from 'react-chartjs-2'

const OverviewStatistics = () => {

      const data = {
    labels: ['Amazon', 'Google', 'iTunes', 'Payoneer', 'Bitcoin','Ethereum','Tecno', 'Paypal','Aliexpress','Konga', 'Jumia'],
    datasets: [
      {
        label: 'Sales',
        data: [40, 50, 20, 35, 40, 36, 25, 40, 47, 50, 45],
        backgroundColor:  (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            
            return null;
          }

          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, '#FD749B'); 
          gradient.addColorStop(1, '#281AC8'); 
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    borderRadius: 10,
    plugins: {
      legend: {
        labels: { color: 'white' },
      },
    },
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
    barThickness: 15,
  }


  return (
    <div>
         <div className='text-white border rounded-md mt-10 p-4'>
            <div className='flex justify-between p-4'> 
                <span><h3>Statistics</h3></span>
                <span><Ellipsis/></span>
            </div>
            <div>
                <h3 className='text-xs'>My own Report</h3>
            </div>
            <Bar data={data} options={options} />
        </div>
    </div>
  )
}

export default OverviewStatistics