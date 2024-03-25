import {useEffect} from "react";

import css from './WatchList.module.css';
import {EditWatchListButton} from '../index.ts';
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {watchMoviesActions} from "../../../store";
import {moviesService} from "../../../services";
import {urls} from "../../../constants";

const WatchList = () => {
    const {watchMovies} = useAppSelector(state => state.watchMovies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(watchMoviesActions.getWatchMoviesList())
    }, [dispatch]);

    return (
        <ul className={css.WatchList}>
            {watchMovies.map(({id, title, backdrop_path}) =>
                <li key={id}>
                    <div>
                        <img src={urls.movies.backdrop(backdrop_path, 300)} alt={title}/>
                        <h5>{title}</h5>
                    </div>

                    <EditWatchListButton movieId={id}/>
                </li>
            )}
        </ul>
    );
};

export {WatchList};