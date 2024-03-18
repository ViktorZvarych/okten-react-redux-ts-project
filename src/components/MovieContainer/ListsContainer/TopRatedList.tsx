import {IMovie} from "../../../interfaces";
import css from "../MoviesList/MoviesList.module.css";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {useNavigate} from "react-router-dom";
import {useMoviesListsContext, useScrollToTop} from "../../../hooks";

const TopRatedList = () => {
    console.log('render TopRatedList');

    const moviesListsContext = useMoviesListsContext();
    const topRatedMoviesList = moviesListsContext?.topRatedMoviesList;

    const navigate = useNavigate();

    const {scrollTopHandler} = useScrollToTop();

    return (
        <section className={css.moviesList}>
            <h2>Top rated movies</h2>
            {
                topRatedMoviesList
                &&
                <div>
                    <ul>
                        {topRatedMoviesList.map((movie: IMovie) =>
                            <li onClick={() => {
                                navigate(`../info/${movie.id}`);
                                scrollTopHandler()
                            }}
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