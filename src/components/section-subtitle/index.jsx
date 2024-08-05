import React from 'react'

const fontWhite = 'text-white'

export const SectionSubtitle = ({ 
  children = '',
  isWhite = false
}) => {
  return (
    <h2 className={`mb-6 font-normal text-2xl ${isWhite && fontWhite}`}>{ children }</h2>
  )
}
