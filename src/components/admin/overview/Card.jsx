import { HiDotsHorizontal } from "react-icons/hi";
import { assets } from "../../../assets/assets";
import { FaPlus } from "react-icons/fa";



export default function Card() {


    return (
        <div className="border-2 border-white rounded-md mt-10 h-full">
            <div className="p-7 space-y-7">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Card</h3>
                    <HiDotsHorizontal className="w-6 h-6"/>
                </div>
                <div className="flex items-center justify-between px-10 space-x-15">
                    <div className="grid grid-cols-5 gap-5">
                        <img src={assets.amazon} alt="amzon_img" />
                        <img src={assets.stem} alt="stem_img" />
                        <img src={assets.googleplay} alt="googleplay_img" />
                        <img src={assets.itunes} alt="itunes_img" />
                        <img src={assets.others} alt="others_img" />
                    </div>
                    <div>
                        <FaPlus className="w-12 h-12 p-3 bg-gradient-to-b from-[#FD749B] to-[#281AC8] rounded-full"/>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full py-5">
                    <button className="bg-gradient-to-b from-[#FD749B] to-[#281AC8] px-6 py-3 rounded-full">
                        view more
                    </button>
                </div>
            </div>
        </div> 
    )
}