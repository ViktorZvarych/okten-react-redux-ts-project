import {IMoviesParams} from "./moviesParamsInterface";


export interface IMovieContext {
    moviesParams: IMoviesParams;
    changeMoviesParams: (movieKey: keyof IMoviesParams, value: string) => void
}