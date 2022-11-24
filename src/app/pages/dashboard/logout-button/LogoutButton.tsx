import { IconButton } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../shared/contexts/Auth/AuthContext';
import LogoutIcon from './LogoutIcon';

export const LogoutButton = () => {

    const context = useContext(AuthContext);
    const navigate = useNavigate();

    function changePage(){
        context.logout();
        navigate('/');
    };

    return(
        <IconButton aria-label="Deslogar" component="label" onClick={() => changePage()}>
            <LogoutIcon />
        </IconButton>
    );
}