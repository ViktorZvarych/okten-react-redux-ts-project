import {FC} from "react";

import css from './BackToTopButton.module.css';
import {useScrollToTop} from '../../../hooks'

const BackToTopButton: FC = () => {
    console.log('render BackToTopButton');

    const {scrollTopHandler, scrollTopRef} = useScrollToTop();

    return (
        <>
            <span onClick={scrollTopHandler} className={css.circle} ref={scrollTopRef}>
                To top
            </span>
        </>
    );
};

export { BackToTopButton };