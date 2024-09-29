import React from 'react'

const textWhite = 'mb-5 textWhite'

export const Logo = ({ 
  isWhite = false
}) => {
  return (
    <div className={`text-3xl font-bold ${isWhite && textWhite} hover:text-mainBlue m:text-2xl`}>Центр-АТ</div>
  )
}
