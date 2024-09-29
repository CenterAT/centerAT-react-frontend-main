import React from 'react'
import { Quiz } from '../quiz'

export const ModalQuiz = ({
    active,
    setIsActive
}) => {
  return (
    <div className={active ? 'display absolute top-[700px] left-[500px]' : 'hidden'}>
        <Quiz />
    </div>
  )
}
