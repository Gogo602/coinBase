import { useState } from "react";
import { useBitCoinAndEthereumStore } from "../../store/admin/useBitcoinAndEthereumStore";

// import coin icons
import Bitcoin from "../../assets/Bitcoin.svg";
import Ethereum from "../../assets/Ethereum.svg";

const coinTypes = [
  {
    name: "Bitcoin",
    icon: Bitcoin,
    bg: "bg-[linear-gradient(144deg,#FC58B3_11.61%,#FEAE68_100%)]",
    textColor: "text-white",
  },
  {
    name: "Ethereum",
    icon: Ethereum,
    bg: "bg-[linear-gradient(146deg,#00E0FF_9.67%,#0047FF_107.49%)]",
    textColor: "text-white",
  },
];

const AddCoinModal = ({ isOpen, onClose }) => {
  const addCoin = useBitCoinAndEthereumStore((state) => state.addCoin);

  const [title, setTitle] = useState("");
  const [coinType, setCoinType] = useState(coinTypes[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addCoin({
      title,
      icon: coinType.icon,
      bg: coinType.bg,
      textColor: coinType.textColor,
    });

    setTitle("");
    setCoinType(coinTypes[0]);
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
            value={coinType.name}
            onChange={(e) =>
              setCoinType(coinTypes.find((t) => t.name === e.target.value))
            }
            className="border rounded-md px-3 py-2 w-full"
          >
            {coinTypes.map((type) => (
              <option key={type.name} value={type.name}>
                {type.name}
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
              Add Coin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoinModal;
