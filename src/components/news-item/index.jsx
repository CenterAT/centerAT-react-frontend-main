import React from 'react'

export const NewsItem = ({ image = '', title = '', text = '', date = '' }) => {
  return (
    <div className='w-full text-left'>
        <img src={ image } alt={ title } className='mb-5 w-full' />
        <h3 className='mb-5 font-bold text-xl'>{ title }</h3>
        <p className='mb-5 font-normal text-sm'>{ text }</p>
        <span className='font-normal text-sm text-darkGray'>{ date }</span>
    </div>
  )
}
