import { TFunction } from "i18next";

function AboutApp({ t }: { t: TFunction }) {
  return (
    <div className="w-full xl:w-[1440px] ms-auto">
      <div className="w-full xl:w-[1320px] h-[316px] relative mx-auto my-0">
        <div className="w-full xl:w-[70.01%] h-[91.61%] bg-[url('/assets/images/Vector.svg')] ltr:rotate-y-180 bg-contain xl:bg-cover bg-no-repeat absolute top-0 end-0" />
        <div className="flex w-full xl:w-[554px] xl:h-[316px] flex-col gap-[16px] justify-center items-start flex-nowrap xl:absolute xl:top-0 xl:end-[766px] z-[1]">
          <div className="flex w-full xl:w-[554px] flex-col items-start shrink-0 flex-nowrap relative z-[2]">
            <span className="xl:h-[29px] self-stretch shrink-0 basis-auto text-[16px] font-medium leading-[29px] text-[#dbdbdb] relative text-start whitespace-nowrap z-[3]">
              {t("about.title")}
            </span>
            <span className="xl:h-[36px] self-stretch shrink-0 basis-auto text-[20px] font-bold leading-[36px] text-[#f8992f] relative text-start whitespace-nowrap z-[4]">
              {t("about.subtitle")}
            </span>
          </div>
          <span className="flex w-full xl:w-[554px] rtl:xl:h-[174px] items-start shrink-0 text-[16px] font-medium leading-[29.12px] text-[#dbdbdb] relative z-[5]"
            dangerouslySetInnerHTML={{ __html: t("about.description").replace(/\n/g, "<br />") }}
          />

          <button className="flex w-[170px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] flex-col gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[41px] border-solid border border-[#f8992f] relative z-[6] pointer">
            <span className="h-[29px] shrink-0 basis-auto text-[16px] font-medium leading-[29px] text-[#f8992f] relative text-end whitespace-nowrap z-[7]">
              {t("about.learn_more")}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutApp;
