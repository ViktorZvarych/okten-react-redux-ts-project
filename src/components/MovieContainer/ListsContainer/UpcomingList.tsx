import css from "../MoviesList/MoviesList.module.css";
import {IMovie} from "../../../interfaces";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {useNavigate} from "react-router-dom";
import {useMoviesListsContext, useScrollToTop} from "../../../hooks";

const UpcomingList = () => {
    console.log('render UpcomingList');

    const moviesListsContext = useMoviesListsContext();
    const upcomingMoviesList = moviesListsContext?.upcomingMoviesList;

    const navigate = useNavigate();

    const {scrollTopHandler} = useScrollToTop();

    return (
        <section className={css.moviesList}>
            <h2>Upcoming movies</h2>
            {
                upcomingMoviesList
                &&
                <div>
                    <ul>
                        {upcomingMoviesList.map((movie: IMovie) =>
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

export {UpcomingList};