import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

const useGetMovieParams = () => {
    const [urlSearchParams,] = useSearchParams();

    const [urlParams, setUrlParams] = useState<string>('');

    useEffect(() => {
        const params = [];

        for (const [key, value] of urlSearchParams.entries()) {
            params.push(`${key}=${value}`);
        }

        setUrlParams(params.join('&'));

    }, [urlSearchParams]);

    return urlParams;
}

export {useGetMovieParams}