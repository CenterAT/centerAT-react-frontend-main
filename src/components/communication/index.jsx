import React from 'react'
import { ReactComponent as PhoneIconBlack } from '../../img/phone-icon-black.svg';
import { ReactComponent as MailIconBlack } from '../../img/mail-icon-black.svg';
import { ReactComponent as PhoneIconWhite } from '../../img/phone-icon.svg';
import { ReactComponent as MailIconWhite } from '../../img/mail-icon.svg';

const blackIcon = <PhoneIconBlack />
const whiteIcon = <PhoneIconWhite />

const blackMailIcon = <MailIconBlack />
const whiteMailIcon = <MailIconWhite />

// flex styles
const flexCol = 'flex-col'
const marginBottom = 'mb-5'

export const Communication = ({
  isPhoneIconBlack = false,
  isPhoneIconWhite = false,
  isMailIconBlack = false,
  isMailIconWhite = false,
  isFlexCol = false
}) => {
  return (
    <div className={`flex ${isFlexCol && flexCol}`} >
            <a href="tel:+79999999999" className={`mr-5 flex items-center ${isFlexCol && marginBottom} hover:text-mainBlue`}>
                <div className='mr-2'>
                  {isPhoneIconBlack && blackIcon}
                  {isPhoneIconWhite && whiteIcon}
                </div>
                +7 999 999-99-99
            </a>
            <a href="mailto:center-at@mail.ru" className='flex items-center hover:text-mainBlue'>
              <div className='mr-2'>
                {isMailIconBlack && blackMailIcon}
                {isMailIconWhite && whiteMailIcon}
              </div>
              center-at@mail.ru
            </a>
        </div>
  )
}
