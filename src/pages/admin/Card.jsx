import { US, CA, AU, EU, SE } from "country-flag-icons/react/3x2";
import { useCardStore } from "../../store/admin/useCardStore";
import AddCardForm from "../../components/admin/AddCardForm";
import { useState } from "react";
import { Search, Triangle, Wallet } from "lucide-react";
const flagMap = { US, CA, AU, EU };
import { useMemo } from "react";

const Cards = () => {
  const cards = useCardStore((state) => state.cards);
  const removeCard = useCardStore((state) => state.removeCard);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter cards based on search term
  const filteredCards = useMemo(() => {
    if (!searchTerm) return cards;
    return cards.filter(
      (card) =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.country?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, cards]);

  return (
    <section className="px-5 min-h-screen bg-[#1E0338] ml-0 lg:ml-64">
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white text-sm font-bold text-center sm:text-left">
            Admin Management Cards
          </p>
          <div className="flex items-center gap-2 sm:gap-4">
            <p className="text-white text-sm font-bold">Accounts</p>
            <span className="text-white opacity-50 hidden sm:inline">|</span>
            <div className="flex gap-2 items-center text-white">
              <span className="text-sm font-bold">COINBASE</span>
              <Triangle size={18} className="text-white" />
            </div>
          </div>
        </div>

        {/* Title + Search + Button */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Heading */}
          <h2 className="text-white font-semibold text-lg tracking-wide">
            Cards
          </h2>

          {/* Right Section */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            {/* Search Bar */}
            <div className="flex items-center gap-2 border border-gray-600 bg-[#1D1236] rounded-full px-3 py-2 w-full sm:w-64 focus-within:border-purple-500 transition">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Cards"
                className="bg-transparent text-white placeholder-gray-400 outline-none flex-1"
              />
            </div>

            {/* Add Card Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition w-full sm:w-auto"
            >
              <Wallet className="w-5 h-5" />
              <span>Add Card</span>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 border border-white rounded-xl p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCards.map((card) => {
            const Flag = flagMap[card.country];
            return (
              <div
                key={card.id}
                className={`relative rounded-xl shadow-lg px-6 py-10 flex flex-col items-center justify-center ${card.bg} group`}
              >
                {/* Remove Button */}
                <button
                  onClick={() => removeCard(card.id)}
                  className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                >
                  ✕
                </button>

                {/* Flag */}
                <div className="absolute top-2 right-2">
                  {Flag && <Flag style={{ width: 24, height: 16 }} />}
                </div>

                {/* Icon */}
                <img
                  src={card.icon}
                  alt={card.title}
                  className="mb-5 max-w-[60%] h-auto"
                />

                {/* Title */}
                <p className={`${card.textColor} font-medium text-center`}>
                  {card.title}
                </p>
              </div>
            );
          })}
        
          {/* Add New Card Button */}{" "}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center text-white"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
            >
              {" "}
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M36 71C55.33 71 71 55.33 71 36C71 16.67 55.33 1 36 1C16.67 1 1 16.67 1 36C1 55.33 16.67 71 36 71Z"
                fill="url(#paint0_linear_8_14001)"
                stroke="url(#paint1_linear_8_14001)"
              />{" "}
              <path
                opacity="0.8"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.6434 64.5715C51.6202 64.5715 64.572 51.6197 64.572 35.6429C64.572 19.6661 51.6202 6.71436 35.6434 6.71436C19.6666 6.71436 6.71484 19.6661 6.71484 35.6429C6.71484 51.6197 19.6666 64.5715 35.6434 64.5715Z"
                fill="url(#paint2_linear_8_14001)"
              />{" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M36.0006 60.2858C49.4132 60.2858 60.2863 49.4127 60.2863 36.0001C60.2863 22.5874 49.4132 11.7144 36.0006 11.7144C22.5879 11.7144 11.7148 22.5874 11.7148 36.0001C11.7148 49.4127 22.5879 60.2858 36.0006 60.2858Z"
                fill="url(#paint3_linear_8_14001)"
              />{" "}
              <path
                d="M33.4282 37.9084H25.5996V33.4783H33.4282V25.5891H37.8583V33.4783H45.6868V37.9084H37.8583V45.6965H33.4282V37.9084Z"
                fill="white"
              />{" "}
              <defs>
                {" "}
                <linearGradient
                  id="paint0_linear_8_14001"
                  x1="39.5"
                  y1="-10.0185"
                  x2="43.4493"
                  y2="113.985"
                  gradientUnits="userSpaceOnUse"
                >
                  {" "}
                  <stop stopColor="#FD749B" />{" "}
                  <stop offset="1" stopColor="#281AC8" />{" "}
                </linearGradient>{" "}
                <linearGradient
                  id="paint1_linear_8_14001"
                  x1="39.5"
                  y1="-10.0185"
                  x2="43.4493"
                  y2="113.985"
                  gradientUnits="userSpaceOnUse"
                >
                  {" "}
                  <stop stopColor="#FD749B" />{" "}
                  <stop offset="1" stopColor="#281AC8" />{" "}
                </linearGradient>{" "}
                <linearGradient
                  id="paint2_linear_8_14001"
                  x1="38.5363"
                  y1="-2.39279"
                  x2="41.8005"
                  y2="100.1"
                  gradientUnits="userSpaceOnUse"
                >
                  {" "}
                  <stop stopColor="#FD749B" />{" "}
                  <stop offset="1" stopColor="#281AC8" />{" "}
                </linearGradient>{" "}
                <linearGradient
                  id="paint3_linear_8_14001"
                  x1="38.4291"
                  y1="4.06885"
                  x2="41.1695"
                  y2="90.1121"
                  gradientUnits="userSpaceOnUse"
                >
                  {" "}
                  <stop stopColor="#FD749B" />{" "}
                  <stop offset="1" stopColor="#281AC8" />{" "}
                </linearGradient>{" "}
              </defs>{" "}
            </svg>{" "}
          </button>
          {/* Modal Form */}
          <AddCardForm
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
    </section>
  );
};

export default Cards;
