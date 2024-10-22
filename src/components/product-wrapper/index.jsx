import React from 'react'
import { ProdItem } from '../product-item'
import { NavLink } from 'react-router-dom'

export const ProdWrap = ({ items = [] }) => {
  return (
    <div className='mx-auto py-8 w-full flex flex-row justify-around md:flex-col md:gap-5 sm:gap-3 items-center lg:px-0'>
        { items.map(({ text, description, icon, link }) => 
        <NavLink to={ link } className={'w-full md:max-w-[480px] sm:w-full'}>
          <ProdItem key={ text } text={ text } description={ description } icon={ icon }/>
        </NavLink>
        )} 
    </div>
  )
}
