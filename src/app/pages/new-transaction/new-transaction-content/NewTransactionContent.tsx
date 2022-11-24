import { useState } from 'react';
import './NewTransactionStyle.css';
import { TransactionButton } from './transaction-button/TransactionButton';
import { UsernameField } from './username-field/UsernameField';
import { ValueField } from './value-field/ValueField';

export const NewTransactionContent = () => {

    const [username, setUsername] = useState('');
    const [value, setValue] = useState(0);
    const [err, setErr] = useState(false);
    const [errMessage, setErrMessage] = useState('');

    function handleUsername(user: string){
        setUsername(user)
    }

    function handleValue(num: number){
        setValue(num);
    }

    function handleMessage(message: string){
        console.log(message)
        setErr(true);
        setErrMessage(message);
    }

    return (
        <div className="newTransactionContent">
            <div className="newTransactionBody">
                <div className="newTransactionTitle">
                    <h1>Realizar transação:</h1>
                </div>
                <div className="textFields">
                    <div className="userField">
                        <UsernameField handleUsername={handleUsername}/>
                    </div>
                    <div className="valueField">
                        <ValueField handleValue={handleValue} message={errMessage} error={err}/>
                    </div>
                    <TransactionButton username={username} value={value} handleMessage={handleMessage}/>
                </div>
                
            </div>
        </div>
    );
}