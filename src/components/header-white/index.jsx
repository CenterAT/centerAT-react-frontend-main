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

export const HeaderWhite = ({
  isWhiteBg = false,
  }) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={`flex justify-between items-center bg-white h-20 px-16 xl:px-5 ${isWhiteBg && whiteBgStyles}`}>
        <NavLink to="/">
          <Logo isWhite={false} />
        </NavLink>
        <nav className='text-black flex justify-between sm:hidden'>
            <NavItem text='О компании' link={'/#about'} />
            <NavItem text='Продукты'>
              <NavMenu items={ PRODUCTS }/>
            </NavItem>
            <NavItem text='Контакты' link={'/#contacts'}/>
        </nav>
        <Communication 
          isFlexRow={true} 
          isPhoneIconBlack={true} 
          isMailIconBlack={true} 
          isHeader={true}
          isMobileHeader={true}
          isTextBlack={true}
        />
        <div 
          className='hidden sm:block '
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          { isMobileMenuOpen ? <CloseMenuIcon className=' relative z-30 fill-black hover:fill-mainBlue hover:cursor-pointer ' /> : <MenuIcon className='fill-black hover:fill-mainBlue hover:cursor-pointer'/> }
        </div>
        <MobileMenu isOpen={isMobileMenuOpen}/>
    </header>
  )
}