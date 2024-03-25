import {FC} from "react";

import css from "./Videos.module.css";
import {IVideosResult} from "../../../interfaces";
import {formatDateStringService} from "../../../services";
import {urls} from "../../../constants";

interface IProps {
    video: IVideosResult
}

const Video: FC<IProps> = ({video}) => {
    const {
        key,
        published_at,
        site
    } = video

    return (
            <div className={css.video}>
                {site === 'YouTube' &&
                    <iframe
                        className={css.iframe}
                        src={urls.movies.youtube(key)}
                        title="YouTube video player"
                        allow="accelerometer; clipboard-write; encrypted-media; web-share"
                        allowFullScreen>
                    </iframe>
                }
                <p>Published on {formatDateStringService(published_at)}</p>
            </div>

    );
};

export {Video};