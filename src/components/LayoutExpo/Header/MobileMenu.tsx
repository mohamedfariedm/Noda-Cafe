"use client";

import { useState } from "react";
import LanguageChanger from "../LanguageChanger";
import MenuItemsDesktop from "./MenuItemsDesktop";
import { IoMenu, IoClose } from "react-icons/io5"; // Import icons for menu toggle
import { useTranslation } from "react-i18next";

 function MobileMenu({ locale }: { locale: string }) {
  const { t } =  useTranslation("common");
  const [menuOpen, setMenuOpen] = useState(false); // State for the mobile menu


  return (
    <header className="fixed block z-50  md:hidden top-0 w-full bg-black bg-opacity-40 shadow-md">
      <div className="container mx-auto px-4 lg:px-24 flex items-center justify-between py-4">
        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>

        {/* Logo */}
        <div className="w-[118px] h-[56px] bg-[url('/assets/images/expologo.svg')] bg-contain bg-no-repeat"></div>

      </div>

      {/* Mobile Menu (Shown when open) */}
      {menuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-black bg-opacity-90 p-4">
          <nav className="flex flex-col items-center gap-4">
            <MenuItemsDesktop  />
          </nav>
          <div className="flex flex-col items-center gap-5 justify-center mt-4">
            <button className="flex w-[170px] pt-2 pr-6 pb-2 pl-6 flex-col gap-2 justify-center items-center rounded-[41px] border border-solid border-[#f8992f] relative z-[2] pointer">
              <span className="text-[16px] font-medium leading-[29px] text-[#f8992f]">
                تسجيل للحضور
              </span>
            </button>
            <LanguageChanger />
          </div>
        </div>
      )}
    </header>
  );
}

export default MobileMenu;
