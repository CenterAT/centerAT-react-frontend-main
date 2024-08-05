import React from 'react'
import { SectionTitle } from '../section-title'
import { AdvWrap } from '../advantages-wrapper'
import { ADVANTAGES } from '../constants'

export const Advantages = ({ items = [] }) => {
  return (
    <section className='py-16'>
        <SectionTitle>Наши преимущества</SectionTitle>
        <AdvWrap items={ ADVANTAGES }/>
    </section>
  )
}
