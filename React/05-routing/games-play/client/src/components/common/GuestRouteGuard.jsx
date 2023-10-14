import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export function GuestRouteGuard() {
    const { isAuthenticated } = useAuthContext();
    if (isAuthenticated) {
        return <Navigate to='/' />
    }
    
    return <Outlet />
}