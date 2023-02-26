import { Button } from '@mui/material';
import React from 'react';

function CustomButton(props) {
    const { color, fullWidth = false, onClick, description = "Custom Button", disabled = false, startIcon, sx } = props;

    return (
        <Button
            color={color ?? "primary"}
            fullWidth={fullWidth}
            variant="contained"
            onClick={onClick}
            disabled={disabled}
            startIcon={startIcon ?? null}
            sx={{ textTransform: 'none', borderRadius: 2, paddingLeft: 4, paddingRight: 4, ...sx }}
        >
            {description}
        </Button>
    )
};

export default CustomButton;
