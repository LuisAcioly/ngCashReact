import { createContext } from "react";
import { User } from "../../types/User";

export type AuthContextType = {
    user: User | null | undefined;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);