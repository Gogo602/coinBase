import UserManagement from "../../../components/user/overview/UserManagement";
import Overview from "../../../components/user/overview/Overview";


export default function Overviews(){

    return (
        <div className="p-15 min-h-screen bg-[#1E0338] ml-0 md:ml-64 pt-25">
            <div>
                <UserManagement />
                <Overview />
            </div>
        </div>
    )
}