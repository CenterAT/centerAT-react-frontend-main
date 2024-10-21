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
import useOutsideClick from "../hoc/useOutClick";

const whiteBgStyles = 'bg-white text-black' 

export const Header = ({
  isWhiteBg = false,
  }) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { selected, setSelected, myRef } = useOutsideClick();

  return (
    <header className={`flex justify-between items-center bg-black h-20 px-16 xl:px-5 ${isWhiteBg && whiteBgStyles}`}>
        <NavLink to="/">
          <Logo isWhite={true} />
        </NavLink>
        <nav className='text-white flex justify-between sm:hidden'>
            <NavItem text='О компании' link={'/#about'} />
            <NavItem text='Продукты' selected={selected} setSelected={setSelected} ref={myRef}>
              <NavMenu items={ PRODUCTS } isBgBlack={true}/>
            </NavItem>
            <NavItem text='Контакты' link={'/#contacts'} selected={selected} setSelected={setSelected}/>
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
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          { isMobileMenuOpen ? <CloseMenuIcon className=' relative z-30 fill-black hover:fill-mainBlue hover:cursor-pointer ' /> : <MenuIcon className='fill-white hover:fill-mainBlue hover:cursor-pointer'/> }
        </div>
        <MobileMenu isClose = {setIsMobileMenuOpen} isOpen={isMobileMenuOpen}/>
    </header>
  )
}
