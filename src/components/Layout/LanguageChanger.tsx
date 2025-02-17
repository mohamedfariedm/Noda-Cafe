"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  // Function to change language
  const handleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    // Set a cookie to save the preferred locale
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${30 * 24 * 60 * 60}`;

    // Determine the new path
    let newPath = currentPathname;
    if (currentPathname.startsWith(`/${currentLocale}`)) {
      newPath = currentPathname.replace(`/${currentLocale}`, `/${newLocale}`);
    } else {
      newPath = `/${newLocale}${currentPathname}`;
    }

    // Change locale and redirect
    i18n.changeLanguage(newLocale);
    router.push(newPath);
  };

  return (
    <div className="relative z-50">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="h-[29px] md:w-[132px] shrink-0 basis-auto  text-[16px] font-medium leading-[29px] text-[#fff] relative text-start whitespace-nowrap z-[9]"
      >
        {currentLocale === "en" ? "English" : "العربية"}
      </button>

      {dropdownOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute start-0 mt-2 bg-white text-black rounded shadow-lg"
        >
          <button
            onClick={() => handleChange("ar")}
            className="block px-4 py-2 hover:bg-gray-200 w-full text-start"
          >
            العربية
          </button>
          <button
            onClick={() => handleChange("en")}
            className="block px-4 py-2 hover:bg-gray-200 w-full text-start"
          >
            English
          </button>
        </motion.div>
      )}
    </div>
  );
}
