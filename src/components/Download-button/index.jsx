import React from 'react'
import { ReactComponent as DownloadIcon } from '../../img/download-icon.svg'

export const DownloadButton = ({ text }) => {
  return (
    <button className='pl-8 w-[650px] h-[150px] bg-mainDownloadGray flex items-center' >
        <span className='text-xl font-normal text-left'>{ text }</span>
        <div className='bg-mainBlue w-[100px] h-[150px] flex items-center justify-center'>
            <DownloadIcon className='w-[50px] h-[50px]'/> 
        </div>
    </button>
  )
}
