import { TFunction } from "i18next";


const Hero = ({ t }: { t: TFunction }) => {
  
  return (
<div className="main-container w-full xl:w-[1440px] flex justify-center items-center h-[810px]    mx-auto my-0">
  <div className="flex w-full xl:w-[655px] flex-col  gap-[32px] items-center flex-nowrap relative z-[1] xl:mt-[120px]">
    <div className="flex flex-col gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[2]">
      <span className="rtl:xl:h-[87px] self-stretch shrink-0 basis-auto  text-[48px] bukra-bold leading-[87px] text-[#fff] relative text-center  rtl:xl:whitespace-nowrap z-[3]">
      {t("hero_title")}
      </span>
      <span className="flex w-full xl:w-[600px] xl:h-[66px] justify-center items-start shrink-0  text-[18px] font-medium leading-[32.76px] text-[#fff] relative text-center z-[4]">
      {t("hero_subtitle")}

      </span>
    </div>
    <button className="flex hover:bg-white transition-all duration-500 cursor-pointer w-[170px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] flex-col gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[41px] border-solid border border-[#f8992f] relative z-[5] pointer">
      <span className="h-[29px] shrink-0 basis-auto  text-[16px] font-medium leading-[29px] text-[#f8992f] relative  whitespace-nowrap z-[6]">
      {t("contact_us")}
      </span>
    </button>
  </div>
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="https://s3-figma-videos-production-sig.figma.com/video/1450121354152311330/TEAM/2f37/eabd/-a7b5-481b-8a13-5c3b32fb7516?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=q7-GeXQEi8YUvQkNZrB-Sy6mopQ6glKfUuTnR4RemsTmIot16FGwp3DNTkxK4RMmdGstqrHR2cNrS1h00LH5IqFJHEr8hzKduDfdHB8K0jdsu3zo4Q-nj2Zyf~nfbL4YUKd5AlWIxRJi32QOrGoKQ2GeABETgaGSiEPCY-Czrz9jsURCesf-uOsiGtRPxxXqs88eiKQM60Q0we00yA70SqjjWjNiJkRhawlle95rkSH83fPLbgeBNPTzNXozrDh~1i3ryCzD3VofmmPpfCJv-KFA10aq6YTOprp69QUtHJNY5FfvSJ6NUo56FoddmLUcCjIinUQogNgv1BYVGOiFsA__" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Gradient Overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#28170800] to-[#281708]"></div>


</div>

  );
};

export default Hero;
