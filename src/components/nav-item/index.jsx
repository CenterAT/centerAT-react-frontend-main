import React, { useState } from 'react'
import { ReactComponent as NavArrowDownIcon } from '../../img/nav-arrow-down-icon.svg'
import { ReactComponent as NavArrowUpIcon } from '../../img/nav-arrow-up-icon.svg'

export const NavItem = ({ text = '', children }) => {
  const [ selected, setSelected] = useState('');

  return (
    <div className='relative p-7 hover:bg-mainGrayHover'>
      <div className='flex items-center'>
        <span 
          className='text-base font-normal text-black cursor-pointer hover:text-mainBlue'
          onClick={() => children && setSelected(text !== selected ? text : '')}
        >
          { text }
        </span>
        { children && selected !== text && <NavArrowDownIcon className='mx-2'/> }
        { children && selected === text && <NavArrowUpIcon className='mx-2'/> }
      </div>
      { selected && children }
    </div>
  )
}
