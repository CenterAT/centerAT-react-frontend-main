import React from 'react'

const grayBg = 'bg-mainGray'
const flexRow = 'flex flex-row items-center'

export const SectionWrapper = ({ 
    children = '',
    isGray = 'false',
    isFlex = 'false'
}) => {
  return (
    <div className={`mx-auto py-8 px-12 max-w-7x ${isGray && grayBg} ${isFlex && flexRow}`}>{ children }</div>
  )
}
