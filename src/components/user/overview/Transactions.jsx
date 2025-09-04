import { HiDotsHorizontal } from "react-icons/hi";
import { userTransactions } from "../../../assets/assets";


export default function Transactions(){

    return (
        <div className="border-2 border-white rounded-md mt-10 h-full w-full">
            <div className="p-10 space-y-10">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Transactions</h3>
                    <HiDotsHorizontal className="w-6 h-6"/>
                </div>
                <div className="space-y-5">
                    <div className="flex items-center justify-between font-bold px-5">
                        <span className="hidden md:inline-block">Date</span>
                        <span className="hidden md:inline-block">Transaction ID</span>
                        <span className="hidden md:inline-block">Type</span>
                        <span>Name</span>
                        <span className="hidden md:inline-block">Value</span>
                        <span className="hidden md:inline-block">Return</span>
                        <span>Status</span>
                        <span>Action</span>
                    </div>
                    {userTransactions.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between font-bold border border-white rounded-full px-5 py-3"
                        >
                        <span className="hidden md:inline-block">{item.date}</span>
                        <span className="hidden md:inline-block">{item.transactionId}</span>
                        <span className="hidden md:inline-block">{item.type}</span> {" "}
                        <span>{item.name}</span>
                        <span className="hidden md:inline-block">{item.value}</span>
                        <span className="hidden md:inline-block">{item.return}</span>
                        <span className={item.status === "completed" ? "bg-[#5DF888] px-5 py-1 rounded-full" : item.status === "failed" ? "bg-[#F85D5D] px-5 py-1 rounded-full" : "bg-gradient-to-b from-[#FD749B] to-[#281AC8] px-5 py-1 rounded-full"}>
                            {item.status}
                        </span>
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