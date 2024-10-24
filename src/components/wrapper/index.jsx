import React from 'react'

export const Wrapper = ({ children }) => {
  return (
    <div className='container relative mx-auto text-center text-black z-0'>{ children }</div>
  )
}
