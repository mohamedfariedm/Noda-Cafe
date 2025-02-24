import ContactFormExpo from "@/app/[locale]/(SharedLayout)/contact/_components/ContactFormExpo";
import { TFunction } from "i18next";

function Contact({ t }: { t: TFunction }) {
  return (
    <div className="main-container flex w-full xl:w-[1440px]  flex-col gap-[48px] items-center flex-nowrap relative mx-auto my-0">
      {/* Header Section */}
      <div className="flex w-full xl:w-[693px] flex-col gap-[16px] justify-center items-center shrink-0 flex-nowrap relative">
        <div className="flex flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[1]">
          <span className="flex xl:w-[88px] xl:h-[36px] justify-end items-start shrink-0 basis-auto text-[20px] font-bold leading-[36px] text-[#f8992f] relative text-right whitespace-nowrap z-[2]">
            {t("contact.registerNow")}
          </span>
        </div>
        <span className="flex xl:w-[693px] xl:h-[87px] justify-center items-start shrink-0 text-[16px] font-medium leading-[29.12px] text-[#dbdbdb] relative text-center overflow-hidden z-[3]">
          {t("contact.description.line1")}
          <br />
          {t("contact.description.line2")}
        </span>
      </div>

      {/* Contact Form Section */}
      <div className="flex w-full xl:w-[1050px] flex-col gap-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#37200b] rounded-[20px] relative z-[4]">
        <ContactFormExpo />
      </div>
    </div>
  );
}

export default Contact;
