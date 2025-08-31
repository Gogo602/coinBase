const Aside = ({ side }) => {
  return (
    <div
      className={` ${
        side ? "translate-x-0 fixed backdrop-filter backdrop-blur bg-[#1E0338]/40" : ""
      } min-h-[calc(100vh-64px)] fixed md:relative -translate-x-full md:translate-x-0 w-48 md:w-55 h-full p-10  border-r border-white/50 transition ease duration-300 p-5 text-sm`}
    >
      {[
        { title: "Overview", icon: "overview-icon", link: "/overview" },
        { title: "Settings", icon: "settings-icon", link: "/settings" },
        { title: "Profile", icon: "profile-icon", link: "/profile" },
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-center space-x-3 mb-6 cursor-pointer hover:text-white text-white/70"
        >
          <div
            className={`w-3 h-3 bg-gray-500 rounded-full flex items-center justify-center`}
          >
            <span className="text-sm"></span>
          </div>
          <span className="">{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Aside;
