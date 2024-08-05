import React from 'react'
import { SectionTitle } from '../section-title'
import { GOODS } from '../constants'
import { ProdWrap } from '../product-wrapper'

export const Products = ({ items = [] }) => {
  return (
    <section className='py-16'>
        <SectionTitle>Продукты</SectionTitle>
        <ProdWrap items={ GOODS }/>
    </section>
  )
}
