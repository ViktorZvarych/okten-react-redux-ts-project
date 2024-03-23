import {FC, useEffect, useState} from "react";

import css from './YoutubePlayer.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {videosActions, youTubeLinkActions} from "../../store";

interface IYoutubeProps {
    id: number | undefined;
}

const YoutubePlayer: FC<IYoutubeProps> = ({id}) => {
    const {videosObject: {results}} = useAppSelector(state => state.videosObject)

    const {youTubeLink} = useAppSelector(state => state.youTubLink)
    
    const dispatch = useAppDispatch();

    useEffect(() => {
        id && dispatch(videosActions.getVideos(id))
    }, [dispatch, id]);
    
    useEffect(() => {
        results && console.log(results);
        // dispatch(youTubeLinkActions.setYouTubeLink(results.filter(item => item?.site === 'YouTube')[0].key))
        }, [dispatch, results]);

    useEffect(() => {
        console.log(youTubeLink)
    }, [youTubeLink]);
    
    return (
        <div>
            {
                youTubeLink
                &&
                <p>{youTubeLink}</p>
                // <iframe
                //     className={css.youtube}
                //     title="Youtube player"
                //     sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
                //     src={youTubeLink}/>
            }
        </div>

    );
}

export {YoutubePlayer}