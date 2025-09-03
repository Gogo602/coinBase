import { Route, Routes, useParams } from "react-router-dom";
import Sample from "../components/Agent/Sample";
import Sidebar from "../components/Sidebar";
import AdminLayout from "./AdminLayout";
import AgentLayout from "./AgentLayout";
import RootLayout from "./RootLayout";
import UserOverview from "../pages/user/overview/UserOverview";
import Trade from "../pages/user/Trade";
import Wallet from "../pages/user/Wallet";
import Transactions from "../pages/user/Transactions";
import OverviewPage from "../pages/agent/overview/OverviewPage";

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
                                
                                </Route>
                            </>
                        )}
                        
                        {userRole === 'agent' && (
                            <>
                                <Route path="" element={<AgentLayout />} >
                                    <Route index element={<OverviewPage/>}/>
                                    <Route path="user" element={<Sample/>}/>
                                    <Route path="trade" element={<Sample/>}/>
                                </Route> 
                            </>
                        )}

                        {userRole === 'user' && (
                             <>
                                <Route path="" element={<RootLayout />} >
                                    <Route index element={<UserOverview />}/>
                                    <Route path="trade" element={<Trade/>}/>
                                    <Route path="wallet" element={<Wallet/>}/>
                                    <Route path="transactions" element={<Transactions/>}/>
                                </Route>
                                
                            </>
                        )}
                    </Routes>
                </div>
            </div>
        </div>
    );
}