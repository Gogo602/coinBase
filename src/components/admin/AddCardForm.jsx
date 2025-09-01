import { useState } from "react";
import { useCardStore } from "../../store/admin/useCardStore";

// import card icons
import Amazon from "../../assets/Amazon.svg";
import GooglePlay from "../../assets/GooglePlay.svg";
import Steam from "../../assets/Steam.svg";
import Itunes from "../../assets/Itunes.svg";
import GiftCard from "../../assets/GiftCard.svg";

const cardTypes = [
  {
    name: "Amazon",
    icon: Amazon,
    bg: "bg-[linear-gradient(146deg,#00E0FF_9.67%,#0047FF_107.49%)]",
    textColor: "text-white",
  },
  {
    name: "Google Play",
    icon: GooglePlay,
    bg: "bg-[linear-gradient(144deg,#FC58B3_11.61%,#FEAE68_100%)]",
    textColor: "text-white",
  },
  {
    name: "Steam",
    icon: Steam,
    bg: "bg-[linear-gradient(142deg,#FF5E50_17.14%,#FE5C6C_33.69%,#E3658A_42.16%,#B87EB0_50.17%,#916CFF_58.79%,rgba(112,188,251,0.92)_67.83%,#21C7FE_83.6%)]",
    textColor: "text-white",
  },
  {
    name: "iTunes",
    icon: Itunes,
    bg: "bg-[linear-gradient(146deg,#00E0FF_9.67%,#0047FF_107.49%)]",
    textColor: "text-white",
  },
  {
    name: "Gift Card",
    icon: GiftCard,
    bg: "bg-[linear-gradient(144deg,#FC58B3_11.61%,#FEAE68_100%)]",
    textColor: "text-white",
  },
];

const countries = [
  { code: "US", name: "USA" },
  { code: "GB", name: "United Kingdom" },
  { code: "CA", name: "Canada" },
  { code: "NG", name: "Nigeria" },
  { code: "DE", name: "Germany" },
];

const AddCardModal = ({ isOpen, onClose }) => {
  const addCard = useCardStore((state) => state.addCard);

  const [title, setTitle] = useState("");
  const [cardType, setCardType] = useState(cardTypes[0]);
  const [country, setCountry] = useState(countries[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addCard({
      country: country.code,
      title,
      icon: cardType.icon,
      bg: cardType.bg,
      textColor: cardType.textColor,
    });

    setTitle("");
    setCardType(cardTypes[0]);
    setCountry(countries[0]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold mb-4">Add New Card</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Card Title */}
          <input
            type="text"
            placeholder="Enter card title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-md px-3 py-2 w-full"
          />

          {/* Card Type */}
          <select
            value={cardType.name}
            onChange={(e) =>
              setCardType(cardTypes.find((t) => t.name === e.target.value))
            }
            className="border rounded-md px-3 py-2 w-full"
          >
            {cardTypes.map((type) => (
              <option key={type.name} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>

          {/* Country */}
          <select
            value={country.code}
            onChange={(e) =>
              setCountry(countries.find((c) => c.code === e.target.value))
            }
            className="border rounded-md px-3 py-2 w-full"
          >
            {countries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.name}
              </option>
            ))}
          </select>

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md border"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-blue-600 text-white"
            >
              Add Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCardModal;
