import { Arrow } from "@/components/Animations/arrowDown";
import { TFunction } from "i18next";
import React from "react";

function Articles({ t }: { t: TFunction }) {
  return (
    <div className="main-container flex w-full xl:w-[1440px] pt-[96px] pr-0 pb-[96px] pl-0 flex-col gap-[48px] items-center flex-nowrap relative mx-auto my-0">
      <div className="flex w-full xl:w-[712px] flex-col gap-[16px] justify-center items-start shrink-0 flex-nowrap relative">
        <div className="flex flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[1]">
          <span className="flex w-full xl:w-[382px] xl:h-[36px] justify-center items-center shrink-0 basis-auto text-[20px] font-bold leading-[36px] text-[#f8992f] relative text-start whitespace-nowrap z-[2]">
            {t("articles.title")}
          </span>
        </div>
        <span className="flex w-full xl:w-[712px] xl:h-[58px] justify-center items-center shrink-0 text-[16px] font-medium leading-[29.12px] text-[#dbdbdb] relative text-center z-[3]">
          {t("articles.description")}
        </span>
      </div>
      <div className="flex w-full xl:w-[1152px] gap-[24px] items-center justify-center shrink-0 flex-wrap xl:flex-nowrap relative z-[4]">
        {[
          {
            title: t("articles.list.0.title"),
            description: t("articles.list.0.description"),
            url: "/assets/images/articles/3.svg",
          },
          {
            title: t("articles.list.1.title"),
            description: t("articles.list.1.description"),
            url: "/assets/images/articles/2.svg",
          },
          {
            title: t("articles.list.2.title"),
            description: t("articles.list.2.description"),
            url: "/assets/images/articles/1.svg",
          },
        ].map((article, index) => (
          <div
            key={index}
            className="flex w-full xs:w-[368px] xs:h-[465px] flex-col overflow-hidden items-start shrink-0 flex-nowrap relative z-[5] group"
          >
            <div
              style={{ backgroundImage: `url(${article.url})` }}
              className="w-full xs:w-[368px] h-[250px] shrink-0 group-hover:scale-110 transition-all duration-300  bg-cover bg-no-repeat relative z-[6]"
            />
            <div className="flex xs:h-[215px] pt-[16px] pr-[16px] pb-[24px] pl-[16px] flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap bg-[#371f0b] group-hover:bg-[url(/assets/images/articles/hover.svg)] transition-all duration-300 bg-cover bg-no-repeat rounded-[16px] rounded-tl-none rounded-tr-none rounded-br-[16px] rounded-bl-[16px] relative z-[7]">
              <div className="flex w-full xs:w-[336px] flex-col gap-[12px] items-start shrink-0 flex-nowrap relative z-[8]">
                <span className="flex w-full line-clamp-1 xs:w-[336px]  justify-start items-start shrink-0 basis-auto text-[16px] font-semibold leading-[29px] text-[#fff] relative text-start xs:whitespace-nowrap z-[9]">
                  {article.title}
                </span>
                <span className="flex w-full line-clamp-3 xs:w-[336px] xs:h-[81px] justify-start items-start shrink-0 text-[14px] font-normal leading-[27px] text-[#dbdbdb] relative text-start z-10">
                  {article.description}
                </span>
              </div>
              <span className="h-[29px] self-stretch shrink-0 basis-auto text-[16px] font-normal leading-[29px] text-[#dbdbdb] relative text-start whitespace-nowrap z-[11]">
                {t("articles.read_more")}
              </span>
            </div>
          </div>
        ))}
      </div>
      <button className="flex w-[170px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] flex-col gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[41px] border-solid border border-[#f8992f] relative z-[26] pointer">
        <span className="h-[29px] shrink-0 basis-auto text-[16px] font-medium leading-[29px] text-[#f8992f] relative text-left whitespace-nowrap z-[27]">
          {t("articles.all_articles")}
        </span>
      </button>
    </div>
  );
}

export default Articles;
