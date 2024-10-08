import React from 'react'

const signStyle = 'font-Denistina text-4xl'

export const AboutItem = ({
  children = '',
  isSign = false
}) => {
  return (
    <p className={`mb-3 font-normal text-black text-2xl text-left  lg:text-xl sm:text-sm ${isSign && signStyle}`}>{ children }</p>
  )
}
