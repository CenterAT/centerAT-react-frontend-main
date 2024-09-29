import React from 'react'
import { SectionTitle } from '../section-title'
// import { NEWS } from '../constants'
// import { NewsWrap } from '../news-wrapper'
import { Slider } from '../slider'

export const News = ({ items = [] }) => {
  return (
    <section className='py-16 flex flex-col items-center'>
        <SectionTitle>Новости</SectionTitle>
        {/* <div className='sm:hidden'>
          <NewsWrap items={ NEWS }/>
        </div> */}
        <div className='px-5 max-w-[1320px] m-auto h-full lg:w-full sm:p-0'>
          <Slider />
        </div>
    </section>
  )
}
