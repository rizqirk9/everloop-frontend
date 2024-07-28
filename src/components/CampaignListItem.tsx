import { CAMPAIGNS } from '@/constants/routes'
import { CampaignType } from '@/types';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react';

export default function CampaignListItem({
  campaign
}: {
  campaign: CampaignType;
}) {
  return (
    <Paper
      sx={{
        p: 2,
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1
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
          <div dangerouslySetInnerHTML={{ __html: campaign.description }}></div>
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Rp {campaign.budget}
        </Typography>
      </Box>
      <Link href={`${CAMPAIGNS.LIST}/${campaign.uuid}`}>
        <Button variant="contained" size="small" color="primary">
          Lihat Campaign
        </Button>
      </Link>
    </Paper>
  );
}
