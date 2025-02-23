import initTranslations from "@/app/i18n";
import LanguageChanger from "../LanguageChanger";
import MenuItemsDesktop from "./MenuItemsDesktop";
import MobileMenu from "./MobileMenu";

async function Header({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["expo"]);

  return (
    <>
      <div className="main-container hidden md:flex w-full max-w-[1440px] pt-4 md:pt-[16px] pr-4 md:pr-[100px] pb-4 md:pb-[16px] pl-4 md:pl-[100px] justify-between items-center relative mx-auto">
        <div className="w-[242.479px] h-[64px] shrink-0 bg-[url(/assets/images/expologo.svg)] bg-cover bg-no-repeat relative z-[11]" />
        <div className="flex-1 flex items-center  justify-end">
          {/* Desktop Navigation */}
          <div className="flex  rtl:me-[40px]">
            <MenuItemsDesktop locale={locale} />
          </div>

          <div className="flex gap-6 items-center">
            <LanguageChanger />
            <button className="flex rtl:w-[170px] pt-2 pr-6 pb-2 pl-6 flex-col gap-2 justify-center items-center rounded-[41px] border border-solid border-[#f8992f] relative z-[2] pointer">
              <span className="text-[16px] font-medium leading-[29px] text-[#f8992f]">
                {t("header.register")}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <MobileMenu locale={locale} />
      </div>
    </>
  );
}

export default Header;
