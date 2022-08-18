import React from 'react';
import { Botton } from '@mui/material';
import { useFormikContext } from 'formik';

const ButtonComponent = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();
  const handleSubmit = () => {
    submitForm();
  };
  const configButton = {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    onclick: handleSubmit,
  };
  return (
    <>
      <Botton {...configButton}>{children} </Botton>
    </>
  );
};

export default ButtonComponent;
