import React from 'react'
import style from './Main.module.scss'
import MainMenu from '../../Components/MainMenu/MainMenu'
import ImageSlider from '../ImageSlider/ImageSlider'

const Main = () => {
  return (
    <div className={`${style.OuterContainer}`}>
      <ImageSlider/>
        <MainMenu/>
    </div>
  )
}

export default Main