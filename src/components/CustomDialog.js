import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Typography } from '@mui/material';
import CustomButton from './CustomButton';

function CustomDialog(props) {
    const { open, setOpen, title, content, leftLabel, leftAction, rightLabel, rightAction } = props;

    const defaultHandleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={rightAction ?? defaultHandleClose}
            PaperProps={{
                style: {
                    borderRadius: 16,
                    padding: '5px 10px'
                }
            }}
        >
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography
                        style={{ whiteSpace: 'pre-wrap' }}>
                        {content}
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Grid container justifyContent="flex-end" spacing={1}>
                    <Grid item md={4} sm={6} xs={12}>
                        <CustomButton
                            fullWidth
                            onClick={leftAction ?? defaultHandleClose}
                            description={leftLabel ?? 'Cancel'}
                        />
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <CustomButton
                            fullWidth
                            onClick={rightAction ?? defaultHandleClose}
                            description={rightLabel ?? 'OK'}
                        />
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog >
    );
}

export default CustomDialog;