import {FC} from "react";

import css from "./Videos.module.css";
import {IVideosResult} from "../../../interfaces";
import {formatDateStringService} from "../../../services";

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
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${key}`}
                        title="YouTube video player"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                }
                <p>Published on {formatDateStringService(published_at)}</p>
            </div>

    );
};

export {Video};