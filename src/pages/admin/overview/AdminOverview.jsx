
import Card from "../../../components/admin/overview/Card";
import Transaction from "../../../components/admin/overview/Transaction";
import Conversion from "../../../components/user/overview/Conversion";
import OverView from "../../../components/user/overview/Overview";
import UserManagement from "../../../components/user/overview/UserManagement";
import Statistics from "../../../components/user/overview/Statistics";
import Transactions from "../../../components/user/overview/Transactions";
import User from "../../../components/admin/overview/User";
import Agents from "../../../components/admin/overview/Agents";




export default function AdminOverview() {
    
    return (
         <div className="py-15 px-5 min-h-screen bg-[#1E0338] ml-0 lg:ml-64 pt-25 sm:px-10">
            <div className="h-full">
                <UserManagement />
                <OverView />
                <Conversion />
                <Transaction />
                <Card />
                <User />
                <Agents />
                <Statistics />
                <Transactions />
            </div>
        </div>
    )
}