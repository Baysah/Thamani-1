import React, { useState, useEffect } from 'react';
import { Grid, MenuItem } from '@mui/material';
import InputField from '../FormsUI/TextField/index';
import SelectField from '../FormsUI/Select/index';
import FieldArrayComponent from '../FormsUI/FieldArray';

const FormThree = () => {
    const API_URL =
      'https://server.thamani.com:8443/IECUSoftServerRest-1.0/resources/tariff/provisionTypeAgencies';
    const [agencyTypeArray, setAgencyTypeArray] = useState([]);
    const [agencyType, setAgencyType] = useState('');
    const AGENCY_API_URL = `https://server.thamani.com:8443/IECUSoftServerRest-1.0/resources/tariff/provisionTypesForAgency?agency=${agencyType}`;
    const [ agenciesArray, setAgenciesArray ] = useState([])
    

    //Fetch data from API
    const fetchagencyType = async () => {
      try {
        const res = await fetch(API_URL);
        const agencies = await res.json();
        setAgencyTypeArray(agencies);
        console.log(agencies);
      } catch (err) {
        console.log(err.stack);
      }
    };

    const handleAgencyTypeChange = (e) => {
      setAgencyType(e.target.value);
    };
    //Run fetchItems function when component loads
    useEffect(() => {
      fetchagencyType();
    }, []);
    const AgencyTypeOptions = agencyTypeArray.map((option, index) => {
      return (
        <MenuItem key={index} value={option} id={index}>
          {option}
        </MenuItem>
      );
    });


    //fetch the agencies from api
    const fetchagency = async () => {
      try {
        const res = await fetch(AGENCY_API_URL);
        const agencies = await res.json();
        setAgenciesArray(agencies);
        console.log(agencies);
      } catch (err) {
        console.log(err.stack);
      }
    };
    useEffect(() => {
      fetchagency();
    }, [agencyType]);

    const AgencyOptions = agenciesArray.map((option, index) => {
      return (
        <MenuItem key={index} value={option.code} id={option.id}>
          {option.code}-{option.name}
        </MenuItem>
      );
    });
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <SelectField
            name="agency_type"
            label="Agency Type"
            handleChange={handleAgencyTypeChange}
          >
            {AgencyTypeOptions}
          </SelectField>
        </Grid>
        <Grid item xs={4}>
          <SelectField name="agency" label="Agency">
            {AgencyOptions}
          </SelectField>
        </Grid>
        <Grid item xs={4}>
          <InputField name="agency" label="Agency Code" />
        </Grid>
        <Grid item xs={12}>
          <FieldArrayComponent name="codes" label="Code" />
        </Grid>
      </Grid>
    </>
  );
};

export default FormThree;
