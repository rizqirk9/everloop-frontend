'use client';

import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
  type RichTextEditorRef
} from 'mui-tiptap';
import StarterKit from '@tiptap/starter-kit';
import React, { useRef, useState } from 'react';
import { CloudUpload } from '@mui/icons-material';
import { VisuallyHiddenInput } from '@/components';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { createEvent } from '../handler';

export default function Form() {
  const rteRef = useRef<RichTextEditorRef>(null);

  const [imageBanner, setImageBanner] = useState<string>();
  const { handleSubmit, register, setValue, getValues, watch } = useForm();

  const handleImageBannerChange = (e: any) => {
    setImageBanner(URL?.createObjectURL(e.target.files?.[0]));
    setValue('banner', e.target.files?.[0]);
  };

  return (
    <Box>
      <Stack my={5} gap={5}>
        <FormControl>
          <Box>
            <Typography marginBottom={2} variant="subtitle1">
              Nama Campaign
            </Typography>
            <TextField
              placeholder="Masukan nama campaign"
              variant="outlined"
              fullWidth
              {...register('name')}
            />
          </Box>
        </FormControl>

        <FormControl>
          <Box>
            <Typography marginBottom={2} variant="subtitle1">
              Deskripsi
            </Typography>
            <RichTextEditor
              ref={rteRef}
              extensions={[StarterKit]}
              onBlur={() =>
                setValue('description', rteRef.current?.editor?.getHTML())
              }
              renderControls={() => (
                <MenuControlsContainer>
                  <MenuSelectHeading />
                  <MenuDivider />
                  <MenuButtonBold />
                  <MenuButtonItalic />
                  {/* Add more controls of your choosing here */}
                </MenuControlsContainer>
              )}
            />
          </Box>
        </FormControl>

        <FormControl>
          <Box>
            <Typography marginBottom={2} variant="subtitle1">
              Jenis Campaign
            </Typography>
            <Select
              id="campaign-type"
              placeholder="Pilih jenis campaign"
              fullWidth
              {...register('type')}
            >
              <MenuItem value={'volunteer'}>Relawan</MenuItem>
              <MenuItem value={'donor'}>Donasi</MenuItem>
            </Select>
          </Box>
        </FormControl>

        {watch('type') === 'donor' && (
          <FormControl>
            <Box>
              <Typography marginBottom={2} variant="subtitle1">
                Jumlah donasi yang dibutuhkan
              </Typography>
              <TextField
                placeholder="Masukan jumlah donasi yang dibutuhkan"
                variant="outlined"
                type="number"
                fullWidth
                {...register('budget')}
              />
            </Box>
          </FormControl>
        )}

        {watch('type') === 'volunteer' && (
          <FormControl>
            <Box>
              <Typography marginBottom={2} variant="subtitle1">
                Jumlah relawan yang dibutuhkan
              </Typography>
              <TextField
                placeholder="Masukan jumlah relawan yang dibutuhkan"
                variant="outlined"
                type="number"
                fullWidth
                {...register('volunteer')}
              />
            </Box>
          </FormControl>
        )}

        <FormControl>
          <Box>
            <Typography marginBottom={2} variant="subtitle1">
              Upload poster
            </Typography>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUpload />}
              onChange={handleImageBannerChange}
            >
              Upload
              <VisuallyHiddenInput type="file" />
            </Button>

            {imageBanner && (
              <Image
                width={1000}
                height={500}
                src={imageBanner}
                alt="event banner upload"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: 'auto'
                }}
              />
            )}
          </Box>
        </FormControl>
      </Stack>

      <Button variant="contained" onClick={handleSubmit(createEvent)}>
        Simpan
      </Button>
    </Box>
  );
}
