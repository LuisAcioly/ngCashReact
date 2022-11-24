import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from './HomeIcon';

export const HomeButton = () => {

    const navigate = useNavigate();

    function changePage(){
        navigate('/dashboard/my-account');
    };

    return(
        <ListItemButton component="a" onClick={() => changePage()} >
              <ListItemIcon sx={{ fontSize: 15 }}>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="Minha conta"
                primaryTypographyProps={{
                  fontSize: 15,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                  color: '#fff',
                }}
              />
        </ListItemButton>
    );
}