import { useState } from "react";
import data from "../../assets/transactionData";
import UserManagement from "../../components/user/overview/UserManagement";

const Transactions = () => {
  const [view, setView] = useState(7);

  return (
    <div className="py-15 px-5 min-h-[110vh] bg-[#1E0338] ml-0 lg:ml-64 pt-25">
      <UserManagement />
        <h1 className="mb-4 font-semibold text-lg py-10">Transactions</h1>
      <div
      className="md:border border-white/70 rounded-lg p-4 overflow-x-auto min-w-0 max-h-[90vh] flex flex-col"
      style={{ scrollbarWidth: "none" }}
      >
      <div
        className="overflow-y-scroll"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(255, 255, 255, 0.5) transparent",
        }}
      >
        {/* Header Row */}
        <div className="text-xs grid grid-cols-6 md:grid-cols-8 gap-5 mb-5 px-2">
          <div className="">Date</div>
          <div className="">Transaction ID</div>
          <div className="">Type</div>
          <div className="">Name</div>
          <div className="">Value</div>
          <div className="hidden md:block">Return</div>
          <div className="">Status</div>
          <div className="hidden md:block">Action</div>
        </div>

        {/* Data Rows */}
        <div>
          {data &&
            data.slice(0, view).map((item, id) => (
              <div
                key={id}
                className="grid grid-cols-6 md:grid-cols-8 gap-5 md:border border-white/40 py-4 pr-9 md:pr-2 px-2 rounded-full my-0 md:my-1 font-normal text-[0.6rem] text-white/70"
              >
                <div>{item.date}</div>
                <div>{item.id}</div>
                <div>{item.type}</div>
                <div>{item.name}</div>
                <div>{item.value}</div>
                <div className="hidden md:block">{item.return}</div>
                <div
                  className={`
                    ${item.status === "Failed" ? "bg-red-500" : ""}
                    ${item.status === "Completed" ? "bg-green-500" : ""}
                    ${
                      item.status === "In Progress"
                        ? "bg-gradient-to-b from-[#FD749B] to-[#580A98]"
                        : ""
                    }
                    p-1 w-16 cursor-pointer text-center rounded-full font-bold
                  `}
                >
                  {item.status}
                </div>
                <div className="hidden md:block font-bold text-center cursor-pointer">
                  ...
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="w-full pt-4 flex">
        <button
          className=" mx-auto bg-gradient-to-b from-[#FD749B] to-[#580A98] font-normal text-[0.55rem] rounded-full px-4 py-2 cursor-pointer hover:from-[#580A98] hover:to-[#FD749B] transition ease duration-300 hover:scale-110"
          onClick={() => setView(view + 5)}
        >
          View more
        </button>
      </div>
    </div>
    </div>
  );
};

export default Transactions;
