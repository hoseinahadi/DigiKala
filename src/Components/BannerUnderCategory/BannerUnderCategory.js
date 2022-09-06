import React from 'react'
import style from './BannerUnderCategory.module.scss'

const BannerUnderCategory = () => {
  return (
    <div className={`${style.OuterContainer}`}>
        <img className={`${style.BannerImg}`} src='https://dkstatics-public.digikala.com/digikala-adservice-banners/a9b3f250374d37e6da9dcd81cd681c5d116fd0ad_1660114699.jpg?x-oss-process=image/quality,q_95' alt=''/>
        <img className={`${style.BannerImg}`} src='https://dkstatics-public.digikala.com/digikala-adservice-banners/78108b62d6c1698f6adb70e2bda2e4c448cbb0fe_1660135013.jpg?x-oss-process=image/quality,q_95' alt=''/>
    </div>
  )
}

export default BannerUnderCategory