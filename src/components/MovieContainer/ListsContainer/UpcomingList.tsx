import {useEffect} from "react";

import css from "../MoviesList/MoviesList.module.css";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {upcomingMoviesActions} from "../../../store";
import {Slider} from "../../Slider";

const UpcomingList = () => {
    const {upcomingMovies: {results: upcomingMovies}} = useAppSelector(state => state.upcomingMovies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(upcomingMoviesActions.getUpcomingMovies())
    }, [dispatch]);

    return (
        <section className={css.moviesList}>
            <hr/>
            <h2>Upcoming movies</h2>
            {
                upcomingMovies
                &&
                <Slider movies={upcomingMovies.slice(0, 8)}/>
            }
            <hr/>
        </section>
    );
};

export {UpcomingList};