import React from 'react';
import ItemForm from '../../components/ItemForm';
import { CssBaseline, Container, Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';
import dataList from '../../utils/Data.json'

function EditItem() {
    const { id } = useLocation().state.params
    const selectedData = dataList
    const data = selectedData.find(field => field.fieldList[0].value === id)
    const handleEditItem = (params) => {
        const { itemName, originalPrice, image, category, belongs } = params
        const { isValid, errMsg } = validate(params)

        if (isValid) {
            console.log(params)
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
                <h1>Edit Item</h1>
                <Paper elevation={3} sx={{ borderRadius: "16px" }}>
                    <ItemForm
                        data={data}
                        handleSubmit={handleEditItem}
                    />
                </Paper>
            </Container>
        </React.Fragment>
    )
};

export default EditItem;
