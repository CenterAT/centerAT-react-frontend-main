import React, {useEffect, useRef} from 'react'
import { NavItem } from '../nav-item'
import { PRODUCTS } from '../constants'
import { NavMenu } from '../nav-menu'
import { Communication } from '../communication'
import useOutsideClick from "../hoc/useOutClick";

export const MobileMenu = ({ isOpen = false, isClose}) => {
    const { selected, setSelected, myRef } = useOutsideClick();

    const onClickRef= useRef()
    const handleClickOutside = e => {
        if (onClickRef.current.contains(e.target)) {
           isClose(isOpen)
        }
    }
    useEffect(() => {

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

  return (
    <React.Fragment >
        <div ref={onClickRef} className={`absolute top-0 left-0 right-0 bg-mobileShadow z-10 min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`} />
        <div className={`absolute top-0 right-0 w-[288px] bg-white z-20 min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`} >
            <nav className='py-[93px] px-8'>
                <NavItem text='О компании'/>
                <NavItem text='Продукты' selected={selected} setSelected={setSelected} ref={myRef} >
                     <NavMenu onClick={handleClickOutside}  items={PRODUCTS}/>
                </NavItem>
                <NavItem text='Новости' link={'/#about'} />
                <NavItem text='Контакты' link={'/#contacts'}/>
                <Communication 
                    isFlexCol={true} 
                    isMobileMenu={true}
                    isPhoneIconBlack={true} 
                    isMailIconBlack={true}
                    isTextBlack={true}
                />
            </nav>
        </div>
    </React.Fragment>
  )
}
 