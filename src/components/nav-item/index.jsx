import React, { useState } from 'react'
import { ReactComponent as NavArrowDownIcon } from '../../img/nav-arrow-down-icon.svg'
import { ReactComponent as NavArrowUpIcon } from '../../img/nav-arrow-up-icon.svg'

export const NavItem = ({ text = '', children, link  }) => {
  
  const [ selected, setSelected] = useState('');

  return (
    <div className='relative p-7 hover:bg-mainGrayHover hover:cursor-pointer sm:p-0 sm:hover:bg-white sm:mb-10'>
      <div className='flex flex-row items-center'>
        <a href={link}
          className='text-base font-normal cursor-pointer hover:text-mainBlue m:text-sm sm:text-2xl '
          onMouseOver={() => children && setSelected(text !== selected ? text : '')}
        >
          { text }
        </a>
        { children && selected !== text && <NavArrowDownIcon className='mx-2' fill='black'/> }
        { children && selected === text && <NavArrowUpIcon className='mx-2' fill='black'/> }
      </div>
      { selected && children }
    </div>
  )
}
