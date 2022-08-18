import React from "react";
import style from "./Menu.module.scss";
import {FcMenu} from 'react-icons/fc'
import {TbMeat} from 'react-icons/tb'
import {TbDiscount2} from 'react-icons/tb'
import {TbDiscount} from 'react-icons/tb'
import {RiFireLine} from 'react-icons/ri'




const Menu = () => {
  return (
    <div className={`${style.OuterContainer}`}>
      <ul className={`${style.mainUl}`}>
        <li>
          <a className={`${style.categoryLink}`} href="ff">
          <FcMenu/>
            دسته بندی کالا
          </a>
          <ul className={`${style.CategoryUl}`}>
            <li>
              <a href="h">
                
                کالای دیجیتال
              </a>
            </li>
            <li>
              <a href="h">خودرو و تجهیزات صنعتی</a>
            </li>
            <li>
              <a href="h">مد و پوشاک</a>
            </li>
            <li>
              <a href="h">کالای سوپرمارکتی</a>
            </li>
            <li>
              <a href="h">اسباب بازی , کودک و نوجوان</a>
            </li>
            <li>
              <a href="h">محصولات بومی و محلی</a>
            </li>
            <li>
              <a href="h">زیبایی و سلامت</a>
            </li>
            <li>
              <a href="h">خانهو اشپزخانه</a>
            </li>
            <li>
              <a href="h">کتاب , لوازم التحریر وهنر</a>
            </li>
            <li>
              <a href="h">ورزش و سفر</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="ffg">
          <TbMeat/>
            سوپر مارکت</a>
        </li>
        <li>
          <a href="ffd">
            <RiFireLine/>
            پر فروش ترین ها</a>
        </li>
        <li>
          <a href="ffs">
            <TbDiscount2/>
            تخفیف ها و پیشنهاد ها</a>
        </li>
        <li>
          <a href="ffa">
            <TbDiscount/>
            شگفت انگیزها</a>
        </li>
        <li>
          <a href="fvf">
            
            سوالی دارید؟</a>
        </li>
        <li>
          <a href="fff"> فروشنده شوید</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
