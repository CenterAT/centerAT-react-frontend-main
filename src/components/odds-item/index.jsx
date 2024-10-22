import React from 'react'

export const OddsItem = ({ 
    number = '',
    text = '',
}) => {
  return (
      <span className='pl-5 flex items-center justify-left gap-5 
        w-[450px] h-[137px] lg:w-[350px] lg:h-[110px] sm:w-full
        text-2xl m:text-base sm:text-sm 
        border-2 border-black rounded'>
        <span className='font-bold text-3xl m:text-2xl sm:text-xl'>{ number }</span>
        { text }
      </span>
  )
}
