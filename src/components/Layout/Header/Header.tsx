import initTranslations from "@/app/i18n";
import Container from "../Container";
import LanguageChanger from "../LanguageChanger";
import MenuItemsDesktop from "./MenuItemsDesktop";
import { Logo } from "@/components/Main";
import MobileMenu from "./MobileMenu";

async function Header({ locale }: { locale: string }) {

  const { t } = await initTranslations(locale, ["common"]);
  const socialIcons = [
    {url:"",icon:"/assets/images/socialicons/snapchat.svg"},
    {url:"",icon:"/assets/images/socialicons/new-twitter.svg"},
    {url:"",icon:"/assets/images/socialicons/whatsapp.svg"},
    {url:"",icon:"/assets/images/socialicons/linkedin.svg"},
    {url:"",icon:"/assets/images/socialicons/instagram.svg"},
      ];
  return (
    <>  
<div className=" absolute top-0 hidden md:flex w-full xl:w-[1440px] pt-[24px] pr-0 pb-[24px] pl-0 flex-col items-start flex-nowrap  mx-auto my-0">
  <div className="flex pt-0 pr-[100px] pb-[8px] pl-[100px] justify-between items-center self-stretch shrink-0 flex-nowrap relative">

<LanguageChanger/>
    <div className="w-[118.039px] h-[56px] shrink-0 bg-[url('/assets/images/logo.svg')] bg-cover bg-no-repeat relative overflow-hidden z-[7]" />
    <div className="flex w-[132px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[1]">
  {socialIcons.map((icon, index) => (
    <a
      key={index}
      href={icon.url || "#"} // Set the correct social link or keep as "#" if missing
      target="_blank"
      rel="noopener noreferrer"
      className="w-[20px] h-[20px] shrink-0 relative"
    >
      <img
        src={icon.icon}
        alt={`Social Icon ${index + 1}`}
        className="w-full h-full object-cover"
      />
    </a>
  ))}
</div>

 
  </div>

<MenuItemsDesktop t={t} />
</div>
    <MobileMenu locale={locale} socialIcons={socialIcons} />
    </>


  );
}

export default Header;
