import { CssBaseline, Container, Paper, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createItem } from '../../apis/MenuApi';
import ItemForm from '../../components/ItemForm';

function AddItem() {
    const { menus } = useLocation().state;
    const navigate = useNavigate();

    const handleAddItem = (params) => {
        const { itemName, originalPrice, image, category, belongs } = params
        const { isValid, errMsg } = validate(params)

        if (isValid) {
            let payload = {}
            for (let param of params) {
                const fieldName = param.fieldName
                payload[fieldName] = param.value
            }
            createItem(payload, navigate)
        } else (
            console.log(errMsg, params)
        )
    }

    const validate = (fieldList) => {
        let isValid = true;
        let errMsg;

        for (let field of fieldList) {
            const fieldName = field.fieldName
            if (fieldName === "category" || fieldName === "belongs") {
                if (field.value.length === 0 && fieldName === "belongs") {
                    isValid = false
                    errMsg = "Please input all mandatory fields"
                    break;
                }
            } else if (!field.value) {
                isValid = false
                errMsg = "Please input all mandatory fields"
                break;
            }
        }

        return { isValid, errMsg }

    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container height="100%">
                <h1>Add Item</h1>
                <Paper elevation={3} sx={{ borderRadius: "16px" }}>
                    <ItemForm
                        handleSubmit={handleAddItem}
                        menus={menus}
                    />
                </Paper>
            </Container>
        </React.Fragment>
    )
};

export default AddItem;
