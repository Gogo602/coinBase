import UserManagement from "../../../components/user/overview/UserManagement";
import Overview from "../../../components/user/overview/Overview";
import Conversion from "../../../components/user/overview/Conversion";
import Wallet from "../../../components/user/overview/Wallet";
import Statistics from "../../../components/user/overview/Statistics";
import Transactions from "../../../components/user/overview/Transactions";


export default function Overviews(){

    return (
        <div className="py-15 px-5 min-h-screen bg-[#1E0338] ml-0 lg:ml-64 pt-25">
            <div className="h-full">
                <UserManagement />
                <Overview />
                <Conversion />
                <Wallet />
                <Statistics />
                <Transactions />
            </div>
        </div>
    )
}