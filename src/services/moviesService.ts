import {apiService} from "./apiService";
import {urls} from "../constants";
import {IGenres, IMovieDetails, IMovies, IVideosObject} from "../interfaces";
import {IRes} from "../types/axiosResponseType";

const moviesService = {
    getMovies: (params: string): IRes<IMovies> => apiService.get(urls.movies.allMovies + `?${params}`),
    getGenres: (): IRes<IGenres> => apiService.get(urls.movies.genres),

    searchMovie: (params: string) => apiService.get(urls.movies.search + `?${params}`),

    getMovieDetailsById: (id: number): IRes<IMovieDetails> => apiService.get(urls.movies.movieDetailsById(id)),
    getVideos: (id: number): IRes<IVideosObject> => apiService.get(urls.movies.videos(id)),
    getReviews: (id: number): IRes<[]> => apiService.get(urls.movies.reviews(id)),

    getPopularList: (): IRes<IMovies> => apiService.get(urls.movies.popularList),
    getTopRatedList: (): IRes<IMovies> => apiService.get(urls.movies.topRatedList),
    getUpcomingList: (): IRes<IMovies> => apiService.get(urls.movies.upcomingList)
}

export {moviesService};