
import React, { useState } from 'react'
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

export const Viga = () => {const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFirst, setIsOpenFirst] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [isOpenThird, setIsOpenThird] = useState(false);
  const [isOpenForth, setIsOpenForth] = useState(false);

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
        <ProductContainer 
            ProductImage={VigaImage} 
            title='Атомизатор VIGA' 
            text='Система газового распыления металла, расплавленного в вакуумной камере путём индукционного нагрева.' 
            price='От 1 000 000 ₽'
            link={'/Prep'}
            linkText='Атомизатор PREP'
        />
        <section onClick={() => setIsOpen(!isOpen)}>
        <button onClick={toggle} className=' px-16 text-black text-3xl font-bold bg-mainDownloadGray w-full h-[100px] flex justify-between items-center '>
            Подробное описание
            { isOpen ? <ArrowFoldedDown /> : <ArrowFoldedUp /> }
            </button>
          {open && (
            <div className='bg-mainGray p-16 text-left w-full flex flex-col gap-5' >
{/* first folded component */}
                <span onClick={() => setIsOpenFirst(!isOpenFirst)}>
                  <button onClick={toggleFirst} className='text-black text-4xl font-bold w-full h-[80px] flex justify-between items-center hover:opacity-60'>
                    <div className='flex gap-10 items-center'>
                      <div className='w-[79px] h-[79px] flex items-center justify-center text-white bg-black rounded-[60px]'>1</div> 
                      Параметры оборудования
                    </div>
                    <span className='font-normal text-2xl'>Свернуть описание</span>
                  </button>
                    {isOpenFirst && (
                      <div className='flex gap-5 flex-wrap w-[1320px]'>
                        {/* config */}
                        <div className='flex flex-wrap justify-between gap-5 mt-10'>
                          <span className='px-5 flex items-center justify-left gap-5 w-[650px] h-[138px] text-2xl border-2 border-black rounded'>
                            <span className='font-bold text-3xl'>01</span>
                            Использование передовых технологий — плазменная интеллектуальная сварка и струйная обработка песком 
                          </span>
                        </div>
                        {/* config */}
                        <div className='flex flex-wrap justify-between gap-5 mt-10'>
                          <span className='px-5 flex items-center justify-left gap-5 w-[650px] h-[138px] text-2xl border-2 border-black rounded'>
                            <span className='font-bold text-3xl'>02</span>
                            Более 50 тысяч накопленных технологических данных об оборудовании
                          </span>
                        </div>
                        {/* config */}
                        <div className='flex flex-wrap justify-between gap-5 mt-10'>
                          <span className='px-5 flex items-center justify-left gap-5 w-[650px] h-[138px] text-2xl border-2 border-black rounded'>
                            <span className='font-bold text-3xl'>03</span>
                            Консультационная поддержка и инструктаж для персонала
                          </span>
                        </div>
                        {/* config */}
                        <div className='flex flex-wrap justify-between gap-5 mt-10'>
                          <span className='px-5 flex items-center justify-left gap-5 w-[650px] h-[138px] text-2xl border-2 border-black rounded'>
                            <span className='font-bold text-3xl'>04</span>
                            Гарантия выполнения проекта в течение 180 дней
                          </span>
                        </div>
                        {/* config */}
                        <div className='flex flex-wrap justify-between gap-5 mt-10'>
                          <span className='px-5 flex items-center justify-left gap-5 w-[650px] h-[138px] text-2xl border-2 border-black rounded'>
                            <span className='font-bold text-3xl'>05</span>
                            Упрощенный метод модульной сборки
                          </span>
                        </div>
                        {/* config */}
                        <div className='flex flex-wrap justify-between gap-5 mt-10'>
                          <span className='px-5 flex items-center justify-left gap-5 w-[650px] h-[138px] text-2xl border-2 border-black rounded'>
                            <span className='font-bold text-3xl'>06</span>
                            Бесперебойная и своеременная поставка оборудования
                          </span>
                        </div>
                        {/* config */}
                        <div className='flex flex-wrap justify-between gap-5 mt-10'>
                          <span className='px-5 flex items-center justify-left gap-5 w-[650px] h-[138px] text-2xl border-2 border-black rounded'>
                            <span className='font-bold text-3xl'>07</span>
                            Ответ технической поддержки в течении 24 часов
                          </span>
                        </div>
                        {/* config */}
                        <div className='flex flex-wrap justify-between gap-5 mt-10'>
                          <span className='px-5 flex items-center justify-left gap-5 w-[650px] h-[138px] text-2xl border-2 border-black rounded'>
                            <span className='font-bold text-3xl'>08</span>
                            Имеет сертификат на взрывозащиту ЕС
                          </span>
                        </div>
                        {/* config */}
                        <div className='flex flex-wrap justify-between gap-5 mt-10'>
                          <span className='px-5 flex items-center justify-left gap-5 w-[650px] h-[138px] text-2xl border-2 border-black rounded'>
                            <span className='font-bold text-3xl'>09</span>
                            Проведение ПНР до 3 установок параллельно
                          </span>
                        </div>
                        {/* config */}
                        <div className='flex flex-wrap justify-between gap-5 mt-10'>
                          <span className='px-5 flex items-center justify-left gap-5 w-[650px] h-[138px] text-2xl border-2 border-black rounded'>
                            <span className='font-bold text-3xl'>10</span>
                            Опыт работы инженеров более 10 лет
                          </span>
                        </div>
                      </div>

                    )}
                </span>
{/* second folded component */}
                <span onClick={() => setIsOpenSecond(!isOpenSecond)}>
                  <button onClick={toggleSecond} className='text-black text-4xl font-bold w-full h-[80px] flex justify-between items-center hover:opacity-60'>
                    <div className='flex gap-10 items-center'>
                      <div className='w-[79px] h-[79px] flex items-center justify-center text-white bg-black rounded-[60px]'>2</div> 
                      Получения металлопорошка по технологии VIGА
                    </div>
                    <span className='font-normal text-2xl'>Свернуть описание</span>
                  </button>
                    {isOpenSecond && (
                      <div className='flex flex-row justify-between gap-5 py-10'>
                        <div className='min-w-[656px] min-h-[800px]'>
                          <img src={TechnologyImage} alt="Описание процесса" />
                        </div>
                        <div className='font-normal text-2xl'>
                          <p className='mb-5 font-bold text-4xl'>Описание процесса</p>
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
                    <div className='flex gap-10 items-center'>
                      <div className='w-[79px] h-[79px] flex items-center justify-center text-white bg-black rounded-[60px]'>3</div> 
                      Дополнительное оборудование
                    </div>
                    <span className='font-normal text-2xl'>Свернуть описание</span>
                  </button>
                    {isOpenThird && (
                      <div className='flex gap-5 flex-wrap w-[1320px]'>
                        {/* config */}
                        <div className='flex flex-wrap justify-between gap-5 mt-10'>
                          <span className='pl-5 flex items-center justify-left gap-5 w-[650px] h-[80px] text-2xl border-2 border-black rounded'>
                            <span className='font-bold text-3xl'>01</span>
                            Двухконусный смеситель
                          </span>
                        </div>
                        {/* config */}
                        <div className='flex flex-wrap justify-between gap-5 mt-10'>
                          <span className='pl-5 flex items-center justify-left gap-5 w-[650px] h-[80px] text-2xl border-2 border-black rounded'>
                            <span className='font-bold text-3xl'>02</span>
                            Перчаточный бокс
                          </span>
                        </div>
                        {/* config */}
                        <div className='flex flex-wrap justify-between gap-5 mt-10'>
                          <span className='pl-5 flex items-center justify-left gap-5 w-[650px] h-[80px] text-2xl border-2 border-black rounded'>
                            <span className='font-bold text-3xl'>03</span>
                            Ультразвуковое вибрационное сито
                          </span>
                        </div>
                        {/* config */}
                        <div className='flex flex-wrap justify-between gap-5 mt-10'>
                          <span className='pl-5 flex items-center justify-left gap-5 w-[650px] h-[80px] text-2xl border-2 border-black rounded'>
                            <span className='font-bold text-3xl'>04</span>
                            Печь для сушки
                          </span>
                        </div>
                        {/* config */}
                        <div className='flex flex-wrap justify-between gap-5 mt-10'>
                          <span className='pl-5 flex items-center justify-left gap-5 w-[650px] h-[80px] text-2xl border-2 border-black rounded'>
                            <span className='font-bold text-3xl'>05</span>
                            Вакуумная упаковочная машина
                          </span>
                        </div>
                        {/* config */}
                        <div className='flex flex-wrap justify-between gap-5 mt-10'>
                          <span className='pl-5 flex items-center justify-left gap-5 w-[650px] h-[80px] text-2xl border-2 border-black rounded'>
                            <span className='font-bold text-3xl'>06</span>
                            Прибор для измерения температуры
                          </span>
                        </div>
                      </div>)}
                </span>
{/* forth folded component */}
                <span onClick={() => setIsOpenForth(!isOpenForth)}>
                  <button onClick={toggleForth} className='text-black text-4xl font-bold w-full h-[80px] flex justify-between items-center hover:opacity-60'>
                    <div className='flex gap-10 items-center'>
                      <div className='w-[79px] h-[79px] flex items-center justify-center text-white bg-black rounded-[60px]'>4</div> 
                      Порядок оплаты и срок реализации проекта
                    </div>
                    <span className='font-normal text-2xl'>Свернуть описание</span>
                  </button>
                    {isOpenForth && (
                      <div className='flex flex-wrap justify-between gap-5 mt-10'>
                      <span className='font-normal text-2xl'>
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
    <section className='m-auto mb-10 py-16 px-5 max-w-[1320px] sm:px-0'>
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
