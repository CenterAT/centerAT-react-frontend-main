import React from 'react'
import ProductionImage from "../../img/production-image.png"
import { Button } from '../button'
import { CrossLink } from '../cross-link'

export const Production = () => {
  return (
    <>
    <div className='flex flex-row gap-20 mx-auto max-w-full justify-center py-8'> 
        <img src={ProductionImage} alt="Производство под ключ" className='max-w-[538px] max-h-[538px] text-left'/>
        <div className='h-[538px] flex flex-col items-start justify-between'>
            <h2 className="text-[48px] font-bold text-black">Производство под ключ</h2>
            <div className='flex flex-col items-start w-[600px] text-left'>
                <span className='text-lg text-darkGray'>Описание:</span>
                <span className='text-xl text-black'> Мы предоставляем вам презентацию вариантов для ознакомления.</span>
            </div>
            <span className='text-2xl text-black font-bold'>Цена по запросу</span>
            <div className='flex gap-10 sm:flex-col-reverse'>
                <Button isBlue={true}>Заполнить бриф</Button>
                <Button isWhite={true}>Заказать консультацию</Button>
            </div>
        </div>
    </div>
    <CrossLink text='Инжиниринг «под ключ»' link={ '/Engineering' } />
    </>
  )
}
