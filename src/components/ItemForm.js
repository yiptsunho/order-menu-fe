import { Button, Grid, Paper, Typography, Autocomplete, Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useRef, useContext } from 'react';
import { TextField, MenuItem } from '@mui/material';
import * as _ from 'lodash';
import category from '../utils/Category.json'
import menu from '../utils/Menu.json'
import CustomButton from './CustomButton';
import { useNavigate } from 'react-router-dom';

function ItemForm(props) {
    const { data, handleSubmit, filteredRows, menus } = props;
    const navigate = useNavigate();

    const [form, setForm] = useState([
        {
            fieldName: "_id",
            label: "Item code",
            value: data ? data._id : null
        },
        {
            fieldName: "name",
            label: "Item name",
            value: data ? data.name : null
        },
        {
            fieldName: "originalPrice",
            label: "Original price",
            value: data ? data.originalPrice : null
        },
        // {
        //     fieldName: "image",
        //     label: "Item image",
        //     value: null
        // },
        {
            fieldName: "menu",
            label: "Menu",
            value: data ? data.menu : []
        },
        // {
        //     fieldName: "belongs",
        //     label: "Belongs to menu",
        //     value: []
        // }
    ]);

    const handleChange = (fieldName, newValue) => {
        let newData = _.cloneDeep(form)
        for (let field of newData) {
            if (field.fieldName === fieldName) {
                field.value = newValue
            }
        }
        setForm(newData);
    }

    const handleReset = () => {
        setForm([
            {
                fieldName: "_id",
                label: "Item code",
                value: data ? data._id : null
            },
            {
                fieldName: "name",
                label: "Item name",
                value: data ? data.name : null
            },
            {
                fieldName: "originalPrice",
                label: "Original price",
                value: data ? data.originalPrice : null
            },
            {
                fieldName: "menu",
                label: "Menu",
                value: data ? data.menu : []
            }
            // {
            //     fieldName: "image",
            //     label: "Item image",
            //     value: null
            // },
            // {
            //     fieldName: "belongs",
            //     label: "Belongs to menu",
            //     value: []
            // }
        ]);
    }

    const handleBack = () => {
        navigate("/landing/manageitem", { state: { filteredRows: filteredRows } })
    }

    return (
        <Container>
            <Grid container rowSpacing={3} paddingY={3}>
                <Grid container rowSpacing={1} columnSpacing={2} justifyContent='start'>
                    <Grid item md={2} sm={4} xs={6}>
                        <CustomButton
                            fullWidth
                            variant="contained"
                            onClick={handleBack}
                            description="Back"
                        />
                    </Grid>
                </Grid>
                <Grid container item rowSpacing={2}>
                    {form.map((field, fieldIndex) => {
                        if (field.fieldName === "menu") {
                            return (
                                <Grid container item md={12} alignItems='center' justifyContent="space-between">
                                    <Grid item md={4} sm={12} xs={12}>
                                        <Typography>
                                            {field.label}
                                        </Typography>
                                    </Grid>
                                    <Grid item md={8} sm={12} xs={12}>
                                        <Autocomplete
                                            multiple
                                            name={field.fieldName}
                                            options={menus}
                                            getOptionLabel={(option) => option.name}
                                            value={field.value.map(id => { return menus.find(menu => menu._id == id) })}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    variant="standard"
                                                />
                                            )}
                                            filterSelectedOptions
                                            onChange={(e, newValue) => {
                                                const idList = newValue.map(value => { return value._id })
                                                handleChange(field.fieldName, idList)
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            )
                        } else {
                            return (
                                <Grid container item md={12} alignItems='center' justifyContent="space-between">
                                    <Grid item md={4} sm={12} xs={12}>
                                        <Typography>
                                            {field.label}
                                        </Typography>
                                    </Grid>
                                    <Grid item md={8} sm={12} xs={12}>
                                        <TextField
                                            fullWidth
                                            required
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                                            name={field.fieldName}
                                            value={field.value}
                                            type={field.fieldName === 'originalPrice' ? "number" : null}
                                            disabled={field.fieldName === 'id'}
                                        />
                                    </Grid>
                                </Grid>
                            )
                        }
                    })
                    }
                </Grid>
                <Grid container item rowSpacing={1} columnSpacing={2} justifyContent='end'>
                    {/* <Grid item md={2} sm={4} xs={6}>
                        <CustomButton
                            fullWidth
                            variant="contained"
                            onClick={handleReset}
                            description="Reset"
                        />
                    </Grid> */}
                    <Grid item md={2} sm={4} xs={6}>
                        <CustomButton
                            fullWidth
                            variant="contained"
                            onClick={() => handleSubmit(form)}
                            description="Submit"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    )
}

export default ItemForm
