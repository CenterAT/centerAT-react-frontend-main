import React from 'react'

const textWhiteStyles = 'text-white'

export const Logo = ({ 
  isWhite = false
}) => {
  return (
    <div className={`text-3xl font-bold text-black ${isWhite && textWhiteStyles} hover:text-mainBlue m:text-2xl`}>Центр-АТ</div>
  )
}
