import React from "react";
import assets from "../../assets/assets";

const Wallet = () => {
  return (
    <div className="mt-5 text-white">
      <h1 className="mb-4 font-semibold text-lg">Wallet</h1>
      <div className="border border-white rounded-lg p-8 mt-10">
        <div className="flex justify-between mb-15">
          <h2 className="font-bold">Wallet</h2>
          <button className="py-3 px-6 bg-white text-[#FD749B] hover:bg-white/90 text-[10px] rounded-full cursor-pointer">
            Withdraw funds
          </button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-15 w-full place-items-center overflow-x-hidden">
          <div className="flex justify-center items-center mx-auto">
            <img src={assets.trophy} alt="" className="h-35" />
          </div>
          <div className="mx-auto">
            <button className="bg-gradient-to-b text-white from-[#FC58B3] to-[#FEAE68] px-2 py-1 rounded-full text-[10px] mb-1">
              Total Earnings
            </button>
            <h1 className="font-bold text-3xl">#120000.00</h1>
            <p className="text-[10px] text-white/70">
              Please note that this is the total sum of your transaction here on{" "}
              <span className="font-bold">GOGE AFRICA</span>
            </p>
          </div>
          <div className="mx-auto">
            <button className="bg-gradient-to-b text-white from-[#FC58B3] to-[#FEAE68] px-2 py-1 rounded-full text-[10px] mb-1">
              Balance
            </button>
            <h1 className="font-bold text-3xl">#30000.00</h1>
            <p className="text-[10px] text-white/70">
              Please note that this is the current balance amount left on your
              wallet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
