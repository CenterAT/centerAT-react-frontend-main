import React, { useState } from 'react'
import { Button } from '../button'
import { ModalQuiz } from '../modal-quiz'
import { ModalConsultation } from '../modal-consultation';

export const Hero = () => {
  const [modalBriefActive, setModalBriefActive] = useState(false);
  const [modalConsultationActive, setModalConsultationActive] = useState(false);

  return (
    <section className='py-24 flex flex-col items-center relative'>
            <h1 className='mb-5 font-Jost font-extrabold text-6xl md:text-5xl sm:max-w-[360px] sm:text-[40px]'>Аддитивные технологии</h1>
            <p className='text-2xl w-[870px] md:text-xl m:w-[721px] sm:text-sm sm:w-[300px]'>Создаем техническое решение</p>
            <p className='mb-14 text-2xl w-[870px] md:text-xl m:w-[721px] sm:w-[300px] sm:text-sm'>Организация производства порошковых материалов из металлических сплавов для промышленных 3D-принтеров</p>
            <div className='flex gap-10 sm:flex-col-reverse'>
                <div onClick={() => setModalBriefActive(true)}>
                  <Button isBlue={true}>Заполнить бриф</Button>
                </div>
                <div onClick={() => setModalConsultationActive(true)}>
                  <Button isWhite={true}>Заказать консультацию</Button>
                </div>
            </div>
            <div className='z-40'>
              <ModalQuiz active={modalBriefActive} setActive={setModalBriefActive}/>
              <ModalConsultation active={modalConsultationActive} setActive={setModalConsultationActive}/>
            </div>
    </section>
  )
}
