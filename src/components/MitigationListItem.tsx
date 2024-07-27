import { Widgets as WidgetsIcon } from '@mui/icons-material';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@mui/material';

import React from 'react';

export default function MitigationListItem() {
  return (
    <Card
      sx={{
        padding: 2
      }}
    >
      <CardContent>
        <WidgetsIcon />
        <Typography gutterBottom variant="h5">
          Medium length section heading goes here
        </Typography>
        <Typography variant="subtitle2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Detail
        </Button>
      </CardActions>
    </Card>
  );
}
