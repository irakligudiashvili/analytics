import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import type { JSX } from "react";

interface ProtectedRouteProps{
    children: JSX.Element;
    requiredRole?: string;
}

function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps){
    const {user, isLoggedIn } = useAuth();

    if(!isLoggedIn){
        return <Navigate to='/login' />
    }

    if (requiredRole && user?.role !== requiredRole){
        return <Navigate to='/' />
    }

    return children
}

export default ProtectedRoute