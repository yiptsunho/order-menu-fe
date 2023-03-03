import { MenuBook } from '@mui/icons-material';
import { Container, CssBaseline, Grid, Paper, Icon, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import React from 'react';
import 'chart.js/auto';
import RevenueChart from './RevenueChart';
import OrderSummaryChart from './OrderSummaryChart';
import CustomerChart from './CustomerChart';
import SideNavBar from '../../components/SideNavBar';
import TopSellingChart from './TopSellingChart';
import Dollar from '@mui/icons-material/AttachMoney';
import Money from '@mui/icons-material/Money';
import Person from '@mui/icons-material/Person';
import People from '@mui/icons-material/PeopleAlt';

function Dashboard() {
    // const labels = Utils.months({ count: 7 });
    const labels = ["January", "February", "March", "April", "May", "June", "July"]

    const KPIs = [
        { icon: <Dollar />, headline: "12k", subHeadline: "Total revenue today" },
        { icon: <Money />, headline: "100k", subHeadline: "Total revenue this month" },
        { icon: <Person />, headline: "346", subHeadline: "Total orders today" },
        { icon: <Dollar />, headline: "1970", subHeadline: "Total orders this month" }
    ]

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" height="100%">
                <h1>Good morning, Admin</h1>
                <h5>Here is what happeing in your restaurant</h5>
                <Container maxWidth="xl" disableGutters>
                    <Grid container rowSpacing={2}>
                        <Grid container item md={12} alignItems='stretch' spacing={3}>
                            {KPIs.map(KPI => {
                                return (
                                    <Grid item md={3} sm={6} display="flex">
                                        <Card sx={{ borderRadius: "12px", width: "-webkit-fill-available", height: "-webkit-fill-available", display: "flex", alignItems: "center" }}>
                                            <CardContent>
                                                <Grid container display="flex" alignItems="center" columnSpacing={1}>
                                                    <Grid item md={3} display="flex" justifyContent="center">
                                                        <Paper elevation="0" sx={{ borderRadius: "8px", padding: "8px" }}>
                                                            {KPI.icon}
                                                        </Paper>
                                                    </Grid>
                                                    <Grid container item md={8} display="flex" justifyContent="center">
                                                        <Grid container>
                                                            <Typography variant="h5" component="div">
                                                                {KPI.headline}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid container>
                                                            <Typography color="text.secondary">
                                                                {KPI.subHeadline}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                            })
                            }
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