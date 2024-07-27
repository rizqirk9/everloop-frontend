'use client'

import { Button, Container, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getForums } from '../handler';
import ForumListItem from '@/components/ForumListItem';

export default function Forum() {
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
        paddingY: 16
      }}
    >
      <Stack gap={2}>
        <Typography variant="h3" textAlign="left">
          Forum
        </Typography>
        <Stack
          direction={'row'}
          alignContent="end"
          justifyContent="space-between"
        >
          <Typography variant="body2" textAlign="left">
            Bahasan Terpopuler Saat Ini
          </Typography>
          <Button variant="text" size="small">
            Lihat forum
          </Button>
        </Stack>
      </Stack>
      <Stack
        direction="column"
        gap={5}
        marginTop={10}
      >
        {forums.map((forum, index) => (
          <ForumListItem forum={forum.attributes} key={index} />
        ))}
      </Stack>
    </Container>
  );
}
