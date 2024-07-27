'use client';

import { getCampaigns } from '../handler';
import CampaignListItem from '@/components/CampaignListItem';
import { CampaignType, PaginationType } from '@/types';
import {
  Container,
  Stack,
  List as ListMaterial,
  ListItemButton,
  ListItemText,
  TextField,
  Button,
  Grid,
  Box
} from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function List() {
  const [campaigns, setCampaigns] = useState<
    {
      id: number;
      attributes: CampaignType;
    }[]
  >([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagination, setPagination] = useState<PaginationType>({
    page: 1,
    pageCount: 1,
    pageSize: 1,
    total: 0
  });

  const [type, setType] = useState<'donor' | 'volunteer'>('donor');

  useEffect(() => {
    async function fetchData() {
      const data = await getCampaigns(currentPage);
      setCampaigns(data.data);
      setPagination(data.meta.pagination);
    }

    fetchData();
  }, [currentPage]);

  return (
    <Container
      sx={{
        my: 5
      }}
    >
      <Stack
        direction="row"
        width="100%"
        justifyContent="space-between"
        gap={2}
      >
        <TextField placeholder="Cari kata kunci" fullWidth />
        <Button size="small" variant="contained">
          Cari
        </Button>
      </Stack>
      <Stack mt={5} direction="row" gap={2}>
        {/* Filter */}
        <ListMaterial>
          <ListItemButton selected={type === 'donor'}>
            <ListItemText primary="Donasi" sx={{ fontSize: '0.875rem' }} />
          </ListItemButton>
          <ListItemButton selected={type === 'volunteer'}>
            <ListItemText primary="Relawan" sx={{ fontSize: '0.875rem' }} />
          </ListItemButton>
        </ListMaterial>

        {/* Campaign List */}
        <Grid container spacing={2}>
          {campaigns &&
            campaigns.map((campaign, index) => (
              <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
                <Box width="100%">
                  <CampaignListItem campaign={campaign.attributes} />
                </Box>
              </Grid>
            ))}
        </Grid>
      </Stack>
    </Container>
  );
}
