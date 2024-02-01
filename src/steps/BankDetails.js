import React from 'react';
import { accountType } from '../data';
import { Grid, Box, Typography } from '@mui/material';
import FormikControl from '../FormControl';

const BankDetails = (props) => {
  const {values}= props;
  return (
    <Box sx={{p:2, marginTop: "4em"}}>
    <Typography variant='h4' mb={{md: "1.5em", xs: "0.7em"}} align='center'>Bank Details</Typography>
    <Grid container rowSpacing={3} columnSpacing={3} justifyContent="center" >
      <Grid item xs={12} sm={8}>
        <FormikControl control='input' name="bank" values={values} label="Bank*" />
      </Grid>
      <Grid item xs={12} sm={8}>
        <FormikControl control='input' name="branch" values={values} label="Branch*" />
      </Grid>
      <Grid item xs={12} sm={8}>
        <FormikControl control='select' name="accountType" values={values} label="Account Type*" options={accountType} />
      </Grid>
      <Grid item xs={12} sm={8}>
        <FormikControl control='input' name="accountNumber" values={values} label="Account Number*" type="number" />
      </Grid>
    </Grid>
    </Box>
  )
}

export default BankDetails;
