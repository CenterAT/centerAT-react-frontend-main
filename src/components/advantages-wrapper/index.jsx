import React from 'react'
import { AdvItem } from '../advantage-item'

export const AdvWrap = ({ items = [] }) => {
  return (
    <div className='mx-auto py-8 px-12 max-w-7x false flex flex-row items-center'>
        { items.map(({ text, icon }) => <AdvItem key={ text } text={ text } icon={ icon }/>)} 
    </div>
  )
}
