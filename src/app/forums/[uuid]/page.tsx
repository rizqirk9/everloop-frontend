'use client';

import { ForumType } from '@/types';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getForum } from './handler';
import { Card, Container } from '@mui/material';
import Forum from './_section/forum';
import CommentInput from './_section/commentInput';

export default function ForumDetail({ params }: { params: { uuid: string } }) {
  const [forum, setForum] = useState<ForumType>();
  const [id, setId] = useState<number>();

  useEffect(() => {
    async function fetchData() {
      const data = await getForum(params.uuid as string);

      setForum(data.data.attributes);
      setId(data.data.id);
    }

    if (params.uuid) {
      fetchData();
    }
  }, [params.uuid]);

  return (
    <Container
      sx={{
        paddingY: 8
      }}
    >
      {forum && <Forum forum={forum} />}
      {id && <CommentInput forum={id} />}
    </Container>
  );
}
