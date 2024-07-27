import { Container, Stack, Typography } from '@mui/material';
import React from 'react';

export default function Header() {
  return (
    <Container
      sx={{
        marginY: 20
      }}
    >
      <Stack direction="column" gap={5}>
        <Typography variant="h4" textAlign="center">
          Describe what your blog is about
        </Typography>
        <Typography variant="body2" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Stack>
    </Container>
  );
}
