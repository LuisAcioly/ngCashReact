import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../shared/contexts/Auth/AuthContext';
import { useApi } from '../../../../shared/hooks/UseApi';
import './BalanceDisplayStyle.css';

export const BalanceDisplay = () => {

    const [balanceValue, setBalanceValue] = useState('')

    const api = useApi();
    const context = useContext(AuthContext);

    useEffect(() => {
        const getBalance = async () => {
            const response = await api.getBalance(context.user?.accountId);
            setBalanceValue(response.data);
        }

        getBalance();
    }, []);

    return (
        <div className="displayContent">
            <div className="account">
                <h1>Conta:</h1>
            </div>
            <div className="balance">
                <h1>R$ {balanceValue}</h1>
            </div>
        </div>
    );
}