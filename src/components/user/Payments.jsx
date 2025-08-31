import { useState } from "react";
import data from "../../assets/PaymentsData";
import PaymentItem from "./PaymentItem";

const Payments = () => {
  const [view, setView] = useState(7);
  return (
    <div
      className="md:border border-white/70 rounded-lg p-4 overflow-x-auto min-w-0 max-h-[80vh] flex flex-col"
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
        <div className="text-xs text-white font-semibold grid grid-cols-6 md:grid-cols-7 gap-5 mb-5 px-2">
          <div className="">Payment ID</div>
          <div className="">Type</div>
          <div className="">Amount</div>
          <div className="">Date</div>
          <div className="">Status</div>
          <div className="hidden md:block">Email</div>
          <div className="md:text-center">Action</div>
        </div>

        {/* Data Rows */}
        <div>
          {data &&
            data
              .slice(0, view)
              .map((item, id) => <PaymentItem item={{ item, id }} />)}
        </div>
      </div>

      <div className="w-full pt-4 flex">
        <button
          className="text-white mx-auto bg-gradient-to-b from-[#FD749B] to-[#580A98] font-normal text-[0.55rem] rounded-full px-4 py-2 cursor-pointer hover:from-[#580A98] hover:to-[#FD749B] transition ease duration-300 hover:scale-110"
          onClick={() => setView(view + 5)}
        >
          View more
        </button>
      </div>
    </div>
  );
};

export default Payments;
