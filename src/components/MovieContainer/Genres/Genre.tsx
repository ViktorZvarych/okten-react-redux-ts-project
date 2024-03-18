import {FC} from "react";

import {IGenre} from "../../../interfaces";
import {useSearchParams} from "react-router-dom";


interface IProps {
    genre: IGenre;
}

const Genre: FC<IProps> = ({genre}) => {
    console.log('render Genre');

    const {id} = genre;

    const [urlParams, setUrlParams] = useSearchParams();

    const clickHandler = () => {
        setUrlParams(prev => {
            if (prev.get('with_genres')) {
                prev.set('with_genres', prev.get('with_genres') + ',' + id.toString());
            } else {
                prev.set('with_genres', id.toString());
            }
            return prev;
        });
    };

    return (
        <p onClick={clickHandler}>{genre.name}</p>
    );
};

export {Genre};