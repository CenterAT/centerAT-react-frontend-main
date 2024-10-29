import React from 'react'
import { ReactComponent as NavArrowDownIcon } from '../../img/nav-arrow-down-icon.svg'
import { ReactComponent as NavArrowUpIcon } from '../../img/nav-arrow-up-icon.svg'
import useOutsideClick from "../hook/useOutSide";

export const NavItem = ({ text = '', children, link  }) => {

  const {selected, setSelected, myRef} = useOutsideClick();

    const handleClick = () => {
        if(children) {
            setSelected(text !== selected ? text : '')
        }
    }


    return (
    <div ref = {myRef} className='relative p-7 hover:bg-mainGrayHover hover:cursor-pointer sm:p-0 sm:hover:bg-white sm:mb-10'>
      <div className='flex flex-row items-center'>
        <a href={link}
          className='text-base font-normal cursor-pointer hover:text-mainBlue m:text-sm sm:text-2xl '
          onClick={handleClick}
        >
          { text }
        </a>
        { children && selected !== text && <NavArrowDownIcon className='mx-2' fill={selected === text ? 'white' : 'black'}/> }
        { children && selected === text && <NavArrowUpIcon className='mx-2' fill={selected === text ? 'black' : 'white'}/> }
      </div>
      { selected && children }
    </div>
  )
}
