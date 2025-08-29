import Trade from "./user/Trade";

const Layout = () => {
  return (
    <div className="text-white flex flex-col gap-4 p-10">
      <div className="w-full flex justify-between items-center font-semibold text-xs">
        <h2 className="">User Management Trade</h2>
        <h2 className="text-xs">Accounts | RAMON RIDWAN </h2>
      </div>
      <Trade />
    </div>
  );
};

export default Layout;
