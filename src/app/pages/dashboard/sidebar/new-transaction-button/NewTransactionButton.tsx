import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NewTransactionIcon from './NewTransactionIcon';

export const NewTransactionButton = () => {

  const navigate = useNavigate();

    function changePage(){
        navigate('/dashboard/new-transaction');
    };

    return(
        <ListItemButton component="a" onClick={() => changePage()} >
              <ListItemIcon sx={{ fontSize: 15 }}>
                <NewTransactionIcon/>
              </ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="Nova transação"
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