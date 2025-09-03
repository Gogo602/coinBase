import { Outlet } from "react-router-dom";


export default function AgentLayout() {
    return (
        <div className='flex'>
            <div className='grow h-full lg:h-full bg-gray-100 text-white'>
                <div className="">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}