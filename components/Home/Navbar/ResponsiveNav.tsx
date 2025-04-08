"use client"
import { useState } from 'react';
import MobileNav from './MobileNav';
import Nav from './Nav';

const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false);
    const handleNavShow = () => setShowNav(true);
    const handleCloseNav = () => setShowNav(false);
    return (
        <div className='fixed w-full z-[1000]'>
            <Nav openNav={handleNavShow} />
            <MobileNav showNav={showNav} closeNav={handleCloseNav} />
        </div>
    );
};
 
export default ResponsiveNav;