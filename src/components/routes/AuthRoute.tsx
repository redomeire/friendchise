import useLocalStorage from "@/hooks/useLocalStorage";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
    const [token] = useLocalStorage('token', '')
    
    if (token) 
        return <Navigate to="/" />
        
    return <Outlet />
}

export default AuthRoute;
