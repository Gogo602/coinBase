import { HiDotsHorizontal } from "react-icons/hi";
import UserBarChart from '../overview/UserBarChart'


export default function Statistics() {
    
    return (
        <div className="border-2 border-white rounded-md mt-10 h-full w-full">
            <div className="py-10 px-3 space-y-10 sm:px-10">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Statistics</h3>
                    <HiDotsHorizontal className="w-6 h-6"/>
                </div>
                <div>
                    <h4 className="text-md font-bold pb-5">My Own Report</h4>
                    <UserBarChart />
                </div>
            </div>
        </div>
    )
}