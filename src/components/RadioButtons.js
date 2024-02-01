import { FormControl, FormLabel, FormControlLabel, FormHelperText } from '@mui/material';
import { Field } from 'formik';
import React from 'react';
import Radio from '@mui/material/Radio';
import { RadioGroup } from 'formik-mui';

const RadioButtons = (props) => {

    const {label, name, touched, errors, options, values, ...rest} = props;

  return (
    <>
    <FormControl error={touched[name] && Boolean(errors[name])}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Field name={name} value={values[name] || ""} component={RadioGroup} row sx={{width: "100%"}} label={label}>
      {
        options.map(option=>{
          return(
            <FormControlLabel key={option.key} value={option.value} control={<Radio />} label={option.value} />
          )
        })
      }
      </Field>
      <FormHelperText sx={{mx:0}}>{touched[name] && errors[name]}</FormHelperText>
    </FormControl>
    </>
  )
}

export default RadioButtons;
