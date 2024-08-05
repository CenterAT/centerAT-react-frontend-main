import React from 'react'
import { SectionTitle } from '../section-title'
import { NEWS } from '../constants'
import { NewsWrap } from '../news-wrapper'

export const News = ({ items = [] }) => {
  return (
    <section className='py-16'>
        <SectionTitle>Продукты</SectionTitle>
        <NewsWrap items={ NEWS }/>
    </section>
  )
}
