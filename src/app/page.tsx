import Hero from '@/components/Hero';
import { CAMPAIGNS } from '@/constants/routes';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Stack,
  Typography
} from '@mui/material';
import { Widgets as WidgetsIcon } from '@mui/icons-material';

const OurServices = () => {
  const services = [
    {
      title: 'Campaign',
      description: 'Donate or join our interesting campaign',
      link: CAMPAIGNS.LIST
    },
    {
      title: 'Forum',
      description:
        'Let’s get connect and collaborate with huge community of sustainability',
      link: CAMPAIGNS.LIST
    },
    {
      title: 'Informasi Mitigasi',
      description: 'Stay informed with our disaster mitigation real-time data',
      link: CAMPAIGNS.LIST
    }
  ];

  return (
    <Container
      sx={{
        alignItems: 'center',
        marginY: 16
      }}
    >
      <Stack gap={4}>
        <Typography variant="h3" textAlign="center">
          Our Services
        </Typography>
        <Typography variant="body2" textAlign="center">
          Discover Our Sustainable Loop Services
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
        {services.map((service, index) => (
          <Card
            sx={{
              padding: 2
            }}
            key={index}
          >
            <CardContent>
              <WidgetsIcon />
              <Typography gutterBottom variant="h5">
                {service.title}
              </Typography>
              <Typography variant="subtitle2">{service.description}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained">
                Detail
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

export default function Home() {
  return (
    <Box>
      <Hero />
      <OurServices />
    </Box>
  );
}
