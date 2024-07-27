import { FORUMS } from '@/constants/routes';
import { ForumType } from '@/types';
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography
} from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function ForumListItem({ forum }: { forum: ForumType }) {
  return (
    <Card>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="end">
          <Stack gap={3}>
            <Typography variant="body1">{forum.title}</Typography>
            <Typography variant="caption">{forum.createdAt}</Typography>
            <Typography variant="subtitle2">{forum.content}</Typography>
          </Stack>
          <Box>
            <Link href={`${FORUMS.LIST}/${forum.uuid}`}>
              <Button variant="contained" size="small" color="primary">
                Lihat Forum
              </Button>
            </Link>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
