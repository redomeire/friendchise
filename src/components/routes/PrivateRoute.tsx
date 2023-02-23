import useLocalStorage from "@/hooks/useLocalStorage";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const [token] = useLocalStorage('token', '')

    if(token) return <Outlet/>

    return <Navigate to="/register"/>
}

export default PrivateRoute;
