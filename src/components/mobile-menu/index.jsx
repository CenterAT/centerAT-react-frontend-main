import React from 'react'
import { NavItem } from '../nav-item'
import { PRODUCTS } from '../constants'
import { NavMenu } from '../nav-menu'
import { Communication } from '../communication'

export const MobileMenu = ({ isOpen = false}) => {
  return (
    <React.Fragment>
        <div className={`absolute top-0 left-0 right-0 bg-mobileShadow z-10 min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`} />
        <div className={`absolute top-0 right-0 w-[288px] bg-white z-20 min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`} >
            <nav className='py-[93px] px-8'>
                <NavItem text='О компании'/>
                <NavItem text='Продукты'>
                    <NavMenu items={ PRODUCTS }/>
                </NavItem>
                <NavItem text='Новости' />
                <NavItem text='Контакты'/>
                <Communication 
                    isFlexCol={true} 
                    isMobileMenu={true}
                    isPhoneIconBlack={true} 
                    isMailIconBlack={true}
                />
            </nav>
        </div>
    </React.Fragment>
  )
}
 