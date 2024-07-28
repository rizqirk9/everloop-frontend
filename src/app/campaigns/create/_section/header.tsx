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
        <Typography variant="h4">Buat Campaign</Typography>
        <Typography variant="body2">
          Buat campaign untuk mendapatkan relawan atau donatur
        </Typography>
      </Stack>
    </Box>
  );
}
