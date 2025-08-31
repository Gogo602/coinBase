import { Outlet } from "react-router-dom";


export default function RootLayout() {
    return (
        <div className='flex'>
            <div className='grow h-full lg:h-full bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white'>
                <div className="">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}