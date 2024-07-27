import { CAMPAIGNS } from '@/constants/routes';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Stack,
  Typography
} from '@mui/material';
import React from 'react';
import { CardGiftcard, People, ChatBubble, Warning } from '@mui/icons-material';

export default function Shortcut() {
  const shortcuts = [
    {
      title: 'Jadi donatur',
      link: CAMPAIGNS.LIST,
      icon: <CardGiftcard />
    },
    {
      title: 'Jadi relawan',
      link: CAMPAIGNS.LIST,
      icon: <People />
    },
    {
      title: 'Jelajahi forum komunitas',
      link: CAMPAIGNS.LIST,
      icon: <ChatBubble />
    },
    {
      title: 'Informasi mitigasi',
      link: CAMPAIGNS.LIST,
      icon: <Warning />
    }
  ];

  return (
    <Container
      sx={{
        paddingY: 16
      }}
    >
      <Stack gap={2}>
        <Typography variant="h3" textAlign="center">
          Kontribusi apa yang ingin kamu buat hari ini?
        </Typography>
      </Stack>
      <Stack
        direction="row"
        gap={5}
        marginTop={10}
        sx={{
          width: '100%',
          '& > *': {
            width: '100%'
          }
        }}
      >
        {shortcuts.map((shortcut, index) => (
          <Card
            sx={{
              padding: 2
            }}
            key={index}
          >
            <CardContent>
              {shortcut.icon}
              <Typography gutterBottom variant="h5">
                {shortcut.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained">
                Kunjungi
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
