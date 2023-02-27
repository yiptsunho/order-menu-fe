import React from 'react';
import ItemForm from '../../components/ItemForm';
import { CssBaseline, Container, Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';

function AddMenu() {

    return (
        <React.Fragment>
            <CssBaseline />
            <Container height="100%">
                <h1>Add Menu</h1>
                <Paper elevation={3} sx={{ borderRadius: "16px" }}>
                    <ItemForm />
                </Paper>
            </Container>
        </React.Fragment>
    )
};

export default AddMenu;
