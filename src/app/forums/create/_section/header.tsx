import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';

export default function Header() {
  return (
    <Box
      sx={{
        marginY: 10
      }}
    >
      <Stack direction="column" gap={2}>
        <Typography variant="h4">Buat Forum</Typography>
        <Typography variant="body2">
          Buat diskusi terkait keberlanjutan lingkungan atau penanggulangan bencana
        </Typography>
      </Stack>
    </Box>
  );
}
