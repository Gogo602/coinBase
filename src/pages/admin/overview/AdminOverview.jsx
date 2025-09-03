
import Card from "../../../components/admin/overview/Card";
import Transactions from "../../../components/admin/overview/Transactions";
import Conversion from "../../../components/user/overview/Conversion";
import OverView from "../../../components/user/overview/Overview";
import UserManagement from "../../../components/user/overview/UserManagement";



export default function AdminOverview() {
    
    return (
         <div className="py-15 px-10 min-h-screen bg-[#1E0338] ml-0 lg:ml-64 pt-25">
            <div className="h-full">
                <UserManagement />
                <OverView />
                <Conversion />
                <Transactions />
                <Card />
            </div>
        </div>
    )
}