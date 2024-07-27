'use client';

import { Box, Button, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

import { login } from './handler';

const AuthPage = () => {
  const { handleSubmit, register } = useForm({
    mode: 'onChange'
  });

  return (
    <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: '100vh'
      }}
    >
      <Stack spacing={2} width={'50vh'}>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          {...register('username')}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          {...register('password')}
        />
        <Button variant="contained" onClick={handleSubmit(login)}>
          Login
        </Button>
      </Stack>
    </Box>
  );
};

export default AuthPage;
