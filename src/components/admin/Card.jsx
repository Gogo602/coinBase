import { US, CA, AU, EU } from "country-flag-icons/react/3x2";
import { useCardStore } from "../../store/admin/useCardStore";

const flagMap = { US, CA, AU, EU };

const Cards = () => {
  const cards = useCardStore((state) => state.cards);
  return (
    <section className="mt-4">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold text-white mb-4">Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Flag = flagMap[card.country];

            return (
              <div
                key={card.id}
                className={`relative rounded-xl shadow-lg px-6 py-10 flex flex-col items-center justify-center ${card.bg}`}
              >
                {/* Flag in top-right corner */}
                <div className="absolute top-2 right-2">
                  {Flag && <Flag style={{ width: 24, height: 16 }} />}
                </div>

                {/* Center Icon */}
                <img
                  src={card.icon}
                  alt={card.title}
                  
                  className="mb-5"
                />

                {/* Title */}
                <p className={`${card.textColor} font-medium`}>{card.title}</p>
              </div>
            );
          })}

          {/* Add New Card Button */}
          <button className="flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
            >
              <path
                opacity="0.5"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M36 71C55.33 71 71 55.33 71 36C71 16.67 55.33 1 36 1C16.67 1 1 16.67 1 36C1 55.33 16.67 71 36 71Z"
                fill="url(#paint0_linear_8_14001)"
                stroke="url(#paint1_linear_8_14001)"
              />
              <path
                opacity="0.8"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M35.6434 64.5715C51.6202 64.5715 64.572 51.6197 64.572 35.6429C64.572 19.6661 51.6202 6.71436 35.6434 6.71436C19.6666 6.71436 6.71484 19.6661 6.71484 35.6429C6.71484 51.6197 19.6666 64.5715 35.6434 64.5715Z"
                fill="url(#paint2_linear_8_14001)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M36.0006 60.2858C49.4132 60.2858 60.2863 49.4127 60.2863 36.0001C60.2863 22.5874 49.4132 11.7144 36.0006 11.7144C22.5879 11.7144 11.7148 22.5874 11.7148 36.0001C11.7148 49.4127 22.5879 60.2858 36.0006 60.2858Z"
                fill="url(#paint3_linear_8_14001)"
              />
              <path
                d="M33.4282 37.9084H25.5996V33.4783H33.4282V25.5891H37.8583V33.4783H45.6868V37.9084H37.8583V45.6965H33.4282V37.9084Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_8_14001"
                  x1="39.5"
                  y1="-10.0185"
                  x2="43.4493"
                  y2="113.985"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FD749B" />
                  <stop offset="1" stop-color="#281AC8" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_8_14001"
                  x1="39.5"
                  y1="-10.0185"
                  x2="43.4493"
                  y2="113.985"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FD749B" />
                  <stop offset="1" stop-color="#281AC8" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_8_14001"
                  x1="38.5363"
                  y1="-2.39279"
                  x2="41.8005"
                  y2="100.1"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FD749B" />
                  <stop offset="1" stop-color="#281AC8" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_8_14001"
                  x1="38.4291"
                  y1="4.06885"
                  x2="41.1695"
                  y2="90.1121"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FD749B" />
                  <stop offset="1" stop-color="#281AC8" />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
