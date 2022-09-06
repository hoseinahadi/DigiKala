import React from 'react'
import style from './Main.module.scss'
import MainMenu from '../../Components/MainMenu/MainMenu'
import ImageSlider from '../ImageSlider/ImageSlider'
import AmazingSupperMarket from '../../Components/AmazingSupperMarket/AmazingSupperMarket'
import AmazingofferCart from "../../Components/Amazingoffer/AmazingofferCart";
import BannerUnderAmazing from '../../Components/BannerUnderAmazing/BannerUnderAmazing'
import MainCategory from '../../Components/MainCategory/MainCategory'
import BannerUnderCategory from '../../Components/BannerUnderCategory/BannerUnderCategory'

const Main = () => {
  return (
    <div className={`${style.OuterContainer}`}>
      <ImageSlider/>
        <MainMenu/>
         <AmazingofferCart/>
        <AmazingSupperMarket/>
        <BannerUnderAmazing/>
        <MainCategory/>
        <BannerUnderCategory/>
    </div>
  )
}

export default Main