import React from 'react'
import { NavItem } from '../nav-item'
import { PRODUCTS } from '../constants'
import { NavMenu } from '../nav-menu'
import { Communication } from '../communication'

export const MobileMenu = ({ active, setActive}) => {
  return (
    <React.Fragment >
        <div 
            className={active ? 'flex' : 'hidden'}
            onClick={() => setActive(false)}
            >
        <div className={`flex absolute top-0 left-0 right-0 bg-mobileShadow z-10 min-h-[150vh] `} />
        <div className={`flex absolute top-0 right-0 w-[288px] bg-white z-20 min-h-[150vh] `} onClick={e => e.stopPropagation()} >
            <nav className='py-[93px] px-8'>
                <NavItem text='О компании' link={'/#about'} onClick={() => setActive(false)} />
                <NavItem text='Продукты' onClick={() => setActive(false)}>
                    <NavMenu items={ PRODUCTS }/>
                </NavItem>
                {/* <NavItem text='Новости' /> */}
                <NavItem text='Контакты' link={'/#contacts'} onClick={() => setActive(false)}/>
                <Communication 
                    isFlexCol={true} 
                    isMobileMenu={true}
                    isPhoneIconBlack={true} 
                    isMailIconBlack={true}
                    isTextBlack={true}
                />
            </nav>
        </div>

        </div>
    </React.Fragment>
  )
}
 