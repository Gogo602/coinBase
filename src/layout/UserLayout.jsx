import { Route, Routes, useParams } from "react-router-dom";
import Sample from "../components/Agent/Sample";
import Sidebar from "../components/Sidebar";
import AdminLayout from "./AdminLayout";
import AgentLayout from "./AgentLayout";
import RootLayout from "./RootLayout";
import UserOverview from "../pages/user/overview/UserOverview";
import AdminOverview from "../pages/admin/overview/AdminOverview";

export default function UserLayout() {
    const { userRole } = useParams();

    return (
        <div className='flex'>
            <Sidebar />
            <div className='grow h-full lg:h-full bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white'>
                <div className="">
                    <Routes>
                        {/* Define nested routes for each user role's pages */}
                        {userRole === 'admin' && (
                            <>
                                <Route path="" element={<AdminLayout />} >
                                    <Route index element={<AdminOverview />}/>
                                </Route>
                            </>
                        )}
                        
                        {userRole === 'agent' && (
                            <>
                                <Route path="" element={<AgentLayout />} >
                                    <Route index element={<Sample/>}/>
                                    <Route path="user" element={<Sample/>}/>
                                    <Route path="trade" element={<Sample/>}/>
                                </Route> 
                            </>
                        )}

                        {userRole === 'user' && (
                             <>
                                <Route path="" element={<RootLayout />} >
                                    <Route index element={<UserOverview />}/>
                                    <Route path="trade" element={<h1>Trade</h1>}/>
                                </Route>
                            </>
                        )}
                    </Routes>
                </div>
            </div>
        </div>
    );
}