'use client';

import {
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import React from 'react';
import { VisuallyHiddenInput } from '@/components';

export default function CommunityActivity() {
  return (
    <Box paddingY={10}>
      <Typography variant="h4">Aktivitas Komunitas</Typography>
      <Stack my={5} gap={10}>
        <FormControl>
          <Box marginBottom={3}>
            <Typography marginBottom={2} variant="subtitle1">
              Deskripsikan Komunitas / Aktivitas Komunitas
            </Typography>
            <TextField
              placeholder="Masukan deskripsi komunitas"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
            />
          </Box>
        </FormControl>

        <FormControl>
          <Box>
            <Typography marginBottom={2} variant="subtitle1">
              Upload Foto Kegiatan Komunitas
            </Typography>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload
              <VisuallyHiddenInput type="file" />
            </Button>
          </Box>
        </FormControl>
      </Stack>
    </Box>
  );
}
