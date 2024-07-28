import { Box, Button, FormControl, Stack } from '@mui/material';
import StarterKit from '@tiptap/starter-kit';
import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
  RichTextEditorRef
} from 'mui-tiptap';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createComment, getComments } from '../handler';
import { CommentType } from '@/types';
import Comment from './comment';

export default function CommentInput({ forum }: { forum: number }) {
  const [comments, setComments] = useState<
    {
      id: number;
      attributes: CommentType;
    }[]
  >([]);
  const rteRef = useRef<RichTextEditorRef>(null);

  const {
    handleSubmit,
    setValue,
    formState: { isSubmitted }
  } = useForm();

  async function fetchData() {
    const data = await getComments(forum);

    setComments(data.data);
  }

  useEffect(() => {
    setValue('forum', forum);
    fetchData();
  }, [forum]);

  useEffect(() => {
    fetchData();
  }, [isSubmitted]);

  return (
    <Box>
      <Stack my={5} gap={5}>
        <FormControl>
          <Box>
            <RichTextEditor
              ref={rteRef}
              extensions={[StarterKit]}
              onBlur={() =>
                setValue('comment', rteRef.current?.editor?.getHTML())
              }
              renderControls={() => (
                <MenuControlsContainer>
                  <MenuSelectHeading />
                  <MenuDivider />
                  <MenuButtonBold />
                  <MenuButtonItalic />
                </MenuControlsContainer>
              )}
            />
          </Box>
        </FormControl>
      </Stack>

      <Button variant="contained" onClick={handleSubmit(createComment)}>
        Tambahkan Komentar
      </Button>

      <Stack gap={2} mt={5}>
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment.attributes} />
        ))}
      </Stack>
    </Box>
  );
}
