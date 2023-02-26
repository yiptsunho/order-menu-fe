import { MenuBook } from '@mui/icons-material';
import { Container, CssBaseline, Grid, Paper, Icon, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import React from 'react';

function Dashboard() {

    return (
        <React.Fragment>
            <CssBaseline />
            <Container height="100%">
                <h1>Good morning, Admin</h1>
                <h5>Here is what happeing in your restaurant</h5>
                <Container disableGutters>
                    <Grid container rowSpacing={2}>
                        <Grid container item md={12} alignItems='stretch' columnSpacing={3}>
                            <Grid item md={3} display="flex">
                                <Card sx={{ borderRadius: "12px", height: "-webkit-fill-available", display: "flex", alignItems: "center" }}>
                                    <CardContent>
                                        <Grid container display="flex" alignItems="center" columnSpacing={1}>
                                            <Grid item md={3} display="flex" justifyContent="center">
                                                <Paper elevation="0" sx={{ background: "#FEF3F1", borderRadius: "8px", padding: "8px" }}>
                                                    <MenuBook />
                                                </Paper>
                                            </Grid>
                                            <Grid container item md={8} display="flex" justifyContent="center">
                                                <Grid container>
                                                    <Typography variant="h5" component="div">
                                                        12k
                                                    </Typography>
                                                </Grid>
                                                <Grid container>
                                                    <Typography color="text.secondary">
                                                        Total revenue today
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item md={3} display="flex">
                                <Card sx={{ borderRadius: "12px", height: "-webkit-fill-available", display: "flex", alignItems: "center" }}>
                                    <CardContent>
                                        <Grid container display="flex" alignItems="center" columnSpacing={1}>
                                            <Grid item md={3} display="flex" justifyContent="center">
                                                <MenuBook />
                                            </Grid>
                                            <Grid container item md={8} display="flex" justifyContent="center">
                                                <Grid container>
                                                    <Typography variant="h5" component="div">
                                                        100k
                                                    </Typography>
                                                </Grid>
                                                <Grid container>
                                                    <Typography color="text.secondary">
                                                        Total revenue this month
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item md={3} display="flex">
                                <Card sx={{ borderRadius: "12px", height: "-webkit-fill-available", display: "flex", alignItems: "center" }}>
                                    <CardContent>
                                        <Grid container display="flex" alignItems="center" columnSpacing={1}>
                                            <Grid item md={3} display="flex" justifyContent="center">
                                                <MenuBook />
                                            </Grid>
                                            <Grid container item md={8} display="flex" justifyContent="center">
                                                <Grid container>
                                                    <Typography variant="h5" component="div">
                                                        346
                                                    </Typography>
                                                </Grid>
                                                <Grid container>
                                                    <Typography color="text.secondary">
                                                        Total orders today
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item md={3} display="flex">
                                <Card sx={{ borderRadius: "12px", height: "-webkit-fill-available", display: "flex", alignItems: "center" }}>
                                    <CardContent>
                                        <Grid container display="flex" alignItems="center" columnSpacing={1}>
                                            <Grid item md={3} display="flex" justifyContent="center">
                                                <MenuBook />
                                            </Grid>
                                            <Grid container item md={8} display="flex" justifyContent="center">
                                                <Grid container>
                                                    <Typography variant="h5" component="div">
                                                        1970
                                                    </Typography>
                                                </Grid>
                                                <Grid container>
                                                    <Typography color="text.secondary">
                                                        Total orders this month
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </React.Fragment>
    )
};

export default Dashboard;