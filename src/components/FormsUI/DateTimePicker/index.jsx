import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';

const DateTimeField = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);
  const configDateTimePicker = {
    ...otherProps,
    ...field,
    type: 'date',
    variant: 'outlined',
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };
  return (
    <>
      <TextField
        {...configDateTimePicker}
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

export default DateTimeField;
