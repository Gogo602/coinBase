import { Outlet } from "react-router-dom";

export default function AdminLayout() {
    return (
        <div className='flex'>
            <div className='grow h-full lg:h-full  '>
                <div className="">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}