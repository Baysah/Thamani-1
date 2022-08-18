import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormNavigation from './FormNavigation';
import {
  Button,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Box,
  Paper,
} from '@mui/material';

const MultiStepForm = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  {
    /** Function to go to next step in the form */
  }
  const next = (values) => {
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
  };

  {
    /** Function to go to Previous step in the form */
  }
  const previous = (values) => {
    setSnapshot(values);
    setStepNumber(Math.max(stepNumber - 1, 0));
  };
  {
    /** Function to Handle form submit */
  }
  const handleSubmit = async (values, actions) => {
    console.log('Form Submitting');
    if (step.props.onSubmit) {
      await step.props.onSubmit(values);
    }
    if (isLastStep) {
      return onSubmit(values, actions);
    } else {
      actions.setTouched({});
      next(values);
    }
  };

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {(formik) => (
        <Form className="form">
          <Grid container className="formContainer">
            <Grid item xs={12}>
              <Box p={2} mb={2} component={Paper}>
                <div className="stepper">
                  <Stepper activeStep={stepNumber} alternativeLabel>
                    {steps.map((currentStep) => {
                      const label = currentStep.props.stepName;
                      return (
                        <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className="formContainer" p={2} component={Paper}>
                {step}
                <div className="formNavigation">
                  {stepNumber > 0 && (
                    <Button
                      variant="contained"
                      onClick={() => previous(formik.values)}
                      type="button"
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={formik.isSubmitting}
                    type="submit"
                  >
                    {isLastStep ? 'Submit' : 'Next'}
                  </Button>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default MultiStepForm;

export const FormStep = ({ stepName = '', children }) => children;
