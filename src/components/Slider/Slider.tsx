import {useEffect, useState} from "react";
import {useTransition, animated} from '@react-spring/web';

import css from './Slider.module.css';

interface ISlide {
    index: number;
    imageUrl: string;
}

const getDataByIndex = (data: ISlide[], initialIndex: number) => {
    const result: ISlide[] = [];
    let index = initialIndex;
    for (let i = 0; i < data.length; i++) {
        if (index >= data.length) { index = 0; }
        result.push(data[index]);
        if (result.length === data.length-1) { break; }
        index++;
    }

    return result;
};

const SLIDE_WIDTH = 250;
const X_TRANSITION = 350;
const SLIDING_INTERVAL = 3000;


import {FC} from "react";

interface IProps {
    slides: ISlide[];
}

const Slider: FC<IProps> = ({slides}) => {

    const [data, setData] = useState(getDataByIndex(slides, 0));

    useEffect(() => {
        let index = 1;
        setInterval(() => {
            setData(getDataByIndex(slides, index));
            index++;
            if (index >= slides.length) {
                index = 0;
            }
        }, SLIDING_INTERVAL);
    }, [slides]);

    const transitions = useTransition(
        data.map((item, i) => ({
            ...item,
            x: i * SLIDE_WIDTH,
            scale: i !== 1 ? 0.8 : 1,
        })),
        {
            from: ({ x }) => ({ x: x + X_TRANSITION, opacity: 0, scale: 0.6 }),
            enter: ({ x, scale }) => ({ x, opacity: 1, scale }),
            leave: ({ x}) => ({ x: x - X_TRANSITION, opacity: 0, scale: 0.6 }),
            update: ({ x, scale }) => ({ x, scale }),
            keys: ({index}) => index,
        }
    );

    return (
        <div className={css.Slider}>
            <div className={css.slides}>
                {transitions((style, item) => (
                    <animated.div
                        className={css.slide}
                        style={{ '--url': `url(${item.imageURL})`, ...style }}
                    />
                ))}
            </div>
        </div>
    );
};

export {Slider};