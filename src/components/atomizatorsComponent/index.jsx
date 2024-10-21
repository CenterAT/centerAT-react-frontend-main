import React from 'react'
import { SectionTitle } from '../section-title'
import VigaImage from "../../img/VIGA-image.png"
import EigaImage from "../../img/EIGA-image.png"
import PrepImage from "../../img/PREP-image.png"
import { NavLink } from 'react-router-dom'


export const AtomizatorsComponent = () => {
  return (
    <section className='m-auto mb-10 py-16 px-5 max-w-[1320px] sm:px-0 sm:mb-0'>
        <SectionTitle>Атомизаторы</SectionTitle>
        <div className='mt-14 flex flex-row justify-between gap-5 lg:flex-col'>

        <NavLink to='/viga'>
          <div className='flex flex-col gap-8 hover:cursor-pointer'>
            <span className='font-normal text-2xl hover:opacity-60 sm:text-xl'>Атомизатор VIGA</span>
            <div className='flex items-center justify-center w-[420px] h-[420px] hover:bg-mainDownloadGray lg:w-full'>
              <img src={VigaImage} alt="Атомизатор VIGA" className='w-[300px]' />
            </div>
          </div>
        </NavLink>

        <NavLink to='/prep'>
          <div className='flex flex-col gap-8 hover:cursor-pointer'>
            <span className='font-normal text-2xl hover:opacity-60 sm:text-xl'>Атомизатор PREP</span>
            <div className='flex items-center justify-center w-[420px] h-[420px] hover:bg-mainDownloadGray lg:w-full'>
              <img src={PrepImage} alt="Атомизатор PREP" className='w-[361px]' />
            </div>
          </div>
        </NavLink>

        <NavLink to='/eiga'>
          <div className='flex flex-col gap-8 hover:cursor-pointer'>
            <span className='font-normal text-2xl hover:opacity-60 sm:text-xl'>Атомизатор EIGA</span>
            <div className='flex items-center justify-center w-[420px] h-[420px] hover:bg-mainDownloadGray lg:w-full'>
              <img src={EigaImage} alt="Атомизатор EIGA" className='w-[254px]' />
            </div>
          </div>
        </NavLink>
        </div>
    </section>
  )
}
