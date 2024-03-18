import {useEffect, useState} from "react";
import {IMoviesParams} from "../interfaces";

const useMovieParams = (moviesParams:IMoviesParams|undefined) => {
    const [urlParams, setUrlParams] = useState<string>('');

    useEffect(() => {
        const params = [];
        if (moviesParams){
            for (const [key, value] of Object.entries(moviesParams)) {
                if (value) {params.push(`&${key}=${value}`)}
            }
            setUrlParams(params.join(''))
        }
    }, [moviesParams]);

    return urlParams;
}

export {useMovieParams}