import React from 'react'

export const NavMenu = ({ items = [] }) => {
  return (
    <div className='flex flex-col px-4 py-2 bg-mainGray absolute top-20 right-0 w-60 space-y-2 z-30'>
      { items.map(({ text }) => <span className='cursor-pointer hover:text-mainBlue'>{ text }</span>)} 
    </div>
  )
}
