import React from 'react'
import style from './AmazingSupperMarket.module.scss'

const AmazingSupperMarket = () => {
  return (
    
    <div className={`${style.OuterContainer}`}>
        <div className={`${style.rightImage}`}>
        <img className={`${style.rightBacketImageImg}`} src='https://www.digikala.com/statics/img/png/amazing/fresh.png' alt=''/>
        <img className={`${style.rightAmazingSupperMarketImageImg}` } src='https://www.digikala.com/statics/img/svg/typography/fresh.svg' alt=''/>
        </div>
        <div className={`${style.leftImageDiv}`}>
        <img className={`${style.leftImageImg}`} src='https://dkstatics-public.digikala.com/digikala-products/30751c5a8ea2d01becf73655dedb5052918cdad2_1603794462.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' alt=''/>
        <img className={`${style.leftImageImg}`} src='https://dkstatics-public.digikala.com/digikala-products/8d6e6114fe0f36b097c6267613c7210fc3982805_1657627870.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' alt=''/>
        <img className={`${style.leftImageImg}`} src='https://dkstatics-public.digikala.com/digikala-products/ec31711cf40891b0f97b151bc66970e2dee91246_1617775430.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' alt=''/>
        <img className={`${style.leftImageImg}`} src='https://dkstatics-public.digikala.com/digikala-products/6fb85243834de4d7971256ff2560ce178e89cdf6_1643198371.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' alt=''/>
        <img className={`${style.leftImageImg}`} src='https://dkstatics-public.digikala.com/digikala-products/a772d1e1e4c47fb628b55d74dd9b1ae31d4a6e16_1641709537.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' alt=''/>
        <img className={`${style.leftImageImg}`} src='https://dkstatics-public.digikala.com/digikala-products/e516608d0842527d66db3487f949f980c64abc8f_1634456984.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' alt=''/>  
        </div>
        <div className={`${style.seeAll}`}>مشاهده همه</div> 
    </div>
  )
}

export default AmazingSupperMarket