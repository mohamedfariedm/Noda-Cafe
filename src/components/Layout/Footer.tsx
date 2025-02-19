import React from "react";
import initTranslations from "@/app/i18n";
import Link from "next/link";

async function Footer({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["common"]);

  // Social media icons with URLs
  const socialIcons = [
    { url: "#", icon: "/assets/images/socialicons/snapchat.svg" },
    { url: "#", icon: "/assets/images/socialicons/new-twitter.svg" },
    { url: "#", icon: "/assets/images/socialicons/whatsapp.svg" },
    { url: "#", icon: "/assets/images/socialicons/linkedin.svg" },
    { url: "#", icon: "/assets/images/socialicons/instagram.svg" },
  ];

  // Footer navigation links
  const links = [
    { title: t("footer.home"), url: "/" },
    { title: t("footer.products"), url: "/products" },
    { title: t("footer.about"), url: "/about" },
    { title: t("footer.contact"), url: "/contact" },
    { title: t("footer.blogs"), url: "/blogs" },
    { title: t("footer.expo"), url: "/expo" },
    { title: t("footer.faq"), url: "/faq" },
  ]; 

  return (
    <div className="main-container flex flex-col items-start flex-nowrap relative mx-auto my-0">
      {/* Top Section */}
      <div className="bg-[#37200b] w-full flex justify-center items-center flex-nowrap relative">
        <div className="flex flex-col gap-y-5 xl:flex-row pt-[48px] w-full xl:w-[1440px] xs:pr-[100px] pb-[48px] xs:pl-[100px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#37200b] relative">
          {/* Links Section */}
          <div className="flex w-full xl:w-[625px] gap-[141px] items-center shrink-0 flex-nowrap relative z-[5]">
            <div className="flex w-full flex-col xs:flex-row xl:w-[625px] gap-[16px] items-center justify-center shrink-0 flex-wrap xl:flex-nowrap relative z-[6]">
              {links.map((link, index) => (
                <Link key={index} href={link.url}>
                  <span className="h-[29px] shrink-0 basis-auto text-[16px] font-medium leading-[29px] text-[#fff] relative text-left whitespace-nowrap cursor-pointer hover:text-[#f8992f] transition">
                    {link.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Email Subscription Button */}
          <button className="w-full xs:w-[340px] h-[56px] shrink-0 border-none relative z-[1] pointer">
            <div className="w-full h-full bg-[#5f3f23] rounded-[36px] absolute top-0 left-0 z-[2]" />
            <div
              style={{ backgroundImage: `url(/assets/images/beCloser/sendIcon.svg)` }}
              className="w-full xs:w-[11.76%] h-[71.43%] bg-contain xs:bg-cover bg-no-repeat absolute top-[14.29%] left-[2.35%] z-[3]"
            />
            <span className="flex h-[25px] justify-start items-start text-[14px] font-medium opacity-[0.55] leading-[25px] text-[#dbdbdb] absolute top-[calc(50%-12px)] left-[62.06%] text-left whitespace-nowrap z-[4]">
              {t("footer.email_placeholder")}
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#281607] w-full flex justify-center items-center flex-nowrap relative">
        <div className="flex flex-col gap-y-5 sm:gap-y-0 sm:flex-row pt-[32px] w-full xl:w-[1440px] xs:pr-[100px] pb-[32px] xs:pl-[100px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[14]">
          {/* Copyright Text */}
          <span className=" sm:h-[25px] shrink-0 basis-auto text-[14px] font-medium leading-[25px] text-[#cdcdcd] relative text-center sm:whitespace-nowrap z-[21]">
            © 2025 {t("footer.rights_reserved")} Nonda Coffee
          </span>

          {/* Social Media Icons */}
          <div className="flex w-full xl:w-[164px] gap-[16px] items-center justify-center shrink-0 flex-nowrap relative z-[15]">
            {socialIcons.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                <div
                  style={{ backgroundImage: `url(${social.icon})` }}
                  className="w-[20px] h-[20px] shrink-0 bg-cover bg-no-repeat relative cursor-pointer hover:opacity-80 transition"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
