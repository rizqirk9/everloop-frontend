import {
  Container,
  Box,
  TextField,
  Typography,
  FormLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@mui/material';
import React from 'react';

export default function Form() {
  return (
    <Container>
      <Box>
        <FormControl>
          <Typography variant="subtitle1">Label</Typography>
          <TextField placeholder="Placeholder" variant="outlined" />
        </FormControl>
      </Box>

      <Box>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </Box>
    </Container>
  );
}
