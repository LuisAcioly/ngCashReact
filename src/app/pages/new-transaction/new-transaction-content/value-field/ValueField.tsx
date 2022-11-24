import { FormControl, TextField } from "@mui/material";
import { useEffect, useState } from "react";

interface IValueProps {
    error: boolean,
    message: string,
    handleValue: (arg: number) => void
}

export const ValueField: React.FC<IValueProps> = ({handleValue, error, message}) => {
    const [err, setErr] = useState(false);
    const [errMessage, setErrMessage] = useState('');

    useEffect(() => {
        console.log(message)
        setErr(error);
        setErrMessage(message);
    }, [error, message]);

    function handleChange(value: string){
        const num = Number(value);
        
        if(num < 0){
            setErr(true);
            setErrMessage("Não é permitido valores negativos.");
        }
        else{
            handleValue(num);
        }
    }

    return (
        <FormControl sx={{ width: '100%' }}>
            <TextField
                label="Valor"
                error={err}
                helperText={errMessage}
                onChange={e => handleChange(e.target.value)}
                name="numberformat"
                id="formatted-numberformat-input"
                variant="standard"
                InputProps={{ inputProps: { min: 0.1, type: 'number', } }}
            />
        </FormControl>
    );
}

