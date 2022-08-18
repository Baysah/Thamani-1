import React, { useState, useEffect } from 'react';
import { Grid, MenuItem, Paragraph } from '@mui/material';
import InputField from '../FormsUI/TextField/index';
import SelectField from '../FormsUI/Select/index';
import applicationCode from '../../data/applicationCode';
import { validateYupSchema } from 'formik';

const FormOne = () => {
  {
    /**
    Create a variable to store the state of the application code
*/
  }
  const [appIDBox1Index, setappIDBox1Index] = useState(0);

  {
    /**
    Check if the application code is set in the session storage
    Retrieve the application code from the session storage
    */
  }

  useEffect(() => {
    const sessionAppIDBox1Index = sessionStorage.getItem('appIDBox1Index');
    if (sessionAppIDBox1Index !== null) {
      setappIDBox1Index(JSON.parse(sessionAppIDBox1Index));
    }
  }, []);


  {
    /**
    Save the State of the application code to the session storage
    */
  }
  useEffect(() => {
    window.sessionStorage.setItem('appIDBox1Index', JSON.stringify(appIDBox1Index));
  }, [appIDBox1Index]);

  
  {
    /**
    Get the options for the box1 Select 
    */
  }

  const selectbox1_options = applicationCode.map((item, index) => {
    return (
      <MenuItem key={index} data-id={item.id} value={item.value} id={item.id}>
        {item.text} {index}
      </MenuItem>
    );
  });
  {
    /**
    Update the state of the application code
    */
  }
  const handleBox1Change = (e) => {
    if (e.target.value === 'none') {
      setappIDBox1Index(0);
    } else if (e.target.value === 'create-update') {
      setappIDBox1Index(1);
    } else if (e.target.value === 'create-resubmission') {
      setappIDBox1Index(2);
    } else if (e.target.value === 'query') {
      setappIDBox1Index(3);
    } else if (e.target.value === 'processing-transaction') {
      setappIDBox1Index(4);
    } else {
      setappIDBox1Index(appIDBox1Index);
    }
  };
  const handleBox2Change = (e) => {
    console.log(e.target.value);
  };
  const selectbox2_options = applicationCode[appIDBox1Index].options.map((item) => {
    return (
      <MenuItem key={item.id} value={item.value}>
        {item.text}
      </MenuItem>
    );
  });
  const selectbox3_options = () => ({});

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <SelectField
            handleChange={handleBox1Change}
            name="app_id_code_box1"
            label="Box 1"
          >
            {selectbox1_options}
          </SelectField>
        </Grid>
        <Grid item xs={4}>
          <SelectField
            name="app_id_code"
            label="Box 2"
            handleChange={handleBox2Change}
          >
            {selectbox2_options}
          </SelectField>
        </Grid>

        <Grid item xs={4}>
          <InputField name="app_id_code" label="Application Identifier Code" />
        </Grid>
      </Grid>
    </>
  );
};

export default FormOne;
