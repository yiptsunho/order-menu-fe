import React from 'react';
import ItemForm from '../../components/ItemForm';
import { CssBaseline, Container } from '@mui/material';

function AddMenu() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container height="100%">
                <h1>Add Menu</h1>
                <ItemForm />
            </Container>
        </React.Fragment>
    )
};

export default AddMenu;
