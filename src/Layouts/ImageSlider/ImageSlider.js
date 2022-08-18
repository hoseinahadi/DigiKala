import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from './ImageSlider.module.scss'

const ImageSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
        <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000}    infinite={true} shouldResetAutoplay={true} >
  <div><img className={`${style.sliderImg}`} alt='h' src='https://dkstatics-public.digikala.com/digikala-adservice-banners/95d4fa47eb4ef7dda450446072e9db10a1cb0404_1660144664.jpg?x-oss-process=image/quality,q_95'/></div>
  <div><img className={`${style.sliderImg}`} alt='h' src= 'https://dkstatics-public.digikala.com/digikala-adservice-banners/a9f66eff84235b10501747500ac0584951706532_1660466669.jpg?x-oss-process=image/quality,q_95'/></div>
  <div><img className={`${style.sliderImg}`} alt='h'  src= 'https://dkstatics-public.digikala.com/digikala-adservice-banners/8d24dd61cff6f41552c8a9ad704ea9da67e893aa_1660550581.jpg?x-oss-process=image/quality,q_95'/></div>
  <div><img className={`${style.sliderImg}`} alt='h' src= 'https://dkstatics-public.digikala.com/digikala-adservice-banners/cce26acbe9385c7318494c45c912667dadbd93ec_1660387359.jpg?x-oss-process=image/quality,q_95'/></div>
  <div><img className={`${style.sliderImg}`} alt='h' src= 'https://dkstatics-public.digikala.com/digikala-adservice-banners/7390c804bc78956ae0594fed35b12eabb17fdf29_1660637239.jpg?x-oss-process=image/quality,q_95'/></div>
  <div><img className={`${style.sliderImg}`} alt='h' src= 'https://dkstatics-public.digikala.com/digikala-adservice-banners/b0f90ef138fa1fd2ede7ac5ed3f41599ae929d80_1660390975.jpg?x-oss-process=image/quality,q_95'/></div>
  <div><img className={`${style.sliderImg}`} alt='h' src= 'https://dkstatics-public.digikala.com/digikala-adservice-banners/ffe77dcb1f7603dde4492004165ca8e2c3c8457f_1660056383.jpg?x-oss-process=image/quality,q_95'/></div>
</Carousel>
    </div>
  )
}

export default ImageSlider
