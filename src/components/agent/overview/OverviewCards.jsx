import {useState} from 'react'
import { Chart as ChartJS, Tooltip as ChartTooltip, Legend as ChartLegend, CategoryScale, registerables } from 'chart.js'
ChartJS.register(...registerables)
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip as RechartsTooltip } from 'recharts'
import { CalendarCheck,Ellipsis,CreditCard, Bitcoin  } from 'lucide-react'

const OverviewCards = () => {

  const size = 125
  const strokewidth = 10
  const percentage = 75
  const radius = (size - strokewidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference
const dataRecharts = [
    { name: 'Jan', savings: 100, investment: 50 },
    { name: 'Feb', savings: 120, investment: 60 },
    { name: 'Mar', savings: 150, investment: 70 },
    { name: 'Apr', savings: 130, investment: 80 },
    { name: 'May', savings: 180, investment: 90 },
  ];

   const [activeButton, setActiveButton] = useState(null);
   const [isVisible, setIsVisible] = useState(false);

      const toggleVisibility = (buttonId) => {
          setActiveButton(buttonId);
          setIsVisible(!isVisible);
      };
  


  return (
    <div>
         <div className='grid grid-cols-1 md:grid-cols-3 mt-5'>
            <div className='border text-white rounded-md'>
                <div className='flex justify-end pt-2 pr-2 relative'><Ellipsis onClick={() => toggleVisibility('button1')} />
                {activeButton === 'button1' && isVisible && (
                    <div className='flex flex-col p-2 absolute top-6 right-0'>
                        <span className='bg-gradient-to-b from-[#FD749B] to-[#281AC8] text-white p-2 rounded-md'>View</span>
                        <span className='bg-white text-gray-300 p-2  rounded-md'>Delete</span>
                    </div>
                )}
                </div>
                 
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
                                  className="circular-progress-bar-text text-md fill-white text-white font-bold"
                                >
                                  15000
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
                <div className='flex justify-end pt-2 pr-2 relative'><Ellipsis onClick={() => toggleVisibility('button2')}   />
                {activeButton === 'button2' && isVisible && (
                    <div className='flex flex-col p-2 absolute top-6 right-0'>
                        <span className='bg-gradient-to-b from-[#FD749B] to-[#281AC8] text-white p-2 rounded-md'>View</span>
                        <span className='bg-white text-gray-300 p-2  rounded-md'>Delete</span>
                    </div>
                )}
                </div>
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
                                  className="circular-progress-bar-text text-md fill-white text-white font-bold"
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
                <div className='flex justify-end pt-2 pr-2'><Ellipsis /></div>
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
    </div>
  )
}

export default OverviewCards