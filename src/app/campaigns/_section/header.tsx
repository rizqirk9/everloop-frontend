import { Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';

export default function Header() {
  return (
    <Container
      sx={{
        marginY: 10
      }}
    >
      <Stack direction="column" gap={2}>
        <Typography variant="h4">Campaign</Typography>
        <Stack
          direction={'row'}
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Typography variant="body2">
            Temukan Campaign yang ingin kamu ikuti dan berikan kontribusi
            terbaikmu!
          </Typography>
          <Button variant="contained">Buat campaign</Button>
        </Stack>
      </Stack>
    </Container>
  );
}
