// src/components/Sidebar.js
import { useLocation, useParams } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import Desktop from './sidebar/Desktop';
import Mobile from './sidebar/Mobile';
import { sidebarData } from '../data/sidebarData';


const Sidebar = () => {
    const location = useLocation();
    const { userRole } = useParams(); // Get the user role from the URL
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const isActive = (path) => {
        return location.pathname === path;
    };

    const activeClass = "bg-gradient-to-t from-[#FD749B] to-[#281AC8] text-white";
    const inactiveClass = "hover:border hover:border-white text-white";

    // Get the specific links for the current user role
    const currentLinks = sidebarData[userRole] || [];

    return (
        <div className='mt-14'>
            {/* The mobile menu toggle button, visible only on small screens. */}
            <div className="lg:hidden fixed top-3 right-3 z-40">
                <FaBars
                    onClick={() => setShowMobileMenu(true)}
                    className="w-8 h-8 cursor-pointer text-[#F6B10A]"
                />
            </div>

            {/* The desktop sidebar, only visible on large screens. */}
            <div className="hidden lg:block">
                <Desktop
                    links={currentLinks} // Pass the correct links
                    activeClass={activeClass}
                    inactiveClass={inactiveClass}
                    isActive={isActive}
                />
            </div>

            {/* The mobile sidebar, conditionally rendered based on state. */}
            {showMobileMenu && (
                <Mobile
                    links={currentLinks} // Pass the correct links
                    activeClass={activeClass}
                    inactiveClass={inactiveClass}
                    isActive={isActive}
                    setShowMobileMenu={setShowMobileMenu}
                />
            )}
        </div>
    );
};

export default Sidebar;