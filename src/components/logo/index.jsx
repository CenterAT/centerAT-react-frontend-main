import React from 'react'
import LogoImage from "../../img/logo-new.png"

// const textWhiteStyles = 'text-white'

export const Logo = (
  // { isWhite = false}
  ) => {
  return (
    // <div className={`text-3xl font-bold text-black ${isWhite && textWhiteStyles} hover:text-mainBlue m:text-2xl`}>Центр-АТ</div>
    <img src={LogoImage} alt="Центр аддитивных технологий" className='w-[200px] sm:w-[320px]' />
  )
}
