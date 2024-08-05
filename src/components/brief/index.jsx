import React from 'react'
import { SectionTitle } from '../section-title'
import { SectionSubtitle } from '../section-subtitle'
import { Quiz } from '../quiz'

export const Brief = () => {
  return (
    <section className='relative py-16 mb-52 w-full h-[843px] flex flex-col items-center bg-cover bg-no-repeat bg-brief-bg'>
        <div className='mb-6 w-[800px]'>
          <SectionTitle isWhite={true}>Ищите техническое решение для производства?</SectionTitle>
          <SectionSubtitle isWhite={true}>Заполните небольшой бриф и мы с вами свяжемся!</SectionSubtitle>
        </div>
        <Quiz />
    </section>
  )
}
