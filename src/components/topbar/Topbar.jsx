import React from 'react';
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { FaPhone } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="w-full bg-white">
        <div className="w-full p-4 flex justify-between items-center">
            {/* left */}
            <div className="cursor-pointer">
                {/* logo */}
                <div className="flex items-center gap-3">
                    <IoChatboxEllipsesOutline 
                        size={30} 
                        className="text-[var(--primary-dark)]"
                    />
                    <h1 className="logo">WEEKAWAY</h1>
                </div>
            </div>
            {/* right */}
            <div className="flex justify-between items-center gap-7">
                {/* hour and turn */}
                <div className="hidden md:flex gap-2 items-center">
                    <GoClock size={20} className="text-[var(--primary-dark)]" />
                    <p className="text-[.7rem]">9AM - 5AM</p>
                </div>
                {/* phone */}
                <div className="hidden md:flex gap-2 items-center">
                    <FaPhone className="text-[var(--primary-dark)]" />
                    <p className="text-[.7rem]">1-888-817-1234</p>
                </div>
                {/* button */}
                <div>
                    <button className="px-4 hover:bg-none hover:bg-[var(--primary-light)]">
                        Get A Free Quote
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar;