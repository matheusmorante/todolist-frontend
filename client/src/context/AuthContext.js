import { createContext, useContext, useEffect, useState } from 'react';
import authService from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const user = await authService.getSessionUser();
            setUser(user);
            setLoading(false);
        };

        checkAuth();
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser, loading }}>{children}</AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}