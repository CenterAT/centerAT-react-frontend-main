import React from 'react'
import { ReactComponent as CloseStepIcon } from '../../img/close-step-icon.svg';
import { ConsultationForm } from '../consultation-form';

export const ModalConsultation = ({
    active,
    setActive
}) => {
  return (
    <div 
      className={active ? 'display h-screen w-screen bg-bgModal fixed top-0 left-0 flex justify-center items-center' : 'hidden'}
      onClick={() => setActive(false)}
      >
        <div className='relative'>
        <button className='w-[35px] h-[35px] absolute top-10 right-10 z-50' onClick={() => setActive(false)}><CloseStepIcon /></button>
          <ConsultationForm />
        </div>
    </div>
  )
}
