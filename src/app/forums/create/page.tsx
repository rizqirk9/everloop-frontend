'use client';

import { Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Header from './_section/header';
import Form from './_section/form';

export default function CreateForum() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Container>
      <Header />
      <Form />
    </Container>
  );
}
