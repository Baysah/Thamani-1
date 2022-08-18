import * as React from 'react';
import { Container, Grid } from '@mui/material';
import FormComponent from '../src/components/FormComponent';

export default function Index() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container className="mainContainer" maxWidth="md">
          <FormComponent />
        </Container>
      </Grid>
    </Grid>
  );
}

