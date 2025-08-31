import { Route, Routes } from "react-router-dom";
import Sample from '../components/admin/Sample'
import Sidebar from "../components/Sidebar";

export default function AdminLayout() {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='grow h-full lg:h-full bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white'>
                <div className="p-4">
                    <Routes>
                        <Route path="dashboard" element={<Sample />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}