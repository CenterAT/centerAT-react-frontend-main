import React from 'react'

export const ContactsItem = ({ children = ''}) => {
  return (
    <div className='flex items-center gap-5'>{ children }</div>
  )
}
