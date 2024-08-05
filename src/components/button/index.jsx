import React from 'react'

const blueBtnStyles = 'bg-mainBlue text-white hover:opacity-50 rounded'
const blackBtnStyles = 'mt-8 bg-black text-white hover:opacity-50 rounded'
const whiteBtnStyles = 'py-3 hover:border-2 bg-white hover:border-mainBlue hover:text-mainBlue rounded'
const bottomBtnStyles = 'absolute bottom-5 z-10'

export const Button = ({
    children = '',
    isWhite = false,
    isBlack = false,
    isBlue = false,
    isBottom = false,
}) => {
  return (
    <button 
        className={`text-black py-5 font-bold text-xl h-16 w-[322px]
            ${isBlue && blueBtnStyles} 
            ${isBlack && blackBtnStyles}
            ${isWhite && whiteBtnStyles}
            ${isBottom && bottomBtnStyles}
            `}>
        { children }
    </button>
  )
}
