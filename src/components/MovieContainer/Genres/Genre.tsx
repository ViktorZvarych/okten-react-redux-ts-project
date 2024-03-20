import React, {FC} from "react";

import {IGenre} from "../../../interfaces";

interface IProps {
    genre: IGenre,
    selectedGenresIds: string[],
    setSelectedGenresIds: React.Dispatch<React.SetStateAction<string[]>>
}

const Genre: FC<IProps> = ({genre, selectedGenresIds, setSelectedGenresIds}) => {
    const {id, name} = genre;


    const handleSelectGenresId = () => {
        console.log('click');
        const selectedId = id.toString();
        selectedGenresIds.includes(selectedId)
        ? setSelectedGenresIds(prev => prev.filter(id => id !== selectedId))
        : setSelectedGenresIds(prev => [...prev, selectedId])
    }

    return (
        <span onClick={handleSelectGenresId}>{name}</span>
    );
};

export {Genre};