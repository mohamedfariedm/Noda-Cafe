import { Arrow } from "@/components/Animations/arrowDown";
import { TFunction } from "i18next";
import React from "react";


function AboutApp({ t }: { t: TFunction }) {
  return (
    <div className="main-container w-[1320px] h-[316px] relative ms-auto my-0">
    <div className="w-[70.01%] h-[91.61%] bg-[url('/assets/images/Vector.svg')] bg-cover bg-no-repeat absolute top-0 end-0" />
    <div className="flex w-[554px] h-[316px] flex-col gap-[16px] justify-center items-start flex-nowrap absolute top-0 end-[766px] z-[1]">
      <div className="flex w-[554px] flex-col items-start shrink-0 flex-nowrap relative z-[2]">
        <span className="h-[29px] self-stretch shrink-0 basis-auto  text-[16px] font-medium leading-[29px] text-[#dbdbdb] relative text-start whitespace-nowrap z-[3]">
          من نحن
        </span>
        <span className="h-[36px] self-stretch shrink-0 basis-auto  text-[20px] font-bold leading-[36px] text-[#f8992f] relative text-start whitespace-nowrap z-[4]">
          قصتنا مع القهوة
        </span>
      </div>
      <span className="flex w-[554px] h-[174px] items-start shrink-0  text-[16px] font-medium leading-[29.12px] text-[#dbdbdb] relative z-[5]">
        تأسست Nonda Coffee بشغف لإعادة تعريف تجربة القهوة. بدأنا رحلتنا من مزرعة
        صغيرة تجمع أفضل أنواع حبوب البن، وتوسعت رؤيتنا لتقديم القهوة المميزة
        لعشاقها في كل مكان. نعمل عن كثب مع المزارعين لضمان الجودة والاستدامة،
        ونسعى دائمًا لإلهام عملائنا بفنجان من السعادة كل يوم.
        <br />
        نحن ملتزمون بتقديم تجربة قهوة متكاملة تشمل كل التفاصيل من الطعم وحتى
        التغليف.
      </span>
      <button className="flex w-[170px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] flex-col gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[41px] border-solid border border-[#f8992f] relative z-[6] pointer">
        <span className="h-[29px] shrink-0 basis-auto  text-[16px] font-medium leading-[29px] text-[#f8992f] relative text-end whitespace-nowrap z-[7]">
          اعرف المزيد
        </span>
      </button>
    </div>
  </div>
  


  );
}

export default AboutApp;
