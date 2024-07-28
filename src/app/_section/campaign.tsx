'use client';

import { CampaignType } from '@/types';
import { Button, Container, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getCampaigns } from '../handler';
import CampaignListItem from '@/components/CampaignListItem';
import { CAMPAIGNS } from '@/constants/routes';
import Link from 'next/link';

export default function Campaign() {
  const [campaigns, setCampaigns] = useState<
    {
      id: number;
      attributes: CampaignType;
    }[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCampaigns();
      setCampaigns(data);
    }

    fetchData();
  }, []);

  return (
    <Container
      sx={{
        paddingY: 16
      }}
    >
      <Stack gap={2}>
        <Typography variant="h3" textAlign="left">
          Campaign
        </Typography>
        <Stack
          direction={'row'}
          alignContent="end"
          justifyContent="space-between"
        >
          <Typography variant="body2" textAlign="left">
            Campaign terbaru
          </Typography>
            <Link href={CAMPAIGNS.LIST}>
              <Button variant="text" size="small">
                Lihat semua campaign
              </Button>
            </Link>
        </Stack>
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
        {campaigns &&
          campaigns.map((campaign, index) => (
            <CampaignListItem key={index} campaign={campaign.attributes} />
          ))}
      </Stack>
    </Container>
  );
}
