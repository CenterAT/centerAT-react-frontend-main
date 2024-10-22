import React, { useState } from 'react'
import { Logo } from '../logo'
import { NavItem } from '../nav-item'
import { NavMenu } from '../nav-menu'
import { PRODUCTS } from '../constants'
import { Communication } from '../communication'
import{ ReactComponent as MenuIcon } from '../../img/menu-icon.svg'
import{ ReactComponent as CloseMenuIcon } from '../../img/close-menu.svg'
import { MobileMenu } from '../mobile-menu'
import { NavLink } from 'react-router-dom'

const whiteBgStyles = 'bg-white text-black' 

export const Header = ({
  isWhiteBg = false,
  }) => {

  const [ menuActive, setMenuActive ] = useState(false);

  return (
    <header className={`flex justify-between items-center bg-black h-20 px-16 xl:px-5 ${isWhiteBg && whiteBgStyles} sm:sticky sm:top-0 sm:z-40`}>
        <NavLink to="/">
          <Logo isWhite={true} />
        </NavLink>
        <nav className='text-white flex justify-between sm:hidden'>
            <NavItem text='О компании' link={'/#about'} />
            <NavItem text='Продукты'>
              <NavMenu items={ PRODUCTS } isBgBlack={true}/>
            </NavItem>
            <NavItem text='Контакты' link={'/#contacts'}/>
        </nav>
        <Communication 
          isFlexRow={true} 
          isPhoneIconWhite={true} 
          isMailIconWhite={true} 
          isHeader={true}
          isMobileHeader={true}
        />
        <div 
          className='hidden sm:block '
          onClick={() => setMenuActive(!menuActive)}
        >
          { menuActive ? <CloseMenuIcon className=' absolute right-5 top-5 z-30 fill-black hover:fill-mainBlue hover:cursor-pointer ' /> : <MenuIcon className='fill-white hover:fill-mainBlue hover:cursor-pointer'/> }
        </div>
        <MobileMenu active={menuActive} setActive={setMenuActive}/>
    </header>
  )
}
