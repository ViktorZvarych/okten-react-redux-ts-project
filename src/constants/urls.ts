const baseURL = 'https://api.themoviedb.org/3';

const movie = '/movie'

const urls = {
    movies: {
        allMovies: `/discover${movie}`,
        genres: `/genre${movie}/list`,

        search: `search${movie}`,

        movieDetailsById: (id: number) => `${movie}/${id}`,
        backdrop: (imgUrl: string, width: number) => `https://image.tmdb.org/t/p/w${width}${imgUrl}`,
        poster: (imgUrl: string) => `https://image.tmdb.org/t/p/w500/${imgUrl}`,
        videos: (id: number) => `${movie}/${id}/videos`,
        reviews: (id: number) => `${movie}/${id}/reviews`,
        rating: (id: number) => `${movie}/${id}/rating`,

        youtubeLink: (id: number) => `https://youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&rel=0`,


        popularList: `${movie}/popular`,
        topRatedList: `${movie}/top_rated`,
        upcomingList: `${movie}/upcoming`,
    },
}

export {baseURL, urls}