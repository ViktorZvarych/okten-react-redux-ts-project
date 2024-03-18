import {FC} from "react";

import css from './MoviesList.module.css';
import {IMovie} from "../../../interfaces";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {PaginationCustom} from "../PaginationCustom/PaginationCustom";
import {useNavigate} from "react-router-dom";

interface IProps {
    movies: IMovie[]
}

const MoviesList: FC<IProps> = ({movies}) => {
    console.log('render MoviesList');

    const navigate = useNavigate();

    return (
        <section className={css.moviesList}>
            {/*<h2>MoviesList</h2>*/}
            {
                movies && typeof movies !== 'undefined'
                &&
                <div>
                    <ul>
                        {movies.map((movie: IMovie) =>
                            <li onClick={() => navigate(`../info/${movie.id}`)}
                                key={movie.id}>
                                <MoviesListCard movie={movie}/>
                            </li>)}
                    </ul>

                    {movies[19] && <PaginationCustom/>}
                </div>
            }
            <hr/>
        </section>
    );
};

export {MoviesList};