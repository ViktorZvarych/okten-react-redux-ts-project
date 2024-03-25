import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {Multiselect} from "multiselect-react-dropdown";

import {IGenre} from "../../../interfaces";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {genresActions} from "../../../store";

const GenresList = () => {
    const [selectedValues, setSelectedValues] = useState<IGenre[]>([])

    const [, setUrlParams] = useSearchParams();

    const {genres, selectedGenres} = useAppSelector(state => state.genres);

    useEffect(() => {
        setSelectedValues(selectedGenres);

        const selectedIds = selectedGenres.map(item => item.id).join(',');

        selectedIds
            ? setUrlParams(prev => {
                prev.set('with_genres', selectedIds);
                return prev;
            })
            : setUrlParams(prev => {
                prev.delete('with_genres');
                console.log(selectedIds)
                return prev;
            })

    }, []);
    // Don`t(!) update dependencies array to be [selectedGenres, setUrlParams]


    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genresActions.getGenres())
    }, [dispatch]);

    const handleSelect = (selectedList: IGenre[]) => {
        const selectedIds = selectedList.map(item => item.id).join(',');

        selectedIds
            ? setUrlParams(prev => {
                prev.set('with_genres', selectedIds);
                return prev;
            })
            : setUrlParams(prev => {
                prev.delete('with_genres');
                console.log(selectedIds)
                return prev;
            })

        dispatch(genresActions.setGenresNames([...selectedList]));
    }

    return (
        <div>
            {
                genres
                &&
                <Multiselect
                    selectedValues={selectedValues}
                    displayValue='name'
                    placeholder='Select Genres'
                    onRemove={(selectedList) => handleSelect(selectedList)}
                    onSelect={(selectedList) => handleSelect(selectedList)}
                    options={genres}
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