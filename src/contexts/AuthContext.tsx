import { createContext, useState } from "react";

export interface AuthContextInterface {
    isAuthenticated: boolean
    token?: string | null
    setToken: (newToken: string) => void
};

const defaultState = {
    isAuthenticated: false, 
    setToken: (newToken: string) => {}
};


export const AuthContext = createContext<AuthContextInterface>(defaultState); 


export function AuthProvider({ children }: { children: JSX.Element }) {
    const [token, _setToken] = useState(localStorage.getItem("token"));

    const setToken = (newToken: string) => _setToken(newToken)

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!token, token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
    
};

