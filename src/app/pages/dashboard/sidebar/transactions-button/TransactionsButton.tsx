import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TransactionIcon from './TransactionIcon';

export const TransactionsButton = () => {

  const navigate = useNavigate();

    function changePage(){
        navigate('/dashboard/my-transactions');
    };

    return(
        <ListItemButton component="a" onClick={() => changePage()} >
              <ListItemIcon sx={{ fontSize: 15 }}>
                <TransactionIcon/>
              </ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="Minhas transações"
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