import React, { useState } from 'react'
import { Header } from "../../components/header/index"
import { Products } from '../../components/products'
import { ProductContainer } from '../../components/product-container'
import EigaImage from "../../img/EIGA-image.png"
import { ReactComponent as ArrowFoldedUp } from '../../img/arrow-folded-up.svg'
import { ReactComponent as ArrowFoldedDown } from '../../img/arrow-folded-down.svg'
import { SectionTitle } from '../../components/section-title/index'
import VigaImage from "../../img/VIGA-image.png"
import PrepImage from "../../img/PREP-image.png"
import { NavLink } from 'react-router-dom'

export const Eiga = () => {

  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFirst, setIsOpenFirst] = useState(true);

  const toggle = () => {
      setOpen(!open);
  };

  const toggleFirst = () => {
    setIsOpenFirst(!isOpenFirst);
  };
  return (
    <>
    <Header />
        <ProductContainer 
            ProductImage={EigaImage} 
            title='Атомизатор EIGA' 
            text='Оборудование
            для производства порошков с
            индукционным газовым распылением электродов.' 
            price='От 1 000 000 ₽'
            link={'/Viga'}
            linkText='Атомизатор VIGA'
        />

    <section onClick={() => setIsOpen(!isOpen)}>
        <button onClick={toggle} className=' px-16 text-black text-3xl font-bold bg-mainDownloadGray w-full h-[100px] flex justify-between items-center m:text-xl m:px-5 '>
            Подробное описание
            { isOpen ? <ArrowFoldedDown /> : <ArrowFoldedUp /> }
            </button>
        {open && (
            <div className='bg-mainGray p-16 text-left w-full m:p-5' >
                <span onClick={() => setIsOpenFirst(!isOpenFirst)}>
                  <button onClick={toggleFirst} className='text-black text-4xl font-bold w-full h-[80px] flex justify-between items-center hover:opacity-60'>
                    <div className='flex gap-10 items-center m:text-xl sm:text-sm '>
                      <div className='w-[79px] h-[79px] flex items-center justify-center text-white bg-black rounded-[60px] m:text-2xl m:w-[55px] m:h-[55px] sm:text-sm sm:w-[25px] sm:h-[25px]'>1</div> 
                      Параметры оборудования
                    </div>
                    {/* <span className='font-normal text-2xl'>Свернуть описание</span> */}
                  </button>
                    {isOpenFirst && (
                      <div className='flex flex-wrap justify-between gap-5 mt-10'>
                        
                      <div className='flex flex-col justify-center items-center  text-center gap-5 w-[320px] h-[140px] font-normal text-2xl m:text-base'>
                        <span className=''>Диаметр чувствительного электрода</span>
                        <span className='flex items-center justify-center w-[320px] h-[64px] border-2 border-black rounded m:w-[228px] m:h-[55px]'>50 ~ 57 мм</span>
                      </div>
                      <div className='flex flex-col justify-center items-center  text-center gap-5 w-[320px] h-[140px] font-normal text-2xl m:text-base'>
                        <span className=''>Длина чувствительного электрода</span>
                        <span className='flex items-center justify-center w-[320px] h-[64px] border-2 border-black rounded m:w-[228px] m:h-[55px]'>
                        200 ~ 1000 мм
                        </span>
                      </div>
                      <div className='flex flex-col justify-center items-center  text-center gap-5 w-[320px] h-[140px] font-normal text-2xl m:text-base'>
                        <span className=''>Максимальная температуры плавления</span>
                        <span className='flex items-center justify-center w-[320px] h-[64px] border-2 border-black rounded m:w-[228px] m:h-[55px]'>
                        ≤2200°С
                        </span>
                      </div>
                      <div className='flex flex-col justify-center items-center  text-center gap-5 w-[320px] h-[140px] font-normal text-2xl m:text-base'>
                        <span className=''>Производсвенная мощность</span>
                        <span className='flex items-center justify-center w-[320px] h-[64px] border-2 border-black rounded m:w-[228px] m:h-[55px]'>
                        14 ~ 20 кг/ч
                        </span>
                      </div>
                      <div className='flex flex-col justify-center items-center  text-center gap-5 w-[320px] h-[140px] font-normal text-2xl m:text-base'>
                        <span className=''>Давление распыляемого газа</span>
                        <span className='flex items-center justify-center w-[320px] h-[64px] border-2 border-black rounded m:w-[228px] m:h-[55px]'>
                        0~6 МПа
                        </span>
                      </div>
                      <div className='flex flex-col justify-center items-center  text-center gap-5 w-[320px] h-[140px] font-normal text-2xl m:text-base'>
                        <span className=''>Скорость повышения давления</span>
                        <span className='flex items-center justify-center w-[320px] h-[64px] border-2 border-black rounded m:w-[228px] m:h-[55px]'>
                        ≤2 Па/ч
                        </span>
                      </div>
                      </div>
                    )}
                </span>
            </div>
        )}
    </section>
    <section className='m-auto mb-10 py-16 px-5 max-w-[1320px] md:hidden sm:px-0'>
        <SectionTitle>Другие наши Атомизаторы</SectionTitle>
        <div className='mt-14 flex flex-row gap-16 justify-center'>

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
        </div>
    </section>

        <Products/>
    </>
  )
}
