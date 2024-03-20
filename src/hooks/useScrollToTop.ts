import {useEffect, useRef, useState} from "react";

export const useScrollToTop = () => {
    const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

    useEffect(() => {
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        });
    }, [position]);

    const scrollToTopRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollToTopRef.current) {
                window.scrollY > 200
                    ? (scrollToTopRef.current.style.display = 'inline-block')
                    : (scrollToTopRef.current.style.display = 'none');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTopHandler = () => setPosition({ top: 0, left: 0 })

    return {scrollToTopHandler, scrollToTopRef}
}