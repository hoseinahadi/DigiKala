import React from 'react'
import style from './MainCategory.module.scss'

const MainCategory = () => {
  return (
    <div className={`${style.OuterContainer}`}>
        <h1>دسته بندی های دیجی کالا</h1>
        <div className={`${style.categoryDivContainer}`}>
            <div className={`${style.categoryImgDiv}`}>
                <img src='https://dkstatics-public.digikala.com/digikala-categories/41d9c93f460475bd5253a70faa0b689605b083bf_1656160881.png' alt='' />
            کالای دیجیتال
            </div>
            <div className={`${style.categoryImgDiv}`}>
                <img src='https://dkstatics-public.digikala.com/digikala-categories/29dcb8556749524af521e23f63c13efe62a0db4a_1656160904.png' alt='' />
            خودرو و ابزار و تجهیزات صنعتی
            </div>
            <div className={`${style.categoryImgDiv}`}>
                <img src='https://dkstatics-public.digikala.com/digikala-categories/5795b31a635f1e23df96a908c009f31744ede38f_1656160928.png' alt='' />
            مد و پوشاک
            </div>
            <div className={`${style.categoryImgDiv}`}>
                <img src='https://dkstatics-public.digikala.com/digikala-categories/da24c42172585abb0c328accf85d071049c4253e_1656161034.png' alt='' />
            کالا های سوپر مارکتی
            </div>
            <div className={`${style.categoryImgDiv}`}>
                <img src='https://dkstatics-public.digikala.com/digikala-categories/0c46d2532d61dd3a5b6a3afc17552c23c1b4d39e_1656160976.png' alt='' />
            اسبا بازی کودک و نوجوان
            </div>
            <div className={`${style.categoryImgDiv}`}>
                <img src='https://dkstatics-public.digikala.com/digikala-categories/af02140ea60e0fd478b09b279976a095c95615b6_1656161174.png' alt='' />
            محصولات بومی و محلی
            </div>
            <div className={`${style.categoryImgDiv}`}>
                <img src='https://dkstatics-public.digikala.com/digikala-categories/0cefa48f5c58adbbde8c5a76b22ee49de0e667f5_1656161101.png' alt='' />
            زیبایی و سلامت 
            </div>
            <div className={`${style.categoryImgDiv}`}>
                <img src='https://dkstatics-public.digikala.com/digikala-categories/0c3cc1cb589df1c74c4ad95a742bb6df967956a8_1656161119.png' alt='' />
            خانه و آشپزخانه
            </div>
            <div className={`${style.categoryImgDiv}`}>
                <img src='https://dkstatics-public.digikala.com/digikala-categories/3582bbed0a53318c2332d2c79b051b226f02a3bb_1656161134.png' alt='' />
            کتاب و لوازم التحریر
            </div>
            <div className={`${style.categoryImgDiv}`}>
                <img src='https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png' alt='' />
            ورزش و سفر
            </div>

        </div>
    </div>
  )
}

export default MainCategory