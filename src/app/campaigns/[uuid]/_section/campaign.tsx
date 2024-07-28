'use client';

import { CampaignType } from '@/types';
import { formatNumber } from '@/utils/formatNumber';
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Campaign({ campaign }: { campaign: CampaignType }) {
  const [donationAmount, setDonationAmount] = useState('');

  const handleNominalClick = (amount: number) => {
    setDonationAmount(amount.toString());
  };

  return (
    <Box>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            {campaign.banner?.data && (
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${campaign.banner?.data.attributes.url}`}
                alt="Campaign banner"
                style={{ width: '100%', height: 'auto' }}
                width={1000}
                height={1000}
              />
            )}
          </Paper>
        </Grid>
        {campaign.type === 'volunteer' && (
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h4">{campaign.name}</Typography>
              <Typography variant="h5" sx={{ ml: 2 }}>
                membutuhkan {formatNumber(campaign.volunteer)} Orang
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Daftar sebagai relawan
            </Button>
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" gutterBottom>
                Detail
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body1" gutterBottom>
                <div
                  dangerouslySetInnerHTML={{ __html: campaign.description }}
                ></div>
              </Typography>
            </Box>
          </Grid>
        )}
        {campaign.type === 'donor' && (
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h4">{campaign.name}</Typography>
              <Typography variant="h5" sx={{ ml: 2 }}>
                Rp {formatNumber(campaign.budget)}
              </Typography>
            </Box>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Jumlah Donasi
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Masukkan jumlah donasi"
                value={donationAmount}
                onChange={e => setDonationAmount(e.target.value)}
              />
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}
              >
                {[10000, 50000, 100000].map(amount => (
                  <Button
                    key={amount}
                    variant="outlined"
                    color="primary"
                    onClick={() => handleNominalClick(amount)}
                    sx={{ width: '30%', fontSize: '0.875rem' }}
                  >
                    {amount.toLocaleString('id-ID')}
                  </Button>
                ))}
              </Box>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Donasi
            </Button>
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" gutterBottom>
                Detail
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body1" gutterBottom>
                <div
                  dangerouslySetInnerHTML={{ __html: campaign.description }}
                ></div>
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
