import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

interface User{
    user_id: number;
    role: string;
}

interface AuthContextType{
    user: User | null;
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if(token){
            try{
                const decoded: any = jwtDecode(token);
                setUser({user_id: decoded.user_id, role: decoded.role});
            } catch (err) {
                console.error('Invalid token: ', err);
                localStorage.removeItem('jwt');
            }
        }
    }, []);

    const login = (token: string) => {
        localStorage.setItem('jwt', token);
        const decoded: any = jwtDecode(token);
        setUser({user_id: decoded.user_id, role: decoded.role});
    }

    const logout = () => {
        localStorage.removeItem('jwt');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, isLoggedIn: !!user, login ,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === undefined){
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}