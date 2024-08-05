import React from 'react'
import { ProdItem } from '../product-item'

export const ProdWrap = ({ items = [] }) => {
  return (
    <div className='mx-auto py-8 px-12 max-w-7x false flex flex-row items-center'>
        { items.map(({ text, description, icon }) => <ProdItem key={ text } text={ text } description={ description } icon={ icon }/>)} 
    </div>
  )
}
