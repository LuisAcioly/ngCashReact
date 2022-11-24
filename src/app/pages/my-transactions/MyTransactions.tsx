import { Dashboard } from "../dashboard/Dashboard";
import { MyTransactionsContent } from "./my-transactions-content/MyTransactionsContent";


export const MyTransactions = () => {
    return(
        <Dashboard content={<MyTransactionsContent />}/>
    );
}