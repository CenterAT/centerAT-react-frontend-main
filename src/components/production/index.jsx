import React, { useState } from 'react'
import ProductionImage from "../../img/production-image.png"
import { Button } from '../button'
import { CrossLink } from '../cross-link'
import { ModalQuiz } from '../modal-quiz'
import { ModalConsultation } from '../modal-consultation/index'

export const Production = () => {
    const [modalBriefActive, setModalBriefActive] = useState(false);
    const [modalConsultationActive, setModalConsultationActive] = useState(false);

  return (
    <>
    <div className='py-8 flex flex-row gap-10 lg:gap-5 sm:flex-col-reverse sm:items-center'> 
      <img src={ProductionImage} alt="Производство «под ключ»" className='text-left max-w-[536px] max-h-[536px] lg:w-full lg:h-full m:w-[360px] m:h-[360px] sm:w-full sm:object-cover'/>
      <div className='w-full flex flex-col gap-5 items-start justify-between sm:px-5'>
        <h2 className="text-[48px] text-left font-bold text-black md:text-3xl m:text-2xl">Производство «под ключ»</h2>
        <div className='flex flex-col w-full text-left'>
          <span className='text-lg text-darkGray m:text-sm'>Описание:</span>
          <span className='text-xl text-black m:text-base'> Мы предоставляем вам презентацию вариантов для ознакомления.</span>
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
    <CrossLink text='Инжиниринг «под ключ»' link={ '/Engineering' } />
    <div className='z-40'>
        <ModalQuiz active={modalBriefActive} setActive={setModalBriefActive}/>
        {/*<ModalConsultation active={modalConsultationActive} setActive={setModalConsultationActive}/>*/}
    </div>
    </>
  )
}
