import { ForumType } from '@/types';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import React from 'react';

export default function Forum({ forum }: { forum: ForumType }) {
  return (
    <Card>
      <CardContent>
        <Stack gap={2}>
          <Typography>{forum.title}</Typography>
          <div dangerouslySetInnerHTML={{ __html: forum.content }}></div>
        </Stack>
      </CardContent>
    </Card>
  );
}
