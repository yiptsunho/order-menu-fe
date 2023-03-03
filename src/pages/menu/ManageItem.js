import { Autocomplete, Container, CssBaseline, Grid, TextField, Tooltip, Paper, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import React, { createContext, useCallback, useEffect, useRef, useState } from 'react';
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
import { deleteItem, getAllItems, getAllMenus } from '../../apis/MenuApi';
import { toPng, toJpeg } from 'html-to-image'
import { ALL_ITEM } from '../../utils/ApiConst';

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
    const [menus, setMenus] = useState([])
    const [items, setItems] = useState([])
    const [filteredRows, setFilteredRows] = useState(items)
    const printRef = useRef(null)
    const itemId = useRef()

    useEffect(() => {
        getAllMenus(setMenus)
        getAllItems(setItems)
    }, [])

    useEffect(() => {
        if (items.length > 0) {
            setFilteredRows(items)
        }
    }, [items])

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
            field: '_id',
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
        // {
        //     field: 'image',
        //     headerName: 'Item image',
        //     minWidth: 110,
        //     flex: 1,
        //     editable: false,
        // },
        {
            field: 'menu',
            headerName: 'Menu',
            minWidth: 150,
            flex: 1,
            editable: false,
            renderCell: ((params) => {
                return (
                    <Autocomplete
                        fullWidth
                        multiple
                        id="menu"
                        options={menus}
                        getOptionLabel={(option) => option.name}
                        value={params.row.menu.map(menuId => { return menus.find(menu => menu._id == menuId) })}
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
                                onClick={() => handleEdit({
                                    id: params.getValue(params.id, '_id'),
                                    menus: menus
                                })}
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
                                onClick={() => handleDelete({ id: params.getValue(params.id, '_id') })}
                            >
                            </CustomButton>
                        </Grid>
                    </Grid >
                )
            })
        },
    ];

    const handleEdit = (params) => {
        navigate("/landing/edititem", { state: { id: params.id, menus: params.menus } })
    }

    const handleDelete = (params) => {
        itemId.current = params.id
        setOpenDialog(true)
    }

    const handleFilter = (filterValue) => {
        let newRows = items;
        newRows = newRows.filter(row => row.menu.some(menu => menu == filterValue._id))
        setFilteredRows(newRows)
        console.log(newRows)
    }

    const getFileName = (fileType) => `screenshot.${fileType}`

    const downloadPng = useCallback(() => {
        if (printRef.current === null) {
            return
        }
        toPng(printRef.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = `${getFileName('png')}`
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [printRef]);

    const downloadJpg = useCallback(() => {
        if (printRef.current === null) {
            return
        }
        toJpeg(printRef.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = `${getFileName('jpg')}`
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [printRef]);

    const getPhoto = (menuName) => {
        switch (menuName) {
            case "Popular":
                return POPULAR_PHOTO
            case "Vegan":
                return VEGAN_PHOTO
            case "Healthy":
                return HEALTHY_PHOTO
            case "Breakfast":
                return BREAKFAST_PHOTO
            case "Lunch":
                return LUNCH_PHOTO
            case "Dinner":
                return DINNER_PHOTO
        }

    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" height='100%' ref={printRef}>
                <h1>Manage your menu</h1>
                {/* TODO: Add a search field and a toggle button for filtering
                TODO: Add a add item button (and bulk add button) */}
                <Paper elevation={3} sx={{ borderRadius: "16px" }}>
                    <Container maxWidth="xl">
                        <Grid paddingY={2} height="200px">
                            <Carousel
                                draggable={false}
                                responsive={responsive}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item"
                            >

                                {menus.length > 0 && menus.sort(function (a, b) { return b._id - a._id }).map((menu) => {
                                    return (
                                        <Card sx={{ position: "relative", height: "100%", borderRadius: "10px" }}>
                                            <CardActionArea sx={{ position: "relative", height: "100%" }} onClick={() => handleFilter(menu)}>
                                                <CardMedia
                                                    media="picture"
                                                    alt="Contemplative Reptile"
                                                    image={getPhoto(menu.name)}
                                                    title="Contemplative Reptile"
                                                    sx={{ position: "absolute", top: "0", right: "0", height: "100%", width: "100%" }}
                                                />
                                                <CardContent sx={{ position: "relative", backgroundColor: "transparent", color: "#ffffff" }}>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {menu.name}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    )
                                })
                                }
                            </Carousel>
                        </Grid>
                        <Grid container rowSpacing={2} paddingY={3} paddingX="15px">
                            <Grid container item alignItems="center" spacing={2}>
                                <Grid item md={2} sm={3}>
                                    <Tooltip title="Add item">
                                        <CustomButton
                                            fullWidth={true}
                                            onClick={() => navigate("/landing/additem", { state: { menus: menus } })}
                                            description="Add item"
                                        />
                                    </Tooltip>
                                </Grid>
                                {/* <Grid item md={2} sm={4}>
                                    <Tooltip title="Add menu">
                                        <CustomButton
                                            fullWidth={true}
                                            onClick={() => navigate("/landing/addmenu")}
                                            description="Add menu"
                                        />
                                    </Tooltip>
                                </Grid> */}
                                {/* <Grid item md={2} sm={4}>
                                    <Tooltip title="Edit menu">
                                        <CustomButton
                                            fullWidth={true}
                                            onClick={() => navigate("/landing/editmenu")}
                                            description="Edit menu"
                                        />
                                    </Tooltip>
                                </Grid> */}
                                {/* </Grid>
                            <Grid container item alignItems="center" spacing={2}> */}
                                <Grid item md={2} sm={3}>
                                    <Tooltip title="Reset filter">
                                        <CustomButton
                                            fullWidth={true}
                                            onClick={() => setFilteredRows(items)}
                                            description="Reset filter"
                                        />
                                    </Tooltip>
                                </Grid>
                                <Grid item md={2} sm={3}>
                                    <Tooltip title="Export as png">
                                        <CustomButton
                                            fullWidth={true}
                                            onClick={() => downloadPng()}
                                            description="Export as png"
                                        />
                                    </Tooltip>
                                </Grid>
                                <Grid item md={2} sm={3}>
                                    <Tooltip title="Export as jpg">
                                        <CustomButton
                                            fullWidth={true}
                                            onClick={() => downloadJpg()}
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
                                            getRowId={(row) => row['_id']}
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
                            content={`Are you sure you want to delete this item "${items.find(row => row._id === itemId.current)?.name}" ?`}
                            rightLabel="Confirm"
                            rightAction={() => deleteItem({ id: itemId.current }, navigate)}
                        />
                    </Container>
                </Paper>
            </Container >
        </React.Fragment>
    )
};

export default ManageItem;