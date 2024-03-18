import {FC, memo} from "react";

import css from './MoviesListCard.module.css';
import {IMovie} from "../../../interfaces";
import {StarsRating} from "../StarsRating/StarsRating";
import {urls} from "../../../constants";

interface IProps {
    movie: IMovie
}

const MoviesListCard: FC<IProps> = memo(function Greeting({ movie }) {
    console.log('render MoviesListCard');
    const {title, vote_average, backdrop_path } = movie;

    return (
        <div className={css.moviesListCard}>
            <h3>{title[28] ? title.slice(0, 28) + '...' : title}</h3>
            <img src={urls.movies.backdrop(backdrop_path, 300)} alt={title}/>
            <StarsRating stars={vote_average}/>
        </div>
    );
});

export {MoviesListCard};