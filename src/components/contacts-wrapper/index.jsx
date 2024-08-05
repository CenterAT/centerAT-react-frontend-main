import React from 'react'
import { SectionTitle } from '../section-title'
import { ContactsItem } from '../contacts-item'
import { ReactComponent as PhoneIconBlack } from '../../img/phone-icon-black.svg';
import { ReactComponent as MailIconBlack } from '../../img/mail-icon-black.svg';
import { ReactComponent as GeoIcon} from '../../img/geo-icon-black.svg'
import { ReactComponent as TimeIcon} from '../../img/time-icon-black.svg'

export const ContactsWrap = () => {
  return (
    <div className='flex flex-col items-start justify-between'>
        <SectionTitle>Наши контакты</SectionTitle>
        <ContactsItem>
            <PhoneIconBlack />
            <div className='flex flex-col text-left'>
                <span className='font-normal text-base text-darkGray'>Телефон</span>
                <a href="tel:+79999999999" className='font-normal text-xl text-black'>+7 999 999-99-99</a>
            </div>
        </ContactsItem>
        <ContactsItem>
            <MailIconBlack />
            <div className='flex flex-col text-left'>
                <span className='font-normal text-base text-darkGray'>Телефон</span>
                <a href="mailto:center-at@mail.ru" className='font-normal text-xl text-black'>center-at@mail.ru</a>
            </div>
        </ContactsItem>
        <ContactsItem>
            <GeoIcon />
            <div className='flex flex-col text-left'>
                <span className='font-normal text-base text-darkGray'>Адрес</span>
                <a href="#top" className='font-normal text-xl text-black'>
                    125362, г.Москва, Cтроительный проезд 7А, корп.28
                </a>
            </div>
        </ContactsItem>
        <ContactsItem>
            <TimeIcon />
            <div className='flex flex-col text-left'>
                <span className='font-normal text-base text-darkGray'>Режим работы</span>
                <a href="#top" className='font-normal text-xl text-black'>с 9:00 до 22:00, пн-пт по мск</a>
            </div>
        </ContactsItem>
    </div>
  )
}
