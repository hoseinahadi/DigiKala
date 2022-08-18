import React from 'react'
import style from './Price.module.scss'

const Price = () => {
  return (
    <div className={`${style.OuterContainer}`}>
        <span>10/295/000</span> 
        <span>ریال</span>
    </div>
  )
}

export default Price