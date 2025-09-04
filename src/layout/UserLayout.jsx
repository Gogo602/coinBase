import { Route, Routes, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AdminLayout from "./AdminLayout";
import AgentLayout from "./AgentLayout";
import RootLayout from "./RootLayout";
import UserOverview from "../pages/user/overview/UserOverview";
import Trade from "../pages/user/Trade";
import Wallet from "../pages/user/Wallet";
import Transactions from "../pages/user/Transactions";
import OverviewPage from "../pages/agent/overview/OverviewPage";
import Payments from '../pages/admin/Payments'
import Cards from "../pages/admin/Card";
import BitCoinAndEthereum from "../pages/admin/BitcoinAndEthereum";
import Sample from "../pages/agent/Sample";
import AdminOverview from "../pages/admin/overview/AdminOverview";
import Users from "../pages/admin/Users";
import Agent from "../pages/agent/Agents";

export default function UserLayout() {
    const { userRole } = useParams();

    return (
        <div className='flex w-screen h-screen overflow-x-hidden bg-[#1E0338]'>
            <Sidebar />
            <div className='grow h-full lg:h-full text-white'>
                <div className="">
                    <Routes>
                        {/* Define nested routes for each user role's pages */}
                        {userRole === 'admin' && (
                            <>
                                <Route path="" element={<AdminLayout />} >
                                    <Route index element={<AdminOverview />} />
                                    <Route path='cards' element={<Cards />} />
                                    <Route path="transactions" element={<Transactions/>}/>
                                    <Route path='bitcoin-ethereum' element={<BitCoinAndEthereum/>}/>
                                    <Route path='payments' element={<Payments />} />
                                    <Route path='users' element={<Users />} />
                                    <Route path='agents' element={<Agent />} />
                                    <Route path="transactions" element={<Transactions />} />
                                </Route>
                            </>
                        )}
                        
                        {userRole === 'agent' && (
                            <>
                                <Route path="" element={<AgentLayout />} >
                                    <Route index element={<OverviewPage/>}/>
                                    <Route path="trade" element={<Trade />} />
                                    <Route path='users' element={<Users />} />
                                    <Route path="transactions" element={<Transactions />} />
                                    <Route path="wallet" element={<Wallet/>}/>

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