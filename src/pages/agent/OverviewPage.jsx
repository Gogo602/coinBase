import React from 'react'
import { CalendarCheck,Ellipsis,CreditCard, Bitcoin  } from 'lucide-react'
import Conversion from '../../assets/conversionData'
import  Trophy  from '../../assets/trophy.png'
import Vector from '../../assets/Vector.png'
import Element01 from '../../assets/Element01.png'
import Element02 from '../../assets/Element02.png'
import Element03 from '../../assets/Element03.png'
import Element04 from '../../assets/Element04.png'
import { Chart as ChartJS, Tooltip as ChartTooltip, Legend as ChartLegend, CategoryScale, registerables } from 'chart.js'
ChartJS.register(...registerables)
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip as RechartsTooltip } from 'recharts'
import { Bar } from 'react-chartjs-2'
import Data from '../../assets/transactionData'

const OverviewPage = () => {
  const size = 125
  const strokewidth = 10
  const percentage = 75
  const radius = (size - strokewidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference
  const clipPathPolygon = 'polygon(41% 21%, 56% 15%, 59% 28%, 65% 32%, 69% 33%, 68% 39%, 71% 48%, 71% 53%, 74% 65%, 74% 74%, 65% 75%, 59% 74%, 56% 80%, 53% 86%, 45% 83%, 37% 76%)';
  const dataRecharts = [
    { name: 'Jan', savings: 100, investment: 50 },
    { name: 'Feb', savings: 120, investment: 60 },
    { name: 'Mar', savings: 150, investment: 70 },
    { name: 'Apr', savings: 130, investment: 80 },
    { name: 'May', savings: 180, investment: 90 },
  ];

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

  const statusColor = (status) => {
    if (!status) return 'bg-gray-500 text-white';
    if (status === 'Completed') return 'bg-[#5DF888] text-black';
    if (status === 'In Progress') return 'bg-gradient-to-b from-[#FD749B] to-[#281AC8] text-white';
    if (status === 'Failed') return 'bg-[#FF3D00] text-white';
    return 'bg-gray-500 text-white';
  };

  return (
    <div className='min-h-screen h-screen overflow-hidden bg-[#1E0338] grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] font-poppins'>
       {/* Navigation Bar  */}
        <div className='h-15 bg-[#1E0338] border-b border-gray-300 col-span-2 text-white'>
            Navigation bar
        </div>
        {/* Side Bar */}
        <div className=' h-full md:w-64 w-0 bg-[#1E0338] border-r border-gray-300 text-white'>
            Side Bar
        </div>

        {/* Main Content */}
        
        <div className='border md:px-20 px-4 overflow-auto'>
         <div className='flex justify-between items-center p-4 text-white font-bold text-xs md:text-md font-poppins whitespace-nowrap' >
            <span> <h3 className='mt-2'> User Management System Overview</h3></span>
            <span className='flex'>
                <h3> Accounts |</h3> 
                <h3 className='pl-2'> RAMON RIDWAN</h3>
            </span>
        </div>

        <div className='flex justify-between mt-4 text-white'>
            <span>
                <h3 className='text-md font-bold'>Overview</h3>
            </span>
            <span className='text-gradient-to-r from-[#FD749B] to-[#281AC8]'>
                <CalendarCheck
                
                />
            </span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
            <div className='border text-white rounded-md'>
                <div className='flex justify-end pr-2'><Ellipsis /></div>
                <div className=' flex p-4'>
                    <div className='relative py-10 px-4 z-10'>
                  
                         <svg viewBox={`0 0 ${size} ${size}`} className="w-24 h-24">
                                <defs>
                                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#FD749B" /> 
                                    <stop offset="100%" stopColor="#281AC8" /> 
                                  </linearGradient>
                                </defs>

                                <circle
                                  cx={size / 2}
                                  cy={size / 2}
                                  r={radius}
                                  stroke="#FAA9C6"
                                  strokeWidth={strokewidth}
                                  fill="none"
                                />
                                <circle
                                  cx={size / 2}
                                  cy={size / 2}
                                  r={radius}
                                  stroke="url(#progressGradient)"
                                  strokeWidth={strokewidth}
                                  fill="none"
                                  strokeDasharray={circumference}
                                  strokeDashoffset={offset}
                                  strokeLinecap="round"
                                />
                                <text
                                  x="50%"
                                  y="50%"
                                  dominantBaseline="central"
                                  textAnchor="middle"
                                  className="circular-progress-bar-text text-xs fill-white"
                                >
                                  {percentage}%
                                </text>
                              </svg>
                    </div>

                    <div className=' font-bold p-4'>
                        <h3>Total Number of users</h3>
                        <div className='flex'>
                            <span className='text-green-600  flex justify-center align-center'> <h3 className='font-light flex justify-center items-center mt-10 mr-5'>22.8% </h3></span>
                            <div style={{ width: '100%', height: 100 }} >
                              <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={dataRecharts}>
                                  <RechartsTooltip />
                                  <Area
                                    type="linear"
                                    dataKey="savings"
                                    fill="#1CD1A1"
                                    fillOpacity={0.3} 
                                  />
                                  <Area
                                    type="none"
                                    dataKey="investment"
                                    stackId="1"
                                    fill="#1E0338"
                                    fillOpacity={0.3}
                                  />
                                </AreaChart>
                              </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


             <div className='border text-white rounded-md'>
                <div className='flex justify-end pr-2'><Ellipsis /></div>
                <div className=' flex p-4'>
                    <div className='relative py-10 px-4 z-10'>
                   
                         <svg viewBox={`0 0 ${size} ${size}`} className="w-24 h-24">
                                <defs>
                                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#FD749B" /> 
                                    <stop offset="100%" stopColor="#281AC8" /> 
                                  </linearGradient>
                                </defs>

                                <circle
                                  cx={size / 2}
                                  cy={size / 2}
                                  r={radius}
                                  stroke="#FAA9C6"
                                  strokeWidth={strokewidth}
                                  fill="none"
                                />
                                <circle
                                  cx={size / 2}
                                  cy={size / 2}
                                  r={radius}
                                  stroke="url(#progressGradient)"
                                  strokeWidth={strokewidth}
                                  fill="none"
                                  strokeDasharray={circumference}
                                  strokeDashoffset={offset}
                                  strokeLinecap="round"
                                />
                                <text
                                  x="50%"
                                  y="50%"
                                  dominantBaseline="central"
                                  textAnchor="middle"
                                  className="circular-progress-bar-text text-xs fill-white"
                                >
                                  {percentage}%
                                </text>
                              </svg>
                    </div>

                    <div className=' font-bold p-4'>
                        <h3>Total Number of users</h3>
                        <div className='flex'>
                            <span className='text-green-600  flex justify-center align-center'> <h3 className='font-light flex justify-center items-center mt-10 mr-5'>22.8% </h3></span>
                            <div style={{ width: '100%', height: 100 }} >
                              <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={dataRecharts}>
                                  <RechartsTooltip />
                                  <Area
                                    type="linear"
                                    dataKey="savings"
                                    fill="#1CD1A1"
                                    fillOpacity={0.3} 
                                  />
                                  <Area
                                    type="none"
                                    dataKey="investment"
                                    stackId="1"
                                    fill="#1E0338"
                                    fillOpacity={0.3}
                                  />
                                </AreaChart>
                              </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

             <div className='border text-white rounded-md'>
                <div className='flex justify-end pr-2'><Ellipsis /></div>
                <div className=' flex p-4'>
                    <div className='relative py-10 px-4 z-10'>
                 
                         <svg viewBox={`0 0 ${size} ${size}`} className="w-24 h-24">
                                <defs>
                                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#FD749B" /> 
                                    <stop offset="100%" stopColor="#281AC8" /> 
                                  </linearGradient>
                                </defs>

                                <circle
                                  cx={size / 2}
                                  cy={size / 2}
                                  r={radius}
                                  stroke="#FAA9C6"
                                  strokeWidth={strokewidth}
                                  fill="none"
                                />
                                <circle
                                  cx={size / 2}
                                  cy={size / 2}
                                  r={radius}
                                  stroke="url(#progressGradient)"
                                  strokeWidth={strokewidth}
                                  fill="none"
                                  strokeDasharray={circumference}
                                  strokeDashoffset={offset}
                                  strokeLinecap="round"
                                />
                                <text
                                  x="50%"
                                  y="50%"
                                  dominantBaseline="central"
                                  textAnchor="middle"
                                  className="circular-progress-bar-text text-xs fill-white"
                                >
                                  {percentage}%
                                </text>
                              </svg>
                    </div>

                    <div className=' font-bold p-4'>
                        <h3>Total Number of users</h3>
                        <div className='flex'>
                            <span className='text-green-600  flex justify-center align-center'> <h3 className='font-light flex justify-center items-center mt-10 mr-5'>22.8% </h3></span>
                            <div style={{ width: '100%', height: 100 }} >
                              <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={dataRecharts}>
                                  <RechartsTooltip />
                                  <Area
                                    type="linear"
                                    dataKey="savings"
                                    fill="#1CD1A1"
                                    fillOpacity={0.3} 
                                  />
                                  <Area
                                    type="none"
                                    dataKey="investment"
                                    stackId="1"
                                    fill="#1E0338"
                                    fillOpacity={0.3}
                                  />
                                </AreaChart>
                              </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       {/* Conversion */}
        <div className="border rounded-md mt-10 text-white p-5">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Conversion Rate to Naira</h3>
            <Ellipsis />
          </div>

          {/* horizontal scroll only when needed */}
          <div className="mt-3 overflow-x-auto w-full">
            <div className="inline-block min-w-full">
              <table className="w-full table-fixed text-left">
                <colgroup>
                  <col style={{ width: 100 }} />
                  <col style={{ width: 100 }} />
                  <col style={{ width: 100 }} />
                  <col style={{ width: 100 }} />
                  <col style={{ width: 100 }} />
                  <col style={{ width: 100 }} />
                  <col style={{ width: 100 }} />
                  <col style={{ width: 100 }} />
                </colgroup>
                <thead>
                  <tr className="text-sm text-gray-300">
                    <th className="px-3 py-2">iTunes Card</th>
                    <th className="px-3 py-2 text-right">Rate</th>
                    <th className="px-3 py-2">Amazon Card</th>
                    <th className="px-3 py-2 text-right">Rate</th>
                    <th className="px-3 py-2">Bitcoin</th>
                    <th className="px-3 py-2 text-right">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {Conversion.map((item) => (
                    <tr key={item.id} >
                      <td className="px-3 py-2 break-words max-w-[260px]">{item['iTunes Card']}</td>
                      <td className="px-3 py-2 text-right">N400.00</td>
                      <td className="px-3 py-2 break-words max-w-[260px]">{item['Amazon Card']}</td>
                      <td className="px-3 py-2 text-right">N400.00</td>
                      <td className="px-3 py-2 break-words max-w-[260px]">{item['Bitcoin']}</td>
                      <td className="px-3 py-2 text-right">N400.00</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Wallet Section */}
        <div className='text-white border rounded-md mt-10 p-5 relative overflow-hidden'>
            <div className='flex justify-between p-4'>
                <span>
                    <h3>Wallet</h3>
                </span>
                <span>
                    <button className='bg-white text-[#FD749B] py-4 px-5 text-xs rounded-full'>Withdraw Funds</button>
                </span>
            </div>
            <div className='justify-between gap-10 grid grid-cols-1 md:grid-cols-3'>
                <div className=''>
                    <img src={Trophy} alt="Trophy" height={300} width={300} className='pb-10' />
                </div>
                <div className='mt-8'>
                    <span className='rounded-full text-xs px-4 py-2 bg-gradient-to-br from-[#FD749B] to-[#FEAE68]'>
                        Total Earnings
                    </span>
                    <span> <h3 className='font-bold text-2xl mt-4 pl-4'>#120000.00</h3></span>
                    <span> <h3>Please note this’s the total sum of ya’
                     transaction here on  <span className='font-semibold'> GOGE AFRICA </span></h3></span>
                </div>
                <div className='mt-8'>
                     <span className='rounded-full text-xs px-4 py-2 bg-gradient-to-br from-[#FD749B] to-[#FEAE68]'>
                        Balance
                    </span>
                    <span> <h3 className='font-bold text-2xl mt-4 pl-4'>#30000.00</h3></span>
                    <span> <h3>Please note this the current balance amount left on ya’ wallet.</h3></span>
                </div>
            </div>
            <div>
                <img src={Vector} alt="" className=' absolute bottom-0 left-0'/>
                <img src={Element01} alt="" className='absolute right-12 bottom-7' />
                <img src={Element02} alt="" className='absolute left-0 '/>
                <img src={Element03} alt="" className='absolute left-5 top-6' />
                <img src={Element04} alt="" className='absolute top-6 left-32' />
                <img src={Element01} alt="" className='absolute top-5 right-8 transform rotate-30' />
            </div>
                
            
        </div>

        {/* Statistics */}
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

        {/* Transactions */}
        <div className='border rounded-md mt-10 text-white'>
            <div className='flex justify-between p-4'>
                <span><h3>Transactions</h3></span>
                <span><Ellipsis/></span>
            </div>

            <div className='overflow-x-auto px-4 pb-4'>
              {/* wrapper ensures horizontal scroll only when needed */}
              <div className="md:inline-block min-w-full hidden">
                  <table
                    className="w-full table-fixed text-left border-separate"
                    style={{ borderSpacing: 0 }}
                  >
                    <colgroup>
                      <col style={{ width: 120 }} />  {/* Date */}
                      <col style={{ width: 140 }} />  {/* Transaction ID */}
                      <col style={{ width: 100 }} />  {/* Type */}
                      <col  style={{width: 120}} />                        
                      <col style={{ width: 100 }} />  {/* Value */}
                      <col style={{ width: 100 }} />  {/* Return */}
                      <col style={{ width: 100 }} />  {/* Status */}
                      <col style={{ width: 80 }} />   {/* Action */}
                    </colgroup>

                    <thead>
                      <tr className="text-sm text-gray-300">
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Transaction ID</th>
                        <th className="px-4 py-3">Type</th>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Value</th>
                        <th className="px-4 py-3">Return</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Action</th>
                      </tr>
                    </thead>

                    <tbody className='overflow-x'>
                      {Data.map((tx, idx) => (
                        <tr
                          key={`${tx.id ?? 'tx'}-${idx}`}
                          
                        >
                          <td className="px-4 py-3 text-sm text-gray-200 truncate">{tx.date}</td>
                          <td className="px-4 py-3 text-sm text-gray-200 truncate">{tx.id}</td>
                          <td className="px-4 py-3 text-sm text-gray-200 truncate flex items-center gap-2">
                            {tx.type === 'cash' ? <CreditCard /> : <Bitcoin />}
                            
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-200 break-words max-w-[220px]">{tx.name}</td>
                          <td className="px-4 py-3 text-sm text-gray-200 truncate">{tx.value}</td>
                          <td className="px-4 py-3 text-sm text-gray-200 truncate">{tx.return}</td>
                          <td className="px-4 py-3 text-sm">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor(
                                tx.status
                              )}`}
                            >
                              {tx.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <button className="text-xs px-3 py-1  hover:bg-white/5">
                              ...
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className='flex justify-center mt-4'> <button className='bg-gradient-to-b from-[#FD749B] to-[#281AC8] text-xs text-white py-2 px-4 rounded-full'>View More</button></div>
                </div>

                {/* Mobile stacked fallback remains */}
                <div className="md:hidden mt-4 space-y-3">
                  {Data.map((d, i) => (
                    <div key={`mob-${d.id ?? i}`} className="border p-3 rounded-lg">
                      <div className="flex justify-between">
                        <div>
                          <div className="text-sm text-gray-300">{d.date}</div>
                          <div className="font-semibold text-white">{d.name}</div>
                          <div className="text-xs text-gray-400 break-words max-w-[140px]">{d.id}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-white">{d.value}</div>
                          <div className="text-xs text-gray-400">{d.return}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="text-xs text-gray-300 flex items-center gap-2">
                          {d.type === 'cash' ? <CreditCard /> : <Bitcoin />} <span className="capitalize">{d.type}</span>
                        </div>
                        <div>
                          <button className={`text-white font-bold rounded-full text-xs px-3 py-1 ${statusColor(d.status)}`}>{d.status}</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
        </div>
        </div>





    </div>
  )
}

export default OverviewPage