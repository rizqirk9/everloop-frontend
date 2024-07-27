'use client';

import React, { useEffect, useState } from 'react';

import { Button, Container, IconButton, Stack, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import ForumListItem from '@/components/ForumListItem';
import { getForums } from '../handler';

export default function List() {
  const [forums, setForums] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getForums();
      setForums(data);
    }

    fetchData();
  }, []);

  return (
    <Container
      sx={{
        my: 16
      }}
    >
      <Stack
        direction="row"
        width="100%"
        justifyContent="space-between"
        gap={2}
      >
        <TextField placeholder="Cari kata kunci" fullWidth />
        <Button size="small" variant="contained">
          Cari
        </Button>
      </Stack>
      <Stack gap={2} marginY={10}>
        {forums.map((forum, index) => (
          <ForumListItem forum={forum.attributes} key={index} />
        ))}
      </Stack>
    </Container>
  );
}
