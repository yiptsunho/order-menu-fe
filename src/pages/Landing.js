import { Container } from '@mui/material';
import React from 'react';
import Dashboard from './Dashboard';

function Landing() {
    return (
        <Container maxWidth="lg">
            This is the landing page
            <Dashboard />
        </Container>
    )
};

export default Landing;
