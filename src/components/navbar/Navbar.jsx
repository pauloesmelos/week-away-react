import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import MenuMobile from '../mobile/menu/MenuMobile';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(e => !e);
  }

  return (
    <header className="w-full bg-black/40 text-white absolute z-30">
        <nav className="w-full p-4 px-5 flex justify-between items-center">
            {/* left */}
            <div className="hidden md:block">
                <ul className="flex gap-4 items-center">
                    <li>
                        <a href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#activies">
                            Activies
                        </a>
                    </li>
                    <li>
                        <a href="#gallery">
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            {/* right */}
            <div>
                <ul className="flex gap-6 items-center">
                    <li>
                        <FaFacebookF 
                            className="icon" 
                            size={20} 
                        />
                    </li>
                    <li>
                        <FaTwitter 
                            className="icon" 
                            size={20} 
                        />
                    </li>
                    <li>
                        <FaGoogle 
                            className="icon" 
                            size={20} 
                        />
                    </li>
                    <li>
                        <FaInstagram 
                            className="icon" 
                            size={20} 
                        />
                    </li>
                </ul>
            </div>
            {/* menu hamburguer */}
            <div className="block md:hidden z-50">
                <IoMenu 
                    className="cursor-pointer hover:text-gray-200 hover:scale-125 duration-200 ease-linear" 
                    size={32}
                    onClick={handleMobileMenu}
                />
            </div>
        </nav>
        <MenuMobile 
            mobileMenu={mobileMenu} 
            handleMobileMenu={handleMobileMenu}
        />
    </header>
  )
}

export default Navbar