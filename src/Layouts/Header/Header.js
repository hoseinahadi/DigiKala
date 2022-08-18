import React from 'react'
import style from './Header.module.scss'
import Cart from "../../Components/Cart/CartButton";
import LoginButton from "../../Components/Login/LoginButton";
import Logo from "../../Components/Logo/Logo";
import Search from '../../Components/Search/Search';
import HeaderAdvertise from "./HeaderAdvertise.jpg";
import Menu from '../../Components/HeaderMenu/Menu';

const Header = () => {
  return (
    <div className={`${style.OterContainer}`}>
      <div  className={`${style.headerUp}`}>
      <img className={`${style.HeaderAdvertiseImg}`} src={HeaderAdvertise} alt="Logo" />
      </div>
      <div  className={`${style.headerDown}`}>
      <div className={`${style.leftHeader}`}>
       <Cart/>
      <LoginButton/>
      </div>
      <div className={`${style.rightHeader}`}>
      <Logo/>
      <Search/>
      </div>
      </div>
      <div className={`${style.headerMenu}`}>
        <Menu/>
      </div>
    </div>
  )
}

export default Header