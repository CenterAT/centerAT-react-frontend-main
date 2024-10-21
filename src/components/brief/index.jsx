import React from 'react'
import { SectionTitle } from '../section-title'
import { SectionSubtitle } from '../section-subtitle'
import { BriefingForm } from '../briefing-form'

export const Brief = () => {
  return (
    <section className='relative py-16 mb-52 w-full h-[843px] flex flex-col items-center bg-cover bg-no-repeat bg-brief-bg sm:bg-none'>
        <div className='mb-6 w-[800px] md:w-[580px] sm:hidden'>
          <SectionTitle isWhite={true}>Ищите техническое решение для производства?</SectionTitle>
          <SectionSubtitle isWhite={true}>Заполните небольшой бриф и мы с вами свяжемся!</SectionSubtitle>
        </div>
        <BriefingForm />
    </section>
  )
}
