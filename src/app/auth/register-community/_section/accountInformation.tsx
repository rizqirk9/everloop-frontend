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

export default function AccountInformation() {
  return (
    <Box paddingY={10}>
      <Typography variant="h4">Informasi Akun</Typography>
      <Stack my={5} gap={5}>
        <FormControl>
          <Box>
            <Typography marginBottom={2} variant="subtitle1">
              Nama Lengkap
            </Typography>
            <TextField
              placeholder="Masukan nama lengkap"
              variant="outlined"
              fullWidth
            />
          </Box>
        </FormControl>

        <FormControl>
          <Box>
            <Typography marginBottom={2} variant="subtitle1">
              Email
            </Typography>
            <TextField
              placeholder="Masukan email"
              variant="outlined"
              type="email"
              fullWidth
            />
          </Box>
        </FormControl>

        <FormControl>
          <Box>
            <Typography marginBottom={2} variant="subtitle1">
              No. Telepon
            </Typography>
            <TextField
              placeholder="Masukan nomor telepon"
              variant="outlined"
              type="number"
              fullWidth
            />
          </Box>
        </FormControl>

        <FormControl>
          <Box>
            <Typography marginBottom={2} variant="subtitle1">
              Password
            </Typography>
            <TextField
              placeholder="Masukan password"
              variant="outlined"
              type="password"
              fullWidth
            />
          </Box>
        </FormControl>

        <FormControl>
          <Box>
            <Typography marginBottom={2} variant="subtitle1">
              Konfirmasi Password
            </Typography>
            <TextField
              placeholder="Masukan password"
              variant="outlined"
              type="password"
              fullWidth
            />
          </Box>
        </FormControl>

        <FormControl>
          <Box>
            <Typography marginBottom={2} variant="subtitle1">
              Upload Kartu Identitas
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

        <FormControl>
          <Box>
            <Typography marginBottom={2} variant="subtitle1">
              Upload Foto Diri
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
