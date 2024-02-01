import React from 'react';
import { Field} from 'formik';
import { FormGroup, FormControlLabel, Checkbox, FormControl, FormLabel, FormHelperText } from '@mui/material';

const CheckboxGroup = (props) => {
    const {label, name, options, formik, ...rest} = props;
    console.log(name)

    return (
      <FormControl error={formik.touched[name] && Boolean(formik.errors[name])} >
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <Field name={name} {...rest}>
          {
            (props)=>{
              //console.log(values)
              const {form, field, meta}= props;
              const {values}= form;
              console.log(props)
              return(
                <>
                <FormGroup name={name}>
                  {
                    options.map((option, index)=>(
                      <FormControlLabel key={index} type='checkbox' control={<Checkbox name={option.value} checked={form.values[name][option.value]} onChange={(e)=>{
                        if(e.target.checked){
                          console.log("true")
                          const updated= [...form.values[name], option.value]
                          form.setFieldValue(name, updated)
                          
                        }else{
                          console.log("false")
                          const updated= form.values[name].filter(item=> item!== option.value);
                          form.setFieldValue(name, updated)
                        }
                      }} />} label={option.value} />
                    ))
                  }
                </FormGroup>
                <FormHelperText>{form.touched[name] && form.errors[name]}</FormHelperText>
                </>
              )
                
            }
          }
        </Field>
      </FormControl>
    )
}

export default CheckboxGroup;
