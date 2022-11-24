import { useState } from 'react';
import { AllTransactionsButton } from './all-transactions-button/AllTransactionsButton';
import { CashInButton } from './cash-in-button/CashInButton';
import { CashOutButton } from './cash-out-button/CashOutButton';
import './MyTransactionsContentStyle.css'
import { TransactionsTable } from './transactions-table/TransactionsTable';

export const MyTransactionsContent = () => {
    const [allButton, setAllButton ] = useState(true);
    const [cashInButton, setCashInButton ] = useState(false);
    const [cashOutButton, setCashOutButton ] = useState(false);
    const [transactions, setTransations] = useState<any>(null);

    async function handleClick(all: boolean, cashin: boolean, cashout: boolean, transactions: any){
        setTransations(await transactions);
        console.log(transactions);
        setAllButton(all);
        setCashInButton(cashin);
        setCashOutButton(cashout);
    }

    return (
        <div className="myTransactionsContent">
            <div className="content">
                <div className="title">
                    <h1>Minhas transações:</h1>
                    <div className="trans-actions-buttons">
                        <AllTransactionsButton handleAllButton={handleClick} enableButton={allButton}/>
                        <CashInButton handleCashInButton={handleClick} enableButton={cashInButton}/>
                        <CashOutButton handleCashOutButton={handleClick} enableButton={cashOutButton}/>
                    </div>
                </div>
                <div className="table">
                    <TransactionsTable transactions={transactions}/>
                </div>
            </div>
        </div>
    );
}