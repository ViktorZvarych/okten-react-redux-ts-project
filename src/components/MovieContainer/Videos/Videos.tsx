import {FC, useEffect} from "react";

import css from "./Videos.module.css";
import {Video} from "./Video.tsx";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {videosActions} from "../../../store";

interface IProps {
    id: number
}

const Videos: FC<IProps> = ({id}) => {
    const {videosObject: videoData} = useAppSelector(state => state.videosObject)

    const dispatch = useAppDispatch();

    useEffect(() => {
        id && dispatch(videosActions.getVideos(+id))
    }, [dispatch, id]);

    return (
        <div className={css.videos}>

            {
                videoData.results
                &&
                videoData.results
                    .filter(item => item.type === 'Trailer')
                    .slice(0,1)
                    .map(item => <Video
                        key={item.id} video={item}/>)
            }
        </div>
    );
};

export {Videos};