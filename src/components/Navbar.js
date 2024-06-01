import React, { useState, useRef } from 'react';

const Navbar = () => {
    const navItems=['Home','About Us',"Pricing","Features"];
    

    
    return (
        <div className="text-sm sm:text-2xl">
            {/* <img  
            className={`w-10  sm:hidden ${isOpen?'active':''}`} 
            src="menu.jpeg" 
            alt="menu" 
            ref={menuImageRef}
            onClick={handleClick}
            /> */}
            <ul className={`mt-10 sm:mt-0 sm:ml-10 sm:flex sm:justify-between sm:align-middle  `}>
                {navItems.map((items,index)=>
                    <a href="/" key={index} className="ml-1 sm:px-2 sm:py-2 sm:mr-2">{items}</a>
                )}
            </ul>
        </div>
    )
}
export default Navbar;