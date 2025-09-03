import React from 'react'
import { assets } from '../../../assets/assets'


const OverviewWallet = () => {
  return (
    <div>
         <div className='text-white border rounded-md mt-10 p-5 relative overflow-hidden'>
            <div className='flex justify-between p-4'>
                <span>
                    <h3 className='z-20'>Wallet</h3>
                </span>
                <span>
                    <button className='bg-white text-[#FD749B] py-4 px-5 text-xs rounded-full'>Withdraw Funds</button>
                </span>
            </div>
            <div className='justify-between align-center gap-10 grid grid-cols-1 md:grid-cols-3'>
                <div className=''>
                    <img src={assets.trophy} alt="Trophy" height={300} width={200} className='pb-10' />
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
                <img src={assets.Vector} alt="" className=' absolute bottom-0 left-0'/>
                <img src={assets.Element01} alt="" className='absolute right-12 bottom-7' />
                <img src={assets.Element02} alt="" className='absolute left-0 '/>
                <img src={assets.Element03} alt="" className='absolute left-5 top-6' />
                <img src={assets.Element04} alt="" className='absolute top-6 left-32' />
                <img src={assets.Element01} alt="" className='absolute top-5 right-8 transform rotate-30' />
            </div>
                
            
        </div>
    </div>
  )
}

export default OverviewWallet