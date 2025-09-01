import { FaArrowRight } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { userConversionData } from "../../../assets/assets";


export default function Conversion() {

    
    
    return (
        <div className="border-2 border-white rounded-md mt-10">
            <div className="p-10 space-y-10">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Conversion Rate to Naira</h3>
                    <HiDotsHorizontal className="w-6 h-6"/>
                </div>
                
                <ul className="flex items-center justify=between space-x-20">
                    <li className="grid grid-cols-1 gap-y-10 w-full gap-x-15 sm:grid-cols-2 md:grid-cols-3">
                        {userConversionData.map((data) => (
                            <div
                                key={data.id}
                                className="space-y-5 w-full"
                            >
                                <h1 className="text-[#FD749B] font-bold">{data.title}</h1>
                                {data.cards.map((card) => (
                                    <div
                                        key={card.id}
                                        className="flex items-center justify-between w-full text-[14px]">
                                        <p>{card.type}</p>
                                        <p>{card.price}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                        
                    </li>
                    <li className="bg-gradient-to-r from-[#FD749B] to-[#281AC8] text-white p-3 rounded-full flex items-center cursor-pointer">
                        <FaArrowRight className="w-6 h-6"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}