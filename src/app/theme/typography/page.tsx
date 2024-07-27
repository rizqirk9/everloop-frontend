import { Container, Stack, Typography } from '@mui/material';
import React from 'react';

export default function Theme() {
  return (
    <Container>
      <Stack gap={5}>
        <Typography variant="h1">Typography h1</Typography>
        <Typography variant="h2">Typography h2</Typography>
        <Typography variant="h3">Typography h3</Typography>
        <Typography variant="h4">Typography h4</Typography>
        <Typography variant="h5">Typography h5</Typography>
        <Typography variant="h6">Typography h6</Typography>
        <Typography variant="body1">Typography body1</Typography>
        <Typography variant="body2">Typography body2</Typography>
        <Typography variant="subtitle1">Typography subtitle1</Typography>
        <Typography variant="subtitle2">Typography subtitle2</Typography>
        <Typography variant="button">Typography button</Typography>
        <Typography variant="caption">Typography caption</Typography>
      </Stack>
    </Container>
  );
}
