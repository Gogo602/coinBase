import { defaultCards } from "../../store/admin/useDefaultCardStore";
import { US } from "country-flag-icons/react/3x2";


const Cards = () => {
  return (
    <section className="mt-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4">
        
          {defaultCards.map((card) => (
            <div >
              <card.countryFlag style={{ width: 32, height: 24 }} />
              <p>{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
