import React, { useState } from 'react';
import { Grid, MenuItem } from '@mui/material';
import InputField from '../FormsUI/TextField/index';
import SelectField from '../FormsUI/Select/index';
import PortCodes from '../../data/portCode';
import CheckBox from '../FormsUI/Checkbox/index';

const FormFour = ({}) => {
  

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputField
            name="country_code"
            disabled={true}
            label="Processing Departure Port ID"
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            disabled={true}
            name="app_id_code"
            label="Application Identifier Code"
          />
        </Grid>
        <Grid item xs={12}>
          <InputField name="filter_code" label="Filter Code" />
        </Grid>
        <Grid item xs={8}>
          <SelectField
            name="remote_depart_port_code"
            label="Remote Departure Port"
          >
            {portCodes}
          </SelectField>
        </Grid>
        <Grid item xs={4}>
          <InputField
            name="remote_depart_port_code"
            label="Remote Departure Port ID"
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name="processing_filer_office_code"
            label="Processing Filer Office Code"
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name="remote_preparer_filter_code"
            label="Remote Preparer Filer Code"
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name="remote_preparer_office_code"
            label="Remote Preparer Office Code"
          />
        </Grid>
        <Grid item xs={6}>
          <CheckBox
            name="contact_by_phone"
            legend="Contact by Phone"
            label="I agree to the terms and conditions"
          />
        </Grid>
        <Grid item xs={6}>
          <CheckBox
            name="contact_by_phone"
            legend="Contact by Phone"
            label="I agree to the terms and conditions"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FormFour;
