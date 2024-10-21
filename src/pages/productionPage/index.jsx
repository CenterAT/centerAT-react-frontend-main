import React from 'react'
import { Header } from "../../components/header/index"
import { Production } from '../../components/production'
// import { DownloadButton } from '../../components/Download-button'
import { Products } from '../../components/products'

export const ProductionPage = () => {
  return (
    <>
      <Header />
      <section className='m-auto mb-10 py-16 px-5 max-w-[1320px] sm:p-0'>
        <Production />
      </section>
      {/* Секция с кнопками скачивания всяких документов */}
      {/* <section className='px-16 bg-mainGray w-full h-[450px] flex flex-col justify-around items-center '>
        <h4 className='font-bold text-5xl'>Скачать презентацию</h4>
        <div className='flex gap-10 sm:flex-col'>
          <DownloadButton text={'Запуск производства порошков для 3D-принтеров SLM'}/>
          <DownloadButton text={'Производство порошков из металлических сплавов для промышленных 3D-принтеров'} />
        </div>
      </section> */}
      <Products />
    </>
  )
}
