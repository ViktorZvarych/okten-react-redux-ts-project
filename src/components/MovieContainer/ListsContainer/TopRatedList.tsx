import {useEffect} from "react";

import css from "../MoviesList/MoviesList.module.css";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {topRatedMoviesActions} from "../../../store";
import {Slider} from "../../Slider";

const TopRatedList = () => {
    const {topRatedMovies: {results: topRatedMovies}} = useAppSelector(state => state.topRatedMovies);
    const dispatch = useAppDispatch();



    useEffect(() => {
        dispatch(topRatedMoviesActions.getTopRatedMovies())
    }, [dispatch]);

    return (
        <section className={css.moviesList}>
            <hr/>
            <h2>Top rated movies</h2>
            {
                topRatedMovies
                &&
                <Slider
                    movies={topRatedMovies.slice(0,8)}
                />
            }
            <hr/>
        </section>
    );
};

export {TopRatedList};