import React, { useState, useEffect } from 'react';
import { Grid, MenuItem } from '@mui/material';
import InputField from '../FormsUI/TextField/index';
import SelectField from '../FormsUI/Select/index';

const FormTwo = ({  }) => {

    const API_URL =
      'https://server.thamani.com:8443/IECUSoftServerRest-1.0/resources/tariff/portCodes';

    const [options, setOptions] = useState([]);

    //Fetch data from API
    const fetchItems = async () => {
        try{
            const res = await fetch(API_URL);
            const listItems = await res.json();
            setOptions(listItems);
            console.log(listItems);
        } catch(err){
            console.log(err.stack)
        }
    }

    //Run fetchItems function when component loads
    useEffect(() => {
       fetchItems();
    }, []);


    //Sorting function
    const sortedList = (a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      return 0;
    };
    //sort options name alpha
    options.sort(sortedList);

    //maps the options
    const PortOptions = options.map((option, index) => {
        return (
          <MenuItem key={index} value={option.code} id={option.id}>
            {option.name}
          </MenuItem>
        );
    })
    
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <SelectField
            name="depart_port_code"
            label="Processing Departure Port"
          >
            {PortOptions}
          </SelectField>
        </Grid>
        <Grid item xs={4}>
          <InputField
            name="depart_port_code"
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
            {PortOptions}
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
      </Grid>
    </>
  );
};

export default FormTwo;
