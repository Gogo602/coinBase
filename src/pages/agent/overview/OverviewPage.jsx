import { Chart as ChartJS, Tooltip as ChartTooltip, Legend as ChartLegend, CategoryScale, registerables } from 'chart.js'
ChartJS.register(...registerables)
import {CalendarCheck} from 'lucide-react'
import OverviewCards from '../../../components/agent/overview/OverviewCards'
import OverviewConversion from '../../../components/agent/overview/OverviewConversion'
import OverviewStatistics from '../../../components/agent/overview/OverviewStatistics'
import OverviewWallet from '../../../components/agent/overview/OverviewWallet'
import OverviewTransactions from '../../../components/agent/overview/OverviewTransactions'

const OverviewPage = () => {

const clipPathPolygon = 'polygon(41% 21%, 56% 15%, 59% 28%, 65% 32%, 69% 33%, 68% 39%, 71% 48%, 71% 53%, 74% 65%, 74% 74%, 65% 75%, 59% 74%, 56% 80%, 53% 86%, 45% 83%, 37% 76%)';
 
  return (
    <div className='font-poppins py-15 px-5 min-h-screen bg-[#1E0338] ml-0 lg:ml-64 pt-25'>
        {/* Main Content */}
        
        <div className='md:px-20 px-4'>
         <div className='flex justify-between items-center p-4 text-white font-bold text-xs md:text-md font-poppins' >
            <span> <h3 className='mt-2'> User Management System Overview</h3></span>
            <span className='flex whitespace-nowrap'>
                <h3> Accounts |</h3> 
                <h3 className='pl-2 block md:hidden'> RD</h3>
                <h3 className='pl-2 hidden md:block'> RAMON RIDWAN</h3>
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

       {/** Overview Cards */}
       <OverviewCards />

       {/* Conversion */}
       <OverviewConversion />


        {/* Wallet Section */}
       <OverviewWallet/>

        {/* Statistics */}
       <OverviewStatistics />

        {/* Transactions */}
        <OverviewTransactions/>
        </div>
    </div>
  )
}

export default OverviewPage