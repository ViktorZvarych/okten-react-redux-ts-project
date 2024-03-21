import {useEffect} from "react";

import css from "../MoviesList/MoviesList.module.css";
import {IMovie} from "../../../interfaces";
import {MoviesListCard} from "../MoviesListCard";
import {
    useAppDispatch,
    useAppSelector
} from "../../../hooks";
import {popularMoviesActions} from "../../../store";

const PopularList = () => {
    const {popularMovies: {results: popularMovies}} = useAppSelector(state => state.popularMovies);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(popularMoviesActions.getPopularMovies())
    }, [dispatch]);

    return (
        <section className={css.moviesList}>
            <h2>Most popular movies</h2>
            {
                popularMovies
                &&
                <div>
                    <ul className={css.container}>
                        {popularMovies.slice(0,8).map((movie: IMovie) =>
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

export {PopularList};