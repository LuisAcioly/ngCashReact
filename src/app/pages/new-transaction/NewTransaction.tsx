import { Dashboard } from "../dashboard/Dashboard";
import { NewTransactionContent } from "./new-transaction-content/NewTransactionContent";

export const NewTransaction = () => {
    return (
        <Dashboard content={<NewTransactionContent/>}/>
    );
}