import React from 'react'

export const ProdItem = ({ 
    text = '', 
    description = '', 
    icon 
}) => {
  return (
    <div className='relative py-12 px-5 
      h-[700px]
      sm:w-full flex flex-col items-center bg-mainGray 
      hover:bg-black hover:text-white hover:cursor-pointer'>
        <img src={ icon } alt={ text } className='absolute bottom-0 right-0 z-10 max-w-[250px]'></img>
        <h3 className='w-[250px] mb-5 font-Jost text-[32px] font-extrabold text-center'>{ text }</h3>
        <div className='max-w-[400px] text-left'>
          <span className='text-2xl text-left lg:text-xl'>{ description }</span>
        </div>
        <button className={`text-black py-2 font-bold text-xl h-[60px] max-w-[322px] w-full border-2 border-transparent
          hover:border-2 bg-white hover:border-mainBlue hover:text-mainBlue rounded
          absolute bottom-5 z-10
          md:text-lg 
          m:w-[274px] m:text-base`}>
          Перейти
        </button>
    </div>
  )
}
