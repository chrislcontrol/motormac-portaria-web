import { createContext, useEffect, useState } from "react";
import { makeAuthApi } from "../apis/backend/factories";
import LocalStorage from "../utils/LocalStorage";

const initialValue = {
    isAuthenticated: false, 
    setToken: () => {},
    token: localStorage.token || "",
    loading: false,
    setLoading: () => {}
};

export interface IAuthContext {
    isAuthenticated: boolean
    token?: string | null
    setToken: (newToken: string) => void
    loading: boolean
    setLoading: (isLoading: boolean) => void
};


export const AuthContext = createContext<IAuthContext>(initialValue); 


export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [token, setToken] = useState(initialValue.token);
    const [loading, setLoading] = useState(initialValue.loading)

    useEffect(() => {
        if (token) {
            setLoading(true)
            const authApi = makeAuthApi()
            authApi.validateToken(token)
                .catch((response) => {
                    if (!response.ok) {
                        setToken("");
                        LocalStorage.setToken("")
                    };
                }).finally(() => setLoading(false));
        };
        
    }, [token]);

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!token, token, setToken, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    );
    
};

