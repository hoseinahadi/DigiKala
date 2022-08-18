import React from 'react'
import style from './Search.module.scss'
import {IoSearchOutline} from 'react-icons/io5'

const Search = () => {
  return (
    <div className={`${style.OterContainer}`}>
      <IoSearchOutline size="1.5rem"/>
      <input className={`${style.searchInput}`} type="text" placeholder='جستجو' />
    </div>
  )
}

export default Search