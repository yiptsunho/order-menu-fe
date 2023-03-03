import React, { useEffect, useState } from 'react';
import ItemForm from '../../components/ItemForm';
import { CssBaseline, Container, Paper } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import dataList from '../../utils/Data.json'
import { createItem, getItem, updateItem } from '../../apis/MenuApi';

function EditItem() {
    const { id, menus } = useLocation().state
    const [data, setData] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            getItem({ id: id }, setData)
        }
    }, [])

    // const selectedData = dataList
    const handleEditItem = (params) => {
        const { itemName, originalPrice, image, category, belongs } = params
        const { isValid, errMsg } = validate(params)

        if (isValid) {
            let payload = {}
            for (let param of params) {
                const fieldName = param.fieldName
                payload[fieldName] = param.value
            }
            updateItem(payload, navigate)
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
                    {Object.keys(data).length > 0 &&
                        <ItemForm
                        data={data}
                        handleSubmit={handleEditItem}
                        menus={menus}
                    />
                    }
                </Paper>
            </Container>
        </React.Fragment>
    )
};

export default EditItem;
