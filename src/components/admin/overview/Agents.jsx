import { HiDotsHorizontal } from "react-icons/hi";
import { Agents } from "../../../assets/assets";


export default function Agent(){

    return (
        <div className="border-2 border-white rounded-md mt-10 h-full w-full">
            <div className="p-10 space-y-10">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Agents</h3>
                    <HiDotsHorizontal className="w-6 h-6"/>
                </div>
                <div className="space-y-5">
                    <div className="flex items-center justify-between font-bold px-5">
                        <span className="">Account Status</span>
                        <span className="">Username </span>
                        <span className="hidden md:inline-block">Email</span>
                        <span>Action</span>
                    </div>
                    {Agents.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between font-bold border border-white rounded-full px-5 py-3"
                        >
                        <span className={item.status === "Active" ? "bg-[#5DF888] px-5 py-1 rounded-full" : item.status === "Down" ? "bg-[#F85D5D] px-5 py-1 rounded-full" : "bg-gradient-to-b from-[#FD749B] to-[#281AC8] px-5 py-1 rounded-full"}>
                            {item.status}
                            </span>
                        <span className="md:pl-20">{item.username}</span>
                        <span className="hidden md:inline-block">{item.email}</span>
                        <span><HiDotsHorizontal className="w-6 h-6"/></span>
                    </div>
                    ))}
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