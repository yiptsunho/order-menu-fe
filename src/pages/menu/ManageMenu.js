import { Container } from '@mui/material';
import React from 'react';

function ManageMenu() {

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
                            {/* <Grid container item alignItems="center">
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
                            </Grid> */}
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

export default ManageMenu;