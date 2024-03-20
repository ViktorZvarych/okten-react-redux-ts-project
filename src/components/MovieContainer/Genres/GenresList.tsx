import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {Multiselect} from "multiselect-react-dropdown";

import {IGenre} from "../../../interfaces";
import {moviesService} from "../../../services";

const GenresList = () => {

    const [, setUrlParams] = useSearchParams();

    const [genres, setGenres] = useState<IGenre[] | null>(null);

    useEffect(() => {
        try {
            (async (): Promise<void> => {
                const {data} = await moviesService.getGenres();
                setGenres(data.genres);
            })()
        } catch (e) {
            console.log(e);
        }
    }, [])

    const handleSelect = (selectedList: IGenre[]) => {
        const selectedIds = selectedList.map(item => item.id).join(',');

        const localSelectedGenresIds = localStorage.getItem('selectedGenresIds');

        if (!selectedList && localSelectedGenresIds) {
            console.log(localSelectedGenresIds)
        } else {
            localStorage.setItem('selectedGenresIds', selectedIds)
        }

        setUrlParams(`genres=${selectedIds}`);
    }

    return (
        <div>
            {genres
                &&
                <Multiselect
                    displayValue='name'
                    placeholder='Select Genres'
                    onRemove={(selectedList) => handleSelect(selectedList)}
                    onSelect={(selectedList) => handleSelect(selectedList)}
                    options={genres}
                    style={{
                        multiselectContainer: {width: '300px', height:'3rem', marginBottom:'10px'},
                        option: {background: 'darkslategray'},
                        chips: {background: 'rgb(211, 47, 47)'},
                        inputField: {fontSize: '16px',color: 'snow',height:'2rem', width:'130px'},
                        searchBox: {fontSize: '16px',minHeight: '55px',background: 'snow'}
                    }}
                />
            }
        </div>
    );
};

export {GenresList};