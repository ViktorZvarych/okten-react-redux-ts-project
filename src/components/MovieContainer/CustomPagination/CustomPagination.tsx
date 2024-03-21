import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import Pagination from '@mui/material/Pagination';

import css from './CustomPagination.module.css';


const CustomPagination = () => {
    const [currentPage, setCurrentPage] = useState<string>('');

    const [, setUrlParams] = useSearchParams();

    useEffect(() => {
        if (currentPage) {
            setUrlParams(prev => {
                prev.set('page', currentPage.toString());
                return prev
            })
        }
    }, [currentPage, setUrlParams]);

    const handleChange = (_: React.ChangeEvent<unknown>,
                          pageCurrent: number) => {
        setCurrentPage(pageCurrent.toString());
    }

    return (
        <div className={css.pagination}>
            <Pagination
                count={500}
                color="primary"
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
                sx={{color: '#fff'}}
            />
        </div>
    );
};

export {CustomPagination};