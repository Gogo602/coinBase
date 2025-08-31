import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export default function Mobile({ links, activeClass, inactiveClass, isActive, setShowMobileMenu }) {
    return (
        <div className="fixed inset-0 bg-[#1E0338]/50 z-40">
             <div className="bg-[#1E0338] min-h-screen fixed px-4 w-64 border-r border-gray-300 z-50">
                 {/* Close button */}
                 <div className="flex justify-end p-4">
                     <FaTimes
                         className="w-8 h-8 cursor-pointer text-white"
                         onClick={() => setShowMobileMenu(false)}
                     />
                 </div>
                 
                 <ul className='flex flex-col mt-5 text-[14px] pr-4 space-y-3 text-white'>
                     {links.map((link, index) => {
                         const Icon = link.icon;
                         return (
                            <Link
                                key={index}
                                to={link.to}
                                className={`flex items-center py-3 px-2 space-x-4 rounded-r-full ${isActive(link.to) ? activeClass : inactiveClass}`}
                                onClick={() => setShowMobileMenu(false)}
                            >
                                <Icon className="w-5 h-5" />
                                <span>{link.label}</span>
                            </Link>
                         );
                     })}
                 </ul>
             </div>
        </div>
    );
}