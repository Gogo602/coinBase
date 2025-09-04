import User from "../../components/admin/overview/User";
import UserManagement from "../../components/user/overview/UserManagement";

const Users = () => {

  return (
    <div className="py-15 px-5 min-h-screen bg-[#1E0338] ml-0 lg:ml-64 pt-25">
          <div className="h-full">
              <UserManagement />
              <User />
          </div>    
      
    </div>
  );
};

export default Users;
