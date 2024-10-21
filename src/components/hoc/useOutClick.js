import {useEffect, useRef, useState} from "react";

function useOutsideClick() {
    const [ selected, setSelected] = useState('');
    const myRef = useRef();

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
            setSelected('')        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    });
        return { selected, setSelected, myRef };
}

export default useOutsideClick;