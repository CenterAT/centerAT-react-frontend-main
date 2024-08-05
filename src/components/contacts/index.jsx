import React from 'react'
import { ContactsWrap } from '../contacts-wrapper'

export const Contacts = () => {
  return (
    <div className='mb-24 m-auto max-w-[1320px] flex gap-8'>
        <div className=' w-[768px] h-[470px] bg-pink-300'></div>
        <ContactsWrap />
    </div>
  )
}
