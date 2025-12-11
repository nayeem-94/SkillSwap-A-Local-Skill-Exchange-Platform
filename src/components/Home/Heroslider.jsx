import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Heroslider = () => {
  return (
    <div className="w-full">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-90 flex justify-center items-center text-3xl">
            <img src="/work.jpg"></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-90 bg-teal-500 text-white flex justify-center items-center text-3xl">
            <img src="/work2.jpg"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-90flex justify-center items-center text-3xl">
            <img src="/work3.jpg"></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-90 flex justify-center items-center text-3xl">
            <img src="/work4.jpg"></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Heroslider;
