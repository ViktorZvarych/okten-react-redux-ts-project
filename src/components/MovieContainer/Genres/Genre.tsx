import {FC} from "react";
import {useSearchParams} from "react-router-dom";

import {IGenre} from "../../../interfaces";

interface IProps {
    genre: IGenre;
}

const Genre: FC<IProps> = ({genre}) => {
    const {id} = genre;

    const [, setUrlParams] = useSearchParams();

    const handleSetParams = () => {
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
        <p onClick={handleSetParams}>{genre.name}</p>
    );
};

export {Genre};