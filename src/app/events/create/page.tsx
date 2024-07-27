'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

import { CloudUpload } from '@mui/icons-material';
import { Box, Button, Container, Stack, TextField } from '@mui/material';

import { VisuallyHiddenInput } from '@/components';
import { createEvent } from './handler';

export default function CreatePage() {
  const { handleSubmit, register, setValue } = useForm();

  const [imageBanner, setImageBanner] = useState<string>();

  const handleImageBannerChange = (e: any) => {
    setImageBanner(URL?.createObjectURL(e.target.files?.[0]));
    setValue('banner', e.target.files?.[0]);
  };

  return (
    <Container>
      <Stack direction="column" spacing={5}>
        <TextField
          placeholder="Masukan nama event"
          label="Nama Event"
          {...register('name')}
        />
        <TextField
          placeholder="Masukan deskripsi event"
          label="Deskripsi Event"
          multiline
          maxRows={4}
          {...register('description')}
        />
        <TextField label="Tanggal Event" type="date" {...register('date')} />
        <TextField
          placeholder="Masukan pendanaan yang dibutuhkan"
          label="Pendanaan"
          type="number"
          {...register('budget')}
        />
        <TextField
          placeholder="Masukan jumlah volunteer yang dibutuhkan"
          label="Volunteer"
          type="number"
        />
        <Box>
          {imageBanner && (
            <Image
              width={1000}
              height={500}
              src={imageBanner}
              alt="event banner upload"
              style={{
                objectFit: 'cover'
              }}
            />
          )}
          <Button
            component="label"
            role={undefined}
            variant="outlined"
            tabIndex={-1}
            startIcon={<CloudUpload />}
            onChange={handleImageBannerChange}
          >
            Upload Banner
            <VisuallyHiddenInput type="file" />
          </Button>
        </Box>

        <Button variant="contained" onClick={handleSubmit(createEvent)}>
          Simpan
        </Button>
      </Stack>
    </Container>
  );
}
