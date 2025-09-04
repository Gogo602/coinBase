import Agents from "../../components/admin/overview/User";
import UserManagement from "../../components/user/overview/UserManagement";

const Agent = () => {

  return (
    <div className="py-15 px-5 min-h-screen bg-[#1E0338] ml-0 lg:ml-64 pt-25">
          <div className="h-full">
              <UserManagement />
              <Agents />
          </div>    
      
    </div>
  );
};

export default Agent;
