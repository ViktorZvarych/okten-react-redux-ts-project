import {IMovie} from "../../../interfaces";
import css from "../MoviesList/MoviesList.module.css";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {useNavigate} from "react-router-dom";
import {useMoviesListsContext, useScrollToTop} from "../../../hooks";

const PopularList = () => {
    console.log('render PopularList');

    const moviesListsContext = useMoviesListsContext();
    const popularMoviesList = moviesListsContext?.popularMoviesList;

    const navigate = useNavigate();

    const {scrollTopHandler} = useScrollToTop();

    return (
        <section className={css.moviesList}>
            <h2>Most popular movies</h2>
            {
                popularMoviesList
                &&
                <div>
                    <ul>
                        {popularMoviesList.map((movie: IMovie) =>
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

export {PopularList};