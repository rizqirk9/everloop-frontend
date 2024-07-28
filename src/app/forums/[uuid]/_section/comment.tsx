import { CommentType } from '@/types';
import { Card, CardContent, Stack } from '@mui/material';
import React from 'react';

export default function Comment({ comment }: { comment: CommentType }) {
  return (
    <Card>
      <CardContent>
        <Stack gap={2}>
          <div dangerouslySetInnerHTML={{ __html: comment.comment }}></div>
        </Stack>
      </CardContent>
    </Card>
  );
}
