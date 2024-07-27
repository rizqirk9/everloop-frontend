import { Container, Stack, Typography } from '@mui/material';
import Link from 'next/link'
import React from 'react';

export default function Theme() {
  return (
    <Container>
      <Stack gap={5}>
       <Link href={'/theme/typography'}>Typography</Link>
       <Link href={'/theme/form'}>Form</Link>
      </Stack>
    </Container>
  );
}
