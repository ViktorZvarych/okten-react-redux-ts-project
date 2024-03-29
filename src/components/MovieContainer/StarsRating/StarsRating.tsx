import {FC, useEffect, useState} from "react";
import {Rating} from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import css from './StarsRating.module.css';

interface IProps {
    stars: number
}

const StarsRating: FC<IProps> = ({stars}) => {
    const [rating, setRating] = useState(0)

    useEffect(() => {
        setRating(stars)
    }, [stars]);

    return (
        <div className={css.starsRating}>
            {rating && (
                <div className={css.container}>
                    <Rating readOnly style={{maxWidth: 220}} items={10} value={rating}/>

                    <p>{rating.toFixed(2)} of 10</p>
                </div>
            )}

        </div>
    );
};

export {StarsRating};