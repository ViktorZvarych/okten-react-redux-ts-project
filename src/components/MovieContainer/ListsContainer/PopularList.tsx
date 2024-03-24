import {useEffect} from "react";

import css from "../MoviesList/MoviesList.module.css";
import {
    useAppDispatch,
    useAppSelector
} from "../../../hooks";
import {popularMoviesActions} from "../../../store";
import {Slider} from "../../Slider";

const PopularList = () => {
    const {popularMovies: {results: popularMovies}} = useAppSelector(state => state.popularMovies);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(popularMoviesActions.getPopularMovies())
    }, [dispatch]);

    return (
        <section className={css.moviesList}>
            <hr/>
            <h2>Most popular movies</h2>
            {
                popularMovies
                &&
                <Slider movies={popularMovies.slice(0, 12)}/>
            }
            <hr/>
        </section>
    );
};

export {PopularList};