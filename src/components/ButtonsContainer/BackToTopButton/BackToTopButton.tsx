import {FC} from "react";

import css from './BackToTopButton.module.css';
import {useScrollToTop} from '../../../hooks'

const BackToTopButton: FC = () => {
    const {scrollToTopHandler, scrollToTopRef} = useScrollToTop();

    return (
        <>
            <span onClick={scrollToTopHandler} className={css.circle} ref={scrollToTopRef}>
                To top
            </span>
        </>
    );
};

export { BackToTopButton };