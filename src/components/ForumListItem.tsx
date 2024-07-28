import { FORUMS } from '@/constants/routes';
import { ForumType } from '@/types';
import { formatDate } from '@/utils/formatDate'
import { makeTextBrief } from '@/utils/makeTextBrief'
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
        <Stack direction="row" justifyContent="space-between" alignItems="end" gap={5}>
          <Stack gap={3} width="80%">
            <Typography variant="body1">{forum.title}</Typography>
            <Typography variant="caption">{formatDate(forum.createdAt)}</Typography>
            <div
              dangerouslySetInnerHTML={{
                __html: makeTextBrief(forum.content, 500)
              }}
            ></div>
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
