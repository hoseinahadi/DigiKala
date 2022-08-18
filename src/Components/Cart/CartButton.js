import React from 'react'
import style from './CartButton.module.scss'
import {BsCart} from 'react-icons/bs'

const Cart = () => {
  return (
    <div className={`${style.OuterContainer}`}>
      <div className={`${style.innerContainer}`}>
      <a href='f'>
        <BsCart   size="1.5rem"/>
      </a>

    </div>
    </div>
  )
}

export default Cart