import React, { useState } from 'react';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import './UsernameStyle.css';

interface IUsernameProps {
    err: boolean,
    handleUsername: (arg: string) => void
}

export const Username: React.FC<IUsernameProps> = ({ handleUsername, err }) => {
    const [username, setUsername] = useState('');

    function onUsername(input: string){
        setUsername(input);
        handleUsername(input);
    }

    return (
        <div className="username">
            <FormControl sx={{ width: '100%' }}>
                <TextField
                    fullWidth 
                    error={err}
                    id="username"
                    label="Usuário"
                    variant="standard"
                    value={username}
                    onChange={e => onUsername(e.target.value)}
                />
            </FormControl>
        </div>
    );
}