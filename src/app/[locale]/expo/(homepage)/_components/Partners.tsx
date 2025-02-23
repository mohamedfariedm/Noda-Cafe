import { TFunction } from "i18next";

function Partners({ t }: { t: TFunction }) {
  return (
    <div className="main-container w-full max-w-[1440px] pt-[96px] pb-[96px] flex flex-col gap-[48px] items-center mx-auto">
      {/* Header Section */}
      <div className="flex w-full md:w-[693px] flex-col gap-[16px] justify-center items-center">
        <div className="flex flex-col items-center w-full md:w-auto relative z-[1]">
          <span className="block w-full md:w-[312px] xl:h-[36px] text-[20px] font-bold leading-[36px] text-[#f8992f] text-center xl:whitespace-nowrap z-[2]">
            {t("partners.title")}
          </span>
        </div>
        <span className="block w-full md:w-[693px] xl:h-[58px] text-[16px] font-medium leading-[29.12px] text-[#dbdbdb] text-center z-[3]">
          {t("partners.description")}
        </span>
      </div>

      {/* Logos Section */}
      <div className="flex w-full md:w-[1050px] gap-[40px] justify-center items-center flex-wrap mx-auto">
        {["1", "2", "3", "4"].map((num) => (
          <div
            key={num}
            className="group relative w-40 h-20 md:w-[179.457px] md:h-[79.88px] flex justify-center items-center bg-cover bg-no-repeat"
          >
            <img
              src={`/assets/images/expo/${num}.svg`}
              className="w-full h-full"
              alt={`${t("partners.logoAlt")} ${num}`}
            />
            {/* Spotlight Hover Effect */}
            {[10, 15, 20, 25, 30, 35, 40].map((opacity, index) => (
              <div
                key={index}
                className={`absolute inset-0 -top-16 -left-16 -right-16 -bottom-16 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_${opacity}%)] opacity-0 group-hover:opacity-70 transition duration-${300 + index * 100}`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
