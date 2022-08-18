import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  Container,
  Grid,
  Box,
  Paper,
  TextField,
} from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormOne from './Forms/FormOne';
import FormTwo from './Forms/FormTwo';
import FormThree from './Forms/FormThree';
import FormFour from './Forms/FormFour';
import MultiStepForm, { FormStep } from './MultiStepForm';



const FormComponent = () => {
    const [applicationIDCode, setApplicationIDCode] = useState('');

    useEffect(() => {
        const sessionApplicationIDCode = sessionStorage.getItem('applicationIDCode');
        if (sessionApplicationIDCode !== null) {
            setApplicationIDCode(JSON.parse(sessionApplicationIDCode));
        }
    },[])

    useEffect(() => {
        window.sessionStorage.setItem('applicationIDCode', JSON.stringify(applicationIDCode));
    }, [applicationIDCode]);

    const INITIAL_FORM_STATE = {
      app_id_code_box1: '',
      app_id_code: '',
      depart_port_code: '',
      filter_code: '',
      remote_depart_port_code: '',
      processing_filer_office_code: '',
      remote_preparer_filter_code: '',
      remote_preparer_office_code: '',
      app_id_code_new: '',
      country_code: '',
      agency_type: '',
      agency: '',
      codes: ['']
    };

  return (
    <>
      <MultiStepForm
        initialValues={{ ...INITIAL_FORM_STATE }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <FormStep
          stepName="Application Identifier"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({
            app_id_code_box1: Yup.string().required('Required'),
            app_id_code: Yup.string().required('Required'),
          })}
        >
          <FormOne />
        </FormStep>
        <FormStep
          stepName="Port Code"
          onSubmit={() => console.log('Step1 onSubmit')}
          validationSchema={Yup.object({
            depart_port_code: Yup.string().required('Port Code is required'),
            filter_code: Yup.string().required('Filter Code is required'),
            processing_filer_office_code: Yup.string(),
            remote_preparer_filter_code: Yup.string().required(
              'Remote Preparer Filter Code is required'
            ),
            remote_preparer_office_code: Yup.string(),
            filter_code: Yup.string().required('Filter Code is required'),
            processing_filer_office_code: Yup.string(),
            remote_preparer_office_code: Yup.string(),
          })}
        >
          <FormTwo />
        </FormStep>
        <FormStep
          stepName="Agency"
          onSubmit={() => console.log('Step3 onSubmit')}
        >
          <FormThree />
        </FormStep>
      </MultiStepForm>
    </>
  );
};

export default FormComponent;
