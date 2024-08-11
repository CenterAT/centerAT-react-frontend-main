import React from 'react'
import { SectionTitle } from '../section-title'
import { NEWS } from '../constants'
import { NewsWrap } from '../news-wrapper'

export const News = ({ items = [] }) => {
  return (
    <section className='py-16 flex flex-col items-center'>
        <SectionTitle>Новости</SectionTitle>
        <div className='sm:hidden'>
          <NewsWrap items={ NEWS }/>
        </div>
        <div className='w-[300px] h-[300px] bg-mainBlue'>
          Совсем скоро здесь будет слайдер новостей
        </div>
    </section>
  )
}
