import React from "react";
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller, useForm } from 'react-hook-form';

const FormInput = ({ name, label }) => {
    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller 
                defaultValue=''
                control={control}
                fullWidth
                name={name}
                render={({field}) => (
                    <TextField fullWidth label={label} required />
                )}
            />
        </Grid>
    );
};

export default FormInput;