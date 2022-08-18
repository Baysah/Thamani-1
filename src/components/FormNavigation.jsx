import React from 'react';
import { Button } from '@mui/material';

const FormNavigation = ({ hasPrev, isLastStep, onBackClick, disabled }) => {
  return (
    <div className="formNavigation">
      {hasPrev && (
        <Button
          type="button"
          onClick={onBackClick}
          variant="contained"
          color="primary"
        >
          Back
        </Button>
      )}
      <Button variant="contained" color="primary" type="submit">
        {isLastStep ? 'Submit' : 'Next'}
      </Button>
    </div>
  );
};

export default FormNavigation;
