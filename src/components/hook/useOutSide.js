import {useEffect, useRef, useState} from "react";

function useOutsideClick() {
    const [ selected, setSelected] = useState('');
    const myRef = useRef(null);

    const handleClickOutside = e => {
        if (myRef.current && !myRef.current.contains(e.target)) {
            console.log(333, 'outside', selected)
            setSelected('')        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    });

    return { selected, setSelected, myRef };
}

export default useOutsideClick;