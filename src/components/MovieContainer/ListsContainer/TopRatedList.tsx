import {useEffect} from "react";

import css from "../MoviesList/MoviesList.module.css";
import {IMovie} from "../../../interfaces";
import {MoviesListCard} from "../MoviesListCard";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {topRatedMoviesActions} from "../../../store";

const TopRatedList = () => {
    const {topRatedMovies: {results: topRatedMovies}} = useAppSelector(state => state.topRatedMovies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(topRatedMoviesActions.getTopRatedMovies())
    }, [dispatch]);

    return (
        <section className={css.moviesList}>
            <h2>Top rated movies</h2>
            {
                topRatedMovies
                &&
                <div>
                    <ul className={css.container}>
                        {topRatedMovies.slice(0,8).map((movie: IMovie) =>
                            <li key={movie.id}>
                                <MoviesListCard movie={movie}/>
                            </li>)}
                    </ul>
                </div>
            }
            <hr/>
        </section>
    );
};

export {TopRatedList};