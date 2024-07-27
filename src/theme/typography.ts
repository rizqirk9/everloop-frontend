import { TypographyOptions } from '@mui/material/styles/createTypography';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
});

const typography: TypographyOptions = {
  fontFamily: poppins.style.fontFamily,
  h1: {
    fontSize: 60,
    fontWeight: '500'
  },
  h2: {
    fontSize: 48,
    fontWeight: '500'
  },
  h3: {
    fontSize: 36,
    fontWeight: '500'
  },
  h4: {
    fontSize: 32,
    fontWeight: '500'
  },
  h5: {
    fontSize: 24,
    fontWeight: '500'
  },
  h6: {
    fontSize: 21,
    fontWeight: '500'
  },
  body1: {
    fontSize: 19,
    fontWeight: '500'
  },
  body2: {
    fontSize: 19,
    fontWeight: '400'
  },
  subtitle1: {
    fontSize: 15,
    fontWeight: '500'
  },
  subtitle2: {
    fontSize: 15,
    fontWeight: '400'
  },
  button: {
    fontSize: 17,
    fontWeight: '500',
    textTransform: 'none'
  },
  caption: {
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase'
  }
};

export default typography;
