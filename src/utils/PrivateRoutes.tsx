import { useAppSelector } from "@hooks/hooks";
import { CircularProgress } from "@mui/material";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    const loading = useAppSelector(state => state.user.pending);
    const token = localStorage.getItem('token');

    return (
        loading 
            ? <CircularProgress />
            : token ? <Outlet /> : <Navigate to="/" />
    );
}

export default PrivateRoutes;