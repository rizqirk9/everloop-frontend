import { Container } from '@mui/material';
import React from 'react';
import Header from './_section/header';
import Form from './_section/form';

export default function CreateForum() {
  if (typeof navigator !== 'undefined') {
    return (
      <Container>
        <Header />
        <Form />
      </Container>
    );
  } else {
    return <></>;
  }
}
