import { Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function AboutUs() {
  return (
    <Container>
      <Stack gap={8}>
        <Stack
          direction="row"
          gap={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5" width="40%">
            Tentang Kami
          </Typography>
          <Typography variant="subtitle2" width="60%">
            Selamat datang di Everloop, tempat dimana keberlanjutan dan
            pengembangan komunitas menjadi pusat perhatian kami. Kami
            berdedikasi untuk menciptakan masa depan yang lebih baik melalui
            inisiatif yang mempromosikan lingkungan hijau dan komunitas yang
            kuat dan sejahtera.
          </Typography>
        </Stack>
        <Image
          src="https://placehold.jp/1000x1000.png"
          height={500}
          width={1000}
          alt="about_us_img"
          style={{ width: '100%', height: '400px' }}
        />
      </Stack>
    </Container>
  );
}
