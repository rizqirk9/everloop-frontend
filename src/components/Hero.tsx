'use client';

import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  styled
} from '@mui/material';
import React from 'react';

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '80vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  textAlign: 'center',
  backgroundImage:
    'url(https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)' // Black overlay with 50% opacity
  }
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  alignItems: 'start'
}));

export default function Hero() {
  return (
    <HeroSection>
      <ContentContainer>
        <Stack
          alignItems="start"
          sx={{
            width: {
              md: '60%'
            }
          }}
          gap={5}
        >
          <Typography align="left" variant="h3" color={'white'}>
            Bersama untuk bumi yang lebih baik
          </Typography>
          <Typography align="left" variant="subtitle2" color={'white'}>
            Terhubung, kolaborasi bersama untuk masa depan yang berkelanjutan
          </Typography>
          <Stack direction="row" gap={2}>
            <Button variant="contained" color="primary">
              Lihat Campaign
            </Button>
            <Button variant="contained" color="secondary">
              Gabung Forum
            </Button>
          </Stack>
        </Stack>
      </ContentContainer>
    </HeroSection>
  );
}
