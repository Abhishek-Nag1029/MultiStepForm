import React from 'react';
import { Field} from 'formik';
import { TextField } from 'formik-mui';

const Inputs = (props) => {
    const {label, name, values, ...rest}= props;
  return (
      <Field autoComplete= "off" name={name} value={values[name] || ""} component={TextField} sx={{width: "100%"}} label={label} {...rest} />
  )
}

export default Inputs;
