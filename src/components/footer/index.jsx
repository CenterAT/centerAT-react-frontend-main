import React from 'react'
import { Logo } from '../logo'
import { Communication } from '../communication'
// import PhoneIconWhite from '../../img/phone-icon.svg';
// import MailIconWhite from '../../img/mail-icon.svg';

export const Footer = () => {
  return (
    <div className='py-9 bg-black text-white'>

<div className='flex flex-row justify-around'>
            <div className='flex items-start flex-col justify-around'>
                <Logo isWhite={true}/>
                <div className='flex flex-col'>
                    <a href="#top" className='mb-5 hover:opacity-60 text-left'>Политика конфиденциальности</a>
                    <a href="#top" className='mb-5 hover:opacity-60 text-left'>Пользовательское соглашение</a>
                </div>
                <span className='text-left'>© 2024 Все права защищены. <br/> ООО «Центр-АТ»</span>
            </div>
            <div class="footer__item">
                <ul className='flex text-left flex-col justify-between'>
                    <p className='mb-5'>Компания</p>
                    <li className='mb-5 hover:opacity-60'>
                        <a href="#top" class="footer__link">О компании</a>
                    </li>
                    <li className='mb-5 hover:opacity-60'>
                        <a href="#top" class="footer__link">Продукты</a>
                    </li>
                    <li className='mb-5 hover:opacity-60'>
                        <a href="#top" class="footer__link">Новости</a>
                    </li>
                    <li className='mb-5 hover:opacity-60'>
                        <a href="#top" class="footer__link">Контакты</a>
                    </li>
                </ul>
            </div>
            <div class="footer__item">
                <ul className='flex text-left flex-col justify-between'>
                    <p className='mb-5'>Продукты</p>
                    <li className='mb-5 hover:opacity-60'>
                        <a href="#top" class="footer__link">Производство «под ключ»</a>
                    </li>
                    <li className='mb-5 hover:opacity-60'>
                        <a href="#top" class="footer__link">Инжиниринг «под ключ»</a>
                    </li>
                    <li className='mb-5 hover:opacity-60'>
                        <a href="#top" class="footer__link">Атомизатор VIGA</a>
                    </li>
                    <li className='mb-5 hover:opacity-60'>
                        <a href="#top" class="footer__link">Атомизатор PREP</a>
                    </li>
                    <li className='mb-5 hover:opacity-60'>
                        <a href="#top" class="footer__link">Атомизатор EIGA</a>
                    </li>
                </ul>
            </div>
            <Communication isPhoneIconWhite={true} isMailIconWhite={true} isFlexCol={true}/>
        </div>
    </div>
  )
}
