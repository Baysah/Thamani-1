import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';

const InputField = ({ name, disabled = false, ...otherProps }) => {
  const [field, meta] = useField(name);
  const configTextField = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
  };
  return (
    <>
      <TextField
        disabled={disabled}
        {...configTextField}
        error={
          meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
          ) : null
        }
        helperText={meta.touched && meta.error}
      />
    </>
  );
};

export default InputField;
