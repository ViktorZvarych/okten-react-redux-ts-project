import {FC} from "react";

import css from './MoviesList.module.css';
import {IMovie} from "../../../interfaces";
import {MoviesListCard} from "../MoviesListCard";
import {PaginationCustom} from "../PaginationCustom";

interface IProps {
    movies: IMovie[]
}

const MoviesList: FC<IProps> = ({movies}) => {

    return (
        <section className={css.moviesList}>
            {
                movies && typeof movies !== 'undefined'
                &&
                <div>
                    <ul>
                        {movies.map((movie: IMovie) =>
                            <li key={movie.id}>
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