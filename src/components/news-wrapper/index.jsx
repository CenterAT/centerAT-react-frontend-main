import React from 'react'
import { NewsItem } from '../news-item'

export const NewsWrap = ({ items = [] }) => {
  return (
    <div className='max-w-[1320px] m-auto flex flex-row justify-between gap-5'>
        { items.map(({ image, title, text, date }) => <NewsItem key={ title } image={ image } title={ title } text={ text } date={ date }/>)} 
    </div>
  )
}
