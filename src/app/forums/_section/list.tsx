'use client';

import React, { useEffect, useState } from 'react';

import {
  Button,
  Container,
  IconButton,
  Pagination,
  Stack,
  TextField
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import ForumListItem from '@/components/ForumListItem';
import { getForums } from '../handler';
import { PaginationType } from '@/types'

export default function List() {
  const [forums, setForums] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagination, setPagination] = useState<PaginationType>({
    page: 1,
    pageCount: 1,
    pageSize: 1,
    total: 0
  });

  useEffect(() => {
    async function fetchData() {
      const data = await getForums(currentPage);
      setForums(data.data);
      setPagination(data.meta.pagination);
    }

    fetchData();
  }, [currentPage]);

  return (
    <Container
      sx={{
        my: 16
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
      <Stack gap={2} marginY={10}>
        {forums.map((forum, index) => (
          <ForumListItem forum={forum.attributes} key={index} />
        ))}
      </Stack>
      <Pagination
        count={pagination.pageCount}
        variant="outlined"
        page={pagination.page}
        onChange={(_e, page) => setCurrentPage(page)}
        color='primary'
      />
    </Container>
  );
}
