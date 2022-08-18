import React from 'react'
import style from './MainMenu.module.scss'
import DigiClub from './DigiClub.png'
import DigikakaJet from './DigikakaJet.png'
import DigikalaMehr from './DigikalaMehr.png'
import DigiPay from './DigiPay.png'
import DigiPlus from './DigiPlus.png'
import DigiStyleHaraj from './DigiStyleHaraj.png'

const MainMenu = () => {
  return (
    <div className={`${style.OuterContainer}`}>
        <a href='f'><img className={`${style.DigiClubImg}`} src={DigiClub} alt=''/>
        دیجی کلاب
        </a>
        <a href='f'><img className={`${style.DigikakaJetImg}`} src={DigikakaJet} alt=''/>
        دیجی کالا جت
        </a>
        <a href='f'><img className={`${style.DigikalaMehrImg}`} src={DigikalaMehr} alt=''/>
        دیجی کالا مهر
        </a>
        <a href='f'><img className={`${style.DigiPlusImg}`} src={DigiPlus} alt=''/>
        دیجی پلاس</a>
        <a href='f'><img className={`${style.DigiPayImg}`} src={DigiPay} alt=''/>
        دیجی پی</a>
        <a href='f'><img className={`${style.DigiStyleHarajImg}`} src={DigiStyleHaraj} alt=''/>
        حراج دیجی استایل
        </a>
    </div>
  )
}

export default MainMenu