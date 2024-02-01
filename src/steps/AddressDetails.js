import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import FormikControl from '../FormControl';

const AddressDetails = (props) => {
  const {errors, touched, values}= props;


  return (
    <Box sx={{p:2, marginTop: "4em"}}>
    <Typography variant='h4' mb={{md: "1.5em", xs: "0.7em"}} align='center'>Personal Information</Typography>
    <Grid container justifyContent="center" rowSpacing={2}>
      <Grid item xs={12} md={8}>
        <FormikControl control='input' name="country" label= "Country of Residence*" optional="optional" type="text" values={values} />
      </Grid> 
      <Grid item xs={12} md={8}>
        <FormikControl control='input' name="address1" label= "Address 1*" optional="optional" type="text" values={values} />
      </Grid> 
      <Grid item xs={12} md={8}>
        <FormikControl control='input' name="address2" label= "Address 2*" optional="optional" type="text" values={values} />
      </Grid> 
    </Grid>
    </Box>
  )
}

export default AddressDetails;
