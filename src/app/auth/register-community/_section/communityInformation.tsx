'use client';

import {
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import React from 'react';

export default function CommunityInformation() {
  return (
    <Box paddingY={10}>
      <Typography variant="h4">Informasi Komunitas</Typography>
      <Stack my={5} gap={5}>
        <FormControl>
          <Box>
            <Typography marginBottom={2} variant="subtitle1">
              Nama Komunitas
            </Typography>
            <TextField
              placeholder="Masukan nama Komunitas"
              variant="outlined"
              fullWidth
            />
          </Box>
        </FormControl>

        <FormControl>
          <Box>
            <Typography marginBottom={2} variant="subtitle1">
              Jumlah Anggota Komunitas
            </Typography>
            <TextField
              placeholder="Masukan jumlah anggota"
              variant="outlined"
              type="number"
              fullWidth
            />
          </Box>
        </FormControl>

        <FormControl>
          <Box>
            <Typography marginBottom={2} variant="subtitle1">
              Tautan Sosial Media
            </Typography>
            <TextField
              placeholder="Masukan tautan sosial media"
              variant="outlined"
              fullWidth
            />
          </Box>
        </FormControl>
      </Stack>
    </Box>
  );
}
