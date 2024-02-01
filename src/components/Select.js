import { FormControl, MenuItem } from '@mui/material';
import { Select } from 'formik-mui';
import {Field } from 'formik';
import React from 'react';

const Selects = (props) => {

    const {label, name, options, values, ...rest}=props;

  return (
    <FormControl sx={{width: "100%"}}>
      <Field type='select' {...rest} name={name} value={values[name] || ""} component={Select} label={label}>
      {
        options.map((option, index)=>{
          return(
               <MenuItem key={index} value={option.value || option}>{option.value || option}</MenuItem>
          )
        })
      }
      </Field>
    </FormControl>
  )
}

export default Selects;
