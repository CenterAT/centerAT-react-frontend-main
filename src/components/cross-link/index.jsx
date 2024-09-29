import React from 'react'
import { NavLink } from 'react-router-dom'

export const CrossLink = ({ link, text }) => {
  return (
    <NavLink to={ link }>
        <span className='text-darkGray font-semibold text-xl flex justify-end hover:opacity-60'>{ text } →</span>
    </NavLink>
  )
}
