'use client';

import React from 'react';

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import { Menu as MenuIcon, Adb as AdbIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material';
import Image from 'next/image';
import { CAMPAIGNS, FORUMS } from '@/constants/routes';
import Link from 'next/link';

export default function Navbar() {
  const pages = [
    {
      name: 'Campaign',
      link: CAMPAIGNS.LIST
    },
    {
      name: 'Forum',
      link: FORUMS.LIST
    },
    {
      name: 'Kerjasama',
      link: FORUMS.LIST
    }
  ];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      color="secondary"
      sx={{
        boxShadow: 'none'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page, index) => (
                <Link href={page.link} key={index}>
                  <MenuItem>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Stack
              direction="row"
              gap={2}
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Image
                src="/logo-everloop-long.svg"
                alt="logo"
                width={120}
                height={40}
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
              <Stack direction="row" flex={1} gap={2}>
                {pages.map((page, index) => (
                  <Link href={page.link} key={index} style={{
                    textDecoration: 'none'
                  }}>
                    <Button
                      sx={{ my: 2, color: 'CaptionText', display: 'block' }}
                    >
                      {page.name}
                    </Button>
                  </Link>
                ))}
              </Stack>
              <Stack direction="row" gap={2}>
                <Button variant="contained">Daftar</Button>
                <Button variant="outlined">Masuk</Button>
              </Stack>
            </Stack>
          </Box>

          <Box sx={{ flexGrow: 0 }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
