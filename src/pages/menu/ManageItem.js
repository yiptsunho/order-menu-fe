import { Autocomplete, Box, Button, ButtonGroup, Container, CssBaseline, Grid, IconButton, TextField, ToggleButtonGroup, Tooltip, Paper } from '@mui/material';
import React, { useRef, useState } from 'react';
import CustomButton from '../../components/CustomButton';
import CustomTable from '../../components/CustomTable';
import Search from '@mui/icons-material/Search';
import { Delete, Edit } from '@mui/icons-material';
import itemList from '../../utils/Data.json'
import category from '../../utils/Category.json'
import { GridLinkOperator, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import rows from '../../utils/TableData.json'
import CustomDialog from '../../components/CustomDialog';

function QuickSearchToolbar() {
    return (
        <Box
            sx={{ p: 0.5, pb: 0 }}
        >
            <GridToolbarQuickFilter
                quickFilterParser={(searchInput) =>
                    searchInput.split(',').map((value) => value.trim())
                }
                quickFilterFormatter={(quickFilterValues) => quickFilterValues.join(', ')}
                debounceMs={100} // time before applying the new quick filter value
            />
        </Box>
    )
}

function ManageItem() {
    const navigate = useNavigate();
    const [openDialog, setOpenDialog] = useState(false)
    const itemId = useRef()
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
        navigate("/landing/edititem", { state: { params: params } })
    }

    const handleDelete = (params) => {
        itemId.current = params.id
        setOpenDialog(true)
    }
    // TODO: use real API
    const deleteItem = (params) => {
        console.log(params)
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" height='100%'>
                <h1>Manage your cuisines</h1>
                {/* TODO: Add a search field and a toggle button for filtering
                TODO: Add a add item button (and bulk add button) */}
                <Paper elevation={3} sx={{ borderRadius: "16px" }}>
                    <Container maxWidth="xl">
                        <Grid container rowSpacing={2} paddingY={3}>
                            <Grid container item alignItems="center">
                                <Grid item md={2}>
                                    <Tooltip title="Add">
                                        <CustomButton
                                            fullWidth={true}
                                            onClick={() => navigate("/landing/additem")}
                                            description="Add item"
                                        />
                                    </Tooltip>
                                </Grid>
                            </Grid>
                            <Grid container item style={{ height: 600, width: '100%' }}>
                                <Grid container item style={{ display: 'flex', height: '100%' }}>
                                    <Grid container item style={{ flexGrow: 1 }}>
                                        <CustomTable
                                            rows={rows}
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
            </Container>
        </React.Fragment>
    )
};

export default ManageItem;