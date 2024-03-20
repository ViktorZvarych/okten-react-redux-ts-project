import {FC} from "react";
import {useNavigate} from "react-router-dom";

import css from './MoviesList.module.css';
import {IMovie} from "../../../interfaces";
import {MoviesListCard} from "../MoviesListCard";
import {PaginationCustom} from "../PaginationCustom";

interface IProps {
    movies: IMovie[]
}

const MoviesList: FC<IProps> = ({movies}) => {
    const navigate = useNavigate();

    const handleNavigate = () => navigate(`../info/${movie.id}`)

    return (
        <section className={css.moviesList}>
            {
                movies && typeof movies !== 'undefined'
                &&
                <div>
                    <ul>
                        {movies.map((movie: IMovie) =>
                            <li onClick={handleNavigate}
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