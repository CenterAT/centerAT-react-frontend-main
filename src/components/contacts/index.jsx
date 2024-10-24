import React from 'react'
import { ContactsWrap } from '../contacts-wrapper'
// import { MapWrapper } from '../map'

export const Contacts = () => {
  return (
    <div className='px-5 mb-24 m-auto max-w-[1320px] flex gap-8 lg:flex-col m:p-0' id='contacts'>
        {/* <div className=' w-[768px] h-[470px] bg-pink-300 sm:w-full'>
          <MapWrapper />
        </div> */}
        <ContactsWrap />
    </div>
  )
}
