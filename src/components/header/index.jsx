import React from 'react'
import { Logo } from '../logo'
import { NavItem } from '../nav-item'
import { NavMenu } from '../nav-menu'
import { PRODUCTS } from '../constants'
import { Communication } from '../communication'

export const Header = () => {
  return (
    <header className='flex justify-between items-center  h-20 px-16'>
        <Logo />
        <nav className='flex justify-between'>
          <NavItem text='О компании'/>
          <NavItem text='Продукты'>
            <NavMenu items={ PRODUCTS }/>
          </NavItem>
          <NavItem text='Контакты'/>
        </nav>
        <Communication isFlexRow={true} isPhoneIconBlack={true} isMailIconBlack={true}/>
    </header>
  )
}
