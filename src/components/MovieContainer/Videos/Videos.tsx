import {FC, useEffect, useState} from "react";

import css from "./Videos.module.css";
import {IVideosObject} from "../../../interfaces";
import {moviesService} from "../../../services";
import {Video} from "./Video.tsx";

interface IProps {
    id: number
}

const Videos: FC<IProps> = ({id}) => {
    const [videoData, setVideoData] = useState<IVideosObject | null>(null);

    useEffect(() => {
        try {
            (async (): Promise<void> => {
                const {data} = await moviesService.getVideos(id);
                setVideoData(data);
            })()
        } catch (e) {
            console.log(e);
        }
    }, [id])

    return (
        <div className={css.videos}>
            <h3>Trailers</h3>
            {videoData &&
                videoData.results
                    .filter(item => item.type === 'Trailer')
                    .map(item => <Video
                    key={item.id} video={item}/>)}
        </div>
    );
};

export {Videos};