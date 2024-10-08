import React from 'react'

const fontWhite = 'text-white'

export const SectionTitle = ({ 
  children = '',
  isWhite = false
}) => {
  return (
    <h2 className={`mb-8 font-Jost font-extrabold text-5xl ${isWhite && fontWhite} lg:text-[40px] sm:text-[32px]`}>{ children }</h2>
  )
}
