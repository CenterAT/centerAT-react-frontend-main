import React from 'react'

const textWhite = 'mb-5 textWhite'

export const Logo = ({ 
  isWhite = false
}) => {
  return (
    <a href="/#" className={`text-3xl font-bold ${isWhite && textWhite} hover:text-mainBlue`}>Центр-АТ</a>
  )
}
