import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import FormikControl from '../FormControl';
import MaterialUIDate from '../components/MaterialUIDate';

const GeneralDetails = (props) => {
    const {errors, values} = props;
  return (
    <Box sx={{p:2, marginTop: "4em"}}>
    <Typography variant='h4' mb={{md: "1.5em", xs: "0.7em"}} align='center'>Basic Information</Typography>
    <Grid container justifyContent="center" rowSpacing={2}>
      <Grid item xs={12} md={8}>
        <FormikControl control='input' name="FirstName" label= "First Name*" optional="optional" type="text" values={values} />
      </Grid> 
      <Grid item xs={12} md={8}>
        <FormikControl control='input' name="LastName" label= "Last Name*" optional="optional" type="text" values={values} />
      </Grid> 
      <Grid item xs={12} md={8}>
        <FormikControl control='input' name="UserName" label= "User Name*" optional="optional" type="text" values={values} />
      </Grid> 
     
    </Grid>
    </Box>
  )
}

export default GeneralDetails;
