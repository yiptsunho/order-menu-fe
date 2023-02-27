import Box from '@mui/material/Box/Box';
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import React, { useState } from 'react';

function CustomDataTable(props) {
    const { rows, columns, pageSize, rowsPerPageOptions, components, initialState, sx } = props
    const [currentPageSize, setCurrentPageSize] = useState(pageSize ?? 5)

    return (
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={currentPageSize}
            rowsPerPageOptions={rowsPerPageOptions ?? [5, 10, 15, 20]}
            onPageSizeChange={(newPageSize) => setCurrentPageSize(newPageSize)}
            disableSelectionOnClick
            getRowHeight={() => 'auto'}
            autoheight
            components={{ ...components }}
            initialState={{ ...initialState }}
            sx={{ ...sx }}
        />
    )
};

export default CustomDataTable;
