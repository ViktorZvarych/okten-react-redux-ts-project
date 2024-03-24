import {FC, memo} from "react";

import css from './MoviesListCard.module.css';
import {IMovie} from "../../../interfaces";
import {StarsRating} from "../StarsRating";
import {urls} from "../../../constants";
import {useHandleNavigateToMovie, useScrollToTop} from "../../../hooks";

interface IProps {
    movie: IMovie,
    width: 300 | 500
}

const MoviesListCard: FC<IProps> = memo(function Greeting({ movie, width }) {
    const {title, vote_average, backdrop_path, id} = movie;

    const {scrollToTopHandler} = useScrollToTop();
    const navigateToMovie = useHandleNavigateToMovie();

    const handleNavigateAndScrollToTop = () => {
        scrollToTopHandler();
        navigateToMovie(id);
    }

    return (
        <div className={css.moviesListCard} onClick={handleNavigateAndScrollToTop}>
            <h3>{title[28] ? title.slice(0, 22) + '...' : title}</h3>
            <img src={urls.movies.backdrop(backdrop_path, width)} alt={title}/>
            <StarsRating stars={vote_average}/>
        </div>
    );
});

export {MoviesListCard};