import {useEffect, useState} from "react";

export const useScrollToTop = () => {
    const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

    useEffect(() => {
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        });
    }, [position]);

    const scrollToTopHandler = () => setPosition({ top: 0, left: 0 })

    return {scrollToTopHandler}
}