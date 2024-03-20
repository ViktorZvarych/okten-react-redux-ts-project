import {useEffect} from "react";

import css from "../MoviesList/MoviesList.module.css";
import {IMovie} from "../../../interfaces";
import {MoviesListCard} from "../MoviesListCard";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {upcomingMoviesActions} from "../../../store";

const UpcomingList = () => {
    const {upcomingMovies: {results: upcomingMovies}} = useAppSelector(state => state.upcomingMovies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(upcomingMoviesActions.getUpcomingMovies())
    }, [dispatch]);

    return (
        <section className={css.moviesList}>
            <h2>Upcoming movies</h2>
            {
                upcomingMovies
                &&
                <div>
                    <ul>
                        {upcomingMovies.slice(0,8).map((movie: IMovie) =>
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

export {UpcomingList};