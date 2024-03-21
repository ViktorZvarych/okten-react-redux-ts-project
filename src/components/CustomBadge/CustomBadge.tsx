import {FC} from "react";

import css from './CustomBadge.module.css';

interface IProps {
    name: string
}

const CustomBadge: FC<IProps> = ({name}) => {
    console.log('render CustomBadge');

    return (

        <div className={css.container}>
            <span className={css.customBadge}>
                {name}
            </span>
        </div>
)
    ;
};

export {CustomBadge};