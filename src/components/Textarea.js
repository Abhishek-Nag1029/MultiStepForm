import React from 'react'
import { Field, ErrorMessage } from 'formik';
import { TextField } from '@mui/material';

const Textarea = (props) => {

    const {label, name, ...rest}= props;

  return (
    <Field name={name} component={TextField} multiline sx={{width: "100%"}} rows={4} label={label} />
  )
}

export default Textarea;
