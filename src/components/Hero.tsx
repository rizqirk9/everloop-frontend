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
  backgroundImage: 'url(https://placehold.jp/1000x1000.png)', // Replace with your image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Black overlay with 50% opacity
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
          <Typography align="left" variant="h3">
            Building Community, Cultivating Sustainability
          </Typography>
          <Typography align="left" variant="subtitle2">
            Together, we stay in the loop to build vibrant communities and
            nurture a sustainable future.
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
