import { TFunction } from "i18next";

const Hero = ({ t }: { t: TFunction }) => {
  return (
    <div  className="h-[140vh] xs:h-[100vh] md:h-[650px]">
      <div className="main-container w-full xl:w-[1440px] flex justify-center items-center mt-[170px] mx-auto my-0">
        <div className="flex w-full xl:w-[689px] flex-col gap-[32px] items-center flex-nowrap relative z-[1]">
          <div className="flex flex-col gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[2]">
            <span className="self-stretch shrink-0 basis-auto text-[40px] bukra-bold leading-[72.8px] text-[#fff] relative text-center z-[3]">
              {t("hero.title")}
            </span>
            <span className="flex w-full xl:w-[600px] justify-center items-start shrink-0 text-[18px] font-medium leading-[32.76px] text-[#fff] relative text-center z-[4]">
              {t("hero.description")}
            </span>
          </div>
          <button className="flex hover:bg-white transition-all duration-500 cursor-pointer rtl:w-[170px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] flex-col gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[41px] border-solid border border-[#f8992f] relative z-[5] pointer">
            <span className="h-[29px]  shrink-0 basis-auto text-[16px] font-medium leading-[29px] text-[#f8992f] relative whitespace-nowrap z-[6]">
              {t("hero.button")}
            </span>
          </button>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute rotate-y-180 top-0 left-0 w-full h-[140vh] xs:h-[100vh]  xl:h-[810px] object-cover"
        >
          <source
            src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1450121354152311330/ad37a6d27a1eafe409cece34af5f799b4b2cb8b4?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hfnrsfJ-V~k86mUc~25UjVcmDmBH7aU8hzWQntLUHhQ~kTeQalU7BYcy7yb3yp1vN22hCld75Yfjwo7YZ-1OiAwkaj-boLNs47r2n84fNMcY8VaB0M9KLmgqvYkq4BajdAvJAozrlkixhZVURVlzPhCR0hm24kuBaNQsRgKrRiEZznd9Xke~wYCl7u-cDAxMbqpk~t-ooqupNyTjKKb-shBKctXC-7TUHtHaonJvbKrEyoI2bLbiLHv~EAOMr3zGkEhWIRmVm~FWit-JuVlyXFu8qdXuQnW4nUvDRRLM1XGbKE~ALFYOf4RhaSXcEyvboycJzhoQMBgpqWKPo-zQHQ__"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-[140vh] xl:h-[810px] bg-gradient-to-t from-[#281708] via-[#0000] to-[#0000]" />
      </div>
    </div>
  );
};

export default Hero;
