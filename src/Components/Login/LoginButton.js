import React, { useEffect, useState } from "react";
import style from "./LoginButton.module.scss";
import {TbLogin} from "react-icons/tb"

const LoginButton = () => {
  const [usserLogIn, setUsserLogIn] = useState(false)
  useEffect(() => {
  }, [])
  



  return (
    <div className={`${style.OuterContainer}`}>
      <a href="f">
      {
        usserLogIn === false ? (
          <div className={`${style.loginIcon}`}><TbLogin size="1.5rem"/>  <p>ورود | ثبت نام</p></div>
        ) : (
          <div> <p>حسین احدی</p></div>
        )
      }
        </a>
    </div>
  );
};

export default LoginButton;
