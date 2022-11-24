import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../shared/contexts/Auth/AuthContext';
import { useApi } from '../../../../shared/hooks/UseApi';
import TransactionsService from '../../../../shared/services/TransactionsService';

interface ICashOutButtonProps {
    enableButton: boolean,
    handleCashOutButton: (all: boolean, cahsIn: boolean, cashOut: boolean, transactions: any) => void
}

export const CashOutButton: React.FC<ICashOutButtonProps> = ({ enableButton, handleCashOutButton }) => {
    const [disableButton, setDisableButton ] = useState(false);
    const api = useApi();
    const context = useContext(AuthContext);
    const transactionsService = TransactionsService;

    useEffect(() => {
        setDisableButton(enableButton);
      }, [enableButton]);

    async function handleClick(){
        if(disableButton){
            setDisableButton(false);
        }
        else{
            setDisableButton(true);
        }

        const response = await api.filterCashOutTransactions(context.user?.accountId);
        const feedback = transactionsService.getTransactions(response.data);
        handleCashOutButton(false, false, true, feedback);
    }
    
    const CashOutButton = styled(Button)<ButtonProps>(() => ({
        width: '20vw',
        color: '#000',
        border: '3px solid',
        borderRadius: '50px',
        borderColor: '#000',
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginLeft: '2vw',
        '&:hover': {
            border: '2px solid',
            borderColor: '#000',
          backgroundColor: '#c9c9c9',
        },
      }));
    
    return (
        <CashOutButton variant="outlined" disabled={disableButton} onClick={handleClick}>
            Saidas
        </CashOutButton>
    );
}