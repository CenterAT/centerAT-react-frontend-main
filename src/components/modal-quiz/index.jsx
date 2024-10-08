import React from 'react'
import { BriefingForm } from '../briefing-form'
import { ReactComponent as CloseStepIcon } from '../../img/close-step-icon.svg';

export const ModalQuiz = ({
    active,
    setActive
}) => {
  return (
    <div 
      className={active ? 'display h-screen w-screen bg-bgModal fixed top-0 left-0 flex justify-center items-center' : 'hidden'}
      onClick={() => setActive(false)}
      >
            <button className='w-[35px] h-[35px] absolute top-10 right-10' onClick={() => setActive(false)}><CloseStepIcon /></button>
          <BriefingForm />
    </div>
  )
}
