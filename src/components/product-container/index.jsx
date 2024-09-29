import React from 'react'
import { Button } from '../button'
import { CrossLink } from '../cross-link'

export const ProductContainer = ({ ProductImage, title, text, price, link, linkText }) => {
  return (
    <section className='m-auto mb-10 py-16 px-5 max-w-[1320px] sm:px-0'>
    <div className='flex flex-row gap-20 mx-auto max-w-full justify-center py-8'> 
        <div className='w-[538px] h-[538px] flex items-center justify-center'>
            <img src={ ProductImage } alt="Производство под ключ" className='text-left'/>
        </div>
        <div className='h-[538px] flex flex-col items-start justify-between'>
            <h2 className="text-[48px] font-bold text-black">{ title }</h2>
            <div className='flex flex-col items-start w-[600px] text-left'>
                <span className='text-lg text-darkGray'>Описание:</span>
                <span className='text-xl text-black'>{ text }</span>
            </div>
            <span className='text-2xl text-black font-bold'>{ price }</span>
            <div className='flex gap-10 sm:flex-col-reverse'>
                <Button isBlue={true}>Заполнить бриф</Button>
                <Button isWhite={true}>Заказать консультацию</Button>
            </div>
        </div> 
    </div>
        <CrossLink text={linkText} link={ link } />
    </section>
  )
}
