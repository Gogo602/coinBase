import {useState} from 'react'
import {Ellipsis,CreditCard, Bitcoin  } from 'lucide-react'
import Data from '../../assets/transactionData'

const OverviewTransactions = () => {
 const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

   
     const statusColor = (status) => {
    if (!status) return 'bg-gray-500 text-white';
    if (status === 'Completed') return 'bg-[#5DF888]';
    if (status === 'In Progress') return 'bg-gradient-to-b from-[#FD749B] to-[#281AC8] text-white';
    if (status === 'Failed') return 'bg-[#FF3D00] text-white';
    return 'bg-gray-500 text-white';
  };


  return (
    <div>
        <div className='border rounded-md mt-10 text-white mb-10'>
            <div className='flex justify-between relative p-8'>
                <span><h3>Transactions</h3></span>
                <span onClick={toggleVisibility}><Ellipsis /></span>
                {isVisible && (
                    <div className='flex flex-col p-2 absolute top-12 right-3'>
                        <span className='bg-gradient-to-b from-[#FD749B] to-[#281AC8] text-white p-2 rounded-md'>View</span>
                        <span className='bg-white text-gray-300 p-2  rounded-md'>Delete</span>
                    </div>
                )}
            </div>

           

            <div className='overflow-x-auto px-4 pb-4'>
              {/* wrapper ensures horizontal scroll only when needed */}
              <div>
 <div>
                <div className='flex justify-around font-bold'>
                    <span>Date</span>
                    <span>Transaction ID</span>
                    <span>Type</span>
                    <span>Name</span>
                    <span>Value</span>
                    <span>Return</span>
                    <span>Status</span>
                    <span>Action</span>
                </div>
            </div>
            <div className='mt-10'>
               { Data.map((tx, idx) => (
                 <div key={`${tx.id ?? 'tx'}-${idx}`} className='flex justify-around items-center align-center py-5 border mb-2 rounded-full '>
                   <span>{tx.date}</span>
                   <span>{tx.id}</span>
                   <span>{tx.type === 'cash' ? <CreditCard /> : <Bitcoin />}</span>
                   <span>{tx.name}</span>
                   <span>{tx.value}</span>
                   <span>{tx.return}</span>
                   <div className='w-35'>
                   <span className={` ${statusColor(tx.status)} rounded-full font-semibold px-4 py-2`}>{tx.status}</span>
                   </div>
                   <span>
                     <button className="text-xs px-3 py-1  hover:bg-white/5">
                       ...
                     </button>
                   </span>
                 </div>
               ))}
            </div>
            <div className='flex justify-center items-center mt-4'>
                <button className='text-xs px-3 py-2 bg-gradient-to-b from-[#FD749B] to-[#281AC8] text-white rounded-full'>View More</button>
            </div>
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
  )
}

export default OverviewTransactions