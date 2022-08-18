import React from "react";
import DigikalaLogo from "./DigikalaLogo.png";
import style from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={`${style.OuterContainer}`}>
      <a href="f">
        <img className={`${style.logoImg}`} src={DigikalaLogo} alt="Logo" />
      </a>
    </div>
  );
};

export default Logo;
