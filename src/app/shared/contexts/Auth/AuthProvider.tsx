import { useState } from "react";
import { useApi } from "../../hooks/UseApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}: {children: JSX.Element}) => {

    const [user, setUser] = useState<User | null>();
    const api = useApi();

    const login = async (username: string, password: string) => {
        
        const data = await api.login(username, password);

        if(data === undefined){
            return false;
        }

        setUser(data.user);
        setToken(data.token);
        return true;
        
    }

    const logout = async () => {
        await api.logout();
        setUser(null)
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    };

    return(
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}