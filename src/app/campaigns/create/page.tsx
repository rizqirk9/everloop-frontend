'use client'

import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from './_section/header';
import Form from './_section/form';

export default function Create() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

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
}
