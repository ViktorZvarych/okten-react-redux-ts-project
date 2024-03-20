import css from './Loader.module.css';
import {useAppSelector} from "../../hooks";

const Loader = () => {
    const {isLoading} = useAppSelector(state => state.loadingReducer);

    return (
        <div>
            {
                isLoading
                &&
                <div className={css.loader}></div>
            }
        </div>
    )
        ;
};

export {Loader};