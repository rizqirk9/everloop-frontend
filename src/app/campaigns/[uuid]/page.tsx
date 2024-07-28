'use client'

import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Campaign from './_section/campaign';
import { CampaignType } from '@/types';
import { getCampaign } from './handler';

export default function CampaignDetails({
  params
}: {
  params: { uuid: string };
}) {
  const [campaign, setCampaign] = useState<CampaignType>();

  useEffect(() => {
    async function fetchData() {
      const data = await getCampaign(params.uuid as string);

      setCampaign(data.data.attributes);
    }

    if (params.uuid) {
      fetchData();
    }
  }, [params.uuid]);

  return <Container>{campaign && <Campaign campaign={campaign} />}</Container>;
}
