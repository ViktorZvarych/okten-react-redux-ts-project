import {useScrollToTop} from "./useScrollToTop.ts";

export const useHandleNavigateAndScrollToTop = () => {
    const {scrollTopHandler} = useScrollToTop();

    return () => {
        navigate(`../info/${movie.id}`);
        scrollTopHandler()
    };
}