import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel
} from '@material-ui/core';

export default ({ questionIndex, setOrientation }) => {
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
    setOrientation(questionIndex, event.target.value);
  };

  return (
    <div>
      <FormControl component='fieldset'>
        <RadioGroup value={value} onChange={handleChange}>
          <FormControlLabel
            value='up'
            control={<Radio />}
            label='Vers le haut'
          />
          <FormControlLabel
            value='down'
            control={<Radio />}
            label='Vers le bas'
          />
          <FormControlLabel
            value='right'
            control={<Radio />}
            label='Vers la droite'
          />
          <FormControlLabel
            value='left'
            control={<Radio />}
            label='Vers la gauche'
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
