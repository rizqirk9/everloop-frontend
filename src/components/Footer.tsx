import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import { Instagram, X, YouTube } from '@mui/icons-material';
import React from 'react';

export default function Footer() {
  return (
    <Container
      sx={{
        marginY: 16
      }}
    >
      <Stack direction="row" justifyContent="space-between" gap={2}>
        <Typography variant="h4">LOGO</Typography>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
          gap={5}
        >
          <Typography variant="subtitle2">Link One</Typography>
          <Typography variant="subtitle2">Link One</Typography>
          <Typography variant="subtitle2">Link One</Typography>
          <Typography variant="subtitle2">Link One</Typography>
        </Stack>
        <Stack
          alignItems="end"
          justifyContent="space-between"
          direction="row"
          gap={2}
        >
          <Instagram />
          <X />
          <YouTube />
        </Stack>
      </Stack>
      <Box marginY={5}>
        <Divider />
      </Box>
      <Typography variant="caption" textAlign='center'>
        © 2024 Everloop. All rights reserved.
      </Typography>
    </Container>
  );
}
