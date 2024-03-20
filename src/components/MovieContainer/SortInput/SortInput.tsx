import {useSearchParams} from "react-router-dom";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';

const SortInput = () => {
    const [, setUrlParams] = useSearchParams();

    const handleChange = (event: SelectChangeEvent) => {
        setUrlParams(`sort_by=${event.target.value}`);
    };

    return (
        <Box sx={{minWidth: 120, maxWidth: 300}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={''}
                    label="Sort"
                    onChange={handleChange}
                >
                    <MenuItem value={'popularity.asc'}>↑Popularity (from min to max)</MenuItem>
                    <MenuItem value={'popularity.desc'}>↓Popularity (from max to min)</MenuItem>
                    <MenuItem value={'title.asc'}>↑Title (from A to Z)</MenuItem>
                    <MenuItem value={'title.desc'}>↓Title (from Z to A)</MenuItem>
                    <MenuItem value={'vote_average.asc'}>↑Rating (from min to max)</MenuItem>
                    <MenuItem value={'vote_average.desc'}>↓Rating (from max to min)</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export {SortInput};