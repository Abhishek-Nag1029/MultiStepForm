import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Field } from 'formik';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { FormHelperText, FormControl } from '@mui/material';

export default function MaterialUIDate(props) {
    const {name, errors, label, values, touched, setFieldValue, setFieldTouched, ...rest}= props;
    const handleChange=(val)=>{
        setFieldValue(name, val);
        setFieldTouched(name, true)
    }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormControl sx={{width: "100%"}}>
        <Field
          component={DatePicker}
          label= {label}
          {...rest}
          name= {name}
          value= {values[name] || null}
          onChange={(val)=> handleChange(val)} 
        />
        <FormHelperText></FormHelperText>
      </FormControl>
    </LocalizationProvider>
  );
}
