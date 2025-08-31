import { useState } from "react";
import Nav from "../components/Nav";
import Aside from "../components/Aside";
import Transactions from "../components/user/Transactions";

const Layout = () => {
  const [side, OpenSide] = useState(true);
  const toggleSide = () => {
    OpenSide(!side);
  };
  return (
    <div className="min-h-screen w-screen bg-[#1E0338]">
      <Nav toggle={toggleSide} />
      <div className="flex h-[calc(100vh-64px)] ">
        <Aside side={side} />
        <div className="p-10 overflow-y-scroll w-full" style={{scrollbarWidth: 'none'}}>
          {/* Main content area can be added here */}
          <Transactions />
        </div>
      </div>
    </div>
  );
};

export default Layout;
