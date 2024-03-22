import {FC} from "react";

import css from './YoutubePlayer.module.css'

interface IYoutubeProps {
    id: string | undefined;
}

const YoutubePlayer: FC<IYoutubeProps> = ({id}) => (
    <iframe
        className={css.youtube}
        title="Youtube player"
        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
        src={`https://youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&rel=0`}/>
);

export {YoutubePlayer}