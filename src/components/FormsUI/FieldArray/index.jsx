import React from 'react';
import InputField from '../TextField';
import { useField, useFormikContext, FieldArray } from 'formik';
import { Grid, TextField, Button, Typography} from '@mui/material';
import { ControlPoint, RemoveCircleOutline } from '@mui/icons-material';

const FieldArrayComponent = ({
  name,
  children,
  label,
  index,
  arrayName,
  disabled = false,
  ...otherProps
}) => {
  const [field, meta] = useField(name);
  const configArrayField = {
    ...field,
    ...otherProps,
  };
  return (
    <>
      <FieldArray {...configArrayField}>
        {(fieldArrayProps) => {
          console.log('fieldArrayProps', fieldArrayProps);
          const { push, remove, form } = fieldArrayProps;
          const { values } = form;
          console.log('Values', values);
          const arrayName = values.codes;
          console.log('ArrayName', arrayName);
          return (
            <>
              <Typography variant="h4">{name}</Typography>
              <Grid container spacing={2}>
                {arrayName.length > 0 &&
                  arrayName.map((_, index) => (
                    <Grid item xs={12} key={index}>
                      <InputField
                        name={`codes.${index}.a`}
                        label={`codes ${index + 1} a`}
                      />
                      <InputField
                        name={`codes.${index}.b`}
                        label={`codes ${index + 1} b`}
                      />
                      <Button
                        variant="contained"
                        color="error"
                        type="button"
                        onClick={() => remove(index)}
                      >
                        <RemoveCircleOutline sx={{ color: '#ffffff' }} />
                      </Button>
                    </Grid>
                  ))}
              </Grid>
              <Button
                variant="contained"
                color="success"
                type="button"
                onClick={() => push({ a: '', b: '' })}
              >
                <ControlPoint sx={{ color: '#ffffff' }} />
              </Button>
            </>
          );
        }}
      </FieldArray>
    </>
  );
};

export default FieldArrayComponent;