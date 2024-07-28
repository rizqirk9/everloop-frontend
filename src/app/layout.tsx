import type { Metadata } from 'next';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';

import theme from '../theme';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Everloop',
  description: 'Bersama Untuk Bumi yang Lebih Baik'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider options={{ key: 'css' }}>
        <ThemeProvider theme={theme}>
          <body
            style={{
              margin: 0
            }}
          >
            <Navbar />
            {children}
            <Footer />
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
