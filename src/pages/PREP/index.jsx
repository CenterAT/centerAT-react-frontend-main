import React, { useState } from 'react'
import { Header } from "../../components/header/index"
import { Products } from '../../components/products'
import { ProductContainer } from '../../components/product-container'
import PrepImage from "../../img/PREP-image.png"
import EigaImage from "../../img/EIGA-image.png"
import { ReactComponent as ArrowFoldedUp } from '../../img/arrow-folded-up.svg'
import { ReactComponent as ArrowFoldedDown } from '../../img/arrow-folded-down.svg'
import { SectionTitle } from '../../components/section-title/index'
import VigaImage from "../../img/VIGA-image.png"
import { NavLink } from 'react-router-dom'
import { OddsPREP } from '../../components/constants'
import { OddsWrapper } from '../../components/odds-wrapper'

export const Prep = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFirst, setIsOpenFirst] = useState(true);
  const [isOpenSecond, setIsOpenSecond] = useState(true);
  const [isOpenThird, setIsOpenThird] = useState(true);
  // const [isOpenForth, setIsOpenForth] = useState(false);

  const toggle = () => {
      setOpen(!open);
  };

  const toggleFirst = () => {
    setIsOpenFirst(!isOpenFirst);
  };

  const toggleSecond = () => {
    setIsOpenSecond(!isOpenSecond);
  };

  const toggleThird = () => {
    setIsOpenThird(!isOpenThird);
  };

  // const toggleForth = () => {
  //   setIsOpenForth(!isOpenForth);
  // };
  return (
    <>
      <Header />
        <ProductContainer 
            ProductImage={PrepImage} 
            title='Атомизатор PREP' 
            text='Метод центробежного распыления вращающейся литой заготовки.' 
            price='От 1 000 000 ₽'
            link={'/Eiga'}
            linkText='Атомизатор EIGA'
        />
        <section onClick={() => setIsOpen(!isOpen)}>
        <button onClick={toggle} className='px-16 text-black text-3xl font-bold bg-mainDownloadGray w-full h-[100px] flex justify-between items-center m:text-xl m:px-5'>
            Подробное описание
            { isOpen ? <ArrowFoldedDown /> : <ArrowFoldedUp /> }
            </button>
          {open && (
            <div className='bg-mainGray p-16 text-left w-full flex flex-col gap-5 md:px-5' >
{/* first folded component */}
                <span onClick={() => setIsOpenFirst(!isOpenFirst)}>
                  <button onClick={toggleFirst} className='text-black text-4xl font-bold w-full h-[80px] flex justify-between items-center hover:opacity-60'>
                    <div className='flex gap-10 items-center m:text-xl sm:text-sm'>
                      <div className='w-[79px] h-[79px] flex items-center justify-center text-white bg-black rounded-[60px] m:text-2xl m:w-[55px] m:h-[55px] sm:text-sm sm:w-[25px] sm:h-[25px]'>1</div> 
                      Параметры оборудования
                    </div>
                    {/* <span className='font-normal text-2xl'>Свернуть описание</span> */}

                  </button>
                    {isOpenFirst && (
                      <div className='flex flex-wrap justify-between gap-5 mt-10'>
                      <div className='flex flex-col justify-center items-center  text-center gap-5 w-[320px] h-[140px] font-normal text-2xl m:text-base'>
                        <span className=''>Габариты оборудования</span>
                        <span className='flex items-center justify-center w-[320px] h-[64px] border-2 border-black rounded m:w-[228px] m:h-[55px]'>
                          6 500×3 500×6 300 мм
                        </span>
                      </div>
                      <div className='flex flex-col justify-center items-center  text-center gap-5 w-[320px] h-[140px] font-normal text-2xl m:text-base'>
                        <span className=''>Диаметр индукционного стержня</span>
                        <span className='flex items-center justify-center w-[320px] h-[64px] border-2 border-black rounded m:w-[228px] m:h-[55px]'>
                        50 мм
                        </span>
                      </div>
                      <div className='flex flex-col justify-center items-center  text-center gap-5 w-[320px] h-[140px] font-normal text-2xl m:text-base'>
                        <span className=''>Длина индукционного стержня</span>
                        <span className='flex items-center justify-center w-[320px] h-[64px] border-2 border-black rounded m:w-[228px] m:h-[55px]'>
                          400 ~ 700 мм
                        </span>
                      </div>
                      <div className='flex flex-col justify-center items-center  text-center gap-5 w-[320px] h-[140px] font-normal text-2xl m:text-base'>
                        <span className=''>Скорость вращения</span>
                        <span className='flex items-center justify-center w-[320px] h-[64px] border-2 border-black rounded m:w-[228px] m:h-[55px]'>
                          0 ~ 40 000 об / мин
                        </span>
                      </div>
                      <div className='flex flex-col justify-center items-center  text-center gap-5 w-[320px] h-[140px] font-normal text-2xl m:text-base'>
                        <span className=''>Количество одновременно загруженных стержней</span>
                        <span className='flex items-center justify-center w-[320px] h-[64px] border-2 border-black rounded m:w-[228px] m:h-[55px]'>
                        60 шт
                        </span>
                      </div>
                      <div className='flex flex-col justify-center items-center  text-center gap-5 w-[320px] h-[140px] font-normal text-2xl m:text-base'>
                        <span className=''>Скорость вращения стержня</span>
                        <span className='flex items-center justify-center w-[320px] h-[64px] border-2 border-black rounded m:w-[228px] m:h-[55px]'>
                        0 ~ 100 мм / мин
                        </span>
                      </div>
                      </div>
                    )}
                </span>
{/* second folded component */}
                <span onClick={() => setIsOpenSecond(!isOpenSecond)}>
                  <button onClick={toggleSecond} className='text-black text-4xl font-bold w-full h-[80px] flex justify-between items-center hover:opacity-60'>
                    <div className='flex gap-10 items-center m:text-xl sm:text-sm'>
                      <div className='w-[79px] h-[79px] flex items-center justify-center text-white bg-black rounded-[60px] m:text-2xl m:w-[55px] m:h-[55px] sm:text-sm sm:w-[25px] sm:h-[25px]'>2</div> 
                      Конфигурация оборудования
                    </div>
                    {/* <span className='font-normal text-2xl'>Свернуть описание</span> */}
                  </button>
                    {isOpenSecond && (
                      <div className='flex gap-5 justify-between flex-wrap sm:w-full'>
                        <OddsWrapper items={OddsPREP}/>
                      </div>
                    )}
                </span>
{/* third folded component */}
                <span onClick={() => setIsOpenThird(!isOpenThird)}>
                  <button onClick={toggleThird} className='text-black text-4xl font-bold w-full h-[80px] flex justify-between items-center hover:opacity-60'>
                    <div className='flex gap-10 items-center m:text-xl sm:text-sm'>
                      <div className='w-[79px] h-[79px] flex items-center justify-center text-white bg-black rounded-[60px] md:text-2xl m:w-[55px] md:h-[55px] sm:text-sm sm:w-[25px] sm:h-[25px]'>3</div> 
                      Порядок оплаты и срок реализации проекта
                    </div>
                    {/* <span className='font-normal text-2xl'>Свернуть описание</span> */}
                  </button>
                    {isOpenThird && (
                      <div className='flex flex-wrap justify-between gap-5 mt-10'>
                        <span className='font-normal text-2xl md:text-base sm:text-sm'>
                          <p>Стоимость атомизатора технологии PREP составляет 187.000.000 (сто восемьдесят семь) миллионов рублей без учёта НДС.</p>
                          <p>Срок действия коммерческого предложения: до 14 июня 2024 года.</p>
                          <p>Гарантия на оборудование PREP составляет один год с момента приёмки.</p>
                        </span>
                      </div>
                    )}
                </span>
{/* end of the folded components */}

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
        <Products/>
    </>
  )
}
