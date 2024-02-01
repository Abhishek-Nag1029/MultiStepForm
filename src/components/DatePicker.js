import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from 'react-datepicker';
import { FormControl, FormHelperText, FormLabel } from '@mui/material';
import { Field } from 'formik';

const DatePickers = (props) => {
    const {label, name, touched, errors, ...rest}= props;
  return (
    <FormControl error={touched[name] && Boolean(errors[name])}>
      <FormLabel htmlFor={label}>{label}</FormLabel>
      <Field name={name}>
        {
            ({form, field})=>{
                const {setFieldValue}= form;
                const {value}= field;
                return(
                    <>
                    <ReactDatePicker showIcon id={name} {...field} {...rest} selected={value} onChange={(val)=> setFieldValue(name, val)} />
                    <FormHelperText>{form.touched[name] && form.errors[name]}</FormHelperText>
                    </>
                )
            }
        }
      </Field>
    </FormControl>
  )
}

export default DatePickers;
