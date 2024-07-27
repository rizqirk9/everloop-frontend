'use client';

import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import React from 'react';

export default function CTA() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        paddingY: 16
      }}
    >
      <Container>
        <Stack gap={5} direction="row" justifyContent="space-between">
          <Box width='40%'>
            <Typography variant="h4" color="white">
              Mari bekerjasama untuk bangun ekosistem berkelanjutan!
            </Typography>
          </Box>
          <Stack gap={2} width='60%'>
            <Typography variant="subtitle2" color="white">
              Everloop berkomitmen untuk menciptakan perubahan positif melalui
              berbagai layanan kami yang berfokus pada keberlanjutan dan
              pengembangan komunitas. Kami percaya bahwa melalui kerjasama yang
              erat dengan berbagai pemangku kepentingan, kita dapat mencapai
              tujuan bersama untuk masa depan yang lebih baik.
            </Typography>
            <Box>
              <Button variant="contained" color="secondary">
                Mari Terhubung
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
