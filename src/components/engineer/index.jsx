import React, { useState } from 'react'
import EngineeringImage from "../../img/engineering-image.png"
import { Button } from '../button'
import { CrossLink } from '../cross-link'
import { ReactComponent as ArrowFoldedUp } from '../../img/arrow-folded-up.svg'
import { ReactComponent as ArrowFoldedDown } from '../../img/arrow-folded-down.svg'
import { ModalQuiz } from '../modal-quiz'
import { ModalConsultation } from '../modal-consultation'

export const Engineer = () => {
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [modalBriefActive, setModalBriefActive] = useState(false);
    const [modalConsultationActive, setModalConsultationActive] = useState(false);

    const toggle = () => {
        setOpen(!open);
      };
  return (
    <>
    <section className='m-auto mb-10 py-16 px-5 max-w-[1320px] sm:p-0'>
    <div className='py-8 flex flex-row gap-10 lg:gap-5 sm:flex-col-reverse sm:items-center'> 
        <img src={EngineeringImage} alt="Инжиниринг полного цикла" className='text-left max-w-[536px] max-h-[536px] lg:w-full lg:h-full m:w-[360px] m:h-[360px] sm:w-full sm:object-cover'/>
        <div className='w-full flex flex-col gap-5 items-start justify-between sm:px-5'>
            <h2 className="text-[48px] text-left font-bold text-black md:text-3xl m:text-2xl">Инжиниринг полного цикла</h2>
            <div className='flex flex-col w-full text-left'>
                <span className='text-lg text-darkGray m:text-sm'>Описание:</span>
                <span className='text-xl text-black m:text-base'>
                    Мы готовы сопровождать проект по организации производства 
                    порошковых материалов из металлических сплавов для промышленных 3D-принтеров.
                </span>
            </div>
            <span className='text-2xl text-black font-bold m:text-xl'>Цена по запросу</span>
            <div className='flex gap-10 xl:flex-col md:gap-5 xs:flex-col'>
                <div onClick={() => setModalBriefActive(true)}>
                  <Button isBlue={true}>Заполнить бриф</Button>
                </div>
                <div onClick={() => setModalConsultationActive(true)}>
                  <Button isWhite={true}>Заказать консультацию</Button>
                </div>
            </div>
        </div> 
    </div>
        <CrossLink text='Производство «под ключ»' link={ '/Production' } />
    </section>
    <section onClick={() => setIsOpen(!isOpen)}>
        <button onClick={toggle} className='px-16 text-black text-3xl font-bold bg-mainDownloadGray w-full h-[100px] flex justify-between items-center m:text-xl m:px-5'>
            Подробное описание
            { isOpen ? <ArrowFoldedDown /> : <ArrowFoldedUp /> }
            </button>
        {open && (
            <div className='bg-mainGray p-16 text-left w-full m:p-5' >
                <p className='font-bold text-4xl m:text-2xl sm:text-base'>В зависимости от стратегии реализации проекта, наш алгоритм включает в себя:</p>
                <ul className='my-10 font-normal text-2xl list-disc list-inside'>
                    <li className='m:text-base sm:text-sm'>Всесторонний аудит и выбор поставщиков оборудования;</li>
                    <li className='m:text-base sm:text-sm'>Создание стратегии закупок с учётом удалённости и особенностей локации объекта;</li>
                    <li className='m:text-base sm:text-sm'>Проработка максимального импортозамещения оборудования;</li>
                    <li className='m:text-base sm:text-sm'>Сопровождение изготовления, промежуточные инспекции и приёмка оборудования, в том числе «критического», имеющего длительные сроки производства;</li>
                    <li className='m:text-base sm:text-sm'>Взаимодействие с поставщиками на всех этапах реализации проекта: от предпроектных проработок до ввода объекта в эксплуатацию;</li>
                    <li className='m:text-base sm:text-sm'>Управление логистикой проектов с предложением наиболее оптимальных и экономически выгодных вариантов доставки и таможенной очистки грузов.</li>
                </ul>
                <p className='font-bold text-4xl m:text-2xl sm:text-base'>Компетенции нашей команды:</p>
                <ul className='my-10 font-normal text-2xl list-disc list-inside '>
                    <li className='m:text-base sm:text-sm'>Поставка основного и вспомогательного оборудования;</li>
                    <li className='m:text-base sm:text-sm'>Предпроектная подготовка и Предпроектные работы;</li>
                    <li className='m:text-base sm:text-sm'>Конструкторские работы;</li>
                    <li className='m:text-base sm:text-sm'>Базовый инжиниринг;</li>
                    <li className='m:text-base sm:text-sm'>Сопровождение строительно — монтажных (СМР) и пуско-наладочных (ПНР) работ;</li>
                    <li className='m:text-base sm:text-sm'>Инжиниринговый консалтинг.</li>
                </ul>
                <span className='font-normal text-2xl m:text-base sm:text-sm'> Специалисты Центр АТ, осуществляющие управление закупками и поставку технологического оборудования, обладают значительным опытом реализации проектов в Аддитивных технологиях на территории России.
                    Практический опыт взаимодействия с иностранными лицензиарами и логистическими операторами, позволяют создавать оптимальные цепочки поставок и, соответственно, предлагать нашим заказчикам наиболее эффективные решения.
                </span>
            </div>
        )}
    </section>
    <div className='z-40'>
        <ModalQuiz active={modalBriefActive} setActive={setModalBriefActive}/>
        <ModalConsultation active={modalConsultationActive} setActive={setModalConsultationActive}/>
    </div>
    </>
  )
}
