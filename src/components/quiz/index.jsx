import React from 'react'
import { Button } from '../button'

const progressFilled = 'bg-progressDark'

export const Quiz = ({
  isProgressed = false
}) => {
  return (
    <div className=' absolute -bottom-36 p-12 w-[580px] h-[694px] bg-white flex flex-col items-center rounded shadow-quiz'>
      <span className='mb-10 text-3xl'>Давайте знакомиться!</span>
                <div className='mb-10 flex gap-3'>
                    <div className={`w-[60px] h-1 rounded-full bg-progressDark ${isProgressed && progressFilled}`}></div>
                    <div className={`w-[60px] h-1 rounded-full bg-progressLight`}></div>
                    <div className={`w-[60px] h-1 rounded-full bg-progressLight`}></div>
                    <div className={`w-[60px] h-1 rounded-full bg-progressLight`}></div>
                    <div className={`w-[60px] h-1 rounded-full bg-progressLight`}></div>
                    <div className={`w-[60px] h-1 rounded-full bg-progressLight`}></div>
                </div>
                <span className='mb-8 text-xl'>Заполните бриф,<br />чтобы мы помогли Вам с задачей</span>
                <form action="submit" className='flex flex-col items-center gap-8'>
                    <input type="text" className='p-4 w-[374px] h-[60px] rounded-sm bg-mainGray text-darkGray border-none' placeholder="Имя" />
                    <input type="text" className='p-4 w-[374px] h-[60px] rounded-sm bg-mainGray text-darkGray border-none' placeholder="+7 (___) ___-__-__" />
                    <input type="text" className='p-4 w-[374px] h-[60px] rounded-sm bg-mainGray text-darkGray border-none' placeholder="Почта" />
                    <Button isBlack={true}>Следующий шаг</Button>
                </form>
    </div>
  )
}
