import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../shared/contexts/Auth/AuthContext";
import CashIn from "./CashinIcon";
import CashOut from "./CashoutIcon";

interface ITableProps {
    transactions: any,
}

export const TransactionsTable: React.FC<ITableProps> = ({transactions}) => {
    const [transactionsList, setTransationsList] = useState<any>([]);
    const context = useContext(AuthContext);
    const [username, setUsername] = useState(context.user?.username);
    
    useEffect(() => {
        if(transactions !== null){
            setTransationsList(transactions);
        }
    }, [transactions]);
      
    return(
        <TableContainer sx={{ width: "max-content"}} component={Paper}>
            <Table sx={{ width: "max-content"}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{ width: 100}}>Tipo</TableCell>
                        <TableCell align="center" sx={{ width: 200}}>Data</TableCell>
                        <TableCell align="center" sx={{ width: 200}}>Origem</TableCell>
                        <TableCell align="center" sx={{ width: 200}}>Destino</TableCell>
                        <TableCell align="center" sx={{ width: 200}}>Valor</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {transactionsList.map((transaction: any) => (
                    <TableRow
                    key={transaction.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell align="center" sx={{ width: 100}}>{
                        transaction.debitedAccount === username ? <CashOut/> : <CashIn/>
                    }</TableCell>
                    <TableCell align="center" sx={{ width: 200}}>{transaction.date}</TableCell>
                    <TableCell align="center" sx={{ width: 200}}>{transaction.debitedAccount}</TableCell>
                    <TableCell align="center" sx={{ width: 200}}>{transaction.creditedAccount}</TableCell>
                    <TableCell align="center" sx={{ width: 200}}>{transaction.value}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}