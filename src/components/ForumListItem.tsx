import { Box, Button, Card, CardContent, Stack, Typography } from '@mui/material';
import React from 'react';

export default function ForumListItem({ forum }: { forum: any }) {
  return (
    <Card>
      <CardContent>
        <Stack direction="row" justifyContent='space-between' alignItems="end">
          <Stack gap={3}>
            <Typography variant="body1">{forum.title}</Typography>
            <Typography variant="caption">{forum.createdAt}</Typography>
            <Typography variant="subtitle2">{forum.content}</Typography>
          </Stack>
          <Box>
            <Button variant="contained" size="small" color="primary">
              Lihat Forum
            </Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
