import {MovieInfo, PopularList, TopRatedList, UpcomingList} from "../../components";

const MovieInfoPage = () => {
    return (
        <div>
            <MovieInfo/>

            <TopRatedList/>
            <PopularList/>
            <UpcomingList/>
        </div>
    );
};

export {MovieInfoPage};