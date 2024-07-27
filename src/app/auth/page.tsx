'use client';

import {
  Box,
  Button,
  Container,
  FormControl,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { useForm } from 'react-hook-form';

import { login } from './handler';
import Image from 'next/image';

const AuthPage = () => {
  const { handleSubmit, register } = useForm({
    mode: 'onChange'
  });

  return (
    <Container
      sx={{
        my: 8
      }}
    >
      <Stack direction="row" spacing={5} justifyContent="space-between">
        <Box width={'50%'} paddingY={10}>
          <Typography variant="h4">Masuk</Typography>
          <Stack my={5} gap={5}>
            <FormControl>
              <Box>
                <Typography marginBottom={2} variant="subtitle1">
                  Email
                </Typography>
                <TextField
                  placeholder="Masukan email"
                  variant="outlined"
                  type="email"
                  fullWidth
                  {...register('username')}
                />
              </Box>
            </FormControl>

            <FormControl>
              <Box>
                <Typography marginBottom={2} variant="subtitle1">
                  Password
                </Typography>
                <TextField
                  placeholder="Masukan password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  {...register('password')}
                />
              </Box>
            </FormControl>
          </Stack>
          <Button variant="contained" onClick={handleSubmit(login)}>
            Login
          </Button>
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
            alt="login_img"
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default AuthPage;
