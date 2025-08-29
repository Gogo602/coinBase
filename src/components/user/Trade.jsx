import React from "react";

const Trade = () => {
  return (
    <div>
      <h1 className="mb-4 font-semibold text-lg">Trade</h1>
      <div className="flex text-white border-white border-2 rounded-lg overflow-hidden h-[85vh]">
        <div className="side-1 hidden lg:flex border-r border-white md:w-70 flex flex-col justify-between">
          <div>
            <div className="flex items-center border-b border-white py-4 px-5">
              <div className="relative w-8 md:w-12 h-8 md:h-12 rounded-full bg-white/70 mr-2">
                <span
                  className={`absolute bg-green-400 rounded-full p-1 bottom-0 right-0`}
                ></span>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-xs md:text-sm font-semibold">
                  Ramon Ridwan
                </h2>
                <p className="text-[8px] md:text-xs text-white/70">Online</p>
              </div>
            </div>
            <div className="pt-1">
              {[
                { name: "Agent Rue", status: "Online" },
                { name: "Agent Daniel", status: "Offline" },
                { name: "Agent Rose", status: "Offline" },
                { name: "Agent William", status: "Offline" },
              ].map((agent) => (
                <div
                  key={agent.name}
                  className="flex items-center py-4 px-5 hover:bg-white/10 cursor-pointer"
                >
                  <div className="relative w-8 md:w-12 h-8 md:h-12 rounded-full bg-white/70 mr-2">
                    <span
                      className={`absolute ${
                        agent.status === "Online"
                          ? "bg-green-400"
                          : "bg-gray-400"
                      } rounded-full p-1 bottom-0 right-0`}
                    ></span>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-xs md:text-sm font-semibold">
                      {agent.name}
                    </h2>
                    <p className="text-[8px] md:text-xs text-white/70">
                      {agent.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center items-center p-2">
            <button className="bg-gradient-to-b from-[#FD749B]/90 to-[#281AC8]/50 text-[0.6rem] rounded-full px-5 py-2 cursor-pointer mt-10">
              New Trade?
            </button>
          </div>
        </div>
        <div className="side-2 flex flex-col px-5 pt-10 md:px-10 w-full">
          <div
            className="flex flex-col gap-4 w-full h-full overflow-y-scroll"
            style={{
              scrollbarWidth: "none",
              scrollbarColor: "#888 transparent",
            }}
          >
            <div className="message space-y-2 mb-5">
              <p className="text-[10px] text-white/80">Me, 10:22</p>
              <div className=" flex justify-start items-center text-gray-600 text-xs ">
                <p className="bg-white py-3 px-4 rounded-lg ">
                  Hello, I'm new to this system, can I get a breakdown on how it
                  works?
                </p>
              </div>
            </div>
            <div className="message space-y-2 mb-5 self-end">
              <p className="text-[10px] text-white/80">Agent Rue, 10:24</p>
              <div className=" flex justify-start items-center text-gray-600 text-xs ">
                <p className="bg-white py-3 px-4 rounded-lg ">
                  Yes, we currently run both on our platform here
                </p>
              </div>
            </div>
            <div className="message space-y-2 mb-5">
              <p className="text-[10px] text-white/80">Me, 3 minutes ago</p>
              <div className=" flex justify-start items-center text-gray-600 text-xs ">
                <p className="bg-white py-3 px-4 rounded-lg ">
                  Please, can you go into details about the service?
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <h2 className="text-[10px] text-[#dD74eB]/70 font-semibold">
                UNREAD
              </h2>
              <hr className="border border-[#FD749B]/40 w-full ml-2" />
            </div>
            <div className="message space-y-2 mb-5 self-end">
              <p className="text-[10px] text-white/80">
                Agent Rue, 9 minutes ago
              </p>
              <div className=" flex justify-start items-center text-gray-600 text-xs ">
                <p className="bg-white py-3 px-4 rounded-lg ">
                  Hello, I'm new to this system, can I get a breakdown on how it
                  works?
                </p>
              </div>
            </div>
            <div className="message space-y-2 mb-5">
              <p className="text-[10px] text-white/80">Me, 10:22</p>
              <div className=" flex justify-start items-center text-gray-600 text-xs ">
                <p className="bg-white py-3 px-4 rounded-lg ">
                  Yes, we currently run both on our platform here
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-self-end justify-between border border-white/60 rounded-full px-4 py-2 mb-4">
            <input
              type="text"
              placeholder="Start typing here..."
              className="outline-none text-sm"
            />
            <button className="bg-gradient-to-b from-[#FD749B] to-[#580A98] font-bold text-[0.6rem] rounded-full px-4 py-2 cursor-pointer">
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
