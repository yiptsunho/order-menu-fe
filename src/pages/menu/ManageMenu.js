import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, CssBaseline, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel'
import CustomDialog from '../../components/CustomDialog';
import { LIZARD_PHOTO } from '../../utils/Constants';
import 'react-multi-carousel/lib/styles.css';
// import { FiCard, FiCardActionArea, FiCardActions, FiCardContent, FiCardMedia } from "../../components/FullImageCard";

function ManageMenu() {
    const [openDialog, setOpenDialog] = useState(false);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" height='100%'>
                <h1>Manage your menus</h1>
                <Paper elevation={3} sx={{ borderRadius: "16px" }}>
                    <Container maxWidth="xl">
                        {/* <Grid container spacing={2} display="flex" paddingY={2} align-items="center" justify-content="space-between"> */}
                        <Grid paddingY={2}>
                            <Carousel
                                draggable={false}
                                responsive={responsive}
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                {/* <Card sx={{ position: "relative", marginX: "15px" }}>
                                    <CardActionArea sx={{ position: "relative" }}>
                                        <CardMedia
                                            media="picture"
                                            alt="Contemplative Reptile"
                                            image={LIZARD_PHOTO}
                                            title="Contemplative Reptile"
                                            sx={{ position: "absolute", top: "0", right: "0", height: "100%", width: "100%" }}
                                        />
                                        <CardContent sx={{ position: "relative", backgroundColor: "transparent", color: "#ffffff" }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Popular
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ position: "relative", marginX: "15px" }}>
                                    <CardActionArea sx={{ position: "relative" }}>
                                        <CardMedia
                                            media="picture"
                                            alt="Contemplative Reptile"
                                            image={LIZARD_PHOTO}
                                            title="Contemplative Reptile"
                                            sx={{ position: "absolute", top: "0", right: "0", height: "100%", width: "100%" }}
                                        />
                                        <CardContent sx={{ position: "relative", backgroundColor: "transparent", color: "#ffffff" }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Vegan
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ position: "relative", marginX: "15px" }}>
                                    <CardActionArea sx={{ position: "relative" }}>
                                        <CardMedia
                                            media="picture"
                                            alt="Contemplative Reptile"
                                            image={LIZARD_PHOTO}
                                            title="Contemplative Reptile"
                                            sx={{ position: "absolute", top: "0", right: "0", height: "100%", width: "100%" }}
                                        />
                                        <CardContent sx={{ position: "relative", backgroundColor: "transparent", color: "#ffffff" }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Healthy
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ position: "relative", marginX: "15px" }}>
                                    <CardActionArea sx={{ position: "relative" }}>
                                        <CardMedia
                                            media="picture"
                                            alt="Contemplative Reptile"
                                            image={LIZARD_PHOTO}
                                            title="Contemplative Reptile"
                                            sx={{ position: "absolute", top: "0", right: "0", height: "100%", width: "100%" }}
                                        />
                                        <CardContent sx={{ position: "relative", backgroundColor: "transparent", color: "#ffffff" }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Breakfast
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ position: "relative", marginX: "15px" }}>
                                    <CardActionArea sx={{ position: "relative" }}>
                                        <CardMedia
                                            media="picture"
                                            alt="Contemplative Reptile"
                                            image={LIZARD_PHOTO}
                                            title="Contemplative Reptile"
                                            sx={{ position: "absolute", top: "0", right: "0", height: "100%", width: "100%" }}
                                        />
                                        <CardContent sx={{ position: "relative", backgroundColor: "transparent", color: "#ffffff" }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Lunch
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ position: "relative", marginX: "15px" }}>
                                    <CardActionArea sx={{ position: "relative" }}>
                                        <CardMedia
                                            media="picture"
                                            alt="Contemplative Reptile"
                                            image={LIZARD_PHOTO}
                                            title="Contemplative Reptile"
                                            sx={{ position: "absolute", top: "0", right: "0", height: "100%", width: "100%" }}
                                        />
                                        <CardContent sx={{ position: "relative", backgroundColor: "transparent", color: "#ffffff" }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Dinner
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card> */}
                            </Carousel>
                        </Grid>
                        {/* <Grid container spacing={2} display="flex" paddingY={2} align-items="center" justify-content="space-between">
                            <Grid item md={3}>
                                <Typography variant="h6" paragraph align="center">
                                    Full Image Card
                                </Typography>
                                <Card sx={{ position: "relative" }}>
                                    <CardActionArea sx={{ position: "relative" }}>
                                        <CardMedia
                                            media="picture"
                                            alt="Contemplative Reptile"
                                            image={LIZARD_PHOTO}
                                            title="Contemplative Reptile"
                                            sx={{ position: "absolute", top: "0", right: "0", height: "100%", width: "100%" }}
                                        />
                                        <CardContent sx={{ position: "relative", backgroundColor: "transparent", color: "#ffffff" }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Popular
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                component="p"
                                                color="#CECFCA"
                                            >
                                                Lizards are a widespread group of squamate reptiles, with over
                                                6,000 species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item md={3}>
                                <Typography variant="h6" paragraph align="center">
                                    Full Image Card
                                </Typography>
                                <Card sx={{ position: "relative" }}>
                                    <CardActionArea sx={{ position: "relative" }}>
                                        <CardMedia
                                            media="picture"
                                            alt="Contemplative Reptile"
                                            image={LIZARD_PHOTO}
                                            title="Contemplative Reptile"
                                            sx={{ position: "absolute", top: "0", right: "0", height: "100%", width: "100%" }}
                                        />
                                        <CardContent sx={{ position: "relative", backgroundColor: "transparent", color: "#ffffff" }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Vegan
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                component="p"
                                                color="#CECFCA"
                                            >
                                                Lizards are a widespread group of squamate reptiles, with over
                                                6,000 species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item md={3}>
                                <Typography variant="h6" paragraph align="center">
                                    Full Image Card
                                </Typography>
                                <Card sx={{ position: "relative" }}>
                                    <CardActionArea sx={{ position: "relative" }}>
                                        <CardMedia
                                            media="picture"
                                            alt="Contemplative Reptile"
                                            image={LIZARD_PHOTO}
                                            title="Contemplative Reptile"
                                            sx={{ position: "absolute", top: "0", right: "0", height: "100%", width: "100%" }}
                                        />
                                        <CardContent sx={{ position: "relative", backgroundColor: "transparent", color: "#ffffff" }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Healthy
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                component="p"
                                                color="#CECFCA"
                                            >
                                                Lizards are a widespread group of squamate reptiles, with over
                                                6,000 species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item md={3}>
                                <Typography variant="h6" paragraph align="center">
                                    Full Image Card
                                </Typography>
                                <Card sx={{ position: "relative" }}>
                                    <CardActionArea sx={{ position: "relative" }}>
                                        <CardMedia
                                            media="picture"
                                            alt="Contemplative Reptile"
                                            image={LIZARD_PHOTO}
                                            title="Contemplative Reptile"
                                            sx={{ position: "absolute", top: "0", right: "0", height: "100%", width: "100%" }}
                                        />
                                        <CardContent sx={{ position: "relative", backgroundColor: "transparent", color: "#ffffff" }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Breakfast
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                component="p"
                                                color="#CECFCA"
                                            >
                                                Lizards are a widespread group of squamate reptiles, with over
                                                6,000 species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid> */}
                        <CustomDialog
                            open={openDialog}
                            setOpen={setOpenDialog}
                            title="Warning"
                            // content={`Are you sure you want to delete this item "${rows.find(row => row.id === itemId.current)?.name}" ?`}
                            rightLabel="Confirm"
                        // rightAction={deleteItem({ id: itemId.current })}
                        />
                    </Container>
                </Paper>
            </Container >
        </React.Fragment >
    )
};

export default ManageMenu;