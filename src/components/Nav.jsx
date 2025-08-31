const Nav = ({toggle}) => {
  return (
    <div className="w-full h-16 border-b-2 border-white/50 flex items-center px-4">
      <ul className="w-full max-w-70 mx-auto flex space-x-4 text-sm justify-between text-white font-semibold">
        <li className="cursor-pointer hover:-translate-y-[2px] transition ease duration-300 md:text-md active:text-purple-500">
          CoinBase
        </li>
      </ul>
      <div className="md:hidden text-xs font-extrabold cursor-pointer text-[#8E73a8] border-2 py-1 px-2 rounded" onClick={toggle}>Side</div>
    </div>
  );
};

export default Nav;
