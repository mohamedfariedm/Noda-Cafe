import initTranslations from "@/app/i18n";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";

type props = {
  params: { locale: string };
};

async function page({ params: { locale } }: props) {
  const { t } = await initTranslations(locale, ["aboutUs"]);

  return (
    <>
        <BreadCrumbComponent t={t} />
        <div className="main-container w-[1445px] h-[603px] relative mx-auto my-0">
  <div className="flex w-[560px] h-[603px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col gap-[64px] items-center flex-nowrap bg-[#37200b] rounded-[16px] absolute top-0 left-[808px] z-[1]">
    <div className="flex w-[496px] flex-col gap-[40px] items-center shrink-0 flex-nowrap relative z-[2]">
      <div className="flex flex-col gap-[24px] items-center self-stretch shrink-0 flex-nowrap relative z-[3]">
        <div className="flex gap-[32px] items-start self-stretch shrink-0 flex-nowrap relative z-[4]">
        <div className="flex w-[232px] flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[13]">
            <div className="flex w-[85px] gap-[2px] items-start shrink-0 flex-nowrap relative z-[14]">
              <span className="h-[20px] shrink-0 basis-auto text-[14px] font-medium leading-[20px] text-[#fff] relative text-start whitespace-nowrap z-[15]">
                *
              </span>
              <span className="h-[20px] shrink-0 basis-auto text-[14px] font-medium leading-[20px] text-[#fff] relative text-start whitespace-nowrap z-[16]">
                الاسم الأول
              </span>
            </div>
            <div className="flex h-[56px] pt-[10px]  pr-[16px] pb-[10px] pl-[16px] gap-[8px] items-center self-stretch shrink-0 flex-nowrap bg-[#5f3f23] rounded-[16px] relative overflow-hidden z-[17]">
              <input placeholder="الاسم الأول" className="placeholder:text-[#DCDCDC] outline-none w-[232px] h-[56px] shrink-0 bg-transparent border-none " />
            </div>
          </div>
          <div className="flex w-[232px] flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[5]">
            <div className="flex w-[86px] gap-[2px] items-start shrink-0 flex-nowrap relative z-[6]">
              <span className="h-[20px] shrink-0 basis-auto text-[14px] font-medium leading-[20px] text-[#fff] relative text-start whitespace-nowrap z-[7]">
                *
              </span>
              <span className="h-[20px] shrink-0 basis-auto text-[14px] font-medium leading-[20px] text-[#fff] relative text-start whitespace-nowrap z-[8]">
                الاسم الأخير
              </span>
            </div>
            <div className="flex h-[56px] pt-[10px] pr-[16px] pb-[10px] pl-[16px] gap-[8px] items-center self-stretch shrink-0 flex-nowrap bg-[#5f3f23] rounded-[16px] relative overflow-hidden z-[9]">
              <input placeholder="الاسم الأخير" className="placeholder:text-[#DCDCDC] outline-none w-[232px] h-[56px] shrink-0 bg-transparent border-none" />
            </div>
          </div>

        </div>
        <div className="flex flex-col gap-[8px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[21]">
          <div className="flex w-[112px] gap-[2px] items-start shrink-0 flex-nowrap relative z-[22]">
            <span className="h-[20px] shrink-0 basis-auto text-[14px] font-medium leading-[20px] text-[#fff] relative text-start whitespace-nowrap z-[23]">
              *
            </span>
            <span className="h-[20px] shrink-0 basis-auto text-[14px] font-medium leading-[20px] text-[#fff] relative text-start whitespace-nowrap z-[24]">
              البريد الإلكتروني
            </span>
          </div>
          <div className="flex h-[56px] pt-[10px] pr-[16px] pb-[10px] pl-[16px] gap-[8px] items-center self-stretch shrink-0 flex-nowrap bg-[#5f3f23] rounded-[16px] relative overflow-hidden z-[25]">
            <input placeholder="البريد الإلكتروني" className="placeholder:text-[#DCDCDC] outline-none w-[496px] h-[56px] shrink-0 bg-transparent border-none " />
          </div>
        </div>
        <div className="flex flex-col gap-[8px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[21]">
          <div className="flex w-[112px] gap-[2px] items-start shrink-0 flex-nowrap relative z-[22]">
            <span className="h-[20px] shrink-0 basis-auto text-[14px] font-medium leading-[20px] text-[#fff] relative text-start whitespace-nowrap z-[23]">
              *
            </span>
            <span className="h-[20px] shrink-0 basis-auto text-[14px] font-medium leading-[20px] text-[#fff] relative text-start whitespace-nowrap z-[24]">
              رقم الهاتف
            </span>
          </div>
          <div className="flex  pt-[10px] pr-[16px] pb-[10px] pl-[16px] gap-[8px] items-center self-stretch shrink-0 flex-nowrap bg-[#5f3f23] rounded-[16px] relative overflow-hidden z-[25]">
            <input placeholder="رقم الهاتف" type="number" className="placeholder:text-[#DCDCDC] outline-none w-[496px]  shrink-0 bg-transparent border-none" />
          </div>
        </div>
        <div className="flex flex-col gap-[8px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[21]">
          <div className="flex w-[112px] gap-[2px] items-start shrink-0 flex-nowrap relative z-[22]">
            <span className="h-[20px] shrink-0 basis-auto text-[14px] font-medium leading-[20px] text-[#fff] relative text-start whitespace-nowrap z-[24]">
              الرسالة
            </span>
          </div>
          <div className="flex h-[90px] pt-[30px] pr-[16px] pb-[10px] pl-[16px] gap-[8px] items-center self-stretch shrink-0 flex-nowrap bg-[#5f3f23] rounded-[16px] relative overflow-hidden z-[25]">
            <textarea placeholder="الرسالة" className="w-[496px] h-[90px] shrink-0 bg-transparent outline-none border-none placeholder:text-[#DCDCDC] " />
          </div>
        </div>
      </div>
      <button className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap border-none relative z-[44] pointer">
        <div className="flex pt-[14px] pr-[50px] pb-[14px] pl-[50px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#f8992f] rounded-[16px] relative z-[45]">
          <span className="flex w-[43px] h-[29px] justify-center items-start shrink-0 basis-auto text-[16px] font-medium leading-[29px] text-[#fff] relative text-center whitespace-nowrap z-[46]">
            إرسال
          </span>
        </div>
      </button>
    </div>
  </div>

  {/* Placeholder Background Image */}
  <div
    style={{ backgroundImage: `url(/assets/images/contact/vector.svg)` }}
    className="w-[1440px] h-[70.65%] bg-cover bg-no-repeat absolute top-[2.4%] left-1/2 translate-x-[-50.03%] translate-y-0"
  />

  {/* Contact Info Section */}
  <div className="flex w-[288px] h-[159px] flex-col gap-[16px] justify-center items-center flex-nowrap absolute top-[415px] left-[132px] z-[47]">
    <div className="w-[48px] h-[48px] shrink-0 bg-[#f8992f] rounded-full relative overflow-hidden z-[48]">
      <div
        style={{ backgroundImage: `url(https://placehold.co/600x400)` }}
        className="w-[24px] h-[24px] relative z-[49] mt-[12px] ml-[12px] bg-cover bg-no-repeat"
      />
    </div>
    <div className="flex w-[288px] flex-col gap-[8px] items-start shrink-0 flex-nowrap relative z-[51]">
      <span className="h-[29px] self-stretch shrink-0 basis-auto text-[16px] font-semibold leading-[29px] text-[#fff] text-center whitespace-nowrap z-[52]">
        info@nondacoffee.com
      </span>
    </div>
  </div>

  {/* Phone Contact Section */}
  <div className="flex w-[288px] h-[159px] flex-col gap-[16px] justify-center items-center flex-nowrap absolute top-[415px] left-[444px] z-[54]">
    <div className="w-[48px] h-[48px] shrink-0 bg-[#f8992f] rounded-full relative overflow-hidden z-[55]">
      <div
        style={{ backgroundImage: `url(https://placehold.co/600x400)` }}
        className="w-[24px] h-[24px] relative z-[56] mt-[12px] ml-[11.703px] bg-cover bg-no-repeat"
      />
    </div>
    <div className="flex w-[288px] flex-col gap-[8px] items-start shrink-0 flex-nowrap relative z-[58]">
      <span className="h-[29px] self-stretch shrink-0 basis-auto text-[16px] font-semibold leading-[29px] text-[#fff] text-center whitespace-nowrap z-[59]">
        +2 000-111-2222
      </span>
    </div>
  </div>
</div>

    </>
  );
}

export default page;
