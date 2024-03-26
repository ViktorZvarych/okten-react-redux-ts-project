import React, {FC, memo} from "react";

import css from './MoviesListCard.module.css';
import {IMovie} from "../../../interfaces";
import {StarsRating} from "../StarsRating";
import {urls} from "../../../constants";
import {useHandleNavigateToMovie, useScrollToTop} from "../../../hooks";
import {EditWatchListButton} from "../../WatchListContainer";
import errorImg from '../../../assets/errorImg.jpg';

interface IProps {
    movie: IMovie,
    width: 300 | 500
}

const MoviesListCard: FC<IProps> = memo(function Greeting({movie, width}) {
    const {title, vote_average, backdrop_path, id} = movie;

    const {scrollToTopHandler} = useScrollToTop();
    const navigateToMovie = useHandleNavigateToMovie();

    const handleNavigateAndScrollToTop = () => {
        scrollToTopHandler();
        navigateToMovie(id);
    }

    const addDefaultImg = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.src = errorImg;
    };

    return (
        <div className={css.moviesListCard} onClick={handleNavigateAndScrollToTop}>
            <h3>{title[28] ? title.slice(0, 22) + '...' : title}</h3>

            <div className={css.imgContainer}>
                <img
                    src={urls.movies.backdrop(backdrop_path, width)}
                    alt={title}
                    onError={addDefaultImg}
                />

                <span className={css.heartContainer}>
                    <EditWatchListButton movieId={id}/>
                </span>
            </div>
            <StarsRating stars={vote_average}/>
        </div>
    );
});

export {MoviesListCard};