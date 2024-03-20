import {useEffect, useState} from "react";
import {useLocation, useSearchParams} from "react-router-dom";

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import {IGenre, IGenres} from "../../../interfaces";
import {moviesService} from "../../../services";
import {Genre} from "./Genre";

const GenresList  = () => {
    const [genresArr, setGenresArr] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof genresArr>) => {
        const {
            target: { value },
        } = event;

        setGenresArr(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [, setUrlParams] = useSearchParams();

    useEffect(() => {
        setUrlParams(prev => {
            if (genresArr[0]) {
                prev.set('with_genres', genresArr.join(','));
            } else {
                prev.delete('with_genres');
            }
            return prev;
        });
    }, [setUrlParams, genresArr])

    const {pathname, search} = useLocation();

    useEffect(() => {
        if(!search || pathname !== '/movies/list') {
            setGenresArr([])
        }
    }, [pathname, search]);

    const [genres, setGenres] = useState<IGenres | null>(null);

    useEffect(() => {
        try {
            (async (): Promise<void> => {
                const {data} = await moviesService.getGenres();
                setGenres(data);
            })()
        } catch (e) {
            console.log(e);
        }
    }, [])

    return (
            <div>
                <FormControl sx={{m: 1, minWidth: 200}}>
                    <InputLabel id="multiple-chip-label">Genres</InputLabel>
                    <Select
                        labelId="multiple-chip-label"
                        id="multiple-chip"
                        multiple
                        value={genresArr}
                        onChange={handleChange}
                        input={<OutlinedInput id="select-multiple-chip" label="Chip"/>}
                    >
                        {genres && genres.genres.map((genre: IGenre) => (
                            <MenuItem
                                key={genre.id}
                                value={genre.id}
                                title={genre.name}
                            >
                                <Genre key={genre.id} genre={genre}/>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
    );
};

export {GenresList};