import React from 'react'
import { Button } from '../button'

export const Hero = () => {
  return (
    <section className='py-24 flex flex-col items-center'>
            <h1 className='mb-5 font-Jost font-extrabold text-6xl md:text-5xl'>Аддитивные технологии</h1>
            <p className='text-2xl w-[870px] md:text-xl m:w-[721px]'>Создаем техническое решение</p>
            <p className='mb-14 text-2xl w-[870px] md:text-xl m:w-[721px]'>Организация производства порошковых материалов из металлических сплавов для промышленных 3D-принтеров</p>
            <div className='flex gap-10'>
                <Button isBlue={true}>Заполнить бриф</Button>
                <Button isWhite={true}>Заказать консультацию</Button>
            </div>
    </section>
  )
}
