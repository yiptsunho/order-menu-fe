import { Autocomplete, Box, Button, ButtonGroup, Container, CssBaseline, Grid, IconButton, TextField, ToggleButtonGroup, Tooltip, Paper, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import React, { createContext, useRef, useState } from 'react';
import CustomButton from '../../components/CustomButton';
import CustomDataTable from '../../components/CustomDataTable';
import Search from '@mui/icons-material/Search';
import { Delete, Edit } from '@mui/icons-material';
import itemList from '../../utils/Data.json'
import category from '../../utils/Category.json'
import { GridLinkOperator, gridRowsLoadingSelector, GridToolbarQuickFilter, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { useLocation, useNavigate } from 'react-router-dom';
import rows from '../../utils/TableData.json'
import CustomDialog from '../../components/CustomDialog';
import Carousel from 'react-multi-carousel'
import { POPULAR_PHOTO, VEGAN_PHOTO, HEALTHY_PHOTO, BREAKFAST_PHOTO, LUNCH_PHOTO, DINNER_PHOTO } from '../../utils/Constants';
import 'react-multi-carousel/lib/styles.css';
import '../../App.css'
import Export from '../../components/Export';

function QuickSearchToolbar() {
    return (
        // <Box
        //     sx={{ p: 0.5, pb: 0 }}
        // >
        <GridToolbarContainer>
            <GridToolbarQuickFilter
                quickFilterParser={(searchInput) =>
                    searchInput.split(',').map((value) => value.trim())
                }
                quickFilterFormatter={(quickFilterValues) => quickFilterValues.join(', ')}
                debounceMs={100} // time before applying the new quick filter value
            />
            <GridToolbarExport />
        </GridToolbarContainer>
        // </Box>
    )
}

function ManageItem() {
    const location = useLocation();
    const navigate = useNavigate();
    const [openDialog, setOpenDialog] = useState(false)
    const [filteredRows, setFilteredRows] = useState(rows)
    const printRef = useRef()
    const itemId = useRef()
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
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
    const tableColumns = [
        {
            field: 'id',
            headerName: 'Item Code',
            minWidth: 100,
            flex: 0.5,
            align: "center",
            headerAlign: 'center',
        },
        {
            field: 'name',
            headerName: 'Item Name',
            minWidth: 150,
            flex: 1,
            editable: false,
        },
        {
            field: 'originalPrice',
            headerName: 'Original Price',
            minWidth: 200,
            flex: 1,
            editable: false,
        },
        {
            field: 'image',
            headerName: 'Item image',
            minWidth: 110,
            flex: 1,
            editable: false,
        },
        {
            field: 'category',
            headerName: 'Category',
            minWidth: 150,
            flex: 1,
            editable: false,
            renderCell: ((params) => {
                return (
                    <Autocomplete
                        fullWidth
                        multiple
                        id="category"
                        options={category}
                        getOptionLabel={(option) => option.label}
                        value={params.row.category}
                        readOnly
                        renderInput={(params) => (
                            <TextField
                                fullWidth
                                {...params}
                            />
                        )}
                    />
                )
            })
        },
        {
            field: 'actions',
            headerName: 'Actions',
            minWidth: 100,
            flex: 0.5,
            align: "center",
            headerAlign: 'center',
            renderCell: ((params) => {
                return (
                    <Grid container sx={{ display: "grid" }} rowSpacing={1} paddingY={1}>
                        <Grid item>
                            <CustomButton
                                fullWidth={true}
                                startIcon={<Edit />}
                                description="Edit"
                                sx={{ paddingLeft: "0px", paddingRight: "0px" }}
                                onClick={() => handleEdit({ id: params.getValue(params.id, 'id') })}
                            >
                            </CustomButton>
                        </Grid>
                        <Grid item>
                            <CustomButton
                                fullWidth={true}
                                startIcon={<Delete />}
                                description="Delete"
                                color="error"
                                sx={{ paddingLeft: "0px", paddingRight: "0px" }}
                                onClick={() => handleDelete({ id: params.getValue(params.id, 'id') })}
                            >
                            </CustomButton>
                        </Grid>
                    </Grid >
                )
            })
        },
    ];

    const handleEdit = (params) => {
        navigate("/landing/edititem", { state: { id: params.id } })
    }

    const handleDelete = (params) => {
        itemId.current = params.id
        setOpenDialog(true)
    }
    // TODO: use real API
    const deleteItem = (params) => {
        console.log(params)
    }

    const handleFilter = (filterValue) => {
        let newRows = rows;
        newRows = newRows.filter(row => row.category.some(category => category.id === filterValue.id))
        setFilteredRows(newRows)
        console.log(newRows)
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" height='100%'>
                <h1>Manage your menu</h1>
                {/* TODO: Add a search field and a toggle button for filtering
                TODO: Add a add item button (and bulk add button) */}
                <Paper elevation={3} sx={{ borderRadius: "16px" }}>
                    <Container maxWidth="xl">
                        {/* <Grid container spacing={2} display="flex" paddingY={2} align-items="center" justify-content="space-between"> */}
                        <Grid paddingY={2} height="200px">
                            <Carousel
                                draggable={false}
                                responsive={responsive}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item"
                            >
                                <Card sx={{ position: "relative", height: "100%", borderRadius: "10px" }}>
                                    <CardActionArea sx={{ position: "relative", height: "100%" }} onClick={() => handleFilter({ "id": 2, "label": "Popular" })}>
                                        <CardMedia
                                            media="picture"
                                            alt="Contemplative Reptile"
                                            image={POPULAR_PHOTO}
                                            title="Contemplative Reptile"
                                            sx={{ position: "absolute", top: "0", right: "0", height: "100%", width: "100%" }}
                                            value={{ "id": 1, "label": "Vegan" }}
                                        />
                                        <CardContent sx={{ position: "relative", backgroundColor: "transparent", color: "#ffffff" }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Popular
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ position: "relative", height: "100%", borderRadius: "10px" }}>
                                    <CardActionArea sx={{ position: "relative", height: "100%" }} onClick={() => handleFilter({ "id": 1, "label": "Vegan" })}>
                                        <CardMedia
                                            media="picture"
                                            alt="Contemplative Reptile"
                                            image={VEGAN_PHOTO}
                                            title="Contemplative Reptile"
                                            sx={{ position: "absolute", top: "0", right: "0", height: "100%", width: "100%" }}
                                        />
                                        <CardContent sx={{ position: "relative", backgroundColor: "transparent", color: "#ffffff", display: "flex", justifyContent: "end" }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Vegan
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ position: "relative", height: "100%", borderRadius: "10px" }}>
                                    <CardActionArea sx={{ position: "relative", height: "100%" }} onClick={() => handleFilter({ "id": 5, "label": "Healthy" })}>
                                        <CardMedia
                                            media="picture"
                                            alt="Contemplative Reptile"
                                            image={HEALTHY_PHOTO}
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
                                <Card sx={{ position: "relative", height: "100%", borderRadius: "10px" }}>
                                    <CardActionArea sx={{ position: "relative", height: "100%" }} onClick={() => handleFilter({ "id": 3, "label": "BreakFast" })}>
                                        <CardMedia
                                            media="picture"
                                            alt="Contemplative Reptile"
                                            image={BREAKFAST_PHOTO}
                                            title="Contemplative Reptile"
                                            sx={{ position: "absolute", top: "0", right: "0", height: "100%", width: "100%" }}
                                        />
                                        <CardContent sx={{ position: "relative", backgroundColor: "transparent", color: "#ffffff", display: "flex", justifyContent: "end" }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Breakfast
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ position: "relative", height: "100%", borderRadius: "10px" }}>
                                    <CardActionArea sx={{ position: "relative", height: "100%" }} onClick={() => handleFilter({ "id": 6, "label": "Lunch" })}>
                                        <CardMedia
                                            media="picture"
                                            alt="Contemplative Reptile"
                                            image={LUNCH_PHOTO}
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
                                <Card sx={{ position: "relative", height: "100%", borderRadius: "10px" }}>
                                    <CardActionArea sx={{ position: "relative", height: "100%" }} onClick={() => handleFilter({ "id": 4, "label": "Dinner" })}>
                                        <CardMedia
                                            media="picture"
                                            alt="Contemplative Reptile"
                                            image={DINNER_PHOTO}
                                            title="Contemplative Reptile"
                                            sx={{ position: "absolute", top: "0", right: "0", height: "100%", width: "100%" }}
                                        />
                                        <CardContent sx={{ position: "relative", backgroundColor: "transparent", color: "#ffffff", display: "flex", justifyContent: "end" }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Dinner
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Carousel>
                        </Grid>
                        <Grid container rowSpacing={2} paddingY={3} paddingX="15px">
                            <Grid container item alignItems="center" spacing={2}>
                                <Grid item md={2} sm={4}>
                                    <Tooltip title="Add item">
                                        <CustomButton
                                            fullWidth={true}
                                            onClick={() => navigate("/landing/additem")}
                                            description="Add item"
                                        />
                                    </Tooltip>
                                </Grid>
                                <Grid item md={2} sm={4}>
                                    <Tooltip title="Add menu">
                                        <CustomButton
                                            fullWidth={true}
                                            onClick={() => navigate("/landing/addmenu")}
                                            description="Add menu"
                                        />
                                    </Tooltip>
                                </Grid>
                                <Grid item md={2} sm={4}>
                                    <Tooltip title="Edit menu">
                                        <CustomButton
                                            fullWidth={true}
                                            onClick={() => navigate("/landing/editmenu")}
                                            description="Edit menu"
                                        />
                                    </Tooltip>
                                </Grid>
                            </Grid>
                            <Grid container item alignItems="center" spacing={2}>
                                <Grid item md={2} sm={4}>
                                    <Tooltip title="Reset filter">
                                        <CustomButton
                                            fullWidth={true}
                                            onClick={() => setFilteredRows(rows)}
                                            description="Reset filter"
                                        />
                                    </Tooltip>
                                </Grid>
                                <Grid item md={2} sm={4}>
                                    <Tooltip title="Export as png">
                                        <CustomButton
                                            fullWidth={true}
                                            onClick={() => setFilteredRows(rows)}
                                            description="Export as png"
                                        />
                                    </Tooltip>
                                </Grid>
                                <Grid item md={2} sm={4}>
                                    <Tooltip title="Export as jpg">
                                        <CustomButton
                                            fullWidth={true}
                                            onClick={() => setFilteredRows(rows)}
                                            description="Export as jpg"
                                        />
                                    </Tooltip>
                                </Grid>
                            </Grid>
                            <Grid container item style={{ height: 600, width: '100%' }}>
                                <Grid container item style={{ display: 'flex', height: '100%' }}>
                                    <Grid container item style={{ flexGrow: 1 }}>
                                        <CustomDataTable
                                            rows={filteredRows}
                                            columns={tableColumns}
                                            initialState={{
                                                filter: {
                                                    filterModel: {
                                                        items: [],
                                                        quickFilterLogicOperator: GridLinkOperator.Or
                                                    }
                                                }
                                            }}
                                            components={{ Toolbar: QuickSearchToolbar }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <CustomDialog
                            open={openDialog}
                            setOpen={setOpenDialog}
                            title="Warning"
                            content={`Are you sure you want to delete this item "${rows.find(row => row.id === itemId.current)?.name}" ?`}
                            rightLabel="Confirm"
                            rightAction={deleteItem({ id: itemId.current })}
                        />
                    </Container>
                </Paper>
            </Container >
        </React.Fragment>
    )
};

export default ManageItem;