import React from 'react'
import { ContactsWrap } from '../contacts-wrapper'

export const Contacts = () => {
  return (
    <div className='px-5 mb-24 m-auto max-w-[1320px] flex gap-8 m:flex-col m:p-0'>
        <div className=' w-[768px] h-[470px] bg-pink-300 sm:w-full'>
          Аздесь совсем скоро будет карта!
        </div>
        <ContactsWrap />
    </div>
  )
}
