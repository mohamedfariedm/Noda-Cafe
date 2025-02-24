"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

function ImageCarousel() {
  const { t } = useTranslation("homepage");

  const products = [
    {
      image: "/assets/images/expo/product/1.svg",
    },
    {
      image: "/assets/images/expo/product/2.svg",
    },
    {
      image: "/assets/images/expo/product/3.svg",
    },
    {
      image: "/assets/images/expo/product/3.svg",
    },
    {
      image: "/assets/images/expo/product/3.svg",
    }
  ];

  return (

    <>
    <div className="main-container imageCarousel flex w-full xl:w-[1440px] pt-[96px] pr-0 pb-[96px] pl-0 flex-col gap-[48px] items-center flex-nowrap relative mx-auto my-0">
  <div className="flex w-full xl:w-[740px] flex-col gap-[16px] justify-center items-center shrink-0 flex-nowrap relative">
    <div className="flex flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[1]">
      <span className="flex xl:w-[427px] xl:h-[36px] justify-end items-start shrink-0 basis-auto  text-[20px] font-bold leading-[36px] text-[#f8992f] relative text-center xl:whitespace-nowrap z-[2]">
        لحظات من معرض القهوة السعودية الأوغندية
      </span>
    </div>
    <span className="flex xl:w-[740px] xl:h-[29px] justify-center items-start shrink-0 basis-auto  text-[16px] font-medium leading-[29px] text-[#dbdbdb] relative text-center xl:whitespace-nowrap z-[3]">
      استمتع بلحظات من معرض القهوة السعودية الأوغندية، حيث التقى الشغف
      بالابتكار في عالم القهوة.
    </span>
  </div>
  <div className="main-container flex w-full xl:w-[1440px] flex-col gap-[48px] justify-center items-center relative mx-auto">


{/* Swiper Slider */}
<Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={24}
  slidesPerView={3}
  loop
  breakpoints={{
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  navigation={{
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  }}
  pagination={{ clickable: true }}
  className="flex w-full xl:w-[1052px] justify-center  items-center shrink-0 flex-nowrap relative z-[4]"
>
  {products.map((product, index) => (
    <SwiperSlide className="w-full flex items-center justify-center" key={index}>
            <div
            style={
              {
                backgroundImage:`url(${product.image})`
              }
            }
            className="  w-full sm:w-[340px] h-[340px] shrink-0 bg-[url(https://placehold.co/600x400)] bg-cover bg-no-repeat relative z-[6]" />
    </SwiperSlide>
  ))}

  {/* Navigation Arrows */}
  <div className="flex h-32 ltr:flex-row-reverse sm:h-auto justify-center sm:justify-start w-full sm:w-[112px] gap-[16px] sm:items-center shrink-0 flex-nowrap mt-[24px] z-[18]">
    <div
      className="swiper-prev flex w-[48px] h-[48px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[32px] border-solid border border-[#dbdbdb] relative z-[19]"
    >
      <div
        style={{
          backgroundImage: `url(/assets/images/products/arrow-right.svg)`,
        }}
        className="w-[16px] h-[16px] shrink-0 relative overflow-hidden z-[20]"
      ></div>
    </div>
    <div
      className="swiper-next flex w-[48px] h-[48px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[32px] border-solid border border-[#dbdbdb] relative z-[19]"
    >
      <div
        style={{
          backgroundImage: `url(/assets/images/products/arrow-left.svg)`,
        }}
        className="w-[16px] h-[16px] shrink-0 relative overflow-hidden z-[20]"
      ></div>
    </div>
  </div>
</Swiper>
</div>
</div>

    
    </>
  );
}

export default ImageCarousel;
