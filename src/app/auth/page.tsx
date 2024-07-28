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
            src={'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=1000&h=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvcmVzdHxlbnwwfHwwfHx8Mg%3D%3D'}
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
