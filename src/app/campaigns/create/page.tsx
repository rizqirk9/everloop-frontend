import { Box, Container } from '@mui/material';
import React from 'react';
import Header from './_section/header';
import Form from './_section/form';

export default function Create() {
  if (typeof navigator !== 'undefined') {
    return (
      <Container
        sx={{
          my: 10
        }}
      >
        <Header />
        <Form />
      </Container>
    );
  } else {
    return <></>;
  }
}
