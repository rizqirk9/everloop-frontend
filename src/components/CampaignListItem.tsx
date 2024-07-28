import { CAMPAIGNS } from '@/constants/routes';
import { CampaignType } from '@/types';
import { formatNumber } from '@/utils/formatNumber';
import { makeTextBrief } from '@/utils/makeTextBrief';
import {
  Box,
  Button,
  Chip,
  Grid,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
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
        flexGrow: 1,
      }}
    >
      {campaign.banner?.data ? (
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${campaign.banner.data.attributes.url}`}
          alt="Campaign"
          style={{ width: '100%', height: '200px' }}
          width={300}
          height={300}
          objectFit="cover"
        />
      ) : (
        <Box
          style={{
            width: '100%',
            height: '200px',
            backgroundColor: '#f0f0f0'
          }}
        ></Box>
      )}
      <Box mt={4}>
        <Chip label={campaign.type === 'donor' ? 'Donatur' : 'Relawan'} />
      </Box>
      <Stack gap={2} mt={2} mb={5}>
        <Typography variant="h5">{campaign.name}</Typography>
        <Typography variant="subtitle2">
          <div
            dangerouslySetInnerHTML={{
              __html: makeTextBrief(campaign.description, 100)
            }}
          ></div>
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          {campaign.type === 'donor'
            ? `Rp ${formatNumber(campaign.budget)}`
            : `${formatNumber(campaign.volunteer)} Orang`} 
        </Typography>
      </Stack>
      <Link href={`${CAMPAIGNS.LIST}/${campaign.uuid}`}>
        <Button variant="contained" size="medium" color="primary">
          Lihat Campaign
        </Button>
      </Link>
    </Paper>
  );
}
