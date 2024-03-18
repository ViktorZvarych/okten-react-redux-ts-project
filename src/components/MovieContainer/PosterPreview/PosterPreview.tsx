import {FC, useState} from "react";

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import {urls} from "../../../constants";
import css from './PosterPreview.module.css'

interface IProps {
    imgUrl: string
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const PosterPreview: FC<IProps> = ({imgUrl}) => {
    console.log('render PosterPreview');

    const [open, setOpen] = useState<boolean>(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={css.posterPreview}>
            <Button variant="outlined" color='error' onClick={handleClickOpen}>
                Poster
            </Button>

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogContent dividers>
                    <img width="80%" src={urls.movies.poster(imgUrl)} alt="poster"/>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogContent>
            </BootstrapDialog>

        </div>

    );
};

export {PosterPreview};