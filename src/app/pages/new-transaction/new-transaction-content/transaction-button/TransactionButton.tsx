import { Button, ButtonProps, styled } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../../../shared/contexts/Auth/AuthContext";
import { useApi } from "../../../../shared/hooks/UseApi";

interface ITransactionButtonProps{
    username: string,
    value: number,
    handleMessage: (arg: string) => void
}

export const TransactionButton: React.FC<ITransactionButtonProps> = ({username, value, handleMessage}) => {

    const api = useApi();
    const context = useContext(AuthContext);

    async function onTransaction(){

        const debitedUsername = context.user?.username;
        const response = await api.cashOut(debitedUsername, username, value);
        
        if(response.statusText === 'OK'){
            alert("Transassão realizada com sucesso!");
        }
        else {
            handleMessage(response.data);
        }
    }

    const TransactionButton = styled(Button)<ButtonProps>(() => ({
        width: '100%',
        color: '#000',
        border: '3px solid',
        borderColor: '#000',
        backgroundColor: '#fff',
        alignSelf: 'center',
        '&:hover': {
            border: '2px solid',
            borderColor: '#000',
          backgroundColor: '#c9c9c9',
        },
      }));

    return(
        <div className="transactionButton">
            <TransactionButton onClick={onTransaction} variant="outlined">Tranferir</TransactionButton>
        </div>
    );
}