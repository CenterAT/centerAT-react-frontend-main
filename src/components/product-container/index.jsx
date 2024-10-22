import React, { useState } from 'react'
import { Button } from '../button'
import { CrossLink } from '../cross-link'
import { ModalQuiz } from '../modal-quiz'
import { ModalConsultation } from '../modal-consultation'

export const ProductContainer = ({ ProductImage, title, text, price, link, linkText }) => {
    const [modalBriefActive, setModalBriefActive] = useState(false);
    const [modalConsultationActive, setModalConsultationActive] = useState(false);

  return (
    <section className='m-auto mb-10 py-16 px-5 max-w-[1320px] md:flex-col md:px-5'>
    <div className='flex flex-row gap-20 mx-auto max-w-full justify-center py-8 sm:flex-col-reverse sm:px-5 sm:gap-5'> 
        <div className='w-[538px] h-[538px] flex items-center justify-center sm:w-full'>
            <img src={ ProductImage } alt={title} className='text-left'/>
        </div>
        <div className='h-[538px] flex flex-col items-start justify-between md:w-[326px] sm:w-full sm:h-full sm:justify-normal sm:gap-5'>
            <h2 className="text-[48px] text-left font-bold text-black md:text-3xl sm:text-2xl">{ title }</h2>
            <div className='flex flex-col items-start max-w-[600px] md:max-w-[326px] text-left'>
                <span className='text-lg text-darkGray'>Описание:</span>
                <span className='text-xl text-black'>{ text }</span>
            </div>
            <span className='text-2xl text-black font-bold'>{ price }</span>
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
        <CrossLink text={linkText} link={ link } />
    <div className='z-40'>
        <ModalQuiz active={modalBriefActive} setActive={setModalBriefActive}/>
        <ModalConsultation active={modalConsultationActive} setActive={setModalConsultationActive}/>
    </div>
    </section>
  )
}
