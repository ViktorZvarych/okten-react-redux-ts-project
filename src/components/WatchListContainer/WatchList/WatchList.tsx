import React, {useEffect} from "react";

import css from './WatchList.module.css';
import {EditWatchListButton} from '../index.ts';
import {useAppDispatch, useAppSelector, useScrollToTop} from "../../../hooks";
import {watchMoviesActions} from "../../../store";
import {urls} from "../../../constants";
import {useNavigate} from "react-router-dom";

const WatchList = () => {
    const {watchMovies} = useAppSelector(state => state.watchMovies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(watchMoviesActions.getWatchMoviesList())
    }, [dispatch]);

    const {scrollToTopHandler} = useScrollToTop();
    const navigate = useNavigate();


    const handleNavigateAndScrollToTop = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, iD: number) => {
        e.preventDefault();
        scrollToTopHandler();
        navigate(`/movies/info/${iD}`);
    }

    return (
        <ul className={css.WatchList}>
            {watchMovies.map(({id, title, backdrop_path}) =>
                <li key={id} onClick={(e) => handleNavigateAndScrollToTop(e, id)}>
                    <div className={css.container}>
                        <img src={urls.movies.backdrop(backdrop_path, 300)} alt={title}/>
                        <h3>{title}</h3>
                    </div>

                    <div className={css.heartContainer}>
                        <EditWatchListButton movieId={id}/>
                    </div>
                </li>
            )}
        </ul>
    );
};

export {WatchList};