import { FORUMS } from '@/constants/routes'
import { Button, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <Container
      sx={{
        marginY: 10
      }}
    >
      <Stack direction="column" gap={2}>
        <Typography variant="h4">Forum</Typography>
        <Stack
          direction={'row'}
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Typography variant="body2">
            Berdiskusi dengan komunitas dan menjalin relasi untuk keberlanjutan
            lingkungan
          </Typography>
          <Link href={FORUMS.CREATE}>
            <Button variant="contained">Buat forum</Button>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
}
