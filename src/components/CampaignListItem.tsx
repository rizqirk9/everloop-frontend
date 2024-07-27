import { CampaignType } from '@/types';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function CampaignListItem({
  campaign
}: {
  campaign: CampaignType;
}) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper
        sx={{
          p: 2,
          textAlign: 'left',
          minHeight: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        {campaign.banner?.data ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${campaign.banner.data.attributes.url}`}
            alt="Campaign"
            style={{ width: '100%', height: 'auto' }}
            width={300}
            height={300}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '150px',
              backgroundColor: '#f0f0f0'
            }}
          ></div>
        )}
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 1 }}>
            {campaign.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical'
            }}
          >
            {campaign.description}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Rp {campaign.budget}
          </Typography>
        </Box>
        <Button variant="contained" color="primary" size="small" fullWidth>
          Lihat
        </Button>
      </Paper>
    </Grid>
  );
}
