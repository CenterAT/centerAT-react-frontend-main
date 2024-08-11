import React from 'react'
import { AdvItem } from '../advantage-item'

export const AdvWrap = ({ items = [] }) => {
  return (
    <div className='mx-auto mb-10 py-8 px-12 max-w-7x false flex flex-row items-center justify-around lg:px-5  m:flex-wrap m:gap-9'>
        { items.map(({ text, icon }) => <AdvItem key={ text } text={ text } icon={ icon }/>)} 
    </div>
  )
}
