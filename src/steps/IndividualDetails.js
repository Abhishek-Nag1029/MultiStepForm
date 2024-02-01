import React from 'react';
import FormikControl from '../FormControl';
import { Box, Grid, Typography } from '@mui/material';

const IndividualDetails = (props) => {
  const {touched, errors, values, setFieldValue, setFieldTouched}= props;
  console.log(props)
  return (
    <Box sx={{p:2, margin: "2em"}}>
    <Typography variant='h4' mb={{md: "1.5em", xs: "0.7em"}} align='center'>Contact Information</Typography>
    <Grid container justifyContent="center" rowSpacing={2}>
      <Grid item xs={12} md={8}>
        <FormikControl control='input' name="mobileNumber" label= "Mobile Number*" optional="optional" type="number" values={values} />
      </Grid> 
      <Grid item xs={12} md={8}>
        <FormikControl control='input' name="email" label= "Email*" type="email" values={values}  />
      </Grid>
    </Grid>
    </Box>
  )
}

export default IndividualDetails;
