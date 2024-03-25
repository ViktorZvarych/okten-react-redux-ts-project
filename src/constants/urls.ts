const baseURL = 'https://api.themoviedb.org/3';

const movie = '/movie';
const account = '/account';

const urls = {
    movies: {
        allMovies: `/discover${movie}`,
        genres: `/genre${movie}/list`,

        search: `search${movie}`,

        movieDetailsById: (id: number) => `${movie}/${id}`,
        backdrop: (imgUrl: string, width: number) => `https://image.tmdb.org/t/p/w${width}${imgUrl}`,
        poster: (imgUrl: string, width: number) => `https://image.tmdb.org/t/p/w${width}/${imgUrl}`,
        videos: (id: number) => `${movie}/${id}/videos`,

        youtube: (key: string) => `https://youtube.com/embed/${key}`,

        popularList: `${movie}/popular`,
        topRatedList: `${movie}/top_rated`,
        upcomingList: `${movie}/upcoming`,
    },
    account: {
        userInfo: (accountId: number)=>`${account}/${accountId}`,
        watchlist: (accountId: number) => `${account}/${accountId}/watchlist`,
    }
}

export {baseURL, urls}