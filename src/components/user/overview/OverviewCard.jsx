import React from 'react';
import { HiDotsHorizontal } from "react-icons/hi";
import Donut from "./Donut";
import Areas from './Area';


export default function OverViewCard({title, percentage, Completion}){

    return(
        <div className="border-2 border-white rounded-md ">
            <div className="p-2">
                <div className="flex items-center justify-between">
                    <p>{""}</p>
                    <HiDotsHorizontal className="w-6 h-6"/>
                </div>
                <div className="flex items-center justify-between pr-10 sm:pr-5">
                    <Donut completionPercentage={Completion} />
                    <div className="space-y-2">
                        <h1 className="text-xl font-bold">{title}</h1>
                        <div className="flex items-center space-x-2">
                            <p className='text-[#1CD1A1]'>{percentage}</p>
                            <Areas />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
