import React from 'react'
import Conversion from '../../assets/conversionData'
import {Ellipsis  } from 'lucide-react'

const OverviewConversion = () => {
  return (
    <div>
         <div className="border rounded-md mt-10 text-white p-5">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">Conversion Rate to Naira</h3>
                    <Ellipsis />
                  </div>
        
                  {/* horizontal scroll only when needed */}
                  <div className="mt-3 overflow-x-auto ">
                    <div className="">
                      <table className=" w-full">
                        
                        <thead>
                          <tr className="text-sm text-gray-300">
                            <th className="px-3 py-2 text-left">iTunes Card</th>
                            <th className="px-3 py-2 "> </th>
                            <th className="px-3 py-2 text-left">Amazon Card</th>
                            <th className="px-3 py-2"> </th>
                            <th className="px-3 py-2 text-left">Bitcoin</th>
                            <th className="px-3 py-2"> </th>
                          </tr>
                        </thead>
                        <tbody>
                          {Conversion.map((item) => (
                            <tr key={item.id} >
                              <td className="px-3 py-2 break-words ">{item['iTunes Card']}</td>
                              <td className="px-3 py-2">N400.00</td>
                              <td className="px-3 py-2 break-words">{item['Amazon Card']}</td>
                              <td className="px-3 py-2">N400.00</td>
                              <td className="px-3 py-2 break-words max-w-[260px]">{item['Bitcoin']}</td>
                              <td className="px-3 py-2 text-right">N400.00</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
        
    </div>
  )
}

export default OverviewConversion