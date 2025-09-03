import { FaCalendarCheck } from "react-icons/fa";
import OverViewCard from "./OverviewCard";
import { userOverviewCardData } from "../../../assets/assets";

export default function overview() {


    return (
        <div className="pt-10">
            <div className="flex items-center justify-between text-[14px] font-bold">
                <h1 className="text-xl"> Overview</h1>
                <FaCalendarCheck className="w-7 h-7 text-gray-300"/>
            </div>
            <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {userOverviewCardData.map((item) => (
                    <div key={item.id}>
                        <OverViewCard 
                            title={item.title}
                            percentage={item.percentage}
                            Completion={item.Completion}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}