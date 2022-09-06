import React from 'react'
import style from './DigiKalaOffer.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const DigiKalaOffer = () => {
  return (
    <div className={`${style.OuterContainer}`}>
        <Swiper
        slidesPerView={6}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={true}
      >
        <SwiperSlide>
          <div className={`${style.swiperSlideBoxDiv}`}>
            <img className={`${style.AmazingImg}`}
              src="https://www.digikala.com/statics/img/svg/amazing-typo.svg"
              alt=""
            />
            <img className={`${style.BoxImg}`}
              src="https://www.digikala.com/statics/img/png/specialCarousel/box.png"
              alt=""
            />
            <span> مشهاده همه </span>
          </div>
        </SwiperSlide>
        </Swiper> 
    </div>
  )
}

export default DigiKalaOffer