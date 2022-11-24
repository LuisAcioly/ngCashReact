import { Dashboard } from "../dashboard/Dashboard";
import { MyAccountContent } from "./my-account-content/MyAccountContent";


export const MyAccount = () => {
    return(
        <Dashboard content={<MyAccountContent/>}/>
    );
}