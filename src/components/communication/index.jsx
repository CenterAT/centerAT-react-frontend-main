import React from 'react'
import { ReactComponent as PhoneIconBlack } from '../../img/phone-icon-black.svg';
import { ReactComponent as MailIconBlack } from '../../img/mail-icon-black.svg';
import { ReactComponent as PhoneIconWhite } from '../../img/phone-icon.svg';
import { ReactComponent as MailIconWhite } from '../../img/mail-icon.svg';

const blackIcon = <PhoneIconBlack className='fill-black hover:fill-mainBlue'/>
const whiteIcon = <PhoneIconWhite className='fill-white hover:fill-mainBlue'/>

const blackMailIcon = <MailIconBlack className='fill-black hover:fill-mainBlue'/>
const whiteMailIcon = <MailIconWhite className='fill-white hover:fill-mainBlue'/>

// flex styles
const flexCol = 'flex-col m:text-sm sm:items-center'
const marginBottom = 'mb-5'
const headerStyles = 'md:hidden'
const headerMobileStyles = 'sm:hidden'

export const Communication = ({
  isPhoneIconBlack = false,
  isPhoneIconWhite = false,
  isMailIconBlack = false,
  isMailIconWhite = false,
  isFlexCol = false,
  isHeader = false,
  isMobileHeader = false,
}) => {
  return (
    <div className={`flex ${isFlexCol && flexCol} ${isMobileHeader && headerMobileStyles}`} >
            <a href="tel:+79999999999" className={`mr-5 flex items-center ${isFlexCol && marginBottom} hover:text-mainBlue sm:mr-0 `}>
                <div className='mr-2'>
                  {isPhoneIconBlack && blackIcon}
                  {isPhoneIconWhite && whiteIcon}
                </div>
                <div className={`${isHeader && headerStyles}`}>
                  +7 999 999-99-99
                </div>
            </a>
            <a href="mailto:center-at@mail.ru" className='flex items-center hover:text-mainBlue'>
              <div className={`mr-2`}>
                {isMailIconBlack && blackMailIcon}
                {isMailIconWhite && whiteMailIcon}
              </div>
              <div className={`${isHeader && headerStyles}`}>
                center-at@mail.ru
              </div>
            </a>
        </div>
  )
}
