"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function MenuItemsDesktop({
  className,
  locale = "ar",
}: {
  className?: string;
  locale?: string;
}) {
  const { t } = useTranslation("expo");

  // Define menu items with translated labels
  const menuItems = [
    { label: t("menu.about"), href: "#about" },
    { label: t("menu.products"), href: "#products" },
    { label: t("menu.events"), href: "#events" },
    { label: t("menu.partners"), href: "#partners" },
  ];

  // State to hold the currently active section
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Set activeSection to the id with a '#' prefix to match our hrefs
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe each section referenced in menuItems
    menuItems.forEach((item) => {
      const id = item.href.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [menuItems]);

  // Smooth scroll to section on click
  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop - 100, behavior: "smooth" });
    }
  };

  return (
    <div className={`flex flex-col md:flex-row w-[429px] ltr:gap-[10px] rtl:gap-[32px] items-center shrink-0 flex-nowrap relative z-[6] ${className}`}>
      {menuItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className={`h-[29px] basis-auto text-[16px] font-medium leading-[29px] relative text-left whitespace-nowrap`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
