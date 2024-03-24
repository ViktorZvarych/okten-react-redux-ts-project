import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {Multiselect} from "multiselect-react-dropdown";

import {IGenre} from "../../../interfaces";
import {moviesService} from "../../../services";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {genresActions} from "../../../store";

const GenresList = () => {

    const [, setUrlParams] = useSearchParams();

    const {genres} = useAppSelector(state => state.genres);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genresActions.getGenresNames())
    }, [dispatch]);

    useEffect(() => {
        console.log(genres)
    }, [genres]);

    const handleSelect = (selectedList: IGenre[]) => {
        const selectedIds = selectedList.map(item => item.id).join(',');

        setUrlParams(prev => {
            prev.set('with_genres', selectedIds);
            return prev;
        })
    }

    return (
        <div>
            {
                genres
                &&
                <Multiselect
                    displayValue='name'
                    placeholder='Select Genres'
                    onRemove={(selectedList) => handleSelect(selectedList)}
                    onSelect={(selectedList) => handleSelect(selectedList)}
                    options={genres.reduce((names, genre) => [...names, genre.name], [])}
                    style={{
                        multiselectContainer: {width: '300px', height: '3rem', marginBottom: '10px'},
                        option: {background: 'rgb(211, 47, 47)'},
                        chips: {background: 'rgb(211, 47, 47)'},
                        inputField: {fontSize: '16px', color: 'snow', height: '2rem', width: '130px'},
                        searchBox: {fontSize: '16px', minHeight: '55px', background: 'snow'}
                    }}
                />
            }
        </div>
    );
};

export {GenresList};