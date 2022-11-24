import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Main, Login, Signup } from "../pages";
import { MyAccount } from "../pages/my-account/MyAccount";
import { MyTransactions } from "../pages/my-transactions/MyTransactions";
import { NewTransaction } from "../pages/new-transaction/NewTransaction";
import { SucessPage } from "../pages/sucess-page/SucessPage";
import { AuthProvider } from "../shared/contexts/Auth/AuthProvider";
import { RequiredAuth } from "../shared/contexts/Auth/RequiredAuth";

export const Router = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/sucess" element={<SucessPage/>}/>
                    <Route path="/dashboard/my-account" element={
                        <RequiredAuth>
                            <MyAccount/>
                        </RequiredAuth>
                    }/>
                    <Route path="/dashboard/my-transactions" element={
                        <RequiredAuth>
                            <MyTransactions />
                        </RequiredAuth>
                    }/>
                    <Route path="/dashboard/new-transaction" element={
                        <RequiredAuth>
                            <NewTransaction />
                        </RequiredAuth>
                    }/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}