import { TFunction } from "i18next";

function AboutApp({ t }: { t: TFunction }) {
  return (
<div className="main-container w-full xl:w-[1050px] xl:h-[400px] relative mx-auto  xl:my-0">
  <div className="flex w-full xl:w-[568.115px] xl:h-[400px] flex-col gap-[16px] justify-center items-end flex-nowrap  z-[1]">
    <div className="flex w-full xl:w-[554px] flex-col items-start shrink-0 flex-nowrap relative z-[2]">
      <span className="w-full xl:h-[29px] self-stretch shrink-0 basis-auto  text-[16px] font-medium leading-[29px] text-[#dbdbdb] relative text-start whitespace-nowrap z-[3]">
        نبذة عن المعرض
      </span>
      <span className="xl:h-[36px] w-full self-stretch shrink-0 basis-auto  text-[20px] font-bold leading-[36px] text-[#f8992f] relative text-start xl:whitespace-nowrap z-[4]">
        عن معرض القهوة السعودية الأوغندية
      </span>
    </div>
    <span className="flex w-full xl:w-[554px] xl:h-[319px] items-start shrink-0  text-[16px] font-medium leading-[29.12px] text-[#dbdbdb] relative z-[5]">
      معرض القهوة السعودي الأوغندي هو حدث متميز يعكس التبادل الثقافي
      والاقتصادي الغني بين المملكة العربية السعودية وأوغندا. تأسس المعرض
      بهدف تعزيز الروابط التجارية بين البلدين، وساهم بشكل كبير في دعم
      التجارة الثنائية والتعاون الثقافي.
      <br />
      <br />
      على مر السنين، جذب المعرض كبار قادة الصناعة، وعرض أحدث الابتكارات في
      مجال القهوة، وساهم في بناء شراكات تجارية قوية.
      <br />
      <br />
      يعد لقاء القهوة السعودي الأوغندي لعام 2025 حدثًا هامًا لعشاق القهوة من
      جميع أنحاء العالم، حيث سيقام في الرياض في الفترة من 1 إلى 4 فبراير
      2025.
    </span>
  </div>
  <div className="w-full md:w-[61.71%] h-4/5 bg-[url(/assets/images/expo/aboutVector.svg)] rotate-y-180 bg-[length:100%_100%] bg-no-repeat absolute top-[20.13%] end-[-0.05%]" />
</div>
  );
}

export default AboutApp;
