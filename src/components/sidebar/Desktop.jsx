import { Link } from 'react-router-dom';


export default function Desktop({ links, activeClass, inactiveClass, isActive }) {
    return (
        <div className="hidden lg:block bg-[#1E0338] min-h-screen fixed w-64 border-r border-t border-gray-300">
            <ul className='flex flex-col mt-5 text-[14px] pr-4 space-y-3 text-white'>
                {links.map((link, index) => {
                    // Get the icon component from the link data
                    const Icon = link.icon; 
                    return (
                        <Link
                            key={index}
                            to={link.to}
                            className={`flex items-center py-3 px-2 space-x-4 rounded-r-full ${isActive(link.to) ? activeClass : inactiveClass}`}
                        >
                            <Icon className="w-5 h-5" />
                            <span>{link.label}</span>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};