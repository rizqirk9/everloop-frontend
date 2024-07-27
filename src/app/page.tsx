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
import Forum from './_section/forum'
import Mitigation from './_section/mitigation'
import AboutUs from './_section/aboutUs'
import CTA from './_section/cta'
import Shortcut from './_section/shortcut'
import Campaign from './_section/campaign'

export default function Home() {
  return (
    <Box>
      <Hero />
      <Shortcut />
      <Campaign />
      <Forum />
      <Mitigation />
      <AboutUs />
      <CTA />
    </Box>
  );
}
