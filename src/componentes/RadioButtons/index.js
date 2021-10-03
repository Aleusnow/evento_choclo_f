import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function MiRadioButton({valor, setValor,opciones, label}) {

  const handleChange = (event) => {
    setValor(event.target.value)
  }


  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label={label}
        value= {valor}
        name={label}
        onChange = {setValor}
      >
        {opciones.map(opcion => 
        <FormControlLabel value={opcion} control={<Radio />} label={opcion} />)}

      </RadioGroup>
    </FormControl>
  );
}