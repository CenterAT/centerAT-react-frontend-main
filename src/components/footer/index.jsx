import React from 'react'
import { Logo } from '../logo'
import { Communication } from '../communication'
import { NavLink } from 'react-router-dom'
// import PhoneIconWhite from '../../img/phone-icon.svg';
// import MailIconWhite from '../../img/mail-icon.svg';

export const Footer = () => {
  return (
    <div className='py-9 bg-black text-white'>
{/* absolute left-0 bottom-0 w-full h-[305px] */}
<div className=' flex flex-row justify-around sm:flex-col sm:items-center sm:gap-5'>
            <div className='flex items-start flex-col justify-around sm:items-center'>
            <NavLink to="/">
                <Logo isWhite={true}/>
            </NavLink>
                <div className='flex flex-col '>
                    {/* <a href="#top" className='mb-5 hover:opacity-60 text-left m:text-xs'>Политика конфиденциальности</a>
                    <a href="#top" className='mb-5 hover:opacity-60 text-left m:text-xs'>Пользовательское соглашение</a> */}
                </div>
                <span className='text-left opacity-50 m:text-xs sm:mt-5'>© 2024 Все права защищены. <br/> ООО «Центр-АТ»</span>
            </div>
            <div>
                <ul className='flex text-left flex-col justify-between m:text-sm sm:items-center'>
                    <p className='mb-5'>Компания</p>
                    <li className='mb-5 hover:opacity-60'>
                        <NavLink to={'/#about'} >О компании</NavLink>
                    </li>
                    <li className='mb-5 hover:opacity-60'>
                        <NavLink to={'/Atomizators'}>Продукты</NavLink>
                    </li>
                    <li className='mb-5 hover:opacity-60'>
                        <NavLink to={'/#news'} >Новости</NavLink>
                    </li>
                    <li className='mb-5 hover:opacity-60'>
                        <NavLink to={'/#contacts'} >Контакты</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <ul className='flex text-left flex-col justify-between m:text-sm sm:items-center'>
                    <p className='mb-5'>Продукты</p>
                    <li className='mb-5 hover:opacity-60'>
                        <NavLink to={'/Production'} >Производство «под ключ»</NavLink>
                    </li>
                    <li className='mb-5 hover:opacity-60'>
                        <NavLink to={'/Engineering'} >Инжиниринг «под ключ»</NavLink>
                    </li>
                    <li className='mb-5 hover:opacity-60'>
                        <NavLink to={'/viga'} >Атомизатор VIGA</NavLink>
                    </li>
                    <li className='mb-5 hover:opacity-60'>
                        <NavLink to={'/prep'} >Атомизатор PREP</NavLink>
                    </li>
                    <li className='mb-5 hover:opacity-60'>
                        <NavLink to={'/eiga'} >Атомизатор EIGA</NavLink>
                    </li>
                </ul>
            </div>
            <div className='sm:order-1 sm:flex'>
                <Communication isPhoneIconWhite={true} isMailIconWhite={true} isFlexCol={true}/>
            </div>
        </div>
    </div>
  )
}
