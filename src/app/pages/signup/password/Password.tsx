import  { useState } from 'react';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import './PasswordStyle.css';

interface IPasswordProps {
    err: boolean,
    errMessage: string | undefined,
    handlePassword: (arg: string) => void
}

export const Password: React.FC<IPasswordProps> = ({handlePassword, errMessage, err}) => {
    const [password, setPassword] = useState('');


    function onPassword(input: string) {
        setPassword(input);
        handlePassword(input);
    }

    return (
        <div className="password">
            <FormControl sx={{ width: '100%' }}>
                <TextField
                    error={err}
                    helperText={errMessage}
                    fullWidth 
                    id="password"
                    label="Senha"
                    type="password"
                    variant="standard"
                    value={password}
                    onChange={e => onPassword(e.target.value)}
                />
            </FormControl>
        </div>
    );
}