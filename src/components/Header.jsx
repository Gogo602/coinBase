import {assets} from "../assets/assets";
import { MdOutlineNotificationsNone } from "react-icons/md";


export default function Header(){

    return(
        <div className="h-[60px] w-full fixed top-0 left-0 bg-[#1E0338] border-b border-gray-300 flex items-center px-4 justify-between z-999">
            <div className="px-10 flex items-center justify-between w-full">
                 <img src={assets.coinBaseLogo} alt="coinbase_img" />
                <div className="hidden md:flex items-center justify-between space-x-8">
                    <input type="search" name="search" placeholder="search e.g card" className="w-70 py-1 px-10 rounded-full border border-white outline-0 placeholder:text-[#FFFFFF]" />
                    <div className="flex items-center justify-between text-white space-x-4">
                        <p className="h-8 w-8 rounded-full bg-white">.</p>
                        <h3 className="font-bold">Agent Rose</h3>
                    </div>
                    <div className="hidden lg:inline-block cursor-pointer right-20">
                        <MdOutlineNotificationsNone className="absolute w-8 h-8 text-white" />
                        <p className="relative top-0 left-3 bg-gradient-to-t from-[#FD749B] to-[#281AC8] text-white text-[10px] rounded-full px-1">24</p>
                    </div>
                </div>
            </div>
        </div>
    )
}