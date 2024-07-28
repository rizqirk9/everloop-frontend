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
import { createForum } from '../handler';

export default function Form() {
  const rteRef = useRef<RichTextEditorRef>(null);

  const { handleSubmit, register, setValue } = useForm();

  return (
    <Box>
      <Stack my={5} gap={5}>
        <FormControl>
          <Box>
            <Typography marginBottom={2} variant="subtitle1">
              Judul
            </Typography>
            <TextField
              placeholder="Masukan judul forum"
              variant="outlined"
              fullWidth
              {...register('title')}
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
                setValue('content', rteRef.current?.editor?.getHTML())
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
      </Stack>

      <Button variant="contained" onClick={handleSubmit(createForum)}>
        Simpan
      </Button>
    </Box>
  );
}
