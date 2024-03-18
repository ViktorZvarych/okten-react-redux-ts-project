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

    const scrollTopRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollTopRef.current) {
                window.scrollY > 200
                    ? (scrollTopRef.current.style.display = 'inline-block')
                    : (scrollTopRef.current.style.display = 'none');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollTopHandler = () => setPosition({ top: 0, left: 0 })

    return {scrollTopHandler, scrollTopRef}
}