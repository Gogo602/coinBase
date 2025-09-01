import { US, CA, AU, EU } from "country-flag-icons/react/3x2";
import { FaAmazon, FaGooglePlay, FaItunesNote, FaSteam } from "react-icons/fa";
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
            const Flag = flagMap[card.country]

            return (
              <div
                key={card.id}
                className={`relative rounded-xl shadow-lg p-6 flex flex-col items-center justify-center ${card.bg}`}
              >
                {/* Flag in top-right corner */}
                <div className="absolute top-2 right-2">
                  {Flag && <Flag style={{ width: 24, height: 16 }} />}
                </div>

                {/* Center Icon */}
                <card.icon />

                {/* Title */}
                <p className={`${card.textColor} font-medium`}>{card.title}</p>
              </div>
            );
          })}

          {/* Add New Card Button */}
          <button className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-3xl">
            +
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
