import React from "react";
import Percent from "../Percent/Percent";
import Price from "../Price/Price";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import style from "./AmazingofferCart.module.scss";
import LinePrice from "../LinePrice/LinePrice";

const AmazingofferCart = () => {
  return (
    <div className={`${style.outerContainer}`}>
      <Swiper
        slidesPerView={6}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={true}
      >
        <SwiperSlide>
          <div className={`${style.swiperSlideBoxAndAmazingDiv}`}>
            <img className={`${style.AmazingImg}`}
              src="https://www.digikala.com/statics/img/svg/amazing-typo.svg"
              alt=""
            />
            <img className={`${style.BoxImg}`}
              src="https://www.digikala.com/statics/img/png/specialCarousel/box.png"
              alt=""
            />
            <a className={`${style.viewAllLink}`} href="h"> مشهاده همه </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`${style.swiperSlideMainDiv}`}>
            <img
              src="https://dkstatics-public.digikala.com/digikala-products/881719.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
              alt=""
            />
            <div
              className={`${style.swiperSlidePriceandPercentandLinePriceDiv}`}
            >
              <div className={`${style.swiperSlidePriceandPercentDiv}`}>
                <Price />
                <Percent />
              </div>
              <div>
                <LinePrice />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.swiperSlideMainDiv}`}>
            <img
              src="https://dkstatics-public.digikala.com/digikala-products/9d410fe8a6532a55bf1f246be1f678cdf3c11615_1652253589.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
              alt=""
            />
            <div
              className={`${style.swiperSlidePriceandPercentandLinePriceDiv}`}
            >
              <div className={`${style.swiperSlidePriceandPercentDiv}`}>
                <Price />
                <Percent />
              </div>
              <div>
                <LinePrice />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.swiperSlideMainDiv}`}>
            <img
              src="https://dkstatics-public.digikala.com/digikala-products/4f334e821aa6b60145bd642f13d3d57fd331ca57_1659017623.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
              alt=""
            />
            <div
              className={`${style.swiperSlidePriceandPercentandLinePriceDiv}`}
            >
              <div className={`${style.swiperSlidePriceandPercentDiv}`}>
                <Price />
                <Percent />
              </div>
              <div>
                <LinePrice />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.swiperSlideMainDiv}`}>
            <img
              src="https://dkstatics-public.digikala.com/digikala-products/8f8f16247363aadc746cc54d7c828b051683395a_1598257563.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
              alt=""
            />
            <div
              className={`${style.swiperSlidePriceandPercentandLinePriceDiv}`}
            >
              <div className={`${style.swiperSlidePriceandPercentDiv}`}>
                <Price />
                <Percent />
              </div>
              <div>
                <LinePrice />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.swiperSlideMainDiv}`}>
            <img
              src="https://dkstatics-public.digikala.com/digikala-products/eacc1bfba7aa1375c3afeb6223f205a715f79d19_1611764334.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
              alt=""
            />
            <div
              className={`${style.swiperSlidePriceandPercentandLinePriceDiv}`}
            >
              <div className={`${style.swiperSlidePriceandPercentDiv}`}>
                <Price />
                <Percent />
              </div>
              <div>
                <LinePrice />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.swiperSlideMainDiv}`}>
            <img
              src="https://dkstatics-public.digikala.com/digikala-products/70ea621810f18f70ca28105d5bf9f4b3974616a6_1657389517.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
              alt=""
            />
            <div
              className={`${style.swiperSlidePriceandPercentandLinePriceDiv}`}
            >
              <div className={`${style.swiperSlidePriceandPercentDiv}`}>
                <Price />
                <Percent />
              </div>
              <div>
                <LinePrice />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.swiperSlideMainDiv}`}>
            <img
              src="https://dkstatics-public.digikala.com/digikala-products/41ab6006fa47deb24c74dba7297265a6be0e7d01_1655111858.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
              alt=""
            />
            <div
              className={`${style.swiperSlidePriceandPercentandLinePriceDiv}`}
            >
              <div className={`${style.swiperSlidePriceandPercentDiv}`}>
                <Price />
                <Percent />
              </div>
              <div>
                <LinePrice />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.swiperSlideMainDiv}`}>
            <img
              src="https://dkstatics-public.digikala.com/digikala-products/881719.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
              alt=""
            />
            <div
              className={`${style.swiperSlidePriceandPercentandLinePriceDiv}`}
            >
              <div className={`${style.swiperSlidePriceandPercentDiv}`}>
                <Price />
                <Percent />
              </div>
              <div>
                <LinePrice />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.swiperSlideMainDiv}`}>
            <img
              src="https://dkstatics-public.digikala.com/digikala-products/9d410fe8a6532a55bf1f246be1f678cdf3c11615_1652253589.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
              alt=""
            />
            <div
              className={`${style.swiperSlidePriceandPercentandLinePriceDiv}`}
            >
              <div className={`${style.swiperSlidePriceandPercentDiv}`}>
                <Price />
                <Percent />
              </div>
              <div>
                <LinePrice />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.swiperSlideMainDiv}`}>
            <img
              src="https://dkstatics-public.digikala.com/digikala-products/4f334e821aa6b60145bd642f13d3d57fd331ca57_1659017623.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
              alt=""
            />
            <div
              className={`${style.swiperSlidePriceandPercentandLinePriceDiv}`}
            >
              <div className={`${style.swiperSlidePriceandPercentDiv}`}>
                <Price />
                <Percent />
              </div>
              <div>
                <LinePrice />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.swiperSlideMainDiv}`}>
            <img
              src="https://dkstatics-public.digikala.com/digikala-products/8f8f16247363aadc746cc54d7c828b051683395a_1598257563.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
              alt=""
            />
            <div
              className={`${style.swiperSlidePriceandPercentandLinePriceDiv}`}
            >
              <div className={`${style.swiperSlidePriceandPercentDiv}`}>
                <Price />
                <Percent />
              </div>
              <div>
                <LinePrice />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.swiperSlideMainDiv}`}>
            <img
              src="https://dkstatics-public.digikala.com/digikala-products/eacc1bfba7aa1375c3afeb6223f205a715f79d19_1611764334.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
              alt=""
            />
            <div
              className={`${style.swiperSlidePriceandPercentandLinePriceDiv}`}
            >
              <div className={`${style.swiperSlidePriceandPercentDiv}`}>
                <Price />
                <Percent />
              </div>
              <div>
                <LinePrice />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.swiperSlideMainDiv}`}>
            <img
              src="https://dkstatics-public.digikala.com/digikala-products/70ea621810f18f70ca28105d5bf9f4b3974616a6_1657389517.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
              alt=""
            />
            <div
              className={`${style.swiperSlidePriceandPercentandLinePriceDiv}`}
            >
              <div className={`${style.swiperSlidePriceandPercentDiv}`}>
                <Price />
                <Percent />
              </div>
              <div>
                <LinePrice />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.swiperSlideMainDiv}`}>
            <img
              src="https://dkstatics-public.digikala.com/digikala-products/41ab6006fa47deb24c74dba7297265a6be0e7d01_1655111858.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
              alt=""
            />
            <div
              className={`${style.swiperSlidePriceandPercentandLinePriceDiv}`}
            >
              <div className={`${style.swiperSlidePriceandPercentDiv}`}>
                <Price />
                <Percent />
              </div>
              <div>
                <LinePrice />
              </div>
            </div>
          </div>
        </SwiperSlide> 
      </Swiper>
    </div>
  );
};

export default AmazingofferCart;
