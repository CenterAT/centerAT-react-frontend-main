import React, { useState } from 'react'
import EngineeringImage from "../../img/engineering-image.png"
import { Button } from '../button'
import { CrossLink } from '../cross-link'
import { ReactComponent as ArrowFoldedUp } from '../../img/arrow-folded-up.svg'
import { ReactComponent as ArrowFoldedDown } from '../../img/arrow-folded-down.svg'

export const Engineer = () => {
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
      };
  return (
    <>
    <section className='m-auto mb-10 py-16 px-5 max-w-[1320px] sm:px-0'>
    <div className='flex flex-row gap-20 mx-auto max-w-full justify-center py-8'> 
        <img src={EngineeringImage} alt="Производство под ключ" className='max-w-[538px] max-h-[538px] text-left'/>
        <div className='h-[538px] flex flex-col items-start justify-between'>
            <h2 className="text-[48px] font-bold text-black">Инжиниринг полного цикла</h2>
            <div className='flex flex-col items-start w-[600px] text-left'>
                <span className='text-lg text-darkGray'>Описание:</span>
                <span className='text-xl text-black'>
                    Мы готовы сопровождать проект по организации производства 
                    порошковых материалов из металлических сплавов для промышленных 3D-принтеров.
                </span>
            </div>
            <span className='text-2xl text-black font-bold'>Цена по запросу</span>
            <div className='flex gap-10 sm:flex-col-reverse'>
                <Button isBlue={true}>Заполнить бриф</Button>
                <Button isWhite={true}>Заказать консультацию</Button>
            </div>
        </div> 
    </div>
        <CrossLink text='Производство «под ключ»' link={ '/Production' } />
    </section>
    <section onClick={() => setIsOpen(!isOpen)}>
        <button onClick={toggle} className=' px-16 text-black text-3xl font-bold bg-mainDownloadGray w-full h-[100px] flex justify-between items-center '>
            Подробное описание
            { isOpen ? <ArrowFoldedDown /> : <ArrowFoldedUp /> }
            </button>
        {open && (
            <div className='bg-mainGray p-16 text-left w-full' >
                <p className='font-bold text-4xl'>В зависимости от стратегии реализации проекта, наш алгоритм включает в себя:</p>
                <ul className='my-10 font-normal text-2xl list-disc list-inside'>
                    <li className='my-2'>Всесторонний аудит и выбор поставщиков оборудования;</li>
                    <li className='my-2'>Создание стратегии закупок с учётом удалённости и особенностей локации объекта;</li>
                    <li className='my-2'>Проработка максимального импортозамещения оборудования;</li>
                    <li className='my-2'>Сопровождение изготовления, промежуточные инспекции и приёмка оборудования, в том числе «критического», имеющего длительные сроки производства;</li>
                    <li className='my-2'>Взаимодействие с поставщиками на всех этапах реализации проекта: от предпроектных проработок до ввода объекта в эксплуатацию;</li>
                    <li className='my-2'>Управление логистикой проектов с предложением наиболее оптимальных и экономически выгодных вариантов доставки и таможенной очистки грузов.</li>
                </ul>
                <p className='font-bold text-4xl'>Компетенции нашей команды:</p>
                <ul className='my-10 font-normal text-2xl list-disc list-inside '>
                    <li className='my-2'>Поставка основного и вспомогательного оборудования;</li>
                    <li className='my-2'>Предпроектная подготовка и Предпроектные работы;</li>
                    <li className='my-2'>Конструкторские работы;</li>
                    <li className='my-2'>Базовый инжиниринг;</li>
                    <li className='my-2'>Сопровождение строительно — монтажных (СМР) и пуско-наладочных (ПНР) работ;</li>
                    <li className='my-2'>Инжиниринговый консалтинг.</li>
                </ul>
                <span className='font-normal text-2xl'> Специалисты Центр АТ, осуществляющие управление закупками и поставку технологического оборудования, обладают значительным опытом реализации проектов в Аддитивных технологиях на территории России.
                    Практический опыт взаимодействия с иностранными лицензиарами и логистическими операторами, позволяют создавать оптимальные цепочки поставок и, соответственно, предлагать нашим заказчикам наиболее эффективные решения.
                </span>
            </div>
        )}
    </section>
    </>
  )
}
