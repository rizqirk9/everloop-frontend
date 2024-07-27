'use effect';

import MitigationListItem from '@/components/MitigationListItem';
import { Container, Stack, Typography } from '@mui/material';
import React from 'react';

export default function Mitigation() {
  return (
    <Container
      sx={{
        marginY: 16
      }}
    >
      <Stack gap={2}>
        <Typography variant="h3" textAlign="center">
          Informasi Mitigasi
        </Typography>
        <Typography variant="body2" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Stack>
      <Stack
        direction="row"
        gap={5}
        marginTop={10}
        sx={{
          width: '100%',
          '& > *': {
            width: '100%'
          }
        }}
      >
        <MitigationListItem />
        <MitigationListItem />
        <MitigationListItem />
      </Stack>
    </Container>
  );
}
