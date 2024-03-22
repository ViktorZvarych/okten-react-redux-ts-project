import React, {useEffect, useState, useRef, FC} from "react";
import {useTransition, animated} from '@react-spring/web';

import css from './HeroBanner.module.css';

interface ISliderData {
    empty?: boolean;
    index?: number;
    name?: string;
    youtubeId?: string;
    url?: string
}

const ghibliData = [
    {empty: true, index: -1},
    {
        index: 0,
        name: 'Nausicaä of the Valley of the Wind',
        youtubeId: '6zhLBe319KE',
        url:
            'https://upload.wikimedia.org/wikipedia/en/0/09/Kaze_no_tani_no_Naushika.jpg'
    },
    {
        index: 1,
        name: 'Castle in the Sky',
        youtubeId: '8ykEy-yPBFc',
        url:
            'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Laputa.jpg/460px-Laputa.jpg'
    },
    {
        index: 2,
        name: 'Grave of the Fireflies',
        youtubeId: '4vPeTSRd580',
        url:
            'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Grave_of_the_Fireflies.jpg/500px-Grave_of_the_Fireflies.jpg'
    },
    {
        index: 3,
        name: 'My Neighbor Totoro',
        youtubeId: '92a7Hj0ijLs',
        url:
            'https://upload.wikimedia.org/wikipedia/en/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg'
    },
    {
        index: 4,
        name: "Kiki's Delivery Service",
        youtubeId: '4bG17OYs-GA',
        url:
            'https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Kiki%27s_Delivery_Service_%28Movie%29.jpg/400px-Kiki%27s_Delivery_Service_%28Movie%29.jpg'
    },
    {
        index: 5,
        name: 'Only Yesterday',
        youtubeId: 'OfkQlZArxw0',
        url:
            'https://upload.wikimedia.org/wikipedia/en/6/6f/%D0%95%D1%89%D1%91_%D0%B2%D1%87%D0%B5%D1%80%D0%B0.jpg'
    }
];

const ITEM_WIDTH = 185;
const ITEMS_IN_ROW = 5;
const ITEM_OFFSET = 250;

const getDataFromIndex = (data: ISliderData[], initialIndex: number, noEmpty = false) => {
    const result: ISliderData[] = [];
    let index = initialIndex;
    for (let i = 0; i < data.length; i++) {
        if (index === data.length) {
            index = 0;
        }

        if (noEmpty && data[index].empty) {
            index++;
            continue;
        }

        result.push(data[index]);

        if (result.length === ITEMS_IN_ROW) {
            break;
        }
        index++;
    }
    return result;
};

const getImageUrl = (youtubeId: string) => `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;

interface ISliderRowProps {
    index: number;
    focus: boolean;
    initialData: ISliderData[];
    selected: ISliderData;
    setSelected: React.Dispatch<React.SetStateAction<ISliderData>>;
}

interface CustomStyle {
    '--url'?: string;
}

const Row: FC<ISliderRowProps> = ({focus, index, initialData, setSelected}) => {
    const rowRef = useRef();
    const [data, setData] = useState(getDataFromIndex(initialData, 0));
    const moveData = useRef({index: 0, forward: true});

    const forwardData = () => {
        moveData.current = {
            forward: true,
            index:
                moveData.current.index === initialData.length - 1
                    ? 1
                    : moveData.current.index + 1
        };
        const selectedData = getDataFromIndex(
            initialData,
            moveData.current.index,
            true
        );

        setData(selectedData);
    };

    const backData = () => {
        if (data[0].empty) {
            return;
        }
        moveData.current = {
            forward: false,
            index:
                moveData.current.index === 0
                    ? initialData.length - 1
                    : moveData.current.index - 1
        };
        setData(
            getDataFromIndex(
                initialData,
                moveData.current.index,
                moveData.current.index > initialData.length - ITEMS_IN_ROW
            )
        );
    };

    const transitions = useTransition(data.map((item, i) => ({...item, x: ITEM_WIDTH * i + i * 20 - 90})), {
            from: {x: (item: { x: number }) => item.x + (moveData.current.forward ? ITEM_OFFSET : -ITEM_OFFSET)},
            enter: {x: (item: { x: number }) => item.x},
            leave: {x: (item: { x: number }) => item.x - (moveData.current.forward ? ITEM_OFFSET : -ITEM_OFFSET)},
            update: {x: (item: { x: number }) => item.x},
            keys: (item: { x: number }) => item.index.toString(),
            trail: 2
        }
    );

    const onkeyHandler = (e: React.KeyboardEvent) => {
        if (!focus) {
            return;
        }
        e.preventDefault();
        if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
            forwardData();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
            backData();
        }
    };

    useEffect(() => {
        focus && setSelected(data[1]);
        focus && rowRef.current?.focus();
    }, [focus, rowRef.current]);

    useEffect(() => setSelected(data[1]), [data, setSelected]);

    return (
        <div ref={rowRef} className={css.row} onKeyDown={onkeyHandler} tabIndex={index}>
            {transitions((style, item) => (
                <animated.div
                    className={css.item}
                    style={{'--url': `url(${item.url})`, ...style as any}}/>
            ))}
            {focus ? <div className={css.focusIndicator}/> : null}
        </div>
    );
};

interface IYoutubeProps {
    id: string | undefined;
}

const Youtube: FC<IYoutubeProps> = ({id}) => (
    <iframe
        className={css.youtube}
        title="Youtube player"
        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
        src={`https://youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&rel=0`}/>
);

interface ICoverProps {
    id: string | undefined;
    name: string | undefined;
}

const Cover: FC<ICoverProps> = ({id, name}) => {
    const [show, setShow] = useState(true);
    useEffect(() => {
        setShow(true);
        const timeout = setTimeout(() => setShow(false), 2000);

        return () => clearTimeout(timeout);
    }, [id]);

    const transition = useTransition([show], {
        from: {opacity: 0.3},
        enter: {opacity: 1},
        leave: {opacity: 0}
    });

    return transition((style, visible) =>
        visible ? (
            <animated.div
                className={css.cover}
                style={{'--url': `url(${getImageUrl(id)})`, ...style}}>
                <div className={css.coverName}>{name}</div>
            </animated.div>
        ) : null
    );
};

interface ISliderHeaderProps {
    selected: ISliderData;
}

const SliderHeader: FC<ISliderHeaderProps> = ({selected}) => {
    if (!selected && !selected.youtubeId) {
        return null;
    }

    return (
        <div className={css.header}>
            <Youtube id={selected.youtubeId}/>
            <Cover id={selected.youtubeId} name={selected.name}/>
        </div>
    );
};

const HeroBanner = () => {
    const [selected, setSelected] = useState({});
    const [focusIndex, setFocusIndex] = useState(0);
    const onkeyHandler = (e: React.KeyboardEvent) => {
        e.preventDefault();
        if (e.key === 'ArrowUp') {
            setFocusIndex(Math.max(0, focusIndex - 1));
        } else if (e.key === 'ArrowDown') {
            setFocusIndex(Math.min(2, focusIndex + 1));
        }
    };

    return (
        <div className={css.app} onKeyDown={onkeyHandler}>
            <SliderHeader selected={selected}/>
            <div className={css.rows}>
                <Row
                    index={1}
                    focus
                    initialData={ghibliData}
                    selected={selected}
                    setSelected={setSelected}
                />
            </div>
        </div>
    );
}

export {HeroBanner};