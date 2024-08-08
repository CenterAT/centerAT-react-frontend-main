import React from 'react'
import { Button } from '../button'

export const ProdItem = ({ 
    text = '', 
    description = '', 
    icon 
}) => {
  return (
    <div className='relative py-12 px-8 w-full md:w-[480px] h-[700px] lg:w-full flex flex-col items-center bg-mainGray hover:bg-black hover:text-white hover:cursor-pointer'>
        {/* <div className='absolute bottom-0 right-0 z-10'>{ icon }</div> */}
        <img src={ icon } alt={ text } className='absolute bottom-0 right-0 z-10'></img>
        <h3 className='w-[250px] mb-5 font-Jost text-[32px] font-extrabold text-center'>{ text }</h3>
        <span className='text-2xl text-left lg:text-xl'>{ description }</span>
        <Button isWhite={true} isBottom={true} className=''>Заказать консультацию</Button>
    </div>
  )
}