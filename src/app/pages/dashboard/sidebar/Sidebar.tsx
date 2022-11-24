import { List, ListItem } from '@mui/material';
import { HomeButton } from './home-button/HomeButton';
import { NewTransactionButton } from './new-transaction-button/NewTransactionButton';
import './SidebarStyle.css';
import { TransactionsButton } from './transactions-button/TransactionsButton';

export const Sidebar = () => {
    return(
        <div className="sidebar">
             <List>
                <ListItem>
                    <HomeButton/>
                </ListItem>
                <ListItem>
                    <TransactionsButton/>
                </ListItem>
                <ListItem>
                    <NewTransactionButton/>
                </ListItem>
            </List>
        </div>
    );
}