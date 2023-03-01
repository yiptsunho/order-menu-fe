import { MenuBook } from '@mui/icons-material';
import { Container, CssBaseline, Grid, Paper, Icon, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import React from 'react';
import 'chart.js/auto';
import RevenueChart from './RevenueChart';
import OrderSummaryChart from './OrderSummaryChart';
import CustomerChart from './CustomerChart';
import SideNavBar from '../../components/SideNavBar';
import TopSellingChart from './TopSellingChart';

function Dashboard() {
    // const labels = Utils.months({ count: 7 });
    const labels = ["January", "February", "March", "April", "May", "June", "July"]
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" height="100%">
                <h1>Good morning, Admin</h1>
                <h5>Here is what happeing in your restaurant</h5>
                <Container maxWidth="xl" disableGutters>
                    <Grid container rowSpacing={2}>
                        <Grid container item md={12} alignItems='stretch' spacing={3}>
                            <Grid item md={3} sm={6} display="flex">
                                <Card sx={{ borderRadius: "12px", width: "-webkit-fill-available", height: "-webkit-fill-available", display: "flex", alignItems: "center" }}>
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
                            <Grid item md={3} sm={6} display="flex">
                                <Card sx={{ borderRadius: "12px", width: "-webkit-fill-available", height: "-webkit-fill-available", display: "flex", alignItems: "center" }}>
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
                            <Grid item md={3} sm={6} display="flex">
                                <Card sx={{ borderRadius: "12px", width: "-webkit-fill-available", height: "-webkit-fill-available", display: "flex", alignItems: "center" }}>
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
                            <Grid item md={3} sm={6} display="flex">
                                <Card sx={{ borderRadius: "12px", width: "-webkit-fill-available", height: "-webkit-fill-available", display: "flex", alignItems: "center" }}>
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
                        <Grid container item md={12} alignItems='stretch' spacing={3}>
                            <Grid item md={6} display="flex">
                                <Card sx={{ borderRadius: "12px", width: "-webkit-fill-available", height: "-webkit-fill-available", display: "flex", alignItems: "center" }}>
                                    <CardContent>
                                        <Grid container maxWidth="xl">
                                            Revenue
                                            <RevenueChart />
                                        </Grid>
                                    </CardContent>
                                </Card>
                                {/* <Grid container>
                                    Revenue scatter chart
                                    <RevenueChart />
                                </Grid> */}
                            </Grid>
                            <Grid item md={6} display="flex">
                                <Card sx={{ borderRadius: "12px", width: "-webkit-fill-available", height: "-webkit-fill-available", display: "flex", alignItems: "center" }}>
                                    <CardContent>
                                        <Grid container maxWidth="xl">
                                            Takeaway Order Summary
                                            <OrderSummaryChart />
                                        </Grid>
                                    </CardContent>
                                </Card>
                                {/* <Grid container>
                                    Order summary breakdown pie chart
                                    <OrderSummaryChart />
                                </Grid> */}
                            </Grid>
                        </Grid>
                        <Grid container item md={12} alignItems='stretch' columnSpacing={3}>
                            <Grid item md={12} display="flex">
                                <Card sx={{ borderRadius: "12px", width: "-webkit-fill-available", height: "-webkit-fill-available", display: "flex", alignItems: "center" }}>
                                    <CardContent>
                                        <Grid container maxWidth="xl">
                                            New vs Returning Customers
                                            <CustomerChart />
                                        </Grid>
                                    </CardContent>
                                </Card>
                                {/* <Grid container>
                                    Now vs Returning customer double bar chart
                                    <CustomerChart />
                                </Grid> */}
                            </Grid>
                        </Grid>
                        <Grid container item md={12} alignItems='stretch'>
                            <Grid item md={12} display="flex">
                                <Card sx={{ borderRadius: "12px", width: "-webkit-fill-available", height: "-webkit-fill-available", display: "flex", alignItems: "center" }}>
                                    <CardContent>
                                        <Grid container>
                                            Top selling products
                                            <TopSellingChart />
                                        </Grid>
                                    </CardContent>
                                </Card>
                                {/* <Grid container>
                                    Top selling product table

                                </Grid> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </React.Fragment >
    )
};

export default Dashboard;