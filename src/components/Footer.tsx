import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import { Instagram, X, YouTube } from '@mui/icons-material';
import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginY: 2
      }}
    >
      <Stack direction="row" justifyContent="space-between" gap={2}>
        <Image
                src="/logo-everloop-long.svg"
                alt="logo"
                width={120}
                height={40}
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
          gap={5}
        >
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
      <Box marginY={1}>
        <Divider />
      </Box>
      <Typography variant="caption" textAlign='center'>
        © 2024 Everloop. All rights reserved.
      </Typography>
    </Container>
  );
}
