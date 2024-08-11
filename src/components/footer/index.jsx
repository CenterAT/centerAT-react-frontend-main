import React from 'react'
import { Logo } from '../logo'
import { Communication } from '../communication'
// import PhoneIconWhite from '../../img/phone-icon.svg';
// import MailIconWhite from '../../img/mail-icon.svg';

export const Footer = () => {
  return (
    <div className='py-9 bg-black text-white'>

<div className='flex flex-row justify-around sm:flex-col sm:items-center sm:gap-5'>
            <div className='flex items-start flex-col justify-around sm:items-center'>
                <Logo isWhite={true}/>
                <div className='flex flex-col '>
                    <a href="#top" className='mb-5 hover:opacity-60 text-left m:text-xs'>Политика конфиденциальности</a>
                    <a href="#top" className='mb-5 hover:opacity-60 text-left m:text-xs'>Пользовательское соглашение</a>
                </div>
                <span className='text-left opacity-50 m:text-xs'>© 2024 Все права защищены. <br/> ООО «Центр-АТ»</span>
            </div>
            <div>
                <ul className='flex text-left flex-col justify-between m:text-sm sm:items-center'>
                    <p className='mb-5'>Компания</p>
                    <li className='mb-5 hover:opacity-60'>
                        <a href="#top" >О компании</a>
                    </li>
                    <li className='mb-5 hover:opacity-60'>
                        <a href="#top" >Продукты</a>
                    </li>
                    <li className='mb-5 hover:opacity-60'>
                        <a href="#top" >Новости</a>
                    </li>
                    <li className='mb-5 hover:opacity-60'>
                        <a href="#top" >Контакты</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className='flex text-left flex-col justify-between m:text-sm sm:items-center'>
                    <p className='mb-5'>Продукты</p>
                    <li className='mb-5 hover:opacity-60'>
                        <a href="#top" >Производство «под ключ»</a>
                    </li>
                    <li className='mb-5 hover:opacity-60'>
                        <a href="#top" >Инжиниринг «под ключ»</a>
                    </li>
                    <li className='mb-5 hover:opacity-60'>
                        <a href="#top" >Атомизатор VIGA</a>
                    </li>
                    <li className='mb-5 hover:opacity-60'>
                        <a href="#top" >Атомизатор PREP</a>
                    </li>
                    <li className='mb-5 hover:opacity-60'>
                        <a href="#top" >Атомизатор EIGA</a>
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
