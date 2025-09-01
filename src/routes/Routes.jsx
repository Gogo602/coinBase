import { Route, Routes } from "react-router-dom";
import Payments from "../components/user/Payments";
import Transactions from "../components/user/Transactions";
import Wallet from "../components/user/Wallet";

const Routess = ({ children }) => {
  return (
      <Routes>
        <Route path="/overview" element={<div>Overview</div>} />
        <Route path="/users" element={<div>Users</div>} />
        <Route path="/agents" element={<div>Agents</div>} />
        <Route path="/cards" element={<div>Cards</div>} />
        <Route path="/bitcoin" element={<div>Bitcoin and Etherum</div>} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/statistics" element={<div>Statistics</div>} />
      </Routes>
  );
};

export default Routess;
