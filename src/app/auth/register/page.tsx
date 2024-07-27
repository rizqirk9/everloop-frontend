'use client';

import {
  Box,
  Button,
  Container,
  Stack,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import Form from './_section/form';
import Image from 'next/image';

const steps = ['Pengisian Form'];

export default function Register() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const renderStepForm = (step: number) => {
    switch (step) {
      case 1:
        return <Form />;
      default:
        break;
    }
  };

  return (
    <Container
      sx={{
        my: 8
      }}
    >
      <Stack direction="row" spacing={5} justifyContent="space-between">
        <Box width={'50%'}>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 10, mb: 1 }}>
                Terima kasih telah mendaftarkan diri anda, proses
                selanjutnya akan di verifikasi oleh Everloop.
              </Typography>
            </React.Fragment>
          ) : (
            <Box>
              {renderStepForm(activeStep + 1)}
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Kembali
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Daftar' : 'Lanjut'}
                </Button>
              </Box>
            </Box>
          )}
        </Box>

        <Box
          sx={{
            width: '50%',
            height: '30%',
            position: 'sticky',
            top: 20
          }}
        >
          <Image
            src={'https://placehold.jp/1000x1000.png'}
            width={1000}
            height={1000}
            style={{
              width: '100%',
              height: '100%'
            }}
            alt="register_img"
          />
        </Box>
      </Stack>
    </Container>
  );
}
