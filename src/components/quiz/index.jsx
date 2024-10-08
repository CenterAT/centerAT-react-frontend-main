import React from 'react'
import { Button } from '../button'
import { NavLink } from 'react-router-dom'

const progressFilled = 'bg-progressDark'

export const Quiz = ({
  isProgressed = false,
  isHome = false
}) => {
  return (
    <div 
      onClick={e => e.stopPropagation()}
      className={`absolute ${isHome && '-bottom-36'} p-12 w-[580px] h-[694px] bg-white flex flex-col items-center rounded shadow-quiz
                sm:relative sm:bottom-0 sm:w-full sm:p-5`}
    >
      <span className='mb-10 text-3xl sm:text-2xl'>Давайте знакомиться!</span>
                <div className='mb-10 flex gap-3'>
                    <div className={`w-[60px] h-1 rounded-full bg-progressDark ${isProgressed && progressFilled} sm:w-[40px]`}></div>
                    <div className={`w-[60px] h-1 rounded-full bg-progressLight sm:w-[40px]`}></div>
                    <div className={`w-[60px] h-1 rounded-full bg-progressLight sm:w-[40px]`}></div>
                    <div className={`w-[60px] h-1 rounded-full bg-progressLight sm:w-[40px]`}></div>
                    <div className={`w-[60px] h-1 rounded-full bg-progressLight sm:w-[40px]`}></div>
                    <div className={`w-[60px] h-1 rounded-full bg-progressLight sm:w-[40px]`}></div>
                </div>
                <span className='mb-8 text-xl sm:text-base'>Заполните бриф,<br />чтобы мы помогли Вам с задачей</span>
                <form action="submit" className='flex flex-col items-center gap-8'>
                    <input type="text" className='p-4 w-[374px] h-[60px] rounded-sm bg-mainGray text-darkGray border-none sm:w-[300px] sm:h-[48px] ' placeholder="Имя" />
                    <input type="text" className='p-4 w-[374px] h-[60px] rounded-sm bg-mainGray text-darkGray border-none sm:w-[300px] sm:h-[48px] ' placeholder="+7 (___) ___-__-__" />
                    <input type="text" className='p-4 w-[374px] h-[60px] rounded-sm bg-mainGray text-darkGray border-none sm:w-[300px] sm:h-[48px] ' placeholder="Почта" />
                </form>
                <NavLink to='/quiz-1'>
                    <Button isBlack={true}>Следующий шаг</Button>
                </NavLink>
    </div>
  )
}
