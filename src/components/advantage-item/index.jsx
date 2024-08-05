import React from 'react'

export const AdvItem = ({ text = '', icon }) => {
  return (
    <div className='relative flex flex-col items-center'>
         <div className='absolute w-[120px] h-[120px] rounded-full bg-gradient-to-b from-advGray to-white'></div>
         <div className='mt-16 mb-6 w-[92px] h-[86px] z-10'>{ icon }</div>
        <span className='text-xl'>{ text }</span>
    </div>
  )
}
