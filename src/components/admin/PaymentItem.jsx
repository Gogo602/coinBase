import React, { useState } from "react";

const PaymentItem = ({ item: { item, id } }) => {
  const [tooltip, setTooltip] = useState(false);
  return (
    <div
      key={id}
      className="relative grid grid-cols-6 md:grid-cols-7 gap-5 md:border border-white/40 py-4 pr-9 md:pr-2 px-2 rounded-full my-0 md:my-1 font-normal text-[0.6rem] text-white/70"
    >
      <div>{item.id}</div>
      <div>{item.type}</div>
      <div>{item.amount}</div>
      <div>{item.date}</div>
      <div
        className={`
                    ${item.status === "Paid" ? "bg-green-500 hover:bg-green-600" : ""}
                    ${item.status === "Pending" ? "bg-gray-400 hover:bg-gray-600" : ""}
                    ${
                      item.status === "Processing"
                        ? "bg-gradient-to-b from-[#FD749B] to-[#580A98] hover:from-[#580A98] hover:to-[#FD749B] "
                        : item.status === "Cancelled"
                        ? "bg-red-500 hover:bg-red-600"
                        : ""
                    }
                    p-1 w-16 text-center rounded-full font-bold cursor-pointer text-white transition ease duration-300 
                  `}
      >
        {item.status}
      </div>
      <div className="hidden md:block">{item.email}</div>
      <div
        className=" font-bold text-center cursor-pointer"
        onMouseOver={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
      >
        . . .
      </div>
      <div
        className={`absolute transition duration-300 ease-in-out right-5 top-7 ${tooltip ? "opacity" : "opacity-0"} cursor-pointer`}
        onMouseOver={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
      >
        <div className="bg-gradient-to-b rounded-t from-[#FD749B] to-[#580A98] p-1 text-white text-[8px]">
          Place New
        </div>
        <div className="bg-white p-1 text-[8px] text-black rounded-b">
          Delete
        </div>
      </div>
    </div>
  );
};

export default PaymentItem;
