import { Button, Grid, Paper, Typography, Autocomplete, Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useRef } from 'react';
import { TextField, MenuItem } from '@mui/material';
import * as _ from 'lodash';
import category from '../utils/Category.json'
import menu from '../utils/Menu.json'
import CustomButton from './CustomButton';

function ItemForm(props) {
    const { data, handleSubmit } = props;

    const [form, setForm] = useState(data?.fieldList ?? [
        {
            fieldName: "name",
            label: "Item name",
            value: null
        },
        {
            fieldName: "originalPrice",
            label: "Original price",
            value: null
        },
        {
            fieldName: "image",
            label: "Item image",
            value: null
        },
        {
            fieldName: "category",
            label: "Category",
            value: []
        },
        {
            fieldName: "belongs",
            label: "Belongs to menu",
            value: []
        }
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
        setForm(data?.fieldList ?? [
            {
                fieldName: "name",
                label: "Item name",
                value: null
            },
            {
                fieldName: "originalPrice",
                label: "Original price",
                value: null
            },
            {
                fieldName: "image",
                label: "Item image",
                value: null
            },
            {
                fieldName: "category",
                label: "Category",
                value: []
            },
            {
                fieldName: "belongs",
                label: "Belongs to menu",
                value: []
            }
        ]);
    }

    return (
        <Container>
            <Grid container rowSpacing={3} paddingY={3}>
                <Grid container rowSpacing={2}>
                    {form.map((field, fieldIndex) => {
                        if (field.fieldName === "category" || field.fieldName === "belongs") {
                            return (
                                <Grid container item md={12} alignItems='center' justifyContent="space-between">
                                    <Grid item md={4} sm={12}>
                                        <Typography>
                                            {field.label}
                                        </Typography>
                                    </Grid>
                                    <Grid item md={8} sm={12}>
                                        <Autocomplete
                                            multiple
                                            name={field.fieldName}
                                            options={field.fieldName === "category" ? category : menu}
                                            getOptionLabel={(option) => option.label}
                                            value={field.value}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    variant="standard"
                                                />
                                            )}
                                            filterSelectedOptions
                                            onChange={(e, newValue) => handleChange(field.fieldName, newValue)}
                                        />
                                    </Grid>
                                </Grid>
                            )
                        } else {
                            return (
                                <Grid container item md={12} alignItems='center' justifyContent="space-between">
                                    <Grid item md={4} sm={12}>
                                        <Typography>
                                            {field.label}
                                        </Typography>
                                    </Grid>
                                    <Grid item md={8} sm={12}>
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
                    <Grid item md={3} sm={6} xs={12}>
                        <CustomButton
                            fullWidth
                            variant="contained"
                            onClick={handleReset}
                            description="Reset"
                        />
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
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
