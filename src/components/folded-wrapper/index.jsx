import React, { useState } from 'react'

import { ReactComponent as ArrowFoldedUp } from '../../img/arrow-folded-up.svg'
import { ReactComponent as ArrowFoldedDown } from '../../img/arrow-folded-down.svg'

export const FoldedWrapper = () => {
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
      };
  return (
    <section onClick={() => setIsOpen(!isOpen)}>
        <button onClick={toggle} className=' px-16 text-black text-3xl font-bold bg-advGray w-full h-[100px] flex justify-between items-center '>
            Подробное описание
            { isOpen ? <ArrowFoldedDown /> : <ArrowFoldedUp /> }
            </button>
        {open && (
            <div className="toggle">
                <h4>toggle</h4>
            </div>
        )}
    </section>
  )
}
