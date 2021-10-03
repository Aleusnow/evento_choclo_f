import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MiSelect({ valor, setValor, opciones, label, nombre}) {

    return (
        <Box sx={{ minWidth: 300 }}>
            <FormControl fullWidth>
                <InputLabel id={" select-" + label} >{label}</InputLabel>
                <Select
                    labelId={"select-" + label}
                    id={label}
                    name={nombre} //nombre de valor
                    value={valor} //valor
                    label={label} //pregunta
                    onChange={setValor}
                    size="small"
                >
                    {opciones.map(opcion => {
                        return (<MenuItem value={opcion}>{opcion}</MenuItem>)
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}