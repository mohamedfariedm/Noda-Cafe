import { TFunction } from "i18next";

function OurStory({ t }: { t: TFunction }) {
  return (
    <div  className="main-container flex flex-col gap-6 xl:gap-0 md:flex-row xl:w-[1050px] justify-between items-center flex-nowrap relative mx-auto my-0">
      {/* Video Container */}
      <div
        style={{ backgroundImage: `url(/assets/images/expo/layer.svg)` }}
        className="w-full md:w-[349.46px] h-[372px] shrink-0 bg-cover bg-no-repeat relative flex justify-center xl:ms-5 items-center"
      >
        <div
          style={{ backgroundImage: `url(/assets/images/expo/testImage.svg)` }}
          className="w-full h-full absolute bottom-2 left-2 bg-cover bg-no-repeat rounded-2xl overflow-hidden"
        ></div>
      </div>

      {/* Text Content */}
      <div className="flex w-full md:w-[550px] flex-col gap-[16px] justify-center items-end shrink-0 flex-nowrap relative z-[1]">
        <span className="md:h-[36px] self-stretch shrink-0 basis-auto text-[20px] font-bold leading-[36px] text-[#f8992f] relative text-start whitespace-nowrap z-[2]">
          {t("ourStory.guestHonor")}
        </span>
        <span className="flex w-full md:w-[550px] items-start shrink-0 text-[16px] font-medium leading-[29.12px] text-[#dbdbdb] relative z-[3]">
          {t("ourStory.description.line1")}
          <br />
          <br />
          {t("ourStory.description.line2")}
        </span>
      </div>
    </div>
  );
}

export default OurStory;
