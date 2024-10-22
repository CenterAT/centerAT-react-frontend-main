import React, { useState } from 'react'
import { Header } from "../../components/header/index"
import { Products } from '../../components/products'
import { ProductContainer } from '../../components/product-container'
import VigaImage from "../../img/VIGA-image.png"
import PrepImage from "../../img/PREP-image.png"
import EigaImage from "../../img/EIGA-image.png"
import TechnologyImage from "../../img/viga-technology-image.png"
import { ReactComponent as ArrowFoldedUp } from '../../img/arrow-folded-up.svg'
import { ReactComponent as ArrowFoldedDown } from '../../img/arrow-folded-down.svg'
import { SectionTitle } from '../../components/section-title/index'
import { NavLink } from 'react-router-dom'
import { OddsWrapper } from '../../components/odds-wrapper'
import { OddsVIGA, OddsVIGAoptions } from '../../components/constants'

export const Viga = () => {const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFirst, setIsOpenFirst] = useState(true);
  const [isOpenSecond, setIsOpenSecond] = useState(true);
  const [isOpenThird, setIsOpenThird] = useState(true);
  const [isOpenForth, setIsOpenForth] = useState(true);

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

  const toggleForth = () => {
    setIsOpenForth(!isOpenForth);
  };
  return (
    <>
      <Header />
        <ProductContainer 
            ProductImage={VigaImage} 
            title='Атомизатор VIGA' 
            text='Система газового распыления металла, расплавленного в вакуумной камере путём индукционного нагрева.' 
            price='От 1 000 000 ₽'
            link={'/Prep'}
            linkText='Атомизатор PREP'
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
                      Преимущества оборудования
                    </div>
                    {/* <span className='font-normal text-2xl'>Свернуть описание</span> */}
                  </button>
                    {isOpenFirst && (
                      <div className='flex gap-5 flex-wrap w-[1320px] m:w-[720px] sm:w-full'>
                        <OddsWrapper items={OddsVIGA}/>
                      </div>
                    )}
                </span>
{/* second folded component */}
                <span onClick={() => setIsOpenSecond(!isOpenSecond)}>
                  <button onClick={toggleSecond} className='text-black text-4xl font-bold w-full h-[80px] flex justify-between items-center hover:opacity-60'>
                    <div className='flex gap-10 items-center m:text-xl sm:text-sm'>
                      <div className='w-[79px] h-[79px] flex items-center justify-center text-white bg-black rounded-[60px] m:text-2xl m:w-[55px] m:h-[55px] sm:text-sm sm:w-[25px] sm:h-[25px]'>2</div> 
                      Получения металлопорошка по технологии VIGА
                    </div>
                    {/* <span className='font-normal text-2xl'>Свернуть описание</span> */}
                  </button>
                    {isOpenSecond && (
                      <div className='flex flex-row justify-between gap-5 py-10 md:flex-col md:justify-center'>
                        <div className='min-w-[656px] min-h-[800px] md:min-w-full md:min-h-full'>
                          <img src={TechnologyImage} alt="Описание процесса" />
                        </div>
                        <div className='font-normal text-2xl md:text-base sm:text-sm'>
                          <p className='mb-5 font-bold text-4xl md:text-2xl sm:text-base'>Описание процесса</p>
                          <p className='mb-5'>Процесс получения металлического порошка по технологии VIGA включает подготовку сырья согласно установленным пропорциям и проверку дозировки, транспортировку сырья по разработанной схеме, и его загрузку в тигель в правильной последовательности для предотвращения повреждения печи. </p>
                          <p className='mb-5'>Сплав расплавляется в индукционной печи при замещении газовой среды на азот, после чего проводится рафинирование и атомизация при контролируемом давлении и расходе газа.</p>
                          <p className='mb-5'>Затем порошок охлаждается, собирается в специальную емкость для предотвращения окисления, транспортируется к следующему этапу, просеивается для получения нужного размера частиц и объединяется в одну партию для равномерного состава.</p>
                          <p className='mb-5'>Постобработка включает ультразвуковое вибрационное сито для сортировки, сушильную печь и вакуумную упаковочную машину. Упаковка осуществляется вручную.</p>
                        </div>
                      </div>
                    )}
                </span>
{/* third folded component */}
                <span onClick={() => setIsOpenThird(!isOpenThird)}>
                  <button onClick={toggleThird} className='text-black text-4xl font-bold w-full h-[80px] flex justify-between items-center hover:opacity-60'>
                    <div className='flex gap-10 items-center m:text-xl sm:text-sm'>
                      <div className='w-[79px] h-[79px] flex items-center justify-center text-white bg-black rounded-[60px] m:text-2xl m:w-[55px] m:h-[55px] sm:text-sm sm:w-[25px] sm:h-[25px]'>3</div> 
                      Дополнительное оборудование
                    </div>
                    {/* <span className='font-normal text-2xl'>Свернуть описание</span> */}
                  </button>
                    {isOpenThird && (
                      <div className='flex gap-5 flex-wrap w-[1320px] m:w-[720px] sm:w-full'>
                        <OddsWrapper items={OddsVIGAoptions}/>
                      </div>
                      )}
                </span>
{/* forth folded component */}
                <span onClick={() => setIsOpenForth(!isOpenForth)}>
                  <button onClick={toggleForth} className='text-black text-4xl font-bold w-full h-[80px] flex justify-between items-center hover:opacity-60'>
                    <div className='flex gap-10 items-center m:text-xl sm:text-sm'>
                      <div className='w-[79px] h-[79px] flex items-center justify-center text-white bg-black rounded-[60px] m:text-2xl m:w-[55px] m:h-[55px] sm:text-sm sm:w-[25px] sm:h-[25px]'>4</div> 
                      Порядок оплаты и срок реализации проекта
                    </div>
                    {/* <span className='font-normal text-2xl'>Свернуть описание</span> */}
                  </button>
                    {isOpenForth && (
                      <div className='flex flex-wrap justify-between gap-5 mt-10'>
                      <span className='font-normal text-2xl md:text-base sm:text-sm'>
                        <p className='mb-5'>Период изготовления и поставки оборудования Заказчику — не более 9 месяцев от момента вступления договора в юридическую силу и перечисления авансового платежа.</p>
                        <p className='mb-5'>Период монтажа и пуско-наладочных работ — не более 3 месяцев при условии готовности площадки со стороны Заказчика к выполнению работ.</p>
                        <p className='mb-5'>Монтаж установки может быть начат сразу после поставки основных стальных имеханических узлов ивыполняться параллельно споставками оборудования систем обеспечения.</p>
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

        <NavLink to='/prep'>
          <div className='flex flex-col gap-8 hover:cursor-pointer'>
            <span className='font-normal text-2xl hover:opacity-60'>Атомизатор PREP</span>
            <div className='flex items-center justify-center w-[420px] h-[420px] hover:bg-mainDownloadGray'>
              <img src={PrepImage} alt="Атомизатор VIGA" className='w-[300px]' />
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
