import React from 'react'
import { OddsItem } from '../odds-item'

export const OddsWrapper = ({ 
    items = [],
}) => {
  return (
    <div className='flex flex-wrap justify-between gap-5 mt-10 sm:flex-col m:justify-center w-full'>
        { items.map(({ text, number }) => <OddsItem key={ text } number={ number } text={ text }/>)} 
    </div>
  )
}
