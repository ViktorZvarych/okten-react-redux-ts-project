import {FC} from "react";

import css from './MoviesList.module.css';
import {IMovie} from "../../../interfaces";
import {MoviesListCard} from "../MoviesListCard";
import {CustomPagination} from "../CustomPagination";

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
                    <ul className={css.container}>
                        {movies.map((movie: IMovie) =>
                            <li key={movie.id}>
                                <MoviesListCard movie={movie} width={300}/>
                            </li>)}
                    </ul>

                    {movies[19] && <CustomPagination/>}
                </div>
            }
            <hr/>
        </section>
    );
};

export {MoviesList};