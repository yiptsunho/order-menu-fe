import React from 'react';
import ItemForm from '../../components/ItemForm';
import { CssBaseline, Container } from '@mui/material';

function EditMenu() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container height="100%">
                <h1>Edit Menu</h1>
                <ItemForm />
            </Container>
        </React.Fragment>
    )
};

export default EditMenu;
