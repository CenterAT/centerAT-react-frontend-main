import React, { useState } from 'react'
import { Logo } from '../logo'
import { NavItem } from '../nav-item'
import { NavMenu } from '../nav-menu'
import { PRODUCTS } from '../constants'
import { Communication } from '../communication'
import{ ReactComponent as MenuIcon } from '../../img/menu-icon.svg'
import{ ReactComponent as CloseMenuIcon } from '../../img/close-menu.svg'
import { MobileMenu } from '../mobile-menu'

export const Header = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className='flex justify-between items-center  h-20 px-16 xl:px-5 '>
        <Logo />
        <nav className='flex justify-between sm:hidden'>
          <NavItem text='О компании'/>
          <NavItem text='Продукты'>
            <NavMenu items={ PRODUCTS }/>
          </NavItem>
          <NavItem text='Контакты'/>
        </nav>
        <Communication 
          isFlexRow={true} 
          isPhoneIconBlack={true} 
          isMailIconBlack={true} 
          isHeader={true}
          isMobileHeader={true}
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
