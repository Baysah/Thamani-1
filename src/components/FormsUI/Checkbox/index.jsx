import React from 'react';
import {
  TextField,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';
import { useField, useFormikContext } from 'formik';

const CheckBoxField = ({ name, label, legend, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const handleChange = (event) => {
    const { checked } = event.target;
    setFieldValue(name, checked);
  };
  const configCheckBox = {
    ...field,
    onchange: handleChange,
  };
  return (
    <>
      <FormControl
        {...configCheckBox}
        error={
          meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
          ) : null
        }
        helperText={meta.touched && meta.error}
      >
        <FormLabel component="legend">{legend}</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox {...configCheckBox} />}
            label={label}
          ></FormControlLabel>
        </FormGroup>
      </FormControl>
    </>
  );
};

export default CheckBoxField;
