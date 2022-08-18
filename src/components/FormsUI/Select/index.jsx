import React from 'react';
import { TextField, MenuItem } from '@mui/material';
import { useField, useFormikContext } from 'formik';

const SelectField = ({ name, children, handleChange, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const setValue = (event) => {
    const { value } = event.target;
    setFieldValue(name, value);
    if (handleChange) {
      handleChange(event);
    }
  };
  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: 'outlined',
    fullWidth: true,
    onChange: setValue,
  };
  return (
    <>
      <TextField
        {...configSelect}
        error={
          meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
          ) : null
        }
        helperText={meta.touched && meta.error}
      >
        {children}
      </TextField>
    </>
  );
};

export default SelectField;
