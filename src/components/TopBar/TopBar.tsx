import {FC} from "react";

import css from './TopBar.module.css';
import {GenresList, SortInput} from "../MovieContainer";

interface IProps {
}

const TopBar: FC<IProps> = () => {

    return (
        <div className={css.bar}>
            <SortInput/>
            <GenresList/>
        </div>
    );
};

export {TopBar};