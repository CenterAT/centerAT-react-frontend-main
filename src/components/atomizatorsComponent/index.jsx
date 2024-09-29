import React from 'react'
import { SectionTitle } from '../section-title'
import VigaImage from "../../img/VIGA-image.png"
import EigaImage from "../../img/EIGA-image.png"
import PrepImage from "../../img/PREP-image.png"
import { NavLink } from 'react-router-dom'


export const AtomizatorsComponent = () => {
  return (
    <section className='m-auto mb-10 py-16 px-5 max-w-[1320px] sm:px-0'>
        <SectionTitle>Атомизаторы</SectionTitle>
        <div className='mt-14 flex flex-row justify-between'>

        <NavLink to='/viga'>
          <div className='flex flex-col gap-8 hover:cursor-pointer'>
            <span className='font-normal text-2xl hover:opacity-60'>Атомизатор VIGA</span>
            <div className='flex items-center justify-center w-[420px] h-[420px] hover:bg-mainDownloadGray'>
              <img src={VigaImage} alt="Атомизатор VIGA" className='w-[300px]' />
            </div>
          </div>
        </NavLink>

        <NavLink to='/prep'>
          <div className='flex flex-col gap-8 hover:cursor-pointer'>
            <span className='font-normal text-2xl hover:opacity-60'>Атомизатор PREP</span>
            <div className='flex items-center justify-center w-[420px] h-[420px] hover:bg-mainDownloadGray'>
              <img src={PrepImage} alt="Атомизатор PREP" className='w-[361px]' />
            </div>
          </div>
        </NavLink>

        <NavLink to='/eiga'>
          <div className='flex flex-col gap-8 hover:cursor-pointer'>
            <span className='font-normal text-2xl hover:opacity-60'>Атомизатор EIGA</span>
            <div className='flex items-center justify-center w-[420px] h-[420px] hover:bg-mainDownloadGray'>
              <img src={EigaImage} alt="Атомизатор EIGA" className='w-[254px]' />
            </div>
          </div>
        </NavLink>
        </div>
    </section>
  )
}
