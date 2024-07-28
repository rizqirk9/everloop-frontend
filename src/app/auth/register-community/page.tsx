'use client';

import {
  Box,
  Button,
  Container,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import AccountInformation from './_section/accountInformation';
import CommunityInformation from './_section/communityInformation';
import CommunityActivity from './_section/communityActivity';
import Image from 'next/image';

const steps = ['Informasi Akun', 'Informasi Komunitas', 'Aktivitas Komunitas'];

export default function RegisterCommunity() {
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
        return <AccountInformation />;
      case 2:
        return <CommunityInformation />;
      case 3:
        return <CommunityActivity />;
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
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel />
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 10, mb: 1 }}>
                Terima kasih telah mendaftarkan komunitas anda, proses selanjutnya akan di verifikasi oleh Everloop.
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
            src={'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=1000&h=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
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
