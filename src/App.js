import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import * as Yup from "yup";
import { FormikWizard, useFormikWizard } from "formik-wizard-form";
import GeneralDetails from "./steps/GeneralDetails";
import IndividualDetails from "./steps/IndividualDetails";
import AddressDetails from "./steps/AddressDetails";
import BankDetails from "./steps/BankDetails";
import { useFormikContext } from "formik";
import { clientType } from "./data";

export default function App() {
  const [finalValues, setFinalValues] = React.useState({});
  const [finished, setFinished] = React.useState(false);
  return (
    <div className="App">
      <FormikWizard
        initialValues={{
        }}
        onSubmit={(values) => {
          setFinalValues(values);
          setFinished(true);
          alert(JSON.stringify(values, null, 2))
        }}
        validateOnNext
        activeStepIndex={0}
        steps={[
          {
            component: GeneralDetails,
            validationSchema: Yup.object().shape({
              FirstName:Yup.string().min(2).required(),
              LastName:Yup.string().min(2).required(),
              UserName:Yup.string().min(2).required(),
            })
          },
          {
            component: IndividualDetails,
            validationSchema: Yup.object().shape({
             mobileNumber: Yup.string().required("Required").matches(/^[0-9]{10}$/, "Invalid Phone Number"),
              email: Yup.string().email().required("Required").matches(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/, "Invalid Email"),
            })
          },
          {
            component: AddressDetails,
            validationSchema: Yup.object().shape({
              country: Yup.string().required("Required"),
              address1:Yup.string().required("Required"),
              address2:Yup.string().required("Required"),
            })
          },
          {
            component: BankDetails,
            validationSchema: Yup.object().shape({
              bank: Yup.string().required("Required"),
              branch:  Yup.string().required("Required"),
              accountType:  Yup.string().required("Required"),
              accountNumber:  Yup.string().required("Required").matches(/^\d{16}$/, "Invalid Account Number")
            })
          },
        ]}
      >
        {(props) => {
          const {
            currentStepIndex,
            renderComponent,
            handlePrev,
            handleNext,
            isNextDisabled,
            isPrevDisabled,
            isValid,
            isSubmitting,
            values
          }= props;
          console.log(props)
          return (
            <>
              <Box sx={{display: {sm:"none", xs:"flex"}, justifyContent: "center", marginTop: {xs: "1em", sm: "1.5em", md: "2.5em", lg: "4em"}}}>
                <Stepper sx={{width: {xs:"80%"}}} activeStep={currentStepIndex} orientation="vertical">
                  <Step completed={currentStepIndex > 0}>
                    <StepLabel>General Details</StepLabel>
                  </Step>
                  <Step completed={currentStepIndex > 1}>
                    <StepLabel>Individual Details</StepLabel>
                  </Step>
                  <Step completed={currentStepIndex > 2}>
                    <StepLabel>Address Details</StepLabel>
                  </Step>
                  <Step completed={currentStepIndex > 3}>
                    <StepLabel>Bank Details</StepLabel>
                  </Step>
                </Stepper>
              </Box>
              <Box sx={{display: {sm:"flex", xs:"none"}, justifyContent: "center", marginTop: {xs: "1em", sm: "1.5em", md: "2.5em", lg: "4em"}}}>
                <Stepper sx={{width: {xs:"100%", md: "80%", lg:"70%"}}} activeStep={currentStepIndex} alternativeLabel>
                  <Step completed={currentStepIndex > 0}>
                    <StepLabel>Basic Details</StepLabel>
                  </Step>
                  <Step completed={currentStepIndex > 1}>
                    <StepLabel>Contact Details</StepLabel>
                  </Step>
                  <Step completed={currentStepIndex > 2}>
                    <StepLabel>Personal Information</StepLabel>
                  </Step>
                  <Step completed={finished}>
                    <StepLabel>Bank Details</StepLabel>
                  </Step>
                 
                </Stepper>
              </Box>
              <Box my="2rem">{renderComponent()}</Box>
              <Box display="flex" mb={"2em"} mx={"2em"} justifyContent="space-between">
                <Button
                  variant="outlined"
                  disabled={isPrevDisabled}
                  type="primary"
                  onClick={handlePrev}
                >
                  Previous
                </Button>
                <Button
                  variant="contained"
                  disabled={!isValid || isSubmitting}
                  type="primary"
                  onClick={handleNext}
                >
                  {currentStepIndex === 3? "Finish" : "Next"}
                </Button>
              </Box>
            </>
          );
        }}
      </FormikWizard>
    </div>
  );
}
