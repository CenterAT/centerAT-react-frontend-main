import React from 'react'
import { NavLink } from 'react-router-dom'

const blackStyles = 'bg-black'
export const NavMenu = ({ 
  items = [],
  isBgBlack = false
}) => {
  return (
    <div className={`flex flex-col px-4 py-2 ${isBgBlack ? blackStyles : 'bg-white'} absolute top-20 right-0 w-60 space-y-2 z-30`}>
      { items.map(({ link, text }) => 
        <NavLink to={ link }>
          <span className='cursor-pointer hover:text-mainBlue'>{ text }</span>
        </NavLink>
      )} 
    </div>
  )
}
