import React, { useState } from 'react'

const blueBtnStyles = 'bg-mainBlue text-white hover:opacity-50 rounded'
const blackBtnStyles = 'mt-8 bg-black text-white hover:opacity-50 rounded sm:w-[246px]'
const whiteBtnStyles = 'py-3 hover:border-2 bg-white hover:border-mainBlue hover:text-mainBlue rounded'
const bottomBtnStyles = 'absolute bottom-5 z-10'

export const Button = ({
    children = '',
    isWhite = false,
    isBlack = false,
    isBlue = false,
    isBottom = false,
}) => {

  const [quizActive, setQuizActive] = useState(true);

  return (
    <button onClick={() => setQuizActive(true)}
        className={`text-black py-5 font-bold text-xl h-[60px] w-[322px] border-2 border-transparent md:text-lg m:w-[274px] m:text-base
            ${isBlue && blueBtnStyles} 
            ${isBlack && blackBtnStyles}
            ${isWhite && whiteBtnStyles}
            ${isBottom && bottomBtnStyles}
            `}>
        { children }
    </button>
  )
}
