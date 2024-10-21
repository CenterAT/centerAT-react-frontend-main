import React, { forwardRef } from 'react'
import { ReactComponent as NavArrowDownIcon } from '../../img/nav-arrow-down-icon.svg'
import { ReactComponent as NavArrowUpIcon } from '../../img/nav-arrow-up-icon.svg'

export const NavItem = forwardRef(({ text = '', selected, setSelected, children }, ref) => {
  const handleClick = () => {
      if(children) {
          setSelected(text !== selected ? text : '')
      }
  }
  return (
    <div className='relative p-7 hover:bg-mainGrayHover hover:cursor-pointer sm:p-0 sm:hover:bg-white sm:mb-10' ref={ref}>
      <div className='flex flex-row items-center'>
        <div className='text-base font-normal cursor-pointer hover:text-mainBlue m:text-sm sm:text-2xl '
          onClick={handleClick}
        >
          { text }
        </div>
        { children && selected !== text && <NavArrowDownIcon className='mx-2' fill='white'/> }
        { children && selected === text && <NavArrowUpIcon className='mx-2' fill='white'/> }
      </div>
      { selected && children }
    </div>
  )
})
