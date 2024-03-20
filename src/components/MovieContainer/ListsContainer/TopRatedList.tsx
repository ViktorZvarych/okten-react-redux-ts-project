import {useEffect} from "react";

import css from "../MoviesList/MoviesList.module.css";
import {IMovie} from "../../../interfaces";
import {MoviesListCard} from "../MoviesListCard";
import {useAppDispatch, useAppSelector, useHandleNavigateAndScrollToTop} from "../../../hooks";
import {topRatedMoviesActions} from "../../../store";

const TopRatedList = () => {
    const {topRatedMovies: {results: topRatedMovies}} = useAppSelector(state => state.topRatedMovies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(topRatedMoviesActions.getTopRatedMovies())
    }, []);


    const handleNavigateAndScrollToTop = useHandleNavigateAndScrollToTop();

    return (
        <section className={css.moviesList}>
            <h2>Top rated movies</h2>
            {
                topRatedMovies
                &&
                <div>
                    <ul>
                        {topRatedMovies.slice(0,8).map((movie: IMovie) =>
                            <li onClick={handleNavigateAndScrollToTop}
                                key={movie.id}>
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